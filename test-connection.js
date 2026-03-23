/**
 * watsonx.orchestrate 인스턴스 연결 테스트
 * .env 파일의 설정을 사용하여 API 연결을 확인합니다.
 */

require('dotenv').config();

const https = require('https');
const url = require('url');

const WO_INSTANCE = process.env.WO_INSTANCE;
const WO_API_KEY = process.env.WO_API_KEY;

if (!WO_INSTANCE || !WO_API_KEY) {
  console.error('❌ 환경 변수가 설정되지 않았습니다.');
  console.error('WO_INSTANCE:', WO_INSTANCE ? '✓' : '✗');
  console.error('WO_API_KEY:', WO_API_KEY ? '✓' : '✗');
  process.exit(1);
}

console.log('🔍 watsonx.orchestrate 연결 테스트 시작...');
console.log('Instance:', WO_INSTANCE);
console.log('API Key:', WO_API_KEY.substring(0, 10) + '...');

const parsedUrl = url.parse(WO_INSTANCE);
const options = {
  hostname: parsedUrl.hostname,
  port: 443,
  path: parsedUrl.path || '/',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${WO_API_KEY}`,
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, (res) => {
  console.log('\n📡 응답 상태:', res.statusCode);
  console.log('응답 헤더:', JSON.stringify(res.headers, null, 2));
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 401 || res.statusCode === 403) {
      console.log('\n✅ 인스턴스 연결 성공!');
      if (res.statusCode === 401 || res.statusCode === 403) {
        console.log('⚠️  인증 오류: API Key를 확인해주세요.');
      }
    } else {
      console.log('\n⚠️  예상치 못한 응답:', res.statusCode);
    }
    
    if (data) {
      console.log('\n응답 데이터:', data.substring(0, 500));
    }
  });
});

req.on('error', (error) => {
  console.error('\n❌ 연결 실패:', error.message);
  process.exit(1);
});

req.end();

// Made with Bob
