import axios from "axios";
import { apiUrl, coinLayerUrl } from "./constants";

// export const getExchangeRate = async (currency, target) => {
//   // const rate = await axios.get(`${coinLayerUrl}&target=${target}`);
//   const rate = await axios.get(`${coinLayerUrl}&target=RUB`);
//   return rate.data.rates[currency];
// };
export const getExchangeRate = async (from,to) => {
  // const rate = await axios.get(`${coinLayerUrl}&target=${target}`);
  const rate = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`);
  return rate.data[to]
};
export const getExchangeUsdRub = async (targetFrom) => {
  // const rate = await axios.get(`${coinLayerUrl}&target=${target}`);
  const myHeaders = new Headers();
  myHeaders.append("apikey", "hDt45FtyMsdhMzlOv3buikWBhBzBYxCd");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/currency_data/convert?to=RUB&from=USD&amount=1`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(JSON.parse(result).result))
    .catch(error => console.log('error', error));
};
// fromExchange(pin):"ETH"
// inExchange(pin):"BYR"
// fromSum(pin):"234"
// inSum(pin):"345"
// userMail(pin):"test111@gmail.com"
// userFullName(pin):"fio"
// userRequisites(pin):"nomer"
export const createApplication = async (data) => {
  const response = axios.post(`${apiUrl}/applications`, data);
  return response;
};

export const cancelApplication = async (id) => {
  const response = await axios.get(`${apiUrl}/applications/cancel/${id}`);
  return response;
};

export const loginAdmin = async (data) => {
  const response = await axios.post(`${apiUrl}/auth/login`, data);
  return response;
};

export const getApplicationsByStatus = async (status) => {
  const response = await axios.get(`${apiUrl}/applications?status=${status}`);
  return response;
};

export const updateStatusApplication = async (id, status) => {
  const response = await axios.put(`${apiUrl}/applications/${id}`, { status: status }, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return response;
};

export const getApplicationById = async (id) => {
  const response = await axios.get(`${apiUrl}/applications/${id}`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return response;
};

export const setCommentsClient = async (data) => {
  const response = await axios.post(`${apiUrl}/comment`, data, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return response;
};

export const getCommentsAdmin = async () => {
  const response = await axios.get(`${apiUrl}/comment`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return response;
}

export const updateCommentStatusAdmin = async (status, id) => {
  const response = await axios.put(`${apiUrl}/comment/${id}`,{status:status}, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return response;
}

export const removeCommentAdmin = async (id) => {
  const response = await axios.delete(`${apiUrl}/comment/${id}`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return response;
}

export const getCommentConfirmedAdmin = async (id) => {
  const response = await axios.get(`${apiUrl}/comment/confirmed`)
  return response;
}


//=========================
export const getPaymentByCrypt = (crypt) => {
  let payment = "неизвестный кошелёк";
  if (crypt === "BTC") payment = "bc1q66j8vvp5egdykzhgsuswlkfttrgtme7dj0ddjj";
  if (crypt === "ETH") payment = "0x136EaAcC7d4c4f7f221f2eAdE186b15057b3a720";
  if (crypt === "ZEC") payment = "t1Wqej3gAzbNRr9frZnuBFp7DRFjJUVeG62";
  if (crypt === "XMR") payment = "45Akdx4WrvaWEdL9ibB9211j7qmLm1Td9277KmFsXC8d3GZGrYTXUiEdUvHU6mfjoHfkkuYes6QVDAzmuMtKqoCSMFWwPHC";
  if (crypt === "TRX") payment = "TMHEfc1i8HF1jUDWVu6UwGZs6fhUN7aT6a";
  if (crypt === "XLM") payment = "GCZ2S4VNHNVIECDCAJOZLWGLOOW7HQMSGDWFYR27QBJA27Q56UFTRTIH";
  if (crypt === "DASH") payment = "Xwt8fDKgYJ5dEebNGYU1NdKnDqCajTLnie";
  return payment;
};

export const getNumberFiat = (fiat) => {
  let fiatNumber = "неизвестный кошелёк";
  if (fiat === "RUB") fiatNumber = "79253533782";
  if (fiat === "BYR") fiatNumber = "Кошелёк для BYR";
  if (fiat === "KZT") fiatNumber = "Кошелёк для KZT";

  return fiatNumber;

};