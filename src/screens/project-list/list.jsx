import React from 'react'

export default function List({ list, users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(p => 
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{users.find(user => user.id === p.personId)?.name || '未知'}</td></tr>
          )
        }
          
      </tbody>
    </table>
  )
}
