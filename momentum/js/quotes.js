const quotes = [
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자1",
    },
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자2",
    },
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자3",
    },
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트  텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자4",
    },
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자5",
    },
    {
        quote: "텍스트 텍스트 텍스트  텍스트 텍스트 텍스트",
        author: "작성자6",
    },
    {
        quote: "텍스트 텍스 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자7",
    },
    {
        quote: "텍스트 텍스트  텍스트 텍스트 텍스트 텍스트  텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자8",
    },
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자9",
    },
    {
        quote: "텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트",
        author: "작성자10",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random (); // 0.123156 등 1과 0 사이의 소수점으로 나옴 
// Math.ceil(1.9); // 1보다 큰 수는 무조건 반올림. 1.0만이 1이 되게 함
// Math.floor (1.9); // 1보다 큰 수는 무조건 내림 
// Math.round(1.9); // 0.8은 1, 0.1은 0이 되는 반올림   
// Math.floor(math.random() * 10 ); // 랜덤 숫자 얻기

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;