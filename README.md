<div align="center">

# D4D · TEAM AEGIS

### Deploy for Defense — Hackathon APAC · Seoul 24H

**Track 1 — Counter-UAS (Anti-Drone)**

레이더 · 스캐너 · 카메라 · 재머를 하나로 잇는 통합 관제, AI로 다시 설계하다.

[**▶ Live Page**](https://jlthreek.github.io/hello-world/) · React + Vite static site

[![Deploy to GitHub Pages](https://github.com/jlthreek/hello-world/actions/workflows/deploy.yml/badge.svg)](https://github.com/jlthreek/hello-world/actions/workflows/deploy.yml)

</div>

---

## What is D4D?

**D4D = Deploy (D) · for (4) · Defense (D).**
국방·방산 문제를 **24시간 안에 프로토타입으로 만들어 배포(Deploy)** 하는 디펜스테크 해커톤입니다.
싱가포르 · 호주 · 유럽으로 이어지는 글로벌 디펜스테크 해커톤의 **APAC 서울 에디션**으로,
현장에서 문제가 공개되면 24시간 안에 끝내는 형식입니다.

이 레포는 우리 팀의 **소개 페이지**입니다. 본격 개발 전, 주제보다 **역할과 레이어를 먼저 정렬**했습니다.

---

## Roster

프라이버시를 위해 멤버는 전부 이니셜로 표기합니다.

| 이니셜 | 역할 | 담당 |
| :---: | :--- | :--- |
| **JCH** | Product / Frontend · *Team Lead* | MVP 범위 · UI/UX · Dashboard · 발표/데모 |
| **LMH** | Backend / Infra | API 서버 · DB 설계 · Docker/배포 · WebSocket |
| **KHJ** | AI Engineer | LLM 활용 · AI 기능 구현 · 프롬프트 설계 · 모델 연동 |
| **KYJ** | Data Analyst | 데이터 분석 · Risk Score · 예측 모델 · 시각화 |
| **KJH** | Domain Expert (C-UAS) | 현업 Counter-UAS 검증 · 시나리오 설계 · 현실성 검토 |

## Architecture

```
[ Frontend ]      Dashboard · 통합 관제 UI · 데모 스토리라인
     ↓
[ Backend ]       API · DB · 실시간 통신(WebSocket) · 배포
     ↓
[ AI / Data ]     신호 · 영상 실시간 식별 · Risk Score · 예측
     ↓
[ Defense Domain ] 현업 Counter-UAS 검증 · 시나리오 설계
```

---

## Tech Stack

- **React 18** + **Vite 6** — 빌드 결과는 순수 정적 파일(`dist/`)
- 외부 UI 라이브러리 없이 **순수 CSS** (레이더 스윕 애니메이션, glassmorphism, 스크롤 리빌)
- **GitHub Actions** → **GitHub Pages** 자동 배포

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173/hello-world/
```

## Build

```bash
npm run build      # 결과물: dist/
npm run preview    # 빌드 결과 미리보기
```

## Deployment

`main` 브랜치에 push하면 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)이
자동으로 빌드 후 GitHub Pages에 배포합니다.

> **최초 1회 설정** — 레포 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 지정.
> 공개 주소: `https://jlthreek.github.io/hello-world/`

레포 이름을 바꾸면 [`vite.config.js`](vite.config.js)의 `base` 값을 `/<새-레포-이름>/` 로 맞춰주세요.

---

## Project Structure

```
.
├─ index.html                  # 진입점
├─ vite.config.js              # base: '/hello-world/'
├─ src/
│  ├─ main.jsx                 # React 부트스트랩
│  ├─ App.jsx                  # 섹션 컴포넌트 (Hero · About · Team · Stack · Footer)
│  ├─ data.js                  # 팀원 · 역할 · 팀명  ← 내용 수정은 여기
│  └─ index.css                # 디자인 · 애니메이션
└─ .github/workflows/deploy.yml
```

## Editing

- 팀원 정보 / 역할 / 팀 코드네임 → [`src/data.js`](src/data.js)
- 색상 · 애니메이션 · 레이아웃 → [`src/index.css`](src/index.css)

<div align="center">

—

**Built for Counter-UAS · Deploy for Defense**

</div>
