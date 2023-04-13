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

         const categoryExists = await Category.findOne({
          where: { name },
        })
        if(categoryExists){
          return resp.status(400).json({ error: 'Category already exists'})
        }

        console.log(categoryExists)
        
        const { id } = await Category.create({ name }, { returning: ['id'] });
        
          return resp.json({ name, id})
    }

    async index(req, resp) {
      const category = await Category.findAll()

      

      return resp.json(category)

    }
}

module.exports = new CategoryController();