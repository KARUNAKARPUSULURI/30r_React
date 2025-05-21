import { Button, Divider} from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import LayOut from "./Layout.jsx"


const Antd = () => {
    const [loading, setLoading] = useState(false)
  return (
    <div>
        <LayOut />
    </div>
  )
}

export default Antd