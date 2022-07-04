import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CharacterModel } from '~/app/domain/models'

const baseURL = process.env.BASE_URL

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['characters'],
  endpoints: (builder) => ({
    getAllCharacters: builder.query<any, number>({
      query: (id) => ({ url: `character?page=${id}` }),
      providesTags: ['characters']
    }),
    getSingleCharacter: builder.query<CharacterModel, string>({
      query: (id) => ({ url: `character/${id}` })
    })
  })
})

export const { useGetAllCharactersQuery, useGetSingleCharacterQuery } =
  charactersApi
