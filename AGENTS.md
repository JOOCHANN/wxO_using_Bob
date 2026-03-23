# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## watsonx.orchestrate ADK 개발 환경

### 프로젝트 타입
- **플랫폼**: watsonx.orchestrate SaaS
- **개발 도구**: IBM watsonx.orchestrate ADK (Agent Development Kit)
- **언어**: Node.js/TypeScript 기반
- **배포 방식**: watsonx.orchestrate 인스턴스에 직접 배포

### 환경 변수 (.env)
프로젝트 루트의 `.env` 파일에 다음 변수들이 설정되어 있습니다:
- `WO_DEVELOPER_EDITION_SOURCE`: orchestrate 소스 타입
- `WO_INSTANCE`: watsonx.orchestrate 인스턴스 URL
- `WO_API_KEY`: API 인증 키

**중요**: `.env` 파일은 민감한 정보를 포함하므로 절대 Git에 커밋하지 않습니다.

### ADK CLI 주요 명령어
```bash
# ADK CLI 설치 (전역)
npm install -g @ibm/wxo-adk-cli

# 또는 로컬 설치
npm install --save-dev @ibm/wxo-adk-cli

# 새 에이전트 생성
wxo-adk create agent <agent-name>

# 에이전트 빌드
wxo-adk build

# 에이전트 배포
wxo-adk deploy

# 에이전트 테스트
wxo-adk test

# 로컬 개발 서버 실행
wxo-adk dev
```

### 에이전트 개발 워크플로우
1. **에이전트 생성**: `wxo-adk create agent <name>`으로 새 에이전트 스캐폴딩
2. **스킬 정의**: `skills/` 디렉토리에 스킬 구현
3. **로컬 테스트**: `wxo-adk dev`로 로컬 환경에서 테스트
4. **빌드**: `wxo-adk build`로 배포 패키지 생성
5. **배포**: `wxo-adk deploy`로 watsonx.orchestrate 인스턴스에 배포

### 에이전트 구조 (일반적인 패턴)
```
agent-name/
├── manifest.json       # 에이전트 메타데이터 및 설정
├── skills/            # 스킬 구현 디렉토리
│   ├── skill1.js
│   └── skill2.js
├── package.json       # Node.js 의존성
└── README.md          # 에이전트 문서
```

### 주요 참고 문서
- **Developer Portal**: https://developer.watson-orchestrate.ibm.com/
- **GitHub Repository**: https://github.com/ibm/ibm-watsonx-orchestrate-adk/
- **API Documentation**: Developer Portal에서 확인

### 개발 시 주의사항
- `.env` 파일은 절대 Git에 커밋하지 않음 (이미 .gitignore에 포함됨)
- API Key는 민감 정보이므로 안전하게 관리
- 에이전트 배포 전 반드시 로컬 테스트 수행
- manifest.json의 버전 관리 필수

### GitHub Repository
- **URL**: https://github.com/JOOCHANN/wxO_using_Bob
- 모든 코드 변경사항은 이 저장소에서 관리