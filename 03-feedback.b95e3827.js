function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(S,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=v();if(j(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function T(e){return f=void 0,g&&r?y(e):(r=o=void 0,a)}function h(){var e=v(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:T(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};let y={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&e.email&&(x.email.value=e.email,y.email=e.email);e&&e.message&&(x.textarea.value=e.message,y.message=e.message)}();const x={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};x.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===x.email.value||""===x.textarea.value)return alert("Completion of fields is required!");console.log(y),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),y={}})),x.form.addEventListener("input",e(t)((function(e){const t=e.target.value,n=e.target.name;y[n]=t,j()}),500));const j=e(t)((function(){localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500);
//# sourceMappingURL=03-feedback.b95e3827.js.map
