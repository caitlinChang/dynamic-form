import { specialSchema } from "./specialSchema";
import { buttonSettingSchema } from "./buttonSettingsSchema";
import { buttonListSchema } from "./buttonListSchema";
import { Schema } from "@formily/react";
import { answerTabSchema } from "./answerSchema";
import { actionSchema } from "./actionSchema";
import { FormTab } from "@formily/antd";
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
  action: actionSchema,
  buttonSetting: buttonSettingSchema,
  button_list: buttonListSchema,
  special_settings: specialSchema,
};

const formTab = FormTab.createFormTab?.("view");

export const schemaTree = new Schema({
  type: "object",
  properties: {
    // 用户权限控制字段
    userType: {
      type: "string",
      title: "User Type",
      "x-component": "Select",
      "x-decorator": "FormItem",
      default: "admin",
      enum: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "normal user",
          value: "normal",
        },
      ],
    },
    tabs: {
      // 前端控制字段
      type: "void",
      // default: "edit",
      "x-component": "FormTab",
      "x-component-props": {
        FormTab: "{{formTab}}",
      },
      // "x-reactions": {
      //   target: "form",
      //   fulfill: {
      //     schema: {
      //       "x-read-pretty": "{{$self.value === 'view'}}",
      //     },
      //   },
      // },
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
      // @ts-ignore
      properties: {
        ...formSchema,
      },
    },
  },
});
