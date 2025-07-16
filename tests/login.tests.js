
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    iterations: 50,
    thresholds: {
        http_req_duration: ['p(90)<200', 'max<200'],
    }
};

export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });

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

  

    console.log(`Response status: ${res.status}`);
    console.log(`Response body: ${res.body}`);

    sleep(1);
}