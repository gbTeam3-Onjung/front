const showTab = (tabId, element) => {
    // 일단 모든 tab-content를 숨김
    const tabcontent = document.getElementsByClassName("tab-content");
    Array.from(tabcontent).forEach((content) => {
        content.classList.remove("active");
    });

    // 클릭된 tab만 표시
    document.getElementById(tabId).classList.add("active");

    // 사이드바 메뉴의 활성화 상태 변경
    const tablinks = document.querySelectorAll(".sidebar-nav ul li");
    tablinks.forEach((link) => {
        link.classList.remove("active");
    });

    // 현재 클릭된 요소의 부모 li에 active 클래스 추가
    element.parentElement.classList.add("active");
};

//마우스 포인트가 올라가있는 태그 화면 css적용
document.addEventListener("DOMContentLoaded", function () {
    const screens = document.querySelectorAll(".screen"); // 클래스명이 screen인 태그들을 선택합니다.

    screens.forEach((screen) => {
        screen.addEventListener("mouseenter", () => {
            applyHoverEffect(screen);
        });
        screen.addEventListener("mouseleave", () => {
            removeHoverEffect(screen);
        });
    });

    function applyHoverEffect(activeScreen) {
        activeScreen.classList.add("active"); // 화면에 active 클래스를 추가하여 CSS가 적용되도록 함
    }

    function removeHoverEffect(screen) {
        screen.classList.remove("active"); // 화면에서 active 클래스를 제거하여 CSS가 원래대로 돌아가도록 함
    }
});
