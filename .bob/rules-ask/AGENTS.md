# watsonx.orchestrate ADK - Ask Mode 가이드

## Ask 모드 특징
- 정보 검색 및 문서 참조에 특화
- 코드 실행 없이 질문에 답변
- 프로젝트 구조 및 아키텍처 설명
- 개발 가이드 및 베스트 프랙티스 제공

## ADK 문서 구조

### 공식 문서 위치
- **Developer Portal**: https://developer.watson-orchestrate.ibm.com/
- **GitHub Repository**: https://github.com/ibm/ibm-watsonx-orchestrate-adk/
- **API Reference**: Developer Portal의 API 섹션

### 주요 문서 카테고리

#### 1. Getting Started
- ADK 설치 및 설정
- 첫 번째 에이전트 생성
- 기본 개념 이해

#### 2. Agent Development
- 에이전트 구조 및 구성
- 스킬 개발 가이드
- manifest.json 설정

#### 3. Skills
- 스킬 타입 및 구조
- 파라미터 정의
- 실행 로직 구현

#### 4. Testing & Debugging
- 로컬 테스트 환경
- 디버깅 도구
- 로그 분석

#### 5. Deployment
- 빌드 프로세스
- 배포 절차
- 버전 관리

## 자주 묻는 질문 (FAQ)

### Q: ADK CLI를 어떻게 설치하나요?
```bash
npm install -g @ibm/wxo-adk-cli
```

### Q: 새 에이전트를 어떻게 생성하나요?
```bash
wxo-adk create agent <agent-name>
```

### Q: 로컬에서 에이전트를 테스트하려면?
```bash
cd <agent-name>
wxo-adk dev
```

### Q: 에이전트를 배포하려면?
```bash
wxo-adk build
wxo-adk deploy
```

### Q: manifest.json의 역할은?
에이전트의 메타데이터, 스킬 목록, 의존성을 정의하는 설정 파일입니다.

### Q: 스킬과 에이전트의 차이는?
- **에이전트**: 여러 스킬을 포함하는 컨테이너
- **스킬**: 특정 작업을 수행하는 독립적인 기능 단위

## 프로젝트 구조 설명

```
wxO_code_agent/
├── .env                    # 환경 변수 (watsonx.orchestrate 인증)
├── .gitignore             # Git 제외 파일
├── package.json           # Node.js 프로젝트 설정
├── README.md              # 프로젝트 개요
├── AGENTS.md              # 일반 개발 가이드
└── .bob/                  # 모드별 가이드
    ├── rules-code/        # Code 모드 가이드
    ├── rules-advance/     # Advance 모드 가이드
    ├── rules-ask/         # Ask 모드 가이드 (현재 파일)
    └── rules-plan/        # Plan 모드 가이드
```

## 에이전트 개발 베스트 프랙티스

### 1. 스킬 설계
- 단일 책임 원칙: 각 스킬은 하나의 명확한 작업 수행
- 재사용성: 범용적으로 사용 가능하도록 설계
- 명확한 인터페이스: 파라미터와 반환값을 명확히 정의

### 2. 에러 처리
- 모든 예외 상황 처리
- 사용자 친화적인 에러 메시지
- 적절한 로깅

### 3. 테스트
- 단위 테스트 작성
- 통합 테스트 수행
- 실제 환경에서 검증

### 4. 문서화
- README.md에 에이전트 설명 작성
- 각 스킬의 사용법 문서화
- 예제 코드 제공

### 5. 버전 관리
- Semantic Versioning 사용
- 변경 사항 기록 (CHANGELOG.md)
- Git 태그 활용

## 참고 리소스

### 공식 문서
- [Developer Portal](https://developer.watson-orchestrate.ibm.com/)
- [GitHub Repository](https://github.com/ibm/ibm-watsonx-orchestrate-adk/)

### 커뮤니티
- IBM Developer Community
- Stack Overflow (태그: watsonx-orchestrate)

### 예제 프로젝트
- GitHub의 샘플 에이전트
- Developer Portal의 튜토리얼