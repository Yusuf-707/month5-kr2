import * as yup from 'yup'

export const api = yup.object({
    title: yup.string().required("*поле нужно заполнить!").min(10, "*Нужно больше 10").max(255, '*максимум 255'),
    description: yup.string().required("*поле нужно заполнить!").min(10, "*Нужно больше 10").max(255, '*максимум 255'),
    priority: yup.string().required('*заполнить!').notOneOf(['*']),
})