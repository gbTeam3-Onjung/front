const requestTypeInput = document.querySelector(".request-type-input");
const requestTypeSelect = document.querySelector("#request-type-select");

requestTypeInput.addEventListener("click", (e) => {
    requestTypeInput.classList.toggle("active");
    requestTypeSelect.classList.toggle("active");
});
