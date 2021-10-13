export const buttonListSchema = {
  type: "array",
  title: "Button Setting",
  "x-component": "ArrayCard",
  "x-hidden": false,
  default: [{}],
  items: {
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
        default: "normal",
      },
      button_text: {
        title: "Button Text",
        type: "string",
        "x-component": "Input.TextArea",
        "x-decorator": "FormItem",
        "x-decorator-props": {
          label: "Button Text",
        },
        default: "Yes Or No",
      },
      button_function: {
        title: "Button Function",
        type: "string",
        "x-component": "Select",
        "x-decorator": "FormItem",
        "x-decorator-props": {
          label: "Button Function",
        },
        default: "for use to change password",
      },
      button_URL: {
        title: "URL",
        type: "string",
        "x-component": "Select",
        "x-decorator": "FormItem",
        "x-decorator-props": {
          label: "URL",
        },
        default: "************",
      },
    },
  },
};
