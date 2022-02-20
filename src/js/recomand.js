const recomand =[
    {
        title:"세븐틴-Oh My!",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.20.png",
        highlight:"너를 봐도 네가 더 생각나"
    },
    {
        title:"세븐틴-13월의 춤",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.24.png",
        highlight:"너를 위해 lillili yabbay"
    },
    {
        title:"세븐틴-Rocket",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.31.png",
        highlight:"도착지가 없어도 있으면 돼 네 손만"
    },
    {
        title:"세븐틴-Network Love",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.36.png",
        highlight:"넒 만나기 전에 나는 세상이 너무도 커서 어디가 어딘지 몰라"
    },
    {
        title:"Red Velvet-Psycho",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.40.png",
        highlight:"다시 안 볼 듯 싸우다가도 붙어다니니 말야 이해가 안 간대 웃기지도 않대"
    },
    {
        title:"세븐틴-Good to Me",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.43.png",
        highlight:"설레는 기분은 다 너라서 매우 좋아 다"
    },
    {
        title:"Day6-Day and Night",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.46.png",
        highlight:"내게 말해줄 순 없니 같이 사랑하는 날이 올 수 있게 말이야"
    },
    {
        title:"Day6-Love me or Leave me",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.49.png",
        highlight:"숨을 죽이고 너의 대답을 기다릴게 턴을 너에게 넘긴채로"
    },
    {
        title:"Day6-Zombie (English Ver.)",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.55.png",
        highlight:"I feel like I became a zombie"
    },
    {
        title:"투모로우바이투게더-Run Away",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.44.57.png",
        highlight:"내 영원이 돼줘 내 이름 불러줘"
    },
    {
        title:"투모로우바이투게더-Drama",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.02.png",
        highlight:"자꾸 CG같애 내 몸이"
    },
    {
        title:"투모로우바이투게더-Can't You See Me?",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.05.png",
        highlight:"무너진 모래성 Who's a liar?"
    },
    {
        title:"LEE SUHYUN-ALIEN",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.08.png",
        highlight:"사실 넌 저 먼 별나라에서 왔어"
    },
    {
        title:"NCT 127-Kick It",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.15.png",
        highlight:"내 목소린 더 퍼져야 해 소리치면 돼"
    },
    {
        title:"데이식스-Sweet Chaos",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.18.png",
        highlight:"너를 알아 가면 갈수록 내 취향과 패턴 그 모든 게 바뀌어"
    },
    {
        title:"NCT U-Make A Wish (Birthday Song)",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.23.png",
        highlight:"I can do this all day"
    },
    {
        title:"투모로우바이투게더-Cat & Dog",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.45.25.png",
        highlight:"절대 상상 못 하지 내 애교"
    },
    {
        title:"NCT DREAM-Dive Into You",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.46.25.png",
        highlight:"넌 아득한 나의 바다 난 너의 품에 빠져"
    },
    {
        title:"IVE-ELEVEN",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.46.27.png",
        highlight:"난 몰랐어 내 맘이 이리 다채로운지"
    },
    {
        title:"SF9-Love No.5",
        img:"img/recomand/스크린샷 2022-02-21 오전 2.46.31.png",
        highlight:"멈춰버린 시간 속 무뎌지는 감각들"
    }
];

const title = document.querySelector("#k-pop span:first-child");
const imgSpan = document.querySelector("#k-pop span:nth-child(2)");
const img = document.createElement("img");
const highlight = document.querySelector("#k-pop span:last-child");

const todaysKPop = recomand[Math.floor(Math.random()*recomand.length)];

title.innerText = todaysKPop.title;
img.src = `${todaysKPop.img}`;
imgSpan.appendChild(img);
highlight.innerText = `"${todaysKPop.highlight}"`;