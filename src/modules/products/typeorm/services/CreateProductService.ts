import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';
import Product from '../entities/Products';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExist = await productsRepository.findByName(name);

    if (productExist) {
      throw new AppError('There is already one products with this name');
    }

    const product = await productsRepository.create({
      name,
      price,
      quantity,
    });

    await productsRepository.save(product);
    return product;
  }
}

export default CreateProductService;
