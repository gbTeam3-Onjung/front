// 유효성 검사가 들어가야 하는것만 담은 fileds 클래스명에 error 추가해서 span 가져오기
// const inputEssentialFields = [".nickName", ".name", ".phoneNumber"];
// const inputs = inputEssentialFields.map((field) =>
//     document.querySelectorAll(`input.${field}`)
// );

/*************************************************************/

// 클래스명이 추가되야 할 label모음집
const inputLabel = [".nickName", ".oneLine", ".name", ".phoneNumber"];
// 이벤트가 발생해야 될 input모음집
const allInputs = document.querySelectorAll("input.nickName, input.oneLine");

allInputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        // input의 클래스 중 하나와 매칭되는 label 요소에 focus 클래스 추가
        inputLabel.forEach((label) => {
            if (e.target.matches(label)) {
                const labelElement = document.querySelector(label);
                if (labelElement) {
                    labelElement.classList.add("focus");
                }
            }
        });
    });

    input.addEventListener("blur", (e) => {
        // input의 클래스 중 하나와 매칭되는 label 요소에서 focus 클래스 제거
        inputLabel.forEach((label) => {
            if (e.target.matches(label)) {
                const labelElement = document.querySelector(label);
                if (labelElement) {
                    labelElement.classList.remove("focus");
                }
            }
        });
    });
});

// input 필드와 span 요소들을 모두 미리 선택해놓기
