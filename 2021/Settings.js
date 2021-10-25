// https://www.redditstatic.com/desktop2x/Settings.c9217f64670f9dac256c.js
// Retrieved at 10/25/2021, 3:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var o = {
				single_source_shortest_paths: function(e, t, n) {
					var s = {},
						r = {};
					r[t] = 0;
					var a, i, l, c, d, u, m, p = o.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (l in i = (a = p.pop()).value, c = a.cost, d = e[i] || {}) d.hasOwnProperty(l) && (u = c + d[l], m = r[l], (void 0 === r[l] || m > u) && (r[l] = u, p.push(l, u), s[l] = i));
					if (void 0 !== n && void 0 === r[n]) {
						var b = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(b)
					}
					return s
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], o = t; o;) n.push(o), e[o], o = e[o];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var s = o.single_source_shortest_paths(e, t, n);
					return o.extract_shortest_path_from_predecessor_list(s, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = o.PriorityQueue,
							s = {};
						for (t in e = e || {}, n) n.hasOwnProperty(t) && (s[t] = n[t]);
						return s.queue = [], s.sorter = e.sorter || n.default_sorter, s
					},
					default_sorter: function(e, t) {
						return e.cost - t.cost
					},
					push: function(e, t) {
						var n = {
							value: e,
							cost: t
						};
						this.queue.push(n), this.queue.sort(this.sorter)
					},
					pop: function() {
						return this.queue.shift()
					},
					empty: function() {
						return 0 === this.queue.length
					}
				}
			};
			e.exports = o
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, s, r) {
				for (var a = -1, i = o(n((t - e) / (s || 1)), 0), l = Array(i); i--;) l[r ? i : ++a] = e, e += s;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && s(t, n, a) && (n = a = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), a = void 0 === a ? t < n ? 1 : -1 : r(a), o(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			e.exports = o
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./node_modules/moment/locale sync recursive ^\\.\\/.*$": function(e, t, n) {
			var o = {
				"./af": "./node_modules/moment/locale/af.js",
				"./af.js": "./node_modules/moment/locale/af.js",
				"./ar": "./node_modules/moment/locale/ar.js",
				"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
				"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
				"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
				"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
				"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
				"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
				"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
				"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
				"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
				"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
				"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
				"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
				"./ar.js": "./node_modules/moment/locale/ar.js",
				"./az": "./node_modules/moment/locale/az.js",
				"./az.js": "./node_modules/moment/locale/az.js",
				"./be": "./node_modules/moment/locale/be.js",
				"./be.js": "./node_modules/moment/locale/be.js",
				"./bg": "./node_modules/moment/locale/bg.js",
				"./bg.js": "./node_modules/moment/locale/bg.js",
				"./bm": "./node_modules/moment/locale/bm.js",
				"./bm.js": "./node_modules/moment/locale/bm.js",
				"./bn": "./node_modules/moment/locale/bn.js",
				"./bn.js": "./node_modules/moment/locale/bn.js",
				"./bo": "./node_modules/moment/locale/bo.js",
				"./bo.js": "./node_modules/moment/locale/bo.js",
				"./br": "./node_modules/moment/locale/br.js",
				"./br.js": "./node_modules/moment/locale/br.js",
				"./bs": "./node_modules/moment/locale/bs.js",
				"./bs.js": "./node_modules/moment/locale/bs.js",
				"./ca": "./node_modules/moment/locale/ca.js",
				"./ca.js": "./node_modules/moment/locale/ca.js",
				"./cs": "./node_modules/moment/locale/cs.js",
				"./cs.js": "./node_modules/moment/locale/cs.js",
				"./cv": "./node_modules/moment/locale/cv.js",
				"./cv.js": "./node_modules/moment/locale/cv.js",
				"./cy": "./node_modules/moment/locale/cy.js",
				"./cy.js": "./node_modules/moment/locale/cy.js",
				"./da": "./node_modules/moment/locale/da.js",
				"./da.js": "./node_modules/moment/locale/da.js",
				"./de": "./node_modules/moment/locale/de.js",
				"./de-at": "./node_modules/moment/locale/de-at.js",
				"./de-at.js": "./node_modules/moment/locale/de-at.js",
				"./de-ch": "./node_modules/moment/locale/de-ch.js",
				"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
				"./de.js": "./node_modules/moment/locale/de.js",
				"./dv": "./node_modules/moment/locale/dv.js",
				"./dv.js": "./node_modules/moment/locale/dv.js",
				"./el": "./node_modules/moment/locale/el.js",
				"./el.js": "./node_modules/moment/locale/el.js",
				"./en-au": "./node_modules/moment/locale/en-au.js",
				"./en-au.js": "./node_modules/moment/locale/en-au.js",
				"./en-ca": "./node_modules/moment/locale/en-ca.js",
				"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
				"./en-gb": "./node_modules/moment/locale/en-gb.js",
				"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
				"./en-ie": "./node_modules/moment/locale/en-ie.js",
				"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
				"./en-il": "./node_modules/moment/locale/en-il.js",
				"./en-il.js": "./node_modules/moment/locale/en-il.js",
				"./en-in": "./node_modules/moment/locale/en-in.js",
				"./en-in.js": "./node_modules/moment/locale/en-in.js",
				"./en-nz": "./node_modules/moment/locale/en-nz.js",
				"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
				"./en-sg": "./node_modules/moment/locale/en-sg.js",
				"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
				"./eo": "./node_modules/moment/locale/eo.js",
				"./eo.js": "./node_modules/moment/locale/eo.js",
				"./es": "./node_modules/moment/locale/es.js",
				"./es-do": "./node_modules/moment/locale/es-do.js",
				"./es-do.js": "./node_modules/moment/locale/es-do.js",
				"./es-us": "./node_modules/moment/locale/es-us.js",
				"./es-us.js": "./node_modules/moment/locale/es-us.js",
				"./es.js": "./node_modules/moment/locale/es.js",
				"./et": "./node_modules/moment/locale/et.js",
				"./et.js": "./node_modules/moment/locale/et.js",
				"./eu": "./node_modules/moment/locale/eu.js",
				"./eu.js": "./node_modules/moment/locale/eu.js",
				"./fa": "./node_modules/moment/locale/fa.js",
				"./fa.js": "./node_modules/moment/locale/fa.js",
				"./fi": "./node_modules/moment/locale/fi.js",
				"./fi.js": "./node_modules/moment/locale/fi.js",
				"./fil": "./node_modules/moment/locale/fil.js",
				"./fil.js": "./node_modules/moment/locale/fil.js",
				"./fo": "./node_modules/moment/locale/fo.js",
				"./fo.js": "./node_modules/moment/locale/fo.js",
				"./fr": "./node_modules/moment/locale/fr.js",
				"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
				"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
				"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
				"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
				"./fr.js": "./node_modules/moment/locale/fr.js",
				"./fy": "./node_modules/moment/locale/fy.js",
				"./fy.js": "./node_modules/moment/locale/fy.js",
				"./ga": "./node_modules/moment/locale/ga.js",
				"./ga.js": "./node_modules/moment/locale/ga.js",
				"./gd": "./node_modules/moment/locale/gd.js",
				"./gd.js": "./node_modules/moment/locale/gd.js",
				"./gl": "./node_modules/moment/locale/gl.js",
				"./gl.js": "./node_modules/moment/locale/gl.js",
				"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
				"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
				"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
				"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
				"./gu": "./node_modules/moment/locale/gu.js",
				"./gu.js": "./node_modules/moment/locale/gu.js",
				"./he": "./node_modules/moment/locale/he.js",
				"./he.js": "./node_modules/moment/locale/he.js",
				"./hi": "./node_modules/moment/locale/hi.js",
				"./hi.js": "./node_modules/moment/locale/hi.js",
				"./hr": "./node_modules/moment/locale/hr.js",
				"./hr.js": "./node_modules/moment/locale/hr.js",
				"./hu": "./node_modules/moment/locale/hu.js",
				"./hu.js": "./node_modules/moment/locale/hu.js",
				"./hy-am": "./node_modules/moment/locale/hy-am.js",
				"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
				"./id": "./node_modules/moment/locale/id.js",
				"./id.js": "./node_modules/moment/locale/id.js",
				"./is": "./node_modules/moment/locale/is.js",
				"./is.js": "./node_modules/moment/locale/is.js",
				"./it": "./node_modules/moment/locale/it.js",
				"./it-ch": "./node_modules/moment/locale/it-ch.js",
				"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
				"./it.js": "./node_modules/moment/locale/it.js",
				"./ja": "./node_modules/moment/locale/ja.js",
				"./ja.js": "./node_modules/moment/locale/ja.js",
				"./jv": "./node_modules/moment/locale/jv.js",
				"./jv.js": "./node_modules/moment/locale/jv.js",
				"./ka": "./node_modules/moment/locale/ka.js",
				"./ka.js": "./node_modules/moment/locale/ka.js",
				"./kk": "./node_modules/moment/locale/kk.js",
				"./kk.js": "./node_modules/moment/locale/kk.js",
				"./km": "./node_modules/moment/locale/km.js",
				"./km.js": "./node_modules/moment/locale/km.js",
				"./kn": "./node_modules/moment/locale/kn.js",
				"./kn.js": "./node_modules/moment/locale/kn.js",
				"./ko": "./node_modules/moment/locale/ko.js",
				"./ko.js": "./node_modules/moment/locale/ko.js",
				"./ku": "./node_modules/moment/locale/ku.js",
				"./ku.js": "./node_modules/moment/locale/ku.js",
				"./ky": "./node_modules/moment/locale/ky.js",
				"./ky.js": "./node_modules/moment/locale/ky.js",
				"./lb": "./node_modules/moment/locale/lb.js",
				"./lb.js": "./node_modules/moment/locale/lb.js",
				"./lo": "./node_modules/moment/locale/lo.js",
				"./lo.js": "./node_modules/moment/locale/lo.js",
				"./lt": "./node_modules/moment/locale/lt.js",
				"./lt.js": "./node_modules/moment/locale/lt.js",
				"./lv": "./node_modules/moment/locale/lv.js",
				"./lv.js": "./node_modules/moment/locale/lv.js",
				"./me": "./node_modules/moment/locale/me.js",
				"./me.js": "./node_modules/moment/locale/me.js",
				"./mi": "./node_modules/moment/locale/mi.js",
				"./mi.js": "./node_modules/moment/locale/mi.js",
				"./mk": "./node_modules/moment/locale/mk.js",
				"./mk.js": "./node_modules/moment/locale/mk.js",
				"./ml": "./node_modules/moment/locale/ml.js",
				"./ml.js": "./node_modules/moment/locale/ml.js",
				"./mn": "./node_modules/moment/locale/mn.js",
				"./mn.js": "./node_modules/moment/locale/mn.js",
				"./mr": "./node_modules/moment/locale/mr.js",
				"./mr.js": "./node_modules/moment/locale/mr.js",
				"./ms": "./node_modules/moment/locale/ms.js",
				"./ms-my": "./node_modules/moment/locale/ms-my.js",
				"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
				"./ms.js": "./node_modules/moment/locale/ms.js",
				"./mt": "./node_modules/moment/locale/mt.js",
				"./mt.js": "./node_modules/moment/locale/mt.js",
				"./my": "./node_modules/moment/locale/my.js",
				"./my.js": "./node_modules/moment/locale/my.js",
				"./nb": "./node_modules/moment/locale/nb.js",
				"./nb.js": "./node_modules/moment/locale/nb.js",
				"./ne": "./node_modules/moment/locale/ne.js",
				"./ne.js": "./node_modules/moment/locale/ne.js",
				"./nl": "./node_modules/moment/locale/nl.js",
				"./nl-be": "./node_modules/moment/locale/nl-be.js",
				"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
				"./nl.js": "./node_modules/moment/locale/nl.js",
				"./nn": "./node_modules/moment/locale/nn.js",
				"./nn.js": "./node_modules/moment/locale/nn.js",
				"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
				"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
				"./pa-in": "./node_modules/moment/locale/pa-in.js",
				"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
				"./pl": "./node_modules/moment/locale/pl.js",
				"./pl.js": "./node_modules/moment/locale/pl.js",
				"./pt": "./node_modules/moment/locale/pt.js",
				"./pt-br": "./node_modules/moment/locale/pt-br.js",
				"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
				"./pt.js": "./node_modules/moment/locale/pt.js",
				"./ro": "./node_modules/moment/locale/ro.js",
				"./ro.js": "./node_modules/moment/locale/ro.js",
				"./ru": "./node_modules/moment/locale/ru.js",
				"./ru.js": "./node_modules/moment/locale/ru.js",
				"./sd": "./node_modules/moment/locale/sd.js",
				"./sd.js": "./node_modules/moment/locale/sd.js",
				"./se": "./node_modules/moment/locale/se.js",
				"./se.js": "./node_modules/moment/locale/se.js",
				"./si": "./node_modules/moment/locale/si.js",
				"./si.js": "./node_modules/moment/locale/si.js",
				"./sk": "./node_modules/moment/locale/sk.js",
				"./sk.js": "./node_modules/moment/locale/sk.js",
				"./sl": "./node_modules/moment/locale/sl.js",
				"./sl.js": "./node_modules/moment/locale/sl.js",
				"./sq": "./node_modules/moment/locale/sq.js",
				"./sq.js": "./node_modules/moment/locale/sq.js",
				"./sr": "./node_modules/moment/locale/sr.js",
				"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
				"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
				"./sr.js": "./node_modules/moment/locale/sr.js",
				"./ss": "./node_modules/moment/locale/ss.js",
				"./ss.js": "./node_modules/moment/locale/ss.js",
				"./sv": "./node_modules/moment/locale/sv.js",
				"./sv.js": "./node_modules/moment/locale/sv.js",
				"./sw": "./node_modules/moment/locale/sw.js",
				"./sw.js": "./node_modules/moment/locale/sw.js",
				"./ta": "./node_modules/moment/locale/ta.js",
				"./ta.js": "./node_modules/moment/locale/ta.js",
				"./te": "./node_modules/moment/locale/te.js",
				"./te.js": "./node_modules/moment/locale/te.js",
				"./tet": "./node_modules/moment/locale/tet.js",
				"./tet.js": "./node_modules/moment/locale/tet.js",
				"./tg": "./node_modules/moment/locale/tg.js",
				"./tg.js": "./node_modules/moment/locale/tg.js",
				"./th": "./node_modules/moment/locale/th.js",
				"./th.js": "./node_modules/moment/locale/th.js",
				"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
				"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
				"./tlh": "./node_modules/moment/locale/tlh.js",
				"./tlh.js": "./node_modules/moment/locale/tlh.js",
				"./tr": "./node_modules/moment/locale/tr.js",
				"./tr.js": "./node_modules/moment/locale/tr.js",
				"./tzl": "./node_modules/moment/locale/tzl.js",
				"./tzl.js": "./node_modules/moment/locale/tzl.js",
				"./tzm": "./node_modules/moment/locale/tzm.js",
				"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
				"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
				"./tzm.js": "./node_modules/moment/locale/tzm.js",
				"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
				"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
				"./uk": "./node_modules/moment/locale/uk.js",
				"./uk.js": "./node_modules/moment/locale/uk.js",
				"./ur": "./node_modules/moment/locale/ur.js",
				"./ur.js": "./node_modules/moment/locale/ur.js",
				"./uz": "./node_modules/moment/locale/uz.js",
				"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
				"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
				"./uz.js": "./node_modules/moment/locale/uz.js",
				"./vi": "./node_modules/moment/locale/vi.js",
				"./vi.js": "./node_modules/moment/locale/vi.js",
				"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
				"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
				"./yo": "./node_modules/moment/locale/yo.js",
				"./yo.js": "./node_modules/moment/locale/yo.js",
				"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
				"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
				"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
				"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
				"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
				"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
				"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
				"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
			};

			function s(e) {
				var t = r(e);
				return n(t)
			}

			function r(e) {
				if (!n.o(o, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return o[e]
			}
			s.keys = function() {
				return Object.keys(o)
			}, s.resolve = r, e.exports = s, s.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$"
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/can-promise.js"),
				s = n("./node_modules/qrcode/lib/core/qrcode.js"),
				r = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, r, a) {
				var i = [].slice.call(arguments, 1),
					l = i.length,
					c = "function" == typeof i[l - 1];
				if (!c && !o()) throw new Error("Callback required as last argument");
				if (!c) {
					if (l < 1) throw new Error("Too few arguments provided");
					return 1 === l ? (n = t, t = r = void 0) : 2 !== l || t.getContext || (r = n, n = t, t = void 0), new Promise((function(o, a) {
						try {
							var i = s.create(n, r);
							o(e(i, t, r))
						} catch (l) {
							a(l)
						}
					}))
				}
				if (l < 2) throw new Error("Too few arguments provided");
				2 === l ? (a = n, n = t, t = r = void 0) : 3 === l && (t.getContext && void 0 === a ? (a = r, r = void 0) : (a = r, r = n, n = t, t = void 0));
				try {
					var d = s.create(n, r);
					a(null, e(d, t, r))
				} catch (u) {
					a(u)
				}
			}
			t.create = s.create, t.toCanvas = i.bind(null, r.render), t.toDataURL = i.bind(null, r.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
				return a.render(e, n)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, n = o(e), s = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), r = [n - 7], a = 1; a < t - 1; a++) r[a] = r[a - 1] - s;
				return r.push(6), r.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], o = t.getRowColCoords(e), s = o.length, r = 0; r < s; r++)
					for (var a = 0; a < s; a++) 0 === r && 0 === a || 0 === r && a === s - 1 || r === s - 1 && 0 === a || n.push([o[r], o[a]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js"),
				s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function r(e) {
				this.mode = o.ALPHANUMERIC, this.data = e
			}
			r.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var n = 45 * s.indexOf(this.data[t]);
					n += s.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(s.indexOf(this.data[t]), 6)
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(e, t) {
			function n() {
				this.buffer = [], this.length = 0
			}
			n.prototype = {
				get: function(e) {
					var t = Math.floor(e / 8);
					return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
				},
				put: function(e, t) {
					for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					var t = Math.floor(this.length / 8);
					this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = n
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function s(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = o.alloc(e * e), this.reservedBit = o.alloc(e * e)
			}
			s.prototype.set = function(e, t, n, o) {
				var s = e * this.size + t;
				this.data[s] = n, o && (this.reservedBit[s] = !0)
			}, s.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, s.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, s.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/mode.js");

			function r(e) {
				this.mode = s.BYTE, this.data = o.from(e)
			}
			r.getBitsLength = function(e) {
				return 8 * e
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				r = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case o.L:
						return s[4 * (e - 1) + 0];
					case o.M:
						return s[4 * (e - 1) + 1];
					case o.Q:
						return s[4 * (e - 1) + 2];
					case o.H:
						return s[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case o.L:
						return r[4 * (e - 1) + 0];
					case o.M:
						return r[4 * (e - 1) + 1];
					case o.Q:
						return r[4 * (e - 1) + 2];
					case o.H:
						return r[4 * (e - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/qrcode/lib/core/error-correction-level.js": function(e, t) {
			t.L = {
				bit: 1
			}, t.M = {
				bit: 0
			}, t.Q = {
				bit: 3
			}, t.H = {
				bit: 2
			}, t.isValid = function(e) {
				return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
			}, t.from = function(e, n) {
				if (t.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "l":
							case "low":
								return t.L;
							case "m":
							case "medium":
								return t.M;
							case "q":
							case "quartile":
								return t.Q;
							case "h":
							case "high":
								return t.H;
							default:
								throw new Error("Unknown EC Level: " + e)
						}
					}(e)
				} catch (o) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = o(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/utils.js"),
				s = o.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, r = n << 10; o.getBCHDigit(r) - s >= 0;) r ^= 1335 << o.getBCHDigit(r) - s;
				return 21522 ^ (n << 10 | r)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = o.alloc(512),
				r = o.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) s[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) s[t] = s[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return r[e]
			}, t.exp = function(e) {
				return s[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : s[r[e] + r[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/utils.js");

			function r(e) {
				this.mode = o.KANJI, this.data = e
			}
			r.getBitsLength = function(e) {
				return 13 * e
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				var t;
				for (t = 0; t < this.data.length; t++) {
					var n = s.toSJIS(this.data[t]);
					if (n >= 33088 && n <= 40956) n -= 33088;
					else {
						if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						n -= 49472
					}
					n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
				}
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/mask-pattern.js": function(e, t) {
			t.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			var n = 3,
				o = 3,
				s = 40,
				r = 10;

			function a(e, n, o) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (n + o) % 2 == 0;
					case t.Patterns.PATTERN001:
						return n % 2 == 0;
					case t.Patterns.PATTERN010:
						return o % 3 == 0;
					case t.Patterns.PATTERN011:
						return (n + o) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(n / 2) + Math.floor(o / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return n * o % 2 + n * o % 3 == 0;
					case t.Patterns.PATTERN110:
						return (n * o % 2 + n * o % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (n * o % 3 + (n + o) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, o = 0, s = 0, r = 0, a = null, i = null, l = 0; l < t; l++) {
					s = r = 0, a = i = null;
					for (var c = 0; c < t; c++) {
						var d = e.get(l, c);
						d === a ? s++ : (s >= 5 && (o += n + (s - 5)), a = d, s = 1), (d = e.get(c, l)) === i ? r++ : (r >= 5 && (o += n + (r - 5)), i = d, r = 1)
					}
					s >= 5 && (o += n + (s - 5)), r >= 5 && (o += n + (r - 5))
				}
				return o
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, s = 0; s < t - 1; s++)
					for (var r = 0; r < t - 1; r++) {
						var a = e.get(s, r) + e.get(s, r + 1) + e.get(s + 1, r) + e.get(s + 1, r + 1);
						4 !== a && 0 !== a || n++
					}
				return n * o
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, o = 0, r = 0, a = 0; a < t; a++) {
					o = r = 0;
					for (var i = 0; i < t; i++) o = o << 1 & 2047 | e.get(a, i), i >= 10 && (1488 === o || 93 === o) && n++, r = r << 1 & 2047 | e.get(i, a), i >= 10 && (1488 === r || 93 === r) && n++
				}
				return n * s
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, o = 0; o < n; o++) t += e.data[o];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * r
			}, t.applyMask = function(e, t) {
				for (var n = t.size, o = 0; o < n; o++)
					for (var s = 0; s < n; s++) t.isReserved(s, o) || t.xor(s, o, a(e, s, o))
			}, t.getBestMask = function(e, n) {
				for (var o = Object.keys(t.Patterns).length, s = 0, r = 1 / 0, a = 0; a < o; a++) {
					n(a), t.applyMask(a, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), i < r && (r = i, s = a)
				}
				return s
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/version-check.js"),
				s = n("./node_modules/qrcode/lib/core/regex.js");
			t.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, t.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, t.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, t.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, t.MIXED = {
				bit: -1
			}, t.getCharCountIndicator = function(e, t) {
				if (!e.ccBits) throw new Error("Invalid mode: " + e);
				if (!o.isValid(t)) throw new Error("Invalid version: " + t);
				return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
			}, t.getBestModeForData = function(e) {
				return s.testNumeric(e) ? t.NUMERIC : s.testAlphanumeric(e) ? t.ALPHANUMERIC : s.testKanji(e) ? t.KANJI : t.BYTE
			}, t.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, t.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, t.from = function(e, n) {
				if (t.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "numeric":
								return t.NUMERIC;
							case "alphanumeric":
								return t.ALPHANUMERIC;
							case "kanji":
								return t.KANJI;
							case "byte":
								return t.BYTE;
							default:
								throw new Error("Unknown mode: " + e)
						}
					}(e)
				} catch (o) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js");

			function s(e) {
				this.mode = o.NUMERIC, this.data = e.toString()
			}
			s.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
				var t, n, o;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), o = parseInt(n, 10), e.put(o, 10);
				var s = this.data.length - t;
				s > 0 && (n = this.data.substr(t), o = parseInt(n, 10), e.put(o, 3 * s + 1))
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = o.alloc(e.length + t.length - 1), r = 0; r < e.length; r++)
					for (var a = 0; a < t.length; a++) n[r + a] ^= s.mul(e[r], t[a]);
				return n
			}, t.mod = function(e, t) {
				for (var n = o.from(e); n.length - t.length >= 0;) {
					for (var r = n[0], a = 0; a < t.length; a++) n[a] ^= s.mul(t[a], r);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = o.from([1]), r = 0; r < e; r++) n = t.mul(n, [1, s.exp(r)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/utils.js"),
				r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/bit-buffer.js"),
				i = n("./node_modules/qrcode/lib/core/bit-matrix.js"),
				l = n("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				c = n("./node_modules/qrcode/lib/core/finder-pattern.js"),
				d = n("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				m = n("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				p = n("./node_modules/qrcode/lib/core/version.js"),
				b = n("./node_modules/qrcode/lib/core/format-info.js"),
				h = n("./node_modules/qrcode/lib/core/mode.js"),
				f = n("./node_modules/qrcode/lib/core/segments.js"),
				g = n("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, t, n) {
				var o, s, r = e.size,
					a = b.getEncodedBits(t, n);
				for (o = 0; o < 15; o++) s = 1 == (a >> o & 1), o < 6 ? e.set(o, 8, s, !0) : o < 8 ? e.set(o + 1, 8, s, !0) : e.set(r - 15 + o, 8, s, !0), o < 8 ? e.set(8, r - o - 1, s, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, s, !0) : e.set(8, 15 - o - 1, s, !0);
				e.set(r - 8, 8, 1, !0)
			}

			function _(e, t, n) {
				var r = new a;
				n.forEach((function(t) {
					r.put(t.mode.bit, 4), r.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(r)
				}));
				var i = 8 * (s.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
				for (var l = (i - r.getLengthInBits()) / 8, c = 0; c < l; c++) r.put(c % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var r = s.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), i = r - a, l = u.getBlocksCount(t, n), c = l - r % l, d = Math.floor(r / l), p = Math.floor(i / l), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(l), _ = new Array(l), y = 0, C = o.from(e.buffer), E = 0; E < l; E++) {
						var j = E < c ? p : b;
						v[E] = C.slice(g, g + j), _[E] = f.encode(v[E]), g += j, y = Math.max(y, j)
					}
					var x, w, k = o.alloc(r),
						S = 0;
					for (x = 0; x < y; x++)
						for (w = 0; w < l; w++) x < v[w].length && (k[S++] = v[w][x]);
					for (x = 0; x < h; x++)
						for (w = 0; w < l; w++) k[S++] = _[w][x];
					return k
				}(r, e, t)
			}

			function y(e, t, n, o) {
				var r;
				if (g(e)) r = f.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var u = f.rawSplit(e);
						a = p.getBestVersionForData(u, n)
					}
					r = f.fromString(e, a || 40)
				}
				var m = p.getBestVersionForData(r, n);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var b = _(t, n, r),
					h = s.getSymbolSize(t),
					y = new i(h);
				return function(e, t) {
						for (var n = e.size, o = c.getPositions(t), s = 0; s < o.length; s++)
							for (var r = o[s][0], a = o[s][1], i = -1; i <= 7; i++)
								if (!(r + i <= -1 || n <= r + i))
									for (var l = -1; l <= 7; l++) a + l <= -1 || n <= a + l || (i >= 0 && i <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && l >= 2 && l <= 4 ? e.set(r + i, a + l, !0, !0) : e.set(r + i, a + l, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var o = n % 2 == 0;
							e.set(n, 6, o, !0), e.set(6, n, o, !0)
						}
					}(y),
					function(e, t) {
						for (var n = l.getPositions(t), o = 0; o < n.length; o++)
							for (var s = n[o][0], r = n[o][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(s + a, r + i, !0, !0) : e.set(s + a, r + i, !1, !0)
					}(y, t), v(y, n, 0), t >= 7 && function(e, t) {
						for (var n, o, s, r = e.size, a = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), o = i % 3 + r - 8 - 3, s = 1 == (a >> i & 1), e.set(n, o, s, !0), e.set(o, n, s, !0)
					}(y, t),
					function(e, t) {
						for (var n = e.size, o = -1, s = n - 1, r = 7, a = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var l = 0; l < 2; l++)
									if (!e.isReserved(s, i - l)) {
										var c = !1;
										a < t.length && (c = 1 == (t[a] >>> r & 1)), e.set(s, i - l, c), -1 === --r && (a++, r = 7)
									} if ((s += o) < 0 || n <= s) {
									s -= o, o = -o;
									break
								}
							}
					}(y, b), isNaN(o) && (o = d.getBestMask(y, v.bind(null, y, n))), d.applyMask(o, y), v(y, n, o), {
						modules: y,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: o,
						segments: r
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, o, a = r.M;
				return void 0 !== t && (a = r.from(t.errorCorrectionLevel, r.M), n = p.from(t.version), o = d.from(t.maskPattern), t.toSJISFunc && s.setToSJISFunction(t.toSJISFunc)), y(e, n, a, o)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/polynomial.js"),
				r = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = s.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = o.alloc(this.degree),
					n = r.concat([e, t], e.length + this.degree),
					a = s.mod(n, this.genPoly),
					i = this.degree - a.length;
				if (i > 0) {
					var l = o.alloc(this.degree);
					return a.copy(l, i), l
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(o, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var s = new RegExp("^" + n + "$"),
				r = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return s.test(e)
			}, t.testNumeric = function(e) {
				return r.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				r = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/byte-data.js"),
				i = n("./node_modules/qrcode/lib/core/kanji-data.js"),
				l = n("./node_modules/qrcode/lib/core/regex.js"),
				c = n("./node_modules/qrcode/lib/core/utils.js"),
				d = n("./node_modules/dijkstrajs/dijkstra.js");

			function u(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function m(e, t, n) {
				for (var o, s = []; null !== (o = e.exec(n));) s.push({
					data: o[0],
					index: o.index,
					mode: t,
					length: o[0].length
				});
				return s
			}

			function p(e) {
				var t, n, s = m(l.NUMERIC, o.NUMERIC, e),
					r = m(l.ALPHANUMERIC, o.ALPHANUMERIC, e);
				return c.isKanjiModeEnabled() ? (t = m(l.BYTE, o.BYTE, e), n = m(l.KANJI, o.KANJI, e)) : (t = m(l.BYTE_KANJI, o.BYTE, e), n = []), s.concat(r, t, n).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function b(e, t) {
				switch (t) {
					case o.NUMERIC:
						return s.getBitsLength(e);
					case o.ALPHANUMERIC:
						return r.getBitsLength(e);
					case o.KANJI:
						return i.getBitsLength(e);
					case o.BYTE:
						return a.getBitsLength(e)
				}
			}

			function h(e, t) {
				var n, l = o.getBestModeForData(e);
				if ((n = o.from(t, l)) !== o.BYTE && n.bit < l.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + o.toString(n) + ".\n Suggested mode is: " + o.toString(l));
				switch (n !== o.KANJI || c.isKanjiModeEnabled() || (n = o.BYTE), n) {
					case o.NUMERIC:
						return new s(e);
					case o.ALPHANUMERIC:
						return new r(e);
					case o.KANJI:
						return new i(e);
					case o.BYTE:
						return new a(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(h(t, null)) : t.data && e.push(h(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, n) {
				for (var s = function(e, t) {
						for (var n = {}, s = {
								start: {}
							}, r = ["start"], a = 0; a < e.length; a++) {
							for (var i = e[a], l = [], c = 0; c < i.length; c++) {
								var d = i[c],
									u = "" + a + c;
								l.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, s[u] = {};
								for (var m = 0; m < r.length; m++) {
									var p = r[m];
									n[p] && n[p].node.mode === d.mode ? (s[p][u] = b(n[p].lastCount + d.length, d.mode) - b(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), s[p][u] = b(d.length, d.mode) + 4 + o.getCharCountIndicator(d.mode, t))
								}
							}
							r = l
						}
						for (m = 0; m < r.length; m++) s[r[m]].end = 0;
						return {
							map: s,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var s = e[n];
							switch (s.mode) {
								case o.NUMERIC:
									t.push([s, {
										data: s.data,
										mode: o.ALPHANUMERIC,
										length: s.length
									}, {
										data: s.data,
										mode: o.BYTE,
										length: s.length
									}]);
									break;
								case o.ALPHANUMERIC:
									t.push([s, {
										data: s.data,
										mode: o.BYTE,
										length: s.length
									}]);
									break;
								case o.KANJI:
									t.push([s, {
										data: s.data,
										mode: o.BYTE,
										length: u(s.data)
									}]);
									break;
								case o.BYTE:
									t.push([{
										data: s.data,
										mode: o.BYTE,
										length: u(s.data)
									}])
							}
						}
						return t
					}(p(e, c.isKanjiModeEnabled())), n), r = d.find_path(s.map, "start", "end"), a = [], i = 1; i < r.length - 1; i++) a.push(s.table[r[i]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(a))
			}, t.rawSplit = function(e) {
				return t.fromArray(p(e, c.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, t) {
			var n, o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return o[e]
			}, t.getBCHDigit = function(e) {
				for (var t = 0; 0 !== e;) t++, e >>>= 1;
				return t
			}, t.setToSJISFunction = function(e) {
				if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
				n = e
			}, t.isKanjiModeEnabled = function() {
				return void 0 !== n
			}, t.toSJIS = function(e) {
				return n(e)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(e, t) {
			t.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/utils.js"),
				s = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/mode.js"),
				i = n("./node_modules/qrcode/lib/core/version-check.js"),
				l = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				c = o.getBCHDigit(7973);

			function d(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var n = 0;
				return e.forEach((function(e) {
					var o = d(e.mode, t);
					n += o + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return i.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!i.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = a.BYTE);
				var r = 8 * (o.getSymbolTotalCodewords(e) - s.getTotalCodewordsCount(e, t));
				if (n === a.MIXED) return r;
				var l = r - d(n, e);
				switch (n) {
					case a.NUMERIC:
						return Math.floor(l / 10 * 3);
					case a.ALPHANUMERIC:
						return Math.floor(l / 11 * 2);
					case a.KANJI:
						return Math.floor(l / 13);
					case a.BYTE:
					default:
						return Math.floor(l / 8)
				}
			}, t.getBestVersionForData = function(e, n) {
				var o, s = r.from(n, r.M);
				if (l(e)) {
					if (e.length > 1) return function(e, n) {
						for (var o = 1; o <= 40; o++) {
							if (u(e, o) <= t.getCapacity(o, n, a.MIXED)) return o
						}
					}(e, s);
					if (0 === e.length) return 1;
					o = e[0]
				} else o = e;
				return function(e, n, o) {
					for (var s = 1; s <= 40; s++)
						if (n <= t.getCapacity(s, o, e)) return s
				}(o.mode, o.getLength(), s)
			}, t.getEncodedBits = function(e) {
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; o.getBCHDigit(t) - c >= 0;) t ^= 7973 << o.getBCHDigit(t) - c;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var s = n,
					r = t;
				void 0 !== s || t && t.getContext || (s = t, t = void 0), t || (r = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), s = o.getOptions(s);
				var a = o.getImageWidth(e.modules.size, s),
					i = r.getContext("2d"),
					l = i.createImageData(a, a);
				return o.qrToImageData(l.data, e, s),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, r, a), i.putImageData(l, 0, 0), r
			}, t.renderToDataURL = function(e, n, o) {
				var s = o;
				void 0 !== s || n && n.getContext || (s = n, n = void 0), s || (s = {});
				var r = t.render(e, n, s),
					a = s.type || "image/png",
					i = s.rendererOpts || {};
				return r.toDataURL(a, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/renderer/utils.js");

			function s(e, t) {
				var n = e.a / 255,
					o = t + '="' + e.hex + '"';
				return n < 1 ? o + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : o
			}

			function r(e, t, n) {
				var o = e + t;
				return void 0 !== n && (o += " " + n), o
			}
			t.render = function(e, t, n) {
				var a = o.getOptions(t),
					i = e.modules.size,
					l = e.modules.data,
					c = i + 2 * a.margin,
					d = a.color.light.a ? "<path " + s(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
					u = "<path " + s(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var o = "", s = 0, a = !1, i = 0, l = 0; l < e.length; l++) {
							var c = Math.floor(l % t),
								d = Math.floor(l / t);
							c || a || (a = !0), e[l] ? (i++, l > 0 && c > 0 && e[l - 1] || (o += a ? r("M", c + n, .5 + d + n) : r("m", s, 0), s = 0, a = !1), c + 1 < t && e[l + 1] || (o += r("h", i), i = 0)) : s++
						}
						return o
					}(l, i, a.margin) + '"/>',
					m = 'viewBox="0 0 ' + c + " " + c + '"',
					p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + d + u + "</svg>\n";
				return "function" == typeof n && n(null, p), p
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(e, t) {
			function n(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				var t = e.slice().replace("#", "").split("");
				if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
					return [e, e]
				})))), 6 === t.length && t.push("F", "F");
				var n = parseInt(t.join(""), 16);
				return {
					r: n >> 24 & 255,
					g: n >> 16 & 255,
					b: n >> 8 & 255,
					a: 255 & n,
					hex: "#" + t.slice(0, 6).join("")
				}
			}
			t.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					o = e.width && e.width >= 21 ? e.width : void 0,
					s = e.scale || 4;
				return {
					width: o,
					scale: o ? 4 : s,
					margin: t,
					color: {
						dark: n(e.color.dark || "#000000ff"),
						light: n(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, t.getScale = function(e, t) {
				return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
			}, t.getImageWidth = function(e, n) {
				var o = t.getScale(e, n);
				return Math.floor((e + 2 * n.margin) * o)
			}, t.qrToImageData = function(e, n, o) {
				for (var s = n.modules.size, r = n.modules.data, a = t.getScale(s, o), i = Math.floor((s + 2 * o.margin) * a), l = o.margin * a, c = [o.color.light, o.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = o.color.light;
						if (d >= l && u >= l && d < i - l && u < i - l) p = c[r[Math.floor((d - l) / a) * s + Math.floor((u - l) / a)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/qrcode/node_modules/isarray/index.js");
			r.TYPED_ARRAY_SUPPORT = function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo()
				} catch (t) {
					return !1
				}
			}();
			var s = r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function r(e, t, n) {
				return r.TYPED_ARRAY_SUPPORT || this instanceof r ? "number" == typeof e ? l(this, e) : function(e, t, n, o) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, o) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (o || 0)) throw new RangeError("'length' is out of bounds");
						var s;
						s = void 0 === n && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, n) : new Uint8Array(t, n, o);
						r.TYPED_ARRAY_SUPPORT ? s.__proto__ = r.prototype : s = c(e, s);
						return s
					}(e, t, n, o);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							o = i(e, n),
							s = o.write(t);
						s !== n && (o = o.slice(0, s));
						return o
					}(e, t);
					return function(e, t) {
						if (r.isBuffer(t)) {
							var n = 0 | a(t.length),
								o = i(e, n);
							return 0 === o.length ? o : (t.copy(o, 0, 0, n), o)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (s = t.length) != s ? i(e, 0) : c(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return c(e, t.data)
						}
						var s;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new r(e, t, n)
			}

			function a(e) {
				if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return r.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = r.prototype : (null === (n = e) && (n = new r(t)), n.length = t), n
			}

			function l(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | a(t));
				if (!r.TYPED_ARRAY_SUPPORT)
					for (var o = 0; o < t; ++o) n[o] = 0;
				return n
			}

			function c(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | a(t.length), o = i(e, n), s = 0; s < n; s += 1) o[s] = 255 & t[s];
				return o
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var o = e.length, s = null, r = [], a = 0; a < o; ++a) {
					if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
						if (!s) {
							if (n > 56319) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							if (a + 1 === o) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							s = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && r.push(239, 191, 189), s = n;
							continue
						}
						n = 65536 + (s - 55296 << 10 | n - 56320)
					} else s && (t -= 3) > -1 && r.push(239, 191, 189);
					if (s = null, n < 128) {
						if ((t -= 1) < 0) break;
						r.push(n)
					} else if (n < 2048) {
						if ((t -= 2) < 0) break;
						r.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((t -= 3) < 0) break;
						r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return r
			}

			function u(e) {
				return r.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : d(e).length)
			}
			r.TYPED_ARRAY_SUPPORT && (r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), r.prototype.write = function(e, t, n) {
				void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
				var o = this.length - t;
				if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, o) {
					return function(e, t, n, o) {
						for (var s = 0; s < o && !(s + n >= t.length || s >= e.length); ++s) t[s + n] = e[s];
						return s
					}(d(t, e.length - n), e, n, o)
				}(this, e, t, n)
			}, r.prototype.slice = function(e, t) {
				var n, o = this.length;
				if ((e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), (t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e), r.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = r.prototype;
				else {
					var s = t - e;
					n = new r(s, void 0);
					for (var a = 0; a < s; ++a) n[a] = this[a + e]
				}
				return n
			}, r.prototype.copy = function(e, t, n, o) {
				if (n || (n = 0), o || 0 === o || (o = this.length), t >= e.length && (t = e.length), t || (t = 0), o > 0 && o < n && (o = n), o === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (o < 0) throw new RangeError("sourceEnd out of bounds");
				o > this.length && (o = this.length), e.length - t < o - n && (o = e.length - t + n);
				var s, a = o - n;
				if (this === e && n < t && t < o)
					for (s = a - 1; s >= 0; --s) e[s + t] = this[s + n];
				else if (a < 1e3 || !r.TYPED_ARRAY_SUPPORT)
					for (s = 0; s < a; ++s) e[s + t] = this[s + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
				return a
			}, r.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var o = e.charCodeAt(0);
						o < 256 && (e = o)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var s;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (s = t; s < n; ++s) this[s] = e;
				else {
					var a = r.isBuffer(e) ? e : new r(e),
						i = a.length;
					for (s = 0; s < n - t; ++s) this[s + t] = a[s % i]
				}
				return this
			}, r.concat = function(e, t) {
				if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var s = l(null, t),
					a = 0;
				for (n = 0; n < e.length; ++n) {
					var c = e[n];
					if (!r.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
					c.copy(s, a), a += c.length
				}
				return s
			}, r.byteLength = u, r.prototype._isBuffer = !0, r.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new r(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new r(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, t) {
			var n = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == n.call(e)
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = function() {
					var e = 1,
						t = new WeakMap,
						n = function(o, s) {
							return "number" == typeof o || "string" == typeof o ? s ? "idx-" + s : "val-" + o : t.has(o) ? "uid" + t.get(o) : (t.set(o, e++), n(o))
						};
					return n
				},
				r = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				a = r(),
				i = o.createContext(r()),
				l = function() {
					return o.useState((e = o.useContext(i), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || a) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				c = function() {
					return l()[0].uid
				},
				d = function() {
					return l()[0].gen
				}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const n = Object(o.a)(e),
					s = parseInt(n) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(o || (o = {}));
			const r = "USD",
				a = "ETH",
				i = "COINS",
				l = [a, "BTC"],
				c = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
					COINS: () => s.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => s.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => s.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/currency/centsToDollars/index.ts"),
				r = n("./src/lib/currency/currencies.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/helpers/governance/tokens.ts"),
				l = n("./src/reddit/constants/intlSupport.ts");
			const c = (e, {
					locale: t = o.DEFAULT_LOCALE,
					pretty: n,
					formatOptions: s
				} = {}) => {
					const r = Number(e);
					return Object(l.c)() ? n ? Object(a.b)(r) : new Intl.NumberFormat(t, s).format(r) : u(r, n, t)
				},
				d = (e, t = {}) => {
					const {
						locale: n = o.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: c,
						displayConversion: d,
						forceDecimals: b,
						currency: h = t.currency || (t.type ? p(t.type) : r.c),
						type: f = t.type || (t.currency ? m(t.currency) : r.b.Real)
					} = t, g = Number(e), v = String(e);
					switch (f) {
						case r.b.Reddit: {
							const e = r.e[h],
								t = e ? e() : h;
							return Object(l.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...c
							}).format(g) + " " + t : u(g, a, n, t)
						}
						case r.b.Crypto: {
							if (a) {
								return Object(i.c)(v, d) + " " + h
							}
							const e = Number(Object(i.b)(v, d));
							return Object(l.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...c
							}).format(e) : u(e, a, n, h)
						}
						case r.b.Real:
						default: {
							const e = Number(Object(s.a)(v, b));
							return Object(l.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...c
							}).format(e) : u(e, a, n, h)
						}
					}
				},
				u = (e, t, n, o) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(n)) + (o ? " " + o : "")
				},
				m = e => r.g.includes(e.toUpperCase()) ? r.b.Reddit : r.f.includes(e.toUpperCase()) ? r.b.Crypto : r.b.Real,
				p = e => {
					switch (e) {
						case r.b.Crypto:
							return r.d;
						case r.b.Reddit:
							return r.a;
						case r.b.Real:
						default:
							return r.c
					}
				}
		},
		"./src/lib/validateEmail/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = (e, t) => {
				if (!e && t) return !0;
				return /^.+\@.+\..+$/.test(e)
			}
		},
		"./src/reddit/actions/accountGender/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				l = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var c = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var o, s;
				const r = await (e => Object(a.a)(e, {
					...i
				}))(n());
				if (!r.ok) return;
				const l = r.body,
					c = (({
						accountDefinedGender: e,
						accountGenderCategory: t
					}) => ({
						definedGender: e,
						genderCategory: t
					}))(null === (s = null === (o = null == l ? void 0 : l.data) || void 0 === o ? void 0 : o.piiIdentity) || void 0 === s ? void 0 : s.gender);
				c && e(m(c))
			}, m = Object(s.a)(d.a), p = e => async (t, n, {
				gqlContext: s
			}) => {
				const i = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(a.a)(e, {
					...l,
					variables: t
				}))(s(), {
					input: i
				})).ok ? (t(b(e)), t(Object(r.f)({
					kind: c.b.SuccessCommunity,
					text: o.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : t(Object(r.f)({
					kind: c.b.Error,
					text: o.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				}))
			}, b = Object(s.a)(d.b)
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const r = Object(o.a)(s.a),
				a = Object(o.a)(s.e),
				i = Object(o.a)(s.b),
				l = Object(o.a)(s.c),
				c = Object(o.a)(s.d)
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(o.a)(a.a),
				l = Object(o.a)(a.b),
				c = Object(o.a)(a.c),
				d = Object(o.a)(a.d),
				u = Object(o.a)(a.e),
				m = Object(o.a)(a.f),
				p = Object(o.a)(a.g),
				b = Object(o.a)(a.h),
				h = Object(o.a)(a.i),
				f = e => Object(s.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				l = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				b = n("./src/reddit/models/Badge/managementPage.ts"),
				h = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				v = n("./src/reddit/selectors/products.ts"),
				_ = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function C(e) {
				return !!e && "removeBadge" === e.type
			}

			function E(e) {
				if (!C(e)) return e
			}
			const j = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(_.b)({
					includeMemberships: !0
				}));
				const o = t().economics.me.data.specialMemberships || {},
					s = Object.keys(o);
				if (s.length) {
					const t = await Object(i.e)(n(), s);
					t.ok && e(Object(y.g)(t.body))
				}
			}, x = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				const r = o().user.account,
					a = o().economics.subredditPremium[e],
					i = !a || a.status !== f.a.Fetched || t;
				if (r && i) {
					const t = await Object(l.a)(s(), e, r.id);
					n(Object(y.i)(t))
				}
			}, w = e => async (t, n, {
				apiContext: o
			}) => {
				const s = n(),
					a = s.user.account,
					i = Object(g.f)(s, e.subredditId),
					l = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (a && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: E(e.badge),
						currentAppliedBadges: l,
						userId: a.id
					})), C(e.badge) && n ? s = await Object(c.a)(o(), e.subredditId, n.id, !1) : C(e.badge) || (s = await Object(c.a)(o(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: l,
						userId: a.id
					})), Object(r.a)(t, s.error))
				}
			}, k = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				await n(x(e, !0));
				const r = o().economics.subredditPremium[e];
				if (r && r.status === f.a.Fetched) {
					const o = r.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(w({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(y.d)(b.c.MyBadges)))
				}
			}, S = e => async (t, n, {
				apiContext: o
			}) => {
				const i = n().user.account,
					l = !n().economics.emotes[e],
					c = !n().economics.gifs[e];
				if (i && (l || c)) {
					const [n, l] = await Promise.all([Object(a.b)(o(), e), m(o(), e, i.id)]);
					if (!l.ok) return void Object(r.a)(t, l.error);
					const c = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(l.body, e => {
						e.type === h.a.EmotesPack ? c.emotes.push(e) : e.type === h.a.Giphy && c.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: c
					}))
				}
			}, O = (e, t, n) => async (o, s, {
				apiContext: r
			}) => {
				if (await o(x(e, !0)), n && t) {
					const n = s(),
						r = Object(g.f)(n, e),
						a = Object(v.a)(n, t);
					if (!r[Object(b.d)(a.placement)] && a) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: a
						});
						t && await o(w({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, P = e => async (t, n, {
				apiContext: o
			}) => {
				const {
					wallet: s
				} = await Object(i.c)(o(), e);
				t(Object(y.f)({
					wallet: s
				})), await t(x(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "i", (function() {
				return H
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/omit.js"),
				r = n.n(s),
				a = n("./node_modules/uuid/v4.js"),
				i = n.n(a),
				l = n("./src/config.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/lib/addQueryParams/index.ts"),
				m = n("./src/lib/makeActionCreator/index.ts"),
				p = n("./src/lib/sentry/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/gold/constants.ts"),
				f = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = n("./src/reddit/selectors/gold/productOffers.ts"),
				v = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Gold/ProductOffer.ts"),
				C = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				x = n("./src/reddit/models/Payments/index.ts");
			const w = () => o.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				S = (e, t, n) => async (s, r, {
					gqlContext: a
				}) => {
					const l = i()(),
						c = await Object(j.f)(a(), l, e, t, n);
					if (c.ok) {
						const e = c.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (n) return n.id
					}
					throw new Error((() => o.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, O = (e, t, n, s, r, a) => async (l, c, {
					gqlContext: d
				}) => {
					var u;
					const m = c(),
						b = () => l(Object(f.stripeApiError)(o.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = r === y.c.Premium,
						C = r === y.c.Powerups,
						E = {};
					if (C && a) E.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(g.d)(m, {
							provider: x.b.Stripe
						});
						if (!e) return;
						E.premium = {
							pricePackage: e
						}
					}
					let w, O, P = "";
					try {
						P = await l(S(t, s, E))
					} catch (I) {
						return p.c.captureException(I), void(I.message && l(Object(f.stripeApiError)(I.message)))
					}
					l(Object(f.stripeTokenPending)());
					const N = Object(v.y)(m);
					if (N || (w = await l(Object(f.validateAndCreateStripeToken)(e)), O = Object(v.v)(m), w)) try {
						const t = i()(),
							o = N || O ? w && O ? Object(j.h)(d(), t, P, w.id) : N ? Object(j.j)(d(), t, P, N) : null : Object(j.i)(d(), t, P, w.id),
							r = await o;
						if (!(null == r ? void 0 : r.ok)) return void b();
						const m = r.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void l(Object(f.stripeApiError)(k(m.errors)));
						const {
							ok: p,
							payment: g,
							providerExecution: {
								paymentIntentClientSecret: v
							}
						} = m;
						if (p && g.status === j.a.ActionRequired) {
							const t = await e.confirmCardPayment(v),
								{
									error: n
								} = t;
							if (n) return void(n.message ? l(Object(f.stripeApiError)(n.message)) : b());
							let o;
							if (!(o = N ? await Object(j.e)(d(), i()(), g.id, N) : await Object(j.d)(d(), i()(), g.id, w.id, O)).ok) return void b();
							const s = o.body;
							if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== j.a.Paid) return void b()
						} else if (p && g.status !== j.a.Paid) return void b();
						const y = Object(_.k)(c());
						y && (C && a ? l(D({
							subredditId: a,
							powerupsCount: s,
							user: y,
							isAnonymous: n
						})) : h && l(G({
							user: y
						})))
					} catch (I) {
						p.c.captureException(I), b()
					}
				}, P = (e, t, n, o, s) => async (r, a, {
					gqlContext: c
				}) => {
					var d;
					const m = a(),
						b = o === y.c.Premium,
						h = o === y.c.Powerups,
						v = {};
					if (h && s) v.powerUps = {
						subredditId: s,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.d)(m, {
							provider: x.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let C = "";
					try {
						C = await r(S(e, n, v))
					} catch (P) {
						return p.c.captureException(P), P.message && r(Object(f.paypalApiError)(P.message)), null
					}
					const E = l.a.redditUrl;
					let O = {
						_o: E,
						o: C,
						pt: o
					};
					h && s && (O = {
						...O,
						r: s
					});
					try {
						const e = Object(u.a)(`${E}/framedModal/paypal-finish`, {
								...O,
								s: !0
							}),
							o = Object(u.a)(`${E}/framedModal/paypal-finish`, O),
							l = i()(),
							m = await Object(j.g)(c(), l, C, e, o);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (d = null == e ? void 0 : e.errors) || void 0 === d ? void 0 : d.length) return r(Object(f.paypalApiError)(k(e.errors))), null;
							const o = Object(_.k)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === j.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && o) return s ? r(D({
									subredditId: s,
									powerupsCount: n,
									user: o,
									isAnonymous: t
								})) : b && r(G({
									user: o
								})), null
							}
						}
					} catch (P) {
						p.c.captureException(P)
					}
					return r(Object(f.paypalApiError)(w())), null
				}, N = (e, t) => async (n, o, {
					gqlContext: s
				}) => {
					var r;
					try {
						const o = i()(),
							a = await Object(j.c)(s(), o, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (r = null == e ? void 0 : e.errors) || void 0 === r ? void 0 : r.length) return n(Object(f.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						p.c.captureException(a)
					}
					return n(Object(f.paypalApiError)(w())), !1
				}, I = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await Object(j.l)(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(f.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: o
							} = n.data.identity, s = o.map(e => r()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(s)), s[0] && e(Object(f.selectSavedCard)(s[0].cardId))
						} else e(Object(f.stripeApiError)(o.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (s) {
						p.c.captureException(s), e(Object(f.savedCardsSuccess)([]))
					}
				}, A = e => async (t, n, {
					gqlContext: o
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await Object(j.k)(o(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: s
							} = n.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(k(s))
					} catch (s) {
						p.c.captureException(s)
					}
				}, T = Object(m.a)(h.O), M = Object(m.a)(h.P), L = Object(m.a)(h.Q), R = e => async (t, n) => {
					await t(T(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, B = (e, t, n) => async (s, r, {
					gqlContext: a
				}) => {
					s(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const r = await Object(j.b)(a(), e);
						if (r.ok) {
							const e = r.body,
								{
									errors: o
								} = e.data.cancelEconRecurringPayment;
							if (o && o.length) return void s(R(o[0].message));
							s(L({
								subredditId: t,
								allocatedAt: n
							}))
						} else s(R(o.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), s(R(o.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, F = Object(m.a)(h.S), D = e => async (t, n) => {
					t(F(e)), t(Object(C.l)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(E.g)(c.a.ECON_POWERUPS_PURCHASE)), t(Object(E.h)(c.a.ECON_POWERUPS_SUCCESS))
				}, U = Object(m.a)(h.W), G = ({
					user: e
				}) => async t => {
					await t(Object(C.n)(!0)), t(U({
						user: e
					}))
				}, H = Object(m.a)(h.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "a", (function() {
				return T
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/Gold/ProductOffer.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				c = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = n("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = n("./src/redditGQL/operations/ProductOffers.json");
			var b = n("./src/reddit/selectors/gold/productOffers.ts"),
				h = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(s.a)(h.db),
				g = Object(s.a)(h.cb),
				v = Object(s.a)(h.bb),
				_ = Object(s.a)(h.Z),
				y = Object(s.a)(h.Y),
				C = Object(s.a)(h.X),
				E = Object(s.a)(h.Eb),
				j = Object(s.a)(h.Cb),
				x = Object(s.a)(h.Db),
				w = Object(s.a)(h.Hb),
				k = Object(s.a)(h.Gb),
				S = Object(s.a)(h.Fb),
				O = e => async t => {
					t(Object(a.f)({
						kind: l.b.Error,
						duration: a.a,
						text: e
					}))
				}, P = (e, t) => async n => {
					e === i.c.Premium ? n(I()) : t && n(N(e, t))
				}, N = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					const a = s();
					if (!Object(b.i)(a, {
							subredditId: t,
							type: e
						})) {
						n(f());
						try {
							const o = await ((e, t, n, o) => Object(d.a)(e, {
								...p,
								variables: {
									subredditId: t,
									types: n,
									includeGlobal: o
								}
							}))(r(), t, [e], !0);
							if (o.ok) {
								const e = o.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const s = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: s || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = o.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							n(v(e)), n(O(e))
						}
					}
				}, I = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a;
					const l = i.c.Premium;
					e(_());
					try {
						const t = await ((e, t) => Object(d.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(n(), [l]);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(y({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (c) {
						const t = c.message ? c.message : o.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						r.c.captureMessage(t), e(C(t)), e(O(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a, i;
					e(E());
					try {
						const t = await (e => Object(d.a)(e, m))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(x({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (l) {
						r.c.captureException(l);
						const t = l.message ? l.message : o.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(j(t)), e(O(t))
					}
				}, T = e => async (t, n, {
					gqlContext: s
				}) => {
					var r;
					t(w(e));
					try {
						const n = await Object(c.b)(s(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const o = n.body,
								{
									errors: s
								} = o.data.cancelEconRecurringPayment;
							if (null == s ? void 0 : s.length) throw new Error(s[0].message);
							t(S({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (r = a.message) && void 0 !== r ? r : o.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(k(e)), t(O(e)), !1
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return c
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return u
			})), n.d(t, "postalCodeInput", (function() {
				return m
			})), n.d(t, "cardNameEmpty", (function() {
				return p
			})), n.d(t, "cardElementChange", (function() {
				return b
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return f
			})), n.d(t, "stripeApiError", (function() {
				return g
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), n.d(t, "paypalApiError", (function() {
				return _
			})), n.d(t, "toggleRememberCard", (function() {
				return y
			})), n.d(t, "selectSavedCard", (function() {
				return C
			})), n.d(t, "_deleteSavedCard", (function() {
				return E
			})), n.d(t, "deleteSavedCard", (function() {
				return j
			})), n.d(t, "savedCardsPending", (function() {
				return x
			})), n.d(t, "savedCardsSuccess", (function() {
				return w
			})), n.d(t, "loadSavedCards", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/sentry/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				l = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = Object(r.a)(i.B),
				d = Object(r.a)(i.w),
				u = Object(r.a)(i.b),
				m = Object(r.a)(i.y),
				p = Object(r.a)(i.a),
				b = Object(r.a)(i.E),
				h = Object(r.a)(i.G),
				f = Object(r.a)(i.F),
				g = Object(r.a)(i.D),
				v = e => async (t, n) => {
					const s = n(),
						r = Object(l.h)(s),
						a = Object(l.l)(s),
						{
							token: i,
							error: c
						} = await e.createToken({
							name: r,
							address_zip: a
						});
					if (r.trim()) {
						if (!c && i) return i;
						t(f(c || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, _ = Object(r.a)(i.x), y = Object(r.a)(i.H), C = Object(r.a)(i.C), E = Object(r.a)(i.g), j = e => async (t, n, {
					apiContext: o
				}) => {
					t(E(e));
					try {
						const t = await Object(a.a)(o(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (r) {
						s.c.captureException(r)
					}
				}, x = Object(r.a)(i.z), w = Object(r.a)(i.A), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(x());
					try {
						const t = await Object(a.b)(n());
						if (t.error) throw new Error(t.error.type);
						const o = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(o)), o[0] && e(C(o[0].cardId))
					} catch (o) {
						s.c.captureException(o), e(w([]))
					}
				}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(o.a)(r.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), {
						subredditId: e
					});
					r.ok && t(a({
						subredditId: e,
						...r.body
					}))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var o = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				r = "INCONTEXT__MUTED",
				a = Object(o.a)(s),
				i = Object(o.a)(r)
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/extractQueryParams/index.ts"),
				i = n("./src/lib/filterQueryParams/index.ts"),
				l = n("./src/lib/pageTitle.ts"),
				c = n("./src/reddit/actions/chat/userSettings.ts"),
				d = n("./src/reddit/actions/accountGender/index.ts"),
				u = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				m = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var p = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				b = n("./src/reddit/actions/externalAccount.ts"),
				h = n("./src/reddit/actions/gold/powerups.ts"),
				f = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/config.ts"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			n("./src/reddit/models/Toast/index.ts");
			var C = n("./src/reddit/selectors/notificationPrefs.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/notifications/constants.ts");
			const x = Object(f.a)(j.c),
				w = Object(f.a)(j.b),
				k = Object(f.a)(j.a),
				S = () => async (e, t, {
					apiContext: n
				}) => {
					const o = t();
					if (!Object(E.k)(o)) return;
					const s = Object(C.b)(o),
						a = Object(C.a)(o);
					if (s || a) return;
					e(x());
					const i = await (e => Object(_.a)(e, {
						endpoint: Object(y.a)(`${v.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: r.ib.GET
					}))(n());
					if (i.ok) {
						const t = (e => ({
							broadcastFollower: !!e.broadcast_follower,
							broadcastRecommendation: !!e.broadcast_recommendation,
							chatMessages: !!e.chat_message,
							chatRequests: !!e.chat_request,
							commentReplies: !!e.comment_reply,
							communityRecommendations: !!e.subreddit_recommendation,
							liveEvent: !!e.live_event,
							newPinnedPost: !!e.new_pinned_post,
							postFlairAdded: !!e.post_flair_added,
							postReplies: !!e.post_reply,
							privateMessages: !!e.private_message,
							threadReplies: !!e.thread_replies,
							topLevelComment: !!e.top_level_comment,
							trendingPosts: !!e.lifecycle_post_suggestions,
							upvotedComments: !!e.upvote_comment,
							upvotedPosts: !!e.upvote_post,
							userFlairAdded: !!e.user_flair_added,
							usernameMentions: !!e.username_mention,
							userNewFollowers: !!e.user_new_follower
						}))(i.body);
						e(w({
							preferences: t
						}))
					} else e(k(i.error))
				};
			Object(f.a)(j.f), Object(f.a)(j.e), Object(f.a)(j.d);
			var O = n("./src/reddit/actions/platform.ts"),
				P = n("./src/reddit/actions/preferences.ts"),
				N = n("./src/reddit/actions/profile/index.ts"),
				I = n("./src/reddit/actions/subredditSettings.ts"),
				A = n("./src/reddit/actions/users.ts"),
				T = n("./src/reddit/constants/parameters.ts"),
				M = n("./src/reddit/helpers/externalAccount/index.tsx"),
				L = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				R = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				B = n("./src/reddit/selectors/externalAccount.ts");
			const F = e => async (t, n) => {
				await t(Object(A.t)());
				const f = [t(Object(P.x)(!0)), t(Object(p.a)())];
				n().economics.paymentSystems.status === R.a.NotFetched && f.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(m.d)());
					const o = await Object(u.d)(n());
					o.ok ? e(Object(m.c)(o.body)) : e(Object(m.b)({
						error: o.error
					}))
				})())), await Promise.all(f); {
					const e = n();
					if (!Object(E.K)(e)) return Object(L.a)(t, e)
				}
				const {
					page: v = r.Zb.Account
				} = e.params;
				if (v === r.Zb.Gold) return void t(Object(s.c)("/settings/premium"));
				const _ = [];
				v === r.Zb.Profile && (_.push(t(Object(N.a)())), _.push(t(Object(I.g)()))), v === r.Zb.Account && (_.push(t(Object(b.o)())), _.push(t(Object(d.b)()))), v === r.Zb.Notifications && _.push(t(S())), v !== r.Zb.Privacy && v !== r.Zb.Messaging || _.push(t(Object(c.b)())), v === r.Zb.Premium && (_.push(t(Object(N.a)())), _.push(t(Object(h.n)(!0)))), await Promise.all(_); {
					const e = n(),
						r = e.platform.currentPage,
						{
							url: l
						} = r,
						c = Object(a.a)(l).get(T.d);
					if (c && (t(Object(s.c)(Object(i.a)(l, [T.d]))), Object(B.a)(e))) {
						const e = o.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(g.f)({
							text: e
						})), Object(M.b)(c)
					}
				}
				t(Object(O.l)({
					title: Object(l.k)()
				}))
			}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(a.b, {
				className: Object(r.a)(e.className, l.a.container, e.text.length >= e.maxChars ? l.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-CommunitySettings-ModPnSettings",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-CommunitySettings-ModPnSettings").then(n.bind(null, "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				l = n.n(i),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: l.a.container
			}, s.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: l.a.close
			}, s.a.createElement(c.b, null)), s.a.createElement(c.i, null, s.a.createElement("h2", {
				className: l.a.headerText
			}, e.headerText)), s.a.createElement(c.l, null, e.message && s.a.createElement("p", {
				className: l.a.text
			}, e.message), e.children && s.a.createElement("div", {
				className: l.a.text
			}, e.children), s.a.createElement("div", {
				className: l.a.buttonWrapper
			}, e.cancelText && s.a.createElement(a.n, {
				className: l.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), s.a.createElement(a.k, {
				className: l.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			const {
				fbt: r
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, r._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, n) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, n) {
			"use strict";
			var o, s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/localizeCurrency/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				u = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/hooks/useLocale.ts"),
				p = n("./src/reddit/selectors/crypto/points.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(o || (o = {}));
			const h = (e, t) => {
					if (e) switch (t) {
						case o.Monthly:
							return b.fbt._("{price}/mo", [b.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				f = (e, t) => {
					if (e) switch (t) {
						case o.Monthly:
							return b.fbt._("{price} / month", [b.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var g = n("./src/reddit/components/Economics/Price/index.m.less"),
				v = n.n(g);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				subredditId: e,
				pointPrice: t
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(d.a, {
				className: v.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: s,
					subredditId: d
				} = e, b = Object(m.a)(), g = Object(a.e)(e => Object(p.b)(e, d)), C = e.dollarPrice && Object(l.b)(e.dollarPrice, {
					locale: b,
					forceDecimals: !0
				}), E = e.tokenPrice && g && Object(c.a)(Object(u.b)(e.tokenPrice, null == g ? void 0 : g.displayConversion)) + (n ? "" : " " + g.name);
				if (!C && !E) return null;
				const j = s ? o.Monthly : o.Once;
				return r.a.createElement("span", {
					className: Object(i.a)(t, v.a.price)
				}, C && E ? _._("{dollar-price} or {point-price}", [_._param("dollar-price", h(C, j)), _._param("point-price", r.a.createElement(y, {
					subredditId: d,
					pointPrice: h(E, j)
				}))], {
					hk: "2Gif0l"
				}) : C ? f(C, j) : E ? r.a.createElement(y, {
					subredditId: d,
					pointPrice: f(E, j)
				}) : null)
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, n) {
			e.exports = {
				bling1: "_3bFpAdmzeju5Ql4apA72Mz",
				pulse: "_14AnDN_X0RSUfV9D1Pe9X9",
				bling2: "_-8SkYF0AWUhZMShvTAty8",
				bling3: "_33JifCWcX_crkurifB5pzo",
				container: "_3gI6KjxK9w-BF4adKznqm6",
				crown: "_2UUIJaaZ6FDtWk-CQ_bAJF",
				crownTilt: "m3mBh304aV8eRhpVYDtv",
				crownImg: "_3UjxD8eArSGPOK9ydFdB66",
				crownTiltImg: "_335XoNCIgdnw1NeVMSD3YB",
				defaultIcon: "_1UJ_7ZuaT1wJZzUY6CLslm",
				icon: "_27dkKf4zi-Ny4-FV0XKx0d",
				largeContainer: "_2vtPk3WzODfPV6T2uKOi9x",
				largeBling1: "tQV0dex-2wW9l95VW59ym",
				largeBling2: "_22o1BzEAX778WumBKRfDae",
				largeBling3: "MqH9i4M4OAiAmvS-AdBJx",
				largeCrown: "_30sWCOTB9B8ZfsCDuOoMvQ",
				largeCrownImg: "_1hUveqwJI6eda9EpmMvUJI",
				largeDefaultIcon: "_3_OgvcHTKNX0og_Fw-oHOc",
				largeIcon: "_18B8fdJn2VAl1XHi5AdcVc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				i = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				l = n("./src/reddit/icons/svgs/Crown/index.tsx"),
				c = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				u = n.n(d);
			const m = {
				regular: {
					bling1: u.a.bling1,
					bling2: u.a.bling2,
					bling3: u.a.bling3,
					container: u.a.container,
					crown: u.a.crown,
					crownImg: u.a.crownImg,
					defaultIcon: u.a.defaultIcon,
					icon: u.a.icon
				},
				large: {
					bling1: u.a.largeBling1,
					bling2: u.a.largeBling2,
					bling3: u.a.largeBling3,
					container: u.a.largeContainer,
					crown: u.a.largeCrown,
					crownImg: u.a.largeCrownImg,
					defaultIcon: u.a.largeDefaultIcon,
					icon: u.a.largeIcon
				}
			};

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					n = m[e.size || "regular"],
					o = e.subreddit && e.subreddit.primaryColor;
				return s.a.createElement("div", {
					className: Object(r.a)(n.container, e.className)
				}, e.subreddit ? s.a.createElement("img", {
					className: n.crownImg,
					src: Object(c.a)(e.subreddit, "Crown.gif")
				}) : s.a.createElement(l.a, {
					className: n.crown
				}), s.a.createElement(a.a, {
					className: n.bling1
				}), s.a.createElement(a.a, {
					className: n.bling2
				}), s.a.createElement(a.a, {
					className: n.bling3
				}), t ? s.a.createElement("img", {
					className: n.icon,
					src: t,
					style: {
						backgroundColor: o
					}
				}) : s.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: o
					}
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(c.b)(e, t)
			});
			t.a = Object(r.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const o = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${i.a.assetPath}/${o}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(l.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_1ujAdmx9p1ZtDs5hGNKqxa",
				leftSection: "_1HtpEFt_H9-TSPUAO40Z-e",
				sectionHeader: "_2kwF36BsSdAp4SHuoiGycG",
				content: "_1AoGRYkiuWDGUrnKhaEAsU",
				rightSection: "_2thtUlDB-iI-fgl_zwElV2"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less": function(e, t, n) {
			e.exports = {
				bullet: "_2UPSb1bt_AsmpAwyZ46B38",
				circle: "_2_70m35EVFz3WnPe2CwYaG",
				number: "_3LihX-GKXER0sZAd9F9_Id"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				l = n.n(i);

			function c(e) {
				const {
					index: t,
					children: n,
					color: o
				} = e, i = o && Object(a.a)(o, void 0, r.b.white);
				return s.a.createElement("div", {
					className: l.a.bullet
				}, s.a.createElement("div", {
					className: l.a.circle,
					style: {
						backgroundColor: o,
						color: i
					}
				}, s.a.createElement("span", {
					className: l.a.number
				}, t)), s.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/qrcode/lib/browser.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class c extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await s.a.toDataURL(this.props.url, {
						color: {
							dark: Object(l.a)(this.props).titleText,
							light: Object(l.a)(this.props).body
						},
						margin: 0,
						scale: this.props.scale || 3
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e && a.a.createElement("img", {
						src: e,
						className: this.props.className
					})
				}
			}
			t.a = Object(i.a)(c)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				l = e => e.alwaysShowChildren ? s.a.createElement(s.a.Fragment, null, e.children) : null;
			t.b = Object(r.a)({
				ErrorComponent: l,
				getComponent: () => Object(a.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: l
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return O
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				l = n.n(i),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends o.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...o
							}
						} = this;
						d.a.publish(c.a, o, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					l()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					l()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(r.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.b)(e, t),
					o = Object(f.F)(e, t);
				return {
					comment: n,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var v = Object(r.b)(() => Object(a.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const _ = (e, t) => {
				const n = Object(h.b)(e, t),
					o = Object(f.F)(e, t);
				return {
					comment: n,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var y = Object(r.b)(() => Object(a.a)(_, e => e))(e => s.a.createElement(p, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var C = Object(r.b)(() => Object(a.c)({
					subreddit: f.Q
				}))(e => s.a.createElement(p, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				E = n("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const t = Object(E.a)(),
					n = Object(o.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var x = e => {
				const t = Object(E.a)(),
					n = Object(o.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var w = e => {
				const t = Object(E.a)(),
					n = Object(o.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var k = Object(r.b)(() => Object(a.c)({
				subreddit: f.Q
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var S = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.I)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var O = Object(r.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.Q)(e, {
					subredditId: t
				}) : null
			}))(e => s.a.createElement(p, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
			const d = {
				[a.V.BEST]: "best",
				[a.V.HOT]: "hot",
				[a.V.NEW]: "new",
				[a.V.CONTROVERSIAL]: "controversial",
				[a.V.TOP]: "top",
				[a.V.RISING]: "rising",
				[a.V.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return d[n] ? s.a.createElement(i.a, {
					name: d[n],
					isFilled: t,
					className: Object(r.a)(e, c.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/Loader/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_1Jx7v9Z1D1htyYeKixW2Gx"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				iconRight: "_2tFYRyhxfQeK2QFUlYSYz0",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/HumanDate/index.tsx"),
				u = n("./src/reddit/contexts/InsideOverlay.tsx"),
				m = n("./src/reddit/endpoints/profile/info.ts"),
				p = n("./src/reddit/helpers/karma.ts"),
				b = n("./src/reddit/helpers/trackers/followers.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/tooltip.ts"),
				y = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				E = n.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = l.a.div("Container", E.a),
				w = l.a.div("Body", E.a),
				k = l.a.h5("Title", E.a),
				S = l.a.span("Label", E.a);
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: n,
						tooltip: o,
						tooltipId: s,
						className: a
					} = this.props, i = s && o ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return r.a.createElement(x, {
						className: a
					}, r.a.createElement(k, null, n), r.a.createElement(w, null, e, r.a.createElement(S, j({
						key: "label"
					}, i), t)), s && o && r.a.createElement(y.c, {
						caretOnTop: !0,
						tooltipId: s
					}, o))
				}
			}
			var P = Object(a.b)(null, e => ({
					toggleTooltip: t => e(Object(_.h)({
						tooltipId: t
					}))
				}))(Object(u.b)(O)),
				N = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				I = n.n(N);
			const A = Object(i.a)(g.j, (e, {
					profileName: t
				}) => Object(v.tb)(e, t), (e, t) => ({
					karma: {
						...m.a,
						...null == t ? void 0 : t.karma,
						total: Object(p.a)(t)
					},
					enableFollowers: !!(null == t ? void 0 : t.enableFollowers),
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				T = l.a.div("Container", I.a);

			function M(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const L = e => {
				const t = Object(h.a)(),
					n = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					a = e.isOwnProfile ? r.a.createElement(r.a.Fragment, null, Object(c.b)(e.subscribers, {
						displayFull: !0
					}), r.a.createElement(f.a, {
						name: "right",
						className: I.a.iconRight
					})) : Object(c.b)(e.subscribers, {
						displayFull: !0
					}),
					i = r.a.createElement(P, {
						className: e.highlightClassName,
						icon: r.a.createElement(f.a, {
							name: "user",
							isFilled: !0,
							className: I.a.icon,
							key: "followers"
						}),
						title: o.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: a
					});
				return e.isOwnProfile ? r.a.createElement("a", {
					href: `/user/${e.profileName}/followers`,
					onClick: n
				}, i) : i
			};
			t.a = Object(a.b)(A)(Object(u.b)(e => {
				const {
					karma: t,
					enableFollowers: n,
					profileCreated: s,
					isOverlay: a,
					subscribers: i,
					className: l,
					highlightClassName: u
				} = e, p = {
					...m.a,
					...t
				}, b = M(a, "karma"), h = M(a, "cakeday"), g = `${o.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[o.fbt._plural(p.fromPosts,"number",Object(c.b)(p.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${o.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[o.fbt._plural(p.fromComments,"number",Object(c.b)(p.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${o.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[o.fbt._plural(p.fromAwardsReceived,"number",Object(c.b)(p.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${o.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[o.fbt._plural(p.fromAwardsGiven,"number",Object(c.b)(p.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return r.a.createElement(T, {
					className: l
				}, r.a.createElement(P, {
					className: u,
					icon: r.a.createElement(f.a, {
						name: "karma",
						isFilled: !0,
						className: I.a.icon,
						key: "karma"
					}),
					label: Object(c.b)(p.total, {
						displayFull: !0
					}),
					title: o.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: b,
					tooltip: g
				}), r.a.createElement(P, {
					className: u,
					icon: r.a.createElement(f.a, {
						name: "cake",
						isFilled: !0,
						className: I.a.icon,
						key: "cakeDay"
					}),
					label: r.a.createElement(d.a, {
						seconds: s,
						showDay: !0
					}),
					title: o.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: h,
					tooltip: r.a.createElement(d.d, {
						seconds: s
					})
				}), n && i > 0 && r.a.createElement(L, {
					highlightClassName: u,
					isOwnProfile: !!e.isOwnProfile,
					profileName: e.profileName,
					subscribers: i
				}))
			}))
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return L
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				l = n.n(i),
				c = r.a.div("dynamicTwoCol", l.a),
				d = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				p = n.n(m),
				b = n("./src/config.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				C = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				E = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				x = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				w = n.n(x),
				k = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				S = n.n(k);
			var O = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: n,
					isDeletingBanner: o,
					isDeletingIcon: r,
					isEmployee: a,
					isGold: i,
					isNSFW: l,
					isOwnProfile: c,
					onClickSnoovatar: d,
					onDeleteBanner: u,
					onDeleteIcon: m,
					profileIcon: p,
					title: x,
					userCreated: k,
					username: O,
					url: P
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(E.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: l,
					username: O,
					isDeletingBanner: !!o,
					onDeleteBanner: u
				}), s.a.createElement("div", {
					className: w.a.SnooIconWrapper
				}, c || !p || l ? s.a.createElement(y.a, {
					iconUrl: p,
					isNSFW: l,
					userName: O,
					isProfileIdCard: !0
				}) : s.a.createElement(v.b, {
					href: p
				}, s.a.createElement(y.a, {
					iconUrl: p,
					isNSFW: l,
					userName: O,
					isProfileIdCard: !0
				})), t && !n && (r ? s.a.createElement(g.a, {
					sizePx: 20,
					className: S.a.loadingIcon
				}) : s.a.createElement(_.a, {
					name: "close",
					className: S.a.closeIcon,
					onClick: m
				}))), !t && c && s.a.createElement(f.a, {
					to: "/settings/profile",
					className: w.a.settingsLink
				}, s.a.createElement(_.a, {
					name: "settings",
					className: S.a.settingsIcon
				})), x && s.a.createElement("h4", {
					className: w.a.userTitle
				}, x), s.a.createElement(j.a, {
					className: w.a.userName,
					username: O,
					userCreated: k,
					url: P
				}), a && s.a.createElement(_.a, {
					name: "admin",
					isFilled: !0,
					className: w.a.adminIcon,
					title: h.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: h.fbt._("{username} has Reddit Premium", [h.fbt._param("username", O)], {
						hk: "3Fylv"
					}),
					href: `${b.a.redditUrl}/premium`
				}, s.a.createElement(_.a, {
					name: "premium",
					isFilled: !0,
					className: w.a.premiumIcon
				})), c && s.a.createElement(C.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				P = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var N = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDefaultIcon: o,
					isDeletingBanner: r,
					isDeletingIcon: a,
					isEmployee: i,
					isGold: l,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: u,
					onDeleteBanner: m,
					onDeleteIcon: p,
					prefersReducedAnimations: b,
					profileIcon: h,
					snoovatarUrl: f,
					title: g,
					userCreated: v,
					username: _,
					url: y
				}) => f ? s.a.createElement(P.a, {
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDeletingBanner: r,
					isEmployee: i,
					isGold: l,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: u,
					onDeleteBanner: m,
					prefersReducedAnimations: b,
					snoovatarUrl: f,
					title: g,
					userCreated: v,
					username: _,
					url: y
				}) : s.a.createElement(O, {
					bannerBackgroundImage: e,
					editMode: n,
					isDefaultIcon: o,
					isDeletingBanner: r,
					isDeletingIcon: a,
					isEmployee: i,
					isGold: l,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: u,
					onDeleteBanner: m,
					onDeleteIcon: p,
					profileIcon: h,
					title: g,
					userCreated: v,
					username: _,
					url: y
				}),
				I = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const A = r.a.wrapped(a.b, "Widget", p.a),
				T = r.a.div("Description", p.a),
				M = r.a.wrapped(c, "Actions", p.a);
			class L extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: n
					} = this.props;
					return e ? s.a.createElement(d.a, {
						topAwardIcon: t,
						recentAwardings: e,
						username: n
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						className: o,
						footer: r,
						isEmployee: a,
						isGold: i,
						isNSFW: l,
						isOverlay: c,
						isOwnProfile: d,
						profileIcon: m,
						publicDescription: p,
						snoovatarUrl: b,
						title: h,
						url: f,
						userCreated: g,
						username: v,
						isDefaultIcon: _,
						isDeletingIcon: y,
						isDeletingBanner: C,
						onClickSnoovatar: E,
						onDeleteIcon: j,
						onDeleteBanner: x,
						prefersReducedAnimations: w,
						editMode: k,
						isNftPreview: S
					} = this.props;
					return S ? s.a.createElement(s.a.Fragment, null, s.a.createElement(I.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDeletingBanner: C,
						isEmployee: a,
						isGold: i,
						isNSFW: l,
						isOwnProfile: !!d,
						onClickSnoovatar: E,
						onDeleteBanner: x,
						prefersReducedAnimations: w,
						snoovatarUrl: b,
						title: h,
						userCreated: g,
						username: v,
						actions: e,
						url: f,
						footer: r
					})) : s.a.createElement(A, {
						className: o
					}, s.a.createElement(N, {
						bannerBackgroundImage: S ? void 0 : t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDefaultIcon: _,
						isDeletingBanner: C,
						isDeletingIcon: y,
						isEmployee: a,
						isGold: i,
						isNSFW: l,
						isOwnProfile: !!d,
						onClickSnoovatar: E,
						onDeleteBanner: x,
						onDeleteIcon: j,
						prefersReducedAnimations: w,
						profileIcon: m,
						title: h,
						userCreated: g,
						username: v,
						url: f,
						snoovatarUrl: b
					}), s.a.createElement(T, null, p), s.a.createElement(u.a, {
						isOwnProfile: !!d,
						profileName: v,
						isOverlay: c
					}), this.renderAwardedLastMonth(), s.a.createElement(M, null, e), r)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				u = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = n.n(u);
			class p extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async e => {
						const t = await Object(a.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(t, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: n,
						isNSFW: s,
						isProfileIdCard: a,
						userName: d
					} = this.props, {
						isUpdating: u
					} = this.state, p = r.a.createElement(l.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: s,
						userName: d,
						isProfileIcon: !0
					});
					return t && Object(c.e)(t) === d ? r.a.createElement(i.a, {
						altText: o.fbt._("{userName} avatar image", [o.fbt._param("userName", d)], {
							hk: "1LJxYE"
						}),
						className: e,
						isProfileCard: a,
						isLoading: u,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(d.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				l = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: n,
				post: i,
				share: h
			}) => {
				const v = Object(d.b)(),
					_ = Object(a.d)(),
					y = i && i.id,
					C = i && i.voteState;
				let E = null;
				y || (E = e ? "user_hovercard" : "profile_overview");
				const j = Object(s.useCallback)(() => v(Object(m.f)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return r.a.createElement(u.s, {
					onClick: () => {
						n ? (v(m.g), y && C === b.a.notVoted && _(Object(l.db)(y))) : j();
						const e = n ? "postify" : "copy";
						_(Object(c.b)({
							clickSource: E,
							share: h,
							source: e
						}))
					},
					className: Object(o.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(o.a)({
						[f.a.shirtIcon]: !n,
						[f.a.avatarPostButtonShirtIcon]: n
					})
				}), g._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EcFK4dFoEcSJ97pB5pOOU",
				footer: "_1Kgb3W_zNnEh31kMBVmE8P",
				inner: "_3y5mp8nbvcVpPPsIMMPy7I",
				cardAnimation: "F8BKwLEVngSa9Mnbhrh5O",
				badgeImage: "_1lfIyNaIhBqLPhINtdgyar",
				nftIcon: "_2QX-qTkkdeCQTZc8F_jzSH",
				cutout: "_31NukdfV7zdnSSZAdgi4tH",
				nftIconImage: "_3EGHrS2jJIdFIfFHkrelY9",
				snoovatarImage: "_2eA2Gqtco1MTIW8ciy89hm",
				username: "_1jzwWcdNR0oe0D59lSILCw",
				subUsername: "_1LL19cRuUqTadh1-miEt-t",
				snoovatarButton: "_1BpuPYvrp51NlrYGgxbx9D",
				highlight: "_1IKngTFY9eM7GVrB7cJAYY",
				actions: "_1Xz5f0CORkQlgzeYxV3itr"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/LottieAnimation/index.tsx"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less"),
				b = n.n(p);
			const h = /(?:\/|-)nft-([a-z0-9]+)-([a-z]+)(?:-headshot)?\.(?:png|svg)/i;

			function f(e) {
				return !!e && h.test(e)
			}
			t.a = ({
				isEmployee: e,
				isGold: t,
				isNSFW: n,
				snoovatarUrl: p,
				title: f,
				userCreated: g,
				username: v,
				url: _,
				className: y,
				actions: C,
				footer: E
			}) => {
				const {
					badge: j,
					url: x
				} = Object(o.useMemo)(() => (function(e) {
					const t = h.exec(e) || ["", "", ""],
						n = t[1],
						o = t[2];
					return {
						id: n,
						url: "testing" === o ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${n}`,
						badge: o
					}
				})(p), [p]), w = Object(r.e)(c.X);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(b.a.container, y)
				}, s.a.createElement(l.a, {
					className: b.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${a.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: b.a.inner
				}, "testing" !== j && s.a.createElement("img", {
					alt: `${j} NFT`,
					className: b.a.badgeImage,
					src: `${a.a.assetPath}/img/snoovatars/nft_badge_${j}.svg`
				}), s.a.createElement("img", {
					className: b.a.cutout,
					src: `${a.a.assetPath}/img/snoovatars/hole-cutout-${w?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: x,
					target: "_blank",
					className: b.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: b.a.nftIconImage,
					alt: "View this NFT",
					src: `${a.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: b.a.snoovatarImage,
					src: p,
					alt: "Avatar NFT Image"
				}), s.a.createElement(m.a, {
					isEmployee: e,
					isGold: t,
					isNSFW: n,
					title: f,
					username: v
				}), s.a.createElement(u.a, {
					className: b.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: v,
					userCreated: g,
					url: _
				}), s.a.createElement(d.a, {
					className: b.a.highlights,
					highlightClassName: b.a.highlight,
					profileName: v,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: b.a.actions
				}, C))), s.a.createElement("div", {
					className: Object(i.a)(b.a.footer, y)
				}, E))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, n) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = a.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: o,
					text: a,
					tooltipContentClass: i,
					...d
				} = e;
				return s.a.createElement("div", c({}, d, {
					className: Object(r.a)(l.a.container, n)
				}), a ? s.a.createElement("div", {
					className: Object(r.a)(l.a.tooltip, i, o ? l.a.below : l.a.above)
				}, a) : null, t)
			}, "HoverTooltip", l.a)
		},
		"./src/reddit/components/Settings/AccountForm.m.less": function(e, t, n) {
			e.exports = {
				Trash: "_2UoJFO4kX93xqtJJK4wsZl",
				trash: "_2UoJFO4kX93xqtJJK4wsZl",
				DeactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				deactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				DeactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				deactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				BetaTestsHeading: "_2Y2Uj5LLPO97ua8VvJAejj",
				betaTestsHeading: "_2Y2Uj5LLPO97ua8VvJAejj",
				"m-responsive": "njsaYJtS0A-2XLGcAVIju",
				mResponsive: "njsaYJtS0A-2XLGcAVIju",
				InBetaToggle: "_1gdGmpEa4xqfXwItzFewwq",
				inBetaToggle: "_1gdGmpEa4xqfXwItzFewwq",
				InRedesignBetaToggle: "_2HkX3D1t3uo8khrlDewaew",
				inRedesignBetaToggle: "_2HkX3D1t3uo8khrlDewaew",
				ResponsiveOverlay: "_1MhsFh2a0lc8OAUe2A5s8F",
				responsiveOverlay: "_1MhsFh2a0lc8OAUe2A5s8F",
				googleDisconnectIFrame: "_1uIm6vzmmcoWDwpVSe_t3N"
			}
		},
		"./src/reddit/components/Settings/AccountPrefsSection/index.m.less": function(e, t, n) {
			e.exports = {
				tertiaryBtn: "_3yDGs2XJxcsMFCZLDmw61k",
				Link: "_2R-Jk79aNos6SpoPdlllMb",
				link: "_2R-Jk79aNos6SpoPdlllMb",
				countryDropdown: "_1o8Uv8PjcXASO1u-BVPYG4",
				languageSelector: "_3AYy21_KSAP1MmLzh_z5Rz",
				betaLabel: "_2KFJx8Dhh1o1u0Xb8e7NuD"
			}
		},
		"./src/reddit/components/Settings/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				TwitterIcon: "y6CoOX8JxvJY0Kl9fvx8O",
				twitterIcon: "y6CoOX8JxvJY0Kl9fvx8O",
				AppleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				appleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				GoogleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				googleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				LoadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				loadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				ConnectApple: "TAF33bKwRX0N0jqZED4G5",
				connectApple: "TAF33bKwRX0N0jqZED4G5",
				ConnectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				connectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				ConnectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				connectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				"m-responsive": "_2CDbVOW43orfPYw-t-nPiq",
				mResponsive: "_2CDbVOW43orfPYw-t-nPiq",
				ConnectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				connectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				ConnectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				connectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				ConnectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				connectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				TextAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				textAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				active: "_3vAfZbL1RYMw8WeC1TpCfV",
				DisconnectButton: "_3YGYMFQnmSavH2Yf3BYPQ1",
				disconnectButton: "_3YGYMFQnmSavH2Yf3BYPQ1",
				Username: "_1Na-ZHbt3YWbfBck8jEjd",
				username: "_1Na-ZHbt3YWbfBck8jEjd",
				ConnectionInfo: "_3IF4vw6Egg85g_ne634Hl_",
				connectionInfo: "_3IF4vw6Egg85g_ne634Hl_"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Settings-CreatePasswordSSOModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Settings-CreatePasswordSSOModal").then(n.bind(null, "./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/Settings/Creator/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1PL-vwvbwULAlKIw_-rp6o",
				tag: "AdxLJ-FF3A2DW8rpMjDNt",
				title: "XzPPDkPAIQWYbDf1sDeLq"
			}
		},
		"./src/reddit/components/Settings/Creator/StripeConnect/index.m.less": function(e, t, n) {
			e.exports = {
				button: "ldUISE1q75VkTpDCvw2QT",
				cta: "_135GEuWAf6THuO7EPL_lA1",
				disclaimer: "_2y2cexvCxDTDYNniIjPLpx",
				icon: "_2b7jOhtXSYQ5sHqTP2vlda",
				legal: "J3oHTng7rwXevhpG9krPI",
				legalLink: "_1cRLUcu6PFsJKj-BeYgYy0"
			}
		},
		"./src/reddit/components/Settings/Creator/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2U2Xb0AtotCKvoU6HPwO2y"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2VsAK7m6JTJitCSeSvirtt",
				container: "_2VsAK7m6JTJitCSeSvirtt",
				HeaderText: "kAxpnDHCzK52N-knLlhM1",
				headerText: "kAxpnDHCzK52N-knLlhM1",
				Close: "_3BQ70VJHQaBkt1OQUrZgN",
				close: "_3BQ70VJHQaBkt1OQUrZgN",
				PrimaryButton: "_29VAKmRm7MJtgmyN_D683I",
				primaryButton: "_29VAKmRm7MJtgmyN_D683I",
				SecondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				secondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				ButtonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				buttonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				TextArea: "_3KUxPQl1bIbMalB1ElgkND",
				textArea: "_3KUxPQl1bIbMalB1ElgkND",
				SectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				sectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				H: "_33YDTJ9EBpPYIbuAhgieNI",
				h: "_33YDTJ9EBpPYIbuAhgieNI",
				P: "_2Jyci5nN37DUMdKXr2eRn",
				p: "_2Jyci5nN37DUMdKXr2eRn",
				Input: "_161WTqM53-R3b5XBxClmEs",
				input: "_161WTqM53-R3b5XBxClmEs",
				CheckBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				checkBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				UL: "HulKM8oqJogE46P-pLJi7",
				ul: "HulKM8oqJogE46P-pLJi7"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/Settings/DeactivateModal.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.div("Container", m.a),
				h = p.a.h2("HeaderText", m.a),
				f = p.a.button("Close", m.a),
				g = p.a.wrapped(i.e, "PrimaryButton", m.a),
				v = p.a.wrapped(i.n, "SecondaryButton", m.a),
				_ = p.a.div("ButtonWrapper", m.a),
				y = p.a.textarea("TextArea", m.a),
				C = p.a.h3("SectionLabel", m.a),
				E = p.a.p("H", m.a),
				j = p.a.p("P", m.a),
				x = p.a.wrapped(c.a, "Input", m.a),
				w = p.a.div("CheckBoxWrapper", m.a),
				k = p.a.ul("UL", m.a),
				S = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				O = {
					ios: () => o.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => o.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => o.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => o.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.showConfirm = () => {
						const e = this.state;
						e.password && e.username && e.checkbox && this.setState({
							showConfirm: !0
						})
					}, this.handleSubmit = () => {
						const {
							showConfirm: e,
							...t
						} = this.state;
						this.props.onClick(t), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return r.a.createElement(d.l, null, r.a.createElement(E, null, o.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), r.a.createElement(k, null, r.a.createElement("li", null, o.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), r.a.createElement("li", null, o.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && r.a.createElement("li", null, o.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(S).map((e, t) => r.a.createElement("span", {
							key: e
						}, !!t && ", ", r.a.createElement("a", {
							href: S[e],
							target: "_blank"
						}, O[e] && O[e]()))))), r.a.createElement(C, null, o.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), r.a.createElement(y, {
							placeholder: o.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), r.a.createElement(C, null, o.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), r.a.createElement(x, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: o.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), r.a.createElement(x, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: o.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), r.a.createElement(w, null, r.a.createElement(l.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), r.a.createElement("label", null, o.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), r.a.createElement(_, null, r.a.createElement(v, {
							onClick: e.exit
						}, o.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), r.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, o.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => o.fbt._("{text with URL}", [o.fbt._param("text with URL", t ? r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", r.a.createElement("a", {
						href: S[e],
						target: "_blank"
					}, " ", O[e] && O[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", r.a.createElement("a", {
						href: S[e],
						target: "_blank"
					}, " ", O[e] && O[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => r.a.createElement(d.l, null, r.a.createElement(E, null, o.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), r.a.createElement(j, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
						platform: "android",
						isMobile: !0
					}), this.props.user && this.props.user.hasIOSSubscription && this.renderPremiumNotificationMessage({
						platform: "ios",
						isMobile: !0
					}), this.props.user && this.props.user.hasPaypalSubscription && this.renderPremiumNotificationMessage({
						platform: "paypal",
						isMobile: !1
					}), this.props.user && this.props.user.hasStripeSubscription && this.renderPremiumNotificationMessage({
						platform: "stripe",
						isMobile: !1
					})), r.a.createElement(_, null, r.a.createElement(g, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, o.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => r.a.createElement(d.l, null, r.a.createElement(E, null, o.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), r.a.createElement(_, null, r.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, o.fbt._("Back", null, {
						hk: "1P3x9"
					})), r.a.createElement(g, {
						onClick: this.handleSubmit
					}, o.fbt._("Deactivate", null, {
						hk: "3B1BI6"
					})))), this.state = {
						password: "",
						username: "",
						checkbox: !1,
						feedback: "",
						showConfirm: !1,
						showPremiumNotification: !!e.user && e.user.isGold && e.user.hasGoldSubscription
					}
				}
				render() {
					const e = this.props;
					return r.a.createElement(b, null, r.a.createElement(f, {
						onClick: e.exit
					}, r.a.createElement(d.b, null)), r.a.createElement(d.i, null, r.a.createElement(h, null, o.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(a.a)(P)
		},
		"./src/reddit/components/Settings/DisruptiveComments/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseSensitivity: "_2NAHsYiu5foyH8SQXgLgA1",
				collapseSensitivity: "_2NAHsYiu5foyH8SQXgLgA1"
			}
		},
		"./src/reddit/components/Settings/FPRWarning/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3wX6ugmf6aIVCMSO5EBamI",
				header: "_1uO-ppIAy4G9hITe3aezOg",
				status: "_3StJsb37UVnMUDKcGg5mHg",
				statusText: "_247vhiDCQJRjOMCUvZ-mqZ",
				description: "_1tBD7BkJRBAC1gbtHq-Dyq",
				actionContainer: "_28xcfOINVo3MU8ysX5alBu",
				image: "OYNB2zTDsEUOySExl6VnM",
				error: "_1Kc1Z_c_GvBk26Xi_syDhP",
				success: "_2Rs219v7hWj_DClRZzJUzJ",
				emailContainer: "_1M2FGf5OZeqPmUFe50iTut",
				emailText: "_1mB8g4h7c9Xn8964Bc3tfp",
				emailAddress: "_31W5hFXts06EPszYoM6jq8",
				input: "DCF-EASL8JBNyY7zEddo_",
				inputIcon: "_1-rwArBHnhyhkZX-fy6axp",
				errorBorder: "_2V4wZcvO9aShV0B2nZi2nP",
				successBorder: "_2PlXkaRXoDbHSJMgwvn-tM",
				primaryBtn: "zD8zqnlttfX-II-HmEd_u",
				errorMsg: "_3zJvYSoQlWXh-VwUoInXm_"
			}
		},
		"./src/reddit/components/Settings/FeedForm.m.less": function(e, t, n) {
			e.exports = {
				"m-responsive": "bQQyYzcR_4xlvHaj1mE9u",
				mResponsive: "bQQyYzcR_4xlvHaj1mE9u"
			}
		},
		"./src/reddit/components/Settings/GenderCollection/Modal.m.less": function(e, t, n) {
			e.exports = {
				container: "eArEE0EdVdSMkd7iEV45z",
				customGenderInput: "_1qBFv0dRlNFrIa57ldyC1R"
			}
		},
		"./src/reddit/components/Settings/GenderCollection/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2CwwEMfiOvbI7QZVoQ6lQQ"
			}
		},
		"./src/reddit/components/Settings/NotificationForm.m.less": function(e, t, n) {
			e.exports = {
				nav: "_3sqwybfb0GyVF9TPRoiI5s",
				arrowLeft: "_3f8RceNwK_Chrx1SfdImc0",
				arrowRight: "_179JgBE7zFXVu12Sy73Zww",
				ModPnSettings: "_2wctzp8x7MzSUa-NIcQxNC",
				modPnSettings: "_2wctzp8x7MzSUa-NIcQxNC"
			}
		},
		"./src/reddit/components/Settings/Notifications/Loader.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(o.a)({
					resolved: {},
					chunkName: () => "EmailNotificationSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("EmailNotificationSettings").then(n.bind(null, "./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx"
					}
				}),
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "PushNotificationSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("PushNotificationSettings").then(n.bind(null, "./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx"
					}
				}),
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ModPnSettingsSubredditList",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ModPnSettingsSubredditList").then(n.bind(null, "./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.tsx"
					}
				}),
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "CommunityNotificationSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CommunityNotificationSettings").then(n.bind(null, "./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Settings/Notifications/CommunityNotificationSettings/index.tsx"
					}
				})
		},
		"./src/reddit/components/Settings/Payments/Header/index.m.less": function(e, t, n) {
			e.exports = {
				description: "_2KihMl7kCllYi4__28Q0O8",
				title: "_2z5qbZtDy2SEXxQHTL5uwO"
			}
		},
		"./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less": function(e, t, n) {
			e.exports = {
				lock: "Sfk4ELyMq0pDLynmPYqIH",
				noSavedPayment: "_2kaA57xLp2xlwvJJgGX_nf",
				payment: "_3Q9yKbarclxKg7XBqu5Aas",
				paymentDisplay: "_1u8k-iH7dy2tgyF89W2PW9"
			}
		},
		"./src/reddit/components/Settings/Payments/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_5wU4T-ZntmyHAO3Q-reeV"
			}
		},
		"./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less": function(e, t, n) {
			e.exports = {
				textOverflow: "_1d3ulerBIy0y-Q-_LZloCW",
				button: "SG6ZzgmgvX6yusmUw_AFz",
				allocatedDate: "_1bQ8ihSZfCYRnHRuEwU6QZ",
				cancelled: "bTwXyzP11HeH3fz1SsJ9z",
				container: "ZvmA4tuviak3oTOipZC4z",
				details: "_2VKQIMrBK9D4-AQKXy_Hec",
				allocationName: "ZRDh7F8rMZW_m8BkepJJb"
			}
		},
		"./src/reddit/components/Settings/Powerups/Allocations/index.m.less": function(e, t, n) {
			e.exports = {
				empty: "PSyhkzqEPsSNFxWJD7H5I",
				loading: "NpifsPYgpuZM5vPSuLL5m",
				title: "_2T-LYh_UoKft-ObYe8u43N"
			}
		},
		"./src/reddit/components/Settings/Powerups/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Bk-AF_4NtR3w_gvGYn4D4",
				subtitle: "_3qZmVpJ9gG2cCyZSqo0Ofe",
				title: "_1j_HsHqYeodZ8THwAfGLFT"
			}
		},
		"./src/reddit/components/Settings/Powerups/index.m.less": function(e, t, n) {
			e.exports = {
				header: "njyQjDTiWgVu429jVxJ9M"
			}
		},
		"./src/reddit/components/Settings/PremiumForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return se
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/moment/moment.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/gold/productOffers.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/ConfirmModal/index.tsx"),
				h = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/gold/powerups/index.ts")),
				f = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/higherOrderComponents/asModal/index.tsx"),
				_ = n("./src/reddit/actions/gold/powerups.ts"),
				y = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				C = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = n("./src/reddit/controls/TextButton/index.tsx"),
				j = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var w = Object(v.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: o,
						subredditInfo: s
					} = e, r = Object(l.d)();
					return i.a.createElement(C.e, {
						className: t
					}, i.a.createElement(C.i, null, i.a.createElement(j.a, null, i.a.createElement(C.q, null, x._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), i.a.createElement(E.a, {
						onClick: o
					}, i.a.createElement(C.b, null)))), i.a.createElement(C.l, null, i.a.createElement(C.p, null, x._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [x._param("subreddit name", s.prefixedName)], {
						hk: "2EKYNO"
					}))), i.a.createElement(C.g, null, i.a.createElement(C.r, {
						onClick: () => {
							n.isPremium ? r(Object(_.j)(s.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : r(Object(y.a)(n.id, s.id, n.allocatedAt)), o()
						},
						"data-redditstyle": !0
					}, x._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				k = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				S = n.n(k);

			function O(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var P = function(e) {
					const [t, n] = Object(a.useState)(!1), {
						className: s,
						allocation: r
					} = e, {
						allocatedAt: l,
						cooldownEndsAt: c,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: h
					} = r, v = O(b), _ = O(l), y = O(c), {
						prefixedName: C
					} = p, E = _ ? o.fbt._("Subscribed {date}.", [o.fbt._param("date", _)], {
						hk: "24RAUK"
					}) : "", j = y ? o.fbt._("You can cancel after {date}.", [o.fbt._param("date", y)], {
						hk: "48A2TC"
					}) : "", x = v ? o.fbt._("Will be renewed on {date}.", [o.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", k = v ? o.fbt._("Still active until {date}.", [o.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", P = m ? u ? E : `${E} ${j}` : d ? `${E} ${x}` : `${E} ${k}`, N = m ? o.fbt._("{powerups count} Reddit Premium powerup/monthly", [o.fbt._param("powerups count", h.toLocaleString())], {
						hk: "4iP1Np"
					}) : o.fbt._("{powerups count} powerup/monthly", [o.fbt._param("powerups count", h.toLocaleString())], {
						hk: "11DNVJ"
					}), I = m && u || !m && d;
					return i.a.createElement("div", {
						className: Object(f.a)(s, S.a.container),
						title: P
					}, i.a.createElement("div", {
						className: S.a.allocationName
					}, o.fbt._("{subreddit name} Powerup", [o.fbt._param("subreddit name", C)], {
						hk: "4qAoO"
					})), i.a.createElement("div", {
						className: S.a.details
					}, N), i.a.createElement(g.q, {
						className: S.a.button,
						disabled: !I,
						onClick: () => n(!0)
					}, m || I ? o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : o.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && i.a.createElement(w, {
						withOverlay: !0,
						allocation: r,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				N = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				I = n.n(N);
			var A = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement("div", {
						className: I.a.title
					}, o.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => i.a.createElement(P, {
						allocation: e,
						className: I.a.allocation,
						key: e.allocatedAt
					})))
				},
				T = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				M = n.n(T);

			function L(e) {
				return i.a.createElement("header", {
					className: Object(f.a)(e.className, M.a.container)
				}, i.a.createElement("div", {
					className: M.a.title
				}, o.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), i.a.createElement("div", {
					className: M.a.subtitle
				}, o.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var R = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				B = n.n(R);
			const F = Object(d.c)({
				allocationByKey: h.x
			});
			var D = Object(l.b)(F)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement(L, {
						className: B.a.header
					}), i.a.createElement(A, {
						allocationList: n
					})) : null
				})),
				U = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				G = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				H = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				W = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/higherOrderComponents/makeAsync.tsx"),
				V = n("./src/lib/loadWithRetries/index.ts"),
				Y = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var J = Object(q.a)({
					getComponent: () => Object(V.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(Y.d)().catch(() => {})])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Q = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Z = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/endpoints/gold/purchase.ts"),
				X = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				$ = n("./src/reddit/selectors/activeModalId.ts"),
				ee = n("./src/reddit/selectors/gold/productOffers.ts"),
				te = n("./src/reddit/selectors/user.ts"),
				ne = n("./src/reddit/components/Settings/index.m.less"),
				oe = n.n(ne);
			const se = "update_card_modal_id",
				re = Object(d.c)({
					cancelSubscriptionModalIsOpen: Object($.b)("settings_optout_modal_id"),
					goldExpiration: te.o,
					hasAndroidSubscription: te.p,
					hasIOSSubscription: te.u,
					hasStripeSubscription: te.y,
					hasPaypalSubscription: te.w,
					isGold: te.s,
					isPremiumSubscriber: te.t,
					premiumProductOfferSubscription: ee.g,
					premiumProductOfferSubscriptionIsCanceled: ee.f,
					updateCardModalIsOpen: Object($.b)(se)
				}),
				ae = Object(l.b)(re, e => ({
					navigateToPurchasePremium: () => e(Object(c.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(se)),
					requestProductOfferSubscriptions: () => e(Object(u.b)()),
					requestCancelProductOfferSubscription: t => e(Object(u.a)(t)),
					showUpdateCardSuccessToast: () => {
						const t = o.fbt._("You successfully updated your payment information!", null, {
							hk: "3m4P1N"
						});
						e(Object(p.f)({
							kind: Z.b.SuccessCommunity,
							text: t
						}))
					}
				})),
				ie = (e, t, n) => e && !n ? o.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [o.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : o.fbt._("Your Premium membership is valid until {date}.", [o.fbt._param("date", t)], {
					hk: "4m4zaE"
				});
			class le extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleStripeCardUpdate = () => {
						var e;
						const t = null === (e = this.props.pageLayer) || void 0 === e ? void 0 : e.queryParams;
						(null == t ? void 0 : t[K.d]) && this.props.showUpdateCardSuccessToast()
					}, this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(X.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(X.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(X.f)() : Object(X.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(X.g)() : Object(X.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(X.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(X.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(X.j)()), this.props.requestProductOfferSubscriptions(), this.handleStripeCardUpdate()
				}
				async navigateToCancel() {
					const {
						premiumProductOfferSubscription: e,
						requestCancelProductOfferSubscription: t,
						toggleCancelSubscriptionModal: n,
						requestProductOfferSubscriptions: o
					} = this.props;
					if (null == e ? void 0 : e.id) {
						await t(e.id) && (n(), o())
					}
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						hasAndroidSubscription: t,
						hasIOSSubscription: n,
						hasPaypalSubscription: s,
						hasStripeSubscription: a,
						isGold: l,
						isPremiumSubscriber: c,
						premiumProductOfferSubscription: d,
						premiumProductOfferSubscriptionIsCanceled: u,
						isResponsiveSettingsEnabled: m,
						toggleUpdateCardModal: p,
						updateCardModalIsOpen: h,
						prefs: {
							highlightComments: f,
							hideAds: g
						}
					} = this.props, v = t || n, _ = Boolean(d), y = r()(null == d ? void 0 : d.expiresAt).format("MMMM DD, YYYY.");
					return i.a.createElement(G.a, null, i.a.createElement(U.b, {
						className: oe.a.premiumHeading,
						isResponsiveSettingsEnabled: m
					}, o.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), i.a.createElement(U.a, {
						className: oe.a.premiumExpirationString
					}, o.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), i.a.createElement(H.a, null, o.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), i.a.createElement(U.a, {
						className: oe.a.premiumExpirationString
					}, l ? ie(_, y, u) : o.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!_ || u) && i.a.createElement(W.g, {
						label: l ? o.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : o.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), a && i.a.createElement(W.a, {
						label: o.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: p
					}), s && i.a.createElement(W.g, {
						label: o.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), c && !v && !u && i.a.createElement(W.a, {
						label: o.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), l && i.a.createElement(i.a.Fragment, null, i.a.createElement(H.a, null, o.fbt._("premium features", null, {
						hk: "20MX2a"
					})), i.a.createElement(W.p, {
						on: g,
						disabled: !l,
						onClick: this.onHideAdsToggle,
						label: o.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: o.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), i.a.createElement(W.p, {
						on: f,
						disabled: !l,
						onClick: this.onHighlightCommentsToggle,
						label: o.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: o.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), h && i.a.createElement(J, null), e && i.a.createElement(b.a, {
						headerText: o.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: o.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: o.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: o.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}), i.a.createElement(D, null))
				}
			}
			const ce = Object(Q.u)();
			t.b = ce(ae(Object(z.c)(le)))
		},
		"./src/reddit/components/Settings/PrivacyForm.m.less": function(e, t, n) {
			e.exports = {
				ListsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				listsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				GenerateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				generateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				SubheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				subheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				ThirdPartyAuth: "_1GtysZnibU-p4KasVaXCT_",
				thirdPartyAuth: "_1GtysZnibU-p4KasVaXCT_",
				"m-responsive": "_1K1eSlv_SCeNBQRglVFRHo",
				mResponsive: "_1K1eSlv_SCeNBQRglVFRHo",
				CollapseSensitivity: "_200yrQxNmg8yCx6kgiQBq9",
				collapseSensitivity: "_200yrQxNmg8yCx6kgiQBq9"
			}
		},
		"./src/reddit/components/Settings/ProfileForm.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				rawHtmlDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				ImageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				imageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				"m-responsive": "_3qAj0Ei4qJEkWGPxmDF4VE",
				mResponsive: "_3qAj0Ei4qJEkWGPxmDF4VE",
				Label: "_13ua4iQuXbXY7Lw2azcfDP",
				label: "_13ua4iQuXbXY7Lw2azcfDP",
				LabelText: "_1RZNl6Crcd1--tYLUDxw6a",
				labelText: "_1RZNl6Crcd1--tYLUDxw6a",
				IconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				iconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				ProfileIcon: "_14T-g1N2IGCmLrsAqnb851",
				profileIcon: "_14T-g1N2IGCmLrsAqnb851",
				BannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				bannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				ProfileBanner: "_1c2ERYhguh4jN7foA5aZnc",
				profileBanner: "_1c2ERYhguh4jN7foA5aZnc",
				PlusCircle: "_3KHqxOxhEHArGV9xYKYedu",
				plusCircle: "_3KHqxOxhEHArGV9xYKYedu",
				ImageType: "_3M41n4-XbqdTLEW2HEyuwx",
				imageType: "_3M41n4-XbqdTLEW2HEyuwx",
				DummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				dummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				Preview: "_2TAJM8DsUslS0NXRNj4kJj",
				preview: "_2TAJM8DsUslS0NXRNj4kJj",
				Link: "_2rNu4t73lS9limUPAAKtkN",
				link: "_2rNu4t73lS9limUPAAKtkN",
				ResponsiveOverlay: "_5Y7pdSoBpBx_1X08U19nH",
				responsiveOverlay: "_5Y7pdSoBpBx_1X08U19nH",
				ProfileModerationContent: "_275cHSaXO9aqdY4IqIHs7T",
				profileModerationContent: "_275cHSaXO9aqdY4IqIHs7T"
			}
		},
		"./src/reddit/components/Settings/SortSetting/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2gyG4Nl0mMXg9j65G_cVwp",
				Separator: "_1IJCWpm5hdHFEoHFC4K7wC",
				separator: "_1IJCWpm5hdHFEoHFC4K7wC"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Header/index.m.less": function(e, t, n) {
			e.exports = {
				subtitle: "_2K1zfRnW-eaoEdnfpyRcmh",
				title: "_3oLMEvh1HrW0gnI4GnF4hs"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less": function(e, t, n) {
			e.exports = {
				benefit: "_3_07PuZfeP3MM96d0OSWkK",
				benefitsTitle: "_2MfrclDImPI9KDttFkjV8K",
				benefits: "_3nMLeCTDuhfYPRV15cJIYj",
				benefitCircle: "vDGj56bNq8AmoOCnEkKcN",
				brand: "_3AaDEZLAnN-UOPhUmMUuVZ",
				checkmarkWrapper: "WRb8Spa14FEwk-gRyWDfk",
				checkmark: "_319gQIE0nfltJPjAhZwmqg",
				container: "_12xD8GaAATMIFoI0DUkJEA",
				joined: "_1hpYX3ygRxIISJmYb-Rt9w",
				joinedText: "THnAYUxamyCrCEBcNfpdS",
				price: "_1sXWkuJjh-idQ0bibKjqyG",
				subTitle: "_20epmAmP-d7n6vPJc6D6xT",
				title: "_1f3eQk7KFE4F5Lug0ObhJc",
				topLine: "_1HievtCduyEdY0Q8T3hH_J"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less": function(e, t, n) {
			e.exports = {
				benefitsTitle: "_1zvZz9V9qmzvphLNN26xFE",
				benefits: "kEoeW9SoyEhD4ExnmlGkS",
				brand: "_2w4yco0tluzPa4WeuhhiQb",
				card: "_2R-NHwcb-sLMDCsOETfzyP",
				cardTitle: "_1nw8o42QAXA_zG3Z3GGgZD",
				close: "By4TuAW9x-mG-GkTGFgEr",
				container: "_3t78XrDe02RPhvHEki73Lo",
				footer: "_2CujVKP63iAaJw_UV0yOR4",
				header: "_3UN6Nqg_UKbM9bayL0RMJF",
				membershipMsg: "_1ap7TUKnaO0x1z3ghuHpsI",
				pointsContainer: "ofZxk5Su7_2KVkgn_5nvx",
				pointsHeader: "_3jOoW94C-FdpLMCCsfn_fA",
				price: "_2YC-HnD_R95hjAqA95ObnS",
				warning: "_1DMG--ENBA93KSauQNMsTI"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less": function(e, t, n) {
			e.exports = {
				textOverflow: "_1cJfM1Loi1IW6h-Gvd5tHM",
				button: "_1pqGWiE4CZF0y478Lzawc7",
				cancelled: "_2SaAnyYncaEeqGv38ngjw",
				joinDate: "_2R_qBER1OZsfaxvAv-57vk",
				container: "_2HZuIxJNdTH2UzaarZ_2_K",
				membershipName: "_1SOtSjbR4ugPAPrTgPSB8k"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less": function(e, t, n) {
			e.exports = {
				empty: "_3KZ9x8iqbtVhgYU5aZK96i",
				loading: "_18AXwLWTkHAhpgyT2m7kii",
				title: "_22W0HCOIPB2NC_q2PuiXQ8"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/index.m.less": function(e, t, n) {
			e.exports = {
				header: "RBCMMCYwCum0i_wuk50dM"
			}
		},
		"./src/reddit/components/Settings/ViewSetting/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "YpPJkfznV3Pha9pNUbPR7"
			}
		},
		"./src/reddit/components/Settings/index.m.less": function(e, t, n) {
			e.exports = {
				bulletedList: "vxL7rNBEiV-X9jWEV--zw",
				premiumHeading: "yBOjy8Ssm6dCzStP0YSks",
				premiumExpirationString: "_15b2xujnvnIbBSQPJ9w2Vi"
			}
		},
		"./src/reddit/components/Settings/shared/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2OI2GNt8U_hqISJzbsrb0Y",
				labelWrapper: "Mw10gImD3M_Xbm-yM9eyH",
				dropdownRow: "_183U1ds639-b2Av2n7Mdt_"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				Label: "_1niwHyFzfJ2EBfsTxotmOo",
				label: "_1niwHyFzfJ2EBfsTxotmOo",
				Button: "Dtg-R0LPsUrNfymGbPg_G",
				button: "Dtg-R0LPsUrNfymGbPg_G",
				Wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				mFocused: "_3_AGLaBQJiLQvGX_bkEmlQ"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(a),
				l = n("./src/lib/lessComponent.tsx");
			const c = l.a.input("Input", i.a),
				d = l.a.label("Label", i.a),
				u = l.a.button("Button", i.a),
				m = l.a.div("Wrapper", i.a);
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						focused: !1
					}
				}
				render() {
					const {
						buttonText: e,
						className: t,
						disabled: n,
						label: o,
						onClick: a,
						onChange: l,
						type: p = "text",
						value: b
					} = this.props;
					return s.a.createElement(m, {
						className: Object(r.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, s.a.createElement(c, {
						value: b,
						type: p,
						onChange: e => l(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), s.a.createElement(d, null, o), a && s.a.createElement(u, {
						disabled: !!n,
						onClick: a
					}, e))
				}
			}
		},
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, n) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				"m-responsive": "_1zFj2WkkmV422Jul4b3LUb",
				mResponsive: "_1zFj2WkkmV422Jul4b3LUb",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = a.a.h2("Heading", l.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...o
				} = e;
				return s.a.createElement(d, c({}, o, {
					className: Object(r.a)({
						[l.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = a.a.p("HeadingSubtext", l.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				a = n("./src/reddit/models/Image/index.tsx");
			class i extends s.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(a.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						icon: t,
						label: n,
						labelClassName: o,
						value: a,
						controlName: i,
						isUploading: l,
						tabIndex: c
					} = this.props;
					return l ? s.a.createElement(r.a, {
						className: e
					}) : s.a.createElement(r.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: o,
						multiple: !1,
						tabIndex: c,
						value: a,
						onChange: this.onChange
					})
				}
			}
			t.a = i
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1OrNGmpfcSuSebbZM5vYq4",
				container: "_1OrNGmpfcSuSebbZM5vYq4",
				Content: "_3FVpvZ7OLbS_68QzaxplxT",
				content: "_3FVpvZ7OLbS_68QzaxplxT",
				Sidebar: "_6hkUCjcaRoPRm1710RzSl",
				sidebar: "_6hkUCjcaRoPRm1710RzSl",
				defaultLayout: "jrocDu3YgcEScGB_zdT4I",
				"m-collectionLayout": "_1LF62vb6GTug21RCMM47iK",
				mCollectionLayout: "_1LF62vb6GTug21RCMM47iK"
			}
		},
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				a = n.n(r),
				i = n("./src/lib/lessComponent.tsx");
			const l = i.a.div("Container", a.a),
				c = i.a.div("Content", a.a),
				d = i.a.div("Sidebar", a.a);
			t.a = e => s.a.createElement(l, {
				className: e.className
			}, s.a.createElement(c, null, e.children), s.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/Settings/shared/ListWidget.m.less": function(e, t, n) {
			e.exports = {
				ListHeading: "_2azG8CbfCeoSIy45LO_LxO",
				listHeading: "_2azG8CbfCeoSIy45LO_LxO",
				Subtext: "_11aCg0w5mcSGMuqdRWGIjQ",
				subtext: "_11aCg0w5mcSGMuqdRWGIjQ",
				ListBox: "_2eHU8lgBkQJt6_fDIm7X_p",
				listBox: "_2eHU8lgBkQJt6_fDIm7X_p",
				MoreWrapper: "R8wezXw6KmosgQsJ3q6f0",
				moreWrapper: "R8wezXw6KmosgQsJ3q6f0",
				MoreButton: "j_y-f-J8aR9FLAGuMbzbw",
				moreButton: "j_y-f-J8aR9FLAGuMbzbw",
				container: "_2F1i1Khed3wdSoVrS2LBcR",
				mPadBottom: "_10-uajD9xoOsukhhALA723"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, n) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.h3("Component", s.a)
		},
		"./src/reddit/components/Settings/shared/UserRow.m.less": function(e, t, n) {
			e.exports = {
				Date: "_3uOVAEvDusyBq_RJI_I3BT",
				date: "_3uOVAEvDusyBq_RJI_I3BT",
				UserNameAndIcon: "Q7PZ7pn1RDCZoAZ4RHEV8",
				userNameAndIcon: "Q7PZ7pn1RDCZoAZ4RHEV8",
				Button: "_2YM_OHv4TJuebM7ape7vWl",
				button: "_2YM_OHv4TJuebM7ape7vWl",
				ButtonWrapper: "_8qynupuY9i0kBJmG4L-Oc",
				buttonWrapper: "_8qynupuY9i0kBJmG4L-Oc",
				Component: "_3GLYJXdo6w63LbbFq2PrWG",
				component: "_3GLYJXdo6w63LbbFq2PrWG"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				ActionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				actionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				NoColor: "mI7WmWMma8pZnlYRHtE56",
				noColor: "mI7WmWMma8pZnlYRHtE56",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				input: "_14_SnmD6g3FrozcKjTpqoH",
				tag: "_1GQzFyg5xYq94euL74ZaeJ"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return z
			})), n.d(t, "k", (function() {
				return Q
			})), n.d(t, "o", (function() {
				return K
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return re
			})), n.d(t, "p", (function() {
				return ae
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "a", (function() {
				return fe
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "i", (function() {
				return _e
			})), n.d(t, "c", (function() {
				return ye
			})), n.d(t, "e", (function() {
				return Ce
			})), n.d(t, "h", (function() {
				return Ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				f = n("./src/reddit/controls/FormFields/index.tsx"),
				g = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Select/index.m.less"),
				y = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = g.a.span("Wrapper", y.a),
				j = g.a.select("Inner", y.a),
				x = g.a.wrapped(v.b, "Caret", y.a);

			function w({
				className: e,
				innerClassName: t,
				...n
			}) {
				const o = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return s.a.createElement(E, {
					className: e
				}, s.a.createElement(j, C({
					className: t
				}, n)), s.a.createElement(x, C({
					isSubreddit: !0
				}, o)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = n("./src/reddit/controls/Typography/index.tsx"),
				O = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				A = n.n(I),
				T = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				L = n("./src/reddit/models/Flair/index.ts"),
				R = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				D = n.n(F);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(d.a)(b.a),
				H = g.a.wrapped(P.a, "Circle", D.a),
				W = g.a.h3("Label", D.a),
				z = g.a.wrapped(S.c, "Subtext", D.a),
				q = g.a.wrapped(m.a, "HoverTooltip", D.a),
				V = g.a.div("ControlContainer", D.a),
				Y = g.a.div("TextContainer", D.a),
				J = g.a.div("ActionContainer", D.a),
				Q = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: o,
					isNightModeOn: r,
					disabled: a,
					indent: i,
					last: c,
					...d
				}) => s.a.createElement("div", U({}, d, {
					className: Object(l.a)(D.a.Wrapper, e, {
						[D.a.mColumn]: "column" === t,
						[D.a.mDisabled]: !!a,
						[D.a.mIndent]: !!i,
						[D.a.mLast]: !!c,
						[D.a.isCreateCommunity]: !!n,
						[D.a.inModal]: !!o,
						[D.a.isNightModeOn]: !!r
					})
				})),
				Z = g.a.a("Link", D.a),
				K = g.a.wrapped(Z, "SubtextLink", D.a),
				X = g.a.wrapped(N.a, "LinkIcon", D.a),
				$ = g.a.button("LinkButton", D.a),
				ee = g.a.wrapped(O.a, "ArrowRight", D.a),
				te = e => s.a.createElement(Q, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(Y, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(H, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, e.children)),
				ne = g.a.div("StyledFlair", D.a),
				oe = g.a.wrapped(ne, "SpoilerFlair", D.a),
				se = g.a.wrapped(ne, "NSFWFlair", D.a),
				re = e => {
					switch (e.flair) {
						case L.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case L.f.Spoiler:
							return s.a.createElement(oe, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return s.a.createElement(Q, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(Y, null, s.a.createElement(M.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(W, null, e.label))), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(V, null, e.tooltip && s.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), s.a.createElement(k.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = g.a.input("RangeSliderInput", D.a),
				le = g.a.div("RangeSlider", D.a),
				ce = g.a.div("Ticks", D.a),
				de = g.a.div("TickText", D.a),
				ue = g.a.div("PreSubText", D.a),
				me = Object(i.c)({
					isNightModeOn: B.X
				}),
				pe = Object(r.b)(me)(e => s.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, s.a.createElement(Y, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(M.a, null, s.a.createElement(W, null, e.label)), !e.hideSubtext && s.a.createElement(z, null, " ", s.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(J, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, s.a.createElement(le, null, s.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + A()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange,
					disabled: e.disabled
				}), s.a.createElement(ce, null, Object.keys(e.ticks).map((t, n) => s.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => s.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(M.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(V, null, s.a.createElement(T.n, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => s.a.createElement(Q, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(X, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				fe = e => s.a.createElement(Q, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, !!e.hintText && s.a.createElement("div", {
					className: D.a.ActionHintText
				}, e.hintText), s.a.createElement($, {
					onClick: e.onClick,
					className: Object(l.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				}, s.a.createElement(ee, {
					className: Object(l.a)({
						[D.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				ge = Object(i.c)({
					isOpen: (e, t) => Object(R.b)(t.id)(e)
				}),
				ve = Object(r.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(c.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(W, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, (e => s.a.createElement("div", {
					className: D.a.DropdownWrapper,
					onClick: e.openDropdown
				}, s.a.createElement("span", {
					className: D.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(v.b, {
					className: D.a.DropdownTriangle
				}), s.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(h.b, {
					className: D.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && s.a.createElement("div", {
					className: D.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				_e = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: r,
					...a
				}) => {
					const i = Object(o.useCallback)(e => r(e.target.value), [r]),
						{
							items: l
						} = a;
					return s.a.createElement(Q, {
						disabled: e
					}, s.a.createElement(Y, null, s.a.createElement("label", {
						htmlFor: a.id
					}, s.a.createElement(W, {
						className: a.labelClassname
					}, a.label)), s.a.createElement(z, null, a.subtext)), s.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), s.a.createElement(Q, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(w, {
						id: a.id,
						className: "redditStyle",
						disabled: e || a.inputDisabled,
						onChange: i,
						value: a.selected
					}, l.map(({
						value: e,
						displayName: t
					}) => s.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ye = e => s.a.createElement(Q, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement(W, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, e.children)),
				Ce = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && s.a.createElement("span", {
					className: D.a.tag
				}, "r/"), s.a.createElement(f.a, {
					className: e.isCreateCommunity ? D.a.input : void 0,
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ee = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, s.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), s.a.createElement("div", {
					className: D.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && s.a.createElement("div", {
					className: D.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				l = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.wrapped(d.a, "ImageUploadIcon", m.a), h = a.a.div("ImageIconRow", m.a), f = a.a.div("ImageUploadText", m.a), g = a.a.wrapped(i.a, "FileDrop", m.a), v = a.a.div("ContainerUploading", m.a), _ = e => s.a.createElement(v, {
				className: e.className
			}, s.a.createElement(h, null, s.a.createElement(c.a, {
				sizePx: 40,
				center: !0
			})), s.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), y = a.a.label("Label", m.a);
			t.b = e => s.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(y, {
					className: Object(r.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, s.a.createElement(h, null, e.icon || s.a.createElement(b, null)), s.a.createElement(f, null, e.label), s.a.createElement(l.a, {
					className: m.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(s);
			const a = o.a.section("FormPage", r.a),
				i = o.a.h1("HomePageTitle", r.a),
				l = o.a.button("HomePageBreadcrumb", r.a),
				c = o.a.div("HomePageGroup", r.a),
				d = o.a.h1("FormPageTitle", r.a),
				u = o.a.div("FormPageSection", r.a),
				m = o.a.div("FormGroup", r.a),
				p = o.a.h2("FormGroupTitle", r.a),
				b = o.a.div("FormElement", r.a),
				h = o.a.div("FormGroupDescription", r.a),
				f = o.a.div("FormItem", r.a),
				g = o.a.h3("FormElementTitle", r.a),
				v = o.a.div("FormElementDescription", r.a),
				_ = o.a.div("FormElementError", r.a),
				y = o.a.div("FormElementSubGroup", r.a),
				C = o.a.li("FormListItem", r.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const u = o.a.wrapped(s.a, "ModalInput", d.a),
				m = o.a.input("Input", d.a),
				p = o.a.wrapped(l.a, "RadioOn", d.a),
				b = o.a.wrapped(i.a, "RadioOff", d.a),
				h = o.a.wrapped(r.a, "Checkbox", d.a),
				f = o.a.wrapped(a.a, "CheckboxSelected", d.a),
				g = o.a.textarea("Textarea", d.a),
				v = o.a.label("StyledLabel", d.a),
				_ = o.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return E
			}));
			var o, s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = n("./src/reddit/components/TabNav/index.m.less"),
				f = n.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(o || (o = {}));
			const v = d.a.wrapped(b.a, "Gear", f.a),
				_ = d.a.h3("Title", f.a),
				y = d.a.div("TabNavContainer", f.a),
				C = d.a.div("Tabs", f.a),
				E = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...o
				}) => i.a.createElement(p.a, g({}, o, {
					"aria-selected": e,
					className: Object(l.a)(o.className, {
						[f.a.mIsActive]: e,
						[f.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", f.a),
				j = e => {
					switch (e) {
						case o.GEAR:
							return i.a.createElement(v, null);
						default:
							return null
					}
				},
				x = () => window.pageYOffset || window.scrollY,
				w = 75,
				k = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: m.f
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = r()(() => {
						this.state.sticky || this.forceUnsticky ? x() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : x() >= w && this.setState({
							sticky: !0
						})
					}, c.J), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, o = Object(l.a)({
						[f.a.mResponsive]: t
					});
					return i.a.createElement(y, {
						className: Object(l.a)(o, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(_, {
						className: Object(l.a)(o, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, j(this.props.icon), this.props.title), i.a.createElement(C, {
						className: Object(l.a)(o, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? k : void 0
					}, this.props.children))
				}
			}
			t.c = S
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(d);
			const m = a.a.span("UserIconContainer", u.a),
				p = a.a.wrapped(l.a, "UserIcon", u.a),
				b = a.a.wrapped(c.a, "UserLink", u.a);
			t.a = e => r.a.createElement(b, {
				className: e.className,
				to: `${o.a.redditUrl}/user/${e.username}`
			}, r.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, r.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, r.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				l = n.n(i);
			const c = r.a.div("WidgetBackground", l.a),
				d = r.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", l.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const r = {
					[s.V.BEST]: () => o.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.V.HOT]: () => o.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.V.NEW]: () => o.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.V.CONTROVERSIAL]: () => o.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.V.RISING]: () => o.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.V.TOP]: () => o.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.V.AWARDED]: () => o.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[s.ec.HOUR]: () => o.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.ec.DAY]: () => o.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.ec.WEEK]: () => o.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.ec.MONTH]: () => o.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.ec.YEAR]: () => o.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.ec.ALL]: () => o.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				l = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return C
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				a = n("./node_modules/raf/index.js"),
				i = n.n(a),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = n.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: h.a.wrapper
					}, c.a.createElement(p.a, {
						className: h.a.titleRow
					}, n), c.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: h.a.buttonRow
					}, c.a.createElement(m.k, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(g);
			class _ extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: s = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, c.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && c.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), i && c.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const y = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: s,
						messages: r = []
					} = e, a = r.length ? r : s ? [s] : [];
					return a.length ? c.a.createElement("div", {
						className: t
					}, a.map((e, t) => c.a.createElement(_, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				C = e => c.a.createElement(y, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/flow.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-dnd/lib/index.js"),
				l = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				c = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = l.NativeTypes.FILE,
				u = s()(Object(i.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), c.a);
			class m extends a.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(a.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: a,
						...i
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, i)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						isInvalid: a,
						className: i,
						redditStyle: l,
						...c
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: l
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: o
					}, c)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(l.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class _ extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: o,
						errors: r = []
					} = this.props;
					return e.map((e, a) => s.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: o,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, s.a.createElement(c.b, {
						className: u.a.trash
					})), !!r[a] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, r[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: o,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const l = !(!!o && n.length >= o) && !i;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && l && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && l && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				a = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me`,
					method: "patch",
					data: {
						stripe: {
							authorization: {
								...t,
								scope: "read_write"
							}
						}
					}
				})
			}

			function i(e) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me`,
					method: "get"
				})
			}

			function l(e, t) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/stripe-sources/${t}`,
					method: "delete"
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-sources/${t}`,
					method: "delete"
				})
			}
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				l = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function m(e, t) {
				return Object(a.a)(Object(s.a)(e, [r.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(l.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(i.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				l = n("./src/reddit/endpoints/governance/products/badges.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const o = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(e, t) {
						return Object(c.a)(e, {
							method: "get",
							endpoint: `${r.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(l.b)(e, t),
					p = Object(a.c)(e, t, n),
					[b, h, f, g] = await Promise.all([d, u, m, p]);
				if (b.ok ? o.collections = b.body : o.errors.collections = b.error, h.ok) {
					const e = h.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, g.ok ? (s()(o.badges, g.body.badges), o.userOwnedBadges = g.body.userOwnedBadges) : o.errors.userBadges = g.error, o
			}
			const u = (e, t) => Object(c.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "k", (function() {
				return O
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(o),
				r = n("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				a = n("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = n("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				l = n("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				c = n("./src/redditGQL/operations/CreateEconOrder.json"),
				d = n("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = n("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = n("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				h = n("./src/redditGQL/operations/UserSavedStripeCards.json"),
				f = n("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, n, o, r) => {
				const {
					premium: a,
					...i
				} = r, l = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], d = new s.a(l.price).multipliedBy(o).toFixed();
				return Object(f.a)(e, {
					...c,
					variables: {
						input: {
							nonce: t,
							productId: n.id,
							productVersion: n.version,
							pricePackageId: l.id,
							currency: l.currency,
							price: d,
							productsCount: o.toString(),
							...i
						}
					}
				})
			};
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const _ = (e, t, n, o) => Object(f.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: n,
						token: o
					}
				}),
				y = (e, t, n, o) => Object(f.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: o
					}
				}),
				C = (e, t, n, o) => Object(f.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						cardId: o
					}
				}),
				E = (e, t, n, o, s) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: o,
						cancelUrl: s
					}
				}),
				j = (e, t, n, o) => Object(f.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: n,
						token: o
					}
				}),
				x = (e, t, n, o) => Object(f.a)(e, {
					...l,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: o
					}
				}),
				w = (e, t, n, o, s) => Object(f.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: o,
						saveCard: s
					}
				}),
				k = (e, t) => Object(f.a)(e, {
					...r,
					variables: {
						orderId: t
					}
				}),
				S = e => Object(f.a)(e, {
					...h,
					variables: {}
				}),
				O = (e, t) => Object(f.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.ib.GET
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(s);
			t.a = Object(o.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = () => new BroadcastChannel("external_account"),
				s = e => {
					const t = o();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function a(e, t) {
				return Object(s.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/location.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "singleCountryList", (function() {
				return s
			})), n.d(t, "allCountryOptions", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				s = e => [{
					value: e,
					displayName: o[e]
				}],
				r = Object.keys(o).filter(e => "ZZ" !== e).map(e => ({
					value: e,
					displayName: o[e]
				}))
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...Object(o.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(o.subreddit)(t)
				}),
				r = () => s("view"),
				a = () => s("tap"),
				i = () => s("dismiss"),
				l = () => e => ({
					...Object(o.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				c = () => e => ({
					...Object(o.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => ({
					...Object(o.defaults)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				u = () => e => ({
					...Object(o.defaults)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => ({
					...Object(o.defaults)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(o.subredditById)(t, e)
				})
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...Object(s.defaults)(t),
					action: o.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				a = () => e => ({
					...Object(s.defaults)(e),
					action: o.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			}));
			var o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/index.ts"),
				r = n("./src/telemetry/models/Event.ts");
			const a = e => ({
					...o.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				l = e => {
					Object(s.a)({
						...a(e),
						action: r.c.View,
						source: "popup"
					})
				},
				c = e => {
					Object(s.a)({
						...a(e),
						action: r.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...a(e),
						action: r.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...a(e),
						action: r.c.Close,
						source: "popup"
					})
				},
				m = (e, t, n) => ({
					...o.defaults(e),
					actionInfo: o.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(s.a)({
						...m(e, !0),
						action: r.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(s.a)({
						...m(e, !0),
						action: r.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(s.a)({
						...m(e, !1, t),
						action: r.c.Bail,
						source: "notification"
					})
				},
				f = e => ({
					...o.defaults(e),
					noun: "push_notification"
				}),
				g = e => ({
					...f(e),
					notification: o.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => n => ({
					...o.defaults(n),
					action: i(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => n => ({
					...o.defaults(n),
					action: i(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				y = e => t => ({
					...o.defaults(t),
					source: "email_app_settings",
					action: i(e),
					noun: "email",
					notification: {
						type: "all"
					}
				})
		},
		"./src/reddit/helpers/trackers/premiumSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return l
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			}));
			var o = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/selectors/user.ts"),
				r = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => ({
					...o.defaults(e),
					correlationId: Object(a.c)(a.a.PremiumSettings),
					screen: o.screen(e)
				}),
				l = () => e => ({
					...i(e),
					source: "user_settings",
					action: "click",
					noun: "premium"
				}),
				c = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "view",
					noun: "page",
					goldPurchase: {
						type: Object(s.t)(e) ? r.GoldPurchaseType.Cancel : r.GoldPurchaseType.GetPremium
					}
				}),
				d = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "click",
					noun: "get_premium"
				}),
				u = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "click",
					noun: "cancel"
				}),
				m = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "click",
					noun: "cancel_yes"
				}),
				p = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "click",
					noun: "cancel_no"
				}),
				b = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "select",
					noun: "hide_ads"
				}),
				h = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "deselect",
					noun: "hide_ads"
				}),
				f = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "select",
					noun: "highlight_comments"
				}),
				g = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "deselect",
					noun: "highlight_comments"
				})
		},
		"./src/reddit/helpers/trackers/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			}));
			var o, s = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(o || (o = {}));
			const r = e => t => ({
					source: "settings",
					action: "connect",
					noun: "sso",
					actionInfo: {
						...s.actionInfo(t),
						type: e
					}
				}),
				a = e => t => ({
					source: "settings",
					action: "disconnect",
					noun: "sso",
					actionInfo: {
						...s.actionInfo(t),
						type: e
					}
				}),
				i = e => ({
					source: "popup",
					action: "view",
					noun: "create_password"
				}),
				l = e => t => ({
					source: "popup",
					action: "click",
					noun: "create_password",
					popup: {
						buttonText: e
					}
				})
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, s.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, s.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, s.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, s.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", l({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
				fill: "#EA4335"
			}))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), s.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 36 36",
				version: "1.1"
			}, s.a.createElement("circle", {
				cx: "18",
				cy: "18",
				fill: "#fff",
				r: "17.5",
				stroke: "inherit"
			}), s.a.createElement("path", {
				clipRule: "evenodd",
				d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
				fill: "inherit",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const l = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var o, s, r, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(o || (o = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var o;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(o || (o = {}))
		},
		"./src/reddit/pages/Settings/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "aq7Z-V1l4XpWUOsbbPQed",
				container: "aq7Z-V1l4XpWUOsbbPQed",
				"m-responsive": "_1DEuTh5wc7zh0WaUee6OMw",
				mResponsive: "_1DEuTh5wc7zh0WaUee6OMw",
				CreatorTab: "_3QlgI2skRdNb0rUrRitQd3",
				creatorTab: "_3QlgI2skRdNb0rUrRitQd3",
				MessagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				messagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				PaymentsTab: "_2WMQ9c71jnOmx4epThzaxA",
				paymentsTab: "_2WMQ9c71jnOmx4epThzaxA",
				SpecialMembershipTab: "_33ITA9Gf4yLExGG5x52N6E",
				specialMembershipTab: "_33ITA9Gf4yLExGG5x52N6E"
			}
		},
		"./src/reddit/pages/Settings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/uuid/v4.js"),
				d = n.n(c),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/extractQueryParams/index.ts"),
				b = n("./src/lib/fastdom/index.ts"),
				h = n("./src/reddit/actions/pages/shared.ts"),
				f = n("./node_modules/js-cookie/src/js.cookie.js"),
				g = n.n(f),
				v = n("./src/reddit/actions/alpha.ts"),
				_ = n("./src/reddit/actions/login.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/actions/users.ts"),
				E = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				j = n("./src/reddit/components/ConfirmModal/index.tsx"),
				x = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				w = n("./src/reddit/actions/accountGender/index.ts"),
				k = n("./src/reddit/actions/meta.ts"),
				S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/featureFlags/index.ts"),
				N = n("./src/reddit/helpers/trackers/profileSettings.ts");
			var I = n("./src/reddit/selectors/sso.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				T = n("./src/lib/validateEmail/index.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				R = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				B = n("./src/reddit/icons/svgs/Info/index.tsx"),
				F = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				D = n("./src/reddit/models/Toast/index.ts"),
				U = n("./src/reddit/models/User/index.ts"),
				G = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				H = n.n(G);
			const W = Object(l.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(A.k)(e);
						return t && Object(U.e)(t) || ""
					}
				}),
				z = Object(a.b)(W, e => ({
					changeEmail: t => e(Object(C.v)(t)),
					sendResetEmail: t => e(Object(C.y)(t)),
					showErrorToast: t => e(Object(M.f)({
						duration: M.a,
						kind: D.b.Error,
						text: t
					}))
				})),
				q = e => e ? r.a.createElement(R.a, {
					className: Object(u.a)(H.a.image, H.a.success)
				}) : r.a.createElement(F.a, {
					className: Object(u.a)(H.a.image, H.a.error)
				}),
				V = e => e ? o.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : o.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				Y = e => e ? o.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : o.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				J = e => e ? o.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : o.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				Q = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? r.a.createElement(B.a, {
						className: Object(u.a)(H.a.inputIcon, H.a.error)
					}) : r.a.createElement(R.a, {
						className: Object(u.a)(H.a.inputIcon, H.a.success)
					}) : null
				};
			class Z extends r.a.Component {
				constructor(e) {
					super(e), this.onEmailChange = e => this.setState({
						enteredEmail: e,
						errorMsg: "",
						inputChecked: !1
					}), this.onSendResetEmail = () => {
						const {
							changeEmail: e,
							email: t,
							sendResetEmail: n
						} = this.props, {
							enteredEmail: s
						} = this.state, r = Object(T.a)(s, !1), a = r ? "" : o.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: a,
							inputChecked: !0
						}), r && (t ? n({
							curEmail: s,
							name: this.props.username
						}) : e({
							newEmail: s
						}))
					}, this.state = {
						enteredEmail: e.email || "",
						errorMsg: "",
						inputChecked: !1
					}
				}
				render() {
					const {
						emailSent: e
					} = this.props, {
						enteredEmail: t,
						errorMsg: n
					} = this.state, s = !this.props.email && !e, a = s && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return r.a.createElement("div", {
						className: H.a.container
					}, r.a.createElement("h3", {
						className: H.a.header
					}, o.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), r.a.createElement("div", {
						className: H.a.status
					}, q(e), r.a.createElement("h3", {
						className: H.a.statusText
					}, Y(e))), r.a.createElement("p", {
						className: H.a.description
					}, V(e)), r.a.createElement("div", {
						className: H.a.actionContainer
					}, r.a.createElement("div", {
						className: H.a.emailContainer
					}, s ? r.a.createElement(r.a.Fragment, null, r.a.createElement(L.a, {
						className: Object(u.a)(H.a.input, H.a[a]),
						label: o.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), Q(this.state), r.a.createElement("h6", {
						className: H.a.errorMsg
					}, n)) : r.a.createElement("p", {
						className: H.a.emailText
					}, J(e), r.a.createElement("span", {
						className: H.a.emailAddress
					}, t))), r.a.createElement(O.k, {
						className: H.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? o.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : o.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var K = z(Z),
				X = n("./src/higherOrderComponents/asModal/index.tsx"),
				$ = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ee = n("./src/reddit/controls/FormFields/index.tsx"),
				te = n("./src/reddit/controls/TextButton/index.tsx"),
				ne = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				oe = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				se = n.n(oe);
			const re = 50;
			class ae extends r.a.Component {
				constructor(e) {
					super(e), this.handleCustomGenderChange = e => {
						const t = e.target.value || "";
						this.setState({
							customGenderInput: t
						})
					}, this.handleSubmit = async () => {
						const {
							onCloseModal: e,
							onConfirmModal: t
						} = this.props, {
							customGenderInput: n
						} = this.state;
						this.setState({
							isPending: !0
						}), await t(n), e()
					}, this.inputsAreValid = () => {
						const e = this.state.customGenderInput.trim();
						return e.length > 0 && e.length <= re
					}, this.state = {
						customGenderInput: e.definedGender || "",
						isPending: !1
					}
				}
				render() {
					const {
						className: e,
						onCloseModal: t
					} = this.props, {
						customGenderInput: n,
						isPending: s
					} = this.state;
					return r.a.createElement("section", {
						className: Object(u.a)(e, se.a.container)
					}, r.a.createElement($.i, null, r.a.createElement(ne.a, null, r.a.createElement($.q, null, o.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), r.a.createElement(te.a, {
						onClick: t,
						disabled: s
					}, r.a.createElement($.b, null)))), r.a.createElement($.l, null, r.a.createElement(ee.b, {
						placeholder: o.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: se.a.customGenderInput,
						disabled: s,
						maxLength: re,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), r.a.createElement($.g, null, r.a.createElement($.a, {
						onClick: t,
						disabled: s
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement($.r, {
						disabled: !this.inputsAreValid() || s,
						onClick: this.handleSubmit
					}, o.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var ie = Object(X.a)(ae),
				le = n("./src/higherOrderComponents/asTooltip.tsx"),
				ce = n("./src/reddit/actions/tooltip.ts"),
				de = n("./src/reddit/controls/Dropdown/index.tsx"),
				ue = n("./src/reddit/controls/Dropdown/Row.tsx"),
				me = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				pe = n("./src/reddit/selectors/tooltip.ts"),
				be = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				he = n.n(be);
			const fe = Object(le.a)(de.a),
				ge = Object(l.c)({
					isDropdownOpen: (e, t) => Object(pe.b)(t.dropdownId)(e)
				});
			class ve extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => r.a.createElement(ue.b, {
						className: he.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => r.a.createElement(ue.b, {
						displayText: e.displayText,
						isSelected: t,
						key: e.key,
						noIcon: !e.icon,
						onClick: () => this.props.onSelect(e)
					}, e.contentJsx || e.icon)
				}
				render() {
					const {
						props: e
					} = this, {
						items: t,
						placeholder: n,
						renderLabel: o = this.renderLabel,
						renderItem: s = this.renderDropdownItem,
						selectedKey: a
					} = this.props, i = n && {
						displayLabel: n,
						key: n
					}, l = t.find(e => e.key === a) || i || t[0];
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(he.a.container, e.className),
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: he.a.labelWrapper
					}, o(l), r.a.createElement("span", null, r.a.createElement(me.b, null))), r.a.createElement(fe, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, a === e.key))))
				}
			}
			var _e, ye = Object(a.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(ce.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(ve),
				Ce = n("./src/reddit/components/Settings/shared/Widgets.tsx");
			! function(e) {
				e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
			}(_e || (_e = {}));
			var Ee = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				je = n.n(Ee);
			const xe = () => [{
				key: _e.FEMALE,
				displayText: o.fbt._("Female", null, {
					hk: "G3G7q"
				})
			}, {
				key: _e.MALE,
				displayText: o.fbt._("Male", null, {
					hk: "2xBOfQ"
				})
			}, {
				key: _e.NON_BINARY,
				displayText: o.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: _e.OPT_OUT,
				displayText: o.fbt._("Prefer not to say", null, {
					hk: "48BJY1"
				})
			}, {
				key: _e.USER_DEFINED,
				displayLabel: o.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: o.fbt._("I refer to myself as...", null, {
					hk: "3RVNst"
				})
			}];
			class we extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isCustomGenderModalOpen: !1,
						pending: !1,
						tmpSelected: this.props.selected
					}, this.onSelect = async e => {
						const {
							onChange: t
						} = this.props, n = e.key;
						if (n === _e.USER_DEFINED) return void this.openCustomGenderModal();
						const o = {
							definedGender: null,
							genderCategory: n
						};
						this.setState({
							pending: !0,
							tmpSelected: o
						}), await t(o), this.setState({
							pending: !1
						})
					}, this.onConfirmModal = async e => {
						const {
							onChange: t
						} = this.props, n = {
							definedGender: e,
							genderCategory: _e.USER_DEFINED
						};
						await t(n)
					}, this.openCustomGenderModal = () => {
						this.setState({
							isCustomGenderModalOpen: !0
						})
					}, this.closeCustomGenderModal = () => {
						this.setState({
							isCustomGenderModalOpen: !1
						})
					}
				}
				render() {
					const {
						isCustomGenderModalOpen: e,
						pending: t,
						tmpSelected: n
					} = this.state, {
						selected: s
					} = this.props, {
						definedGender: a,
						genderCategory: i
					} = {
						...t ? n : s
					};
					return r.a.createElement(Ce.c, {
						label: o.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: o.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, r.a.createElement("div", {
						className: je.a.wrapper
					}, r.a.createElement(ye, {
						dropdownId: "gender-dropdown-id",
						items: xe(),
						onSelect: this.onSelect,
						placeholder: o.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && r.a.createElement(ie, {
						onCloseModal: this.closeCustomGenderModal,
						definedGender: a || "",
						onConfirmModal: this.onConfirmModal,
						onOverlayClick: this.closeCustomGenderModal,
						withOverlay: !0
					}))
				}
			}
			var ke = n("./src/reddit/components/Settings/modalIds.ts"),
				Se = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Oe = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				Pe = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const Ne = Object.freeze({
					[Oe.GERMAN_LOCALE]: Object.freeze({
						bcp47: Oe.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.GERMAN_LOCALE),
						rtl: !1
					}),
					[Oe.DEFAULT_LOCALE]: Object.freeze({
						bcp47: Oe.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.DEFAULT_LOCALE),
						rtl: !1
					}),
					[Oe.SPANISH_LOCALE]: Object.freeze({
						bcp47: Oe.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.SPANISH_LOCALE),
						rtl: !1
					}),
					[Oe.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: Oe.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(x.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[Oe.ITALIAN_LOCALE]: Object.freeze({
						bcp47: Oe.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.ITALIAN_LOCALE),
						rtl: !1
					}),
					[Oe.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: Oe.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[Oe.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: Oe.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				Ie = {},
				Ae = Object.freeze({
					[Oe.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: Oe.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[Oe.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: Oe.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[Oe.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: Oe.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Oe.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				Te = Object(l.a)(A.H, Pe.b, (e, t) => e || t ? {
					...Ne,
					...Ie,
					...Ae
				} : Ne);
			var Me = n("./src/reddit/helpers/location.ts"),
				Le = n("./src/reddit/constants/experiments.ts"),
				Re = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Be = Object(l.a)(e => Object(Re.c)(e, {
				experimentEligibilitySelector: A.K,
				experimentName: Le.I
			}), e => e === Le.T.Enabled);
			var Fe = n("./src/reddit/selectors/meta.ts"),
				De = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				Ue = n.n(De);
			const Ge = Object(l.c)({
					gender: e => {
						var t, n;
						return null === (n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.account) || void 0 === n ? void 0 : n.gender
					},
					hasVerifiedEmail: A.A,
					isFPR: A.I,
					language: A.V,
					shouldShowCreatePasswordModal: I.d,
					showLanguageSection: P.d.langSelect,
					availableLocales: Te,
					locale: Fe.i,
					shouldShowCountrySection: Be,
					country: A.g
				}),
				He = Object(a.b)(Ge, e => ({
					changeAccountGender: t => e(Object(w.a)(t)),
					changeLanguage: t => e(Object(k.g)(t)),
					openChangeEmailModal: () => e(Object(y.i)(ke.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(y.h)(ke.l)),
					resendEmail: () => e(Object(C.x)())
				})),
				We = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : r.a.createElement(r.a.Fragment, null, o.fbt._("{email} not verified!", [o.fbt._param("email", e)], {
					hk: "3PanQN"
				}), r.a.createElement(O.h, {
					className: Ue.a.tertiaryBtn,
					onClick: n
				}, o.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : o.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var ze = He(({
					changeAccountGender: e,
					changeLanguage: t,
					gender: a,
					isFPR: i,
					language: l,
					openChangeEmailModal: c,
					openSSOCreatePasswordForEmailModal: d,
					shouldShowCreatePasswordModal: u,
					showLanguageSection: m,
					shouldShowCountrySection: p,
					toggleChangePasswordModal: b,
					availableLocales: h,
					locale: f,
					country: g,
					update: v,
					..._
				}) => {
					const [y, C] = Object(s.useState)(!1), E = Object(s.useCallback)(async e => {
						C(!0), await t(e), C(!1)
					}, [t]), j = Object(S.b)(), w = Object(s.useCallback)(async ({
						definedGender: t,
						genderCategory: n
					}) => {
						j(Object(N.a)()), await e({
							definedGender: t,
							genderCategory: n
						})
					}, [e, j]), [k, O] = Object(s.useState)(h), [P, I] = Object(s.useState)(Object(Me.singleCountryList)(g));
					Object(s.useEffect)(() => {
						"" !== l && f in h || O(e => ({
							...e,
							[l]: Object.freeze({
								bcp47: l,
								displayName: l,
								englishName: l,
								fbtLocale: Object(x.isoLocaleToFbtLocale)(l),
								rtl: !1
							})
						}))
					}, [h, l, f]), Object(s.useEffect)(() => {
						(async () => {
							const {
								allCountryOptions: e
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/location.ts"));
							I(e)
						})()
					}, []);
					const A = Object(s.useMemo)(() => (e => Object.entries(e).map(([e, t]) => ({
						value: e,
						displayName: t.displayName
					})))(k), [k]);
					return i ? r.a.createElement(K, {
						email: _.email
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.a, null, o.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), r.a.createElement(Ce.b, {
						actionText: o.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: o.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							u ? d() : c()
						},
						subtext: We(_)
					}), !u && r.a.createElement(Ce.b, {
						actionText: o.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: o.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						onClick: b,
						subtext: o.fbt._("Password must be at least 8 characters long", null, {
							hk: "3X8DBF"
						})
					}), r.a.createElement(we, {
						onChange: w,
						selected: a
					}), m ? r.a.createElement(Ce.i, {
						inputDisabled: y,
						id: "lang",
						items: A,
						labelClassname: Ue.a.languageSelector,
						label: o.fbt._("Display language {betaLabel}", [o.fbt._param("betaLabel", o.fbt._("{=(beta)}", [o.fbt._param("=(beta)", r.a.createElement("span", {
							className: Ue.a.betaLabel
						}, o.fbt._("(beta)", null, {
							hk: "1vhAp5"
						})))], {
							hk: "2gBJnB"
						}))], {
							hk: "46Sw4H"
						}),
						onChange: E,
						selected: f,
						subtext: o.fbt._("Select the language you'd like to experience the Reddit interface in. Note that this won't change the language of user-generated content and that this feature is still in development so translations and UI are still under review.", null, {
							hk: "2d65FQ"
						})
					}) : null, p ? r.a.createElement("div", {
						className: Ue.a.countryDropdown
					}, r.a.createElement(Ce.i, {
						id: "country",
						items: P,
						label: o.fbt._("Country", null, {
							hk: "1GB5Ra"
						}),
						onChange: e => v(e, "countryCode"),
						selected: g,
						subtext: o.fbt._("This is your primary location. {accountPrefs: language link}", [o.fbt._param("accountPrefs: language link", r.a.createElement("a", {
							className: Ue.a.Link,
							href: "https://www.reddit.com/api/report_redirect?reason_code=COUNTRY_SETTING"
						}, o.fbt._("Learn more", null, {
							hk: "2ygM43"
						})))], {
							hk: "bLreC"
						})
					})) : null)
				}),
				qe = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				Ve = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				Ye = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				Je = n("./src/reddit/constants/accountManager.ts"),
				Qe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ze = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ke = n("./src/reddit/selectors/accountManager.ts"),
				Xe = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				et = n("./src/config.ts"),
				tt = n("./src/reddit/helpers/trackers/sso.ts"),
				nt = n("./src/reddit/hooks/useTracking.ts"),
				ot = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				st = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				rt = n.n(st),
				at = n("./src/lib/lessComponent.tsx");
			const it = at.a.wrapped(Ce.c, "ConnectApple", rt.a),
				lt = at.a.wrapped(O.k, "ConnectAppleButton", rt.a),
				ct = at.a.div("ConnectionInfo", rt.a),
				dt = at.a.wrapped(O.o, "DisconnectButton", rt.a),
				ut = at.a.wrapped(ot.a, "AppleIcon", rt.a),
				mt = at.a.span("TextAndIconWrapper", rt.a);

			function pt(e) {
				return e.issuerId ? (() => r.a.createElement(Ce.c, {
					label: o.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: o.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, r.a.createElement(ct, null, r.a.createElement(dt, {
					onClick: e.onDisconnectClick
				}, "(", o.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[rt.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return r.a.createElement(it, {
						className: t,
						label: o.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: o.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, r.a.createElement(lt, {
						className: t,
						onClick: e.onConnectClick
					}, r.a.createElement(mt, null, r.a.createElement(ut, null), o.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const bt = Object(l.c)({
				issuerId: I.a,
				shouldShowCreatePasswordModal: I.d
			});
			var ht = Object(a.b)(bt, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(y.h)(ke.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(y.h)(ke.j)),
					openLinkAppleSSOModal: () => e(Object(_.g)()),
					openUnlinkAppleSSOModal: () => e(Object(_.l)())
				}))(e => {
					const t = Object(nt.a)();
					return r.a.createElement(pt, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(tt.c)(tt.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(tt.d)(tt.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				ft = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const gt = at.a.wrapped(Ce.c, "ConnectGoogle", rt.a),
				vt = at.a.wrapped(O.k, "ConnectGoogleButton", rt.a),
				_t = at.a.div("ConnectionInfo", rt.a),
				yt = at.a.wrapped(O.o, "DisconnectButton", rt.a),
				Ct = at.a.wrapped(ft.a, "GoogleIcon", rt.a),
				Et = at.a.span("TextAndIconWrapper", rt.a);

			function jt(e) {
				return e.hasGoogleIdentity ? (() => r.a.createElement(Ce.c, {
					label: o.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: o.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, r.a.createElement(_t, null, r.a.createElement(yt, {
					onClick: e.onDisconnectClick
				}, "(", o.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[rt.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return r.a.createElement(gt, {
						className: t,
						label: o.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: o.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, r.a.createElement(vt, {
						className: t,
						onClick: e.onConnectClick
					}, r.a.createElement(Et, null, r.a.createElement(Ct, null), o.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const xt = Object(l.c)({
				hasGoogleIdentity: I.b,
				shouldShowCreatePasswordModal: I.d
			});
			var wt = Object(a.b)(xt, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(ke.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(y.h)(ke.n)),
					openLinkGoogleSSOModal: () => e(Object(_.h)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.m)())
				}))(e => {
					const t = Object(nt.a)();
					return r.a.createElement(jt, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(tt.c)(tt.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(tt.d)(tt.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				kt = n("./src/reddit/actions/externalAccount.ts"),
				St = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Ot = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Pt = n("./src/reddit/models/ExternalAccount/index.ts");
			const Nt = at.a.wrapped(Ot.a, "TwitterIcon", rt.a),
				It = ({
					isFilled: e,
					...t
				}) => r.a.createElement(Nt, t),
				At = at.a.wrapped(St.a, "LoadingIcon", rt.a),
				Tt = ({
					isFilled: e,
					...t
				}) => r.a.createElement(At, t),
				Mt = at.a.wrapped(Ce.c, "ConnectTwitter", rt.a),
				Lt = at.a.wrapped(O.o, "DisconnectButton", rt.a),
				Rt = at.a.span("Username", rt.a),
				Bt = at.a.div("ConnectionInfo", rt.a);
			var Ft = n("./src/reddit/selectors/externalAccount.ts");
			const Dt = Object(l.c)({
					twitterAccount: Ft.a,
					isTwitterConnectionPending: Ft.b
				}),
				Ut = Object(a.b)(Dt, e => ({
					onConnectAccount: t => {
						e(kt.m(t)), t === Pt.a.Twitter && e((e, t) => N.c(t()))
					},
					onDisconnectAccount: t => {
						e(kt.n(t)), t === Pt.a.Twitter && e((e, t) => N.e(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => N.f(n(), t))
				}));
			var Gt = Object(Qe.u)()(Ut((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Pt.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Pt.a.Twitter)
					};
				return r.a.createElement(s.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return r.a.createElement(Ce.c, {
						label: o.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: o.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, r.a.createElement(Bt, null, r.a.createElement("div", null, r.a.createElement(Rt, null, "@", t.username)), r.a.createElement(Lt, {
						onClick: n
					}, "(", o.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: s
					} = e, a = Object(u.a)({
						[rt.a["m-responsive"]]: n
					}), i = o.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return r.a.createElement(Mt, {
						className: a,
						label: o.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: o.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, r.a.createElement(O.s, {
						className: rt.a.ConnectTwitterButton,
						Icon: s ? Tt : It,
						text: s ? null : i,
						onClick: t
					}))
				})(), r.a.createElement(Ce.p, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: o.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: o.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			})));
			var Ht = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return r.a.createElement(s.Fragment, null, r.a.createElement(Se.a, {
					id: "connected-accounts"
				}, o.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), r.a.createElement(Gt, e), (() => {
					if (e.shouldRenderSSOAccounts) return r.a.createElement(s.Fragment, null, r.a.createElement(ht, {
						isResponsiveSettingsEnabled: t
					}), r.a.createElement(wt, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function Wt() {
				return (Wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const zt = Object(l.c)({
				isEmployee: A.H
			});
			var qt = Object(a.b)(zt)(e => {
					const t = !e.isEmployee;
					return r.a.createElement(Ht, Wt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				Vt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Yt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				Jt = n.n(Yt);
			const Qt = at.a.wrapped($e.b, "Trash", Jt.a),
				Zt = at.a.wrapped(Se.a, "BetaTestsHeading", Jt.a),
				Kt = at.a.wrapped(Ce.p, "InBetaToggle", Jt.a),
				Xt = at.a.wrapped(Ce.p, "InRedesignBetaToggle", Jt.a),
				$t = at.a.button("DeactivateButton", Jt.a),
				en = at.a.div("DeactivateWrapper", Jt.a),
				tn = Object(l.c)({
					changePasswordHref: (e, t) => Object(Ke.c)(e, {
						pageLayer: t.pageLayer,
						path: Je.c.ChangePassword
					}),
					deactivateModalOpen: Object(Xe.b)("deactivate_modal_id"),
					email: A.n,
					hasGoogleIdentity: I.b,
					inRedesignBeta: A.E,
					optoutModalOpen: Object(Xe.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: I.d,
					user: A.k
				}),
				nn = Object(a.b)(tn, (e, t) => ({
					deactivate: t => {
						e(Object(C.w)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(ke.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: et.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${et.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(C.x)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class on extends r.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = null, this.launchChangePasswordFlow = () => {
						const {
							changePasswordHref: e,
							isResponsiveSettingsEnabled: t,
							toggleChangePasswordModal: n
						} = this.props;
						t ? window.location.href = e : n()
					}, this.disconnectFromGoogle = () => {
						var e, t;
						const {
							hasGoogleIdentity: n
						} = this.props;
						n && (null === (t = null === (e = this.iframeRef) || void 0 === e ? void 0 : e.current) || void 0 === t || t.contentWindow.postMessage({
							type: "unlinkGoogle"
						}, Object(Ze.a)()))
					}, this.deactivateAccount = () => {
						const {
							openSSOCreatePasswordForLinkGoogleModal: e,
							shouldShowCreatePasswordModal: t,
							toggleDeactivateModal: n
						} = this.props;
						t ? e() : n()
					}, this.onDeactivate = e => {
						this.disconnectFromGoogle(), this.props.deactivate(e)
					}
				}
				render() {
					const {
						deactivateModalOpen: e,
						email: t,
						hasGoogleIdentity: n,
						inRedesignBeta: s,
						isResponsiveSettingsEnabled: a,
						optOut: i,
						optoutModalOpen: l,
						pageLayer: c,
						prefs: d,
						shouldShowCreatePasswordModal: m,
						toggleDeactivateModal: p,
						toggleOptoutModal: b,
						update: h,
						user: f
					} = this.props, g = Object(u.a)({
						[Jt.a["m-responsive"]]: a
					}), v = Object(u.a)({
						[Jt.a.ResponsiveOverlay]: a
					});
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ye.a, null, r.a.createElement(Ve.b, {
						isResponsiveSettingsEnabled: a
					}, o.fbt._("Account settings", null, {
						hk: "2faClM"
					})), r.a.createElement(ze, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow,
						update: h
					}), r.a.createElement(qt, this.props), r.a.createElement(Zt, {
						className: g
					}, o.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), r.a.createElement(Kt, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: o.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: o.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), r.a.createElement(Xt, {
						className: g,
						on: !s,
						onClick: b,
						label: o.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: o.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), r.a.createElement(Se.a, null, o.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), r.a.createElement(en, null, r.a.createElement($t, {
						onClick: this.deactivateAccount
					}, r.a.createElement(Qt, null), o.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), l && r.a.createElement(j.a, {
						headerText: o.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: o.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: o.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: o.fbt._("opt out", null, {
							hk: "2Abiox"
						}),
						onAccept: i,
						onCancel: b,
						onOverlayClick: b,
						overlayClassName: v,
						withOverlay: !0
					}), e && r.a.createElement(Vt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && r.a.createElement(qe.a, {
						isResponsiveSettingsEnabled: a
					})), n && r.a.createElement(E.a, {
						className: Jt.a.googleDisconnectIFrame,
						pageLayer: c,
						path: Je.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var sn = Object(Qe.u)()(nn(on)),
				rn = n("./src/reddit/reducers/user/prefs/index.ts"),
				an = n("./src/reddit/actions/chat/constants.ts"),
				ln = n("./src/reddit/actions/chat/userSettings.ts"),
				cn = n("./src/reddit/actions/userBlocks.ts"),
				dn = n("./src/reddit/actions/userWhitelist.ts"),
				un = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				mn = n("./src/reddit/components/Hovercards/helpers.ts"),
				pn = n("./src/reddit/components/HumanDate/index.tsx"),
				bn = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				hn = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				fn = n.n(hn);
			const {
				fbt: gn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vn = at.a.p("Date", fn.a), _n = at.a.wrapped(bn.a, "UserNameAndIcon", fn.a), yn = at.a.button("Button", fn.a), Cn = at.a.div("ButtonWrapper", fn.a);
			var En = at.a.wrapped(e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement(_n, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(mn.b)({
						author: e.name,
						tooltipIdPrefix: un.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), r.a.createElement(vn, null, r.a.createElement(pn.d, {
					seconds: e.date / m.Qb
				})), r.a.createElement(Cn, null, r.a.createElement(yn, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, gn._("Remove", null, {
					hk: "1rZWA4"
				})))), "Component", fn.a),
				jn = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				xn = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				wn = n.n(xn);
			const kn = 5,
				Sn = at.a.h4("ListHeading", wn.a),
				On = at.a.div("ListBox", wn.a),
				Pn = at.a.div("MoreWrapper", wn.a),
				Nn = at.a.button("MoreButton", wn.a),
				In = at.a.wrapped(Ce.n, "Subtext", wn.a);
			class An extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === jn.a.pending && this.props.api.new === jn.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: n,
						api: s,
						add: a,
						padBottom: i,
						remove: l,
						list: c,
						label: d,
						title: m,
						subtext: p
					} = this.props, b = e ? c.length : 5;
					return r.a.createElement("div", {
						className: Object(u.a)(wn.a.container, n, {
							[wn.a.mPadBottom]: !!i
						})
					}, r.a.createElement(Sn, null, m), void 0 !== p && r.a.createElement(In, null, p), r.a.createElement(L.a, {
						buttonText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: s.new === jn.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), r.a.createElement(On, null, c.slice(0, b).map(e => r.a.createElement(En, {
						disabled: s[e.name] === jn.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => l(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), c.length > kn && !e ? r.a.createElement(Pn, null, r.a.createElement(Nn, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, o.fbt._("Show all", null, {
						hk: "W1Cyk"
					}))) : null))
				}
			}
			var Tn = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Mn = n.n(Tn);
			const Ln = {
					[rn.b.Whitelisted]: () => o.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[rn.b.Everyone]: () => o.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				Rn = e => {
					const t = Ln[e];
					return t && t()
				},
				Bn = at.a.div("ListsWrapper", Mn.a),
				Fn = Object(l.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Dn = Object(a.b)(Fn, (e, t) => ({
					addBlocked: t => e(Object(cn.h)(t)),
					addWhitelisted: t => e(Object(dn.g)(t)),
					removeWhitelisted: t => e(Object(dn.h)(t)),
					removeBlocked: t => e(Object(cn.g)(t)),
					saveChatSettings: t => e(Object(ln.c)(t))
				}))(({
					addWhitelisted: e,
					chatSettings: t,
					prefs: {
						acceptPrivateMessages: n
					},
					removeWhitelisted: s,
					saveChatSettings: a,
					update: i,
					whitelist: l,
					whitelistApi: c
				}) => {
					const d = Object(an.b)(t.invitePolicy),
						u = [an.a.anybody, an.a.account_age_30_days, an.a.nobody],
						m = [Object(an.b)(an.a.anybody), Object(an.b)(an.a.account_age_30_days), Object(an.b)(an.a.nobody)],
						p = Rn(n),
						b = [rn.b.Everyone, rn.b.Whitelisted],
						h = [Rn(rn.b.Everyone), Rn(rn.b.Whitelisted)];
					return r.a.createElement(Ye.a, null, r.a.createElement(Ve.b, {
						isResponsiveSettingsEnabled: !1
					}, o.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), r.a.createElement(Ce.d, {
						label: o.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: u,
						displayItems: m,
						displayTitle: d,
						selected: t.invitePolicy,
						onClick: e => {
							a({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), r.a.createElement(Ce.d, {
						label: o.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: o.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not approved.", null, {
							hk: "48t4Ee"
						}),
						items: b,
						displayItems: h,
						selected: n,
						displayTitle: p,
						onClick: e => i(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (t.invitePolicy !== an.a.anybody || n === rn.b.Whitelisted) && r.a.createElement(Bn, null, r.a.createElement(An, {
						title: o.fbt._("Approved Users", null, {
							hk: "U0YhB"
						}),
						subtext: o.fbt._("Approved users can always send you private messages.", null, {
							hk: "1Wr1CF"
						}),
						label: o.fbt._("Add new user to approved list", null, {
							hk: "TP2Sh"
						}),
						add: e,
						remove: s,
						list: l,
						api: c
					})))
				}),
				Un = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				Gn = n.n(Un);

			function Hn(e) {
				return r.a.createElement("header", {
					className: Object(u.a)(Gn.a.container, e.className)
				}, r.a.createElement("div", {
					className: Gn.a.title
				}, o.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), r.a.createElement("div", {
					className: Gn.a.tag
				}, o.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var Wn = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				zn = n("./src/reddit/contexts/ApiContext.tsx"),
				qn = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Vn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Yn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Jn = n("./src/reddit/selectors/economics.ts"),
				Qn = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				Zn = n.n(Qn);
			const {
				fbt: Kn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Xn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(Xn || (Xn = {}));
			class $n extends r.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(qn.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = Xn.Default;
					e.connectCode && e.connectStateToken && (t = Xn.Connecting), e.stripeConnected && (t = Xn.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== Xn.Connected) {
						const e = await Object(qn.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: Xn.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: Xn.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = Kn._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === Xn.Connected && (n = Kn._("connect", null, {
						hk: "22jQRU"
					})), t === Xn.Connecting && (n = Kn._("connecting...", null, {
						hk: "3ccNPc"
					})), r.a.createElement("div", {
						className: e
					}, r.a.createElement(Se.a, null, Kn._("accept tips", null, {
						hk: "1kEl0R"
					})), r.a.createElement(Ce.l, {
						direction: "row",
						label: Kn._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: Kn._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, r.a.createElement("div", {
						className: Zn.a.cta
					}, r.a.createElement(O.k, {
						className: Zn.a.button,
						disabled: t !== Xn.Default,
						onClick: this.initiateStripeConnect
					}, n), r.a.createElement("div", {
						className: Zn.a.legal
					}, Kn._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [Kn._param("Previews Terms of Service", r.a.createElement(Wn.a, {
						className: Zn.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), r.a.createElement("div", {
						className: Zn.a.disclaimer
					}, r.a.createElement(Yn.a, {
						className: Zn.a.icon
					}), Kn._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const eo = Object(l.c)({
					stripeConnected: Jn.v
				}),
				to = Object(a.b)(eo, e => ({
					onError: t => e(Object(M.f)({
						duration: 5e3,
						kind: D.b.Error,
						text: Object(Vn.a)(t)
					}))
				}));
			var no = Object(zn.b)(to($n)),
				oo = n("./src/reddit/components/Settings/Creator/index.m.less"),
				so = n.n(oo);

			function ro(e) {
				return r.a.createElement(Ye.a, null, r.a.createElement("div", null, r.a.createElement(Hn, {
					className: so.a.header
				}), r.a.createElement(no, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var ao = n("./src/lib/listingSort/index.ts"),
				io = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				lo = n("./src/reddit/constants/listingSorts.ts");
			const co = [m.V.HOT, m.V.NEW, m.V.TOP, m.V.RISING];
			var uo = e => {
				const {
					dropdownId: t
				} = e, n = co.map(e => ({
					key: e,
					displayText: Object(lo.a)(e),
					icon: r.a.createElement(io.a, {
						sort: e
					})
				}));
				return r.a.createElement(ye, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const mo = [m.ec.HOUR, m.ec.DAY, m.ec.WEEK, m.ec.MONTH, m.ec.YEAR, m.ec.ALL];
			var po = e => {
					const {
						dropdownId: t
					} = e, n = mo.map(e => ({
						key: e,
						displayText: Object(lo.b)(e)
					}));
					return r.a.createElement(ye, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				bo = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				ho = n.n(bo);
			const fo = at.a.div("Separator", ho.a);
			class go extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(ao.d)(this.props.fullSort);
						this.props.onChange(Object(ao.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(ao.d)(this.props.fullSort);
						this.props.onChange(Object(ao.c)({
							sort: t,
							timeSort: e
						}))
					}
				}
				render() {
					const {
						className: e,
						fullSort: t,
						dropdownPrefix: n
					} = this.props, {
						sort: s,
						timeSort: a
					} = Object(ao.d)(t);
					return r.a.createElement(Ce.c, {
						className: e,
						label: o.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: o.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, r.a.createElement("div", {
						className: ho.a.wrapper
					}, r.a.createElement(uo, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: s
					}), a && r.a.createElement(r.a.Fragment, null, r.a.createElement(fo, null), r.a.createElement(po, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: a
					}))))
				}
			}
			var vo = n("./src/reddit/constants/postLayout.ts"),
				_o = n("./src/reddit/icons/fonts/index.tsx"),
				yo = n("./src/reddit/controls/Dropdown/index.m.less"),
				Co = n.n(yo);
			const Eo = {
				[vo.d.Card]: Object(_o.b)("view_card"),
				[vo.d.Classic]: Object(_o.b)("view_classic"),
				[vo.d.Compact]: Object(_o.b)("view_compact")
			};

			function jo(e) {
				const t = Eo[e.layout];
				return r.a.createElement(t, {
					className: Co.a.iconStyles
				})
			}
			const xo = [vo.d.Card, vo.d.Classic, vo.d.Compact];
			var wo = e => {
					const {
						dropdownId: t
					} = e, n = xo.map(e => ({
						key: e,
						displayText: Object(vo.h)(e),
						icon: r.a.createElement(jo, {
							layout: e
						})
					}));
					return r.a.createElement(ye, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				ko = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				So = n.n(ko);
			class Oo extends r.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: o,
						layout: s
					} = this.props;
					return r.a.createElement(Ce.c, {
						className: e,
						label: n,
						subtext: o
					}, r.a.createElement("div", {
						className: So.a.wrapper
					}, r.a.createElement(wo, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: s
					})))
				}
			}
			var Po = n("./src/reddit/components/Settings/FeedForm.m.less"),
				No = n.n(Po);

			function Io({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					hideNSFW: n,
					openPostInNewTab: s,
					over18: a,
					privateFeeds: i,
					reduceAnimationsFromAwards: l,
					rememberCommunitySort: c,
					sort: d,
					stylesEnabled: m,
					useMarkdown: p,
					layout: b,
					rememberCommunityLayout: h
				},
				update: f
			}) {
				const g = Object(u.a)({
					[No.a["m-responsive"]]: e
				});
				return r.a.createElement(Ye.a, null, r.a.createElement(Ve.b, {
					isResponsiveSettingsEnabled: e
				}, o.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), r.a.createElement(Se.a, null, o.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), r.a.createElement(Ce.p, {
					on: a,
					onClick: () => f(!a, "over18"),
					label: o.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: o.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), r.a.createElement(Ce.p, {
					disabled: !a,
					label: o.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!a && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: o.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), r.a.createElement(Ce.p, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: o.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: o.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), r.a.createElement(Ce.p, {
					on: l,
					onClick: () => f(!l, "reduceAnimationsFromAwards"),
					label: o.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: o.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), r.a.createElement(Ce.p, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: o.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: o.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), r.a.createElement(go, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), r.a.createElement(Ce.p, {
					className: g,
					indent: !0,
					on: !!c,
					onClick: () => f(!c, "rememberCommunitySort"),
					label: o.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: o.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), r.a.createElement(Oo, {
					className: g,
					dropdownPrefix: "subreddit-view-setting",
					label: o.fbt._("Global content view", null, {
						hk: "1tWTJK"
					}),
					layout: b,
					onChange: e => f(e, "layout"),
					subtext: o.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
						hk: "1NyVGg"
					})
				}), r.a.createElement(Ce.p, {
					className: g,
					on: !!h,
					onClick: () => f(!h, "rememberCommunityLayout"),
					label: o.fbt._("Remember per community", null, {
						hk: "42Ianh"
					}),
					subtext: o.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
						hk: "3fxqrV"
					}),
					indent: !0
				}), r.a.createElement(Ce.p, {
					className: g,
					on: !!s,
					onClick: () => f(!s, "openPostInNewTab"),
					label: o.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: o.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), r.a.createElement(Se.a, {
					className: g
				}, o.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), r.a.createElement(Ce.p, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: o.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: o.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.a, null, o.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), r.a.createElement(Ce.g, {
					label: o.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: o.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${et.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var Ao = n("./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx"),
				To = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				Mo = n("./src/reddit/helpers/trackers/notifications.ts"),
				Lo = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				Ro = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Bo = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				Fo = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				Do = n.n(Fo);
			var Uo = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [a, i] = Object(s.useState)(Bo.a.Push), [l, c] = Object(s.useState)(null), d = Object(nt.a)(), u = a === Bo.a.Push, m = a === Bo.a.Email, p = a === Bo.a.ModCommunityAlerts, b = a === Bo.a.CommunityAlerts, h = e => {
						i(e), e !== Bo.a.ModCommunityAlerts && c(null)
					}, f = m || p || b;
					return r.a.createElement(Ye.a, null, r.a.createElement("nav", {
						className: Do.a.nav
					}, r.a.createElement("button", {
						onClick: () => h(f ? Bo.a.Push : Bo.a.Email)
					}, r.a.createElement(Ve.b, {
						isResponsiveSettingsEnabled: e
					}, f && r.a.createElement(r.a.Fragment, null, r.a.createElement(Lo.a, {
						className: Do.a.arrowLeft
					}), o.fbt._("Back", null, {
						hk: "26R5gK"
					})), u && r.a.createElement(r.a.Fragment, null, o.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}), r.a.createElement(Ro.a, {
						className: Do.a.arrowRight
					}))))), !p && r.a.createElement(Ve.b, {
						isResponsiveSettingsEnabled: e
					}, u ? o.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : m ? o.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					}) : o.fbt._("Community alerts", null, {
						hk: "CdGGV"
					})), u && r.a.createElement(To.c, {
						handleModPnClick: (e, t) => {
							c({
								subredditId: e,
								subredditName: t
							}), h(Bo.a.ModCommunityAlerts)
						},
						handleCommunityNavClick: () => i(Bo.a.CommunityAlerts)
					}), m && r.a.createElement(r.a.Fragment, null, r.a.createElement(To.a, null), r.a.createElement(Se.a, null), r.a.createElement(Ce.p, {
						on: !!t,
						onClick: () => {
							d(Object(Mo.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: o.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})), p && l && r.a.createElement("div", {
						className: Do.a.ModPnSettings
					}, r.a.createElement(Ao.a, {
						subredditId: l.subredditId,
						subredditName: l.subredditName
					})))
				},
				Go = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Ho = n.n(Go);

			function Wo(e) {
				return r.a.createElement("header", {
					className: Object(u.a)(Ho.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ho.a.title
				}, o.fbt._("Payments", null, {
					hk: "rydT0"
				})), r.a.createElement("div", {
					className: Ho.a.description
				}, o.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var zo = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				qo = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Vo = n("./src/reddit/models/Payments/index.ts"),
				Yo = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Jo = n.n(Yo);
			class Qo extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						paymentsBeingRemoved: {}
					}, this.removePayment = async e => {
						this.setState(t => ({
							paymentsBeingRemoved: {
								...t.paymentsBeingRemoved,
								[e.id]: !0
							}
						}));
						const t = e.type === Vo.a.SavedStripe ? await Object(qn.b)(this.props.apiContext(), e.id) : await Object(qn.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: {
								...t.paymentsBeingRemoved,
								[e.id]: !1
							}
						}))
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className
					}, r.a.createElement(Se.a, null, o.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return r.a.createElement("div", {
							className: Jo.a.payment,
							key: e.id
						}, r.a.createElement("div", {
							className: Jo.a.paymentDisplay
						}, r.a.createElement(qo.a, {
							className: Jo.a.lock
						}), e.display), r.a.createElement(O.q, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? o.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : o.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && r.a.createElement("div", {
						className: Jo.a.noSavedPayment
					}, o.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Zo = Object(l.c)({
					savedPayments: Jn.p
				}),
				Ko = Object(a.b)(Zo, e => ({
					onError: t => e(Object(M.f)({
						duration: 5e3,
						kind: D.b.Error,
						text: Object(Vn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Vo.a.SavedStripe && e(Object(zo.a)({
							cardId: t.id
						})), t.type === Vo.a.SavedPayPal && e(Object(zo.e)({
							sourceId: t.id
						}))
					}
				}));
			var Xo = Object(zn.b)(Ko(Qo)),
				$o = n("./src/reddit/components/Settings/Payments/index.m.less"),
				es = n.n($o);
			var ts = () => r.a.createElement(Ye.a, null, r.a.createElement(Wo, {
					className: es.a.header
				}), r.a.createElement(Xo, null)),
				ns = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				os = n("./src/reddit/components/Settings/DisruptiveComments/index.m.less"),
				ss = n.n(os);
			const rs = at.a.span("CollapseSensitivity", ss.a),
				as = () => [{
					key: m.l.OFF,
					displayText: o.fbt._("OFF", null, {
						hk: "1FXR7S"
					})
				}, {
					key: m.l.LOW,
					displayText: o.fbt._("LOW", null, {
						hk: "4ykiNL"
					})
				}, {
					key: m.l.MEDIUM,
					displayText: o.fbt._("MEDIUM", null, {
						hk: "11N0Ou"
					})
				}, {
					key: m.l.HIGH,
					displayText: o.fbt._("HIGH", null, {
						hk: "2ryi6r"
					})
				}];
			var is = ({
					className: e,
					onChange: t,
					selectedCollapseLevel: n
				}) => {
					const [a, i] = Object(s.useState)(n);
					return r.a.createElement(Ce.c, {
						className: e,
						label: o.fbt._("Collapse potentially disruptive comments", null, {
							hk: "3LXjDC"
						}),
						subtext: o.fbt._("Automatically collapse comments that are potentially rude or disrespectful by selecting the sensitivity level you're most comfortable with—selecting {=Low} will collapse the least, {=High} will collapse the most.", [o.fbt._param("=Low", r.a.createElement(rs, null, o.fbt._("Low", null, {
							hk: "3Twvv8"
						}))), o.fbt._param("=High", r.a.createElement(rs, null, o.fbt._("High", null, {
							hk: "Wcis2"
						})))], {
							hk: "fhIUp"
						})
					}, r.a.createElement("div", {
						className: ss.a.wrapper
					}, r.a.createElement(ye, {
						dropdownId: "disruptive-comment-id",
						items: as(),
						onSelect: e => {
							t(e.key, "badCommentAutocollapse"), i(e.key)
						},
						selectedKey: (e => {
							const t = e.toLowerCase();
							return t.charAt(0).toUpperCase() + t.slice(1)
						})(a) || ""
					})))
				},
				ls = n("./src/lib/constants/euCookiePolicy.ts");
			const cs = Object(l.a)(e => Object(Re.c)(e, {
					experimentEligibilitySelector: Re.a,
					experimentName: Le.j
				}), e => e === Le.d.Enabled),
				ds = Object(l.a)(e => Object(A.g)(e), e => ls.b.includes(e)),
				us = Object(l.a)(e => Object(Re.c)(e, {
					experimentEligibilitySelector: Re.a,
					experimentName: Le.h
				}), e => e === Le.b.Enabled),
				ms = Object(l.a)(e => Object(Re.c)(e, {
					experimentEligibilitySelector: A.K,
					experimentName: Le.H
				}), e => e === Le.S.Enabled),
				ps = at.a.span("SubheaderLink", Mn.a),
				bs = at.a.button("GenerateBackupCodesButton", Mn.a),
				hs = at.a.wrapped(Ce.g, "ThirdPartyAuth", Mn.a),
				fs = Object(l.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: P.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: I.d,
					shouldConsolidateAdsPreferences: us,
					shouldRemoveAdsPreferences: cs,
					shouldKeepAdsPreferencesForGDPR: ds,
					shouldShowBadCommentAutocollapse: ms,
					badCommentAutocollapse: A.c
				}),
				gs = Object(a.b)(fs, (e, t) => ({
					addBlocked: t => e(Object(cn.h)(t)),
					addWhitelisted: t => e(Object(dn.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(y.h)(ke.h)),
					removeWhitelisted: t => e(Object(dn.h)(t)),
					removeBlocked: t => e(Object(cn.g)(t)),
					saveChatSettings: t => e(Object(ln.c)(t)),
					enable2FA: () => e(Object(_.e)()),
					disable2FA: () => e(Object(_.d)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var vs = gs(({
					addBlocked: e,
					blocked: t,
					blockedApi: n,
					prefs: {
						allowClickTracking: s,
						hideFromRobots: a,
						activityRelevantAds: i,
						loginOtpEnabled: l,
						thirdPartyDataPersonalizedAds: c,
						thirdPartySiteDataPersonalizedAds: d,
						thirdPartySiteDataPersonalizedContent: m,
						showLocationBasedRecommendations: p,
						thirdPartyPersonalizedAds: b
					},
					enable2FA: h,
					disable2FA: f,
					generateBackupCodes: g,
					isResponsiveSettingsEnabled: v,
					openSSOCreatePasswordFor2FAModal: _,
					removeBlocked: y,
					update: C,
					shouldShowLocationBasedSetting: E,
					shouldShowCreatePasswordModal: j,
					shouldConsolidateAdsPreferences: x,
					shouldRemoveAdsPreferences: w,
					shouldKeepAdsPreferencesForGDPR: k,
					shouldShowBadCommentAutocollapse: S,
					badCommentAutocollapse: O
				}) => r.a.createElement(Ye.a, null, r.a.createElement(Ve.b, {
					isResponsiveSettingsEnabled: v
				}, o.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), r.a.createElement(Ve.a, null, o.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [o.fbt._param("=Privacy & Security FAQs", r.a.createElement(ps, null, o.fbt._("{=Privacy & Security FAQs}", [o.fbt._param("=Privacy & Security FAQs", r.a.createElement("a", {
					href: `${et.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, o.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), r.a.createElement(Se.a, null, o.fbt._("Safety", null, {
					hk: "WyYmF"
				})), r.a.createElement(An, {
					title: o.fbt._("People You’ve Blocked", null, {
						hk: "3DxcE1"
					}),
					subtext: o.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
						hk: "1m7s07"
					}),
					label: o.fbt._("Block new user", null, {
						hk: "2OeU8N"
					}),
					add: e,
					remove: y,
					list: t,
					api: n,
					padBottom: !0
				}), S ? r.a.createElement(is, {
					className: "badCommentAutocollapse",
					onChange: C,
					selectedCollapseLevel: O
				}) : null, x ? ((e, t, n, s, a, i, l, c, d, u, m, p) => r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.a, null, o.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), r.a.createElement(Ce.p, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: o.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: o.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && r.a.createElement(Ce.p, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: o.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: o.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && r.a.createElement(Ce.p, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: o.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), r.a.createElement(Se.a, null, o.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && r.a.createElement(Ce.p, {
					on: c,
					onClick: () => s(!c, "showLocationBasedRecommendations"),
					label: o.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: o.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), r.a.createElement(Se.a, null, o.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), !u || m && r.a.createElement(Ce.p, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: o.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: o.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), r.a.createElement(Ce.p, {
					on: p,
					onClick: () => s(!p, "thirdPartyPersonalizedAds"),
					label: o.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(a, s, i, C, 0, E, 0, p, m, w, k, b) : ((e, t, n, s, a, i, l, c, d, u, m) => r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.a, null, o.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), r.a.createElement(Ce.p, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: o.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: o.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && r.a.createElement(Ce.p, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: o.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: o.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u || m && r.a.createElement(Ce.p, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: o.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: o.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), r.a.createElement(Ce.p, {
					on: a,
					onClick: () => s(!a, "thirdPartyDataPersonalizedAds"),
					label: o.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: o.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), r.a.createElement(Ce.p, {
					on: l,
					onClick: () => s(!l, "thirdPartySiteDataPersonalizedAds"),
					label: o.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && r.a.createElement(Ce.p, {
					on: c,
					onClick: () => s(!c, "showLocationBasedRecommendations"),
					label: o.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: o.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && r.a.createElement(Ce.p, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: o.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(a, s, i, C, c, E, d, p, m, w, k), r.a.createElement(Se.a, null, o.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), r.a.createElement(Ce.p, {
					on: l,
					onClick: () => {
						j ? _() : l ? f() : h()
					},
					label: o.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: r.a.createElement(r.a.Fragment, null, o.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), l && r.a.createElement(r.a.Fragment, null, " ", o.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", r.a.createElement(bs, {
						type: "button",
						onClick: () => g()
					}, o.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), r.a.createElement(hs, {
					className: Object(u.a)({
						[Mn.a["m-responsive"]]: v
					}),
					label: o.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${et.a.redditUrl}/prefs/apps`,
					last: !0
				}), j && r.a.createElement(qe.a, {
					isResponsiveSettingsEnabled: v
				}))),
				_s = n("./src/reddit/actions/preferences.ts"),
				ys = n("./src/reddit/actions/snoovatarModal.ts"),
				Cs = n("./src/reddit/components/Loader/index.m.less"),
				Es = n.n(Cs);
			class js extends r.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: o
					} = this.props;
					return e ? n ? n() : r.a.createElement(St.a, {
						center: !0,
						className: Es.a.loadingIcon,
						sizePx: o || 10
					}) : t()
				}
			}
			var xs = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				ws = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				ks = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Ss = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Os = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				Ps = n("./src/reddit/selectors/structuredStyles.ts"),
				Ns = n("./src/reddit/selectors/subredditSettings.ts"),
				Is = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				As = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				Ts = n.n(As);
			const {
				fbt: Ms
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ls = 30, Rs = 200, Bs = Object(l.a)(A.k, Ns.a, A.ub, Ps.n, Xe.a, (e, t, n, o, s) => {
				const r = e && e.profileId,
					a = r && o[r] ? o[r].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(U.e)(e),
					currentUserUrl: e.url,
					enableFollowers: n.enableFollowers,
					isEmployee: e.isEmployee,
					isGold: e.isGold,
					over18: t.over18,
					prefersReducedAnimations: !!n.reduceAnimationsFromAwards,
					profileBanner: a,
					profileIcon: e.accountIcon,
					publicDescription: t.publicDescription,
					showActiveCommunities: n.showActiveCommunities,
					snoovatarUrl: e.snoovatarFullBodyAsset,
					title: t.title,
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === s
				}
			}), Fs = at.a.div("ImageUploaderLayout", Ts.a), Ds = at.a.wrapped(Is.a, "IconImageUploader", Ts.a), Us = at.a.wrapped(ks.a, "ProfileIcon", Ts.a), Gs = at.a.wrapped(Is.a, "BannerImageUploader", Ts.a), Hs = at.a.wrapped(ws.a, "ProfileBanner", Ts.a), Ws = at.a.div("ProfileModerationContent", Ts.a), zs = at.a.wrapped(Os.a, "PlusCircle", Ts.a), qs = at.a.span("LabelText", Ts.a), Vs = at.a.span("ImageType", Ts.a), Ys = at.a.a("Link", Ts.a), Js = at.a.img("DummyBanner", Ts.a), Qs = at.a.wrapped(xs.a, "Preview", Ts.a);
			class Zs extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(N.j)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(N.j)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(N.d)(this.props.contentVisible))
					}, this.onIconChange = async e => {
						this.setState({
							profileIconUploading: !0
						}), await this.props.imagesUpdateRequested(e, "profileIcon"), this.setState({
							profileIconUploading: !1
						})
					}, this.onBannerChange = async e => {
						this.setState({
							profileBannerUploading: !0
						}), await this.props.imagesUpdateRequested(e, "profileBanner"), this.setState({
							profileBannerUploading: !1
						})
					}, this.onDeleteBanner = async () => {
						this.setState({
							isDeletingBanner: !0
						}), await this.props.imageDeleteRequested("profileBanner"), this.setState({
							isDeletingBanner: !1
						})
					}, this.onDeleteIcon = async () => {
						this.setState({
							isDeletingIcon: !0
						}), await this.props.imageDeleteRequested("profileIcon"), this.setState({
							isDeletingIcon: !1
						})
					}, this.onEnableFollowersToggle = () => {
						this.props.save(this.props, {
							enableFollowers: !this.props.enableFollowers,
							prevEnableFollowers: this.props.enableFollowers,
							showActiveCommunities: this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(N.g)(!this.props.enableFollowers))
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							enableFollowers: this.props.enableFollowers,
							prevEnableFollowers: this.props.enableFollowers,
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(N.b)(this.props.showActiveCommunities))
					}, this.updateProfile = async (e, t) => {
						this.props.save({
							...this.props,
							[t]: e
						}, {
							enableFollowers: this.props.enableFollowers,
							prevEnableFollowers: this.props.enableFollowers,
							showActiveCommunities: this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						})
					}, this.state = {
						contentVisible: e.contentVisible,
						isDeletingBanner: !1,
						isDeletingIcon: !1,
						over18: e.over18,
						profileBannerUploading: !1,
						profileIconUploading: !1,
						publicDescription: e.publicDescription,
						title: e.title,
						isSaving: !1
					}
				}
				render() {
					const {
						awardedLastMonth: e,
						contentVisible: t,
						currentUserCreated: n,
						currentUserName: o,
						currentUserUrl: s,
						enableFollowers: a,
						isEmployee: i,
						isGold: l,
						isNSFWModalOpen: c,
						isResponsiveSettingsEnabled: d,
						onClickSnoovatar: m,
						over18: p,
						prefersReducedAnimations: b,
						profileBanner: h,
						profileIcon: f,
						showActiveCommunities: g,
						snoovatarUrl: v,
						toggleNSFWModal: _
					} = this.props, {
						isDeletingBanner: y,
						isDeletingIcon: C,
						profileBannerUploading: E,
						profileIconUploading: x,
						publicDescription: w,
						title: k
					} = this.state, S = Object(u.a)({
						[Ts.a["m-responsive"]]: d
					}), O = !!f && !Object(Ss.c)(f);
					return r.a.createElement(Ye.a, {
						sidebar: r.a.createElement(Qs, {
							bannerBackgroundImage: h,
							currentUserHasSnoovatar: !!v,
							editMode: !0,
							isEmployee: i,
							isDefaultIcon: !f || f.indexOf("avatar_default") > -1,
							isDeletingBanner: y,
							isDeletingIcon: C,
							isGold: l,
							isNSFW: p,
							isOverlay: !1,
							isOwnProfile: !0,
							onClickSnoovatar: m,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							prefersReducedAnimations: b,
							profileIcon: f,
							publicDescription: w,
							snoovatarUrl: v,
							recentAwardings: e,
							title: k,
							url: s,
							userCreated: n,
							username: o
						})
					}, r.a.createElement(Ve.b, {
						isResponsiveSettingsEnabled: d
					}, Ms._("Customize profile", null, {
						hk: "1fenXK"
					})), r.a.createElement(Se.a, null, Ms._("Profile Information", null, {
						hk: "3vzAUk"
					})), r.a.createElement(Ce.e, {
						label: Ms._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							k !== this.props.title && this.updateProfile(k, "title")
						},
						placeholder: Ms._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: Ls,
						subtext: Ms._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: k
					}), r.a.createElement(Ce.h, {
						label: Ms._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							w !== this.props.publicDescription && this.updateProfile(w, "publicDescription")
						},
						placeholder: Ms._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: Rs,
						subtext: Ms._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: w
					}), r.a.createElement(Se.a, null, Ms._("Images", null, {
						hk: "38DOkf"
					})), r.a.createElement(Ce.l, {
						label: Ms._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: Ms._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, r.a.createElement(Fs, {
						className: Object(u.a)(S)
					}, O ? r.a.createElement(Us, {
						className: S,
						iconUrl: f,
						isNSFW: !1,
						userName: o
					}) : r.a.createElement(Ds, {
						className: S,
						controlName: "profileIcon",
						icon: r.a.createElement(zs, null),
						isUploading: x,
						label: r.a.createElement(qs, null, Ms._("Drag and Drop or Upload {=Avatar} Image", [Ms._param("=Avatar", r.a.createElement(Vs, null, Ms._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: Ts.a.Label,
						onChange: this.onIconChange
					}), h ? r.a.createElement(Hs, {
						bannerUrl: h,
						className: S,
						isNSFW: !1,
						userName: o
					}) : r.a.createElement(Gs, {
						className: S,
						controlName: "profileBanner",
						icon: r.a.createElement(zs, null),
						isUploading: E,
						label: r.a.createElement(qs, null, Ms._("Drag and Drop or Upload {=Banner} Image", [Ms._param("=Banner", r.a.createElement(Vs, null, Ms._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: Ts.a.Label,
						onChange: this.onBannerChange
					}))), r.a.createElement(Se.a, null, Ms._("Profile category", null, {
						hk: "1YRE6p"
					})), r.a.createElement(Ce.p, {
						label: Ms._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: p,
						subtext: Ms._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), r.a.createElement(Se.a, null, Ms._("Advanced", null, {
						hk: "1US2Ur"
					})), r.a.createElement(Ce.p, {
						label: Ms._("Allow people to follow you", null, {
							hk: "30iVQH"
						}),
						subtext: Ms._("Followers will be notified about posts you make to your profile and see them in their home feed.", null, {
							hk: "3Ngn8M"
						}),
						on: a,
						onClick: this.onEnableFollowersToggle
					}), r.a.createElement(Ce.p, {
						label: Ms._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: Ms._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [Ms._param("profileForm: r/all link", r.a.createElement(Ys, {
							href: "/r/all"
						}, "r/all")), Ms._param("profileForm: /users link", r.a.createElement(Ys, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), r.a.createElement(Ce.p, {
						label: Ms._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: Ms._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: g,
						onClick: this.onShowActiveCommunitiesChange
					}), r.a.createElement(Se.a, null, Ms._("Profile moderation", null, {
						hk: "3vDS8h"
					})), r.a.createElement(Ws, null, Ms._("For moderation tools please visit our {=Profile Moderation page}", [Ms._param("=Profile Moderation page", r.a.createElement(Ys, {
						href: `/user/${o}/about/edit/moderation`
					}, Ms._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), c && r.a.createElement(j.a, {
						headerText: Ms._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: Ms._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [Ms._param("=NSFW content", r.a.createElement(Ys, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, Ms._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: Ms._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: Ms._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: _,
						onOverlayClick: _,
						overlayClassName: Object(u.a)({
							[Ts.a.ResponsiveOverlay]: d
						}),
						withOverlay: !0
					}), r.a.createElement(Js, {
						src: h
					}))
				}
			}
			const Ks = Object(a.b)(Bs, e => ({
					imageDeleteRequested: t => e(Object(_s.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(_s.z)(t, n)),
					onClickSnoovatar: () => e(Object(ys.b)({
						clickSource: "profile_overview"
					})),
					save: (t, n) => e(Object(_s.E)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(S.c)(Zs)),
				Xs = Object(l.c)({
					isLoading: e => !Object(Ns.a)(e)
				}),
				$s = Object(a.b)(Xs)(js);

			function er(e) {
				return r.a.createElement($s, {
					loaderSize: 50,
					render: () => r.a.createElement(Ks, e)
				})
			}
			var tr = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				nr = n.n(tr);

			function or(e) {
				return r.a.createElement("header", {
					className: e.className
				}, r.a.createElement("div", {
					className: nr.a.title
				}, o.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), r.a.createElement("div", {
					className: nr.a.subtitle
				}, o.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var sr = n("./src/reddit/actions/governance/communityDetails.ts"),
				rr = n("./src/lib/addQueryParams/index.ts"),
				ar = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				ir = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				lr = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				cr = n.n(lr);
			const {
				fbt: dr
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ur = Object(l.c)({
				userId: e => {
					const t = Object(A.k)(e);
					return t ? t.id : ""
				}
			});
			var mr = Object(a.b)(ur)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, o = t.primaryColor, s = Object(rr.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return r.a.createElement("div", {
						className: cr.a.body
					}, r.a.createElement("section", {
						className: cr.a.leftSection
					}, r.a.createElement("div", {
						className: cr.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), r.a.createElement("div", {
						className: cr.a.content
					}, r.a.createElement(ar.a, {
						index: "1",
						color: o
					}, dr._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), r.a.createElement(ar.a, {
						index: "2",
						color: o
					}, dr._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), r.a.createElement(ar.a, {
						index: "3",
						color: o
					}, dr._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), r.a.createElement("section", {
						className: cr.a.rightSection
					}, r.a.createElement(ir.a, {
						url: s,
						scale: 4
					})))
				})),
				pr = n("./src/reddit/constants/colors.ts"),
				br = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				hr = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				fr = n("./src/reddit/icons/svgs/Close/index.tsx"),
				gr = n("./src/reddit/components/Economics/Price/index.tsx"),
				vr = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				_r = n("./src/lib/localizeCurrency/index.ts"),
				yr = n("./src/reddit/hooks/useLocale.ts"),
				Cr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				Er = n.n(Cr);
			const jr = [() => o.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => o.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => o.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => o.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				xr = [() => o.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => o.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => o.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => o.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function wr({
				benefit: e,
				color: t
			}) {
				return r.a.createElement("li", {
					className: Er.a.benefit
				}, r.a.createElement("div", {
					className: Er.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(zn.b)(Object(S.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: s
				} = e, a = Object(yr.a)();
				return r.a.createElement("div", {
					className: Object(u.a)(Er.a.container, t)
				}, r.a.createElement("div", {
					className: Er.a.topLine
				}, r.a.createElement(vr.a, {
					className: Er.a.brand,
					subreddit: s
				}), r.a.createElement("div", {
					className: Er.a.title
				}, o.fbt._("{community} Supporter Membership", [o.fbt._param("community", s.displayText)], {
					hk: "eZ8PH"
				}))), r.a.createElement("header", {
					className: Er.a.subTitle
				}, o.fbt._("Support the {community} community and receive exclusive access to premium features.", [o.fbt._param("community", s.displayText)], {
					hk: "2pm4PV"
				})), r.a.createElement("article", null, r.a.createElement("div", {
					className: Er.a.benefitsTitle
				}, o.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), r.a.createElement("ul", {
					className: Er.a.benefits
				}, jr.map(e => r.a.createElement(wr, {
					benefit: e(),
					key: e()
				}))), r.a.createElement("div", {
					className: Er.a.benefitsTitle
				}, o.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), r.a.createElement("ul", {
					className: Er.a.benefits
				}, xr.map(e => r.a.createElement(wr, {
					benefit: e(),
					key: e()
				})))), r.a.createElement("footer", {
					className: Er.a.price
				}, o.fbt._("{price}/month", [o.fbt._param("price", Object(_r.b)(n, {
					locale: a
				}))], {
					hk: "4hvdfp"
				})))
			})));
			var kr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				Sr = n.n(kr);
			const {
				fbt: Or
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pr = e => Or._("You've been supporting the community and the development of new features since {joinDate}.", [Or._param("joinDate", e)], {
				hk: "37ImIl"
			}), Nr = [Or._("Loyalty badge", null, {
				hk: "15DctX"
			}), Or._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Or._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Or._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var Ir = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: o,
					title: s
				} = e, a = o.primaryColor;
				return r.a.createElement("div", {
					className: Sr.a.card,
					style: {
						borderColor: a
					}
				}, r.a.createElement(vr.a, {
					className: Sr.a.brand,
					subreddit: o
				}), r.a.createElement("div", {
					className: Sr.a.cardContent
				}, r.a.createElement("div", {
					className: Sr.a.cardTitle
				}, s), r.a.createElement(gr.a, {
					className: Sr.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: o.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), r.a.createElement("div", {
					className: Sr.a.membershipMsg
				}, Pr(t)), r.a.createElement("div", {
					className: Sr.a.benefitsTitle
				}, Or._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), r.a.createElement("ul", {
					className: Sr.a.benefits
				}, Nr.map(e => r.a.createElement(wr, {
					benefit: e,
					color: a,
					key: e
				})))))
			};
			const {
				fbt: Ar
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Tr = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: o,
						onClose: i,
						subreddit: l,
						title: c
					} = e, d = Object(a.d)(), m = Object(nt.a)();
					Object(s.useEffect)(() => {
						l && (d(Object(sr.a)({
							subredditId: l.id
						})), m(Object(hr.a)(l.id)))
					}, [d, m, l]);
					const p = l ? l.primaryColor : "",
						b = p && Object(br.a)(p, void 0, pr.b.white);
					return r.a.createElement("div", {
						className: Object(u.a)(t, Sr.a.pointsContainer)
					}, r.a.createElement("header", {
						className: Sr.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, Ar._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), r.a.createElement(fr.a, {
						className: Sr.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), r.a.createElement("article", {
						className: Sr.a.content
					}, l && r.a.createElement(r.a.Fragment, null, r.a.createElement(mr, {
						subreddit: l
					}), r.a.createElement(Ir, {
						joinDate: n,
						membership: o,
						subreddit: l,
						title: c
					}))))
				},
				Mr = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Lr = n("./src/reddit/actions/governance/errorToast.ts"),
				Rr = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Br
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Fr = Object(a.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(Mr.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(Lr.a)(e, t)
			}));
			var Dr = Object(zn.b)(Fr((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: o,
					joinDate: a,
					membership: i,
					onCancelMembership: l,
					onClose: c,
					onError: d,
					subreddit: m,
					subredditId: p,
					title: b
				} = e, [h, f] = Object(s.useState)(!1), g = m ? m.displayText : "";
				return r.a.createElement("div", {
					className: Object(u.a)(n, Sr.a.container)
				}, r.a.createElement("header", {
					className: Sr.a.header
				}, Br._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), r.a.createElement(fr.a, {
					className: Sr.a.close,
					onClick: c
				})), r.a.createElement("article", {
					className: Sr.a.content
				}, r.a.createElement("div", {
					className: Sr.a.warning
				}, Br._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Br._param("subredditName", g), Br._param("endDate", o)], {
					hk: "1POMMH"
				})), m && r.a.createElement(Ir, {
					joinDate: a,
					membership: i,
					subreddit: m,
					title: b
				})), r.a.createElement("footer", {
					className: Sr.a.footer
				}, r.a.createElement(O.n, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(Rr.a)(t(), {
							subredditId: p
						});
						e.ok ? l() : (f(!1), d(e.error))
					}
				}, h ? Br._("canceling...", null, {
					hk: "1Ggy36"
				}) : Br._("cancel membership", null, {
					hk: "C9ZhO"
				})), r.a.createElement(O.k, {
					onClick: c
				}, Br._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Ur = Object(l.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				Gr = Object(a.b)(Ur);
			var Hr = Object(X.a)(Gr((function(e) {
					return "points" === e.membership.currency ? r.a.createElement(Tr, e) : r.a.createElement(Dr, e)
				}))),
				Wr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				zr = n.n(Wr);

			function qr(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Vr extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						modalOpen: !1
					}
				}
				render() {
					const {
						className: e,
						subscription: t,
						subreddit: n
					} = this.props, {
						membership: s,
						settings: a
					} = t, i = qr(s.endsAt), l = qr(s.publishAt), c = !a.renew, d = n ? n.displayText : "", m = i ? o.fbt._("Cancelled. Will expire on {date}", [o.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = l ? o.fbt._("Joined {date}", [o.fbt._param("date", l)], {
						hk: "1ta8Vp"
					}) : "";
					return r.a.createElement("div", {
						className: Object(u.a)(e, zr.a.container)
					}, r.a.createElement("div", {
						className: zr.a.membershipName
					}, o.fbt._("{subredditName} {title}", [o.fbt._param("subredditName", d), o.fbt._param("title", s.title)], {
						hk: "2NdAdN"
					})), !c && r.a.createElement("div", {
						className: zr.a.joinDate,
						title: p
					}, p), c && r.a.createElement("div", {
						className: zr.a.cancelled,
						title: m
					}, m), r.a.createElement(O.q, {
						className: zr.a.button,
						disabled: c,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && r.a.createElement(Hr, {
						withOverlay: !0,
						endDate: i,
						joinDate: l,
						subredditId: s.subredditId,
						membership: s,
						title: d + " " + s.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const Yr = Object(l.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var Jr = Object(a.b)(Yr)(Vr),
				Qr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				Zr = n.n(Qr);
			const Kr = Object(l.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var Xr = Object(a.b)(Kr)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: s
					} = e, a = Object.keys(s).map(e => (function(e) {
						if (!e.active) return null;
						const t = Object.keys(e.active).filter(e => "provisional_membership" !== e),
							n = e.active[t[0]];
						return n && Date.now() < n.endsAt ? {
							membership: n,
							settings: e.settings
						} : null
					})(s[e])).filter(e => !!e).sort((e, t) => e.membership.endsAt - t.membership.endsAt), i = !!a.length;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: Zr.a.title
					}, o.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => r.a.createElement("div", {
						className: Zr.a.loading,
						key: t
					})), i && a.map(e => r.a.createElement(Jr, {
						key: e.membership.subredditId,
						className: Zr.a.membership,
						subscription: e
					})), !n && !i && r.a.createElement("div", {
						className: Zr.a.empty
					}, o.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				$r = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				ea = n.n($r);

			function ta(e) {
				return r.a.createElement(Ye.a, {
					className: e.className
				}, r.a.createElement(or, {
					className: ea.a.header
				}), r.a.createElement(Xr, null))
			}
			var na = n("./src/reddit/components/TabNav/index.tsx"),
				oa = n("./src/reddit/helpers/correlationIdTracker.ts"),
				sa = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				ra = n("./src/reddit/selectors/platform.ts"),
				aa = n("./src/reddit/selectors/responsiveSettings.ts"),
				ia = n("./src/reddit/pages/Settings/index.m.less"),
				la = n.n(ia);
			const ca = (e, t, n) => [{
					key: m.Zb.Account,
					title: o.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Zb.Profile,
					title: o.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Zb.Privacy,
					title: o.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Zb.Feed,
					title: o.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Zb.Notifications,
					title: o.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Zb.Premium,
					title: o.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: la.a.CreatorTab,
					key: m.Zb.Creator,
					title: o.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: la.a.PaymentsTab,
					key: m.Zb.Payments,
					title: o.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: la.a.SpecialMembershipTab,
					key: m.Zb.SpecialMembership,
					title: o.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: la.a.MessagingTab,
					key: m.Zb.Messaging,
					title: o.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				da = Object(l.c)({
					savedPayments: Jn.p,
					userIsWhitelistedCreator: Jn.y,
					allowNavigationCallback: ra.a,
					isResponsiveSettingsEnabled: aa.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				ua = Object(Qe.u)(),
				ma = Object(a.b)(da, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(_s.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				pa = {
					activityRelevantAds: "personalization_activity_relevant_ads",
					acceptPrivateMessages: "recieve_messages",
					allowClickTracking: "privacy_log_outbound_clicks",
					autoplayVideo: "video_autoplay",
					collapseReadMessages: "collapse_messages",
					countryCode: "country_code",
					badCommentAutocollapse: "bad_comment_autocollapse",
					defaultCommentSort: "default_comment_sort",
					emailDigests: "email_digests",
					emailUnreadMessages: "email_unread",
					emailUnsubscribe: "email_notifications",
					enableFollowers: "enable_followers",
					geopopular: "geopopular",
					hasSeenCustomizeFlyout: "has_seen_customize_flyout",
					hideAds: "hide_advertisements",
					hideFromRobots: "privacy_search_indexing",
					hideNSFW: "no_profanity",
					highlightComments: "highlight_new_comments",
					ignoreSuggestedSort: "ignore_suggested_sort",
					inBeta: "basic_beta",
					labelNSFW: "safe_browsing_mode",
					markMessagesRead: "mark_as_read",
					nightmode: "nightmode",
					openPostInNewTab: "posts_in_new_tab",
					over18: "adult_content",
					privateFeeds: "private_feeds",
					reduceAnimationsFromAwards: "reduce_animations_from_awards",
					rememberCommunitySort: "remember_community_sort",
					rpanDuDismissalTime: "rpan_du_dismissal_time",
					sendWelcomeMessages: "welcome_message",
					showActiveCommunities: "top_karma_subreddits",
					showMessagesInInbox: "threaded_messages",
					showNotifications: "live_orangereds",
					showPresence: "show_presence",
					showRpanDu: "show_rpan_du",
					showTwitter: "show_twitter",
					showUsernameMentionNotifications: "monitor_mentions",
					sort: "community_sort",
					stylesEnabled: "community_styles",
					useMarkdown: "default_markdown",
					rememberCommunityLayout: "remember_community_view",
					layout: "default_community_view",
					thirdPartyDataPersonalizedAds: "personalization_third_party_data_personalized_ads",
					thirdPartyPersonalizedAds: "third_party_personalized_ads",
					thirdPartySiteDataPersonalizedAds: "personalization_third_party_site_data_personalized_ads",
					thirdPartySiteDataPersonalizedContent: "personalization_third_party_site_data_personalized_content",
					showLocationBasedRecommendations: "personalization_show_location_based_recommendations",
					topContentDismissalTime: "top_content_dismissal_time",
					topContentTimesDismissed: "top_content_times_dismissed"
				};
			class ba extends r.a.Component {
				constructor() {
					super(...arguments), this.tabNavRef = r.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs({
							...n,
							[t]: e
						})
					}, this.sendEvent = (e, t) => {
						const n = d()();
						pa.hasOwnProperty(t) && this.props.sendEvent(o => ({
							source: this.getSource(),
							action: "save",
							noun: pa[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== m.Zb.Account ? `settings_${e}` : "settings"
					}, this.getTrackingValue = (e, t, n = !1) => {
						const o = n ? this.props.prefs[e] : t;
						return "boolean" == typeof o ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === o ? "off" : "on" : !0 === o ? "on" : "off" : o
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: o,
							userIsWhitelistedCreator: s,
							userHasSpecialMembership: a
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case m.Zb.Account:
								return r.a.createElement(sn, i);
							case m.Zb.Profile:
								return r.a.createElement(er, i);
							case m.Zb.Premium:
								return r.a.createElement(ns.b, i);
							case m.Zb.Notifications:
								return r.a.createElement(Uo, i);
							case m.Zb.Privacy:
								return r.a.createElement(vs, i);
							case m.Zb.Messaging:
								return r.a.createElement(Dn, i);
							case m.Zb.Feed:
								return r.a.createElement(Io, i);
							case m.Zb.Payments:
								return r.a.createElement(ts, null);
							case m.Zb.Creator: {
								const e = Object(p.a)(o.search);
								return s ? r.a.createElement(ro, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Zb.SpecialMembership:
								return a ? r.a.createElement(ta, null) : null;
							default:
								return r.a.createElement(sn, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(sa.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Zb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Zb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = r.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return r.a.createElement(na.a, {
							to: `/settings/${e.key}`,
							active: !n && 0 === t || e.key === n,
							className: e.className,
							innerRef: this.getTabRef(e.key),
							key: e.key,
							onClick: this.getTabClickHandler(e.key),
							onTouchEnd: this.getTabTouchEndHandler(e.key),
							onTouchStart: this.resetScrolling
						}, e.title)
					}
				}
				componentDidMount() {
					Object(oa.d)(oa.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = m.Zb.Account
								}
							}
						} = this.props, t = this.tabRefCache[e];
						t && t.current && this.tabNavRef.current.scrollTo({
							behavior: "smooth",
							left: t.current.offsetLeft - 8
						})
					})
				}
				componentWillUnmount() {
					Object(oa.b)(oa.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						isResponsiveSettingsEnabled: t,
						userIsWhitelistedCreator: n,
						userHasSpecialMembership: s,
						savedPayments: a
					} = this.props;
					return r.a.createElement("div", {
						className: Object(u.a)(la.a.Container, {
							[la.a["m-responsive"]]: t
						})
					}, r.a.createElement(na.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: o.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						onTouchMove: this.startScrolling
					}, ca(n, s, a).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = ua(ma(Object(S.c)(ba)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/config.ts");
			const s = (e, t) => `${o.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "z", (function() {
				return x
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "y", (function() {
				return R
			})), n.d(t, "u", (function() {
				return B
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "s", (function() {
				return G
			})), n.d(t, "t", (function() {
				return H
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				l = n("./src/reddit/models/Payments/index.ts"),
				c = n("./src/reddit/models/Product/index.ts"),
				d = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/gold/powerups/index.ts"),
				b = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const h = [],
				f = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				g = (e, t) => {
					const n = f(e, t);
					return n && n.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const _ = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = g(e, t),
							o = Date.now();
						return n && o < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				y = (e, t) => {
					const n = e.user.account,
						o = e.economics.subredditPremium[t];
					if (n && o && o.status === u.a.Fetched) {
						const o = ((e.users.appliedBadges[n.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (o) return {
							[i.a.Loyalty]: o.find(e => e.placement === a.a.First),
							[i.a.Achievement]: o.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: o.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function C(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const E = (e, t, n) => {
					var s;
					if (!o.d.spBadges(e)) return h;
					return C(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				j = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function x(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: o
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === s) return n;
				const r = e.badges.models,
					i = e.user.ownedBadges[o] || {},
					l = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => r[e]).find(e => e && e.type === l)
			}

			function k(e, t, n, o) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && o) return s.data.collections[n][o]
				}
				return h
			}

			function S(e, t) {
				const n = k(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function O(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return h
			}

			function P(e, t) {
				return k(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === d.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const o = e[n];
						t.push({
							display: `${o.brand} •••• ${o.last4}`,
							id: n,
							type: l.a.SavedStripe
						})
					}
				}
				if (n.status === d.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const o = e[n];
						"PayPal" === o.brand && t.push({
							display: "PayPal",
							id: o.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var I;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(I || (I = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const o = f(e, t);
					return o && o.price && o.currency && (n[o.currency] = o.price), n
				},
				L = (e, t) => {
					var n, o, s, r;
					const a = (null === (r = null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || A;
					return {
						prices: M(e, t),
						member: a.member || A.member,
						memberPlural: a.memberPlural || A.memberPlural,
						memberAlt: a.memberAlt || A.memberAlt,
						memberAltPlural: a.memberAltPlural || A.memberAltPlural,
						membership: a.membership || A.membership,
						membershipAlt: a.membershipAlt || A.membershipAlt
					}
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === d.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				B = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return t.status === d.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				G = (e, t, n) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!o || !Object(r.a)(o))
				},
				H = (e, t, n) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (s && Object(r.b)(s)) return !0;
					const a = o.d.spGiphy(e),
						i = U(e, t);
					return !(!a || !i) || a && i
				},
				W = (e, t, n) => {
					if (t) {
						const o = e.economics.banners.dismissedBanners[t];
						if (o && o.data) return !!o.data[n]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: n
				}) => {
					var o, r, a;
					return t ? e.subreddits.productOffers[Object(s.a)(n, t)] : null === (a = null === (r = null === (o = e.features) || void 0 === o ? void 0 : o.goldPurchase) || void 0 === r ? void 0 : r.productOffers) || void 0 === a ? void 0 : a[Object(s.a)(n)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t,
						type: r.c.Powerups
					});
					return n && n[0]
				},
				u = (e, t) => {
					var n;
					const o = d(e, t);
					return null === (n = null == o ? void 0 : o.pricePackages) || void 0 === n ? void 0 : n[0].price
				},
				m = e => {
					const t = c(e, {
						type: r.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(o.a)(m, i.p, (e, t) => p(e, t) || null),
				h = Object(o.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				f = Object(o.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(o.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(o.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				r = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const o = n.subredditId,
							s = Object.keys(e.user.ownedBadges[o] || {}),
							r = e.badges.models,
							a = Date.now();
						let i = !1;
						return s.forEach(e => {
							const n = r[e];
							n && n.type === t && n.endsAt > a && (i = !0)
						}), i
					}
					return !1
				}
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/GetAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"1508e05ea2ee"}')
		},
		"./src/redditGQL/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/redditGQL/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"d0a53057e3e8"}')
		},
		"./src/redditGQL/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/redditGQL/operations/UpdateAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"670e8e8d3018"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.c9217f64670f9dac256c.js.map