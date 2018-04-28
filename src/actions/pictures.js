import axios from 'axios';
import { GET_PICTURES } from './types';

export function getPictures(page, pageSize) {    
    return dispatch => {
        // Using dummy data:
        const data = [
            {
                id: 1,
                filename: 'example.jpg'
            },
            {
                id: 2,
                filename: 'example2.jpg'
            }
        ];
        dispatch({type: GET_PICTURES, data});
        
        /*return axios.get('/api/pictures', {
            headers: {'X-Page': page, 'X-Page-Size': pageSize}
        }).then((data) => {
            dispatch({type: GET_PICTURES, data});
        });
        */
    }
}
