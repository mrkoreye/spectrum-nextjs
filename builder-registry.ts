"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { TextField } from "@adobe/react-spectrum";

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
