import React, {FC} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarsPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Stars: FC<StarsPropsType> = ({value = 0, onClick}) => {
    console.log('Stars render')
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    )
}

interface IStar {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

const Star: FC<IStar> = ({selected, onClick, value}) => {
    return <span onClick={() => onClick(value)}>
        {selected ? <b>star </b> : 'star '}
           </span>
}

export default Stars;