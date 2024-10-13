function togglePasswordVisibility() {
    const passwordInput = document.getElementById("pass-info");
    const passwordShowBtn = document.querySelector(".password-show-btn");

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
