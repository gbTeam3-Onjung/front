// document.querySelectorAll("input").forEach((input) => {
//     input.addEventListener("focus", () => {
//         const label = input.parentElement;
//         if (label && label.classList.contains("ijBQbT")) {
//             if (input.value.trim() !== "") {
//                 label.classList.add("focus");
//                 label.style.border = "1px solid rgb(38, 86, 246)";
//             } else {
//                 label.style.border = "1px solid rgb(242, 23, 36)";
//             }
//         }
//     });

//     input.addEventListener("blur", () => {
//         const label = input.parentElement;
//         if (label && label.classList.contains("ijBQbT")) {
//             if (input.value.trim() === "") {
//                 label.style.border = "1px solid rgb(242, 23, 36)";
//             } else {
//                 label.style.border = "";
//                 label.classList.remove("focus");
//             }
//         }
//     });

//     input.addEventListener("input", () => {
//         const label = input.parentElement;
//         const errorMessage = document.getElementById("error-message");
//         if (input.value.trim() === "") {
//             label.style.border = "1px solid rgb(242, 23, 36)";
//             errorMessage.innerHTML =
//                 '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgBtVVdTsJAEJ5ZVtQHtX0RH2siiY96ArmB3kA9AXgC4AbcAI6gN9ATwKOJJPQRfKEqiT9sO84UIREKLFq+pEm73Z2/ne8bhAUgx3MGWV0EhAIBerzijX5AgAitCOAui+Z2u+v782xg0uL7wbFnyNQJoAAWUISNjBpWkxyp6YVBLl8cRqZpa1wQIV0NSTdfckel6X+/MnjbPyoTQgX+ASSo7Dy3qzMOJPIIqAYpgLO/2eu1axMHUnMpC385kA6CDTSncifxHQyjsGJjPERzGKI+hOVwDOm6vGAcPZnO8jPo7/aeYuOvuXxn0rKLAvo0rvoicwFrgtrSJcU1Ooc1QRGcKSI4gTVB2K9S7JwkF56Cv4DIOigt3WHTEbJnsJ+vR8IdtHYQaATymXmezW7RHFgBzOKWihAerE+wTI8ytoPIOfZZ8zObum+xP2DixETLZHXHlvnKDfyAU7mH5XD0lj6Rx6rzEBsua1Esdn2Wi0yaYselDJU5dcdi53YffZ4DVUgJYsv9mW4THoh+p+FEbIxngWBmJsvY46lUXrlcXJZp44kOBHInCsIKEl2CBaRJDJprN2Ho46KDsSOWc1HcWBQnWaEvBBUORR+mJp04z8Y3CPfJeR0EPhwAAAAASUVORK5CYII=" alt="">필수항목 입니다.';
//             errorMessage.style.display = "inline";
//         } else {
//             label.style.border = "1px solid rgb(38, 86, 246)";
//             errorMessage.style.display = "none";
//             errorMessage.innerHTML = "";
//         }
//     });
// });

/*************************************************************/
// 닉네임 입력칸 이벤트
const input = document.getElementById("inputField");
const errorMessage = document.getElementById("error-message");
const label = input.parentElement;

function updateErrorState() {
    if (input.value.trim() === "") {
        label.classList.add("error");
        label.classList.remove("focus");
        errorMessage.style.display = "block"; // 변경: flex에서 block으로 수정하여 오류 메시지 표시
        errorMessage.innerHTML =
            '<img class="error-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgBtVVdTsJAEJ5ZVtQHtX0RH2siiY96ArmB3kA9AXgC4AbcAI6gN9ATwKOJJPQRfKEqiT9sO84UIREKLFq+pEm73Z2/ne8bhAUgx3MGWV0EhAIBerzijX5AgAitCOAui+Z2u+v782xg0uL7wbFnyNQJoAAWUISNjBpWkxyp6YVBLl8cRqZpa1wQIV0NSTdfckel6X+/MnjbPyoTQgX+ASSo7Dy3qzMOJPIIqAYpgLO/2eu1axMHUnMpC385kA6CDTSncifxHQyjsGJjPERzGKI+hOVwDOm6vGAcPZnO8jPo7/aeYuOvuXxn0rKLAvo0rvoicwFrgtrSJcU1Ooc1QRGcKSI4gTVB2K9S7JwkF56Cv4DIOigt3WHTEbJnsJ+vR8IdtHYQaATymXmezW7RHFgBzOKWihAerE+wTI8ytoPIOfZZ8zObum+xP2DixETLZHXHlvnKDfyAU7mH5XD0lj6Rx6rzEBsua1Esdn2Wi0yaYselDJU5dcdi53YffZ4DVUgJYsv9mW4THoh+p+FEbIxngWBmJsvY46lUXrlcXJZp44kOBHInCsIKEl2CBaRJDJprN2Ho46KDsSOWc1HcWBQnWaEvBBUORR+mJp04z8Y3CPfJeR0EPhwAAAAASUVORK5CYII=" alt=""> 필수항목입니다.';
    } else {
        label.classList.remove("error");
        label.classList.add("focus");
        errorMessage.style.display = "none";
        errorMessage.innerHTML = "";
    }
}

input.addEventListener("focus", updateErrorState);
input.addEventListener("blur", updateErrorState);
input.addEventListener("input", updateErrorState);
