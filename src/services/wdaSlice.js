import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wdaSlice = createApi({
  reducerPath: "attendanceManagementSystem",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/wda/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getAllStatusDetails: builder.query({
      query: () => "/admin/getAllStatus",
    }),
    getAllQueries: builder.query({
      query: () => "/admin/getAllQueries",
    }),
    getStatusByContact: builder.query({
      query: (mobileNo) => `/admin/webSiteStatus/${mobileNo}`,
    }),
    getQueriesBySearch: builder.query({
      query: (mobileNo) => `/admin/getQueriesBySearch/${mobileNo}`,
    }),
    updateStatus: builder.mutation({
      query: (details) => ({
        url: "/admin/updateWebSiteStatus",
        method: "PUT",
        body: details,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllStatusDetailsQuery,
  useLazyGetQueriesBySearchQuery,
  useGetAllQueriesQuery,
  useLazyGetStatusByContactQuery,
  useUpdateStatusMutation,
} = wdaSlice;
