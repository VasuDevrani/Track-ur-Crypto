import React from 'react'
import './Item.css'

export default function Item(props) {
  return (
    <div className='itemList' style={{color: 'white'}}>
        <div className="listCont cont1">{props.name}</div>
        <div className="listCont cont2">{props.symbol}</div>
        <div className="listCont cont3"><img src={props.image} alt="..." /></div>
        <div className="listCont cont4">${props.price}</div>
        <div className="listCont cont5">${props.volume}</div>
        <div className="listCont cont6" style={props.priceChange>0 ? {color: 'green'}:{ color: 'red'}} >{props.priceChange}</div>
    </div>
  )
}
