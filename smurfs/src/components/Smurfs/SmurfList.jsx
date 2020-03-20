import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurf, deleteSmurfs } from '../../actions/actions';

const SmurfList = (props) => {
    console.log("SmurfList Props", props);
    return (
        <div>
            {
                props.data.map(item => 
                        <Smurf smurf={item} deleteSmurfs={deleteSmurfs} />
                    )
            }
            <button variant='contained' onClick={props.fetchSmurf}> Get A Smurf </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('this is state,', state.smurfs)
    return {
        data: state.smurfs
    };
}

export default connect(mapStateToProps, {fetchSmurf, deleteSmurfs})(SmurfList);