
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/solid';
import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';


const ItemCount = () => {

    // Inicializa o estado da quantidade de itens com 1
    const [quantity, setQuantity] = useState(1);
    const { cartItems, setCartItems } = useContext(AppContext)

    // Função para aumentar a quantidade
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Função para diminuir a quantidade
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    };

    const addToCart = () => {

        const updatedCartItems = cartItems + quantity; // Define uma variável para verificar o número total de itens no carrinho
    
        if (updatedCartItems >= 0) {
            setCartItems(updatedCartItems);
        } else {
            setCartItems(0); // Define como 0 se a quantidade for negativa
        }

        setQuantity(1); // Reseta a quantidade para 1 após adicionar ao carrinho

        console.log('cartItems', cartItems)
        console.log('quantity', quantity)
        console.log('updatedCartItems', updatedCartItems)
    }

    return (
        <div className='flex justify-center m-auto flex-col max-w-[15vw] my-10 border-2 min-w-[120px]'>
            <span className='text-center mb-5'>item counter:</span>
            <div className='m-auto flex justify-center space-x-[50%] mb-5'>
                <button onClick={decreaseQuantity}><MinusCircleIcon className=" bg-transparent w-5 text-cyan-950 hover:scale-125 ease-in duration-100" /></button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}><PlusCircleIcon className=" bg-transparent w-5 text-cyan-950 hover:scale-125 ease-in duration-100" /></button>
            </div>
            <button onClick={addToCart} className='bg-slate-800 text-white'>Add to cart</button>
        </div>

    );
};

export { ItemCount };