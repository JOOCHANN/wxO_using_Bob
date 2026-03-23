# watsonx.orchestrate ADK - Advance Mode 가이드

## Advance 모드 특징
- MCP 및 Browser 도구 사용 가능
- 외부 API 및 서비스 통합
- 복잡한 워크플로우 구현
- 고급 에이전트 기능 개발

## MCP (Model Context Protocol) 통합

### MCP 서버 연결
```javascript
// MCP 서버와의 통신 예제
const mcpClient = require('@ibm/wxo-mcp-client');

async function connectToMCP() {
  const client = new mcpClient.MCPClient({
    endpoint: process.env.MCP_ENDPOINT,
    apiKey: process.env.MCP_API_KEY
  });
  
  await client.connect();
  return client;
}
```

### 외부 API 통합
```javascript
// skills/api-integration-skill.js
const axios = require('axios');

module.exports = {
  name: 'api-integration',
  description: '외부 API 호출 스킬',
  parameters: {
    type: 'object',
    properties: {
      endpoint: { type: 'string', description: 'API 엔드포인트' },
      method: { type: 'string', enum: ['GET', 'POST', 'PUT', 'DELETE'] },
      data: { type: 'object', description: '요청 데이터' }
    },
    required: ['endpoint', 'method']
  },
  execute: async (params) => {
    try {
      const response = await axios({
        method: params.method,
        url: params.endpoint,
        data: params.data,
        timeout: 30000
      });
      
      return {
        success: true,
        data: response.data,
        status: response.status
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        status: error.response?.status
      };
    }
  }
};
```

## Browser 자동화

### Puppeteer 통합
```javascript
// skills/web-scraping-skill.js
const puppeteer = require('puppeteer');

module.exports = {
  name: 'web-scraping',
  description: '웹 페이지 스크래핑',
  parameters: {
    type: 'object',
    properties: {
      url: { type: 'string', description: '대상 URL' },
      selector: { type: 'string', description: 'CSS 선택자' }
    },
    required: ['url', 'selector']
  },
  execute: async (params) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    try {
      await page.goto(params.url, { waitUntil: 'networkidle2' });
      const content = await page.$eval(params.selector, el => el.textContent);
      
      return { success: true, content };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      await browser.close();
    }
  }
};
```

## 복잡한 워크플로우

### 다단계 프로세스 구현
```javascript
// skills/workflow-skill.js
module.exports = {
  name: 'complex-workflow',
  description: '다단계 워크플로우 실행',
  execute: async (params) => {
    const results = [];
    
    // Step 1: 데이터 수집
    const data = await collectData(params.source);
    results.push({ step: 'collect', status: 'success', data });
    
    // Step 2: 데이터 처리
    const processed = await processData(data);
    results.push({ step: 'process', status: 'success', data: processed });
    
    // Step 3: 결과 저장
    await saveResults(processed);
    results.push({ step: 'save', status: 'success' });
    
    return { success: true, workflow: results };
  }
};
```

## 고급 기능

### 상태 관리
- 에이전트 세션 상태 유지
- 컨텍스트 정보 저장 및 활용
- 멀티턴 대화 지원

### 에러 복구
- 자동 재시도 메커니즘
- Fallback 전략 구현
- 부분 실패 처리

### 성능 최적화
- 캐싱 전략 적용
- 병렬 처리 활용
- 리소스 풀링

## 보안 고려사항
- API 키 및 인증 정보 안전한 관리
- 입력 데이터 검증 및 sanitization
- Rate limiting 구현
- HTTPS 통신 강제

## 테스트 전략
- 단위 테스트: 개별 스킬 테스트
- 통합 테스트: 전체 워크플로우 테스트
- E2E 테스트: 실제 환경에서의 동작 확인
- 부하 테스트: 성능 및 확장성 검증