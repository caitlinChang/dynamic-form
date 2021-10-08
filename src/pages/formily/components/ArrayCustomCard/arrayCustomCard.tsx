import React, { CSSProperties } from "react";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "./index.less";
import { Rule } from "antd/lib/form";

type Props = {
  button_name: string;
  Components: any;
  isView?: boolean;
  initParams?: any;
  add?: () => void; // 预留的钩子函数
  style?: CSSProperties;
  extraProps?: any;
  // Form.List 的 默认 props
  prefixCls?: string;
  name: string | number | (string | number)[];
  rules?: Rule[];
  initialValue?: any[];
};
/**
 *
 * @param props
 * @returns
 */
export default function AddForm(props: Props) {
  return (
    <Form.List name={props.name}>
      {(fields, { add, remove }, { errors }) => (
        <>
          <Form.Item className="form-round-add" wrapperCol={{ span: 24 }}>
            <Form.ErrorList errors={errors} />
            <Button
              disabled={props.isView}
              onClick={() => add(props.initParams || {})}
              icon={<PlusOutlined />}
            >
              {props.button_name}
            </Button>
          </Form.Item>

          {fields.map((field, index: number) => {
            const { Components, extraProps } = props;
            const defaultProps = {
              field,
              index,
              remove,
              disabled: props.isView,
              fields,
              ...extraProps,
            };
            return <Components key={field.key} {...defaultProps} />;
          })}
        </>
      )}
    </Form.List>
  );
}
