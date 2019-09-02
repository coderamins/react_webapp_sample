import config from 'config';
import {authHeader,handleResponse} from '@/_helpers';

export const userService={
    getAll,
    getById,
};

function getAll(){
    const requsetOptions={method:'GET',headers:authHeader()};
    return fetch(`${config.apiUrl}/users`,requsetOptions).then(handleResponse);    
}

function getById(){
    const requsetOptions={method:'GET',headers}
}