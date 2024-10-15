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

// const replies = [
//     {
//         id: 1,
//         postTitle: "댓글이 달린 게시글 1",
//         summary: "댓글 내용 1",
//         date: "2024.02.01",
//     },
//     {
//         id: 2,
//         postTitle: "댓글이 달린 게시글 2",
//         summary: "댓글 내용 2",
//         date: "2024.02.02",
//     },
//     {
//         id: 3,
//         paymentTitle: "댓글이 달린 게시글 3",
//         summary: "댓글 내용 2",
//         date: "2024.02.03",
//     },
//     {
//         id: 4,
//         postTitle: "댓글이 달린 게시글 4",
//         summary: "댓글 내용 4",
//         date: "2024.02.08",
//     },
// ];

// const inquiries = [
//     {
//         id: 1,
//         title: "첫 번째 문의",
//         summary: "첫 번째 문의 요약",
//         date: "2024.03.01",
//     },
//     {
//         id: 2,
//         title: "두 번째 문의",
//         summary: "두 번째 문의 요약",
//         date: "2024.03.02",
//     },
//     {
//         id: 3,
//         title: "세 번째 문의",
//         summary: "세 번째 문의 요약",
//         date: "2024.03.03",
//     },
//     {
//         id: 4,
//         title: "네 번째 문의",
//         summary: "네 번째 문의 요약",
//         date: "2024.03.04",
//     },
//     {
//         id: 5,
//         title: "다섯 번째 문의",
//         summary: "다섯 번째 문의 요약",
//         date: "2024.03.05",
//     },
//     {
//         id: 6,
//         title: "여섯 번째 문의",
//         summary: "여섯 번째 문의 요약",
//         date: "2024.03.06",
//     },
//     {
//         id: 7,
//         title: "일곱 번째 문의",
//         summary: "일곱 번째 문의 요약",
//         date: "2024.03.07",
//     },
//     {
//         id: 8,
//         title: "여덟 번째 문의",
//         summary: "여덟 번째 문의 요약",
//         date: "2024.03.08",
//     },
//     {
//         id: 9,
//         title: "아홉 번째 문의",
//         summary: "아홉 번째 문의 요약",
//         date: "2024.03.09",
//     },
//     {
//         id: 10,
//         title: "열 번째 문의",
//         summary: "열 번째 문의 요약",
//         date: "2024.03.10",
//     },
//     {
//         id: 11,
//         title: "열한 번째 문의",
//         summary: "열한 번째 문의 요약",
//         date: "2024.03.11",
//     },
// ];

// const notifications = [
//     {
//         id: 1,
//         type: "message",
//         content: "새로운 메시지가 도착했습니다.",
//         date: "2024.09.01 오후 2시 45분",
//         img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
//     },
//     {
//         id: 2,
//         type: "alert",
//         content: "프로젝트 지원자가 있습니다.",
//         date: "2024.09.01 오후 3시 00분",
//         img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
//     },
//     {
//         id: 1,
//         type: "message",
//         content: "새로운 메시지가 도착했습니다.",
//         date: "2024.09.01 오후 2시 45분",
//         img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
//     },
//     {
//         id: 2,
//         type: "alert",
//         content: "프로젝트 지원자가 있습니다.",
//         date: "2024.09.01 오후 3시 00분",
//         img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
//     },
//     {
//         id: 1,
//         type: "message",
//         content: "새로운 메시지가 도착했습니다.",
//         date: "2024.09.01 오후 2시 45분",
//         img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
//     },
//     {
//         id: 2,
//         type: "alert",
//         content: "프로젝트 지원자가 있습니다.",
//         date: "2024.09.01 오후 3시 00분",
//         img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
//     },
// ];

// 게시글 렌더링
const renderPosts = () => {
    // 1. payment 배열 확인
    console.log(payments); // payment 배열이 제대로 정의되고, 데이터가 있는지 확인

    // 2. HTML 요소 선택 확인
    const paymentList = document.querySelector(".payment-list");
    const emptyComponent = document.querySelector("#payment .empty-component");

    console.log(paymentList, emptyComponent); // 요소들이 정상적으로 선택되고 있는지 확인

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
                        <th>번호</th>
                        <th>구분</th>
                        <th>금액</th>
                        <th>결제일</th>
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
renderPosts();

// // 댓글 렌더링
// const renderReplies = () => {
//     const replyList = document.querySelector(".reply-list");
//     const emptyComponent = document.querySelector("#myreply .empty-component");

//     if (replies.length === 0) {
//         replyList.style.display = "none";
//         emptyComponent.style.display = "block";
//     } else {
//         replyList.style.display = "block";
//         emptyComponent.style.display = "none";
//         replyList.innerHTML = `
//             <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
//                 <colgroup>
//                     <col style="width: 57px;">
//                     <col style="width: 132px;">
//                     <col style="width: 703px;">
//                     <col style="width: 104px;">
//                 </colgroup>
//                 <thead class="news-center-table-head">
//                     <tr>
//                         <th>번호</th>
//                         <th>구분</th>
//                         <th>제목</th>
//                         <th>등록일</th>
//                     </tr>
//                 </thead>
//                 <tbody class="news-center-table-body">
//                 ${replies
//                     .map(
//                         (reply, index) => `
//                     <tr class="news-data-rows" data-forloop="${
//                         replies.length - index
//                     }">
//                         <td class="news-center-table-body-number">${
//                             replies.length - index
//                         }</td>
//                         <td class="news-center-table-body-category">댓글</td>
//                         <td class="news-center-table-body-title"><span>${
//                             reply.postTitle
//                         }</span></td>
//                         <td class="news-center-table-body-date">${
//                             reply.date
//                         }</td>
//                     </tr>
//                 `
//                     )
//                     .join("")}
//                 </tbody>
//             </table>
//         `;
//     }
// };

// // 문의 렌더링
// const renderInquiries = () => {
//     const inquiryList = document.querySelector(".inquiry-list");
//     const emptyComponent = document.querySelector(
//         "#myinquiry .empty-component"
//     );
// };

// // 알림 렌더링 함수
// const renderNotifications = (notificationData = notifications) => {
//     const notificationList = document.querySelector(".noti-body");
//     const emptyComponent = document.querySelector(".empty-component");

//     if (notificationData.length === 0) {
//         notificationList.style.display = "none";
//         emptyComponent.style.display = "block";
//     } else {
//         notificationList.style.display = "block";
//         emptyComponent.style.display = "none";
//         notificationList.innerHTML = notificationData
//             .map(
//                 (notification) => `
//                 <div class="noti-box unread">
//                     <div class="noti-box-wrapper with-img">
//                         <img
//                             class="noti-img"
//                             src="${notification.img}"
//                             alt="알림 이미지"
//                         />
//                         <div class="noti-box-content">
//                             <div class="noti-title">
//                                 ${notification.content}
//                             </div>
//                             <div class="noti-date">
//                                 ${notification.date}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `
//             )
//             .join("");
//     }
// };

// 전체 항목 숫자 증가
const totalCount = payments.filter(
    (payment) => payment.status === "완료" || payment.status === "취소"
).length;
document.getElementById("totalCount").textContent = totalCount;

// 결제 완료 숫자 증가
const completedCount = payments.filter(
    (payment) => payment.status === "완료"
).length;
document.getElementById("completedCount").textContent = completedCount;

// 결제 취소 숫자 감소
const cancelCount = payments.filter(
    (payment) => payment.status === "취소"
).length;
document.getElementById("cancelCount").textContent = cancelCount;

// // 모든 탭 요소를 선택합니다.
// const tabs = document.querySelectorAll(".tab");

// // 각 탭에 클릭 이벤트를 추가합니다.
// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         // 모든 탭에서 active 클래스를 제거합니다.
//         tabs.forEach((t) => t.classList.remove("active"));

//         // 클릭된 탭에 active 클래스를 추가합니다.
//         tab.classList.add("active");
//     });
// });

// 각 탭을 선택하고 클릭 이벤트를 추가합니다.
document.querySelectorAll(".tab").forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // 모든 탭에서 active 클래스 제거하고, 클릭된 탭에 active 클래스 추가
        document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // 필터링된 결제 내역 표시
        let filteredPayments = [];
        if (index === 0) {
            // "전체" 탭
            filteredPayments = payments;
        } else if (index === 1) {
            // "결제 완료" 탭
            filteredPayments = payments.filter(
                (payment) => payment.status === "완료"
            );
        } else if (index === 2) {
            // "결제 취소" 탭
            filteredPayments = payments.filter(
                (payment) => payment.status === "취소"
            );
        }

        displayPayments(filteredPayments);
    });
});

// 초기 상태에서 전체 결제 항목을 표시
displayPayments(payments);

// 결제 항목을 화면에 표시하는 함수
function displayPayments(paymentList) {
    const paymentListDiv = document.querySelector(".payment-list");
    paymentListDiv.innerHTML = ""; // 기존 내용을 초기화

    if (paymentList.length === 0) {
        // 결제 내역이 없을 경우 empty component 표시
        document.querySelector(".empty-component .empty").style.display =
            "block";
        paymentListDiv.style.display = "none";
    } else {
        // 결제 내역이 있는 경우 목록 표시
        document.querySelector(".empty-component .empty").style.display =
            "none";
        paymentListDiv.style.display = "block";

        // 동적으로 <table>을 생성하여 payment 데이터를 표시
        paymentListDiv.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 150px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>금액</th>
                        <th>결제일</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                    ${paymentList
                        .map(
                            (payment) => `
                                <tr class="news-data-rows" data-forloop="${payment.id}">
                                    <td class="news-center-table-body-number">${payment.id}</td>
                                    <td class="news-center-table-body-category">결제 ${payment.status}</td>
                                    <td class="news-center-table-body-title"><span>${payment.price}원</span></td>
                                    <td class="news-center-table-body-date">${payment.date}</td>
                                </tr>
                            `
                        )
                        .join("")}
                </tbody>
            </table>
        `;
    }
}

// 결제 완료, 결제 취소 항목 수를 업데이트하는 함수
function updateCounts() {
    const totalCount = payments.length;
    const completedCount = payments.filter(
        (payment) => payment.status === "완료"
    ).length;
    const cancelCount = payments.filter(
        (payment) => payment.status === "취소"
    ).length;

    document.getElementById("totalCount").textContent = totalCount;
    document.getElementById("completedCount").textContent = completedCount;
    document.getElementById("cancelCount").textContent = cancelCount;
}

// 페이지 로드 시 전체 개수 업데이트
updateCounts();
