import { useState } from "react";
// import { Button } from "react-bootstrap";
import { Subtest } from "./component/Subtest";
import { Tablelist } from "./component/Tablelist";
import "./../../sass/App.scss";
function App() {
  let [data, setData] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div>備忘錄</div>
        <Subtest add={setData} />
        <Tablelist listData={data} deleteData={setData} />
      </header>
    </div>
  );
}

export default App;
