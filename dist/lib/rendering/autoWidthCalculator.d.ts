// Type definitions for ag-grid v18.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridPanel } from "../gridPanel/gridPanel";
import { Column } from "../entities/column";
import { HeaderRootComp } from "../headerRendering/headerRootComp";
export declare class AutoWidthCalculator {
    private rowRenderer;
    private gridOptionsWrapper;
    private gridPanel;
    private headerRootComp;
    registerGridComp(gridPanel: GridPanel): void;
    registerHeaderRootComp(headerRootComp: HeaderRootComp): void;
    getPreferredWidthForColumn(column: Column): number;
    private getHeaderCellForColumn(column);
    private putRowCellsIntoDummyContainer(column, eDummyContainer);
    private cloneItemIntoDummy(eCell, eDummyContainer);
}
