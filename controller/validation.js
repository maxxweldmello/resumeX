const Joi = require('@hapi/joi')
const RegisterV = data => {
    const schema = Joi.object({
        username: Joi.string().required().min(10).max(20),
        email: Joi.string().required().min(10).max(40),
        password: Joi.string().required().min(8).max(30),
        confpassword: Joi.string().required().min(8).max(30)
    })
    const { error } = schema.validate(data)
    if (error) return error.details[0].message
}
const LoginV = data => {
    const schema = Joi.object({
        email: Joi.string().required().min(10).max(40),
        password: Joi.string().required().min(8).max(30),
        confpassword: Joi.string().required().min(8).max(30)
    })
    const { error } = schema.validate(data)
    if (error) return error.details[0].message
}
module.exports = { LoginV, RegisterV } 