dataSetVersion = "tierlist"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};
const container = document.getElementByID("EX");

function addCharacter(item.img) {
  const i = document.createElement("div");
  i.innerHTML = `<img src="${item.imageURL}" />` // you can add more stuff here, css classes, etc.
  
  container.appendChild(i); // container is the tier list container
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
    img: "L0g Satori.png",
    tier: "EX",
opts: {
    p: true,
    dbf: true
}
  },
  {
    name: "Cz1# Marisa",
    img: "cz1# marisa.png",
    tier: "EX",
    opts: {
      atk: true,
      e: true
    }
  },
  {
    name: "Cs2# Satori",
    img: "cs2# satori.png",
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
    name: "Beidou",
    img: "genshin5.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Bennett",
    img: "genshin6.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Chongyun",
    img: "genshin7.png",
opts: {
    men: true,
    liy: true
}
  },
  {
    name: "Keqing",
    img: "genshin8.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Diluc",
    img: "genshin9.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Diona",
    img: "genshin10.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Eula",
    img: "genshin11.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Fischl",
    img: "genshin12.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Ganyu",
    img: "genshin13.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Gorou",
    img: "genshin14.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Hu Tao",
    img: "genshin15.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Jean",
    img: "genshin16.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Kaedehara Kazuha",
    img: "genshin17.png",
opts: {
    men: true,
    ina: true
}
  },
  {
    name: "Kaeya",
    img: "genshin18.png",
opts: {
    men: true,
    mond: true
}
  },
  {
    name: "Kamisato Ayaka",
    img: "genshin19.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Klee",
    img: "genshin20.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Kujou Sara",
    img: "genshin21.png",
opts: {
    fem: true,
    ina: true
}
  },
  {
    name: "Lisa",
    img: "genshin22.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Mona",
    img: "genshin23.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Ningguang",
    img: "genshin24.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Noelle",
    img: "genshin25.png",
opts: {
    fem: true,
    mond: true
}
  },
  {
    name: "Qiqi",
    img: "genshin26.png",
opts: {
    fem: true,
    liy: true
}
  },
  {
    name: "Raiden Shogun",
    img: "genshin27.png",
opts: {
    fem: true,
    ina: true
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
