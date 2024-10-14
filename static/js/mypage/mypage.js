// 사이드배너 해당 세션 클릭이벤트
document.addEventListener("DOMContentLoaded", () => {
    // 모든 lnb-item 요소를 선택
    const Items = document.querySelectorAll(".lnb-item");

    if (Items.length === 0) {
        console.error("lnb-item 요소를 찾을 수 없습니다. HTML을 확인해주세요.");
    } else {
        console.log(`총 ${Items.length}개의 lnb-item 요소를 찾았습니다.`);

        // 각 lnb-item 요소에 클릭 이벤트 리스너를 추가
        Items.forEach((item, index) => {
            console.log(`이벤트 리스너를 추가 중인 요소 인덱스: ${index}`);
            item.addEventListener("click", (e) => {
                try {
                    // 기본 동작 방지 및 이벤트 전파 차단
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("클릭 이벤트 발생. 요소:", item);

                    // 모든 항목에서 active 클래스 제거
                    Items.forEach((i) => {
                        i.classList.remove("active");
                        console.log("active 클래스 제거된 항목:", i);
                    });

                    // 클릭된 항목에 active 클래스 추가
                    item.classList.add("active");
                    console.log("active 클래스 추가된 항목:", item);
                } catch (error) {
                    console.error("클릭 이벤트 처리 중 오류 발생:", error);
                }
            });
        });
    }
});

// z-index로 화면 보이기 / 숨기기
// document.addEventListener("DOMContentLoaded", () => {
//     // 버튼과 컨텐츠 요소를 선택합니다.
//     const container1 = document.getElementById("container1");
//     const container2 = document.getElementById("container2");
//     const showContainer1Btn = document.getElementById("showContainer1");
//     const showContainer2Btn = document.getElementById("showContainer2");

//     // 컨텐츠 1 보기 버튼에 클릭 이벤트 리스너 추가
//     showContainer1Btn.addEventListener("click", () => {
//         // 컨텐츠 1을 보여주고, 컨텐츠 2는 숨깁니다.
//         container1.style.display = "block";
//         container2.style.display = "none";

//         // z-index 설정을 통해 다른 요소들 위로 보이게 함
//         container1.style.zIndex = 10;
//         container2.style.zIndex = 1;
//     });

//     // 컨텐츠 2 보기 버튼에 클릭 이벤트 리스너 추가
//     showContainer2Btn.addEventListener("click", () => {
//         // 컨텐츠 2를 보여주고, 컨텐츠 1은 숨깁니다.
//         container2.style.display = "block";
//         container1.style.display = "none";

//         // z-index 설정을 통해 다른 요소들 위로 보이게 함
//         container2.style.zIndex = 10;
//         container1.style.zIndex = 1;
//     });
// });

//  클릭 이벤트 추가 div 보여주기
const showTab = (tabId, element) => {
    // 일단 모든 tab-content를 숨김
    const tabcontent = document.getElementsByClassName("tab-content");
    Array.from(tabcontent).forEach((content) => {
        content.classList.remove("active");
    });

    // 클릭된 tab만 표시
    document.getElementById(tabId).classList.add("active");

    // 사이드바 메뉴의 활성화 상태 변경
    const tablinks = document.querySelectorAll(".gNTKJg a");
    tablinks.forEach((link) => {
        link.classList.remove("active");
    });

    // 현재 클릭된 요소의 부모 li에 active 클래스 추가
    element.parentElement.classList.add("active");
};

document
    .getElementById("mypage-link")
    .addEventListener("click", () => showTab("mypage", this));

document
    .getElementById("payment-link")
    .addEventListener("click", () => showTab("payment", this));

document
    .getElementById("boost-link")
    .addEventListener("click", () => showTab("boost", this));

document
    .getElementById("donaition-link")
    .addEventListener("click", () => showTab("donaition", this));

document
    .getElementById("charge-link")
    .addEventListener("click", () => showTab("charge", this));

document
    .getElementById("notice-link")
    .addEventListener("click", () => showTab("notice", this));

document
    .getElementById("volunteer-link")
    .addEventListener("click", () => showTab("volunteer", this));

document
    .getElementById("Inquiry-link")
    .addEventListener("click", () => showTab("Inquiry", this));

document
    .getElementById("postscript-link")
    .addEventListener("click", () => showTab("postscript", this));

document
    .getElementById("gratitude-link")
    .addEventListener("click", () => showTab("gratitude", this));
