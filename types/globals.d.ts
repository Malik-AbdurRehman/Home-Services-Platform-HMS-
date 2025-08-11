export {}

export type Roles = 'customer' | 'admin' | 'merchant'; 

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}