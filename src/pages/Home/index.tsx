import { Bag, PencilSimple } from '@phosphor-icons/react';
import coffee from '../../assets/coffee.png';

const products = [
    {
        id: 1,
        name: 'Café',
        description: 'Descrição do produto 1',
        price: 10.00,
        image: coffee,
    },
    {
        id: 2,
        name: 'Café',
        description: 'Descrição do produto 2',
        price: 10.00,
        image: coffee,
    },
    {
        id: 3,
        name: 'Café',
        description: 'Descrição do produto 3',
        price: 10.00,
        image: coffee,
    },
    {
        id: 4,
        name: 'Café',
        description: 'Descrição do produto 4',
        price: 10.00,
        image: coffee,
    },
    {
        id: 5,
        name: 'Café',
        description: 'Descrição do produto 5',
        price: 10.00,
        image: coffee,
    },
    {
        id: 6,
        name: 'Café',
        description: 'Descrição do produto 6',
        price: 10.00,
        image: coffee,
    },
    {
        id: 7,
        name: 'Café',
        description: 'Descrição do produto 7',
        price: 10.00,
        image: coffee,
    },
    {
        id: 8,
        name: 'Café',
        description: 'Descrição do produto 8',
        price: 10.00,
        image: coffee,
    },
    {
        id: 9,
        name: 'Café',
        description: 'Descrição do produto 9',
        price: 10.00,
        image: coffee,
    },
]
export function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl">Cardápio</h1>
            <div className='flex flex-wrap gap-8 mt-2'>
                {products.map(product => {
                    return (
                        <div key={product.id} className="bg-base-card p-5 flex flex-col items-center justify-between w-64 gap-2 rounded-tr-[36px] rounded-bl-[36px]">
                            <img src={product.image} alt=""/>
                            <h2 className='font-bold text-xl'>{product.name}</h2>
                            <p className='text-sm text-base-label text-center'>{product.description}</p>
                            <div className='w-full flex justify-between mt-3'>
                                <p className='font-bold text-2xl text-base-text'><span className='font-normal text-sm'>R$</span>{product.price.toFixed(2)}</p>
                                <div className='flex gap-2'>
                                    <button className='bg-purple-dark text-white p-2 rounded hover:bg-purple'>
                                        <Bag size={22} weight='fill' className='mx-auto'/>
                                    </button>
                                    <button className='bg-purple-dark text-white p-2 rounded hover:bg-purple'>
                                        <PencilSimple size={22} weight='fill' className='mx-auto'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}