export interface LabAndDiagnostics {
    id: string;
    name: string;
    testPerformer: string;
    dateTime: string;
}

export interface LabAndDiagnosticsDetails extends LabAndDiagnostics {
    results: LabAndDiagnosticsDetailsResults[];

}
export interface LabAndDiagnosticsDetailsResults {
    id: string;
    code: LabAndDiagnosticsDetailsCode;
    valueQuantity: LabAndDiagnosticsDetailsValueUnit;
    referenceRange?: {
        low: {
            unit: string;
            value: string;
        }
        high: {
            unit: string;
            value: string;
        }
    }
}

export interface LabAndDiagnosticsDetailsCode  {
    name: string;
}

export interface LabAndDiagnosticsDetailsValueUnit{
    unit: string;
    value: string;
}

export interface LabAndDiagnosticsDetailsRange{
    low: LabAndDiagnosticsDetailsValueUnit;
    high: LabAndDiagnosticsDetailsValueUnit;
}