// import ImageModel from './ImageModel';
let TrieSearch = require('trie-search');

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

let arr = [
    new ImageModel(1, 'Software Image 001', 'ACTIVE', 5096, 1024, 'RAW', 'BARE'),
    new ImageModel(2, 'Software Image 002', 'ACTIVE', 4562, 1024, 'VHDX', 'OVF'),
    new ImageModel(3, 'Software Image 003', 'ACTIVE', 5125, 1024, 'VDI', 'AKI'),
    new ImageModel(4, 'Software Image 004', 'ACTIVE', 5785, 1024, 'ISO', 'BARE'),
    new ImageModel(5, 'Software Image 005', 'ACTIVE', 5654, 1024, 'ISO', 'AMI'),
    new ImageModel(6, 'Software Image 006', 'ACTIVE', 56941, 1024, 'VDI', 'OVA'),
    new ImageModel(7, 'Software Image 007', 'ACTIVE', 509612, 1024, 'ARI', 'OVA'),
    new ImageModel(8, 'Software Image 008', 'ACTIVE', 50963, 1024, 'VDI', 'AMI'),
    new ImageModel(9, 'Software Image 009', 'ACTIVE', 509655, 1024, 'UNRECOGNIZED', 'DOCKER'),
    new ImageModel(10, 'Software Image 0010', 'ACTIVE',  5121212, 1024, 'AMI', 'UNRECOGNIZED'),
    new ImageModel(11, 'Software Image 0011', 'ACTIVE',  501212, 1024,  'VMDK', 'AKI')
];


let ts = new TrieSearch(['name', 'status', 'minDisk', 'minRam', 'diskFormat', 'containerFormat'], {
    idFieldOrFunction: 'id'
});

ts.addAll(arr);

// console.log(ts.get(['soft'], TrieSearch.UNION_REDUCER));
let result = ts.get('UNRECOGNIZED', TrieSearch.UNION_REDUCER);
let result_1 = ts.get('AMI', TrieSearch.UNION_REDUCER);

let result_2 = ts.get('Software Image', TrieSearch.UNION_REDUCER);
console.log('The end');
