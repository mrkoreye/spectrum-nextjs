import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ProgressCircle } from "@adobe/react-spectrum";

// ❖ Progress Circle - Desktop - Light
interface FigmaProgressCircleDesktopLightProps extends BaseFigmaProps {
  Style?: "Determinate" | "Indeterminate";
  "Track Size"?: "Small" | "Medium" | "Large";
  Color?: "Default" | "Over Background";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "6604b1fd985cec9c7bbbdaec4e947220db8a53fd",
  mapper(figma: FigmaProgressCircleDesktopLightProps) {
    // Map size values
    const sizeMap = {
      Small: "S",
      Medium: "M",
      Large: "L",
    } as const;

    // Determine if indeterminate
    const isIndeterminate = figma.Style === "Indeterminate";

    // Map size, defaulting to Medium
    const size = sizeMap[figma["Track Size"] ?? "Medium"];

    // Handle color variants
    const variant =
      figma.Color === "Over Background" ? "overBackground" : undefined;

    return (
      <ProgressCircle
        aria-label="Loading..."
        isIndeterminate={isIndeterminate}
        size={size}
        variant={variant}
        value={isIndeterminate ? undefined : 0}
      />
    );
  },
});
