import React from 'react'
import Image from 'next/image'
import { ExplanationInfo } from '@/types/quizresult'
import BookmarkButton from '../BookmarkButton'

export default function QuizResultCard({
  wordId,
  isCorrect,
  isMarked,
  name,
  selectedOptionDescription,
  answerOptionDescription,
}: ExplanationInfo) {
  return (
    <div
      className="p-6 w-full bg-gray-800 text-onSurface-200 rounded-xl"
      key={name}
    >
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={isCorrect ? '/icons/correct.svg' : '/icons/wrong.svg'}
            alt={isCorrect ? 'correct.svg' : 'wrong.svg'}
            width={20}
            height={20}
          />
          <p className="ml-2">{name}</p>
        </div>
        <BookmarkButton wordId={wordId} isMarked={isMarked} />
      </div>
      {isCorrect && (
        <div className="line-through text-[14px] text-onSurface-100">
          <p>{selectedOptionDescription}</p>
        </div>
      )}
      <div className="flex break-keep text-[18px]">
        정답 :&nbsp;<p>{answerOptionDescription}</p>
      </div>
    </div>
  )
}
