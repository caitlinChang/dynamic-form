import { makeAutoObservable } from "mobx";
import React from "react";
// 联动自增组件
export class SelfIncreasingStore<T> {
  value: (T | undefined)[];
  templateParams: T | undefined;
  constructor(props?: { value?: T[]; templateParams?: T }) {
    this.value = [];
    this.templateParams = props?.templateParams;
    this.update(props?.value || []);

    makeAutoObservable(this);
  }

  delete(index: number) {
    this.value.splice(index, 0);
  }

  add(params?: T) {
    console.log("add trigger");

    this.value.push(params || this.templateParams);
  }

  update(value: T[]) {
    this.value = value;
  }
}

export const SelfIncreasingContext =
  // @ts-ignore
  React.createContext<SelfIncreasingStore<any>>();
