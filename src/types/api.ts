/** API 공통 응답 포맷 (PROJECT 규칙) */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
