import { Schema } from "@formily/react";
import { arraySchema } from "./components/ArrayCard/schema";

export const schemaTree = new Schema({
  type: "object",
  properties: {
    button_list: arraySchema,
    custom_name: {
      type: "string",
      title: "custom_name测试",
      name: "custom_name",
      "x-component": "Input",
    },
  },
});
