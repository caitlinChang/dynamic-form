import React from "react";
import { createForm } from "@formily/core";
import { FormProvider, Field, createSchemaField } from "@formily/react";
// import { FormItem, Input, FormLayout } from "@formily/antd";

import { schemaTree } from "./schema";
import { components } from "./components";

export default function FormilyComponent() {
  const form = createForm();
  const SchemaField = createSchemaField({ components });
  return (
    <div>
      <h3>formily demo</h3>
      <FormProvider form={form}>
        <SchemaField
          components={components}
          schema={schemaTree as any}
        ></SchemaField>
      </FormProvider>
    </div>
  );
}
