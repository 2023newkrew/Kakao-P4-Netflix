# Kakao-P4-Netflix

---
<h2>프로젝트 개요</h2>
React 사용법을 익히기 위한 프로젝트입니다.

---

<h2>실행 안내</h2>

[필수] `./react-netflix-app/` 내부에 들어가서 명령어를 입력해주세요.

1. 설치
```
npm install / yarn install
```

2. 빌드
```
npm run build / yarn run build
```

3. 로컬 서버 구동
```
npm start / yarn start
```
<br>

---

<br>
<h2>alias 설정 안내</h2>

- tsconfig.paths.json 내에 기술되어있습니다.

|이름|경로|설명|
|---|---|------|
|@apis|/src/apis|비동기 통신 관련 폴더|
|@assets|/src/assets|사진 등의 에셋 폴더|
|@components|/src/components|컴포넌트 모음|
|@hooks|/src/hooks|커스텀 훅 모음|
|@models|/src/models|2번 이상 사용되는 타입 모음|
|@pages|/src/pages|페이지 모음 (next 방식의 폴더 구성)|
|@recoil|/src/recoil|전역상태변수 모음|
|@utils|/src/utils|순수함수 모음|

---

<h2>Code Convention</h2>

```
#   Component : Pascal Case
#   Function  : camelCase
#   Variables : camelCase
```

---

<h2>Commit Message Convention</h2>

```
#   init    : 초기화
#   feat    : 기능 추가
#   fix     : 버그
#   style   : 스타일
#   docs    : 문서
#   test    : 테스트
#   chore   : 기타
```