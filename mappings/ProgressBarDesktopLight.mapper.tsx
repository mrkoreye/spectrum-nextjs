import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ProgressBar } from "@adobe/react-spectrum";

// ❖ Progress Bar - Desktop - Light
interface FigmaProgressBarDesktopLightProps extends BaseFigmaProps {
  Value?: string;
  Label?: string;
  Style?: "Determinate" | "Indeterminate";
  "Track Size"?: "Small" | "Large";
  Color?: "Default" | "Over Background";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "46e31755790ebf338420127f4e08254d7a824f9a",
  mapper(figma: FigmaProgressBarDesktopLightProps) {
    // Convert size from Figma format to React format
    const size = figma["Track Size"] === "Small" ? "S" : "L";

    // Handle color/variant mapping
    const variant =
      figma.Color === "Over Background" ? "overBackground" : undefined;

    // Convert value string to number if present
    const value = figma.Value ? parseFloat(figma.Value) : undefined;

    return (
      <ProgressBar
        label={figma.Label}
        value={value}
        size={size}
        variant={variant}
        isIndeterminate={figma.Style === "Indeterminate"}
        valueLabel={figma.Value}
        showValueLabel={!!figma.Value}
      />
    );
  },
});
