# Online Shopping๐

## **Description๐**

'Dream Coding ์๋ฆฌ'์์ ์๊ฐํ๊ณ  ์๋ [์ผํ๋ชฐ ๋ฏธ๋๊ฒ์]์ ๋ฐํ์ผ๋ก ์ ์ํ์์ต๋๋ค.<br>
์์์์ ์ ๊ณตํ๋ ๋์์ธ๊ณผ ๊ธฐ๋ฅ ๊ตฌํ ์์๋ง ์ฐธ๊ณ ํด์ ์ค์ค๋ก ๊ธฐ๋ฅ๋ค์ ๊ตฌํํ์ผ๋ฉฐ,<br> ๋ ๋์๊ฐ ๋๋ค list ์ถ๋ ฅ ๊ธฐ๋ฅ์ ์ถ๊ฐ๋ก ๊ตฌํํ์์ต๋๋ค.

![Untitled](https://user-images.githubusercontent.com/58885393/151359165-0c3f9a7f-2e45-4079-80a5-9c9ad3a50fca.png)

![Untitled 1](https://user-images.githubusercontent.com/58885393/151359198-68c4ec3e-8738-418c-9ee9-58dfca9a6a9b.png)

## **๋งํฌ๐**

[https://ineainea.github.io/Online-Shopping/](https://ineainea.github.io/Online-Shopping/)

## **์ฐธ๊ณ  ๋งํฌ๐**

์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ์ด์ฉํ ๋ฏธ๋ ๊ฒ์ ๋ง๋ค๊ธฐ ํ๋ก์ ํธ ์๋ดํธ | ํ๋ก ํธ์๋ ๊ฐ๋ฐ์ ์๋ฌธํธย ๐น

[์ ํ๋ธ]https://www.youtube.com/watch?v=We2Kv1HMGvc&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=21"

## **๊ฐ๋ฐ ํ๊ฒฝ๐**

- VS Code

## **๊ฐ๋ฐ ๊ธฐ์ ๐ **

- HTML5
- CSS3
- Vanilla JS

## **๊ฐ๋ฐ ๊ธฐ๊ฐโ**

- 2022.01.19

## **์ฃผ์๊ธฐ๋ฅโจ**

![150120714-fb5e1520-d71a-4ea1-92f2-650c9b2ef4b9](https://user-images.githubusercontent.com/58885393/151359278-c320541c-0138-47f9-9ddb-833ee97d985e.gif)
![150120879-fa87d3e3-da4e-4ee8-935c-8f1be7aaba52](https://user-images.githubusercontent.com/58885393/151359327-f88664b5-c554-4944-a66b-d5796a53dcae.gif)

* ํ์ด์ง ์คํ ์ ๋งค๋ฒ ๋๋คํ Item-List ์ถ๋ ฅ

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

* ๋ฉ๋ด ๋ฒํผ ํด๋ฆญ ์, ํด๋น ๋ฉ๋ด ๋ฒํผ์ ๋ง๊ฒ Item-List ํํฐ๋ง ํ ์ถ๋ ฅ

```jsx
items.forEach((item) => {
        if(filter === item.dataset.type1 || filter === item.dataset.type2) {
            item.classList.remove('invisible');
        } else {
            item.classList.add('invisible');
        }
```

## **๋๋์ ๐ก**

๊ฐ๋ฐ ๊ณต๋ถ๋ฅผ ์์์ธ ์ดํ ์ฒ์์ผ๋ก ํผ์ ํ์ผ๋ก ๋ง๋ค์ด๋ณธ ํ๋ก์ ํธ์๋๋ค.
๋น๋ก ์์ ํ๋ก์ ํธ์์ง๋ง ๋ก์ง์ ์๊ฐํ๊ณ , ๊ธฐ๋ฅ์ ๊ตฌํํ๋ฉด์ ์ด๋ป๊ฒ ํ๋ฉด ๋ ํจ์จ์ ์ธ ์ฝ๋๋ก ์งค ์ ์์๊น ์์์ด ๊ณ ๋ฏผํ์ต๋๋ค.
๋ํ ๊ณํํ๋ ๊ธฐ๋ฅ์ ๋ง์ ๊ตฌํํ๋ ค๊ณ  ํ  ๋ ๋๊ปด์ง๋ ๋ง๋งํจ์ ํ๋ค๊ธฐ๋ ํ์ต๋๋ค.
ํ์ง๋ง ๊ธฐ๋ฅ ๊ตฌํ์ ์ฑ๊ณตํ๊ณ , ๊ณํํ๋ ๋๋ก ๋ง๋ค์ด์ก์ ๋ ๊ทธ ์ง๋ฆฟ๊ฐ์ ์ด๋ฃจ ๋งํ  ์ ์์์ต๋๋ค.
๋ํ ๊ธฐ์ด์ ์ธ HTML๊ณผ CSS, Vanilla JS๋ฅผ ๊ณต๋ถํ  ์ ์์์ต๋๋ค.
๋ค์ ํ๋ก์ ํธ๋ ๋์ฑ ๊ธฐ๋ฅ๋ ๋ง๊ณ  ๋ฉ์ง ํ๋ก์ ํธ์ ๋์ ํ  ๊ฒ์๋๋ค.
