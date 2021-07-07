// https://www.redditstatic.com/desktop2x/Settings.0aa50886a37073db209d.js
// Retrieved at 7/7/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var r = {
				single_source_shortest_paths: function(e, t, n) {
					var s = {},
						a = {};
					a[t] = 0;
					var o, i, c, l, d, u, m, p = r.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (c in i = (o = p.pop()).value, l = o.cost, d = e[i] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = a[c], (void 0 === a[c] || m > u) && (a[c] = u, p.push(c, u), s[c] = i));
					if (void 0 !== n && void 0 === a[n]) {
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
			e.exports = function(e, t, s, a) {
				for (var o = -1, i = r(n((t - e) / (s || 1)), 0), c = Array(i); i--;) c[a ? i : ++o] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && s(t, n, o) && (n = o = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), o = void 0 === o ? t < n ? 1 : -1 : a(o), r(t, n, o, e)
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
				var t = a(e);
				return n(t)
			}

			function a(e) {
				if (!n.o(r, e)) {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			s.keys = function() {
				return Object.keys(r)
			}, s.resolve = a, e.exports = s, s.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$"
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/can-promise.js"),
				s = n("./node_modules/qrcode/lib/core/qrcode.js"),
				a = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				o = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, a, o) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					l = "function" == typeof i[c - 1];
				if (!l && !r()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = a = void 0) : 2 !== c || t.getContext || (a = n, n = t, t = void 0), new Promise((function(r, o) {
						try {
							var i = s.create(n, a);
							r(e(i, t, a))
						} catch (c) {
							o(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (o = n, n = t, t = a = void 0) : 3 === c && (t.getContext && void 0 === o ? (o = a, a = void 0) : (o = a, a = n, n = t, t = void 0));
				try {
					var d = s.create(n, a);
					o(null, e(d, t, a))
				} catch (u) {
					o(u)
				}
			}
			t.create = s.create, t.toCanvas = i.bind(null, a.render), t.toDataURL = i.bind(null, a.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
				return o.render(e, n)
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
				for (var t = Math.floor(e / 7) + 2, n = r(e), s = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), a = [n - 7], o = 1; o < t - 1; o++) a[o] = a[o - 1] - s;
				return a.push(6), a.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], r = t.getRowColCoords(e), s = r.length, a = 0; a < s; a++)
					for (var o = 0; o < s; o++) 0 === a && 0 === o || 0 === a && o === s - 1 || a === s - 1 && 0 === o || n.push([r[a], r[o]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function a(e) {
				this.mode = r.ALPHANUMERIC, this.data = e
			}
			a.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, a.prototype.getLength = function() {
				return this.data.length
			}, a.prototype.getBitsLength = function() {
				return a.getBitsLength(this.data.length)
			}, a.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var n = 45 * s.indexOf(this.data[t]);
					n += s.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(s.indexOf(this.data[t]), 6)
			}, e.exports = a
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

			function a(e) {
				this.mode = s.BYTE, this.data = r.from(e)
			}
			a.getBitsLength = function(e) {
				return 8 * e
			}, a.prototype.getLength = function() {
				return this.data.length
			}, a.prototype.getBitsLength = function() {
				return a.getBitsLength(this.data.length)
			}, a.prototype.write = function(e) {
				for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				a = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
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
						return a[4 * (e - 1) + 0];
					case r.M:
						return a[4 * (e - 1) + 1];
					case r.Q:
						return a[4 * (e - 1) + 2];
					case r.H:
						return a[4 * (e - 1) + 3];
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
				for (var n = e.bit << 3 | t, a = n << 10; r.getBCHDigit(a) - s >= 0;) a ^= 1335 << r.getBCHDigit(a) - s;
				return 21522 ^ (n << 10 | a)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = r.alloc(512),
				a = r.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) s[t] = e, a[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) s[t] = s[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return a[e]
			}, t.exp = function(e) {
				return s[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : s[a[e] + a[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/utils.js");

			function a(e) {
				this.mode = r.KANJI, this.data = e
			}
			a.getBitsLength = function(e) {
				return 13 * e
			}, a.prototype.getLength = function() {
				return this.data.length
			}, a.prototype.getBitsLength = function() {
				return a.getBitsLength(this.data.length)
			}, a.prototype.write = function(e) {
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
			}, e.exports = a
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
				a = 10;

			function o(e, n, r) {
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
				for (var t = e.size, r = 0, s = 0, a = 0, o = null, i = null, c = 0; c < t; c++) {
					s = a = 0, o = i = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === o ? s++ : (s >= 5 && (r += n + (s - 5)), o = d, s = 1), (d = e.get(l, c)) === i ? a++ : (a >= 5 && (r += n + (a - 5)), i = d, a = 1)
					}
					s >= 5 && (r += n + (s - 5)), a >= 5 && (r += n + (a - 5))
				}
				return r
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, s = 0; s < t - 1; s++)
					for (var a = 0; a < t - 1; a++) {
						var o = e.get(s, a) + e.get(s, a + 1) + e.get(s + 1, a) + e.get(s + 1, a + 1);
						4 !== o && 0 !== o || n++
					}
				return n * r
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, r = 0, a = 0, o = 0; o < t; o++) {
					r = a = 0;
					for (var i = 0; i < t; i++) r = r << 1 & 2047 | e.get(o, i), i >= 10 && (1488 === r || 93 === r) && n++, a = a << 1 & 2047 | e.get(i, o), i >= 10 && (1488 === a || 93 === a) && n++
				}
				return n * s
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * a
			}, t.applyMask = function(e, t) {
				for (var n = t.size, r = 0; r < n; r++)
					for (var s = 0; s < n; s++) t.isReserved(s, r) || t.xor(s, r, o(e, s, r))
			}, t.getBestMask = function(e, n) {
				for (var r = Object.keys(t.Patterns).length, s = 0, a = 1 / 0, o = 0; o < r; o++) {
					n(o), t.applyMask(o, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(o, e), i < a && (a = i, s = o)
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
				for (var n = r.alloc(e.length + t.length - 1), a = 0; a < e.length; a++)
					for (var o = 0; o < t.length; o++) n[a + o] ^= s.mul(e[a], t[o]);
				return n
			}, t.mod = function(e, t) {
				for (var n = r.from(e); n.length - t.length >= 0;) {
					for (var a = n[0], o = 0; o < t.length; o++) n[o] ^= s.mul(t[o], a);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = r.from([1]), a = 0; a < e; a++) n = t.mul(n, [1, s.exp(a)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/utils.js"),
				a = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = n("./node_modules/qrcode/lib/core/bit-buffer.js"),
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
				var r, s, a = e.size,
					o = b.getEncodedBits(t, n);
				for (r = 0; r < 15; r++) s = 1 == (o >> r & 1), r < 6 ? e.set(r, 8, s, !0) : r < 8 ? e.set(r + 1, 8, s, !0) : e.set(a - 15 + r, 8, s, !0), r < 8 ? e.set(8, a - r - 1, s, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, s, !0) : e.set(8, 15 - r - 1, s, !0);
				e.set(a - 8, 8, 1, !0)
			}

			function _(e, t, n) {
				var a = new o;
				n.forEach((function(t) {
					a.put(t.mode.bit, 4), a.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(a)
				}));
				var i = 8 * (s.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (a.getLengthInBits() + 4 <= i && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
				for (var c = (i - a.getLengthInBits()) / 8, l = 0; l < c; l++) a.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var a = s.getSymbolTotalCodewords(t), o = u.getTotalCodewordsCount(t, n), i = a - o, c = u.getBlocksCount(t, n), l = c - a % c, d = Math.floor(a / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), _ = new Array(c), y = 0, x = r.from(e.buffer), C = 0; C < c; C++) {
						var E = C < l ? p : b;
						v[C] = x.slice(g, g + E), _[C] = f.encode(v[C]), g += E, y = Math.max(y, E)
					}
					var j, w, k = r.alloc(a),
						O = 0;
					for (j = 0; j < y; j++)
						for (w = 0; w < c; w++) j < v[w].length && (k[O++] = v[w][j]);
					for (j = 0; j < h; j++)
						for (w = 0; w < c; w++) k[O++] = _[w][j];
					return k
				}(a, e, t)
			}

			function y(e, t, n, r) {
				var a;
				if (g(e)) a = f.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var o = t;
					if (!o) {
						var u = f.rawSplit(e);
						o = p.getBestVersionForData(u, n)
					}
					a = f.fromString(e, o || 40)
				}
				var m = p.getBestVersionForData(a, n);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var b = _(t, n, a),
					h = s.getSymbolSize(t),
					y = new i(h);
				return function(e, t) {
						for (var n = e.size, r = l.getPositions(t), s = 0; s < r.length; s++)
							for (var a = r[s][0], o = r[s][1], i = -1; i <= 7; i++)
								if (!(a + i <= -1 || n <= a + i))
									for (var c = -1; c <= 7; c++) o + c <= -1 || n <= o + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(a + i, o + c, !0, !0) : e.set(a + i, o + c, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var r = n % 2 == 0;
							e.set(n, 6, r, !0), e.set(6, n, r, !0)
						}
					}(y),
					function(e, t) {
						for (var n = c.getPositions(t), r = 0; r < n.length; r++)
							for (var s = n[r][0], a = n[r][1], o = -2; o <= 2; o++)
								for (var i = -2; i <= 2; i++) - 2 === o || 2 === o || -2 === i || 2 === i || 0 === o && 0 === i ? e.set(s + o, a + i, !0, !0) : e.set(s + o, a + i, !1, !0)
					}(y, t), v(y, n, 0), t >= 7 && function(e, t) {
						for (var n, r, s, a = e.size, o = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), r = i % 3 + a - 8 - 3, s = 1 == (o >> i & 1), e.set(n, r, s, !0), e.set(r, n, s, !0)
					}(y, t),
					function(e, t) {
						for (var n = e.size, r = -1, s = n - 1, a = 7, o = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(s, i - c)) {
										var l = !1;
										o < t.length && (l = 1 == (t[o] >>> a & 1)), e.set(s, i - c, l), -1 === --a && (o++, a = 7)
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
						segments: a
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, r, o = a.M;
				return void 0 !== t && (o = a.from(t.errorCorrectionLevel, a.M), n = p.from(t.version), r = d.from(t.maskPattern), t.toSJISFunc && s.setToSJISFunction(t.toSJISFunc)), y(e, n, o, r)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/polynomial.js"),
				a = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function o(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			o.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = s.generateECPolynomial(this.degree)
			}, o.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = r.alloc(this.degree),
					n = a.concat([e, t], e.length + this.degree),
					o = s.mod(n, this.genPoly),
					i = this.degree - o.length;
				if (i > 0) {
					var c = r.alloc(this.degree);
					return o.copy(c, i), c
				}
				return o
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var s = new RegExp("^" + n + "$"),
				a = new RegExp("^[0-9]+$"),
				o = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return s.test(e)
			}, t.testNumeric = function(e) {
				return a.test(e)
			}, t.testAlphanumeric = function(e) {
				return o.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				o = n("./node_modules/qrcode/lib/core/byte-data.js"),
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
					a = m(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, r.BYTE, e), n = m(c.KANJI, r.KANJI, e)) : (t = m(c.BYTE_KANJI, r.BYTE, e), n = []), s.concat(a, t, n).sort((function(e, t) {
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
						return a.getBitsLength(e);
					case r.KANJI:
						return i.getBitsLength(e);
					case r.BYTE:
						return o.getBitsLength(e)
				}
			}

			function h(e, t) {
				var n, c = r.getBestModeForData(e);
				if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
				switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
					case r.NUMERIC:
						return new s(e);
					case r.ALPHANUMERIC:
						return new a(e);
					case r.KANJI:
						return new i(e);
					case r.BYTE:
						return new o(e)
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
							}, a = ["start"], o = 0; o < e.length; o++) {
							for (var i = e[o], c = [], l = 0; l < i.length; l++) {
								var d = i[l],
									u = "" + o + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, s[u] = {};
								for (var m = 0; m < a.length; m++) {
									var p = a[m];
									n[p] && n[p].node.mode === d.mode ? (s[p][u] = b(n[p].lastCount + d.length, d.mode) - b(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), s[p][u] = b(d.length, d.mode) + 4 + r.getCharCountIndicator(d.mode, t))
								}
							}
							a = c
						}
						for (m = 0; m < a.length; m++) s[a[m]].end = 0;
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
					}(p(e, l.isKanjiModeEnabled())), n), a = d.find_path(s.map, "start", "end"), o = [], i = 1; i < a.length - 1; i++) o.push(s.table[a[i]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(o))
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
				a = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = n("./node_modules/qrcode/lib/core/mode.js"),
				i = n("./node_modules/qrcode/lib/core/version-check.js"),
				c = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = r.getBCHDigit(7973);

			function d(e, t) {
				return o.getCharCountIndicator(e, t) + 4
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
				void 0 === n && (n = o.BYTE);
				var a = 8 * (r.getSymbolTotalCodewords(e) - s.getTotalCodewordsCount(e, t));
				if (n === o.MIXED) return a;
				var c = a - d(n, e);
				switch (n) {
					case o.NUMERIC:
						return Math.floor(c / 10 * 3);
					case o.ALPHANUMERIC:
						return Math.floor(c / 11 * 2);
					case o.KANJI:
						return Math.floor(c / 13);
					case o.BYTE:
					default:
						return Math.floor(c / 8)
				}
			}, t.getBestVersionForData = function(e, n) {
				var r, s = a.from(n, a.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var r = 1; r <= 40; r++) {
							if (u(e, r) <= t.getCapacity(r, n, o.MIXED)) return r
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
					a = t;
				void 0 !== s || t && t.getContext || (s = t, t = void 0), t || (a = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), s = r.getOptions(s);
				var o = r.getImageWidth(e.modules.size, s),
					i = a.getContext("2d"),
					c = i.createImageData(o, o);
				return r.qrToImageData(c.data, e, s),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, a, o), i.putImageData(c, 0, 0), a
			}, t.renderToDataURL = function(e, n, r) {
				var s = r;
				void 0 !== s || n && n.getContext || (s = n, n = void 0), s || (s = {});
				var a = t.render(e, n, s),
					o = s.type || "image/png",
					i = s.rendererOpts || {};
				return a.toDataURL(o, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/renderer/utils.js");

			function s(e, t) {
				var n = e.a / 255,
					r = t + '="' + e.hex + '"';
				return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
			}

			function a(e, t, n) {
				var r = e + t;
				return void 0 !== n && (r += " " + n), r
			}
			t.render = function(e, t, n) {
				var o = r.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					l = i + 2 * o.margin,
					d = o.color.light.a ? "<path " + s(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + s(o.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var r = "", s = 0, o = !1, i = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || o || (o = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (r += o ? a("M", l + n, .5 + d + n) : a("m", s, 0), s = 0, o = !1), l + 1 < t && e[c + 1] || (r += a("h", i), i = 0)) : s++
						}
						return r
					}(c, i, o.margin) + '"/>',
					m = 'viewBox="0 0 ' + l + " " + l + '"',
					p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + d + u + "</svg>\n";
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
				for (var s = n.modules.size, a = n.modules.data, o = t.getScale(s, r), i = Math.floor((s + 2 * r.margin) * o), c = r.margin * o, l = [r.color.light, r.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = r.color.light;
						if (d >= c && u >= c && d < i - c && u < i - c) p = l[a[Math.floor((d - c) / o) * s + Math.floor((u - c) / o)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/qrcode/node_modules/isarray/index.js");
			a.TYPED_ARRAY_SUPPORT = function() {
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
			var s = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function a(e, t, n) {
				return a.TYPED_ARRAY_SUPPORT || this instanceof a ? "number" == typeof e ? c(this, e) : function(e, t, n, r) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, r) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
						var s;
						s = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
						a.TYPED_ARRAY_SUPPORT ? s.__proto__ = a.prototype : s = l(e, s);
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
						if (a.isBuffer(t)) {
							var n = 0 | o(t.length),
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
				}(this, e, t, n) : new a(e, t, n)
			}

			function o(e) {
				if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return a.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = a.prototype : (null === (n = e) && (n = new a(t)), n.length = t), n
			}

			function c(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | o(t));
				if (!a.TYPED_ARRAY_SUPPORT)
					for (var r = 0; r < t; ++r) n[r] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | o(t.length), r = i(e, n), s = 0; s < n; s += 1) r[s] = 255 & t[s];
				return r
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var r = e.length, s = null, a = [], o = 0; o < r; ++o) {
					if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
						if (!s) {
							if (n > 56319) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							if (o + 1 === r) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							s = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && a.push(239, 191, 189), s = n;
							continue
						}
						n = 65536 + (s - 55296 << 10 | n - 56320)
					} else s && (t -= 3) > -1 && a.push(239, 191, 189);
					if (s = null, n < 128) {
						if ((t -= 1) < 0) break;
						a.push(n)
					} else if (n < 2048) {
						if ((t -= 2) < 0) break;
						a.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((t -= 3) < 0) break;
						a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return a
			}

			function u(e) {
				return a.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : d(e).length)
			}
			a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), a.prototype.write = function(e, t, n) {
				void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
				var r = this.length - t;
				if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, r) {
					return function(e, t, n, r) {
						for (var s = 0; s < r && !(s + n >= t.length || s >= e.length); ++s) t[s + n] = e[s];
						return s
					}(d(t, e.length - n), e, n, r)
				}(this, e, t, n)
			}, a.prototype.slice = function(e, t) {
				var n, r = this.length;
				if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = a.prototype;
				else {
					var s = t - e;
					n = new a(s, void 0);
					for (var o = 0; o < s; ++o) n[o] = this[o + e]
				}
				return n
			}, a.prototype.copy = function(e, t, n, r) {
				if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
				var s, o = r - n;
				if (this === e && n < t && t < r)
					for (s = o - 1; s >= 0; --s) e[s + t] = this[s + n];
				else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
					for (s = 0; s < o; ++s) e[s + t] = this[s + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
				return o
			}, a.prototype.fill = function(e, t, n) {
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
					var o = a.isBuffer(e) ? e : new a(e),
						i = o.length;
					for (s = 0; s < n - t; ++s) this[s + t] = o[s % i]
				}
				return this
			}, a.concat = function(e, t) {
				if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var s = c(null, t),
					o = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!a.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(s, o), o += l.length
				}
				return s
			}, a.byteLength = u, a.prototype._isBuffer = !0, a.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new a(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new a(e)
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
				a = (s(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: s()
					}
				}),
				o = a(),
				i = r.createContext(a()),
				c = function() {
					return r.useState((e = r.useContext(i), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || o) + function(e) {
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
		"./src/reddit/actions/accountGender/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/GetAccountGender.json"),
				c = n("./src/redditGQL/operations/UpdateAccountGender.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/accountGender/constants.ts");
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				var r, s;
				const a = await (e => Object(o.a)(e, {
					...i
				}))(n());
				if (!a.ok) return;
				const c = a.body,
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
				(await ((e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}))(s(), {
					input: i
				})).ok ? (t(b(e)), t(Object(a.f)({
					kind: l.b.SuccessCommunity,
					text: r.fbt._("Changes saved", null, {
						hk: "2isjrZ"
					})
				}))) : t(Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Changes failed to save", null, {
						hk: "XrtIq"
					})
				}))
			}, b = Object(s.a)(d.b)
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
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const a = Object(r.a)(s.a),
				o = Object(r.a)(s.e),
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
				a = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(o.a),
				c = Object(r.a)(o.b),
				l = Object(r.a)(o.c),
				d = Object(r.a)(o.d),
				u = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				p = Object(r.a)(o.g),
				b = Object(r.a)(o.h),
				h = Object(r.a)(o.i),
				f = e => Object(s.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
			var r = n("./node_modules/lodash/forOwn.js"),
				s = n.n(r),
				a = n("./src/reddit/actions/governance/errorToast.ts"),
				o = n("./src/reddit/endpoints/economics/emojis.ts"),
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
				const r = t().economics.me.data.specialMemberships || {},
					s = Object.keys(r);
				if (s.length) {
					const t = await Object(i.e)(n(), s);
					t.ok && e(Object(y.g)(t.body))
				}
			}, j = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const a = r().user.account,
					o = r().economics.subredditPremium[e],
					i = !o || o.status !== f.a.Fetched || t;
				if (a && i) {
					const t = await Object(c.a)(s(), e, a.id);
					n(Object(y.i)(t))
				}
			}, w = e => async (t, n, {
				apiContext: r
			}) => {
				const s = n(),
					o = s.user.account,
					i = Object(g.f)(s, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (o && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: C(e.badge),
						currentAppliedBadges: c,
						userId: o.id
					})), x(e.badge) && n ? s = await Object(l.a)(r(), e.subredditId, n.id, !1) : x(e.badge) || (s = await Object(l.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: o.id
					})), Object(a.a)(t, s.error))
				}
			}, k = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				await n(j(e, !0));
				const a = r().economics.subredditPremium[e];
				if (a && a.status === f.a.Fetched) {
					const r = a.data.userOwnedBadges.find(e => e.type === t.id);
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
					const [n, c] = await Promise.all([Object(o.b)(r(), e), m(r(), e, i.id)]);
					if (!c.ok) return void Object(a.a)(t, c.error);
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
				apiContext: a
			}) => {
				if (await r(j(e, !0)), n && t) {
					const n = s(),
						a = Object(g.f)(n, e),
						o = Object(v.a)(n, t);
					if (!a[Object(b.d)(o.placement)] && o) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: o
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
			}, I = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					wallet: s
				} = await Object(i.c)(r(), e);
				t(Object(y.f)({
					wallet: s
				})), await t(j(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "i", (function() {
				return H
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/omit.js"),
				a = n.n(s),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
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
			const w = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				O = (e, t, n) => async (s, a, {
					gqlContext: o
				}) => {
					const c = i()(),
						l = await Object(E.f)(o(), c, e, t, n);
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
				}, S = (e, t, n, s, a, o) => async (c, l, {
					gqlContext: d
				}) => {
					var u;
					const m = l(),
						b = () => c(Object(f.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = a === y.c.Premium,
						x = a === y.c.Powerups,
						C = {};
					if (x && o) C.powerUps = {
						subredditId: o,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(g.c)(m, {
							provider: j.b.Stripe
						});
						if (!e) return;
						C.premium = {
							pricePackage: e
						}
					}
					let w, S, I = "";
					try {
						I = await c(O(t, s, C))
					} catch (N) {
						return p.c.captureException(N), void(N.message && c(Object(f.stripeApiError)(N.message)))
					}
					c(Object(f.stripeTokenPending)());
					const P = Object(v.y)(m);
					if (P || (w = await c(Object(f.validateAndCreateStripeToken)(e)), S = Object(v.v)(m), w)) try {
						const t = i()(),
							r = P || S ? w && S ? Object(E.h)(d(), t, I, w.id) : P ? Object(E.j)(d(), t, I, P) : null : Object(E.i)(d(), t, I, w.id),
							a = await r;
						if (!(null == a ? void 0 : a.ok)) return void b();
						const m = a.body.data.createEconPayment;
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
							let r;
							if (!(r = P ? await Object(E.e)(d(), i()(), g.id, P) : await Object(E.d)(d(), i()(), g.id, w.id, S)).ok) return void b();
							const s = r.body;
							if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== E.a.Paid) return void b()
						} else if (p && g.status !== E.a.Paid) return void b();
						const y = Object(_.j)(l());
						y && (x && o ? c(F({
							subredditId: o,
							powerupsCount: s,
							user: y,
							isAnonymous: n
						})) : h && c(D({
							user: y
						})))
					} catch (N) {
						p.c.captureException(N), b()
					}
				}, I = (e, t, n, r, s) => async (a, o, {
					gqlContext: l
				}) => {
					var d;
					const m = o(),
						b = r === y.c.Premium,
						h = r === y.c.Powerups,
						v = {};
					if (h && s) v.powerUps = {
						subredditId: s,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.c)(m, {
							provider: j.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let x = "";
					try {
						x = await a(O(e, n, v))
					} catch (I) {
						return p.c.captureException(I), I.message && a(Object(f.paypalApiError)(I.message)), null
					}
					const C = c.a.redditUrl;
					let S = {
						_o: C,
						o: x,
						pt: r
					};
					h && s && (S = {
						...S,
						r: s
					});
					try {
						const e = Object(u.a)(`${C}/framedModal/paypal-finish`, {
								...S,
								s: !0
							}),
							r = Object(u.a)(`${C}/framedModal/paypal-finish`, S),
							c = i()(),
							m = await Object(E.g)(l(), c, x, e, r);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (d = null == e ? void 0 : e.errors) || void 0 === d ? void 0 : d.length) return a(Object(f.paypalApiError)(k(e.errors))), null;
							const r = Object(_.j)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if (o === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && r) return s ? a(F({
									subredditId: s,
									powerupsCount: n,
									user: r,
									isAnonymous: t
								})) : b && a(D({
									user: r
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return a(Object(f.paypalApiError)(w())), null
				}, P = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					var a;
					try {
						const r = i()(),
							o = await Object(E.c)(s(), r, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return n(Object(f.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						p.c.captureException(o)
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
								savedStripeCards: r
							} = n.data.identity, s = r.map(e => a()({
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
						const t = await Object(E.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: s
							} = n.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(k(s))
					} catch (s) {
						p.c.captureException(s)
					}
				}, T = Object(m.a)(h.O), M = Object(m.a)(h.P), L = Object(m.a)(h.Q), B = e => async (t, n) => {
					await t(T(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, R = (e, t, n) => async (s, a, {
					gqlContext: o
				}) => {
					s(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const a = await Object(E.b)(o(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void s(B(r[0].message));
							s(L({
								subredditId: t,
								allocatedAt: n
							}))
						} else s(B(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), s(B(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(m.a)(h.S), F = e => async (t, n) => {
					t(U(e)), t(Object(x.k)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(C.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(C.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(m.a)(h.W), H = Object(m.a)(h.ab)
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
				a = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
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
				C = Object(s.a)(h.Eb),
				E = Object(s.a)(h.Cb),
				j = Object(s.a)(h.Db),
				w = Object(s.a)(h.Hb),
				k = Object(s.a)(h.Gb),
				O = Object(s.a)(h.Fb),
				S = e => async t => {
					t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, I = (e, t) => async n => {
					e === i.c.Premium ? n(N()) : t && n(P(e, t))
				}, P = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					const o = s();
					if (!Object(b.h)(o, {
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
							}))(a(), t, [e], !0);
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
					var s, o;
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
								productOffers: null !== (o = n.data.globalProductOffers.offers) && void 0 !== o ? o : []
							}))
						}
					} catch (l) {
						const t = l.message ? l.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						a.c.captureMessage(t), e(x(t)), e(S(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, o, i;
					e(C());
					try {
						const t = await (e => Object(d.a)(e, m))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(j({
								subscriptions: null !== (i = null === (o = n.data.identity) || void 0 === o ? void 0 : o.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						a.c.captureException(c);
						const t = c.message ? c.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(E(t)), e(S(t))
					}
				}, T = e => async (t, n, {
					gqlContext: s
				}) => {
					var a;
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
					} catch (o) {
						const e = null !== (a = o.message) && void 0 !== a ? a : r.fbt._("Something went wrong", null, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(a.a)(i.B),
				d = Object(a.a)(i.w),
				u = Object(a.a)(i.b),
				m = Object(a.a)(i.y),
				p = Object(a.a)(i.a),
				b = Object(a.a)(i.E),
				h = Object(a.a)(i.G),
				f = Object(a.a)(i.F),
				g = Object(a.a)(i.D),
				v = e => async (t, n) => {
					const s = n(),
						a = Object(c.h)(s),
						o = Object(c.l)(s),
						{
							token: i,
							error: l
						} = await e.createToken({
							name: a,
							address_zip: o
						});
					if (a.trim()) {
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
				}, _ = Object(a.a)(i.x), y = Object(a.a)(i.H), x = Object(a.a)(i.C), C = Object(a.a)(i.g), E = e => async (t, n, {
					apiContext: r
				}) => {
					t(C(e));
					try {
						const t = await Object(o.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, j = Object(a.a)(i.z), w = Object(a.a)(i.A), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(j());
					try {
						const t = await Object(o.b)(n());
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
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(r.a)(a.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: r
				}) => {
					const a = await Object(s.a)(r(), {
						subredditId: e
					});
					a.ok && t(o({
						subredditId: e,
						...a.body
					}))
				}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/extractQueryParams/index.ts"),
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
					const r = t();
					if (!Object(C.j)(r)) return;
					const s = Object(x.b)(r),
						o = Object(x.a)(r);
					if (s || o) return;
					e(j());
					const i = await (e => Object(_.a)(e, {
						endpoint: Object(y.a)(`${v.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: a.hb.GET
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
				await t(Object(A.r)());
				const f = [t(Object(I.x)(!0)), t(Object(p.a)())];
				n().economics.paymentSystems.status === B.a.NotFetched && f.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(m.d)());
					const r = await Object(u.d)(n());
					r.ok ? e(Object(m.c)(r.body)) : e(Object(m.b)({
						error: r.error
					}))
				})())), await Promise.all(f); {
					const e = n();
					if (!Object(C.K)(e)) return Object(L.a)(t, e)
				}
				const {
					page: v = a.Wb.Account
				} = e.params;
				if (v === a.Wb.Gold) return void t(Object(s.c)("/settings/premium"));
				const _ = [];
				v === a.Wb.Profile && (_.push(t(Object(P.a)())), _.push(t(Object(N.g)()))), v === a.Wb.Account && (_.push(t(Object(b.o)())), _.push(t(Object(d.b)()))), v === a.Wb.Notifications && _.push(t(O())), v !== a.Wb.Privacy && v !== a.Wb.Messaging || _.push(t(Object(l.b)())), v === a.Wb.Premium && (_.push(t(Object(P.a)())), _.push(t(Object(h.m)(!0)))), await Promise.all(_); {
					const e = n(),
						a = e.platform.currentPage,
						{
							url: c
						} = a,
						l = Object(o.a)(c).get(T.d);
					if (l && (t(Object(s.c)(Object(i.a)(c, [T.d]))), Object(R.a)(e))) {
						const e = r.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(g.f)({
							text: e
						})), Object(M.b)(l)
					}
				}
				t(Object(S.l)({
					title: Object(c.i)()
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
				a = n("./src/reddit/helpers/trackers/screenview.ts"),
				o = n("./src/telemetry/index.ts"),
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
				u && o.c.has(u) && Object(a.k)(l, n, i.TimerType.InApp, o.c.end(u))
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
				o = n("./src/lib/makeActionCreator/index.ts"),
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
					error: I,
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
			const Q = Object(o.a)(k.o),
				Z = Object(o.a)(k.n),
				X = Object(o.a)(k.m),
				$ = (e, t = {}) => async (n, r, {
					apiContext: s
				}) => {
					const a = r(),
						o = t.after || "",
						i = Object(y.d)(e, o),
						c = a.features.banned.fetchedTokens[i];
					if (a.features.banned.api.pending[i] || c) return;
					n(Q({
						subredditId: e,
						fetchedToken: o
					}));
					const l = a.subreddits.models[e].name,
						d = await v(s(), l, t);
					d.ok ? n(Z({
						...d.body,
						fetchedToken: o
					})) : n(X({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(k.r), te = Object(o.a)(k.q), ne = Object(o.a)(k.p), re = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const a = r().subreddits.models[e].name,
						o = {
							username: Object(_.a)(t)
						};
					n(ee());
					const i = await v(s(), a, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, se = Object(o.a)(k.l), ae = Object(o.a)(k.s), oe = (e, t, n) => async (s, o, {
					apiContext: c
				}) => {
					const l = o(),
						u = l.subreddits.models[e].url,
						f = l.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), s(Object(i.h)(n));
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
						const a = await v(c(), f, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(i.f)(n, g.error));
						const e = a()(g, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(d.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s().subreddits.models[e].url,
						c = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.hb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(ae({
						subredditId: e,
						userId: t
					})), n(Object(d.f)({
						kind: x.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
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
						if (!Object(C.b)(u.a.BAN_USER)(s) && !Object(j.P)(s, {
								subredditId: e
							})) {
							const t = Object(j.S)(s, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const r = Object(w.nb)(s, {
							userName: t
						});
						if (!r) return;
						const a = Object(E.h)(s, {
							subredditId: e
						});
						a && a[r.id] || await n($(e, {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
				className: Object(a.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: h,
				children: f
			}) => {
				return a.a.createElement(l.q, {
					onClick: t => {
						if (b && b(t), e(), p === r.awardNotification) return h();
						s(Object(d.b)(o))
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
			const m = Object(o.b)(null, (e, {
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
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(a.a)(e => s.a.createElement("div", {
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
			}, e.cancelText && s.a.createElement(o.l, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), s.a.createElement(o.i, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, a._("Previews Terms of Use", null, {
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
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, {
				className: g.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: s,
					subredditId: d
				} = e, p = Object(o.e)(e => Object(m.b)(e, d)), f = e.dollarPrice && `$${Object(c.a)(e.dollarPrice,!0)}`, y = e.tokenPrice && p && Object(l.a)(Object(u.b)(e.tokenPrice, null == p ? void 0 : p.displayConversion)) + (n ? "" : " " + p.name);
				if (!f && !y) return null;
				const x = s ? r.Monthly : r.Once;
				return a.a.createElement("span", {
					className: Object(i.a)(t, g.a.price)
				}, f && y ? v._("{dollar-price} or {point-price}", [v._param("dollar-price", b(f, x)), v._param("point-price", a.a.createElement(_, {
					subredditId: d,
					pointPrice: b(y, x)
				}))], {
					hk: "2Gif0l"
				}) : f ? h(f, x) : y ? a.a.createElement(_, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Bling/index.tsx"),
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
					className: Object(a.a)(n.container, e.className)
				}, e.subreddit ? s.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : s.a.createElement(c.a, {
					className: n.crown
				}), s.a.createElement(o.a, {
					className: n.bling1
				}), s.a.createElement(o.a, {
					className: n.bling2
				}), s.a.createElement(o.a, {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				i = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
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
						className: Object(a.a)(u.a.Container, n)
					}, s.a.createElement("label", {
						className: u.a.HitBox
					}, s.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, d ? s.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: d
					}) : t), s.a.createElement(o.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !l && s.a.createElement("div", {
						className: Object(a.a)(u.a.EditButton, r)
					}, s.a.createElement(c.a, {
						name: "add_media",
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(a.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					a = `${i.a.assetPath}/${r}`;
				if (e.grey && a.endsWith(".svg")) {
					const t = `url(${a}) center/cover`;
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
					src: a
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
				a = n("./src/reddit/constants/colors.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(i);

			function l(e) {
				const {
					index: t,
					children: n,
					color: r
				} = e, i = r && Object(o.a)(r, void 0, a.b.white);
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends o.a.Component {
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
					return e && o.a.createElement("img", {
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
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
				y = n("./src/config.ts"),
				x = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = n("./src/lib/lessComponent.tsx"),
				E = n("./src/lib/prettyPrintNumber/index.ts"),
				j = n("./src/lib/timeAgo/index.ts"),
				w = n("./src/reddit/components/ChatButton/index.tsx"),
				k = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				S = n("./src/reddit/components/SubscribeButton/index.tsx"),
				I = n("./src/reddit/components/UserIcon/index.tsx"),
				P = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
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
				L = n("./src/reddit/models/Gold/Award.ts"),
				B = n("./src/reddit/models/User/index.ts"),
				R = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				F = n("./src/reddit/actions/inContextModeration.ts"),
				D = n("./src/reddit/actions/modal.ts"),
				H = n("./src/reddit/actions/subredditModeration/ban.ts"),
				G = n("./src/reddit/constants/modals.ts"),
				W = n("./src/reddit/components/Hovercards/helpers.ts"),
				z = n("./src/reddit/icons/fonts/index.tsx"),
				q = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				K = n("./src/reddit/selectors/bannedUser.ts"),
				J = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Y = n.n(J);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = Object(o.c)({
				hasModMailPermissions: Object(u.b)(q.c.mail),
				isUserBanned: (e, t) => !!Object(K.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(f.nb)(e, {
					userName: t.username
				})
			});
			class Z extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, r ? s.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(P.e(t))
						}
					}, s.a.createElement(z.a, {
						name: "ban",
						isFilled: !0,
						className: Y.a.icon
					}), V._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							i(), o(P.a(t))
						}
					}, s.a.createElement(z.a, {
						name: "ban",
						className: Y.a.icon
					}), V._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(W.a, {
						role: "button",
						onClick: () => {
							c(), o(P.d(t))
						}
					}, s.a.createElement(z.a, {
						name: "mod_mute",
						className: Y.a.icon
					}), V._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var X = Object(a.b)(Q, (e, {
					username: t,
					subredditId: n,
					contextId: r
				}) => ({
					onUnbanUser: t => e(Object(H.e)(n, t)),
					requestUserBanInfo: () => e(Object(H.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(F.c)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(H.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(F.d)({
							username: t,
							subredditId: n,
							contextId: r
						})), e(Object(D.i)(G.a.MUTE_USER))
					}
				}))(Z),
				$ = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var te = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object($.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(W.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, s.a.createElement(z.a, {
					name: "tag",
					className: Y.a.icon
				}), ee._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ne = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = n.n(ne);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = C.a.wrapped(I.a, "UserIcon", re.a),
				oe = C.a.wrapped(S.a, "SubscribeButton", re.a),
				ie = C.a.wrapped(w.b, "ChatButton", re.a),
				ce = C.a.wrapped(T, "KarmaIcon", re.a),
				le = C.a.wrapped(M.a, "PremiumIcon", re.a),
				de = C.a.wrapped(x.a, "UserNameLink", re.a),
				ue = C.a.div("UserNameMetaData", re.a),
				me = C.a.div("MetaDataItem", re.a),
				pe = C.a.div("Bullet", re.a),
				be = C.a.div("UserNameContainer", re.a),
				he = C.a.div("UserInfoContainer", re.a),
				fe = C.a.div("PostKarma", re.a),
				ge = C.a.div("CommentKarma", re.a),
				ve = C.a.div("KarmaGrid", re.a),
				_e = C.a.div("GenericKarma", re.a),
				ye = C.a.a("InfoLink", re.a),
				xe = C.a.div("KarmaCount", re.a),
				Ce = C.a.div("KarmaLabel", re.a),
				Ee = C.a.div("GenericKarmaLabel", re.a),
				je = C.a.div("BannerImage", re.a),
				we = C.a.div("UserContainer", re.a),
				ke = C.a.div("BottomSpacer", re.a),
				Oe = C.a.div("Container", re.a),
				Se = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(de, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(A.a, {
					className: re.a.adminIcon,
					title: _.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(x.a, {
					to: "/premium"
				}, s.a.createElement(le, null))), s.a.createElement(ue, null, e.user.username && s.a.createElement(me, null, e.user.username, s.a.createElement(pe, null, "•")), s.a.createElement(me, null, Object(j.d)(e.user.createdUtc || e.user.created)))),
				Ie = e => {
					const {
						showAwardKarma: t,
						user: n
					} = e;
					return t ? s.a.createElement(ve, null, s.a.createElement(_e, null, s.a.createElement(xe, null, Object(E.b)(n.postKarma)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(_e, null, s.a.createElement(xe, null, Object(E.b)(n.commentKarma)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(_e, null, s.a.createElement(xe, null, Object(E.b)(n.awardeeKarma)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [_.fbt._plural(n.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(ye, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(N.a, {
						className: re.a.infoIcon
					})))), s.a.createElement(_e, null, s.a.createElement(xe, null, Object(E.b)(n.awarderKarma)), s.a.createElement(Ee, null, _.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [_.fbt._plural(n.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(ye, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(N.a, {
						className: re.a.infoIcon
					}))))) : s.a.createElement(he, null, s.a.createElement(ce, null), s.a.createElement(fe, null, s.a.createElement(xe, null, Object(E.b)(n.postKarma)), s.a.createElement(Ce, null, _.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [_.fbt._plural(n.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ge, null, s.a.createElement(xe, null, Object(E.b)(n.commentKarma)), s.a.createElement(Ce, null, _.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [_.fbt._plural(n.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Pe = e => {
					const {
						className: t,
						contextId: n,
						currentUser: r,
						hideNSFWPref: a,
						hoverId: o,
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
						acceptChats: j
					} = e;
					if (!v) return s.a.createElement(Oe, {
						style: b
					});
					const w = !!r && Object(B.e)(r) === g,
						O = !!(null == r ? void 0 : r.snoovatarFullBodyAsset),
						S = v.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						I = d && d.flair,
						N = d && d.access,
						A = x && x.templateIds && x.templateIds.length > 0,
						T = x && x.displaySettings && x.displaySettings.isEnabled,
						{
							awardedLastMonth: M
						} = v,
						L = !!v.snoovatarFullBodyAsset,
						F = v.isNSFW && a;
					let D;
					return D = L ? !F && E && E.bannerBackgroundImage || void 0 : F ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Oe, {
						className: t,
						id: o,
						style: b
					}, !L && D && s.a.createElement(je, {
						style: {
							backgroundImage: `url('${D}')`
						}
					}), s.a.createElement(we, null, L ? s.a.createElement(U.a, {
						isHovercard: !0,
						bannerBackgroundImage: D,
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
					}) : s.a.createElement(be, null, s.a.createElement(ae, {
						iconUrl: S,
						isNSFW: v.isNSFW,
						userName: g
					}), s.a.createElement(Se, {
						origin: l,
						user: v,
						userName: g
					})), s.a.createElement(Ie, {
						showAwardKarma: p,
						user: v
					}), M && s.a.createElement(R.a, {
						recentAwardings: M,
						topAwardIcon: f,
						username: g
					}), i && !w && !C && j && s.a.createElement(ie, {
						contextId: n,
						userId: v.id,
						text: _.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), v.hasUserProfile && !C && !w && s.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", n),
						small: !0
					})), N && n && !w && h && s.a.createElement(X, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), I && n && A && T && h && s.a.createElement(te, {
						contextId: n,
						subredditId: h,
						sendEvent: m,
						username: g
					}), s.a.createElement(k.i, {
						contextId: n,
						subredditId: h,
						user: v
					}), !(N || i) && s.a.createElement(ke, null))
				},
				Ne = Object(O.a)(Pe),
				Ae = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return s.a.createElement(Ne, se({
						isOpen: t
					}, e))
				};
			Ae.WrappedComponent = Pe;
			var Te = Ae;
			const Me = Object(o.c)({
					activeTooltipId: h.a,
					currentUser: f.j,
					isLoggedIn: f.K,
					hideNSFWPref: f.C,
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
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.db)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(m.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Le = Object(a.b)(Me, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)("user_hovercard")),
					onHideTooltip: () => e(Object(c.i)())
				}));
			t.a = Le(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Te, {
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
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(a.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(o.a, {
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
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? s.a.createElement(s.a.Fragment, null, e.children) : null;
			t.b = Object(a.a)({
				ErrorComponent: c,
				getComponent: () => Object(o.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
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
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(d.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
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
			var h = Object(o.b)(b, (e, t) => ({
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
			const _ = a.a.wrapped(v, "HoverDiv", g.a),
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
				a = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(a);
			const i = r.a.wrapped(s.a, "UserActionItem", o.a),
				c = e => {
					const {
						author: t,
						itemId: n,
						subredditName: r,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let o = s;
					return n && (o = `${o}--${n}`), a && (o = `${o}--${a}`), t && (o = `${o}--${t}`), r && (o = `${o}--${r}`), o
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
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
			var p = Object(a.b)(u, {})(m),
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(h.a)(e, t),
					r = Object(f.H)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var v = Object(a.b)(() => Object(o.a)(g, b.j, (e, t) => ({
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
					r = Object(f.H)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var y = Object(a.b)(() => Object(o.a)(_, e => e))(e => s.a.createElement(p, {
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
			var x = Object(a.b)(() => Object(o.c)({
					subreddit: f.S
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
			var E = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), a = Object(r.useMemo)(() => ({
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
					data: a
				})
			};
			var j = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: a
				} = Object(C.a)(), o = Object(r.useMemo)(() => ({
					author: t.author,
					isModerator: a,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, a]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: o
				})
			};
			var w = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(C.a)(), a = Object(r.useMemo)(() => ({
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
					data: a
				})
			};
			var k = Object(a.b)(() => Object(o.c)({
				subreddit: f.S
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
			var O = Object(a.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.K)(e, {
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
			var S = Object(a.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.S)(e, {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
			const d = {
				[o.U.BEST]: "best",
				[o.U.HOT]: "hot",
				[o.U.NEW]: "new",
				[o.U.CONTROVERSIAL]: "controversial",
				[o.U.TOP]: "top",
				[o.U.RISING]: "rising",
				[o.U.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return d[n] ? s.a.createElement(i.a, {
					name: d[n],
					isFilled: t,
					className: Object(a.a)(e, l.a.iconStyles)
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
				a = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
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
						href: `${a.a.oldRedditUrl}/user/${n}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
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
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/humanizeDate/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/contexts/InsideOverlay.tsx"),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = l.a.div("Container", y.a),
				E = l.a.div("Body", y.a),
				j = l.a.h5("Title", y.a),
				w = l.a.span("Label", y.a);
			class k extends a.a.Component {
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
						className: o
					} = this.props, i = s && r ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return a.a.createElement(C, {
						className: o
					}, a.a.createElement(j, null, n), a.a.createElement(E, null, e, a.a.createElement(w, x({
						key: "label"
					}, i), t)), s && r && a.a.createElement(v.c, {
						caretOnTop: !0,
						tooltipId: s,
						text: r
					}))
				}
			}
			var O = Object(o.b)(null, e => ({
					toggleTooltip: t => e(Object(g.h)({
						tooltipId: t
					}))
				}))(Object(m.b)(k)),
				S = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				I = n.n(S);
			const P = Object(i.a)(h.j, (e, {
					profileName: t
				}) => Object(f.ub)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: Object(p.a)(t)
				})),
				N = l.a.div("Container", I.a);

			function A(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			t.a = Object(o.b)(P)(Object(m.b)(e => {
				const {
					awardeeKarma: t,
					awarderKarma: n,
					profileCreated: s,
					isOverlay: o,
					commentKarma: i,
					postKarma: l,
					totalKarma: m,
					subscribers: p,
					className: h,
					highlightClassName: f
				} = e, g = A(o, "karma"), v = A(o, "cakeday"), _ = `${r.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[r.fbt._plural(l,"number",Object(d.b)(l,{displayFull:!0}))],{hk:"husfU"})}\n${r.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[r.fbt._plural(i,"number",Object(d.b)(i,{displayFull:!0}))],{hk:"26iPTL"})}\n${r.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[r.fbt._plural(t,"number",Object(d.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${r.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[r.fbt._plural(n,"number",Object(d.b)(n,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return a.a.createElement(N, {
					className: h
				}, a.a.createElement(O, {
					className: f,
					icon: a.a.createElement(b.a, {
						name: "karma",
						isFilled: !0,
						className: I.a.icon,
						key: "karma"
					}),
					label: Object(d.b)(m, {
						displayFull: !0
					}),
					title: r.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: g,
					tooltip: _
				}), a.a.createElement(O, {
					className: f,
					icon: a.a.createElement(b.a, {
						name: "cake",
						isFilled: !0,
						className: I.a.icon,
						key: "cakeDay"
					}),
					label: Object(c.a)(s, !0),
					title: r.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: v,
					tooltip: Object(u.d)(s)
				}), p > 0 && a.a.createElement(O, {
					className: f,
					icon: a.a.createElement(b.a, {
						name: "user",
						isFilled: !0,
						className: I.a.icon,
						key: "followers"
					}),
					title: r.fbt._("Followers", null, {
						hk: "4ucimK"
					}),
					label: Object(d.b)(p, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = a.a.div("dynamicTwoCol", c.a),
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
					isDeletingBanner: r,
					isDeletingIcon: a,
					isEmployee: o,
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
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
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
				})), t && !n && (a ? s.a.createElement(g.a, {
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
				})), j && s.a.createElement("h4", {
					className: w.a.userTitle
				}, j), s.a.createElement(E.a, {
					className: w.a.userName,
					username: S,
					userCreated: k,
					url: I
				}), o && s.a.createElement(_.a, {
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
				I = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var P = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDefaultIcon: r,
					isDeletingBanner: a,
					isDeletingIcon: o,
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
				}) => f ? s.a.createElement(I.a, {
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: n,
					isDeletingBanner: a,
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
					isDeletingBanner: a,
					isDeletingIcon: o,
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
			const A = a.a.wrapped(o.b, "Widget", p.a),
				T = a.a.div("Description", p.a),
				M = a.a.wrapped(l, "Actions", p.a);
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
						className: r,
						footer: a,
						isEmployee: o,
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
					return O ? s.a.createElement(s.a.Fragment, null, s.a.createElement(N.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDeletingBanner: x,
						isEmployee: o,
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
						footer: a
					})) : s.a.createElement(A, {
						className: r
					}, s.a.createElement(P, {
						bannerBackgroundImage: O ? void 0 : t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDefaultIcon: _,
						isDeletingBanner: x,
						isDeletingIcon: y,
						isEmployee: o,
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
					}), s.a.createElement(T, null, p), s.a.createElement(u.a, {
						profileName: v,
						isOverlay: l
					}), this.renderAwardedLastMonth(), s.a.createElement(M, null, e), a)
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
				a = n.n(s),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(d);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
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
						isNSFW: o,
						userName: l
					} = this.props, {
						isUpdating: d
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === l ? a.a.createElement(i.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
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
				a = n.n(s),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				u = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = n.n(u);
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
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
						isProfileIdCard: o,
						userName: d
					} = this.props, {
						isUpdating: u
					} = this.state, p = a.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: s,
						userName: d
					});
					return t && Object(l.e)(t) === d ? a.a.createElement(i.a, {
						altText: r.fbt._("{userName} avatar image", [r.fbt._param("userName", d)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: o ? m.a.EditButton : void 0,
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
				a = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.j,
					hideNSFWPref: o.C
				}),
				c = Object(r.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(a.z)(t, n))
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
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
				return s.a.createElement(o.q, {
					onClick: l,
					isFullWidth: !0,
					className: Object(a.a)(d.a.snoovatarButton, {
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/config.ts"),
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
				} = Object(r.useMemo)(() => (function(e) {
					const t = h.exec(e) || ["", "", ""],
						n = t[1],
						r = t[2];
					return {
						id: n,
						url: "testing" === r ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${n}`,
						badge: r
					}
				})(p), [p]), w = Object(a.e)(l.W);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(b.a.container, y)
				}, s.a.createElement(c.a, {
					className: b.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${o.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: b.a.inner
				}, "testing" !== E && s.a.createElement("img", {
					alt: `${E} NFT`,
					className: b.a.badgeImage,
					src: `${o.a.assetPath}/img/snoovatars/nft_badge_${E}.svg`
				}), s.a.createElement("img", {
					className: b.a.cutout,
					src: `${o.a.assetPath}/img/snoovatars/hole-cutout-${w?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: j,
					target: "_blank",
					className: b.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: b.a.nftIconImage,
					alt: "View this NFT",
					src: `${o.a.assetPath}/img/snoovatars/nft_icon.svg`
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
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
				}), r && e && (c ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
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
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/timeAgo/index.ts"),
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
				const u = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${l}`), a.fbt._param("time since account creation", Object(o.d)(r, {
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
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(d);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: a,
				isNSFW: d
			}) => o.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${r.a.redditUrl}/premium`
			}, o.a.createElement(l.a, {
				className: u.a.snoovatarPremiumIcon
			})), d && o.a.createElement(c.a, {
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = n("./node_modules/react-router/esm/react-router.js"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				f = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				g = n("./src/reddit/routes/avatar/index.ts"),
				v = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				_ = n.n(v);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var x = Object(m.i)(({
					isHovercard: e,
					username: t
				}) => {
					const n = Object(p.b)(),
						a = Object(r.useCallback)(() => n(Object(h.b)(e ? "user_hovercard" : "profile_overview", t)), [e, n, t]);
					return s.a.createElement(u.a, {
						to: `${g.a}/${t}`
					}, s.a.createElement(b.q, {
						onClick: a,
						className: Object(o.a)(_.a.snoovatarButton, _.a.snoovatarExtraPadding, _.a.compactButtonLayout)
					}, s.a.createElement(f.a, {
						className: _.a.shirtIcon
					}), y._("Try this Look", null, {
						hk: "dOuPb"
					}), s.a.createElement("div", {
						className: _.a.chevronIcon
					})))
				}),
				C = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				E = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				j = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				w = n.n(j);
			const k = 25;

			function O(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function S(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const I = O("particleDelay", w.a),
				P = O("particleX", w.a),
				N = O("particleFloat", w.a),
				A = () => {
					const e = S(P),
						t = S(N),
						n = S(I);
					return Object(o.a)(w.a.particle, e, t, n)
				};
			class T extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < k; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: w.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${A()}`
					})
				}
			}
			var M = T,
				L = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				B = n.n(L),
				R = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: r,
				isDeletingBanner: u,
				isEmployee: m,
				isGold: p,
				isNSFW: b,
				isOwnProfile: h,
				onClickSnoovatar: f,
				onDeleteBanner: g,
				prefersReducedAnimations: v,
				snoovatarUrl: _,
				title: y,
				userCreated: j,
				username: k,
				url: O,
				isHovercard: S
			}) => {
				const I = Object(a.e)(e => !h && !!_ && Object(l.e)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
					bannerBackgroundImage: e,
					editMode: !!r,
					isNSFW: b,
					username: k,
					isDeletingBanner: !!u,
					onDeleteBanner: g
				}), s.a.createElement("div", {
					className: w.a.snoovatarContainer
				}, p && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: w.a.topGlow
				}), s.a.createElement("div", {
					className: w.a.bottomGlow
				}), !v && s.a.createElement(M, null)), s.a.createElement("img", {
					className: Object(o.a)(w.a.snoovatar, {
						[w.a.premiumGlow]: p
					}),
					src: _ || void 0
				})), !r && h && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: w.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: B.a.settingsIcon
				})), s.a.createElement(R.a, {
					isEmployee: m,
					isGold: p,
					isNSFW: b,
					title: y,
					username: k
				}), s.a.createElement(E.a, {
					className: w.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: k,
					userCreated: j,
					url: O
				}), (h || !n && !!_) && s.a.createElement(d.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: h,
					onClick: f
				}), I && s.a.createElement(x, {
					username: k,
					isHovercard: !!S
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
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
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: r,
					text: o,
					tooltipContentClass: i,
					...d
				} = e;
				return s.a.createElement("div", l({}, d, {
					className: Object(a.a)(c.a.container, n)
				}), o ? s.a.createElement("div", {
					className: Object(a.a)(c.a.tooltip, i, r ? c.a.below : c.a.above)
				}, o) : null, t)
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
				a = n.n(s),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
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
			class I extends a.a.Component {
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
						return a.a.createElement(d.k, null, a.a.createElement(C, null, r.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), a.a.createElement(k, null, a.a.createElement("li", null, r.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), a.a.createElement("li", null, r.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && a.a.createElement("li", null, r.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(O).map((e, t) => a.a.createElement("span", {
							key: e
						}, !!t && ", ", a.a.createElement("a", {
							href: O[e],
							target: "_blank"
						}, S[e] && S[e]()))))), a.a.createElement(x, null, r.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), a.a.createElement(y, {
							placeholder: r.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), a.a.createElement(x, null, r.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), a.a.createElement(j, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: r.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), a.a.createElement(j, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: r.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), a.a.createElement(w, null, a.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), a.a.createElement("label", null, r.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), a.a.createElement(_, null, a.a.createElement(v, {
							onClick: e.exit
						}, r.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), a.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, r.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => r.fbt._("{text with URL}", [r.fbt._param("text with URL", t ? a.a.createElement(a.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", a.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : a.a.createElement(a.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", a.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", S[e] && S[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => a.a.createElement(d.k, null, a.a.createElement(C, null, r.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), a.a.createElement(E, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), a.a.createElement(_, null, a.a.createElement(g, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, r.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => a.a.createElement(d.k, null, a.a.createElement(C, null, r.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), a.a.createElement(_, null, a.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, r.fbt._("Back", null, {
						hk: "1P3x9"
					})), a.a.createElement(g, {
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
					return a.a.createElement(b, null, a.a.createElement(f, {
						onClick: e.exit
					}, a.a.createElement(d.b, null)), a.a.createElement(d.h, null, a.a.createElement(h, null, r.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(o.a)(I)
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
				return s
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
				a = Object(r.a)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/moment/moment.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
						onClose: r,
						subredditInfo: s
					} = e, a = Object(c.d)();
					return i.a.createElement(x.d, {
						className: t
					}, i.a.createElement(x.h, null, i.a.createElement(E.a, null, i.a.createElement(x.p, null, j._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), i.a.createElement(C.a, {
						onClick: r
					}, i.a.createElement(x.b, null)))), i.a.createElement(x.k, null, i.a.createElement(x.o, null, j._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [j._param("subreddit name", s.prefixedName)], {
						hk: "2EKYNO"
					}))), i.a.createElement(x.f, null, i.a.createElement(x.q, {
						onClick: () => {
							n.isPremium ? a(Object(_.i)(s.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : a(Object(y.a)(n.id, s.id, n.allocatedAt)), r()
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
					const [t, n] = Object(o.useState)(!1), {
						className: s,
						allocation: a
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: b,
						powerups: h
					} = a, v = S(b), _ = S(c), y = S(l), {
						prefixedName: x
					} = p, C = _ ? r.fbt._("Subscribed {date}.", [r.fbt._param("date", _)], {
						hk: "24RAUK"
					}) : "", E = y ? r.fbt._("You can cancel after {date}.", [r.fbt._param("date", y)], {
						hk: "48A2TC"
					}) : "", j = v ? r.fbt._("Will be renewed on {date}.", [r.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", k = v ? r.fbt._("Still active until {date}.", [r.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", I = m ? u ? C : `${C} ${E}` : d ? `${C} ${j}` : `${C} ${k}`, P = m ? r.fbt._("{powerups count} Reddit Premium powerup/monthly", [r.fbt._param("powerups count", h.toLocaleString())], {
						hk: "4iP1Np"
					}) : r.fbt._("{powerups count} powerup/monthly", [r.fbt._param("powerups count", h.toLocaleString())], {
						hk: "11DNVJ"
					}), N = m && u || !m && d;
					return i.a.createElement("div", {
						className: Object(f.a)(s, O.a.container),
						title: I
					}, i.a.createElement("div", {
						className: O.a.allocationName
					}, r.fbt._("{subreddit name} Powerup", [r.fbt._param("subreddit name", x)], {
						hk: "4qAoO"
					})), i.a.createElement("div", {
						className: O.a.details
					}, P), i.a.createElement(g.o, {
						className: O.a.button,
						disabled: !N,
						onClick: () => n(!0)
					}, m || N ? r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : r.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && i.a.createElement(w, {
						withOverlay: !0,
						allocation: a,
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
					}, r.fbt._("Subscriptions", null, {
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
				}, r.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), i.a.createElement("div", {
					className: M.a.subtitle
				}, r.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var B = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				R = n.n(B);
			const U = Object(d.c)({
				allocationByKey: h.t
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
				re = n.n(ne);
			const se = "update_card_modal_id",
				ae = Object(d.c)({
					cancelSubscriptionModalIsOpen: Object($.b)("settings_optout_modal_id"),
					goldExpiration: te.o,
					hasAndroidSubscription: te.p,
					hasIOSSubscription: te.u,
					hasStripeSubscription: te.y,
					hasPaypalSubscription: te.w,
					isGold: te.s,
					isPremiumSubscriber: te.t,
					premiumProductOfferSubscription: ee.f,
					premiumProductOfferSubscriptionIsCanceled: ee.e,
					updateCardModalIsOpen: Object($.b)(se)
				}),
				oe = Object(c.b)(ae, e => ({
					navigateToPurchasePremium: () => e(Object(l.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(se)),
					requestProductOfferSubscriptions: () => e(Object(u.b)()),
					requestCancelProductOfferSubscription: t => e(Object(u.a)(t)),
					showUpdateCardSuccessToast: () => {
						const t = r.fbt._("You successfully updated your payment information!", null, {
							hk: "3m4P1N"
						});
						e(Object(p.f)({
							kind: Q.b.SuccessCommunity,
							text: t
						}))
					}
				})),
				ie = (e, t, n) => e && !n ? r.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [r.fbt._param("date", t)], {
					hk: "jOodQ"
				}) : r.fbt._("Your Premium membership is valid until {date}.", [r.fbt._param("date", t)], {
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
						requestProductOfferSubscriptions: r
					} = this.props;
					if (null == e ? void 0 : e.id) {
						await t(e.id) && (n(), r())
					}
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						hasAndroidSubscription: t,
						hasIOSSubscription: n,
						hasPaypalSubscription: s,
						hasStripeSubscription: o,
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
					} = this.props, v = t || n, _ = Boolean(d), y = a()(null == d ? void 0 : d.expiresAt).format("MMMM DD, YYYY.");
					return i.a.createElement(H.a, null, i.a.createElement(D.b, {
						className: re.a.premiumHeading,
						isResponsiveSettingsEnabled: m
					}, r.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), i.a.createElement(D.a, {
						className: re.a.premiumExpirationString
					}, r.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), i.a.createElement(G.a, null, r.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), i.a.createElement(D.a, {
						className: re.a.premiumExpirationString
					}, c ? ie(_, y, u) : r.fbt._("Get Reddit Premium and help support Reddit.", null, {
						hk: "MOt6K"
					})), (!_ || u) && i.a.createElement(W.f, {
						label: c ? r.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : r.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), o && i.a.createElement(W.a, {
						label: r.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: p
					}), s && i.a.createElement(W.f, {
						label: r.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), l && !v && !u && i.a.createElement(W.a, {
						label: r.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), c && i.a.createElement(i.a.Fragment, null, i.a.createElement(G.a, null, r.fbt._("premium features", null, {
						hk: "20MX2a"
					})), i.a.createElement(W.o, {
						on: g,
						disabled: !c,
						onClick: this.onHideAdsToggle,
						label: r.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: r.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), i.a.createElement(W.o, {
						on: f,
						disabled: !c,
						onClick: this.onHighlightCommentsToggle,
						label: r.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: r.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), h && i.a.createElement(Y, null), e && i.a.createElement(b.a, {
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
					}), i.a.createElement(F, null))
				}
			}
			const le = Object(V.t)();
			t.b = le(oe(Object(z.c)(ce)))
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(o),
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
						onClick: o,
						onChange: c,
						type: p = "text",
						value: b
					} = this.props;
					return s.a.createElement(m, {
						className: Object(a.a)(t, {
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
					}), s.a.createElement(d, null, r), o && s.a.createElement(u, {
						disabled: !!n,
						onClick: o
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
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
			const d = o.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...r
				} = e;
				return s.a.createElement(d, l({}, r, {
					className: Object(a.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = o.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = n("./src/reddit/models/Image/index.tsx");
			class i extends s.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(o.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						icon: t,
						label: n,
						labelClassName: r,
						value: o,
						controlName: i,
						isUploading: c,
						tabIndex: l
					} = this.props;
					return c ? s.a.createElement(a.a, {
						className: e
					}) : s.a.createElement(a.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: r,
						multiple: !1,
						tabIndex: l,
						value: o,
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
				a = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				o = n.n(a),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", o.a),
				l = i.a.div("Content", o.a),
				d = i.a.div("Sidebar", o.a);
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
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.h3("Component", s.a)
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
				return ae
			})), n.d(t, "o", (function() {
				return oe
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
				return je
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
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
			const C = g.a.span("Wrapper", y.a),
				E = g.a.select("Inner", y.a),
				j = g.a.wrapped(v.b, "Caret", y.a);

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
				}, s.a.createElement(E, x({
					className: t
				}, n)), s.a.createElement(j, x({
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
					inModal: r,
					isNightModeOn: a,
					disabled: o,
					indent: i,
					last: l,
					...d
				}) => s.a.createElement("div", D({}, d, {
					className: Object(c.a)(F.a.Wrapper, e, {
						[F.a.mColumn]: "column" === t,
						[F.a.mDisabled]: !!o,
						[F.a.mIndent]: !!i,
						[F.a.mLast]: !!l,
						[F.a.isCreateCommunity]: !!n,
						[F.a.inModal]: !!r,
						[F.a.isNightModeOn]: !!a
					})
				})),
				Q = g.a.a("Link", F.a),
				Z = g.a.wrapped(Q, "SubtextLink", F.a),
				X = g.a.wrapped(P.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(S.a, "ArrowRight", F.a),
				te = e => s.a.createElement(V, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(J, {
					className: e.textContainerClassName
				}, s.a.createElement(W, null, e.label, e.isRequired && s.a.createElement(G, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				re = g.a.wrapped(ne, "SpoilerFlair", F.a),
				se = g.a.wrapped(ne, "NSFWFlair", F.a),
				ae = e => {
					switch (e.flair) {
						case L.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case L.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return s.a.createElement(V, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(J, null, s.a.createElement(M.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(W, null, e.label))), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, s.a.createElement(K, null, e.tooltip && s.a.createElement(q, {
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
					isNightModeOn: R.W
				}),
				pe = Object(a.b)(me)(e => s.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, s.a.createElement(J, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(M.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(z, null, " ", s.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(Y, {
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
				}, s.a.createElement(J, null, s.a.createElement(M.a, null, s.a.createElement(W, null, e.label)), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, s.a.createElement(K, null, s.a.createElement(T.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => s.a.createElement(V, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(J, null, s.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(X, null)), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, s.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				fe = e => s.a.createElement(V, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(J, null, s.a.createElement($, {
					onClick: e.onClick
				}, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, s.a.createElement($, {
					onClick: e.onClick
				}, s.a.createElement(ee, null)))),
				ge = g.a.div("DropdownWrapper", F.a),
				ve = g.a.wrapped(h.b, "DropdownRow", F.a),
				_e = g.a.span("Row", F.a),
				ye = g.a.wrapped(v.b, "DropdownTriangle", F.a),
				xe = g.a.div("DescriptionsRow", F.a),
				Ce = Object(i.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				Ee = Object(a.b)(Ce, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(V, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(J, null, s.a.createElement(W, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, (e => s.a.createElement(ge, {
					onClick: e.openDropdown
				}, s.a.createElement(_e, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(ye, null), s.a.createElement(H, {
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
				}))), e.descriptions && s.a.createElement(xe, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				je = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: a,
					...o
				}) => {
					const i = Object(r.useCallback)(e => a(e.target.value), [a]),
						{
							items: c
						} = o;
					return s.a.createElement(V, {
						disabled: e
					}, s.a.createElement(J, null, s.a.createElement("label", {
						htmlFor: o.id
					}, s.a.createElement(W, {
						className: o.labelClassname
					}, o.label)), s.a.createElement(z, null, o.subtext)), s.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), s.a.createElement(V, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(w, {
						id: o.id,
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: i,
						value: o.selected
					}, c.map(({
						value: e,
						displayName: t
					}) => s.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				we = e => s.a.createElement(V, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(J, null, s.a.createElement(W, null, e.label), s.a.createElement(z, null, e.subtext)), s.a.createElement(Y, null, e.children)),
				ke = e => s.a.createElement(te, {
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
					className: F.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && s.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), e.warning && e.warning, !!e.actionLink && s.a.createElement("div", {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				c = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(d.a, "ImageUploadIcon", m.a), h = o.a.div("ImageIconRow", m.a), f = o.a.div("ImageUploadText", m.a), g = o.a.wrapped(i.a, "FileDrop", m.a), v = o.a.div("ContainerUploading", m.a), _ = e => s.a.createElement(v, {
				className: e.className
			}, s.a.createElement(h, null, s.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), s.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), y = o.a.label("Label", m.a);
			t.b = e => s.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(y, {
					className: Object(a.a)({
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
				return o
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
				a = n.n(s);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				c = r.a.button("HomePageBreadcrumb", a.a),
				l = r.a.div("HomePageGroup", a.a),
				d = r.a.h1("FormPageTitle", a.a),
				u = r.a.div("FormPageSection", a.a),
				m = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				b = r.a.div("FormElement", a.a),
				h = r.a.div("FormGroupDescription", a.a),
				f = r.a.div("FormItem", a.a),
				g = r.a.h3("FormElementTitle", a.a),
				v = r.a.div("FormElementDescription", a.a),
				_ = r.a.div("FormElementError", a.a),
				y = r.a.div("FormElementSubGroup", a.a),
				x = r.a.li("FormListItem", a.a)
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
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = r.a.wrapped(s.a, "ModalInput", d.a),
				m = r.a.input("Input", d.a),
				p = r.a.wrapped(c.a, "RadioOn", d.a),
				b = r.a.wrapped(i.a, "RadioOff", d.a),
				h = r.a.wrapped(a.a, "Checkbox", d.a),
				f = r.a.wrapped(o.a, "CheckboxSelected", d.a),
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
				a = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
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
				}) => a.a.createElement(o.q, u({}, n, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(d.a)(n.className, l.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
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
				}) => a.a.createElement(o.q, u({}, r, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(d.a)(r.className, l.a.BaseButton),
					size: n ? o.c.S : o.c.M,
					text: p(e)
				}));
			class h extends a.a.Component {
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
						small: r = !1,
						isFullWidth: s = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(b, u({}, o, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, o, {
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
				return o
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
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
				o = ({
					type: e,
					key: t
				}) => a[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(a.a))
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
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
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
				E = e => {
					switch (e) {
						case r.GEAR:
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
					zIndex: m.g
				};
			class O extends i.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
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
					}, E(this.props.icon), this.props.title), i.a.createElement(x, {
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
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(d);
			const m = o.a.span("UserIconContainer", u.a),
				p = o.a.wrapped(c.a, "UserIcon", u.a),
				b = o.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => a.a.createElement(b, {
				className: e.className,
				to: `${r.a.redditUrl}/user/${e.username}`
			}, a.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, a.a.createElement(m, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, a.a.createElement(p, {
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
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const l = a.a.div("WidgetBackground", c.a),
				d = a.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: o.eb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const a = {
					[s.U.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.U.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.U.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.U.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.U.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.U.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.U.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[s.bc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.bc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.bc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.bc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.bc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.bc.ALL]: () => r.fbt._("All Time", null, {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
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
			class g extends o.a.Component {
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
					return e.href ? o.a.createElement(c.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(d.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
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
				return o.a.createElement(g, f({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(s),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
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
					}, r.fbt._("Ok", null, {
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
						modalId: `ErrorTextModal--${a()()}`
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
						errorModalTitle: a = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = r.fbt._("More", null, {
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
					}, o), t === i && l.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: a
					}, s || e))
				}
			}
			const w = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				k = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(w, {
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
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
			class m extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
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
			const p = o.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, i)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: r
					}, l)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
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
						errors: a = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(h, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!a[o] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && n.length >= r) && !i;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class a extends s.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, a = n || r;
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
					}), (!a || e.multiple) && s.a.createElement("input", {
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
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
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
				a = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(a);
			t.a = r.a.wrapped(s.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const a = (e, t) => Object(s.a)(e, {
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
				o = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/paymentSystems.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function o(e, t) {
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
				a = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(Object(s.a)(e, [a.a]), {
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
				const n = await Object(o.a)(e, {
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
				a = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/badges.ts"),
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
							endpoint: `${a.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(o.c)(e, t, n),
					[b, h, f, g] = await Promise.all([d, u, m, p]);
				if (b.ok ? r.collections = b.body : r.errors.collections = b.error, h.ok) {
					const e = h.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return f.ok ? r.products = f.body : r.errors.products = f.error, g.ok ? (s()(r.badges, g.body.badges), r.userOwnedBadges = g.body.userOwnedBadges) : r.errors.userBadges = g.error, r
			}
			const u = (e, t) => Object(l.a)(e, {
				endpoint: `${a.a.metaUrl}/products/${t}?types=badge,membership`,
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
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(r),
				a = n("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				o = n("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
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
			const g = (e, t, n, r, a) => {
				const {
					premium: o,
					...i
				} = a, c = (null == o ? void 0 : o.pricePackage) || n.pricePackages[0], d = new s.a(c.price).multipliedBy(r).toFixed();
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
				C = (e, t, n, r, s) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: s
					}
				}),
				E = (e, t, n, r) => Object(f.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: n,
						token: r
					}
				}),
				j = (e, t, n, r) => Object(f.a)(e, {
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
					...a,
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
				return o
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.hb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
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
			var r, s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
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
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
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
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function l(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
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
				g = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function v(e, t) {
				return await Object(a.a)(e, {
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
				a = n.n(s);
			t.a = Object(r.DragDropContext)(a.a)
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
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
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
				return a
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
				a = Object.keys(r).filter(e => "ZZ" !== e).map(e => ({
					value: e,
					displayName: r[e]
				}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
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
				a = "|downsized";

			function o(e, t) {
				return s + e + (t ? a : "")
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
				return a
			})), n.d(t, "d", (function() {
				return o
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
				a = () => s("view"),
				o = () => s("tap"),
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
				return y
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./src/telemetry/index.ts"),
				a = n("./src/telemetry/models/Event.ts");
			const o = e => ({
					...r.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(s.a)({
						...o(e),
						action: a.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(s.a)({
						...o(e),
						action: a.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(s.a)({
						...o(e),
						action: a.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(s.a)({
						...o(e),
						action: a.c.Close,
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
						action: a.c.Request,
						source: "notification"
					})
				},
				b = e => {
					Object(s.a)({
						...m(e, !0),
						action: a.c.Register,
						source: "notification"
					})
				},
				h = (e, t) => {
					Object(s.a)({
						...m(e, !1, t),
						action: a.c.Bail,
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
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => ({
					...r.defaults(e),
					correlationId: Object(o.c)(o.a.PremiumSettings),
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
						type: Object(s.t)(e) ? a.GoldPurchaseType.Cancel : a.GoldPurchaseType.GetPremium
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
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r, s = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(r || (r = {}));
			const a = e => t => ({
					source: "settings",
					action: "connect",
					noun: "sso",
					actionInfo: {
						...s.actionInfo(t),
						type: e
					}
				}),
				o = e => t => ({
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
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

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
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

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
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
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, s.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
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
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.circle, e.className),
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
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
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a(e) {
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
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", c({
				className: Object(a.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
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
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
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
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const c = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
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
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function a(e) {
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
			var r, s, a, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
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
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				w = n("./src/lib/lessComponent.tsx"),
				k = n("./src/reddit/actions/accountGender/index.ts"),
				O = n("./src/reddit/actions/meta.ts"),
				S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/featureFlags/index.ts"),
				N = n("./src/reddit/helpers/trackers/profileSettings.ts");
			var A = n("./src/reddit/constants/experiments.ts"),
				T = n("./src/reddit/helpers/chooseVariant/index.ts"),
				M = n("./src/reddit/selectors/experiments/index.ts");
			var L = n("./src/reddit/selectors/sso.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				R = n("./src/lib/validateEmail/index.ts"),
				U = n("./src/reddit/actions/toaster.ts"),
				F = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				D = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				H = n("./src/reddit/icons/svgs/Info/index.tsx"),
				G = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				W = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/models/User/index.ts"),
				q = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				K = n.n(q);
			const J = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(B.j)(e);
						return t && Object(z.e)(t) || ""
					}
				}),
				Y = Object(o.b)(J, e => ({
					changeEmail: t => e(Object(x.t)(t)),
					sendResetEmail: t => e(Object(x.w)(t)),
					showErrorToast: t => e(Object(U.f)({
						duration: U.a,
						kind: W.b.Error,
						text: t
					}))
				})),
				V = e => e ? a.a.createElement(D.a, {
					className: Object(u.a)(K.a.image, K.a.success)
				}) : a.a.createElement(G.a, {
					className: Object(u.a)(K.a.image, K.a.error)
				}),
				Q = e => e ? r.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : r.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				Z = e => e ? r.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : r.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				X = e => e ? r.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : r.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				$ = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? a.a.createElement(H.a, {
						className: Object(u.a)(K.a.inputIcon, K.a.error)
					}) : a.a.createElement(D.a, {
						className: Object(u.a)(K.a.inputIcon, K.a.success)
					}) : null
				};
			class ee extends a.a.Component {
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
						} = this.state, a = Object(R.a)(s, !1), o = a ? "" : r.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: o,
							inputChecked: !0
						}), a && (t ? n({
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
					} = this.state, s = !this.props.email && !e, o = s && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return a.a.createElement("div", {
						className: K.a.container
					}, a.a.createElement("h3", {
						className: K.a.header
					}, r.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), a.a.createElement("div", {
						className: K.a.status
					}, V(e), a.a.createElement("h3", {
						className: K.a.statusText
					}, Z(e))), a.a.createElement("p", {
						className: K.a.description
					}, Q(e)), a.a.createElement("div", {
						className: K.a.actionContainer
					}, a.a.createElement("div", {
						className: K.a.emailContainer
					}, s ? a.a.createElement(a.a.Fragment, null, a.a.createElement(F.a, {
						className: Object(u.a)(K.a.input, K.a[o]),
						label: r.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), $(this.state), a.a.createElement("h6", {
						className: K.a.errorMsg
					}, n)) : a.a.createElement("p", {
						className: K.a.emailText
					}, X(e), a.a.createElement("span", {
						className: K.a.emailAddress
					}, t))), a.a.createElement(I.i, {
						className: K.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? r.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : r.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var te = Y(ee),
				ne = n("./src/higherOrderComponents/asModal/index.tsx"),
				re = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				se = n("./src/reddit/controls/FormFields/index.tsx"),
				ae = n("./src/reddit/controls/TextButton/index.tsx"),
				oe = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				ie = n("./src/reddit/components/Settings/GenderCollection/Modal.m.less"),
				ce = n.n(ie);
			const le = 50;
			class de extends a.a.Component {
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
						isPending: s
					} = this.state;
					return a.a.createElement("section", {
						className: Object(u.a)(e, ce.a.container)
					}, a.a.createElement(re.h, null, a.a.createElement(oe.a, null, a.a.createElement(re.p, null, r.fbt._("I refer to myself as...", null, {
						hk: "4x0fpA"
					})), a.a.createElement(ae.a, {
						onClick: t,
						disabled: s
					}, a.a.createElement(re.b, null)))), a.a.createElement(re.k, null, a.a.createElement(se.b, {
						placeholder: r.fbt._("Gender identity", null, {
							hk: "4lT15L"
						}),
						className: ce.a.customGenderInput,
						disabled: s,
						maxLength: le,
						name: "customGender",
						onChange: this.handleCustomGenderChange,
						type: "text",
						value: n
					})), a.a.createElement(re.f, null, a.a.createElement(re.a, {
						onClick: t,
						disabled: s
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(re.q, {
						disabled: !this.inputsAreValid() || s,
						onClick: this.handleSubmit
					}, r.fbt._("Confirm", null, {
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
				xe = Object(c.c)({
					isDropdownOpen: (e, t) => Object(ge.b)(t.dropdownId)(e)
				});
			class Ce extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => a.a.createElement(he.b, {
						className: _e.a.dropdownRow,
						displayText: e.displayLabel || e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}, e.contentJsx || e.icon), this.renderDropdownItem = (e, t) => a.a.createElement(he.b, {
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
						selectedKey: o
					} = this.props, i = n && {
						displayLabel: n,
						key: n
					}, c = t.find(e => e.key === o) || i || t[0];
					return a.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(_e.a.container, e.className),
						onClick: this.onToggleDropdown
					}, a.a.createElement("div", {
						className: _e.a.labelWrapper
					}, r(c), a.a.createElement("span", null, a.a.createElement(fe.b, null))), a.a.createElement(ye, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, o === e.key))))
				}
			}
			var Ee, je = Object(o.b)(xe, (e, t) => ({
					openDropdown: () => {
						e(Object(pe.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Ce),
				we = n("./src/reddit/components/Settings/shared/Widgets.tsx");
			! function(e) {
				e.FEMALE = "FEMALE", e.MALE = "MALE", e.NON_BINARY = "NON_BINARY", e.OPT_OUT = "OPT_OUT", e.USER_DEFINED = "USER_DEFINED"
			}(Ee || (Ee = {}));
			var ke = n("./src/reddit/components/Settings/GenderCollection/index.m.less"),
				Oe = n.n(ke);
			const Se = () => [{
				key: Ee.FEMALE,
				displayText: r.fbt._("Female", null, {
					hk: "G3G7q"
				})
			}, {
				key: Ee.MALE,
				displayText: r.fbt._("Male", null, {
					hk: "2xBOfQ"
				})
			}, {
				key: Ee.NON_BINARY,
				displayText: r.fbt._("Non-binary", null, {
					hk: "1d5O8v"
				})
			}, {
				key: Ee.OPT_OUT,
				displayText: r.fbt._("Prefer not to say", null, {
					hk: "48BJY1"
				})
			}, {
				key: Ee.USER_DEFINED,
				displayLabel: r.fbt._("Custom", null, {
					hk: "rTcBl"
				}),
				displayText: r.fbt._("I refer to myself as...", null, {
					hk: "3RVNst"
				})
			}];
			class Ie extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isCustomGenderModalOpen: !1,
						pending: !1,
						tmpSelected: this.props.selected
					}, this.onSelect = async e => {
						const {
							onChange: t
						} = this.props, n = e.key;
						if (n === Ee.USER_DEFINED) return void this.openCustomGenderModal();
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
							genderCategory: Ee.USER_DEFINED
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
						definedGender: o,
						genderCategory: i
					} = {
						...t ? n : s
					};
					return a.a.createElement(we.c, {
						label: r.fbt._("Gender", null, {
							hk: "1spCV5"
						}),
						subtext: r.fbt._("Reddit will never share this information and only uses it to improve what content you see.", null, {
							hk: "1PqDkg"
						})
					}, a.a.createElement("div", {
						className: Oe.a.wrapper
					}, a.a.createElement(je, {
						dropdownId: "gender-dropdown-id",
						items: Se(),
						onSelect: this.onSelect,
						placeholder: r.fbt._("Select", null, {
							hk: "1zIGi5"
						}),
						selectedKey: i || ""
					})), e && a.a.createElement(ue, {
						onCloseModal: this.closeCustomGenderModal,
						definedGender: o || "",
						onConfirmModal: this.onConfirmModal,
						onOverlayClick: this.closeCustomGenderModal,
						withOverlay: !0
					}))
				}
			}
			var Pe = n("./src/reddit/components/Settings/modalIds.ts"),
				Ne = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Ae = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				Te = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const Me = Object.freeze({
					[Ae.GERMAN_LOCALE]: Object.freeze({
						bcp47: Ae.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.GERMAN_LOCALE),
						rtl: !1
					}),
					[Ae.DEFAULT_LOCALE]: Object.freeze({
						bcp47: Ae.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.DEFAULT_LOCALE),
						rtl: !1
					}),
					[Ae.SPANISH_LOCALE]: Object.freeze({
						bcp47: Ae.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.SPANISH_LOCALE),
						rtl: !1
					}),
					[Ae.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: Ae.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(j.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[Ae.ITALIAN_LOCALE]: Object.freeze({
						bcp47: Ae.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.ITALIAN_LOCALE),
						rtl: !1
					}),
					[Ae.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: Ae.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[Ae.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: Ae.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				Le = {},
				Be = Object.freeze({
					[Ae.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: Ae.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[Ae.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: Ae.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[Ae.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: Ae.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(j.isoLocaleToFbtLocale)(Ae.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				}),
				Re = Object(c.a)(B.H, Te.b, (e, t) => e || t ? {
					...Me,
					...Le,
					...Be
				} : Me);
			var Ue = n("./src/reddit/helpers/location.ts");
			const Fe = Object(c.a)(e => Object(T.c)(e, {
				experimentEligibilitySelector: B.K,
				experimentName: A.E
			}), e => e === A.L.Enabled);
			var De = n("./src/reddit/selectors/meta.ts"),
				He = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				Ge = n.n(He);
			const We = Object(c.c)({
					gender: e => {
						var t, n;
						return null === (n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.account) || void 0 === n ? void 0 : n.gender
					},
					hasVerifiedEmail: B.A,
					isFPR: B.I,
					language: B.U,
					shouldShowCreatePasswordModal: L.d,
					shouldShowGenderCollection: e => Object(T.c)(e, {
						experimentName: A.sd,
						experimentEligibilitySelector: M.e
					}) === A.Bd.Enabled,
					showLanguageSection: P.d.langSelect,
					availableLocales: Re,
					locale: De.i,
					shouldShowCountrySection: Fe,
					country: B.f
				}),
				ze = Object(o.b)(We, e => ({
					changeAccountGender: t => e(Object(k.a)(t)),
					changeLanguage: t => e(Object(O.d)(t)),
					openChangeEmailModal: () => e(Object(y.i)(Pe.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(y.h)(Pe.l)),
					resendEmail: () => e(Object(x.v)())
				})),
				qe = w.a.a("Link", Ge.a),
				Ke = w.a.div("countryDropdown", Ge.a),
				Je = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : a.a.createElement(a.a.Fragment, null, r.fbt._("{email} not verified!", [r.fbt._param("email", e)], {
					hk: "3PanQN"
				}), a.a.createElement(I.g, {
					className: Ge.a.tertiaryBtn,
					onClick: n
				}, r.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : r.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var Ye = ze(({
					changeAccountGender: e,
					changeLanguage: t,
					gender: o,
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
					const [x, C] = Object(s.useState)(!1), E = Object(s.useCallback)(async e => {
						C(!0), await t(e), C(!1)
					}, [t]), w = Object(S.b)(), k = Object(s.useCallback)(async ({
						definedGender: t,
						genderCategory: n
					}) => {
						w(Object(N.a)()), await e({
							definedGender: t,
							genderCategory: n
						})
					}, [e, w]), [O, I] = Object(s.useState)(f), [P, A] = Object(s.useState)(Object(Ue.singleCountryList)(v));
					Object(s.useEffect)(() => {
						"" !== c && g in f || I(e => ({
							...e,
							[c]: Object.freeze({
								bcp47: c,
								displayName: c,
								englishName: c,
								fbtLocale: Object(j.isoLocaleToFbtLocale)(c),
								rtl: !1
							})
						}))
					}, [f, c, g]), Object(s.useEffect)(() => {
						(async () => {
							const {
								allCountryOptions: e
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/location.ts"));
							A(e)
						})()
					}, []);
					const T = Object(s.useMemo)(() => (e => Object.entries(e).map(([e, t]) => ({
						value: e,
						displayName: t.displayName
					})))(O), [O]);
					return i ? a.a.createElement(te, {
						email: y.email
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(Ne.a, null, r.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), a.a.createElement(we.b, {
						actionText: r.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: r.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							u ? d() : l()
						},
						subtext: Je(y)
					}), !u && a.a.createElement(we.b, {
						actionText: r.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: r.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !m,
						onClick: h,
						subtext: r.fbt._("Password must be at least 8 characters long", null, {
							hk: "3X8DBF"
						})
					}), m && a.a.createElement(Ie, {
						onChange: k,
						selected: o
					}), p ? a.a.createElement(we.h, {
						inputDisabled: x,
						id: "lang",
						items: T,
						labelClassname: Ge.a.languageSelector,
						label: r.fbt._("Display language {betaLabel}", [r.fbt._param("betaLabel", r.fbt._("{=(beta)}", [r.fbt._param("=(beta)", a.a.createElement("span", {
							className: Ge.a.betaLabel
						}, r.fbt._("(beta)", null, {
							hk: "1vhAp5"
						})))], {
							hk: "2gBJnB"
						}))], {
							hk: "46Sw4H"
						}),
						onChange: E,
						selected: g,
						subtext: r.fbt._("Select the language you'd like to experience the Reddit interface in. Note that this won't change the language of user-generated content and that this feature is still in development so translations and UI are still under review.", null, {
							hk: "2d65FQ"
						})
					}) : null, b ? a.a.createElement(Ke, null, a.a.createElement(we.h, {
						id: "country",
						items: P,
						label: r.fbt._("Country", null, {
							hk: "1GB5Ra"
						}),
						onChange: e => _(e, "countryCode"),
						selected: v,
						subtext: r.fbt._("This is your primary location. {accountPrefs: language link}", [r.fbt._param("accountPrefs: language link", a.a.createElement(qe, {
							href: "https://www.reddit.com/api/report_redirect?reason_code=COUNTRY_SETTING"
						}, "Learn more"))], {
							hk: "bLreC"
						})
					})) : null)
				}),
				Ve = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				Qe = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				Ze = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				Xe = n("./src/reddit/constants/accountManager.ts"),
				$e = n("./src/reddit/contexts/PageLayer/index.tsx"),
				et = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				tt = n("./src/reddit/selectors/accountManager.ts"),
				nt = n("./src/reddit/selectors/activeModalId.ts"),
				rt = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				st = n("./src/config.ts"),
				at = n("./src/reddit/helpers/trackers/sso.ts"),
				ot = n("./src/reddit/hooks/useTracking.ts"),
				it = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				ct = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				lt = n.n(ct);
			const dt = w.a.wrapped(we.c, "ConnectApple", lt.a),
				ut = w.a.wrapped(I.i, "ConnectAppleButton", lt.a),
				mt = w.a.div("ConnectionInfo", lt.a),
				pt = w.a.wrapped(I.m, "DisconnectButton", lt.a),
				bt = w.a.wrapped(it.a, "AppleIcon", lt.a),
				ht = w.a.span("TextAndIconWrapper", lt.a);

			function ft(e) {
				return e.issuerId ? (() => a.a.createElement(we.c, {
					label: r.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, a.a.createElement(mt, null, a.a.createElement(pt, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[lt.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return a.a.createElement(dt, {
						className: t,
						label: r.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, a.a.createElement(ut, {
						className: t,
						onClick: e.onConnectClick
					}, a.a.createElement(ht, null, a.a.createElement(bt, null), r.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const gt = Object(c.c)({
				issuerId: L.a,
				shouldShowCreatePasswordModal: L.d
			});
			var vt = Object(o.b)(gt, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(y.h)(Pe.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(y.h)(Pe.j)),
					openLinkAppleSSOModal: () => e(Object(_.f)()),
					openUnlinkAppleSSOModal: () => e(Object(_.k)())
				}))(e => {
					const t = Object(ot.a)();
					return a.a.createElement(ft, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(at.c)(at.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(at.d)(at.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				_t = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const yt = w.a.wrapped(we.c, "ConnectGoogle", lt.a),
				xt = w.a.wrapped(I.i, "ConnectGoogleButton", lt.a),
				Ct = w.a.div("ConnectionInfo", lt.a),
				Et = w.a.wrapped(I.m, "DisconnectButton", lt.a),
				jt = w.a.wrapped(_t.a, "GoogleIcon", lt.a),
				wt = w.a.span("TextAndIconWrapper", lt.a);

			function kt(e) {
				return e.hasGoogleIdentity ? (() => a.a.createElement(we.c, {
					label: r.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, a.a.createElement(Ct, null, a.a.createElement(Et, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[lt.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return a.a.createElement(yt, {
						className: t,
						label: r.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, a.a.createElement(xt, {
						className: t,
						onClick: e.onConnectClick
					}, a.a.createElement(wt, null, a.a.createElement(jt, null), r.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const Ot = Object(c.c)({
				hasGoogleIdentity: L.b,
				shouldShowCreatePasswordModal: L.d
			});
			var St = Object(o.b)(Ot, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(Pe.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(y.h)(Pe.n)),
					openLinkGoogleSSOModal: () => e(Object(_.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(_.l)())
				}))(e => {
					const t = Object(ot.a)();
					return a.a.createElement(kt, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(at.c)(at.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(at.d)(at.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				It = n("./src/reddit/actions/externalAccount.ts"),
				Pt = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Nt = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				At = n("./src/reddit/models/ExternalAccount/index.ts");
			const Tt = w.a.wrapped(Nt.a, "TwitterIcon", lt.a),
				Mt = ({
					isFilled: e,
					...t
				}) => a.a.createElement(Tt, t),
				Lt = w.a.wrapped(Pt.a, "LoadingIcon", lt.a),
				Bt = ({
					isFilled: e,
					...t
				}) => a.a.createElement(Lt, t),
				Rt = w.a.wrapped(we.c, "ConnectTwitter", lt.a),
				Ut = w.a.wrapped(I.m, "DisconnectButton", lt.a),
				Ft = w.a.span("Username", lt.a),
				Dt = w.a.div("ConnectionInfo", lt.a);
			var Ht = n("./src/reddit/selectors/externalAccount.ts");
			const Gt = Object(c.c)({
					twitterAccount: Ht.a,
					isTwitterConnectionPending: Ht.b
				}),
				Wt = Object(o.b)(Gt, e => ({
					onConnectAccount: t => {
						e(It.m(t)), t === At.a.Twitter && e((e, t) => N.c(t()))
					},
					onDisconnectAccount: t => {
						e(It.n(t)), t === At.a.Twitter && e((e, t) => N.e(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => N.f(n(), t))
				}));
			var zt = Object($e.t)()(Wt((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(At.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(At.a.Twitter)
					};
				return a.a.createElement(s.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return a.a.createElement(we.c, {
						label: r.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: r.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, a.a.createElement(Dt, null, a.a.createElement("div", null, a.a.createElement(Ft, null, "@", t.username)), a.a.createElement(Ut, {
						onClick: n
					}, "(", r.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: s
					} = e, o = Object(u.a)({
						[lt.a["m-responsive"]]: n
					}), i = r.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return a.a.createElement(Rt, {
						className: o,
						label: r.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: r.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, a.a.createElement(I.q, {
						className: lt.a.ConnectTwitterButton,
						Icon: s ? Bt : Mt,
						text: s ? null : i,
						onClick: t
					}))
				})(), a.a.createElement(we.o, {
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
			var qt = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return a.a.createElement(s.Fragment, null, a.a.createElement(Ne.a, {
					id: "connected-accounts"
				}, r.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), a.a.createElement(zt, e), (() => {
					if (e.shouldRenderSSOAccounts) return a.a.createElement(s.Fragment, null, a.a.createElement(vt, {
						isResponsiveSettingsEnabled: t
					}), a.a.createElement(St, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function Kt() {
				return (Kt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Jt = Object(c.c)({
				isEmployee: B.H
			});
			var Yt = Object(o.b)(Jt)(e => {
					const t = !e.isEmployee;
					return a.a.createElement(qt, Kt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				Vt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Qt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				Zt = n.n(Qt);
			const Xt = w.a.wrapped(rt.b, "Trash", Zt.a),
				$t = w.a.wrapped(Ne.a, "BetaTestsHeading", Zt.a),
				en = w.a.wrapped(we.o, "InBetaToggle", Zt.a),
				tn = w.a.wrapped(we.o, "InRedesignBetaToggle", Zt.a),
				nn = w.a.button("DeactivateButton", Zt.a),
				rn = w.a.div("DeactivateWrapper", Zt.a),
				sn = Object(c.c)({
					changePasswordHref: (e, t) => Object(tt.c)(e, {
						pageLayer: t.pageLayer,
						path: Xe.c.ChangePassword
					}),
					deactivateModalOpen: Object(nt.b)("deactivate_modal_id"),
					email: B.m,
					hasGoogleIdentity: L.b,
					inRedesignBeta: B.E,
					optoutModalOpen: Object(nt.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: L.d,
					user: B.j
				}),
				an = Object(o.b)(sn, (e, t) => ({
					deactivate: t => {
						e(Object(x.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(y.h)(Pe.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: st.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${st.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(x.v)()),
					toggleChangePasswordModal: () => e(Object(_.b)()),
					toggleDeactivateModal: () => e(Object(y.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(y.i)("settins_optout_modal_id"))
				}));
			class on extends a.a.Component {
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
						inRedesignBeta: s,
						isResponsiveSettingsEnabled: o,
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
						[Zt.a["m-responsive"]]: o
					}), v = Object(u.a)({
						[Zt.a.ResponsiveOverlay]: o
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Ze.a, null, a.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: o
					}, r.fbt._("Account settings", null, {
						hk: "2faClM"
					})), a.a.createElement(Ye, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow,
						update: h
					}), a.a.createElement(Yt, this.props), a.a.createElement($t, {
						className: g
					}, r.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), a.a.createElement(en, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: r.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: r.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), a.a.createElement(tn, {
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
					}), a.a.createElement(Ne.a, null, r.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), a.a.createElement(rn, null, a.a.createElement(nn, {
						onClick: this.deactivateAccount
					}, a.a.createElement(Xt, null), r.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && a.a.createElement(E.a, {
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
					}), e && a.a.createElement(Vt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && a.a.createElement(Ve.a, {
						isResponsiveSettingsEnabled: o
					})), n && a.a.createElement(C.a, {
						className: Zt.a.googleDisconnectIFrame,
						pageLayer: l,
						path: Xe.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var cn = Object($e.t)()(an(on)),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xn = w.a.p("Date", _n.a), Cn = w.a.wrapped(gn.a, "UserNameAndIcon", _n.a), En = w.a.button("Button", _n.a), jn = w.a.div("ButtonWrapper", _n.a);
			var wn = w.a.wrapped(e => a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(Cn, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(fn.b)({
						author: e.name,
						tooltipIdPrefix: hn.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), a.a.createElement(xn, null, Object(bn.d)(e.date / 1e3)), a.a.createElement(jn, null, a.a.createElement(En, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, yn._("Remove", null, {
					hk: "1rZWA4"
				})))), "Component", _n.a),
				kn = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				On = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				Sn = n.n(On);
			const In = 5,
				Pn = w.a.h4("ListHeading", Sn.a),
				Nn = w.a.div("ListBox", Sn.a),
				An = w.a.div("MoreWrapper", Sn.a),
				Tn = w.a.button("MoreButton", Sn.a),
				Mn = w.a.wrapped(we.m, "Subtext", Sn.a);
			class Ln extends a.a.Component {
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
						api: s,
						add: o,
						padBottom: i,
						remove: c,
						list: l,
						label: d,
						title: m,
						subtext: p
					} = this.props, b = e ? l.length : 5;
					return a.a.createElement("div", {
						className: Object(u.a)(Sn.a.container, n, {
							[Sn.a.mPadBottom]: !!i
						})
					}, a.a.createElement(Pn, null, m), void 0 !== p && a.a.createElement(Mn, null, p), a.a.createElement(F.a, {
						buttonText: r.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: s.new === kn.a.pending,
						label: d,
						onClick: () => t && o(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), a.a.createElement(Nn, null, l.slice(0, b).map(e => a.a.createElement(wn, {
						disabled: s[e.name] === kn.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > In && !e ? a.a.createElement(An, null, a.a.createElement(Tn, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, r.fbt._("Show all", null, {
						hk: "W1Cyk"
					}))) : null))
				}
			}
			var Bn = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Rn = n.n(Bn);
			const Un = {
					[ln.b.Whitelisted]: () => r.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[ln.b.Everyone]: () => r.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				Fn = e => {
					const t = Un[e];
					return t && t()
				},
				Dn = w.a.div("ListsWrapper", Rn.a),
				Hn = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Gn = Object(o.b)(Hn, (e, t) => ({
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
					removeWhitelisted: s,
					saveChatSettings: o,
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
					return a.a.createElement(Ze.a, null, a.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: !1
					}, r.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), a.a.createElement(we.d, {
						label: r.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: m,
						displayItems: p,
						selected: u,
						onClick: e => {
							o({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), a.a.createElement(we.d, {
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
					}), (t.invitePolicy !== dn.a.anybody || n === ln.b.Whitelisted) && a.a.createElement(Dn, null, a.a.createElement(Ln, {
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
				Wn = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				zn = n.n(Wn);

			function qn(e) {
				return a.a.createElement("header", {
					className: Object(u.a)(zn.a.container, e.className)
				}, a.a.createElement("div", {
					className: zn.a.title
				}, r.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), a.a.createElement("div", {
					className: zn.a.tag
				}, r.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var Kn = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				Jn = n("./src/reddit/contexts/ApiContext.tsx"),
				Yn = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				Vn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				Qn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Zn = n("./src/reddit/selectors/economics.ts"),
				Xn = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				$n = n.n(Xn);
			const {
				fbt: er
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var tr;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(tr || (tr = {}));
			class nr extends a.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(Yn.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = tr.Default;
					e.connectCode && e.connectStateToken && (t = tr.Connecting), e.stripeConnected && (t = tr.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== tr.Connected) {
						const e = await Object(Yn.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: tr.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: tr.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = er._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === tr.Connected && (n = er._("connect", null, {
						hk: "22jQRU"
					})), t === tr.Connecting && (n = er._("connecting...", null, {
						hk: "3ccNPc"
					})), a.a.createElement("div", {
						className: e
					}, a.a.createElement(Ne.a, null, er._("accept tips", null, {
						hk: "1kEl0R"
					})), a.a.createElement(we.k, {
						direction: "row",
						label: er._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: er._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, a.a.createElement("div", {
						className: $n.a.cta
					}, a.a.createElement(I.i, {
						className: $n.a.button,
						disabled: t !== tr.Default,
						onClick: this.initiateStripeConnect
					}, n), a.a.createElement("div", {
						className: $n.a.legal
					}, er._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [er._param("Previews Terms of Service", a.a.createElement(Kn.a, {
						className: $n.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), a.a.createElement("div", {
						className: $n.a.disclaimer
					}, a.a.createElement(Qn.a, {
						className: $n.a.icon
					}), er._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const rr = Object(c.c)({
					stripeConnected: Zn.u
				}),
				sr = Object(o.b)(rr, e => ({
					onError: t => e(Object(U.f)({
						duration: 5e3,
						kind: W.b.Error,
						text: Object(Vn.a)(t)
					}))
				}));
			var ar = Object(Jn.b)(sr(nr)),
				or = n("./src/reddit/components/Settings/Creator/index.m.less"),
				ir = n.n(or);

			function cr(e) {
				return a.a.createElement(Ze.a, null, a.a.createElement("div", null, a.a.createElement(qn, {
					className: ir.a.header
				}), a.a.createElement(ar, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var lr = n("./src/lib/listingSort/index.ts"),
				dr = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				ur = n("./src/reddit/constants/listingSorts.ts");
			const mr = [m.U.HOT, m.U.NEW, m.U.TOP, m.U.RISING];
			var pr = e => {
				const {
					dropdownId: t
				} = e, n = mr.map(e => ({
					key: e,
					displayText: Object(ur.a)(e),
					icon: a.a.createElement(dr.a, {
						sort: e
					})
				}));
				return a.a.createElement(je, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const br = [m.bc.HOUR, m.bc.DAY, m.bc.WEEK, m.bc.MONTH, m.bc.YEAR, m.bc.ALL];
			var hr = e => {
					const {
						dropdownId: t
					} = e, n = br.map(e => ({
						key: e,
						displayText: Object(ur.b)(e)
					}));
					return a.a.createElement(je, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				fr = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				gr = n.n(fr);
			const vr = w.a.div("Separator", gr.a);
			class _r extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(lr.d)(this.props.fullSort);
						this.props.onChange(Object(lr.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(lr.d)(this.props.fullSort);
						this.props.onChange(Object(lr.c)({
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
						timeSort: o
					} = Object(lr.d)(t);
					return a.a.createElement(we.c, {
						className: e,
						label: r.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: r.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, a.a.createElement("div", {
						className: gr.a.wrapper
					}, a.a.createElement(pr, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: s
					}), o && a.a.createElement(a.a.Fragment, null, a.a.createElement(vr, null), a.a.createElement(hr, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: o
					}))))
				}
			}
			var yr = n("./src/reddit/constants/postLayout.ts"),
				xr = n("./src/reddit/icons/fonts/index.tsx"),
				Cr = n("./src/reddit/controls/Dropdown/index.m.less"),
				Er = n.n(Cr);
			const jr = {
				[yr.d.Card]: Object(xr.b)("view_card"),
				[yr.d.Classic]: Object(xr.b)("view_classic"),
				[yr.d.Compact]: Object(xr.b)("view_compact")
			};

			function wr(e) {
				const t = jr[e.layout];
				return a.a.createElement(t, {
					className: Er.a.iconStyles
				})
			}
			const kr = [yr.d.Card, yr.d.Classic, yr.d.Compact];
			var Or = e => {
					const {
						dropdownId: t
					} = e, n = kr.map(e => ({
						key: e,
						displayText: Object(yr.h)(e),
						icon: a.a.createElement(wr, {
							layout: e
						})
					}));
					return a.a.createElement(je, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				Sr = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				Ir = n.n(Sr);
			class Pr extends a.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: r,
						layout: s
					} = this.props;
					return a.a.createElement(we.c, {
						className: e,
						label: n,
						subtext: r
					}, a.a.createElement("div", {
						className: Ir.a.wrapper
					}, a.a.createElement(Or, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: s
					})))
				}
			}
			var Nr = n("./src/reddit/components/Settings/FeedForm.m.less"),
				Ar = n.n(Nr);

			function Tr({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					hideNSFW: n,
					openPostInNewTab: s,
					over18: o,
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
					[Ar.a["m-responsive"]]: e
				});
				return a.a.createElement(Ze.a, null, a.a.createElement(Qe.b, {
					isResponsiveSettingsEnabled: e
				}, r.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), a.a.createElement(Ne.a, null, r.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), a.a.createElement(we.o, {
					on: o,
					onClick: () => f(!o, "over18"),
					label: r.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: r.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), a.a.createElement(we.o, {
					disabled: !o,
					label: r.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!o && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: r.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), a.a.createElement(we.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: r.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: r.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), a.a.createElement(we.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: r.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: r.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), a.a.createElement(we.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: r.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: r.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), a.a.createElement(_r, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), a.a.createElement(we.o, {
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
				}), a.a.createElement(Pr, {
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
				}), a.a.createElement(we.o, {
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
				}), a.a.createElement(we.o, {
					className: g,
					on: !!s,
					onClick: () => f(!s, "openPostInNewTab"),
					label: r.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: r.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), a.a.createElement(Ne.a, {
					className: g
				}, r.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), a.a.createElement(we.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: r.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: r.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ne.a, null, r.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), a.a.createElement(we.f, {
					label: r.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: r.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${st.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var Mr = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				Lr = n("./src/reddit/helpers/trackers/notifications.ts"),
				Br = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				Rr = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Ur = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				Fr = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				Dr = n.n(Fr);
			var Hr = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [o, i] = Object(s.useState)(Ur.a.Push), c = Object(ot.a)(), l = o === Ur.a.Push, d = o === Ur.a.Email;
					return a.a.createElement(Ze.a, null, a.a.createElement("nav", {
						className: Dr.a.nav
					}, a.a.createElement("button", {
						onClick: () => {
							i(l ? Ur.a.Email : Ur.a.Push)
						}
					}, a.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: e
					}, d && a.a.createElement(Br.a, {
						className: Dr.a.arrowLeft
					}), l ? r.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : r.fbt._("Back", null, {
						hk: "26R5gK"
					}), l && a.a.createElement(Rr.a, {
						className: Dr.a.arrowRight
					})))), a.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: e
					}, l ? r.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : r.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					})), l ? a.a.createElement(Mr.b, null) : a.a.createElement(a.a.Fragment, null, a.a.createElement(Mr.a, null), a.a.createElement(Ne.a, null), a.a.createElement(we.o, {
						on: !!t,
						onClick: () => {
							c(Object(Lr.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: r.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})))
				},
				Gr = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Wr = n.n(Gr);

			function zr(e) {
				return a.a.createElement("header", {
					className: Object(u.a)(Wr.a.container, e.className)
				}, a.a.createElement("div", {
					className: Wr.a.title
				}, r.fbt._("Payments", null, {
					hk: "rydT0"
				})), a.a.createElement("div", {
					className: Wr.a.description
				}, r.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var qr = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Kr = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Jr = n("./src/reddit/models/Payments/index.ts"),
				Yr = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Vr = n.n(Yr);
			class Qr extends a.a.Component {
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
						const t = e.type === Jr.a.SavedStripe ? await Object(Yn.b)(this.props.apiContext(), e.id) : await Object(Yn.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: {
								...t.paymentsBeingRemoved,
								[e.id]: !1
							}
						}))
					}
				}
				render() {
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement(Ne.a, null, r.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return a.a.createElement("div", {
							className: Vr.a.payment,
							key: e.id
						}, a.a.createElement("div", {
							className: Vr.a.paymentDisplay
						}, a.a.createElement(Kr.a, {
							className: Vr.a.lock
						}), e.display), a.a.createElement(I.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? r.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : r.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && a.a.createElement("div", {
						className: Vr.a.noSavedPayment
					}, r.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Zr = Object(c.c)({
					savedPayments: Zn.p
				}),
				Xr = Object(o.b)(Zr, e => ({
					onError: t => e(Object(U.f)({
						duration: 5e3,
						kind: W.b.Error,
						text: Object(Vn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Jr.a.SavedStripe && e(Object(qr.a)({
							cardId: t.id
						})), t.type === Jr.a.SavedPayPal && e(Object(qr.e)({
							sourceId: t.id
						}))
					}
				}));
			var $r = Object(Jn.b)(Xr(Qr)),
				es = n("./src/reddit/components/Settings/Payments/index.m.less"),
				ts = n.n(es);
			var ns = () => a.a.createElement(Ze.a, null, a.a.createElement(zr, {
					className: ts.a.header
				}), a.a.createElement($r, null)),
				rs = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				ss = n("./src/lib/constants/euCookiePolicy.ts");
			const as = Object(c.a)(e => Object(T.c)(e, {
					experimentEligibilitySelector: T.a,
					experimentName: A.h
				}), e => e === A.c.Enabled),
				os = Object(c.a)(e => Object(B.f)(e), e => ss.b.includes(e)),
				is = Object(c.a)(e => Object(T.c)(e, {
					experimentEligibilitySelector: T.a,
					experimentName: A.f
				}), e => e === A.a.Enabled),
				cs = w.a.span("SubheaderLink", Rn.a),
				ls = w.a.button("GenerateBackupCodesButton", Rn.a),
				ds = w.a.wrapped(we.f, "ThirdPartyAuth", Rn.a),
				us = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: P.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: L.d,
					shouldConsolidateAdsPreferences: is,
					shouldRemoveAdsPreferences: as,
					shouldKeepAdsPreferencesForGDPR: os
				}),
				ms = Object(o.b)(us, (e, t) => ({
					addBlocked: t => e(Object(mn.h)(t)),
					addWhitelisted: t => e(Object(pn.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(y.h)(Pe.h)),
					removeWhitelisted: t => e(Object(pn.h)(t)),
					removeBlocked: t => e(Object(mn.g)(t)),
					saveChatSettings: t => e(Object(un.c)(t)),
					enable2FA: () => e(Object(_.d)()),
					disable2FA: () => e(Object(_.c)()),
					generateBackupCodes: () => e(Object(_.a)())
				}));
			var ps = ms(({
					addBlocked: e,
					blocked: t,
					blockedApi: n,
					prefs: {
						allowClickTracking: s,
						hideFromRobots: o,
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
				}) => a.a.createElement(Ze.a, null, a.a.createElement(Qe.b, {
					isResponsiveSettingsEnabled: v
				}, r.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), a.a.createElement(Qe.a, null, r.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [r.fbt._param("=Privacy & Security FAQs", a.a.createElement(cs, null, r.fbt._("{=Privacy & Security FAQs}", [r.fbt._param("=Privacy & Security FAQs", a.a.createElement("a", {
					href: `${st.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), a.a.createElement(Ne.a, null, r.fbt._("Safety", null, {
					hk: "WyYmF"
				})), a.a.createElement(Ln, {
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
				}), j ? ((e, t, n, s, o, i, c, l, d, u, m, p) => a.a.createElement(a.a.Fragment, null, a.a.createElement(Ne.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), a.a.createElement(we.o, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && a.a.createElement(we.o, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u || m && a.a.createElement(we.o, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), !u && a.a.createElement(we.o, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), a.a.createElement(Ne.a, null, r.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && a.a.createElement(we.o, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), a.a.createElement(Ne.a, null, r.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), a.a.createElement(we.o, {
					on: p,
					onClick: () => s(!p, "thirdPartyPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(o, s, i, x, 0, C, 0, p, m, w, k, b) : ((e, t, n, s, o, i, c, l, d, u, m) => a.a.createElement(a.a.Fragment, null, a.a.createElement(Ne.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), a.a.createElement(we.o, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && a.a.createElement(we.o, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u || m && a.a.createElement(we.o, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), a.a.createElement(we.o, {
					on: o,
					onClick: () => s(!o, "thirdPartyDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: r.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), a.a.createElement(we.o, {
					on: c,
					onClick: () => s(!c, "thirdPartySiteDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && a.a.createElement(we.o, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && a.a.createElement(we.o, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(o, s, i, x, l, C, d, p, m, w, k), a.a.createElement(Ne.a, null, r.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), a.a.createElement(we.o, {
					on: c,
					onClick: () => {
						E ? _() : c ? f() : h()
					},
					label: r.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: a.a.createElement(a.a.Fragment, null, r.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && a.a.createElement(a.a.Fragment, null, " ", r.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", a.a.createElement(ls, {
						type: "button",
						onClick: () => g()
					}, r.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), a.a.createElement(ds, {
					className: Object(u.a)({
						[Rn.a["m-responsive"]]: v
					}),
					label: r.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${st.a.redditUrl}/prefs/apps`,
					last: !0
				}), E && a.a.createElement(Ve.a, {
					isResponsiveSettingsEnabled: v
				}))),
				bs = n("./src/reddit/actions/preferences.ts"),
				hs = n("./src/reddit/actions/snoovatar.ts"),
				fs = n("./src/reddit/components/Loader/index.m.less"),
				gs = n.n(fs);
			class vs extends a.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: r
					} = this.props;
					return e ? n ? n() : a.a.createElement(Pt.a, {
						center: !0,
						className: gs.a.loadingIcon,
						sizePx: r || 10
					}) : t()
				}
			}
			var _s = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				ys = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				xs = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Cs = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Es = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				js = n("./src/reddit/selectors/structuredStyles.ts"),
				ws = n("./src/reddit/selectors/subredditSettings.ts"),
				ks = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				Os = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				Ss = n.n(Os);
			const {
				fbt: Is
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ps = 30, Ns = 200, As = Object(c.a)(B.j, ws.a, B.vb, js.n, nt.a, (e, t, n, r, s) => {
				const a = e && e.profileId,
					o = a && r[a] ? r[a].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(z.e)(e),
					currentUserUrl: e.url,
					isEmployee: e.isEmployee,
					isGold: e.isGold,
					over18: t.over18,
					prefersReducedAnimations: !!n.reduceAnimationsFromAwards,
					profileBanner: o,
					profileIcon: e.accountIcon,
					publicDescription: t.publicDescription,
					showActiveCommunities: n.showActiveCommunities,
					snoovatarUrl: e.snoovatarFullBodyAsset,
					title: t.title,
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === s
				}
			}), Ts = w.a.div("ImageUploaderLayout", Ss.a), Ms = w.a.wrapped(ks.a, "IconImageUploader", Ss.a), Ls = w.a.wrapped(xs.a, "ProfileIcon", Ss.a), Bs = w.a.wrapped(ks.a, "BannerImageUploader", Ss.a), Rs = w.a.wrapped(ys.a, "ProfileBanner", Ss.a), Us = w.a.div("ProfileModerationContent", Ss.a), Fs = w.a.wrapped(Es.a, "PlusCircle", Ss.a), Ds = w.a.span("LabelText", Ss.a), Hs = w.a.span("ImageType", Ss.a), Gs = w.a.a("Link", Ss.a), Ws = w.a.img("DummyBanner", Ss.a), zs = w.a.wrapped(_s.a, "Preview", Ss.a);
			class qs extends a.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(N.i)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(N.i)(this.props.over18))
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
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(N.b)(this.props.showActiveCommunities))
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
						isEmployee: o,
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
						profileIconUploading: C,
						publicDescription: j,
						title: w
					} = this.state, k = Object(u.a)({
						[Ss.a["m-responsive"]]: l
					}), O = !!h && !Object(Cs.c)(h);
					return a.a.createElement(Ze.a, {
						sidebar: a.a.createElement(zs, {
							bannerBackgroundImage: b,
							currentUserHasSnoovatar: !!g,
							editMode: !0,
							isEmployee: o,
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
							publicDescription: j,
							snoovatarUrl: g,
							recentAwardings: e,
							title: w,
							url: s,
							userCreated: n,
							username: r
						})
					}, a.a.createElement(Qe.b, {
						isResponsiveSettingsEnabled: l
					}, Is._("Customize profile", null, {
						hk: "1fenXK"
					})), a.a.createElement(Ne.a, null, Is._("Profile Information", null, {
						hk: "3vzAUk"
					})), a.a.createElement(we.e, {
						label: Is._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							w !== this.props.title && this.updateProfile(w, "title")
						},
						placeholder: Is._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: Ps,
						subtext: Is._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: w
					}), a.a.createElement(we.g, {
						label: Is._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							j !== this.props.publicDescription && this.updateProfile(j, "publicDescription")
						},
						placeholder: Is._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: Ns,
						subtext: Is._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: j
					}), a.a.createElement(Ne.a, null, Is._("Images", null, {
						hk: "38DOkf"
					})), a.a.createElement(we.k, {
						label: Is._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: Is._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, a.a.createElement(Ts, {
						className: Object(u.a)(k)
					}, O ? a.a.createElement(Ls, {
						className: k,
						iconUrl: h,
						isNSFW: !1,
						userName: r
					}) : a.a.createElement(Ms, {
						className: k,
						controlName: "profileIcon",
						icon: a.a.createElement(Fs, null),
						isUploading: C,
						label: a.a.createElement(Ds, null, Is._("Drag and Drop or Upload {=Avatar} Image", [Is._param("=Avatar", a.a.createElement(Hs, null, Is._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: Ss.a.Label,
						onChange: this.onIconChange
					}), b ? a.a.createElement(Rs, {
						bannerUrl: b,
						className: k,
						isNSFW: !1,
						userName: r
					}) : a.a.createElement(Bs, {
						className: k,
						controlName: "profileBanner",
						icon: a.a.createElement(Fs, null),
						isUploading: x,
						label: a.a.createElement(Ds, null, Is._("Drag and Drop or Upload {=Banner} Image", [Is._param("=Banner", a.a.createElement(Hs, null, Is._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: Ss.a.Label,
						onChange: this.onBannerChange
					}))), a.a.createElement(Ne.a, null, Is._("Profile category", null, {
						hk: "1YRE6p"
					})), a.a.createElement(we.o, {
						label: Is._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: m,
						subtext: Is._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), a.a.createElement(Ne.a, null, Is._("Advanced", null, {
						hk: "1US2Ur"
					})), a.a.createElement(we.o, {
						label: Is._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: Is._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [Is._param("profileForm: r/all link", a.a.createElement(Gs, {
							href: "/r/all"
						}, "r/all")), Is._param("profileForm: /users link", a.a.createElement(Gs, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), a.a.createElement(we.o, {
						label: Is._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: Is._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: f,
						onClick: this.onShowActiveCommunitiesChange
					}), a.a.createElement(Ne.a, null, Is._("Profile moderation", null, {
						hk: "3vDS8h"
					})), a.a.createElement(Us, null, Is._("For moderation tools please visit our {=Profile Moderation page}", [Is._param("=Profile Moderation page", a.a.createElement(Gs, {
						href: `/user/${r}/about/edit/moderation`
					}, Is._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), c && a.a.createElement(E.a, {
						headerText: Is._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: Is._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [Is._param("=NSFW content", a.a.createElement(Gs, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, Is._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: Is._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: Is._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: v,
						onOverlayClick: v,
						overlayClassName: Object(u.a)({
							[Ss.a.ResponsiveOverlay]: l
						}),
						withOverlay: !0
					}), a.a.createElement(Ws, {
						src: b
					}))
				}
			}
			const Ks = Object(o.b)(As, e => ({
					imageDeleteRequested: t => e(Object(bs.y)(t)),
					imagesUpdateRequested: (t, n) => e(Object(bs.z)(t, n)),
					onClickSnoovatar: () => e(Object(hs.b)("profile_overview")),
					save: (t, n) => e(Object(bs.E)(t, n)),
					toggleNSFWModal: () => e(Object(y.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(S.c)(qs)),
				Js = Object(c.c)({
					isLoading: e => !Object(ws.a)(e)
				}),
				Ys = Object(o.b)(Js)(vs);

			function Vs(e) {
				return a.a.createElement(Ys, {
					loaderSize: 50,
					render: () => a.a.createElement(Ks, e)
				})
			}
			var Qs = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Zs = n.n(Qs);

			function Xs(e) {
				return a.a.createElement("header", {
					className: e.className
				}, a.a.createElement("div", {
					className: Zs.a.title
				}, r.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), a.a.createElement("div", {
					className: Zs.a.subtitle
				}, r.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var $s = n("./src/reddit/actions/governance/communityDetails.ts"),
				ea = n("./src/lib/addQueryParams/index.ts"),
				ta = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				na = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				ra = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				sa = n.n(ra);
			const {
				fbt: aa
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const oa = Object(c.c)({
				userId: e => {
					const t = Object(B.j)(e);
					return t ? t.id : ""
				}
			});
			var ia = Object(o.b)(oa)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, r = t.primaryColor, s = Object(ea.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return a.a.createElement("div", {
						className: sa.a.body
					}, a.a.createElement("section", {
						className: sa.a.leftSection
					}, a.a.createElement("div", {
						className: sa.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), a.a.createElement("div", {
						className: sa.a.content
					}, a.a.createElement(ta.a, {
						index: "1",
						color: r
					}, aa._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), a.a.createElement(ta.a, {
						index: "2",
						color: r
					}, aa._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), a.a.createElement(ta.a, {
						index: "3",
						color: r
					}, aa._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), a.a.createElement("section", {
						className: sa.a.rightSection
					}, a.a.createElement(na.a, {
						url: s,
						scale: 4
					})))
				})),
				ca = n("./src/reddit/constants/colors.ts"),
				la = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				da = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				ua = n("./src/reddit/icons/svgs/Close/index.tsx"),
				ma = n("./src/reddit/components/Economics/Price/index.tsx"),
				pa = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				ba = n("./src/lib/currency/centsToDollars/index.ts"),
				ha = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				fa = n.n(ha);
			const ga = [() => r.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => r.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => r.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => r.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				va = [() => r.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => r.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => r.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => r.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function _a({
				benefit: e,
				color: t
			}) {
				return a.a.createElement("li", {
					className: fa.a.benefit
				}, a.a.createElement("div", {
					className: fa.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(Jn.b)(Object(S.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: s
				} = e;
				return a.a.createElement("div", {
					className: Object(u.a)(fa.a.container, t)
				}, a.a.createElement("div", {
					className: fa.a.topLine
				}, a.a.createElement(pa.a, {
					className: fa.a.brand,
					subreddit: s
				}), a.a.createElement("div", {
					className: fa.a.title
				}, r.fbt._("{community} Supporter Membership", [r.fbt._param("community", s.displayText)], {
					hk: "eZ8PH"
				}))), a.a.createElement("header", {
					className: fa.a.subTitle
				}, r.fbt._("Support the {community} community and receive exclusive access to premium features.", [r.fbt._param("community", s.displayText)], {
					hk: "2pm4PV"
				})), a.a.createElement("article", null, a.a.createElement("div", {
					className: fa.a.benefitsTitle
				}, r.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), a.a.createElement("ul", {
					className: fa.a.benefits
				}, ga.map(e => a.a.createElement(_a, {
					benefit: e(),
					key: e()
				}))), a.a.createElement("div", {
					className: fa.a.benefitsTitle
				}, r.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), a.a.createElement("ul", {
					className: fa.a.benefits
				}, va.map(e => a.a.createElement(_a, {
					benefit: e(),
					key: e()
				})))), a.a.createElement("footer", {
					className: fa.a.price
				}, r.fbt._("${price}/month", [r.fbt._param("price", Object(ba.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var ya = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				xa = n.n(ya);
			const {
				fbt: Ca
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ea = e => Ca._("You've been supporting the community and the development of new features since {joinDate}.", [Ca._param("joinDate", e)], {
				hk: "37ImIl"
			}), ja = [Ca._("Loyalty badge", null, {
				hk: "15DctX"
			}), Ca._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Ca._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Ca._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var wa = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: r,
					title: s
				} = e, o = r.primaryColor;
				return a.a.createElement("div", {
					className: xa.a.card,
					style: {
						borderColor: o
					}
				}, a.a.createElement(pa.a, {
					className: xa.a.brand,
					subreddit: r
				}), a.a.createElement("div", {
					className: xa.a.cardContent
				}, a.a.createElement("div", {
					className: xa.a.cardTitle
				}, s), a.a.createElement(ma.a, {
					className: xa.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: r.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), a.a.createElement("div", {
					className: xa.a.membershipMsg
				}, Ea(t)), a.a.createElement("div", {
					className: xa.a.benefitsTitle
				}, Ca._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), a.a.createElement("ul", {
					className: xa.a.benefits
				}, ja.map(e => a.a.createElement(_a, {
					benefit: e,
					color: o,
					key: e
				})))))
			};
			const {
				fbt: ka
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Oa = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: r,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(o.d)(), m = Object(ot.a)();
					Object(s.useEffect)(() => {
						c && (d(Object($s.a)({
							subredditId: c.id
						})), m(Object(da.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(la.a)(p, void 0, ca.b.white);
					return a.a.createElement("div", {
						className: Object(u.a)(t, xa.a.pointsContainer)
					}, a.a.createElement("header", {
						className: xa.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, ka._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), a.a.createElement(ua.a, {
						className: xa.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), a.a.createElement("article", {
						className: xa.a.content
					}, c && a.a.createElement(a.a.Fragment, null, a.a.createElement(ia, {
						subreddit: c
					}), a.a.createElement(wa, {
						joinDate: n,
						membership: r,
						subreddit: c,
						title: l
					}))))
				},
				Sa = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Ia = n("./src/reddit/actions/governance/errorToast.ts"),
				Pa = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Na
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Aa = Object(o.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(Sa.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(Ia.a)(e, t)
			}));
			var Ta = Object(Jn.b)(Aa((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: r,
					joinDate: o,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: m,
					subredditId: p,
					title: b
				} = e, [h, f] = Object(s.useState)(!1), g = m ? m.displayText : "";
				return a.a.createElement("div", {
					className: Object(u.a)(n, xa.a.container)
				}, a.a.createElement("header", {
					className: xa.a.header
				}, Na._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), a.a.createElement(ua.a, {
					className: xa.a.close,
					onClick: l
				})), a.a.createElement("article", {
					className: xa.a.content
				}, a.a.createElement("div", {
					className: xa.a.warning
				}, Na._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Na._param("subredditName", g), Na._param("endDate", r)], {
					hk: "1POMMH"
				})), m && a.a.createElement(wa, {
					joinDate: o,
					membership: i,
					subreddit: m,
					title: b
				})), a.a.createElement("footer", {
					className: xa.a.footer
				}, a.a.createElement(I.l, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(Pa.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? Na._("canceling...", null, {
					hk: "1Ggy36"
				}) : Na._("cancel membership", null, {
					hk: "C9ZhO"
				})), a.a.createElement(I.i, {
					onClick: l
				}, Na._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Ma = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				La = Object(o.b)(Ma);
			var Ba = Object(ne.a)(La((function(e) {
					return "points" === e.membership.currency ? a.a.createElement(Oa, e) : a.a.createElement(Ta, e)
				}))),
				Ra = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				Ua = n.n(Ra);

			function Fa(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Da extends a.a.Component {
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
						settings: o
					} = t, i = Fa(s.endsAt), c = Fa(s.publishAt), l = !o.renew, d = n ? n.displayText : "", m = i ? r.fbt._("Cancelled. Will expire on {date}", [r.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? r.fbt._("Joined {date}", [r.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return a.a.createElement("div", {
						className: Object(u.a)(e, Ua.a.container)
					}, a.a.createElement("div", {
						className: Ua.a.membershipName
					}, r.fbt._("{subredditName} {title}", [r.fbt._param("subredditName", d), r.fbt._param("title", s.title)], {
						hk: "2NdAdN"
					})), !l && a.a.createElement("div", {
						className: Ua.a.joinDate,
						title: p
					}, p), l && a.a.createElement("div", {
						className: Ua.a.cancelled,
						title: m
					}, m), a.a.createElement(I.o, {
						className: Ua.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && a.a.createElement(Ba, {
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
			const Ha = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var Ga = Object(o.b)(Ha)(Da),
				Wa = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				za = n.n(Wa);
			const qa = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var Ka = Object(o.b)(qa)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: s
					} = e, o = Object.keys(s).map(e => (function(e) {
						if (!e.active) return null;
						const t = Object.keys(e.active).filter(e => "provisional_membership" !== e),
							n = e.active[t[0]];
						return n && Date.now() < n.endsAt ? {
							membership: n,
							settings: e.settings
						} : null
					})(s[e])).filter(e => !!e).sort((e, t) => e.membership.endsAt - t.membership.endsAt), i = !!o.length;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: za.a.title
					}, r.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => a.a.createElement("div", {
						className: za.a.loading,
						key: t
					})), i && o.map(e => a.a.createElement(Ga, {
						key: e.membership.subredditId,
						className: za.a.membership,
						subscription: e
					})), !n && !i && a.a.createElement("div", {
						className: za.a.empty
					}, r.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Ja = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				Ya = n.n(Ja);

			function Va(e) {
				return a.a.createElement(Ze.a, {
					className: e.className
				}, a.a.createElement(Xs, {
					className: Ya.a.header
				}), a.a.createElement(Ka, null))
			}
			var Qa = n("./src/reddit/components/TabNav/index.tsx"),
				Za = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Xa = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				$a = n("./src/reddit/selectors/platform.ts"),
				eo = n("./src/reddit/selectors/responsiveSettings.ts"),
				to = n("./src/reddit/pages/Settings/index.m.less"),
				no = n.n(to);
			const ro = (e, t, n) => [{
					key: m.Wb.Account,
					title: r.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Wb.Profile,
					title: r.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Wb.Privacy,
					title: r.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Wb.Feed,
					title: r.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Wb.Notifications,
					title: r.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Wb.Premium,
					title: r.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: no.a.CreatorTab,
					key: m.Wb.Creator,
					title: r.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: no.a.PaymentsTab,
					key: m.Wb.Payments,
					title: r.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: no.a.SpecialMembershipTab,
					key: m.Wb.SpecialMembership,
					title: r.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: no.a.MessagingTab,
					key: m.Wb.Messaging,
					title: r.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				so = Object(c.c)({
					savedPayments: Zn.p,
					userIsWhitelistedCreator: Zn.x,
					allowNavigationCallback: $a.a,
					isResponsiveSettingsEnabled: eo.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				ao = Object($e.t)(),
				oo = Object(o.b)(so, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(bs.F)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				io = {
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
			class co extends a.a.Component {
				constructor() {
					super(...arguments), this.tabNavRef = a.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs({
							...n,
							[t]: e
						})
					}, this.sendEvent = (e, t) => {
						const n = d()();
						io.hasOwnProperty(t) && this.props.sendEvent(r => ({
							source: this.getSource(),
							action: "save",
							noun: io[t],
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
						const r = n ? this.props.prefs[e] : t;
						return "boolean" == typeof r ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === r ? "off" : "on" : !0 === r ? "on" : "off" : r
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: r,
							userIsWhitelistedCreator: s,
							userHasSpecialMembership: o
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case m.Wb.Account:
								return a.a.createElement(cn, i);
							case m.Wb.Profile:
								return a.a.createElement(Vs, i);
							case m.Wb.Premium:
								return a.a.createElement(rs.b, i);
							case m.Wb.Notifications:
								return a.a.createElement(Hr, i);
							case m.Wb.Privacy:
								return a.a.createElement(ps, i);
							case m.Wb.Messaging:
								return a.a.createElement(Gn, i);
							case m.Wb.Feed:
								return a.a.createElement(Tr, i);
							case m.Wb.Payments:
								return a.a.createElement(ns, null);
							case m.Wb.Creator: {
								const e = Object(p.a)(r.search);
								return s ? a.a.createElement(cr, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Wb.SpecialMembership:
								return o ? a.a.createElement(Va, null) : null;
							default:
								return a.a.createElement(cn, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Xa.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Wb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Wb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = a.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return a.a.createElement(Qa.a, {
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
					Object(Za.d)(Za.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
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
					Object(Za.b)(Za.a.PremiumSettings)
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
						savedPayments: o
					} = this.props;
					return a.a.createElement("div", {
						className: Object(u.a)(no.a.Container, {
							[no.a["m-responsive"]]: t
						})
					}, a.a.createElement(Qa.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: r.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						onTouchMove: this.startScrolling
					}, ro(n, s, o).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = ao(oo(Object(S.c)(co)))
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
				a = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var i = (e = o, t) => {
					switch (t.type) {
						case a.a: {
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
				c = n("./src/reddit/actions/governance/constants.ts");
			const l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, r, s, a;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == o ? void 0 : o.contracts,
					c = null == i ? void 0 : i.unlocked,
					l = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					u = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
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
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = l, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: u(r)
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
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
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
				return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby || r === a.a.ArbitrumRinkeby
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
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
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
							[i.a.Loyalty]: r.find(e => e.placement === o.a.First),
							[i.a.Achievement]: r.find(e => e.placement === o.a.Second),
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
			const C = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return h;
					return x(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
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
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(n) && n.userId === s) return n;
				const a = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					c = Object(o.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === c)
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
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return h
			}

			function I(e, t) {
				return k(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const P = e => {
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
				L = (e, t) => {
					var n, r, s, a;
					const o = (null === (a = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || A;
					return {
						prices: M(e, t),
						member: o.member || A.member,
						memberPlural: o.memberPlural || A.memberPlural,
						memberAlt: o.memberAlt || A.memberAlt,
						memberAltPlural: o.memberAltPlural || A.memberAltPlural,
						membership: o.membership || A.membership,
						membershipAlt: o.membershipAlt || A.membershipAlt
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
					if (Object(p.p)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(m.a)(e, {
						commentId: n
					});
					if (s && Object(a.a)(s)) return !0;
					const o = r.d.spGiphy(e),
						i = D(e, t);
					return !(!o || !i) || o && i
				},
				G = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				W = e => e.economics.pointsCopy.data
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
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				a = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				l = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, a, o;
					return t ? e.subreddits.productOffers[Object(s.a)(n, t)] : null === (o = null === (a = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === o ? void 0 : o[Object(s.a)(n)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return n && n[0]
				},
				u = e => {
					const t = l(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(r.a)(u, i.p, (e, t) => m(e, t) || null),
				b = Object(r.a)(p, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				h = Object(r.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				f = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(r.a)(f, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				a = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const r = n.subredditId,
							s = Object.keys(e.user.ownedBadges[r] || {}),
							a = e.badges.models,
							o = Date.now();
						let i = !1;
						return s.forEach(e => {
							const n = a[e];
							n && n.type === t && n.endsAt > o && (i = !0)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.0aa50886a37073db209d.js.map