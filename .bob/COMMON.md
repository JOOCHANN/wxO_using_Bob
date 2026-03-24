# watsonx.orchestrate ADK - 공통 정보

## 프로젝트 개요

이 프로젝트는 **watsonx.orchestrate ADK를 MCP 서버로 연동**하여 AI 어시스턴트가 실시간으로 공식 문서를 참조할 수 있도록 합니다.

## 환경 변수

프로젝트 루트의 `.env` 파일에 다음 변수들이 설정되어 있습니다:
- `WO_DEVELOPER_EDITION_SOURCE`: orchestrate
- `WO_INSTANCE`: watsonx.orchestrate 인스턴스 URL
- `WO_API_KEY`: API 인증 키

**중요**: `.env` 파일은 민감한 정보를 포함하므로 절대 Git에 커밋하지 않습니다.

## 주요 참고 문서

- **Developer Portal**: https://developer.watson-orchestrate.ibm.com/
- **GitHub Repository**: https://github.com/ibm/ibm-watsonx-orchestrate-adk/
- **프로젝트 GitHub**: https://github.com/JOOCHANN/wxO_using_Bob

## 보안 및 개발 주의사항

- `.env` 파일은 절대 Git에 커밋하지 않음 (이미 .gitignore에 포함됨)
- API Key는 민감 정보이므로 안전하게 관리
- 모든 코드 변경사항은 GitHub 저장소에서 관리
- 환경 변수는 반드시 `.env` 파일을 통해 관리