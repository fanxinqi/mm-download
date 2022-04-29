import EventEmitter from "./event-emitter";

declare global {
  interface Window {
    chrome: any;
  }
}
let mmNavigator: any;

window.chrome = window.chrome || {};
mmNavigator = window.navigator;

class Downloader extends EventEmitter {
  private xhr: XMLHttpRequest;
  private downloadName: string;
  private downloadUrl: string;
  constructor(downloadUrl: string, downloadName: string) {
    super();
    this.initOptions(downloadUrl, downloadName);
    this.initXhr();
  }

  private initOptions(downloadUrl: string, downloadName: string) {
    this.downloadName = downloadName;
    this.downloadUrl = downloadUrl;
  }

  private initXhr() {
    this.xhr = new XMLHttpRequest();
    this.xhr.responseType = "blob";
    this.xhr.onprogress = (event) => {
      this.emit("process", event);
    };
    this.xhr.onreadystatechange = (event) => {
      if (this.xhr.readyState === 4 && this.xhr.status === 200) {
        if (typeof window.chrome !== "undefined") {
          // chrome
          const link = document.createElement("a"); // 创建a标签
          link.href = URL.createObjectURL(this.xhr.response);
          link.download = this.downloadName;
          link.click(); // js点击完成最终本地保存
        } else if (mmNavigator?.msSaveBlob) {
          // IE version
          const blob = new Blob([this.xhr.response], {
            type: "application/force-download",
          });
          mmNavigator.msSaveBlob(blob, this.downloadName);
        } else {
          // Firefox version
          const file = new File([this.xhr.response], this.downloadName, {
            type: "application/force-download",
          });
          window.open(URL.createObjectURL(file));
        }
      }
    };
    this.xhr.open("GET", this.downloadUrl);
  }

  public start() {
    this.xhr.send();
  }
}

export default Downloader;
