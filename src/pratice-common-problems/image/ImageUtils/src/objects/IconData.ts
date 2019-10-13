


export default class IconData {

    iconId: number = 0;

    name: string = '';

    title: string = '';

    image: string = '';

    size: number = 0;

    type: string = '';

    categoryId: string = '';

    miniImage: string = '';

    state: number = 0;

    xPos: number = 0;

    yPos: number = 0;

    heading: number = 0;

    code: number = 0;

    parentId: number = -1;

    xPos3D: number = 0;

    yPos3D: number = 0;

    categoryTitle: string = '';

    categoryName: string = '';

    constructor(iconId: number, name: string,
                title: string, image: string,
                size: number, type: string,
                categoryId: string, miniImage: string,
                state: number, xPos: number,
                yPos: number, heading: number,
                code: number, parentId: number,
                xPos3D: number, yPos3D: number,
                categoryTitle: string, categoryName: string) {
        this.iconId = iconId;
        this.name = name;
        this.title = title;
        this.image = image;
        this.size = size;
        this.type = type;
        this.categoryId = categoryId;
        this.miniImage = miniImage;
        this.state = state;
        this.xPos = xPos;
        this.yPos = yPos;
        this.heading = heading;
        this.code = code;
        this.parentId = parentId;
        this.xPos3D = xPos3D;
        this.yPos3D = yPos3D;
        this.categoryTitle = categoryTitle;
        this.categoryName = categoryName;
    }

    public static fromJson(jsonData: any): IconData {
        return new IconData(jsonData.IconId, jsonData.Name,
                            jsonData.Title, jsonData.Image,
                            jsonData.Size, jsonData.Type,
                            jsonData.CategoryId, jsonData.MiniImage,
                            jsonData.State, jsonData.xPos,
                            jsonData.yPos, jsonData.Heading,
                            jsonData.Code, jsonData.ParentId,
                            jsonData.xPos3D, jsonData.yPos3D,
                            jsonData.CategoryTitle, jsonData.CategoryName);
    }

}