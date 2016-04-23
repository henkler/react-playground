!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(2)},function(e,t){e.exports=React},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),i=r(o),a=n(11),u=r(a),s=n(6),l=r(s);n(10),u["default"].render(i["default"].createElement(l["default"],null),document.getElementById("container"))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(4),f=r(c),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"_computeCellSize",value:function(){var e=Math.floor(this.props.pixelWidth/this.props.width);return 1>e&&(e=1),e}},{key:"_computeTrueWidth",value:function(){return this.props.width*this._computeCellSize()+10}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.height;t++){for(var n=[],r=0;r<this.props.width;r++)n.push(l["default"].createElement(f["default"],{key:"x"+r,xPos:r,yPos:t,size:this._computeCellSize(),isAlive:this.props.board[r][t],onCellClick:this.props.onCellClick}));e.push(l["default"].createElement("div",{key:"y"+t,className:"row"},l["default"].createElement("div",{className:"col-xs-12"},n)))}return l["default"].createElement("div",{className:"board center-block",style:{width:this._computeTrueWidth()}},e)}}]),t}(l["default"].Component);d.propTypes={board:l["default"].PropTypes.array.isRequired,width:l["default"].PropTypes.number.isRequired,height:l["default"].PropTypes.number.isRequired,pixelWidth:l["default"].PropTypes.number.isRequired,onCellClick:l["default"].PropTypes.func.isRequired},t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),a=function(e){return i["default"].createElement("div",{className:e.isAlive?"cell-alive":"cell-dead",style:{height:e.size,width:e.size,"float":"left"},onClick:function(){e.onCellClick(e.xPos,e.yPos)}})};a.propTypes={xPos:i["default"].PropTypes.number.isRequired,yPos:i["default"].PropTypes.number.isRequired,size:i["default"].PropTypes.number.isRequired,isAlive:i["default"].PropTypes.bool.isRequired,onCellClick:i["default"].PropTypes.func.isRequired},t["default"]=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(3),f=r(c),d=40,p=40,h=[2,3],b=[3],v=500,y=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.state={board:n._getNewBoard(d,p),width:d,height:p,generation:0},n.handleCellClick=n.handleCellClick.bind(n),n._tick=n._tick.bind(n),n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.generation=0}},{key:"componentWillUnmount",value:function(){stop()}},{key:"handleCellClick",value:function(e,t){this.state.board[e][t]=!this.state.board[e][t],this.setState({board:this.state.board})}},{key:"start",value:function(){this.timer=setInterval(this._tick,v)}},{key:"stop",value:function(){clearInterval(this.timer)}},{key:"reset",value:function(){this.setState({board:this._getNewBoard(this.state.width,this.state.height),generation:0})}},{key:"clear",value:function(){for(var e=[],t=0;t<this.state.width;t++){e[t]=new Array(this.state.height);for(var n=0;n<this.state.height;n++)e[t][n]=!1}this.setState({board:e,generation:0})}},{key:"resize",value:function(e,t){1>e||1>t||this.setState({board:this._getNewBoard(e,t),width:e,height:t,generation:0})}},{key:"_getNewBoard",value:function(e,t){for(var n=[],r=0;e>r;r++){n[r]=new Array(t);for(var o=0;t>o;o++)n[r][o]=0!==Math.floor(2*Math.random())}return n}},{key:"_tick",value:function(){for(var e=[],t=0;t<this.state.width;t++){e[t]=new Array(this.state.height);for(var n=0;n<this.state.height;n++){var r=this.state.board[t][n];this._doesCellDie(t,n)&&(r=!1),this._isCellBorn(t,n)&&(r=!0),e[t][n]=r}}this.state.generation++,this.setState({board:e,generation:this.state.generation})}},{key:"_printBoard",value:function(){for(var e="",t=0;t<this.state.height;t++){for(var n=0;n<this.state.width;n++)e+=this.state.board[n][t]?"X":"_";e+="\n"}return e}},{key:"_getPosition",value:function(e,t){var n=this.state.width,r=this.state.height;return this.state.board[(e+n)%n][(t+r)%r]}},{key:"_getNeighborCount",value:function(e,t){for(var n=0,r=e-1;e+1>=r;r++)for(var o=t-1;t+1>=o;o++)r===e&&o===t||this._getPosition(r,o)&&n++;return n}},{key:"_doesCellDie",value:function(e,t){var n=this._getNeighborCount(e,t);return h.indexOf(n)<0}},{key:"_isCellBorn",value:function(e,t){var n=this._getNeighborCount(e,t);return b.indexOf(n)>=0}},{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(f["default"],{board:this.state.board,width:this.state.width,height:this.state.height,pixelWidth:this.props.width,onCellClick:this.handleCellClick}),l["default"].createElement("div",{className:"generation"},this.state.generation))}}]),t}(l["default"].Component);y.propTypes={width:l["default"].PropTypes.number.isRequired},t["default"]=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),l=r(s),c=n(5),f=r(c),d=800,p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this;return l["default"].createElement("div",{className:"container"},l["default"].createElement("div",{className:"jumbotron"},l["default"].createElement("h1",null,"Conway's Game of Life")),l["default"].createElement("div",{className:"row text-center"},l["default"].createElement("div",{className:"col-xs-12"},l["default"].createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return e.refs.game.start()}},"Run"),l["default"].createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.refs.game.stop()}},"Pause"),l["default"].createElement("button",{type:"button",className:"btn btn-info",onClick:function(){return e.refs.game.reset()}},"Reset"),l["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.refs.game.clear()}},"Clear"))),l["default"].createElement("div",{className:"row"},l["default"].createElement("div",{className:"col-xs-12"},l["default"].createElement(f["default"],{ref:"game",width:d}))),l["default"].createElement("div",{className:"row text-center"},l["default"].createElement("div",{className:"col-xs-12"},l["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.refs.game.resize(20,20)}},"20 x 20"),l["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.refs.game.resize(40,40)}},"40 x 40"),l["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.refs.game.resize(80,80)}},"80 x 80"),l["default"].createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.refs.game.resize(160,160)}},"160 x 160"))))}}]),t}(l["default"].Component);t["default"]=p},function(e,t,n){t=e.exports=n(8)(),t.push([e.id,".cell-alive{background-color:#000}.cell-dead{background-color:#fff}.board{border:5px solid #aaa;border-radius:5px}.generation{position:absolute;border:3px solid #aaa;border-radius:10px;text-align:center;line-height:60px;font-size:2.2em;min-width:60px;height:60px;left:0;top:0}.btn{margin:5px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],u=o[2],s=o[3],l={css:a,media:u,sourceMap:s};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=v(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var i=m++;n=y||(y=u(t)),r=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=p[u.id];s.refs--,i.push(s)}if(e){var l=o(e);r(l,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.id,r,""]]);n(9)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports=ReactDOM}]);
//# sourceMappingURL=bundle.js.map