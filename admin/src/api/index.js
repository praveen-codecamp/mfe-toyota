import { accessControlAPI } from "../../../shared/constants";

export const createEditRecord = async (endpoint, data) => {
  return await fetch(
    `${accessControlAPI}/${endpoint}${data.id ? "/" + data.id : ""}`,
    {
      method: data.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
};
export const deleteRecord = async (endpoint, data) => {
  return await fetch(`${accessControlAPI}/${endpoint}/${data.id}`, {
    method: "DELETE",
  });
};
