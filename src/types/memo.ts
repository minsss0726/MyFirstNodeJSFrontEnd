/** 메모 도메인 타입 (DB/API와 동일) */
export interface Memo {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

/** 메모 생성 요청 DTO */
export interface CreateMemoRequest {
  title: string
  content: string
}

/** 메모 수정 요청 DTO */
export interface UpdateMemoRequest {
  title?: string
  content?: string
}
