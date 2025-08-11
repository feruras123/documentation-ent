/** @format */

// /** @format */

// function computeCompiledData(res) {
//   const sixthGradeArr = [];
//   const seventhGradeArr = [];
//   const eighthGradeArr = [];
//   const sundayArr = [];
//   const mondayArr = [];
//   const tuesdayArr = [];
//   const wednesdayArr = [];
//   const thursdayArr = [];
//   const fridayArr = [];
//   const saturdayArr = [];
//   const nullGender = [];
//   const maleGender = [];
//   const femaleGender = [];
//   const nonGender = [];
//   const speakUpArr = [];
//   const whatsUpArr = [];
//   const dealWithItArr = [];
//   const iokArr = [];
//   const sexualOrientationNotAnswered = [];
//   const sexualOrientationHetero = [];
//   const sexualOrientationLG = [];

//   for (let i = 0; i < res.data.compiledData.length; i++) {
//     // eslint-disable-next-line default-case
//     switch (res.data.compiledData[i].grade) {
//       case '6':
//         sixthGradeArr.push(res.data.compiledData[i].grade);
//         break;
//       case '7':
//         seventhGradeArr.push(res.data.compiledData[i].grade);
//         break;
//       case '8':
//         eighthGradeArr.push(res.data.compiledData[i].grade);
//         break;
//     }
//   }

//   for (let i = 0; i < res.data.compiledData.length; i++) {
//     const { gender } = res.data.compiledData[i];
//     const { sexualOrientation } = res.data.compiledData[i];
//     // eslint-disable-next-line default-case
//     switch (gender) {
//       case null:
//         nullGender.push(gender);
//         break;
//       case 1:
//         maleGender.push(gender);
//         break;
//       case 2:
//         femaleGender.push(gender);
//         break;
//       case 6:
//         nonGender.push(gender);
//         break;
//     }
//     // eslint-disable-next-line default-case
//     switch (sexualOrientation) {
//       case null:
//         sexualOrientationNotAnswered.push(sexualOrientation);
//         break;
//       case 'H':
//         sexualOrientationHetero.push(sexualOrientation);
//         break;
//       case 'L':
//         sexualOrientationLG.push(sexualOrientation);
//         break;
//     }

//     for (let x = 0; x < res.data.compiledData[i].iokData.length; x++) {
//       const iokData = res.data.compiledData[i].iokData[x];
//       const date = new Date(iokData.timestamp * 1000);
//       const day = date.getDay();
//       const year = date.getFullYear();
//       const month = date.getMonth();
//       const week = moment(date).week();

//       // eslint-disable-next-line default-case
//       if (week === currentWeek) {
//         iokArr.push(iokData);
//         // eslint-disable-next-line default-case
//         switch (day) {
//           case 0:
//             sundayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[0].scores.push(iokData);
//                 break;
//               case 2:
//                 black[0].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[0].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[0].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[0].scores.push(iokData);
//                 break;
//               case 6:
//                 native[0].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[0].scores.push(iokData);
//                 break;
//             }

//             break;
//           case 1:
//             mondayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[1].scores.push(iokData);
//                 break;
//               case 2:
//                 black[1].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[1].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[1].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[1].scores.push(iokData);
//                 break;
//               case 6:
//                 native[1].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[1].scores.push(iokData);
//                 break;
//             }
//             break;
//           case 2:
//             tuesdayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[2].scores.push(iokData);
//                 break;
//               case 2:
//                 black[2].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[2].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[2].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[2].scores.push(iokData);
//                 break;
//               case 6:
//                 native[2].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[2].scores.push(iokData);
//                 break;
//             }
//             break;
//           case 3:
//             wednesdayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[3].scores.push(iokData);
//                 break;
//               case 2:
//                 black[3].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[3].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[3].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[3].scores.push(iokData);
//                 break;
//               case 6:
//                 native[3].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[3].scores.push(iokData);
//                 break;
//             }
//             break;
//           case 4:
//             thursdayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[4].scores.push(iokData);
//                 break;
//               case 2:
//                 black[4].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[4].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[4].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[4].scores.push(iokData);
//                 break;
//               case 6:
//                 native[4].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[4].scores.push(iokData);
//                 break;
//             }
//             break;
//           case 5:
//             fridayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[5].scores.push(iokData);
//                 break;
//               case 2:
//                 black[5].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[5].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[5].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[5].scores.push(iokData);
//                 break;
//               case 6:
//                 native[5].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[5].scores.push(iokData);
//                 break;
//             }
//             break;
//           case 6:
//             saturdayArr.push(iokData);
//             switch (iokData.ethnicity) {
//               case 1:
//                 white[6].scores.push(iokData);
//                 break;
//               case 2:
//                 black[6].scores.push(iokData);
//                 break;
//               case 3:
//                 asian[6].scores.push(iokData);
//                 break;
//               case 4:
//                 hispanic[6].scores.push(iokData);
//                 break;
//               case 5:
//                 islanders[6].scores.push(iokData);
//                 break;
//               case 6:
//                 native[6].scores.push(iokData);
//                 break;
//               case 9:
//                 unknown[6].scores.push(iokData);
//                 break;
//             }
//             break;
//         }
//       } else if (week === currentWeek && iokData.method === 'speak') {
//         speakUpArr.push(iokData);
//       } else if (week === currentWeek && iokData.method === 'deal') {
//         dealWithItArr.push(iokData);
//       } else if (week === currentWeek && iokData.method === 'whats') {
//         whatsUpArr.push(iokData);
//       }
//     }
//   }
// }
