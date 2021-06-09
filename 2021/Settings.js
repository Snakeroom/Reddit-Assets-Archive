// https://www.redditstatic.com/desktop2x/Settings.bf16600a69fb4e1d9203.js
// Retrieved at 6/9/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var o = {
				single_source_shortest_paths: function(e, t, n) {
					var r = {},
						s = {};
					s[t] = 0;
					var a, i, c, l, d, u, m, p = o.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (c in i = (a = p.pop()).value, l = a.cost, d = e[i] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = s[c], (void 0 === s[c] || m > u) && (s[c] = u, p.push(c, u), r[c] = i));
					if (void 0 !== n && void 0 === s[n]) {
						var b = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(b)
					}
					return r
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], o = t; o;) n.push(o), e[o], o = e[o];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var r = o.single_source_shortest_paths(e, t, n);
					return o.extract_shortest_path_from_predecessor_list(r, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = o.PriorityQueue,
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
			e.exports = o
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, r, s) {
				for (var a = -1, i = o(n((t - e) / (r || 1)), 0), c = Array(i); i--;) c[s ? i : ++a] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && r(t, n, a) && (n = a = void 0), t = s(t), void 0 === n ? (n = t, t = 0) : n = s(n), a = void 0 === a ? t < n ? 1 : -1 : s(a), o(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			e.exports = o
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
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

			function r(e) {
				var t = s(e);
				return n(t)
			}

			function s(e) {
				if (!n.o(o, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return o[e]
			}
			r.keys = function() {
				return Object.keys(o)
			}, r.resolve = s, e.exports = r, r.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$"
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/can-promise.js"),
				r = n("./node_modules/qrcode/lib/core/qrcode.js"),
				s = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, s, a) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					l = "function" == typeof i[c - 1];
				if (!l && !o()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = s = void 0) : 2 !== c || t.getContext || (s = n, n = t, t = void 0), new Promise((function(o, a) {
						try {
							var i = r.create(n, s);
							o(e(i, t, s))
						} catch (c) {
							a(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (a = n, n = t, t = s = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = s, s = void 0) : (a = s, s = n, n = t, t = void 0));
				try {
					var d = r.create(n, s);
					a(null, e(d, t, s))
				} catch (u) {
					a(u)
				}
			}
			t.create = r.create, t.toCanvas = i.bind(null, s.render), t.toDataURL = i.bind(null, s.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
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
				for (var t = Math.floor(e / 7) + 2, n = o(e), r = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), s = [n - 7], a = 1; a < t - 1; a++) s[a] = s[a - 1] - r;
				return s.push(6), s.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], o = t.getRowColCoords(e), r = o.length, s = 0; s < r; s++)
					for (var a = 0; a < r; a++) 0 === s && 0 === a || 0 === s && a === r - 1 || s === r - 1 && 0 === a || n.push([o[s], o[a]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js"),
				r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function s(e) {
				this.mode = o.ALPHANUMERIC, this.data = e
			}
			s.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var n = 45 * r.indexOf(this.data[t]);
					n += r.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6)
			}, e.exports = s
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

			function r(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = o.alloc(e * e), this.reservedBit = o.alloc(e * e)
			}
			r.prototype.set = function(e, t, n, o) {
				var r = e * this.size + t;
				this.data[r] = n, o && (this.reservedBit[r] = !0)
			}, r.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, r.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, r.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/mode.js");

			function s(e) {
				this.mode = r.BYTE, this.data = o.from(e)
			}
			s.getBitsLength = function(e) {
				return 8 * e
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
				for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				s = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
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
			}, t.getTotalCodewordsCount = function(e, t) {
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
				r = o.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, s = n << 10; o.getBCHDigit(s) - r >= 0;) s ^= 1335 << o.getBCHDigit(s) - r;
				return 21522 ^ (n << 10 | s)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = o.alloc(512),
				s = o.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) r[t] = e, s[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) r[t] = r[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return s[e]
			}, t.exp = function(e) {
				return r[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : r[s[e] + s[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/qrcode/lib/core/utils.js");

			function s(e) {
				this.mode = o.KANJI, this.data = e
			}
			s.getBitsLength = function(e) {
				return 13 * e
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
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
			}, e.exports = s
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
				r = 40,
				s = 10;

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
				for (var t = e.size, o = 0, r = 0, s = 0, a = null, i = null, c = 0; c < t; c++) {
					r = s = 0, a = i = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === a ? r++ : (r >= 5 && (o += n + (r - 5)), a = d, r = 1), (d = e.get(l, c)) === i ? s++ : (s >= 5 && (o += n + (s - 5)), i = d, s = 1)
					}
					r >= 5 && (o += n + (r - 5)), s >= 5 && (o += n + (s - 5))
				}
				return o
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, r = 0; r < t - 1; r++)
					for (var s = 0; s < t - 1; s++) {
						var a = e.get(r, s) + e.get(r, s + 1) + e.get(r + 1, s) + e.get(r + 1, s + 1);
						4 !== a && 0 !== a || n++
					}
				return n * o
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, o = 0, s = 0, a = 0; a < t; a++) {
					o = s = 0;
					for (var i = 0; i < t; i++) o = o << 1 & 2047 | e.get(a, i), i >= 10 && (1488 === o || 93 === o) && n++, s = s << 1 & 2047 | e.get(i, a), i >= 10 && (1488 === s || 93 === s) && n++
				}
				return n * r
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, o = 0; o < n; o++) t += e.data[o];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * s
			}, t.applyMask = function(e, t) {
				for (var n = t.size, o = 0; o < n; o++)
					for (var r = 0; r < n; r++) t.isReserved(r, o) || t.xor(r, o, a(e, r, o))
			}, t.getBestMask = function(e, n) {
				for (var o = Object.keys(t.Patterns).length, r = 0, s = 1 / 0, a = 0; a < o; a++) {
					n(a), t.applyMask(a, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), i < s && (s = i, r = a)
				}
				return r
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/version-check.js"),
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
				if (!o.isValid(t)) throw new Error("Invalid version: " + t);
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
				} catch (o) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js");

			function r(e) {
				this.mode = o.NUMERIC, this.data = e.toString()
			}
			r.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				var t, n, o;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), o = parseInt(n, 10), e.put(o, 10);
				var r = this.data.length - t;
				r > 0 && (n = this.data.substr(t), o = parseInt(n, 10), e.put(o, 3 * r + 1))
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = o.alloc(e.length + t.length - 1), s = 0; s < e.length; s++)
					for (var a = 0; a < t.length; a++) n[s + a] ^= r.mul(e[s], t[a]);
				return n
			}, t.mod = function(e, t) {
				for (var n = o.from(e); n.length - t.length >= 0;) {
					for (var s = n[0], a = 0; a < t.length; a++) n[a] ^= r.mul(t[a], s);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = o.from([1]), s = 0; s < e; s++) n = t.mul(n, [1, r.exp(s)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/utils.js"),
				s = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
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
				var o, r, s = e.size,
					a = b.getEncodedBits(t, n);
				for (o = 0; o < 15; o++) r = 1 == (a >> o & 1), o < 6 ? e.set(o, 8, r, !0) : o < 8 ? e.set(o + 1, 8, r, !0) : e.set(s - 15 + o, 8, r, !0), o < 8 ? e.set(8, s - o - 1, r, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, r, !0) : e.set(8, 15 - o - 1, r, !0);
				e.set(s - 8, 8, 1, !0)
			}

			function _(e, t, n) {
				var s = new a;
				n.forEach((function(t) {
					s.put(t.mode.bit, 4), s.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(s)
				}));
				var i = 8 * (r.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (s.getLengthInBits() + 4 <= i && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(0);
				for (var c = (i - s.getLengthInBits()) / 8, l = 0; l < c; l++) s.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var s = r.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), i = s - a, c = u.getBlocksCount(t, n), l = c - s % c, d = Math.floor(s / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), _ = new Array(c), y = 0, C = o.from(e.buffer), E = 0; E < c; E++) {
						var j = E < l ? p : b;
						v[E] = C.slice(g, g + j), _[E] = f.encode(v[E]), g += j, y = Math.max(y, j)
					}
					var x, w, k = o.alloc(s),
						S = 0;
					for (x = 0; x < y; x++)
						for (w = 0; w < c; w++) x < v[w].length && (k[S++] = v[w][x]);
					for (x = 0; x < h; x++)
						for (w = 0; w < c; w++) k[S++] = _[w][x];
					return k
				}(s, e, t)
			}

			function y(e, t, n, o) {
				var s;
				if (g(e)) s = f.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var u = f.rawSplit(e);
						a = p.getBestVersionForData(u, n)
					}
					s = f.fromString(e, a || 40)
				}
				var m = p.getBestVersionForData(s, n);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var b = _(t, n, s),
					h = r.getSymbolSize(t),
					y = new i(h);
				return function(e, t) {
						for (var n = e.size, o = l.getPositions(t), r = 0; r < o.length; r++)
							for (var s = o[r][0], a = o[r][1], i = -1; i <= 7; i++)
								if (!(s + i <= -1 || n <= s + i))
									for (var c = -1; c <= 7; c++) a + c <= -1 || n <= a + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(s + i, a + c, !0, !0) : e.set(s + i, a + c, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var o = n % 2 == 0;
							e.set(n, 6, o, !0), e.set(6, n, o, !0)
						}
					}(y),
					function(e, t) {
						for (var n = c.getPositions(t), o = 0; o < n.length; o++)
							for (var r = n[o][0], s = n[o][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(r + a, s + i, !0, !0) : e.set(r + a, s + i, !1, !0)
					}(y, t), v(y, n, 0), t >= 7 && function(e, t) {
						for (var n, o, r, s = e.size, a = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), o = i % 3 + s - 8 - 3, r = 1 == (a >> i & 1), e.set(n, o, r, !0), e.set(o, n, r, !0)
					}(y, t),
					function(e, t) {
						for (var n = e.size, o = -1, r = n - 1, s = 7, a = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(r, i - c)) {
										var l = !1;
										a < t.length && (l = 1 == (t[a] >>> s & 1)), e.set(r, i - c, l), -1 === --s && (a++, s = 7)
									} if ((r += o) < 0 || n <= r) {
									r -= o, o = -o;
									break
								}
							}
					}(y, b), isNaN(o) && (o = d.getBestMask(y, v.bind(null, y, n))), d.applyMask(o, y), v(y, n, o), {
						modules: y,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: o,
						segments: s
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, o, a = s.M;
				return void 0 !== t && (a = s.from(t.errorCorrectionLevel, s.M), n = p.from(t.version), o = d.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)), y(e, n, a, o)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/polynomial.js"),
				s = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = o.alloc(this.degree),
					n = s.concat([e, t], e.length + this.degree),
					a = r.mod(n, this.genPoly),
					i = this.degree - a.length;
				if (i > 0) {
					var c = o.alloc(this.degree);
					return a.copy(c, i), c
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(o, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var r = new RegExp("^" + n + "$"),
				s = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return r.test(e)
			}, t.testNumeric = function(e) {
				return s.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				s = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/byte-data.js"),
				i = n("./node_modules/qrcode/lib/core/kanji-data.js"),
				c = n("./node_modules/qrcode/lib/core/regex.js"),
				l = n("./node_modules/qrcode/lib/core/utils.js"),
				d = n("./node_modules/dijkstrajs/dijkstra.js");

			function u(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function m(e, t, n) {
				for (var o, r = []; null !== (o = e.exec(n));) r.push({
					data: o[0],
					index: o.index,
					mode: t,
					length: o[0].length
				});
				return r
			}

			function p(e) {
				var t, n, r = m(c.NUMERIC, o.NUMERIC, e),
					s = m(c.ALPHANUMERIC, o.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, o.BYTE, e), n = m(c.KANJI, o.KANJI, e)) : (t = m(c.BYTE_KANJI, o.BYTE, e), n = []), r.concat(s, t, n).sort((function(e, t) {
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
						return r.getBitsLength(e);
					case o.ALPHANUMERIC:
						return s.getBitsLength(e);
					case o.KANJI:
						return i.getBitsLength(e);
					case o.BYTE:
						return a.getBitsLength(e)
				}
			}

			function h(e, t) {
				var n, c = o.getBestModeForData(e);
				if ((n = o.from(t, c)) !== o.BYTE && n.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + o.toString(n) + ".\n Suggested mode is: " + o.toString(c));
				switch (n !== o.KANJI || l.isKanjiModeEnabled() || (n = o.BYTE), n) {
					case o.NUMERIC:
						return new r(e);
					case o.ALPHANUMERIC:
						return new s(e);
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
				for (var r = function(e, t) {
						for (var n = {}, r = {
								start: {}
							}, s = ["start"], a = 0; a < e.length; a++) {
							for (var i = e[a], c = [], l = 0; l < i.length; l++) {
								var d = i[l],
									u = "" + a + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, r[u] = {};
								for (var m = 0; m < s.length; m++) {
									var p = s[m];
									n[p] && n[p].node.mode === d.mode ? (r[p][u] = b(n[p].lastCount + d.length, d.mode) - b(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), r[p][u] = b(d.length, d.mode) + 4 + o.getCharCountIndicator(d.mode, t))
								}
							}
							s = c
						}
						for (m = 0; m < s.length; m++) r[s[m]].end = 0;
						return {
							map: r,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var r = e[n];
							switch (r.mode) {
								case o.NUMERIC:
									t.push([r, {
										data: r.data,
										mode: o.ALPHANUMERIC,
										length: r.length
									}, {
										data: r.data,
										mode: o.BYTE,
										length: r.length
									}]);
									break;
								case o.ALPHANUMERIC:
									t.push([r, {
										data: r.data,
										mode: o.BYTE,
										length: r.length
									}]);
									break;
								case o.KANJI:
									t.push([r, {
										data: r.data,
										mode: o.BYTE,
										length: u(r.data)
									}]);
									break;
								case o.BYTE:
									t.push([{
										data: r.data,
										mode: o.BYTE,
										length: u(r.data)
									}])
							}
						}
						return t
					}(p(e, l.isKanjiModeEnabled())), n), s = d.find_path(r.map, "start", "end"), a = [], i = 1; i < s.length - 1; i++) a.push(r.table[s[i]].node);
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
				r = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				s = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/mode.js"),
				i = n("./node_modules/qrcode/lib/core/version-check.js"),
				c = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = o.getBCHDigit(7973);

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
				var s = 8 * (o.getSymbolTotalCodewords(e) - r.getTotalCodewordsCount(e, t));
				if (n === a.MIXED) return s;
				var c = s - d(n, e);
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
				var o, r = s.from(n, s.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var o = 1; o <= 40; o++) {
							if (u(e, o) <= t.getCapacity(o, n, a.MIXED)) return o
						}
					}(e, r);
					if (0 === e.length) return 1;
					o = e[0]
				} else o = e;
				return function(e, n, o) {
					for (var r = 1; r <= 40; r++)
						if (n <= t.getCapacity(r, o, e)) return r
				}(o.mode, o.getLength(), r)
			}, t.getEncodedBits = function(e) {
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; o.getBCHDigit(t) - l >= 0;) t ^= 7973 << o.getBCHDigit(t) - l;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var r = n,
					s = t;
				void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (s = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), r = o.getOptions(r);
				var a = o.getImageWidth(e.modules.size, r),
					i = s.getContext("2d"),
					c = i.createImageData(a, a);
				return o.qrToImageData(c.data, e, r),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, s, a), i.putImageData(c, 0, 0), s
			}, t.renderToDataURL = function(e, n, o) {
				var r = o;
				void 0 !== r || n && n.getContext || (r = n, n = void 0), r || (r = {});
				var s = t.render(e, n, r),
					a = r.type || "image/png",
					i = r.rendererOpts || {};
				return s.toDataURL(a, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var o = n("./node_modules/qrcode/lib/renderer/utils.js");

			function r(e, t) {
				var n = e.a / 255,
					o = t + '="' + e.hex + '"';
				return n < 1 ? o + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : o
			}

			function s(e, t, n) {
				var o = e + t;
				return void 0 !== n && (o += " " + n), o
			}
			t.render = function(e, t, n) {
				var a = o.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					l = i + 2 * a.margin,
					d = a.color.light.a ? "<path " + r(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + r(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var o = "", r = 0, a = !1, i = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || a || (a = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (o += a ? s("M", l + n, .5 + d + n) : s("m", r, 0), r = 0, a = !1), l + 1 < t && e[c + 1] || (o += s("h", i), i = 0)) : r++
						}
						return o
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
					o = e.width && e.width >= 21 ? e.width : void 0,
					r = e.scale || 4;
				return {
					width: o,
					scale: o ? 4 : r,
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
				for (var r = n.modules.size, s = n.modules.data, a = t.getScale(r, o), i = Math.floor((r + 2 * o.margin) * a), c = o.margin * a, l = [o.color.light, o.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = o.color.light;
						if (d >= c && u >= c && d < i - c && u < i - c) p = l[s[Math.floor((d - c) / a) * r + Math.floor((u - c) / a)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/qrcode/node_modules/isarray/index.js");
			s.TYPED_ARRAY_SUPPORT = function() {
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
			var r = s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function s(e, t, n) {
				return s.TYPED_ARRAY_SUPPORT || this instanceof s ? "number" == typeof e ? c(this, e) : function(e, t, n, o) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, o) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (o || 0)) throw new RangeError("'length' is out of bounds");
						var r;
						r = void 0 === n && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, n) : new Uint8Array(t, n, o);
						s.TYPED_ARRAY_SUPPORT ? r.__proto__ = s.prototype : r = l(e, r);
						return r
					}(e, t, n, o);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							o = i(e, n),
							r = o.write(t);
						r !== n && (o = o.slice(0, r));
						return o
					}(e, t);
					return function(e, t) {
						if (s.isBuffer(t)) {
							var n = 0 | a(t.length),
								o = i(e, n);
							return 0 === o.length ? o : (t.copy(o, 0, 0, n), o)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? i(e, 0) : l(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return l(e, t.data)
						}
						var r;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new s(e, t, n)
			}

			function a(e) {
				if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return s.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = s.prototype : (null === (n = e) && (n = new s(t)), n.length = t), n
			}

			function c(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | a(t));
				if (!s.TYPED_ARRAY_SUPPORT)
					for (var o = 0; o < t; ++o) n[o] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | a(t.length), o = i(e, n), r = 0; r < n; r += 1) o[r] = 255 & t[r];
				return o
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var o = e.length, r = null, s = [], a = 0; a < o; ++a) {
					if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
						if (!r) {
							if (n > 56319) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							if (a + 1 === o) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							r = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && s.push(239, 191, 189), r = n;
							continue
						}
						n = 65536 + (r - 55296 << 10 | n - 56320)
					} else r && (t -= 3) > -1 && s.push(239, 191, 189);
					if (r = null, n < 128) {
						if ((t -= 1) < 0) break;
						s.push(n)
					} else if (n < 2048) {
						if ((t -= 2) < 0) break;
						s.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((t -= 3) < 0) break;
						s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return s
			}

			function u(e) {
				return s.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : d(e).length)
			}
			s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), s.prototype.write = function(e, t, n) {
				void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
				var o = this.length - t;
				if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, o) {
					return function(e, t, n, o) {
						for (var r = 0; r < o && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
						return r
					}(d(t, e.length - n), e, n, o)
				}(this, e, t, n)
			}, s.prototype.slice = function(e, t) {
				var n, o = this.length;
				if ((e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), (t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e), s.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = s.prototype;
				else {
					var r = t - e;
					n = new s(r, void 0);
					for (var a = 0; a < r; ++a) n[a] = this[a + e]
				}
				return n
			}, s.prototype.copy = function(e, t, n, o) {
				if (n || (n = 0), o || 0 === o || (o = this.length), t >= e.length && (t = e.length), t || (t = 0), o > 0 && o < n && (o = n), o === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (o < 0) throw new RangeError("sourceEnd out of bounds");
				o > this.length && (o = this.length), e.length - t < o - n && (o = e.length - t + n);
				var r, a = o - n;
				if (this === e && n < t && t < o)
					for (r = a - 1; r >= 0; --r) e[r + t] = this[r + n];
				else if (a < 1e3 || !s.TYPED_ARRAY_SUPPORT)
					for (r = 0; r < a; ++r) e[r + t] = this[r + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
				return a
			}, s.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var o = e.charCodeAt(0);
						o < 256 && (e = o)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var r;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (r = t; r < n; ++r) this[r] = e;
				else {
					var a = s.isBuffer(e) ? e : new s(e),
						i = a.length;
					for (r = 0; r < n - t; ++r) this[r + t] = a[r % i]
				}
				return this
			}, s.concat = function(e, t) {
				if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var r = c(null, t),
					a = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!s.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(r, a), a += l.length
				}
				return r
			}, s.byteLength = u, s.prototype._isBuffer = !0, s.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new s(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new s(e)
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
			var o = n("./node_modules/react/index.js"),
				r = function() {
					var e = 1,
						t = new WeakMap,
						n = function(o, r) {
							return "number" == typeof o || "string" == typeof o ? r ? "idx-" + r : "val-" + o : t.has(o) ? "uid" + t.get(o) : (t.set(o, e++), n(o))
						};
					return n
				},
				s = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				a = s(),
				i = o.createContext(s()),
				c = function() {
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
		"./src/graphql/operations/GetAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"1508e05ea2ee"}')
		},
		"./src/graphql/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/graphql/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"93a82be72b63"}')
		},
		"./src/graphql/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/graphql/operations/UpdateAccountGender.json": function(e) {
			e.exports = JSON.parse('{"id":"670e8e8d3018"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const n = Object(o.a)(e),
					r = parseInt(n) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function o(e, t, n, o) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(r)
			}
			n.d(t, "a", (function() {
				return o
			}))
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/graphql/operations/GetAccountGender.json"),
				c = n("./src/graphql/operations/UpdateAccountGender.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var o, r;
				const s = await (e => Object(a.a)(e, {
					...i
				}))(n());
				if (!s.ok) return;
				const c = s.body,
					l = (({
						accountDefinedGender: e,
						accountGenderCategory: t
					}) => ({
						definedGender: e,
						genderCategory: t
					}))(null === (r = null === (o = null == c ? void 0 : c.data) || void 0 === o ? void 0 : o.piiIdentity) || void 0 === r ? void 0 : r.gender);
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
				})).ok ? (t(b(e)), t(Object(s.f)({
					kind: l.b.SuccessCommunity,
					text: o.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : t(Object(s.f)({
					kind: l.b.Error,
					text: o.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				}))
			}, b = Object(r.a)(d.b)
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				r = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/paymentSystems/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const s = Object(o.a)(r.a),
				a = Object(o.a)(r.e),
				i = Object(o.a)(r.b),
				c = Object(o.a)(r.c),
				l = Object(o.a)(r.d)
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
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(o.a)(a.a),
				c = Object(o.a)(a.b),
				l = Object(o.a)(a.c),
				d = Object(o.a)(a.d),
				u = Object(o.a)(a.e),
				m = Object(o.a)(a.f),
				p = Object(o.a)(a.g),
				b = Object(o.a)(a.h),
				h = Object(o.a)(a.i),
				f = e => Object(r.h)(s.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				r = n.n(o),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
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
					r = Object.keys(o);
				if (r.length) {
					const t = await Object(i.e)(n(), r);
					t.ok && e(Object(y.g)(t.body))
				}
			}, x = (e, t) => async (n, o, {
				apiContext: r
			}) => {
				const s = o().user.account,
					a = o().economics.subredditPremium[e],
					i = !a || a.status !== f.a.Fetched || t;
				if (s && i) {
					const t = await Object(c.a)(r(), e, s.id);
					n(Object(y.i)(t))
				}
			}, w = e => async (t, n, {
				apiContext: o
			}) => {
				const r = n(),
					a = r.user.account,
					i = Object(g.f)(r, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (a && e.badge) {
					let n, r;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: E(e.badge),
						currentAppliedBadges: c,
						userId: a.id
					})), C(e.badge) && n ? r = await Object(l.a)(o(), e.subredditId, n.id, !1) : C(e.badge) || (r = await Object(l.a)(o(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: a.id
					})), Object(s.a)(t, r.error))
				}
			}, k = (e, t) => async (n, o, {
				apiContext: r
			}) => {
				await n(x(e, !0));
				const s = o().economics.subredditPremium[e];
				if (s && s.status === f.a.Fetched) {
					const o = s.data.userOwnedBadges.find(e => e.type === t.id);
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
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (i && (c || l)) {
					const [n, c] = await Promise.all([Object(a.b)(o(), e), m(o(), e, i.id)]);
					if (!c.ok) return void Object(s.a)(t, c.error);
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
			}, O = (e, t, n) => async (o, r, {
				apiContext: s
			}) => {
				if (await o(x(e, !0)), n && t) {
					const n = r(),
						s = Object(g.f)(n, e),
						a = Object(v.a)(n, t);
					if (!s[Object(b.d)(a.placement)] && a) {
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
					wallet: r
				} = await Object(i.c)(o(), e);
				t(Object(y.f)({
					wallet: r
				})), await t(x(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "i", (function() {
				return G
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
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
				C = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				x = n("./src/reddit/models/Payments/index.ts");
			const w = () => o.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				S = (e, t, n) => async (r, s, {
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
						if (t && t.length) throw new Error(k(t));
						if (n) return n.id
					}
					throw new Error((() => o.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, O = (e, t, n, r, s, a) => async (c, l, {
					gqlContext: d
				}) => {
					var u;
					const m = l(),
						b = () => c(Object(f.stripeApiError)(o.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = s === y.c.Premium,
						C = s === y.c.Powerups,
						E = {};
					if (C && a) E.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(g.c)(m, {
							provider: x.b.Stripe
						});
						if (!e) return;
						E.premium = {
							pricePackage: e
						}
					}
					let w, O, P = "";
					try {
						P = await c(S(t, r, E))
					} catch (I) {
						return p.c.captureException(I), void(I.message && c(Object(f.stripeApiError)(I.message)))
					}
					c(Object(f.stripeTokenPending)());
					const N = Object(v.y)(m);
					if (N || (w = await c(Object(f.validateAndCreateStripeToken)(e)), O = Object(v.v)(m), w)) try {
						const t = i()(),
							o = N || O ? w && O ? Object(j.h)(d(), t, P, w.id) : N ? Object(j.j)(d(), t, P, N) : null : Object(j.i)(d(), t, P, w.id),
							s = await o;
						if (!(null == s ? void 0 : s.ok)) return void b();
						const m = s.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void c(Object(f.stripeApiError)(k(m.errors)));
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
							if (n) return void(n.message ? c(Object(f.stripeApiError)(n.message)) : b());
							let o;
							if (!(o = N ? await Object(j.e)(d(), i()(), g.id, N) : await Object(j.d)(d(), i()(), g.id, w.id, O)).ok) return void b();
							const r = o.body;
							if (!r.data.confirmEconPayment.ok || r.data.confirmEconPayment.payment.status !== j.a.Paid) return void b()
						} else if (p && g.status !== j.a.Paid) return void b();
						const y = Object(_.j)(l());
						y && (C && a ? c(F({
							subredditId: a,
							powerupsCount: r,
							user: y,
							isAnonymous: n
						})) : h && c(U({
							user: y
						})))
					} catch (I) {
						p.c.captureException(I), b()
					}
				}, P = (e, t, n, o, r) => async (s, a, {
					gqlContext: l
				}) => {
					var d;
					const m = a(),
						b = o === y.c.Premium,
						h = o === y.c.Powerups,
						v = {};
					if (h && r) v.powerUps = {
						subredditId: r,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.c)(m, {
							provider: x.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let C = "";
					try {
						C = await s(S(e, n, v))
					} catch (P) {
						return p.c.captureException(P), P.message && s(Object(f.paypalApiError)(P.message)), null
					}
					const E = c.a.redditUrl;
					let O = {
						_o: E,
						o: C,
						pt: o
					};
					h && r && (O = {
						...O,
						r
					});
					try {
						const e = Object(u.a)(`${E}/framedModal/paypal-finish`, {
								...O,
								s: !0
							}),
							o = Object(u.a)(`${E}/framedModal/paypal-finish`, O),
							c = i()(),
							m = await Object(j.g)(l(), c, C, e, o);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (d = null == e ? void 0 : e.errors) || void 0 === d ? void 0 : d.length) return s(Object(f.paypalApiError)(k(e.errors))), null;
							const o = Object(_.j)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === j.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && o) return r ? s(F({
									subredditId: r,
									powerupsCount: n,
									user: o,
									isAnonymous: t
								})) : b && s(U({
									user: o
								})), null
							}
						}
					} catch (P) {
						p.c.captureException(P)
					}
					return s(Object(f.paypalApiError)(w())), null
				}, N = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var s;
					try {
						const o = i()(),
							a = await Object(j.c)(r(), o, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return n(Object(f.paypalApiError)(k(e.errors))), !1;
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
							} = n.data.identity, r = o.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(r)), r[0] && e(Object(f.selectSavedCard)(r[0].cardId))
						} else e(Object(f.stripeApiError)(o.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (r) {
						p.c.captureException(r), e(Object(f.savedCardsSuccess)([]))
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
								errors: r
							} = n.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(k(r))
					} catch (r) {
						p.c.captureException(r)
					}
				}, T = Object(m.a)(h.N), M = Object(m.a)(h.O), R = Object(m.a)(h.P), L = e => async (t, n) => {
					await t(T(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, B = (e, t, n) => async (r, s, {
					gqlContext: a
				}) => {
					r(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const s = await Object(j.b)(a(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: o
								} = e.data.cancelEconRecurringPayment;
							if (o && o.length) return void r(L(o[0].message));
							r(R({
								subredditId: t,
								allocatedAt: n
							}))
						} else r(L(o.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), r(L(o.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(m.a)(h.R), F = e => async (t, n) => {
					t(D(e)), t(Object(C.i)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(E.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(E.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, U = Object(m.a)(h.V), G = Object(m.a)(h.Z)
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
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
			const f = Object(r.a)(h.cb),
				g = Object(r.a)(h.bb),
				v = Object(r.a)(h.ab),
				_ = Object(r.a)(h.Y),
				y = Object(r.a)(h.X),
				C = Object(r.a)(h.W),
				E = Object(r.a)(h.Cb),
				j = Object(r.a)(h.Ab),
				x = Object(r.a)(h.Bb),
				w = Object(r.a)(h.Fb),
				k = Object(r.a)(h.Eb),
				S = Object(r.a)(h.Db),
				O = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, P = (e, t) => async n => {
					e === i.c.Premium ? n(I()) : t && n(N(e, t))
				}, N = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					const a = r();
					if (!Object(b.h)(a, {
							subredditId: t,
							type: e
						})) {
						n(f());
						try {
							const o = await ((e, t, n, o) => Object(p.a)(e, {
								...m,
								variables: {
									subredditId: t,
									types: n,
									includeGlobal: o
								}
							}))(s(), t, [e], !0);
							if (o.ok) {
								const e = o.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const r = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: r || [],
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
					var r, a;
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
							if (null === (r = n.errors) || void 0 === r ? void 0 : r.length) throw new Error(n.errors[0].message);
							return void e(y({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : o.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(C(t)), e(O(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var r, a, i;
					e(E());
					try {
						const t = await (e => Object(p.a)(e, u))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (r = n.errors) || void 0 === r ? void 0 : r.length) throw new Error(n.errors[0].message);
							return void e(x({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.subscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						s.c.captureException(c);
						const t = c.message ? c.message : o.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(j(t)), e(O(t))
					}
				}, T = e => async (t, n, {
					gqlContext: r
				}) => {
					var s;
					t(w(e));
					try {
						const n = await Object(l.b)(r(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const o = n.body,
								{
									errors: r
								} = o.data.cancelEconRecurringPayment;
							if (null == r ? void 0 : r.length) throw new Error(r[0].message);
							t(S({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (s = a.message) && void 0 !== s ? s : o.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(k(e)), t(O(e)), !1
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
				r = n("./src/lib/sentry/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(s.a)(i.B),
				d = Object(s.a)(i.w),
				u = Object(s.a)(i.b),
				m = Object(s.a)(i.y),
				p = Object(s.a)(i.a),
				b = Object(s.a)(i.E),
				h = Object(s.a)(i.G),
				f = Object(s.a)(i.F),
				g = Object(s.a)(i.D),
				v = e => async (t, n) => {
					const r = n(),
						s = Object(c.h)(r),
						a = Object(c.l)(r),
						{
							token: i,
							error: l
						} = await e.createToken({
							name: s,
							address_zip: a
						});
					if (s.trim()) {
						if (!l && i) return i;
						t(f(l || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, _ = Object(s.a)(i.x), y = Object(s.a)(i.H), C = Object(s.a)(i.C), E = Object(s.a)(i.g), j = e => async (t, n, {
					apiContext: o
				}) => {
					t(E(e));
					try {
						const t = await Object(a.a)(o(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						r.c.captureException(s)
					}
				}, x = Object(s.a)(i.z), w = Object(s.a)(i.A), k = () => async (e, t, {
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
						r.c.captureException(o), e(w([]))
					}
				}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/governance/community.ts"),
				s = n("./src/reddit/actions/governance/constants.ts");
			const a = Object(o.a)(s.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: o
				}) => {
					const s = await Object(r.a)(o(), {
						subredditId: e
					});
					s.ok && t(a({
						subredditId: e,
						...s.body
					}))
				}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return D
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
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
					if (!Object(E.j)(o)) return;
					const r = Object(C.b)(o),
						a = Object(C.a)(o);
					if (r || a) return;
					e(x());
					const i = await (e => Object(_.a)(e, {
						endpoint: Object(y.a)(`${v.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: s.hb.GET
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
				R = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				L = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				B = n("./src/reddit/selectors/externalAccount.ts");
			const D = e => async (t, n) => {
				await t(Object(A.r)());
				const f = [t(Object(P.x)(!0)), t(Object(p.a)())];
				n().economics.paymentSystems.status === L.a.NotFetched && f.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(m.d)());
					const o = await Object(u.d)(n());
					o.ok ? e(Object(m.c)(o.body)) : e(Object(m.b)({
						error: o.error
					}))
				})())), await Promise.all(f); {
					const e = n();
					if (!Object(E.K)(e)) return Object(R.a)(t, e)
				}
				const {
					page: v = s.Wb.Account
				} = e.params;
				if (v === s.Wb.Gold) return void t(Object(r.c)("/settings/premium"));
				const _ = [];
				v === s.Wb.Profile && (_.push(t(Object(N.a)())), _.push(t(Object(I.g)()))), v === s.Wb.Account && (_.push(t(Object(b.o)())), _.push(t(Object(d.b)()))), v === s.Wb.Notifications && _.push(t(S())), v !== s.Wb.Privacy && v !== s.Wb.Messaging || _.push(t(Object(l.b)())), v === s.Wb.Premium && (_.push(t(Object(N.a)())), _.push(t(Object(h.j)(!0)))), await Promise.all(_); {
					const e = n(),
						s = e.platform.currentPage,
						{
							url: c
						} = s,
						l = Object(a.a)(c).get(T.d);
					if (l && (t(Object(r.c)(Object(i.a)(c, [T.d]))), Object(B.a)(e))) {
						const e = o.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(g.f)({
							text: e
						})), Object(M.b)(l)
					}
				}
				t(Object(O.l)({
					title: Object(c.h)()
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(a.b, {
				className: Object(s.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(s.a)(e => r.a.createElement("div", {
				className: c.a.container
			}, r.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, r.a.createElement(l.b, null)), r.a.createElement(l.h, null, r.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), r.a.createElement(l.k, null, e.message && r.a.createElement("p", {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			const {
				fbt: s
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, s._("Previews Terms of Use", null, {
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
			var o, r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
			}(o || (o = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case o.Monthly:
							return p.fbt._("{price}/mo", [p.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				h = (e, t) => {
					if (e) switch (t) {
						case o.Monthly:
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
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(d.a, {
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
				const C = r ? o.Monthly : o.Once;
				return s.a.createElement("span", {
					className: Object(i.a)(t, g.a.price)
				}, f && y ? v._("{dollar-price} or {point-price}", [v._param("dollar-price", b(f, C)), v._param("point-price", s.a.createElement(_, {
					subredditId: d,
					pointPrice: b(y, C)
				}))], {
					hk: "2Gif0l"
				}) : f ? h(f, C) : y ? s.a.createElement(_, {
					subredditId: d,
					pointPrice: h(y, C)
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
					o = e.subreddit && e.subreddit.primaryColor;
				return r.a.createElement("div", {
					className: Object(s.a)(n.container, e.className)
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
						backgroundColor: o
					}
				}) : r.a.createElement(i.a, {
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
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
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
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const o = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${i.a.assetPath}/${o}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
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
					src: s
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(i);

			function l(e) {
				const {
					index: t,
					children: n,
					color: o
				} = e, i = o && Object(a.a)(o, void 0, s.b.white);
				return r.a.createElement("div", {
					className: c.a.bullet
				}, r.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: o,
						color: i
					}
				}, r.a.createElement("span", {
					className: c.a.number
				}, t)), r.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/qrcode/lib/browser.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
			t.b = Object(s.a)({
				ErrorComponent: c,
				getComponent: () => Object(a.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
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
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
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
						d.a.publish(l.a, o, e)
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
			var p = Object(s.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.a)(e, t),
					o = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var v = Object(s.b)(() => Object(a.a)(g, b.j, (e, t) => ({
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
					o = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var y = Object(s.b)(() => Object(a.a)(_, e => e))(e => r.a.createElement(p, {
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
			var C = Object(s.b)(() => Object(a.c)({
					subreddit: f.U
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
				E = n("./src/reddit/hooks/usePostContext.ts");
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(E.a)(), s = Object(o.useMemo)(() => ({
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
					data: s
				})
			};
			var x = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: s
				} = Object(E.a)(), a = Object(o.useMemo)(() => ({
					author: t.author,
					isModerator: s,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, s]);
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
				} = Object(E.a)(), s = Object(o.useMemo)(() => ({
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
					data: s
				})
			};
			var k = Object(s.b)(() => Object(a.c)({
				subreddit: f.U
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
			var S = Object(s.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
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
			var O = Object(s.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.U)(e, {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
					className: Object(s.a)(e, l.a.iconStyles)
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
				return re
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = s.a.div("dynamicTwoCol", c.a),
				d = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./src/lib/humanizeDate/index.ts"),
				h = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/lib/timeAgo/index.ts"),
				g = n("./src/reddit/contexts/InsideOverlay.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/selectors/profile.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/tooltip.ts"),
				E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				x = n.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const k = s.a.div("Container", x.a),
				S = s.a.div("Body", x.a),
				O = s.a.h5("Title", x.a),
				P = s.a.span("Label", x.a);
			class N extends r.a.Component {
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
						tooltipId: s
					} = this.props, a = s && o ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return r.a.createElement(k, null, r.a.createElement(O, null, n), r.a.createElement(S, null, e, r.a.createElement(P, w({
						key: "label"
					}, a), t)), s && o && r.a.createElement(E.c, {
						caretOnTop: !0,
						tooltipId: s,
						text: o
					}))
				}
			}
			var I = Object(m.b)(null, e => ({
					toggleTooltip: t => e(Object(C.h)({
						tooltipId: t
					}))
				}))(Object(g.b)(N)),
				A = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				T = n.n(A);
			const M = Object(p.a)(_.j, (e, {
					profileName: t
				}) => Object(y.ub)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				R = s.a.div("Container", T.a);

			function L(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var B = Object(m.b)(M)(Object(g.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: n,
						profileCreated: o,
						isOverlay: s,
						commentKarma: a,
						postKarma: i,
						totalKarma: c,
						subscribers: l
					} = e, d = L(s, "karma"), m = L(s, "cakeday"), p = `${u.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[u.fbt._plural(i,"number",Object(h.b)(i,{displayFull:!0}))],{hk:"husfU"})}\n${u.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[u.fbt._plural(a,"number",Object(h.b)(a,{displayFull:!0}))],{hk:"26iPTL"})}\n${u.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[u.fbt._plural(t,"number",Object(h.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${u.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[u.fbt._plural(n,"number",Object(h.b)(n,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return r.a.createElement(R, null, r.a.createElement(I, {
						icon: r.a.createElement(v.a, {
							name: "karma",
							isFilled: !0,
							className: T.a.icon,
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
					}), r.a.createElement(I, {
						icon: r.a.createElement(v.a, {
							name: "cake",
							isFilled: !0,
							className: T.a.icon,
							key: "cakeDay"
						}),
						label: Object(b.a)(o, !0),
						title: u.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: m,
						tooltip: Object(f.d)(o)
					}), l > 0 && r.a.createElement(I, {
						icon: r.a.createElement(v.a, {
							name: "user",
							isFilled: !0,
							className: T.a.icon,
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
				D = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				F = n.n(D),
				U = n("./src/config.ts"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				W = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				H = n("./src/reddit/controls/OutboundLink/index.tsx"),
				q = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				z = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				V = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				J = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				Y = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				K = n.n(Y),
				Q = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				Z = n.n(Q);
			var X = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: n,
					isDeletingBanner: o,
					isDeletingIcon: s,
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
					url: _
				}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(V.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: g,
					isDeletingBanner: !!o,
					onDeleteBanner: m
				}), r.a.createElement("div", {
					className: K.a.SnooIconWrapper
				}, l || !b || c ? r.a.createElement(q.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				}) : r.a.createElement(H.b, {
					isSponsored: !1,
					href: b,
					source: null
				}, r.a.createElement(q.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				})), t && !n && (s ? r.a.createElement(W.a, {
					sizePx: 20,
					className: Z.a.loadingIcon
				}) : r.a.createElement(v.a, {
					name: "close",
					className: Z.a.closeIcon,
					onClick: p
				}))), !t && l && r.a.createElement(G.a, {
					to: "/settings/profile",
					className: K.a.settingsLink
				}, r.a.createElement(v.a, {
					name: "settings",
					className: Z.a.settingsIcon
				})), h && r.a.createElement("h4", {
					className: K.a.userTitle
				}, h), r.a.createElement(J.a, {
					className: K.a.userName,
					username: g,
					userCreated: f,
					url: _
				}), a && r.a.createElement(v.a, {
					name: "admin",
					isFilled: !0,
					className: K.a.adminIcon,
					title: u.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && r.a.createElement("a", {
					title: u.fbt._("{username} has Reddit Premium", [u.fbt._param("username", g)], {
						hk: "3Fylv"
					}),
					href: `${U.a.redditUrl}/premium`
				}, r.a.createElement(v.a, {
					name: "premium",
					isFilled: !0,
					className: K.a.premiumIcon
				})), l && r.a.createElement(z.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				$ = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var ee = ({
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: n,
				isDefaultIcon: o,
				isDeletingBanner: s,
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
			}) => f ? r.a.createElement($.a, {
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: n,
				isDeletingBanner: s,
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
			}) : r.a.createElement(X, {
				bannerBackgroundImage: e,
				editMode: n,
				isDefaultIcon: o,
				isDeletingBanner: s,
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
			const te = s.a.wrapped(a.b, "Widget", F.a),
				ne = s.a.div("Description", F.a),
				oe = s.a.wrapped(l, "Actions", F.a);
			class re extends r.a.PureComponent {
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
						className: o,
						footer: s,
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
						onClickSnoovatar: C,
						onDeleteIcon: E,
						onDeleteBanner: j,
						prefersReducedAnimations: x,
						editMode: w
					} = this.props;
					return r.a.createElement(te, {
						className: o
					}, r.a.createElement(ee, {
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
						onClickSnoovatar: C,
						onDeleteBanner: j,
						onDeleteIcon: E,
						prefersReducedAnimations: x,
						profileIcon: u,
						title: b,
						userCreated: f,
						username: g,
						url: h,
						snoovatarUrl: p
					}), r.a.createElement(ne, null, m), r.a.createElement(B, {
						profileName: g,
						isOverlay: l
					}), this.renderAwardedLastMonth(), r.a.createElement(oe, null, e), s)
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				u = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = n.n(u);
			class p extends s.a.Component {
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
					} = this.state, p = s.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: r,
						userName: d
					});
					return t && Object(l.e)(t) === d ? s.a.createElement(i.a, {
						altText: o.fbt._("{userName} avatar image", [o.fbt._param("userName", d)], {
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
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
				return r.a.createElement("div", l({}, d, {
					className: Object(s.a)(c.a.container, n)
				}), a ? r.a.createElement("div", {
					className: Object(s.a)(c.a.tooltip, i, o ? c.a.below : c.a.above)
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
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(o.a)({
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				C = p.a.h3("SectionLabel", m.a),
				E = p.a.p("H", m.a),
				j = p.a.p("P", m.a),
				x = p.a.wrapped(l.a, "Input", m.a),
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
			class P extends s.a.Component {
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
						return s.a.createElement(d.k, null, s.a.createElement(E, null, o.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), s.a.createElement(k, null, s.a.createElement("li", null, o.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), s.a.createElement("li", null, o.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && s.a.createElement("li", null, o.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(S).map((e, t) => s.a.createElement("span", {
							key: e
						}, !!t && ", ", s.a.createElement("a", {
							href: S[e],
							target: "_blank"
						}, O[e] && O[e]()))))), s.a.createElement(C, null, o.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), s.a.createElement(y, {
							placeholder: o.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), s.a.createElement(C, null, o.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), s.a.createElement(x, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: o.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), s.a.createElement(x, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: o.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), s.a.createElement(w, null, s.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), s.a.createElement("label", null, o.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), s.a.createElement(_, null, s.a.createElement(v, {
							onClick: e.exit
						}, o.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), s.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, o.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => o.fbt._("{text with URL}", [o.fbt._param("text with URL", t ? s.a.createElement(s.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", s.a.createElement("a", {
						href: S[e],
						target: "_blank"
					}, " ", O[e] && O[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : s.a.createElement(s.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", s.a.createElement("a", {
						href: S[e],
						target: "_blank"
					}, " ", O[e] && O[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => s.a.createElement(d.k, null, s.a.createElement(E, null, o.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), s.a.createElement(j, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), s.a.createElement(_, null, s.a.createElement(g, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, o.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => s.a.createElement(d.k, null, s.a.createElement(E, null, o.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), s.a.createElement(_, null, s.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, o.fbt._("Back", null, {
						hk: "1P3x9"
					})), s.a.createElement(g, {
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
					return s.a.createElement(b, null, s.a.createElement(f, {
						onClick: e.exit
					}, s.a.createElement(d.b, null)), s.a.createElement(d.h, null, s.a.createElement(h, null, o.fbt._("Feed settings", null, {
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
				return s
			}));
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(o.a)({
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
				s = Object(o.a)({
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
				return ee
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/moment/moment.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/gold/productOffers.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/ConfirmModal/index.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/gold/powerups/index.ts")),
				h = n("./src/lib/classNames/index.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/higherOrderComponents/asModal/index.tsx"),
				v = n("./src/reddit/actions/gold/powerups.ts"),
				_ = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				y = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				C = n("./src/reddit/controls/TextButton/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var x = Object(g.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: o,
						subredditInfo: r
					} = e, s = Object(c.d)();
					return i.a.createElement(y.d, {
						className: t
					}, i.a.createElement(y.h, null, i.a.createElement(E.a, null, i.a.createElement(y.p, null, j._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), i.a.createElement(C.a, {
						onClick: o
					}, i.a.createElement(y.b, null)))), i.a.createElement(y.k, null, i.a.createElement(y.o, null, j._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [j._param("subreddit name", r.prefixedName)], {
						hk: "2EKYNO"
					}))), i.a.createElement(y.f, null, i.a.createElement(y.q, {
						onClick: () => {
							n.isPremium ? s(Object(v.g)(r.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : s(Object(_.a)(n.id, r.id, n.allocatedAt)), o()
						},
						"data-redditstyle": !0
					}, j._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				w = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				k = n.n(w);

			function S(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var O = function(e) {
					const [t, n] = Object(a.useState)(!1), {
						className: r,
						allocation: s
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: g
					} = s, v = S(b), _ = S(c), y = S(l), {
						prefixedName: C
					} = p, E = _ ? o.fbt._("Subscribed {date}.", [o.fbt._param("date", _)], {
						hk: "24RAUK"
					}) : "", j = y ? o.fbt._("You can cancel after {date}.", [o.fbt._param("date", y)], {
						hk: "48A2TC"
					}) : "", w = v ? o.fbt._("Will be renewed on {date}.", [o.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", O = v ? o.fbt._("Still active until {date}.", [o.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", P = m ? u ? E : `${E} ${j}` : d ? `${E} ${w}` : `${E} ${O}`, N = m ? o.fbt._("{powerups count} Reddit Premium powerup/monthly", [o.fbt._param("powerups count", g.toLocaleString())], {
						hk: "4iP1Np"
					}) : o.fbt._("{powerups count} powerup/monthly", [o.fbt._param("powerups count", g.toLocaleString())], {
						hk: "11DNVJ"
					}), I = m && u || !m && d;
					return i.a.createElement("div", {
						className: Object(h.a)(r, k.a.container),
						title: P
					}, i.a.createElement("div", {
						className: k.a.allocationName
					}, o.fbt._("{subreddit name} Powerup", [o.fbt._param("subreddit name", C)], {
						hk: "4qAoO"
					})), i.a.createElement("div", {
						className: k.a.details
					}, N), i.a.createElement(f.o, {
						className: k.a.button,
						disabled: !I,
						onClick: () => n(!0)
					}, m || I ? o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : o.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && i.a.createElement(x, {
						withOverlay: !0,
						allocation: s,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				P = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				N = n.n(P);
			var I = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement("div", {
						className: N.a.title
					}, o.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => i.a.createElement(O, {
						allocation: e,
						className: N.a.allocation,
						key: e.allocatedAt
					})))
				},
				A = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				T = n.n(A);

			function M(e) {
				return i.a.createElement("header", {
					className: Object(h.a)(e.className, T.a.container)
				}, i.a.createElement("div", {
					className: T.a.title
				}, o.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), i.a.createElement("div", {
					className: T.a.subtitle
				}, o.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var R = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				L = n.n(R);
			const B = Object(d.c)({
				allocationByKey: b.u
			});
			var D = Object(c.b)(B)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement(M, {
						className: L.a.header
					}), i.a.createElement(I, {
						allocationList: n
					})) : null
				})),
				F = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				U = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				G = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				W = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				H = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/higherOrderComponents/makeAsync.tsx"),
				z = n("./src/lib/loadWithRetries/index.ts"),
				V = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var J = Object(q.a)({
					getComponent: () => Object(z.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(V.d)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Y = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				K = n("./src/reddit/selectors/activeModalId.ts"),
				Q = n("./src/reddit/selectors/gold/productOffers.ts"),
				Z = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/components/Settings/index.m.less"),
				$ = n.n(X);
			const ee = "update_card_modal_id",
				te = Object(d.c)({
					cancelSubscriptionModalIsOpen: Object(K.b)("settings_optout_modal_id"),
					goldExpiration: Z.o,
					hasAndroidSubscription: Z.p,
					hasIOSSubscription: Z.u,
					hasStripeSubscription: Z.y,
					hasPaypalSubscription: Z.w,
					isGold: Z.s,
					isPremiumSubscriber: Z.t,
					premiumProductOfferSubscription: Q.f,
					premiumProductOfferSubscriptionIsCanceled: Q.e,
					updateCardModalIsOpen: Object(K.b)(ee)
				}),
				ne = Object(c.b)(te, e => ({
					navigateToPurchasePremium: () => e(Object(l.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(ee)),
					requestProductOfferSubscriptions: () => e(Object(u.b)()),
					requestCancelProductOfferSubscription: t => e(Object(u.a)(t))
				})),
				oe = (e, t, n) => e && !n ? o.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [o.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : o.fbt._("Your Premium membership is valid until {date}.", [o.fbt._param("date", t)], {
					hk: "4m4zaE"
				});
			class re extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(Y.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(Y.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(Y.f)() : Object(Y.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(Y.g)() : Object(Y.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(Y.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(Y.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(Y.j)()), this.props.requestProductOfferSubscriptions()
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
						hasPaypalSubscription: r,
						hasStripeSubscription: a,
						isGold: c,
						isPremiumSubscriber: l,
						premiumProductOfferSubscription: d,
						premiumProductOfferSubscriptionIsCanceled: u,
						isResponsiveSettingsEnabled: m,
						toggleUpdateCardModal: b,
						updateCardModalIsOpen: h,
						prefs: {
							highlightComments: f,
							hideAds: g
						}
					} = this.props, v = t || n, _ = Boolean(d), y = s()(null == d ? void 0 : d.expiresAt).format("MMMM DD, YYYY.");
					return i.a.createElement(U.a, null, i.a.createElement(F.b, {
						className: $.a.premiumHeading,
						isResponsiveSettingsEnabled: m
					}, o.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), i.a.createElement(F.a, {
						className: $.a.premiumExpirationString
					}, o.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), i.a.createElement(G.a, null, o.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), i.a.createElement(F.a, {
						className: $.a.premiumExpirationString
					}, c ? oe(_, y, u) : o.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!_ || u) && i.a.createElement(W.f, {
						label: c ? o.fbt._("Subscribe", null, {
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
						onClick: b
					}), r && i.a.createElement(W.f, {
						label: o.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), l && !v && !u && i.a.createElement(W.a, {
						label: o.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), c && i.a.createElement(i.a.Fragment, null, i.a.createElement(G.a, null, o.fbt._("premium features", null, {
						hk: "20MX2a"
					})), i.a.createElement(W.o, {
						on: g,
						disabled: !c,
						onClick: this.onHideAdsToggle,
						label: o.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: o.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), i.a.createElement(W.o, {
						on: f,
						disabled: !c,
						onClick: this.onHighlightCommentsToggle,
						label: o.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: o.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), h && i.a.createElement(J, null), e && i.a.createElement(p.a, {
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
			t.b = ne(Object(H.c)(re))
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
						label: o,
						onClick: a,
						onChange: c,
						type: p = "text",
						value: b
					} = this.props;
					return r.a.createElement(m, {
						className: Object(s.a)(t, {
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
					}), r.a.createElement(d, null, o), a && r.a.createElement(u, {
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = a.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...o
				} = e;
				return r.a.createElement(d, l({}, o, {
					className: Object(s.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = a.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
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
						labelClassName: o,
						value: a,
						controlName: i,
						isUploading: c,
						tabIndex: l
					} = this.props;
					return c ? r.a.createElement(s.a, {
						className: e
					}) : r.a.createElement(s.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: o,
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				a = n.n(s),
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
			var o = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx");
			t.a = s.a.h3("Component", r.a)
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
				return Z
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return se
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
				return xe
			})), n.d(t, "c", (function() {
				return we
			})), n.d(t, "e", (function() {
				return ke
			})), n.d(t, "g", (function() {
				return Se
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
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
				return r.a.createElement(E, {
					className: e
				}, r.a.createElement(j, C({
					className: t
				}, n)), r.a.createElement(x, C({
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
				R = n("./src/reddit/models/Flair/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				F = n.n(D);

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
				W = g.a.wrapped(P.a, "Circle", F.a),
				H = g.a.h3("Label", F.a),
				q = g.a.wrapped(S.c, "Subtext", F.a),
				z = g.a.wrapped(m.a, "HoverTooltip", F.a),
				V = g.a.div("ControlContainer", F.a),
				J = g.a.div("TextContainer", F.a),
				Y = g.a.div("ActionContainer", F.a),
				K = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: o,
					isNightModeOn: s,
					disabled: a,
					indent: i,
					last: l,
					...d
				}) => r.a.createElement("div", U({}, d, {
					className: Object(c.a)(F.a.Wrapper, e, {
						[F.a.mColumn]: "column" === t,
						[F.a.mDisabled]: !!a,
						[F.a.mIndent]: !!i,
						[F.a.mLast]: !!l,
						[F.a.isCreateCommunity]: !!n,
						[F.a.inModal]: !!o,
						[F.a.isNightModeOn]: !!s
					})
				})),
				Q = g.a.a("Link", F.a),
				Z = g.a.wrapped(Q, "SubtextLink", F.a),
				X = g.a.wrapped(N.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(O.a, "ArrowRight", F.a),
				te = e => r.a.createElement(K, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(J, {
					className: e.textContainerClassName
				}, r.a.createElement(H, null, e.label, e.isRequired && r.a.createElement(W, null)), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				oe = g.a.wrapped(ne, "SpoilerFlair", F.a),
				re = g.a.wrapped(ne, "NSFWFlair", F.a),
				se = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case R.f.Spoiler:
							return r.a.createElement(oe, null, "SPOILER");
						default:
							return null
					}
				},
				ae = e => {
					const t = Object(a.a)();
					return r.a.createElement(K, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(J, null, r.a.createElement(M.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(H, null, e.label))), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(V, null, e.tooltip && r.a.createElement(z, {
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
					isNightModeOn: B.W
				}),
				pe = Object(s.b)(me)(e => r.a.createElement(K, {
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
				}, !e.inModal && r.a.createElement(M.a, null, r.a.createElement(H, null, e.label)), r.a.createElement(q, null, " ", r.a.createElement(ue, {
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
				be = e => r.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(M.a, null, r.a.createElement(H, null, e.label)), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(V, null, r.a.createElement(T.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => r.a.createElement(K, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(X, null)), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				fe = e => r.a.createElement(K, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(J, null, r.a.createElement($, {
					onClick: e.onClick
				}, e.label), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement($, {
					onClick: e.onClick
				}, r.a.createElement(ee, null)))),
				ge = g.a.div("DropdownWrapper", F.a),
				ve = g.a.wrapped(h.b, "DropdownRow", F.a),
				_e = g.a.span("Row", F.a),
				ye = g.a.wrapped(v.b, "DropdownTriangle", F.a),
				Ce = g.a.div("DescriptionsRow", F.a),
				Ee = Object(i.c)({
					isOpen: (e, t) => Object(L.b)(t.id)(e)
				}),
				je = Object(s.b)(Ee, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(H, null, e.label), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, (e => r.a.createElement(ge, {
					onClick: e.openDropdown
				}, r.a.createElement(_e, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(ye, null), r.a.createElement(G, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(ve, {
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && r.a.createElement(Ce, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				xe = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: s,
					...a
				}) => {
					const i = Object(o.useCallback)(e => s(e.target.value), [s]),
						{
							items: c
						} = a;
					return r.a.createElement(K, {
						disabled: e
					}, r.a.createElement(J, null, r.a.createElement("label", {
						htmlFor: a.id
					}, r.a.createElement(H, {
						className: a.labelClassname
					}, a.label)), r.a.createElement(q, null, a.subtext)), r.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), r.a.createElement(K, {
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
				we = e => r.a.createElement(K, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(J, null, r.a.createElement(H, null, e.label), r.a.createElement(q, null, e.subtext)), r.a.createElement(Y, null, e.children)),
				ke = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(f.a, {
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
				Se = e => r.a.createElement(te, {
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
				}), e.warning && e.warning, !!e.actionLink && r.a.createElement("div", {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
					className: Object(s.a)({
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
				return C
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(r);
			const a = o.a.section("FormPage", s.a),
				i = o.a.h1("HomePageTitle", s.a),
				c = o.a.button("HomePageBreadcrumb", s.a),
				l = o.a.div("HomePageGroup", s.a),
				d = o.a.h1("FormPageTitle", s.a),
				u = o.a.div("FormPageSection", s.a),
				m = o.a.div("FormGroup", s.a),
				p = o.a.h2("FormGroupTitle", s.a),
				b = o.a.div("FormElement", s.a),
				h = o.a.div("FormGroupDescription", s.a),
				f = o.a.div("FormItem", s.a),
				g = o.a.h3("FormElementTitle", s.a),
				v = o.a.div("FormElementDescription", s.a),
				_ = o.a.div("FormElementError", s.a),
				y = o.a.div("FormElementSubGroup", s.a),
				C = o.a.li("FormListItem", s.a)
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
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = o.a.wrapped(r.a, "ModalInput", d.a),
				m = o.a.input("Input", d.a),
				p = o.a.wrapped(c.a, "RadioOn", d.a),
				b = o.a.wrapped(i.a, "RadioOff", d.a),
				h = o.a.wrapped(s.a, "Checkbox", d.a),
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
			var o, r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
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
					className: Object(c.a)(o.className, {
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
					zIndex: m.g
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = s()(() => {
						this.state.sticky || this.forceUnsticky ? x() < w && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : x() >= w && this.setState({
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
					} = this.props, o = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return i.a.createElement(y, {
						className: Object(c.a)(o, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(_, {
						className: Object(c.a)(o, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, j(this.props.icon), this.props.title), i.a.createElement(C, {
						className: Object(c.a)(o, {
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(d);
			const m = a.a.span("UserIconContainer", u.a),
				p = a.a.wrapped(c.a, "UserIcon", u.a),
				b = a.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => s.a.createElement(b, {
				className: e.className,
				to: `${o.a.redditUrl}/user/${e.username}`
			}, s.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, s.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, s.a.createElement(p, {
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
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const l = s.a.div("WidgetBackground", c.a),
				d = s.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const s = {
					[r.U.BEST]: () => o.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.U.HOT]: () => o.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.U.NEW]: () => o.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.U.CONTROVERSIAL]: () => o.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.U.RISING]: () => o.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.U.TOP]: () => o.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.U.AWARDED]: () => o.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = s[e];
					return t && t() || ""
				},
				i = {
					[r.bc.HOUR]: () => o.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.bc.DAY]: () => o.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.bc.WEEK]: () => o.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.bc.MONTH]: () => o.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.bc.YEAR]: () => o.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.bc.ALL]: () => o.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
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
				return k
			})), n.d(t, "c", (function() {
				return S
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(r),
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
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = n("./src/reddit/controls/ErrorText/index.m.less"),
				E = n.n(C);
			const j = Object(u.c)({
				activeModalId: b.a
			});
			class x extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`
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
						errorModalTitle: s = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(m.a)(E.a.wrapper, n)
					}, l.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: s
					}, r || e))
				}
			}
			const w = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(x),
				k = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: r,
						messages: s = []
					} = e, a = s.length ? s : r ? [r] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(w, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				S = e => l.a.createElement(k, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/flow.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
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
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, i)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: c
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
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(p, m({
						innerRef: o
					}, l)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
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
						placeholder: o,
						errors: s = []
					} = this.props;
					return e.map((e, a) => r.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!s[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: o,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, r.a.createElement(l.b, {
						className: u.a.trash
					})), !!s[a] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, s[a])))
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
					const c = !(!!o && n.length >= o) && !i;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
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
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const s = (e, t) => Object(r.a)(e, {
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
				a = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
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
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me`,
					method: "get"
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/stripe-sources/${t}`,
					method: "delete"
				})
			}

			function l(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-sources/${t}`,
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
			var o = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
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
				return Object(a.a)(Object(r.a)(e, [s.a]), {
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
				r = n.n(o),
				s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
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
						return Object(l.a)(e, {
							method: "get",
							endpoint: `${s.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(a.c)(e, t, n),
					[b, h, f, g] = await Promise.all([d, u, m, p]);
				if (b.ok ? o.collections = b.body : o.errors.collections = b.error, h.ok) {
					const e = h.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, g.ok ? (r()(o.badges, g.body.badges), o.userOwnedBadges = g.body.userOwnedBadges) : o.errors.userBadges = g.error, o
			}
			const u = (e, t) => Object(l.a)(e, {
				endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`,
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
				r = n.n(o),
				s = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
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
			const g = (e, t, n, o, s) => {
				const {
					premium: a,
					...i
				} = s, c = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], d = new r.a(c.price).multipliedBy(o).toFixed();
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
				E = (e, t, n, o, r) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: o,
						cancelUrl: r
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
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: o
					}
				}),
				w = (e, t, n, o, r) => Object(f.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: o,
						saveCard: r
					}
				}),
				k = (e, t) => Object(f.a)(e, {
					...s,
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
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(s.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: r.hb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "n", (function() {
				return v
			}));
			var o, r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "Ethereum Main Network";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case o.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "homestead";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "rinkeby";
					case o.ArbitrumRinkeby:
						return 29199749760514
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function l(e) {
				return e === o.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${r.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(o || (o = {}));
			const p = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, n, o) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: o
				});
			async function v(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${r.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				s = n.n(r);
			t.a = Object(o.DragDropContext)(s.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = () => new BroadcastChannel("external_account"),
				r = e => {
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
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new o.BigNumber(e),
					r = new o.BigNumber(t || 1);
				return n.dividedToIntegerBy(r).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function i(e, t) {
				const n = new o.BigNumber(e),
					r = new o.BigNumber(t || 1);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/helpers/location.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "singleCountryList", (function() {
				return r
			})), n.d(t, "allCountryOptions", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					ZZ: "No country identified",
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
					displayName: o[e]
				}],
				s = Object.keys(o).map(e => ({
					value: e,
					displayName: o[e]
				}))
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
			var o = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				s = "|downsized";

			function a(e, t) {
				return r + e + (t ? s : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(r)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function l(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function d(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...d(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return d(e, o.F).map(e => e.id)
			}

			function m(e) {
				return d(e, e => e.e === o.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
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
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...Object(o.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(o.subreddit)(t)
				}),
				s = () => r("view"),
				a = () => r("tap"),
				i = () => r("dismiss"),
				c = () => e => ({
					...Object(o.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				l = () => e => ({
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
			var o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/index.ts"),
				s = n("./src/telemetry/models/Event.ts");
			const a = e => ({
					...o.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(r.a)({
						...a(e),
						action: s.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(r.a)({
						...a(e),
						action: s.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(r.a)({
						...a(e),
						action: s.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(r.a)({
						...a(e),
						action: s.c.Close,
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
					Object(r.a)({
						...m(e, !0),
						action: s.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(r.a)({
						...m(e, !0),
						action: s.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(r.a)({
						...m(e, !1, t),
						action: s.c.Bail,
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
			var o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				s = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => ({
					...o.defaults(e),
					correlationId: Object(a.c)(a.a.PremiumSettings),
					screen: o.screen(e)
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
						type: Object(r.t)(e) ? s.GoldPurchaseType.Cancel : s.GoldPurchaseType.GetPremium
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
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var o, r = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(o || (o = {}));
			const s = e => t => ({
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
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
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
				return s
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, r.a.createElement("path", {
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.circle, e.className),
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", s({
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
				return s
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s(e) {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", c({
				className: Object(s.a)(i.a.dropdown, {
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
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
				return s
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s(e) {
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
			var o, r, s, a;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(o || (o = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var o;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				C = n("./src/reddit/actions/users.ts"),
				E = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				j = n("./src/reddit/components/ConfirmModal/index.tsx"),
				x = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				w = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/actions/accountGender/index.ts"),
				S = n("./src/reddit/actions/meta.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				P = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/helpers/trackers/profileSettings.ts");
			var A = n("./src/reddit/constants/experiments.ts"),
				T = n("./src/reddit/helpers/chooseVariant/index.ts"),
				M = n("./src/reddit/selectors/user.ts");
			const R = Object(c.a)(M.K, M.J, (e, t) => e || t);
			var L = n("./src/reddit/selectors/sso.ts"),
				B = n("./src/lib/validateEmail/index.ts"),
				D = n("./src/reddit/actions/toaster.ts"),
				F = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				U = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				G = n("./src/reddit/icons/svgs/Info/index.tsx"),
				W = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				H = n("./src/reddit/models/Toast/index.ts"),
				q = n("./src/reddit/models/User/index.ts"),
				z = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				V = n.n(z);
			const J = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(M.j)(e);
						return t && Object(q.e)(t) || ""
					}
				}),
				Y = Object(a.b)(J, e => ({
					changeEmail: t => e(Object(C.t)(t)),
					sendResetEmail: t => e(Object(C.w)(t)),
					showErrorToast: t => e(Object(D.f)({
						duration: D.a,
						kind: H.b.Error,
						text: t
					}))
				})),
				K = e => e ? s.a.createElement(U.a, {
					className: Object(u.a)(V.a.image, V.a.success)
				}) : s.a.createElement(W.a, {
					className: Object(u.a)(V.a.image, V.a.error)
				}),
				Q = e => e ? o.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : o.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				Z = e => e ? o.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : o.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				X = e => e ? o.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : o.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				$ = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? s.a.createElement(G.a, {
						className: Object(u.a)(V.a.inputIcon, V.a.error)
					}) : s.a.createElement(U.a, {
						className: Object(u.a)(V.a.inputIcon, V.a.success)
					}) : null
				};
			class ee extends s.a.Component {
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
						} = this.state, s = Object(B.a)(r, !1), a = s ? "" : o.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: a,
							inputChecked: !0
						}), s && (t ? n({
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
					return s.a.createElement("div", {
						className: V.a.container
					}, s.a.createElement("h3", {
						className: V.a.header
					}, o.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), s.a.createElement("div", {
						className: V.a.status
					}, K(e), s.a.createElement("h3", {
						className: V.a.statusText
					}, Z(e))), s.a.createElement("p", {
						className: V.a.description
					}, Q(e)), s.a.createElement("div", {
						className: V.a.actionContainer
					}, s.a.createElement("div", {
						className: V.a.emailContainer
					}, r ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F.a, {
						className: Object(u.a)(V.a.input, V.a[a]),
						label: o.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), $(this.state), s.a.createElement("h6", {
						className: V.a.errorMsg
					}, n)) : s.a.createElement("p", {
						className: V.a.emailText
					}, X(e), s.a.createElement("span", {
						className: V.a.emailAddress
					}, t))), s.a.createElement(P.i, {
						className: V.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? o.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : o.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var te = Y(ee),
				ne = n("./src/higherOrderComponents/asModal/index.tsx"),
				oe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				re = n("./src/reddit/controls/FormFields/index.tsx"),
				se = n("./src/reddit/controls/TextButton/index.tsx"),
				ae = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				ie = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				ce = n.n(ie);
			const le = 50;
			class de extends s.a.Component {
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
						return e.length > 0 && e.length <= le
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
					return s.a.createElement("section", {
						className: Object(u.a)(e, ce.a.container)
					}, s.a.createElement(oe.h, null, s.a.createElement(ae.a, null, s.a.createElement(oe.p, null, o.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), s.a.createElement(se.a, {
						onClick: t,
						disabled: r
					}, s.a.createElement(oe.b, null)))), s.a.createElement(oe.k, null, s.a.createElement(re.b, {
						placeholder: o.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: ce.a.customGenderInput,
						disabled: r,
						maxLength: le,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), s.a.createElement(oe.f, null, s.a.createElement(oe.a, {
						onClick: t,
						disabled: r
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(oe.q, {
						disabled: !this.inputsAreValid() || r,
						onClick: this.handleSubmit
					}, o.fbt._("Confirm", null, {
						hk: "2eSs27"
					}))))
				}
			}
			var ue = Object(ne.a)(de),
				me = n("./src/higherOrderComponents/asTooltip.tsx"),
				pe = n("./src/reddit/actions/tooltip.ts"),
				be = n("./src/reddit/controls/Dropdown/index.tsx"),
				he = n("./src/reddit/controls/Dropdown/Row.tsx"),
				fe = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ge = n("./src/reddit/selectors/tooltip.ts"),
				ve = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				_e = n.n(ve);
			const ye = Object(me.a)(be.a),
				Ce = Object(c.c)({
					isDropdownOpen: (e, t) => Object(ge.b)(t.dropdownId)(e)
				});
			class Ee extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => s.a.createElement(he.b, {
						className: _e.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => s.a.createElement(he.b, {
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
						renderItem: r = this.renderDropdownItem,
						selectedKey: a
					} = this.props, i = n && {
						displayLabel: n,
						key: n
					}, c = t.find(e => e.key === a) || i || t[0];
					return s.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(_e.a.container, e.className),
						onClick: this.onToggleDropdown
					}, s.a.createElement("div", {
						className: _e.a.labelWrapper
					}, o(c), s.a.createElement("span", null, s.a.createElement(fe.b, null))), s.a.createElement(ye, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => r(e, a === e.key))))
				}
			}
			var je, xe = Object(a.b)(Ce, (e, t) => ({
					openDropdown: () => {
						e(Object(pe.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Ee),
				we = n("./src/reddit/components/Settings/shared/Widgets.tsx");
			! function(e) {
				e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
			}(je || (je = {}));
			var ke = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				Se = n.n(ke);
			const Oe = () => [{
				key: je.FEMALE,
				displayText: o.fbt._("Female", null, {
					hk: "G3G7q"
				})
			}, {
				key: je.MALE,
				displayText: o.fbt._("Male", null, {
					hk: "2xBOfQ"
				})
			}, {
				key: je.NON_BINARY,
				displayText: o.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: je.OPT_OUT,
				displayText: o.fbt._("Prefer not to say", null, {
					hk: "48BJY1"
				})
			}, {
				key: je.USER_DEFINED,
				displayLabel: o.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: o.fbt._("I refer to myself as...", null, {
					hk: "3RVNst"
				})
			}];
			class Pe extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isCustomGenderModalOpen: !1,
						pending: !1,
						tmpSelected: this.props.selected
					}, this.onSelect = async e => {
						const {
							onChange: t
						} = this.props, n = e.key;
						if (n === je.USER_DEFINED) return void this.openCustomGenderModal();
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
							genderCategory: je.USER_DEFINED
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
					return s.a.createElement(we.c, {
						label: o.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: o.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, s.a.createElement("div", {
						className: Se.a.wrapper
					}, s.a.createElement(xe, {
						dropdownId: "gender-dropdown-id",
						items: Oe(),
						onSelect: this.onSelect,
						placeholder: o.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && s.a.createElement(ue, {
						onCloseModal: this.closeCustomGenderModal,
						definedGender: a || "",
						onConfirmModal: this.onConfirmModal,
						onOverlayClick: this.closeCustomGenderModal,
						withOverlay: !0
					}))
				}
			}
			var Ne = n("./src/reddit/components/Settings/modalIds.ts"),
				Ie = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Ae = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				Te = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const Me = Object.freeze({
					[Ae.GERMAN_LOCALE]: Object.freeze({
						bcp47: Ae.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.GERMAN_LOCALE),
						rtl: !1
					}),
					[Ae.DEFAULT_LOCALE]: Object.freeze({
						bcp47: Ae.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.DEFAULT_LOCALE),
						rtl: !1
					}),
					[Ae.SPANISH_LOCALE]: Object.freeze({
						bcp47: Ae.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.SPANISH_LOCALE),
						rtl: !1
					}),
					[Ae.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: Ae.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(x.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[Ae.ITALIAN_LOCALE]: Object.freeze({
						bcp47: Ae.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.ITALIAN_LOCALE),
						rtl: !1
					}),
					[Ae.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: Ae.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[Ae.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: Ae.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				Re = {},
				Le = Object.freeze({
					[Ae.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: Ae.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[Ae.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: Ae.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[Ae.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: Ae.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(x.isoLocaleToFbtLocale)(Ae.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				Be = Object(c.a)(M.H, Te.b, (e, t) => e || t ? {
					...Me,
					...Re,
					...Le
				} : Me);
			var De = n("./src/reddit/helpers/location.ts");
			const Fe = Object(c.a)(e => Object(T.c)(e, {
				experimentEligibilitySelector: M.K,
				experimentName: A.A
			}), e => e === A.H.Enabled);
			var Ue = n("./src/reddit/selectors/meta.ts"),
				Ge = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				We = n.n(Ge);
			const He = Object(c.c)({
					gender: e => {
						var t, n;
						return null === (n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.account) || void 0 === n ? void 0 : n.gender
					},
					hasVerifiedEmail: M.A,
					isFPR: M.I,
					language: M.U,
					shouldShowCreatePasswordModal: L.d,
					shouldShowGenderCollection: e => Object(T.c)(e, {
						experimentName: A.hd,
						experimentEligibilitySelector: R
					}) === A.qd.Enabled,
					showLanguageSection: N.d.langSelect,
					availableLocales: Be,
					locale: Ue.i,
					shouldShowCountrySection: Fe,
					country: M.f
				}),
				qe = Object(a.b)(He, e => ({
					changeAccountGender: t => e(Object(k.a)(t)),
					changeLanguage: t => e(Object(S.d)(t)),
					openChangeEmailModal: () => e(Object(y.i)(Ne.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(y.h)(Ne.l)),
					resendEmail: () => e(Object(C.v)())
				})),
				ze = w.a.a("Link", We.a),
				Ve = w.a.div("countryDropdown", We.a),
				Je = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : s.a.createElement(s.a.Fragment, null, o.fbt._("{email} not verified!", [o.fbt._param("email", e)], {
					hk: "3PanQN"
				}), s.a.createElement(P.g, {
					className: We.a.tertiaryBtn,
					onClick: n
				}, o.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : o.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var Ye = qe(({
					changeAccountGender: e,
					changeLanguage: t,
					gender: a,
					isFPR: i,
					language: c,
					openChangeEmailModal: l,
					openSSOCreatePasswordForEmailModal: d,
					shouldShowCreatePasswordModal: u,
					shouldShowGenderCollection: m,
					showLanguageSection: p,
					shouldShowCountrySection: b,
					toggleChangePasswordModal: h,
					availableLocales: f,
					locale: g,
					country: v,
					update: _,
					...y
				}) => {
					const [C, E] = Object(r.useState)(!1), j = Object(r.useCallback)(async e => {
						E(!0), await t(e), E(!1)
					}, [t]), w = Object(O.b)(), k = Object(r.useCallback)(async ({
						definedGender: t,
						genderCategory: n
					}) => {
						w(Object(I.a)()), await e({
							definedGender: t,
							genderCategory: n
						})
					}, [e, w]), [S, P] = Object(r.useState)(f), [N, A] = Object(r.useState)(Object(De.singleCountryList)(v));
					Object(r.useEffect)(() => {
						"" !== c && g in f || P(e => ({
							...e,
							[c]: Object.freeze({
								bcp47: c,
								displayName: c,
								englishName: c,
								fbtLocale: Object(x.isoLocaleToFbtLocale)(c),
								rtl: !1
							})
						}))
					}, [f, c, g]), Object(r.useEffect)(() => {
						(async () => {
							const {
								allCountryOptions: e
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/location.ts"));
							A(e)
						})()
					}, []);
					const T = Object(r.useMemo)(() => (e => Object.entries(e).map(([e, t]) => ({
						value: e,
						displayName: t.displayName
					})))(S), [S]);
					return i ? s.a.createElement(te, {
						email: y.email
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Ie.a, null, o.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), s.a.createElement(we.b, {
						actionText: o.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: o.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							u ? d() : l()
						},
						subtext: Je(y)
					}), !u && s.a.createElement(we.b, {
						actionText: o.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: o.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !m,
						onClick: h,
						subtext: o.fbt._("Password must be at least 8 characters long", null, {
							hk: "3X8DBF"
						})
					}), m && s.a.createElement(Pe, {
						onChange: k,
						selected: a
					}), p ? s.a.createElement(we.h, {
						inputDisabled: C,
						id: "lang",
						items: T,
						labelClassname: We.a.languageSelector,
						label: o.fbt._("Display language {betaLabel}", [o.fbt._param("betaLabel", o.fbt._("{=(beta)}", [o.fbt._param("=(beta)", s.a.createElement("span", {
							className: We.a.betaLabel
						}, o.fbt._("(beta)", null, {
							hk: "1vhAp5"
						})))], {
							hk: "2gBJnB"
						}))], {
							hk: "46Sw4H"
						}),
						onChange: j,
						selected: g,
						subtext: o.fbt._("Select the language you'd like to experience the Reddit interface in. Note that this won't change the language of user-generated content and that this feature is still in development so translations and UI are still under review.", null, {
							hk: "2d65FQ"
						})
					}) : null, b ? s.a.createElement(Ve, null, s.a.createElement(we.h, {
						id: "country",
						items: N,
						label: o.fbt._("Country", null, {
							hk: "1GB5Ra"
						}),
						onChange: e => _(e, "countryCode"),
						selected: v,
						subtext: o.fbt._("This is your primary location. {accountPrefs: language link}", [o.fbt._param("accountPrefs: language link", s.a.createElement(ze, {
							href: "https://www.reddit.com/api/report_redirect?reason_code=COUNTRY_SETTING"
						}, "Learn more"))], {
							hk: "bLreC"
						})
					})) : null)
				}),
				Ke = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				Qe = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				Ze = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				Xe = n("./src/reddit/constants/accountManager.ts"),
				$e = n("./src/reddit/contexts/PageLayer/index.tsx"),
				et = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				tt = n("./src/reddit/selectors/accountManager.ts"),
				nt = n("./src/reddit/selectors/activeModalId.ts"),
				ot = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				rt = n("./src/config.ts"),
				st = n("./src/reddit/helpers/trackers/sso.ts"),
				at = n("./src/reddit/hooks/useTracking.ts"),
				it = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				ct = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				lt = n.n(ct);
			const dt = w.a.wrapped(we.c, "ConnectApple", lt.a),
				ut = w.a.wrapped(P.i, "ConnectAppleButton", lt.a),
				mt = w.a.div("ConnectionInfo", lt.a),
				pt = w.a.wrapped(P.m, "DisconnectButton", lt.a),
				bt = w.a.wrapped(it.a, "AppleIcon", lt.a),
				ht = w.a.span("TextAndIconWrapper", lt.a);

			function ft(e) {
				return e.issuerId ? (() => s.a.createElement(we.c, {
					label: o.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: o.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, s.a.createElement(mt, null, s.a.createElement(pt, {
					onClick: e.onDisconnectClick
				}, "(", o.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[lt.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return s.a.createElement(dt, {
						className: t,
						label: o.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: o.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, s.a.createElement(ut, {
						className: t,
						onClick: e.onConnectClick
					}, s.a.createElement(ht, null, s.a.createElement(bt, null), o.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const gt = Object(c.c)({
				issuerId: L.a,
				shouldShowCreatePasswordModal: L.d
			});
			var vt = Object(a.b)(gt, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(y.h)(Ne.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(y.h)(Ne.j)),
					openLinkAppleSSOModal: () => e(Object(_.f)()),
					openUnlinkAppleSSOModal: () => e(Object(_.k)())
				}))(e => {
					const t = Object(at.a)();
					return s.a.createElement(ft, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(st.c)(st.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(st.d)(st.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				_t = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const yt = w.a.wrapped(we.c, "ConnectGoogle", lt.a),
				Ct = w.a.wrapped(P.i, "ConnectGoogleButton", lt.a),
				Et = w.a.div("ConnectionInfo", lt.a),
				jt = w.a.wrapped(P.m, "DisconnectButton", lt.a),
				xt = w.a.wrapped(_t.a, "GoogleIcon", lt.a),
				wt = w.a.span("TextAndIconWrapper", lt.a);

			function kt(e) {
				return e.hasGoogleIdentity ? (() => s.a.createElement(we.c, {
					label: o.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: o.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, s.a.createElement(Et, null, s.a.createElement(jt, {
					onClick: e.onDisconnectClick
				}, "(", o.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[lt.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return s.a.createElement(yt, {
						className: t,
						label: o.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: o.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, s.a.createElement(Ct, {
						className: t,
						onClick: e.onConnectClick
					}, s.a.createElement(wt, null, s.a.createElement(xt, null), o.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const St = Object(c.c)({
				hasGoogleIdentity: L.b,
				shouldShowCreatePasswordModal: L.d
			});
			var Ot = Object(a.b)(St, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(Ne.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(y.h)(Ne.n)),
					openLinkGoogleSSOModal: () => e(Object(_.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.l)())
				}))(e => {
					const t = Object(at.a)();
					return s.a.createElement(kt, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(st.c)(st.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(st.d)(st.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				Pt = n("./src/reddit/actions/externalAccount.ts"),
				Nt = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				It = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				At = n("./src/reddit/models/ExternalAccount/index.ts");
			const Tt = w.a.wrapped(It.a, "TwitterIcon", lt.a),
				Mt = ({
					isFilled: e,
					...t
				}) => s.a.createElement(Tt, t),
				Rt = w.a.wrapped(Nt.a, "LoadingIcon", lt.a),
				Lt = ({
					isFilled: e,
					...t
				}) => s.a.createElement(Rt, t),
				Bt = w.a.wrapped(we.c, "ConnectTwitter", lt.a),
				Dt = w.a.wrapped(P.m, "DisconnectButton", lt.a),
				Ft = w.a.span("Username", lt.a),
				Ut = w.a.div("ConnectionInfo", lt.a);
			var Gt = n("./src/reddit/selectors/externalAccount.ts");
			const Wt = Object(c.c)({
					twitterAccount: Gt.a,
					isTwitterConnectionPending: Gt.b
				}),
				Ht = Object(a.b)(Wt, e => ({
					onConnectAccount: t => {
						e(Pt.m(t)), t === At.a.Twitter && e((e, t) => I.c(t()))
					},
					onDisconnectAccount: t => {
						e(Pt.n(t)), t === At.a.Twitter && e((e, t) => I.e(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => I.f(n(), t))
				}));
			var qt = Object($e.t)()(Ht((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(At.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(At.a.Twitter)
					};
				return s.a.createElement(r.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return s.a.createElement(we.c, {
						label: o.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: o.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, s.a.createElement(Ut, null, s.a.createElement("div", null, s.a.createElement(Ft, null, "@", t.username)), s.a.createElement(Dt, {
						onClick: n
					}, "(", o.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: r
					} = e, a = Object(u.a)({
						[lt.a["m-responsive"]]: n
					}), i = o.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return s.a.createElement(Bt, {
						className: a,
						label: o.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: o.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, s.a.createElement(P.q, {
						className: lt.a.ConnectTwitterButton,
						Icon: r ? Lt : Mt,
						text: r ? null : i,
						onClick: t
					}))
				})(), s.a.createElement(we.o, {
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
			var zt = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return s.a.createElement(r.Fragment, null, s.a.createElement(Ie.a, {
					id: "connected-accounts"
				}, o.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), s.a.createElement(qt, e), (() => {
					if (e.shouldRenderSSOAccounts) return s.a.createElement(r.Fragment, null, s.a.createElement(vt, {
						isResponsiveSettingsEnabled: t
					}), s.a.createElement(Ot, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function Vt() {
				return (Vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Jt = Object(c.c)({
				isEmployee: M.H
			});
			var Yt = Object(a.b)(Jt)(e => {
					const t = !e.isEmployee;
					return s.a.createElement(zt, Vt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				Kt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Qt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				Zt = n.n(Qt);
			const Xt = w.a.wrapped(ot.b, "Trash", Zt.a),
				$t = w.a.wrapped(Ie.a, "BetaTestsHeading", Zt.a),
				en = w.a.wrapped(we.o, "InBetaToggle", Zt.a),
				tn = w.a.wrapped(we.o, "InRedesignBetaToggle", Zt.a),
				nn = w.a.button("DeactivateButton", Zt.a),
				on = w.a.div("DeactivateWrapper", Zt.a),
				rn = Object(c.c)({
					changePasswordHref: (e, t) => Object(tt.c)(e, {
						pageLayer: t.pageLayer,
						path: Xe.c.ChangePassword
					}),
					deactivateModalOpen: Object(nt.b)("deactivate_modal_id"),
					email: M.m,
					hasGoogleIdentity: L.b,
					inRedesignBeta: M.E,
					optoutModalOpen: Object(nt.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: L.d,
					user: M.j
				}),
				sn = Object(a.b)(rn, (e, t) => ({
					deactivate: t => {
						e(Object(C.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(Ne.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: rt.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${rt.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(C.v)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class an extends s.a.Component {
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
						}, Object(et.a)()))
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
						[Zt.a["m-responsive"]]: a
					}), v = Object(u.a)({
						[Zt.a.ResponsiveOverlay]: a
					});
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Ze.a, null, s.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: a
					}, o.fbt._("Account settings", null, {
						hk: "2faClM"
					})), s.a.createElement(Ye, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow,
						update: h
					}), s.a.createElement(Yt, this.props), s.a.createElement($t, {
						className: g
					}, o.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), s.a.createElement(en, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: o.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: o.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), s.a.createElement(tn, {
						className: g,
						on: !r,
						onClick: b,
						label: o.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: o.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), s.a.createElement(Ie.a, null, o.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), s.a.createElement(on, null, s.a.createElement(nn, {
						onClick: this.deactivateAccount
					}, s.a.createElement(Xt, null), o.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && s.a.createElement(j.a, {
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
					}), e && s.a.createElement(Kt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && s.a.createElement(Ke.a, {
						isResponsiveSettingsEnabled: a
					})), n && s.a.createElement(E.a, {
						className: Zt.a.googleDisconnectIFrame,
						pageLayer: l,
						path: Xe.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var cn = Object($e.t)()(sn(an)),
				ln = n("./src/reddit/reducers/user/prefs/index.ts"),
				dn = n("./src/reddit/actions/chat/constants.ts"),
				un = n("./src/reddit/actions/chat/userSettings.ts"),
				mn = n("./src/reddit/actions/userBlocks.ts"),
				pn = n("./src/reddit/actions/userWhitelist.ts"),
				bn = n("./src/lib/timeAgo/index.ts"),
				hn = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				fn = n("./src/reddit/components/Hovercards/helpers.ts"),
				gn = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				vn = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				_n = n.n(vn);
			const {
				fbt: yn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Cn = w.a.p("Date", _n.a), En = w.a.wrapped(gn.a, "UserNameAndIcon", _n.a), jn = w.a.button("Button", _n.a), xn = w.a.div("ButtonWrapper", _n.a);
			var wn = w.a.wrapped(e => s.a.createElement("div", {
					className: e.className
				}, s.a.createElement(En, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(fn.b)({
						author: e.name,
						tooltipIdPrefix: hn.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), s.a.createElement(Cn, null, Object(bn.d)(e.date / 1e3)), s.a.createElement(xn, null, s.a.createElement(jn, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, yn._("Remove", null, {
					hk: "1rZWA4"
				})))), "Component", _n.a),
				kn = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				Sn = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				On = n.n(Sn);
			const Pn = 5,
				Nn = w.a.h4("ListHeading", On.a),
				In = w.a.div("ListBox", On.a),
				An = w.a.div("MoreWrapper", On.a),
				Tn = w.a.button("MoreButton", On.a),
				Mn = w.a.wrapped(we.m, "Subtext", On.a);
			class Rn extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === kn.a.pending && this.props.api.new === kn.a.waitingForRequest && this.setState({
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
					return s.a.createElement("div", {
						className: Object(u.a)(On.a.container, n, {
							[On.a.mPadBottom]: !!i
						})
					}, s.a.createElement(Nn, null, m), void 0 !== p && s.a.createElement(Mn, null, p), s.a.createElement(F.a, {
						buttonText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: r.new === kn.a.pending,
						label: d,
						onClick: () => t && a(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), s.a.createElement(In, null, l.slice(0, b).map(e => s.a.createElement(wn, {
						disabled: r[e.name] === kn.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Pn && !e ? s.a.createElement(An, null, s.a.createElement(Tn, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, o.fbt._("Show all", null, {
						hk: "W1Cyk"
					}))) : null))
				}
			}
			var Ln = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Bn = n.n(Ln);
			const Dn = {
					[ln.b.Whitelisted]: () => o.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[ln.b.Everyone]: () => o.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				Fn = e => {
					const t = Dn[e];
					return t && t()
				},
				Un = w.a.div("ListsWrapper", Bn.a),
				Gn = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Wn = Object(a.b)(Gn, (e, t) => ({
					addBlocked: t => e(Object(mn.h)(t)),
					addWhitelisted: t => e(Object(pn.g)(t)),
					removeWhitelisted: t => e(Object(pn.h)(t)),
					removeBlocked: t => e(Object(mn.g)(t)),
					saveChatSettings: t => e(Object(un.c)(t))
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
					const d = Object.entries(ln.b).filter(e => e[1] === n)[0][0],
						u = Object(dn.b)(t.invitePolicy),
						m = [dn.a.anybody, dn.a.account_age_30_days, dn.a.nobody],
						p = [Object(dn.b)(dn.a.anybody), Object(dn.b)(dn.a.account_age_30_days), Object(dn.b)(dn.a.nobody)],
						b = Fn(d),
						h = Fn(n),
						f = [ln.b.Everyone, ln.b.Whitelisted],
						g = [Fn(ln.b.Everyone), Fn(ln.b.Whitelisted)];
					return s.a.createElement(Ze.a, null, s.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: !1
					}, o.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), s.a.createElement(we.d, {
						label: o.fbt._("Who can send you chat requests", null, {
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
					}), s.a.createElement(we.d, {
						label: o.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: o.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not approved.", null, {
							hk: "48t4Ee"
						}),
						items: f,
						displayItems: g,
						selected: h,
						displayTitle: b,
						onClick: e => i(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (t.invitePolicy !== dn.a.anybody || n === ln.b.Whitelisted) && s.a.createElement(Un, null, s.a.createElement(Rn, {
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
						remove: r,
						list: c,
						api: l
					})))
				}),
				Hn = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				qn = n.n(Hn);

			function zn(e) {
				return s.a.createElement("header", {
					className: Object(u.a)(qn.a.container, e.className)
				}, s.a.createElement("div", {
					className: qn.a.title
				}, o.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), s.a.createElement("div", {
					className: qn.a.tag
				}, o.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var Vn = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				Jn = n("./src/reddit/contexts/ApiContext.tsx"),
				Yn = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Kn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Qn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Zn = n("./src/reddit/selectors/economics.ts"),
				Xn = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				$n = n.n(Xn);
			const {
				fbt: eo
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var to;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(to || (to = {}));
			class no extends s.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(Yn.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = to.Default;
					e.connectCode && e.connectStateToken && (t = to.Connecting), e.stripeConnected && (t = to.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== to.Connected) {
						const e = await Object(Yn.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: to.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: to.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = eo._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === to.Connected && (n = eo._("connect", null, {
						hk: "22jQRU"
					})), t === to.Connecting && (n = eo._("connecting...", null, {
						hk: "3ccNPc"
					})), s.a.createElement("div", {
						className: e
					}, s.a.createElement(Ie.a, null, eo._("accept tips", null, {
						hk: "1kEl0R"
					})), s.a.createElement(we.k, {
						direction: "row",
						label: eo._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: eo._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, s.a.createElement("div", {
						className: $n.a.cta
					}, s.a.createElement(P.i, {
						className: $n.a.button,
						disabled: t !== to.Default,
						onClick: this.initiateStripeConnect
					}, n), s.a.createElement("div", {
						className: $n.a.legal
					}, eo._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [eo._param("Previews Terms of Service", s.a.createElement(Vn.a, {
						className: $n.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), s.a.createElement("div", {
						className: $n.a.disclaimer
					}, s.a.createElement(Qn.a, {
						className: $n.a.icon
					}), eo._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const oo = Object(c.c)({
					stripeConnected: Zn.u
				}),
				ro = Object(a.b)(oo, e => ({
					onError: t => e(Object(D.f)({
						duration: 5e3,
						kind: H.b.Error,
						text: Object(Kn.a)(t)
					}))
				}));
			var so = Object(Jn.b)(ro(no)),
				ao = n("./src/reddit/components/Settings/Creator/index.m.less"),
				io = n.n(ao);

			function co(e) {
				return s.a.createElement(Ze.a, null, s.a.createElement("div", null, s.a.createElement(zn, {
					className: io.a.header
				}), s.a.createElement(so, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var lo = n("./src/lib/listingSort/index.ts"),
				uo = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				mo = n("./src/reddit/constants/listingSorts.ts");
			const po = [m.U.HOT, m.U.NEW, m.U.TOP, m.U.RISING];
			var bo = e => {
				const {
					dropdownId: t
				} = e, n = po.map(e => ({
					key: e,
					displayText: Object(mo.a)(e),
					icon: s.a.createElement(uo.a, {
						sort: e
					})
				}));
				return s.a.createElement(xe, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const ho = [m.bc.HOUR, m.bc.DAY, m.bc.WEEK, m.bc.MONTH, m.bc.YEAR, m.bc.ALL];
			var fo = e => {
					const {
						dropdownId: t
					} = e, n = ho.map(e => ({
						key: e,
						displayText: Object(mo.b)(e)
					}));
					return s.a.createElement(xe, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				go = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				vo = n.n(go);
			const _o = w.a.div("Separator", vo.a);
			class yo extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(lo.d)(this.props.fullSort);
						this.props.onChange(Object(lo.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(lo.d)(this.props.fullSort);
						this.props.onChange(Object(lo.c)({
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
					} = Object(lo.d)(t);
					return s.a.createElement(we.c, {
						className: e,
						label: o.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: o.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, s.a.createElement("div", {
						className: vo.a.wrapper
					}, s.a.createElement(bo, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: r
					}), a && s.a.createElement(s.a.Fragment, null, s.a.createElement(_o, null), s.a.createElement(fo, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: a
					}))))
				}
			}
			var Co = n("./src/reddit/constants/postLayout.ts"),
				Eo = n("./src/reddit/icons/fonts/index.tsx"),
				jo = n("./src/reddit/controls/Dropdown/index.m.less"),
				xo = n.n(jo);
			const wo = {
				[Co.d.Card]: Object(Eo.b)("view_card"),
				[Co.d.Classic]: Object(Eo.b)("view_classic"),
				[Co.d.Compact]: Object(Eo.b)("view_compact")
			};

			function ko(e) {
				const t = wo[e.layout];
				return s.a.createElement(t, {
					className: xo.a.iconStyles
				})
			}
			const So = [Co.d.Card, Co.d.Classic, Co.d.Compact];
			var Oo = e => {
					const {
						dropdownId: t
					} = e, n = So.map(e => ({
						key: e,
						displayText: Object(Co.h)(e),
						icon: s.a.createElement(ko, {
							layout: e
						})
					}));
					return s.a.createElement(xe, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				Po = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				No = n.n(Po);
			class Io extends s.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: o,
						layout: r
					} = this.props;
					return s.a.createElement(we.c, {
						className: e,
						label: n,
						subtext: o
					}, s.a.createElement("div", {
						className: No.a.wrapper
					}, s.a.createElement(Oo, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: r
					})))
				}
			}
			var Ao = n("./src/reddit/components/Settings/FeedForm.m.less"),
				To = n.n(Ao);

			function Mo({
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
					[To.a["m-responsive"]]: e
				});
				return s.a.createElement(Ze.a, null, s.a.createElement(Qe.b, {
					isResponsiveSettingsEnabled: e
				}, o.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), s.a.createElement(Ie.a, null, o.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), s.a.createElement(we.o, {
					on: a,
					onClick: () => f(!a, "over18"),
					label: o.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: o.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), s.a.createElement(we.o, {
					disabled: !a,
					label: o.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!a && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: o.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), s.a.createElement(we.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: o.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: o.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), s.a.createElement(we.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: o.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: o.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), s.a.createElement(we.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: o.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: o.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), s.a.createElement(yo, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), s.a.createElement(we.o, {
					className: g,
					indent: !0,
					on: !!l,
					onClick: () => f(!l, "rememberCommunitySort"),
					label: o.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: o.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), s.a.createElement(Io, {
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
				}), s.a.createElement(we.o, {
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
				}), s.a.createElement(we.o, {
					className: g,
					on: !!r,
					onClick: () => f(!r, "openPostInNewTab"),
					label: o.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: o.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), s.a.createElement(Ie.a, {
					className: g
				}, o.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), s.a.createElement(we.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: o.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: o.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && s.a.createElement(s.a.Fragment, null, s.a.createElement(Ie.a, null, o.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), s.a.createElement(we.f, {
					label: o.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: o.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${rt.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var Ro = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				Lo = n("./src/reddit/helpers/trackers/notifications.ts"),
				Bo = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				Do = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Fo = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				Uo = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				Go = n.n(Uo);
			var Wo = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [a, i] = Object(r.useState)(Fo.a.Push), c = Object(at.a)(), l = a === Fo.a.Push, d = a === Fo.a.Email;
					return s.a.createElement(Ze.a, null, s.a.createElement("nav", {
						className: Go.a.nav
					}, s.a.createElement("button", {
						onClick: () => {
							i(l ? Fo.a.Email : Fo.a.Push)
						}
					}, s.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: e
					}, d && s.a.createElement(Bo.a, {
						className: Go.a.arrowLeft
					}), l ? o.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : o.fbt._("Back", null, {
						hk: "26R5gK"
					}), l && s.a.createElement(Do.a, {
						className: Go.a.arrowRight
					})))), s.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: e
					}, l ? o.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : o.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					})), l ? s.a.createElement(Ro.b, null) : s.a.createElement(s.a.Fragment, null, s.a.createElement(Ro.a, null), s.a.createElement(Ie.a, null), s.a.createElement(we.o, {
						on: !!t,
						onClick: () => {
							c(Object(Lo.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: o.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})))
				},
				Ho = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				qo = n.n(Ho);

			function zo(e) {
				return s.a.createElement("header", {
					className: Object(u.a)(qo.a.container, e.className)
				}, s.a.createElement("div", {
					className: qo.a.title
				}, o.fbt._("Payments", null, {
					hk: "rydT0"
				})), s.a.createElement("div", {
					className: qo.a.description
				}, o.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var Vo = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Jo = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Yo = n("./src/reddit/models/Payments/index.ts"),
				Ko = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Qo = n.n(Ko);
			class Zo extends s.a.Component {
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
						const t = e.type === Yo.a.SavedStripe ? await Object(Yn.b)(this.props.apiContext(), e.id) : await Object(Yn.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: {
								...t.paymentsBeingRemoved,
								[e.id]: !1
							}
						}))
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className
					}, s.a.createElement(Ie.a, null, o.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return s.a.createElement("div", {
							className: Qo.a.payment,
							key: e.id
						}, s.a.createElement("div", {
							className: Qo.a.paymentDisplay
						}, s.a.createElement(Jo.a, {
							className: Qo.a.lock
						}), e.display), s.a.createElement(P.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? o.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : o.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && s.a.createElement("div", {
						className: Qo.a.noSavedPayment
					}, o.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Xo = Object(c.c)({
					savedPayments: Zn.p
				}),
				$o = Object(a.b)(Xo, e => ({
					onError: t => e(Object(D.f)({
						duration: 5e3,
						kind: H.b.Error,
						text: Object(Kn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Yo.a.SavedStripe && e(Object(Vo.a)({
							cardId: t.id
						})), t.type === Yo.a.SavedPayPal && e(Object(Vo.e)({
							sourceId: t.id
						}))
					}
				}));
			var er = Object(Jn.b)($o(Zo)),
				tr = n("./src/reddit/components/Settings/Payments/index.m.less"),
				nr = n.n(tr);
			var or = () => s.a.createElement(Ze.a, null, s.a.createElement(zo, {
					className: nr.a.header
				}), s.a.createElement(er, null)),
				rr = n("./src/reddit/components/Settings/PremiumForm.tsx");
			const sr = Object(c.a)(e => Object(T.c)(e, {
					experimentEligibilitySelector: T.a,
					experimentName: A.h
				}), e => e === A.c.Enabled),
				ar = Object(c.a)(e => Object(T.c)(e, {
					experimentEligibilitySelector: T.a,
					experimentName: A.f
				}), e => e === A.a.Enabled),
				ir = w.a.span("SubheaderLink", Bn.a),
				cr = w.a.button("GenerateBackupCodesButton", Bn.a),
				lr = w.a.wrapped(we.f, "ThirdPartyAuth", Bn.a),
				dr = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: N.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: L.d,
					shouldConsolidateAdsPreferences: ar,
					shouldRemoveAdsPreferences: sr
				}),
				ur = Object(a.b)(dr, (e, t) => ({
					addBlocked: t => e(Object(mn.h)(t)),
					addWhitelisted: t => e(Object(pn.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(y.h)(Ne.h)),
					removeWhitelisted: t => e(Object(pn.h)(t)),
					removeBlocked: t => e(Object(mn.g)(t)),
					saveChatSettings: t => e(Object(un.c)(t)),
					enable2FA: () => e(Object(_.d)()),
					disable2FA: () => e(Object(_.c)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var mr = ur(({
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
					update: C,
					shouldShowLocationBasedSetting: E,
					shouldShowCreatePasswordModal: j,
					shouldConsolidateAdsPreferences: x,
					shouldRemoveAdsPreferences: w
				}) => s.a.createElement(Ze.a, null, s.a.createElement(Qe.b, {
					isResponsiveSettingsEnabled: v
				}, o.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), s.a.createElement(Qe.a, null, o.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [o.fbt._param("=Privacy & Security FAQs", s.a.createElement(ir, null, o.fbt._("{=Privacy & Security FAQs}", [o.fbt._param("=Privacy & Security FAQs", s.a.createElement("a", {
					href: `${rt.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, o.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), s.a.createElement(Ie.a, null, o.fbt._("Safety", null, {
					hk: "WyYmF"
				})), s.a.createElement(Rn, {
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
				}), x ? ((e, t, n, r, a, i, c, l, d, u, m) => s.a.createElement(s.a.Fragment, null, s.a.createElement(Ie.a, null, o.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), s.a.createElement(we.o, {
					on: !e,
					onClick: () => r(!e, "hideFromRobots"),
					label: o.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: o.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && s.a.createElement(we.o, {
					on: t,
					onClick: () => r(!t, "allowClickTracking"),
					label: o.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: o.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && s.a.createElement(we.o, {
					on: n,
					onClick: () => r(!n, "activityRelevantAds"),
					label: o.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: o.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), !u && s.a.createElement(we.o, {
					on: d,
					onClick: () => r(!d, "thirdPartySiteDataPersonalizedContent"),
					label: o.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), s.a.createElement(Ie.a, null, o.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && s.a.createElement(we.o, {
					on: l,
					onClick: () => r(!l, "showLocationBasedRecommendations"),
					label: o.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: o.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), s.a.createElement(Ie.a, null, o.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), s.a.createElement(we.o, {
					on: m,
					onClick: () => r(!m, "thirdPartyPersonalizedAds"),
					label: o.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(a, r, i, C, 0, E, 0, p, m, w, b) : ((e, t, n, r, a, i, c, l, d, u) => s.a.createElement(s.a.Fragment, null, s.a.createElement(Ie.a, null, o.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), s.a.createElement(we.o, {
					on: !e,
					onClick: () => r(!e, "hideFromRobots"),
					label: o.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: o.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && s.a.createElement(we.o, {
					on: t,
					onClick: () => r(!t, "allowClickTracking"),
					label: o.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: o.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && s.a.createElement(we.o, {
					on: n,
					onClick: () => r(!n, "activityRelevantAds"),
					label: o.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: o.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), s.a.createElement(we.o, {
					on: a,
					onClick: () => r(!a, "thirdPartyDataPersonalizedAds"),
					label: o.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: o.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), s.a.createElement(we.o, {
					on: c,
					onClick: () => r(!c, "thirdPartySiteDataPersonalizedAds"),
					label: o.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && s.a.createElement(we.o, {
					on: l,
					onClick: () => r(!l, "showLocationBasedRecommendations"),
					label: o.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: o.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && s.a.createElement(we.o, {
					on: d,
					onClick: () => r(!d, "thirdPartySiteDataPersonalizedContent"),
					label: o.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: o.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(a, r, i, C, l, E, d, p, m, w), s.a.createElement(Ie.a, null, o.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), s.a.createElement(we.o, {
					on: c,
					onClick: () => {
						j ? _() : c ? f() : h()
					},
					label: o.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: s.a.createElement(s.a.Fragment, null, o.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && s.a.createElement(s.a.Fragment, null, " ", o.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", s.a.createElement(cr, {
						type: "button",
						onClick: () => g()
					}, o.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), s.a.createElement(lr, {
					className: Object(u.a)({
						[Bn.a["m-responsive"]]: v
					}),
					label: o.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${rt.a.redditUrl}/prefs/apps`,
					last: !0
				}), j && s.a.createElement(Ke.a, {
					isResponsiveSettingsEnabled: v
				}))),
				pr = n("./src/reddit/actions/preferences.ts"),
				br = n("./src/reddit/actions/snoovatar.ts"),
				hr = n("./src/reddit/components/Loader/index.m.less"),
				fr = n.n(hr);
			class gr extends s.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: o
					} = this.props;
					return e ? n ? n() : s.a.createElement(Nt.a, {
						center: !0,
						className: fr.a.loadingIcon,
						sizePx: o || 10
					}) : t()
				}
			}
			var vr = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				_r = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				yr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Cr = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Er = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				jr = n("./src/reddit/selectors/structuredStyles.ts"),
				xr = n("./src/reddit/selectors/subredditSettings.ts"),
				wr = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				kr = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				Sr = n.n(kr);
			const {
				fbt: Or
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pr = 30, Nr = 200, Ir = Object(c.a)(M.j, xr.a, M.vb, jr.n, nt.a, (e, t, n, o, r) => {
				const s = e && e.profileId,
					a = s && o[s] ? o[s].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(q.e)(e),
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
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === r
				}
			}), Ar = w.a.div("ImageUploaderLayout", Sr.a), Tr = w.a.wrapped(wr.a, "IconImageUploader", Sr.a), Mr = w.a.wrapped(yr.a, "ProfileIcon", Sr.a), Rr = w.a.wrapped(wr.a, "BannerImageUploader", Sr.a), Lr = w.a.wrapped(_r.a, "ProfileBanner", Sr.a), Br = w.a.div("ProfileModerationContent", Sr.a), Dr = w.a.wrapped(Er.a, "PlusCircle", Sr.a), Fr = w.a.span("LabelText", Sr.a), Ur = w.a.span("ImageType", Sr.a), Gr = w.a.a("Link", Sr.a), Wr = w.a.img("DummyBanner", Sr.a), Hr = w.a.wrapped(vr.a, "Preview", Sr.a);
			class qr extends s.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(I.i)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(I.i)(this.props.over18))
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
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(I.b)(this.props.showActiveCommunities))
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
						currentUserName: o,
						currentUserUrl: r,
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
						profileBannerUploading: C,
						profileIconUploading: E,
						publicDescription: x,
						title: w
					} = this.state, k = Object(u.a)({
						[Sr.a["m-responsive"]]: l
					}), S = !!h && !Object(Cr.c)(h);
					return s.a.createElement(Ze.a, {
						sidebar: s.a.createElement(Hr, {
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
							publicDescription: x,
							snoovatarUrl: g,
							recentAwardings: e,
							title: w,
							url: r,
							userCreated: n,
							username: o
						})
					}, s.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: l
					}, Or._("Customize profile", null, {
						hk: "1fenXK"
					})), s.a.createElement(Ie.a, null, Or._("Profile Information", null, {
						hk: "3vzAUk"
					})), s.a.createElement(we.e, {
						label: Or._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							w !== this.props.title && this.updateProfile(w, "title")
						},
						placeholder: Or._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: Pr,
						subtext: Or._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: w
					}), s.a.createElement(we.g, {
						label: Or._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							x !== this.props.publicDescription && this.updateProfile(x, "publicDescription")
						},
						placeholder: Or._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: Nr,
						subtext: Or._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: x
					}), s.a.createElement(Ie.a, null, Or._("Images", null, {
						hk: "38DOkf"
					})), s.a.createElement(we.k, {
						label: Or._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: Or._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, s.a.createElement(Ar, {
						className: Object(u.a)(k)
					}, S ? s.a.createElement(Mr, {
						className: k,
						iconUrl: h,
						isNSFW: !1,
						userName: o
					}) : s.a.createElement(Tr, {
						className: k,
						controlName: "profileIcon",
						icon: s.a.createElement(Dr, null),
						isUploading: E,
						label: s.a.createElement(Fr, null, Or._("Drag and Drop or Upload {=Avatar} Image", [Or._param("=Avatar", s.a.createElement(Ur, null, Or._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: Sr.a.Label,
						onChange: this.onIconChange
					}), b ? s.a.createElement(Lr, {
						bannerUrl: b,
						className: k,
						isNSFW: !1,
						userName: o
					}) : s.a.createElement(Rr, {
						className: k,
						controlName: "profileBanner",
						icon: s.a.createElement(Dr, null),
						isUploading: C,
						label: s.a.createElement(Fr, null, Or._("Drag and Drop or Upload {=Banner} Image", [Or._param("=Banner", s.a.createElement(Ur, null, Or._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: Sr.a.Label,
						onChange: this.onBannerChange
					}))), s.a.createElement(Ie.a, null, Or._("Profile category", null, {
						hk: "1YRE6p"
					})), s.a.createElement(we.o, {
						label: Or._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: m,
						subtext: Or._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), s.a.createElement(Ie.a, null, Or._("Advanced", null, {
						hk: "1US2Ur"
					})), s.a.createElement(we.o, {
						label: Or._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: Or._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [Or._param("profileForm: r/all link", s.a.createElement(Gr, {
							href: "/r/all"
						}, "r/all")), Or._param("profileForm: /users link", s.a.createElement(Gr, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), s.a.createElement(we.o, {
						label: Or._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: Or._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: f,
						onClick: this.onShowActiveCommunitiesChange
					}), s.a.createElement(Ie.a, null, Or._("Profile moderation", null, {
						hk: "3vDS8h"
					})), s.a.createElement(Br, null, Or._("For moderation tools please visit our {=Profile Moderation page}", [Or._param("=Profile Moderation page", s.a.createElement(Gr, {
						href: `/user/${o}/about/edit/moderation`
					}, Or._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), c && s.a.createElement(j.a, {
						headerText: Or._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: Or._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [Or._param("=NSFW content", s.a.createElement(Gr, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, Or._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: Or._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: Or._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: v,
						onOverlayClick: v,
						overlayClassName: Object(u.a)({
							[Sr.a.ResponsiveOverlay]: l
						}),
						withOverlay: !0
					}), s.a.createElement(Wr, {
						src: b
					}))
				}
			}
			const zr = Object(a.b)(Ir, e => ({
					imageDeleteRequested: t => e(Object(pr.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(pr.z)(t, n)),
					onClickSnoovatar: () => e(Object(br.b)("profile_overview")),
					save: (t, n) => e(Object(pr.E)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(O.c)(qr)),
				Vr = Object(c.c)({
					isLoading: e => !Object(xr.a)(e)
				}),
				Jr = Object(a.b)(Vr)(gr);

			function Yr(e) {
				return s.a.createElement(Jr, {
					loaderSize: 50,
					render: () => s.a.createElement(zr, e)
				})
			}
			var Kr = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Qr = n.n(Kr);

			function Zr(e) {
				return s.a.createElement("header", {
					className: e.className
				}, s.a.createElement("div", {
					className: Qr.a.title
				}, o.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), s.a.createElement("div", {
					className: Qr.a.subtitle
				}, o.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var Xr = n("./src/reddit/actions/governance/communityDetails.ts"),
				$r = n("./src/lib/addQueryParams/index.ts"),
				es = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				ts = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				ns = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				os = n.n(ns);
			const {
				fbt: rs
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ss = Object(c.c)({
				userId: e => {
					const t = Object(M.j)(e);
					return t ? t.id : ""
				}
			});
			var as = Object(a.b)(ss)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, o = t.primaryColor, r = Object($r.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return s.a.createElement("div", {
						className: os.a.body
					}, s.a.createElement("section", {
						className: os.a.leftSection
					}, s.a.createElement("div", {
						className: os.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), s.a.createElement("div", {
						className: os.a.content
					}, s.a.createElement(es.a, {
						index: "1",
						color: o
					}, rs._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), s.a.createElement(es.a, {
						index: "2",
						color: o
					}, rs._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), s.a.createElement(es.a, {
						index: "3",
						color: o
					}, rs._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), s.a.createElement("section", {
						className: os.a.rightSection
					}, s.a.createElement(ts.a, {
						url: r,
						scale: 4
					})))
				})),
				is = n("./src/reddit/constants/colors.ts"),
				cs = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				ls = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				ds = n("./src/reddit/icons/svgs/Close/index.tsx"),
				us = n("./src/reddit/components/Economics/Price/index.tsx"),
				ms = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				ps = n("./src/lib/currency/centsToDollars/index.ts"),
				bs = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				hs = n.n(bs);
			const fs = [() => o.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => o.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => o.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => o.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				gs = [() => o.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => o.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => o.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => o.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function vs({
				benefit: e,
				color: t
			}) {
				return s.a.createElement("li", {
					className: hs.a.benefit
				}, s.a.createElement("div", {
					className: hs.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(Jn.b)(Object(O.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: r
				} = e;
				return s.a.createElement("div", {
					className: Object(u.a)(hs.a.container, t)
				}, s.a.createElement("div", {
					className: hs.a.topLine
				}, s.a.createElement(ms.a, {
					className: hs.a.brand,
					subreddit: r
				}), s.a.createElement("div", {
					className: hs.a.title
				}, o.fbt._("{community} Supporter Membership", [o.fbt._param("community", r.displayText)], {
					hk: "eZ8PH"
				}))), s.a.createElement("header", {
					className: hs.a.subTitle
				}, o.fbt._("Support the {community} community and receive exclusive access to premium features.", [o.fbt._param("community", r.displayText)], {
					hk: "2pm4PV"
				})), s.a.createElement("article", null, s.a.createElement("div", {
					className: hs.a.benefitsTitle
				}, o.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), s.a.createElement("ul", {
					className: hs.a.benefits
				}, fs.map(e => s.a.createElement(vs, {
					benefit: e(),
					key: e()
				}))), s.a.createElement("div", {
					className: hs.a.benefitsTitle
				}, o.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), s.a.createElement("ul", {
					className: hs.a.benefits
				}, gs.map(e => s.a.createElement(vs, {
					benefit: e(),
					key: e()
				})))), s.a.createElement("footer", {
					className: hs.a.price
				}, o.fbt._("${price}/month", [o.fbt._param("price", Object(ps.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var _s = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				ys = n.n(_s);
			const {
				fbt: Cs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Es = e => Cs._("You've been supporting the community and the development of new features since {joinDate}.", [Cs._param("joinDate", e)], {
				hk: "37ImIl"
			}), js = [Cs._("Loyalty badge", null, {
				hk: "15DctX"
			}), Cs._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Cs._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Cs._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var xs = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: o,
					title: r
				} = e, a = o.primaryColor;
				return s.a.createElement("div", {
					className: ys.a.card,
					style: {
						borderColor: a
					}
				}, s.a.createElement(ms.a, {
					className: ys.a.brand,
					subreddit: o
				}), s.a.createElement("div", {
					className: ys.a.cardContent
				}, s.a.createElement("div", {
					className: ys.a.cardTitle
				}, r), s.a.createElement(us.a, {
					className: ys.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: o.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), s.a.createElement("div", {
					className: ys.a.membershipMsg
				}, Es(t)), s.a.createElement("div", {
					className: ys.a.benefitsTitle
				}, Cs._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), s.a.createElement("ul", {
					className: ys.a.benefits
				}, js.map(e => s.a.createElement(vs, {
					benefit: e,
					color: a,
					key: e
				})))))
			};
			const {
				fbt: ws
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ks = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: o,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(a.d)(), m = Object(at.a)();
					Object(r.useEffect)(() => {
						c && (d(Object(Xr.a)({
							subredditId: c.id
						})), m(Object(ls.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(cs.a)(p, void 0, is.b.white);
					return s.a.createElement("div", {
						className: Object(u.a)(t, ys.a.pointsContainer)
					}, s.a.createElement("header", {
						className: ys.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, ws._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), s.a.createElement(ds.a, {
						className: ys.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), s.a.createElement("article", {
						className: ys.a.content
					}, c && s.a.createElement(s.a.Fragment, null, s.a.createElement(as, {
						subreddit: c
					}), s.a.createElement(xs, {
						joinDate: n,
						membership: o,
						subreddit: c,
						title: l
					}))))
				},
				Ss = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Os = n("./src/reddit/actions/governance/errorToast.ts"),
				Ps = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Ns
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Is = Object(a.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(Ss.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(Os.a)(e, t)
			}));
			var As = Object(Jn.b)(Is((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: o,
					joinDate: a,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: m,
					subredditId: p,
					title: b
				} = e, [h, f] = Object(r.useState)(!1), g = m ? m.displayText : "";
				return s.a.createElement("div", {
					className: Object(u.a)(n, ys.a.container)
				}, s.a.createElement("header", {
					className: ys.a.header
				}, Ns._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), s.a.createElement(ds.a, {
					className: ys.a.close,
					onClick: l
				})), s.a.createElement("article", {
					className: ys.a.content
				}, s.a.createElement("div", {
					className: ys.a.warning
				}, Ns._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Ns._param("subredditName", g), Ns._param("endDate", o)], {
					hk: "1POMMH"
				})), m && s.a.createElement(xs, {
					joinDate: a,
					membership: i,
					subreddit: m,
					title: b
				})), s.a.createElement("footer", {
					className: ys.a.footer
				}, s.a.createElement(P.l, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(Ps.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? Ns._("canceling...", null, {
					hk: "1Ggy36"
				}) : Ns._("cancel membership", null, {
					hk: "C9ZhO"
				})), s.a.createElement(P.i, {
					onClick: l
				}, Ns._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Ts = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				Ms = Object(a.b)(Ts);
			var Rs = Object(ne.a)(Ms((function(e) {
					return "points" === e.membership.currency ? s.a.createElement(ks, e) : s.a.createElement(As, e)
				}))),
				Ls = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				Bs = n.n(Ls);

			function Ds(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Fs extends s.a.Component {
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
					} = t, i = Ds(r.endsAt), c = Ds(r.publishAt), l = !a.renew, d = n ? n.displayText : "", m = i ? o.fbt._("Cancelled. Will expire on {date}", [o.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? o.fbt._("Joined {date}", [o.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return s.a.createElement("div", {
						className: Object(u.a)(e, Bs.a.container)
					}, s.a.createElement("div", {
						className: Bs.a.membershipName
					}, o.fbt._("{subredditName} {title}", [o.fbt._param("subredditName", d), o.fbt._param("title", r.title)], {
						hk: "2NdAdN"
					})), !l && s.a.createElement("div", {
						className: Bs.a.joinDate,
						title: p
					}, p), l && s.a.createElement("div", {
						className: Bs.a.cancelled,
						title: m
					}, m), s.a.createElement(P.o, {
						className: Bs.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && s.a.createElement(Rs, {
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
			const Us = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var Gs = Object(a.b)(Us)(Fs),
				Ws = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				Hs = n.n(Ws);
			const qs = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var zs = Object(a.b)(qs)((function(e) {
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
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement("div", {
						className: Hs.a.title
					}, o.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => s.a.createElement("div", {
						className: Hs.a.loading,
						key: t
					})), i && a.map(e => s.a.createElement(Gs, {
						key: e.membership.subredditId,
						className: Hs.a.membership,
						subscription: e
					})), !n && !i && s.a.createElement("div", {
						className: Hs.a.empty
					}, o.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Vs = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				Js = n.n(Vs);

			function Ys(e) {
				return s.a.createElement(Ze.a, {
					className: e.className
				}, s.a.createElement(Zr, {
					className: Js.a.header
				}), s.a.createElement(zs, null))
			}
			var Ks = n("./src/reddit/components/TabNav/index.tsx"),
				Qs = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Zs = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Xs = n("./src/reddit/selectors/platform.ts"),
				$s = n("./src/reddit/selectors/responsiveSettings.ts"),
				ea = n("./src/reddit/pages/Settings/index.m.less"),
				ta = n.n(ea);
			const na = (e, t, n) => [{
					key: m.Wb.Account,
					title: o.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Wb.Profile,
					title: o.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Wb.Privacy,
					title: o.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Wb.Feed,
					title: o.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Wb.Notifications,
					title: o.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Wb.Premium,
					title: o.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: ta.a.CreatorTab,
					key: m.Wb.Creator,
					title: o.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: ta.a.PaymentsTab,
					key: m.Wb.Payments,
					title: o.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: ta.a.SpecialMembershipTab,
					key: m.Wb.SpecialMembership,
					title: o.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: ta.a.MessagingTab,
					key: m.Wb.Messaging,
					title: o.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				oa = Object(c.c)({
					savedPayments: Zn.p,
					userIsWhitelistedCreator: Zn.x,
					allowNavigationCallback: Xs.a,
					isResponsiveSettingsEnabled: $s.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				ra = Object($e.t)(),
				sa = Object(a.b)(oa, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(pr.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				aa = {
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
			class ia extends s.a.Component {
				constructor() {
					super(...arguments), this.tabNavRef = s.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs({
							...n,
							[t]: e
						})
					}, this.sendEvent = (e, t) => {
						const n = d()();
						aa.hasOwnProperty(t) && this.props.sendEvent(o => ({
							source: this.getSource(),
							action: "save",
							noun: aa[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== m.Wb.Account ? `settings_${e}` : "settings"
					}, this.getTrackingValue = (e, t, n = !1) => {
						const o = n ? this.props.prefs[e] : t;
						return "boolean" == typeof o ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === o ? "off" : "on" : !0 === o ? "on" : "off" : o
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: o,
							userIsWhitelistedCreator: r,
							userHasSpecialMembership: a
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case m.Wb.Account:
								return s.a.createElement(cn, i);
							case m.Wb.Profile:
								return s.a.createElement(Yr, i);
							case m.Wb.Premium:
								return s.a.createElement(rr.b, i);
							case m.Wb.Notifications:
								return s.a.createElement(Wo, i);
							case m.Wb.Privacy:
								return s.a.createElement(mr, i);
							case m.Wb.Messaging:
								return s.a.createElement(Wn, i);
							case m.Wb.Feed:
								return s.a.createElement(Mo, i);
							case m.Wb.Payments:
								return s.a.createElement(or, null);
							case m.Wb.Creator: {
								const e = Object(p.a)(o.search);
								return r ? s.a.createElement(co, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Wb.SpecialMembership:
								return a ? s.a.createElement(Ys, null) : null;
							default:
								return s.a.createElement(cn, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Zs.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Wb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Wb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = s.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return s.a.createElement(Ks.a, {
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
					Object(Qs.d)(Qs.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = m.Wb.Account
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
					Object(Qs.b)(Qs.a.PremiumSettings)
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
					return s.a.createElement("div", {
						className: Object(u.a)(ta.a.Container, {
							[ta.a["m-responsive"]]: t
						})
					}, s.a.createElement(Ks.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: o.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						onTouchMove: this.startScrolling
					}, na(n, r, a).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = ra(sa(Object(O.c)(ia)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/config.ts");
			const r = (e, t) => `${o.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				r = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var i = (e = a, t) => {
					switch (t.type) {
						case s.a: {
							const n = t.payload.claimPoints || {},
								o = Object.keys(n).reduce((t, o) => (t[o] = {
									...e[o],
									availableClaims: n[o]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (o[t] = o[t] || {
									availableClaims: []
								}, o[t].isClaiming = !0)
							}), o
						}
						case r.b:
						case r.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === r.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, o, r, s;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == a ? void 0 : a.contracts,
					c = null == i ? void 0 : i.unlocked,
					l = null !== (o = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== o ? o : e.provider,
					u = !!(null === (r = e.walletProvider) || void 0 === r ? void 0 : r.inTransition),
					m = (null == c ? void 0 : c.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: l,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: p,
					images: e.images || d,
					inTransition: u,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = l, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: o
						} = t.payload;
						return {
							...e,
							[n]: u(o)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = (e = p, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: o
						} = t.payload, r = Object.keys(o).reduce((t, r) => {
							return {
								...t,
								[r]: {
									...e[r] || {},
									[n]: o[r]
								}
							}
						}, {});
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				claims: i,
				points: m,
				publicWallets: b
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
			var o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var n, o, r;
				return t ? null === (r = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === r ? void 0 : r[t] : void 0
			};

			function l() {
				const e = Object(r.Z)(),
					t = Object(o.e)(t => Object(r.q)(t, {
						pageLayer: e
					})),
					n = Object(o.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const d = (e, t) => {
				var n;
				const o = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return o === s.a.Ethereum || o === s.a.Rinkeby || o === s.a.EthTraderEthereum || o === s.a.EthTraderRinkeby || o === s.a.ArbitrumRinkeby
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
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "y", (function() {
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
				return R
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "t", (function() {
				return B
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "s", (function() {
				return G
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				s = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Gold/Powerups/index.ts"),
				l = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts");
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
							o = Date.now();
						return n && o < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				y = (e, t) => {
					const n = e.user.account,
						o = e.economics.subredditPremium[t];
					if (n && o && o.status === m.a.Fetched) {
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
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const E = (e, t, n) => {
					var r;
					if (!o.d.spBadges(e)) return h;
					return C(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
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

			function x(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: o
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === r) return n;
				const s = e.badges.models,
					i = e.user.ownedBadges[o] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => s[e]).find(e => e && e.type === c)
			}

			function k(e, t, n, o) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return r.data.collections[n];
					if (n === i.a.Cosmetic && o) return r.data.collections[n][o]
				}
				return h
			}

			function S(e, t) {
				const n = k(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function O(e, t) {
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
						const o = e[n];
						t.push({
							display: `${o.brand} •••• ${o.last4}`,
							id: n,
							type: l.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
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
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const o = f(e, t);
					return o && o.price && o.currency && (n[o.currency] = o.price), n
				},
				R = (e, t) => {
					var n, o, r, s;
					const a = (null === (s = null === (r = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === r ? void 0 : r[t || ""]) || void 0 === s ? void 0 : s.nomenclature) || A;
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
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				B = (e, t) => {
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
				G = (e, t, n) => {
					const r = "replyToPost" !== n && Object(p.a)(e, {
						commentId: n
					});
					if (!!r && Object(s.a)(r)) return !0;
					if (t && Object(b.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const a = o.d.spGiphy(e),
						i = U(e, t);
					return a && i
				},
				W = (e, t, n) => {
					if (t) {
						const o = e.economics.banners.dismissedBanners[t];
						if (o && o.data) return !!o.data[n]
					}
				},
				H = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/makeProductOfferKey/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				l = (e, {
					subredditId: t,
					type: n
				}) => {
					var o, s, a;
					return t ? e.subreddits.productOffers[Object(r.a)(n, t)] : null === (a = null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === a ? void 0 : a[Object(r.a)(n)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return n && n[0]
				},
				u = e => {
					const t = l(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(o.a)(u, i.p, (e, t) => m(e, t) || null),
				b = Object(o.a)(p, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				h = Object(o.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				f = Object(o.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(o.a)(f, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				s = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const o = n.subredditId,
							r = Object.keys(e.user.ownedBadges[o] || {}),
							s = e.badges.models,
							a = Date.now();
						let i = !1;
						return r.forEach(e => {
							const n = s[e];
							n && n.type === t && n.endsAt > a && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.bf16600a69fb4e1d9203.js.map