const quotes = [
    {
        quote: '"담배를 절때 피워서는 안되요"',
        author : "<침착맨>",
    },
    {
        quote: '"어제 히오스 다르고, 오늘 히오스 다르다."',
        author : "<침착맨>",
    },
    {
        quote: '"스포츠 별로 안좋아하는데 야구는 왜 좋아하냐구요? 턴제잖아요"',
        author : "<침착맨>",
    },
    {
        quote: '"배는 항구에 있을 때 가장 안전하지만 그것이 배의 존재 이유는 아니잖아요?"',
        author : "<침착맨>",
    },
    {
        quote: '"힘을 다 쏟고 나면 아무것도 할 수가 없어요. 모든 일에는 강약 조절이 중요합니다."',
        author : "<침착맨>",
    },
    {
        quote: '"여봐요, 누군데 그리 바삐 가십니까? 너의 20대"',
        author : "<침착맨>",
    },
    {
        quote: '"사회가 나에게 가혹하니, 나라도 나에게 관대해야지."',
        author : "<침착맨>",
    },
    {
        quote: '"죽으러 가는게 아니야, 내가 정말 살아있는지 확인하로 가는거야"',
        author : "<침착맨>",
    },
    {
        quote: '"대충하고 견적봐서 미치세요."',
        author : "<침착맨>",
    },
    {
        quote: '"입닥쳐. 나없이도 살아가는 법을 배워."',
        author : "<침착맨>",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;