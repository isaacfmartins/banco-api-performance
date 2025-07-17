
import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {
    // iterations: 1,
    // vus: 10,
    // duration: '30s',
    stages: [
        { duration: '5s', target: 10 }, // ramp-up to 10 users over 5 seconds
        { duration: '20s', target: 10 }, // stay at 10 users for 20 seconds
        { duration: '5s', target: 0}, // ramp-down to 0 users over 5 seconds
    ],

    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01'],
    }
};

export default function () {
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

  

    console.log(`Response status: ${res.status}`);
    console.log(`Response body: ${res.body}`);

    sleep(1);
}