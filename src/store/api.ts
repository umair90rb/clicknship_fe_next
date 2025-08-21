import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Replace with your API base URL
  endpoints: (builder) => ({
    getDummyData: builder.query<string[], void>({
      query: () => 'https://jsonplaceholder.typicode.com/posts?_limit=5', // Using a public API for dummy data
    }),
  }),
});

export const { useGetDummyDataQuery } = exampleApi;