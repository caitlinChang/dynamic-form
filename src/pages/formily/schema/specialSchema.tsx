import React from "react";

const CustomTitle = function () {
  return <div>use React.ReactNode</div>;
};

export const specialSchema = {
  type: "object",
  properties: {
    reactNode: {
      type: "string",
      title: <CustomTitle />,
      "x-component": "Input",
      "x-decorator": "FormItem",
      "x-decorator-props": {
        // label: <CustomTitle />,
      },
    },
  },
};
const string = JSON.stringify(specialSchema);
console.log("string specialSchema = ", string);
console.log("object specialSchema = ", JSON.parse(string));
