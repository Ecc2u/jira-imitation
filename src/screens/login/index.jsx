import React from 'react'

export default function LoginScreen() {
  
  //发送登录请求
  const login = (param) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then(async response => {
      if (response.ok) {

      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const password = e.target[1].value
    login({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={'password'} />
      </div>
      <button type={'submit'}>登录</button>
    </form>
  )
}
