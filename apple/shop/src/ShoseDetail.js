import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  useEffect(() => {});
  setTimeout(() => {
    setHidden((value) => false);
  }, 2000);

  const reset = () => {
    setHidden(true);
  };

  const [hidden, setHidden] = useState(false);

  const [count, setCount] = useState(0);

  const { id } = useParams();
  const 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <div className="container">
      {count}
      <button
        onClick={() => {
          setCount((value) => value + 1);
        }}>
        버튼
      </button>
      <button onClick={reset}>보이기</button>
      <div
        className="alert alert-warning"
        style={{ display: hidden === false ? "none" : "block" }}>
        2초이내 구매시 할인
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (parseInt(id) + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
