// https://www.redditstatic.com/desktop2x/FrontpageSidebar.c9dc80be6bd34e8eb668.js
// Retrieved at 9/14/2020, 2:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, o, s) {
			var d = s("./node_modules/lodash/_baseClamp.js"),
				l = s("./node_modules/lodash/_copyArray.js"),
				n = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, o) {
				return n(l(e), d(o, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, o, s) {
			var d = s("./node_modules/lodash/_baseClamp.js"),
				l = s("./node_modules/lodash/_shuffleSelf.js"),
				n = s("./node_modules/lodash/values.js");
			e.exports = function(e, o) {
				var s = n(e);
				return l(s, d(o, 0, s.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, o, s) {
			var d = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, o) {
				var s = -1,
					l = e.length,
					n = l - 1;
				for (o = void 0 === o ? l : o; ++s < o;) {
					var a = d(s, n),
						_ = e[a];
					e[a] = e[s], e[s] = _
				}
				return e.length = o, e
			}
		},
		"./node_modules/lodash/first.js": function(e, o, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, o) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, o, s) {
			var d = s("./node_modules/lodash/_arraySampleSize.js"),
				l = s("./node_modules/lodash/_baseSampleSize.js"),
				n = s("./node_modules/lodash/isArray.js"),
				a = s("./node_modules/lodash/_isIterateeCall.js"),
				_ = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, o, s) {
				return o = (s ? a(e, o, s) : void 0 === o) ? 1 : _(o), (n(e) ? d : l)(e, o)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.c9dc80be6bd34e8eb668.js.map