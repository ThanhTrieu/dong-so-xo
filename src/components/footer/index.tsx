import React, { CSSProperties } from "react";
import { Space } from "antd";
import {
    GithubOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";

import { PankodIcon } from "@components/icons";

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
    };
    return (
        <div
            style={{
                backgroundColor: "#282c34",
                color: "#fff",
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 32,
            }}
        >
            <Space direction="vertical" size="large">
                <PankodIcon color="white" width="140" height="28" />
                <Space
                    align="center"
                    size="middle"
                    data-testid="icons-container"
                >
                    <a
                        href="#"
                        target="_blank"
                        data-testid="pankod-logo"
                        style={iconStyle}
                    >
                        <GithubOutlined />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        style={iconStyle}
                    >
                        <TwitterOutlined />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        style={iconStyle}
                    >
                        <YoutubeOutlined />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        style={iconStyle}
                    >
                        <LinkedinOutlined />
                    </a>
                </Space>
            </Space>
        </div>
    );
};
