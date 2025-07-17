import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export function obterToken(){
    const url = 'http://localhost:3000/login';
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