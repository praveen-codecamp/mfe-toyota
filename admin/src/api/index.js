import { accessControlAPI } from "../../../shared/constants";

export const createEditRecord = async (endpoint, data, id) => {
  return await fetch(`${accessControlAPI}/${endpoint}${id ? "/" + id : ""}`, {
    method: id ? "PUT" : "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
export const deleteRecord = async (endpoint, id) => {
  return await fetch(`${accessControlAPI}/${endpoint}/${id}`, {
    method: "DELETE",
  });
};
