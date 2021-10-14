import React from "react";
import CustomInput from "./components/CustomInput";
import CustomFormilyInput from "./components/CustomFormilyInput";
import { createForm, onFieldValueChange } from "@formily/core";
import { Button, Form } from "antd";
import { useForm, Field } from "@formily/react";
import { Form as FormilyForm, FormItem } from "@formily/antd";

export default function PerformanceComponent() {
  console.log("parent re-render");
  const [form] = Form.useForm();
  const formilyForm = createForm();
  const handleValueChange = function (changedValues: any) {
    console.log("trigger");

    if (changedValues?.name1 == 1) {
      form.setFieldsValue({
        name2: 2,
      });
    }
  };

  const handleSave = function () {
    const values = formilyForm.getValuesIn([]);
    console.log("values = ", values);
  };
  return (
    <div>
      <h3>React的单向数据流模式</h3>
      <Form form={form} onValuesChange={handleValueChange}>
        <Form.Item name="name1" label="name1">
          <CustomInput />
        </Form.Item>
        <Form.Item name="name2" label="name2">
          <CustomInput />
        </Form.Item>
      </Form>

      <h3>Mobx分布式数据</h3>
      <FormilyForm form={formilyForm}>
        <Field
          name="case1"
          decorator={[
            FormItem,
            {
              label: "Case1",
            },
          ]}
          component={[CustomFormilyInput]}
        ></Field>
        <Field
          name="case2"
          decorator={[
            FormItem,
            {
              label: "Case2",
            },
          ]}
          component={[CustomFormilyInput]}
        ></Field>
        <Button onClick={handleSave}>Save</Button>
      </FormilyForm>
    </div>
  );
}
