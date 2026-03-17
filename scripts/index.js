// index.js
// 1. 상품가격 입력
// 2. 할인율보기 클릭
// 3. 1번의 가격이 할인율 계산함수로 계산
// 4. 3번 결과가 li 출력

// DOM변수 3개
const moneyInput = document.querySelector('#money');
const resultBtn = document.querySelector('#result');
const disCountLi = document.querySelectorAll('.discount li');
const resetBtn = document.querySelector('.reset')

console.log(moneyInput, resultBtn, disCountLi, resetBtn);

// moneyInput 변수 초기값 100 대입
// <input value="100"> value 속성
// <태그 속성 ="값">
// 객체.함수();
// 객체.속성;
moneyInput.value = ''; // 초기값 대입

// 버튼 이벤트(버튼에 동작을 넣어 함수 실행시키는 목적)
// 객체.addEventListener('이벤트', 실행함수);
resultBtn.addEventListener('click', function(){
    // '이벤트' 했을때 실행하고 싶은 명령
    // alert('값을 입력하고 다시 버튼을 누르세요.');
    console.log(disCountFunc(moneyInput.value));
    disCountLi[0].textContent = `입력가 : ${moneyInput.value}원`
    disCountFunc(moneyInput.value);
});

// 초기화 클릭하면 입력값부터 li의 모든 값까지 초기화되게하기
// 숫자0 또는 빈문자열'' -> 초기화 
resetBtn.addEventListener('click', resetFunc);
function resetFunc(){
    moneyInput.value = '';
    disCountLi[0].textContent = '';
    disCountLi[1].textContent = '';
    disCountLi[2].textContent = '';
    disCountLi[3].textContent = '';
    disCountLi[4].textContent = '';
    disCountLi[5].textContent = '';
    disCountLi[6].textContent = '';
}

// 초기값 또는 입력값에 따라 할인율 계산하는 함수
function disCountFunc(price){
    disCountLi[1].textContent = `5% 할인율 : ${price * 0.95}원`;
    disCountLi[2].textContent = `10% 할인율 : ${price * 0.9}원`;
    disCountLi[3].textContent = `20% 할인율 : ${price * 0.8}원`;
    disCountLi[4].textContent = `30% 할인율 : ${price * 0.7}원`;
    disCountLi[5].textContent = `40% 할인율 : ${price * 0.6}원`;
    disCountLi[6].textContent = `50% 할인율 : ${price * 0.5}원`;
    return;
}
