import type { Memo } from '@/types/memo'
import type { UpdateMemoRequest } from '@/types/memo'
import MemoItem from './MemoItem'

interface MemoListProps {
  memos: Memo[]
  onDelete: (id: number) => Promise<void>
  onEdit: (id: number, body: UpdateMemoRequest) => Promise<void>
}

const MemoList = ({ memos, onDelete, onEdit }: MemoListProps) => {
  if (memos.length === 0) {
    return <p className="memo-list-empty">메모가 없습니다.</p>
  }

  return (
    <ul className="memo-list">
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  )
}

export default MemoList
