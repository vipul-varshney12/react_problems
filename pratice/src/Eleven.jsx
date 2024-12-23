import React from 'react'

const Eleven = () => {

    let  quotes=[
        "Avoid  the  day when we","  initialized  the  extraordinary "," part  of  the  life  when you  want to perfporm well as  well as the  context  part pf  the  life"
    ];
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const quote=quotes[randomIndex];
  return (
    <div>
        {quote}
    </div>
  )
}
export default Eleven
/*
let  qoyes=[

];
const  randomIndex=Math.floor(Math.random()*quotes.length);
vonst  quote=quotes(randomIndex);
*/