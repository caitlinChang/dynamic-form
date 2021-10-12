import "./App.css";
import "@formily/antd/dist/antd.css";
import "antd/dist/antd.css";

import FormilyComponent from "./pages/formily";
import ReactJsonSchemaForm from "./pages/reactJsonSchemaForm";
import FormRenderComponent from "./pages/x-render";

import { Link, HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Router>
        <div>
          <p>
            <Link to="./">Home</Link>
          </p>
          <p>
            <Link to="/formily">Formily Demo</Link>
          </p>
          <p>
            <Link to="/form-render">Form-Render Demo</Link>
          </p>
          <p>
            <Link to="/react-jsonschema-form">react-jsonschema-form Demo</Link>
          </p>
        </div>

        <Switch>
          <Route path="/formily">
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
          </Route>
          <Route path="/form-render">
            <div
              style={{
                flex: 1,
                padding: "20px",
                border: "1px solid #555",
                margin: "10px",
              }}
            >
              <FormRenderComponent />
            </div>
          </Route>
          <Route path="/react-jsonschema-form">
            <div
              style={{
                flex: 1,
                padding: "20px",
                border: "1px solid #555",
                margin: "10px",
              }}
            >
              <ReactJsonSchemaForm />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
