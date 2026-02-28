import type { Memo } from '@/types/memo'

interface MemoItemProps {
  memo: Memo
  onDelete: (id: number) => Promise<void>
}

const MemoItem = ({ memo, onDelete }: MemoItemProps) => {
  const handleDelete = () => {
    if (window.confirm('이 메모를 삭제할까요?')) {
      onDelete(memo.id)
    }
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
          className="btn btn-danger"
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
    </li>
  )
}

export default MemoItem
