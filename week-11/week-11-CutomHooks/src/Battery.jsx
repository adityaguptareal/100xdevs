import React from 'react'

function Battery({loading, level, charging, chargingTime, dischargingTime}) {
  return (
    loading ? <p>Loading</p> : <div className="bg-slate-800 text-white font-semibold h-[500px] w-[500px]">
      <p> Battery Level {level}</p>
      <p className='flex'> Battery charging {charging ? <span>is in charging</span>:<span>is not charing</span>}</p>
      <p> Battery chargingTime {chargingTime}</p>
      <p> Battery dischargingTime {dischargingTime}</p>
    </div>
  )
}

export default Battery
