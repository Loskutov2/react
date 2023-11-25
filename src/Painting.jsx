import painting from './painting.json';

const options = painting[0]

export function Painting (){
    return(
        <ul>
        {painting.map(option=> 
        <li key={option.id}>
            <img src={option.url} alt="" width="480" />
            <h2>{option.title}</h2>
            <p>Автор: <a href={option.author.url}>{option.author.url}</a>{option.author.tag}</p>
            <p>Ціна: {option.price} грн</p>
            <p>{option.quantity<5?'Закінчується':`Є в наявності (${option.quantity})`}</p>
            <button type="button">Додати в кошик</button>
        </li>)}
        </ul>)
}