// 드롭다운 필터 설정
const filterContainer = document.querySelector(".review-list-filter");
const headerWrap = filterContainer.querySelector(".header-wrap");
const bottomWrap = filterContainer.querySelector(".bottom-wrap");
const arrow = filterContainer.querySelector(".arrow");
const items = filterContainer.querySelectorAll(".item");
const inputField = headerWrap.querySelector("input");

// 드롭다운 열고 닫기
headerWrap.addEventListener("click", () => {
    const isVisible = bottomWrap.style.visibility === "visible";
    bottomWrap.style.visibility = isVisible ? "hidden" : "visible";
    arrow.style.transform = isVisible ? "rotate(90deg)" : "rotate(-90deg)";
});

// 항목 클릭 시 필터 업데이트 및 드롭다운 닫기
items.forEach((item) => {
    item.addEventListener("click", () => {
        // 모든 항목의 활성화 클래스 제거
        items.forEach((i) => i.classList.remove("active"));
        // 선택된 항목에 활성화 클래스 추가
        item.classList.add("active");
        // 선택된 항목의 텍스트를 input에 반영
        inputField.value = item.textContent.trim();
        // 드롭다운 닫기
        bottomWrap.style.visibility = "hidden";
        arrow.style.transform = "rotate(90deg)";
    });
});

// 드롭다운 외부 클릭 시 닫기
document.addEventListener("click", (event) => {
    if (!filterContainer.contains(event.target)) {
        bottomWrap.style.visibility = "hidden";
        arrow.style.transform = "rotate(90deg)";
    }
});
