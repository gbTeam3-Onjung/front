// date-input 클래스를 가진 div 요소 가져오기
const dateInput = document.querySelector(".date-input");

// active 클래스를 추가할 fIGvfF.date-range 요소 가져오기
const dateRange = document.querySelector(".fIGvfF.date-range");

// 캘린더 관련 요소 가져오기
const calendar1 = document.querySelector(
    ".rdrDateRangePickerWrapper.date-range-picker"
);
const calendar2 = document.querySelector(
    ".rdrCalendarWrapper.rdrDateRangeWrapper"
);

// date-range-icon 클래스를 가진 svg 요소 가져오기
const dateRangeIcon = document.querySelector(".cAfwXx.date-range-icon");

// date-input 및 date-range-icon 클릭 시 동작 정의
function handleDateInputClick(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 막기

    // fIGvfF.date-range에 active 클래스 추가
    dateRange.classList.add("active");

    // 캘린더 표시/숨김 토글
    const isHidden = getComputedStyle(calendar1).display === "none";
    if (isHidden) {
        calendar1.style.display = "block"; // 첫 번째 캘린더 표시
        calendar2.style.display = "block"; // 두 번째 캘린더 표시
    }
}

dateInput.addEventListener("click", handleDateInputClick);
dateRangeIcon.addEventListener("click", handleDateInputClick);

// 문서 전체 클릭 시 동작 정의
// date-input, dateRangeIcon, calendar1, calendar2 내부의 요소를 제외하고 클릭하면 active 클래스 제거 및 캘린더 숨기기
document.addEventListener("click", function (event) {
    if (
        !dateInput.contains(event.target) &&
        !dateRangeIcon.contains(event.target) &&
        !calendar1.contains(event.target) &&
        !calendar2.contains(event.target)
    ) {
        dateRange.classList.remove("active");
        calendar1.style.display = "none"; // 첫 번째 캘린더 숨기기
        calendar2.style.display = "none"; // 두 번째 캘린더 숨기기
    }
});

// 캘린더 자체를 클릭했을 때도 이벤트 전파 막기 (캘린더가 바로 숨지 않게)
calendar1.addEventListener("click", function (event) {
    event.stopPropagation();
});
calendar2.addEventListener("click", function (event) {
    event.stopPropagation();
});
