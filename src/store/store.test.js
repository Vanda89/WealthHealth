import { store } from './store'

describe('Redux Store', () => {
  it('should be defined', () => {
    expect(store).toBeDefined()
  })

  it('should be configured with a persisted reducer', () => {
    const state = store.getState()
    expect(state.user).toBeDefined()
  })

  it('State should be serializable into JSON', () => {
    const state = store.getState()
    const serializedState = JSON.stringify(state)
    expect(serializedState).toBeDefined()
  })

  it('State should not throw error when deserializing from JSON', () => {
    const state = store.getState()
    const serializedState = JSON.stringify(state)
    const deserializedState = JSON.parse(serializedState)
    expect(deserializedState).toBeDefined()
    expect(deserializedState).toEqual(state)
  })
})
