(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"Phonebook_form__2WYsf",label:"Phonebook_label__1IzPQ",input:"Phonebook_input__2qZcR",button:"Phonebook_button__3v7Eb",wraper:"Phonebook_wraper__3gFwy"}},17:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(11),r=n.n(o),s=(n(17),n(3)),i=n(12),l=n(6),u=n(7),b=n(9),d=n(8),m=n(4),h=n.n(m),j=n(0),p=function(t){var e=t.contact,n=t.ondeleteContact;return Object(j.jsx)("ul",{className:h.a.phoneList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:h.a.ContactsList,children:[Object(j.jsxs)("p",{className:h.a.name,children:[a,":"]}),Object(j.jsx)("p",{className:h.a.number,children:c}),Object(j.jsx)("button",{onClick:function(){return n(e)},className:h.a.button,type:"button",children:"Del"})]},e)}))})},f=n(5),C=n(1),O=n.n(C),_={name:"",number:""},x=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state=Object(s.a)({},_),t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.setState(Object(s.a)({},_))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.onHandleSubmit,className:O.a.form,children:[Object(j.jsxs)("label",{className:O.a.label,children:["Name",Object(j.jsx)("input",{className:O.a.input,type:"text",value:e,onChange:this.onHandleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:O.a.label,children:["Number",Object(j.jsx)("input",{className:O.a.input,type:"tel",name:"number",value:n,onChange:this.onHandleChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(22),g=function(t){var e=t.filter,n=t.onFilterHandleChange;return Object(j.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:O.a.input,type:"text",value:e,onChange:function(t){n(t.target.value)},name:"filter"})]})},N=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("This contact is already exist!! Try one more time, please!"):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[Object(s.a)(Object(s.a)({},e),{},{id:Object(v.a)()})])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterHandleChange=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"getFilteredContacts",value:function(){var t=this;return this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))}},{key:"render",value:function(){var t=this.getFilteredContacts(),e=this.state.filter;return Object(j.jsxs)("div",{className:O.a.wraper,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(x,{addContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(g,{filter:e,onFilterHandleChange:this.onFilterHandleChange}),Object(j.jsx)(p,{contact:t,ondeleteContact:this.deleteContact})]})}}]),n}(a.Component),y=function(){return Object(j.jsx)(N,{})};n(19);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={phoneList:"ContactList_phoneList__38DOC",ContactsList:"ContactList_ContactsList__3-wQV",button:"ContactList_button__20RXL",name:"ContactList_name__2tNNl",number:"ContactList_number__2wlEo"}}},[[20,1,2]]]);
//# sourceMappingURL=main.a95042fc.chunk.js.map