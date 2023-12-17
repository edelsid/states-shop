import { CardsView } from './Products/CardsView'
import { ListView } from './Products/ListView'
import { IconSwitch } from './IconSwitch/IconSwitch';
import { useState } from 'react';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  id: 1
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  id: 2
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  id: 3
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  id: 4
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  id: 5
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  id: 6
}];

export const Store = () => {
  const initialState = true;
  const [cardView, setState] = useState(initialState);

  const onSwitch = () => {
    setState(cardView => !cardView);
   }

  return (
    <>
      {cardView ? <IconSwitch icon={"view_list"} onSwitch={onSwitch}/> : 
      <IconSwitch icon={"view_module"} onSwitch={onSwitch}/>}
      {cardView ? <CardsView items={products}/> : <ListView items={products}/>}
    </>
  )
}