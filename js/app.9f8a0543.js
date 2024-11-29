(function(){"use strict";var e={2010:function(e,t,n){var s=n(3751),a=n(641);const r={class:"container"},o={class:"inner"},l={class:"content-layout"};function i(e,t,n,s,i,c){const u=(0,a.g2)("HeaderLayout"),d=(0,a.g2)("router-view"),g=(0,a.g2)("FooterLayout");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u),(0,a.Lk)("div",r,[(0,a.Lk)("div",o,[(0,a.Lk)("div",l,[(0,a.bF)(d)])])]),(0,a.bF)(g)],64)}var c=n(33);const u={class:"header"},d={class:"header-inner"},g={class:"nav"},p={class:"menu-wrap"},m={class:"active"},h={key:0,class:"login-wrap"},v={key:1,class:"login-wrap"};function k(e,t,n,s,r,o){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("header",u,[(0,a.Lk)("div",d,[(0,a.Lk)("h1",null,[(0,a.bF)(l,{to:"/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Gourmet Site")]))),_:1})]),(0,a.Lk)("nav",g,[(0,a.Lk)("ul",p,[(0,a.Lk)("li",m,[(0,a.bF)(l,{to:"/"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("메인")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/RestaurantList"},{default:(0,a.k6)((()=>t[2]||(t[2]=[(0,a.eW)("음식점 목록")]))),_:1})])]),e.isAuthenticated?((0,a.uX)(),(0,a.CE)("ul",h,[(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"",class:"color-green"},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(e.currentUser.email)+" 님",1)])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/",onClick:e.logout},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("로그아웃")]))),_:1},8,["onClick"])])])):((0,a.uX)(),(0,a.CE)("ul",v,[(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/Login",class:"color-green"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("로그인")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(l,{to:"/SignUp"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("회원가입")]))),_:1})])]))])])])}var L=n(6278),w={name:"HeaderLayout",data(){return{}},props:{},computed:{...(0,L.L8)(["isAuthenticated","currentUser"])},methods:{...(0,L.i0)(["logout"])}},f=n(6262);const b=(0,f.A)(w,[["render",k]]);var C=b;const y={class:"footer"};function N(e,t,n,s,r,o){return(0,a.uX)(),(0,a.CE)("footer",y,t[0]||(t[0]=[(0,a.Lk)("p",null,[(0,a.eW)(" 본 페이지는 상업적 목적이 아닌 한양사이버대학교 졸업프로젝트를 목적으로 만들어졌습니다."),(0,a.Lk)("br"),(0,a.eW)(" 2023100000 배수정 ")],-1)]))}var E={name:"FooterLayout",props:{}};const M=(0,f.A)(E,[["render",N]]);var A=M,_={name:"App",components:{HeaderLayout:C,FooterLayout:A}};const R=(0,f.A)(_,[["render",i]]);var x=R,S=n(5220),U=(n(1454),n(223)),I=n(1884),X=n(5746);const F={apiKey:"AIzaSyC4GnGNTJLqUh5kZ6fYWmrjXOpeZuPT46M",authDomain:"gyeongi-gourmet-project-602f6.firebaseapp.com",projectId:"gyeongi-gourmet-project-602f6",storageBucket:"gyeongi-gourmet-project-602f6.firebasestorage.app",messagingSenderId:"768699414384",appId:"1:768699414384:web:0f80be2514b8b95e8d41b5",measurementId:"G-FDDB3JW5D3"},D=(0,U.Wp)(F),T=(0,X.xI)(D),W=(e,t)=>(0,X.eJ)(T,e,t),B=(e,t)=>(0,X.x9)(T,e,t),O=(0,I.aU)(D);const P=(0,L.y$)({state:{user:null},mutations:{setUser(e,t){e.user=t},clearUser(e){e.user=null}},actions:{fetchUser({commit:e}){(0,X.hg)(T,(t=>{t?e("setUser",t):e("clearUser")}))},async logout({commit:e}){try{await(0,X.CI)(T),e("clearUser"),console.log("User logged out.")}catch(t){console.error("Error logging out:",t.message)}}},getters:{isAuthenticated:e=>!!e.user,currentUser:e=>e.user}});(0,X.hg)(T,(e=>{console.log(e),e?console.log("현재 로그인된 사용자:",e.email):console.log("로그인된 사용자가 없습니다.")}));var j=P,z=n.p+"img/good_restaurant.d4c208f3.jpg";const Y={class:"main-page-cont"};function J(e,t,n,s,r,o){return(0,a.uX)(),(0,a.CE)("div",Y,t[0]||(t[0]=[(0,a.Fv)('<div class="banner"><div class="left"><p> 경기도의 바르고 좋은 음식점을 소개합니다 </p><p> 경기도 모범음식점<br> 소개 사이트 </p></div><div class="right"><span># 친절한 서비스</span><span># 맛집</span><span># 믿음직한 위생 상태</span></div></div><section class="sec1"><div class="img-wrap"><img src="'+z+'" alt="모범 음식점 인증 마크"></div><p><em class="color-green">모범 음식점 이란?</em><br> 모범 음식점은 위생적이고 서비스 수준이 높은 음식점을 인증하여 위생적이고 안전한 외식 문화를 조성하고자 하는 제도입니다.<br><br> 이 인증은 지방자치단체에서 주관하며, 음식점의 위생 상태, 서비스 품질, 안전성 등을 평가하여 일정 기준을 충족한 경우 부여됩니다. </p></section><section class="sec2"><p><em class="color-green">모범 음식점 선정기준은?</em><br><strong>위생 관리 수준 - </strong> 조리 시설, 식재료 보관, 청결 상태 등의 위생 관리가 철저해야 합니다.<br><strong>서비스 품질 - </strong> 친절한 고객 응대, 서비스의 일관성 등을 평가합니다.<br><strong>안전성 - </strong> 조리 과정에서의 안전 준수, 고객의 안전을 고려한 시설물 관리 등이 포함됩니다.<br><strong>기타 - </strong> 지속적인 품질 유지와 지역 사회 기여도, 친환경 경영 등도 일부 평가 항목에 포함될 수 있습니다.<br></p></section>',3)]))}var K={name:"MainPage",props:{msg:String}};const G=(0,f.A)(K,[["render",J]]);var $=G,Z=n.p+"img/sample_img_1.acc172be.png";const Q={class:"List-page-cont"},V={class:"search-wrap"},q={class:"search-box"},H={class:"list-container"},ee={class:"category-wrap"},te={class:"sigun-wrap"},ne={class:"sec"},se={class:"wrap"},ae={class:"sec"},re={class:"wrap"},oe={key:0,class:"downArrow"},le={key:1,class:"upArrow"},ie={key:0},ce=["onClick"],ue={class:"cont-wrap"},de={class:"title-wrap"},ge={class:"title color-green"},pe={key:0,class:"result-cont"},me={class:"info-cont"},he={class:"info-wrap"},ve={class:"tag-wrap"},ke={class:"tag color-green"},Le={class:"tag color-green"},we={class:"title color-green"},fe={class:"addr"},be={class:"tel"},Ce=["onClick"],ye={key:1,class:"result-cont"},Ne={key:0,class:"modal-overlay"},Ee={class:"modal"},Me={class:"title-wrap"};function Ae(e,t,n,r,o,l){const i=(0,a.g2)("DetailModal"),u=(0,a.g2)("ReviewCont");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",Q,[(0,a.Lk)("div",V,[t[5]||(t[5]=(0,a.Lk)("span",{class:"title color-green"},"음식점 목록",-1)),(0,a.Lk)("div",q,[(0,a.Lk)("input",{type:"text",id:"searchInput",onKeyup:t[0]||(t[0]=(0,s.jR)((e=>l.search()),["enter"])),class:"search-input",placeholder:"검색어를 입력해주세요"},null,32),(0,a.Lk)("button",{class:"search-button",onClick:t[1]||(t[1]=e=>l.search())})])]),(0,a.Lk)("div",H,[(0,a.Lk)("div",ee,[t[7]||(t[7]=(0,a.Lk)("div",{class:"title-wrap"},[(0,a.Lk)("span",{class:"title color-green"},"지역")],-1)),(0,a.Lk)("div",te,[(0,a.Lk)("div",ne,[(0,a.Lk)("div",se,[(0,a.Lk)("span",{onClick:t[2]||(t[2]=e=>l.getData())},"전체"),t[6]||(t[6]=(0,a.Lk)("em",{class:"upArrow"},null,-1))])]),(0,a.Lk)("div",ae,[(0,a.Lk)("div",re,[(0,a.Lk)("span",{onClick:t[3]||(t[3]=e=>l.getSigunList())},"경기"),o.menuExpand?((0,a.uX)(),(0,a.CE)("em",oe)):((0,a.uX)(),(0,a.CE)("em",le))]),o.menuExpand?((0,a.uX)(),(0,a.CE)("ul",ie,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.sigunNMArr,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{key:t,onClick:n=>l.getData(e,t),class:(0,c.C4)({selected:o.selectedIndex===t})},(0,c.v_)(e),11,ce)))),128))])):(0,a.Q3)("",!0)])])]),(0,a.Lk)("div",ue,[(0,a.Lk)("div",de,[t[8]||(t[8]=(0,a.Lk)("span",{class:"title color-green"},"검색 결과",-1)),(0,a.Lk)("span",ge,"총 "+(0,c.v_)(o.resultLength)+"건",1)]),o.resultFlag?((0,a.uX)(),(0,a.CE)("div",pe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.resultArr,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{class:"cont",key:n},[(0,a.Lk)("div",me,[t[11]||(t[11]=(0,a.Lk)("div",{class:"img-wrap"},[(0,a.Lk)("img",{src:Z,alt:"샘플 이미지 1"})],-1)),(0,a.Lk)("div",he,[(0,a.Lk)("div",ve,[(0,a.Lk)("span",ke,"#"+(0,c.v_)(e.bizcondNM),1),(0,a.Lk)("span",Le,"#"+(0,c.v_)(e.mainMenuNM),1)]),(0,a.Lk)("span",we,(0,c.v_)(e.biszestblNM),1),(0,a.Lk)("p",fe,[t[9]||(t[9]=(0,a.Lk)("em",null,null,-1)),(0,a.eW)((0,c.v_)(e.refineRoadnmAddr),1)]),t[10]||(t[10]=(0,a.Lk)("span",{class:"tel-title"},"연락처",-1)),(0,a.Lk)("span",be,(0,c.v_)(e.telNo),1)])]),(0,a.Lk)("button",{onClick:t=>l.openModal(e)},"자세히 보기",8,Ce)])))),128))])):((0,a.uX)(),(0,a.CE)("div",ye,t[12]||(t[12]=[(0,a.Lk)("div",{class:"content-box"},[(0,a.Lk)("p",null,"검색 결과가 없습니다.")],-1)])))])])]),o.showModal?((0,a.uX)(),(0,a.CE)("div",Ne,[(0,a.Lk)("div",Ee,[(0,a.Lk)("div",Me,[t[13]||(t[13]=(0,a.Lk)("span",{class:"title"},"음식점 상세 정보",-1)),(0,a.Lk)("em",{onClick:t[4]||(t[4]=e=>l.closeModal()),class:"btn-close"})]),(0,a.bF)(i,{tag1:o.clickItem.bizcondNM,tag2:o.clickItem.mainMenuNM,title:o.clickItem.biszestblNM,addr:o.clickItem.refineRoadnmAddr,tel:o.clickItem.telNo},null,8,["tag1","tag2","title","addr","tel"]),(0,a.bF)(u,{restaurant:o.clickItem.biszestblNM},null,8,["restaurant"])])])):(0,a.Q3)("",!0)],64)}n(4114),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(4520),n(3949);var _e=n(4335);const Re={class:"detail-wrap result-cont"},xe={class:"cont"},Se={class:"info-cont"},Ue={class:"info-wrap"},Ie={class:"tag-wrap"},Xe={class:"tag color-green"},Fe={class:"tag color-green"},De={class:"title color-green"},Te={class:"addr"},We={class:"tel"};function Be(e,t,n,s,r,o){return(0,a.uX)(),(0,a.CE)("div",Re,[(0,a.Lk)("div",xe,[(0,a.Lk)("div",Se,[t[2]||(t[2]=(0,a.Lk)("div",{class:"img-wrap"},[(0,a.Lk)("img",{src:Z,alt:"샘플 이미지 1"})],-1)),(0,a.Lk)("div",Ue,[(0,a.Lk)("div",Ie,[(0,a.Lk)("span",Xe,"#"+(0,c.v_)(n.tag1),1),(0,a.Lk)("span",Fe,"#"+(0,c.v_)(n.tag2),1)]),(0,a.Lk)("span",De,(0,c.v_)(n.title),1),(0,a.Lk)("p",Te,[t[0]||(t[0]=(0,a.Lk)("em",null,null,-1)),(0,a.eW)((0,c.v_)(n.addr),1)]),t[1]||(t[1]=(0,a.Lk)("span",{class:"tel-title"},"연락처",-1)),(0,a.Lk)("span",We,(0,c.v_)(n.tel),1)])])])])}var Oe={name:"RestaurantDetailModal",props:{tag1:{type:String,default:null},tag2:{type:String,default:null},title:{type:String,default:null},addr:{type:String,default:null},tel:{type:String,default:null}},data(){return{item:[]}},mounted(){_e.A.get("https://openapi.gg.go.kr/ParagonRestaurant?KEY=c526a4e53c9d41e6956418615a2f9939&plndex=1&pSize=1000").then((e=>{const t=e.data;let n=this.parseXML(t);n=n.sort(((e,t)=>e.sigunNM.localeCompare(t.sigunNM))),this.item=n[0]})).catch((e=>{console.error("Error fetching data:",e)}))},methods:{parseXML(e){const t=new DOMParser,n=t.parseFromString(e,"text/xml"),s=n.getElementsByTagName("row"),a=[];for(let r=0;r<s.length;r++){const e=s[r],t=e.getElementsByTagName("SUM_YY")[0].textContent,n=e.getElementsByTagName("SIGUN_CD")[0].textContent,o=e.getElementsByTagName("SIGUN_NM")[0].textContent,l=e.getElementsByTagName("BIZESTBL_NM")[0].textContent,i=e.getElementsByTagName("BIZCOND_NM")[0].textContent,c=e.getElementsByTagName("TELNO")[0].textContent,u=e.getElementsByTagName("MAIN_MENU_NM")[0].textContent,d=e.getElementsByTagName("REFINE_ROADNM_ADDR")[0].textContent;a.push({sumYY:t,sigunCode:n,sigunNM:o,biszestblNM:l,bizcondNM:i,telNo:c,mainMenuNM:u,refineRoadnmAddr:d})}return a}}};const Pe=(0,f.A)(Oe,[["render",Be]]);var je=Pe;const ze={class:"review-wrap"},Ye={key:0,class:"title-wrap"},Je={class:"title color-green"},Ke={key:1,class:"title-wrap"},Ge={key:2,class:"review-cont-wrap"},$e={class:"top"},Ze={key:0},Qe={key:3,class:"review-cont-wrap"};function Ve(e,t,n,s,r,o){const l=(0,a.g2)("ReviewWrite");return(0,a.uX)(),(0,a.CE)("div",ze,[r.showReviewWrite?((0,a.uX)(),(0,a.CE)("div",Ke,t[2]||(t[2]=[(0,a.Lk)("h2",{class:"title color-green"},"리뷰 등록",-1)]))):((0,a.uX)(),(0,a.CE)("div",Ye,[t[1]||(t[1]=(0,a.Lk)("span",{class:"title color-green"},"리뷰",-1)),(0,a.Lk)("span",Je,"총 "+(0,c.v_)(r.reviewCount)+"건",1)])),r.showReviewWrite?((0,a.uX)(),(0,a.CE)("div",Qe,[(0,a.bF)(l,{restaurantName:n.restaurant,onWriteMode:o.updateReview},null,8,["restaurantName","onWriteMode"])])):((0,a.uX)(),(0,a.CE)("div",Ge,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.reviews,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"review-cont"},[(0,a.Lk)("div",$e,[(0,a.Lk)("span",null,(0,c.v_)(e.userInfo),1),e.timestamp?((0,a.uX)(),(0,a.CE)("span",Ze,(0,c.v_)(new Date(1e3*e.timestamp.seconds).toLocaleString()),1)):(0,a.Q3)("",!0)]),(0,a.Lk)("p",null,(0,c.v_)(e.comment),1)])))),128))])),r.showReviewWrite?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("button",{key:4,onClick:t[0]||(t[0]=(...e)=>o.modeChange&&o.modeChange(...e))},"리뷰 등록"))])}const qe={class:"review-cont"},He={class:"user-info"},et={class:"text-contet"};function tt(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",qe,[(0,a.Lk)("form",{onSubmit:t[1]||(t[1]=(0,s.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,a.Lk)("div",He,[(0,a.Lk)("span",null,(0,c.v_)(e.currentUser.email),1)]),(0,a.Lk)("div",et,[(0,a.bo)((0,a.Lk)("textarea",{name:"reviewText",id:"writeContent","onUpdate:modelValue":t[0]||(t[0]=e=>o.writeContent=e),required:""},null,512),[[s.Jo,o.writeContent]])]),t[2]||(t[2]=(0,a.Lk)("button",{type:"submit"},"저장",-1))],32)])}var nt={name:"ReviewCont",props:["restaurantName"],computed:{...(0,L.L8)(["isAuthenticated","currentUser"])},data(){return{item:[],writeContent:""}},mounted(){console.log("this.restaurantName",this.restaurantName)},methods:{async handleSubmit(){if(this.writeContent)try{const e=(0,I.rJ)(O,`restaurants/${this.restaurantName}/reviews`);await(0,I.gS)(e,{userInfo:this.currentUser.email,comment:this.writeContent,timestamp:(0,I.O5)()}),alert("리뷰가 정상적으로 등록되었습니다."),this.$emit("writeMode",!1)}catch(e){console.error("리뷰 저장 실패:",e),alert("리뷰 저장에 실패하였습니다.")}}}};const st=(0,f.A)(nt,[["render",tt]]);var at=st,rt={name:"ReviewCont",props:["restaurant"],computed:{...(0,L.L8)(["isAuthenticated","currentUser"])},components:{ReviewWrite:at},data(){return{reviews:[],reviewCount:0,showReviewWrite:!1}},mounted(){this.fetchReviews()},methods:{updateReview(e){this.showReviewWrite=e},fetchReviews(){const e=(0,I.rJ)(O,`restaurants/${this.restaurant}/reviews`);(0,I.aQ)(e,(e=>{this.reviews=e.docs.map((e=>({id:e.id,...e.data()}))),this.reviewCount=e.size}))},modeChange(){this.currentUser?this.showReviewWrite=!this.showReviewWrite:alert("로그인을 해주세요.")}}};const ot=(0,f.A)(rt,[["render",Ve]]);var lt=ot,it={name:"RestaurantListPage",props:{},components:{DetailModal:je,ReviewCont:lt},data(){return{totalResultArr:[],resultArr:[],resultLength:0,sigunNMArr:[],resultFlag:!1,showModal:!1,clickItem:null,menuExpand:!1,selectedIndex:null}},mounted(){this.getTotalData()},methods:{search(){const e=document.getElementById("searchInput").value;null!=e&&""!=e&&this.getSearchData(e)},getSearchData(e){const t=this.totalResultArr.filter((t=>t.bizcondNM.includes(e)||t.mainMenuNM.includes(e)||t.biszestblNM.includes(e)||t.refineRoadnmAddr.includes(e)||t.telNo.includes(e)));t.length<1?this.resultFlag=!1:this.resultFlag=!0,this.resultArr=t,this.resultLength=t.length},getTotalData(){_e.A.get("https://openapi.gg.go.kr/ParagonRestaurant?KEY=c526a4e53c9d41e6956418615a2f9939&plndex=1&pSize=1000").then((e=>{const t=e.data;let n=this.parseXML(t);n=n.sort(((e,t)=>e.sigunNM.localeCompare(t.sigunNM))),this.totalResultArr=n,this.getData()})).catch((e=>{console.error("Error fetching data:",e)}))},getData(e,t){this.totalResultArr!=[]&&(this.resultFlag=!0,this.resultArr=this.totalResultArr,this.resultLength=this.totalResultArr.length,e&&(this.selectedIndex=t,this.resultArr=[],this.sigunNMArr.forEach((t=>{t==e&&this.resultArr.push(this.totalResultArr.filter((t=>t.sigunNM==e)))})),this.resultArr=this.resultArr[0],this.resultLength=this.resultArr.length))},getSigunList(){if(this.menuExpand=!this.menuExpand,this.menuExpand){const e=[...new Set(this.totalResultArr.map((e=>e.sigunNM)))];this.sigunNMArr=e}else this.sigunNMArr=[]},parseXML(e){const t=new DOMParser,n=t.parseFromString(e,"text/xml"),s=n.getElementsByTagName("row"),a=[];for(let r=0;r<s.length;r++){const e=s[r],t=e.getElementsByTagName("SUM_YY")[0].textContent,n=e.getElementsByTagName("SIGUN_CD")[0].textContent,o=e.getElementsByTagName("SIGUN_NM")[0].textContent,l=e.getElementsByTagName("BIZESTBL_NM")[0].textContent,i=e.getElementsByTagName("BIZCOND_NM")[0].textContent,c=e.getElementsByTagName("TELNO")[0].textContent,u=e.getElementsByTagName("MAIN_MENU_NM")[0].textContent,d=e.getElementsByTagName("REFINE_ROADNM_ADDR")[0].textContent;a.push({sumYY:t,sigunCode:n,sigunNM:o,biszestblNM:l,bizcondNM:i,telNo:c,mainMenuNM:u,refineRoadnmAddr:d})}return a},openModal(e){this.showModal=!0,this.clickItem=e},closeModal(){this.showModal=!1}}};const ct=(0,f.A)(it,[["render",Ae]]);var ut=ct;const dt={class:"pageCont"};function gt(e,t,n,s,r,o){return(0,a.uX)(),(0,a.CE)("div",dt,t[0]||(t[0]=[(0,a.Lk)("h1",null,"지도 페이지",-1)]))}var pt={name:"LocationPage",props:{}};const mt=(0,f.A)(pt,[["render",gt]]);var ht=mt;const vt={class:"login-container"},kt={class:"cont"},Lt={class:"input-wrap"},wt={class:"btn-wrap"},ft={class:"darkColor"};function bt(e,t,n,r,o,l){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",vt,[(0,a.Lk)("div",kt,[t[6]||(t[6]=(0,a.Lk)("h2",{class:"title"},"로그인",-1)),(0,a.Lk)("div",Lt,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),placeholder:"email"},null,512),[[s.Jo,o.email]]),t[3]||(t[3]=(0,a.Lk)("br",null,null,-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),placeholder:"password"},null,512),[[s.Jo,o.password]]),t[4]||(t[4]=(0,a.Lk)("br",null,null,-1))]),(0,a.Lk)("div",wt,[(0,a.Lk)("button",{onClick:t[2]||(t[2]=e=>l.login())},"로그인"),(0,a.Lk)("button",ft,[(0,a.bF)(i,{to:"/SignUp"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("회원가입")]))),_:1})])])])])}var Ct={name:"LoginPage",data(){return{email:"",password:""}},methods:{login(){console.log("Email : "+this.email),console.log("Password : "+this.password),""!=this.email?""!=this.password?B(this.email,this.password).then((e=>{this.$store.commit("setUser",e.user),console.log("User logged in:",e.user),this.$router.replace("/"),console.log("로그인"),console.log(e),alert("로그인 완료되었습니다.\r\n"+e.user.email)})).catch((e=>{switch(e.code){case"auth/invalid-email":alert("잘못된 이메일 형식입니다");break;case"auth/wrong-password":alert("비밀번호가 틀립니다.");break;case"auth/user-not-found":alert("등록되지 않은 이메일입니다.");break;case"auth/invalid-credential":alert("등록되지 않은 이메일 이거나 비밀번호가 틀립니다.");break;default:console.log(e);break}})):alert("패스워드를 입력해주세요."):alert("이메일을 입력해주세요.")},...(0,L.i0)(["fetchUser"])}};const yt=(0,f.A)(Ct,[["render",bt]]);var Nt=yt;const Et={class:"login-container sign-up"},Mt={class:"cont"},At={class:"input-wrap"},_t={class:"btn-wrap"};function Rt(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",Et,[(0,a.Lk)("div",Mt,[t[5]||(t[5]=(0,a.Lk)("h2",{class:"title"},"회원가입",-1)),(0,a.Lk)("div",At,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),placeholder:"email"},null,512),[[s.Jo,o.email]]),t[3]||(t[3]=(0,a.Lk)("br",null,null,-1)),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),placeholder:"password"},null,512),[[s.Jo,o.password]]),t[4]||(t[4]=(0,a.Lk)("br",null,null,-1))]),(0,a.Lk)("div",_t,[(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>l.signUp&&l.signUp(...e))},"가입하기")])])])}var xt={name:"SignUpPage",data(){return{email:"",password:""}},methods:{signUp(){console.log("Email : "+this.email),console.log("Password : "+this.password),""!=this.email?""!=this.password?W(this.email,this.password).then((e=>{this.$router.replace("/"),alert("회원가입 완료되었습니다.\r\n"+e.user.email)})).catch((e=>{switch(e.code){case"auth/invalid-email":alert("잘못된 이메일 형식입니다.");break;case"auth/email-already-in-use":alert("이미 사용중인 이메일입니다.");break;default:console.log(e);break}})):alert("패스워드를 입력해주세요."):alert("이메일을 입력해주세요.")}}};const St=(0,f.A)(xt,[["render",Rt]]);var Ut=St;const It=[{path:"/",name:"Main",component:$},{path:"/RestaurantList",name:"RestaurantList",component:ut},{path:"/Location",name:"Location",component:ht},{path:"/Login",name:"Login",component:Nt},{path:"/SignUp",name:"SignUp",component:Ut},{path:"/Detail",name:"Detail",component:je},{path:"/Review",name:"Review",component:lt},{path:"/ReviewWrite",name:"ReviewWrite",component:at}],Xt=(0,S.aE)({history:(0,S.LA)(),routes:It});Xt.beforeEach(((e,t,n)=>{const s=!!j.state.user;e.meta.requiresAuth&&!s?n({name:"Login"}):n()}));var Ft=Xt;const Dt=(0,s.Ef)(x);Dt.use(Ft),j.dispatch("fetchUser").then((()=>{Dt.use(j).mount("#app")}))}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,r){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],r=e[u][2];for(var l=!0,i=0;i<s.length;i++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[i])}))?s.splice(i--,1):(l=!1,r<o&&(o=r));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[s,a,r]}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/gyeongi_gourmet_page/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,r,o=s[0],l=s[1],i=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(i)var u=i(n)}for(t&&t(s);c<o.length;c++)r=o[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},s=self["webpackChunkgyeongi_gourmet_web"]=self["webpackChunkgyeongi_gourmet_web"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(2010)}));s=n.O(s)})();
//# sourceMappingURL=app.9f8a0543.js.map