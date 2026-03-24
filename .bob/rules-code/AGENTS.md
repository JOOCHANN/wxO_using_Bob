# watsonx.orchestrate ADK - Code Mode 가이드

## 💻 Code 모드 특징

Code 모드는 파일 시스템 작업과 명령 실행에 특화되어 있습니다:

- ✅ 파일 읽기/쓰기/수정
- ✅ 명령어 실행 (npm, python 등)
- ✅ 에이전트 코드 구현
- ✅ 스킬 개발 및 테스트
- ❌ MCP 도구 사용 불가
- ❌ Browser 도구 사용 불가

## 🔧 주요 작업

### 에이전트 개발
- TypeScript/JavaScript로 에이전트 코드 작성
- 로컬 테스트 및 디버깅
- 패키지 의존성 관리

### 스킬 구현
- 새로운 스킬 함수 작성
- 기존 스킬 수정 및 개선
- 단위 테스트 작성

### 명령 실행
```bash
# 개발 서버 실행
npm run dev

# 테스트 실행
npm test

# 빌드
npm run build
```

## 📖 참고 문서

공통 정보는 `.bob/COMMON.md`를 참조하세요:
- 프로젝트 개요
- 환경 변수 설정
- 주요 참고 문서
- 보안 주의사항