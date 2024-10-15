const requestTypeInput = document.querySelector(".request-type-input");
const requestTypeSelect = document.querySelector("#request-type-select");

requestTypeInput.addEventListener("focus", (e) => {
    e.target.ariaExpanded = "true";
    console.log(e.target);
});
