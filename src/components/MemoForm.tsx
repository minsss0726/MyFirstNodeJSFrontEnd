import { useState } from 'react'
import type { CreateMemoRequest } from '@/types/memo'

interface MemoFormProps {
  onSubmit: (body: CreateMemoRequest) => Promise<void>
}

const MemoForm = ({ onSubmit }: MemoFormProps) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    await onSubmit({ title: title.trim(), content: content.trim() })
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={200}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }}
      />
      <button type="submit">메모 추가</button>
    </form>
  )
}

export default MemoForm
