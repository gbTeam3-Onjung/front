// date-input 클래스를 가진 div 요소 가져오기
const dateInput = document.querySelector(".date-input");

// active 클래스를 추가할 fIGvfF.date-range 요소 가져오기
const dateRange = document.querySelector(".fIGvfF.date-range");

// date-input 및 date-range-icon 클릭 시 동작 정의
function handleDateInputClick(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 막기

    // fIGvfF.date-range에 active 클래스 추가
    dateRange.classList.add("active");
}

dateInput.addEventListener("click", handleDateInputClick);

// 문서 전체 클릭 시 동작 정의
// date-input 내부의 요소를 제외하고 클릭하면 active 클래스 제거
document.addEventListener("click", function (event) {
    if (!event.target.closest(".date-input")) {
        dateRange.classList.remove("active");
    }
});
// 사이드배너 전환▲    ▼임시 데이터 목록

// 목록
const payments = [
    {
        id: 1,
        status: "완료",
        price: "1000",
        date: "2024.03.01",
    },
    {
        id: 2,
        status: "완료",
        price: "30000",
        date: "2024.03.02",
    },
    {
        id: 3,
        status: "완료",
        price: "10000",
        date: "2024.03.03",
    },
    {
        id: 4,
        status: "완료",
        price: "7000",
        date: "2024.03.04",
    },
    {
        id: 5,
        status: "완료",
        price: "100",
        date: "2024.03.05",
    },
    {
        id: 6,
        status: "취소",
        price: "1000",
        date: "2024.03.01",
    },
    {
        id: 7,
        status: "취소",
        price: "30000",
        date: "2024.03.02",
    },
    {
        id: 8,
        status: "취소",
        price: "10000",
        date: "2024.03.03",
    },
    {
        id: 9,
        status: "취소",
        price: "7000",
        date: "2024.03.04",
    },
    {
        id: 10,
        status: "취소",
        price: "100",
        date: "2024.03.05",
    },
    {
        id: 11,
        status: "완료",
        price: "10000",
        date: "2024.03.11",
    },
];

// 결제 내역 렌더링▼
const renderPayments = () => {
    // 1. payment 배열 확인
    console.log(payments); // payment 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const paymentList = document.querySelector(".payment-list");
    const emptyComponent = document.querySelector("#payment .empty-component");
    console.log(paymentList); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (payments.length === 0) {
        paymentList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        paymentList.style.display = "block";
        emptyComponent.style.display = "none";
        paymentList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                <col style="width: 57px;">
                <col style="width: 132px;">
                <col style="width: 150px;">
                <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                <tr>
                <th>결제 번호</th>
                <th>구분</th>
                <th>금액</th>
                <th>결제 일</th>
                    </tr>
                    </thead>
                    <tbody class="news-center-table-body">
                ${payments
                    .map(
                        (payment) => `
                    <tr class="news-data-rows" data-forloop="${payment.id}">
                        <td class="news-center-table-body-number">${
                            payment.id
                        }</td>
                        <td class="news-center-table-body-category">${
                            "결제 " + payment.status
                        }</td>
                        <td class="news-center-table-body-title"><span>${
                            payment.price + "원"
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            payment.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderPayments(payments);

// // 전체 항목 숫자 증가
const paymentTotalCount = payments.filter(
    (payment) => payment.status === "완료" || payment.status === "취소"
).length;
document.getElementById("payment-totalCount").textContent = paymentTotalCount;

// // 결제 완료 숫자 증가
const paymentCompletedCount = payments.filter(
    (payment) => payment.status === "완료"
).length;
document.getElementById("payment-completedCount").textContent =
    paymentCompletedCount;

// // 결제 취소 숫자 감소
const paymentCancelCount = payments.filter(
    (payment) => payment.status === "취소"
).length;
document.getElementById("payment-cancelCount").textContent = paymentCancelCount;

// // 초기 상태에서 전체 결제 항목을 표시

// 결제 완료, 결제 취소 항목 수를 업데이트하는 함수
function updateCounts() {
    const paymentTotalCount = payments.length;
    const paymentCompletedCount = payments.filter(
        (payment) => payment.status === "완료"
    ).length;
    const paymentCancelCount = payments.filter(
        (payment) => payment.status === "취소"
    ).length;

    document.getElementById("payment-totalCount").textContent =
        paymentTotalCount;
    document.getElementById("payment-completedCount").textContent =
        paymentCompletedCount;
    document.getElementById("payment-cancelCount").textContent =
        paymentCancelCount;
}

// 페이지 로드 시 전체 개수 업데이트
// updateCounts();

// /**************************후원**************************/
const boosts = [
    {
        id: 1,
        status: "완료",
        price: "100",
        date: "2024.03.01",
    },
    {
        id: 2,
        status: "완료",
        price: "3000",
        date: "2024.03.02",
    },
    {
        id: 3,
        status: "완료",
        price: "1000",
        date: "2024.03.03",
    },
    {
        id: 4,
        status: "완료",
        price: "700",
        date: "2024.03.04",
    },
    {
        id: 5,
        status: "완료",
        price: "1500",
        date: "2024.03.05",
    },
    {
        id: 6,
        status: "취소",
        price: "100",
        date: "2024.03.01",
    },
    {
        id: 7,
        status: "취소",
        price: "3000",
        date: "2024.03.02",
    },
    {
        id: 8,
        status: "취소",
        price: "1000",
        date: "2024.03.03",
    },
    {
        id: 9,
        status: "취소",
        price: "700",
        date: "2024.03.04",
    },
    {
        id: 10,
        status: "취소",
        price: "1500",
        date: "2024.03.05",
    },
    {
        id: 11,
        status: "취소",
        price: "1000",
        date: "2024.03.11",
    },
];

// 후원 내역 렌더링▼
const renderBoosts = () => {
    // 1. boost 배열 확인
    console.log(boosts); // boost 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const boostList = document.querySelector(".boost-list");
    const emptyComponent = document.querySelector("#boost .empty-component");

    console.log(boostList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (boosts.length === 0) {
        boostList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        boostList.style.display = "block";
        emptyComponent.style.display = "none";
        boostList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>후원 번호</th>
                        <th>구분</th>
                        <th>금액</th>
                        <th>결제 일</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${boosts
                    .map(
                        (boost) => `
                    <tr class="news-data-rows" data-forloop="${boost.id}">
                        <td class="news-center-table-body-number">${
                            boost.id
                        }</td>
                        <td class="news-center-table-body-category">${
                            "후원 " + boost.status
                        }</td>
                        <td class="news-center-table-body-title"><span>${
                            boost.price + "원"
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            boost.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderBoosts(boosts);

// 전체 항목 숫자 증가
const boostTotalCount = boosts.filter(
    (boost) => boost.status === "완료" || boost.status === "취소"
).length;
document.getElementById("boost-totalCount").textContent = boostTotalCount;

// 후원 완료 숫자 증가
const boostCompletedCount = boosts.filter(
    (boost) => boost.status === "완료"
).length;
document.getElementById("boost-completedCount").textContent =
    boostCompletedCount;

// 후원 취소 숫자 감소
const boostCancelCount = boosts.filter(
    (boost) => boost.status === "취소"
).length;
document.getElementById("boost-cancelCount").textContent = boostCancelCount;

/*********************기부**********************/
const donaitions = [
    {
        id: 1,
        status: "완료",
        price: "100",
        date: "2024.03.01",
    },
    {
        id: 2,
        status: "완료",
        price: "3000",
        date: "2024.03.02",
    },
    {
        id: 3,
        status: "완료",
        price: "1000",
        date: "2024.03.03",
    },
    {
        id: 4,
        status: "완료",
        price: "700",
        date: "2024.03.04",
    },
    {
        id: 5,
        status: "완료",
        price: "1500",
        date: "2024.03.05",
    },
    {
        id: 6,
        status: "취소",
        price: "100",
        date: "2024.03.01",
    },
    {
        id: 7,
        status: "취소",
        price: "3000",
        date: "2024.03.02",
    },
    {
        id: 8,
        status: "취소",
        price: "1000",
        date: "2024.03.03",
    },
    {
        id: 9,
        status: "취소",
        price: "700",
        date: "2024.03.04",
    },
    {
        id: 10,
        status: "취소",
        price: "1500",
        date: "2024.03.05",
    },
    {
        id: 11,
        status: "취소",
        price: "1000",
        date: "2024.03.11",
    },
];

// 기부 내역 렌더링▼
const renderDonaitions = () => {
    // 1. boost 배열 확인
    console.log(donaitions); // boost 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const donaitionList = document.querySelector(".donaition-list");
    const emptyComponent = document.querySelector(
        "#donaition .empty-component"
    );

    console.log(donaitionList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (donaitions.length === 0) {
        donaitionList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        donaitionList.style.display = "block";
        emptyComponent.style.display = "none";
        donaitionList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>기부 번호</th>
                        <th>구분</th>
                        <th>금액</th>
                        <th>결제 일</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${donaitions
                    .map(
                        (donaition) => `
                    <tr class="news-data-rows" data-forloop="${donaition.id}">
                        <td class="news-center-table-body-number">${
                            donaition.id
                        }</td>
                        <td class="news-center-table-body-category">${
                            "기부 " + donaition.status
                        }</td>
                        <td class="news-center-table-body-title"><span>${
                            donaition.price + "원"
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            donaition.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderDonaitions(donaitions);

// 전체 항목 숫자 증가
const donaitionTotalCount = donaitions.filter(
    (donaition) => donaition.status === "완료" || donaition.status === "취소"
).length;
document.getElementById("donaition-totalCount").textContent =
    donaitionTotalCount;

// 기부 완료 숫자 증가
const donaitionCompletedCount = donaitions.filter(
    (donaition) => donaition.status === "완료"
).length;
document.getElementById("donaition-completedCount").textContent =
    donaitionCompletedCount;

// 기부 취소 숫자 감소
const donaitionCancelCount = donaitions.filter(
    (donaition) => donaition.status === "취소"
).length;
document.getElementById("donaition-cancelCount").textContent =
    donaitionCancelCount;

/*******************충전 하기********************/
const charges = [
    {
        id: 1,
        status: "충전 완료",
        chargeprice: "1000",
        myprice: "1000",
        date: "2024.03.01",
    },
    {
        id: 2,
        status: "잔액 부족",
        chargeprice: "10000",
        myprice: "1000",
        date: "2024.03.02",
    },
    {
        id: 3,
        status: "충전 완료",
        chargeprice: "5000",
        myprice: "6000",
        date: "2024.03.03",
    },
    {
        id: 4,
        status: "완료",
        chargeprice: "1000",
        myprice: "7000",
        date: "2024.03.04",
    },
    {
        id: 5,
        status: "잔액 부족",
        chargeprice: "1000",
        myprice: "7000",
        date: "2024.03.05",
    },
];

// 충전 내역 렌더링▼
const renderCharges = () => {
    // 1. charge 배열 확인
    console.log(charges); // boost 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const chargeList = document.querySelector(".charge-list");
    const emptyComponent = document.querySelector("#charge .empty-component");

    console.log(chargeList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (charges.length === 0) {
        chargeList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        chargeList.style.display = "block";
        emptyComponent.style.display = "none";
        chargeList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>기부 번호</th>
                        <th>구분</th>
                        <th>신청 금액</th>
                        <th>보유 금액</th>
                        <th>결제 일</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${charges
                    .map(
                        (charge) => `
                    <tr class="news-data-rows" data-forloop="${charge.id}">
                        <td class="news-center-table-body-number">${
                            charge.id
                        }</td>
                        <td class="news-center-table-body-category">${
                            charge.status
                        }</td>
                        <td class="news-center-table-body-title">${
                            charge.chargeprice + "원"
                        }</td>
                        <td class="news-center-table-body-title">${
                            charge.myprice + "원"
                        }<td class="news-center-table-body-date">${
                            charge.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderCharges(charges);

/*********************내 알림**********************/
const notices = [
    {
        id: 1,
        title: "알림 제목1",
        content: "알림 내용 요약1",
        date: "2024.03.01",
    },
    {
        id: 2,
        title: "알림 제목2",
        content: "알림 내용 요약2",
        date: "2024.03.02",
    },
    {
        id: 3,
        title: "알림 제목3",
        content: "알림 내용 요약3",
        date: "2024.03.03",
    },
    {
        id: 4,
        title: "알림 제목4",
        content: "알림 내용 요약4",
        date: "2024.03.04",
    },
    {
        id: 5,
        title: "알림 제목5",
        content: "알림 내용 요약5",
        date: "2024.03.05",
    },
];

// 알림 렌더링▼
const renderNotices = () => {
    // 1. notices 배열 확인
    console.log(notices); // notices 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const noticeList = document.querySelector(".notice-list");
    const emptyComponent = document.querySelector("#notice .empty-component");

    console.log(noticeList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (!noticeList || !emptyComponent) {
        console.error("HTML 요소가 선택되지 않았습니다.");
        return;
    }

    if (notices.length === 0) {
        noticeList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        noticeList.style.display = "block";
        emptyComponent.style.display = "none";
        noticeList.innerHTML = `
                ${notices
                    .map(
                        (notice) => `
                    <div class="noti-content">
                        <div class="kzXcJa">
                            <div class="noti-card-text" data-forloop="${notice.id}">
                                <div class="noti-card-title">${notice.title}</div>
                                <div class="noti-card-desc">${notice.content}</div>
                                <div class="noti-card-desc">${notice.date}</div>
                            </div>
                        </div>    
                    </div> 
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderNotices(notices);

// // 전체 항목 숫자 증가
const noticeTotalCount = notices.length;
document.getElementById("notice-totalCount").textContent = noticeTotalCount;

/*********************봉사 활동**********************/
const volunteers = [
    {
        id: 1,
        status: "완료",
        time: "4",
        date: "2024.03.01",
    },
    {
        id: 2,
        status: "완료",
        time: "3",
        date: "2024.03.02",
    },
    {
        id: 3,
        status: "완료",
        time: "2",
        date: "2024.03.03",
    },
    {
        id: 4,
        status: "완료",
        time: "1",
        date: "2024.03.04",
    },
    {
        id: 5,
        status: "취소",
        time: "4",
        date: "2024.03.05",
    },
    {
        id: 6,
        status: "취소",
        time: "3",
        date: "2024.03.01",
    },
    {
        id: 7,
        status: "취소",
        time: "4",
        date: "2024.03.02",
    },
    {
        id: 8,
        status: "취소",
        time: "5",
        date: "2024.03.03",
    },
    {
        id: 9,
        status: "취소",
        time: "7",
        date: "2024.03.04",
    },
    {
        id: 10,
        status: "취소",
        time: "2",
        date: "2024.03.05",
    },
    {
        id: 11,
        status: "취소",
        time: "4",
        date: "2024.03.11",
    },
];

// 봉사 내역 렌더링▼
const renderVolunteers = () => {
    // 1. boost 배열 확인
    console.log(volunteers); // boost 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const volunteerList = document.querySelector(".volunteer-list");
    const emptyComponent = document.querySelector(
        "#volunteer .empty-component"
    );

    console.log(volunteerList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (volunteers.length === 0) {
        volunteerList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        volunteerList.style.display = "block";
        emptyComponent.style.display = "none";
        volunteerList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>봉사 활동 번호</th>
                        <th>구분</th>
                        <th>봉사 시간</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${volunteers
                    .map(
                        (volunteer) => `
                    <tr class="news-data-rows" data-forloop="${volunteer.id}">
                        <td class="news-center-table-body-number">${
                            volunteer.id
                        }</td>
                        <td class="news-center-table-body-category">${
                            "봉사 " + volunteer.status
                        }</td>
                        <td class="news-center-table-body-title"><span>${
                            volunteer.time + "시간"
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            volunteer.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderVolunteers(volunteers);

// 전체 항목 숫자 증가
const volunteerTotalCount = volunteers.filter(
    (volunteer) => volunteer.status === "완료" || volunteer.status === "취소"
).length;
document.getElementById("volunteer-totalCount").textContent =
    volunteerTotalCount;

// 봉사 완료 숫자 증가
const volunteerCompletedCount = volunteers.filter(
    (volunteer) => volunteer.status === "완료"
).length;
document.getElementById("volunteer-completedCount").textContent =
    volunteerCompletedCount;

// 봉사 취소 숫자 감소
const volunteerCancelCount = volunteers.filter(
    (volunteer) => volunteer.status === "취소"
).length;
document.getElementById("volunteer-cancelCount").textContent =
    volunteerCancelCount;

/*********************내 문의**********************/
const inquirys = [
    {
        id: 1,
        status: "대기중",
        inquiries: "문의 내용 요약1",
        date: "2024.03.01",
    },
    {
        id: 2,
        status: "완료",
        inquiries: "문의 내용 요약2",
        date: "2024.03.02",
    },
    {
        id: 3,
        status: "완료",
        inquiries: "문의 내용 요약3",
        date: "2024.03.03",
    },
    {
        id: 4,
        status: "대기중",
        inquiries: "문의 내용 요약4",
        date: "2024.03.04",
    },
    {
        id: 5,
        status: "대기중",
        inquiries: "문의 내용 요약5",
        date: "2024.03.05",
    },
];

// 문의 내역 렌더링▼
const renderInquirys = () => {
    // 1. boost 배열 확인
    console.log(inquirys); // boost 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const inquiryList = document.querySelector(".inquiry-list");
    const emptyComponent = document.querySelector("#inquiry .empty-component");

    console.log(inquiryList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (inquirys.length === 0) {
        inquiryList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        inquiryList.style.display = "block";
        emptyComponent.style.display = "none";
        inquiryList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>문의 번호</th>
                        <th>상태</th>
                        <th>문의 내용</th>
                        <th>작성 날짜</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${inquirys
                    .map(
                        (inquiry) => `
                    <tr class="news-data-rows" data-forloop="${inquiry.id}">
                        <td class="news-center-table-body-number">${inquiry.id}</td>
                        <td class="news-center-table-body-category">${inquiry.status}</td>
                        <td class="news-center-table-body-title"><span>${inquiry.inquiries}</span></td>
                        <td class="news-center-table-body-date">${inquiry.date}</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderInquirys(inquirys);

// 전체 항목 숫자 증가
const inquiryTotalCount = inquirys.filter(
    (inquiry) => inquiry.status === "완료" || inquiry.status === "대기중"
).length;
document.getElementById("inquiry-totalCount").textContent = inquiryTotalCount;

// 답변 완료 숫자 증가
const inquiryCompletedCount = inquirys.filter(
    (inquiry) => inquiry.status === "완료"
).length;
document.getElementById("inquiry-completedCount").textContent =
    inquiryCompletedCount;

// 답변 대기중 숫자 감소
const inquiryStandbyCount = inquirys.filter(
    (inquiry) => inquiry.status === "대기중"
).length;
document.getElementById("inquiry-standbyCount").textContent =
    inquiryStandbyCount;

/*********************봉사 활동 후기**********************/
const postscripts = [
    {
        id: 1,
        title: "후기 제목1",
        content: "후기 내용 요약1",
        date: "2024.03.01",
    },
    {
        id: 2,
        title: "후기 제목2",
        content: "후기 내용 요약2",
        date: "2024.03.02",
    },
    {
        id: 3,
        title: "후기 제목3",
        content: "후기 내용 요약3",
        date: "2024.03.03",
    },
    {
        id: 4,
        title: "후기 제목4",
        content: "후기 내용 요약4",
        date: "2024.03.04",
    },
    {
        id: 5,
        title: "후기 제목5",
        content: "후기 내용 요약5",
        date: "2024.03.05",
    },
];

// 후기 내역 렌더링▼
const renderPostscripts = () => {
    // 1. postscripts 배열 확인
    console.log(postscripts); // postscripts 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const postscriptList = document.querySelector(".postscript-list");
    const emptyComponent = document.querySelector(
        "#postscript .empty-component"
    );

    console.log(postscriptList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (!postscriptList || !emptyComponent) {
        console.error("HTML 요소가 선택되지 않았습니다.");
        return;
    }

    if (postscripts.length === 0) {
        postscriptList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        postscriptList.style.display = "block";
        emptyComponent.style.display = "none";
        postscriptList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>문의 번호</th>
                        <th>상태</th>
                        <th>문의 내용</th>
                        <th>작성 날짜</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${postscripts
                    .map(
                        (postscript) => `
                    <tr class="news-data-rows" data-forloop="${postscript.id}">
                        <td class="news-center-table-body-number">${postscript.id}</td>
                        <td class="news-center-table-body-category">${postscript.title}</td>
                        <td class="news-center-table-body-title"><span>${postscript.content}</span></td>
                        <td class="news-center-table-body-date">${postscript.date}</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderPostscripts(postscripts);

// 전체 항목 숫자 증가
const postscriptTotalCount = postscripts.length;
document.getElementById("postscript-totalCount").textContent =
    postscriptTotalCount;

/*********************기부 감사 인사**********************/
const gratitudes = [
    {
        id: 1,
        title: "감사 인사 제목1",
        content: "감사 인사 제목 내용 요약1",
        date: "2024.03.01",
    },
    {
        id: 2,
        title: "감사 인사 제목2",
        content: "감사 인사 제목 내용 요약2",
        date: "2024.03.02",
    },
    {
        id: 3,
        title: "감사 인사 제목3",
        content: "감사 인사 제목 내용 요약3",
        date: "2024.03.03",
    },
    {
        id: 4,
        title: "감사 인사 제목4",
        content: "감사 인사 제목 내용 요약4",
        date: "2024.03.04",
    },
    {
        id: 5,
        title: "감사 인사 제목5",
        content: "감사 인사 제목 내용 요약5",
        date: "2024.03.05",
    },
];

// 후기 내역 렌더링▼
const renderGratitudes = () => {
    // 1. gratitudes 배열 확인
    console.log(gratitudes); // gratitudes 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const gratitudeList = document.querySelector(".gratitude-list");
    const emptyComponent = document.querySelector(
        "#gratitude .empty-component"
    );

    console.log(gratitudeList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

    // 이후 기존의 코드
    if (!gratitudeList || !emptyComponent) {
        console.error("HTML 요소가 선택되지 않았습니다.");
        return;
    }

    if (gratitudes.length === 0) {
        gratitudeList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        gratitudeList.style.display = "block";
        emptyComponent.style.display = "none";
        gratitudeList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>문의 번호</th>
                        <th>상태</th>
                        <th>문의 내용</th>
                        <th>작성 날짜</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${gratitudes
                    .map(
                        (gratitude) => `
                    <tr class="news-data-rows" data-forloop="${gratitude.id}">
                        <td class="news-center-table-body-number">${gratitude.id}</td>
                        <td class="news-center-table-body-category">${gratitude.title}</td>
                        <td class="news-center-table-body-title"><span>${gratitude.content}</span></td>
                        <td class="news-center-table-body-date">${gratitude.date}</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }
};
renderGratitudes(gratitudes);

// // 전체 항목 숫자 증가
const gratitudeTotalCount = gratitudes.length;
document.getElementById("gratitude-totalCount").textContent =
    gratitudeTotalCount;

/*********************공통*********************/

// 모든 .fItXBi.toggle 요소를 선택
var toggleElements = document.querySelectorAll(".fItXBi.toggle");

// 각 요소에 대해 클릭 이벤트 추가
toggleElements.forEach(function (element) {
    element.addEventListener("click", function () {
        // 모든 요소에서 active 클래스 제거
        toggleElements.forEach(function (el) {
            el.classList.remove("active");
        });

        // 클릭된 요소에만 active 클래스 추가
        this.classList.add("active");
    });
});

// // 모든 탭 요소를 선택합니다.
const tabs = document.querySelectorAll(".tab");

// 각 탭에 클릭 이벤트를 추가합니다.
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // 모든 탭에서 active 클래스를 제거합니다.
        tabs.forEach((t) => t.classList.remove("active"));

        // 클릭된 탭에 active 클래스를 추가합니다.
        tab.classList.add("active");
    });
});

const gNTKJgElement = document.querySelector(".gNTKJg");
const dateButtons = document.querySelectorAll(".date-button .fItXBi.toggle");
const lnbItems = gNTKJgElement
    ? gNTKJgElement.querySelectorAll(".lnb-item")
    : [];
const tabsContainers = document.querySelectorAll(".bqkLME.tabs");

// 초기화 버튼에 이벤트 리스너 등록
document.body.addEventListener("click", function (event) {
    if (event.target && event.target.id === "Initialization") {
        resetToggleActiveClasses();
    }
});

// 초기화 버튼 클릭 시 모든 .toggle의 active 클래스만 제거 (lnb-item의 active와 탭의 active는 유지)
function resetToggleActiveClasses() {
    dateButtons.forEach((toggleElement) =>
        toggleElement.classList.remove("active")
    );
}

// 모든 lnb-item이 active 상태로 변경될 때 해당 탭 컨테이너의 첫 번째 탭에 active 추가
function activateFirstTab(lnbItem) {
    // 모든 date-button의 active 상태 제거
    dateButtons.forEach((toggleElement) => {
        toggleElement.classList.remove("active");
    });

    // lnb-item과 관련된 tabsContainer의 첫 번째 탭에 active 추가
    if (tabsContainers.length > 0) {
        tabsContainers.forEach((tabsContainer) => {
            if (lnbItem.classList.contains("active")) {
                const tabs = tabsContainer.querySelectorAll(".tab");
                tabs.forEach((tab) => tab.classList.remove("active"));
                const firstTab = tabs[0];
                if (firstTab) {
                    firstTab.classList.add("active");
                }
            }
        });
    }
}

lnbItems.forEach((lnbItem) => {
    lnbItem.addEventListener("click", () => {
        activateFirstTab(lnbItem);
    });

    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
            ) {
                // lnb-item이 active 상태로 변경되었을 때 실행
                if (lnbItem.classList.contains("active")) {
                    activateFirstTab(lnbItem);
                }
            }
        });
    });

    // 모든 lnb-item의 class 속성을 감시하도록 설정합니다.
    observer.observe(lnbItem, {
        attributes: true,
        attributeFilter: ["class"],
    });
});
