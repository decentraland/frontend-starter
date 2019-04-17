import * as React from "react";
import { Page, Navbar, Footer, Grid, Tabs } from 'decentraland-ui'

import 'decentraland-ui/lib/styles.css'

import "./../assets/scss/App.scss";
import { taggedTemplateExpression } from "@babel/types";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <>
            <Navbar></Navbar>
            <Tabs>
                <Tabs.Tab active>General</Tabs.Tab>
                <Tabs.Tab>Another</Tabs.Tab>
                <Tabs.Tab>Settings</Tabs.Tab>
            </Tabs>
            <Page>
            </Page>
            <Footer></Footer>
            </>
        );
    }
}
