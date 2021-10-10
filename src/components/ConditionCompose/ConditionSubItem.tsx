import React, { useContext, useEffect, useState } from "react";
import { Select, Radio, Button } from "antd";
import { SelfIncreasingStore, SelfIncreasingContext } from "./store";
import { observer } from "mobx-react-lite";

import { ConditionSubItemType } from "./constant";

import "./index.less";

type PropsType<T> = {
  value?: T[];
  initialValue?: T[];
  onChange?: (value: T[]) => void;
};

const options = [
  {
    label: "Question 1",
    value: 1,
  },
  {
    label: "Question 2",
    value: 2,
  },
  {
    label: "Question 3",
    value: 3,
  },
];

const store = new SelfIncreasingStore();

const ConditionSubItem = function (props: PropsType<ConditionSubItemType>) {
  const { value, onChange, initialValue } = props;
  console.log("subItem store = ", store);
  useEffect(() => {
    // onChange?.(store.value);
    store.update(initialValue || []);
  }, [initialValue]);
  return (
    <div>
      {store?.value?.map((item, index: number) => {
        return (
          <div>
            {index > 0 && (
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="a">And</Radio.Button>
                <Radio.Button value="b">Or</Radio.Button>
              </Radio.Group>
            )}
            <div
              style={{ display: "flex", margin: "10px 0" }}
              className="condition_compose-select"
            >
              <Select style={{ flex: 1 }} options={options} />
              <Button style={{}} onClick={() => store.add()}>
                {" "}
                +{" "}
              </Button>
              <Button onClick={() => store.delete(index)}> - </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default observer(ConditionSubItem);
