import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, AppstoreFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const items: MenuProps['items'] = [
    {label: 'Miền Bắc 1', icon: <AppstoreFilled />, key: 'MB-1', children: [{label: 'Đề', key: 'MB-1-1'},{label: 'Lô', key: 'MB-1-2'},{label: 'Lo Xien', key: 'MB-1-3'}]},
    {label: 'Miền Bắc 2', icon: <AppstoreFilled />, key: 'MB-2', children: [{label: 'Đề', key: 'MB-2-1'},{label: 'Lô', key: 'MB-2-2'},{label: 'Lo Xien', key: 'MB-2-3'}]},,
    {label: 'Miền Nam', icon: <AppstoreFilled />, key: 'MN-1', children: [{label: 'Đề', key: 'MN-1-1'},{label: 'Lô', key: 'MN-1-2'},{label: 'Lo Xien', key: 'MN-1-3'}]},
];
export const SiderLeftLottery: React.FC = () => {
    return (
        <Sider width={300} style={{ background: '#ffffff' }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items}
            />
        </Sider>
    )
}