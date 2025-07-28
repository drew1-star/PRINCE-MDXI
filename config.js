const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW5OiOBT+L3ltawSRi1Z11aKi0nhBAUW29iFCgHAJGKKAU/73Ldrp6XnYne3lKSSnTr7zXfIdkAJXyEAtGH8HJcU3yFC3ZG2JwBhMrmGIKOiBADIIxmBhJHImspvxwoftPVpO2UtGdW+1KWCdZFaEB+RcHhaDwl2/gkcPlNdzhv3fNHRTuToUhndyJUkshLvu8YZjrYZ+/+5NJywxBV6XQimcxuoreHQdIaaYRFoZoxxRmBmoNSGmX4Nfz2+tTWv5vkY3S7wcHZ02dtMsqy0/vM7cs7afN24wqeZz9WvwQ+I1TqmdVlgbnaPgkBhNS5wbtNeFPdxRPO8nsivuDofj+gm/whFBgR4gwjBrv8z7Vgv4Oz8xnIszSheZojguS72NMiCkymNJvizwyLT6zSxNvwZ8OrnYXOrO1vvU1u/qsBz5CyakRy22UnqUz96xr1X9rEGc+itwk354Jf0/vBuzN1+nQSxIacvthOs2jdEBWp66XGo8nZdHvR7UTWXQzP8afCu/7HNb1XNerSKrbC/i0V1ctvswVt/kwVTYKJklona3TdJP+JBd6e9QmnLc9qHKi7o3WZE+ObDksqSb8w0GG9PaWndvb+/OQj5bKunVCKcx2VbGYK4ubk1GLC9bvYkqcdJ7LE5hK03uEygc4t3r+0QpavUAjPlHD1AU4YpRyHBBuj2F7wEY3CzkU8Te2QWByrgc4XNZ7PcFqXdxKxu5ODuGunQ2IreoZ5ChdZJxJ+cV9EBJCx9VFQqWuGIFbdeoqmCEKjD+868eIKhhT92624RBD4SYVswh1zIrYPAh6sch9P3iSpjVEn/aLRAFY+5zGzGGSVR1NF4JpH6Mb2gaQ1aBcQizCv0cEFEUgDGjV/QztNMi6Hgfrha8p2l70AP5ux44AGMwkARZEWVF5IbcWOb/qL7VXVtYlt8IYqAHsmeZOBopsiKOhOFI5IWusjt4/ETYNQwQgzirOp+brSYa2lIzjYT4u8VC1SJ1Gqngc6IPZzypL+Gm1ox468K8PxT4PGt5xXbP1cbcjg6DABnWWouR83Y7nl7/oQkYg7UTR5G5bOJAOkcNu3CNZ4l7TjXLbTFQvAjaL9lqkWSSEnFccCKbaL7t7+ats1hvhVpQsl1tw/V9xalw1EfHneWchElnox4I0A376NfL6P0+4aQ+p7WTYpdsp5h4uS0ZZmpe66VqJ2GztA7lfROGg51Eoot3yWuCXo5uGBS0UuG82ejOdmm/4eQk1Ursvqgorp+efc9M9uOtwu926rTqfkOM3qNPYKfgf2v3BN5ZjHv0funx4zH5l0BO4DHxJ9PCzgbl7WUz8kqfhRo/kGf2/XYIiIvTZKK72fTM5+Dx+KsHygyysKA5GANIAlrgAPQALa6dZ3USFr99EXVdjZ6TZ7Bi6mcObJyjisG8BGNeFgVppCg896wyaVEuYRWDMRAi03lLO1O3allaDLKPWAG1+/RwCR5/A3S5/NpxBwAA",
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



