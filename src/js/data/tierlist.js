dataSet = {};
dataSetVersion = "tierlist"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};
const container = document.getElementById("EX");

function addCharacter(item) {
  const i = document.createElement("div");
  i.innerHTML = `<img src="src/assets/chara/${item.img}" />`;
  
  container.appendChild(i);
}

dataSet[dataSetVersion].options = [
  {
    name: "Filter Pure Fes",
    key: "p",
    tooltip: "Check this to remove Pure Fes Characters" //should i add more filters? i think this is enough for now. let me know if any others would be nice
  },
  {
    name: "Filter Epics",
    key: "e",
    tooltip: "Check this to remove Epic Characters"
  },
  {
    name: "Filter Relics & Genics",
    key: "r",
    tooltip: "Check this to remove Relic and Genic Characters."
  },
  {
    name: "Filter Phantasm Fes",
    key: "ph",
    tooltip: "Check this to remove Phantasm Fes Characters."
  },
  {
    name: "Filter ExFes",
    key: "ex",
    tooltip: "Check this to remove Extended Fes Characters."
  },
  {
    name: "Filter Ultra Fes",
    key: "u",
    tooltip: "Check this to Sfes/Ufer Characters"
  },
  {
    name: "Filter Fes",
    key: "a",
    tooltip: "Check this to remove A-Fes Characters."
  },
  {
    name: "Filter General Characters",
    key: "g",
    tooltip: "Check this to remove characters from the General pool (L1s)."
  }, /* start of classes*/
  {
    name: "Filter Atk Units",
    key: "atk",
    tooltip: "Check this to remove Atk Units."
  },
  {
    name: "Filter Def Units",
    key: "def",
    tooltip: "Check this to remove Def Units."
  },
  {
    name: "Filter Spd Units",
    key: "spd",
    tooltip: "Check this to remove Spd Units."
  },
  {
    name: "Filter Heal Units",
    key: "heal",
    tooltip: "Check this to remove Heal Units."
  },
  {
    name: "Filter Supp Units",
    key: "supp",
    tooltip: "Check this to remove Support Units."
  },
  {
    name: "Filter Dbf Units",
    key: "dbf",
    tooltip: "Check this to remove Debuff Units."
  },
  {
    name: "Filter Dest Units",
    key: "dest",
    tooltip: "Check this to remove Dest Units."
  },
  {
    name: "Filter Tec Units",
    key: "tec",
    tooltip: "Check this to remove Tec Units."
  },
];

dataSet[dataSetVersion].characterData = [
    {
    name: "L0o Satori",
    img: "lo satori.png",
    tier: "EX",
opts: {
    p: true,
    dbf: true
}
  },
  {
    name: "Cz1# Marisa",
    img: "cz2 marisa.png",
    tier: "EX",
    opts: {
      atk: true,
      e: true
    }
  },
  {
    name: "Cs2# Satori",
    img: "cs2 satori.png",
    tier: "EX",
opts: {
    e: true,
    supp: true
}
  },
  {
    name: "C3>> Toyohime",
    img: "c3 toyohime.png",
    tier: "EX",
opts: {
    e: true,
    tec: true
}
  },
  {
    name: "Lr1 Gengetsu",
    img: "SPOILER_gengetsu.jpg",
    tier: "EX",
opts: {
    r: true,
    tec: true
}
  },
  {
    name: "C5> Miko",
    img: "c5 miko.png",
    tier: "EX",
opts: {
    dest: true,
    e: true
}
  },
  {
    name: "L80 Kasen",
    img: "kassy.jpg",
    tier: "EX",
opts: {
    r: true,
    atk: true
}
  },
  {
    name: "L0o Koishi",
    img: "lo koishi.png",
    tier: "EX",
opts: {
    p: true,
    dest: true
}
  },
  {
    name: "F1 Marisa",
    img: "f1 mors.png",
    tier: "EX",
opts: {
    e: true,
    dest: true
}
  }, //Start of SS
  {
    name: "Cb3# Reisen",
    img: "cb3# reisen.png",
    tier: "SS",
opts: {
    e: true,
    dbf: true
}
  },
  {
    name: "L80 Yukari",
    img: "l80 yukari.png",
    tier: "SS",
opts: {
    r: true,
    atk: true
}
  },
  {
    name: "A6æ Rumia",
    img: "phfes.png",
    tier: "SS",
opts: {
    dest: true,
    ph: true
}
  },
  {
    name: "L10.1 Remilia",
    img: "l10.1 remilia.png",
    tier: "SS",
opts: {
    e: true,
    tec: true
}
  },
  {
    name: "L10.1 Flandre",
    img: "l10.1 flandre.png",
    tier: "SS",
opts: {
    atk: true,
    e: true
}
  },
  {
    name: "Cf1# Koishi",
    img: "cf1# koishi.png",
    tier: "SS",
opts: {
    e: true,
    tec: true
}
  },
  {
    name: "L0g Kanako",
    img: "lg kanako.png",
    tier: "SS",
opts: {
    p: true,
    def: true
}
  },
  {
    name: "C5> Zanmu",
    img: "spring zanmu.png",
    tier: "SS",
opts: {
    e: true,
    spd: true
}
  },
  {
    name: "L80 Aya",
    img: "l80 aya.png",
    tier: "SS",
opts: {
    r: true,
    spd: true
}
  },
  {
    name: "Ce9 Remilia",
    img: "ce9 remilia.png",
    tier: "SS",
opts: {
    e: true,
    atk: true
}
  },
  {
    name: "C5> Saki",
    img: "c5 saki.png",
    tier: "SS",
opts: {
    atk: true,
    e: true
}
  },
  {
    name: "L0g Suwako",
    img: "lg suwako.png",
    tier: "SS",
opts: {
    p: true,
    atk: true
}
  },
  {
    name: "C3 Yuyuko",
    img: "beach yuyu.png",
    tier: "SS",
opts: {
    dest: true,
    e: true
}
  },
  {
    name: "Lm1 Mugetsu",
    img: "mugetsu.png",
    tier: "SS",
opts: {
    spd: true,
    r: true
}
  },
  {
    name: "A14.5& Mamizou",
    img: "A15.5& Mamizou.png",
    tier: "SS",
opts: {
    dbf: true,
    ex: true
}
  },
  {
    name: "C5> Hecatia",
    img: "spring hecatia.png",
    tier: "SS",
opts: {
    e: true,
    atk: true
}
  },
  {
    name: "C3>> Yorihime",
    img: "c3 yorihime.png",
    tier: "SS",
opts: {
    dest: true,
    e: true
}
  }, // start of S tier
  {
    name: "C3∫ Reisen",
    img: "C3integral reisen supp.png",
    tier: "S",
opts: {
    supp: true,
    e: true
}
  },
  {
    name: "Razor",
    img: "genshin28.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Rosaria",
    img: "genshin29.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Sangonomiya Kokomi",
    img: "genshin30.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Sayu",
    img: "genshin32.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Shenhe",
    img: "genshin33.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Sucrose",
    img: "genshin34.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Tartaglia (Childe)",
    img: "genshin35.png",
opts: {
    men: true,
    liy: true //should i add a snezhnaya one for this? i feel like it's unecessary since he's the only playable character from it so far. I'll keep him as liyueian for now
}
  },
  {
    name: "Thoma",
    img: "genshin36.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Lumine",
    img: "genshin37.png",
opts: {
    fem: true,
    lol: true
}
  },
  {
    name: "Aether",
    img: "genshin38.png",
opts: {
    men: true,
    lol: true
}
  },
  {
    name: "Amber",
    img: "genshin31.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Venti",
    img: "genshin39.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Xiangling",
    img: "genshin40.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Xiao",
    img: "genshin41.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Xingqiu",
    img: "genshin42.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Xinyan",
    img: "genshin43.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Yae Miko",
    img: "genshin44.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Yanfei",
    img: "genshin45.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Yoimiya",
    img: "genshin46.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Yun Jin",
    img: "genshin47.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Zhongli",
    img: "genshin48.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Kamisato Ayato",
    img: "genshinex1.png",
opts: {
   men: true,
   ina: true
}
  },
  {
    name: "Dainslief",
    img: "genshinex2.png",
opts: {
   men: true,
   unr: true,
   lol: true //same as childe. he's from khanreiah but seems redundant to add a specific filter just for that. he will stay as nationless for now
}
  },
  {
    name: "Yelan",
    img: "genshinex3.png",
opts: {
   fem: true,
   liy: true
}
  },
  {
    name: "Kuki Shinobu",
    img: "genshinex4.png",
opts: {
   fem: true,
   ina: true
}
  },
  {
    name: "Yaoyao",
    img: "genshinex5.png",
opts: {
   fem: true,
   liy: true
}
  },
  {
    name: "Heizou",
    img: "genshinex6.png",
opts: {
   men: true,
   unr: false,
   ina: true
}
  },
  {
    name: "Collei",
    img: "Character_Collei_Card.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Dori",
    img: "Character_Dori_Card.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Tighnari",
    img: "Character_Tighnari_Card.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Alhaitham",
    img: "al haitham.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Cyno",
    img: "cyno.jpg",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Deyha",
    img: "deyha.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Nahida",
    img: "kusanali.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Nilou",
    img: "nilou.jpg",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Candace",
    img: "candace.jpg",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Layla",
    img: "layla.png",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Faruzan",
    img: "faruzan.jpg",
opts: {
   fem: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Wanderer (Scaramouche)",
    img: "wanderer.jpg",
opts: {
   men: true,
   unr: false,
   sum: true,
   ina: true
}
  },
  {
    name: "Baizhu",
    img: "baizhu.png",
opts: {
   men: true,
   liy: true
}
  },
  {
    name: "Freminet",
    img: "freminet.png",
opts: {
   men: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Kaveh",
    img: "kaveh.png",
opts: {
   men: true,
   unr: false,
   sum: true
}
  },
  {
    name: "Kirara",
    img: "kirara.png",
opts: {
   fem: true,
   unr: false,
   ina: true
}
  },
  {
    name: "Lynette",
    img: "lynette.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Lyney",
    img: "lyney.png",
opts: {
   men: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Mika",
    img: "mika2.png",
opts: {
   men: true,
   unr: false,
   mond: true
}
  },
  {
    name: "Neuvillette",
    img: "neuvillete.png",
opts: {
   men: true,
   fon: true
}
  },
  {
    name: "Wriothsely",
    img: "wriothesley.png",
opts: {
   men: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Furina",
    img: "Furina_Card.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Charlotte",
    img: "Charlotte_Card.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Clorinde",
    img: "NPC_Clorinde.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Navia",
    img: "NPC_Navia.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Chevreuse",
    img: "Chevreuse.png",
opts: {
   fem: true,
   unr: false,
   fon: true
}
  },
  {
    name: "Chiori",
    img: "Chiori.png",
opts: {
   fem: true,
   unr: true,
   fon: true
}
  },
  {
    name: "Gaming",
    img: "Gaming.png",
opts: {
   men: true,
   unr: false,
   liy: true
}
  },
  {
    name: "Xianyun",
    img: "Xianyun.png",
opts: {
   fem: true,
   unr: false,
   liy: true
}
  }
]  
