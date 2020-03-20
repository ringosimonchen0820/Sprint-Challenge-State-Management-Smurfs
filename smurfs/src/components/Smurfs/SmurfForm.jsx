import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurfs } from '../../actions/actions';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = event => {
        setSmurf({
            ...smurf,
            [event.target.name] : event.target.value
        })
    };

    return (
        <div>
            <h1> Add a Smurf </h1>
            <form>
                <label> Name: </label>
                <input
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={smurf.name} 
                />
                <label> Age: </label>
                <input
                    type='text'
                    name='age'
                    onChange={handleChanges}
                    value={smurf.age} 
                />
                <label> Height: </label>
                <input
                    type='text'
                    name='height'
                    onChange={handleChanges}
                    value={smurf.height} 
                />
                <button type='submit' onClick={() => props.addSmurfs(smurf)}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('this is state', state.smurfs);
    return {
        state: state.smurfs
    };
}

export default connect(mapStateToProps, {addSmurfs})(SmurfForm);