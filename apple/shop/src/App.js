import { createContext, useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import data from "./data";
import axios from "axios";
import ShoseDetail from "./routes/ShoseDetail";
import Cart from "./routes/Cart";
import "./App.css";

export let Context1 = createContext();

function App() {
  const [shoses, setShoses] = useState(data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  const [img] = useState([
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg",
  ]);

  function AddShoses(tee) {
    console.log(tee);
    const copy = [...shoses];
    tee.map(function (a, i) {
      copy.push(tee[i]);
    });
    console.log(copy);
    setShoses(copy);
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail/0">Detail</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Link to="/cart">cart</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoses.map(function (a, i) {
                    return (
                      <Col sm={4}>
                        <Card img={img[i]} shoses={shoses[i]} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
              <button
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((tend) => {
                      // console.log(tend.data);
                      AddShoses(tend.data);
                    });
                }}
              >
                버튼
              </button>
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoses }}>
              <ShoseDetail shoes={shoses} />
            </Context1.Provider>
          }
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );

  function Card(props) {
    return (
      <div>
        <img src={props.img} width="80%" />
        <h4>{props.shoses.title}</h4>
        <p>{props.shoses.price} 원</p>
      </div>
    );
  }
}

export default App;
