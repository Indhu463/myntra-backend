import { AppDataSource } from "./../config/database.js";
const productRep = AppDataSource.getRepository("Product");

export const getAllProducts = async (req, res) => {
  const { categoryId, brandId, page, limit, search } = res.locals.query;

  // const where = {};
  // if (brandId && brandId > 0) where.brand = { id: Number(brandId) };
  // if (categoryId && categoryId > 0) where.category = { id: Number(categoryId) };

  // const products = await productRep.find({
  //   where,
  //   relations: {
  //     category: true,
  //     brand: true,
  //   },
  // });

  const query = productRep
    .createQueryBuilder("product")
    .innerJoinAndSelect("product.category", "categories")
    .innerJoinAndSelect("product.brand", "brands");

  if (brandId) {
    query.andWhere("brands.id = :brandId", { brandId: brandId });
  }

  if (categoryId) {
    query.andWhere("categories.id = :categoryId", {
      categoryId: categoryId,
    });
  }

  if (search) {
    query.andWhere("product.name LIKE :search", {
      search: `%${search}%`,
    });
  }

  if (page && limit) {
    query.skip((page - 1) * limit).take(limit);
  }

  const products = await query.getMany();

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      data: products,
    },
  });
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productRep.findOne({ where: { id: id } });

  res.status(200).json({
    status: "success",
    data: {
      data: product,
    },
  });
};
