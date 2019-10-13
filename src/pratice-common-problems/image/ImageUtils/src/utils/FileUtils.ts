import fs from 'fs';
import util from 'util';

// convert fs.readFile into Promise version
const readFile = util.promisify(fs.readFile);

export default class FileUtils {

    public static path: string = './assets/data/data.json';

    public static getData(): any {
        if (FileUtils.path === "") {
            return '';
        }

        if (!FileUtils.isValidFile()) {
            return '';
        }

        return readFile(this.path, { encoding: 'utf-8' });
    }

    private static isValidFile(): boolean {
        return fs.existsSync(this.path)
            || fs.lstatSync(this.path).isFile();
    }

}