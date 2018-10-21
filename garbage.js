// //接受前端上传来的文件
// const multer = require('multer');
// const fsSuper = require('./API/fsSuper');
// const doConfig = require('./API/doConfig');
// const configDomain = 'http://localhost:3000/';


// let pathSpace = ''; //文件储存
// let formData = {};


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, pathSpace);
//     },
//     filename: function (req, file, cb) {
//       console.log(4444, file);
//       const filename = (file.originalname.split('.').pop() == 'zip') ? 'fornow.zip' : 'origin.sketch';
//       cb(null, filename);
//     }
// });

// const upload = multer({ storage: storage });


// class dataManager {
//   constructor() {
//     this.fileNum = 0;
//     this.config = {};
//     this.pathSpace = ''
//   }

//   setPathSpace(data) {
//     const { type, timeId } = data

//     //创建路径
//     pathSpace = `store/${type}/${timeId}`;
//     this.pathSpace = pathSpace;
//     //按路径添加文件夹
//     fsSuper.mkdirSync(pathSpace, 0, err => err ? console.log('储存文件创建失败') : console.log('储存文件创建成功'));
//   }

//   handler(data, res) {
//     const { originalname } = data
//     const fileExt = originalname.split('.').pop();

//     if (fileExt == 'sketch'){

//       this.setSketchConfig(data, res)
//     } else if (fileExt == 'zip') {

//       this.setZipConfig(data, res)
//     }
//   }

//   setSketchConfig(data, res) {
//     Object.assign(this.config, {
//       projectName: data.name,
//       explain: data.explain,
//       updataTime: data.timeId,
//       path: this.pathSpace,
//       configDomain,

//       sketchName: data.originalname,
//       sketchSize: data.size,
//     });

//     console.log('处理sketch文件', this.config)
//     res.json('sketch处理完成');
//   }

//   setZipConfig(data, res) {
//     Object.assign(this.config, {
//       projectName: data.name,
//       explain: data.explain,
//       updataTime: data.timeId,
//       path: this.pathSpace,
//       configDomain,

//       zipName: data.originalname,
//       zipSize: data.size,
//       htmlPath: `${this.pathSpace}/static/index.html`
//     });

//     console.log('处理zip文件', this.config)
//   }

//   commitConfig(data, res) {
//     let figJson = doConfig.read();
//     figJson.files[data.type][data.timeId] = this.config;

//     const checkmsg = fsSuper.afterZip(pathSpace, this.config.zipName, 'upload');

//     if (checkmsg === true) {//文件合格

//       delete figJson.error;
//       doConfig.write(figJson);
//       // console.log('新建配置', project);
//       res.json(figJson);
//     } else if (typeof checkmsg == 'string'){
//       delete figJson.files[formData.type][formData.timeId];
//       console.log('文件不符合标准');
//       figJson.error = checkmsg;
//       res.json(figJson);
//     }
//   }

// }

// const DataManager = new dataManager();

// function handleFile(file, data, res) {
//   const config = {
//     ...file, 
//     ...data,
//   }
//   DataManager.fileNum = DataManager.fileNum + 1;

//   //第一次文件上传请求时，要初始化路径
//   if(DataManager.fileNum == 1) {
//     DataManager.setPathSpace(config);
//   }

//   //处理文件
//   DataManager.handler(config, res);

//   //第二次文件上传请求时，要更新配置
//   if (DataManager.fileNum == 2) {
//     DataManager.commitConfig(config, res)
//   }
// }

// module.exports = {
//   upload: upload,
//   func: function (req, res) {

//     req.on('data', function(data) {
//       // demoData(req, res, data);
//       // handleForm(req, res, data);
//     });

//     if(req.file) {
//       // demoFile(req.file, res);
//       handleFile(req.file, req.body, res);
//     }

//   }
// };
