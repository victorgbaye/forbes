import React from 'react'

function People({people}) {
    return (
        <>
            {people.map((item)=>{
                const {person} =item
                return(
                    <h2>
                       {person.name}
                    </h2>
                )
            })}
        </>
    )
}

export default People
