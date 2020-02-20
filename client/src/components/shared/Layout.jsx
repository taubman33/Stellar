import React from 'react'

//props.children is really interesting
const Layout = props => (
  <div>
  <div className = "header">
  <h4>Welcome to the secret Users section!</h4>
    </div>

    
    {props.children}

  
    </div>
)

export default Layout