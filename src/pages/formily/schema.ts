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

export const answerTabSchema = {
  type: "object",
  properties: {
    tabs: {
      type: "void",
      "x-component": "FormTab",
      "x-component-props": {
        type: "editable-card",
      },
      properties: {
        tab1: {
          type: "void",
          "x-component": "FormTab.TabPane",
          "x-component-props": {
            tab: "Default",
            closeable: false,
          },
          properties: {
            conditions: {
              type: "array",
              "x-component": "ArrayCard",
              "x-component-props": {
                style: {
                  background: "#f0f0f0",
                },
              },
              default: [
                {
                  select: "1",
                  linked: "and",
                },
              ],
              items: {
                type: "object",
                "x-decorator": "div",
                "x-decorator-props": {
                  style: {
                    background: "#fafafa",
                    padding: "10px",
                    margin: "0  0 10px",
                  },
                  label: "",
                },
                properties: {
                  title: {
                    type: "void",
                    title: "Condition",
                    "x-component": "Typography.Text",
                    "x-component-props": {
                      children: "Condition",
                      level: 5,
                    },
                  },
                  select: {
                    type: "string",
                    // title: "Condition", // TODO： 对表达式的支持
                    "x-component": "Select",
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                      style: {
                        margin: 0,
                      },
                      label: "",
                    },
                  },
                  linked: {
                    type: "void", // TODO: 格式问题，如果前端组件需要boolean数据，后端传参需要0和1，这种情况如何处理
                    "x-component": "Radio.Group",
                    "x-component-props": {
                      buttonStyle: "solid",
                      optionType: "button",
                      size: "small",
                    },
                    enum: [
                      {
                        label: "AND",
                        value: "and",
                      },
                      {
                        label: "OR",
                        value: "Or",
                      },
                    ],
                    "x-decorator": "FormItem",
                    "x-decorator-props": {
                      style: {
                        margin: 0,
                      },
                      label: "",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const schemaTree = new Schema({
  type: "object",
  properties: {
    answer: answerTabSchema,
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
