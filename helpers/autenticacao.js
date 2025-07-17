import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));
import { pegarBaseUrl } from '../utils/variaveis.js';

export function obterToken(){
    const baseUrl = pegarBaseUrl();
    const url = `${baseUrl}/login`;
        const payload = JSON.stringify(postLogin);
    
        const params = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
    
        const res = http.post(url, payload, params);
    
        check(res, {
            'validate status 200': (r) => r.status === 200,
            'validate token is string': (r) => typeof(r.json().token) === 'string',
        });

        return res.json('token');
}