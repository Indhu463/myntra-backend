import { AppDataSource } from "./../config/database.js";
const categoryRep = AppDataSource.getRepository("Category");

export const getAllCategories = async (req, res) => {
  const categories = await categoryRep.find();

  res.status(200).json({
    status: "success",
    results: categories.length,
    data: {
      data: categories,
    },
  });
};
