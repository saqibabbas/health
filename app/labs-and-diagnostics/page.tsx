
"use client";
import Link from "next/link";

import { Card, CardActionArea, CardContent, Typography, Box, CircularProgress } from "@mui/material";
import { useGetDiagnosis } from "@/hooks/labAndDiagnosisHooks";
export default function LabAndDiagnostics() {
  const { data: diagnosis, isLoading, error } = useGetDiagnosis();

  return (
    <Box p={3}>
      <Card sx={{ boxShadow: 1, borderRadius: 1 }}>

        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 7 }}>Lab and Diagnostics</Typography>

          {isLoading ? (<Box sx={{ display: 'flex', alignSelf: 'center' }}>
            <CircularProgress />
          </Box>) :
            (diagnosis?.map((data) => {
              return <Card key={data?.id} sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2 }}>
                <CardActionArea component={Link} href={"/labs-and-diagnostics/" + data?.id}>
                  <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }} >{data?.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Diagnostic report
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mt: 1, fontWeight: "bold" }}>
                      {data?.dateTime}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            }))}


          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 6, fontWeight: "bold" }}>
            End of results.
          </Typography>
        </CardContent>


      </Card>
    </Box>
  )
}