import React from "react"
import logo0 from './img/logo_graphic_change.svg'
import logo01 from './img/logo_graphic_change_1.svg'
import logo02 from './img/logo_graphic_change_2.svg'
import logo03 from './img/logo_graphic_change_3.svg'
import cardLogo from './img/home_card_logo.svg'
//import change from './img/change.gif'


//const icons = [logo0,logo01, logo02, logo03]
export class Biglogo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icons: [logo0, logo01, logo02, logo03],
            iconIndex: 1
        }
    }
    componentDidMount() {
    }
    handle_onMouseOver_biglogo() {
        this.timer = setInterval(() => {
            this.setState({
                iconIndex: (this.state.iconIndex + 1) % this.state.icons.length
            })
        }, 200)
    }
    handle_onMouseOut_biglogo() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div id = "home-logo" onMouseEnter={this.handle_onMouseOver_biglogo.bind(this,)} onMouseLeave={this.handle_onMouseOut_biglogo.bind(this,)}>
            <img src={cardLogo} class="App-logo-big" alt="cardLogo" />
            <img  
                 src = {this.state.icons[this.state.iconIndex]} 
                 id="logo-change"  
                 alt="logoChange"/>
            </div>
            // <div className="biglogo" onMouseEnter={this.handle_onMouseOver_biglogo.bind(this,)} onMouseLeave={this.handle_onMouseOut_biglogo.bind(this,)}>
            //     <div className="biglogo-content">
            //         <div className="biglogo-littleicon">
            //             {this.state.icons[this.state.iconIndex]}
            //         </div>
            //         <img width="500" height="87" alt="Ant Design" src="https://gw.alipayobjects.com/zos/antfincdn/6UYtAUYPXE/AntDesign.svg" className="home-banner-normal" />
            //     </div>
            // </div>
        )
    }
}


// export class Biglogo extends React.Component{
    
//     constructor(){
//         super();
         
//         setInterval(() => {
//             if(!this.state)
//             this.setState({current: 0});
//             else
//             this.setState({current: (this.state.current + 1) % this.state.icons.length})

//         }, 200)
        
//     }
    // componentDidMount(){
    //     let Logo = this.state ?
    //     icons[this.state.current] :
    //     logo0

    //     let img = document.getElementById('logo-change');
    //  //specified in img tag
    //     img.onMouseEnter = () => { img.src = Logo; }
    //     img.onMouseleave = () => { img.src = logo0; } //to revert back to start
    //     console.log(2)
    // }


    // componentDidUpdate(){
        
    //     let Logo = this.state ?
    //     icons[this.state.current] :
    //     logo0
    //     let img = document.getElementById('logo-change'); 
    //     //let border = document.getElementsByClassName('App-logo-big')
    //     img.onmouseenter = () =>{
    //         img.src = Logo}
    //     img.onmouseout = () => { img.src = logo0; }
    // }

     //specified in img tag
        // img.onmouseover = () => { img.src = Logo; }
        // img.onmouseout = () => { img.src = logo0; }
        // console.log(1)
     //to revert back to start
    
   
    
//     render(){
//         // let Logo = this.state ?
//         // icons[this.state.current] :
//         // logo0

//         return <div id = "home-logo">
//             <img src={cardLogo} class="App-logo-big" alt="cardLogo" />
//             <img  
//                  src = {logo0} 
//                  id="logo-change"  
//                  alt="logoChange"/>
//         </div>;
//     }
// }

// onMouseOver = {this.handleMouseOver} 
// onMouseOut= {this.handleMouseOut}  