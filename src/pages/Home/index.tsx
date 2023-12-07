import { Bag, PencilSimple, Trash, X } from '@phosphor-icons/react';
import coffee from '../../assets/coffee.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

export function Home() {
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const isEmployee = location.pathname === '/employee/menu'

    const date = new Date();

    const [item, setItem] = useState({});
  
    const handleNameChange = (e) => {
      setItem({
        ...item,
        name: e.target.value,
      });
    };
  
    const handlePriceChange = (e) => {
        const priceValue = e.target.value;
        const newPrice = priceValue !== '' ? parseFloat(priceValue) : ''; // Evita NaN quando a string está vazia
      
        setItem({
          ...item,
          price: newPrice,
        });
    };
      
  
    const handleDescriptionChange = (e) => {
      setItem({
        ...item,
        description: e.target.value,
      });
    };
  
    const handleCategoryChange = (e) => {
      setItem({
        ...item,
        category: e.target.value,
      });
    };
  
    const handleManagerCPFChange = (e) => {
      setItem({
        ...item,
        manager_id: e.target.value,
      });
    };
      
    const handleSubmit = async (e) => {      
        try {
          const response = await fetch(`http://localhost:5000/api/itens/${item.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...item,
              date_update: date.toISOString(), // Certifique-se de que a data seja serializada corretamente
            }),
          });
      
          if (response.ok) {
            console.log('Item atualizado com sucesso!');
            setOpen(false); // Fechar o modal após a atualização bem-sucedida
          } else {
            console.error('Erro ao atualizar item:', response.statusText);
          }
        } catch (error) {
          console.error('Erro ao atualizar item:', error);
        }

        window.location.reload();
    };

    const handleDelete = async (itemId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/itens/${itemId}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            console.log('Item excluído com sucesso!');
            // Atualizar a lista de produtos após a exclusão, se necessário
            const updatedProducts = products.filter(product => product.id !== itemId);
            setProducts(updatedProducts);
          } else {
            console.error('Erro ao excluir item:', response.statusText);
          }
        } catch (error) {
          console.error('Erro ao excluir item:', error);
        }
      };
      

    const getDataToEdit = async (id) => {
        const response = await fetch(`http://localhost:5000/api/itens/${id}`)
        const data = await response.json()
        return data
    }

    const OpenModalToEdit = async (itemId) => {
        const data = await getDataToEdit(itemId);
        setItem(data);
        setOpen(true);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/itens')
            const data = await response.json()
            setProducts(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1 className="font-bold text-2xl">Cardápio</h1>
            <div className='flex flex-wrap gap-8 mt-2'>
                {products.map(product => {
                    return (
                        <div key={product.id} className="bg-base-card p-5 flex flex-col justify-between w-64 gap-2 rounded-tr-[36px] rounded-bl-[36px]">
                            {isEmployee && 
                                <button className='text-base-subtitle rounded ms-auto' onClick={() => handleDelete(product.id)}>
                                    <Trash size={22} weight='fill' className='mx-auto'/>
                                </button>
                            }
                            <div className='flex justify-between items-center w-full'>
                                <h2 className='font-bold text-xl'>{product.name}</h2>
                                <div className='bg-yellow-light rounded-full text-xs text-yellow-dark py-1 px-2 font-bold'>
                                    {product.category.toUpperCase()}
                                </div>
                            </div>
                            <p className='text-sm text-base-label'>{product.description}</p>
                            <div className='w-full flex justify-between mt-3'>
                                <p className='font-bold text-2xl text-base-text'><span className='font-normal text-sm'>R$</span>{product.price.toFixed(2)}</p>
                                <div className='flex gap-2'>
                                    <button className='bg-purple-dark text-white p-2 rounded hover:bg-purple'>
                                        <Bag size={22} weight='fill' className='mx-auto'/>
                                    </button>
                                    {isEmployee && 
                                        <>
                                            <button className='bg-purple-dark text-white p-2 rounded hover:bg-purple' onClick={() => OpenModalToEdit(product.id)}>
                                                <PencilSimple size={22} weight='fill' className='mx-auto'/>
                                            </button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='flex justify-between items-center mb-3'>
                    <h1 className="font-bold text-2xl">Editar Item</h1>
                    <X className='hover:cursor-pointer' size={22} onClick={() => setOpen(false)}/>
                </div>
                <form action="" className="flex flex-col gap-4">
                    <div className="grid grid-cols-12 gap-3">
                        <input
                            type="text"
                            placeholder="Nome"
                            className="input-custom col-span-6"
                            onChange={handleNameChange}
                            value={item.name}
                        />
                        <input
                            type="text"
                            placeholder="Preço"
                            className="input-custom col-span-6"
                            onChange={handlePriceChange}
                            value={item.price !== '' ? item.price : ''}
                        />
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        <input
                            type="text"
                            placeholder="Descrição"
                            className="input-custom col-span-12"
                            onChange={handleDescriptionChange}
                            value={item.description}
                        />
                    </div>
                    <div className="grid grid-cols-12 gap-3">
                        <select
                            name="category"
                            id=""
                            onChange={handleCategoryChange}
                            value={item.category}
                            className='input-custom col-span-6'
                        >
                            <option value="">-</option>
                            <option value="Café">Café</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Salgados">Salgados</option>
                            <option value="Doces">Doces</option>
                        </select>
                        <input
                            type="text"
                            placeholder="CPF do Gerente"
                            className="input-custom col-span-6"
                            onChange={handleManagerCPFChange}
                            value={item.manager_id}
                        />
                    </div>
                </form>
                <button className='flex gap-1 bg-yellow hover:bg-yellow-dark text-white text-center block px-3 py-2 rounded mt-3' type="submit" onClick={(e) => handleSubmit(e)}>
                    Editar
                </button>
            </Modal>
        </div>
    )
}