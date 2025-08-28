
"use client";

import { Card, CardActionArea, CardContent, Typography, Box, Table, TableBody, TableRow, TableCell, Divider, CircularProgress } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import { useGetDiagnosisDetails } from "@/hooks/labAndDiagnosisHooks";
import React from "react";
export default function Report() {
    const searchParams = useSearchParams();
    const { id } = useParams<{ id: string }>() || " ";

    const { data: diagnosisDetails, isLoading, error } = useGetDiagnosisDetails(id);

    return (
        <Box p={3}>
            <Card sx={{ boxShadow: 1, borderRadius: 1 }}>

                <CardContent sx={{ display: "flex", flexDirection: "column", ml: 5 }}>

                    {isLoading ? (<Box sx={{ display: 'flex', alignSelf: 'center' }}>
                        <CircularProgress />
                    </Box>) : (
                        <React.Fragment>
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 7 }}>{diagnosisDetails?.name}</Typography>
                            <Box sx={{ ml: 3 }}>

                                <Typography variant="h6" sx={{ fontWeight: "bold" }} >Report Name</Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {diagnosisDetails?.name}
                                </Typography>


                                <Typography variant="h6" sx={{ fontWeight: "bold" }} >Test Performer</Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {diagnosisDetails?.testPerformer}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }} >Result Date and Time</Typography>
                                <Typography variant="h6" color="text.secondary">
                                    {diagnosisDetails?.dateTime}
                                </Typography>

                                <Divider sx={{ mt: 3 }} />

                                {
                                    diagnosisDetails?.results.map((result) => {
                                        return (
                                            <React.Fragment key={result.id}>
                                                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }} >{result?.code?.name}</Typography>
                                                <Typography variant="h6" color="text.secondary">
                                                    Result {result?.valueQuantity?.value} {result?.valueQuantity?.unit}
                                                </Typography>
                                                {result?.referenceRange && <Typography variant="h6" color="text.secondary">
                                                    Normal {result?.referenceRange?.low?.value} {result?.referenceRange?.low?.unit} -
                                                    {result?.referenceRange?.high?.value} {result?.referenceRange?.high?.unit}
                                                </Typography>}
                                            </React.Fragment>
                                        );
                                    })
                                }

                            </Box>
                        </React.Fragment>

                    )}
                </CardContent>


            </Card>
        </Box>
    )
}