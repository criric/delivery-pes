import { Plus } from "@phosphor-icons/react";

export function AddItem(){
    return (
        <div className="bg-base-card p-10 mb-3 rounded">
            <div className='flex items-start gap-2 mb-8'>
                <Plus size={22} className='text-yellow-dark'/>
                <div>
                    <h1>Adicionar Item</h1>
                    <h2 className='text-[14px]'>Informe os dados do item que deseja adicionar</h2>
                </div>
            </div>
            <form action="" className="flex flex-col gap-4">
                <div className="grid grid-cols-12 gap-3">
                    <input type="text" placeholder="Nome" className="input-custom col-span-6"/>
                    <input type="text" placeholder="Preço" className="input-custom col-span-6"/>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <input type="text" placeholder="Descrição" className="input-custom col-span-12"/>
                </div>
                <div>
                <label htmlFor="imageUpload" className="block font-bold text-lg text-yellow-dark">
                    Adicione uma imagem
                </label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                />
                </div>
            </form>
        </div>
    )
}