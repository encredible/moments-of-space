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
    text: '주말에 주로 무엇을 하며 시간을 보내시나요?',
    options: [
      { id: 'A', text: '친구들과 만나거나 야외 활동', value: 'E' },
      { id: 'B', text: '집에서 조용히 휴식 (독서, 영화 감상 등)', value: 'I' },
    ],
  },
  {
    id: 'q2',
    dimension: 'EI',
    text: '새로운 사람들을 만나는 것에 대해 어떻게 생각하시나요?',
    options: [
      { id: 'A', text: '흥미롭고 에너지를 얻어요.', value: 'E' },
      { id: 'B', text: '다소 부담스럽고 기운이 빠져요.', value: 'I' },
    ],
  },
  {
    id: 'q3',
    dimension: 'EI',
    text: '대화를 할 때 주로 어떤 역할을 하시나요?',
    options: [
      { id: 'A', text: '주도적으로 대화를 이끌어가는 편', value: 'E' },
      { id: 'B', text: '주로 듣고 공감하며 반응하는 편', value: 'I' },
    ],
  },
  {
    id: 'q4',
    dimension: 'EI',
    text: '에너지를 얻는 주요 원천은 무엇인가요?',
    options: [
      { id: 'A', text: '사람들과의 교류 및 외부 활동', value: 'E' },
      { id: 'B', text: '혼자만의 시간 및 내적 성찰', value: 'I' },
    ],
  },
  {
    id: 'q5',
    dimension: 'EI',
    text: '파티나 사교 모임에 참석했을 때 당신의 모습은?',
    options: [
      { id: 'A', text: '다양한 사람들과 어울리며 적극적으로 참여한다.', value: 'E' },
      { id: 'B', text: '소수의 친한 사람들과 깊은 대화를 나누거나 조용히 관찰한다.', value: 'I' },
    ],
  },
  {
    id: 'q6',
    dimension: 'EI',
    text: '생각을 정리할 때 어떤 방식을 선호하시나요?',
    options: [
      { id: 'A', text: '다른 사람과 이야기하면서 생각을 발전시킨다.', value: 'E' },
      { id: 'B', text: '혼자 조용히 생각하며 아이디어를 구체화한다.', value: 'I' },
    ],
  },
  {
    id: 'q7',
    dimension: 'EI',
    text: '주목받는 상황에 대해 어떻게 느끼시나요?',
    options: [
      { id: 'A', text: '즐겁고 자연스럽게 느껴진다.', value: 'E' },
      { id: 'B', text: '불편하고 어색하게 느껴진다.', value: 'I' },
    ],
  },
  {
    id: 'q8',
    dimension: 'EI',
    text: '새로운 환경에 적응하는 속도는 어떤 편인가요?',
    options: [
      { id: 'A', text: '빠르게 적응하고 새로운 관계를 만드는 편이다.', value: 'E' },
      { id: 'B', text: '시간을 두고 천천히 관찰하며 적응하는 편이다.', value: 'I' },
    ],
  },
  {
    id: 'q9',
    dimension: 'EI',
    text: '단체 활동과 개인 활동 중 어떤 것을 더 선호하시나요?',
    options: [
      { id: 'A', text: '여러 사람과 함께하는 단체 활동', value: 'E' },
      { id: 'B', text: '혼자 또는 소수와 함께하는 개인 활동', value: 'I' },
    ],
  },

  // NS Dimension (10-18)
  {
    id: 'q10',
    dimension: 'NS',
    text: '새로운 정보를 접할 때 어떤 방식에 더 끌리나요?',
    options: [
      { id: 'A', text: '구체적이고 실제적인 정보, 현재에 집중', value: 'S' },
      { id: 'B', text: '새로운 가능성과 아이디어, 미래를 상상', value: 'N' },
    ],
  },
  {
    id: 'q11',
    dimension: 'NS',
    text: '일을 처리할 때 어떤 방식을 선호하시나요?',
    options: [
      { id: 'A', text: '순서대로 차근차근, 현실적인 세부사항에 집중', value: 'S' },
      { id: 'B', text: '전체적인 그림을 보고, 직관과 영감에 따라 유연하게', value: 'N' },
    ],
  },
  {
    id: 'q12',
    dimension: 'NS',
    text: '일상생활에서 어떤 종류의 대화를 더 즐기시나요?',
    options: [
      { id: 'A', text: '구체적인 경험이나 사실에 대한 이야기', value: 'S' },
      { id: 'B', text: '추상적인 개념이나 미래의 가능성에 대한 이야기', value: 'N' },
    ],
  },
  {
    id: 'q13',
    dimension: 'NS',
    text: '새로운 것을 배울 때 어떤 접근 방식을 선호하시나요?',
    options: [
      { id: 'A', text: '실제 경험과 실습을 통해 배우는 것', value: 'S' },
      { id: 'B', text: '이론과 개념을 통해 전체적인 이해를 추구하는 것', value: 'N' },
    ],
  },
  {
    id: 'q14',
    dimension: 'NS',
    text: '설명서를 읽을 때 당신의 스타일은?',
    options: [
      { id: 'A', text: '단계별 지침을 꼼꼼히 따른다.', value: 'S' },
      { id: 'B', text: '대략적으로 훑어보고 직관적으로 시도한다.', value: 'N' },
    ],
  },
  {
    id: 'q15',
    dimension: 'NS',
    text: '예술 작품을 감상할 때 주로 무엇에 주목하시나요?',
    options: [
      { id: 'A', text: '작품의 구체적인 표현 방식과 기술', value: 'S' },
      { id: 'B', text: '작품이 전달하는 의미와 상징', value: 'N' },
    ],
  },
  {
    id: 'q16',
    dimension: 'NS',
    text: '미래를 생각할 때 어떤 모습이 더 자연스러운가요?',
    options: [
      { id: 'A', text: '현실적인 계획과 예측 가능한 결과', value: 'S' },
      { id: 'B', text: '다양한 가능성과 상상력을 자극하는 아이디어', value: 'N' },
    ],
  },
  {
    id: 'q17',
    dimension: 'NS',
    text: '일상적인 반복 작업에 대한 당신의 태도는?',
    options: [
      { id: 'A', text: '안정적이고 예측 가능해서 편안하다.', value: 'S' },
      { id: 'B', text: '지루하고 새로운 자극이 필요하다고 느낀다.', value: 'N' },
    ],
  },
  {
    id: 'q18',
    dimension: 'NS',
    text: '문제를 해결할 때 어떤 접근 방식을 선호하시나요?',
    options: [
      { id: 'A', text: '이미 검증된 현실적인 방법', value: 'S' },
      { id: 'B', text: '새롭고 독창적인 아이디어', value: 'N' },
    ],
  },

  // TF Dimension (19-27)
  {
    id: 'q19',
    dimension: 'TF',
    text: '결정을 내릴 때 주로 무엇을 중요하게 생각하시나요?',
    options: [
      { id: 'A', text: '논리적 분석과 객관적인 사실', value: 'T' },
      { id: 'B', text: '사람들과의 관계와 감정적인 조화', value: 'F' },
    ],
  },
  {
    id: 'q20',
    dimension: 'TF',
    text: '다른 사람을 비판해야 할 때 어떤 점을 더 고려하시나요?',
    options: [
      { id: 'A', text: '진실과 공정성, 객관적인 평가', value: 'T' },
      { id: 'B', text: '상대방의 감정과 관계 유지', value: 'F' },
    ],
  },
  {
    id: 'q21',
    dimension: 'TF',
    text: '칭찬을 받을 때 어떤 칭찬이 더 기분 좋은가요?',
    options: [
      { id: 'A', text: '나의 능력과 성과에 대한 구체적인 칭찬', value: 'T' },
      { id: 'B', text: '나의 노력과 따뜻한 마음에 대한 칭찬', value: 'F' },
    ],
  },
  {
    id: 'q22',
    dimension: 'TF',
    text: '갈등 상황에서 주로 어떤 태도를 보이시나요?',
    options: [
      { id: 'A', text: '문제 해결을 위해 논리적으로 상황을 분석하고 해결책을 제시', value: 'T' },
      { id: 'B', text: '관련된 사람들의 감정을 살피고 조화로운 해결을 모색', value: 'F' },
    ],
  },
  {
    id: 'q23',
    dimension: 'TF',
    text: '다른 사람의 부탁을 거절해야 할 때 어떻게 하시나요?',
    options: [
      { id: 'A', text: '객관적인 이유를 들어 명확하게 거절한다.', value: 'T' },
      { id: 'B', text: '상대방이 상처받지 않도록 우회적으로 표현하거나 망설인다.', value: 'F' },
    ],
  },
  {
    id: 'q24',
    dimension: 'TF',
    text: '업무 환경에서 어떤 리더십 스타일을 선호하시나요?',
    options: [
      { id: 'A', text: '목표 지향적이고 효율성을 중시하는 리더십', value: 'T' },
      { id: 'B', text: '협력적이고 팀원의 사기를 중시하는 리더십', value: 'F' },
    ],
  },
  {
    id: 'q25',
    dimension: 'TF',
    text: '의사 결정 과정에서 당신에게 더 중요한 것은?',
    options: [
      { id: 'A', text: '원칙과 일관성을 지키는 것', value: 'T' },
      { id: 'B', text: '상황과 사람에 따라 융통성을 발휘하는 것', value: 'F' },
    ],
  },
  {
    id: 'q26',
    dimension: 'TF',
    text: '다른 사람에게 조언할 때 주로 어떤 점에 초점을 맞추나요?',
    options: [
      { id: 'A', text: '문제의 핵심을 파악하고 실질적인 해결책을 제시', value: 'T' },
      { id: 'B', text: '상대방의 감정을 이해하고 공감하며 지지', value: 'F' },
    ],
  },
  {
    id: 'q27',
    dimension: 'TF',
    text: '다른 사람의 의견에 동의하지 않을 때 어떻게 표현하시나요?',
    options: [
      { id: 'A', text: '직접적이고 솔직하게 반대 의견을 표현', value: 'T' },
      { id: 'B', text: '상대방의 감정을 고려하여 부드럽게 표현하거나 침묵', value: 'F' },
    ],
  },

  // PJ Dimension (28-36)
  {
    id: 'q28',
    dimension: 'PJ',
    text: '여행을 계획할 때 어떤 스타일이신가요?',
    options: [
      { id: 'A', text: '미리 철저하게 계획하고 일정을 따르는 편', value: 'J' },
      { id: 'B', text: '상황에 따라 유연하게 즉흥적으로 결정하는 편', value: 'P' },
    ],
  },
  {
    id: 'q29',
    dimension: 'PJ',
    text: '일상생활에서 어떤 상태를 더 선호하시나요?',
    options: [
      { id: 'A', text: '정리정돈되고 예측 가능한 상태', value: 'J' },
      { id: 'B', text: '자유롭고 즉흥적인 상태', value: 'P' },
    ],
  },
  {
    id: 'q30',
    dimension: 'PJ',
    text: '새로운 일을 시작할 때 어떤 접근 방식을 취하시나요?',
    options: [
      { id: 'A', text: '계획을 세우고 체계적으로 접근한다.', value: 'J' },
      { id: 'B', text: '일단 시작하고 상황에 맞춰 진행한다.', value: 'P' },
    ],
  },
  {
    id: 'q31',
    dimension: 'PJ',
    text: '결정을 내리는 것에 대해 어떻게 생각하시나요?',
    options: [
      { id: 'A', text: '빠르게 결정을 내리고 다음 단계로 나아가는 것을 선호', value: 'J' },
      { id: 'B', text: '충분한 정보를 탐색하고 신중하게 결정하는 것을 선호', value: 'P' },
    ],
  },
  {
    id: 'q32',
    dimension: 'PJ',
    text: '주말 계획은 주로 어떻게 세우시나요?',
    options: [
      { id: 'A', text: '미리 계획을 세워두고 그대로 실행한다.', value: 'J' },
      { id: 'B', text: '특별한 계획 없이 기분에 따라 즉흥적으로 보낸다.', value: 'P' },
    ],
  },
  {
    id: 'q33',
    dimension: 'PJ',
    text: '규칙이나 절차에 대한 당신의 태도는?',
    options: [
      { id: 'A', text: '명확한 가이드라인이 있는 것을 선호한다.', value: 'J' },
      { id: 'B', text: '상황에 따라 융통성 있게 적용하는 것을 선호한다.', value: 'P' },
    ],
  },
  {
    id: 'q34',
    dimension: 'PJ',
    text: '예상치 못한 변화에 어떻게 반응하시나요?',
    options: [
      { id: 'A', text: '계획에 차질이 생겨 스트레스를 받는다.', value: 'J' },
      { id: 'B', text: '새로운 가능성으로 보고 유연하게 대처한다.', value: 'P' },
    ],
  },
  {
    id: 'q35',
    dimension: 'PJ',
    text: '일을 마무리하는 방식은 어떤가요?',
    options: [
      { id: 'A', text: '완벽하게 마무리하고 정리정돈하는 것을 중시한다.', value: 'J' },
      { id: 'B', text: '새로운 관심사가 생기면 기존의 일을 미뤄두기도 한다.', value: 'P' },
    ],
  },
  {
    id: 'q36',
    dimension: 'PJ',
    text: '마감 기한이 있는 일을 할 때 주로 어떻게 하시나요?',
    options: [
      { id: 'A', text: '미리 계획을 세워 꾸준히 진행하여 기한 내 완료', value: 'J' },
      { id: 'B', text: '마감 직전에 집중하여 처리하거나, 상황에 따라 유연하게 조절', value: 'P' },
    ],
  },
];

export default questions;
