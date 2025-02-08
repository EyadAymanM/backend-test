import { productModel } from "./product.model.js"

export const addProduct = async (req, res) => {
  try {
    const addedProduct = await productModel.create(req.body)
    res.status(201).json({ message: "Product added Successfully", data: addedProduct })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getProducts = async (req, res) => {
  try {
    const page = req.query.page - 1;
    const products = await productModel.find().limit(10).skip(page * 10);
    if (products.length == 0) return res.status(404).json({ message: "Requested Page has no products", page: page + 1 })
    res.status(200).json({ message: "Success", page: page + 1, data: products })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id)
    if (!product) return res.status(404).json({ message: "No product found with Provided Id" })
    res.status(200).json({ message: "Success", data: product })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    if (!product) return res.status(404).json({ message: "No product found with Provided Id" });
    res.status(203).json({ message: "Product updated Successfully", data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ message: "No product found with Provided Id" });
    res.status(204).json({ message: "Product deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}