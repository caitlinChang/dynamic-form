// 联动自增组件

export class SelfIncreasingStore<T> {
  value: (T | undefined)[];
  templateParams: T | undefined;
  constructor(props?: { value?: T[]; templateParams?: T }) {
    this.value = props?.value || [];
    this.templateParams = props?.templateParams;
  }

  delete(index: number) {
    this.value.splice(index, 0);
  }

  add(params?: T) {
    this.value.push(params || this.templateParams);
  }

  update(value: T[]) {
    this.value = value;
  }
}
