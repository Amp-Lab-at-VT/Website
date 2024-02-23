import "@/styles/globals.css";
import '@mantine/core/styles.css';
import Footer from "@/comps/Footer/Footer";
import { MantineProvider, AppShell, Burger, Group, Stack, createTheme, BackgroundImage } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { AppProps } from "next/app";
import Link from "next/link";


const theme = createTheme({
    /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
    const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop, close: closeDesktop }] = useDisclosure(false);

    function close() {
        closeMobile();
        closeDesktop();
    }

    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <AppShell
                header={{ height: 60 }}
                navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }}}
                padding="md" >
                <AppShell.Header color="black">
                    <Group h="100%" px="md">
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar p="md" >
                    <Stack>
                        <Link onClick={close} href="/">Home</Link>
                        <Link onClick={close} href="/getting_started">Getting Started</Link>
                        <Link onClick={close} href="/projects">Projects</Link>
                        <Link onClick={close} href="/about">About</Link>
                        <Link onClick={close} href="/resources">Resources</Link>
                        {/* <Link href="/useful_links">Useless Links</Link> */}
                    </Stack>
                </AppShell.Navbar>
                <AppShell.Main pl={0} pr={0}>
                    <BackgroundImage
                        src='https://raw.githubusercontent.com/Amp-Lab-at-VT/website/master/src/images/cover.jpeg'
                        w={'99vw'}
                        h={'100vh'}
                        style={{backgroundRepeat : "repeat-y"}}
                        // sizes="100vw" style={{ objectFit: "cover" }}
                    >
                        <Component {...pageProps} />
                    </BackgroundImage>
                </AppShell.Main>
                <AppShell.Footer>
                    <Footer />
                </AppShell.Footer>
            </AppShell>

        </MantineProvider>
    );
}
