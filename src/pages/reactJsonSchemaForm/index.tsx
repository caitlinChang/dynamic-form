import react, { useEffect, useState } from "react";
// @ts-ignore
import Form from "@rjsf/antd";

import { getOptions } from "../../utils/index";

export default function ReactJsonSchemaForm() {
  const [buttonStyleOptions, setButtonStyleOptions] = useState<any[]>([]);
  useEffect(() => {
    getOptions().then((data) => {
      console.log("data = ", data);
      setButtonStyleOptions(data as any);
    });
  }, []);
  const schema = {
    type: "object",
    properties: {
      choose: {
        type: "string",
        title: "请选择",
        enum: ["a", "b", "c"],
      },
      buttonSetting: {
        type: "object",
        properties: {
          buttonStyle: {
            type: "string", // TODO: 注意这里只是值类型，可以映射到不同的组件，只要这个组件接收的value 类型为string
            enum: buttonStyleOptions, // ✅ 支持异步 & 动态变化
          },
          buttonText: {
            type: "number",
            allowClear: true,
            defaultValue: 1,
          },
          buttonFunction: {
            type: "string", // TODO: 这里需要考虑一种情况，就是value为function的情况，如果不能是function，起码要有方式把function序列化成string
          },
          buttonUrl: {
            type: "string",
          },
        },
      },
    },
  };

  const uiSchema = {
    choose: {
      "ui:widget": "select",
    },
    // buttonSetting: {
    buttonStyle: {
      "ui:widget": "Select",
    },
    buttonText: {
      "ui:widget": "InputNumber",
      "ui:options": {
        allowClear: true,
        defaultValue: 1,
      },
    },
    buttonFunction: {
      "ui:widget": "select",
    },
    buttonUrl: {
      "ui:widget": "select",
    },
    // },
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
