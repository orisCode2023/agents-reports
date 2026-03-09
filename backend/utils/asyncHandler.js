export default async function asyncHandler(handler) {
    try {
        handler()
    } catch (error) {
        throw error
    }
}