import React, {useState} from 'react'
import {LiaHomeSolid} from 'react-icons/lia'
import {getDefaultNormalizer} from '@testing-library/react'
import {AiOutlineLeft} from 'react-icons/ai'
import './VerticalItem.css'
import Profile from './Images/Profile.svg'
// import Home from "./Images/Home.svg"
import Group from './Images/Group.svg'
import Calender from './Images/Calendar.svg'
import Share from './Images/Share.svg'
import File from './Images/File.svg'
import Notebook from './Images/Notebook.svg'
import Heart from './Images/Heart.svg'
import Settings from './Images/Settings.svg'

const VerticalItem = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="Container">
      <div className="VerticalIconsContainer">
        <img src={Profile} alt="" />

        {/* <div className="VerticalIconsDiv"> */}
        <LiaHomeSolid
          className="HomeIcon"
          style={{
            cursor: 'pointer',
            boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
            transition: 'box-shadow 0.3s',
          }}
          //   src={Home}
          //   alt=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <img className="HomeIcon" src={Group} alt="" />
        <img className="HomeIcon" src={Calender} alt="" />
        <img className="HomeIcon" src={Share} alt="" />
        <img className="HomeIcon" src={File} alt="" />
        <img className="HomeIcon" src={Notebook} alt="" />
        <img className="HomeIcon" src={Heart} alt="" />
        <AiOutlineLeft className="LeftArrow" />
        {/* </div> */}

        <div className="BottomVeticalIcon">
          <img className="HomeIcon" src={Settings} alt="" />
        </div>
      </div>
    </div>
  )
}

export default VerticalItem
