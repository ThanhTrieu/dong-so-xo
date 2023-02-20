import React from "react";
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const { Header } = Layout;

const items: MenuProps['items'] = [
    {label: <Link href="/">Sổ xố</Link>, key: '/'},
    {label: <Link href="/example">Live Casino</Link>, key: '/example'}
];

export const HeaderLottery: React.FC = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <Header className="header">
            <div className={styles.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname} items={items} />
        </Header>
    );
};
