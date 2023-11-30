import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react'
export function Bag(){
    return (
        <div className="grid grid-cols-12 gap-8">
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
            <div className="bg-base-card p-10 col-span-5">
                <form action="" className="flex flex-col gap-4">
                    <input type="text" placeholder="CEP" className="input-custom w-1/2"/>
                    <input type="text" placeholder="Rua" className="input-custom"/>
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
        </div>
    )
}