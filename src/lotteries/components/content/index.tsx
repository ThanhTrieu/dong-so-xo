import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
export const ContentLottery: React.FC = (props) => {
    return (
        <Content
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#ffffff'
            }}
        >
            {props.children}
        </Content>
    )
}