import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';
const postTransferencias = JSON.parse(open('../fixtures/postTransferencias.json'));
import { pegarBaseUrl } from '../utils/variaveis.js';

export const options = {
  interations: 1,
};

export default function() {
  const token = obterToken();
  const baseUrl = pegarBaseUrl();
  let url = `${baseUrl}/transferencias`;

  const payload = JSON.stringify(postTransferencias);

  const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };

  const res = http.post(url, payload, params);

  check(res, { "status is 201": (res) => res.status === 201 });
  sleep(1);
  
}


