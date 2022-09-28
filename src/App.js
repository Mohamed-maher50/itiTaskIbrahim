import { useState } from "react";
import "./App.css";
import Cards from "./components/Card/Cards";

function App() {
  const [cards, setCards] = useState([{}, {}, {}, {}]);
  return (
    <>
      <div className="container">
        <h1
          className="text-center m-auto mt-5 pb-4"
          style={{ width: "fit-content", borderBottom: "2px solid #00e1ff" }}
        >
          We are the one
        </h1>
        <p className="w-75 text-center m-auto mt-5">
          Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque
          mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea,
          vis cu ubique referrentur, sed eu dicant expetendis.
        </p>
        <div className="row mt-5 d-flex justify-content-between">
          {cards.map((card) => {
            return <Cards />;
          })}
        </div>
      </div>
      <div className="w-100 p-5 mt-5" style={{ background: "#f7f7f7" }}>
        <div className="container">
          <div className="row" style={{ height: "300px" }}>
            <div className="col-12 col-lg-6 h-100 bg-dark mb-3"></div>
            <div className="col-12 col-lg-6">
              <h3>About Ket</h3>
              <p className="mt-3" style={{ lineHeight: "30px" }}>
                Lorem ipsum dolor sit amet, quod iusto senserit at his, animal
                phaedrum hendrerit no cum. Duis mucius inciderint qui et, id
                epicuri corrumpit vim, vis eu erat sadipscing consectetuer. No
                nec justo nihil phaedrum, duis utinam nam ne. Probo vidisse sea
                ut, pro tale stet assueverit an, ne oratio albucius adversarium
                mei. Sale quando mel et, usu ad aeterno percipitur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative" style={{ height: "300px" }}>
        <div
          className="layout position-absolute h-100 bg-dark w-100 pt-5"
          style={{ opacity: "1" }}
        >
          <h3 className="text-center text-white ">
            The artist in me cries out for design.
          </h3>
          <span className="text-center text-white">Robert Frost</span>
        </div>
        <img src="" alt="" />
      </div>
    </>
  );
}

export default App;
