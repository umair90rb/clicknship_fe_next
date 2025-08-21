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
import { styled } from '@mui/material/styles';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  width?: number;
  open?: boolean;
}>(({ theme, width }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${width}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {open, drawerWidth, toggleDrawer} = useDrawer();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <PrimarySearchAppBar toggleDrawer={toggleDrawer} />
            <ClippedDrawer drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer} />
            <Main open={open} width={drawerWidth}>
              <Toolbar variant='dense' />
              {children}
            </Main>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
