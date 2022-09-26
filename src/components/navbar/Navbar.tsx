import {
    InformationCircleIcon,
  } from '@heroicons/react/outline'
  import { GAME_TITLE } from '../../constants/strings'
  
  type Props = {
    setIsInfoModalOpen: (value: boolean) => void
  }
  
  export const Navbar = ({
    setIsInfoModalOpen,
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
          </div>
        </div>
        <hr></hr>
      </div>
    )
  }
  