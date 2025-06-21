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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hURjNhTDFtRDJDMlRwR0czWmlzb1ZmVysxVnFoN0xMSTFBRE9ZMW5uZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3dpQmRzWXpnaVVKT3M3YzhydDQ0MHlVemhUNUxuQlRhNlVuMUFjaC94az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS05vd0VtUU9QbVZSNzFDQkcwS1dqZ2pmMUtWdmJqbjVkZDBTenZUY2s0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RmxNZjh6KzBLbms1WUJQYkFBREJaNUhoRlNVb0RBNkpET0d1QXVac25rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBNFdqa3ZqN1F0TUUrRUxVY2V3RyszSW9FN1JiNys1STBrVXhCWEliMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY1M0VPTlZ2cm94Unc1aFVrTzhvV3h6SVVPV0NKOTNLb1VHOVRWU3Q5aVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtGTWJnSjhhMUZGcFdZWFhGdm1wcXNYWDNvYUpwV2J6aHh5ZzFtZzZWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEpnSzVyQ0NIeWZ0UUsxaVJMdzNLMWEwNTFqRi84VGUrdXBkUE9iTXh3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI5eDN4VG5iT09lTUVaTEFPN1QybTRTSWsxNXlNL2Y1TXR3SU5oMFBZZ3NkU3NSV0FKUDBrR3RyRWZZamxqSnVkWUJVcUFuMXRwZVR2NHRKaDM5SEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IkZwamxsKzJXZndCQlFyMnBWeDhTdjBNaWM1MFdTMUZxMjFpRE9KblV4Ujg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzE5NjA4OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzEyRUE4NjQ3NTU2M0MzOEU0RTUzNzcxRDg4M0IwNkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDQ4MzAxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSlJJOVpjX2pRV2FYWmMxS1NHb0M0QSIsInBob25lSWQiOiJjYmVjMDNhZS05ODAzLTQ0NzYtYWE1YS1iMWI1OGQ5NDM2ZTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlcwUFFTbDVEaVRrS0hOMkpZV3NaamZ3WENnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZuNzcrV3ltanBONFFCSnJha1BIT3JLRXJPMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyUTZKRVpEQiIsIm1lIjp7ImlkIjoiOTQ3NzE5NjA4OTU6MjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNTk4OTMzNTMzMDAxOTA6MjJAbGlkIiwibmFtZSI6IkFETUlOIFBJUkFURSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0g2dmc0UXRJRFp3Z1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVGZ6MDRUNWxpSXdQSGtTZ2JRb3FhUEZwc0lMeTdJd1JDMUVBTHB1cFFRYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT3ZNcVBGUExZc0NSOTJ5cmJwdkhCS21mVm5YWUZuYjE0d0VvU3VINUpEeldmbEo0eVBsRCtVbTMrWHNUTGRVL05qR3NsVGVLTnorbnQweU1YclFjQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkFUTEFraXp0bmM1R1UwQ0tFdklkSXhmOXg3U3EyRFZQZ3BEMTFmdG01SG5mUTU3UFgwMmdneHFuZzJaY2pQbjFQRHpkMkpTR1BiUXRRUWlUNndDOEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzE5NjA4OTU6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTM4OU9FK1pZaU1EeDVFb0cwS0ttanhhYkNDOHV5TUVRdFJBQzZicVVFSCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUNRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNDgzMDA4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUkxMSJ9",
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
