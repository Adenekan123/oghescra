import React, { ReactNode, useState } from 'react';
import { OutstandingContext } from './outstanding.context';
import { IOutstandingBalance, ITotalOutstandings } from '@/api/outstandings/types';

interface IProps{
    children:ReactNode;
}
const OutstandingProvider = (props:IProps) => {
    const {children} = props;
    const [oustandings,setOutstandings] = useState<IOutstandingBalance[]>([]);
    const [totalOutstandings,setTotalOutstandings] = useState<ITotalOutstandings[]>([]);

    const value = {oustandings,totalOutstandings}
  return (
    <OutstandingContext.Provider value={value}>{children}</OutstandingContext.Provider>
  )
}

export default OutstandingProvider