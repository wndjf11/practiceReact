/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  const [따봉, 따봉변경] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          const copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        변경해보자
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        {" "}
        정렬버튼{" "}
      </button>

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal((value) => !value);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation;
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>

            <p>2월 17일 발행</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제하기
            </button>
          </div>
        );
      })}
      <form>
        <input
          type={"text"}
          placeholder="입력하세요"
          onChange={(event) => {
            입력값변경(event.target.value);
            console.log(입력값);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            let copy = [...글제목];
            copy.push(입력값);
            글제목변경(copy);
          }}
        >
          추가하기
        </button>
      </form>

      {modal === true ? (
        <Modal title={title} 작명={글제목} 함수={글제목변경} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: "skyblue" }}>
      <h4> {props.작명[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.작명];
          copy[0] = "여자 코트 추천";
          props.함수(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
