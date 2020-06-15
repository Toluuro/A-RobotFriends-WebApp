import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import '../Containers/App.css';


// START.
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {return response.json();})
        .then(users => {this.setState({robots:users})});
        
    }
    

    UserRobotchange = (event) => {
        this.setState({searchfield:event.target.value});
    }

    render() {   
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
             <h1>LOADING...</h1> :
             (
                <div className='tc'>
                    <h1 className='f1'>Robot Friends</h1>
                    <SearchBox Robotchange = {this.UserRobotchange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }

 
export default App;
// END.