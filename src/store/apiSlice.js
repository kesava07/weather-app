import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1" }),
    endpoints: (builder) => ({
        getLocations: builder.query({
            query: (searchTerm) => ({
                url: `/search.json?key=41a6f56194b34cddb32170106232510&q=${searchTerm}`,
            }),
            transformResponse: (rawData) => rawData?.map((res) => ({ label: res?.name, value: res?.region })),
        }),
        getWeatherData: builder.query({
            query: (location) => ({
                url: `/current.json?key=41a6f56194b34cddb32170106232510&q=${location}&aqi=yes`
            }),
        })
    })
})

export const { useGetLocationsQuery, useGetWeatherDataQuery } = apiSlice

export default apiSlice