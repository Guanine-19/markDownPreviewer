(this.webpackJsonpmarkdownpreviewer=this.webpackJsonpmarkdownpreviewer||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),i=t.n(o),s=(t(14),t(1)),c=t(2),l=t(3),d=t(5),u=t(4),h=(t(15),t(8)),m=t.n(h),f="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",p=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-sm-4 border mr-4 editor-back p-0"},r.a.createElement("div",{id:"editor-header"},r.a.createElement("h4",null,"Editor")),r.a.createElement("textarea",{id:"editor",class:"container",onChange:this.props.handleChange},f))}}]),t}(r.a.Component),b=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-sm-10 border text-wrap text-left editor-back p-0"},r.a.createElement("div",{id:"preview-header"},r.a.createElement("h4",null,"Markdown Preview")),r.a.createElement("p",{id:"preview",class:"p-2",dangerouslySetInnerHTML:{__html:m()(this.props.text)}}))}}]),t}(r.a.Component),v=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={input:f},a.handleOnChange=a.handleOnChange.bind(Object(s.a)(a)),a}return Object(l.a)(t,[{key:"handleOnChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{class:"container fluid d-flex m-0"},r.a.createElement(p,{handleChange:this.handleOnChange}),r.a.createElement(b,{text:this.state.input}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(16);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0c051c3b.chunk.js.map