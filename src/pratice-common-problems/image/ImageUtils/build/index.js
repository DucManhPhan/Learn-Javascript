"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var FileUtils_1 = __importDefault(require("./utils/FileUtils"));
var ImageUtils_1 = __importDefault(require("./utils/ImageUtils"));
var IconData_1 = __importDefault(require("./objects/IconData"));
function getData() {
    return FileUtils_1.default.getData();
}
function toImageFile(data, fileName) {
    var b = Buffer.from('PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGhlaWdodD0iMTEwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMTAgMTEwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KIDxnIGlkPSJkcmF3Ij4KICA8ZyBpZD0ic2hhZG93Ij4KICAgPHJlY3Qgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBoZWlnaHQ9IjMzLjE2NyIgc3Ryb2tlPSIjQkZCRkJGIiB4PSIxNS43MzMiIHN0cm9rZS13aWR0aD0iNiIgeT0iMTUuOTM4IiBmaWxsPSJub25lIiB3aWR0aD0iNzguMzc1Ii8+CiAgIDxsaW5lIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjQkZCRkJGIiB5Mj0iNTUiIHN0cm9rZS13aWR0aD0iNiIgeDI9Ijk0LjEwOCIgeTE9IjEwMCIgZmlsbD0ibm9uZSIgeDE9Ijk0LjEwOCIvPgogIDwvZz4KICA8ZyBpZD0ibWFpbiI+CiAgIDxsaW5lIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjRkYwMDAwIiB5Mj0iMTAwIiBzdHJva2Utd2lkdGg9IjYiIHgyPSIxMDAiIHkxPSI1NSIgZmlsbD0ibm9uZSIgeDE9IjEwMCIvPgogICA8cmVjdCBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGhlaWdodD0iNDUiIHN0cm9rZT0iI0ZGMDAwMCIgeD0iMTAiIHN0cm9rZS13aWR0aD0iNiIgeT0iMTAiIGZpbGw9Im5vbmUiIHdpZHRoPSI5MCIvPgogICA8bGluZSBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI0ZGMDAwMCIgeTI9IjQ1IiBzdHJva2Utd2lkdGg9IjYiIHgyPSIxMCIgeTE9IjQ1IiBmaWxsPSJub25lIiB4MT0iMTAwIi8+CiAgPC9nPgogPC9nPgogPHRleHQgZmlsbC1jYXBhY2l0eT0iMCIgc3Ryb2tlLWNhcGFjaXR5PSIwIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDM5LjQ0NDMgMzgpIiBmb250LXNpemU9IjE3IiBmaWxsPSIjMjMxZjIwIiBmb250LWZhbWlseT0iJ1JvYm90by1NZWRpdW0nIj48L3RleHQ+Cjwvc3ZnPgo=', 'base64');
    var s = b.toString('utf8');
    console.log(s);
    fs_1.default.writeFile('./assets/icons/icon.svg', s, function (err) {
        console.log(err);
    });
}
function toIconDatas(rawData) {
    var jsonData = JSON.parse(rawData);
    if (!jsonData.hasOwnProperty('icons')) {
        return [];
    }
    var icons = jsonData.icons;
    if (icons && icons.error) {
        return [];
    }
    var data = icons.data;
    var iconDatas = [];
    data.forEach(function (element) {
        var icon = IconData_1.default.fromJson(element);
        iconDatas.push(icon);
    });
    return iconDatas;
}
function toImage() {
    getData().then(function (rawdata) {
        // convert data
        ImageUtils_1.default.iconDatas = toIconDatas(rawdata);
        // save file
        ImageUtils_1.default.iconDatas.forEach(function (icon) {
            ImageUtils_1.default.toSvgImageFile(icon.image, icon.name);
        });
    });
}
toImage();
//# sourceMappingURL=index.js.map