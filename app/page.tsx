"use client";

import { Card, CardActionArea, CardContent, Typography, Box, Table, TableBody, TableRow, TableCell } from "@mui/material";
import Link from "next/link";
import BiotechIcon from '@mui/icons-material/Biotech';
export default function HomePage() {
  return (
    <Box p={3}>
      <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2 }}>
        <CardActionArea component={Link} href="labs-and-diagnostics">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell >
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <BiotechIcon sx={{ fontSize: 50, color: 'primary.main' }} />
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Lab and Diagnostics</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Results for blood, urine, and general lab.
                  </Typography>
                </TableCell>


              </TableRow>
            </TableBody>
          </Table>
        </CardActionArea>
      </Card>
    </Box>
  );
}
