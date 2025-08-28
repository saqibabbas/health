'use client';

import { LabAndDiagnosisService } from '@/services/labAndDiagnosisService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useGetDiagnosis = () => {
  return useQuery({
    queryKey: ['labanddiagnosis'],
    queryFn: LabAndDiagnosisService.getDiagnosis,
  });
};

export const useGetDiagnosisDetails = (id: string) => {
  return useQuery({
    queryKey: ['labanddiagnosisdetails',id],
    queryFn: () => LabAndDiagnosisService.getDiagnosisDetails(id) ,
  });
};