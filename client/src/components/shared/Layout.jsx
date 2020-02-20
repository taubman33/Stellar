import React from 'react'

//props.children is really interesting
const Layout = props => (
  <div>
  <div className = "header">
    <h1>Users</h1>
    </div>

    
    {props.children}

  
    </div>
)

export default Layout