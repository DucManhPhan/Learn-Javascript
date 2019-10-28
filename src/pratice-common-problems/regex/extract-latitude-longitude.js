

let str = "-83.476192468547(N) 35.7756865651(E)";
let reg = /([-+\s]?\d+\.\d+)\s*(\([NE]\))/gi;

var match = reg.exec(str);

while(match !== null) {
    console.log(match[1]);
    match = reg.exec(str);
}