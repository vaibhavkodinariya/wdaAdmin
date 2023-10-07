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
  }),
});

export const { useLoginMutation } = wdaSlice;
