export const validateSchema = (schema) =>(request,resp,next) => {
    try {
        schema.parse(request.body)
        next()
    } catch (error) {

        return resp.status(400).json({error:error.errors.map((error)=>error.message)})
    }
}