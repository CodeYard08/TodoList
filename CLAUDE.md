# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # 개발 서버 실행
npm run build    # 타입 체크 후 프로덕션 빌드 (tsc -b && vite build)
npm run lint     # ESLint 실행
npm run preview  # 빌드 결과물 미리보기
```

## Architecture

React 19 + TypeScript + Vite + React Router v7 프로젝트. 스타일은 Tailwind CSS v4 사용 가능하나 현재 컴포넌트들은 inline style로 구현되어 있음.

**데이터 타입**은 `src/types.ts`에 정의. 현재 `Todo` 타입(`id`, `text`, `done`)만 존재.

**컴포넌트**는 `src/components/` 하위에 기능별 폴더로 분리되며, 각 폴더의 `index.ts`로 re-export하고 `src/components/index.ts`에서 통합 export.

```
src/components/
  button/     Button.tsx — variant: "primary" | "secondary"
  input/      Input.tsx — onChange는 string을 직접 받음 (e.target.value 래핑됨)
  todolist/   TodoItem.tsx
  index.ts    — 통합 barrel export
```

**페이지**는 `src/pages/`에 위치하며 `src/pages/index.ts`로 export. 라우팅은 `src/App.tsx`에서 `createBrowserRouter`로 정의.

**컴포넌트 prop 설계 패턴**: 이벤트 핸들러(`onToggle`, `onDelete`)는 컴포넌트 props에서 받고, 데이터 타입(`Todo`)에는 포함하지 않음.
