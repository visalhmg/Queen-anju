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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEpkNVAwM2JzWjAxcjJRckl1bnR0NXp6NklYUWhNUUplOEg5N2s2STMwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFlvalVlbERpSHRpb0JCR1dQdVhSVnFERlhxUCtac0Z6QXlTaFNIYUtrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRjg0WjFMSGFIczYwaTJEVkNuMmRFcTlMbXVlUGk4ZXVFeFlGZXMvekZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqc3Nma3RpMDRzVkNnVFdtUEM5TmdHYURKT0Y3NmxsY3J6VHJrQmQ1aGo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKWnNDOHVaTjlKZThrVHNqU3g4WWFDMi9OV3VuNHNrZ0Q0S2o1S05KVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp1RzAyb0QwQWt6cXpjSGxxQ3hpaGNwN0JYZGlWZ0EwdnJ4MUJhbEYxUjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFuN2hiQmo4QTdPNkJjanlrWDl2ZDNpT2dROVpjakF6aXFQWTdHeERrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHlzdmZsRmhZaE52aHFRajF5NW8rNGdVYlFGd2xyaG5Zd0RsNWNsWEswZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcrVC9ybi94ODJ1WUprd0FGTnAzdjdhUkQwWmpSZHFYZkhjd1RXWGN2ZHFKaDV2MnZsZXd2ZjVZZmtibFlDTkI1NW55dGw0OHAreEZCUmpQZThnTUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJqUmYwbHNDRlgvV1Bxb1lEUHE1OUlYN3NkcDJBakZtVGduSEtaMU81akZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0Z0YwTURPYlJzMjNqRi0tbkV4NmNRIiwicGhvbmVJZCI6IjAzYjY2YTRhLWM4NGItNDdiMy1hMDZhLTc3MzRkZThlMWNkZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SS9GeExyRGhjcHNIYjZhVmZEL1ZRT2QxaUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGpUb3BhOWltYVBKd1ZqaS9HSzJ1UDFYVS9jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZRS1NXQUpGIiwibWUiOnsiaWQiOiI5NDcyNjAzMTI1MToyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtIDhtIXhtI3Jqsm0IOG0mMmqyoDhtIDhtJvhtIciLCJsaWQiOiI0NDEwNTc0MDU5OTI5NzoyOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lxa2tiY0ZFTHFMM2NJR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJYWW5TM3crem8ydkZpN1JaRVRMVlpBVmtWMkcwbUNqRnZlKy95NTU3V1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZlUVh2RXJlMkxNRVFUVWtFVkc2Q28xb1oydDc3dS9XZFlkWDBidmNNTTExYmxKRERGU0I2cFRkZEdMTkxDNHNqYmtvR1FQZXlUWENPT3Y1WCt4cENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0UENzRXp1Um9BeFdSSFRvTHJrb2xoVWlhS0hVU0lCS3NxalRObHpYL1ZtZ1RBOWtCelNSc0o4NjdHYUtGd24vNVEydUZXc21NcVVnWkdMWVRhS1NEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI2MDMxMjUxOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFWMkowdDhQczZOcnhZdTBXUkV5MVdRRlpGZGh0SmdveGIzdnY4dWVlMWwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDU0OTk1OSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUJZQUFKdEgifQ==",
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
