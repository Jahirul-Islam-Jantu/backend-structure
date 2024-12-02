export const UserMiddleware = async (req, res, next) => {
    console.log("Hello from middleware")

    next()
}