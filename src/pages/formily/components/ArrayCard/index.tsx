import React, { ReactElement, createContext, useContext } from "react";
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

type PropsType = Field & {
  children: (index: number) => ReactElement;
  title?: string;
};
// 用 JSON - Schema 实现自定义组件
const ArrayCard = (props: PropsType) => {
  const field = useField<ArrayField>();
  const schema = useFieldSchema();
  const form = useForm();
  const status = form.getValuesIn(["tabs"]);
  console.log("status = ", status);

  return (
    <div>
      <h3>{props.title}</h3>
      {field.value?.map((item: any, index: number) => (
        <div key={index}>
          {status === "edit" && (
            <Button
              style={{ float: "right" }}
              size="small"
              onClick={() => field.remove(index)}
            >
              Delete
            </Button>
          )}
          <RecursionField name={index} schema={schema.items as any} />
        </div>
      ))}
      {status === "edit" && (
        <Button
          type="dashed"
          block
          onClick={() => {
            field.push({});
          }}
        >
          + Add
        </Button>
      )}
    </div>
  );
};
export default observer(ArrayCard);
