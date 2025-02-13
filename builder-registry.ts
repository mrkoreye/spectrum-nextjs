"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Column, TableView, TextField } from "@adobe/react-spectrum";

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
