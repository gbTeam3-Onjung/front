document.addEventListener("DOMContentLoaded", () => {
    // 모든 lnb-item 요소를 선택
    const Items = document.querySelectorAll(".lnb-item");

    if (Items.length === 0) {
        console.error("lnb-item 요소를 찾을 수 없습니다. HTML을 확인해주세요.");
    } else {
        console.log(`총 ${Items.length}개의 lnb-item 요소를 찾았습니다.`);

        // 각 lnb-item 요소에 클릭 이벤트 리스너를 추가
        Items.forEach((item, index) => {
            console.log(`이벤트 리스너를 추가 중인 요소 인덱스: ${index}`);
            item.addEventListener("click", (e) => {
                try {
                    // 기본 동작 방지 및 이벤트 전파 차단
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("클릭 이벤트 발생. 요소:", item);

                    // 모든 항목에서 active 클래스 제거
                    Items.forEach((i) => {
                        i.classList.remove("active");
                        console.log("active 클래스 제거된 항목:", i);
                    });

                    // 클릭된 항목에 active 클래스 추가
                    item.classList.add("active");
                    console.log("active 클래스 추가된 항목:", item);
                } catch (error) {
                    console.error("클릭 이벤트 처리 중 오류 발생:", error);
                }
            });
        });
    }
});
