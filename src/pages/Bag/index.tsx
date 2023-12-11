import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash, X } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import pixLogo from '../../assets/pix.svg'
import Modal from '../Home/components/Modal';

export function Bag(){
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [selectedButton, setSelectedButton] = useState(null);
    const [open, setOpen] = useState(false)

    const [cep, setCep] = useState('');
    const [street, setRua] = useState('');
    const [number, setNumero] = useState('');
    const [complement, setComplemento] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:5000/api/address', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: '12345678910',
            cep,
            street,
            number,
            complement,
          }),
        });
  
        if (response.ok) {
          // Trate a resposta de sucesso aqui
          console.log('Endereço enviado com sucesso!');
        } else {
          // Trate erros aqui
          console.error('Erro ao enviar o endereço');
        }
      } catch (error) {
        console.error('Erro durante a requisição:', error);
      }
    };

    const handleButtonClick = (buttonName) => {
      if (selectedButton === buttonName) {
        // Se o botão clicado já está selecionado, deseleciona
        setSelectedButton(null);
      } else {
        // Se o botão clicado não está selecionado, seleciona
        if(buttonName === 'dinheiro'){
            setOpen(true)
        }
        setSelectedButton(buttonName);
      }
    };
    
    const totalPriceItems = cartItems.reduce((acc, value) => {
        const quantity = quantities[value.id] || 1;
        acc += value.price * quantity;
        return acc;
      }, 0);
    

    const handleItemAmount = (productId, newAmount) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [productId]: newAmount,
        }));
    };

    const totalPrice = totalPriceItems + 3.5
    useEffect(() => {
        // Função para obter os itens do carrinho
        const fetchCartItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/cart');
            if (response.ok) {
            const data = await response.json();
            setCartItems(data);
            } else {
            console.error('Erro ao obter itens do carrinho:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao obter itens do carrinho:', error);
        }
        };

        // Chamar a função para obter os itens do carrinho
        fetchCartItems();
    }, []);

    const deleteCartItem = async (cartItemId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/cart/${cartItemId}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            // Atualizar o estado do carrinho após a exclusão
            const updatedCartItems = cartItems.filter(item => item.id !== cartItemId);
            setCartItems(updatedCartItems);
      
            console.log(`Item do carrinho ${cartItemId} excluído com sucesso.`);
          } else {
            console.error('Erro ao excluir item do carrinho:', response.statusText);
          }
        } catch (error) {
          console.error('Erro ao excluir item do carrinho:', error);
        }
      };
    
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
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-12 gap-3">
                                <input
                                type="text"
                                placeholder="CEP"
                                className="input-custom col-span-4"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                />
                                <input
                                type="text"
                                placeholder="Rua"
                                className="input-custom col-span-12"
                                value={street}
                                onChange={(e) => setRua(e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-12 gap-3">
                                <input
                                type="text"
                                placeholder="Número"
                                className="input-custom col-span-4"
                                value={number}
                                onChange={(e) => setNumero(e.target.value)}
                                />
                                <input
                                type="text"
                                placeholder="Complemento"
                                className="input-custom col-span-8"
                                value={complement}
                                onChange={(e) => setComplemento(e.target.value)}
                                />
                            </div>
                            <button type="submit" className='bg-yellow hover:bg-yellow-dark text-white text-center block w-full py-3 rounded'>Salvar Endereço</button>
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
                            <button
                                className={`button-custom ${selectedButton === 'creditCard' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('creditCard')}
                            >
                                <CreditCard size={22} className="text-purple" />
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button
                                className={`button-custom ${selectedButton === 'debitCard' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('debitCard')}
                            >
                                <Bank size={22} className="text-purple"/>
                                CARTÃO DE DÉBITO
                            </button>
                            <button
                                className={`button-custom ${selectedButton === 'pix' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('pix')}
                            >
                                {/* <Money size={22} className="text-purple"/> */}
                                <img src={pixLogo} alt="" />
                                PIX
                            </button>
                            <button
                                className={`button-custom ${selectedButton === 'dinheiro' ? 'selected' : ''}`}
                                onClick={() => handleButtonClick('dinheiro')}
                            >
                                <Money size={22} className="text-purple"/>
                                DINHEIRO
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-base-card p-10 col-span-5 flex flex-col rounded-tr-[44px] rounded-bl-[44px] flex flex-col justify-between">
                    <div>
                        {cartItems.map(product => {
                            const quantity = quantities[product.id] || 1;
                            return (
                                <div key={product.id} className='flex justify-between items-start border-b-[1px] border-base-button pb-6 mb-6'>
                                    <div className='flex items-center'>
                                        <div>
                                            <h2 className='font-bold text-xl mb-2'>{product.name}</h2>
                                            <div className='flex gap-2'>
                                                <input
                                                    value={quantity}
                                                    type="number"
                                                    className='h-8 text-center w-14 bg-base-button rounded'
                                                    min="0"
                                                    onChange={(e) => handleItemAmount(product.id, parseInt(e.target.value, 10))}
                                                />
                                                <button className='button-custom text-purple bg-base-button hover:bg-base-hover p-2' onClick={() => deleteCartItem(product.id)}>
                                                    <Trash size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='font-bold text-base text-base-text'>R$ {(product.price * quantity).toFixed(2)}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <div>
                            <div className='flex justify-between mb-3'>
                                <h3 className='text-sm'>Total de itens</h3>
                                <h3>R$ {totalPriceItems.toFixed(2)}</h3>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <h3 className='text-sm'>Entrega</h3>
                                <h3>R$ 3.50</h3>
                            </div>
                            <div className='flex justify-between font-bold text-xl mb-6'>
                                <h3>Total</h3>
                                <h3>R$ {totalPrice.toFixed(2)}</h3>
                            </div>
                        </div>
                        <NavLink className='bg-yellow hover:bg-yellow-dark text-white text-center block w-full py-3 rounded' to="/client/status">
                            CONFIRMAR PEDIDO
                        </NavLink>
                    </div>
                </div>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='w-72'>
                    <div className='flex justify-between items-center mb-3'>
                        <h1 className="font-bold text-2xl">Precisa de troco?</h1>
                        <X className='hover:cursor-pointer' size={22} onClick={() => setOpen(false)}/>
                    </div>
                    <div>
                        <input type="text" placeholder='Informe seu troco' className="input-custom w-full"/>
                    </div>
                    <button className='flex gap-1 bg-yellow hover:bg-yellow-dark text-white text-center block px-3 py-2 rounded mt-3' type="submit" onClick={() => setOpen(false)}>
                        Confirmar
                    </button>
                </div>
            </Modal>
        </div>
    )
}