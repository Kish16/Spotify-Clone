import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://billboard-api5.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'be836efc8dmsh1ff5a66c7704141p1bbd5fjsnf75703fc0ce4');
        return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/api/charts/hot-100'}),
    }),
});

export const{
    useGetTopChartsQuery, 
} = shazamCoreApi;
