import React from 'react'
import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { SIDEBAR_TABS } from '../../utils/enums'

import Home from './Home'
import Search from './Search'
import Pen from './Pen'
import Citations from './Citations'
import Share from './Share'
import Info from './Info'
import Download from './Download'

const Sidebar: React.FunctionComponent = () => {
  const [activeSidebar, setActiveSidebar] = useState<SIDEBAR_TABS>(
    SIDEBAR_TABS.NULL
  )

  const SidebarData = [
    {
      name: 'home',
      icon: <FaIcons.FaHome />,
      tooltip: 'Home',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.HOME),
    },
    {
      name: 'search',
      icon: <FaIcons.FaSearch />,
      tooltip: 'Full text search',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.SEARCH),
    },
    {
      name: 'pen',
      icon: <FaIcons.FaPen />,
      tooltip: 'Document editing',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.PEN),
    },
    {
      name: 'citations',
      icon: <FaIcons.FaFileExport />,
      tooltip: 'Generate citations',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.CITATIONS),
    },
    {
      name: 'share',
      icon: <FaIcons.FaShareAlt />,
      tooltip: 'Share document',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.SHARE),
    },
    {
      name: 'info',
      icon: <FaIcons.FaInfoCircle />,
      tooltip: 'Document information',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.INFO),
    },
    {
      name: 'download',
      icon: <FaIcons.FaDownload />,
      tooltip: 'Download document',
      onClick: () => setActiveSidebar(SIDEBAR_TABS.DOWNLOAD),
    },
  ]

  return (
    <>
      <div className="w-15 h-screen bg-blue-200 fixed top-0 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 z-10">
        {SidebarData.map((item) => (
          <div
            key={item.name}
            className={'list-none flex items-center w-full h-90 px-2 py-5 '}
          >
            <button
              id={item.name}
              onClick={item.onClick}
              className={`px-5 py-2 text-lg text-white bg-blue-200 rounded-md hover:bg-blue-500 hover:text-white ${
                item.name === 'home' ? 'mb-16' : 'mb-2'
              }`}
              title={item.tooltip}
            >
              {item.icon}
            </button>
          </div>
        ))}
      </div>
      {activeSidebar === SIDEBAR_TABS.HOME && (
        <Home setActiveSidebar={setActiveSidebar} />
      )}
      {activeSidebar === SIDEBAR_TABS.SEARCH && (
        <Search setActiveSidebar={setActiveSidebar} />
      )}
      {activeSidebar === SIDEBAR_TABS.PEN && (
        <Pen setActiveSidebar={setActiveSidebar} />
      )}
      {activeSidebar === SIDEBAR_TABS.CITATIONS && (
        <Citations setActiveSidebar={setActiveSidebar} />
      )}
      {activeSidebar === SIDEBAR_TABS.SHARE && (
        <Share
          setActiveSidebar={setActiveSidebar}
          text="Some text before share"
          title="Share Title"
        />
      )}
      {activeSidebar === SIDEBAR_TABS.INFO && (
        <Info setActiveSidebar={setActiveSidebar} />
      )}
      {activeSidebar === SIDEBAR_TABS.DOWNLOAD && (
        <Download
          setActiveSidebar={setActiveSidebar}
          text="Some text before download"
          title="Download Title"
        />
      )}
    </>
  )
}

export default Sidebar
