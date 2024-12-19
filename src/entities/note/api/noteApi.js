import { axiosInstance } from '@shared/api/axios'

const ENDPOINTS = {
  GET_NOTES: '/notes',
  GET_NOTE: (id) => `/notes/${id}`,
  CREATE_NOTE: '/notes',
  UPDATE_NOTE: (id) => `/notes/${id}`,
  DELETE_NOTE: (id) => `/notes/${id}`,
}

export const noteApi = {
  async getNotes() {
    const { data } = await axiosInstance.get(ENDPOINTS.GET_NOTES)
    return data
  },

  async getNoteById(id) {
    const { data } = await axiosInstance.get(ENDPOINTS.GET_NOTE(id))
    return data
  },

  async createNote(note) {
    const { data } = await axiosInstance.post(ENDPOINTS.CREATE_NOTE, todo)
    return data
  },

  async updateNote(id, note) {
    const { data } = await axiosInstance.put(ENDPOINTS.UPDATE_NOTE(id), todo)
    return data
  },

  async deleteNote(id) {
    await axiosInstance.delete(ENDPOINTS.DELETE_NOTE(id))
  },
}