import { useState } from 'react'
import type { Memo } from '@/types/memo'
import type { UpdateMemoRequest } from '@/types/memo'
import EditMemoModal from './EditMemoModal'

interface MemoItemProps {
  memo: Memo
  onDelete: (id: number) => Promise<void>
  onEdit: (id: number, body: UpdateMemoRequest) => Promise<void>
}

const MemoItem = ({ memo, onDelete, onEdit }: MemoItemProps) => {
  const [isEditOpen, setIsEditOpen] = useState(false)

  const handleDelete = () => {
    if (window.confirm('이 메모를 삭제할까요?')) {
      onDelete(memo.id)
    }
  }

  const handleConfirmEdit = async (id: number, body: UpdateMemoRequest) => {
    await onEdit(id, body)
  }

  return (
    <li className="card card-memo">
      <h3 className="memo-card-title">{memo.title}</h3>
      <p className="memo-card-content">{memo.content}</p>
      <span className="memo-card-meta text-caption">
        {new Date(memo.createdAt).toLocaleString('ko-KR')}
      </span>
      <div className="memo-card-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setIsEditOpen(true)}
        >
          수정
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
      {isEditOpen && (
        <EditMemoModal
          memo={memo}
          onConfirm={handleConfirmEdit}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </li>
  )
}

export default MemoItem
