const dataSet = {};
const dataSetVersion = "tierlist"; 
dataSet[dataSetVersion] = {};

function toggleTierRow(tierId) {
  const container = document.getElementById(tierId);
  const toggleBtn = document.getElementById(`toggle-btn-${tierId}`);
  
  if (!container) return;

  const isNowCollapsed = container.classList.toggle("collapsed");

  if (toggleBtn) {
    toggleBtn.textContent = isNowCollapsed 
      ? `▶ Show ${tierId} Tier (${container.children.length} Units)` 
      : `▼ Hide ${tierId} Tier`;
  }
}

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
        "High-Damaging Last Word with Early Breaks and Debuffs",
        "Powerful Yang and Crit Support throughout all Gauges thanks to her Kit and Card Options",
        "Generally Great Party P and Breaking Utility (7/4) also supported by having Good Debuffs on All Attacks"
      ],
      mixed: [
        "In general, she will tend to struggle if you burn her skills early as her last word buffing isnt very helpful at enabling her own nuking",
        "Niche Resonance limits pairing and doesn't give as much Damage Amplification vs. Modern Rank II-Era Buffs"
      ],
      cons: [
        "Having Bad Self Anomaly Infliction is a genuine concern now as it can really limit her pairings, especially seeing as her AoE lacks a Poison Break thus hurting her role as a Universal Yang Buffer",
        "Horrible AoE Spellcard Damage"
      ],
      nitpick: [
        "Can't Quite take advantage of her Excessive Crit Acc Buffs",
        "Needs to use extremely rare and tedious to grind cards to get her Ekari tier support (not accounting tediousness of cards into tiering it is just annoying)",
        "Not Freeze/Para Immune"
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
        "Consistent Yang/Crit Support complemented by Innate Self-Sustainability through Spd Anoms ",
        "Great LW Damage is complemented by Innate Debuffs + Access to Barrier Status D-Cards"
      ],
      mixed: [
        "AoE Spellcard is Held Back by Bad p0 killers (damage drastically rises against Humans) and 5/2 Breaks. This can also come into confliction with her Spd Anoms since if nobody is outspeeding her then her AoE just kinda does nothing because it's 2 breaks (lol).",
        "Passable into buff remove but could be better (2 crit atk on AoE is kinda... lol)"
      ],
      cons: [
        "Tends to Lack Utility outside of Party P and Anomaly Infliction. Similarly lacks Party Agi outside of Sk2"
      ],
      nitpick: [
        "Not Freeze Immune",
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
        "Good Nuking AoE (despite lacking p0 killer) and Last Word that features Innate Debuffs. Further supported thanks to her myriad of inline buffs.",
        "Consistent Yang Support letting her not be entirely useless while doing your teams damage (her one job)",
        "Decent Barrier Restore, Party P, and Unbind Utility"
      ],
      mixed: [
        "Crit and Dual Scaling Support tends to be Flaccid in Practice due Mid-Size Numbers",
        "Her only Rank II Damage Amp is her Domain Expansion which itself isn't even that good",
        "Party Anomaly Cleanse can be Annoying",
        "Pretty Questionable killer placement leads to inconsistent damage (at times)"
      ],
      cons: [
        "Bad Innate Accuracy and Breaking Ability makes her already bad Consistency Problems even worse."
      ],
      extra: [
        "In terms of Cost:Potency, which isn't reflected in this tierlist, she is at the bottom."
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
        "High Yang/Crit Support across All Gauges supported by Good Innate Accuracy",
        "Good Unbind/Party P Utility, along with some Party P",
        "Very High Damage across her AoE Spellcards"
      ],
      mixed: [
        "Party Anomaly Cleanse can be annoying"
      ],
      cons: [
        "Lacks AoE Anomaly Infliction on Skill making her require a Yang Breaker/Gengetsu type unit to Duo",
        "Despite having Good Killers and Innate Debuffs her LW tends to hold her back because of being mismatched between AoE and Last Word elements while having... really not that high innate damage on top of lacking Rank II innate damage amplification outside of 1 Party Yang Atk II on her Last Word "
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
    { 
    name: "L80 Reimu", 
    img: "mv reimu.jpg", 
    tier: "S", 
    opts: { r: true, spd: true },
    explanation: {
      pros: [
        "Last Word + AoE Damage are Consistently High, supported by Mvmu's Ample Debuffs",
        "D Sk2's Yang Def Down is Disposable allowing for Ease of Use, while her Sk1 has High Utility for All Gauges (yes party poison is util.) "
      ],
      cons: [
        "AoE Spell Targets Yin which can make pairing her difficult in modern stages (especially as she is Yang/Burn) seeing how modern stages tend to overnerf one of the defs",
        "Though Atk Anoms certainly help, she really tends to lack Yang/Crit Atk and even Agility between gauges as her Solo Buffs are quite mid. This can make her performance content where you don't hit both LW and AoE Eff (Sun/Star) fall off very quickly.",
        "This in general leads to her having a hard time in modern stages where she can't just out-util stages anymore because not only does she have bad innate buffs and support, but simply lacks Damage Amplification overall."
      ],
      nitpick: [
        "Lmao Eva II",
        "Poison Anoms are 1t and she is susceptible to para/freeze"
      ],
      extra: [
        "DS Solo Count: 18"
      ]
    }
  },
  // start of A
  {
    name: "A16.3& Kosuzu",
    img: "a16.3& kosuzu.png",
    tier: "A",
    opts: { atk: true, ex: true },
    explanation: {
      pros: [
        "+++++++ Hype moments, aura, and a whole lotta shilling",
        "Great Killers and Amazing Card Options lead to Amazing Damage Output across All Five Spellcards",
        "Capitalizes off of Good Self Buffing and Decent Utility"
      ],
      cons: [
        "Usually Limited to just Water Enemies as she is entirely Water",
        "Lacks Good Breaks and Support. Very reliant on Gengetsu to get away with all she does."
      ],
      boons: [
        "Good Stall Ability"
      ],
      mixed: [
        "Can't use Crit Acc Buffs while wanting more Crit Atk buffs"
      ],
      extra: [
        "@@@@@@@ Gengetsu moments, aura, and a whole lot of gengetsu",
        "Kosuzu is genuinely amazing in the content she can perform in. The issue is mostly consistency as she has a 0 in some aspects and is ultra-reliant on gengetsu to get away with what she does, preventing an uptier.",
        "She is easily the meta water unit. Only reason she is A is because we do look past the moments when her breaking and buffs are carried. Still, having those moments at all is ridiculous. Hence her placement.",
      ]
    }
  },
  {
    name: "C3 Sekibanki",
    img: "sekibanki.jpg",
    tier: "A",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Great & Speedy Debuffs & Support, very P Sufficient",
        "Good Utility Overall"
      ],
      cons: [
        "High Damage Output Restricted to Weak Killer Range, Heavily Supported by Swimsuit Enemy Content",
        "Lacks Innate Yang Atk and Crit Atk Buffs"
      ],
      boons: [
        "Very High Damage to Resisted Elements allow for more Universal Use (When hitting niche killers, doesn't help much when not)",
        "Very Abusable Crit Mods"
      ],
      nitpicks: [
        "Weirdly unable to solo moon ex"
      ]
    }
  },
  {
    name: "C3 Sanae",
    img: "C3 Sanae.png",
    tier: "A",
    opts: { dbf: true, e: true },
    explanation: {
      pros: [
        "Decent Killers (Almost the same as C3 Sakuya but worse) + p0 Human Swimsuit on AoE Killer",
        "Breaking is Good",
        "Debuffing combined with perma def down is very very good."
      ],
      cons: [
        "No Acc Up or Eva Down",
        "Agility Buffs are Weirdly Selfish",
        "No Yang or Crit Atk Buffs OR Crit Def Debuffs lol"
      ],
      nitpicks: [
        "Very Trio Reliant"
      ],
      mixed: [
        "Some Dmg to Eff Issues",
        "HALF HER DEBUFFS ARE USELESS"
      ]
    }
  },
  {
    name: "C3 Alice",
    img: "C3 Alice.png",
    tier: "A",
    opts: { dbf: true, e: true },
    explanation: {
      pros: [
        "Great defense down, 20% raw enemy def down works on fb as well (does not work between gauges) and having def down on aoe lw and a saveable skill has always been useful for hybrid debuffers",
        "Amazing killer, which complements her pretty good raw damage. Aoe killer is much lower however."
      ],
      cons: [
        "Entirely ruined by her absence of buffs. Being only +3 agi on skill. Ruining her damage use cases. Meaning both her damage side and her debuff side are unreliable."
      ],
      mixed: [
        "Despite this high damage, her debuffs in comparison to other debuffs units are low. So when used for the hybrid debuff+nuke role, she might not be able to debuff the required amount for the middle gauges",
      ],
      extra: [
        "In comparison to the better efes debuff unit and the 300$ unit in the room. Nysen has everything BUT buffs. That is why she's so good and why she works. You can fix ONLY lacking buffs with enough effort. So long as that is ALL you lack. Can't stress that enough. Lootori doesn't even lack buffs for the middle gauges. And both of them have amazing utility perma def down nonsense etc. Alice, with none of these additional pros, means she has little usecase and remains a standard stat blob for nn to test a new mechanic that is hilariously underpowered. 20% def down is...2 Perma down...assuming 10 def...lmao"
      ]
    }
  },
  {
    name: "C3 Reimu",
    img: "c3 reimu.png",
    tier: "A",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Self Sufficient in Yang & Agility Buffs Especially",
        "Extremely Strong AoE Spellcard Damage, Decent LW Damage",
        "Great Debuffs and Utility, reasonably good support."
      ],
      cons: [
        "Lacks AoE Anomaly Breaks",
        "Lacks Crit Atk"
      ],
      mixed: [
        "Considerable Dmg to Eff Issues"
      ],
      extra: [
        "@ except it's c3 cirno"
      ]
    }
  },
  {
    name: "Ce1 Flandre",
    img: "C3 prae2.png",
    tier: "A",
    opts: { e: true, spd: true },
    explanation: {
      pros: [
        "High damage complimented by good support",
        "Amazing t1 buffs, so good other units around her can spam p up and not worry"
      ],
      cons: [
        "As a pure support she lacks breaks",
        "Generally lacking in last gauge, not enough debuffs to kill herself and shafted to helping allies"
      ],
      nitpicks: [
        "Susceptable to Paralyze"
      ],
      mixed: [
        "Killer bottle neck, human god swimsuit is not good enough especially with her unreliable performance even on killer",
        "Units who can get around her quick spam and enable her damage usage are very very very few"
      ],
      extra: [
        "Her entire kit tries to be a master of everything while pairing with her sister which isnt doable due to her lack of breaks (making quick spam bad) and too much quick spam (which makes her damage role bad) so she is good at nothing in practice, ruining her"
      ]
    }
  },
  {
    name: "C5= Mokou",
    img: "c5 mokou.png",
    tier: "A",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "She has the mv sanae skill but better (Free 50% Dmg Up)",
        "Breaking is Decent",
        "Praecard Beneficiary"
      ],
      cons: [
        "Disjointed LW bullet types",
        "Shit Killers cull usefulness immediately, extreme killer bottleneck",
        "Awful support, pretty much just agi scattered everywhere."
      ],
      nitpicks: [
        "THAT EVIL 70% FREEZE INLINE THAT I HATE"
      ]
    }
  },
  {
    name: "C5> Eiki",
    img: "spring eiki.png",
    tier: "A",
    opts: { e: true, tec: true },
    explanation: {
      pros: [
        "Good enough Buffs and Support",
        "Good Utility and Breaking",
        "Dmg to Eff and Res contributes to very high damage when hitting killer"
      ],
      cons: [
        "Lackluster Killers; Nigh unusable outside of God content",
        "Lacks Crit Atk and Rank I Buffs in General"
      ],
      boons: [
        "AoE SC having p0 killer and anomaly break helps a lot"
      ],
      nitpicks: [
        "Card reliant for def down"
      ],
      mixed: [
        "Mixed bullet type can lead to easily being shafted"
      ],
      extra: [
        "----- AWFUL theme",
        "Against God: LW > L0g Sanae",
        "When not against god: Damage < Lr Nitori",
      ]
    }
  },
  {
    name: "C3' Junko",
    img: "C3' Junko.png",
    tier: "A",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Hilarious damage for being fully neutral. AoE has very very high damage potential."
      ],
      cons: [
        "Shitty breaking is not complemented by her speed!",
        "Set up is so horrendously bad"
      ],
      nitpicks: [
        "Junko is yet again ruining her personality for the sake of \"haha bunny mommy\""
      ],
      mixed: [
        "Damage has huge variance due to dedicating most of her kit to RNG Crits while she lacks consistently good killers outside EBL content",
        "Support is not useless, but very underwhelming.",
        "(use mugetsu)"
      ],
      extra: [
        "Her mega neutral nuke is the only thing keeping her in A since we value neutral damage a lot. This character needs a looot of support to actually work though. Her AoE is also quite good on killer but less reliable."
      ]
    }
  },
  {
    name: "C3' Seiga",
    img: "C3' Seiga.png",
    tier: "A",
    opts: { e: true, tec: true },
    explanation: {
      pros: [
        "Valuable and unique gimmicks",
        "Blatantly overpowered breaking ability"
      ],
      cons: [
        "Generally lacks Rank I buffs to a sad degree.",
        "Lacks Def Down I on LW causing rank ii def down to feel worse. Lacks buffs in general, limiting her use.",
        "The Worst, and I mean the worst Dmg to Eff issues in the game. Almost completely unusable outside of killing SPECIFICALLY the water enemy, which completely ruins majority of her viability"
      ],
      nitpicks: [
        "Spellcard Animations are just so so slow"
      ],
      mixed: [
        "Can't use Crit Acc/Eva buffs",
        "Killers hit more than you'd expect but are too unconventional to be useful 90% of the time. While her damage potential is high she is very inconsistent in this manner."
      ],
      extra: [
        "Seiga is a unit that *should* have most aspects of a competent kit. But in practice she is basically just a breaker. A good breaker, but still.",
      ]
    }
  },
  {
    name: "C3' Urumi",
    img: "c3' urumi.png",
    tier: "A",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Good focus on yang attack while really only being reliant on it for her damage.",
        "Complimenting her specialization she has quite great damage"
      ],
      cons: [
        "Largely lacks most of the utility and support to be useful in other roles, and due to the above, isn't particularly consistent in her own damage role either."
      ],
      mixed: [
        "Largely falls short in the realistic damage side, due to low scale buffs  low crit attack buffs"
      ]
    }
  },
  {
    name: "C3' Nemuno",
    img: "c3' nemuno.png",
    tier: "A",
    opts: { e: true, dest: true },
    explanation: {
      pros: [
        "Decent Crit Buffs throughout her Kit Complemented by her Rank IIs",
        "Super High Damage on Killer"
      ],
      cons: [
        "Lacks Accuracy Buffs on AoEs and Debuffs so Everything Above is 100x Worse. G3's Buffs fall off a Cliff."
      ],
      boons: [
        "Has her P and Anom Inflict Skill Seperated making her MUCH better for Duos. This is combined with Competent Buff Counts on Gauge 1+2 makes her actually not bad for Duos.",
        "Has Full Anom Immunity (lol)"
      ],
      nitpicks: [],
      mixed: [
        "AoE Benefits Very Little from Crit Acc II Meaning there's 0 Damage Amp and her AoE Damage Falls off a Cliff Unless you hit Niche Killers"
      ]
    }
  },
  {
    name: "Cf1# Reimu",
    img: "cf1 reimu.png",
    tier: "A",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Very high, yet weirdly unreliable last word nuking.",
        "Attack anoms help a lot for her damage consistency in achieving her heights."
      ],
      cons: [
        "While her last word works fine, her aoe is especially lacking in killer. With some of the worst killer for a nuking aoe in the game and lacking the raw damage to make it nuke outside of killer content. She has all other facets of a strong aoe nuke role, but this is her massive flaw keeping her in the lower tiers."
      ],
      mixed: [
        "Is yin, poison, extremely fast, and with selfish agi. Making her very difficult to play around in general. Even beyond normal tiering standard."
      ],
      extra: [
        "Remember everyone, a lastword will probably kill even if it hits 17mil or 3mil. But if your aoe isnt solid you will suffer in the current era.",
        "Earlier unreliable was used to describe her lw, this is due to her last word having high innate crit acc and her having high crit acc buffs without being 100% at cap. Meaning one must be quite good at ensuring she has no issues with crit acc.",
        "Her only time shes duod was with maidkasa in the easiest stage in 2 years in a 5 action comp and youre telling me her ass is supposed to contend with cz2 yikes."
      ]
    }
  },
  {
    name: "L10.1 Reimu",
    img: "idol_reimu.jpg",
    tier: "A",
    opts: { e: true, tec: true },
    explanation: {
      pros: [
        "High Damage Across her AoE and Last Word backed up by NEW BISES FOR HER LW!! With her LW Being complimented with Good Yang Attack Buffs and a Versatile Def Down Skill",
        "Good Utility (Mostly Fast Breaking, Acc and P) with basically negative P issues for herself allowing herself to spam her attacks without concern for herself."
      ],
      cons: [
        "Lacks Crit Atk and Yang Attack throughout Gauges",
        "AoE Spellcard Killers are very narrow limiting her use severely"
      ],
      boons: [
        "Great Stall Ability"
      ]
    }
  },
  {
    name: "L10.1 Sakuya",
    img: "l10.1 Sakuya.png",
    tier: "A",
    opts: { e: true, dest: true },
    explanation: {
      pros: [
        "Big Last Word Damage supported by Damage to Eff and Res",
        "Great Crit Sustainability & Support"
      ],
      cons: [
        "Lacks Acc and P Sustainability",
        "Awful Buff Cleanse Restoration, Poor Breaking, and Bad p0 AoE Spellcard Killers make using her between gauges very challenging"
      ],
      boons: [
        "4 Para Inflict on Skill makes Pairing with her Much more Realistic"
      ]
    }
  },
  {
    name: "F1 Koishi",
    img: "f1 koishi.png",
    tier: "A",
    opts: { tec: true, e: true },
    explanation: {
      pros: [
        "Wide Killer Range, Good Last Word & AoE Spellcard Damage",
        "Great Anomaly Breaks, lots of poison application.",
        "Great Self Setup"
      ],
      cons: [
        "Extremely Selfish, Lacks Good Support or Util",
        "Lacks crit buffs and p (she needs to boost a lot for her spellcards)",
        "Content mismatches often, wants to be in metal because harder to replace but lw becomes useless and vise versa in wood. Rendering half her \"kit\" useless at anytime."
      ],
      boons: [
        "Fast Anims"
      ],
      nitpicks: [
        "Primarily scales off Yang Def with a small Yang Def stat",
        "Her LW Poison Application has RNG"
      ],
      mixed: [
        "Questionable Skill Setup - While Quick helps with Breaks, it tends to hurt AoE nuking (even with that overflow)"
      ],
      extra: [
        "Again, 6 line ele, 100% card and dual scale and still gets beaten by L10.1, who has none of those",
      ]
    }
  },
  {
    name: "Lm1 Mima",
    img: "lm1 mima.png",
    tier: "A",
    opts: { r: true, dest: true },
    explanation: {
      pros: [
        "High-Damaging Last Word supported by Attack Anomalies that she does a good job of Inflicting on Herself",
        "Good Party Crit Support, can turn anyone into a Dest unit thanks to her Resonance"
      ],
      mixed: [
        "Tends to be locked to only working against Moon Weak enemies due to Reliance on Damage to Eff"
      ],
      cons: [
        "Bad AoE Spellcard Damage Consistency is a real concern especially as it deadass needs Yang Attack buffs to optimize its damage???",
        "Support between Gauges is just bad. Has next to no Agility buffs, low Yin Attack buffs, and doesn't even have good Crit Attack buffs outside of Gauge 1",
        "Lacks Utility, especially seeing as she has Accuracy Problems between Gauges (outside of Last Word)"
      ],
      nitpicks: [
        "mid?",
        "? Not Freeze or Paralyze Immune"
      ],
      extra: [
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
      ]
    }
  },
  {
    name: "Lr1 Shinki",
    img: "lr1 shinki.png",
    tier: "A",
    opts: { atk: true, r: true },
    explanation: {
      pros: [
        "Good Acc/P/Break Util throughout her kit"
      ],
      cons: [
        "Bad AoE spell killer limits use overall. Further exemplified by having mismatched p0 element with her Last Word"
      ],
      mixed: [
        "High LW Damage tied to excessive reliance on Damage to Eff, while lacking innate debuffs",
        "Outside of Yang Atk, her Support is lackluster in that she has few party Crit/Agility buffs"
      ]
    }
  },
  {
    name: "L80 Ran",
    img: "l80 ran.png",
    tier: "A",
    opts: { r: true, def: true },
    explanation: {
      pros: [
        "100% Stored Power to Double Damage for the Party is always good to have",
        "7 Poison break + quick",
        "For this tier, last word is quite fantastic raw damage wise. Being the new highest f2p nuke on full killer."
      ],
      cons: [
        "The lack of buffs noteably harms her aoe resulting in it being largely useless, both for breaks and damage, despite its relatively great base damage at cap",
        "Slowest unit in the game despite 4 break aoe."
      ],
      mixed: [
        "Entire kit, while having damage (especially lw) generally lacks so many buffs she is incapable of matching majority of units even with stored power (just like mv patchy)"
      ],
      extra: [
        "This character would be in low B maybe C if it wasn’t for the stored power. ",
        "Usage: This character like EX++ for EBR purposes but is soo generic in terms of DS. Her AoE is just dead and she’s meant to break 7 on turn 1 but she also needs to pop all skills to make it worth it (buffs wise and her quick). Her t2 LW damage dies instantly without skill 2 which is a major problem because even with stored power it’s not that great thanks to eff dmg issues and lacking every single buff all at once every gauge. ",
        "You either run nysen + 5sp bot or die trying (or just..idk...hit eff+killer on the easiest ebl in the game (seriously) or have all these ignored and become a 120 bot)"
      ]
    }
  },
  {
    name: "L80 Yuyuko",
    img: "mv yuyu.jpg",
    tier: "A",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "Good Supportive and Debuffing Skill",
        "Wood Weakness Inflict immediately takes care of any single gauge, works at 5p"
      ],
      cons: [
        "Poor Killers & Limited Yang Atk & Agi Buffs Limit Personal Damage Output"
      ],
      nitpicks: [
        "Effectively Gauge 3 Locked"
      ],
      mixed: [
        "Can't take advantage of Wood Weak Inflict outside of Last Word"
      ]
    }
  },
  {
    name: "L80 Miko",
    img: "l80 miko.png",
    tier: "A",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "++++++++ Hype moments and aura (said twice for dramatic effect)",
        "Great Killers, Nuking is quite good",
        "Party 2 Crit II is quite good, st crit def ii is more situational but fine",
        "Super Good Breaking From Skills/Aoe/Lw",
        "Dmg to eff and res"
      ],
      cons: [
        "Awful AoE Killers",
        "Lacking in typical yang buffs and debuffs",
        "Elements and bullet types (yes multiple) are horrendous"
      ],
      boons: [
        "Fairy Killer p0 on AoE (EB memes)",
        "90% Of lw is p0, so much of her lw trolling is okay"
      ],
      extra: [
        "SS for EB, low A everything else",
        "The gimmicky mid tier filled with hype moments and aura"
      ]
    }
  },
{
    name: "L80 Sanae",
    img: "Mv sanae.jpg",
    tier: "A",
    opts: { atk: true, r: true },
    explanation: {
      pros: [
        "High Damage across her AoE Spellcard and Last Word, supported by Card Options and Fast Overflow",
        "Good Buffing and Utility Between Gauges, notably moreso with the new D card"
      ],
      cons: [
        "Elemental Disjointment between her AoE Spellcard and Last Word will hurt her, and as her LW is mixed Dual Element with non-negligible weight on her Laser lines means she can't take full advantage of the Barrier Status card hurting her in Duos",
        "Lacking Support for her Dual Scaling Buffs will drag her performance down. Will also want more Crit Attack Buffs"
      ],
      mixed: [
        "AoE Spellcard misses Youkai killer which can quickly make her damage fall off"
      ]
    }
  },
  {
    name: "A7& Yuyuko",
    img: "a7& yuyuko.png",
    tier: "A",
    opts: { supp: true, ex: true },
    explanation: {
      pros: [
        "Great Consistent Yin Support throughout her kit, backed up highly with the existence of the FWaN card making her act like a mini Cs2 for Yin Hard units",
        "Good additional Utility throughout her Kit"
      ],
      cons: [
        "Genuinely held back by her killers in spite of having high damage with said killers"
      ],
      nitpicks: [
        "No dmg to eff/res is kinda lol but it doesn't reallly matter"
      ],
      mixed: [
        "Will want much more P and Crit Atk to maximize her breaking and damage, which is fine for trios but prevents her from going higher"
      ]
    }
  },
  {
    name: "A9& Yuuka",
    img: "a9& yuuka.png",
    tier: "A",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "LW Damage is Quite Good even on Neutral with Good Killers",
        "Overall Decent Buffs/Util across her kit. 7 AoE Poison Breaks are obviously good, even if she's usually going last"
      ],
      cons: [
        "AoE Damage can be very Hit or Miss."
      ],
      mixed: [
        "Randomly Selfish Buffs make her annoying for team support"
      ],
      extra: [
        "I already know theres gonna be a lot of questions on this, but basically any role she tries to fulfill will usually fail.",
        "Aoe breaks -> not enough support or speed usually",
        "damage -> lol what aoe damage",
        "Her kit is yang mv kokoro if it was just worse because she fails on everything kokoro uses to just skate by. However when paired with the right people (and with new cards) she can go off hence her being raised."
      ]
    }
  },
  {
    name: "A10& Shizuha",
    img: "a10& shizuha.png",
    tier: "A",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Rather Good LW Nuke with Great Killers",
        "Great Buffing Throughout All Gauges, Further Amplified by Cards"
      ],
      cons: [
        "Low Innate Util",
        "No Debuffs"
      ],
      mixed: [
        "AoE Damage can leave more to be desires due to Average-ish Killers - Would Work w/ Atk Anoms but it's tenative. A lot of optimal use is in this aoe. HOWEVER on killer it is very good.",
        "Party Paralyze can be Annoying"
      ]
    }
  },
  {
    name: "A12& Nazrin",
    img: "a12& nazrin.png",
    tier: "A",
    opts: { atk: true, ex: true },
    explanation: {
      pros: [
        "Good Killers and Damage Across the Board",
        "Good Buffs throughout her Kit"
      ],
      cons: [
        "Lacks Agi Buffs",
        "Extremely Reliant on Dmg to Eff as her numbers tend to die without it (see seigun)"
      ],
      mixed: [
        "Breaking could be Better",
        "Reliant on Cards for Def Down",
        "AoE killers aren't bad but could be better"
      ]
    }
  },
  {
    name: "A12& Shou",
    img: "a12& shou.png",
    tier: "A",
    opts: { spd: true, ex: true },
    explanation: {
      pros: [
        "Buffs All Relevant Stats without Huge Gaps, making her relatively easy to use"
      ],
      cons: [
        "Lacks Debuffs so her damage is quite limited (RHP's -1 def down only gets you so far)"
      ],
      mixed: [
        "Killers tend to be Unconventional for Consistent Use in Practice despite High Damage making her use more limited",
        "Tends to want more of Everything despite having good enough floors - most notably Yin Atk and Def"
      ]
    }
  },
  {
    name: "A12.5& Hatate",
    img: "a12.5& hatate.png",
    tier: "A",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "STUPID Damage Potential, even on Wood Res, 4 NLM Lines"
      ],
      cons: [
        "Generally Lacks Utility"
      ],
      mixed: [
        "While Support is Overall Passable, requires a significant helping hand in most buffs (most notably crit)",
        "Killers are Below Average at Best"
      ],
      extra: [
        "She is used as a joker card; you throw her into any stage to nuke and she doesn't do much else.",
        "That nuke is great though"
      ]
    }
  },
  {
    name: "A15& Seiran",
    img: "a15& Seiran.png",
    tier: "A",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Very Good LW Damage with Killers that hit more than one would expect",
        "Overall Good Buffs"
      ],
      cons: [
        "Very Inconsistent AoE Damage",
        "Lacks Def Down or Accuracy"
      ],
      nitpicks: [
        "Bad P Economy"
      ],
      mixed: [
        "Breaks are a bit below Average",
        "Killers are still Very Unconventional and Inconsistent aside from God"
      ]
    }
  },
  {
    name: "A15& Clownpiece",
    img: "a16& clownpiss.png",
    tier: "A",
    opts: { tec: true, ex: true },
    explanation: {
      pros: [
        "Killers hit more than you'd expect",
        "Exceptional Breaking Ability",
        "Actually Great Supportive Ability and debuffing somehow"
      ],
      cons: [
        "Tends to Fall Short in terms of Personal Damage due to low base power and dual setup issues",
        "No sources of Acc"
      ],
      mixed: [
        "She is mini-gengetsu in terms of breaking and support/util, HOWEVER as she lacks spd anoms she will require careful agi manipulation (for ds100) and/or stalling (for 120). This isn't too hard with Prae Cards and you can generally make it work however it might make some situations more difficult to work with than they should be"
      ],
      extra: [
        "Similar use to C8<< Kokoro wherein she has the gengetsu-esque util/support but falls short in terms of damage. Kokoro is still more realistically better but because we anti bias solo LW's (because those don't tend to work in practice) here she is."
      ]
    }
  },
  {
    name: "A15.3& Doremy",
    img: "a15.3& doremy.png",
    tier: "A",
    opts: { def: true, ex: true },
    explanation: {
      pros: [
        "Overall Good Damage with Good Killers across the Board",
        "Good Overall Buffing Throughout her Kit makes said damage actually achievable, decent overall support/util in addition"
      ],
      cons: [
        "Extremely Disjointed Elements kills her practical immensely really ruining her."
      ],
      nitpicks: [
        "Evil Self Yin Atk on AoE"
      ]
    }
  },
  {
    name: "A17.5& Kutaka",
    img: "a17.5& kutaka.png",
    tier: "A",
    opts: { spd: true, ex: true },
    explanation: {
      pros: [
        "Very High Damage Potential, including extremely high res nuking akin to zanmu",
        "Good Support Across the Board"
      ],
      cons: [
        "No Instant Self 3p?? And Late Breaks Immediately hurts consistent usability",
        "Lackluster killers geniunely hold her back"
      ],
      mixed: [
        "Disjointed LW and Spellcard Elements can be a nuisance to deal with",
        "Reliant on Cards for Debuffs"
      ],
      extra: [
        "Note: ASSUMING you save up the dolls to get her to 150 luck for the bonus 1.0P on debut... Mid-High S?? Genuinely saves a lot of her practicals lmao just watch for AoE damage because off killer... yikes"
      ]
    }
  },
  {
    name: "F1.-5 Sanae",
    img: "f1.-5 sanae.png",
    tier: "A",
    opts: { supp: true, b: true },
    explanation: {
      pros: [
        "Great Yang Hard Support especially post Koapatchy D-Card (her LW has 11 Yang Atk lol)",
        "High Damage across her AoE and Last Word"
      ],
      cons: [
        "Having Disjointed Elements across her AoE and Last Word with very few innate debuffs limits her a lot.",
        "Needs more Crit Attack Buffs to Maximize Use"
      ],
      mixed: [
        "Lacking Youkai on the Primary Lines of her Attacks Limits her overall universality",
        "Utility is somewhat below average aside from Barrier Support. Notably being very P-Needy."
      ]
    }
  },
  {
    name: "D8.-5 Flandre",
    img: "d8.-5 flandre 1.png",
    tier: "A",
    opts: { dest: true, b: true },
    explanation: {
      pros: [
        "Great Damage Across the Board, Further Amplified by Great Card Access",
        "Capitalizes off Good Self Buffing and Utility"
      ],
      cons: [
        "Completely Incapable of Breaking Burn",
        "Usually Limited to just Water Enemies as she is entirely Water"
      ],
      mixed: [
        "Tends to Want more Yin Atk"
      ],
      extra: [
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        "Because EX Kosuzu was so good we needed a second one"
      ]
    }
  },
  {
    name: "R2.-5 Yuyuko",
    img: "r2.-5 yuyuko.png",
    tier: "A",
    opts: { spd: true, b: true },
    explanation: {
      pros: [
        "Being Blessed with Atk Anoms, Good Killers, and Dmg to Res means she has actually achievable and good consistent damage across the board",
        "Overall Decent Support/Util"
      ],
      cons: [
        "Lacks Def Down"
      ],
      mixed: [
        "Self Anoms are only 2t",
        "Rainbow LW hurts a LW with a mediocre damage ceiling even more BUT it's fine because of dmg to res and having a good enough damage floor",
        "Breaks are So-So (Only 4 breaks at a time BUT it's 4 breaks on 2 gauges and she breaks 2 anomalies so it could be worse)"
      ]
    }
  },
  {
    name: "W1;4 Suika",
    img: "w1.-4 suika.png",
    tier: "A",
    opts: { dest: true, b: true },
    explanation: {
      pros: [
        "Damage is higher than the original W1",
        "Buffs are also higher than the original"
      ],
      cons: [
        "Utility is just mid"
      ],
      mixed: [
        "Damage variance is still high as her p0 killers are still poop butt"
      ]
    }
  },
  {
    name: "E1;4 Sakuya",
    img: "e1.-5 sakuya.png",
    tier: "A",
    opts: { dest: true, b: true },
    explanation: {
      pros: [
        "High Damage with a great Killer range backed up with an AoE nuke",
        "Good Buffs & Util to sustain her performance throughout her kit"
      ],
      cons: [
        "Generally just doesn't have the numbers or def down to be higher."
      ],
      extra: [
        "Very similar to wuika where shes better than the original, has good stuff in her kit (even if very formulaic) but entirely held back by numbers which would let her be s probably"
      ]
    }
  },
  {
    name: "F1;4 Koishi",
    img: "f1;4 koishi.png",
    tier: "A",
    opts: { tec: true, b: true },
    explanation: {
      pros: [
        "Good Utility throughout her Kit, most notably Acc on AoE and 7/3 Breaks in her AoE (with 2p breaks making them actually usable by herself)",
        "Good Yang Atk and Def Buffs throughout her Kit (however her Agi usually won’t let her outspeed so her Yang Support is somewhat lacking)",
        "Competent Damage throughout her kit, abuser of Barrier Status Card, damage doesn’t fraud out immediately off eff. Fast breaks also enable AoE nuking."
      ],
      cons: [
        "AoE Killer leaves a lot to be desired even if not technically bad numerically speaking, killers in general are very heavily carried by Parallel Presence killer in her Last Word which is a known unstable range.",
        "Needs a good deal of Crit Atk and P to maximize her usage"
      ]
    }
  },
  {
    name: "B3 Seiran",
    img: "b3 seiran.png",
    tier: "A",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Great Damage Across the Board with Good Killers",
        "Good Breaking, Debuffing, and Utility throughout her kit."
      ],
      cons: [
        "Noticeably more selfish than a lot of units of this tier, though augmented by Card Options."
      ],
      mixed: [
        "Can be reliant on damage to Eff, leading to Inconsistent Damage"
      ]
    }
  },
  {
    name: "B3 Shinmyoumaru",
    img: "b5 shinmy.png",
    tier: "A",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "7 Breaks across 2 gauges is huge util, complemented by high enough Agi",
        "Good Yang Support throughout her Kit"
      ],
      cons: [
        "Reaaally needs P support to actually have those aforementioned breaks and wants more acc overall"
      ],
      mixed: [
        "Good Damage is held back by subpar killers"
      ],
      extra: [
        "Not included in tiering, but actual use may prove difficult as there are few actual characters that work with her. Yang units with Party P that go after her with good AoEs are few and far between. Pink Flan, Ekari, Mv Sanae might work if you can get around the anomaly difference. Sadly Yang/Blind is an extremely underdeveloped archetype where the only characters are Gunko (no party p, is spd, bad killer) and mugetsu (is spd, bad killer). And freaki ig "
      ]
    }
  },
  {
    name: "Lr Ibaraki-Douji's Arm",
    img: "Lr Armpdn supp.png",
    tier: "A",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Good Reliable Damage Complemented by Damage to Res and Good Killers",
        "Good Breaking",
        "Good Yin Support across her Kit, Atk Anomalies help her even more"
      ],
      cons: [
        "AoE Spell has worse (but not bad) innate killers, and even if she hits full killer it still isn't great in the damage department"
      ],
      nitpicks: [
        "Vulnerable to Burn",
        "Looks at me funny PART 2"
      ],
      mixed: [
        "Stuns aren't Guaranteed",
        "Noticeable Damage Ceilings limit Damage Potential",
        "Reliant on Cards for Debuffs"
      ]
    }
  },
  {
    name: "W5 Yuugi",
    img: "yuugi.jpg",
    tier: "A",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Good Damage Potential on Last Word and AoE, complemented by quick breaks on her AoE",
        "Decent Yin & Crit Support Across her Kit",
        "Yin Debuffs Everywhere, making her a good Option for Yin Teams"
      ],
      cons: [
        "Yin Debuffs after Spellcards Finish limit Personal Damage",
        "Extremely dependent on Damage to Eff. Immediately dies against Non-Wood Enemies."
      ],
      nitpicks: [
        "Evasion down + no acc = IM SUFFERING STOOOP IT BURNNS",
        "Who Will Wuse Wuugi Win Wenty Wenty Wive"
      ],
      mixed: [
        "Soupy Elements & Mediocre Breaks limit Utility and Damage",
        "Needs P Support",
        "Debuffs Evasion instead of buffing Accuracy leading to Inconsistent Damage and Breaks"
      ],
      extra: [
        "@@@"
      ]
    }
  },
  {
    name: "A13 Seiga",
    img: "seiga.jpg",
    tier: "A",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Amazing support and self buffs",
        "Incredible debuffs especially for a last gauge situation ",
        "Access to incredible cards that can completely change her role granting her flexibility ",
        "Great and reliable damage across the board",
        "Good breaking ability"
      ],
      cons: [
        "Requires additional accuracy ",
        "Tends to require help with spirit power despite Self 3p as her recovery is bad. AoE spell has a lot of damage/util so you'd like to spam it.",
        "Support is befuddled by buff remove being extremely common"
      ],
      nitpicks: [
        "Can't use her in yt thumbnails"
      ],
      mixed: [
        "Killers, while not that bad, tend to be on the inconsistent side ",
        "Boost scaling AOE spell makes her p problems more prevalent"
      ],
      extra: [
        "Best A-Verse & Fes. Solos star & water ex. Don't let her rarity fool you, she is a good sfes disguised as a fes"
      ]
    }
  },
  // start of B
  {
    name: "C3 Miyoi",
    img: "c3 miyoi.png",
    tier: "B",
    opts: { tec: true, e: true },
    explanation: {
      pros: [
        "Between Rank II Abilities, Regular Buffs, and Crit Debuffs, Great Party Support & Util",
        "Good Anomaly Breaking Ability",
        "Damage is now actually good post rebirth! Though only on swimsuit stages. Damage everywhere else is still bad."
      ],
      cons: [
        "Very Soupy Elements",
        "Card Reliant for Yang Debuffs"
      ],
      nitpick: [
        "Lacks Innate Crit Extention"
      ],
      extra: [
        "++++ Makes me feel lesbian"
      ]
    }
  },
  {
    name: "C3 Tenshi",
    img: "tenshi.jpg",
    tier: "B",
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "High, Semi-Universal Damage Potential with Gensokyo Killers & Damage to Res",
        "Usable Yang & Crit Support Across her Kit"
      ],
      mixed: [
        "Inconsistent Crit Rate from Lower Base Crit Acc & Lacking Consistent Crit Acc Buffs (No Atk Anoms)",
        "AoE runs into consistency issues",
        "Below Average Breaking Ability between being Effectively Mono-Water and having low Anomaly Breaks"
      ],
      cons: [
        "Self Setup is slow (no atk anoms), very susceptable to Buff Cleanse (no atk anoms). Very needy for support.",
        "Lacks Accuracy or Debuffs and is very reliant on them to achieve her damaage."
      ],
      nitpick: [
        "Usefulness heavily hampered in killer nerf content"
      ]
    }
  },
  {
    name: "C3 Koishi",
    img: "c3 koishi.png",
    tier: "B",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Great Party Support, 5t party Agi II is lol, low skill cooldown is especially amazing",
        "Self Sustainable in Buffs"
      ],
      mixed: [
        "Soupy Elements",
        "High Damage Variance (thanks to bad killer placement",
        "As a Yang Unit, Debuffs Yin Def"
      ],
      cons: [
        "Overly reliant on Damage to Eff & Meh Killers",
        "Low Damage Ceiling she literally doesn't even have scaling on her p0 LW",
        "As a pure support, she will struggle due to lacking a lot of good qualities (party acc, other util) and as a mixture of all three roles she faces consistency issues thanks to low damage"
      ],
      nitpick: [
        "Her LW is so stupidly long it sucks for use, even when she DOES have use"
      ]
    }
  },
  {
    name: "C3 Satori",
    img: "c3 satori.png",
    tier: "B",
    opts: { def: true, e: true },
    explanation: {
      pros: [
        "Actually Good Damage thanks to Buffs and Rein, Excellent AoE Spellcard Nuke, Realistic Use Benefit",
        "Overall Decent Yang Buffs"
      ],
      mixed: [
        "Lacks Util or a Role outside being a Glorified Damage Bot"
      ],
      cons: [
        "Extremely Bad Breaking Ability",
        "Lacks Crit Atk or Good Support outside Yang Atk II"
      ],
      nitpick: [
        "ST Anim is unreasonably long"
      ]
    }
  },
  {
    name: "C3 Miko",
    img: "C3 Miko.png",
    tier: "B",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Good Killers & Damage",
        "Good Support for Buff Remove"
      ],
      boons: [
        "Minmaxed AF stats "
      ],
      mixed: [
        "Support is also Mixed so",
        "Can’t use her Crit Acc Stuff",
        "Mixed Bullet Type but High p0 Weight"
      ],
      cons: [
        "Dmg to Eff Issues",
        "Lacks Crit Atk",
        "Mixed",
        "Poor Breaking Ability"
      ],
      extra: [
        "@"
      ]
    }
  },
  {
    name: "C3 Kogasa",
    img: "c3 kogasa.png",
    tier: "B",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Very High Damage Potential within Swimsuit/Metal Content",
        "Very Fast Self Setup via Skills",
        "Good Breaking Ability"
      ],
      mixed: [
        "Party Acc is locked to her Gimmick Skill with long CD",
        "Saddled by Lacking Overflow & RNG Inlines"
      ],
      cons: [
        "Extreme Killer & Dmg to Eff Bottleneck Kills her Versatility",
        "Low Support, Low Utility, No Debuffs, and Lacks Buff Extentions",
        "Generally Ass AoE Spellcard Damage and Low Gauge 2 Buffs/Support make her effectively only usable for 1 gauge without heavy support."
      ]
    }
  },
  {
    name: "C3 Byakuren",
    img: "c3 byakuren.jfif",
    tier: "B",
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Very High Damage Potential, Especially on Last Word & Solo Target Spellcard",
        "Great Self Buffing Ability To Scaling and Attack.",
        "Guaranteed AoE Stun"
      ],
      boons: [
        "Great Stalling Ability"
      ],
      cons: [
        "Poor Killers, Dmg to Eff Issues, and (some) Crit Acc Issues Hamper Usefulness Immediately. Completely lacks Swimsuit Killer.",
        "Lacks Debuffs and Accuracy"
      ]
    }
  },
  {
    name: "C3 Joon",
    img: "c3 joon.png",
    tier: "B",
    opts: { tec: true, e: true },
    explanation: {
      pros: [
        "Very High Utility, between Breaking, P, and Debuffing"
      ],
      mixed: [
        "Middling Damage Support Outside P and Acc (requires extends)"
      ],
      cons: [
        "Severe Killer & Dmg to Eff Bottleneck limits damage and versatility"
      ],
      extra: [
        "Util unit when Util..",
        "Solo Clears 4 Ele Ex",
        "Note that while her support does seem crazy at a first glance things like her crazy party p aren't very necessary nowadays as most modern units are p sufficient and what other stuff she has can be replaced by lots of better people."
      ]
    }
  },
  {
    name: "C3 Marisa",
    img: "c3 marisa.png",
    tier: "B",
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Very strong support, especially for yang. High Utility",
        "Thanks to rein and buff spam, her practical damage is quite good on heavily biased stages"
      ],
      cons: [
        "Poor Breaking Ability",
        "Terrible Killers Limit Use",
        "Dual Scaling Issues"
      ]
    }
  },
  {
    name: "C3 Youmu",
    img: "youmu.jpg",
    tier: "B",
    opts: { tec: true, e: true },
    explanation: {
      pros: [
        "Yang Debuffs Everywhere makes her a great Yang Puzzle Piece",
        "Good Support and Anomaly Breaking gives her a more flexible role"
      ],
      boons: [
        "Very Abusable Crit Mods"
      ],
      mixed: [
        "High Damage Potential tied to middling killers & Crit RNG, leading to High Inconsistency"
      ],
      cons: [
        "Poor Elemental Distribution hurts Damage and Breaking"
      ],
      nitpick: [
        "RNG Anom Infl. on her LW",
        "AoE Breaking is a bit fucked",
        "Mid/Low SS on Swimsuit stages, low A-High B everywhere else"
      ],
      extra: [
        "(Former) QUEEN OF C3 DS STAGES"
      ]
    }
  },
  {
    name: "C3 Kasen",
    img: "c3 kasen seal.png",
    tier: "B",
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Good Crit/Agi Supportive Capabilities and Utility."
      ],
      mixed: [
        "Damage is Ultra Reliant on Swimsuit Content and Hitting Sun Eff Content",
        "Somehow lacks Yang Support on her own"
      ],
      cons: [
        "Role as a breaker and damage dealer is held back significantly by lacking Innate P restoration"
      ]
    }
  },
  {
    name: "Cz1 Marisa",
    img: "cz1 marisa.jpg",
    tier: "B",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "High Damage Across her kit Supported by Good Debuffing Utility.",
        "High Self-Sufficiency in terms of Self Buffs, P, Barriers, Acc, means that though she is mismatched (Yang unit who targets yin, being yin/burn is unfortunate) she can generally be left to do her own thing."
      ],
      cons: [
        "4 Solo Spellcards mean that she can't AoE break at all, and can't do AoE damage at all. Because of this, she is the most prone to being unfavored in a stage and she is required to either go last or to bring an additional burn breaker with her.",
        "Party Support and Util in terms of Atk/Agi/Crit buffs is quite poor overall"
      ],
      nitpick: [
        "Slightly P Needy",
        "RNG in her self Barr"
      ],
      extra: [
        "@",
        "Solo clears 4 ele ex",
        "DS Solo Count: 13",
        "NOTABLE PAIRINGS (Not included in tiering): Mv Reimu, Gengetsu, Anyone who covers an AoE nuke that she lacks (C3 Yuyuko)"
      ]
    }
  },
  {
    name: "C5> Koishi",
    img: "PANK KOOSH.jpg",
    tier: "B",
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Stored Power can give the party 75% more damage, complimenting her personal damage as well",
        "Great Stun Utility",
        "Good Anomaly Breaks"
      ],
      mixed: [
        "She buffs Yang Def as a Slice unit while having very slow Agility buffing",
        "Effectively Mono Earth & Mixed Elements"
      ],
      cons: [
        "Poor Killers, Spellcard Damage tends to be Ass (ST Card is decent but that AoE...)",
        "Terrible Consistency & Buff Issues - She is a Resource Sink",
        "Lacks Accuracy & Crit Accuracy outside of Crit Acc II. Lacks debuffs at all."
      ],
      nitpick: [
        "Looks meh"
      ],
      extra: [
        "All her buff and consistency issues RUIN all practice stuff"
      ]
    }
  },
  {
    name: "C5> Flandre",
    img: "flanny.jpg",
    tier: "B",
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Self Sustainable with Buffs",
        "High Damage Potential on Last Word and AoE"
      ],
      cons: [
        "AoE damage will be very inconsistent due to refusing to commit to being either Fire or Wood",
        "No Accuracy",
        "Poor Killers, needs help in Crit Accuracy"
      ],
      extra: [
        "@@"
      ]
    }
  },
  {
    name: "C3≦ Komachi",
    img: "C3less than or equal to Komachi.png",
    tier: "B",
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Extremely Good Support, up to 1.3k Yin Atk stat for free almost lol"
      ],
      boons: [
        "Great Raw Damage",
        "Weirdly realistic as she has proven herself to be"
      ],
      cons: [
        "Terrible Killers",
        "Terrible Breaks, Mid Util (Where Party Barr????)"
      ],
      extra: [
        "Kinda @"
      ]
    }
  },
  {
    name: "C3≦ Clownpiece",
    img: "C3less than or equal to Clownpiece.png",
    tier: "B",
    opts: { dbf: true, e: true },
    explanation: {
      pros: [
        "Burn + Good Perma + Def Down II Abilities are very good",
        "Stupid AoE Damage Potential"
      ],
      mixed: [
        "Wants more Innate Def Down I to Capitalize on said debuffs",
        "So Many Evasion Debuffs and Crit Acc Up instead of being more useful"
      ],
      cons: [
        "Extremely Bad Killers",
        "Needs and Wants More Buffs and Support"
      ],
      nitpick: [
        "8-Head"
      ],
      extra: [
        "@@@",
        "Unironically this unit is god tier at 5sp. Pop her skill 1, switch to cs2, win. This is just tiering her the same as everyone else but really this unit can be a lot higher with that technicality. "
      ]
    }
  },
  {
    name: "Cb3# Youmu",
    img: "cb3 youmu.png",
    tier: "B",
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "One of the best killer in the game and l0g level damage on a last word with proper play.",
        "Good support, letting her be both a supportive unit and a nuker"
      ],
      mixed: [
        "Unlike the other full st spell unit, her aoe anoms are just limited to skill, which automatically forces trios (unlike cz1)",
        "Lacking on important buffs she wants to have for a pure supportive role (accuracy)"
      ],
      cons: [
        "Back to the lack of an aoe spell, she has the exact same flaws that cz1 had without any of the additional utility that cz1 abused (burn + def down) to make up for that, trading it for damage"
      ],
      extra: [
        "She is basically just Cz1 that trades in all the utility for... more damage... which Cz1 wasn't lacking in to begin with"
      ]
    }
  },
  {
    name: "L10.1 Marisa",
    img: "idol_marisa.jpg",
    tier: "B",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Great buffs to self and party ",
        "When biased, damage is quite useful and consistent if barely just enough"
      ],
      mixed: [
        "Breaking ability is very questionable ",
        "Nuking ability is high but very hard to obtain",
        "Killers are very restrictive "
      ],
      cons: [
        "Poor accuracy placement",
        "Lacks defense down and Damage to effective weighted"
      ]
    }
  },
  {
    name: "L10.1 Youmu",
    img: "l10.1 Youmu.png",
    tier: "B",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Decent Effects + Cards",
        "High Damage Potential"
      ],
      boons: [
        "Self 2 Bind Cleanse on LW-Pre Eff"
      ],
      mixed: [
        "Rather Mid ability to restore on buff cleanse",
        "Acc is tied to long CD skill and is 2t"
      ],
      cons: [
        "Dmg to Eff Issues",
        "Unimpressive Killers",
        "Extremely Bad AoE"
      ],
      nitpick: [
        "That fucking sound effect that i HATE",
        "Bad Gimmick"
      ],
      extra: [
        "Overall she is extremely bottlenecked by killer, no utility to speak of to make it worth it either."
      ]
    }
  },
  {
    name: "F1 Reimu",
    img: "f1 reimu.png",
    tier: "B",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "High Damage Potential on Last Word and Solo-Targeting Spellcard with Amazing Killer Range",
        "Amazing Yin Debuff Potential, allows her to act as a debuff unit that lets her go through almost all Yin Def Up Buffs (Up to -9 Def Down)",
        "Great Self-Buffs, with Amazing Card Options to complement her Support Even More"
      ],
      mixed: [
        "Inconsistent Damage due to High Crit Variance and being Restricted to Sun-Weak Enemies",
        "While she does have trouble setting up her Dual Scaling, she isn't very reliant on it for damage"
      ],
      cons: [
        "Skill Paralyze is Solo-Inflict and she has overall Poor Breaking. ",
        "AoE Damage tends to die quickly"
      ],
      nitpick: [
        "Very Card-Reliant for Proper Support",
        "Reimu only is made or broken by her"
      ],
      extra: [
        "@@"
      ]
    }
  },
  {
    name: "L80 Remilia",
    img: "l80 remi.png",
    tier: "B",
    opts: { atk: true, r: true },
    explanation: {
      pros: [
        "Great Damage to Eff & Res, High Damaging AoE Spellcard and Last Word (on killer and thanks to rein)",
        "Decent Party Support & Debuffs, can abuse Prae Card",
        "Some useful utility that is niche but extremely rare (looking at you aoe spell)"
      ],
      cons: [
        "Long Skill Cooldowns & Middling Self Setup make her especially susceptable to buff cleanse",
        "Poor Killers"
      ],
      mixed: [
        "Very Mixed Elements, Aside from Last Word"
      ]
    }
  },
  {
    name: "L80 Sakuya",
    img: "l80 sakuya.png",
    tier: "B",
    opts: { dbf: true, r: true },
    explanation: {
      pros: [
        "Great killers on p0 of all attacks",
        "Decent Debuffs and Utility",
        "Very story card friendly "
      ],
      cons: [
        "No AoE Anomaly Breaks, applies unbreakable AoE anoms inline. Can't break the anomalies she reflects either.",
        "Struggles in Yang Atk, Support, Buff Sustainability. Carried by Atk Anoms but needs significant support.. (@)"
      ],
      mixed: [
        "While her Damage Isn't Bad (Killers, Rein + Bis and Debuffs) it isn't exactly good either."
      ]
    }
  },
  {
    name: "L80 Kaguya",
    img: "l80 kaguya.jpg",
    tier: "B",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "Moon Weakness Inflict is an obviously amazing ability that can trivialize any gauge with a decent pairing."
      ],
      cons: [
        "Skill Distribution disagrees with itself, making it difficult to save skills in any particular way to make her usable across more than just Gauge 3",
        "Damage is Cosmetic at best, even when hitting eff + killer (she has wide killers) AND having a 50% light -3 def down card it is just very low. AoE damage is worthless with late breaks"
      ],
      mixed: [
        "Lacking any kind of substantial buff/debuff with any quantifiable use, aside from perhaps 2 def down on skill. Though not 0."
      ],
      extra: [
        "Eirin x Kaguya is the best ship in Touhou DO NOT @ ME",
        "Solo clears 4 ele ex"
      ]
    }
  },
  {
    name: "L80 Meiling",
    img: "meimei.jpg",
    tier: "B",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "Good Support and Utility throughout her Kit",
        "AoE Spellcard has High Damage (complemented by Early Breaks)"
      ],
      cons: [
        "Held back by very Subpar Killers and Extremely Disjointed Elements and Bullet TYPES (Plural!)",
        "Almost Completely lacks Buffs for her Dual Scaling which makes up a lot of her Damage"
      ],
      mixed: [
        "Needs to Graze Buffing Anomalies for Accuracy on her AoE"
      ]
    }
  },
  {
    name: "L80 Patchouli",
    img: "l80 patchy.png",
    tier: "B",
    opts: { def: true, r: true },
    explanation: {
      pros: [
        "Party Double Damage on Last Skill highly valuable and well-complemented by barrier restore"
      ],
      cons: [
        "Poor Elemental Spread limits use further",
        "Aside from her third skill, tends to lack party buffs and support overall throughout her kit"
      ],
      mixed: [
        "Absurd LW damage is tied to bad innate killers and lacking debuffs, thus making its actual use very limited"
      ],
      nitpick: [
        "Extremely Long Last Word"
      ],
      extra: [
        "Make Yuri Fanfic of your Enemies as Pregnant, Highest DMG In the Game (at the time) What did NN Mean by this?"
      ]
    }
  },
  {
    name: "L80 Okina",
    img: "l80 okina.png",
    tier: "B",
    opts: { heal: true, r: true },
    explanation: {
      pros: [
        "Overall good Utility and Support"
      ],
      cons: [
        "Last Word Damage gutted due to lacking Debuffs, Breaks or Good Killers or Scaling",
        "Unfocused, Rainbow Elements",
        "Her Buff is only 15% more dmg. It kinda sucks considering modern units throw around 50% and 100% and she has 15"
      ],
      mixed: [
        "Needy for Crit Atk, P & Buffs",
        "Great AoE Spellcard Nuke is tied to Relatively Meager Killers"
      ]
    }
  },
  {
    name: "L80 Junko",
    img: "l80 junko.png",
    tier: "B",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "Fully Neutral Last Word with Wide Killer Range means she can nuke anyone she isn’t nerfed against****** (In theory)",
        "Amazing Anomaly Breaks, Best Pure Breaker in the Game. Good overall Utility"
      ],
      cons: [
        "Poor AoE Spellcard Damage",
        "Mixed Elemental Breaks and Damage type",
        "Lacking in party buffs and crit atk",
        "Due to having to balance so many buffs, damage tends to be extremely polarizing in practice."
      ],
      boons: [
        "AoE SC has good overflow"
      ],
      nitpick: [
        "Only Accuracy Gain is from AoE Spellcard",
        "Very Useless Gimmick",
        "Misses Para Pres p0"
      ],
      extra: [
        "Functions similar to Expiece in practice. Amazing util as a breaker and while her killers are wide she is very much a buff sink and will require heavy effort to get use out of (mostlly only afforded in 120s.) If you can set up that nuke though, and she hits killers, that no ele dmg is no joke."
      ]
    }
  },
  {
    name: "L80 Satori",
    img: "l80 satori.png",
    tier: "B",
    opts: { dest: true, r: true },
    explanation: {
      pros: [
        "Good Damage Potential on Last Word",
        "Great Breaks All Around"
      ],
      cons: [
        "Spells are extremely midling, AOE spell has a tough time setting up due to being yin ",
        "Relatively meager self buffing ability (has almost no Agi Buffs) and debuffing ability for modern stages, requires mima treatment"
      ],
      mixed: [
        "Somewhat Middling Support"
      ],
      nitpick: [
        "Impossible to consistency check with "
      ],
      extra: [
        "@"
      ]
    }
  },
  {
    name: "L80 Marisa",
    img: "l80 marisa.png",
    tier: "B",
    opts: { spd: true, r: true },
    explanation: {
      pros: [
        "High Util between Gauges thanks to Short & Useful Skills and Good Breaks (6 Early)",
        "Last Gauge Nuking is Decent thanks to Ample Innate Def Down"
      ],
      cons: [
        "Notably Lacks AoE Spellcard Damage. Never use it for damage, ever.",
        "Buffs and Support between Gauges is notably below average for her tier. Really isn't the amazing support she once was."
      ],
      extra: [
        "@ instead lmao",
        "Just use mugetsu usually, mvmors is less reliable as your other unit needs to be able to break themselves. and if you can use sanmu you always will.",
        "NOTABLE PAIRINGS (Not included in tiering): Same as Mugetsu but worse. Yang/Burn is possibly the most neutered archetype in the game."
      ]
    }
  },
  {
    name: "A6& Rumia",
    img: "a6& rumia.png",
    tier: "B",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "High Utility Unit with Great Card Options and Spammable Party Support",
        "Good Breaking Ability"
      ],
      cons: [
        "Entirely Mono-Moon, or has No-Element Lines on Spellcard",
        "Low Spellcard Damage"
      ],
      mixed: [
        "High Last Word Damage tied to Poor Killers and Low Innate Crit Acc"
      ],
      extra: [
        "Stop trying to use this unit like Mima. She is not Mima. She is more similar to Lr Flandre if anything. EX Sakuya is Mima."
      ]
    }
  },
  {
    name: "A6& Koakuma",
    img: "a6& koa.png",
    tier: "B",
    opts: { supp: true, ex: true },
    explanation: {
      pros: [
        "Human Youkai Killers + Good Dmg",
        "Fast Self Setup, great for buff cleanse"
      ],
      cons: [
        "Acc Issues"
      ],
      boons: [
        "Surprisingly decent Spellcard Damage sometimes."
      ],
      mixed: [
        "Poor support compared to other support options. While her SC effs are fine, her Skills are super ass",
        "3 Bullet types on her LW SAVED BY HIHWAM...and ikagura",
        "P Refund kinda sucks"
      ],
      nitpick: [
        "Weird Face",
        "Self cd reduce...exfes moment",
        "Her Skill 2 does crit eva down when she already does crit acc up instead of doing anything useful like WHAT"
      ],
      extra: [
        "Holy @@@@@@@@@"
      ]
    }
  },
  {
    name: "A8& Tewi",
    img: "a8& tewi.png",
    tier: "B",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Extreme damage to res is always appreciated "
      ],
      cons: [
        "Downright bad party buffs",
        "Below average utility in general",
        "Ultimately, she is an elemental soup. And since her damage isn't high enough at base without a great deal of help to make things work out with her damage to res, her damage will run into issue. She wants to be used in an earth stage in geng memes, but no promises."
      ],
      mixed: [
        "Her own personal buffing isn't ideal, but not bad"
      ]
    }
  },
  {
    name: "A9& Medicine",
    img: "a9& medicine.png",
    tier: "B",
    opts: { dbf: true, ex: true },
    explanation: {
      pros: [
        "Yin Def II Debuff + Uses -3 Def Card + Burn = Good Debuffs",
        "Breaking is Decent"
      ],
      cons: [
        "Mixed Bullet Type LW",
        "Lacks Yin Atk Buffs to an atrocious degree",
        "Poor Killers",
        "Passive 1 Works Against Her (She can't break her own poison)"
      ],
      mixed: [
        "Atk Debuffs are worse than useless",
        "Essentially Mono Wood",
        "Self Buffs aren’t Bad but aren’t good",
        "Lacks Yin Def Down outside of AoE"
      ]
    }
  },
  {
    name: "A13& Futo",
    img: "a13& futo.png",
    tier: "B",
    opts: { heal: true, ex: true },
    explanation: {
      pros: [
        "Great Barr Support Skill, Infinite Barriers for 3 Turns"
      ],
      cons: [
        "Breaks Lag Behind"
      ],
      boons: [
        "Has Fairy Killer"
      ],
      mixed: [
        "Really wants more Buffs Overall",
        "Killers and Damage are overall so-so. Saved by high dmg to res. (AoE p0 killers are bald)"
      ],
      nitpick: [
        "No Burn Break on LW",
        "Acc on Boost is SELF"
      ]
    }
  },
  {
    name: "A16& Mai",
    img: "a16& smai.png",
    tier: "B",
    opts: { tec: true, ex: true },
    explanation: {
      pros: [
        "7 Breaks is probably her best use",
        "Overall Decent Buffs throughout her Kit"
      ],
      cons: [
        "Lacks Good Killers"
      ],
      mixed: [
        "Largely Saddled by Self Buffs & Crit Acc buffs instead of being more useful. Bring someone who has lots of Barr Restore"
      ]
    }
  },
  {
    name: "A17& Flandre",
    img: "a17& flan.png",
    tier: "B",
    opts: { heal: true, ex: true },
    explanation: {
      pros: [
        "Buffing & Breaking are good enough to be a strength",
        "Damage is extremely good on killer, notably capable of AoE Spell nuking"
      ],
      cons: [
        "Dual Scaling Issues (in other words, she is so unrealistic for her strengths it is considered a flaw)",
        "Extremely Selfish",
        "Unimpressive Killer Range"
      ],
      mixed: [
        "Despite her role, at last gauge she is like...not as good as every other gauge (save skills and @!)",
        "Notable; she has shown issues with damage to effective scaling in the past"
      ],
      nitpick: [
        "Not in WBaWC"
      ]
    }
  },
  {
    name: "A17.5& Yuuma",
    img: "a17.5& yuuma.png",
    tier: "B",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Good Last Word Damage, NLM lines are very easy to reach thanks to Party Crit Acc II (a large part of her use)"
      ],
      cons: [
        "Lacks Utility outside of 6 AoE Breaks (though she is going last), lacks Debuffs"
      ],
      boons: [
        "Absorbing P against All Anomalies lets her not be immediately shafted in any stage",
        "Immortal vs. Devils (lol)"
      ],
      mixed: [
        "AoE Killers are very Subpar (the Crit Acc II doesn't save it, at least not in a way that's deemed consistent enough for us right now based on calcs. Though this can be revisited and checked in practice.) Given her Agi, her AoE nuke should be her biggest role but until further experimentation it doesn't seem consistent enough to raise. Though again this can be revisited.",
        "Generally needs more buffs and support throughout her kit"
      ],
      extra: [
        "That's her 1st passive so she unlocks it at level 1 -> Immortal in vs l1 koa/E9 Remi. solos E9 Remi."
      ]
    }
  },
  {
    name: "A18& Misumaru",
    img: "a18& misumaru.png",
    tier: "B",
    opts: { dbf: true, ex: true },
    explanation: {
      pros: [
        "Good Debuffing across Both Yin and Yang like B3 Eiki, usable on two gauges kinda like A12 Kogasa"
      ],
      cons: [
        "Lacks useful/tangible Offensive Buffs or Util outside of Debuffing "
      ],
      boons: [
        "Has guaranteed Stun on her AoE"
      ],
      mixed: [
        "Somewhat Subpar killers hold back her LW Damage"
      ]
    }
  },
  {
    name: "F1.-5 Marisa",
    img: "d8.-5 marisa.png",
    tier: "B",
    opts: { atk: true, b: true },
    explanation: {
      pros: [
        "Buffs/Self Sustain/Support are Decent",
        "Anomaly Breaking is quite Good"
      ],
      cons: [
        "Mono Star or No Ele",
        "Lacks Good Killers"
      ],
      mixed: [
        "Not only is her Gimmick extremely mid, it's also potentially comp harmful"
      ],
      extra: [
        "Even without good killers her damage is on par with L80 Sakuya, just to show how mid the latter's damage is nowadays (or how easy content reqs can be at times)"
      ]
    }
  },
  {
    name: "B3 Raiko",
    img: "b5 raiko.png",
    tier: "B",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Breaking is Good",
        "Buffs are Decent"
      ],
      cons: [
        "Poor Killers & Low Damage"
      ],
      boons: [
        "Sure-Hit on AoE break lines"
      ]
    }
  },
  {
    name: "B3 Toyohime",
    img: "b3 toyohime.png",
    tier: "B",
    opts: { heal: true, u: true },
    explanation: {
      pros: [
        "Decent Support",
        "Self Sufficient in Yang"
      ],
      cons: [
        "Poor AoE Breaks"
      ],
      mixed: [
        "Could Use more Debuffs, however has access to Beach Shansoku Geidontei",
        "Decently High Damage Potential, but mostly locked behind hitting her more middling killers as well"
      ],
      nitpick: [
        "Yang Hard Scaler with Relatively Tiny Yang Def Stat"
      ]
    }
  },
  {
    name: "B3 Sagume",
    img: "b3 sagume.png",
    tier: "B",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "High Potential Last Word Damage, Decent AoE Spellcard Damage Potential",
        "Decent Overall Support"
      ],
      cons: [
        "Has Difficulties Setting up her Dual Scaling Alone",
        "RNG Unbreakable Blind Inflict can be Very Annoying"
      ],
      mixed: [
        "Somewhat Soupy Breaks",
        "Somewhat Middling and Unfocused Support compared to other Support Options"
      ]
    }
  },
  {
    name: "Lr Kokoro",
    img: "kokoro.jpg",
    tier: "B",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Good Party Yin & Crit Support & Setup",
        "Decent Utility & Sustainability",
        "Average Killers but High Crit Accuracy"
      ],
      cons: [
        "Needs some Agi Support",
        "Despite her above average buffs, she needs a jumpstart to get going usually. Which is a major issue."
      ],
      mixed: [
        "Self Sustainable with Accuracy but Inline-Based",
        "Somewhat soupy, but decent anomaly breaks"
      ],
      extra: [
        "\"Can you solo star ex 8p? that's what i thought.\" < done by mo"
      ]
    }
  },
  {
    name: "Lr Flandre",
    img: "Nishita flan.jpg",
    tier: "B",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "High-Solid buff counts of all major stats, Good Dest Support",
        "Good Anomaly Breaks",
        "Versatile Yin Debuff on skill"
      ],
      cons: [
        "While she has solid damage potential, she faces so much Killer Bottleneck"
      ],
      mixed: [
        "Soup-y Elements"
      ],
      nitpick: [
        "LW Stun is only 90%"
      ],
      extra: [
        "Util Unit when Util...."
      ]
    }
  },
  {
    name: "E1 Flandre (Prae)",
    img: "e1 flan (prae).png",
    tier: "B",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Incredible Damage Potential on Last Word & ST Spellcard",
        "Extremely Fast & Self Sufficient Self Setup",
        "Decent AoE Breaking Ability"
      ],
      cons: [
        "Tends to Lack Utility outside of Breaking."
      ],
      mixed: [
        "Could use more innate Slice Scaling Support",
        "Low Innate Support Offset by Amazing Card Options",
        "AoE Damage tends to be Mediocre at Best and Can't reach 3p turn 1 without outside support"
      ],
      extra: [
        "It's literally prae"
      ]
    }
  },
  {
    name: "E1 Koakuma",
    img: "e1 koakuma.png",
    tier: "B",
    opts: { heal: true, u: true },
    explanation: {
      pros: [
        "Great Damage All Around",
        "Good Debuffing Ability"
      ],
      cons: [
        "Overall Lacks Support to be Useful, has to juggle way too many buffs to be even remotely consistent on top of lacking breaks and having relatively subpar util",
        "RNG Inflicts Freeze she doesn’t immediately break on AoE inlines",
        "Lacks AoE Anomaly Breaks on her Spellcard"
      ],
      boons: [
        "Good Overflow"
      ],
      mixed: [
        "Party Anom Cleanse may be Annoying"
      ],
      nitpick: [
        "No bis in modern day (yikes)"
      ],
      extra: [
        "@"
      ]
    }
  },
  {
    name: "H5 Letty",
    img: "h5 letty.png",
    tier: "B",
    opts: { def: true, u: true },
    explanation: {
      pros: [
        "Youkai Killer, Good LW Dmg",
        "Literally Infinite Barriers for the party lmao??",
        "Good Yang Buffs & Debuffs"
      ],
      cons: [
        "Spellcards aren't very impressive"
      ],
      mixed: [
        "Could use more crit buffs & p",
        "Random Crit Acc Buffs/Debuffs"
      ],
      nitpick: [
        "Sfes gated, her raw numbers are not high enough to be any higher. if you doubled said numbers shed be ss "
      ]
    }
  },
  {
    name: "T5 Byakuren",
    img: "t5 byakuren.png",
    tier: "B",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Stupid Damage Potential with Rebirth and BIS",
        "Good Utility throughout her Kit"
      ],
      cons: [
        "Needs many more Yang and Crit atk buffs to properly capitalize on her damage all while lacking Debuffs"
      ],
      mixed: [
        "High Damage is held back by Subpar Killers and reliance on Effective Damage",
        "AoE spell has low damage and breaks are slightly RNG"
      ]
    }
  },
  {
    name: "W1 Suika",
    img: "watermelon.jpg",
    tier: "B",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Great Support & Utility, guaranteed AoE Stun",
        "Good Yin and Crit buffs, Decently high Damage potential"
      ],
      cons: [
        "Doesn't buff Agi",
        "Has Acc Issues",
        "Reliant on Damage to Eff"
      ],
      mixed: [
        "Soupy, Mediocre Breaks",
        "Odd Killer Range but High Crit Accuracy. Leads to high damage variance though if not hitting p0 killers.",
        "She buffs Yin Def as a Slice Unit???"
      ],
      nitpick: [
        "While we dont hold it against her in her tiering she doesnt do anything to modern stages who spam a ton of effects (def up crit def up) so she feels very underpowered"
      ]
    }
  },
  {
    name: "W2 Kanako",
    img: "lolinako.jpg",
    tier: "B",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Great Support Everywhere, Particularly for Yang",
        "Solid Debuffs"
      ],
      cons: [
        "Below Mid Anomaly Breaks",
        "Lacks Good Killers. Damage sucks even if killers are hit.",
        "Last Word has 4 Elements"
      ],
      boons: [
        "Debuffs are on Sure-Hit Lines"
      ],
      mixed: [
        "Overly Tied to Wood"
      ]
    }
  },
  {
    name: "Z3 Satori",
    img: "z3 satori.png",
    tier: "B",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Good Damage Potential on Last Word and AoE with Great Slicing and Youkai Killers ",
        "Great Party Yin Support",
        "Damage to Res makes her much more Universal"
      ],
      cons: [
        "Somewhat Low Accuracy Gain, Low Accuracy Support",
        "Lacks Quick and has a low Agility Stat, giving her a noticeable Damage Ceiling and not allowing her to get her Party Buffs out Quickly "
      ],
      mixed: [
        "Rainbow Last Word (though alleviated by heavily weight on lines 1 and 6, and high dmg to res)",
        "AoE spell, even with its good killer, still kinda sucks for dmg"
      ],
      extra: [
        "@ (accuracy and buff problems from aoe)",
        "Her low agi stat is a benefit still, dont worry, you use her as a aoe spell and lw nuke"
      ]
    }
  },
  {
    name: "A6 Tenshi",
    img: "tenshi scar.jpg",
    tier: "B",
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "Great Last Word w/ Wide Killers and Debuff Access",
        "Notably Sufficient in Yin Def & Crit Atk Buffs, along with good P sustainability and having 3 AoE breaks."
      ],
      cons: [
        "AoE Spellcard suffers due to lacking Good Killers and being Earth instead of Metal like her Last Word. This also further hurts her breaks (also because her skill is solo inflict)",
        "Lacks Innate Yin Atk Buffs. Tends to have pretty lackluster innate support."
      ]
    }
  },
  {
    name: "A12 Kogasa",
    img: "A12 Kogasa.png",
    tier: "B",
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Very Competent Yin Def Down Debuffer",
        "Very Good Damage Potential on LW and AoE",
        "Decent Breaking",
        "Useful Across Multiple Gauges (Not limited to G3 like almost every other Dbf Unit)"
      ],
      cons: [
        "Lacks Atk Buffs"
      ],
      mixed: [
        "Decently High Damage held back by Restrictive Innate Killers (Albeit with Full Overlap)"
      ]
    }
  },
  {
    name: "L1a Keine",
    img: "L1a keine atk.png",
    tier: "B",
    opts: { atk: true, g: true },
    explanation: {
      pros: [
        "Very High Damage Output w/ Great killers across LW and AoE and Rebirth"
      ],
      cons: [
        "Completely and utterly reliant on cards. Innate support dies instantly without Praecard.",
        "No Anomaly Interactions Whatsoever, including lacking AoE anom breaks completely"
      ],
      boons: [
        "Has Party Acc (real)"
      ],
      extra: [
        "@"
      ]
    }
  },
  // start of C
  {
    name: "C8<< Kokoro",
    img: "C8lessthanlessthan Kokoro.png",
    tier: "C",
    opts: { tec: true, e: true },
    explanation: {
      pros: [
        "Behold the TRUE secret hidden gengetsu clone who is actually able to replace gengetsu*",
        "Actually good breaking ability. 7 aoe breaks with 1p Break (She's not Bp Remi but it's still decent)",
        "Decent Supportive Abilities"
      ],
      boons: [
        "The SURPERIOR Chunni Design. I'm sorry Koishi fans she just is."
      ],
      mixed: [
        "Killer Range isn't Bad but isn't Super Amazing"
      ],
      cons: [
        "Solo LW instantly kills her"
      ],
      extra: [
        "THE VILLAIN OF C TIER",
        "RED for Gengetsu for she is the true gengetsu powercreep",
        "she would be SS with an AOE Lw. Maybe low ex due to awful lw killer and awful lw pre effs. She is hilariously underseated due to her st lw. more than ex kosuzu is underseated due to needing gengetsu. In general theyll have the same buffing agi checks breaking etc. For usual play. HOWEVER, her aoe spell p0 is quite bad for what a st lw needs and she is noticeably worse than gengetsu for the nuking turn in duos giving her inconsistency. still, hilariously underseated. if our tierlist didnt hate st lws, shed be high A (aka, if we didnt anti bias her bc of st lw)"
      ]
    }
  },
  {
    name: "C3 Mystia",
    img: "C3 (perhaps) Mystia.png",
    tier: "C",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Useful Support & Buffs, Good Breaking Potential",
        "Both AoEs have Huge Damage Potential",
        "Dmg to Eff & Res"
      ],
      mixed: [
        "Party Acc Tied to Sk3"
      ],
      cons: [
        "Lacks Crit Atk or Yin Debuffs",
        "SC2 is Useless in Practice. Furthermore, her class conflicts with her intended combat role.",
        "Poor Killers",
        "Solo Last Word (Killing Myself)"
      ],
      nitpick: [
        "P issues"
      ],
      extra: [
        "(She would be S if she had an AoE LW)"
      ]
    }
  },
  {
    name: "C3 Remilia",
    img: "c3 remilia.png",
    tier: "C",
    opts: { def: true, e: true },
    explanation: {
      pros: [
        "High Damage Potential",
        "Great Breaking Capability"
      ],
      boons: [
        "Her stat distribution is very minmaxed"
      ],
      mixed: [
        "Killers are a Mixed Bag"
      ],
      cons: [
        "Lacking in Atk Self Setup or Support",
        "No Accuracy in her Kit",
        "Often times nerfed or lacks places for use in content"
      ],
      nitpick: [
        "Bis isn't a bis for no reason"
      ]
    }
  },
  {
    name: "C3 Wakasagihime",
    img: "C3 wakasagihime.png",
    tier: "C",
    opts: { heal: true, e: true },
    explanation: {
      pros: [
        "Decent Yang Debuffing thanks to Rank II on LW Stacking well with innate Rank I's + Scales Well with Cards",
        "High Acc Buffs + 2 Unbinds + Barrier Restore + 2 Party Yang Atk II are the majority of her use outside debuffing"
      ],
      boons: [],
      mixed: [
        "AoE and LW Damage can be Surprisingly Practical, but it is mostly held back due to low innate Yang Atk buffs and poor Killers + Dmg to Eff Issues",
        "Does not have enough of anything in her kit to have a proper niche besides maybe Debuffing, see below for more info"
      ],
      cons: [
        "Being essentially Mono Water w/ poor innate Anomaly Breaks holds her back significantly"
      ],
      extra: [
        "Like Miyoi, makes me feel lesbian",
        "Ultimately unable to rise to B due to not committing to anything. Generally is lacking the atk buffs + Yang debuffs to properly go up. Wants more scaling to do proper damage. Wants more breaking (and a bit more P) to properly have util. She is simply mid-grades across the board and lacks swimsuit content to compensate"
      ]
    }
  },
  {
    name: "C3< Aya",
    img: "autumn aya.png",
    tier: "C",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Great scaling and damage potential on lw",
        "Niche debuffing but can be useful (unlike some units)"
      ],
      boons: [
        "Dmg to Res unit!!"
      ],
      mixed: [
        "Her Gimmick is Niche"
      ],
      cons: [
        "What is that killer (its like gengetsu and mugetsu not that its particularly bad or useless)",
        "Awful breaking and utility"
      ],
      nitpick: [
        "WHAT ARE THOSE \"BUFFS\" LMAOOOOOO"
      ],
      extra: [
        "@"
      ]
    }
  },
  {
    name: "C3~ Tsukasa",
    img: "c3~ tsukasa.png",
    tier: "C",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Last gauge nuking is quite practical due to high amount of buff cheesing, complimented by ikagura"
      ],
      mixed: [
        "Role as spam breaker is present, but she doesn't have p to make use of it as a proper strength",
        "high damage to res is present but it's not high enough to be a consistent nuke there"
      ],
      cons: [
        "bad killer further ruining preformance",
        "bad support especially between gauges due to few saveable skills and bad aoe pre eff"
      ],
      extra: [
        "this unit is such a cluster fuck of design, and the exact reason why i hate modern nn, because they will think 300% slice (and lower base damage than rednae) makes things justified enough to ensure everything she does isn't practical"
      ]
    }
  },
  {
    name: "C3 Kyouko",
    img: "C3 (perhaps) Kyouko.png",
    tier: "C",
    opts: { dest: true, e: true },
    explanation: {
      pros: [
        "Party 2 Crit II",
        "High Damage Potential, AoE can nuke"
      ],
      mixed: [
        "Buffs Could be Better"
      ],
      cons: [
        "Breaking Ability Lags Behind",
        "Befuddled by Dmg to Eff Issues and Poor Killers"
      ],
      nitpick: [
        "Nullify Anoms instead of literally anything useful"
      ],
      extra: [
        "@@@@"
      ]
    }
  },
  {
    name: "F1 Sanae",
    img: "f1 sanae.png",
    tier: "C",
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Stupid High LW Damage, Complemented by Ikaruga",
        "Great Yin Support"
      ],
      mixed: [
        "Skills are Difficult to use, especially with breaks. Party Acc is locked to her Gimmick Skill with long CD. P skill inflicts unbreakable anomalies unless you use her Last Word.",
        "RNG Anomaly Inflicts tend to be annoying for Consistency"
      ],
      cons: [
        "Only source of Acc and Party Acc is her Gimmick Skill",
        "Soupy Elements & Weird Inflicts - AoE Poison on Skill but only breaks Paralyze AoE. Therefore Breaks are Ass",
        "Lacks Spellcard Damage",
        "Lacking in own scaling support + Low Scaling Stats"
      ],
      nitpick: [
        "Where poison break on shot",
        "Extremely awful animations"
      ]
    }
  },
  {
    name: "L80 Shion",
    img: "l80 shion.png",
    tier: "C",
    opts: { dest: true, r: true },
    explanation: {
      pros: [
        "Great Breaking Ability",
        "Good AoE Spell Nuking Ability"
      ],
      boons: [
        "2nd Best Solo LW In the Game"
      ],
      mixed: [
        "Is Very Reliant on Cards for Support as her Innate Support is Not Good"
      ],
      cons: [
        "Generally lacks Utility outside Breaks",
        "Solo LW Immediately Culls Usefulness"
      ],
      extra: [
        "PRACTICALLY SPEAKING this character could be in high B low A. Her AoE nukes are very good (with overflow and good buffs) however because we anti-bias st-lws (for our own reasons, see FAQ) she is hard-capped at C. However in trio performance she can outperform even some A tiers"
      ]
    }
  },
  {
    name: "L80 Nitori",
    img: "l80 nitori.png",
    tier: "C",
    opts: { spd: true, r: true },
    explanation: {
      pros: [
        "Good T1 Support",
        "Good Damage Potential"
      ],
      cons: [
        "Mixed Yin/Yang hurts her in Practice",
        "Lacks Utility and Breaks and lacks Good Debuffs. 0 Acc in her Entire Kit",
        "Saddled by Poor Killers and Dmg to Eff Issues"
      ]
    }
  },
  {
    name: "L80 Koishi",
    img: "koosh.jpg",
    tier: "C",
    opts: { dbf: true, r: true },
    explanation: {
      pros: [
        "Solid Damage Potential on Last Word",
        "Solid Overall Support and Breaking"
      ],
      mixed: [
        "Middling Debuff Potential without Story Cards",
        "Trades scaling for extremely high Yin Atk stat. This kind of backfires into making her equal to someone with mid stats into both",
        "RNG"
      ],
      cons: [
        "Terrible Spellcard Damage",
        "In practice cant buff or debuff properly so just kinda does nothing if you dont babysit her"
      ]
    }
  },
  {
    name: "L80 Reisen",
    img: "Mv rei.jpg",
    tier: "C",
    opts: { atk: true, r: true },
    explanation: {
      pros: [
        "Ultra-Wide Killers on LW and ST Attack, High Damage Potential",
        "Good Party Yin Atk Sustainability"
      ],
      mixed: [
        "Disjointed Elements"
      ],
      cons: [
        "Lacks Utility",
        "Dual Scaling Issues",
        "Aoe Lacks Breaks or Competres Killers to Survive"
      ]
    }
  },
  {
    name: "L80 Youmu",
    img: "l80 youmu.png",
    tier: "C",
    opts: { supp: true, r: true },
    explanation: {
      pros: [
        "With Rank IIs, Anthology Buffs, Atk Anoms, Dmg to Eff and Res and Innate Debuffs, her Last Word is Actually Usable for Damage",
        "Decent Yang Support with the Rank II Addition"
      ],
      cons: [
        "Supportive Capabilities for Crit, Scaling, and Yin in any Substantive way is Subpar at Best",
        "AoE Spellcard has Poor Breaks, No Damage and No Support making her effectively Dead outside of her Skills and Last Word"
      ]
    }
  },
  {
    name: "L80 Byakuren",
    img: "l80 byakuren spd.png",
    tier: "C",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "Debuffs AND poison are a great combo",
        "Great killer, hyg+pp"
      ],
      mixed: [
        "Dmg to res unit yet still cant kill higher difficulty content on res (her dmg ceiling is unimpressive)",
        "No Atk Anoms"
      ],
      cons: [
        "AoE Spell is Ass",
        "ass buffs like actually 0 yang or crit in whole kit",
        "elemental & bullet type spread is awful",
        "30% dmg to res is quickly outpaced by other better rank ii buffs in this tier"
      ]
    }
  },
  {
    name: "L80 Kanako",
    img: "l80 kanako.png",
    tier: "C",
    opts: { tec: true, r: true },
    explanation: {
      pros: [
        "Decent Last Word Damage (Thanks to Rein and Debuffing)",
        "Great Self-Buffing Across Buff Removal, Good Party Support and Debuffs"
      ],
      mixed: [
        "That Evil RNG Stun on her ST"
      ],
      cons: [
        "Spellcard Damage Tends to be Ass",
        "Extremely Inconsistent Elements tend to limit her use severely"
      ],
      nitpick: [
        "Awful just abysmal spirit power economy"
      ]
    }
  },
  {
    name: "A7& Lily",
    img: "a7& lily.png",
    tier: "C",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Youkai Killer",
        "Acc Sufficient",
        "Her Effects are Decent"
      ],
      mixed: [
        "Killers Overlap with NLM Lines",
        "Essentially a Mono Sun Unit",
        "Needs a considerable amount of support"
      ],
      cons: [
        "Shit Breaks",
        "Shit Spellcard Dmg",
        "0 Anomaly Interactions on Ability"
      ],
      nitpick: [
        "Her Skill 3 has 1 self barr cleanse. Like why"
      ]
    }
  },
  {
    name: "A10& Minoriko",
    img: "a10& minoriko.png",
    tier: "C",
    opts: { tec: true, ex: true },
    explanation: {
      pros: [
        "Actually Competent Killer Set w/ bis makes her damage usable",
        "Good Debuffs & 3 Turns of Party Yin II, further capitalized on by good card access",
        "While needing p, her breaks are amazing"
      ],
      mixed: [
        "5 AoE Spellcards but no nuking spell",
        "Very Much a Buff Sink - Needs lots of support to give back to the party. Mostly in P and Acc",
        "Damage Output Tends to be Unreliable"
      ],
      cons: [
        "Only Breaks 1 Set of Anomalies at a Time. Breaking is NOT complemented by low speed and low P gain.",
        "Party Paralyze & Poison can & will be annoying",
        "Unreliable for Farming, very much a clear unit."
      ],
      nitpick: [
        "Only LW lines that matter are her lines 1 and 6 effectively; God Killer is secondary (why)"
      ],
      extra: [
        "Note that she isn't the type of unit that pairs with, say, Gengetsu. She isn't providing anything to the high tier characters who do everything. Rather acting as a battery for chars who kinda struggle in aspects. Personal damage is low on G3 though not bad for G2. Basically a util unit with chip dmg that isn't negligble with BIS. Very weird unit."
      ]
    }
  },
  {
    name: "A12.8& Daiyousei",
    img: "a12.3& dai.png",
    tier: "C",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Hilarious nuking ability thanks to dest gimmicks."
      ],
      mixed: [
        "In general outside of the crit ii and party agi her buffs are simply lacking",
        "Killers are decent but not particularly great (she is dest so she can get away with it but she needs crit acc support)",
        "Essentially Mono Moon while being dmg to eff"
      ],
      cons: [
        "Shit Breaks"
      ],
      extra: [
        "we are not raising this unit, everyone who wants this unit raised should really revaluate our standards at what exdai actually does in a comp. she is a worse version of c3 kyouko. plain and simple. enjoy your c3 cirno tho!!"
      ]
    }
  },
  {
    name: "A13& Tojiko",
    img: "a13& tojiko.png",
    tier: "C",
    opts: { spd: true, ex: true },
    explanation: {
      pros: [
        "Good Self Buffing & Enemy Debuffing",
        "Good Killers Wowie"
      ],
      mixed: [
        "Can't use her Crit Acc Buffs",
        "Essentially Mono Wood BUT remedied by dmg to res"
      ],
      cons: [
        "AoE is Completely Dead in the water, between lacking damage, support or breaks."
      ]
    }
  },
  {
    name: "A14.5& Sumireko",
    img: "a14.5& sumireko.png",
    tier: "C",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Has Aura",
        "Good Killers, Very good damage on lw solid damage elsewhere",
        "Good Self Sustainability + light but effective debuffing"
      ],
      boons: [
        "Good Stall Ability"
      ],
      mixed: [
        "Mixed Bullet Type LW, but high weight on p0 so it’s fine. (also runs 50% earth -2 yang def anyways)"
      ],
      cons: [
        "AoE tends to leave a lot to be desired",
        "Very Very Lackluster Support"
      ],
      nitpick: [
        "Can’t cycle her Yang Atk II"
      ],
      extra: [
        "NOT locked to dmg to eff like you might expect"
      ]
    }
  },
  {
    name: "A15A& Sanae",
    img: "a15a& sanae atk.png",
    tier: "C",
    opts: { tec: true, ex: true },
    explanation: {
      pros: [
        "Good Breaking Utility",
        "Overall Decent Support as Well"
      ],
      boons: [
        "INSANE Res Nuke on Killer"
      ],
      mixed: [
        "Very Low AoE SC Dmg Even On KIller"
      ],
      cons: [
        "Awful, Awful Killers, Hampering Usability Immediately"
      ],
      nitpick: [
        "Has some P Issues",
        "Lmfao Eva II (Again)"
      ]
    }
  },
  {
    name: "A16& Eternity",
    img: "a16& eternity.png",
    tier: "C",
    opts: { heal: true, ex: true },
    explanation: {
      pros: [
        "Good Yin Def Buffs, can Debuff",
        "Party Yin Atk II + Now has Real Scaling = Good Changes",
        "2 Unbinds Good when Necessary"
      ],
      mixed: [
        "Party Anom Cleanse can be Annoying",
        "Needs Yin & Crit Atk Support"
      ],
      cons: [
        "Between her soupy elements and low anom inflict her breaking ability suffers",
        "Bad Killers"
      ]
    }
  },
  {
    name: "A16& Aunn",
    img: "a16& aunn def.png",
    tier: "C",
    opts: { def: true, ex: true },
    explanation: {
      pros: [
        "Solid enough killer",
        "Support on paper is quite passable albeit split, no buffing yang units with party p no breaking while buffing yin. Still passable"
      ],
      mixed: [
        "Utility is too split to be effective",
        "Support is too split to be effective"
      ],
      cons: [
        "Set up is still bad as she is reliant on things she can not buff for her damage",
        "Versatility is greatly hindered by being fully mixed and unlike exkosuzu not having the benefits of both, just the weaknesses.*"
      ],
      nitpick: [
        "Keeps causing drama"
      ],
      extra: [
        "What does she do, she has like 6/10 in everything and 6/10 doesnt cut it",
        "* From earlier, Exkosuzu doesnt have this treatment as she buffs her attack, she will get the yin she needs in yang times and vise versa as well as has def down to help. Additionally, prae card makes her really good just in general as it perfectly buffs what exkosuzu wants besides crit.\nAunn meanwhile has none of that despite requiring it. Awesome design nn",
        "Here lies the 8th coming of hibis hopes and dreams, for this is the 8th unit they have been hyped for just to be utterly unusable"
      ]
    }
  },
  {
    name: "A19& Sanae",
    img: "a19& sanae dbf.png",
    tier: "C",
    opts: { dbf: true, ex: true },
    explanation: {
      pros: [
        "Youkai Killer",
        "Good Breaking Ability"
      ],
      mixed: [
        "Crit Def II Down will be hard to utilize, almost no point over Crit Atk II Up",
        "Debuffs Eva instead of buffing Acc"
      ],
      cons: [
        "Divided Bullet Type Last Word",
        "Next to no self buffs aside from Agi, Lacks P (She wants P as a breaker)",
        "Low Innate Yang Def Down"
      ]
    }
  },
  {
    name: "B3;6 Eirin",
    img: "b3;6 eirin.png",
    tier: "C",
    opts: { tec: true, b: true },
    explanation: {
      pros: [
        "Good Self Buffs"
      ],
      mixed: [
        "Lacks Yang Atk outside of Spells",
        "Mid Anomaly Breaks",
        "Devastatingly High LW and AoE Damage tied to Poor, Mismatched Killers and Reliance on Dmg to Eff"
      ],
      cons: [
        "Weirdly Selfish Buffs"
      ]
    }
  },
  {
    name: "D8.-5 Remilia",
    img: "d8.-5 remilia.png",
    tier: "C",
    opts: { tec: true, b: true },
    explanation: {
      pros: [
        "Amazing Breaking Ability, 7 Breaks between 2 Gauges"
      ],
      boons: [
        "Competent Solo LW thanks to Good Killers (Found Pres is nice for EBR)"
      ],
      cons: [
        "P issues limit use as a breaker",
        "Solo LW immediately hurts her practical use",
        "AoE Dmg is very sad"
      ]
    }
  },
  {
    name: "W2.-5 Suwako",
    img: "w1.-5 suwako.png",
    tier: "C",
    opts: { dbf: true, b: true },
    explanation: {
      pros: [
        "Overall Good Debuffing Abilities, usable between multiple gauges"
      ],
      mixed: [
        "Good Damage held back by Restrictive Killers"
      ],
      cons: [
        "Lacks Buffs"
      ],
      nitpick: [
        "Party SP Skill in the same skill as debuff skill"
      ],
      extra: [
        "A12 Kogasa, the 2nd verse. However she is worse in just about every aspect, making her a lot more inconsistent in practice than Kogasa."
      ]
    }
  },
  {
    name: "H5;7 Yuuka",
    img: "h5;7 yuuka.png",
    tier: "C",
    opts: { tec: true, b: true },
    explanation: {
      pros: [
        "Good Buffs across her Kit",
        "Good Damage across her kit with good killers complemented by 50% dmg to Res",
        "Good Breaking Ability"
      ],
      cons: [
        "Solo Last Word"
      ],
      nitpick: [
        "Lacks 3p"
      ],
      extra: [
        "---------- worst design in the entire game, ever",
        "Like C3 Mystia she would be S with an AoE LW"
      ]
    }
  },
  {
    name: "L25ws Yukari",
    img: "l25ws medikari.png",
    tier: "C",
    opts: { dbf: true, b: true },
    explanation: {
      pros: [
        "Decent Damage Output on her Last Word",
        "Decent Utility and Debuffing for her Tier"
      ],
      cons: [
        "AoE damage is dead",
        "Lacks Offensive Buffs, doesn't specialize in anything. Tends to be capped by numbers severely."
      ]
    }
  },
  {
    name: "B2 Junko",
    img: "b2 junko.png",
    tier: "C",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Extremely Wide Killer Range",
        "Neutral Damage means she can kill anyone she isn't nerfed against",
        "Can Break Any Anomaly",
        "Yin Atk unit = Praecard Abuser"
      ],
      mixed: [
        "She is entirely neutral (except for shots)"
      ],
      cons: [
        "Needs help in breaks and setting up and in P. Very hard to use in practice",
        "Low Spellcard Damage",
        "Her weird blind passive. This would normally be a / but this really causes more grief than good so it's here."
      ]
    }
  },
  {
    name: "B3 Seija",
    img: "W5 Seija.png",
    tier: "C",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Decent Buffs"
      ],
      mixed: [
        "Very Privy to High Damage Variance. Really wants outside support in Acc and Crit Acc",
        "Wants more buffs in general"
      ],
      cons: [
        "Generally Lacks Util or Debuffs",
        "Disjointed Elemental Spread"
      ],
      nitpick: [
        "Needs P Support"
      ],
      extra: [
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ (Good Gengetsu Synergy)"
      ]
    }
  },
  {
    name: "B5 Lunasa",
    img: "b5 lunasa.png",
    tier: "C",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Solid Self Sustainability and Support",
        "Decent Breaks"
      ],
      cons: [
        "Poor Killers",
        "Yang Atk Gain is after Spellcards Finish"
      ],
      extra: [
        "Good for Wood EX"
      ]
    }
  },
  {
    name: "B3 Ringo",
    img: "b3 ringo.png",
    tier: "C",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "High Damage Potential"
      ],
      mixed: [
        "Large Parts of her Kit being dedicated to Enemy Atk Down is useless at best"
      ],
      cons: [
        "Rng & Mediocre Breaks",
        "Party Paralyze can be Very Annoying",
        "Another dual scaling unit that can't set it up"
      ]
    }
  },
  {
    name: "B3 Yatsuhashi",
    img: "b3 yatsuhashi.png",
    tier: "C",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Useful Support in All Aspects"
      ],
      mixed: [
        "Unfocused, Rainbow Elements"
      ],
      cons: [
        "Poor Damage, Poor Killers"
      ]
    }
  },
  {
    name: "B3 Hecatia",
    img: "b3 hecatia.png",
    tier: "C",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Good Yin Support, Debuffs & Utility",
        "High Damage Potential"
      ],
      mixed: [
        "Middling Killers & Random Yang Lines Limit Use & Damage",
        "Optimizing Yin Support can be annoying"
      ],
      cons: [
        "Dual Scaling Issues, trash stat distribution",
        "Unfocused, Subpar Breaks",
        "Low Spellcard Damage"
      ]
    }
  },
  {
    name: "B3 Eiki",
    img: "b3 eiki.png",
    tier: "C",
    opts: { dbf: true, u: true },
    explanation: {
      pros: [
        "Exceptional Yin-Yang Debuffs. Able to get -10 Def down on both Turn 1 and more with Poison",
        "Decent Breaks"
      ],
      mixed: [
        "Acc on Boost is Self"
      ],
      cons: [
        "Lacks Damage and Buffs overall"
      ],
      extra: [
        "Best pure Rank I debuffer in the game."
      ]
    }
  },
  {
    name: "S5 Rin (Orin)",
    img: "s5 rin.png",
    tier: "C",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Good Party Support on Skills & Some Debuffing Now",
        "Good Breaking Capability"
      ],
      mixed: [
        "Party Burn can be Annoying"
      ],
      cons: [
        "Low Damage, Lacks Niches"
      ]
    }
  },
  {
    name: "B3 Reimu",
    img: "b3 reimu.png",
    tier: "C",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "High Damage Output on Last Word and Spellcards",
        "Decent Self Sustainability"
      ],
      mixed: [
        "No Killers on p0 of Last Word",
        "Needs Help with Dual Scaling"
      ],
      cons: [
        "Poor Breaks in Modern Era"
      ],
      extra: [
        "She gets Acc and Crit Atk in her rebirth."
      ]
    }
  },
  {
    name: "B5 Reisen",
    img: "b5 reisen.png",
    tier: "C",
    opts: { def: true, u: true },
    explanation: {
      pros: [
        "Great Party Yin Def Support",
        "Decently Self Sufficient",
        "High Damage Potential"
      ],
      boons: [
        "Great Tanking Utility, for what it's worth."
      ],
      mixed: [
        "AoE spell's high damage potential is tied to poop killers"
      ],
      cons: [
        "Inflicts Anomalies Post-Spellcard",
        "Lacks AoE Anomaly Breaks",
        "Needs Crit Atk, P and Yin Atk Support"
      ],
      extra: [
        "The original immortal. This unit was crazy back in the day"
      ]
    }
  },
  {
    name: "B5 Yuyuko",
    img: "b5 yuyuko.png",
    tier: "C",
    opts: { dbf: true, u: true },
    explanation: {
      pros: [
        "Idk her breaks and debuffs are ok",
        "P0 AoE Killers and her killer dmg is very good thanks to scaling and dmg to eff"
      ],
      mixed: [
        "Essentially Mono Wood"
      ],
      cons: [
        "0 sources of acc in her kit",
        "Killer bad L",
        "Half her kit is just useless, i WILL cry if they leave her like this"
      ],
      nitpick: [
        "Used the wrong theme smh"
      ]
    }
  },
  {
    name: "E1 Patchouli",
    img: "e1 patchouli.png",
    tier: "C",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Quite Good Last Word Damage",
        "Decent Self Sufficiency",
        "Support & Debuffs now Good"
      ],
      boons: [
        "One of the Strongest ST SC's in the game lol"
      ],
      mixed: [
        "AoE Spellcard Damage is just OK",
        "Support Lags Behind for Modern Standards"
      ],
      cons: [
        "Aside from Earth, very mixed elements",
        "Cannot Break the Anomalies she Inflicts on turn 1 without external supports. Can't break her skill inflict anom on AoE either.",
        "Relies on Cards for Crit Atk and Yang Def Down as she lacks those"
      ]
    }
  },
  {
    name: "E1 Sakuya",
    img: "e1 sakuya.png",
    tier: "C",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Very High Damage Potential with High Crit Accuracy & Decent Killers",
        "Self Sufficienct in Crit, Accuracy & P",
        "Breaking Ability now up to par (good)"
      ],
      mixed: [
        "Middling Self Setup in Yang Atk & Agility"
      ],
      cons: [
        "Low Support",
        "Sun locked"
      ],
      nitpick: [
        "Lost her incinerate & charge in recent Buffs"
      ]
    }
  },
  {
    name: "E1 Meiling",
    img: "e1 meiling.png",
    tier: "C",
    opts: { def: true, u: true },
    explanation: {
      pros: [
        "High Damage Output & Great Killers",
        "Good Yin & Tank Sustainability",
        "Has Real Debuffs"
      ],
      mixed: [
        "Below average support"
      ],
      cons: [
        "Weak Spellcard Damage",
        "Weak & RNG Breaks",
        "Poor Buff Removal Recovery"
      ],
      extra: [
        "Very similar to kannagi ngl"
      ]
    }
  },
  {
    name: "E9 Remilia",
    img: "e9 remilia.png",
    tier: "C",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Great Damage Output, Especially on Last Word, complemented by Damage to Res",
        "Decent Yin & Crit Support, Somewhat Self Sustainable"
      ],
      mixed: [
        "Could use more Yin Def Buffs, Needs Support in General"
      ],
      cons: [
        "Inflicts AoE Anomalies she doesn't break on AoE",
        "AoE Spellcard lacks breaks, lacks AoE Anomaly Breaks in general"
      ],
      nitpick: [
        "RNG Self Barr"
      ]
    }
  },
  {
    name: "H5 Mystia",
    img: "h5 mystia.png",
    tier: "C",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Good Nuke Potential",
        "Good Break Potential"
      ],
      mixed: [
        "Weird and Flawed Support & Self Setup, Carried by Cards",
        "Stun util is cucked by RNG"
      ],
      cons: [
        "Bad Killers",
        "NEGATIVE DMG TO RES??"
      ],
      extra: [
        "She got rebirth btw",
        "I have no idea what this unit is tyring to be"
      ]
    }
  },
  {
    name: "H5 Yuuka",
    img: "h5 yuuka.png",
    tier: "C",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Decent Damage Output, Decent Killer Range",
        "Decent Breaking Ability",
        "Decent Support"
      ],
      cons: [
        "Everything she offers is very replaceable and what she does do tends to be disappointing.",
        "Needs to graze offensive anomalies for accuracy."
      ],
      nitpick: [
        "Supposed to be a good breaker but often isn't."
      ]
    }
  },
  {
    name: "H5 Keine",
    img: "h5 keine.png",
    tier: "C",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Fantastic Yin & Crit Support Everywhere, Especially with the Fishing without a Net card",
        "Short Skill Cooldowns make for ease of use"
      ],
      cons: [
        "Unfocused Elements",
        "Bad Killers"
      ],
      nitpick: [
        "Recent \"Buffs\" hurt in practice (do not upgrade her skill 3)"
      ]
    }
  },
  {
    name: "Lr Tenshi",
    img: "lr tenshi.png",
    tier: "C",
    opts: { dbf: true, u: true },
    explanation: {
      pros: [
        "Decent Debuffing Ability, Mostly for Crit Def Down"
      ],
      mixed: [
        "Good Killer Range with Extremely Poor Damage Ceiling",
        "Debuff Placement in Skills are Difficult to Use"
      ],
      cons: [
        "Generally Lacks Support or Buffs"
      ]
    }
  },
  {
    name: "S2 Satori",
    img: "s2 satori.png",
    tier: "C",
    opts: { heal: true, u: true },
    explanation: {
      pros: [
        "Decently Wide Killers",
        "Ok Yin Atk Setup, Decent Debuffs",
        "Good Utility"
      ],
      mixed: [
        "Somewhat Selfish Attack Buffs",
        "Very Fire-Locked"
      ],
      cons: [
        "No AoE Anomaly Breaks",
        "Spellcards Lack Attack Buffs",
        "Low Damage. Needs Rebirth + 100% Buff Card to catch up to average. Still has low spellcard damage (Her scaling is totally fucked)"
      ],
      nitpick: [
        "Primarily scales off Yin Def with a relatively small Yin Def stat"
      ]
    }
  },
  {
    name: "S5 Koishi",
    img: "S5 Koishi.png",
    tier: "C",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Party Buffs are Good",
        "Good Killers",
        "Instantly breaks burn on both AoEs (good overflow)"
      ],
      boons: [
        "Fast AoE Anims",
        "Actually Competent ST LW"
      ],
      mixed: [
        "AoEs can do damage... but it's her secondary killers (not bad killers but not good!)",
        "Again very niche and essentially useless gimmick"
      ],
      cons: [
        "Deplorable Breaking",
        "Mixed Bullet Type LW",
        "ST LW"
      ],
      nitpick: [
        "Mid Ass Stats"
      ]
    }
  },
  {
    name: "T5 Tenshi",
    img: "t5 tenshi.png",
    tier: "C",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Very High Damage Potential on Last Word ",
        "Good Debuffs & Agility Support"
      ],
      mixed: [
        "RNG Barr Support"
      ],
      cons: [
        "Poor AoE Spellcard Damage",
        "Needs heavy Yang & Crit support",
        "Anomalies are Single Target",
        "Damage to eff means her \"crazy damage\" is often overblown to the point it could fail"
      ],
      extra: [
        "*Possbily the most overblown unit of all time, in a fire stage where she is unable to nuke all enemies (dmg to eff unit) she provides less than even some C tier units",
        "Solos 4 Ele EX"
      ]
    }
  },
  {
    name: "T5 Mokou",
    img: "t5 mokou.png",
    tier: "C",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Great Breaking Ability, fast breaks on 2 anomalies with up to 7 breaks, basically the third st lw gengetsu",
        "Good Supporting Ability"
      ],
      boons: [
        "Competent LW on killer"
      ],
      cons: [
        "Solo Last Word",
        "Bald Killers"
      ],
      extra: [
        "Because d8.-5 Remi was so good we needed a second one",
        "Also because c8<< Kokoro was so good we needed an sfes version of her"
      ]
    }
  },
  {
    name: "W3 Parsee",
    img: "w3 parsee.png",
    tier: "C",
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Respectable Killer Range",
        "Good Party Yin Support, Generally Self Sufficient"
      ],
      mixed: [
        "Could use more Crit Buffs"
      ],
      cons: [
        "Aside from her Last Word, only Breaks 1 Anomaly at a Time, particularly, her AoE breaks only Freeze",
        "AWFUL damage ceiling"
      ]
    }
  },
  {
    name: "W5 Kasen",
    img: "not kasen.jpg",
    tier: "C",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Spammable Buffs Across the Board",
        "Good Killers back up High Damage Output"
      ],
      mixed: [
        "Damage is Gutted by Reliance on Dmg to Eff and Late Debuffs"
      ],
      cons: [
        "Lacks Good Breaks or Util ",
        "Low Spellcard Damags"
      ],
      nitpick: [
        "Looks at me funny",
        "No BIS in Modern Day"
      ],
      extra: [
        "@@"
      ]
    }
  },
  {
    name: "Y5 Futo",
    img: "y5 futo.png",
    tier: "C",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Overall Good Self Sustainable Buffs (Also she can abuse Summer Monster)"
      ],
      mixed: [
        "Niche Damage - lacks good killers"
      ],
      cons: [
        "Almost All her Buffs are Selfish"
      ]
    }
  },
  {
    name: "Z3 Alice",
    img: "z3 alice.png",
    tier: "C",
    opts: { def: true, u: true },
    explanation: {
      pros: [
        "Amazing Last Word Nuke with Great Card Access for Debuffs"
      ],
      cons: [
        "Lacks Buffs throughout Gauges",
        "Not that it matters since her AoE Spellcard Damage sucks anyways",
        "Soupy and RNG Breaks"
      ],
      extra: [
        "Generally just a one-note nuker"
      ]
    }
  },
  {
    name: "Z3 Remilia",
    img: "mg remi.jpg",
    tier: "C",
    opts: { heal: true, u: true },
    explanation: {
      pros: [
        "Great LW Nuke with Good Cards",
        "Good Party Yin Support",
        "Good Debuffs & Utility"
      ],
      mixed: [
        "Somewhat Soupy Elements"
      ],
      cons: [
        "Low Spellcard Damage (Her ST SC looks good, but it just... isn't.",
        "Anomalies are Solo-Targeting, no AoE Anomaly Breaks outside of LW?",
        "Lacks Crit Atk"
      ],
      nitpick: [
        "Tediously Long Animations"
      ]
    }
  },
  {
    name: "A6 Reimu",
    img: "a6 reimu.png",
    tier: "C",
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "Decent Damage Output, Very High AoE Spellcard Damage",
        "Decent Self Sustainability"
      ],
      mixed: [
        "Bad p0 killer in Last Word"
      ],
      cons: [
        "Very Dated Breaks, Next to No Anomaly Interaction",
        "Middling Support"
      ],
      extra: [
        "Any character can do impressive things https://www.youtube.com/watch?v=Jnn-wgfBX3w&t=5s",
        "Probably the best 100 Luck farmer"
      ]
    }
  },
  {
    name: "A6 Koakuma",
    img: "a6 koakuma.png",
    tier: "C",
    opts: { supp: true, a: true },
    explanation: {
      pros: [
        "Great Yin and P Support for the Party"
      ],
      mixed: [
        "Good Damage tied to Bad Killers"
      ],
      cons: [
        "Lacks Breaks"
      ],
      nitpick: [
        "Extremely long animations"
      ],
      extra: [
        "Lowkey underrated? Her util/support is quite good in combo with cards and she's not completely useless damage-wise either."
      ]
    }
  },
  {
    name: "A6 Patchouli",
    img: "a6 patchouli.png",
    tier: "C",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Nice Damage Potential",
        "Decent AoE Spell",
        "Healthy amounts of Crit Acc"
      ],
      mixed: [
        "Support & Self Setup are very Card Reliant",
        "Dated Anomaly Breaks"
      ],
      cons: [
        "Very Mixed Elements",
        "Bad Killers"
      ],
      extra: [
        "EX tier in satisfying animations"
      ]
    }
  },
  {
    name: "A6 Flandre",
    img: "a6 flandre.png",
    tier: "C",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Good Dmg Potential on Killer",
        "Decent Skills & Setup, Useful Debuff Utility"
      ],
      mixed: [
        "Middling Breaks",
        "Essentially Star Locked",
        "Needs Yin Atk Support"
      ],
      cons: [
        "Bad Killers"
      ],
      extra: [
        "Praecard + 40% Dmg to eff goes crazy on her. If only I could combine her potent ability with her sisters' potent skills... oh well."
      ]
    }
  },
  {
    name: "A6 Sunny",
    img: "a6 sunny.png",
    tier: "C",
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Solid Skills for Debuffing and Support on Low Cooldowns",
        "Very Notable Stun Utility, Guaranteed on Last Word and ST SC"
      ],
      mixed: [
        "Decent though mildly dated breaks, nearly entirely mono-sun"
      ],
      cons: [
        "Low Damage"
      ],
      extra: [
        "Note: With more developed boxes and units with Bind Cleanse, Stun Utility can fall off."
      ]
    }
  },
  {
    name: "A6 Yukari",
    img: "a6 yukari.png",
    tier: "C",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Solid Damage Output",
        "Great Party Support and Setup, Especially in Agility"
      ],
      mixed: [
        "Middling Crit Debuffs - Large Room for Improvement"
      ],
      cons: [
        "Extremely Numbers Locked - Doesn't have enough anything to warrant a higher tier"
      ]
    }
  },
  {
    name: "A6 Yuyuko",
    img: "yuyu_scar.jpg",
    tier: "C",
    opts: { heal: true, a: true },
    explanation: {
      pros: [
        "Solid Damage Potential w/ Good Card Options",
        "Good Self Buffs"
      ],
      cons: [
        "Selfish Buffs & Needs Support",
        "Breaking Lags Behind",
        "Needs Crit Atk"
      ],
      extra: [
        "The funniest face on thlw"
      ]
    }
  },
  {
    name: "A6 Lunasa",
    img: "Lunasa scar.jpg",
    tier: "C",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Great Self Setup",
        "Good Damage Potential, great AoE",
        "Good Support, Especially in Crit Atk"
      ],
      mixed: [
        "Somewhat Soupy"
      ],
      cons: [
        "Multiple sources of RNG",
        "AoE is backloaded af with 0 p refund capability"
      ]
    }
  },
  {
    name: "A6 Merlin",
    img: "Merlin scar.jpg",
    tier: "C",
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "Decent Damage Potential on Decent Killers",
        "Solid Debuffs Everywhere"
      ],
      cons: [
        "Wants more Yang Atk and Scaling Buffs",
        "Inflicts unbreakable Paralyze on AoE",
        "Anomalies are Single Target",
        "Somewhat Selfish, Can't extend her Yang Atk Buffs"
      ],
      extra: [
        "She's like mini prae x kannagi"
      ]
    }
  },
  {
    name: "A7A Reimu",
    img: "a7a reimu.png",
    tier: "C",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Achievable damage leads to it being higher than expected for normal use",
        "Good Yang Self Setup & Support"
      ],
      mixed: [
        "Somewhat Soupy Breaks"
      ],
      cons: [
        "Needs Crit Atk",
        "Needs more debuffs",
        "Raw cap is certainly fes tier alright..lol"
      ],
      extra: [
        "Your baseline for a good fes"
      ]
    }
  },
  {
    name: "A7B Sakuya",
    img: "a7b sakuya.png",
    tier: "C",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Like Reimu, her Damage is achievable and Decent for Use",
        "Solid Yang & Crit Setup",
        "Overflow + Breaks give her decent Util"
      ],
      mixed: [
        "Somewhat Soupy"
      ],
      cons: [
        "Needs more Agility Buffs",
        "Very, Very Noticeable Damage Ceiling"
      ],
      extra: [
        "solos moon ex",
        "ALL HAIL OUR QUEEN OF OVERFLOW"
      ]
    }
  },
  {
    name: "A7 Chen",
    img: "a7 chen.png",
    tier: "C",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Decent Dmg Potential",
        "Decent Self Setup"
      ],
      boons: [
        "Can AoE SC Nuke"
      ],
      mixed: [
        "Unimpressive Killer Range"
      ],
      cons: [
        "ST Anom into RNG Anom... Wtf?",
        "Very Varied Elements outside of Mono Wood AoE SC"
      ],
      extra: [
        "Pcb Chonn (shes like a6 meiling where she was delayed for a year)"
      ]
    }
  },
  {
    name: "A7 Ran",
    img: "a7 ran.png",
    tier: "C",
    opts: { supp: true, a: true },
    explanation: {
      pros: [
        "Lots of Acc, Agi & P Support"
      ],
      boons: [
        "Her FS is very fast (useful in low dmg req speed purple farms like drop stage)"
      ],
      mixed: [
        "Not Particularly Ample in Yin Def or Atk, or Crit Atk support",
        "Pretty questionable Anom Interactions, but her Elemental Layout is solid"
      ],
      cons: [
        "Unimpressive Killers + Low Scalings = Really Bad Damage"
      ],
      extra: [
        "Most useful in Vs. L1 Eiki"
      ]
    }
  },
  {
    name: "A8 Star",
    img: "A7 Star.png",
    tier: "C",
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Good Yang Debuffing throughout her Kit, backed up slightly by AoE Res Def Down (only 1.1x damage though)",
        "Decent Breaking and Acc Support"
      ],
      boons: [
        "Freeze and Paralyze Immune"
      ],
      mixed: [
        "High AoE and LW Damage limited by Bad Killers"
      ],
      cons: [
        "Low Buffs limit her severely"
      ]
    }
  },
  {
    name: "A10.3 Ringo",
    img: "A10.3 Ringo.png",
    tier: "C",
    opts: { heal: true, a: true },
    explanation: {
      pros: [
        "Decent Anomaly Breaks (Albiet lacking the speed to use them)",
        "Decent Party Buffs/Util"
      ],
      mixed: [
        "Mono Moon",
        "No Party Barr or P thus can’t climb enough to reach B",
        "Killers are So So"
      ],
      cons: [
        "Lacks Crit Atk or Def Down"
      ]
    }
  },
  {
    name: "A13 Futo",
    img: "A13 Futo.png",
    tier: "C",
    opts: { heal: true, a: true },
    explanation: {
      pros: [
        "Boat",
        "Good Support Util & Debuffs",
        "Damage is Decent"
      ],
      mixed: [
        "Killers are usable but not that good. Has p0 AoE anti but is secondary LW"
      ],
      cons: [
        "Horrendous LW Distribution (Use normal dmg up)",
        "Inflicts Burn she doesn't Break"
      ],
      nitpick: [
        "Can't use Crit Acc Buffs"
      ]
    }
  },
  {
    name: "A14 Seija",
    img: "seija.jpg",
    tier: "C",
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Good Damage Potential w/ Great Killers",
        "Good Yang Debuffs Everywhere",
        "Decent Party Buffs & Support"
      ],
      mixed: [
        "Half of the stuff in her skills is useless"
      ],
      cons: [
        "Doesn't set up her own Yin Atk & Def",
        "No AoE Anomaly Breaks"
      ]
    }
  },
  {
    name: "A19 Ran",
    img: "A9 Ran.png",
    tier: "C",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Good Killer Range",
        "High AoE Damage Potential",
        "Decent Support"
      ],
      mixed: [
        "Needs Support Too",
        "2 Self Quicks are Weird"
      ],
      cons: [
        "Incapable of AoE Breaking",
        "Dual Scaling Issues",
        "Lacks Accuracy"
      ],
      nitpick: [
        "WHY IS THIS UNIT NOT DEF"
      ]
    }
  },
  {
    name: "L1 Ibaraki's Arm",
    img: "l1 arm.png",
    tier: "C",
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Great Crit Support, Additional (Inconsistent) Stun Utility",
        "Decently High Damage Output that's even better with Rebirth"
      ],
      mixed: [
        "Low Innate Yin Atk Gain"
      ],
      cons: [
        "Poor Elemental Breaks, Dated Anomaly Breaks",
        "Can't set up her dual scaling. Her dual scaling is also very low."
      ]
    }
  },
  // D tier
  {
    name: "C3 Shion",
    img: "shion.jpg",
    tier: "D",
    opts: { supp: true, e: true },
    explanation: {
      pros: [
        "Breaking is good"
      ],
      mixed: [
        "Buffs are like... ok but lags behind in comparison to every other supp unit",
        "She is like W2 Suwako where she is trying to be dbf and supp at the same time annd fails at both"
      ],
      cons: [
        "Not only are her killers shit but she has no killers p0 at all. Reliant on crit acc memes to do dmg. Her hard scaling isn't even good.",
        "Divided Bullet Types and ELements on her LW"
      ],
      extra: [
        "Aa! Damegami-sama!"
      ]
    }
  },
  {
    name: "C3 Flandre",
    img: "c3 flandre.png",
    tier: "D",
    opts: { dbf: true, e: true },
    explanation: {
      pros: [
        "Breaking Ability is quite good, has 7 aoe anom breaks."
      ],
      mixed: [
        "Unimpressive, very mixed Killers",
        "Self Setup and Debuffs are pretty underwhelming",
        "Quite a lot of RNG in her Kit, including only 80% Stun on LW",
        "Can't break the anomalies she reflects"
      ],
      cons: [
        "Her Yin Def II Down is ST for no reason",
        "Lacks Quick",
        "You either debuff or you break, no in between with this unit thanks to how her skills work. Kind of defeats her entire point"
      ]
    }
  },
  {
    name: "C3 Komachi",
    img: "c3 komatits.png",
    tier: "D",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "Self Setup is slightly more ok(?)"
      ],
      boons: [
        "Competent ST LW (On Swimsuit)"
      ],
      mixed: [
        "Gimmick is extremely niche"
      ],
      cons: [
        "ST LW? On an Efes? REALLY???",
        "Bad Killers (the sole unit they overlap is c3 youmu)",
        "Extremely Selfish Buffs"
      ],
      extra: [
        "Now capable of AoE anom breaks",
        "\"4+ Game\" with that LW cutin..."
      ]
    }
  },
  {
    name: "C3 Kokoro",
    img: "c3 kokoro.png",
    tier: "D",
    opts: { dbf: true, e: true },
    explanation: {
      pros: [
        "Does C3 Hecatia's Job but Better (She debuffs good)",
        "Breaks are decent"
      ],
      mixed: [
        "Kit is filled with lots of useless garbage (atk debuffs)"
      ],
      cons: [
        "No damage to speak of. Bad killers and abysmal scaling.",
        "Lacks Support or Util"
      ]
    }
  },
  {
    name: "C3 Hecatia",
    img: "c3 hecatia.png",
    tier: "D",
    opts: { dbf: true, e: true },
    explanation: {
      pros: [
        "Decently High Debuffs in All Aspects"
      ],
      mixed: [
        "Recent Yang Def II Debuff \"Buff\" Mostly Hurts in Practice (Good for EB though)"
      ],
      cons: [
        "Poor Killer Range",
        "Lacking in Offensive Self Setup or Support"
      ],
      extra: [
        "Temporarily carried by Swimsuit Killer stages."
      ]
    }
  },
  {
    name: "C3< Alice",
    img: "autumn alice.png",
    tier: "D",
    opts: { heal: true, e: true },
    explanation: {
      pros: [
        "Actually helpful utility"
      ],
      mixed: [
        "Lacking in ways to extend utility",
        "Yin def II down is hard to use (is a heal type btw)"
      ],
      cons: [
        "What is that killer lmfao",
        "Can't Set Up Dual Scaling",
        "Requires killer for damage",
        "Breaks are Worse than half of D tier"
      ]
    }
  },
  {
    name: "C3∫ Sagume",
    img: "C3integral sagume.png",
    tier: "D",
    opts: { heal: true, e: true },
    explanation: {
      pros: [
        "Competent Damage Output w/ Good Killers; AoE SC can nuke"
      ],
      mixed: [
        "While she has 6 AoE Anom Breaks, said breaks are late",
        "While her Self Buffing is Decent, her Support is Garbage"
      ],
      cons: [
        "Lacks Crit Atk or Acc",
        "Solo LW, without even 4 AoE spellcards, immediately renders her dead in the water"
      ],
      nitpick: [
        "i hate ebr shill i hate ebr shill i hate ebr shill i hate ebr shill i hate ebr shill i hate ebr shill",
        "I don't like her sneakers"
      ],
      extra: [
        "LAST TESTED: Dec 2025"
      ]
    }
  },
  {
    name: "C8<< Koishi",
    img: "C8lessthanlessthan Koishi.png",
    tier: "D",
    opts: { spd: true, e: true },
    explanation: {
      pros: [
        "Decent Supporting Ability"
      ],
      boons: [
        "New best Solo LW in the game"
      ],
      mixed: [
        "Misses out on Breaks/AoE Damage if she wants to maximize Support due to the nature of her kit design",
        "Disjointed Elemental Spread"
      ],
      cons: [
        "In general, lacks Agi I or II buffs",
        "Extremely Bad Killers and Solo LW immediately culls usability"
      ],
      extra: [
        "LAST TESTED: Jan 2026"
      ]
    }
  },
  {
    name: "C3≥ Hina",
    img: "mech hina.png",
    tier: "D",
    opts: { atk: true, e: true },
    explanation: {
      pros: [
        "4 Breaks are decent for her tier ig"
      ],
      mixed: [
        "Niche Damage - Can nuke but on subpar Killers"
      ],
      cons: [
        "Very selfish buffs overall",
        "Solo LW."
      ],
      extra: [
        "Go watch gurrenn lagann it’s a great anime"
      ]
    }
  },
  {
    name: "L80 Flandre",
    img: "l80 flandre.png",
    tier: "D",
    opts: { def: true, r: true },
    explanation: {
      pros: [
        "Decent Self Setup with Def Down on Last Word"
      ],
      mixed: [
        "Could use some Yin Atk Support",
        "Nearly Entirely Mono Star, while the rest of her elements are mixed"
      ],
      cons: [
        "Low Damage due to Bad Killers (Why are her gensokyo killers on her AoE instead of her Last Word)"
      ],
      nitpick: [
        "Is a Def unit"
      ],
      extra: [
        "she's (not) alright"
      ]
    }
  },
  {
    name: "L80 Alice",
    img: "l80 alice.png",
    tier: "D",
    opts: { atk: true, r: true },
    explanation: {
      pros: [
        "Rank IIs, Innate Debuffs, Atk Anoms, Dmg to Eff and Res and Good Innate Killers make her Last Word Actually Usable"
      ],
      mixed: [
        "AoE Spellcard Damage is restricted to Horrendous Killer",
        "Utility isn't Great outside of Party P and Minor Barrier Support"
      ],
      cons: [
        "Has no ability to AoE Break Whatsoever",
        "Even with her Recent Buffs she has a hard time keeping up with Buffing her Scalings and Yin Attack for herself, let alone for Support"
      ],
      extra: [
        "Shes an EBR yin hard buffer now"
      ]
    }
  },
  {
    name: "L80 Suwako",
    img: "mv suwa.jpg",
    tier: "D",
    opts: { supp: true, r: true },
    explanation: {
      pros: [
        "Decent Damage Potential",
        "Decent Breaks"
      ],
      mixed: [
        "Somewhat Middling Support"
      ],
      cons: [
        "Unimpressive Killer Range",
        "No Acc Sources outside of Acc II"
      ]
    }
  },
  {
    name: "L80 Parsee",
    img: "l80 parsee.png",
    tier: "D",
    opts: { dbf: true, r: true },
    explanation: {
      pros: [
        "Has Crit Def Down in Droves",
        "Has Youkai Killer on her LW"
      ],
      cons: [
        "Though she technically has 7 breaks those breaks are only really there on both inflict skills. You either use both to fb 1 gauge and then insta die for g2 or you are lukewarm on both gauges.",
        "Terrible Spellcard Killers",
        "Completely lacks Yin Def Down (Outside of Anthology Card) and Most Buffs"
      ],
      extra: [
        "*This character dedicates her entire kit to Crit Def Down which is ultimately less useful than most other buffs/debuffs"
      ]
    }
  },
  {
    name: "L80 Mokou",
    img: "l80 mokou.png",
    tier: "D",
    opts: { heal: true, r: true },
    explanation: {
      pros: [
        "Good Party Support, Especially for Yang",
        "Good Debuffs",
        "Unbinds useful when needed"
      ],
      boons: [
        "Immortal vs. 1 unit"
      ],
      mixed: [
        "Secondary Gensokyo Killers",
        "Low Dual Scaling Values"
      ],
      cons: [
        "Soupy Breaks, Poor Anomaly Breaks",
        "Can't set up her Dual Scaling",
        "Using Skills Effectively Exceedingly Difficult",
        "Low Damage Everywhere (Though if it hits full killer her AOE is one of the strongest in the game)"
      ],
      nitpick: [
        "Extremely Long LW"
      ],
      extra: [
        "Immortal vs. Solo Enemy"
      ]
    }
  },
  {
    name: "A6& Cirno",
    img: "a6& cirno.png",
    tier: "D",
    opts: { dbf: true, ex: true },
    explanation: {
      pros: [
        "7 Yin Def Down on LW + 2 Def Down II are easily her best use making her a decent last gauge debuffer"
      ],
      boons: [
        "Permanent Evasion Down is a decent, if niche, tool for Consistency Support"
      ],
      cons: [
        "Lacks Buffs to Support Herself or the Party outside Debuffing",
        "Doesn't break Freeze on her AoE and then her Perma Eva Down is on her Freeze Inflict Skill so you either bring a freeze breaker or you're fucked",
        "Disjointed Elements, Bad Killers, and Low Scalings completely kill her damage (lower than EX Medi, btw) and performance outside gauge 3 leaving her to only be useful for debuffing a single gauge"
      ]
    }
  },
  {
    name: "A7.5& Suika",
    img: "a7.5& suika.png",
    tier: "D",
    opts: { atk: true, ex: true },
    explanation: {
      pros: [
        "Good Killer Range"
      ],
      mixed: [
        "Mid buffs and debuffs",
        "Has No Ele Lines"
      ],
      cons: [
        "Poor Breaking Ability. Like really bad for late 2024",
        "Mono metal",
        "Acc Issues"
      ]
    }
  },
  {
    name: "A12& Nue",
    img: "a12& nue.jfif",
    tier: "D",
    opts: { dest: true, ex: true },
    explanation: {
      pros: [
        "Instantly caps her own Yin Atk, has a few debuffs and such too. Supp is decent"
      ],
      mixed: [
        "Has 5 AoE Spellcards, but..."
      ],
      cons: [
        "Very Disjointed Elements and she only breaks 1 Anomaly at a time",
        "Unimpressive Killer Range. She also lacks the usual Dest Crit Acc so she can't even NLM (she thinks she is spd)"
      ],
      nitpick: [
        "Extremely Long Last Word",
        "Very hard to play the game for some reason when she's on screen, could be just both tier makers though"
      ]
    }
  },
  {
    name: "A12& Ichirin",
    img: "a12& ichirin.png",
    tier: "D",
    opts: { tec: true, ex: true },
    explanation: {
      pros: [
        "Good Self Setup, especially Crit Atk II",
        "Good Breaking"
      ],
      boons: [
        "Can AoE SC Nuke"
      ],
      mixed: [
        "Cant use Crit Acc Buffs"
      ],
      cons: [
        "SC Effects are so selfish",
        "Mixed Bullet Type LW",
        "Bad Killer Layout"
      ],
      nitpick: [
        "LW Stun is 80% wtf"
      ]
    }
  },
  {
    name: "A12& Murasa",
    img: "a12& Murasa.png",
    tier: "D",
    opts: { atk: true, ex: true },
    explanation: {
      pros: [
        "Decent Breaking",
        "Buffs are Decent in conjunction with Cards"
      ],
      mixed: [
        "Spellcard Damage isn't that good"
      ],
      cons: [
        "Solo LW",
        "Poor Killers"
      ],
      nitpick: [
        "Has Piercing Lines"
      ]
    }
  },
  {
    name: "L50ws Yukari",
    img: "l50ws yukari.png",
    tier: "D",
    opts: { atk: true, b: true },
    explanation: {
      pros: [
        "Good Killers, passable damage"
      ],
      mixed: [
        "Mediocre Self Sufficiency",
        "Breaking is Low as well as Mono Wood"
      ],
      cons: [
        "Low Support, Questionable Def Down",
        "AoE is sad"
      ],
      nitpick: [
        "Very Useless Gimmick (it only accounts for base stat, so basically just +320 Yin Atk)"
      ],
      extra: [
        "——— A huge letdown"
      ]
    }
  },
  {
    name: "R8.-5 Youmu",
    img: "r8.-5 youmu.png",
    tier: "D",
    opts: { spd: true, b: true },
    explanation: {
      pros: [
        "LW Nuke better than L1 Kanako on Usable Killer",
        "Usable Buffs/Breaking"
      ],
      mixed: [
        "Killer is Very Unconventional though her AoE has decent damage on kilelr"
      ],
      cons: [
        "Lacks Util outside of Breaks"
      ]
    }
  },
  {
    name: "B1 Reisen",
    img: "b1 reisen.png",
    tier: "D",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Big Damage Potential",
        "Decently Self Sufficient, Decent Support"
      ],
      mixed: [
        "Can't Take Advantage of her Crit Acc Buffs",
        "Needs more Crit Atk Support"
      ],
      cons: [
        "Poor Anomaly Breaks",
        "Middling Spell Damage"
      ],
      extra: [
        "Great Voice",
        "awful voice"
      ]
    }
  },
  {
    name: "B3 Komachi",
    img: "b3 komachi.png",
    tier: "D",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Breaking is quite decent"
      ],
      mixed: [
        "Self Setup/Support is... OK but it's filled with lots of needless and useless effects"
      ],
      cons: [
        "Killers are Bad",
        "Mixed LW which she can't support in the slightest (her stats skew highly towards yang and she has 0 yin atk up in her kit)"
      ]
    }
  },
  {
    name: "B3 Benben",
    img: "b3 benben.png",
    tier: "D",
    opts: { dbf: true, u: true },
    explanation: {
      pros: [
        "Yang Debuffs are good combined with poison",
        "Self setup is.... passable?"
      ],
      mixed: [
        "Middling Support",
        "Lots of her kit is just useless",
        "Very Mixed Breaks"
      ],
      cons: [
        "Bad Killers"
      ]
    }
  },
  {
    name: "B3 Rei'sen",
    img: "b3 peacekeeper.png",
    tier: "D",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Has Youkai Killer",
        "Yang/Dest Supp is Decent"
      ],
      boons: [
        "Fairy Killer"
      ],
      mixed: [
        "Dmg is pretty mid",
        "Very Soupy Eles",
        "SC Effs are pretty mid"
      ],
      cons: [
        "No Anom Breaks",
        "Very reliant on JP Rein to extend buffs. Otherwise she can't extend buffs for shit."
      ],
      extra: [
        "Rein 2.0 fixes her extention issues for the most part.."
      ]
    }
  },
  {
    name: "B3 Yorihime",
    img: "b3 yorihimee.png",
    tier: "D",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Huge Last Word Damage Potential",
        "Built In Yang Def Debuffs can be useful",
        "Decent Self Sustainability"
      ],
      mixed: [
        "Middling Support"
      ],
      cons: [
        "Poor Buff Recovery",
        "Lacks Good Breaks"
      ]
    }
  },
  {
    name: "B5 Alice",
    img: "b5 alice.png",
    tier: "D",
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Great Yang Support",
        "High Scaling Values",
        "Decent Support Capabilities"
      ],
      mixed: [
        "Very Mixed Elements",
        "Party Burn and Paralyze can and will be Annoying",
        "Her Last Word targets Yin Def",
        "Needs Help setting up Dual Scaling"
      ],
      cons: [
        "Her Spellcard Anomalies apply After they're done",
        "So much RNG in her Kit",
        "Poor Killers",
        "She applies so many anomalies to herself but they're all heal instead of being anything useful. Why does this unit need to heal so much."
      ],
      nitpick: [
        "She got a BIS but can’t use its effects because her LW is Specular"
      ],
      extra: [
        "One of the weirder units in THLW"
      ]
    }
  },
  {
    name: "B5 Yukari",
    img: "b5 Yukari.png",
    tier: "D",
    opts: { heal: true, u: true },
    explanation: {
      pros: [
        "Great buffing for herself",
        "Good Breaking Ability"
      ],
      cons: [
        "LW AoE Neutral nuke is completely flaccid as it has next to no tangible damage"
      ]
    }
  },
  {
    name: "B5 Lyrica",
    img: "b5 lyrica.png",
    tier: "D",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Self Setup is Decent"
      ],
      mixed: [
        "Accuracy is Inline-Based",
        "Party Paralyze. Wooo"
      ],
      cons: [
        "Say goodbye to consistency with how much RNG this unit has",
        "Her killers are very bad, carried by virtue of being Dest",
        "Does nothing to set up Slice Scaling"
      ]
    }
  },
  {
    name: "H5 Doremy",
    img: "h5 doremy.png",
    tier: "D",
    opts: { dbf: true, u: true },
    explanation: {
      pros: [
        "Having her Def Down be split between 2 skills can be nice",
        "Very Good Yang Debuff Capability"
      ],
      cons: [
        "0 Self Setup or Support of any kind outside of debuffing",
        "Terrible Killers and just Abysmal damage",
        "Elemental Breaks are all over the place",
        "RNG stun on her AoE"
      ],
      extra: [
        "Spare yourself the dolls on this unit, just use them on b3 eiki"
      ]
    }
  },
  {
    name: "Lr Nitori",
    img: "goki.jpg",
    tier: "D",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Great Support & Self Sufficiency",
        "Strong Killers & Anomalies"
      ],
      mixed: [
        "Focus Down can work in and against your favour",
        "Somewhat Soupy Elements"
      ],
      cons: [
        "Surprisingly Low Damage"
      ],
      extra: [
        "This character is extremely sad. Her kit lures players in and when they obtain her they realize how quickly she falls off in practice."
      ]
    }
  },
  {
    name: "R2 Yuyuko",
    img: "r2 yuyuko.png",
    tier: "D",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Youkai Killer",
        "Her skills set herself up alright"
      ],
      mixed: [
        "Needs help actually sustaining said buffs",
        "Mono Water",
        "NOTICEABLE Damage Ceiling"
      ],
      cons: [
        "Her spellcards are garbage in terms of breaks, damage or effects",
        "Needs Crit Atk"
      ]
    }
  },
  {
    name: "S5 Utsuho (Okuu)",
    img: "s5 utsuho.png",
    tier: "D",
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Great Crit & Yang Support",
        "Good Breaking Capabilities"
      ],
      cons: [
        "Poor Killers, Can't take Real Advantage of her Crit Buffs as she isn't Dest",
        "Can't set up her own Dual Scale at all"
      ]
    }
  },
  {
    name: "W2 Suwako",
    img: "suwawa.jpg",
    tier: "D",
    opts: { dbf: true, u: true },
    explanation: {
      pros: [
        "Her Effects aren't Totally Useless"
      ],
      mixed: [
        "Damage on Killer isn't unusable but not exactly good",
        "She is trying to be both a support unit and a dbf unit and fails at both. Lots of useless effects or stuff that just doesn't work."
      ],
      cons: [
        "Unimpressive Killers",
        "Elements are Completely Disjointed. This unit has 18 water breaks and can't be called a water unit like?????"
      ],
      extra: [
        "Identity Crisis: The unit"
      ]
    }
  },
  {
    name: "W3 Momiji",
    img: "w3 momiji.png",
    tier: "D",
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Good LW Killers",
        "Decent Debuffs & Effects"
      ],
      mixed: [
        "Self Setup is Decent, but Support is weirdly Selfish",
        "NOTICEABLY LOW LW Damage Ceiling (similar to ex minoriko)"
      ],
      cons: [
        "Again, AoE leaves a lot to be desired between not having breaks and bad innate killers (good dmg on killer though)"
      ]
    }
  },
  {
    name: "Z1 Marisa",
    img: "z1 marisa.png",
    tier: "D",
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Powerful Last Word and Reasonable All AOE Spellcard Damage",
        "Decent Self Sustainability"
      ],
      mixed: [
        "Varied Elemental Breaks"
      ],
      cons: [
        "Effects have very short durations",
        "Faces Accuracy Issues and Damage Variance",
        "Obviously her breaks are awful in the modern day",
        "Inflicts Anoms she dsoesn't break"
      ],
      extra: [
        "Note: A lot of this is supported by her rebirth. Without her rebirth she's nearly useless."
      ]
    }
  },
  {
    name: "A6 Marisa",
    img: "a6 marisa.png",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Like A6 Reimu, big dmg potential on AoE (But less)",
        "Decent Self Setup"
      ],
      mixed: [
        "Bad p0 Last Word Killer"
      ],
      cons: [
        "Useless ST Spell",
        "Bad Breaks",
        "Middling Support"
      ],
      extra: [
        "Your standard victim of powercreep with dated damage, breaks and support",
        "However her AOE SC, Like Reimu (Though lower) is big dmg"
      ]
    }
  },
  {
    name: "A6 Rumia",
    img: "a6 rumia.png",
    tier: "D",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Decent Breaking Ability",
        "p0 AoE killer means she can actuallly spell nuke. LW nuke potential is similarly not bad"
      ],
      boons: [
        "Deadass has one of the best stat spreads in the game"
      ],
      mixed: [
        "Acc is reliant on Inlines",
        "Debuffs lots of Crit but nothing for Yin Def",
        "Tends to have Damage Variance due to low innate Crit Acc and Poor Killers. Damage floor is very low."
      ],
      cons: [
        "Requires Outside Support through Cards and Team Members"
      ]
    }
  },
  {
    name: "A6 Meiling",
    img: "a6 meiling.png",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Damage is Hilarious on Killer",
        "Effects are OK"
      ],
      mixed: [
        "Obsessing over Guard/Tank stuff is more of a waste",
        "Needs much more support"
      ],
      cons: [
        "Can't set up her dual scaling well",
        "Bad Killers",
        "Poor Breaking Ability"
      ]
    }
  },
  {
    name: "A6 Remilia",
    img: "a6 remi.png",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Skills, Supp is Decent"
      ],
      mixed: [
        "RNG Barr SUpport"
      ],
      cons: [
        "Bad Killers",
        "Very Mixed Elements"
      ]
    }
  },
  {
    name: "A6 Lyrica",
    img: "Lyrica scar.jpg",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Great Debuff Utility",
        "Usable Killers & Buffs"
      ],
      cons: [
        "Low Slice Scalings, Low Damage",
        "No AoE Anom Breaks aside from her LW"
      ]
    }
  },
  {
    name: "A6 Yuuka",
    img: "a6 yuuka.png",
    tier: "D",
    opts: { heal: true, a: true },
    explanation: {
      pros: [
        "Decently Wide Killers and High Damage Output",
        "Decent Yang Sufficiency"
      ],
      mixed: [
        "Questionable Anomaly Breaks"
      ],
      cons: [
        "Pretty Selfish Buffs",
        "Requires burn breaker or her to go last."
      ]
    }
  },
  {
    name: "A7B Reimu",
    img: "a7b reimu.png",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Youkai Killer, uses KS for debuffs",
        "Breaks are relatively good for this tier"
      ],
      mixed: [
        "Mid Self Setup. NEeds a lot of Crit & Yang Support",
        "RNG Anom Breaks, 3p locked"
      ],
      cons: [
        "Support is pretty mid too"
      ]
    }
  },
  {
    name: "A7A Marisa",
    img: "a7a marisa.png",
    tier: "D",
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "High Damage Potential"
      ],
      mixed: [
        "Sacrifices a lot of Self Setup for Yin Atk, as a Yang Unit"
      ],
      cons: [
        "No AoE Anomaly Breaks"
      ]
    }
  },
  {
    name: "A7B Marisa",
    img: "a7b marisa.png",
    tier: "D",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Decently High Damage Output",
        "High Crit Sustainability"
      ],
      mixed: [
        "Somewhat Soupy"
      ],
      cons: [
        "Lacks AoE Spellcard Damage or Breaks"
      ],
      extra: [
        "She's great for Fes Only"
      ]
    }
  },
  {
    name: "A7A Sakuya",
    img: "a7a sakuya.png",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "High Self Sustainability, Decent Buffs & Debuffs",
        "Decently High Damage, Killers and Support"
      ],
      cons: [
        "Needs Crit Atk",
        "Soupy, RNG Breaks"
      ],
      extra: [
        "Here's one thing that is obvious SHE IS NOT A DOG"
      ]
    }
  },
  {
    name: "A7 Cirno",
    img: "a7 cirno.png",
    tier: "D",
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "Supp/Self Setup is Decent with a few debuffs too. Additionally a proud user of the ever generous Prae Card"
      ],
      mixed: [
        "ST Anoms. Her breaking is decent outside of that (relatively) but this hurts a lot",
        "Could use more Agi Support",
        "Her killers are pretty bad with her Youkai Killers being secondary... but kinda gets away with it sometimes with her Crit Acc (sometimes)"
      ],
      cons: [
        "Disjointed Bullet Types on LW",
        "No Killers p0 on her Last Word at all????"
      ],
      extra: [
        "Cirno fans waiting 2 years for a new cirno alt just with L1 still being the best since launch"
      ]
    }
  },
  {
    name: "A7 Yukari",
    img: "a7 yukari.png",
    tier: "D",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Her LW Nuke is good with wide killers, and her AoE has nuke potential"
      ],
      cons: [
        "The word 'potential' is strongly carrying that. She can't set herself up for shit. Needs LOTS of support to properly cap stats.",
        "Completely disjointed elemental breaks. Also no AoE Anom Breaks w/ ST anoms."
      ],
      extra: [
        "One of the most satisfying LW Anims in the game"
      ]
    }
  },
  {
    name: "A7 Luna",
    img: "A7 Luna.png",
    tier: "D",
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Can have -10 Yang Def Down in 1 Turn",
        "Party 1.2p on Skill + Barrier Restore is actually quite decent for the tier albeit may be lacking practical application"
      ],
      mixed: [
        "Has few buffs, though not 0",
        "Target Focus Up is Very Niche and requires Careful Use"
      ],
      cons: [
        "Poor Breaking",
        "Damage is so so so bad"
      ],
      nitpick: [
        "Luna stole the Precious Def"
      ],
      extra: [
        "Your Mouth Look Like A Chestnut",
        "Lowkey might be the best unit in D  as she has high debuffs and actual util. Though simply lacks more of anything (mostly potential damage) to rise to C. Honestly just treat her as a low C unit"
      ]
    }
  },
  {
    name: "A8 Tewi",
    img: "a8 tewi.jfif",
    tier: "D",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Wide Killer Range",
        "Actually Good Anomaly Breaks",
        "Debuffing is Decent"
      ],
      cons: [
        "Support and Self Setup is pretty bad.",
        "Disjointed LW Bullet Types & Elements",
        "Very Soupy Elements",
        "Saddled by lots of RNG in her kit"
      ],
      extra: [
        "She doesn't look that bad and the more you look into her kit the more it seems there's nowhere to use her. Like this is pretty bad"
      ]
    }
  },
  {
    name: "A8 Eirin",
    img: "a8 eirin.png",
    tier: "D",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Wide Killer Range",
        "Decent Anomaly Breaks"
      ],
      mixed: [
        "Needs more Buffs and help sustaining said buffs"
      ],
      cons: [
        "Elemental Spread is very Soupy"
      ]
    }
  },
  {
    name: "A8 Mokou",
    img: "a8 mokou.png",
    tier: "D",
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Decently High Damage Output",
        "Decent Self Sustainability and Support"
      ],
      mixed: [
        "Anomaly Inflict and Breaks are Solo Target",
        "Her Damage Ceilings kinda cull her use noticeably until we get a proper card for her"
      ],
      cons: [
        "No AoE Breaks aside from on Shot",
        "Low AoE Spellcard Damage"
      ]
    }
  },
  {
    name: "A9.7 Akyuu",
    img: "A9.4 Akyuu.png",
    tier: "D",
    opts: { def: true, a: true },
    explanation: {
      pros: [
        "Decent Util and Breaking",
        "Buffs are decent"
      ],
      cons: [
        "Damage is hopeless"
      ]
    }
  },
  {
    name: "A10 Suwako",
    img: "a10 suwako.png",
    tier: "D",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Self Setup isn't tragic",
        "Damage isn't tragic",
        "Pretty P Sufficient"
      ],
      mixed: [
        "Limited Anom Interactions, RNG ST Anoms"
      ],
      cons: [
        "Middling Support",
        "Unimpressive Killers"
      ]
    }
  },
  {
    name: "A10.5 Patchouli",
    img: "a10.5 patchy tec.png",
    tier: "D",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Good Killer Range"
      ],
      mixed: [
        "1 AoE Para lmaoo",
        "Obsesses over barr cleanse for NO REASON instead of doing anything useful"
      ],
      cons: [
        "Completely Disjointed Elements",
        "NO ELE LINES",
        "Just Awful Skills, only useful thing is AoE def down"
      ]
    }
  },
  {
    name: "A12.3 Meiling",
    img: "a12.3 Meiling.png",
    tier: "D",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Great Killers"
      ],
      boons: [
        "SC1 Can (Kinda) Nuke (it's not very practical)"
      ],
      mixed: [
        "Effects are rather mid",
        "Debuffs Evasion instead of buffing Acc",
        "Dmg to Eff Weighted"
      ],
      cons: [
        "Rather Selfish Buffs"
      ]
    }
  },
  {
    name: "A13 Miko",
    img: "a13 miko.png",
    tier: "D",
    opts: { def: true, a: true },
    explanation: {
      pros: [
        "Pretty Good Yang Def Buffs for the Party and Yang Atk Buffs for herself"
      ],
      cons: [
        "RNG Anoms Post SCs",
        "Breaks are a complete mess",
        "Unimpressive Killers with no Crit Atk to Speak of"
      ]
    }
  },
  {
    name: "A14 Shinmy",
    img: "shinmy.jpg",
    tier: "D",
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "A dest unit with actual self sufficiency and party acc????"
      ],
      mixed: [
        "Her Genso/Youkai killers are on everything but p0 of her last word. THAT'S NOT HOW DEST UNITS WORK!!!!! Anyhow this culls her damage and usefulness immediately as her p0 killers are not good."
      ],
      cons: [
        "Disjointed Bullet Types on LW",
        "Breaks are completely disjointed",
        "Inflicts burn on her AoE which she doesn't break. Bring a burn breaker (which probably won't work anyways considering she is rather slow)"
      ]
    }
  },
  {
    name: "A16 Okina",
    img: "A16 Okina.png",
    tier: "D",
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Normally this isn't counted as a niche but Breaking 7 Freeze on her LW is this units' only niche so we're counting it",
        "Good Party Yang & Crit Buffs throughout her kit, usable P and Acc Util to complement her supportive Role"
      ],
      cons: [
        "2 Solo Spellcards really hurt any hope of using her outside her LW",
        "LW Damage is just bad and completely disjointed."
      ]
    }
  },
  {
    name: "L1 Nazrin",
    img: "nazrin.png",
    tier: "D",
    opts: { supp: true, g: true },
    explanation: {
      pros: [
        "Her LW and AoE can nuke thanks to Human and Youkai Killers"
      ],
      mixed: [
        "Breaks are lagging behind for modern day use",
        "Support isn't bad per se but definitely shows its age. It won't be enough"
      ],
      cons: [
        "Low Slice Scaling"
      ]
    }
  },
  {
    name: "L1 Mike",
    img: "l1 mike.png",
    tier: "D",
    opts: { supp: true, g: true },
    explanation: {
      pros: [
        "Decent Damage Potential, HUGE AoE SC Potential",
        "Yang Supp is Decent"
      ],
      mixed: [
        "Very Soupy Breaks",
        "RNG in kit. Blehhh"
      ],
      cons: [
        "Bad Killers",
        "Next to No Anom Interactions"
      ]
    }
  },
  {
    name: "L1 Chimata",
    img: "l1 chimata.png",
    tier: "D",
    opts: { atk: true, g: true },
    explanation: {
      pros: [
        "Decent Damage Potential that can use MGD, Very inflated ST SC dmg (like top 6 or so)",
        "Support & Debuffs are pretty decent"
      ],
      mixed: [
        "Killers are decent but not especially amazing",
        "Human God Killers are Secondary (why)"
      ],
      cons: [
        "Inflicts Blind she doesn't break on AoE",
        "Very Rainbow Elements"
      ],
      extra: [
        "Happy Pride Month!!!"
      ]
    }
  },
  {
    name: "L1 Momoyo",
    img: "l1 momoyo.png",
    tier: "D",
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Decent Anomaly and Elemental Breaks",
        "Great Killers and High Crit Accuracy",
        "Decent Self Sustainability"
      ],
      mixed: [
        "Middling Support",
        "Crit Eva Down over Crit Acc Up, debuffs are 1 turn",
        "The Usual Dest Damage Variance Issues"
      ],
      cons: [
        "Poor Spell DMG",
        "No Innate Accuracy, has trouble sustaining buffs"
      ]
    }
  },
  {
    name: "L1 Enoko",
    img: "l1 enoko.png",
    tier: "D",
    opts: { spd: true, g: true },
    explanation: {
      pros: [
        "Surprisingly capable aoe spell even if its not amazing"
      ],
      cons: [
        "Cant nuke on no fb, can only nuke on fb ever"
      ],
      extra: [
        "\"If youre good you can use anyone and still clear\" enoko fans seeing her pierce lines (literally cant clear with her):"
      ]
    }
  },
  {
    name: "L1 Chiyari",
    img: "l1 chiyari.png",
    tier: "D",
    opts: { atk: true, g: true },
    explanation: {
      pros: [
        "Prae card lmfao",
        "Gensokyo Killer",
        "Can self setup"
      ],
      mixed: [
        "Very hard breaks to work with"
      ],
      cons: [
        "Rather reliant on overlap to reach her damage"
      ],
      extra: [
        "Actually usable! (thanks to killers and no stupid shit in kit)"
      ]
    }
  },
  {
    name: "L1 Zanmu",
    img: "l1 zanmu heal.png",
    tier: "D",
    opts: { heal: true, g: true },
    explanation: {
      pros: [
        "Self Setup is like, ok. Has bind clears and decent amount of Yin Atk"
      ],
      mixed: [
        "Evasion Down instead of Acc Up"
      ],
      cons: [
        "Shit Killers",
        "No Anom Breaks",
        "Very odd bullet layouts"
      ],
      extra: [
        "You're telling me they gave biten and enoko genso killer and not zanmu. They even forgot her rock. Are you kidding me"
      ]
    }
  },
  {
    name: "L1 Ubame",
    img: "l1 ubame.png",
    tier: "D",
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Decent Buffs Across the Board",
        "Consistent AoE and LW Damage on Killer"
      ],
      cons: [
        "Bad Killer",
        "No Util"
      ]
    }
  },
  {
    name: "Az1 Marisa",
    img: "Az1 Marisa.png",
    tier: "D",
    opts: { dbf: true, y: true },
    explanation: {
      pros: [
        "Has relatively good breaks",
        "Has Decent Party Support",
        "Pretty Good Debuff Capability",
        "Actually can Nuke Things"
      ],
      boons: [
        "SC Delay gimmick has its uses"
      ],
      cons: [
        "Still a Yukkuri so she can only go so far. While she has enough to escape the confines of the tier of her species, everything else is so, so limited compared to the rest of the game. Hence her placement in D"
      ],
      extra: [
        "Why does this unit exist???",
        "Girl why you so HP",
        "How is she doing this"
      ]
    }
  },
  // E tier
  { 
  name: "F1;4 Reimu", 
  img: "f1;4 Reimu.png", 
  tier: "E", 
  opts: { atk: true, b: true },
  explanation: {
    pros: [
      "Decent Support"
    ],
    boons: [
      "EB Shill"
    ],
    mixed: [
      "Mono Sun or No Ele"
    ],
    cons: [
      "Poor Killers",
      "No Crit Atk",
      "No Anomaly Inflicts At All",
      "ST LW"
    ],
    extra: [
      "https://www.youtube.com/watch?v=9-AWN1uMBnY"
    ]
    }
  },
  { 
    name: "B3 Kaguya", 
    img: "b3 kaguya.png", 
    tier: "E", 
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Youkai killer, Decent LW Star Nuke"
      ],
      mixed: [
        "Kinda Iffy Self Setup, needs Yang and Crit support."
      ],
      cons: [
        "No Anomaly Breaks, very Disjointed Elements",
        "Trades a lot of her kit for useless things like eva up and acc down"
      ],
      extra: [
        "best eva tank in the game 2 years later if you need it. Decent damaging last word but lacks self sustainability outside of agility. Evasion/Acc Down isn't very reliable"
      ]
    }
  },
  { 
    name: "B3 Kokoro", 
    img: "SPOILER_kokoro.jpg", 
    tier: "E", 
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Solid Buffs & Effects"
      ],
      mixed: [
        "Soupy, Unfocused Elemental Breaks"
      ],
      cons: [
        "Lackluster Killers. Poor damage even if Killers hit"
      ]
    }
  },
  { 
    name: "B3 Kutaka", 
    img: "b3 kutaka.png", 
    tier: "E", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Supp/Debuffs are passable?"
      ],
      mixed: [
        "A Mixed Bag in terms of Anom Breaks"
      ],
      cons: [
        "ST LW",
        "Bad Killers, dual scaling issues"
      ]
    }
  },
  { 
    name: "B3 Marisa", 
    img: "b3 marisa.png", 
    tier: "E", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Self Buffs are Good"
      ],
      mixed: [
        "Bad Killers but has lots of crit acc (she can nlm her p0)",
        "Random Piercing Lines"
      ],
      cons: [
        "Breaks Lag Behind for Modern Era, No AoE Anom Breaks",
        "Damage is still low",
        "Pretty Selfish"
      ],
      extra: [
        "ex tier was made because of her btw"
      ]
    }
  },
  { 
    name: "B3 Reisen", 
    img: "b3 reisen.png", 
    tier: "E", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Self Buffs are Good"
      ],
      mixed: [
        "Lots of useless stuff in her kit (acc down)",
        "Elemental Combo + Bullet Types will never line up ever"
      ],
      cons: [
        "Breaks Lag Behind in Modern Day, no AoE Anom breaks",
        "Bad Killers",
        "No Crit Atk",
        "Divided Last Word"
      ],
      extra: [
        "Formerly top 1. A long time ago."
      ]
    }
  },
  { 
    name: "B3 Sakuya", 
    img: "b3 sakuya.png", 
    tier: "E", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Buffing is OK",
        "Can Spell Nuke"
      ],
      mixed: [
        "Inflicts Anoms post Spellcard"
      ],
      cons: [
        "Lagging Breaks/Util/Support",
        "Unimpressive Killers",
        "Solo Last Word"
      ]
    }
  },
  { 
    name: "B3 Sanae", 
    img: "b3 sanae.png", 
    tier: "E", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Crit Debuffing is Decent(?)"
      ],
      mixed: [
        "Can't really use the excessive Crit Eva Down she debuffs"
      ],
      cons: [
        "Lagging Breaks/Util",
        "Unimpressive Killers",
        "Self Buffs aren't very Good, can't extend her Yang Atk by herself"
      ],
      extra: [
        "at least she saw use in AC"
      ]
    }
  },
  { 
    name: "B3 Youmu", 
    img: "b3 youmu.png", 
    tier: "E", 
    opts: { tec: true, u: true },
    explanation: {
      pros: [
        "Plentiful (Self) Yang Def Buffs"
      ],
      mixed: [
        "Youmu you forgot to set up Atk, Agi and Crit!! Well you half assed the Atk and Agi but...",
        "Applies Anoms post SC"
      ],
      cons: [
        "Pretty bad breaks for the modern day",
        "Support is pretty bad",
        "Killers suck",
        "Low Def Value"
      ]
    }
  },
  { 
    name: "B5 Merlin", 
    img: "b5 merlin.png", 
    tier: "E", 
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Buffs are Decent"
      ],
      cons: [
        "Saddled by RNG",
        "No AoE SC Anom Breaks",
        "Bad Killers"
      ],
      extra: [
        "I like her design the most of the 3. NOT BIASED/"
      ]
    }
  },
  { 
    name: "B5 Mokou", 
    img: "b5 mokou.png", 
    tier: "E", 
    opts: { def: true, u: true },
    explanation: {
      pros: [
        "Buffs are like OK"
      ],
      mixed: [
        "Needs more Atk Buffs"
      ],
      cons: [
        "Disjointed AoE Spellcard Elements, lagging Anomaly Breaks",
        "Killers are Ultra Shit."
      ],
      extra: [
        "If she can hit her killers her LW nuke becomes extremely potent. Good luck with that though"
      ]
    }
  },
  { 
    name: "E1 Remilia", 
    img: "e1 remi.png", 
    tier: "E", 
    opts: { supp: true, u: true },
    explanation: {
      pros: [
        "Has Aura",
        "Supp is Decent"
      ],
      mixed: [
        "Can't take advantage of excessive Crit Acc Buffs",
        "Entirely replaceable by cards",
        "Would probably like more Yin Atk buffs"
      ],
      cons: [
        "Sucky Anom Breaking Ability",
        "No p0 Killers on LW, Bad killers in general",
        "Very long cooldowns"
      ],
      extra: [
        "BEST alt design, WORST alt kit",
        "Replaced mv kasen in kasen/getsu/aoe comps 2/3 times guaranteed!"
      ]
    }
  },
  { 
    name: "E7 Cirno", 
    img: "e7 cirno.png", 
    tier: "E", 
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Acc Sufficient"
      ],
      cons: [
        "Her killers are shit",
        "Everything else in her kit (ass breaks, ass support)"
      ]
    }
  },
  { 
    name: "E7 Daiyousei", 
    img: "e7 daiyousei.png", 
    tier: "E", 
    opts: { heal: true, u: true },
    explanation: {
      pros: [
        "Has actual party buffs, technically complemented by 2 quick's"
      ],
      boons: [
        "Looks like Mayonnaise and I like that"
      ],
      cons: [
        "No AoE Spellcard instantly kills her as she has no potential for either damage OR breaks",
        "Bad Killers"
      ],
      nitpick: [
        "Can't even really meme with precise that well because her dmg ceiling is quite low"
      ],
      extra: [
        "She looks like a bottle of Mayo"
      ]
    }
  },
  { 
    name: "H5 Wriggle", 
    img: "h5 wriggle.png", 
    tier: "E", 
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "Skills are ok, Breaking is... ok but kinda odd"
      ],
      cons: [
        "Inflicts Anoms post Spellcard",
        "Rather Selfish, Buffs aren't that good either",
        "Solo Target LW",
        "Bad Killers"
      ]
    }
  },
  { 
    name: "R8 Youmu", 
    img: "r8 youmu.png", 
    tier: "E", 
    opts: { spd: true, u: true },
    explanation: {
      pros: [
        "High Damage Floor, Low Damage Ceiling (Unless you can hit her very niche killers)"
      ],
      boons: [
        "Fairy Killer"
      ],
      mixed: [
        "RNG Anom Breaks",
        "Self Setup is... ok but needs help"
      ],
      cons: [
        "No Innate Acc",
        "Bad Killers",
        "Very Mixed Breaks",
        "Basically does nothing for support"
      ],
      extra: [
        "Rebirth helps her a lot.",
        "first solo phantasm 4t, good for Fire EX"
      ]
    }
  },
  { 
    name: "T5 Reisen", 
    img: "t5 reisen.png", 
    tier: "E", 
    opts: { dest: true, u: true },
    explanation: {
      pros: [
        "Decent Yang/Crit Support"
      ],
      mixed: [
        "Can't Dest"
      ],
      cons: [
        "Breaking Sucks",
        "Inflicts Anoms, doesn't break them.",
        "Bad Killers",
        "Awful just Abysmal Last Word"
      ],
      extra: [
        "lol self dmg to eff up"
      ]
    }
  },
  { 
    name: "W5 Sanae", 
    img: "sanarr.jpg", 
    tier: "E", 
    opts: { atk: true, u: true },
    explanation: {
      pros: [
        "Support and Debuffs are Decent"
      ],
      cons: [
        "No AoE Anom Breaks",
        "Solo Last Word",
        "Unimpressive Killers"
      ],
      extra: [
        "Yikes"
      ]
    }
  },
  { 
    name: "A6 Cirno", 
    img: "a6 cirno.png", 
    tier: "E", 
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Damage Potential is quite high"
      ],
      mixed: [
        "RNG Anom Inflict post-spellcard",
        "Her debuffing isn't even that good. Or her self setup."
      ],
      cons: [
        "Breaking is quite bad and disjointed, lacks AoE anom breaks",
        "Unimpressive Killers",
        "NO SPIRIT P UP AT ALL"
      ]
    }
  },
  { 
    name: "A6 Daiyousei", 
    img: "a6 daiyousei.png", 
    tier: "E", 
    opts: { dbf: true, a: true },
    explanation: {
      mixed: [
        "Rather Soupy Elements, Breaking Ability is pretty bad",
        "Lots of Useless Debuffs (Acc Debuffs do nothing)"
      ],
      cons: [
        "Killers are bad, low scaling, bad damage",
        "Barely has anything for self buffs or sufficiency, needs lots of support while having no support"
      ]
    }
  },
  { 
    name: "A6 Sakuya", 
    img: "a6 sakuya.png", 
    tier: "E", 
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "OK Yin Buffs & Debuffs"
      ],
      mixed: [
        "Rather Soupy",
        "ST Stun is RNG"
      ],
      cons: [
        "Solo Last Word with Unimpressive Killers that aren't even p0... (However with 2.0 buffs it has real damage now so... yay?)",
        "0 Anomaly Interactions"
      ]
    }
  },
  { 
    name: "A6 Youmu", 
    img: "youmu scar.jpg", 
    tier: "E", 
    opts: { def: true, a: true },
    explanation: {
      pros: [
        "Very High Damage Potential on LW and St with killers to back it up",
        "Decent Self Def Buffs & Debuff"
      ],
      boons: [
        "Very Fast Shots"
      ],
      mixed: [
        "Mid Breaking Ability, Soupy Elements"
      ],
      cons: [
        "Needs lots of Atk Buff Support. Can't set up.",
        "Needs to graze Def Buffing Anomalies for Accuracy",
        "Needs Crit Atk & P Support"
      ],
      extra: [
        "Youmu is one of those units that trades all self setup for high dmg potential.",
        "first fes solo phantasm"
      ]
    }
  },
  { 
    name: "A7 Youmu", 
    img: "a7 youmu.png", 
    tier: "E", 
    opts: { dest: true, a: true },
    explanation: {
      mixed: [
        "Buffs are... OK but really needs a lot of help",
        "Low Damage Ceiling",
        "Gensokyo Killers are on her lines that already NLM"
      ],
      cons: [
        "2 ST SCs",
        "Support is garbage",
        "Lots of P issues",
        "Very Disjointed Elements, Bullet types. 0 Aoe Anom Breaks",
        "Dest Acc Issues, Mixed Issues"
      ],
      extra: [
        "Not gonna try to BS a + for this unit"
      ]
    }
  },
  { 
    name: "A7 Yuyuko", 
    img: "a7 yuyuko.png", 
    tier: "E", 
    opts: { supp: true, a: true },
    explanation: {
      pros: [
        "Good Party Support, Mostly for Yin Hard Characters"
      ],
      mixed: [
        "Very Dated Breaks"
      ],
      cons: [
        "Poor Killers and Lacks Damage"
      ]
    }
  },
  { 
    name: "A8 Reisen", 
    img: "a6 reisen.png", 
    tier: "E", 
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Self Buffing is... Decent",
        "Can break any anom on 1 enemy (wowie)"
      ],
      mixed: [
        "Minor RNG on Skill 3"
      ],
      cons: [
        "2 ST SCs",
        "Very Selfish Buffs",
        "Only breaks Anoms on her LW for AOE",
        "Rather Soupy Spellcards aside from Moon/",
        "Unimpressive Killer Range"
      ]
    }
  },
  { 
    name: "A9 Aya", 
    img: "a9 aya.png", 
    tier: "E", 
    opts: { dbf: true, a: true },
    explanation: {
      mixed: [
        "Her Buffs and Debuffs are both very mid. Barely any Yang Def Down (the important one)"
      ],
      cons: [
        "Soupy & Dated Breaks",
        "Her Killers are Bad",
        "Needs a lot of Support. Even then her damage and util is still bad"
      ],
      extra: [
        "at least her theme is nice"
      ]
    }
  },
  { 
    name: "A10 Kanako", 
    img: "a10 kanko (why is bitch so big wtf).png", 
    tier: "E", 
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "Buffs are kinda decent"
      ],
      mixed: [
        "Soupy Elements",
        "Killers are below average"
      ],
      cons: [
        "0 Accuracy",
        "Can't really sustain her buffs"
      ]
    }
  },
  { 
    name: "A10 Nitori", 
    img: "a10 nitori.png", 
    tier: "E", 
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Self Buffs are kinda passable"
      ],
      mixed: [
        "Killers are only below average instead of bad!! Dmg can be ok"
      ],
      cons: [
        "Low Breaks",
        "Solo Anomalies/Debuffs",
        "Tri Element LW",
        "Rather Selfish Buffs"
      ]
    }
  },
  { 
    name: "A10 Sanae", 
    img: "a10 sanae.png", 
    tier: "E", 
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Self Buffs are Decent",
        "Good Killers"
      ],
      cons: [
        "Breaking Ability is Bad, Tri-Element LW",
        "No Crit Atk",
        "Lacks Supp/Util, big victim of Powercreep"
      ]
    }
  },
  { 
    name: "A11 Koishi", 
    img: "a11 koishi.png", 
    tier: "E", 
    opts: { spd: true, a: true },
    explanation: {
      pros: [
        "Actually Capable AoE Spell with Decent Killers too (it's above base fishi in terms of dmg)"
      ],
      mixed: [
        "Mid DMG on her LW even with killers hit. The damage ceiling is low with those slice values",
        "Inflicts Anomalies post Spellcard",
        "Self Setup and Debuffs are Decent but needs more help.",
        "Good Killers are Secondary on her LW"
      ],
      cons: [
        "Very Little in the way for Support",
        "Anomaly Breaks are limited to shots",
        "No Crit Atk"
      ],
      extra: [
        "This units' main claim to fame was having her killers line up with a lot of CQ back in the day.",
        "Solos water EX (somehow)"
      ]
    }
  },
  { 
    name: "A11 Satori", 
    img: "a11 satori.png", 
    tier: "E", 
    opts: { tec: true, a: true },
    explanation: {
      pros: [
        "Guaranteed Stun on Last Word"
      ],
      mixed: [
        "Support is decent but kinda all over the place and not too good in any one aspect so she can't set herself up that well either",
        "Youkai Killer is Secondary. She can't even nuke with her AoE"
      ],
      cons: [
        "Inflicts Anoms post Spellcard Use",
        "No AoE Anom Breaks",
        "Completely disjointed Elemental Breaks"
      ]
    }
  },
  { 
    name: "A12 Byakuren", 
    img: "a12 byakuren.png", 
    tier: "E", 
    opts: { atk: true, a: true },
    explanation: {
      pros: [
        "LW Nuke is Decent"
      ],
      mixed: [
        "Slightly below average killers"
      ],
      cons: [
        "Needs a lot of support. Has no support",
        "Elements/Breaking are a mess. You can tell her AoE was supposed to be good but it fails miserably"
      ]
    }
  },
  { 
    name: "A13 Yoshika", 
    img: "a13 yoshika.jfif", 
    tier: "E", 
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Party Effects are barely passable"
      ],
      mixed: [
        "Mostly Debuffs Evasion (kinda mid) over anything else",
        "Breaking Ability is Mid"
      ],
      cons: [
        "Needs Lots of Support",
        "Killers Bad",
        "0 Yin Atk her in entire kit, awesome!!"
      ],
      extra: [
        "note: yoshika's lore is actually so good wtf. yoshika x kasen forever"
      ]
    }
  },
  { 
    name: "A18 Takane", 
    img: "A18 Takane.png", 
    tier: "E", 
    opts: { dbf: true, a: true },
    explanation: {
      pros: [
        "Target Focus Up is kinda funny"
      ],
      mixed: [
        "Very Little Tangible Yin Def Down"
      ],
      cons: [
        "Does Nothing overall, almost everything she has is pretty worthless and what useful things she does have are too small in count to be useful"
      ]
    }
  },
  { 
    name: "A18.5 Nitori", 
    img: "a18.5 nitori.png", 
    tier: "E", 
    opts: { dest: true, a: true },
    explanation: {
      pros: [
        "Youkai Killer, Damage isn't Tragic"
      ],
      mixed: [
        "Scaling is Meh, Meh Agi stat limits damage",
        "Spellcards only have Water or No Ele",
        "Can't Dest"
      ],
      cons: [
        "Worst Abomination of a Last Word Ever",
        "Selfish Buffs",
        "AWFUL Breaking Ability",
        "Inflicts Anoms, doesn't break them."
      ]
    }
  },
  { 
    name: "L1 Biten", 
    img: "l1 biten.png", 
    tier: "E", 
    opts: { tec: true, g: true },
    explanation: {
      pros: [
        "uh??? Good killer ig"
      ],
      mixed: [
        "The rest of her kit is effectively a trade off, not helped by the lack of options and versatility of her kit."
      ],
      cons: [
        "If she achieved super saiyan she would be way higher but neglected her training"
      ]
    }
  },
  { 
    name: "L1 Chen", 
    img: "l1 chen.png", 
    tier: "E", 
    opts: { spd: true, g: true },
    explanation: {
      pros: [
        "Nukes any stage she isn't nerfed in (Neutral LW)",
        "Her LW has very high damage potential",
        "Instant Self 3p (this is notable for old ass gens)"
      ],
      mixed: [
        "Can set herself up decently well with her skills but..."
      ],
      cons: [
        "Lacks Yang Atk",
        "0 Support to speak of",
        "Completely Unable to Break, needs hefty debuffers (or good breakers)"
      ],
      extra: [
        "This stupid fucking cat somehow remaining relevant like 4 years later. Behold the power of Chon."
      ]
    }
  },
  { 
    name: "L1 Cirno", 
    img: "l1 cirno.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Big Big Nuke Dmg"
      ],
      mixed: [
        "Needs a considerable amount of support"
      ],
      cons: [
        "Piss poor breaks or util or supp"
      ],
      extra: [
        "she's great for ds 120. only unit to hit visual dmg cap in ds120, highest theoretical damage in the game: https://www.youtube.com/watch?v=8Gn7YZzzWA0"
      ]
    }
  },
  { 
    name: "L1 Hecatia", 
    img: "l1 hecatia.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "High Damage Output on Last Word and AoE Spellcards",
        "Good Self Sustainability"
      ],
      cons: [
        "Dated Breaks",
        "Low Support",
        "Held Back by ST LW"
      ]
    }
  },
  { 
    name: "L1 Hisami", 
    img: "l1 hisami dest.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Effects and Buffs are good"
      ],
      mixed: [
        "Has Focus Up for some reason (cause she wants to be stepped on)"
      ],
      cons: [
        "Mid Killers",
        "No Anomaly Breaks"
      ]
    }
  },
  { 
    name: "L1 Ichirin", 
    img: "l1 ichirin.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Decent Dmg Output",
        "Decent Self Buffs",
        "Instant 3p (good for old ass gens)"
      ],
      cons: [
        "Breaking Ability not so good nowadays",
        "Has a hard time actually Extending and Capitalizing on said buffs",
        "Poor Killers, noticeable DMG Ceiling"
      ],
      extra: [
        "JOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOJOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
      ]
    }
  },
  { 
    name: "L1 Kanako", 
    img: "l1 Kanako.png", 
    tier: "E", 
    opts: { def: true, g: true },
    explanation: {
      pros: [
        "Massive ST LW Dmg",
        "Equally Massive AoE SC Dmg Potential"
      ],
      cons: [
        "Lacks Breaks or Setup"
      ],
      extra: [
        "???+ Shill"
      ]
    }
  },
  { 
    name: "L1 Keiki", 
    img: "l1 keiki.png", 
    tier: "E", 
    opts: { tec: true, g: true },
    explanation: {
      pros: [
        "Boost scale aoe poison breaks."
      ],
      mixed: [
        "Supp and Self Setup are very dated but not tragic"
      ],
      cons: [
        "Unimpressive killers, lacking crit atk, backloaded killers. Very very dated"
      ]
    }
  },
  { 
    name: "L1 Kisume", 
    img: "l1 kisume.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Competent Nuke",
        "Competent Self Setup?"
      ],
      cons: [
        "Lacking everything else"
      ]
    }
  },
  { 
    name: "L1 Kosuzu", 
    img: "l1 kosuzu.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "Is cirno dmg potential but worse",
        "Good Card Options"
      ],
      cons: [
        "Lacks everything else, no NLM lines"
      ]
    }
  },
  { 
    name: "L1 Lily", 
    img: "l1 lily.png", 
    tier: "E", 
    opts: { heal: true, g: true },
    explanation: {
      pros: [
        "equal to cirno without mima carry, equally meme spells"
      ],
      cons: [
        "Worse buffs or peak dmg or anything"
      ]
    }
  },
  { 
    name: "L1 Megumu", 
    img: "l1 megumu.png", 
    tier: "E", 
    opts: { spd: true, g: true },
    explanation: {
      pros: [
        "Self Buffing is Decent",
        "High Damage Potential"
      ],
      mixed: [
        "Breaking is quite Eh"
      ],
      cons: [
        "Unimpressive Killers",
        "Buffs are rather Selfish"
      ]
    }
  },
  { 
    name: "L1 Misumaru", 
    img: "l1 misumaru.png", 
    tier: "E", 
    opts: { tec: true, g: true },
    explanation: {
      pros: [
        "Self Buffs are ok"
      ],
      mixed: [
        "Buffs Kinda All Over the Place",
        "Breaking Ability kinda lagging"
      ],
      cons: [
        "Can't Set Herself Up Well, Fully Yang LW but primarily buffs Yin (also dual scaling lol)",
        "Unimpressive Killers (but she can still hit more impressive dmg than anticipated)"
      ]
    }
  },
  { 
    name: "L1 Nue", 
    img: "l1 nue.png", 
    tier: "E", 
    opts: { atk: true, g: true },
    explanation: {
      pros: [
        "Her LW and ST SC are decent",
        "Self Setup is decent. And a proud user of the Prae Card"
      ],
      mixed: [
        "No Killers p0 on her last word"
      ],
      cons: [
        "Very Disjointed Elements outside of Star",
        "Poor Breaking ABility in general"
      ]
    }
  },
  { 
    name: "L1 Okina", 
    img: "l1 okina.png", 
    tier: "E", 
    opts: { dest: true, g: true },
    explanation: {
      pros: [
        "LW Nuke can be quite good"
      ],
      cons: [
        "Self Setup Sucks",
        "Breaks suck, no util"
      ]
    }
  },
  { 
    name: "L1 Sagume", 
    img: "l1 sagume.png", 
    tier: "E", 
    opts: { dbf: true, g: true },
    explanation: {
      pros: [
        "Her Debuffing is Good",
        "Can Nuke (sometimes) (in old ds)"
      ],
      cons: [
        "Abysmal Breaking Ability",
        "Unimpressive Killers",
        "Nothing for Self Setup or Support besides debuffing and a bit of Yang Atk Up"
      ]
    }
  },
  { 
    name: "L1 Sannyo", 
    img: "l1 sannyo.png", 
    tier: "E", 
    opts: { dbf: true, g: true },
    explanation: {
      pros: [
        "Breaks are Decent",
        "Debuffs are Decent"
      ],
      cons: [
        "Killers are pretty Mid",
        "Lacks Atk or Acc Buffs, needs Support"
      ]
    }
  },
  { 
    name: "L1 Toyohime", 
    img: "l1 toyohime.png", 
    tier: "E", 
    opts: { atk: true, g: true },
    explanation: {
      pros: [
        "The Premiere Event Farmer, one of the Best in her Field",
        "Wide Killer Range, Good amount of Self Buffs & Proud User of PraeCard",
        "One of the best AoE Spellcards in the Game. This AoE is so good it's better than half of D tier's LWs"
      ],
      mixed: [
        "Good killers are secondary on her LW"
      ],
      cons: [
        "Breaks are Ultra Shit",
        "No Support"
      ],
      extra: [
        "She has a good amount of main story farms and she's one of the best purple heart slaves in the game. Truly a queen of queens."
      ]
    }
  },
  { 
    name: "L1 Tsukasa", 
    img: "l1 tsukasa.png", 
    tier: "E", 
    opts: { dbf: true, g: true },
    explanation: {
      pros: [
        "Hilariously Powerful AoE SC, Great LW",
        "Killers are actually usable",
        "Breaking ability is decent, but..."
      ],
      boons: [
        "EBR Shill"
      ],
      mixed: [
        "RNG Anoms",
        "Debuffing Ability is quite mid"
      ],
      cons: [
        "Almost No Self Setup",
        "ST LW"
      ],
      extra: [
        "What if nuking star ex was a unit?"
      ]
    }
  },
  { 
    name: "L1 Yuuma", 
    img: "l1 yuuma.png", 
    tier: "E", 
    opts: { atk: true, g: true },
    explanation: {
      pros: [
        "Gains P from all anoms",
        "Gensokyo Killer"
      ],
      cons: [
        "I could sit here and talk about how she has built in yin def down or something but the rest of her kit is just not worth talking about this unit solely exists as a meme and LW nuke.",
        "If the above is too much her SCs do nothing and she doesn't set herself up well, praecard aside"
      ]
    }
  },
  // Yukkuri
  { 
    name: "Aa Sanae", 
    img: "Aa Sanae.png", 
    tier: "Yukkuri", 
    opts: { dest: true, y: true },
    explanation: {
      pros: [
        "HILARIOUSLY capable meme dmg",
        "Crit Dmg + Atk wowie"
      ]
    }
  },
  { 
    name: "Aa Cirno", 
    img: "yukkuri cirno.png", 
    tier: "Yukkuri", 
    opts: { atk: true, y: true },
    explanation: {
      pros: [
        "Wait, she has the budget Mima skill and p0 killers? Ummmm???"
      ]
    }
  },
  { 
    name: "Aa Reimu", 
    img: "yukkuri reimu.png", 
    tier: "Yukkuri", 
    opts: { dest: true, y: true },
    explanation: {
      pros: [
        "Crit Dmg!!!"
      ]
    }
  },
  { 
    name: "Aa Yuyuko", 
    img: "Aa Yuyuko.png", 
    tier: "Yukkuri", 
    opts: { dbf: true, y: true },
    explanation: {
      pros: [
        "Debuff!!!!!!!!!!!"
      ]
    }
  },
  { 
    name: "Aa Remilia", 
    img: "Aa remilia.png", 
    tier: "Yukkuri", 
    opts: { tec: true, y: true },
    explanation: {
      pros: [
        "Crit Dmg!! And non-0 support!!"
      ]
    }
  },
  { 
    name: "Aa Youmu", 
    img: "Aa youmu.png", 
    tier: "Yukkuri", 
    opts: { tec: true, y: true },
    explanation: {
      pros: [
        "A selfish yukkuri with 10% agi scale??",
        "Excellent."
      ]
    }
  },
  { 
    name: "Aa Flandre", 
    img: "Aa flandre.png", 
    tier: "Yukkuri", 
    opts: { spd: true, y: true },
    explanation: {
      pros: [
        "She has the mugetsu resonance btw.",
        "All her inline buffs are guaranteed for some reason and she has kinda a crazy amount of them (why a13 seiga is good)"
      ],
      mixed: [
        "And ST Lw. Why did they make a spd yukkuri whatl"
      ]
    }
  },
  { 
    name: "Aa Alice", 
    img: "Aa alice.png", 
    tier: "Yukkuri", 
    opts: { supp: true, y: true },
    explanation: {
      pros: [
        "Has more party P and supp than her dumpling gf"
      ]
    }
  },
  { 
    name: "Aa Marisa", 
    img: "yukkuri marisa.png", 
    tier: "Yukkuri", 
    opts: { supp: true, y: true },
    explanation: {
      pros: [
        "Party Crit Atk Up & some small P support"
      ]
    }
  }
];
