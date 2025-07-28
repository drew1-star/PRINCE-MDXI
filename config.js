const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW5OiOBT+L3nFGrkKWtVVi4giqGCLeNmahwABohAQAopT/vcp2unuedid7eUpJKlzvvNd8gOQHFfIQi0Y/QBFiRtIUbekbYHACIzrKEIl6IEQUghGYK36tXTR9ChIZuWVZM5mbwxcU8ipFS/GBArTOGQZZJKd+gIePVDUfoqDPxQ81+dTs6KsyvNiptXLsFqfLb2Sd666wv0Jb6F4qjdrrN/PL+DRVYS4xCTWiwRlqISphVoH4vJr8HkjDdokVoq5UZHBmJFNtcnN1V6K80YqGD9rct64TnXDm38NPvbdOpZPMtYouV05Czqhs0sX5cC/hOtTn9itv4xucqPF6hN+hWOCwnmICMW0/TLvqhFnRw2ZJ+quhGQhDkRJSu5U7BvTEEveRTiK3t6PZZFsvwZ8mpHgzogO3Wksm2VB6zL16ymaDWc+xqXNjKtNnV0YniXK78Cd8t0r5//D+9WUVszeFrd2HPmpcTlE522DXZHdiwh6snOS6Gt9ouqYDb4Gf+O0nhPf7wdjyB2JGReCJPE+cW+NQo6v6+LmpafNdrHKcfUJH9K6/BNKcmWZw3ruDu2V6TsTkRwO+iUJlgPoKsxsgMNl/1KfuIvNmCUTXI43a+spRayed9GCDuz5peCciStIFyxaZn8fTuG6wdeXt4nOqJ2HYMQ9eqBEMa5oCSnOSbensD0Aw2aDghLRN3ZBNabL2tdlf5B4Gcbr+5Kw8pUId1Y5YAWvgtukEXbGam8HL6AHijIPUFWh0MAVzct2iaoKxqgCo7+/9wBBN/rUres24HogwmVFt6Qu0hyG76K+H8IgyGtCNy0JtG6BSjBiP7cRpZjEVUdjTWAZJLhBWgJpBUYRTCv0MSAqUQhGtKzRR2i1POx4P5jecTjWHNAD2ZseOOyyORBkRZIViRXZkcz+VX27dmVhUXwjiIIeSJ/XpOFQkRVpKIhDiRO6m93B4wNhVzBEFOK0AiOgObUuWbqh2wuFLNezmabEqhar4HOid2c8qS/g6qpbib2HWV8UuCxtOcXd+9XKsYceHyJrs9QTtDWb3eHlH4p0LTPGVgJ2LrE2b99ru6iV6nUy1cNQYC2FZSbC0dkupXKZXHbtbqF7w+2+KJiFHVtwYZ11Pqt5R0Ezve17Mjyv5ybHq52NeiBEDQ7Q780SLghmYS6m09nND9g4Kekmm4kTWdvDYBfLYxxNk3VlINYQ+vXmsCsW04bLwzSTK2e3nAhXxQhEK/I0xb1IrVGn4zBZPz37lpn011uF3+zUadX9Rhi9RZ/ATsH/1u4JvLMY++j9VuPXY/IvgRzD3SkYa7mb8kXDrIbHIqCRzvHyxL03Xkj2+Hwaz/ep5nMZeDy+90CRQhrlZQZGAJKwzHEIeqDM686zcxLlf2imjedzNX5OnsKKqp85cHGGKgqzAow4WRIGQ0Fhhectp8wLA1YJGAEhdrbmuTN1qxbFhkL6Hiugdp9zsMHjJ7U6/kZxBwAA",
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



