import popular_builds from "../data/popular_builds";
import engravings_list from "../data/engravings_list"
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

    const [ bestEngravings, setBestEngravings ] = useState([])
    const [ worstEngravings, setWorstEngravings ] = useState([])

    useEffect(() => {
        const buildsObj = { }

        popular_builds.forEach((build) => {
            build.build_engravings.forEach((engraving) => {
                if (!([engraving] in buildsObj)) {
                    buildsObj[engraving] = 1
                } else {
                    buildsObj[engraving] += 1
                }
            })
        })

        var sortableTopEngravings = [];
        for (var engraving in buildsObj) {
            sortableTopEngravings.push([engraving, buildsObj[engraving]]);
        }

        sortableTopEngravings.sort(function (a, b) {
            return b[1] - a[1];
        });

        // console.log(sortableTopEngravings)


        const popularEngravingsFullList = []
        popular_builds.forEach((build) => {
            build.build_engravings.forEach((engraving) => {
                if (!popularEngravingsFullList.includes(engraving)) {
                    popularEngravingsFullList.push(engraving)
                }
            })
        })
        const unpopularEngravings = []
        engravings_list.forEach(engraving => {
            if (!popularEngravingsFullList.includes(engraving)) {
                unpopularEngravings.push(engraving)
            }
        })
        // console.log(unpopularEngravings)

        
        setBestEngravings(sortableTopEngravings.slice(0, 10))
        setWorstEngravings(unpopularEngravings)
    }, [])

    return (
        <div className="container text-center top-engravings-container d-sm-flex align-items-center flex-sm-column mt-3">
            <h5 className="note">Note: 90% of this app has been build based on user suggestions. If you have a suggestion, feel free to join my <a className="discord-link" href="https://discord.gg/x82dcfNcjw" alt="Discord link" target="_blank" rel="noreferrer">Discord</a></h5>
            <h2>Top 10 Most Popular Engravings</h2>
            <ul className="col-md-6 list-group">
                {
                    bestEngravings.map((engraving) => {
                        return <li className="list-group-item">{engraving[0]}</li>
                    })
                }
            </ul>
            <h2 className="mt-3">Useless Engravings</h2>
            <ul className="col-md-6 list-group">
                {
                    worstEngravings.map((engraving) => {
                        return <li className="list-group-item">{engraving}</li>
                    })
                }
            </ul>
        </div>

    )
}
export default TopEngravings;