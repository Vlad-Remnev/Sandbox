import React from "react";

type StarsPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Stars (props: StarsPropsType) {
    console.log('Stars render')
        return (
            <div>
                <Star selected={ props.value > 0 }/>
                <Star selected={ props.value > 1 }/>
                <Star selected={ props.value > 2 }/>
                <Star selected={ props.value > 3 }/>
                <Star selected={ props.value > 4 }/>
            </div>
        )
}


function Star(props : any) {
    console.log('Star render')
    if (props.selected === true) {
        return <span><b>Star -</b> <Instar /></span>
    } else {
        return <span><i>Star -</i> <Instar /></span>
    }
}

function Instar () {
    console.log('Instar render')
    return (
        <span>
            - prosto //
        </span>
    )
}

export  default  Stars;