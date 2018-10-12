HyperText Transfer protocol

两个报文
----

报文就是我们HTTP的工作日志

请求报文的结构

别忘了是欧洲的一个博士发明的，他的请求报文颇有英文语法的习惯

```js
POST http//:xxx.com HTTP/1.1
Connection: keep-alive
Content-Type: application/x-www-form-urlencoded
Content-Length: 16

name=zhangxu&age=18
```

就像是在说

```js
POST data to http//:xxx.com on HTTP/1.1
键值对形式的说明书：...

data如下：...
```

简单的http！名副其实有木有

响应报文的结构

```js
HTTP/1.1 200 OK
Date: Tue, 10 Jul 2012 06:50:15 GMT
Content-length: 362
Content-Type: text/html

<html>...
```

无状态
---

HTTP是无状态的协议，就是说一次请求过后，服务器和客户端都忘了自己干过什么。

这还是为了简单，没错，越是简单，就会有越多的人使用

但是涉及到了需要保存状态的需求

而cookie应运而生

cookie
------

一直感兴趣为啥cookie会有这个名字，保存个状态和饼干有啥关系

其实就像是工卡一样，让门卫（服务器）记住谁是滴滴的员工是很困难的，出示一下工卡（cookie），哦~原来是你啊~

所以权利更多在服务器一端，是服务器通过一个叫Set-cookie的字段，让客户端保存cookie，就是让员工带上工卡

客户端下次请求添加上cookie，服务器就知道你的相应的状态了

具体的字段之后了解

请求方法
----

默写一遍。。。

GET、POST、PUT、DELETE、HEAD、OPTION、TARCE

忘了一个CONNECT 在响应成功后，进入网络隧道

TARCE追踪路径

另外，书中指出的GET 和POST区别是

POST的主要目的不在于获取响应内容，而是用来传输实体的主体

这里和应用中有些理解上的区别，可能书中是从设计的角度进行说明的吧

扩展(1)

持久连接
----

之前是温故，这一条就是知新了

这是HTTP1.1和HTTP1.0的一个重要区别

简单说就是，原来是一个请求建立一次TCP连接，而HTTP1.1是默认都是持久连接的

解决的痛点：浏览器开业面的速度变快了，服务端只要建立连接，就可以一次性的返回请求的资源了

管线化：有了持久连接，无需等待前一个请求的返回，就可以发下一个请求，我的理解就是异步的强化

HTTP2.0的重要特性(2)

扩展：保持主线进度，又想要完整知识结构的折中方案

1、[get和post区别](https://www.zhihu.com/question/28586791)

2、[http2.0](https://developers.google.com/web/fundamentals/performance/http2/?hl=zh-cn)





