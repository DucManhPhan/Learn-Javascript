"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IconData = /** @class */ (function () {
    function IconData(iconId, name, title, image, size, type, categoryId, miniImage, state, xPos, yPos, heading, code, parentId, xPos3D, yPos3D, categoryTitle, categoryName) {
        this.iconId = 0;
        this.name = '';
        this.title = '';
        this.image = '';
        this.size = 0;
        this.type = '';
        this.categoryId = '';
        this.miniImage = '';
        this.state = 0;
        this.xPos = 0;
        this.yPos = 0;
        this.heading = 0;
        this.code = 0;
        this.parentId = -1;
        this.xPos3D = 0;
        this.yPos3D = 0;
        this.categoryTitle = '';
        this.categoryName = '';
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
    IconData.fromJson = function (jsonData) {
        return new IconData(jsonData.IconId, jsonData.Name, jsonData.Title, jsonData.Image, jsonData.Size, jsonData.Type, jsonData.CategoryId, jsonData.MiniImage, jsonData.State, jsonData.xPos, jsonData.yPos, jsonData.Heading, jsonData.Code, jsonData.ParentId, jsonData.xPos3D, jsonData.yPos3D, jsonData.CategoryTitle, jsonData.CategoryName);
    };
    return IconData;
}());
exports.default = IconData;
//# sourceMappingURL=IconData.js.map