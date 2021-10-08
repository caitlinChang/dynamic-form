import React from "react";
import { createForm, ArrayField as ArrayFieldType } from "@formily/core";
import {
  mapProps,
  connect,
  ArrayField,
  observer,
  useField,
  createSchemaField,
  Field,
  ISchema,
} from "@formily/react";
import { Form, Button, Select, Input } from "antd";

import { arrayItemSchema } from "./schema";

const SchemaField = createSchemaField({
  components: {
    Select,
    Input,
  },
});
type Props = {
  FieldSchema?: ISchema;
};
// 自定义组件的实现
const ArrayCard = (props: Props) => {
  const field = useField<ArrayFieldType>();
  return (
    <div>
      {field.value?.map((item, index) => (
        <div key={index}>
          <SchemaField schema={props.FieldSchema || arrayItemSchema} />
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
export default ArrayCard;
