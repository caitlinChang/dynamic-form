import React from "react";
import { createForm, onFieldValueChange, FormPath } from "@formily/core";
import { FormProvider, Field, createSchemaField } from "@formily/react";
import { Form, FormButtonGroup } from "@formily/antd";

import { schemaTree } from "./schema/index";
import { components } from "./components";

import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";

import "./index.css";

export default function FormilyComponent() {
  const form = createForm({});
  const SchemaField = createSchemaField({ components });
  const handleSave = function () {
    const values = form.getValuesIn([]);
    console.log("values = ", { ...values });
  };
  return (
    <div>
      <Form form={form} labelAlign="right" labelCol={5} wrapperCol={16}>
        <SchemaField
          components={components}
          schema={schemaTree as any}
        ></SchemaField>
      </Form>
      <FormButtonGroup style={{ marginTop: "20px" }}>
        <ButtonGroup>
          <Button>Preview</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
        <Button type="primary" onClick={handleSave}>
          Save
        </Button>
      </FormButtonGroup>
    </div>
  );
}
