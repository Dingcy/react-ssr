import React ,{Component} from 'react';
import Header from '../../components/Header';
import styles from  './style.css';


class Home extends Component {
    componentWillMount(){
        // console.log(this.props.staticContext);
        // if(this.props.staticContext){
        //     this.props.staticContext.css  = styles._getCss();
        // }
        
    }
    render(){
        return(
            <div>
                <Header></Header>
                <p className={styles.test}>Welcome to home stphen</p>
                <button onClick={() => {alert('click')}}>click</button>
            </div>
        )
    }
}


export default Home;