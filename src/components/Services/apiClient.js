import axios from "axios";
import { string } from "prop-types";
require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
    this.coinApiBaseUrl = "https://rest.coinapi.io";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("kurios_token", token);
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || string(err) };
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: "auth/me", method: "GET" });
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: "auth/login", method: "POST", data: credentials });
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: "auth/register", method: "POST", data: credentials });
  }

  async coinRequest({ endpoint, method = "GET", data = {} }) {
    const url = this.coinApiBaseUrl + endpoint + API_KEY;

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || string(err) };
    }
  }

  async getCoinData(){
    console.log("IMGURL", await this.getCoinImage("BTC"))

  }
  async getCoinImage(symbol){
    let endpoint = '/v1/assets/icons/256?apikey='
    let imgReq = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=imgReq.data

    for (const element of data){
      if (element.asset_id===symbol){
        console.log("found", element.url)
        return element.url
      }
    }
    console.log("Token Not Found")
    return 'https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png'

  }
}


export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001");
