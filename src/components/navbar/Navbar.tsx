import {
  CogIcon,
  InformationCircleIcon,
  ShareIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import shareGrid from '../../lib/shareGrid'
import { CellData } from '../../App'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  cellDataList: CellData[]
}

const copyToClipboard = (cellDataList: CellData[]) => (event: any) => {
  window.navigator.clipboard.writeText(shareGrid(cellDataList))
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsSettingsModalOpen,
  cellDataList,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ShareIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={copyToClipboard(cellDataList)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
