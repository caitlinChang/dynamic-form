import React from "react";
import { Button } from "antd";
import FormRender, { useForm } from "form-render";

import { schema } from "./schema";

const FormRenderComponent = function () {
  const form = useForm();
  const onFinish = (formData: any, errors: any) => {
    console.log(formData, errors);
  };
  return (
    <div>
      x-render demo
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <div>
        <Button type="primary" onClick={form.submit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormRenderComponent;
