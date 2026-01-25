'use client'

import { CellData } from "@/models/CellData";
import { prompts } from "@/constants/prompts";
import useSession from "@/utils/useSession";
import Grid from "@/components/Grid";
import { CellProps} from "@/models/CellProps";
import { CellClickHandler, ButtonClickHandler } from "@/models/ClickHandler";
import shareGrid from "@/utils/shareGrid";

export default function Home() {
  const newCellDataList = function (): CellData[] {
    return prompts().map((prompt) => {
      return { prompt: prompt, toggled: false }
    })
  }

  const [cellDataList, setCellDataList] = useSession<CellData[]>(newCellDataList)

  const setStamped = (index: number, stamped: boolean): void => {
    setCellDataList(
        cellDataList.map((cellData, cellDataIndex) => {
          if (index === cellDataIndex) {
            return { ...cellData, toggled: stamped }
          } else {
            return cellData
          }
        })
    )
  }

  const toggleStampedForIndex = function (
      index: number,
      stamped: boolean
  ): CellClickHandler {
    return () => {
      setStamped(index, !stamped)
    }
  }

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => ({
    ...cellData,
    toggleStamped: toggleStampedForIndex(index, cellData.toggled),
  }))

  const setNewWords: ButtonClickHandler = () => {
    setCellDataList(newCellDataList())
  }

  const clearAllCells: ButtonClickHandler = () => {
    setCellDataList(
        cellDataList.map((cellData) => ({ ...cellData, stamped: false }))
    )
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black dark:text-white">
      <nav className="border-b border-gray-200 dark:border-white/10 w-full p-4 flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-semibold leading-tight text-gray-900 dark:text-white">Competition Bingo</h1>
        <div className="flex items-center justify-between gap-x-4">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onClick={() => shareGrid(cellDataList)}>
            Share
          </a>
        </div>
      </nav>
      <main className="m-auto flex grow w-full flex-col items-center justify-center py-8 px-4 md:px-8 xl:px-16 bg-white dark:bg-black sm:items-start">
        <div className="mx-auto grow flex w-full max-w-7xl flex-1 flex-col items-center text-center sm:items-start gap-y-8">
          <div className="flex w-full max-w-7xl items-center justify-center text-center gap-x-4">
            <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 w-full grow" onClick={setNewWords}>
              New card
            </button>
            <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 w-full grow" onClick={clearAllCells}>
              Clear
            </button>
          </div>
          <div>
            <Grid cellProps={cellPropsList}></Grid>
          </div>
        </div>
      </main>
    </div>
  );
}
