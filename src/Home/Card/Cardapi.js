import React, { Component } from 'react'
import axios from 'axios'

class Cardapi extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://firebasestorage.googleapis.com/v0/b/kitabisa-staging-8afb8.appspot.com/o/campaign.json?alt=media&token=c59e7f10-2768-4260-bee8-b490c18e4873')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Cardapi
