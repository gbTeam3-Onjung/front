const sections = document.querySelectorAll("section.admin-page");
const submenus = document.querySelectorAll("a.MenuItems_submenu");
const inquiryButtons = document.querySelectorAll("button.inquiry-button");

NodeList.prototype.filter = Array.prototype.filter;

submenus.forEach((submenu) => {
    submenu.addEventListener("click", (e) => {
        console.log("hi");
        sections.forEach((section) => {
            section.classList.remove("selected");
        });
        const selectedSection = sections.filter(
            (section) => submenu.textContent === section.dataset.value
        );
        selectedSection[0].classList.add("selected");
    });
});

inquiryButtons.forEach((inquiryButton) => {
    inquiryButton.addEventListener("click", (e) => {
        sections.forEach((section) => {
            section.classList.remove("selected");
        });
        const postInquirySection = sections.filter(
            (section) => section.dataset.value === "게시글 조회"
        );
        console.log(postInquirySection);
        postInquirySection[0].classList.add("selected");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".post-filter-option");
    const postListContainer = document.querySelector(
        ".ServiceTable_row_wrapper"
    );
    let sortOrder = {}; // 각 옵션의 정렬 순서를 기억하기 위한 객체

    function sortPosts(order) {
        const posts = Array.from(
            postListContainer.querySelectorAll(".ServiceTable_row")
        );

        // 모든 게시글 다시 표시
        posts.forEach((post) => (post.style.display = "flex"));

        if (order === "작성일 순") {
            posts.sort((a, b) => {
                const dateA = new Date(
                    a.querySelector(".ServiceTable_cell.Join_date").textContent
                );
                const dateB = new Date(
                    b.querySelector(".ServiceTable_cell.Join_date").textContent
                );
                return sortOrder[order] === "asc"
                    ? dateA - dateB
                    : dateB - dateA;
            });
        } else if (order === "조회수 순") {
            posts.sort((a, b) => {
                const countA = a
                    .querySelector(".ServiceTable_cell.hit_ctn")
                    .textContent.trim();
                const countB = b
                    .querySelector(".ServiceTable_cell.hit_ctn")
                    .textContent.trim();
                return sortOrder[order] === "asc"
                    ? countA - countB
                    : countB - countA;
            });
        } else if (order === "댓글수 순") {
            posts.sort((a, b) => {
                const replyA = a
                    .querySelector(".ServiceTable_cell.reply_ctn")
                    .textContent.trim();
                const replyB = b
                    .querySelector(".ServiceTable_cell.reply_ctn")
                    .textContent.trim();
                return sortOrder[order] === "asc"
                    ? replyA - replyB
                    : replyB - replyA;
            });
        } else if (order === "기부 게시글") {
            posts.forEach((post) => {
                const type = post.querySelector(
                    ".ServiceTable_cell.post_kind"
                ).textContent;
                if (!type.includes("기부 게시글")) {
                    post.style.display = "none";
                }
            });
        } else if (order === "봉사활동 모집글") {
            posts.forEach((post) => {
                const type = post.querySelector(
                    ".ServiceTable_cell.post_kind"
                ).textContent;
                if (!type.includes("봉사활동 모집글")) {
                    post.style.display = "none";
                }
            });
        } else if (order === "후원 게시글") {
            posts.forEach((post) => {
                const type = post.querySelector(
                    ".ServiceTable_cell.post_kind"
                ).textContent;
                if (!type.includes("후원 게시글")) {
                    post.style.display = "none";
                }
            });
        } else if (order === "이용 후기") {
            posts.forEach((post) => {
                const type = post.querySelector(
                    ".ServiceTable_cell.post_kind"
                ).textContent;
                if (!type.includes("이용 후기")) {
                    post.style.display = "none";
                }
            });
        }

        // 정렬된 순서대로 다시 DOM에 추가
        postListContainer.innerHTML = "";
        posts.forEach((post) => {
            postListContainer.appendChild(post);
        });
    }

    // 페이지 로드 시 기본적으로 '가입일 순'은 내림차순, '이름 순'은 오름차순으로 정렬
    sortOrder["가입일 순"] = "desc";
    sortOrder["이름 순"] = "asc";

    // 기본 정렬
    sortPosts("가입일 순");

    // 각 옵션 클릭 시 정렬 및 필터링 수행
    options.forEach(function (option) {
        option.addEventListener("click", function () {
            const order = option.textContent.trim();

            // 클릭 시마다 정렬 순서 변경
            sortOrder[order] = sortOrder[order] === "asc" ? "desc" : "asc";

            // 모든 옵션의 선택된 클래스 초기화
            options.forEach((opt) => opt.classList.remove("selected"));

            // 클릭된 옵션에 선택된 클래스 추가
            option.classList.add("selected");

            // 선택된 옵션에 따라 정렬 또는 필터링 수행
            sortPosts(order);
        });
    });
});
