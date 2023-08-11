import React from "react";
import { Link } from "react-router-dom";
import MaterialTable, { Column } from "@material-table/core";
import ExportPdf from "@material-table/exporters/pdf";
import ExportCsv from "@material-table/exporters/csv";

export const Table = ({ data }) => {
  if (!data || data.length === 0) return null;
  //const lookup = { true: "Active", false: "Expired" };

  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Policy Number",
      field: "policyNumber",
      render: (rowData) => (
        <Link to={`/property/policy/${rowData.policyNumber}`}>
          {rowData.policyNumber}
        </Link>
      ),
    },
    { title: "Premium Amount", field: "premiumAmount", type: "numeric" },
    { title: "Policy Type", field: "policyType" },
    { title: "Deductible", field: "deductible" },
    { title: "Effective Date", field: "effectiveDate" },
    { title: "Expiration Date", field: "expirationDate" },
    { title: "Term", field: "term" },
    { title: "Coverages", field: "coverages" },
  ];
  return (
    <MaterialTable
      columns={columns}
      data={data}
      title="Search Result"
      options={{
        // ...
        exportMenu: [
          {
            label: "Export PDF",
            //// You can do whatever you wish in this function. We provide the
            //// raw table columns and table data for you to modify, if needed.
            // exportFun: (cols, datas) => console.log({ cols, datas })
            exportFunc: (cols, datas) =>
              ExportPdf(cols, datas, "myPdfFileName"),
          },
          {
            label: "Export CSV",
            exportFunc: (cols, datas) =>
              ExportCsv(cols, datas, "myCsvFileName"),
          },
        ],
        rowStyle: {
          //backgroundColor: "#6ABAC9",
          fontSize: ".8rem",
        },
        headerStyle: {
          backgroundColor: "#f0f8fc",
          //color: "#FFF",
          fontSize: ".7rem",
          lineHeight: 1.5,
        },
      }}
    />
  );
};
