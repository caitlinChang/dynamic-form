import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { ArrayField, Field, Form } from "@formily/core";
import {
  ISchema,
  RecursionField,
  useFieldSchema,
  useField,
  observer,
  useForm,
} from "@formily/react";
import { Button } from "antd";

import {
  FormOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

type PropsType = {
  children?: (index: number) => ReactElement;
  name: string;
};
// 用 JSON - Schema 实现自定义组件
const ArrayCard = (props: PropsType) => {
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const schema = useFieldSchema();
  const form = useForm();
  const handleControlEdit = function () {
    // schema.setAdditionalProperties({
    //   disabled: {
    //     type: "boolean",
    //     default: false,
    //   },
    //   visible: {
    //     type: "boolean",
    //     default: true,
    //   },
    // });
    schema["x-data"] = {
      ...schema["x-data"],
      disabled: !disabled,
    };
    console.log("schema", schema);

    setDisabled(!disabled);
  };
  const handleControlVisible = function () {
    // schema["x-visible"] = !visible;
    schema["x-data"] = {
      ...schema["x-data"],
      visible: !visible,
    };
    console.log("schema", schema);
    console.log("userType", form.getValuesIn(["userType"]));
    setVisible(!visible);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", margin: "10px 0" }}>
        <h3 style={{ marginRight: "20px" }}>{props.name}</h3>
        <Button
          onClick={handleControlEdit}
          style={{ color: disabled ? "#555" : "red", marginRight: "10px" }}
          icon={<FormOutlined />}
        ></Button>
        <Button
          style={{ color: visible ? "red" : "#555" }}
          onClick={handleControlVisible}
          icon={<EyeOutlined />}
        ></Button>
      </div>

      {props.children}
    </div>
  );
};
export default observer(ArrayCard);
