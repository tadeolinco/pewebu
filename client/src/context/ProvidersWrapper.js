import React from 'react'

const ProvidersWrapper = ({ children, providers }) => {
  let Component = children
  for (const Provider of providers) {
    Component = <Provider>{Component}</Provider>
  }
  return Component
}

export default ProvidersWrapper
