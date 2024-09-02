import React from 'react'
import { Header } from '@/components/domain/quiz/result'

type LayoutProps = {
  children: React.ReactNode
}
export default function QuizResultLayout({ children }: LayoutProps) {
  return (
    <div className="pb-4 h-full">
      <Header />
      <div className="h-[calc(100%-80px)]">{children}</div>
    </div>
  )
}
