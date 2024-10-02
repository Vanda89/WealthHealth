import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

export const addUser = createAsyncThunk(
  'user/addUser',
  async (userData, thunkAPI) => {
    try {
      return userData
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = 'pending'
        state.error = null
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = null
        state.users.push(action.payload)
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = 'idle'
        state.users = []
        state.error = action.payload.error
      })
  },
})

export default userSlice.reducer
