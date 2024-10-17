const arrows = document.querySelectorAll(".slick-arrow"); // 좌우 화살표 버튼을 선택
const firstBanner = document.createElement("div"); // 첫 번째 배너를 위한 div 생성
const lastBanner = document.createElement("div"); // 마지막 배너를 위한 div 생성
const banner = document.querySelector(".slick-track"); // 배너 컨테이너 선택

let autoSlideInterval = null; // 자동 슬라이드 인터벌을 저장할 변수
let count = 0; // 현재 배너 위치를 나타내는 카운터를 0으로 초기화
let arrowCheck = true; // 화살표 버튼의 중복 클릭을 방지하기 위한 플래그

firstBanner.innerHTML = `
<div
    data-index="-9"
    tabindex="-1"
    class="slick-slide slick-cloned"
    aria-hidden="true"
    id="first"
>
    <div>
        <a
            tabindex="-1"
            href=""
            target="_self"
            class="lggyey ejtbh banner-link pc"
            style="width: 100%; display: inline-block;"
        >
            <div class="banner-content-wrapper inner1">
                <div class="banner-content-wrapper inner2">
                    <div class="banner-content-wrapper inner3">
                        <span class="cotmec banner-web-sub-title">10월에도 쏟아지는 9만 원의 혜택!</span>
                        <span class="cotmec banner-web-title">가을맞이 FLEX WEEK! 매주 변하는 카테고리 혜택</span>
                    </div>
                    <button class="elrdiz banner-button-primary">
                        자세히 알아보기
                        <svg viewBox="0 0 12 12" class="ifpvod banner-button-arrow">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.68888 11.0004C3.85188 11.0004 4.01388 10.9424 4.13688 10.8264L8.81688 6.43738C9.06088 6.20738 9.06088 5.83638 8.81588 5.60738L4.07988 1.17438C3.83288 0.942377 3.43288 0.942377 3.18588 1.17138C2.93888 1.40038 2.93788 1.77238 3.18388 2.00338L7.47788 6.02238L3.24088 9.99738C2.99588 10.2294 2.99688 10.6014 3.24488 10.8294C3.36788 10.9434 3.52888 11.0004 3.68888 11.0004Z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <img
                    class="hkaqym banner-web-image"
                    src="https://cdn-dantats.stunning.kr/prod/banner/9d2eecc2-683d-42df-a52d-809c62062933/webimage/PXT8QHCDz5Cq5aT9.%E1%84%8F%E1%85%A9%E1%86%AB%E1%84%90%E1%85%A6%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3%20%E1%84%86%E1%85%AE%E1%84%92%E1%85%A1%E1%86%AB%E1%84%90%E1%85%B5%E1%84%8F%E1%85%A6%E1%86%BA%20%E1%84%92%E1%85%A9%E1%86%B7%20%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png.small?t=crop&q=100&s=1160x640"
                />
            </div>
        </a>
    </div>
</div>`; // 첫 번째 배너의 HTML 설정
banner.appendChild(firstBanner); // 첫 번째 배너를 배너 컨테이너 끝에 추가

lastBanner.innerHTML = `
<div
    data-index="-1"
    tabindex="-1"
    class="slick-slide slick-cloned"
    aria-hidden="true"
>
    <div>
        <a
            tabindex="-1"
            href=""
            target="_blank"
            class="bnqwuj ejtbh banner-link pc"
            style="width: 100%; display: inline-block;"
            id="last"
        >
            <div class="banner-content-wrapper inner1">
                <div class="banner-content-wrapper inner2">
                    <div class="banner-content-wrapper inner3">
                        <span class="cotmec banner-web-sub-title">국내 NO.1 인쇄물 제작업체!</span>
                        <span class="cotmec banner-web-title">당일 주문/제작/발송 국내 최저가 오직! 프린트시티</span>
                    </div>
                    <button class="gkeyjr banner-button-primary">
                        믿고 맡기는 라우드 제작
                        <svg viewBox="0 0 12 12" class="ifpvod banner-button-arrow">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.68888 11.0004C3.85188 11.0004 4.01388 10.9424 4.13688 10.8264L8.81688 6.43738C9.06088 6.20738 9.06088 5.83638 8.81588 5.60738L4.07988 1.17438C3.83288 0.942377 3.43288 0.942377 3.18588 1.17138C2.93888 1.40038 2.93788 1.77238 3.18388 2.00338L7.47788 6.02238L3.24088 9.99738C2.99588 10.2294 2.99688 10.6014 3.24488 10.8294C3.36788 10.9434 3.52888 11.0004 3.68888 11.0004Z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <img
                    class="hkaqym banner-web-image"
                    src="https://cdn-dantats.stunning.kr/prod/banner/8aca0f63-1d3b-4e6d-a3ec-4404690b63e4/webimage/4GiYSQ9SNR75Z7jU.KakaoTalk_20240924_172446790_01.jpg.small?t=crop&q=100&s=1160x640"
                />
            </div>
        </a>
    </div>
</div>`; // 마지막 배너의 HTML 설정
banner.prepend(lastBanner); // 마지막 배너를 배너 컨테이너 맨 앞에 추가

banner.style.transform = `translate3d(0px,0px,0px)`; // 초기 배너 위치를 조정하여 첫 번째 배너가 보이도록 설정

// 자동 슬라이드를 실행하는 함수
const autoSlide = () => {
    count++; // 배너 위치를 한 칸 앞으로 이동
    banner.style.transition = `transform 0.5s`; // 배너 이동 애니메이션 설정
    banner.style.transform = `translate3d(-${1062 * count}px, 0, 0)`; // 배너 이동

    console.log(`현재 배너 인덱스: ${count}`); // 현재 인덱스 출력

    if (count === 10) {
        // 마지막 배너 위치를 넘었을 경우
        setTimeout(() => {
            banner.style.transition = `transform 0s`; // 애니메이션 없이 배너 위치 초기화
            banner.style.transform = `translate3d(0px, 0, 0)`; // 처음 위치로 초기화
            count = 0; // 카운터를 첫 번째 배너로 초기화
            console.log(`현재 배너 인덱스: ${count}`); // 첫 번째 배너로 초기화 후 인덱스 출력
        }, 500);
    }
};

// 3초 간격으로 자동 슬라이드 실행
autoSlideInterval = setInterval(autoSlide, 3000);

// 좌우 화살표 클릭 이벤트 처리
arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) {
            return; // 중복 클릭 방지
        }
        arrowCheck = false; // 중복 클릭 방지를 위해 플래그 설정
        clearInterval(autoSlideInterval); // 자동 슬라이드 멈춤

        let arrowType = arrow.classList.contains("slick-prev")
            ? "left"
            : "right"; // 클릭된 화살표의 방향 확인

        if (arrowType === "left") {
            count--; // 배너 위치를 한 칸 뒤로 이동
            if (count < 0) {
                count = 9;
                banner.style.transition = `transform 0s`;
                banner.style.transform = `translate3d(-${
                    1062 * count
                }px, 0, 0)`;
            }
            setTimeout(() => {
                banner.style.transition = `transform 0.5s`;
                banner.style.transform = `translate3d(-${
                    1062 * count
                }px, 0, 0)`;
                console.log(`현재 배너 인덱스: ${count}`); // 화살표 클릭 후 현재 인덱스 출력
            }, 20);
        } else {
            count++; // 배너 위치를 한 칸 앞으로 이동
            banner.style.transition = `transform 0.5s`;
            banner.style.transform = `translate3d(-${1062 * count}px, 0, 0)`;
            console.log(`현재 배너 인덱스: ${count}`); // 화살표 클릭 후 현재 인덱스 출력

            if (count === 10) {
                setTimeout(() => {
                    banner.style.transition = `transform 0s`;
                    banner.style.transform = `translate3d(0px, 0, 0)`; // 처음 위치로 초기화
                    count = 0; // 카운터를 첫 번째 배너로 초기화
                    console.log(`현재 배너 인덱스: ${count}`); // 첫 번째 배너로 초기화 후 인덱스 출력
                }, 500);
            }
        }

        autoSlideInterval = setInterval(autoSlide, 3000); // 자동 슬라이드 재개

        setTimeout(() => {
            arrowCheck = true; // 클릭 가능 상태로 플래그 재설정
        }, 500);
    });
});
