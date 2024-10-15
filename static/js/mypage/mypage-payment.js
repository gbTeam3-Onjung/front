// date-input 클래스를 가진 div 요소 가져오기
const dateInput = document.querySelector(".date-input");

// active 클래스를 추가할 fIGvfF.date-range 요소 가져오기
const dateRange = document.querySelector(".fIGvfF.date-range");

// date-input 클릭 시 fIGvfF.date-range에 active 클래스 추가
dateInput.addEventListener("click", function (event) {
    event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 막기
    dateRange.classList.add("active");
});

// 문서 전체에 클릭 이벤트 추가하여 date-input 바깥을 클릭하면 active 제거
document.addEventListener("click", function () {
    dateRange.classList.remove("active");
});

// 켈린더 펼치기
// 캘린더 요소 가져오기
// const calendar = document.querySelector(
//     ".sc-dIouRR.hipszs.date-range-picker-wrapper"
// );

// // date-input 클릭 시 캘린더 표시/숨김
// dateInput.addEventListener("click", function (event) {
//     event.stopPropagation(); // 클릭 이벤트 전파 막기
//     if (getComputedStyle(calendar).display === "none") {
//         calendar.style.display = "block"; // 캘린더 표시
//     } else {
//         calendar.style.display = "none"; // 캘린더 숨기기
//     }
// });

// // 문서 전체 클릭 시 캘린더 숨기기
// document.addEventListener("click", function () {
//     calendar.style.display = "none"; // 캘린더 숨기기
// });

// // 캘린더 자체를 클릭했을 때도 이벤트 전파 막기 (캘린더가 바로 숨지 않게)
// calendar.addEventListener("click", function (event) {
//     event.stopPropagation();
// });

const calendar1 = document.querySelector(
    ".rdrDateRangePickerWrapper.date-range-picker"
);
const calendar2 = document.querySelector(
    ".rdrCalendarWrapper.rdrDateRangeWrapper"
);

// date-input 클릭 시 캘린더 표시/숨김
dateInput.addEventListener("click", function (event) {
    event.stopPropagation(); // 클릭 이벤트 전파 막기
    const isHidden = getComputedStyle(calendar1).display === "none";

    if (isHidden) {
        calendar1.style.display = "block"; // 첫 번째 캘린더 표시
        calendar2.style.display = "block"; // 두 번째 캘린더 표시
    } else {
        calendar1.style.display = "none"; // 첫 번째 캘린더 숨기기
        calendar2.style.display = "none"; // 두 번째 캘린더 숨기기
    }
});

// 문서 전체 클릭 시 캘린더 숨기기
document.addEventListener("click", function () {
    calendar1.style.display = "none"; // 첫 번째 캘린더 숨기기
    calendar2.style.display = "none"; // 두 번째 캘린더 숨기기
});

// 캘린더 자체를 클릭했을 때도 이벤트 전파 막기 (캘린더가 바로 숨지 않게)
calendar1.addEventListener("click", function (event) {
    event.stopPropagation();
});
calendar2.addEventListener("click", function (event) {
    event.stopPropagation();
});
