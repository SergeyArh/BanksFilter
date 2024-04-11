

export default function Offer({data, banks, valuesOfEstate, valuesOfBuilding}) {

  const filterBank = banks.find(item => item.id === data.bankId);
  const typeOfBuilding = data.requirements.find(obj => obj.key === 'PROPERTY_TYPE').value
  const filterBuilding = valuesOfBuilding.filter(item => item.value === typeOfBuilding);
  const filterEstate = valuesOfEstate.find(item => item.value === data.product);

  return (
    <div className="offer">
      <div className="offer_title">
        <div className="offer_title_info">
          <h3 className="offer_text_title">{filterBank.name}</h3>
          <h6 className="offer_text_item">{filterEstate?.label}</h6>
        </div>
          <img src={filterBank.url} alt="logo"></img>
      </div>
     <div className="offer_prompt">
      <h6 className="offer_text_item">Твоя лучшая ставка</h6>
     </div>
     <div className="offer_keys">
        <div className="offer_rate"> 
          <h6 className="offer_text_item gray">Ставка</h6>
          <h1 className="offer_text_title">{(data.rate * 100).toFixed(2)}%</h1>
        </div>
        <div className="offer_rate"> 
          <h6 className="offer_text_item gray">Макс. кредит</h6>
          <h1 className="offer_text_title">{(data.maxAmount / 1000000).toFixed(1)} млн ₽</h1>
        </div>
        <div className="offer_rate"> 
          <h6 className="offer_text_item gray">Взнос от</h6>
          <h1 className="offer_text_title">{Math.round(data.minInitialPayment * 100)}%</h1>
        </div>
     </div>
     <button className="offer_button">Подробнее</button>
    </div>
  )
}