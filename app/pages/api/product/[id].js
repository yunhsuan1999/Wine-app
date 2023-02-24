import data from '../../../config/wineItems.js';

export default function handler(req, res) {
  const { id } = req.query;
  const targetProduct = data.products.filter((items) => items.id === id);
  res.status(200).json({ 
    targetProduct
   });
}
