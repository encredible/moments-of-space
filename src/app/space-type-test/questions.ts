export interface QuestionOption {
  id: string; // 예: 'A', 'B'
  text: string;
  value: 'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'P' | 'J'; // 선택지가 나타내는 MBTI 유형 값
}

export interface Question {
  id: string; // 예: 'q1', 'q2' - 문항 고유 ID
  text: string;
  dimension: 'EI' | 'NS' | 'TF' | 'PJ'; // 문항이 측정하는 MBTI 지표
  options: QuestionOption[];
}

const questions: Question[] = [
  // EI Dimension (1-9)
  {
    id: 'q1',
    dimension: 'EI',
    text: '퇴근 후 집에 도착했을 때 먼저 하는 행동은?',
    options: [
      { id: 'A', text: '책상이나 작업 공간으로 간다', value: 'E' },
      { id: 'B', text: '소파나 침대에 눕는다', value: 'I' },
    ],
  },
  {
    id: 'q2',
    dimension: 'EI',
    text: '새로운 공간을 만든다면 어디에 집중할까?',
    options: [
      { id: 'A', text: '취미 또는 작업 공간', value: 'E' },
      { id: 'B', text: '힐링을 위한 공간', value: 'I' },
    ],
  },
  {
    id: 'q3',
    dimension: 'EI',
    text: '가장 오래 머무는 장소는',
    options: [
      { id: 'A', text: '책상 주변', value: 'E' },
      { id: 'B', text: '침대나 소파 근처', value: 'I' },
    ],
  },
  {
    id: 'q4',
    dimension: 'EI',
    text: '두 가구 중 하나를 선택해야 한다면?',
    options: [
      { id: 'A', text: '멀티 테이블이나 책상', value: 'E' },
      { id: 'B', text: '빈백이나 리클라이너', value: 'I' },
    ],
  },
  {
    id: 'q5',
    dimension: 'EI',
    text: '좋아하는 조명은?',
    options: [
      { id: 'A', text: '밝고 실용적인 조명', value: 'E' },
      { id: 'B', text: '부드러운 무드등', value: 'I' },
    ],
  },
  {
    id: 'q6',
    dimension: 'EI',
    text: '친구가 갑자기 방문한다면?',
    options: [
      { id: 'A', text: '차를 마시며 무언가 함께 한다', value: 'E' },
      { id: 'B', text: '나갈 채비를 해서 카페로 간다', value: 'I' },
    ],
  },
  {
    id: 'q7',
    dimension: 'EI',
    text: '작업 공간이 나에게 주는 의미는?',
    options: [
      { id: 'A', text: '성취와 몰입', value: 'E' },
      { id: 'B', text: '피로와 스트레스', value: 'I' },
    ],
  },
  {
    id: 'q8',
    dimension: 'EI',
    text: '홈카페를 연다면 어떤 스타일?',
    options: [
      { id: 'A', text: '손님 맞이와 작업도 가능한 구조', value: 'E' },
      { id: 'B', text: '조용히 나만의 커피 즐기는 공간', value: 'I' },
    ],
  },
  {
    id: 'q9',
    dimension: 'EI',
    text: '선호하는 가구 스타일은?',
    options: [
      { id: 'A', text: '다기능, 활용 중심', value: 'E' },
      { id: 'B', text: '감성, 촉감 중심', value: 'I' },
    ],
  },

  // NS Dimension (10-18)
  {
    id: 'q10',
    dimension: 'NS',
    text: '공간이 마음에 들 때 기준은?',
    options: [
      { id: 'A', text: '기능별로 잘 나눠져 있을 때', value: 'S' },
      { id: 'B', text: '전체적으로 조화로워 보일 때', value: 'N' },
    ],
  },
  {
    id: 'q11',
    dimension: 'NS',
    text: '침실과 서재가 같은 공간일 경우?',
    options: [
      { id: 'A', text: '파티션으로 확실히 구분', value: 'S' },
      { id: 'B', text: '자연스럽게 섞이게 구성', value: 'N' },
    ],
  },
  {
    id: 'q12',
    dimension: 'NS',
    text: '오픈형 선반에 대해?',
    options: [
      { id: 'A', text: '먼지 쌓여 불편, 닫힌 수납이 낫다', value: 'S' },
      { id: 'B', text: '자주 쓰는 건 보여야 편하다', value: 'N' },
    ],
  },
  {
    id: 'q13',
    dimension: 'NS',
    text: '방에 가구를 새로 들인다면?',
    options: [
      { id: 'A', text: '원래 있는 가구와 비율, 구조 고려', value: 'S' },
      { id: 'B', text: '독특해도 조화롭게 배치하고 싶음', value: 'N' },
    ],
  },
  {
    id: 'q14',
    dimension: 'NS',
    text: '인테리어 참고할 때?',
    options: [
      { id: 'A', text: '수납 노하우나 정리법 위주', value: 'S' },
      { id: 'B', text: '감성무드컷이나 전체 공간 흐름 위주', value: 'N' },
    ],
  },
  {
    id: 'q15',
    dimension: 'NS',
    text: '수납장은 어떤 컬러가 좋은가요?',
    options: [
      { id: 'A', text: '화이트나 그레이 계열. 깔끔하게', value: 'S' },
      { id: 'B', text: '우드 계열, 색감 있는 톤도 환영', value: 'N' },
    ],
  },
  {
    id: 'q16',
    dimension: 'NS',
    text: '내 방을 누가 보았을 때',
    options: [
      { id: 'A', text: '정리된 사람 같다고 느낄 것', value: 'S' },
      { id: 'B', text: '분위기 있는 사람 같다고 느낄 것', value: 'N' },
    ],
  },
  {
    id: 'q17',
    dimension: 'NS',
    text: '좋아하는 콘텐츠는?',
    options: [
      { id: 'A', text: 'Before / After 정리 사례', value: 'S' },
      { id: 'B', text: '집주인의 취향과 분위기가 드러나는 영상', value: 'N' },
    ],
  },
  {
    id: 'q18',
    dimension: 'NS',
    text: '침대 옆 협탁 위는?',
    options: [
      { id: 'A', text: '비워두거나 최소한만 놓음', value: 'S' },
      { id: 'B', text: '향초, 책, 소품으로 분위기 완성', value: 'N' },
    ],
  },

  // TF Dimension (19-27)
  {
    id: 'q19',
    dimension: 'TF',
    text: '조명을 고를 때 나는?',
    options: [
      { id: 'A', text: '밝기와 전구의 색온도 중심', value: 'T' },
      { id: 'B', text: '분위기를 만들어주는 무드 중심', value: 'F' },
    ],
  },
  {
    id: 'q20',
    dimension: 'TF',
    text: '공간에서의 색상 선택 기준은?',
    options: [
      { id: 'A', text: '때 안 타고 오래 쓰는 색', value: 'T' },
      { id: 'B', text: '기분이 좋아지는 따뜻한 색감', value: 'F' },
    ],
  },
  {
    id: 'q21',
    dimension: 'TF',
    text: '정리정돈의 목적은?',
    options: [
      { id: 'A', text: '사용 효율을 높이기 위해', value: 'T' },
      { id: 'B', text: '보기 좋고 기분이 편해지기 위해', value: 'F' },
    ],
  },
  {
    id: 'q22',
    dimension: 'TF',
    text: '좋아하는 조명 스타일은?',
    options: [
      { id: 'A', text: '천장 직부등, 밝은 전체등', value: 'T' },
      { id: 'B', text: '스탠드, 무드등, 간접조명', value: 'F' },
    ],
  },
  {
    id: 'q23',
    dimension: 'TF',
    text: '침구류를 고를 때 기준은?',
    options: [
      { id: 'A', text: '관리가 편하고 쾌적한 소재', value: 'T' },
      { id: 'B', text: '촉감 좋고 감성 있는 디자인', value: 'F' },
    ],
  },
  {
    id: 'q24',
    dimension: 'TF',
    text: '나의 데스크 환경은?',
    options: [
      { id: 'A', text: '생산성과 집중이 가능한 환경', value: 'T' },
      { id: 'B', text: '나만의 감성과 위로가 느껴지는 공간', value: 'F' },
    ],
  },
  {
    id: 'q25',
    dimension: 'TF',
    text: '인테리어 쇼핑 기준은?',
    options: [
      { id: 'A', text: '가격 대비 실속과 품질', value: 'T' },
      { id: 'B', text: '비싸도 예쁘면 사는 편', value: 'F' },
    ],
  },
  {
    id: 'q26',
    dimension: 'TF',
    text: '벽에 장식은?',
    options: [
      { id: 'A', text: '없어도 되며 실용에 방해되면 치운다', value: 'T' },
      { id: 'B', text: '감정의 분위기를 채우는 데 중요하다', value: 'F' },
    ],
  },
  {
    id: 'q27',
    dimension: 'TF',
    text: '가족이 방문했을 때 듣는 말은?',
    options: [
      { id: 'A', text: '정리 잘했네, 실용적이다', value: 'T' },
      { id: 'B', text: '분위기 좋다, 예쁘다', value: 'F' },
    ],
  },

  // PJ Dimension (28-36)
  {
    id: 'q28',
    dimension: 'PJ',
    text: '가구를 배치할 때 나는?',
    options: [
      { id: 'A', text: '치수를 재고 미리 도식화함', value: 'J' },
      { id: 'B', text: '일단 놓아보고 어울리면 유지', value: 'P' },
    ],
  },
  {
    id: 'q29',
    dimension: 'PJ',
    text: '내가 선호하는 정리 방식은?',
    options: [
      { id: 'A', text: '시스템화된 구조적 정리', value: 'J' },
      { id: 'B', text: '눈에 띄는 것부터 유동적으로 정리', value: 'P' },
    ],
  },
  {
    id: 'q30',
    dimension: 'PJ',
    text: '방에 손님이 온다면?',
    options: [
      { id: 'A', text: '미리 정돈된 상태로 준비한다', value: 'J' },
      { id: 'B', text: '올 때쯤 슬슬 치우기 시작한다', value: 'P' },
    ],
  },
  {
    id: 'q31',
    dimension: 'PJ',
    text: '계절 변화에 따른 인테리어는?',
    options: [
      { id: 'A', text: '정기적으로 교체함', value: 'J' },
      { id: 'B', text: '기분 내키면 바꾼다', value: 'P' },
    ],
  },
  {
    id: 'q32',
    dimension: 'PJ',
    text: '정리정돈 기준은?',
    options: [
      { id: 'A', text: '미리 정한 기준이 있음', value: 'J' },
      { id: 'B', text: '눈에 보이는 대로 즉흥적으로 판단', value: 'P' },
    ],
  },
  {
    id: 'q33',
    dimension: 'PJ',
    text: '공간을 재구성할 때 나는?',
    options: [
      { id: 'A', text: '체크리스트를 만들고 순서대로 진행', value: 'J' },
      { id: 'B', text: '하다 보면서 조정한다', value: 'P' },
    ],
  },
  {
    id: 'q34',
    dimension: 'PJ',
    text: '서랍 속 구성은?',
    options: [
      { id: 'A', text: '분류 박스, 정리함 등으로 분리', value: 'J' },
      { id: 'B', text: '자주 쓰는 물건만 위에 둔다', value: 'P' },
    ],
  },
  {
    id: 'q35',
    dimension: 'PJ',
    text: '나의 침대 옆 공간은?',
    options: [
      { id: 'A', text: '항상 같은 구성 유지', value: 'J' },
      { id: 'B', text: '늘 조금씩 변함', value: 'P' },
    ],
  },
  {
    id: 'q36',
    dimension: 'PJ',
    text: '지갑이나 키의 보관 위치는?',
    options: [
      { id: 'A', text: '고정된 자리에 둔다', value: 'J' },
      { id: 'B', text: '그날 그날 다른 데 둘 때도 있음', value: 'P' },
    ],
  },
];

export default questions;
