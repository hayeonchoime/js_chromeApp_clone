const quotes = [
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다."
       ,author: "이소룡"
    }
   ,{
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다."
       ,author: "괴테"
    }
    ,{
        quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라. "
       ,author: "마크 트웨인"
    }
    ,{
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다."
       ,author: "헨리 포드"
    }
    ,{
        quote: "용기있는 자로 살아라. 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라."
       ,author: "키케로"
    }
    ,{
        quote: "일하여 얻으라 . 그러면 운명의 바퀴를 붙들어 잡은것이다 "
       ,author: "랄프 왈도 에머슨"
    }
    ,{
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다 "
       ,author: "볼드윈"
    }
    ,{
        quote: "인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다"
       ,author: "벤스타인"
    }
    ,{
        quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다. "
       ,author: "오손 웰스"
    }
    ,{
        quote: "내 비장의 무기는 아직 손안에 있다 .그것은 희망이다 "
       ,author: "나폴레옹"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;


