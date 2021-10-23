import React from 'react'
import { createForm } from '@formily/core'
import { createSchemaField,ISchema, Schema,FormProvider } from '@formily/react'
import { Form, FormItem, Input, NumberPicker } from '@formily/antd'
import { components } from '../components'

export default function MakeUpSchema(){
  const SchemaField = createSchemaField({
    components
  });
  console.log('SchemaField', SchemaField);
  
  const form = createForm();
  const schema: ISchema = {
    type:'object',
    properties:{
      name:{
        type:'string',
        title:'name',
        'x-component':'Select',
        'x-decorator':'FormItem'
      },
      age:{
        type:'number',
        title:'age',
        'x-component':'Select',
        'x-decorator':'FormItem'
      }
    }
  }

  const demo = <>
  <SchemaField.String name="username" title="用户名" x-component="Input" x-decorator="FormItem" />
      <SchemaField.String name="password" title="密码" x-component="Input" 
      x-component-props={{
        type:'password'
      }} x-decorator="FormItem" />
  </>

  const schemaL = new Schema(schema)
  return <FormProvider form={form}>
    <SchemaField  >
      {/* { demo } */}
    </SchemaField>
  </FormProvider>
}