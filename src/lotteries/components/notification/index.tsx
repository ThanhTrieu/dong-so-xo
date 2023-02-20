import React from "react";
import { Typography } from 'antd';
import styles from './index.module.css';

const { Text } = Typography;

export const NotificationLottery: React.FC = () => {
    return (
        <div className={styles.scrollContainer}>
            <div className={styles.scrollText}>
                <Text type="warning">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
            </div>
        </div>
    )
}