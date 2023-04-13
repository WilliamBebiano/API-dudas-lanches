const Yup = require('yup')
const Product = require('../models/Products')
const Category = require('../models/Category')
const User = require('../models/User')

class ProductController {
    async store(req,resp) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required().positive().integer(),
            category_id: Yup.number().required(),
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
          
          const { filename: path} = req.file
          const { name, price, category_id} = req.body

          const product = await Product.create({
            name,
            price,
            category_id,
            path,

          })

          return resp.json(product)
    }

    async index(req, resp) {
      const products = await Product.findAll({
        include: [{
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        }]
      })

      

      return resp.json(products)

    }
}

module.exports = new ProductController();