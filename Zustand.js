// Zustand notes
// Zustand is available as a package on NPM for use:

npm install zustand

1. First create a store
Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.
  
import { create } from 'zustand'

const useBear = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))

2. Then bind your components, and that's it!
You can use the hook anywhere, without the need of providers. Select your state and the consuming component will re-render when that state changes.
function BearCounter() {
  const bears = useBear((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useBear((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}


