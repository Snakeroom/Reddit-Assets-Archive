// https://www.redditstatic.com/desktop2x/Settings.8cd9e474535b7e65d890.js
// Retrieved at 11/4/2021, 6:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var r = {
				single_source_shortest_paths: function(e, t, n) {
					var s = {},
						o = {};
					o[t] = 0;
					var a, i, c, l, d, u, m, p = r.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (c in i = (a = p.pop()).value, l = a.cost, d = e[i] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = o[c], (void 0 === o[c] || m > u) && (o[c] = u, p.push(c, u), s[c] = i));
					if (void 0 !== n && void 0 === o[n]) {
						var b = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(b)
					}
					return s
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var s = r.single_source_shortest_paths(e, t, n);
					return r.extract_shortest_path_from_predecessor_list(s, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = r.PriorityQueue,
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
			e.exports = r
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, s, o) {
				for (var a = -1, i = r(n((t - e) / (s || 1)), 0), c = Array(i); i--;) c[o ? i : ++a] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && s(t, n, a) && (n = a = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), a = void 0 === a ? t < n ? 1 : -1 : o(a), r(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_createRange.js")();
			e.exports = r
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./node_modules/moment/locale sync recursive ^\\.\\/.*$": function(e, t, n) {
			var r = {
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
				var t = o(e);
				return n(t)
			}

			function o(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			s.keys = function() {
				return Object.keys(r)
			}, s.resolve = o, e.exports = s, s.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$"
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/can-promise.js"),
				s = n("./node_modules/qrcode/lib/core/qrcode.js"),
				o = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, o, a) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					l = "function" == typeof i[c - 1];
				if (!l && !r()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = o = void 0) : 2 !== c || t.getContext || (o = n, n = t, t = void 0), new Promise((function(r, a) {
						try {
							var i = s.create(n, o);
							r(e(i, t, o))
						} catch (c) {
							a(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (a = n, n = t, t = o = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = o, o = void 0) : (a = o, o = n, n = t, t = void 0));
				try {
					var d = s.create(n, o);
					a(null, e(d, t, o))
				} catch (u) {
					a(u)
				}
			}
			t.create = s.create, t.toCanvas = i.bind(null, o.render), t.toDataURL = i.bind(null, o.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
				return a.render(e, n)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, n = r(e), s = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), o = [n - 7], a = 1; a < t - 1; a++) o[a] = o[a - 1] - s;
				return o.push(6), o.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], r = t.getRowColCoords(e), s = r.length, o = 0; o < s; o++)
					for (var a = 0; a < s; a++) 0 === o && 0 === a || 0 === o && a === s - 1 || o === s - 1 && 0 === a || n.push([r[o], r[a]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function o(e) {
				this.mode = r.ALPHANUMERIC, this.data = e
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
					var n = 45 * s.indexOf(this.data[t]);
					n += s.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(s.indexOf(this.data[t]), 6)
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
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function s(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = r.alloc(e * e), this.reservedBit = r.alloc(e * e)
			}
			s.prototype.set = function(e, t, n, r) {
				var s = e * this.size + t;
				this.data[s] = n, r && (this.reservedBit[s] = !0)
			}, s.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, s.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, s.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/mode.js");

			function o(e) {
				this.mode = s.BYTE, this.data = r.from(e)
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
			var r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case r.L:
						return s[4 * (e - 1) + 0];
					case r.M:
						return s[4 * (e - 1) + 1];
					case r.Q:
						return s[4 * (e - 1) + 2];
					case r.H:
						return s[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case r.L:
						return o[4 * (e - 1) + 0];
					case r.M:
						return o[4 * (e - 1) + 1];
					case r.Q:
						return o[4 * (e - 1) + 2];
					case r.H:
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
				} catch (r) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = r(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/utils.js"),
				s = r.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, o = n << 10; r.getBCHDigit(o) - s >= 0;) o ^= 1335 << r.getBCHDigit(o) - s;
				return 21522 ^ (n << 10 | o)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = r.alloc(512),
				o = r.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) s[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) s[t] = s[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return o[e]
			}, t.exp = function(e) {
				return s[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : s[o[e] + o[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/utils.js");

			function o(e) {
				this.mode = r.KANJI, this.data = e
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
					var n = s.toSJIS(this.data[t]);
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
				r = 3,
				s = 40,
				o = 10;

			function a(e, n, r) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (n + r) % 2 == 0;
					case t.Patterns.PATTERN001:
						return n % 2 == 0;
					case t.Patterns.PATTERN010:
						return r % 3 == 0;
					case t.Patterns.PATTERN011:
						return (n + r) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return n * r % 2 + n * r % 3 == 0;
					case t.Patterns.PATTERN110:
						return (n * r % 2 + n * r % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (n * r % 3 + (n + r) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, r = 0, s = 0, o = 0, a = null, i = null, c = 0; c < t; c++) {
					s = o = 0, a = i = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === a ? s++ : (s >= 5 && (r += n + (s - 5)), a = d, s = 1), (d = e.get(l, c)) === i ? o++ : (o >= 5 && (r += n + (o - 5)), i = d, o = 1)
					}
					s >= 5 && (r += n + (s - 5)), o >= 5 && (r += n + (o - 5))
				}
				return r
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, s = 0; s < t - 1; s++)
					for (var o = 0; o < t - 1; o++) {
						var a = e.get(s, o) + e.get(s, o + 1) + e.get(s + 1, o) + e.get(s + 1, o + 1);
						4 !== a && 0 !== a || n++
					}
				return n * r
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, r = 0, o = 0, a = 0; a < t; a++) {
					r = o = 0;
					for (var i = 0; i < t; i++) r = r << 1 & 2047 | e.get(a, i), i >= 10 && (1488 === r || 93 === r) && n++, o = o << 1 & 2047 | e.get(i, a), i >= 10 && (1488 === o || 93 === o) && n++
				}
				return n * s
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * o
			}, t.applyMask = function(e, t) {
				for (var n = t.size, r = 0; r < n; r++)
					for (var s = 0; s < n; s++) t.isReserved(s, r) || t.xor(s, r, a(e, s, r))
			}, t.getBestMask = function(e, n) {
				for (var r = Object.keys(t.Patterns).length, s = 0, o = 1 / 0, a = 0; a < r; a++) {
					n(a), t.applyMask(a, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), i < o && (o = i, s = a)
				}
				return s
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/version-check.js"),
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
				if (!r.isValid(t)) throw new Error("Invalid version: " + t);
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
				} catch (r) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js");

			function s(e) {
				this.mode = r.NUMERIC, this.data = e.toString()
			}
			s.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
				var t, n, r;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
				var s = this.data.length - t;
				s > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * s + 1))
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = r.alloc(e.length + t.length - 1), o = 0; o < e.length; o++)
					for (var a = 0; a < t.length; a++) n[o + a] ^= s.mul(e[o], t[a]);
				return n
			}, t.mod = function(e, t) {
				for (var n = r.from(e); n.length - t.length >= 0;) {
					for (var o = n[0], a = 0; a < t.length; a++) n[a] ^= s.mul(t[a], o);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = r.from([1]), o = 0; o < e; o++) n = t.mul(n, [1, s.exp(o)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/utils.js"),
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
				var r, s, o = e.size,
					a = b.getEncodedBits(t, n);
				for (r = 0; r < 15; r++) s = 1 == (a >> r & 1), r < 6 ? e.set(r, 8, s, !0) : r < 8 ? e.set(r + 1, 8, s, !0) : e.set(o - 15 + r, 8, s, !0), r < 8 ? e.set(8, o - r - 1, s, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, s, !0) : e.set(8, 15 - r - 1, s, !0);
				e.set(o - 8, 8, 1, !0)
			}

			function _(e, t, n) {
				var o = new a;
				n.forEach((function(t) {
					o.put(t.mode.bit, 4), o.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(o)
				}));
				var i = 8 * (s.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (o.getLengthInBits() + 4 <= i && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
				for (var c = (i - o.getLengthInBits()) / 8, l = 0; l < c; l++) o.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var o = s.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), i = o - a, c = u.getBlocksCount(t, n), l = c - o % c, d = Math.floor(o / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), _ = new Array(c), y = 0, x = r.from(e.buffer), j = 0; j < c; j++) {
						var C = j < l ? p : b;
						v[j] = x.slice(g, g + C), _[j] = f.encode(v[j]), g += C, y = Math.max(y, C)
					}
					var E, w, k = r.alloc(o),
						O = 0;
					for (E = 0; E < y; E++)
						for (w = 0; w < c; w++) E < v[w].length && (k[O++] = v[w][E]);
					for (E = 0; E < h; E++)
						for (w = 0; w < c; w++) k[O++] = _[w][E];
					return k
				}(o, e, t)
			}

			function y(e, t, n, r) {
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
					h = s.getSymbolSize(t),
					y = new i(h);
				return function(e, t) {
						for (var n = e.size, r = l.getPositions(t), s = 0; s < r.length; s++)
							for (var o = r[s][0], a = r[s][1], i = -1; i <= 7; i++)
								if (!(o + i <= -1 || n <= o + i))
									for (var c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(o + i, a + c, !0, !0) : e.set(o + i, a + c, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var r = n % 2 == 0;
							e.set(n, 6, r, !0), e.set(6, n, r, !0)
						}
					}(y),
					function(e, t) {
						for (var n = c.getPositions(t), r = 0; r < n.length; r++)
							for (var s = n[r][0], o = n[r][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(s + a, o + i, !0, !0) : e.set(s + a, o + i, !1, !0)
					}(y, t), v(y, n, 0), t >= 7 && function(e, t) {
						for (var n, r, s, o = e.size, a = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), r = i % 3 + o - 8 - 3, s = 1 == (a >> i & 1), e.set(n, r, s, !0), e.set(r, n, s, !0)
					}(y, t),
					function(e, t) {
						for (var n = e.size, r = -1, s = n - 1, o = 7, a = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(s, i - c)) {
										var l = !1;
										a < t.length && (l = 1 == (t[a] >>> o & 1)), e.set(s, i - c, l), -1 === --o && (a++, o = 7)
									} if ((s += r) < 0 || n <= s) {
									s -= r, r = -r;
									break
								}
							}
					}(y, b), isNaN(r) && (r = d.getBestMask(y, v.bind(null, y, n))), d.applyMask(r, y), v(y, n, r), {
						modules: y,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: r,
						segments: o
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, r, a = o.M;
				return void 0 !== t && (a = o.from(t.errorCorrectionLevel, o.M), n = p.from(t.version), r = d.from(t.maskPattern), t.toSJISFunc && s.setToSJISFunction(t.toSJISFunc)), y(e, n, a, r)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/polynomial.js"),
				o = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = s.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = r.alloc(this.degree),
					n = o.concat([e, t], e.length + this.degree),
					a = s.mod(n, this.genPoly),
					i = this.degree - a.length;
				if (i > 0) {
					var c = r.alloc(this.degree);
					return a.copy(c, i), c
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var s = new RegExp("^" + n + "$"),
				o = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return s.test(e)
			}, t.testNumeric = function(e) {
				return o.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/numeric-data.js"),
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
				for (var r, s = []; null !== (r = e.exec(n));) s.push({
					data: r[0],
					index: r.index,
					mode: t,
					length: r[0].length
				});
				return s
			}

			function p(e) {
				var t, n, s = m(c.NUMERIC, r.NUMERIC, e),
					o = m(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, r.BYTE, e), n = m(c.KANJI, r.KANJI, e)) : (t = m(c.BYTE_KANJI, r.BYTE, e), n = []), s.concat(o, t, n).sort((function(e, t) {
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
					case r.NUMERIC:
						return s.getBitsLength(e);
					case r.ALPHANUMERIC:
						return o.getBitsLength(e);
					case r.KANJI:
						return i.getBitsLength(e);
					case r.BYTE:
						return a.getBitsLength(e)
				}
			}

			function h(e, t) {
				var n, c = r.getBestModeForData(e);
				if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
				switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
					case r.NUMERIC:
						return new s(e);
					case r.ALPHANUMERIC:
						return new o(e);
					case r.KANJI:
						return new i(e);
					case r.BYTE:
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
							}, o = ["start"], a = 0; a < e.length; a++) {
							for (var i = e[a], c = [], l = 0; l < i.length; l++) {
								var d = i[l],
									u = "" + a + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, s[u] = {};
								for (var m = 0; m < o.length; m++) {
									var p = o[m];
									n[p] && n[p].node.mode === d.mode ? (s[p][u] = b(n[p].lastCount + d.length, d.mode) - b(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), s[p][u] = b(d.length, d.mode) + 4 + r.getCharCountIndicator(d.mode, t))
								}
							}
							o = c
						}
						for (m = 0; m < o.length; m++) s[o[m]].end = 0;
						return {
							map: s,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var s = e[n];
							switch (s.mode) {
								case r.NUMERIC:
									t.push([s, {
										data: s.data,
										mode: r.ALPHANUMERIC,
										length: s.length
									}, {
										data: s.data,
										mode: r.BYTE,
										length: s.length
									}]);
									break;
								case r.ALPHANUMERIC:
									t.push([s, {
										data: s.data,
										mode: r.BYTE,
										length: s.length
									}]);
									break;
								case r.KANJI:
									t.push([s, {
										data: s.data,
										mode: r.BYTE,
										length: u(s.data)
									}]);
									break;
								case r.BYTE:
									t.push([{
										data: s.data,
										mode: r.BYTE,
										length: u(s.data)
									}])
							}
						}
						return t
					}(p(e, l.isKanjiModeEnabled())), n), o = d.find_path(s.map, "start", "end"), a = [], i = 1; i < o.length - 1; i++) a.push(s.table[o[i]].node);
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
			var n, r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return r[e]
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
			var r = n("./node_modules/qrcode/lib/core/utils.js"),
				s = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				o = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/mode.js"),
				i = n("./node_modules/qrcode/lib/core/version-check.js"),
				c = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = r.getBCHDigit(7973);

			function d(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var n = 0;
				return e.forEach((function(e) {
					var r = d(e.mode, t);
					n += r + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return i.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!i.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = a.BYTE);
				var o = 8 * (r.getSymbolTotalCodewords(e) - s.getTotalCodewordsCount(e, t));
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
				var r, s = o.from(n, o.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var r = 1; r <= 40; r++) {
							if (u(e, r) <= t.getCapacity(r, n, a.MIXED)) return r
						}
					}(e, s);
					if (0 === e.length) return 1;
					r = e[0]
				} else r = e;
				return function(e, n, r) {
					for (var s = 1; s <= 40; s++)
						if (n <= t.getCapacity(s, r, e)) return s
				}(r.mode, r.getLength(), s)
			}, t.getEncodedBits = function(e) {
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; r.getBCHDigit(t) - l >= 0;) t ^= 7973 << r.getBCHDigit(t) - l;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var s = n,
					o = t;
				void 0 !== s || t && t.getContext || (s = t, t = void 0), t || (o = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), s = r.getOptions(s);
				var a = r.getImageWidth(e.modules.size, s),
					i = o.getContext("2d"),
					c = i.createImageData(a, a);
				return r.qrToImageData(c.data, e, s),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, o, a), i.putImageData(c, 0, 0), o
			}, t.renderToDataURL = function(e, n, r) {
				var s = r;
				void 0 !== s || n && n.getContext || (s = n, n = void 0), s || (s = {});
				var o = t.render(e, n, s),
					a = s.type || "image/png",
					i = s.rendererOpts || {};
				return o.toDataURL(a, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/renderer/utils.js");

			function s(e, t) {
				var n = e.a / 255,
					r = t + '="' + e.hex + '"';
				return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
			}

			function o(e, t, n) {
				var r = e + t;
				return void 0 !== n && (r += " " + n), r
			}
			t.render = function(e, t, n) {
				var a = r.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					l = i + 2 * a.margin,
					d = a.color.light.a ? "<path " + s(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + s(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var r = "", s = 0, a = !1, i = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || a || (a = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (r += a ? o("M", l + n, .5 + d + n) : o("m", s, 0), s = 0, a = !1), l + 1 < t && e[c + 1] || (r += o("h", i), i = 0)) : s++
						}
						return r
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
					r = e.width && e.width >= 21 ? e.width : void 0,
					s = e.scale || 4;
				return {
					width: r,
					scale: r ? 4 : s,
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
				var r = t.getScale(e, n);
				return Math.floor((e + 2 * n.margin) * r)
			}, t.qrToImageData = function(e, n, r) {
				for (var s = n.modules.size, o = n.modules.data, a = t.getScale(s, r), i = Math.floor((s + 2 * r.margin) * a), c = r.margin * a, l = [r.color.light, r.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = r.color.light;
						if (d >= c && u >= c && d < i - c && u < i - c) p = l[o[Math.floor((d - c) / a) * s + Math.floor((u - c) / a)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/qrcode/node_modules/isarray/index.js");
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
			var s = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function o(e, t, n) {
				return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" == typeof e ? c(this, e) : function(e, t, n, r) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, r) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
						var s;
						s = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
						o.TYPED_ARRAY_SUPPORT ? s.__proto__ = o.prototype : s = l(e, s);
						return s
					}(e, t, n, r);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							r = i(e, n),
							s = r.write(t);
						s !== n && (r = r.slice(0, s));
						return r
					}(e, t);
					return function(e, t) {
						if (o.isBuffer(t)) {
							var n = 0 | a(t.length),
								r = i(e, n);
							return 0 === r.length ? r : (t.copy(r, 0, 0, n), r)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (s = t.length) != s ? i(e, 0) : l(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return l(e, t.data)
						}
						var s;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new o(e, t, n)
			}

			function a(e) {
				if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return o.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = o.prototype : (null === (n = e) && (n = new o(t)), n.length = t), n
			}

			function c(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | a(t));
				if (!o.TYPED_ARRAY_SUPPORT)
					for (var r = 0; r < t; ++r) n[r] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | a(t.length), r = i(e, n), s = 0; s < n; s += 1) r[s] = 255 & t[s];
				return r
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var r = e.length, s = null, o = [], a = 0; a < r; ++a) {
					if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
						if (!s) {
							if (n > 56319) {
								(t -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							if (a + 1 === r) {
								(t -= 3) > -1 && o.push(239, 191, 189);
								continue
							}
							s = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && o.push(239, 191, 189), s = n;
							continue
						}
						n = 65536 + (s - 55296 << 10 | n - 56320)
					} else s && (t -= 3) > -1 && o.push(239, 191, 189);
					if (s = null, n < 128) {
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
				var r = this.length - t;
				if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, r) {
					return function(e, t, n, r) {
						for (var s = 0; s < r && !(s + n >= t.length || s >= e.length); ++s) t[s + n] = e[s];
						return s
					}(d(t, e.length - n), e, n, r)
				}(this, e, t, n)
			}, o.prototype.slice = function(e, t) {
				var n, r = this.length;
				if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), o.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = o.prototype;
				else {
					var s = t - e;
					n = new o(s, void 0);
					for (var a = 0; a < s; ++a) n[a] = this[a + e]
				}
				return n
			}, o.prototype.copy = function(e, t, n, r) {
				if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
				var s, a = r - n;
				if (this === e && n < t && t < r)
					for (s = a - 1; s >= 0; --s) e[s + t] = this[s + n];
				else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
					for (s = 0; s < a; ++s) e[s + t] = this[s + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
				return a
			}, o.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var r = e.charCodeAt(0);
						r < 256 && (e = r)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var s;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (s = t; s < n; ++s) this[s] = e;
				else {
					var a = o.isBuffer(e) ? e : new o(e),
						i = a.length;
					for (s = 0; s < n - t; ++s) this[s + t] = a[s % i]
				}
				return this
			}, o.concat = function(e, t) {
				if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var s = c(null, t),
					a = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!o.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(s, a), a += l.length
				}
				return s
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
			var r = n("./node_modules/react/index.js"),
				s = function() {
					var e = 1,
						t = new WeakMap,
						n = function(r, s) {
							return "number" == typeof r || "string" == typeof r ? s ? "idx-" + s : "val-" + r : t.has(r) ? "uid" + t.get(r) : (t.set(r, e++), n(r))
						};
					return n
				},
				o = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				a = o(),
				i = r.createContext(o()),
				c = function() {
					return r.useState((e = r.useContext(i), {
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
				return s
			}));
			var r = n("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const n = Object(r.a)(e),
					s = parseInt(n) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(r || (r = {}));
			const o = "USD",
				a = "ETH",
				i = "COINS",
				c = [a, "BTC"],
				l = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
		"./src/lib/hooks/useMutation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/hooks/useGqlContext.ts");

			function o(e) {
				const t = Object(s.a)(),
					[n, o] = Object(r.useState)(!1),
					[a, i] = Object(r.useState)(!1),
					[c, l] = Object(r.useState)(null),
					[d, u] = Object(r.useState)(null);
				return [Object(r.useCallback)(async n => {
					let r, s;
					o(!0), i(!0);
					try {
						if ((s = (r = await e(t(), n)).body).error) throw new Error(s.error.message);
						u(s.data)
					} catch (c) {
						l(c)
					} finally {
						o(!1)
					}
				}, [t, e]), {
					data: d,
					error: c,
					pending: n,
					called: a
				}]
			}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/currency/centsToDollars/index.ts"),
				o = n("./src/lib/currency/currencies.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/helpers/governance/tokens.ts"),
				c = n("./src/reddit/constants/intlSupport.ts");
			const l = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: n,
					formatOptions: s
				} = {}) => {
					const o = Number(e);
					return Object(c.c)() ? n ? Object(a.b)(o) : new Intl.NumberFormat(t, s).format(o) : u(o, n, t)
				},
				d = (e, t = {}) => {
					const {
						locale: n = r.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: l,
						displayConversion: d,
						forceDecimals: b,
						currency: h = t.currency || (t.type ? p(t.type) : o.c),
						type: f = t.type || (t.currency ? m(t.currency) : o.b.Real)
					} = t, g = Number(e), v = String(e);
					switch (f) {
						case o.b.Reddit: {
							const e = o.e[h],
								t = e ? e() : h;
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...l
							}).format(g) + " " + t : u(g, a, n, t)
						}
						case o.b.Crypto: {
							if (a) {
								return Object(i.c)(v, d) + " " + h
							}
							const e = Number(Object(i.b)(v, d));
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...l
							}).format(e) : u(e, a, n, h)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(s.a)(v, b));
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...l
							}).format(e) : u(e, a, n, h)
						}
					}
				},
				u = (e, t, n, r) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(n)) + (r ? " " + r : "")
				},
				m = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				p = e => {
					switch (e) {
						case o.b.Crypto:
							return o.d;
						case o.b.Reddit:
							return o.a;
						case o.b.Real:
						default:
							return o.c
					}
				}
		},
		"./src/lib/validateEmail/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var r, s;
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
					}))(null === (s = null === (r = null == c ? void 0 : c.data) || void 0 === r ? void 0 : r.piiIdentity) || void 0 === s ? void 0 : s.gender);
				l && e(m(l))
			}, m = Object(s.a)(d.a), p = e => async (t, n, {
				gqlContext: s
			}) => {
				const i = {
					customGender: e.definedGender,
					genderEnum: e.genderCategory
				};
				(await ((e, t) => Object(a.a)(e, {
					...c,
					variables: t
				}))(s(), {
					input: i
				})).ok ? (t(b(e)), t(Object(o.f)({
					kind: l.b.SuccessCommunity,
					text: r.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : t(Object(o.f)({
					kind: l.b.Error,
					text: r.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				}))
			}, b = Object(s.a)(d.b)
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const o = Object(r.a)(s.a),
				a = Object(r.a)(s.e),
				i = Object(r.a)(s.b),
				c = Object(r.a)(s.c),
				l = Object(r.a)(s.d)
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(a.a),
				c = Object(r.a)(a.b),
				l = Object(r.a)(a.c),
				d = Object(r.a)(a.d),
				u = Object(r.a)(a.e),
				m = Object(r.a)(a.f),
				p = Object(r.a)(a.g),
				b = Object(r.a)(a.h),
				h = Object(r.a)(a.i),
				f = e => Object(s.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
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
			var r = n("./node_modules/lodash/forOwn.js"),
				s = n.n(r),
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

			function j(e) {
				if (!x(e)) return e
			}
			const C = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(_.b)({
					includeMemberships: !0
				}));
				const r = t().economics.me.data.specialMemberships || {},
					s = Object.keys(r);
				if (s.length) {
					const t = await Object(i.e)(n(), s);
					t.ok && e(Object(y.g)(t.body))
				}
			}, E = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const o = r().user.account,
					a = r().economics.subredditPremium[e],
					i = !a || a.status !== f.a.Fetched || t;
				if (o && i) {
					const t = await Object(c.a)(s(), e, o.id);
					n(Object(y.i)(t))
				}
			}, w = e => async (t, n, {
				apiContext: r
			}) => {
				const s = n(),
					a = s.user.account,
					i = Object(g.f)(s, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (a && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: j(e.badge),
						currentAppliedBadges: c,
						userId: a.id
					})), x(e.badge) && n ? s = await Object(l.a)(r(), e.subredditId, n.id, !1) : x(e.badge) || (s = await Object(l.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: a.id
					})), Object(o.a)(t, s.error))
				}
			}, k = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				await n(E(e, !0));
				const o = r().economics.subredditPremium[e];
				if (o && o.status === f.a.Fetched) {
					const r = o.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(w({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(y.d)(b.c.MyBadges)))
				}
			}, O = e => async (t, n, {
				apiContext: r
			}) => {
				const i = n().user.account,
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (i && (c || l)) {
					const [n, c] = await Promise.all([Object(a.b)(r(), e), m(r(), e, i.id)]);
					if (!c.ok) return void Object(o.a)(t, c.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(c.body, e => {
						e.type === h.a.EmotesPack ? l.emotes.push(e) : e.type === h.a.Giphy && l.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: l
					}))
				}
			}, S = (e, t, n) => async (r, s, {
				apiContext: o
			}) => {
				if (await r(E(e, !0)), n && t) {
					const n = s(),
						o = Object(g.f)(n, e),
						a = Object(v.a)(n, t);
					if (!o[Object(b.d)(a.placement)] && a) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: a
						});
						t && await r(w({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(y.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, P = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					wallet: s
				} = await Object(i.c)(r(), e);
				t(Object(y.f)({
					wallet: s
				})), await t(E(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "i", (function() {
				return H
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
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
				C = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				E = n("./src/reddit/models/Payments/index.ts");
			const w = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				O = (e, t, n) => async (s, o, {
					gqlContext: a
				}) => {
					const c = i()(),
						l = await Object(C.f)(a(), c, e, t, n);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (n) return n.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, S = (e, t, n, s, o, a) => async (c, l, {
					gqlContext: d
				}) => {
					var u;
					const m = l(),
						b = () => c(Object(f.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = o === y.c.Premium,
						x = o === y.c.Powerups,
						j = {};
					if (x && a) j.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(g.d)(m, {
							provider: E.b.Stripe
						});
						if (!e) return;
						j.premium = {
							pricePackage: e
						}
					}
					let w, S, P = "";
					try {
						P = await c(O(t, s, j))
					} catch (N) {
						return p.c.captureException(N), void(N.message && c(Object(f.stripeApiError)(N.message)))
					}
					c(Object(f.stripeTokenPending)());
					const I = Object(v.y)(m);
					if (I || (w = await c(Object(f.validateAndCreateStripeToken)(e)), S = Object(v.v)(m), w)) try {
						const t = i()(),
							r = I || S ? w && S ? Object(C.h)(d(), t, P, w.id) : I ? Object(C.j)(d(), t, P, I) : null : Object(C.i)(d(), t, P, w.id),
							o = await r;
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
						if (p && g.status === C.a.ActionRequired) {
							const t = await e.confirmCardPayment(v),
								{
									error: n
								} = t;
							if (n) return void(n.message ? c(Object(f.stripeApiError)(n.message)) : b());
							let r;
							if (!(r = I ? await Object(C.e)(d(), i()(), g.id, I) : await Object(C.d)(d(), i()(), g.id, w.id, S)).ok) return void b();
							const s = r.body;
							if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== C.a.Paid) return void b()
						} else if (p && g.status !== C.a.Paid) return void b();
						const y = Object(_.k)(l());
						y && (x && a ? c(F({
							subredditId: a,
							powerupsCount: s,
							user: y,
							isAnonymous: n
						})) : h && c(G({
							user: y
						})))
					} catch (N) {
						p.c.captureException(N), b()
					}
				}, P = (e, t, n, r, s) => async (o, a, {
					gqlContext: l
				}) => {
					var d;
					const m = a(),
						b = r === y.c.Premium,
						h = r === y.c.Powerups,
						v = {};
					if (h && s) v.powerUps = {
						subredditId: s,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.d)(m, {
							provider: E.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let x = "";
					try {
						x = await o(O(e, n, v))
					} catch (P) {
						return p.c.captureException(P), P.message && o(Object(f.paypalApiError)(P.message)), null
					}
					const j = c.a.redditUrl;
					let S = {
						_o: j,
						o: x,
						pt: r
					};
					h && s && (S = {
						...S,
						r: s
					});
					try {
						const e = Object(u.a)(`${j}/framedModal/paypal-finish`, {
								...S,
								s: !0
							}),
							r = Object(u.a)(`${j}/framedModal/paypal-finish`, S),
							c = i()(),
							m = await Object(C.g)(l(), c, x, e, r);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (d = null == e ? void 0 : e.errors) || void 0 === d ? void 0 : d.length) return o(Object(f.paypalApiError)(k(e.errors))), null;
							const r = Object(_.k)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === C.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && r) return s ? o(F({
									subredditId: s,
									powerupsCount: n,
									user: r,
									isAnonymous: t
								})) : b && o(G({
									user: r
								})), null
							}
						}
					} catch (P) {
						p.c.captureException(P)
					}
					return o(Object(f.paypalApiError)(w())), null
				}, I = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var o;
					try {
						const r = i()(),
							a = await Object(C.c)(s(), r, e, t);
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
						const t = await Object(C.l)(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(f.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: r
							} = n.data.identity, s = r.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(s)), s[0] && e(Object(f.selectSavedCard)(s[0].cardId))
						} else e(Object(f.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (s) {
						p.c.captureException(s), e(Object(f.savedCardsSuccess)([]))
					}
				}, A = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await Object(C.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: s
							} = n.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(k(s))
					} catch (s) {
						p.c.captureException(s)
					}
				}, T = Object(m.a)(h.O), M = Object(m.a)(h.P), B = Object(m.a)(h.Q), L = e => async (t, n) => {
					await t(T(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, R = (e, t, n) => async (s, o, {
					gqlContext: a
				}) => {
					s(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await Object(C.b)(a(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void s(L(r[0].message));
							s(B({
								subredditId: t,
								allocatedAt: n
							}))
						} else s(L(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), s(L(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(m.a)(h.S), F = e => async (t, n) => {
					t(U(e)), t(Object(x.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(j.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(j.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(m.a)(h.W), G = ({
					user: e
				}) => async t => {
					await t(Object(x.o)(!0)), t(D({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
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
			const f = Object(s.a)(h.db),
				g = Object(s.a)(h.cb),
				v = Object(s.a)(h.bb),
				_ = Object(s.a)(h.Z),
				y = Object(s.a)(h.Y),
				x = Object(s.a)(h.X),
				j = Object(s.a)(h.Eb),
				C = Object(s.a)(h.Cb),
				E = Object(s.a)(h.Db),
				w = Object(s.a)(h.Hb),
				k = Object(s.a)(h.Gb),
				O = Object(s.a)(h.Fb),
				S = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, P = (e, t) => async n => {
					e === i.c.Premium ? n(N()) : t && n(I(e, t))
				}, I = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					const a = s();
					if (!Object(b.i)(a, {
							subredditId: t,
							type: e
						})) {
						n(f());
						try {
							const r = await ((e, t, n, r) => Object(d.a)(e, {
								...p,
								variables: {
									subredditId: t,
									types: n,
									includeGlobal: r
								}
							}))(o(), t, [e], !0);
							if (r.ok) {
								const e = r.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const s = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: s || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = r.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							n(v(e)), n(S(e))
						}
					}
				}, N = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a;
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
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(y({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(x(t)), e(S(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a, i;
					e(j());
					try {
						const t = await (e => Object(d.a)(e, m))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(E({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						o.c.captureException(c);
						const t = c.message ? c.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(C(t)), e(S(t))
					}
				}, T = e => async (t, n, {
					gqlContext: s
				}) => {
					var o;
					t(w(e));
					try {
						const n = await Object(l.b)(s(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const r = n.body,
								{
									errors: s
								} = r.data.cancelEconRecurringPayment;
							if (null == s ? void 0 : s.length) throw new Error(s[0].message);
							t(O({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (o = a.message) && void 0 !== o ? o : r.fbt._("Something went wrong", null, {
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
				return C
			})), n.d(t, "savedCardsPending", (function() {
				return E
			})), n.d(t, "savedCardsSuccess", (function() {
				return w
			})), n.d(t, "loadSavedCards", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/sentry/index.ts"),
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
					const s = n(),
						o = Object(c.h)(s),
						a = Object(c.l)(s),
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
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, _ = Object(o.a)(i.x), y = Object(o.a)(i.H), x = Object(o.a)(i.C), j = Object(o.a)(i.g), C = e => async (t, n, {
					apiContext: r
				}) => {
					t(j(e));
					try {
						const t = await Object(a.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						s.c.captureException(o)
					}
				}, E = Object(o.a)(i.z), w = Object(o.a)(i.A), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(E());
					try {
						const t = await Object(a.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(r)), r[0] && e(x(r[0].cardId))
					} catch (r) {
						s.c.captureException(r), e(w([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(o.a)(m.j),
				b = Object(o.a)(m.k),
				h = Object(o.a)(m.i),
				f = e => async (t, n, {
					apiContext: o
				}) => {
					t(p());
					const l = n(),
						d = Object(c.K)(l);
					try {
						const n = !d,
							r = await Object(i.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: n
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const s = r.body;
						t(b(s))
					} catch (u) {
						Object(s.b)() || console.error(u), a.c.captureException(u);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, g = Object(o.a)(m.m), v = Object(o.a)(m.n), _ = Object(o.a)(m.l), y = (e, t) => async (n, o, {
					apiContext: c
				}) => {
					n(g());
					try {
						const r = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const s = r.body;
						if (!s.coinPackages || !s.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						n(v(s))
					} catch (l) {
						Object(s.b)() || console.error(l), a.c.captureException(l);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						n(_(e))
					}
				}, x = Object(o.a)(m.h), j = () => async (e, t, {
					gqlContext: n
				}) => {
					var o, c;
					try {
						const t = await Object(i.a)(n());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (c = n.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(x({
								awards: n.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(s.b)() || console.error(m), e(Object(l.f)({
							kind: d.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), a.c.captureException(m)
					}
				}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(r.a)(o.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: r
				}) => {
					const o = await Object(s.a)(r(), {
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
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				a = Object(r.a)(s),
				i = Object(r.a)(o)
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
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
				j = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/notifications/constants.ts");
			const E = Object(f.a)(C.c),
				w = Object(f.a)(C.b),
				k = Object(f.a)(C.a),
				O = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t();
					if (!Object(j.k)(r)) return;
					const s = Object(x.b)(r),
						a = Object(x.a)(r);
					if (s || a) return;
					e(E());
					const i = await (e => Object(_.a)(e, {
						endpoint: Object(y.a)(`${v.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: o.ib.GET
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
			Object(f.a)(C.f), Object(f.a)(C.e), Object(f.a)(C.d);
			var S = n("./src/reddit/actions/platform.ts"),
				P = n("./src/reddit/actions/preferences.ts"),
				I = n("./src/reddit/actions/profile/index.ts"),
				N = n("./src/reddit/actions/subredditSettings.ts"),
				A = n("./src/reddit/actions/users.ts"),
				T = n("./src/reddit/constants/parameters.ts"),
				M = n("./src/reddit/helpers/externalAccount/index.tsx"),
				B = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				L = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				R = n("./src/reddit/selectors/externalAccount.ts");
			const U = e => async (t, n) => {
				await t(Object(A.t)());
				const f = [t(Object(P.s)()), t(Object(P.z)(!0)), t(Object(p.a)())];
				n().economics.paymentSystems.status === L.a.NotFetched && f.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(m.d)());
					const r = await Object(u.d)(n());
					r.ok ? e(Object(m.c)(r.body)) : e(Object(m.b)({
						error: r.error
					}))
				})())), await Promise.all(f); {
					const e = n();
					if (!Object(j.K)(e)) return Object(B.a)(t, e)
				}
				const {
					page: v = o.Zb.Account
				} = e.params;
				if (v === o.Zb.Gold) return void t(Object(s.c)("/settings/premium"));
				const _ = [];
				v === o.Zb.Profile && (_.push(t(Object(I.a)())), _.push(t(Object(N.g)()))), v === o.Zb.Account && (_.push(t(Object(b.o)())), _.push(t(Object(d.b)()))), v === o.Zb.Notifications && _.push(t(O())), v !== o.Zb.Privacy && v !== o.Zb.Messaging || _.push(t(Object(l.b)())), v === o.Zb.Premium && (_.push(t(Object(I.a)())), _.push(t(Object(h.o)(!0)))), await Promise.all(_); {
					const e = n(),
						o = e.platform.currentPage,
						{
							url: c
						} = o,
						l = Object(a.a)(c).get(T.d);
					if (l && (t(Object(s.c)(Object(i.a)(c, [T.d]))), Object(R.a)(e))) {
						const e = r.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(g.f)({
							text: e
						})), Object(M.b)(l)
					}
				}
				t(Object(S.m)({
					title: Object(c.k)()
				}))
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = n("./src/reddit/helpers/routeKey/index.ts"),
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
					d = Object(r.a)(n),
					u = Object(s.b)(l, n, d);
				u && a.c.has(u) && Object(o.k)(l, n, i.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return ae
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
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
				method: m.ib.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/bannedUser.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/subredditModeration/constants.ts"),
				O = n("./src/lib/initializeClient/installReducer.ts"),
				S = n("./node_modules/redux/es/redux.js");
			var P = (e = null, t) => {
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
			const I = {};
			var N = (e = I, t) => {
					switch (t.type) {
						case k.o: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(y.d)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case k.n:
						case k.m: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(y.d)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				A = Object(S.c)({
					error: P,
					pending: N
				});
			const T = {};
			var M = (e = T, t) => {
					switch (t.type) {
						case k.n: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(y.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = n("./src/reddit/actions/inContextModeration.ts");
			var L = (e = null, t) => {
				switch (t.type) {
					case B.a:
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
			var G = (e = D, t) => {
				switch (t.type) {
					case k.l:
					case k.n: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(F.merge)(e, {
							[n]: r
						})
					}
					case k.s: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(F.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var H = (e = null, t) => {
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
					error: H,
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
			const Y = {};
			var J = (e = Y, t) => {
					switch (t.type) {
						case k.n: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case k.s: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case k.l: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				V = Object(S.c)({
					api: A,
					fetchedTokens: M,
					inContext: L,
					loadMore: U,
					models: G,
					search: K,
					userOrder: J
				});
			Object(O.a)({
				features: {
					banned: V
				}
			});
			const Q = Object(a.a)(k.o),
				Z = Object(a.a)(k.n),
				X = Object(a.a)(k.m),
				$ = (e, t = {}) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						a = t.after || "",
						i = Object(y.d)(e, a),
						c = o.features.banned.fetchedTokens[i];
					if (o.features.banned.api.pending[i] || c) return;
					n(Q({
						subredditId: e,
						fetchedToken: a
					}));
					const l = o.subreddits.models[e].name,
						d = await v(s(), l, t);
					d.ok ? n(Z({
						...d.body,
						fetchedToken: a
					})) : n(X({
						subredditId: e,
						fetchedToken: a
					}))
				}, ee = Object(a.a)(k.r), te = Object(a.a)(k.q), ne = Object(a.a)(k.p), re = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r().subreddits.models[e].name,
						a = {
							username: Object(_.a)(t)
						};
					n(ee());
					const i = await v(s(), o, a);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, se = Object(a.a)(k.l), oe = Object(a.a)(k.s), ae = (e, t, n) => async (s, a, {
					apiContext: c
				}) => {
					const l = a(),
						u = l.subreddits.models[e].url,
						f = l.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), s(Object(i.h)(n));
					const g = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.ib.POST,
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
						s(Object(i.e)(n));
						const e = {
							username: t.username
						};
						s(Object(d.f)({
							kind: x.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const o = await v(c(), f, e);
						o.ok && s(se(o.body))
					} else {
						s(Object(i.f)(n, g.error));
						const e = o()(g, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(d.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const i = s().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.ib.POST,
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
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = o()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(d.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, r) => {
					const s = r();
					await Promise.all([(async () => {
						if (!Object(j.b)(u.a.BAN_USER)(s) && !Object(E.N)(s, {
								subredditId: e
							})) {
							const t = Object(E.Q)(s, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const r = Object(w.nb)(s, {
							userName: t
						});
						if (!r) return;
						const o = Object(C.h)(s, {
							subredditId: e
						});
						o && o[r.id] || await n($(e, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(a.b, {
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
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: s,
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
				return o.a.createElement(l.t, {
					onClick: t => {
						if (b && b(t), e(), p === r.awardNotification) return h();
						s(Object(d.b)(a))
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
		"./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: c.a.container
			}, s.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, s.a.createElement(l.b, null)), s.a.createElement(l.i, null, s.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), s.a.createElement(l.l, null, e.message && s.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && s.a.createElement("div", {
				className: c.a.text
			}, e.children), s.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && s.a.createElement(a.o, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), s.a.createElement(a.l, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, n) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: n
			}) => o.a.createElement("button", {
				onClick: n,
				className: Object(r.a)(c.a.closeButton, {
					[c.a.highContrast]: t
				}, e),
				"aria-label": l._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(a.b, {
				className: c.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return s.a.createElement("a", {
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
			var r, s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/localizeCurrency/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				u = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/hooks/useLocale.ts"),
				p = n("./src/reddit/selectors/crypto/points.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(r || (r = {}));
			const h = (e, t) => {
					if (e) switch (t) {
						case r.Monthly:
							return b.fbt._("{price}/mo", [b.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				f = (e, t) => {
					if (e) switch (t) {
						case r.Monthly:
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
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, {
				className: v.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: s,
					subredditId: d
				} = e, b = Object(m.a)(), g = Object(a.e)(e => Object(p.b)(e, d)), x = e.dollarPrice && Object(c.b)(e.dollarPrice, {
					locale: b,
					forceDecimals: !0
				}), j = e.tokenPrice && g && Object(l.a)(Object(u.b)(e.tokenPrice, null == g ? void 0 : g.displayConversion)) + (n ? "" : " " + g.name);
				if (!x && !j) return null;
				const C = s ? r.Monthly : r.Once;
				return o.a.createElement("span", {
					className: Object(i.a)(t, v.a.price)
				}, x && j ? _._("{dollar-price} or {point-price}", [_._param("dollar-price", h(x, C)), _._param("point-price", o.a.createElement(y, {
					subredditId: d,
					pointPrice: h(j, C)
				}))], {
					hk: "2Gif0l"
				}) : x ? f(x, C) : j ? o.a.createElement(y, {
					subredditId: d,
					pointPrice: f(j, C)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					r = e.subreddit && e.subreddit.primaryColor;
				return s.a.createElement("div", {
					className: Object(o.a)(n.container, e.className)
				}, e.subreddit ? s.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : s.a.createElement(c.a, {
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
						backgroundColor: r
					}
				}) : s.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: r
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
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: n,
				isProfileCard: r,
				isLoading: m,
				imageUrl: b,
				onFileSelected: h
			}) => {
				const f = Object(o.e)(u.a);
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.Container, n)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), s.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(d.b)();
						h(e, t)
					},
					isPending: f ? m : void 0
				}), !m && s.a.createElement("div", {
					className: Object(a.a)(p.a.EditButton, {
						[p.a.profileCard]: r
					})
				}, s.a.createElement(l.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), m && s.a.createElement(c.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${i.a.assetPath}/${r}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(i);

			function l(e) {
				const {
					index: t,
					children: n,
					color: r
				} = e, i = r && Object(a.a)(r, void 0, o.b.white);
				return s.a.createElement("div", {
					className: c.a.bullet
				}, s.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: r,
						color: i
					}
				}, s.a.createElement("span", {
					className: c.a.number
				}, t)), s.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/qrcode/lib/browser.js"),
				s = n.n(r),
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
					const e = await s.a.toDataURL(this.props.url, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				j = n("./src/lib/lessComponent.tsx"),
				C = n("./src/lib/prettyPrintNumber/index.ts"),
				E = n("./src/reddit/components/ChatButton/index.tsx"),
				w = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = n("./src/reddit/components/SubscribeButton/index.tsx"),
				S = n("./src/reddit/components/UserIcon/index.tsx"),
				P = n("./src/reddit/endpoints/profile/info.ts"),
				I = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				N = n("./src/reddit/icons/fonts/Info/index.tsx"),
				A = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var T = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				M = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = n("./src/reddit/models/Gold/Award.ts"),
				L = n("./src/reddit/models/User/index.ts"),
				R = n("./src/reddit/components/HumanDate/index.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				F = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				D = n("./src/reddit/actions/inContextModeration.ts"),
				G = n("./src/reddit/actions/modal.ts"),
				H = n("./src/reddit/actions/subredditModeration/ban.ts"),
				W = n("./src/reddit/constants/modals.ts"),
				z = n("./src/reddit/components/Hovercards/helpers.ts"),
				q = n("./src/reddit/icons/fonts/index.tsx"),
				K = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Y = n("./src/reddit/selectors/bannedUser.ts"),
				J = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				V = n.n(J);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(a.c)({
				hasModMailPermissions: Object(u.b)(K.c.mail),
				isUserBanned: (e, t) => !!Object(Y.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.nb)(e, {
					userName: t.username
				})
			});
			class X extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: o,
						sendEvent: a,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, r ? s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), a(I.e(t))
						}
					}, s.a.createElement(q.a, {
						name: "ban",
						isFilled: !0,
						className: V.a.icon
					}), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), a(I.a(t))
						}
					}, s.a.createElement(q.a, {
						name: "ban",
						className: V.a.icon
					}), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), a(I.d(t))
						}
					}, s.a.createElement(q.a, {
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
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(H.e)(n, t)),
					requestUserBanInfo: () => e(Object(H.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(D.c)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(H.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(D.d)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(G.i)(W.a.MUTE_USER))
					}
				}))(X),
				ee = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(I.c(e.contextId))
					}
				}, s.a.createElement(q.a, {
					name: "tag",
					className: V.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				re = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				se = n.n(re);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = j.a.wrapped(S.a, "UserIcon", se.a),
				ie = j.a.wrapped(O.a, "SubscribeButton", se.a),
				ce = j.a.wrapped(E.b, "ChatButton", se.a),
				le = j.a.wrapped(T, "KarmaIcon", se.a),
				de = j.a.wrapped(M.a, "PremiumIcon", se.a),
				ue = j.a.wrapped(x.a, "UserNameLink", se.a),
				me = j.a.div("UserNameMetaData", se.a),
				pe = j.a.div("MetaDataItem", se.a),
				be = j.a.div("Bullet", se.a),
				he = j.a.div("UserNameContainer", se.a),
				fe = j.a.div("UserInfoContainer", se.a),
				ge = j.a.div("PostKarma", se.a),
				ve = j.a.div("CommentKarma", se.a),
				_e = j.a.div("KarmaGrid", se.a),
				ye = j.a.div("GenericKarma", se.a),
				xe = j.a.a("InfoLink", se.a),
				je = j.a.div("KarmaCount", se.a),
				Ce = j.a.div("KarmaLabel", se.a),
				Ee = j.a.div("GenericKarmaLabel", se.a),
				we = j.a.div("BannerImage", se.a),
				ke = j.a.div("UserContainer", se.a),
				Oe = j.a.div("BottomSpacer", se.a),
				Se = j.a.div("Container", se.a),
				Pe = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(A.a, {
					className: se.a.adminIcon,
					title: _.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(x.a, {
					to: "/premium"
				}, s.a.createElement(de, null))), s.a.createElement(me, null, e.user.username && s.a.createElement(pe, null, e.user.username, s.a.createElement(be, null, "•")), s.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && s.a.createElement(R.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ie = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: n
						}
					} = e, r = {
						...P.a,
						...n
					};
					return t ? s.a.createElement(_e, null, s.a.createElement(ye, null, s.a.createElement(je, null, Object(C.b)(r.fromPosts)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ye, null, s.a.createElement(je, null, Object(C.b)(r.fromComments)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(ye, null, s.a.createElement(je, null, Object(C.b)(r.fromAwardsReceived)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [_.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(xe, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(N.a, {
						className: se.a.infoIcon
					})))), s.a.createElement(ye, null, s.a.createElement(je, null, Object(C.b)(r.fromAwardsGiven)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [_.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(xe, {
						href: B.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(N.a, {
						className: se.a.infoIcon
					}))))) : s.a.createElement(fe, null, s.a.createElement(le, null), s.a.createElement(ge, null, s.a.createElement(je, null, Object(C.b)(r.fromPosts)), s.a.createElement(Ce, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ve, null, s.a.createElement(je, null, Object(C.b)(r.fromComments)), s.a.createElement(Ce, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Ne = e => {
					const {
						className: t,
						contextId: n,
						currentUser: r,
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
						userIsBanned: j,
						userProfileStyles: C,
						acceptChats: E,
						isCommentAuthorBlocked: k
					} = e;
					if (!v) return s.a.createElement(Se, {
						style: b
					});
					const O = !!r && Object(L.e)(r) === g,
						S = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						P = v.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						N = d && d.flair,
						A = d && d.access,
						T = x && x.templateIds && x.templateIds.length > 0,
						M = x && x.displaySettings && x.displaySettings.isEnabled,
						{
							awardedLastMonth: B
						} = v,
						R = !!v.snoovatarFullBodyAsset,
						D = v.isNSFW && o;
					let G;
					return G = R ? !D && C && C.bannerBackgroundImage || void 0 : D ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Se, {
						className: t,
						id: a,
						style: b
					}, !R && G && s.a.createElement(we, {
						style: {
							backgroundImage: `url('${G}')`
						}
					}), s.a.createElement(ke, null, R ? s.a.createElement(F.a, {
						isHovercard: !0,
						bannerBackgroundImage: G,
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
					}) : s.a.createElement(he, null, s.a.createElement(ae, {
						iconUrl: P,
						isNSFW: v.isNSFW,
						userName: g
					}), s.a.createElement(Pe, {
						origin: l,
						user: v,
						userName: g
					})), s.a.createElement(Ie, {
						showAwardKarma: p,
						user: v
					}), B && s.a.createElement(U.a, {
						recentAwardings: B,
						topAwardIcon: f,
						username: g
					}), i && !O && !j && E && !k && s.a.createElement(ce, {
						contextId: n,
						userId: v.id,
						text: _.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), v.hasUserProfile && !j && !k && !O && v.enableFollowers && s.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(I.g)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0
					})), A && n && !O && h && s.a.createElement($, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), N && n && T && M && h && s.a.createElement(ne, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), s.a.createElement(w.i, {
						contextId: n,
						subredditId: h,
						user: v
					}), !(A || i) && s.a.createElement(Oe, null))
				},
				Ae = Object(k.a)(Ne),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Ae, oe({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = Ne;
			var Me = Te;
			const Be = Object(a.c)({
					activeTooltipId: h.a,
					currentUser: f.k,
					isLoggedIn: f.K,
					hideNSFWPref: f.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.m)(e, {
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
					}) => t ? Object(g.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.bb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Le = Object(o.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Le(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Me, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(o.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(a.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? s.a.createElement(s.a.Fragment, null, e.children) : null;
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						var n;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				f = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				g = n.n(f);
			class v extends s.a.Component {
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
					return s.a.createElement("div", {
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.tsx"),
				o = n("./src/reddit/components/Hovercards/helpers.m.less"),
				a = n.n(o);
			const i = r.a.wrapped(s.a, "UserActionItem", a.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: r,
						tooltipIdPrefix: s,
						tooltipType: o
					} = e;
					let a = s;
					return n && (a = `${a}--${n}`), o && (a = `${a}--${o}`), t && (a = `${a}--${t}`), r && (a = `${a}--${r}`), a
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
				return C
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return S
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
						d.a.publish(l.a, r, e)
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
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
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
				const n = Object(h.b)(e, t),
					r = Object(f.F)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var v = Object(o.b)(() => Object(a.a)(g, b.j, (e, t) => ({
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
					r = Object(f.F)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(o.b)(() => Object(a.a)(_, e => e))(e => s.a.createElement(p, {
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
				j = n("./src/reddit/hooks/usePostContext.ts");
			var C = e => {
				const t = Object(j.a)(),
					n = Object(r.useMemo)(() => ({
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
			var E = e => {
				const t = Object(j.a)(),
					n = Object(r.useMemo)(() => ({
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
				const t = Object(j.a)(),
					n = Object(r.useMemo)(() => ({
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
			var k = Object(o.b)(() => Object(a.c)({
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
			var O = Object(o.b)(() => Object(a.c)({
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
			var S = Object(o.b)(() => Object(a.c)({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class d extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: i
					} = t, d = r.description ? r.description : r.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${o.a.oldRedditUrl}/user/${n}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(a.b)(i-1)}`)), s.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", r.name), l._plural(i)], {
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
				iconRight: "_2tFYRyhxfQeK2QFUlYSYz0",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
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
				x = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				j = n.n(x);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = c.a.div("Container", j.a),
				w = c.a.div("Body", j.a),
				k = c.a.h5("Title", j.a),
				O = c.a.span("Label", j.a);
			class S extends o.a.Component {
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
						tooltip: r,
						tooltipId: s,
						className: a
					} = this.props, i = s && r ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(E, {
						className: a
					}, o.a.createElement(k, null, n), o.a.createElement(w, null, e, o.a.createElement(O, C({
						key: "label"
					}, i), t)), s && r && o.a.createElement(y.c, {
						caretOnTop: !0,
						tooltipId: s
					}, r))
				}
			}
			var P = Object(a.b)(null, e => ({
					toggleTooltip: t => e(Object(_.h)({
						tooltipId: t
					}))
				}))(Object(u.b)(S)),
				I = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				N = n.n(I);
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
				T = c.a.div("Container", N.a);

			function M(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const B = e => {
				const t = Object(h.a)(),
					n = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					a = e.isOwnProfile ? o.a.createElement(o.a.Fragment, null, Object(l.b)(e.subscribers, {
						displayFull: !0
					}), o.a.createElement(f.a, {
						name: "right",
						className: N.a.iconRight
					})) : Object(l.b)(e.subscribers, {
						displayFull: !0
					}),
					i = o.a.createElement(P, {
						className: e.highlightClassName,
						icon: o.a.createElement(f.a, {
							name: "user",
							isFilled: !0,
							className: N.a.icon,
							key: "followers"
						}),
						title: r.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: a
					});
				return e.isOwnProfile ? o.a.createElement("a", {
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
					className: c,
					highlightClassName: u
				} = e, p = {
					...m.a,
					...t
				}, b = M(a, "karma"), h = M(a, "cakeday"), g = `${r.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[r.fbt._plural(p.fromPosts,"number",Object(l.b)(p.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${r.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[r.fbt._plural(p.fromComments,"number",Object(l.b)(p.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${r.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[r.fbt._plural(p.fromAwardsReceived,"number",Object(l.b)(p.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${r.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[r.fbt._plural(p.fromAwardsGiven,"number",Object(l.b)(p.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return o.a.createElement(T, {
					className: c
				}, o.a.createElement(P, {
					className: u,
					icon: o.a.createElement(f.a, {
						name: "karma",
						isFilled: !0,
						className: N.a.icon,
						key: "karma"
					}),
					label: Object(l.b)(p.total, {
						displayFull: !0
					}),
					title: r.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: b,
					tooltip: g
				}), o.a.createElement(P, {
					className: u,
					icon: o.a.createElement(f.a, {
						name: "cake",
						isFilled: !0,
						className: N.a.icon,
						key: "cakeDay"
					}),
					label: o.a.createElement(d.a, {
						seconds: s,
						showDay: !0
					}),
					title: r.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: h,
					tooltip: o.a.createElement(d.d, {
						seconds: s
					})
				}), n && i > 0 && o.a.createElement(B, {
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
				return B
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				C = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				E = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				w = n.n(E),
				k = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				O = n.n(k);
			var S = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: n,
					isDeletingBanner: r,
					isDeletingIcon: o,
					isEmployee: a,
					isGold: i,
					isNSFW: c,
					isOwnProfile: l,
					onClickSnoovatar: d,
					onDeleteBanner: u,
					onDeleteIcon: m,
					profileIcon: p,
					title: E,
					userCreated: k,
					username: S,
					url: P
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(j.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: S,
					isDeletingBanner: !!r,
					onDeleteBanner: u
				}), s.a.createElement("div", {
					className: w.a.SnooIconWrapper
				}, l || !p || c ? s.a.createElement(y.a, {
					iconUrl: p,
					isNSFW: c,
					userName: S,
					isProfileIdCard: !0
				}) : s.a.createElement(v.b, {
					href: p
				}, s.a.createElement(y.a, {
					iconUrl: p,
					isNSFW: c,
					userName: S,
					isProfileIdCard: !0
				})), t && !n && (o ? s.a.createElement(g.a, {
					sizePx: 20,
					className: O.a.loadingIcon
				}) : s.a.createElement(_.a, {
					name: "close",
					className: O.a.closeIcon,
					onClick: m
				}))), !t && l && s.a.createElement(f.a, {
					to: "/settings/profile",
					className: w.a.settingsLink
				}, s.a.createElement(_.a, {
					name: "settings",
					className: O.a.settingsIcon
				})), E && s.a.createElement("h4", {
					className: w.a.userTitle
				}, E), s.a.createElement(C.a, {
					className: w.a.userName,
					username: S,
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
					title: h.fbt._("{username} has Reddit Premium", [h.fbt._param("username", S)], {
						hk: "3Fylv"
					}),
					href: `${b.a.redditUrl}/premium`
				}, s.a.createElement(_.a, {
					name: "premium",
					isFilled: !0,
					className: w.a.premiumIcon
				})), l && s.a.createElement(x.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				P = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var I = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDefaultIcon: r,
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
				}) => f ? s.a.createElement(P.a, {
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
				}) : s.a.createElement(S, {
					bannerBackgroundImage: e,
					editMode: n,
					isDefaultIcon: r,
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
			class B extends s.a.PureComponent {
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
						className: r,
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
						onClickSnoovatar: j,
						onDeleteIcon: C,
						onDeleteBanner: E,
						prefersReducedAnimations: w,
						editMode: k,
						isNftPreview: O
					} = this.props;
					return O ? s.a.createElement(s.a.Fragment, null, s.a.createElement(N.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDeletingBanner: x,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: j,
						onDeleteBanner: E,
						prefersReducedAnimations: w,
						snoovatarUrl: b,
						title: h,
						userCreated: g,
						username: v,
						actions: e,
						url: f,
						footer: o
					})) : s.a.createElement(A, {
						className: r
					}, s.a.createElement(I, {
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
						onClickSnoovatar: j,
						onDeleteBanner: E,
						onDeleteIcon: C,
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
						isOverlay: l
					}), this.renderAwardedLastMonth(), s.a.createElement(M, null, e), o)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
						hideNSFWPref: s,
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
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, m) : a && s ? null : m
				}
			}
			t.a = Object(l.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
					} = this.state, p = o.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: s,
						userName: d,
						isProfileIcon: !0
					});
					return t && Object(l.e)(t) === d ? o.a.createElement(i.a, {
						altText: r.fbt._("{userName} avatar image", [r.fbt._param("userName", d)], {
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: a.k,
					hideNSFWPref: a.C
				}),
				c = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(o.B)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				let j = null;
				y || (j = e ? "user_hovercard" : "profile_overview");
				const C = Object(s.useCallback)(() => v(Object(m.f)(e ? "user_hovercard" : "profile_overview", t)), [e, v, t]);
				return o.a.createElement(u.t, {
					onClick: () => {
						n ? (v(m.g), y && x === b.a.notVoted && _(Object(c.db)(y))) : C();
						const e = n ? "postify" : "copy";
						_(Object(l.b)({
							clickSource: j,
							share: h,
							source: e
						}))
					},
					className: Object(r.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				isOwnProfile: r,
				onClick: l
			}) {
				return s.a.createElement(a.t, {
					onClick: l,
					isFullWidth: !0,
					className: Object(o.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !t && r,
						[d.a.compactButtonLayout]: e
					}, n)
				}, t ? s.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : s.a.createElement("div", {
					className: d.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: d.a.chevronIcon
				}) : s.a.createElement(i.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				footer: j
			}) => {
				const {
					badge: C,
					url: E
				} = Object(r.useMemo)(() => (function(e) {
					const t = h.exec(e) || ["", "", ""],
						n = t[1],
						r = t[2];
					return {
						id: n,
						url: "testing" === r ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${n}`,
						badge: r
					}
				})(p), [p]), w = Object(o.e)(l.X);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(b.a.container, y)
				}, s.a.createElement(c.a, {
					className: b.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${a.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: b.a.inner
				}, "testing" !== C && s.a.createElement("img", {
					alt: `${C} NFT`,
					className: b.a.badgeImage,
					src: `${a.a.assetPath}/img/snoovatars/nft_badge_${C}.svg`
				}), s.a.createElement("img", {
					className: b.a.cutout,
					src: `${a.a.assetPath}/img/snoovatars/hole-cutout-${w?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: E,
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
				}, x))), s.a.createElement("div", {
					className: Object(i.a)(b.a.footer, y)
				}, j))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				editMode: r,
				isDeletingBanner: c,
				onDeleteBanner: d
			}) {
				return s.a.createElement("div", {
					className: l.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), r && e && (c ? s.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(a.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
				userCreated: r,
				username: c,
				...l
			}) {
				const d = t ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(a.d, {
					seconds: r,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(o.a, i({}, l, {
					className: e,
					to: n
				}), d) : s.a.createElement("span", i({}, l, {
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), o && a.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${r.a.redditUrl}/premium`
			}, a.a.createElement(l.a, {
				className: u.a.snoovatarPremiumIcon
			})), d && a.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				j = () => {
					const e = v(y),
						t = v(x),
						n = v(_);
					return Object(a.a)(h.a.particle, e, t, n)
				};
			class C extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${j()}`
					})
				}
			}
			var E = C,
				w = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				k = n.n(w),
				O = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: r,
				isDeletingBanner: b,
				isEmployee: f,
				isGold: g,
				isNSFW: v,
				isOwnProfile: _,
				onClickSnoovatar: y,
				onDeleteBanner: x,
				prefersReducedAnimations: j,
				snoovatarUrl: C,
				title: w,
				userCreated: S,
				username: P,
				url: I,
				isHovercard: N
			}) => {
				const A = Object(o.e)(e => !_ && !!C && Object(l.h)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!r,
					isNSFW: v,
					username: P,
					isDeletingBanner: !!b,
					onDeleteBanner: x
				}), s.a.createElement("div", {
					className: h.a.snoovatarContainer
				}, g && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: h.a.topGlow
				}), s.a.createElement("div", {
					className: h.a.bottomGlow
				}), !j && s.a.createElement(E, null)), s.a.createElement("img", {
					className: Object(a.a)(h.a.snoovatar, {
						[h.a.premiumGlow]: g
					}),
					src: C || void 0
				})), !r && _ && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: k.a.settingsIcon
				})), s.a.createElement(O.a, {
					isEmployee: f,
					isGold: g,
					isNSFW: v,
					title: w,
					username: P
				}), s.a.createElement(p.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: P,
					userCreated: S,
					url: I
				}), (_ || !n && !!C) && s.a.createElement(d.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: _,
					onClick: y
				}), A && s.a.createElement(u.a, {
					username: P,
					isHovercard: !!N,
					share: {
						username: P
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = a.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: r,
					text: a,
					tooltipContentClass: i,
					...d
				} = e;
				return s.a.createElement("div", l({}, d, {
					className: Object(o.a)(c.a.container, n)
				}), a ? s.a.createElement("div", {
					className: Object(o.a)(c.a.tooltip, i, r ? c.a.below : c.a.above)
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				g = p.a.wrapped(i.f, "PrimaryButton", m.a),
				v = p.a.wrapped(i.o, "SecondaryButton", m.a),
				_ = p.a.div("ButtonWrapper", m.a),
				y = p.a.textarea("TextArea", m.a),
				x = p.a.h3("SectionLabel", m.a),
				j = p.a.p("H", m.a),
				C = p.a.p("P", m.a),
				E = p.a.wrapped(l.a, "Input", m.a),
				w = p.a.div("CheckBoxWrapper", m.a),
				k = p.a.ul("UL", m.a),
				O = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				S = {
					ios: () => r.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => r.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => r.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => r.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class P extends o.a.Component {
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
						return o.a.createElement(d.l, null, o.a.createElement(j, null, r.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), o.a.createElement(k, null, o.a.createElement("li", null, r.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), o.a.createElement("li", null, r.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && o.a.createElement("li", null, r.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(O).map((e, t) => o.a.createElement("span", {
							key: e
						}, !!t && ", ", o.a.createElement("a", {
							href: O[e],
							target: "_blank"
						}, S[e] && S[e]()))))), o.a.createElement(x, null, r.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), o.a.createElement(y, {
							placeholder: r.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), o.a.createElement(x, null, r.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), o.a.createElement(E, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: r.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), o.a.createElement(E, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: r.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), o.a.createElement(w, null, o.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), o.a.createElement("label", null, r.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), o.a.createElement(_, null, o.a.createElement(v, {
							onClick: e.exit
						}, r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), o.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, r.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => r.fbt._("{text with URL}", [r.fbt._param("text with URL", t ? o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", o.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", o.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => o.a.createElement(d.l, null, o.a.createElement(j, null, r.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), o.a.createElement(C, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
						platform: "android",
						isMobile: !0
					}), this.props.user && this.props.user.hasIosSubscription && this.renderPremiumNotificationMessage({
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
					}, r.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => o.a.createElement(d.l, null, o.a.createElement(j, null, r.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), o.a.createElement(_, null, o.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, r.fbt._("Back", null, {
						hk: "1P3x9"
					})), o.a.createElement(g, {
						onClick: this.handleSubmit
					}, r.fbt._("Deactivate", null, {
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
					}, o.a.createElement(d.b, null)), o.a.createElement(d.i, null, o.a.createElement(h, null, r.fbt._("Feed settings", null, {
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
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
				o = Object(r.a)({
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
				a = Object(r.a)({
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
				i = Object(r.a)({
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
		"./src/reddit/components/Settings/PremiumCancellation/PremiumBenefitsModal.m.less": function(e, t, n) {
			e.exports = {
				modal: "GbGVQMxG8TsdHNPFQrGrW",
				header: "_1l-V4Au1VQVpzGOKLN-ac8",
				contentWrapper: "_2yjUbB3AQ03iT7CkK3_1Fs",
				benefitsGrid: "_aC6M8eCtGvNzFmDYwtl4",
				benefitUnit: "J2jWY9FPY2Bp_uMeuPQe6",
				text: "Zr70s_e20rz-MY1zUKJJt",
				title: "_3KYn9DpOrv78DTUEfjy4bO",
				description: "_2jwOAfrQAsqMzv91uFMn_C",
				icon: "LcQc4LDK55bjVuEmZUTwa",
				buttonsRow: "_3g329z7SnueuZRUDCDDEce",
				button: "_1Vnfi4EDFzP2yzA4uu75ZU"
			}
		},
		"./src/reddit/components/Settings/PremiumForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return he
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/moment/moment.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				u = n("./src/config.ts"),
				m = n("./src/lib/prettyPrintNumber/index.ts"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				b = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				g = n("./src/reddit/selectors/gold/productOffers.ts"),
				v = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				_ = n("./src/reddit/components/Settings/PremiumCancellation/PremiumBenefitsModal.m.less"),
				y = n.n(_);
			const x = ({
				benefitKey: e,
				options: t
			}) => {
				const n = f.b[e](t),
					r = f.a[e](t),
					s = `${u.a.assetPath}/img/gold/premium-marketing/benefits-icons/${e}.png`;
				return i.a.createElement("div", {
					className: y.a.benefitUnit,
					onClick: () => {
						console.log("GOLDENG-11197 add telemetry")
					}
				}, i.a.createElement("div", {
					className: y.a.icon,
					style: {
						backgroundImage: `url('${s}')`
					}
				}), i.a.createElement("div", {
					className: y.a.text
				}, i.a.createElement("div", {
					className: y.a.title
				}, n), i.a.createElement("div", {
					className: y.a.description
				}, r)))
			};
			var j = Object(p.a)(({
					toggleModal: e
				}) => {
					const t = Object(c.e)(g.g),
						n = Object(c.e)(v.m),
						s = Object(c.e)(v.i) || "1000",
						a = {
							periodicalCoins: Object(c.e)(v.j),
							bonusCoins: n
						},
						l = r.fbt._("Are you sure?", null, {
							hk: "4Fg7CB"
						}),
						d = o()(t.expiresAt).format("MMMM DD, YYYY"),
						u = r.fbt._("You will not be able to use these Premium benefits after {date} and you won't get a {amount} Coin bonus if you subscribe again.", [r.fbt._param("date", d), r.fbt._param("amount", Object(m.a)(s))], {
							hk: "1Z8tRE"
						});
					return i.a.createElement("div", {
						className: y.a.modal
					}, i.a.createElement("div", {
						className: y.a.header
					}, l, i.a.createElement(b.a, {
						onClick: e
					})), i.a.createElement("div", {
						className: y.a.contentWrapper
					}, u, i.a.createElement("div", {
						className: y.a.benefitsGrid
					}, f.c.map(e => i.a.createElement(x, {
						key: e.key,
						benefitKey: e.key,
						telemetryTag: e.telemetryTag,
						options: a
					})))), i.a.createElement("div", {
						className: y.a.buttonsRow
					}, i.a.createElement(h.t, {
						className: y.a.button,
						priority: h.c.Secondary,
						onClick: e
					}, r.fbt._("DISMISS", null, {
						hk: "3nRNXW"
					})), i.a.createElement(h.t, {
						className: y.a.button,
						priority: h.c.Primary,
						onClick: () => {
							console.log("GOLDENG-11199 add survey modal")
						}
					}, r.fbt._("YES, CANCEL", null, {
						hk: "4y9xev"
					}))))
				}),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				E = n("./node_modules/reselect/es/index.js"),
				w = n("./src/reddit/actions/gold/productOffers.ts"),
				k = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/actions/toaster.ts"),
				S = n("./src/reddit/components/ConfirmModal/index.tsx"),
				P = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/gold/powerups/index.ts")),
				I = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/actions/gold/powerups.ts"),
				A = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				T = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = n("./src/reddit/controls/TextButton/index.tsx"),
				B = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var R = Object(p.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: r,
						subredditInfo: s
					} = e, o = Object(c.d)();
					return i.a.createElement(T.e, {
						className: t
					}, i.a.createElement(T.i, null, i.a.createElement(B.a, null, i.a.createElement(T.q, null, L._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), i.a.createElement(M.a, {
						onClick: r
					}, i.a.createElement(T.b, null)))), i.a.createElement(T.l, null, i.a.createElement(T.p, null, L._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [L._param("subreddit name", s.prefixedName)], {
						hk: "2EKYNO"
					}))), i.a.createElement(T.g, null, i.a.createElement(T.r, {
						onClick: () => {
							n.isPremium ? o(Object(N.k)(s.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : o(Object(A.a)(n.id, s.id, n.allocatedAt)), r()
						},
						"data-redditstyle": !0
					}, L._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				U = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				F = n.n(U);

			function D(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var G = function(e) {
					const [t, n] = Object(a.useState)(!1), {
						className: s,
						allocation: o
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: f
					} = o, g = D(b), v = D(c), _ = D(l), {
						prefixedName: y
					} = p, x = v ? r.fbt._("Subscribed {date}.", [r.fbt._param("date", v)], {
						hk: "24RAUK"
					}) : "", j = _ ? r.fbt._("You can cancel after {date}.", [r.fbt._param("date", _)], {
						hk: "48A2TC"
					}) : "", C = g ? r.fbt._("Will be renewed on {date}.", [r.fbt._param("date", g)], {
						hk: "2kYkAv"
					}) : "", E = g ? r.fbt._("Still active until {date}.", [r.fbt._param("date", g)], {
						hk: "IZweZ"
					}) : "", w = m ? u ? x : `${x} ${j}` : d ? `${x} ${C}` : `${x} ${E}`, k = m ? r.fbt._("{powerups count} Reddit Premium powerup/monthly", [r.fbt._param("powerups count", f.toLocaleString())], {
						hk: "4iP1Np"
					}) : r.fbt._("{powerups count} powerup/monthly", [r.fbt._param("powerups count", f.toLocaleString())], {
						hk: "11DNVJ"
					}), O = m && u || !m && d;
					return i.a.createElement("div", {
						className: Object(I.a)(s, F.a.container),
						title: w
					}, i.a.createElement("div", {
						className: F.a.allocationName
					}, r.fbt._("{subreddit name} Powerup", [r.fbt._param("subreddit name", y)], {
						hk: "4qAoO"
					})), i.a.createElement("div", {
						className: F.a.details
					}, k), i.a.createElement(h.r, {
						className: F.a.button,
						disabled: !O,
						onClick: () => n(!0)
					}, m || O ? r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : r.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && i.a.createElement(R, {
						withOverlay: !0,
						allocation: o,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				H = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				W = n.n(H);
			var z = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement("div", {
						className: W.a.title
					}, r.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => i.a.createElement(G, {
						allocation: e,
						className: W.a.allocation,
						key: e.allocatedAt
					})))
				},
				q = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				K = n.n(q);

			function Y(e) {
				return i.a.createElement("header", {
					className: Object(I.a)(e.className, K.a.container)
				}, i.a.createElement("div", {
					className: K.a.title
				}, r.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), i.a.createElement("div", {
					className: K.a.subtitle
				}, r.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var J = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				V = n.n(J);
			const Q = Object(E.c)({
				allocationByKey: P.x
			});
			var Z = Object(c.b)(Q)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement(Y, {
						className: V.a.header
					}), i.a.createElement(z, {
						allocationList: n
					})) : null
				})),
				X = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				$ = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				ee = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				te = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				ne = n("./src/reddit/components/TrackingHelper/index.tsx"),
				re = n("./src/higherOrderComponents/makeAsync.tsx"),
				se = n("./src/lib/loadWithRetries/index.ts"),
				oe = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var ae = Object(re.a)({
					getComponent: () => Object(se.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(oe.d)().catch(() => {})])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ie = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = n("./src/reddit/models/Toast/index.ts"),
				le = n("./src/reddit/endpoints/gold/purchase.ts"),
				de = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				ue = n("./src/reddit/selectors/activeModalId.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/components/Settings/index.m.less"),
				be = n.n(pe);
			const he = "update_card_modal_id",
				fe = Object(E.c)({
					cancelSubscriptionModalIsOpen: Object(ue.b)("settings_optout_modal_id"),
					premiumBenefitsModalIsOpen: Object(ue.b)("premium_benefits_modal_id"),
					isPremiumImprovedCancellationEnabled: C.y,
					goldExpiration: me.o,
					hasAndroidSubscription: me.p,
					hasIosSubscription: me.v,
					hasStripeSubscription: me.y,
					hasPaypalSubscription: me.w,
					isGold: me.s,
					isPremiumSubscriber: me.t,
					premiumProductOfferSubscription: g.g,
					premiumProductOfferSubscriptionIsCanceled: g.f,
					updateCardModalIsOpen: Object(ue.b)(he)
				}),
				ge = Object(c.b)(fe, e => ({
					navigateToPurchasePremium: () => e(Object(l.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(k.i)("settings_optout_modal_id")),
					togglePremiumBenefitsModal: () => e(Object(k.i)("premium_benefits_modal_id")),
					requestPurchaseCatalog: () => e(Object(d.b)()),
					toggleUpdateCardModal: () => e(Object(k.i)(he)),
					requestProductOfferSubscriptions: () => e(Object(w.b)()),
					requestCancelProductOfferSubscription: t => e(Object(w.a)(t)),
					showUpdateCardSuccessToast: () => {
						const t = r.fbt._("You successfully updated your payment information!", null, {
							hk: "3m4P1N"
						});
						e(Object(O.f)({
							kind: ce.b.SuccessCommunity,
							text: t
						}))
					}
				})),
				ve = (e, t, n) => e && !n ? r.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [r.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : r.fbt._("Your Premium membership is valid until {date}.", [r.fbt._param("date", t)], {
					hk: "4m4zaE"
				});
			class _e extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleStripeCardUpdate = () => {
						var e;
						const t = null === (e = this.props.pageLayer) || void 0 === e ? void 0 : e.queryParams;
						(null == t ? void 0 : t[le.d]) && this.props.showUpdateCardSuccessToast()
					}, this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(de.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t,
							togglePremiumBenefitsModal: n,
							isPremiumImprovedCancellationEnabled: r
						} = this.props;
						r ? n() : (e(Object(de.a)()), t())
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(de.f)() : Object(de.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(de.g)() : Object(de.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(de.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(de.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(de.j)()), this.props.requestProductOfferSubscriptions(), this.props.requestPurchaseCatalog(), this.handleStripeCardUpdate()
				}
				async navigateToCancel() {
					const {
						premiumProductOfferSubscription: e,
						requestCancelProductOfferSubscription: t,
						toggleCancelSubscriptionModal: n,
						requestProductOfferSubscriptions: r
					} = this.props;
					if (null == e ? void 0 : e.id) {
						await t(e.id) && (n(), r())
					}
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						premiumBenefitsModalIsOpen: t,
						togglePremiumBenefitsModal: n,
						hasAndroidSubscription: s,
						hasIosSubscription: a,
						hasPaypalSubscription: c,
						hasStripeSubscription: l,
						isGold: d,
						isPremiumSubscriber: u,
						premiumProductOfferSubscription: m,
						premiumProductOfferSubscriptionIsCanceled: p,
						isResponsiveSettingsEnabled: b,
						toggleUpdateCardModal: h,
						updateCardModalIsOpen: f,
						prefs: {
							highlightComments: g,
							hideAds: v
						}
					} = this.props, _ = s || a, y = Boolean(m), x = o()(null == m ? void 0 : m.expiresAt).format("MMMM DD, YYYY.");
					return i.a.createElement($.a, null, i.a.createElement(X.b, {
						className: be.a.premiumHeading,
						isResponsiveSettingsEnabled: b
					}, r.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), i.a.createElement(X.a, {
						className: be.a.premiumExpirationString
					}, r.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), i.a.createElement(ee.a, null, r.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), i.a.createElement(X.a, {
						className: be.a.premiumExpirationString
					}, d ? ve(y, x, p) : r.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!y || p) && i.a.createElement(te.g, {
						label: d ? r.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : r.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), l && i.a.createElement(te.a, {
						label: r.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: h
					}), c && i.a.createElement(te.g, {
						label: r.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), u && !_ && !p && i.a.createElement(te.a, {
						label: r.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), d && i.a.createElement(i.a.Fragment, null, i.a.createElement(ee.a, null, r.fbt._("premium features", null, {
						hk: "20MX2a"
					})), i.a.createElement(te.p, {
						on: v,
						disabled: !d,
						onClick: this.onHideAdsToggle,
						label: r.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: r.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), i.a.createElement(te.p, {
						on: g,
						disabled: !d,
						onClick: this.onHighlightCommentsToggle,
						label: r.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: r.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), f && i.a.createElement(ae, null), e && i.a.createElement(S.a, {
						headerText: r.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: r.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: r.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: r.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}), t && i.a.createElement(j, {
						toggleModal: n,
						onOverlayClick: n,
						withOverlay: !0
					}), i.a.createElement(Z, null))
				}
			}
			const ye = Object(ie.u)();
			t.b = ye(ge(Object(ne.c)(_e)))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.input("Input", i.a),
				d = c.a.label("Label", i.a),
				u = c.a.button("Button", i.a),
				m = c.a.div("Wrapper", i.a);
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
						label: r,
						onClick: a,
						onChange: c,
						type: p = "text",
						value: b
					} = this.props;
					return s.a.createElement(m, {
						className: Object(o.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, s.a.createElement(l, {
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
					}), s.a.createElement(d, null, r), a && s.a.createElement(u, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = a.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...r
				} = e;
				return s.a.createElement(d, l({}, r, {
					className: Object(o.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = a.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
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
						labelClassName: r,
						value: a,
						controlName: i,
						isUploading: c,
						tabIndex: l
					} = this.props;
					return c ? s.a.createElement(o.a, {
						className: e
					}) : s.a.createElement(o.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: r,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				a = n.n(o),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", a.a),
				l = i.a.div("Content", a.a),
				d = i.a.div("Sidebar", a.a);
			t.a = e => s.a.createElement(c, {
				className: e.className
			}, s.a.createElement(l, null, e.children), s.a.createElement(d, null, e.sidebar))
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
			var r = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", s.a)
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
				return V
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return oe
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
				return xe
			})), n.d(t, "h", (function() {
				return je
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = g.a.span("Wrapper", y.a),
				C = g.a.select("Inner", y.a),
				E = g.a.wrapped(v.b, "Caret", y.a);

			function w({
				className: e,
				innerClassName: t,
				...n
			}) {
				const r = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return s.a.createElement(j, {
					className: e
				}, s.a.createElement(C, x({
					className: t
				}, n)), s.a.createElement(E, x({
					isSubreddit: !0
				}, r)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				I = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				N = n("./node_modules/lodash/range.js"),
				A = n.n(N),
				T = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				B = n("./src/reddit/models/Flair/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				F = n.n(U);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(d.a)(b.a),
				H = g.a.wrapped(P.a, "Circle", F.a),
				W = g.a.h3("Label", F.a),
				z = g.a.wrapped(O.c, "Subtext", F.a),
				q = g.a.wrapped(m.a, "HoverTooltip", F.a),
				K = g.a.div("ControlContainer", F.a),
				Y = g.a.div("TextContainer", F.a),
				J = g.a.div("ActionContainer", F.a),
				V = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: r,
					isNightModeOn: o,
					disabled: a,
					indent: i,
					last: l,
					...d
				}) => s.a.createElement("div", D({}, d, {
					className: Object(c.a)(F.a.Wrapper, e, {
						[F.a.mColumn]: "column" === t,
						[F.a.mDisabled]: !!a,
						[F.a.mIndent]: !!i,
						[F.a.mLast]: !!l,
						[F.a.isCreateCommunity]: !!n,
						[F.a.inModal]: !!r,
						[F.a.isNightModeOn]: !!o
					})
				})),
				Q = g.a.a("Link", F.a),
				Z = g.a.wrapped(Q, "SubtextLink", F.a),
				X = g.a.wrapped(I.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(S.a, "ArrowRight", F.a),
				te = e => s.a.createElement(V, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(Y, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(H, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				re = g.a.wrapped(ne, "SpoilerFlair", F.a),
				se = g.a.wrapped(ne, "NSFWFlair", F.a),
				oe = e => {
					switch (e.flair) {
						case B.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case B.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return s.a.createElement(V, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(Y, null, s.a.createElement(M.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(W, null, e.label))), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(K, null, e.tooltip && s.a.createElement(q, {
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
				ie = g.a.input("RangeSliderInput", F.a),
				ce = g.a.div("RangeSlider", F.a),
				le = g.a.div("Ticks", F.a),
				de = g.a.div("TickText", F.a),
				ue = g.a.div("PreSubText", F.a),
				me = Object(i.c)({
					isNightModeOn: R.X
				}),
				pe = Object(o.b)(me)(e => s.a.createElement(V, {
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
				}, s.a.createElement(ce, null, s.a.createElement(ie, {
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
				}), s.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => s.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => s.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(M.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(K, null, s.a.createElement(T.o, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => s.a.createElement(V, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(X, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				fe = e => s.a.createElement(V, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[F.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, !!e.hintText && s.a.createElement("div", {
					className: F.a.ActionHintText
				}, e.hintText), s.a.createElement($, {
					onClick: e.onClick,
					className: Object(c.a)({
						[F.a.NoColor]: e.color && "none" === e.color
					})
				}, s.a.createElement(ee, {
					className: Object(c.a)({
						[F.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				ge = Object(i.c)({
					isOpen: (e, t) => Object(L.b)(t.id)(e)
				}),
				ve = Object(o.b)(ge, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(W, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, (e => s.a.createElement("div", {
					className: F.a.DropdownWrapper,
					onClick: e.openDropdown
				}, s.a.createElement("span", {
					className: F.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(v.b, {
					className: F.a.DropdownTriangle
				}), s.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(h.b, {
					className: F.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && s.a.createElement("div", {
					className: F.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				_e = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: o,
					...a
				}) => {
					const i = Object(r.useCallback)(e => o(e.target.value), [o]),
						{
							items: c
						} = a;
					return s.a.createElement(V, {
						disabled: e
					}, s.a.createElement(Y, null, s.a.createElement("label", {
						htmlFor: a.id
					}, s.a.createElement(W, {
						className: a.labelClassname
					}, a.label)), s.a.createElement(z, null, a.subtext)), s.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), s.a.createElement(V, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(w, {
						id: a.id,
						className: "redditStyle",
						disabled: e || a.inputDisabled,
						onChange: i,
						value: a.selected
					}, c.map(({
						value: e,
						displayName: t
					}) => s.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ye = e => s.a.createElement(V, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement(W, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, e.children)),
				xe = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && s.a.createElement("span", {
					className: F.a.tag
				}, "r/"), s.a.createElement(f.a, {
					className: e.isCreateCommunity ? F.a.input : void 0,
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
				je = e => s.a.createElement(te, {
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
					className: F.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && s.a.createElement("div", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.wrapped(d.a, "ImageUploadIcon", m.a), h = a.a.div("ImageIconRow", m.a), f = a.a.div("ImageUploadText", m.a), g = a.a.wrapped(i.a, "FileDrop", m.a), v = a.a.div("ContainerUploading", m.a), _ = e => s.a.createElement(v, {
				className: e.className
			}, s.a.createElement(h, null, s.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), s.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), y = a.a.label("Label", m.a);
			t.b = e => s.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(y, {
					className: Object(o.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, s.a.createElement(h, null, e.icon || s.a.createElement(b, null)), s.a.createElement(f, null, e.label), s.a.createElement(c.a, {
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(s);
			const a = r.a.section("FormPage", o.a),
				i = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				l = r.a.div("HomePageGroup", o.a),
				d = r.a.h1("FormPageTitle", o.a),
				u = r.a.div("FormPageSection", o.a),
				m = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				b = r.a.div("FormElement", o.a),
				h = r.a.div("FormGroupDescription", o.a),
				f = r.a.div("FormItem", o.a),
				g = r.a.h3("FormElementTitle", o.a),
				v = r.a.div("FormElementDescription", o.a),
				_ = r.a.div("FormElementError", o.a),
				y = r.a.div("FormElementSubGroup", o.a),
				x = r.a.li("FormListItem", o.a)
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = r.a.wrapped(s.a, "ModalInput", d.a),
				m = r.a.input("Input", d.a),
				p = r.a.wrapped(c.a, "RadioOn", d.a),
				b = r.a.wrapped(i.a, "RadioOff", d.a),
				h = r.a.wrapped(o.a, "Checkbox", d.a),
				f = r.a.wrapped(a.a, "CheckboxSelected", d.a),
				g = r.a.textarea("Textarea", d.a),
				v = r.a.label("StyledLabel", d.a),
				_ = r.a.input("StyledFileInput", d.a)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...r
				}) => o.a.createElement(a.t, u({}, r, {
					priority: m(a.c.Primary, e, t),
					className: Object(d.a)(r.className, l.a.BaseButton),
					size: n ? a.d.S : a.d.M
				})),
				b = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					priority: n,
					small: r,
					...s
				}) => o.a.createElement(a.t, u({}, s, {
					priority: m(a.c.Secondary, t, n),
					className: Object(d.a)(s.className, l.a.BaseButton),
					size: r ? a.d.S : a.d.M,
					text: b(e)
				}));
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						priority: r,
						small: s = !1,
						isFullWidth: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: s,
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => o[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(o.a))
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
				return r
			})), n.d(t, "a", (function() {
				return j
			}));
			var r, s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(r || (r = {}));
			const v = d.a.wrapped(b.a, "Gear", f.a),
				_ = d.a.h3("Title", f.a),
				y = d.a.div("TabNavContainer", f.a),
				x = d.a.div("Tabs", f.a),
				j = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...r
				}) => i.a.createElement(p.a, g({}, r, {
					"aria-selected": e,
					className: Object(c.a)(r.className, {
						[f.a.mIsActive]: e,
						[f.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", f.a),
				C = e => {
					switch (e) {
						case r.GEAR:
							return i.a.createElement(v, null);
						default:
							return null
					}
				},
				E = () => window.pageYOffset || window.scrollY,
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
						this.state.sticky || this.forceUnsticky ? E() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : E() >= w && this.setState({
							sticky: !0
						})
					}, l.J), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					} = this.props, r = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return i.a.createElement(y, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(_, {
						className: Object(c.a)(r, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, C(this.props.icon), this.props.title), i.a.createElement(x, {
						className: Object(c.a)(r, {
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				to: `${r.a.redditUrl}/user/${e.username}`
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const l = o.a.div("WidgetBackground", c.a),
				d = o.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				isInJoinOptimizationsExperiment: e => Object(a.a)(e) || Object(a.b)(e) || Object(a.c)(e) || Object(a.d)(e),
				userIsSubscriber: i.cb
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = {
					[s.V.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.V.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.V.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.V.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.V.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.V.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.V.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[s.ec.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.ec.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.ec.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.ec.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.ec.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.ec.ALL]: () => r.fbt._("All Time", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(a.a, {
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
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
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
						onMouseMove: s()(this.handleMouseMove, 500)
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
				return y
			})), n.d(t, "c", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(s),
				a = n("./node_modules/raf/index.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
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
					return l.a.createElement("div", {
						className: h.a.wrapper
					}, l.a.createElement(p.a, {
						className: h.a.titleRow
					}, n), l.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: h.a.buttonRow
					}, l.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(g);
			class _ extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
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
						errorModalTitle: s = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), i && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const y = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: o = []
					} = e, a = o.length ? o : s ? [s] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(_, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				x = e => l.a.createElement(y, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/flow.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						inputRef: r,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, i)), e.label && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: r
					}, l)), e.label && s.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
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
						placeholder: r,
						errors: o = []
					} = this.props;
					return e.map((e, a) => s.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!o[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!o[a] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, o[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && n.length >= r) && !i;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && s.a.createElement(g, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class o extends s.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, o = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = r.a.wrapped(s.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
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
					endpoint: `${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`
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
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me`,
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
					endpoint: `${r.a.metaUrl}/ps/me`,
					method: "get"
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/stripe-sources/${t}`,
					method: "delete"
				})
			}

			function l(e, t) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-sources/${t}`,
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
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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
				return Object(a.a)(Object(s.a)(e, [o.a]), {
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
					endpoint: `${r.a.metaUrl}/orders`,
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
			var r = n("./node_modules/lodash/merge.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const r = {
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
				if (b.ok ? r.collections = b.body : r.errors.collections = b.error, h.ok) {
					const e = h.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return f.ok ? r.products = f.body : r.errors.products = f.error, g.ok ? (s()(r.badges, g.body.badges), r.userOwnedBadges = g.body.userOwnedBadges) : r.errors.userBadges = g.error, r
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
				return j
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return S
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(r),
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
			const g = (e, t, n, r, o) => {
				const {
					premium: a,
					...i
				} = o, c = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], d = new s.a(c.price).multipliedBy(r).toFixed();
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
							productsCount: r.toString(),
							...i
						}
					}
				})
			};
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const _ = (e, t, n, r) => Object(f.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				y = (e, t, n, r) => Object(f.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				x = (e, t, n, r) => Object(f.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						cardId: r
					}
				}),
				j = (e, t, n, r, s) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: s
					}
				}),
				C = (e, t, n, r) => Object(f.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: n,
						token: r
					}
				}),
				E = (e, t, n, r) => Object(f.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: r
					}
				}),
				w = (e, t, n, r, s) => Object(f.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: r,
						saveCard: s
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
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.ib.GET
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = n.n(s);
			t.a = Object(r.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = () => new BroadcastChannel("external_account"),
				s = e => {
					const t = r();
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
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function a(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/location.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "singleCountryList", (function() {
				return s
			})), n.d(t, "allCountryOptions", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = {
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
					displayName: r[e]
				}],
				o = Object.keys(r).filter(e => "ZZ" !== e).map(e => ({
					value: e,
					displayName: r[e]
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
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...Object(r.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(r.subreddit)(t)
				}),
				o = () => s("view"),
				a = () => s("tap"),
				i = () => s("dismiss"),
				c = () => e => ({
					...Object(r.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				l = () => e => ({
					...Object(r.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => ({
					...Object(r.defaults)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				u = () => e => ({
					...Object(r.defaults)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => ({
					...Object(r.defaults)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(r.subredditById)(t, e)
				})
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...Object(s.defaults)(t),
					action: r.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				a = () => e => ({
					...Object(s.defaults)(e),
					action: r.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
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
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Event.ts");
			const a = e => ({
					...r.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(s.a)({
						...a(e),
						action: o.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...a(e),
						action: o.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...a(e),
						action: o.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...a(e),
						action: o.c.Close,
						source: "popup"
					})
				},
				m = (e, t, n) => ({
					...r.defaults(e),
					actionInfo: r.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(s.a)({
						...m(e, !0),
						action: o.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(s.a)({
						...m(e, !0),
						action: o.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(s.a)({
						...m(e, !1, t),
						action: o.c.Bail,
						source: "notification"
					})
				},
				f = e => ({
					...r.defaults(e),
					noun: "push_notification"
				}),
				g = e => ({
					...f(e),
					notification: r.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t) => n => ({
					...r.defaults(n),
					action: i(e),
					email: {
						type: t
					},
					noun: "email",
					source: "email_app_settings"
				}),
				_ = (e, t) => n => ({
					...r.defaults(n),
					action: i(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				y = e => t => ({
					...r.defaults(t),
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
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/reddit/selectors/user.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => ({
					...r.defaults(e),
					correlationId: Object(a.c)(a.a.PremiumSettings),
					screen: r.screen(e)
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
						type: Object(s.t)(e) ? o.GoldPurchaseType.Cancel : o.GoldPurchaseType.GetPremium
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
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r, s = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(r || (r = {}));
			const o = e => t => ({
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
				c = e => t => ({
					source: "popup",
					action: "click",
					noun: "create_password",
					popup: {
						buttonText: e
					}
				})
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(r.useContext)(s.a);
				return e
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = [{
					key: "premium-ad-free",
					telemetryTag: "ad_free"
				}, {
					key: "premium-avatars",
					isNew: !0,
					telemetryTag: "avatar"
				}, {
					key: "premium-monthly-coins",
					telemetryTag: "monthly_coins"
				}, {
					key: "premium-lounge",
					telemetryTag: "premium_subreddits"
				}, {
					key: "premium-app-icons",
					isNew: !0,
					asterisk: !0,
					telemetryTag: "app_icons"
				}, {
					key: "premium-powerups",
					isNew: !0,
					asterisk: !0,
					telemetryTag: "powerups"
				}, {
					key: "premium-awards",
					telemetryTag: "premium_awards"
				}],
				o = {
					"premium-avatars": () => r.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					"premium-powerups": () => r.fbt._("Powerup", null, {
						hk: "2TMd6"
					}),
					"premium-app-icons": () => r.fbt._("Custom App Icons", null, {
						hk: "2uGpiC"
					}),
					"premium-ad-free": () => r.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => r.fbt._("{amount}Monthly Coins", [r.fbt._param("amount", e ? e + " " : "")], {
						hk: "3rUDgA"
					}),
					"premium-lounge": () => r.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					"premium-awards": () => r.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					"premium-more": () => r.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					"premium-bonus": ({
						bonusCoins: e
					}) => r.fbt._("{amount} Coin Bonus!", [r.fbt._param("amount", e)], {
						hk: "2W5D7B"
					})
				},
				a = {
					"premium-avatars": () => r.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-powerups": () => r.fbt._("Help select communities unlock perks", null, {
						hk: "3vbuX2"
					}),
					"premium-app-icons": () => r.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					"premium-ad-free": () => r.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => r.fbt._("Get {amount} coins a month and make it rain awards", [r.fbt._param("amount", e)], {
						hk: "228nfD"
					}),
					"premium-lounge": () => r.fbt._("Discover all the illuminati secrets in r/lounge", null, {
						hk: "nlK6D"
					}),
					"premium-awards": () => r.fbt._("Give exclusive awards that get more attention", null, {
						hk: "2Dzf3P"
					}),
					"premium-more": () => void 0,
					"premium-bonus": () => r.fbt._("Claim this one-time-only welcome gift", null, {
						hk: "1x9RYJ"
					})
				}
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				C = n("./src/reddit/components/ConfirmModal/index.tsx"),
				E = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				w = n("./src/reddit/actions/accountGender/index.ts"),
				k = n("./src/reddit/actions/meta.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/helpers/trackers/profileSettings.ts");
			var N = n("./src/reddit/selectors/sso.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				T = n("./src/lib/validateEmail/index.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				B = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				L = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				U = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				F = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/models/User/index.ts"),
				G = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				H = n.n(G);
			const W = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(A.k)(e);
						return t && Object(D.e)(t) || ""
					}
				}),
				z = Object(a.b)(W, e => ({
					changeEmail: t => e(Object(x.v)(t)),
					sendResetEmail: t => e(Object(x.y)(t)),
					showErrorToast: t => e(Object(M.f)({
						duration: M.a,
						kind: F.b.Error,
						text: t
					}))
				})),
				q = e => e ? o.a.createElement(L.a, {
					className: Object(u.a)(H.a.image, H.a.success)
				}) : o.a.createElement(U.a, {
					className: Object(u.a)(H.a.image, H.a.error)
				}),
				K = e => e ? r.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : r.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				Y = e => e ? r.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : r.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				J = e => e ? r.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : r.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				V = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? o.a.createElement(R.a, {
						className: Object(u.a)(H.a.inputIcon, H.a.error)
					}) : o.a.createElement(L.a, {
						className: Object(u.a)(H.a.inputIcon, H.a.success)
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
							enteredEmail: s
						} = this.state, o = Object(T.a)(s, !1), a = o ? "" : r.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: a,
							inputChecked: !0
						}), o && (t ? n({
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
					return o.a.createElement("div", {
						className: H.a.container
					}, o.a.createElement("h3", {
						className: H.a.header
					}, r.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), o.a.createElement("div", {
						className: H.a.status
					}, q(e), o.a.createElement("h3", {
						className: H.a.statusText
					}, Y(e))), o.a.createElement("p", {
						className: H.a.description
					}, K(e)), o.a.createElement("div", {
						className: H.a.actionContainer
					}, o.a.createElement("div", {
						className: H.a.emailContainer
					}, s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(B.a, {
						className: Object(u.a)(H.a.input, H.a[a]),
						label: r.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), V(this.state), o.a.createElement("h6", {
						className: H.a.errorMsg
					}, n)) : o.a.createElement("p", {
						className: H.a.emailText
					}, J(e), o.a.createElement("span", {
						className: H.a.emailAddress
					}, t))), o.a.createElement(S.l, {
						className: H.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? r.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : r.fbt._("Send", null, {
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
				re = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				se = n.n(re);
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
						isPending: s
					} = this.state;
					return o.a.createElement("section", {
						className: Object(u.a)(e, se.a.container)
					}, o.a.createElement($.i, null, o.a.createElement(ne.a, null, o.a.createElement($.q, null, r.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), o.a.createElement(te.a, {
						onClick: t,
						disabled: s
					}, o.a.createElement($.b, null)))), o.a.createElement($.l, null, o.a.createElement(ee.b, {
						placeholder: r.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: se.a.customGenderInput,
						disabled: s,
						maxLength: oe,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), o.a.createElement($.g, null, o.a.createElement($.a, {
						onClick: t,
						disabled: s
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement($.r, {
						disabled: !this.inputsAreValid() || s,
						onClick: this.handleSubmit
					}, r.fbt._("Confirm", null, {
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
						renderLabel: r = this.renderLabel,
						renderItem: s = this.renderDropdownItem,
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
					}, r(c), o.a.createElement("span", null, o.a.createElement(me.b, null))), o.a.createElement(fe, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, a === e.key))))
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
			var je = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				Ce = n.n(je);
			const Ee = () => [{
				key: _e.FEMALE,
				displayText: r.fbt._("Female", null, {
					hk: "G3G7q"
				})
			}, {
				key: _e.MALE,
				displayText: r.fbt._("Male", null, {
					hk: "2xBOfQ"
				})
			}, {
				key: _e.NON_BINARY,
				displayText: r.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: _e.OPT_OUT,
				displayText: r.fbt._("Prefer not to say", null, {
					hk: "48BJY1"
				})
			}, {
				key: _e.USER_DEFINED,
				displayLabel: r.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: r.fbt._("I refer to myself as...", null, {
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
						const r = {
							definedGender: null,
							genderCategory: n
						};
						this.setState({
							pending: !0,
							tmpSelected: r
						}), await t(r), this.setState({
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
					return o.a.createElement(xe.c, {
						label: r.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: r.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, o.a.createElement("div", {
						className: Ce.a.wrapper
					}, o.a.createElement(ye, {
						dropdownId: "gender-dropdown-id",
						items: Ee(),
						onSelect: this.onSelect,
						placeholder: r.fbt._("Select", null, {
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
				Pe = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const Ie = Object.freeze({
					[Se.GERMAN_LOCALE]: Object.freeze({
						bcp47: Se.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.GERMAN_LOCALE),
						rtl: !1
					}),
					[Se.DEFAULT_LOCALE]: Object.freeze({
						bcp47: Se.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.DEFAULT_LOCALE),
						rtl: !1
					}),
					[Se.SPANISH_LOCALE]: Object.freeze({
						bcp47: Se.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.SPANISH_LOCALE),
						rtl: !1
					}),
					[Se.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: Se.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(E.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[Se.ITALIAN_LOCALE]: Object.freeze({
						bcp47: Se.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.ITALIAN_LOCALE),
						rtl: !1
					}),
					[Se.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: Se.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[Se.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: Se.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				Ne = {},
				Ae = Object.freeze({
					[Se.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: Se.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[Se.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: Se.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[Se.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: Se.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(Se.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				Te = Object(c.a)(A.H, Pe.b, (e, t) => e || t ? {
					...Ie,
					...Ne,
					...Ae
				} : Ie);
			var Me = n("./src/reddit/helpers/location.ts"),
				Be = n("./src/reddit/constants/experiments.ts"),
				Le = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Re = Object(c.a)(e => Object(Le.c)(e, {
				experimentEligibilitySelector: A.K,
				experimentName: Be.I
			}), e => e === Be.S.Enabled);
			var Ue = n("./src/reddit/selectors/meta.ts"),
				Fe = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				De = n.n(Fe);
			const Ge = Object(c.c)({
					gender: e => {
						var t, n;
						return null === (n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.account) || void 0 === n ? void 0 : n.gender
					},
					hasVerifiedEmail: A.A,
					isFPR: A.I,
					language: A.V,
					shouldShowCreatePasswordModal: N.d,
					showLanguageSection: P.d.langSelect,
					availableLocales: Te,
					locale: Ue.i,
					shouldShowCountrySection: Re,
					country: A.g
				}),
				He = Object(a.b)(Ge, e => ({
					changeAccountGender: t => e(Object(w.a)(t)),
					changeLanguage: t => e(Object(k.g)(t)),
					openChangeEmailModal: () => e(Object(y.i)(ke.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(y.h)(ke.l)),
					resendEmail: () => e(Object(x.x)())
				})),
				We = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : o.a.createElement(o.a.Fragment, null, r.fbt._("{email} not verified!", [r.fbt._param("email", e)], {
					hk: "3PanQN"
				}), o.a.createElement(S.i, {
					className: De.a.tertiaryBtn,
					onClick: n
				}, r.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : r.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var ze = He(({
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
					const [y, x] = Object(s.useState)(!1), j = Object(s.useCallback)(async e => {
						x(!0), await t(e), x(!1)
					}, [t]), C = Object(O.b)(), w = Object(s.useCallback)(async ({
						definedGender: t,
						genderCategory: n
					}) => {
						C(Object(I.a)()), await e({
							definedGender: t,
							genderCategory: n
						})
					}, [e, C]), [k, S] = Object(s.useState)(h), [P, N] = Object(s.useState)(Object(Me.singleCountryList)(g));
					Object(s.useEffect)(() => {
						"" !== c && f in h || S(e => ({
							...e,
							[c]: Object.freeze({
								bcp47: c,
								displayName: c,
								englishName: c,
								fbtLocale: Object(E.isoLocaleToFbtLocale)(c),
								rtl: !1
							})
						}))
					}, [h, c, f]), Object(s.useEffect)(() => {
						(async () => {
							const {
								allCountryOptions: e
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/location.ts"));
							N(e)
						})()
					}, []);
					const A = Object(s.useMemo)(() => (e => Object.entries(e).map(([e, t]) => ({
						value: e,
						displayName: t.displayName
					})))(k), [k]);
					return i ? o.a.createElement(Z, {
						email: _.email
					}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, r.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), o.a.createElement(xe.b, {
						actionText: r.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: r.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							u ? d() : l()
						},
						subtext: We(_)
					}), !u && o.a.createElement(xe.b, {
						actionText: r.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: r.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						onClick: b,
						subtext: r.fbt._("Password must be at least 8 characters long", null, {
							hk: "3X8DBF"
						})
					}), o.a.createElement(we, {
						onChange: w,
						selected: a
					}), m ? o.a.createElement(xe.i, {
						inputDisabled: y,
						id: "lang",
						items: A,
						labelClassname: De.a.languageSelector,
						label: r.fbt._("Display language {betaLabel}", [r.fbt._param("betaLabel", r.fbt._("{=(beta)}", [r.fbt._param("=(beta)", o.a.createElement("span", {
							className: De.a.betaLabel
						}, r.fbt._("(beta)", null, {
							hk: "1vhAp5"
						})))], {
							hk: "2gBJnB"
						}))], {
							hk: "46Sw4H"
						}),
						onChange: j,
						selected: f,
						subtext: r.fbt._("Select the language you'd like to experience the Reddit interface in. Note that this won't change the language of user-generated content and that this feature is still in development so translations and UI are still under review.", null, {
							hk: "2d65FQ"
						})
					}) : null, p ? o.a.createElement("div", {
						className: De.a.countryDropdown
					}, o.a.createElement(xe.i, {
						id: "country",
						items: P,
						label: r.fbt._("Country", null, {
							hk: "1GB5Ra"
						}),
						onChange: e => v(e, "countryCode"),
						selected: g,
						subtext: r.fbt._("This is your primary location. {accountPrefs: language link}", [r.fbt._param("accountPrefs: language link", o.a.createElement("a", {
							className: De.a.Link,
							href: "https://www.reddit.com/api/report_redirect?reason_code=COUNTRY_SETTING"
						}, r.fbt._("Learn more", null, {
							hk: "2ygM43"
						})))], {
							hk: "bLreC"
						})
					})) : null)
				}),
				qe = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				Ke = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				Ye = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				Je = n("./src/reddit/constants/accountManager.ts"),
				Ve = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Qe = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ze = n("./src/reddit/selectors/accountManager.ts"),
				Xe = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				et = n("./src/config.ts"),
				tt = n("./src/reddit/helpers/trackers/sso.ts"),
				nt = n("./src/reddit/hooks/useTracking.ts"),
				rt = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				st = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				ot = n.n(st),
				at = n("./src/lib/lessComponent.tsx");
			const it = at.a.wrapped(xe.c, "ConnectApple", ot.a),
				ct = at.a.wrapped(S.l, "ConnectAppleButton", ot.a),
				lt = at.a.div("ConnectionInfo", ot.a),
				dt = at.a.wrapped(S.p, "DisconnectButton", ot.a),
				ut = at.a.wrapped(rt.a, "AppleIcon", ot.a),
				mt = at.a.span("TextAndIconWrapper", ot.a);

			function pt(e) {
				return e.issuerId ? (() => o.a.createElement(xe.c, {
					label: r.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, o.a.createElement(lt, null, o.a.createElement(dt, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[ot.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(it, {
						className: t,
						label: r.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, o.a.createElement(ct, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(mt, null, o.a.createElement(ut, null), r.fbt._("Connect to Apple", null, {
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
				vt = at.a.wrapped(S.l, "ConnectGoogleButton", ot.a),
				_t = at.a.div("ConnectionInfo", ot.a),
				yt = at.a.wrapped(S.p, "DisconnectButton", ot.a),
				xt = at.a.wrapped(ft.a, "GoogleIcon", ot.a),
				jt = at.a.span("TextAndIconWrapper", ot.a);

			function Ct(e) {
				return e.hasGoogleIdentity ? (() => o.a.createElement(xe.c, {
					label: r.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, o.a.createElement(_t, null, o.a.createElement(yt, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[ot.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(gt, {
						className: t,
						label: r.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, o.a.createElement(vt, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(jt, null, o.a.createElement(xt, null), r.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const Et = Object(c.c)({
				hasGoogleIdentity: N.b,
				shouldShowCreatePasswordModal: N.d
			});
			var wt = Object(a.b)(Et, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(ke.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(y.h)(ke.n)),
					openLinkGoogleSSOModal: () => e(Object(_.h)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.m)())
				}))(e => {
					const t = Object(nt.a)();
					return o.a.createElement(Ct, {
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
				Pt = n("./src/reddit/models/ExternalAccount/index.ts");
			const It = at.a.wrapped(St.a, "TwitterIcon", ot.a),
				Nt = ({
					isFilled: e,
					...t
				}) => o.a.createElement(It, t),
				At = at.a.wrapped(Ot.a, "LoadingIcon", ot.a),
				Tt = ({
					isFilled: e,
					...t
				}) => o.a.createElement(At, t),
				Mt = at.a.wrapped(xe.c, "ConnectTwitter", ot.a),
				Bt = at.a.wrapped(S.p, "DisconnectButton", ot.a),
				Lt = at.a.span("Username", ot.a),
				Rt = at.a.div("ConnectionInfo", ot.a);
			var Ut = n("./src/reddit/selectors/externalAccount.ts");
			const Ft = Object(c.c)({
					twitterAccount: Ut.a,
					isTwitterConnectionPending: Ut.b
				}),
				Dt = Object(a.b)(Ft, e => ({
					onConnectAccount: t => {
						e(kt.m(t)), t === Pt.a.Twitter && e((e, t) => I.c(t()))
					},
					onDisconnectAccount: t => {
						e(kt.n(t)), t === Pt.a.Twitter && e((e, t) => I.e(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => I.f(n(), t))
				}));
			var Gt = Object(Ve.u)()(Dt((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Pt.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Pt.a.Twitter)
					};
				return o.a.createElement(s.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return o.a.createElement(xe.c, {
						label: r.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: r.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, o.a.createElement(Rt, null, o.a.createElement("div", null, o.a.createElement(Lt, null, "@", t.username)), o.a.createElement(Bt, {
						onClick: n
					}, "(", r.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: s
					} = e, a = Object(u.a)({
						[ot.a["m-responsive"]]: n
					}), i = r.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return o.a.createElement(Mt, {
						className: a,
						label: r.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: r.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, o.a.createElement(S.t, {
						className: ot.a.ConnectTwitterButton,
						Icon: s ? Tt : Nt,
						text: s ? null : i,
						onClick: t
					}))
				})(), o.a.createElement(xe.p, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: r.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: r.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			})));
			var Ht = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return o.a.createElement(s.Fragment, null, o.a.createElement(Oe.a, {
					id: "connected-accounts"
				}, r.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), o.a.createElement(Gt, e), (() => {
					if (e.shouldRenderSSOAccounts) return o.a.createElement(s.Fragment, null, o.a.createElement(ht, {
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const zt = Object(c.c)({
				isEmployee: A.H
			});
			var qt = Object(a.b)(zt)(e => {
					const t = !e.isEmployee;
					return o.a.createElement(Ht, Wt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				Kt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Yt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				Jt = n.n(Yt);
			const Vt = at.a.wrapped($e.b, "Trash", Jt.a),
				Qt = at.a.wrapped(Oe.a, "BetaTestsHeading", Jt.a),
				Zt = at.a.wrapped(xe.p, "InBetaToggle", Jt.a),
				Xt = at.a.wrapped(xe.p, "InRedesignBetaToggle", Jt.a),
				$t = at.a.button("DeactivateButton", Jt.a),
				en = at.a.div("DeactivateWrapper", Jt.a),
				tn = Object(c.c)({
					changePasswordHref: (e, t) => Object(Ze.c)(e, {
						pageLayer: t.pageLayer,
						path: Je.c.ChangePassword
					}),
					deactivateModalOpen: Object(Xe.b)("deactivate_modal_id"),
					email: A.n,
					hasGoogleIdentity: N.b,
					inRedesignBeta: A.E,
					optoutModalOpen: Object(Xe.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: N.d,
					user: A.k
				}),
				nn = Object(a.b)(tn, (e, t) => ({
					deactivate: t => {
						e(Object(x.w)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(ke.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: et.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${et.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(x.x)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class rn extends o.a.Component {
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
						inRedesignBeta: s,
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
						[Jt.a["m-responsive"]]: a
					}), v = Object(u.a)({
						[Jt.a.ResponsiveOverlay]: a
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Ye.a, null, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: a
					}, r.fbt._("Account settings", null, {
						hk: "2faClM"
					})), o.a.createElement(ze, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow,
						update: h
					}), o.a.createElement(qt, this.props), o.a.createElement(Qt, {
						className: g
					}, r.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), o.a.createElement(Zt, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: r.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: r.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), o.a.createElement(Xt, {
						className: g,
						on: !s,
						onClick: b,
						label: r.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: r.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), o.a.createElement(Oe.a, null, r.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), o.a.createElement(en, null, o.a.createElement($t, {
						onClick: this.deactivateAccount
					}, o.a.createElement(Vt, null), r.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && o.a.createElement(C.a, {
						headerText: r.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: r.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: r.fbt._("opt out", null, {
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
					})), n && o.a.createElement(j.a, {
						className: Jt.a.googleDisconnectIFrame,
						pageLayer: l,
						path: Je.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var sn = Object(Ve.u)()(nn(rn)),
				on = n("./src/lib/copyToClipboard/index.ts"),
				an = n("./src/lib/hooks/useMutation.ts"),
				cn = n("./src/reddit/reducers/user/prefs/index.ts"),
				ln = n("./src/reddit/actions/chat/constants.ts"),
				dn = n("./src/reddit/actions/chat/userSettings.ts"),
				un = n("./src/reddit/actions/userWhitelist.ts"),
				mn = n("./src/reddit/endpoints/chat/userSettings.ts"),
				pn = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				bn = n("./src/reddit/components/Hovercards/helpers.ts"),
				hn = n("./src/reddit/components/HumanDate/index.tsx"),
				fn = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				gn = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				vn = n.n(gn);
			const {
				fbt: _n
			} = n("./node_modules/fbt/lib/FbtPublic.js"), yn = at.a.p("Date", vn.a), xn = at.a.wrapped(fn.a, "UserNameAndIcon", vn.a), jn = at.a.button("Button", vn.a), Cn = at.a.div("ButtonWrapper", vn.a);
			var En = at.a.wrapped(e => o.a.createElement("div", {
					className: e.className
				}, o.a.createElement(xn, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(bn.b)({
						author: e.name,
						tooltipIdPrefix: pn.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), o.a.createElement(yn, null, o.a.createElement(hn.d, {
					seconds: e.date / m.Qb
				})), o.a.createElement(Cn, null, o.a.createElement(jn, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, _n._("Remove", null, {
					hk: "1rZWA4"
				})))), "Component", vn.a),
				wn = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				kn = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				On = n.n(kn);
			const Sn = 5,
				Pn = at.a.h4("ListHeading", On.a),
				In = at.a.div("ListBox", On.a),
				Nn = at.a.div("MoreWrapper", On.a),
				An = at.a.button("MoreButton", On.a),
				Tn = at.a.wrapped(xe.n, "Subtext", On.a);
			class Mn extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === wn.a.pending && this.props.api.new === wn.a.waitingForRequest && this.setState({
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
						remove: c,
						list: l,
						label: d,
						title: m,
						subtext: p
					} = this.props, b = e ? l.length : 5;
					return o.a.createElement("div", {
						className: Object(u.a)(On.a.container, n, {
							[On.a.mPadBottom]: !!i
						})
					}, o.a.createElement(Pn, null, m), void 0 !== p && o.a.createElement(Tn, null, p), o.a.createElement(B.a, {
						buttonText: r.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: s.new === wn.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), o.a.createElement(In, null, l.slice(0, b).map(e => o.a.createElement(En, {
						disabled: s[e.name] === wn.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Sn && !e ? o.a.createElement(Nn, null, o.a.createElement(An, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, r.fbt._("Show all", null, {
						hk: "W1Cyk"
					}))) : null))
				}
			}
			var Bn = n("./src/reddit/selectors/experiments/chatInviteLinkSharing.ts"),
				Ln = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Rn = n.n(Ln);
			const Un = {
					[cn.b.Whitelisted]: () => r.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[cn.b.Everyone]: () => r.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				Fn = e => {
					const t = Un[e];
					return t && t()
				},
				Dn = [cn.b.Everyone, cn.b.Whitelisted],
				Gn = [Fn(cn.b.Everyone), Fn(cn.b.Whitelisted)],
				Hn = [ln.a.anybody, ln.a.account_age_30_days, ln.a.nobody],
				Wn = [Object(ln.b)(ln.a.anybody), Object(ln.b)(ln.a.account_age_30_days), Object(ln.b)(ln.a.nobody)];
			var zn = ({
					prefs: {
						acceptPrivateMessages: e
					},
					update: t
				}) => {
					const n = Object(a.d)(),
						[i, {
							data: c,
							error: l,
							pending: d
						}] = Object(an.a)(mn.a),
						u = Object(a.e)(e => e.user.chatSettings),
						m = Object(a.e)(e => e.user.whitelist.data),
						p = Object(a.e)(e => e.user.whitelist.api),
						b = Object(a.e)(Bn.a);
					Object(s.useEffect)(() => {
						const e = null == c ? void 0 : c.createChatChannelInviteLink.inviteUrl;
						if (e) {
							Object(on.a)(e);
							const t = Object(M.e)(r.fbt._("Copied link!", null, {
								hk: "4a4E1x"
							}), F.b.SuccessCommunity);
							n(Object(M.f)(t))
						}
						if (Object(mn.c)(c) || l) {
							const e = Object(M.e)(r.fbt._("Something went wrong", null, {
								hk: "22u7ha"
							}), F.b.Error);
							n(Object(M.f)(e))
						}
					}, [c, l, n]);
					const h = Object(s.useCallback)(e => {
							n(Object(un.g)(e))
						}, [n]),
						f = Object(s.useCallback)(e => {
							n(Object(un.h)(e))
						}, [n]),
						g = Object(s.useCallback)(e => {
							n(Object(dn.d)(e))
						}, [n]),
						v = Object(s.useMemo)(() => Object(ln.b)(u.invitePolicy), [u]),
						_ = Object(s.useMemo)(() => Fn(e), [e]);
					return o.a.createElement(Ye.a, null, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: !1
					}, r.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), o.a.createElement(xe.d, {
						label: r.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: Hn,
						displayItems: Wn,
						displayTitle: v,
						selected: u.invitePolicy,
						onClick: e => {
							g({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), o.a.createElement(xe.d, {
						label: r.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: r.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not approved.", null, {
							hk: "48t4Ee"
						}),
						items: Dn,
						displayItems: Gn,
						selected: e,
						displayTitle: _,
						onClick: e => t(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (u.invitePolicy !== ln.a.anybody || e === cn.b.Whitelisted) && o.a.createElement("div", {
						className: Rn.a.ListsWrapper
					}, o.a.createElement(Mn, {
						title: r.fbt._("Approved Users", null, {
							hk: "U0YhB"
						}),
						subtext: r.fbt._("Approved users can always send you private messages.", null, {
							hk: "1Wr1CF"
						}),
						label: r.fbt._("Add new user to approved list", null, {
							hk: "TP2Sh"
						}),
						add: h,
						remove: f,
						list: m,
						api: p
					})), b && o.a.createElement(xe.b, {
						last: !0,
						actionText: r.fbt._("Copy link", null, {
							hk: "1jo85y"
						}),
						label: r.fbt._("Invite someone to chat", null, {
							hk: "3Y8D7g"
						}),
						onClick: async () => {
							d || await i({})
						},
						subtext: r.fbt._("Copy a link to invite someone to a direct chatroom with you.", null, {
							hk: "3e88hJ"
						})
					}), o.a.createElement(xe.b, {
						actionText: r.fbt._("Mark as Read", null, {
							hk: "1SSWPI"
						}),
						label: r.fbt._("Mark all as read", null, {
							hk: "4aTQrk"
						}),
						subtext: r.fbt._("Mark all conversations and invites as read.", null, {
							hk: "4kP4WC"
						}),
						onClick: () => {
							n(Object(dn.c)())
						}
					}))
				},
				qn = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				Kn = n.n(qn);

			function Yn(e) {
				return o.a.createElement("header", {
					className: Object(u.a)(Kn.a.container, e.className)
				}, o.a.createElement("div", {
					className: Kn.a.title
				}, r.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), o.a.createElement("div", {
					className: Kn.a.tag
				}, r.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var Jn = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				Vn = n("./src/reddit/contexts/ApiContext.tsx"),
				Qn = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Zn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Xn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				$n = n("./src/reddit/selectors/economics.ts"),
				er = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				tr = n.n(er);
			const {
				fbt: nr
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var rr;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(rr || (rr = {}));
			class sr extends o.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(Qn.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = rr.Default;
					e.connectCode && e.connectStateToken && (t = rr.Connecting), e.stripeConnected && (t = rr.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== rr.Connected) {
						const e = await Object(Qn.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: rr.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: rr.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = nr._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === rr.Connected && (n = nr._("connect", null, {
						hk: "22jQRU"
					})), t === rr.Connecting && (n = nr._("connecting...", null, {
						hk: "3ccNPc"
					})), o.a.createElement("div", {
						className: e
					}, o.a.createElement(Oe.a, null, nr._("accept tips", null, {
						hk: "1kEl0R"
					})), o.a.createElement(xe.l, {
						direction: "row",
						label: nr._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: nr._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, o.a.createElement("div", {
						className: tr.a.cta
					}, o.a.createElement(S.l, {
						className: tr.a.button,
						disabled: t !== rr.Default,
						onClick: this.initiateStripeConnect
					}, n), o.a.createElement("div", {
						className: tr.a.legal
					}, nr._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [nr._param("Previews Terms of Service", o.a.createElement(Jn.a, {
						className: tr.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), o.a.createElement("div", {
						className: tr.a.disclaimer
					}, o.a.createElement(Xn.a, {
						className: tr.a.icon
					}), nr._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const or = Object(c.c)({
					stripeConnected: $n.v
				}),
				ar = Object(a.b)(or, e => ({
					onError: t => e(Object(M.f)({
						duration: 5e3,
						kind: F.b.Error,
						text: Object(Zn.a)(t)
					}))
				}));
			var ir = Object(Vn.b)(ar(sr)),
				cr = n("./src/reddit/components/Settings/Creator/index.m.less"),
				lr = n.n(cr);

			function dr(e) {
				return o.a.createElement(Ye.a, null, o.a.createElement("div", null, o.a.createElement(Yn, {
					className: lr.a.header
				}), o.a.createElement(ir, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var ur = n("./src/lib/listingSort/index.ts"),
				mr = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				pr = n("./src/reddit/constants/listingSorts.ts");
			const br = [m.V.HOT, m.V.NEW, m.V.TOP, m.V.RISING];
			var hr = e => {
				const {
					dropdownId: t
				} = e, n = br.map(e => ({
					key: e,
					displayText: Object(pr.a)(e),
					icon: o.a.createElement(mr.a, {
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
			const fr = [m.ec.HOUR, m.ec.DAY, m.ec.WEEK, m.ec.MONTH, m.ec.YEAR, m.ec.ALL];
			var gr = e => {
					const {
						dropdownId: t
					} = e, n = fr.map(e => ({
						key: e,
						displayText: Object(pr.b)(e)
					}));
					return o.a.createElement(ye, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				vr = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				_r = n.n(vr);
			const yr = at.a.div("Separator", _r.a);
			class xr extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(ur.d)(this.props.fullSort);
						this.props.onChange(Object(ur.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(ur.d)(this.props.fullSort);
						this.props.onChange(Object(ur.c)({
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
					} = Object(ur.d)(t);
					return o.a.createElement(xe.c, {
						className: e,
						label: r.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: r.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, o.a.createElement("div", {
						className: _r.a.wrapper
					}, o.a.createElement(hr, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: s
					}), a && o.a.createElement(o.a.Fragment, null, o.a.createElement(yr, null), o.a.createElement(gr, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: a
					}))))
				}
			}
			var jr = n("./src/reddit/constants/postLayout.ts"),
				Cr = n("./src/reddit/icons/fonts/index.tsx"),
				Er = n("./src/reddit/controls/Dropdown/index.m.less"),
				wr = n.n(Er);
			const kr = {
				[jr.d.Card]: Object(Cr.b)("view_card"),
				[jr.d.Classic]: Object(Cr.b)("view_classic"),
				[jr.d.Compact]: Object(Cr.b)("view_compact")
			};

			function Or(e) {
				const t = kr[e.layout];
				return o.a.createElement(t, {
					className: wr.a.iconStyles
				})
			}
			const Sr = [jr.d.Card, jr.d.Classic, jr.d.Compact];
			var Pr = e => {
					const {
						dropdownId: t
					} = e, n = Sr.map(e => ({
						key: e,
						displayText: Object(jr.h)(e),
						icon: o.a.createElement(Or, {
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
				Ir = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				Nr = n.n(Ir);
			class Ar extends o.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: r,
						layout: s
					} = this.props;
					return o.a.createElement(xe.c, {
						className: e,
						label: n,
						subtext: r
					}, o.a.createElement("div", {
						className: Nr.a.wrapper
					}, o.a.createElement(Pr, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: s
					})))
				}
			}
			var Tr = n("./src/reddit/components/Settings/FeedForm.m.less"),
				Mr = n.n(Tr);

			function Br({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					feedRecommendationsEnabled: n,
					hideNSFW: s,
					openPostInNewTab: a,
					over18: i,
					privateFeeds: c,
					reduceAnimationsFromAwards: l,
					rememberCommunitySort: d,
					sort: m,
					stylesEnabled: p,
					useMarkdown: b,
					layout: h,
					rememberCommunityLayout: f
				},
				update: g
			}) {
				const v = Object(u.a)({
					[Mr.a["m-responsive"]]: e
				});
				return o.a.createElement(Ye.a, null, o.a.createElement(Ke.b, {
					isResponsiveSettingsEnabled: e
				}, r.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), o.a.createElement(Oe.a, null, r.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), o.a.createElement(xe.p, {
					on: i,
					onClick: () => g(!i, "over18"),
					label: r.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: r.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), o.a.createElement(xe.p, {
					disabled: !i,
					label: r.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!i && s,
					onClick: () => g(!s, "hideNSFW"),
					subtext: r.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), o.a.createElement(xe.p, {
					label: r.fbt._("Enable home feed recommendations", null, {
						hk: "17H8xj"
					}),
					on: !!n,
					onClick: () => g(!n, "feedRecommendationsEnabled"),
					subtext: r.fbt._("Allow us to introduce recommended posts in your home feed.", null, {
						hk: "EK7rr"
					})
				}), o.a.createElement(xe.p, {
					on: t,
					onClick: () => g(!t, "autoplayVideo"),
					label: r.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: r.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), o.a.createElement(xe.p, {
					on: l,
					onClick: () => g(!l, "reduceAnimationsFromAwards"),
					label: r.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: r.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), o.a.createElement(xe.p, {
					on: !!p,
					onClick: () => g(!p, "stylesEnabled"),
					label: r.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: r.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), o.a.createElement(xr, {
					className: v,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: m,
					onChange: e => {
						m !== e && g(e, "sort")
					}
				}), o.a.createElement(xe.p, {
					className: v,
					indent: !0,
					on: !!d,
					onClick: () => g(!d, "rememberCommunitySort"),
					label: r.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: r.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), o.a.createElement(Ar, {
					className: v,
					dropdownPrefix: "subreddit-view-setting",
					label: r.fbt._("Global content view", null, {
						hk: "1tWTJK"
					}),
					layout: h,
					onChange: e => g(e, "layout"),
					subtext: r.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
						hk: "1NyVGg"
					})
				}), o.a.createElement(xe.p, {
					className: v,
					on: !!f,
					onClick: () => g(!f, "rememberCommunityLayout"),
					label: r.fbt._("Remember per community", null, {
						hk: "42Ianh"
					}),
					subtext: r.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
						hk: "3fxqrV"
					}),
					indent: !0
				}), o.a.createElement(xe.p, {
					className: v,
					on: !!a,
					onClick: () => g(!a, "openPostInNewTab"),
					label: r.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: r.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), o.a.createElement(Oe.a, {
					className: v
				}, r.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), o.a.createElement(xe.p, {
					className: v,
					on: !!b,
					onClick: () => g(!b, "useMarkdown"),
					label: r.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: r.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, r.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), o.a.createElement(xe.g, {
					label: r.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: r.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${et.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var Lr = n("./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx"),
				Rr = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				Ur = n("./src/reddit/helpers/trackers/notifications.ts"),
				Fr = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				Dr = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Gr = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				Hr = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				Wr = n.n(Hr);
			var zr = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [a, i] = Object(s.useState)(Gr.a.Push), [c, l] = Object(s.useState)(null), d = Object(nt.a)(), u = a === Gr.a.Push, m = a === Gr.a.Email, p = a === Gr.a.ModCommunityAlerts, b = a === Gr.a.CommunityAlerts, h = e => {
						i(e), e !== Gr.a.ModCommunityAlerts && l(null)
					}, f = m || p || b;
					return o.a.createElement(Ye.a, null, o.a.createElement("nav", {
						className: Wr.a.nav
					}, o.a.createElement("button", {
						onClick: () => h(f ? Gr.a.Push : Gr.a.Email)
					}, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: e
					}, f && o.a.createElement(o.a.Fragment, null, o.a.createElement(Fr.a, {
						className: Wr.a.arrowLeft
					}), r.fbt._("Back", null, {
						hk: "26R5gK"
					})), u && o.a.createElement(o.a.Fragment, null, r.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}), o.a.createElement(Dr.a, {
						className: Wr.a.arrowRight
					}))))), !p && o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: e
					}, u ? r.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : m ? r.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					}) : r.fbt._("Community alerts", null, {
						hk: "CdGGV"
					})), u && o.a.createElement(Rr.c, {
						handleModPnClick: (e, t) => {
							l({
								subredditId: e,
								subredditName: t
							}), h(Gr.a.ModCommunityAlerts)
						},
						handleCommunityNavClick: () => i(Gr.a.CommunityAlerts)
					}), m && o.a.createElement(o.a.Fragment, null, o.a.createElement(Rr.a, null), o.a.createElement(Oe.a, null), o.a.createElement(xe.p, {
						on: !!t,
						onClick: () => {
							d(Object(Ur.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: r.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})), p && c && o.a.createElement("div", {
						className: Wr.a.ModPnSettings
					}, o.a.createElement(Lr.a, {
						subredditId: c.subredditId,
						subredditName: c.subredditName
					})))
				},
				qr = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Kr = n.n(qr);

			function Yr(e) {
				return o.a.createElement("header", {
					className: Object(u.a)(Kr.a.container, e.className)
				}, o.a.createElement("div", {
					className: Kr.a.title
				}, r.fbt._("Payments", null, {
					hk: "rydT0"
				})), o.a.createElement("div", {
					className: Kr.a.description
				}, r.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var Jr = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Vr = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Qr = n("./src/reddit/models/Payments/index.ts"),
				Zr = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Xr = n.n(Zr);
			class $r extends o.a.Component {
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
						const t = e.type === Qr.a.SavedStripe ? await Object(Qn.b)(this.props.apiContext(), e.id) : await Object(Qn.c)(this.props.apiContext(), e.id);
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
					}, o.a.createElement(Oe.a, null, r.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return o.a.createElement("div", {
							className: Xr.a.payment,
							key: e.id
						}, o.a.createElement("div", {
							className: Xr.a.paymentDisplay
						}, o.a.createElement(Vr.a, {
							className: Xr.a.lock
						}), e.display), o.a.createElement(S.r, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? r.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : r.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && o.a.createElement("div", {
						className: Xr.a.noSavedPayment
					}, r.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const es = Object(c.c)({
					savedPayments: $n.p
				}),
				ts = Object(a.b)(es, e => ({
					onError: t => e(Object(M.f)({
						duration: 5e3,
						kind: F.b.Error,
						text: Object(Zn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Qr.a.SavedStripe && e(Object(Jr.a)({
							cardId: t.id
						})), t.type === Qr.a.SavedPayPal && e(Object(Jr.e)({
							sourceId: t.id
						}))
					}
				}));
			var ns = Object(Vn.b)(ts($r)),
				rs = n("./src/reddit/components/Settings/Payments/index.m.less"),
				ss = n.n(rs);
			var os = () => o.a.createElement(Ye.a, null, o.a.createElement(Yr, {
					className: ss.a.header
				}), o.a.createElement(ns, null)),
				as = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				is = n("./src/reddit/actions/userBlocks.ts"),
				cs = n("./src/reddit/components/Settings/DisruptiveComments/index.m.less"),
				ls = n.n(cs);
			const ds = at.a.span("CollapseSensitivity", ls.a),
				us = () => [{
					key: m.l.OFF,
					displayText: r.fbt._("OFF", null, {
						hk: "1FXR7S"
					})
				}, {
					key: m.l.LOW,
					displayText: r.fbt._("LOW", null, {
						hk: "4ykiNL"
					})
				}, {
					key: m.l.MEDIUM,
					displayText: r.fbt._("MEDIUM", null, {
						hk: "11N0Ou"
					})
				}, {
					key: m.l.HIGH,
					displayText: r.fbt._("HIGH", null, {
						hk: "2ryi6r"
					})
				}];
			var ms = ({
					className: e,
					onChange: t,
					selectedCollapseLevel: n
				}) => {
					const [a, i] = Object(s.useState)(n);
					return o.a.createElement(xe.c, {
						className: e,
						label: r.fbt._("Collapse potentially disruptive comments", null, {
							hk: "3LXjDC"
						}),
						subtext: r.fbt._("Automatically collapse comments that are potentially rude or disrespectful by selecting the sensitivity level you're most comfortable with—selecting {=Low} will collapse the least, {=High} will collapse the most.", [r.fbt._param("=Low", o.a.createElement(ds, null, r.fbt._("Low", null, {
							hk: "3Twvv8"
						}))), r.fbt._param("=High", o.a.createElement(ds, null, r.fbt._("High", null, {
							hk: "Wcis2"
						})))], {
							hk: "fhIUp"
						})
					}, o.a.createElement("div", {
						className: ls.a.wrapper
					}, o.a.createElement(ye, {
						dropdownId: "disruptive-comment-id",
						items: us(),
						onSelect: e => {
							t(e.key, "badCommentAutocollapse"), i(e.key)
						},
						selectedKey: (e => {
							const t = e.toLowerCase();
							return t.charAt(0).toUpperCase() + t.slice(1)
						})(a) || ""
					})))
				},
				ps = n("./src/lib/constants/euCookiePolicy.ts");
			const bs = Object(c.a)(e => Object(Le.c)(e, {
					experimentEligibilitySelector: Le.a,
					experimentName: Be.j
				}), e => e === Be.d.Enabled),
				hs = Object(c.a)(e => Object(A.g)(e), e => ps.b.includes(e)),
				fs = Object(c.a)(e => Object(Le.c)(e, {
					experimentEligibilitySelector: Le.a,
					experimentName: Be.h
				}), e => e === Be.b.Enabled),
				gs = Object(c.a)(e => Object(Le.c)(e, {
					experimentEligibilitySelector: A.K,
					experimentName: Be.H
				}), e => e === Be.R.Enabled),
				vs = at.a.span("SubheaderLink", Rn.a),
				_s = at.a.button("GenerateBackupCodesButton", Rn.a),
				ys = at.a.wrapped(xe.g, "ThirdPartyAuth", Rn.a),
				xs = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: P.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: N.d,
					shouldConsolidateAdsPreferences: fs,
					shouldRemoveAdsPreferences: bs,
					shouldKeepAdsPreferencesForGDPR: hs,
					shouldShowBadCommentAutocollapse: gs,
					badCommentAutocollapse: A.c
				}),
				js = Object(a.b)(xs, (e, t) => ({
					addBlocked: t => e(Object(is.h)(t)),
					addWhitelisted: t => e(Object(un.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(y.h)(ke.h)),
					removeWhitelisted: t => e(Object(un.h)(t)),
					removeBlocked: t => e(Object(is.g)(t)),
					saveChatSettings: t => e(Object(dn.d)(t)),
					enable2FA: () => e(Object(_.e)()),
					disable2FA: () => e(Object(_.d)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var Cs = js(({
					addBlocked: e,
					blocked: t,
					blockedApi: n,
					prefs: {
						allowClickTracking: s,
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
					shouldShowCreatePasswordModal: C,
					shouldConsolidateAdsPreferences: E,
					shouldRemoveAdsPreferences: w,
					shouldKeepAdsPreferencesForGDPR: k,
					shouldShowBadCommentAutocollapse: O,
					badCommentAutocollapse: S
				}) => o.a.createElement(Ye.a, null, o.a.createElement(Ke.b, {
					isResponsiveSettingsEnabled: v
				}, r.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), o.a.createElement(Ke.a, null, r.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [r.fbt._param("=Privacy & Security FAQs", o.a.createElement(vs, null, r.fbt._("{=Privacy & Security FAQs}", [r.fbt._param("=Privacy & Security FAQs", o.a.createElement("a", {
					href: `${et.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), o.a.createElement(Oe.a, null, r.fbt._("Safety", null, {
					hk: "WyYmF"
				})), o.a.createElement(Mn, {
					title: r.fbt._("People You’ve Blocked", null, {
						hk: "3DxcE1"
					}),
					subtext: r.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
						hk: "1m7s07"
					}),
					label: r.fbt._("Block new user", null, {
						hk: "2OeU8N"
					}),
					add: e,
					remove: y,
					list: t,
					api: n,
					padBottom: !0
				}), O ? o.a.createElement(ms, {
					className: "badCommentAutocollapse",
					onChange: x,
					selectedCollapseLevel: S
				}) : null, E ? ((e, t, n, s, a, i, c, l, d, u, m, p) => o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), o.a.createElement(xe.p, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && o.a.createElement(xe.p, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && o.a.createElement(xe.p, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), o.a.createElement(Oe.a, null, r.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && o.a.createElement(xe.p, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), o.a.createElement(Oe.a, null, r.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), !u || m && o.a.createElement(xe.p, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), o.a.createElement(xe.p, {
					on: p,
					onClick: () => s(!p, "thirdPartyPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(a, s, i, x, 0, j, 0, p, m, w, k, b) : ((e, t, n, s, a, i, c, l, d, u, m) => o.a.createElement(o.a.Fragment, null, o.a.createElement(Oe.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), o.a.createElement(xe.p, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && o.a.createElement(xe.p, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u || m && o.a.createElement(xe.p, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), o.a.createElement(xe.p, {
					on: a,
					onClick: () => s(!a, "thirdPartyDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: r.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), o.a.createElement(xe.p, {
					on: c,
					onClick: () => s(!c, "thirdPartySiteDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && o.a.createElement(xe.p, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && o.a.createElement(xe.p, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(a, s, i, x, l, j, d, p, m, w, k), o.a.createElement(Oe.a, null, r.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), o.a.createElement(xe.p, {
					on: c,
					onClick: () => {
						C ? _() : c ? f() : h()
					},
					label: r.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: o.a.createElement(o.a.Fragment, null, r.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && o.a.createElement(o.a.Fragment, null, " ", r.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", o.a.createElement(_s, {
						type: "button",
						onClick: () => g()
					}, r.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), o.a.createElement(ys, {
					className: Object(u.a)({
						[Rn.a["m-responsive"]]: v
					}),
					label: r.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${et.a.redditUrl}/prefs/apps`,
					last: !0
				}), C && o.a.createElement(qe.a, {
					isResponsiveSettingsEnabled: v
				}))),
				Es = n("./src/reddit/actions/preferences.ts"),
				ws = n("./src/reddit/actions/snoovatarModal.ts"),
				ks = n("./src/reddit/components/Loader/index.m.less"),
				Os = n.n(ks);
			class Ss extends o.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: r
					} = this.props;
					return e ? n ? n() : o.a.createElement(Ot.a, {
						center: !0,
						className: Os.a.loadingIcon,
						sizePx: r || 10
					}) : t()
				}
			}
			var Ps = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				Is = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				Ns = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				As = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Ts = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				Ms = n("./src/reddit/selectors/structuredStyles.ts"),
				Bs = n("./src/reddit/selectors/subredditSettings.ts"),
				Ls = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				Rs = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				Us = n.n(Rs);
			const {
				fbt: Fs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ds = 30, Gs = 200, Hs = Object(c.a)(A.k, Bs.a, A.ub, Ms.n, Xe.a, (e, t, n, r, s) => {
				const o = e && e.profileId,
					a = o && r[o] ? r[o].bannerBackgroundImage : void 0;
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
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === s
				}
			}), Ws = at.a.div("ImageUploaderLayout", Us.a), zs = at.a.wrapped(Ls.a, "IconImageUploader", Us.a), qs = at.a.wrapped(Ns.a, "ProfileIcon", Us.a), Ks = at.a.wrapped(Ls.a, "BannerImageUploader", Us.a), Ys = at.a.wrapped(Is.a, "ProfileBanner", Us.a), Js = at.a.div("ProfileModerationContent", Us.a), Vs = at.a.wrapped(Ts.a, "PlusCircle", Us.a), Qs = at.a.span("LabelText", Us.a), Zs = at.a.span("ImageType", Us.a), Xs = at.a.a("Link", Us.a), $s = at.a.img("DummyBanner", Us.a), eo = at.a.wrapped(Ps.a, "Preview", Us.a);
			class to extends o.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(I.j)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(I.j)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(I.d)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(I.g)(!this.props.enableFollowers))
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							enableFollowers: this.props.enableFollowers,
							prevEnableFollowers: this.props.enableFollowers,
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(I.b)(this.props.showActiveCommunities))
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
						currentUserName: r,
						currentUserUrl: s,
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
						profileBannerUploading: j,
						profileIconUploading: E,
						publicDescription: w,
						title: k
					} = this.state, O = Object(u.a)({
						[Us.a["m-responsive"]]: d
					}), S = !!f && !Object(As.c)(f);
					return o.a.createElement(Ye.a, {
						sidebar: o.a.createElement(eo, {
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
							url: s,
							userCreated: n,
							username: r
						})
					}, o.a.createElement(Ke.b, {
						isResponsiveSettingsEnabled: d
					}, Fs._("Customize profile", null, {
						hk: "1fenXK"
					})), o.a.createElement(Oe.a, null, Fs._("Profile Information", null, {
						hk: "3vzAUk"
					})), o.a.createElement(xe.e, {
						label: Fs._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							k !== this.props.title && this.updateProfile(k, "title")
						},
						placeholder: Fs._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: Ds,
						subtext: Fs._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: k
					}), o.a.createElement(xe.h, {
						label: Fs._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							w !== this.props.publicDescription && this.updateProfile(w, "publicDescription")
						},
						placeholder: Fs._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: Gs,
						subtext: Fs._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: w
					}), o.a.createElement(Oe.a, null, Fs._("Images", null, {
						hk: "38DOkf"
					})), o.a.createElement(xe.l, {
						label: Fs._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: Fs._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, o.a.createElement(Ws, {
						className: Object(u.a)(O)
					}, S ? o.a.createElement(qs, {
						className: O,
						iconUrl: f,
						isNSFW: !1,
						userName: r
					}) : o.a.createElement(zs, {
						className: O,
						controlName: "profileIcon",
						icon: o.a.createElement(Vs, null),
						isUploading: E,
						label: o.a.createElement(Qs, null, Fs._("Drag and Drop or Upload {=Avatar} Image", [Fs._param("=Avatar", o.a.createElement(Zs, null, Fs._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: Us.a.Label,
						onChange: this.onIconChange
					}), h ? o.a.createElement(Ys, {
						bannerUrl: h,
						className: O,
						isNSFW: !1,
						userName: r
					}) : o.a.createElement(Ks, {
						className: O,
						controlName: "profileBanner",
						icon: o.a.createElement(Vs, null),
						isUploading: j,
						label: o.a.createElement(Qs, null, Fs._("Drag and Drop or Upload {=Banner} Image", [Fs._param("=Banner", o.a.createElement(Zs, null, Fs._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: Us.a.Label,
						onChange: this.onBannerChange
					}))), o.a.createElement(Oe.a, null, Fs._("Profile category", null, {
						hk: "1YRE6p"
					})), o.a.createElement(xe.p, {
						label: Fs._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: p,
						subtext: Fs._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), o.a.createElement(Oe.a, null, Fs._("Advanced", null, {
						hk: "1US2Ur"
					})), o.a.createElement(xe.p, {
						label: Fs._("Allow people to follow you", null, {
							hk: "30iVQH"
						}),
						subtext: Fs._("Followers will be notified about posts you make to your profile and see them in their home feed.", null, {
							hk: "3Ngn8M"
						}),
						on: a,
						onClick: this.onEnableFollowersToggle
					}), o.a.createElement(xe.p, {
						label: Fs._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: Fs._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [Fs._param("profileForm: r/all link", o.a.createElement(Xs, {
							href: "/r/all"
						}, "r/all")), Fs._param("profileForm: /users link", o.a.createElement(Xs, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), o.a.createElement(xe.p, {
						label: Fs._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: Fs._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: g,
						onClick: this.onShowActiveCommunitiesChange
					}), o.a.createElement(Oe.a, null, Fs._("Profile moderation", null, {
						hk: "3vDS8h"
					})), o.a.createElement(Js, null, Fs._("For moderation tools please visit our {=Profile Moderation page}", [Fs._param("=Profile Moderation page", o.a.createElement(Xs, {
						href: `/user/${r}/about/edit/moderation`
					}, Fs._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), l && o.a.createElement(C.a, {
						headerText: Fs._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: Fs._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [Fs._param("=NSFW content", o.a.createElement(Xs, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, Fs._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: Fs._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: Fs._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: _,
						onOverlayClick: _,
						overlayClassName: Object(u.a)({
							[Us.a.ResponsiveOverlay]: d
						}),
						withOverlay: !0
					}), o.a.createElement($s, {
						src: h
					}))
				}
			}
			const no = Object(a.b)(Hs, e => ({
					imageDeleteRequested: t => e(Object(Es.A)(t)),
					imagesUpdateRequested: (t, n) => e(Object(Es.B)(t, n)),
					onClickSnoovatar: () => e(Object(ws.b)({
						clickSource: "profile_overview"
					})),
					save: (t, n) => e(Object(Es.G)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(O.c)(to)),
				ro = Object(c.c)({
					isLoading: e => !Object(Bs.a)(e)
				}),
				so = Object(a.b)(ro)(Ss);

			function oo(e) {
				return o.a.createElement(so, {
					loaderSize: 50,
					render: () => o.a.createElement(no, e)
				})
			}
			var ao = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				io = n.n(ao);

			function co(e) {
				return o.a.createElement("header", {
					className: e.className
				}, o.a.createElement("div", {
					className: io.a.title
				}, r.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), o.a.createElement("div", {
					className: io.a.subtitle
				}, r.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var lo = n("./src/reddit/actions/governance/communityDetails.ts"),
				uo = n("./src/lib/addQueryParams/index.ts"),
				mo = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				po = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				bo = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				ho = n.n(bo);
			const {
				fbt: fo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const go = Object(c.c)({
				userId: e => {
					const t = Object(A.k)(e);
					return t ? t.id : ""
				}
			});
			var vo = Object(a.b)(go)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, r = t.primaryColor, s = Object(uo.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return o.a.createElement("div", {
						className: ho.a.body
					}, o.a.createElement("section", {
						className: ho.a.leftSection
					}, o.a.createElement("div", {
						className: ho.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), o.a.createElement("div", {
						className: ho.a.content
					}, o.a.createElement(mo.a, {
						index: "1",
						color: r
					}, fo._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), o.a.createElement(mo.a, {
						index: "2",
						color: r
					}, fo._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), o.a.createElement(mo.a, {
						index: "3",
						color: r
					}, fo._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), o.a.createElement("section", {
						className: ho.a.rightSection
					}, o.a.createElement(po.a, {
						url: s,
						scale: 4
					})))
				})),
				_o = n("./src/reddit/constants/colors.ts"),
				yo = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				xo = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				jo = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Co = n("./src/reddit/components/Economics/Price/index.tsx"),
				Eo = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				wo = n("./src/lib/localizeCurrency/index.ts"),
				ko = n("./src/reddit/hooks/useLocale.ts"),
				Oo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				So = n.n(Oo);
			const Po = [() => r.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => r.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => r.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => r.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				Io = [() => r.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => r.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => r.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => r.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function No({
				benefit: e,
				color: t
			}) {
				return o.a.createElement("li", {
					className: So.a.benefit
				}, o.a.createElement("div", {
					className: So.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(Vn.b)(Object(O.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: s
				} = e, a = Object(ko.a)();
				return o.a.createElement("div", {
					className: Object(u.a)(So.a.container, t)
				}, o.a.createElement("div", {
					className: So.a.topLine
				}, o.a.createElement(Eo.a, {
					className: So.a.brand,
					subreddit: s
				}), o.a.createElement("div", {
					className: So.a.title
				}, r.fbt._("{community} Supporter Membership", [r.fbt._param("community", s.displayText)], {
					hk: "eZ8PH"
				}))), o.a.createElement("header", {
					className: So.a.subTitle
				}, r.fbt._("Support the {community} community and receive exclusive access to premium features.", [r.fbt._param("community", s.displayText)], {
					hk: "2pm4PV"
				})), o.a.createElement("article", null, o.a.createElement("div", {
					className: So.a.benefitsTitle
				}, r.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), o.a.createElement("ul", {
					className: So.a.benefits
				}, Po.map(e => o.a.createElement(No, {
					benefit: e(),
					key: e()
				}))), o.a.createElement("div", {
					className: So.a.benefitsTitle
				}, r.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), o.a.createElement("ul", {
					className: So.a.benefits
				}, Io.map(e => o.a.createElement(No, {
					benefit: e(),
					key: e()
				})))), o.a.createElement("footer", {
					className: So.a.price
				}, r.fbt._("{price}/month", [r.fbt._param("price", Object(wo.b)(n, {
					locale: a
				}))], {
					hk: "4hvdfp"
				})))
			})));
			var Ao = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				To = n.n(Ao);
			const {
				fbt: Mo
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Bo = e => Mo._("You've been supporting the community and the development of new features since {joinDate}.", [Mo._param("joinDate", e)], {
				hk: "37ImIl"
			}), Lo = [Mo._("Loyalty badge", null, {
				hk: "15DctX"
			}), Mo._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Mo._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Mo._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var Ro = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: r,
					title: s
				} = e, a = r.primaryColor;
				return o.a.createElement("div", {
					className: To.a.card,
					style: {
						borderColor: a
					}
				}, o.a.createElement(Eo.a, {
					className: To.a.brand,
					subreddit: r
				}), o.a.createElement("div", {
					className: To.a.cardContent
				}, o.a.createElement("div", {
					className: To.a.cardTitle
				}, s), o.a.createElement(Co.a, {
					className: To.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: r.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), o.a.createElement("div", {
					className: To.a.membershipMsg
				}, Bo(t)), o.a.createElement("div", {
					className: To.a.benefitsTitle
				}, Mo._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), o.a.createElement("ul", {
					className: To.a.benefits
				}, Lo.map(e => o.a.createElement(No, {
					benefit: e,
					color: a,
					key: e
				})))))
			};
			const {
				fbt: Uo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Fo = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: r,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(a.d)(), m = Object(nt.a)();
					Object(s.useEffect)(() => {
						c && (d(Object(lo.a)({
							subredditId: c.id
						})), m(Object(xo.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(yo.a)(p, void 0, _o.b.white);
					return o.a.createElement("div", {
						className: Object(u.a)(t, To.a.pointsContainer)
					}, o.a.createElement("header", {
						className: To.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, Uo._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), o.a.createElement(jo.a, {
						className: To.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), o.a.createElement("article", {
						className: To.a.content
					}, c && o.a.createElement(o.a.Fragment, null, o.a.createElement(vo, {
						subreddit: c
					}), o.a.createElement(Ro, {
						joinDate: n,
						membership: r,
						subreddit: c,
						title: l
					}))))
				},
				Do = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Go = n("./src/reddit/actions/governance/errorToast.ts"),
				Ho = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Wo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const zo = Object(a.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(Do.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(Go.a)(e, t)
			}));
			var qo = Object(Vn.b)(zo((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: r,
					joinDate: a,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: m,
					subredditId: p,
					title: b
				} = e, [h, f] = Object(s.useState)(!1), g = m ? m.displayText : "";
				return o.a.createElement("div", {
					className: Object(u.a)(n, To.a.container)
				}, o.a.createElement("header", {
					className: To.a.header
				}, Wo._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), o.a.createElement(jo.a, {
					className: To.a.close,
					onClick: l
				})), o.a.createElement("article", {
					className: To.a.content
				}, o.a.createElement("div", {
					className: To.a.warning
				}, Wo._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Wo._param("subredditName", g), Wo._param("endDate", r)], {
					hk: "1POMMH"
				})), m && o.a.createElement(Ro, {
					joinDate: a,
					membership: i,
					subreddit: m,
					title: b
				})), o.a.createElement("footer", {
					className: To.a.footer
				}, o.a.createElement(S.o, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(Ho.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? Wo._("canceling...", null, {
					hk: "1Ggy36"
				}) : Wo._("cancel membership", null, {
					hk: "C9ZhO"
				})), o.a.createElement(S.l, {
					onClick: l
				}, Wo._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Ko = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				Yo = Object(a.b)(Ko);
			var Jo = Object(X.a)(Yo((function(e) {
					return "points" === e.membership.currency ? o.a.createElement(Fo, e) : o.a.createElement(qo, e)
				}))),
				Vo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				Qo = n.n(Vo);

			function Zo(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Xo extends o.a.Component {
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
					} = t, i = Zo(s.endsAt), c = Zo(s.publishAt), l = !a.renew, d = n ? n.displayText : "", m = i ? r.fbt._("Cancelled. Will expire on {date}", [r.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? r.fbt._("Joined {date}", [r.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return o.a.createElement("div", {
						className: Object(u.a)(e, Qo.a.container)
					}, o.a.createElement("div", {
						className: Qo.a.membershipName
					}, r.fbt._("{subredditName} {title}", [r.fbt._param("subredditName", d), r.fbt._param("title", s.title)], {
						hk: "2NdAdN"
					})), !l && o.a.createElement("div", {
						className: Qo.a.joinDate,
						title: p
					}, p), l && o.a.createElement("div", {
						className: Qo.a.cancelled,
						title: m
					}, m), o.a.createElement(S.r, {
						className: Qo.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && o.a.createElement(Jo, {
						withOverlay: !0,
						endDate: i,
						joinDate: c,
						subredditId: s.subredditId,
						membership: s,
						title: d + " " + s.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const $o = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var ea = Object(a.b)($o)(Xo),
				ta = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				na = n.n(ta);
			const ra = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var sa = Object(a.b)(ra)((function(e) {
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
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement("div", {
						className: na.a.title
					}, r.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => o.a.createElement("div", {
						className: na.a.loading,
						key: t
					})), i && a.map(e => o.a.createElement(ea, {
						key: e.membership.subredditId,
						className: na.a.membership,
						subscription: e
					})), !n && !i && o.a.createElement("div", {
						className: na.a.empty
					}, r.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				oa = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				aa = n.n(oa);

			function ia(e) {
				return o.a.createElement(Ye.a, {
					className: e.className
				}, o.a.createElement(co, {
					className: aa.a.header
				}), o.a.createElement(sa, null))
			}
			var ca = n("./src/reddit/components/TabNav/index.tsx"),
				la = n("./src/reddit/helpers/correlationIdTracker.ts"),
				da = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				ua = n("./src/reddit/selectors/platform.ts"),
				ma = n("./src/reddit/selectors/responsiveSettings.ts"),
				pa = n("./src/reddit/pages/Settings/index.m.less"),
				ba = n.n(pa);
			const ha = (e, t, n) => [{
					key: m.Zb.Account,
					title: r.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Zb.Profile,
					title: r.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Zb.Privacy,
					title: r.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Zb.Feed,
					title: r.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Zb.Notifications,
					title: r.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Zb.Premium,
					title: r.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: ba.a.CreatorTab,
					key: m.Zb.Creator,
					title: r.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: ba.a.PaymentsTab,
					key: m.Zb.Payments,
					title: r.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: ba.a.SpecialMembershipTab,
					key: m.Zb.SpecialMembership,
					title: r.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: ba.a.MessagingTab,
					key: m.Zb.Messaging,
					title: r.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				fa = Object(c.c)({
					savedPayments: $n.p,
					userIsWhitelistedCreator: $n.y,
					allowNavigationCallback: ua.a,
					isResponsiveSettingsEnabled: ma.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				ga = Object(Ve.u)(),
				va = Object(a.b)(fa, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(Es.H)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				_a = {
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
			class ya extends o.a.Component {
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
						_a.hasOwnProperty(t) && this.props.sendEvent(r => ({
							source: this.getSource(),
							action: "save",
							noun: _a[t],
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
						const r = n ? this.props.prefs[e] : t;
						return "boolean" == typeof r ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === r ? "off" : "on" : !0 === r ? "on" : "off" : r
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: r,
							userIsWhitelistedCreator: s,
							userHasSpecialMembership: a
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case m.Zb.Account:
								return o.a.createElement(sn, i);
							case m.Zb.Profile:
								return o.a.createElement(oo, i);
							case m.Zb.Premium:
								return o.a.createElement(as.b, i);
							case m.Zb.Notifications:
								return o.a.createElement(zr, i);
							case m.Zb.Privacy:
								return o.a.createElement(Cs, i);
							case m.Zb.Messaging:
								return o.a.createElement(zn, i);
							case m.Zb.Feed:
								return o.a.createElement(Br, i);
							case m.Zb.Payments:
								return o.a.createElement(os, null);
							case m.Zb.Creator: {
								const e = Object(p.a)(r.search);
								return s ? o.a.createElement(dr, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Zb.SpecialMembership:
								return a ? o.a.createElement(ia, null) : null;
							default:
								return o.a.createElement(sn, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(da.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Zb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Zb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = o.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return o.a.createElement(ca.a, {
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
					Object(la.d)(la.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
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
					Object(la.b)(la.a.PremiumSettings)
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
					return o.a.createElement("div", {
						className: Object(u.a)(ba.a.Container, {
							[ba.a["m-responsive"]]: t
						})
					}, o.a.createElement(ca.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: r.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						onTouchMove: this.startScrolling
					}, ha(n, s, a).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = ga(va(Object(O.c)(ya)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/config.ts");
			const s = (e, t) => `${r.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
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
				return x
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "z", (function() {
				return E
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
				return I
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "y", (function() {
				return L
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "w", (function() {
				return D
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
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
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
							r = Date.now();
						return n && r < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				y = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === u.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === a.a.First),
							[i.a.Achievement]: r.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const j = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return h;
					return x(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				C = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === s) return n;
				const o = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === c)
			}

			function k(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
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

			function P(e, t) {
				return k(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const I = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === d.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === d.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
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
					const r = f(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				B = (e, t) => {
					var n, r, s, o;
					const a = (null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || A;
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
				L = e => {
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
				G = (e, t, n) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!r || !Object(o.a)(r))
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
					if (s && Object(o.b)(s)) return !0;
					const a = r.d.spGiphy(e),
						i = D(e, t);
					return !(!a || !i) || a && i
				},
				W = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/chatInviteLinkSharing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => Object(s.c)(e, {
				experimentName: r.D,
				experimentEligibilitySelector: () => Object(o.J)(e)
			}) === r.Ic
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				l = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, o, a;
					return t ? e.subreddits.productOffers[Object(s.a)(n, t)] : null === (a = null === (o = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === a ? void 0 : a[Object(s.a)(n)]
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
					const r = d(e, t);
					return null === (n = null == r ? void 0 : r.pricePackages) || void 0 === n ? void 0 : n[0].price
				},
				m = e => {
					const t = l(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(r.a)(m, i.p, (e, t) => p(e, t) || null),
				h = Object(r.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				f = Object(r.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(r.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				o = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const r = n.subredditId,
							s = Object.keys(e.user.ownedBadges[r] || {}),
							o = e.badges.models,
							a = Date.now();
						let i = !1;
						return s.forEach(e => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.8cd9e474535b7e65d890.js.map