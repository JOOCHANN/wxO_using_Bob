# watsonx.orchestrate ADK - MCP Server Integration

이 프로젝트는 watsonx.orchestrate ADK를 MCP(Model Context Protocol) 서버로 연동하여 AI 어시스턴트가 실시간으로 공식 문서를 참조할 수 있도록 합니다.

## 프로젝트 개요

- **목적**: watsonx.orchestrate ADK 문서를 MCP 서버를 통해 접근
- **MCP 서버**: `watsonx-orchestrate-adk-docs`
- **GitHub**: https://github.com/JOOCHANN/wxO_using_Bob

## MCP 서버 연결

### 사용 가능한 도구
- `search_ibm_watsonx_orchestrate_adk`: ADK 문서 검색

### 연결 확인
MCP 서버가 정상적으로 연결되어 있으면 AI 어시스턴트가 다음과 같이 문서를 검색할 수 있습니다:

```xml
<use_mcp_tool>
<server_name>watsonx-orchestrate-adk-docs</server_name>
<tool_name>search_ibm_watsonx_orchestrate_adk</tool_name>
<arguments>
{
  "query": "agent creation"
}
</arguments>
</use_mcp_tool>
```

## 환경 변수

프로젝트 루트의 `.env` 파일에 watsonx.orchestrate 인증 정보가 설정되어 있습니다:
- `WO_DEVELOPER_EDITION_SOURCE`: orchestrate
- `WO_INSTANCE`: watsonx.orchestrate 인스턴스 URL
- `WO_API_KEY`: API 인증 키

**중요**: `.env` 파일은 민감한 정보를 포함하므로 Git에 커밋하지 않습니다.

## 참고 자료

- [watsonx.orchestrate Developer Portal](https://developer.watson-orchestrate.ibm.com/)
- [IBM watsonx.orchestrate ADK GitHub](https://github.com/ibm/ibm-watsonx-orchestrate-adk/)

## 라이선스

ISC