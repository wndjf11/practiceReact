import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increaseAge2 } from "../store/store";
import { increaseCount } from "../store/store";

function Cart() {
  const a = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  const b = useSelector((state) => {
    return state.stock;
  });
  const cart = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h6>
          {a.name}({a.age}세/무직)의 장바구니
        </h6>
        <button
          onClick={() => {
            dispatch(changeName());
          }}
        >
          버튼
        </button>
        <button
          onClick={() => {
            dispatch(increaseAge2(10));
          }}
        >
          10살버튼
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(function (a, i) {
            return (
              <tr>
                <td>{cart[i].id}</td>
                <td>{cart[i].name}</td>
                <td>{cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increaseCount(cart[i].id));
                    }}
                  >
                    ⨧
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
