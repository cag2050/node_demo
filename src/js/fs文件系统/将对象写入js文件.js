var fs = require("fs");

let obj = {
    name: 'cag2050',
    age: 30
}

console.log("准备写入文件");
fs.writeFile('obj_str.js', JSON.stringify(obj), function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('obj_str.js', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});