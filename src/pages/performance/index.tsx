import React from "react";
import CustomInput from "./components/CustomInput";
import { Form } from "antd";
import { useForm } from "@formily/react";
import { Form as FormilyForm } from "@formily/antd";

export default function PerformanceComponent() {
  console.log("parent re-render");
  const [form] = Form.useForm();
  const formilyForm = useForm();
  const handleValueChange = function (changedValues: any) {
    console.log("trigger");

    if (changedValues?.name1 == 1) {
      form.setFieldsValue({
        name2: 2,
      });
    }
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
      <FormilyForm form={formilyForm}></FormilyForm>
    </div>
  );
}
