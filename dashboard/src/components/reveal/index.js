import React, { useEffect } from "react";
//declare let $: any;
$.ig.RevealSdkSettings.setBaseUrl("http://3.110.42.77:5113/");

export default function ViewDashboard() {
  var dialog = document.getElementById("dbSelector");
  useEffect(() => {
    var revealView = new $.ig.RevealView("#revealView");

    $.ig.RVDashboard.loadDashboard("Coforge Dashboard").then((dashboard) => {
      revealView.dashboard = dashboard;

      revealView.onDashboardSelectorRequested = (args) => {
        openDialog(args.callback);
      };

      revealView.onLinkedDashboardProviderAsync = (dashboardId, title) => {
        return $.ig.RVDashboard.loadDashboard(dashboardId);
      };
    });
    //revealView.startInEditMode = true;

    revealView.onDataSourcesRequested = (callback) => {
      const localFileItem = new $.ig.RVLocalFileDataSourceItem();
      localFileItem.uri = "local:/Dashboard_v1.xlsx";

      const excelDataSourceItem = new $.ig.RVExcelDataSourceItem(localFileItem);
      excelDataSourceItem.id = "localFile";
      excelDataSourceItem.title = "Local Excel File";
      excelDataSourceItem.subtitle = "Excel2Json";

      callback(new $.ig.RevealDataSources([], [excelDataSourceItem], true));
    };
  }, []);

  function openDialog(callback) {
    fetch("http://3.110.42.77:5113/dashboards")
      .then((resp) => resp.json())
      .then((data) => {
        const container = document.querySelector("#thumbnails");
        container.innerHTML = "";

        data.forEach((id) => {
          createThumbnail(container, id, callback);
        });
      })
      .then(() => dialog.showModal());
  }

  function createThumbnail(container, id, callback) {
    const button = document.createElement("button");
    button.innerHTML = id;
    button.addEventListener("click", (arg) => {
      callback(id);
      closeDialog();
    });
    button.className = "Reveal-Thumbnail-Box";
    container.appendChild(button);
  }

  function closeDialog() {
    dialog.close();
  }

  return (
    <div
      id="revealView"
      style={{ marginTop: 64, height: "100vh", width: "100%" }}
    ></div>
  );
}
