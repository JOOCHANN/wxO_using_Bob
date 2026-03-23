# watsonx.orchestrate ADK Agent Development

이 프로젝트는 watsonx.orchestrate ADK를 사용하여 AI 에이전트를 개발하는 워크스페이스입니다.

## 환경 설정

### 필수 요구사항
- Node.js v18 이상
- npm v8 이상
- watsonx.orchestrate 인스턴스 접근 권한

### 설치

1. 저장소 클론
```bash
git clone https://github.com/JOOCHANN/wxO_using_Bob.git
cd wxO_using_Bob
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env` 파일이 이미 설정되어 있습니다. 필요시 수정하세요.

## watsonx.orchestrate 연결 정보

- **Instance**: US South region
- **Developer Edition Source**: orchestrate
- **API 인증**: API Key 기반

## 참고 자료

- [watsonx.orchestrate Developer Portal](https://developer.watson-orchestrate.ibm.com/)
- [IBM watsonx.orchestrate ADK GitHub](https://github.com/ibm/ibm-watsonx-orchestrate-adk/)

## 프로젝트 구조

```
wxO_code_agent/
├── .env                 # 환경 변수 (watsonx.orchestrate 인증 정보)
├── .gitignore          # Git 제외 파일 목록
├── package.json        # Node.js 프로젝트 설정
├── README.md           # 프로젝트 개요
├── AGENTS.md           # AI 어시스턴트를 위한 개발 가이드
└── .bob/               # 모드별 개발 가이드
    ├── rules-code/
    ├── rules-advance/
    ├── rules-ask/
    └── rules-plan/
```

## 라이선스

ISC