/** @format */

// /** @format */
// /* eslint-disable no-unused-vars */
// /* eslint-disable consistent-return */
// /* eslint-disable default-case */
// /* eslint-disable eqeqeq */
// import React from 'react';
// import Card from '@components/cards/Card';
// import BoxPlot from '@components/charts/BoxPlot';
// import MultiLine from '@components/charts/MultiLine';
// import { Row } from 'react-bootstrap';
// import axios from 'axios';
// import moment from 'moment';
// import { useSelector } from 'react-redux';
// import _ from 'lodash';
// import PieChart from '@components/charts/PieChart';
// import MultiBar from '@components/charts/MultiBar';
// import HorizontalChart from '@components/charts/HorizontalChart';
// import { srv } from '../../srvConfig';
// import { socket } from '../../utils/socket';
// import score from './components/util/score';
// import LoadingModal from '../../utils/LoadingModal';

// function DashboardTab({ grade }) {
//   function calcEthnicity(ethnicity, weekDayIndex) {
//     let scr = ethnicity[weekDayIndex].scores.map((s) => s.status);
//     scr = scr.reduce((a, b) => a + b, 0) / scr.length;
//     // eslint-disable-next-line no-restricted-globals
//     return isNaN(scr) ? 0 : scr;
//   }
//   const socketID = useSelector((state) => state.socketIDSlice.socketID);
//   const compiledStateData = useSelector((state) => state.compiledDataSlice);
//   const trendingWordsByGrade = compiledStateData.trendingWordsByGrade[grade];
//   const [speakComments, setSpeakComments] = React.useState([]);
//   const [speakPosts, setSpeakPosts] = React.useState([]);
//   const [whatsComments, setWhatsComments] = React.useState([]);
//   const [whatsPosts, setWhatsPosts] = React.useState([]);
//   const [dealComments, setDealComments] = React.useState([]);
//   const [dealPosts, setDealPosts] = React.useState([]);

//   const [sixthGrade, setSixth] = React.useState(null);
//   const [seventhGrade, setSeventh] = React.useState(null);
//   const [eighthGrade, setEighth] = React.useState(null);
//   const [genderData, setGenderData] = React.useState([]);
//   const [whatsUp, setWhatsUp] = React.useState([]);
//   const [dealWithIt, setDealWithIt] = React.useState([]);
//   const [totalIok, setTotalIok] = React.useState([]);
//   const [speakUp, setSpeakUp] = React.useState([]);
//   const [sexualOrientationArr, setSexualOrientation] = React.useState([]);
//   const [negativeLabels, setNegativeLabels] = React.useState([]);
//   const [positiveLabels, setPositiveLabels] = React.useState([]);
//   const [trendingNegative, setTrendingNegative] = React.useState([]);
//   const [trendingPositive, setTrendingPositive] = React.useState([]);
//   const [engagement, setEngagement] = React.useState([]);
//   const [toggle, setToggle] = React.useState(1);
//   const [loadingMessage, setLoadingMessage] = React.useState('');
//   const [progressPercentage, setProgressPercentage] = React.useState(0);
//   const [isLoading, setIsLoading] = React.useState(false);

//   socket.on('progress', (data) => {
//     setLoadingMessage(data.operation);
//     setProgressPercentage(data.percentage);
//   });
//   const [ethnicData, setEthnicData] = React.useState([
//     {
//       name: 'White',
//       type: 'line',
//       data: [],
//     },
//     {
//       name: 'Black or African American',
//       type: 'line',
//       data: [],
//     },
//     {
//       name: 'Asian',
//       type: 'line',
//       data: [],
//     },
//     {
//       name: 'American Indian or Alaska Native',
//       type: 'line',
//       data: [],
//     },
//     {
//       name: 'Native Hawaiian or Other Pacific Islander',
//       type: 'line',
//       data: [],
//     },
//     {
//       name: 'Hispanic',
//       type: 'line',
//       data: [],
//     },
//     {
//       name: 'Unknown',
//       type: 'line',
//       data: [],
//     },
//   ]);
//   const dateTime = new Date();
//   const currentYear = dateTime.getFullYear();
//   const currentWeek = moment().week();
//   const currentMonth = dateTime.getMonth();

//   const [data, setData] = React.useState([
//     {
//       x: 'Sunday',
//       y: [], // open, high, low, close
//     },
//     {
//       x: 'Monday',
//       y: [],
//     },
//     {
//       x: 'Tuesday',
//       y: [],
//     },
//     {
//       x: 'Wednesday',
//       y: [],
//     },
//     {
//       x: 'Thursday',
//       y: [],
//     },
//     {
//       x: 'Friday',
//       y: [],
//     },
//     {
//       x: 'Saturday',
//       y: [],
//     },
//   ]);

//   const EdUserOrg = localStorage.getItem('organization');
//   const isSupervisingEntity = localStorage.getItem('isSupervisingEntity');
//   let supervisedOrgs = localStorage.getItem('supervisedOrgs');
//   if (isSupervisingEntity === 'true') {
//     supervisedOrgs = JSON.parse(supervisedOrgs);
//   }

//   function returnOrganizations(isSupervisor) {
//     if (isSupervisor !== 'undefined') {
//       return supervisedOrgs;
//     }
//     if (isSupervisor === 'undefined') {
//       return EdUserOrg;
//     }
//   }

//   React.useEffect(() => {
//     if (compiledStateData.compiledData.length === 0) {
//       setIsLoading(true);
//       setProgressPercentage(0);
//       setLoadingMessage('Contacting Server');
//       if (socketID) {
//         axios
//           .post(`${srv}/extractAndCompileSchool`, {
//             organization: returnOrganizations(isSupervisingEntity),
//             grade,
//             sid: socketID,
//           })
//           .then((res) => {
//             const speakCommentsArr = [];
//             const speakPostsArr = [];
//             const whatsCommentsArr = [];
//             const whatsPostsArr = [];
//             const dealCommentsArr = [];
//             const dealPostsArr = [];

//             const sixthGradeArr = [];
//             const seventhGradeArr = [];
//             const eighthGradeArr = [];
//             const sundayArr = [];
//             const mondayArr = [];
//             const tuesdayArr = [];
//             const wednesdayArr = [];
//             const thursdayArr = [];
//             const fridayArr = [];
//             const saturdayArr = [];
//             const nullGender = [];
//             const maleGender = [];
//             const femaleGender = [];
//             const nonGender = [];

//             const speakUpArr = [];
//             const whatsUpArr = [];
//             const dealWithItArr = [];
//             const iokArr = [];

//             const sexualOrientationNotAnswered = [];
//             const sexualOrientationHetero = [];
//             const sexualOrientationLG = [];

//             const white = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             const black = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             const asian = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             const hispanic = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             const islanders = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             const native = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             const unknown = [
//               { day: 'Sunday', scores: [] },
//               { day: 'Monday', scores: [] },
//               { day: 'Tuesday', scores: [] },
//               { day: 'Wednesday', scores: [] },
//               { day: 'Thrusday', scores: [] },
//               { day: 'Friday', scores: [] },
//               { day: 'Saturday', scores: [] },
//             ];

//             for (let i = 0; i < res.data.compiledData.length; i++) {
//               if (EdUserOrg !== 'YouRok') {
//                 if (isSupervisingEntity === 'undefined') {
//                   if (
//                     EdUserOrg === res.data.compiledData[i].organization &&
//                     res.data.compiledData[i].grade === grade
//                   ) {
//                     const { gender } = res.data.compiledData[i];
//                     const { sexualOrientation } = res.data.compiledData[i];
//                     // eslint-disable-next-line default-case
//                     switch (gender) {
//                       case null:
//                         nullGender.push(gender);
//                         break;
//                       case 1:
//                         maleGender.push(gender);
//                         break;
//                       case 2:
//                         femaleGender.push(gender);
//                         break;
//                       case 6:
//                         nonGender.push(gender);
//                         break;
//                     }
//                     // eslint-disable-next-line default-case
//                     switch (sexualOrientation) {
//                       case null:
//                         sexualOrientationNotAnswered.push(sexualOrientation);
//                         break;
//                       case 'H':
//                         sexualOrientationHetero.push(sexualOrientation);
//                         break;
//                       case 'L':
//                         sexualOrientationLG.push(sexualOrientation);
//                         break;
//                     }

//                     for (
//                       let x = 0;
//                       x < res.data.compiledData[i].iokData.length;
//                       x++
//                     ) {
//                       const iokData = res.data.compiledData[i].iokData[x];
//                       const date = new Date(iokData.timestamp * 1000);
//                       const day = date.getDay();
//                       const year = date.getFullYear();
//                       const month = date.getMonth();
//                       const week = moment(date).week();

//                       // eslint-disable-next-line default-case
//                       if (week === currentWeek) {
//                         iokArr.push(iokData);
//                         // eslint-disable-next-line default-case
//                         switch (day) {
//                           case 0:
//                             sundayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[0].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[0].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[0].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[0].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[0].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[0].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[0].scores.push(iokData);
//                                 break;
//                             }

//                             break;
//                           case 1:
//                             mondayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[1].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[1].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[1].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[1].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[1].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[1].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[1].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 2:
//                             tuesdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[2].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[2].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[2].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[2].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[2].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[2].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[2].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 3:
//                             wednesdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[3].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[3].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[3].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[3].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[3].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[3].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[3].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 4:
//                             thursdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[4].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[4].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[4].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[4].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[4].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[4].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[4].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 5:
//                             fridayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[5].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[5].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[5].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[5].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[5].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[5].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[5].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 6:
//                             saturdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[6].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[6].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[6].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[6].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[6].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[6].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[6].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                         }
//                       } else if (
//                         week === currentWeek &&
//                         iokData.method === 'speak'
//                       ) {
//                         speakUpArr.push(iokData);
//                       } else if (
//                         week === currentWeek &&
//                         iokData.method === 'deal'
//                       ) {
//                         dealWithItArr.push(iokData);
//                       } else if (
//                         week === currentWeek &&
//                         iokData.method === 'whats'
//                       ) {
//                         whatsUpArr.push(iokData);
//                       }
//                     }
//                   }
//                 }
//               } else if (EdUserOrg === 'YouRok') {
//                 const { gender } = res.data.compiledData[i];
//                 const { sexualOrientation } = res.data.compiledData[i];
//                 // eslint-disable-next-line default-case
//                 switch (gender) {
//                   case null:
//                     nullGender.push(gender);
//                     break;
//                   case 1:
//                     maleGender.push(gender);
//                     break;
//                   case 2:
//                     femaleGender.push(gender);
//                     break;
//                   case 6:
//                     nonGender.push(gender);
//                     break;
//                 }
//                 // eslint-disable-next-line default-case
//                 switch (sexualOrientation) {
//                   case null:
//                     sexualOrientationNotAnswered.push(sexualOrientation);
//                     break;
//                   case 'H':
//                     sexualOrientationHetero.push(sexualOrientation);
//                     break;
//                   case 'L':
//                     sexualOrientationLG.push(sexualOrientation);
//                     break;
//                 }

//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].iokData.length;
//                   x++
//                 ) {
//                   const iokData = res.data.compiledData[i].iokData[x];
//                   const date = new Date(iokData.timestamp * 1000);
//                   const day = date.getDay();
//                   const year = date.getFullYear();
//                   const month = date.getMonth();
//                   const week = moment(date).week();

//                   // eslint-disable-next-line default-case
//                   if (week === currentWeek) {
//                     iokArr.push(iokData);
//                     // eslint-disable-next-line default-case
//                     switch (day) {
//                       case 0:
//                         sundayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[0].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[0].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[0].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[0].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[0].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[0].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[0].scores.push(iokData);
//                             break;
//                         }

//                         break;
//                       case 1:
//                         mondayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[1].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[1].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[1].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[1].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[1].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[1].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[1].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 2:
//                         tuesdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[2].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[2].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[2].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[2].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[2].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[2].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[2].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 3:
//                         wednesdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[3].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[3].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[3].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[3].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[3].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[3].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[3].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 4:
//                         thursdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[4].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[4].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[4].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[4].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[4].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[4].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[4].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 5:
//                         fridayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[5].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[5].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[5].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[5].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[5].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[5].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[5].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 6:
//                         saturdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[6].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[6].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[6].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[6].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[6].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[6].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[6].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                     }
//                   } else if (
//                     week === currentWeek &&
//                     iokData.method === 'speak'
//                   ) {
//                     speakUpArr.push(iokData);
//                   } else if (
//                     week === currentWeek &&
//                     iokData.method === 'deal'
//                   ) {
//                     dealWithItArr.push(iokData);
//                   } else if (
//                     week === currentWeek &&
//                     iokData.method === 'whats'
//                   ) {
//                     whatsUpArr.push(iokData);
//                   }
//                 }
//               }
//             }

//             for (let i = 0; i < res.data.compiledData.length; i++) {
//               // eslint-disable-next-line default-case
//               if (EdUserOrg !== 'YouRok') {
//                 if (isSupervisingEntity === 'undefined') {
//                   if (EdUserOrg === res.data.compiledData[i].organization) {
//                     switch (res.data.compiledData[i].grade) {
//                       case '6':
//                         sixthGradeArr.push(res.data.compiledData[i].grade);
//                         break;
//                       case '7':
//                         seventhGradeArr.push(res.data.compiledData[i].grade);
//                         break;
//                       case '8':
//                         eighthGradeArr.push(res.data.compiledData[i].grade);
//                         break;
//                     }
//                   }
//                 } else if (isSupervisingEntity !== 'undefined') {
//                   for (let x = 0; x < supervisedOrgs.length; x++) {
//                     if (
//                       supervisedOrgs[x] ===
//                       res.data.compiledData[i].organization
//                     ) {
//                       switch (res.data.compiledData[i].grade) {
//                         case '6':
//                           sixthGradeArr.push(res.data.compiledData[i].grade);
//                           break;
//                         case '7':
//                           seventhGradeArr.push(res.data.compiledData[i].grade);
//                           break;
//                         case '8':
//                           eighthGradeArr.push(res.data.compiledData[i].grade);
//                           break;
//                       }
//                     }
//                   }
//                 }
//               } else if (EdUserOrg === 'YouRok') {
//                 switch (res.data.compiledData[i].grade) {
//                   case '6':
//                     sixthGradeArr.push(res.data.compiledData[i].grade);
//                     break;
//                   case '7':
//                     seventhGradeArr.push(res.data.compiledData[i].grade);
//                     break;
//                   case '8':
//                     eighthGradeArr.push(res.data.compiledData[i].grade);
//                     break;
//                 }
//               }
//             }

//             if (isSupervisingEntity !== 'undefined') {
//               for (let i = 0; i < res.data.compiledData.length; i++) {
//                 for (let y = 0; y < supervisedOrgs.length; y++) {
//                   if (
//                     supervisedOrgs[y] ===
//                       res.data.compiledData[i].organization &&
//                     res.data.compiledData[i].grade === grade
//                   ) {
//                     const { gender } = res.data.compiledData[i];
//                     const { sexualOrientation } = res.data.compiledData[i];
//                     // eslint-disable-next-line default-case
//                     switch (gender) {
//                       case null:
//                         nullGender.push(gender);
//                         break;
//                       case 1:
//                         maleGender.push(gender);
//                         break;
//                       case 2:
//                         femaleGender.push(gender);
//                         break;
//                       case 6:
//                         nonGender.push(gender);
//                         break;
//                     }
//                     // eslint-disable-next-line default-case
//                     switch (sexualOrientation) {
//                       case null:
//                         sexualOrientationNotAnswered.push(sexualOrientation);
//                         break;
//                       case 'H':
//                         sexualOrientationHetero.push(sexualOrientation);
//                         break;
//                       case 'L':
//                         sexualOrientationLG.push(sexualOrientation);
//                         break;
//                     }

//                     for (
//                       let x = 0;
//                       x < res.data.compiledData[i].iokData.length;
//                       x++
//                     ) {
//                       const iokData = res.data.compiledData[i].iokData[x];
//                       const date = new Date(iokData.timestamp * 1000);
//                       const day = date.getDay();
//                       const year = date.getFullYear();
//                       const month = date.getMonth();
//                       const week = moment(date).week();

//                       // eslint-disable-next-line default-case
//                       if (week === currentWeek) {
//                         iokArr.push(iokData);
//                         // eslint-disable-next-line default-case
//                         switch (day) {
//                           case 0:
//                             sundayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[0].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[0].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[0].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[0].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[0].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[0].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[0].scores.push(iokData);
//                                 break;
//                             }

//                             break;
//                           case 1:
//                             mondayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[1].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[1].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[1].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[1].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[1].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[1].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[1].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 2:
//                             tuesdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[2].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[2].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[2].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[2].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[2].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[2].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[2].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 3:
//                             wednesdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[3].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[3].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[3].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[3].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[3].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[3].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[3].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 4:
//                             thursdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[4].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[4].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[4].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[4].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[4].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[4].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[4].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 5:
//                             fridayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[5].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[5].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[5].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[5].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[5].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[5].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[5].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                           case 6:
//                             saturdayArr.push(iokData);
//                             switch (iokData.ethnicity) {
//                               case 1:
//                                 white[6].scores.push(iokData);
//                                 break;
//                               case 2:
//                                 black[6].scores.push(iokData);
//                                 break;
//                               case 3:
//                                 asian[6].scores.push(iokData);
//                                 break;
//                               case 4:
//                                 hispanic[6].scores.push(iokData);
//                                 break;
//                               case 5:
//                                 islanders[6].scores.push(iokData);
//                                 break;
//                               case 6:
//                                 native[6].scores.push(iokData);
//                                 break;
//                               case 9:
//                                 unknown[6].scores.push(iokData);
//                                 break;
//                             }
//                             break;
//                         }
//                       } else if (
//                         week === currentWeek &&
//                         iokData.method === 'speak'
//                       ) {
//                         speakUpArr.push(iokData);
//                       } else if (
//                         week === currentWeek &&
//                         iokData.method === 'deal'
//                       ) {
//                         dealWithItArr.push(iokData);
//                       } else if (
//                         week === currentWeek &&
//                         iokData.method === 'whats'
//                       ) {
//                         whatsUpArr.push(iokData);
//                       }
//                     }
//                   }
//                 }
//               }
//             }

//             setData(() => [
//               {
//                 x: 'Sunday',
//                 y: [
//                   score(sundayArr).quant25,
//                   score(sundayArr).max,
//                   score(sundayArr).min,
//                   score(sundayArr).quant75,
//                 ], // open, high, low, close
//               },
//               {
//                 x: 'Monday',
//                 y: [
//                   score(mondayArr).quant25,
//                   score(mondayArr).max,
//                   score(mondayArr).min,
//                   score(mondayArr).quant75,
//                 ],
//               },
//               {
//                 x: 'Tuesday',
//                 y: [
//                   score(tuesdayArr).quant25,
//                   score(tuesdayArr).max,
//                   score(tuesdayArr).min,
//                   score(tuesdayArr).quant75,
//                 ],
//               },
//               {
//                 x: 'Wednesday',
//                 y: [
//                   score(wednesdayArr).quant25,
//                   score(wednesdayArr).max,
//                   score(wednesdayArr).min,
//                   score(wednesdayArr).quant75,
//                 ],
//               },
//               {
//                 x: 'Thursday',
//                 y: [
//                   score(thursdayArr).quant25,
//                   score(thursdayArr).max,
//                   score(thursdayArr).min,
//                   score(thursdayArr).quant75,
//                 ],
//               },
//               {
//                 x: 'Friday',
//                 y: [
//                   score(fridayArr).quant25,
//                   score(fridayArr).max,
//                   score(fridayArr).min,
//                   score(fridayArr).quant75,
//                 ],
//               },
//               {
//                 x: 'Saturday',
//                 y: [
//                   score(saturdayArr).quant25,
//                   score(saturdayArr).max,
//                   score(saturdayArr).min,
//                   score(saturdayArr).quant75,
//                 ],
//               },
//             ]);

//             for (let i = 0; i < res.data.compiledData.length; i++) {
//               // eslint-disable-next-line default-case
//               switch (res.data.compiledData[i].grade) {
//                 case '6':
//                   sixthGradeArr.push(res.data.compiledData[i].grade);
//                   break;
//                 case '7':
//                   seventhGradeArr.push(res.data.compiledData[i].grade);
//                   break;
//                 case '8':
//                   eighthGradeArr.push(res.data.compiledData[i].grade);
//                   break;
//               }
//             }

//             const negative = res.data.trendingWords.negativeTrend;
//             const positive = res.data.trendingWords.positiveTrend;
//             const mutableNegative = _.cloneDeep(negative);
//             const mutablePositive = _.cloneDeep(positive);
//             Object.keys(mutablePositive).forEach((key) => {
//               if (mutablePositive[key] === 0) {
//                 delete mutablePositive[key];
//               }
//             });
//             Object.keys(mutableNegative).forEach((key) => {
//               if (mutableNegative[key] === 0) {
//                 delete mutableNegative[key];
//               }
//             });

//             const negativeIdentifiers = Object.keys(mutableNegative);
//             const positiveIdentifiers = Object.keys(mutablePositive);
//             const negativeValues = Object.values(mutableNegative);
//             const positiveValues = Object.values(mutablePositive);
//             setNegativeLabels(() => negativeIdentifiers);
//             setPositiveLabels(() => positiveIdentifiers);
//             setTrendingNegative(() => negativeValues);
//             setTrendingPositive(() => positiveValues);

//             const iokEngagement = res.data.iokEng.percentage;
//             const dealWithItEngagement = res.data.dealEng.percentage;
//             const speakUpEngagement = res.data.speakEng.percentage;
//             const whatsUpEngagement = res.data.whatsEng.percentage;
//             setEngagement(() => [
//               iokEngagement,
//               dealWithItEngagement,
//               speakUpEngagement,
//               whatsUpEngagement,
//             ]);

//             setSixth(sixthGradeArr.length);
//             setSeventh(seventhGradeArr.length);
//             setEighth(eighthGradeArr.length);
//             setWhatsUp(() => whatsUpArr);
//             setDealWithIt(() => dealWithItArr);
//             setTotalIok(() => iokArr);
//             setSpeakUp(() => speakUpArr);
//             setSexualOrientation(() => [
//               sexualOrientationHetero.length,
//               sexualOrientationLG.length,
//               sexualOrientationNotAnswered.length,
//             ]);
//             setGenderData(() => [
//               femaleGender.length,
//               maleGender.length,
//               nonGender.length,
//               nullGender.length,
//             ]);

//             for (let i = 0; i < res.data.compiledData.length; i++) {
//               if (res.data.compiledData[i].grade == grade) {
//                 console.log(
//                   "We've got a grade match!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
//                 );
//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].dealComments.length;
//                   x++
//                 ) {
//                   dealCommentsArr.push(
//                     res.data.compiledData[i].dealComments[x],
//                   );
//                 }
//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].dealPosts.length;
//                   x++
//                 ) {
//                   dealPostsArr.push(res.data.compiledData[i].dealPosts[x]);
//                 }
//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].whatsComments.length;
//                   x++
//                 ) {
//                   whatsCommentsArr.push(
//                     res.data.compiledData[i].whatsComments[x],
//                   );
//                 }
//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].whatsPosts.length;
//                   x++
//                 ) {
//                   whatsPostsArr.push(res.data.compiledData[i].whatsPosts[x]);
//                 }
//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].speakComments.length;
//                   x++
//                 ) {
//                   speakCommentsArr.push(
//                     res.data.compiledData[i].speakComments[x],
//                   );
//                 }
//                 for (
//                   let x = 0;
//                   x < res.data.compiledData[i].speakPosts.length;
//                   x++
//                 ) {
//                   speakPostsArr.push(res.data.compiledData[i].speakPosts[x]);
//                 }
//               }
//             }

//             setSpeakComments(() => speakCommentsArr);
//             setSpeakPosts(() => speakPostsArr);
//             setWhatsComments(() => whatsCommentsArr);
//             setWhatsPosts(() => whatsPostsArr);
//             setDealComments(() => dealCommentsArr);
//             setDealPosts(() => dealPostsArr);

//             setEthnicData(() => [
//               {
//                 name: 'White',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(white, 0),
//                   calcEthnicity(white, 1),
//                   calcEthnicity(white, 2),
//                   calcEthnicity(white, 3),
//                   calcEthnicity(white, 4),
//                   calcEthnicity(white, 5),
//                   calcEthnicity(white, 6),
//                 ],
//               },
//               {
//                 name: 'Black or African American',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(black, 0),
//                   calcEthnicity(black, 1),
//                   calcEthnicity(black, 2),
//                   calcEthnicity(black, 3),
//                   calcEthnicity(black, 4),
//                   calcEthnicity(black, 5),
//                   calcEthnicity(black, 6),
//                 ],
//               },
//               {
//                 name: 'Asian',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(asian, 0),
//                   calcEthnicity(asian, 1),
//                   calcEthnicity(asian, 2),
//                   calcEthnicity(asian, 3),
//                   calcEthnicity(asian, 4),
//                   calcEthnicity(asian, 5),
//                   calcEthnicity(asian, 6),
//                 ],
//               },
//               {
//                 name: 'American Indian or Alaska Native',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(native, 0),
//                   calcEthnicity(native, 1),
//                   calcEthnicity(native, 2),
//                   calcEthnicity(native, 3),
//                   calcEthnicity(native, 4),
//                   calcEthnicity(native, 5),
//                   calcEthnicity(native, 6),
//                 ],
//               },
//               {
//                 name: 'Native Hawaiian or Other Pacific Islander',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(islanders, 0),
//                   calcEthnicity(islanders, 1),
//                   calcEthnicity(islanders, 2),
//                   calcEthnicity(islanders, 3),
//                   calcEthnicity(islanders, 4),
//                   calcEthnicity(islanders, 5),
//                   calcEthnicity(islanders, 6),
//                 ],
//               },
//               {
//                 name: 'Hispanic',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(hispanic, 0),
//                   calcEthnicity(hispanic, 1),
//                   calcEthnicity(hispanic, 2),
//                   calcEthnicity(hispanic, 3),
//                   calcEthnicity(hispanic, 4),
//                   calcEthnicity(hispanic, 5),
//                   calcEthnicity(hispanic, 6),
//                 ],
//               },
//               {
//                 name: 'Unknown',
//                 type: 'line',
//                 data: [
//                   calcEthnicity(unknown, 0),
//                   calcEthnicity(unknown, 1),
//                   calcEthnicity(unknown, 2),
//                   calcEthnicity(unknown, 3),
//                   calcEthnicity(unknown, 4),
//                   calcEthnicity(unknown, 5),
//                   calcEthnicity(unknown, 6),
//                 ],
//               },
//             ]);
//           });
//       }
//     } else {
//       // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//       const compiledData = compiledStateData;
//       const speakCommentsArr = [];
//       const speakPostsArr = [];
//       const whatsCommentsArr = [];
//       const whatsPostsArr = [];
//       const dealCommentsArr = [];
//       const dealPostsArr = [];

//       const sixthGradeArr = [];
//       const seventhGradeArr = [];
//       const eighthGradeArr = [];
//       const sundayArr = [];
//       const mondayArr = [];
//       const tuesdayArr = [];
//       const wednesdayArr = [];
//       const thursdayArr = [];
//       const fridayArr = [];
//       const saturdayArr = [];
//       const nullGender = [];
//       const maleGender = [];
//       const femaleGender = [];
//       const nonGender = [];

//       const speakUpArr = [];
//       const whatsUpArr = [];
//       const dealWithItArr = [];
//       const iokArr = [];

//       const sexualOrientationNotAnswered = [];
//       const sexualOrientationHetero = [];
//       const sexualOrientationLG = [];

//       const white = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       const black = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       const asian = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       const hispanic = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       const islanders = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       const native = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       const unknown = [
//         { day: 'Sunday', scores: [] },
//         { day: 'Monday', scores: [] },
//         { day: 'Tuesday', scores: [] },
//         { day: 'Wednesday', scores: [] },
//         { day: 'Thrusday', scores: [] },
//         { day: 'Friday', scores: [] },
//         { day: 'Saturday', scores: [] },
//       ];

//       for (let i = 0; i < compiledData.compiledData.length; i++) {
//         if (EdUserOrg !== 'YouRok') {
//           if (isSupervisingEntity === 'undefined') {
//             if (
//               EdUserOrg === compiledData.compiledData[i].organization &&
//               compiledData.compiledData[i].grade === grade
//             ) {
//               const { gender } = compiledData.compiledData[i];
//               const { sexualOrientation } = compiledData.compiledData[i];
//               // eslint-disable-next-line default-case
//               switch (gender) {
//                 case null:
//                   nullGender.push(gender);
//                   break;
//                 case 1:
//                   maleGender.push(gender);
//                   break;
//                 case 2:
//                   femaleGender.push(gender);
//                   break;
//                 case 6:
//                   nonGender.push(gender);
//                   break;
//               }
//               // eslint-disable-next-line default-case
//               switch (sexualOrientation) {
//                 case null:
//                   sexualOrientationNotAnswered.push(sexualOrientation);
//                   break;
//                 case 'H':
//                   sexualOrientationHetero.push(sexualOrientation);
//                   break;
//                 case 'L':
//                   sexualOrientationLG.push(sexualOrientation);
//                   break;
//               }

//               for (
//                 let x = 0;
//                 x < compiledData.compiledData[i].iokData.length;
//                 x++
//               ) {
//                 if (
//                   EdUserOrg === compiledData.compiledData[i].organization &&
//                   compiledData.compiledData[i].grade === grade
//                 ) {
//                   const iokData = compiledData.compiledData[i].iokData[x];
//                   const date = new Date(iokData.timestamp * 1000);
//                   const day = date.getDay();
//                   const year = date.getFullYear();
//                   const month = date.getMonth();
//                   const week = moment(date).week();

//                   // eslint-disable-next-line default-case
//                   if (week === currentWeek) {
//                     iokArr.push(iokData);
//                     // eslint-disable-next-line default-case
//                     switch (day) {
//                       case 0:
//                         sundayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[0].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[0].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[0].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[0].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[0].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[0].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[0].scores.push(iokData);
//                             break;
//                         }

//                         break;
//                       case 1:
//                         mondayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[1].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[1].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[1].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[1].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[1].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[1].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[1].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 2:
//                         tuesdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[2].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[2].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[2].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[2].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[2].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[2].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[2].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 3:
//                         wednesdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[3].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[3].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[3].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[3].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[3].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[3].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[3].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 4:
//                         thursdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[4].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[4].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[4].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[4].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[4].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[4].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[4].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 5:
//                         fridayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[5].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[5].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[5].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[5].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[5].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[5].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[5].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                       case 6:
//                         saturdayArr.push(iokData);
//                         switch (iokData.ethnicity) {
//                           case 1:
//                             white[6].scores.push(iokData);
//                             break;
//                           case 2:
//                             black[6].scores.push(iokData);
//                             break;
//                           case 3:
//                             asian[6].scores.push(iokData);
//                             break;
//                           case 4:
//                             hispanic[6].scores.push(iokData);
//                             break;
//                           case 5:
//                             islanders[6].scores.push(iokData);
//                             break;
//                           case 6:
//                             native[6].scores.push(iokData);
//                             break;
//                           case 9:
//                             unknown[6].scores.push(iokData);
//                             break;
//                         }
//                         break;
//                     }
//                   } else if (
//                     week === currentWeek &&
//                     iokData.method === 'speak'
//                   ) {
//                     speakUpArr.push(iokData);
//                   } else if (
//                     week === currentWeek &&
//                     iokData.method === 'deal'
//                   ) {
//                     dealWithItArr.push(iokData);
//                   } else if (
//                     week === currentWeek &&
//                     iokData.method === 'whats'
//                   ) {
//                     whatsUpArr.push(iokData);
//                   }
//                 }
//               }
//             }
//           }
//         } else if (EdUserOrg === 'YouRok') {
//           if (compiledData.compiledData[i].grade === grade) {
//             const { gender } = compiledData.compiledData[i];
//             const { sexualOrientation } = compiledData.compiledData[i];
//             // eslint-disable-next-line default-case
//             switch (gender) {
//               case null:
//                 nullGender.push(gender);
//                 break;
//               case 1:
//                 maleGender.push(gender);
//                 break;
//               case 2:
//                 femaleGender.push(gender);
//                 break;
//               case 6:
//                 nonGender.push(gender);
//                 break;
//             }
//             // eslint-disable-next-line default-case
//             switch (sexualOrientation) {
//               case null:
//                 sexualOrientationNotAnswered.push(sexualOrientation);
//                 break;
//               case 'H':
//                 sexualOrientationHetero.push(sexualOrientation);
//                 break;
//               case 'L':
//                 sexualOrientationLG.push(sexualOrientation);
//                 break;
//             }

//             for (
//               let x = 0;
//               x < compiledData.compiledData[i].iokData.length;
//               x++
//             ) {
//               const iokData = compiledData.compiledData[i].iokData[x];
//               const date = new Date(iokData.timestamp * 1000);
//               const day = date.getDay();
//               const year = date.getFullYear();
//               const month = date.getMonth();
//               const week = moment(date).week();

//               // eslint-disable-next-line default-case
//               if (week === currentWeek) {
//                 iokArr.push(iokData);
//                 // eslint-disable-next-line default-case
//                 switch (day) {
//                   case 0:
//                     sundayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[0].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[0].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[0].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[0].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[0].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[0].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[0].scores.push(iokData);
//                         break;
//                     }

//                     break;
//                   case 1:
//                     mondayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[1].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[1].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[1].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[1].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[1].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[1].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[1].scores.push(iokData);
//                         break;
//                     }
//                     break;
//                   case 2:
//                     tuesdayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[2].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[2].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[2].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[2].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[2].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[2].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[2].scores.push(iokData);
//                         break;
//                     }
//                     break;
//                   case 3:
//                     wednesdayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[3].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[3].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[3].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[3].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[3].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[3].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[3].scores.push(iokData);
//                         break;
//                     }
//                     break;
//                   case 4:
//                     thursdayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[4].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[4].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[4].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[4].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[4].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[4].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[4].scores.push(iokData);
//                         break;
//                     }
//                     break;
//                   case 5:
//                     fridayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[5].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[5].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[5].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[5].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[5].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[5].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[5].scores.push(iokData);
//                         break;
//                     }
//                     break;
//                   case 6:
//                     saturdayArr.push(iokData);
//                     switch (iokData.ethnicity) {
//                       case 1:
//                         white[6].scores.push(iokData);
//                         break;
//                       case 2:
//                         black[6].scores.push(iokData);
//                         break;
//                       case 3:
//                         asian[6].scores.push(iokData);
//                         break;
//                       case 4:
//                         hispanic[6].scores.push(iokData);
//                         break;
//                       case 5:
//                         islanders[6].scores.push(iokData);
//                         break;
//                       case 6:
//                         native[6].scores.push(iokData);
//                         break;
//                       case 9:
//                         unknown[6].scores.push(iokData);
//                         break;
//                     }
//                     break;
//                 }
//               } else if (week === currentWeek && iokData.method === 'speak') {
//                 speakUpArr.push(iokData);
//               } else if (week === currentWeek && iokData.method === 'deal') {
//                 dealWithItArr.push(iokData);
//               } else if (week === currentWeek && iokData.method === 'whats') {
//                 whatsUpArr.push(iokData);
//               }
//             }
//           }
//         }
//       }

//       for (let i = 0; i < compiledData.compiledData.length; i++) {
//         // eslint-disable-next-line default-case
//         if (EdUserOrg !== 'YouRok') {
//           if (isSupervisingEntity === 'undefined') {
//             if (EdUserOrg === compiledData.compiledData[i].organization) {
//               switch (compiledData.compiledData[i].grade) {
//                 case '6':
//                   sixthGradeArr.push(compiledData.compiledData[i].grade);
//                   break;
//                 case '7':
//                   seventhGradeArr.push(compiledData.compiledData[i].grade);
//                   break;
//                 case '8':
//                   eighthGradeArr.push(compiledData.compiledData[i].grade);
//                   break;
//               }
//             }
//           } else if (isSupervisingEntity !== 'undefined') {
//             for (let x = 0; x < supervisedOrgs.length; x++) {
//               if (
//                 supervisedOrgs[x] === compiledData.compiledData[i].organization
//               ) {
//                 switch (compiledData.compiledData[i].grade) {
//                   case '6':
//                     sixthGradeArr.push(compiledData.compiledData[i].grade);
//                     break;
//                   case '7':
//                     seventhGradeArr.push(compiledData.compiledData[i].grade);
//                     break;
//                   case '8':
//                     eighthGradeArr.push(compiledData.compiledData[i].grade);
//                     break;
//                 }
//               }
//             }
//           }
//         } else if (EdUserOrg === 'YouRok') {
//           switch (compiledData.compiledData[i].grade) {
//             case '6':
//               sixthGradeArr.push(compiledData.compiledData[i].grade);
//               break;
//             case '7':
//               seventhGradeArr.push(compiledData.compiledData[i].grade);
//               break;
//             case '8':
//               eighthGradeArr.push(compiledData.compiledData[i].grade);
//               break;
//           }
//         }
//       }

//       if (isSupervisingEntity !== 'undefined') {
//         for (let i = 0; i < compiledData.compiledData.length; i++) {
//           for (let y = 0; y < supervisedOrgs.length; y++) {
//             if (
//               supervisedOrgs[y] === compiledData.compiledData[i].organization &&
//               compiledData.compiledData[i].grade === grade
//             ) {
//               const { gender } = compiledData.compiledData[i];
//               const { sexualOrientation } = compiledData.compiledData[i];
//               // eslint-disable-next-line default-case
//               switch (gender) {
//                 case null:
//                   nullGender.push(gender);
//                   break;
//                 case 1:
//                   maleGender.push(gender);
//                   break;
//                 case 2:
//                   femaleGender.push(gender);
//                   break;
//                 case 6:
//                   nonGender.push(gender);
//                   break;
//               }
//               // eslint-disable-next-line default-case
//               switch (sexualOrientation) {
//                 case null:
//                   sexualOrientationNotAnswered.push(sexualOrientation);
//                   break;
//                 case 'H':
//                   sexualOrientationHetero.push(sexualOrientation);
//                   break;
//                 case 'L':
//                   sexualOrientationLG.push(sexualOrientation);
//                   break;
//               }

//               for (
//                 let x = 0;
//                 x < compiledData.compiledData[i].iokData.length;
//                 x++
//               ) {
//                 const iokData = compiledData.compiledData[i].iokData[x];
//                 const date = new Date(iokData.timestamp * 1000);
//                 const day = date.getDay();
//                 const year = date.getFullYear();
//                 const month = date.getMonth();
//                 const week = moment(date).week();

//                 // eslint-disable-next-line default-case
//                 if (week === currentWeek) {
//                   iokArr.push(iokData);
//                   // eslint-disable-next-line default-case
//                   switch (day) {
//                     case 0:
//                       sundayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[0].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[0].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[0].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[0].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[0].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[0].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[0].scores.push(iokData);
//                           break;
//                       }

//                       break;
//                     case 1:
//                       mondayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[1].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[1].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[1].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[1].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[1].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[1].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[1].scores.push(iokData);
//                           break;
//                       }
//                       break;
//                     case 2:
//                       tuesdayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[2].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[2].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[2].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[2].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[2].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[2].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[2].scores.push(iokData);
//                           break;
//                       }
//                       break;
//                     case 3:
//                       wednesdayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[3].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[3].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[3].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[3].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[3].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[3].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[3].scores.push(iokData);
//                           break;
//                       }
//                       break;
//                     case 4:
//                       thursdayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[4].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[4].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[4].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[4].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[4].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[4].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[4].scores.push(iokData);
//                           break;
//                       }
//                       break;
//                     case 5:
//                       fridayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[5].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[5].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[5].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[5].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[5].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[5].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[5].scores.push(iokData);
//                           break;
//                       }
//                       break;
//                     case 6:
//                       saturdayArr.push(iokData);
//                       switch (iokData.ethnicity) {
//                         case 1:
//                           white[6].scores.push(iokData);
//                           break;
//                         case 2:
//                           black[6].scores.push(iokData);
//                           break;
//                         case 3:
//                           asian[6].scores.push(iokData);
//                           break;
//                         case 4:
//                           hispanic[6].scores.push(iokData);
//                           break;
//                         case 5:
//                           islanders[6].scores.push(iokData);
//                           break;
//                         case 6:
//                           native[6].scores.push(iokData);
//                           break;
//                         case 9:
//                           unknown[6].scores.push(iokData);
//                           break;
//                       }
//                       break;
//                   }
//                 } else if (week === currentWeek && iokData.method === 'speak') {
//                   speakUpArr.push(iokData);
//                 } else if (week === currentWeek && iokData.method === 'deal') {
//                   dealWithItArr.push(iokData);
//                 } else if (week === currentWeek && iokData.method === 'whats') {
//                   whatsUpArr.push(iokData);
//                 }
//               }
//             }
//           }
//         }
//       }

//       setData(() => [
//         {
//           x: 'Sunday',
//           y: [
//             score(sundayArr).quant25,
//             score(sundayArr).max,
//             score(sundayArr).min,
//             score(sundayArr).quant75,
//           ], // open, high, low, close
//         },
//         {
//           x: 'Monday',
//           y: [
//             score(mondayArr).quant25,
//             score(mondayArr).max,
//             score(mondayArr).min,
//             score(mondayArr).quant75,
//           ],
//         },
//         {
//           x: 'Tuesday',
//           y: [
//             score(tuesdayArr).quant25,
//             score(tuesdayArr).max,
//             score(tuesdayArr).min,
//             score(tuesdayArr).quant75,
//           ],
//         },
//         {
//           x: 'Wednesday',
//           y: [
//             score(wednesdayArr).quant25,
//             score(wednesdayArr).max,
//             score(wednesdayArr).min,
//             score(wednesdayArr).quant75,
//           ],
//         },
//         {
//           x: 'Thursday',
//           y: [
//             score(thursdayArr).quant25,
//             score(thursdayArr).max,
//             score(thursdayArr).min,
//             score(thursdayArr).quant75,
//           ],
//         },
//         {
//           x: 'Friday',
//           y: [
//             score(fridayArr).quant25,
//             score(fridayArr).max,
//             score(fridayArr).min,
//             score(fridayArr).quant75,
//           ],
//         },
//         {
//           x: 'Saturday',
//           y: [
//             score(saturdayArr).quant25,
//             score(saturdayArr).max,
//             score(saturdayArr).min,
//             score(saturdayArr).quant75,
//           ],
//         },
//       ]);

//       for (let i = 0; i < compiledData.compiledData.length; i++) {
//         // eslint-disable-next-line default-case
//         switch (compiledData.compiledData[i].grade) {
//           case '6':
//             sixthGradeArr.push(compiledData.compiledData[i].grade);
//             break;
//           case '7':
//             seventhGradeArr.push(compiledData.compiledData[i].grade);
//             break;
//           case '8':
//             eighthGradeArr.push(compiledData.compiledData[i].grade);
//             break;
//         }
//       }

//       const negative = trendingWordsByGrade.negativeTrend;
//       const positive = trendingWordsByGrade.positiveTrend;
//       const mutableNegative = _.cloneDeep(negative);
//       const mutablePositive = _.cloneDeep(positive);
//       Object.keys(mutablePositive).forEach((key) => {
//         if (mutablePositive[key] === 0) {
//           delete mutablePositive[key];
//         }
//       });
//       Object.keys(mutableNegative).forEach((key) => {
//         if (mutableNegative[key] === 0) {
//           delete mutableNegative[key];
//         }
//       });

//       const negativeIdentifiers = Object.keys(mutableNegative);
//       const positiveIdentifiers = Object.keys(mutablePositive);
//       const negativeValues = Object.values(mutableNegative);
//       const positiveValues = Object.values(mutablePositive);
//       setNegativeLabels(() => negativeIdentifiers);
//       setPositiveLabels(() => positiveIdentifiers);
//       setTrendingNegative(() => negativeValues);
//       setTrendingPositive(() => positiveValues);

//       const iokEngagement = compiledData.iokEng.percentage;
//       const dealWithItEngagement = compiledData.dealEng.percentage;
//       const speakUpEngagement = compiledData.speakEng.percentage;
//       const whatsUpEngagement = compiledData.whatsEng.percentage;
//       setEngagement(() => [
//         iokEngagement,
//         dealWithItEngagement,
//         speakUpEngagement,
//         whatsUpEngagement,
//       ]);

//       setSixth(sixthGradeArr.length);
//       setSeventh(seventhGradeArr.length);
//       setEighth(eighthGradeArr.length);
//       setWhatsUp(() => whatsUpArr);
//       setDealWithIt(() => dealWithItArr);
//       setTotalIok(() => iokArr);
//       setSpeakUp(() => speakUpArr);
//       setSexualOrientation(() => [
//         sexualOrientationHetero.length,
//         sexualOrientationLG.length,
//         sexualOrientationNotAnswered.length,
//       ]);
//       setGenderData(() => [
//         femaleGender.length,
//         maleGender.length,
//         nonGender.length,
//         nullGender.length,
//       ]);

//       for (let i = 0; i < compiledData.compiledData.length; i++) {
//         console.log(compiledData.compiledData[i].grade);
//         if (compiledData.compiledData[i].grade == grade) {
//           console.log(
//             "We've got a grade match!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
//           );
//           for (
//             let x = 0;
//             x < compiledData.compiledData[i].dealComments.length;
//             x++
//           ) {
//             dealCommentsArr.push(compiledData.compiledData[i].dealComments[x]);
//           }
//           for (
//             let x = 0;
//             x < compiledData.compiledData[i].dealPosts.length;
//             x++
//           ) {
//             dealPostsArr.push(compiledData.compiledData[i].dealPosts[x]);
//           }
//           for (
//             let x = 0;
//             x < compiledData.compiledData[i].whatsComments.length;
//             x++
//           ) {
//             whatsCommentsArr.push(
//               compiledData.compiledData[i].whatsComments[x],
//             );
//           }
//           for (
//             let x = 0;
//             x < compiledData.compiledData[i].whatsPosts.length;
//             x++
//           ) {
//             whatsPostsArr.push(compiledData.compiledData[i].whatsPosts[x]);
//           }
//           for (
//             let x = 0;
//             x < compiledData.compiledData[i].speakComments.length;
//             x++
//           ) {
//             speakCommentsArr.push(
//               compiledData.compiledData[i].speakComments[x],
//             );
//           }
//           for (
//             let x = 0;
//             x < compiledData.compiledData[i].speakPosts.length;
//             x++
//           ) {
//             speakPostsArr.push(compiledData.compiledData[i].speakPosts[x]);
//           }
//         }
//       }

//       setSpeakComments(() => speakCommentsArr);
//       setSpeakPosts(() => speakPostsArr);
//       setWhatsComments(() => whatsCommentsArr);
//       setWhatsPosts(() => whatsPostsArr);
//       setDealComments(() => dealCommentsArr);
//       setDealPosts(() => dealPostsArr);

//       setEthnicData(() => [
//         {
//           name: 'White',
//           type: 'line',
//           data: [
//             calcEthnicity(white, 0),
//             calcEthnicity(white, 1),
//             calcEthnicity(white, 2),
//             calcEthnicity(white, 3),
//             calcEthnicity(white, 4),
//             calcEthnicity(white, 5),
//             calcEthnicity(white, 6),
//           ],
//         },
//         {
//           name: 'Black or African American',
//           type: 'line',
//           data: [
//             calcEthnicity(black, 0),
//             calcEthnicity(black, 1),
//             calcEthnicity(black, 2),
//             calcEthnicity(black, 3),
//             calcEthnicity(black, 4),
//             calcEthnicity(black, 5),
//             calcEthnicity(black, 6),
//           ],
//         },
//         {
//           name: 'Asian',
//           type: 'line',
//           data: [
//             calcEthnicity(asian, 0),
//             calcEthnicity(asian, 1),
//             calcEthnicity(asian, 2),
//             calcEthnicity(asian, 3),
//             calcEthnicity(asian, 4),
//             calcEthnicity(asian, 5),
//             calcEthnicity(asian, 6),
//           ],
//         },
//         {
//           name: 'American Indian or Alaska Native',
//           type: 'line',
//           data: [
//             calcEthnicity(native, 0),
//             calcEthnicity(native, 1),
//             calcEthnicity(native, 2),
//             calcEthnicity(native, 3),
//             calcEthnicity(native, 4),
//             calcEthnicity(native, 5),
//             calcEthnicity(native, 6),
//           ],
//         },
//         {
//           name: 'Native Hawaiian or Other Pacific Islander',
//           type: 'line',
//           data: [
//             calcEthnicity(islanders, 0),
//             calcEthnicity(islanders, 1),
//             calcEthnicity(islanders, 2),
//             calcEthnicity(islanders, 3),
//             calcEthnicity(islanders, 4),
//             calcEthnicity(islanders, 5),
//             calcEthnicity(islanders, 6),
//           ],
//         },
//         {
//           name: 'Hispanic',
//           type: 'line',
//           data: [
//             calcEthnicity(hispanic, 0),
//             calcEthnicity(hispanic, 1),
//             calcEthnicity(hispanic, 2),
//             calcEthnicity(hispanic, 3),
//             calcEthnicity(hispanic, 4),
//             calcEthnicity(hispanic, 5),
//             calcEthnicity(hispanic, 6),
//           ],
//         },
//         {
//           name: 'Unknown',
//           type: 'line',
//           data: [
//             calcEthnicity(unknown, 0),
//             calcEthnicity(unknown, 1),
//             calcEthnicity(unknown, 2),
//             calcEthnicity(unknown, 3),
//             calcEthnicity(unknown, 4),
//             calcEthnicity(unknown, 5),
//             calcEthnicity(unknown, 6),
//           ],
//         },
//       ]);

//       // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//     }
//   }, [socketID, grade]);

//   React.useEffect(() => {
//     if (engagement.length === 4) {
//       setIsLoading(false);
//     }
//   }, [engagement]);

//   return (
//     <div className="container-fluid px-5 py-4">
//       {isLoading ? (
//         <LoadingModal
//           percentage={progressPercentage}
//           message={loadingMessage}
//         />
//       ) : null}
//       <div className="d-flex p-3 align-items-center">
//         <div className="ml-auto ">
//           {/* <button className="upload mr-3 small">
//               + Add Data Chart for Export
//             </button>
//             <a href="/" className="small">
//               Export Page
//             </a> */}
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-8">
//           <Card>
//             <BoxPlot data={data} title="'“Am I OK?” Score - Overall'" />
//           </Card>
//           <Card>
//             <MultiBar
//               commentsArr={[
//                 dealComments.length,
//                 speakComments.length,
//                 whatsComments.length,
//               ]}
//               postsArr={[
//                 dealPosts.length,
//                 speakPosts.length,
//                 whatsPosts.length,
//               ]}
//               title="Community Engagement"
//             />
//           </Card>
//           <Card>
//             <MultiLine
//               data={ethnicData}
//               title="Ethnic Diversity"
//               desc={['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']}
//             />
//           </Card>
//         </div>
//         <div className="col-md-4">
//           <div style={{ display: 'flex' }}>
//             <div className="col-md-6">
//               <Card>
//                 <PieChart
//                   series={genderData}
//                   labelArr={['Female', 'Male', 'Non-Binary', 'Non-Disclosed']}
//                   title="Gender Identity"
//                 />
//               </Card>
//             </div>
//             <div className="col-md-6">
//               <Card>
//                 <PieChart
//                   labelArr={['Hetero', 'LGBTQ', 'Non-Disclosed']}
//                   series={sexualOrientationArr}
//                   title="Sexual Orientation"
//                 />
//               </Card>
//             </div>
//           </div>
//           <Row>
//             <Card>
//               <HorizontalChart
//                 values={trendingPositive}
//                 labels={positiveLabels}
//                 title="Trending Words- Positive"
//               />
//             </Card>
//             <Card>
//               <HorizontalChart
//                 values={trendingNegative}
//                 labels={negativeLabels}
//                 title="Trending Words- Negative"
//               />
//             </Card>
//           </Row>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardTab;
