import React from 'react'
import './DevItem.css'
function DevItem(props) {
    const { dev } = props
    return (
        <li  className="dev-item">
        <header>
          <img src={dev.avatar_url} alt="avatar"/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil GITHUB</a>
      </li>
    )
}
export default DevItem 
