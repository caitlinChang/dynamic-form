import { buttonSettingSchema } from "./buttonSettingsSchema";
import { buttonListSchema } from "./buttonListSchema";
import { Schema } from "@formily/react";
import { answerTabSchema } from "./answerSchema";

const formSchema = {
  answerTitle: {
    type: "void",
    "x-component": "Typography.Title",
    "x-component-props": {
      children: "Answer",
      level: 5,
    },
  },
  answer: answerTabSchema,
  actionTitle: {
    type: "void",
    "x-component": "Typography.Title",
    "x-component-props": {
      children: "Action",
      level: 5,
    },
  },
  buttonSetting: buttonSettingSchema,
  button_list: buttonListSchema,
};

export const schemaTree = new Schema({
  type: "object",
  properties: {
    tabs: {
      // 前端控制字段
      type: "string",
      default: "edit",
      "x-component": "FormTab",
      "x-reactions": {
        target: "form",
        fulfill: {
          schema: {
            "x-read-pretty": "{{$self.value === 'view'}}",
          },
        },
      },
      properties: {
        edit: {
          type: "void",
          "x-component": "FormTab.TabPane",
          "x-component-props": {
            tab: "Edit",
            key: "edit",
          },
        },
        View: {
          type: "void",
          "x-component": "FormTab.TabPane",
          "x-component-props": {
            tab: "View",
            key: "view",
          },
        },
      },
    },
    form: {
      // 真正的表单字段
      type: "object",
      "x-read-pretty": true,
      properties: {
        // TODO: void 字段不会在最终的form data里
        ...formSchema,
      },
    },
  },
});
