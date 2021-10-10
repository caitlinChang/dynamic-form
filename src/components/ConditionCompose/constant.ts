export enum LinkType {
  AND = "and",
  OR = "or",
}

export type ConditionSubItemType = {
  value: string | number;
  link?: LinkType;
};

export type ConditionItemType = {
  value: ConditionSubItemType[];
  link?: LinkType;
};
