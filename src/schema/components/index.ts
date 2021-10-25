import { Schema, ISchema } from '@formily/react';
import * as readWriteCtrlSchema from './readWriteCtrl'
import TabsSchema from './tabs';

export function getEditorFormRootSchema(): Schema{
  const schema = new Schema({
    type:'object',
    properties:{
      tabs:TabsSchema,
      data:{
        type:'object'
      }
    }
  })
  TabsSchema?.properties?.view.addProperty?.('input',{
    type: "string",
    title: "Button Style",
    name: "button_style",
    "x-component": "Select",
    "x-component-props": {},
    "x-decorator": "FormItem",
    "x-decorator-props": {
      label: "Button Style",
    },
    default: "normal",
  })

  return schema
}



