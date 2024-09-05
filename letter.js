const text =
"Hi Vy, Hoàng đã suy nghĩ rất lâu trước khi viết những dòng này và cũng không thể ngờ là sẽ có ngày hôm nay nhưng t hy vọng m có thể dành chút thời gian để lắng nghe."
+
"Actually, this is the first time in my life I've written a love letter like this so I'm still not used to its overly emotional nature so I'll ask permission to use English. "
+
"Haiz, life is really fun, we've liked each other since 11th grade but only now have the courage to express our feelings."
+
"Like a patient with borderline personality disorder, when I found out that you've liked me since then, to put it simply, that you've been waiting for me for 3 years, in a short 30 seconds my body must have gone through all kinds of emotions, starting from shock, then joy, then calmness, then anger because why didn't I know this, then sadness and ending with happiness."
+
"And from then on I was like reliving in the pink of love...";


const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
    if (i < arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];
        i++;
        console.log("The i count: " + i);
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));
    }
}   

function interval(letter) {
    console.log(letter);
    if (letter === ";" || letter === "." || letter === ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}

function startFromBegin() {
    i = 0;
    dashOut(paragraph);
}

startFromBegin();