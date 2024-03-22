import React from 'react'

export default function StatisticsLine({thead,value}) {
  return (
    <table>
    <tbody>
      <tr>
        <th>{thead}</th>
        <td>{value}</td>
      </tr>
      </tbody>
      </table>
  )
}
