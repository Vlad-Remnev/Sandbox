import React, {FC, useState} from "react";

interface RatingPropsType {

}

interface StarPrototype {
    selected: boolean,
    value: 1 | 2 | 3 | 4 | 5,
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

const UncontrolledStar = () => {
    let [val, setVal] = useState(0)


    console.log('Stars render')
    return (
        <div>
            <Star selected={val > 0} setValue={setVal} value={1}/>
            <Star selected={val > 1} setValue={setVal} value={2}/>
            <Star selected={val > 2} setValue={setVal} value={3}/>
            <Star selected={val > 3} setValue={setVal} value={4}/>
            <Star selected={val > 4} setValue={setVal} value={5}/>
        </div>
    )
}


const Star: FC<StarPrototype> = ({selected, setValue, value}) => {
    console.log('Star render')
    // return props.selected ? <span onClick={props.onClick}><b>Star</b></span> : <span onClick={props.onClick}><i>Star</i></span>
    return <span onClick={() => setValue(value)}>
        {selected ? <b>star </b> : 'star '}
    </span>
}

export default UncontrolledStar;