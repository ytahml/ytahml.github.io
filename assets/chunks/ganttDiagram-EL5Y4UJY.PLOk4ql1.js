import{t as We,r as Ne,K as Re,J as Pe,v as Ve,w as ze,a as u,g as ht,C as Mt,aE as He,aF as Ue,aG as Be,x as Ge,a3 as Xe,aH as qe,aI as R,l as nt,aJ as Ze,aK as ne,aL as oe,aM as Ke,aN as Qe,aO as Je,aP as je,aQ as ts,aR as es,aS as ss,aT as ce,aU as le,aV as ue,aW as de,aX as fe,aY as rs,E as is,I as as,L as ns,T as os}from"./theme.DgVz8CrG.js";import"./framework.CCFHGMHW.js";var Te=60,xe=Te*60,be=xe*24,cs=be*7,ot=1e3,Vt=Te*ot,zt=xe*ot,Yt=be*ot,ls=cs*ot,Nt="day",us="week",ds="year",fs="YYYY-MM-DDTHH:mm:ssZ",hs="isoweek";const ms=(function(t,e,s){var r=function(v,T){var g=(T?s.utc:s)().year(v).startOf(ds),E=4-g.isoWeekday();return g.isoWeekday()>4&&(E+=7),g.add(E,Nt)},i=function(v){return v.add(4-v.isoWeekday(),Nt)},n=e.prototype;n.isoWeekYear=function(){var k=i(this);return k.year()},n.isoWeek=function(k){if(!this.$utils().u(k))return this.add((k-this.isoWeek())*7,Nt);var v=i(this),T=r(this.isoWeekYear(),this.$u);return v.diff(T,us)+1},n.isoWeekday=function(k){return this.$utils().u(k)?this.day()||7:this.day(this.day()%7?k:k-7)};var d=n.startOf;n.startOf=function(k,v){var T=this.$utils(),g=T.u(v)?!0:v,E=T.p(k);return E===hs?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(k,v)}});var ks=function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(s,r,i){return r||i.slice(1)})},vs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ys=function(e,s){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(r,i,n){var d=n&&n.toUpperCase();return i||s[n]||vs[n]||ks(s[d])})},gs=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,he=/\d/,pt=/\d\d/,ps=/\d{3}/,Ts=/\d{4}/,B=/\d\d?/,xs=/[+-]?\d+/,bs=/[+-]\d\d:?(\d\d)?|Z/,Tt=/\d*[^-_:/,()\s\d]+/,rt={},we=function(e){return e=+e,e+(e>68?1900:2e3)};function ws(t){if(!t||t==="Z")return 0;var e=t.match(/([+-]|\d\d)/g),s=+(e[1]*60)+(+e[2]||0);return s===0?0:e[0]==="+"?-s:s}var P=function(e){return function(s){this[e]=+s}},me=[bs,function(t){var e=this.zone||(this.zone={});e.offset=ws(t)}],Rt=function(e){var s=rt[e];return s&&(s.indexOf?s:s.s.concat(s.f))},ke=function(e,s){var r,i=rt,n=i.meridiem;if(!n)r=e===(s?"pm":"PM");else for(var d=1;d<=24;d+=1)if(e.indexOf(n(d,0,s))>-1){r=d>12;break}return r},_s={A:[Tt,function(t){this.afternoon=ke(t,!1)}],a:[Tt,function(t){this.afternoon=ke(t,!0)}],Q:[he,function(t){this.month=(t-1)*3+1}],S:[he,function(t){this.milliseconds=+t*100}],SS:[pt,function(t){this.milliseconds=+t*10}],SSS:[ps,function(t){this.milliseconds=+t}],s:[B,P("seconds")],ss:[B,P("seconds")],m:[B,P("minutes")],mm:[B,P("minutes")],H:[B,P("hours")],h:[B,P("hours")],HH:[B,P("hours")],hh:[B,P("hours")],D:[B,P("day")],DD:[pt,P("day")],Do:[Tt,function(t){var e=rt,s=e.ordinal,r=t.match(/\d+/);if(this.day=r[0],!!s)for(var i=1;i<=31;i+=1)s(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],w:[B,P("week")],ww:[pt,P("week")],M:[B,P("month")],MM:[pt,P("month")],MMM:[Tt,function(t){var e=Rt("months"),s=Rt("monthsShort"),r=(s||e.map(function(i){return i.slice(0,3)})).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[Tt,function(t){var e=Rt("months"),s=e.indexOf(t)+1;if(s<1)throw new Error;this.month=s%12||s}],Y:[xs,P("year")],YY:[pt,function(t){this.year=we(t)}],YYYY:[Ts,P("year")],Z:me,ZZ:me};function Ds(t){var e=t.afternoon;if(e!==void 0){var s=t.hours;e?s<12&&(t.hours+=12):s===12&&(t.hours=0),delete t.afternoon}}function Ss(t){t=ys(t,rt&&rt.formats);for(var e=t.match(gs),s=e.length,r=0;r<s;r+=1){var i=e[r],n=_s[i],d=n&&n[0],k=n&&n[1];k?e[r]={regex:d,parser:k}:e[r]=i.replace(/^\[|\]$/g,"")}return function(v){for(var T={},g=0,E=0;g<s;g+=1){var I=e[g];if(typeof I=="string")E+=I.length;else{var L=I.regex,F=I.parser,O=v.slice(E),x=L.exec(O),H=x[0];F.call(T,H),v=v.replace(H,"")}}return Ds(T),T}}var Ms=function(e,s,r,i){try{if(["x","X"].indexOf(s)>-1)return new Date((s==="X"?1e3:1)*e);var n=Ss(s),d=n(e),k=d.year,v=d.month,T=d.day,g=d.hours,E=d.minutes,I=d.seconds,L=d.milliseconds,F=d.zone,O=d.week,x=new Date,H=T||(!k&&!v?x.getDate():1),Q=k||x.getFullYear(),G=0;k&&!v||(G=v>0?v-1:x.getMonth());var J=g||0,X=E||0,j=I||0,tt=L||0;if(F)return new Date(Date.UTC(Q,G,H,J,X,j,tt+F.offset*60*1e3));if(r)return new Date(Date.UTC(Q,G,H,J,X,j,tt));var q;return q=new Date(Q,G,H,J,X,j,tt),O&&(q=i(q).week(O).toDate()),q}catch{return new Date("")}};const Cs=(function(t,e,s){s.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(we=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(n){var d=n.date,k=n.utc,v=n.args;this.$u=k;var T=v[1];if(typeof T=="string"){var g=v[2]===!0,E=v[3]===!0,I=g||E,L=v[2];E&&(L=v[2]),rt=this.$locale(),!g&&L&&(rt=s.Ls[L]),this.$d=Ms(d,T,k,s),this.init(),L&&L!==!0&&(this.$L=this.locale(L).$L),I&&d!=this.format(T)&&(this.$d=new Date("")),rt={}}else if(T instanceof Array)for(var F=T.length,O=1;O<=F;O+=1){v[1]=T[O-1];var x=s.apply(this,v);if(x.isValid()){this.$d=x.$d,this.$L=x.$L,this.init();break}O===F&&(this.$d=new Date(""))}else i.call(this,n)}}),Es=(function(t,e){var s=e.prototype,r=s.format;s.format=function(i){var n=this,d=this.$locale();if(!this.isValid())return r.bind(this)(i);var k=this.$utils(),v=i||fs,T=v.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(g){switch(g){case"Q":return Math.ceil((n.$M+1)/3);case"Do":return d.ordinal(n.$D);case"gggg":return n.weekYear();case"GGGG":return n.isoWeekYear();case"wo":return d.ordinal(n.week(),"W");case"w":case"ww":return k.s(n.week(),g==="w"?1:2,"0");case"W":case"WW":return k.s(n.isoWeek(),g==="W"?1:2,"0");case"k":case"kk":return k.s(String(n.$H===0?24:n.$H),g==="k"?1:2,"0");case"X":return Math.floor(n.$d.getTime()/1e3);case"x":return n.$d.getTime();case"z":return"["+n.offsetName()+"]";case"zzz":return"["+n.offsetName("long")+"]";default:return g}});return r.bind(this)(T)}});var At=Yt*365,Ht=At/12,Is=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,Ys=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,xt={years:At,months:Ht,days:Yt,hours:zt,minutes:Vt,seconds:ot,milliseconds:1,weeks:ls},Ct=function(e){return e instanceof Se},_e,Z,wt=function(e,s,r){return new Se(e,r,s.$l)},bt=function(e){return Z.p(e)+"s"},De=function(e){return e<0},at=function(e){return De(e)?Math.ceil(e):Math.floor(e)},As=function(e){return Math.abs(e)},dt=function(e,s){return e?De(e)?{negative:!0,format:""+As(e)+s}:{negative:!1,format:""+e+s}:{negative:!1,format:""}},Se=(function(){function t(s,r,i){var n=this;if(this.$d={},this.$l=i,s===void 0&&(this.$ms=0,this.parseFromMilliseconds()),r)return wt(s*xt[bt(r)],this);if(typeof s=="number")return this.$ms=s,this.parseFromMilliseconds(),this;if(typeof s=="object")return Object.keys(s).forEach(function(T){n.$d[bt(T)]=s[T]}),this.calMilliseconds(),this;if(typeof s=="string"){var d=s.match(Is);if(d){var k=d.slice(2),v=k.map(function(T){return T!=null?Number(T):0});return this.$d.years=v[0],this.$d.months=v[1],this.$d.weeks=v[2],this.$d.days=v[3],this.$d.hours=v[4],this.$d.minutes=v[5],this.$d.seconds=v[6],this.calMilliseconds(),this}}return this}var e=t.prototype;return e.calMilliseconds=function(){var r=this;this.$ms=Object.keys(this.$d).reduce(function(i,n){return i+(r.$d[n]||0)*xt[n]},0)},e.parseFromMilliseconds=function(){var r=this.$ms;this.$d.years=at(r/At),r%=At,this.$d.months=at(r/Ht),r%=Ht,this.$d.days=at(r/Yt),r%=Yt,this.$d.hours=at(r/zt),r%=zt,this.$d.minutes=at(r/Vt),r%=Vt,this.$d.seconds=at(r/ot),r%=ot,this.$d.milliseconds=r},e.toISOString=function(){var r=dt(this.$d.years,"Y"),i=dt(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=this.$d.weeks*7);var d=dt(n,"D"),k=dt(this.$d.hours,"H"),v=dt(this.$d.minutes,"M"),T=this.$d.seconds||0;this.$d.milliseconds&&(T+=this.$d.milliseconds/1e3,T=Math.round(T*1e3)/1e3);var g=dt(T,"S"),E=r.negative||i.negative||d.negative||k.negative||v.negative||g.negative,I=k.format||v.format||g.format?"T":"",L=E?"-":"",F=L+"P"+r.format+i.format+d.format+I+k.format+v.format+g.format;return F==="P"||F==="-P"?"P0D":F},e.toJSON=function(){return this.toISOString()},e.format=function(r){var i=r||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:Z.s(this.$d.years,2,"0"),YYYY:Z.s(this.$d.years,4,"0"),M:this.$d.months,MM:Z.s(this.$d.months,2,"0"),D:this.$d.days,DD:Z.s(this.$d.days,2,"0"),H:this.$d.hours,HH:Z.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:Z.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:Z.s(this.$d.seconds,2,"0"),SSS:Z.s(this.$d.milliseconds,3,"0")};return i.replace(Ys,function(d,k){return k||String(n[d])})},e.as=function(r){return this.$ms/xt[bt(r)]},e.get=function(r){var i=this.$ms,n=bt(r);return n==="milliseconds"?i%=1e3:n==="weeks"?i=at(i/xt[n]):i=this.$d[n],i||0},e.add=function(r,i,n){var d;return i?d=r*xt[bt(i)]:Ct(r)?d=r.$ms:d=wt(r,this).$ms,wt(this.$ms+d*(n?-1:1),this)},e.subtract=function(r,i){return this.add(r,i,!0)},e.locale=function(r){var i=this.clone();return i.$l=r,i},e.clone=function(){return wt(this.$ms,this)},e.humanize=function(r){return _e().add(this.$ms,"ms").locale(this.$l).fromNow(!r)},e.valueOf=function(){return this.asMilliseconds()},e.milliseconds=function(){return this.get("milliseconds")},e.asMilliseconds=function(){return this.as("milliseconds")},e.seconds=function(){return this.get("seconds")},e.asSeconds=function(){return this.as("seconds")},e.minutes=function(){return this.get("minutes")},e.asMinutes=function(){return this.as("minutes")},e.hours=function(){return this.get("hours")},e.asHours=function(){return this.as("hours")},e.days=function(){return this.get("days")},e.asDays=function(){return this.as("days")},e.weeks=function(){return this.get("weeks")},e.asWeeks=function(){return this.as("weeks")},e.months=function(){return this.get("months")},e.asMonths=function(){return this.as("months")},e.years=function(){return this.get("years")},e.asYears=function(){return this.as("years")},t})(),ve=function(e,s,r){return e.add(s.years()*r,"y").add(s.months()*r,"M").add(s.days()*r,"d").add(s.hours()*r,"h").add(s.minutes()*r,"m").add(s.seconds()*r,"s").add(s.milliseconds()*r,"ms")};const Ls=(function(t,e,s){_e=s,Z=s().$utils(),s.duration=function(n,d){var k=s.locale();return wt(n,{$l:k},d)},s.isDuration=Ct;var r=e.prototype.add,i=e.prototype.subtract;e.prototype.add=function(n,d){return Ct(n)?ve(this,n,1):r.bind(this)(n,d)},e.prototype.subtract=function(n,d){return Ct(n)?ve(this,n,-1):i.bind(this)(n,d)}});var Ut=(function(){var t=u(function(p,o,h,m){for(h=h||{},m=p.length;m--;h[p[m]]=o);return h},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],s=[1,26],r=[1,27],i=[1,28],n=[1,29],d=[1,30],k=[1,31],v=[1,32],T=[1,33],g=[1,34],E=[1,9],I=[1,10],L=[1,11],F=[1,12],O=[1,13],x=[1,14],H=[1,15],Q=[1,16],G=[1,19],J=[1,20],X=[1,21],j=[1,22],tt=[1,23],q=[1,25],lt=[1,35],y={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:u(function(o,h,m,f,M,a,S){var l=a.length-1;switch(M){case 1:return a[l-1];case 2:this.$=[];break;case 3:a[l-1].push(a[l]),this.$=a[l-1];break;case 4:case 5:this.$=a[l];break;case 6:case 7:this.$=[];break;case 8:f.setWeekday("monday");break;case 9:f.setWeekday("tuesday");break;case 10:f.setWeekday("wednesday");break;case 11:f.setWeekday("thursday");break;case 12:f.setWeekday("friday");break;case 13:f.setWeekday("saturday");break;case 14:f.setWeekday("sunday");break;case 15:f.setWeekend("friday");break;case 16:f.setWeekend("saturday");break;case 17:f.setDateFormat(a[l].substr(11)),this.$=a[l].substr(11);break;case 18:f.enableInclusiveEndDates(),this.$=a[l].substr(18);break;case 19:f.TopAxis(),this.$=a[l].substr(8);break;case 20:f.setAxisFormat(a[l].substr(11)),this.$=a[l].substr(11);break;case 21:f.setTickInterval(a[l].substr(13)),this.$=a[l].substr(13);break;case 22:f.setExcludes(a[l].substr(9)),this.$=a[l].substr(9);break;case 23:f.setIncludes(a[l].substr(9)),this.$=a[l].substr(9);break;case 24:f.setTodayMarker(a[l].substr(12)),this.$=a[l].substr(12);break;case 27:f.setDiagramTitle(a[l].substr(6)),this.$=a[l].substr(6);break;case 28:this.$=a[l].trim(),f.setAccTitle(this.$);break;case 29:case 30:this.$=a[l].trim(),f.setAccDescription(this.$);break;case 31:f.addSection(a[l].substr(8)),this.$=a[l].substr(8);break;case 33:f.addTask(a[l-1],a[l]),this.$="task";break;case 34:this.$=a[l-1],f.setClickEvent(a[l-1],a[l],null);break;case 35:this.$=a[l-2],f.setClickEvent(a[l-2],a[l-1],a[l]);break;case 36:this.$=a[l-2],f.setClickEvent(a[l-2],a[l-1],null),f.setLink(a[l-2],a[l]);break;case 37:this.$=a[l-3],f.setClickEvent(a[l-3],a[l-2],a[l-1]),f.setLink(a[l-3],a[l]);break;case 38:this.$=a[l-2],f.setClickEvent(a[l-2],a[l],null),f.setLink(a[l-2],a[l-1]);break;case 39:this.$=a[l-3],f.setClickEvent(a[l-3],a[l-1],a[l]),f.setLink(a[l-3],a[l-2]);break;case 40:this.$=a[l-1],f.setLink(a[l-1],a[l]);break;case 41:case 47:this.$=a[l-1]+" "+a[l];break;case 42:case 43:case 45:this.$=a[l-2]+" "+a[l-1]+" "+a[l];break;case 44:case 46:this.$=a[l-3]+" "+a[l-2]+" "+a[l-1]+" "+a[l];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:s,13:r,14:i,15:n,16:d,17:k,18:v,19:18,20:T,21:g,22:E,23:I,24:L,25:F,26:O,27:x,28:H,29:Q,30:G,31:J,33:X,35:j,36:tt,37:24,38:q,40:lt},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:s,13:r,14:i,15:n,16:d,17:k,18:v,19:18,20:T,21:g,22:E,23:I,24:L,25:F,26:O,27:x,28:H,29:Q,30:G,31:J,33:X,35:j,36:tt,37:24,38:q,40:lt},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:u(function(o,h){if(h.recoverable)this.trace(o);else{var m=new Error(o);throw m.hash=h,m}},"parseError"),parse:u(function(o){var h=this,m=[0],f=[],M=[null],a=[],S=this.table,l="",N=0,c=0,b=2,w=1,Y=a.slice.call(arguments,1),_=Object.create(this.lexer),$={yy:{}};for(var A in this.yy)Object.prototype.hasOwnProperty.call(this.yy,A)&&($.yy[A]=this.yy[A]);_.setInput(o,$.yy),$.yy.lexer=_,$.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var gt=_.yylloc;a.push(gt);var $t=_.options&&_.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Fe(z){m.length=m.length-2*z,M.length=M.length-z,a.length=a.length-z}u(Fe,"popStack");function ie(){var z;return z=f.pop()||_.lex()||w,typeof z!="number"&&(z instanceof Array&&(f=z,z=f.pop()),z=h.symbols_[z]||z),z}u(ie,"lex");for(var V,it,U,Ft,ut={},Dt,et,ae,St;;){if(it=m[m.length-1],this.defaultActions[it]?U=this.defaultActions[it]:((V===null||typeof V>"u")&&(V=ie()),U=S[it]&&S[it][V]),typeof U>"u"||!U.length||!U[0]){var Wt="";St=[];for(Dt in S[it])this.terminals_[Dt]&&Dt>b&&St.push("'"+this.terminals_[Dt]+"'");_.showPosition?Wt="Parse error on line "+(N+1)+`:
`+_.showPosition()+`
Expecting `+St.join(", ")+", got '"+(this.terminals_[V]||V)+"'":Wt="Parse error on line "+(N+1)+": Unexpected "+(V==w?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(Wt,{text:_.match,token:this.terminals_[V]||V,line:_.yylineno,loc:gt,expected:St})}if(U[0]instanceof Array&&U.length>1)throw new Error("Parse Error: multiple actions possible at state: "+it+", token: "+V);switch(U[0]){case 1:m.push(V),M.push(_.yytext),a.push(_.yylloc),m.push(U[1]),V=null,c=_.yyleng,l=_.yytext,N=_.yylineno,gt=_.yylloc;break;case 2:if(et=this.productions_[U[1]][1],ut.$=M[M.length-et],ut._$={first_line:a[a.length-(et||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(et||1)].first_column,last_column:a[a.length-1].last_column},$t&&(ut._$.range=[a[a.length-(et||1)].range[0],a[a.length-1].range[1]]),Ft=this.performAction.apply(ut,[l,c,N,$.yy,U[1],M,a].concat(Y)),typeof Ft<"u")return Ft;et&&(m=m.slice(0,-1*et*2),M=M.slice(0,-1*et),a=a.slice(0,-1*et)),m.push(this.productions_[U[1]][0]),M.push(ut.$),a.push(ut._$),ae=S[m[m.length-2]][m[m.length-1]],m.push(ae);break;case 3:return!0}}return!0},"parse")},C=(function(){var p={EOF:1,parseError:u(function(h,m){if(this.yy.parser)this.yy.parser.parseError(h,m);else throw new Error(h)},"parseError"),setInput:u(function(o,h){return this.yy=h||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var h=o.match(/(?:\r\n?|\n).*/g);return h?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:u(function(o){var h=o.length,m=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-h),this.offset-=h;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),m.length-1&&(this.yylineno-=m.length-1);var M=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:m?(m.length===f.length?this.yylloc.first_column:0)+f[f.length-m.length].length-m[0].length:this.yylloc.first_column-h},this.options.ranges&&(this.yylloc.range=[M[0],M[0]+this.yyleng-h]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(o){this.unput(this.match.slice(o))},"less"),pastInput:u(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var o=this.pastInput(),h=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+h+"^"},"showPosition"),test_match:u(function(o,h){var m,f,M;if(this.options.backtrack_lexer&&(M={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(M.yylloc.range=this.yylloc.range.slice(0))),f=o[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],m=this.performAction.call(this,this.yy,this,h,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),m)return m;if(this._backtrack){for(var a in M)this[a]=M[a];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,h,m,f;this._more||(this.yytext="",this.match="");for(var M=this._currentRules(),a=0;a<M.length;a++)if(m=this._input.match(this.rules[M[a]]),m&&(!h||m[0].length>h[0].length)){if(h=m,f=a,this.options.backtrack_lexer){if(o=this.test_match(m,M[a]),o!==!1)return o;if(this._backtrack){h=!1;continue}else return!1}else if(!this.options.flex)break}return h?(o=this.test_match(h,M[f]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var h=this.next();return h||this.lex()},"lex"),begin:u(function(h){this.conditionStack.push(h)},"begin"),popState:u(function(){var h=this.conditionStack.length-1;return h>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(h){return h=this.conditionStack.length-1-Math.abs(h||0),h>=0?this.conditionStack[h]:"INITIAL"},"topState"),pushState:u(function(h){this.begin(h)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(h,m,f,M){switch(f){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return p})();y.lexer=C;function D(){this.yy={}}return u(D,"Parser"),D.prototype=y,y.Parser=D,new D})();Ut.parser=Ut;var Os=Ut;R.extend(ms);R.extend(Cs);R.extend(Es);var ye={friday:5,saturday:6},K="",qt="",Zt=void 0,Kt="",kt=[],vt=[],Qt=new Map,Jt=[],Lt=[],yt="",jt="",Me=["active","done","crit","milestone","vert"],te=[],ft="",_t=!1,ee=!1,se="sunday",Ot="saturday",Bt=0,$s=u(function(){Jt=[],Lt=[],yt="",te=[],Et=0,Xt=void 0,It=void 0,W=[],K="",qt="",jt="",Zt=void 0,Kt="",kt=[],vt=[],_t=!1,ee=!1,Bt=0,Qt=new Map,ft="",ns(),se="sunday",Ot="saturday"},"clear"),Fs=u(function(t){ft=t},"setDiagramId"),Ws=u(function(t){qt=t},"setAxisFormat"),Ns=u(function(){return qt},"getAxisFormat"),Rs=u(function(t){Zt=t},"setTickInterval"),Ps=u(function(){return Zt},"getTickInterval"),Vs=u(function(t){Kt=t},"setTodayMarker"),zs=u(function(){return Kt},"getTodayMarker"),Hs=u(function(t){K=t},"setDateFormat"),Us=u(function(){_t=!0},"enableInclusiveEndDates"),Bs=u(function(){return _t},"endDatesAreInclusive"),Gs=u(function(){ee=!0},"enableTopAxis"),Xs=u(function(){return ee},"topAxisEnabled"),qs=u(function(t){jt=t},"setDisplayMode"),Zs=u(function(){return jt},"getDisplayMode"),Ks=u(function(){return K},"getDateFormat"),Ce=u((t,e)=>{const s=e.toLowerCase().split(/[\s,]+/).filter(r=>r!=="");return[...new Set([...t,...s])]},"mergeTokens"),Qs=u(function(t){kt=Ce(kt,t)},"setIncludes"),Js=u(function(){return kt},"getIncludes"),js=u(function(t){vt=Ce(vt,t)},"setExcludes"),tr=u(function(){return vt},"getExcludes"),er=u(function(){return Qt},"getLinks"),sr=u(function(t){yt=t,Jt.push(t)},"addSection"),rr=u(function(){return Jt},"getSections"),ir=u(function(){let t=ge();const e=10;let s=0;for(;!t&&s<e;)t=ge(),s++;return Lt=W,Lt},"getTasks"),Ee=u(function(t,e,s,r){const i=t.format(e.trim()),n=t.format("YYYY-MM-DD");return r.includes(i)||r.includes(n)?!1:s.includes("weekends")&&(t.isoWeekday()===ye[Ot]||t.isoWeekday()===ye[Ot]+1)||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(i)||s.includes(n)},"isInvalidDate"),ar=u(function(t){se=t},"setWeekday"),nr=u(function(){return se},"getWeekday"),or=u(function(t){Ot=t},"setWeekend"),Ie=u(function(t,e,s,r){if(!s.length||t.manualEndTime)return;let i;t.startTime instanceof Date?i=R(t.startTime):i=R(t.startTime,e,!0),i=i.add(1,"d");let n;t.endTime instanceof Date?n=R(t.endTime):n=R(t.endTime,e,!0);const[d,k]=cr(i,n,e,s,r);t.endTime=d.toDate(),t.renderEndTime=k},"checkTaskDates"),cr=u(function(t,e,s,r,i){let n=!1,d=null;const k=e.add(1e4,"d");for(;t<=e;){if(n||(d=e.toDate()),n=Ee(t,s,r,i),n&&(e=e.add(1,"d"),e>k))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,d]},"fixTaskDates"),Gt=u(function(t,e,s){if(s=s.trim(),u(k=>{const v=k.trim();return v==="x"||v==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(s))return new Date(Number(s));const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(s);if(n!==null){let k=null;for(const T of n.groups.ids.split(" ")){let g=ct(T);g!==void 0&&(!k||g.endTime>k.endTime)&&(k=g)}if(k)return k.endTime;const v=new Date;return v.setHours(0,0,0,0),v}let d=R(s,e.trim(),!0);if(d.isValid())return d.toDate();{nt.debug("Invalid date:"+s),nt.debug("With date format:"+e.trim());const k=new Date(s);if(k===void 0||isNaN(k.getTime())||k.getFullYear()<-1e4||k.getFullYear()>1e4)throw new Error("Invalid date:"+s);return k}},"getStartDate"),Ye=u(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),Ae=u(function(t,e,s,r=!1){s=s.trim();const n=/^until\s+(?<ids>[\d\w- ]+)/.exec(s);if(n!==null){let g=null;for(const I of n.groups.ids.split(" ")){let L=ct(I);L!==void 0&&(!g||L.startTime<g.startTime)&&(g=L)}if(g)return g.startTime;const E=new Date;return E.setHours(0,0,0,0),E}let d=R(s,e.trim(),!0);if(d.isValid())return r&&(d=d.add(1,"d")),d.toDate();let k=R(t);const[v,T]=Ye(s);if(!Number.isNaN(v)){const g=k.add(v,T);g.isValid()&&(k=g)}return k.toDate()},"getEndDate"),Et=0,mt=u(function(t){return t===void 0?(Et=Et+1,"task"+Et):t},"parseId"),lr=u(function(t,e){let s;e.substr(0,1)===":"?s=e.substr(1,e.length):s=e;const r=s.split(","),i={};re(r,i,Me);for(let d=0;d<r.length;d++)r[d]=r[d].trim();let n="";switch(r.length){case 1:i.id=mt(),i.startTime=t.endTime,n=r[0];break;case 2:i.id=mt(),i.startTime=Gt(void 0,K,r[0]),n=r[1];break;case 3:i.id=mt(r[0]),i.startTime=Gt(void 0,K,r[1]),n=r[2];break}return n&&(i.endTime=Ae(i.startTime,K,n,_t),i.manualEndTime=R(n,"YYYY-MM-DD",!0).isValid(),Ie(i,K,vt,kt)),i},"compileData"),ur=u(function(t,e){let s;e.substr(0,1)===":"?s=e.substr(1,e.length):s=e;const r=s.split(","),i={};re(r,i,Me);for(let n=0;n<r.length;n++)r[n]=r[n].trim();switch(r.length){case 1:i.id=mt(),i.startTime={type:"prevTaskEnd",id:t},i.endTime={data:r[0]};break;case 2:i.id=mt(),i.startTime={type:"getStartDate",startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=mt(r[0]),i.startTime={type:"getStartDate",startData:r[1]},i.endTime={data:r[2]};break}return i},"parseData"),Xt,It,W=[],Le={},dr=u(function(t,e){const s={section:yt,type:yt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},r=ur(It,e);s.raw.startTime=r.startTime,s.raw.endTime=r.endTime,s.id=r.id,s.prevTaskId=It,s.active=r.active,s.done=r.done,s.crit=r.crit,s.milestone=r.milestone,s.vert=r.vert,s.vert?s.order=-1:(s.order=Bt,Bt++);const i=W.push(s);It=s.id,Le[s.id]=i-1},"addTask"),ct=u(function(t){const e=Le[t];return W[e]},"findTaskById"),fr=u(function(t,e){const s={section:yt,type:yt,description:t,task:t,classes:[]},r=lr(Xt,e);s.startTime=r.startTime,s.endTime=r.endTime,s.id=r.id,s.active=r.active,s.done=r.done,s.crit=r.crit,s.milestone=r.milestone,s.vert=r.vert,Xt=s,Lt.push(s)},"addTaskOrg"),ge=u(function(){const t=u(function(s){const r=W[s];let i="";switch(W[s].raw.startTime.type){case"prevTaskEnd":{const n=ct(r.prevTaskId);r.startTime=n.endTime;break}case"getStartDate":i=Gt(void 0,K,W[s].raw.startTime.startData),i&&(W[s].startTime=i);break}return W[s].startTime&&(W[s].endTime=Ae(W[s].startTime,K,W[s].raw.endTime.data,_t),W[s].endTime&&(W[s].processed=!0,W[s].manualEndTime=R(W[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Ie(W[s],K,vt,kt))),W[s].processed},"compileTask");let e=!0;for(const[s,r]of W.entries())t(s),e=e&&r.processed;return e},"compileTasks"),hr=u(function(t,e){let s=e;ht().securityLevel!=="loose"&&(s=as.sanitizeUrl(e)),t.split(",").forEach(function(r){ct(r)!==void 0&&($e(r,()=>{window.open(s,"_self")}),Qt.set(r,s))}),Oe(t,"clickable")},"setLink"),Oe=u(function(t,e){t.split(",").forEach(function(s){let r=ct(s);r!==void 0&&r.classes.push(e)})},"setClass"),mr=u(function(t,e,s){if(ht().securityLevel!=="loose"||e===void 0)return;let r=[];if(typeof s=="string"){r=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let n=0;n<r.length;n++){let d=r[n].trim();d.startsWith('"')&&d.endsWith('"')&&(d=d.substr(1,d.length-2)),r[n]=d}}r.length===0&&r.push(t),ct(t)!==void 0&&$e(t,()=>{os.runFunc(e,...r)})},"setClickFun"),$e=u(function(t,e){te.push(function(){const s=ft?`${ft}-${t}`:t,r=document.querySelector(`[id="${s}"]`);r!==null&&r.addEventListener("click",function(){e()})},function(){const s=ft?`${ft}-${t}`:t,r=document.querySelector(`[id="${s}-text"]`);r!==null&&r.addEventListener("click",function(){e()})})},"pushFun"),kr=u(function(t,e,s){t.split(",").forEach(function(r){mr(r,e,s)}),Oe(t,"clickable")},"setClickEvent"),vr=u(function(t){te.forEach(function(e){e(t)})},"bindFunctions"),yr={getConfig:u(()=>ht().gantt,"getConfig"),clear:$s,setDateFormat:Hs,getDateFormat:Ks,enableInclusiveEndDates:Us,endDatesAreInclusive:Bs,enableTopAxis:Gs,topAxisEnabled:Xs,setAxisFormat:Ws,getAxisFormat:Ns,setTickInterval:Rs,getTickInterval:Ps,setTodayMarker:Vs,getTodayMarker:zs,setAccTitle:ze,getAccTitle:Ve,setDiagramTitle:Pe,getDiagramTitle:Re,setDiagramId:Fs,setDisplayMode:qs,getDisplayMode:Zs,setAccDescription:Ne,getAccDescription:We,addSection:sr,getSections:rr,getTasks:ir,addTask:dr,findTaskById:ct,addTaskOrg:fr,setIncludes:Qs,getIncludes:Js,setExcludes:js,getExcludes:tr,setClickEvent:kr,setLink:hr,getLinks:er,bindFunctions:vr,parseDuration:Ye,isInvalidDate:Ee,setWeekday:ar,getWeekday:nr,setWeekend:or};function re(t,e,s){let r=!0;for(;r;)r=!1,s.forEach(function(i){const n="^\\s*"+i+"\\s*$",d=new RegExp(n);t[0].match(d)&&(e[i]=!0,t.shift(1),r=!0)})}u(re,"getTaskTags");R.extend(Ls);var gr=u(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),pe={monday:ss,tuesday:es,wednesday:ts,thursday:je,friday:Je,saturday:Qe,sunday:Ke},pr=u((t,e)=>{let s=[...t].map(()=>-1/0),r=[...t].sort((n,d)=>n.startTime-d.startTime||n.order-d.order),i=0;for(const n of r)for(let d=0;d<s.length;d++)if(n.startTime>=s[d]){s[d]=n.endTime,n.order=d+e,d>i&&(i=d);break}return i},"getMaxIntersections"),st,Pt=1e4,Tr=u(function(t,e,s,r){const i=ht().gantt;r.db.setDiagramId(e);const n=ht().securityLevel;let d;n==="sandbox"&&(d=Mt("#i"+e));const k=n==="sandbox"?Mt(d.nodes()[0].contentDocument.body):Mt("body"),v=n==="sandbox"?d.nodes()[0].contentDocument:document,T=v.getElementById(e);st=T.parentElement.offsetWidth,st===void 0&&(st=1200),i.useWidth!==void 0&&(st=i.useWidth);const g=r.db.getTasks(),E=g.filter(y=>!y.vert);let I=[];for(const y of E)I.push(y.type);I=lt(I);const L={};let F=2*i.topPadding;if(r.db.getDisplayMode()==="compact"||i.displayMode==="compact"){const y={};for(const D of E)y[D.section]===void 0?y[D.section]=[D]:y[D.section].push(D);let C=0;for(const D of Object.keys(y)){const p=pr(y[D],C)+1;C+=p,F+=p*(i.barHeight+i.barGap),L[D]=p}}else{F+=E.length*(i.barHeight+i.barGap);for(const y of I)L[y]=E.filter(C=>C.type===y).length}T.setAttribute("viewBox","0 0 "+st+" "+F);const O=k.select(`[id="${e}"]`),x=He().domain([Ue(g,function(y){return y.startTime}),Be(g,function(y){return y.endTime})]).rangeRound([0,st-i.leftPadding-i.rightPadding]);function H(y,C){const D=y.startTime,p=C.startTime;let o=0;return D>p?o=1:D<p&&(o=-1),o}u(H,"taskCompare"),g.sort(H),Q(g,st,F),Ge(O,F,st,i.useMaxWidth),O.append("text").text(r.db.getDiagramTitle()).attr("x",st/2).attr("y",i.titleTopMargin).attr("class","titleText");function Q(y,C,D){const p=i.barHeight,o=p+i.barGap,h=i.topPadding,m=i.leftPadding,f=Xe().domain([0,I.length]).range(["#00B9FA","#F95002"]).interpolate(qe);J(o,h,m,C,D,y,r.db.getExcludes(),r.db.getIncludes()),j(m,h,C,D),G(y,o,h,m,p,f,C),tt(o,h),q(m,h,C,D)}u(Q,"makeGantt");function G(y,C,D,p,o,h,m){y.sort((c,b)=>c.vert===b.vert?0:c.vert?1:-1);const f=y.filter(c=>!c.vert),a=[...new Set(f.map(c=>c.order))].map(c=>f.find(b=>b.order===c));O.append("g").selectAll("rect").data(a).enter().append("rect").attr("x",0).attr("y",function(c,b){return b=c.order,b*C+D-2}).attr("width",function(){return m-i.rightPadding/2}).attr("height",C).attr("class",function(c){for(const[b,w]of I.entries())if(c.type===w)return"section section"+b%i.numberSectionStyles;return"section section0"}).enter();const S=O.append("g").selectAll("rect").data(y).enter(),l=r.db.getLinks();if(S.append("rect").attr("id",function(c){return e+"-"+c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?x(c.startTime)+p+.5*(x(c.endTime)-x(c.startTime))-.5*o:x(c.startTime)+p}).attr("y",function(c,b){return b=c.order,c.vert?i.gridLineStartPadding:b*C+D}).attr("width",function(c){return c.milestone?o:c.vert?.08*o:x(c.renderEndTime||c.endTime)-x(c.startTime)}).attr("height",function(c){return c.vert?f.length*(i.barHeight+i.barGap)+i.barHeight*2:o}).attr("transform-origin",function(c,b){return b=c.order,(x(c.startTime)+p+.5*(x(c.endTime)-x(c.startTime))).toString()+"px "+(b*C+D+.5*o).toString()+"px"}).attr("class",function(c){const b="task";let w="";c.classes.length>0&&(w=c.classes.join(" "));let Y=0;for(const[$,A]of I.entries())c.type===A&&(Y=$%i.numberSectionStyles);let _="";return c.active?c.crit?_+=" activeCrit":_=" active":c.done?c.crit?_=" doneCrit":_=" done":c.crit&&(_+=" crit"),_.length===0&&(_=" task"),c.milestone&&(_=" milestone "+_),c.vert&&(_=" vert "+_),_+=Y,_+=" "+w,b+_}),S.append("text").attr("id",function(c){return e+"-"+c.id+"-text"}).text(function(c){return c.task}).attr("font-size",i.fontSize).attr("x",function(c){let b=x(c.startTime),w=x(c.renderEndTime||c.endTime);if(c.milestone&&(b+=.5*(x(c.endTime)-x(c.startTime))-.5*o,w=b+o),c.vert)return x(c.startTime)+p;const Y=this.getBBox().width;return Y>w-b?w+Y+1.5*i.leftPadding>m?b+p-5:w+p+5:(w-b)/2+b+p}).attr("y",function(c,b){return c.vert?i.gridLineStartPadding+f.length*(i.barHeight+i.barGap)+60:(b=c.order,b*C+i.barHeight/2+(i.fontSize/2-2)+D)}).attr("text-height",o).attr("class",function(c){const b=x(c.startTime);let w=x(c.endTime);c.milestone&&(w=b+o);const Y=this.getBBox().width;let _="";c.classes.length>0&&(_=c.classes.join(" "));let $=0;for(const[gt,$t]of I.entries())c.type===$t&&($=gt%i.numberSectionStyles);let A="";return c.active&&(c.crit?A="activeCritText"+$:A="activeText"+$),c.done?c.crit?A=A+" doneCritText"+$:A=A+" doneText"+$:c.crit&&(A=A+" critText"+$),c.milestone&&(A+=" milestoneText"),c.vert&&(A+=" vertText"),Y>w-b?w+Y+1.5*i.leftPadding>m?_+" taskTextOutsideLeft taskTextOutside"+$+" "+A:_+" taskTextOutsideRight taskTextOutside"+$+" "+A+" width-"+Y:_+" taskText taskText"+$+" "+A+" width-"+Y}),ht().securityLevel==="sandbox"){let c;c=Mt("#i"+e);const b=c.nodes()[0].contentDocument;S.filter(function(w){return l.has(w.id)}).each(function(w){var Y=b.querySelector("#"+CSS.escape(e+"-"+w.id)),_=b.querySelector("#"+CSS.escape(e+"-"+w.id+"-text"));const $=Y.parentNode;var A=b.createElement("a");A.setAttribute("xlink:href",l.get(w.id)),A.setAttribute("target","_top"),$.appendChild(A),A.appendChild(Y),A.appendChild(_)})}}u(G,"drawRects");function J(y,C,D,p,o,h,m,f){if(m.length===0&&f.length===0)return;let M,a;for(const{startTime:w,endTime:Y}of h)(M===void 0||w<M)&&(M=w),(a===void 0||Y>a)&&(a=Y);if(!M||!a)return;if(R(a).diff(R(M),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const S=r.db.getDateFormat(),l=[];let N=null,c=R(M);for(;c.valueOf()<=a;)r.db.isInvalidDate(c,S,m,f)?N?N.end=c:N={start:c,end:c}:N&&(l.push(N),N=null),c=c.add(1,"d");O.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",w=>e+"-exclude-"+w.start.format("YYYY-MM-DD")).attr("x",w=>x(w.start.startOf("day"))+D).attr("y",i.gridLineStartPadding).attr("width",w=>x(w.end.endOf("day"))-x(w.start.startOf("day"))).attr("height",o-C-i.gridLineStartPadding).attr("transform-origin",function(w,Y){return(x(w.start)+D+.5*(x(w.end)-x(w.start))).toString()+"px "+(Y*y+.5*o).toString()+"px"}).attr("class","exclude-range")}u(J,"drawExcludeDays");function X(y,C,D,p){if(D<=0||y>C)return 1/0;const o=C-y,h=R.duration({[p??"day"]:D}).asMilliseconds();return h<=0?1/0:Math.ceil(o/h)}u(X,"getEstimatedTickCount");function j(y,C,D,p){const o=r.db.getDateFormat(),h=r.db.getAxisFormat();let m;h?m=h:o==="D"?m="%d":m=i.axisFormat??"%Y-%m-%d";let f=Ze(x).tickSize(-p+C+i.gridLineStartPadding).tickFormat(ne(m));const a=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||i.tickInterval);if(a!==null){const S=parseInt(a[1],10);if(isNaN(S)||S<=0)nt.warn(`Invalid tick interval value: "${a[1]}". Skipping custom tick interval.`);else{const l=a[2],N=r.db.getWeekday()||i.weekday,c=x.domain(),b=c[0],w=c[1],Y=X(b,w,S,l);if(Y>Pt)nt.warn(`The tick interval "${S}${l}" would generate ${Y} ticks, which exceeds the maximum allowed (${Pt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(l){case"millisecond":f.ticks(fe.every(S));break;case"second":f.ticks(de.every(S));break;case"minute":f.ticks(ue.every(S));break;case"hour":f.ticks(le.every(S));break;case"day":f.ticks(ce.every(S));break;case"week":f.ticks(pe[N].every(S));break;case"month":f.ticks(oe.every(S));break}}}if(O.append("g").attr("class","grid").attr("transform","translate("+y+", "+(p-50)+")").call(f).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||i.topAxis){let S=rs(x).tickSize(-p+C+i.gridLineStartPadding).tickFormat(ne(m));if(a!==null){const l=parseInt(a[1],10);if(isNaN(l)||l<=0)nt.warn(`Invalid tick interval value: "${a[1]}". Skipping custom tick interval.`);else{const N=a[2],c=r.db.getWeekday()||i.weekday,b=x.domain(),w=b[0],Y=b[1];if(X(w,Y,l,N)<=Pt)switch(N){case"millisecond":S.ticks(fe.every(l));break;case"second":S.ticks(de.every(l));break;case"minute":S.ticks(ue.every(l));break;case"hour":S.ticks(le.every(l));break;case"day":S.ticks(ce.every(l));break;case"week":S.ticks(pe[c].every(l));break;case"month":S.ticks(oe.every(l));break}}}O.append("g").attr("class","grid").attr("transform","translate("+y+", "+C+")").call(S).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}u(j,"makeGrid");function tt(y,C){let D=0;const p=Object.keys(L).map(o=>[o,L[o]]);O.append("g").selectAll("text").data(p).enter().append(function(o){const h=o[0].split(is.lineBreakRegex),m=-(h.length-1)/2,f=v.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("dy",m+"em");for(const[M,a]of h.entries()){const S=v.createElementNS("http://www.w3.org/2000/svg","tspan");S.setAttribute("alignment-baseline","central"),S.setAttribute("x","10"),M>0&&S.setAttribute("dy","1em"),S.textContent=a,f.appendChild(S)}return f}).attr("x",10).attr("y",function(o,h){if(h>0)for(let m=0;m<h;m++)return D+=p[h-1][1],o[1]*y/2+D*y+C;else return o[1]*y/2+C}).attr("font-size",i.sectionFontSize).attr("class",function(o){for(const[h,m]of I.entries())if(o[0]===m)return"sectionTitle sectionTitle"+h%i.numberSectionStyles;return"sectionTitle"})}u(tt,"vertLabels");function q(y,C,D,p){const o=r.db.getTodayMarker();if(o==="off")return;const h=O.append("g").attr("class","today"),m=new Date,f=h.append("line");f.attr("x1",x(m)+y).attr("x2",x(m)+y).attr("y1",i.titleTopMargin).attr("y2",p-i.titleTopMargin).attr("class","today"),o!==""&&f.attr("style",o.replace(/,/g,";"))}u(q,"drawToday");function lt(y){const C={},D=[];for(let p=0,o=y.length;p<o;++p)Object.prototype.hasOwnProperty.call(C,y[p])||(C[y[p]]=!0,D.push(y[p]));return D}u(lt,"checkUnique")},"draw"),xr={setConf:gr,draw:Tr},br=u(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),wr=br,Sr={parser:Os,db:yr,renderer:xr,styles:wr};export{Sr as diagram};
