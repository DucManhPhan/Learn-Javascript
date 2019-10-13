"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var util_1 = __importDefault(require("util"));
// convert fs.readFile into Promise version
var readFile = util_1.default.promisify(fs_1.default.readFile);
var FileUtils = /** @class */ (function () {
    function FileUtils() {
    }
    FileUtils.getData = function () {
        if (FileUtils.path === "") {
            return '';
        }
        if (!FileUtils.isValidFile()) {
            return '';
        }
        return readFile(this.path, { encoding: 'utf-8' });
    };
    FileUtils.isValidFile = function () {
        return fs_1.default.existsSync(this.path)
            || fs_1.default.lstatSync(this.path).isFile();
    };
    FileUtils.path = './assets/data/data.json';
    return FileUtils;
}());
exports.default = FileUtils;
//# sourceMappingURL=FileUtils.js.map