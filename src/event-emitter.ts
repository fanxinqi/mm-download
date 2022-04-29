interface EventList {
    [key: string]: Array<Function>;
  }
  
  /**
   *  event emitter interface
   */
  interface IEventEmitter {
    /**
     * 监听事件
     * @param eventName
     * @param handle
     */
    on(eventName: string, handle: Function): void;
    /**
     * 触发事件
     * @param eventName
     * @param args
     */
    emit(eventName: string, ...args: any): void;
    /**
     * 注销事件
     * @param eventName
     * @param args
     */
    off(eventName: string, handle: Function): void;
  }
  
  /**
   *  event emitter class
   */
  
  class EventEmitter implements IEventEmitter {
    private eventList: EventList;
    constructor() {
      this.eventList = {};
    }
    on(eventName: string, handle: Function): void {
      if (Array.isArray(this.eventList[eventName])) {
        this.eventList[eventName].push(handle);
      } else {
        this.eventList[eventName] = [handle];
      }
    }
    emit(eventName: string, ...args: any): void {
      this.eventList[eventName].forEach((cb) => {
        cb.apply(null, args);
      });
    }
    off(eventName: string, handle: Function): void {
      var arr = this.eventList[eventName] || [];
      var i = arr.indexOf(handle);
      if (i >= 0) {
        this.eventList[eventName].splice(i, 1);
      }
    }
  }
  
  export default EventEmitter;