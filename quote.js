const quotes = [
    {
      "quote": "힘든 운동이 얼마나 좋은지 알려면, 힘들 때 운동하면 된다. - 아놀드 슈워제네거",
      "author": "Arnold Schwarzenegger"
    },
    {
      "quote": "근육은 솔직하다. 거짓말을 하지 않는다. - 로니 콜맨",
      "author": "Ronnie Coleman"
    },
    {
      "quote": "운동은 몸이 아니라 마음을 위한 것이다. - 조셉 피라테스",
      "author": "Joseph Pilates"
    },
    {
      "quote": "운동은 당신이 정말로 할 수 있는 유일한 것이다. - 아미타 카프",
      "author": "Amit Kalantri"
    },
    {
      "quote": "불가능한 것은 없다. 그저 시간이 조금 더 걸릴 뿐이다. - 로버트 허리크",
      "author": "Robert H. Schuller"
    },
    {
      "quote": "목표를 세우고 그것을 이루기 위해 노력하라. - 도미니크 윌킨스",
      "author": "Dominique Wilkins"
    },
    {
      "quote": "성공은 학습과 노력을 통해 얻어진다. - 커티스 리",
      "author": "Curtis LeMay"
    },
    {
      "quote": "더 나은 결과를 원한다면 더 열심히 노력하라. - 미셸 오바마",
      "author": "Michelle Obama"
    },
    {
      "quote": "훈련은 내가 더 나은 버전의 나를 만들기 위해 하는 것이다. - 루이스 호바",
      "author": "Louise Hobart"
    },
    {
      "quote": "내가 가진 것을 보여주기 위해 운동하지 않는다. 내가 되고 싶은 사람이 되기 위해 운동한다. - 아놀드 슈워제네거",
      "author": "Arnold Schwarzenegger"
    }
  ]


// 명언을 배치하기위해 해당 html 영역들을불러옴
const $quote = document.querySelector("#Home_quote span:first-child");
const $author = document.querySelector("#Home_quote span:last-child");

// 우리는 명언 quote 배열(0부터 Array의 길이-1까지)에서 랜덤으로 요소를 가져와야 한다.
// Math.random() 함수사용 Math.random()* 원하는숫자 0부터 원하는 숫자 사이의 랜덤숫자 호출 
// 문제 소숫점숫자 float반환 -> 정수형숫자 integer 타입으로변환해주어야함. 
// 해결 Math.floor() : 소수점을 버림하여 반환

// 2. 명언 배열에서 랜덤으로 명언 하나 얻어오기

// 명언이 10개니깐 0부터 10개의 숫자를얻어오도록 Math.random() * 10을 할순 있지만 
// 추가적인명언이 생길수도 혹은 추후에 삭제될수있기때문에 배열의 길이( == 명언의갯수)만큼 얻어오는방향으로 설정
// array.length == 배열의길이를반환함 
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// 1. 랜덤명언 생성돌리고 얻어온 랜덤명언 렌더링해주기
function displayRandomQuote() {
    // 랜덤명언 생성하는 getRandomQuote함수 작동후 명언배열에서 하나 얻어오고 변수에저장
    // 명언배열에 존재하는 명언, 사람 키값에 해당하는 명언과 사람이름을 각각의 span태그에 그리도록함.
const randomQuote = getRandomQuote();
    $quote.innerText = randomQuote.quote;
    $author.innerText = randomQuote.author;
}

displayRandomQuote()

// 5초마다 새로운 명언 보여주기 위해 setInterval 사용
setInterval(displayRandomQuote, 5000);