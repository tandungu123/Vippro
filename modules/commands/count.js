module.exports.config = {
	name: "count",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Jukie",
	description: "Đếm tổng",
	commandCategory: "Nhóm",
	usages: "help",
	cooldowns: 1,
	
};
const request = require('request')
const fs = require('fs')
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) => {	
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);	
var input=args[0]
  if (input=="help") return api.sendMessage("⚡️Các thẻ của box bao gồm:\n- members\n- nam\n- nữ\n- boxmess\n- qtv\n⚡️Các thẻ của server bot bao gồm:\n- mymess\n- thread", event.threadID, event.messageID);
  	else if (input=="members"){
var _0x91c1=["\x20","\x6A\x6F\x69\x6E","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6C\x65\x6E\x67\x74\x68","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x67\x65\x6E\x64\x65\x72","\x6E\x61\x6D\x65","\x4D\x41\x4C\x45","\x70\x75\x73\x68","\x46\x45\x4D\x41\x4C\x45","\x61\x64\x6D\x69\x6E\x49\x44\x73","\x6D\x65\x73\x73\x61\x67\x65\x43\x6F\x75\x6E\x74","\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x73","\x65\x6D\x6F\x6A\x69","\x74\x68\x72\x65\x61\x64\x4E\x61\x6D\x65","\x61\x70\x70\x72\x6F\x76\x61\x6C\x4D\x6F\x64\x65","\x74\u1EAF\x74","\x62\u1EAD\x74","\x4B\x68","\u26A1\uFE0F\x54\u1ED5\x6E\x67\x20","\x20\x74\x68\xE0\x6E\x68\x20\x76\x69\xEA\x6E","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var idbox=args[_0x91c1[1]](_0x91c1[0]);try{var threadInfo= await api[_0x91c1[2]](args[0])}catch(e){var threadInfo= await api[_0x91c1[2]](event[_0x91c1[3]])};var memLength=threadInfo[_0x91c1[5]][_0x91c1[4]];let threadMem=threadInfo[_0x91c1[5]][_0x91c1[4]];var nameMen=[];var gendernam=[];var gendernu=[];var nope=[];for(let z in threadInfo[_0x91c1[6]]){var gioitinhone=threadInfo[_0x91c1[6]][z][_0x91c1[7]];var nName=threadInfo[_0x91c1[6]][z][_0x91c1[8]];if(gioitinhone== _0x91c1[9]){gendernam[_0x91c1[10]](z+ gioitinhone)}else {if(gioitinhone== _0x91c1[11]){gendernu[_0x91c1[10]](gioitinhone)}else {nope[_0x91c1[10]](nName)}}};var nam=gendernam[_0x91c1[4]];var nu=gendernu[_0x91c1[4]];let qtv=threadInfo[_0x91c1[12]][_0x91c1[4]];let sl=threadInfo[_0x91c1[13]];let u=threadInfo[_0x91c1[14]];let icon=threadInfo[_0x91c1[15]];let threadName=threadInfo[_0x91c1[16]];let id=threadInfo[_0x91c1[3]];let sex=threadInfo[_0x91c1[17]];var pd=sex== false?_0x91c1[18]:sex== true?_0x91c1[19]:_0x91c1[20];api[_0x91c1[24]](`${_0x91c1[21]}${threadMem}${_0x91c1[22]}`,event[_0x91c1[3]],event[_0x91c1[23]])
}
  	else if (input=="nam"){
var _0x2e71=["\x20","\x6A\x6F\x69\x6E","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6C\x65\x6E\x67\x74\x68","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x67\x65\x6E\x64\x65\x72","\x6E\x61\x6D\x65","\x4D\x41\x4C\x45","\x70\x75\x73\x68","\x46\x45\x4D\x41\x4C\x45","\x61\x64\x6D\x69\x6E\x49\x44\x73","\x6D\x65\x73\x73\x61\x67\x65\x43\x6F\x75\x6E\x74","\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x73","\x65\x6D\x6F\x6A\x69","\x74\x68\x72\x65\x61\x64\x4E\x61\x6D\x65","\x61\x70\x70\x72\x6F\x76\x61\x6C\x4D\x6F\x64\x65","\x74\u1EAF\x74","\x62\u1EAD\x74","\x4B\x68","\u26A1\uFE0F\x54\u1ED5\x6E\x67\x20","\x20\x74\x68\xE0\x6E\x68\x20\x76\x69\xEA\x6E\x20\x6E\x61\x6D","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var idbox=args[_0x2e71[1]](_0x2e71[0]);try{var threadInfo= await api[_0x2e71[2]](args[0])}catch(e){var threadInfo= await api[_0x2e71[2]](event[_0x2e71[3]])};var memLength=threadInfo[_0x2e71[5]][_0x2e71[4]];let threadMem=threadInfo[_0x2e71[5]][_0x2e71[4]];var nameMen=[];var gendernam=[];var gendernu=[];var nope=[];for(let z in threadInfo[_0x2e71[6]]){var gioitinhone=threadInfo[_0x2e71[6]][z][_0x2e71[7]];var nName=threadInfo[_0x2e71[6]][z][_0x2e71[8]];if(gioitinhone== _0x2e71[9]){gendernam[_0x2e71[10]](z+ gioitinhone)}else {if(gioitinhone== _0x2e71[11]){gendernu[_0x2e71[10]](gioitinhone)}else {nope[_0x2e71[10]](nName)}}};var nam=gendernam[_0x2e71[4]];var nu=gendernu[_0x2e71[4]];let qtv=threadInfo[_0x2e71[12]][_0x2e71[4]];let sl=threadInfo[_0x2e71[13]];let u=threadInfo[_0x2e71[14]];let icon=threadInfo[_0x2e71[15]];let threadName=threadInfo[_0x2e71[16]];let id=threadInfo[_0x2e71[3]];let sex=threadInfo[_0x2e71[17]];var pd=sex== false?_0x2e71[18]:sex== true?_0x2e71[19]:_0x2e71[20];api[_0x2e71[24]](`${_0x2e71[21]}${nam}${_0x2e71[22]}`,event[_0x2e71[3]],event[_0x2e71[23]])
}
  	else if (input=="nữ"){
var _0x558c=["\x20","\x6A\x6F\x69\x6E","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6C\x65\x6E\x67\x74\x68","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x67\x65\x6E\x64\x65\x72","\x6E\x61\x6D\x65","\x4D\x41\x4C\x45","\x70\x75\x73\x68","\x46\x45\x4D\x41\x4C\x45","\x61\x64\x6D\x69\x6E\x49\x44\x73","\x6D\x65\x73\x73\x61\x67\x65\x43\x6F\x75\x6E\x74","\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x73","\x65\x6D\x6F\x6A\x69","\x74\x68\x72\x65\x61\x64\x4E\x61\x6D\x65","\x61\x70\x70\x72\x6F\x76\x61\x6C\x4D\x6F\x64\x65","\x74\u1EAF\x74","\x62\u1EAD\x74","\x4B\x68","\u26A1\uFE0F\x54\u1ED5\x6E\x67\x20","\x20\x74\x68\xE0\x6E\x68\x20\x76\x69\xEA\x6E\x20\x6E\u1EEF","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var idbox=args[_0x558c[1]](_0x558c[0]);try{var threadInfo= await api[_0x558c[2]](args[0])}catch(e){var threadInfo= await api[_0x558c[2]](event[_0x558c[3]])};var memLength=threadInfo[_0x558c[5]][_0x558c[4]];let threadMem=threadInfo[_0x558c[5]][_0x558c[4]];var nameMen=[];var gendernam=[];var gendernu=[];var nope=[];for(let z in threadInfo[_0x558c[6]]){var gioitinhone=threadInfo[_0x558c[6]][z][_0x558c[7]];var nName=threadInfo[_0x558c[6]][z][_0x558c[8]];if(gioitinhone== _0x558c[9]){gendernam[_0x558c[10]](z+ gioitinhone)}else {if(gioitinhone== _0x558c[11]){gendernu[_0x558c[10]](gioitinhone)}else {nope[_0x558c[10]](nName)}}};var nam=gendernam[_0x558c[4]];var nu=gendernu[_0x558c[4]];let qtv=threadInfo[_0x558c[12]][_0x558c[4]];let sl=threadInfo[_0x558c[13]];let u=threadInfo[_0x558c[14]];let icon=threadInfo[_0x558c[15]];let threadName=threadInfo[_0x558c[16]];let id=threadInfo[_0x558c[3]];let sex=threadInfo[_0x558c[17]];var pd=sex== false?_0x558c[18]:sex== true?_0x558c[19]:_0x558c[20];api[_0x558c[24]](`${_0x558c[21]}${nu}${_0x558c[22]}`,event[_0x558c[3]],event[_0x558c[23]])
}
  	else if (input=="boxmess"){
var _0x321a=["\x20","\x6A\x6F\x69\x6E","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6C\x65\x6E\x67\x74\x68","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x67\x65\x6E\x64\x65\x72","\x6E\x61\x6D\x65","\x4D\x41\x4C\x45","\x70\x75\x73\x68","\x46\x45\x4D\x41\x4C\x45","\x61\x64\x6D\x69\x6E\x49\x44\x73","\x6D\x65\x73\x73\x61\x67\x65\x43\x6F\x75\x6E\x74","\x6E\x69\x63\x6B\x6E\x61\x6D\x65\x73","\x65\x6D\x6F\x6A\x69","\x74\x68\x72\x65\x61\x64\x4E\x61\x6D\x65","\x61\x70\x70\x72\x6F\x76\x61\x6C\x4D\x6F\x64\x65","\x74\u1EAF\x74","\x62\u1EAD\x74","\x4B\x68","\u26A1\uFE0F\x54\u1ED5\x6E\x67\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E\x20\x63\u1EE7\x61\x20\x6E\x68\xF3\x6D\x20","\x20\x6C\xE0\x20","\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var idbox=args[_0x321a[1]](_0x321a[0]);try{var threadInfo= await api[_0x321a[2]](args[0])}catch(e){var threadInfo= await api[_0x321a[2]](event[_0x321a[3]])};var memLength=threadInfo[_0x321a[5]][_0x321a[4]];let threadMem=threadInfo[_0x321a[5]][_0x321a[4]];var nameMen=[];var gendernam=[];var gendernu=[];var nope=[];for(let z in threadInfo[_0x321a[6]]){var gioitinhone=threadInfo[_0x321a[6]][z][_0x321a[7]];var nName=threadInfo[_0x321a[6]][z][_0x321a[8]];if(gioitinhone== _0x321a[9]){gendernam[_0x321a[10]](z+ gioitinhone)}else {if(gioitinhone== _0x321a[11]){gendernu[_0x321a[10]](gioitinhone)}else {nope[_0x321a[10]](nName)}}};var nam=gendernam[_0x321a[4]];var nu=gendernu[_0x321a[4]];let qtv=threadInfo[_0x321a[12]][_0x321a[4]];let sl=threadInfo[_0x321a[13]];let u=threadInfo[_0x321a[14]];let icon=threadInfo[_0x321a[15]];let threadName=threadInfo[_0x321a[16]];let id=threadInfo[_0x321a[3]];let sex=threadInfo[_0x321a[17]];var pd=sex== false?_0x321a[18]:sex== true?_0x321a[19]:_0x321a[20];api[_0x321a[25]](`${_0x321a[21]}${threadName}${_0x321a[22]}${sl}${_0x321a[23]}`,event[_0x321a[3]],event[_0x321a[24]])
}
  	else if (input=="qtv"){
var _0x8120=["\x20","\x6A\x6F\x69\x6E","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x49\x6E\x66\x6F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6C\x65\x6E\x67\x74\x68","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x49\x44\x73","\x75\x73\x65\x72\x49\x6E\x66\x6F","\x67\x65\x6E\x64\x65\x72","\x6E\x61\x6D\x65","\x4D\x41\x4C\x45","\x70\x75\x73\x68","\x46\x45\x4D\x41\x4C\x45","\x61\x64\x6D\x69\x6E\x49\x44\x73","\x6D\x65\x73\x73\x61\x67\x65\x43\x6F\x75\x6E\x74","\x65\x6D\x6F\x6A\x69","\x74\x68\x72\x65\x61\x64\x4E\x61\x6D\x65","","\x69\x64","\x67\x65\x74\x44\x61\x74\x61","\u2022","\x0A","\x61\x70\x70\x72\x6F\x76\x61\x6C\x4D\x6F\x64\x65","\x74\u1EAF\x74","\x62\u1EAD\x74","\x4B\x68"];var idbox=args[_0x8120[1]](_0x8120[0]);try{var threadInfo= await api[_0x8120[2]](args[0])}catch(e){var threadInfo= await api[_0x8120[2]](event[_0x8120[3]])};var memLength=threadInfo[_0x8120[5]][_0x8120[4]];let threadMem=threadInfo[_0x8120[5]][_0x8120[4]];var nameMen=[];var gendernam=[];var gendernu=[];var nope=[];for(let z in threadInfo[_0x8120[6]]){var gioitinhone=threadInfo[_0x8120[6]][z][_0x8120[7]];var nName=threadInfo[_0x8120[6]][z][_0x8120[8]];if(gioitinhone== _0x8120[9]){gendernam[_0x8120[10]](z+ gioitinhone)}else {if(gioitinhone== _0x8120[11]){gendernu[_0x8120[10]](gioitinhone)}else {nope[_0x8120[10]](nName)}}};var nam=gendernam[_0x8120[4]];var nu=gendernu[_0x8120[4]];let qtv=threadInfo[_0x8120[12]][_0x8120[4]];let sl=threadInfo[_0x8120[13]];let icon=threadInfo[_0x8120[14]];let threadName=threadInfo[_0x8120[15]];let id=threadInfo[_0x8120[3]];var listad=_0x8120[16];var qtv2=threadInfo[_0x8120[12]];for(let i=0;i< qtv2[_0x8120[4]];i++){const name=( await Users[_0x8120[18]](qtv2[i][_0x8120[17]]))[_0x8120[8]];listad+= _0x8120[19]+ name+ _0x8120[20]};let sex=threadInfo[_0x8120[21]];var pd=sex== false?_0x8120[22]:sex== true?_0x8120[23]:_0x8120[24]
	api.sendMessage(
		`⚡️Tổng ${qtv} quản trị viên, gồm:\n${listad}`,
		event.threadID,
		event.messageID
	);
}
  	else if (input=="thread"){

var _0x462f=["\x49\x4E\x42\x4F\x58","\x67\x65\x74\x54\x68\x72\x65\x61\x64\x4C\x69\x73\x74","\x69\x73\x53\x75\x62\x73\x63\x72\x69\x62\x65\x64","\x69\x73\x47\x72\x6F\x75\x70","\x66\x69\x6C\x74\x65\x72",""];var inbox= await api[_0x462f[1]](300,null,[_0x462f[0]]);let list=[...inbox][_0x462f[4]]((_0x5a8fx3)=>{return _0x5a8fx3[_0x462f[2]]&& _0x5a8fx3[_0x462f[3]]});var abc=_0x462f[5];let i=0
  for (var groupInfo of list) {
    abc += `${i+=1}. ${groupInfo.name}\n------------------------------\n`;
  }
  api.sendMessage(abc, event.threadID);
	}

 	else if (input=="mymess"){
var _0x5772=["\x75\x73\x65\x72\x49\x6E\x66\x6F","\x69\x64","\x6E\x61\x6D\x65","\x70\x75\x73\x68","\x67\x65\x74\x44\x61\x74\x61","\x65\x78\x70","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x73\x6F\x72\x74","\x75\x69\x64","\x73\x65\x6E\x64\x65\x72\x49\x44","\x66\x69\x6E\x64\x49\x6E\x64\x65\x78","\u26A1\uFE0F\x54\u1ED5\x6E\x67\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E\x20\x63\u1EE7\x61\x20\x62\u1EA1\x6E\x20\x6C\xE0\x20","\x20\x74\x69\x6E\x20\x6E\x68\u1EAF\x6E","\x74\x68\x72\x65\x61\x64\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];var storage=[],exp=[];for(const value of data[_0x5772[0]]){storage[_0x5772[3]]({"\x69\x64":value[_0x5772[1]],"\x6E\x61\x6D\x65":value[_0x5772[2]]})};for(const user of storage){const countMess= await Currencies[_0x5772[4]](user[_0x5772[1]]);exp[_0x5772[3]]({"\x6E\x61\x6D\x65":user[_0x5772[2]],"\x65\x78\x70":( typeof countMess[_0x5772[5]]== _0x5772[6])?0:countMess[_0x5772[5]],"\x75\x69\x64":user[_0x5772[1]]})};exp[_0x5772[7]]((_0x236fx6,_0x236fx7)=>{if(_0x236fx6[_0x5772[5]]> _0x236fx7[_0x5772[5]]){return -1};if(_0x236fx6[_0x5772[5]]< _0x236fx7[_0x5772[5]]){return 1};if(_0x236fx6[_0x5772[1]]> _0x236fx7[_0x5772[1]]){return 1};if(_0x236fx6[_0x5772[1]]< _0x236fx7[_0x5772[1]]){return -1}});const rank=exp[_0x5772[10]]((_0x236fx9)=>{return parseInt(_0x236fx9[_0x5772[8]])== parseInt(event[_0x5772[9]])})+ 1;const infoUser=exp[rank- 1];return api[_0x5772[14]](`${_0x5772[11]}${infoUser[_0x5772[5]]}${_0x5772[12]}`,event[_0x5772[13]])
    };
}