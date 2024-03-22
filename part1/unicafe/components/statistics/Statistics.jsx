import React from "react";
import StatisticsLine from "../statisticsLine/StatisticsLine";

export default function Statistics({good,neutral,bad,average,positive,allFeedback}) {
  
  if (allFeedback == 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <p>statistics</p>
    <StatisticsLine thead='good' value={good}></StatisticsLine>
  <StatisticsLine thead='neutral' value={neutral}></StatisticsLine>
  <StatisticsLine thead='bad' value={bad}></StatisticsLine>
  <StatisticsLine thead='all' value={allFeedback}></StatisticsLine>
  <StatisticsLine thead='average' value={average}></StatisticsLine>
  <StatisticsLine thead='positive' value={positive}></StatisticsLine>


    </div>
  );
}
