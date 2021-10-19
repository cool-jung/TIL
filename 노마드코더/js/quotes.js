const quotes = [
    {
        quote: " 절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 ",
        author: "L.론허바드"
    },
    {
        quote: "이미 끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "탈무드"
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author: "데모스테네스"
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다 ",
        author: "찰스다윈"
    },
    {
        quote: "무례한 사람의 행동은 내 행실을 바로잡게 해주는 스승이다.",
        author: "공자"
    },
    {
        quote: "자신감은 전염된다. 자신감의 부족도 마찬가지다.",
        author: "빈스 롬바르디"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
