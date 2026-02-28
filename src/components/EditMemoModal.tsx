import { useState, useEffect } from 'react'
import type { Memo } from '@/types/memo'
import type { UpdateMemoRequest } from '@/types/memo'

interface EditMemoModalProps {
  memo: Memo
  onConfirm: (id: number, body: UpdateMemoRequest) => Promise<void>
  onClose: () => void
}

const EditMemoModal = ({ memo, onConfirm, onClose }: EditMemoModalProps) => {
  const [title, setTitle] = useState(memo.title)
  const [content, setContent] = useState(memo.content)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setTitle(memo.title)
    setContent(memo.content)
  }, [memo])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    setSubmitting(true)
    try {
      await onConfirm(memo.id, { title: title.trim(), content: content.trim() })
      onClose()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="edit-memo-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <h2 id="edit-memo-title" className="modal-title">메모 수정</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label htmlFor="edit-memo-title-input" className="visually-hidden">제목</label>
          <input
            id="edit-memo-title-input"
            type="text"
            className="input"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
            autoFocus
          />
          <label htmlFor="edit-memo-content-input" className="visually-hidden">내용</label>
          <textarea
            id="edit-memo-content-input"
            className="textarea"
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose} disabled={submitting}>
              취소
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting || !title.trim()}>
              {submitting ? '저장 중…' : '확인'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditMemoModal
