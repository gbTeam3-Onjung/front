// 배너 슬라이더 기능을 위한 JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const arrows = document.querySelectorAll(".slick-arrow"); // 좌우 화살표 버튼 선택
    const firstBanner = document.createElement("div"); // 첫 번째 배너 생성
    const lastBanner = document.createElement("div"); // 마지막 배너 생성
    const banner = document.querySelector(".slick-track"); // 배너 컨테이너 선택

    let autoSlideInterval = null; // 자동 슬라이드 인터벌 저장 변수
    let count = 1; // 현재 배너 위치 카운터
    let arrowCheck = true; // 화살표 버튼 중복 클릭 방지 플래그

    firstBanner.innerHTML = banner.lastElementChild.outerHTML; // 첫 번째 배너 HTML 설정
    banner.appendChild(firstBanner); // 첫 번째 배너 배너 끝에 추가

    lastBanner.innerHTML = banner.children[1].outerHTML; // 마지막 배너 HTML 설정
    banner.prepend(lastBanner); // 마지막 배너 맨 앞에 추가

    banner.style.transform = `translate(-1500px)`; // 초기 배너 위치 설정

    // 자동 슬라이드를 실행하는 함수
    const autoSlide = () => {
        count++;
        banner.style.transition = `transform 0.5s`;
        banner.style.transform = `translate(-${1500 * count}px)`;

        if (count === banner.children.length - 1) {
            setTimeout(() => {
                banner.style.transition = `transform 0s`;
                banner.style.transform = `translate(-1500px)`;
            }, 500);
            count = 1;
        }
    };

    // 3초 간격으로 자동 슬라이드 실행
    autoSlideInterval = setInterval(autoSlide, 3000);

    // 좌우 화살표 클릭 이벤트 처리
    arrows.forEach((arrow) => {
        arrow.addEventListener("click", (e) => {
            if (!arrowCheck) return;
            arrowCheck = false;
            clearInterval(autoSlideInterval);

            let arrowType = e.target.classList.contains("slick-prev")
                ? "left"
                : "right";

            if (arrowType === "left") {
                count--;
                banner.style.transition = `transform 0.5s`;
                banner.style.transform = `translate(-${1500 * count}px)`;

                if (count === 0) {
                    setTimeout(() => {
                        banner.style.transition = `transform 0s`;
                        banner.style.transform = `translate(-${
                            1500 * (banner.children.length - 2)
                        }px)`;
                    }, 500);
                    count = banner.children.length - 2;
                }
            } else {
                count++;
                banner.style.transition = `transform 0.5s`;
                banner.style.transform = `translate(-${1500 * count}px)`;

                if (count === banner.children.length - 1) {
                    setTimeout(() => {
                        banner.style.transition = `transform 0s`;
                        banner.style.transform = `translate(-1500px)`;
                    }, 500);
                    count = 1;
                }
            }

            autoSlideInterval = setInterval(autoSlide, 3000);

            setTimeout(() => {
                arrowCheck = true;
            }, 500);
        });
    });
});
