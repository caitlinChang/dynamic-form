import React, { ReactElement } from "react";
import { ArrayField, Field } from "@formily/core";
import {
  ISchema,
  RecursionField,
  useFieldSchema,
  useField,
  observer,
} from "@formily/react";
import { Button } from "antd";

type PropsType = Field & {
  children: (index: number) => ReactElement;
  title?: string;
};
// 用 JSON - Schema 实现自定义组件
const ArrayCard = (props: PropsType) => {
  const field = useField<ArrayField>();
  const schema = useFieldSchema();

  return (
    <div>
      <h3>{props.title}</h3>
      {field.value?.map((item: any, index: number) => (
        <div key={index}>
          <Button
            style={{ float: "right" }}
            size="small"
            onClick={() => field.remove(index)}
          >
            Delete
          </Button>
          <RecursionField name={index} schema={schema.items as any} />
        </div>
      ))}
      <Button
        type="dashed"
        block
        onClick={() => {
          field.push({});
        }}
      >
        + Add
      </Button>
    </div>
  );
};
export default observer(ArrayCard);
