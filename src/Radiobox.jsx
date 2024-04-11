export default function Radiobox({title, values, value, setValue, name}) {

  return (
    <div className="wrapper">
      <h3 className="title">{title}</h3>
      {
        values.map(item => (
          <label className="label_title">
            <input 
              type="radio" 
              name={name} 
              value={item.value} 
              checked={value === item.value} 
              onChange={() => setValue(item.value)}
            >
            </input>
            {item.label}
          </label>
        ))
      }
    </div>
  )
}