export type User = {
  id: string
  name: string
  email: string
  avatar: string | null
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  success: boolean
  message: string
  token: string
  user: User
}
