var moduleArr = [
  function(module,exports){
    module.exports = "aaaaa"
  },function(module,exports,webpackRequire){
    var a = webpackRequire(0);
    console.log(a)
  }
];
(function(modules){
  var installedModules = {};
  function webpackRequire(moduleId){
    if(installedModules[moduleId]){
      return installedModules[moduleId].exports;
    }else { //为installedModules里增加一个moduleId，它指向一个对象
      var module = installedModules[moduleId] = {
        i: moduleId,
        l:false,//是否已经load的意思
        exports:{}// 这个模块到底exports出了什么东西，放到这
      }
      modules[moduleId](module,module.exports,webpackRequire)
      module.l = true //表明已经load进了installedModules对象中
      return module.exports;
    }
  }
 webpackRequire(1)
})(moduleArr)