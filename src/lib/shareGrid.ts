import type { CellData } from '../App'
import chunk from 'lodash/chunk'

const shareGrid = function (cellDataList: CellData[]): string {
  const emojiList = cellDataList.map(({ stamped }) => (stamped ? '🟦' : '⬜'))

  const stampedCount = cellDataList.filter((cell) => {
    return cell.stamped
  }).length

  const emojiRows = chunk(emojiList, 5).map((row) => row.join(''))
  return (
    'LnB Comp Bingo\n\n' +
    emojiRows.join('\n') +
    '\n\nTotal: ' +
    stampedCount +
    '/25'
  )
}

export default shareGrid
