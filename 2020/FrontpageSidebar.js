// https://www.redditstatic.com/desktop2x/FrontpageSidebar.28795b77af26a24962dd.js
// Retrieved at 10/19/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/_arrayShuffle.js": function(o, s, e) {
			var d = e("./node_modules/lodash/_copyArray.js"),
				n = e("./node_modules/lodash/_shuffleSelf.js");
			o.exports = function(o) {
				return n(d(o))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(o, s, e) {
			var d = e("./node_modules/lodash/_shuffleSelf.js"),
				n = e("./node_modules/lodash/values.js");
			o.exports = function(o) {
				return d(n(o))
			}
		},
		"./node_modules/lodash/first.js": function(o, s, e) {
			o.exports = e("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(o, s) {
			o.exports = function(o) {
				return o && o.length ? o[0] : void 0
			}
		},
		"./node_modules/lodash/shuffle.js": function(o, s, e) {
			var d = e("./node_modules/lodash/_arrayShuffle.js"),
				n = e("./node_modules/lodash/_baseShuffle.js"),
				l = e("./node_modules/lodash/isArray.js");
			o.exports = function(o) {
				return (l(o) ? d : n)(o)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.28795b77af26a24962dd.js.map