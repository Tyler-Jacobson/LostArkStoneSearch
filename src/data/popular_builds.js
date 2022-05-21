import root from "./rootEngravingName";

// Crit
// Specialization
// Domination
// Swiftness
// Endurance
// Expertise

const popular_builds = [
    {
        build_name: "Mayhem Berserker",
        build_engravings: [root.Mayhem, root.Masters_Tenacity, root.Cursed_Doll, root.Keen_Blunt_Weapon, root.Raid_Captain, root.Master_of_Ambush, root.Grudge, root.Increases_Mass],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Technique Berserker",
        build_engravings: [root.Berserkers_Technique, root.Master_of_Ambush, root.Awakening, root.Spirit_Absorption, root.Raid_Captain, root.Keen_Blunt_Weapon, root.Super_Charge, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit | Swiftness"
    },
    {
        build_name: "Blue Warlord Gunlancer",
        build_engravings: [root.Combat_Readiness, root.Barricade, root.Awakening, root.Spirit_Absorption, root.Adrenaline, root.Stabilized_Status, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Red Warlord Gunlancer",
        build_engravings: [root.Lone_Knight, root.Super_Charge, root.Spirit_Absorption, root.Master_Brawler, root.Keen_Blunt_Weapon, root.Adrenaline, root.Precise_Dagger, root.Combat_Readiness, root.Grudge,  root.Cursed_Doll],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Judgement Paladin",
        build_engravings: [root.Judgment, root.Adrenaline, root.Raid_Captain, root.Awakening, root.Grudge, root.Cursed_Doll, root.Stabilized_Status, root.Keen_Blunt_Weapon],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Aura of Blessing Paladin",
        build_engravings: [root.Blessed_Aura, root.Awakening, root.Expert, root.Spirit_Absorption, root.Heavy_Armor, root.Drops_of_Ether, root.Vital_Point_Hit, root.Judgment],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Deathblow Striker",
        build_engravings: [root.Deathblow, root.Master_of_Ambush, root.Keen_Blunt_Weapon, root.Adrenaline, root.Spirit_Absorption, root.Grudge,  root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Esoteric Flurry Striker",
        build_engravings: [root.Esoteric_Flurry, root.Master_of_Ambush, root.Keen_Blunt_Weapon, root.Adrenaline, root.Spirit_Absorption, root.Cursed_Doll, root.Increases_Mass, root.Grudge],
        primary_stat: "Swiftness",
        secondary_stat: "Crit | Specialization"
    },
    {
        build_name: "Robust Spirit Soulfist",
        build_engravings: [root.Robust_Spirit, root.Awakening, root.Adrenaline, root.Master_of_Ambush, root.Grudge, root.Cursed_Doll, root.Increases_Mass],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Energy Overflow Soulfist",
        build_engravings: [root.Energy_Overflow, root.Cursed_Doll, root.Raid_Captain, root.Precise_Dagger, root.Adrenaline, root.Keen_Blunt_Weapon, root.Grudge],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Taijutsu Scrapper",
        build_engravings: [root.Ultimate_Skill_Taijutsu, root.Adrenaline, root.Master_of_Ambush, root.Grudge, root.Cursed_Doll, root.Keen_Blunt_Weapon],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Shock Training Scrapper",
        build_engravings: [root.Shock_Training, root.Adrenaline, root.Master_of_Ambush, root.Spirit_Absorption, root.Grudge, root.Cursed_Doll, root.Keen_Blunt_Weapon],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Esoteric Wardancer",
        build_engravings: [root.Esoteric_Skill_Enhancement, root.Master_of_Ambush, root.Keen_Blunt_Weapon, root.Adrenaline, root.Raid_Captain, root.Grudge, root.Cursed_Doll, root.Increases_Mass],
        primary_stat: "Swiftness",
        secondary_stat: "Specialization"
    },
    {
        build_name: "First Intention Wardancer",
        build_engravings: [root.First_Intention, root.Master_of_Ambush, root.Raid_Captain, root.Keen_Blunt_Weapon, root.Lightning_Fury, root.Grudge, root.Cursed_Doll, root.Increases_Mass],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Enhanced Weapon Deadeye",
        build_engravings: [root.Enhanced_Weapon, root.Master_of_Ambush, root.Adrenaline, root.Spirit_Absorption, root.Keen_Blunt_Weapon, root.Raid_Captain, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Pistoleer Deadeye",
        build_engravings: [root.Pistoleer, root.Master_of_Ambush, root.Adrenaline, root.Precise_Dagger, root.Keen_Blunt_Weapon, root.Ether_Predator, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Death Strike Companion Sharpshooter",
        build_engravings: [root.Death_Strike, root.Loyal_Companion, root.Hit_Master, root.Keen_Blunt_Weapon, root.Raid_Captain, root.Grudge, root.Cursed_Doll],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Firepower Enhancement Artillerist",
        build_engravings: [root.Firepower_Enhancement, root.Adrenaline, root.Keen_Blunt_Weapon, root.Hit_Master, root.Barricade, root.Grudge, root.Cursed_Doll],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Barrage Enhancement Artillerist",
        build_engravings: [root.Barrage_Enhancement, root.Firepower_Enhancement, root.Barricade, root.Hit_Master, root.Keen_Blunt_Weapon, root.Cursed_Doll, root.Grudge],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Peacemaker Gunslinger",
        build_engravings: [root.Peacemaker, root.Hit_Master, root.Adrenaline, root.Keen_Blunt_Weapon, root.Raid_Captain, root.Spirit_Absorption, root.Grudge, root.Cursed_Doll],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Time To Hunt Gunslinger",
        build_engravings: [root.Time_To_Hunt, root.Peacemaker, root.Keen_Blunt_Weapon, root.Hit_Master, root.Adrenaline , root.Raid_Captain, root.Cursed_Doll, root.Grudge],
        primary_stat: "Crit",
        secondary_stat: "Specialization"
    },
    {
        build_name: "Remaining Energy Deathblade",
        build_engravings: [root.Remaining_Energy, root.Super_Charge, root.Master_of_Ambush, root.Adrenaline , root.Keen_Blunt_Weapon, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Surge Deathblade",
        build_engravings: [root.Surge, root.Master_of_Ambush, root.Adrenaline , root.Sight_Focus, root.Super_Charge, root.Keen_Blunt_Weapon, root.Cursed_Doll, root.Grudge],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Perfect Suppression Shadowhunter",
        build_engravings: [root.Perfect_Suppression, root.Master_of_Ambush, root.Keen_Blunt_Weapon, root.Adrenaline , root.Spirit_Absorption, root.Raid_Captain, root.Precise_Dagger, root.Cursed_Doll, root.Grudge],
        primary_stat: "Swiftness",
        secondary_stat: "Crit"
    },
    {
        build_name: "Demonic Impulse Shadowhunter",
        build_engravings: [root.Demonic_Impulse, root.Adrenaline , root.Hit_Master, root.Keen_Blunt_Weapon, root.Spirit_Absorption, root.Raid_Captain, root.Cursed_Doll, root.Grudge],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "True Courage Bard",
        build_engravings: [root.True_Courage, root.Keen_Blunt_Weapon, root.Spirit_Absorption, root.Heavy_Armor, root.Adrenaline , root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Desperate Salvation Bard",
        build_engravings: [root.Desperate_Salvation, root.Expert, root.Awakening, root.Heavy_Armor, root.Max_MP_Increase, root.Spirit_Absorption, root.Drops_of_Ether],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Igniter Sorceress",
        build_engravings: [root.Igniter, root.All_Out_Attack, root.Hit_Master, root.Precise_Dagger, root.Adrenaline , root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    },
    {
        build_name: "Reflux Sorceress",
        build_engravings: [root.Reflux, root.Precise_Dagger, root.Hit_Master, root.Adrenaline , root.All_Out_Attack, root.Grudge, root.Cursed_Doll],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Pinnacle Glavier",
        build_engravings: [root.Pinnacle, root.Keen_Blunt_Weapon, root.Increases_Mass, root.Awakening, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Control Glavier",
        build_engravings: [root.Control, root.Master_of_Ambush, root.Adrenaline, root.Raid_Captain , root.Keen_Blunt_Weapon, root.Grudge, root.Cursed_Doll],
        primary_stat: "Crit",
        secondary_stat: "Swiftness"
    },
    {
        build_name: "Hammer of Rage Destroyer",
        build_engravings: [root.Rage_Hammer, root.Super_Charge, root.Master_Brawler, root.Keen_Blunt_Weapon, root.Spirit_Absorption, root.Grudge, root.Cursed_Doll],
        primary_stat: "Crit",
        secondary_stat: "Swiftness | Specialization"
    },
    {
        build_name: "Gravity Training Destroyer",
        build_engravings: [root.Gravity_Training, root.Barricade, root.Master_Brawler, root.Spirit_Absorption, root.Grudge, root.Cursed_Doll],
        primary_stat: "Specialization",
        secondary_stat: "Crit"
    }
]
export default popular_builds;