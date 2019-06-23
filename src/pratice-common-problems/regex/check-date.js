let str = "2003-11-20";
let reg = /^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

let matches = str.match(reg);
console.log(matches);