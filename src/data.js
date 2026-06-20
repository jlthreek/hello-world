// ── Team data ──────────────────────────────────────────────
// 팀명/코드네임은 자유롭게 바꾸세요. (회의에서 미정 → placeholder)
// 멤버는 프라이버시를 위해 전부 이니셜로 표기.
export const TEAM = {
  codename: 'AEGIS',
  fullName: 'Team D4D',
  hackathon: 'Deploy for Defense · Hackathon APAC',
  location: 'Seoul · 24H',
  track: 'Track 1 — Counter-UAS (Anti-Drone)',
  tagline: '레이더 · 스캐너 · 카메라 · 재머를\n하나로 잇는 통합 관제, AI로 다시 설계하다',
  date: '2026.06.28',
}

// "What is D4D?" — Deploy for Defense
export const ABOUT = {
  expand: ['Deploy', 'for', 'Defense'],
  lines: [
    '국방·방산 문제를 24시간 안에 프로토타입으로 만들어 “배포(Deploy)”하는 디펜스테크 해커톤.',
    '싱가포르·호주·유럽으로 이어지는 글로벌 디펜스테크 해커톤의 APAC 서울 에디션.',
    '주최는 군사교육 소프트웨어 분야. 현장에서 문제가 공개되면 24시간 안에 끝낸다.',
  ],
}

export const PILLARS = [
  { layer: 'Frontend', icon: '◧', desc: 'Dashboard · 통합 관제 UI · 데모 스토리라인' },
  { layer: 'Backend', icon: '⬡', desc: 'API · DB · 실시간 통신(WebSocket) · 배포' },
  { layer: 'AI / Data', icon: '◈', desc: '신호 · 영상 실시간 식별 · Risk Score · 예측' },
  { layer: 'Defense Domain', icon: '⌖', desc: '현업 Counter-UAS 검증 · 시나리오 설계' },
]

export const MEMBERS = [
  {
    initials: 'JCH',
    role: 'Product / Frontend',
    badge: 'TEAM LEAD',
    affil: 'NAVER · iOS / Full-stack',
    blurb: 'iOS로 시작해 이것저것 다 만드는 현직 개발자.\nMVP 범위를 자르고 데모를 완성합니다.',
    tasks: ['MVP 범위 결정', 'UI/UX 설계', 'Dashboard', '발표 · 데모'],
    accent: '#00e5a0',
  },
  {
    initials: 'LMH',
    role: 'Backend / Infra',
    badge: 'BUILDER',
    affil: 'Cloud · ex-Embedded / EV',
    blurb: '임베디드 → 전기차 → 클라우드를 거친 개발자.\n노트북 대신 맥미니를 들고 다니며 인프라를 세웁니다.',
    tasks: ['API 서버', 'DB 설계', 'Docker · 배포', 'WebSocket'],
    accent: '#37b6ff',
  },
  {
    initials: 'KHJ',
    role: 'AI Engineer',
    badge: 'AI',
    affil: 'AI Developer · LLM',
    blurb: 'LLM과 모델 연동을 책임지는 AI 개발자.\n드론·새 실시간 식별과 신호 분석에 AI를 접목합니다.',
    tasks: ['LLM 활용', 'AI 기능 구현', '프롬프트 설계', '모델 연동'],
    accent: '#b388ff',
  },
  {
    initials: 'KYJ',
    role: 'Data Analyst',
    badge: 'DATA',
    affil: 'Aviation Safety · ex-Boeing Intern',
    blurb: '항공안전 분석 전공, 보잉에서 데이터 예측 인턴.\n위험도를 수치로 만들고 지표로 증명합니다.',
    tasks: ['데이터 분석', 'Risk Score', '예측 모델', '시각화'],
    accent: '#ffb74d',
  },
  {
    initials: 'KJH',
    role: 'Domain Expert',
    badge: 'C-UAS',
    affil: 'Anti-Drone · Jammer Firmware',
    blurb: '소프트킬(방해전파) 재머 펌웨어를 만드는 현업 전문가.\n문제의 현실성과 시나리오를 검증합니다.',
    tasks: ['C-UAS 검증', '현업 문제 검증', '시나리오 설계', '현실성 검토'],
    accent: '#ff6b6b',
  },
]
