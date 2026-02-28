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
    <li style={{ listStyle: 'none', padding: '0.75rem', border: '1px solid #eee', borderRadius: '8px', marginBottom: '0.5rem' }}>
      <strong>{memo.title}</strong>
      <p style={{ margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>{memo.content}</p>
      <small style={{ color: '#666' }}>{new Date(memo.createdAt).toLocaleString('ko-KR')}</small>
      <button type="button" onClick={handleDelete} style={{ marginLeft: '0.5rem' }}>삭제</button>
    </li>
  )
}

export default MemoItem
