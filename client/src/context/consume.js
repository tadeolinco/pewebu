const consume = (...consumers) => Component => {
  for (const consumer of consumers) {
    Component = consumer(Component)
  }
  return Component
}

export default consume
