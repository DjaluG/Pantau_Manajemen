import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import type { AppProps } from 'next/app';

const theme = createTheme({
  /** Letakkan perubahan tema mantine Anda di sini */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
