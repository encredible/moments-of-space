export interface ResultType {
  id: string; // MBTI 유형 (예: "ISTJ", "ENFP")
  name: string; // 유형 별칭 (예: "청렴결백한 논리주의자")
  title: string; // 결과 페이지 제목
  description: string; // 유형 상세 설명
  characteristics: string[]; // 주요 특징
  keywords: string[]; // 키워드
  recommendedSpaces: string[]; // 추천 공간/활동
  imagePath: string; // 대표 이미지 경로 (예: '/images/results/istj.png') - 실제 이미지 준비 필요
  colorTheme: { // Tailwind CSS 클래스 사용
    background: string; 
    text: string;
    accent: string; 
  };
}

const resultsData: ResultType[] = [
  // ISTJ - 청렴결백한 논리주의자
  {
    id: 'ISTJ',
    name: '청렴결백한 논리주의자',
    title: '당신은 현실적이고 책임감 강한 ISTJ!',
    description: 'ISTJ는 실제적이고 논리적인 사고를 바탕으로 한번 시작한 일은 끝까지 해내는 책임감 있는 유형입니다. 전통과 질서를 중시하며, 세부 사항에 주의를 기울여 꼼꼼하게 일을 처리합니다. 조용하고 신중하지만, 자신이 옳다고 믿는 일에는 강한 의지를 보입니다.',
    characteristics: [
      '현실적이고 실용적임',
      '책임감이 강하고 성실함',
      '세부 사항에 꼼꼼함',
      '전통과 규칙을 중시함',
      '조용하고 신중함',
    ],
    keywords: ['논리', '책임감', '현실주의', '꼼꼼함', '전통', '질서'],
    recommendedSpaces: [
      '깔끔하게 정돈된 서재나 작업 공간',
      '전통적인 디자인의 안정감 있는 가구',
      '자신만의 규칙과 루틴을 지킬 수 있는 조용한 공간',
      '역사적인 건축물이나 박물관',
    ],
    imagePath: '/images/results/istj.svg',
    colorTheme: {
      background: 'bg-slate-100',
      text: 'text-slate-700',
      accent: 'bg-slate-500',
    },
  },
  // ENFP - 재기발랄한 활동가
  {
    id: 'ENFP',
    name: '재기발랄한 활동가',
    title: '당신은 열정적이고 창의적인 ENFP!',
    description: 'ENFP는 따뜻하고 열정적이며 상상력이 풍부한 유형입니다. 새로운 가능성을 탐색하고 사람들과의 관계를 중요하게 생각합니다. 창의적인 아이디어가 넘치며, 긍정적이고 낙천적인 태도로 주변에 활기를 불어넣습니다.',
    characteristics: [
      '열정적이고 활기참',
      '상상력과 창의력이 풍부함',
      '사람들과의 관계를 중시함',
      '새로운 가능성을 탐색하는 것을 좋아함',
      '긍정적이고 낙천적임',
    ],
    keywords: ['열정', '창의성', '사교성', '낙천주의', '새로움', '영감'],
    recommendedSpaces: [
      '다채로운 색상과 독특한 소품으로 꾸며진 창의적인 공간',
      '사람들과 자유롭게 아이디어를 나눌 수 있는 개방적인 카페나 스튜디오',
      '새로운 경험을 할 수 있는 여행지나 문화 공간',
      '자연 채광이 잘 드는 밝고 통풍이 잘 되는 곳',
    ],
    imagePath: '/images/results/enfp.svg',
    colorTheme: {
      background: 'bg-amber-50',
      text: 'text-amber-700',
      accent: 'bg-orange-500',
    },
  },
  // INTP - 논리적인 사색가
  {
    id: 'INTP',
    name: '논리적인 사색가',
    title: '당신은 지적 호기심이 왕성한 INTP!',
    description: 'INTP는 조용하고 과묵하지만 논리적이고 분석적인 사고 능력이 뛰어난 유형입니다. 지적 호기심이 강하며, 복잡한 문제를 해결하고 새로운 아이디어를 탐구하는 것을 즐깁니다. 독립적이고 비판적인 시각을 가지고 있습니다.',
    characteristics: [
      '논리적이고 분석적임',
      '지적 호기심이 강함',
      '독립적이고 자율성을 중시함',
      '복잡한 문제 해결을 즐김',
      '비판적인 시각을 가짐',
    ],
    keywords: ['논리', '분석', '지적호기심', '독립성', '아이디어', '탐구'],
    recommendedSpaces: [
      '조용히 사색하거나 연구에 몰두할 수 있는 개인적인 공간',
      '최신 기술이나 과학 관련 서적이 가득한 도서관',
      '미니멀하고 기능적인 디자인의 작업실',
      '복잡한 퍼즐이나 전략 게임을 즐길 수 있는 공간',
    ],
    imagePath: '/images/results/intp.svg',
    colorTheme: {
      background: 'bg-indigo-50',
      text: 'text-indigo-700',
      accent: 'bg-purple-500',
    },
  },
  // ESFJ - 사교적인 외교관
  {
    id: 'ESFJ',
    name: '사교적인 외교관',
    title: '당신은 따뜻하고 친절한 ESFJ!',
    description: 'ESFJ는 사교적이고 친절하며 다른 사람들을 돕는 것을 좋아하는 유형입니다. 주변 사람들에게 관심이 많고, 조화로운 관계를 중요하게 생각합니다. 책임감이 강하고 성실하며, 다른 사람들의 필요를 잘 파악하고 배려합니다.',
    characteristics: [
      '사교적이고 친절함',
      '다른 사람들을 돕는 것을 좋아함',
      '조화로운 관계를 중시함',
      '책임감이 강하고 성실함',
      '타인의 필요에 민감함',
    ],
    keywords: ['사교성', '친절', '협력', '봉사', '조화', '배려'],
    recommendedSpaces: [
      '가족이나 친구들과 함께 시간을 보낼 수 있는 아늑한 거실',
      '커뮤니티 활동이나 모임을 위한 편안한 공간',
      '따뜻한 색감과 부드러운 조명이 있는 환대하는 분위기의 공간',
      '정원 가꾸기나 요리 등 다른 사람과 함께 즐길 수 있는 취미 공간',
    ],
    imagePath: '/images/results/esfj.svg',
    colorTheme: {
      background: 'bg-pink-50',
      text: 'text-pink-700',
      accent: 'bg-rose-500',
    },
  },
  // ISFJ - 용감한 수호자
  {
    id: 'ISFJ',
    name: '용감한 수호자',
    title: '헌신적이고 따뜻한 마음을 가진 ISFJ!',
    description: 'ISFJ는 조용하고 차분하며, 다른 사람들에게 헌신적인 유형입니다. 책임감이 강하고 성실하며, 전통과 안정성을 중요하게 생각합니다. 주변 사람들의 감정에 민감하며, 따뜻한 마음으로 타인을 배려하고 돕는 것을 좋아합니다.',
    characteristics: ['헌신적이고 책임감 강함', '타인에게 매우 세심함', '전통과 안정을 중시함', '실용적이고 현실적임', '겸손하고 인내심이 많음'],
    keywords: ['헌신', '안정', '배려', '책임감', '전통', '세심함'],
    recommendedSpaces: ['아늑하고 편안한 분위기의 집', '가족사진이나 추억이 담긴 물건으로 꾸며진 공간', '정원 가꾸기나 베이킹을 할 수 있는 주방', '봉사활동을 할 수 있는 커뮤니티 센터'],
    imagePath: '/images/results/isfj.svg',
    colorTheme: { background: 'bg-emerald-50', text: 'text-emerald-700', accent: 'bg-emerald-500' },
  },
  // INFJ - 선의의 옹호자
  {
    id: 'INFJ',
    name: '선의의 옹호자',
    title: '깊은 통찰력과 이상을 추구하는 INFJ!',
    description: 'INFJ는 깊은 통찰력과 강한 직관력을 가진 유형입니다. 이상주의적이며, 세상을 더 나은 곳으로 만들고자 하는 열망이 강합니다. 조용하고 신중하지만, 자신의 신념을 위해서는 단호하게 행동합니다. 타인의 감정을 잘 이해하고 공감합니다.',
    characteristics: ['통찰력과 직관력이 뛰어남', '이상주의적이며 신념이 강함', '타인에 대한 공감 능력이 높음', '창의적이고 영감을 줌', '조용하지만 단호함'],
    keywords: ['이상', '통찰', '공감', '신념', '창의성', '헌신'],
    recommendedSpaces: ['조용히 명상하거나 글을 쓸 수 있는 서재', '예술 작품이나 의미 있는 물건들로 채워진 공간', '자연 속에서 영감을 얻을 수 있는 장소', '소수의 사람들과 깊은 대화를 나눌 수 있는 아늑한 카페'],
    imagePath: '/images/results/infj.svg',
    colorTheme: { background: 'bg-teal-50', text: 'text-teal-700', accent: 'bg-teal-500' },
  },
  // INTJ - 용의주도한 전략가
  {
    id: 'INTJ',
    name: '용의주도한 전략가',
    title: '독립적이고 비전을 가진 전략가 INTJ!',
    description: 'INTJ는 독립적이고 분석적인 사고를 하는 전략가 유형입니다. 장기적인 비전을 가지고 있으며, 복잡한 문제를 해결하는 데 뛰어난 능력을 보입니다. 지식을 중요하게 생각하고, 효율성과 논리를 추구합니다. 겉으로는 차가워 보일 수 있지만, 내면에는 강한 열정과 헌신을 가지고 있습니다.',
    characteristics: ['전략적이고 논리적임', '독립적이고 자기 주도적임', '비판적 사고 능력이 뛰어남', '미래 지향적이며 비전을 가짐', '지식과 역량 향상을 추구함'],
    keywords: ['전략', '비전', '논리', '독립', '지식', '효율성'],
    recommendedSpaces: ['최신 기술과 정보가 있는 첨단 연구실', '미니멀하고 기능적인 개인 사무 공간', '전략 보드게임이나 체스를 즐길 수 있는 방', '미래 도시나 우주 관련 전시관'],
    imagePath: '/images/results/intj.svg',
    colorTheme: { background: 'bg-sky-100', text: 'text-sky-700', accent: 'bg-sky-600' },
  },
  // ISTP - 만능 재주꾼
  {
    id: 'ISTP',
    name: '만능 재주꾼',
    title: '상황 대처 능력이 뛰어난 재주꾼 ISTP!',
    description: 'ISTP는 논리적이고 실용적인 문제 해결사입니다. 손재주가 뛰어나고, 도구를 다루거나 기계를 조작하는 데 능숙합니다. 위기 상황에서도 침착하게 대처하며, 자유롭고 즉흥적인 삶을 선호합니다. 관찰력이 뛰어나고, 효율적인 해결책을 찾는 것을 즐깁니다.',
    characteristics: ['논리적이고 실용적임', '손재주가 뛰어나고 도구를 잘 다룸', '위기 대처 능력이 뛰어남', '자유롭고 즉흥적인 것을 선호함', '관찰력이 예리함'],
    keywords: ['실용', '기술', '자유', '모험', '문제해결', '효율'],
    recommendedSpaces: ['각종 공구와 장비가 갖춰진 작업실이나 차고', '익스트림 스포츠나 아웃도어 활동을 즐길 수 있는 자연', '오토바이나 자동차 정비소', '새로운 기술을 실험해볼 수 있는 메이커 스페이스'],
    imagePath: '/images/results/istp.svg',
    colorTheme: { background: 'bg-neutral-100', text: 'text-neutral-700', accent: 'bg-neutral-500' },
  },
  // ISFP - 호기심 많은 예술가
  {
    id: 'ISFP',
    name: '호기심 많은 예술가',
    title: '따뜻한 감성과 예술적 재능을 가진 ISFP!',
    description: 'ISFP는 온화하고 겸손하며, 현재를 즐기는 예술가 유형입니다. 아름다움과 조화를 중시하며, 뛰어난 미적 감각을 가지고 있습니다. 타인에게 친절하고 관대하며, 자유로운 환경에서 자신의 개성을 표현하는 것을 좋아합니다. 새로운 경험에 열려 있습니다.',
    characteristics: ['온화하고 겸손함', '미적 감각이 뛰어나고 예술적임', '현재를 즐기며 즉흥적임', '타인에게 친절하고 관대함', '자유로운 환경을 선호함'],
    keywords: ['예술', '자유', '조화', '현재', '감성', '친절'],
    recommendedSpaces: ['자연 채광이 좋은 아틀리에나 작업 공간', '아름다운 풍경을 감상할 수 있는 자연 속 쉼터', '다양한 질감과 색상의 소재로 꾸며진 편안한 집', '라이브 음악을 즐길 수 있는 소규모 공연장'],
    imagePath: '/images/results/isfp.svg',
    colorTheme: { background: 'bg-lime-50', text: 'text-lime-700', accent: 'bg-lime-500' },
  },
  // INFP - 열정적인 중재자
  {
    id: 'INFP',
    name: '열정적인 중재자',
    title: '이상과 가치를 소중히 여기는 중재자 INFP!',
    description: 'INFP는 이상주의적이고 진실하며, 자신의 가치와 신념에 따라 살아가는 유형입니다. 타인의 감정에 깊이 공감하며, 조화로운 관계를 추구합니다. 창의적이고 상상력이 풍부하며, 세상을 더 나은 곳으로 만들고자 하는 열망을 가지고 있습니다.',
    characteristics: ['이상주의적이고 진실함', '깊은 공감 능력과 이해심', '창의적이고 상상력이 풍부함', '자신의 가치와 신념을 중시함', '조용하지만 내면에 열정을 가짐'],
    keywords: ['이상', '가치', '공감', '창의성', '진실', '중재'],
    recommendedSpaces: ['자신만의 생각과 감정을 표현할 수 있는 조용한 공간', '영감을 주는 책과 예술 작품으로 가득한 서재', '동물이나 자연과 교감할 수 있는 장소', '소규모 자선 단체나 커뮤니티 활동 공간'],
    imagePath: '/images/results/infp.svg',
    colorTheme: { background: 'bg-cyan-50', text: 'text-cyan-700', accent: 'bg-cyan-500' },
  },
  // ESTP - 모험을 즐기는 사업가
  {
    id: 'ESTP',
    name: '모험을 즐기는 사업가',
    title: '에너지가 넘치고 도전을 즐기는 ESTP!',
    description: 'ESTP는 사교적이고 활동적이며, 새로운 경험과 도전을 즐기는 유형입니다. 현실적이고 실용적인 문제 해결 능력이 뛰어나며, 위기 상황에서도 뛰어난 순발력을 발휘합니다. 현재를 즐기며, 사람들과 어울리는 것을 좋아합니다.',
    characteristics: ['에너지가 넘치고 활동적임', '새로운 경험과 도전을 즐김', '현실적이고 실용적인 문제 해결 능력', '뛰어난 순발력과 적응력', '사교적이고 유머 감각이 있음'],
    keywords: ['모험', '도전', '에너지', '실용', '사교성', '순발력'],
    recommendedSpaces: ['다양한 액티비티를 즐길 수 있는 스포츠 센터나 야외 공간', '새로운 사업 아이템을 구상할 수 있는 역동적인 코워킹 스페이스', '사람들과 네트워킹할 수 있는 활기찬 파티나 이벤트 장소', '최신 트렌드를 경험할 수 있는 팝업 스토어나 전시회'],
    imagePath: '/images/results/estp.svg',
    colorTheme: { background: 'bg-red-50', text: 'text-red-700', accent: 'bg-red-500' },
  },
  // ESFP - 자유로운 영혼의 연예인
  {
    id: 'ESFP',
    name: '자유로운 영혼의 연예인',
    title: '즐거움과 열정을 전파하는 ESFP!',
    description: 'ESFP는 사교적이고 낙천적이며, 주변 사람들에게 즐거움을 선사하는 유형입니다. 현재를 즐기며, 새로운 사람들과 경험에 개방적입니다. 뛰어난 유머 감각과 표현력을 가지고 있으며, 사람들의 주목을 받는 것을 즐깁니다.',
    characteristics: ['사교적이고 낙천적임', '주변에 즐거움을 선사함', '현재를 즐기며 즉흥적임', '뛰어난 유머 감각과 표현력', '새로운 사람과 경험에 개방적임'],
    keywords: ['즐거움', '사교성', '낙천주의', '표현력', '즉흥성', '열정'],
    recommendedSpaces: ['화려한 조명과 음악이 있는 파티 공간이나 클럽', '다양한 사람들과 어울릴 수 있는 축제나 이벤트 현장', '자신의 끼를 발산할 수 있는 무대나 공연장', '트렌디한 패션 아이템이나 소품으로 가득한 쇼핑몰'],
    imagePath: '/images/results/esfp.svg',
    colorTheme: { background: 'bg-yellow-50', text: 'text-yellow-700', accent: 'bg-yellow-500' },
  },
  // ENTP - 뜨거운 논쟁을 즐기는 변론가
  {
    id: 'ENTP',
    name: '뜨거운 논쟁을 즐기는 변론가',
    title: '지적 자극과 논쟁을 즐기는 ENTP!',
    description: 'ENTP는 독창적이고 재치 있으며, 지적인 논쟁을 즐기는 유형입니다. 새로운 아이디어를 탐구하고 기존의 방식에 도전하는 것을 좋아합니다. 빠른 두뇌 회전과 뛰어난 언변을 가지고 있으며, 복잡한 문제를 해결하는 데 능숙합니다.',
    characteristics: ['독창적이고 재치 있음', '지적인 논쟁과 토론을 즐김', '새로운 아이디어 탐구를 좋아함', '기존 방식에 도전하는 것을 두려워하지 않음', '빠른 두뇌 회전과 뛰어난 언변'],
    keywords: ['논쟁', '아이디어', '혁신', '지적호기심', '도전', '재치'],
    recommendedSpaces: ['다양한 의견을 교환할 수 있는 토론 그룹이나 세미나', '새로운 아이디어를 실험하고 프로토타입을 만들 수 있는 혁신 랩', '지적인 자극을 주는 서점이나 강연장', '브레인스토밍을 위한 개방적이고 유연한 사무 공간'],
    imagePath: '/images/results/entp.svg',
    colorTheme: { background: 'bg-purple-50', text: 'text-purple-700', accent: 'bg-purple-600' },
  },
  // ENTJ - 대담한 통솔자
  {
    id: 'ENTJ',
    name: '대담한 통솔자',
    title: '결단력과 리더십을 갖춘 ENTJ!',
    description: 'ENTJ는 타고난 리더십과 결단력을 가진 유형입니다. 목표 지향적이며, 효율적인 방식으로 계획을 실행합니다. 전략적 사고 능력이 뛰어나며, 복잡한 시스템을 이해하고 개선하는 데 능숙합니다. 자신감 있고 카리스마 넘치는 모습을 보입니다.',
    characteristics: ['타고난 리더십과 결단력', '목표 지향적이고 효율적임', '전략적 사고 능력이 뛰어남', '자신감 있고 카리스마 넘침', '복잡한 시스템을 이해하고 개선함'],
    keywords: ['리더십', '결단력', '전략', '효율성', '목표', '자신감'],
    recommendedSpaces: ['중요한 결정을 내리고 팀을 이끌 수 있는 회의실이나 사무실', '첨단 기술과 효율적인 시스템이 갖춰진 스마트 오피스', '리더십 관련 서적이나 강연을 접할 수 있는 공간', '도시의 스카이라운지나 전망 좋은 곳에서 미래를 계획하는 장소'],
    imagePath: '/images/results/entj.svg',
    colorTheme: { background: 'bg-blue-100', text: 'text-blue-800', accent: 'bg-blue-600' },
  },
  // ESTJ - 엄격한 관리자
  {
    id: 'ESTJ',
    name: '엄격한 관리자',
    title: '체계적이고 질서를 중시하는 ESTJ!',
    description: 'ESTJ는 현실적이고 실용적이며, 조직과 질서를 중요하게 생각하는 유형입니다. 책임감이 강하고 결단력이 있으며, 일을 효율적으로 처리합니다. 전통과 규칙을 존중하며, 명확한 기준과 절차에 따라 행동하는 것을 선호합니다.',
    characteristics: ['현실적이고 실용적임', '조직과 질서를 중요하게 생각함', '책임감이 강하고 결단력이 있음', '효율적으로 일을 처리함', '전통과 규칙을 존중함'],
    keywords: ['관리', '질서', '효율', '책임감', '현실주의', '전통'],
    recommendedSpaces: ['깔끔하게 정리정돈된 사무 공간이나 서재', '체계적인 시스템과 명확한 규칙이 있는 환경', '전통적인 가치와 역사를 느낄 수 있는 장소', '커뮤니티 프로젝트나 조직을 운영하는 회의실'],
    imagePath: '/images/results/estj.svg',
    colorTheme: { background: 'bg-orange-100', text: 'text-orange-800', accent: 'bg-orange-600' },
  },
  // ENFJ - 정의로운 사회운동가
  {
    id: 'ENFJ',
    name: '정의로운 사회운동가',
    title: '타인에게 영감을 주고 이끄는 ENFJ!',
    description: 'ENFJ는 카리스마 있고 열정적이며, 다른 사람들에게 긍정적인 영향을 미치는 것을 중요하게 생각합니다. 타인의 잠재력을 발견하고 성장하도록 돕는 데 능숙하며, 뛰어난 공감 능력과 소통 능력을 가지고 있습니다. 이상을 추구하며, 세상을 더 나은 곳으로 만들고자 노력합니다.',
    characteristics: ['카리스마 있고 열정적임', '타인에게 긍정적인 영향을 줌', '타인의 잠재력을 발견하고 성장시킴', '뛰어난 공감 능력과 소통 능력', '이상을 추구하며 세상을 변화시키려 함'],
    keywords: ['영감', '리더십', '공감', '소통', '열정', '사회운동'],
    recommendedSpaces: ['사람들에게 영감을 주는 강연장이나 세미나실', '팀원들과 협력하여 프로젝트를 진행할 수 있는 개방적인 공간', '자원봉사나 사회 운동을 위한 커뮤니티 센터', '따뜻하고 지지적인 분위기의 상담 공간'],
    imagePath: '/images/results/enfj.svg',
    colorTheme: { background: 'bg-green-50', text: 'text-green-700', accent: 'bg-green-500' },
  },
];

export default resultsData;
