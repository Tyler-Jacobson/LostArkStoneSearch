// Crit
// Specialization
// Domination
// Swiftness
// Endurance
// Expertise


const popular_builds = [
    {
        build_name: "Mayhem Berserker",
        build_engravings: ["Mayhem", "Master's Tenacity", "Cursed Doll", "Keen Blunt Weapon", "Raid Captain", "Master of Ambush", "Grudge", "Increases Mass"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Technique Berserker",
        build_engravings: ["Berserker's Technique", "Master of Ambush", "Awakening", "Spirit Absorption", "Raid Captain", "Keen Blunt Weapon", "Super Charge", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit/Swiftness"
    },
    {
        build_name: "Blue Warlord Gunlancer",
        build_engravings: ["Combat Readiness", "Barricade", "Awakening", "Spirit Absorption", "Adrenaline", "Stabilized Status", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Red Warlord Gunlancer",
        build_engravings: ["Lone Knight", "Super Charge", "Spirit Absorption", "Master Brawler", "Keen Blunt Weapon", "Adrenaline", "Precise Dagger", "Combat Readiness", "Grudge",  "Cursed Doll"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Judgement Paladin",
        build_engravings: ["Judgment", "Adrenaline", "Raid Captain", "Awakening", "Grudge", "Cursed Doll", "Stabilized Status", "Keen Blunt Weapon"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Aura of Blessing Paladin",
        build_engravings: ["Blessed Aura", "Awakening", "Expert", "Spirit Absorption", "Heavy Armor", "Drops of Ether", "Vital Point Hit", "Judgment"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Deathblow Striker",
        build_engravings: ["Deathblow", "Master of Ambush", "Keen Blunt Weapon", "Adrenaline", "Spirit Absorption", "Grudge",  "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Esoteric Flurry Striker",
        build_engravings: ["Esoteric Flurry", "Master of Ambush", "Keen Blunt Weapon", "Adrenaline", "Spirit Absorption", "Cursed Doll", "Increases Mass", "Grudge"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit/Specialization"
    },
    {
        build_name: "Robust Spirit Soulfist",
        build_engravings: ["Robust Spirit", "Awakening", "Adrenaline", "Master of Ambush", "Grudge", "Cursed Doll", "Increases Mass"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Energy Overflow Soulfist",
        build_engravings: ["Energy Overflow", "Cursed Doll", "Raid Captain", "Precise Dagger", "Adrenaline", "Keen Blunt Weapon", "Grudge"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Taijutsu Scrapper",
        build_engravings: ["Ultimate Skill: Taijutsu", "Adrenaline", "Master of Ambush", "Grudge", "Cursed Doll", "Keen Blunt Weapon"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Shock Training Scrapper",
        build_engravings: ["Shock Training", "Adrenaline", "Master of Ambush", "Spirit Absorption", "Grudge", "Cursed Doll", "Keen Blunt Weapon"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Esoteric Wardancer",
        build_engravings: ["Esoteric Skill Enhancement", "Master of Ambush", "Keen Blunt Weapon", "Adrenaline", "Raid Captain", "Grudge", "Cursed Doll", "Increases Mass", ],
        primary_stat: "Swiftness",
        secondary_stat: "Specialization"
    },
    {
        build_name: "First Intention Wardancer",
        build_engravings: ["First Intention", "Master of Ambush", "Raid Captain", "Keen Blunt Weapon", "Lightning Fury", "Grudge", "Cursed Doll", "Increases Mass"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Enhanced Weapon Deadeye",
        build_engravings: ["Enhanced Weapon", "Master of Ambush", "Adrenaline", "Spirit Absorption", "Keen Blunt Weapon", "Raid Captain", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Pistoleer Deadeye",
        build_engravings: ["Pistoleer", "Master of Ambush", "Adrenaline", "Precise Dagger", "Keen Blunt Weapon", "Ether Predator", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Death Strike Companion Sharpshooter",
        build_engravings: ["Death Strike", "Loyal Companion", "Hit Master", "Keen Blunt Weapon", "Raid Captain", "Grudge", "Cursed Doll"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Firepower Enhancement Artillerist",
        build_engravings: ["Firepower Enhancement", "Adrenaline", "Keen Blunt Weapon", "Hit Master", "Barricade", "Grudge", "Cursed Doll"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Barrage Enhancement Artillerist",
        build_engravings: ["Barrage Enhancement", "Firepower Enhancement", "Barricade", "Hit Master", "Keen Blunt Weapon", "Cursed Doll", "Grudge"], // skipped
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Peacemaker Gunslinger",
        build_engravings: ["Peacemaker", "Hit Master", "Adrenaline", "Keen Blunt Weapon", "Raid Captain", "Spirit Absorption", "Grudge", "Cursed Doll"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Time To Hunt Gunslinger",
        build_engravings: ["Time To Hunt", "Peacemaker", "Keen Blunt Weapon", "Hit Master", "Adrenaline", "Raid Captain", "Cursed Doll", "Grudge"],
        primary_stat: "Swiftness",
        secondary_stat: "Specialization"
    },
    {
        build_name: "Remaining Energy Deathblade",
        build_engravings: ["Remaining Energy", "Super Charge", "Master of Ambush", "Adrenaline", "Keen Blunt Weapon", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Surge Deathblade",
        build_engravings: ["Surge", "Master of Ambush", "Adrenaline", "Sight Focus", "Super Charge", "Keen Blunt Weapon", "Cursed Doll", "Grudge"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Perfect Suppression Shadowhunter",
        build_engravings: ["Perfect Suppression", "Master of Ambush", "Keen Blunt Weapon", "Adrenaline", "Spirit Absorption", "Raid Captain", "Precise Dagger", "Cursed Doll", "Grudge"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Demonic Impulse Shadowhunter",
        build_engravings: ["Demonic Impulse", "Adrenaline", "Hit Master", "Keen Blunt Weapon", "Spirit Absorption", "Raid Captain", "Cursed Doll", "Grudge"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "True Courage Bard",
        build_engravings: ["True Courage", "Keen Blunt Weapon", "Spirit Absorption", "Heavy Armor", "Adrenaline", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Desperate Salvation Bard",
        build_engravings: ["Desperate Salvation", "Expert", "Awakening", "Heavy Armor", "Max MP Increase", "Spirit Absorption", "Drops of Ether"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Igniter Sorceress",
        build_engravings: ["Igniter", "All-Out Attack", "Hit Master", "Precise Dagger", "Adrenaline", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Reflux Sorceress",
        build_engravings: ["Reflux", "Precise Dagger", "Hit Master", "Adrenaline", "All-Out Attack", "Grudge", "Cursed Doll"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    }
]
export default popular_builds;