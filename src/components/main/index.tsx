import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 32,
            }}
        >
            <div
                style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 18,
                    backgroundColor: "#f8f8f8",
                    width: "800px",
                    padding: "20px",
                    borderRadius: "20px",
                    marginTop: 25,
                }}
            >
                <h1>Building a side project?</h1>
                <p>
                    Meet the headless, React-based solution to build sleek{" "}
                    <b>CRUD</b> applications. With{" "}
                    <a href="#" target="_blank">
                        refine
                    </a>
                    , you can be confident that your codebase will always stay
                    clean and boilerplate-free.
                </p>
                <p>
                    Try{" "}
                    <a href="#" target="_blank">
                        refine
                    </a>{" "}
                    to rapidly build your next <b>CRUD</b> project, whether it's
                    an admin panel, dashboard, internal tool or storefront.
                </p>
                <a href="#" target="_blank">
                    <img
                        width="100%"
                        src="https://cdn.discordapp.com/attachments/991655841793052723/1042775236954820658/Group_572_1.png"
                    />
                </a>
            </div>
        </div>
    );
};
