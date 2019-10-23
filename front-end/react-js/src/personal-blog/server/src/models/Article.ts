import mongoose from 'mongoose';

const { Schema } = mongoose;

// Need to use collection: name_of_collection in mongodb
// If not use, it does not map data between mongodb and model
const ArticlesSchema = new Schema({
  title: String,
  body: String,
  author: String,
}, { collection: 'Articles', timestamps: true });

ArticlesSchema.methods.toJSON = function() {
  console.log('Happended in Articles model.');
  
  return {
    _id: this._id,
    title: this.title,
    body: this.body,
    author: this.author,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Articles', ArticlesSchema);