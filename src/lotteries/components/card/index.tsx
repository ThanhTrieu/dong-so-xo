import React from "react";
import { Card as AntdCard } from "antd";
import { CardProps } from "antd/lib/card";

export const CardLottery: React.FC<CardProps> = ({ title, type, extra, children, ...rest }) => {
    return (
        <AntdCard
            title={title}
            type={type}
            bordered={true}
            extra={extra}
            style={{ marginBottom: 32 }}
        >
            {children}
        </AntdCard>
    );
};
