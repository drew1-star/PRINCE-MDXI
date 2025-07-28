const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VVXZOiOBT9L3nVGgFF0KquWkBQRAUFbdqtfQgQIMqXSUBxyv++hT09PQ+7s708heTWueeee27yHRQlpshCLZh+BxXBDWSoW7K2QmAK1DqOEQF9EEEGwRRAHVksa0w+v1jHbWUkuRPr7lqc102krJQ6Eq91VEtWzyhfwKMPqjrIcPgbQM6/GPxroCZHHlVUSbjS4d/ynh/asgVPGrYUFyfLfQ690Qt4dIgQE1wkepWiHBGYWah1ICZfo287XLFqJ2JPPNfj7Br3VqnaHPF6d3iTTmItCoa3vKo7L/DXX6N/tNfp4LzWBxwxbbZwG38eJpI6eTOWNwqb1yac52tD2gbF9Z0+xUmBIjNCBcOs/bLuW118G3I3ezNK+V2BxHr/akYCiWYO33JKPUBjvEqXcyhx4deIG5USSMN6iXTZPadhb754dRSoFrq0ZjVXLId85Qu5c+Fb5VfiDvnwyvn/6L5V9VdbQpeeIG6CO6u3q4XohzIuBs12Ysur3CqjSeiWJ337Nfq6tYhXg8O9HVxyvndR5M1pdN6t1spyc+XmwmShYDWgTbNvzU/6kNXkdyxzWYr0RUjlE8n8yruMCZ7fjRE/Dje6NJududnSGoyRcbYmVeukB7nRgq2YsmpAzpct8Q/LsaXMej2DH428ZrdXtZGeKi/Pis6oNSMw5R99QFCCKSOQ4bJ47gmjPoBR46KQIPaUFxyPl7wRKvFVD3IaS54QmOLtdpNOOU/vZubdPXuQFhcuv4cvoA8qUoaIUhQtMGUladeIUpggCqZ//tUHBbqx98Z16YZ8H8SYULYv6iorYfTR1Y9DGIZlXTC3LUKtWyACptznNmIMFwntdKwLSMIUN0hLIaNgGsOMop8VIoIiMGWkRj+nViujTnh3vON3B2MC+iB/NgRHYAqE8VCSRUkWuRE3lYQ/6LdrBwur6luBGOiD7D1MnExkSRYnw9FE5IddZHfw+MmwA4wQgzijYAo0R9BFS1/o9kwtwu18ruiJoiUK+Kzowxrv0ldwc9Wt1PZhPhgN+TxrednzA7px7MlBiJDlrvUU7ZfN69vLP4B0twwyi9q8HXdDd5Edir0rNsMTNnwu9pfbUevdG3gbJt4tE3KvtncaUmtxxq9mVK42OzUMNfE+70X4HpSbpTzmKtuxeSV56bJFqMEh+jXZmtnEmmxHi7UPDZY2rhKOWT2wvOs5CeJBZBxP7FQaVNGwZyvOhLRuzGcKIt4sdySrXtCxq1XmSB6M6aoNSrpH+PTDtM+hyX5cVvhpp65X3W+M0XP2C9h18L979068sxj36P+C8eM2+ZeJVOHrKVS10suEqultJscqZLHOC9LMuzeHqPDx+aSafqYFfA4ej7/6oMogi0uSd29VEZESR6APSFl3njWLuPxNMk01zafMjz7IIGXK5xx4OEeUwbwCU14ShxInjIfCe5RDymoBaQqmYJg4++W5M3WrVJXLIPsYK6B0nxkvwONvP7TmKnIHAAA=",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
OWNER_NUMBER: process.env.OWNER_NUMBER || "263785785040",
OWNER_NAME: process.env.OWNER_NAME || "drew",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU3_IMG || "https://files.catbox.moe/upmwpw.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 💁🏽 How Can I Assist You. Am alive Now.",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "fase",
BOT_NAME: process.env.BOT_NAME || "DREW",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};



