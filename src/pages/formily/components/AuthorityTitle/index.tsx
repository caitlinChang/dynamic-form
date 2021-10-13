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

type ValueType = {
  visible?: boolean;
  disabled?: boolean;
};

type PropsType = {
  children?: (index: number) => ReactElement;
  name: string;
  value?: ValueType;
  onChange?: (v: ValueType) => void;
};
// 用 JSON - Schema 实现自定义组件
const ArrayCard = (props: PropsType) => {
  const { disabled = false, visible = true } = props.value || {};
  const form = useForm();
  const userType = form.getValuesIn(["userType"]);
  const handleControlEdit = function () {
    form.setValuesIn("form.action.type1Status", {
      disabled: !disabled,
      visible,
    });
  };
  const handleControlVisible = function () {
    form.setValuesIn("form.action.type1Status", {
      visible: !visible,
      disabled,
    });
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", margin: "10px 0" }}>
        <h3 style={{ marginRight: "20px" }}>{props.name}</h3>
        {userType === "admin" && (
          <>
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
          </>
        )}
      </div>

      {props.children}
    </div>
  );
};
export default observer(ArrayCard);
