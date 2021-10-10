import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Tabs, TabsProps, TabPaneProps } from "antd";
import ConditionItem from "./ConditionItem";

import { ConditionItemType, LinkType } from "./constant";

type PropsType = {
  onChange: (value: any) => void;
  tabs: TabPaneProps[];
  value: ConditionItemType[];
};

/**
 * 这是一个基于antd的业务组件，测试能否接入Formily 或其他动态表单，记录接入成本
 * @returns
 */
const { TabPane } = Tabs;

const initialPanes = [{ title: "Default", key: "1", closable: false }];

const initialValue = [
  {
    value: [
      {
        value: "1",
        link: LinkType.AND,
      },
    ],
    link: LinkType.AND,
  },
];

const ConditionCompose = function (props: PropsType) {
  const [activeKey, setActiveKey] = useState("1");
  const [panes, setPanes] = useState(initialPanes);
  const handleTabChange = function () {};

  return (
    <div>
      <Tabs
        type="editable-card"
        onChange={handleTabChange}
        activeKey={activeKey}
      >
        {panes.map((pane) => (
          <TabPane
            tab={pane.title}
            key={pane.key}
            closable={pane.closable}
          ></TabPane>
        ))}
      </Tabs>
      <ConditionItem
        value={props.value}
        onChange={props.onChange}
        initialValue={initialValue}
      />
    </div>
  );
};

export default observer(ConditionCompose);
