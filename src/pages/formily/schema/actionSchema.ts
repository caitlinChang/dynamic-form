export const actionSchema = {
  type: "object",
  properties: {
    type1: {
      type: "string",
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
      "x-decorator": "AuthorityTitle",
      "x-decorator-props": {
        name: "type 1",
      },
      additionalProperties: {
        disabled: {
          type: "boolean",
          default: false,
        },
        visible: {
          type: "boolean",
          default: true,
        },
      },
      "x-data": {
        disabled: false,
        visible: true,
      },
      "x-reactions": {
        dependencies: ["userType"],
        fulfill: {
          state: {
            visible: "{{$self['x-data'].visible}}",
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
