(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(9),c=t.n(l),o=(t(17),t(6)),i=t(7),s=t(10),m=t(2),d=t(4),h=t(3),u=t(5),p=t(1),y=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("view-container"),a=document.querySelector("nav ul"),t=document.querySelectorAll("nav button");a.addEventListener("click",function(a){var r=a.target.closest("button");switch(e.classList.forEach(function(a){a.endsWith("--active")&&e.classList.remove(a)}),r.className){case"nav--players":e.classList.add("view__1--active");break;case"nav--score":e.classList.add("view__2--active");break;case"nav--round":e.classList.add("view__3--active");break;case"nav--agenda":e.classList.add("view__4--active");break;case"nav--rules":e.classList.add("view__5--active");break;case"nav--settings":e.classList.add("view__6--active")}t.forEach(function(e){e.classList.remove("active")}),r.classList.add("active")})}},{key:"render",value:function(){return n.a.createElement("nav",{id:"nav"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"nav--players"},n.a.createElement("div",{className:"nav__label"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z"})),n.a.createElement("p",null,"Players")))),n.a.createElement("li",null,n.a.createElement("button",{className:"nav--score"},n.a.createElement("div",{className:"nav__label"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M20.2,4H20H17V2H7V4H4.5H3.8H2V11C2,12 3,13 4,13H7.2C7.6,14.9 8.6,16.6 11,16.9V19C8,19.2 8,20.3 8,21.6V22H16V21.7C16,20.4 16,19.3 13,19.1V17C15.5,16.7 16.5,15 16.8,13.1H20C21,13.1 22,12.1 22,11.1V4H20.2M4,11V6H7V8V11C5.6,11 4.4,11 4,11M20,11C19.6,11 18.4,11 17,11V6H18H20V11Z"})),n.a.createElement("p",null,"Score")))),n.a.createElement("li",null,n.a.createElement("button",{className:"nav--round"},n.a.createElement("div",{className:"nav__label"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59"})),n.a.createElement("p",null,"Round")))),n.a.createElement("li",null,n.a.createElement("button",{className:"nav--agenda"},n.a.createElement("div",{className:"nav__label"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M18,13H17.32L15.32,15H17.23L19,17H5L6.78,15H8.83L6.83,13H6L3,16V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V16L18,13M17,7.95L12.05,12.9L8.5,9.36L13.46,4.41L17,7.95M12.76,2.29L6.39,8.66C6,9.05 6,9.68 6.39,10.07L11.34,15C11.73,15.41 12.36,15.41 12.75,15L19.11,8.66C19.5,8.27 19.5,7.64 19.11,7.25L14.16,2.3C13.78,1.9 13.15,1.9 12.76,2.29Z"})),n.a.createElement("p",null,"Agenda")))),n.a.createElement("li",null,n.a.createElement("button",{className:"nav--rules"},n.a.createElement("div",{className:"nav__label"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M21,5C19.89,4.65 18.67,4.5 17.5,4.5C15.55,4.5 13.45,4.9 12,6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M21,18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V8C13.35,7.15 15.8,6.5 17.5,6.5C18.7,6.5 19.9,6.65 21,7V18.5Z"})),n.a.createElement("p",null,"Rules")))),n.a.createElement("li",null,n.a.createElement("button",{className:"nav--settings"},n.a.createElement("div",{className:"nav__label"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"})),n.a.createElement("p",null,"Settings"))))))}}]),a}(r.Component),v=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Rules reference to go here."))}}]),a}(r.Component),f=function(e){var a=e.race.replace(/\s+/g,"").toLowerCase();return n.a.createElement("div",{className:"player player--".concat(e.color)},n.a.createElement("div",{className:"player__image"},n.a.createElement("img",{src:"/images/races-thumb/"+a+".jpg",alt:e.race})),n.a.createElement("div",{className:"player__content"},n.a.createElement("div",{className:"player__info"},n.a.createElement("h2",null,e.name),n.a.createElement("p",null,e.race)),n.a.createElement("button",{className:"button-md neutral-dark-button",onClick:function(){return e.removePlayer(e.id)}},"Delete")))},g=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"players"},n.a.createElement("div",{className:"players__list flex-row"},this.props.players.map(function(a,t){return n.a.createElement(f,{key:a.id,id:a.id,name:a.name,race:a.race,color:a.color,score:a.score,index:t,removePlayer:e.props.removePlayer})})),n.a.createElement("button",{className:"button-lg primary-button",onClick:function(){return e.props.handleModal("create-player",!0)}},"Add player"))}}]),a}(r.Component),E=function(e){var a=e.name.replace(/\s+/g,"").toLowerCase();return n.a.createElement("div",{className:"form__field-option"},n.a.createElement("input",{type:"radio",id:"create-player-race-"+e.id,name:"create-player-race",value:e.name,datarace:e.id,disabled:e.pickedRace}),n.a.createElement("label",{htmlFor:"create-player-race-"+e.id},n.a.createElement("img",{src:"/images/races-thumb/"+a+".jpg",alt:e.name})))},w=function(e){function a(){var e,t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={createPlayerRace:"",createPlayerColor:"",createPlayerName:""},t.handleRaceChange=function(e){t.setState({createPlayerRace:e.target.getAttribute("datarace")})},t.handleColorChange=function(e){t.setState({createPlayerColor:e.target.getAttribute("datacolor")})},t.handleNameChange=function(e){t.setState({createPlayerName:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.addPlayer(t.props.races[t.state.createPlayerRace].name,t.state.createPlayerRace,t.props.colors[t.state.createPlayerColor].name,t.state.createPlayerColor,t.state.createPlayerName),t.props.pickedRace(t.state.createPlayerRace,!0),t.props.pickedColor(t.state.createPlayerColor,!0),e.target.reset(),t.setState({createPlayerName:""})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"create-player__thumbnails form__field-group"},n.a.createElement("div",{className:"create-player__race form__field",onChange:this.handleRaceChange},n.a.createElement("div",{className:"grid-row"},this.props.races.map(function(e,a){return n.a.createElement(E,{key:a,id:e.id,name:e.name,pickedRace:e.picked})}))),n.a.createElement("div",{className:"create-player__color form__field",onChange:this.handleColorChange},n.a.createElement("div",{className:"grid-row"},this.props.colors.map(function(e,a){return n.a.createElement("div",{className:"form__field-option"},n.a.createElement("input",{type:"radio",id:"create-player-color-"+e.name,name:"create-player-color",value:e.name,datacolor:e.id,disabled:e.picked}),n.a.createElement("label",{htmlFor:"create-player-color-"+e.name},n.a.createElement("svg",{viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{"clip-path":"url(#clip0)"},n.a.createElement("path",{d:"M90.665 35.387c0-4.35 2.948-7.815 2.566-8.189-.381-.374-3.087.442-5.064.068-1.942-.374-11.239-3.704-13.424-3.466-2.186.238-2.498 1.19-4.51 1.563-2.046.374-5.273-.442-7.25 0-1.942.442-1.595 1.19-3.087 1.563-1.492.374-1.734 0-3.226 0s-3.677.68-3.677.68v-1.088c0-.645.208-1.257.555-1.767l1.353-2.922c.173-.272.277-.544.277-.883v-3.534a.616.616 0 0 0-.624-.612h-.971a.616.616 0 0 0-.625.612v2.752c0 .612-.52 1.121-1.144 1.121H47.72c-.624 0-1.144-.51-1.144-1.12v-2.753a.616.616 0 0 0-.625-.612h-.971a.616.616 0 0 0-.624.612v3.466c0 .305.104.611.277.883l1.353 2.922c.347.51.555 1.156.555 1.768v42.68h-.45c-.66 0-1.215.509-1.215 1.189v3.907l-.59-.51c-.381-.305-.936-.271-1.214.136l-3.642 4.792h-1.943c-.485-.238-1.075-.374-1.734-.374-1.353 0-2.463.578-2.74 1.36a3.86 3.86 0 0 0-.902-.103c-1.527 0-2.775.748-2.775 1.7v.101a3.854 3.854 0 0 0-.902-.102c-3.47 0-3.33 2.956-3.33 2.956v.544s-.104 2.719-2.429 4.927l-.069.068-.035.034a3.28 3.28 0 0 0-.97 2.345c0 1.903 6.729 8.665 28.131 8.665 21.403 0 28.133-6.762 28.133-8.665 0-.918-.347-1.733-.972-2.345l-.034-.034-.07-.068c-2.359-2.208-2.428-4.927-2.428-4.927v-.544s.173-2.956-3.33-2.956c-.312 0-.624.034-.902.102v-.102c0-.951-1.249-1.699-2.775-1.699a3.86 3.86 0 0 0-.902.102c-.277-.781-1.387-1.36-2.74-1.36-.66 0-1.249.137-1.735.375h-1.942l-3.608-4.825c-.277-.374-.867-.442-1.214-.136l-.59.51v-3.909c0-.645-.52-1.189-1.214-1.189h-.45V56.32s7.076-5.097 9.92-5.097c2.845 0 6.313 3.772 9.574 3.772 3.226 0 4.232-2.888 8.88-2.888 4.683 0 11.517 6.626 12.21 6.626.694 0 .694-2.14 1.804-3.534 1.145-1.427 3.018-2.073 3.018-2.073.035-1.325-7.7-9.548-7.7-17.738z",fill:"#000"})),n.a.createElement("defs",null,n.a.createElement("clipPath",{id:"clip0"},n.a.createElement("path",{fill:"#fff",transform:"translate(21.6 16.8)",d:"M0 0h76.8v84H0z"})))),n.a.createElement("span",null,e.name)))})))),n.a.createElement("div",{className:"create-player__fields form__field-group"},n.a.createElement("div",{className:"create-player__name form__field"},n.a.createElement("input",{id:"create-player-name",type:"text",placeholder:"Enter player name",value:this.state.createPlayerName,onChange:this.handleNameChange})),n.a.createElement("div",{className:"form__field"},n.a.createElement("button",{type:"submit",className:"primary-button button-lg"},"Create player"))))}}]),a}(r.Component),b=function(e){var a=e.index;return n.a.createElement("div",{className:"card player__card player--".concat(e.color)},n.a.createElement("div",{className:"player__image"}),n.a.createElement("div",{className:"player__info"},n.a.createElement("h2",null,e.name),n.a.createElement("p",null,e.race),n.a.createElement("div",{className:"player__score-controls"},n.a.createElement("button",{className:"button-md neutral-dark-button",onClick:function(){return e.changeScore(a,-1)}},"-"),n.a.createElement("p",{className:"player__score"},e.score),n.a.createElement("button",{className:"button-md neutral-dark-button",onClick:function(){return e.changeScore(a,1)}},"+"))))},k=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"score"},n.a.createElement("div",{className:"score__player-list"},this.props.players.map(function(a,t){return n.a.createElement(b,{key:a.id,id:a.id,name:a.name,race:a.race,color:a.color,score:a.score,index:t,changeScore:e.props.changeScore})})))}}]),a}(r.Component),C=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"round"},n.a.createElement("div",{className:"strategies"},this.props.strategies.map(function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("h2",null,e.name))})))}}]),a}(r.Component),_=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Agenda helper to go here."))}}]),a}(r.Component),N=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("label",null,"Theme"),n.a.createElement("select",null,n.a.createElement("option",null,"Nebula (Default)"),n.a.createElement("option",null,"Minimal Dark"),n.a.createElement("option",null,"Minimal Light")))}}]),a}(r.Component),L=function(){return Math.random().toString(16).slice(-6)};new function e(a,t,r){Object(p.a)(this,e),this.id=L(),this.name=a,this.race=t,this.color=r}("The Embers of Muaat","tbd","tbd");var j=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(d.a)(this,Object(h.a)(a).call(this,e))).handleAddPlayer=function(e,a,r,n,l){t.setState({players:[].concat(Object(s.a)(t.state.players),[{id:L(),key:L(),name:l,race:e,raceId:a,color:r,colorId:n,score:0}])})},t.handleRemovePlayer=function(e){var a=t.state.players.find(function(a){return a.id===e}).colorId,r=t.state.players.find(function(a){return a.id===e}).raceId;t.setState(function(t){return Object(i.a)({},t.colors[a].picked=!1,t.races[r].picked=!1,{players:t.players.filter(function(a){return a.id!==e})})})},t.handleScoreChange=function(e,a){t.setState(function(t){return{score:t.players[e].score+=a}})},t.handlePickedRace=function(e,a){t.setState(function(t){return Object(i.a)({},t.races[e].picked=a)})},t.handlePickedColor=function(e,a){t.setState(function(t){return Object(i.a)({},t.colors[e].picked=a)})},t.handleShowModal=function(e,a){console.log(e,a);var t=document.querySelector(".modal-container"),r=document.querySelector(".modal__"+e),n=document.querySelectorAll(".modal");!0===a?(t.classList.add("modal--show"),r.classList.add("modal--show")):(t.classList.remove("modal--show"),n.forEach(function(e){e.classList.remove("modal--show")}))},t.state={players:[{id:L(),key:L(),name:"Aaron",race:"The Embers of Muaat",raceId:"3",color:"yellow",colorId:"5",score:0},{id:L(),key:L(),name:"Adam",race:"The Emirates of Hacan",raceId:"4",color:"red",colorId:"4",score:0},{id:L(),key:L(),name:"Jordan",race:"The Yssaril Tribes",raceId:"16",color:"blue",colorId:"1",score:0}],strategies:[{id:1,name:"Leadership",primary:"<li>Gain 3 command tokens.</li><li>Spend any amount of influence to gain 1 command token for every 3 influence spent.</li>",secondary:"<li>Spend any amount of influence to gain 1 command token for every 3 influence spent.</li>",tip:"A player might choose this card to gain more command tokens, enabling him to perform more actions during the action phase."},{id:2,name:"Diplomacy",primary:"<li>Choose 1 system other than the Mecatol Rex system that contains a plant you control; Each other player places a command token from his reinforcements in the chosen system. Then ready each exhausted planet you control in that system.</li>",secondary:"<li>Spend 1 token from your strategy pool to ready up to 2 exhausted planets.</li>",tip:"A player might choose this card if he feels threatened, to prevent other players from attacking his system."},{id:3,name:"Politics",primary:"<li>Choose a player other than the speaker. That player gains the speaker token.</li><li>Draw 2 action cards.</li><li>Look at the top 2 cards of the agenda deck. Place each card on the top or bottom of the deck in any order.</li>",secondary:"<li>Spend 1 token from your strategy pool to draw 2 action cards.</li>",tip:"A player might choose this card to draw action cards, increasing the variety of abilities that are available to him."},{id:4,name:"Construction",primary:"<li>Place 1 PDS or 1 space dock on a planet you control.</li><li>Place 1 PDS on a planet you control.</li>",secondary:"<li>Place 1 token from your strategy pool in any system; you may palce either 1 space dock or 1 PDS on a planet you control in that system.</li>",tip:"A player might choose this card to produce planetary structures, such as space docks, and PDF units."},{id:5,name:"Trade",primary:"<li>Gain 3 trade goods.</li><li>Replenish commodities.</li><li>Choose any number of other players. Those players use the secondary ability.</li>",secondary:"<li>Spend 1 token from your strategy pool to replenish commodities.</li>",tip:"A player might choose this card to gain trade goods and commodities, which he could use to produce additional units or trade to other players."},{id:6,name:"Warfare",primary:"<li>Remove 1 of your command tokens from the game board; then, gain 1 command token.</li><li>Redistribute any number of the command tokens on your command sheet.</li>",secondary:"<li>Spend 1 token from your strategy pool to use the PRODUCTION ability of 1 of your space docks in your home system.</li>",tip:"A player might choose this card to allow some of his ships to move twive, or to build a unit and move it during the same game round."},{id:7,name:"Technology",primary:"<li>Research 1 technology.</li><li>Spend 6 resources to research 1 technology.</li>",secondary:"<li>Spend 1 token from your strategy pool and 4 resources to research 1 technology.</li>",tip:"A player might choose this card to research a new technolgoy that would grant him a new ability or unit upgrade."},{id:8,name:"Imperial",primary:"<li>Immediately score 1 public objective if you fulfill its requirements.</li><li>Gain 1 victory card if you control Mecatol Rex; otherwise, draw 1 secret objective.</li>",secondary:"<li>Spend 1 token from your strategy pool to draw 1 secret objective.</li>",tip:"A player might choose this card to draw an additional secret objective, granting him additional routes to victory."}],races:[{id:0,name:"The Arborec",picked:!1},{id:1,name:"The Barony of Letnev",picked:!1},{id:2,name:"The Clan of Saar",picked:!1},{id:3,name:"The Embers of Muaat",picked:!0},{id:4,name:"The Emirates of Hacan",picked:!0},{id:5,name:"The Federation of Sol",picked:!1},{id:6,name:"The Ghosts of Creuss",picked:!1},{id:7,name:"The L1Z1X Mindnet",picked:!1},{id:8,name:"The Mentak Coalition",picked:!1},{id:9,name:"The Naalu Collective",picked:!1},{id:10,name:"The Nekro Virus",picked:!1},{id:11,name:"The Sardakk N'orr",picked:!1},{id:12,name:"The Universities of Jol-nar",picked:!1},{id:13,name:"The Winnu",picked:!1},{id:14,name:"The Xxcha Kingdom",picked:!1},{id:15,name:"The Yin Brotherhood",picked:!1},{id:16,name:"The Yssaril Tribes",picked:!0}],colors:[{id:0,name:"black",picked:!1},{id:1,name:"blue",picked:!0},{id:2,name:"green",picked:!1},{id:3,name:"purple",picked:!1},{id:4,name:"red",picked:!0},{id:5,name:"yellow",picked:!0}]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app"},n.a.createElement(y,null),n.a.createElement("div",{id:"view-container",className:"view-container"},n.a.createElement("div",{className:"view view__players"},n.a.createElement("h1",null,"Players"),n.a.createElement(g,{players:this.state.players,races:this.state.races,pickedRace:this.handlePickedRace,colors:this.state.colors,pickedColor:this.handlePickedColor,changeScore:this.handleScoreChange,addPlayer:this.handleAddPlayer,removePlayer:this.handleRemovePlayer,handleModal:this.handleShowModal})),n.a.createElement("div",{className:"view view__score"},n.a.createElement("h1",null,"Score"),n.a.createElement(k,{players:this.state.players,changeScore:this.handleScoreChange})),n.a.createElement("div",{className:"view view__game"},n.a.createElement("h1",null,"Round"),n.a.createElement(C,{players:this.state.players,strategies:this.state.strategies})),n.a.createElement("div",{className:"view view__agenda"},n.a.createElement("h1",null,"Agenda"),n.a.createElement(_,null)),n.a.createElement("div",{className:"view view__rules"},n.a.createElement("h1",null,"Rules"),n.a.createElement(v,null)),n.a.createElement("div",{className:"view view__settings"},n.a.createElement("h1",null,"Settings"),n.a.createElement(N,null))),n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal modal__create-player players__create-player card"},n.a.createElement("button",{className:"modal__close-btn",onClick:function(){return e.handleShowModal("create-player",!1)}},n.a.createElement("svg",{xlinkHref:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),n.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),n.a.createElement("h2",null,"Create player"),n.a.createElement(w,Object(o.a)({addPlayer:this.state.addPlayer,races:this.state.races,pickedRace:this.handlePickedRace,colors:this.state.colors,pickedColor:this.handlePickedColor},"addPlayer",this.handleAddPlayer)))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.776fae04.chunk.js.map