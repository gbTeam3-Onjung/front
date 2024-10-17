document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");
    const completeButton = document.querySelector(
        ".reset-password-btn-complete"
    );
    const passwordWarningMessage = document.querySelector(
        ".reset-password-input-box .reset-password-btn-waring"
    );
    const passwordWarningMessage2 = document.querySelector(
        ".reset-password-input-box .reset-password-btn-waring2"
    );
    const passwordShowBtns = document.querySelectorAll(".password-show-btn");

    // 비밀번호 유효성 검사 함수
    function validatePasswords() {
        const passwordValue = passwordInput.value.trim();
        const passwordConfirmValue = passwordConfirmInput.value.trim();

        // 초기화: 경고 메시지와 테두리 색상 리셋
        passwordWarningMessage.style.display = "none";
        passwordWarningMessage2.style.display = "none";
        passwordInput.classList.remove("warning");
        passwordConfirmInput.classList.remove("warning");
        passwordInput.style.borderColor = "#ccc";
        passwordConfirmInput.style.borderColor = "#ccc";

        // 비밀번호가 6자 미만일 때 경고 메시지 표시
        if (passwordValue.length < 6) {
            passwordWarningMessage.textContent =
                "6자 이상의 비밀번호를 입력해주세요.";
            passwordWarningMessage.style.display = "block";
            passwordWarningMessage.classList.add("reset-password-warning"); // 경고 스타일 추가
            passwordInput.classList.add("warning");
            passwordInput.style.borderColor = "#f05050";
            return;
        }

        // 비밀번호가 일치하지 않을 때 경고 메시지 표시
        if (passwordValue !== passwordConfirmValue) {
            passwordWarningMessage2.textContent =
                "비밀번호가 일치하지 않습니다.";
            passwordWarningMessage2.style.display = "block";
            passwordWarningMessage2.classList.add("reset-password-warning"); // 경고 스타일 추가
            passwordConfirmInput.classList.add("warning");
            passwordConfirmInput.style.borderColor = "#f05050";
            return;
        }

        // 비밀번호가 일치하고 6자 이상이면 성공 스타일 적용
        passwordWarningMessage.style.display = "none";
        passwordWarningMessage2.style.display = "none";
        passwordInput.style.borderColor = "#189f14";
        passwordConfirmInput.style.borderColor = "#189f14";
    }

    // 완료 버튼 클릭 시 비밀번호 유효성 검사
    completeButton.addEventListener("click", function () {
        validatePasswords();
    });

    // 입력값 변경 시 경고 메시지 제거 및 테두리 파란색으로 변경
    passwordInput.addEventListener("input", function () {
        if (passwordInput.value.length > 0) {
            passwordInput.classList.remove("warning");
            passwordInput.style.borderColor = "blue";
            passwordWarningMessage.style.display = "none";
        }
    });

    passwordConfirmInput.addEventListener("input", function () {
        if (passwordConfirmInput.value.length > 0) {
            passwordConfirmInput.classList.remove("warning");
            passwordConfirmInput.style.borderColor = "blue";
            passwordWarningMessage2.style.display = "none";
        }
    });

    // 포커스가 없으면 기본 테두리 색상으로 변경
    passwordInput.addEventListener("blur", function () {
        if (!passwordInput.classList.contains("warning")) {
            passwordInput.style.borderColor = "#ccc";
        }
    });

    passwordConfirmInput.addEventListener("blur", function () {
        if (!passwordConfirmInput.classList.contains("warning")) {
            passwordConfirmInput.style.borderColor = "#ccc";
        }
    });

    // 비밀번호 보이기 버튼에 클릭 이벤트 리스너 추가
    passwordShowBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const inputElement = btn.parentElement.querySelector("input"); // 부모 요소에서 input 찾기
            togglePasswordVisibility(inputElement, btn);
        });
    });

    // 비밀번호 보이기/숨기기 토글 함수
    function togglePasswordVisibility(passwordInput, btn) {
        passwordInput.value = passwordInput.value.trim(); // 공백이 포함되어 있으면 공백 제거
        if (passwordInput && passwordInput.type === "password") {
            passwordInput.type = "text"; // 비밀번호 표시
            btn.src =
                "https://accounts-front.stunning.kr/assets/img/login/ico-visible.png"; // 아이콘 변경
        } else if (passwordInput) {
            passwordInput.type = "password"; // 비밀번호 숨기기
            btn.src =
                "https://accounts-front.stunning.kr/assets/img/login/ico-hidden.png"; // 아이콘 변경
        }
    }
});
