


import React from 'react'
import TechHavenProductList from './TechHavenProductList'
import TechHavenStoreCard from './TechHavenStoreCard'

const TechHaven = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl grid grid-cols-[1fr_2.5fr] gap-6 items-center my-6">
        <TechHavenStoreCard/>
        <TechHavenProductList/>
      </div>
    </div>
  )
}

export default TechHaven
