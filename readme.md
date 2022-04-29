## 下载器

js文件下载器：解决a标签默认下载没法定制进度条等问题

# 功能

- 文件下载
- 进度通知

# api
 - constructor(downloadUrl: string, downloadName: string): 构造函数
 	downloadUrl 下载链接
	downloadName 下载文件名
 - start(): 开始下载
 - on("process", fn): 下载进度事件
 
# 使用示例
````javascript
     import  FileDownloader from 'mm-file-dl';
     const fileDownloader = new FileDownloader(
        'http://10.6.1.165:8000/static/test.pdf',
        '测试.pdf'
      );
      fileDownloader. on("process", (event) => {
          console.log(`下载进度: ${event.loaded/event.total}`);
          console.log(`已下载大小: ${event.loaded}`);
          console.log(`文件总大小: ${event.total}`);
          if (event.total === event.loaded) {
            console.log(`已下载完毕`); 
          }
      });

      fileDownloader.start();
````
