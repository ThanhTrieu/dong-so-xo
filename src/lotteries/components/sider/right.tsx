import React from 'react';
import { Layout } from 'antd';

const { Sider } = Layout;
export const SiderRightLottery: React.FC = (props) => {
    return (
        <Sider width={400} style={{ background: '#ffffff', padding: '10px' }}>
            {props.children}
        </Sider>
    )
}