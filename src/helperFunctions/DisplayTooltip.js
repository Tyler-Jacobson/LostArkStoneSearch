import React from "react"
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function DisplayTooltip(text, component, display) {

    console.log(display)
    // const engravingDescriptionsRedux = false
    // console.log("Engraving Description", engravingDescriptionsRedux)



    if (display) {
        return (
            <OverlayTrigger placement="right" delay={{ show: 0, hide: 200 }} overlay={
                <Tooltip id="button-tooltip">
                    {text}
                </Tooltip>}>
                {component}
            </OverlayTrigger>
        )
    } else {
        return (
            <>{component}</>
        )
    }

}

export default DisplayTooltip;