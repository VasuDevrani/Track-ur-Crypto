import React from 'react'
import Feed from './Feed';

export default function Content(props) {
  return (
    <div className='content'>
        {
        props.curList.length ? (
            // console.log("hello")
            <Feed curList={props.curList}/>
        ):(
            <p style={{color: 'white', fontSize: '30px', backgroundColor: 'black', textAlign: 'center', marginTop: '30px'}}>Nothing to display</p>
        ) 
        }
    </div>
  )
}
