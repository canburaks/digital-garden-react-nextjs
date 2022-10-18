export function _Layout({ children, sidebar }) {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                >
                    <motion.div
                        id="sidebar-overlay"
                        className="fixed top-0 left-0 bottom-0 flex w-full !h-full flex-col items-end px-16"
                    >
                        <AccordionUI data={sidebar.data} />
                    </motion.div>
                </Navbar>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    )
}
import React, { useState, useEffect, useCallback } from "react"
import {
    EuiPageTemplate,
    EuiPageTemplateProps,
    EuiPageHeaderProps,
    EuiPageSidebarProps,
    EuiText,
    EuiResizableContainer,
    EuiListGroup,
    EuiListGroupItem,
    EuiPanel,
    EuiTitle,
    EuiSpacer,
    useIsWithinBreakpoints,
    EuiPage,
} from "@elastic/eui"
import { AccordionUI } from "./accordion"
import { AnimatePresence, motion } from "framer-motion"
import { useStore } from "../lib/state"

export default ({
    button = <></>,
    sidebar,
    header,
    restrictWidth,
    bottomBar,
    sidebarSticky,
    offset,
    grow,
    children,
}) => {
    const isOpen = useStore((state) => state.sidebarOpen)
    const setIsOpen = useStore((state) => state.setSidebarOpen)
    const closeSidebar = useCallback(() => setIsOpen(false), [])
    const openSidebar = useCallback(() => setIsOpen(true), [])

    const isMobile = useIsWithinBreakpoints(["xs", "s"])
    const style = isMobile ? { height: "100%" } : { minHeight: "100%" }
    return (
        <EuiPageTemplate
            restrictWidth={restrictWidth}
            offset={offset}
            grow={grow}
        >
            <EuiResizableContainer
                style={{ minHeight: "100vh" }}
                direction={isMobile ? "vertical" : "horizontal"}
            >
                {(EuiResizablePanel, EuiResizableButton) => (
                    <>
                        <EuiResizablePanel
                            mode="collapsible"
                            initialSize={"30%"}
                            minSize="54px"
                            style={{ minHeight: "100vh" }}
                        >
                            <EuiResizablePanel
                                mode="collapsible"
                                initialSize={70}
                                minSize="50px"
                                id="sidebar"
                            >
                                <AnimatePresence>
                                    {sidebar && (
                                        <motion.div
                                            onExit={{ width: 0 }}
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                height: "100%",
                                                width: "100%",
                                            }}
                                        >
                                            <AccordionUI data={sidebar.data} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </EuiResizablePanel>
                        </EuiResizablePanel>

                        <EuiResizableButton />

                        <EuiResizablePanel
                            mode="main"
                            initialSize={70}
                            minSize="50px"
                        >
                            <EuiPanel
                                paddingSize="l"
                                style={{ minHeight: "100vh" }}
                            >
                                {children}
                            </EuiPanel>
                        </EuiResizablePanel>
                    </>
                )}
            </EuiResizableContainer>

            {bottomBar && (
                <EuiPageTemplate.BottomBar paddingSize="s">
                    {bottomBar}
                </EuiPageTemplate.BottomBar>
            )}
        </EuiPageTemplate>
    )
}
