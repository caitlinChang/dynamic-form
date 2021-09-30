import react from "react";
// @ts-ignore
import Form from "@rjsf/antd";

export default function ReactJsonSchemaForm() {
  const schema = {
    type: "object",
    properties: {
      choose: {
        type: "string",
        title: "请选择",
        enum: ["a", "b", "c"],
      },
    },
  };

  const uiSchema = {
    choose: {
      "ui:widget": "radio",
    },
  };
  function handleSubmit(values: any) {
    console.log(
      "react-json-schema-form demo submit trigger, values = ",
      values
    );
  }
  return (
    <div>
      <h4>react-json-schema-form Demo</h4>
      <Form
        schema={schema as any}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
