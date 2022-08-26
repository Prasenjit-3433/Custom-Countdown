# Custom-Countdown [[Link]](https://customcountdown.000webhostapp.com/)
A Custom Countdown App -- Built with Date, LocalStorage

Tech Stack: HTML, CSS, Vanilla JS, [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

*** SCREENSHOTS ***:


![](Custom%20Countdown%20-%20720.gif)


*** IMPLEMENTATION ***
 * Added `video Background` that covers the entire viewport. Besides that an `overlay` added over the video to
 mask any kind of video imperfections. It makes the text on the screen easier to read.
 * There are three stages of a countdown process - Taking input fields like countdown title & date, time countdown display and finally, congratulations dialog!.
 * So there are three container aka `div` that serves for that purposes. But at a time, among three, only one will be visible and other two remain hidden.
 * Once an user entered countdown title & date and click `SUBMIT`, it'll calculate the number of milliseconds since midnight Jan 1 1970, and user specified date & also current time in milliseconds from that.
 * Then find difference between them, which'll be in milliseconds. So covert it into `Days`:`Hours`:`Minutes`:`Seconds` and populate it into time countdown display.
 * To update the dialog at every time-interval of 1 second with help of `setInterval` method.
 * Finally, when the countdown finished, we show a congratulations dialog!.
 * To make user experience better, we used `localStorage` to store countdown title & date untill time countdown finishes. So that if the user refreshes the page or exit the page and come back after few times, he / she is 
 able to see time countdown dialog again from where he / she leaved.


