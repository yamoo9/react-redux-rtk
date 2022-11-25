import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    // QUERY
    contacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    contact: builder.query({
      query: (id) => {
        if (!id) return '';
        return `/contacts/${id}`;
      },
      providesTags: ['Contact'],
    }),

    // MUTATION
    addContact: builder.mutation({
      query: (newContact) => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...willUpdateContact }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: willUpdateContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
