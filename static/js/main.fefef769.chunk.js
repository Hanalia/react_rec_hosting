(this.webpackJsonpmyrecharts=this.webpackJsonpmyrecharts||[]).push([[0],{200:function(e,t,c){},344:function(e,t,c){"use strict";c.r(t);var a,r=c(0),i=c.n(r),o=c(72),l=c.n(o),d=(c(200),c(160)),_=c.n(d),n=c(369),s=c(364),p=c(366),u=c(368),g=c(367),m=c(58),v=c(29),j=c(161),b=c(17),x=(c(203),c(164)),O=c(162),h=c(163),f=c.n(h),y=c(8),P=x.a.div(a||(a=Object(j.a)(["\n\n  .page-link {\n    color: black;\n\n  }\n\n  .right {\n    text-align: right;\n    }\n    \n    \n\n"])));function C(e){var t=e.columns,c=e.data,a=e.fileType;e.fileName;if("csv"===a){var r=t.map((function(e){return e.exportValue})),i=f.a.unparse({fields:r,data:c});return new Blob([i],{type:"text/csv"})}return!1}function S(e){var t=e.columns,c=e.data,a=Object(b.useTable)({columns:t,data:c,getExportFileBlob:C,initialState:{pageIndex:0,pageSize:10,sortBy:[{id:"date",desc:!0}]}},b.useSortBy,b.usePagination,O.a),r=a.getTableProps,i=a.getTableBodyProps,o=a.headerGroups,l=a.prepareRow,d=a.page,_=a.canPreviousPage,n=a.canNextPage,s=a.pageOptions,p=(a.pageCount,a.gotoPage,a.nextPage),u=a.previousPage,g=a.setPageSize,m=a.state,j=m.pageIndex,x=m.pageSize,h=a.exportData;return Object(y.jsxs)("div",{children:[Object(y.jsxs)("table",Object(v.a)(Object(v.a)({className:"table"},r()),{},{children:[Object(y.jsx)("thead",{children:o.map((function(e){return Object(y.jsx)("tr",Object(v.a)(Object(v.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(y.jsxs)("th",Object(v.a)(Object(v.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(y.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(y.jsx)("tbody",Object(v.a)(Object(v.a)({},i()),{},{children:d.map((function(e,t){return l(e),Object(y.jsx)("tr",Object(v.a)(Object(v.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(y.jsx)("td",Object(v.a)(Object(v.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),Object(y.jsxs)("ul",{className:"pagination",children:[Object(y.jsx)("li",{className:"page-item",onClick:function(){return u()},disabled:!_,children:Object(y.jsx)("a",{className:"page-link",children:"<"})}),Object(y.jsx)("li",{className:"page-item",onClick:function(){return p()},disabled:!n,children:Object(y.jsx)("a",{className:"page-link",children:">"})}),Object(y.jsx)("li",{children:Object(y.jsxs)("a",{className:"page-link",children:["Page"," ",Object(y.jsxs)("strong",{children:[j+1," of ",s.length]})," "]})}),Object(y.jsx)("select",{className:"form-control",value:x,onChange:function(e){g(Number(e.target.value))},style:{width:"120px",height:"38px"},children:[5,10,20,30,40,50].map((function(e){return Object(y.jsxs)("option",{value:e,children:["Show ",e]},e)}))}),Object(y.jsx)("button",{onClick:function(){h("csv",!0)},children:"Export CSV"})]})]})}function k(e){return parseFloat(e).toLocaleString("KRW")}var N=function(){var e=i.a.useMemo((function(){return[{Header:"Date",accessor:"date"},{Header:"\uac70\ub798\ub7c9(REC)",accessor:"trade_volume",Cell:function(e){return Object(y.jsxs)("div",{children:[" ",k(e.value)," "]})}},{Header:"\uc885\uac00(\uc6d0)",accessor:"closing_price",Cell:function(e){return Object(y.jsxs)("div",{children:[" ",k(e.value)," "]})}}]}),[]),t=i.a.useMemo((function(){return m}),[m]);return Object(y.jsx)(P,{children:Object(y.jsx)(S,{columns:e,data:t})})},w=c(370),F=c(376),B=c(374),R=c(187),T=c(188),E=c(82),H=c(80),I=c(186),D=Object(s.a)((function(e){return{root:{display:"flex"},container:{padding:e.spacing(1)},horizontalPaper:{margin:e.spacing(1)},verticalPaper:{margin:e.spacing(1),display:"flex",overflow:"hidden",flexDirection:"column",alignItems:"center"}}})),M=function(){var e=D();return Object(y.jsxs)(p.a,{component:"main",maxWidth:"false",children:[Object(y.jsx)(g.a,{}),Object(y.jsx)("div",{className:e.verticalPaper,children:Object(y.jsxs)(u.a,{container:!0,spacing:2,children:[Object(y.jsxs)(u.a,{align:"center",item:!0,xs:12,sm:12,md:12,children:[Object(y.jsx)(n.a,{component:"h1",variant:"h5",children:"REC Price"}),Object(y.jsx)(n.a,{component:"h5",variant:"body1",children:"(KRW/REC)"})]}),Object(y.jsx)(u.a,{align:"center",item:!0,xs:12,sm:12,md:7,children:Object(y.jsx)(w.a,{width:"99%",aspect:1.1,children:Object(y.jsxs)(F.a,{data:m,margin:{top:20,right:20,bottom:20,left:20},children:[Object(y.jsxs)("defs",{children:[Object(y.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(y.jsx)("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),Object(y.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]}),Object(y.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(y.jsx)("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),Object(y.jsx)("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0})]})]}),Object(y.jsx)(B.a,{stroke:"#f5f5f5"}),Object(y.jsx)(R.a,{dataKey:"date",interval:100,tickFormatter:function(e){return _()(e).format("YY/MM")}}),Object(y.jsx)(T.a,{tickFormatter:function(e){return e.toLocaleString()}}),Object(y.jsx)(E.a,{formatter:function(e,t,c){return[new Intl.NumberFormat("en").format(e),"\uc885\uac00"]}}),Object(y.jsx)(H.a,{}),Object(y.jsx)(I.a,{type:"monotone",dataKey:"closing_price",fill:"url(#colorPv)",stroke:"#82ca9d",fillOpacity:1})," "]},"cc_".concat(m.length))},"rc_".concat(m.length))}),Object(y.jsx)(u.a,{align:"center",item:!0,xs:12,sm:12,md:5,children:Object(y.jsx)(N,{})})]})})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,378)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),a(e),r(e),i(e),o(e)}))};l.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),z()},58:function(e){e.exports=JSON.parse('[{"date":"2017-03-28","trade_volume":2568,"closing_price":120000},{"date":"2017-03-30","trade_volume":11513,"closing_price":120100},{"date":"2017-04-04","trade_volume":13402,"closing_price":123800},{"date":"2017-04-06","trade_volume":12453,"closing_price":124000},{"date":"2017-04-11","trade_volume":12282,"closing_price":124900},{"date":"2017-04-13","trade_volume":14021,"closing_price":120800},{"date":"2017-04-18","trade_volume":18508,"closing_price":125000},{"date":"2017-04-20","trade_volume":22259,"closing_price":127600},{"date":"2017-04-25","trade_volume":16454,"closing_price":130000},{"date":"2017-04-27","trade_volume":8149,"closing_price":121000},{"date":"2017-05-02","trade_volume":14311,"closing_price":125500},{"date":"2017-05-04","trade_volume":13373,"closing_price":130000},{"date":"2017-05-11","trade_volume":37727,"closing_price":130000},{"date":"2017-05-16","trade_volume":43359,"closing_price":132300},{"date":"2017-05-18","trade_volume":9385,"closing_price":129500},{"date":"2017-05-23","trade_volume":43479,"closing_price":129200},{"date":"2017-05-25","trade_volume":42529,"closing_price":132000},{"date":"2017-05-30","trade_volume":11541,"closing_price":128000},{"date":"2017-06-01","trade_volume":15372,"closing_price":130000},{"date":"2017-06-08","trade_volume":137838,"closing_price":133500},{"date":"2017-06-13","trade_volume":2345,"closing_price":125500},{"date":"2017-06-15","trade_volume":16466,"closing_price":119000},{"date":"2017-06-20","trade_volume":73130,"closing_price":129000},{"date":"2017-06-22","trade_volume":3350,"closing_price":125000},{"date":"2017-06-27","trade_volume":5327,"closing_price":124500},{"date":"2017-06-29","trade_volume":47983,"closing_price":129000},{"date":"2017-07-04","trade_volume":7697,"closing_price":124700},{"date":"2017-07-06","trade_volume":12117,"closing_price":124500},{"date":"2017-07-11","trade_volume":19423,"closing_price":125800},{"date":"2017-07-13","trade_volume":42488,"closing_price":125000},{"date":"2017-07-18","trade_volume":8800,"closing_price":125900},{"date":"2017-07-20","trade_volume":41431,"closing_price":127300},{"date":"2017-07-25","trade_volume":12730,"closing_price":125200},{"date":"2017-07-27","trade_volume":24008,"closing_price":125600},{"date":"2017-08-01","trade_volume":25315,"closing_price":126600},{"date":"2017-08-03","trade_volume":30935,"closing_price":126200},{"date":"2017-08-08","trade_volume":21578,"closing_price":125300},{"date":"2017-08-10","trade_volume":26867,"closing_price":126000},{"date":"2017-08-17","trade_volume":31909,"closing_price":125000},{"date":"2017-08-22","trade_volume":36000,"closing_price":126100},{"date":"2017-08-24","trade_volume":16598,"closing_price":127400},{"date":"2017-08-29","trade_volume":17279,"closing_price":125600},{"date":"2017-08-31","trade_volume":30543,"closing_price":122500},{"date":"2017-09-05","trade_volume":59748,"closing_price":127100},{"date":"2017-09-07","trade_volume":35870,"closing_price":126500},{"date":"2017-09-12","trade_volume":12390,"closing_price":126000},{"date":"2017-09-14","trade_volume":49360,"closing_price":126900},{"date":"2017-09-19","trade_volume":43754,"closing_price":127700},{"date":"2017-09-21","trade_volume":56006,"closing_price":128000},{"date":"2017-09-26","trade_volume":33603,"closing_price":126900},{"date":"2017-09-28","trade_volume":64274,"closing_price":128000},{"date":"2017-10-10","trade_volume":8222,"closing_price":126500},{"date":"2017-10-12","trade_volume":106460,"closing_price":127000},{"date":"2017-10-17","trade_volume":42979,"closing_price":126000},{"date":"2017-10-19","trade_volume":51909,"closing_price":128000},{"date":"2017-10-24","trade_volume":56851,"closing_price":128000},{"date":"2017-10-26","trade_volume":128942,"closing_price":128000},{"date":"2017-10-31","trade_volume":103146,"closing_price":128000},{"date":"2017-11-02","trade_volume":19255,"closing_price":127300},{"date":"2017-11-07","trade_volume":43894,"closing_price":127100},{"date":"2017-11-09","trade_volume":13505,"closing_price":127000},{"date":"2017-11-14","trade_volume":6687,"closing_price":125000},{"date":"2017-11-16","trade_volume":46328,"closing_price":125900},{"date":"2017-11-21","trade_volume":29474,"closing_price":124000},{"date":"2017-11-23","trade_volume":6508,"closing_price":116500},{"date":"2017-11-28","trade_volume":5821,"closing_price":99000},{"date":"2017-11-30","trade_volume":13051,"closing_price":100100},{"date":"2017-12-05","trade_volume":26537,"closing_price":100000},{"date":"2017-12-07","trade_volume":18851,"closing_price":100100},{"date":"2017-12-12","trade_volume":19125,"closing_price":100300},{"date":"2017-12-14","trade_volume":33043,"closing_price":105100},{"date":"2017-12-19","trade_volume":12510,"closing_price":105500},{"date":"2017-12-21","trade_volume":12327,"closing_price":106500},{"date":"2017-12-26","trade_volume":17822,"closing_price":105000},{"date":"2017-12-28","trade_volume":23536,"closing_price":105000},{"date":"2018-01-02","trade_volume":3430,"closing_price":101600},{"date":"2018-01-04","trade_volume":23212,"closing_price":106000},{"date":"2018-01-09","trade_volume":23320,"closing_price":105200},{"date":"2018-01-11","trade_volume":45359,"closing_price":110000},{"date":"2018-01-16","trade_volume":29276,"closing_price":115000},{"date":"2018-01-18","trade_volume":8717,"closing_price":107500},{"date":"2018-01-23","trade_volume":62279,"closing_price":110200},{"date":"2018-01-25","trade_volume":36765,"closing_price":112000},{"date":"2018-01-30","trade_volume":36025,"closing_price":113000},{"date":"2018-02-01","trade_volume":38789,"closing_price":111400},{"date":"2018-02-06","trade_volume":34669,"closing_price":111200},{"date":"2018-02-08","trade_volume":50762,"closing_price":110600},{"date":"2018-02-13","trade_volume":48369,"closing_price":108000},{"date":"2018-02-20","trade_volume":55989,"closing_price":108000},{"date":"2018-02-22","trade_volume":62790,"closing_price":109500},{"date":"2018-02-27","trade_volume":59104,"closing_price":105800},{"date":"2018-03-06","trade_volume":23968,"closing_price":100900},{"date":"2018-03-08","trade_volume":25353,"closing_price":100000},{"date":"2018-03-13","trade_volume":41045,"closing_price":100000},{"date":"2018-03-15","trade_volume":29943,"closing_price":99900},{"date":"2018-03-20","trade_volume":58806,"closing_price":99900},{"date":"2018-03-22","trade_volume":101695,"closing_price":101500},{"date":"2018-03-27","trade_volume":43658,"closing_price":102700},{"date":"2018-03-29","trade_volume":75878,"closing_price":105500},{"date":"2018-04-03","trade_volume":46994,"closing_price":106000},{"date":"2018-04-05","trade_volume":69085,"closing_price":106300},{"date":"2018-04-10","trade_volume":43481,"closing_price":107800},{"date":"2018-04-12","trade_volume":101877,"closing_price":109000},{"date":"2018-04-17","trade_volume":57541,"closing_price":109200},{"date":"2018-04-19","trade_volume":75269,"closing_price":109800},{"date":"2018-04-24","trade_volume":76949,"closing_price":109400},{"date":"2018-04-26","trade_volume":89094,"closing_price":109900},{"date":"2018-05-03","trade_volume":84002,"closing_price":109000},{"date":"2018-05-08","trade_volume":95588,"closing_price":109900},{"date":"2018-05-10","trade_volume":132393,"closing_price":110100},{"date":"2018-05-15","trade_volume":131089,"closing_price":110000},{"date":"2018-05-17","trade_volume":38706,"closing_price":110500},{"date":"2018-05-24","trade_volume":80731,"closing_price":110300},{"date":"2018-05-29","trade_volume":76158,"closing_price":109800},{"date":"2018-05-31","trade_volume":62683,"closing_price":107800},{"date":"2018-06-05","trade_volume":12917,"closing_price":105000},{"date":"2018-06-07","trade_volume":69532,"closing_price":108800},{"date":"2018-06-12","trade_volume":111979,"closing_price":108400},{"date":"2018-06-14","trade_volume":47208,"closing_price":108900},{"date":"2018-06-19","trade_volume":168322,"closing_price":108500},{"date":"2018-06-21","trade_volume":53191,"closing_price":108800},{"date":"2018-06-26","trade_volume":70760,"closing_price":108500},{"date":"2018-06-28","trade_volume":14628,"closing_price":101000},{"date":"2018-07-03","trade_volume":15036,"closing_price":101900},{"date":"2018-07-05","trade_volume":58489,"closing_price":105000},{"date":"2018-07-10","trade_volume":80942,"closing_price":106000},{"date":"2018-07-12","trade_volume":85954,"closing_price":105300},{"date":"2018-07-17","trade_volume":33674,"closing_price":106000},{"date":"2018-07-19","trade_volume":77940,"closing_price":104500},{"date":"2018-07-24","trade_volume":49384,"closing_price":104600},{"date":"2018-07-26","trade_volume":20166,"closing_price":102000},{"date":"2018-07-31","trade_volume":42721,"closing_price":100000},{"date":"2018-08-02","trade_volume":19662,"closing_price":98000},{"date":"2018-08-07","trade_volume":41905,"closing_price":99200},{"date":"2018-08-09","trade_volume":12638,"closing_price":98600},{"date":"2018-08-14","trade_volume":23029,"closing_price":98900},{"date":"2018-08-16","trade_volume":11861,"closing_price":98500},{"date":"2018-08-21","trade_volume":58744,"closing_price":97000},{"date":"2018-08-23","trade_volume":64643,"closing_price":97500},{"date":"2018-08-28","trade_volume":126711,"closing_price":95100},{"date":"2018-08-30","trade_volume":54509,"closing_price":95000},{"date":"2018-09-04","trade_volume":29023,"closing_price":95000},{"date":"2018-09-06","trade_volume":27944,"closing_price":94500},{"date":"2018-09-11","trade_volume":52786,"closing_price":93000},{"date":"2018-09-13","trade_volume":23530,"closing_price":92500},{"date":"2018-09-18","trade_volume":24126,"closing_price":88000},{"date":"2018-09-20","trade_volume":38585,"closing_price":88000},{"date":"2018-09-27","trade_volume":12260,"closing_price":83500},{"date":"2018-10-02","trade_volume":136618,"closing_price":83500},{"date":"2018-10-04","trade_volume":45943,"closing_price":83500},{"date":"2018-10-11","trade_volume":171597,"closing_price":82900},{"date":"2018-10-16","trade_volume":27967,"closing_price":81900},{"date":"2018-10-18","trade_volume":37218,"closing_price":80000},{"date":"2018-10-23","trade_volume":22147,"closing_price":78600},{"date":"2018-10-25","trade_volume":21251,"closing_price":77000},{"date":"2018-10-30","trade_volume":19342,"closing_price":68000},{"date":"2018-11-01","trade_volume":43936,"closing_price":61000},{"date":"2018-11-06","trade_volume":84851,"closing_price":68000},{"date":"2018-11-08","trade_volume":104280,"closing_price":75000},{"date":"2018-11-13","trade_volume":114565,"closing_price":81500},{"date":"2018-11-15","trade_volume":113603,"closing_price":82000},{"date":"2018-11-20","trade_volume":113464,"closing_price":80600},{"date":"2018-11-22","trade_volume":173373,"closing_price":79700},{"date":"2018-11-27","trade_volume":54935,"closing_price":77000},{"date":"2018-11-29","trade_volume":66301,"closing_price":76000},{"date":"2018-12-04","trade_volume":116366,"closing_price":77000},{"date":"2018-12-06","trade_volume":78578,"closing_price":79500},{"date":"2018-12-11","trade_volume":83018,"closing_price":78500},{"date":"2018-12-13","trade_volume":279227,"closing_price":79900},{"date":"2018-12-18","trade_volume":221934,"closing_price":80000},{"date":"2018-12-20","trade_volume":45416,"closing_price":79000},{"date":"2018-12-27","trade_volume":197065,"closing_price":80000},{"date":"2019-01-03","trade_volume":7382,"closing_price":72000},{"date":"2019-01-08","trade_volume":4504,"closing_price":64000},{"date":"2019-01-10","trade_volume":27541,"closing_price":70000},{"date":"2019-01-15","trade_volume":32844,"closing_price":71300},{"date":"2019-01-17","trade_volume":51947,"closing_price":76000},{"date":"2019-01-22","trade_volume":49338,"closing_price":76300},{"date":"2019-01-24","trade_volume":47143,"closing_price":76300},{"date":"2019-01-29","trade_volume":72090,"closing_price":76800},{"date":"2019-01-31","trade_volume":33941,"closing_price":75900},{"date":"2019-02-07","trade_volume":37510,"closing_price":75900},{"date":"2019-02-12","trade_volume":123781,"closing_price":77000},{"date":"2019-02-14","trade_volume":91019,"closing_price":76900},{"date":"2019-02-19","trade_volume":82896,"closing_price":77100},{"date":"2019-02-21","trade_volume":52293,"closing_price":76800},{"date":"2019-02-26","trade_volume":72375,"closing_price":76000},{"date":"2019-02-28","trade_volume":44106,"closing_price":75100},{"date":"2019-03-05","trade_volume":49483,"closing_price":75000},{"date":"2019-03-07","trade_volume":57501,"closing_price":74500},{"date":"2019-03-12","trade_volume":116921,"closing_price":74500},{"date":"2019-03-14","trade_volume":159083,"closing_price":75500},{"date":"2019-03-19","trade_volume":26719,"closing_price":74700},{"date":"2019-03-21","trade_volume":95006,"closing_price":74500},{"date":"2019-03-26","trade_volume":23957,"closing_price":73100},{"date":"2019-03-28","trade_volume":14521,"closing_price":70000},{"date":"2019-04-02","trade_volume":20188,"closing_price":67800},{"date":"2019-04-04","trade_volume":12560,"closing_price":65100},{"date":"2019-04-09","trade_volume":25356,"closing_price":67500},{"date":"2019-04-11","trade_volume":29396,"closing_price":68600},{"date":"2019-04-16","trade_volume":62167,"closing_price":69800},{"date":"2019-04-18","trade_volume":52827,"closing_price":69900},{"date":"2019-04-23","trade_volume":56927,"closing_price":70000},{"date":"2019-04-25","trade_volume":67286,"closing_price":70500},{"date":"2019-04-30","trade_volume":95125,"closing_price":70000},{"date":"2019-05-02","trade_volume":33952,"closing_price":69900},{"date":"2019-05-07","trade_volume":40072,"closing_price":69900},{"date":"2019-05-09","trade_volume":106842,"closing_price":70000},{"date":"2019-05-14","trade_volume":45259,"closing_price":69700},{"date":"2019-05-16","trade_volume":125681,"closing_price":70500},{"date":"2019-05-21","trade_volume":79668,"closing_price":70500},{"date":"2019-05-23","trade_volume":58165,"closing_price":70100},{"date":"2019-05-28","trade_volume":64329,"closing_price":69900},{"date":"2019-05-30","trade_volume":16877,"closing_price":69500},{"date":"2019-06-04","trade_volume":76525,"closing_price":69100},{"date":"2019-06-11","trade_volume":71269,"closing_price":69500},{"date":"2019-06-13","trade_volume":54641,"closing_price":69700},{"date":"2019-06-18","trade_volume":73107,"closing_price":68500},{"date":"2019-06-20","trade_volume":59743,"closing_price":68500},{"date":"2019-06-25","trade_volume":82735,"closing_price":69000},{"date":"2019-06-27","trade_volume":33351,"closing_price":68600},{"date":"2019-07-02","trade_volume":50403,"closing_price":67700},{"date":"2019-07-04","trade_volume":60150,"closing_price":66900},{"date":"2019-07-09","trade_volume":55352,"closing_price":65700},{"date":"2019-07-11","trade_volume":50257,"closing_price":64400},{"date":"2019-07-16","trade_volume":75777,"closing_price":64200},{"date":"2019-07-18","trade_volume":53955,"closing_price":64100},{"date":"2019-07-23","trade_volume":74979,"closing_price":62500},{"date":"2019-07-25","trade_volume":75103,"closing_price":61500},{"date":"2019-07-30","trade_volume":65566,"closing_price":59900},{"date":"2019-08-01","trade_volume":74793,"closing_price":59900},{"date":"2019-08-06","trade_volume":46397,"closing_price":59000},{"date":"2019-08-08","trade_volume":70852,"closing_price":59100},{"date":"2019-08-13","trade_volume":49504,"closing_price":59100},{"date":"2019-08-20","trade_volume":94470,"closing_price":59000},{"date":"2019-08-22","trade_volume":71031,"closing_price":59100},{"date":"2019-08-27","trade_volume":107919,"closing_price":59000},{"date":"2019-08-29","trade_volume":66551,"closing_price":58800},{"date":"2019-09-03","trade_volume":112132,"closing_price":58800},{"date":"2019-09-05","trade_volume":74923,"closing_price":57600},{"date":"2019-09-10","trade_volume":58118,"closing_price":57800},{"date":"2019-09-17","trade_volume":144212,"closing_price":57200},{"date":"2019-09-19","trade_volume":62548,"closing_price":56900},{"date":"2019-09-24","trade_volume":74941,"closing_price":56200},{"date":"2019-09-26","trade_volume":109163,"closing_price":56100},{"date":"2019-10-01","trade_volume":109274,"closing_price":54600},{"date":"2019-10-08","trade_volume":151817,"closing_price":54200},{"date":"2019-10-10","trade_volume":100058,"closing_price":53700},{"date":"2019-10-15","trade_volume":136918,"closing_price":52800},{"date":"2019-10-17","trade_volume":105103,"closing_price":50700},{"date":"2019-10-22","trade_volume":76159,"closing_price":49300},{"date":"2019-10-24","trade_volume":47606,"closing_price":47200},{"date":"2019-10-29","trade_volume":81117,"closing_price":44200},{"date":"2019-10-31","trade_volume":82452,"closing_price":41200},{"date":"2019-11-05","trade_volume":68255,"closing_price":40000},{"date":"2019-11-07","trade_volume":64979,"closing_price":40900},{"date":"2019-11-12","trade_volume":68720,"closing_price":42300},{"date":"2019-11-14","trade_volume":64175,"closing_price":46500},{"date":"2019-11-19","trade_volume":98767,"closing_price":50100},{"date":"2019-11-21","trade_volume":167389,"closing_price":51700},{"date":"2019-11-26","trade_volume":147328,"closing_price":51200},{"date":"2019-11-28","trade_volume":81005,"closing_price":49900},{"date":"2019-12-03","trade_volume":91322,"closing_price":49400},{"date":"2019-12-05","trade_volume":76854,"closing_price":49400},{"date":"2019-12-10","trade_volume":146508,"closing_price":49100},{"date":"2019-12-12","trade_volume":122481,"closing_price":48600},{"date":"2019-12-17","trade_volume":161487,"closing_price":49000},{"date":"2019-12-19","trade_volume":127344,"closing_price":48700},{"date":"2019-12-24","trade_volume":72838,"closing_price":48000},{"date":"2019-12-26","trade_volume":87423,"closing_price":47000},{"date":"2019-12-31","trade_volume":58227,"closing_price":44100},{"date":"2020-01-02","trade_volume":11610,"closing_price":43000},{"date":"2020-01-07","trade_volume":33170,"closing_price":42100},{"date":"2020-01-09","trade_volume":32966,"closing_price":42500},{"date":"2020-01-14","trade_volume":62864,"closing_price":42200},{"date":"2020-01-16","trade_volume":51805,"closing_price":44000},{"date":"2020-01-21","trade_volume":88646,"closing_price":44600},{"date":"2020-01-23","trade_volume":56576,"closing_price":44900},{"date":"2020-01-28","trade_volume":54829,"closing_price":43500},{"date":"2020-01-30","trade_volume":66731,"closing_price":44000},{"date":"2020-02-04","trade_volume":47585,"closing_price":43300},{"date":"2020-02-06","trade_volume":74228,"closing_price":43900},{"date":"2020-02-11","trade_volume":47734,"closing_price":43600},{"date":"2020-02-13","trade_volume":35224,"closing_price":42500},{"date":"2020-02-18","trade_volume":32746,"closing_price":40600},{"date":"2020-02-20","trade_volume":36699,"closing_price":39500},{"date":"2020-02-25","trade_volume":20569,"closing_price":35900},{"date":"2020-02-27","trade_volume":43409,"closing_price":32400},{"date":"2020-03-03","trade_volume":33860,"closing_price":29900},{"date":"2020-03-05","trade_volume":52554,"closing_price":32400},{"date":"2020-03-10","trade_volume":60487,"closing_price":35600},{"date":"2020-03-12","trade_volume":44626,"closing_price":39100},{"date":"2020-03-17","trade_volume":125792,"closing_price":43000},{"date":"2020-03-19","trade_volume":134446,"closing_price":46300},{"date":"2020-03-24","trade_volume":116924,"closing_price":44900},{"date":"2020-03-26","trade_volume":121962,"closing_price":44000},{"date":"2020-03-31","trade_volume":198943,"closing_price":45100},{"date":"2020-04-02","trade_volume":87172,"closing_price":44700},{"date":"2020-04-07","trade_volume":150851,"closing_price":44400},{"date":"2020-04-09","trade_volume":119970,"closing_price":44400},{"date":"2020-04-14","trade_volume":103381,"closing_price":44200},{"date":"2020-04-16","trade_volume":89406,"closing_price":44200},{"date":"2020-04-21","trade_volume":113981,"closing_price":44500},{"date":"2020-04-23","trade_volume":109125,"closing_price":44400},{"date":"2020-04-28","trade_volume":134759,"closing_price":44500},{"date":"2020-05-07","trade_volume":170408,"closing_price":44500},{"date":"2020-05-12","trade_volume":125228,"closing_price":44400},{"date":"2020-05-14","trade_volume":119446,"closing_price":44400},{"date":"2020-05-19","trade_volume":122893,"closing_price":44500},{"date":"2020-05-21","trade_volume":46683,"closing_price":44400},{"date":"2020-05-26","trade_volume":111343,"closing_price":44600},{"date":"2020-05-28","trade_volume":134264,"closing_price":44500},{"date":"2020-06-02","trade_volume":112904,"closing_price":44400},{"date":"2020-06-04","trade_volume":88643,"closing_price":44300},{"date":"2020-06-09","trade_volume":100827,"closing_price":44200},{"date":"2020-06-11","trade_volume":89298,"closing_price":44200},{"date":"2020-06-16","trade_volume":116958,"closing_price":44100},{"date":"2020-06-18","trade_volume":130728,"closing_price":44300},{"date":"2020-06-23","trade_volume":111859,"closing_price":44400},{"date":"2020-06-25","trade_volume":108420,"closing_price":44500},{"date":"2020-06-30","trade_volume":112137,"closing_price":44200},{"date":"2020-07-02","trade_volume":103780,"closing_price":44200},{"date":"2020-07-07","trade_volume":120742,"closing_price":44100},{"date":"2020-07-09","trade_volume":138247,"closing_price":44200},{"date":"2020-07-14","trade_volume":153317,"closing_price":44700},{"date":"2020-07-16","trade_volume":109410,"closing_price":45000},{"date":"2020-07-21","trade_volume":135849,"closing_price":45000},{"date":"2020-07-23","trade_volume":101867,"closing_price":45000},{"date":"2020-07-28","trade_volume":105983,"closing_price":45100},{"date":"2020-07-30","trade_volume":95407,"closing_price":45000},{"date":"2020-08-04","trade_volume":78017,"closing_price":45200},{"date":"2020-08-06","trade_volume":96995,"closing_price":45300},{"date":"2020-08-11","trade_volume":116290,"closing_price":45500},{"date":"2020-08-13","trade_volume":109339,"closing_price":45700},{"date":"2020-08-18","trade_volume":93997,"closing_price":47000},{"date":"2020-08-20","trade_volume":147181,"closing_price":47000},{"date":"2020-08-25","trade_volume":113764,"closing_price":47300},{"date":"2020-08-27","trade_volume":138343,"closing_price":47300},{"date":"2020-09-01","trade_volume":132660,"closing_price":47200},{"date":"2020-09-03","trade_volume":123421,"closing_price":47100},{"date":"2020-09-08","trade_volume":74127,"closing_price":46300},{"date":"2020-09-10","trade_volume":61353,"closing_price":44500},{"date":"2020-09-15","trade_volume":94887,"closing_price":44800},{"date":"2020-09-17","trade_volume":78882,"closing_price":44700},{"date":"2020-09-22","trade_volume":106197,"closing_price":44700},{"date":"2020-09-24","trade_volume":118330,"closing_price":45100},{"date":"2020-09-29","trade_volume":75191,"closing_price":44400},{"date":"2020-10-06","trade_volume":64441,"closing_price":44000},{"date":"2020-10-08","trade_volume":32021,"closing_price":40100},{"date":"2020-10-13","trade_volume":33310,"closing_price":38700},{"date":"2020-10-15","trade_volume":31568,"closing_price":38700},{"date":"2020-10-20","trade_volume":44505,"closing_price":39200},{"date":"2020-10-22","trade_volume":73719,"closing_price":40600},{"date":"2020-10-27","trade_volume":99293,"closing_price":40600},{"date":"2020-10-29","trade_volume":39439,"closing_price":39100},{"date":"2020-11-03","trade_volume":44821,"closing_price":39100},{"date":"2020-11-05","trade_volume":34369,"closing_price":38500},{"date":"2020-11-10","trade_volume":44091,"closing_price":36900},{"date":"2020-11-12","trade_volume":40563,"closing_price":36300},{"date":"2020-11-17","trade_volume":53305,"closing_price":35000},{"date":"2020-11-19","trade_volume":23926,"closing_price":32600},{"date":"2020-11-24","trade_volume":78116,"closing_price":30300},{"date":"2020-11-26","trade_volume":44962,"closing_price":30000},{"date":"2020-12-01","trade_volume":71088,"closing_price":30000},{"date":"2020-12-08","trade_volume":98791,"closing_price":31100},{"date":"2020-12-10","trade_volume":83511,"closing_price":33000},{"date":"2020-12-15","trade_volume":138503,"closing_price":35000},{"date":"2020-12-17","trade_volume":135543,"closing_price":38500},{"date":"2020-12-22","trade_volume":76470,"closing_price":37500},{"date":"2020-12-24","trade_volume":161509,"closing_price":40600},{"date":"2020-12-29","trade_volume":49314,"closing_price":37900},{"date":"2020-12-31","trade_volume":30312,"closing_price":35500},{"date":"2021-01-05","trade_volume":45030,"closing_price":38000},{"date":"2021-01-07","trade_volume":47454,"closing_price":37900},{"date":"2021-01-12","trade_volume":108015,"closing_price":39000},{"date":"2021-01-14","trade_volume":70043,"closing_price":39100},{"date":"2021-01-19","trade_volume":129728,"closing_price":40000},{"date":"2021-01-21","trade_volume":84092,"closing_price":39100},{"date":"2021-01-26","trade_volume":64652,"closing_price":39200},{"date":"2021-01-28","trade_volume":75827,"closing_price":39300},{"date":"2021-02-02","trade_volume":101102,"closing_price":39500},{"date":"2021-02-04","trade_volume":95858,"closing_price":39700},{"date":"2021-02-09","trade_volume":110277,"closing_price":39500},{"date":"2021-02-16","trade_volume":90784,"closing_price":39700},{"date":"2021-02-18","trade_volume":186952,"closing_price":40000},{"date":"2021-02-23","trade_volume":196761,"closing_price":41900},{"date":"2021-02-25","trade_volume":157960,"closing_price":40000},{"date":"2021-03-02","trade_volume":35719,"closing_price":39200},{"date":"2021-03-04","trade_volume":60442,"closing_price":39200},{"date":"2021-03-09","trade_volume":68180,"closing_price":39000},{"date":"2021-03-11","trade_volume":39643,"closing_price":38000},{"date":"2021-03-16","trade_volume":44851,"closing_price":35100},{"date":"2021-03-18","trade_volume":26598,"closing_price":34900},{"date":"2021-03-23","trade_volume":24809,"closing_price":32400},{"date":"2021-03-25","trade_volume":37539,"closing_price":32000},{"date":"2021-03-30","trade_volume":41605,"closing_price":32000},{"date":"2021-04-01","trade_volume":38658,"closing_price":31700},{"date":"2021-04-06","trade_volume":59767,"closing_price":33400},{"date":"2021-04-08","trade_volume":55059,"closing_price":34000},{"date":"2021-04-13","trade_volume":73794,"closing_price":35600},{"date":"2021-04-15","trade_volume":45078,"closing_price":34900},{"date":"2021-04-20","trade_volume":51455,"closing_price":34800},{"date":"2021-04-22","trade_volume":65603,"closing_price":35000},{"date":"2021-04-27","trade_volume":59643,"closing_price":34600},{"date":"2021-04-29","trade_volume":59016,"closing_price":34200},{"date":"2021-05-04","trade_volume":19830,"closing_price":31100},{"date":"2021-05-06","trade_volume":45807,"closing_price":31700},{"date":"2021-05-11","trade_volume":38739,"closing_price":31700},{"date":"2021-05-13","trade_volume":33666,"closing_price":31300},{"date":"2021-05-18","trade_volume":48504,"closing_price":31500},{"date":"2021-05-20","trade_volume":56508,"closing_price":31700},{"date":"2021-05-25","trade_volume":72279,"closing_price":32100},{"date":"2021-05-27","trade_volume":70830,"closing_price":32300},{"date":"2021-06-01","trade_volume":55587,"closing_price":32300},{"date":"2021-06-03","trade_volume":50949,"closing_price":31900},{"date":"2021-06-08","trade_volume":60319,"closing_price":31500},{"date":"2021-06-10","trade_volume":43408,"closing_price":32100},{"date":"2021-06-15","trade_volume":40028,"closing_price":31400},{"date":"2021-06-17","trade_volume":82802,"closing_price":30600},{"date":"2021-06-22","trade_volume":80165,"closing_price":31700},{"date":"2021-06-24","trade_volume":95826,"closing_price":32200},{"date":"2021-07-13","trade_volume":73885,"closing_price":30400},{"date":"2021-07-15","trade_volume":55739,"closing_price":30000},{"date":"2021-07-20","trade_volume":74046,"closing_price":30000},{"date":"2021-07-22","trade_volume":60690,"closing_price":29700},{"date":"2021-07-27","trade_volume":92296,"closing_price":29800},{"date":"2021-07-29","trade_volume":106646,"closing_price":30400},{"date":"2021-08-03","trade_volume":97014,"closing_price":30200},{"date":"2021-08-05","trade_volume":"61697","closing_price":"30000"}]')}},[[344,1,2]]]);
//# sourceMappingURL=main.fefef769.chunk.js.map