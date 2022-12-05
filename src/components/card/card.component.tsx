import cardBack from './card_back.jpeg';
import './card.style.css';

type Props = {
    cardClickHandler: Function,
    number: number
}

const Card = ({cardClickHandler, number}: Props) => {
    return (
        <div className='card-container' onClick={(event: React.MouseEvent<HTMLDivElement>) => cardClickHandler(event)}>
            <div className='card' data-fixed='0' data-open='0' data-number={number}>
                <img src={cardBack} alt='' className='card-back'/>
                <div className='card-front'>
                    <p>{number}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;