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

const $Setting_section = document.getElementById("Setting_section")

// Home 버튼 눌렷을때 발생하는일들.
$Home.addEventListener("click" , function() {
   // 1. class name을 조작하여 Home 영역의 내용만을 보여줄수있도록 클래스네임 부여.

    /* <section class="content Home" id="Home_section"> 
        기존의 Home_section의 클래스명을 보면 content Home이다 css에서 클래스명이 content인 element들을 display:none으로 해놓아서 보이지않을것이다.
    */
   // 각 영역이름-visible 클래스명을 부여하는순간 none이였던 display : block이 되도록 해놓았다.
   // Home버튼을 눌렀을때 해당 영역의 컨텐츠만을 보여줘야하기때문에 다른 영역이 dislay: block이되있는 일이 없도록 영역이름-visible 클래스네임을 제거해준다.
    $Work_section.classList.remove('Work--visible');
    $Statistics_section.classList.remove('Statistics--visible');
    $Setting_section.classList.remove('Setting--visible');
    // 그리고 Home 영역만 display: block으로 보여주게된다.
    $Home_content.classList.add('Home--visible');
})

$Record.addEventListener("click" , function() {
    $Statistics_section.classList.remove('Statistics--visible');
    $Home_content.classList.remove('Home--visible');
    $Setting_section.classList.remove('Setting--visible');
    $Work_section.classList.add('Work--visible');
})

$Statistics.addEventListener("click" , function() {
    $Home_content.classList.remove('Home--visible');
    $Work_section.classList.remove('Work--visible');
    $Setting_section.classList.remove('Setting--visible');
    $Statistics_section.classList.add('Statistics--visible');
})

$Setting.addEventListener("click" , function() {
    $Home_content.classList.remove('Home--visible');
    $Work_section.classList.remove('Work--visible');
    $Statistics_section.classList.remove('Statistics--visible');
    $Setting_section.classList.add('Setting--visible');
})