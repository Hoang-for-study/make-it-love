const text =
"Mình đã suy nghĩ rất lâu trước khi viết những dòng này, và mình hy vọng cậu có thể dành chút thời gian để lắng nghe."
+
"Từ lần đầu tiên mình gặp cậu, mình đã cảm nhận được điều gì đó rất đặc biệt. Mỗi lần gặp cậu, trái tim mình như muốn nhảy ra khỏi lồng ngực. Mình không thể ngừng nghĩ về nụ cười, ánh mắt và sự tốt bụng của cậu. Mình nhận ra rằng, cậu đã trở thành một phần quan trọng trong cuộc sống của mình."
+
"Mình biết việc nói ra những điều này có thể làm thay đổi mối quan hệ giữa chúng ta, nhưng mình không muốn giấu kín cảm xúc của mình nữa. Mình muốn cậu biết rằng mình thật sự thích cậu, không chỉ bởi vẻ ngoài mà còn bởi tính cách, sự thông minh và trái tim ấm áp của cậu."
+
"Dù cậu có cảm nhận thế nào, mình vẫn muốn tôn trọng mọi quyết định của cậu. Điều quan trọng nhất đối với mình là cậu hạnh phúc. Nếu cậu cũng có cảm xúc giống mình, mình rất mong chúng ta có thể tìm hiểu nhau nhiều hơn."
+
"Cảm ơn cậu vì đã đọc những dòng tâm sự này. Dù câu trả lời của cậu là gì, mình vẫn hy vọng chúng ta có thể tiếp tục làm bạn.";


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