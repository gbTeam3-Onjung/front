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

const posts = [
    {
        id: 1,
        title: "첫 번째 게시글",
        summary: "첫 번째 게시글 요약",
        date: "2024.03.01",
    },
    {
        id: 2,
        title: "두 번째 게시글",
        summary: "두 번째 게시글 요약",
        date: "2024.03.02",
    },
    {
        id: 3,
        title: "세 번째 게시글",
        summary: "세 번째 게시글 요약",
        date: "2024.03.03",
    },
    {
        id: 4,
        title: "네 번째 게시글",
        summary: "네 번째 게시글 요약",
        date: "2024.03.04",
    },
    {
        id: 5,
        title: "다섯 번째 게시글",
        summary: "다섯 번째 게시글 요약",
        date: "2024.03.05",
    },
    {
        id: 6,
        title: "여섯 번째 게시글",
        summary: "여섯 번째 게시글 요약",
        date: "2024.03.06",
    },
    {
        id: 7,
        title: "일곱 번째 게시글",
        summary: "일곱 번째 게시글 요약",
        date: "2024.03.07",
    },
    {
        id: 8,
        title: "여덟 번째 게시글",
        summary: "여덟 번째 게시글 요약",
        date: "2024.03.08",
    },
    {
        id: 9,
        title: "아홉 번째 게시글",
        summary: "아홉 번째 게시글 요약",
        date: "2024.03.09",
    },
    {
        id: 10,
        title: "열 번째 게시글",
        summary: "열 번째 게시글 요약",
        date: "2024.03.10",
    },
    {
        id: 11,
        title: "열한 번째 게시글",
        summary: "열한 번째 게시글 요약",
        date: "2024.03.11",
    },
];

const replies = [
    {
        id: 1,
        postTitle: "댓글이 달린 게시글 1",
        summary: "댓글 내용 1",
        date: "2024.02.01",
    },
    {
        id: 2,
        postTitle: "댓글이 달린 게시글 2",
        summary: "댓글 내용 2",
        date: "2024.02.02",
    },
    {
        id: 3,
        postTitle: "댓글이 달린 게시글 3",
        summary: "댓글 내용 2",
        date: "2024.02.03",
    },
    {
        id: 4,
        postTitle: "댓글이 달린 게시글 4",
        summary: "댓글 내용 4",
        date: "2024.02.08",
    },
];

const inquiries = [
    {
        id: 1,
        title: "첫 번째 문의",
        summary: "첫 번째 문의 요약",
        date: "2024.03.01",
    },
    {
        id: 2,
        title: "두 번째 문의",
        summary: "두 번째 문의 요약",
        date: "2024.03.02",
    },
    {
        id: 3,
        title: "세 번째 문의",
        summary: "세 번째 문의 요약",
        date: "2024.03.03",
    },
    {
        id: 4,
        title: "네 번째 문의",
        summary: "네 번째 문의 요약",
        date: "2024.03.04",
    },
    {
        id: 5,
        title: "다섯 번째 문의",
        summary: "다섯 번째 문의 요약",
        date: "2024.03.05",
    },
    {
        id: 6,
        title: "여섯 번째 문의",
        summary: "여섯 번째 문의 요약",
        date: "2024.03.06",
    },
    {
        id: 7,
        title: "일곱 번째 문의",
        summary: "일곱 번째 문의 요약",
        date: "2024.03.07",
    },
    {
        id: 8,
        title: "여덟 번째 문의",
        summary: "여덟 번째 문의 요약",
        date: "2024.03.08",
    },
    {
        id: 9,
        title: "아홉 번째 문의",
        summary: "아홉 번째 문의 요약",
        date: "2024.03.09",
    },
    {
        id: 10,
        title: "열 번째 문의",
        summary: "열 번째 문의 요약",
        date: "2024.03.10",
    },
    {
        id: 11,
        title: "열한 번째 문의",
        summary: "열한 번째 문의 요약",
        date: "2024.03.11",
    },
];

const notifications = [
    {
        id: 1,
        type: "message",
        content: "새로운 메시지가 도착했습니다.",
        date: "2024.09.01 오후 2시 45분",
        img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
    },
    {
        id: 2,
        type: "alert",
        content: "프로젝트 지원자가 있습니다.",
        date: "2024.09.01 오후 3시 00분",
        img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
    },
    {
        id: 1,
        type: "message",
        content: "새로운 메시지가 도착했습니다.",
        date: "2024.09.01 오후 2시 45분",
        img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
    },
    {
        id: 2,
        type: "alert",
        content: "프로젝트 지원자가 있습니다.",
        date: "2024.09.01 오후 3시 00분",
        img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
    },
    {
        id: 1,
        type: "message",
        content: "새로운 메시지가 도착했습니다.",
        date: "2024.09.01 오후 2시 45분",
        img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
    },
    {
        id: 2,
        type: "alert",
        content: "프로젝트 지원자가 있습니다.",
        date: "2024.09.01 오후 3시 00분",
        img: "https://www.wishket.com/static/renewal/img/account/notifications/alarm_icon_finish_c.png",
    },
];
const itemsPerPage = 5;

// 현재 페이지 상태
let currentPostPage = 1;
let currentReplyPage = 1;
let currentInquiryPage = 1;
let currentPointPage = 1;
let currentNotificationPage = 1;

// 페이지네이션을 위한 함수
const paginate = (items, page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
};

// 페이지네이션 버튼 상태 업데이트
const updatePaginationButton = (items, currentPage, paginationId) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationList = document.querySelector(
        `#${paginationId} .pagination`
    );
    paginationList.innerHTML = "";

    // '이전' 버튼
    paginationList.innerHTML += `
        <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
            <a class="page-link" href="#">이전</a>
        </li>
    `;

    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
        paginationList.innerHTML += `
            <li class="page-item ${currentPage === i ? "active" : ""}">
                <a class="page-link" href="#">${i}</a>
            </li>
        `;
    }

    // '다음' 버튼
    paginationList.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
            <a class="page-link" href="#">다음</a>
        </li>
    `;

    addPaginationEventListeners(paginationId);
};

// 페이지 버튼 클릭 이벤트 추가
const addPaginationEventListeners = (paginationId) => {
    const paginationList = document.querySelector(
        `#${paginationId} .pagination`
    );

    paginationList.querySelectorAll(".page-item a").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const text = link.textContent.trim();
            let pageNumber = parseInt(text, 10);

            // 이전 , 다음 버튼의 이동할 페이지 번호 결정하기
            if (text === "다음") {
                pageNumber =
                    (paginationId === "myboard"
                        ? currentPostPage
                        : paginationId === "myreply"
                        ? currentReplyPage
                        : paginationId === "mypoints"
                        ? currentPointPage
                        : paginationId === "mynotice"
                        ? currentNotificationPage
                        : currentInquiryPage) + 1;
            } else if (text === "이전") {
                pageNumber =
                    (paginationId === "myboard"
                        ? currentPostPage
                        : paginationId === "myreply"
                        ? currentReplyPage
                        : paginationId === "mypoints"
                        ? currentPointPage
                        : paginationId === "mynotice"
                        ? currentNotificationPage
                        : currentInquiryPage) - 1;
            }

            // 페이지 번호가 정수인지 확인하고 유효한 범위인지 체크
            if (Number.isInteger(pageNumber) && pageNumber > 0) {
                goToPage(pageNumber, paginationId);
            }
        });
    });
};

// 페이지 이동 함수
const goToPage = (pageNumber, paginationId) => {
    const totalItems =
        paginationId === "myboard"
            ? posts.length
            : paginationId === "myreply"
            ? replies.length
            : paginationId === "mypoints"
            ? points.length
            : paginationId === "mynotice"
            ? notifications.length
            : inquiries.length;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (pageNumber < 1 || pageNumber > totalPages) return;

    if (paginationId === "myboard") {
        currentPostPage = pageNumber;
        renderPosts();
    } else if (paginationId === "myreply") {
        currentReplyPage = pageNumber;
        renderReplies();
    } else if (paginationId === "mypoints") {
        currentPointPage = pageNumber;
        renderPoints();
    } else if (paginationId === "mynotice") {
        currentNotificationPage = pageNumber;
        renderNotifications();
    } else {
        currentInquiryPage = pageNumber;
        renderInquiries();
    }
};

// 게시글 렌더링
const renderPosts = () => {
    const postList = document.querySelector(".post-list");
    const emptyComponent = document.querySelector("#myboard .empty-component");

    // 페이지네이션 처리된 게시글 목록
    const reversedPosts = posts.slice().reverse(); // 데이터 복사 및 반전
    const paginatedPosts = paginate(reversedPosts, currentPostPage);

    if (paginatedPosts.length === 0) {
        postList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        postList.style.display = "block";
        emptyComponent.style.display = "none";
        postList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 703px;">
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
                ${paginatedPosts
                    .map(
                        (post, index) => `
                    <tr class="news-data-rows" data-forloop="${
                        reversedPosts.length -
                        (currentPostPage - 1) * itemsPerPage -
                        index
                    }">
                        <td class="news-center-table-body-number">${
                            reversedPosts.length -
                            (currentPostPage - 1) * itemsPerPage -
                            index
                        }</td>
                        <td class="news-center-table-body-category">결제 내역</td>
                        <td class="news-center-table-body-title"><span>${
                            post.title
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            post.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }

    updatePaginationButton(reversedPosts, currentPostPage, "payment");
};

// 댓글 렌더링
const renderReplies = () => {
    const replyList = document.querySelector(".reply-list");
    const emptyComponent = document.querySelector("#myreply .empty-component");

    // 페이지네이션 처리된 댓글 목록
    const reversedReplies = replies.slice().reverse(); // 데이터 복사 및 반전
    const paginatedReplies = paginate(reversedReplies, currentReplyPage);

    if (paginatedReplies.length === 0) {
        replyList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        replyList.style.display = "block";
        emptyComponent.style.display = "none";
        replyList.innerHTML = `
            <table class="news-center-table" style="margin-top: 0; margin-bottom: 20px;">
                <colgroup>
                    <col style="width: 57px;">
                    <col style="width: 132px;">
                    <col style="width: 703px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${paginatedReplies
                    .map(
                        (reply, index) => `
                    <tr class="news-data-rows" data-forloop="${
                        reversedReplies.length -
                        (currentReplyPage - 1) * itemsPerPage -
                        index
                    }">
                        <td class="news-center-table-body-number">${
                            reversedReplies.length -
                            (currentReplyPage - 1) * itemsPerPage -
                            index
                        }</td>
                        <td class="news-center-table-body-category">댓글</td>
                        <td class="news-center-table-body-title"><span>${
                            reply.postTitle
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            reply.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }

    updatePaginationButton(reversedReplies, currentReplyPage, "myreply");
};

// 문의 렌더링
const renderInquiries = () => {
    const inquiryList = document.querySelector(".inquiry-list");
    const emptyComponent = document.querySelector(
        "#myinquiry .empty-component"
    );

    // 페이지네이션 처리된 문의 목록
    const reversedInquiries = inquiries.slice().reverse(); // 데이터 복사 및 반전
    const paginatedInquiries = paginate(reversedInquiries, currentInquiryPage);

    if (paginatedInquiries.length === 0) {
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
                    <col style="width: 703px;">
                    <col style="width: 104px;">
                </colgroup>
                <thead class="news-center-table-head">
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody class="news-center-table-body">
                ${paginatedInquiries
                    .map(
                        (inquiry, index) => `
                    <tr class="news-data-rows" data-forloop="${
                        reversedInquiries.length -
                        (currentInquiryPage - 1) * itemsPerPage -
                        index
                    }">
                        <td class="news-center-table-body-number">${
                            reversedInquiries.length -
                            (currentInquiryPage - 1) * itemsPerPage -
                            index
                        }</td>
                        <td class="news-center-table-body-category">문의</td>
                        <td class="news-center-table-body-title"><span>${
                            inquiry.title
                        }</span></td>
                        <td class="news-center-table-body-date">${
                            inquiry.date
                        }</td>
                    </tr>
                `
                    )
                    .join("")}
                </tbody>
            </table>
        `;
    }

    updatePaginationButton(reversedInquiries, currentInquiryPage, "myinquiry");
};

// 알림 렌더링 함수
const renderNotifications = (notificationData = notifications) => {
    const notificationList = document.querySelector(".noti-body");
    const emptyComponent = document.querySelector(".empty-component");

    const reversedNotifications = notificationData.slice().reverse(); // 알림 데이터를 역순으로 표시
    const paginatedNotifications = paginate(
        reversedNotifications,
        currentNotificationPage
    );

    if (paginatedNotifications.length === 0) {
        notificationList.style.display = "none";
        emptyComponent.style.display = "block";
    } else {
        notificationList.style.display = "block";
        emptyComponent.style.display = "none";
        notificationList.innerHTML = paginatedNotifications
            .map(
                (notification) => `
                <div class="noti-box unread">
                    <div class="noti-box-wrapper with-img">
                        <img
                            class="noti-img"
                            src="${notification.img}"
                            alt="알림 이미지"
                        />
                        <div class="noti-box-content">
                            <div class="noti-title">
                                ${notification.content}
                            </div>
                            <div class="noti-date">
                                ${notification.date}
                            </div>
                        </div>
                    </div>
                </div>
            `
            )
            .join("");
    }

    updatePaginationButton(
        reversedNotifications,
        currentNotificationPage,
        "mynotice"
    );
};
