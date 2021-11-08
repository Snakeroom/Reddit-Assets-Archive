// https://www.redditstatic.com/desktop2x/vendors~ModStatsChart~ViewsTooltip.b642007ba6a9c10cda83.js
// Retrieved at 11/8/2021, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ModStatsChart~ViewsTooltip"], {
		"./node_modules/chart.js/dist/chart.esm.js": function(t, e, i) {
			"use strict";
			i.d(e, "c", (function() {
				return Ut
			})), i.d(e, "a", (function() {
				return yo
			})), i.d(e, "b", (function() {
				return Ji
			})), i.d(e, "d", (function() {
				return ha
			}));
			const n = "undefined" == typeof window ? function(t) {
				return t()
			} : window.requestAnimationFrame;

			function o(t, e, i) {
				const o = i || (t => Array.prototype.slice.call(t));
				let s = !1,
					a = [];
				return function(...i) {
					a = o(i), s || (s = !0, n.call(window, () => {
						s = !1, t.apply(e, a)
					}))
				}
			}
			const s = t => "start" === t ? "left" : "end" === t ? "right" : "center",
				a = (t, e, i) => "start" === t ? e : "end" === t ? i : (e + i) / 2,
				r = (t, e, i, n) => {
					return t === (n ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e
				};

			function l() {}
			const c = function() {
				let t = 0;
				return function() {
					return t++
				}
			}();

			function h(t) {
				return null == t
			}

			function d(t) {
				if (Array.isArray && Array.isArray(t)) return !0;
				const e = Object.prototype.toString.call(t);
				return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
			}

			function u(t) {
				return null !== t && "[object Object]" === Object.prototype.toString.call(t)
			}
			const f = t => ("number" == typeof t || t instanceof Number) && isFinite(+t);

			function g(t, e) {
				return f(t) ? t : e
			}

			function p(t, e) {
				return void 0 === t ? e : t
			}
			const m = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e,
				b = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

			function x(t, e, i) {
				if (t && "function" == typeof t.call) return t.apply(i, e)
			}

			function _(t, e, i, n) {
				let o, s, a;
				if (d(t))
					if (s = t.length, n)
						for (o = s - 1; o >= 0; o--) e.call(i, t[o], o);
					else
						for (o = 0; o < s; o++) e.call(i, t[o], o);
				else if (u(t))
					for (s = (a = Object.keys(t)).length, o = 0; o < s; o++) e.call(i, t[a[o]], a[o])
			}

			function y(t, e) {
				let i, n, o, s;
				if (!t || !e || t.length !== e.length) return !1;
				for (i = 0, n = t.length; i < n; ++i)
					if (o = t[i], s = e[i], o.datasetIndex !== s.datasetIndex || o.index !== s.index) return !1;
				return !0
			}

			function v(t) {
				if (d(t)) return t.map(v);
				if (u(t)) {
					const e = Object.create(null),
						i = Object.keys(t),
						n = i.length;
					let o = 0;
					for (; o < n; ++o) e[i[o]] = v(t[i[o]]);
					return e
				}
				return t
			}

			function w(t) {
				return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
			}

			function M(t, e, i, n) {
				if (!w(t)) return;
				const o = e[t],
					s = i[t];
				u(o) && u(s) ? k(o, s, n) : e[t] = v(s)
			}

			function k(t, e, i) {
				const n = d(e) ? e : [e],
					o = n.length;
				if (!u(t)) return t;
				const s = (i = i || {}).merger || M;
				for (let a = 0; a < o; ++a) {
					if (!u(e = n[a])) continue;
					const o = Object.keys(e);
					for (let n = 0, a = o.length; n < a; ++n) s(o[n], t, e, i)
				}
				return t
			}

			function S(t, e) {
				return k(t, e, {
					merger: P
				})
			}

			function P(t, e, i) {
				if (!w(t)) return;
				const n = e[t],
					o = i[t];
				u(n) && u(o) ? S(n, o) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = v(o))
			}
			const O = "",
				D = ".";

			function C(t, e) {
				const i = t.indexOf(D, e);
				return -1 === i ? t.length : i
			}

			function A(t, e) {
				if (e === O) return t;
				let i = 0,
					n = C(e, i);
				for (; t && n > i;) t = t[e.substr(i, n - i)], n = C(e, i = n + 1);
				return t
			}

			function T(t) {
				return t.charAt(0).toUpperCase() + t.slice(1)
			}
			const L = t => void 0 !== t,
				E = t => "function" == typeof t,
				R = (t, e) => {
					if (t.size !== e.size) return !1;
					for (const i of t)
						if (!e.has(i)) return !1;
					return !0
				},
				z = Math.PI,
				F = 2 * z,
				I = F + z,
				V = Number.POSITIVE_INFINITY,
				j = z / 180,
				B = z / 2,
				W = z / 4,
				N = 2 * z / 3,
				H = Math.log10,
				$ = Math.sign;

			function Y(t) {
				const e = Math.round(t);
				t = X(t, e, t / 1e3) ? e : t;
				const i = Math.pow(10, Math.floor(H(t))),
					n = t / i;
				return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * i
			}

			function U(t) {
				return !isNaN(parseFloat(t)) && isFinite(t)
			}

			function X(t, e, i) {
				return Math.abs(t - e) < i
			}

			function K(t, e, i) {
				let n, o, s;
				for (n = 0, o = t.length; n < o; n++) s = t[n][i], isNaN(s) || (e.min = Math.min(e.min, s), e.max = Math.max(e.max, s))
			}

			function q(t) {
				return t * (z / 180)
			}

			function G(t) {
				return t * (180 / z)
			}

			function Z(t) {
				if (!f(t)) return;
				let e = 1,
					i = 0;
				for (; Math.round(t * e) / e !== t;) e *= 10, i++;
				return i
			}

			function Q(t, e) {
				return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
			}

			function J(t, e) {
				return (t - e + I) % F - z
			}

			function tt(t) {
				return (t % F + F) % F
			}

			function et(t, e, i, n) {
				const o = tt(t),
					s = tt(e),
					a = tt(i),
					r = tt(s - o),
					l = tt(a - o),
					c = tt(o - s),
					h = tt(o - a);
				return o === s || o === a || n && s === a || r > l && c < h
			}

			function it(t, e, i) {
				return Math.max(e, Math.min(i, t))
			}
			const nt = t => 0 === t || 1 === t,
				ot = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * F / i),
				st = (t, e, i) => Math.pow(2, -10 * t) * Math.sin((t - e) * F / i) + 1,
				at = {
					linear: t => t,
					easeInQuad: t => t * t,
					easeOutQuad: t => -t * (t - 2),
					easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
					easeInCubic: t => t * t * t,
					easeOutCubic: t => (t -= 1) * t * t + 1,
					easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
					easeInQuart: t => t * t * t * t,
					easeOutQuart: t => -((t -= 1) * t * t * t - 1),
					easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
					easeInQuint: t => t * t * t * t * t,
					easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
					easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
					easeInSine: t => 1 - Math.cos(t * B),
					easeOutSine: t => Math.sin(t * B),
					easeInOutSine: t => -.5 * (Math.cos(z * t) - 1),
					easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
					easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
					easeInOutExpo: t => nt(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
					easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
					easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
					easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
					easeInElastic: t => nt(t) ? t : ot(t, .075, .3),
					easeOutElastic: t => nt(t) ? t : st(t, .075, .3),
					easeInOutElastic: t => nt(t) ? t : t < .5 ? .5 * ot(2 * t, .1125, .45) : .5 + .5 * st(2 * t - 1, .1125, .45),
					easeInBack(t) {
						const e = 1.70158;
						return t * t * ((e + 1) * t - e)
					},
					easeOutBack(t) {
						const e = 1.70158;
						return (t -= 1) * t * ((e + 1) * t + e) + 1
					},
					easeInOutBack(t) {
						let e = 1.70158;
						return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
					},
					easeInBounce: t => 1 - at.easeOutBounce(1 - t),
					easeOutBounce(t) {
						const e = 7.5625,
							i = 2.75;
						return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
					},
					easeInOutBounce: t => t < .5 ? .5 * at.easeInBounce(2 * t) : .5 * at.easeOutBounce(2 * t - 1) + .5
				},
				rt = {
					0: 0,
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 6,
					7: 7,
					8: 8,
					9: 9,
					A: 10,
					B: 11,
					C: 12,
					D: 13,
					E: 14,
					F: 15,
					a: 10,
					b: 11,
					c: 12,
					d: 13,
					e: 14,
					f: 15
				},
				lt = "0123456789ABCDEF",
				ct = t => lt[15 & t],
				ht = t => lt[(240 & t) >> 4] + lt[15 & t],
				dt = t => (240 & t) >> 4 == (15 & t);

			function ut(t) {
				var e = function(t) {
					return dt(t.r) && dt(t.g) && dt(t.b) && dt(t.a)
				}(t) ? ct : ht;
				return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t
			}

			function ft(t) {
				return t + .5 | 0
			}
			const gt = (t, e, i) => Math.max(Math.min(t, i), e);

			function pt(t) {
				return gt(ft(2.55 * t), 0, 255)
			}

			function mt(t) {
				return gt(ft(255 * t), 0, 255)
			}

			function bt(t) {
				return gt(ft(t / 2.55) / 100, 0, 1)
			}

			function xt(t) {
				return gt(ft(100 * t), 0, 100)
			}
			const _t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
			const yt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

			function vt(t, e, i) {
				const n = e * Math.min(i, 1 - i),
					o = (e, o = (e + t / 30) % 12) => i - n * Math.max(Math.min(o - 3, 9 - o, 1), -1);
				return [o(0), o(8), o(4)]
			}

			function wt(t, e, i) {
				const n = (n, o = (n + t / 60) % 6) => i - i * e * Math.max(Math.min(o, 4 - o, 1), 0);
				return [n(5), n(3), n(1)]
			}

			function Mt(t, e, i) {
				const n = vt(t, 1, .5);
				let o;
				for (e + i > 1 && (e *= o = 1 / (e + i), i *= o), o = 0; o < 3; o++) n[o] *= 1 - e - i, n[o] += e;
				return n
			}

			function kt(t) {
				const e = t.r / 255,
					i = t.g / 255,
					n = t.b / 255,
					o = Math.max(e, i, n),
					s = Math.min(e, i, n),
					a = (o + s) / 2;
				let r, l, c;
				return o !== s && (c = o - s, l = a > .5 ? c / (2 - o - s) : c / (o + s), r = 60 * (r = o === e ? (i - n) / c + (i < n ? 6 : 0) : o === i ? (n - e) / c + 2 : (e - i) / c + 4) + .5), [0 | r, l || 0, a]
			}

			function St(t, e, i, n) {
				return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, n)).map(mt)
			}

			function Pt(t, e, i) {
				return St(vt, t, e, i)
			}

			function Ot(t) {
				return (t % 360 + 360) % 360
			}

			function Dt(t) {
				const e = yt.exec(t);
				let i, n = 255;
				if (!e) return;
				e[5] !== i && (n = e[6] ? pt(+e[5]) : mt(+e[5]));
				const o = Ot(+e[2]),
					s = +e[3] / 100,
					a = +e[4] / 100;
				return {
					r: (i = "hwb" === e[1] ? function(t, e, i) {
						return St(Mt, t, e, i)
					}(o, s, a) : "hsv" === e[1] ? function(t, e, i) {
						return St(wt, t, e, i)
					}(o, s, a) : Pt(o, s, a))[0],
					g: i[1],
					b: i[2],
					a: n
				}
			}
			const Ct = {
					x: "dark",
					Z: "light",
					Y: "re",
					X: "blu",
					W: "gr",
					V: "medium",
					U: "slate",
					A: "ee",
					T: "ol",
					S: "or",
					B: "ra",
					C: "lateg",
					D: "ights",
					R: "in",
					Q: "turquois",
					E: "hi",
					P: "ro",
					O: "al",
					N: "le",
					M: "de",
					L: "yello",
					F: "en",
					K: "ch",
					G: "arks",
					H: "ea",
					I: "ightg",
					J: "wh"
				},
				At = {
					OiceXe: "f0f8ff",
					antiquewEte: "faebd7",
					aqua: "ffff",
					aquamarRe: "7fffd4",
					azuY: "f0ffff",
					beige: "f5f5dc",
					bisque: "ffe4c4",
					black: "0",
					blanKedOmond: "ffebcd",
					Xe: "ff",
					XeviTet: "8a2be2",
					bPwn: "a52a2a",
					burlywood: "deb887",
					caMtXe: "5f9ea0",
					KartYuse: "7fff00",
					KocTate: "d2691e",
					cSO: "ff7f50",
					cSnflowerXe: "6495ed",
					cSnsilk: "fff8dc",
					crimson: "dc143c",
					cyan: "ffff",
					xXe: "8b",
					xcyan: "8b8b",
					xgTMnPd: "b8860b",
					xWay: "a9a9a9",
					xgYF: "6400",
					xgYy: "a9a9a9",
					xkhaki: "bdb76b",
					xmagFta: "8b008b",
					xTivegYF: "556b2f",
					xSange: "ff8c00",
					xScEd: "9932cc",
					xYd: "8b0000",
					xsOmon: "e9967a",
					xsHgYF: "8fbc8f",
					xUXe: "483d8b",
					xUWay: "2f4f4f",
					xUgYy: "2f4f4f",
					xQe: "ced1",
					xviTet: "9400d3",
					dAppRk: "ff1493",
					dApskyXe: "bfff",
					dimWay: "696969",
					dimgYy: "696969",
					dodgerXe: "1e90ff",
					fiYbrick: "b22222",
					flSOwEte: "fffaf0",
					foYstWAn: "228b22",
					fuKsia: "ff00ff",
					gaRsbSo: "dcdcdc",
					ghostwEte: "f8f8ff",
					gTd: "ffd700",
					gTMnPd: "daa520",
					Way: "808080",
					gYF: "8000",
					gYFLw: "adff2f",
					gYy: "808080",
					honeyMw: "f0fff0",
					hotpRk: "ff69b4",
					RdianYd: "cd5c5c",
					Rdigo: "4b0082",
					ivSy: "fffff0",
					khaki: "f0e68c",
					lavFMr: "e6e6fa",
					lavFMrXsh: "fff0f5",
					lawngYF: "7cfc00",
					NmoncEffon: "fffacd",
					ZXe: "add8e6",
					ZcSO: "f08080",
					Zcyan: "e0ffff",
					ZgTMnPdLw: "fafad2",
					ZWay: "d3d3d3",
					ZgYF: "90ee90",
					ZgYy: "d3d3d3",
					ZpRk: "ffb6c1",
					ZsOmon: "ffa07a",
					ZsHgYF: "20b2aa",
					ZskyXe: "87cefa",
					ZUWay: "778899",
					ZUgYy: "778899",
					ZstAlXe: "b0c4de",
					ZLw: "ffffe0",
					lime: "ff00",
					limegYF: "32cd32",
					lRF: "faf0e6",
					magFta: "ff00ff",
					maPon: "800000",
					VaquamarRe: "66cdaa",
					VXe: "cd",
					VScEd: "ba55d3",
					VpurpN: "9370db",
					VsHgYF: "3cb371",
					VUXe: "7b68ee",
					VsprRggYF: "fa9a",
					VQe: "48d1cc",
					VviTetYd: "c71585",
					midnightXe: "191970",
					mRtcYam: "f5fffa",
					mistyPse: "ffe4e1",
					moccasR: "ffe4b5",
					navajowEte: "ffdead",
					navy: "80",
					Tdlace: "fdf5e6",
					Tive: "808000",
					TivedBb: "6b8e23",
					Sange: "ffa500",
					SangeYd: "ff4500",
					ScEd: "da70d6",
					pOegTMnPd: "eee8aa",
					pOegYF: "98fb98",
					pOeQe: "afeeee",
					pOeviTetYd: "db7093",
					papayawEp: "ffefd5",
					pHKpuff: "ffdab9",
					peru: "cd853f",
					pRk: "ffc0cb",
					plum: "dda0dd",
					powMrXe: "b0e0e6",
					purpN: "800080",
					YbeccapurpN: "663399",
					Yd: "ff0000",
					Psybrown: "bc8f8f",
					PyOXe: "4169e1",
					saddNbPwn: "8b4513",
					sOmon: "fa8072",
					sandybPwn: "f4a460",
					sHgYF: "2e8b57",
					sHshell: "fff5ee",
					siFna: "a0522d",
					silver: "c0c0c0",
					skyXe: "87ceeb",
					UXe: "6a5acd",
					UWay: "708090",
					UgYy: "708090",
					snow: "fffafa",
					sprRggYF: "ff7f",
					stAlXe: "4682b4",
					tan: "d2b48c",
					teO: "8080",
					tEstN: "d8bfd8",
					tomato: "ff6347",
					Qe: "40e0d0",
					viTet: "ee82ee",
					JHt: "f5deb3",
					wEte: "ffffff",
					wEtesmoke: "f5f5f5",
					Lw: "ffff00",
					LwgYF: "9acd32"
				};
			let Tt;

			function Lt(t) {
				Tt || ((Tt = function() {
					const t = {},
						e = Object.keys(At),
						i = Object.keys(Ct);
					let n, o, s, a, r;
					for (n = 0; n < e.length; n++) {
						for (a = r = e[n], o = 0; o < i.length; o++) s = i[o], r = r.replace(s, Ct[s]);
						s = parseInt(At[a], 16), t[r] = [s >> 16 & 255, s >> 8 & 255, 255 & s]
					}
					return t
				}()).transparent = [0, 0, 0, 0]);
				const e = Tt[t.toLowerCase()];
				return e && {
					r: e[0],
					g: e[1],
					b: e[2],
					a: 4 === e.length ? e[3] : 255
				}
			}

			function Et(t, e, i) {
				if (t) {
					let n = kt(t);
					n[e] = Math.max(0, Math.min(n[e] + n[e] * i, 0 === e ? 360 : 1)), n = Pt(n), t.r = n[0], t.g = n[1], t.b = n[2]
				}
			}

			function Rt(t, e) {
				return t ? Object.assign(e || {}, t) : t
			}

			function zt(t) {
				var e = {
					r: 0,
					g: 0,
					b: 0,
					a: 255
				};
				return Array.isArray(t) ? t.length >= 3 && (e = {
					r: t[0],
					g: t[1],
					b: t[2],
					a: 255
				}, t.length > 3 && (e.a = mt(t[3]))) : (e = Rt(t, {
					r: 0,
					g: 0,
					b: 0,
					a: 1
				})).a = mt(e.a), e
			}

			function Ft(t) {
				return "r" === t.charAt(0) ? function(t) {
					const e = _t.exec(t);
					let i, n, o, s = 255;
					if (e) {
						if (e[7] !== i) {
							const t = +e[7];
							s = 255 & (e[8] ? pt(t) : 255 * t)
						}
						return i = +e[1], n = +e[3], o = +e[5], {
							r: i = 255 & (e[2] ? pt(i) : i),
							g: n = 255 & (e[4] ? pt(n) : n),
							b: o = 255 & (e[6] ? pt(o) : o),
							a: s
						}
					}
				}(t) : Dt(t)
			}
			class It {
				constructor(t) {
					if (t instanceof It) return t;
					const e = typeof t;
					let i;
					var n, o, s;
					"object" === e ? i = zt(t) : "string" === e && (s = (n = t).length, "#" === n[0] && (4 === s || 5 === s ? o = {
						r: 255 & 17 * rt[n[1]],
						g: 255 & 17 * rt[n[2]],
						b: 255 & 17 * rt[n[3]],
						a: 5 === s ? 17 * rt[n[4]] : 255
					} : 7 !== s && 9 !== s || (o = {
						r: rt[n[1]] << 4 | rt[n[2]],
						g: rt[n[3]] << 4 | rt[n[4]],
						b: rt[n[5]] << 4 | rt[n[6]],
						a: 9 === s ? rt[n[7]] << 4 | rt[n[8]] : 255
					})), i = o || Lt(t) || Ft(t)), this._rgb = i, this._valid = !!i
				}
				get valid() {
					return this._valid
				}
				get rgb() {
					var t = Rt(this._rgb);
					return t && (t.a = bt(t.a)), t
				}
				set rgb(t) {
					this._rgb = zt(t)
				}
				rgbString() {
					return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${bt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : this._rgb;
					var t
				}
				hexString() {
					return this._valid ? ut(this._rgb) : this._rgb
				}
				hslString() {
					return this._valid ? function(t) {
						if (!t) return;
						const e = kt(t),
							i = e[0],
							n = xt(e[1]),
							o = xt(e[2]);
						return t.a < 255 ? `hsla(${i}, ${n}%, ${o}%, ${bt(t.a)})` : `hsl(${i}, ${n}%, ${o}%)`
					}(this._rgb) : this._rgb
				}
				mix(t, e) {
					const i = this;
					if (t) {
						const n = i.rgb,
							o = t.rgb;
						let s;
						const a = e === s ? .5 : e,
							r = 2 * a - 1,
							l = n.a - o.a,
							c = ((r * l == -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
						s = 1 - c, n.r = 255 & c * n.r + s * o.r + .5, n.g = 255 & c * n.g + s * o.g + .5, n.b = 255 & c * n.b + s * o.b + .5, n.a = a * n.a + (1 - a) * o.a, i.rgb = n
					}
					return i
				}
				clone() {
					return new It(this.rgb)
				}
				alpha(t) {
					return this._rgb.a = mt(t), this
				}
				clearer(t) {
					return this._rgb.a *= 1 - t, this
				}
				greyscale() {
					const t = this._rgb,
						e = ft(.3 * t.r + .59 * t.g + .11 * t.b);
					return t.r = t.g = t.b = e, this
				}
				opaquer(t) {
					return this._rgb.a *= 1 + t, this
				}
				negate() {
					const t = this._rgb;
					return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
				}
				lighten(t) {
					return Et(this._rgb, 2, t), this
				}
				darken(t) {
					return Et(this._rgb, 2, -t), this
				}
				saturate(t) {
					return Et(this._rgb, 1, t), this
				}
				desaturate(t) {
					return Et(this._rgb, 1, -t), this
				}
				rotate(t) {
					return function(t, e) {
						var i = kt(t);
						i[0] = Ot(i[0] + e), i = Pt(i), t.r = i[0], t.g = i[1], t.b = i[2]
					}(this._rgb, t), this
				}
			}

			function Vt(t) {
				return new It(t)
			}
			const jt = t => t instanceof CanvasGradient || t instanceof CanvasPattern;

			function Bt(t) {
				return jt(t) ? t : Vt(t)
			}

			function Wt(t) {
				return jt(t) ? t : Vt(t).saturate(.5).darken(.1).hexString()
			}
			const Nt = Object.create(null),
				Ht = Object.create(null);

			function $t(t, e) {
				if (!e) return t;
				const i = e.split(".");
				for (let n = 0, o = i.length; n < o; ++n) {
					const e = i[n];
					t = t[e] || (t[e] = Object.create(null))
				}
				return t
			}

			function Yt(t, e, i) {
				return "string" == typeof e ? k($t(t, e), i) : k($t(t, ""), e)
			}
			var Ut = new class {
				constructor(t) {
					this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
						family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
						size: 12,
						style: "normal",
						lineHeight: 1.2,
						weight: null
					}, this.hover = {}, this.hoverBackgroundColor = (t, e) => Wt(e.backgroundColor), this.hoverBorderColor = (t, e) => Wt(e.borderColor), this.hoverColor = (t, e) => Wt(e.color), this.indexAxis = "x", this.interaction = {
						mode: "nearest",
						intersect: !0
					}, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.describe(t)
				}
				set(t, e) {
					return Yt(this, t, e)
				}
				get(t) {
					return $t(this, t)
				}
				describe(t, e) {
					return Yt(Ht, t, e)
				}
				override(t, e) {
					return Yt(Nt, t, e)
				}
				route(t, e, i, n) {
					const o = $t(this, t),
						s = $t(this, i),
						a = "_" + e;
					Object.defineProperties(o, {
						[a]: {
							value: o[e],
							writable: !0
						},
						[e]: {
							enumerable: !0,
							get() {
								const t = this[a],
									e = s[n];
								return u(t) ? Object.assign({}, e, t) : p(t, e)
							},
							set(t) {
								this[a] = t
							}
						}
					})
				}
			}({
				_scriptable: t => !t.startsWith("on"),
				_indexable: t => "events" !== t,
				hover: {
					_fallback: "interaction"
				},
				interaction: {
					_scriptable: !1,
					_indexable: !1
				}
			});

			function Xt(t, e, i, n, o) {
				let s = e[o];
				return s || (s = e[o] = t.measureText(o).width, i.push(o)), s > n && (n = s), n
			}

			function Kt(t, e, i, n) {
				let o = (n = n || {}).data = n.data || {},
					s = n.garbageCollect = n.garbageCollect || [];
				n.font !== e && (o = n.data = {}, s = n.garbageCollect = [], n.font = e), t.save(), t.font = e;
				let a = 0;
				const r = i.length;
				let l, c, h, u, f;
				for (l = 0; l < r; l++)
					if (null != (u = i[l]) && !0 !== d(u)) a = Xt(t, o, s, a, u);
					else if (d(u))
					for (c = 0, h = u.length; c < h; c++) null == (f = u[c]) || d(f) || (a = Xt(t, o, s, a, f));
				t.restore();
				const g = s.length / 2;
				if (g > i.length) {
					for (l = 0; l < g; l++) delete o[s[l]];
					s.splice(0, g)
				}
				return a
			}

			function qt(t, e, i) {
				const n = t.currentDevicePixelRatio,
					o = 0 !== i ? Math.max(i / 2, .5) : 0;
				return Math.round((e - o) * n) / n + o
			}

			function Gt(t, e) {
				(e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
			}

			function Zt(t, e, i, n) {
				let o, s, a, r, l;
				const c = e.pointStyle,
					h = e.rotation,
					d = e.radius;
				let u = (h || 0) * j;
				if (c && "object" == typeof c && ("[object HTMLImageElement]" === (o = c.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, n), t.rotate(u), t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height), void t.restore();
				if (!(isNaN(d) || d <= 0)) {
					switch (t.beginPath(), c) {
						default:
							t.arc(i, n, d, 0, F), t.closePath();
							break;
						case "triangle":
							t.moveTo(i + Math.sin(u) * d, n - Math.cos(u) * d), u += N, t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d), u += N, t.lineTo(i + Math.sin(u) * d, n - Math.cos(u) * d), t.closePath();
							break;
						case "rectRounded":
							r = d - (l = .516 * d), s = Math.cos(u + W) * r, a = Math.sin(u + W) * r, t.arc(i - s, n - a, l, u - z, u - B), t.arc(i + a, n - s, l, u - B, u), t.arc(i + s, n + a, l, u, u + B), t.arc(i - a, n + s, l, u + B, u + z), t.closePath();
							break;
						case "rect":
							if (!h) {
								r = Math.SQRT1_2 * d, t.rect(i - r, n - r, 2 * r, 2 * r);
								break
							}
							u += W;
						case "rectRot":
							s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + a, n - s), t.lineTo(i + s, n + a), t.lineTo(i - a, n + s), t.closePath();
							break;
						case "crossRot":
							u += W;
						case "cross":
							s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a), t.moveTo(i + a, n - s), t.lineTo(i - a, n + s);
							break;
						case "star":
							s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a), t.moveTo(i + a, n - s), t.lineTo(i - a, n + s), u += W, s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a), t.moveTo(i + a, n - s), t.lineTo(i - a, n + s);
							break;
						case "line":
							s = Math.cos(u) * d, a = Math.sin(u) * d, t.moveTo(i - s, n - a), t.lineTo(i + s, n + a);
							break;
						case "dash":
							t.moveTo(i, n), t.lineTo(i + Math.cos(u) * d, n + Math.sin(u) * d)
					}
					t.fill(), e.borderWidth > 0 && t.stroke()
				}
			}

			function Qt(t, e, i) {
				return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i
			}

			function Jt(t, e) {
				t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
			}

			function te(t) {
				t.restore()
			}

			function ee(t, e, i, n, o) {
				if (!e) return t.lineTo(i.x, i.y);
				if ("middle" === o) {
					const n = (e.x + i.x) / 2;
					t.lineTo(n, e.y), t.lineTo(n, i.y)
				} else "after" === o != !!n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
				t.lineTo(i.x, i.y)
			}

			function ie(t, e, i, n) {
				if (!e) return t.lineTo(i.x, i.y);
				t.bezierCurveTo(n ? e.cp1x : e.cp2x, n ? e.cp1y : e.cp2y, n ? i.cp2x : i.cp1x, n ? i.cp2y : i.cp1y, i.x, i.y)
			}

			function ne(t, e, i, n, o, s = {}) {
				const a = d(e) ? e : [e],
					r = s.strokeWidth > 0 && "" !== s.strokeColor;
				let l, c;
				for (t.save(), t.font = o.string, function(t, e) {
						e.translation && t.translate(e.translation[0], e.translation[1]);
						h(e.rotation) || t.rotate(e.rotation);
						e.color && (t.fillStyle = e.color);
						e.textAlign && (t.textAlign = e.textAlign);
						e.textBaseline && (t.textBaseline = e.textBaseline)
					}(t, s), l = 0; l < a.length; ++l) c = a[l], r && (s.strokeColor && (t.strokeStyle = s.strokeColor), h(s.strokeWidth) || (t.lineWidth = s.strokeWidth), t.strokeText(c, i, n, s.maxWidth)), t.fillText(c, i, n, s.maxWidth), oe(t, i, n, c, s), n += o.lineHeight;
				t.restore()
			}

			function oe(t, e, i, n, o) {
				if (o.strikethrough || o.underline) {
					const s = t.measureText(n),
						a = e - s.actualBoundingBoxLeft,
						r = e + s.actualBoundingBoxRight,
						l = i - s.actualBoundingBoxAscent,
						c = i + s.actualBoundingBoxDescent,
						h = o.strikethrough ? (l + c) / 2 : c;
					t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = o.decorationWidth || 2, t.moveTo(a, h), t.lineTo(r, h), t.stroke()
				}
			}

			function se(t, e) {
				const {
					x: i,
					y: n,
					w: o,
					h: s,
					radius: a
				} = e;
				t.arc(i + a.topLeft, n + a.topLeft, a.topLeft, -B, z, !0), t.lineTo(i, n + s - a.bottomLeft), t.arc(i + a.bottomLeft, n + s - a.bottomLeft, a.bottomLeft, z, B, !0), t.lineTo(i + o - a.bottomRight, n + s), t.arc(i + o - a.bottomRight, n + s - a.bottomRight, a.bottomRight, B, 0, !0), t.lineTo(i + o, n + a.topRight), t.arc(i + o - a.topRight, n + a.topRight, a.topRight, 0, -B, !0), t.lineTo(i + a.topLeft, n)
			}
			const ae = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
				re = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

			function le(t, e) {
				const i = ("" + t).match(ae);
				if (!i || "normal" === i[1]) return 1.2 * e;
				switch (t = +i[2], i[3]) {
					case "px":
						return t;
					case "%":
						t /= 100
				}
				return e * t
			}
			const ce = t => +t || 0;

			function he(t, e) {
				const i = {},
					n = u(e),
					o = n ? Object.keys(e) : e,
					s = u(t) ? n ? i => p(t[i], t[e[i]]) : e => t[e] : () => t;
				for (const a of o) i[a] = ce(s(a));
				return i
			}

			function de(t) {
				return he(t, {
					top: "y",
					right: "x",
					bottom: "y",
					left: "x"
				})
			}

			function ue(t) {
				return he(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
			}

			function fe(t) {
				const e = de(t);
				return e.width = e.left + e.right, e.height = e.top + e.bottom, e
			}

			function ge(t, e) {
				t = t || {}, e = e || Ut.font;
				let i = p(t.size, e.size);
				"string" == typeof i && (i = parseInt(i, 10));
				let n = p(t.style, e.style);
				n && !("" + n).match(re) && (console.warn('Invalid font style specified: "' + n + '"'), n = "");
				const o = {
					family: p(t.family, e.family),
					lineHeight: le(p(t.lineHeight, e.lineHeight), i),
					size: i,
					style: n,
					weight: p(t.weight, e.weight),
					string: ""
				};
				return o.string = function(t) {
					return !t || h(t.size) || h(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
				}(o), o
			}

			function pe(t, e, i, n) {
				let o, s, a, r = !0;
				for (o = 0, s = t.length; o < s; ++o)
					if (void 0 !== (a = t[o]) && (void 0 !== e && "function" == typeof a && (a = a(e), r = !1), void 0 !== i && d(a) && (a = a[i % a.length], r = !1), void 0 !== a)) return n && !r && (n.cacheable = !1), a
			}

			function me(t, e, i) {
				i = i || (i => t[i] < e);
				let n, o = t.length - 1,
					s = 0;
				for (; o - s > 1;) i(n = s + o >> 1) ? s = n : o = n;
				return {
					lo: s,
					hi: o
				}
			}
			const be = (t, e, i) => me(t, i, n => t[n][e] < i),
				xe = (t, e, i) => me(t, i, n => t[n][e] >= i);
			const _e = ["push", "pop", "shift", "splice", "unshift"];

			function ye(t, e) {
				const i = t._chartjs;
				if (!i) return;
				const n = i.listeners,
					o = n.indexOf(e); - 1 !== o && n.splice(o, 1), n.length > 0 || (_e.forEach(e => {
					delete t[e]
				}), delete t._chartjs)
			}

			function ve(t) {
				const e = new Set;
				let i, n;
				for (i = 0, n = t.length; i < n; ++i) e.add(t[i]);
				return e.size === n ? t : Array.from(e)
			}

			function we(t, e = [""], i = t, n, o = (() => t[0])) {
				L(n) || (n = Ee("_fallback", t));
				const s = {
					[Symbol.toStringTag]: "Object",
					_cacheable: !0,
					_scopes: t,
					_rootScopes: i,
					_fallback: n,
					_getTarget: o,
					override: o => we([o, ...t], e, i, n)
				};
				return new Proxy(s, {
					deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
					get: (i, n) => Oe(i, n, () => (function(t, e, i, n) {
						let o;
						for (const s of e)
							if (o = Ee(Se(s, t), i), L(o)) return Pe(t, o) ? Te(i, n, t, o) : o
					})(n, e, t, i)),
					getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
					getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
					has: (t, e) => Re(t).includes(e),
					ownKeys: t => Re(t),
					set: (t, e, i) => ((t._storage || (t._storage = o()))[e] = i, delete t[e], delete t._keys, !0)
				})
			}

			function Me(t, e, i, n) {
				const o = {
					_cacheable: !1,
					_proxy: t,
					_context: e,
					_subProxy: i,
					_stack: new Set,
					_descriptors: ke(t, n),
					setContext: e => Me(t, e, i, n),
					override: o => Me(t.override(o), e, i, n)
				};
				return new Proxy(o, {
					deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
					get: (t, e, i) => Oe(t, e, () => (function(t, e, i) {
						const {
							_proxy: n,
							_context: o,
							_subProxy: s,
							_descriptors: a
						} = t;
						let r = n[e];
						E(r) && a.isScriptable(e) && (r = function(t, e, i, n) {
							const {
								_proxy: o,
								_context: s,
								_subProxy: a,
								_stack: r
							} = i;
							if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
							r.add(t), e = e(s, a || n), r.delete(t), u(e) && (e = Te(o._scopes, o, t, e));
							return e
						}(e, r, t, i));
						d(r) && r.length && (r = function(t, e, i, n) {
							const {
								_proxy: o,
								_context: s,
								_subProxy: a,
								_descriptors: r
							} = i;
							if (L(s.index) && n(t)) e = e[s.index % e.length];
							else if (u(e[0])) {
								const i = e,
									n = o._scopes.filter(t => t !== i);
								e = [];
								for (const l of i) {
									const i = Te(n, o, t, l);
									e.push(Me(i, s, a && a[t], r))
								}
							}
							return e
						}(e, r, t, a.isIndexable));
						Pe(e, r) && (r = Me(r, o, s && s[e], a));
						return r
					})(t, e, i)),
					getOwnPropertyDescriptor: (e, i) => e._descriptors.allKeys ? Reflect.has(t, i) ? {
						enumerable: !0,
						configurable: !0
					} : void 0 : Reflect.getOwnPropertyDescriptor(t, i),
					getPrototypeOf: () => Reflect.getPrototypeOf(t),
					has: (e, i) => Reflect.has(t, i),
					ownKeys: () => Reflect.ownKeys(t),
					set: (e, i, n) => (t[i] = n, delete e[i], !0)
				})
			}

			function ke(t, e = {
				scriptable: !0,
				indexable: !0
			}) {
				const {
					_scriptable: i = e.scriptable,
					_indexable: n = e.indexable,
					_allKeys: o = e.allKeys
				} = t;
				return {
					allKeys: o,
					scriptable: i,
					indexable: n,
					isScriptable: E(i) ? i : () => i,
					isIndexable: E(n) ? n : () => n
				}
			}
			const Se = (t, e) => t ? t + T(e) : e,
				Pe = (t, e) => u(e) && "adapters" !== t;

			function Oe(t, e, i) {
				let n = t[e];
				return L(n) ? n : (n = i(), L(n) && (t[e] = n), n)
			}

			function De(t, e, i) {
				return E(t) ? t(e, i) : t
			}
			const Ce = (t, e) => !0 === t ? e : "string" == typeof t ? A(e, t) : void 0;

			function Ae(t, e, i, n) {
				for (const o of e) {
					const e = Ce(i, o);
					if (e) {
						t.add(e);
						const o = De(e._fallback, i, e);
						if (L(o) && o !== i && o !== n) return o
					} else if (!1 === e && L(n) && i !== n) return null
				}
				return !1
			}

			function Te(t, e, i, n) {
				const o = e._rootScopes,
					s = De(e._fallback, i, n),
					a = [...t, ...o],
					r = new Set;
				r.add(n);
				let l = Le(r, a, i, s || i);
				return null !== l && ((!L(s) || s === i || null !== (l = Le(r, a, s, l))) && we(Array.from(r), [""], o, s, () => (function(t, e, i) {
					const n = t._getTarget();
					e in n || (n[e] = {});
					const o = n[e];
					if (d(o) && u(i)) return i;
					return o
				})(e, i, n)))
			}

			function Le(t, e, i, n) {
				for (; i;) i = Ae(t, e, i, n);
				return i
			}

			function Ee(t, e) {
				for (const i of e) {
					if (!i) continue;
					const e = i[t];
					if (L(e)) return e
				}
			}

			function Re(t) {
				let e = t._keys;
				return e || (e = t._keys = function(t) {
					const e = new Set;
					for (const i of t)
						for (const t of Object.keys(i).filter(t => !t.startsWith("_"))) e.add(t);
					return Array.from(e)
				}(t._scopes)), e
			}
			const ze = Number.EPSILON || 1e-14,
				Fe = (t, e) => e < t.length && !t[e].skip && t[e],
				Ie = t => "x" === t ? "y" : "x";

			function Ve(t, e, i, n) {
				const o = t.skip ? e : t,
					s = e,
					a = i.skip ? e : i,
					r = Q(s, o),
					l = Q(a, s);
				let c = r / (r + l),
					h = l / (r + l);
				const d = n * (c = isNaN(c) ? 0 : c),
					u = n * (h = isNaN(h) ? 0 : h);
				return {
					previous: {
						x: s.x - d * (a.x - o.x),
						y: s.y - d * (a.y - o.y)
					},
					next: {
						x: s.x + u * (a.x - o.x),
						y: s.y + u * (a.y - o.y)
					}
				}
			}

			function je(t, e = "x") {
				const i = Ie(e),
					n = t.length,
					o = Array(n).fill(0),
					s = Array(n);
				let a, r, l, c = Fe(t, 0);
				for (a = 0; a < n; ++a)
					if (r = l, l = c, c = Fe(t, a + 1), l) {
						if (c) {
							const t = c[e] - l[e];
							o[a] = 0 !== t ? (c[i] - l[i]) / t : 0
						}
						s[a] = r ? c ? $(o[a - 1]) !== $(o[a]) ? 0 : (o[a - 1] + o[a]) / 2 : o[a - 1] : o[a]
					}!
				function(t, e, i) {
					const n = t.length;
					let o, s, a, r, l, c = Fe(t, 0);
					for (let h = 0; h < n - 1; ++h) l = c, c = Fe(t, h + 1), l && c && (X(e[h], 0, ze) ? i[h] = i[h + 1] = 0 : (o = i[h] / e[h], s = i[h + 1] / e[h], (r = Math.pow(o, 2) + Math.pow(s, 2)) <= 9 || (a = 3 / Math.sqrt(r), i[h] = o * a * e[h], i[h + 1] = s * a * e[h])))
				}(t, o, s),
				function(t, e, i = "x") {
					const n = Ie(i),
						o = t.length;
					let s, a, r, l = Fe(t, 0);
					for (let c = 0; c < o; ++c) {
						if (a = r, r = l, l = Fe(t, c + 1), !r) continue;
						const o = r[i],
							h = r[n];
						a && (s = (o - a[i]) / 3, r[`cp1${i}`] = o - s, r[`cp1${n}`] = h - s * e[c]), l && (s = (l[i] - o) / 3, r[`cp2${i}`] = o + s, r[`cp2${n}`] = h + s * e[c])
					}
				}(t, s, e)
			}

			function Be(t, e, i) {
				return Math.max(Math.min(t, i), e)
			}

			function We(t, e, i, n, o) {
				let s, a, r, l;
				if (e.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === e.cubicInterpolationMode) je(t, o);
				else {
					let i = n ? t[t.length - 1] : t[0];
					for (s = 0, a = t.length; s < a; ++s) l = Ve(i, r = t[s], t[Math.min(s + 1, a - (n ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, i = r
				}
				e.capBezierPoints && function(t, e) {
					let i, n, o, s, a, r = Qt(t[0], e);
					for (i = 0, n = t.length; i < n; ++i) a = s, s = r, r = i < n - 1 && Qt(t[i + 1], e), s && (o = t[i], a && (o.cp1x = Be(o.cp1x, e.left, e.right), o.cp1y = Be(o.cp1y, e.top, e.bottom)), r && (o.cp2x = Be(o.cp2x, e.left, e.right), o.cp2y = Be(o.cp2y, e.top, e.bottom)))
				}(t, i)
			}

			function Ne() {
				return "undefined" != typeof window && "undefined" != typeof document
			}

			function He(t) {
				let e = t.parentNode;
				return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
			}

			function $e(t, e, i) {
				let n;
				return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
			}
			const Ye = t => window.getComputedStyle(t, null);
			const Ue = ["top", "right", "bottom", "left"];

			function Xe(t, e, i) {
				const n = {};
				i = i ? "-" + i : "";
				for (let o = 0; o < 4; o++) {
					const s = Ue[o];
					n[s] = parseFloat(t[e + "-" + s + i]) || 0
				}
				return n.width = n.left + n.right, n.height = n.top + n.bottom, n
			}
			const Ke = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);

			function qe(t, e) {
				const {
					canvas: i,
					currentDevicePixelRatio: n
				} = e, o = Ye(i), s = "border-box" === o.boxSizing, a = Xe(o, "padding"), r = Xe(o, "border", "width"), {
					x: l,
					y: c,
					box: h
				} = function(t, e) {
					const i = t.native || t,
						n = i.touches,
						o = n && n.length ? n[0] : i,
						{
							offsetX: s,
							offsetY: a
						} = o;
					let r, l, c = !1;
					if (Ke(s, a, i.target)) r = s, l = a;
					else {
						const t = e.getBoundingClientRect();
						r = o.clientX - t.left, l = o.clientY - t.top, c = !0
					}
					return {
						x: r,
						y: l,
						box: c
					}
				}(t, i), d = a.left + (h && r.left), u = a.top + (h && r.top);
				let {
					width: f,
					height: g
				} = e;
				return s && (f -= a.width + r.width, g -= a.height + r.height), {
					x: Math.round((l - d) / f * i.width / n),
					y: Math.round((c - u) / g * i.height / n)
				}
			}
			const Ge = t => Math.round(10 * t) / 10;

			function Ze(t, e, i, n) {
				const o = Ye(t),
					s = Xe(o, "margin"),
					a = $e(o.maxWidth, t, "clientWidth") || V,
					r = $e(o.maxHeight, t, "clientHeight") || V,
					l = function(t, e, i) {
						let n, o;
						if (void 0 === e || void 0 === i) {
							const s = He(t);
							if (s) {
								const t = s.getBoundingClientRect(),
									a = Ye(s),
									r = Xe(a, "border", "width"),
									l = Xe(a, "padding");
								e = t.width - l.width - r.width, i = t.height - l.height - r.height, n = $e(a.maxWidth, s, "clientWidth"), o = $e(a.maxHeight, s, "clientHeight")
							} else e = t.clientWidth, i = t.clientHeight
						}
						return {
							width: e,
							height: i,
							maxWidth: n || V,
							maxHeight: o || V
						}
					}(t, e, i);
				let {
					width: c,
					height: h
				} = l;
				if ("content-box" === o.boxSizing) {
					const t = Xe(o, "border", "width"),
						e = Xe(o, "padding");
					c -= e.width + t.width, h -= e.height + t.height
				}
				return c = Math.max(0, c - s.width), h = Math.max(0, n ? Math.floor(c / n) : h - s.height), c = Ge(Math.min(c, a, l.maxWidth)), h = Ge(Math.min(h, r, l.maxHeight)), c && !h && (h = Ge(c / 2)), {
					width: c,
					height: h
				}
			}

			function Qe(t, e, i) {
				const n = e || 1,
					o = Math.floor(t.height * n),
					s = Math.floor(t.width * n);
				t.height = o / n, t.width = s / n;
				const a = t.canvas;
				return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = `${t.height}px`, a.style.width = `${t.width}px`), (t.currentDevicePixelRatio !== n || a.height !== o || a.width !== s) && (t.currentDevicePixelRatio = n, a.height = o, a.width = s, t.ctx.setTransform(n, 0, 0, n, 0, 0), !0)
			}
			const Je = function() {
				let t = !1;
				try {
					const e = {
						get passive() {
							return t = !0, !1
						}
					};
					window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
				} catch (e) {}
				return t
			}();

			function ti(t, e) {
				const i = function(t, e) {
						return Ye(t).getPropertyValue(e)
					}(t, e),
					n = i && i.match(/^(\d+)(\.\d+)?px$/);
				return n ? +n[1] : void 0
			}

			function ei(t, e, i, n) {
				return {
					x: t.x + i * (e.x - t.x),
					y: t.y + i * (e.y - t.y)
				}
			}

			function ii(t, e, i, n) {
				return {
					x: t.x + i * (e.x - t.x),
					y: "middle" === n ? i < .5 ? t.y : e.y : "after" === n ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
				}
			}

			function ni(t, e, i, n) {
				const o = {
						x: t.cp2x,
						y: t.cp2y
					},
					s = {
						x: e.cp1x,
						y: e.cp1y
					},
					a = ei(t, o, i),
					r = ei(o, s, i),
					l = ei(s, e, i),
					c = ei(a, r, i),
					h = ei(r, l, i);
				return ei(c, h, i)
			}
			const oi = new Map;

			function si(t, e, i) {
				return function(t, e) {
					e = e || {};
					const i = t + JSON.stringify(e);
					let n = oi.get(i);
					return n || (n = new Intl.NumberFormat(t, e), oi.set(i, n)), n
				}(e, i).format(t)
			}
			const ai = function(t, e) {
					return {
						x: i => t + t + e - i,
						setWidth(t) {
							e = t
						},
						textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
						xPlus: (t, e) => t - e,
						leftForLtr: (t, e) => t - e
					}
				},
				ri = function() {
					return {
						x: t => t,
						setWidth(t) {},
						textAlign: t => t,
						xPlus: (t, e) => t + e,
						leftForLtr: (t, e) => t
					}
				};

			function li(t, e, i) {
				return t ? ai(e, i) : ri()
			}

			function ci(t, e) {
				let i, n;
				"ltr" !== e && "rtl" !== e || (n = [(i = t.canvas.style).getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = n)
			}

			function hi(t, e) {
				void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
			}

			function di(t) {
				return "angle" === t ? {
					between: et,
					compare: J,
					normalize: tt
				} : {
					between: (t, e, i) => t >= Math.min(e, i) && t <= Math.max(i, e),
					compare: (t, e) => t - e,
					normalize: t => t
				}
			}

			function ui({
				start: t,
				end: e,
				count: i,
				loop: n,
				style: o
			}) {
				return {
					start: t % i,
					end: e % i,
					loop: n && (e - t + 1) % i == 0,
					style: o
				}
			}

			function fi(t, e, i) {
				if (!i) return [t];
				const {
					property: n,
					start: o,
					end: s
				} = i, a = e.length, {
					compare: r,
					between: l,
					normalize: c
				} = di(n), {
					start: h,
					end: d,
					loop: u,
					style: f
				} = function(t, e, i) {
					const {
						property: n,
						start: o,
						end: s
					} = i, {
						between: a,
						normalize: r
					} = di(n), l = e.length;
					let c, h, {
						start: d,
						end: u,
						loop: f
					} = t;
					if (f) {
						for (d += l, u += l, c = 0, h = l; c < h && a(r(e[d % l][n]), o, s); ++c) d--, u--;
						d %= l, u %= l
					}
					return u < d && (u += l), {
						start: d,
						end: u,
						loop: f,
						style: t.style
					}
				}(t, e, i), g = [];
				let p, m, b, x = !1,
					_ = null;
				const y = () => x || (() => l(o, b, p) && 0 !== r(o, b))(),
					v = () => !x || (() => 0 === r(s, p) || l(s, b, p))();
				for (let w = h, M = h; w <= d; ++w)(m = e[w % a]).skip || (p = c(m[n])) !== b && (x = l(p, o, s), null === _ && y() && (_ = 0 === r(p, o) ? w : M), null !== _ && v() && (g.push(ui({
					start: _,
					end: w,
					loop: u,
					count: a,
					style: f
				})), _ = null), M = w, b = p);
				return null !== _ && g.push(ui({
					start: _,
					end: d,
					loop: u,
					count: a,
					style: f
				})), g
			}

			function gi(t, e) {
				const i = [],
					n = t.segments;
				for (let o = 0; o < n.length; o++) {
					const s = fi(n[o], t.points, e);
					s.length && i.push(...s)
				}
				return i
			}

			function pi(t, e, i, n) {
				return n && n.setContext && i ? function(t, e, i, n) {
					const o = mi(t.options),
						s = i.length,
						a = [];
					let r = e[0].start,
						l = r;
					for (const c of e) {
						let e, h = o,
							d = i[r % s];
						for (l = r + 1; l <= c.end; l++) {
							const o = i[l % s];
							bi(e = mi(n.setContext({
								type: "segment",
								p0: d,
								p1: o,
								p0DataIndex: (l - 1) % s,
								p1DataIndex: l % s,
								datasetIndex: t._datasetIndex
							})), h) && (a.push({
								start: r,
								end: l - 1,
								loop: c.loop,
								style: h
							}), h = e, r = l - 1), d = o, h = e
						}
						r < l - 1 && (a.push({
							start: r,
							end: l - 1,
							loop: c.loop,
							style: e
						}), r = l - 1)
					}
					return a
				}(t, e, i, n) : e
			}

			function mi(t) {
				return {
					backgroundColor: t.backgroundColor,
					borderCapStyle: t.borderCapStyle,
					borderDash: t.borderDash,
					borderDashOffset: t.borderDashOffset,
					borderJoinStyle: t.borderJoinStyle,
					borderWidth: t.borderWidth,
					borderColor: t.borderColor
				}
			}

			function bi(t, e) {
				return e && JSON.stringify(t) !== JSON.stringify(e)
			}
			var xi = new class {
				constructor() {
					this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
				}
				_notify(t, e, i, n) {
					const o = e.listeners[n],
						s = e.duration;
					o.forEach(n => n({
						chart: t,
						initial: e.initial,
						numSteps: s,
						currentStep: Math.min(i - e.start, s)
					}))
				}
				_refresh() {
					const t = this;
					t._request || (t._running = !0, t._request = n.call(window, () => {
						t._update(), t._request = null, t._running && t._refresh()
					}))
				}
				_update(t = Date.now()) {
					const e = this;
					let i = 0;
					e._charts.forEach((n, o) => {
						if (!n.running || !n.items.length) return;
						const s = n.items;
						let a, r = s.length - 1,
							l = !1;
						for (; r >= 0; --r)(a = s[r])._active ? (a._total > n.duration && (n.duration = a._total), a.tick(t), l = !0) : (s[r] = s[s.length - 1], s.pop());
						l && (o.draw(), e._notify(o, n, t, "progress")), s.length || (n.running = !1, e._notify(o, n, t, "complete"), n.initial = !1), i += s.length
					}), e._lastDate = t, 0 === i && (e._running = !1)
				}
				_getAnims(t) {
					const e = this._charts;
					let i = e.get(t);
					return i || (i = {
						running: !1,
						initial: !0,
						items: [],
						listeners: {
							complete: [],
							progress: []
						}
					}, e.set(t, i)), i
				}
				listen(t, e, i) {
					this._getAnims(t).listeners[e].push(i)
				}
				add(t, e) {
					e && e.length && this._getAnims(t).items.push(...e)
				}
				has(t) {
					return this._getAnims(t).items.length > 0
				}
				start(t) {
					const e = this._charts.get(t);
					e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0), this._refresh())
				}
				running(t) {
					if (!this._running) return !1;
					const e = this._charts.get(t);
					return !!(e && e.running && e.items.length)
				}
				stop(t) {
					const e = this._charts.get(t);
					if (!e || !e.items.length) return;
					const i = e.items;
					let n = i.length - 1;
					for (; n >= 0; --n) i[n].cancel();
					e.items = [], this._notify(t, e, Date.now(), "complete")
				}
				remove(t) {
					return this._charts.delete(t)
				}
			};
			const _i = {
				boolean: (t, e, i) => i > .5 ? e : t,
				color(t, e, i) {
					const n = Bt(t || "transparent"),
						o = n.valid && Bt(e || "transparent");
					return o && o.valid ? o.mix(n, i).hexString() : e
				},
				number: (t, e, i) => t + (e - t) * i
			};
			class yi {
				constructor(t, e, i, n) {
					const o = e[i];
					n = pe([t.to, n, o, t.from]);
					const s = pe([t.from, o, n]);
					this._active = !0, this._fn = t.fn || _i[t.type || typeof s], this._easing = at[t.easing] || at.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = s, this._to = n, this._promises = void 0
				}
				active() {
					return this._active
				}
				update(t, e, i) {
					const n = this;
					if (n._active) {
						n._notify(!1);
						const o = n._target[n._prop],
							s = i - n._start,
							a = n._duration - s;
						n._start = i, n._duration = Math.floor(Math.max(a, t.duration)), n._total += s, n._loop = !!t.loop, n._to = pe([t.to, e, o, t.from]), n._from = pe([t.from, o, e])
					}
				}
				cancel() {
					const t = this;
					t._active && (t.tick(Date.now()), t._active = !1, t._notify(!1))
				}
				tick(t) {
					const e = this,
						i = t - e._start,
						n = e._duration,
						o = e._prop,
						s = e._from,
						a = e._loop,
						r = e._to;
					let l;
					if (e._active = s !== r && (a || i < n), !e._active) return e._target[o] = r, void e._notify(!0);
					i < 0 ? e._target[o] = s : (l = i / n % 2, l = a && l > 1 ? 2 - l : l, l = e._easing(Math.min(1, Math.max(0, l))), e._target[o] = e._fn(s, r, l))
				}
				wait() {
					const t = this._promises || (this._promises = []);
					return new Promise((e, i) => {
						t.push({
							res: e,
							rej: i
						})
					})
				}
				_notify(t) {
					const e = t ? "res" : "rej",
						i = this._promises || [];
					for (let n = 0; n < i.length; n++) i[n][e]()
				}
			}
			Ut.set("animation", {
				delay: void 0,
				duration: 1e3,
				easing: "easeOutQuart",
				fn: void 0,
				from: void 0,
				loop: void 0,
				to: void 0,
				type: void 0
			});
			const vi = Object.keys(Ut.animation);
			Ut.describe("animation", {
				_fallback: !1,
				_indexable: !1,
				_scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
			}), Ut.set("animations", {
				colors: {
					type: "color",
					properties: ["color", "borderColor", "backgroundColor"]
				},
				numbers: {
					type: "number",
					properties: ["x", "y", "borderWidth", "radius", "tension"]
				}
			}), Ut.describe("animations", {
				_fallback: "animation"
			}), Ut.set("transitions", {
				active: {
					animation: {
						duration: 400
					}
				},
				resize: {
					animation: {
						duration: 0
					}
				},
				show: {
					animations: {
						colors: {
							from: "transparent"
						},
						visible: {
							type: "boolean",
							duration: 0
						}
					}
				},
				hide: {
					animations: {
						colors: {
							to: "transparent"
						},
						visible: {
							type: "boolean",
							easing: "linear",
							fn: t => 0 | t
						}
					}
				}
			});
			class wi {
				constructor(t, e) {
					this._chart = t, this._properties = new Map, this.configure(e)
				}
				configure(t) {
					if (!u(t)) return;
					const e = this._properties;
					Object.getOwnPropertyNames(t).forEach(i => {
						const n = t[i];
						if (!u(n)) return;
						const o = {};
						for (const t of vi) o[t] = n[t];
						(d(n.properties) && n.properties || [i]).forEach(t => {
							t !== i && e.has(t) || e.set(t, o)
						})
					})
				}
				_animateOptions(t, e) {
					const i = e.options,
						n = function(t, e) {
							if (!e) return;
							let i = t.options;
							if (!i) return void(t.options = e);
							i.$shared && (t.options = i = Object.assign({}, i, {
								$shared: !1,
								$animations: {}
							}));
							return i
						}(t, i);
					if (!n) return [];
					const o = this._createAnimations(n, i);
					return i.$shared && function(t, e) {
						const i = [],
							n = Object.keys(e);
						for (let o = 0; o < n.length; o++) {
							const e = t[n[o]];
							e && e.active() && i.push(e.wait())
						}
						return Promise.all(i)
					}(t.options.$animations, i).then(() => {
						t.options = i
					}, () => {}), o
				}
				_createAnimations(t, e) {
					const i = this._properties,
						n = [],
						o = t.$animations || (t.$animations = {}),
						s = Object.keys(e),
						a = Date.now();
					let r;
					for (r = s.length - 1; r >= 0; --r) {
						const l = s[r];
						if ("$" === l.charAt(0)) continue;
						if ("options" === l) {
							n.push(...this._animateOptions(t, e));
							continue
						}
						const c = e[l];
						let h = o[l];
						const d = i.get(l);
						if (h) {
							if (d && h.active()) {
								h.update(d, c, a);
								continue
							}
							h.cancel()
						}
						d && d.duration ? (o[l] = h = new yi(d, t, l, c), n.push(h)) : t[l] = c
					}
					return n
				}
				update(t, e) {
					if (0 === this._properties.size) return void Object.assign(t, e);
					const i = this._createAnimations(t, e);
					return i.length ? (xi.add(this._chart, i), !0) : void 0
				}
			}

			function Mi(t, e) {
				const i = t && t.options || {},
					n = i.reverse,
					o = void 0 === i.min ? e : 0,
					s = void 0 === i.max ? e : 0;
				return {
					start: n ? s : o,
					end: n ? o : s
				}
			}

			function ki(t, e) {
				const i = [],
					n = t._getSortedDatasetMetas(e);
				let o, s;
				for (o = 0, s = n.length; o < s; ++o) i.push(n[o].index);
				return i
			}

			function Si(t, e, i, n) {
				const o = t.keys,
					s = "single" === n.mode;
				let a, r, l, c;
				if (null !== e) {
					for (a = 0, r = o.length; a < r; ++a) {
						if ((l = +o[a]) === i) {
							if (n.all) continue;
							break
						}
						c = t.values[l], f(c) && (s || 0 === e || $(e) === $(c)) && (e += c)
					}
					return e
				}
			}

			function Pi(t, e) {
				const i = t && t.options.stacked;
				return i || void 0 === i && void 0 !== e.stack
			}

			function Oi(t, e, i) {
				const n = t[e] || (t[e] = {});
				return n[i] || (n[i] = {})
			}

			function Di(t, e, i) {
				for (const n of e.getMatchingVisibleMetas("bar").reverse()) {
					const e = t[n.index];
					if (i && e > 0 || !i && e < 0) return n.index
				}
				return null
			}

			function Ci(t, e) {
				const {
					chart: i,
					_cachedMeta: n
				} = t, o = i._stacks || (i._stacks = {}), {
					iScale: s,
					vScale: a,
					index: r
				} = n, l = s.axis, c = a.axis, h = function(t, e, i) {
					return `${t.id}.${e.id}.${i.stack||i.type}`
				}(s, a, n), d = e.length;
				let u;
				for (let f = 0; f < d; ++f) {
					const t = e[f],
						{
							[l]: i,
							[c]: n
						} = t;
					(u = (t._stacks || (t._stacks = {}))[c] = Oi(o, h, i))[r] = n, u._top = Di(u, a, !0), u._bottom = Di(u, a, !1)
				}
			}

			function Ai(t, e) {
				const i = t.scales;
				return Object.keys(i).filter(t => i[t].axis === e).shift()
			}

			function Ti(t, e) {
				const i = t.controller.index,
					n = t.vScale && t.vScale.axis;
				if (n) {
					e = e || t._parsed;
					for (const t of e) {
						const e = t._stacks;
						if (!e || void 0 === e[n] || void 0 === e[n][i]) return;
						delete e[n][i]
					}
				}
			}
			const Li = t => "reset" === t || "none" === t,
				Ei = (t, e) => e ? t : Object.assign({}, t);
			class Ri {
				constructor(t, e) {
					this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize()
				}
				initialize() {
					const t = this._cachedMeta;
					this.configure(), this.linkScales(), t._stacked = Pi(t.vScale, t), this.addElements()
				}
				updateIndex(t) {
					this.index !== t && Ti(this._cachedMeta), this.index = t
				}
				linkScales() {
					const t = this,
						e = t.chart,
						i = t._cachedMeta,
						n = t.getDataset(),
						o = (t, e, i, n) => "x" === t ? e : "r" === t ? n : i,
						s = i.xAxisID = p(n.xAxisID, Ai(e, "x")),
						a = i.yAxisID = p(n.yAxisID, Ai(e, "y")),
						r = i.rAxisID = p(n.rAxisID, Ai(e, "r")),
						l = i.indexAxis,
						c = i.iAxisID = o(l, s, a, r),
						h = i.vAxisID = o(l, a, s, r);
					i.xScale = t.getScaleForId(s), i.yScale = t.getScaleForId(a), i.rScale = t.getScaleForId(r), i.iScale = t.getScaleForId(c), i.vScale = t.getScaleForId(h)
				}
				getDataset() {
					return this.chart.data.datasets[this.index]
				}
				getMeta() {
					return this.chart.getDatasetMeta(this.index)
				}
				getScaleForId(t) {
					return this.chart.scales[t]
				}
				_getOtherScale(t) {
					const e = this._cachedMeta;
					return t === e.iScale ? e.vScale : e.iScale
				}
				reset() {
					this._update("reset")
				}
				_destroy() {
					const t = this._cachedMeta;
					this._data && ye(this._data, this), t._stacked && Ti(t)
				}
				_dataCheck() {
					const t = this,
						e = t.getDataset(),
						i = e.data || (e.data = []),
						n = t._data;
					if (u(i)) t._data = function(t) {
						const e = Object.keys(t),
							i = new Array(e.length);
						let n, o, s;
						for (n = 0, o = e.length; n < o; ++n) s = e[n], i[n] = {
							x: s,
							y: t[s]
						};
						return i
					}(i);
					else if (n !== i) {
						if (n) {
							ye(n, t);
							const e = t._cachedMeta;
							Ti(e), e._parsed = []
						}
						i && Object.isExtensible(i) && (s = t, (o = i)._chartjs ? o._chartjs.listeners.push(s) : (Object.defineProperty(o, "_chartjs", {
							configurable: !0,
							enumerable: !1,
							value: {
								listeners: [s]
							}
						}), _e.forEach(t => {
							const e = "_onData" + T(t),
								i = o[t];
							Object.defineProperty(o, t, {
								configurable: !0,
								enumerable: !1,
								value(...t) {
									const n = i.apply(this, t);
									return o._chartjs.listeners.forEach(i => {
										"function" == typeof i[e] && i[e](...t)
									}), n
								}
							})
						}))), t._syncList = [], t._data = i
					}
					var o, s
				}
				addElements() {
					const t = this,
						e = t._cachedMeta;
					t._dataCheck(), t.datasetElementType && (e.dataset = new t.datasetElementType)
				}
				buildOrUpdateElements(t) {
					const e = this,
						i = e._cachedMeta,
						n = e.getDataset();
					let o = !1;
					e._dataCheck();
					const s = i._stacked;
					i._stacked = Pi(i.vScale, i), i.stack !== n.stack && (o = !0, Ti(i), i.stack = n.stack), e._resyncElements(t), (o || s !== i._stacked) && Ci(e, i._parsed)
				}
				configure() {
					const t = this,
						e = t.chart.config,
						i = e.datasetScopeKeys(t._type),
						n = e.getOptionScopes(t.getDataset(), i, !0);
					t.options = e.createResolver(n, t.getContext()), t._parsing = t.options.parsing
				}
				parse(t, e) {
					const i = this,
						{
							_cachedMeta: n,
							_data: o
						} = i,
						{
							iScale: s,
							_stacked: a
						} = n,
						r = s.axis;
					let l, c, h, f = 0 === t && e === o.length || n._sorted,
						g = t > 0 && n._parsed[t - 1];
					if (!1 === i._parsing) n._parsed = o, n._sorted = !0, h = o;
					else {
						h = d(o[t]) ? i.parseArrayData(n, o, t, e) : u(o[t]) ? i.parseObjectData(n, o, t, e) : i.parsePrimitiveData(n, o, t, e);
						const s = () => null === c[r] || g && c[r] < g[r];
						for (l = 0; l < e; ++l) n._parsed[l + t] = c = h[l], f && (s() && (f = !1), g = c);
						n._sorted = f
					}
					a && Ci(i, h)
				}
				parsePrimitiveData(t, e, i, n) {
					const {
						iScale: o,
						vScale: s
					} = t, a = o.axis, r = s.axis, l = o.getLabels(), c = o === s, h = new Array(n);
					let d, u, f;
					for (d = 0, u = n; d < u; ++d) f = d + i, h[d] = {
						[a]: c || o.parse(l[f], f),
						[r]: s.parse(e[f], f)
					};
					return h
				}
				parseArrayData(t, e, i, n) {
					const {
						xScale: o,
						yScale: s
					} = t, a = new Array(n);
					let r, l, c, h;
					for (r = 0, l = n; r < l; ++r) h = e[c = r + i], a[r] = {
						x: o.parse(h[0], c),
						y: s.parse(h[1], c)
					};
					return a
				}
				parseObjectData(t, e, i, n) {
					const {
						xScale: o,
						yScale: s
					} = t, {
						xAxisKey: a = "x",
						yAxisKey: r = "y"
					} = this._parsing, l = new Array(n);
					let c, h, d, u;
					for (c = 0, h = n; c < h; ++c) u = e[d = c + i], l[c] = {
						x: o.parse(A(u, a), d),
						y: s.parse(A(u, r), d)
					};
					return l
				}
				getParsed(t) {
					return this._cachedMeta._parsed[t]
				}
				getDataElement(t) {
					return this._cachedMeta.data[t]
				}
				applyStack(t, e, i) {
					const n = this.chart,
						o = this._cachedMeta,
						s = e[t.axis];
					return Si({
						keys: ki(n, !0),
						values: e._stacks[t.axis]
					}, s, o.index, {
						mode: i
					})
				}
				updateRangeFromParsed(t, e, i, n) {
					const o = i[e.axis];
					let s = null === o ? NaN : o;
					const a = n && i._stacks[e.axis];
					n && a && (n.values = a, t.min = Math.min(t.min, s), t.max = Math.max(t.max, s), s = Si(n, o, this._cachedMeta.index, {
						all: !0
					})), t.min = Math.min(t.min, s), t.max = Math.max(t.max, s)
				}
				getMinMax(t, e) {
					const i = this,
						n = i._cachedMeta,
						o = n._parsed,
						s = n._sorted && t === n.iScale,
						a = o.length,
						r = i._getOtherScale(t),
						l = e && n._stacked && {
							keys: ki(i.chart, !0),
							values: null
						},
						c = {
							min: Number.POSITIVE_INFINITY,
							max: Number.NEGATIVE_INFINITY
						},
						{
							min: h,
							max: d
						} = function(t) {
							const {
								min: e,
								max: i,
								minDefined: n,
								maxDefined: o
							} = t.getUserBounds();
							return {
								min: n ? e : Number.NEGATIVE_INFINITY,
								max: o ? i : Number.POSITIVE_INFINITY
							}
						}(r);
					let u, g, p, m;

					function b() {
						return p = o[u], g = p[t.axis], m = p[r.axis], !f(g) || h > m || d < m
					}
					for (u = 0; u < a && (b() || (i.updateRangeFromParsed(c, t, p, l), !s)); ++u);
					if (s)
						for (u = a - 1; u >= 0; --u)
							if (!b()) {
								i.updateRangeFromParsed(c, t, p, l);
								break
							} return c
				}
				getAllParsedValues(t) {
					const e = this._cachedMeta._parsed,
						i = [];
					let n, o, s;
					for (n = 0, o = e.length; n < o; ++n) s = e[n][t.axis], f(s) && i.push(s);
					return i
				}
				getMaxOverflow() {
					return !1
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						i = e.iScale,
						n = e.vScale,
						o = this.getParsed(t);
					return {
						label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
						value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
					}
				}
				_update(t) {
					const e = this,
						i = e._cachedMeta;
					e.configure(), e._cachedDataOpts = {}, e.update(t || "default"), i._clip = function(t) {
						let e, i, n, o;
						return u(t) ? (e = t.top, i = t.right, n = t.bottom, o = t.left) : e = i = n = o = t, {
							top: e,
							right: i,
							bottom: n,
							left: o,
							disabled: !1 === t
						}
					}(p(e.options.clip, function(t, e, i) {
						if (!1 === i) return !1;
						const n = Mi(t, i),
							o = Mi(e, i);
						return {
							top: o.end,
							right: n.end,
							bottom: o.start,
							left: n.start
						}
					}(i.xScale, i.yScale, e.getMaxOverflow())))
				}
				update(t) {}
				draw() {
					const t = this,
						e = t._ctx,
						i = t.chart,
						n = t._cachedMeta,
						o = n.data || [],
						s = i.chartArea,
						a = [],
						r = t._drawStart || 0,
						l = t._drawCount || o.length - r;
					let c;
					for (n.dataset && n.dataset.draw(e, s, r, l), c = r; c < r + l; ++c) {
						const t = o[c];
						t.hidden || (t.active ? a.push(t) : t.draw(e, s))
					}
					for (c = 0; c < a.length; ++c) a[c].draw(e, s)
				}
				getStyle(t, e) {
					const i = e ? "active" : "default";
					return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i)
				}
				getContext(t, e, i) {
					const n = this,
						o = n.getDataset();
					let s;
					if (t >= 0 && t < n._cachedMeta.data.length) {
						const e = n._cachedMeta.data[t];
						(s = e.$context || (e.$context = function(t, e, i) {
							return Object.assign(Object.create(t), {
								active: !1,
								dataIndex: e,
								parsed: void 0,
								raw: void 0,
								element: i,
								index: e,
								mode: "default",
								type: "data"
							})
						}(n.getContext(), t, e))).parsed = n.getParsed(t), s.raw = o.data[t], s.index = s.dataIndex = t
					} else(s = n.$context || (n.$context = function(t, e) {
						return Object.assign(Object.create(t), {
							active: !1,
							dataset: void 0,
							datasetIndex: e,
							index: e,
							mode: "default",
							type: "dataset"
						})
					}(n.chart.getContext(), n.index))).dataset = o, s.index = s.datasetIndex = n.index;
					return s.active = !!e, s.mode = i, s
				}
				resolveDatasetElementOptions(t) {
					return this._resolveElementOptions(this.datasetElementType.id, t)
				}
				resolveDataElementOptions(t, e) {
					return this._resolveElementOptions(this.dataElementType.id, e, t)
				}
				_resolveElementOptions(t, e = "default", i) {
					const n = this,
						o = "active" === e,
						s = n._cachedDataOpts,
						a = t + "-" + e,
						r = s[a],
						l = n.enableOptionSharing && L(i);
					if (r) return Ei(r, l);
					const c = n.chart.config,
						h = c.datasetElementScopeKeys(n._type, t),
						d = o ? [`${t}Hover`, "hover", t, ""] : [t, ""],
						u = c.getOptionScopes(n.getDataset(), h),
						f = Object.keys(Ut.elements[t]),
						g = c.resolveNamedOptions(u, f, () => n.getContext(i, o), d);
					return g.$shared && (g.$shared = l, s[a] = Object.freeze(Ei(g, l))), g
				}
				_resolveAnimations(t, e, i) {
					const n = this,
						o = n.chart,
						s = n._cachedDataOpts,
						a = `animation-${e}`,
						r = s[a];
					if (r) return r;
					let l;
					if (!1 !== o.options.animation) {
						const o = n.chart.config,
							s = o.datasetAnimationScopeKeys(n._type, e),
							a = o.getOptionScopes(n.getDataset(), s);
						l = o.createResolver(a, n.getContext(t, i, e))
					}
					const c = new wi(o, l && l.animations);
					return l && l._cacheable && (s[a] = Object.freeze(c)), c
				}
				getSharedOptions(t) {
					if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
				}
				includeOptions(t, e) {
					return !e || Li(t) || this.chart._animationsDisabled
				}
				updateElement(t, e, i, n) {
					Li(n) ? Object.assign(t, i) : this._resolveAnimations(e, n).update(t, i)
				}
				updateSharedOptions(t, e, i) {
					t && !Li(e) && this._resolveAnimations(void 0, e).update(t, i)
				}
				_setStyle(t, e, i, n) {
					t.active = n;
					const o = this.getStyle(e, n);
					this._resolveAnimations(e, i, n).update(t, {
						options: !n && this.getSharedOptions(o) || o
					})
				}
				removeHoverStyle(t, e, i) {
					this._setStyle(t, i, "active", !1)
				}
				setHoverStyle(t, e, i) {
					this._setStyle(t, i, "active", !0)
				}
				_removeDatasetHoverStyle() {
					const t = this._cachedMeta.dataset;
					t && this._setStyle(t, void 0, "active", !1)
				}
				_setDatasetHoverStyle() {
					const t = this._cachedMeta.dataset;
					t && this._setStyle(t, void 0, "active", !0)
				}
				_resyncElements(t) {
					const e = this,
						i = e._data,
						n = e._cachedMeta.data;
					for (const [r, l, c] of e._syncList) e[r](l, c);
					e._syncList = [];
					const o = n.length,
						s = i.length,
						a = Math.min(s, o);
					a && e.parse(0, a), s > o ? e._insertElements(o, s - o, t) : s < o && e._removeElements(s, o - s)
				}
				_insertElements(t, e, i = !0) {
					const n = this,
						o = n._cachedMeta,
						s = o.data,
						a = t + e;
					let r;
					const l = t => {
						for (t.length += e, r = t.length - 1; r >= a; r--) t[r] = t[r - e]
					};
					for (l(s), r = t; r < a; ++r) s[r] = new n.dataElementType;
					n._parsing && l(o._parsed), n.parse(t, e), i && n.updateElements(s, t, e, "reset")
				}
				updateElements(t, e, i, n) {}
				_removeElements(t, e) {
					const i = this._cachedMeta;
					if (this._parsing) {
						const n = i._parsed.splice(t, e);
						i._stacked && Ti(i, n)
					}
					i.data.splice(t, e)
				}
				_sync(t) {
					if (this._parsing) this._syncList.push(t);
					else {
						const [e, i, n] = t;
						this[e](i, n)
					}
				}
				_onDataPush() {
					const t = arguments.length;
					this._sync(["_insertElements", this.getDataset().data.length - t, t])
				}
				_onDataPop() {
					this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
				}
				_onDataShift() {
					this._sync(["_removeElements", 0, 1])
				}
				_onDataSplice(t, e) {
					this._sync(["_removeElements", t, e]), this._sync(["_insertElements", t, arguments.length - 2])
				}
				_onDataUnshift() {
					this._sync(["_insertElements", 0, arguments.length])
				}
			}

			function zi(t) {
				const e = function(t) {
					if (!t._cache.$bar) {
						const e = t.getMatchingVisibleMetas("bar");
						let i = [];
						for (let n = 0, o = e.length; n < o; n++) i = i.concat(e[n].controller.getAllParsedValues(t));
						t._cache.$bar = ve(i.sort((t, e) => t - e))
					}
					return t._cache.$bar
				}(t);
				let i, n, o, s, a = t._length;
				const r = () => {
					32767 !== o && -32768 !== o && (L(s) && (a = Math.min(a, Math.abs(o - s) || a)), s = o)
				};
				for (i = 0, n = e.length; i < n; ++i) o = t.getPixelForValue(e[i]), r();
				for (s = void 0, i = 0, n = t.ticks.length; i < n; ++i) o = t.getPixelForTick(i), r();
				return a
			}

			function Fi(t, e, i, n) {
				return d(t) ? function(t, e, i, n) {
					const o = i.parse(t[0], n),
						s = i.parse(t[1], n),
						a = Math.min(o, s),
						r = Math.max(o, s);
					let l = a,
						c = r;
					Math.abs(a) > Math.abs(r) && (l = r, c = a), e[i.axis] = c, e._custom = {
						barStart: l,
						barEnd: c,
						start: o,
						end: s,
						min: a,
						max: r
					}
				}(t, e, i, n) : e[i.axis] = i.parse(t, n), e
			}

			function Ii(t, e, i, n) {
				const o = t.iScale,
					s = t.vScale,
					a = o.getLabels(),
					r = o === s,
					l = [];
				let c, h, d, u;
				for (c = i, h = i + n; c < h; ++c) u = e[c], (d = {})[o.axis] = r || o.parse(a[c], c), l.push(Fi(u, d, s, c));
				return l
			}

			function Vi(t) {
				return t && void 0 !== t.barStart && void 0 !== t.barEnd
			}

			function ji(t, e, i, n) {
				let o = e.borderSkipped;
				const s = {};
				if (!o) return void(t.borderSkipped = s);
				const {
					start: a,
					end: r,
					reverse: l,
					top: c,
					bottom: h
				} = function(t) {
					let e, i, n, o, s;
					return t.horizontal ? (e = t.base > t.x, i = "left", n = "right") : (e = t.base < t.y, i = "bottom", n = "top"), e ? (o = "end", s = "start") : (o = "start", s = "end"), {
						start: i,
						end: n,
						reverse: e,
						top: o,
						bottom: s
					}
				}(t);
				"middle" === o && i && (t.enableBorderRadius = !0, (i._top || 0) === n ? o = c : (i._bottom || 0) === n ? o = h : (s[Bi(h, a, r, l)] = !0, o = c)), s[Bi(o, a, r, l)] = !0, t.borderSkipped = s
			}

			function Bi(t, e, i, n) {
				var o, s, a;
				return n ? (a = i, t = Wi(t = (o = t) === (s = e) ? a : o === a ? s : o, i, e)) : t = Wi(t, e, i), t
			}

			function Wi(t, e, i) {
				return "start" === t ? e : "end" === t ? i : t
			}
			Ri.defaults = {}, Ri.prototype.datasetElementType = null, Ri.prototype.dataElementType = null;
			class Ni extends Ri {
				parsePrimitiveData(t, e, i, n) {
					return Ii(t, e, i, n)
				}
				parseArrayData(t, e, i, n) {
					return Ii(t, e, i, n)
				}
				parseObjectData(t, e, i, n) {
					const {
						iScale: o,
						vScale: s
					} = t, {
						xAxisKey: a = "x",
						yAxisKey: r = "y"
					} = this._parsing, l = "x" === o.axis ? a : r, c = "x" === s.axis ? a : r, h = [];
					let d, u, f, g;
					for (d = i, u = i + n; d < u; ++d) g = e[d], (f = {})[o.axis] = o.parse(A(g, l), d), h.push(Fi(A(g, c), f, s, d));
					return h
				}
				updateRangeFromParsed(t, e, i, n) {
					super.updateRangeFromParsed(t, e, i, n);
					const o = i._custom;
					o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max))
				}
				getMaxOverflow() {
					return 0
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						{
							iScale: i,
							vScale: n
						} = e,
						o = this.getParsed(t),
						s = o._custom,
						a = Vi(s) ? "[" + s.start + ", " + s.end + "]" : "" + n.getLabelForValue(o[n.axis]);
					return {
						label: "" + i.getLabelForValue(o[i.axis]),
						value: a
					}
				}
				initialize() {
					this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack
				}
				update(t) {
					const e = this._cachedMeta;
					this.updateElements(e.data, 0, e.data.length, t)
				}
				updateElements(t, e, i, n) {
					const o = this,
						s = "reset" === n,
						{
							index: a,
							_cachedMeta: {
								vScale: r
							}
						} = o,
						l = r.getBasePixel(),
						c = r.isHorizontal(),
						d = o._getRuler(),
						u = o.resolveDataElementOptions(e, n),
						f = o.getSharedOptions(u),
						g = o.includeOptions(n, f);
					o.updateSharedOptions(f, n, u);
					for (let p = e; p < e + i; p++) {
						const e = o.getParsed(p),
							i = s || h(e[r.axis]) ? {
								base: l,
								head: l
							} : o._calculateBarValuePixels(p),
							u = o._calculateBarIndexPixels(p, d),
							m = (e._stacks || {})[r.axis],
							b = {
								horizontal: c,
								base: i.base,
								enableBorderRadius: !m || Vi(e._custom) || a === m._top || a === m._bottom,
								x: c ? i.head : u.center,
								y: c ? u.center : i.head,
								height: c ? u.size : Math.abs(i.size),
								width: c ? Math.abs(i.size) : u.size
							};
						g && (b.options = f || o.resolveDataElementOptions(p, t[p].active ? "active" : n)), ji(b, b.options || t[p].options, m, a), o.updateElement(t[p], p, b, n)
					}
				}
				_getStacks(t, e) {
					const i = this._cachedMeta.iScale,
						n = i.getMatchingVisibleMetas(this._type),
						o = i.options.stacked,
						s = n.length,
						a = [];
					let r, l;
					for (r = 0; r < s; ++r)
						if ((l = n[r]).controller.options.grouped) {
							if (void 0 !== e) {
								const t = l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];
								if (h(t) || isNaN(t)) continue
							}
							if ((!1 === o || -1 === a.indexOf(l.stack) || void 0 === o && void 0 === l.stack) && a.push(l.stack), l.index === t) break
						} return a.length || a.push(void 0), a
				}
				_getStackCount(t) {
					return this._getStacks(void 0, t).length
				}
				_getStackIndex(t, e, i) {
					const n = this._getStacks(t, i),
						o = void 0 !== e ? n.indexOf(e) : -1;
					return -1 === o ? n.length - 1 : o
				}
				_getRuler() {
					const t = this,
						e = t.options,
						i = t._cachedMeta,
						n = i.iScale,
						o = [];
					let s, a;
					for (s = 0, a = i.data.length; s < a; ++s) o.push(n.getPixelForValue(t.getParsed(s)[n.axis], s));
					const r = e.barThickness;
					return {
						min: r || zi(n),
						pixels: o,
						start: n._startPixel,
						end: n._endPixel,
						stackCount: t._getStackCount(),
						scale: n,
						grouped: e.grouped,
						ratio: r ? 1 : e.categoryPercentage * e.barPercentage
					}
				}
				_calculateBarValuePixels(t) {
					const {
						_cachedMeta: {
							vScale: e,
							_stacked: i
						},
						options: {
							base: n,
							minBarLength: o
						}
					} = this, s = n || 0, a = this.getParsed(t), r = a._custom, l = Vi(r);
					let c, d, u = a[e.axis],
						f = 0,
						g = i ? this.applyStack(e, a, i) : u;
					g !== u && (f = g - u, g = u), l && (u = r.barStart, g = r.barEnd - r.barStart, 0 !== u && $(u) !== $(r.barEnd) && (f = 0), f += u);
					const p = h(n) || l ? f : n;
					let m = e.getPixelForValue(p);
					if (d = (c = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + g) : m) - m, Math.abs(d) < o && (d = function(t, e, i) {
							return 0 !== t ? $(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1)
						}(d, e, s) * o, u === s && (m -= d / 2), c = m + d), m === e.getPixelForValue(s)) {
						const t = $(d) * e.getLineWidthForValue(s) / 2;
						m += t, d -= t
					}
					return {
						size: d,
						base: m,
						head: c,
						center: c + d / 2
					}
				}
				_calculateBarIndexPixels(t, e) {
					const i = this,
						n = e.scale,
						o = i.options,
						s = o.skipNull,
						a = p(o.maxBarThickness, 1 / 0);
					let r, l;
					if (e.grouped) {
						const n = s ? i._getStackCount(t) : e.stackCount,
							c = "flex" === o.barThickness ? function(t, e, i, n) {
								const o = e.pixels,
									s = o[t];
								let a = t > 0 ? o[t - 1] : null,
									r = t < o.length - 1 ? o[t + 1] : null;
								const l = i.categoryPercentage;
								null === a && (a = s - (null === r ? e.end - e.start : r - s)), null === r && (r = s + s - a);
								const c = s - (s - Math.min(a, r)) / 2 * l;
								return {
									chunk: Math.abs(r - a) / 2 * l / n,
									ratio: i.barPercentage,
									start: c
								}
							}(t, e, o, n) : function(t, e, i, n) {
								const o = i.barThickness;
								let s, a;
								return h(o) ? (s = e.min * i.categoryPercentage, a = i.barPercentage) : (s = o * n, a = 1), {
									chunk: s / n,
									ratio: a,
									start: e.pixels[t] - s / 2
								}
							}(t, e, o, n),
							d = i._getStackIndex(i.index, i._cachedMeta.stack, s ? t : void 0);
						r = c.start + c.chunk * d + c.chunk / 2, l = Math.min(a, c.chunk * c.ratio)
					} else r = n.getPixelForValue(i.getParsed(t)[n.axis], t), l = Math.min(a, e.min * e.ratio);
					return {
						base: r - l / 2,
						head: r + l / 2,
						center: r,
						size: l
					}
				}
				draw() {
					const t = this,
						e = t._cachedMeta,
						i = e.vScale,
						n = e.data,
						o = n.length;
					let s = 0;
					for (; s < o; ++s) null !== t.getParsed(s)[i.axis] && n[s].draw(t._ctx)
				}
			}
			Ni.id = "bar", Ni.defaults = {
				datasetElementType: !1,
				dataElementType: "bar",
				categoryPercentage: .8,
				barPercentage: .9,
				grouped: !0,
				animations: {
					numbers: {
						type: "number",
						properties: ["x", "y", "base", "width", "height"]
					}
				}
			}, Ni.overrides = {
				scales: {
					_index_: {
						type: "category",
						offset: !0,
						grid: {
							offset: !0
						}
					},
					_value_: {
						type: "linear",
						beginAtZero: !0
					}
				}
			};
			class Hi extends Ri {
				initialize() {
					this.enableOptionSharing = !0, super.initialize()
				}
				parseObjectData(t, e, i, n) {
					const {
						xScale: o,
						yScale: s
					} = t, {
						xAxisKey: a = "x",
						yAxisKey: r = "y"
					} = this._parsing, l = [];
					let c, h, d;
					for (c = i, h = i + n; c < h; ++c) d = e[c], l.push({
						x: o.parse(A(d, a), c),
						y: s.parse(A(d, r), c),
						_custom: d && d.r && +d.r
					});
					return l
				}
				getMaxOverflow() {
					const {
						data: t,
						_parsed: e
					} = this._cachedMeta;
					let i = 0;
					for (let n = t.length - 1; n >= 0; --n) i = Math.max(i, t[n].size() / 2, e[n]._custom);
					return i > 0 && i
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						{
							xScale: i,
							yScale: n
						} = e,
						o = this.getParsed(t),
						s = i.getLabelForValue(o.x),
						a = n.getLabelForValue(o.y),
						r = o._custom;
					return {
						label: e.label,
						value: "(" + s + ", " + a + (r ? ", " + r : "") + ")"
					}
				}
				update(t) {
					const e = this._cachedMeta.data;
					this.updateElements(e, 0, e.length, t)
				}
				updateElements(t, e, i, n) {
					const o = this,
						s = "reset" === n,
						{
							iScale: a,
							vScale: r
						} = o._cachedMeta,
						l = o.resolveDataElementOptions(e, n),
						c = o.getSharedOptions(l),
						h = o.includeOptions(n, c),
						d = a.axis,
						u = r.axis;
					for (let f = e; f < e + i; f++) {
						const e = t[f],
							i = !s && o.getParsed(f),
							l = {},
							c = l[d] = s ? a.getPixelForDecimal(.5) : a.getPixelForValue(i[d]),
							g = l[u] = s ? r.getBasePixel() : r.getPixelForValue(i[u]);
						l.skip = isNaN(c) || isNaN(g), h && (l.options = o.resolveDataElementOptions(f, e.active ? "active" : n), s && (l.options.radius = 0)), o.updateElement(e, f, l, n)
					}
					o.updateSharedOptions(c, n, l)
				}
				resolveDataElementOptions(t, e) {
					const i = this.getParsed(t);
					let n = super.resolveDataElementOptions(t, e);
					n.$shared && (n = Object.assign({}, n, {
						$shared: !1
					}));
					const o = n.radius;
					return "active" !== e && (n.radius = 0), n.radius += p(i && i._custom, o), n
				}
			}
			Hi.id = "bubble", Hi.defaults = {
				datasetElementType: !1,
				dataElementType: "point",
				animations: {
					numbers: {
						type: "number",
						properties: ["x", "y", "borderWidth", "radius"]
					}
				}
			}, Hi.overrides = {
				scales: {
					x: {
						type: "linear"
					},
					y: {
						type: "linear"
					}
				},
				plugins: {
					tooltip: {
						callbacks: {
							title: () => ""
						}
					}
				}
			};
			class $i extends Ri {
				constructor(t, e) {
					super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
				}
				linkScales() {}
				parse(t, e) {
					const i = this.getDataset().data,
						n = this._cachedMeta;
					let o, s;
					for (o = t, s = t + e; o < s; ++o) n._parsed[o] = +i[o]
				}
				_getRotation() {
					return q(this.options.rotation - 90)
				}
				_getCircumference() {
					return q(this.options.circumference)
				}
				_getRotationExtents() {
					let t = F,
						e = -F;
					const i = this;
					for (let n = 0; n < i.chart.data.datasets.length; ++n)
						if (i.chart.isDatasetVisible(n)) {
							const o = i.chart.getDatasetMeta(n).controller,
								s = o._getRotation(),
								a = o._getCircumference();
							t = Math.min(t, s), e = Math.max(e, s + a)
						} return {
						rotation: t,
						circumference: e - t
					}
				}
				update(t) {
					const e = this,
						i = e.chart,
						{
							chartArea: n
						} = i,
						o = e._cachedMeta,
						s = o.data,
						a = e.getMaxBorderWidth() + e.getMaxOffset(s) + e.options.spacing,
						r = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
						l = Math.min(m(e.options.cutout, r), 1),
						c = e._getRingWeight(e.index),
						{
							circumference: h,
							rotation: d
						} = e._getRotationExtents(),
						{
							ratioX: u,
							ratioY: f,
							offsetX: g,
							offsetY: p
						} = function(t, e, i) {
							let n = 1,
								o = 1,
								s = 0,
								a = 0;
							if (e < F) {
								const r = t,
									l = r + e,
									c = Math.cos(r),
									h = Math.sin(r),
									d = Math.cos(l),
									u = Math.sin(l),
									f = (t, e, n) => et(t, r, l, !0) ? 1 : Math.max(e, e * i, n, n * i),
									g = (t, e, n) => et(t, r, l, !0) ? -1 : Math.min(e, e * i, n, n * i),
									p = f(0, c, d),
									m = f(B, h, u),
									b = g(z, c, d),
									x = g(z + B, h, u);
								n = (p - b) / 2, o = (m - x) / 2, s = -(p + b) / 2, a = -(m + x) / 2
							}
							return {
								ratioX: n,
								ratioY: o,
								offsetX: s,
								offsetY: a
							}
						}(d, h, l),
						x = (n.width - a) / u,
						_ = (n.height - a) / f,
						y = Math.max(Math.min(x, _) / 2, 0),
						v = b(e.options.radius, y),
						w = (v - Math.max(v * l, 0)) / e._getVisibleDatasetWeightTotal();
					e.offsetX = g * v, e.offsetY = p * v, o.total = e.calculateTotal(), e.outerRadius = v - w * e._getRingWeightOffset(e.index), e.innerRadius = Math.max(e.outerRadius - w * c, 0), e.updateElements(s, 0, s.length, t)
				}
				_circumference(t, e) {
					const i = this.options,
						n = this._cachedMeta,
						o = this._getCircumference();
					return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === n._parsed[t] || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F)
				}
				updateElements(t, e, i, n) {
					const o = this,
						s = "reset" === n,
						a = o.chart,
						r = a.chartArea,
						l = a.options.animation,
						c = (r.left + r.right) / 2,
						h = (r.top + r.bottom) / 2,
						d = s && l.animateScale,
						u = d ? 0 : o.innerRadius,
						f = d ? 0 : o.outerRadius,
						g = o.resolveDataElementOptions(e, n),
						p = o.getSharedOptions(g),
						m = o.includeOptions(n, p);
					let b, x = o._getRotation();
					for (b = 0; b < e; ++b) x += o._circumference(b, s);
					for (b = e; b < e + i; ++b) {
						const e = o._circumference(b, s),
							i = t[b],
							a = {
								x: c + o.offsetX,
								y: h + o.offsetY,
								startAngle: x,
								endAngle: x + e,
								circumference: e,
								outerRadius: f,
								innerRadius: u
							};
						m && (a.options = p || o.resolveDataElementOptions(b, i.active ? "active" : n)), x += e, o.updateElement(i, b, a, n)
					}
					o.updateSharedOptions(p, n, g)
				}
				calculateTotal() {
					const t = this._cachedMeta,
						e = t.data;
					let i, n = 0;
					for (i = 0; i < e.length; i++) {
						const o = t._parsed[i];
						null === o || isNaN(o) || !this.chart.getDataVisibility(i) || e[i].hidden || (n += Math.abs(o))
					}
					return n
				}
				calculateCircumference(t) {
					const e = this._cachedMeta.total;
					return e > 0 && !isNaN(t) ? F * (Math.abs(t) / e) : 0
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						i = this.chart,
						n = i.data.labels || [],
						o = si(e._parsed[t], i.options.locale);
					return {
						label: n[t] || "",
						value: o
					}
				}
				getMaxBorderWidth(t) {
					const e = this;
					let i = 0;
					const n = e.chart;
					let o, s, a, r, l;
					if (!t)
						for (o = 0, s = n.data.datasets.length; o < s; ++o)
							if (n.isDatasetVisible(o)) {
								t = (a = n.getDatasetMeta(o)).data, (r = a.controller) !== e && r.configure();
								break
							} if (!t) return 0;
					for (o = 0, s = t.length; o < s; ++o) "inner" !== (l = r.resolveDataElementOptions(o)).borderAlign && (i = Math.max(i, l.borderWidth || 0, l.hoverBorderWidth || 0));
					return i
				}
				getMaxOffset(t) {
					let e = 0;
					for (let i = 0, n = t.length; i < n; ++i) {
						const t = this.resolveDataElementOptions(i);
						e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
					}
					return e
				}
				_getRingWeightOffset(t) {
					let e = 0;
					for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
					return e
				}
				_getRingWeight(t) {
					return Math.max(p(this.chart.data.datasets[t].weight, 1), 0)
				}
				_getVisibleDatasetWeightTotal() {
					return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
				}
			}
			$i.id = "doughnut", $i.defaults = {
				datasetElementType: !1,
				dataElementType: "arc",
				animation: {
					animateRotate: !0,
					animateScale: !1
				},
				animations: {
					numbers: {
						type: "number",
						properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
					}
				},
				cutout: "50%",
				rotation: 0,
				circumference: 360,
				radius: "100%",
				spacing: 0,
				indexAxis: "r"
			}, $i.descriptors = {
				_scriptable: t => "spacing" !== t,
				_indexable: t => "spacing" !== t
			}, $i.overrides = {
				aspectRatio: 1,
				plugins: {
					legend: {
						labels: {
							generateLabels(t) {
								const e = t.data;
								if (e.labels.length && e.datasets.length) {
									const {
										labels: {
											pointStyle: i
										}
									} = t.legend.options;
									return e.labels.map((e, n) => {
										const o = t.getDatasetMeta(0).controller.getStyle(n);
										return {
											text: e,
											fillStyle: o.backgroundColor,
											strokeStyle: o.borderColor,
											lineWidth: o.borderWidth,
											pointStyle: i,
											hidden: !t.getDataVisibility(n),
											index: n
										}
									})
								}
								return []
							}
						},
						onClick(t, e, i) {
							i.chart.toggleDataVisibility(e.index), i.chart.update()
						}
					},
					tooltip: {
						callbacks: {
							title: () => "",
							label(t) {
								let e = t.label;
								const i = ": " + t.formattedValue;
								return d(e) ? (e = e.slice())[0] += i : e += i, e
							}
						}
					}
				}
			};
			class Yi extends Ri {
				initialize() {
					this.enableOptionSharing = !0, super.initialize()
				}
				update(t) {
					const e = this,
						i = e._cachedMeta,
						{
							dataset: n,
							data: o = [],
							_dataset: s
						} = i,
						a = e.chart._animationsDisabled;
					let {
						start: r,
						count: l
					} = function(t, e, i) {
						const n = e.length;
						let o = 0,
							s = n;
						if (t._sorted) {
							const {
								iScale: a,
								_parsed: r
							} = t, l = a.axis, {
								min: c,
								max: h,
								minDefined: d,
								maxDefined: u
							} = a.getUserBounds();
							d && (o = it(Math.min(be(r, a.axis, c).lo, i ? n : be(e, l, a.getPixelForValue(c)).lo), 0, n - 1)), s = u ? it(Math.max(be(r, a.axis, h).hi + 1, i ? 0 : be(e, l, a.getPixelForValue(h)).hi + 1), o, n) - o : n - o
						}
						return {
							start: o,
							count: s
						}
					}(i, o, a);
					e._drawStart = r, e._drawCount = l,
						function(t) {
							const {
								xScale: e,
								yScale: i,
								_scaleRanges: n
							} = t, o = {
								xmin: e.min,
								xmax: e.max,
								ymin: i.min,
								ymax: i.max
							};
							if (!n) return t._scaleRanges = o, !0;
							const s = n.xmin !== e.min || n.xmax !== e.max || n.ymin !== i.min || n.ymax !== i.max;
							return Object.assign(n, o), s
						}(i) && (r = 0, l = o.length), n._datasetIndex = e.index, n._decimated = !!s._decimated, n.points = o;
					const c = e.resolveDatasetElementOptions(t);
					e.options.showLine || (c.borderWidth = 0), c.segment = e.options.segment, e.updateElement(n, void 0, {
						animated: !a,
						options: c
					}, t), e.updateElements(o, r, l, t)
				}
				updateElements(t, e, i, n) {
					const o = this,
						s = "reset" === n,
						{
							iScale: a,
							vScale: r,
							_stacked: l
						} = o._cachedMeta,
						c = o.resolveDataElementOptions(e, n),
						d = o.getSharedOptions(c),
						u = o.includeOptions(n, d),
						f = a.axis,
						g = r.axis,
						p = o.options.spanGaps,
						m = U(p) ? p : Number.POSITIVE_INFINITY,
						b = o.chart._animationsDisabled || s || "none" === n;
					let x = e > 0 && o.getParsed(e - 1);
					for (let _ = e; _ < e + i; ++_) {
						const e = t[_],
							i = o.getParsed(_),
							c = b ? e : {},
							p = h(i[g]),
							y = c[f] = a.getPixelForValue(i[f], _),
							v = c[g] = s || p ? r.getBasePixel() : r.getPixelForValue(l ? o.applyStack(r, i, l) : i[g], _);
						c.skip = isNaN(y) || isNaN(v) || p, c.stop = _ > 0 && i[f] - x[f] > m, c.parsed = i, u && (c.options = d || o.resolveDataElementOptions(_, e.active ? "active" : n)), b || o.updateElement(e, _, c, n), x = i
					}
					o.updateSharedOptions(d, n, c)
				}
				getMaxOverflow() {
					const t = this._cachedMeta,
						e = t.dataset,
						i = e.options && e.options.borderWidth || 0,
						n = t.data || [];
					if (!n.length) return i;
					const o = n[0].size(this.resolveDataElementOptions(0)),
						s = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
					return Math.max(i, o, s) / 2
				}
				draw() {
					const t = this._cachedMeta;
					t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
				}
			}
			Yi.id = "line", Yi.defaults = {
				datasetElementType: "line",
				dataElementType: "point",
				showLine: !0,
				spanGaps: !1
			}, Yi.overrides = {
				scales: {
					_index_: {
						type: "category"
					},
					_value_: {
						type: "linear"
					}
				}
			};
			class Ui extends Ri {
				constructor(t, e) {
					super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
				}
				getLabelAndValue(t) {
					const e = this._cachedMeta,
						i = this.chart,
						n = i.data.labels || [],
						o = si(e._parsed[t].r, i.options.locale);
					return {
						label: n[t] || "",
						value: o
					}
				}
				update(t) {
					const e = this._cachedMeta.data;
					this._updateRadius(), this.updateElements(e, 0, e.length, t)
				}
				_updateRadius() {
					const t = this,
						e = t.chart,
						i = e.chartArea,
						n = e.options,
						o = Math.min(i.right - i.left, i.bottom - i.top),
						s = Math.max(o / 2, 0),
						a = (s - Math.max(n.cutoutPercentage ? s / 100 * n.cutoutPercentage : 1, 0)) / e.getVisibleDatasetCount();
					t.outerRadius = s - a * t.index, t.innerRadius = t.outerRadius - a
				}
				updateElements(t, e, i, n) {
					const o = this,
						s = "reset" === n,
						a = o.chart,
						r = o.getDataset(),
						l = a.options.animation,
						c = o._cachedMeta.rScale,
						h = c.xCenter,
						d = c.yCenter,
						u = c.getIndexAngle(0) - .5 * z;
					let f, g = u;
					const p = 360 / o.countVisibleElements();
					for (f = 0; f < e; ++f) g += o._computeAngle(f, n, p);
					for (f = e; f < e + i; f++) {
						const e = t[f];
						let i = g,
							m = g + o._computeAngle(f, n, p),
							b = a.getDataVisibility(f) ? c.getDistanceFromCenterForValue(r.data[f]) : 0;
						g = m, s && (l.animateScale && (b = 0), l.animateRotate && (i = m = u));
						const x = {
							x: h,
							y: d,
							innerRadius: 0,
							outerRadius: b,
							startAngle: i,
							endAngle: m,
							options: o.resolveDataElementOptions(f, e.active ? "active" : n)
						};
						o.updateElement(e, f, x, n)
					}
				}
				countVisibleElements() {
					const t = this.getDataset(),
						e = this._cachedMeta;
					let i = 0;
					return e.data.forEach((e, n) => {
						!isNaN(t.data[n]) && this.chart.getDataVisibility(n) && i++
					}), i
				}
				_computeAngle(t, e, i) {
					return this.chart.getDataVisibility(t) ? q(this.resolveDataElementOptions(t, e).angle || i) : 0
				}
			}
			Ui.id = "polarArea", Ui.defaults = {
				dataElementType: "arc",
				animation: {
					animateRotate: !0,
					animateScale: !0
				},
				animations: {
					numbers: {
						type: "number",
						properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
					}
				},
				indexAxis: "r",
				startAngle: 0
			}, Ui.overrides = {
				aspectRatio: 1,
				plugins: {
					legend: {
						labels: {
							generateLabels(t) {
								const e = t.data;
								if (e.labels.length && e.datasets.length) {
									const {
										labels: {
											pointStyle: i
										}
									} = t.legend.options;
									return e.labels.map((e, n) => {
										const o = t.getDatasetMeta(0).controller.getStyle(n);
										return {
											text: e,
											fillStyle: o.backgroundColor,
											strokeStyle: o.borderColor,
											lineWidth: o.borderWidth,
											pointStyle: i,
											hidden: !t.getDataVisibility(n),
											index: n
										}
									})
								}
								return []
							}
						},
						onClick(t, e, i) {
							i.chart.toggleDataVisibility(e.index), i.chart.update()
						}
					},
					tooltip: {
						callbacks: {
							title: () => "",
							label: t => t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
						}
					}
				},
				scales: {
					r: {
						type: "radialLinear",
						angleLines: {
							display: !1
						},
						beginAtZero: !0,
						grid: {
							circular: !0
						},
						pointLabels: {
							display: !1
						},
						startAngle: 0
					}
				}
			};
			class Xi extends $i {}
			Xi.id = "pie", Xi.defaults = {
				cutout: 0,
				rotation: 0,
				circumference: 360,
				radius: "100%"
			};
			class Ki extends Ri {
				getLabelAndValue(t) {
					const e = this._cachedMeta.vScale,
						i = this.getParsed(t);
					return {
						label: e.getLabels()[t],
						value: "" + e.getLabelForValue(i[e.axis])
					}
				}
				update(t) {
					const e = this,
						i = e._cachedMeta,
						n = i.dataset,
						o = i.data || [],
						s = i.iScale.getLabels();
					if (n.points = o, "resize" !== t) {
						const i = e.resolveDatasetElementOptions(t);
						e.options.showLine || (i.borderWidth = 0);
						const a = {
							_loop: !0,
							_fullLoop: s.length === o.length,
							options: i
						};
						e.updateElement(n, void 0, a, t)
					}
					e.updateElements(o, 0, o.length, t)
				}
				updateElements(t, e, i, n) {
					const o = this,
						s = o.getDataset(),
						a = o._cachedMeta.rScale,
						r = "reset" === n;
					for (let l = e; l < e + i; l++) {
						const e = t[l],
							i = o.resolveDataElementOptions(l, e.active ? "active" : n),
							c = a.getPointPositionForValue(l, s.data[l]),
							h = r ? a.xCenter : c.x,
							d = r ? a.yCenter : c.y,
							u = {
								x: h,
								y: d,
								angle: c.angle,
								skip: isNaN(h) || isNaN(d),
								options: i
							};
						o.updateElement(e, l, u, n)
					}
				}
			}
			Ki.id = "radar", Ki.defaults = {
				datasetElementType: "line",
				dataElementType: "point",
				indexAxis: "r",
				showLine: !0,
				elements: {
					line: {
						fill: "start"
					}
				}
			}, Ki.overrides = {
				aspectRatio: 1,
				scales: {
					r: {
						type: "radialLinear"
					}
				}
			};
			class qi extends Yi {}
			qi.id = "scatter", qi.defaults = {
				showLine: !1,
				fill: !1
			}, qi.overrides = {
				interaction: {
					mode: "point"
				},
				plugins: {
					tooltip: {
						callbacks: {
							title: () => "",
							label: t => "(" + t.label + ", " + t.formattedValue + ")"
						}
					}
				},
				scales: {
					x: {
						type: "linear"
					},
					y: {
						type: "linear"
					}
				}
			};
			var Gi = Object.freeze({
				__proto__: null,
				BarController: Ni,
				BubbleController: Hi,
				DoughnutController: $i,
				LineController: Yi,
				PolarAreaController: Ui,
				PieController: Xi,
				RadarController: Ki,
				ScatterController: qi
			});

			function Zi() {
				throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
			}
			class Qi {
				constructor(t) {
					this.options = t || {}
				}
				formats() {
					return Zi()
				}
				parse(t, e) {
					return Zi()
				}
				format(t, e) {
					return Zi()
				}
				add(t, e, i) {
					return Zi()
				}
				diff(t, e, i) {
					return Zi()
				}
				startOf(t, e, i) {
					return Zi()
				}
				endOf(t, e) {
					return Zi()
				}
			}
			Qi.override = function(t) {
				Object.assign(Qi.prototype, t)
			};
			var Ji = {
				_date: Qi
			};

			function tn(t, e) {
				return "native" in t ? {
					x: t.x,
					y: t.y
				} : qe(t, e)
			}

			function en(t, e, i, n) {
				const {
					controller: o,
					data: s,
					_sorted: a
				} = t, r = o._cachedMeta.iScale;
				if (r && e === r.axis && a && s.length) {
					const t = r._reversePixels ? xe : be;
					if (!n) return t(s, e, i);
					if (o._sharedOptions) {
						const n = s[0],
							o = "function" == typeof n.getRange && n.getRange(e);
						if (o) {
							const n = t(s, e, i - o),
								a = t(s, e, i + o);
							return {
								lo: n.lo,
								hi: a.hi
							}
						}
					}
				}
				return {
					lo: 0,
					hi: s.length - 1
				}
			}

			function nn(t, e, i, n, o) {
				const s = t.getSortedVisibleDatasetMetas(),
					a = i[e];
				for (let r = 0, l = s.length; r < l; ++r) {
					const {
						index: t,
						data: i
					} = s[r], {
						lo: l,
						hi: c
					} = en(s[r], e, a, o);
					for (let e = l; e <= c; ++e) {
						const o = i[e];
						o.skip || n(o, t, e)
					}
				}
			}

			function on(t, e, i, n) {
				const o = [];
				if (!Qt(e, t.chartArea, t._minPadding)) return o;
				return nn(t, i, e, (function(t, i, s) {
					t.inRange(e.x, e.y, n) && o.push({
						element: t,
						datasetIndex: i,
						index: s
					})
				}), !0), o
			}

			function sn(t, e, i, n, o) {
				const s = function(t) {
					const e = -1 !== t.indexOf("x"),
						i = -1 !== t.indexOf("y");
					return function(t, n) {
						const o = e ? Math.abs(t.x - n.x) : 0,
							s = i ? Math.abs(t.y - n.y) : 0;
						return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))
					}
				}(i);
				let a = Number.POSITIVE_INFINITY,
					r = [];
				if (!Qt(e, t.chartArea, t._minPadding)) return r;
				return nn(t, i, e, (function(i, l, c) {
					if (n && !i.inRange(e.x, e.y, o)) return;
					const h = i.getCenterPoint(o);
					if (!Qt(h, t.chartArea, t._minPadding) && !i.inRange(e.x, e.y, o)) return;
					const d = s(e, h);
					d < a ? (r = [{
						element: i,
						datasetIndex: l,
						index: c
					}], a = d) : d === a && r.push({
						element: i,
						datasetIndex: l,
						index: c
					})
				})), r
			}

			function an(t, e, i, n) {
				const o = tn(e, t),
					s = [],
					a = i.axis,
					r = "x" === a ? "inXRange" : "inYRange";
				let l = !1;
				return function(t, e) {
					const i = t.getSortedVisibleDatasetMetas();
					let n, o, s;
					for (let a = 0, r = i.length; a < r; ++a) {
						({
							index: n,
							data: o
						} = i[a]);
						for (let t = 0, i = o.length; t < i; ++t)(s = o[t]).skip || e(s, n, t)
					}
				}(t, (t, e, i) => {
					t[r](o[a], n) && s.push({
						element: t,
						datasetIndex: e,
						index: i
					}), t.inRange(o.x, o.y, n) && (l = !0)
				}), i.intersect && !l ? [] : s
			}
			var rn = {
				modes: {
					index(t, e, i, n) {
						const o = tn(e, t),
							s = i.axis || "x",
							a = i.intersect ? on(t, o, s, n) : sn(t, o, s, !1, n),
							r = [];
						return a.length ? (t.getSortedVisibleDatasetMetas().forEach(t => {
							const e = a[0].index,
								i = t.data[e];
							i && !i.skip && r.push({
								element: i,
								datasetIndex: t.index,
								index: e
							})
						}), r) : []
					},
					dataset(t, e, i, n) {
						const o = tn(e, t),
							s = i.axis || "xy";
						let a = i.intersect ? on(t, o, s, n) : sn(t, o, s, !1, n);
						if (a.length > 0) {
							const e = a[0].datasetIndex,
								i = t.getDatasetMeta(e).data;
							a = [];
							for (let t = 0; t < i.length; ++t) a.push({
								element: i[t],
								datasetIndex: e,
								index: t
							})
						}
						return a
					},
					point: (t, e, i, n) => on(t, tn(e, t), i.axis || "xy", n),
					nearest: (t, e, i, n) => sn(t, tn(e, t), i.axis || "xy", i.intersect, n),
					x: (t, e, i, n) => (i.axis = "x", an(t, e, i, n)),
					y: (t, e, i, n) => (i.axis = "y", an(t, e, i, n))
				}
			};
			const ln = ["left", "top", "right", "bottom"];

			function cn(t, e) {
				return t.filter(t => t.pos === e)
			}

			function hn(t, e) {
				return t.filter(t => -1 === ln.indexOf(t.pos) && t.box.axis === e)
			}

			function dn(t, e) {
				return t.sort((t, i) => {
					const n = e ? i : t,
						o = e ? t : i;
					return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
				})
			}

			function un(t, e) {
				const i = function(t) {
						const e = {};
						for (const i of t) {
							const {
								stack: t,
								pos: n,
								stackWeight: o
							} = i;
							if (!t || !ln.includes(n)) continue;
							const s = e[t] || (e[t] = {
								count: 0,
								placed: 0,
								weight: 0,
								size: 0
							});
							s.count++, s.weight += o
						}
						return e
					}(t),
					{
						vBoxMaxWidth: n,
						hBoxMaxHeight: o
					} = e;
				let s, a, r;
				for (s = 0, a = t.length; s < a; ++s) {
					r = t[s];
					const {
						fullSize: a
					} = r.box, l = i[r.stack], c = l && r.stackWeight / l.weight;
					r.horizontal ? (r.width = c ? c * n : a && e.availableWidth, r.height = o) : (r.width = n, r.height = c ? c * o : a && e.availableHeight)
				}
				return i
			}

			function fn(t, e, i, n) {
				return Math.max(t[i], e[i]) + Math.max(t[n], e[n])
			}

			function gn(t, e) {
				t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
			}

			function pn(t, e, i, n) {
				const {
					pos: o,
					box: s
				} = i, a = t.maxPadding;
				if (!u(o)) {
					i.size && (t[o] -= i.size);
					const e = n[i.stack] || {
						size: 0,
						count: 1
					};
					e.size = Math.max(e.size, i.horizontal ? s.height : s.width), i.size = e.size / e.count, t[o] += i.size
				}
				s.getPadding && gn(a, s.getPadding());
				const r = Math.max(0, e.outerWidth - fn(a, t, "left", "right")),
					l = Math.max(0, e.outerHeight - fn(a, t, "top", "bottom")),
					c = r !== t.w,
					h = l !== t.h;
				return t.w = r, t.h = l, i.horizontal ? {
					same: c,
					other: h
				} : {
					same: h,
					other: c
				}
			}

			function mn(t, e) {
				const i = e.maxPadding;

				function n(t) {
					const n = {
						left: 0,
						top: 0,
						right: 0,
						bottom: 0
					};
					return t.forEach(t => {
						n[t] = Math.max(e[t], i[t])
					}), n
				}
				return n(t ? ["left", "right"] : ["top", "bottom"])
			}

			function bn(t, e, i, n) {
				const o = [];
				let s, a, r, l, c, h;
				for (s = 0, a = t.length, c = 0; s < a; ++s) {
					(l = (r = t[s]).box).update(r.width || e.w, r.height || e.h, mn(r.horizontal, e));
					const {
						same: a,
						other: d
					} = pn(e, i, r, n);
					c |= a && o.length, h = h || d, l.fullSize || o.push(r)
				}
				return c && bn(o, e, i, n) || h
			}

			function xn(t, e, i, n, o) {
				t.top = i, t.left = e, t.right = e + n, t.bottom = i + o, t.width = n, t.height = o
			}

			function _n(t, e, i, n) {
				const o = i.padding;
				let {
					x: s,
					y: a
				} = e;
				for (const r of t) {
					const t = r.box,
						l = n[r.stack] || {
							count: 1,
							placed: 0,
							weight: 1
						},
						c = r.stackWeight / l.weight || 1;
					if (r.horizontal) {
						const n = e.w * c,
							s = l.size || t.height;
						L(l.start) && (a = l.start), t.fullSize ? xn(t, o.left, a, i.outerWidth - o.right - o.left, s) : xn(t, e.left + l.placed, a, n, s), l.start = a, l.placed += n, a = t.bottom
					} else {
						const n = e.h * c,
							a = l.size || t.width;
						L(l.start) && (s = l.start), t.fullSize ? xn(t, s, o.top, a, i.outerHeight - o.bottom - o.top) : xn(t, s, e.top + l.placed, a, n), l.start = s, l.placed += n, s = t.right
					}
				}
				e.x = s, e.y = a
			}
			Ut.set("layout", {
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}
			});
			var yn = {
				addBox(t, e) {
					t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
						return [{
							z: 0,
							draw(t) {
								e.draw(t)
							}
						}]
					}, t.boxes.push(e)
				},
				removeBox(t, e) {
					const i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
				},
				configure(t, e, i) {
					e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight
				},
				update(t, e, i, n) {
					if (!t) return;
					const o = fe(t.options.layout.padding),
						s = Math.max(e - o.width, 0),
						a = Math.max(i - o.height, 0),
						r = function(t) {
							const e = function(t) {
									const e = [];
									let i, n, o, s, a, r;
									for (i = 0, n = (t || []).length; i < n; ++i) o = t[i], ({
										position: s,
										options: {
											stack: a,
											stackWeight: r = 1
										}
									} = o), e.push({
										index: i,
										box: o,
										pos: s,
										horizontal: o.isHorizontal(),
										weight: o.weight,
										stack: a && s + a,
										stackWeight: r
									});
									return e
								}(t),
								i = dn(e.filter(t => t.box.fullSize), !0),
								n = dn(cn(e, "left"), !0),
								o = dn(cn(e, "right")),
								s = dn(cn(e, "top"), !0),
								a = dn(cn(e, "bottom")),
								r = hn(e, "x"),
								l = hn(e, "y");
							return {
								fullSize: i,
								leftAndTop: n.concat(s),
								rightAndBottom: o.concat(l).concat(a).concat(r),
								chartArea: cn(e, "chartArea"),
								vertical: n.concat(o).concat(l),
								horizontal: s.concat(a).concat(r)
							}
						}(t.boxes),
						l = r.vertical,
						c = r.horizontal;
					_(t.boxes, t => {
						"function" == typeof t.beforeLayout && t.beforeLayout()
					});
					const h = l.reduce((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1, 0) || 1,
						d = Object.freeze({
							outerWidth: e,
							outerHeight: i,
							padding: o,
							availableWidth: s,
							availableHeight: a,
							vBoxMaxWidth: s / 2 / h,
							hBoxMaxHeight: a / 2
						}),
						u = Object.assign({}, o);
					gn(u, fe(n));
					const f = Object.assign({
							maxPadding: u,
							w: s,
							h: a,
							x: o.left,
							y: o.top
						}, o),
						g = un(l.concat(c), d);
					bn(r.fullSize, f, d, g), bn(l, f, d, g), bn(c, f, d, g) && bn(l, f, d, g),
						function(t) {
							const e = t.maxPadding;

							function i(i) {
								const n = Math.max(e[i] - t[i], 0);
								return t[i] += n, n
							}
							t.y += i("top"), t.x += i("left"), i("right"), i("bottom")
						}(f), _n(r.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, _n(r.rightAndBottom, f, d, g), t.chartArea = {
							left: f.left,
							top: f.top,
							right: f.left + f.w,
							bottom: f.top + f.h,
							height: f.h,
							width: f.w
						}, _(r.chartArea, e => {
							const i = e.box;
							Object.assign(i, t.chartArea), i.update(f.w, f.h)
						})
				}
			};
			class vn {
				acquireContext(t, e) {}
				releaseContext(t) {
					return !1
				}
				addEventListener(t, e, i) {}
				removeEventListener(t, e, i) {}
				getDevicePixelRatio() {
					return 1
				}
				getMaximumSize(t, e, i, n) {
					return e = Math.max(0, e || t.width), i = i || t.height, {
						width: e,
						height: Math.max(0, n ? Math.floor(e / n) : i)
					}
				}
				isAttached(t) {
					return !0
				}
			}
			class wn extends vn {
				acquireContext(t) {
					return t && t.getContext && t.getContext("2d") || null
				}
			}
			const Mn = "$chartjs",
				kn = {
					touchstart: "mousedown",
					touchmove: "mousemove",
					touchend: "mouseup",
					pointerenter: "mouseenter",
					pointerdown: "mousedown",
					pointermove: "mousemove",
					pointerup: "mouseup",
					pointerleave: "mouseout",
					pointerout: "mouseout"
				},
				Sn = t => null === t || "" === t;
			const Pn = !!Je && {
				passive: !0
			};

			function On(t, e, i) {
				t.canvas.removeEventListener(e, i, Pn)
			}

			function Dn(t, e, i) {
				const n = t.canvas,
					o = n && He(n) || n,
					s = new MutationObserver(t => {
						const e = He(o);
						t.forEach(t => {
							for (let n = 0; n < t.addedNodes.length; n++) {
								const s = t.addedNodes[n];
								s !== o && s !== e || i(t.target)
							}
						})
					});
				return s.observe(document, {
					childList: !0,
					subtree: !0
				}), s
			}

			function Cn(t, e, i) {
				const n = t.canvas,
					o = n && He(n);
				if (!o) return;
				const s = new MutationObserver(t => {
					t.forEach(t => {
						for (let e = 0; e < t.removedNodes.length; e++)
							if (t.removedNodes[e] === n) {
								i();
								break
							}
					})
				});
				return s.observe(o, {
					childList: !0
				}), s
			}
			const An = new Map;
			let Tn = 0;

			function Ln() {
				const t = window.devicePixelRatio;
				t !== Tn && (Tn = t, An.forEach((e, i) => {
					i.currentDevicePixelRatio !== t && e()
				}))
			}

			function En(t, e, i) {
				const n = t.canvas,
					s = n && He(n);
				if (!s) return;
				const a = o((t, e) => {
						const n = s.clientWidth;
						i(t, e), n < s.clientWidth && i()
					}, window),
					r = new ResizeObserver(t => {
						const e = t[0],
							i = e.contentRect.width,
							n = e.contentRect.height;
						0 === i && 0 === n || a(i, n)
					});
				return r.observe(s),
					function(t, e) {
						An.size || window.addEventListener("resize", Ln), An.set(t, e)
					}(t, a), r
			}

			function Rn(t, e, i) {
				i && i.disconnect(), "resize" === e && function(t) {
					An.delete(t), An.size || window.removeEventListener("resize", Ln)
				}(t)
			}

			function zn(t, e, i) {
				const n = t.canvas,
					s = o(e => {
						null !== t.ctx && i(function(t, e) {
							const i = kn[t.type] || t.type,
								{
									x: n,
									y: o
								} = qe(t, e);
							return {
								type: i,
								chart: e,
								native: t,
								x: void 0 !== n ? n : null,
								y: void 0 !== o ? o : null
							}
						}(e, t))
					}, t, t => {
						const e = t[0];
						return [e, e.offsetX, e.offsetY]
					});
				return function(t, e, i) {
					t.addEventListener(e, i, Pn)
				}(n, e, s), s
			}
			class Fn extends vn {
				acquireContext(t, e) {
					const i = t && t.getContext && t.getContext("2d");
					return i && i.canvas === t ? (function(t, e) {
						const i = t.style,
							n = t.getAttribute("height"),
							o = t.getAttribute("width");
						if (t[Mn] = {
								initial: {
									height: n,
									width: o,
									style: {
										display: i.display,
										height: i.height,
										width: i.width
									}
								}
							}, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", Sn(o)) {
							const e = ti(t, "width");
							void 0 !== e && (t.width = e)
						}
						if (Sn(n))
							if ("" === t.style.height) t.height = t.width / (e || 2);
							else {
								const e = ti(t, "height");
								void 0 !== e && (t.height = e)
							}
					}(t, e), i) : null
				}
				releaseContext(t) {
					const e = t.canvas;
					if (!e[Mn]) return !1;
					const i = e[Mn].initial;
					["height", "width"].forEach(t => {
						const n = i[t];
						h(n) ? e.removeAttribute(t) : e.setAttribute(t, n)
					});
					const n = i.style || {};
					return Object.keys(n).forEach(t => {
						e.style[t] = n[t]
					}), e.width = e.width, delete e[Mn], !0
				}
				addEventListener(t, e, i) {
					this.removeEventListener(t, e);
					const n = t.$proxies || (t.$proxies = {}),
						o = {
							attach: Dn,
							detach: Cn,
							resize: En
						} [e] || zn;
					n[e] = o(t, e, i)
				}
				removeEventListener(t, e) {
					const i = t.$proxies || (t.$proxies = {}),
						n = i[e];
					n && (({
						attach: Rn,
						detach: Rn,
						resize: Rn
					} [e] || On)(t, e, n), i[e] = void 0)
				}
				getDevicePixelRatio() {
					return window.devicePixelRatio
				}
				getMaximumSize(t, e, i, n) {
					return Ze(t, e, i, n)
				}
				isAttached(t) {
					const e = He(t);
					return !(!e || !e.isConnected)
				}
			}
			class In {
				constructor() {
					this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
				}
				tooltipPosition(t) {
					const {
						x: e,
						y: i
					} = this.getProps(["x", "y"], t);
					return {
						x: e,
						y: i
					}
				}
				hasValue() {
					return U(this.x) && U(this.y)
				}
				getProps(t, e) {
					const i = this,
						n = this.$animations;
					if (!e || !n) return i;
					const o = {};
					return t.forEach(t => {
						o[t] = n[t] && n[t].active() ? n[t]._to : i[t]
					}), o
				}
			}
			In.defaults = {}, In.defaultRoutes = void 0;
			const Vn = {
				values: t => d(t) ? t : "" + t,
				numeric(t, e, i) {
					if (0 === t) return "0";
					const n = this.chart.options.locale;
					let o, s = t;
					if (i.length > 1) {
						const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
						(e < 1e-4 || e > 1e15) && (o = "scientific"), s = function(t, e) {
							let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
							Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
							return i
						}(t, i)
					}
					const a = H(Math.abs(s)),
						r = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
						l = {
							notation: o,
							minimumFractionDigits: r,
							maximumFractionDigits: r
						};
					return Object.assign(l, this.options.ticks.format), si(t, n, l)
				},
				logarithmic(t, e, i) {
					if (0 === t) return "0";
					const n = t / Math.pow(10, Math.floor(H(t)));
					return 1 === n || 2 === n || 5 === n ? Vn.numeric.call(this, t, e, i) : ""
				}
			};
			var jn = {
				formatters: Vn
			};

			function Bn(t, e) {
				const i = t.options.ticks,
					n = i.maxTicksLimit || function(t) {
						const e = t.options.offset,
							i = t._tickSize(),
							n = t._length / i + (e ? 0 : 1),
							o = t._maxLength / i;
						return Math.floor(Math.min(n, o))
					}(t),
					o = i.major.enabled ? function(t) {
						const e = [];
						let i, n;
						for (i = 0, n = t.length; i < n; i++) t[i].major && e.push(i);
						return e
					}(e) : [],
					s = o.length,
					a = o[0],
					r = o[s - 1],
					l = [];
				if (s > n) return function(t, e, i, n) {
					let o, s = 0,
						a = i[0];
					for (n = Math.ceil(n), o = 0; o < t.length; o++) o === a && (e.push(t[o]), a = i[++s * n])
				}(e, l, o, s / n), l;
				const c = function(t, e, i) {
					const n = function(t) {
							const e = t.length;
							let i, n;
							if (e < 2) return !1;
							for (n = t[0], i = 1; i < e; ++i)
								if (t[i] - t[i - 1] !== n) return !1;
							return n
						}(t),
						o = e.length / i;
					if (!n) return Math.max(o, 1);
					const s = function(t) {
						const e = [],
							i = Math.sqrt(t);
						let n;
						for (n = 1; n < i; n++) t % n == 0 && (e.push(n), e.push(t / n));
						return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e
					}(n);
					for (let a = 0, r = s.length - 1; a < r; a++) {
						const t = s[a];
						if (t > o) return t
					}
					return Math.max(o, 1)
				}(o, e, n);
				if (s > 0) {
					let t, i;
					const n = s > 1 ? Math.round((r - a) / (s - 1)) : null;
					for (Wn(e, l, c, h(n) ? 0 : a - n, a), t = 0, i = s - 1; t < i; t++) Wn(e, l, c, o[t], o[t + 1]);
					return Wn(e, l, c, r, h(n) ? e.length : r + n), l
				}
				return Wn(e, l, c), l
			}

			function Wn(t, e, i, n, o) {
				const s = p(n, 0),
					a = Math.min(p(o, t.length), t.length);
				let r, l, c, h = 0;
				for (i = Math.ceil(i), o && (i = (r = o - n) / Math.floor(r / i)), c = s; c < 0;) h++, c = Math.round(s + h * i);
				for (l = Math.max(s, 0); l < a; l++) l === c && (e.push(t[l]), h++, c = Math.round(s + h * i))
			}
			Ut.set("scale", {
				display: !0,
				offset: !1,
				reverse: !1,
				beginAtZero: !1,
				bounds: "ticks",
				grace: 0,
				grid: {
					display: !0,
					lineWidth: 1,
					drawBorder: !0,
					drawOnChartArea: !0,
					drawTicks: !0,
					tickLength: 8,
					tickWidth: (t, e) => e.lineWidth,
					tickColor: (t, e) => e.color,
					offset: !1,
					borderDash: [],
					borderDashOffset: 0,
					borderWidth: 1
				},
				title: {
					display: !1,
					text: "",
					padding: {
						top: 4,
						bottom: 4
					}
				},
				ticks: {
					minRotation: 0,
					maxRotation: 50,
					mirror: !1,
					textStrokeWidth: 0,
					textStrokeColor: "",
					padding: 3,
					display: !0,
					autoSkip: !0,
					autoSkipPadding: 3,
					labelOffset: 0,
					callback: jn.formatters.values,
					minor: {},
					major: {},
					align: "center",
					crossAlign: "near",
					showLabelBackdrop: !1,
					backdropColor: "rgba(255, 255, 255, 0.75)",
					backdropPadding: 2
				}
			}), Ut.route("scale.ticks", "color", "", "color"), Ut.route("scale.grid", "color", "", "borderColor"), Ut.route("scale.grid", "borderColor", "", "borderColor"), Ut.route("scale.title", "color", "", "color"), Ut.describe("scale", {
				_fallback: !1,
				_scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
				_indexable: t => "borderDash" !== t && "tickBorderDash" !== t
			}), Ut.describe("scales", {
				_fallback: "scale"
			}), Ut.describe("scale.ticks", {
				_scriptable: t => "backdropPadding" !== t && "callback" !== t,
				_indexable: t => "backdropPadding" !== t
			});
			const Nn = t => "left" === t ? "right" : "right" === t ? "left" : t,
				Hn = (t, e, i) => "top" === e || "left" === e ? t[e] + i : t[e] - i;

			function $n(t, e) {
				const i = [],
					n = t.length / e,
					o = t.length;
				let s = 0;
				for (; s < o; s += n) i.push(t[Math.floor(s)]);
				return i
			}

			function Yn(t, e, i) {
				const n = t.ticks.length,
					o = Math.min(e, n - 1),
					s = t._startPixel,
					a = t._endPixel;
				let r, l = t.getPixelForTick(o);
				if (!(i && (r = 1 === n ? Math.max(l - s, a - l) : 0 === e ? (t.getPixelForTick(1) - l) / 2 : (l - t.getPixelForTick(o - 1)) / 2, (l += o < e ? r : -r) < s - 1e-6 || l > a + 1e-6))) return l
			}

			function Un(t) {
				return t.drawTicks ? t.tickLength : 0
			}

			function Xn(t, e) {
				if (!t.display) return 0;
				const i = ge(t.font, e),
					n = fe(t.padding);
				return (d(t.text) ? t.text.length : 1) * i.lineHeight + n.height
			}

			function Kn(t, e, i) {
				let n = s(t);
				return (i && "right" !== e || !i && "right" === e) && (n = Nn(n)), n
			}
			class qn extends In {
				constructor(t) {
					super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
				}
				init(t) {
					const e = this;
					e.options = t.setContext(e.getContext()), e.axis = t.axis, e._userMin = e.parse(t.min), e._userMax = e.parse(t.max), e._suggestedMin = e.parse(t.suggestedMin), e._suggestedMax = e.parse(t.suggestedMax)
				}
				parse(t, e) {
					return t
				}
				getUserBounds() {
					let {
						_userMin: t,
						_userMax: e,
						_suggestedMin: i,
						_suggestedMax: n
					} = this;
					return t = g(t, Number.POSITIVE_INFINITY), e = g(e, Number.NEGATIVE_INFINITY), i = g(i, Number.POSITIVE_INFINITY), n = g(n, Number.NEGATIVE_INFINITY), {
						min: g(t, i),
						max: g(e, n),
						minDefined: f(t),
						maxDefined: f(e)
					}
				}
				getMinMax(t) {
					const e = this;
					let i, {
						min: n,
						max: o,
						minDefined: s,
						maxDefined: a
					} = e.getUserBounds();
					if (s && a) return {
						min: n,
						max: o
					};
					const r = e.getMatchingVisibleMetas();
					for (let l = 0, c = r.length; l < c; ++l) i = r[l].controller.getMinMax(e, t), s || (n = Math.min(n, i.min)), a || (o = Math.max(o, i.max));
					return {
						min: g(n, g(o, n)),
						max: g(o, g(n, o))
					}
				}
				getPadding() {
					return {
						left: this.paddingLeft || 0,
						top: this.paddingTop || 0,
						right: this.paddingRight || 0,
						bottom: this.paddingBottom || 0
					}
				}
				getTicks() {
					return this.ticks
				}
				getLabels() {
					const t = this.chart.data;
					return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
				}
				beforeLayout() {
					this._cache = {}, this._dataLimitsCached = !1
				}
				beforeUpdate() {
					x(this.options.beforeUpdate, [this])
				}
				update(t, e, i) {
					const n = this,
						o = n.options.ticks,
						s = o.sampleSize;
					n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n._margins = i = Object.assign({
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					}, i), n.ticks = null, n._labelSizes = null, n._gridLineItems = null, n._labelItems = null, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n._maxLength = n.isHorizontal() ? n.width + i.left + i.right : n.height + i.top + i.bottom, n._dataLimitsCached || (n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n._range = function(t, e) {
						const {
							min: i,
							max: n
						} = t;
						return {
							min: i - Math.abs(b(e, i)),
							max: n + b(e, n)
						}
					}(n, n.options.grace), n._dataLimitsCached = !0), n.beforeBuildTicks(), n.ticks = n.buildTicks() || [], n.afterBuildTicks();
					const a = s < n.ticks.length;
					n._convertTicksToLabels(a ? $n(n.ticks, s) : n.ticks), n.configure(), n.beforeCalculateLabelRotation(), n.calculateLabelRotation(), n.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (n.ticks = Bn(n, n.ticks), n._labelSizes = null), a && n._convertTicksToLabels(n.ticks), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate()
				}
				configure() {
					const t = this;
					let e, i, n = t.options.reverse;
					t.isHorizontal() ? (e = t.left, i = t.right) : (e = t.top, i = t.bottom, n = !n), t._startPixel = e, t._endPixel = i, t._reversePixels = n, t._length = i - e, t._alignToPixels = t.options.alignToPixels
				}
				afterUpdate() {
					x(this.options.afterUpdate, [this])
				}
				beforeSetDimensions() {
					x(this.options.beforeSetDimensions, [this])
				}
				setDimensions() {
					const t = this;
					t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
				}
				afterSetDimensions() {
					x(this.options.afterSetDimensions, [this])
				}
				_callHooks(t) {
					this.chart.notifyPlugins(t, this.getContext()), x(this.options[t], [this])
				}
				beforeDataLimits() {
					this._callHooks("beforeDataLimits")
				}
				determineDataLimits() {}
				afterDataLimits() {
					this._callHooks("afterDataLimits")
				}
				beforeBuildTicks() {
					this._callHooks("beforeBuildTicks")
				}
				buildTicks() {
					return []
				}
				afterBuildTicks() {
					this._callHooks("afterBuildTicks")
				}
				beforeTickToLabelConversion() {
					x(this.options.beforeTickToLabelConversion, [this])
				}
				generateTickLabels(t) {
					const e = this,
						i = e.options.ticks;
					let n, o, s;
					for (n = 0, o = t.length; n < o; n++)(s = t[n]).label = x(i.callback, [s.value, n, t], e)
				}
				afterTickToLabelConversion() {
					x(this.options.afterTickToLabelConversion, [this])
				}
				beforeCalculateLabelRotation() {
					x(this.options.beforeCalculateLabelRotation, [this])
				}
				calculateLabelRotation() {
					const t = this,
						e = t.options,
						i = e.ticks,
						n = t.ticks.length,
						o = i.minRotation || 0,
						s = i.maxRotation;
					let a, r, l, c = o;
					if (!t._isVisible() || !i.display || o >= s || n <= 1 || !t.isHorizontal()) return void(t.labelRotation = o);
					const h = t._getLabelSizes(),
						d = h.widest.width,
						u = h.highest.height,
						f = it(t.chart.width - d, 0, t.maxWidth);
					d + 6 > (a = e.offset ? t.maxWidth / n : f / (n - 1)) && (a = f / (n - (e.offset ? .5 : 1)), r = t.maxHeight - Un(e.grid) - i.padding - Xn(e.title, t.chart.options.font), l = Math.sqrt(d * d + u * u), c = G(Math.min(Math.asin(it((h.highest.height + 6) / a, -1, 1)), Math.asin(it(r / l, -1, 1)) - Math.asin(it(u / l, -1, 1)))), c = Math.max(o, Math.min(s, c))), t.labelRotation = c
				}
				afterCalculateLabelRotation() {
					x(this.options.afterCalculateLabelRotation, [this])
				}
				beforeFit() {
					x(this.options.beforeFit, [this])
				}
				fit() {
					const t = this,
						e = {
							width: 0,
							height: 0
						},
						{
							chart: i,
							options: {
								ticks: n,
								title: o,
								grid: s
							}
						} = t,
						a = t._isVisible(),
						r = t.isHorizontal();
					if (a) {
						const a = Xn(o, i.options.font);
						if (r ? (e.width = t.maxWidth, e.height = Un(s) + a) : (e.height = t.maxHeight, e.width = Un(s) + a), n.display && t.ticks.length) {
							const {
								first: i,
								last: o,
								widest: s,
								highest: a
							} = t._getLabelSizes(), l = 2 * n.padding, c = q(t.labelRotation), h = Math.cos(c), d = Math.sin(c);
							if (r) {
								const i = n.mirror ? 0 : d * s.width + h * a.height;
								e.height = Math.min(t.maxHeight, e.height + i + l)
							} else {
								const i = n.mirror ? 0 : h * s.width + d * a.height;
								e.width = Math.min(t.maxWidth, e.width + i + l)
							}
							t._calculatePadding(i, o, d, h)
						}
					}
					t._handleMargins(), r ? (t.width = t._length = i.width - t._margins.left - t._margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = i.height - t._margins.top - t._margins.bottom)
				}
				_calculatePadding(t, e, i, n) {
					const o = this,
						{
							ticks: {
								align: s,
								padding: a
							},
							position: r
						} = o.options,
						l = 0 !== o.labelRotation,
						c = "top" !== r && "x" === o.axis;
					if (o.isHorizontal()) {
						const r = o.getPixelForTick(0) - o.left,
							h = o.right - o.getPixelForTick(o.ticks.length - 1);
						let d = 0,
							u = 0;
						l ? c ? (d = n * t.width, u = i * e.height) : (d = i * t.height, u = n * e.width) : "start" === s ? u = e.width : "end" === s ? d = t.width : (d = t.width / 2, u = e.width / 2), o.paddingLeft = Math.max((d - r + a) * o.width / (o.width - r), 0), o.paddingRight = Math.max((u - h + a) * o.width / (o.width - h), 0)
					} else {
						let i = e.height / 2,
							n = t.height / 2;
						"start" === s ? (i = 0, n = t.height) : "end" === s && (i = e.height, n = 0), o.paddingTop = i + a, o.paddingBottom = n + a
					}
				}
				_handleMargins() {
					const t = this;
					t._margins && (t._margins.left = Math.max(t.paddingLeft, t._margins.left), t._margins.top = Math.max(t.paddingTop, t._margins.top), t._margins.right = Math.max(t.paddingRight, t._margins.right), t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom))
				}
				afterFit() {
					x(this.options.afterFit, [this])
				}
				isHorizontal() {
					const {
						axis: t,
						position: e
					} = this.options;
					return "top" === e || "bottom" === e || "x" === t
				}
				isFullSize() {
					return this.options.fullSize
				}
				_convertTicksToLabels(t) {
					let e, i;
					for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) h(t[e].label) && (t.splice(e, 1), i--, e--);
					this.afterTickToLabelConversion()
				}
				_getLabelSizes() {
					const t = this;
					let e = t._labelSizes;
					if (!e) {
						const i = t.options.ticks.sampleSize;
						let n = t.ticks;
						i < n.length && (n = $n(n, i)), t._labelSizes = e = t._computeLabelSizes(n, n.length)
					}
					return e
				}
				_computeLabelSizes(t, e) {
					const {
						ctx: i,
						_longestTextCache: n
					} = this, o = [], s = [];
					let a, r, l, c, u, f, g, p, m, b, x, y = 0,
						v = 0;
					for (a = 0; a < e; ++a) {
						if (c = t[a].label, u = this._resolveTickFontOptions(a), i.font = f = u.string, g = n[f] = n[f] || {
								data: {},
								gc: []
							}, p = u.lineHeight, m = b = 0, h(c) || d(c)) {
							if (d(c))
								for (r = 0, l = c.length; r < l; ++r) h(x = c[r]) || d(x) || (m = Xt(i, g.data, g.gc, m, x), b += p)
						} else m = Xt(i, g.data, g.gc, m, c), b = p;
						o.push(m), s.push(b), y = Math.max(m, y), v = Math.max(b, v)
					}! function(t, e) {
						_(t, t => {
							const i = t.gc,
								n = i.length / 2;
							let o;
							if (n > e) {
								for (o = 0; o < n; ++o) delete t.data[i[o]];
								i.splice(0, n)
							}
						})
					}(n, e);
					const w = o.indexOf(y),
						M = s.indexOf(v),
						k = t => ({
							width: o[t] || 0,
							height: s[t] || 0
						});
					return {
						first: k(0),
						last: k(e - 1),
						widest: k(w),
						highest: k(M),
						widths: o,
						heights: s
					}
				}
				getLabelForValue(t) {
					return t
				}
				getPixelForValue(t, e) {
					return NaN
				}
				getValueForPixel(t) {}
				getPixelForTick(t) {
					const e = this.ticks;
					return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
				}
				getPixelForDecimal(t) {
					const e = this;
					e._reversePixels && (t = 1 - t);
					const i = e._startPixel + t * e._length;
					return it(e._alignToPixels ? qt(e.chart, i, 0) : i, -32768, 32767)
				}
				getDecimalForPixel(t) {
					const e = (t - this._startPixel) / this._length;
					return this._reversePixels ? 1 - e : e
				}
				getBasePixel() {
					return this.getPixelForValue(this.getBaseValue())
				}
				getBaseValue() {
					const {
						min: t,
						max: e
					} = this;
					return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
				}
				getContext(t) {
					const e = this,
						i = e.ticks || [];
					if (t >= 0 && t < i.length) {
						const n = i[t];
						return n.$context || (n.$context = function(t, e, i) {
							return Object.assign(Object.create(t), {
								tick: i,
								index: e,
								type: "tick"
							})
						}(e.getContext(), t, n))
					}
					return e.$context || (e.$context = (n = e.chart.getContext(), o = e, Object.assign(Object.create(n), {
						scale: o,
						type: "scale"
					})));
					var n, o
				}
				_tickSize() {
					const t = this.options.ticks,
						e = q(this.labelRotation),
						i = Math.abs(Math.cos(e)),
						n = Math.abs(Math.sin(e)),
						o = this._getLabelSizes(),
						s = t.autoSkipPadding || 0,
						a = o ? o.widest.width + s : 0,
						r = o ? o.highest.height + s : 0;
					return this.isHorizontal() ? r * i > a * n ? a / i : r / n : r * n < a * i ? r / i : a / n
				}
				_isVisible() {
					const t = this.options.display;
					return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
				}
				_computeGridLineItems(t) {
					const e = this,
						i = e.axis,
						n = e.chart,
						o = e.options,
						{
							grid: s,
							position: a
						} = o,
						r = s.offset,
						l = e.isHorizontal(),
						c = e.ticks.length + (r ? 1 : 0),
						h = Un(s),
						d = [],
						f = s.setContext(e.getContext()),
						g = f.drawBorder ? f.borderWidth : 0,
						m = g / 2,
						b = function(t) {
							return qt(n, t, g)
						};
					let x, _, y, v, w, M, k, S, P, O, D, C;
					if ("top" === a) x = b(e.bottom), M = e.bottom - h, S = x - m, O = b(t.top) + m, C = t.bottom;
					else if ("bottom" === a) x = b(e.top), O = t.top, C = b(t.bottom) - m, M = x + m, S = e.top + h;
					else if ("left" === a) x = b(e.right), w = e.right - h, k = x - m, P = b(t.left) + m, D = t.right;
					else if ("right" === a) x = b(e.left), P = t.left, D = b(t.right) - m, w = x + m, k = e.left + h;
					else if ("x" === i) {
						if ("center" === a) x = b((t.top + t.bottom) / 2 + .5);
						else if (u(a)) {
							const t = Object.keys(a)[0],
								i = a[t];
							x = b(e.chart.scales[t].getPixelForValue(i))
						}
						O = t.top, C = t.bottom, S = (M = x + m) + h
					} else if ("y" === i) {
						if ("center" === a) x = b((t.left + t.right) / 2);
						else if (u(a)) {
							const t = Object.keys(a)[0],
								i = a[t];
							x = b(e.chart.scales[t].getPixelForValue(i))
						}
						k = (w = x - m) - h, P = t.left, D = t.right
					}
					const A = p(o.ticks.maxTicksLimit, c),
						T = Math.max(1, Math.ceil(c / A));
					for (_ = 0; _ < c; _ += T) {
						const t = s.setContext(e.getContext(_)),
							i = t.lineWidth,
							o = t.color,
							a = s.borderDash || [],
							c = t.borderDashOffset,
							h = t.tickWidth,
							u = t.tickColor,
							f = t.tickBorderDash || [],
							g = t.tickBorderDashOffset;
						void 0 !== (y = Yn(e, _, r)) && (v = qt(n, y, i), l ? w = k = P = D = v : M = S = O = C = v, d.push({
							tx1: w,
							ty1: M,
							tx2: k,
							ty2: S,
							x1: P,
							y1: O,
							x2: D,
							y2: C,
							width: i,
							color: o,
							borderDash: a,
							borderDashOffset: c,
							tickWidth: h,
							tickColor: u,
							tickBorderDash: f,
							tickBorderDashOffset: g
						}))
					}
					return e._ticksLength = c, e._borderValue = x, d
				}
				_computeLabelItems(t) {
					const e = this,
						i = e.axis,
						n = e.options,
						{
							position: o,
							ticks: s
						} = n,
						a = e.isHorizontal(),
						r = e.ticks,
						{
							align: l,
							crossAlign: c,
							padding: h,
							mirror: f
						} = s,
						g = Un(n.grid),
						p = g + h,
						m = f ? -h : p,
						b = -q(e.labelRotation),
						x = [];
					let _, y, v, w, M, k, S, P, O, D, C, A, T = "middle";
					if ("top" === o) k = e.bottom - m, S = e._getXAxisLabelAlignment();
					else if ("bottom" === o) k = e.top + m, S = e._getXAxisLabelAlignment();
					else if ("left" === o) {
						const t = e._getYAxisLabelAlignment(g);
						S = t.textAlign, M = t.x
					} else if ("right" === o) {
						const t = e._getYAxisLabelAlignment(g);
						S = t.textAlign, M = t.x
					} else if ("x" === i) {
						if ("center" === o) k = (t.top + t.bottom) / 2 + p;
						else if (u(o)) {
							const t = Object.keys(o)[0],
								i = o[t];
							k = e.chart.scales[t].getPixelForValue(i) + p
						}
						S = e._getXAxisLabelAlignment()
					} else if ("y" === i) {
						if ("center" === o) M = (t.left + t.right) / 2 - p;
						else if (u(o)) {
							const t = Object.keys(o)[0],
								i = o[t];
							M = e.chart.scales[t].getPixelForValue(i)
						}
						S = e._getYAxisLabelAlignment(g).textAlign
					}
					"y" === i && ("start" === l ? T = "top" : "end" === l && (T = "bottom"));
					const L = e._getLabelSizes();
					for (_ = 0, y = r.length; _ < y; ++_) {
						w = (v = r[_]).label;
						const t = s.setContext(e.getContext(_));
						P = e.getPixelForTick(_) + s.labelOffset, D = (O = e._resolveTickFontOptions(_)).lineHeight;
						const i = (C = d(w) ? w.length : 1) / 2,
							n = t.color,
							l = t.textStrokeColor,
							h = t.textStrokeWidth;
						let u;
						if (a ? (M = P, A = "top" === o ? "near" === c || 0 !== b ? -C * D + D / 2 : "center" === c ? -L.highest.height / 2 - i * D + D : -L.highest.height + D / 2 : "near" === c || 0 !== b ? D / 2 : "center" === c ? L.highest.height / 2 - i * D : L.highest.height - C * D, f && (A *= -1)) : (k = P, A = (1 - C) * D / 2), t.showLabelBackdrop) {
							const e = fe(t.backdropPadding),
								i = L.heights[_],
								n = L.widths[_];
							let o = k + A - e.top,
								s = M - e.left;
							switch (T) {
								case "middle":
									o -= i / 2;
									break;
								case "bottom":
									o -= i
							}
							switch (S) {
								case "center":
									s -= n / 2;
									break;
								case "right":
									s -= n
							}
							u = {
								left: s,
								top: o,
								width: n + e.width,
								height: i + e.height,
								color: t.backdropColor
							}
						}
						x.push({
							rotation: b,
							label: w,
							font: O,
							color: n,
							strokeColor: l,
							strokeWidth: h,
							textOffset: A,
							textAlign: S,
							textBaseline: T,
							translation: [M, k],
							backdrop: u
						})
					}
					return x
				}
				_getXAxisLabelAlignment() {
					const {
						position: t,
						ticks: e
					} = this.options;
					if (-q(this.labelRotation)) return "top" === t ? "left" : "right";
					let i = "center";
					return "start" === e.align ? i = "left" : "end" === e.align && (i = "right"), i
				}
				_getYAxisLabelAlignment(t) {
					const e = this,
						{
							position: i,
							ticks: {
								crossAlign: n,
								mirror: o,
								padding: s
							}
						} = e.options,
						a = t + s,
						r = e._getLabelSizes().widest.width;
					let l, c;
					return "left" === i ? o ? (c = e.right + s, "near" === n ? l = "left" : "center" === n ? (l = "center", c += r / 2) : (l = "right", c += r)) : (c = e.right - a, "near" === n ? l = "right" : "center" === n ? (l = "center", c -= r / 2) : (l = "left", c = e.left)) : "right" === i ? o ? (c = e.left + s, "near" === n ? l = "right" : "center" === n ? (l = "center", c -= r / 2) : (l = "left", c -= r)) : (c = e.left + a, "near" === n ? l = "left" : "center" === n ? (l = "center", c += r / 2) : (l = "right", c = e.right)) : l = "right", {
						textAlign: l,
						x: c
					}
				}
				_computeLabelArea() {
					const t = this;
					if (t.options.ticks.mirror) return;
					const e = t.chart,
						i = t.options.position;
					return "left" === i || "right" === i ? {
						top: 0,
						left: t.left,
						bottom: e.height,
						right: t.right
					} : "top" === i || "bottom" === i ? {
						top: t.top,
						left: 0,
						bottom: t.bottom,
						right: e.width
					} : void 0
				}
				drawBackground() {
					const {
						ctx: t,
						options: {
							backgroundColor: e
						},
						left: i,
						top: n,
						width: o,
						height: s
					} = this;
					e && (t.save(), t.fillStyle = e, t.fillRect(i, n, o, s), t.restore())
				}
				getLineWidthForValue(t) {
					const e = this,
						i = e.options.grid;
					if (!e._isVisible() || !i.display) return 0;
					const n = e.ticks.findIndex(e => e.value === t);
					if (n >= 0) {
						return i.setContext(e.getContext(n)).lineWidth
					}
					return 0
				}
				drawGrid(t) {
					const e = this,
						i = e.options.grid,
						n = e.ctx,
						o = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
					let s, a;
					const r = (t, e, i) => {
						i.width && i.color && (n.save(), n.lineWidth = i.width, n.strokeStyle = i.color, n.setLineDash(i.borderDash || []), n.lineDashOffset = i.borderDashOffset, n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(e.x, e.y), n.stroke(), n.restore())
					};
					if (i.display)
						for (s = 0, a = o.length; s < a; ++s) {
							const t = o[s];
							i.drawOnChartArea && r({
								x: t.x1,
								y: t.y1
							}, {
								x: t.x2,
								y: t.y2
							}, t), i.drawTicks && r({
								x: t.tx1,
								y: t.ty1
							}, {
								x: t.tx2,
								y: t.ty2
							}, {
								color: t.tickColor,
								width: t.tickWidth,
								borderDash: t.tickBorderDash,
								borderDashOffset: t.tickBorderDashOffset
							})
						}
				}
				drawBorder() {
					const t = this,
						{
							chart: e,
							ctx: i,
							options: {
								grid: n
							}
						} = t,
						o = n.setContext(t.getContext()),
						s = n.drawBorder ? o.borderWidth : 0;
					if (!s) return;
					const a = n.setContext(t.getContext(0)).lineWidth,
						r = t._borderValue;
					let l, c, h, d;
					t.isHorizontal() ? (l = qt(e, t.left, s) - s / 2, c = qt(e, t.right, a) + a / 2, h = d = r) : (h = qt(e, t.top, s) - s / 2, d = qt(e, t.bottom, a) + a / 2, l = c = r), i.save(), i.lineWidth = o.borderWidth, i.strokeStyle = o.borderColor, i.beginPath(), i.moveTo(l, h), i.lineTo(c, d), i.stroke(), i.restore()
				}
				drawLabels(t) {
					const e = this;
					if (!e.options.ticks.display) return;
					const i = e.ctx,
						n = e._computeLabelArea();
					n && Jt(i, n);
					const o = e._labelItems || (e._labelItems = e._computeLabelItems(t));
					let s, a;
					for (s = 0, a = o.length; s < a; ++s) {
						const t = o[s],
							e = t.font,
							n = t.label;
						t.backdrop && (i.fillStyle = t.backdrop.color, i.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)), ne(i, n, 0, t.textOffset, e, t)
					}
					n && te(i)
				}
				drawTitle() {
					const {
						ctx: t,
						options: {
							position: e,
							title: i,
							reverse: n
						}
					} = this;
					if (!i.display) return;
					const o = ge(i.font),
						s = fe(i.padding),
						r = i.align;
					let l = o.lineHeight / 2;
					"bottom" === e || "center" === e || u(e) ? (l += s.bottom, d(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += s.top;
					const {
						titleX: c,
						titleY: h,
						maxWidth: f,
						rotation: g
					} = function(t, e, i, n) {
						const {
							top: o,
							left: s,
							bottom: r,
							right: l,
							chart: c
						} = t, {
							chartArea: h,
							scales: d
						} = c;
						let f, g, p, m = 0;
						const b = r - o,
							x = l - s;
						if (t.isHorizontal()) {
							if (g = a(n, s, l), u(i)) {
								const t = Object.keys(i)[0],
									n = i[t];
								p = d[t].getPixelForValue(n) + b - e
							} else p = "center" === i ? (h.bottom + h.top) / 2 + b - e : Hn(t, i, e);
							f = l - s
						} else {
							if (u(i)) {
								const t = Object.keys(i)[0],
									n = i[t];
								g = d[t].getPixelForValue(n) - x + e
							} else g = "center" === i ? (h.left + h.right) / 2 - x + e : Hn(t, i, e);
							p = a(n, r, o), m = "left" === i ? -B : B
						}
						return {
							titleX: g,
							titleY: p,
							maxWidth: f,
							rotation: m
						}
					}(this, l, e, r);
					ne(t, i.text, 0, 0, o, {
						color: i.color,
						maxWidth: f,
						rotation: g,
						textAlign: Kn(r, e, n),
						textBaseline: "middle",
						translation: [c, h]
					})
				}
				draw(t) {
					const e = this;
					e._isVisible() && (e.drawBackground(), e.drawGrid(t), e.drawBorder(), e.drawTitle(), e.drawLabels(t))
				}
				_layers() {
					const t = this,
						e = t.options,
						i = e.ticks && e.ticks.z || 0,
						n = p(e.grid && e.grid.z, -1);
					return t._isVisible() && t.draw === qn.prototype.draw ? [{
						z: n,
						draw(e) {
							t.drawBackground(), t.drawGrid(e), t.drawTitle()
						}
					}, {
						z: n + 1,
						draw() {
							t.drawBorder()
						}
					}, {
						z: i,
						draw(e) {
							t.drawLabels(e)
						}
					}] : [{
						z: i,
						draw(e) {
							t.draw(e)
						}
					}]
				}
				getMatchingVisibleMetas(t) {
					const e = this,
						i = e.chart.getSortedVisibleDatasetMetas(),
						n = e.axis + "AxisID",
						o = [];
					let s, a;
					for (s = 0, a = i.length; s < a; ++s) {
						const a = i[s];
						a[n] !== e.id || t && a.type !== t || o.push(a)
					}
					return o
				}
				_resolveTickFontOptions(t) {
					return ge(this.options.ticks.setContext(this.getContext(t)).font)
				}
				_maxDigits() {
					const t = this._resolveTickFontOptions(0).lineHeight;
					return (this.isHorizontal() ? this.width : this.height) / t
				}
			}
			class Gn {
				constructor(t, e, i) {
					this.type = t, this.scope = e, this.override = i, this.items = Object.create(null)
				}
				isForType(t) {
					return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
				}
				register(t) {
					const e = this,
						i = Object.getPrototypeOf(t);
					let n;
					(function(t) {
						return "id" in t && "defaults" in t
					})(i) && (n = e.register(i));
					const o = e.items,
						s = t.id,
						a = e.scope + "." + s;
					if (!s) throw new Error("class does not have id: " + t);
					return s in o ? a : (o[s] = t, function(t, e, i) {
						const n = k(Object.create(null), [i ? Ut.get(i) : {}, Ut.get(e), t.defaults]);
						Ut.set(e, n), t.defaultRoutes && function(t, e) {
							Object.keys(e).forEach(i => {
								const n = i.split("."),
									o = n.pop(),
									s = [t].concat(n).join("."),
									a = e[i].split("."),
									r = a.pop(),
									l = a.join(".");
								Ut.route(s, o, l, r)
							})
						}(e, t.defaultRoutes);
						t.descriptors && Ut.describe(e, t.descriptors)
					}(t, a, n), e.override && Ut.override(t.id, t.overrides), a)
				}
				get(t) {
					return this.items[t]
				}
				unregister(t) {
					const e = this.items,
						i = t.id,
						n = this.scope;
					i in e && delete e[i], n && i in Ut[n] && (delete Ut[n][i], this.override && delete Nt[i])
				}
			}
			var Zn = new class {
				constructor() {
					this.controllers = new Gn(Ri, "datasets", !0), this.elements = new Gn(In, "elements"), this.plugins = new Gn(Object, "plugins"), this.scales = new Gn(qn, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
				}
				add(...t) {
					this._each("register", t)
				}
				remove(...t) {
					this._each("unregister", t)
				}
				addControllers(...t) {
					this._each("register", t, this.controllers)
				}
				addElements(...t) {
					this._each("register", t, this.elements)
				}
				addPlugins(...t) {
					this._each("register", t, this.plugins)
				}
				addScales(...t) {
					this._each("register", t, this.scales)
				}
				getController(t) {
					return this._get(t, this.controllers, "controller")
				}
				getElement(t) {
					return this._get(t, this.elements, "element")
				}
				getPlugin(t) {
					return this._get(t, this.plugins, "plugin")
				}
				getScale(t) {
					return this._get(t, this.scales, "scale")
				}
				removeControllers(...t) {
					this._each("unregister", t, this.controllers)
				}
				removeElements(...t) {
					this._each("unregister", t, this.elements)
				}
				removePlugins(...t) {
					this._each("unregister", t, this.plugins)
				}
				removeScales(...t) {
					this._each("unregister", t, this.scales)
				}
				_each(t, e, i) {
					const n = this;
					[...e].forEach(e => {
						const o = i || n._getRegistryForType(e);
						i || o.isForType(e) || o === n.plugins && e.id ? n._exec(t, o, e) : _(e, e => {
							const o = i || n._getRegistryForType(e);
							n._exec(t, o, e)
						})
					})
				}
				_exec(t, e, i) {
					const n = T(t);
					x(i["before" + n], [], i), e[t](i), x(i["after" + n], [], i)
				}
				_getRegistryForType(t) {
					for (let e = 0; e < this._typedRegistries.length; e++) {
						const i = this._typedRegistries[e];
						if (i.isForType(t)) return i
					}
					return this.plugins
				}
				_get(t, e, i) {
					const n = e.get(t);
					if (void 0 === n) throw new Error('"' + t + '" is not a registered ' + i + ".");
					return n
				}
			};
			class Qn {
				constructor() {
					this._init = []
				}
				notify(t, e, i, n) {
					const o = this;
					"beforeInit" === e && (o._init = o._createDescriptors(t, !0), o._notify(o._init, t, "install"));
					const s = n ? o._descriptors(t).filter(n) : o._descriptors(t),
						a = o._notify(s, t, e, i);
					return "destroy" === e && (o._notify(s, t, "stop"), o._notify(o._init, t, "uninstall")), a
				}
				_notify(t, e, i, n) {
					n = n || {};
					for (const o of t) {
						const t = o.plugin;
						if (!1 === x(t[i], [e, n, o.options], t) && n.cancelable) return !1
					}
					return !0
				}
				invalidate() {
					h(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
				}
				_descriptors(t) {
					if (this._cache) return this._cache;
					const e = this._cache = this._createDescriptors(t);
					return this._notifyStateChanges(t), e
				}
				_createDescriptors(t, e) {
					const i = t && t.config,
						n = p(i.options && i.options.plugins, {}),
						o = function(t) {
							const e = [],
								i = Object.keys(Zn.plugins.items);
							for (let o = 0; o < i.length; o++) e.push(Zn.getPlugin(i[o]));
							const n = t.plugins || [];
							for (let o = 0; o < n.length; o++) {
								const t = n[o]; - 1 === e.indexOf(t) && e.push(t)
							}
							return e
						}(i);
					return !1 !== n || e ? function(t, e, i, n) {
						const o = [],
							s = t.getContext();
						for (let a = 0; a < e.length; a++) {
							const r = e[a],
								l = r.id,
								c = Jn(i[l], n);
							null !== c && o.push({
								plugin: r,
								options: to(t.config, r, c, s)
							})
						}
						return o
					}(t, o, n, e) : []
				}
				_notifyStateChanges(t) {
					const e = this._oldCache || [],
						i = this._cache,
						n = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
					this._notify(n(e, i), t, "stop"), this._notify(n(i, e), t, "start")
				}
			}

			function Jn(t, e) {
				return e || !1 !== t ? !0 === t ? {} : t : null
			}

			function to(t, e, i, n) {
				const o = t.pluginScopeKeys(e),
					s = t.getOptionScopes(i, o);
				return t.createResolver(s, n, [""], {
					scriptable: !1,
					indexable: !1,
					allKeys: !0
				})
			}

			function eo(t, e) {
				const i = Ut.datasets[t] || {};
				return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x"
			}

			function io(t, e) {
				return "x" === t || "y" === t ? t : e.axis || ("top" === (i = e.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.charAt(0).toLowerCase();
				var i
			}

			function no(t) {
				const e = t.options || (t.options = {});
				e.plugins = p(e.plugins, {}), e.scales = function(t, e) {
					const i = Nt[t.type] || {
							scales: {}
						},
						n = e.scales || {},
						o = eo(t.type, e),
						s = Object.create(null),
						a = Object.create(null);
					return Object.keys(n).forEach(t => {
						const e = n[t],
							r = io(t, e),
							l = function(t, e) {
								return t === e ? "_index_" : "_value_"
							}(r, o),
							c = i.scales || {};
						s[r] = s[r] || t, a[t] = S(Object.create(null), [{
							axis: r
						}, e, c[r], c[l]])
					}), t.data.datasets.forEach(i => {
						const o = i.type || t.type,
							r = i.indexAxis || eo(o, e),
							l = (Nt[o] || {}).scales || {};
						Object.keys(l).forEach(t => {
							const e = function(t, e) {
									let i = t;
									return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i
								}(t, r),
								o = i[e + "AxisID"] || s[e] || e;
							a[o] = a[o] || Object.create(null), S(a[o], [{
								axis: e
							}, n[o], l[t]])
						})
					}), Object.keys(a).forEach(t => {
						const e = a[t];
						S(e, [Ut.scales[e.type], Ut.scale])
					}), a
				}(t, e)
			}

			function oo(t) {
				return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
			}
			const so = new Map,
				ao = new Set;

			function ro(t, e) {
				let i = so.get(t);
				return i || (i = e(), so.set(t, i), ao.add(i)), i
			}
			const lo = (t, e, i) => {
				const n = A(e, i);
				void 0 !== n && t.add(n)
			};
			class co {
				constructor(t) {
					this._config = function(t) {
						return (t = t || {}).data = oo(t.data), no(t), t
					}(t), this._scopeCache = new Map, this._resolverCache = new Map
				}
				get platform() {
					return this._config.platform
				}
				get type() {
					return this._config.type
				}
				set type(t) {
					this._config.type = t
				}
				get data() {
					return this._config.data
				}
				set data(t) {
					this._config.data = oo(t)
				}
				get options() {
					return this._config.options
				}
				set options(t) {
					this._config.options = t
				}
				get plugins() {
					return this._config.plugins
				}
				update() {
					const t = this._config;
					this.clearCache(), no(t)
				}
				clearCache() {
					this._scopeCache.clear(), this._resolverCache.clear()
				}
				datasetScopeKeys(t) {
					return ro(t, () => [
						[`datasets.${t}`, ""]
					])
				}
				datasetAnimationScopeKeys(t, e) {
					return ro(`${t}.transition.${e}`, () => [
						[`datasets.${t}.transitions.${e}`, `transitions.${e}`],
						[`datasets.${t}`, ""]
					])
				}
				datasetElementScopeKeys(t, e) {
					return ro(`${t}-${e}`, () => [
						[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]
					])
				}
				pluginScopeKeys(t) {
					const e = t.id;
					return ro(`${this.type}-plugin-${e}`, () => [
						[`plugins.${e}`, ...t.additionalOptionScopes || []]
					])
				}
				_cachedScopes(t, e) {
					const i = this._scopeCache;
					let n = i.get(t);
					return n && !e || (n = new Map, i.set(t, n)), n
				}
				getOptionScopes(t, e, i) {
					const {
						options: n,
						type: o
					} = this, s = this._cachedScopes(t, i), a = s.get(e);
					if (a) return a;
					const r = new Set;
					e.forEach(e => {
						t && (r.add(t), e.forEach(e => lo(r, t, e))), e.forEach(t => lo(r, n, t)), e.forEach(t => lo(r, Nt[o] || {}, t)), e.forEach(t => lo(r, Ut, t)), e.forEach(t => lo(r, Ht, t))
					});
					const l = Array.from(r);
					return 0 === l.length && l.push(Object.create(null)), ao.has(e) && s.set(e, l), l
				}
				chartOptionScopes() {
					const {
						options: t,
						type: e
					} = this;
					return [t, Nt[e] || {}, Ut.datasets[e] || {}, {
						type: e
					}, Ut, Ht]
				}
				resolveNamedOptions(t, e, i, n = [""]) {
					const o = {
							$shared: !0
						},
						{
							resolver: s,
							subPrefixes: a
						} = ho(this._resolverCache, t, n);
					let r = s;
					if (function(t, e) {
							const {
								isScriptable: i,
								isIndexable: n
							} = ke(t);
							for (const o of e)
								if (i(o) && E(t[o]) || n(o) && d(t[o])) return !0;
							return !1
						}(s, e)) {
						o.$shared = !1, r = Me(s, i = E(i) ? i() : i, this.createResolver(t, i, a))
					}
					for (const l of e) o[l] = r[l];
					return o
				}
				createResolver(t, e, i = [""], n) {
					const {
						resolver: o
					} = ho(this._resolverCache, t, i);
					return u(e) ? Me(o, e, void 0, n) : o
				}
			}

			function ho(t, e, i) {
				let n = t.get(e);
				n || (n = new Map, t.set(e, n));
				const o = i.join();
				let s = n.get(o);
				if (!s) {
					s = {
						resolver: we(e, i),
						subPrefixes: i.filter(t => !t.toLowerCase().includes("hover"))
					}, n.set(o, s)
				}
				return s
			}
			const uo = ["top", "bottom", "left", "right", "chartArea"];

			function fo(t, e) {
				return "top" === t || "bottom" === t || -1 === uo.indexOf(t) && "x" === e
			}

			function go(t, e) {
				return function(i, n) {
					return i[t] === n[t] ? i[e] - n[e] : i[t] - n[t]
				}
			}

			function po(t) {
				const e = t.chart,
					i = e.options.animation;
				e.notifyPlugins("afterRender"), x(i && i.onComplete, [t], e)
			}

			function mo(t) {
				const e = t.chart,
					i = e.options.animation;
				x(i && i.onProgress, [t], e)
			}

			function bo(t) {
				return Ne() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
			}
			const xo = {},
				_o = t => {
					const e = bo(t);
					return Object.values(xo).filter(t => t.canvas === e).pop()
				};
			class yo {
				constructor(t, e) {
					const i = this,
						n = this.config = new co(e),
						o = bo(t),
						s = _o(o);
					if (s) throw new Error("Canvas is already in use. Chart with ID '" + s.id + "' must be destroyed before the canvas can be reused.");
					const a = n.createResolver(n.chartOptionScopes(), i.getContext());
					this.platform = new(n.platform || function(t) {
						return !Ne() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? wn : Fn
					}(o));
					const r = i.platform.acquireContext(o, a.aspectRatio),
						l = r && r.canvas,
						h = l && l.height,
						d = l && l.width;
					this.id = c(), this.ctx = r, this.canvas = l, this.width = d, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Qn, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function(t, e) {
						let i;
						return function() {
							return e ? (clearTimeout(i), i = setTimeout(t, e)) : t(), e
						}
					}(() => this.update("resize"), a.resizeDelay || 0), xo[i.id] = i, r && l ? (xi.listen(i, "complete", po), xi.listen(i, "progress", mo), i._initialize(), i.attached && i.update()) : console.error("Failed to create chart: can't acquire context from the given item")
				}
				get aspectRatio() {
					const {
						options: {
							aspectRatio: t,
							maintainAspectRatio: e
						},
						width: i,
						height: n,
						_aspectRatio: o
					} = this;
					return h(t) ? e && o ? o : n ? i / n : null : t
				}
				get data() {
					return this.config.data
				}
				set data(t) {
					this.config.data = t
				}
				get options() {
					return this._options
				}
				set options(t) {
					this.config.options = t
				}
				_initialize() {
					const t = this;
					return t.notifyPlugins("beforeInit"), t.options.responsive ? t.resize() : Qe(t, t.options.devicePixelRatio), t.bindEvents(), t.notifyPlugins("afterInit"), t
				}
				clear() {
					return Gt(this.canvas, this.ctx), this
				}
				stop() {
					return xi.stop(this), this
				}
				resize(t, e) {
					xi.running(this) ? this._resizeBeforeDraw = {
						width: t,
						height: e
					} : this._resize(t, e)
				}
				_resize(t, e) {
					const i = this,
						n = i.options,
						o = i.canvas,
						s = n.maintainAspectRatio && i.aspectRatio,
						a = i.platform.getMaximumSize(o, t, e, s),
						r = n.devicePixelRatio || i.platform.getDevicePixelRatio();
					i.width = a.width, i.height = a.height, i._aspectRatio = i.aspectRatio, Qe(i, r, !0) && (i.notifyPlugins("resize", {
						size: a
					}), x(n.onResize, [i, a], i), i.attached && i._doResize() && i.render())
				}
				ensureScalesHaveIDs() {
					_(this.options.scales || {}, (t, e) => {
						t.id = e
					})
				}
				buildOrUpdateScales() {
					const t = this,
						e = t.options,
						i = e.scales,
						n = t.scales,
						o = Object.keys(n).reduce((t, e) => (t[e] = !1, t), {});
					let s = [];
					i && (s = s.concat(Object.keys(i).map(t => {
						const e = i[t],
							n = io(t, e),
							o = "r" === n,
							s = "x" === n;
						return {
							options: e,
							dposition: o ? "chartArea" : s ? "bottom" : "left",
							dtype: o ? "radialLinear" : s ? "category" : "linear"
						}
					}))), _(s, i => {
						const s = i.options,
							a = s.id,
							r = io(a, s),
							l = p(s.type, i.dtype);
						void 0 !== s.position && fo(s.position, r) === fo(i.dposition) || (s.position = i.dposition), o[a] = !0;
						let c = null;
						if (a in n && n[a].type === l) c = n[a];
						else {
							c = new(Zn.getScale(l))({
								id: a,
								type: l,
								ctx: t.ctx,
								chart: t
							}), n[c.id] = c
						}
						c.init(s, e)
					}), _(o, (t, e) => {
						t || delete n[e]
					}), _(n, e => {
						yn.configure(t, e, e.options), yn.addBox(t, e)
					})
				}
				_updateMetasets() {
					const t = this,
						e = t._metasets,
						i = t.data.datasets.length,
						n = e.length;
					if (e.sort((t, e) => t.index - e.index), n > i) {
						for (let e = i; e < n; ++e) t._destroyDatasetMeta(e);
						e.splice(i, n - i)
					}
					t._sortedMetasets = e.slice(0).sort(go("order", "index"))
				}
				_removeUnreferencedMetasets() {
					const t = this,
						{
							_metasets: e,
							data: {
								datasets: i
							}
						} = t;
					e.length > i.length && delete t._stacks, e.forEach((e, n) => {
						0 === i.filter(t => t === e._dataset).length && t._destroyDatasetMeta(n)
					})
				}
				buildOrUpdateControllers() {
					const t = this,
						e = [],
						i = t.data.datasets;
					let n, o;
					for (t._removeUnreferencedMetasets(), n = 0, o = i.length; n < o; n++) {
						const o = i[n];
						let s = t.getDatasetMeta(n);
						const a = o.type || t.config.type;
						if (s.type && s.type !== a && (t._destroyDatasetMeta(n), s = t.getDatasetMeta(n)), s.type = a, s.indexAxis = o.indexAxis || eo(a, t.options), s.order = o.order || 0, s.index = n, s.label = "" + o.label, s.visible = t.isDatasetVisible(n), s.controller) s.controller.updateIndex(n), s.controller.linkScales();
						else {
							const i = Zn.getController(a),
								{
									datasetElementType: o,
									dataElementType: r
								} = Ut.datasets[a];
							Object.assign(i.prototype, {
								dataElementType: Zn.getElement(r),
								datasetElementType: o && Zn.getElement(o)
							}), s.controller = new i(t, n), e.push(s.controller)
						}
					}
					return t._updateMetasets(), e
				}
				_resetElements() {
					const t = this;
					_(t.data.datasets, (e, i) => {
						t.getDatasetMeta(i).controller.reset()
					}, t)
				}
				reset() {
					this._resetElements(), this.notifyPlugins("reset")
				}
				update(t) {
					const e = this,
						i = e.config;
					i.update(), e._options = i.createResolver(i.chartOptionScopes(), e.getContext()), _(e.scales, t => {
						yn.removeBox(e, t)
					});
					const n = e._animationsDisabled = !e.options.animation;
					e.ensureScalesHaveIDs(), e.buildOrUpdateScales();
					const o = new Set(Object.keys(e._listeners)),
						s = new Set(e.options.events);
					if (R(o, s) && !!this._responsiveListeners === e.options.responsive || (e.unbindEvents(), e.bindEvents()), e._plugins.invalidate(), !1 === e.notifyPlugins("beforeUpdate", {
							mode: t,
							cancelable: !0
						})) return;
					const a = e.buildOrUpdateControllers();
					e.notifyPlugins("beforeElementsUpdate");
					let r = 0;
					for (let l = 0, c = e.data.datasets.length; l < c; l++) {
						const {
							controller: t
						} = e.getDatasetMeta(l), i = !n && -1 === a.indexOf(t);
						t.buildOrUpdateElements(i), r = Math.max(+t.getMaxOverflow(), r)
					}
					e._minPadding = r, e._updateLayout(r), n || _(a, t => {
						t.reset()
					}), e._updateDatasets(t), e.notifyPlugins("afterUpdate", {
						mode: t
					}), e._layers.sort(go("z", "_idx")), e._lastEvent && e._eventHandler(e._lastEvent, !0), e.render()
				}
				_updateLayout(t) {
					const e = this;
					if (!1 === e.notifyPlugins("beforeLayout", {
							cancelable: !0
						})) return;
					yn.update(e, e.width, e.height, t);
					const i = e.chartArea,
						n = i.width <= 0 || i.height <= 0;
					e._layers = [], _(e.boxes, t => {
						n && "chartArea" === t.position || (t.configure && t.configure(), e._layers.push(...t._layers()))
					}, e), e._layers.forEach((t, e) => {
						t._idx = e
					}), e.notifyPlugins("afterLayout")
				}
				_updateDatasets(t) {
					const e = this,
						i = "function" == typeof t;
					if (!1 !== e.notifyPlugins("beforeDatasetsUpdate", {
							mode: t,
							cancelable: !0
						})) {
						for (let n = 0, o = e.data.datasets.length; n < o; ++n) e._updateDataset(n, i ? t({
							datasetIndex: n
						}) : t);
						e.notifyPlugins("afterDatasetsUpdate", {
							mode: t
						})
					}
				}
				_updateDataset(t, e) {
					const i = this.getDatasetMeta(t),
						n = {
							meta: i,
							index: t,
							mode: e,
							cancelable: !0
						};
					!1 !== this.notifyPlugins("beforeDatasetUpdate", n) && (i.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
				}
				render() {
					const t = this;
					!1 !== t.notifyPlugins("beforeRender", {
						cancelable: !0
					}) && (xi.has(t) ? t.attached && !xi.running(t) && xi.start(t) : (t.draw(), po({
						chart: t
					})))
				}
				draw() {
					const t = this;
					let e;
					if (t._resizeBeforeDraw) {
						const {
							width: e,
							height: i
						} = t._resizeBeforeDraw;
						t._resize(e, i), t._resizeBeforeDraw = null
					}
					if (t.clear(), t.width <= 0 || t.height <= 0) return;
					if (!1 === t.notifyPlugins("beforeDraw", {
							cancelable: !0
						})) return;
					const i = t._layers;
					for (e = 0; e < i.length && i[e].z <= 0; ++e) i[e].draw(t.chartArea);
					for (t._drawDatasets(); e < i.length; ++e) i[e].draw(t.chartArea);
					t.notifyPlugins("afterDraw")
				}
				_getSortedDatasetMetas(t) {
					const e = this._sortedMetasets,
						i = [];
					let n, o;
					for (n = 0, o = e.length; n < o; ++n) {
						const o = e[n];
						t && !o.visible || i.push(o)
					}
					return i
				}
				getSortedVisibleDatasetMetas() {
					return this._getSortedDatasetMetas(!0)
				}
				_drawDatasets() {
					const t = this;
					if (!1 === t.notifyPlugins("beforeDatasetsDraw", {
							cancelable: !0
						})) return;
					const e = t.getSortedVisibleDatasetMetas();
					for (let i = e.length - 1; i >= 0; --i) t._drawDataset(e[i]);
					t.notifyPlugins("afterDatasetsDraw")
				}
				_drawDataset(t) {
					const e = this,
						i = e.ctx,
						n = t._clip,
						o = !n.disabled,
						s = e.chartArea,
						a = {
							meta: t,
							index: t.index,
							cancelable: !0
						};
					!1 !== e.notifyPlugins("beforeDatasetDraw", a) && (o && Jt(i, {
						left: !1 === n.left ? 0 : s.left - n.left,
						right: !1 === n.right ? e.width : s.right + n.right,
						top: !1 === n.top ? 0 : s.top - n.top,
						bottom: !1 === n.bottom ? e.height : s.bottom + n.bottom
					}), t.controller.draw(), o && te(i), a.cancelable = !1, e.notifyPlugins("afterDatasetDraw", a))
				}
				getElementsAtEventForMode(t, e, i, n) {
					const o = rn.modes[e];
					return "function" == typeof o ? o(this, t, i, n) : []
				}
				getDatasetMeta(t) {
					const e = this.data.datasets[t],
						i = this._metasets;
					let n = i.filter(t => t && t._dataset === e).pop();
					return n || (n = {
						type: null,
						data: [],
						dataset: null,
						controller: null,
						hidden: null,
						xAxisID: null,
						yAxisID: null,
						order: e && e.order || 0,
						index: t,
						_dataset: e,
						_parsed: [],
						_sorted: !1
					}, i.push(n)), n
				}
				getContext() {
					return this.$context || (this.$context = {
						chart: this,
						type: "chart"
					})
				}
				getVisibleDatasetCount() {
					return this.getSortedVisibleDatasetMetas().length
				}
				isDatasetVisible(t) {
					const e = this.data.datasets[t];
					if (!e) return !1;
					const i = this.getDatasetMeta(t);
					return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden
				}
				setDatasetVisibility(t, e) {
					this.getDatasetMeta(t).hidden = !e
				}
				toggleDataVisibility(t) {
					this._hiddenIndices[t] = !this._hiddenIndices[t]
				}
				getDataVisibility(t) {
					return !this._hiddenIndices[t]
				}
				_updateVisibility(t, e, i) {
					const n = this,
						o = i ? "show" : "hide",
						s = n.getDatasetMeta(t),
						a = s.controller._resolveAnimations(void 0, o);
					L(e) ? (s.data[e].hidden = !i, n.update()) : (n.setDatasetVisibility(t, i), a.update(s, {
						visible: i
					}), n.update(e => e.datasetIndex === t ? o : void 0))
				}
				hide(t, e) {
					this._updateVisibility(t, e, !1)
				}
				show(t, e) {
					this._updateVisibility(t, e, !0)
				}
				_destroyDatasetMeta(t) {
					const e = this,
						i = e._metasets && e._metasets[t];
					i && i.controller && (i.controller._destroy(), delete e._metasets[t])
				}
				destroy() {
					const t = this,
						{
							canvas: e,
							ctx: i
						} = t;
					let n, o;
					for (t.stop(), xi.remove(t), n = 0, o = t.data.datasets.length; n < o; ++n) t._destroyDatasetMeta(n);
					t.config.clearCache(), e && (t.unbindEvents(), Gt(e, i), t.platform.releaseContext(i), t.canvas = null, t.ctx = null), t.notifyPlugins("destroy"), delete xo[t.id]
				}
				toBase64Image(...t) {
					return this.canvas.toDataURL(...t)
				}
				bindEvents() {
					this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
				}
				bindUserEvents() {
					const t = this,
						e = t._listeners,
						i = t.platform,
						n = function(e, i, n) {
							e.offsetX = i, e.offsetY = n, t._eventHandler(e)
						};
					_(t.options.events, o => ((n, o) => {
						i.addEventListener(t, n, o), e[n] = o
					})(o, n))
				}
				bindResponsiveEvents() {
					const t = this;
					t._responsiveListeners || (t._responsiveListeners = {});
					const e = t._responsiveListeners,
						i = t.platform,
						n = (n, o) => {
							i.addEventListener(t, n, o), e[n] = o
						},
						o = (n, o) => {
							e[n] && (i.removeEventListener(t, n, o), delete e[n])
						},
						s = (e, i) => {
							t.canvas && t.resize(e, i)
						};
					let a;
					const r = () => {
						o("attach", r), t.attached = !0, t.resize(), n("resize", s), n("detach", a)
					};
					a = () => {
						t.attached = !1, o("resize", s), n("attach", r)
					}, i.isAttached(t.canvas) ? r() : a()
				}
				unbindEvents() {
					const t = this;
					_(t._listeners, (e, i) => {
						t.platform.removeEventListener(t, i, e)
					}), t._listeners = {}, _(t._responsiveListeners, (e, i) => {
						t.platform.removeEventListener(t, i, e)
					}), t._responsiveListeners = void 0
				}
				updateHoverStyle(t, e, i) {
					const n = i ? "set" : "remove";
					let o, s, a, r;
					for ("dataset" === e && (o = this.getDatasetMeta(t[0].datasetIndex)).controller["_" + n + "DatasetHoverStyle"](), a = 0, r = t.length; a < r; ++a) {
						const e = (s = t[a]) && this.getDatasetMeta(s.datasetIndex).controller;
						e && e[n + "HoverStyle"](s.element, s.datasetIndex, s.index)
					}
				}
				getActiveElements() {
					return this._active || []
				}
				setActiveElements(t) {
					const e = this,
						i = e._active || [],
						n = t.map(({
							datasetIndex: t,
							index: i
						}) => {
							const n = e.getDatasetMeta(t);
							if (!n) throw new Error("No dataset found at index " + t);
							return {
								datasetIndex: t,
								element: n.data[i],
								index: i
							}
						});
					!y(n, i) && (e._active = n, e._updateHoverStyles(n, i))
				}
				notifyPlugins(t, e, i) {
					return this._plugins.notify(this, t, e, i)
				}
				_updateHoverStyles(t, e, i) {
					const n = this,
						o = n.options.hover,
						s = (t, e) => t.filter(t => !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index)),
						a = s(e, t),
						r = i ? t : s(t, e);
					a.length && n.updateHoverStyle(a, o.mode, !1), r.length && o.mode && n.updateHoverStyle(r, o.mode, !0)
				}
				_eventHandler(t, e) {
					const i = this,
						n = {
							event: t,
							replay: e,
							cancelable: !0
						},
						o = e => (e.options.events || this.options.events).includes(t.type);
					if (!1 === i.notifyPlugins("beforeEvent", n, o)) return;
					const s = i._handleEvent(t, e);
					return n.cancelable = !1, i.notifyPlugins("afterEvent", n, o), (s || n.changed) && i.render(), i
				}
				_handleEvent(t, e) {
					const i = this,
						{
							_active: n = [],
							options: o
						} = i,
						s = o.hover,
						a = e;
					let r = [],
						l = !1,
						c = null;
					return "mouseout" !== t.type && (r = i.getElementsAtEventForMode(t, s.mode, s, a), c = "click" === t.type ? i._lastEvent : t), i._lastEvent = null, Qt(t, i.chartArea, i._minPadding) && (x(o.onHover, [t, r, i], i), "mouseup" !== t.type && "click" !== t.type && "contextmenu" !== t.type || x(o.onClick, [t, r, i], i)), ((l = !y(r, n)) || e) && (i._active = r, i._updateHoverStyles(r, n, e)), i._lastEvent = c, l
				}
			}
			const vo = () => _(yo.instances, t => t._plugins.invalidate());

			function wo(t, e, i) {
				const {
					startAngle: n,
					pixelMargin: o,
					x: s,
					y: a,
					outerRadius: r,
					innerRadius: l
				} = e;
				let c = o / r;
				t.beginPath(), t.arc(s, a, r, n - c, i + c), l > o ? (c = o / l, t.arc(s, a, l, i + c, n - c, !0)) : t.arc(s, a, o, i + B, n - B), t.closePath(), t.clip()
			}

			function Mo(t, e, i, n) {
				const o = he(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
				const s = (i - e) / 2,
					a = Math.min(s, n * e / 2),
					r = t => {
						const e = (i - Math.min(s, t)) * n / 2;
						return it(t, 0, Math.min(s, e))
					};
				return {
					outerStart: r(o.outerStart),
					outerEnd: r(o.outerEnd),
					innerStart: it(o.innerStart, 0, a),
					innerEnd: it(o.innerEnd, 0, a)
				}
			}

			function ko(t, e, i, n) {
				return {
					x: i + t * Math.cos(e),
					y: n + t * Math.sin(e)
				}
			}

			function So(t, e, i, n, o) {
				const {
					x: s,
					y: a,
					startAngle: r,
					pixelMargin: l,
					innerRadius: c
				} = e, h = Math.max(e.outerRadius + n + i - l, 0), d = c > 0 ? c + n + i + l : 0;
				let u = 0;
				const f = o - r;
				if (n) {
					const t = ((c > 0 ? c - n : 0) + (h > 0 ? h - n : 0)) / 2;
					u = (f - (0 !== t ? f * t / (t + n) : f)) / 2
				}
				const g = (f - Math.max(.001, f * h - i / z) / h) / 2,
					p = r + g + u,
					m = o - g - u,
					{
						outerStart: b,
						outerEnd: x,
						innerStart: _,
						innerEnd: y
					} = Mo(e, d, h, m - p),
					v = h - b,
					w = h - x,
					M = p + b / v,
					k = m - x / w,
					S = d + _,
					P = d + y,
					O = p + _ / S,
					D = m - y / P;
				if (t.beginPath(), t.arc(s, a, h, M, k), x > 0) {
					const e = ko(w, k, s, a);
					t.arc(e.x, e.y, x, k, m + B)
				}
				const C = ko(P, m, s, a);
				if (t.lineTo(C.x, C.y), y > 0) {
					const e = ko(P, D, s, a);
					t.arc(e.x, e.y, y, m + B, D + Math.PI)
				}
				if (t.arc(s, a, d, m - y / d, p + _ / d, !0), _ > 0) {
					const e = ko(S, O, s, a);
					t.arc(e.x, e.y, _, O + Math.PI, p - B)
				}
				const A = ko(v, p, s, a);
				if (t.lineTo(A.x, A.y), b > 0) {
					const e = ko(v, M, s, a);
					t.arc(e.x, e.y, b, p - B, M)
				}
				t.closePath()
			}

			function Po(t, e, i, n, o) {
				const {
					options: s
				} = e, a = "inner" === s.borderAlign;
				s.borderWidth && (a ? (t.lineWidth = 2 * s.borderWidth, t.lineJoin = "round") : (t.lineWidth = s.borderWidth, t.lineJoin = "bevel"), e.fullCircles && function(t, e, i) {
					const {
						x: n,
						y: o,
						startAngle: s,
						pixelMargin: a,
						fullCircles: r
					} = e, l = Math.max(e.outerRadius - a, 0), c = e.innerRadius + a;
					let h;
					for (i && wo(t, e, s + F), t.beginPath(), t.arc(n, o, c, s + F, s, !0), h = 0; h < r; ++h) t.stroke();
					for (t.beginPath(), t.arc(n, o, l, s, s + F), h = 0; h < r; ++h) t.stroke()
				}(t, e, a), a && wo(t, e, o), So(t, e, i, n, o), t.stroke())
			}
			Object.defineProperties(yo, {
				defaults: {
					enumerable: !0,
					value: Ut
				},
				instances: {
					enumerable: !0,
					value: xo
				},
				overrides: {
					enumerable: !0,
					value: Nt
				},
				registry: {
					enumerable: !0,
					value: Zn
				},
				version: {
					enumerable: !0,
					value: "3.5.1"
				},
				getChart: {
					enumerable: !0,
					value: _o
				},
				register: {
					enumerable: !0,
					value: (...t) => {
						Zn.add(...t), vo()
					}
				},
				unregister: {
					enumerable: !0,
					value: (...t) => {
						Zn.remove(...t), vo()
					}
				}
			});
			class Oo extends In {
				constructor(t) {
					super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
				}
				inRange(t, e, i) {
					const n = this.getProps(["x", "y"], i),
						{
							angle: o,
							distance: s
						} = function(t, e) {
							const i = e.x - t.x,
								n = e.y - t.y,
								o = Math.sqrt(i * i + n * n);
							let s = Math.atan2(n, i);
							return s < -.5 * z && (s += F), {
								angle: s,
								distance: o
							}
						}(n, {
							x: t,
							y: e
						}),
						{
							startAngle: a,
							endAngle: r,
							innerRadius: l,
							outerRadius: c,
							circumference: h
						} = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
						d = this.options.spacing / 2;
					return (h >= F || et(o, a, r)) && (s >= l + d && s <= c + d)
				}
				getCenterPoint(t) {
					const {
						x: e,
						y: i,
						startAngle: n,
						endAngle: o,
						innerRadius: s,
						outerRadius: a
					} = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t), {
						offset: r,
						spacing: l
					} = this.options, c = (n + o) / 2, h = (s + a + l + r) / 2;
					return {
						x: e + Math.cos(c) * h,
						y: i + Math.sin(c) * h
					}
				}
				tooltipPosition(t) {
					return this.getCenterPoint(t)
				}
				draw(t) {
					const e = this,
						{
							options: i,
							circumference: n
						} = e,
						o = (i.offset || 0) / 2,
						s = (i.spacing || 0) / 2;
					if (e.pixelMargin = "inner" === i.borderAlign ? .33 : 0, e.fullCircles = n > F ? Math.floor(n / F) : 0, 0 === n || e.innerRadius < 0 || e.outerRadius < 0) return;
					t.save();
					let a = 0;
					if (o) {
						a = o / 2;
						const i = (e.startAngle + e.endAngle) / 2;
						t.translate(Math.cos(i) * a, Math.sin(i) * a), e.circumference >= z && (a = o)
					}
					t.fillStyle = i.backgroundColor, t.strokeStyle = i.borderColor;
					const r = function(t, e, i, n) {
						const {
							fullCircles: o,
							startAngle: s,
							circumference: a
						} = e;
						let r = e.endAngle;
						if (o) {
							So(t, e, i, n, s + F);
							for (let e = 0; e < o; ++e) t.fill();
							isNaN(a) || (r = s + a % F, a % F == 0 && (r += F))
						}
						return So(t, e, i, n, r), t.fill(), r
					}(t, e, a, s);
					Po(t, e, a, s, r), t.restore()
				}
			}

			function Do(t, e, i = e) {
				t.lineCap = p(i.borderCapStyle, e.borderCapStyle), t.setLineDash(p(i.borderDash, e.borderDash)), t.lineDashOffset = p(i.borderDashOffset, e.borderDashOffset), t.lineJoin = p(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = p(i.borderWidth, e.borderWidth), t.strokeStyle = p(i.borderColor, e.borderColor)
			}

			function Co(t, e, i) {
				t.lineTo(i.x, i.y)
			}

			function Ao(t, e, i = {}) {
				const n = t.length,
					{
						start: o = 0,
						end: s = n - 1
					} = i,
					{
						start: a,
						end: r
					} = e,
					l = Math.max(o, a),
					c = Math.min(s, r),
					h = o < a && s < a || o > r && s > r;
				return {
					count: n,
					start: l,
					loop: e.loop,
					ilen: c < l && !h ? n + c - l : c - l
				}
			}

			function To(t, e, i, n) {
				const {
					points: o,
					options: s
				} = e, {
					count: a,
					start: r,
					loop: l,
					ilen: c
				} = Ao(o, i, n), h = function(t) {
					return t.stepped ? ee : t.tension || "monotone" === t.cubicInterpolationMode ? ie : Co
				}(s);
				let d, u, f, {
					move: g = !0,
					reverse: p
				} = n || {};
				for (d = 0; d <= c; ++d)(u = o[(r + (p ? c - d : d)) % a]).skip || (g ? (t.moveTo(u.x, u.y), g = !1) : h(t, f, u, p, s.stepped), f = u);
				return l && h(t, f, u = o[(r + (p ? c : 0)) % a], p, s.stepped), !!l
			}

			function Lo(t, e, i, n) {
				const o = e.points,
					{
						count: s,
						start: a,
						ilen: r
					} = Ao(o, i, n),
					{
						move: l = !0,
						reverse: c
					} = n || {};
				let h, d, u, f, g, p, m = 0,
					b = 0;
				const x = t => (a + (c ? r - t : t)) % s,
					_ = () => {
						f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p))
					};
				for (l && (d = o[x(0)], t.moveTo(d.x, d.y)), h = 0; h <= r; ++h) {
					if ((d = o[x(h)]).skip) continue;
					const e = d.x,
						i = d.y,
						n = 0 | e;
					n === u ? (i < f ? f = i : i > g && (g = i), m = (b * m + e) / ++b) : (_(), t.lineTo(e, i), u = n, b = 0, f = g = i), p = i
				}
				_()
			}

			function Eo(t) {
				const e = t.options,
					i = e.borderDash && e.borderDash.length;
				return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? Lo : To
			}
			Oo.id = "arc", Oo.defaults = {
				borderAlign: "center",
				borderColor: "#fff",
				borderRadius: 0,
				borderWidth: 2,
				offset: 0,
				spacing: 0,
				angle: void 0
			}, Oo.defaultRoutes = {
				backgroundColor: "backgroundColor"
			};
			const Ro = "function" == typeof Path2D;

			function zo(t, e, i, n) {
				Ro && 1 === e.segments.length ? function(t, e, i, n) {
					let o = e._path;
					o || (o = e._path = new Path2D, e.path(o, i, n) && o.closePath()), Do(t, e.options), t.stroke(o)
				}(t, e, i, n) : function(t, e, i, n) {
					const {
						segments: o,
						options: s
					} = e, a = Eo(e);
					for (const r of o) Do(t, s, r.style), t.beginPath(), a(t, e, r, {
						start: i,
						end: i + n - 1
					}) && t.closePath(), t.stroke()
				}(t, e, i, n)
			}
			class Fo extends In {
				constructor(t) {
					super(), this.animated = !0, this.options = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t)
				}
				updateControlPoints(t, e) {
					const i = this,
						n = i.options;
					if ((n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped && !i._pointsUpdated) {
						const o = n.spanGaps ? i._loop : i._fullLoop;
						We(i._points, n, t, o, e), i._pointsUpdated = !0
					}
				}
				set points(t) {
					this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
				}
				get points() {
					return this._points
				}
				get segments() {
					return this._segments || (this._segments = function(t, e) {
						const i = t.points,
							n = t.options.spanGaps,
							o = i.length;
						if (!o) return [];
						const s = !!t._loop,
							{
								start: a,
								end: r
							} = function(t, e, i, n) {
								let o = 0,
									s = e - 1;
								if (i && !n)
									for (; o < e && !t[o].skip;) o++;
								for (; o < e && t[o].skip;) o++;
								for (o %= e, i && (s += o); s > o && t[s % e].skip;) s--;
								return {
									start: o,
									end: s %= e
								}
							}(i, o, s, n);
						return pi(t, !0 === n ? [{
							start: a,
							end: r,
							loop: s
						}] : function(t, e, i, n) {
							const o = t.length,
								s = [];
							let a, r = e,
								l = t[e];
							for (a = e + 1; a <= i; ++a) {
								const i = t[a % o];
								i.skip || i.stop ? l.skip || (n = !1, s.push({
									start: e % o,
									end: (a - 1) % o,
									loop: n
								}), e = r = i.stop ? a : null) : (r = a, l.skip && (e = a)), l = i
							}
							return null !== r && s.push({
								start: e % o,
								end: r % o,
								loop: n
							}), s
						}(i, a, r < a ? r + o : r, !!t._fullLoop && 0 === a && r === o - 1), i, e)
					}(this, this.options.segment))
				}
				first() {
					const t = this.segments,
						e = this.points;
					return t.length && e[t[0].start]
				}
				last() {
					const t = this.segments,
						e = this.points,
						i = t.length;
					return i && e[t[i - 1].end]
				}
				interpolate(t, e) {
					const i = this.options,
						n = t[e],
						o = this.points,
						s = gi(this, {
							property: e,
							start: n,
							end: n
						});
					if (!s.length) return;
					const a = [],
						r = function(t) {
							return t.stepped ? ii : t.tension || "monotone" === t.cubicInterpolationMode ? ni : ei
						}(i);
					let l, c;
					for (l = 0, c = s.length; l < c; ++l) {
						const {
							start: c,
							end: h
						} = s[l], d = o[c], u = o[h];
						if (d === u) {
							a.push(d);
							continue
						}
						const f = r(d, u, Math.abs((n - d[e]) / (u[e] - d[e])), i.stepped);
						f[e] = t[e], a.push(f)
					}
					return 1 === a.length ? a[0] : a
				}
				pathSegment(t, e, i) {
					return Eo(this)(t, this, e, i)
				}
				path(t, e, i) {
					const n = this,
						o = n.segments,
						s = Eo(n);
					let a = n._loop;
					e = e || 0, i = i || n.points.length - e;
					for (const r of o) a &= s(t, n, r, {
						start: e,
						end: e + i - 1
					});
					return !!a
				}
				draw(t, e, i, n) {
					const o = this,
						s = o.options || {};
					(o.points || []).length && s.borderWidth && (t.save(), zo(t, o, i, n), t.restore(), o.animated && (o._pointsUpdated = !1, o._path = void 0))
				}
			}

			function Io(t, e, i, n) {
				const o = t.options,
					{
						[i]: s
					} = t.getProps([i], n);
				return Math.abs(e - s) < o.radius + o.hitRadius
			}
			Fo.id = "line", Fo.defaults = {
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0,
				borderJoinStyle: "miter",
				borderWidth: 3,
				capBezierPoints: !0,
				cubicInterpolationMode: "default",
				fill: !1,
				spanGaps: !1,
				stepped: !1,
				tension: 0
			}, Fo.defaultRoutes = {
				backgroundColor: "backgroundColor",
				borderColor: "borderColor"
			}, Fo.descriptors = {
				_scriptable: !0,
				_indexable: t => "borderDash" !== t && "fill" !== t
			};
			class Vo extends In {
				constructor(t) {
					super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
				}
				inRange(t, e, i) {
					const n = this.options,
						{
							x: o,
							y: s
						} = this.getProps(["x", "y"], i);
					return Math.pow(t - o, 2) + Math.pow(e - s, 2) < Math.pow(n.hitRadius + n.radius, 2)
				}
				inXRange(t, e) {
					return Io(this, t, "x", e)
				}
				inYRange(t, e) {
					return Io(this, t, "y", e)
				}
				getCenterPoint(t) {
					const {
						x: e,
						y: i
					} = this.getProps(["x", "y"], t);
					return {
						x: e,
						y: i
					}
				}
				size(t) {
					let e = (t = t || this.options || {}).radius || 0;
					return 2 * ((e = Math.max(e, e && t.hoverRadius || 0)) + (e && t.borderWidth || 0))
				}
				draw(t, e) {
					const i = this,
						n = i.options;
					i.skip || n.radius < .1 || !Qt(i, e, i.size(n) / 2) || (t.strokeStyle = n.borderColor, t.lineWidth = n.borderWidth, t.fillStyle = n.backgroundColor, Zt(t, n, i.x, i.y))
				}
				getRange() {
					const t = this.options || {};
					return t.radius + t.hitRadius
				}
			}

			function jo(t, e) {
				const {
					x: i,
					y: n,
					base: o,
					width: s,
					height: a
				} = t.getProps(["x", "y", "base", "width", "height"], e);
				let r, l, c, h, d;
				return t.horizontal ? (d = a / 2, r = Math.min(i, o), l = Math.max(i, o), c = n - d, h = n + d) : (r = i - (d = s / 2), l = i + d, c = Math.min(n, o), h = Math.max(n, o)), {
					left: r,
					top: c,
					right: l,
					bottom: h
				}
			}

			function Bo(t, e, i, n) {
				return t ? 0 : it(e, i, n)
			}

			function Wo(t) {
				const e = jo(t),
					i = e.right - e.left,
					n = e.bottom - e.top,
					o = function(t, e, i) {
						const n = t.options.borderWidth,
							o = t.borderSkipped,
							s = de(n);
						return {
							t: Bo(o.top, s.top, 0, i),
							r: Bo(o.right, s.right, 0, e),
							b: Bo(o.bottom, s.bottom, 0, i),
							l: Bo(o.left, s.left, 0, e)
						}
					}(t, i / 2, n / 2),
					s = function(t, e, i) {
						const {
							enableBorderRadius: n
						} = t.getProps(["enableBorderRadius"]), o = t.options.borderRadius, s = ue(o), a = Math.min(e, i), r = t.borderSkipped, l = n || u(o);
						return {
							topLeft: Bo(!l || r.top || r.left, s.topLeft, 0, a),
							topRight: Bo(!l || r.top || r.right, s.topRight, 0, a),
							bottomLeft: Bo(!l || r.bottom || r.left, s.bottomLeft, 0, a),
							bottomRight: Bo(!l || r.bottom || r.right, s.bottomRight, 0, a)
						}
					}(t, i / 2, n / 2);
				return {
					outer: {
						x: e.left,
						y: e.top,
						w: i,
						h: n,
						radius: s
					},
					inner: {
						x: e.left + o.l,
						y: e.top + o.t,
						w: i - o.l - o.r,
						h: n - o.t - o.b,
						radius: {
							topLeft: Math.max(0, s.topLeft - Math.max(o.t, o.l)),
							topRight: Math.max(0, s.topRight - Math.max(o.t, o.r)),
							bottomLeft: Math.max(0, s.bottomLeft - Math.max(o.b, o.l)),
							bottomRight: Math.max(0, s.bottomRight - Math.max(o.b, o.r))
						}
					}
				}
			}

			function No(t, e, i, n) {
				const o = null === e,
					s = null === i,
					a = t && !(o && s) && jo(t, n);
				return a && (o || e >= a.left && e <= a.right) && (s || i >= a.top && i <= a.bottom)
			}

			function Ho(t, e) {
				t.rect(e.x, e.y, e.w, e.h)
			}

			function $o(t, e, i = {}) {
				const n = t.x !== i.x ? -e : 0,
					o = t.y !== i.y ? -e : 0,
					s = (t.x + t.w !== i.x + i.w ? e : 0) - n,
					a = (t.y + t.h !== i.y + i.h ? e : 0) - o;
				return {
					x: t.x + n,
					y: t.y + o,
					w: t.w + s,
					h: t.h + a,
					radius: t.radius
				}
			}
			Vo.id = "point", Vo.defaults = {
				borderWidth: 1,
				hitRadius: 1,
				hoverBorderWidth: 1,
				hoverRadius: 4,
				pointStyle: "circle",
				radius: 3,
				rotation: 0
			}, Vo.defaultRoutes = {
				backgroundColor: "backgroundColor",
				borderColor: "borderColor"
			};
			class Yo extends In {
				constructor(t) {
					super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, t && Object.assign(this, t)
				}
				draw(t) {
					const e = this.options,
						{
							inner: i,
							outer: n
						} = Wo(this),
						o = (s = n.radius).topLeft || s.topRight || s.bottomLeft || s.bottomRight ? se : Ho;
					var s;
					t.save(), n.w === i.w && n.h === i.h || (t.beginPath(), o(t, $o(n, .33, i)), t.clip(), o(t, $o(i, -.33, n)), t.fillStyle = e.borderColor, t.fill("evenodd")), t.beginPath(), o(t, $o(i, .33, n)), t.fillStyle = e.backgroundColor, t.fill(), t.restore()
				}
				inRange(t, e, i) {
					return No(this, t, e, i)
				}
				inXRange(t, e) {
					return No(this, t, null, e)
				}
				inYRange(t, e) {
					return No(this, null, t, e)
				}
				getCenterPoint(t) {
					const {
						x: e,
						y: i,
						base: n,
						horizontal: o
					} = this.getProps(["x", "y", "base", "horizontal"], t);
					return {
						x: o ? (e + n) / 2 : e,
						y: o ? i : (i + n) / 2
					}
				}
				getRange(t) {
					return "x" === t ? this.width / 2 : this.height / 2
				}
			}
			Yo.id = "bar", Yo.defaults = {
				borderSkipped: "start",
				borderWidth: 0,
				borderRadius: 0,
				enableBorderRadius: !0,
				pointStyle: void 0
			}, Yo.defaultRoutes = {
				backgroundColor: "backgroundColor",
				borderColor: "borderColor"
			};
			var Uo = Object.freeze({
				__proto__: null,
				ArcElement: Oo,
				LineElement: Fo,
				PointElement: Vo,
				BarElement: Yo
			});

			function Xo(t) {
				if (t._decimated) {
					const e = t._data;
					delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
						value: e
					})
				}
			}

			function Ko(t) {
				t.data.datasets.forEach(t => {
					Xo(t)
				})
			}
			var qo = {
				id: "decimation",
				defaults: {
					algorithm: "min-max",
					enabled: !1
				},
				beforeElementsUpdate: (t, e, i) => {
					if (!i.enabled) return void Ko(t);
					const n = t.width;
					t.data.datasets.forEach((e, o) => {
						const {
							_data: s,
							indexAxis: a
						} = e, r = t.getDatasetMeta(o), l = s || e.data;
						if ("y" === pe([a, t.options.indexAxis])) return;
						if ("line" !== r.type) return;
						const c = t.scales[r.xAxisID];
						if ("linear" !== c.type && "time" !== c.type) return;
						if (t.options.parsing) return;
						let {
							start: d,
							count: u
						} = function(t, e) {
							const i = e.length;
							let n, o = 0;
							const {
								iScale: s
							} = t, {
								min: a,
								max: r,
								minDefined: l,
								maxDefined: c
							} = s.getUserBounds();
							return l && (o = it(be(e, s.axis, a).lo, 0, i - 1)), {
								start: o,
								count: n = c ? it(be(e, s.axis, r).hi + 1, o, i) - o : i - o
							}
						}(r, l);
						if (u <= (i.threshold || 4 * n)) return void Xo(e);
						let f;
						switch (h(s) && (e._data = l, delete e.data, Object.defineProperty(e, "data", {
							configurable: !0,
							enumerable: !0,
							get: function() {
								return this._decimated
							},
							set: function(t) {
								this._data = t
							}
						})), i.algorithm) {
							case "lttb":
								f = function(t, e, i, n, o) {
									const s = o.samples || n;
									if (s >= i) return t.slice(e, e + i);
									const a = [],
										r = (i - 2) / (s - 2);
									let l = 0;
									const c = e + i - 1;
									let h, d, u, f, g, p = e;
									for (a[l++] = t[p], h = 0; h < s - 2; h++) {
										let n, o = 0,
											s = 0;
										const c = Math.floor((h + 1) * r) + 1 + e,
											m = Math.min(Math.floor((h + 2) * r) + 1, i) + e,
											b = m - c;
										for (n = c; n < m; n++) o += t[n].x, s += t[n].y;
										o /= b, s /= b;
										const x = Math.floor(h * r) + 1 + e,
											_ = Math.min(Math.floor((h + 1) * r) + 1, i) + e,
											{
												x: y,
												y: v
											} = t[p];
										for (u = f = -1, n = x; n < _; n++)(f = .5 * Math.abs((y - o) * (t[n].y - v) - (y - t[n].x) * (s - v))) > u && (u = f, d = t[n], g = n);
										a[l++] = d, p = g
									}
									return a[l++] = t[c], a
								}(l, d, u, n, i);
								break;
							case "min-max":
								f = function(t, e, i, n) {
									let o, s, a, r, l, c, d, u, f, g, p = 0,
										m = 0;
									const b = [],
										x = e + i - 1,
										_ = t[e].x,
										y = t[x].x - _;
									for (o = e; o < e + i; ++o) {
										a = ((s = t[o]).x - _) / y * n, r = s.y;
										const e = 0 | a;
										if (e === l) r < f ? (f = r, c = o) : r > g && (g = r, d = o), p = (m * p + s.x) / ++m;
										else {
											const i = o - 1;
											if (!h(c) && !h(d)) {
												const e = Math.min(c, d),
													n = Math.max(c, d);
												e !== u && e !== i && b.push({
													...t[e],
													x: p
												}), n !== u && n !== i && b.push({
													...t[n],
													x: p
												})
											}
											o > 0 && i !== u && b.push(t[i]), b.push(s), l = e, m = 0, f = g = r, c = d = u = o
										}
									}
									return b
								}(l, d, u, n);
								break;
							default:
								throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)
						}
						e._decimated = f
					})
				},
				destroy(t) {
					Ko(t)
				}
			};

			function Go(t, e, i) {
				const n = function(t) {
					const e = t.options,
						i = e.fill;
					let n = p(i && i.target, i);
					return void 0 === n && (n = !!e.backgroundColor), !1 !== n && null !== n && (!0 === n ? "origin" : n)
				}(t);
				if (u(n)) return !isNaN(n.value) && n;
				let o = parseFloat(n);
				return f(o) && Math.floor(o) === o ? ("-" !== n[0] && "+" !== n[0] || (o = e + o), !(o === e || o < 0 || o >= i) && o) : ["origin", "start", "end", "stack", "shape"].indexOf(n) >= 0 && n
			}
			class Zo {
				constructor(t) {
					this.x = t.x, this.y = t.y, this.radius = t.radius
				}
				pathSegment(t, e, i) {
					const {
						x: n,
						y: o,
						radius: s
					} = this;
					return e = e || {
						start: 0,
						end: F
					}, t.arc(n, o, s, e.end, e.start, !0), !i.bounds
				}
				interpolate(t) {
					const {
						x: e,
						y: i,
						radius: n
					} = this, o = t.angle;
					return {
						x: e + Math.cos(o) * n,
						y: i + Math.sin(o) * n,
						angle: o
					}
				}
			}

			function Qo(t) {
				return (t.scale || {}).getPointPositionForValue ? function(t) {
					const {
						scale: e,
						fill: i
					} = t, n = e.options, o = e.getLabels().length, s = [], a = n.reverse ? e.max : e.min, r = n.reverse ? e.min : e.max;
					let l, c, h;
					if (h = "start" === i ? a : "end" === i ? r : u(i) ? i.value : e.getBaseValue(), n.grid.circular) return c = e.getPointPositionForValue(0, a), new Zo({
						x: c.x,
						y: c.y,
						radius: e.getDistanceFromCenterForValue(h)
					});
					for (l = 0; l < o; ++l) s.push(e.getPointPositionForValue(l, h));
					return s
				}(t) : function(t) {
					const {
						scale: e = {},
						fill: i
					} = t;
					let n, o = null;
					return "start" === i ? o = e.bottom : "end" === i ? o = e.top : u(i) ? o = e.getPixelForValue(i.value) : e.getBasePixel && (o = e.getBasePixel()), f(o) ? {
						x: (n = e.isHorizontal()) ? o : null,
						y: n ? null : o
					} : null
				}(t)
			}

			function Jo(t, e, i) {
				for (; e > t; e--) {
					const t = i[e];
					if (!isNaN(t.x) && !isNaN(t.y)) break
				}
				return e
			}

			function ts(t) {
				const {
					chart: e,
					scale: i,
					index: n,
					line: o
				} = t, s = [], a = o.segments, r = o.points, l = function(t, e) {
					const i = [],
						n = t.getSortedVisibleDatasetMetas();
					for (let o = 0; o < n.length; o++) {
						const t = n[o];
						if (t.index === e) break;
						es(t) && i.unshift(t.dataset)
					}
					return i
				}(e, n);
				l.push(os({
					x: null,
					y: i.bottom
				}, o));
				for (let c = 0; c < a.length; c++) {
					const t = a[c];
					for (let e = t.start; e <= t.end; e++) is(s, r[e], l)
				}
				return new Fo({
					points: s,
					options: {}
				})
			}
			const es = t => "line" === t.type && !t.hidden;

			function is(t, e, i) {
				const n = [];
				for (let o = 0; o < i.length; o++) {
					const s = i[o],
						{
							first: a,
							last: r,
							point: l
						} = ns(s, e, "x");
					if (!(!l || a && r))
						if (a) n.unshift(l);
						else if (t.push(l), !r) break
				}
				t.push(...n)
			}

			function ns(t, e, i) {
				const n = t.interpolate(e, i);
				if (!n) return {};
				const o = n[i],
					s = t.segments,
					a = t.points;
				let r = !1,
					l = !1;
				for (let c = 0; c < s.length; c++) {
					const t = s[c],
						e = a[t.start][i],
						n = a[t.end][i];
					if (o >= e && o <= n) {
						r = o === e, l = o === n;
						break
					}
				}
				return {
					first: r,
					last: l,
					point: n
				}
			}

			function os(t, e) {
				let i = [],
					n = !1;
				return d(t) ? (n = !0, i = t) : i = function(t, e) {
					const {
						x: i = null,
						y: n = null
					} = t || {}, o = e.points, s = [];
					return e.segments.forEach(({
						start: t,
						end: e
					}) => {
						e = Jo(t, e, o);
						const a = o[t],
							r = o[e];
						null !== n ? (s.push({
							x: a.x,
							y: n
						}), s.push({
							x: r.x,
							y: n
						})) : null !== i && (s.push({
							x: i,
							y: a.y
						}), s.push({
							x: i,
							y: r.y
						}))
					}), s
				}(t, e), i.length ? new Fo({
					points: i,
					options: {
						tension: 0
					},
					_loop: n,
					_fullLoop: n
				}) : null
			}

			function ss(t, e, i) {
				let n = t[e].fill;
				const o = [e];
				let s;
				if (!i) return n;
				for (; !1 !== n && -1 === o.indexOf(n);) {
					if (!f(n)) return n;
					if (!(s = t[n])) return !1;
					if (s.visible) return n;
					o.push(n), n = s.fill
				}
				return !1
			}

			function as(t, e, i) {
				t.beginPath(), e.path(t), t.lineTo(e.last().x, i), t.lineTo(e.first().x, i), t.closePath(), t.clip()
			}

			function rs(t, e, i, n) {
				if (n) return;
				let o = e[t],
					s = i[t];
				return "angle" === t && (o = tt(o), s = tt(s)), {
					property: t,
					start: o,
					end: s
				}
			}

			function ls(t, e, i, n) {
				return t && e ? n(t[i], e[i]) : t ? t[i] : e ? e[i] : 0
			}

			function cs(t, e, i) {
				const {
					top: n,
					bottom: o
				} = e.chart.chartArea, {
					property: s,
					start: a,
					end: r
				} = i || {};
				"x" === s && (t.beginPath(), t.rect(a, n, r - a, o - n), t.clip())
			}

			function hs(t, e, i, n) {
				const o = e.interpolate(i, n);
				o && t.lineTo(o.x, o.y)
			}

			function ds(t, e) {
				const {
					line: i,
					target: n,
					property: o,
					color: s,
					scale: a
				} = e, r = function(t, e, i) {
					const n = t.segments,
						o = t.points,
						s = e.points,
						a = [];
					for (const r of n) {
						let {
							start: t,
							end: n
						} = r;
						n = Jo(t, n, o);
						const l = rs(i, o[t], o[n], r.loop);
						if (!e.segments) {
							a.push({
								source: r,
								target: l,
								start: o[t],
								end: o[n]
							});
							continue
						}
						const c = gi(e, l);
						for (const e of c) {
							const t = rs(i, s[e.start], s[e.end], e.loop),
								n = fi(r, o, t);
							for (const o of n) a.push({
								source: o,
								target: e,
								start: {
									[i]: ls(l, t, "start", Math.max)
								},
								end: {
									[i]: ls(l, t, "end", Math.min)
								}
							})
						}
					}
					return a
				}(i, n, o);
				for (const {
						source: l,
						target: c,
						start: h,
						end: d
					} of r) {
					const {
						style: {
							backgroundColor: e = s
						} = {}
					} = l, r = !0 !== n;
					t.save(), t.fillStyle = e, cs(t, a, r && rs(o, h, d)), t.beginPath();
					const u = !!i.pathSegment(t, l);
					let f;
					if (r) {
						u ? t.closePath() : hs(t, n, d, o);
						const e = !!n.pathSegment(t, c, {
							move: u,
							reverse: !0
						});
						(f = u && e) || hs(t, n, h, o)
					}
					t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore()
				}
			}

			function us(t, e, i) {
				const n = function(t) {
						const {
							chart: e,
							fill: i,
							line: n
						} = t;
						if (f(i)) return function(t, e) {
							const i = t.getDatasetMeta(e);
							return i && t.isDatasetVisible(e) ? i.dataset : null
						}(e, i);
						if ("stack" === i) return ts(t);
						if ("shape" === i) return !0;
						const o = Qo(t);
						return o instanceof Zo ? o : os(o, n)
					}(e),
					{
						line: o,
						scale: s,
						axis: a
					} = e,
					r = o.options,
					l = r.fill,
					c = r.backgroundColor,
					{
						above: h = c,
						below: d = c
					} = l || {};
				n && o.points.length && (Jt(t, i), function(t, e) {
					const {
						line: i,
						target: n,
						above: o,
						below: s,
						area: a,
						scale: r
					} = e, l = i._loop ? "angle" : e.axis;
					t.save(), "x" === l && s !== o && (as(t, n, a.top), ds(t, {
						line: i,
						target: n,
						color: o,
						scale: r,
						property: l
					}), t.restore(), t.save(), as(t, n, a.bottom)), ds(t, {
						line: i,
						target: n,
						color: s,
						scale: r,
						property: l
					}), t.restore()
				}(t, {
					line: o,
					target: n,
					above: h,
					below: d,
					area: i,
					scale: s,
					axis: a
				}), te(t))
			}
			var fs = {
				id: "filler",
				afterDatasetsUpdate(t, e, i) {
					const n = (t.data.datasets || []).length,
						o = [];
					let s, a, r, l;
					for (a = 0; a < n; ++a) l = null, (r = (s = t.getDatasetMeta(a)).dataset) && r.options && r instanceof Fo && (l = {
						visible: t.isDatasetVisible(a),
						index: a,
						fill: Go(r, a, n),
						chart: t,
						axis: s.controller.options.indexAxis,
						scale: s.vScale,
						line: r
					}), s.$filler = l, o.push(l);
					for (a = 0; a < n; ++a)(l = o[a]) && !1 !== l.fill && (l.fill = ss(o, a, i.propagate))
				},
				beforeDraw(t, e, i) {
					const n = "beforeDraw" === i.drawTime,
						o = t.getSortedVisibleDatasetMetas(),
						s = t.chartArea;
					for (let a = o.length - 1; a >= 0; --a) {
						const e = o[a].$filler;
						e && (e.line.updateControlPoints(s, e.axis), n && us(t.ctx, e, s))
					}
				},
				beforeDatasetsDraw(t, e, i) {
					if ("beforeDatasetsDraw" !== i.drawTime) return;
					const n = t.getSortedVisibleDatasetMetas();
					for (let o = n.length - 1; o >= 0; --o) {
						const e = n[o].$filler;
						e && us(t.ctx, e, t.chartArea)
					}
				},
				beforeDatasetDraw(t, e, i) {
					const n = e.meta.$filler;
					n && !1 !== n.fill && "beforeDatasetDraw" === i.drawTime && us(t.ctx, n, t.chartArea)
				},
				defaults: {
					propagate: !0,
					drawTime: "beforeDatasetDraw"
				}
			};
			const gs = (t, e) => {
					let {
						boxHeight: i = e,
						boxWidth: n = e
					} = t;
					return t.usePointStyle && (i = Math.min(i, e), n = Math.min(n, e)), {
						boxWidth: n,
						boxHeight: i,
						itemHeight: Math.max(e, i)
					}
				},
				ps = (t, e) => null !== t && null !== e && t.datasetIndex === e.datasetIndex && t.index === e.index;
			class ms extends In {
				constructor(t) {
					super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
				}
				update(t, e, i) {
					const n = this;
					n.maxWidth = t, n.maxHeight = e, n._margins = i, n.setDimensions(), n.buildLabels(), n.fit()
				}
				setDimensions() {
					const t = this;
					t.isHorizontal() ? (t.width = t.maxWidth, t.left = t._margins.left, t.right = t.width) : (t.height = t.maxHeight, t.top = t._margins.top, t.bottom = t.height)
				}
				buildLabels() {
					const t = this,
						e = t.options.labels || {};
					let i = x(e.generateLabels, [t.chart], t) || [];
					e.filter && (i = i.filter(i => e.filter(i, t.chart.data))), e.sort && (i = i.sort((i, n) => e.sort(i, n, t.chart.data))), t.options.reverse && i.reverse(), t.legendItems = i
				}
				fit() {
					const t = this,
						{
							options: e,
							ctx: i
						} = t;
					if (!e.display) return void(t.width = t.height = 0);
					const n = e.labels,
						o = ge(n.font),
						s = o.size,
						a = t._computeTitleHeight(),
						{
							boxWidth: r,
							itemHeight: l
						} = gs(n, s);
					let c, h;
					i.font = o.string, t.isHorizontal() ? (c = t.maxWidth, h = t._fitRows(a, s, r, l) + 10) : (h = t.maxHeight, c = t._fitCols(a, s, r, l) + 10), t.width = Math.min(c, e.maxWidth || t.maxWidth), t.height = Math.min(h, e.maxHeight || t.maxHeight)
				}
				_fitRows(t, e, i, n) {
					const {
						ctx: o,
						maxWidth: s,
						options: {
							labels: {
								padding: a
							}
						}
					} = this, r = this.legendHitBoxes = [], l = this.lineWidths = [0], c = n + a;
					let h = t;
					o.textAlign = "left", o.textBaseline = "middle";
					let d = -1,
						u = -c;
					return this.legendItems.forEach((t, f) => {
						const g = i + e / 2 + o.measureText(t.text).width;
						(0 === f || l[l.length - 1] + g + 2 * a > s) && (h += c, l[l.length - (f > 0 ? 0 : 1)] = 0, u += c, d++), r[f] = {
							left: 0,
							top: u,
							row: d,
							width: g,
							height: n
						}, l[l.length - 1] += g + a
					}), h
				}
				_fitCols(t, e, i, n) {
					const {
						ctx: o,
						maxHeight: s,
						options: {
							labels: {
								padding: a
							}
						}
					} = this, r = this.legendHitBoxes = [], l = this.columnSizes = [], c = s - t;
					let h = a,
						d = 0,
						u = 0,
						f = 0,
						g = 0;
					return this.legendItems.forEach((t, s) => {
						const p = i + e / 2 + o.measureText(t.text).width;
						s > 0 && u + n + 2 * a > c && (h += d + a, l.push({
							width: d,
							height: u
						}), f += d + a, g++, d = u = 0), r[s] = {
							left: f,
							top: u,
							col: g,
							width: p,
							height: n
						}, d = Math.max(d, p), u += n + a
					}), h += d, l.push({
						width: d,
						height: u
					}), h
				}
				adjustHitBoxes() {
					const t = this;
					if (!t.options.display) return;
					const e = t._computeTitleHeight(),
						{
							legendHitBoxes: i,
							options: {
								align: n,
								labels: {
									padding: o
								},
								rtl: s
							}
						} = t,
						r = li(s, t.left, t.width);
					if (this.isHorizontal()) {
						let s = 0,
							l = a(n, t.left + o, t.right - t.lineWidths[s]);
						for (const c of i) s !== c.row && (s = c.row, l = a(n, t.left + o, t.right - t.lineWidths[s])), c.top += t.top + e + o, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + o
					} else {
						let s = 0,
							l = a(n, t.top + e + o, t.bottom - t.columnSizes[s].height);
						for (const c of i) c.col !== s && (s = c.col, l = a(n, t.top + e + o, t.bottom - t.columnSizes[s].height)), c.top = l, c.left += t.left + o, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + o
					}
				}
				isHorizontal() {
					return "top" === this.options.position || "bottom" === this.options.position
				}
				draw() {
					const t = this;
					if (t.options.display) {
						const e = t.ctx;
						Jt(e, t), t._draw(), te(e)
					}
				}
				_draw() {
					const t = this,
						{
							options: e,
							columnSizes: i,
							lineWidths: n,
							ctx: o
						} = t,
						{
							align: s,
							labels: l
						} = e,
						c = Ut.color,
						h = li(e.rtl, t.left, t.width),
						d = ge(l.font),
						{
							color: u,
							padding: f
						} = l,
						g = d.size,
						m = g / 2;
					let b;
					t.drawTitle(), o.textAlign = h.textAlign("left"), o.textBaseline = "middle", o.lineWidth = .5, o.font = d.string;
					const {
						boxWidth: x,
						boxHeight: _,
						itemHeight: y
					} = gs(l, g), v = t.isHorizontal(), w = this._computeTitleHeight();
					b = v ? {
						x: a(s, t.left + f, t.right - n[0]),
						y: t.top + f + w,
						line: 0
					} : {
						x: t.left + f,
						y: a(s, t.top + w + f, t.bottom - i[0].height),
						line: 0
					}, ci(t.ctx, e.textDirection);
					const M = y + f;
					t.legendItems.forEach((k, S) => {
						o.strokeStyle = k.fontColor || u, o.fillStyle = k.fontColor || u;
						const P = o.measureText(k.text).width,
							O = h.textAlign(k.textAlign || (k.textAlign = l.textAlign)),
							D = x + m + P;
						let C = b.x,
							A = b.y;
						h.setWidth(t.width), v ? S > 0 && C + D + f > t.right && (A = b.y += M, b.line++, C = b.x = a(s, t.left + f, t.right - n[b.line])) : S > 0 && A + M > t.bottom && (C = b.x = C + i[b.line].width + f, b.line++, A = b.y = a(s, t.top + w + f, t.bottom - i[b.line].height)),
							function(t, e, i) {
								if (isNaN(x) || x <= 0 || isNaN(_) || _ < 0) return;
								o.save();
								const n = p(i.lineWidth, 1);
								if (o.fillStyle = p(i.fillStyle, c), o.lineCap = p(i.lineCap, "butt"), o.lineDashOffset = p(i.lineDashOffset, 0), o.lineJoin = p(i.lineJoin, "miter"), o.lineWidth = n, o.strokeStyle = p(i.strokeStyle, c), o.setLineDash(p(i.lineDash, [])), l.usePointStyle) {
									const s = {
											radius: x * Math.SQRT2 / 2,
											pointStyle: i.pointStyle,
											rotation: i.rotation,
											borderWidth: n
										},
										a = h.xPlus(t, x / 2);
									Zt(o, s, a, e + m)
								} else {
									const s = e + Math.max((g - _) / 2, 0),
										a = h.leftForLtr(t, x),
										r = ue(i.borderRadius);
									o.beginPath(), Object.values(r).some(t => 0 !== t) ? se(o, {
										x: a,
										y: s,
										w: x,
										h: _,
										radius: r
									}) : o.rect(a, s, x, _), o.fill(), 0 !== n && o.stroke()
								}
								o.restore()
							}(h.x(C), A, k), C = r(O, C + x + m, v ? C + D : t.right, e.rtl),
							function(t, e, i) {
								ne(o, i.text, t, e + y / 2, d, {
									strikethrough: i.hidden,
									textAlign: h.textAlign(i.textAlign)
								})
							}(h.x(C), A, k), v ? b.x += D + f : b.y += M
					}), hi(t.ctx, e.textDirection)
				}
				drawTitle() {
					const t = this,
						e = t.options,
						i = e.title,
						n = ge(i.font),
						o = fe(i.padding);
					if (!i.display) return;
					const r = li(e.rtl, t.left, t.width),
						l = t.ctx,
						c = i.position,
						h = n.size / 2,
						d = o.top + h;
					let u, f = t.left,
						g = t.width;
					if (this.isHorizontal()) g = Math.max(...t.lineWidths), u = t.top + d, f = a(e.align, f, t.right - g);
					else {
						const i = t.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
						u = d + a(e.align, t.top, t.bottom - i - e.labels.padding - t._computeTitleHeight())
					}
					const p = a(c, f, f + g);
					l.textAlign = r.textAlign(s(c)), l.textBaseline = "middle", l.strokeStyle = i.color, l.fillStyle = i.color, l.font = n.string, ne(l, i.text, p, u, n)
				}
				_computeTitleHeight() {
					const t = this.options.title,
						e = ge(t.font),
						i = fe(t.padding);
					return t.display ? e.lineHeight + i.height : 0
				}
				_getLegendItemAt(t, e) {
					const i = this;
					let n, o, s;
					if (t >= i.left && t <= i.right && e >= i.top && e <= i.bottom)
						for (s = i.legendHitBoxes, n = 0; n < s.length; ++n)
							if (t >= (o = s[n]).left && t <= o.left + o.width && e >= o.top && e <= o.top + o.height) return i.legendItems[n];
					return null
				}
				handleEvent(t) {
					const e = this,
						i = e.options;
					if (! function(t, e) {
							if ("mousemove" === t && (e.onHover || e.onLeave)) return !0;
							if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
							return !1
						}(t.type, i)) return;
					const n = e._getLegendItemAt(t.x, t.y);
					if ("mousemove" === t.type) {
						const o = e._hoveredItem,
							s = ps(o, n);
						o && !s && x(i.onLeave, [t, o, e], e), e._hoveredItem = n, n && !s && x(i.onHover, [t, n, e], e)
					} else n && x(i.onClick, [t, n, e], e)
				}
			}
			var bs = {
				id: "legend",
				_element: ms,
				start(t, e, i) {
					const n = t.legend = new ms({
						ctx: t.ctx,
						options: i,
						chart: t
					});
					yn.configure(t, n, i), yn.addBox(t, n)
				},
				stop(t) {
					yn.removeBox(t, t.legend), delete t.legend
				},
				beforeUpdate(t, e, i) {
					const n = t.legend;
					yn.configure(t, n, i), n.options = i
				},
				afterUpdate(t) {
					const e = t.legend;
					e.buildLabels(), e.adjustHitBoxes()
				},
				afterEvent(t, e) {
					e.replay || t.legend.handleEvent(e.event)
				},
				defaults: {
					display: !0,
					position: "top",
					align: "center",
					fullSize: !0,
					reverse: !1,
					weight: 1e3,
					onClick(t, e, i) {
						const n = e.datasetIndex,
							o = i.chart;
						o.isDatasetVisible(n) ? (o.hide(n), e.hidden = !0) : (o.show(n), e.hidden = !1)
					},
					onHover: null,
					onLeave: null,
					labels: {
						color: t => t.chart.options.color,
						boxWidth: 40,
						padding: 10,
						generateLabels(t) {
							const e = t.data.datasets,
								{
									labels: {
										usePointStyle: i,
										pointStyle: n,
										textAlign: o,
										color: s
									}
								} = t.legend.options;
							return t._getSortedDatasetMetas().map(t => {
								const a = t.controller.getStyle(i ? 0 : void 0),
									r = fe(a.borderWidth);
								return {
									text: e[t.index].label,
									fillStyle: a.backgroundColor,
									fontColor: s,
									hidden: !t.visible,
									lineCap: a.borderCapStyle,
									lineDash: a.borderDash,
									lineDashOffset: a.borderDashOffset,
									lineJoin: a.borderJoinStyle,
									lineWidth: (r.width + r.height) / 4,
									strokeStyle: a.borderColor,
									pointStyle: n || a.pointStyle,
									rotation: a.rotation,
									textAlign: o || a.textAlign,
									borderRadius: 0,
									datasetIndex: t.index
								}
							}, this)
						}
					},
					title: {
						color: t => t.chart.options.color,
						display: !1,
						position: "center",
						text: ""
					}
				},
				descriptors: {
					_scriptable: t => !t.startsWith("on"),
					labels: {
						_scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
					}
				}
			};
			class xs extends In {
				constructor(t) {
					super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
				}
				update(t, e) {
					const i = this,
						n = i.options;
					if (i.left = 0, i.top = 0, !n.display) return void(i.width = i.height = i.right = i.bottom = 0);
					i.width = i.right = t, i.height = i.bottom = e;
					const o = d(n.text) ? n.text.length : 1;
					i._padding = fe(n.padding);
					const s = o * ge(n.font).lineHeight + i._padding.height;
					i.isHorizontal() ? i.height = s : i.width = s
				}
				isHorizontal() {
					const t = this.options.position;
					return "top" === t || "bottom" === t
				}
				_drawArgs(t) {
					const {
						top: e,
						left: i,
						bottom: n,
						right: o,
						options: s
					} = this, r = s.align;
					let l, c, h, d = 0;
					return this.isHorizontal() ? (c = a(r, i, o), h = e + t, l = o - i) : ("left" === s.position ? (c = i + t, h = a(r, n, e), d = -.5 * z) : (c = o - t, h = a(r, e, n), d = .5 * z), l = n - e), {
						titleX: c,
						titleY: h,
						maxWidth: l,
						rotation: d
					}
				}
				draw() {
					const t = this.ctx,
						e = this.options;
					if (!e.display) return;
					const i = ge(e.font),
						n = i.lineHeight / 2 + this._padding.top,
						{
							titleX: o,
							titleY: a,
							maxWidth: r,
							rotation: l
						} = this._drawArgs(n);
					ne(t, e.text, 0, 0, i, {
						color: e.color,
						maxWidth: r,
						rotation: l,
						textAlign: s(e.align),
						textBaseline: "middle",
						translation: [o, a]
					})
				}
			}
			var _s = {
				id: "title",
				_element: xs,
				start(t, e, i) {
					! function(t, e) {
						const i = new xs({
							ctx: t.ctx,
							options: e,
							chart: t
						});
						yn.configure(t, i, e), yn.addBox(t, i), t.titleBlock = i
					}(t, i)
				},
				stop(t) {
					const e = t.titleBlock;
					yn.removeBox(t, e), delete t.titleBlock
				},
				beforeUpdate(t, e, i) {
					const n = t.titleBlock;
					yn.configure(t, n, i), n.options = i
				},
				defaults: {
					align: "center",
					display: !1,
					font: {
						weight: "bold"
					},
					fullSize: !0,
					padding: 10,
					position: "top",
					text: "",
					weight: 2e3
				},
				defaultRoutes: {
					color: "color"
				},
				descriptors: {
					_scriptable: !0,
					_indexable: !1
				}
			};
			const ys = new WeakMap;
			var vs = {
				id: "subtitle",
				start(t, e, i) {
					const n = new xs({
						ctx: t.ctx,
						options: i,
						chart: t
					});
					yn.configure(t, n, i), yn.addBox(t, n), ys.set(t, n)
				},
				stop(t) {
					yn.removeBox(t, ys.get(t)), ys.delete(t)
				},
				beforeUpdate(t, e, i) {
					const n = ys.get(t);
					yn.configure(t, n, i), n.options = i
				},
				defaults: {
					align: "center",
					display: !1,
					font: {
						weight: "normal"
					},
					fullSize: !0,
					padding: 0,
					position: "top",
					text: "",
					weight: 1500
				},
				defaultRoutes: {
					color: "color"
				},
				descriptors: {
					_scriptable: !0,
					_indexable: !1
				}
			};
			const ws = {
				average(t) {
					if (!t.length) return !1;
					let e, i, n = 0,
						o = 0,
						s = 0;
					for (e = 0, i = t.length; e < i; ++e) {
						const i = t[e].element;
						if (i && i.hasValue()) {
							const t = i.tooltipPosition();
							n += t.x, o += t.y, ++s
						}
					}
					return {
						x: n / s,
						y: o / s
					}
				},
				nearest(t, e) {
					if (!t.length) return !1;
					let i, n, o, s = e.x,
						a = e.y,
						r = Number.POSITIVE_INFINITY;
					for (i = 0, n = t.length; i < n; ++i) {
						const n = t[i].element;
						if (n && n.hasValue()) {
							const t = Q(e, n.getCenterPoint());
							t < r && (r = t, o = n)
						}
					}
					if (o) {
						const t = o.tooltipPosition();
						s = t.x, a = t.y
					}
					return {
						x: s,
						y: a
					}
				}
			};

			function Ms(t, e) {
				return e && (d(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
			}

			function ks(t) {
				return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
			}

			function Ss(t, e) {
				const {
					element: i,
					datasetIndex: n,
					index: o
				} = e, s = t.getDatasetMeta(n).controller, {
					label: a,
					value: r
				} = s.getLabelAndValue(o);
				return {
					chart: t,
					label: a,
					parsed: s.getParsed(o),
					raw: t.data.datasets[n].data[o],
					formattedValue: r,
					dataset: s.getDataset(),
					dataIndex: o,
					datasetIndex: n,
					element: i
				}
			}

			function Ps(t, e) {
				const i = t._chart.ctx,
					{
						body: n,
						footer: o,
						title: s
					} = t,
					{
						boxWidth: a,
						boxHeight: r
					} = e,
					l = ge(e.bodyFont),
					c = ge(e.titleFont),
					h = ge(e.footerFont),
					d = s.length,
					u = o.length,
					f = n.length,
					g = fe(e.padding);
				let p = g.height,
					m = 0,
					b = n.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
				if (b += t.beforeBody.length + t.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), b) {
					p += f * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (b - f) * l.lineHeight + (b - 1) * e.bodySpacing
				}
				u && (p += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing);
				let x = 0;
				const y = function(t) {
					m = Math.max(m, i.measureText(t).width + x)
				};
				return i.save(), i.font = c.string, _(t.title, y), i.font = l.string, _(t.beforeBody.concat(t.afterBody), y), x = e.displayColors ? a + 2 : 0, _(n, t => {
					_(t.before, y), _(t.lines, y), _(t.after, y)
				}), x = 0, i.font = h.string, _(t.footer, y), i.restore(), {
					width: m += g.width,
					height: p
				}
			}

			function Os(t, e, i, n) {
				const {
					x: o,
					width: s
				} = i, {
					width: a,
					chartArea: {
						left: r,
						right: l
					}
				} = t;
				let c = "center";
				return "center" === n ? c = o <= (r + l) / 2 ? "left" : "right" : o <= s / 2 ? c = "left" : o >= a - s / 2 && (c = "right"),
					function(t, e, i, n) {
						const {
							x: o,
							width: s
						} = n, a = i.caretSize + i.caretPadding;
						return "left" === t && o + s + a > e.width || ("right" === t && o - s - a < 0 || void 0)
					}(c, t, e, i) && (c = "center"), c
			}

			function Ds(t, e, i) {
				const n = e.yAlign || function(t, e) {
					const {
						y: i,
						height: n
					} = e;
					return i < n / 2 ? "top" : i > t.height - n / 2 ? "bottom" : "center"
				}(t, i);
				return {
					xAlign: e.xAlign || Os(t, e, i, n),
					yAlign: n
				}
			}

			function Cs(t, e, i, n) {
				const {
					caretSize: o,
					caretPadding: s,
					cornerRadius: a
				} = t, {
					xAlign: r,
					yAlign: l
				} = i, c = o + s, h = a + s;
				let d = function(t, e) {
					let {
						x: i,
						width: n
					} = t;
					return "right" === e ? i -= n : "center" === e && (i -= n / 2), i
				}(e, r);
				const u = function(t, e, i) {
					let {
						y: n,
						height: o
					} = t;
					return "top" === e ? n += i : n -= "bottom" === e ? o + i : o / 2, n
				}(e, l, c);
				return "center" === l ? "left" === r ? d += c : "right" === r && (d -= c) : "left" === r ? d -= h : "right" === r && (d += h), {
					x: it(d, 0, n.width - e.width),
					y: it(u, 0, n.height - e.height)
				}
			}

			function As(t, e, i) {
				const n = fe(i.padding);
				return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - n.right : t.x + n.left
			}

			function Ts(t) {
				return Ms([], ks(t))
			}

			function Ls(t, e) {
				const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
				return i ? t.override(i) : t
			}
			class Es extends In {
				constructor(t) {
					super(), this.opacity = 0, this._active = [], this._chart = t._chart, this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
				}
				initialize(t) {
					this.options = t, this._cachedAnimations = void 0, this.$context = void 0
				}
				_resolveAnimations() {
					const t = this,
						e = t._cachedAnimations;
					if (e) return e;
					const i = t._chart,
						n = t.options.setContext(t.getContext()),
						o = n.enabled && i.options.animation && n.animations,
						s = new wi(t._chart, o);
					return o._cacheable && (t._cachedAnimations = Object.freeze(s)), s
				}
				getContext() {
					const t = this;
					return t.$context || (t.$context = (e = t._chart.getContext(), i = t, n = t._tooltipItems, Object.assign(Object.create(e), {
						tooltip: i,
						tooltipItems: n,
						type: "tooltip"
					})));
					var e, i, n
				}
				getTitle(t, e) {
					const {
						callbacks: i
					} = e, n = i.beforeTitle.apply(this, [t]), o = i.title.apply(this, [t]), s = i.afterTitle.apply(this, [t]);
					let a = [];
					return a = Ms(a, ks(n)), a = Ms(a, ks(o)), a = Ms(a, ks(s))
				}
				getBeforeBody(t, e) {
					return Ts(e.callbacks.beforeBody.apply(this, [t]))
				}
				getBody(t, e) {
					const i = this,
						{
							callbacks: n
						} = e,
						o = [];
					return _(t, t => {
						const e = {
								before: [],
								lines: [],
								after: []
							},
							s = Ls(n, t);
						Ms(e.before, ks(s.beforeLabel.call(i, t))), Ms(e.lines, s.label.call(i, t)), Ms(e.after, ks(s.afterLabel.call(i, t))), o.push(e)
					}), o
				}
				getAfterBody(t, e) {
					return Ts(e.callbacks.afterBody.apply(this, [t]))
				}
				getFooter(t, e) {
					const {
						callbacks: i
					} = e, n = i.beforeFooter.apply(this, [t]), o = i.footer.apply(this, [t]), s = i.afterFooter.apply(this, [t]);
					let a = [];
					return a = Ms(a, ks(n)), a = Ms(a, ks(o)), a = Ms(a, ks(s))
				}
				_createItems(t) {
					const e = this,
						i = e._active,
						n = e._chart.data,
						o = [],
						s = [],
						a = [];
					let r, l, c = [];
					for (r = 0, l = i.length; r < l; ++r) c.push(Ss(e._chart, i[r]));
					return t.filter && (c = c.filter((e, i, o) => t.filter(e, i, o, n))), t.itemSort && (c = c.sort((e, i) => t.itemSort(e, i, n))), _(c, i => {
						const n = Ls(t.callbacks, i);
						o.push(n.labelColor.call(e, i)), s.push(n.labelPointStyle.call(e, i)), a.push(n.labelTextColor.call(e, i))
					}), e.labelColors = o, e.labelPointStyles = s, e.labelTextColors = a, e.dataPoints = c, c
				}
				update(t, e) {
					const i = this,
						n = i.options.setContext(i.getContext()),
						o = i._active;
					let s, a = [];
					if (o.length) {
						const t = ws[n.position].call(i, o, i._eventPosition);
						a = i._createItems(n), i.title = i.getTitle(a, n), i.beforeBody = i.getBeforeBody(a, n), i.body = i.getBody(a, n), i.afterBody = i.getAfterBody(a, n), i.footer = i.getFooter(a, n);
						const e = i._size = Ps(i, n),
							r = Object.assign({}, t, e),
							l = Ds(i._chart, n, r),
							c = Cs(n, r, l, i._chart);
						i.xAlign = l.xAlign, i.yAlign = l.yAlign, s = {
							opacity: 1,
							x: c.x,
							y: c.y,
							width: e.width,
							height: e.height,
							caretX: t.x,
							caretY: t.y
						}
					} else 0 !== i.opacity && (s = {
						opacity: 0
					});
					i._tooltipItems = a, i.$context = void 0, s && i._resolveAnimations().update(i, s), t && n.external && n.external.call(i, {
						chart: i._chart,
						tooltip: i,
						replay: e
					})
				}
				drawCaret(t, e, i, n) {
					const o = this.getCaretPosition(t, i, n);
					e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
				}
				getCaretPosition(t, e, i) {
					const {
						xAlign: n,
						yAlign: o
					} = this, {
						cornerRadius: s,
						caretSize: a
					} = i, {
						x: r,
						y: l
					} = t, {
						width: c,
						height: h
					} = e;
					let d, u, f, g, p, m;
					return "center" === o ? (p = l + h / 2, "left" === n ? (u = (d = r) - a, g = p + a, m = p - a) : (u = (d = r + c) + a, g = p - a, m = p + a), f = d) : (u = "left" === n ? r + s + a : "right" === n ? r + c - s - a : this.caretX, "top" === o ? (p = (g = l) - a, d = u - a, f = u + a) : (p = (g = l + h) + a, d = u + a, f = u - a), m = g), {
						x1: d,
						x2: u,
						x3: f,
						y1: g,
						y2: p,
						y3: m
					}
				}
				drawTitle(t, e, i) {
					const n = this,
						o = n.title,
						s = o.length;
					let a, r, l;
					if (s) {
						const c = li(i.rtl, n.x, n.width);
						for (t.x = As(n, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", a = ge(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, l = 0; l < s; ++l) e.fillText(o[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === s && (t.y += i.titleMarginBottom - r)
					}
				}
				_drawColorBox(t, e, i, n, o) {
					const s = this.labelColors[i],
						a = this.labelPointStyles[i],
						{
							boxHeight: r,
							boxWidth: l
						} = o,
						c = ge(o.bodyFont),
						h = As(this, "left", o),
						d = n.x(h),
						u = r < c.lineHeight ? (c.lineHeight - r) / 2 : 0,
						f = e.y + u;
					if (o.usePointStyle) {
						const e = {
								radius: Math.min(l, r) / 2,
								pointStyle: a.pointStyle,
								rotation: a.rotation,
								borderWidth: 1
							},
							i = n.leftForLtr(d, l) + l / 2,
							c = f + r / 2;
						t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Zt(t, e, i, c), t.strokeStyle = s.borderColor, t.fillStyle = s.backgroundColor, Zt(t, e, i, c)
					} else {
						t.lineWidth = s.borderWidth || 1, t.strokeStyle = s.borderColor, t.setLineDash(s.borderDash || []), t.lineDashOffset = s.borderDashOffset || 0;
						const e = n.leftForLtr(d, l),
							i = n.leftForLtr(n.xPlus(d, 1), l - 2),
							a = ue(s.borderRadius);
						Object.values(a).some(t => 0 !== t) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, se(t, {
							x: e,
							y: f,
							w: l,
							h: r,
							radius: a
						}), t.fill(), t.stroke(), t.fillStyle = s.backgroundColor, t.beginPath(), se(t, {
							x: i,
							y: f + 1,
							w: l - 2,
							h: r - 2,
							radius: a
						}), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(e, f, l, r), t.strokeRect(e, f, l, r), t.fillStyle = s.backgroundColor, t.fillRect(i, f + 1, l - 2, r - 2))
					}
					t.fillStyle = this.labelTextColors[i]
				}
				drawBody(t, e, i) {
					const n = this,
						{
							body: o
						} = n,
						{
							bodySpacing: s,
							bodyAlign: a,
							displayColors: r,
							boxHeight: l,
							boxWidth: c
						} = i,
						h = ge(i.bodyFont);
					let d = h.lineHeight,
						u = 0;
					const f = li(i.rtl, n.x, n.width),
						g = function(i) {
							e.fillText(i, f.x(t.x + u), t.y + d / 2), t.y += d + s
						},
						p = f.textAlign(a);
					let m, b, x, y, v, w, M;
					for (e.textAlign = a, e.textBaseline = "middle", e.font = h.string, t.x = As(n, p, i), e.fillStyle = i.bodyColor, _(n.beforeBody, g), u = r && "right" !== p ? "center" === a ? c / 2 + 1 : c + 2 : 0, y = 0, w = o.length; y < w; ++y) {
						for (m = o[y], b = n.labelTextColors[y], e.fillStyle = b, _(m.before, g), x = m.lines, r && x.length && (n._drawColorBox(e, t, y, f, i), d = Math.max(h.lineHeight, l)), v = 0, M = x.length; v < M; ++v) g(x[v]), d = h.lineHeight;
						_(m.after, g)
					}
					u = 0, d = h.lineHeight, _(n.afterBody, g), t.y -= s
				}
				drawFooter(t, e, i) {
					const n = this,
						o = n.footer,
						s = o.length;
					let a, r;
					if (s) {
						const l = li(i.rtl, n.x, n.width);
						for (t.x = As(n, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", a = ge(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < s; ++r) e.fillText(o[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing
					}
				}
				drawBackground(t, e, i, n) {
					const {
						xAlign: o,
						yAlign: s
					} = this, {
						x: a,
						y: r
					} = t, {
						width: l,
						height: c
					} = i, h = n.cornerRadius;
					e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + h, r), "top" === s && this.drawCaret(t, e, i, n), e.lineTo(a + l - h, r), e.quadraticCurveTo(a + l, r, a + l, r + h), "center" === s && "right" === o && this.drawCaret(t, e, i, n), e.lineTo(a + l, r + c - h), e.quadraticCurveTo(a + l, r + c, a + l - h, r + c), "bottom" === s && this.drawCaret(t, e, i, n), e.lineTo(a + h, r + c), e.quadraticCurveTo(a, r + c, a, r + c - h), "center" === s && "left" === o && this.drawCaret(t, e, i, n), e.lineTo(a, r + h), e.quadraticCurveTo(a, r, a + h, r), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke()
				}
				_updateAnimationTarget(t) {
					const e = this,
						i = e._chart,
						n = e.$animations,
						o = n && n.x,
						s = n && n.y;
					if (o || s) {
						const n = ws[t.position].call(e, e._active, e._eventPosition);
						if (!n) return;
						const a = e._size = Ps(e, t),
							r = Object.assign({}, n, e._size),
							l = Ds(i, t, r),
							c = Cs(t, r, l, i);
						o._to === c.x && s._to === c.y || (e.xAlign = l.xAlign, e.yAlign = l.yAlign, e.width = a.width, e.height = a.height, e.caretX = n.x, e.caretY = n.y, e._resolveAnimations().update(e, c))
					}
				}
				draw(t) {
					const e = this,
						i = e.options.setContext(e.getContext());
					let n = e.opacity;
					if (!n) return;
					e._updateAnimationTarget(i);
					const o = {
							width: e.width,
							height: e.height
						},
						s = {
							x: e.x,
							y: e.y
						};
					n = Math.abs(n) < .001 ? 0 : n;
					const a = fe(i.padding),
						r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
					i.enabled && r && (t.save(), t.globalAlpha = n, e.drawBackground(s, t, o, i), ci(t, i.textDirection), s.y += a.top, e.drawTitle(s, t, i), e.drawBody(s, t, i), e.drawFooter(s, t, i), hi(t, i.textDirection), t.restore())
				}
				getActiveElements() {
					return this._active || []
				}
				setActiveElements(t, e) {
					const i = this,
						n = i._active,
						o = t.map(({
							datasetIndex: t,
							index: e
						}) => {
							const n = i._chart.getDatasetMeta(t);
							if (!n) throw new Error("Cannot find a dataset at index " + t);
							return {
								datasetIndex: t,
								element: n.data[e],
								index: e
							}
						}),
						s = !y(n, o),
						a = i._positionChanged(o, e);
					(s || a) && (i._active = o, i._eventPosition = e, i.update(!0))
				}
				handleEvent(t, e) {
					const i = this,
						n = i.options,
						o = i._active || [];
					let s = !1,
						a = [];
					"mouseout" !== t.type && (a = i._chart.getElementsAtEventForMode(t, n.mode, n, e), n.reverse && a.reverse());
					const r = i._positionChanged(a, t);
					return (s = e || !y(a, o) || r) && (i._active = a, (n.enabled || n.external) && (i._eventPosition = {
						x: t.x,
						y: t.y
					}, i.update(!0, e))), s
				}
				_positionChanged(t, e) {
					const {
						caretX: i,
						caretY: n,
						options: o
					} = this, s = ws[o.position].call(this, t, e);
					return !1 !== s && (i !== s.x || n !== s.y)
				}
			}
			Es.positioners = ws;
			var Rs = {
					id: "tooltip",
					_element: Es,
					positioners: ws,
					afterInit(t, e, i) {
						i && (t.tooltip = new Es({
							_chart: t,
							options: i
						}))
					},
					beforeUpdate(t, e, i) {
						t.tooltip && t.tooltip.initialize(i)
					},
					reset(t, e, i) {
						t.tooltip && t.tooltip.initialize(i)
					},
					afterDraw(t) {
						const e = t.tooltip,
							i = {
								tooltip: e
							};
						!1 !== t.notifyPlugins("beforeTooltipDraw", i) && (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i))
					},
					afterEvent(t, e) {
						if (t.tooltip) {
							const i = e.replay;
							t.tooltip.handleEvent(e.event, i) && (e.changed = !0)
						}
					},
					defaults: {
						enabled: !0,
						external: null,
						position: "average",
						backgroundColor: "rgba(0,0,0,0.8)",
						titleColor: "#fff",
						titleFont: {
							weight: "bold"
						},
						titleSpacing: 2,
						titleMarginBottom: 6,
						titleAlign: "left",
						bodyColor: "#fff",
						bodySpacing: 2,
						bodyFont: {},
						bodyAlign: "left",
						footerColor: "#fff",
						footerSpacing: 2,
						footerMarginTop: 6,
						footerFont: {
							weight: "bold"
						},
						footerAlign: "left",
						padding: 6,
						caretPadding: 2,
						caretSize: 5,
						cornerRadius: 6,
						boxHeight: (t, e) => e.bodyFont.size,
						boxWidth: (t, e) => e.bodyFont.size,
						multiKeyBackground: "#fff",
						displayColors: !0,
						borderColor: "rgba(0,0,0,0)",
						borderWidth: 0,
						animation: {
							duration: 400,
							easing: "easeOutQuart"
						},
						animations: {
							numbers: {
								type: "number",
								properties: ["x", "y", "width", "height", "caretX", "caretY"]
							},
							opacity: {
								easing: "linear",
								duration: 200
							}
						},
						callbacks: {
							beforeTitle: l,
							title(t) {
								if (t.length > 0) {
									const e = t[0],
										i = e.chart.data.labels,
										n = i ? i.length : 0;
									if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
									if (e.label) return e.label;
									if (n > 0 && e.dataIndex < n) return i[e.dataIndex]
								}
								return ""
							},
							afterTitle: l,
							beforeBody: l,
							beforeLabel: l,
							label(t) {
								if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
								let e = t.dataset.label || "";
								e && (e += ": ");
								const i = t.formattedValue;
								return h(i) || (e += i), e
							},
							labelColor(t) {
								const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
								return {
									borderColor: e.borderColor,
									backgroundColor: e.backgroundColor,
									borderWidth: e.borderWidth,
									borderDash: e.borderDash,
									borderDashOffset: e.borderDashOffset,
									borderRadius: 0
								}
							},
							labelTextColor() {
								return this.options.bodyColor
							},
							labelPointStyle(t) {
								const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
								return {
									pointStyle: e.pointStyle,
									rotation: e.rotation
								}
							},
							afterLabel: l,
							afterBody: l,
							beforeFooter: l,
							footer: l,
							afterFooter: l
						}
					},
					defaultRoutes: {
						bodyFont: "font",
						footerFont: "font",
						titleFont: "font"
					},
					descriptors: {
						_scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
						_indexable: !1,
						callbacks: {
							_scriptable: !1,
							_indexable: !1
						},
						animation: {
							_fallback: !1
						},
						animations: {
							_fallback: "animation"
						}
					},
					additionalOptionScopes: ["interaction"]
				},
				zs = Object.freeze({
					__proto__: null,
					Decimation: qo,
					Filler: fs,
					Legend: bs,
					SubTitle: vs,
					Title: _s,
					Tooltip: Rs
				});
			const Fs = (t, e, i) => "string" == typeof e ? t.push(e) - 1 : isNaN(e) ? null : i;
			const Is = (t, e) => null === t ? null : it(Math.round(t), 0, e);
			class Vs extends qn {
				constructor(t) {
					super(t), this._startValue = void 0, this._valueRange = 0
				}
				parse(t, e) {
					if (h(t)) return null;
					const i = this.getLabels();
					return e = isFinite(e) && i[e] === t ? e : function(t, e, i) {
						const n = t.indexOf(e);
						return -1 === n ? Fs(t, e, i) : n !== t.lastIndexOf(e) ? i : n
					}(i, t, p(e, t)), Is(e, i.length - 1)
				}
				determineDataLimits() {
					const t = this,
						{
							minDefined: e,
							maxDefined: i
						} = t.getUserBounds();
					let {
						min: n,
						max: o
					} = t.getMinMax(!0);
					"ticks" === t.options.bounds && (e || (n = 0), i || (o = t.getLabels().length - 1)), t.min = n, t.max = o
				}
				buildTicks() {
					const t = this,
						e = t.min,
						i = t.max,
						n = t.options.offset,
						o = [];
					let s = t.getLabels();
					s = 0 === e && i === s.length - 1 ? s : s.slice(e, i + 1), t._valueRange = Math.max(s.length - (n ? 0 : 1), 1), t._startValue = t.min - (n ? .5 : 0);
					for (let a = e; a <= i; a++) o.push({
						value: a
					});
					return o
				}
				getLabelForValue(t) {
					const e = this.getLabels();
					return t >= 0 && t < e.length ? e[t] : t
				}
				configure() {
					const t = this;
					super.configure(), t.isHorizontal() || (t._reversePixels = !t._reversePixels)
				}
				getPixelForValue(t) {
					const e = this;
					return "number" != typeof t && (t = e.parse(t)), null === t ? NaN : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
				}
				getPixelForTick(t) {
					const e = this.ticks;
					return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
				}
				getValueForPixel(t) {
					return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
				}
				getBasePixel() {
					return this.bottom
				}
			}

			function js(t, e) {
				const i = [],
					{
						bounds: n,
						step: o,
						min: s,
						max: a,
						precision: r,
						count: l,
						maxTicks: c,
						maxDigits: d,
						includeBounds: u
					} = t,
					f = o || 1,
					g = c - 1,
					{
						min: p,
						max: m
					} = e,
					b = !h(s),
					x = !h(a),
					_ = !h(l),
					y = (m - p) / (d + 1);
				let v, w, M, k, S = Y((m - p) / g / f) * f;
				if (S < 1e-14 && !b && !x) return [{
					value: p
				}, {
					value: m
				}];
				(k = Math.ceil(m / S) - Math.floor(p / S)) > g && (S = Y(k * S / g / f) * f), h(r) || (v = Math.pow(10, r), S = Math.ceil(S * v) / v), "ticks" === n ? (w = Math.floor(p / S) * S, M = Math.ceil(m / S) * S) : (w = p, M = m), b && x && o && function(t, e) {
					const i = Math.round(t);
					return i - e <= t && i + e >= t
				}((a - s) / o, S / 1e3) ? (S = (a - s) / (k = Math.round(Math.min((a - s) / S, c))), w = s, M = a) : _ ? S = ((M = x ? a : M) - (w = b ? s : w)) / (k = l - 1) : k = X(k = (M - w) / S, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k);
				const P = Math.max(Z(S), Z(w));
				v = Math.pow(10, h(r) ? P : r), w = Math.round(w * v) / v, M = Math.round(M * v) / v;
				let O = 0;
				for (b && (u && w !== s ? (i.push({
						value: s
					}), w < s && O++, X(Math.round((w + O * S) * v) / v, s, Bs(s, y, t)) && O++) : w < s && O++); O < k; ++O) i.push({
					value: Math.round((w + O * S) * v) / v
				});
				return x && u && M !== a ? X(i[i.length - 1].value, a, Bs(a, y, t)) ? i[i.length - 1].value = a : i.push({
					value: a
				}) : x && M !== a || i.push({
					value: M
				}), i
			}

			function Bs(t, e, {
				horizontal: i,
				minRotation: n
			}) {
				const o = q(n),
					s = (i ? Math.sin(o) : Math.cos(o)) || .001,
					a = .75 * e * ("" + t).length;
				return Math.min(e / s, a)
			}
			Vs.id = "category", Vs.defaults = {
				ticks: {
					callback: Vs.prototype.getLabelForValue
				}
			};
			class Ws extends qn {
				constructor(t) {
					super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
				}
				parse(t, e) {
					return h(t) ? null : ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
				}
				handleTickRangeOptions() {
					const t = this,
						{
							beginAtZero: e
						} = t.options,
						{
							minDefined: i,
							maxDefined: n
						} = t.getUserBounds();
					let {
						min: o,
						max: s
					} = t;
					const a = t => o = i ? o : t,
						r = t => s = n ? s : t;
					if (e) {
						const t = $(o),
							e = $(s);
						t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && a(0)
					}
					if (o === s) {
						let t = 1;
						(s >= Number.MAX_SAFE_INTEGER || o <= Number.MIN_SAFE_INTEGER) && (t = Math.abs(.05 * s)), r(s + t), e || a(o - t)
					}
					t.min = o, t.max = s
				}
				getTickLimit() {
					const t = this,
						e = t.options.ticks;
					let i, {
						maxTicksLimit: n,
						stepSize: o
					} = e;
					return o ? i = Math.ceil(t.max / o) - Math.floor(t.min / o) + 1 : (i = t.computeTickLimit(), n = n || 11), n && (i = Math.min(n, i)), i
				}
				computeTickLimit() {
					return Number.POSITIVE_INFINITY
				}
				buildTicks() {
					const t = this,
						e = t.options,
						i = e.ticks;
					let n = t.getTickLimit();
					const o = js({
						maxTicks: n = Math.max(2, n),
						bounds: e.bounds,
						min: e.min,
						max: e.max,
						precision: i.precision,
						step: i.stepSize,
						count: i.count,
						maxDigits: t._maxDigits(),
						horizontal: t.isHorizontal(),
						minRotation: i.minRotation || 0,
						includeBounds: !1 !== i.includeBounds
					}, t._range || t);
					return "ticks" === e.bounds && K(o, t, "value"), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), o
				}
				configure() {
					const t = this,
						e = t.ticks;
					let i = t.min,
						n = t.max;
					if (super.configure(), t.options.offset && e.length) {
						const t = (n - i) / Math.max(e.length - 1, 1) / 2;
						i -= t, n += t
					}
					t._startValue = i, t._endValue = n, t._valueRange = n - i
				}
				getLabelForValue(t) {
					return si(t, this.chart.options.locale)
				}
			}
			class Ns extends Ws {
				determineDataLimits() {
					const {
						min: t,
						max: e
					} = this.getMinMax(!0);
					this.min = f(t) ? t : 0, this.max = f(e) ? e : 1, this.handleTickRangeOptions()
				}
				computeTickLimit() {
					const t = this,
						e = t.isHorizontal(),
						i = e ? t.width : t.height,
						n = q(t.options.ticks.minRotation),
						o = (e ? Math.sin(n) : Math.cos(n)) || .001,
						s = t._resolveTickFontOptions(0);
					return Math.ceil(i / Math.min(40, s.lineHeight / o))
				}
				getPixelForValue(t) {
					return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
				}
				getValueForPixel(t) {
					return this._startValue + this.getDecimalForPixel(t) * this._valueRange
				}
			}

			function Hs(t) {
				return 1 === t / Math.pow(10, Math.floor(H(t)))
			}
			Ns.id = "linear", Ns.defaults = {
				ticks: {
					callback: jn.formatters.numeric
				}
			};
			class $s extends qn {
				constructor(t) {
					super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
				}
				parse(t, e) {
					const i = Ws.prototype.parse.apply(this, [t, e]);
					if (0 !== i) return f(i) && i > 0 ? i : null;
					this._zero = !0
				}
				determineDataLimits() {
					const t = this,
						{
							min: e,
							max: i
						} = t.getMinMax(!0);
					t.min = f(e) ? Math.max(0, e) : null, t.max = f(i) ? Math.max(0, i) : null, t.options.beginAtZero && (t._zero = !0), t.handleTickRangeOptions()
				}
				handleTickRangeOptions() {
					const t = this,
						{
							minDefined: e,
							maxDefined: i
						} = t.getUserBounds();
					let n = t.min,
						o = t.max;
					const s = t => n = e ? n : t,
						a = t => o = i ? o : t,
						r = (t, e) => Math.pow(10, Math.floor(H(t)) + e);
					n === o && (n <= 0 ? (s(1), a(10)) : (s(r(n, -1)), a(r(o, 1)))), n <= 0 && s(r(o, -1)), o <= 0 && a(r(n, 1)), t._zero && t.min !== t._suggestedMin && n === r(t.min, 0) && s(r(n, -1)), t.min = n, t.max = o
				}
				buildTicks() {
					const t = this,
						e = t.options,
						i = function(t, e) {
							const i = Math.floor(H(e.max)),
								n = Math.ceil(e.max / Math.pow(10, i)),
								o = [];
							let s = g(t.min, Math.pow(10, Math.floor(H(e.min)))),
								a = Math.floor(H(s)),
								r = Math.floor(s / Math.pow(10, a)),
								l = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
							do {
								o.push({
									value: s,
									major: Hs(s)
								}), 10 === ++r && (r = 1, l = ++a >= 0 ? 1 : l), s = Math.round(r * Math.pow(10, a) * l) / l
							} while (a < i || a === i && r < n);
							const c = g(t.max, s);
							return o.push({
								value: c,
								major: Hs(s)
							}), o
						}({
							min: t._userMin,
							max: t._userMax
						}, t);
					return "ticks" === e.bounds && K(i, t, "value"), e.reverse ? (i.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i
				}
				getLabelForValue(t) {
					return void 0 === t ? "0" : si(t, this.chart.options.locale)
				}
				configure() {
					const t = this.min;
					super.configure(), this._startValue = H(t), this._valueRange = H(this.max) - H(t)
				}
				getPixelForValue(t) {
					const e = this;
					return void 0 !== t && 0 !== t || (t = e.min), null === t || isNaN(t) ? NaN : e.getPixelForDecimal(t === e.min ? 0 : (H(t) - e._startValue) / e._valueRange)
				}
				getValueForPixel(t) {
					const e = this.getDecimalForPixel(t);
					return Math.pow(10, this._startValue + e * this._valueRange)
				}
			}

			function Ys(t) {
				const e = t.ticks;
				if (e.display && t.display) {
					const t = fe(e.backdropPadding);
					return p(e.font && e.font.size, Ut.font.size) + t.height
				}
				return 0
			}

			function Us(t, e, i, n, o) {
				return t === n || t === o ? {
					start: e - i / 2,
					end: e + i / 2
				} : t < n || t > o ? {
					start: e - i,
					end: e
				} : {
					start: e,
					end: e + i
				}
			}

			function Xs(t) {
				const e = {
						l: 0,
						r: t.width,
						t: 0,
						b: t.height - t.paddingTop
					},
					i = {},
					n = [],
					o = [],
					s = t.getLabels().length;
				for (let c = 0; c < s; c++) {
					const s = t.options.pointLabels.setContext(t.getPointLabelContext(c));
					o[c] = s.padding;
					const h = t.getPointPosition(c, t.drawingArea + o[c]),
						u = ge(s.font),
						f = (a = t.ctx, r = u, l = d(l = t._pointLabels[c]) ? l : [l], {
							w: Kt(a, r.string, l),
							h: l.length * r.lineHeight
						});
					n[c] = f;
					const g = t.getIndexAngle(c),
						p = G(g),
						m = Us(p, h.x, f.w, 0, 180),
						b = Us(p, h.y, f.h, 90, 270);
					m.start < e.l && (e.l = m.start, i.l = g), m.end > e.r && (e.r = m.end, i.r = g), b.start < e.t && (e.t = b.start, i.t = g), b.end > e.b && (e.b = b.end, i.b = g)
				}
				var a, r, l;
				t._setReductions(t.drawingArea, e, i), t._pointLabelItems = function(t, e, i) {
					const n = [],
						o = t.getLabels().length,
						s = t.options,
						a = Ys(s),
						r = t.getDistanceFromCenterForValue(s.ticks.reverse ? t.min : t.max);
					for (let l = 0; l < o; l++) {
						const o = 0 === l ? a / 2 : 0,
							s = t.getPointPosition(l, r + o + i[l]),
							c = G(t.getIndexAngle(l)),
							h = e[l],
							d = Gs(s.y, h.h, c),
							u = Ks(c),
							f = qs(s.x, h.w, u);
						n.push({
							x: s.x,
							y: d,
							textAlign: u,
							left: f,
							top: d,
							right: f + h.w,
							bottom: d + h.h
						})
					}
					return n
				}(t, n, o)
			}

			function Ks(t) {
				return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
			}

			function qs(t, e, i) {
				return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
			}

			function Gs(t, e, i) {
				return 90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e), t
			}

			function Zs(t, e, i, n) {
				const {
					ctx: o
				} = t;
				if (i) o.arc(t.xCenter, t.yCenter, e, 0, F);
				else {
					let i = t.getPointPosition(0, e);
					o.moveTo(i.x, i.y);
					for (let s = 1; s < n; s++) i = t.getPointPosition(s, e), o.lineTo(i.x, i.y)
				}
			}

			function Qs(t) {
				return U(t) ? t : 0
			}
			$s.id = "logarithmic", $s.defaults = {
				ticks: {
					callback: jn.formatters.logarithmic,
					major: {
						enabled: !0
					}
				}
			};
			class Js extends Ws {
				constructor(t) {
					super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
				}
				setDimensions() {
					const t = this;
					t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Ys(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
				}
				determineDataLimits() {
					const {
						min: t,
						max: e
					} = this.getMinMax(!1);
					this.min = f(t) && !isNaN(t) ? t : 0, this.max = f(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
				}
				computeTickLimit() {
					return Math.ceil(this.drawingArea / Ys(this.options))
				}
				generateTickLabels(t) {
					const e = this;
					Ws.prototype.generateTickLabels.call(e, t), e._pointLabels = e.getLabels().map((t, i) => {
						const n = x(e.options.pointLabels.callback, [t, i], e);
						return n || 0 === n ? n : ""
					})
				}
				fit() {
					const t = this,
						e = t.options;
					e.display && e.pointLabels.display ? Xs(t) : t.setCenterPoint(0, 0, 0, 0)
				}
				_setReductions(t, e, i) {
					const n = this;
					let o = e.l / Math.sin(i.l),
						s = Math.max(e.r - n.width, 0) / Math.sin(i.r),
						a = -e.t / Math.cos(i.t),
						r = -Math.max(e.b - (n.height - n.paddingTop), 0) / Math.cos(i.b);
					o = Qs(o), s = Qs(s), a = Qs(a), r = Qs(r), n.drawingArea = Math.max(t / 2, Math.min(Math.floor(t - (o + s) / 2), Math.floor(t - (a + r) / 2))), n.setCenterPoint(o, s, a, r)
				}
				setCenterPoint(t, e, i, n) {
					const o = this,
						s = o.width - e - o.drawingArea,
						a = t + o.drawingArea,
						r = i + o.drawingArea,
						l = o.height - o.paddingTop - n - o.drawingArea;
					o.xCenter = Math.floor((a + s) / 2 + o.left), o.yCenter = Math.floor((r + l) / 2 + o.top + o.paddingTop)
				}
				getIndexAngle(t) {
					return tt(t * (F / this.getLabels().length) + q(this.options.startAngle || 0))
				}
				getDistanceFromCenterForValue(t) {
					const e = this;
					if (h(t)) return NaN;
					const i = e.drawingArea / (e.max - e.min);
					return e.options.reverse ? (e.max - t) * i : (t - e.min) * i
				}
				getValueForDistanceFromCenter(t) {
					if (h(t)) return NaN;
					const e = this,
						i = t / (e.drawingArea / (e.max - e.min));
					return e.options.reverse ? e.max - i : e.min + i
				}
				getPointLabelContext(t) {
					const e = this,
						i = e._pointLabels || [];
					if (t >= 0 && t < i.length) {
						const n = i[t];
						return function(t, e, i) {
							return Object.assign(Object.create(t), {
								label: i,
								index: e,
								type: "pointLabel"
							})
						}(e.getContext(), t, n)
					}
				}
				getPointPosition(t, e) {
					const i = this.getIndexAngle(t) - B;
					return {
						x: Math.cos(i) * e + this.xCenter,
						y: Math.sin(i) * e + this.yCenter,
						angle: i
					}
				}
				getPointPositionForValue(t, e) {
					return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
				}
				getBasePosition(t) {
					return this.getPointPositionForValue(t || 0, this.getBaseValue())
				}
				getPointLabelPosition(t) {
					const {
						left: e,
						top: i,
						right: n,
						bottom: o
					} = this._pointLabelItems[t];
					return {
						left: e,
						top: i,
						right: n,
						bottom: o
					}
				}
				drawBackground() {
					const t = this,
						{
							backgroundColor: e,
							grid: {
								circular: i
							}
						} = t.options;
					if (e) {
						const n = t.ctx;
						n.save(), n.beginPath(), Zs(t, t.getDistanceFromCenterForValue(t._endValue), i, t.getLabels().length), n.closePath(), n.fillStyle = e, n.fill(), n.restore()
					}
				}
				drawGrid() {
					const t = this,
						e = t.ctx,
						i = t.options,
						{
							angleLines: n,
							grid: o
						} = i,
						s = t.getLabels().length;
					let a, r, l;
					if (i.pointLabels.display && function(t, e) {
							const {
								ctx: i,
								options: {
									pointLabels: n
								}
							} = t;
							for (let o = e - 1; o >= 0; o--) {
								const e = n.setContext(t.getPointLabelContext(o)),
									s = ge(e.font),
									{
										x: a,
										y: r,
										textAlign: l,
										left: c,
										top: d,
										right: u,
										bottom: f
									} = t._pointLabelItems[o],
									{
										backdropColor: g
									} = e;
								if (!h(g)) {
									const t = fe(e.backdropPadding);
									i.fillStyle = g, i.fillRect(c - t.left, d - t.top, u - c + t.width, f - d + t.height)
								}
								ne(i, t._pointLabels[o], a, r + s.lineHeight / 2, s, {
									color: e.color,
									textAlign: l,
									textBaseline: "middle"
								})
							}
						}(t, s), o.display && t.ticks.forEach((e, i) => {
							if (0 !== i) {
								r = t.getDistanceFromCenterForValue(e.value);
								const n = o.setContext(t.getContext(i - 1));
								! function(t, e, i, n) {
									const o = t.ctx,
										s = e.circular,
										{
											color: a,
											lineWidth: r
										} = e;
									!s && !n || !a || !r || i < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = r, o.setLineDash(e.borderDash), o.lineDashOffset = e.borderDashOffset, o.beginPath(), Zs(t, i, s, n), o.closePath(), o.stroke(), o.restore())
								}(t, n, r, s)
							}
						}), n.display) {
						for (e.save(), a = t.getLabels().length - 1; a >= 0; a--) {
							const o = n.setContext(t.getPointLabelContext(a)),
								{
									color: s,
									lineWidth: c
								} = o;
							c && s && (e.lineWidth = c, e.strokeStyle = s, e.setLineDash(o.borderDash), e.lineDashOffset = o.borderDashOffset, r = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max), l = t.getPointPosition(a, r), e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(l.x, l.y), e.stroke())
						}
						e.restore()
					}
				}
				drawBorder() {}
				drawLabels() {
					const t = this,
						e = t.ctx,
						i = t.options,
						n = i.ticks;
					if (!n.display) return;
					const o = t.getIndexAngle(0);
					let s, a;
					e.save(), e.translate(t.xCenter, t.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", t.ticks.forEach((o, r) => {
						if (0 === r && !i.reverse) return;
						const l = n.setContext(t.getContext(r)),
							c = ge(l.font);
						if (s = t.getDistanceFromCenterForValue(t.ticks[r].value), l.showLabelBackdrop) {
							e.font = c.string, a = e.measureText(o.label).width, e.fillStyle = l.backdropColor;
							const t = fe(l.backdropPadding);
							e.fillRect(-a / 2 - t.left, -s - c.size / 2 - t.top, a + t.width, c.size + t.height)
						}
						ne(e, o.label, 0, -s, c, {
							color: l.color
						})
					}), e.restore()
				}
				drawTitle() {}
			}
			Js.id = "radialLinear", Js.defaults = {
				display: !0,
				animate: !0,
				position: "chartArea",
				angleLines: {
					display: !0,
					lineWidth: 1,
					borderDash: [],
					borderDashOffset: 0
				},
				grid: {
					circular: !1
				},
				startAngle: 0,
				ticks: {
					showLabelBackdrop: !0,
					callback: jn.formatters.numeric
				},
				pointLabels: {
					backdropColor: void 0,
					backdropPadding: 2,
					display: !0,
					font: {
						size: 10
					},
					callback: t => t,
					padding: 5
				}
			}, Js.defaultRoutes = {
				"angleLines.color": "borderColor",
				"pointLabels.color": "color",
				"ticks.color": "color"
			}, Js.descriptors = {
				angleLines: {
					_fallback: "grid"
				}
			};
			const ta = {
					millisecond: {
						common: !0,
						size: 1,
						steps: 1e3
					},
					second: {
						common: !0,
						size: 1e3,
						steps: 60
					},
					minute: {
						common: !0,
						size: 6e4,
						steps: 60
					},
					hour: {
						common: !0,
						size: 36e5,
						steps: 24
					},
					day: {
						common: !0,
						size: 864e5,
						steps: 30
					},
					week: {
						common: !1,
						size: 6048e5,
						steps: 4
					},
					month: {
						common: !0,
						size: 2628e6,
						steps: 12
					},
					quarter: {
						common: !1,
						size: 7884e6,
						steps: 4
					},
					year: {
						common: !0,
						size: 3154e7
					}
				},
				ea = Object.keys(ta);

			function ia(t, e) {
				return t - e
			}

			function na(t, e) {
				if (h(e)) return null;
				const i = t._adapter,
					{
						parser: n,
						round: o,
						isoWeekday: s
					} = t._parseOpts;
				let a = e;
				return "function" == typeof n && (a = n(a)), f(a) || (a = "string" == typeof n ? i.parse(a, n) : i.parse(a)), null === a ? null : (o && (a = "week" !== o || !U(s) && !0 !== s ? i.startOf(a, o) : i.startOf(a, "isoWeek", s)), +a)
			}

			function oa(t, e, i, n) {
				const o = ea.length;
				for (let s = ea.indexOf(t); s < o - 1; ++s) {
					const t = ta[ea[s]],
						o = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
					if (t.common && Math.ceil((i - e) / (o * t.size)) <= n) return ea[s]
				}
				return ea[o - 1]
			}

			function sa(t, e, i) {
				if (i) {
					if (i.length) {
						const {
							lo: n,
							hi: o
						} = me(i, e);
						t[i[n] >= e ? i[n] : i[o]] = !0
					}
				} else t[e] = !0
			}

			function aa(t, e, i) {
				const n = [],
					o = {},
					s = e.length;
				let a, r;
				for (a = 0; a < s; ++a) o[r = e[a]] = a, n.push({
					value: r,
					major: !1
				});
				return 0 !== s && i ? function(t, e, i, n) {
					const o = t._adapter,
						s = +o.startOf(e[0].value, n),
						a = e[e.length - 1].value;
					let r, l;
					for (r = s; r <= a; r = +o.add(r, 1, n))(l = i[r]) >= 0 && (e[l].major = !0);
					return e
				}(t, n, o, i) : n
			}
			class ra extends qn {
				constructor(t) {
					super(t), this._cache = {
						data: [],
						labels: [],
						all: []
					}, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
				}
				init(t, e) {
					const i = t.time || (t.time = {}),
						n = this._adapter = new Ji._date(t.adapters.date);
					S(i.displayFormats, n.formats()), this._parseOpts = {
						parser: i.parser,
						round: i.round,
						isoWeekday: i.isoWeekday
					}, super.init(t), this._normalized = e.normalized
				}
				parse(t, e) {
					return void 0 === t ? null : na(this, t)
				}
				beforeLayout() {
					super.beforeLayout(), this._cache = {
						data: [],
						labels: [],
						all: []
					}
				}
				determineDataLimits() {
					const t = this,
						e = t.options,
						i = t._adapter,
						n = e.time.unit || "day";
					let {
						min: o,
						max: s,
						minDefined: a,
						maxDefined: r
					} = t.getUserBounds();

					function l(t) {
						a || isNaN(t.min) || (o = Math.min(o, t.min)), r || isNaN(t.max) || (s = Math.max(s, t.max))
					}
					a && r || (l(t._getLabelBounds()), "ticks" === e.bounds && "labels" === e.ticks.source || l(t.getMinMax(!1))), o = f(o) && !isNaN(o) ? o : +i.startOf(Date.now(), n), s = f(s) && !isNaN(s) ? s : +i.endOf(Date.now(), n) + 1, t.min = Math.min(o, s - 1), t.max = Math.max(o + 1, s)
				}
				_getLabelBounds() {
					const t = this.getLabelTimestamps();
					let e = Number.POSITIVE_INFINITY,
						i = Number.NEGATIVE_INFINITY;
					return t.length && (e = t[0], i = t[t.length - 1]), {
						min: e,
						max: i
					}
				}
				buildTicks() {
					const t = this,
						e = t.options,
						i = e.time,
						n = e.ticks,
						o = "labels" === n.source ? t.getLabelTimestamps() : t._generate();
					"ticks" === e.bounds && o.length && (t.min = t._userMin || o[0], t.max = t._userMax || o[o.length - 1]);
					const s = t.min,
						a = function(t, e, i) {
							let n = 0,
								o = t.length;
							for (; n < o && t[n] < e;) n++;
							for (; o > n && t[o - 1] > i;) o--;
							return n > 0 || o < t.length ? t.slice(n, o) : t
						}(o, s, t.max);
					return t._unit = i.unit || (n.autoSkip ? oa(i.minUnit, t.min, t.max, t._getLabelCapacity(s)) : function(t, e, i, n, o) {
						for (let s = ea.length - 1; s >= ea.indexOf(i); s--) {
							const i = ea[s];
							if (ta[i].common && t._adapter.diff(o, n, i) >= e - 1) return i
						}
						return ea[i ? ea.indexOf(i) : 0]
					}(t, a.length, i.minUnit, t.min, t.max)), t._majorUnit = n.major.enabled && "year" !== t._unit ? function(t) {
						for (let e = ea.indexOf(t) + 1, i = ea.length; e < i; ++e)
							if (ta[ea[e]].common) return ea[e]
					}(t._unit) : void 0, t.initOffsets(o), e.reverse && a.reverse(), aa(t, a, t._majorUnit)
				}
				initOffsets(t) {
					const e = this;
					let i, n, o = 0,
						s = 0;
					e.options.offset && t.length && (i = e.getDecimalForValue(t[0]), o = 1 === t.length ? 1 - i : (e.getDecimalForValue(t[1]) - i) / 2, n = e.getDecimalForValue(t[t.length - 1]), s = 1 === t.length ? n : (n - e.getDecimalForValue(t[t.length - 2])) / 2);
					const a = t.length < 3 ? .5 : .25;
					o = it(o, 0, a), s = it(s, 0, a), e._offsets = {
						start: o,
						end: s,
						factor: 1 / (o + 1 + s)
					}
				}
				_generate() {
					const t = this,
						e = t._adapter,
						i = t.min,
						n = t.max,
						o = t.options,
						s = o.time,
						a = s.unit || oa(s.minUnit, i, n, t._getLabelCapacity(i)),
						r = p(s.stepSize, 1),
						l = "week" === a && s.isoWeekday,
						c = U(l) || !0 === l,
						h = {};
					let d, u, f = i;
					if (c && (f = +e.startOf(f, "isoWeek", l)), f = +e.startOf(f, c ? "day" : a), e.diff(n, i, a) > 1e5 * r) throw new Error(i + " and " + n + " are too far apart with stepSize of " + r + " " + a);
					const g = "data" === o.ticks.source && t.getDataTimestamps();
					for (d = f, u = 0; d < n; d = +e.add(d, r, a), u++) sa(h, d, g);
					return d !== n && "ticks" !== o.bounds && 1 !== u || sa(h, d, g), Object.keys(h).sort((t, e) => t - e).map(t => +t)
				}
				getLabelForValue(t) {
					const e = this._adapter,
						i = this.options.time;
					return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime)
				}
				_tickFormatFunction(t, e, i, n) {
					const o = this,
						s = o.options,
						a = s.time.displayFormats,
						r = o._unit,
						l = o._majorUnit,
						c = r && a[r],
						h = l && a[l],
						d = i[e],
						u = l && h && d && d.major,
						f = o._adapter.format(t, n || (u ? h : c)),
						g = s.ticks.callback;
					return g ? x(g, [f, e, i], o) : f
				}
				generateTickLabels(t) {
					let e, i, n;
					for (e = 0, i = t.length; e < i; ++e)(n = t[e]).label = this._tickFormatFunction(n.value, e, t)
				}
				getDecimalForValue(t) {
					return null === t ? NaN : (t - this.min) / (this.max - this.min)
				}
				getPixelForValue(t) {
					const e = this._offsets,
						i = this.getDecimalForValue(t);
					return this.getPixelForDecimal((e.start + i) * e.factor)
				}
				getValueForPixel(t) {
					const e = this,
						i = e._offsets,
						n = e.getDecimalForPixel(t) / i.factor - i.end;
					return e.min + n * (e.max - e.min)
				}
				_getLabelSize(t) {
					const e = this.options.ticks,
						i = this.ctx.measureText(t).width,
						n = q(this.isHorizontal() ? e.maxRotation : e.minRotation),
						o = Math.cos(n),
						s = Math.sin(n),
						a = this._resolveTickFontOptions(0).size;
					return {
						w: i * o + a * s,
						h: i * s + a * o
					}
				}
				_getLabelCapacity(t) {
					const e = this,
						i = e.options.time,
						n = i.displayFormats,
						o = n[i.unit] || n.millisecond,
						s = e._tickFormatFunction(t, 0, aa(e, [t], e._majorUnit), o),
						a = e._getLabelSize(s),
						r = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h) - 1;
					return r > 0 ? r : 1
				}
				getDataTimestamps() {
					const t = this;
					let e, i, n = t._cache.data || [];
					if (n.length) return n;
					const o = t.getMatchingVisibleMetas();
					if (t._normalized && o.length) return t._cache.data = o[0].controller.getAllParsedValues(t);
					for (e = 0, i = o.length; e < i; ++e) n = n.concat(o[e].controller.getAllParsedValues(t));
					return t._cache.data = t.normalize(n)
				}
				getLabelTimestamps() {
					const t = this,
						e = t._cache.labels || [];
					let i, n;
					if (e.length) return e;
					const o = t.getLabels();
					for (i = 0, n = o.length; i < n; ++i) e.push(na(t, o[i]));
					return t._cache.labels = t._normalized ? e : t.normalize(e)
				}
				normalize(t) {
					return ve(t.sort(ia))
				}
			}

			function la(t, e, i) {
				let n, o, s, a, r = 0,
					l = t.length - 1;
				i ? (e >= t[r].pos && e <= t[l].pos && ({
					lo: r,
					hi: l
				} = be(t, "pos", e)), ({
					pos: n,
					time: s
				} = t[r]), ({
					pos: o,
					time: a
				} = t[l])) : (e >= t[r].time && e <= t[l].time && ({
					lo: r,
					hi: l
				} = be(t, "time", e)), ({
					time: n,
					pos: s
				} = t[r]), ({
					time: o,
					pos: a
				} = t[l]));
				const c = o - n;
				return c ? s + (a - s) * (e - n) / c : s
			}
			ra.id = "time", ra.defaults = {
				bounds: "data",
				adapters: {},
				time: {
					parser: !1,
					unit: !1,
					round: !1,
					isoWeekday: !1,
					minUnit: "millisecond",
					displayFormats: {}
				},
				ticks: {
					source: "auto",
					major: {
						enabled: !1
					}
				}
			};
			class ca extends ra {
				constructor(t) {
					super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0
				}
				initOffsets() {
					const t = this,
						e = t._getTimestampsForTable(),
						i = t._table = t.buildLookupTable(e);
					t._minPos = la(i, t.min), t._tableRange = la(i, t.max) - t._minPos, super.initOffsets(e)
				}
				buildLookupTable(t) {
					const {
						min: e,
						max: i
					} = this, n = [], o = [];
					let s, a, r, l, c;
					for (s = 0, a = t.length; s < a; ++s)(l = t[s]) >= e && l <= i && n.push(l);
					if (n.length < 2) return [{
						time: e,
						pos: 0
					}, {
						time: i,
						pos: 1
					}];
					for (s = 0, a = n.length; s < a; ++s) c = n[s + 1], r = n[s - 1], l = n[s], Math.round((c + r) / 2) !== l && o.push({
						time: l,
						pos: s / (a - 1)
					});
					return o
				}
				_getTimestampsForTable() {
					const t = this;
					let e = t._cache.all || [];
					if (e.length) return e;
					const i = t.getDataTimestamps(),
						n = t.getLabelTimestamps();
					return e = i.length && n.length ? t.normalize(i.concat(n)) : i.length ? i : n, e = t._cache.all = e
				}
				getDecimalForValue(t) {
					return (la(this._table, t) - this._minPos) / this._tableRange
				}
				getValueForPixel(t) {
					const e = this,
						i = e._offsets,
						n = e.getDecimalForPixel(t) / i.factor - i.end;
					return la(e._table, n * e._tableRange + e._minPos, !0)
				}
			}
			ca.id = "timeseries", ca.defaults = ra.defaults;
			const ha = [Gi, Uo, zs, Object.freeze({
				__proto__: null,
				CategoryScale: Vs,
				LinearScale: Ns,
				LogarithmicScale: $s,
				RadialLinearScale: Js,
				TimeScale: ra,
				TimeSeriesScale: ca
			})]
		},
		"./node_modules/chartjs-adapter-moment/dist/chartjs-adapter-moment.esm.js": function(t, e, i) {
			"use strict";
			var n = i("./node_modules/moment/moment.js"),
				o = i.n(n),
				s = i("./node_modules/chart.js/dist/chart.esm.js");
			const a = {
				datetime: "MMM D, YYYY, h:mm:ss a",
				millisecond: "h:mm:ss.SSS a",
				second: "h:mm:ss a",
				minute: "h:mm a",
				hour: "hA",
				day: "MMM D",
				week: "ll",
				month: "MMM YYYY",
				quarter: "[Q]Q - YYYY",
				year: "YYYY"
			};
			s.b._date.override("function" == typeof o.a ? {
				_id: "moment",
				formats: function() {
					return a
				},
				parse: function(t, e) {
					return "string" == typeof t && "string" == typeof e ? t = o()(t, e) : t instanceof o.a || (t = o()(t)), t.isValid() ? t.valueOf() : null
				},
				format: function(t, e) {
					return o()(t).format(e)
				},
				add: function(t, e, i) {
					return o()(t).add(e, i).valueOf()
				},
				diff: function(t, e, i) {
					return o()(t).diff(o()(e), i)
				},
				startOf: function(t, e, i) {
					return t = o()(t), "isoWeek" === e ? (i = Math.trunc(Math.min(Math.max(0, i), 6)), t.isoWeekday(i).startOf("day").valueOf()) : t.startOf(e).valueOf()
				},
				endOf: function(t, e) {
					return o()(t).endOf(e).valueOf()
				}
			} : {})
		},
		"./node_modules/lodash/assign.js": function(t, e, i) {
			var n = i("./node_modules/lodash/_assignValue.js"),
				o = i("./node_modules/lodash/_copyObject.js"),
				s = i("./node_modules/lodash/_createAssigner.js"),
				a = i("./node_modules/lodash/isArrayLike.js"),
				r = i("./node_modules/lodash/_isPrototype.js"),
				l = i("./node_modules/lodash/keys.js"),
				c = Object.prototype.hasOwnProperty,
				h = s((function(t, e) {
					if (r(e) || a(e)) o(e, l(e), t);
					else
						for (var i in e) c.call(e, i) && n(t, i, e[i])
				}));
			t.exports = h
		},
		"./node_modules/react-chartjs-2/dist/index.modern.js": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return b
			})), i.d(e, "b", (function() {
				return m
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				s = i("./node_modules/chart.js/dist/chart.esm.js");
			s.a.register(...s.d);
			var a = s.a,
				r = i("./node_modules/lodash/merge.js"),
				l = i.n(r),
				c = i("./node_modules/lodash/assign.js"),
				h = i.n(c),
				d = i("./node_modules/lodash/find.js"),
				u = i.n(d);

			function f() {
				return (f = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
					}
					return t
				}).apply(this, arguments)
			}

			function g(t, e) {
				if (null == t) return {};
				var i, n, o = {},
					s = Object.keys(t);
				for (n = 0; n < s.length; n++) i = s[n], e.indexOf(i) >= 0 || (o[i] = t[i]);
				return o
			}
			var p = Object(n.forwardRef)((function(t, e) {
					var i = t.id,
						s = t.className,
						r = t.height,
						c = void 0 === r ? 150 : r,
						d = t.width,
						p = void 0 === d ? 300 : d,
						m = t.redraw,
						b = void 0 !== m && m,
						x = t.type,
						_ = t.data,
						y = t.options,
						v = void 0 === y ? {} : y,
						w = t.plugins,
						M = void 0 === w ? [] : w,
						k = t.getDatasetAtEvent,
						S = t.getElementAtEvent,
						P = t.getElementsAtEvent,
						O = t.fallbackContent,
						D = g(t, ["id", "className", "height", "width", "redraw", "type", "data", "options", "plugins", "getDatasetAtEvent", "getElementAtEvent", "getElementsAtEvent", "fallbackContent"]),
						C = Object(n.useRef)(null),
						A = Object(n.useMemo)((function() {
							return "function" == typeof _ ? C.current ? _(C.current) : {} : l()({}, _)
						}), [_, C.current]),
						T = Object(n.useState)(),
						L = T[0],
						E = T[1];
					Object(n.useImperativeHandle)(e, (function() {
						return L
					}), [L]);
					var R = function() {
							C.current && E(new a(C.current, {
								type: x,
								data: A,
								options: v,
								plugins: M
							}))
						},
						z = function() {
							L && L.destroy()
						};
					return Object(n.useEffect)((function() {
						return R(),
							function() {
								return z()
							}
					}), []), Object(n.useEffect)((function() {
						b ? (z(), setTimeout((function() {
							R()
						}), 0)) : function() {
							if (L) {
								if (v && (L.options = f({}, v)), !L.config.data) return L.config.data = A, void L.update();
								var t = A.datasets,
									e = void 0 === t ? [] : t,
									i = g(A, ["datasets"]),
									n = L.config.data.datasets,
									o = void 0 === n ? [] : n;
								h()(L.config.data, i), L.config.data.datasets = e.map((function(t) {
									var e = u()(o, (function(e) {
										return e.label === t.label && e.type === t.type
									}));
									return e && t.data ? (e.data ? e.data.length = t.data.length : e.data = [], h()(e.data, t.data), h()(e, f({}, t, {
										data: e.data
									})), e) : f({}, t)
								})), L.update()
							}
						}()
					}), [t, A]), o.a.createElement("canvas", Object.assign({}, D, {
						height: c,
						width: p,
						ref: C,
						id: i,
						className: s,
						onClick: function(t) {
							L && (k && k(L.getElementsAtEventForMode(t, "dataset", {
								intersect: !0
							}, !1), t), S && S(L.getElementsAtEventForMode(t, "nearest", {
								intersect: !0
							}, !1), t), P && P(L.getElementsAtEventForMode(t, "index", {
								intersect: !0
							}, !1), t))
						},
						"data-testid": "canvas",
						role: "img"
					}), O)
				})),
				m = Object(n.forwardRef)((function(t, e) {
					return o.a.createElement(p, Object.assign({}, t, {
						type: "line",
						ref: e,
						options: t.options || {}
					}))
				})),
				b = Object(n.forwardRef)((function(t, e) {
					return o.a.createElement(p, Object.assign({}, t, {
						type: "bar",
						ref: e,
						options: t.options || {}
					}))
				}));
			Object(n.forwardRef)((function(t, e) {
				return o.a.createElement(p, Object.assign({}, t, {
					type: "radar",
					ref: e,
					options: t.options || {}
				}))
			})), Object(n.forwardRef)((function(t, e) {
				return o.a.createElement(p, Object.assign({}, t, {
					type: "doughnut",
					ref: e,
					options: t.options || {}
				}))
			})), Object(n.forwardRef)((function(t, e) {
				return o.a.createElement(p, Object.assign({}, t, {
					type: "polarArea",
					ref: e,
					options: t.options || {}
				}))
			})), Object(n.forwardRef)((function(t, e) {
				return o.a.createElement(p, Object.assign({}, t, {
					type: "bubble",
					ref: e,
					options: t.options || {}
				}))
			})), Object(n.forwardRef)((function(t, e) {
				return o.a.createElement(p, Object.assign({}, t, {
					type: "pie",
					ref: e,
					options: t.options || {}
				}))
			})), Object(n.forwardRef)((function(t, e) {
				return o.a.createElement(p, Object.assign({}, t, {
					type: "scatter",
					ref: e,
					options: t.options || {}
				}))
			})), s.c, s.a
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~ModStatsChart~ViewsTooltip.b642007ba6a9c10cda83.js.map