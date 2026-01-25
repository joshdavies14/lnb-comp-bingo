import type { CellData } from '@/models/CellData'
import chunk from 'lodash/chunk'
import { UAParser } from 'ua-parser-js'

const webShareApiDeviceTypes: string[] = ['mobile', 'smarttv', 'wearable']
const parser = new UAParser()
const browser = parser.getBrowser()
const device = parser.getDevice()

const shareGridText = function (cellDataList: CellData[]): string {
    const emojiList = cellDataList.map(({ toggled }) => (toggled ? '🟦' : '⬜'))

    const stampedCount = cellDataList.filter((cell) => {
        return cell.toggled
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

export const shareGrid = (
    cellDataList: CellData[]
) => {
    const textToShare = shareGridText(cellDataList)

    const shareData = { text: textToShare }

    let shareSuccess = false

    try {
        if (attemptShare(shareData)) {
            navigator.share(shareData)
            shareSuccess = true
        }
    } catch {
        shareSuccess = false
    }

    if (!shareSuccess) {
        navigator.clipboard.writeText(textToShare)
    }
}

const attemptShare = (shareData: object) => {
    return (
        // Deliberately exclude Firefox Mobile, because its Web Share API isn't working correctly
        browser.name?.toUpperCase().indexOf('FIREFOX') === -1 &&
        webShareApiDeviceTypes.indexOf(device.type ?? '') !== -1 &&
        navigator.canShare &&
        navigator.canShare(shareData) &&
        navigator.share
    )
}

export default shareGrid
