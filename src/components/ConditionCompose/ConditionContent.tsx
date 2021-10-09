import React, { useEffect, useState } from "react";
import { Select, Radio, Button } from "antd";
import { SelfIncreasingStore } from "./store";

type PropsType<T> = {
  value?: T[];
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

const ConditionContent = function (props: PropsType<any>) {
  const { value, onChange } = props;
  const store = new SelfIncreasingStore({ value });
  useEffect(() => {
    onChange?.(store.value);
  }, [store.value]);
  return (
    <div>
      <h3>Condition {}</h3>
      {value?.map((item, index: number) => {
        return (
          <div>
            {index >= 0 && (
              <Radio.Group
                options={[
                  { label: "And", value: "and" },
                  { label: "Or", value: "or" },
                ]}
                buttonStyle="solid"
              />
            )}
            <div>
              <Select options={options} />
              <Button onClick={() => store.add()}> + </Button>
              <Button onClick={() => store.delete(index)}> - </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConditionContent;
