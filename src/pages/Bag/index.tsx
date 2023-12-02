import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from '@phosphor-icons/react'
import coffee from '../../assets/coffee.png';

const productsOnBag = [
    {
        id: 1,
        name: 'Café',
        description: 'Descrição do produto 1',
        price: 10.00,
        image: coffee,
    },

]
export function Bag(){
    return (
        <div>
            <h1 className="font-bold text-2xl">Complete seu pedido</h1>
            <div className="grid grid-cols-12 gap-8 mt-2">
                <div className="col-span-7">
                    <div className="bg-base-card p-10 mb-3 rounded">
                        <div className='flex items-start gap-2 mb-8'>
                            <MapPinLine size={22} className='text-yellow-dark'/>
                            <div>
                                <h1>Endereço de Entrega</h1>
                                <h2 className='text-[14px]'>Informe o endereço onde deseja receber seu pedido</h2>
                            </div>
                        </div>
                        <form action="" className="flex flex-col gap-4">
                            <div className="grid grid-cols-12 gap-3">
                                <input type="text" placeholder="CEP" className="input-custom col-span-4"/>
                                <input type="text" placeholder="Rua" className="input-custom col-span-12"/>
                            </div>
                            <div className="grid grid-cols-12 gap-3">
                                <input type="text" placeholder="Número" className="input-custom col-span-4"/>
                                <input type="text" placeholder="Complemento" className="input-custom col-span-8"/>
                            </div>
                            <div className="grid grid-cols-12 gap-3">
                                <input type="text" placeholder="Bairro" className="input-custom col-span-4"/>
                                <input type="text" placeholder="Cidade" className="input-custom col-span-6"/>
                                <input type="text" placeholder="UF" className="input-custom col-span-2"/>
                            </div>
                        </form>
                    </div>
                    <div className='bg-base-card p-10 rounded'>
                        <div className='flex items-start gap-2 mb-8'>
                            <CurrencyDollar size={22} className="text-purple"/>
                            <div>
                                <h1>Pagamento</h1>
                                <h2 className='text-[14px]'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h2>
                            </div>
                        </div>
                        <div className='flex gap-3 justify-between'>
                            <button className='button-custom'>
                                <CreditCard size={22} className="text-purple" />
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button className='button-custom'>
                                <Bank size={22} className="text-purple"/>
                                CARTÃO DE DÉBITO
                            </button>
                            <button className='button-custom'>
                                <Money size={22} className="text-purple"/>
                                PIX
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-card p-10 col-span-5 flex flex-col rounded-tr-[44px] rounded-bl-[44px] flex flex-col justify-between">
                    {productsOnBag.map(product => {
                        return (
                            <div key={product.id} className='flex justify-between items-start border-b-[1px] border-base-button pb-6 mb-6'>
                                <div className='flex items-center'>
                                    <img src={product.image} alt="" className='w-16 h-16 mr-5'/>
                                    <div>
                                        <h2 className='mb-2'>{product.name}</h2>
                                        <div className='flex gap-2'>
                                            <input value={1} type="number" className='h-8 text-center w-14 bg-base-button' min="0"/>
                                            <button className='button-custom text-purple bg-base-button hover:bg-base-hover p-2'>
                                                <Trash size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <p className='font-bold text-base text-base-text'>R$ {product.price.toFixed(2)}</p>
                            </div>
                        )
                    })}
                    <div>
                        <div>
                            <div className='flex justify-between mb-3'>
                                <h3 className='text-sm'>Total de itens</h3>
                                <h3>R$ 29,70</h3>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <h3 className='text-sm'>Entrega</h3>
                                <h3>R$ 29,70</h3>
                            </div>
                            <div className='flex justify-between font-bold text-xl mb-6'>
                                <h3>Total</h3>
                                <h3>R$ 29,70</h3>
                            </div>
                        </div>
                        <button className='bg-yellow hover:bg-yellow-dark text-white w-full py-3 rounded'>
                            CONFIRMAR PEDIDO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}