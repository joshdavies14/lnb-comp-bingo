import { useState, useEffect } from 'react'
import { InfoModal } from './components/modals/InfoModal'
import {
    loadGameStateFromLocalStorage,
    saveGameStateToLocalStorage,
    setStoredIsHighContrastMode,
    getStoredIsHighContrastMode,
} from './lib/localStorage'
import {
    REVEAL_TIME_MS,
    WELCOME_INFO_MODAL_MS,
    DISCOURAGE_INAPP_BROWSERS,
} from './constants/settings'

import './App.css';
import { AlertContainer } from './components/alerts/AlertContainer'
import { useAlert } from './context/AlertContext'

function App() {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('theme')
            ? localStorage.getItem('theme') === 'dark'
            : prefersDarkMode
                ? true
                : false
    )
    const [isHighContrastMode, setIsHighContrastMode] = useState(
        getStoredIsHighContrastMode()
    )

    useEffect(() => {
        // if no game state on load,
        // show the user the how-to info modal
        if (!loadGameStateFromLocalStorage()) {
            setTimeout(() => {
                setIsInfoModalOpen(true)
            }, WELCOME_INFO_MODAL_MS)
        }
    })

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        if (isHighContrastMode) {
            document.documentElement.classList.add('high-contrast')
        } else {
            document.documentElement.classList.remove('high-contrast')
        }
    }, [isDarkMode, isHighContrastMode])

    const handleDarkMode = (isDark: boolean) => {
        setIsDarkMode(isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }

    return (
        <div className="h-screen flex flex-col">
          <div className="pt-2 px-1 pb-8 md:max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col grow">
            <div className="pb-6 grow">
              {/* Insert grid here */}
            </div>
            <InfoModal
              isOpen={isInfoModalOpen}
              handleClose={() => setIsInfoModalOpen(false)}
            />
            <AlertContainer />
          </div>
        </div>
      )

}

export default App;
