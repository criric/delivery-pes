export function Bag(){
    return (
        <div className="flex">
            <div>
                <div>
                    <form action="" className="flex flex-col gap-4">
                        <input type="text" placeholder="CEP" className="input-custom w-1/2"/>
                        <input type="text" placeholder="Rua" className="input-custom"/>
                        <div>
                            <input type="text" placeholder="Número" className="input-custom"/>
                            <input type="text" placeholder="Complemento" className="input-custom"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Bairro" className="input-custom"/>
                            <input type="text" placeholder="Cidade" className="input-custom"/>
                            <input type="text" placeholder="UF" className="input-custom"/>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}