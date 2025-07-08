export type Cheer = {
  id: string;
  nameZh: string;
  nameEn: string;
  birthday: string;
  team: string;
  color: string;
  socials: { x?: string; ig?: string; tt?: string };
  image: string;
};

export const cheerleaders: Cheer[] = [
  // Rakuten Monkeys
  {
    id: "rakuten-lynn",
    nameZh: "林襄",
    nameEn: "Lynn",
    birthday: "1997-09-05",
    team: "Rakuten Monkeys",
    color: "#B90C14",
    socials: {
      ig: "https://instagram.com/95_mizuki",
      tt: "https://www.tiktok.com/@95_mizuki",
    },
    image: "/images/cheer/linxiang.jpg",
  },
  {
    id: "rakuten-mina",
    nameZh: "米娜",
    nameEn: "Mina",
    birthday: "1998-11-30",
    team: "Rakuten Monkeys",
    color: "#B90C14",
    socials: { 
      ig: "https://instagram.com/mina_1130",
      x: "https://x.com/mina_rakuten",
      tt: "https://www.tiktok.com/@mina_monkeys",
    },
    image: "/images/cheer/mina.jpg",
  },
  {
    id: "rakuten-emma",
    nameZh: "艾瑪",
    nameEn: "Emma",
    birthday: "1999-04-18",
    team: "Rakuten Monkeys",
    color: "#B90C14",
    socials: { 
      ig: "https://instagram.com/emma_0418",
    },
    image: "/images/cheer/emma.jpg",
  },
  {
    id: "rakuten-bella",
    nameZh: "貝拉",
    nameEn: "Bella",
    birthday: "1996-08-22",
    team: "Rakuten Monkeys",
    color: "#B90C14",
    socials: { 
      ig: "https://instagram.com/bella_0822",
      tt: "https://www.tiktok.com/@bella_monkeys",
    },
    image: "/images/cheer/bella.jpg",
  },
  {
    id: "rakuten-sophia",
    nameZh: "蘇菲亞",
    nameEn: "Sophia",
    birthday: "2000-02-14",
    team: "Rakuten Monkeys",
    color: "#B90C14",
    socials: { 
      ig: "https://instagram.com/sophia_0214",
    },
    image: "/images/cheer/sophia.jpg",
  },

  // CTBC Brothers
  {
    id: "brothers-yuki",
    nameZh: "張可昀",
    nameEn: "Yuki",
    birthday: "1996-01-16",
    team: "CTBC Brothers",
    color: "#F9D400",
    socials: { 
      ig: "https://instagram.com/yuki_0116",
      tt: "https://www.tiktok.com/@yuki_chang0116",
    },
    image: "/images/cheer/zhangkeyun.jpg",
  },
  {
    id: "brothers-chloe",
    nameZh: "克洛伊",
    nameEn: "Chloe",
    birthday: "1997-06-25",
    team: "CTBC Brothers",
    color: "#F9D400",
    socials: { 
      ig: "https://instagram.com/chloe_0625",
      tt: "https://www.tiktok.com/@chloe_brothers",
    },
    image: "/images/cheer/chloe.jpg",
  },
  {
    id: "brothers-grace",
    nameZh: "格蕾絲",
    nameEn: "Grace",
    birthday: "1998-09-10",
    team: "CTBC Brothers",
    color: "#F9D400",
    socials: { 
      ig: "https://instagram.com/grace_0910",
    },
    image: "/images/cheer/grace.jpg",
  },
  {
    id: "brothers-lily",
    nameZh: "莉莉",
    nameEn: "Lily",
    birthday: "1999-12-03",
    team: "CTBC Brothers",
    color: "#F9D400",
    socials: { 
      ig: "https://instagram.com/lily_1203",
      tt: "https://www.tiktok.com/@lily_ctbc",
    },
    image: "/images/cheer/lily.jpg",
  },
  {
    id: "brothers-ruby",
    nameZh: "露比",
    nameEn: "Ruby",
    birthday: "1997-03-28",
    team: "CTBC Brothers",
    color: "#F9D400",
    socials: { 
      ig: "https://instagram.com/ruby_0328",
      x: "https://x.com/ruby_brothers",
    },
    image: "/images/cheer/ruby.jpg",
  },

  // Fubon Guardians
  {
    id: "fubon-annie",
    nameZh: "安妮",
    nameEn: "Annie",
    birthday: "1998-03-21",
    team: "Fubon Guardians",
    color: "#003876",
    socials: { 
      ig: "https://instagram.com/annie_0321",
      x: "https://x.com/annie_fubon",
    },
    image: "/images/cheer/annie.jpg",
  },
  {
    id: "fubon-nina",
    nameZh: "妮娜",
    nameEn: "Nina",
    birthday: "1996-07-12",
    team: "Fubon Guardians",
    color: "#003876",
    socials: { 
      ig: "https://instagram.com/nina_0712",
      tt: "https://www.tiktok.com/@nina_guardians",
    },
    image: "/images/cheer/nina.jpg",
  },
  {
    id: "fubon-sarah",
    nameZh: "莎拉",
    nameEn: "Sarah",
    birthday: "1999-05-08",
    team: "Fubon Guardians",
    color: "#003876",
    socials: { 
      ig: "https://instagram.com/sarah_0508",
    },
    image: "/images/cheer/sarah.jpg",
  },
  {
    id: "fubon-diana",
    nameZh: "黛安娜",
    nameEn: "Diana",
    birthday: "1997-10-15",
    team: "Fubon Guardians",
    color: "#003876",
    socials: { 
      ig: "https://instagram.com/diana_1015",
      tt: "https://www.tiktok.com/@diana_fubon",
      x: "https://x.com/diana_guardians",
    },
    image: "/images/cheer/diana.jpg",
  },
  {
    id: "fubon-victoria",
    nameZh: "維多利亞",
    nameEn: "Victoria",
    birthday: "1998-08-31",
    team: "Fubon Guardians",
    color: "#003876",
    socials: { 
      ig: "https://instagram.com/victoria_0831",
    },
    image: "/images/cheer/victoria.jpg",
  },

  // Uni-Lions
  {
    id: "unilions-momo",
    nameZh: "王思佳",
    nameEn: "Momo",
    birthday: "1995-12-08",
    team: "Uni-Lions",
    color: "#FF6600",
    socials: { 
      ig: "https://instagram.com/momo_wang1208",
      tt: "https://www.tiktok.com/@momo_unilions",
    },
    image: "/images/cheer/wangsijia.jpg",
  },
  {
    id: "unilions-jessica",
    nameZh: "潔西卡",
    nameEn: "Jessica",
    birthday: "1997-04-02",
    team: "Uni-Lions",
    color: "#FF6600",
    socials: { 
      ig: "https://instagram.com/jessica_0402",
      tt: "https://www.tiktok.com/@jessica_lions",
    },
    image: "/images/cheer/jessica.jpg",
  },
  {
    id: "unilions-amanda",
    nameZh: "阿曼達",
    nameEn: "Amanda",
    birthday: "1998-06-19",
    team: "Uni-Lions",
    color: "#FF6600",
    socials: { 
      ig: "https://instagram.com/amanda_0619",
    },
    image: "/images/cheer/amanda.jpg",
  },
  {
    id: "unilions-rachel",
    nameZh: "瑞秋",
    nameEn: "Rachel",
    birthday: "1999-09-26",
    team: "Uni-Lions",
    color: "#FF6600",
    socials: { 
      ig: "https://instagram.com/rachel_0926",
      x: "https://x.com/rachel_lions",
    },
    image: "/images/cheer/rachel.jpg",
  },
  {
    id: "unilions-kelly",
    nameZh: "凱莉",
    nameEn: "Kelly",
    birthday: "1996-11-14",
    team: "Uni-Lions",
    color: "#FF6600",
    socials: { 
      ig: "https://instagram.com/kelly_1114",
      tt: "https://www.tiktok.com/@kelly_unilions",
    },
    image: "/images/cheer/kelly.jpg",
  },

  // Wei Chuan Dragons
  {
    id: "dragons-lala",
    nameZh: "菈菈",
    nameEn: "Lala",
    birthday: "1999-07-14",
    team: "Wei Chuan Dragons",
    color: "#C8102E",
    socials: { 
      ig: "https://instagram.com/lala_0714",
    },
    image: "/images/cheer/lala.jpg",
  },
  {
    id: "dragons-tina",
    nameZh: "蒂娜",
    nameEn: "Tina",
    birthday: "1997-05-23",
    team: "Wei Chuan Dragons",
    color: "#C8102E",
    socials: { 
      ig: "https://instagram.com/tina_0523",
      tt: "https://www.tiktok.com/@tina_dragons",
    },
    image: "/images/cheer/tina.jpg",
  },
  {
    id: "dragons-iris",
    nameZh: "艾莉絲",
    nameEn: "Iris",
    birthday: "1998-01-07",
    team: "Wei Chuan Dragons",
    color: "#C8102E",
    socials: { 
      ig: "https://instagram.com/iris_0107",
    },
    image: "/images/cheer/iris.jpg",
  },
  {
    id: "dragons-wendy",
    nameZh: "溫蒂",
    nameEn: "Wendy",
    birthday: "1996-12-20",
    team: "Wei Chuan Dragons",
    color: "#C8102E",
    socials: { 
      ig: "https://instagram.com/wendy_1220",
      tt: "https://www.tiktok.com/@wendy_dragons",
      x: "https://x.com/wendy_weichuan",
    },
    image: "/images/cheer/wendy.jpg",
  },
  {
    id: "dragons-alice",
    nameZh: "愛麗絲",
    nameEn: "Alice",
    birthday: "1999-03-11",
    team: "Wei Chuan Dragons",
    color: "#C8102E",
    socials: { 
      ig: "https://instagram.com/alice_0311",
    },
    image: "/images/cheer/alice.jpg",
  },

  // TSG Hawks
  {
    id: "hawks-eva",
    nameZh: "伊娃",
    nameEn: "Eva",
    birthday: "1997-08-04",
    team: "TSG Hawks",
    color: "#1C1C1C",
    socials: { 
      ig: "https://instagram.com/eva_0804",
      tt: "https://www.tiktok.com/@eva_hawks",
    },
    image: "/images/cheer/eva.jpg",
  },
  {
    id: "hawks-zoe",
    nameZh: "柔伊",
    nameEn: "Zoe",
    birthday: "1998-10-09",
    team: "TSG Hawks",
    color: "#1C1C1C",
    socials: { 
      ig: "https://instagram.com/zoe_1009",
    },
    image: "/images/cheer/zoe.jpg",
  },
  {
    id: "hawks-maya",
    nameZh: "瑪雅",
    nameEn: "Maya",
    birthday: "1996-04-27",
    team: "TSG Hawks",
    color: "#1C1C1C",
    socials: { 
      ig: "https://instagram.com/maya_0427",
      tt: "https://www.tiktok.com/@maya_hawks",
      x: "https://x.com/maya_tsg",
    },
    image: "/images/cheer/maya.jpg",
  },
  {
    id: "hawks-luna",
    nameZh: "露娜",
    nameEn: "Luna",
    birthday: "1999-01-25",
    team: "TSG Hawks",
    color: "#1C1C1C",
    socials: { 
      ig: "https://instagram.com/luna_0125",
    },
    image: "/images/cheer/luna.jpg",
  },
  {
    id: "hawks-aria",
    nameZh: "艾莉亞",
    nameEn: "Aria",
    birthday: "1997-06-13",
    team: "TSG Hawks",
    color: "#1C1C1C",
    socials: { 
      ig: "https://instagram.com/aria_0613",
      tt: "https://www.tiktok.com/@aria_tsg",
    },
    image: "/images/cheer/aria.jpg",
  },
];