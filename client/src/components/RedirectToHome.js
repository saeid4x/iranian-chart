import React ,{Component} from 'react';



   class RedirectToHome extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('rediret component');
        this.props.history.push('/iran/cat/HeramSeni');
    }
    render(){
        return(
            <div>
<h1>hi</h1>
            </div>
        )
    }
}
export default RedirectToHome;