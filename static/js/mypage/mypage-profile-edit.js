// 유효성 검사가 들어가야 하는것만 담은 fileds 클래스명에 error 추가해서 span 가져오기
const inputEssentialFields = ["nickName", "name", "phoneNumber"];
const inputs = inputEssentialFields.map((field) =>
    document.querySelectorAll(`input.${field}`)
);

// 전체적으로 들어가야 할 fileds
const allInputs = document.querySelectorAll(
    "input.nickName, input.one-line, input.name, input.phoneNumber"
);

/*************************************************************/

allInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.classList.add("focus");
    });

    input.addEventListener("blur", () => {
        input.classList.remove("focus");
    });
});
