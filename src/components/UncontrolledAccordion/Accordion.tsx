import React, {FC, useState} from "react";

type AccordionPropsType = {
    titleVal: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)


    const toggleList = () => {
        setCollapsed(!collapsed)
    }

console.log('Accordion render')
return (
    <>
        <AccordionTitle title={props.titleVal} onClick={toggleList}/>
        {/*<button onClick={() => {toggleList()}}>Toggle*/}
        {/*</button>*/}
        {collapsed === true && <AccordionBody/>}
    </>
)}

interface IAccordionTitle {
    title: string
    onClick: () => void
}

const AccordionTitle:FC<IAccordionTitle> = ({title, onClick}) => {
    console.log('AccordionTitle render')
    return (
        <h3 onClick={onClick} style={{cursor: 'pointer'}}>
            {title}
        </h3>
    )
}

function AccordionBody(props: any) {
    console.log('AccordionBody render')
    return (
        <ul>
            <li>Privet</li>
            <li>Privet</li>
            <li>Privet</li>
        </ul>
    )
}

export default UncontrolledAccordion;