//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtIa3JoT0xTbnk4ek1pUE9Zc0p1VDgraDNVNm9LKy9tT0ZKelBycmVWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjBaWE9Lck9KUWZFNEdScUdqRUhQcTNHczRtVCtMK3BZc2FGL2lHcCt4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQUgva1AwRElRZkl6MFQvbzI4ZU1pSDRJT0xBZjlSUHBqblp5WHNKM25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ei9lMXNxU0lCOHROZVdVM1NwU3h2Y0c0czQ5UXpVOW1NODRRZEhLMWhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIWmx6WEluOXp0K3oxSnlzNTdEclVtai91aU94VTh2M254YTJLczZ2VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdrTWdOcW9sRTY2LzBhQXRCdlVRbCtTVHRnRXZtTlF0azBselN3MlBIak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09TL1ZWeFg2NENkbHZNYVgxV01wM0p5b3dERG9ocnZoVGdOcjQzWkkzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDVPVHMrN3A4UkU1TmdOdC9HdW9VRlZwWVcxTUp4ZC9kajBVNGE0RFREYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ3aklPY2NMNUpsN0wwTStVMFlxZVNvNitNRmgwd0F0TnQ5VEZKeHVock52Rk5PcjZyeUNxcXJ2Z0trR3dxYm9PQVRMM1M1c3Vqc1ZJTHRadStkd2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJoWTV0alBWQXlmTU5SRHBMb0F5aXZGeE1rQ0JDWWRPbEJkczJUaEdaZTBNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzI2MDMxMjUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk0OTI3REY1NEJCQkM2QTAzOTJDQzA5MzFCNjRDNEJFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTAzMzQyMTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJnV0ItdE5qVElDYzJLcE9rRHJPTmciLCJwaG9uZUlkIjoiOGQwMjc2MTItZWQ0MS00NmVmLWJlMjMtYjE4NmNiMTA5NmY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJjdThMTmtnSzRxTDFHSnFpbTZqdSt6ZEdOMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuWCs0ZHNyQlJZc0toSWk3ZExtSExPSEhFckk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFlHU0FHNVAiLCJtZSI6eyJpZCI6Ijk0NzI2MDMxMjUxOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0gOG0heG0jcmqybQg4bSYyarKgOG0gOG0m+G0hyIsImxpZCI6IjQ0MTA1NzQwNTk5Mjk3OjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXFra2JjRkVQbjF6OElHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQlhZblMzdyt6bzJ2Rmk3UlpFVExWWkFWa1YyRzBtQ2pGdmUrL3k1NTdXVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV1pwRlV0YkFNTVd4Uk9tWWJtK0VJYXlONGt2NDJrSU9lNldlUU9aOGFOWlJONlhnWUFCRUFRVmdveXJlc0NPTkhUNFJCb0V5cXNLZFo5d0ZGMkU3QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IktscjA4bnpYL1ZGRlU1VUhMWmRYaWp3a1BJcGVoN00xQ0JjVXJMbXdOaTRXL3pSd1JHTXpGS1BrYUIwREpHSzZ0R2dlMGxqcnduUk4wc2t1MS8wdmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjYwMzEyNTE6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVYySjB0OFBzNk5yeFl1MFdSRXkxV1FGWkZkaHRKZ294YjN2djh1ZWUxbCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMzM0MjE0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUp0RSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
