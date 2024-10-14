document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript 초기화 성공: DOMContentLoaded 이벤트 실행됨");

    // 모든 lnb-item 요소를 선택합니다.
    const allItems = document.querySelectorAll(".lnb-item");

    // 각 lnb-item 요소에 클릭 이벤트 리스너를 추가합니다.
    allItems.forEach((item) => {
        item.addEventListener("click", function () {
            // 현재 활성화된 요소를 찾습니다.
            const currentActiveItem =
                document.querySelector(".lnb-item.active");

            // 콘솔 로그를 통해 현재 활성화된 요소 확인
            console.log("현재 활성화된 요소:", currentActiveItem);

            // 현재 클릭된 요소가 이미 활성화된 요소라면 아무 것도 하지 않습니다.
            if (currentActiveItem === item) {
                console.log("클릭된 요소가 이미 활성화되어 있습니다.");
                return;
            }

            // 클릭된 요소에 active 클래스를 추가합니다.
            item.classList.add("active");
            console.log("클릭된 요소에 active 클래스 추가:", item);

            // 기존 활성화된 요소가 있다면 active 클래스를 제거합니다.
            if (currentActiveItem) {
                currentActiveItem.classList.remove("active");
                console.log(
                    "기존 활성화된 요소에서 active 클래스 제거:",
                    currentActiveItem
                );
            }
        });
    });
});

//마우스 포인트가 올라가있는 태그 화면 css적용
// document.addEventListener("DOMContentLoaded", function () {
const screens = document.querySelectorAll(".lnb-item"); // 클래스명이 lnb-item인 태그들을 선택합니다.

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
// });
