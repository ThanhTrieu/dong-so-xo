import React from "react";

import { Main, Cards, Footer } from "@components";
import { HeaderLottery } from "@lotteries/components";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <HeaderLottery />
            <Main />
            <Cards />
            <Footer />
        </div>
    );
};

export default Home;
