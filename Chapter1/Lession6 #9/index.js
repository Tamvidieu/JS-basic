let nhan = (a,b,callback) => {
    let s = a+b;
    callback(s);
}
let print = (text) => {
    console.log(text);
    return;
}
nhan(2,4,print)