import React from "react";
import { Input } from "antd";

export default function CustomInput(props: any) {
  console.log("child re-render");
  return <Input onChange={props.onChange} value={props.value} />;
}
