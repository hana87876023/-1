export type Language = 'ja' | 'zh-TW';

export interface Translations {
  nav: {
    cheerleaders: string;
    teams: string;
    schedule: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  sections: {
    featuredCheerleaders: string;
    featuredCheerleadersDesc: string;
    viewAll: string;
    aboutTaiwanBaseball: string;
    aboutTaiwanBaseballDesc: string;
    viewTeams: string;
  };
  footer: {
    copyright: string;
    description: string;
  };
}

const translations: Record<Language, Translations> = {
  ja: {
    nav: {
      cheerleaders: 'チアリーダー',
      teams: '球団',
      schedule: '試合予定',
    },
    hero: {
      title: '台湾プロ野球チアリーダー',
      subtitle: '台湾プロ野球を盛り上げる美しいチアリーダーたちをご紹介',
      cta: 'チアリーダーを見る',
    },
    sections: {
      featuredCheerleaders: '注目のチアリーダー',
      featuredCheerleadersDesc: '台湾プロ野球で活躍する人気チアリーダーたちをご紹介します',
      viewAll: 'すべてのチアリーダーを見る',
      aboutTaiwanBaseball: '台湾野球について',
      aboutTaiwanBaseballDesc: '台湾プロ野球（CPBL）の各球団には、試合を盛り上げる専属のチアリーダーチームがあります。彼女たちはダンスパフォーマンスだけでなく、SNSでの発信やファンとの交流を通じて、台湾野球文化の重要な一部となっています。',
      viewTeams: '球団紹介を見る',
    },
    footer: {
      copyright: '© 2024 Taiwan Cheerleaders & CPBL Info',
      description: '台湾プロ野球チアリーダーと試合情報を紹介するファンサイト',
    },
  },
  'zh-TW': {
    nav: {
      cheerleaders: '啦啦隊',
      teams: '球隊',
      schedule: '賽程表',
    },
    hero: {
      title: '台灣職棒啦啦隊',
      subtitle: '為台灣職棒增添活力的美麗啦啦隊員們',
      cta: '查看啦啦隊',
    },
    sections: {
      featuredCheerleaders: '精選啦啦隊',
      featuredCheerleadersDesc: '介紹在台灣職棒活躍的人氣啦啦隊員們',
      viewAll: '查看所有啦啦隊',
      aboutTaiwanBaseball: '關於台灣棒球',
      aboutTaiwanBaseballDesc: '台灣職棒（CPBL）各球隊都有專屬的啦啦隊來炒熱比賽氣氛。她們不僅表演舞蹈，還透過社群媒體發文和與球迷互動，成為台灣棒球文化的重要一環。',
      viewTeams: '查看球隊介紹',
    },
    footer: {
      copyright: '© 2024 Taiwan Cheerleaders & CPBL Info',
      description: '介紹台灣職棒啦啦隊和比賽資訊的粉絲網站',
    },
  },
};

export const getTranslations = (language: Language): Translations => {
  return translations[language];
}; 