import React from "react";

type AccordionPropsType = {
    titleVal: string,
    collapse: boolean
}

function Accordion (props: AccordionPropsType) {
    console.log('Accordion render')
            return (
                <>
                    <AccordionTitle title = {props.titleVal}/>
                    {props.collapse === false && <AccordionBody/>}
                </>
            )}

function AccordionTitle (props: any) {
    console.log('AccordionTitle render')
    return (
        <h3>
            {props.title}
        </h3>
    )
}

function AccordionBody (props: any) {
    console.log('AccordionBody render')
    return (
        <ul>
            <li>Privet</li>
            <li>Privet</li>
            <li>Privet</li>
        </ul>
    )
}

export  default  Accordion;