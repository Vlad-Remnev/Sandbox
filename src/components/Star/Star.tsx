import React, {FC} from "react";

type StarsPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

const Stars:FC<StarsPropsType> =  ({value = 0}) => {
    console.log('Stars render')
        return (
            <div>
                <Star selected={ value > 0 }/>
                <Star selected={ value > 1 }/>
                <Star selected={ value > 2 }/>
                <Star selected={ value > 3 }/>
                <Star selected={ value > 6 }/>
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