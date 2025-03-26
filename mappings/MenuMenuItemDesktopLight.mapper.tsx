import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Item, Text, Flex } from "@adobe/react-spectrum";

// ❖ Menu - Menu Item - Desktop - Light
interface FigmaMenuMenuItemDesktopLightProps extends BaseFigmaProps {
  "Trailing Item ?"?: boolean;
  "Leading Item ?"?: boolean;
  "Value ?"?: boolean;
  Value?: string; // when "Value ?" is true
  Description?: string; // when "Description ?" is true
  "Description ?"?: boolean;
  Label?: string;
  State?: "Default" | "Hover" | "Touch" | "Focus" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "2114fee49063761b1ecb84715ca0af4f59129909",
  mapper(figma: FigmaMenuMenuItemDesktopLightProps) {
    // Handle disabled state
    const isDisabled = figma.State === "Disabled";

    return (
      <Item textValue={figma.Label ?? ""} isDisabled={isDisabled}>
        <Flex alignItems="center" gap="size-100">
          {/* Leading Icon */}
          {figma["Leading Item ?"] && (
            <Flex alignItems="center" UNSAFE_className="spectrum-Menu-icon">
              {figma.$findOneByName("Leading Item")?.$children}
            </Flex>
          )}

          {/* Main Content */}
          <Flex direction="column" flex={1}>
            <Text>{figma.Label}</Text>
            {figma["Description ?"] && (
              <Text slot="description">{figma.Description}</Text>
            )}
          </Flex>

          {/* Trailing Content */}
          <Flex alignItems="center" gap="size-100">
            {figma["Value ?"] && (
              <Text UNSAFE_className="spectrum-Menu-value">{figma.Value}</Text>
            )}
            {figma["Trailing Item ?"] && (
              <Flex alignItems="center" UNSAFE_className="spectrum-Menu-icon">
                {figma.$findOneByName("Trailing Item")?.$children}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Item>
    );
  },
});
