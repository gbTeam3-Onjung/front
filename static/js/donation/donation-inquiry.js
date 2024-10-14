const tabs = document.querySelectorAll(".tabs .tab");
const contentContainer = document.querySelector(".content-wrap"); // 내용 섹션 컨테이너
const commentSection = document.querySelector(".comment-wrap"); // 댓글 섹션
const commentTextarea = document.querySelector(".comment-textarea"); // 댓글 입력창
const submitButton = document.querySelector(".submit-comment-button"); // 댓글 작성 버튼 

// 탭 클릭 이벤트 처리
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        if (index === 0) {
            contentContainer.style.display = "block";
            commentSection.style.display = "none";
        } else {
            contentContainer.style.display = "none";
            commentSection.style.display = "block";
        }
    });
});

tabs[0].classList.add("active");
commentSection.style.display = "none";

submitButton.addEventListener("click", () => {
    const commentText = commentTextarea.value.trim();
    if (commentText) {
        alert(`댓글이 작성되었습니다: ${commentText}`);
        commentTextarea.value = "";
    } else {
        alert("댓글을 입력해주세요.");
    }
});
// 예시로 넣은 데이터
const totalPrize = 50000;
const currentPrize = 30000;

const percentage = Math.floor((currentPrize / totalPrize) * 100);

document.querySelector(".graph-status .num").textContent = percentage;
document.querySelector(".graph-bar span").style.width = `${percentage}%`;
document.querySelector(
    ".total-prize"
).textContent = `${currentPrize} 포인트 / ${totalPrize} 포인트`;
