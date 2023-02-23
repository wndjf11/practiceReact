import { useContext, useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Opacity.css";
import { Context1 } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/store";

function Detail(props) {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const temp = useEffect(() => {
    return;
  });
  const dispatch = useDispatch();

  let { 재고 } = useContext(Context1);
  const [fade2, setFade2] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade2("end");
    }, 500);
    return () => {
      setFade2("");
    };
  }, []);

  setTimeout(() => {
    setHidden((value) => false);
  }, 2000);

  const reset = () => {
    setHidden(true);
  };

  const [hidden, setHidden] = useState(false);

  const [tab, setTab] = useState(0);

  const [count, setCount] = useState(0);
  const { id } = useParams();
  const 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  return (
    <div className={"container start" + fade2}>
      {/* {count} */}
      <div>{재고[0]}</div>
      <button
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        버튼
      </button>
      <button onClick={reset}>보이기</button>
      <div
        className="alert alert-warning"
        style={{ display: hidden === false ? "none" : "block" }}
      >
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
            alt="test"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
              console.log(cart);
            }}
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={tab} />
    </div>
  );
}

function TabContent({ 탭 }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 1000);
    return () => {
      setFade("");
    };
  }, [탭]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
