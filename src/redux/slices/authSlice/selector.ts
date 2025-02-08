import { RootState } from "@/redux/store"

export const selectToken = (state: RootState) => state.auth.token
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated
