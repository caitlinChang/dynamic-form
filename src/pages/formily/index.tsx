import React from "react";
import { createForm } from "@formily/core";
import { Field, createSchemaField } from "@formily/react";
import { Form, FormItem, Input, Select, ArrayTable } from "@formily/antd";

import ArrayList from "./components/arrayList";

/** JSON Schema方式 */
/** type: string | object | array | number | string */
export default function FormilyComponent() {
  const SchemaField = createSchemaField({
    components: {
      ArrayTable,
      Input,
      Select,
    },
    scope: {},
  });
  const normalSchema = {
    type: "object",
    properties: {
      buttonSettings: {
        type: "object",
        title: "自增组件测试",
        properties: {
          // buttonList: {
          //   type: "array",
          //   "x-component": "ArrayTable",
          //   items: {
          //     type: "object",
          //     properties: {
          buttonStyle: {
            title: "button style",
            type: "string",
            "x-component": "input",
          },
          buttonText: {
            title: "button Text",
            type: "string",
            "x-component": "select",
          },
          // },
          // },
          // },
        },
      },
    },
  };
  const form = createForm();
  function handleSubmit(values: any) {
    console.log("Formily demo submit trigger, values = ", values);
  }
  return (
    <div>
      <h3>Formily Demo</h3>
      <div>
        <Form form={form}>
          <SchemaField schema={normalSchema} />
        </Form>
      </div>
    </div>
  );
}
