const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

const bgList = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.classList.add('background');


bgImg.src =`img/${bgList}`;

document.body.appendChild(bgImg);
// document.body.prepend(bgImg);

// Math.random (); // 0.123156 등 1과 0 사이의 소수점으로 나옴 
// Math.ceil(1.9); // 1보다 큰 수는 무조건 반올림. 1.0만이 1이 되게 함
// Math.floor (1.9); // 1보다 큰 수는 무조건 내림 
// Math.round(1.9); // 0.8은 1, 0.1은 0이 되는 반올림   
// Math.floor(math.random() * 10 ); // 랜덤 숫자 얻기

