import React, { PureComponent } from 'react'

class Events extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="Events">Календар</div>
        )
    }
}

export default Events
