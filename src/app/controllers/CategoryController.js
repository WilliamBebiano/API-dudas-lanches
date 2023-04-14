const Yup = require('yup')
const Category = require('../models/Category')
const User = require('../models/User')

class CategoryController {
    async store(req,resp) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
           
          })
          
          try {
            await schema.validateSync(req.body, { abortEarly: false})
          } catch (err) {
            return resp.status(400).json({ error: err.errors })
          }

          const {admin: isAdmin} = await User.findByPk(req.userId)

          if(!isAdmin){
            return resp.status(401).json()
          }
         
          
         const { name } = req.body

         const { filename: path} = req.file

         const categoryExists = await Category.findOne({
          where: { name },
        })
        if(categoryExists){
          return resp.status(400).json({ error: 'Category already exists'})
        }

        const { id } = await Category.create({ name, path }, { returning: ['id'] });
        
          return resp.json({ name, id})
    }

    async index(req, resp) {
      const category = await Category.findAll()

      

      return resp.json(category)

    }

    async update(req,resp) {
      const schema = Yup.object().shape({
          name: Yup.string(),
         
        })
        
        try {
          await schema.validateSync(req.body, { abortEarly: false})
        } catch (err) {
          return resp.status(400).json({ error: err.errors })
        }

        const {admin: isAdmin} = await User.findByPk(req.userId)

        if(!isAdmin){
          return resp.status(401).json()
        }
       
        
       const { name } = req.body

       const { id } = req.params

       const categories = await Category.findByPk(id)

       if(!categories){
         return resp.status(401).json({ error: 'Make sure that your product ID is correct' })
       }

       let path 
        if(req.file){
          path = req.file.filename
        }

       await Category.update({ name, path }, {where: { id }});
      
        return resp.status(200).json()
  }
}

module.exports = new CategoryController();