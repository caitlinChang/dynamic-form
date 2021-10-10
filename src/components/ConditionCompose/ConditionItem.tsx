import React, { useEffect } from "react";
import { Button } from "antd";
import { SelfIncreasingStore } from "./store";
import { observer } from "mobx-react-lite";

import { ConditionItemType } from "./constant";

import ConditionSubItem from "./ConditionSubItem";

import "./index.less";

type PropsType<T> = {
  value?: T[];
  initialValue?: T[];
  onChange?: (value: T[]) => void;
};

const store = new SelfIncreasingStore<ConditionItemType>({
  templateParams: {
    value: [
      {
        value: "",
      },
    ],
  },
});

const ConditionItem = function (
  props: PropsType<ConditionItemType | undefined>
) {
  const { value, onChange, initialValue } = props;
  useEffect(() => {
    store.update(initialValue as any);
  }, [initialValue]);

  useEffect(() => {
    if (store.value) onChange?.(store.value);
  }, [store.value]);
  return (
    <div>
      <h3>Condition {}</h3>
      {store?.value?.map(
        (item: ConditionItemType | undefined, index: number) => {
          return (
            <div>
              <ConditionSubItem
                value={item?.value}
                initialValue={item?.value}
              />
            </div>
          );
        }
      )}
      <Button
        style={{ margin: "20px 0" }}
        type="dashed"
        block
        onClick={() => store.add()}
      >
        + Condition Set
      </Button>
    </div>
  );
};

export default observer(ConditionItem);
