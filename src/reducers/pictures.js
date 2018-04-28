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

            state.picturesById = Object.assign(
                state.picturesById,
                picturesById
            );

            state.pictureIds.push(...pictureIds);
            return state;
        default: 
            return state;
    }
}
