import axios from "axios";
import { string } from "prop-types";
require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
// const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const NEWS_API_KEY = '51e6567c15a042dda68b3f712e6937d8';
const API_KEYs = [
  process.env.REACT_APP_API_KEY1,
  process.env.REACT_APP_API_KEY2,
  process.env.REACT_APP_API_KEY3,
  process.env.REACT_APP_API_KEY4,
  process.env.REACT_APP_API_KEY5,
  process.env.REACT_APP_API_KEY6,
  process.env.REACT_APP_API_KEY7,
  process.env.REACT_APP_API_KEY8,
  process.env.REACT_APP_API_KEY9,
];
let API_KEY_count = 0;

class ApiClient {
  constructor(remoteHostUrl) {
    // this.remoteHostUrl = remoteHostUrl;
    this.remoteHostUrl = 'https://kuriosbe.herokuapp.com';
    this.token = null;
    this.coinApiBaseUrl = "https://rest.coinapi.io";
    this.geckoBaseUrl = "https://api.coingecko.com/api/v3";
    this.newsBaseUrl = "https://newsapi.org";
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("kurios_token", token);
  }

  async request({ endpoint, method = "GET", data = {}, params = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;
    console.log("Health Check")

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers, params });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || string(err) };
    }
  }

  // USER AUTHENTICATION
  async fetchUserFromToken() {
    return await this.request({ endpoint: "auth/me", method: "GET" });
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: "auth/login", method: "POST", data: credentials });
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: "auth/register", method: "POST", data: credentials });
  }

  // TUTORIAL INFORMATION
  async getTutorials() {
    return await this.request({ endpoint: "tutorials/cards", method: "GET" });
  }

  async markTutorialAsCompleted(user_id, tutorial_id, completed) {
    return await this.request({
      endpoint: "tutorials/completed",
      method: "PUT",
      data: { user_id, tutorial_id, completed },
    });
  }

  async fetchSingleTutorialStatus(tutorial_id) {
    return await this.request({ endpoint: "tutorials/single", method: "GET", params: { tutorial_id } });
  }

  // DASHBOARD INFORMATION
  async getCoinWallet(user_id) {
    return await this.request({ endpoint: "wallet", method: "GET", data: user_id });
  }

  async getUsdWallet(user_id) {
    return await this.request({ endpoint: "wallet", method: "GET", data: user_id });
  }

  async exchangeCurrencies(order) {
    return await this.request({ endpoint: "wallet/exchange", method: "PUT", data: order });
  }


  async transactionHistory(buying_id) {
    return await this.request({
      endpoint: "wallet/transactions",
      method: "GET",
      params: {
        buying_id,
      },
    });
  }

  //backend Price Information

  async getCoinCurrentPrice(coin_id) {
    coin_id=coin_id.toLowerCase()
    return await this.request({endpoint:"price/current", method: "GET", params:{coin_id}})
  }
  
  async getCoinHourlyPriceHistory(coin_id) {
    coin_id=coin_id.toLowerCase()
    return await this.request({endpoint:"price/hourly", method:"GET", params:{coin_id}})
  }
  async getCoinWeeklyPriceHistory(coin_id) {
    coin_id=coin_id.toLowerCase()
    return await this.request({endpoint:"price/weekly", method:"GET", params:{coin_id}})
  }
  async getCoinYearlyPriceHistory(coin_id) {
    coin_id=coin_id.toLowerCase()
    return await this.request({endpoint:"price/yearly", method:"GET", params:{coin_id}})
  }
  async fetchAllCurrentPricesHistory() {
    return await this.request({endpoint:"price/", method:"GET"})
  }





  // COIN INFORMATION
  async coinRequest({ endpoint, method = "GET", data = {} }, key) {
    const url = this.coinApiBaseUrl + endpoint + API_KEYs[key];
    console.log("URL:", url);

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios({ url, method, data, headers });
      let response;
      if (res.data === null) {
        console.log("#80 ApiClient.js Error:", res);
        setTimeout(async function () {
          const url2 = this.coinApiBaseUrl + endpoint + API_KEYs[Math.floor(Math.random() * 8)];
          const res2 = await axios({ url2, method, data, headers });
          if (res2.data === null) {
            console.log("#85 ApiClient.js Error:", res2);
          } else {
            response = res2;
          }
        }, 3000);
      } else {
        response = res;
      }
      return { data: response.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || err || "Error" };
    }
  }

  async getCoinImage(symbol) {
    let endpoint = "/v1/assets/icons/256?apikey=";
    let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 0);
    let data = req.data;

    for (const element of data) {
      if (element.asset_id === symbol) {
        console.log("from apiClient", element.url);
        return element.url;
      }
    }
    console.log("Token Not Found");
    return "https://pics.freeicons.io/uploads/icons/png/17917263711578289008-512.png";
  }

  // async getCoinYearlyPriceHistory(symbol) {
  //   const date = new Date();
  //   date.setDate(date.getDate() - 365);
  //   let period_id = "1DAY";
  //   let endpoint = this.getPriceHistoryEndpoint(symbol, date, 365, period_id);
  //   let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 1);
  //   return req;
  // }

  async getCoinMonthlyPriceHistory(symbol) {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    let period_id = "1DAY";
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 31, period_id);
    let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 2);
    return req;
  }

  async getCoinThreeMonthPriceHistory(symbol) {
    const date = new Date();
    date.setDate(date.getDate() - 90);
    let period_id = "1DAY";
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 90, period_id);
    let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 3);
    return req;
  }
  // async getCoinWeeklyPriceHistory(symbol) {
  //   const date = new Date();
  //   date.setDate(date.getDate() - 7);
  //   let period_id = "4HRS";
  //   let endpoint = this.getPriceHistoryEndpoint(symbol, date, 42, period_id);
  //   let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 4);
  //   return req;
  // }
  async getCoinDailyPriceHistory(symbol) {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    let period_id = "30MIN";
    let endpoint = this.getPriceHistoryEndpoint(symbol, date, 48, period_id);
    let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 5);
    return req;
  }

  // async getCoinHourlyPriceHistory(symbol) {
  //   const date = new Date();
  //   date.setTime(date.getTime() - (61 * 60 * 1000 + (date.getTime() % 60000)));
  //   let period_id = "1MIN";
  //   let endpoint = this.getPriceHistoryEndpoint(symbol, date, 60, period_id);
  //   let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 6);
  //   return req;
  // }

  getPriceHistoryEndpoint(symbol, date, limit, period_id) {
    let monthConnector = "-";
    let dayConnector = "-";
    if (date.getMonth() < 10) {
      monthConnector = "-0";
    }
    if (date.getDate() < 10) {
      dayConnector = "-0";
    }
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let time_start = "" + year + monthConnector + month + dayConnector + day;
    if (period_id === "1MIN") {
      time_start = date.toISOString();
      console.log("hour:", time_start);
    }
    let endpoint =
      "/v1/exchangerate/" +
      symbol +
      "/USD/history?&time_start=" +
      time_start +
      "&period_id=" +
      period_id +
      "&limit=" +
      limit +
      "&apikey=";
    return endpoint;
  }

  // async getCoinCurrentPrice(symbol) {
  //   let endpoint = "/v1/exchangerate/" + symbol + "/USD?apikey=";
  //   let req = await this.coinRequest({ endpoint: endpoint, method: "GET" }, 7);
  //   return req;
  // }

  async geckoRequest({ endpoint, method = "GET", data = {} }) {
    const url = this.geckoBaseUrl + endpoint;
    console.log("URL:", url);

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;

      return { data: null, error: message || err || "Error" };
    }
  }

  async getCoinDescription(name) {
    let endpoint =
      "/coins/" +
      name +
      "?localization=en&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false";
    let req = await this.geckoRequest({ endpoint: endpoint, method: "GET" });
    return req;
  }
  async getCoinStatistics(){
    let endpoint='/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    let req = await this.geckoRequest({endpoint:endpoint, method: "GET" })
    return req
  }

  async newsRequest({ endpoint, method = "GET", data = {} }) {
    const url = this.newsBaseUrl + endpoint + NEWS_API_KEY;
    console.log("NEWSURL:", url);

    try {
      const res = await axios({ url, method });
      let response;
      console.log("#246 TEST", res);
      if (res.data === null) {
        console.log("#80 ApiClient.js Error:", res);
        setTimeout(async function () {
          const url2 = this.newsBaseUrl + endpoint + NEWS_API_KEY;
          const res2 = await axios({ url2, method });
          if (res2.data === null) {
            console.log("#85 ApiClient.js Error:", res2);
          } else {
            response = res2;
          }
        }, 3000);
      } else {
        response = res;
      }
      return { data: response.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || err || "Error" };
    }
  }

  async getCoinNews(name, coin_id) {
    coin_id=coin_id.toLowerCase()
    return await this.request({endpoint:"news/coin", method: "GET", params:{coin_id}})
  }

  // async getCoinNews(name, symbol) {
  //   let pageSize = "5";
  //   let sortBy = "publishedAt"; //"publishedAt" || "relevancy"
  //   let language = "en";
  //   let endpoint =
  //     "/v2/everything?q=" +
  //     name +
  //     " AND " +
  //     symbol +
  //     "&pageSize=" +
  //     pageSize +
  //     "&sortBy=" +
  //     sortBy +
  //     "&language=" +
  //     language +
  //     "&apiKey=";

  //   let req = await this.newsRequest({ endpoint: endpoint, method: "GET" });
  //   return req;
  // }
  


}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001");
