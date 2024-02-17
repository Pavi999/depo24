import './Filter.css'
import {DownOutlined} from '@ant-design/icons'
import {Button, Dropdown, Menu, Space, message} from 'antd'
import File from './Images/File.svg'

const Filter = () => {
  const options = [
    'Personal Information',
    'Education',
    'Work Experience',
    'Activty Filter',
    'Advanced Filter',
  ]

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
    <div className="FilterContainer">
      <div className="FilterDiv">
        <h1 className="FilterTextLeft"> Filter</h1>
        <h1 className="FilterTextRight"> 0 Selected</h1>
      </div>
      <div className="FilterOptions">
        {/** Render list items based on the 'options' array */}
        <ul className="FilterList">
          {options.map((option, index) => (
            <li key={index.toString()} className="FilterListItem">
              <Button onClick={() => handleMenuClick({key: index.toString()})}>
                <Space>
                  <img src={File} alt="" />
                  {option}
                  <DownOutlined style={{marginLeft: '170px'}} />
                </Space>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter
