import React from 'react'
import './Engagement.css'

const EngagementB = () => {
    return (
        <div style={{flexDirection: 'flex-column', justifyContent: 'center', alignItems: 'center'}}>
            <section class="electionHeader">
                <h1>Vote in the Mikisew Cree 
                First Nation Trustee Election</h1>
            </section>
            <section class="infoHeader">
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div className="rectangle"/>
                    <p className='type'>Type in Your Information to Vote</p>
                    
                </div>
                
            </section>
            
        </div>
    )
}

export default EngagementB
