module.exports=function(e){function n(t){if(l[t])return l[t].exports;var i=l[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var l={};return n.m=e,n.c=l,n.p="",n(0)}({0:function(e,n,l){e.exports=l(141)},141:function(e,n,l){"use strict";var t=l(142);e.exports=function(e){quasar.current.layout.vm.$data.title="Toggle",e({template:t,data:{checked:!1}})}},142:function(e,n){e.exports='<div class="badge bg-secondary text-white">\n  Model <span class="right-detail"><em>{{checked}}</em></span>\n</div>\n\n<br><br>\n\n<h5>Standalone</h5>\n<label>\n  <toggle :model.sync="checked"></toggle>\n  Toggle Label\n</label>\n\n<br><br>\n\n<h5>Inside of a List</h5>\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Toggle Label</div>\n      <toggle :model.sync="checked"></toggle>\n    </div>\n  </label>\n  <label class="item">\n    <i>mail</i>\n    <div class="item-content">\n      <div class="item-label">Toggle Label</div>\n      <toggle :model.sync="checked"></toggle>\n    </div>\n  </label>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <label class="item">\n    <toggle :model.sync="checked"></toggle>\n    <div class="item-content">\n      Toggle Label\n    </div>\n  </label>\n  <label class="item">\n    <toggle :model.sync="checked"></toggle>\n    <div class="item-content">\n      Toggle Label\n    </div>\n  </label>\n</div>\n'}});