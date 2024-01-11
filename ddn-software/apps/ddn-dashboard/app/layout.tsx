'use client';
import { ReduxProvider } from 'apps/ddn-dashboard/redux/provider';
import './global.css';
import { StyledComponentsRegistry } from './registry';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles';
import { AntdRegistry } from '@ant-design/nextjs-registry';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>DDN Software - Dashboard</title>
        <base href="/" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          title="DDN Software"
          aria-description="This is the system dashboard using the services provided by DevDaNang systems"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/digital-numbers" rel="stylesheet" />
      </head>
      <body>
        <ReduxProvider>
          <AntdRegistry>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
