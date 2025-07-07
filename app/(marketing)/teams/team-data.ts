export interface Team {
  id: string;
  name: string;
  fullName: string;
  establishedYear: number;
  homeCity: string;
  stadium: string;
  capacity: number;
  colors: {
    primary: string;
    secondary: string;
  };
  logo: string;
  description: string;
  website?: string;
  championships: number;
}

export const teams: Team[] = [
  {
    id: 'ctbc-brothers',
    name: '中信兄弟',
    fullName: '中信兄弟棒球隊',
    establishedYear: 1990,
    homeCity: '台中',
    stadium: '台中洲際棒球場',
    capacity: 20000,
    colors: {
      primary: '#FFD700',
      secondary: '#000000'
    },
    logo: '/images/logos/ctbc-brothers.svg',
    description: '前身為兄弟象隊，是台灣職棒歷史最悠久的球隊之一。以黃色球衣聞名，擁有眾多忠實球迷。',
    website: 'https://www.brothers.tw/',
    championships: 7
  },
  {
    id: 'rakuten-monkeys',
    name: '樂天桃猿',
    fullName: '樂天桃猿棒球隊',
    establishedYear: 2003,
    homeCity: '桃園',
    stadium: '桃園國際棒球場',
    capacity: 20000,
    colors: {
      primary: '#8B0000',
      secondary: '#FFD700'
    },
    logo: '/images/logos/rakuten-monkeys.svg',
    description: '前身為La New熊、Lamigo桃猿。以創新的行銷手法和熱情的啦啦隊聞名。',
    website: 'https://monkeys.rakuten.com.tw/',
    championships: 6
  },
  {
    id: 'uni-lions',
    name: '統一7-ELEVEn獅',
    fullName: '統一7-ELEVEn獅棒球隊',
    establishedYear: 1990,
    homeCity: '台南',
    stadium: '台南市立棒球場',
    capacity: 12000,
    colors: {
      primary: '#FF6600',
      secondary: '#000080'
    },
    logo: '/images/logos/uni-lions.svg',
    description: '台灣職棒創始球隊之一，以橘色球衣為標誌。擁有南部廣大球迷基礎。',
    website: 'https://www.uni-lions.com.tw/',
    championships: 10
  },
  {
    id: 'fubon-guardians',
    name: '富邦悍將',
    fullName: '富邦悍將棒球隊',
    establishedYear: 1993,
    homeCity: '新北',
    stadium: '新莊棒球場',
    capacity: 12500,
    colors: {
      primary: '#004B97',
      secondary: '#FFFFFF'
    },
    logo: '/images/logos/fubon-guardians.svg',
    description: '前身為俊國熊、興農牛、義大犀牛。2016年由富邦集團接手經營。',
    website: 'https://www.fubonguardians.com/',
    championships: 1
  },
  {
    id: 'wei-chuan-dragons',
    name: '味全龍',
    fullName: '味全龍棒球隊',
    establishedYear: 1990,
    homeCity: '台北',
    stadium: '天母棒球場',
    capacity: 10000,
    colors: {
      primary: '#FF0000',
      secondary: '#000000'
    },
    logo: '/images/logos/wei-chuan-dragons.svg',
    description: '台灣職棒創始球隊，1999年解散後於2019年重返職棒。以紅色為主色調。',
    website: 'https://dragons.re/',
    championships: 4
  },
  {
    id: 'tsg-hawks',
    name: '台鋼雄鷹',
    fullName: '台鋼雄鷹棒球隊',
    establishedYear: 2024,
    homeCity: '高雄',
    stadium: '澄清湖棒球場',
    capacity: 20000,
    colors: {
      primary: '#1E3A8A',
      secondary: '#F59E0B'
    },
    logo: '/images/logos/tsg-hawks.svg',
    description: '台灣職棒最新加入的球隊，由台灣鋼鐵集團成立。以鷹為吉祥物。',
    website: 'https://www.tsghawks.com/',
    championships: 0
  }
];

export function getTeamById(id: string): Team | undefined {
  return teams.find(team => team.id === id);
}

export function getTeamColor(id: string): { primary: string; secondary: string } | undefined {
  const team = getTeamById(id);
  return team?.colors;
}