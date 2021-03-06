import { async } from 'regenerator-runtime';
import { TIMEOUT_SECS } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetcch = fetch(url);
    const res = await Promise.race([fetcch, timeout(TIMEOUT_SECS)]);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (err) {
    throw err;
  }
};
