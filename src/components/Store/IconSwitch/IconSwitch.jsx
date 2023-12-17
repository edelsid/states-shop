export const IconSwitch = (options) => {
   return (
      <header className="header">
         <button className="material-icons" onClick={options.onSwitch}>
            {options.icon}
         </button>
      </header>
   )
}