import { useState, useCallback } from 'react'
import MemoForm from '@/components/MemoForm'
import MemoList from '@/components/MemoList'
import { fetchMemos, createMemo, deleteMemo } from '@/api/memoApi'
import type { Memo } from '@/types/memo'
import type { CreateMemoRequest } from '@/types/memo'

const Home = () => {
  const [memos, setMemos] = useState<Memo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadMemos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const list = await fetchMemos()
      setMemos(list)
    } catch (e) {
      setError(e instanceof Error ? e.message : '목록을 불러오지 못했습니다.')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleCreate = async (body: CreateMemoRequest) => {
    setError(null)
    try {
      const created = await createMemo(body)
      setMemos((prev) => [created, ...prev])
    } catch (e) {
      setError(e instanceof Error ? e.message : '메모 추가에 실패했습니다.')
    }
  }

  const handleDelete = async (id: number) => {
    setError(null)
    try {
      await deleteMemo(id)
      setMemos((prev) => prev.filter((m) => m.id !== id))
    } catch (e) {
      setError(e instanceof Error ? e.message : '삭제에 실패했습니다.')
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1.5rem' }}>
      <h1>메모</h1>
      <button type="button" onClick={loadMemos} disabled={loading}>
        {loading ? '불러오는 중…' : '목록 새로고침'}
      </button>
      {error && <p style={{ color: 'crimson', marginTop: '0.5rem' }}>{error}</p>}
      <MemoForm onSubmit={handleCreate} />
      <MemoList memos={memos} onDelete={handleDelete} />
    </div>
  )
}

export default Home
