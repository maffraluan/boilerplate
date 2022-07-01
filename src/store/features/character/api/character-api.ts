import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CharacterModel } from '~/app/domain/models'

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<any, number>({
      query: (id) => ({ url: `character?page=${id}` })
    }),
    getSingleCharacter: builder.query<CharacterModel, string>({
      query: (id) => ({ url: `character/${id}` })
    })
  })
})

export const { useGetAllCharactersQuery, useGetSingleCharacterQuery } =
  charactersApi
