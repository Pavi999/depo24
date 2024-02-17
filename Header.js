import React from 'react'
import {Button, Dropdown, Menu, Space, message} from 'antd'
import {DownOutlined} from '@ant-design/icons'
import UserVoice from './Images/UserVoice.svg'
import UserCheck from './Images/UserCheck.svg'
import UserClose from './Images/UserClose.svg'
import Mail from './Images/Mail.svg'
import CP from './Images/CP.svg'
import './Header.css'

const Header = () => {
  const handleMenuClick = e => {
    message.info(`Clicked on item ${e.key}`)
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Item 1</Menu.Item>
      <Menu.Item key="2">Item 2</Menu.Item>
      <Menu.Item key="3">Item 3</Menu.Item>
    </Menu>
  )

  return (
    <div className="HeaderContainer">
      <div className="LondonTextDiv">
        <h1 className="LondonText">London Internship Program</h1>
        <h1 className="LondonTextBottom">London</h1>
      </div>
      <div className="DropDown">
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <div className="HeaderRighticons">
        <img src={CP} alt="" />
        <img src={UserClose} alt="" />
        <img src={UserCheck} alt="" />
        <img src={UserVoice} alt="" />
        <img src={Mail} alt="" />

        <Dropdown.Button
          icon={<DownOutlined />}
          onClick={handleMenuClick} // Handle the click event as needed
          overlay={
            <Menu>
              <Menu.Item key="moveToVideoInterview">
                Move To Video Interview
              </Menu.Item>
              <Menu.Item key="moveToCallInterview">
                Move To Call Interview
              </Menu.Item>
              {/* Add more menu items as needed */}
            </Menu>
          }
        >
          Move To Video Interview
        </Dropdown.Button>
      </div>
    </div>
  )
}

export default Header
