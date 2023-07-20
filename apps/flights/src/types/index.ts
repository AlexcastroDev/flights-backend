export interface IUserRequest extends Request {
    user: {
        id: number
        email: string
        sub: number
        name: string
        iat: number
        exp: number
    }
}