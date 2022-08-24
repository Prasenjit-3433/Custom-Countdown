# Custom-Countdown
A Custom Countdown App -- Built with Date, LocalStorage

Tech Stack: HTML, CSS, Vanilla JS, LocalStorage.


*** IMPLEMENTATION ***
 1. TASK - Video Background: Used `video` element with `source` element to link video file. 
 To remove the horizontal scroll, we give it a class `video-background` where we set `position` to `fixed`,
 distance 0 from `right`, `buttom`. Then to bring the video litte from `top`, `left`, we set some style to `video` element like we set `position` to `absolute`, distance is 50% of viewpost from `top`, `left`. Then
 shift it along top-left corner by 50%. Finally, added with of 100vw to class `video-background`.
 2. For Mobile (Large Smartphone): we set `height` to 100vh & `object-fit` to `cover` so that the video doesn't
 get distored. Now the clock in the video is off the page. To fix it, we need to shift the video position horizontally within the frame. So set  `object-position` to 70% to shift it horizontally by 70%.
 3. Adding `overlay` over the video to mask any kind of lack of video quality & it makes text easier to read. 
