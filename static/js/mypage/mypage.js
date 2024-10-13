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
});
