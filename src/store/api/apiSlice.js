import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../config/config";

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  prepareHeaders: (headers, { getState }) => {
    // Get token from Redux state - adjust path based on your auth slice structure
    const token = getState().auth?.token || getState().auth?.user?.token;

    // If we have a token, set the authorization header
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Base query with re-authentication logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Handle errors
  if (result?.error?.status === 401) {
    // Dispatch logout action on 401
    api.dispatch({ type: "auth/logout" });
  }

  if (result?.error) {
    const { showErrorToast } = await import("../../utils/toast");
    showErrorToast(result?.error?.data?.message || "An error occurred");
    return result;
  } else {
    // For mutations, you can add success notifications
    // if (api.type === "mutation") {
    // const { showSuccessToast } = await import("../../utils/toast");
    // showSuccessToast(result?.data?.message);
    // }
     return result;
  }
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["LIST_API", "Menu", "User"],
  endpoints: () => ({}),
});
