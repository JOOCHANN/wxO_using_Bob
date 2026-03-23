# watsonx.orchestrate ADK - Code Mode 가이드

## 코드 모드 특징
- MCP 및 Browser 도구 사용 불가
- 파일 시스템 작업 및 명령 실행에 집중
- 에이전트 코드 구현 및 스킬 개발

## ADK 에이전트 개발 패턴

### 스킬 구현 구조
```javascript
// skills/example-skill.js
module.exports = {
  name: 'example-skill',
  description: '스킬 설명',
  parameters: {
    type: 'object',
    properties: {
      input: { type: 'string', description: '입력 파라미터' }
    },
    required: ['input']
  },
  execute: async (params) => {
    // 스킬 로직 구현
    return { result: 'success' };
  }
};
```

### manifest.json 구조
```json
{
  "name": "agent-name",
  "version": "1.0.0",
  "description": "에이전트 설명",
  "skills": [
    {
      "name": "skill-name",
      "file": "skills/skill-name.js"
    }
  ],
  "dependencies": {}
}
```

## 개발 워크플로우

1. **에이전트 생성**
   ```bash
   wxo-adk create agent <agent-name>
   cd <agent-name>
   ```

2. **스킬 개발**
   - `skills/` 디렉토리에 스킬 파일 생성
   - 각 스킬은 독립적인 모듈로 구현
   - manifest.json에 스킬 등록

3. **로컬 테스트**
   ```bash
   wxo-adk dev
   ```

4. **빌드 및 배포**
   ```bash
   wxo-adk build
   wxo-adk deploy
   ```

## 코딩 규칙

### 에러 처리
- 모든 비동기 함수는 try-catch로 감싸기
- 에러 메시지는 명확하고 구체적으로 작성
- 사용자에게 유용한 에러 정보 제공

### 파라미터 검증
- 스킬 실행 전 필수 파라미터 검증
- 타입 체크 및 범위 검증 수행
- 검증 실패 시 명확한 에러 메시지 반환

### 비동기 처리
- async/await 패턴 사용
- Promise 체이닝보다 async/await 선호
- 병렬 처리가 필요한 경우 Promise.all 사용

## 테스트

### 단위 테스트
```bash
wxo-adk test
```

### 통합 테스트
- 로컬 개발 서버에서 전체 플로우 테스트
- watsonx.orchestrate UI에서 실제 동작 확인

## 주의사항
- `.env` 파일의 인증 정보는 절대 코드에 하드코딩하지 않음
- 민감한 정보는 환경 변수로 관리
- 에이전트 버전 관리 철저히 수행