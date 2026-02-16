export interface SpecialItem {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  usageGuide: {
    title: string;
    steps: string[];
    warnings: string[];
    videoUrl?: string;
  };
}

export const accommodationName = "서울 한옥 스테이";

export const specialItems: SpecialItem[] = [
  {
    id: "dj-turntable",
    name: "DJ 턴테이블",
    imageUrl: "https://images.unsplash.com/photo-1651763088662-bd21a442d1f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHR1cm50YWJsZSUyMHZpbnlsfGVufDF8fHx8MTc3MTIzMDE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "프로페셔널 DJ 턴테이블과 믹서",
    usageGuide: {
      title: "DJ 턴테이블 사용 가이드",
      steps: [
        "전원 버튼을 눌러 장비를 켭니다",
        "레코드를 턴테이블에 올려놓습니다",
        "톤암을 조심스럽게 레코드 위에 올립니다",
        "볼륨을 천천히 올리며 소리를 확인합니다",
        "사용 후 톤암을 원위치하고 전원을 끕니다"
      ],
      warnings: [
        "톤암을 떨어뜨리거나 충격을 주지 마세요",
        "레코드 위에 음료를 두지 마세요",
        "과도한 볼륨은 스피커 손상의 원인이 됩니다"
      ]
    }
  },
  {
    id: "ceramic-set",
    name: "명인 도자기 세트",
    imageUrl: "https://images.unsplash.com/photo-1765808270869-855ab9b7f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBjZXJhbWljJTIwcG90dGVyeSUyMHRlYSUyMHNldHxlbnwxfHx8fDE3NzEyMzAxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "장인이 직접 만든 백자 찻잔 세트",
    usageGuide: {
      title: "도자기 세트 사용 가이드",
      steps: [
        "사용 전 미지근한 물로 가볍게 헹굽니다",
        "뜨거운 물을 부을 때는 천천히 부어주세요",
        "사용 후 부드러운 스펀지로 세척합니다",
        "물기를 완전히 제거 후 보관합니다"
      ],
      warnings: [
        "급격한 온도 변화는 균열의 원인이 됩니다",
        "식기세척기 사용을 금지합니다",
        "금속 수세미는 표면을 손상시킵니다"
      ]
    }
  },
  {
    id: "espresso-machine",
    name: "에스프레소 머신",
    imageUrl: "https://images.unsplash.com/photo-1716623816154-82045bc02706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlc3ByZXNzbyUyMGNvZmZlZSUyMG1hY2hpbmV8ZW58MXx8fHwxNzcxMjMwMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "프로페셔널 에스프레소 머신",
    usageGuide: {
      title: "에스프레소 머신 사용 가이드",
      steps: [
        "물통에 신선한 물을 채웁니다",
        "전원을 켜고 예열합니다 (약 3분)",
        "포터필터에 원두를 담고 탬핑합니다",
        "포터필터를 그룹헤드에 장착합니다",
        "추출 버튼을 눌러 에스프레소를 추출합니다"
      ],
      warnings: [
        "뜨거운 증기에 주의하세요",
        "사용 후 반드시 청소해주세요",
        "물통을 비운 상태로 작동하지 마세요"
      ]
    }
  },
  {
    id: "vintage-camera",
    name: "빈티지 필름 카메라",
    imageUrl: "https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmlsbSUyMGNhbWVyYXxlbnwxfHx8fDE3NzEyMTc0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "1970년대 수동 필름 카메라",
    usageGuide: {
      title: "빈티지 카메라 사용 가이드",
      steps: [
        "필름을 카메라에 장착합니다",
        "렌즈 캡을 제거합니다",
        "셔터 스피드와 조리개를 설정합니다",
        "뷰파인더로 구도를 잡습니다",
        "셔터 버튼을 부드럽게 누릅니다"
      ],
      warnings: [
        "렌즈를 직접 만지지 마세요",
        "습기와 직사광선을 피해주세요",
        "강한 충격을 주지 마세요"
      ]
    }
  }
];

export const protectionPolicy = {
  version: "1.0.0",
  items: [
    {
      id: "normal-wear",
      title: "정상 사용 중 자연스러운 마모는 청구하지 않습니다",
      details: [
        "일상적인 사용으로 인한 경미한 마모",
        "시간 경과에 따른 자연스러운 변색",
        "정상적인 세척 과정에서 발생하는 미세한 변화"
      ]
    },
    {
      id: "damage-charges",
      title: "안내 미준수로 인한 파손은 실비를 청구합니다",
      details: [
        "사용 가이드를 따르지 않아 발생한 파손",
        "경고 사항을 무시하여 발생한 손상",
        "청구 금액은 수리 또는 교체에 드는 실제 비용으로 산정",
        "청구 전 사진 및 견적서를 제공하여 투명하게 진행"
      ]
    },
    {
      id: "qr-guide",
      title: "현장 QR 가이드를 따라 이용해 주세요",
      details: [
        "각 물품 옆에 QR 코드가 부착되어 있습니다",
        "QR 코드를 스캔하면 상세한 사용 가이드를 확인할 수 있습니다",
        "가이드를 확인한 후 사용하시면 더 안전하고 즐거운 경험을 하실 수 있습니다"
      ]
    }
  ]
};
