import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, image, category, title, price } = product;
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-2 relative overflow-hidden group transition rounded-md shadow-sm'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
                    </div>
                    <div className='absolute top-2 right-11 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <button onClick={() => addToCart(product, id)}>
                            <div className='flex justify-center items-center text-white w-8 h-8 bg-green-800'>
                                <BsPlus className='text-3xl' />
                            </div>
                        </button>
                        <Link to={`/product/${id}`} className='w-8 h-8 bg-white flex justify-center items-center rounded-sm text-green-700 drop-shadow-xl border border-[#e9e9e9]'>
                            <BsEyeFill />
                        </Link>
                    </div>
                </div>
            </div>
            {/* {category &title&price area} */}
            <div>
                <div className='text-sm capitalize text-gray-500 mb-1 text-center'>{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1 truncate text-gray-600'>{title}</h2>
                </Link>
                <div className='font-semibold text-green-600 text-lg'>${price}</div>
            </div>
        </div>
    )
}

export default Product;