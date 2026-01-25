import {CellProps} from "@/models/CellProps";

const GridCell = ({ prompt, toggled, toggleStamped }: CellProps) => {
    const classes = ` min-h-content p-2 border border-gray-200 dark:border-white/10 md:text-lg ml-2.5 dark:text-white wrap-break-word text-balance hover:cursor-pointer ${toggled ? 'bg-red-600 font-medium text-white' : ''}`;

    const htmlSoftHyphen = '&shy;';
    const unicodeSoftHyphen = '\u00ad';
    const normalise = (string: string): string =>
        string.replace(new RegExp(htmlSoftHyphen, 'g'), unicodeSoftHyphen);

    return (
        <td role="gridcell" className={classes} onClick={toggleStamped}>
            {normalise(prompt)}
        </td>
    )
}

export default GridCell;
