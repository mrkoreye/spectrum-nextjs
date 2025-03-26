import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";

// ❖ Text Field - Desktop - Light
interface FigmaTextFieldDesktopLightProps extends BaseFigmaProps {
  "Value ?"?: boolean;
  "Validation Checkmark ?"?: boolean;
  "Character Count ?"?: boolean;
  Label?: string;
  "Character Count"?: string;
  "Help Text ?"?: boolean;
  Value?: string; // when "Value ?" is true
  "Asterisk ?"?: boolean;
  "Help Text"?: string;
  Style?: "Standard" | "Quiet";
  "Label Position"?: "Top" | "Side";
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Error" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "53dec33754455bc56881b9b820d1de165b11374a",
  mapper(figma: FigmaTextFieldDesktopLightProps) {
    // Extract label text
    const labelText = figma.Label ?? "";

    // Map validation state
    const validationState =
      figma.State === "Error"
        ? "invalid"
        : figma["Validation Checkmark ?"]
          ? "valid"
          : undefined;

    // Create the component
    return (
      <Flex direction="column" gap="size-100">
        <TextField
          label={labelText}
          value={figma.Value}
          isRequired={figma["Asterisk ?"]}
          isQuiet={figma.Style === "Quiet"}
          labelPosition={
            figma["Label Position"]?.toLowerCase() as "top" | "side"
          }
          validationState={validationState}
          isDisabled={figma.State === "Disabled"}
          necessityIndicator="icon"
        />

        {/* Help text */}
        {figma["Help Text ?"] && (
          <Text UNSAFE_style={{ fontSize: "14px", color: "#666" }}>
            {figma["Help Text"]}
          </Text>
        )}

        {/* Character counter */}
        {figma["Character Count ?"] && (
          <Text
            UNSAFE_style={{
              fontSize: "14px",
              color: "#666",
              alignSelf: "flex-end",
            }}
          >
            {figma["Character Count"]}
          </Text>
        )}
      </Flex>
    );
  },
});
