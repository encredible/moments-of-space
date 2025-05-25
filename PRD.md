# 개인용 사이트 PRD (Product Requirements Document)

## 📋 프로젝트 개요

### 목적
미니멀한 디자인의 개인용 포트폴리오 사이트 구축으로 서비스 소개 및 프로젝트 포트폴리오 전시

### 기술 스택
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: EmailJS
- **Animation**: Framer Motion (선택사항)

### 디자인 컨셉
- **스타일**: 미니멀, 깔끔한 디자인
- **반응형**: 모바일, 태블릿, 데스크탑 대응
- **최대 폭**: 데스크탑 1200px 제한
- **색상**: 중성적이고 전문적인 색상 팔레트

## 🎯 타겟 디바이스 & 브레이크포인트

```javascript
screens: {
  'sm': '640px',   // 모바일
  'md': '768px',   // 태블릿  
  'lg': '1024px',  // 데스크탑
  'xl': '1200px',  // 최대 폭
}
```

## 📱 페이지 구성 및 기능 명세

### 1. Home 페이지
**참고**: [Styled & Staged 메인 페이지](https://www.styledandstaged.com.au/)

#### 디자인 요소
- **Hero Section**: 
  - 대형 배경 이미지 또는 그라디언트
  - 임팩트 있는 헤드라인 텍스트
  - 간단한 소개 문구
  - CTA 버튼 (Services로 이동)

- **Services Preview**:
  - 3-4개 주요 서비스 카드 형태로 미리보기
  - 각 카드 클릭 시 Services 페이지로 이동
  - 아이콘 + 제목 + 간단한 설명

- **Featured Projects**:
  - 최신 또는 주요 프로젝트 2-3개 showcase
  - 이미지 갤러리 형태
  - 호버 시 프로젝트 제목 및 간단한 설명 표시

- **Testimonials** (선택사항):
  - 클라이언트 후기 슬라이더
  - 간단한 텍스트 + 클라이언트 이름

- **CTA Section**:
  - Contact 페이지로 유도하는 섹션
  - "Ready to transform your space?" 스타일의 메시지

#### 기능
- 스크롤 애니메이션 (Intersection Observer)
- 반응형 이미지 갤러리
- 부드러운 페이지 전환

### 2. Services 페이지
**참고**: [Styled & Staged Services](https://www.styledandstaged.com.au/services)

#### 디자인 요소
- **페이지 헤더**:
  - 서비스 소개 헤드라인
  - 서브타이틀로 가치 제안

- **서비스 카드 그리드**:
  - 각 서비스별 상세 카드
  - 가격 정보 (해당되는 경우)
  - 포함 사항 리스트
  - "Contact me for more information" CTA

- **서비스 프로세스**:
  - 단계별 작업 프로세스 설명
  - 타임라인 또는 스텝 형태로 시각화

#### 기능
- 서비스별 필터링 (선택사항)
- 가격 계산기 (선택사항)
- 각 서비스 상세 모달 또는 확장 섹션

### 3. Inclusions 페이지
**참고**: [Styled & Staged Inclusions](https://www.styledandstaged.com.au/inclusions)

#### 디자인 요소
- **상세 설명 섹션**:
  - 각 서비스에 포함되는 항목들의 상세 설명
  - 체크리스트 형태의 포함 사항
  - 시각적 아이콘과 함께 표시

- **비교 테이블**:
  - 다양한 패키지 비교표
  - 기능별 포함/미포함 표시

- **FAQ 섹션**:
  - 자주 묻는 질문들
  - 아코디언 형태로 구현

#### 기능
- 확장/축소 가능한 상세 설명
- 패키지 비교 기능
- FAQ 검색 기능

### 4. Projects 페이지
**참고**: Styled & Staged의 프로젝트 드롭다운 메뉴 구조

#### 네비게이션 기능
- **데스크탑**: 호버 시 드롭다운 메뉴
- **모바일/태블릿**: 클릭 시 서브메뉴 확장

#### 디자인 요소
- **프로젝트 그리드**:
  - 마소니 레이아웃 또는 그리드 레이아웃
  - 프로젝트 썸네일 이미지
  - 호버 시 프로젝트 정보 오버레이

- **프로젝트 상세 페이지**:
  - 이미지 갤러리
  - 프로젝트 설명
  - 사용된 기술/도구
  - 클라이언트 정보 (해당되는 경우)

#### 기능
- 카테고리별 필터링
- 이미지 라이트박스
- 이전/다음 프로젝트 네비게이션

### 5. About 페이지

#### 디자인 요소
- **개인 소개 섹션**:
  - 프로필 이미지
  - 개인 스토리 및 경력
  - 전문성 및 강점

- **스킬 & 경험**:
  - 기술 스택 시각화
  - 경력 타임라인
  - 자격증 및 수상 경력

- **개인적인 터치**:
  - 취미 및 관심사
  - 개인 철학 또는 가치관

#### 기능
- 인터랙티브 스킬 차트
- 경력 타임라인 애니메이션

### 6. Contact 페이지
**참고**: Styled & Staged Contact 페이지 구조

#### 디자인 요소
- **연락처 폼**:
  - 이름 (필수)
  - 이메일 (필수)
  - 전화번호 (선택)
  - 메시지 (필수)
  - Submit 버튼

- **연락처 정보**:
  - 이메일 주소
  - 전화번호
  - 소셜 미디어 링크

- **응답 시간 안내**:
  - 일반적인 응답 시간
  - 긴급 연락 방법

#### 기능
- 폼 유효성 검사
- 이메일 전송 (EmailJS 사용)
- 전송 완료 확인 메시지
- 에러 핸들링

## 🎨 네비게이션 시스템

### 레이아웃 구성
- **좌측**: 로고 영역 (브랜드 로고 또는 사이트 제목)
- **우측**: 네비게이션 메뉴

### 동작 방식
1. **모든 페이지 공통**:
   - 어두운 배경의 네비게이션 바
   - 밝은 색상의 메뉴 텍스트
   - 현재 페이지는 강조 색상 또는 밑줄로 표시
   - 로고는 항상 Home 페이지로 링크

### Projects 메뉴 특별 기능
- **데스크탑**: 호버 시 드롭다운
- **모바일/태블릿**: 클릭 시 확장

### 반응형 동작
- **데스크탑**: 로고 + 가로 메뉴
- **모바일**: 로고 + 햄버거 메뉴 (클릭 시 전체 화면 오버레이)

## 🎨 디자인 시스템

### 색상 팔레트
```css
:root {
  /* Primary Colors */
  --color-primary-50: #f8fafc;
  --color-primary-100: #f1f5f9;
  --color-primary-500: #64748b;
  --color-primary-900: #0f172a;
  
  /* Accent Colors */
  --color-accent-500: #3b82f6;
  
  /* Background Colors */
  --bg-light: #ffffff;
  --bg-dark: #0f172a;
}
```

### 타이포그래피
- **헤딩**: Inter 또는 Poppins
- **본문**: Inter 또는 System UI
- **크기**: 반응형 텍스트 크기 적용

### 컴포넌트
- **버튼**: 미니멀한 스타일, 호버 효과
- **카드**: 그림자 효과, 둥근 모서리
- **폼**: 깔끔한 인풋 필드, 명확한 라벨

## 📁 프로젝트 구조

```
momentsOfSpace/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── services/page.tsx
│   │   ├── inclusions/page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── lib/
│   └── styles/
├── public/
│   ├── images/
│   └── icons/
└── config files
```

## 🚀 개발 단계

### Phase 1: 기본 설정
- [ ] Next.js 프로젝트 초기화
- [ ] Tailwind CSS 설정
- [ ] 기본 레이아웃 구성

### Phase 2: 네비게이션 & 레이아웃
- [ ] 반응형 네비게이션 바
- [ ] 페이지별 네비게이션 상태 관리
- [ ] Projects 드롭다운 메뉴

### Phase 3: 페이지 구현
- [ ] Home 페이지
- [ ] Services 페이지
- [ ] Inclusions 페이지
- [ ] About 페이지
- [ ] Contact 페이지

### Phase 4: Projects 시스템
- [ ] Projects 목록 페이지
- [ ] 개별 프로젝트 상세 페이지
- [ ] 이미지 갤러리 구현

### Phase 5: 기능 구현
- [ ] Contact 폼 이메일 전송
- [ ] 반응형 최적화
- [ ] 성능 최적화

### Phase 6: 마무리
- [ ] SEO 최적화
- [ ] 접근성 개선
- [ ] 테스트 및 배포

## 📊 성능 목표

- **Lighthouse Score**: 90+ (모든 항목)
- **First Contentful Paint**: < 1.5초
- **Largest Contentful Paint**: < 2.5초
- **Cumulative Layout Shift**: < 0.1

## 🔧 기술적 고려사항

### SEO
- Next.js App Router의 메타데이터 API 활용
- 구조화된 데이터 마크업
- 사이트맵 자동 생성

### 접근성
- WCAG 2.1 AA 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환성

### 성능
- 이미지 최적화 (Next.js Image 컴포넌트)
- 코드 스플리팅
- 지연 로딩 구현 