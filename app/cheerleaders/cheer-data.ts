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
];