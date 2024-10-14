import { describe, it, expect } from 'vitest'
import userReducer, { addUser } from './userSlice'
import { configureStore } from '@reduxjs/toolkit'
describe('userSlice', () => {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  })

  it('should handle initial state', () => {
    const initialState = {
      firstName: '',
      lastName: '',
      startDate: '',
      dateOfBirth: '',
      street: '',
      city: '',
      addressState: '',
      zipCode: '',
      department: '',
      users: [],
      loading: 'idle',
      error: null,
    }
    expect(store.getState().user).toEqual(initialState)
  })

  it('should handle addUser', async () => {
    const userData = { firstName: 'John', lastName: 'Doe' }

    // Dispatch the action and use unwrap to get the payload value
    const action = await store.dispatch(addUser(userData))

    if (addUser.fulfilled.match(action)) {
      const nextState = store.getState().user

      // Check that the user has been added to the user list
      expect(nextState.users).toContainEqual(userData)
      expect(nextState.loading).toBe('idle')
      expect(nextState.error).toBe(null)
    } else {
      // Handle the error case
      const nextState = store.getState().user
      expect(nextState.loading).toBe('idle')
      expect(nextState.error).toBe(action.payload.error)
    }
  })
})
