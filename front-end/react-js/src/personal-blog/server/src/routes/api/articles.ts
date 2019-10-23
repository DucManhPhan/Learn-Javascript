import mongoose from 'mongoose';
import express from 'express';


const router = express.Router();
const Articles = mongoose.model('Articles');

router.post('/', (req: any, res: any, next: any) => {
    const { body } = req;

    if(!body.title) {
        return res.status(422).json({
            errors: {
                title: 'is required',
            },
        });
    }

    if(!body.author) {
        return res.status(422).json({
            errors: {
                author: 'is required',
            },
        });
    }

    if(!body.body) {
        return res.status(422).json({
            errors: {
                body: 'is required',
            },
        });
    }

    const finalArticle = new Articles(body);
    return finalArticle.save()
                       .then(() => res.json({ article: finalArticle.toJSON() }))
                       .catch(next);
});

router.get('/', (req: any, res: any, next: any) => {
  return Articles.find()
                 .sort({ createdAt: 'descending' })
                 .then((articles) => {
                     console.log('Value of articles in mongodb: ', articles);
                     res.json({ articles: articles.map(article => article.toJSON()) })
                 })  
                 .catch(next);
});

router.param('id', (req, res, next, id) => {
    return Articles.findById(id, (err, article) => {
        if(err) {
            return res.sendStatus(404);
        } else if(article) {
            // @ts-ignore
            req.article = article;
            return next();
        }
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
    return res.json({
        // @ts-ignore
        article: req.article.toJSON(),
    });
});

router.patch('/:id', (req, res, next) => {
    const { body } = req;

    if(typeof body.title !== 'undefined') {
            // @ts-ignore
            req.article.title = body.title;
    }

    if(typeof body.author !== 'undefined') {
        // @ts-ignore
        req.article.author = body.author;
    }

    if(typeof body.body !== 'undefined') {
        // @ts-ignore
        req.article.body = body.body;
    }

    // @ts-ignore
    return req.article.save()
                       // @ts-ignore
                      .then(() => res.json({ article: req.article.toJSON() }))
                      .catch(next);
});

router.delete('/:id', (req, res, next) => {
    // @ts-ignore
    return Articles.findByIdAndRemove(req.article._id)
        .then(() => res.sendStatus(200))
        .catch(next);
});

module.exports = router;