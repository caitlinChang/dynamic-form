import { ISchema, Schema } from '@formily/react';

const TabsSchema:ISchema = {
  type: "void",
  "x-component": "FormTab",
  properties: {
    edit: {
      type: "void",
      "x-component": "FormTab.TabPane",
      "x-component-props": {
        tab: "Edit",
        key: "edit",
      },
    },
    view: {
      type: "void",
      "x-component": "FormTab.TabPane",
      "x-component-props": {
        tab: "View",
        key: "view",
      },
    },
  },
}

export default new Schema(TabsSchema)