module.exports=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}({0:function(e,t,i){e.exports=i(73)},73:function(e,t,i){"use strict";var n=i(74);e.exports=function(e){quasar.current.layout.vm.$data.title="Infinite Scroll",e({template:n,data:{items:[{},{},{},{},{}]},methods:{refresher:function(e,t){setTimeout(function(){for(var e=[],i=0;7>i;i++)e.push({});this.items=this.items.concat(e),t()}.bind(this),1500)}}})}},74:function(e,t){e.exports='<h5>Scroll down to see it in action.</h5>\n\n<br>\n<infinite-scroll :handler="refresher">\n  <p v-for="item in items" class="caption">\n    <span class="badge bg-secondary text-white shadow-1">\n      {{ $index + 1 }}\n    </span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n  </p>\n\n  <spinner name="dots" slot="message" :size="40"></spinner>\n</infinite-scroll>\n'}});