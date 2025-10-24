const BASE_URL =
  "https://7zszxecwra.execute-api.ap-northeast-2.amazonaws.com/api/";
const AUTH_TOKEN = "886bf4955fa433d6da2a2458";
let AUTH_KEY = "";

async function startAPI() {
  const response = await fetch(BASE_URL + "/start", {
    method: "POST",
    headers: {
      "X-Auth-Token": AUTH_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ problem: 1 }),
  });

  const result = await response.json();
  AUTH_KEY = result.auth_key;
  console.log(result);
  return result;
}

async function newRequestsAPI() {
  const response = await fetch(BASE_URL + "/new_requests", {
    method: "GET",
    headers: {
      Authorization: AUTH_KEY,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  return result;
}

async function replyAPI(body) {
  const response = await fetch(BASE_URL + "/reply", {
    method: "PUT",
    headers: {
      Authorization: AUTH_KEY,
      "Content-Type": "application/json",
    },
    body: body
  });

  const result = await response.json();
  return result;
}

async function simulateAPI(body) {
  const response = await fetch(BASE_URL + "/simulate", {
    method: "PUT",
    headers: {
      Authorization: AUTH_KEY,
      "Content-Type": "application/json",
    },
    body: body
  });

  const result = await response.json();
  return result;
}

async function scoreAPI() {
  const response = await fetch(BASE_URL + "/score", {
    method: "GET",
    headers: {
      Authorization: AUTH_KEY,
      "Content-Type": "application/json",
    }
  });

  const result = await response.json();
  return result;
}

export {startAPI, newRequestsAPI, replyAPI, simulateAPI, scoreAPI};