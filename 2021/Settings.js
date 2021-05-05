// https://www.redditstatic.com/desktop2x/Settings.79d0ee42e72490460e0a.js
// Retrieved at 5/5/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var s = {
				single_source_shortest_paths: function(e, t, n) {
					var o = {},
						r = {};
					r[t] = 0;
					var a, i, c, l, d, u, m, p = s.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (c in i = (a = p.pop()).value, l = a.cost, d = e[i] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = r[c], (void 0 === r[c] || m > u) && (r[c] = u, p.push(c, u), o[c] = i));
					if (void 0 !== n && void 0 === r[n]) {
						var b = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(b)
					}
					return o
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], s = t; s;) n.push(s), e[s], s = e[s];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var o = s.single_source_shortest_paths(e, t, n);
					return s.extract_shortest_path_from_predecessor_list(o, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = s.PriorityQueue,
							o = {};
						for (t in e = e || {}, n) n.hasOwnProperty(t) && (o[t] = n[t]);
						return o.queue = [], o.sorter = e.sorter || n.default_sorter, o
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
			e.exports = function(e, t, o, r) {
				for (var a = -1, i = s(n((t - e) / (o || 1)), 0), c = Array(i); i--;) c[r ? i : ++a] = e, e += o;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), a = void 0 === a ? t < n ? 1 : -1 : r(a), s(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
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

			function o(e) {
				var t = r(e);
				return n(t)
			}

			function r(e) {
				if (!n.o(s, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return s[e]
			}
			o.keys = function() {
				return Object.keys(s)
			}, o.resolve = r, e.exports = o, o.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$"
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/can-promise.js"),
				o = n("./node_modules/qrcode/lib/core/qrcode.js"),
				r = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, r, a) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					l = "function" == typeof i[c - 1];
				if (!l && !s()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = r = void 0) : 2 !== c || t.getContext || (r = n, n = t, t = void 0), new Promise((function(s, a) {
						try {
							var i = o.create(n, r);
							s(e(i, t, r))
						} catch (c) {
							a(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (a = n, n = t, t = r = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = r, r = void 0) : (a = r, r = n, n = t, t = void 0));
				try {
					var d = o.create(n, r);
					a(null, e(d, t, r))
				} catch (u) {
					a(u)
				}
			}
			t.create = o.create, t.toCanvas = i.bind(null, r.render), t.toDataURL = i.bind(null, r.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
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
				for (var t = Math.floor(e / 7) + 2, n = s(e), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), r = [n - 7], a = 1; a < t - 1; a++) r[a] = r[a - 1] - o;
				return r.push(6), r.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], s = t.getRowColCoords(e), o = s.length, r = 0; r < o; r++)
					for (var a = 0; a < o; a++) 0 === r && 0 === a || 0 === r && a === o - 1 || r === o - 1 && 0 === a || n.push([s[r], s[a]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function r(e) {
				this.mode = s.ALPHANUMERIC, this.data = e
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
					var n = 45 * o.indexOf(this.data[t]);
					n += o.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
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
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function o(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = s.alloc(e * e), this.reservedBit = s.alloc(e * e)
			}
			o.prototype.set = function(e, t, n, s) {
				var o = e * this.size + t;
				this.data[o] = n, s && (this.reservedBit[o] = !0)
			}, o.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, o.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, o.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/mode.js");

			function r(e) {
				this.mode = o.BYTE, this.data = s.from(e)
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
			var s = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				r = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
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
			}, t.getTotalCodewordsCount = function(e, t) {
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
				o = s.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, r = n << 10; s.getBCHDigit(r) - o >= 0;) r ^= 1335 << s.getBCHDigit(r) - o;
				return 21522 ^ (n << 10 | r)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = s.alloc(512),
				r = s.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) o[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) o[t] = o[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return r[e]
			}, t.exp = function(e) {
				return o[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : o[r[e] + r[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				o = n("./node_modules/qrcode/lib/core/utils.js");

			function r(e) {
				this.mode = s.KANJI, this.data = e
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
					var n = o.toSJIS(this.data[t]);
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
				s = 3,
				o = 40,
				r = 10;

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
				for (var t = e.size, s = 0, o = 0, r = 0, a = null, i = null, c = 0; c < t; c++) {
					o = r = 0, a = i = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === a ? o++ : (o >= 5 && (s += n + (o - 5)), a = d, o = 1), (d = e.get(l, c)) === i ? r++ : (r >= 5 && (s += n + (r - 5)), i = d, r = 1)
					}
					o >= 5 && (s += n + (o - 5)), r >= 5 && (s += n + (r - 5))
				}
				return s
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, o = 0; o < t - 1; o++)
					for (var r = 0; r < t - 1; r++) {
						var a = e.get(o, r) + e.get(o, r + 1) + e.get(o + 1, r) + e.get(o + 1, r + 1);
						4 !== a && 0 !== a || n++
					}
				return n * s
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, s = 0, r = 0, a = 0; a < t; a++) {
					s = r = 0;
					for (var i = 0; i < t; i++) s = s << 1 & 2047 | e.get(a, i), i >= 10 && (1488 === s || 93 === s) && n++, r = r << 1 & 2047 | e.get(i, a), i >= 10 && (1488 === r || 93 === r) && n++
				}
				return n * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, s = 0; s < n; s++) t += e.data[s];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * r
			}, t.applyMask = function(e, t) {
				for (var n = t.size, s = 0; s < n; s++)
					for (var o = 0; o < n; o++) t.isReserved(o, s) || t.xor(o, s, a(e, o, s))
			}, t.getBestMask = function(e, n) {
				for (var s = Object.keys(t.Patterns).length, o = 0, r = 1 / 0, a = 0; a < s; a++) {
					n(a), t.applyMask(a, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), i < r && (r = i, o = a)
				}
				return o
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/version-check.js"),
				o = n("./node_modules/qrcode/lib/core/regex.js");
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
				return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
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

			function o(e) {
				this.mode = s.NUMERIC, this.data = e.toString()
			}
			o.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var t, n, s;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), s = parseInt(n, 10), e.put(s, 10);
				var o = this.data.length - t;
				o > 0 && (n = this.data.substr(t), s = parseInt(n, 10), e.put(s, 3 * o + 1))
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = s.alloc(e.length + t.length - 1), r = 0; r < e.length; r++)
					for (var a = 0; a < t.length; a++) n[r + a] ^= o.mul(e[r], t[a]);
				return n
			}, t.mod = function(e, t) {
				for (var n = s.from(e); n.length - t.length >= 0;) {
					for (var r = n[0], a = 0; a < t.length; a++) n[a] ^= o.mul(t[a], r);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = s.from([1]), r = 0; r < e; r++) n = t.mul(n, [1, o.exp(r)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/utils.js"),
				r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
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
				var s, o, r = e.size,
					a = b.getEncodedBits(t, n);
				for (s = 0; s < 15; s++) o = 1 == (a >> s & 1), s < 6 ? e.set(s, 8, o, !0) : s < 8 ? e.set(s + 1, 8, o, !0) : e.set(r - 15 + s, 8, o, !0), s < 8 ? e.set(8, r - s - 1, o, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, o, !0) : e.set(8, 15 - s - 1, o, !0);
				e.set(r - 8, 8, 1, !0)
			}

			function _(e, t, n) {
				var r = new a;
				n.forEach((function(t) {
					r.put(t.mode.bit, 4), r.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(r)
				}));
				var i = 8 * (o.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
				for (var c = (i - r.getLengthInBits()) / 8, l = 0; l < c; l++) r.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var r = o.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), i = r - a, c = u.getBlocksCount(t, n), l = c - r % c, d = Math.floor(r / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), _ = new Array(c), y = 0, x = s.from(e.buffer), j = 0; j < c; j++) {
						var E = j < l ? p : b;
						v[j] = x.slice(g, g + E), _[j] = f.encode(v[j]), g += E, y = Math.max(y, E)
					}
					var C, w, k = s.alloc(r),
						O = 0;
					for (C = 0; C < y; C++)
						for (w = 0; w < c; w++) C < v[w].length && (k[O++] = v[w][C]);
					for (C = 0; C < h; C++)
						for (w = 0; w < c; w++) k[O++] = _[w][C];
					return k
				}(r, e, t)
			}

			function y(e, t, n, s) {
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
					h = o.getSymbolSize(t),
					y = new i(h);
				return function(e, t) {
						for (var n = e.size, s = l.getPositions(t), o = 0; o < s.length; o++)
							for (var r = s[o][0], a = s[o][1], i = -1; i <= 7; i++)
								if (!(r + i <= -1 || n <= r + i))
									for (var c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(r + i, a + c, !0, !0) : e.set(r + i, a + c, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var s = n % 2 == 0;
							e.set(n, 6, s, !0), e.set(6, n, s, !0)
						}
					}(y),
					function(e, t) {
						for (var n = c.getPositions(t), s = 0; s < n.length; s++)
							for (var o = n[s][0], r = n[s][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(o + a, r + i, !0, !0) : e.set(o + a, r + i, !1, !0)
					}(y, t), v(y, n, 0), t >= 7 && function(e, t) {
						for (var n, s, o, r = e.size, a = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), s = i % 3 + r - 8 - 3, o = 1 == (a >> i & 1), e.set(n, s, o, !0), e.set(s, n, o, !0)
					}(y, t),
					function(e, t) {
						for (var n = e.size, s = -1, o = n - 1, r = 7, a = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(o, i - c)) {
										var l = !1;
										a < t.length && (l = 1 == (t[a] >>> r & 1)), e.set(o, i - c, l), -1 === --r && (a++, r = 7)
									} if ((o += s) < 0 || n <= o) {
									o -= s, s = -s;
									break
								}
							}
					}(y, b), isNaN(s) && (s = d.getBestMask(y, v.bind(null, y, n))), d.applyMask(s, y), v(y, n, s), {
						modules: y,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: s,
						segments: r
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, s, a = r.M;
				return void 0 !== t && (a = r.from(t.errorCorrectionLevel, r.M), n = p.from(t.version), s = d.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), y(e, n, a, s)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/polynomial.js"),
				r = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = s.alloc(this.degree),
					n = r.concat([e, t], e.length + this.degree),
					a = o.mod(n, this.genPoly),
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
			var o = new RegExp("^" + n + "$"),
				r = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return o.test(e)
			}, t.testNumeric = function(e) {
				return r.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				o = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				r = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/byte-data.js"),
				i = n("./node_modules/qrcode/lib/core/kanji-data.js"),
				c = n("./node_modules/qrcode/lib/core/regex.js"),
				l = n("./node_modules/qrcode/lib/core/utils.js"),
				d = n("./node_modules/dijkstrajs/dijkstra.js");

			function u(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function m(e, t, n) {
				for (var s, o = []; null !== (s = e.exec(n));) o.push({
					data: s[0],
					index: s.index,
					mode: t,
					length: s[0].length
				});
				return o
			}

			function p(e) {
				var t, n, o = m(c.NUMERIC, s.NUMERIC, e),
					r = m(c.ALPHANUMERIC, s.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, s.BYTE, e), n = m(c.KANJI, s.KANJI, e)) : (t = m(c.BYTE_KANJI, s.BYTE, e), n = []), o.concat(r, t, n).sort((function(e, t) {
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
						return o.getBitsLength(e);
					case s.ALPHANUMERIC:
						return r.getBitsLength(e);
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
						return new o(e);
					case s.ALPHANUMERIC:
						return new r(e);
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
				for (var o = function(e, t) {
						for (var n = {}, o = {
								start: {}
							}, r = ["start"], a = 0; a < e.length; a++) {
							for (var i = e[a], c = [], l = 0; l < i.length; l++) {
								var d = i[l],
									u = "" + a + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, o[u] = {};
								for (var m = 0; m < r.length; m++) {
									var p = r[m];
									n[p] && n[p].node.mode === d.mode ? (o[p][u] = b(n[p].lastCount + d.length, d.mode) - b(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), o[p][u] = b(d.length, d.mode) + 4 + s.getCharCountIndicator(d.mode, t))
								}
							}
							r = c
						}
						for (m = 0; m < r.length; m++) o[r[m]].end = 0;
						return {
							map: o,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var o = e[n];
							switch (o.mode) {
								case s.NUMERIC:
									t.push([o, {
										data: o.data,
										mode: s.ALPHANUMERIC,
										length: o.length
									}, {
										data: o.data,
										mode: s.BYTE,
										length: o.length
									}]);
									break;
								case s.ALPHANUMERIC:
									t.push([o, {
										data: o.data,
										mode: s.BYTE,
										length: o.length
									}]);
									break;
								case s.KANJI:
									t.push([o, {
										data: o.data,
										mode: s.BYTE,
										length: u(o.data)
									}]);
									break;
								case s.BYTE:
									t.push([{
										data: o.data,
										mode: s.BYTE,
										length: u(o.data)
									}])
							}
						}
						return t
					}(p(e, l.isKanjiModeEnabled())), n), r = d.find_path(o.map, "start", "end"), a = [], i = 1; i < r.length - 1; i++) a.push(o.table[r[i]].node);
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
				o = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
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
				var r = 8 * (s.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (n === a.MIXED) return r;
				var c = r - d(n, e);
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
				var s, o = r.from(n, r.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var s = 1; s <= 40; s++) {
							if (u(e, s) <= t.getCapacity(s, n, a.MIXED)) return s
						}
					}(e, o);
					if (0 === e.length) return 1;
					s = e[0]
				} else s = e;
				return function(e, n, s) {
					for (var o = 1; o <= 40; o++)
						if (n <= t.getCapacity(o, s, e)) return o
				}(s.mode, s.getLength(), o)
			}, t.getEncodedBits = function(e) {
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; s.getBCHDigit(t) - l >= 0;) t ^= 7973 << s.getBCHDigit(t) - l;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var o = n,
					r = t;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (r = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = s.getOptions(o);
				var a = s.getImageWidth(e.modules.size, o),
					i = r.getContext("2d"),
					c = i.createImageData(a, a);
				return s.qrToImageData(c.data, e, o),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, r, a), i.putImageData(c, 0, 0), r
			}, t.renderToDataURL = function(e, n, s) {
				var o = s;
				void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
				var r = t.render(e, n, o),
					a = o.type || "image/png",
					i = o.rendererOpts || {};
				return r.toDataURL(a, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, t) {
				var n = e.a / 255,
					s = t + '="' + e.hex + '"';
				return n < 1 ? s + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : s
			}

			function r(e, t, n) {
				var s = e + t;
				return void 0 !== n && (s += " " + n), s
			}
			t.render = function(e, t, n) {
				var a = s.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					l = i + 2 * a.margin,
					d = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + o(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var s = "", o = 0, a = !1, i = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || a || (a = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (s += a ? r("M", l + n, .5 + d + n) : r("m", o, 0), o = 0, a = !1), l + 1 < t && e[c + 1] || (s += r("h", i), i = 0)) : o++
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
					o = e.scale || 4;
				return {
					width: s,
					scale: s ? 4 : o,
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
				for (var o = n.modules.size, r = n.modules.data, a = t.getScale(o, s), i = Math.floor((o + 2 * s.margin) * a), c = s.margin * a, l = [s.color.light, s.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = s.color.light;
						if (d >= c && u >= c && d < i - c && u < i - c) p = l[r[Math.floor((d - c) / a) * o + Math.floor((u - c) / a)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/node_modules/isarray/index.js");
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
			var o = r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function r(e, t, n) {
				return r.TYPED_ARRAY_SUPPORT || this instanceof r ? "number" == typeof e ? c(this, e) : function(e, t, n, s) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, s) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (s || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === n && void 0 === s ? new Uint8Array(t) : void 0 === s ? new Uint8Array(t, n) : new Uint8Array(t, n, s);
						r.TYPED_ARRAY_SUPPORT ? o.__proto__ = r.prototype : o = l(e, o);
						return o
					}(e, t, n, s);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							s = i(e, n),
							o = s.write(t);
						o !== n && (s = s.slice(0, o));
						return s
					}(e, t);
					return function(e, t) {
						if (r.isBuffer(t)) {
							var n = 0 | a(t.length),
								s = i(e, n);
							return 0 === s.length ? s : (t.copy(s, 0, 0, n), s)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? i(e, 0) : l(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return l(e, t.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new r(e, t, n)
			}

			function a(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return r.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = r.prototype : (null === (n = e) && (n = new r(t)), n.length = t), n
			}

			function c(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | a(t));
				if (!r.TYPED_ARRAY_SUPPORT)
					for (var s = 0; s < t; ++s) n[s] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | a(t.length), s = i(e, n), o = 0; o < n; o += 1) s[o] = 255 & t[o];
				return s
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var s = e.length, o = null, r = [], a = 0; a < s; ++a) {
					if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
						if (!o) {
							if (n > 56319) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							if (a + 1 === s) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							o = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && r.push(239, 191, 189), o = n;
							continue
						}
						n = 65536 + (o - 55296 << 10 | n - 56320)
					} else o && (t -= 3) > -1 && r.push(239, 191, 189);
					if (o = null, n < 128) {
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
				var s = this.length - t;
				if ((void 0 === n || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, s) {
					return function(e, t, n, s) {
						for (var o = 0; o < s && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
						return o
					}(d(t, e.length - n), e, n, s)
				}(this, e, t, n)
			}, r.prototype.slice = function(e, t) {
				var n, s = this.length;
				if ((e = ~~e) < 0 ? (e += s) < 0 && (e = 0) : e > s && (e = s), (t = void 0 === t ? s : ~~t) < 0 ? (t += s) < 0 && (t = 0) : t > s && (t = s), t < e && (t = e), r.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = r.prototype;
				else {
					var o = t - e;
					n = new r(o, void 0);
					for (var a = 0; a < o; ++a) n[a] = this[a + e]
				}
				return n
			}, r.prototype.copy = function(e, t, n, s) {
				if (n || (n = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < n && (s = n), s === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (s < 0) throw new RangeError("sourceEnd out of bounds");
				s > this.length && (s = this.length), e.length - t < s - n && (s = e.length - t + n);
				var o, a = s - n;
				if (this === e && n < t && t < s)
					for (o = a - 1; o >= 0; --o) e[o + t] = this[o + n];
				else if (a < 1e3 || !r.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < a; ++o) e[o + t] = this[o + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
				return a
			}, r.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var s = e.charCodeAt(0);
						s < 256 && (e = s)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var o;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (o = t; o < n; ++o) this[o] = e;
				else {
					var a = r.isBuffer(e) ? e : new r(e),
						i = a.length;
					for (o = 0; o < n - t; ++o) this[o + t] = a[o % i]
				}
				return this
			}, r.concat = function(e, t) {
				if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var o = c(null, t),
					a = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!r.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(o, a), a += l.length
				}
				return o
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
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, o) {
							return "number" == typeof s || "string" == typeof s ? o ? "idx-" + o : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				r = (o(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: o()
					}
				}),
				a = r(),
				i = s.createContext(r()),
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
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"bcfac9a73323"}')
		},
		"./src/graphql/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"93a82be72b63"}')
		},
		"./src/graphql/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/currency/cleanNumber/index.ts");

			function o(e, t) {
				const n = Object(s.a)(e),
					o = parseInt(n) / 100;
				return Math.floor(o) !== o || t ? o.toFixed(2) : String(o)
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n, s) {
				const o = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(o)
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
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
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
				o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const r = Object(s.a)(o.a),
				a = Object(s.a)(o.e),
				i = Object(s.a)(o.b),
				c = Object(s.a)(o.c),
				l = Object(s.a)(o.d)
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
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
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
				f = e => Object(o.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "f", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
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

			function j(e) {
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
					o = Object.keys(s);
				if (o.length) {
					const t = await Object(i.e)(n(), o);
					t.ok && e(Object(y.g)(t.body))
				}
			}, C = (e, t) => async (n, s, {
				apiContext: o
			}) => {
				const r = s().user.account,
					a = s().economics.subredditPremium[e],
					i = !a || a.status !== f.a.Fetched || t;
				if (r && i) {
					const t = await Object(c.a)(o(), e, r.id);
					n(Object(y.i)(t))
				}
			}, w = e => async (t, n, {
				apiContext: s
			}) => {
				const o = n(),
					a = o.user.account,
					i = Object(g.f)(o, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (a && e.badge) {
					let n, o;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: j(e.badge),
						currentAppliedBadges: c,
						userId: a.id
					})), x(e.badge) && n ? o = await Object(l.a)(s(), e.subredditId, n.id, !1) : x(e.badge) || (o = await Object(l.a)(s(), e.subredditId, e.badge.id)), o && !o.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: a.id
					})), Object(r.a)(t, o.error))
				}
			}, k = (e, t) => async (n, s, {
				apiContext: o
			}) => {
				await n(C(e, !0));
				const r = s().economics.subredditPremium[e];
				if (r && r.status === f.a.Fetched) {
					const s = r.data.userOwnedBadges.find(e => e.type === t.id);
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
					if (!c.ok) return void Object(r.a)(t, c.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					o()(c.body, e => {
						e.type === h.a.EmotesPack ? l.emotes.push(e) : e.type === h.a.Giphy && l.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: l
					}))
				}
			}, S = (e, t, n) => async (s, o, {
				apiContext: r
			}) => {
				if (await s(C(e, !0)), n && t) {
					const n = o(),
						r = Object(g.f)(n, e),
						a = Object(v.a)(n, t);
					if (!r[Object(b.d)(a.placement)] && a) {
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
			}, P = e => async (t, n, {
				apiContext: s
			}) => {
				const {
					wallet: o
				} = await Object(i.c)(s(), e);
				t(Object(y.f)({
					wallet: o
				})), await t(C(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "h", (function() {
				return U
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/omit.js"),
				r = n.n(o),
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
				j = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/endpoints/gold/productOfferPurchase.ts");
			const C = () => s.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				k = (e, t, n) => async (o, r, {
					gqlContext: a
				}) => {
					const c = i()(),
						l = await Object(E.c)(a(), c, e, t, n);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(w(t));
						if (n) return n.id
					}
					throw new Error((() => s.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, O = (e, t, n, o, r, a) => async (c, l, {
					gqlContext: d
				}) => {
					const u = l(),
						m = () => c(Object(f.stripeApiError)(s.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						b = r === y.c.Premium,
						h = r === y.c.Powerups,
						x = {};
					if (h && a) x.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (b) {
						const e = Object(g.b)(u);
						x.premium = {
							pricePackage: e
						}
					}
					let j, C, O = "";
					try {
						O = await c(k(t, o, x))
					} catch (P) {
						return p.c.captureException(P), void(P.message && c(Object(f.stripeApiError)(P.message)))
					}
					c(Object(f.stripeTokenPending)());
					const S = Object(v.y)(u);
					if (S || (j = await c(Object(f.validateAndCreateStripeToken)(e)), C = Object(v.v)(u), j)) try {
						const e = i()(),
							t = S || C ? j && C ? Object(E.e)(d(), e, O, j.id) : S ? Object(E.g)(d(), e, O, S) : null : Object(E.f)(d(), e, O, j.id),
							s = await t;
						if (!s || !s.ok) return void m(); {
							const e = s.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void c(Object(f.stripeApiError)(w(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void m();
							const t = Object(_.i)(l());
							t && (h && a ? c(D({
								subredditId: a,
								powerupsCount: o,
								user: t,
								isAnonymous: n
							})) : b && c(F({
								user: t
							})))
						}
					} catch (P) {
						p.c.captureException(P), m()
					}
				}, S = (e, t, n, s) => async (o, r, {
					gqlContext: a
				}) => {
					let l = "";
					try {
						l = await o(k(e, s, {
							powerUps: {
								subredditId: t,
								isAnonymous: n
							}
						}))
					} catch (m) {
						return p.c.captureException(m), m.message && o(Object(f.paypalApiError)(m.message)), null
					}
					const d = c.a.redditUrl;
					try {
						const e = Object(u.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l,
								s: !0
							}),
							c = Object(u.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l
							}),
							m = i()(),
							p = await Object(E.d)(a(), m, l, e, c);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return o(Object(f.paypalApiError)(w(e.errors))), null;
							const a = Object(_.i)(r());
							if (e.ok) {
								const {
									status: r
								} = e.payment;
								if ("ACTION_REQUIRED" === r) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === r && a) return t && o(D({
									subredditId: t,
									powerupsCount: s,
									user: a,
									isAnonymous: n
								})), null
							}
						}
					} catch (m) {
						p.c.captureException(m)
					}
					return o(Object(f.paypalApiError)(C())), null
				}, P = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					try {
						const s = i()(),
							r = await Object(E.b)(o(), s, e, t);
						if (r && r.ok) {
							const e = r.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(f.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (r) {
						p.c.captureException(r)
					}
					return n(Object(f.paypalApiError)(C())), !1
				}, N = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await Object(E.i)(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(f.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: s
							} = n.data.identity, o = s.map(e => r()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(o)), o[0] && e(Object(f.selectSavedCard)(o[0].cardId))
						} else e(Object(f.stripeApiError)(s.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						p.c.captureException(o), e(Object(f.savedCardsSuccess)([]))
					}
				}, I = e => async (t, n, {
					gqlContext: s
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await Object(E.h)(s(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: o
							} = n.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(w(o))
					} catch (o) {
						p.c.captureException(o)
					}
				}, A = Object(m.a)(h.N), T = Object(m.a)(h.O), M = Object(m.a)(h.P), R = e => async (t, n) => {
					await t(A(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, B = (e, t, n) => async (o, r, {
					gqlContext: a
				}) => {
					o(T({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const r = await Object(E.a)(a(), e);
						if (r.ok) {
							const e = r.body,
								{
									errors: s
								} = e.data.cancelEconRecurringPayment;
							if (s && s.length) return void o(R(s[0].message));
							o(M({
								subredditId: t,
								allocatedAt: n
							}))
						} else o(R(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), o(R(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, L = Object(m.a)(h.R), D = e => async (t, n) => {
					t(L(e)), t(Object(x.h)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(j.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(j.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(m.a)(h.V), U = Object(m.a)(h.Z)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/Gold/ProductOffer.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				d = n("./src/graphql/operations/GlobalProductOffers.json"),
				u = n("./src/graphql/operations/PremiumProductOfferSubscriptions.json"),
				m = n("./src/graphql/operations/ProductOffers.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var b = n("./src/reddit/selectors/gold/productOffers.ts"),
				h = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(o.a)(h.cb),
				g = Object(o.a)(h.bb),
				v = Object(o.a)(h.ab),
				_ = Object(o.a)(h.Y),
				y = Object(o.a)(h.X),
				x = Object(o.a)(h.W),
				j = Object(o.a)(h.Cb),
				E = Object(o.a)(h.Ab),
				C = Object(o.a)(h.Bb),
				w = Object(o.a)(h.Fb),
				k = Object(o.a)(h.Eb),
				O = Object(o.a)(h.Db),
				S = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, P = (e, t) => async n => {
					e === i.c.Premium ? n(I()) : t && n(N(e, t))
				}, N = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					const a = o();
					if (!Object(b.g)(a, {
							subredditId: t,
							type: e
						})) {
						n(f());
						try {
							const s = await ((e, t, n, s) => Object(p.a)(e, {
								...m,
								variables: {
									subredditId: t,
									types: n,
									includeGlobal: s
								}
							}))(r(), t, [e], !0);
							if (s.ok) {
								const e = s.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: o || [],
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
				}, I = () => async (e, t, {
					gqlContext: n
				}) => {
					var o, a;
					const c = i.c.Premium;
					e(_());
					try {
						const t = await ((e, t) => Object(p.a)(e, {
							...d,
							variables: {
								productTypes: t
							}
						}))(n(), [c]);
						if (t.ok) {
							const n = t.body;
							if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) throw new Error(n.errors[0].message);
							return void e(y({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						r.c.captureMessage(t), e(x(t)), e(S(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var o, a, i;
					e(j());
					try {
						const t = await (e => Object(p.a)(e, u))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) throw new Error(n.errors[0].message);
							return void e(C({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.subscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						r.c.captureException(c);
						const t = c.message ? c.message : s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(E(t)), e(S(t))
					}
				}, T = e => async (t, n, {
					gqlContext: o
				}) => {
					var r;
					t(w(e));
					try {
						const n = await Object(l.a)(o(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const s = n.body,
								{
									errors: o
								} = s.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(O({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (r = a.message) && void 0 !== r ? r : s.fbt._("Something went wrong", null, {
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
				return j
			})), n.d(t, "deleteSavedCard", (function() {
				return E
			})), n.d(t, "savedCardsPending", (function() {
				return C
			})), n.d(t, "savedCardsSuccess", (function() {
				return w
			})), n.d(t, "loadSavedCards", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/sentry/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(r.a)(i.B),
				d = Object(r.a)(i.w),
				u = Object(r.a)(i.b),
				m = Object(r.a)(i.y),
				p = Object(r.a)(i.a),
				b = Object(r.a)(i.E),
				h = Object(r.a)(i.G),
				f = Object(r.a)(i.F),
				g = Object(r.a)(i.D),
				v = e => async (t, n) => {
					const o = n(),
						r = Object(c.h)(o),
						a = Object(c.l)(o),
						{
							token: i,
							error: l
						} = await e.createToken({
							name: r,
							address_zip: a
						});
					if (r.trim()) {
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
				}, _ = Object(r.a)(i.x), y = Object(r.a)(i.H), x = Object(r.a)(i.C), j = Object(r.a)(i.g), E = e => async (t, n, {
					apiContext: s
				}) => {
					t(j(e));
					try {
						const t = await Object(a.a)(s(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (r) {
						o.c.captureException(r)
					}
				}, C = Object(r.a)(i.z), w = Object(r.a)(i.A), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(C());
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
						o.c.captureException(s), e(w([]))
					}
				}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/governance/community.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(s.a)(r.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: s
				}) => {
					const r = await Object(o.a)(s(), {
						subredditId: e
					});
					r.ok && t(a({
						subredditId: e,
						...r.body
					}))
				}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/extractQueryParams/index.ts"),
				i = n("./src/lib/filterQueryParams/index.ts"),
				c = n("./src/lib/pageTitle.ts"),
				l = n("./src/reddit/actions/chat/userSettings.ts"),
				d = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				u = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var m = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = n("./src/reddit/actions/externalAccount.ts"),
				b = n("./src/reddit/actions/gold/powerups.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/config.ts"),
				v = n("./src/lib/makeApiRequest/index.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			n("./src/reddit/models/Toast/index.ts");
			var y = n("./src/reddit/selectors/notificationPrefs.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/notifications/constants.ts");
			const E = Object(h.a)(j.c),
				C = Object(h.a)(j.b),
				w = Object(h.a)(j.a),
				k = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(x.i)(s)) return;
					const o = Object(y.b)(s),
						a = Object(y.a)(s);
					if (o || a) return;
					e(E());
					const i = await (e => Object(v.a)(e, {
						endpoint: Object(_.a)(`${g.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: r.eb.GET
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
						e(C({
							preferences: t
						}))
					} else e(w(i.error))
				};
			Object(h.a)(j.f), Object(h.a)(j.e), Object(h.a)(j.d);
			var O = n("./src/reddit/actions/platform.ts"),
				S = n("./src/reddit/actions/preferences.ts"),
				P = n("./src/reddit/actions/profile/index.ts"),
				N = n("./src/reddit/actions/subredditSettings.ts"),
				I = n("./src/reddit/actions/users.ts"),
				A = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/helpers/externalAccount/index.tsx"),
				M = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				R = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				B = n("./src/reddit/selectors/externalAccount.ts");
			const L = e => async (t, n) => {
				await t(Object(I.r)());
				const h = [t(Object(S.x)(!0)), t(Object(m.a)())];
				n().economics.paymentSystems.status === R.a.NotFetched && h.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(u.d)());
					const s = await Object(d.d)(n());
					s.ok ? e(Object(u.c)(s.body)) : e(Object(u.b)({
						error: s.error
					}))
				})())), await Promise.all(h); {
					const e = n();
					if (!Object(x.J)(e)) return Object(M.a)(t, e)
				}
				const {
					page: g = r.Tb.Account
				} = e.params;
				if (g === r.Tb.Gold) return void t(Object(o.c)("/settings/premium"));
				const v = [];
				g === r.Tb.Profile && (v.push(t(Object(P.a)())), v.push(t(Object(N.g)()))), g === r.Tb.Account && v.push(t(Object(p.o)())), g === r.Tb.Notifications && v.push(t(k())), g !== r.Tb.Privacy && g !== r.Tb.Messaging || v.push(t(Object(l.b)())), g === r.Tb.Premium && (v.push(t(Object(P.a)())), v.push(t(Object(b.i)(!0)))), await Promise.all(v); {
					const e = n(),
						r = e.platform.currentPage,
						{
							url: c
						} = r,
						l = Object(a.a)(c).get(A.d);
					if (l && (t(Object(o.c)(Object(i.a)(c, [A.d]))), Object(B.a)(e))) {
						const e = s.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(f.f)({
							text: e
						})), Object(T.b)(l)
					}
				}
				t(Object(O.l)({
					title: Object(c.h)()
				}))
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = n("./src/reddit/helpers/routeKey/index.ts"),
				r = n("./src/reddit/helpers/trackers/screenview.ts"),
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
					u = Object(o.b)(l, n, d);
				u && a.c.has(u) && Object(r.k)(l, n, i.TimerType.InApp, a.c.end(u))
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(a.b, {
				className: Object(r.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
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
				o = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: c.a.container
			}, o.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, o.a.createElement(l.b, null)), o.a.createElement(l.h, null, o.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), o.a.createElement(l.k, null, e.message && o.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && o.a.createElement("div", {
				className: c.a.text
			}, e.children), o.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && o.a.createElement(a.l, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), o.a.createElement(a.i, {
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
				o = n.n(s);
			const {
				fbt: r
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return o.a.createElement("a", {
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
			var s, o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/currency/centsToDollars/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/helpers/governance/tokens.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const h = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return b.fbt._("{price}/mo", [b.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				f = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
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
			}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(u.a, {
				className: v.a.token,
				subredditId: e
			}), t), x = Object(i.c)({
				tokenDisplayConversion: p.m,
				tokenName: p.n
			});
			t.a = Object(a.b)(x)(e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: o,
					subredditId: a,
					tokenDisplayConversion: i,
					tokenName: u
				} = e, p = e.dollarPrice && `$${Object(l.a)(e.dollarPrice,!0)}`, b = e.tokenPrice && Object(d.a)(Object(m.b)(e.tokenPrice, i)) + (n ? "" : " " + u);
				if (!p && !b) return null;
				const g = o ? s.Monthly : s.Once;
				return r.a.createElement("span", {
					className: Object(c.a)(t, v.a.price)
				}, p && b ? _._("{dollar-price} or {point-price}", [_._param("dollar-price", h(p, g)), _._param("point-price", r.a.createElement(y, {
					subredditId: a,
					pointPrice: h(b, g)
				}))], {
					hk: "2Gif0l"
				}) : p ? f(p, g) : b ? r.a.createElement(y, {
					subredditId: a,
					pointPrice: f(b, g)
				}) : null)
			})
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: Object(r.a)(n.container, e.className)
				}, e.subreddit ? o.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : o.a.createElement(c.a, {
					className: n.crown
				}), o.a.createElement(a.a, {
					className: n.bling1
				}), o.a.createElement(a.a, {
					className: n.bling2
				}), o.a.createElement(a.a, {
					className: n.bling3
				}), t ? o.a.createElement("img", {
					className: n.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : o.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: s
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(a.c)({
				tokenSymbol: l.o
			});
			t.a = Object(r.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${i.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return o.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: n
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
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(i);

			function l(e) {
				const {
					index: t,
					children: n,
					color: s
				} = e, i = s && Object(a.a)(s, void 0, r.b.white);
				return o.a.createElement("div", {
					className: c.a.bullet
				}, o.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: s,
						color: i
					}
				}, o.a.createElement("span", {
					className: c.a.number
				}, t)), o.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/lib/browser.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
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
					const e = await o.a.toDataURL(this.props.url, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return o.a.createElement(r.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, o.a.createElement(a.a, {
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
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? o.a.createElement(o.a.Fragment, null, e.children) : null;
			t.b = Object(r.a)({
				ErrorComponent: c,
				getComponent: () => Object(a.a)(() => Promise.all([n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
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
				return C
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
					return e.consumers.length ? o.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && o.a.createElement("span", {
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
				const n = Object(h.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(r.b)(() => Object(a.a)(g, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => o.a.createElement(p, {
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
			var y = Object(r.b)(() => Object(a.a)(_, e => e))(e => o.a.createElement(p, {
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
			var x = Object(r.b)(() => Object(a.c)({
					subreddit: f.T
				}))(e => o.a.createElement(p, {
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
				j = n("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(j.a)(), r = Object(s.useMemo)(() => ({
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
				return o.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				})
			};
			var C = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: r
				} = Object(j.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: r,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, r]);
				return o.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var w = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(j.a)(), r = Object(s.useMemo)(() => ({
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
				return o.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				})
			};
			var k = Object(r.b)(() => Object(a.c)({
				subreddit: f.T
			}))(e => o.a.createElement(p, {
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
			var O = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => o.a.createElement(p, {
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
			var S = Object(r.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
					subredditId: t
				}) : null
			}))(e => o.a.createElement(p, {
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
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				d = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				b = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				h = n("./src/reddit/icons/svgs/Top/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.m.less"),
				g = n.n(f);
			const v = {
					[a.R.BEST]: d.a,
					[a.R.HOT]: m.a,
					[a.R.NEW]: p.a,
					[a.R.CONTROVERSIAL]: u.a,
					[a.R.TOP]: h.a,
					[a.R.RISING]: b.a,
					[a.R.AWARDED]: l.a
				},
				_ = {
					[a.R.BEST]: "best",
					[a.R.HOT]: "hot",
					[a.R.NEW]: "new",
					[a.R.CONTROVERSIAL]: "controversial",
					[a.R.TOP]: "top",
					[a.R.RISING]: "rising",
					[a.R.AWARDED]: "award"
				};

			function y({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.a)() && void 0 !== _[n]) return o.a.createElement(c.a, {
					name: _[n],
					isFilled: t,
					className: Object(r.a)(e, g.a.iconStyles)
				});
				const s = v[n];
				return s ? o.a.createElement(s, {
					className: Object(r.a)(e, g.a.iconStyles)
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
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
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
				return de
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = r.a.div("dynamicTwoCol", c.a),
				d = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./src/lib/humanizeDate/index.ts"),
				h = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/lib/timeAgo/index.ts"),
				g = n("./src/reddit/contexts/InsideOverlay.tsx"),
				v = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				y = n("./src/reddit/icons/svgs/User/index.tsx"),
				x = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/tooltip.ts"),
				C = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				k = n.n(w);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = r.a.div("Container", k.a),
				P = r.a.div("Body", k.a),
				N = r.a.h5("Title", k.a),
				I = r.a.span("Label", k.a);
			class A extends o.a.Component {
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
						tooltipId: r
					} = this.props, a = r && s ? {
						id: r,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(S, null, o.a.createElement(N, null, n), o.a.createElement(P, null, e, o.a.createElement(I, O({
						key: "label"
					}, a), t)), r && s && o.a.createElement(C.c, {
						caretOnTop: !0,
						tooltipId: r,
						text: s
					}))
				}
			}
			var T = Object(m.b)(null, e => ({
					toggleTooltip: t => e(Object(E.h)({
						tooltipId: t
					}))
				}))(Object(g.b)(A)),
				M = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				R = n.n(M);
			const B = Object(p.a)(x.j, (e, {
					profileName: t
				}) => Object(j.tb)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				L = r.a.div("Container", R.a);

			function D(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var F = Object(m.b)(B)(Object(g.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: n,
						profileCreated: s,
						isOverlay: r,
						commentKarma: a,
						postKarma: i,
						totalKarma: c,
						subscribers: l
					} = e, d = D(r, "karma"), m = D(r, "cakeday"), p = `${u.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[u.fbt._plural(i,"number",Object(h.b)(i,{displayFull:!0}))],{hk:"husfU"})}\n${u.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[u.fbt._plural(a,"number",Object(h.b)(a,{displayFull:!0}))],{hk:"26iPTL"})}\n${u.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[u.fbt._plural(t,"number",Object(h.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${u.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[u.fbt._plural(n,"number",Object(h.b)(n,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return o.a.createElement(L, null, o.a.createElement(T, {
						icon: o.a.createElement(_.a, {
							className: R.a.icon,
							key: "karma"
						}),
						label: Object(h.b)(c, {
							displayFull: !0
						}),
						title: u.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: d,
						tooltip: p
					}), o.a.createElement(T, {
						icon: o.a.createElement(v.a, {
							className: R.a.icon,
							key: "cakeDay"
						}),
						label: Object(b.a)(s, !0),
						title: u.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: m,
						tooltip: Object(f.d)(s)
					}), l > 0 && o.a.createElement(T, {
						icon: o.a.createElement(y.a, {
							className: R.a.icon,
							key: "followers"
						}),
						title: u.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(h.b)(l, {
							displayFull: !0
						})
					}))
				})),
				U = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				H = n.n(U),
				W = n("./src/config.ts"),
				z = n("./src/reddit/controls/InternalLink/index.tsx"),
				q = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				G = n("./src/reddit/controls/OutboundLink/index.tsx"),
				V = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				J = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				K = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Q = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				X = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				$ = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				ee = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				se = n.n(ne);
			var oe = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: n,
					isDeletingBanner: s,
					isDeletingIcon: r,
					isEmployee: a,
					isGold: i,
					isNSFW: c,
					isOwnProfile: l,
					onClickSnoovatar: d,
					onDeleteBanner: m,
					onDeleteIcon: p,
					profileIcon: b,
					title: h,
					userCreated: f,
					username: g,
					url: v
				}) => o.a.createElement(o.a.Fragment, null, o.a.createElement(X.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: g,
					isDeletingBanner: !!s,
					onDeleteBanner: m
				}), o.a.createElement("div", {
					className: te.a.SnooIconWrapper
				}, l || !b || c ? o.a.createElement(Z.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				}) : o.a.createElement(G.b, {
					isSponsored: !1,
					href: b,
					source: null
				}, o.a.createElement(Z.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				})), t && !n && (r ? o.a.createElement(q.a, {
					sizePx: 20,
					className: se.a.loadingIcon
				}) : o.a.createElement(Y.a, {
					className: se.a.closeIcon,
					onClick: p
				}))), !t && l && o.a.createElement(z.a, {
					to: "/settings/profile",
					className: te.a.settingsLink
				}, o.a.createElement(K.a, {
					className: se.a.settingsIcon
				})), h && o.a.createElement("h4", {
					className: te.a.userTitle
				}, h), o.a.createElement($.a, {
					className: te.a.userName,
					username: g,
					userCreated: f,
					url: v
				}), a && o.a.createElement(V.a, {
					className: te.a.adminIcon,
					title: u.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && o.a.createElement("a", {
					title: u.fbt._("{username} has Reddit Premium", [u.fbt._param("username", g)], {
						hk: "3Fylv"
					}),
					href: `${W.a.redditUrl}/premium`
				}, o.a.createElement(J.a, {
					className: te.a.premiumIcon
				})), l && o.a.createElement(Q.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				re = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var ae = ({
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: n,
				isDefaultIcon: s,
				isDeletingBanner: r,
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
			}) => f ? o.a.createElement(re.a, {
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: n,
				isDeletingBanner: r,
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
			}) : o.a.createElement(oe, {
				bannerBackgroundImage: e,
				editMode: n,
				isDefaultIcon: s,
				isDeletingBanner: r,
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
			});
			const ie = r.a.wrapped(a.b, "Widget", H.a),
				ce = r.a.div("Description", H.a),
				le = r.a.wrapped(l, "Actions", H.a);
			class de extends o.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: n
					} = this.props;
					return e ? o.a.createElement(d.a, {
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
						footer: r,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOverlay: l,
						isOwnProfile: d,
						profileIcon: u,
						publicDescription: m,
						snoovatarUrl: p,
						title: b,
						url: h,
						userCreated: f,
						username: g,
						isDefaultIcon: v,
						isDeletingIcon: _,
						isDeletingBanner: y,
						onClickSnoovatar: x,
						onDeleteIcon: j,
						onDeleteBanner: E,
						prefersReducedAnimations: C,
						editMode: w
					} = this.props;
					return o.a.createElement(ie, {
						className: s
					}, o.a.createElement(ae, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: w,
						isDefaultIcon: v,
						isDeletingBanner: y,
						isDeletingIcon: _,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: x,
						onDeleteBanner: E,
						onDeleteIcon: j,
						prefersReducedAnimations: C,
						profileIcon: u,
						title: b,
						userCreated: f,
						username: g,
						url: h,
						snoovatarUrl: p
					}), o.a.createElement(ce, null, m), o.a.createElement(F, {
						profileName: g,
						isOverlay: l
					}), this.renderAwardedLastMonth(), o.a.createElement(le, null, e), r)
				}
			}
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				u = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = n.n(u);
			class p extends r.a.Component {
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
						isNSFW: o,
						isProfileIdCard: a,
						userName: d
					} = this.props, {
						isUpdating: u
					} = this.state, p = r.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: o,
						userName: d
					});
					return t && Object(l.e)(t) === d ? r.a.createElement(i.a, {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, n) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us"
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", l({}, d, {
					className: Object(r.a)(c.a.container, n)
				}), a ? o.a.createElement("div", {
					className: Object(r.a)(c.a.tooltip, i, s ? c.a.below : c.a.above)
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
				tertiaryBtn: "_3yDGs2XJxcsMFCZLDmw61k"
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
			const o = Object(s.a)({
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
			t.a = o
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				j = p.a.p("H", m.a),
				E = p.a.p("P", m.a),
				C = p.a.wrapped(l.a, "Input", m.a),
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
						return r.a.createElement(d.k, null, r.a.createElement(j, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), r.a.createElement(k, null, r.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), r.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && r.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(O).map((e, t) => r.a.createElement("span", {
							key: e
						}, !!t && ", ", r.a.createElement("a", {
							href: O[e],
							target: "_blank"
						}, S[e] && S[e]()))))), r.a.createElement(x, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), r.a.createElement(y, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), r.a.createElement(x, null, s.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), r.a.createElement(C, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: s.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), r.a.createElement(C, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: s.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), r.a.createElement(w, null, r.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), r.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), r.a.createElement(_, null, r.a.createElement(v, {
							onClick: e.exit
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), r.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => s.fbt._("{text with URL}", [s.fbt._param("text with URL", t ? r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", r.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : r.a.createElement(r.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", r.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => r.a.createElement(d.k, null, r.a.createElement(j, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), r.a.createElement(E, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					}, s.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => r.a.createElement(d.k, null, r.a.createElement(j, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), r.a.createElement(_, null, r.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("Back", null, {
						hk: "1P3x9"
					})), r.a.createElement(g, {
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
					return r.a.createElement(b, null, r.a.createElement(f, {
						onClick: e.exit
					}, r.a.createElement(d.b, null)), r.a.createElement(d.h, null, r.a.createElement(h, null, s.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(a.a)(P)
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
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
				r = Object(s.a)({
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
				return oe
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/moment/moment.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/humanizeDate/index.ts"),
				p = n("./src/reddit/actions/gold/productOffers.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/ConfirmModal/index.tsx"),
				f = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/gold/powerups.ts")),
				g = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/higherOrderComponents/asModal/index.tsx"),
				y = n("./src/reddit/actions/gold/powerups.ts"),
				x = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				j = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = n("./src/reddit/controls/TextButton/index.tsx"),
				C = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = Object(_.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: s,
						subredditInfo: o
					} = e, r = Object(l.d)();
					return c.a.createElement(j.d, {
						className: t
					}, c.a.createElement(j.h, null, c.a.createElement(C.a, null, c.a.createElement(j.p, null, w._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), c.a.createElement(E.a, {
						onClick: s
					}, c.a.createElement(j.b, null)))), c.a.createElement(j.k, null, c.a.createElement(j.o, null, w._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [w._param("subreddit name", o.prefixedName)], {
						hk: "2EKYNO"
					}))), c.a.createElement(j.f, null, c.a.createElement(j.q, {
						onClick: () => {
							n.isPremium ? r(Object(y.f)(o.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : r(Object(x.a)(n.id, o.id, n.allocatedAt)), s()
						},
						"data-redditstyle": !0
					}, w._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				O = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				S = n.n(O);

			function P(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var N = function(e) {
					const [t, n] = Object(i.useState)(!1), {
						className: s,
						allocation: r
					} = e, {
						allocatedAt: a,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: h
					} = r, f = P(b), _ = P(a), y = P(l), {
						prefixedName: x
					} = p, j = _ ? o.fbt._("Subscribed {date}.", [o.fbt._param("date", _)], {
						hk: "24RAUK"
					}) : "", E = y ? o.fbt._("You can cancel after {date}.", [o.fbt._param("date", y)], {
						hk: "48A2TC"
					}) : "", C = f ? o.fbt._("Will be renewed on {date}.", [o.fbt._param("date", f)], {
						hk: "2kYkAv"
					}) : "", w = f ? o.fbt._("Still active until {date}.", [o.fbt._param("date", f)], {
						hk: "IZweZ"
					}) : "", O = m ? u ? j : `${j} ${E}` : d ? `${j} ${C}` : `${j} ${w}`, N = m ? o.fbt._("{powerups count} Reddit Premium powerup/monthly", [o.fbt._param("powerups count", h.toLocaleString())], {
						hk: "4iP1Np"
					}) : o.fbt._("{powerups count} powerup/monthly", [o.fbt._param("powerups count", h.toLocaleString())], {
						hk: "11DNVJ"
					}), I = m && u || !m && d;
					return c.a.createElement("div", {
						className: Object(g.a)(s, S.a.container),
						title: O
					}, c.a.createElement("div", {
						className: S.a.allocationName
					}, o.fbt._("{subreddit name} Powerup", [o.fbt._param("subreddit name", x)], {
						hk: "4qAoO"
					})), c.a.createElement("div", {
						className: S.a.details
					}, N), c.a.createElement(v.o, {
						className: S.a.button,
						disabled: !I,
						onClick: () => n(!0)
					}, m || I ? o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : o.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && c.a.createElement(k, {
						withOverlay: !0,
						allocation: r,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				I = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				A = n.n(I);
			var T = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement("div", {
						className: A.a.title
					}, o.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => c.a.createElement(N, {
						allocation: e,
						className: A.a.allocation,
						key: e.allocatedAt
					})))
				},
				M = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				R = n.n(M);

			function B(e) {
				return c.a.createElement("header", {
					className: Object(g.a)(e.className, R.a.container)
				}, c.a.createElement("div", {
					className: R.a.title
				}, o.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), c.a.createElement("div", {
					className: R.a.subtitle
				}, o.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var L = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				D = n.n(L);
			const F = Object(u.c)({
				allocationByKey: f.t
			});
			var U = Object(l.b)(F)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? c.a.createElement("div", {
						className: e.className
					}, c.a.createElement(B, {
						className: D.a.header
					}), c.a.createElement(T, {
						allocationList: n
					})) : null
				})),
				H = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				W = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				z = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				G = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/higherOrderComponents/makeAsync.tsx"),
				Y = n("./src/lib/loadWithRetries/index.ts"),
				J = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var K = Object(V.a)({
					getComponent: () => Object(Y.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(J.d)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Z = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Q = n("./src/reddit/selectors/activeModalId.ts"),
				X = n("./src/reddit/selectors/experiments/econ/premiumMigration.ts"),
				$ = n("./src/reddit/selectors/gold/productOffers.ts"),
				ee = n("./src/reddit/selectors/user.ts"),
				te = n("./src/reddit/components/Settings/index.m.less"),
				ne = n.n(te);
			const se = "https://www.paypal.com/myaccount/autopay",
				oe = "update_card_modal_id",
				re = Object(u.c)({
					cancelSubscriptionModalIsOpen: Object(Q.b)("settings_optout_modal_id"),
					goldExpiration: ee.n,
					hasAndroidSubscription: ee.o,
					hasIOSSubscription: ee.t,
					hasStripeSubscription: ee.x,
					hasPaypalSubscription: ee.v,
					isGold: ee.r,
					isPremiumSubscriber: ee.s,
					isPremiumMigrationEnabled: X.a,
					premiumProductOfferSubscription: $.e,
					premiumProductOfferSubscriptionIsCanceled: $.d,
					updateCardModalIsOpen: Object(Q.b)(oe)
				}),
				ae = Object(l.b)(re, e => ({
					navigateToPurchasePremium: () => e(Object(d.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(b.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(b.i)(oe)),
					requestProductOfferSubscriptions: () => e(Object(p.b)()),
					requestCancelProductOfferSubscription: t => e(Object(p.a)(t))
				})),
				ie = (e, t, n) => e && !n ? o.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [o.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : o.fbt._("Your Premium membership is valid until {date}.", [o.fbt._param("date", t)], {
					hk: "4m4zaE"
				});
			class ce extends c.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(Z.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(Z.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(Z.f)() : Object(Z.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(Z.g)() : Object(Z.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(Z.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(Z.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(Z.j)()), this.props.requestProductOfferSubscriptions()
				}
				async navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t,
						isPremiumMigrationEnabled: n,
						premiumProductOfferSubscription: o,
						requestCancelProductOfferSubscription: r,
						toggleCancelSubscriptionModal: a,
						requestProductOfferSubscriptions: i
					} = this.props;
					if (e) window.location.href = se;
					else if (t)
						if (n && (null == o ? void 0 : o.id)) {
							await r(o.id) && (a(), i())
						} else window.location.href = `${s.a.redditUrl}/gold/subscription`
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: n,
						hasIOSSubscription: s,
						hasPaypalSubscription: r,
						hasStripeSubscription: i,
						isGold: l,
						isPremiumSubscriber: d,
						isPremiumMigrationEnabled: u,
						premiumProductOfferSubscription: p,
						premiumProductOfferSubscriptionIsCanceled: b,
						isResponsiveSettingsEnabled: f,
						toggleUpdateCardModal: g,
						updateCardModalIsOpen: v,
						prefs: {
							highlightComments: _,
							hideAds: y
						}
					} = this.props, x = n || s, j = u ? Boolean(p) : d, E = u ? a()(null == p ? void 0 : p.expiresAt).format("MMMM DD, YYYY.") : Object(m.a)(t || 0, !0);
					return c.a.createElement(W.a, null, c.a.createElement(H.b, {
						className: ne.a.premiumHeading,
						isResponsiveSettingsEnabled: f
					}, o.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), c.a.createElement(H.a, {
						className: ne.a.premiumExpirationString
					}, o.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), c.a.createElement(z.a, null, o.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), c.a.createElement(H.a, {
						className: ne.a.premiumExpirationString
					}, l ? ie(j, E, b) : o.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!j || b) && c.a.createElement(q.f, {
						label: l ? o.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : o.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), i && c.a.createElement(q.a, {
						label: o.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: g
					}), r && c.a.createElement(q.f, {
						label: o.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), d && !x && !b && c.a.createElement(q.a, {
						label: o.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), l && c.a.createElement(c.a.Fragment, null, c.a.createElement(z.a, null, o.fbt._("premium features", null, {
						hk: "20MX2a"
					})), c.a.createElement(q.o, {
						on: y,
						disabled: !l,
						onClick: this.onHideAdsToggle,
						label: o.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: o.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), c.a.createElement(q.o, {
						on: _,
						disabled: !l,
						onClick: this.onHighlightCommentsToggle,
						label: o.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: o.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), v && c.a.createElement(K, null), e && c.a.createElement(h.a, {
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
					}), c.a.createElement(U, null))
				}
			}
			t.b = ae(Object(G.c)(ce))
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.input("Input", i.a),
				d = c.a.label("Label", i.a),
				u = c.a.button("Button", i.a),
				m = c.a.div("Wrapper", i.a);
			class p extends o.a.Component {
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
					return o.a.createElement(m, {
						className: Object(r.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, o.a.createElement(l, {
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
					}), o.a.createElement(d, null, s), a && o.a.createElement(u, {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement(d, l({}, s, {
					className: Object(r.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = a.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				a = n("./src/reddit/models/Image/index.tsx");
			class i extends o.a.Component {
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
					return c ? o.a.createElement(r.a, {
						className: e
					}) : o.a.createElement(r.b, {
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
				o = n.n(s),
				r = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				a = n.n(r),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", a.a),
				l = i.a.div("Content", a.a),
				d = i.a.div("Sidebar", a.a);
			t.a = e => o.a.createElement(c, {
				className: e.className
			}, o.a.createElement(l, null, e.children), o.a.createElement(d, null, e.sidebar))
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
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.h3("Component", o.a)
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
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return q
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "n", (function() {
				return Q
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return re
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
				return Ee
			})), n.d(t, "h", (function() {
				return Ce
			})), n.d(t, "c", (function() {
				return we
			})), n.d(t, "e", (function() {
				return ke
			})), n.d(t, "g", (function() {
				return Oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
			const j = g.a.span("Wrapper", y.a),
				E = g.a.select("Inner", y.a),
				C = g.a.wrapped(v.b, "Caret", y.a);

			function w({
				className: e,
				innerClassName: t,
				...n
			}) {
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return o.a.createElement(j, {
					className: e
				}, o.a.createElement(E, x({
					className: t
				}, n)), o.a.createElement(C, x({
					isSubreddit: !0
				}, s)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				A = n.n(I),
				T = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				R = n("./src/reddit/models/Flair/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				F = n.n(D);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(d.a)(b.a),
				W = g.a.wrapped(P.a, "Circle", F.a),
				z = g.a.h3("Label", F.a),
				q = g.a.wrapped(O.c, "Subtext", F.a),
				G = g.a.wrapped(m.a, "HoverTooltip", F.a),
				V = g.a.div("ControlContainer", F.a),
				Y = g.a.div("TextContainer", F.a),
				J = g.a.div("ActionContainer", F.a),
				K = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: s,
					isNightModeOn: r,
					disabled: a,
					indent: i,
					last: l,
					...d
				}) => o.a.createElement("div", U({}, d, {
					className: Object(c.a)(F.a.Wrapper, e, {
						[F.a.mColumn]: "column" === t,
						[F.a.mDisabled]: !!a,
						[F.a.mIndent]: !!i,
						[F.a.mLast]: !!l,
						[F.a.isCreateCommunity]: !!n,
						[F.a.inModal]: !!s,
						[F.a.isNightModeOn]: !!r
					})
				})),
				Z = g.a.a("Link", F.a),
				Q = g.a.wrapped(Z, "SubtextLink", F.a),
				X = g.a.wrapped(N.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(S.a, "ArrowRight", F.a),
				te = e => o.a.createElement(K, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, o.a.createElement(Y, {
					className: e.textContainerClassName
				}, o.a.createElement(z, null, e.label, e.isRequired && o.a.createElement(W, null)), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				se = g.a.wrapped(ne, "SpoilerFlair", F.a),
				oe = g.a.wrapped(ne, "NSFWFlair", F.a),
				re = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return o.a.createElement(oe, null, "NSFW");
						case R.f.Spoiler:
							return o.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return o.a.createElement(K, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, o.a.createElement(Y, null, o.a.createElement(M.a, null, o.a.createElement("label", {
						htmlFor: t
					}, o.a.createElement(z, null, e.label))), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, o.a.createElement(V, null, e.tooltip && o.a.createElement(G, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), o.a.createElement(k.a, {
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
					isNightModeOn: L.V
				}),
				pe = Object(r.b)(me)(e => o.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, o.a.createElement(Y, {
					style: {
						flex: 5
					}
				}, !e.inModal && o.a.createElement(M.a, null, o.a.createElement(z, null, e.label)), o.a.createElement(q, null, " ", o.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), o.a.createElement(J, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, o.a.createElement(ce, null, o.a.createElement(ie, {
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
				}), o.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => o.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => o.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, o.a.createElement(Y, null, o.a.createElement(M.a, null, o.a.createElement(z, null, e.label)), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, o.a.createElement(V, null, o.a.createElement(T.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => o.a.createElement(K, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, o.a.createElement(Y, null, o.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, o.a.createElement(X, null)), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, o.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, o.a.createElement(ee, null)))),
				fe = e => o.a.createElement(K, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, o.a.createElement(Y, null, o.a.createElement($, {
					onClick: e.onClick
				}, e.label), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, o.a.createElement($, {
					onClick: e.onClick
				}, o.a.createElement(ee, null)))),
				ge = g.a.div("DropdownWrapper", F.a),
				ve = g.a.wrapped(h.b, "DropdownRow", F.a),
				_e = g.a.span("Row", F.a),
				ye = g.a.wrapped(v.b, "DropdownTriangle", F.a),
				xe = g.a.div("DescriptionsRow", F.a),
				je = Object(i.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				Ee = Object(r.b)(je, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => o.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, o.a.createElement(Y, null, o.a.createElement(z, null, e.label), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, (e => o.a.createElement(ge, {
					onClick: e.openDropdown
				}, o.a.createElement(_e, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), o.a.createElement(ye, null), o.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => o.a.createElement(ve, {
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && o.a.createElement(xe, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				Ce = ({
					disabled: e,
					last: t,
					onChange: n,
					...r
				}) => {
					const a = Object(s.useCallback)(e => n(e.target.value), [n]),
						{
							items: i
						} = r;
					return o.a.createElement(K, {
						disabled: e
					}, o.a.createElement(Y, null, o.a.createElement(z, null, r.label), o.a.createElement(q, null, r.subtext)), o.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), o.a.createElement(K, {
						last: t,
						indent: !0,
						disabled: e
					}, o.a.createElement(w, {
						className: "redditStyle",
						disabled: e || r.inputDisabled,
						onChange: a,
						value: r.selected
					}, Object.keys(i).map(e => o.a.createElement("option", {
						key: e,
						value: e
					}, i[e].displayName)))))
				},
				we = e => o.a.createElement(K, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, o.a.createElement(Y, null, o.a.createElement(z, null, e.label), o.a.createElement(q, null, e.subtext)), o.a.createElement(J, null, e.children)),
				ke = e => o.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, o.a.createElement(f.a, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && o.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Oe = e => o.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, o.a.createElement(p.i, {
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
				}), o.a.createElement("div", {
					className: F.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && o.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), e.warning && e.warning, !!e.actionLink && o.a.createElement("div", {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				c = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.wrapped(d.a, "ImageUploadIcon", m.a), h = a.a.div("ImageIconRow", m.a), f = a.a.div("ImageUploadText", m.a), g = a.a.wrapped(i.a, "FileDrop", m.a), v = a.a.div("ContainerUploading", m.a), _ = e => o.a.createElement(v, {
				className: e.className
			}, o.a.createElement(h, null, o.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), o.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), y = a.a.label("Label", m.a);
			t.b = e => o.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => o.a.createElement(y, {
					className: Object(r.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, o.a.createElement(h, null, e.icon || o.a.createElement(b, null)), o.a.createElement(f, null, e.label), o.a.createElement(c.a, {
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
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(o);
			const a = s.a.section("FormPage", r.a),
				i = s.a.h1("HomePageTitle", r.a),
				c = s.a.button("HomePageBreadcrumb", r.a),
				l = s.a.div("HomePageGroup", r.a),
				d = s.a.h1("FormPageTitle", r.a),
				u = s.a.div("FormPageSection", r.a),
				m = s.a.div("FormGroup", r.a),
				p = s.a.h2("FormGroupTitle", r.a),
				b = s.a.div("FormElement", r.a),
				h = s.a.div("FormGroupDescription", r.a),
				f = s.a.div("FormItem", r.a),
				g = s.a.h3("FormElementTitle", r.a),
				v = s.a.div("FormElementDescription", r.a),
				_ = s.a.div("FormElementError", r.a),
				y = s.a.div("FormElementSubGroup", r.a),
				x = s.a.li("FormListItem", r.a)
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
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = s.a.wrapped(o.a, "ModalInput", d.a),
				m = s.a.input("Input", d.a),
				p = s.a.wrapped(c.a, "RadioOn", d.a),
				b = s.a.wrapped(i.a, "RadioOff", d.a),
				h = s.a.wrapped(r.a, "Checkbox", d.a),
				f = s.a.wrapped(a.a, "CheckboxSelected", d.a),
				g = s.a.textarea("Textarea", d.a),
				v = s.a.label("StyledLabel", d.a),
				_ = s.a.input("StyledFileInput", d.a)
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
				return j
			}));
			var s, o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
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
				j = d.a.wrapped(({
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
				C = () => window.pageYOffset || window.scrollY,
				w = 75,
				k = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: m.g
				};
			class O extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = r()(() => {
						this.state.sticky || this.forceUnsticky ? C() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : C() >= w && this.setState({
							sticky: !0
						})
					}, l.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(d);
			const m = a.a.span("UserIconContainer", u.a),
				p = a.a.wrapped(c.a, "UserIcon", u.a),
				b = a.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => r.a.createElement(b, {
				className: e.className,
				to: `${s.a.redditUrl}/user/${e.username}`
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const l = r.a.div("WidgetBackground", c.a),
				d = r.a.wrapped(({
					children: e,
					...t
				}) => o.a.createElement("div", t, o.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = {
					[o.R.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[o.R.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[o.R.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[o.R.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[o.R.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[o.R.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[o.R.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[o.Yb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Yb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Yb.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[o.Yb.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[o.Yb.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[o.Yb.ALL]: () => s.fbt._("All Time", null, {
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
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: a,
						"data-redditstyle": i,
						...c
					} = t, l = ((e, t, n) => {
						const s = !(!t && !n);
						let o = "";
						return o = e ? s ? d.a.mDisabledRedditStyle : d.a.mDisabled : s ? d.a.mActiveRedditStyle : d.a.mActive
					})(s, a, i);
					return o.a.createElement(e, u({
						className: Object(r.a)(d.a.CheckboxIcon, l, n)
					}, c))
				},
				p = m(c.a),
				b = m(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? p : a.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(d.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(d.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
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
					super(...arguments), this.handleMouseMove = o()(() => {
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
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
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
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
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
				o = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(o),
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
				j = n.n(x);
			const E = Object(u.c)({
				activeModalId: b.a
			});
			class C extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`
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
						errorModalBody: o,
						errorModalTitle: r = s.fbt._("Error", null, {
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
						className: Object(m.a)(j.a.wrapper, n)
					}, l.a.createElement("span", {
						className: j.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: j.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const w = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(C),
				k = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: o,
						messages: r = []
					} = e, a = r.length ? r : o ? [o] : [];
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
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				u = o()(Object(i.DropTarget)(d, {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, o.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
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
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, o.a.createElement(p, m({
						innerRef: s
					}, l)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => o.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class _ extends o.a.Component {
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
						errors: r = []
					} = this.props;
					return e.map((e, a) => o.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, o.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[a] && o.a.createElement(i.b, {
						className: u.a.errorText
					}, r[a])))
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
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && o.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && o.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
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
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(o.a)(e, {
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
				a = (e, t) => Object(o.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
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
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function a(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me`,
					method: "get"
				})
			}

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/stripe-sources/${t}`,
					method: "delete"
				})
			}

			function l(e, t) {
				return Object(o.a)(e, {
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
				o = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
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
				return Object(a.a)(Object(o.a)(e, [r.a]), {
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
				o = n.n(s),
				r = n("./src/config.ts"),
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
							endpoint: `${r.a.metaUrl}/product-collections/${t}?types=badge`
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
				return f.ok ? s.products = f.body : s.errors.products = f.error, g.ok ? (o()(s.badges, g.body.badges), s.userOwnedBadges = g.body.userOwnedBadges) : s.errors.userBadges = g.error, s
			}
			const u = (e, t) => Object(l.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "h", (function() {
				return E
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				o = n.n(s),
				r = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				a = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				i = n("./src/graphql/operations/CreateEconOrder.json"),
				c = n("./src/graphql/operations/CreatePaypalPayment.json"),
				l = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				d = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				u = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				m = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				p = n("./src/graphql/operations/UserSavedStripeCards.json"),
				b = n("./src/lib/makeGqlRequest/index.ts");
			const h = (e, t, n, s, r) => {
					const {
						premium: a,
						...c
					} = r, l = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], d = new o.a(l.price).multipliedBy(s).toFixed();
					return Object(b.a)(e, {
						...i,
						variables: {
							input: {
								nonce: t,
								productId: n.id,
								productVersion: n.version,
								pricePackageId: l.id,
								currency: l.currency,
								price: d,
								productsCount: s.toString(),
								...c
							}
						}
					})
				},
				f = (e, t, n, s) => Object(b.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						token: s
					}
				}),
				g = (e, t, n, s) => Object(b.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: n,
						token: s
					}
				}),
				v = (e, t, n, s) => Object(b.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						cardId: s
					}
				}),
				_ = (e, t, n, s, o) => Object(b.a)(e, {
					...c,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: s,
						cancelUrl: o
					}
				}),
				y = (e, t, n, s) => Object(b.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: n,
						token: s
					}
				}),
				x = (e, t) => Object(b.a)(e, {
					...r,
					variables: {
						orderId: t
					}
				}),
				j = e => Object(b.a)(e, {
					...p,
					variables: {}
				}),
				E = (e, t) => Object(b.a)(e, {
					...m,
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: o.eb.GET
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				o = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(o);
			t.a = Object(s.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = () => new BroadcastChannel("external_account"),
				o = e => {
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
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const o = "giphy|",
				r = "|downsized";

			function a(e, t) {
				return o + e + (t ? r : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(o)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function l(e) {
				let t = e.substring(o.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function d(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...d(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return d(e, s.F).map(e => e.id)
			}

			function m(e) {
				return d(e, e => e.e === s.o).map(e => e.u)
			}
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
			const o = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(s.subreddit)(t)
				}),
				r = () => o("view"),
				a = () => o("tap"),
				i = () => o("dismiss"),
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
				o = n("./src/telemetry/index.ts"),
				r = n("./src/telemetry/models/Event.ts");
			const a = e => ({
					...s.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(o.a)({
						...a(e),
						action: r.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(o.a)({
						...a(e),
						action: r.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(o.a)({
						...a(e),
						action: r.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(o.a)({
						...a(e),
						action: r.c.Close,
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
					Object(o.a)({
						...m(e, !0),
						action: r.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(o.a)({
						...m(e, !0),
						action: r.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(o.a)({
						...m(e, !1, t),
						action: r.c.Bail,
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
				o = n("./src/reddit/selectors/user.ts"),
				r = n("./src/telemetry/models/GoldPurchase.ts"),
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
						type: Object(o.s)(e) ? r.GoldPurchaseType.Cancel : r.GoldPurchaseType.GetPremium
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
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(s || (s = {}));
			const r = e => t => ({
					source: "settings",
					action: "connect",
					noun: "sso",
					actionInfo: {
						...o.actionInfo(t),
						type: e
					}
				}),
				a = e => t => ({
					source: "settings",
					action: "disconnect",
					noun: "sso",
					actionInfo: {
						...o.actionInfo(t),
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const d = c.a.wrapped(e => {
				const t = Object(l.a)();
				return o.a.createElement("i", {
					className: `${Object(r.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(r.a, null, e.desc))
			}, "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), o.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, o.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, o.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, o.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, o.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, o.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, o.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
				fill: "#EA4335"
			}))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), o.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 36 36",
				version: "1.1"
			}, o.a.createElement("circle", {
				cx: "18",
				cy: "18",
				fill: "#fff",
				r: "17.5",
				stroke: "inherit"
			}), o.a.createElement("path", {
				clipRule: "evenodd",
				d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
				fill: "inherit",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				j = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				E = n("./src/reddit/components/ConfirmModal/index.tsx"),
				C = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				w = n("./src/reddit/actions/meta.ts"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				S = n("./src/reddit/selectors/sso.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				N = n("./src/lib/validateEmail/index.ts"),
				I = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				T = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				M = n("./src/reddit/icons/svgs/Info/index.tsx"),
				R = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				B = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/models/User/index.ts"),
				D = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				F = n.n(D);
			const U = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(P.i)(e);
						return t && Object(L.e)(t) || ""
					}
				}),
				H = Object(a.b)(U, e => ({
					changeEmail: t => e(Object(x.t)(t)),
					sendResetEmail: t => e(Object(x.w)(t)),
					showErrorToast: t => e(Object(I.f)({
						duration: I.a,
						kind: B.b.Error,
						text: t
					}))
				})),
				W = e => e ? r.a.createElement(T.a, {
					className: Object(u.a)(F.a.image, F.a.success)
				}) : r.a.createElement(R.a, {
					className: Object(u.a)(F.a.image, F.a.error)
				}),
				z = e => e ? s.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : s.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				q = e => e ? s.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : s.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				G = e => e ? s.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : s.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				V = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? r.a.createElement(M.a, {
						className: Object(u.a)(F.a.inputIcon, F.a.error)
					}) : r.a.createElement(T.a, {
						className: Object(u.a)(F.a.inputIcon, F.a.success)
					}) : null
				};
			class Y extends r.a.Component {
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
							enteredEmail: o
						} = this.state, r = Object(N.a)(o, !1), a = r ? "" : s.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: a,
							inputChecked: !0
						}), r && (t ? n({
							curEmail: o,
							name: this.props.username
						}) : e({
							newEmail: o
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
					} = this.state, o = !this.props.email && !e, a = o && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return r.a.createElement("div", {
						className: F.a.container
					}, r.a.createElement("h3", {
						className: F.a.header
					}, s.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), r.a.createElement("div", {
						className: F.a.status
					}, W(e), r.a.createElement("h3", {
						className: F.a.statusText
					}, q(e))), r.a.createElement("p", {
						className: F.a.description
					}, z(e)), r.a.createElement("div", {
						className: F.a.actionContainer
					}, r.a.createElement("div", {
						className: F.a.emailContainer
					}, o ? r.a.createElement(r.a.Fragment, null, r.a.createElement(A.a, {
						className: Object(u.a)(F.a.input, F.a[a]),
						label: s.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), V(this.state), r.a.createElement("h6", {
						className: F.a.errorMsg
					}, n)) : r.a.createElement("p", {
						className: F.a.emailText
					}, G(e), r.a.createElement("span", {
						className: F.a.emailAddress
					}, t))), r.a.createElement(k.i, {
						className: F.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? s.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : s.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var J = H(Y),
				K = n("./src/reddit/components/Settings/modalIds.ts"),
				Z = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				X = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				$ = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const ee = Object.freeze({
					[X.DEFAULT_LOCALE]: Object.freeze({
						bcp47: X.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(C.isoLocaleToFbtLocale)(X.DEFAULT_LOCALE),
						rtl: !1
					}),
					[X.GERMAN_LOCALE]: Object.freeze({
						bcp47: X.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(C.isoLocaleToFbtLocale)(X.GERMAN_LOCALE),
						rtl: !1
					})
				}),
				te = Object.freeze({
					"es-ES": Object.freeze({
						bcp47: "es-ES",
						displayName: "Español",
						englishName: "Spanish",
						fbtLocale: Object(C.isoLocaleToFbtLocale)("es-ES"),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(C.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					"it-IT": Object.freeze({
						bcp47: "it-IT",
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(C.isoLocaleToFbtLocale)("it-IT"),
						rtl: !1
					}),
					"pt-PT": Object.freeze({
						bcp47: "pt-PT",
						displayName: "Português",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(C.isoLocaleToFbtLocale)("pt-PT"),
						rtl: !1
					}),
					[X.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: X.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(C.isoLocaleToFbtLocale)(X.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					})
				}),
				ne = Object.freeze({
					[X.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(C.isoLocaleToFbtLocale)(X.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[X.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(C.isoLocaleToFbtLocale)(X.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[X.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(C.isoLocaleToFbtLocale)(X.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				se = Object(c.a)(P.G, $.b, (e, t) => e || t ? {
					...ee,
					...te,
					...ne
				} : ee);
			var oe = n("./src/reddit/selectors/meta.ts"),
				re = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				ae = n.n(re);
			const ie = Object(c.c)({
					hasVerifiedEmail: P.z,
					isFPR: P.H,
					language: P.T,
					shouldShowCreatePasswordModal: S.d,
					showLanguageSection: O.d.langSelect,
					availableLocales: se,
					locale: oe.i
				}),
				ce = Object(a.b)(ie, e => ({
					changeLanguage: t => e(Object(w.d)(t)),
					openChangeEmailModal: () => e(Object(y.i)(K.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(y.h)(K.l)),
					resendEmail: () => e(Object(x.v)())
				})),
				le = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : r.a.createElement(r.a.Fragment, null, s.fbt._("{email} not verified!", [s.fbt._param("email", e)], {
					hk: "3PanQN"
				}), r.a.createElement(k.g, {
					className: ae.a.tertiaryBtn,
					onClick: n
				}, s.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : s.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var de = ce(({
					changeLanguage: e,
					isFPR: t,
					language: n,
					openChangeEmailModal: a,
					openSSOCreatePasswordForEmailModal: i,
					shouldShowCreatePasswordModal: c,
					showLanguageSection: l,
					toggleChangePasswordModal: d,
					availableLocales: u,
					locale: m,
					...p
				}) => {
					const [b, h] = Object(o.useState)(!1), f = Object(o.useCallback)(async t => {
						h(!0), await e(t), h(!1)
					}, [e]), [g, v] = Object(o.useState)(u);
					Object(o.useEffect)(() => {
						"" !== n && Object.keys(u).find(e => m) || v(e => ({
							...e,
							[n]: Object.freeze({
								bcp47: n,
								displayName: n,
								englishName: n,
								fbtLocale: Object(C.isoLocaleToFbtLocale)(n),
								rtl: !1
							})
						}))
					}, [u, n, m]);
					return t ? r.a.createElement(J, {
						email: p.email
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.a, null, s.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), r.a.createElement(Q.b, {
						actionText: s.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: s.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							c ? i() : a()
						},
						subtext: le(p)
					}), !c && r.a.createElement(Q.b, {
						actionText: s.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: s.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !0,
						onClick: d,
						subtext: s.fbt._("Password must be at least 6 characters long", null, {
							hk: "24bAMu"
						})
					}), l ? r.a.createElement(Q.h, {
						inputDisabled: b,
						id: "lang",
						items: g,
						label: s.fbt._("Display language", null, {
							hk: "3roQUD"
						}),
						onChange: f,
						selected: m,
						subtext: s.fbt._("Select your preferred language for buttons and other text from Reddit. This does not change the language of user generated content. Note: This feature is in alpha testing and will likely change.", null, {
							hk: "q6SvY"
						})
					}) : null)
				}),
				ue = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				me = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				pe = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				be = n("./src/reddit/constants/accountManager.ts"),
				he = n("./src/reddit/contexts/PageLayer/index.tsx"),
				fe = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				ge = n("./src/reddit/selectors/accountManager.ts"),
				ve = n("./src/reddit/selectors/activeModalId.ts"),
				_e = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ye = n("./src/config.ts"),
				xe = n("./src/reddit/helpers/trackers/sso.ts"),
				je = n("./src/reddit/hooks/useTracking.ts"),
				Ee = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				Ce = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				we = n.n(Ce),
				ke = n("./src/lib/lessComponent.tsx");
			const Oe = ke.a.wrapped(Q.c, "ConnectApple", we.a),
				Se = ke.a.wrapped(k.i, "ConnectAppleButton", we.a),
				Pe = ke.a.div("ConnectionInfo", we.a),
				Ne = ke.a.wrapped(k.m, "DisconnectButton", we.a),
				Ie = ke.a.wrapped(Ee.a, "AppleIcon", we.a),
				Ae = ke.a.span("TextAndIconWrapper", we.a);

			function Te(e) {
				return e.issuerId ? (() => r.a.createElement(Q.c, {
					label: s.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, r.a.createElement(Pe, null, r.a.createElement(Ne, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[we.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return r.a.createElement(Oe, {
						className: t,
						label: s.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, r.a.createElement(Se, {
						className: t,
						onClick: e.onConnectClick
					}, r.a.createElement(Ae, null, r.a.createElement(Ie, null), s.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const Me = Object(c.c)({
				issuerId: S.a,
				shouldShowCreatePasswordModal: S.d
			});
			var Re = Object(a.b)(Me, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(y.h)(K.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(y.h)(K.j)),
					openLinkAppleSSOModal: () => e(Object(_.f)()),
					openUnlinkAppleSSOModal: () => e(Object(_.k)())
				}))(e => {
					const t = Object(je.a)();
					return r.a.createElement(Te, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(xe.c)(xe.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(xe.d)(xe.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				Be = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const Le = ke.a.wrapped(Q.c, "ConnectGoogle", we.a),
				De = ke.a.wrapped(k.i, "ConnectGoogleButton", we.a),
				Fe = ke.a.div("ConnectionInfo", we.a),
				Ue = ke.a.wrapped(k.m, "DisconnectButton", we.a),
				He = ke.a.wrapped(Be.a, "GoogleIcon", we.a),
				We = ke.a.span("TextAndIconWrapper", we.a);

			function ze(e) {
				return e.hasGoogleIdentity ? (() => r.a.createElement(Q.c, {
					label: s.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, r.a.createElement(Fe, null, r.a.createElement(Ue, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[we.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return r.a.createElement(Le, {
						className: t,
						label: s.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, r.a.createElement(De, {
						className: t,
						onClick: e.onConnectClick
					}, r.a.createElement(We, null, r.a.createElement(He, null), s.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const qe = Object(c.c)({
				hasGoogleIdentity: S.b,
				shouldShowCreatePasswordModal: S.d
			});
			var Ge = Object(a.b)(qe, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(K.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(y.h)(K.n)),
					openLinkGoogleSSOModal: () => e(Object(_.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.l)())
				}))(e => {
					const t = Object(je.a)();
					return r.a.createElement(ze, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(xe.c)(xe.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(xe.d)(xe.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				Ve = n("./src/reddit/actions/externalAccount.ts"),
				Ye = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Je = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Ke = n("./src/reddit/models/ExternalAccount/index.ts");
			const Ze = ke.a.wrapped(Je.a, "TwitterIcon", we.a),
				Qe = ({
					isFilled: e,
					...t
				}) => r.a.createElement(Ze, t),
				Xe = ke.a.wrapped(Ye.a, "LoadingIcon", we.a),
				$e = ({
					isFilled: e,
					...t
				}) => r.a.createElement(Xe, t),
				et = ke.a.wrapped(Q.c, "ConnectTwitter", we.a),
				tt = ke.a.wrapped(k.m, "DisconnectButton", we.a),
				nt = ke.a.span("Username", we.a),
				st = ke.a.div("ConnectionInfo", we.a);
			var ot = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				rt = n("./src/reddit/selectors/externalAccount.ts");
			const at = Object(c.c)({
					twitterAccount: rt.a,
					isTwitterConnectionPending: rt.b
				}),
				it = Object(a.b)(at, e => ({
					onConnectAccount: t => {
						e(Ve.m(t)), t === Ke.a.Twitter && e((e, t) => ot.b(t()))
					},
					onDisconnectAccount: t => {
						e(Ve.n(t)), t === Ke.a.Twitter && e((e, t) => ot.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => ot.e(n(), t))
				}));
			var ct = Object(he.t)()(it((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Ke.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Ke.a.Twitter)
					};
				return r.a.createElement(o.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return r.a.createElement(Q.c, {
						label: s.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: s.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, r.a.createElement(st, null, r.a.createElement("div", null, r.a.createElement(nt, null, "@", t.username)), r.a.createElement(tt, {
						onClick: n
					}, "(", s.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: o
					} = e, a = Object(u.a)({
						[we.a["m-responsive"]]: n
					}), i = s.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return r.a.createElement(et, {
						className: a,
						label: s.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: s.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, r.a.createElement(k.q, {
						className: we.a.ConnectTwitterButton,
						Icon: o ? $e : Qe,
						text: o ? null : i,
						onClick: t
					}))
				})(), r.a.createElement(Q.o, {
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
			var lt = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return r.a.createElement(o.Fragment, null, r.a.createElement(Z.a, {
					id: "connected-accounts"
				}, s.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), r.a.createElement(ct, e), (() => {
					if (e.shouldRenderSSOAccounts) return r.a.createElement(o.Fragment, null, r.a.createElement(Re, {
						isResponsiveSettingsEnabled: t
					}), r.a.createElement(Ge, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function dt() {
				return (dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ut = Object(c.c)({
				isEmployee: P.G
			});
			var mt = Object(a.b)(ut)(e => {
					const t = !e.isEmployee;
					return r.a.createElement(lt, dt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				pt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				bt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				ht = n.n(bt);
			const ft = ke.a.wrapped(_e.b, "Trash", ht.a),
				gt = ke.a.wrapped(Z.a, "BetaTestsHeading", ht.a),
				vt = ke.a.wrapped(Q.o, "InBetaToggle", ht.a),
				_t = ke.a.wrapped(Q.o, "InRedesignBetaToggle", ht.a),
				yt = ke.a.button("DeactivateButton", ht.a),
				xt = ke.a.div("DeactivateWrapper", ht.a),
				jt = Object(c.c)({
					changePasswordHref: (e, t) => Object(ge.c)(e, {
						pageLayer: t.pageLayer,
						path: be.c.ChangePassword
					}),
					deactivateModalOpen: Object(ve.b)("deactivate_modal_id"),
					email: P.l,
					hasGoogleIdentity: S.b,
					inRedesignBeta: P.D,
					optoutModalOpen: Object(ve.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: S.d,
					user: P.i
				}),
				Et = Object(a.b)(jt, (e, t) => ({
					deactivate: t => {
						e(Object(x.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(K.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: ye.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${ye.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(x.v)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class Ct extends r.a.Component {
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
						}, Object(fe.a)()))
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
						inRedesignBeta: o,
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
						[ht.a["m-responsive"]]: a
					}), v = Object(u.a)({
						[ht.a.ResponsiveOverlay]: a
					});
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(pe.a, null, r.a.createElement(me.b, {
						isResponsiveSettingsEnabled: a
					}, s.fbt._("Account settings", null, {
						hk: "2faClM"
					})), r.a.createElement(de, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), r.a.createElement(mt, this.props), r.a.createElement(gt, {
						className: g
					}, s.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), r.a.createElement(vt, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: s.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: s.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), r.a.createElement(_t, {
						className: g,
						on: !o,
						onClick: b,
						label: s.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: s.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), r.a.createElement(Z.a, null, s.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), r.a.createElement(xt, null, r.a.createElement(yt, {
						onClick: this.deactivateAccount
					}, r.a.createElement(ft, null), s.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && r.a.createElement(E.a, {
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
					}), e && r.a.createElement(pt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && r.a.createElement(ue.a, {
						isResponsiveSettingsEnabled: a
					})), n && r.a.createElement(j.a, {
						className: ht.a.googleDisconnectIFrame,
						pageLayer: l,
						path: be.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var wt = Object(he.t)()(Et(Ct)),
				kt = n("./src/reddit/reducers/user/prefs/index.ts"),
				Ot = n("./src/reddit/actions/chat/constants.ts"),
				St = n("./src/reddit/actions/chat/userSettings.ts"),
				Pt = n("./src/reddit/actions/userBlocks.ts"),
				Nt = n("./src/reddit/actions/userWhitelist.ts"),
				It = n("./src/lib/timeAgo/index.ts"),
				At = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Tt = n("./src/reddit/components/Hovercards/helpers.ts"),
				Mt = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Rt = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				Bt = n.n(Rt);
			const Lt = ke.a.p("Date", Bt.a),
				Dt = ke.a.wrapped(Mt.a, "UserNameAndIcon", Bt.a),
				Ft = ke.a.button("Button", Bt.a),
				Ut = ke.a.div("ButtonWrapper", Bt.a);
			var Ht = ke.a.wrapped(e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement(Dt, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(Tt.b)({
						author: e.name,
						tooltipIdPrefix: At.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), r.a.createElement(Lt, null, Object(It.d)(e.date / 1e3)), r.a.createElement(Ut, null, r.a.createElement(Ft, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", Bt.a),
				Wt = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				zt = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				qt = n.n(zt);
			const Gt = 5,
				Vt = ke.a.h4("ListHeading", qt.a),
				Yt = ke.a.div("ListBox", qt.a),
				Jt = ke.a.div("MoreWrapper", qt.a),
				Kt = ke.a.button("MoreButton", qt.a),
				Zt = ke.a.wrapped(Q.m, "Subtext", qt.a);
			class Qt extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === Wt.a.pending && this.props.api.new === Wt.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: n,
						api: o,
						add: a,
						padBottom: i,
						remove: c,
						list: l,
						label: d,
						title: m,
						subtext: p
					} = this.props, b = e ? l.length : 5;
					return r.a.createElement("div", {
						className: Object(u.a)(qt.a.container, n, {
							[qt.a.mPadBottom]: !!i
						})
					}, r.a.createElement(Vt, null, m), void 0 !== p && r.a.createElement(Zt, null, p), r.a.createElement(A.a, {
						buttonText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: o.new === Wt.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), r.a.createElement(Yt, null, l.slice(0, b).map(e => r.a.createElement(Ht, {
						disabled: o[e.name] === Wt.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Gt && !e ? r.a.createElement(Jt, null, r.a.createElement(Kt, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var Xt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				$t = n.n(Xt);
			const en = {
					[kt.b.Whitelisted]: () => s.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[kt.b.Everyone]: () => s.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				tn = e => {
					const t = en[e];
					return t && t()
				},
				nn = ke.a.div("ListsWrapper", $t.a),
				sn = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var on = Object(a.b)(sn, (e, t) => ({
					addBlocked: t => e(Object(Pt.h)(t)),
					addWhitelisted: t => e(Object(Nt.g)(t)),
					removeWhitelisted: t => e(Object(Nt.h)(t)),
					removeBlocked: t => e(Object(Pt.g)(t)),
					saveChatSettings: t => e(Object(St.c)(t))
				}))(({
					addWhitelisted: e,
					chatSettings: t,
					prefs: {
						acceptPrivateMessages: n
					},
					removeWhitelisted: o,
					saveChatSettings: a,
					update: i,
					whitelist: c,
					whitelistApi: l
				}) => {
					const d = Object.entries(kt.b).filter(e => e[1] === n)[0][0],
						u = Object(Ot.b)(t.invitePolicy),
						m = [Ot.a.anybody, Ot.a.account_age_30_days, Ot.a.nobody],
						p = [Object(Ot.b)(Ot.a.anybody), Object(Ot.b)(Ot.a.account_age_30_days), Object(Ot.b)(Ot.a.nobody)],
						b = tn(d),
						h = tn(n),
						f = [kt.b.Everyone, kt.b.Whitelisted],
						g = [tn(kt.b.Everyone), tn(kt.b.Whitelisted)];
					return r.a.createElement(pe.a, null, r.a.createElement(me.b, {
						isResponsiveSettingsEnabled: !1
					}, s.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), r.a.createElement(Q.d, {
						label: s.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: m,
						displayItems: p,
						selected: u,
						onClick: e => {
							a({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), r.a.createElement(Q.d, {
						label: s.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: s.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not approved.", null, {
							hk: "48t4Ee"
						}),
						items: f,
						displayItems: g,
						selected: h,
						displayTitle: b,
						onClick: e => i(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (t.invitePolicy !== Ot.a.anybody || n === kt.b.Whitelisted) && r.a.createElement(nn, null, r.a.createElement(Qt, {
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
						remove: o,
						list: c,
						api: l
					})))
				}),
				rn = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				an = n.n(rn);

			function cn(e) {
				return r.a.createElement("header", {
					className: Object(u.a)(an.a.container, e.className)
				}, r.a.createElement("div", {
					className: an.a.title
				}, s.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), r.a.createElement("div", {
					className: an.a.tag
				}, s.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var ln = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				dn = n("./src/reddit/contexts/ApiContext.tsx"),
				un = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				mn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				pn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				bn = n("./src/reddit/selectors/economics.ts"),
				hn = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				fn = n.n(hn);
			const {
				fbt: gn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var vn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(vn || (vn = {}));
			class _n extends r.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(un.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = vn.Default;
					e.connectCode && e.connectStateToken && (t = vn.Connecting), e.stripeConnected && (t = vn.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== vn.Connected) {
						const e = await Object(un.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: vn.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: vn.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = gn._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === vn.Connected && (n = gn._("connect", null, {
						hk: "22jQRU"
					})), t === vn.Connecting && (n = gn._("connecting...", null, {
						hk: "3ccNPc"
					})), r.a.createElement("div", {
						className: e
					}, r.a.createElement(Z.a, null, gn._("accept tips", null, {
						hk: "1kEl0R"
					})), r.a.createElement(Q.k, {
						direction: "row",
						label: gn._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: gn._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, r.a.createElement("div", {
						className: fn.a.cta
					}, r.a.createElement(k.i, {
						className: fn.a.button,
						disabled: t !== vn.Default,
						onClick: this.initiateStripeConnect
					}, n), r.a.createElement("div", {
						className: fn.a.legal
					}, gn._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [gn._param("Previews Terms of Service", r.a.createElement(ln.a, {
						className: fn.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), r.a.createElement("div", {
						className: fn.a.disclaimer
					}, r.a.createElement(pn.a, {
						className: fn.a.icon
					}), gn._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const yn = Object(c.c)({
					stripeConnected: bn.u
				}),
				xn = Object(a.b)(yn, e => ({
					onError: t => e(Object(I.f)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(mn.a)(t)
					}))
				}));
			var jn = Object(dn.b)(xn(_n)),
				En = n("./src/reddit/components/Settings/Creator/index.m.less"),
				Cn = n.n(En);

			function wn(e) {
				return r.a.createElement(pe.a, null, r.a.createElement("div", null, r.a.createElement(cn, {
					className: Cn.a.header
				}), r.a.createElement(jn, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var kn = n("./src/lib/listingSort/index.ts"),
				On = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				Sn = n("./src/higherOrderComponents/asTooltip.tsx"),
				Pn = n("./src/reddit/actions/tooltip.ts"),
				Nn = n("./src/reddit/controls/Dropdown/index.tsx"),
				In = n("./src/reddit/controls/Dropdown/Row.tsx"),
				An = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Tn = n("./src/reddit/selectors/tooltip.ts"),
				Mn = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				Rn = n.n(Mn);
			const Bn = Object(Sn.a)(Nn.a),
				Ln = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Tn.b)(t.dropdownId)(e)
				});
			class Dn extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => r.a.createElement(In.b, {
						children: e.contentJsx || e.icon,
						className: Rn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => r.a.createElement(In.b, {
						children: e.contentJsx || e.icon,
						displayText: e.displayText,
						isSelected: t,
						key: e.key,
						noIcon: !e.icon,
						onClick: () => this.props.onSelect(e)
					})
				}
				render() {
					const {
						props: e
					} = this, {
						items: t,
						renderLabel: n = this.renderLabel,
						renderItem: s = this.renderDropdownItem,
						selectedKey: o
					} = this.props, a = t.find(e => e.key === o) || t[0];
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(Rn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: Rn.a.labelWrapper
					}, n(a), r.a.createElement(An.b, null)), r.a.createElement(Bn, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, o === e.key))))
				}
			}
			var Fn = Object(a.b)(Ln, (e, t) => ({
					openDropdown: () => {
						e(Object(Pn.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Dn),
				Un = n("./src/reddit/constants/listingSorts.ts");
			const Hn = [m.R.HOT, m.R.NEW, m.R.TOP, m.R.RISING];
			var Wn = e => {
				const {
					dropdownId: t
				} = e, n = Hn.map(e => ({
					key: e,
					displayText: Object(Un.a)(e),
					icon: r.a.createElement(On.a, {
						sort: e
					})
				}));
				return r.a.createElement(Fn, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const zn = [m.Yb.HOUR, m.Yb.DAY, m.Yb.WEEK, m.Yb.MONTH, m.Yb.YEAR, m.Yb.ALL];
			var qn = e => {
					const {
						dropdownId: t
					} = e, n = zn.map(e => ({
						key: e,
						displayText: Object(Un.b)(e)
					}));
					return r.a.createElement(Fn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				Gn = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				Vn = n.n(Gn);
			const Yn = ke.a.div("Separator", Vn.a);
			class Jn extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(kn.d)(this.props.fullSort);
						this.props.onChange(Object(kn.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(kn.d)(this.props.fullSort);
						this.props.onChange(Object(kn.c)({
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
						sort: o,
						timeSort: a
					} = Object(kn.d)(t);
					return r.a.createElement(Q.c, {
						className: e,
						label: s.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: s.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, r.a.createElement("div", {
						className: Vn.a.wrapper
					}, r.a.createElement(Wn, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: o
					}), a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Yn, null), r.a.createElement(qn, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: a
					}))))
				}
			}
			var Kn = n("./src/reddit/constants/postLayout.ts"),
				Zn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				Qn = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Xn = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				$n = n("./src/reddit/controls/Dropdown/index.m.less"),
				es = n.n($n);
			const ts = {
				[Kn.d.Card]: Xn.a,
				[Kn.d.Classic]: Zn.a,
				[Kn.d.Compact]: Qn.a
			};

			function ns(e) {
				const t = ts[e.layout];
				return r.a.createElement(t, {
					className: es.a.iconStyles
				})
			}
			const ss = [Kn.d.Card, Kn.d.Classic, Kn.d.Compact];
			var os = e => {
					const {
						dropdownId: t
					} = e, n = ss.map(e => ({
						key: e,
						displayText: Object(Kn.h)(e),
						icon: r.a.createElement(ns, {
							layout: e
						})
					}));
					return r.a.createElement(Fn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				rs = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				as = n.n(rs);
			class is extends r.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: s,
						layout: o
					} = this.props;
					return r.a.createElement(Q.c, {
						className: e,
						label: n,
						subtext: s
					}, r.a.createElement("div", {
						className: as.a.wrapper
					}, r.a.createElement(os, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: o
					})))
				}
			}
			var cs = n("./src/reddit/components/Settings/FeedForm.m.less"),
				ls = n.n(cs);

			function ds({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					hideNSFW: n,
					openPostInNewTab: o,
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
					[ls.a["m-responsive"]]: e
				});
				return r.a.createElement(pe.a, null, r.a.createElement(me.b, {
					isResponsiveSettingsEnabled: e
				}, s.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), r.a.createElement(Z.a, null, s.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), r.a.createElement(Q.o, {
					on: a,
					onClick: () => f(!a, "over18"),
					label: s.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: s.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), r.a.createElement(Q.o, {
					disabled: !a,
					label: s.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!a && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: s.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), r.a.createElement(Q.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: s.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: s.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), r.a.createElement(Q.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: s.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: s.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), r.a.createElement(Q.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: s.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: s.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), r.a.createElement(Jn, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), r.a.createElement(Q.o, {
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
				}), r.a.createElement(is, {
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
				}), r.a.createElement(Q.o, {
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
				}), r.a.createElement(Q.o, {
					className: g,
					on: !!o,
					onClick: () => f(!o, "openPostInNewTab"),
					label: s.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: s.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), r.a.createElement(Z.a, {
					className: g
				}, s.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), r.a.createElement(Q.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: s.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: s.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.a, null, s.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), r.a.createElement(Q.f, {
					label: s.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: s.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${ye.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var us = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				ms = n("./src/reddit/helpers/trackers/notifications.ts"),
				ps = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				bs = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				hs = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				fs = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				gs = n.n(fs);
			var vs = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [a, i] = Object(o.useState)(hs.a.Push), c = Object(je.a)(), l = a === hs.a.Push, d = a === hs.a.Email;
					return r.a.createElement(pe.a, null, r.a.createElement("nav", {
						className: gs.a.nav
					}, r.a.createElement("button", {
						onClick: () => {
							i(l ? hs.a.Email : hs.a.Push)
						}
					}, r.a.createElement(me.b, {
						isResponsiveSettingsEnabled: e
					}, d && r.a.createElement(ps.a, {
						className: gs.a.arrowLeft
					}), l ? s.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : s.fbt._("Back", null, {
						hk: "26R5gK"
					}), l && r.a.createElement(bs.a, {
						className: gs.a.arrowRight
					})))), r.a.createElement(me.b, {
						isResponsiveSettingsEnabled: e
					}, l ? s.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : s.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					})), l ? r.a.createElement(us.b, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(us.a, null), r.a.createElement(Z.a, null), r.a.createElement(Q.o, {
						on: !!t,
						onClick: () => {
							c(Object(ms.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: s.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})))
				},
				_s = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				ys = n.n(_s);

			function xs(e) {
				return r.a.createElement("header", {
					className: Object(u.a)(ys.a.container, e.className)
				}, r.a.createElement("div", {
					className: ys.a.title
				}, s.fbt._("Payments", null, {
					hk: "rydT0"
				})), r.a.createElement("div", {
					className: ys.a.description
				}, s.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var js = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Es = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Cs = n("./src/reddit/models/Payments/index.ts"),
				ws = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				ks = n.n(ws);
			class Os extends r.a.Component {
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
						const t = e.type === Cs.a.SavedStripe ? await Object(un.b)(this.props.apiContext(), e.id) : await Object(un.c)(this.props.apiContext(), e.id);
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
					}, r.a.createElement(Z.a, null, s.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return r.a.createElement("div", {
							className: ks.a.payment,
							key: e.id
						}, r.a.createElement("div", {
							className: ks.a.paymentDisplay
						}, r.a.createElement(Es.a, {
							className: ks.a.lock
						}), e.display), r.a.createElement(k.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? s.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : s.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && r.a.createElement("div", {
						className: ks.a.noSavedPayment
					}, s.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Ss = Object(c.c)({
					savedPayments: bn.p
				}),
				Ps = Object(a.b)(Ss, e => ({
					onError: t => e(Object(I.f)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(mn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Cs.a.SavedStripe && e(Object(js.a)({
							cardId: t.id
						})), t.type === Cs.a.SavedPayPal && e(Object(js.e)({
							sourceId: t.id
						}))
					}
				}));
			var Ns = Object(dn.b)(Ps(Os)),
				Is = n("./src/reddit/components/Settings/Payments/index.m.less"),
				As = n.n(Is);
			var Ts = () => r.a.createElement(pe.a, null, r.a.createElement(xs, {
					className: As.a.header
				}), r.a.createElement(Ns, null)),
				Ms = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				Rs = n("./src/reddit/constants/experiments.ts"),
				Bs = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ls = Object(c.a)(e => Object(Bs.c)(e, {
					experimentEligibilitySelector: Bs.a,
					experimentName: Rs.h
				}), e => e === Rs.c.Enabled),
				Ds = Object(c.a)(e => Object(Bs.c)(e, {
					experimentEligibilitySelector: Bs.a,
					experimentName: Rs.f
				}), e => e === Rs.a.Enabled),
				Fs = ke.a.span("SubheaderLink", $t.a),
				Us = ke.a.button("GenerateBackupCodesButton", $t.a),
				Hs = ke.a.wrapped(Q.f, "ThirdPartyAuth", $t.a),
				Ws = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: O.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: S.d,
					shouldConsolidateAdsPreferences: Ds,
					shouldRemoveAdsPreferences: Ls
				}),
				zs = Object(a.b)(Ws, (e, t) => ({
					addBlocked: t => e(Object(Pt.h)(t)),
					addWhitelisted: t => e(Object(Nt.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(y.h)(K.h)),
					removeWhitelisted: t => e(Object(Nt.h)(t)),
					removeBlocked: t => e(Object(Pt.g)(t)),
					saveChatSettings: t => e(Object(St.c)(t)),
					enable2FA: () => e(Object(_.d)()),
					disable2FA: () => e(Object(_.c)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var qs = zs(({
					addBlocked: e,
					blocked: t,
					blockedApi: n,
					prefs: {
						allowClickTracking: o,
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
					shouldShowLocationBasedSetting: j,
					shouldShowCreatePasswordModal: E,
					shouldConsolidateAdsPreferences: C,
					shouldRemoveAdsPreferences: w
				}) => r.a.createElement(pe.a, null, r.a.createElement(me.b, {
					isResponsiveSettingsEnabled: v
				}, s.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), r.a.createElement(me.a, null, s.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [s.fbt._param("=Privacy & Security FAQs", r.a.createElement(Fs, null, s.fbt._("{=Privacy & Security FAQs}", [s.fbt._param("=Privacy & Security FAQs", r.a.createElement("a", {
					href: `${ye.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), r.a.createElement(Z.a, null, s.fbt._("Safety", null, {
					hk: "WyYmF"
				})), r.a.createElement(Qt, {
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
				}), C ? ((e, t, n, o, a, i, c, l, d, u, m) => r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.a, null, s.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), r.a.createElement(Q.o, {
					on: !e,
					onClick: () => o(!e, "hideFromRobots"),
					label: s.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && r.a.createElement(Q.o, {
					on: t,
					onClick: () => o(!t, "allowClickTracking"),
					label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && r.a.createElement(Q.o, {
					on: n,
					onClick: () => o(!n, "activityRelevantAds"),
					label: s.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), !u && r.a.createElement(Q.o, {
					on: d,
					onClick: () => o(!d, "thirdPartySiteDataPersonalizedContent"),
					label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), r.a.createElement(Z.a, null, s.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && r.a.createElement(Q.o, {
					on: l,
					onClick: () => o(!l, "showLocationBasedRecommendations"),
					label: s.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), r.a.createElement(Z.a, null, s.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), r.a.createElement(Q.o, {
					on: m,
					onClick: () => o(!m, "thirdPartyPersonalizedAds"),
					label: s.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(a, o, i, x, 0, j, 0, p, m, w, b) : ((e, t, n, o, a, i, c, l, d, u) => r.a.createElement(r.a.Fragment, null, r.a.createElement(Z.a, null, s.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), r.a.createElement(Q.o, {
					on: !e,
					onClick: () => o(!e, "hideFromRobots"),
					label: s.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && r.a.createElement(Q.o, {
					on: t,
					onClick: () => o(!t, "allowClickTracking"),
					label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && r.a.createElement(Q.o, {
					on: n,
					onClick: () => o(!n, "activityRelevantAds"),
					label: s.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), r.a.createElement(Q.o, {
					on: a,
					onClick: () => o(!a, "thirdPartyDataPersonalizedAds"),
					label: s.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: s.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), r.a.createElement(Q.o, {
					on: c,
					onClick: () => o(!c, "thirdPartySiteDataPersonalizedAds"),
					label: s.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && r.a.createElement(Q.o, {
					on: l,
					onClick: () => o(!l, "showLocationBasedRecommendations"),
					label: s.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && r.a.createElement(Q.o, {
					on: d,
					onClick: () => o(!d, "thirdPartySiteDataPersonalizedContent"),
					label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(a, o, i, x, l, j, d, p, m, w), r.a.createElement(Z.a, null, s.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), r.a.createElement(Q.o, {
					on: c,
					onClick: () => {
						E ? _() : c ? f() : h()
					},
					label: s.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: r.a.createElement(r.a.Fragment, null, s.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && r.a.createElement(r.a.Fragment, null, " ", s.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", r.a.createElement(Us, {
						type: "button",
						onClick: () => g()
					}, s.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), r.a.createElement(Hs, {
					className: Object(u.a)({
						[$t.a["m-responsive"]]: v
					}),
					label: s.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${ye.a.redditUrl}/prefs/apps`,
					last: !0
				}), E && r.a.createElement(ue.a, {
					isResponsiveSettingsEnabled: v
				}))),
				Gs = n("./src/reddit/actions/preferences.ts"),
				Vs = n("./src/reddit/actions/snoovatar.ts"),
				Ys = n("./src/reddit/components/Loader/index.m.less"),
				Js = n.n(Ys);
			class Ks extends r.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: s
					} = this.props;
					return e ? n ? n() : r.a.createElement(Ye.a, {
						center: !0,
						className: Js.a.loadingIcon,
						sizePx: s || 10
					}) : t()
				}
			}
			var Zs = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				Qs = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				Xs = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				$s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				eo = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				to = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				no = n("./src/reddit/selectors/structuredStyles.ts"),
				so = n("./src/reddit/selectors/subredditSettings.ts"),
				oo = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				ro = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				ao = n.n(ro);
			const {
				fbt: io
			} = n("./node_modules/fbt/lib/FbtPublic.js"), co = 30, lo = 200, uo = Object(c.a)(P.i, so.a, P.ub, no.n, ve.a, (e, t, n, s, o) => {
				const r = e && e.profileId,
					a = r && s[r] ? s[r].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(L.e)(e),
					currentUserUrl: e.url,
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
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === o
				}
			}), mo = ke.a.div("ImageUploaderLayout", ao.a), po = ke.a.wrapped(oo.a, "IconImageUploader", ao.a), bo = ke.a.wrapped(Xs.a, "ProfileIcon", ao.a), ho = ke.a.wrapped(oo.a, "BannerImageUploader", ao.a), fo = ke.a.wrapped(Qs.a, "ProfileBanner", ao.a), go = ke.a.div("ProfileModerationContent", ao.a), vo = ke.a.wrapped(to.a, "PlusCircle", ao.a), _o = ke.a.span("LabelText", ao.a), yo = ke.a.span("ImageType", ao.a), xo = ke.a.a("Link", ao.a), jo = ke.a.img("DummyBanner", ao.a), Eo = ke.a.wrapped(Zs.a, "Preview", ao.a);
			class Co extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(ot.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(ot.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(ot.c)(this.props.contentVisible))
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
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(ot.a)(this.props.showActiveCommunities))
					}, this.updateProfile = async (e, t) => {
						this.props.save({
							...this.props,
							[t]: e
						}, {
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
						currentUserUrl: o,
						isEmployee: a,
						isGold: i,
						isNSFWModalOpen: c,
						isResponsiveSettingsEnabled: l,
						onClickSnoovatar: d,
						over18: m,
						prefersReducedAnimations: p,
						profileBanner: b,
						profileIcon: h,
						showActiveCommunities: f,
						snoovatarUrl: g,
						toggleNSFWModal: v
					} = this.props, {
						isDeletingBanner: _,
						isDeletingIcon: y,
						profileBannerUploading: x,
						profileIconUploading: j,
						publicDescription: C,
						title: w
					} = this.state, k = Object(u.a)({
						[ao.a["m-responsive"]]: l
					}), O = !!h && !Object(eo.b)(h);
					return r.a.createElement(pe.a, {
						sidebar: r.a.createElement(Eo, {
							bannerBackgroundImage: b,
							currentUserHasSnoovatar: !!g,
							editMode: !0,
							isEmployee: a,
							isDefaultIcon: !h || h.indexOf("avatar_default") > -1,
							isDeletingBanner: _,
							isDeletingIcon: y,
							isGold: i,
							isNSFW: m,
							isOverlay: !1,
							isOwnProfile: !0,
							onClickSnoovatar: d,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							prefersReducedAnimations: p,
							profileIcon: h,
							publicDescription: C,
							snoovatarUrl: g,
							recentAwardings: e,
							title: w,
							url: o,
							userCreated: n,
							username: s
						})
					}, r.a.createElement(me.b, {
						isResponsiveSettingsEnabled: l
					}, io._("Customize profile", null, {
						hk: "1fenXK"
					})), r.a.createElement(Z.a, null, io._("Profile Information", null, {
						hk: "3vzAUk"
					})), r.a.createElement(Q.e, {
						label: io._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							w !== this.props.title && this.updateProfile(w, "title")
						},
						placeholder: io._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: co,
						subtext: io._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: w
					}), r.a.createElement(Q.g, {
						label: io._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							C !== this.props.publicDescription && this.updateProfile(C, "publicDescription")
						},
						placeholder: io._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: lo,
						subtext: io._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: C
					}), r.a.createElement(Z.a, null, io._("Images", null, {
						hk: "38DOkf"
					})), r.a.createElement(Q.k, {
						label: io._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: io._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, r.a.createElement(mo, {
						className: Object(u.a)(k)
					}, O ? r.a.createElement(bo, {
						className: k,
						iconUrl: h,
						isNSFW: !1,
						userName: s
					}) : r.a.createElement(po, {
						className: k,
						controlName: "profileIcon",
						icon: r.a.createElement(vo, null),
						isUploading: j,
						label: r.a.createElement(_o, null, io._("Drag and Drop or Upload {=Avatar} Image", [io._param("=Avatar", r.a.createElement(yo, null, io._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: ao.a.Label,
						onChange: this.onIconChange
					}), b ? r.a.createElement(fo, {
						bannerUrl: b,
						className: k,
						isNSFW: !1,
						userName: s
					}) : r.a.createElement(ho, {
						className: k,
						controlName: "profileBanner",
						icon: r.a.createElement(vo, null),
						isUploading: x,
						label: r.a.createElement(_o, null, io._("Drag and Drop or Upload {=Banner} Image", [io._param("=Banner", r.a.createElement(yo, null, io._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: ao.a.Label,
						onChange: this.onBannerChange
					}))), r.a.createElement(Z.a, null, io._("Profile category", null, {
						hk: "1YRE6p"
					})), r.a.createElement(Q.o, {
						label: io._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: m,
						subtext: io._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), r.a.createElement(Z.a, null, io._("Advanced", null, {
						hk: "1US2Ur"
					})), r.a.createElement(Q.o, {
						label: io._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: io._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [io._param("profileForm: r/all link", r.a.createElement(xo, {
							href: "/r/all"
						}, "r/all")), io._param("profileForm: /users link", r.a.createElement(xo, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), r.a.createElement(Q.o, {
						label: io._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: io._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: f,
						onClick: this.onShowActiveCommunitiesChange
					}), r.a.createElement(Z.a, null, io._("Profile moderation", null, {
						hk: "3vDS8h"
					})), r.a.createElement(go, null, io._("For moderation tools please visit our {=Profile Moderation page}", [io._param("=Profile Moderation page", r.a.createElement(xo, {
						href: `/user/${s}/about/edit/moderation`
					}, io._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), c && r.a.createElement(E.a, {
						headerText: io._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: io._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [io._param("=NSFW content", r.a.createElement(xo, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, io._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: io._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: io._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: v,
						onOverlayClick: v,
						overlayClassName: Object(u.a)({
							[ao.a.ResponsiveOverlay]: l
						}),
						withOverlay: !0
					}), r.a.createElement(jo, {
						src: b
					}))
				}
			}
			const wo = Object(a.b)(uo, e => ({
					imageDeleteRequested: t => e(Object(Gs.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(Gs.z)(t, n)),
					onClickSnoovatar: () => e(Object(Vs.b)("profile_overview")),
					save: (t, n) => e(Object(Gs.E)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object($s.c)(Co)),
				ko = Object(c.c)({
					isLoading: e => !Object(so.a)(e)
				}),
				Oo = Object(a.b)(ko)(Ks);

			function So(e) {
				return r.a.createElement(Oo, {
					loaderSize: 50,
					render: () => r.a.createElement(wo, e)
				})
			}
			var Po = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				No = n.n(Po);

			function Io(e) {
				return r.a.createElement("header", {
					className: e.className
				}, r.a.createElement("div", {
					className: No.a.title
				}, s.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), r.a.createElement("div", {
					className: No.a.subtitle
				}, s.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var Ao = n("./src/higherOrderComponents/asModal/index.tsx"),
				To = n("./src/reddit/actions/governance/communityDetails.ts"),
				Mo = n("./src/lib/addQueryParams/index.ts"),
				Ro = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				Bo = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				Lo = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				Do = n.n(Lo);
			const {
				fbt: Fo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Uo = Object(c.c)({
				userId: e => {
					const t = Object(P.i)(e);
					return t ? t.id : ""
				}
			});
			var Ho = Object(a.b)(Uo)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, s = t.primaryColor, o = Object(Mo.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return r.a.createElement("div", {
						className: Do.a.body
					}, r.a.createElement("section", {
						className: Do.a.leftSection
					}, r.a.createElement("div", {
						className: Do.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), r.a.createElement("div", {
						className: Do.a.content
					}, r.a.createElement(Ro.a, {
						index: "1",
						color: s
					}, Fo._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), r.a.createElement(Ro.a, {
						index: "2",
						color: s
					}, Fo._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), r.a.createElement(Ro.a, {
						index: "3",
						color: s
					}, Fo._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), r.a.createElement("section", {
						className: Do.a.rightSection
					}, r.a.createElement(Bo.a, {
						url: o,
						scale: 4
					})))
				})),
				Wo = n("./src/reddit/constants/colors.ts"),
				zo = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				qo = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				Go = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Vo = n("./src/reddit/components/Economics/Price/index.tsx"),
				Yo = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				Jo = n("./src/lib/currency/centsToDollars/index.ts"),
				Ko = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				Zo = n.n(Ko);
			const Qo = [() => s.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => s.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => s.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => s.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				Xo = [() => s.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => s.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => s.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => s.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function $o({
				benefit: e,
				color: t
			}) {
				return r.a.createElement("li", {
					className: Zo.a.benefit
				}, r.a.createElement("div", {
					className: Zo.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(dn.b)(Object($s.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: o
				} = e;
				return r.a.createElement("div", {
					className: Object(u.a)(Zo.a.container, t)
				}, r.a.createElement("div", {
					className: Zo.a.topLine
				}, r.a.createElement(Yo.a, {
					className: Zo.a.brand,
					subreddit: o
				}), r.a.createElement("div", {
					className: Zo.a.title
				}, s.fbt._("{community} Supporter Membership", [s.fbt._param("community", o.displayText)], {
					hk: "eZ8PH"
				}))), r.a.createElement("header", {
					className: Zo.a.subTitle
				}, s.fbt._("Support the {community} community and receive exclusive access to premium features.", [s.fbt._param("community", o.displayText)], {
					hk: "2pm4PV"
				})), r.a.createElement("article", null, r.a.createElement("div", {
					className: Zo.a.benefitsTitle
				}, s.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), r.a.createElement("ul", {
					className: Zo.a.benefits
				}, Qo.map(e => r.a.createElement($o, {
					benefit: e(),
					key: e()
				}))), r.a.createElement("div", {
					className: Zo.a.benefitsTitle
				}, s.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), r.a.createElement("ul", {
					className: Zo.a.benefits
				}, Xo.map(e => r.a.createElement($o, {
					benefit: e(),
					key: e()
				})))), r.a.createElement("footer", {
					className: Zo.a.price
				}, s.fbt._("${price}/month", [s.fbt._param("price", Object(Jo.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var er = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				tr = n.n(er);
			const {
				fbt: nr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), sr = e => nr._("You've been supporting the community and the development of new features since {joinDate}.", [nr._param("joinDate", e)], {
				hk: "37ImIl"
			}), or = [nr._("Loyalty badge", null, {
				hk: "15DctX"
			}), nr._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), nr._("Distinguished username", null, {
				hk: "4vsJEd"
			}), nr._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var rr = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: s,
					title: o
				} = e, a = s.primaryColor;
				return r.a.createElement("div", {
					className: tr.a.card,
					style: {
						borderColor: a
					}
				}, r.a.createElement(Yo.a, {
					className: tr.a.brand,
					subreddit: s
				}), r.a.createElement("div", {
					className: tr.a.cardContent
				}, r.a.createElement("div", {
					className: tr.a.cardTitle
				}, o), r.a.createElement(Vo.a, {
					className: tr.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: s.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), r.a.createElement("div", {
					className: tr.a.membershipMsg
				}, sr(t)), r.a.createElement("div", {
					className: tr.a.benefitsTitle
				}, nr._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), r.a.createElement("ul", {
					className: tr.a.benefits
				}, or.map(e => r.a.createElement($o, {
					benefit: e,
					color: a,
					key: e
				})))))
			};
			const {
				fbt: ar
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ir = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: s,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(a.d)(), m = Object(je.a)();
					Object(o.useEffect)(() => {
						c && (d(Object(To.a)({
							subredditId: c.id
						})), m(Object(qo.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(zo.a)(p, void 0, Wo.b.white);
					return r.a.createElement("div", {
						className: Object(u.a)(t, tr.a.pointsContainer)
					}, r.a.createElement("header", {
						className: tr.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, ar._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), r.a.createElement(Go.a, {
						className: tr.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), r.a.createElement("article", {
						className: tr.a.content
					}, c && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ho, {
						subreddit: c
					}), r.a.createElement(rr, {
						joinDate: n,
						membership: s,
						subreddit: c,
						title: l
					}))))
				},
				cr = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				lr = n("./src/reddit/actions/governance/errorToast.ts"),
				dr = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: ur
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const mr = Object(a.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(cr.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(lr.a)(e, t)
			}));
			var pr = Object(dn.b)(mr((function(e) {
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
				} = e, [h, f] = Object(o.useState)(!1), g = m ? m.displayText : "";
				return r.a.createElement("div", {
					className: Object(u.a)(n, tr.a.container)
				}, r.a.createElement("header", {
					className: tr.a.header
				}, ur._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), r.a.createElement(Go.a, {
					className: tr.a.close,
					onClick: l
				})), r.a.createElement("article", {
					className: tr.a.content
				}, r.a.createElement("div", {
					className: tr.a.warning
				}, ur._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [ur._param("subredditName", g), ur._param("endDate", s)], {
					hk: "1POMMH"
				})), m && r.a.createElement(rr, {
					joinDate: a,
					membership: i,
					subreddit: m,
					title: b
				})), r.a.createElement("footer", {
					className: tr.a.footer
				}, r.a.createElement(k.l, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(dr.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? ur._("canceling...", null, {
					hk: "1Ggy36"
				}) : ur._("cancel membership", null, {
					hk: "C9ZhO"
				})), r.a.createElement(k.i, {
					onClick: l
				}, ur._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const br = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				hr = Object(a.b)(br);
			var fr = Object(Ao.a)(hr((function(e) {
					return "points" === e.membership.currency ? r.a.createElement(ir, e) : r.a.createElement(pr, e)
				}))),
				gr = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				vr = n.n(gr);

			function _r(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class yr extends r.a.Component {
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
						membership: o,
						settings: a
					} = t, i = _r(o.endsAt), c = _r(o.publishAt), l = !a.renew, d = n ? n.displayText : "", m = i ? s.fbt._("Cancelled. Will expire on {date}", [s.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? s.fbt._("Joined {date}", [s.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return r.a.createElement("div", {
						className: Object(u.a)(e, vr.a.container)
					}, r.a.createElement("div", {
						className: vr.a.membershipName
					}, s.fbt._("{subredditName} {title}", [s.fbt._param("subredditName", d), s.fbt._param("title", o.title)], {
						hk: "2NdAdN"
					})), !l && r.a.createElement("div", {
						className: vr.a.joinDate,
						title: p
					}, p), l && r.a.createElement("div", {
						className: vr.a.cancelled,
						title: m
					}, m), r.a.createElement(k.o, {
						className: vr.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && r.a.createElement(fr, {
						withOverlay: !0,
						endDate: i,
						joinDate: c,
						subredditId: o.subredditId,
						membership: o,
						title: d + " " + o.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const xr = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var jr = Object(a.b)(xr)(yr),
				Er = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				Cr = n.n(Er);
			const wr = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var kr = Object(a.b)(wr)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: o
					} = e, a = Object.keys(o).map(e => (function(e) {
						if (!e.active) return null;
						const t = Object.keys(e.active).filter(e => "provisional_membership" !== e),
							n = e.active[t[0]];
						return n && Date.now() < n.endsAt ? {
							membership: n,
							settings: e.settings
						} : null
					})(o[e])).filter(e => !!e).sort((e, t) => e.membership.endsAt - t.membership.endsAt), i = !!a.length;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: Cr.a.title
					}, s.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => r.a.createElement("div", {
						className: Cr.a.loading,
						key: t
					})), i && a.map(e => r.a.createElement(jr, {
						key: e.membership.subredditId,
						className: Cr.a.membership,
						subscription: e
					})), !n && !i && r.a.createElement("div", {
						className: Cr.a.empty
					}, s.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Or = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				Sr = n.n(Or);

			function Pr(e) {
				return r.a.createElement(pe.a, {
					className: e.className
				}, r.a.createElement(Io, {
					className: Sr.a.header
				}), r.a.createElement(kr, null))
			}
			var Nr = n("./src/reddit/components/TabNav/index.tsx"),
				Ir = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Ar = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Tr = n("./src/reddit/selectors/platform.ts"),
				Mr = n("./src/reddit/selectors/responsiveSettings.ts"),
				Rr = n("./src/reddit/pages/Settings/index.m.less"),
				Br = n.n(Rr);
			const Lr = (e, t, n) => [{
					key: m.Tb.Account,
					title: s.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Tb.Profile,
					title: s.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Tb.Privacy,
					title: s.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Tb.Feed,
					title: s.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Tb.Notifications,
					title: s.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Tb.Premium,
					title: s.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: Br.a.CreatorTab,
					key: m.Tb.Creator,
					title: s.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: Br.a.PaymentsTab,
					key: m.Tb.Payments,
					title: s.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: Br.a.SpecialMembershipTab,
					key: m.Tb.SpecialMembership,
					title: s.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: Br.a.MessagingTab,
					key: m.Tb.Messaging,
					title: s.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				Dr = Object(c.c)({
					savedPayments: bn.p,
					userIsWhitelistedCreator: bn.x,
					allowNavigationCallback: Tr.a,
					isResponsiveSettingsEnabled: Mr.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				Fr = Object(he.t)(),
				Ur = Object(a.b)(Dr, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(Gs.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				Hr = {
					activityRelevantAds: "personalization_activity_relevant_ads",
					acceptPrivateMessages: "recieve_messages",
					allowClickTracking: "privacy_log_outbound_clicks",
					autoplayVideo: "video_autoplay",
					collapseReadMessages: "collapse_messages",
					defaultCommentSort: "default_comment_sort",
					emailDigests: "email_digests",
					emailUnreadMessages: "email_unread",
					emailUnsubscribe: "email_notifications",
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
			class Wr extends r.a.Component {
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
						Hr.hasOwnProperty(t) && this.props.sendEvent(s => ({
							source: this.getSource(),
							action: "save",
							noun: Hr[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== m.Tb.Account ? `settings_${e}` : "settings"
					}, this.getTrackingValue = (e, t, n = !1) => {
						const s = n ? this.props.prefs[e] : t;
						return "boolean" == typeof s ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === s ? "off" : "on" : !0 === s ? "on" : "off" : s
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: s,
							userIsWhitelistedCreator: o,
							userHasSpecialMembership: a
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case m.Tb.Account:
								return r.a.createElement(wt, i);
							case m.Tb.Profile:
								return r.a.createElement(So, i);
							case m.Tb.Premium:
								return r.a.createElement(Ms.b, i);
							case m.Tb.Notifications:
								return r.a.createElement(vs, i);
							case m.Tb.Privacy:
								return r.a.createElement(qs, i);
							case m.Tb.Messaging:
								return r.a.createElement(on, i);
							case m.Tb.Feed:
								return r.a.createElement(ds, i);
							case m.Tb.Payments:
								return r.a.createElement(Ts, null);
							case m.Tb.Creator: {
								const e = Object(p.a)(s.search);
								return o ? r.a.createElement(wn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Tb.SpecialMembership:
								return a ? r.a.createElement(Pr, null) : null;
							default:
								return r.a.createElement(wt, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Ar.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Tb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Tb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = r.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return r.a.createElement(Nr.a, {
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
					Object(Ir.d)(Ir.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = m.Tb.Account
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
					Object(Ir.b)(Ir.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						isResponsiveSettingsEnabled: t,
						userIsWhitelistedCreator: n,
						userHasSpecialMembership: o,
						savedPayments: a
					} = this.props;
					return r.a.createElement("div", {
						className: Object(u.a)(Br.a.Container, {
							[Br.a["m-responsive"]]: t
						})
					}, r.a.createElement(Nr.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: s.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						icon: Nr.b.GEAR,
						onTouchMove: this.startScrolling
					}, Lr(n, o, a).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = Fr(Ur(Object($s.c)(Wr)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const o = (e, t) => `${s.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
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
				return j
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "x", (function() {
				return B
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Gold/Powerups/index.ts"),
				l = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups.ts");
			const h = [],
				f = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
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
					if (n && n.status === m.a.Fetched) {
						const n = g(e, t),
							s = Date.now();
						return n && s < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				y = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === m.a.Fetched) {
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
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const j = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return h;
					return x(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				E = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function C(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === o) return n;
				const r = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => r[e]).find(e => e && e.type === c)
			}

			function k(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === m.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return o.data.collections[n];
					if (n === i.a.Cosmetic && s) return o.data.collections[n][s]
				}
				return h
			}

			function O(e, t) {
				const n = k(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function S(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
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
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: l.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
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
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = f(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				R = (e, t) => {
					const n = e.subreddits.gov.meta[t || ""],
						s = n && n.extra && n.extra.nomenclature || A;
					return {
						prices: M(e, t),
						member: s.member || A.member,
						memberPlural: s.memberPlural || A.memberPlural,
						memberAlt: s.memberAlt || A.memberAlt,
						memberAltPlural: s.memberAltPlural || A.memberAltPlural,
						membership: s.membership || A.membership,
						membershipAlt: s.membershipAlt || A.membershipAlt
					}
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				F = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				H = (e, t, n) => {
					const o = "replyToPost" !== n && Object(p.a)(e, {
						commentId: n
					});
					if (!!o && Object(r.a)(o)) return !0;
					if (t && Object(b.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const a = s.d.spGiphy(e),
						i = U(e, t);
					return a && i
				},
				W = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/econ/premiumMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.Jb)
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/makeProductOfferKey/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: n
				}) => {
					var s, r, a;
					return t ? e.subreddits.productOffers[Object(o.a)(n, t)] : null === (a = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === r ? void 0 : r.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t,
						type: r.c.Powerups
					});
					return n && n[0]
				},
				d = e => {
					const t = c(e, {
						type: r.c.Premium
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === t),
				m = Object(s.a)(d, a.p, (e, t) => u(e, t)),
				p = Object(s.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				b = Object(s.a)(p, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const o = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				r = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const s = n.subredditId,
							o = Object.keys(e.user.ownedBadges[s] || {}),
							r = e.badges.models,
							a = Date.now();
						let i = !1;
						return o.forEach(e => {
							const n = r[e];
							n && n.type === t && n.endsAt > a && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.79d0ee42e72490460e0a.js.map