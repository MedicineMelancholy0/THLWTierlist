const dataSet = {};
const dataSetVersion = "tierlist"; 
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  { name: "Filter Pure Fes", key: "p", tooltip: "Check this to remove Pure Fes Characters" },
  { name: "Filter Epics", key: "e", tooltip: "Check this to remove Epic Characters" },
  { name: "Filter Relics & Genics", key: "r", tooltip: "Check this to remove Relic and Genic Characters." },
  { name: "Filter Phantasm Fes", key: "ph", tooltip: "Check this to remove Phantasm Fes Characters." },
  { name: "Filter ExFes", key: "ex", tooltip: "Check this to remove Extended Fes Characters." },
  { name: "Filter Battle Pass Characters", key: "b", tooltip: "Check this to remove Battle Pass Characters." },
  { name: "Filter Ultra Fes", key: "u", tooltip: "Check this to Sfes/Ufes Characters" },
  { name: "Filter Fes", key: "a", tooltip: "Check this to remove A-Fes Characters." },
  { name: "Filter General Characters", key: "g", tooltip: "Check this to remove characters from the General pool (L1s)." },
  { name: "Filter Yukkuris", key: "y", tooltip: "Check this to remove Yukkuris." },
  { name: "Filter Atk Units", key: "atk", tooltip: "Check this to remove Atk Units." },
  { name: "Filter Def Units", key: "def", tooltip: "Check this to remove Def Units." },
  { name: "Filter Spd Units", key: "spd", tooltip: "Check this to remove Spd Units." },
  { name: "Filter Heal Units", key: "heal", tooltip: "Check this to remove Heal Units." },
  { name: "Filter Supp Units", key: "supp", tooltip: "Check this to remove Support Units." },
  { name: "Filter Dbf Units", key: "dbf", tooltip: "Check this to remove Debuff Units." },
  { name: "Filter Dest Units", key: "dest", tooltip: "Check this to remove Dest Units." },
  { name: "Filter Tec Units", key: "tec", tooltip: "Check this to remove Tec Units." }
];

dataSet[dataSetVersion].characterData = [
  { name: "L1 Reimu", img: "l1 reimu.png", tier: "Dummy", opts: { g: true, def: true } },
  
  // start of EX
  { 
    name: "L0o Satori", 
    img: "lo satori.png", 
    tier: "EX", 
    opts: { p: true, dbf: true },
    explanation: {
      pros: [
        "+ Scintillating Party Damage Amplification between her broken Permanent Defense Down, Domain Expansion Skill, and Superb Breaking that makes everyone's numbers quickly multiply by the dozen thanks to the way they interact with each other.",
        "+ Hilariously strong damage across the board complemented not just by amazing killer range (and her Crit Mods) but also by her amazing AoE and Anomaly buffs",
        "+ Even outside of her amazing breaks, her utility is essentially unparalleled between her basically giving the party negative P buffs letting her be free to run pure buffing cards like Ice Sword to make everyone's innate buffs even stronger."
      ],
      boons: [
        "Infinite self barriers makes her invulnerable vs. any 1 enemy"
      ],
      cons: [
        "- Party support outside aoe is literally 0 (be honest when is this an issue if you use one aoe per gauge)"
      ],
      nitpick: [
        "? Skill set up for perma def down is weird, you either ignore her second skill on inflict until g2 or you full send everything and lose out on the second gauge of breaks",
        "? Unlike the other top tiers in this tier, she doesnt buff everyone, a lot of her power is for yang units only"
      ],
      extra: [
        "her actual use will largely be as a l0g gengetsu but in just yang comps, which works quite well. In general she will run out of things to complain about lol? How funny",
        "Solos 5 ele ex (infinite barrier lmao)"
      ]
    }
  },
  { 
    name: "Cz1# Marisa", 
    img: "cz2 marisa.png", 
    tier: "EX", 
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Incredible double damage skill forces a lot of comps that shouldnt \"work\"",
        "Great support with a focus on crit in combination with her stored power compliment her other pros",
        "Broken Killer Range, Big Damage. Aoe is basically ekari lw (prerein) thanks to stored power, with all these attributes she is quite obvious in her gameplan (Cheese buffs and damage)"
      ],
      mixed: [
        "Although she has qol issues, such as party freeze, in practice she can brute force any problem in exchange for freedoms in your other units.",
        "Acc is kinda schizo - Lacks Party Acc Buffs"
      ],
      nitpick: [
        "Primary killers on ST are kinda whack (but it doesnt matter much cause of her raw dmg!)"
      ],
      extra: [
        "Has nn bias because nn loves the color red so her secondary killer is bluemu secondary killer but better????",
        "DS Solo Count: IDK a lot",
        "Undeniably the best unit in the game, to the point where a new tier was considered to be made for her (which wouldve been better than most biased units in non bias content .ie better than most c3 in swimsuit stage). As such she gets a custom border",
        "NOTABLE PAIRINGS (Not included in tiering):\nLITERALLY EVERYONE! C5> Zanmu + L0g Suwako and L80 Kokoro, L10.1 Sakuya especially."
      ]
    }
  },
  { 
    name: "Cs2# Satori", 
    img: "cs2 satori.png", 
    tier: "EX", 
    opts: { e: true, supp: true },
    explanation: {
      pros: [
        "7 breaks 1 turn, with four on spell. In combination with amazing p up for cards and amazing combination of t1 buffs means she can outpace gengetsu in cases",
        "Her card options are amazing especially helped by her over abundance of p up, letting her do every role outside of aoe damage perfectly with not one major gap",
        "One of the best buff cheesers on the last gauge despite not having anom buffing, -4 yin def 45% wood anyone?"
      ],
      cons: [
        "Her aoe damage is lacking in general, with questionable killers and even on killer the base damage is quite low for that role (as we compare aoe damage without t2 buffs since t2 buffs is what keeps aoe spell nuking relevant)"
      ],
      nitpick: [
        "Breaks are Late and locked to 3p",
        "Lacks Acc Between Gauges",
        "For universal notes, while her base damage still isnt high enough to cheese out things at cap (like most of the tier) her buff cheesing for the last gauge is also much better, so she wont run into fraud issues where she just fails a last gauge kill in a duo comp (like nyfishi for example)"
      ],
      extra: [
        "Usage: Look at the first pro listed, she is gengetsu effectively. The main realistic con is that her inflict skill is on her p skill and she needs 3p, but she has enough tools to get around that (p from anoms, another p skill), so while that may break some synergies if it works it will work better than gengetsu, crazy"
      ]
    }
  },
  { 
    name: "C3>> Toyohime", 
    img: "c3 toyohime.png", 
    tier: "EX", 
    opts: { e: true, tec: true },
    explanation: {
      pros: [
        "Extreme amounts of breaks, anoms broken, and high speed+agi anoms to compliment all while having negative p requirements for such roles",
        "Due to the above, her ability to adapt to stages is incredibly high as she can utilize any card to compliment her above average buffs. Giving her perfect coverage when used as the driver in comps",
        "Despite this immense utility, she makes no other sacrifices, boasting great killer and great damage. The combination of having amazing util and amazing damage means she really only needs a supportive anchor in cases where shes driven"
      ],
      boons: [
        "Silly res nuking, sometimes it can be better to buff her last gauge instead of vice versa in case of gimmick hell like acc down"
      ],
      mixed: [
        "Notably lacking true t1 crit. Due to the above pros, she has means to avoid this as a weakness, but it needs to be addressed"
      ],
      nitpick: [
        "Gimmicks could be better but being this good already with those gimmicks means she only scales that much better with decent teammates (not hard)",
        "Freeze Vulnerable (NOT A BIG DEAL IN PRACTICE)",
        "No anomaly interaction on shots (lol)"
      ],
      extra: [
        "Usage: Like with all these EX++ (outside geng) Characters she can both be the driver and be driven (1/3 and 3/3). Use her in any case as relevant tbh, we are all used to geng clones but #better by now.",
        "Solos 5 ele ex (really lucky coverage)"
      ]
    }
  },
  { 
    name: "Lr1 Gengetsu", 
    img: "SPOILER_gengetsu.jpg", 
    tier: "EX", 
    opts: { r: true, tec: true },
    explanation: {
      pros: [
        "Incredible Buffs AND Card Freedoms giving her a swiss army knife-esque kit",
        "All of that support complimented by incredible breaking, paired with agi anoms",
        "Generally good nuking ability for last word, solid amounts of all buffs for the nuking turn, strong ST Spellcard, incredible buff cheesing due to def down, card options, and buffs",
        "Similar to prime mvmu, abusing all those freedoms allows her to effectively \"out util\" any bad situation. Where as others would get utterly destroyed by a burn immune enemy, geng would just util bullshit her way through if needed"
      ],
      cons: [
        "Below questionable AoE spellcard killer, completely shafting her to just that role"
      ],
      nitpick: [
        "shit p0 killers (but it doesnt matter much!)",
        "ST doesn't break the anoms it inflicts",
        "Not Freeze/Para Immune"
      ],
      extra: [
        "If yin = true, use gengetsu, accept no substitute.",
        "Many many characters require gengetsu to exist simply due to her ability to break debuff AND fix their flaws with her buffs AND still nuke in effective content. Just spam aoe spells and save her own burn skill for second gauge.",
        "Solos 4 Ele EX"
      ]
    }
  },
  { 
    name: "C5> Miko", 
    img: "c5 miko.png", 
    tier: "EX", 
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Second highest damage in the game lw, CURRENT HIGHEST ON AOE FULL KILLER (until lootori gets her bis anyways)",
        "Damage is complimented by her having a surprisingly solid buff count throughout her kit avoiding the large issues logwako and looshi (aoe) have. Making her absurd damage very practical",
        "In addition to her buffing, which is pretty solid for herself and very above average for party, she has proper 4 break aoe and 3 inflict, allowing her to be used both as the damage bot in teams like an l0 and the supportive unit for poison comps",
        "Lw nlm lets her hit above nyshi...off killer...what"
      ],
      cons: [
        "AoE p0 killers are lacking for her to reach said damage bot peaks, this can be mitigated by attempting to abuse the nlm. But it is a flaw that inhibits her use cases as the damage bot like she wants to do",
        "Due to the lack of def down and lack of acc, the most common means of shafting, she can very much \"fraud out\" in a similar vain to how f1mors was perceived after release...only...worse. to the point of being an issue.",
        "worst theme in the game?"
      ],
      extra: [
        "Tldr: a unit with such silly rank ii, scaling, and raw damage gets to keep their raw neutral damage. However, it's only 7mil. A lot to be sure! But not...silly like her eff dmg is.",
        "The final con is a genuine concern to remember before calling her undertiered, no other character in ex has to deal with both of these issues and they become very prominent very quickly unless the stage is designed to do neither def up nor acc shaft. These issues CAN be fixed by much easier than normal though, due to the sheer damage output. To the point something silly like mv ran can work if 5 actions can work."
      ]
    }
  },
  { 
    name: "L80 Kasen", 
    img: "kassy.jpg", 
    tier: "EX", 
    opts: { r: true, atk: true },
    explanation: {
      pros: [
        "Party 100% Damage Up!!!!",
        "Incredible Crit Support & Good Yin Support",
        "Strong Damage to Res & Anomaly Breaks",
        "As a yin atk unit, has absurd card options to fix many flaws INCLUDING 100% -4 DEF WHAT"
      ],
      boons: [
        "Super Good Sticks (made for her lol)"
      ],
      mixed: [
        "Her use is also co-dependent on other units rather than providing much solo aside from her Skill 3. (think gengetsu, try and emulate kasen + gengetsu + aoe nuker with her)"
      ],
      cons: [
        "Lacks strong killers"
      ],
      nitpick: [
        "ST Doesn't break the anomalies it inflicts",
        "Not Freeze/Para Immune"
      ],
      extra: [
        "NOTABLE PAIRINGS (Not included in tiering): ??? EVeryone? Esp in conjunction with Gengetsu lol",
        "Solos 4 ele ex"
      ]
    }
  },
  { 
    name: "L0o Koishi", 
    img: "lo koishi.png", 
    tier: "EX", 
    opts: { p: true, dest: true },
    explanation: {
      pros: [
        "Obviously High Damage with Great Killers Across the Board",
        "Her raw buffing is noteable, as if she is used to drive someone else the person being driven wont have much issue",
        "High raw breaks (8/5 is quite huge, Geng-tier) combined with fast breaking is generally great and works well with both archetypes she tries to be"
      ],
      cons: [
        "$300 who doesn’t solo everything",
        "Despite the above, the buffs she needs for her own minimum requirements are still lacking, much like logwako, especially due to her lack of accuracy and lack of any practical buffing last gauge outside ability. Due to these reasons she is highly inconsistent at both those roles (1/3 and 3/3) resulting in her missing ex",
        "Lacking Innate Debuffs especially doesn't help with her last gauge problem. As her damage is actually below average for modern l0s. Still high, but not high enough to make 3 crit yang atk and def work (if that, she can run into p issues as well)"
      ],
      nitpick: [
        "AoE Spell, while it should be fine for most content, can do a bit less damage than one would expect"
      ],
      extra: [
        "You know, for a unit trying to be many things at once like lootori, she somehow misses? Lootori gets by because her numbers are frankly just higher and she does more with less (big focus on agi and crit help, and def down), in addition has agi anoms for more consistency overall.",
        "noteable pairings:\nif you like running shrine maiden training, use nysen. nysen saves a lot of units with this sorta \"build\" (see: exyuuka) and will basically get around all these issues. NOT FREEZE IMMUNE DO NOT USE LOOTORI WITH HER"
      ]
    }
  },
  
  // start of SS
  { 
    name: "F1 Marisa", 
    img: "f1 mors.png", 
    tier: "EX", 
    opts: { e: true, dest: true },
    explanation: {
      pros: [
        "Stupid High Damage Output, Wide Killers + 4 NLM linesa",
        "Superb Breaking Ability, even if extremely unrealistic.",
        "More Party 100% Damage Up!!"
      ],
      boons: [
        "CORRECTION, shes ace",
        "not a skill bot anymore!!! (usually worth investing in to fixing her flaws)"
      ],
      mixed: [
        "Dmg to Eff Issues",
        "Aoe damage is effectively where this unit earns her placement. Which both has questionable killer and requires between gauge support (@@@@@)"
      ],
      nitpick: [
        "All her stuns besides LW are cucked by RNG",
        "Not Freeze Immune"
      ],
      cons: [
        "AoE Spell Elements are Disjointed from the rest of her kit (further making more of her power in her aoe)",
        "Outside of Stored Power, Low Innate Support, Lacks Utility, Debuffing. (@@@@@) Which means she is effectively just a damage unit 99% of the time unless someone else does all of those roles (wonder who)",
        "Just really wants gengetsu/cs2/bunnyo outside them she is reliant on stuff like mima with buffing cards and its just not the same"
      ],
      extra: [
        "@@@@@@@@@@@@@ or mima or nursen i guess....@@@@@@",
        "Basically third best unit if you pair with gengetsu or etc (@@@@@)",
        "NOTABLE PAIRINGS (Not included in tiering): Gengetsu, cs2, bunnyohime... after that, anyone tbh."
      ]
    }
  },
  { 
    name: "Cb3# Reisen", 
    img: "cb3 reisen.png", 
    tier: "SS", 
    opts: { e: true, dbf: true },
    explanation: {
      pros: [
        "Perma def down and 4 break aoe + 3 inflict from skill is usually THE recipe for success and something most units want if they can afford it",
        "Noticeably high damage at cap on all attacks, complimented by great killer and debuffs",
        "Sanmu level res nuking",
        "While unconventional, her utility from her aoe is good."
      ],
      cons: [
        "slow breaking and quick spam on her p and inflict skill prevent her from abusing her base aoe damage, requiring new comp ideas to do that",
        "utter lack of t1 buffs entirely bottleneck this unit, as the ways to counteract this are to pair with better units (such as cz2, which isn't considered in this tier list) or to...not do that and lose. The lack of t1 buffs largely kills her fb into perma def down abuse (something lootori avoids by having the perfect buffs for that situation) and in general really destroys the unit, usually forcing her to trio, that said this has been proven to be supplemented overtime as more players trade their broken units for more specialized ones like exyuuka, abusing nysens broken amount of damage amp to mind the gap.",
        "Double quick and high speed tier make using her aoe for damage living hell requiring very specific units to fix"
      ],
      extra: [
        "usage: imma be so fr guys this character is ex++ with a character liek cz2 backing her and then if you suddenly dont use cz2 youre kinda fucked. HOWEVER what Reisen really excels at is simply obscene damage amp. for chars who generally have sufficient self buffs (like Ex Yuuka) hence she has a non-negligible amount of duos and practical use.",
        "note: 50% AGI sync is slightly overrated, modern units typically have more damage from their atk side than their scaling side thanks to rank ii attack being spammed on everyone's last gauge, so while nice it isnt like \"oh youre buffing 2/3rds of the damage thats op\""
      ]
    }
  },
  { 
    name: "L80 Yukari", 
    img: "l80 yukari.png", 
    tier: "SS", 
    opts: { r: true, atk: true },
    explanation: {
      pros: [
        "Massive Damage with Great Killers Across the Board Backed Up by Great Cards (Ikaruga) and Great Dmg to Res. Basically the best G3 Nuke in the game.",
        "Very High Buff Counts on All Gauges to Support said Damage, along with being easy to support thanks to having low Agility (Also giving her Rank II Skills more value by giving them an actual Rank I platform to multiply off of)"
      ],
      mixed: [
        "Wants more Yin Atk/Def on Last Word"
      ],
      nitpick: [
        "2t Gimmicks are Kinda Annoying but Mostly Savable"
      ],
      cons: [
        "Lacks Utility outside of Party P (Self Acc)"
      ]
    }
  },
  { 
    name: "A6æ Rumia", 
    img: "phfes rumia.png", 
    tier: "SS", 
    opts: { dest: true, ph: true },
    explanation: {
      pros: [
        "L0g-Tier Damage Numbers across the Board complemented both by Wide Killer Range and High Natural Crit Counts",
        "Aforementioned Damage Numbers are Supported by Good T1 Buffs and Great Rank II's, along with the ever-useful 50% Light -3 Def Down D-Cards",
        "All this with basically Negative P issues allowing her to Spam Damage + Breaks + Debuffs without running out of Gas"
      ],
      boons: [
        "Immortal vs. 1 Enemy"
      ],
      mixed: [
        "Will want more Crit Acc Support to utilize her NLM (Crit) Lines",
        "7/4 Breaking Spellcard is on the Spellcard with Worse Damage and Buffs (sc2) which is not optimal"
      ],
      cons: [
        "Lacks Innate Accuracy Entirely (outside X-Change which isn't considered) putting a Damper on her Kit",
        "Basically Lacks Utility outside Party P mostly due to being confined to basically 6/3 Breaks which is really behind for the tier."
      ],
      extra: [
        "*Note: X-Change Swap-Ins are NOT considered for her tier.",
        "ExRumia pairing/X-Change is only really useful for EBR. For more info, check the FAQ"
      ]
    }
  },
  { 
    name: "L10.1 Remilia", 
    img: "l10.1 remilia.png", 
    tier: "SS", 
    opts: { e: true, tec: true },
    explanation: {
      pros: [
        "Superb Breaking Skills cement her as a powerful and versatile breaker",
        "High Access to Raw Buffs (Crit Acc Anyone?) throughout her kit plus Fast AoE Breaks also synergizes her role as a Damage Dealer with High, reliable damage on killer"
      ],
      mixed: [
        "She will want slightly more Buffs and P throughout her kit to cement her damage overall",
        "Killers, though not bad, do leave a lot to be desired and she will have extreme damage variance outside of killer content.",
        "Double Forced Quick is a double edged sword with this kit as it can help her util but the aforementioned issues can also make things very awkward"
      ],
      cons: [
        "Completely lacking innate Acc buffs hurts her roles as both a damage dealer and a supporter"
      ]
    }
  },
  { 
    name: "L10.1 Flandre", 
    img: "l10.1 flandre.png", 
    tier: "SS", 
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Thanks to very high damage complimented further by 70% damage to res her nukes are incredibly versatile and reliable on killer. Basically the best g3 nuke in the game on killer lmao.",
        "Scintillating Crit Buffs and high overall raw buffs her kit in synergy with D cards with gives her a good supportive niche that complements her damage in tandem with her decent innate Util"
      ],
      mixed: [
        "Will tend to want more Yin Atk Buffs in Practice",
        "Killers, while not bad, will tend to leave more to be desired and her high innate Crit Acc will lead to much Damage Variance outside Killer",
        "Having a Quick skill on a Party P skill will lead to whatever damage she has on the gauge it's used on to be usually ass and the Quick is essentially a debuff"
      ]
    }
  },
  { 
    name: "Cf1# Koishi", 
    img: "cf1 koishi.png", 
    tier: "SS", 
    opts: { e: true, tec: true },
    explanation: {
      pros: [
        "Amazing lw damage provided proper play, with great aoe spell damage.",
        "Above roles are complimented by her extremely fast break and otherwise solid utilities, most noteably party poison spam.",
        "Overall good buffing"
      ],
      mixed: [
        "Two quick skills making using her for her great damage and between gauge buffs a NIGHTMARE, but its really only an issue past the first gauge in some combos."
      ],
      cons: [
        "For an ex unit she is lacking in universal outside element content as her damage is largely gated behind her 45% dmg to eff (not an issue for lw, is an issue for aoe). aka, dmg to eff issues",
        "Lower than wanted t1 buffs, but it isn't bad just..lower than what is wanted in this tier and given what she gives.",
        "Lacks Def Down on LW, and her LW damage tends to suffer greatly for it"
      ],
      extra: [
        "You use her as a gap filler seemingly? Her usage is hard to judge because she is prone to frauding out at any given opportunity. She is an example of a unit who is too min maxed, with barely enough of everything to get the job done...yet if there is any resistance to her she sort of dies? I will be looking into out of ele preformance overtime as her util would ordinarily stop that from happening. usually more raw damage (cz2) or over abundance of util (exmamizou, mvmu, etc) would prevent such issues but they don't here. give me time please"
      ]
    }
  },
  { 
    name: "L0g Kanako", 
    img: "lg kanako.png", 
    tier: "SS", 
    opts: { p: true, def: true },
    explanation: {
      pros: [
        "Nuking everything with Utterly Stupid Damage on everything she has is her main use. Anything she touches tends to die w/ proper support (not hard to do)",
        "Good Acc Utility + Decent Barrier + P Util on her AoE"
      ],
      boons: [
        "Immortal vs. 1 unit"
      ],
      mixed: [
        "Reliant on Story Cards or Teammates for Debuffs to properly capitalize on said damage, though her Domain Expansion remedies this a good bit"
      ],
      cons: [
        "300$ unit that doesnt solo everything",
        "Amazingly subpar buffs and breaks on her own, though going last will tend to mended these problems."
      ],
      nitpick: [
        "Impossible to consistency check with due to the nature of her rarity"
      ],
      extra: [
        "Essentially Yang Cstroos that trades buffs for damage. Essentially, you pair her with Nysen and stages very quickly fall apart.",
        "You play this unit like you do whitenae, a fiddle, just how nn played you into purchase",
        "NOTABLE PAIRINGS (Not included in tiering): !!!!!NYSEN!!!!!, Ex Mamizou, Mugetsu, Ekari, Ex Kutaka, Susak, Anyone that breaks before her in general"
      ]
    }
  },
  { 
    name: "C5> Zanmu", 
    img: "spring zanmu.png", 
    tier: "SS", 
    opts: { e: true, spd: true },
    explanation: {
      pros: [
        "Wide Killer Range, High Dmg, even slight aoe nuking",
        "Just stupid reliable as a yang gengetsu (almost, but not quite) equal, which is by far her best role (she is flexible enough to play the other ones)",
        "Stupidly consistent support and breaking in addition to unique card options (flexibility) and unique pros+util (more flexibility)",
        "Huge dmg to Res complements said buffs and damage (the even more flexibility in question)"
      ],
      mixed: [
        "Wants more debuffs through cards",
        "Very Late Breaks hurt AoE SC Damage if used as the nuke"
      ],
      cons: [
        "Generally lacking in buffs and debuffs found in her kit, similar to mvmu without debuffs",
        "Lacking utility to compliment her remaining versatility forcing other good options (example: needs to pair with unit who already doesnt lack p because no party p, also needs acc because no party acc between gauges, etc. Just less freedom compared to gengetsu)"
      ],
      nitpick: [
        "should have been Mamizou"
      ],
      extra: [
        "NOTABLE PAIRINGS (Not included in tiering): Cz2. She is Cz2's real girlfriend."
      ]
    }
  },
  { 
    name: "L80 Aya", 
    img: "l80 aya.png", 
    tier: "SS", 
    opts: { r: true, spd: true },
    explanation: {
      pros: [
        "7 t1 breaks and -2 cd reduce contribute to helping her be a useful overall utility tool",
        "High Buff Counts in All Major Stats across her Kit, further complemented by her Anthology card"
      ],
      mixed: [
        "Great LW Damage tends to be held back by lacking Debuffs and having severe Dmg to Eff issues",
        "AoE killer is below average for her tier, limiting use further",
        "Needs to pair with someone with Party P for optimal use as she can’t get 3p t1 by herself without being able to save her sk1 to g2 for some reason (unless you are in a freeze/para/poison stage)",
        "Lacks party Acc outside of her Sk2 (8cd) which can make pairing/card use a bit annoying"
      ],
      extra: [
        "While she doesn’t have true major flaws there are a lot of aspects in her kit that make her practical use kinda annoying unless you pair with specific people (like c5> hecatia or something) but overall her good aspects are strong enough to weigh them out generally",
        "Usage: For the love of god pair with someone with party p on their skill. Pairing her with Cb3# Reisen kinda makes stages fall apart lmao you just need to watch for acc. Regardless she has high buff counts in everything and nysen covers the debuff/dmg to eff issue well so... yea... Pinkhecc is also good here."
      ]
    }
  },
  { 
    name: "Ce9 Remilia", 
    img: "ce9 remilia.png", 
    tier: "SS", 
    opts: { e: true, atk: true },
    explanation: {
      pros: [
        "Spams Yin Buffs & Rank II Buffs for the Party, further complemented by Cards",
        "Amazing Damage across the board Complemented by Killers and Dmg to Eff and Res"
      ],
      mixed: [
        "No Atk Anoms (Booo) Leading to post buff remove issues a lot of the time",
        "Reliant on Cards or Teammates for Debuffs"
      ],
      cons: [
        "Terrible Breaking Potential"
      ],
      nitpick: [
        "Susceptible to Paralyze/Stun"
      ],
      extra: [
        "BUT has card options and stalling options to actually be able to use non gengetsu options like ex piece (what)",
        "NOTABLE PAIRINGS (Not included in tiering): Gengetsu, F1 Marisa, Sprae, again just anyone who breaks before her)"
      ]
    }
  },
  { 
    name: "C5> Saki", 
    img: "c5 saki.png", 
    tier: "SS", 
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "High Damage Output on her Last Word",
        "High Yang Atk Buffs Counts across her Kit means she can propel her teammates highly"
      ],
      mixed: [
        "AoE Killers are subpar (Like pinkhecc) and will be her main make-or-break point",
        "Somewhat lags behind in Yang Def which can also make to hold her damage back",
        "Requires Cards for Def Down",
        "Utility is a bit below average for the tier"
      ],
      cons: [
        "Really wants more Crit Atk Buffs to maximize damage",
        "In general she is unrealistic, will preform worse than assumed."
      ],
      extra: [
        "Essentially the same unit as Pinkhecc but slightly better. Worse T1 than pinkhecc but her RankIIs should let her perform ever so slightly better <- should be incorrect as worse t1 for her results in less damage due to needing more t1 in the first place"
      ]
    }
  },
  { 
    name: "L0g Suwako", 
    img: "lg suwako.png", 
    tier: "SS", 
    opts: { p: true, atk: true },
    explanation: {
      pros: [
        "Simply Amazing Damage Potential Everywhere",
        "Good Support and Utility - Domain Expansion and Buffs are quite useful"
      ],
      cons: [
        "$300 unit that doesn't solo everything",
        "Shoots Herself in the foot with Agility*",
        "Needs Better Dual Scaling & Crit Buffs to achieve aforementioned damage potential.",
        "Terrible AoE Killers & Worse AoE Breaks make her use very difficult."
      ],
      nitpick: [
        "Ultra Long AoE"
      ],
      extra: [
        "*While Agi Anoms help this unit with Acc Issues, it completely shoots her in the foot in terms of breaks. Since she will go first most of the time, her AoE will have abysmal damage 99% of the time even on killer and eff because of her speed. Which makes her fail at like her only real usecase over mamizou (WHOS FREE AND EASY TO MLB)",
        "NOTABLE PAIRINGS (Not included in tiering): Cz2, Sanmu, anyone who breaks before her. (Ex Mamizou)"
      ]
    }
  },
  { 
    name: "C3 Yuyuko", 
    img: "beach yuyu.jpg", 
    tier: "SS", 
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Extremely Powerful Spellcard and LW Damage, Supported by High Crit Acc and Dmg to Eff and Res",
        "Atk Anomalies + Innate Abilities Support Herself and the Party",
        "AoE Spellcard Damage supported by Quick Breaks"
      ],
      mixed: [
        "Reliant on Story Cards or Teammates to Debuff for Ideal Damage",
        "Debuffs Evasion instead of Buffing Acc which tends to hurt in practice",
        "Noticeable Killer Bottleneck, reliant on Crit Acc"
      ],
      cons: [
        "Support & Buffs could be better. Often lacks Scaling Support and lacks the support of other SS tier units."
      ],
      extra: [
        "NOTABLE PAIRINGS (Not included in tiering): Mv Reimu, Susak/Sushimyon, L80 Yuyuko (Duh!), C3 Cirno, Mugetsu"
      ]
    }
  },
  { 
    name: "Lm1 Mugetsu", 
    img: "mugetsu.png", 
    tier: "SS", 
    opts: { spd: true, r: true },
    explanation: {
      pros: [
        "High Damage Output",
        "Broken Supporting Capability and ability to run cards (flexibility)",
        "Very Above Average Breaking Ability (worse than her sis)",
        "Basically yang gengetsu. (Unfortunately, she is lacking in gengetsus break utility, noteably poison break.)"
      ],
      mixed: [
        "In general, she will tend to struggle if you burn her skills early as her last word buffing isnt very helpful at enabling her own nuking",
        "Niche Resonance (Most modern units use slice scale so it's actually not that bad but not as universal as other genics)",
        "Very Slow Self Anomaly Infliction tends to limit her buffs after turn 1"
      ],
      cons: [
        "Questionable AoE Spellcard Damage"
      ],
      nitpick: [
        "Can't Quite take advantage of her Excessive Crit Acc Buffs",
        "Needs to use extremely rare and tedious to grind cards to get her Ekari tier support (not accounting tediousness of cards into tiering it is just annoying)",
        "Not Freeze/Para Immune"
      ],
      extra: [
        "+++ Extremely fun to use",
        "She's now basically ekari with aoe breaks (similar to gengetsu, but gengetsu does more...much more. all thanks to that burn break and debuffing and- ). Incredible",
        "NOTABLE PAIRINGS (Not included in tiering): Gunko, Everyone else in this tier and the one below it."
      ]
    }
  },
 { 
    name: "A14.5& Mamizou", 
    img: "A15.5& Mamizou.png", 
    tier: "SS", 
    opts: { dbf: true, ex: true },
    explanation: {
      pros: [
        "High damage spells complimented by good killer, average lw nuke effectively carried by defense down patching all damage inconsistency",
        "Just spams breaks from her spells",
        "Support from her kit is very good, particularly good for buff remove stages and further compliments her ability to be a support/buff bot",
        "Killer is perfect overlap, leading to her being very reliable"
      ],
      mixed: [
        "Unlike other units around her, she is p hungry and wants to spam boosts, leading to poor card usability without sacrifice."
      ],
      cons: [
        "Amazing buffing is spread throughout spells not as concentrated on skills (admits to having amazing support)",
        "Utility outside breaking is very bad (admits to having atleast decent breaking utility)",
        "LONGEST AOE ANIM (sc2) LITERALLY 22.5 SECONDS"
      ],
      extra: [
        "Listen guys im trying to be unbiased but its getting to a point where im sounding biased against her. Her weaknesses arent even weaknesses we put for some of these other units. To top it all off, she has amazing off ele content performance in a no poison immune stage as a breaker supporter debuffer potentially nuker etc. Basically another mvmors/gengetsu who has nuking aoe like what?? her first aoe hits 1mil easily no bis rn!!",
        "NOTABLE PAIRINGS (Not included in tiering): Any yang unit who isn't Earth"
      ]
    }
  },
  {
    name: "C5> Hecatia",
    img: "spring hecatia.png",
    tier: "SS",
    opts: { e: true, atk: true },
    explanation: {
      pros: [
        "Above average support",
        "Good breaking to compliment above average support and agi anoms to use it.",
        "Killers are amazing, damage is rather high.",
        "Actual debuffing on a unit this is crazy + can abuse light unit cards"
      ],
      mixed: [
        "Aoe spell killer could be way better, if it hits her role changes a lot",
        "Passable into buff remove but could be better"
      ],
      cons: [
        "Lacking utility, self Acc",
        "Mono fire + dmg to eff"
      ],
      nitpick: [
        "Gimmick leaves a lot to be desired",
        "Not Freeze Immune",
        "Aoe dmg is stupid high on killer it just tends to not hit killer!!"
      ],
      extra: [
        "Has alot of potential to rise within her tier provided she gets better cards in the future as she can be another util based aoe break + buff spammer (just pretty hard to pull off)",
        "NOTABLE PAIRINGS (Not included in tiering): Ex Kutaka, Mugetsu, Ex Mamizou"
      ]
    }
  },
  {
    name: "C3>> Yorihime",
    img: "c3 yorihime.png",
    tier: "SS",
    opts: { e: true, dest: true },
    explanation: {
      pros: [
        "AoE Nuke + LW Nuke gives her a pretty straightforward gameplan",
        "Good Gimmicks pair well to make her AoE nuke viable."
      ],
      cons: [
        "Utility is Below Average for her tier in terms of Breaks, P, and especially Acc which she has 0 of.",
        "Really wants more Yin Atk and Crit Atk buffs to maximize dmg output. Also completely lacks def down."
      ],
      extra: [
        "Ultimately this character is a very generic AoE nuke unit. Lacks the crazy dmg to res or util like her sister, ending up good but still kinda mid."
      ]
    }
  },
  // start of S
{ 
    name: "C3∫ Reisen", 
    img: "C3integral reisen supp.png", 
    tier: "S", 
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Great support combined with excellent niches and self quick. high amounts of acc and p support make for great pairings",
        "Good breaking enabling her to not be useless gauge 1",
        "Great lw nuking, with good last gauge buffs"
      ],
      mixed: [
        "Support is ultimately harder to make perfect value out of usually as it's placement is awkward (looking at you crit)"
      ],
      cons: [
        "relies on aoe for most of her value which does sort of die off-killer, but without it she is still rather above average",
        "ultimately, usually just a last word nuke. While overall solid when using her for aoe nuking the quick messes with her and when using her for actual support she tends to struggle getting breaks in. Which means she struggles to have a role outside trios"
      ],
      nitpick: [
        "Below Average Gimmick Skill CD",
        "Wants her last line's dual scaling set up for max damage output",
        "Weak to Paralyze"
      ],
      extra: [
        "NOTABLE PAIRINGS (Not included in tiering): Cstroos, Gengetsu, Ex Sakuya, Mima, Works well in conjunction with Yukata Komachi lol"
      ]
    }
  },
  { 
    name: "A17& Eika", 
    img: "a17& eika.png", 
    tier: "S", 
    opts: { tec: true, ex: true },
    explanation: {
      pros: [
        "Great Inflicting + Breaking Ability like the C3 Cirno, but even better since she can break 7 without needing to pop both skills.",
        "Good Support Across her Kit"
      ],
      mixed: [
        "High Damage tends to be restricted by Suboptimal KIllers"
      ],
      cons: [
        "While she has many universal qualities, her p economy is quite bad, requiring the unit she is supporting or the stage in play to fix this issue",
        "Wants more Crit Atk"
      ],
      extra: [
        "She basically wants to be the geng to the freeze and para yin units (all two of them) but unfortunately, she runs into a few issues here and there. she does the job but dont expect too much (funnily enough she buffs mv kasen better than geng)",
        "Mid SS Performance with the Luck P Buff"
      ]
    }
  },
  { 
    name: "Lr Aya", 
    img: "zenki.jpg", 
    tier: "S", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Obscene Damage Across both her AoE and Last Word supported by Good Killers and a Shiny New BIS, along with having good self-sustainability.",
        "Spamming Debuffs across her kit makes her valuable on all 3 gauges supported by Fast AoE Breaks and Praecards. New D-Card helps her support too.",
        "Good Utility throughout her Kit"
      ],
      mixed: [
        "Killers, while Numerically Wide, are somewhat Unconventional in use. Would like to have Youkai Killer for Full Consistency, as her damage very quickly falls off killer.",
        "Being disjointed between Wood on AoE and Earth on her LW makes only one usable at a time, usually having her AoE being more valuable while her LW often can't be used to its full potential. Still, it has much use outside of just damage so it's okay.",
        "Breaks are just average (5/3) combined with not having innate 3p meaning you NEED to pair her with a burn inflictor with some party P rather than having her act as a psuedo-geng."
      ],
      cons: [
        "On top of the above issues, really needs more Yin and Crit Atk to maximize her damage."
      ],
      extra: [
        "Very underrated character especially post rein and d-cards. A bit limited by killers (@@@) and pairings but otherwise tends to destroys stages that she hits killer on lol."
      ]
    }
  },
  { 
    name: "A13& Seiga", 
    img: "a13& seiga.png", 
    tier: "S", 
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "High Damage Across the Board complemented by Ikaruga and Good Killer",
        "7 AoE break made even better by having good buffs through her kit. 2 Party Crit Acc II gives her 4 NLM lines and helps party damage significantly."
      ],
      mixed: [
        "Buff Counts are good but she would like better buffs between gauges (particularly in agility)"
      ],
      cons: [
        "Accuracy and SP issues do hurt her consistency, ruining her breaking niche"
      ],
      extra: [
        "Gets a lot from the P Luck Buff"
      ]
    }
  },
  { 
    name: "A9.4& Sakuya", 
    img: "a9.4& sakuya.png", 
    tier: "S", 
    opts: { atk: true, ex: true },
    explanation: {
      pros: [
        "Very High Damage Output with a Very Potent AoE Spellcard",
        "Solid Breaking Capability",
        "Great Party Crit & Agi Support with Innate Abilities and Cards, Stun Utility on Last Word"
      ],
      mixed: [
        "Could use more innate Yin Atk Buffs, however as a Yin Atk unit, she has many powerful card options.",
        "89% of her damage is line 1 while her gensokyo killers are lines 2 and 5. if she does not hit killers on line 1, her damage will be miserable even if hitting other lines.",
        "Can't take consistent advantage of her excessive Crit Acc Buffs Leading To Tedious Testing"
      ],
      cons: [
        "Spellcard 2 Lacks Good Effects, Breaks or Damage",
        "Significant P Issues"
      ],
      extra: [
        "Actually usable without gengetsu thanks to kasen d card + crazy overflow great job ex sakuya"
      ]
    }
  },
  { 
    name: "L80 Kokoro", 
    img: "l80 kokoro.png", 
    tier: "S", 
    opts: { r: true, atk: true },
    explanation: {
      pros: [
        "Great Damage Output Across the Board",
        "Good Utility (7 AoE Breaks), Good Self Buffs"
      ],
      mixed: [
        "Killers are Passable but flawed (similar to Sprae)",
        "Tends to have Weirdly Selfish Buffs"
      ],
      cons: [
        "Wants more Innate Debuffs (UNLESS YOU PULL HER BANNER CARD, WHICH CAN REMEDY THAT)"
      ]
    }
  },
  { 
    name: "C3 Sakuya", 
    img: "c3 sakuya2.png", 
    tier: "S", 
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Powerful Last Word Complemented by Dmg to Eff and Res"
      ],
      mixed: [
        "Util and Support, while having a good start, befuddled due to having below average breaks (5 late) for her tier while wanting to conserve her skill 2 for the second/third gauge.",
        "All this is exemplified by lacking Yang Atk and Agility buffs between gauges which you would expect better from for her tier."
      ],
      cons: [
        "Lacking Youkai Killer with Subpar AoE killers hurts her Gauge 1/2 Perfomance"
      ],
      nitpick: [
        "LW Doesn't break Poison"
      ],
      extra: [
        "Ex in swimsuit just due to her sheer versatility in support and damage. However swimsuit as a niche has very little standing and the rest of her kit isn't really aging that well tbh she is mostly still SS due to technicality",
        "NOTABLE PAIRINGS (Not included in tiering): Again, basically any yang unit that isn't metal. Ideally someone who can cover her lackluster AoE nuke. Doesn't mesh with Ex Mamizou quite as well as you'd like but can still work."
      ]
    }
  },
  { 
    name: "C5= Kaguya", 
    img: "c35= kaguya.png", 
    tier: "S", 
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Actually has achievable high damage thanks to wide killers, good ability to take advantage of -3 def, 50% light and generally going last along with having a high dmg floor and good crit acc",
        "Generally good party buffs complemented by some slight util"
      ],
      mixed: [
        "AoE damage, like f1 marisa, has a tendency to vary wildly thanks to only having 1 crit line",
        "Innate Yin Atk are almost all Self",
        "Essentially Mono Water"
      ],
      cons: [
        "Breaks fall off heavy, made worse due to a lack of yin/freeze units besides A6& Rumia lol???"
      ],
      nitpick: [
        "Stupid evil random fire inline on AoE"
      ],
      extra: [
        "You can think of her as Ex Kosuzu that trades consistent AoE damage for more util and ease of use. (Kosuzu will tend to be more realistically usable due to killers and pairing)"
      ]
    }
  },
  { 
    name: "L0g Sanae", 
    img: "fake ass sanae.jpg", 
    tier: "S", 
    opts: { p: true, heal: true },
    explanation: {
      pros: [
        "High Damage Potential on all attacks, with aoe not needing killer to have good damage.",
        "Good Support letting her not be entirely useless while doing your teams damage (her one job)"
      ],
      mixed: [
        "Reliant on spellcards and party support for Yang Atk and Crit",
        "Her Buffs are only good for Yang Units, tries to buff Dual Scale",
        "Party Anomaly Cleanse can be Annoying",
        "Pretty Questionable killer placement leads to inconsistent damage (at times)"
      ],
      cons: [
        "300$ unit that doesnt solo everthing",
        "Poor Breaking Skill",
        "Accuracy is just bad.",
        "In terms of Cost:Potency, which isn't reflected in this tierlist, she is at the bottom."
      ],
      extra: [
        "$350 btw"
      ]
    }
  },
  { 
    name: "C3< Nitori", 
    img: "fall nitori.png", 
    tier: "S", 
    opts: { tec: true, e: true },
    explanation: {
      pros: [
        "High Damage Output across All Spells, supported by Good Buffs + Being Slow makes her Easy to Support",
        "Breaking 4 sets of Anomalies Instantly on her AoE + Inflicting 4 on Skill lets her pair with almost any Yin unit"
      ],
      mixed: [
        "Killer Range is not as wide as you would like which can limit her use, though she should generally always kill water weak enemies",
        "Self Charge is somewhat cringe for her breaking role but not the worst thing in the world",
        "Needs more Yin Def & Crit Atk between gauges"
      ],
      cons: [
        "Wants more debuffs to maximize damage"
      ]
    }
  },
  { 
    name: "C3≥ Nitori", 
    img: "mech nitori.png", 
    tier: "S", 
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Buffs all Relevant Stats Well across her Kit, mostly on her Spells. Additionally boasts good Acc util for all 3 gauges."
      ],
      mixed: [
        "Great LW and AoE Damage is held back by her Subpar Killers.",
        "Her 2nd AoE (the one that buffs acc) is very useless in terms of damage",
        "Having Sk3 being reserved entirely for g3, and then having all her major buffs on a single skill can make practical use a bit problematic in regards to saving her skills between gauges. Essentially used on a gauge-by-gauge basis"
      ],
      cons: [
        "Entirely lacking Debuffs expedites all these issues so much more in terms of practical use"
      ],
      extra: [
        "Essentially this character just doesn’t have enough of anything to be higher. Breaks, buffs, etc all basically just passing marks but she is basically kinda just a yang version of Chimata with worse killer and card options. Run sanshoku card on her Last Word (50% body -2 yang def)"
      ]
    }
  },
  { 
    name: "C3< Chimata", 
    img: "fall chimata.png", 
    tier: "S", 
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Great damage across the board",
        "Overall good buffs most notably for dual scaling"
      ],
      mixed: [
        "Killer bottleneck similar to sprae as human/god isn’t good enough for full consistency"
      ],
      cons: [
        "Lacks innate Accuracy"
      ],
      nitpick: [
        "Kinda wants more offensive buffs",
        "Weak to Paralyze"
      ],
      extra: [
        "expounding on the first ?; not only does she have killer issue but when used as the unit to absorb buffs (her better role if aligned), she seriously just runs out of yin attack and crit attack too fast. supplemented by cards somewhat, but its why shes here. In theory she works but she ends up unable to push her damage far enough.",
        "Notable teammates: L80 Kasen, C3int Reisen, Gengetsu, C8<< Kokoro, F1 Marisa",
        "LAST TESTED: Dec 2025"
      ]
    }
  },
  { 
    name: "Laa1 Sakuya", 
    img: "laa1 sakuya.png", 
    tier: "S", 
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Great Damage with Good Killers throughout her kit, complemented by Good Overflow",
        "Decent Utility in All Aspects"
      ],
      mixed: [
        "Support/Buffs are somewhat Below Average for her Tier. Notably lacking in Agility buffs (which she requires a lot of for her LW)",
        "Has P issues which hurt her damage/breaking roles a good deal"
      ],
      cons: [
        "Lacking Def Down exacerbates all these issues"
      ],
      nitpick: [
        "Gimmicks are Very Mid"
      ],
      extra: [
        "This character’s kit is rather generic and she is basically the epitome of S. Decent in all aspects without true flaws but lacks anything to be higher.",
        "Note: Counts as 2 units for Yukkuri and Genic skills"
      ]
    }
  },
  { 
    name: "A16& Satono", 
    img: "a16& satono.png", 
    tier: "S", 
    opts: { ex: true, spd: true },
    explanation: {
      pros: [
        "Wide Killer Range and Overall High Damage on her lw, with great damage on her aoe",
        "Very Capable Self Buffs and Decent Party Utility to benefit from said damage",
        "Great Breaking Ability, akin to C3 Sekibanki"
      ],
      boons: [
        "Immortal vs. 1 unit"
      ],
      mixed: [
        "Support is far below average for her tier, though not necessarily bad."
      ],
      cons: [
        "Lacks Def Down",
        "Lowkey aoe kinda mid if you dont hit the full killer because only p0 youkai"
      ]
    }
  },
  { 
    name: "C3~ Yoshika", 
    img: "c3~ yoshika.png", 
    tier: "S", 
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "High Damage Across the Board complemented by access to Def Down cards good killers and NLM",
        "Good Support Across the Board, especially with that Sync skill. Complemented further by good P gain."
      ],
      mixed: [
        "Skill 1's Party Charge is ultra niche and probably not good a lot of the time HOWEVER that skill is entirely disposable and using it is up to your own discretion (but it is needed for acc/agi buffs so kinda an L)"
      ],
      cons: [
        "Low T1 Buffs Overall"
      ],
      extra: [
        "Side note: her kit agrees with herself and the role shes doing way better than most units below her, hence her placement. which was quite surprising given party charge nonsense (dont use the skill). and while she is forced to be poison because shes not the fastest thing alive with unavoidable agi anoms and highest agi stat you can realistically plan around her in trios (or run cs2 +5sp)"
      ]
    }
  },
  { 
    name: "C3 Yukari", 
    img: "c3 yukari.png", 
    tier: "S", 
    opts: { heal: true, e: true },
    explanation: {
      pros: [
        "Incredible Yang & Crit Support & Incredible Self Sufficiency. Good debuff potential",
        "Two party unbinds on skills very useful, though binds aren't as common now",
        "Great damage all around. SHE LITERALLY HAS A BIS FOR EVERY ATTACK NOW AND REIN. In combination with her buffing it makes her requirements to run super super low since you just want a breaker."
      ],
      mixed: [
        "Party Anomaly Cleanse can be annoying"
      ],
      cons: [
        "Lacks AoE Anomaly breaks (tho itd be kinda a waste)"
      ],
      nitpick: [
        "Buffs make her water ex 8sp farm break",
        "Long Animations, Tedious",
        "Primary killers on ST are kinda whack"
      ],
      extra: [
        "This unit was top 1 for 1.5 years. She is a new kind of monster",
        "NOTABLE PAIRINGS (Not included in tiering): Anyone who breaks before her and gives party P (Getsu Twins and Ex Mamizou)"
      ]
    }
  },
  { 
    name: "C3 Cirno", 
    img: "C3 cirno.png", 
    tier: "S", 
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Two freeze inflict skills, basically confirms her role as a great breaker",
        "Buffing between gauges is extremely useful"
      ],
      mixed: [
        "Damage on killer all around her kit is very good but it's limited to swimsuit and fairy content",
        "Last gauge buffing specifically tends to cause her to suffer"
      ],
      cons: [
        "for her role of a spam breaker, she runs into heavy p issues. Which makes her weirdly want another freeze breaker to break for her in her perfect content",
        "killer is still niche",
        "no instant fb or overflow or...anything. units she supports will really want that"
      ],
      extra: [
        "is c3 yuyuko shill pairing. another thousand buffs to yuyucoco!!!! she really is pretty average outside of that though and pairing with coco is uh...certainly not something in high demand. still, shes good at it + isnt ass at everything else so go off"
      ]
    }
  },
  { 
    name: "L80 Reimu", 
    img: "mv reimu.jpg", 
    tier: "S", 
    opts: { r: true, spd: true },
    explanation: {
      pros: [
        "Last Word + AoE Spellcard have consistently high damage with great killer range as well as reliable set up",
        "Debuffs, Support, and Utility make her use very consistent and helpful during shaft. Very reliant on creativity"
      ],
      cons: [
        "Lacks Innate Yang Atk Buffs, but Atk Anoms help in this end.",
        "Known to need help with some more difficult damage requirements assuming you force her to work instead of using her utility."
      ],
      nitpick: [
        "Lmao Eva II",
        "Poison Anoms are 1t and she is susceptible to para/freeze"
      ],
      extra: [
        "In addition to being able to spam aoe spell nuke, she can also solo nuke a gauge. Very very rare these days. And still have a working debuff skill!",
        "DS Solo Count: 18",
        "Note: Her kit looks really bad on paper. It is only in use you will realize how competent she really is.",
        "NOTABLE PAIRINGS (Not included in tiering): Mugetsu, C3 Yuyuko, Cz1, Yang/Crit Buffers Appreciated."
      ]
    }
  },
  { 
    name: "C3 Narumi", 
    img: "c3 narumi.png", 
    tier: "S", 
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "High LW Damage with Decent Buffs for it and Decent Killers making up most of her tier"
      ],
      mixed: [
        "Utility and Buffs, whilst not necessarily bad, are underwhelming for her tier and can lead to consistency issues when not paired with units like Cz2",
        "Also held back by Dmg to Eff issues"
      ],
      cons: [
        "Let down by lacking good AoE killers and Def Down (Run the Sanshoku card on her Last Word)"
      ]
    }
  },
  // start of A
  { name: "A16.3& Kosuzu", img: "a16.3& kosuzu.png", tier: "A", opts: { atk: true, ex: true } },
  { name: "C3 Sekibanki", img: "sekibanki.jpg", tier: "A", opts: { spd: true, e: true } },
  { name: "C3 Sanae", img: "C3 Sanae.png", tier: "A", opts: { dbf: true, e: true } },
  { name: "C3 Alice", img: "C3 Alice.png", tier: "A", opts: { dbf: true, e: true } },
  { name: "C3 Reimu", img: "c3 reimu.png", tier: "A", opts: { spd: true, e: true } },
  { name: "Ce1 Flandre", img: "C3 prae2.png", tier: "A", opts: { e: true, spd: true } },
  { name: "C5= Mokou", img: "c5 mokou.png", tier: "A", opts: { atk: true, e: true } },
  { name: "C5> Eiki", img: "spring eiki.png", tier: "A", opts: { e: true, tec: true } },
  { name: "C3' Junko", img: "C3' Junko.png", tier: "A", opts: { spd: true, e: true } },
  { name: "C3' Seiga", img: "C3' Seiga.png", tier: "A", opts: { e: true, tec: true } },
  { name: "C3' Urumi", img: "c3' urumi.png", tier: "A", opts: { atk: true, e: true } },
  { name: "C3' Nemuno", img: "c3' nemuno.png", tier: "A", opts: { e: true, dest: true } },
  { name: "Cf1# Reimu", img: "cf1 reimu.png", tier: "A", opts: { dest: true, e: true } },
  { name: "L10.1 Reimu", img: "idol_reimu.jpg", tier: "A", opts: { e: true, tec: true } },
  { name: "F1 Koishi", img: "f1 koishi.png", tier: "A", opts: { tec: true, e: true } },
  { name: "Lm1 Mima", img: "lm1 mima.png", tier: "A", opts: { r: true, dest: true } },
  { name: "Lr1 Shinki", img: "lr1 shinki.png", tier: "A", opts: { atk: true, r: true } },
  { name: "L80 Ran", img: "l80 ran.png", tier: "A", opts: { r: true, def: true } },
  { name: "L80 Yuyuko", img: "mv yuyu.jpg", tier: "A", opts: { tec: true, r: true } },
  { name: "L80 Miko", img: "l80 miko.png", tier: "A", opts: { tec: true, r: true } },
  { name: "L80 Sanae", img: "Mv sanae.jpg", tier: "A", opts: { atk: true, r: true } },
  { name: "A7& Yuyuko", img: "a7& yuyuko.png", tier: "A", opts: { supp: true, ex: true } },
  { name: "A10& Shizuha", img: "a10& shizuha.png", tier: "A", opts: { dest: true, ex: true } },
  { name: "A12& Nazrin", img: "a12& nazrin.png", tier: "A", opts: { atk: true, ex: true } },
  { name: "A12& Shou", img: "a12& shou.png", tier: "A", opts: { spd: true, ex: true } },
  { name: "A12.5& Hatate", img: "a12.5& hatate.png", tier: "A", opts: { dest: true, ex: true } },
  { name: "A15& Seiran", img: "a15& Seiran.png", tier: "A", opts: { dest: true, ex: true } },
  { name: "A15& Clownpiece", img: "a16& clownpiss.png", tier: "A", opts: { tec: true, ex: true } },
  { name: "A15.3& Doremy", img: "a15.3& doremy.png", tier: "A", opts: { def: true, ex: true } },
  { name: "A17.5& Kutaka", img: "a17.5& kutaka.png", tier: "A", opts: { spd: true, ex: true } },
  { name: "F1.-5 Sanae", img: "f1.-5 sanae.png", tier: "A", opts: { supp: true, b: true } },
  { name: "D8.-5 Flandre", img: "d8.-5 flandre 1.png", tier: "A", opts: { dest: true, b: true } },
  { name: "R2.-5 Yuyuko", img: "r2.-5 yuyuko.png", tier: "A", opts: { spd: true, b: true } },
  { name: "W1;4 Suika", img: "w1.-4 suika.png", tier: "A", opts: { dest: true, b: true } },
  { name: "E1;4 Sakuya", img: "e1.-5 sakuya.png", tier: "A", opts: { dest: true, b: true } },
  { name: "F1;4 Koishi", img: "f1;4 koishi.png", tier: "A", opts: { tec: true, b: true } },
  { name: "B3 Seiran", img: "b3 seiran.png", tier: "A", opts: { spd: true, u: true } },
  { name: "B3 Shinmyoumaru", img: "b5 shinmy.png", tier: "A", opts: { tec: true, u: true } },
  { name: "Lr Ibaraki-Douji's Arm", img: "Lr Armpdn supp.png", tier: "A", opts: { supp: true, u: true } },
  { name: "W5 Yuugi", img: "yuugi.jpg", tier: "A", opts: { tec: true, u: true } },
  { name: "A13 Seiga", img: "seiga.jpg", tier: "A", opts: { dest: true, a: true } },
  // start of B
  { name: "C3 Miyoi", img: "c3 miyoi.png", tier: "B", opts: { tec: true, e: true } },
  { name: "C3 Tenshi", img: "tenshi.jpg", tier: "B", opts: { dest: true, e: true } },
  { name: "C3 Koishi", img: "c3 koishi.png", tier: "B", opts: { atk: true, e: true } },
  { name: "C3 Satori", img: "c3 satori.png", tier: "B", opts: { def: true, e: true } },
  { name: "C3 Miko", img: "C3 Miko.png", tier: "B", opts: { spd: true, e: true } },
  { name: "C3 Kogasa", img: "c3 kogasa.png", tier: "B", opts: { atk: true, e: true } },
  { name: "C3 Byakuren", img: "c3 byakuren.jfif", tier: "B", opts: { dest: true, e: true } },
  { name: "C3 Joon", img: "c3 joon.png", tier: "B", opts: { tec: true, e: true } },
  { name: "C3 Marisa", img: "c3 marisa.png", tier: "B", opts: { supp: true, e: true } },
  { name: "C3 Youmu", img: "youmu.jpg", tier: "B", opts: { tec: true, e: true } },
  { name: "C3 Kasen", img: "c3 kasen seal.png", tier: "B", opts: { tec: true, e: true } },
  { name: "Cz1 Marisa", img: "cz1 marisa.jpg", tier: "B", opts: { spd: true, e: true } },
  { name: "C5> Koishi", img: "PANK KOOSH.jpg", tier: "B", opts: { dest: true, e: true } },
  { name: "C5> Flandre", img: "flanny.jpg", tier: "B", opts: { dest: true, e: true } },
  { name: "C3≦ Komachi", img: "C3less than or equal to Komachi.png", tier: "B", opts: { supp: true, e: true } },
  { name: "C3≦ Clownpiece", img: "C3less than or equal to Clownpiece.png", tier: "B", opts: { dbf: true, e: true } },
  { name: "Cb3# Youmu", img: "cb3 youmu.png", tier: "B", opts: { dest: true, e: true } },
  { name: "L10.1 Marisa", img: "idol_marisa.jpg", tier: "B", opts: { atk: true, e: true } },
  { name: "L10.1 Youmu", img: "l10.1 Youmu.png", tier: "B", opts: { spd: true, e: true } },
  { name: "F1 Reimu", img: "f1 reimu.png", tier: "B", opts: { atk: true, e: true } },
  { name: "L80 Remilia", img: "l80 remi.png", tier: "B", opts: { atk: true, r: true } },
  { name: "L80 Sakuya", img: "l80 sakuya.png", tier: "B", opts: { dbf: true, r: true } },
  { name: "L80 Kaguya", img: "l80 kaguya.jpg", tier: "B", opts: { tec: true, r: true } },
  { name: "L80 Meiling", img: "meimei.jpg", tier: "B", opts: { tec: true, r: true } },
  { name: "L80 Patchouli", img: "l80 patchy.png", tier: "B", opts: { def: true, r: true } },
  { name: "L80 Okina", img: "l80 okina.png", tier: "B", opts: { heal: true, r: true } },
  { name: "L80 Junko", img: "l80 junko.png", tier: "B", opts: { tec: true, r: true } },
  { name: "L80 Satori", img: "l80 satori.png", tier: "B", opts: { dest: true, r: true } },
  { name: "L80 Marisa", img: "l80 marisa.png", tier: "B", opts: { spd: true, r: true } },
  { name: "A6& Rumia", img: "a6& rumia.png", tier: "B", opts: { dest: true, ex: true } },
  { name: "A6& Koakuma", img: "a6& koa.png", tier: "B", opts: { supp: true, ex: true } },
  { name: "A8& Tewi", img: "a8& tewi.png", tier: "B", opts: { dest: true, ex: true } },
  { name: "A9& Medicine", img: "a9& medicine.png", tier: "B", opts: { dbf: true, ex: true } },
  { name: "A13& Futo", img: "a13& futo.png", tier: "B", opts: { heal: true, ex: true } },
  { name: "A16& Mai", img: "a16& smai.png", tier: "B", opts: { tec: true, ex: true } },
  { name: "A17& Flandre", img: "a17& flan.png", tier: "B", opts: { heal: true, ex: true } },
  { name: "A17.5& Yuuma", img: "a17.5& yuuma.png", tier: "B", opts: { dest: true, ex: true } },
  { name: "A18& Misumaru", img: "a18& misumaru.png", tier: "B", opts: { dbf: true, ex: true } },
  { name: "F1.-5 Marisa", img: "d8.-5 marisa.png", tier: "B", opts: { atk: true, b: true } },
  { name: "B3 Raiko", img: "b5 raiko.png", tier: "B", opts: { tec: true, u: true } },
  { name: "B3 Toyohime", img: "b3 toyohime.png", tier: "B", opts: { heal: true, u: true } },
  { name: "B3 Sagume", img: "b3 sagume.png", tier: "B", opts: { supp: true, u: true } },
  { name: "Lr Kokoro", img: "kokoro.jpg", tier: "B", opts: { dest: true, u: true } },
  { name: "Lr Flandre", img: "Nishita flan.jpg", tier: "B", opts: { spd: true, u: true } },
  { name: "E1 Flandre", img: "e1 flan (prae).png", tier: "B", opts: { atk: true, u: true } },
  { name: "E1 Koakuma", img: "e1 koakuma.png", tier: "B", opts: { heal: true, u: true } },
  { name: "H5 Letty", img: "h5 letty.png", tier: "B", opts: { def: true, u: true } },
  { name: "T5 Byakuren", img: "t5 byakuren.png", tier: "B", opts: { spd: true, u: true } },
  { name: "W1 Suika", img: "watermelon.jpg", tier: "B", opts: { dest: true, u: true } },
  { name: "W2 Kanako", img: "lolinako.jpg", tier: "B", opts: { supp: true, u: true } },
  { name: "Z3 Satori", img: "z3 satori.png", tier: "B", opts: { supp: true, u: true } },
  { name: "A6 Tenshi", img: "tenshi scar.jpg", tier: "B", opts: { atk: true, a: true } },
  { name: "A12 Kogasa", img: "A12 Kogasa.png", tier: "B", opts: { dbf: true, a: true } },
  { name: "L1a Keine", img: "L1a keine atk.png", tier: "B", opts: { atk: true, g: true } }
  // start of C
];
