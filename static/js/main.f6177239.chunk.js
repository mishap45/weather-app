(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(51),i=a.n(s),h=(a(98),a(82)),o=a.n(h),d=a(3),j=a(48),l=a.n(j),u=a(72),m=a(65),p=a(124),b=u.a().shape({searchWeather:u.b().max(25,"Too Long City!")}),g=Object(d.g)((function(e){e.history,e.getWeather;return Object(r.jsxs)("div",{className:l.a.search,children:[Object(r.jsx)("p",{className:l.a.head,children:"Weather App"}),Object(r.jsx)(m.c,{initialValues:{searchWeather:""},validationSchema:b,onSubmit:function(e){var t;alert("word: "+e.searchWeather),t=e.searchWeather,alert("ff: "+t)},children:function(e){var t=e.errors,a=e.touched;return Object(r.jsxs)(m.b,{className:l.a.form,children:[Object(r.jsx)(p.a,{className:l.a.icon}),Object(r.jsx)(m.a,{className:l.a.input,type:"text",name:"searchWeather",placeholder:"Enter City"}),t.searchWeather&&a.searchWeather?Object(r.jsx)("div",{style:{color:"#ff4d4f",fontWeight:"bold",fontSize:16},children:t.searchWeather}):null]})}})]})})),w=a(22),O=a(45),x=a(71),f=a.n(x),_=a(89),y=a(73),v=a(90),T=a.n(v),W=function(e){var t="http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=eb516e5fc04e54a205cb177efc9f5fa1");return T.a.get(t).then((function(e){return alert("api data: "+JSON.stringify(e.data)),e.data}))},N={weather:[{city:"gg",country:"gg",date:11,icon:"ss",description:"dd",temp:22,sunrise:22,sunset:22,wind:44,highestTemp:33,lowestTemp:11,clouds:22,main:"gg"}]},S=function(e,t,a,r,c,n,s,i,h,o,d,j,l){return{type:"SET_WEATHER",city:e,country:t,date:a,icon:r,description:c,temp:n,sunset:s,sunrise:i,wind:h,highestTemp:o,lowestTemp:d,clouds:j,main:l}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER":return Object(y.a)(Object(y.a)({},e),{},{weather:[{city:t.city,country:t.country,date:t.date,icon:t.icon,description:t.description,temp:t.temp,sunset:t.sunset,sunrise:t.sunrise,wind:t.wind,highestTemp:t.highestTemp,lowestTemp:t.lowestTemp,clouds:t.clouds,main:t.main}]});default:return e}},B=Object(w.d)(Object(O.b)((function(e){return{}}),{getWeather:function(e){return function(){var t=Object(_.a)(f.a.mark((function t(a){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:r=t.sent,alert("word in reducer: "+e),alert("api data in reducer: "+JSON.stringify(r)),a(S(r.name,r.sys.country,r.dt,r.weather[0].icon,r.weather[0].description,r.main.temp,r.sys.sunset,r.sys.sunrise,r.wind.speed,r.main.temp_max,r.main.temp_min,r.clouds.all,r.weather[0].main));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){var t=e.getWeather;return Object(r.jsx)(g,{getWeather:t})})),P=a(92),I=a(19),M=a.n(I),F=a.p+"static/media/clouds.fcffee55.svg",J=a.p+"static/media/drizzle.2c5145e4.svg",E=a.p+"static/media/rain.05f5a7b7.svg",A=a.p+"static/media/snow.382c5815.svg",D=a.p+"static/media/sun.7d1e1b01.svg",z=a.p+"static/media/thunderstorm.5b71c348.svg",C=function(e){var t=e.weather,a=e.days,c=e.months,n=e.setImg,s=e.img,i=new Date,h="".concat(a[i.getDay()]," ").concat(i.getDate()," ").concat(c[i.getMonth()]),o=new Date(1e3*t[0].sunset).toLocaleTimeString().slice(0,5),d=new Date(1e3*t[0].sunrise).toLocaleTimeString().slice(0,5);return Object(r.jsxs)("div",{className:M.a.weather,children:[Object(r.jsx)("div",{className:M.a.weatherApp,children:Object(r.jsx)("p",{children:"Weather App"})}),Object(r.jsxs)("div",{className:M.a.weatherWrapper,children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{className:M.a.cityName,children:[t[0].city,", ",t[0].country]}),Object(r.jsx)("p",{className:M.a.day,children:h})]}),Object(r.jsxs)("div",{className:M.a.weatherBlock,children:[Object(r.jsxs)("div",{className:M.a.weatherImgBlock,children:[Object(r.jsxs)("div",{children:["Thunderstorm"===t[0].main?n(z):"Drizzle"===t[0].main?n(J):"Rain"===t[0].main?n(E):"Snow"===t[0].main?n(A):"Clear"===t[0].main?n(D):(t[0].main,n(F)),Object(r.jsx)("img",{src:s,alt:"weatherImg",className:M.a.weatherImg})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{className:M.a.degrees,children:[Math.floor(t[0].temp-273.15),"\xb0"]}),Object(r.jsx)("p",{className:M.a.degreesText,children:t[0].description})]})]}),Object(r.jsxs)("div",{className:M.a.weatherTableBlock,children:[Object(r.jsxs)("p",{children:[Math.floor(t[0].highestTemp-273.15),"\xb0",Object(r.jsx)("br",{}),"Hight"]}),Object(r.jsxs)("p",{children:[t[0].wind,"mph",Object(r.jsx)("br",{}),"Wind"]}),Object(r.jsxs)("p",{children:[d,Object(r.jsx)("br",{}),"Sunrise"]}),Object(r.jsxs)("p",{children:[Math.floor(t[0].lowestTemp-273.15),"\xb0",Object(r.jsx)("br",{}),"Low"]}),Object(r.jsxs)("p",{children:[t[0].clouds,"%",Object(r.jsx)("br",{}),"Rain"]}),Object(r.jsxs)("p",{children:[o,Object(r.jsx)("br",{}),"Sunset"]})]})]})]})]})},L=function(e){return e.weatherReducer.weather},R=Object(w.d)(Object(O.b)((function(e){return{weather:L(e)}}),{}))((function(e){var t=e.weather,a=Object(c.useState)(""),n=Object(P.a)(a,2),s=n[0],i=n[1];return"gg"===t[0].city?Object(r.jsx)(d.a,{to:"/search"}):Object(r.jsx)(C,{weather:t,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],img:s,setImg:i})})),H=function(){return Object(r.jsx)("div",{children:"error"})},X=function(){return Object(r.jsx)("div",{className:o.a.main,children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{exact:!0,path:"/search",component:B}),Object(r.jsx)(d.b,{exact:!0,path:"/weather",component:R}),Object(r.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(d.a,{to:"/search"})}}),Object(r.jsx)(d.b,{path:"*",component:H})]})})},q=a(53),V=a(91),Y=Object(w.c)({weatherReducer:k}),K=Object(w.e)(Y,Object(w.a)(V.a)),Q=function(){return Object(r.jsx)(O.a,{store:K,children:Object(r.jsx)(q.a,{basename:"/weather-app",children:Object(r.jsx)(X,{})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root")),G()},19:function(e,t,a){e.exports={weather:"weatherPage_weather__RmXFW",weatherWrapper:"weatherPage_weatherWrapper__zTEOd",weatherApp:"weatherPage_weatherApp__2ozyx",cityName:"weatherPage_cityName__2hvXl",day:"weatherPage_day__1ijMo",weatherImg:"weatherPage_weatherImg__3loaJ",weatherImgBlock:"weatherPage_weatherImgBlock__1xCyN",degrees:"weatherPage_degrees__1X8KQ",degreesText:"weatherPage_degreesText__JOLed",weatherBlock:"weatherPage_weatherBlock__1hBkJ",weatherTableBlock:"weatherPage_weatherTableBlock__3YzDH"}},48:function(e,t,a){e.exports={head:"searchWeatherForm_head__1Y8IM",form:"searchWeatherForm_form__34fMJ",input:"searchWeatherForm_input__dsTVE",icon:"searchWeatherForm_icon__2agvq"}},82:function(e,t,a){e.exports={main:"main_main__1asMB"}},98:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.f6177239.chunk.js.map