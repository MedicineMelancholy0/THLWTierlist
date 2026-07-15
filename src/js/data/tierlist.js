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
    tooltip: "Check this to Sfes/Ufes Characters"
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
    name: "L1 Reimu",
    img: "l1 reimu.png",
    tier: "Dummy",
opts: {
    g: true,
    def: true
}
  },
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
    img: "cb3 reisen.png",
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
    img: "phfes rumia.png",
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
    img: "cf1 koishi.png",
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
    img: "beach yuyu.jpg",
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
    name: "A17& Eika",
    img: "a17& eika.png",
    tier: "S",
opts: {
    tec: true,
    ex: true
}
  },
  {
    name: "A13& Seiga",
    img: "a13& seiga.png",
    tier: "S",
opts: {
    dest: true,
    ex: true
}
  },
  {
    name: "A9.4& Sakuya",
    img: "a9.4& sakuya.png",
    tier: "S",
opts: {
    atk: true,
    ex: true
}
  },
  {
    name: "Lr Aya",
    img: "zenki.jpg",
    tier: "S",
    opts: {
      tec: true,
      u: true
    }
  },
  {
    name: "L80 Kokoro",
    img: "l80 kokoro.png",
    tier: "S",
opts: {
    r: true,
    atk: true
}
  },
  {
    name: "C3 Sakuya",
    img: "c3 sakuya2.png",
    tier: "S",
opts: {
    supp: true,
    e: true
}
  },
  {
    name: "C5= Kaguya",
    img: "c35= kaguya.png",
    tier: "S",
opts: {
    dest: true,
    e: true
}
  },
  {
    name: "L0g Sanae",
    img: "fake ass sanae.jpg",
    tier: "S",
opts: {
    p: true,
    heal: true //should i add a snezhnaya one for this? i feel like it's unecessary since he's the only playable character from it so far. I'll keep him as liyueian for now
}
  },
  {
    name: "C3< Nitori",
    img: "fall nitori.png",
    tier: "S",
opts: {
    tec: true,
    e: true
}
  },
  {
    name: "C3≥ Nitori",
    img: "mech nitori.png",
    tier: "S",
opts: {
    supp: true,
    e: true
}
  },
  {
    name: "C3< Chimata",
    img: "fall chimata.png",
    tier: "S",
opts: {
    supp: true,
    e: true
}
  },
  {
    name: "Laa1 Sakuya",
    img: "laa1 sakuya.png",
    tier: "S",
opts: {
    atk: true,
    e: true
}
  },
  {
    name: "A16& Satono",
    img: "a16& satono.png",
    tier: "S",
opts: {
    ex: true,
    spd: true
}
  },
  {
    name: "C3~ Yoshika",
    img: "c3~ yoshika.png",
    tier: "S",
opts: {
    dest: true,
    e: true
}
  },
  {
    name: "C3 Cirno",
    img: "C3 cirno.png",
    tier: "S",
opts: {
    spd: true,
    e: true
}
  },
  {
    name: "C3 Yukari",
    img: "c3 yukari.png",
    tier: "S",
opts: {
    heal: true,
    e: true
}
  },
  {
    name: "L80 Reimu",
    img: "mv reimu.jpg",
    tier: "S",
opts: {
    r: true,
    spd: true
}
  },
  {
    name: "C3 Narumi",
    img: "c3 narumi.png",
    tier: "S",
opts: {
    atk: true,
    e: true
}
  }, // Start of A
  {
    name: "A16.3& Kosuzu",
    img: "a16.3& kosuzu.png",
    tier: "A",
opts: {
    atk: true,
    ex: true
}
  },
  {
    name: "C3 Sekibanki",
    img: "sekibanki.jpg",
    tier: "A",
opts: {
    spd: true,
    e: true
}
  },
  {
    name: "C3 Sanae",
    img: "c3 sanae.png",
    tier: "A",
opts: {
    dbf: true,
    e: true
}
  },
  {
    name: "C3 Alice",
    img: "c3 alice.png",
    tier: "A",
opts: {
    dbf: true,
    e: true
}
  },
  {
    name: "C3 Reimu",
    img: "c3 reimu.png",
    tier: "A",
opts: {
   spd: true,
   e: true
}
  },
  {
    name: "Ce1 Flandre",
    img: "ce1 flandre.png",
    tier: "A",
opts: {
   e: true,
   spd: true
}
  },
  {
    name: "C5= Mokou",
    img: "c5 mokou.png",
    tier: "A",
opts: {
   atk: true,
   e: true
}
  },
  {
    name: "C5> Eiki",
    img: "spring eiki.png",
    tier: "A",
opts: {
   e: true,
   tec: true
}
  },
  {
    name: "C3' Junko",
    img: "c3' junko.png",
    tier: "A",
opts: {
   spd: true,
   e: true
}
  },
  {
    name: "C3' Seiga",
    img: "c3' seiga.png",
    tier: "A",
opts: {
   e: true,
   tec: false
}
  },
  {
    name: "C3' Urumi",
    img: "c3' urumi.png",
    tier: "A",
opts: {
   atk: true,
   e: false
}
  },
  {
    name: "C3' Nemuno",
    img: "c3' nemuno.png",
    tier: "A",
opts: {
   e: true,
   dest: false
}
  },
  {
    name: "Cf1# Reimu",
    img: "cf1 reimu.png",
    tier: "A",
opts: {
   dest: true,
   e: false
}
  },
  {
    name: "L10.1 Reimu",
    img: "l10.1 reimu.png",
    tier: "A",
opts: {
   e: true,
   tec: false
}
  },
  {
    name: "F1 Koishi",
    img: "f1 koishi.png",
    tier: "A",
opts: {
   tec: true,
   e: false
}
  },
  {
    name: "Lm1 Mima",
    img: "lm1 mima.png",
    tier: "A",
opts: {
   r: true,
   dest: false
}
  },
  {
    name: "Lr1 Shinki",
    img: "lr1 shinki.png",
    tier: "A",
opts: {
   atk: true,
   r: false
}
  },
  {
    name: "L80 Ran",
    img: "l80 ran.png",
    tier: "A",
opts: {
   r: true,
   def: false
}
  },
  {
    name: "L80 Yuyuko",
    img: "mv yuyu.jpg",
    tier: "A",
opts: {
   tec: true,
   r: false
}
  },
  {
    name: "L80 Miko",
    img: "l80 miko.png",
    tier: "A",
opts: {
   tec: true,
   r: false
}
  },
  {
    name: "A7& Yuyuko",
    img: "a7& yuyuko.png",
    tier: "A",
opts: {
   supp: true,
   ex: false
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
