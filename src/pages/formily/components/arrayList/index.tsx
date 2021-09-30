import react from "react";
import { Button } from "antd";

function ArrayList(props: any) {
  const { value, schema, className, editable, path, mutators } = props;
  const componentProps = schema.getExtendsComponentProps() || {};

  const onAdd = () => mutators.push(schema.items.getEmptyValue());
  const onRemove = (index: number) => mutators.remove(index);
  const onMoveUp = (index: number) => mutators.moveUp(index);
  const onMoveDown = (index: number) => mutators.moveDown(index);
  return (
    <div>
      <h5>
        自定义 ArrayList 组件 <Button onClick={onAdd}> Add </Button>
      </h5>
    </div>
  );
}

export default ArrayList;
