import React from 'react'
import { anecdotes } from './anecdotes'
import { useState } from "react";

export default function Points() {
    let points = Array(anecdotes.length).fill(0);
    const [selected, setSelected] = useState(0);
    const [point, setPoint] = useState([...points]);
    const vote = [...point];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
      function randomAnecdote() {
        let anecdoteRandom = getRandomInt(anecdotes.length);
    
        setSelected(anecdoteRandom);
        /*     console.log(Math.random().toFixed(0)) */
      }

      
  function votes() {
    
    vote[selected] += 1;
   setPoint(vote)
    /* console.log(point);
    console.log(vote); */
  }

  let mostVote = Math.max(...point)
  const found = point.indexOf(mostVote);
  console.log(...point)
  console.log(found)

    return (
    <>

    <div>{anecdotes[selected]}</div>
      <div>has {point[selected]} votes</div>

      <button onClick={votes}> Vote</button>
      <button onClick={randomAnecdote}>Next anecdote</button>

      <div>Anecdote with most votes</div>
      <div> {anecdotes[found]} </div>
      <div>has {mostVote} votes </div>
    </>
  )
}
