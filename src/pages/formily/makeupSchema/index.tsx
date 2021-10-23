import React from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import { Form, FormItem, Input, NumberPicker } from '@formily/antd'

export default function MakeUpSchema(){
  const SchemaField = createSchemaField()
  const form = createForm()
  return <Form form={form}>
    <SchemaField>
      <SchemaField.String name="username" title="用户名" x-component="Input" x-decorator="FormItem" />
      <SchemaField.String name="username" title="密码" x-component="Input" 
      x-component-props={{
        type:'password'
      }} x-decorator="FormItem" />
    </SchemaField>
  </Form>
}