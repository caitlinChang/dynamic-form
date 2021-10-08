export const arrayItemSchema = {
  type: "object",
  properties: {
    button_style: {
      type: "string",
      "x-component": "Select",
    },
    button_text: {
      type: "string",
      "x-component": "Input",
    },
  },
};

export const arraySchema = {
  type: "array",
  "x-component": "ArrayCard",
  "x-component-props": {
    FieldSchema: arrayItemSchema,
  },
  items: arrayItemSchema,
};
