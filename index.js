// index.html의 네비게이션 메뉴에서 각 항목을 클릭했을때 해당 페이지로 이동하도록 이벤트 처리를 구현
// dom 조작 addEventListener() 메서드를 사용해 클릭 이벤트를 감지 클릭된 메뉴애 따라 해당페이지를 보여주도록한다.

// 일단 메뉴 목록들을 따로 dom으로 불러오자
const $Home = document.getElementById("Home")

const $Record = document.getElementById("Work_record")

const $Statistics = document.getElementById("Statistics")

const $Setting = document.getElementById("Setting")


// 각 컨텐츠 들을 보여주고있는 section들도 dom으로 불러오자

const $Home_content = document.getElementById("Home_section")

const $Work_section = document.getElementById("Work_section")

const $Statistics_section = document.getElementById("Statistics_section")


// Home 버튼 눌렷을때 발생하는일들.
$Home.addEventListener("click" , function() {
    // class 이름으로 화면 보여주기 안보여주기 이용 
    $Work_section.classList.remove('visible');
    $Statistics_section.classList.remove('visible');
    $Home_content.classList.add('visible');
})

$Record.addEventListener("click" , function() {
    $Statistics_section.classList.remove('visible');
    $Home_content.classList.remove('visible');
    $Work_section.classList.add('visible');
})

$Statistics.addEventListener("click" , function() {
    $Home.classList.remove('visible');
    $Work_section.classList.remove('visible');
    $Statistics_section.classList.add('visible');
})

$Setting.addEventListener("click" , () => console.log("Home"))
