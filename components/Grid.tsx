import chunk from "lodash/chunk";
import GridCell from "@/components/GridCell";
import {CellProps} from "@/models/CellProps";

const Grid = ({ cellProps }: { cellProps: CellProps[] }) => {
    const chunked = chunk(cellProps, 5);

    return (
        <table role="grid" className="table table-fixed w-full border-collapse">
            <tbody>
            {chunked.map((row, index) => (
                <GridRow rowProps={row} key={index} />
            ))}
            </tbody>
        </table>
    )
}

const GridRow = ({ rowProps }: { rowProps: CellProps[] }) => {
    return (
        <tr className="h-20">
            {rowProps.map(({prompt, toggled, toggleStamped}) => (
                <GridCell
                    key={prompt}
                    prompt={prompt}
                    toggled={toggled}
                    toggleStamped={toggleStamped}
                />
            ))}
        </tr>
    )
}

export default Grid;
