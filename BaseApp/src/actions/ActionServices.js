import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import ServiceComponent from '../containers/ServiceComponent';

const mapStateToProps = (state) => ({
    isLoading: state.serviceReducer.isLoading,
    error: state.serviceReducer.error,
    data: state.serviceReducer.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice())
})

export const callWebservice = () => {
    return dispatch => {
        dispatch(serviceActionPending())
        axios.get('http://www.mocky.io/v2/5bce4e962f00005900c85786')
        .then(response => {
            dispatch(serviceActionSuccess(response.data.data))
        })
        .catch(error => {
            dispatch(serviceActionError(error))
        });
    }
}

export const serviceActionPending = () => ({
    type: ActionTypes.SERVICE_PENDING
})

export const serviceActionError = (error) => ({
    type: ActionTypes.SERVICE_ERROR,
    error: error
})

export const serviceActionSuccess = (data) => ({
    type: ActionTypes.SERVICE_SUCCESS,
    data: data
})

export default connect(mapStateToProps, mapDispatchToProps)(ServiceComponent);