# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 프로젝트 개요

이 프로젝트는 **watsonx.orchestrate ADK를 MCP 서버로 연동**하여 AI 어시스턴트가 실시간으로 공식 문서를 참조할 수 있도록 합니다.

## MCP 서버 연결

### 연결된 MCP 서버
- **서버명**: `watsonx-orchestrate-adk-docs`
- **도구**: `search_ibm_watsonx_orchestrate_adk`

### 사용 방법
AI 어시스턴트는 다음과 같이 ADK 문서를 검색할 수 있습니다:

```xml
<use_mcp_tool>
<server_name>watsonx-orchestrate-adk-docs</server_name>
<tool_name>search_ibm_watsonx_orchestrate_adk</tool_name>
<arguments>
{
  "query": "검색할 내용",
  "version": "v0.7"
}
</arguments>
</use_mcp_tool>
```

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

## 개발 시 주의사항

- `.env` 파일은 절대 Git에 커밋하지 않음 (이미 .gitignore에 포함됨)
- API Key는 민감 정보이므로 안전하게 관리
- MCP 서버를 통해 최신 문서 정보 확인
- 모든 코드 변경사항은 GitHub 저장소에서 관리