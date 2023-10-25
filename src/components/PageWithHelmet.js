import React from 'react'
import { Helmet } from 'react-helmet'
function PageWithHelmet({title}) {
  return (
   <>
    
    <Helmet>

    <title>{title}</title>

    </Helmet>
   
   
   
   </>
  )
}

export default PageWithHelmet