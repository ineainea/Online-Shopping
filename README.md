# Online Shopping🛒

## **Description🖋**

'Dream Coding 엘리'에서 수강하고 있는 [쇼핑몰 미니게임]을 바탕으로 제작하였습니다.수업에서 제공하는 디자인과 기능 구현 예시만 참고해서 스스로 기능들을 구현했으며, 더 나아가 랜덤 list 출력 기능을 추가로 구현하였습니다.

![Untitled](https://user-images.githubusercontent.com/58885393/151359165-0c3f9a7f-2e45-4079-80a5-9c9ad3a50fca.png)

![Untitled 1](https://user-images.githubusercontent.com/58885393/151359198-68c4ec3e-8738-418c-9ee9-58dfca9a6a9b.png)

## **링크👆**

[https://ineainea.github.io/Online-Shopping/](https://ineainea.github.io/Online-Shopping/)

## **참고 링크📃**

자바스크립트를 이용한 미니 게임 만들기 프로젝트 안내편 | 프론트엔드 개발자 입문편 🕹

[유튜브]https://www.youtube.com/watch?v=We2Kv1HMGvc&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=21"

## **개발 환경🌎**

- VS Code

## **개발 기술🛠**

- HTML5
- CSS3
- Vanilla JS

## **개발 기간⌛**

- 2022.01.19

## **주요기능✨**

![150120714-fb5e1520-d71a-4ea1-92f2-650c9b2ef4b9](https://user-images.githubusercontent.com/58885393/151359278-c320541c-0138-47f9-9ddb-833ee97d985e.gif)
![150120879-fa87d3e3-da4e-4ee8-935c-8f1be7aaba52](https://user-images.githubusercontent.com/58885393/151359327-f88664b5-c554-4944-a66b-d5796a53dcae.gif)

* 페이지 오픈 시 매번 랜덤한 Item-List 출력

```jsx
function randomArray() {
    let resultArray = [];
    
    const randomColor = Math.floor(Math.random() * color.length);
    const randomCloth = Math.floor(Math.random() * cloth.length);
    const randomGender = Math.floor(Math.random() * gender.length);
    const randomSize = Math.floor(Math.random() * size.length);
    
    console.log(`randomColor: ${randomColor}, randomCloth: ${randomCloth}, randomGender: ${randomGender}, randomSize: ${randomSize}`);
    console.log(`${color[randomColor]}, ${cloth[randomCloth]}, ${gender[randomGender]}, ${size[randomSize]}`);

    resultArray = [color[randomColor], cloth[randomCloth], gender[randomGender], size[randomSize]];
    console.log('resultArray: ' + resultArray);
    return resultArray;
}
```
![150120887-c94bb405-1a29-4dcb-9946-b1d62da129d2_(1)](https://user-images.githubusercontent.com/58885393/151359388-822bf01b-ff4c-4286-8c5b-fcc2fa8ce034.gif)

* 메뉴 버튼 클릭 시, 해당 메뉴 버튼에 맞게 Item-List 필터링 후 출력

```jsx
items.forEach((item) => {
        if(filter === item.dataset.type1 || filter === item.dataset.type2) {
            item.classList.remove('invisible');
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
