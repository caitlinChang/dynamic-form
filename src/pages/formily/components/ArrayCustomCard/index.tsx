import React, { CSSProperties } from "react";
import { connect, mapProps } from "@formily/react";
import AddForm from "./arrayCustomCard";
/**
 * connect 和 mapProps 用于无缝衔接自定义组件库接入 formily
 * 如何配合schema 使用 待验证
 * @param
 * @returns
 */
export default connect(
  AddForm,
  mapProps({}, (props, field) => {
    return {
      ...props,
      help: "",
    };
  })
);
