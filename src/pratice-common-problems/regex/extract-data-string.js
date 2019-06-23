let strg = "some text is a form of map: (AB:1;CD:2;EF:3)";

function extractData(str) {
    let reg = /(([A-Z]{1,}))\:([0-9]{1,})/gi;
    let matches = str.match(reg);
    
    return matches;
}

let matches = extractData(strg);
console.log(matches);

var str = "";
for (var i = 0; i < matches.length; i++) {
    var p = matches[i].split (":");
    str += "Letters: " + p[0] + " - Number: " + p[1] + "\n";
}

console.log(str);