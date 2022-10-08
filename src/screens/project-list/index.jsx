import React, { useEffect,useState } from 'react'
import List from './list'
import SearchPanel from './search-panel'
import * as qs from 'qs'
import { cleanObject } from '../../utils/index.js';

const apiUrl = process.env.REACT_APP_API_URL

export default function ProjectListScreen() {
  //负责人的ID列表
  const [users, setUsers] = useState([])
  //项目名
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  //保存项目列表数据
  const [list, setList] = useState([])
  //发送请求获取list
  useEffect(() => {
    fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  //页面初始化
  useEffect(() => {
    fetch('http://localhost:3001/users').then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  },[])
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
