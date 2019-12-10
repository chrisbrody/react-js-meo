import React, { Component } from  'react';

class componentName extends Component {
    
    
    
    
	render() {
		return(
			<div className="home">
                <div className="homeLogo">
                    <h3>Meo</h3>
                </div>
                
                <form>
                    <input type="text" placeholder="search..." value="search" onChange={() => console.log()}/>
                </form>
            </div>
		);
	}
}

export default componentName;