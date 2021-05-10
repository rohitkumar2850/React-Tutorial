import React from 'react'

function MemoComp(name) {
    console.log('Renddering memo componenet')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
