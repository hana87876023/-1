export interface Team {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  establishedYear: number;
  homeCity: string;
  stadium: string;
  capacity: number;
  championships: number;
  description: string;
  website?: string;
}

export const teams: Team[] = [
  {
    id: 'ctbc-brothers',
    name: '中信兄弟',
    fullName: '中信兄弟象',
    logo: '/images/teams/brothers-logo.png',
    colors: {
      primary: '#F9D400',
      secondary: '#003876'
    },
    establishedYear: 1984,
    homeCity: '台中市',
    stadium: '台中洲際棒球場',
    capacity: 20000,
    championships: 7,
    description: '台湾プロ野球界の名門チーム。黄色いユニフォームがトレードマークで、熱狂的なファンが多いことで知られています。長い歴史と伝統を持ち、数多くの名選手を輩出してきました。',
    website: 'https://www.brothers.tw'
  },
  {
    id: 'fubon-guardians',
    name: '富邦悍將',
    fullName: '富邦悍將',
    logo: '/images/teams/guardians-logo.png',
    colors: {
      primary: '#003876',
      secondary: '#FFFFFF'
    },
    establishedYear: 1993,
    homeCity: '新北市',
    stadium: '新莊棒球場',
    capacity: 12500,
    championships: 2,
    description: '青色をチームカラーとする台北地区の代表チーム。富邦金融グループが親会社で、近年積極的に戦力補強を行っています。守備力の高さで知られています。',
    website: 'https://www.fubon-guardians.com'
  },
  {
    id: 'rakuten-monkeys',
    name: '樂天桃猿',
    fullName: '樂天桃猿',
    logo: '/images/teams/monkeys-logo.png',
    colors: {
      primary: '#B90C14',
      secondary: '#FFFFFF'
    },
    establishedYear: 1993,
    homeCity: '桃園市',
    stadium: '桃園國際棒球場',
    capacity: 20000,
    championships: 4,
    description: '桃園を本拠地とする赤いユニフォームが印象的なチーム。日本の楽天グループが親会社となってから、国際的な視野でチーム運営を行っています。攻撃力の高さが特徴です。',
    website: 'https://www.rakutenmonkeys.com'
  },
  {
    id: 'uni-lions',
    name: '統一7-ELEVEn獅',
    fullName: '統一7-ELEVEn獅',
    logo: '/images/teams/lions-logo.png',
    colors: {
      primary: '#FF6600',
      secondary: '#000000'
    },
    establishedYear: 1989,
    homeCity: '台南市',
    stadium: '台南市立棒球場',
    capacity: 12000,
    championships: 8,
    description: 'オレンジ色のユニフォームが特徴的な南部の強豪チーム。台湾プロ野球の歴史と共に歩んできた老舗チームで、多くの優勝経験があります。堅実な野球スタイルで知られています。',
    website: 'https://www.uni-lions.com.tw'
  },
  {
    id: 'wei-chuan-dragons',
    name: '味全龍',
    fullName: '味全龍',
    logo: '/images/teams/dragons-logo.png',
    colors: {
      primary: '#C8102E',
      secondary: '#FFFFFF'
    },
    establishedYear: 1989,
    homeCity: '台北市',
    stadium: '天母棒球場',
    capacity: 12500,
    championships: 3,
    description: '赤いドラゴンがシンボルの台北のチーム。一時期リーグを離脱していましたが、2019年に復帰。新しい世代の選手たちと共に、かつての栄光を取り戻そうと奮闘しています。',
    website: 'https://www.weichuandragons.com'
  },
  {
    id: 'tsg-hawks',
    name: 'TSG鷹',
    fullName: 'TSG鷹',
    logo: '/images/teams/hawks-logo.png',
    colors: {
      primary: '#1C1C1C',
      secondary: '#FFD700'
    },
    establishedYear: 2019,
    homeCity: '台中市',
    stadium: '台中洲際棒球場',
    capacity: 20000,
    championships: 0,
    description: '黒と金色のユニフォームが印象的な比較的新しいチーム。台湾スポーツグループが運営し、若い選手の育成に力を入れています。これからの成長が期待される新興勢力です。',
    website: 'https://www.tsg-hawks.com'
  }
];

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};