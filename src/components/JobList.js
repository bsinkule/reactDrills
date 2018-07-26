import React from 'react'

let JobList = (props) => {
    let itemsList = props.list.map(lis => {
        return (
        <li key={lis.id}>
            <h4>{lis.title}</h4>
            <small>{lis.pay}</small>
            <p>{lis.description}</p>
            <small>{lis.interested.length} dinos are interested in this job</small>
        </li>
        )
    })

    return (
        <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
                {itemsList}
            </ul>
        </section>
    )
}
export default JobList

