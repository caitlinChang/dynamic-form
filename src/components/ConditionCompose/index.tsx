import React, { useState } from "react";
import { Tabs, Form } from "antd";
import ConditionContent from "./ConditionContent";
/**
 * 这是一个基于antd的业务组件，测试能否接入Formily 或其他动态表单，记录接入成本
 * @returns
 */
const { TabPane } = Tabs;

const ConditionCompose = function () {
  const [activeKey, setActiveKey] = useState("1");
  const handleTabChange = function () {};

  return (
    <div>
      <Tabs
        type="editable-card"
        onChange={handleTabChange}
        activeKey={activeKey}
      ></Tabs>
      <Form.Item>
        <ConditionContent />
      </Form.Item>
    </div>
  );
};

export default ConditionCompose;
