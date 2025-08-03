import { apiSlice } from "./apiSlice";

export const commonApi = apiSlice.injectEndpoints({
  reducerPath: "commonSliceApi",
  tagTypes: ["LIST_API", "Menu"],
  endpoints: (builder) => ({
    // Get menu items
    // getMenuItems: builder.query({
    //     query: () => ({
    //         url: "details",
    //         method: "GET",
    //     }),
    //     providesTags: ["Menu", "LIST_API"],
    // }),
    
    // Get API with ID
    getApiWithId: builder.query({
      query: ([url, id]) => ({
        url: `${url}/${id}`,
        method: "GET",
      }),
      providesTags: ["LIST_API"],
    }),

    // Get API with params (for searching and pagination)
    getApi: builder.query({
      query: ({ url, params }) => {
        const queryObject = {
          url,
          method: "GET",
        };
        if (params) {
          queryObject.params = params;
        }
        return queryObject;
      },
      providesTags: ["LIST_API"],
    }),

    // POST API
    postApi: builder.mutation({
      query: (data) => {
        return {
          url: data.end_point,
          method: "POST",
          body: data.body,
        };
      },
      invalidatesTags: ["LIST_API"],
    }),

    postFormDataApi: builder.mutation({
      query: (data) => {
        // Convert object to FormData if it's not already
        let formData = data.body;
        if (!(data.body instanceof FormData)) {
          formData = new FormData();
          Object.keys(data.body).forEach((key) => {
            if (data.body[key] !== null && data.body[key] !== undefined) {
              // Handle file uploads
              if (
                data.body[key] instanceof File ||
                data.body[key] instanceof FileList
              ) {
                if (data.body[key] instanceof FileList) {
                  // Handle multiple files
                  Array.from(data.body[key]).forEach((file, index) => {
                    formData.append(`${key}[${index}]`, file);
                  });
                } else {
                  formData.append(key, data.body[key]);
                }
              } else if (typeof data.body[key] === "object") {
                // Handle nested objects (convert to JSON string)
                formData.append(key, JSON.stringify(data.body[key]));
              } else {
                formData.append(key, data.body[key]);
              }
            }
          });
        }

        return {
          url: data.end_point,
          method: "POST",
          body: formData,
          // Don't set Content-Type for FormData - browser handles boundary
        };
      },
      invalidatesTags: ["LIST_API"],
    }),

    // Update API with JSON (PUT method)
    updateApiJson: builder.mutation({
      query: (data) => ({
        url: data.end_point,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.body),
      }),
      invalidatesTags: ["LIST_API"],
    }),

    // Update API with FormData (POST with _method=PUT)
    updateApi: builder.mutation({
      query: (data) => {
        // For FormData, append _method for Laravel-style method spoofing
        if (data.body instanceof FormData) {
          data.body.append("_method", "PUT");
        }
        return {
          url: data.end_point,
          method: "POST",
          body: data.body,
        };
      },
      invalidatesTags: ["LIST_API"],
    }),

    // Update FormData API (auto convert plain data to FormData, with _method=PUT)
    updateFormDataAutoApi: builder.mutation({
      query: (data) => {
        // Convert object to FormData if it's not already
        let formData = data.body;
        if (!(data.body instanceof FormData)) {
          formData = new FormData();
          Object.keys(data.body).forEach((key) => {
            if (data.body[key] !== null && data.body[key] !== undefined) {
              // Handle file uploads
              if (
                data.body[key] instanceof File ||
                data.body[key] instanceof FileList
              ) {
                if (data.body[key] instanceof FileList) {
                  // Handle multiple files
                  Array.from(data.body[key]).forEach((file, index) => {
                    formData.append(`${key}[${index}]`, file);
                  });
                } else {
                  formData.append(key, data.body[key]);
                }
              } else if (typeof data.body[key] === "object") {
                // Handle nested objects (convert to JSON string)
                formData.append(key, JSON.stringify(data.body[key]));
              } else {
                formData.append(key, data.body[key]);
              }
            }
          });
        }
        // Laravel-style method spoofing
        formData.append("_method", "PUT");
        return {
          url: data.end_point,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["LIST_API"],
    }),

    // Delete API
    deleteApi: builder.mutation({
      query: (data) => {
        return {
          url: data.end_point,
          method: "DELETE",
          body: data.body,
        };
      },
      invalidatesTags: ["LIST_API"],
    }),

    // Login endpoint
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login/",
        method: "POST",
        body: credentials,
      }),
    }),

    // Logout endpoint
    logoutApi: builder.mutation({
      query: () => ({
        url: "/logout-open/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetApiQuery,
  useGetApiWithIdQuery,
  usePostFormDataApiMutation,
  useUpdateApiJsonMutation,
  usePostApiMutation,
  useUpdateApiMutation,
  useUpdateFormDataAutoApiMutation,
  useDeleteApiMutation,
  useGetMenuItemsQuery,
  useLoginMutation,
  useLogoutApiMutation,
} = commonApi;