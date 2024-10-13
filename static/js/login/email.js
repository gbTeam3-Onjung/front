document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector("#chk-agree");
    const completeButton = document.querySelector(".register-btn-complete");
    const emailInput = document.getElementById("email");
    const sendAuthButton = document.querySelector(".button-btn-send");
    const emailCodeInput = document.getElementById("email-code");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");
    const emailCodeBox = document.querySelector(".register-email-code-box");
    const countdownTimer = document.getElementById("countdown-timer");
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net)$/;
    const passwordWarningMessage = document.querySelector(
        ".password-warning-msg"
    );

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
        const successMessage = document.querySelector(".desc-span.success-msg");
        const warningMessage = document.querySelector(".desc-span.warning-msg");

        if (emailValue === "") {
            emailInput.classList.remove("success-sign", "warning");
            emailInput.style.border = "1px solid #ccc"; // 기본 테두리 색상으로 복원
            emailInput.style.outline = ""; // 기본 아웃라인으로 복원
            sendAuthButton.classList.remove("button-send-active");

            if (successMessage) successMessage.style.display = "none";
            if (warningMessage) warningMessage.style.display = "none";
        } else {
            sendAuthButton.classList.add("button-send-active");
            emailInput.classList.remove("warning");
            emailInput.style.borderColor = "blue"; // 기본 포커스 색상으로 변경

            if (successMessage) successMessage.style.display = "none";
        }
    });

    // 인증 버튼 클릭 시 이메일 유효성 검사 및 인증번호 발송
    sendAuthButton.addEventListener("click", function () {
        const emailValue = emailInput.value.trim();

        if (emailRegex.test(emailValue)) {
            emailInput.classList.remove("warning");
            emailInput.classList.add("success-sign"); // 성공 스타일 추가
            emailInput.style.border = "1px solid #189f14"; // 성공 색상 적용

            showSuccessMessage("인증 번호가 발송되었습니다.", emailInput);

            // 인증번호 입력란 초기화
            emailCodeInput.value = ""; // 인증번호 입력란 값 초기화
            emailCodeInput.classList.remove("success-sign", "warning");
            emailCodeInput.style.borderColor = "#ccc"; // 기본 테두리 색상으로 복원
            emailCodeInput.style.outline = ""; // 기본 아웃라인으로 복원

            const existingSuccessMessage = emailCodeBox.querySelector(
                ".desc-span.success-msg"
            );
            const existingWarningMessage = emailCodeBox.querySelector(
                ".desc-span.warning-msg"
            );

            if (existingSuccessMessage) {
                existingSuccessMessage.remove(); // 기존 성공 메시지 삭제
            }

            if (existingWarningMessage) {
                existingWarningMessage.remove(); // 기존 경고 메시지 삭제
            }

            emailCodeBox.style.display = "block"; // 인증번호 입력란 표시
            isCodeSent = true; // 인증번호 요청 상태 변경

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
                    showWarningMessage(
                        "입력 시간을 초과하였습니다.",
                        emailCodeInput
                    ); // 인증번호 입력란 밑에 표시
                    emailCodeBox.style.display = "none"; // 인증번호 입력란 숨김
                    isCodeSent = false; // 인증번호 요청 상태 초기화
                }
                timeLeft--;
            }, 1000);
            sendAuthButton.textContent = "재전송"; // 버튼 텍스트 변경
        } else {
            emailInput.classList.add("warning");
            emailInput.style.borderColor = "#f05050"; // 경고 색상으로 변경
            showWarningMessage("이메일 형식이 올바르지 않습니다.", emailInput); // 이메일 입력란 밑에 경고 메시지 출력
        }
    });

    // 이메일 입력 필드에서 경고 메시지 숨기기
    emailInput.addEventListener("input", function () {
        const existingWarningMessage = document.querySelector(
            ".desc-span.warning-msg"
        );
        const successMessage = document.querySelector(".desc-span.success-msg");

        if (emailInput.value.length === 0) {
            emailInput.classList.remove("success-sign", "warning");
            emailInput.style.borderColor = "#ccc";
            emailInput.style.outline = "";
            emailCodeBox.style.display = "none";
            sendAuthButton.textContent = "인증";
            emailCodeInput.value = "";
            countdownTimer.textContent = "";
            clearInterval(timerInterval);

            if (existingWarningMessage) {
                existingWarningMessage.style.display = "none";
            }
            if (successMessage) {
                successMessage.style.display = "none";
            }
        } else {
            if (existingWarningMessage) {
                existingWarningMessage.style.display = "none";
            }
            sendAuthButton.textContent = "인증";
            emailCodeBox.style.display = "none";
        }
    });

    // 인증 번호 입력 필드에서 값을 지웠을 때 처리
    emailCodeInput.addEventListener("input", function () {
        const successMessage = document.querySelector(
            ".register-email-code-box .desc-span.success-msg"
        );

        if (emailCodeInput.value.length < 6) {
            if (successMessage) {
                successMessage.style.display = "none";
            }
        }

        if (emailCodeInput.value.length === 0) {
            emailCodeInput.classList.remove("success-sign", "warning");
            emailCodeInput.style.borderColor = "#ccc";
            emailCodeInput.style.outline = "";
            confirmButton.classList.remove("button-send-active");
        } else {
            confirmButton.classList.add("button-send-active");
            emailCodeInput.style.borderColor = "blue";
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

            const warningMessage = emailCodeInput
                .closest(".register-with-btn-box")
                .querySelector(".desc-span.warning-msg");

            if (inputCode === "") {
                showWarningMessage("인증번호를 입력해 주세요.", emailCodeInput);
                emailCodeInput.classList.add("warning");
                emailCodeInput.style.borderColor = "#f05050";
            } else if (inputCode !== correctCode) {
                showWarningMessage(
                    "인증번호가 일치하지 않습니다.",
                    emailCodeInput
                );
                emailCodeInput.classList.add("warning");
                emailCodeInput.style.borderColor = "#f05050";
            } else {
                clearInterval(timerInterval);
                countdownTimer.textContent = "";
                emailCodeInput.classList.remove("warning");
                emailCodeInput.classList.add("success-sign");
                emailCodeInput.style.borderColor = "#189f14";

                if (warningMessage) {
                    warningMessage.style.display = "none";
                }

                showSuccessMessage("인증 되었습니다.", emailCodeInput);
            }
        }
    });

    // 비밀번호 입력 필드 포커스 시 테두리 색상 변경
    passwordInput.addEventListener("focus", function () {
        passwordInput.style.borderColor = "blue";
    });

    passwordInput.addEventListener("focusout", function () {
        passwordInput.style.borderColor = "#ccc"; // 기본 테두리 색상으로 복원
    });

    passwordConfirmInput.addEventListener("focus", function () {
        passwordConfirmInput.style.borderColor = "blue";
    });

    passwordConfirmInput.addEventListener("focusout", function () {
        passwordConfirmInput.style.borderColor = "#ccc"; // 기본 테두리 색상으로 복원
    });

    // 완료 버튼 클릭 시 비밀번호 유효성 검사 실행
    completeButton.addEventListener("click", function () {
        validatePasswords();
    });
});

// 경고 메시지를 출력하는 함수
function showWarningMessage(message, element) {
    const parentElement = element.closest(".register-with-btn-box");

    let existingMessage = parentElement.querySelector(".desc-span.warning-msg");

    if (!existingMessage) {
        const warningMessage = document.createElement("span");
        warningMessage.className = "desc-span warning-msg";
        warningMessage.textContent = message;
        warningMessage.style.display = "block";
        parentElement.appendChild(warningMessage);
    } else {
        existingMessage.textContent = message;
        existingMessage.style.display = "block";
    }
}

// 성공 메시지를 출력하는 함수
function showSuccessMessage(message, element) {
    const parentElement = element.closest(".register-with-btn-box");

    const existingMessage = parentElement.querySelector(
        ".desc-span.success-msg"
    );
    if (existingMessage) {
        existingMessage.remove();
    }

    const successMessage = document.createElement("span");
    successMessage.className = "desc-span success-msg";
    successMessage.textContent = message;
    successMessage.style.display = "block";

    parentElement.appendChild(successMessage);
}

// 비밀번호 보이게 하는 로직
function togglePasswordVisibility(inputId, btn) {
    const passwordInput = document.getElementById(inputId);
    const passwordShowBtn = btn;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordShowBtn.src =
            "https://accounts-front.stunning.kr/assets/img/login/ico-visible.png";
    } else {
        passwordInput.type = "password";
        passwordShowBtn.src =
            "https://accounts-front.stunning.kr/assets/img/login/ico-hidden.png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const completeButton = document.querySelector(".register-btn-complete");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");
    const passwordWarningMessage = document.querySelector(
        ".password-warning-msg"
    );

    // 완료 버튼 클릭 시 비밀번호 유효성 검사 실행
    completeButton.addEventListener("click", function () {
        validatePasswords();
    });

    // 비밀번호 유효성 검사 함수
    function validatePasswords() {
        const passwordValue = passwordInput.value.trim();
        const passwordConfirmValue = passwordConfirmInput.value.trim();

        // 초기화: 경고 메시지와 테두리 색상 리셋
        passwordWarningMessage.style.display = "none";
        passwordInput.classList.remove("warning");
        passwordConfirmInput.classList.remove("warning");
        passwordInput.style.borderColor = "#ccc"; // 기본 테두리 색상
        passwordConfirmInput.style.borderColor = "#ccc"; // 기본 테두리 색상

        if (passwordValue.length < 6 || passwordConfirmValue.length < 6) {
            // 비밀번호가 6자 미만일 때 경고 메시지 출력
            passwordWarningMessage.textContent = "6자 이상 입력하세요";
            passwordWarningMessage.style.display = "block";
            passwordInput.classList.add("warning");
            passwordConfirmInput.classList.add("warning");
            passwordInput.style.borderColor = "#f05050"; // 경고 색상
            passwordConfirmInput.style.borderColor = "#f05050"; // 경고 색상
        } else if (passwordValue !== passwordConfirmValue) {
            // 비밀번호와 비밀번호 확인이 일치하지 않을 때 경고 메시지 출력
            passwordWarningMessage.textContent =
                "비밀번호가 일치하지 않습니다.";
            passwordWarningMessage.style.display = "block";
            passwordInput.classList.add("warning");
            passwordConfirmInput.classList.add("warning");
            passwordInput.style.borderColor = "#f05050"; // 경고 색상
            passwordConfirmInput.style.borderColor = "#f05050"; // 경고 색상
        } else {
            // 비밀번호가 6자 이상이고 일치하는 경우
            passwordWarningMessage.style.display = "none"; // 경고 메시지 숨김
            passwordInput.classList.remove("warning");
            passwordConfirmInput.classList.remove("warning");
            passwordInput.style.borderColor = "blue"; // 성공 시 색상
            passwordConfirmInput.style.borderColor = "blue"; // 성공 시 색상
        }
    }
});
