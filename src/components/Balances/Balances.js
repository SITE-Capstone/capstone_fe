import { PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";
import apiClient from "../Services/apiClient";

const Balances = ({ user }) => {
  const [balance, setBalance] = useState([]);
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchUsd = async () => {
      const { data } = await apiClient.getUsdWallet(user.id);
      console.log("usd", data.Wallet.usd);
      const result = data.Wallet.usd;
      if (data) {
        setBalance(result.toLocaleString());
      }
      console.log(data.Wallet.coins);
      const chartResult = data.Wallet.coins;
      if (data) {
        setChart(chartResult);
      }
    };
    fetchUsd();
  }, []);

  const COLORS = ["red", "blue", "yellow", "green", "pink", "purple"];

  return (
    <div className="Balances">
      <PieChart width={730} height={250}>
        <Pie
          data={chart}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={70}
          fill="#8884d8"
          label
        >
          {chart.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <h1>usd amount {balance}</h1>
    </div>
  );
};

export default Balances;
