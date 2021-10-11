export const buttonSettingSchema = {
  type: "void",
  "x-component": "Typography.Title",
  "x-component-props": {
    children: "Button Setting",
    level: 5,
  },
  properties: {
    button_setting: {
      type: "boolean",
      default: true,
      "x-component": "Switch",
      "x-component-props": {
        style: {
          float: "right",
        },
      },
      // schema 联动 配置, 内置表达式
      "x-reactions": {
        target: "form.button_list",
        fulfill: {
          state: {
            visible: "{{$self.value === true }}",
          },
        },
      },
    },
  },
};
