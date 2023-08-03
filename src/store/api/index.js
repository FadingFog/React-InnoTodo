import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const API_URL = 'http://localhost/api'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
})