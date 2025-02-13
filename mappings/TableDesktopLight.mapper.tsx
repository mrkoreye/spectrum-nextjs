import {
  figmaMapping,
  FigmaNode,
  type BaseFigmaProps,
} from "@builder.io/dev-tools/figma";
import {
  TableView,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "@adobe/react-spectrum";

// ❖ Table - Desktop - Light
interface FigmaTableDesktopLightProps extends BaseFigmaProps {
  Style?: "Standard" | "Quiet";
  "Selection Column"?: "False" | "True";
}

interface TableData {
  tableHeaderColumns: Array<FigmaNode[]>;
  tableBodyRowCells: Array<Array<FigmaNode[]>>;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "30bf95e6c8128f94f2111affe6fba8ea02905e1a",
  mapper(figma: FigmaTableDesktopLightProps) {
    let table: TableData = {
      tableHeaderColumns: [],
      tableBodyRowCells: [],
    };
    // "Table - Column - Desktop - Light" Each column
    figma.$children.forEach((child) => {
      child.$children.forEach((child) => {
        if (child.$name === "_Table - Header - Desktop - Light") {
          // "_Table - Header - Desktop - Light"
          table.tableHeaderColumns.push(child.$children as FigmaNode[]);
        }
        if (child.$name === "Rows") {
          // "_Table - Row Item - Desktop - Light"
          child.$children.forEach((row, index) => {
            table.tableBodyRowCells[index] =
              table.tableBodyRowCells[index] || [];
            table.tableBodyRowCells[index].push(row.$children as FigmaNode[]);
          });
        }
      });
    });

    return (
      <TableView
        isQuiet={figma.Style === "Quiet"}
        selectionMode={
          figma["Selection Column"] === "True" ? "multiple" : "none"
        }
        selectionStyle="checkbox"
      >
        <TableHeader>
          {table.tableHeaderColumns.map((column, index) => (
            <Column key={index}>{column}</Column>
          ))}
        </TableHeader>
        <TableBody>
          {table.tableBodyRowCells.map((row, index) => (
            <Row key={index}>
              {row.map((cell, index) => (
                <Cell key={index}>{cell}</Cell>
              ))}
            </Row>
          ))}
        </TableBody>
      </TableView>
    );
  },
});
