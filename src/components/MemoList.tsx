import type { Memo } from '@/types/memo'
import MemoItem from './MemoItem'

interface MemoListProps {
  memos: Memo[]
  onDelete: (id: number) => Promise<void>
}

const MemoList = ({ memos, onDelete }: MemoListProps) => {
  if (memos.length === 0) {
    return <p className="memo-list-empty">메모가 없습니다.</p>
  }

  return (
    <ul className="memo-list">
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default MemoList
