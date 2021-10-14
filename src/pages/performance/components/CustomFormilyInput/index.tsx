import React from "react";
import { Input } from "antd";

import { observer, useFormEffects, useForm } from "@formily/react";
import { onFieldReact, onFieldValueChange } from "@formily/core";

type PropsType = {
  value: string;
  onChange: (e: any) => void;
};

function CustomFormilyInput(props: PropsType) {
  console.log("child re-render");
  const form = useForm();
  // 关联逻辑
  useFormEffects(() => {
    onFieldReact("case1", (field: any) => {
      field.value = form.getValuesIn(["case2"]) + "22222";
    });
  });
  return <Input value={props.value} onChange={props.onChange} />;
}

export default observer(CustomFormilyInput);
