import React from 'react'

function Swot({info}) {
    if(Object.keys(info).length>0)
    return (
        <div>
            <h5 className="p-2 mt-2"> SWOT Analysis</h5>
            {
                Object.keys(info).map((k,index)=>{
                  return( <div className="ml-2">
                        <h6>{k}</h6>
                            {info[k].map((v,i)=>{
                                return(<ul><li>{v}</li></ul>)
                            })}
                    </div>
                  )
                })
            }
            <small>credits: SWOT analysis Asset yogi</small>
        </div>
    )
    else
        return(<div></div>)
}

export default Swot
