export const answerTabSchema = {
  type: "array",
  "x-component": "ArrayTabs",
  "x-component-props": {
    style: {
      marginBottom: "20px",
      borderBottom: "1px solid #f0f0f0",
    },
  },
  title: "Case", // TODO: Tab 名称的配置
  items: {
    type: "object",
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
              type: "string", // TODO: 格式问题，如果前端组件需要boolean数据，后端传参需要0和1，这种情况如何处理
              "x-component": "Radio.Group",
              "x-component-props": {
                buttonStyle: "solid",
                optionType: "button",
                size: "small",
              },
              default: "and",
              enum: [
                {
                  label: "AND",
                  value: "and",
                },
                {
                  label: "OR",
                  value: "or",
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
};
