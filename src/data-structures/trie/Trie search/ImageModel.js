class ImageModel {

    constructor(id, name, status, minDisk, minRam, diskFormat, containerFormat) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.minRam = minRam;
        this.minDisk = minDisk;
        this.diskFormat = diskFormat;
        this.containerFormat = containerFormat;
    }
}

module.exports = ImageModel;