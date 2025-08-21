'use client';

import PrimarySearchAppBar from '@/components/Appbar';
import ClippedDrawer from '@/components/Drawer';
import useDrawer from '@/hooks/useDrawer';
import { Box, CssBaseline } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {open, toggleDrawer} = useDrawer();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <PrimarySearchAppBar toggleDrawer={toggleDrawer} />
            <ClippedDrawer open={open} toggleDrawer={toggleDrawer} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${0}px)` }, // Adjust content width based on drawer state
                ml: { sm: `${0}px` }, // Adjust content margin based on drawer state
                transition: (theme) =>
                  theme.transitions.create(["margin", "width"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                  }),
              }}
            >
              <Toolbar />
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
