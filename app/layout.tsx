"use client";

import { ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button
} from "@mui/material";
import Link from "next/link";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import NHSBreadcrumbs from "@/components/nhsBreadcrumbs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c038dff", 
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* Header */}
            <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
              <Toolbar>
                <Box display="flex" gap={10}>
                  
                  <Button color="inherit" component={Link} href="/">
                    Home
                  </Button>
                  <Button color="inherit" component={Link} href="/">
                    Health Records
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
            <QueryClientProvider client={queryClient}>
              <Container component="main" sx={{ flex: 1, py: 3 }}>
                <NHSBreadcrumbs />

                {children}
              </Container>
            </QueryClientProvider>
            <Box
              component="footer"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                py: 2,
                mt: "auto",
                textAlign: "center",
              }}
            >

            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
