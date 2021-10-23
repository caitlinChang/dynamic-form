import { Schema, ISchema } from '@formily/react';
import readWriteCtrlSchema from './readWriteCtrlSchema'

type AdditionalProperties = {
  addReadWriteCtrl:() => FlowSchemaType;

}

type FlowSchemaType = ISchema & AdditionalProperties

export const schema:ISchema = new Schema({
  type:'object'
})
// 一键配置模块化的东西
schema.addReadWriteCtrl = function(){
  
}