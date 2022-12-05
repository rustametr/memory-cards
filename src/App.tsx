import './App.css';
import Card from './components/card/card.component';

const App = (): JSX.Element =>{
  const cardsList = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5].sort(() => {
    return Math.random() - 0.5;
  });


  const cardClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {

    const container: HTMLDivElement = event.currentTarget;
    const card = container.querySelector('.card') as HTMLElement;

    const allCards = card.closest('.cards-container')?.querySelectorAll('.card');

    if(typeof(allCards) == 'object'){
      for(let i=0; i<allCards.length; i++){
        if(allCards[i].getAttribute('data-fixed') == '0' && allCards[i].getAttribute('data-open') == '1' && allCards[i].getAttribute('data-number') == card.getAttribute('data-number')){ // some card is opened but not fixed

          allCards[i].setAttribute('data-fixed', '1');
          card.setAttribute('data-fixed', '1');
          console.log('yee')
          
        }else if(allCards[i].getAttribute('data-open') == '1' && allCards[i].getAttribute('data-fixed') == '0' && allCards[i].getAttribute('data-number') != card.getAttribute('data-number')){
          // allCards[i].setAttribute(`style`, `transform: rotateY(0)`);
          allCards[i].setAttribute(`style`, `transform: rotateY(0)`);
          allCards[i].setAttribute('data-open', '0');
        }
      }
    }

    card.style.transform = 'rotateY(180deg)';
    card.setAttribute('data-open', '1');
    
    // console.log(typeof(allCards) == 'object')
    // console.log(card.style.transform)
    // card.setAttribute('data-fixed', '0');
  }


  return (
    <div className="App">
      <div className='cards-container'>
        {cardsList.map((num: number, index: number) => {
          return <Card cardClickHandler={cardClickHandler} number={num} key={index}/>
        })}
      </div>
    </div>
  );
}

export default App;
