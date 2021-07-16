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
    console.log("URL:",url)

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || (err) || "Error"};
    }
  }

  async getCoinData(symbol){
    // console.log("Current Price:", await this.getCoinCurrentPrice("BTC"))
    // console.log("Image Urls", await this.getCoinImage("BTC"))
    // console.log("Hourly Price History:", await this.getCoinHourlyPriceHistory("BTC"))
    // console.log("Daily Price History:", await this.getCoinDailyPriceHistory("BTC"))
    // console.log("Weekly Price History:", await this.getCoinWeeklyPriceHistory("BTC"))
    // console.log("Monthly Price History:", await this.getCoinMonthlyPriceHistory("BTC"))
    // console.log("Three Month Price History:", await this.getCoinThreeMonthPriceHistory("BTC"))
    // console.log("Yearly Price History:", await this.getCoinYearlyPriceHistory("BTC"))
  }
  async getCoinImage(symbol){
    let endpoint = '/v1/assets/icons/256?apikey='
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data

    for (const element of data){
      if (element.asset_id===symbol){
        console.log("found", element.url)
        return element.url
      }
    }
    console.log("Token Not Found")
    return 'https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png'
  }

  async getCoinYearlyPriceHistory(symbol){
    const date = new Date()
    date.setDate(date.getDate()-365)
    let period_id='1DAY'
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 365, period_id)
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    return req
  }

  async getCoinMonthlyPriceHistory(symbol){
    const date = new Date()
    date.setDate(date.getDate()-30)
    let period_id='1DAY'
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 30, period_id)
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    console.log("APICLIENTmonthly:", data)
    return req
  }

  async getCoinThreeMonthPriceHistory(symbol){
    const date = new Date()
    date.setDate(date.getDate()-90)
    let period_id='1DAY'
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 90, period_id)
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    return req
  }
  async getCoinWeeklyPriceHistory(symbol){
    const date = new Date()
    date.setDate(date.getDate()-7)
    let period_id='4HRS'
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 42, period_id)
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    return req
  }
  async getCoinDailyPriceHistory(symbol){
    const date = new Date()
    date.setDate(date.getDate()-1)
    let period_id='30MIN'
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 48, period_id)
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    return req
  }

  async getCoinHourlyPriceHistory(symbol){
    const date = new Date()
    date.setTime(date.getTime() - (( 61 * 60 * 1000)+date.getTime()%60000))
    let period_id='1MIN'
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 60, period_id)
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    return req
  }




  getPriceHistoryEndpoint(symbol, date, limit, period_id){
    let monthConnector = '-'
    let dayConnector = '-'
    if (date.getMonth()<10){
      monthConnector='-0'
    }
    if (date.getDate()<10){
      dayConnector='-0'
    }
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    let time_start = '' + year + monthConnector + (month) + dayConnector +  day
    if (period_id==='1MIN'){
      time_start = date.toISOString()
      console.log('hour:', time_start)
    }
    let endpoint = '/v1/exchangerate/' + symbol + '/USD/history?&time_start='+time_start +'&period_id='+ period_id + '&limit='+ limit+'&apikey='
    return endpoint
  }


  async getCoinCurrentPrice(symbol){
    let endpoint = '/v1/exchangerate/'+ symbol+'/USD?apikey='
    let req = await this.coinRequest({endpoint: endpoint, method: "GET"})
    let data=req.data
    return data.rate
  }  
}


export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001");
