import { useState } from "react";

function App() {
  // const [counter, setValue] = useState(0);
  // const onClick = () => setValue((value) => value + 1);

  // console.log(`i run all the time`);

  // const iRunOnlyOnce = () => {
  //   console.log(" i run only once.")
  // }
  // return (
  //   <div>
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>click me</button>
  //   </div>
  // );

  const post = "강남 우동 맛집";
  const [글제목, change] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  const [따봉, 따봉변경] = useState(0);

  const set따봉 = () => {
    따봉변경((value) => value + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={set따봉}>b</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[1]} <span>b</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
