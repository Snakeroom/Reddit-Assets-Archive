// https://www.redditstatic.com/desktop2x/Settings.33c7a9b25b34f4e8a058.js
// Retrieved at 5/11/2021, 6:40:06 PM by Reddit Dataminer v1.0.0
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
					for (var o = s.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), i = o - a, c = u.getBlocksCount(t, n), l = c - o % c, d = Math.floor(o / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), _ = new Array(c), x = 0, y = r.from(e.buffer), C = 0; C < c; C++) {
						var j = C < l ? p : b;
						v[C] = y.slice(g, g + j), _[C] = f.encode(v[C]), g += j, x = Math.max(x, j)
					}
					var E, w, k = r.alloc(o),
						O = 0;
					for (E = 0; E < x; E++)
						for (w = 0; w < c; w++) E < v[w].length && (k[O++] = v[w][E]);
					for (E = 0; E < h; E++)
						for (w = 0; w < c; w++) k[O++] = _[w][E];
					return k
				}(o, e, t)
			}

			function x(e, t, n, r) {
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
					x = new i(h);
				return function(e, t) {
						for (var n = e.size, r = l.getPositions(t), s = 0; s < r.length; s++)
							for (var o = r[s][0], a = r[s][1], i = -1; i <= 7; i++)
								if (!(o + i <= -1 || n <= o + i))
									for (var c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(o + i, a + c, !0, !0) : e.set(o + i, a + c, !1, !0))
					}(x, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var r = n % 2 == 0;
							e.set(n, 6, r, !0), e.set(6, n, r, !0)
						}
					}(x),
					function(e, t) {
						for (var n = c.getPositions(t), r = 0; r < n.length; r++)
							for (var s = n[r][0], o = n[r][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(s + a, o + i, !0, !0) : e.set(s + a, o + i, !1, !0)
					}(x, t), v(x, n, 0), t >= 7 && function(e, t) {
						for (var n, r, s, o = e.size, a = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), r = i % 3 + o - 8 - 3, s = 1 == (a >> i & 1), e.set(n, r, s, !0), e.set(r, n, s, !0)
					}(x, t),
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
					}(x, b), isNaN(r) && (r = d.getBestMask(x, v.bind(null, x, n))), d.applyMask(r, x), v(x, n, r), {
						modules: x,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: r,
						segments: o
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, r, a = o.M;
				return void 0 !== t && (a = o.from(t.errorCorrectionLevel, o.M), n = p.from(t.version), r = d.from(t.maskPattern), t.toSJISFunc && s.setToSJISFunction(t.toSJISFunc)), x(e, n, a, r)
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
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function r(e, t, n, r) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: r ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(s)
			}
			n.d(t, "a", (function() {
				return r
			}))
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
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
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
				return j
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
				return I
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
				x = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function y(e) {
				return !!e && "removeBadge" === e.type
			}

			function C(e) {
				if (!y(e)) return e
			}
			const j = () => async (e, t, {
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
					t.ok && e(Object(x.g)(t.body))
				}
			}, E = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const o = r().user.account,
					a = r().economics.subredditPremium[e],
					i = !a || a.status !== f.a.Fetched || t;
				if (o && i) {
					const t = await Object(c.a)(s(), e, o.id);
					n(Object(x.i)(t))
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
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(x.a)({
						...e,
						badge: C(e.badge),
						currentAppliedBadges: c,
						userId: a.id
					})), y(e.badge) && n ? s = await Object(l.a)(r(), e.subredditId, n.id, !1) : y(e.badge) || (s = await Object(l.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(x.a)({
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
					})), n(Object(x.d)(b.c.MyBadges)))
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
					}), t(Object(x.e)({
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
					r(Object(x.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, I = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					wallet: s
				} = await Object(i.c)(r(), e);
				t(Object(x.f)({
					wallet: s
				})), await t(E(e.subredditId, !0))
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
				return I
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "h", (function() {
				return F
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
				x = n("./src/reddit/models/Gold/ProductOffer.ts"),
				y = n("./src/reddit/actions/gold/powerups.ts"),
				C = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/endpoints/gold/productOfferPurchase.ts");
			const E = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				k = (e, t, n) => async (s, o, {
					gqlContext: a
				}) => {
					const c = i()(),
						l = await Object(j.f)(a(), c, e, t, n);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(w(t));
						if (n) return n.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, O = (e, t, n, s, o, a) => async (c, l, {
					gqlContext: d
				}) => {
					const u = l(),
						m = () => c(Object(f.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						b = o === x.c.Premium,
						h = o === x.c.Powerups,
						y = {};
					if (h && a) y.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (b) {
						const e = Object(g.b)(u);
						y.premium = {
							pricePackage: e
						}
					}
					let C, E, O = "";
					try {
						O = await c(k(t, s, y))
					} catch (I) {
						return p.c.captureException(I), void(I.message && c(Object(f.stripeApiError)(I.message)))
					}
					c(Object(f.stripeTokenPending)());
					const S = Object(v.y)(u);
					if (S || (C = await c(Object(f.validateAndCreateStripeToken)(e)), E = Object(v.v)(u), C)) try {
						const t = i()(),
							r = S || E ? C && E ? Object(j.h)(d(), t, O, C.id) : S ? Object(j.j)(d(), t, O, S) : null : Object(j.i)(d(), t, O, C.id),
							o = await r;
						if (!(null == o ? void 0 : o.ok)) return void m();
						const u = o.body.data.createEconPayment;
						if (u && u.errors && u.errors.length) return void c(Object(f.stripeApiError)(w(u.errors)));
						const {
							ok: p,
							payment: g,
							providerExecution: {
								paymentIntentClientSecret: v
							}
						} = u;
						if (p && g.status === j.a.ActionRequired) {
							const t = await e.confirmCardPayment(v),
								{
									error: n
								} = t;
							if (n) return void(n.message ? c(Object(f.stripeApiError)(n.message)) : m());
							let r;
							if (!(r = S ? await Object(j.e)(d(), i()(), g.id, S) : await Object(j.d)(d(), i()(), g.id, C.id, E)).ok) return void m();
							const s = r.body;
							if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== j.a.Paid) return void m()
						} else if (p && g.status !== j.a.Paid) return void m();
						const x = Object(_.i)(l());
						x && (h && a ? c(U({
							subredditId: a,
							powerupsCount: s,
							user: x,
							isAnonymous: n
						})) : b && c(D({
							user: x
						})))
					} catch (I) {
						p.c.captureException(I), m()
					}
				}, S = (e, t, n, r) => async (s, o, {
					gqlContext: a
				}) => {
					let l = "";
					try {
						l = await s(k(e, r, {
							powerUps: {
								subredditId: t,
								isAnonymous: n
							}
						}))
					} catch (m) {
						return p.c.captureException(m), m.message && s(Object(f.paypalApiError)(m.message)), null
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
							p = await Object(j.g)(a(), m, l, e, c);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return s(Object(f.paypalApiError)(w(e.errors))), null;
							const a = Object(_.i)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if (o === j.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && a) return t && s(U({
									subredditId: t,
									powerupsCount: r,
									user: a,
									isAnonymous: n
								})), null
							}
						}
					} catch (m) {
						p.c.captureException(m)
					}
					return s(Object(f.paypalApiError)(E())), null
				}, I = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					try {
						const r = i()(),
							o = await Object(j.c)(s(), r, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(f.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						p.c.captureException(o)
					}
					return n(Object(f.paypalApiError)(E())), !1
				}, P = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await Object(j.l)(n());
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
				}, N = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await Object(j.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: s
							} = n.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(w(s))
					} catch (s) {
						p.c.captureException(s)
					}
				}, A = Object(m.a)(h.N), T = Object(m.a)(h.O), L = Object(m.a)(h.P), M = e => async (t, n) => {
					await t(A(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, B = (e, t, n) => async (s, o, {
					gqlContext: a
				}) => {
					s(T({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await Object(j.b)(a(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void s(M(r[0].message));
							s(L({
								subredditId: t,
								allocatedAt: n
							}))
						} else s(M(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), s(M(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, R = Object(m.a)(h.R), U = e => async (t, n) => {
					t(R(e)), t(Object(y.h)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(C.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(C.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(m.a)(h.V), F = Object(m.a)(h.Z)
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
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
			const f = Object(s.a)(h.cb),
				g = Object(s.a)(h.bb),
				v = Object(s.a)(h.ab),
				_ = Object(s.a)(h.Y),
				x = Object(s.a)(h.X),
				y = Object(s.a)(h.W),
				C = Object(s.a)(h.Cb),
				j = Object(s.a)(h.Ab),
				E = Object(s.a)(h.Bb),
				w = Object(s.a)(h.Fb),
				k = Object(s.a)(h.Eb),
				O = Object(s.a)(h.Db),
				S = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, I = (e, t) => async n => {
					e === i.c.Premium ? n(N()) : t && n(P(e, t))
				}, P = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					const a = s();
					if (!Object(b.g)(a, {
							subredditId: t,
							type: e
						})) {
						n(f());
						try {
							const r = await ((e, t, n, r) => Object(p.a)(e, {
								...m,
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
						const t = await ((e, t) => Object(p.a)(e, {
							...d,
							variables: {
								productTypes: t
							}
						}))(n(), [c]);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(x({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(y(t)), e(S(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a, i;
					e(C());
					try {
						const t = await (e => Object(p.a)(e, u))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(E({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.subscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						o.c.captureException(c);
						const t = c.message ? c.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(j(t)), e(S(t))
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
				return x
			})), n.d(t, "selectSavedCard", (function() {
				return y
			})), n.d(t, "_deleteSavedCard", (function() {
				return C
			})), n.d(t, "deleteSavedCard", (function() {
				return j
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
				}, _ = Object(o.a)(i.x), x = Object(o.a)(i.H), y = Object(o.a)(i.C), C = Object(o.a)(i.g), j = e => async (t, n, {
					apiContext: r
				}) => {
					t(C(e));
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
						e(w(r)), r[0] && e(y(r[0].cardId))
					} catch (r) {
						s.c.captureException(r), e(w([]))
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
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
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
			var x = n("./src/reddit/selectors/notificationPrefs.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/notifications/constants.ts");
			const j = Object(h.a)(C.c),
				E = Object(h.a)(C.b),
				w = Object(h.a)(C.a),
				k = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t();
					if (!Object(y.i)(r)) return;
					const s = Object(x.b)(r),
						a = Object(x.a)(r);
					if (s || a) return;
					e(j());
					const i = await (e => Object(v.a)(e, {
						endpoint: Object(_.a)(`${g.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: o.eb.GET
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
						e(E({
							preferences: t
						}))
					} else e(w(i.error))
				};
			Object(h.a)(C.f), Object(h.a)(C.e), Object(h.a)(C.d);
			var O = n("./src/reddit/actions/platform.ts"),
				S = n("./src/reddit/actions/preferences.ts"),
				I = n("./src/reddit/actions/profile/index.ts"),
				P = n("./src/reddit/actions/subredditSettings.ts"),
				N = n("./src/reddit/actions/users.ts"),
				A = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/helpers/externalAccount/index.tsx"),
				L = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				M = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				B = n("./src/reddit/selectors/externalAccount.ts");
			const R = e => async (t, n) => {
				await t(Object(N.r)());
				const h = [t(Object(S.x)(!0)), t(Object(m.a)())];
				n().economics.paymentSystems.status === M.a.NotFetched && h.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(u.d)());
					const r = await Object(d.d)(n());
					r.ok ? e(Object(u.c)(r.body)) : e(Object(u.b)({
						error: r.error
					}))
				})())), await Promise.all(h); {
					const e = n();
					if (!Object(y.J)(e)) return Object(L.a)(t, e)
				}
				const {
					page: g = o.Tb.Account
				} = e.params;
				if (g === o.Tb.Gold) return void t(Object(s.c)("/settings/premium"));
				const v = [];
				g === o.Tb.Profile && (v.push(t(Object(I.a)())), v.push(t(Object(P.g)()))), g === o.Tb.Account && v.push(t(Object(p.o)())), g === o.Tb.Notifications && v.push(t(k())), g !== o.Tb.Privacy && g !== o.Tb.Messaging || v.push(t(Object(l.b)())), g === o.Tb.Premium && (v.push(t(Object(I.a)())), v.push(t(Object(b.i)(!0)))), await Promise.all(v); {
					const e = n(),
						o = e.platform.currentPage,
						{
							url: c
						} = o,
						l = Object(a.a)(c).get(A.d);
					if (l && (t(Object(s.c)(Object(i.a)(c, [A.d]))), Object(B.a)(e))) {
						const e = r.fbt._("Connected accounts", null, {
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
				return X
			})), n.d(t, "d", (function() {
				return ne
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ae
			})), n.d(t, "a", (function() {
				return ie
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
				f = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(`${e.apiUrl}/api/v1/${t}/banned`),
				method: m.eb.GET,
				data: n
			});
			var v = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				_ = n("./src/reddit/models/SubredditModeration/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/bannedUser.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/subredditModeration/constants.ts"),
				k = n("./src/lib/initializeClient/installReducer.ts"),
				O = n("./node_modules/redux/es/redux.js");
			var S = (e = null, t) => {
				switch (t.type) {
					case w.o:
					case w.n:
						return null;
					case w.m:
						return t.payload;
					default:
						return e
				}
			};
			const I = {};
			var P = (e = I, t) => {
					switch (t.type) {
						case w.o: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(_.d)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case w.n:
						case w.m: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(_.d)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				N = Object(O.c)({
					error: S,
					pending: P
				});
			const A = {};
			var T = (e = A, t) => {
					switch (t.type) {
						case w.n: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(_.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				L = n("./src/reddit/actions/inContextModeration.ts");
			var M = (e = null, t) => {
				switch (t.type) {
					case L.a:
						return t.payload;
					default:
						return e
				}
			};
			const B = {};
			var R = (e = B, t) => {
					switch (t.type) {
						case w.n: {
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
				U = n("./node_modules/icepick/icepick.js");
			const D = {};
			var F = (e = D, t) => {
				switch (t.type) {
					case w.l:
					case w.n: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(U.merge)(e, {
							[n]: r
						})
					}
					case w.s: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(U.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var H = (e = null, t) => {
				switch (t.type) {
					case w.r:
					case w.q:
						return null;
					case w.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case w.r:
							return !0;
						case w.q:
						case w.p:
							return !1;
						default:
							return e
					}
				},
				q = Object(O.c)({
					error: H,
					pending: W
				});
			var z = (e = null, t) => {
					switch (t.type) {
						case w.r:
						case w.p:
							return null;
						case w.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				G = Object(O.c)({
					api: q,
					result: z
				});
			const K = {};
			var Y = (e = K, t) => {
					switch (t.type) {
						case w.n: {
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
						case w.s: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case w.l: {
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
				J = Object(O.c)({
					api: N,
					fetchedTokens: T,
					inContext: M,
					loadMore: R,
					models: F,
					search: G,
					userOrder: Y
				});
			Object(k.a)({
				features: {
					banned: J
				}
			});
			const V = Object(a.a)(w.o),
				Z = Object(a.a)(w.n),
				Q = Object(a.a)(w.m),
				X = (e, t = {}) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						a = t.after || "",
						i = Object(_.d)(e, a),
						c = o.features.banned.fetchedTokens[i];
					if (o.features.banned.api.pending[i] || c) return;
					n(V({
						subredditId: e,
						fetchedToken: a
					}));
					const l = o.subreddits.models[e].name,
						d = await g(s(), l, t);
					d.ok ? n(Z({
						...d.body,
						fetchedToken: a
					})) : n(Q({
						subredditId: e,
						fetchedToken: a
					}))
				}, $ = Object(a.a)(w.r), ee = Object(a.a)(w.q), te = Object(a.a)(w.p), ne = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r().subreddits.models[e].name,
						a = {
							username: Object(v.a)(t)
						};
					n($());
					const i = await g(s(), o, a);
					i.ok ? n(ee(i.body)) : n(te(i.error))
				}, re = Object(a.a)(w.l), se = Object(a.a)(w.s), oe = (e, t, n) => async (s, a, {
					apiContext: c
				}) => {
					const l = a(),
						u = l.subreddits.models[e].url,
						f = l.subreddits.models[e].name;
					t.username = Object(v.a)(t.username), s(Object(i.h)(n));
					const _ = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.eb.POST,
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
					if (_.ok) {
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
						const o = await g(c(), f, e);
						o.ok && s(re(o.body))
					} else {
						s(Object(i.f)(n, _.error));
						const e = o()(_, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(d.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ae = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const i = s().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.eb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(a(), i, t);
					if (c.ok) n(se({
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
				}, ie = (e, t) => async (n, r) => {
					const s = r();
					await Promise.all([(async () => {
						if (!Object(y.b)(u.a.BAN_USER)(s) && !Object(j.Q)(s, {
								subredditId: e
							})) {
							const t = Object(j.T)(s, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const r = Object(E.mb)(s, {
							userName: t
						});
						if (!r) return;
						const o = Object(C.h)(s, {
							subredditId: e
						});
						o && o[r.id] || await n(X(e, {
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
				onAddUserToQuickReplyList: h
			}) => {
				return o.a.createElement(l.q, {
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
				})
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
			}, s.a.createElement(l.b, null)), s.a.createElement(l.h, null, s.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), s.a.createElement(l.k, null, e.message && s.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && s.a.createElement("div", {
				className: c.a.text
			}, e.children), s.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && s.a.createElement(a.l, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), s.a.createElement(a.i, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
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
				c = n("./src/lib/currency/centsToDollars/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				u = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/selectors/crypto/points.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(r || (r = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case r.Monthly:
							return p.fbt._("{price}/mo", [p.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				h = (e, t) => {
					if (e) switch (t) {
						case r.Monthly:
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
					monthly: s,
					subredditId: d
				} = e, p = Object(a.e)(e => Object(m.b)(e, d)), f = e.dollarPrice && `$${Object(c.a)(e.dollarPrice,!0)}`, x = e.tokenPrice && p && Object(l.a)(Object(u.b)(e.tokenPrice, null == p ? void 0 : p.displayConversion)) + (n ? "" : " " + p.name);
				if (!f && !x) return null;
				const y = s ? r.Monthly : r.Once;
				return o.a.createElement("span", {
					className: Object(i.a)(t, g.a.price)
				}, f && x ? v._("{dollar-price} or {point-price}", [v._param("dollar-price", b(f, y)), v._param("point-price", o.a.createElement(_, {
					subredditId: d,
					pointPrice: b(x, y)
				}))], {
					hk: "2Gif0l"
				}) : f ? h(f, y) : x ? o.a.createElement(_, {
					subredditId: d,
					pointPrice: h(x, y)
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
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/NewPost/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				d = n("./src/reddit/components/EditableImage/index.m.less"),
				u = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class b extends s.a.PureComponent {
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
						editButtonClassName: r,
						isLoading: l,
						imageUrl: d
					} = this.props;
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.Container, n)
					}, s.a.createElement("label", {
						className: u.a.HitBox
					}, s.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, d ? s.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: d
					}) : t), s.a.createElement(a.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !l && s.a.createElement("div", {
						className: Object(o.a)(u.a.EditButton, r)
					}, s.a.createElement(c.a, {
						className: u.a.EditIcon
					}))), l && s.a.createElement(i.a, {
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
				i = n("./src/reddit/actions/snoovatar.ts"),
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
				x = n("./src/config.ts"),
				y = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = n("./src/lib/lessComponent.tsx"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				E = n("./src/lib/timeAgo/index.ts"),
				w = n("./src/reddit/components/ChatButton/index.tsx"),
				k = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = n("./src/reddit/components/SubscribeButton/index.tsx"),
				I = n("./src/reddit/components/UserIcon/index.tsx"),
				P = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				N = n("./src/reddit/icons/fonts/Info/index.tsx"),
				A = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				T = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				L = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				M = n("./src/reddit/models/Gold/Award.ts"),
				B = n("./src/reddit/models/User/index.ts"),
				R = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				D = n("./src/reddit/actions/inContextModeration.ts"),
				F = n("./src/reddit/actions/modal.ts"),
				H = n("./src/reddit/actions/subredditModeration/ban.ts"),
				W = n("./src/reddit/constants/modals.ts"),
				q = n("./src/reddit/components/Hovercards/helpers.ts"),
				z = n("./src/reddit/icons/svgs/Ban/index.tsx"),
				G = n("./src/reddit/icons/svgs/Mute/index.tsx"),
				K = n("./src/reddit/icons/svgs/Unban/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				J = n("./src/reddit/selectors/bannedUser.ts"),
				V = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Z = n.n(V);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = C.a.wrapped(z.a, "BanIcon", Z.a), $ = C.a.wrapped(G.a, "MuteIcon", Z.a), ee = C.a.wrapped(K.a, "UnbanIcon", Z.a), te = Object(a.c)({
				hasModMailPermissions: Object(u.a)(Y.c.mail),
				isUserBanned: (e, t) => !!Object(J.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.mb)(e, {
					userName: t.username
				})
			});
			class ne extends s.a.Component {
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
					}, r ? s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							o(this.props.user.id), a(P.e(t))
						}
					}, s.a.createElement(ee, null), Q._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							i(), a(P.a(t))
						}
					}, s.a.createElement(X, null), Q._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							c(), a(P.d(t))
						}
					}, s.a.createElement($, null), Q._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var re = Object(o.b)(te, (e, {
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
						})), e(Object(F.i)(W.a.MUTE_USER))
					}
				}))(ne),
				se = n("./src/reddit/actions/userFlair/index.ts"),
				oe = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				ae = n("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				ie = n.n(ae);
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), le = C.a.wrapped(oe.a, "FlairIcon", ie.a);
			var de = Object(o.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, s.a.createElement(le, null), ce._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ue = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const be = C.a.wrapped(I.a, "UserIcon", me.a),
				he = C.a.wrapped(S.a, "SubscribeButton", me.a),
				fe = C.a.wrapped(w.b, "ChatButton", me.a),
				ge = C.a.wrapped(T.a, "KarmaIcon", me.a),
				ve = C.a.wrapped(L.a, "PremiumIcon", me.a),
				_e = C.a.wrapped(y.a, "UserNameLink", me.a),
				xe = C.a.div("UserNameMetaData", me.a),
				ye = C.a.div("MetaDataItem", me.a),
				Ce = C.a.div("Bullet", me.a),
				je = C.a.div("UserNameContainer", me.a),
				Ee = C.a.div("UserInfoContainer", me.a),
				we = C.a.div("PostKarma", me.a),
				ke = C.a.div("CommentKarma", me.a),
				Oe = C.a.div("KarmaGrid", me.a),
				Se = C.a.div("GenericKarma", me.a),
				Ie = C.a.a("InfoLink", me.a),
				Pe = C.a.div("KarmaCount", me.a),
				Ne = C.a.div("KarmaLabel", me.a),
				Ae = C.a.div("GenericKarmaLabel", me.a),
				Te = C.a.div("BannerImage", me.a),
				Le = C.a.div("UserContainer", me.a),
				Me = C.a.div("BottomSpacer", me.a),
				Be = C.a.div("Container", me.a),
				Re = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(_e, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(A.a, {
					className: me.a.adminIcon,
					title: _.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(y.a, {
					to: "/premium"
				}, s.a.createElement(ve, null))), s.a.createElement(xe, null, e.user.username && s.a.createElement(ye, null, e.user.username, s.a.createElement(Ce, null, "•")), s.a.createElement(ye, null, Object(E.d)(e.user.createdUtc || e.user.created)))),
				Ue = e => {
					const {
						showAwardKarma: t,
						user: n
					} = e;
					return t ? s.a.createElement(Oe, null, s.a.createElement(Se, null, s.a.createElement(Pe, null, Object(j.b)(n.postKarma)), s.a.createElement(Ae, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Se, null, s.a.createElement(Pe, null, Object(j.b)(n.commentKarma)), s.a.createElement(Ae, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Se, null, s.a.createElement(Pe, null, Object(j.b)(n.awardeeKarma)), s.a.createElement(Ae, null, _.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [_.fbt._plural(n.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(Ie, {
						href: M.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(N.a, {
						className: me.a.infoIcon
					})))), s.a.createElement(Se, null, s.a.createElement(Pe, null, Object(j.b)(n.awarderKarma)), s.a.createElement(Ae, null, _.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [_.fbt._plural(n.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(Ie, {
						href: M.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(N.a, {
						className: me.a.infoIcon
					}))))) : s.a.createElement(Ee, null, s.a.createElement(ge, null), s.a.createElement(we, null, s.a.createElement(Pe, null, Object(j.b)(n.postKarma)), s.a.createElement(Ne, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ke, null, s.a.createElement(Pe, null, Object(j.b)(n.commentKarma)), s.a.createElement(Ne, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				De = e => {
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
						userFlair: y,
						userIsBanned: C,
						userProfileStyles: j,
						acceptChats: E
					} = e;
					if (!v) return s.a.createElement(Be, {
						style: b
					});
					const w = !!r && Object(B.e)(r) === g,
						O = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						S = v.accountIcon || `${x.a.assetPath}/img/snoo_user_placeholder.png`,
						I = d && d.flair,
						N = d && d.access,
						A = y && y.templateIds && y.templateIds.length > 0,
						T = y && y.displaySettings && y.displaySettings.isEnabled,
						{
							awardedLastMonth: L
						} = v,
						M = !!v.snoovatarFullBodyAsset,
						D = v.isNSFW && o;
					let F;
					return F = M ? !D && j && j.bannerBackgroundImage || void 0 : D ? `${x.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Be, {
						className: t,
						id: a,
						style: b
					}, !M && F && s.a.createElement(Te, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), s.a.createElement(Le, null, M ? s.a.createElement(U.a, {
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: O,
						isEmployee: v.isEmployee,
						isGold: v.isGold,
						isNSFW: v.isNSFW,
						isOwnProfile: w,
						onClickSnoovatar: c,
						prefersReducedAnimations: !!u,
						snoovatarUrl: v.snoovatarFullBodyAsset,
						title: null,
						userCreated: v.created,
						username: g,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(je, null, s.a.createElement(be, {
						iconUrl: S,
						isNSFW: v.isNSFW,
						userName: g
					}), s.a.createElement(Re, {
						origin: l,
						user: v,
						userName: g
					})), s.a.createElement(Ue, {
						showAwardKarma: p,
						user: v
					}), L && s.a.createElement(R.a, {
						recentAwardings: L,
						topAwardIcon: f,
						username: g
					}), i && !w && !C && E && s.a.createElement(fe, {
						contextId: n,
						userId: v.id,
						text: _.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						})
					}), v.hasUserProfile && !C && !w && s.a.createElement(he, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", n),
						small: !0
					})), N && n && !w && h && s.a.createElement(re, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), I && n && A && T && h && s.a.createElement(de, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), s.a.createElement(k.i, {
						contextId: n,
						subredditId: h,
						user: v
					}), !(N || i) && s.a.createElement(Me, null))
				},
				Fe = Object(O.a)(De),
				He = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return s.a.createElement(Fe, pe({
						isOpen: t
					}, e))
				};
			He.WrappedComponent = De;
			var We = He;
			const qe = Object(a.c)({
					activeTooltipId: h.a,
					currentUser: f.i,
					isLoggedIn: f.J,
					hideNSFWPref: f.B,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.k)(e, {
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
					user: f.mb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(g.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.m)(t) && Object(b.fb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				ze = Object(o.b)(qe, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)("user_hovercard")),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = ze(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(We, {
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
				acceptChats: e.acceptChats
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				BanIcon: "_2g595huO3XJ8C5PGbnTIcH",
				banIcon: "_2g595huO3XJ8C5PGbnTIcH",
				MuteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				muteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				UnbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3",
				unbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less": function(e, t, n) {
			e.exports = {
				FlairIcon: "_2xaYvwRfHZMRW_6lyBpV4v",
				flairIcon: "_2xaYvwRfHZMRW_6lyBpV4v"
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
				return x
			})), n.d(t, "b", (function() {
				return y
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
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName))
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
				x = m(_),
				y = h(_)
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
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return j
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
				const n = Object(h.a)(e, t),
					r = Object(f.I)(e, t);
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
				const n = Object(h.a)(e, t),
					r = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(o.b)(() => Object(a.a)(_, e => e))(e => s.a.createElement(p, {
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
			var y = Object(o.b)(() => Object(a.c)({
					subreddit: f.T
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
				C = n("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), o = Object(r.useMemo)(() => ({
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
				return s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: o
				})
			};
			var E = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: o
				} = Object(C.a)(), a = Object(r.useMemo)(() => ({
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
				return s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var w = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), o = Object(r.useMemo)(() => ({
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
				return s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: o
				})
			};
			var k = Object(o.b)(() => Object(a.c)({
				subreddit: f.T
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
				subredditOrProfile: (e, t) => Object(f.L)(e, {
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
				}) => t ? Object(f.T)(e, {
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
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
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

			function x({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.a)() && void 0 !== _[n]) return s.a.createElement(c.a, {
					name: _[n],
					isFilled: t,
					className: Object(o.a)(e, g.a.iconStyles)
				});
				const r = v[n];
				return r ? s.a.createElement(r, {
					className: Object(o.a)(e, g.a.iconStyles)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = o.a.div("dynamicTwoCol", c.a),
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
				x = n("./src/reddit/icons/svgs/User/index.tsx"),
				y = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/tooltip.ts"),
				E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				k = n.n(w);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = o.a.div("Container", k.a),
				I = o.a.div("Body", k.a),
				P = o.a.h5("Title", k.a),
				N = o.a.span("Label", k.a);
			class A extends s.a.Component {
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
						tooltipId: o
					} = this.props, a = o && r ? {
						id: o,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return s.a.createElement(S, null, s.a.createElement(P, null, n), s.a.createElement(I, null, e, s.a.createElement(N, O({
						key: "label"
					}, a), t)), o && r && s.a.createElement(E.c, {
						caretOnTop: !0,
						tooltipId: o,
						text: r
					}))
				}
			}
			var T = Object(m.b)(null, e => ({
					toggleTooltip: t => e(Object(j.h)({
						tooltipId: t
					}))
				}))(Object(g.b)(A)),
				L = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				M = n.n(L);
			const B = Object(p.a)(y.j, (e, {
					profileName: t
				}) => Object(C.tb)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				R = o.a.div("Container", M.a);

			function U(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var D = Object(m.b)(B)(Object(g.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: n,
						profileCreated: r,
						isOverlay: o,
						commentKarma: a,
						postKarma: i,
						totalKarma: c,
						subscribers: l
					} = e, d = U(o, "karma"), m = U(o, "cakeday"), p = `${u.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[u.fbt._plural(i,"number",Object(h.b)(i,{displayFull:!0}))],{hk:"husfU"})}\n${u.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[u.fbt._plural(a,"number",Object(h.b)(a,{displayFull:!0}))],{hk:"26iPTL"})}\n${u.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[u.fbt._plural(t,"number",Object(h.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${u.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[u.fbt._plural(n,"number",Object(h.b)(n,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return s.a.createElement(R, null, s.a.createElement(T, {
						icon: s.a.createElement(_.a, {
							className: M.a.icon,
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
					}), s.a.createElement(T, {
						icon: s.a.createElement(v.a, {
							className: M.a.icon,
							key: "cakeDay"
						}),
						label: Object(b.a)(r, !0),
						title: u.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: m,
						tooltip: Object(f.d)(r)
					}), l > 0 && s.a.createElement(T, {
						icon: s.a.createElement(x.a, {
							className: M.a.icon,
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
				F = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				H = n.n(F),
				W = n("./src/config.ts"),
				q = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				G = n("./src/reddit/controls/OutboundLink/index.tsx"),
				K = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				J = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				V = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Q = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				X = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				$ = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				ee = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				re = n.n(ne);
			var se = ({
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
					onDeleteBanner: m,
					onDeleteIcon: p,
					profileIcon: b,
					title: h,
					userCreated: f,
					username: g,
					url: v
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(X.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: g,
					isDeletingBanner: !!r,
					onDeleteBanner: m
				}), s.a.createElement("div", {
					className: te.a.SnooIconWrapper
				}, l || !b || c ? s.a.createElement(Z.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				}) : s.a.createElement(G.b, {
					isSponsored: !1,
					href: b,
					source: null
				}, s.a.createElement(Z.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				})), t && !n && (o ? s.a.createElement(z.a, {
					sizePx: 20,
					className: re.a.loadingIcon
				}) : s.a.createElement(Y.a, {
					className: re.a.closeIcon,
					onClick: p
				}))), !t && l && s.a.createElement(q.a, {
					to: "/settings/profile",
					className: te.a.settingsLink
				}, s.a.createElement(V.a, {
					className: re.a.settingsIcon
				})), h && s.a.createElement("h4", {
					className: te.a.userTitle
				}, h), s.a.createElement($.a, {
					className: te.a.userName,
					username: g,
					userCreated: f,
					url: v
				}), a && s.a.createElement(K.a, {
					className: te.a.adminIcon,
					title: u.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: u.fbt._("{username} has Reddit Premium", [u.fbt._param("username", g)], {
						hk: "3Fylv"
					}),
					href: `${W.a.redditUrl}/premium`
				}, s.a.createElement(J.a, {
					className: te.a.premiumIcon
				})), l && s.a.createElement(Q.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				oe = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var ae = ({
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
				url: x
			}) => f ? s.a.createElement(oe.a, {
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
				url: x
			}) : s.a.createElement(se, {
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
				url: x
			});
			const ie = o.a.wrapped(a.b, "Widget", H.a),
				ce = o.a.div("Description", H.a),
				le = o.a.wrapped(l, "Actions", H.a);
			class de extends s.a.PureComponent {
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
						profileIcon: u,
						publicDescription: m,
						snoovatarUrl: p,
						title: b,
						url: h,
						userCreated: f,
						username: g,
						isDefaultIcon: v,
						isDeletingIcon: _,
						isDeletingBanner: x,
						onClickSnoovatar: y,
						onDeleteIcon: C,
						onDeleteBanner: j,
						prefersReducedAnimations: E,
						editMode: w
					} = this.props;
					return s.a.createElement(ie, {
						className: r
					}, s.a.createElement(ae, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: w,
						isDefaultIcon: v,
						isDeletingBanner: x,
						isDeletingIcon: _,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: y,
						onDeleteBanner: j,
						onDeleteIcon: C,
						prefersReducedAnimations: E,
						profileIcon: u,
						title: b,
						userCreated: f,
						username: g,
						url: h,
						snoovatarUrl: p
					}), s.a.createElement(ce, null, m), s.a.createElement(D, {
						profileName: g,
						isOverlay: l
					}), this.renderAwardedLastMonth(), s.a.createElement(le, null, e), o)
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
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
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
						isNSFW: s,
						isProfileIdCard: a,
						userName: d
					} = this.props, {
						isUpdating: u
					} = this.state, p = o.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: s,
						userName: d
					});
					return t && Object(l.e)(t) === d ? o.a.createElement(i.a, {
						altText: r.fbt._("{userName} avatar image", [r.fbt._param("userName", d)], {
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
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/preferences.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: a.i,
					hideNSFWPref: a.B
				}),
				c = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(o.z)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
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
				i = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				isOwnProfile: n,
				onClick: r
			}) {
				return s.a.createElement(a.q, {
					onClick: r,
					className: Object(o.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !t && n,
						[d.a.compactButtonLayout]: e
					})
				}, t ? s.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : s.a.createElement("div", {
					className: d.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: d.a.chevronIcon
				}) : s.a.createElement(i.a, {
					className: d.a.chevronIcon
				}))
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
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: r,
				username: l,
				...d
			}) {
				const u = t ? o.fbt._("{username} · {time since account creation}", [o.fbt._param("username", `u/${l}`), o.fbt._param("time since account creation", Object(a.d)(r, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${l}`;
				return n ? s.a.createElement(i.a, c({}, d, {
					className: e,
					to: n
				}), u) : s.a.createElement("span", c({}, d, {
					className: e
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				u = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				m = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				g = n.n(f);
			const v = 25;

			function _(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function x(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const y = _("particleDelay", g.a),
				C = _("particleX", g.a),
				j = _("particleFloat", g.a),
				E = () => {
					const e = x(C),
						t = x(j),
						n = x(y);
					return Object(i.a)(g.a.particle, e, t, n)
				};
			class w extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < v; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: g.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${E()}`
					})
				}
			}
			var k = w,
				O = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				S = n.n(O);
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: s,
				isDeletingBanner: f,
				isEmployee: v,
				isGold: _,
				isNSFW: x,
				isOwnProfile: y,
				onClickSnoovatar: C,
				onDeleteBanner: j,
				prefersReducedAnimations: E,
				snoovatarUrl: w,
				title: O,
				userCreated: I,
				username: P,
				url: N
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement(b.a, {
				bannerBackgroundImage: e,
				editMode: !!s,
				isNSFW: x,
				username: P,
				isDeletingBanner: !!f,
				onDeleteBanner: j
			}), o.a.createElement("div", {
				className: g.a.snoovatarContainer
			}, _ && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: g.a.topGlow
			}), o.a.createElement("div", {
				className: g.a.bottomGlow
			}), !E && o.a.createElement(k, null)), o.a.createElement("img", {
				className: Object(i.a)(g.a.snoovatar, {
					[g.a.premiumGlow]: _
				}),
				src: w || void 0
			})), !s && y && o.a.createElement(c.a, {
				to: "/settings/profile",
				className: g.a.snoovatarSettingsLink
			}, o.a.createElement(m.a, {
				className: S.a.settingsIcon
			})), o.a.createElement("h1", {
				className: g.a.snoovatarUserTitle
			}, O || P, v && o.a.createElement(l.a, {
				className: g.a.snoovatarAdminIcon,
				title: r.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), _ && o.a.createElement("a", {
				title: r.fbt._("{username} has Reddit Premium", [r.fbt._param("username", P)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, o.a.createElement(u.a, {
				className: g.a.snoovatarPremiumIcon
			})), x && o.a.createElement(d.a, {
				className: g.a.snoovatarNsfwIcon,
				title: r.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			})), o.a.createElement(h.a, {
				className: g.a.snoovatarUserName,
				shouldDisplaySnoovatar: !0,
				username: P,
				userCreated: I,
				url: N
			}), (y || !n && !!w) && o.a.createElement(p.a, {
				compact: t,
				currentUserHasSnoovatar: n,
				isOwnProfile: y,
				onClick: C
			}))
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
				g = p.a.wrapped(i.e, "PrimaryButton", m.a),
				v = p.a.wrapped(i.l, "SecondaryButton", m.a),
				_ = p.a.div("ButtonWrapper", m.a),
				x = p.a.textarea("TextArea", m.a),
				y = p.a.h3("SectionLabel", m.a),
				C = p.a.p("H", m.a),
				j = p.a.p("P", m.a),
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
						return o.a.createElement(d.k, null, o.a.createElement(C, null, r.fbt._("Sorry to see you go!", null, {
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
						}, S[e] && S[e]()))))), o.a.createElement(y, null, r.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), o.a.createElement(x, {
							placeholder: r.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), o.a.createElement(y, null, r.fbt._("account credentials for security purposes", null, {
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
					}), this.renderPremiumNotification = () => o.a.createElement(d.k, null, o.a.createElement(C, null, r.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), o.a.createElement(j, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					}, r.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => o.a.createElement(d.k, null, o.a.createElement(C, null, r.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
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
					}, o.a.createElement(d.b, null)), o.a.createElement(d.h, null, o.a.createElement(h, null, r.fbt._("Feed settings", null, {
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
				return s
			})), n.d(t, "b", (function() {
				return o
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/moment/moment.js"),
				a = n.n(o),
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
				x = n("./src/reddit/actions/gold/powerups.ts"),
				y = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				C = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				j = n("./src/reddit/controls/TextButton/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var k = Object(_.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: r,
						subredditInfo: s
					} = e, o = Object(l.d)();
					return c.a.createElement(C.d, {
						className: t
					}, c.a.createElement(C.h, null, c.a.createElement(E.a, null, c.a.createElement(C.p, null, w._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), c.a.createElement(j.a, {
						onClick: r
					}, c.a.createElement(C.b, null)))), c.a.createElement(C.k, null, c.a.createElement(C.o, null, w._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [w._param("subreddit name", s.prefixedName)], {
						hk: "2EKYNO"
					}))), c.a.createElement(C.f, null, c.a.createElement(C.q, {
						onClick: () => {
							n.isPremium ? o(Object(x.f)(s.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : o(Object(y.a)(n.id, s.id, n.allocatedAt)), r()
						},
						"data-redditstyle": !0
					}, w._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				O = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				S = n.n(O);

			function I(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var P = function(e) {
					const [t, n] = Object(i.useState)(!1), {
						className: r,
						allocation: o
					} = e, {
						allocatedAt: a,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: h
					} = o, f = I(b), _ = I(a), x = I(l), {
						prefixedName: y
					} = p, C = _ ? s.fbt._("Subscribed {date}.", [s.fbt._param("date", _)], {
						hk: "24RAUK"
					}) : "", j = x ? s.fbt._("You can cancel after {date}.", [s.fbt._param("date", x)], {
						hk: "48A2TC"
					}) : "", E = f ? s.fbt._("Will be renewed on {date}.", [s.fbt._param("date", f)], {
						hk: "2kYkAv"
					}) : "", w = f ? s.fbt._("Still active until {date}.", [s.fbt._param("date", f)], {
						hk: "IZweZ"
					}) : "", O = m ? u ? C : `${C} ${j}` : d ? `${C} ${E}` : `${C} ${w}`, P = m ? s.fbt._("{powerups count} Reddit Premium powerup/monthly", [s.fbt._param("powerups count", h.toLocaleString())], {
						hk: "4iP1Np"
					}) : s.fbt._("{powerups count} powerup/monthly", [s.fbt._param("powerups count", h.toLocaleString())], {
						hk: "11DNVJ"
					}), N = m && u || !m && d;
					return c.a.createElement("div", {
						className: Object(g.a)(r, S.a.container),
						title: O
					}, c.a.createElement("div", {
						className: S.a.allocationName
					}, s.fbt._("{subreddit name} Powerup", [s.fbt._param("subreddit name", y)], {
						hk: "4qAoO"
					})), c.a.createElement("div", {
						className: S.a.details
					}, P), c.a.createElement(v.o, {
						className: S.a.button,
						disabled: !N,
						onClick: () => n(!0)
					}, m || N ? s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : s.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && c.a.createElement(k, {
						withOverlay: !0,
						allocation: o,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				N = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				A = n.n(N);
			var T = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement("div", {
						className: A.a.title
					}, s.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => c.a.createElement(P, {
						allocation: e,
						className: A.a.allocation,
						key: e.allocatedAt
					})))
				},
				L = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				M = n.n(L);

			function B(e) {
				return c.a.createElement("header", {
					className: Object(g.a)(e.className, M.a.container)
				}, c.a.createElement("div", {
					className: M.a.title
				}, s.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), c.a.createElement("div", {
					className: M.a.subtitle
				}, s.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var R = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				U = n.n(R);
			const D = Object(u.c)({
				allocationByKey: f.u
			});
			var F = Object(l.b)(D)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? c.a.createElement("div", {
						className: e.className
					}, c.a.createElement(B, {
						className: U.a.header
					}), c.a.createElement(T, {
						allocationList: n
					})) : null
				})),
				H = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				W = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				q = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				z = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				G = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/higherOrderComponents/makeAsync.tsx"),
				Y = n("./src/lib/loadWithRetries/index.ts"),
				J = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var V = Object(K.a)({
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
			const re = "https://www.paypal.com/myaccount/autopay",
				se = "update_card_modal_id",
				oe = Object(u.c)({
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
					updateCardModalIsOpen: Object(Q.b)(se)
				}),
				ae = Object(l.b)(oe, e => ({
					navigateToPurchasePremium: () => e(Object(d.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(b.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(b.i)(se)),
					requestProductOfferSubscriptions: () => e(Object(p.b)()),
					requestCancelProductOfferSubscription: t => e(Object(p.a)(t))
				})),
				ie = (e, t, n) => e && !n ? s.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [s.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : s.fbt._("Your Premium membership is valid until {date}.", [s.fbt._param("date", t)], {
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
						premiumProductOfferSubscription: s,
						requestCancelProductOfferSubscription: o,
						toggleCancelSubscriptionModal: a,
						requestProductOfferSubscriptions: i
					} = this.props;
					if (e) window.location.href = re;
					else if (t)
						if (n && (null == s ? void 0 : s.id)) {
							await o(s.id) && (a(), i())
						} else window.location.href = `${r.a.redditUrl}/gold/subscription`
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: n,
						hasIOSSubscription: r,
						hasPaypalSubscription: o,
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
							hideAds: x
						}
					} = this.props, y = n || r, C = u ? Boolean(p) : d, j = u ? a()(null == p ? void 0 : p.expiresAt).format("MMMM DD, YYYY.") : Object(m.a)(t || 0, !0);
					return c.a.createElement(W.a, null, c.a.createElement(H.b, {
						className: ne.a.premiumHeading,
						isResponsiveSettingsEnabled: f
					}, s.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), c.a.createElement(H.a, {
						className: ne.a.premiumExpirationString
					}, s.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), c.a.createElement(q.a, null, s.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), c.a.createElement(H.a, {
						className: ne.a.premiumExpirationString
					}, l ? ie(C, j, b) : s.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!C || b) && c.a.createElement(z.f, {
						label: l ? s.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : s.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), i && c.a.createElement(z.a, {
						label: s.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: g
					}), o && c.a.createElement(z.f, {
						label: s.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), d && !y && !b && c.a.createElement(z.a, {
						label: s.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), l && c.a.createElement(c.a.Fragment, null, c.a.createElement(q.a, null, s.fbt._("premium features", null, {
						hk: "20MX2a"
					})), c.a.createElement(z.o, {
						on: x,
						disabled: !l,
						onClick: this.onHideAdsToggle,
						label: s.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: s.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), c.a.createElement(z.o, {
						on: _,
						disabled: !l,
						onClick: this.onHighlightCommentsToggle,
						label: s.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: s.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), v && c.a.createElement(V, null), e && c.a.createElement(h.a, {
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
					}), c.a.createElement(F, null))
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
				return z
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "n", (function() {
				return Q
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
				return je
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return we
			})), n.d(t, "e", (function() {
				return ke
			})), n.d(t, "g", (function() {
				return Oe
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
				x = n.n(_);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = g.a.span("Wrapper", x.a),
				j = g.a.select("Inner", x.a),
				E = g.a.wrapped(v.b, "Caret", x.a);

			function w({
				className: e,
				innerClassName: t,
				...n
			}) {
				const r = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return s.a.createElement(C, {
					className: e
				}, s.a.createElement(j, y({
					className: t
				}, n)), s.a.createElement(E, y({
					isSubreddit: !0
				}, r)))
			}
			var k = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				P = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				N = n("./node_modules/lodash/range.js"),
				A = n.n(N),
				T = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/layout/row/Inline/index.tsx"),
				M = n("./src/reddit/models/Flair/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				D = n.n(U);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(d.a)(b.a),
				W = g.a.wrapped(I.a, "Circle", D.a),
				q = g.a.h3("Label", D.a),
				z = g.a.wrapped(O.c, "Subtext", D.a),
				G = g.a.wrapped(m.a, "HoverTooltip", D.a),
				K = g.a.div("ControlContainer", D.a),
				Y = g.a.div("TextContainer", D.a),
				J = g.a.div("ActionContainer", D.a),
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
				}) => s.a.createElement("div", F({}, d, {
					className: Object(c.a)(D.a.Wrapper, e, {
						[D.a.mColumn]: "column" === t,
						[D.a.mDisabled]: !!a,
						[D.a.mIndent]: !!i,
						[D.a.mLast]: !!l,
						[D.a.isCreateCommunity]: !!n,
						[D.a.inModal]: !!r,
						[D.a.isNightModeOn]: !!o
					})
				})),
				Z = g.a.a("Link", D.a),
				Q = g.a.wrapped(Z, "SubtextLink", D.a),
				X = g.a.wrapped(P.a, "LinkIcon", D.a),
				$ = g.a.button("LinkButton", D.a),
				ee = g.a.wrapped(S.a, "ArrowRight", D.a),
				te = e => s.a.createElement(V, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(Y, {
					className: e.textContainerClassName
				}, s.a.createElement(q, null, e.label, e.isRequired && s.a.createElement(W, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, e.children)),
				ne = g.a.div("StyledFlair", D.a),
				re = g.a.wrapped(ne, "SpoilerFlair", D.a),
				se = g.a.wrapped(ne, "NSFWFlair", D.a),
				oe = e => {
					switch (e.flair) {
						case M.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case M.f.Spoiler:
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
					}, s.a.createElement(Y, null, s.a.createElement(L.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(q, null, e.label))), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(K, null, e.tooltip && s.a.createElement(G, {
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
				ce = g.a.div("RangeSlider", D.a),
				le = g.a.div("Ticks", D.a),
				de = g.a.div("TickText", D.a),
				ue = g.a.div("PreSubText", D.a),
				me = Object(i.c)({
					isNightModeOn: R.V
				}),
				pe = Object(o.b)(me)(e => s.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, s.a.createElement(Y, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(L.a, null, s.a.createElement(q, null, e.label)), s.a.createElement(z, null, " ", s.a.createElement(ue, {
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
					onInput: e.onChange
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
				}, s.a.createElement(Y, null, s.a.createElement(L.a, null, s.a.createElement(q, null, e.label)), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(K, null, s.a.createElement(T.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => s.a.createElement(V, {
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
				fe = e => s.a.createElement(V, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement($, {
					onClick: e.onClick
				}, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, s.a.createElement($, {
					onClick: e.onClick
				}, s.a.createElement(ee, null)))),
				ge = g.a.div("DropdownWrapper", D.a),
				ve = g.a.wrapped(h.b, "DropdownRow", D.a),
				_e = g.a.span("Row", D.a),
				xe = g.a.wrapped(v.b, "DropdownTriangle", D.a),
				ye = g.a.div("DescriptionsRow", D.a),
				Ce = Object(i.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				je = Object(o.b)(Ce, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(q, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, (e => s.a.createElement(ge, {
					onClick: e.openDropdown
				}, s.a.createElement(_e, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(xe, null), s.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => s.a.createElement(ve, {
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && s.a.createElement(ye, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				Ee = ({
					disabled: e,
					last: t,
					onChange: n,
					...o
				}) => {
					const a = Object(r.useCallback)(e => n(e.target.value), [n]),
						{
							items: i
						} = o;
					return s.a.createElement(V, {
						disabled: e
					}, s.a.createElement(Y, null, s.a.createElement(q, null, o.label), s.a.createElement(z, null, o.subtext)), s.a.createElement("div", {
						className: D.a.Wrapper__LineBreak
					}), s.a.createElement(V, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(w, {
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: a,
						value: o.selected
					}, Object.keys(i).map(e => s.a.createElement("option", {
						key: e,
						value: e
					}, i[e].displayName)))))
				},
				we = e => s.a.createElement(V, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement(q, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(J, null, e.children)),
				ke = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, s.a.createElement(f.a, {
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
				Oe = e => s.a.createElement(te, {
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
				}), e.warning && e.warning, !!e.actionLink && s.a.createElement("div", {
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
			}))), x = a.a.label("Label", m.a);
			t.b = e => s.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(x, {
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
				return x
			})), n.d(t, "j", (function() {
				return y
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
				x = r.a.div("FormElementSubGroup", o.a),
				y = r.a.li("FormListItem", o.a)
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
				return h
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
			const m = ({
					border: e,
					small: t,
					...n
				}) => o.a.createElement(a.q, u({}, n, {
					priority: e ? a.b.Primary : a.b.Plain,
					className: Object(d.a)(n.className, l.a.BaseButton),
					size: t ? a.c.S : a.c.M
				})),
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
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
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...r
				}) => o.a.createElement(a.q, u({}, r, {
					priority: t ? a.b.Secondary : a.b.Plain,
					className: Object(d.a)(r.className, l.a.BaseButton),
					size: n ? a.c.S : a.c.M,
					text: p(e)
				}));
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						small: r = !1,
						isFullWidth: s = !1
					} = this.props, a = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: s
					};
					return this.props.userIsSubscriber ? o.a.createElement(b, u({}, a, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(m, u({}, a, {
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
				return C
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
				x = d.a.div("TabNavContainer", f.a),
				y = d.a.div("Tabs", f.a),
				C = d.a.wrapped(({
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
				j = e => {
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
					zIndex: m.g
				};
			class O extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? E() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : E() >= w && this.setState({
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
					} = this.props, r = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return i.a.createElement(x, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(_, {
						className: Object(c.a)(r, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, j(this.props.icon), this.props.title), i.a.createElement(y, {
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
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: a.gb
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
					[s.R.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.R.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.R.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.R.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.R.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.R.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.R.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[s.Yb.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.Yb.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.Yb.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.Yb.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.Yb.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.Yb.ALL]: () => r.fbt._("All Time", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: n,
						disabled: r,
						redditStyle: a,
						"data-redditstyle": i,
						...c
					} = t, l = ((e, t, n) => {
						const r = !(!t && !n);
						let s = "";
						return s = e ? r ? d.a.mDisabledRedditStyle : d.a.mDisabled : r ? d.a.mActiveRedditStyle : d.a.mActive
					})(r, a, i);
					return s.a.createElement(e, u({
						className: Object(o.a)(d.a.CheckboxIcon, l, n)
					}, c))
				},
				p = m(c.a),
				b = m(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? p : a.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(o.a)(d.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(o.a)(d.a.CheckboxSizing, e.className),
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(s),
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
			var x = Object(h.a)(e => {
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
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = n("./src/reddit/controls/ErrorText/index.m.less"),
				C = n.n(y);
			const j = Object(u.c)({
				activeModalId: b.a
			});
			class E extends l.a.Component {
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
						errorModalBody: s,
						errorModalTitle: o = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = r.fbt._("More", null, {
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
					}, a), t === i && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: o
					}, s || e))
				}
			}
			const w = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(E),
				k = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: o = []
					} = e, a = o.length ? o : s ? [s] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(w, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(k, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
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
					}), !o && s.a.createElement("input", {
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
				}
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
				return x
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "c", (function() {
				return j
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
				o = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				a = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				i = n("./src/graphql/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/graphql/operations/ConfirmStripePaymentSavedCard.json"),
				l = n("./src/graphql/operations/CreateEconOrder.json"),
				d = n("./src/graphql/operations/CreatePaypalPayment.json"),
				u = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				m = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				b = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				h = n("./src/graphql/operations/UserSavedStripeCards.json"),
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
				x = (e, t, n, r) => Object(f.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				y = (e, t, n, r) => Object(f.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						cardId: r
					}
				}),
				C = (e, t, n, r, s) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: s
					}
				}),
				j = (e, t, n, r) => Object(f.a)(e, {
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
					method: s.eb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function l(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function g(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
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
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "|downsized";

			function a(e, t) {
				return s + e + (t ? o : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(s)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function l(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function d(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...d(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return d(e, r.F).map(e => e.id)
			}

			function m(e) {
				return d(e, e => e.e === r.o).map(e => e.u)
			}
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
				return x
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
				x = e => t => ({
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
						type: Object(s.s)(e) ? o.GoldPurchaseType.Cancel : o.GoldPurchaseType.GetPremium
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return s.a.createElement("i", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const d = c.a.wrapped(e => {
				const t = Object(l.a)();
				return s.a.createElement("i", {
					className: `${Object(o.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(o.a, null, e.desc))
			}, "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Info/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
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
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), s.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, s.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, s.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, s.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
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
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, s.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", null, "Hot"), s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o(e) {
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
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
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
			var r, s, o;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
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
				x = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/actions/users.ts"),
				C = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				j = n("./src/reddit/components/ConfirmModal/index.tsx"),
				E = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				w = n("./src/reddit/actions/meta.ts"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				S = n("./src/reddit/selectors/sso.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				P = n("./src/lib/validateEmail/index.ts"),
				N = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				T = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				L = n("./src/reddit/icons/svgs/Info/index.tsx"),
				M = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				B = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/models/User/index.ts"),
				U = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				D = n.n(U);
			const F = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(I.i)(e);
						return t && Object(R.e)(t) || ""
					}
				}),
				H = Object(a.b)(F, e => ({
					changeEmail: t => e(Object(y.t)(t)),
					sendResetEmail: t => e(Object(y.w)(t)),
					showErrorToast: t => e(Object(N.f)({
						duration: N.a,
						kind: B.b.Error,
						text: t
					}))
				})),
				W = e => e ? o.a.createElement(T.a, {
					className: Object(u.a)(D.a.image, D.a.success)
				}) : o.a.createElement(M.a, {
					className: Object(u.a)(D.a.image, D.a.error)
				}),
				q = e => e ? r.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : r.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				z = e => e ? r.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : r.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				G = e => e ? r.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : r.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				K = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? o.a.createElement(L.a, {
						className: Object(u.a)(D.a.inputIcon, D.a.error)
					}) : o.a.createElement(T.a, {
						className: Object(u.a)(D.a.inputIcon, D.a.success)
					}) : null
				};
			class Y extends o.a.Component {
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
						} = this.state, o = Object(P.a)(s, !1), a = o ? "" : r.fbt._("Please fix your email to continue.", null, {
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
						className: D.a.container
					}, o.a.createElement("h3", {
						className: D.a.header
					}, r.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), o.a.createElement("div", {
						className: D.a.status
					}, W(e), o.a.createElement("h3", {
						className: D.a.statusText
					}, z(e))), o.a.createElement("p", {
						className: D.a.description
					}, q(e)), o.a.createElement("div", {
						className: D.a.actionContainer
					}, o.a.createElement("div", {
						className: D.a.emailContainer
					}, s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(A.a, {
						className: Object(u.a)(D.a.input, D.a[a]),
						label: r.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), K(this.state), o.a.createElement("h6", {
						className: D.a.errorMsg
					}, n)) : o.a.createElement("p", {
						className: D.a.emailText
					}, G(e), o.a.createElement("span", {
						className: D.a.emailAddress
					}, t))), o.a.createElement(k.i, {
						className: D.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? r.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : r.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var J = H(Y),
				V = n("./src/reddit/components/Settings/modalIds.ts"),
				Z = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				X = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				$ = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const ee = Object.freeze({
					[X.DEFAULT_LOCALE]: Object.freeze({
						bcp47: X.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(X.DEFAULT_LOCALE),
						rtl: !1
					}),
					[X.GERMAN_LOCALE]: Object.freeze({
						bcp47: X.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(X.GERMAN_LOCALE),
						rtl: !1
					})
				}),
				te = Object.freeze({
					"es-ES": Object.freeze({
						bcp47: "es-ES",
						displayName: "Español",
						englishName: "Spanish",
						fbtLocale: Object(E.isoLocaleToFbtLocale)("es-ES"),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(E.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					"it-IT": Object.freeze({
						bcp47: "it-IT",
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(E.isoLocaleToFbtLocale)("it-IT"),
						rtl: !1
					}),
					"pt-PT": Object.freeze({
						bcp47: "pt-PT",
						displayName: "Português",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)("pt-PT"),
						rtl: !1
					}),
					[X.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: X.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(X.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					})
				}),
				ne = Object.freeze({
					[X.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(X.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[X.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(X.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[X.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(E.isoLocaleToFbtLocale)(X.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				re = Object(c.a)(I.G, $.b, (e, t) => e || t ? {
					...ee,
					...te,
					...ne
				} : ee);
			var se = n("./src/reddit/selectors/meta.ts"),
				oe = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				ae = n.n(oe);
			const ie = Object(c.c)({
					hasVerifiedEmail: I.z,
					isFPR: I.H,
					language: I.T,
					shouldShowCreatePasswordModal: S.d,
					showLanguageSection: O.d.langSelect,
					availableLocales: re,
					locale: se.i
				}),
				ce = Object(a.b)(ie, e => ({
					changeLanguage: t => e(Object(w.d)(t)),
					openChangeEmailModal: () => e(Object(x.i)(V.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(x.h)(V.l)),
					resendEmail: () => e(Object(y.v)())
				})),
				le = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : o.a.createElement(o.a.Fragment, null, r.fbt._("{email} not verified!", [r.fbt._param("email", e)], {
					hk: "3PanQN"
				}), o.a.createElement(k.g, {
					className: ae.a.tertiaryBtn,
					onClick: n
				}, r.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : r.fbt._("Missing email, please update to secure your account", null, {
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
					const [b, h] = Object(s.useState)(!1), f = Object(s.useCallback)(async t => {
						h(!0), await e(t), h(!1)
					}, [e]), [g, v] = Object(s.useState)(u);
					Object(s.useEffect)(() => {
						"" !== n && Object.keys(u).find(e => m) || v(e => ({
							...e,
							[n]: Object.freeze({
								bcp47: n,
								displayName: n,
								englishName: n,
								fbtLocale: Object(E.isoLocaleToFbtLocale)(n),
								rtl: !1
							})
						}))
					}, [u, n, m]);
					return t ? o.a.createElement(J, {
						email: p.email
					}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.a, null, r.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), o.a.createElement(Q.b, {
						actionText: r.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: r.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							c ? i() : a()
						},
						subtext: le(p)
					}), !c && o.a.createElement(Q.b, {
						actionText: r.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: r.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !0,
						onClick: d,
						subtext: r.fbt._("Password must be at least 6 characters long", null, {
							hk: "24bAMu"
						})
					}), l ? o.a.createElement(Q.h, {
						inputDisabled: b,
						id: "lang",
						items: g,
						label: r.fbt._("Display language", null, {
							hk: "3roQUD"
						}),
						onChange: f,
						selected: m,
						subtext: r.fbt._("Select your preferred language for buttons and other text from Reddit. This does not change the language of user generated content. Note: This feature is in alpha testing and will likely change.", null, {
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
				xe = n("./src/config.ts"),
				ye = n("./src/reddit/helpers/trackers/sso.ts"),
				Ce = n("./src/reddit/hooks/useTracking.ts"),
				je = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				Ee = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				we = n.n(Ee),
				ke = n("./src/lib/lessComponent.tsx");
			const Oe = ke.a.wrapped(Q.c, "ConnectApple", we.a),
				Se = ke.a.wrapped(k.i, "ConnectAppleButton", we.a),
				Ie = ke.a.div("ConnectionInfo", we.a),
				Pe = ke.a.wrapped(k.m, "DisconnectButton", we.a),
				Ne = ke.a.wrapped(je.a, "AppleIcon", we.a),
				Ae = ke.a.span("TextAndIconWrapper", we.a);

			function Te(e) {
				return e.issuerId ? (() => o.a.createElement(Q.c, {
					label: r.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, o.a.createElement(Ie, null, o.a.createElement(Pe, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[we.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(Oe, {
						className: t,
						label: r.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, o.a.createElement(Se, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(Ae, null, o.a.createElement(Ne, null), r.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const Le = Object(c.c)({
				issuerId: S.a,
				shouldShowCreatePasswordModal: S.d
			});
			var Me = Object(a.b)(Le, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(x.h)(V.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(x.h)(V.j)),
					openLinkAppleSSOModal: () => e(Object(_.f)()),
					openUnlinkAppleSSOModal: () => e(Object(_.k)())
				}))(e => {
					const t = Object(Ce.a)();
					return o.a.createElement(Te, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(ye.c)(ye.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(ye.d)(ye.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				Be = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const Re = ke.a.wrapped(Q.c, "ConnectGoogle", we.a),
				Ue = ke.a.wrapped(k.i, "ConnectGoogleButton", we.a),
				De = ke.a.div("ConnectionInfo", we.a),
				Fe = ke.a.wrapped(k.m, "DisconnectButton", we.a),
				He = ke.a.wrapped(Be.a, "GoogleIcon", we.a),
				We = ke.a.span("TextAndIconWrapper", we.a);

			function qe(e) {
				return e.hasGoogleIdentity ? (() => o.a.createElement(Q.c, {
					label: r.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, o.a.createElement(De, null, o.a.createElement(Fe, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[we.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(Re, {
						className: t,
						label: r.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, o.a.createElement(Ue, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(We, null, o.a.createElement(He, null), r.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const ze = Object(c.c)({
				hasGoogleIdentity: S.b,
				shouldShowCreatePasswordModal: S.d
			});
			var Ge = Object(a.b)(ze, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(x.h)(V.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(x.h)(V.n)),
					openLinkGoogleSSOModal: () => e(Object(_.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.l)())
				}))(e => {
					const t = Object(Ce.a)();
					return o.a.createElement(qe, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(ye.c)(ye.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(ye.d)(ye.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				Ke = n("./src/reddit/actions/externalAccount.ts"),
				Ye = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Je = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Ve = n("./src/reddit/models/ExternalAccount/index.ts");
			const Ze = ke.a.wrapped(Je.a, "TwitterIcon", we.a),
				Qe = ({
					isFilled: e,
					...t
				}) => o.a.createElement(Ze, t),
				Xe = ke.a.wrapped(Ye.a, "LoadingIcon", we.a),
				$e = ({
					isFilled: e,
					...t
				}) => o.a.createElement(Xe, t),
				et = ke.a.wrapped(Q.c, "ConnectTwitter", we.a),
				tt = ke.a.wrapped(k.m, "DisconnectButton", we.a),
				nt = ke.a.span("Username", we.a),
				rt = ke.a.div("ConnectionInfo", we.a);
			var st = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				ot = n("./src/reddit/selectors/externalAccount.ts");
			const at = Object(c.c)({
					twitterAccount: ot.a,
					isTwitterConnectionPending: ot.b
				}),
				it = Object(a.b)(at, e => ({
					onConnectAccount: t => {
						e(Ke.m(t)), t === Ve.a.Twitter && e((e, t) => st.b(t()))
					},
					onDisconnectAccount: t => {
						e(Ke.n(t)), t === Ve.a.Twitter && e((e, t) => st.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => st.e(n(), t))
				}));
			var ct = Object(he.t)()(it((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Ve.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Ve.a.Twitter)
					};
				return o.a.createElement(s.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return o.a.createElement(Q.c, {
						label: r.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: r.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, o.a.createElement(rt, null, o.a.createElement("div", null, o.a.createElement(nt, null, "@", t.username)), o.a.createElement(tt, {
						onClick: n
					}, "(", r.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: s
					} = e, a = Object(u.a)({
						[we.a["m-responsive"]]: n
					}), i = r.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return o.a.createElement(et, {
						className: a,
						label: r.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: r.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, o.a.createElement(k.q, {
						className: we.a.ConnectTwitterButton,
						Icon: s ? $e : Qe,
						text: s ? null : i,
						onClick: t
					}))
				})(), o.a.createElement(Q.o, {
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
			var lt = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return o.a.createElement(s.Fragment, null, o.a.createElement(Z.a, {
					id: "connected-accounts"
				}, r.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), o.a.createElement(ct, e), (() => {
					if (e.shouldRenderSSOAccounts) return o.a.createElement(s.Fragment, null, o.a.createElement(Me, {
						isResponsiveSettingsEnabled: t
					}), o.a.createElement(Ge, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function dt() {
				return (dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ut = Object(c.c)({
				isEmployee: I.G
			});
			var mt = Object(a.b)(ut)(e => {
					const t = !e.isEmployee;
					return o.a.createElement(lt, dt({
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
				xt = ke.a.button("DeactivateButton", ht.a),
				yt = ke.a.div("DeactivateWrapper", ht.a),
				Ct = Object(c.c)({
					changePasswordHref: (e, t) => Object(ge.c)(e, {
						pageLayer: t.pageLayer,
						path: be.c.ChangePassword
					}),
					deactivateModalOpen: Object(ve.b)("deactivate_modal_id"),
					email: I.l,
					hasGoogleIdentity: S.b,
					inRedesignBeta: I.D,
					optoutModalOpen: Object(ve.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: S.d,
					user: I.i
				}),
				jt = Object(a.b)(Ct, (e, t) => ({
					deactivate: t => {
						e(Object(y.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(x.h)(V.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: xe.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${xe.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(y.v)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(x.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(x.i)("settins_optout_modal_id"))
				}));
			class Et extends o.a.Component {
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
						[ht.a["m-responsive"]]: a
					}), v = Object(u.a)({
						[ht.a.ResponsiveOverlay]: a
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(pe.a, null, o.a.createElement(me.b, {
						isResponsiveSettingsEnabled: a
					}, r.fbt._("Account settings", null, {
						hk: "2faClM"
					})), o.a.createElement(de, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), o.a.createElement(mt, this.props), o.a.createElement(gt, {
						className: g
					}, r.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), o.a.createElement(vt, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: r.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: r.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), o.a.createElement(_t, {
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
					}), o.a.createElement(Z.a, null, r.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), o.a.createElement(yt, null, o.a.createElement(xt, {
						onClick: this.deactivateAccount
					}, o.a.createElement(ft, null), r.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && o.a.createElement(j.a, {
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
					}), e && o.a.createElement(pt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && o.a.createElement(ue.a, {
						isResponsiveSettingsEnabled: a
					})), n && o.a.createElement(C.a, {
						className: ht.a.googleDisconnectIFrame,
						pageLayer: l,
						path: be.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var wt = Object(he.t)()(jt(Et)),
				kt = n("./src/reddit/reducers/user/prefs/index.ts"),
				Ot = n("./src/reddit/actions/chat/constants.ts"),
				St = n("./src/reddit/actions/chat/userSettings.ts"),
				It = n("./src/reddit/actions/userBlocks.ts"),
				Pt = n("./src/reddit/actions/userWhitelist.ts"),
				Nt = n("./src/lib/timeAgo/index.ts"),
				At = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Tt = n("./src/reddit/components/Hovercards/helpers.ts"),
				Lt = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Mt = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				Bt = n.n(Mt);
			const Rt = ke.a.p("Date", Bt.a),
				Ut = ke.a.wrapped(Lt.a, "UserNameAndIcon", Bt.a),
				Dt = ke.a.button("Button", Bt.a),
				Ft = ke.a.div("ButtonWrapper", Bt.a);
			var Ht = ke.a.wrapped(e => o.a.createElement("div", {
					className: e.className
				}, o.a.createElement(Ut, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(Tt.b)({
						author: e.name,
						tooltipIdPrefix: At.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), o.a.createElement(Rt, null, Object(Nt.d)(e.date / 1e3)), o.a.createElement(Ft, null, o.a.createElement(Dt, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", Bt.a),
				Wt = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				qt = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				zt = n.n(qt);
			const Gt = 5,
				Kt = ke.a.h4("ListHeading", zt.a),
				Yt = ke.a.div("ListBox", zt.a),
				Jt = ke.a.div("MoreWrapper", zt.a),
				Vt = ke.a.button("MoreButton", zt.a),
				Zt = ke.a.wrapped(Q.m, "Subtext", zt.a);
			class Qt extends o.a.Component {
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
						className: Object(u.a)(zt.a.container, n, {
							[zt.a.mPadBottom]: !!i
						})
					}, o.a.createElement(Kt, null, m), void 0 !== p && o.a.createElement(Zt, null, p), o.a.createElement(A.a, {
						buttonText: r.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: s.new === Wt.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), o.a.createElement(Yt, null, l.slice(0, b).map(e => o.a.createElement(Ht, {
						disabled: s[e.name] === Wt.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Gt && !e ? o.a.createElement(Jt, null, o.a.createElement(Vt, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var Xt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				$t = n.n(Xt);
			const en = {
					[kt.b.Whitelisted]: () => r.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[kt.b.Everyone]: () => r.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				tn = e => {
					const t = en[e];
					return t && t()
				},
				nn = ke.a.div("ListsWrapper", $t.a),
				rn = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var sn = Object(a.b)(rn, (e, t) => ({
					addBlocked: t => e(Object(It.h)(t)),
					addWhitelisted: t => e(Object(Pt.g)(t)),
					removeWhitelisted: t => e(Object(Pt.h)(t)),
					removeBlocked: t => e(Object(It.g)(t)),
					saveChatSettings: t => e(Object(St.c)(t))
				}))(({
					addWhitelisted: e,
					chatSettings: t,
					prefs: {
						acceptPrivateMessages: n
					},
					removeWhitelisted: s,
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
					return o.a.createElement(pe.a, null, o.a.createElement(me.b, {
						isResponsiveSettingsEnabled: !1
					}, r.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), o.a.createElement(Q.d, {
						label: r.fbt._("Who can send you chat requests", null, {
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
					}), o.a.createElement(Q.d, {
						label: r.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: r.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not approved.", null, {
							hk: "48t4Ee"
						}),
						items: f,
						displayItems: g,
						selected: h,
						displayTitle: b,
						onClick: e => i(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (t.invitePolicy !== Ot.a.anybody || n === kt.b.Whitelisted) && o.a.createElement(nn, null, o.a.createElement(Qt, {
						title: r.fbt._("Approved Users", null, {
							hk: "U0YhB"
						}),
						subtext: r.fbt._("Approved users can always send you private messages.", null, {
							hk: "1Wr1CF"
						}),
						label: r.fbt._("Add new user to approved list", null, {
							hk: "TP2Sh"
						}),
						add: e,
						remove: s,
						list: c,
						api: l
					})))
				}),
				on = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				an = n.n(on);

			function cn(e) {
				return o.a.createElement("header", {
					className: Object(u.a)(an.a.container, e.className)
				}, o.a.createElement("div", {
					className: an.a.title
				}, r.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), o.a.createElement("div", {
					className: an.a.tag
				}, r.fbt._("alpha", null, {
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
			class _n extends o.a.Component {
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
					})), o.a.createElement("div", {
						className: e
					}, o.a.createElement(Z.a, null, gn._("accept tips", null, {
						hk: "1kEl0R"
					})), o.a.createElement(Q.k, {
						direction: "row",
						label: gn._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: gn._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, o.a.createElement("div", {
						className: fn.a.cta
					}, o.a.createElement(k.i, {
						className: fn.a.button,
						disabled: t !== vn.Default,
						onClick: this.initiateStripeConnect
					}, n), o.a.createElement("div", {
						className: fn.a.legal
					}, gn._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [gn._param("Previews Terms of Service", o.a.createElement(ln.a, {
						className: fn.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), o.a.createElement("div", {
						className: fn.a.disclaimer
					}, o.a.createElement(pn.a, {
						className: fn.a.icon
					}), gn._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const xn = Object(c.c)({
					stripeConnected: bn.u
				}),
				yn = Object(a.b)(xn, e => ({
					onError: t => e(Object(N.f)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(mn.a)(t)
					}))
				}));
			var Cn = Object(dn.b)(yn(_n)),
				jn = n("./src/reddit/components/Settings/Creator/index.m.less"),
				En = n.n(jn);

			function wn(e) {
				return o.a.createElement(pe.a, null, o.a.createElement("div", null, o.a.createElement(cn, {
					className: En.a.header
				}), o.a.createElement(Cn, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var kn = n("./src/lib/listingSort/index.ts"),
				On = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				Sn = n("./src/higherOrderComponents/asTooltip.tsx"),
				In = n("./src/reddit/actions/tooltip.ts"),
				Pn = n("./src/reddit/controls/Dropdown/index.tsx"),
				Nn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				An = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Tn = n("./src/reddit/selectors/tooltip.ts"),
				Ln = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				Mn = n.n(Ln);
			const Bn = Object(Sn.a)(Pn.a),
				Rn = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Tn.b)(t.dropdownId)(e)
				});
			class Un extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => o.a.createElement(Nn.b, {
						children: e.contentJsx || e.icon,
						className: Mn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => o.a.createElement(Nn.b, {
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
						renderItem: r = this.renderDropdownItem,
						selectedKey: s
					} = this.props, a = t.find(e => e.key === s) || t[0];
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(Mn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, o.a.createElement("div", {
						className: Mn.a.labelWrapper
					}, n(a), o.a.createElement(An.b, null)), o.a.createElement(Bn, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => r(e, s === e.key))))
				}
			}
			var Dn = Object(a.b)(Rn, (e, t) => ({
					openDropdown: () => {
						e(Object(In.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Un),
				Fn = n("./src/reddit/constants/listingSorts.ts");
			const Hn = [m.R.HOT, m.R.NEW, m.R.TOP, m.R.RISING];
			var Wn = e => {
				const {
					dropdownId: t
				} = e, n = Hn.map(e => ({
					key: e,
					displayText: Object(Fn.a)(e),
					icon: o.a.createElement(On.a, {
						sort: e
					})
				}));
				return o.a.createElement(Dn, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const qn = [m.Yb.HOUR, m.Yb.DAY, m.Yb.WEEK, m.Yb.MONTH, m.Yb.YEAR, m.Yb.ALL];
			var zn = e => {
					const {
						dropdownId: t
					} = e, n = qn.map(e => ({
						key: e,
						displayText: Object(Fn.b)(e)
					}));
					return o.a.createElement(Dn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				Gn = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				Kn = n.n(Gn);
			const Yn = ke.a.div("Separator", Kn.a);
			class Jn extends o.a.PureComponent {
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
						sort: s,
						timeSort: a
					} = Object(kn.d)(t);
					return o.a.createElement(Q.c, {
						className: e,
						label: r.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: r.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, o.a.createElement("div", {
						className: Kn.a.wrapper
					}, o.a.createElement(Wn, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: s
					}), a && o.a.createElement(o.a.Fragment, null, o.a.createElement(Yn, null), o.a.createElement(zn, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: a
					}))))
				}
			}
			var Vn = n("./src/reddit/constants/postLayout.ts"),
				Zn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				Qn = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Xn = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				$n = n("./src/reddit/controls/Dropdown/index.m.less"),
				er = n.n($n);
			const tr = {
				[Vn.d.Card]: Xn.a,
				[Vn.d.Classic]: Zn.a,
				[Vn.d.Compact]: Qn.a
			};

			function nr(e) {
				const t = tr[e.layout];
				return o.a.createElement(t, {
					className: er.a.iconStyles
				})
			}
			const rr = [Vn.d.Card, Vn.d.Classic, Vn.d.Compact];
			var sr = e => {
					const {
						dropdownId: t
					} = e, n = rr.map(e => ({
						key: e,
						displayText: Object(Vn.h)(e),
						icon: o.a.createElement(nr, {
							layout: e
						})
					}));
					return o.a.createElement(Dn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				or = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				ar = n.n(or);
			class ir extends o.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: r,
						layout: s
					} = this.props;
					return o.a.createElement(Q.c, {
						className: e,
						label: n,
						subtext: r
					}, o.a.createElement("div", {
						className: ar.a.wrapper
					}, o.a.createElement(sr, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: s
					})))
				}
			}
			var cr = n("./src/reddit/components/Settings/FeedForm.m.less"),
				lr = n.n(cr);

			function dr({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					hideNSFW: n,
					openPostInNewTab: s,
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
					[lr.a["m-responsive"]]: e
				});
				return o.a.createElement(pe.a, null, o.a.createElement(me.b, {
					isResponsiveSettingsEnabled: e
				}, r.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), o.a.createElement(Z.a, null, r.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), o.a.createElement(Q.o, {
					on: a,
					onClick: () => f(!a, "over18"),
					label: r.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: r.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), o.a.createElement(Q.o, {
					disabled: !a,
					label: r.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!a && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: r.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), o.a.createElement(Q.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: r.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: r.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), o.a.createElement(Q.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: r.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: r.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), o.a.createElement(Q.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: r.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: r.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), o.a.createElement(Jn, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), o.a.createElement(Q.o, {
					className: g,
					indent: !0,
					on: !!l,
					onClick: () => f(!l, "rememberCommunitySort"),
					label: r.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: r.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), o.a.createElement(ir, {
					className: g,
					dropdownPrefix: "subreddit-view-setting",
					label: r.fbt._("Global content view", null, {
						hk: "1tWTJK"
					}),
					layout: b,
					onChange: e => f(e, "layout"),
					subtext: r.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
						hk: "1NyVGg"
					})
				}), o.a.createElement(Q.o, {
					className: g,
					on: !!h,
					onClick: () => f(!h, "rememberCommunityLayout"),
					label: r.fbt._("Remember per community", null, {
						hk: "42Ianh"
					}),
					subtext: r.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
						hk: "3fxqrV"
					}),
					indent: !0
				}), o.a.createElement(Q.o, {
					className: g,
					on: !!s,
					onClick: () => f(!s, "openPostInNewTab"),
					label: r.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: r.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), o.a.createElement(Z.a, {
					className: g
				}, r.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), o.a.createElement(Q.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: r.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: r.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.a, null, r.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), o.a.createElement(Q.f, {
					label: r.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: r.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${xe.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var ur = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				mr = n("./src/reddit/helpers/trackers/notifications.ts"),
				pr = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				br = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				hr = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				fr = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				gr = n.n(fr);
			var vr = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [a, i] = Object(s.useState)(hr.a.Push), c = Object(Ce.a)(), l = a === hr.a.Push, d = a === hr.a.Email;
					return o.a.createElement(pe.a, null, o.a.createElement("nav", {
						className: gr.a.nav
					}, o.a.createElement("button", {
						onClick: () => {
							i(l ? hr.a.Email : hr.a.Push)
						}
					}, o.a.createElement(me.b, {
						isResponsiveSettingsEnabled: e
					}, d && o.a.createElement(pr.a, {
						className: gr.a.arrowLeft
					}), l ? r.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : r.fbt._("Back", null, {
						hk: "26R5gK"
					}), l && o.a.createElement(br.a, {
						className: gr.a.arrowRight
					})))), o.a.createElement(me.b, {
						isResponsiveSettingsEnabled: e
					}, l ? r.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : r.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					})), l ? o.a.createElement(ur.b, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(ur.a, null), o.a.createElement(Z.a, null), o.a.createElement(Q.o, {
						on: !!t,
						onClick: () => {
							c(Object(mr.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: r.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})))
				},
				_r = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				xr = n.n(_r);

			function yr(e) {
				return o.a.createElement("header", {
					className: Object(u.a)(xr.a.container, e.className)
				}, o.a.createElement("div", {
					className: xr.a.title
				}, r.fbt._("Payments", null, {
					hk: "rydT0"
				})), o.a.createElement("div", {
					className: xr.a.description
				}, r.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var Cr = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				jr = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Er = n("./src/reddit/models/Payments/index.ts"),
				wr = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				kr = n.n(wr);
			class Or extends o.a.Component {
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
						const t = e.type === Er.a.SavedStripe ? await Object(un.b)(this.props.apiContext(), e.id) : await Object(un.c)(this.props.apiContext(), e.id);
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
					}, o.a.createElement(Z.a, null, r.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return o.a.createElement("div", {
							className: kr.a.payment,
							key: e.id
						}, o.a.createElement("div", {
							className: kr.a.paymentDisplay
						}, o.a.createElement(jr.a, {
							className: kr.a.lock
						}), e.display), o.a.createElement(k.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? r.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : r.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && o.a.createElement("div", {
						className: kr.a.noSavedPayment
					}, r.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Sr = Object(c.c)({
					savedPayments: bn.p
				}),
				Ir = Object(a.b)(Sr, e => ({
					onError: t => e(Object(N.f)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(mn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Er.a.SavedStripe && e(Object(Cr.a)({
							cardId: t.id
						})), t.type === Er.a.SavedPayPal && e(Object(Cr.e)({
							sourceId: t.id
						}))
					}
				}));
			var Pr = Object(dn.b)(Ir(Or)),
				Nr = n("./src/reddit/components/Settings/Payments/index.m.less"),
				Ar = n.n(Nr);
			var Tr = () => o.a.createElement(pe.a, null, o.a.createElement(yr, {
					className: Ar.a.header
				}), o.a.createElement(Pr, null)),
				Lr = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				Mr = n("./src/reddit/constants/experiments.ts"),
				Br = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Rr = Object(c.a)(e => Object(Br.c)(e, {
					experimentEligibilitySelector: Br.a,
					experimentName: Mr.h
				}), e => e === Mr.c.Enabled),
				Ur = Object(c.a)(e => Object(Br.c)(e, {
					experimentEligibilitySelector: Br.a,
					experimentName: Mr.f
				}), e => e === Mr.a.Enabled),
				Dr = ke.a.span("SubheaderLink", $t.a),
				Fr = ke.a.button("GenerateBackupCodesButton", $t.a),
				Hr = ke.a.wrapped(Q.f, "ThirdPartyAuth", $t.a),
				Wr = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: O.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: S.d,
					shouldConsolidateAdsPreferences: Ur,
					shouldRemoveAdsPreferences: Rr
				}),
				qr = Object(a.b)(Wr, (e, t) => ({
					addBlocked: t => e(Object(It.h)(t)),
					addWhitelisted: t => e(Object(Pt.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(x.h)(V.h)),
					removeWhitelisted: t => e(Object(Pt.h)(t)),
					removeBlocked: t => e(Object(It.g)(t)),
					saveChatSettings: t => e(Object(St.c)(t)),
					enable2FA: () => e(Object(_.d)()),
					disable2FA: () => e(Object(_.c)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var zr = qr(({
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
					removeBlocked: x,
					update: y,
					shouldShowLocationBasedSetting: C,
					shouldShowCreatePasswordModal: j,
					shouldConsolidateAdsPreferences: E,
					shouldRemoveAdsPreferences: w
				}) => o.a.createElement(pe.a, null, o.a.createElement(me.b, {
					isResponsiveSettingsEnabled: v
				}, r.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), o.a.createElement(me.a, null, r.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [r.fbt._param("=Privacy & Security FAQs", o.a.createElement(Dr, null, r.fbt._("{=Privacy & Security FAQs}", [r.fbt._param("=Privacy & Security FAQs", o.a.createElement("a", {
					href: `${xe.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), o.a.createElement(Z.a, null, r.fbt._("Safety", null, {
					hk: "WyYmF"
				})), o.a.createElement(Qt, {
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
					remove: x,
					list: t,
					api: n,
					padBottom: !0
				}), E ? ((e, t, n, s, a, i, c, l, d, u, m) => o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), o.a.createElement(Q.o, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && o.a.createElement(Q.o, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && o.a.createElement(Q.o, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), !u && o.a.createElement(Q.o, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), o.a.createElement(Z.a, null, r.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && o.a.createElement(Q.o, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), o.a.createElement(Z.a, null, r.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), o.a.createElement(Q.o, {
					on: m,
					onClick: () => s(!m, "thirdPartyPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(a, s, i, y, 0, C, 0, p, m, w, b) : ((e, t, n, s, a, i, c, l, d, u) => o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), o.a.createElement(Q.o, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && o.a.createElement(Q.o, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && o.a.createElement(Q.o, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), o.a.createElement(Q.o, {
					on: a,
					onClick: () => s(!a, "thirdPartyDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: r.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), o.a.createElement(Q.o, {
					on: c,
					onClick: () => s(!c, "thirdPartySiteDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && o.a.createElement(Q.o, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && o.a.createElement(Q.o, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(a, s, i, y, l, C, d, p, m, w), o.a.createElement(Z.a, null, r.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), o.a.createElement(Q.o, {
					on: c,
					onClick: () => {
						j ? _() : c ? f() : h()
					},
					label: r.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: o.a.createElement(o.a.Fragment, null, r.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && o.a.createElement(o.a.Fragment, null, " ", r.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", o.a.createElement(Fr, {
						type: "button",
						onClick: () => g()
					}, r.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), o.a.createElement(Hr, {
					className: Object(u.a)({
						[$t.a["m-responsive"]]: v
					}),
					label: r.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${xe.a.redditUrl}/prefs/apps`,
					last: !0
				}), j && o.a.createElement(ue.a, {
					isResponsiveSettingsEnabled: v
				}))),
				Gr = n("./src/reddit/actions/preferences.ts"),
				Kr = n("./src/reddit/actions/snoovatar.ts"),
				Yr = n("./src/reddit/components/Loader/index.m.less"),
				Jr = n.n(Yr);
			class Vr extends o.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: r
					} = this.props;
					return e ? n ? n() : o.a.createElement(Ye.a, {
						center: !0,
						className: Jr.a.loadingIcon,
						sizePx: r || 10
					}) : t()
				}
			}
			var Zr = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				Qr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				Xr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				$r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				es = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				ts = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				ns = n("./src/reddit/selectors/structuredStyles.ts"),
				rs = n("./src/reddit/selectors/subredditSettings.ts"),
				ss = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				os = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				as = n.n(os);
			const {
				fbt: is
			} = n("./node_modules/fbt/lib/FbtPublic.js"), cs = 30, ls = 200, ds = Object(c.a)(I.i, rs.a, I.ub, ns.n, ve.a, (e, t, n, r, s) => {
				const o = e && e.profileId,
					a = o && r[o] ? r[o].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(R.e)(e),
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
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === s
				}
			}), us = ke.a.div("ImageUploaderLayout", as.a), ms = ke.a.wrapped(ss.a, "IconImageUploader", as.a), ps = ke.a.wrapped(Xr.a, "ProfileIcon", as.a), bs = ke.a.wrapped(ss.a, "BannerImageUploader", as.a), hs = ke.a.wrapped(Qr.a, "ProfileBanner", as.a), fs = ke.a.div("ProfileModerationContent", as.a), gs = ke.a.wrapped(ts.a, "PlusCircle", as.a), vs = ke.a.span("LabelText", as.a), _s = ke.a.span("ImageType", as.a), xs = ke.a.a("Link", as.a), ys = ke.a.img("DummyBanner", as.a), Cs = ke.a.wrapped(Zr.a, "Preview", as.a);
			class js extends o.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(st.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(st.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(st.c)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(st.a)(this.props.showActiveCommunities))
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
						currentUserName: r,
						currentUserUrl: s,
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
						isDeletingIcon: x,
						profileBannerUploading: y,
						profileIconUploading: C,
						publicDescription: E,
						title: w
					} = this.state, k = Object(u.a)({
						[as.a["m-responsive"]]: l
					}), O = !!h && !Object(es.b)(h);
					return o.a.createElement(pe.a, {
						sidebar: o.a.createElement(Cs, {
							bannerBackgroundImage: b,
							currentUserHasSnoovatar: !!g,
							editMode: !0,
							isEmployee: a,
							isDefaultIcon: !h || h.indexOf("avatar_default") > -1,
							isDeletingBanner: _,
							isDeletingIcon: x,
							isGold: i,
							isNSFW: m,
							isOverlay: !1,
							isOwnProfile: !0,
							onClickSnoovatar: d,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							prefersReducedAnimations: p,
							profileIcon: h,
							publicDescription: E,
							snoovatarUrl: g,
							recentAwardings: e,
							title: w,
							url: s,
							userCreated: n,
							username: r
						})
					}, o.a.createElement(me.b, {
						isResponsiveSettingsEnabled: l
					}, is._("Customize profile", null, {
						hk: "1fenXK"
					})), o.a.createElement(Z.a, null, is._("Profile Information", null, {
						hk: "3vzAUk"
					})), o.a.createElement(Q.e, {
						label: is._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							w !== this.props.title && this.updateProfile(w, "title")
						},
						placeholder: is._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: cs,
						subtext: is._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: w
					}), o.a.createElement(Q.g, {
						label: is._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							E !== this.props.publicDescription && this.updateProfile(E, "publicDescription")
						},
						placeholder: is._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: ls,
						subtext: is._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: E
					}), o.a.createElement(Z.a, null, is._("Images", null, {
						hk: "38DOkf"
					})), o.a.createElement(Q.k, {
						label: is._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: is._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, o.a.createElement(us, {
						className: Object(u.a)(k)
					}, O ? o.a.createElement(ps, {
						className: k,
						iconUrl: h,
						isNSFW: !1,
						userName: r
					}) : o.a.createElement(ms, {
						className: k,
						controlName: "profileIcon",
						icon: o.a.createElement(gs, null),
						isUploading: C,
						label: o.a.createElement(vs, null, is._("Drag and Drop or Upload {=Avatar} Image", [is._param("=Avatar", o.a.createElement(_s, null, is._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: as.a.Label,
						onChange: this.onIconChange
					}), b ? o.a.createElement(hs, {
						bannerUrl: b,
						className: k,
						isNSFW: !1,
						userName: r
					}) : o.a.createElement(bs, {
						className: k,
						controlName: "profileBanner",
						icon: o.a.createElement(gs, null),
						isUploading: y,
						label: o.a.createElement(vs, null, is._("Drag and Drop or Upload {=Banner} Image", [is._param("=Banner", o.a.createElement(_s, null, is._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: as.a.Label,
						onChange: this.onBannerChange
					}))), o.a.createElement(Z.a, null, is._("Profile category", null, {
						hk: "1YRE6p"
					})), o.a.createElement(Q.o, {
						label: is._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: m,
						subtext: is._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), o.a.createElement(Z.a, null, is._("Advanced", null, {
						hk: "1US2Ur"
					})), o.a.createElement(Q.o, {
						label: is._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: is._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [is._param("profileForm: r/all link", o.a.createElement(xs, {
							href: "/r/all"
						}, "r/all")), is._param("profileForm: /users link", o.a.createElement(xs, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), o.a.createElement(Q.o, {
						label: is._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: is._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: f,
						onClick: this.onShowActiveCommunitiesChange
					}), o.a.createElement(Z.a, null, is._("Profile moderation", null, {
						hk: "3vDS8h"
					})), o.a.createElement(fs, null, is._("For moderation tools please visit our {=Profile Moderation page}", [is._param("=Profile Moderation page", o.a.createElement(xs, {
						href: `/user/${r}/about/edit/moderation`
					}, is._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), c && o.a.createElement(j.a, {
						headerText: is._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: is._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [is._param("=NSFW content", o.a.createElement(xs, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, is._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: is._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: is._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: v,
						onOverlayClick: v,
						overlayClassName: Object(u.a)({
							[as.a.ResponsiveOverlay]: l
						}),
						withOverlay: !0
					}), o.a.createElement(ys, {
						src: b
					}))
				}
			}
			const Es = Object(a.b)(ds, e => ({
					imageDeleteRequested: t => e(Object(Gr.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(Gr.z)(t, n)),
					onClickSnoovatar: () => e(Object(Kr.b)("profile_overview")),
					save: (t, n) => e(Object(Gr.E)(t, n)),
					toggleNSFWModal: () => e(Object(x.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object($r.c)(js)),
				ws = Object(c.c)({
					isLoading: e => !Object(rs.a)(e)
				}),
				ks = Object(a.b)(ws)(Vr);

			function Os(e) {
				return o.a.createElement(ks, {
					loaderSize: 50,
					render: () => o.a.createElement(Es, e)
				})
			}
			var Ss = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Is = n.n(Ss);

			function Ps(e) {
				return o.a.createElement("header", {
					className: e.className
				}, o.a.createElement("div", {
					className: Is.a.title
				}, r.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), o.a.createElement("div", {
					className: Is.a.subtitle
				}, r.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var Ns = n("./src/higherOrderComponents/asModal/index.tsx"),
				As = n("./src/reddit/actions/governance/communityDetails.ts"),
				Ts = n("./src/lib/addQueryParams/index.ts"),
				Ls = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				Ms = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				Bs = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				Rs = n.n(Bs);
			const {
				fbt: Us
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Ds = Object(c.c)({
				userId: e => {
					const t = Object(I.i)(e);
					return t ? t.id : ""
				}
			});
			var Fs = Object(a.b)(Ds)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, r = t.primaryColor, s = Object(Ts.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return o.a.createElement("div", {
						className: Rs.a.body
					}, o.a.createElement("section", {
						className: Rs.a.leftSection
					}, o.a.createElement("div", {
						className: Rs.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), o.a.createElement("div", {
						className: Rs.a.content
					}, o.a.createElement(Ls.a, {
						index: "1",
						color: r
					}, Us._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), o.a.createElement(Ls.a, {
						index: "2",
						color: r
					}, Us._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), o.a.createElement(Ls.a, {
						index: "3",
						color: r
					}, Us._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), o.a.createElement("section", {
						className: Rs.a.rightSection
					}, o.a.createElement(Ms.a, {
						url: s,
						scale: 4
					})))
				})),
				Hs = n("./src/reddit/constants/colors.ts"),
				Ws = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				qs = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				zs = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Gs = n("./src/reddit/components/Economics/Price/index.tsx"),
				Ks = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				Ys = n("./src/lib/currency/centsToDollars/index.ts"),
				Js = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				Vs = n.n(Js);
			const Zs = [() => r.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => r.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => r.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => r.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				Qs = [() => r.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => r.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => r.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => r.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function Xs({
				benefit: e,
				color: t
			}) {
				return o.a.createElement("li", {
					className: Vs.a.benefit
				}, o.a.createElement("div", {
					className: Vs.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(dn.b)(Object($r.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: s
				} = e;
				return o.a.createElement("div", {
					className: Object(u.a)(Vs.a.container, t)
				}, o.a.createElement("div", {
					className: Vs.a.topLine
				}, o.a.createElement(Ks.a, {
					className: Vs.a.brand,
					subreddit: s
				}), o.a.createElement("div", {
					className: Vs.a.title
				}, r.fbt._("{community} Supporter Membership", [r.fbt._param("community", s.displayText)], {
					hk: "eZ8PH"
				}))), o.a.createElement("header", {
					className: Vs.a.subTitle
				}, r.fbt._("Support the {community} community and receive exclusive access to premium features.", [r.fbt._param("community", s.displayText)], {
					hk: "2pm4PV"
				})), o.a.createElement("article", null, o.a.createElement("div", {
					className: Vs.a.benefitsTitle
				}, r.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), o.a.createElement("ul", {
					className: Vs.a.benefits
				}, Zs.map(e => o.a.createElement(Xs, {
					benefit: e(),
					key: e()
				}))), o.a.createElement("div", {
					className: Vs.a.benefitsTitle
				}, r.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), o.a.createElement("ul", {
					className: Vs.a.benefits
				}, Qs.map(e => o.a.createElement(Xs, {
					benefit: e(),
					key: e()
				})))), o.a.createElement("footer", {
					className: Vs.a.price
				}, r.fbt._("${price}/month", [r.fbt._param("price", Object(Ys.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var $s = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				eo = n.n($s);
			const {
				fbt: to
			} = n("./node_modules/fbt/lib/FbtPublic.js"), no = e => to._("You've been supporting the community and the development of new features since {joinDate}.", [to._param("joinDate", e)], {
				hk: "37ImIl"
			}), ro = [to._("Loyalty badge", null, {
				hk: "15DctX"
			}), to._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), to._("Distinguished username", null, {
				hk: "4vsJEd"
			}), to._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var so = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: r,
					title: s
				} = e, a = r.primaryColor;
				return o.a.createElement("div", {
					className: eo.a.card,
					style: {
						borderColor: a
					}
				}, o.a.createElement(Ks.a, {
					className: eo.a.brand,
					subreddit: r
				}), o.a.createElement("div", {
					className: eo.a.cardContent
				}, o.a.createElement("div", {
					className: eo.a.cardTitle
				}, s), o.a.createElement(Gs.a, {
					className: eo.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: r.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), o.a.createElement("div", {
					className: eo.a.membershipMsg
				}, no(t)), o.a.createElement("div", {
					className: eo.a.benefitsTitle
				}, to._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), o.a.createElement("ul", {
					className: eo.a.benefits
				}, ro.map(e => o.a.createElement(Xs, {
					benefit: e,
					color: a,
					key: e
				})))))
			};
			const {
				fbt: oo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ao = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: r,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(a.d)(), m = Object(Ce.a)();
					Object(s.useEffect)(() => {
						c && (d(Object(As.a)({
							subredditId: c.id
						})), m(Object(qs.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(Ws.a)(p, void 0, Hs.b.white);
					return o.a.createElement("div", {
						className: Object(u.a)(t, eo.a.pointsContainer)
					}, o.a.createElement("header", {
						className: eo.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, oo._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), o.a.createElement(zs.a, {
						className: eo.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), o.a.createElement("article", {
						className: eo.a.content
					}, c && o.a.createElement(o.a.Fragment, null, o.a.createElement(Fs, {
						subreddit: c
					}), o.a.createElement(so, {
						joinDate: n,
						membership: r,
						subreddit: c,
						title: l
					}))))
				},
				io = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				co = n("./src/reddit/actions/governance/errorToast.ts"),
				lo = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: uo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const mo = Object(a.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(io.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(co.a)(e, t)
			}));
			var po = Object(dn.b)(mo((function(e) {
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
					className: Object(u.a)(n, eo.a.container)
				}, o.a.createElement("header", {
					className: eo.a.header
				}, uo._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), o.a.createElement(zs.a, {
					className: eo.a.close,
					onClick: l
				})), o.a.createElement("article", {
					className: eo.a.content
				}, o.a.createElement("div", {
					className: eo.a.warning
				}, uo._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [uo._param("subredditName", g), uo._param("endDate", r)], {
					hk: "1POMMH"
				})), m && o.a.createElement(so, {
					joinDate: a,
					membership: i,
					subreddit: m,
					title: b
				})), o.a.createElement("footer", {
					className: eo.a.footer
				}, o.a.createElement(k.l, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(lo.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? uo._("canceling...", null, {
					hk: "1Ggy36"
				}) : uo._("cancel membership", null, {
					hk: "C9ZhO"
				})), o.a.createElement(k.i, {
					onClick: l
				}, uo._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const bo = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				ho = Object(a.b)(bo);
			var fo = Object(Ns.a)(ho((function(e) {
					return "points" === e.membership.currency ? o.a.createElement(ao, e) : o.a.createElement(po, e)
				}))),
				go = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				vo = n.n(go);

			function _o(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class xo extends o.a.Component {
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
					} = t, i = _o(s.endsAt), c = _o(s.publishAt), l = !a.renew, d = n ? n.displayText : "", m = i ? r.fbt._("Cancelled. Will expire on {date}", [r.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? r.fbt._("Joined {date}", [r.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return o.a.createElement("div", {
						className: Object(u.a)(e, vo.a.container)
					}, o.a.createElement("div", {
						className: vo.a.membershipName
					}, r.fbt._("{subredditName} {title}", [r.fbt._param("subredditName", d), r.fbt._param("title", s.title)], {
						hk: "2NdAdN"
					})), !l && o.a.createElement("div", {
						className: vo.a.joinDate,
						title: p
					}, p), l && o.a.createElement("div", {
						className: vo.a.cancelled,
						title: m
					}, m), o.a.createElement(k.o, {
						className: vo.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && o.a.createElement(fo, {
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
			const yo = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var Co = Object(a.b)(yo)(xo),
				jo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				Eo = n.n(jo);
			const wo = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var ko = Object(a.b)(wo)((function(e) {
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
						className: Eo.a.title
					}, r.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => o.a.createElement("div", {
						className: Eo.a.loading,
						key: t
					})), i && a.map(e => o.a.createElement(Co, {
						key: e.membership.subredditId,
						className: Eo.a.membership,
						subscription: e
					})), !n && !i && o.a.createElement("div", {
						className: Eo.a.empty
					}, r.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Oo = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				So = n.n(Oo);

			function Io(e) {
				return o.a.createElement(pe.a, {
					className: e.className
				}, o.a.createElement(Ps, {
					className: So.a.header
				}), o.a.createElement(ko, null))
			}
			var Po = n("./src/reddit/components/TabNav/index.tsx"),
				No = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Ao = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				To = n("./src/reddit/selectors/platform.ts"),
				Lo = n("./src/reddit/selectors/responsiveSettings.ts"),
				Mo = n("./src/reddit/pages/Settings/index.m.less"),
				Bo = n.n(Mo);
			const Ro = (e, t, n) => [{
					key: m.Tb.Account,
					title: r.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Tb.Profile,
					title: r.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Tb.Privacy,
					title: r.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Tb.Feed,
					title: r.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Tb.Notifications,
					title: r.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Tb.Premium,
					title: r.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: Bo.a.CreatorTab,
					key: m.Tb.Creator,
					title: r.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: Bo.a.PaymentsTab,
					key: m.Tb.Payments,
					title: r.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: Bo.a.SpecialMembershipTab,
					key: m.Tb.SpecialMembership,
					title: r.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: Bo.a.MessagingTab,
					key: m.Tb.Messaging,
					title: r.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				Uo = Object(c.c)({
					savedPayments: bn.p,
					userIsWhitelistedCreator: bn.x,
					allowNavigationCallback: To.a,
					isResponsiveSettingsEnabled: Lo.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				Do = Object(he.t)(),
				Fo = Object(a.b)(Uo, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(Gr.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				Ho = {
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
			class Wo extends o.a.Component {
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
						Ho.hasOwnProperty(t) && this.props.sendEvent(r => ({
							source: this.getSource(),
							action: "save",
							noun: Ho[t],
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
							case m.Tb.Account:
								return o.a.createElement(wt, i);
							case m.Tb.Profile:
								return o.a.createElement(Os, i);
							case m.Tb.Premium:
								return o.a.createElement(Lr.b, i);
							case m.Tb.Notifications:
								return o.a.createElement(vr, i);
							case m.Tb.Privacy:
								return o.a.createElement(zr, i);
							case m.Tb.Messaging:
								return o.a.createElement(sn, i);
							case m.Tb.Feed:
								return o.a.createElement(dr, i);
							case m.Tb.Payments:
								return o.a.createElement(Tr, null);
							case m.Tb.Creator: {
								const e = Object(p.a)(r.search);
								return s ? o.a.createElement(wn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Tb.SpecialMembership:
								return a ? o.a.createElement(Io, null) : null;
							default:
								return o.a.createElement(wt, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Ao.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Tb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Tb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = o.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return o.a.createElement(Po.a, {
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
					Object(No.d)(No.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
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
					Object(No.b)(No.a.PremiumSettings)
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
						className: Object(u.a)(Bo.a.Container, {
							[Bo.a["m-responsive"]]: t
						})
					}, o.a.createElement(Po.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: r.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						icon: Po.b.GEAR,
						onTouchMove: this.startScrolling
					}, Ro(n, s, a).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = Do(Fo(Object($r.c)(Wo)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/config.ts");
			const s = (e, t) => `${r.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var i = (e = a, t) => {
					switch (t.type) {
						case o.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case s.b:
						case s.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts"),
				l = n("./src/reddit/endpoints/governance/crypto.ts");
			const d = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, s, o;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == a ? void 0 : a.contracts,
					c = null == i ? void 0 : i.unlocked,
					d = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = !m && d === l.a.Stellar,
					b = p ? null == a ? void 0 : a.issuerAddress : null == c ? void 0 : c.address,
					h = p ? (null == a ? void 0 : a.decimals) || 7 : (null == c ? void 0 : c.decimals) || 0;
				return {
					blockchainProvider: d,
					contractAddress: b || "",
					contracts: i,
					decimals: h,
					displayConversion: "1" + "0".repeat(h),
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (o = e.extra) || void 0 === o ? void 0 : o.nomenclature,
					polls: e.polls,
					symbol: p ? (null == a ? void 0 : a.token) || "PHOTON" : (null == c ? void 0 : c.token) || ""
				}
			}
			var p = (e = d, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: m(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var h = (e = b, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[n]: r[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: i,
				points: p,
				publicWallets: h
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var n, r, s;
				return t ? null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function l() {
				const e = Object(s.Z)(),
					t = Object(r.e)(t => Object(s.q)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const d = (e, t) => {
				var n;
				const r = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === o.a.Ethereum || r === o.a.Rinkeby || r === o.a.EthTraderEthereum || r === o.a.EthTraderRinkeby
			}
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
				return x
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "y", (function() {
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
				return I
			})), n.d(t, "p", (function() {
				return P
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "x", (function() {
				return B
			})), n.d(t, "t", (function() {
				return R
			})), n.d(t, "u", (function() {
				return U
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
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
							r = Date.now();
						return n && r < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				x = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === m.a.Fetched) {
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

			function y(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const C = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return h;
					return y(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				j = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
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
				if (s && s.status === m.a.Fetched) {
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
				if (n && n.status === m.a.Fetched) {
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
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: l.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: l.a.SavedPayPal
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
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				L = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = f(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				M = (e, t) => {
					var n, r, s, o;
					const a = (null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || A;
					return {
						prices: L(e, t),
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
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				F = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				H = (e, t, n) => {
					const s = "replyToPost" !== n && Object(p.a)(e, {
						commentId: n
					});
					if (!!s && Object(o.a)(s)) return !0;
					if (t && Object(b.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const a = r.d.spGiphy(e),
						i = F(e, t);
					return a && i
				},
				W = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				q = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/econ/premiumMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(r.Ib)
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, o, a;
					return t ? e.subreddits.productOffers[Object(s.a)(n, t)] : null === (a = null === (o = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === a ? void 0 : a[Object(s.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return n && n[0]
				},
				d = e => {
					const t = c(e, {
						type: o.c.Premium
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === t),
				m = Object(r.a)(d, a.p, (e, t) => u(e, t)),
				p = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				b = Object(r.a)(p, e => Boolean(null == e ? void 0 : e.isCanceled))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.33c7a9b25b34f4e8a058.js.map