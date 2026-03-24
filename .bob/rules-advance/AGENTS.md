# watsonx.orchestrate ADK - Advance Mode 가이드

## 🚀 Advance 모드 특징

Advance 모드는 고급 기능과 외부 통합에 특화되어 있습니다:

- ✅ MCP 도구 사용 가능
- ✅ Browser 도구 사용 가능
- ✅ 외부 API 및 서비스 통합
- ✅ 복잡한 워크플로우 구현
- ✅ 파일 시스템 작업
- ✅ 명령어 실행

## 🔌 MCP 서버 연결

### 연결된 MCP 서버
- **서버명**: `watsonx-orchestrate-adk-docs`
- **도구**: `search_ibm_watsonx_orchestrate_adk`

### 사용 방법
ADK 문서를 검색할 때 다음과 같이 사용합니다:

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

## 🔧 주요 작업

### 외부 API 통합
- watsonx.orchestrate API 호출
- 서드파티 서비스 연동
- 인증 및 권한 관리

### 복잡한 워크플로우
- 다단계 작업 자동화
- 조건부 로직 구현
- 에러 핸들링 및 재시도

### 문서 검색 및 참조
- MCP를 통한 실시간 문서 검색
- 최신 API 정보 확인
- 베스트 프랙티스 참조

## 📖 참고 문서

공통 정보는 `.bob/COMMON.md`를 참조하세요:
- 프로젝트 개요
- 환경 변수 설정
- 주요 참고 문서
- 보안 주의사항