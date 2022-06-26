import ReactDOM from 'react-dom/client';

const product = 'MacBook';
const model = ' Air';
const item = product + model;

function handleClick() {
  alert('곧 도착!');
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <button onClick={handleClick}>확인</button>
  </>,
);
