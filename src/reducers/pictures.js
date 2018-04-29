import { GET_PICTURES } from '../actions/types'
import _ from 'lodash';

const initialState = {
    picturesById: {},
    pictureIds: []
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case GET_PICTURES:
            /* Prepare data - pictures by id for easy access, pictureIds to keep order of pictures */
            const picturesById = _.keyBy(action.data,'id');
            const pictureIds = action.data.map(p => p.id);

            const newState = _.cloneDeep(state);
            newState.picturesById = Object.assign(
                newState.picturesById,
                picturesById
            );

            newState.pictureIds.push(...pictureIds);
            return newState;
        default: 
            return state;
    }
}