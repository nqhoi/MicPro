import React from "react";
import { IconCheckYellow, IconCheckPink, IconCheckPurple } from ".";
import { IconCheckListKeys } from "@/types";

const iconsList: Record<IconCheckListKeys, any> = {
  pink: <IconCheckPink></IconCheckPink>,
  yellow: <IconCheckYellow></IconCheckYellow>,
  blue: <IconCheckPink></IconCheckPink>,
  purple: <IconCheckPurple></IconCheckPurple>,
};
function IconCheckList({
  type = IconCheckListKeys.pink,
}: {
  type?: IconCheckListKeys;
}) {
  return <>{iconsList[type]}</>;
}

export default IconCheckList;
