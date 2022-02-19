// Crit
// Specialization
// Domination
// Swiftness
// Endurance
// Expertise


const popular_builds = [
    {
        build_name: "Mayhem Berserker",
        build_engravings: ["Mayhem", "Master's Tenacity", "Raid Captain", "Keen Blunt Weapon", "Grudge", "Cursed Doll"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Berserker's Technique",
        build_engravings: ["Berserker's Technique", "Raid Captain", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Stabilized Status"],
        primary_stat: "Specialization",
        secondary_stat: "Crit/Swiftness"
    },
    {
        build_name: "Blue Warlord Gunlancer",
        build_engravings: ["Combat Readiness", "Barricade", "Cursed Doll", "Grudge", "Stabilized Status", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Red Warlord Gunlancer",
        build_engravings: ["Lone Knight", "Combat Readiness", "Grudge", "Super Charge", "Cursed Doll", "Master Brawler"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Judgement Paladin",
        build_engravings: ["Keen Blunt Weapon", "Cursed Doll", "Judgment", "Stabilized Status", "Grudge", "Adrenaline"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Aura of Blessing Paladin",
        build_engravings: ["Awakening", "Drops of Ether", "Vital Point Hit", "Expert", "Blessed Aura", "Judgment"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Deathblow Striker",
        build_engravings: ["Master of Ambush", "Keen Blunt Weapon", "Grudge", "Deathblow", "Cursed Doll", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Esoteric Flurry Striker",
        build_engravings: ["Esoteric Flurry", "Master of Ambush", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Adrenaline"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit/Specialization"
    },
    {
        build_name: "Robust Spirit Soulfist",
        build_engravings: ["Robust Spirit", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Precise Dagger", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Energy Overflow Soulfist",
        build_engravings: ["Energy Overflow", "Raid Captain", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Adrenaline"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Taijutsu Scrapper",
        build_engravings: ["Ultimate Skill: Taijutsu", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Master of Ambush", "Adrenaline"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Shock Training Scrapper",
        build_engravings: ["Master of Ambush", "Shock Training", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Esoteric Wardancer",
        build_engravings: ["Raid Captain", "Keen Blunt Weapon", "Esoteric Skill Enhancement", "Grudge", "Increases Mass", "Adrenaline"],
        primary_stat: "Swiftness",
        secondary_stat: "Specialization"
    },
    {
        build_name: "First Intention Wardancer",
        build_engravings: ["Increases Mass", "First Intention", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Raid Captain"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Enhanced Weapon Deadeye",
        build_engravings: ["Master of Ambush", "Keen Blunt Weapon", "Enhanced Weapon", "Grudge", "Cursed Doll", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Pistoleer Deadeye",
        build_engravings: ["Adrenaline", "Pistoleer", "Keen Blunt Weapon", "Grudge", "Precise Dagger", "Ether Predator"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Death Strike Companion Sharpshooter",
        build_engravings: ["Loyal Companion", "Death Strike", "Increases Mass", "Keen Blunt Weapon", "Grudge", "Hit Master"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Firepower Enhancement Artillerist",
        build_engravings: ["Firepower Enhancement", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Hit Master", "Adrenaline"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Barrage Enhancement Artillerist",
        build_engravings: ["Firepower Enhancement", "Barrage Enhancement", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Hit Master"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Peacemaker Gunslinger",
        build_engravings: ["Peacemaker", "Grudge", "Adrenaline", "Keen Blunt Weapon", "Cursed Doll", "Hit Master"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Time To Hunt Gunslinger",
        build_engravings: ["Time To Hunt", "Peacemaker", "Grudge", "Raid Captain", "Keen Blunt Weapon", "Adrenaline"],
        primary_stat: "Swiftness",
        secondary_stat: "Specialization"
    },
    {
        build_name: "Remaining Energy Deathblade",
        build_engravings: ["Remaining Energy", "Super Charge", "Grudge", "Cursed Doll", "Master of Ambush", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Surge Deathblade",
        build_engravings: ["Surge", "Master of Ambush", "Adrenaline", "Super Charge", "Grudge", "Cursed Doll"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Perfect Suppression Shadowhunter",
        build_engravings: ["Perfect Suppression", "Raid Captain", "Grudge", "Cursed Doll", "Master of Ambush", "Adrenaline"],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Demonic Impulse Shadowhunter",
        build_engravings: ["Demonic Impulse", "Raid Captain", "Keen Blunt Weapon", "Grudge", "Cursed Doll", "Hit Master"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "True Courage Bard",
        build_engravings: ["Keen Blunt Weapon", "Cursed Doll", "True Courage", "Grudge", "Adrenaline"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Desperate Salvation Bard",
        build_engravings: ["Awakening", "Drops of Ether", "Desperate Salvation", "Expert", "Spirit Absorption", "Heavy Armor"],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Igniter Sorceress",
        build_engravings: ["Igniter", "Cursed Doll", "Hit Master", "Grudge", "Precise Dagger", "All-Out Attack"],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Reflux Sorceress",
        build_engravings: ["Reflux", "All-Out Attack", "Grudge", "Cursed Doll", "Precise Dagger", "Hit Master"],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    }
]
export default popular_builds;