import popular_builds from "../data/popular_builds";
import engravingsList from "../data/engravingsList"
import { useState, useEffect } from "react";

function TopEngravings() {

    const [bestEngravings, setBestEngravings] = useState([])
    const [worstEngravings, setWorstEngravings] = useState([])

    useEffect(() => {
        const buildsObj = {}

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
        engravingsList.forEach(engraving => {
            if (!popularEngravingsFullList.includes(engraving.name)) {
                unpopularEngravings.push(engraving.name)
            }
        })
        // console.log(unpopularEngravings)


        setBestEngravings(sortableTopEngravings.slice(0, 10))
        setWorstEngravings(unpopularEngravings)
    }, [])

    return (
        <div className="container text-center top-engravings-container d-sm-flex align-items-center flex-sm-column mt-3">
            <h5 className="note">Note: 90% of this app has been built based on user suggestions. If you have a suggestion, feel free to join my <a className="discord-link" href="https://discord.gg/x82dcfNcjw" alt="Discord link" target="_blank" rel="noreferrer">Discord</a></h5>
            <h2>Top 10 Most Popular Engravings</h2>
            <ul className="col-md-6 list-group">
                {
                    bestEngravings.map((engraving) => {
                        return <li className="list-group-item" title="test">{engraving[0]}</li>
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