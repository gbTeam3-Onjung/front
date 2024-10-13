document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector("#chk-agree");
    const completeButton = document.querySelector(".register-btn-complete");
    const emailInput = document.getElementById("email");
    const sendAuthButton = document.querySelector(".button-btn-send");
    const emailCodeInput = document.getElementById("email-code");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");
    const messageSpan = document.createElement("span");
    const emailCodeBox = document.querySelector(".register-email-code-box");
    const countdownTimer = document.getElementById("countdown-timer");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let timerInterval;
    let isCodeSent = false;

    completeButton.disabled = true;
    emailCodeBox.style.display = "none"; // 초기에는 인증번호 입력란 숨김

    // 체크박스 상태 변경 시 버튼 활성화/비활성화
    checkbox.addEventListener("change", function () {
        completeButton.disabled = !checkbox.checked;
    });

    // 이메일 입력 필드에서 입력이 변경될 때
    emailInput.addEventListener("input", function () {
        const emailValue = emailInput.value.trim();

        // 초기값이 없을 때
        if (emailValue === "") {
            emailInput.classList.remove("success-sign", "warning");
            emailInput.style.border = "1px solid #ccc"; // 초기값
            emailInput.style.outline = ""; // 기본 아웃라인 스타일
            sendAuthButton.classList.remove("button-send-active");
        } else {
            sendAuthButton.classList.add("button-send-active");
            emailInput.classList.remove("warning"); // 경고 스타일 제거
            emailInput.style.borderColor = "blue"; // 기본 포커스 스타일
            emailInput.style.outline = ""; // 기본 아웃라인 스타일
        }
    });

    // 인증 버튼 클릭 시 이메일 형식 검사
    sendAuthButton.addEventListener("click", function () {
        const emailValue = emailInput.value.trim();
        if (emailRegex.test(emailValue)) {
            emailInput.classList.remove("warning");
            emailInput.classList.add("success-sign"); // 성공 스타일 추가
            emailInput.style.border = "1px solid #189f14"; // 성공 색상 적용
            showSuccessMessage("인증 번호가 발송되었습니다.");
            emailCodeBox.style.display = "block"; // 인증번호 입력란 표시
            isCodeSent = true; // 인증 번호 요청 상태 변경

            // 10분 카운트다운 시작
            let timeLeft = 10 * 60; // 10분
            clearInterval(timerInterval);
            countdownTimer.style.display = "block"; // 타이머 표시
            timerInterval = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                countdownTimer.textContent = `${String(minutes).padStart(
                    2,
                    "0"
                )}:${String(seconds).padStart(2, "0")}`;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    countdownTimer.textContent = ""; // 타이머 텍스트 초기화
                    showWarningMessage("입력 시간을 초과하였습니다."); // 메시지 표시
                    isCodeSent = false; // 인증번호 요청 상태 초기화
                    emailCodeBox.style.display = "none"; // 인증번호 입력란 숨김
                }
                timeLeft--;
            }, 1000);
            sendAuthButton.textContent = "재전송"; // 버튼 텍스트 변경
        } else {
            emailInput.classList.add("warning");
            emailInput.style.borderColor = "#f05050"; // 경고 색상으로 변경
            showWarningMessage("이메일 형식이 올바르지 않습니다.");
        }
    });

    // 이메일 입력란에서 값을 지웠을 때 처리
    emailInput.addEventListener("input", function () {
        const existingWarningMessage = document.querySelector(
            ".desc-span.warning-msg"
        );

        if (emailInput.value.length === 0) {
            // 이메일 입력란이 비어 있는 경우
            emailInput.classList.remove("success-sign", "warning"); // 성공 및 경고 스타일 제거
            emailInput.style.borderColor = "#ccc"; // 기본 테두리 색상으로 복원
            emailInput.style.outline = ""; // 기본 아웃라인으로 복원

            // 인증번호 입력란과 버튼 상태 초기화
            emailCodeBox.style.display = "none"; // 인증번호 입력란 숨김
            sendAuthButton.textContent = "인증"; // 버튼 텍스트를 "인증"으로 변경

            if (existingWarningMessage) {
                existingWarningMessage.style.display = "none"; // 경고 메시지 숨김
            }
        } else {
            // 값이 하나라도 있을 경우
            if (existingWarningMessage) {
                existingWarningMessage.style.display = "none"; // 경고 메시지 숨김
            }
            sendAuthButton.textContent = "인증"; // 버튼 텍스트를 "인증"으로 변경
            emailCodeBox.style.display = "none"; // 인증번호 입력란 숨김
        }
    });

    // 인증 번호 입력 필드에서 입력이 변경될 때
    emailCodeInput.addEventListener("input", function () {
        const inputValue = emailCodeInput.value.trim();
        const confirmButton = document.querySelector(
            ".register-email-code-box .button-btn-send"
        );

        // 입력이 있을 때 버튼에 활성화 클래스 추가
        if (inputValue !== "") {
            confirmButton.classList.add("button-send-active"); // 활성화 상태 클래스 추가
        } else {
            confirmButton.classList.remove("button-send-active"); // 활성화 상태 클래스 제거
        }
    });

    // 인증 완료 버튼 클릭 시 유효성 검사
    const confirmButton = document.querySelector(
        ".register-email-code-box .button-btn-send"
    );
    confirmButton.addEventListener("click", function () {
        if (isCodeSent) {
            const inputCode = emailCodeInput.value.trim();
            const correctCode = "123456"; // 예시: 올바른 인증번호

            if (inputCode === "") {
                showWarningMessage("인증번호를 입력해 주세요."); // 입력이 비어있을 경우
            } else if (inputCode !== correctCode) {
                showWarningMessage("인증번호가 일치하지 않습니다.");
            } else {
                // 인증 성공 처리
                clearInterval(timerInterval); // 타이머 중지
                countdownTimer.textContent = ""; // 타이머 초기화
                emailInput.classList.remove("warning"); // 경고 스타일 제거
                emailInput.classList.add("success-sign"); // 성공 스타일 추가
                emailInput.style.border = "1px solid #189f14"; // 성공 색상 적용
                alert("인증이 완료되었습니다."); // 성공 알림
            }
        }
    });

    // 비밀번호 확인 입력 시 유효성 검사
    passwordConfirmInput.addEventListener("input", function () {
        const passwordValue = passwordInput.value.trim();
        const passwordConfirmValue = passwordConfirmInput.value.trim();
        const warningMessageSpan = document.querySelector(
            ".desc-span.warning-msg"
        );

        // 비밀번호와 비밀번호 확인이 일치하지 않을 때
        if (
            passwordConfirmValue !== "" &&
            passwordValue !== passwordConfirmValue
        ) {
            warningMessageSpan.style.display = "block"; // 경고 메시지 표시
        } else {
            warningMessageSpan.style.display = "none"; // 경고 메시지 숨김
        }
    });

    // 비밀번호 표시/숨기기 함수
    window.togglePasswordVisibility = function (inputId, imgElement) {
        const passwordInput = document.getElementById(inputId);
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // 비밀번호를 텍스트로 변경
            imgElement.src =
                "https://accounts-front.stunning.kr/assets/img/login/ico-visible.png"; // 비밀번호 보이기 아이콘으로 변경
        } else {
            passwordInput.type = "password"; // 다시 비밀번호로 변경
            imgElement.src =
                "https://accounts-front.stunning.kr/assets/img/login/ico-hidden.png"; // 비밀번호 숨기기 아이콘으로 변경
        }
    };

    function showSuccessMessage(message) {
        messageSpan.className = "desc-span successmsg-msg"; // 성공 메시지 스타일
        messageSpan.textContent = message; // 성공 메시지 텍스트
        const emailInputBox = sendAuthButton.closest(".register-with-btn-box");
        emailInputBox.appendChild(messageSpan); // 메시지 추가
    }

    function showWarningMessage(message) {
        const existingMessage = document.querySelector(
            ".desc-span.warning-msg"
        );
        if (existingMessage) {
            existingMessage.remove(); // 기존 메시지 제거
        }
        messageSpan.className = "desc-span warning-msg"; // 경고 메시지 스타일
        messageSpan.textContent = message; // 경고 메시지 텍스트
        const emailInputBox = sendAuthButton.closest(".register-with-btn-box");
        emailInputBox.appendChild(messageSpan); // 메시지 추가
    }

    function removeExistingMessage() {
        const existingMessage = document.querySelector(".desc-span");
        if (existingMessage) {
            existingMessage.remove(); // 기존 메시지 제거
        }
    }
});
