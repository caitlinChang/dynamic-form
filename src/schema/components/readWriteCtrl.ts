import { Schema, ISchema } from '@formily/react';

const readWriteCtrlSchema: ISchema = {
  type: 'string',
  default: '01',
  'x-component': 'CustomLabel',
  'x-hidden': '{{$form.userType.value !== "Manager"}}',// 使用全局变量
}

export default new Schema(readWriteCtrlSchema)
