import * as React from "react";
import Draggable from "react-draggable";

export const CustomDraggable = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dragging, setDragging] = React.useState(false);
  return (
    <div className="cursor-grabbing">
      <Draggable>{children}</Draggable>
    </div>
  );
};
