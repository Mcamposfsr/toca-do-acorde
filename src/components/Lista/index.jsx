const Lista = ({itens}) => {
    return(
        <ul className="list-disc flex flex-col gap-[.5em]">
            {itens.map((texto)=>
            <li className="text-texto text-[1.5em] ml-[2%]" key={texto}>{texto}</li>)}
        </ul>
    )
}

export default Lista