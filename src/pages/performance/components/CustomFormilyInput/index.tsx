import React from "react";
import { Input } from "antd";

import { observer, useForm } from "@formily/react";

function CustomInput(props: any) {
  console.log("child re-render");
  // 关联逻辑

  return <Input />;
}

export default observer(CustomInput);
