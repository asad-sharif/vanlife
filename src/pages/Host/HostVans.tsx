import React from 'react'
import '../../server'


function HostVans() {

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/host/vans`)
            const data = await response.json()
            console.log(data.vans);
            // setVans(data.vans)
        }
        fetchData()
    }, [])


    return (
        <div>
            <div>HostVans page goes here</div>
        </div>
    )
}

export default HostVans