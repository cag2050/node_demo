/**
 * Created by cag on 2016/12/2.
 */
var path = require('path');
console.log("当前目录是：" + __dirname);
console.log("当前运行文件是：" + __filename);
console.log("给定文件路径的目录："+path.dirname("/data/soft/webstorme/install.exe"));
console.log("给定文件路径的目录："+path.dirname("E:/WebstormProjects/node_demo"));
console.log("给定文件路径的文件名："+path.basename("/data/soft/webstorme/install.exe"));
console.log("给定文件路径的文件名："+path.basename("E:/WebstormProjects/node_demo/main.js"));
console.log(path.parse('/home/user/dir/fileName.js')); // 路径的相关信息,linux系统
console.log(path.parse('D:/dir/fileName.js')); // 路径的相关信息,windows系统
