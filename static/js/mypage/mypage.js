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
document.addEventListener("click", () => {
    // 데이터 편집 가능 요소 설정
    const editableElements = document.querySelectorAll(".data-editable");

    editableElements.forEach((element) => {
        // 각 요소에 대해 반복적으로 처리하는 코드 블록을 정의
        element.addEventListener("click", () => {
            const currentText = element.innerText;
            const input = document.createElement("input");
            input.type = "text";
            // 생성된 입력 필드의 유형을 text로 설정

            input.value =
                currentText.trim() === "정보를 입력해주세요."
                    ? ""
                    : currentText.trim();
            // 만약 현재 텍스트가 "정보를 입력해주세요."인 경우, 입력 필드를 비워두고
            // 그렇지 않으면, 기존 텍스트를 입력 필드에 표시
            // trim() 메서드는 텍스트의 앞뒤 공백 제거
            element.innerHTML = "";
            element.appendChild(input);
            input.focus();
            input.addEventListener("blur", () => {
                const newText =
                    input.value.trim() === ""
                        ? "정보를 입력해주세요."
                        : input.value.trim();
                // 만약 입력 필드가 비어 있다면, 기본 메시지("정보를 입력해주세요.")를 사용
                element.innerText = newText;
            });

            // input.addEventListener("keydown", (e) => {
            //     if (e.key === "Enter") {
            //         input.blur();
            //     }
            // });
        });
    });

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

// 초기 렌더링
renderPosts();
renderReplies();
renderInquiries();
// renderPoints();
renderNotifications();

// 기술명과 경험 필드의 값이 빈 값이 아닌지 확인하는 함수
function updateButtonState() {
    const techName = document.querySelector(".stack-search-typing-input").value;
    const experience = document.querySelector(
        'select[name="experience"]'
    ).value;
    const submitButton = document.querySelector(
        ".btn.btn-8-20.btn-partner.btn-submit"
    );

    if (techName !== "" && experience !== "") {
        // 값이 모두 채워져 있으면 버튼 색상 변경
        submitButton.style.backgroundColor = "#00a878";
        submitButton.style.color = "#fff";
        submitButton.style.border = "#00a878";
        submitButton.style.cursor = "pointer";
    } else {
        // 값이 비어 있으면 원래 상태로 복원 (원래 색상으로 복원)
        submitButton.style.backgroundColor = ""; // 원래 배경색으로 복원
        submitButton.style.color = ""; // 원래 글자색으로 복원
        submitButton.style.border = ""; // 원래 테두리색으로 복원
        submitButton.style.cursor = ""; // 원래 커서 상태로 복원
    }
}