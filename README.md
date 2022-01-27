# Online Shopping🛒

## **Description🖋**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

'Dream Coding 엘리'에서 수강하고 있는 [쇼핑몰 미니게임]을 바탕으로 제작하였습니다.수업에서 제공하는 디자인과 기능 구현 예시만 참고해서 스스로 기능들을 구현했으며, 더 나아가 랜덤 list 출력 기능을 추가로 구현하였습니다.

![Untitled](Online%20Shopping%F0%9F%9B%92%20c8b99c4ee07245679e7170066e457d51/Untitled.png)

![Untitled](Online%20Shopping%F0%9F%9B%92%20c8b99c4ee07245679e7170066e457d51/Untitled%201.png)

## **링크👆**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

[https://ineainea.github.io/Online-Shopping/](https://ineainea.github.io/Online-Shopping/)

## **참고 링크📃**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

자바스크립트를 이용한 미니 게임 만들기 프로젝트 안내편 | 프론트엔드 개발자 입문편 🕹

[유튜브]https://www.youtube.com/watch?v=We2Kv1HMGvc&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=21"

## **개발 환경🌎**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

- VS Code

## **개발 기술🛠**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

- HTML5
- CSS3
- Vanilla JS

## **개발 기간⌛**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

- 2022.01.19

## **주요기능✨**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

![image](https://user-images.githubusercontent.com/58885393/150120714-fb5e1520-d71a-4ea1-92f2-650c9b2ef4b9.gif)

![image](https://user-images.githubusercontent.com/58885393/150120879-fa87d3e3-da4e-4ee8-935c-8f1be7aaba52.gif)

* 페이지 오픈 시 매번 랜덤한 Item-List 출력

```jsx
function randomArray() {
    // 마지막에 랜덤 값을 넣어 반환하기위한 빈 객체 초기화
    let resultArray = [];
    // 전역변수로 있는 배열들의 길이만큼 랜덤을 돌리고 각 변수에 할당
    const randomColor = Math.floor(Math.random() * color.length);
    const randomCloth = Math.floor(Math.random() * cloth.length);
    const randomGender = Math.floor(Math.random() * gender.length);
    const randomSize = Math.floor(Math.random() * size.length);
    //  뽑아낸 랜덤값 확인을 위한 콘솔로그
    console.log(`randomColor: ${randomColor}, randomCloth: ${randomCloth}, randomGender: ${randomGender}, randomSize: ${randomSize}`);
    // 뽑아낸 랜던값을 Index[]를 이용히여, 전역변수로 있는 배열들의 값을 가져옴
    console.log(`${color[randomColor]}, ${cloth[randomCloth]}, ${gender[randomGender]}, ${size[randomSize]}`);
    // 가쟈온 전역변수 배열의 값을 resultArray에 넣어줌
    resultArray = [color[randomColor], cloth[randomCloth], gender[randomGender], size[randomSize]];
    console.log('resultArray: ' + resultArray);
    return resultArray;
}
```

![image](https://user-images.githubusercontent.com/58885393/150120887-c94bb405-1a29-4dcb-9946-b1d62da129d2.gif)

* 메뉴 버튼 클릭 시, 해당 메뉴 버튼에 맞게 Item-List 필터링 후 출력

```jsx
items.forEach((item) => {
        // filter와 type 값이 동일한 것들은 invisible를 삭제함으로서 보이게 하고
        if(filter === item.dataset.type1 || filter === item.dataset.type2) {
            item.classList.remove('invisible');
        // filter와 type 값이 동일하지 않은 것들은 invisible를 활성화 시켜 사라지게 한다.
        } else {
            item.classList.add('invisible');
        }
```

## **느낀점💡**

$\large\color{black}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

개발 공부를 시작인 이후 처음으로 혼자 힘으로 만들어본 프로젝트입니다.
비록 작은 프로젝트였지만 로직을 생각하고, 기능을 구현하면서 어떻게 하면 더 효율적인 코드로 짤 수 있을까 수없이 고민했습니다.
또한 계획했던 기능을 막상 구현하려고 할 때 느껴지는 막막함에 힘들기도 했습니다.
하지만 기능 구현에 성공하고, 계획했던 대로 만들어졌을 때 그 짜릿감은 이루 말할 수 없었습니다.
또한 기초적인 HTML과 CSS, Vanilla JS를 공부할 수 있었습니다.
다음 프로젝트는 더욱 기능도 많고 멋진 프로젝트에 도전할 것입니다.
