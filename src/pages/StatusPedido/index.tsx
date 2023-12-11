import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import deliveryStatus from '../../assets/delivery-status.png';
import { useEffect, useState } from 'react';

export function StatusPedido(){
    const [address, setAddress] = useState({})
    useEffect(() => {
        const fetchAddress = async () => {
            const response = await fetch('http://localhost:5000/api/address')
            const data = await response.json()
            setAddress(data)
        }    
        fetchAddress()
    }, [])
    return (
        <div className='mt-10'>
            <div>
                <h1 className='text-[32px] text-yellow-dark font-bold'>Uhu! Pedido confirmado</h1>
                <p className='text-xl'>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-8 border border-purple-dark rounded-tr-[36px] rounded-bl-[36px] p-10 text-base w-full'>
                    <div className='flex items-center gap-2'>
                        <div className='text-white bg-purple p-2 rounded-full'>
                            <MapPin size={16}  weight='fill'/>
                        </div>
                        <div className='leading-tight'>
                            <h1>Entrega em <b>{address.street}, {address.number}</b></h1>
                            <h2>{address.complement} - Xique-Xique, BA</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-white bg-yellow p-2 rounded-full'>
                            <Timer size={16} weight='fill'/>
                        </div>
                        <div className='leading-tight'>
                            <h1>Previsão de entrega</h1>
                            <h2><b>20 min - 30 min</b></h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='text-white bg-yellow-dark p-2 rounded-full'>
                            <CurrencyDollar size={16} />
                        </div>
                        <div className='leading-tight'>
                            <h1>Pagamento na entrega</h1>
                            <h2><b>Cartão de crédito</b></h2>
                        </div>
                    </div>
                </div>
                <img src={deliveryStatus} alt="" />
            </div>
        </div>
    )
}