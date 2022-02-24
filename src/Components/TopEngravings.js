import popular_builds from "../data/popular_builds";
import { useState, useEffect } from "react";
const commonEngravings = [
    "Grudge",
    "Cursed Doll",
    "Keen Blunt Weapon",
    "Adrenaline",
    "Master of Ambush",
    "Spirit Absorption",
    "Raid Captain",
    "Hit Master",
    "Precise Dagger",
    "Awakening"
]

function TopEngravings() {

    // useEffect(() => {
    //     const buildsObj = { Adrenaline: 0 }

    //     popular_builds.forEach((build) => {
    //         build.build_engravings.forEach((engraving) => {
    //             if (!([engraving] in buildsObj)) {
    //                 buildsObj[engraving] = 0
    //             } else {
    //                 buildsObj[engraving] += 1
    //             }

    //         })
    //     })

    //     var sortable = [];
    //     for (var engraving in buildsObj) {
    //         sortable.push([engraving, buildsObj[engraving]]);
    //     }

    //     sortable.sort(function (a, b) {
    //         return a[1] - b[1];
    //     });
    //     console.log("sortable",sortable)
    // }, [])

    return (
        <div className="container text-center top-engravings-container">
            <h2 className="note">Note: 90% of this app has been build based on user suggestions. If you have a suggestion, feel free to join my <a className="discord-link" href="https://discord.gg/x82dcfNcjw" alt="Discord link" target="_blank" rel="noreferrer">Discord</a></h2>
            <h1>Top 10 Most Popular Engravings</h1>
            {
                commonEngravings.map((engraving) => {
                    return <h2>{engraving}</h2>
                })
            }
        </div>
    )
}
export default TopEngravings;