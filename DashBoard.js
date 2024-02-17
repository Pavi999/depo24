import {useEffect} from 'react'
import './DashBoard.css'
import {InfoCircleOutlined, UserOutlined} from '@ant-design/icons'
import {Input, Tooltip} from 'antd'
import {FiSearch} from 'react-icons/fi'
import VerticalItem from './VerticalItem'
import Header from './Header'
import Filter from './Filter'
import Candidates from './Candidates'

const DashBoard = () => {
  useEffect(() => {}, [])
  return (
    <div className="DashBoaredMainContainer">
      <div className="LeftVerticalDiv">
        <VerticalItem />
      </div>

      <div className="RightDiv">
        <div className="RightHeaderDiv">
          <Header />
        </div>

        <div className="RightContentDiv">
          <div className="RightContentLeftDiv">
            <Input
              placeholder="Search by name,edu,exp or #tag"
              prefix={<FiSearch className="site-form-item-icon" />}
              suffix={
                <Tooltip title="Extra information">
                  <InfoCircleOutlined style={{color: 'rgba(0,0,0,.45)'}} />
                </Tooltip>
              }
            />

            <Filter />
          </div>

          <div className="RightContentRightDiv">
            <Candidates />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
