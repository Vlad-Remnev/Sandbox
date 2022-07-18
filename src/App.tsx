import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Stars, {RatingValueType} from "./components/Star/Star";
// import {OnOff} from "./components/OnOff/OnOff";
import {OnOff} from "./components/OnOff2/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import UncontrolledStar from "./components/UncontrolledStar/Star";


const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [on, setOn] = useState(false)
  return (
      <div className="App">
          {/*<Accordion titleVal = {'Меню'} collapse={false}/>*/}
          {/*<Accordion titleVal = {'Список'} collapse={true}/>*/}
          {/*<Stars value = {0}/>*/}
          {/*<Stars value = {1}/>*/}
          {/*<Stars value = {2}/>*/}
          {/*<Stars value = {3}/>*/}
          {/*<Stars value = {4}/>*/}
          <Stars value={ratingValue} onClick={setRatingValue}/>
          {/*<Stars />*/}
          {/*<OnOff rend={true} />*/}
          {/*<OnOff rend={false} />*/}
          {/*<OnOff rend={true} />*/}
          {/*<OnOff rend={false} />*/}
          {/*<OnOff rend={false} />*/}
          {/*<OnOff rend={false} />*/}
          {/*<OnOff rend={true} />*/}
          <OnOff value={on} onClick={setOn}/>
          {/*<UncontrolledAccordion titleVal={'Меню'}/>*/}
          {/*<UncontrolledStar />*/}
          {/*<UncontrolledAccordion titleVal={'Список'}/>*/}
      </div>
  );
}

export default App;
