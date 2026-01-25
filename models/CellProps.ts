import {CellData} from "@/models/CellData";
import {CellClickHandler} from "@/models/ClickHandler";

export type CellProps = CellData & { toggleStamped: CellClickHandler }
