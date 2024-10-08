export interface Account {
  nickname: string
  profileImage: string
  careerInfo: {
    jobGroup: string
    company: string
    experience: string
  }
  quizInfo: {
    totalCategoryQuizCount: number
    designQuizCount: number
    businessQuizCount: number
    developQuizCount: number
  }
}

export const accountData: Account = {
  nickname: '상큼한화성009',
  profileImage: '/images/profile.svg',
  careerInfo: {
    jobGroup: '개발자',
    company: '비공개',
    experience: '1년 차 미만',
  },
  quizInfo: {
    totalCategoryQuizCount: 0,
    designQuizCount: 0,
    businessQuizCount: 0,
    developQuizCount: 0,
  },
}
