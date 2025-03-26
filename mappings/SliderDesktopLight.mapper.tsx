import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Slider } from "@adobe/react-spectrum";

// ❖ Slider - Desktop - Light
interface FigmaSliderDesktopLightProps extends BaseFigmaProps {
  Value?: string;
  Label?: string;
  "Label Position"?: "Top" | "Side";
  Fill?:
    | "No Fill"
    | "Amount Fill"
    | "Negative Offset Fill"
    | "Positive Offset Fill";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "d38e5585edc700855c8425b8ed602bc7960eb48d",
  mapper(figma: FigmaSliderDesktopLightProps) {
    // Handle fill mapping
    const isFilled = figma.Fill !== "No Fill";
    const fillOffset =
      figma.Fill === "Negative Offset Fill"
        ? -50
        : figma.Fill === "Positive Offset Fill"
          ? 50
          : undefined;

    // Map label position
    const labelPosition = figma["Label Position"]?.toLowerCase() as
      | "top"
      | "side";

    return (
      <Slider
        label={figma.Label}
        labelPosition={labelPosition ?? "top"}
        value={figma.Value ? Number(figma.Value) : undefined}
        showValueLabel={!!figma.Value}
        isDisabled={figma.State === "Disabled"}
        isFilled={isFilled}
        fillOffset={fillOffset}
        minValue={0}
        maxValue={100}
      />
    );
  },
});
