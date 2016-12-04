/**
 * Created by cag on 2016/12/2.
 */
var fs = require('fs');
// 第一个文件保存了第二个文件的文件名，显示第二个文件的内容
fs.readFile("./firstFile2.txt", "utf-8", (err, data)=> {
    if (err) throw err;
    //console.log(data);
    fs.readFile(data, "utf-8", (err, data)=> {
        if (err) throw err;
        console.log(data);
    });
});