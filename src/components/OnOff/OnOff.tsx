import React, {FC} from 'react';
import s from './OnOff.module.css'

interface IOnOff {
    rend: boolean
}

export const OnOff: FC<IOnOff> = ({rend}) => {
    return (
        <div className={s.parent}>
            <div className={rend ? s.greenDot : undefined}>On</div>
            <div className={!rend ? s.redDot : undefined}>Off</div>
            <div className={rend ? s.greenDot : s.redDot}></div>
        </div>
    );
};

