import WordInfo from '@/components/domain/wordDetail/WordInfo'
import { wordData } from './data'
import ContactButton from '@/components/domain/wordDetail/ContactButton'
import CommentsList from '@/components/domain/wordDetail/CommentsList'
import Header from '@/components/shared/Header'
import BookmarkButton from '@/components/shared/BookmarkButton'

export default function WordDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const wordId = parseInt(params.slug.split('/').at(-1) ?? '')
  const markCount = 23
  return (
    <div className="text-onSurface-300">
      <Header
        title="용어 상세"
        rightItem={
          <BookmarkButton
            isMarked={false}
            wordId={wordId}
            markCount={markCount}
          />
        }
      />
      <WordInfo word={wordData} />
      <ContactButton />
      <CommentsList />
    </div>
  )
}
