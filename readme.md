## 下载器

js 文件下载器：解决 a 标签默认下载没法定制进度条等问题

# 功能

- 文件下载
- 进度通知

# 使用

```javascript
import FileDownloader from "mm-file-download";
const fileDownloader = new FileDownloader(
  "http://10.6.1.165:8000/static/test.pdf",
  "测试.pdf"
);
fileDownloader.on("process", (event) => {
  console.log(`下载进度: ${event.loaded / event.total}`);
  console.log(`已下载大小: ${event.loaded}`);
  console.log(`文件总大小: ${event.total}`);
  if (event.total === event.loaded) {
    console.log(`已下载完毕`);
  }
});

fileDownloader.start();
```
