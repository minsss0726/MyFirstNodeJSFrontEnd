import axios from 'axios'
import type { ApiResponse } from '@/types/api'
import type { Memo, CreateMemoRequest, UpdateMemoRequest } from '@/types/memo'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

export const fetchMemos = async (): Promise<Memo[]> => {
  const { data } = await api.get<ApiResponse<Memo[]>>('/memos')
  if (!data.success || data.data == null) throw new Error(data.error ?? '목록 조회 실패')
  return data.data
}

export const fetchMemoById = async (id: number): Promise<Memo> => {
  const { data } = await api.get<ApiResponse<Memo>>(`/memos/${id}`)
  if (!data.success || data.data == null) throw new Error(data.error ?? '조회 실패')
  return data.data
}

export const createMemo = async (body: CreateMemoRequest): Promise<Memo> => {
  const { data } = await api.post<ApiResponse<Memo>>('/memos', body)
  if (!data.success || data.data == null) throw new Error(data.error ?? '생성 실패')
  return data.data
}

export const updateMemo = async (id: number, body: UpdateMemoRequest): Promise<Memo> => {
  const { data } = await api.put<ApiResponse<Memo>>(`/memos/${id}`, body)
  if (!data.success || data.data == null) throw new Error(data.error ?? '수정 실패')
  return data.data
}

export const deleteMemo = async (id: number): Promise<void> => {
  const { data } = await api.delete<ApiResponse<undefined>>(`/memos/${id}`)
  if (!data.success) throw new Error(data.error ?? '삭제 실패')
}
