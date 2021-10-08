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
};
// 用 JSON - Schema 实现自定义组件
const ArrayCard = (props: PropsType) => {
  const field = useField<ArrayField>();
  const schema = useFieldSchema();

  return (
    <div>
      {field.value?.map((item: any, index: number) => (
        <div key={index}>
          <RecursionField name={index} schema={schema.items as any} />
          <Button onClick={() => field.remove(index)}>Delete</Button>
        </div>
      ))}
      <Button
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
