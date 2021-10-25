import React, { useEffect,useState } from 'react'
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/react'

import { components } from '../components'
import { NodeType } from './type';
import { matchNodeSchema } from './utils';

export default function MakeUpSchema(props:{
  nodeType: NodeType
}){
  const [schema,setSchema] = useState({})
  const form = createForm();
  const { nodeType = 0 } = props;

  useEffect(() => {
    setSchema(matchNodeSchema(nodeType))
  },[nodeType])

  const SchemaField = createSchemaField({
    components
  });
  

  return <div>
    <h3>澄清节点</h3>
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider>
    {/* <h3>条件节点</h3>
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider>
    <h3>回复节点</h3>
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider> */}
  </div>
}