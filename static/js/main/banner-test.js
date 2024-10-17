const arrows = document.querySelectorAll(".slick-arrow"); // 좌우 화살표 버튼을 선택
const firstBanner = document.createElement("div"); // 첫 번째 배너를 위한 div 생성
const lastBanner = document.createElement("div"); // 마지막 배너를 위한 div 생성
const banner = document.querySelector(".slick-track"); // 배너 컨테이너 선택

let autoSlideInterval = null; // 자동 슬라이드 인터벌을 저장할 변수
let count = 1; // 현재 배너 위치를 나타내는 카운터
let arrowCheck = true; // 화살표 버튼의 중복 클릭을 방지하기 위한 플래그

firstBanner.innerHTML = `<img src="/static/images/banner1.jpg">`; // 첫 번째 배너의 HTML 설정
banner.appendChild(firstBanner); // 첫 번째 배너를 배너 컨테이너 끝에 추가

lastBanner.innerHTML = `<img src="/static/images/banner7.jpg">`; // 마지막 배너의 HTML 설정
banner.prepend(lastBanner); // 마지막 배너를 배너 컨테이너 맨 앞에 추가

banner.style.transform = `translate(-1800px)`; // 초기 배너 위치 설정

// 자동 슬라이드를 실행하는 함수
const autoSlide = () => {
    count++; // 배너 위치를 한 칸 앞으로 이동
    banner.style.transition = `transform 0.5s`; // 배너 이동 애니메이션 설정
    banner.style.transform = `translate(-${1500 * count}px)`; // 배너 이동

    if (count == 7) {
        // 마지막 배너 위치를 넘었을 경우
        setTimeout(() => {
            banner.style.transition = `transform 0s`; // 애니메이션 없이 배너 위치 초기화
            banner.style.transform = `translate(-1500px)`;
        }, 500);
        count = 1; // 카운터를 첫 번째 배너로 초기화
    }

    tempButton.style.backgroundColor = "white"; // 이전 버튼의 배경색을 흰색으로 변경
    buttons[count - 1].style.backgroundColor = "black"; // 현재 활성화된 버튼의 배경색을 검정색으로 변경
    tempButton = buttons[count - 1]; // 현재 버튼을 임시 저장
};

// 1초 간격으로 자동 슬라이드 실행
autoSlideInterval = setInterval(autoSlide, 1000);

// 좌우 화살표 클릭 이벤트 처리
arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) {
            return; // 중복 클릭 방지
        }
        arrowCheck = false; // 중복 클릭 방지를 위해 플래그 설정
        clearInterval(autoSlideInterval); // 자동 슬라이드 멈춤

        let arrowType = e.target.classList[1]; // 클릭된 화살표의 방향 확인

        if (arrowType === "left") {
            // 왼쪽 화살표 클릭 시
            count--; // 배너 위치를 한 칸 뒤로 이동
            banner.style.transition = `transform 0.5s`;
            banner.style.transform = `translate(-${1500 * count}px)`;

            if (count == 0) {
                // 첫 번째 배너 위치를 넘었을 경우
                setTimeout(() => {
                    banner.style.transition = `transform 0s`;
                    banner.style.transform = `translate(-9000px)`; // 마지막 배너로 이동
                }, 500);

                count = 6; // 카운터를 마지막 배너로 초기화
            }
        } else {
            // 오른쪽 화살표 클릭 시
            count++; // 배너 위치를 한 칸 앞으로 이동
            banner.style.transition = `transform 0.5s`;
            banner.style.transform = `translate(-${1500 * count}px)`;

            if (count == 7) {
                // 마지막 배너 위치를 넘었을 경우
                setTimeout(() => {
                    banner.style.transition = `transform 0s`;
                    banner.style.transform = `translate(-1500px)`; // 첫 번째 배너로 이동
                }, 500);

                count = 1; // 카운터를 첫 번째 배너로 초기화
            }
        }

        tempButton.style.backgroundColor = "white"; // 이전 버튼의 배경색을 흰색으로 변경
        buttons[count - 1].style.backgroundColor = "black"; // 현재 버튼의 배경색을 검정색으로 변경
        tempButton = buttons[count - 1]; // 현재 버튼을 임시 저장

        autoSlideInterval = setInterval(autoSlide, 1000); // 자동 슬라이드 재개

        setTimeout(() => {
            arrowCheck = true; // 클릭 가능 상태로 플래그 재설정
        }, 500);
    });
});
