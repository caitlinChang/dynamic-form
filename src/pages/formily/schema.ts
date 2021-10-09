import { Schema } from "@formily/react";

export const arrayItemSchema = {
  type: "object",
  properties: {
    button_style: {
      type: "string",
      title: "Button Style",
      name: "button_style",
      "x-component": "Select",
      "x-component-props": {},
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "Button Style",
      },
    },
    button_text: {
      title: "Button Text",
      type: "string",
      "x-component": "Input.TextArea",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "Button Text",
      },
    },
    button_function: {
      title: "Button Function",
      type: "string",
      "x-component": "Select",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "Button Function",
      },
    },
    button_URL: {
      title: "URL",
      type: "string",
      "x-component": "Select",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "URL",
      },
    },
  },
};

export const arraySchema = {
  type: "array",
  title: "Button Setting",
  "x-component": "ArrayCard",
  "x-hidden": false,
  items: arrayItemSchema,
};

export const schemaTree = new Schema({
  type: "object",
  properties: {
    button_setting: {
      type: "boolean",
      title: "Button Setting", // ???
      "x-component": "Switch",
      "x-component-props": {},
      "x-decorator": "FormItem",
      "x-decorator-props": {
        label: "Button Setting",
      },
    },
    button_list: arraySchema,
    custom_name: {
      type: "string",
      title: "custom_name测试",
      name: "custom_name",
      "x-component": "Input",
    },
  },
});
