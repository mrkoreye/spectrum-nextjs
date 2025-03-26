"use client";
import {
  ActionButton,
  Badge,
  Button,
  Cell,
  ColorPicker,
  ColorSlider,
  Column,
  Menu,
  Picker,
  ProgressBar,
  ProgressCircle,
  Slider,
  Switch,
  TableView,
  TextField,
} from "@adobe/react-spectrum";
import { builder, Builder, withChildren } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(TextField), {
  name: "TextField",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "contextualHelp",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "icon",
      type: "string",
      meta: {
        ts: "ReactElement<unknown, string | JSXElementConstructor<any>>",
      },
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isQuiet",
      type: "boolean",
    },
    {
      name: "isRequired",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "labelAlign",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "labelPosition",
      type: "string",
      enum: ["side", "top"],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "necessityIndicator",
      type: "string",
      enum: ["icon", "label"],
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "validationState",
      type: "string",
      enum: ["invalid", "valid"],
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(TableView), {
  name: "TableView",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "[ReactElement<TableHeaderProps<T>, string | JSXElementConstructor<any>>, ReactElement<TableBodyProps<T>, string | JSXElementConstructor<...>>]",
      },
    },
    {
      name: "defaultSelectedKeys",
      type: "string",
      enum: ["all"],
    },
    {
      name: "density",
      type: "string",
      enum: ["compact", "regular", "spacious"],
    },
    {
      name: "disabledBehavior",
      type: "string",
      enum: ["all", "selection"],
    },
    {
      name: "disabledKeys",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Iterable<Key>",
      },
    },
    {
      name: "disallowEmptySelection",
      type: "boolean",
    },
    {
      name: "dragAndDropHooks",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DragHooks & DropHooks & { isVirtualDragging?: () => boolean; renderPreview?: (keys: Set<Key>, draggedKey: Key) => Element; }",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isQuiet",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "overflowMode",
      type: "string",
      enum: ["truncate", "wrap"],
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DOMRef<HTMLDivElement>",
      },
    },
    {
      name: "renderEmptyState",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "() => Element",
      },
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "selectedKeys",
      type: "string",
      enum: ["all"],
    },
    {
      name: "selectionMode",
      type: "string",
      enum: ["multiple", "none", "single"],
    },
    {
      name: "selectionStyle",
      type: "string",
      enum: ["checkbox", "highlight"],
    },
    {
      name: "sortDescriptor",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SortDescriptor",
      },
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "UNSTABLE_allowsExpandableRows",
      type: "boolean",
    },
    {
      name: "UNSTABLE_defaultExpandedKeys",
      type: "string",
      enum: ["all"],
    },
    {
      name: "UNSTABLE_expandedKeys",
      type: "string",
      enum: ["all"],
    },
    {
      name: "UNSTABLE_onExpandedChange",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(keys: Set<Key>) => any",
      },
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Column), {
  name: "Column",
  inputs: [
    {
      name: "align",
      type: "string",
      enum: ["center", "end", "start"],
    },
    {
      name: "allowsResizing",
      type: "boolean",
    },
    {
      name: "allowsSorting",
      type: "boolean",
    },
    {
      name: "childColumns",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "T[]",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode | ColumnElement<T> | ColumnElement<T>[]",
      },
    },
    {
      name: "defaultWidth",
      type: "string",
      meta: {
        ts: "ColumnSize",
      },
    },
    {
      name: "hideHeader",
      type: "boolean",
    },
    {
      name: "isRowHeader",
      type: "boolean",
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "ColumnStaticSize",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "ColumnStaticSize",
      },
    },
    {
      name: "showDivider",
      type: "boolean",
    },
    {
      name: "textValue",
      type: "string",
    },
    {
      name: "title",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "ColumnSize",
      },
    },
  ],
});

Builder.registerComponent(withChildren(ActionButton), {
  name: "ActionButton",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "excludeFromTabOrder",
      type: "boolean",
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isDisabled",
      type: "boolean",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isQuiet",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "preventFocusOnPress",
      type: "boolean",
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "staticColor",
      type: "string",
      enum: ["black", "white"],
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "type",
      type: "string",
      enum: ["button", "reset", "submit"],
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "elementType",
      type: "string",
      meta: {
        ts: "T | JSXElementConstructor<any>",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "excludeFromTabOrder",
      type: "boolean",
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isDisabled",
      type: "boolean",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isPending",
      type: "boolean",
    },
    {
      name: "isQuiet",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "preventFocusOnPress",
      type: "boolean",
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "FocusableRef<HTMLElement>",
      },
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "staticColor",
      type: "string",
      enum: ["black", "white"],
    },
    {
      name: "style",
      type: "string",
      enum: ["fill", "outline"],
    },
    {
      name: "target",
      type: "string",
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "type",
      type: "string",
      enum: ["button", "reset", "submit"],
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: [
        "accent",
        "cta",
        "negative",
        "overBackground",
        "primary",
        "secondary",
      ],
      required: true,
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Menu), {
  name: "Menu",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CollectionChildren<T>",
      },
    },
    {
      name: "defaultSelectedKeys",
      type: "string",
      enum: ["all"],
    },
    {
      name: "disabledKeys",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Iterable<Key>",
      },
    },
    {
      name: "disallowEmptySelection",
      type: "boolean",
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "items",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Iterable<T>",
      },
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DOMRef<HTMLDivElement>",
      },
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "selectedKeys",
      type: "string",
      enum: ["all"],
    },
    {
      name: "selectionMode",
      type: "string",
      enum: ["multiple", "none", "single"],
    },
    {
      name: "shouldFocusWrap",
      type: "boolean",
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Cell), {
  name: "Cell",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "textValue",
      type: "string",
    },
  ],
});

Builder.registerComponent(withChildren(ColorPicker), {
  name: "ColorPicker",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "rounding",
      type: "string",
      enum: ["default", "full", "none"],
    },
    {
      name: "size",
      type: "string",
      enum: ["L", "M", "S", "XS"],
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "T",
      },
    },
  ],
});

Builder.registerComponent(withChildren(ColorSlider), {
  name: "ColorSlider",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "channel",
      type: "string",
      enum: [
        "alpha",
        "blue",
        "brightness",
        "green",
        "hue",
        "lightness",
        "red",
        "saturation",
      ],
      required: true,
    },
    {
      name: "colorSpace",
      type: "string",
      enum: ["hsb", "hsl", "rgb"],
    },
    {
      name: "contextualHelp",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "showValueLabel",
      type: "boolean",
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Switch), {
  name: "Switch",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "defaultSelected",
      type: "boolean",
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "excludeFromTabOrder",
      type: "boolean",
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isDisabled",
      type: "boolean",
    },
    {
      name: "isEmphasized",
      type: "boolean",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isReadOnly",
      type: "boolean",
    },
    {
      name: "isSelected",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "value",
      type: "string",
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Slider), {
  name: "Slider",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "contextualHelp",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "fillOffset",
      type: "number",
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "formatOptions",
      type: "string",
      meta: {
        ts: "Intl.NumberFormatOptions",
      },
    },
    {
      name: "getValueLabel",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(value: T) => string",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isDisabled",
      type: "boolean",
    },
    {
      name: "isFilled",
      type: "boolean",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "labelPosition",
      type: "string",
      enum: ["side", "top"],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxValue",
      type: "number",
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minValue",
      type: "number",
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "orientation",
      type: "string",
      enum: ["horizontal", "vertical"],
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "showValueLabel",
      type: "boolean",
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "step",
      type: "number",
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "trackGradient",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "string[]",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "T",
      },
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Picker), {
  name: "Picker",
  inputs: [
    {
      name: "align",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CollectionChildren<T>",
      },
    },
    {
      name: "contextualHelp",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "defaultOpen",
      type: "boolean",
    },
    {
      name: "description",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "direction",
      type: "string",
      enum: ["bottom", "top"],
    },
    {
      name: "disabledKeys",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Iterable<Key>",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "errorMessage",
      type: "string",
      meta: {
        ts: "ReactNode | ((v: ValidationResult) => ReactNode)",
      },
    },
    {
      name: "excludeFromTabOrder",
      type: "boolean",
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isInvalid",
      type: "boolean",
    },
    {
      name: "isLoading",
      type: "boolean",
    },
    {
      name: "isOpen",
      type: "boolean",
    },
    {
      name: "isQuiet",
      type: "boolean",
    },
    {
      name: "isRequired",
      type: "boolean",
    },
    {
      name: "items",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Iterable<T>",
      },
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "labelAlign",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "labelPosition",
      type: "string",
      enum: ["side", "top"],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "menuWidth",
      type: "string",
      meta: {
        ts: "DimensionValue",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "necessityIndicator",
      type: "string",
      enum: ["icon", "label"],
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DOMRef<HTMLDivElement>",
      },
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "shouldFlip",
      type: "boolean",
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "validate",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(value: T) => true | ValidationError",
      },
    },
    {
      name: "validationBehavior",
      type: "string",
      enum: ["aria", "native"],
    },
    {
      name: "validationState",
      type: "string",
      enum: ["invalid", "valid"],
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Badge), {
  name: "Badge",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: [
        "fuchsia",
        "indigo",
        "info",
        "magenta",
        "negative",
        "neutral",
        "positive",
        "purple",
        "seafoam",
        "yellow",
      ],
      required: true,
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(ProgressBar), {
  name: "ProgressBar",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "formatOptions",
      type: "string",
      meta: {
        ts: "Intl.NumberFormatOptions",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isIndeterminate",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "labelPosition",
      type: "string",
      enum: ["side", "top"],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxValue",
      type: "number",
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minValue",
      type: "number",
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "showValueLabel",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      enum: ["L", "S"],
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "staticColor",
      type: "string",
      enum: ["black", "white"],
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "value",
      type: "number",
    },
    {
      name: "valueLabel",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["overBackground"],
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});

Builder.registerComponent(ProgressCircle, {
  name: "ProgressCircle",
  inputs: [
    {
      name: "alignSelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "normal",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "bottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "end",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "flex",
      type: "string",
      meta: {
        ts: "Responsive<string | number | boolean>",
      },
    },
    {
      name: "flexBasis",
      type: "string",
      meta: {
        ts: "Responsive<string | number>",
      },
    },
    {
      name: "flexGrow",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "flexShrink",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "gridArea",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumn",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridColumnStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRow",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowEnd",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "gridRowStart",
      type: "string",
      meta: {
        ts: "Responsive<string>",
      },
    },
    {
      name: "height",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "isHidden",
      type: "string",
      meta: {
        ts: "Responsive<boolean>",
      },
    },
    {
      name: "isIndeterminate",
      type: "boolean",
    },
    {
      name: "justifySelf",
      type: "string",
      enum: [
        "auto",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "left",
        "normal",
        "right",
        "self-end",
        "self-start",
        "start",
        "stretch",
      ],
    },
    {
      name: "left",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "margin",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginBottom",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginEnd",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginStart",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginTop",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginX",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "marginY",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "maxValue",
      type: "number",
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minHeight",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "minValue",
      type: "number",
    },
    {
      name: "minWidth",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "order",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["absolute", "fixed", "relative", "static", "sticky"],
    },
    {
      name: "right",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["L", "M", "S"],
    },
    {
      name: "start",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "staticColor",
      type: "string",
      enum: ["black", "white"],
    },
    {
      name: "top",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "UNSAFE_className",
      type: "string",
    },
    {
      name: "UNSAFE_style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "value",
      type: "number",
    },
    {
      name: "variant",
      type: "string",
      enum: ["overBackground"],
    },
    {
      name: "width",
      type: "string",
      meta: {
        ts: "Responsive<DimensionValue>",
      },
    },
    {
      name: "zIndex",
      type: "string",
      meta: {
        ts: "Responsive<number>",
      },
    },
  ],
});
