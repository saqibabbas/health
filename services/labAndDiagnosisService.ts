import { apiClient } from "@/lib/api-client";
import { LabAndDiagnostics, LabAndDiagnosticsDetails, LabAndDiagnosticsDetailsResults } from "@/models/labsAndDiagnosticsModel";
import formatDateTime from "@/utilties/datetimeformatter";
import fhirpath from "fhirpath";
import fhirpath_r4_model from "fhirpath/fhir-context/r4";

export const LabAndDiagnosisService = {
  getDiagnosis: async (): Promise<LabAndDiagnostics[]> => {
    const response = (await apiClient.get('diagnosticreport-example.json')).data;

    const diagnosticReports = fhirpath.evaluate(
      response,
      "entry.resource.where(resourceType = 'DiagnosticReport')",
      undefined,
      fhirpath_r4_model
    ) as any[];

    let reports: LabAndDiagnostics[] = [];
    diagnosticReports.map(report => {
      reports.push({
        id: report?.id,
        name: report?.code?.text || '',
        dateTime: formatDateTime(report?.effectiveDateTime) || '',
        testPerformer: report?.performer[0]?.display || ''
      })
    });

    return reports;
  },

  getDiagnosisDetails: async (diagnosisId: string): Promise<LabAndDiagnosticsDetails> => {
    const response = (await apiClient.get('diagnosticreport-example.json')).data;

    const diagnosticReport = (fhirpath.evaluate(
      response,
      `entry.resource.where(id = '${diagnosisId}')`,
      undefined,
      fhirpath_r4_model
    ) as any[])[0];


    let observationIds = fhirpath.evaluate(
      diagnosticReport,
      "result.reference",
      undefined,
      fhirpath_r4_model
    );
    observationIds = (observationIds as any[]).map(item => item.replace('Observation/', ''));

    const observationsEntry = (fhirpath.evaluate(
      response,
      "entry.resource.ofType(Observation)",
      undefined,
      fhirpath_r4_model
    ) as any[]).filter(obs => observationIds.includes(obs.id));

    let observations: LabAndDiagnosticsDetailsResults[] = [];

    observationsEntry.map((entry) => {

      observations.push({
        id: entry.id,
        code: {
          name: entry?.code?.text
        },
        valueQuantity: {
          value: entry?.valueQuantity?.value,
          unit: entry?.valueQuantity?.unit
        },
        referenceRange: entry?.referenceRange ? {
          low: {
            unit: entry?.referenceRange[0]?.low?.unit,
            value: entry?.referenceRange[0]?.low?.value
          },
          high: {
            unit: entry?.referenceRange[0]?.high?.unit,
            value: entry?.referenceRange[0]?.high?.value
          }
        } : undefined
      })
    });
    return {
      id: diagnosticReport?.id,
      name: diagnosticReport?.code?.text || '',
      dateTime: formatDateTime(diagnosticReport?.effectiveDateTime )|| '',
      testPerformer: diagnosticReport?.performer[0]?.display || '',
      results: observations
    }
  }

};


