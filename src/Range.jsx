import classNames from 'classnames';

export default function Range({title, min, max, unit, popularValues, value, setValue}) {

  const inputClass = classNames('input', (value > max || value < min) && 'withRedBorder');
  const nameOfunit = typeof unit === 'string' ? unit : 'Лет';

  const inputValue = value === null ? "" : String(value)
  

  return (
    <div className="credit">
      <h3 className="title">{title}</h3>
      <div className="input_wrapper">
        <input className={inputClass} type="text" value={inputValue} onChange={e => setValue(Number(e.target.value))}></input>
        <span className="units">{nameOfunit}</span>
        <input className="slider" type="range" min={min} max={max} value={value} onChange={e => setValue(Number(e.target.value))}></input>
      </div>
      
      <div className="buttons_box">
        {
          popularValues.map(item => (
            <button
              className={classNames('button', value === item && 'active')}
              onClick={e => setValue(Number(e.target.value))}
              value={item}
            >
              {item} {typeof unit === 'string' ? unit : unit(item)}
            </button>
          ))
        }
      </div>
    </div>
  );
}