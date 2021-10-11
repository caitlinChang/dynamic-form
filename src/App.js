import "./App.css";
import "@formily/antd/dist/antd.css";
import "antd/dist/antd.css";

import FormilyComponent from "./pages/formily";
import ReactJsonSchemaForm from "./pages/reactJsonSchemaForm";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <div
        style={{
          padding: "20px",
          border: "1px solid #555",
          margin: "10px",
          width: "500px",
        }}
      >
        <FormilyComponent />
      </div>
      {/* <div
        style={{
          flex: 1,
          padding: "20px",
          border: "1px solid #555",
          margin: "10px",
        }}
      >
        <ReactJsonSchemaForm />
      </div> */}
    </div>
  );
}

export default App;
