import React from 'react';
import { Layout } from 'antd';
import { HeaderLottery } from "@lotteries/components";
import { SiderLeftLottery } from "@lotteries/components";
import { NotificationLottery } from "@lotteries/components"

export const LayoutLottery: React.FC = ({children}) => {
    return (
        <Layout>
            <HeaderLottery/>
            <NotificationLottery/>
            <Layout>
                <SiderLeftLottery/>
                {children}
            </Layout>
        </Layout>
    )
}