/* eslint-disable @typescript-eslint/no-explicit-any */
export type ReportChartType = {
  labels: any;
  datasets: ReportDatasetType[];
};

export type ReportDatasetType = {
  label: string;
  data: any;
  backgroundColor: string;
};
