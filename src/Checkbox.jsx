import classNames from "classnames"

export default function Checkbox({title, banks, values, setValue}) {

  function handleClick(id) {
    if (values.includes(id)) {
     return setValue(values.filter(item => item !== id))
    }
    return setValue([id, ...values])
  }

  return (
    <div className="wrapper">
      <h3 className="title">{title}</h3>
      {banks.map(item => (
        <button className={classNames('bank', values.includes(item.id) && 'active')}><img src={item.url} onClick={() => handleClick(item.id)}></img>{item.name}</button>
      ))}
    </div> 
  )
}