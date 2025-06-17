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
      { id: 'A', text: '집안일을 처리하고 저녁을 준비한다', value: 'E' },
      { id: 'B', text: '소파나 침대에 눕는다', value: 'I' },
    ],
  },
  {
    id: 'q2',
    dimension: 'EI',
    text: '새로운 공간을 만든다면 어디에 집중할까?',
    options: [
      { id: 'A', text: '취미 또는 작업 공간', value: 'E' },
      { id: 'B', text: '휴식을 위한 공간', value: 'I' },
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
    text: '휴일 아침에 가장 먼저 하는 행동은?',
    options: [
      { id: 'A', text: '침구를 정리하고 커피를 내린다', value: 'E' },
      { id: 'B', text: '휴대폰으로 유튜브와 SNS를 확인한다', value: 'I' },
    ],
  },
  {
    id: 'q5',
    dimension: 'EI',
    text: '두 가구 중 하나를 선택해야 한다면?',
    options: [
      { id: 'A', text: '멀티 테이블이나 책상', value: 'E' },
      { id: 'B', text: '빈백이나 리클라이너', value: 'I' },
    ],
  },
  {
    id: 'q6',
    dimension: 'EI',
    text: '집에서 자주 켜두는 조명은?',
    options: [
      { id: 'A', text: '밝고 환한 천장등', value: 'E' },
      { id: 'B', text: '따뜻한 색감의 스탠드', value: 'I' },
    ],
  },
  {
    id: 'q7',
    dimension: 'EI',
    text: '친구가 갑자기 방문한다면?',
    options: [
      { id: 'A', text: '차를 마시며 무언가 함께 한다', value: 'E' },
      { id: 'B', text: '나갈 채비를 해서 카페로 간다', value: 'I' },
    ],
  },
  {
    id: 'q8',
    dimension: 'EI',
    text: '홈카페를 연다면 어떤 스타일?',
    options: [
      { id: 'A', text: '손님 맞이와 작업이 가능한 오픈 카페', value: 'E' },
      { id: 'B', text: '조용히 나만의 커피를 즐기는 프라이빗 카페', value: 'I' },
    ],
  },
  {
    id: 'q9',
    dimension: 'EI',
    text: '집에서 가장 마음이 가는 공간은?',
    options: [
      { id: 'A', text: '여러 활동이 가능한 거실', value: 'E' },
      { id: 'B', text: '나만의 시간을 보낼 수 있는 방 한켠', value: 'I' },
    ],
  },

  // NS Dimension (10-18)
  {
    id: 'q10',
    dimension: 'NS',
    text: '작업 공간을 구성할 때 더 중요하게 여기는 건?',
    options: [
      { id: 'A', text: '정리된 책상, 필요한 물건이 손에 닿는 배치', value: 'S' },
      { id: 'B', text: '영감을 줄 수 있는 포스터나 오브제 배치', value: 'N' },
    ],
  },
  {
    id: 'q11',
    dimension: 'NS',
    text: '공간을 바꾸고 싶을 때 드는 생각은?',
    options: [
      { id: 'A', text: '지금 불편한 점을 개선하고 싶다', value: 'S' },
      { id: 'B', text: '완전히 새로운 분위기로 바꿔보고 싶다', value: 'N' },
    ],
  },
  {
    id: 'q12',
    dimension: 'NS',
    text: '가구를 고를 때 중요한 기준은?',
    options: [
      { id: 'A', text: '튼튼하고 활용도가 높아야 한다', value: 'S' },
      { id: 'B', text: '내 공간의 무드와 어울리면 좋다', value: 'N' },
    ],
  },
  {
    id: 'q13',
    dimension: 'NS',
    text: '침실과 서재가 같은 공간일 경우?',
    options: [
      { id: 'A', text: '가구나 소품으로 확실히 구분', value: 'S' },
      { id: 'B', text: '분위기로 자연스럽게 섞이게 구성', value: 'N' },
    ],
  },
  {
    id: 'q14',
    dimension: 'NS',
    text: '오픈형 수납에 대한 생각은?',
    options: [
      { id: 'A', text: '먼지가 쌓이고 지저분해 보인다', value: 'S' },
      { id: 'B', text: '자주 쓰는 건 보여야 편하다', value: 'N' },
    ],
  },
  {
    id: 'q15',
    dimension: 'NS',
    text: '벽에 그림을 건다면?',
    options: [
      { id: 'A', text: '너무 튀지 않고 안정적인 색감과 배열', value: 'S' },
      { id: 'B', text: '시선을 끌고 공간에 포인트가 되는 그림', value: 'N' },
    ],
  },
  {
    id: 'q16',
    dimension: 'NS',
    text: '수납장은 어떤 컬러가 좋은가요?',
    options: [
      { id: 'A', text: '화이트나 그레이 계열. 깔끔하게', value: 'S' },
      { id: 'B', text: '우드・포인트 컬러로 따뜻하고 개성있는 색감', value: 'N' },
    ],
  },
  {
    id: 'q17',
    dimension: 'NS',
    text: '둘 중 선호하는 홈 인테리어 컨텐츠는?',
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
    text: '작업 공간에 음악을 틀 때?',
    options: [
      { id: 'A', text: '집중에 방해되지 않는 백색소음 중심', value: 'T' },
      { id: 'B', text: '현재 감정 상태에 어울리는 음악 선곡', value: 'F' },
    ],
  },
  {
    id: 'q20',
    dimension: 'TF',
    text: '조명을 고를 때 나는?',
    options: [
      { id: 'A', text: '공간에 맞는 밝기와 기능이 충족되는지', value: 'T' },
      { id: 'B', text: '디자인과 형태가 시각적으로 매력적인지', value: 'F' },
    ],
  },
  {
    id: 'q21',
    dimension: 'TF',
    text: '불필요한 물건이 많아졌을 때?',
    options: [
      { id: 'A', text: '지금 필요 없는 건 과감히 정리', value: 'T' },
      { id: 'B', text: '추억이나 감정이 담긴 물건은 간직', value: 'F' },
    ],
  },
  {
    id: 'q22',
    dimension: 'TF',
    text: '욕실은 어떤 분위기여야 하나요?',
    options: [
      { id: 'A', text: '깔끔하고 정돈된 위생 중심의 공간', value: 'T' },
      { id: 'B', text: '하루의 피로를 씻어내는 감각적 힐링 공간', value: 'F' },
    ],
  },
  {
    id: 'q23',
    dimension: 'TF',
    text: '정리・정돈의 주된 목적은?',
    options: [
      { id: 'A', text: '물건을 효율적으로 찾고 사용하기 위해', value: 'T' },
      { id: 'B', text: '정돈된 공간에서 심리적 안정을 느끼기 위해', value: 'F' },
    ],
  },
  {
    id: 'q24',
    dimension: 'TF',
    text: '발코니를 쓸 수 있다면?',
    options: [
      { id: 'A', text: '빨래 널기나 물건 보관 등 실용적 공간 활용', value: 'T' },
      { id: 'B', text: '작은 정원이나 나만의 감성 공간으로 연출', value: 'F' },
    ],
  },
  {
    id: 'q25',
    dimension: 'TF',
    text: '침구류를 고를 때 기준은?',
    options: [
      { id: 'A', text: '관리가 편하고 쾌적한 소재', value: 'T' },
      { id: 'B', text: '촉감 좋고 감성 있는 디자인', value: 'F' },
    ],
  },
  {
    id: 'q26',
    dimension: 'TF',
    text: '나의 책상 위는?',
    options: [
      { id: 'A', text: '필요한 도구만 정리해서 깔끔한 환경 조성', value: 'T' },
      { id: 'B', text: '좋아하는 소품으로 나만의 무드 조성', value: 'F' },
    ],
  },
  {
    id: 'q27',
    dimension: 'TF',
    text: '인테리어 쇼핑 기준은?',
    options: [
      { id: 'A', text: '가격 대비 실용성과 내구성 중심으로 고른다', value: 'T' },
      { id: 'B', text: '가격이 높아도 내 취향에 맞으면 선택한다', value: 'F' },
    ],
  },

  // PJ Dimension (28-36)
  {
    id: 'q28',
    dimension: 'PJ',
    text: '새 가구를 둘 때 먼저 하는 일은?',
    options: [
      { id: 'A', text: '치수를 재고 배치 계획부터 세운다', value: 'J' },
      { id: 'B', text: '들여와서 어울리는 자리를 찾아본다', value: 'P' },
    ],
  },
  {
    id: 'q29',
    dimension: 'PJ',
    text: '서랍이나 수납합을 열었을 때',
    options: [
      { id: 'A', text: '종류별로 정리되어 있어야 속이 편하다', value: 'J' },
      { id: 'B', text: '대충 넣어도 어디 있는지 알면 된다', value: 'P' },
    ],
  },
  {
    id: 'q30',
    dimension: 'PJ',
    text: '집에 손님이 온다면?',
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
      { id: 'A', text: '정기적으로 교체한다', value: 'J' },
      { id: 'B', text: '기분 내키면 바꾼다', value: 'P' },
    ],
  },
  {
    id: 'q32',
    dimension: 'PJ',
    text: '거실에 택배 박스가 쌓이면?',
    options: [
      { id: 'A', text: '바로 정리해서 깔끔하게 정리', value: 'J' },
      { id: 'B', text: '시간이 날 때 한꺼번에 처리', value: 'P' },
    ],
  },
  {
    id: 'q33',
    dimension: 'PJ',
    text: '소파에 앉을 때 나는?',
    options: [
      { id: 'A', text: '쿠션 정리하고 앉는다', value: 'J' },
      { id: 'B', text: '정리 안하고 푹신하면 OK', value: 'P' },
    ],
  },
  {
    id: 'q34',
    dimension: 'PJ',
    text: '책상 위에 쌓인 잡동사니를 보면?',
    options: [
      { id: 'A', text: '금방 정리하고 제자리에 두는 편', value: 'J' },
      { id: 'B', text: '당장은 쓰니까 그냥 놔두는 편', value: 'P' },
    ],
  },
  {
    id: 'q35',
    dimension: 'PJ',
    text: '공간을 바꾸고 싶을 때?',
    options: [
      { id: 'A', text: '시기,예산,순서를 정리한 후 시작한다', value: 'J' },
      { id: 'B', text: '갑자기 확 바꾸고 싶을 때 바로 바꾼다', value: 'P' },
    ],
  },
  {
    id: 'q36',
    dimension: 'PJ',
    text: '지갑이나 키의 보관 위치는?',
    options: [
      { id: 'A', text: '고정된 자리에 둔다', value: 'J' },
      { id: 'B', text: '그날 그날 다른 데 둔다', value: 'P' },
    ],
  },
];

export default questions;
