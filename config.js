const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_24_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllLV3hRNXllUWEyNk5DU3dwSHdDb0QrR3MvZy81QVR3TjM1alhkR05pbzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzM0NTk5ODQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQjI5QzgxOEU2RDRFOEVBMTJBRjQ4QzJEMjRFNzA2OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE5NDcwNjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRjg1WjhLRXdTZS1rMW5vODJ1QUpjQVwiLFxuICBcInBob25lSWRcIjogXCI2NDFmMDY1NS03NTkwLTRjOTMtOWVkOC00YmRmODJhNTMzMTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgNjIsXG4gICAgICAxODUsXG4gICAgICAyMTAsXG4gICAgICAxMzYsXG4gICAgICAxNTgsXG4gICAgICA4NixcbiAgICAgIDE0NCxcbiAgICAgIDE0MSxcbiAgICAgIDE4MSxcbiAgICAgIDE2OSxcbiAgICAgIDE1NixcbiAgICAgIDIzOSxcbiAgICAgIDExOSxcbiAgICAgIDIzNSxcbiAgICAgIDg5LFxuICAgICAgMjI3LFxuICAgICAgMzgsXG4gICAgICAxNDIsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDEyLFxuICAgICAgMjAsXG4gICAgICAxMjIsXG4gICAgICAxNDQsXG4gICAgICAyMjksXG4gICAgICAxNjgsXG4gICAgICAyMDYsXG4gICAgICAyNDMsXG4gICAgICAyMDYsXG4gICAgICAxNDgsXG4gICAgICAyNCxcbiAgICAgIDE4NyxcbiAgICAgIDgsXG4gICAgICAyOSxcbiAgICAgIDEwMixcbiAgICAgIDExMixcbiAgICAgIDIsXG4gICAgICAyNTUsXG4gICAgICA1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNUdIV1BHTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzM0NTk5ODQ2OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NTAyMDI0NDExNTQ2OTo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ0s0cFlHRUxQVTdia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkR1aFI2dDF4Z1BmV1lneFpDdGtDWVRBOFFFZXNyZlBtQnYxNm5ZQ1RSeEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR3Z1REdBYTdWd2xCTGNqdmlLeUdVY1gxMlhTdGt3RFJNZVFwVWhOd0Z5TW5qaUFwc1hqM0pyTlJTa2NvWnVvRFd3WlErbktsdHZ3RVV0RWEvdTNlQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRFpBbk44ZlRNZGVNMGpDbm8xQUkvRnBQaGdEdmhRQ3dlT2NuU3dBbm5oSktLMG55ZTBIQ2lEVlhmK1BJQXA3M3RpNUVtUUFBOGVvTFVoLy83MTQ4QXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzM0NTk5ODQ2OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTk0NzA2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJBeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkF5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnFleEU0K000b1czR0R3M2JTQ0FzTHZHYlFDNENJYUNIUVIyTExxOU1pbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU4MzU3MDg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
