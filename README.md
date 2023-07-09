# My Fluffy Paws
고양이와 강아지에 특화된 소셜미디어  
집사들이 고양이와 강아지의 프로필을 꾸미고 사진을 올리며  
사료나 간식, 기타 용품들에 대한 정보를 공유할 수 있는 서비스  
  
# 구현해야 될 사항
회원가입, 로그인  
프로필 페이지 (프로필 사진, 좋아하는 사료, 좋아하는 간식 등)  
업적 (회원가입, 게시글 10개 달성, 댓글 10개 달성, 가입일 100일 달성 등)  
사진 업로드 (AWS S3 사용)  
댓글  
해시태그  

# 해야 할 일
- ~~프론트엔드 기본 구조 구축~~
  - ~~라이브러리 선정 및 npm 패키지 설치~~
  - ~~웹팩, 바벨 설정~~
  - ~~디렉토리 구조 및 기본 파일 생성~~
- 백엔드 기본 구조 구축
  - ~~라이브러리 선정 및 npm 패키지 설치~~
  - ~~디렉토리 구조 및 기본 파일 생성~~
- DB 생성
  - Amazon RDS, Clever Cloud, Google Cloud SQL 中 택 1
  - DB 스키마 작성
  - Express dbconfig 파일에 DB 관련 설정
- 이미지 업로드 기능 구현
  - AWS S3 연결하기
- 회원가입/로그인 API 만들기
  - 이메일주소 (필수), 비밀번호 (필수), 닉네임 (필수), 프로필 사진 (선택)
  - jsonwebtoken 라이브러리 사용
- 프로필 페이지 API 만들기
  - 닉네임, 프로필 사진, 업적, 좋아하는 사료, 좋아하는 간식 등
- 게시물 API 만들기
  - 사진+글 업로드 기능, 댓글, 해시태그 
- 메인 페이지 만들기
  - 다른 사용자들의 게시물 최신순으로 보여주기
- 회원가입 페이지 만들기
  - 이메일주소 (필수), 비밀번호 (필수), 닉네임 (필수), 프로필 사진 (선택)을 입력하여 가입
- 로그인 페이지 만들기
  - 이메일주소, 비밀번호 입력 폼과 로그인 버튼
- 사용자 페이지 만들기
  - 게시물 리스트 탭과 프로필 탭으로 구현
- 게시물 리스트 탭 만들기
  - 해당 사용자의 게시물만 최신순으로 보여주기
- 프로필 탭 만들기
  - 닉네임, 프로필 사진, 업적, 좋아하는 사료, 좋아하는 간식
- 게시물 상세 페이지 만들기
  - 게시물로 들어가면 사진과 글, 댓글, 해시태그 보여주기
    
# 스택
JavaScript, TypeScript, React, redux-toolkit, StyledComponents, Express, MySQL
