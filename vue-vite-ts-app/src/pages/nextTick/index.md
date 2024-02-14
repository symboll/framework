```md
浏览器一帧要做哪些事情

1. 处理用户的事件，event: click, input, change 等

2. 执行定时器任务

3. 执行 `requestAnimationFrame`

4. 执行dom的回流与重绘

5. 计算更新图层的绘制指令

6. 绘制指令合并主线程，如果有空余时间会执行 `requestidlecallback`
```