// https://www.redditstatic.com/desktop2x/Settings.636a6338a0fc55f57a17.js
// Retrieved at 8/18/2021, 7:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var s = {
				single_source_shortest_paths: function(e, t, n) {
					var r = {},
						o = {};
					o[t] = 0;
					var a, i, c, l, d, u, m, p = s.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (c in i = (a = p.pop()).value, l = a.cost, d = e[i] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = o[c], (void 0 === o[c] || m > u) && (o[c] = u, p.push(c, u), r[c] = i));
					if (void 0 !== n && void 0 === o[n]) {
						var b = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(b)
					}
					return r
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], s = t; s;) n.push(s), e[s], s = e[s];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var r = s.single_source_shortest_paths(e, t, n);
					return s.extract_shortest_path_from_predecessor_list(r, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = s.PriorityQueue,
							r = {};
						for (t in e = e || {}, n) n.hasOwnProperty(t) && (r[t] = n[t]);
						return r.queue = [], r.sorter = e.sorter || n.default_sorter, r
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
			e.exports = s
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, r, o) {
				for (var a = -1, i = s(n((t - e) / (r || 1)), 0), c = Array(i); i--;) c[o ? i : ++a] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && r(t, n, a) && (n = a = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), a = void 0 === a ? t < n ? 1 : -1 : o(a), s(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./node_modules/moment/locale sync recursive ^\\.\\/.*$": function(e, t, n) {
			var s = {
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

			function r(e) {
				var t = o(e);
				return n(t)
			}

			function o(e) {
				if (!n.o(s, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return s[e]
			}
			r.keys = function() {
				return Object.keys(s)
			}, r.resolve = o, e.exports = r, r.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$"
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/can-promise.js"),
				r = n("./node_modules/qrcode/lib/core/qrcode.js"),
				o = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, o, a) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					l = "function" == typeof i[c - 1];
				if (!l && !s()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = o = void 0) : 2 !== c || t.getContext || (o = n, n = t, t = void 0), new Promise((function(s, a) {
						try {
							var i = r.create(n, o);
							s(e(i, t, o))
						} catch (c) {
							a(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (a = n, n = t, t = o = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = o, o = void 0) : (a = o, o = n, n = t, t = void 0));
				try {
					var d = r.create(n, o);
					a(null, e(d, t, o))
				} catch (u) {
					a(u)
				}
			}
			t.create = r.create, t.toCanvas = i.bind(null, o.render), t.toDataURL = i.bind(null, o.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
				return a.render(e, n)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, n = s(e), r = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), o = [n - 7], a = 1; a < t - 1; a++) o[a] = o[a - 1] - r;
				return o.push(6), o.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], s = t.getRowColCoords(e), r = s.length, o = 0; o < r; o++)
					for (var a = 0; a < r; a++) 0 === o && 0 === a || 0 === o && a === r - 1 || o === r - 1 && 0 === a || n.push([s[o], s[a]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function o(e) {
				this.mode = s.ALPHANUMERIC, this.data = e
			}
			o.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var n = 45 * r.indexOf(this.data[t]);
					n += r.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6)
			}, e.exports = o
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
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function r(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = s.alloc(e * e), this.reservedBit = s.alloc(e * e)
			}
			r.prototype.set = function(e, t, n, s) {
				var r = e * this.size + t;
				this.data[r] = n, s && (this.reservedBit[r] = !0)
			}, r.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, r.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, r.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/mode.js");

			function o(e) {
				this.mode = r.BYTE, this.data = s.from(e)
			}
			o.getBitsLength = function(e) {
				return 8 * e
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case s.L:
						return r[4 * (e - 1) + 0];
					case s.M:
						return r[4 * (e - 1) + 1];
					case s.Q:
						return r[4 * (e - 1) + 2];
					case s.H:
						return r[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case s.L:
						return o[4 * (e - 1) + 0];
					case s.M:
						return o[4 * (e - 1) + 1];
					case s.Q:
						return o[4 * (e - 1) + 2];
					case s.H:
						return o[4 * (e - 1) + 3];
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
				} catch (s) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = s(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/utils.js"),
				r = s.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, o = n << 10; s.getBCHDigit(o) - r >= 0;) o ^= 1335 << s.getBCHDigit(o) - r;
				return 21522 ^ (n << 10 | o)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = s.alloc(512),
				o = s.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) r[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) r[t] = r[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return o[e]
			}, t.exp = function(e) {
				return r[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : r[o[e] + o[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/qrcode/lib/core/utils.js");

			function o(e) {
				this.mode = s.KANJI, this.data = e
			}
			o.getBitsLength = function(e) {
				return 13 * e
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var t;
				for (t = 0; t < this.data.length; t++) {
					var n = r.toSJIS(this.data[t]);
					if (n >= 33088 && n <= 40956) n -= 33088;
					else {
						if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						n -= 49472
					}
					n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
				}
			}, e.exports = o
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
				s = 3,
				r = 40,
				o = 10;

			function a(e, n, s) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (n + s) % 2 == 0;
					case t.Patterns.PATTERN001:
						return n % 2 == 0;
					case t.Patterns.PATTERN010:
						return s % 3 == 0;
					case t.Patterns.PATTERN011:
						return (n + s) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return n * s % 2 + n * s % 3 == 0;
					case t.Patterns.PATTERN110:
						return (n * s % 2 + n * s % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (n * s % 3 + (n + s) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, s = 0, r = 0, o = 0, a = null, i = null, c = 0; c < t; c++) {
					r = o = 0, a = i = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === a ? r++ : (r >= 5 && (s += n + (r - 5)), a = d, r = 1), (d = e.get(l, c)) === i ? o++ : (o >= 5 && (s += n + (o - 5)), i = d, o = 1)
					}
					r >= 5 && (s += n + (r - 5)), o >= 5 && (s += n + (o - 5))
				}
				return s
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, r = 0; r < t - 1; r++)
					for (var o = 0; o < t - 1; o++) {
						var a = e.get(r, o) + e.get(r, o + 1) + e.get(r + 1, o) + e.get(r + 1, o + 1);
						4 !== a && 0 !== a || n++
					}
				return n * s
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, s = 0, o = 0, a = 0; a < t; a++) {
					s = o = 0;
					for (var i = 0; i < t; i++) s = s << 1 & 2047 | e.get(a, i), i >= 10 && (1488 === s || 93 === s) && n++, o = o << 1 & 2047 | e.get(i, a), i >= 10 && (1488 === o || 93 === o) && n++
				}
				return n * r
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, s = 0; s < n; s++) t += e.data[s];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * o
			}, t.applyMask = function(e, t) {
				for (var n = t.size, s = 0; s < n; s++)
					for (var r = 0; r < n; r++) t.isReserved(r, s) || t.xor(r, s, a(e, r, s))
			}, t.getBestMask = function(e, n) {
				for (var s = Object.keys(t.Patterns).length, r = 0, o = 1 / 0, a = 0; a < s; a++) {
					n(a), t.applyMask(a, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), i < o && (o = i, r = a)
				}
				return r
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/version-check.js"),
				r = n("./node_modules/qrcode/lib/core/regex.js");
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
				if (!s.isValid(t)) throw new Error("Invalid version: " + t);
				return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
			}, t.getBestModeForData = function(e) {
				return r.testNumeric(e) ? t.NUMERIC : r.testAlphanumeric(e) ? t.ALPHANUMERIC : r.testKanji(e) ? t.KANJI : t.BYTE
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
				} catch (s) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js");

			function r(e) {
				this.mode = s.NUMERIC, this.data = e.toString()
			}
			r.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				var t, n, s;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), s = parseInt(n, 10), e.put(s, 10);
				var r = this.data.length - t;
				r > 0 && (n = this.data.substr(t), s = parseInt(n, 10), e.put(s, 3 * r + 1))
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = s.alloc(e.length + t.length - 1), o = 0; o < e.length; o++)
					for (var a = 0; a < t.length; a++) n[o + a] ^= r.mul(e[o], t[a]);
				return n
			}, t.mod = function(e, t) {
				for (var n = s.from(e); n.length - t.length >= 0;) {
					for (var o = n[0], a = 0; a < t.length; a++) n[a] ^= r.mul(t[a], o);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = s.from([1]), o = 0; o < e; o++) n = t.mul(n, [1, r.exp(o)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/utils.js"),
				o = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/bit-buffer.js"),
				i = n("./node_modules/qrcode/lib/core/bit-matrix.js"),
				c = n("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				l = n("./node_modules/qrcode/lib/core/finder-pattern.js"),
				d = n("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				m = n("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				p = n("./node_modules/qrcode/lib/core/version.js"),
				b = n("./node_modules/qrcode/lib/core/format-info.js"),
				h = n("./node_modules/qrcode/lib/core/mode.js"),
				f = n("./node_modules/qrcode/lib/core/segments.js"),
				g = n("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, t, n) {
				var s, r, o = e.size,
					a = b.getEncodedBits(t, n);
				for (s = 0; s < 15; s++) r = 1 == (a >> s & 1), s < 6 ? e.set(s, 8, r, !0) : s < 8 ? e.set(s + 1, 8, r, !0) : e.set(o - 15 + s, 8, r, !0), s < 8 ? e.set(8, o - s - 1, r, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, r, !0) : e.set(8, 15 - s - 1, r, !0);
				e.set(o - 8, 8, 1, !0)
			}

			function _(e, t, n) {
				var o = new a;
				n.forEach((function(t) {
					o.put(t.mode.bit, 4), o.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(o)
				}));
				var i = 8 * (r.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (o.getLengthInBits() + 4 <= i && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
				for (var c = (i - o.getLengthInBits()) / 8, l = 0; l < c; l++) o.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var o = r.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), i = o - a, c = u.getBlocksCount(t, n), l = c - o % c, d = Math.floor(o / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), _ = new Array(c), y = 0, x = s.from(e.buffer), C = 0; C < c; C++) {
						var E = C < l ? p : b;
						v[C] = x.slice(g, g + E), _[C] = f.encode(v[C]), g += E, y = Math.max(y, E)
					}
					var j, w, k = s.alloc(o),
						O = 0;
					for (j = 0; j < y; j++)
						for (w = 0; w < c; w++) j < v[w].length && (k[O++] = v[w][j]);
					for (j = 0; j < h; j++)
						for (w = 0; w < c; w++) k[O++] = _[w][j];
					return k
				}(o, e, t)
			}

			function y(e, t, n, s) {
				var o;
				if (g(e)) o = f.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var u = f.rawSplit(e);
						a = p.getBestVersionForData(u, n)
					}
					o = f.fromString(e, a || 40)
				}
				var m = p.getBestVersionForData(o, n);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var b = _(t, n, o),
					h = r.getSymbolSize(t),
					y = new i(h);
				return function(e, t) {
						for (var n = e.size, s = l.getPositions(t), r = 0; r < s.length; r++)
							for (var o = s[r][0], a = s[r][1], i = -1; i <= 7; i++)
								if (!(o + i <= -1 || n <= o + i))
									for (var c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(o + i, a + c, !0, !0) : e.set(o + i, a + c, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var s = n % 2 == 0;
							e.set(n, 6, s, !0), e.set(6, n, s, !0)
						}
					}(y),
					function(e, t) {
						for (var n = c.getPositions(t), s = 0; s < n.length; s++)
							for (var r = n[s][0], o = n[s][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(r + a, o + i, !0, !0) : e.set(r + a, o + i, !1, !0)
					}(y, t), v(y, n, 0), t >= 7 && function(e, t) {
						for (var n, s, r, o = e.size, a = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), s = i % 3 + o - 8 - 3, r = 1 == (a >> i & 1), e.set(n, s, r, !0), e.set(s, n, r, !0)
					}(y, t),
					function(e, t) {
						for (var n = e.size, s = -1, r = n - 1, o = 7, a = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(r, i - c)) {
										var l = !1;
										a < t.length && (l = 1 == (t[a] >>> o & 1)), e.set(r, i - c, l), -1 === --o && (a++, o = 7)
									} if ((r += s) < 0 || n <= r) {
									r -= s, s = -s;
									break
								}
							}
					}(y, b), isNaN(s) && (s = d.getBestMask(y, v.bind(null, y, n))), d.applyMask(s, y), v(y, n, s), {
						modules: y,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: s,
						segments: o
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, s, a = o.M;
				return void 0 !== t && (a = o.from(t.errorCorrectionLevel, o.M), n = p.from(t.version), s = d.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)), y(e, n, a, s)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/polynomial.js"),
				o = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = s.alloc(this.degree),
					n = o.concat([e, t], e.length + this.degree),
					a = r.mod(n, this.genPoly),
					i = this.degree - a.length;
				if (i > 0) {
					var c = s.alloc(this.degree);
					return a.copy(c, i), c
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				s = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(s, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var r = new RegExp("^" + n + "$"),
				o = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return r.test(e)
			}, t.testNumeric = function(e) {
				return o.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				o = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/byte-data.js"),
				i = n("./node_modules/qrcode/lib/core/kanji-data.js"),
				c = n("./node_modules/qrcode/lib/core/regex.js"),
				l = n("./node_modules/qrcode/lib/core/utils.js"),
				d = n("./node_modules/dijkstrajs/dijkstra.js");

			function u(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function m(e, t, n) {
				for (var s, r = []; null !== (s = e.exec(n));) r.push({
					data: s[0],
					index: s.index,
					mode: t,
					length: s[0].length
				});
				return r
			}

			function p(e) {
				var t, n, r = m(c.NUMERIC, s.NUMERIC, e),
					o = m(c.ALPHANUMERIC, s.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, s.BYTE, e), n = m(c.KANJI, s.KANJI, e)) : (t = m(c.BYTE_KANJI, s.BYTE, e), n = []), r.concat(o, t, n).sort((function(e, t) {
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
					case s.NUMERIC:
						return r.getBitsLength(e);
					case s.ALPHANUMERIC:
						return o.getBitsLength(e);
					case s.KANJI:
						return i.getBitsLength(e);
					case s.BYTE:
						return a.getBitsLength(e)
				}
			}

			function h(e, t) {
				var n, c = s.getBestModeForData(e);
				if ((n = s.from(t, c)) !== s.BYTE && n.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + s.toString(n) + ".\n Suggested mode is: " + s.toString(c));
				switch (n !== s.KANJI || l.isKanjiModeEnabled() || (n = s.BYTE), n) {
					case s.NUMERIC:
						return new r(e);
					case s.ALPHANUMERIC:
						return new o(e);
					case s.KANJI:
						return new i(e);
					case s.BYTE:
						return new a(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(h(t, null)) : t.data && e.push(h(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, n) {
				for (var r = function(e, t) {
						for (var n = {}, r = {
								start: {}
							}, o = ["start"], a = 0; a < e.length; a++) {
							for (var i = e[a], c = [], l = 0; l < i.length; l++) {
								var d = i[l],
									u = "" + a + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, r[u] = {};
								for (var m = 0; m < o.length; m++) {
									var p = o[m];
									n[p] && n[p].node.mode === d.mode ? (r[p][u] = b(n[p].lastCount + d.length, d.mode) - b(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), r[p][u] = b(d.length, d.mode) + 4 + s.getCharCountIndicator(d.mode, t))
								}
							}
							o = c
						}
						for (m = 0; m < o.length; m++) r[o[m]].end = 0;
						return {
							map: r,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var r = e[n];
							switch (r.mode) {
								case s.NUMERIC:
									t.push([r, {
										data: r.data,
										mode: s.ALPHANUMERIC,
										length: r.length
									}, {
										data: r.data,
										mode: s.BYTE,
										length: r.length
									}]);
									break;
								case s.ALPHANUMERIC:
									t.push([r, {
										data: r.data,
										mode: s.BYTE,
										length: r.length
									}]);
									break;
								case s.KANJI:
									t.push([r, {
										data: r.data,
										mode: s.BYTE,
										length: u(r.data)
									}]);
									break;
								case s.BYTE:
									t.push([{
										data: r.data,
										mode: s.BYTE,
										length: u(r.data)
									}])
							}
						}
						return t
					}(p(e, l.isKanjiModeEnabled())), n), o = d.find_path(r.map, "start", "end"), a = [], i = 1; i < o.length - 1; i++) a.push(r.table[o[i]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(a))
			}, t.rawSplit = function(e) {
				return t.fromArray(p(e, l.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, t) {
			var n, s = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return s[e]
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
			var s = n("./node_modules/qrcode/lib/core/utils.js"),
				r = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				o = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/mode.js"),
				i = n("./node_modules/qrcode/lib/core/version-check.js"),
				c = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = s.getBCHDigit(7973);

			function d(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var n = 0;
				return e.forEach((function(e) {
					var s = d(e.mode, t);
					n += s + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return i.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!i.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = a.BYTE);
				var o = 8 * (s.getSymbolTotalCodewords(e) - r.getTotalCodewordsCount(e, t));
				if (n === a.MIXED) return o;
				var c = o - d(n, e);
				switch (n) {
					case a.NUMERIC:
						return Math.floor(c / 10 * 3);
					case a.ALPHANUMERIC:
						return Math.floor(c / 11 * 2);
					case a.KANJI:
						return Math.floor(c / 13);
					case a.BYTE:
					default:
						return Math.floor(c / 8)
				}
			}, t.getBestVersionForData = function(e, n) {
				var s, r = o.from(n, o.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var s = 1; s <= 40; s++) {
							if (u(e, s) <= t.getCapacity(s, n, a.MIXED)) return s
						}
					}(e, r);
					if (0 === e.length) return 1;
					s = e[0]
				} else s = e;
				return function(e, n, s) {
					for (var r = 1; r <= 40; r++)
						if (n <= t.getCapacity(r, s, e)) return r
				}(s.mode, s.getLength(), r)
			}, t.getEncodedBits = function(e) {
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; s.getBCHDigit(t) - l >= 0;) t ^= 7973 << s.getBCHDigit(t) - l;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var r = n,
					o = t;
				void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (o = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), r = s.getOptions(r);
				var a = s.getImageWidth(e.modules.size, r),
					i = o.getContext("2d"),
					c = i.createImageData(a, a);
				return s.qrToImageData(c.data, e, r),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, o, a), i.putImageData(c, 0, 0), o
			}, t.renderToDataURL = function(e, n, s) {
				var r = s;
				void 0 !== r || n && n.getContext || (r = n, n = void 0), r || (r = {});
				var o = t.render(e, n, r),
					a = r.type || "image/png",
					i = r.rendererOpts || {};
				return o.toDataURL(a, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/renderer/utils.js");

			function r(e, t) {
				var n = e.a / 255,
					s = t + '="' + e.hex + '"';
				return n < 1 ? s + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : s
			}

			function o(e, t, n) {
				var s = e + t;
				return void 0 !== n && (s += " " + n), s
			}
			t.render = function(e, t, n) {
				var a = s.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					l = i + 2 * a.margin,
					d = a.color.light.a ? "<path " + r(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + r(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var s = "", r = 0, a = !1, i = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || a || (a = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (s += a ? o("M", l + n, .5 + d + n) : o("m", r, 0), r = 0, a = !1), l + 1 < t && e[c + 1] || (s += o("h", i), i = 0)) : r++
						}
						return s
					}(c, i, a.margin) + '"/>',
					m = 'viewBox="0 0 ' + l + " " + l + '"',
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
					s = e.width && e.width >= 21 ? e.width : void 0,
					r = e.scale || 4;
				return {
					width: s,
					scale: s ? 4 : r,
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
				var s = t.getScale(e, n);
				return Math.floor((e + 2 * n.margin) * s)
			}, t.qrToImageData = function(e, n, s) {
				for (var r = n.modules.size, o = n.modules.data, a = t.getScale(r, s), i = Math.floor((r + 2 * s.margin) * a), c = s.margin * a, l = [s.color.light, s.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = s.color.light;
						if (d >= c && u >= c && d < i - c && u < i - c) p = l[o[Math.floor((d - c) / a) * r + Math.floor((u - c) / a)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/node_modules/isarray/index.js");
			o.TYPED_ARRAY_SUPPORT = function() {
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
			var r = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function o(e, t, n) {
				return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" == typeof e ? c(this, e) : function(e, t, n, s) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, s) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (s || 0)) throw new RangeError("'length' is out of bounds");
						var r;
						r = void 0 === n && void 0 === s ? new Uint8Array(t) : void 0 === s ? new Uint8Array(t, n) : new Uint8Array(t, n, s);
						o.TYPED_ARRAY_SUPPORT ? r.__proto__ = o.prototype : r = l(e, r);
						return r
					}(e, t, n, s);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							s = i(e, n),
							r = s.write(t);
						r !== n && (s = s.slice(0, r));
						return s
					}(e, t);
					return function(e, t) {
						if (o.isBuffer(t)) {
							var n = 0 | a(t.length),
								s = i(e, n);
							return 0 === s.length ? s : (t.copy(s, 0, 0, n), s)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? i(e, 0) : l(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return l(e, t.data)
						}
						var r;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new o(e, t, n)
			}

			function a(e) {
				if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return o.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = o.prototype : (null === (n = e) && (n = new o(t)), n.length = t), n
			}

			function c(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | a(t));
				if (!o.TYPED_ARRAY_SUPPORT)
					for (var s = 0; s < t; ++s) n[s] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | a(t.length), s = i(e, n), r = 0; r < n; r += 1) s[r] = 255 & t[r];
				return s
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var s = e.length, r = null, o = [], a = 0; a < s; ++a) {
					if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
						if (!r) {
							if (n > 56319) {
								(t -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							if (a + 1 === s) {
								(t -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							r = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && o.push(239, 191, 189), r = n;
							continue
						}
						n = 65536 + (r - 55296 << 10 | n - 56320)
					} else r && (t -= 3) > -1 && o.push(239, 191, 189);
					if (r = null, n < 128) {
						if ((t -= 1) < 0) break;
						o.push(n)
					} else if (n < 2048) {
						if ((t -= 2) < 0) break;
						o.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((t -= 3) < 0) break;
						o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return o
			}

			function u(e) {
				return o.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : d(e).length)
			}
			o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), o.prototype.write = function(e, t, n) {
				void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
				var s = this.length - t;
				if ((void 0 === n || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, s) {
					return function(e, t, n, s) {
						for (var r = 0; r < s && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
						return r
					}(d(t, e.length - n), e, n, s)
				}(this, e, t, n)
			}, o.prototype.slice = function(e, t) {
				var n, s = this.length;
				if ((e = ~~e) < 0 ? (e += s) < 0 && (e = 0) : e > s && (e = s), (t = void 0 === t ? s : ~~t) < 0 ? (t += s) < 0 && (t = 0) : t > s && (t = s), t < e && (t = e), o.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = o.prototype;
				else {
					var r = t - e;
					n = new o(r, void 0);
					for (var a = 0; a < r; ++a) n[a] = this[a + e]
				}
				return n
			}, o.prototype.copy = function(e, t, n, s) {
				if (n || (n = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < n && (s = n), s === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (s < 0) throw new RangeError("sourceEnd out of bounds");
				s > this.length && (s = this.length), e.length - t < s - n && (s = e.length - t + n);
				var r, a = s - n;
				if (this === e && n < t && t < s)
					for (r = a - 1; r >= 0; --r) e[r + t] = this[r + n];
				else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
					for (r = 0; r < a; ++r) e[r + t] = this[r + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
				return a
			}, o.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var s = e.charCodeAt(0);
						s < 256 && (e = s)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var r;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (r = t; r < n; ++r) this[r] = e;
				else {
					var a = o.isBuffer(e) ? e : new o(e),
						i = a.length;
					for (r = 0; r < n - t; ++r) this[r + t] = a[r % i]
				}
				return this
			}, o.concat = function(e, t) {
				if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var r = c(null, t),
					a = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!o.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(r, a), a += l.length
				}
				return r
			}, o.byteLength = u, o.prototype._isBuffer = !0, o.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new o(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new o(e)
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
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, r) {
							return "number" == typeof s || "string" == typeof s ? r ? "idx-" + r : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				o = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				a = o(),
				i = s.createContext(o()),
				c = function() {
					return s.useState((e = s.useContext(i), {
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
				l = function() {
					return c()[0].uid
				},
				d = function() {
					return c()[0].gen
				}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const n = Object(s.a)(e),
					r = parseInt(n) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/validateEmail/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var s, r;
				const o = await (e => Object(a.a)(e, {
					...i
				}))(n());
				if (!o.ok) return;
				const c = o.body,
					l = (({
						accountDefinedGender: e,
						accountGenderCategory: t
					}) => ({
						definedGender: e,
						genderCategory: t
					}))(null === (r = null === (s = null == c ? void 0 : c.data) || void 0 === s ? void 0 : s.piiIdentity) || void 0 === r ? void 0 : r.gender);
				l && e(m(l))
			}, m = Object(r.a)(d.a), p = e => async (t, n, {
				gqlContext: r
			}) => {
				const i = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(a.a)(e, {
					...c,
					variables: t
				}))(r(), {
					input: i
				})).ok ? (t(b(e)), t(Object(o.f)({
					kind: l.b.SuccessCommunity,
					text: s.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : t(Object(o.f)({
					kind: l.b.Error,
					text: s.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				}))
			}, b = Object(r.a)(d.b)
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const o = Object(s.a)(r.a),
				a = Object(s.a)(r.e),
				i = Object(s.a)(r.b),
				c = Object(s.a)(r.c),
				l = Object(s.a)(r.d)
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(s.a)(a.a),
				c = Object(s.a)(a.b),
				l = Object(s.a)(a.c),
				d = Object(s.a)(a.d),
				u = Object(s.a)(a.e),
				m = Object(s.a)(a.f),
				p = Object(s.a)(a.g),
				b = Object(s.a)(a.h),
				h = Object(s.a)(a.i),
				f = e => Object(r.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "f", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
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

			function x(e) {
				return !!e && "removeBadge" === e.type
			}

			function C(e) {
				if (!x(e)) return e
			}
			const E = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(_.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					r = Object.keys(s);
				if (r.length) {
					const t = await Object(i.e)(n(), r);
					t.ok && e(Object(y.g)(t.body))
				}
			}, j = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				const o = s().user.account,
					a = s().economics.subredditPremium[e],
					i = !a || a.status !== f.a.Fetched || t;
				if (o && i) {
					const t = await Object(c.a)(r(), e, o.id);
					n(Object(y.i)(t))
				}
			}, w = e => async (t, n, {
				apiContext: s
			}) => {
				const r = n(),
					a = r.user.account,
					i = Object(g.f)(r, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (a && e.badge) {
					let n, r;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: C(e.badge),
						currentAppliedBadges: c,
						userId: a.id
					})), x(e.badge) && n ? r = await Object(l.a)(s(), e.subredditId, n.id, !1) : x(e.badge) || (r = await Object(l.a)(s(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: a.id
					})), Object(o.a)(t, r.error))
				}
			}, k = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				await n(j(e, !0));
				const o = s().economics.subredditPremium[e];
				if (o && o.status === f.a.Fetched) {
					const s = o.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(w({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(y.d)(b.c.MyBadges)))
				}
			}, O = e => async (t, n, {
				apiContext: s
			}) => {
				const i = n().user.account,
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (i && (c || l)) {
					const [n, c] = await Promise.all([Object(a.b)(s(), e), m(s(), e, i.id)]);
					if (!c.ok) return void Object(o.a)(t, c.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(c.body, e => {
						e.type === h.a.EmotesPack ? l.emotes.push(e) : e.type === h.a.Giphy && l.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: l
					}))
				}
			}, S = (e, t, n) => async (s, r, {
				apiContext: o
			}) => {
				if (await s(j(e, !0)), n && t) {
					const n = r(),
						o = Object(g.f)(n, e),
						a = Object(v.a)(n, t);
					if (!o[Object(b.d)(a.placement)] && a) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: a
						});
						t && await s(w({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, I = e => async (t, n, {
				apiContext: s
			}) => {
				const {
					wallet: r
				} = await Object(i.c)(s(), e);
				t(Object(y.f)({
					wallet: r
				})), await t(j(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "i", (function() {
				return G
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/omit.js"),
				o = n.n(r),
				a = n("./node_modules/uuid/v4.js"),
				i = n.n(a),
				c = n("./src/config.ts"),
				l = n("./src/reddit/constants/modals.ts"),
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
				x = n("./src/reddit/actions/gold/powerups.ts"),
				C = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				j = n("./src/reddit/models/Payments/index.ts");
			const w = () => s.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				O = (e, t, n) => async (r, o, {
					gqlContext: a
				}) => {
					const c = i()(),
						l = await Object(E.f)(a(), c, e, t, n);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (n) return n.id
					}
					throw new Error((() => s.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, S = (e, t, n, r, o, a) => async (c, l, {
					gqlContext: d
				}) => {
					var u;
					const m = l(),
						b = () => c(Object(f.stripeApiError)(s.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = o === y.c.Premium,
						x = o === y.c.Powerups,
						C = {};
					if (x && a) C.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(g.d)(m, {
							provider: j.b.Stripe
						});
						if (!e) return;
						C.premium = {
							pricePackage: e
						}
					}
					let w, S, I = "";
					try {
						I = await c(O(t, r, C))
					} catch (N) {
						return p.c.captureException(N), void(N.message && c(Object(f.stripeApiError)(N.message)))
					}
					c(Object(f.stripeTokenPending)());
					const P = Object(v.y)(m);
					if (P || (w = await c(Object(f.validateAndCreateStripeToken)(e)), S = Object(v.v)(m), w)) try {
						const t = i()(),
							s = P || S ? w && S ? Object(E.h)(d(), t, I, w.id) : P ? Object(E.j)(d(), t, I, P) : null : Object(E.i)(d(), t, I, w.id),
							o = await s;
						if (!(null == o ? void 0 : o.ok)) return void b();
						const m = o.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void c(Object(f.stripeApiError)(k(m.errors)));
						const {
							ok: p,
							payment: g,
							providerExecution: {
								paymentIntentClientSecret: v
							}
						} = m;
						if (p && g.status === E.a.ActionRequired) {
							const t = await e.confirmCardPayment(v),
								{
									error: n
								} = t;
							if (n) return void(n.message ? c(Object(f.stripeApiError)(n.message)) : b());
							let s;
							if (!(s = P ? await Object(E.e)(d(), i()(), g.id, P) : await Object(E.d)(d(), i()(), g.id, w.id, S)).ok) return void b();
							const r = s.body;
							if (!r.data.confirmEconPayment.ok || r.data.confirmEconPayment.payment.status !== E.a.Paid) return void b()
						} else if (p && g.status !== E.a.Paid) return void b();
						const y = Object(_.j)(l());
						y && (x && a ? c(F({
							subredditId: a,
							powerupsCount: r,
							user: y,
							isAnonymous: n
						})) : h && c(H({
							user: y
						})))
					} catch (N) {
						p.c.captureException(N), b()
					}
				}, I = (e, t, n, s, r) => async (o, a, {
					gqlContext: l
				}) => {
					var d;
					const m = a(),
						b = s === y.c.Premium,
						h = s === y.c.Powerups,
						v = {};
					if (h && r) v.powerUps = {
						subredditId: r,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.d)(m, {
							provider: j.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let x = "";
					try {
						x = await o(O(e, n, v))
					} catch (I) {
						return p.c.captureException(I), I.message && o(Object(f.paypalApiError)(I.message)), null
					}
					const C = c.a.redditUrl;
					let S = {
						_o: C,
						o: x,
						pt: s
					};
					h && r && (S = {
						...S,
						r
					});
					try {
						const e = Object(u.a)(`${C}/framedModal/paypal-finish`, {
								...S,
								s: !0
							}),
							s = Object(u.a)(`${C}/framedModal/paypal-finish`, S),
							c = i()(),
							m = await Object(E.g)(l(), c, x, e, s);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (d = null == e ? void 0 : e.errors) || void 0 === d ? void 0 : d.length) return o(Object(f.paypalApiError)(k(e.errors))), null;
							const s = Object(_.j)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && s) return r ? o(F({
									subredditId: r,
									powerupsCount: n,
									user: s,
									isAnonymous: t
								})) : b && o(H({
									user: s
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return o(Object(f.paypalApiError)(w())), null
				}, P = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					var o;
					try {
						const s = i()(),
							a = await Object(E.c)(r(), s, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return n(Object(f.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						p.c.captureException(a)
					}
					return n(Object(f.paypalApiError)(w())), !1
				}, N = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await Object(E.l)(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(f.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: s
							} = n.data.identity, r = s.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(r)), r[0] && e(Object(f.selectSavedCard)(r[0].cardId))
						} else e(Object(f.stripeApiError)(s.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (r) {
						p.c.captureException(r), e(Object(f.savedCardsSuccess)([]))
					}
				}, A = e => async (t, n, {
					gqlContext: s
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await Object(E.k)(s(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: r
							} = n.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(k(r))
					} catch (r) {
						p.c.captureException(r)
					}
				}, T = Object(m.a)(h.O), M = Object(m.a)(h.P), L = Object(m.a)(h.Q), B = e => async (t, n) => {
					await t(T(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, R = (e, t, n) => async (r, o, {
					gqlContext: a
				}) => {
					r(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await Object(E.b)(a(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: s
								} = e.data.cancelEconRecurringPayment;
							if (s && s.length) return void r(B(s[0].message));
							r(L({
								subredditId: t,
								allocatedAt: n
							}))
						} else r(B(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), r(B(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(m.a)(h.S), F = e => async (t, n) => {
					t(U(e)), t(Object(x.l)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(C.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(C.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(m.a)(h.W), H = ({
					user: e
				}) => async t => {
					await t(Object(x.n)(!0)), t(D({
						user: e
					}))
				}, G = Object(m.a)(h.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return I
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/Gold/ProductOffer.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = n("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = n("./src/redditGQL/operations/ProductOffers.json");
			var b = n("./src/reddit/selectors/gold/productOffers.ts"),
				h = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(r.a)(h.db),
				g = Object(r.a)(h.cb),
				v = Object(r.a)(h.bb),
				_ = Object(r.a)(h.Z),
				y = Object(r.a)(h.Y),
				x = Object(r.a)(h.X),
				C = Object(r.a)(h.Eb),
				E = Object(r.a)(h.Cb),
				j = Object(r.a)(h.Db),
				w = Object(r.a)(h.Hb),
				k = Object(r.a)(h.Gb),
				O = Object(r.a)(h.Fb),
				S = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, I = (e, t) => async n => {
					e === i.c.Premium ? n(N()) : t && n(P(e, t))
				}, P = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					const a = r();
					if (!Object(b.i)(a, {
							subredditId: t,
							type: e
						})) {
						n(f());
						try {
							const s = await ((e, t, n, s) => Object(d.a)(e, {
								...p,
								variables: {
									subredditId: t,
									types: n,
									includeGlobal: s
								}
							}))(o(), t, [e], !0);
							if (s.ok) {
								const e = s.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const r = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: r || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = s.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							n(v(e)), n(S(e))
						}
					}
				}, N = () => async (e, t, {
					gqlContext: n
				}) => {
					var r, a;
					const c = i.c.Premium;
					e(_());
					try {
						const t = await ((e, t) => Object(d.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(n(), [c]);
						if (t.ok) {
							const n = t.body;
							if (null === (r = n.errors) || void 0 === r ? void 0 : r.length) throw new Error(n.errors[0].message);
							return void e(y({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(x(t)), e(S(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var r, a, i;
					e(C());
					try {
						const t = await (e => Object(d.a)(e, m))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (r = n.errors) || void 0 === r ? void 0 : r.length) throw new Error(n.errors[0].message);
							return void e(j({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						o.c.captureException(c);
						const t = c.message ? c.message : s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(E(t)), e(S(t))
					}
				}, T = e => async (t, n, {
					gqlContext: r
				}) => {
					var o;
					t(w(e));
					try {
						const n = await Object(l.b)(r(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const s = n.body,
								{
									errors: r
								} = s.data.cancelEconRecurringPayment;
							if (null == r ? void 0 : r.length) throw new Error(r[0].message);
							t(O({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (o = a.message) && void 0 !== o ? o : s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(k(e)), t(S(e)), !1
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return l
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
				return x
			})), n.d(t, "_deleteSavedCard", (function() {
				return C
			})), n.d(t, "deleteSavedCard", (function() {
				return E
			})), n.d(t, "savedCardsPending", (function() {
				return j
			})), n.d(t, "savedCardsSuccess", (function() {
				return w
			})), n.d(t, "loadSavedCards", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(o.a)(i.B),
				d = Object(o.a)(i.w),
				u = Object(o.a)(i.b),
				m = Object(o.a)(i.y),
				p = Object(o.a)(i.a),
				b = Object(o.a)(i.E),
				h = Object(o.a)(i.G),
				f = Object(o.a)(i.F),
				g = Object(o.a)(i.D),
				v = e => async (t, n) => {
					const r = n(),
						o = Object(c.h)(r),
						a = Object(c.l)(r),
						{
							token: i,
							error: l
						} = await e.createToken({
							name: o,
							address_zip: a
						});
					if (o.trim()) {
						if (!l && i) return i;
						t(f(l || void 0))
					} else {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, _ = Object(o.a)(i.x), y = Object(o.a)(i.H), x = Object(o.a)(i.C), C = Object(o.a)(i.g), E = e => async (t, n, {
					apiContext: s
				}) => {
					t(C(e));
					try {
						const t = await Object(a.a)(s(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						r.c.captureException(o)
					}
				}, j = Object(o.a)(i.z), w = Object(o.a)(i.A), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(j());
					try {
						const t = await Object(a.b)(n());
						if (t.error) throw new Error(t.error.type);
						const s = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(s)), s[0] && e(x(s[0].cardId))
					} catch (s) {
						r.c.captureException(s), e(w([]))
					}
				}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/governance/community.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(s.a)(o.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: s
				}) => {
					const o = await Object(r.a)(s(), {
						subredditId: e
					});
					o.ok && t(a({
						subredditId: e,
						...o.body
					}))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				a = Object(s.a)(r),
				i = Object(s.a)(o)
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/extractQueryParams/index.ts"),
				i = n("./src/lib/filterQueryParams/index.ts"),
				c = n("./src/lib/pageTitle.ts"),
				l = n("./src/reddit/actions/chat/userSettings.ts"),
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
			var x = n("./src/reddit/selectors/notificationPrefs.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/notifications/constants.ts");
			const j = Object(f.a)(E.c),
				w = Object(f.a)(E.b),
				k = Object(f.a)(E.a),
				O = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(C.j)(s)) return;
					const r = Object(x.b)(s),
						a = Object(x.a)(s);
					if (r || a) return;
					e(j());
					const i = await (e => Object(_.a)(e, {
						endpoint: Object(y.a)(`${v.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: o.hb.GET
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
			Object(f.a)(E.f), Object(f.a)(E.e), Object(f.a)(E.d);
			var S = n("./src/reddit/actions/platform.ts"),
				I = n("./src/reddit/actions/preferences.ts"),
				P = n("./src/reddit/actions/profile/index.ts"),
				N = n("./src/reddit/actions/subredditSettings.ts"),
				A = n("./src/reddit/actions/users.ts"),
				T = n("./src/reddit/constants/parameters.ts"),
				M = n("./src/reddit/helpers/externalAccount/index.tsx"),
				L = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				B = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				R = n("./src/reddit/selectors/externalAccount.ts");
			const U = e => async (t, n) => {
				await t(Object(A.s)());
				const f = [t(Object(I.x)(!0)), t(Object(p.a)())];
				n().economics.paymentSystems.status === B.a.NotFetched && f.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(m.d)());
					const s = await Object(u.d)(n());
					s.ok ? e(Object(m.c)(s.body)) : e(Object(m.b)({
						error: s.error
					}))
				})())), await Promise.all(f); {
					const e = n();
					if (!Object(C.J)(e)) return Object(L.a)(t, e)
				}
				const {
					page: v = o.Xb.Account
				} = e.params;
				if (v === o.Xb.Gold) return void t(Object(r.c)("/settings/premium"));
				const _ = [];
				v === o.Xb.Profile && (_.push(t(Object(P.a)())), _.push(t(Object(N.g)()))), v === o.Xb.Account && (_.push(t(Object(b.o)())), _.push(t(Object(d.b)()))), v === o.Xb.Notifications && _.push(t(O())), v !== o.Xb.Privacy && v !== o.Xb.Messaging || _.push(t(Object(l.b)())), v === o.Xb.Premium && (_.push(t(Object(P.a)())), _.push(t(Object(h.n)(!0)))), await Promise.all(_); {
					const e = n(),
						o = e.platform.currentPage,
						{
							url: c
						} = o,
						l = Object(a.a)(c).get(T.d);
					if (l && (t(Object(r.c)(Object(i.a)(c, [T.d]))), Object(R.a)(e))) {
						const e = s.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(g.f)({
							text: e
						})), Object(M.b)(l)
					}
				}
				t(Object(S.l)({
					title: Object(c.j)()
				}))
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts"),
				o = n("./src/reddit/helpers/trackers/screenview.ts"),
				a = n("./src/telemetry/index.ts"),
				i = n("./src/telemetry/models/Timer.ts");
			const c = () => async (e, t) => {
				const n = t(),
					{
						currentPage: c
					} = n.platform;
				if (!c) return;
				const l = c.routeMatch,
					d = Object(s.a)(n),
					u = Object(r.b)(l, n, d);
				u && a.c.has(u) && Object(o.k)(l, n, i.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return se
			})), n.d(t, "b", (function() {
				return ae
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				o = n.n(r),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				f = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.hb.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/bannedUser.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/subredditModeration/constants.ts"),
				O = n("./src/lib/initializeClient/installReducer.ts"),
				S = n("./node_modules/redux/es/redux.js");
			var I = (e = null, t) => {
				switch (t.type) {
					case k.o:
					case k.n:
						return null;
					case k.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var N = (e = P, t) => {
					switch (t.type) {
						case k.o: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(y.d)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case k.n:
						case k.m: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(y.d)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				A = Object(S.c)({
					error: I,
					pending: N
				});
			const T = {};
			var M = (e = T, t) => {
					switch (t.type) {
						case k.n: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, r = Object(y.d)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				L = n("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case L.a:
						return t.payload;
					default:
						return e
				}
			};
			const R = {};
			var U = (e = R, t) => {
					switch (t.type) {
						case k.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				F = n("./node_modules/icepick/icepick.js");
			const D = {};
			var H = (e = D, t) => {
				switch (t.type) {
					case k.l:
					case k.n: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: s
						})
					}
					case k.s: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(F.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var G = (e = null, t) => {
				switch (t.type) {
					case k.r:
					case k.q:
						return null;
					case k.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case k.r:
							return !0;
						case k.q:
						case k.p:
							return !1;
						default:
							return e
					}
				},
				z = Object(S.c)({
					error: G,
					pending: W
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case k.r:
						case k.p:
							return null;
						case k.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				K = Object(S.c)({
					api: z,
					result: q
				});
			const J = {};
			var Y = (e = J, t) => {
					switch (t.type) {
						case k.n: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case k.s: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case k.l: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload, r = s[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				V = Object(S.c)({
					api: A,
					fetchedTokens: M,
					inContext: B,
					loadMore: U,
					models: H,
					search: K,
					userOrder: Y
				});
			Object(O.a)({
				features: {
					banned: V
				}
			});
			const Q = Object(a.a)(k.o),
				Z = Object(a.a)(k.n),
				X = Object(a.a)(k.m),
				$ = (e, t = {}) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						a = t.after || "",
						i = Object(y.d)(e, a),
						c = o.features.banned.fetchedTokens[i];
					if (o.features.banned.api.pending[i] || c) return;
					n(Q({
						subredditId: e,
						fetchedToken: a
					}));
					const l = o.subreddits.models[e].name,
						d = await v(r(), l, t);
					d.ok ? n(Z({
						...d.body,
						fetchedToken: a
					})) : n(X({
						subredditId: e,
						fetchedToken: a
					}))
				}, ee = Object(a.a)(k.r), te = Object(a.a)(k.q), ne = Object(a.a)(k.p), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s().subreddits.models[e].name,
						a = {
							username: Object(_.a)(t)
						};
					n(ee());
					const i = await v(r(), o, a);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, re = Object(a.a)(k.l), oe = Object(a.a)(k.s), ae = (e, t, n) => async (r, a, {
					apiContext: c
				}) => {
					const l = a(),
						u = l.subreddits.models[e].url,
						f = l.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), r(Object(i.h)(n));
					const g = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.hb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(c(), u, t);
					if (g.ok) {
						r(Object(i.e)(n));
						const e = {
							username: t.username
						};
						r(Object(d.f)({
							kind: x.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const o = await v(c(), f, e);
						o.ok && r(re(o.body))
					} else {
						r(Object(i.f)(n, g.error));
						const e = o()(g, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(d.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const i = r().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.hb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(a(), i, t);
					if (c.ok) n(oe({
						subredditId: e,
						userId: t
					})), n(Object(d.f)({
						kind: x.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = o()(c, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(d.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, s) => {
					const r = s();
					await Promise.all([(async () => {
						if (!Object(C.b)(u.a.BAN_USER)(r) && !Object(j.Q)(r, {
								subredditId: e
							})) {
							const t = Object(j.T)(r, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const s = Object(w.nb)(r, {
							userName: t
						});
						if (!s) return;
						const o = Object(E.h)(r, {
							subredditId: e
						});
						o && o[s.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(c.i)(u.a.BAN_USER))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(a.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: r,
				contextId: a,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: h,
				children: f
			}) => {
				return o.a.createElement(l.q, {
					onClick: t => {
						if (b && b(t), e(), p === s.awardNotification) return h();
						r(Object(d.b)(a))
					},
					className: n,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m
				}, f)
			};
			u.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = m(Object(c.c)(u))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: c.a.container
			}, r.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, r.a.createElement(l.b, null)), r.a.createElement(l.i, null, r.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), r.a.createElement(l.l, null, e.message && r.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && r.a.createElement("div", {
				className: c.a.text
			}, e.children), r.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && r.a.createElement(a.l, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), r.a.createElement(a.i, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, o._("Previews Terms of Use", null, {
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
			var s, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/currency/centsToDollars/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				u = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/selectors/crypto/points.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return p.fbt._("{price}/mo", [p.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				h = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return p.fbt._("{price} / month", [p.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var f = n("./src/reddit/components/Economics/Price/index.m.less"),
				g = n.n(f);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				subredditId: e,
				pointPrice: t
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, {
				className: g.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: r,
					subredditId: d
				} = e, p = Object(a.e)(e => Object(m.b)(e, d)), f = e.dollarPrice && `$${Object(c.a)(e.dollarPrice,!0)}`, y = e.tokenPrice && p && Object(l.a)(Object(u.b)(e.tokenPrice, null == p ? void 0 : p.displayConversion)) + (n ? "" : " " + p.name);
				if (!f && !y) return null;
				const x = r ? s.Monthly : s.Once;
				return o.a.createElement("span", {
					className: Object(i.a)(t, g.a.price)
				}, f && y ? v._("{dollar-price} or {point-price}", [v._param("dollar-price", b(f, x)), v._param("point-price", o.a.createElement(_, {
					subredditId: d,
					pointPrice: b(y, x)
				}))], {
					hk: "2Gif0l"
				}) : f ? h(f, x) : y ? o.a.createElement(_, {
					subredditId: d,
					pointPrice: h(y, x)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				i = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = n("./src/reddit/icons/svgs/Crown/index.tsx"),
				l = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
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
					s = e.subreddit && e.subreddit.primaryColor;
				return r.a.createElement("div", {
					className: Object(o.a)(n.container, e.className)
				}, e.subreddit ? r.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : r.a.createElement(c.a, {
					className: n.crown
				}), r.a.createElement(a.a, {
					className: n.bling1
				}), r.a.createElement(a.a, {
					className: n.bling2
				}), r.a.createElement(a.a, {
					className: n.bling3
				}), t ? r.a.createElement("img", {
					className: n.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : r.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: s
					}
				}))
			}
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				d = n("./src/reddit/components/EditableImage/index.m.less"),
				u = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(l.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: n,
						editButtonClassName: s,
						isLoading: l,
						imageUrl: d
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.Container, n)
					}, r.a.createElement("label", {
						className: u.a.HitBox
					}, r.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, d ? r.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: d
					}) : t), r.a.createElement(a.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !l && r.a.createElement("div", {
						className: Object(o.a)(u.a.EditButton, s)
					}, r.a.createElement(c.a, {
						name: "add_media",
						className: u.a.EditIcon
					}))), l && r.a.createElement(i.a, {
						className: u.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const s = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${i.a.assetPath}/${s}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: o
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(i);

			function l(e) {
				const {
					index: t,
					children: n,
					color: s
				} = e, i = s && Object(a.a)(s, void 0, o.b.white);
				return r.a.createElement("div", {
					className: c.a.bullet
				}, r.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: s,
						color: i
					}
				}, r.a.createElement("span", {
					className: c.a.number
				}, t)), r.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/lib/browser.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends a.a.Component {
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
					const e = await r.a.toDataURL(this.props.url, {
						color: {
							dark: Object(c.a)(this.props).titleText,
							light: Object(c.a)(this.props).body
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
			t.a = Object(i.a)(l)
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/gold/awardIcon.ts"),
				d = n("./src/reddit/selectors/meta.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/userFlair.ts"),
				v = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/config.ts"),
				x = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = n("./src/lib/lessComponent.tsx"),
				E = n("./src/lib/prettyPrintNumber/index.ts"),
				j = n("./src/reddit/components/ChatButton/index.tsx"),
				w = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = n("./src/reddit/components/SubscribeButton/index.tsx"),
				S = n("./src/reddit/components/UserIcon/index.tsx"),
				I = n("./src/reddit/endpoints/profile/info.ts"),
				P = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				N = n("./src/reddit/icons/fonts/Info/index.tsx"),
				A = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var T = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				M = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				L = n("./src/reddit/models/Gold/Award.ts"),
				B = n("./src/reddit/models/User/index.ts"),
				R = n("./src/reddit/components/HumanDate/index.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				F = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				D = n("./src/reddit/actions/inContextModeration.ts"),
				H = n("./src/reddit/actions/modal.ts"),
				G = n("./src/reddit/actions/subredditModeration/ban.ts"),
				W = n("./src/reddit/constants/modals.ts"),
				z = n("./src/reddit/components/Hovercards/helpers.ts"),
				q = n("./src/reddit/icons/fonts/index.tsx"),
				K = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				J = n("./src/reddit/selectors/bannedUser.ts"),
				Y = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				V = n.n(Y);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(a.c)({
				hasModMailPermissions: Object(u.b)(K.c.mail),
				isUserBanned: (e, t) => !!Object(J.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.nb)(e, {
					userName: t.username
				})
			});
			class X extends r.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: s,
						onUnbanUser: o,
						sendEvent: a,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, s ? r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), a(P.e(t))
						}
					}, r.a.createElement(q.a, {
						name: "ban",
						isFilled: !0,
						className: V.a.icon
					}), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), a(P.a(t))
						}
					}, r.a.createElement(q.a, {
						name: "ban",
						className: V.a.icon
					}), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), n && r.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), a(P.d(t))
						}
					}, r.a.createElement(q.a, {
						name: "mod_mute",
						className: V.a.icon
					}), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(o.b)(Z, (e, {
					username: t,
					subredditId: n,
					contextId: s
				}) => ({
					onUnbanUser: t => e(Object(G.e)(n, t)),
					requestUserBanInfo: () => e(Object(G.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(D.c)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(G.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(D.d)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(H.i)(W.a.MUTE_USER))
					}
				}))(X),
				ee = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => r.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, r.a.createElement(q.a, {
					name: "tag",
					className: V.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				se = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = n.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = C.a.wrapped(S.a, "UserIcon", re.a),
				ie = C.a.wrapped(O.a, "SubscribeButton", re.a),
				ce = C.a.wrapped(j.b, "ChatButton", re.a),
				le = C.a.wrapped(T, "KarmaIcon", re.a),
				de = C.a.wrapped(M.a, "PremiumIcon", re.a),
				ue = C.a.wrapped(x.a, "UserNameLink", re.a),
				me = C.a.div("UserNameMetaData", re.a),
				pe = C.a.div("MetaDataItem", re.a),
				be = C.a.div("Bullet", re.a),
				he = C.a.div("UserNameContainer", re.a),
				fe = C.a.div("UserInfoContainer", re.a),
				ge = C.a.div("PostKarma", re.a),
				ve = C.a.div("CommentKarma", re.a),
				_e = C.a.div("KarmaGrid", re.a),
				ye = C.a.div("GenericKarma", re.a),
				xe = C.a.a("InfoLink", re.a),
				Ce = C.a.div("KarmaCount", re.a),
				Ee = C.a.div("KarmaLabel", re.a),
				je = C.a.div("GenericKarmaLabel", re.a),
				we = C.a.div("BannerImage", re.a),
				ke = C.a.div("UserContainer", re.a),
				Oe = C.a.div("BottomSpacer", re.a),
				Se = C.a.div("Container", re.a),
				Ie = e => r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && r.a.createElement(A.a, {
					className: re.a.adminIcon,
					title: _.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && r.a.createElement(x.a, {
					to: "/premium"
				}, r.a.createElement(de, null))), r.a.createElement(me, null, e.user.username && r.a.createElement(pe, null, e.user.username, r.a.createElement(be, null, "•")), r.a.createElement(pe, null, r.a.createElement(R.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: n
						}
					} = e, s = {
						...I.a,
						...n
					};
					return t ? r.a.createElement(_e, null, r.a.createElement(ye, null, r.a.createElement(Ce, null, Object(E.b)(s.fromPosts)), r.a.createElement(je, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(ye, null, r.a.createElement(Ce, null, Object(E.b)(s.fromComments)), r.a.createElement(je, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))), r.a.createElement(ye, null, r.a.createElement(Ce, null, Object(E.b)(s.fromAwardsReceived)), r.a.createElement(je, null, _.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [_.fbt._plural(s.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), r.a.createElement(xe, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(N.a, {
						className: re.a.infoIcon
					})))), r.a.createElement(ye, null, r.a.createElement(Ce, null, Object(E.b)(s.fromAwardsGiven)), r.a.createElement(je, null, _.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [_.fbt._plural(s.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), r.a.createElement(xe, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(N.a, {
						className: re.a.infoIcon
					}))))) : r.a.createElement(fe, null, r.a.createElement(le, null), r.a.createElement(ge, null, r.a.createElement(Ce, null, Object(E.b)(s.fromPosts)), r.a.createElement(Ee, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), r.a.createElement(ve, null, r.a.createElement(Ce, null, Object(E.b)(s.fromComments)), r.a.createElement(Ee, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Ne = e => {
					const {
						className: t,
						contextId: n,
						currentUser: s,
						hideNSFWPref: o,
						hoverId: a,
						isLoggedIn: i,
						onClickSnoovatar: c,
						origin: l,
						moderatorPermissions: d,
						prefersReducedAnimations: u,
						sendEvent: m,
						showAwardKarma: p,
						style: b,
						subredditId: h,
						topAwardIcon: f,
						userName: g,
						user: v,
						userFlair: x,
						userIsBanned: C,
						userProfileStyles: E,
						acceptChats: j,
						isCommentAuthorBlocked: k
					} = e;
					if (!v) return r.a.createElement(Se, {
						style: b
					});
					const O = !!s && Object(B.e)(s) === g,
						S = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						I = v.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						N = d && d.flair,
						A = d && d.access,
						T = x && x.templateIds && x.templateIds.length > 0,
						M = x && x.displaySettings && x.displaySettings.isEnabled,
						{
							awardedLastMonth: L
						} = v,
						R = !!v.snoovatarFullBodyAsset,
						D = v.isNSFW && o;
					let H;
					return H = R ? !D && E && E.bannerBackgroundImage || void 0 : D ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, r.a.createElement(Se, {
						className: t,
						id: a,
						style: b
					}, !R && H && r.a.createElement(we, {
						style: {
							backgroundImage: `url('${H}')`
						}
					}), r.a.createElement(ke, null, R ? r.a.createElement(F.a, {
						isHovercard: !0,
						bannerBackgroundImage: H,
						compact: !0,
						currentUserHasSnoovatar: S,
						isEmployee: v.isEmployee,
						isGold: v.isGold,
						isNSFW: v.isNSFW,
						isOwnProfile: O,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!u,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						title: null,
						userCreated: v.created,
						username: g,
						url: `/user/${e.userName}/`
					}) : r.a.createElement(he, null, r.a.createElement(ae, {
						iconUrl: I,
						isNSFW: v.isNSFW,
						userName: g
					}), r.a.createElement(Ie, {
						origin: l,
						user: v,
						userName: g
					})), r.a.createElement(Pe, {
						showAwardKarma: p,
						user: v
					}), L && r.a.createElement(U.a, {
						recentAwardings: L,
						topAwardIcon: f,
						username: g
					}), i && !O && !C && j && !k && r.a.createElement(ce, {
						contextId: n,
						userId: v.id,
						text: _.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), v.hasUserProfile && !C && !k && !O && v.enableFollowers && r.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0
					})), A && n && !O && h && r.a.createElement($, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), N && n && T && M && h && r.a.createElement(ne, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), r.a.createElement(w.i, {
						contextId: n,
						subredditId: h,
						user: v
					}), !(A || i) && r.a.createElement(Oe, null))
				},
				Ae = Object(k.a)(Ne),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return r.a.createElement(Ae, oe({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = Ne;
			var Me = Te;
			const Le = Object(a.c)({
					activeTooltipId: h.a,
					currentUser: f.j,
					isLoggedIn: f.J,
					hideNSFWPref: f.B,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.l)(e, {
						subredditId: t
					}) : void 0,
					origin: d.j,
					prefersReducedAnimations: v.c,
					showAwardKarma: (e, t) => {
						return Object(h.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(l.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: f.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(g.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.eb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Be = Object(o.b)(Le, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Be(e => r.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, r.a.createElement(Me, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return r.a.createElement(o.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, r.a.createElement(a.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: c,
				getComponent: () => Object(a.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(d.b)(t.tooltipId)(e)
			});
			var m = Object(a.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(c.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(d.b)(t.tooltipId)(e)
			});
			var h = Object(a.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName))
					}
				})),
				f = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				g = n.n(f);
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return r.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const _ = o.a.wrapped(v, "HoverDiv", g.a),
				y = m(_),
				x = h(_)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.tsx"),
				o = n("./src/reddit/components/Hovercards/helpers.m.less"),
				a = n.n(o);
			const i = s.a.wrapped(r.a, "UserActionItem", a.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: r,
						tooltipType: o
					} = e;
					let a = r;
					return n && (a = `${a}--${n}`), o && (a = `${a}--${o}`), t && (a = `${a}--${t}`), s && (a = `${a}--${s}`), a
				}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						d.a.publish(l.a, s, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(o.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(o.b)(() => Object(a.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
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
				const n = Object(h.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(o.b)(() => Object(a.a)(_, e => e))(e => r.a.createElement(p, {
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
			var x = Object(o.b)(() => Object(a.c)({
					subreddit: f.T
				}))(e => r.a.createElement(p, {
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
				C = n("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), o = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: o
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: o
				} = Object(C.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: o,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, o]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var w = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), o = Object(s.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: o
				})
			};
			var k = Object(o.b)(() => Object(a.c)({
				subreddit: f.T
			}))(e => r.a.createElement(p, {
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
			var O = Object(o.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
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
			var S = Object(o.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
			const d = {
				[a.U.BEST]: "best",
				[a.U.HOT]: "hot",
				[a.U.NEW]: "new",
				[a.U.CONTROVERSIAL]: "controversial",
				[a.U.TOP]: "top",
				[a.U.RISING]: "rising",
				[a.U.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return d[n] ? r.a.createElement(i.a, {
					name: d[n],
					isFilled: t,
					className: Object(o.a)(e, l.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/Loader/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_1Jx7v9Z1D1htyYeKixW2Gx"
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class d extends r.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: i
					} = t, d = s.description ? s.description : s.name;
					return r.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${o.a.oldRedditUrl}/user/${n}/gilded`
					}, r.a.createElement("div", {
						className: c.a.iconColumn
					}, r.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: e
					}), i > 1 && r.a.createElement("span", {
						className: c.a.count
					}, `+${Object(a.b)(i-1)}`)), r.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", s.name), l._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = d
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
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/HumanDate/index.tsx"),
				u = n("./src/reddit/contexts/InsideOverlay.tsx"),
				m = n("./src/reddit/endpoints/profile/info.ts"),
				p = n("./src/reddit/helpers/karma.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/tooltip.ts"),
				v = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				y = n.n(_);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = c.a.div("Container", y.a),
				E = c.a.div("Body", y.a),
				j = c.a.h5("Title", y.a),
				w = c.a.span("Label", y.a);
			class k extends o.a.Component {
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
						tooltip: s,
						tooltipId: r,
						className: a
					} = this.props, i = r && s ? {
						id: r,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(C, {
						className: a
					}, o.a.createElement(j, null, n), o.a.createElement(E, null, e, o.a.createElement(w, x({
						key: "label"
					}, i), t)), r && s && o.a.createElement(v.c, {
						caretOnTop: !0,
						tooltipId: r
					}, s))
				}
			}
			var O = Object(a.b)(null, e => ({
					toggleTooltip: t => e(Object(g.h)({
						tooltipId: t
					}))
				}))(Object(u.b)(k)),
				S = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				I = n.n(S);
			const P = Object(i.a)(h.j, (e, {
					profileName: t
				}) => Object(f.tb)(e, t), (e, t) => ({
					karma: {
						...m.a,
						...null == t ? void 0 : t.karma,
						total: Object(p.a)(t)
					},
					enableFollowers: !!(null == t ? void 0 : t.enableFollowers),
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				N = c.a.div("Container", I.a);

			function A(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			t.a = Object(a.b)(P)(Object(u.b)(e => {
				const {
					karma: t,
					enableFollowers: n,
					profileCreated: r,
					isOverlay: a,
					subscribers: i,
					className: c,
					highlightClassName: u
				} = e, p = {
					...m.a,
					...t
				}, h = A(a, "karma"), f = A(a, "cakeday"), g = `${s.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[s.fbt._plural(p.fromPosts,"number",Object(l.b)(p.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${s.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[s.fbt._plural(p.fromComments,"number",Object(l.b)(p.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${s.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[s.fbt._plural(p.fromAwardsReceived,"number",Object(l.b)(p.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${s.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[s.fbt._plural(p.fromAwardsGiven,"number",Object(l.b)(p.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return o.a.createElement(N, {
					className: c
				}, o.a.createElement(O, {
					className: u,
					icon: o.a.createElement(b.a, {
						name: "karma",
						isFilled: !0,
						className: I.a.icon,
						key: "karma"
					}),
					label: Object(l.b)(p.total, {
						displayFull: !0
					}),
					title: s.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: h,
					tooltip: g
				}), o.a.createElement(O, {
					className: u,
					icon: o.a.createElement(b.a, {
						name: "cake",
						isFilled: !0,
						className: I.a.icon,
						key: "cakeDay"
					}),
					label: o.a.createElement(d.a, {
						seconds: r,
						showDay: !0
					}),
					title: s.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: f,
					tooltip: o.a.createElement(d.d, {
						seconds: r
					})
				}), n && i > 0 && o.a.createElement(O, {
					className: u,
					icon: o.a.createElement(b.a, {
						name: "user",
						isFilled: !0,
						className: I.a.icon,
						key: "followers"
					}),
					title: s.fbt._("Followers", null, {
						hk: "4ucimK"
					}),
					label: Object(l.b)(i, {
						displayFull: !0
					})
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = o.a.div("dynamicTwoCol", c.a),
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
				x = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				C = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				E = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				w = n.n(j),
				k = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				O = n.n(k);
			var S = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: n,
					isDeletingBanner: s,
					isDeletingIcon: o,
					isEmployee: a,
					isGold: i,
					isNSFW: c,
					isOwnProfile: l,
					onClickSnoovatar: d,
					onDeleteBanner: u,
					onDeleteIcon: m,
					profileIcon: p,
					title: j,
					userCreated: k,
					username: S,
					url: I
				}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(C.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: S,
					isDeletingBanner: !!s,
					onDeleteBanner: u
				}), r.a.createElement("div", {
					className: w.a.SnooIconWrapper
				}, l || !p || c ? r.a.createElement(y.a, {
					iconUrl: p,
					isNSFW: c,
					userName: S,
					isProfileIdCard: !0
				}) : r.a.createElement(v.b, {
					href: p
				}, r.a.createElement(y.a, {
					iconUrl: p,
					isNSFW: c,
					userName: S,
					isProfileIdCard: !0
				})), t && !n && (o ? r.a.createElement(g.a, {
					sizePx: 20,
					className: O.a.loadingIcon
				}) : r.a.createElement(_.a, {
					name: "close",
					className: O.a.closeIcon,
					onClick: m
				}))), !t && l && r.a.createElement(f.a, {
					to: "/settings/profile",
					className: w.a.settingsLink
				}, r.a.createElement(_.a, {
					name: "settings",
					className: O.a.settingsIcon
				})), j && r.a.createElement("h4", {
					className: w.a.userTitle
				}, j), r.a.createElement(E.a, {
					className: w.a.userName,
					username: S,
					userCreated: k,
					url: I
				}), a && r.a.createElement(_.a, {
					name: "admin",
					isFilled: !0,
					className: w.a.adminIcon,
					title: h.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && r.a.createElement("a", {
					title: h.fbt._("{username} has Reddit Premium", [h.fbt._param("username", S)], {
						hk: "3Fylv"
					}),
					href: `${b.a.redditUrl}/premium`
				}, r.a.createElement(_.a, {
					name: "premium",
					isFilled: !0,
					className: w.a.premiumIcon
				})), l && r.a.createElement(x.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				I = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var P = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDefaultIcon: s,
					isDeletingBanner: o,
					isDeletingIcon: a,
					isEmployee: i,
					isGold: c,
					isNSFW: l,
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
				}) => f ? r.a.createElement(I.a, {
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDeletingBanner: o,
					isEmployee: i,
					isGold: c,
					isNSFW: l,
					isOwnProfile: d,
					onClickSnoovatar: u,
					onDeleteBanner: m,
					prefersReducedAnimations: b,
					snoovatarUrl: f,
					title: g,
					userCreated: v,
					username: _,
					url: y
				}) : r.a.createElement(S, {
					bannerBackgroundImage: e,
					editMode: n,
					isDefaultIcon: s,
					isDeletingBanner: o,
					isDeletingIcon: a,
					isEmployee: i,
					isGold: c,
					isNSFW: l,
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
				N = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const A = o.a.wrapped(a.b, "Widget", p.a),
				T = o.a.div("Description", p.a),
				M = o.a.wrapped(l, "Actions", p.a);
			class L extends r.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: n
					} = this.props;
					return e ? r.a.createElement(d.a, {
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
						className: s,
						footer: o,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOverlay: l,
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
						isDeletingBanner: x,
						onClickSnoovatar: C,
						onDeleteIcon: E,
						onDeleteBanner: j,
						prefersReducedAnimations: w,
						editMode: k,
						isNftPreview: O
					} = this.props;
					return O ? r.a.createElement(r.a.Fragment, null, r.a.createElement(N.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDeletingBanner: x,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: C,
						onDeleteBanner: j,
						prefersReducedAnimations: w,
						snoovatarUrl: b,
						title: h,
						userCreated: g,
						username: v,
						actions: e,
						url: f,
						footer: o
					})) : r.a.createElement(A, {
						className: s
					}, r.a.createElement(P, {
						bannerBackgroundImage: O ? void 0 : t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDefaultIcon: _,
						isDeletingBanner: x,
						isDeletingIcon: y,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: C,
						onDeleteBanner: j,
						onDeleteIcon: E,
						prefersReducedAnimations: w,
						profileIcon: m,
						title: h,
						userCreated: g,
						username: v,
						url: f,
						snoovatarUrl: b
					}), r.a.createElement(T, null, p), r.a.createElement(u.a, {
						profileName: v,
						isOverlay: l
					}), this.renderAwardedLastMonth(), r.a.createElement(M, null, e), o)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(d);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(a.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: r,
						isNSFW: a,
						userName: l
					} = this.props, {
						isUpdating: d
					} = this.state, m = e ? o.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === l ? o.a.createElement(i.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, m) : a && r ? null : m
				}
			}
			t.a = Object(l.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				u = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = n.n(u);
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(a.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileIcon"), this.setState({
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
						isNSFW: r,
						isProfileIdCard: a,
						userName: d
					} = this.props, {
						isUpdating: u
					} = this.state, p = o.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: r,
						userName: d
					});
					return t && Object(l.e)(t) === d ? o.a.createElement(i.a, {
						altText: s.fbt._("{userName} avatar image", [s.fbt._param("userName", d)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: a ? m.a.EditButton : void 0,
						isLoading: u,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(d.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = Object(r.c)({
					currentUser: a.j,
					hideNSFWPref: a.B
				}),
				c = Object(s.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(o.z)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/snoovatarModal.ts"),
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
					x = i && i.voteState;
				let C = null;
				y || (C = e ? "user_hovercard" : "profile_overview");
				const E = Object(r.useCallback)(() => v(Object(m.d)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return o.a.createElement(u.q, {
					onClick: () => {
						n ? (v(m.e), y && x === b.a.notVoted && _(Object(c.db)(y))) : E();
						const e = n ? "postify" : "copy";
						_(Object(l.b)({
							clickSource: C,
							share: h,
							source: e
						}))
					},
					className: Object(s.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(s.a)({
						[f.a.shirtIcon]: !n,
						[f.a.avatarPostButtonShirtIcon]: n
					})
				}), g._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: s,
				onClick: l
			}) {
				return r.a.createElement(a.q, {
					onClick: l,
					isFullWidth: !0,
					className: Object(o.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !t && s,
						[d.a.compactButtonLayout]: e
					}, n)
				}, t ? r.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : r.a.createElement("div", {
					className: d.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : s ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? r.a.createElement("div", {
					className: d.a.chevronIcon
				}) : r.a.createElement(i.a, {
					name: "caret_right",
					className: d.a.chevronIcon
				}))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/LottieAnimation/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
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
				actions: x,
				footer: C
			}) => {
				const {
					badge: E,
					url: j
				} = Object(s.useMemo)(() => (function(e) {
					const t = h.exec(e) || ["", "", ""],
						n = t[1],
						s = t[2];
					return {
						id: n,
						url: "testing" === s ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${n}`,
						badge: s
					}
				})(p), [p]), w = Object(o.e)(l.W);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(b.a.container, y)
				}, r.a.createElement(c.a, {
					className: b.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${a.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), r.a.createElement("div", {
					className: b.a.inner
				}, "testing" !== E && r.a.createElement("img", {
					alt: `${E} NFT`,
					className: b.a.badgeImage,
					src: `${a.a.assetPath}/img/snoovatars/nft_badge_${E}.svg`
				}), r.a.createElement("img", {
					className: b.a.cutout,
					src: `${a.a.assetPath}/img/snoovatars/hole-cutout-${w?"black":"white"}.svg`
				}), r.a.createElement("a", {
					href: j,
					target: "_blank",
					className: b.a.nftIcon,
					rel: "noopener noreferrer"
				}, r.a.createElement("img", {
					className: b.a.nftIconImage,
					alt: "View this NFT",
					src: `${a.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), r.a.createElement("img", {
					className: b.a.snoovatarImage,
					src: p,
					alt: "Avatar NFT Image"
				}), r.a.createElement(m.a, {
					isEmployee: e,
					isGold: t,
					isNSFW: n,
					title: f,
					username: v
				}), r.a.createElement(u.a, {
					className: b.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: v,
					userCreated: g,
					url: _
				}), r.a.createElement(d.a, {
					className: b.a.highlights,
					highlightClassName: b.a.highlight,
					profileName: v,
					isOverlay: !1
				}), r.a.createElement("nav", {
					className: b.a.actions
				}, x))), r.a.createElement("div", {
					className: Object(i.a)(b.a.footer, y)
				}, C))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = n.n(c),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(d);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: s,
				isDeletingBanner: c,
				onDeleteBanner: d
			}) {
				return r.a.createElement("div", {
					className: l.a.bannerWrapper
				}, r.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), s && e && (c ? r.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : r.a.createElement(a.a, {
					className: u.a.closeIcon,
					onClick: d
				})))
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: s,
				username: c,
				...l
			}) {
				const d = t ? r.a.createElement(r.a.Fragment, null, "u/", c, " · ", r.a.createElement(a.d, {
					seconds: s,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? r.a.createElement(o.a, i({}, l, {
					className: e,
					to: n
				}), d) : r.a.createElement("span", i({}, l, {
					className: e
				}), d)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(d);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: o,
				isNSFW: d
			}) => a.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && a.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), o && a.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${s.a.redditUrl}/premium`
			}, a.a.createElement(l.a, {
				className: u.a.snoovatarPremiumIcon
			})), d && a.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				h = n.n(b);
			const f = 25;

			function g(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function v(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const _ = g("particleDelay", h.a),
				y = g("particleX", h.a),
				x = g("particleFloat", h.a),
				C = () => {
					const e = v(y),
						t = v(x),
						n = v(_);
					return Object(a.a)(h.a.particle, e, t, n)
				};
			class E extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return r.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return r.a.createElement("div", {
						key: e,
						className: `${C()}`
					})
				}
			}
			var j = E,
				w = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				k = n.n(w),
				O = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: s,
				isDeletingBanner: b,
				isEmployee: f,
				isGold: g,
				isNSFW: v,
				isOwnProfile: _,
				onClickSnoovatar: y,
				onDeleteBanner: x,
				prefersReducedAnimations: C,
				snoovatarUrl: E,
				title: w,
				userCreated: S,
				username: I,
				url: P,
				isHovercard: N
			}) => {
				const A = Object(o.e)(e => !_ && !!E && Object(l.e)(e));
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!s,
					isNSFW: v,
					username: I,
					isDeletingBanner: !!b,
					onDeleteBanner: x
				}), r.a.createElement("div", {
					className: h.a.snoovatarContainer
				}, g && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: h.a.topGlow
				}), r.a.createElement("div", {
					className: h.a.bottomGlow
				}), !C && r.a.createElement(j, null)), r.a.createElement("img", {
					className: Object(a.a)(h.a.snoovatar, {
						[h.a.premiumGlow]: g
					}),
					src: E || void 0
				})), !s && _ && r.a.createElement(i.a, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, r.a.createElement(c.a, {
					name: "settings",
					className: k.a.settingsIcon
				})), r.a.createElement(O.a, {
					isEmployee: f,
					isGold: g,
					isNSFW: v,
					title: w,
					username: I
				}), r.a.createElement(p.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: I,
					userCreated: S,
					url: P
				}), (_ || !n && !!E) && r.a.createElement(d.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: _,
					onClick: y
				}), A && r.a.createElement(u.a, {
					username: I,
					isHovercard: !!N,
					share: {
						username: I
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = a.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: s,
					text: a,
					tooltipContentClass: i,
					...d
				} = e;
				return r.a.createElement("div", l({}, d, {
					className: Object(o.a)(c.a.container, n)
				}), a ? r.a.createElement("div", {
					className: Object(o.a)(c.a.tooltip, i, s ? c.a.below : c.a.above)
				}, a) : null, t)
			}, "HoverTooltip", c.a)
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				l = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/Settings/DeactivateModal.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const b = p.a.div("Container", m.a),
				h = p.a.h2("HeaderText", m.a),
				f = p.a.button("Close", m.a),
				g = p.a.wrapped(i.e, "PrimaryButton", m.a),
				v = p.a.wrapped(i.l, "SecondaryButton", m.a),
				_ = p.a.div("ButtonWrapper", m.a),
				y = p.a.textarea("TextArea", m.a),
				x = p.a.h3("SectionLabel", m.a),
				C = p.a.p("H", m.a),
				E = p.a.p("P", m.a),
				j = p.a.wrapped(l.a, "Input", m.a),
				w = p.a.div("CheckBoxWrapper", m.a),
				k = p.a.ul("UL", m.a),
				O = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				S = {
					ios: () => s.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => s.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => s.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => s.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class I extends o.a.Component {
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
						return o.a.createElement(d.l, null, o.a.createElement(C, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), o.a.createElement(k, null, o.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), o.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && o.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(O).map((e, t) => o.a.createElement("span", {
							key: e
						}, !!t && ", ", o.a.createElement("a", {
							href: O[e],
							target: "_blank"
						}, S[e] && S[e]()))))), o.a.createElement(x, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), o.a.createElement(y, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), o.a.createElement(x, null, s.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), o.a.createElement(j, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: s.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), o.a.createElement(j, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: s.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), o.a.createElement(w, null, o.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), o.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), o.a.createElement(_, null, o.a.createElement(v, {
							onClick: e.exit
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), o.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => s.fbt._("{text with URL}", [s.fbt._param("text with URL", t ? o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", o.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", o.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => o.a.createElement(d.l, null, o.a.createElement(C, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), o.a.createElement(E, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), o.a.createElement(_, null, o.a.createElement(g, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, s.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => o.a.createElement(d.l, null, o.a.createElement(C, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), o.a.createElement(_, null, o.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("Back", null, {
						hk: "1P3x9"
					})), o.a.createElement(g, {
						onClick: this.handleSubmit
					}, s.fbt._("Deactivate", null, {
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
					return o.a.createElement(b, null, o.a.createElement(f, {
						onClick: e.exit
					}, o.a.createElement(d.b, null)), o.a.createElement(d.i, null, o.a.createElement(h, null, s.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(a.a)(I)
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
				arrowRight: "_179JgBE7zFXVu12Sy73Zww"
			}
		},
		"./src/reddit/components/Settings/Notifications/Loader.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
				o = Object(s.a)({
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
				return re
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/moment/moment.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
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
				x = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				C = n("./src/reddit/controls/TextButton/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var w = Object(v.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: s,
						subredditInfo: r
					} = e, o = Object(c.d)();
					return i.a.createElement(x.e, {
						className: t
					}, i.a.createElement(x.i, null, i.a.createElement(E.a, null, i.a.createElement(x.q, null, j._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), i.a.createElement(C.a, {
						onClick: s
					}, i.a.createElement(x.b, null)))), i.a.createElement(x.l, null, i.a.createElement(x.p, null, j._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [j._param("subreddit name", r.prefixedName)], {
						hk: "2EKYNO"
					}))), i.a.createElement(x.g, null, i.a.createElement(x.r, {
						onClick: () => {
							n.isPremium ? o(Object(_.j)(r.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : o(Object(y.a)(n.id, r.id, n.allocatedAt)), s()
						},
						"data-redditstyle": !0
					}, j._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				k = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				O = n.n(k);

			function S(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var I = function(e) {
					const [t, n] = Object(a.useState)(!1), {
						className: r,
						allocation: o
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: h
					} = o, v = S(b), _ = S(c), y = S(l), {
						prefixedName: x
					} = p, C = _ ? s.fbt._("Subscribed {date}.", [s.fbt._param("date", _)], {
						hk: "24RAUK"
					}) : "", E = y ? s.fbt._("You can cancel after {date}.", [s.fbt._param("date", y)], {
						hk: "48A2TC"
					}) : "", j = v ? s.fbt._("Will be renewed on {date}.", [s.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", k = v ? s.fbt._("Still active until {date}.", [s.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", I = m ? u ? C : `${C} ${E}` : d ? `${C} ${j}` : `${C} ${k}`, P = m ? s.fbt._("{powerups count} Reddit Premium powerup/monthly", [s.fbt._param("powerups count", h.toLocaleString())], {
						hk: "4iP1Np"
					}) : s.fbt._("{powerups count} powerup/monthly", [s.fbt._param("powerups count", h.toLocaleString())], {
						hk: "11DNVJ"
					}), N = m && u || !m && d;
					return i.a.createElement("div", {
						className: Object(f.a)(r, O.a.container),
						title: I
					}, i.a.createElement("div", {
						className: O.a.allocationName
					}, s.fbt._("{subreddit name} Powerup", [s.fbt._param("subreddit name", x)], {
						hk: "4qAoO"
					})), i.a.createElement("div", {
						className: O.a.details
					}, P), i.a.createElement(g.o, {
						className: O.a.button,
						disabled: !N,
						onClick: () => n(!0)
					}, m || N ? s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : s.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && i.a.createElement(w, {
						withOverlay: !0,
						allocation: o,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				P = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				N = n.n(P);
			var A = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement("div", {
						className: N.a.title
					}, s.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => i.a.createElement(I, {
						allocation: e,
						className: N.a.allocation,
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
				}, s.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), i.a.createElement("div", {
					className: M.a.subtitle
				}, s.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var B = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				R = n.n(B);
			const U = Object(d.c)({
				allocationByKey: h.v
			});
			var F = Object(c.b)(U)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement(L, {
						className: R.a.header
					}), i.a.createElement(A, {
						allocationList: n
					})) : null
				})),
				D = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				H = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				G = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				W = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/higherOrderComponents/makeAsync.tsx"),
				K = n("./src/lib/loadWithRetries/index.ts"),
				J = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var Y = Object(q.a)({
					getComponent: () => Object(K.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(J.d)().catch(() => {})])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				V = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = n("./src/reddit/models/Toast/index.ts"),
				Z = n("./src/reddit/endpoints/gold/purchase.ts"),
				X = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				$ = n("./src/reddit/selectors/activeModalId.ts"),
				ee = n("./src/reddit/selectors/gold/productOffers.ts"),
				te = n("./src/reddit/selectors/user.ts"),
				ne = n("./src/reddit/components/Settings/index.m.less"),
				se = n.n(ne);
			const re = "update_card_modal_id",
				oe = Object(d.c)({
					cancelSubscriptionModalIsOpen: Object($.b)("settings_optout_modal_id"),
					goldExpiration: te.n,
					hasAndroidSubscription: te.o,
					hasIOSSubscription: te.t,
					hasStripeSubscription: te.x,
					hasPaypalSubscription: te.v,
					isGold: te.r,
					isPremiumSubscriber: te.s,
					premiumProductOfferSubscription: ee.g,
					premiumProductOfferSubscriptionIsCanceled: ee.f,
					updateCardModalIsOpen: Object($.b)(re)
				}),
				ae = Object(c.b)(oe, e => ({
					navigateToPurchasePremium: () => e(Object(l.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(re)),
					requestProductOfferSubscriptions: () => e(Object(u.b)()),
					requestCancelProductOfferSubscription: t => e(Object(u.a)(t)),
					showUpdateCardSuccessToast: () => {
						const t = s.fbt._("You successfully updated your payment information!", null, {
							hk: "3m4P1N"
						});
						e(Object(p.f)({
							kind: Q.b.SuccessCommunity,
							text: t
						}))
					}
				})),
				ie = (e, t, n) => e && !n ? s.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [s.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : s.fbt._("Your Premium membership is valid until {date}.", [s.fbt._param("date", t)], {
					hk: "4m4zaE"
				});
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleStripeCardUpdate = () => {
						var e;
						const t = null === (e = this.props.pageLayer) || void 0 === e ? void 0 : e.queryParams;
						(null == t ? void 0 : t[Z.d]) && this.props.showUpdateCardSuccessToast()
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
						requestProductOfferSubscriptions: s
					} = this.props;
					if (null == e ? void 0 : e.id) {
						await t(e.id) && (n(), s())
					}
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						hasAndroidSubscription: t,
						hasIOSSubscription: n,
						hasPaypalSubscription: r,
						hasStripeSubscription: a,
						isGold: c,
						isPremiumSubscriber: l,
						premiumProductOfferSubscription: d,
						premiumProductOfferSubscriptionIsCanceled: u,
						isResponsiveSettingsEnabled: m,
						toggleUpdateCardModal: p,
						updateCardModalIsOpen: h,
						prefs: {
							highlightComments: f,
							hideAds: g
						}
					} = this.props, v = t || n, _ = Boolean(d), y = o()(null == d ? void 0 : d.expiresAt).format("MMMM DD, YYYY.");
					return i.a.createElement(H.a, null, i.a.createElement(D.b, {
						className: se.a.premiumHeading,
						isResponsiveSettingsEnabled: m
					}, s.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), i.a.createElement(D.a, {
						className: se.a.premiumExpirationString
					}, s.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), i.a.createElement(G.a, null, s.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), i.a.createElement(D.a, {
						className: se.a.premiumExpirationString
					}, c ? ie(_, y, u) : s.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!_ || u) && i.a.createElement(W.f, {
						label: c ? s.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : s.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), a && i.a.createElement(W.a, {
						label: s.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: p
					}), r && i.a.createElement(W.f, {
						label: s.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), l && !v && !u && i.a.createElement(W.a, {
						label: s.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), c && i.a.createElement(i.a.Fragment, null, i.a.createElement(G.a, null, s.fbt._("premium features", null, {
						hk: "20MX2a"
					})), i.a.createElement(W.o, {
						on: g,
						disabled: !c,
						onClick: this.onHideAdsToggle,
						label: s.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: s.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), i.a.createElement(W.o, {
						on: f,
						disabled: !c,
						onClick: this.onHighlightCommentsToggle,
						label: s.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: s.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), h && i.a.createElement(Y, null), e && i.a.createElement(b.a, {
						headerText: s.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: s.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: s.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: s.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}), i.a.createElement(F, null))
				}
			}
			const le = Object(V.u)();
			t.b = le(ae(Object(z.c)(ce)))
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
				mResponsive: "_1K1eSlv_SCeNBQRglVFRHo"
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.input("Input", i.a),
				d = c.a.label("Label", i.a),
				u = c.a.button("Button", i.a),
				m = c.a.div("Wrapper", i.a);
			class p extends r.a.Component {
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
						label: s,
						onClick: a,
						onChange: c,
						type: p = "text",
						value: b
					} = this.props;
					return r.a.createElement(m, {
						className: Object(o.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, r.a.createElement(l, {
						value: b,
						type: p,
						onChange: e => c(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), r.a.createElement(d, null, s), a && r.a.createElement(u, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = a.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...s
				} = e;
				return r.a.createElement(d, l({}, s, {
					className: Object(o.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = a.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				a = n("./src/reddit/models/Image/index.tsx");
			class i extends r.a.Component {
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
						labelClassName: s,
						value: a,
						controlName: i,
						isUploading: c,
						tabIndex: l
					} = this.props;
					return c ? r.a.createElement(o.a, {
						className: e
					}) : r.a.createElement(o.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: s,
						multiple: !1,
						tabIndex: l,
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				a = n.n(o),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", a.a),
				l = i.a.div("Content", a.a),
				d = i.a.div("Sidebar", a.a);
			t.a = e => r.a.createElement(c, {
				className: e.className
			}, r.a.createElement(l, null, e.children), r.a.createElement(d, null, e.sidebar))
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
			var s = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", r.a)
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
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
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
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
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
			n.d(t, "m", (function() {
				return z
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "n", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ae
			})), n.d(t, "i", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "f", (function() {
				return he
			})), n.d(t, "a", (function() {
				return fe
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "h", (function() {
				return _e
			})), n.d(t, "c", (function() {
				return ye
			})), n.d(t, "e", (function() {
				return xe
			})), n.d(t, "g", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
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

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = g.a.span("Wrapper", y.a),
				E = g.a.select("Inner", y.a),
				j = g.a.wrapped(v.b, "Caret", y.a);

			function w({
				className: e,
				innerClassName: t,
				...n
			}) {
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(C, {
					className: e
				}, r.a.createElement(E, x({
					className: t
				}, n)), r.a.createElement(j, x({
					isSubreddit: !0
				}, s)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				P = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				N = n("./node_modules/lodash/range.js"),
				A = n.n(N),
				T = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				L = n("./src/reddit/models/Flair/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				F = n.n(U);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(d.a)(b.a),
				G = g.a.wrapped(I.a, "Circle", F.a),
				W = g.a.h3("Label", F.a),
				z = g.a.wrapped(O.c, "Subtext", F.a),
				q = g.a.wrapped(m.a, "HoverTooltip", F.a),
				K = g.a.div("ControlContainer", F.a),
				J = g.a.div("TextContainer", F.a),
				Y = g.a.div("ActionContainer", F.a),
				V = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: s,
					isNightModeOn: o,
					disabled: a,
					indent: i,
					last: l,
					...d
				}) => r.a.createElement("div", D({}, d, {
					className: Object(c.a)(F.a.Wrapper, e, {
						[F.a.mColumn]: "column" === t,
						[F.a.mDisabled]: !!a,
						[F.a.mIndent]: !!i,
						[F.a.mLast]: !!l,
						[F.a.isCreateCommunity]: !!n,
						[F.a.inModal]: !!s,
						[F.a.isNightModeOn]: !!o
					})
				})),
				Q = g.a.a("Link", F.a),
				Z = g.a.wrapped(Q, "SubtextLink", F.a),
				X = g.a.wrapped(P.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(S.a, "ArrowRight", F.a),
				te = e => r.a.createElement(V, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(J, {
					className: e.textContainerClassName
				}, r.a.createElement(W, null, e.label, e.isRequired && r.a.createElement(G, null)), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				se = g.a.wrapped(ne, "SpoilerFlair", F.a),
				re = g.a.wrapped(ne, "NSFWFlair", F.a),
				oe = e => {
					switch (e.flair) {
						case L.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case L.f.Spoiler:
							return r.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return r.a.createElement(V, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(J, null, r.a.createElement(M.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(W, null, e.label))), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(K, null, e.tooltip && r.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(k.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = g.a.input("RangeSliderInput", F.a),
				ce = g.a.div("RangeSlider", F.a),
				le = g.a.div("Ticks", F.a),
				de = g.a.div("TickText", F.a),
				ue = g.a.div("PreSubText", F.a),
				me = Object(i.c)({
					isNightModeOn: R.W
				}),
				pe = Object(o.b)(me)(e => r.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, r.a.createElement(J, {
					style: {
						flex: 5
					}
				}, !e.inModal && r.a.createElement(M.a, null, r.a.createElement(W, null, e.label)), r.a.createElement(z, null, " ", r.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(Y, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(ce, null, r.a.createElement(ie, {
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
					onInput: e.onChange
				}), r.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => r.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(M.a, null, r.a.createElement(W, null, e.label)), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(K, null, r.a.createElement(T.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => r.a.createElement(V, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(X, null)), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				fe = e => r.a.createElement(V, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(J, null, r.a.createElement($, {
					onClick: e.onClick
				}, e.label), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement($, {
					onClick: e.onClick
				}, r.a.createElement(ee, null)))),
				ge = Object(i.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				ve = Object(o.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(W, null, e.label), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, (e => r.a.createElement("div", {
					className: F.a.DropdownWrapper,
					onClick: e.openDropdown
				}, r.a.createElement("span", {
					className: F.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(v.b, {
					className: F.a.DropdownTriangle
				}), r.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(h.b, {
					className: F.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && r.a.createElement("div", {
					className: F.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				_e = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: o,
					...a
				}) => {
					const i = Object(s.useCallback)(e => o(e.target.value), [o]),
						{
							items: c
						} = a;
					return r.a.createElement(V, {
						disabled: e
					}, r.a.createElement(J, null, r.a.createElement("label", {
						htmlFor: a.id
					}, r.a.createElement(W, {
						className: a.labelClassname
					}, a.label)), r.a.createElement(z, null, a.subtext)), r.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), r.a.createElement(V, {
						last: t,
						indent: !0,
						disabled: e
					}, r.a.createElement(w, {
						id: a.id,
						className: "redditStyle",
						disabled: e || a.inputDisabled,
						onChange: i,
						value: a.selected
					}, c.map(({
						value: e,
						displayName: t
					}) => r.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ye = e => r.a.createElement(V, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(J, null, r.a.createElement(W, null, e.label), r.a.createElement(z, null, e.subtext)), r.a.createElement(Y, null, e.children)),
				xe = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && r.a.createElement("span", {
					className: F.a.tag
				}, "r/"), r.a.createElement(f.a, {
					className: e.isCreateCommunity ? F.a.input : void 0,
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ce = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(p.i, {
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
				}), r.a.createElement("div", {
					className: F.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: F.a.ActionLinkContainer
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				c = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.wrapped(d.a, "ImageUploadIcon", m.a), h = a.a.div("ImageIconRow", m.a), f = a.a.div("ImageUploadText", m.a), g = a.a.wrapped(i.a, "FileDrop", m.a), v = a.a.div("ContainerUploading", m.a), _ = e => r.a.createElement(v, {
				className: e.className
			}, r.a.createElement(h, null, r.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), y = a.a.label("Label", m.a);
			t.b = e => r.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(y, {
					className: Object(o.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, r.a.createElement(h, null, e.icon || r.a.createElement(b, null)), r.a.createElement(f, null, e.label), r.a.createElement(c.a, {
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
				return c
			})), n.d(t, "o", (function() {
				return l
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
				return x
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(r);
			const a = s.a.section("FormPage", o.a),
				i = s.a.h1("HomePageTitle", o.a),
				c = s.a.button("HomePageBreadcrumb", o.a),
				l = s.a.div("HomePageGroup", o.a),
				d = s.a.h1("FormPageTitle", o.a),
				u = s.a.div("FormPageSection", o.a),
				m = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				b = s.a.div("FormElement", o.a),
				h = s.a.div("FormGroupDescription", o.a),
				f = s.a.div("FormItem", o.a),
				g = s.a.h3("FormElementTitle", o.a),
				v = s.a.div("FormElementDescription", o.a),
				_ = s.a.div("FormElementError", o.a),
				y = s.a.div("FormElementSubGroup", o.a),
				x = s.a.li("FormListItem", o.a)
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = s.a.wrapped(r.a, "ModalInput", d.a),
				m = s.a.input("Input", d.a),
				p = s.a.wrapped(c.a, "RadioOn", d.a),
				b = s.a.wrapped(i.a, "RadioOff", d.a),
				h = s.a.wrapped(o.a, "Checkbox", d.a),
				f = s.a.wrapped(a.a, "CheckboxSelected", d.a),
				g = s.a.textarea("Textarea", d.a),
				v = s.a.label("StyledLabel", d.a),
				_ = s.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.b.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...s
				}) => o.a.createElement(a.q, u({}, s, {
					priority: m(a.b.Primary, e, t),
					className: Object(d.a)(s.className, l.a.BaseButton),
					size: n ? a.c.S : a.c.M
				})),
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					priority: n,
					small: s,
					...r
				}) => o.a.createElement(a.q, u({}, r, {
					priority: m(a.b.Secondary, t, n),
					className: Object(d.a)(r.className, l.a.BaseButton),
					size: s ? a.c.S : a.c.M,
					text: b(e)
				}));
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: r = !1,
						isFullWidth: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: a
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, c, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
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
				return s
			})), n.d(t, "a", (function() {
				return C
			}));
			var s, r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(s || (s = {}));
			const v = d.a.wrapped(b.a, "Gear", f.a),
				_ = d.a.h3("Title", f.a),
				y = d.a.div("TabNavContainer", f.a),
				x = d.a.div("Tabs", f.a),
				C = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...s
				}) => i.a.createElement(p.a, g({}, s, {
					"aria-selected": e,
					className: Object(c.a)(s.className, {
						[f.a.mIsActive]: e,
						[f.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", f.a),
				E = e => {
					switch (e) {
						case s.GEAR:
							return i.a.createElement(v, null);
						default:
							return null
					}
				},
				j = () => window.pageYOffset || window.scrollY,
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
			class O extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? j() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : j() >= w && this.setState({
							sticky: !0
						})
					}, l.I), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					} = this.props, s = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return i.a.createElement(y, {
						className: Object(c.a)(s, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(_, {
						className: Object(c.a)(s, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), i.a.createElement(x, {
						className: Object(c.a)(s, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? k : void 0
					}, this.props.children))
				}
			}
			t.c = O
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
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(d);
			const m = a.a.span("UserIconContainer", u.a),
				p = a.a.wrapped(c.a, "UserIcon", u.a),
				b = a.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => o.a.createElement(b, {
				className: e.className,
				to: `${s.a.redditUrl}/user/${e.username}`
			}, o.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, o.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, o.a.createElement(p, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const l = o.a.div("WidgetBackground", c.a),
				d = o.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: a.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.U.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.U.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.U.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.U.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.U.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.U.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.U.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.cc.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.cc.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.cc.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.cc.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.cc.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.cc.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(d.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(g, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
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
				return k
			})), n.d(t, "c", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(r),
				a = n("./node_modules/raf/index.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/selectors/activeModalId.ts"),
				h = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				_ = n.n(v);
			var y = Object(h.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: _.a.wrapper
					}, l.a.createElement(g.a, {
						className: _.a.titleRow
					}, n), l.a.createElement("div", {
						className: _.a.detailsContainer
					}, t), l.a.createElement(g.a, {
						className: _.a.buttonRow
					}, l.a.createElement(f.i, {
						className: _.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = n("./src/reddit/controls/ErrorText/index.m.less"),
				C = n.n(x);
			const E = Object(u.c)({
				activeModalId: b.a
			});
			class j extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`
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
						activeModalId: t,
						className: n,
						errorModalBody: r,
						errorModalTitle: o = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(m.a)(C.a.wrapper, n)
					}, l.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const w = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				k = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: o = []
					} = e, a = o.length ? o : r ? [r] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(w, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(k, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				u = r()(Object(i.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
						inputRef: s,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(p, m({
						innerRef: s
					}, l)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class _ extends r.a.Component {
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
						placeholder: s,
						errors: o = []
					} = this.props;
					return e.map((e, a) => r.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!o[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, r.a.createElement(l.b, {
						className: u.a.trash
					})), !!o[a] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, o[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !i;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, o = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!o || e.multiple) && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
				a = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me`,
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
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me`,
					method: "get"
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/stripe-sources/${t}`,
					method: "delete"
				})
			}

			function l(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-sources/${t}`,
					method: "delete"
				})
			}
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
				return Object(a.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
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
				return Object(a.a)(Object(r.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(c.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
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
					endpoint: `${s.a.metaUrl}/orders`,
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
			var s = n("./node_modules/lodash/merge.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const s = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(e, t) {
						return Object(l.a)(e, {
							method: "get",
							endpoint: `${o.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(a.c)(e, t, n),
					[b, h, f, g] = await Promise.all([d, u, m, p]);
				if (b.ok ? s.collections = b.body : s.errors.collections = b.error, h.ok) {
					const e = h.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return f.ok ? s.products = f.body : s.errors.products = f.error, g.ok ? (r()(s.badges, g.body.badges), s.userOwnedBadges = g.body.userOwnedBadges) : s.errors.userBadges = g.error, s
			}
			const u = (e, t) => Object(l.a)(e, {
				endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`,
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
				return x
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return S
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n.n(s),
				o = n("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				a = n("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = n("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				l = n("./src/redditGQL/operations/CreateEconOrder.json"),
				d = n("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = n("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = n("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				h = n("./src/redditGQL/operations/UserSavedStripeCards.json"),
				f = n("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, n, s, o) => {
				const {
					premium: a,
					...i
				} = o, c = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], d = new r.a(c.price).multipliedBy(s).toFixed();
				return Object(f.a)(e, {
					...l,
					variables: {
						input: {
							nonce: t,
							productId: n.id,
							productVersion: n.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: d,
							productsCount: s.toString(),
							...i
						}
					}
				})
			};
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const _ = (e, t, n, s) => Object(f.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: n,
						token: s
					}
				}),
				y = (e, t, n, s) => Object(f.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: s
					}
				}),
				x = (e, t, n, s) => Object(f.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						cardId: s
					}
				}),
				C = (e, t, n, s, r) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: s,
						cancelUrl: r
					}
				}),
				E = (e, t, n, s) => Object(f.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: n,
						token: s
					}
				}),
				j = (e, t, n, s) => Object(f.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: s
					}
				}),
				w = (e, t, n, s, r) => Object(f.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: s,
						saveCard: r
					}
				}),
				k = (e, t) => Object(f.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				O = e => Object(f.a)(e, {
					...h,
					variables: {}
				}),
				S = (e, t) => Object(f.a)(e, {
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
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: r.hb.GET
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = n.n(r);
			t.a = Object(s.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = () => new BroadcastChannel("external_account"),
				r = e => {
					const t = s();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t || 1);
				return n.dividedToIntegerBy(r).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t || 1);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/location.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "singleCountryList", (function() {
				return r
			})), n.d(t, "allCountryOptions", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = {
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
				r = e => [{
					value: e,
					displayName: s[e]
				}],
				o = Object.keys(s).filter(e => "ZZ" !== e).map(e => ({
					value: e,
					displayName: s[e]
				}))
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(s.subreddit)(t)
				}),
				o = () => r("view"),
				a = () => r("tap"),
				i = () => r("dismiss"),
				c = () => e => ({
					...Object(s.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				l = () => e => ({
					...Object(s.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				u = () => e => ({
					...Object(s.defaults)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(s.subredditById)(t, e)
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
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
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Event.ts");
			const a = e => ({
					...s.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(r.a)({
						...a(e),
						action: o.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(r.a)({
						...a(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(r.a)({
						...a(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(r.a)({
						...a(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				m = (e, t, n) => ({
					...s.defaults(e),
					actionInfo: s.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(r.a)({
						...m(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(r.a)({
						...m(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(r.a)({
						...m(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				f = e => ({
					...s.defaults(e),
					noun: "push_notification"
				}),
				g = e => ({
					...f(e),
					notification: s.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => n => ({
					...s.defaults(n),
					action: i(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => n => ({
					...s.defaults(n),
					action: i(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				y = e => t => ({
					...s.defaults(t),
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
				return c
			})), n.d(t, "j", (function() {
				return l
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
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => ({
					...s.defaults(e),
					correlationId: Object(a.c)(a.a.PremiumSettings),
					screen: s.screen(e)
				}),
				c = () => e => ({
					...i(e),
					source: "user_settings",
					action: "click",
					noun: "premium"
				}),
				l = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "view",
					noun: "page",
					goldPurchase: {
						type: Object(r.s)(e) ? o.GoldPurchaseType.Cancel : o.GoldPurchaseType.GetPremium
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
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, r = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(s || (s = {}));
			const o = e => t => ({
					source: "settings",
					action: "connect",
					noun: "sso",
					actionInfo: {
						...r.actionInfo(t),
						type: e
					}
				}),
				a = e => t => ({
					source: "settings",
					action: "disconnect",
					noun: "sso",
					actionInfo: {
						...r.actionInfo(t),
						type: e
					}
				}),
				i = e => ({
					source: "popup",
					action: "view",
					noun: "create_password"
				}),
				c = e => t => ({
					source: "popup",
					action: "click",
					noun: "create_password",
					popup: {
						buttonText: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, r.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, r.a.createElement("path", {
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
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), r.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 36 36",
				version: "1.1"
			}, r.a.createElement("circle", {
				cx: "18",
				cy: "18",
				fill: "#fff",
				r: "17.5",
				stroke: "inherit"
			}), r.a.createElement("path", {
				clipRule: "evenodd",
				d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
				fill: "inherit",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), r.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), r.a.createElement("defs", null, r.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, r.a.createElement("stop", {
				stopColor: "#EC0623"
			}), r.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
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
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
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
			var s, r, o, a;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./node_modules/uuid/v4.js"),
				d = n.n(l),
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
				x = n("./src/reddit/actions/users.ts"),
				C = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				E = n("./src/reddit/components/ConfirmModal/index.tsx"),
				j = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				w = n("./src/reddit/actions/accountGender/index.ts"),
				k = n("./src/reddit/actions/meta.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/featureFlags/index.ts"),
				P = n("./src/reddit/helpers/trackers/profileSettings.ts");
			var N = n("./src/reddit/selectors/sso.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				T = n("./src/lib/validateEmail/index.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				B = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				U = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				F = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/models/User/index.ts"),
				H = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				G = n.n(H);
			const W = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(A.j)(e);
						return t && Object(D.e)(t) || ""
					}
				}),
				z = Object(a.b)(W, e => ({
					changeEmail: t => e(Object(x.u)(t)),
					sendResetEmail: t => e(Object(x.x)(t)),
					showErrorToast: t => e(Object(M.f)({
						duration: M.a,
						kind: F.b.Error,
						text: t
					}))
				})),
				q = e => e ? o.a.createElement(B.a, {
					className: Object(u.a)(G.a.image, G.a.success)
				}) : o.a.createElement(U.a, {
					className: Object(u.a)(G.a.image, G.a.error)
				}),
				K = e => e ? s.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : s.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				J = e => e ? s.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : s.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				Y = e => e ? s.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : s.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				V = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? o.a.createElement(R.a, {
						className: Object(u.a)(G.a.inputIcon, G.a.error)
					}) : o.a.createElement(B.a, {
						className: Object(u.a)(G.a.inputIcon, G.a.success)
					}) : null
				};
			class Q extends o.a.Component {
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
							enteredEmail: r
						} = this.state, o = Object(T.a)(r, !1), a = o ? "" : s.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: a,
							inputChecked: !0
						}), o && (t ? n({
							curEmail: r,
							name: this.props.username
						}) : e({
							newEmail: r
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
					} = this.state, r = !this.props.email && !e, a = r && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return o.a.createElement("div", {
						className: G.a.container
					}, o.a.createElement("h3", {
						className: G.a.header
					}, s.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), o.a.createElement("div", {
						className: G.a.status
					}, q(e), o.a.createElement("h3", {
						className: G.a.statusText
					}, J(e))), o.a.createElement("p", {
						className: G.a.description
					}, K(e)), o.a.createElement("div", {
						className: G.a.actionContainer
					}, o.a.createElement("div", {
						className: G.a.emailContainer
					}, r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(L.a, {
						className: Object(u.a)(G.a.input, G.a[a]),
						label: s.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), V(this.state), o.a.createElement("h6", {
						className: G.a.errorMsg
					}, n)) : o.a.createElement("p", {
						className: G.a.emailText
					}, Y(e), o.a.createElement("span", {
						className: G.a.emailAddress
					}, t))), o.a.createElement(S.i, {
						className: G.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? s.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : s.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var Z = z(Q),
				X = n("./src/higherOrderComponents/asModal/index.tsx"),
				$ = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ee = n("./src/reddit/controls/FormFields/index.tsx"),
				te = n("./src/reddit/controls/TextButton/index.tsx"),
				ne = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				se = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				re = n.n(se);
			const oe = 50;
			class ae extends o.a.Component {
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
						return e.length > 0 && e.length <= oe
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
						isPending: r
					} = this.state;
					return o.a.createElement("section", {
						className: Object(u.a)(e, re.a.container)
					}, o.a.createElement($.i, null, o.a.createElement(ne.a, null, o.a.createElement($.q, null, s.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), o.a.createElement(te.a, {
						onClick: t,
						disabled: r
					}, o.a.createElement($.b, null)))), o.a.createElement($.l, null, o.a.createElement(ee.b, {
						placeholder: s.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: re.a.customGenderInput,
						disabled: r,
						maxLength: oe,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), o.a.createElement($.g, null, o.a.createElement($.a, {
						onClick: t,
						disabled: r
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement($.r, {
						disabled: !this.inputsAreValid() || r,
						onClick: this.handleSubmit
					}, s.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var ie = Object(X.a)(ae),
				ce = n("./src/higherOrderComponents/asTooltip.tsx"),
				le = n("./src/reddit/actions/tooltip.ts"),
				de = n("./src/reddit/controls/Dropdown/index.tsx"),
				ue = n("./src/reddit/controls/Dropdown/Row.tsx"),
				me = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				pe = n("./src/reddit/selectors/tooltip.ts"),
				be = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				he = n.n(be);
			const fe = Object(ce.a)(de.a),
				ge = Object(c.c)({
					isDropdownOpen: (e, t) => Object(pe.b)(t.dropdownId)(e)
				});
			class ve extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => o.a.createElement(ue.b, {
						className: he.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => o.a.createElement(ue.b, {
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
						renderLabel: s = this.renderLabel,
						renderItem: r = this.renderDropdownItem,
						selectedKey: a
					} = this.props, i = n && {
						displayLabel: n,
						key: n
					}, c = t.find(e => e.key === a) || i || t[0];
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(he.a.container, e.className),
						onClick: this.onToggleDropdown
					}, o.a.createElement("div", {
						className: he.a.labelWrapper
					}, s(c), o.a.createElement("span", null, o.a.createElement(me.b, null))), o.a.createElement(fe, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => r(e, a === e.key))))
				}
			}
			var _e, ye = Object(a.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(le.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(ve),
				xe = n("./src/reddit/components/Settings/shared/Widgets.tsx");
			! function(e) {
				e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
			}(_e || (_e = {}));
			var Ce = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				Ee = n.n(Ce);
			const je = () => [{
				key: _e.FEMALE,
				displayText: s.fbt._("Female", null, {
					hk: "G3G7q"
				})
			}, {
				key: _e.MALE,
				displayText: s.fbt._("Male", null, {
					hk: "2xBOfQ"
				})
			}, {
				key: _e.NON_BINARY,
				displayText: s.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: _e.OPT_OUT,
				displayText: s.fbt._("Prefer not to say", null, {
					hk: "48BJY1"
				})
			}, {
				key: _e.USER_DEFINED,
				displayLabel: s.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: s.fbt._("I refer to myself as...", null, {
					hk: "3RVNst"
				})
			}];
			class we extends o.a.Component {
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
						const s = {
							definedGender: null,
							genderCategory: n
						};
						this.setState({
							pending: !0,
							tmpSelected: s
						}), await t(s), this.setState({
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
						selected: r
					} = this.props, {
						definedGender: a,
						genderCategory: i
					} = {
						...t ? n : r
					};
					return o.a.createElement(xe.c, {
						label: s.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: s.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, o.a.createElement("div", {
						className: Ee.a.wrapper
					}, o.a.createElement(ye, {
						dropdownId: "gender-dropdown-id",
						items: je(),
						onSelect: this.onSelect,
						placeholder: s.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && o.a.createElement(ie, {
						onCloseModal: this.closeCustomGenderModal,
						definedGender: a || "",
						onConfirmModal: this.onConfirmModal,
						onOverlayClick: this.closeCustomGenderModal,
						withOverlay: !0
					}))
				}
			}
			var ke = n("./src/reddit/components/Settings/modalIds.ts"),
				Oe = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Se = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				Ie = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const Pe = Object.freeze({
					[Se.GERMAN_LOCALE]: Object.freeze({
						bcp47: Se.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.GERMAN_LOCALE),
						rtl: !1
					}),
					[Se.DEFAULT_LOCALE]: Object.freeze({
						bcp47: Se.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.DEFAULT_LOCALE),
						rtl: !1
					}),
					[Se.SPANISH_LOCALE]: Object.freeze({
						bcp47: Se.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.SPANISH_LOCALE),
						rtl: !1
					}),
					[Se.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: Se.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(j.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[Se.ITALIAN_LOCALE]: Object.freeze({
						bcp47: Se.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.ITALIAN_LOCALE),
						rtl: !1
					}),
					[Se.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: Se.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[Se.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: Se.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				Ne = {},
				Ae = Object.freeze({
					[Se.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: Se.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[Se.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: Se.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[Se.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: Se.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Se.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				Te = Object(c.a)(A.G, Ie.b, (e, t) => e || t ? {
					...Pe,
					...Ne,
					...Ae
				} : Pe);
			var Me = n("./src/reddit/helpers/location.ts"),
				Le = n("./src/reddit/constants/experiments.ts"),
				Be = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Re = Object(c.a)(e => Object(Be.c)(e, {
				experimentEligibilitySelector: A.J,
				experimentName: Le.F
			}), e => e === Le.M.Enabled);
			var Ue = n("./src/reddit/selectors/meta.ts"),
				Fe = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				De = n.n(Fe);
			const He = Object(c.c)({
					gender: e => {
						var t, n;
						return null === (n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.account) || void 0 === n ? void 0 : n.gender
					},
					hasVerifiedEmail: A.z,
					isFPR: A.H,
					language: A.U,
					shouldShowCreatePasswordModal: N.d,
					showLanguageSection: I.d.langSelect,
					availableLocales: Te,
					locale: Ue.i,
					shouldShowCountrySection: Re,
					country: A.f
				}),
				Ge = Object(a.b)(He, e => ({
					changeAccountGender: t => e(Object(w.a)(t)),
					changeLanguage: t => e(Object(k.g)(t)),
					openChangeEmailModal: () => e(Object(y.i)(ke.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(y.h)(ke.l)),
					resendEmail: () => e(Object(x.w)())
				})),
				We = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : o.a.createElement(o.a.Fragment, null, s.fbt._("{email} not verified!", [s.fbt._param("email", e)], {
					hk: "3PanQN"
				}), o.a.createElement(S.g, {
					className: De.a.tertiaryBtn,
					onClick: n
				}, s.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : s.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var ze = Ge(({
					changeAccountGender: e,
					changeLanguage: t,
					gender: a,
					isFPR: i,
					language: c,
					openChangeEmailModal: l,
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
					const [y, x] = Object(r.useState)(!1), C = Object(r.useCallback)(async e => {
						x(!0), await t(e), x(!1)
					}, [t]), E = Object(O.b)(), w = Object(r.useCallback)(async ({
						definedGender: t,
						genderCategory: n
					}) => {
						E(Object(P.a)()), await e({
							definedGender: t,
							genderCategory: n
						})
					}, [e, E]), [k, S] = Object(r.useState)(h), [I, N] = Object(r.useState)(Object(Me.singleCountryList)(g));
					Object(r.useEffect)(() => {
						"" !== c && f in h || S(e => ({
							...e,
							[c]: Object.freeze({
								bcp47: c,
								displayName: c,
								englishName: c,
								fbtLocale: Object(j.isoLocaleToFbtLocale)(c),
								rtl: !1
							})
						}))
					}, [h, c, f]), Object(r.useEffect)(() => {
						(async () => {
							const {
								allCountryOptions: e
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/location.ts"));
							N(e)
						})()
					}, []);
					const A = Object(r.useMemo)(() => (e => Object.entries(e).map(([e, t]) => ({
						value: e,
						displayName: t.displayName
					})))(k), [k]);
					return i ? o.a.createElement(Z, {
						email: _.email
					}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, s.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), o.a.createElement(xe.b, {
						actionText: s.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: s.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							u ? d() : l()
						},
						subtext: We(_)
					}), !u && o.a.createElement(xe.b, {
						actionText: s.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: s.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						onClick: b,
						subtext: s.fbt._("Password must be at least 8 characters long", null, {
							hk: "3X8DBF"
						})
					}), o.a.createElement(we, {
						onChange: w,
						selected: a
					}), m ? o.a.createElement(xe.h, {
						inputDisabled: y,
						id: "lang",
						items: A,
						labelClassname: De.a.languageSelector,
						label: s.fbt._("Display language {betaLabel}", [s.fbt._param("betaLabel", s.fbt._("{=(beta)}", [s.fbt._param("=(beta)", o.a.createElement("span", {
							className: De.a.betaLabel
						}, s.fbt._("(beta)", null, {
							hk: "1vhAp5"
						})))], {
							hk: "2gBJnB"
						}))], {
							hk: "46Sw4H"
						}),
						onChange: C,
						selected: f,
						subtext: s.fbt._("Select the language you'd like to experience the Reddit interface in. Note that this won't change the language of user-generated content and that this feature is still in development so translations and UI are still under review.", null, {
							hk: "2d65FQ"
						})
					}) : null, p ? o.a.createElement("div", {
						className: De.a.countryDropdown
					}, o.a.createElement(xe.h, {
						id: "country",
						items: I,
						label: s.fbt._("Country", null, {
							hk: "1GB5Ra"
						}),
						onChange: e => v(e, "countryCode"),
						selected: g,
						subtext: s.fbt._("This is your primary location. {accountPrefs: language link}", [s.fbt._param("accountPrefs: language link", o.a.createElement("a", {
							className: De.a.Link,
							href: "https://www.reddit.com/api/report_redirect?reason_code=COUNTRY_SETTING"
						}, s.fbt._("Learn more", null, {
							hk: "2ygM43"
						})))], {
							hk: "bLreC"
						})
					})) : null)
				}),
				qe = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				Ke = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				Je = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				Ye = n("./src/reddit/constants/accountManager.ts"),
				Ve = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Qe = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ze = n("./src/reddit/selectors/accountManager.ts"),
				Xe = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				et = n("./src/config.ts"),
				tt = n("./src/reddit/helpers/trackers/sso.ts"),
				nt = n("./src/reddit/hooks/useTracking.ts"),
				st = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				rt = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				ot = n.n(rt),
				at = n("./src/lib/lessComponent.tsx");
			const it = at.a.wrapped(xe.c, "ConnectApple", ot.a),
				ct = at.a.wrapped(S.i, "ConnectAppleButton", ot.a),
				lt = at.a.div("ConnectionInfo", ot.a),
				dt = at.a.wrapped(S.m, "DisconnectButton", ot.a),
				ut = at.a.wrapped(st.a, "AppleIcon", ot.a),
				mt = at.a.span("TextAndIconWrapper", ot.a);

			function pt(e) {
				return e.issuerId ? (() => o.a.createElement(xe.c, {
					label: s.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, o.a.createElement(lt, null, o.a.createElement(dt, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[ot.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(it, {
						className: t,
						label: s.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, o.a.createElement(ct, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(mt, null, o.a.createElement(ut, null), s.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const bt = Object(c.c)({
				issuerId: N.a,
				shouldShowCreatePasswordModal: N.d
			});
			var ht = Object(a.b)(bt, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(y.h)(ke.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(y.h)(ke.j)),
					openLinkAppleSSOModal: () => e(Object(_.g)()),
					openUnlinkAppleSSOModal: () => e(Object(_.l)())
				}))(e => {
					const t = Object(nt.a)();
					return o.a.createElement(pt, {
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
			const gt = at.a.wrapped(xe.c, "ConnectGoogle", ot.a),
				vt = at.a.wrapped(S.i, "ConnectGoogleButton", ot.a),
				_t = at.a.div("ConnectionInfo", ot.a),
				yt = at.a.wrapped(S.m, "DisconnectButton", ot.a),
				xt = at.a.wrapped(ft.a, "GoogleIcon", ot.a),
				Ct = at.a.span("TextAndIconWrapper", ot.a);

			function Et(e) {
				return e.hasGoogleIdentity ? (() => o.a.createElement(xe.c, {
					label: s.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, o.a.createElement(_t, null, o.a.createElement(yt, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[ot.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(gt, {
						className: t,
						label: s.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, o.a.createElement(vt, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(Ct, null, o.a.createElement(xt, null), s.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const jt = Object(c.c)({
				hasGoogleIdentity: N.b,
				shouldShowCreatePasswordModal: N.d
			});
			var wt = Object(a.b)(jt, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(ke.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(y.h)(ke.n)),
					openLinkGoogleSSOModal: () => e(Object(_.h)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.m)())
				}))(e => {
					const t = Object(nt.a)();
					return o.a.createElement(Et, {
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
				Ot = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				St = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				It = n("./src/reddit/models/ExternalAccount/index.ts");
			const Pt = at.a.wrapped(St.a, "TwitterIcon", ot.a),
				Nt = ({
					isFilled: e,
					...t
				}) => o.a.createElement(Pt, t),
				At = at.a.wrapped(Ot.a, "LoadingIcon", ot.a),
				Tt = ({
					isFilled: e,
					...t
				}) => o.a.createElement(At, t),
				Mt = at.a.wrapped(xe.c, "ConnectTwitter", ot.a),
				Lt = at.a.wrapped(S.m, "DisconnectButton", ot.a),
				Bt = at.a.span("Username", ot.a),
				Rt = at.a.div("ConnectionInfo", ot.a);
			var Ut = n("./src/reddit/selectors/externalAccount.ts");
			const Ft = Object(c.c)({
					twitterAccount: Ut.a,
					isTwitterConnectionPending: Ut.b
				}),
				Dt = Object(a.b)(Ft, e => ({
					onConnectAccount: t => {
						e(kt.m(t)), t === It.a.Twitter && e((e, t) => P.c(t()))
					},
					onDisconnectAccount: t => {
						e(kt.n(t)), t === It.a.Twitter && e((e, t) => P.e(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => P.f(n(), t))
				}));
			var Ht = Object(Ve.u)()(Dt((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(It.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(It.a.Twitter)
					};
				return o.a.createElement(r.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return o.a.createElement(xe.c, {
						label: s.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: s.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, o.a.createElement(Rt, null, o.a.createElement("div", null, o.a.createElement(Bt, null, "@", t.username)), o.a.createElement(Lt, {
						onClick: n
					}, "(", s.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: r
					} = e, a = Object(u.a)({
						[ot.a["m-responsive"]]: n
					}), i = s.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return o.a.createElement(Mt, {
						className: a,
						label: s.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: s.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, o.a.createElement(S.q, {
						className: ot.a.ConnectTwitterButton,
						Icon: r ? Tt : Nt,
						text: r ? null : i,
						onClick: t
					}))
				})(), o.a.createElement(xe.o, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: s.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: s.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			})));
			var Gt = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return o.a.createElement(r.Fragment, null, o.a.createElement(Oe.a, {
					id: "connected-accounts"
				}, s.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), o.a.createElement(Ht, e), (() => {
					if (e.shouldRenderSSOAccounts) return o.a.createElement(r.Fragment, null, o.a.createElement(ht, {
						isResponsiveSettingsEnabled: t
					}), o.a.createElement(wt, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function Wt() {
				return (Wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zt = Object(c.c)({
				isEmployee: A.G
			});
			var qt = Object(a.b)(zt)(e => {
					const t = !e.isEmployee;
					return o.a.createElement(Gt, Wt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				Kt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Jt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				Yt = n.n(Jt);
			const Vt = at.a.wrapped($e.b, "Trash", Yt.a),
				Qt = at.a.wrapped(Oe.a, "BetaTestsHeading", Yt.a),
				Zt = at.a.wrapped(xe.o, "InBetaToggle", Yt.a),
				Xt = at.a.wrapped(xe.o, "InRedesignBetaToggle", Yt.a),
				$t = at.a.button("DeactivateButton", Yt.a),
				en = at.a.div("DeactivateWrapper", Yt.a),
				tn = Object(c.c)({
					changePasswordHref: (e, t) => Object(Ze.c)(e, {
						pageLayer: t.pageLayer,
						path: Ye.c.ChangePassword
					}),
					deactivateModalOpen: Object(Xe.b)("deactivate_modal_id"),
					email: A.m,
					hasGoogleIdentity: N.b,
					inRedesignBeta: A.D,
					optoutModalOpen: Object(Xe.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: N.d,
					user: A.j
				}),
				nn = Object(a.b)(tn, (e, t) => ({
					deactivate: t => {
						e(Object(x.v)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(ke.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: et.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${et.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(x.w)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class sn extends o.a.Component {
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
						}, Object(Qe.a)()))
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
						inRedesignBeta: r,
						isResponsiveSettingsEnabled: a,
						optOut: i,
						optoutModalOpen: c,
						pageLayer: l,
						prefs: d,
						shouldShowCreatePasswordModal: m,
						toggleDeactivateModal: p,
						toggleOptoutModal: b,
						update: h,
						user: f
					} = this.props, g = Object(u.a)({
						[Yt.a["m-responsive"]]: a
					}), v = Object(u.a)({
						[Yt.a.ResponsiveOverlay]: a
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Je.a, null, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: a
					}, s.fbt._("Account settings", null, {
						hk: "2faClM"
					})), o.a.createElement(ze, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow,
						update: h
					}), o.a.createElement(qt, this.props), o.a.createElement(Qt, {
						className: g
					}, s.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), o.a.createElement(Zt, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: s.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: s.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), o.a.createElement(Xt, {
						className: g,
						on: !r,
						onClick: b,
						label: s.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: s.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), o.a.createElement(Oe.a, null, s.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), o.a.createElement(en, null, o.a.createElement($t, {
						onClick: this.deactivateAccount
					}, o.a.createElement(Vt, null), s.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && o.a.createElement(E.a, {
						headerText: s.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: s.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: s.fbt._("opt out", null, {
							hk: "2Abiox"
						}),
						onAccept: i,
						onCancel: b,
						onOverlayClick: b,
						overlayClassName: v,
						withOverlay: !0
					}), e && o.a.createElement(Kt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && o.a.createElement(qe.a, {
						isResponsiveSettingsEnabled: a
					})), n && o.a.createElement(C.a, {
						className: Yt.a.googleDisconnectIFrame,
						pageLayer: l,
						path: Ye.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var rn = Object(Ve.u)()(nn(sn)),
				on = n("./src/reddit/reducers/user/prefs/index.ts"),
				an = n("./src/reddit/actions/chat/constants.ts"),
				cn = n("./src/reddit/actions/chat/userSettings.ts"),
				ln = n("./src/reddit/actions/userBlocks.ts"),
				dn = n("./src/reddit/actions/userWhitelist.ts"),
				un = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				mn = n("./src/reddit/components/Hovercards/helpers.ts"),
				pn = n("./src/reddit/components/HumanDate/index.tsx"),
				bn = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				hn = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				fn = n.n(hn);
			const {
				fbt: gn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), vn = at.a.p("Date", fn.a), _n = at.a.wrapped(bn.a, "UserNameAndIcon", fn.a), yn = at.a.button("Button", fn.a), xn = at.a.div("ButtonWrapper", fn.a);
			var Cn = at.a.wrapped(e => o.a.createElement("div", {
					className: e.className
				}, o.a.createElement(_n, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(mn.b)({
						author: e.name,
						tooltipIdPrefix: un.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), o.a.createElement(vn, null, o.a.createElement(pn.d, {
					seconds: e.date / m.Ob
				})), o.a.createElement(xn, null, o.a.createElement(yn, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, gn._("Remove", null, {
					hk: "1rZWA4"
				})))), "Component", fn.a),
				En = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				jn = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				wn = n.n(jn);
			const kn = 5,
				On = at.a.h4("ListHeading", wn.a),
				Sn = at.a.div("ListBox", wn.a),
				In = at.a.div("MoreWrapper", wn.a),
				Pn = at.a.button("MoreButton", wn.a),
				Nn = at.a.wrapped(xe.m, "Subtext", wn.a);
			class An extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === En.a.pending && this.props.api.new === En.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: n,
						api: r,
						add: a,
						padBottom: i,
						remove: c,
						list: l,
						label: d,
						title: m,
						subtext: p
					} = this.props, b = e ? l.length : 5;
					return o.a.createElement("div", {
						className: Object(u.a)(wn.a.container, n, {
							[wn.a.mPadBottom]: !!i
						})
					}, o.a.createElement(On, null, m), void 0 !== p && o.a.createElement(Nn, null, p), o.a.createElement(L.a, {
						buttonText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: r.new === En.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), o.a.createElement(Sn, null, l.slice(0, b).map(e => o.a.createElement(Cn, {
						disabled: r[e.name] === En.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > kn && !e ? o.a.createElement(In, null, o.a.createElement(Pn, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, s.fbt._("Show all", null, {
						hk: "W1Cyk"
					}))) : null))
				}
			}
			var Tn = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Mn = n.n(Tn);
			const Ln = {
					[on.b.Whitelisted]: () => s.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[on.b.Everyone]: () => s.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				Bn = e => {
					const t = Ln[e];
					return t && t()
				},
				Rn = at.a.div("ListsWrapper", Mn.a),
				Un = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Fn = Object(a.b)(Un, (e, t) => ({
					addBlocked: t => e(Object(ln.h)(t)),
					addWhitelisted: t => e(Object(dn.g)(t)),
					removeWhitelisted: t => e(Object(dn.h)(t)),
					removeBlocked: t => e(Object(ln.g)(t)),
					saveChatSettings: t => e(Object(cn.c)(t))
				}))(({
					addWhitelisted: e,
					chatSettings: t,
					prefs: {
						acceptPrivateMessages: n
					},
					removeWhitelisted: r,
					saveChatSettings: a,
					update: i,
					whitelist: c,
					whitelistApi: l
				}) => {
					const d = Object(an.b)(t.invitePolicy),
						u = [an.a.anybody, an.a.account_age_30_days, an.a.nobody],
						m = [Object(an.b)(an.a.anybody), Object(an.b)(an.a.account_age_30_days), Object(an.b)(an.a.nobody)],
						p = Bn(n),
						b = [on.b.Everyone, on.b.Whitelisted],
						h = [Bn(on.b.Everyone), Bn(on.b.Whitelisted)];
					return o.a.createElement(Je.a, null, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: !1
					}, s.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), o.a.createElement(xe.d, {
						label: s.fbt._("Who can send you chat requests", null, {
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
					}), o.a.createElement(xe.d, {
						label: s.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: s.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not approved.", null, {
							hk: "48t4Ee"
						}),
						items: b,
						displayItems: h,
						selected: n,
						displayTitle: p,
						onClick: e => i(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (t.invitePolicy !== an.a.anybody || n === on.b.Whitelisted) && o.a.createElement(Rn, null, o.a.createElement(An, {
						title: s.fbt._("Approved Users", null, {
							hk: "U0YhB"
						}),
						subtext: s.fbt._("Approved users can always send you private messages.", null, {
							hk: "1Wr1CF"
						}),
						label: s.fbt._("Add new user to approved list", null, {
							hk: "TP2Sh"
						}),
						add: e,
						remove: r,
						list: c,
						api: l
					})))
				}),
				Dn = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				Hn = n.n(Dn);

			function Gn(e) {
				return o.a.createElement("header", {
					className: Object(u.a)(Hn.a.container, e.className)
				}, o.a.createElement("div", {
					className: Hn.a.title
				}, s.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), o.a.createElement("div", {
					className: Hn.a.tag
				}, s.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var Wn = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				zn = n("./src/reddit/contexts/ApiContext.tsx"),
				qn = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Kn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Jn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Yn = n("./src/reddit/selectors/economics.ts"),
				Vn = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				Qn = n.n(Vn);
			const {
				fbt: Zn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Xn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(Xn || (Xn = {}));
			class $n extends o.a.Component {
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
					let n = Zn._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === Xn.Connected && (n = Zn._("connect", null, {
						hk: "22jQRU"
					})), t === Xn.Connecting && (n = Zn._("connecting...", null, {
						hk: "3ccNPc"
					})), o.a.createElement("div", {
						className: e
					}, o.a.createElement(Oe.a, null, Zn._("accept tips", null, {
						hk: "1kEl0R"
					})), o.a.createElement(xe.k, {
						direction: "row",
						label: Zn._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: Zn._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, o.a.createElement("div", {
						className: Qn.a.cta
					}, o.a.createElement(S.i, {
						className: Qn.a.button,
						disabled: t !== Xn.Default,
						onClick: this.initiateStripeConnect
					}, n), o.a.createElement("div", {
						className: Qn.a.legal
					}, Zn._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [Zn._param("Previews Terms of Service", o.a.createElement(Wn.a, {
						className: Qn.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), o.a.createElement("div", {
						className: Qn.a.disclaimer
					}, o.a.createElement(Jn.a, {
						className: Qn.a.icon
					}), Zn._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const es = Object(c.c)({
					stripeConnected: Yn.u
				}),
				ts = Object(a.b)(es, e => ({
					onError: t => e(Object(M.f)({
						duration: 5e3,
						kind: F.b.Error,
						text: Object(Kn.a)(t)
					}))
				}));
			var ns = Object(zn.b)(ts($n)),
				ss = n("./src/reddit/components/Settings/Creator/index.m.less"),
				rs = n.n(ss);

			function os(e) {
				return o.a.createElement(Je.a, null, o.a.createElement("div", null, o.a.createElement(Gn, {
					className: rs.a.header
				}), o.a.createElement(ns, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var as = n("./src/lib/listingSort/index.ts"),
				is = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				cs = n("./src/reddit/constants/listingSorts.ts");
			const ls = [m.U.HOT, m.U.NEW, m.U.TOP, m.U.RISING];
			var ds = e => {
				const {
					dropdownId: t
				} = e, n = ls.map(e => ({
					key: e,
					displayText: Object(cs.a)(e),
					icon: o.a.createElement(is.a, {
						sort: e
					})
				}));
				return o.a.createElement(ye, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const us = [m.cc.HOUR, m.cc.DAY, m.cc.WEEK, m.cc.MONTH, m.cc.YEAR, m.cc.ALL];
			var ms = e => {
					const {
						dropdownId: t
					} = e, n = us.map(e => ({
						key: e,
						displayText: Object(cs.b)(e)
					}));
					return o.a.createElement(ye, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				ps = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				bs = n.n(ps);
			const hs = at.a.div("Separator", bs.a);
			class fs extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(as.d)(this.props.fullSort);
						this.props.onChange(Object(as.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(as.d)(this.props.fullSort);
						this.props.onChange(Object(as.c)({
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
						sort: r,
						timeSort: a
					} = Object(as.d)(t);
					return o.a.createElement(xe.c, {
						className: e,
						label: s.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: s.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, o.a.createElement("div", {
						className: bs.a.wrapper
					}, o.a.createElement(ds, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: r
					}), a && o.a.createElement(o.a.Fragment, null, o.a.createElement(hs, null), o.a.createElement(ms, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: a
					}))))
				}
			}
			var gs = n("./src/reddit/constants/postLayout.ts"),
				vs = n("./src/reddit/icons/fonts/index.tsx"),
				_s = n("./src/reddit/controls/Dropdown/index.m.less"),
				ys = n.n(_s);
			const xs = {
				[gs.d.Card]: Object(vs.b)("view_card"),
				[gs.d.Classic]: Object(vs.b)("view_classic"),
				[gs.d.Compact]: Object(vs.b)("view_compact")
			};

			function Cs(e) {
				const t = xs[e.layout];
				return o.a.createElement(t, {
					className: ys.a.iconStyles
				})
			}
			const Es = [gs.d.Card, gs.d.Classic, gs.d.Compact];
			var js = e => {
					const {
						dropdownId: t
					} = e, n = Es.map(e => ({
						key: e,
						displayText: Object(gs.h)(e),
						icon: o.a.createElement(Cs, {
							layout: e
						})
					}));
					return o.a.createElement(ye, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				ws = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				ks = n.n(ws);
			class Os extends o.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: s,
						layout: r
					} = this.props;
					return o.a.createElement(xe.c, {
						className: e,
						label: n,
						subtext: s
					}, o.a.createElement("div", {
						className: ks.a.wrapper
					}, o.a.createElement(js, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: r
					})))
				}
			}
			var Ss = n("./src/reddit/components/Settings/FeedForm.m.less"),
				Is = n.n(Ss);

			function Ps({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					hideNSFW: n,
					openPostInNewTab: r,
					over18: a,
					privateFeeds: i,
					reduceAnimationsFromAwards: c,
					rememberCommunitySort: l,
					sort: d,
					stylesEnabled: m,
					useMarkdown: p,
					layout: b,
					rememberCommunityLayout: h
				},
				update: f
			}) {
				const g = Object(u.a)({
					[Is.a["m-responsive"]]: e
				});
				return o.a.createElement(Je.a, null, o.a.createElement(Ke.b, {
					isResponsiveSettingsEnabled: e
				}, s.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), o.a.createElement(Oe.a, null, s.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), o.a.createElement(xe.o, {
					on: a,
					onClick: () => f(!a, "over18"),
					label: s.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: s.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), o.a.createElement(xe.o, {
					disabled: !a,
					label: s.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!a && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: s.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), o.a.createElement(xe.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: s.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: s.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), o.a.createElement(xe.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: s.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: s.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), o.a.createElement(xe.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: s.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: s.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), o.a.createElement(fs, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), o.a.createElement(xe.o, {
					className: g,
					indent: !0,
					on: !!l,
					onClick: () => f(!l, "rememberCommunitySort"),
					label: s.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: s.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), o.a.createElement(Os, {
					className: g,
					dropdownPrefix: "subreddit-view-setting",
					label: s.fbt._("Global content view", null, {
						hk: "1tWTJK"
					}),
					layout: b,
					onChange: e => f(e, "layout"),
					subtext: s.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
						hk: "1NyVGg"
					})
				}), o.a.createElement(xe.o, {
					className: g,
					on: !!h,
					onClick: () => f(!h, "rememberCommunityLayout"),
					label: s.fbt._("Remember per community", null, {
						hk: "42Ianh"
					}),
					subtext: s.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
						hk: "3fxqrV"
					}),
					indent: !0
				}), o.a.createElement(xe.o, {
					className: g,
					on: !!r,
					onClick: () => f(!r, "openPostInNewTab"),
					label: s.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: s.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), o.a.createElement(Oe.a, {
					className: g
				}, s.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), o.a.createElement(xe.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: s.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: s.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, s.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), o.a.createElement(xe.f, {
					label: s.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: s.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${et.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var Ns = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				As = n("./src/reddit/helpers/trackers/notifications.ts"),
				Ts = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				Ms = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Ls = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				Bs = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				Rs = n.n(Bs);
			var Us = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [a, i] = Object(r.useState)(Ls.a.Push), c = Object(nt.a)(), l = a === Ls.a.Push, d = a === Ls.a.Email;
					return o.a.createElement(Je.a, null, o.a.createElement("nav", {
						className: Rs.a.nav
					}, o.a.createElement("button", {
						onClick: () => {
							i(l ? Ls.a.Email : Ls.a.Push)
						}
					}, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: e
					}, d && o.a.createElement(Ts.a, {
						className: Rs.a.arrowLeft
					}), l ? s.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : s.fbt._("Back", null, {
						hk: "26R5gK"
					}), l && o.a.createElement(Ms.a, {
						className: Rs.a.arrowRight
					})))), o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: e
					}, l ? s.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : s.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					})), l ? o.a.createElement(Ns.b, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Ns.a, null), o.a.createElement(Oe.a, null), o.a.createElement(xe.o, {
						on: !!t,
						onClick: () => {
							c(Object(As.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: s.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})))
				},
				Fs = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Ds = n.n(Fs);

			function Hs(e) {
				return o.a.createElement("header", {
					className: Object(u.a)(Ds.a.container, e.className)
				}, o.a.createElement("div", {
					className: Ds.a.title
				}, s.fbt._("Payments", null, {
					hk: "rydT0"
				})), o.a.createElement("div", {
					className: Ds.a.description
				}, s.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var Gs = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Ws = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				zs = n("./src/reddit/models/Payments/index.ts"),
				qs = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Ks = n.n(qs);
			class Js extends o.a.Component {
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
						const t = e.type === zs.a.SavedStripe ? await Object(qn.b)(this.props.apiContext(), e.id) : await Object(qn.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: {
								...t.paymentsBeingRemoved,
								[e.id]: !1
							}
						}))
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(Oe.a, null, s.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return o.a.createElement("div", {
							className: Ks.a.payment,
							key: e.id
						}, o.a.createElement("div", {
							className: Ks.a.paymentDisplay
						}, o.a.createElement(Ws.a, {
							className: Ks.a.lock
						}), e.display), o.a.createElement(S.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? s.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : s.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && o.a.createElement("div", {
						className: Ks.a.noSavedPayment
					}, s.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Ys = Object(c.c)({
					savedPayments: Yn.p
				}),
				Vs = Object(a.b)(Ys, e => ({
					onError: t => e(Object(M.f)({
						duration: 5e3,
						kind: F.b.Error,
						text: Object(Kn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === zs.a.SavedStripe && e(Object(Gs.a)({
							cardId: t.id
						})), t.type === zs.a.SavedPayPal && e(Object(Gs.e)({
							sourceId: t.id
						}))
					}
				}));
			var Qs = Object(zn.b)(Vs(Js)),
				Zs = n("./src/reddit/components/Settings/Payments/index.m.less"),
				Xs = n.n(Zs);
			var $s = () => o.a.createElement(Je.a, null, o.a.createElement(Hs, {
					className: Xs.a.header
				}), o.a.createElement(Qs, null)),
				er = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				tr = n("./src/lib/constants/euCookiePolicy.ts");
			const nr = Object(c.a)(e => Object(Be.c)(e, {
					experimentEligibilitySelector: Be.a,
					experimentName: Le.j
				}), e => e === Le.d.Enabled),
				sr = Object(c.a)(e => Object(A.f)(e), e => tr.b.includes(e)),
				rr = Object(c.a)(e => Object(Be.c)(e, {
					experimentEligibilitySelector: Be.a,
					experimentName: Le.h
				}), e => e === Le.b.Enabled),
				or = at.a.span("SubheaderLink", Mn.a),
				ar = at.a.button("GenerateBackupCodesButton", Mn.a),
				ir = at.a.wrapped(xe.f, "ThirdPartyAuth", Mn.a),
				cr = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: I.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: N.d,
					shouldConsolidateAdsPreferences: rr,
					shouldRemoveAdsPreferences: nr,
					shouldKeepAdsPreferencesForGDPR: sr
				}),
				lr = Object(a.b)(cr, (e, t) => ({
					addBlocked: t => e(Object(ln.h)(t)),
					addWhitelisted: t => e(Object(dn.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(y.h)(ke.h)),
					removeWhitelisted: t => e(Object(dn.h)(t)),
					removeBlocked: t => e(Object(ln.g)(t)),
					saveChatSettings: t => e(Object(cn.c)(t)),
					enable2FA: () => e(Object(_.e)()),
					disable2FA: () => e(Object(_.d)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var dr = lr(({
					addBlocked: e,
					blocked: t,
					blockedApi: n,
					prefs: {
						allowClickTracking: r,
						hideFromRobots: a,
						activityRelevantAds: i,
						loginOtpEnabled: c,
						thirdPartyDataPersonalizedAds: l,
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
					update: x,
					shouldShowLocationBasedSetting: C,
					shouldShowCreatePasswordModal: E,
					shouldConsolidateAdsPreferences: j,
					shouldRemoveAdsPreferences: w,
					shouldKeepAdsPreferencesForGDPR: k
				}) => o.a.createElement(Je.a, null, o.a.createElement(Ke.b, {
					isResponsiveSettingsEnabled: v
				}, s.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), o.a.createElement(Ke.a, null, s.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [s.fbt._param("=Privacy & Security FAQs", o.a.createElement(or, null, s.fbt._("{=Privacy & Security FAQs}", [s.fbt._param("=Privacy & Security FAQs", o.a.createElement("a", {
					href: `${et.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), o.a.createElement(Oe.a, null, s.fbt._("Safety", null, {
					hk: "WyYmF"
				})), o.a.createElement(An, {
					title: s.fbt._("People You’ve Blocked", null, {
						hk: "3DxcE1"
					}),
					subtext: s.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
						hk: "1m7s07"
					}),
					label: s.fbt._("Block new user", null, {
						hk: "2OeU8N"
					}),
					add: e,
					remove: y,
					list: t,
					api: n,
					padBottom: !0
				}), j ? ((e, t, n, r, a, i, c, l, d, u, m, p) => o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, s.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), o.a.createElement(xe.o, {
					on: !e,
					onClick: () => r(!e, "hideFromRobots"),
					label: s.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && o.a.createElement(xe.o, {
					on: t,
					onClick: () => r(!t, "allowClickTracking"),
					label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && o.a.createElement(xe.o, {
					on: d,
					onClick: () => r(!d, "thirdPartySiteDataPersonalizedContent"),
					label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), o.a.createElement(Oe.a, null, s.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && o.a.createElement(xe.o, {
					on: l,
					onClick: () => r(!l, "showLocationBasedRecommendations"),
					label: s.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), o.a.createElement(Oe.a, null, s.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), !u || m && o.a.createElement(xe.o, {
					on: n,
					onClick: () => r(!n, "activityRelevantAds"),
					label: s.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), o.a.createElement(xe.o, {
					on: p,
					onClick: () => r(!p, "thirdPartyPersonalizedAds"),
					label: s.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(a, r, i, x, 0, C, 0, p, m, w, k, b) : ((e, t, n, r, a, i, c, l, d, u, m) => o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, s.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), o.a.createElement(xe.o, {
					on: !e,
					onClick: () => r(!e, "hideFromRobots"),
					label: s.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && o.a.createElement(xe.o, {
					on: t,
					onClick: () => r(!t, "allowClickTracking"),
					label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u || m && o.a.createElement(xe.o, {
					on: n,
					onClick: () => r(!n, "activityRelevantAds"),
					label: s.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), o.a.createElement(xe.o, {
					on: a,
					onClick: () => r(!a, "thirdPartyDataPersonalizedAds"),
					label: s.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: s.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), o.a.createElement(xe.o, {
					on: c,
					onClick: () => r(!c, "thirdPartySiteDataPersonalizedAds"),
					label: s.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && o.a.createElement(xe.o, {
					on: l,
					onClick: () => r(!l, "showLocationBasedRecommendations"),
					label: s.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && o.a.createElement(xe.o, {
					on: d,
					onClick: () => r(!d, "thirdPartySiteDataPersonalizedContent"),
					label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(a, r, i, x, l, C, d, p, m, w, k), o.a.createElement(Oe.a, null, s.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), o.a.createElement(xe.o, {
					on: c,
					onClick: () => {
						E ? _() : c ? f() : h()
					},
					label: s.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: o.a.createElement(o.a.Fragment, null, s.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && o.a.createElement(o.a.Fragment, null, " ", s.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", o.a.createElement(ar, {
						type: "button",
						onClick: () => g()
					}, s.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), o.a.createElement(ir, {
					className: Object(u.a)({
						[Mn.a["m-responsive"]]: v
					}),
					label: s.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${et.a.redditUrl}/prefs/apps`,
					last: !0
				}), E && o.a.createElement(qe.a, {
					isResponsiveSettingsEnabled: v
				}))),
				ur = n("./src/reddit/actions/preferences.ts"),
				mr = n("./src/reddit/actions/snoovatarModal.ts"),
				pr = n("./src/reddit/components/Loader/index.m.less"),
				br = n.n(pr);
			class hr extends o.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: s
					} = this.props;
					return e ? n ? n() : o.a.createElement(Ot.a, {
						center: !0,
						className: br.a.loadingIcon,
						sizePx: s || 10
					}) : t()
				}
			}
			var fr = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				gr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				vr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				_r = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				yr = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				xr = n("./src/reddit/selectors/structuredStyles.ts"),
				Cr = n("./src/reddit/selectors/subredditSettings.ts"),
				Er = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				jr = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				wr = n.n(jr);
			const {
				fbt: kr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Or = 30, Sr = 200, Ir = Object(c.a)(A.j, Cr.a, A.ub, xr.n, Xe.a, (e, t, n, s, r) => {
				const o = e && e.profileId,
					a = o && s[o] ? s[o].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(D.e)(e),
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
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === r
				}
			}), Pr = at.a.div("ImageUploaderLayout", wr.a), Nr = at.a.wrapped(Er.a, "IconImageUploader", wr.a), Ar = at.a.wrapped(vr.a, "ProfileIcon", wr.a), Tr = at.a.wrapped(Er.a, "BannerImageUploader", wr.a), Mr = at.a.wrapped(gr.a, "ProfileBanner", wr.a), Lr = at.a.div("ProfileModerationContent", wr.a), Br = at.a.wrapped(yr.a, "PlusCircle", wr.a), Rr = at.a.span("LabelText", wr.a), Ur = at.a.span("ImageType", wr.a), Fr = at.a.a("Link", wr.a), Dr = at.a.img("DummyBanner", wr.a), Hr = at.a.wrapped(fr.a, "Preview", wr.a);
			class Gr extends o.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(P.j)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(P.j)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(P.d)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(P.g)(!this.props.enableFollowers))
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							enableFollowers: this.props.enableFollowers,
							prevEnableFollowers: this.props.enableFollowers,
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(P.b)(this.props.showActiveCommunities))
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
						currentUserName: s,
						currentUserUrl: r,
						enableFollowers: a,
						isEmployee: i,
						isGold: c,
						isNSFWModalOpen: l,
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
						isDeletingIcon: x,
						profileBannerUploading: C,
						profileIconUploading: j,
						publicDescription: w,
						title: k
					} = this.state, O = Object(u.a)({
						[wr.a["m-responsive"]]: d
					}), S = !!f && !Object(_r.c)(f);
					return o.a.createElement(Je.a, {
						sidebar: o.a.createElement(Hr, {
							bannerBackgroundImage: h,
							currentUserHasSnoovatar: !!v,
							editMode: !0,
							isEmployee: i,
							isDefaultIcon: !f || f.indexOf("avatar_default") > -1,
							isDeletingBanner: y,
							isDeletingIcon: x,
							isGold: c,
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
							url: r,
							userCreated: n,
							username: s
						})
					}, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: d
					}, kr._("Customize profile", null, {
						hk: "1fenXK"
					})), o.a.createElement(Oe.a, null, kr._("Profile Information", null, {
						hk: "3vzAUk"
					})), o.a.createElement(xe.e, {
						label: kr._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							k !== this.props.title && this.updateProfile(k, "title")
						},
						placeholder: kr._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: Or,
						subtext: kr._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: k
					}), o.a.createElement(xe.g, {
						label: kr._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							w !== this.props.publicDescription && this.updateProfile(w, "publicDescription")
						},
						placeholder: kr._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: Sr,
						subtext: kr._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: w
					}), o.a.createElement(Oe.a, null, kr._("Images", null, {
						hk: "38DOkf"
					})), o.a.createElement(xe.k, {
						label: kr._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: kr._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, o.a.createElement(Pr, {
						className: Object(u.a)(O)
					}, S ? o.a.createElement(Ar, {
						className: O,
						iconUrl: f,
						isNSFW: !1,
						userName: s
					}) : o.a.createElement(Nr, {
						className: O,
						controlName: "profileIcon",
						icon: o.a.createElement(Br, null),
						isUploading: j,
						label: o.a.createElement(Rr, null, kr._("Drag and Drop or Upload {=Avatar} Image", [kr._param("=Avatar", o.a.createElement(Ur, null, kr._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: wr.a.Label,
						onChange: this.onIconChange
					}), h ? o.a.createElement(Mr, {
						bannerUrl: h,
						className: O,
						isNSFW: !1,
						userName: s
					}) : o.a.createElement(Tr, {
						className: O,
						controlName: "profileBanner",
						icon: o.a.createElement(Br, null),
						isUploading: C,
						label: o.a.createElement(Rr, null, kr._("Drag and Drop or Upload {=Banner} Image", [kr._param("=Banner", o.a.createElement(Ur, null, kr._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: wr.a.Label,
						onChange: this.onBannerChange
					}))), o.a.createElement(Oe.a, null, kr._("Profile category", null, {
						hk: "1YRE6p"
					})), o.a.createElement(xe.o, {
						label: kr._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: p,
						subtext: kr._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), o.a.createElement(Oe.a, null, kr._("Advanced", null, {
						hk: "1US2Ur"
					})), o.a.createElement(xe.o, {
						label: kr._("Allow people to follow you", null, {
							hk: "30iVQH"
						}),
						subtext: kr._("Followers will be notified about posts you make to your profile and see them in their home feed.", null, {
							hk: "3Ngn8M"
						}),
						on: a,
						onClick: this.onEnableFollowersToggle
					}), o.a.createElement(xe.o, {
						label: kr._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: kr._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [kr._param("profileForm: r/all link", o.a.createElement(Fr, {
							href: "/r/all"
						}, "r/all")), kr._param("profileForm: /users link", o.a.createElement(Fr, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), o.a.createElement(xe.o, {
						label: kr._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: kr._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: g,
						onClick: this.onShowActiveCommunitiesChange
					}), o.a.createElement(Oe.a, null, kr._("Profile moderation", null, {
						hk: "3vDS8h"
					})), o.a.createElement(Lr, null, kr._("For moderation tools please visit our {=Profile Moderation page}", [kr._param("=Profile Moderation page", o.a.createElement(Fr, {
						href: `/user/${s}/about/edit/moderation`
					}, kr._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), l && o.a.createElement(E.a, {
						headerText: kr._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: kr._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [kr._param("=NSFW content", o.a.createElement(Fr, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, kr._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: kr._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: kr._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: _,
						onOverlayClick: _,
						overlayClassName: Object(u.a)({
							[wr.a.ResponsiveOverlay]: d
						}),
						withOverlay: !0
					}), o.a.createElement(Dr, {
						src: h
					}))
				}
			}
			const Wr = Object(a.b)(Ir, e => ({
					imageDeleteRequested: t => e(Object(ur.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(ur.z)(t, n)),
					onClickSnoovatar: () => e(Object(mr.b)({
						clickSource: "profile_overview"
					})),
					save: (t, n) => e(Object(ur.E)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(O.c)(Gr)),
				zr = Object(c.c)({
					isLoading: e => !Object(Cr.a)(e)
				}),
				qr = Object(a.b)(zr)(hr);

			function Kr(e) {
				return o.a.createElement(qr, {
					loaderSize: 50,
					render: () => o.a.createElement(Wr, e)
				})
			}
			var Jr = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Yr = n.n(Jr);

			function Vr(e) {
				return o.a.createElement("header", {
					className: e.className
				}, o.a.createElement("div", {
					className: Yr.a.title
				}, s.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), o.a.createElement("div", {
					className: Yr.a.subtitle
				}, s.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var Qr = n("./src/reddit/actions/governance/communityDetails.ts"),
				Zr = n("./src/lib/addQueryParams/index.ts"),
				Xr = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				$r = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				eo = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				to = n.n(eo);
			const {
				fbt: no
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const so = Object(c.c)({
				userId: e => {
					const t = Object(A.j)(e);
					return t ? t.id : ""
				}
			});
			var ro = Object(a.b)(so)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, s = t.primaryColor, r = Object(Zr.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return o.a.createElement("div", {
						className: to.a.body
					}, o.a.createElement("section", {
						className: to.a.leftSection
					}, o.a.createElement("div", {
						className: to.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), o.a.createElement("div", {
						className: to.a.content
					}, o.a.createElement(Xr.a, {
						index: "1",
						color: s
					}, no._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), o.a.createElement(Xr.a, {
						index: "2",
						color: s
					}, no._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), o.a.createElement(Xr.a, {
						index: "3",
						color: s
					}, no._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), o.a.createElement("section", {
						className: to.a.rightSection
					}, o.a.createElement($r.a, {
						url: r,
						scale: 4
					})))
				})),
				oo = n("./src/reddit/constants/colors.ts"),
				ao = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				io = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				co = n("./src/reddit/icons/svgs/Close/index.tsx"),
				lo = n("./src/reddit/components/Economics/Price/index.tsx"),
				uo = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				mo = n("./src/lib/currency/centsToDollars/index.ts"),
				po = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				bo = n.n(po);
			const ho = [() => s.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => s.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => s.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => s.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				fo = [() => s.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => s.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => s.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => s.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function go({
				benefit: e,
				color: t
			}) {
				return o.a.createElement("li", {
					className: bo.a.benefit
				}, o.a.createElement("div", {
					className: bo.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(zn.b)(Object(O.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: r
				} = e;
				return o.a.createElement("div", {
					className: Object(u.a)(bo.a.container, t)
				}, o.a.createElement("div", {
					className: bo.a.topLine
				}, o.a.createElement(uo.a, {
					className: bo.a.brand,
					subreddit: r
				}), o.a.createElement("div", {
					className: bo.a.title
				}, s.fbt._("{community} Supporter Membership", [s.fbt._param("community", r.displayText)], {
					hk: "eZ8PH"
				}))), o.a.createElement("header", {
					className: bo.a.subTitle
				}, s.fbt._("Support the {community} community and receive exclusive access to premium features.", [s.fbt._param("community", r.displayText)], {
					hk: "2pm4PV"
				})), o.a.createElement("article", null, o.a.createElement("div", {
					className: bo.a.benefitsTitle
				}, s.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), o.a.createElement("ul", {
					className: bo.a.benefits
				}, ho.map(e => o.a.createElement(go, {
					benefit: e(),
					key: e()
				}))), o.a.createElement("div", {
					className: bo.a.benefitsTitle
				}, s.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), o.a.createElement("ul", {
					className: bo.a.benefits
				}, fo.map(e => o.a.createElement(go, {
					benefit: e(),
					key: e()
				})))), o.a.createElement("footer", {
					className: bo.a.price
				}, s.fbt._("${price}/month", [s.fbt._param("price", Object(mo.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var vo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				_o = n.n(vo);
			const {
				fbt: yo
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xo = e => yo._("You've been supporting the community and the development of new features since {joinDate}.", [yo._param("joinDate", e)], {
				hk: "37ImIl"
			}), Co = [yo._("Loyalty badge", null, {
				hk: "15DctX"
			}), yo._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), yo._("Distinguished username", null, {
				hk: "4vsJEd"
			}), yo._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var Eo = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: s,
					title: r
				} = e, a = s.primaryColor;
				return o.a.createElement("div", {
					className: _o.a.card,
					style: {
						borderColor: a
					}
				}, o.a.createElement(uo.a, {
					className: _o.a.brand,
					subreddit: s
				}), o.a.createElement("div", {
					className: _o.a.cardContent
				}, o.a.createElement("div", {
					className: _o.a.cardTitle
				}, r), o.a.createElement(lo.a, {
					className: _o.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: s.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), o.a.createElement("div", {
					className: _o.a.membershipMsg
				}, xo(t)), o.a.createElement("div", {
					className: _o.a.benefitsTitle
				}, yo._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), o.a.createElement("ul", {
					className: _o.a.benefits
				}, Co.map(e => o.a.createElement(go, {
					benefit: e,
					color: a,
					key: e
				})))))
			};
			const {
				fbt: jo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var wo = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: s,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(a.d)(), m = Object(nt.a)();
					Object(r.useEffect)(() => {
						c && (d(Object(Qr.a)({
							subredditId: c.id
						})), m(Object(io.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(ao.a)(p, void 0, oo.b.white);
					return o.a.createElement("div", {
						className: Object(u.a)(t, _o.a.pointsContainer)
					}, o.a.createElement("header", {
						className: _o.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, jo._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), o.a.createElement(co.a, {
						className: _o.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), o.a.createElement("article", {
						className: _o.a.content
					}, c && o.a.createElement(o.a.Fragment, null, o.a.createElement(ro, {
						subreddit: c
					}), o.a.createElement(Eo, {
						joinDate: n,
						membership: s,
						subreddit: c,
						title: l
					}))))
				},
				ko = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Oo = n("./src/reddit/actions/governance/errorToast.ts"),
				So = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Io
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Po = Object(a.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(ko.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(Oo.a)(e, t)
			}));
			var No = Object(zn.b)(Po((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: s,
					joinDate: a,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: m,
					subredditId: p,
					title: b
				} = e, [h, f] = Object(r.useState)(!1), g = m ? m.displayText : "";
				return o.a.createElement("div", {
					className: Object(u.a)(n, _o.a.container)
				}, o.a.createElement("header", {
					className: _o.a.header
				}, Io._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), o.a.createElement(co.a, {
					className: _o.a.close,
					onClick: l
				})), o.a.createElement("article", {
					className: _o.a.content
				}, o.a.createElement("div", {
					className: _o.a.warning
				}, Io._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Io._param("subredditName", g), Io._param("endDate", s)], {
					hk: "1POMMH"
				})), m && o.a.createElement(Eo, {
					joinDate: a,
					membership: i,
					subreddit: m,
					title: b
				})), o.a.createElement("footer", {
					className: _o.a.footer
				}, o.a.createElement(S.l, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(So.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? Io._("canceling...", null, {
					hk: "1Ggy36"
				}) : Io._("cancel membership", null, {
					hk: "C9ZhO"
				})), o.a.createElement(S.i, {
					onClick: l
				}, Io._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Ao = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				To = Object(a.b)(Ao);
			var Mo = Object(X.a)(To((function(e) {
					return "points" === e.membership.currency ? o.a.createElement(wo, e) : o.a.createElement(No, e)
				}))),
				Lo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				Bo = n.n(Lo);

			function Ro(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Uo extends o.a.Component {
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
						membership: r,
						settings: a
					} = t, i = Ro(r.endsAt), c = Ro(r.publishAt), l = !a.renew, d = n ? n.displayText : "", m = i ? s.fbt._("Cancelled. Will expire on {date}", [s.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? s.fbt._("Joined {date}", [s.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return o.a.createElement("div", {
						className: Object(u.a)(e, Bo.a.container)
					}, o.a.createElement("div", {
						className: Bo.a.membershipName
					}, s.fbt._("{subredditName} {title}", [s.fbt._param("subredditName", d), s.fbt._param("title", r.title)], {
						hk: "2NdAdN"
					})), !l && o.a.createElement("div", {
						className: Bo.a.joinDate,
						title: p
					}, p), l && o.a.createElement("div", {
						className: Bo.a.cancelled,
						title: m
					}, m), o.a.createElement(S.o, {
						className: Bo.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && o.a.createElement(Mo, {
						withOverlay: !0,
						endDate: i,
						joinDate: c,
						subredditId: r.subredditId,
						membership: r,
						title: d + " " + r.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const Fo = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var Do = Object(a.b)(Fo)(Uo),
				Ho = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				Go = n.n(Ho);
			const Wo = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var zo = Object(a.b)(Wo)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: r
					} = e, a = Object.keys(r).map(e => (function(e) {
						if (!e.active) return null;
						const t = Object.keys(e.active).filter(e => "provisional_membership" !== e),
							n = e.active[t[0]];
						return n && Date.now() < n.endsAt ? {
							membership: n,
							settings: e.settings
						} : null
					})(r[e])).filter(e => !!e).sort((e, t) => e.membership.endsAt - t.membership.endsAt), i = !!a.length;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement("div", {
						className: Go.a.title
					}, s.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => o.a.createElement("div", {
						className: Go.a.loading,
						key: t
					})), i && a.map(e => o.a.createElement(Do, {
						key: e.membership.subredditId,
						className: Go.a.membership,
						subscription: e
					})), !n && !i && o.a.createElement("div", {
						className: Go.a.empty
					}, s.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				qo = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				Ko = n.n(qo);

			function Jo(e) {
				return o.a.createElement(Je.a, {
					className: e.className
				}, o.a.createElement(Vr, {
					className: Ko.a.header
				}), o.a.createElement(zo, null))
			}
			var Yo = n("./src/reddit/components/TabNav/index.tsx"),
				Vo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Qo = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Zo = n("./src/reddit/selectors/platform.ts"),
				Xo = n("./src/reddit/selectors/responsiveSettings.ts"),
				$o = n("./src/reddit/pages/Settings/index.m.less"),
				ea = n.n($o);
			const ta = (e, t, n) => [{
					key: m.Xb.Account,
					title: s.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Xb.Profile,
					title: s.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Xb.Privacy,
					title: s.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Xb.Feed,
					title: s.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Xb.Notifications,
					title: s.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Xb.Premium,
					title: s.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: ea.a.CreatorTab,
					key: m.Xb.Creator,
					title: s.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: ea.a.PaymentsTab,
					key: m.Xb.Payments,
					title: s.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: ea.a.SpecialMembershipTab,
					key: m.Xb.SpecialMembership,
					title: s.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: ea.a.MessagingTab,
					key: m.Xb.Messaging,
					title: s.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				na = Object(c.c)({
					savedPayments: Yn.p,
					userIsWhitelistedCreator: Yn.x,
					allowNavigationCallback: Zo.a,
					isResponsiveSettingsEnabled: Xo.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				sa = Object(Ve.u)(),
				ra = Object(a.b)(na, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(ur.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				oa = {
					activityRelevantAds: "personalization_activity_relevant_ads",
					acceptPrivateMessages: "recieve_messages",
					allowClickTracking: "privacy_log_outbound_clicks",
					autoplayVideo: "video_autoplay",
					collapseReadMessages: "collapse_messages",
					countryCode: "country_code",
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
			class aa extends o.a.Component {
				constructor() {
					super(...arguments), this.tabNavRef = o.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs({
							...n,
							[t]: e
						})
					}, this.sendEvent = (e, t) => {
						const n = d()();
						oa.hasOwnProperty(t) && this.props.sendEvent(s => ({
							source: this.getSource(),
							action: "save",
							noun: oa[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== m.Xb.Account ? `settings_${e}` : "settings"
					}, this.getTrackingValue = (e, t, n = !1) => {
						const s = n ? this.props.prefs[e] : t;
						return "boolean" == typeof s ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === s ? "off" : "on" : !0 === s ? "on" : "off" : s
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: s,
							userIsWhitelistedCreator: r,
							userHasSpecialMembership: a
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case m.Xb.Account:
								return o.a.createElement(rn, i);
							case m.Xb.Profile:
								return o.a.createElement(Kr, i);
							case m.Xb.Premium:
								return o.a.createElement(er.b, i);
							case m.Xb.Notifications:
								return o.a.createElement(Us, i);
							case m.Xb.Privacy:
								return o.a.createElement(dr, i);
							case m.Xb.Messaging:
								return o.a.createElement(Fn, i);
							case m.Xb.Feed:
								return o.a.createElement(Ps, i);
							case m.Xb.Payments:
								return o.a.createElement($s, null);
							case m.Xb.Creator: {
								const e = Object(p.a)(s.search);
								return r ? o.a.createElement(os, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Xb.SpecialMembership:
								return a ? o.a.createElement(Jo, null) : null;
							default:
								return o.a.createElement(rn, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Qo.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Xb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Xb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = o.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return o.a.createElement(Yo.a, {
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
					Object(Vo.d)(Vo.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = m.Xb.Account
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
					Object(Vo.b)(Vo.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						isResponsiveSettingsEnabled: t,
						userIsWhitelistedCreator: n,
						userHasSpecialMembership: r,
						savedPayments: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(u.a)(ea.a.Container, {
							[ea.a["m-responsive"]]: t
						})
					}, o.a.createElement(Yo.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: s.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						onTouchMove: this.startScrolling
					}, ta(n, r, a).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = sa(ra(Object(O.c)(aa)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = (e, t) => `${s.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "p", (function() {
				return P
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "x", (function() {
				return B
			})), n.d(t, "t", (function() {
				return R
			})), n.d(t, "u", (function() {
				return U
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "m", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/models/Product/index.ts"),
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
							s = Date.now();
						return n && s < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				y = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === a.a.First),
							[i.a.Achievement]: s.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const C = (e, t, n) => {
					var r;
					if (!s.d.spBadges(e)) return h;
					return x(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
				},
				E = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function j(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === r) return n;
				const o = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === c)
			}

			function k(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return r.data.collections[n];
					if (n === i.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return h
			}

			function O(e, t) {
				const n = k(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function S(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return h
			}

			function I(e, t) {
				return k(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const P = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === d.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === d.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = f(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				L = (e, t) => {
					var n, s, r, o;
					const a = (null === (o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === r ? void 0 : r[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || A;
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
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === d.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === d.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				F = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				D = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				H = (e, t, n) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.q)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.a)(e, {
						commentId: n
					});
					if (r && Object(o.a)(r)) return !0;
					const a = s.d.spGiphy(e),
						i = D(e, t);
					return !(!a || !i) || a && i
				},
				G = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return c
			})), n.d(t, "i", (function() {
				return l
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
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/makeProductOfferKey/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				l = (e, {
					subredditId: t,
					type: n
				}) => {
					var s, o, a;
					return t ? e.subreddits.productOffers[Object(r.a)(n, t)] : null === (a = null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === a ? void 0 : a[Object(r.a)(n)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return n && n[0]
				},
				u = (e, t) => {
					var n;
					const s = d(e, t);
					return null === (n = null == s ? void 0 : s.pricePackages) || void 0 === n ? void 0 : n[0].price
				},
				m = e => {
					const t = l(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(s.a)(m, i.p, (e, t) => p(e, t) || null),
				h = Object(s.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				f = Object(s.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(s.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(s.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				o = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const s = n.subredditId,
							r = Object.keys(e.user.ownedBadges[s] || {}),
							o = e.badges.models,
							a = Date.now();
						let i = !1;
						return r.forEach(e => {
							const n = o[e];
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.636a6338a0fc55f57a17.js.map