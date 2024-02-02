const quotes = [
    {
        quote: "삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다.",
        author: "스탠리 쿠니츠",
    },
    {
        quote: "젊은이들은 세월이 어떻게 생각하고 느끼는지 알턱이 없다. 그러나 노인이 젊은 시절을 망각하는 것은 죄이다.",
        author: "조앤 K.롤링",
    },
    {
        quote: "삶은 공평하지 않다. 다만 죽음보다는 공평할 뿐이다",
        author: "윌리엄 골드먼",
    },
    {
        quote: "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
        author: "공자",
    },
    {
        quote: "인간은 자신이 필요로하는 것을 찾아 세계를 여행하고 집에 돌아와 그것을 발견한다.",
        author: "조지 무어",
    },
    {
        quote: "누군가는 성공하고 누군가는 실수할 수도 있다. 하지만 이런 차이에 너무 집착하지 말라. 타인과 함께, 타인을 통해서 협력할 때에야 비로소 위대한 것이 탄생한다.",
        author: "생텍쥐페리",
    },
    {
        quote: "한 권의 책은 세계에 대한 하나의 버전이다. 그 버전이 마음에 들지 않으면 무시하든지 답례로 자신만의 버전을 제공하라.",
        author: "살만 루시디",
    },
    {
        quote: "작별 인사에 낙담하지 말라. 재회에 앞서 작별은 필요하다. 그리고 친구라면 잠시 혹은 오랜 뒤라도 꼭 재회하게 될 터이니.",
        author: "리처드 바크",
    },
    {
        quote: "경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.",
        author: "오귀스트 르네 로댕",
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "메이슨 쿨리",
    },
    {
        quote: "미래에 사로잡혀있으면 현재를 있는 그대로 볼 수 없을 뿐 아니라 과거까지 재구성하려 들게 된다.",
        author: "에릭 호퍼",
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