'use strict'

// color, cloth 배열
let color = ["blue", "pink", "yellow"];
let cloth = ["p", "s", "t"];
let gender = ["male", "female"];
let size = ["small", "medium", "large"];

// Class 정리
// Li에 들어갈 객체를 만들기 위한 Class
class CreatObject {
    constructor(randomFunc){
    // 랜덤값이 들어있는 배열을 만드는 함수
 
        for(let i = 0; i < 8; i++) {
            const ranArray = randomFunc();
            const img = addImg(ranArray);
            console.log(`img" ${img}`);
            const gender = addGender(ranArray);
            const size = addSize(ranArray);
            addList(img,gender,size, ranArray[0], ranArray[1]);
        }
    }
};

// 함수 정리
// 각 랜덤값을 뽑아서 새 객체로 반환
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

function addImg(array) {
    console.log('array: '+ array);
    let arrayColor = array[0];
    console.log(`arrayColor: ${arrayColor}`);
    let arrayCloth = array[1];
    console.log(`arrayCloth: ${arrayCloth}`);

    // 이미지 뽑아옴
    const img = new Image();
    img.src = `img/${arrayColor}_${arrayCloth}.png`;
    console.log('img.src: ' + img.src);
    img.classList.add('randomImg');
    console.log(`img: ${img}`);
    //li.prepend(img);
    console.log(`img, arrayColor, arrayCloth => ${img}, ${arrayColor}, ${arrayCloth}`);
    return img;
}
// 성별 텍스트 출력 함수
function addGender(array) {
    // li에 넣을 p 태그 생성
    const p = document.createElement("p");
    let arrayGender = array[2];
    console.log(`arrayGender: ${arrayGender}`);

    // 성별 출력
    let genderPtag = p;
    genderPtag.classList.add(`arrayGender`, `${arrayGender}`);
    let genderText = document.createTextNode(`${arrayGender},`);
    genderPtag.append(genderText);
    console.log(`genderPtag: ${genderPtag}`);
    //li.prepend(genderPtag);
    return genderPtag;
}

// 사이즈 텍스트 출력 함수
function addSize(array) {
    // li에 넣을 p 태그 생성
    const p = document.createElement("p");
    let arraySize = array[3];
    console.log(`arraySize: ${arraySize}`);

    // 사이즈 출력
    let sizePtag = p;
    sizePtag.classList.add(`arraySize`, `${arraySize}`);
    let sizeText = document.createTextNode(`${arraySize} size`);
    console.log(sizeText);
    sizePtag.append(sizeText);
    //li.prepend(sizePtag);
    console.log(`sizePtag: ${sizePtag}`);
    return sizePtag;
}

// li 태그 추가하는 함수
function addList(img, gender, size, color, cloth) {
    const li = document.createElement("li");
    li.setAttribute('id', "item");
    document.getElementById('items').appendChild(li);
    li.setAttribute('data-type1', `${cloth}`);
    li.setAttribute('data-type2', `${color}`);
    li.prepend(img);
    li.prepend(gender);
    li.prepend(size);
}

const obj = new CreatObject(randomArray);

const workBtnContainer = document.querySelector('.menu__button');
const itemsContainer = document.querySelector('#items');
const items = document.querySelectorAll('#item');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    console.log(`filter: ${filter}`);
    //console.log('e.target.dataset.filter => ' + e.target.dataset.filter);
    //console.log('e.target.parentNode.dataset.filter => ' + e.target.parentNode.dataset.filter);
    // filter 값이 null이면 아무것도 해주지 않음
    if(filter == null) {
        return;
    }

    // item 들을 먼저 안보이게 함
    // item 들을 배열로 받아옴
    items.forEach((item) => {
        // filter와 type 값이 동일한 것들은 invisible를 삭제함으로서 보이게 하고
        console.log(`item.dataset.type: ${item.dataset.type1}`);
        console.log(`item.dataset.type: ${item.dataset.type2}`);
        if(filter === item.dataset.type1 || filter === item.dataset.type2) {
            console.log('item.dataset.type1: ' + item.dataset.type1);
            console.log('item.dataset.type2: ' + item.dataset.type2);
            item.classList.remove('invisible');
        // filter와 type 값이 동일하지 않은 것들은 invisible를 활성화 시켜 사라지게 한다.
        } else {
            item.classList.add('invisible');
        }
    });
});



// 1. img 파일에 있는 사진 이름 blue, pink, yellow 을 배열로 담아서
// 2. 랜덤 문자열로 반환하는 함수 
// 3. 해당 이름에 맞는 이미지가 출력
// 4. 이미지 왼쪽에 성별 출력
// 5. 성별 왼쪽에 사이즈 출력*/