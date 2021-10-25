export const actionSchema = {
  type: "object",
  properties: {
    // TODO: 另设关联字段去实现显示和隐藏的控制
    type1Status: {
      type: "object",
      "x-component": "AuthorityTitle",
      "x-component-props": {
        name: "type 1",
      },
      default: {
        disabled: false,
        visible: true,
      },
    },
    type1: {
      type: "object",// {value,visible,disable}
      "x-component": "Radio.Group",
      "x-component-props": {
        options: [
          {
            label: "Button Selection",
            value: 1,
          },
          {
            label: "Card Selection",
            value: 2,
          },
          {
            label: "Popup Selection",
            value: 3,
          },
        ],
      },
      default: 1,
      "x-reactions": {
        dependencies: ["userType"],
        fulfill: {
          state: {
            visible:
              "{{$dependencies[0] === 'admin' || $form.getValuesIn(['form.action.type1Status']).visible}}",
            disabled:
              "{{$dependencies[0] === 'normal' && $form.getValuesIn(['form.action.type1Status']).disabled}}",
          },
        },
      },
    },
    type2: {
      type: "string",
      "x-component": "Input",
      "x-decorator": "AuthorityTitle",
      "x-decorator-props": {
        name: "Type 2",
      },
      additionalProperties: {
        disabled: {
          type: "boolean",
        },
        visible: {
          type: "boolean",
        },
      },
    },
  },
};
