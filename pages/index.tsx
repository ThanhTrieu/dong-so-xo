import React from "react";
import { Layout } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { LayoutLottery } from "@lotteries/layout";
import { SiderRightLottery } from "@lotteries/components";
import { ContentLottery } from "@lotteries/components";
import { CardLottery } from "@lotteries/components";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <LayoutLottery>
                <Layout style={{ padding: '0 5px 5px' }}>
                    <ContentLottery>
                        Content
                    </ContentLottery>
                </Layout>
                <SiderRightLottery>
                    <CardLottery
                        type="inner" title="Đặt cược" extra="Đề miền bắc 1"
                    >
                    </CardLottery>
                    <CardLottery
                        type="inner" title="Mã đặt cược gần đây" extra={<ReloadOutlined />}
                    >
                    </CardLottery>
                </SiderRightLottery>

            </LayoutLottery>
        </div>
    );
};

export default Home;
