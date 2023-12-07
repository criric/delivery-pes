import { Plus } from "@phosphor-icons/react";
import { useState } from "react";

export function AddItem() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [managerCPF, setManagerCPF] = useState(''); // Adicionado estado para o CPF do gerente
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
    e.preventDefault();

    // Obtenha o manager_id do CPF do gerente
    try {
      // Gere um id automaticamente
      const response = await fetch('http://localhost:5000/api/itens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...item,
          id: null, // Deixe que o banco de dados gere o id automaticamente
          date_update: date,
        }),
      });

      if (response.ok) {
        console.log('Item criado com sucesso!');
        // Lógica adicional após a criação bem-sucedida, se necessário
      } else {
        console.error('Erro ao criar item:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao criar item:', error);
    }

    // Limpar o estado após a criação ou edição
    setItem({
      id: null,
      name: '',
      description: '',
      category: '',
      price: 0,
    });
  };

  return (
    <div className="bg-base-card p-10 mb-3 rounded">
      <div className="flex items-start gap-2 mb-8">
        <Plus size={22} className="text-yellow-dark" />
        <div>
          <h1>Adicionar Item</h1>
          <h2 className="text-[14px]">Informe os dados do item que deseja adicionar</h2>
        </div>
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
            value={item.price}
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
      <button className='flex gap-1 bg-yellow hover:bg-yellow-dark text-white text-center block px-3 py-2 rounded mt-3' onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}
