(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),c=(a(24),a(1)),u=a(3),o=a(4),i=a(7),d=a(5),m=a(8),E=a(6),h=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).onRemove=function(e){var t=e.target.getAttribute("data-id");a.props.deleteUser(parseInt(t))},a.state={name:e.name?e.name:"",users:e.users?e.users:[],isLoading:!1,isLoaded:!1,sortedUsers:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(e.name!==this.props.name){var a=this.props.name;if(a.length>0){var n=this.state.users.filter(function(e){return 0===e.name.indexOf(a)});this.setState({sortedUsers:n,name:a})}else this.setState({sortedUsers:[]})}e.users!==this.props.users&&this.setState({users:this.props.users})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Name : \u2003",r.a.createElement("b",null,this.state.name?this.state.name:"NO NAME")),r.a.createElement("div",{className:"sorted"},r.a.createElement("p",null,r.a.createElement("b",null,"checker :")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null)),this.state.sortedUsers.length>0?this.state.sortedUsers.map(function(t,a){return r.a.createElement("tr",{key:a+1},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.gender),r.a.createElement("td",null,r.a.createElement("button",{className:"remove-user","data-id":t.id,onClick:e.onRemove},"Remove")))}):r.a.createElement("tr",null,r.a.createElement("td",null,"No data"),r.a.createElement("td",null,"No data"),r.a.createElement("td",null,"No data"),r.a.createElement("td",null))))),r.a.createElement("div",{className:"list"},r.a.createElement("p",null,r.a.createElement("b",null,"Users :")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Gender"),r.a.createElement("th",null)),this.state.users.length>0?this.state.users.map(function(t,a){return r.a.createElement("tr",{key:a+1},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.gender),r.a.createElement("td",null,r.a.createElement("button",{className:"remove-user","data-id":t.id,onClick:e.onRemove},"Remove")))}):r.a.createElement("tr",null,r.a.createElement("td",null,"No data"),r.a.createElement("td",null,"No data"),r.a.createElement("td",null,"No data"),r.a.createElement("td",null))))))}}]),t}(r.a.Component),g=Object(E.b)(function(e){return{users:e.user_details.users}},function(e){return{deleteUser:function(t){return e(function(e){return{type:"DELETE_USER",id:e}}(t))}}})(h),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).onChangeHandler=function(e){a.setState({user:e.target.value})},a.state={user:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"home"},r.a.createElement("p",null,"Search : "),r.a.createElement("div",{className:"user"},r.a.createElement("input",{type:"text",name:"user",onChange:this.onChangeHandler})),r.a.createElement(g,{name:this.state.user})))}}]),t}(r.a.Component),v=(a(29),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).onChangeHandler=function(e){a.setState({user:e.target.value})},a.toggleSearch=function(){a.setState(function(e){return{toggled:!e.toggled}})},a.toggleAddUser=function(){a.setState(function(e){return{AddUserToggle:!e.AddUserToggle}})},a.formSubmit=function(e){e.preventDefault();var t=a.state.formdata.username,n=a.state.formdata.gender;""!==t&&""!==n&&a.props.addUser(t,n)},a.inputChange=function(e){a.setState(Object(c.a)({},a.state,{formdata:Object(c.a)({},a.state.formdata,{username:e.target.value})}))},a.selectChange=function(e){a.setState(Object(c.a)({},a.state,{formdata:Object(c.a)({},a.state.formdata,{gender:e.target.value})}))},a.state={toggled:!0,AddUserToggle:!0,formdata:{username:"",gender:""},users:e.users?e.users:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("app",this.state.users),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container row"},r.a.createElement("div",{className:"row-child"},this.state.AddUserToggle&&r.a.createElement("div",{className:"user-form"},r.a.createElement("h3",null,"Add User"),r.a.createElement("form",{onSubmit:this.formSubmit},r.a.createElement("input",{type:"text",name:"username",onChange:this.inputChange,required:!0}),r.a.createElement("select",{required:!0,onChange:this.selectChange},r.a.createElement("option",{value:""},"None"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female")),r.a.createElement("button",null,"Add User")))),r.a.createElement("div",{className:"row-child"},this.state.toggled&&r.a.createElement(f,null)),r.a.createElement("div",{className:"top-btn"},r.a.createElement("button",{onClick:this.toggleAddUser},!0===this.state.AddUserToggle?"Hide":"Add user")),r.a.createElement("div",{className:"bottom-btn"},r.a.createElement("button",{onClick:this.toggleSearch},!0===this.state.toggled?"Hide Searching":"View Searching"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.users!==t.users?(console.log("derived"),{users:e.users}):null}}]),t}(r.a.Component)),b=Object(E.b)(function(e){return{users:e.user_details.users}},function(e){return{addUser:function(t,a){return e(function(e,t){return{type:"ADD_USER",name:e,gender:t}}(t,a))}}})(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(9),O={users:[],added_count:0,filters:{userChecked:!1,usersSorted:[]}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":var a={id:e.added_count+1,name:t.name,gender:t.gender};return Object(c.a)({},e,{added_count:e.added_count+1,users:e.users.concat([a])});case"CHECK_USER":for(var n=e.users,r=!1,l=0;l<n.length;l++)if(n[l].name===t.name){r=!0;break}return Object(c.a)({},e,{filters:Object(c.a)({},e.filters,{userChecked:r})});case"DELETE_USER":var s=e.users.filter(function(e){return e.id!==t.id});return Object(c.a)({},e,{users:s});default:return e}},N=Object(p.c)(Object(p.b)({user_details:j}));N.subscribe(function(){return console.log(N.getState())});s.a.render(r.a.createElement(function(){return r.a.createElement(E.a,{store:N},r.a.createElement(b,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.7731feaa.chunk.js.map