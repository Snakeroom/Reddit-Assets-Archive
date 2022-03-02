// https://www.redditstatic.com/desktop2x/vendors~NftProfileUnit.1dbbc4bc022cb69c5e17.js
// Retrieved at 3/2/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~NftProfileUnit"], {
		"./node_modules/@reddit/crypto/react/config/index.es.js": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js");
			const i = {
					api: {
						accessToken: "accessToken"
					},
					gql: {
						host: "12345",
						fetchOptions: {}
					},
					nightModeActive: () => !1
				},
				o = Object(r.createContext)(i),
				s = o.Provider,
				a = () => Object(r.useContext)(o)
		},
		"./node_modules/@reddit/crypto/react/nft-treatment/index.es.js": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return x
			})), n.d(e, "b", (function() {
				return H
			})), n.d(e, "c", (function() {
				return Y
			}));
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/@reddit/crypto/react/ui/index.es.js"),
				s = n("./node_modules/classnames/index.js"),
				a = n.n(s),
				u = n("./node_modules/react-tilt/dist/tilt.js"),
				c = n.n(u);
			var l = {
				container: "_container_1v4kq_1",
				nftIcon: "_nftIcon_1v4kq_6",
				closeIcon: "_closeIcon_1v4kq_7",
				naming: "_naming_1v4kq_17",
				badge: "_badge_1v4kq_27",
				image: "_image_1v4kq_33",
				title: "_title_1v4kq_42",
				animation: "_animation_1v4kq_54",
				front: "_front_1v4kq_61",
				back: "_back_1v4kq_62",
				clickable: "_clickable_1v4kq_66",
				backCardContent: "_backCardContent_1v4kq_69",
				serialNumber: "_serialNumber_1v4kq_77",
				"serialNumber-purple": "_serialNumber-purple_1v4kq_83",
				serialNumberPurple: "_serialNumber-purple_1v4kq_83"
			};
			let f = null;
			var h = {
				card: "_card_z42o9_1",
				content: "_content_z42o9_9",
				front: "_front_z42o9_17",
				back: "_back_z42o9_18",
				webp: "_webp_z42o9_41",
				fallback: "_fallback_z42o9_45",
				animated: "_animated_z42o9_49",
				"card-test": "_card-test_z42o9_57",
				cardTest: "_card-test_z42o9_57"
			};
			const p = ({
				flipped: t,
				children: e,
				className: n,
				rarity: r = "default",
				onClick: o,
				animate: s
			}) => {
				const u = a()(h.card, n, h[`card-${r}`]),
					l = a()(h.front, function() {
						if (null === f && "undefined" != typeof document) {
							const t = document.createElement("canvas");
							f = !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp")
						}
						return f
					}() ? h.webp : h.fallback, s ? h.animated : null),
					p = h.back;
				return i.a.createElement(c.a, {
					gyroscope: !0,
					className: u,
					onClick: o
				}, i.a.createElement("div", {
					className: h.card
				}, t ? i.a.createElement("div", {
					className: p
				}) : i.a.createElement("div", {
					className: l
				}), i.a.createElement("div", {
					className: h.content
				}, e)))
			};
			var d = "https://www.redditstatic.com/crypto-assets/v2/badge-epic-28149a2c79.svg",
				g = "https://www.redditstatic.com/crypto-assets/v2/badge-legendary-bf5ff286ea.svg",
				m = "https://www.redditstatic.com/crypto-assets/v2/badge-rare-58cd024831.svg",
				y = "https://www.redditstatic.com/crypto-assets/v2/badge-test-9648ca7b6f.svg";
			const v = ({
				type: t,
				className: e
			}) => {
				const {
					alt: n,
					image: o
				} = Object(r.useMemo)(() => (function(t) {
					switch (t) {
						case "legendary":
							return {
								image: g, alt: "legendary"
							};
						case "epic":
							return {
								image: d, alt: "epic"
							};
						case "rare":
							return {
								image: m, alt: "rare"
							};
						case "test":
							return {
								image: y, alt: "test"
							}
					}
				})(t), [t]);
				return i.a.createElement("img", {
					src: o,
					className: e,
					alt: n
				})
			};
			var b = "_container_uuek9_30",
				w = "_range_uuek9_35",
				_ = "_rangeStart_uuek9_39",
				E = "_rangeEnd_uuek9_40",
				B = "_title_uuek9_63";
			const O = ({
				title: t,
				rarity: e,
				collectionSize: n,
				className: r
			}) => {
				const o = n ? String(n) : function(t) {
					switch (t) {
						case "legendary":
							return "1";
						case "epic":
							return "100";
						case "rare":
							return "101+";
						case "test":
							return "∞"
					}
				}(e);
				return i.a.createElement("div", {
					className: a()(b, r)
				}, i.a.createElement("div", {
					className: w
				}, i.a.createElement("div", {
					className: _
				}, "1"), i.a.createElement("div", {
					className: E
				}, o)), i.a.createElement("div", null, i.a.createElement("h2", {
					className: B
				}, t)))
			};
			const A = ({
				className: t,
				nft: e,
				onClick: n,
				animate: r,
				animationSpeed: o = 1
			}) => {
				const {
					rarity: s,
					svgImageUrl: u,
					title: c,
					collectionSize: f
				} = e;
				return i.a.createElement(p, {
					rarity: s,
					animate: r,
					className: a()(t, l.front, n ? l.clickable : null),
					animationSpeed: o
				}, i.a.createElement(v, {
					type: s,
					className: l.badge
				}), i.a.createElement("img", {
					src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
					className: l.nftIcon
				}), i.a.createElement("img", {
					src: u,
					className: l.image,
					alt: "nft-asset"
				}), i.a.createElement(O, {
					title: c,
					rarity: s,
					className: l.naming,
					collectionSize: f
				}))
			};
			var T = {
				exports: {}
			};
			! function(t) {
				! function() {
					var e = {}.hasOwnProperty;

					function n() {
						for (var t = [], r = 0; r < arguments.length; r++) {
							var i = arguments[r];
							if (i) {
								var o = typeof i;
								if ("string" === o || "number" === o) t.push(i);
								else if (Array.isArray(i)) {
									if (i.length) {
										var s = n.apply(null, i);
										s && t.push(s)
									}
								} else if ("object" === o)
									if (i.toString === Object.prototype.toString)
										for (var a in i) e.call(i, a) && i[a] && t.push(a);
									else t.push(i.toString())
							}
						}
						return t.join(" ")
					}
					t.exports ? (n.default = n, t.exports = n) : window.classNames = n
				}()
			}(T);
			var I = T.exports;
			const k = ({
				children: t
			}) => i.a.createElement(i.a.Fragment, null, t);
			var M = "_container_1a0am_1",
				N = "_icon_1a0am_12";
			const x = ({
				className: t,
				onClick: e
			}) => i.a.createElement(o.a, {
				className: I(M, t),
				onClick: e,
				theme: "grey"
			}, i.a.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v1/cards/nft-icon.svg",
				className: N
			}), i.a.createElement(k, {
				desc: "Button: See details about this NFT"
			}, "NFT Details"));
			for (var U = {}, j = {
					byteLength: function(t) {
						var e = q(t),
							n = e[0],
							r = e[1];
						return 3 * (n + r) / 4 - r
					},
					toByteArray: function(t) {
						var e, n, r = q(t),
							i = r[0],
							o = r[1],
							s = new L(function(t, e, n) {
								return 3 * (e + n) / 4 - n
							}(0, i, o)),
							a = 0,
							u = o > 0 ? i - 4 : i;
						for (n = 0; n < u; n += 4) e = S[t.charCodeAt(n)] << 18 | S[t.charCodeAt(n + 1)] << 12 | S[t.charCodeAt(n + 2)] << 6 | S[t.charCodeAt(n + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
						2 === o && (e = S[t.charCodeAt(n)] << 2 | S[t.charCodeAt(n + 1)] >> 4, s[a++] = 255 & e);
						1 === o && (e = S[t.charCodeAt(n)] << 10 | S[t.charCodeAt(n + 1)] << 4 | S[t.charCodeAt(n + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
						return s
					},
					fromByteArray: function(t) {
						for (var e, n = t.length, r = n % 3, i = [], o = 0, s = n - r; o < s; o += 16383) i.push($(t, o, o + 16383 > s ? s : o + 16383));
						1 === r ? (e = t[n - 1], i.push(C[e >> 2] + C[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i.push(C[e >> 10] + C[e >> 4 & 63] + C[e << 2 & 63] + "="));
						return i.join("")
					}
				}, C = [], S = [], L = "undefined" != typeof Uint8Array ? Uint8Array : Array, R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P = 0, F = R.length; P < F; ++P) C[P] = R[P], S[R.charCodeAt(P)] = P;

			function q(t) {
				var e = t.length;
				if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var n = t.indexOf("=");
				return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
			}

			function $(t, e, n) {
				for (var r, i, o = [], s = e; s < n; s += 3) r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(C[(i = r) >> 18 & 63] + C[i >> 12 & 63] + C[i >> 6 & 63] + C[63 & i]);
				return o.join("")
			}
			S["-".charCodeAt(0)] = 62, S["_".charCodeAt(0)] = 63;
			var z = {
				read: function(t, e, n, r, i) {
					var o, s, a = 8 * i - r - 1,
						u = (1 << a) - 1,
						c = u >> 1,
						l = -7,
						f = n ? i - 1 : 0,
						h = n ? -1 : 1,
						p = t[e + f];
					for (f += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += h, l -= 8);
					for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + f], f += h, l -= 8);
					if (0 === o) o = 1 - c;
					else {
						if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
						s += Math.pow(2, r), o -= c
					}
					return (p ? -1 : 1) * s * Math.pow(2, o - r)
				},
				write: function(t, e, n, r, i, o) {
					var s, a, u, c = 8 * o - i - 1,
						l = (1 << c) - 1,
						f = l >> 1,
						h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
						p = r ? 0 : o - 1,
						d = r ? 1 : -1,
						g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
					for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += d, a /= 256, i -= 8);
					for (s = s << i | a, c += i; c > 0; t[n + p] = 255 & s, p += d, s /= 256, c -= 8);
					t[n + p - d] |= 128 * g
				}
			};
			! function(t) {
				const e = j,
					n = z,
					r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
				t.Buffer = s, t.SlowBuffer = function(t) {
					+t != t && (t = 0);
					return s.alloc(+t)
				}, t.INSPECT_MAX_BYTES = 50;
				const i = 2147483647;

				function o(t) {
					if (t > i) throw new RangeError('The value "' + t + '" is invalid for option "size"');
					const e = new Uint8Array(t);
					return Object.setPrototypeOf(e, s.prototype), e
				}

				function s(t, e, n) {
					if ("number" == typeof t) {
						if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
						return c(t)
					}
					return a(t, e, n)
				}

				function a(t, e, n) {
					if ("string" == typeof t) return function(t, e) {
						"string" == typeof e && "" !== e || (e = "utf8");
						if (!s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
						const n = 0 | p(t, e);
						let r = o(n);
						const i = r.write(t, e);
						i !== n && (r = r.slice(0, i));
						return r
					}(t, e);
					if (ArrayBuffer.isView(t)) return function(t) {
						if (W(t, Uint8Array)) {
							const e = new Uint8Array(t);
							return f(e.buffer, e.byteOffset, e.byteLength)
						}
						return l(t)
					}(t);
					if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
					if (W(t, ArrayBuffer) || t && W(t.buffer, ArrayBuffer)) return f(t, e, n);
					if ("undefined" != typeof SharedArrayBuffer && (W(t, SharedArrayBuffer) || t && W(t.buffer, SharedArrayBuffer))) return f(t, e, n);
					if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
					const r = t.valueOf && t.valueOf();
					if (null != r && r !== t) return s.from(r, e, n);
					const i = function(t) {
						if (s.isBuffer(t)) {
							const e = 0 | h(t.length),
								n = o(e);
							return 0 === n.length ? n : (t.copy(n, 0, 0, e), n)
						}
						if (void 0 !== t.length) return "number" != typeof t.length || H(t.length) ? o(0) : l(t);
						if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
					}(t);
					if (i) return i;
					if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, n);
					throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
				}

				function u(t) {
					if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
					if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
				}

				function c(t) {
					return u(t), o(t < 0 ? 0 : 0 | h(t))
				}

				function l(t) {
					const e = t.length < 0 ? 0 : 0 | h(t.length),
						n = o(e);
					for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
					return n
				}

				function f(t, e, n) {
					if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
					if (t.byteLength < e + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
					let r;
					return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, e) : new Uint8Array(t, e, n), Object.setPrototypeOf(r, s.prototype), r
				}

				function h(t) {
					if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
					return 0 | t
				}

				function p(t, e) {
					if (s.isBuffer(t)) return t.length;
					if (ArrayBuffer.isView(t) || W(t, ArrayBuffer)) return t.byteLength;
					if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
					const n = t.length,
						r = arguments.length > 2 && !0 === arguments[2];
					if (!r && 0 === n) return 0;
					let i = !1;
					for (;;) switch (e) {
						case "ascii":
						case "latin1":
						case "binary":
							return n;
						case "utf8":
						case "utf-8":
							return V(t).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * n;
						case "hex":
							return n >>> 1;
						case "base64":
							return K(t).length;
						default:
							if (i) return r ? -1 : V(t).length;
							e = ("" + e).toLowerCase(), i = !0
					}
				}

				function d(t, e, n) {
					let r = !1;
					if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
					if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
					if ((n >>>= 0) <= (e >>>= 0)) return "";
					for (t || (t = "utf8");;) switch (t) {
						case "hex":
							return k(this, e, n);
						case "utf8":
						case "utf-8":
							return O(this, e, n);
						case "ascii":
							return T(this, e, n);
						case "latin1":
						case "binary":
							return I(this, e, n);
						case "base64":
							return B(this, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return M(this, e, n);
						default:
							if (r) throw new TypeError("Unknown encoding: " + t);
							t = (t + "").toLowerCase(), r = !0
					}
				}

				function g(t, e, n) {
					const r = t[e];
					t[e] = t[n], t[n] = r
				}

				function m(t, e, n, r, i) {
					if (0 === t.length) return -1;
					if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), H(n = +n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
						if (i) return -1;
						n = t.length - 1
					} else if (n < 0) {
						if (!i) return -1;
						n = 0
					}
					if ("string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, n, r, i);
					if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : y(t, [e], n, r, i);
					throw new TypeError("val must be string, number or Buffer")
				}

				function y(t, e, n, r, i) {
					let o, s = 1,
						a = t.length,
						u = e.length;
					if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
						if (t.length < 2 || e.length < 2) return -1;
						s = 2, a /= 2, u /= 2, n /= 2
					}

					function c(t, e) {
						return 1 === s ? t[e] : t.readUInt16BE(e * s)
					}
					if (i) {
						let r = -1;
						for (o = n; o < a; o++)
							if (c(t, o) === c(e, -1 === r ? 0 : o - r)) {
								if (-1 === r && (r = o), o - r + 1 === u) return r * s
							} else -1 !== r && (o -= o - r), r = -1
					} else
						for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
							let n = !0;
							for (let r = 0; r < u; r++)
								if (c(t, o + r) !== c(e, r)) {
									n = !1;
									break
								} if (n) return o
						}
					return -1
				}

				function v(t, e, n, r) {
					n = Number(n) || 0;
					const i = t.length - n;
					r ? (r = Number(r)) > i && (r = i) : r = i;
					const o = e.length;
					let s;
					for (r > o / 2 && (r = o / 2), s = 0; s < r; ++s) {
						const r = parseInt(e.substr(2 * s, 2), 16);
						if (H(r)) return s;
						t[n + s] = r
					}
					return s
				}

				function b(t, e, n, r) {
					return G(V(e, t.length - n), t, n, r)
				}

				function w(t, e, n, r) {
					return G(function(t) {
						const e = [];
						for (let n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
						return e
					}(e), t, n, r)
				}

				function _(t, e, n, r) {
					return G(K(e), t, n, r)
				}

				function E(t, e, n, r) {
					return G(function(t, e) {
						let n, r, i;
						const o = [];
						for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
						return o
					}(e, t.length - n), t, n, r)
				}

				function B(t, n, r) {
					return 0 === n && r === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(n, r))
				}

				function O(t, e, n) {
					n = Math.min(t.length, n);
					const r = [];
					let i = e;
					for (; i < n;) {
						const e = t[i];
						let o = null,
							s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
						if (i + s <= n) {
							let n, r, a, u;
							switch (s) {
								case 1:
									e < 128 && (o = e);
									break;
								case 2:
									128 == (192 & (n = t[i + 1])) && (u = (31 & e) << 6 | 63 & n) > 127 && (o = u);
									break;
								case 3:
									n = t[i + 1], r = t[i + 2], 128 == (192 & n) && 128 == (192 & r) && (u = (15 & e) << 12 | (63 & n) << 6 | 63 & r) > 2047 && (u < 55296 || u > 57343) && (o = u);
									break;
								case 4:
									n = t[i + 1], r = t[i + 2], a = t[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
							}
						}
						null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += s
					}
					return function(t) {
						const e = t.length;
						if (e <= A) return String.fromCharCode.apply(String, t);
						let n = "",
							r = 0;
						for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += A));
						return n
					}(r)
				}
				t.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = function() {
					try {
						const t = new Uint8Array(1),
							e = {
								foo: function() {
									return 42
								}
							};
						return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
					} catch (t) {
						return !1
					}
				}(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
					enumerable: !0,
					get: function() {
						if (s.isBuffer(this)) return this.buffer
					}
				}), Object.defineProperty(s.prototype, "offset", {
					enumerable: !0,
					get: function() {
						if (s.isBuffer(this)) return this.byteOffset
					}
				}), s.poolSize = 8192, s.from = function(t, e, n) {
					return a(t, e, n)
				}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, n) {
					return function(t, e, n) {
						return u(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof n ? o(t).fill(e, n) : o(t).fill(e) : o(t)
					}(t, e, n)
				}, s.allocUnsafe = function(t) {
					return c(t)
				}, s.allocUnsafeSlow = function(t) {
					return c(t)
				}, s.isBuffer = function(t) {
					return null != t && !0 === t._isBuffer && t !== s.prototype
				}, s.compare = function(t, e) {
					if (W(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), W(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
					if (t === e) return 0;
					let n = t.length,
						r = e.length;
					for (let i = 0, o = Math.min(n, r); i < o; ++i)
						if (t[i] !== e[i]) {
							n = t[i], r = e[i];
							break
						} return n < r ? -1 : r < n ? 1 : 0
				}, s.isEncoding = function(t) {
					switch (String(t).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return !0;
						default:
							return !1
					}
				}, s.concat = function(t, e) {
					if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
					if (0 === t.length) return s.alloc(0);
					let n;
					if (void 0 === e)
						for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
					const r = s.allocUnsafe(e);
					let i = 0;
					for (n = 0; n < t.length; ++n) {
						let e = t[n];
						if (W(e, Uint8Array)) i + e.length > r.length ? (s.isBuffer(e) || (e = s.from(e)), e.copy(r, i)) : Uint8Array.prototype.set.call(r, e, i);
						else {
							if (!s.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
							e.copy(r, i)
						}
						i += e.length
					}
					return r
				}, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
					const t = this.length;
					if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
					for (let e = 0; e < t; e += 2) g(this, e, e + 1);
					return this
				}, s.prototype.swap32 = function() {
					const t = this.length;
					if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
					for (let e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
					return this
				}, s.prototype.swap64 = function() {
					const t = this.length;
					if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
					for (let e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
					return this
				}, s.prototype.toString = function() {
					const t = this.length;
					return 0 === t ? "" : 0 === arguments.length ? O(this, 0, t) : d.apply(this, arguments)
				}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
					if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
					return this === t || 0 === s.compare(this, t)
				}, s.prototype.inspect = function() {
					let e = "";
					const n = t.INSPECT_MAX_BYTES;
					return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
				}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(t, e, n, r, i) {
					if (W(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
					if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
					if (r >= i && e >= n) return 0;
					if (r >= i) return -1;
					if (e >= n) return 1;
					if (this === t) return 0;
					let o = (i >>>= 0) - (r >>>= 0),
						a = (n >>>= 0) - (e >>>= 0);
					const u = Math.min(o, a),
						c = this.slice(r, i),
						l = t.slice(e, n);
					for (let s = 0; s < u; ++s)
						if (c[s] !== l[s]) {
							o = c[s], a = l[s];
							break
						} return o < a ? -1 : a < o ? 1 : 0
				}, s.prototype.includes = function(t, e, n) {
					return -1 !== this.indexOf(t, e, n)
				}, s.prototype.indexOf = function(t, e, n) {
					return m(this, t, e, n, !0)
				}, s.prototype.lastIndexOf = function(t, e, n) {
					return m(this, t, e, n, !1)
				}, s.prototype.write = function(t, e, n, r) {
					if (void 0 === e) r = "utf8", n = this.length, e = 0;
					else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
					else {
						if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
						e >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
					}
					const i = this.length - e;
					if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
					r || (r = "utf8");
					let o = !1;
					for (;;) switch (r) {
						case "hex":
							return v(this, t, e, n);
						case "utf8":
						case "utf-8":
							return b(this, t, e, n);
						case "ascii":
						case "latin1":
						case "binary":
							return w(this, t, e, n);
						case "base64":
							return _(this, t, e, n);
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return E(this, t, e, n);
						default:
							if (o) throw new TypeError("Unknown encoding: " + r);
							r = ("" + r).toLowerCase(), o = !0
					}
				}, s.prototype.toJSON = function() {
					return {
						type: "Buffer",
						data: Array.prototype.slice.call(this._arr || this, 0)
					}
				};
				const A = 4096;

				function T(t, e, n) {
					let r = "";
					n = Math.min(t.length, n);
					for (let i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
					return r
				}

				function I(t, e, n) {
					let r = "";
					n = Math.min(t.length, n);
					for (let i = e; i < n; ++i) r += String.fromCharCode(t[i]);
					return r
				}

				function k(t, e, n) {
					const r = t.length;
					(!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
					let i = "";
					for (let o = e; o < n; ++o) i += J[t[o]];
					return i
				}

				function M(t, e, n) {
					const r = t.slice(e, n);
					let i = "";
					for (let o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
					return i
				}

				function N(t, e, n) {
					if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
					if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
				}

				function x(t, e, n, r, i, o) {
					if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
					if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
					if (n + r > t.length) throw new RangeError("Index out of range")
				}

				function U(t, e, n, r, i) {
					$(e, r, i, t, n, 7);
					let o = Number(e & BigInt(4294967295));
					t[n++] = o, o >>= 8, t[n++] = o, o >>= 8, t[n++] = o, o >>= 8, t[n++] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, s >>= 8, t[n++] = s, n
				}

				function C(t, e, n, r, i) {
					$(e, r, i, t, n, 7);
					let o = Number(e & BigInt(4294967295));
					t[n + 7] = o, o >>= 8, t[n + 6] = o, o >>= 8, t[n + 5] = o, o >>= 8, t[n + 4] = o;
					let s = Number(e >> BigInt(32) & BigInt(4294967295));
					return t[n + 3] = s, s >>= 8, t[n + 2] = s, s >>= 8, t[n + 1] = s, s >>= 8, t[n] = s, n + 8
				}

				function S(t, e, n, r, i, o) {
					if (n + r > t.length) throw new RangeError("Index out of range");
					if (n < 0) throw new RangeError("Index out of range")
				}

				function L(t, e, r, i, o) {
					return e = +e, r >>>= 0, o || S(t, 0, r, 4), n.write(t, e, r, i, 23, 4), r + 4
				}

				function R(t, e, r, i, o) {
					return e = +e, r >>>= 0, o || S(t, 0, r, 8), n.write(t, e, r, i, 52, 8), r + 8
				}
				s.prototype.slice = function(t, e) {
					const n = this.length;
					(t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
					const r = this.subarray(t, e);
					return Object.setPrototypeOf(r, s.prototype), r
				}, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					let r = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) r += this[t + o] * i;
					return r
				}, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					let r = this[t + --e],
						i = 1;
					for (; e > 0 && (i *= 256);) r += this[t + --e] * i;
					return r
				}, s.prototype.readUint8 = s.prototype.readUInt8 = function(t, e) {
					return t >>>= 0, e || N(t, 1, this.length), this[t]
				}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(t, e) {
					return t >>>= 0, e || N(t, 2, this.length), this[t] | this[t + 1] << 8
				}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(t, e) {
					return t >>>= 0, e || N(t, 2, this.length), this[t] << 8 | this[t + 1]
				}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
				}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
				}, s.prototype.readBigUInt64LE = Z((function(t) {
					D(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
						i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
					return BigInt(r) + (BigInt(i) << BigInt(32))
				})), s.prototype.readBigUInt64BE = Z((function(t) {
					D(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
						i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
					return (BigInt(r) << BigInt(32)) + BigInt(i)
				})), s.prototype.readIntLE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					let r = this[t],
						i = 1,
						o = 0;
					for (; ++o < e && (i *= 256);) r += this[t + o] * i;
					return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
				}, s.prototype.readIntBE = function(t, e, n) {
					t >>>= 0, e >>>= 0, n || N(t, e, this.length);
					let r = e,
						i = 1,
						o = this[t + --r];
					for (; r > 0 && (i *= 256);) o += this[t + --r] * i;
					return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
				}, s.prototype.readInt8 = function(t, e) {
					return t >>>= 0, e || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
				}, s.prototype.readInt16LE = function(t, e) {
					t >>>= 0, e || N(t, 2, this.length);
					const n = this[t] | this[t + 1] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt16BE = function(t, e) {
					t >>>= 0, e || N(t, 2, this.length);
					const n = this[t + 1] | this[t] << 8;
					return 32768 & n ? 4294901760 | n : n
				}, s.prototype.readInt32LE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
				}, s.prototype.readInt32BE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
				}, s.prototype.readBigInt64LE = Z((function(t) {
					D(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
					return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
				})), s.prototype.readBigInt64BE = Z((function(t) {
					D(t >>>= 0, "offset");
					const e = this[t],
						n = this[t + 7];
					void 0 !== e && void 0 !== n || Y(t, this.length - 8);
					const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
					return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
				})), s.prototype.readFloatLE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), n.read(this, t, !0, 23, 4)
				}, s.prototype.readFloatBE = function(t, e) {
					return t >>>= 0, e || N(t, 4, this.length), n.read(this, t, !1, 23, 4)
				}, s.prototype.readDoubleLE = function(t, e) {
					return t >>>= 0, e || N(t, 8, this.length), n.read(this, t, !0, 52, 8)
				}, s.prototype.readDoubleBE = function(t, e) {
					return t >>>= 0, e || N(t, 8, this.length), n.read(this, t, !1, 52, 8)
				}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, n >>>= 0, !r) {
						x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
					}
					let i = 1,
						o = 0;
					for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
					return e + n
				}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, n >>>= 0, !r) {
						x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
					}
					let i = n - 1,
						o = 1;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
					return e + n
				}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
				}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
				}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigUInt64LE = Z((function(t, e = 0) {
					return U(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeBigUInt64BE = Z((function(t, e = 0) {
					return C(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
				})), s.prototype.writeIntLE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * n - 1);
						x(this, t, e, n, r - 1, -r)
					}
					let i = 0,
						o = 1,
						s = 0;
					for (this[e] = 255 & t; ++i < n && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + n
				}, s.prototype.writeIntBE = function(t, e, n, r) {
					if (t = +t, e >>>= 0, !r) {
						const r = Math.pow(2, 8 * n - 1);
						x(this, t, e, n, r - 1, -r)
					}
					let i = n - 1,
						o = 1,
						s = 0;
					for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
					return e + n
				}, s.prototype.writeInt8 = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
				}, s.prototype.writeInt16LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
				}, s.prototype.writeInt16BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
				}, s.prototype.writeInt32LE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
				}, s.prototype.writeInt32BE = function(t, e, n) {
					return t = +t, e >>>= 0, n || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
				}, s.prototype.writeBigInt64LE = Z((function(t, e = 0) {
					return U(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeBigInt64BE = Z((function(t, e = 0) {
					return C(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
				})), s.prototype.writeFloatLE = function(t, e, n) {
					return L(this, t, e, !0, n)
				}, s.prototype.writeFloatBE = function(t, e, n) {
					return L(this, t, e, !1, n)
				}, s.prototype.writeDoubleLE = function(t, e, n) {
					return R(this, t, e, !0, n)
				}, s.prototype.writeDoubleBE = function(t, e, n) {
					return R(this, t, e, !1, n)
				}, s.prototype.copy = function(t, e, n, r) {
					if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
					if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
					if (0 === t.length || 0 === this.length) return 0;
					if (e < 0) throw new RangeError("targetStart out of bounds");
					if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
					if (r < 0) throw new RangeError("sourceEnd out of bounds");
					r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
					const i = r - n;
					return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e), i
				}, s.prototype.fill = function(t, e, n, r) {
					if ("string" == typeof t) {
						if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
						if ("string" == typeof r && !s.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
						if (1 === t.length) {
							const e = t.charCodeAt(0);
							("utf8" === r && e < 128 || "latin1" === r) && (t = e)
						}
					} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
					if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
					if (n <= e) return this;
					let i;
					if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
						for (i = e; i < n; ++i) this[i] = t;
					else {
						const o = s.isBuffer(t) ? t : s.from(t, r),
							a = o.length;
						if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
						for (i = 0; i < n - e; ++i) this[i + e] = o[i % a]
					}
					return this
				};
				const P = {};

				function F(t, e, n) {
					P[t] = class NodeError extends n {
						constructor() {
							super(), Object.defineProperty(this, "message", {
								value: e.apply(this, arguments),
								writable: !0,
								configurable: !0
							}), this.name = `${this.name} [${t}]`, this.stack, delete this.name
						}
						get code() {
							return t
						}
						set code(t) {
							Object.defineProperty(this, "code", {
								configurable: !0,
								enumerable: !0,
								value: t,
								writable: !0
							})
						}
						toString() {
							return `${this.name} [${t}]: ${this.message}`
						}
					}
				}

				function q(t) {
					let e = "",
						n = t.length;
					const r = "-" === t[0] ? 1 : 0;
					for (; n >= r + 4; n -= 3) e = `_${t.slice(n-3,n)}${e}`;
					return `${t.slice(0,n)}${e}`
				}

				function $(t, e, n, r, i, o) {
					if (t > n || t < e) {
						const r = "bigint" == typeof e ? "n" : "";
						let i;
						throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${e}${r} and <= ${n}${r}`, new P.ERR_OUT_OF_RANGE("value", i, t)
					}! function(t, e, n) {
						D(e, "offset"), void 0 !== t[e] && void 0 !== t[e + n] || Y(e, t.length - (n + 1))
					}(r, i, o)
				}

				function D(t, e) {
					if ("number" != typeof t) throw new P.ERR_INVALID_ARG_TYPE(e, "number", t)
				}

				function Y(t, e, n) {
					if (Math.floor(t) !== t) throw D(t, n), new P.ERR_OUT_OF_RANGE(n || "offset", "an integer", t);
					if (e < 0) throw new P.ERR_BUFFER_OUT_OF_BOUNDS;
					throw new P.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${e}`, t)
				}
				F("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
					return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
				}), RangeError), F("ERR_INVALID_ARG_TYPE", (function(t, e) {
					return `The "${t}" argument must be of type number. Received type ${typeof e}`
				}), TypeError), F("ERR_OUT_OF_RANGE", (function(t, e, n) {
					let r = `The value of "${t}" is out of range.`,
						i = n;
					return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = q(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = q(i)), i += "n"), r += ` It must be ${e}. Received ${i}`
				}), RangeError);
				const X = /[^+/0-9A-Za-z-_]/g;

				function V(t, e) {
					let n;
					e = e || 1 / 0;
					const r = t.length;
					let i = null;
					const o = [];
					for (let s = 0; s < r; ++s) {
						if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
							if (!i) {
								if (n > 56319) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								if (s + 1 === r) {
									(e -= 3) > -1 && o.push(239, 191, 189);
									continue
								}
								i = n;
								continue
							}
							if (n < 56320) {
								(e -= 3) > -1 && o.push(239, 191, 189), i = n;
								continue
							}
							n = 65536 + (i - 55296 << 10 | n - 56320)
						} else i && (e -= 3) > -1 && o.push(239, 191, 189);
						if (i = null, n < 128) {
							if ((e -= 1) < 0) break;
							o.push(n)
						} else if (n < 2048) {
							if ((e -= 2) < 0) break;
							o.push(n >> 6 | 192, 63 & n | 128)
						} else if (n < 65536) {
							if ((e -= 3) < 0) break;
							o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
						} else {
							if (!(n < 1114112)) throw new Error("Invalid code point");
							if ((e -= 4) < 0) break;
							o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
						}
					}
					return o
				}

				function K(t) {
					return e.toByteArray(function(t) {
						if ((t = (t = t.split("=")[0]).trim().replace(X, "")).length < 2) return "";
						for (; t.length % 4 != 0;) t += "=";
						return t
					}(t))
				}

				function G(t, e, n, r) {
					let i;
					for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
					return i
				}

				function W(t, e) {
					return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
				}

				function H(t) {
					return t != t
				}
				const J = function() {
					const t = new Array(256);
					for (let e = 0; e < 16; ++e) {
						const n = 16 * e;
						for (let r = 0; r < 16; ++r) t[n + r] = "0123456789abcdef" [e] + "0123456789abcdef" [r]
					}
					return t
				}();

				function Z(t) {
					return "undefined" == typeof BigInt ? Q : t
				}

				function Q() {
					throw new Error("BigInt not supported")
				}
			}(U);
			const D = /(?:\/|-)(?:nftv2)_([^_]+)_(\w+)_.*\.(?:png|svg)/,
				Y = t => {
					const e = t.match(D),
						n = null == e ? void 0 : e[1];
					if (!n) return null;
					const r = decodeURI(n);
					return U.Buffer.from(r, "base64").toString()
				},
				X = ["legendary", "epic", "rare", "test"],
				V = t => {
					var e;
					const n = t.match(D),
						r = null == (e = null == n ? void 0 : n[2]) ? void 0 : e.toLowerCase();
					return r && (t => X.includes(t))(r) ? r : null
				};
			var K = "_container_11n76_30",
				G = "_cardContainer_11n76_30",
				W = "_card_11n76_30";
			const H = ({
				className: t,
				imageUrl: e
			}) => {
				const n = {
					title: "Test Snoo",
					rarity: V(e) || "test",
					svgImageUrl: e
				};
				return i.a.createElement("div", {
					className: I(K, t)
				}, i.a.createElement("div", {
					className: G
				}, i.a.createElement(A, {
					className: W,
					animate: !0,
					nft: n
				})))
			}
		},
		"./node_modules/@reddit/crypto/react/ui/index.es.js": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "c", (function() {
				return x
			})), n.d(e, "d", (function() {
				return L
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "f", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-dom/index.js"),
				s = n.n(o),
				a = (n("./node_modules/@reddit/crypto/react/ui/index.es.js"), {
					exports: {}
				});
			! function(t) {
				! function() {
					var e = {}.hasOwnProperty;

					function n() {
						for (var t = [], r = 0; r < arguments.length; r++) {
							var i = arguments[r];
							if (i) {
								var o = typeof i;
								if ("string" === o || "number" === o) t.push(i);
								else if (Array.isArray(i)) {
									if (i.length) {
										var s = n.apply(null, i);
										s && t.push(s)
									}
								} else if ("object" === o)
									if (i.toString === Object.prototype.toString)
										for (var a in i) e.call(i, a) && i[a] && t.push(a);
									else t.push(i.toString())
							}
						}
						return t.join(" ")
					}
					t.exports ? (n.default = n, t.exports = n) : window.classNames = n
				}()
			}(a);
			var u = a.exports;
			var c = {
				button: "_button_a4lqm_30",
				loadingButton: "_loadingButton_a4lqm_40",
				greyTheme: "_greyTheme_a4lqm_45",
				whiteTheme: "_whiteTheme_a4lqm_48",
				outlinedTheme: "_outlinedTheme_a4lqm_52",
				whiteInvertedTheme: "_whiteInvertedTheme_a4lqm_55",
				orangeTheme: "_orangeTheme_a4lqm_70",
				largeOrangeTheme: "_largeOrangeTheme_a4lqm_71",
				blueTheme: "_blueTheme_a4lqm_85",
				blueInvertedTheme: "_blueInvertedTheme_a4lqm_86",
				disabled: "_disabled_a4lqm_100"
			};
			const l = ({
				className: t,
				theme: e = "white",
				disabled: n,
				onClick: r,
				children: o,
				loading: s
			}) => i.a.createElement("button", {
				onClick: n ? void 0 : r,
				className: u(c.button, t, s ? c.loadingButton : null, n ? c.disabled : null, f(e))
			}, s ? i.a.createElement(S, {
				className: c.loadingImage
			}) : i.a.createElement(i.a.Fragment, null, o));

			function f(t) {
				switch (t) {
					case "grey":
						return c.greyTheme;
					case "white":
						return c.whiteTheme;
					case "white_inverted":
						return c.whiteInvertedTheme;
					case "outlined":
						return c.outlinedTheme;
					case "orange":
						return c.orangeTheme;
					case "largeOrange":
						return c.largeOrangeTheme;
					case "blue":
						return c.blueTheme;
					case "blue_inverted":
						return c.blueInvertedTheme
				}
			}
			var h = "https://www.redditstatic.com/crypto-assets/v2/close-dark-f5902178f9.svg",
				p = "https://www.redditstatic.com/crypto-assets/v2/close-1a7014e63e.svg";
			var d = "_closeButton_18ifj_1";
			const g = ({
				theme: t,
				className: e,
				onClick: n
			}) => i.a.createElement("button", {
				className: u(d, e),
				onClick: n
			}, i.a.createElement("img", {
				src: m(t)
			}));

			function m(t) {
				switch (t) {
					case "dark":
						return h;
					default:
						return p
				}
			}
			var y = {};
			Object.defineProperty(y, "__esModule", {
				value: !0
			});
			var v, b = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
				},
				w = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				_ = i.a,
				E = (v = _) && v.__esModule ? v : {
					default: v
				},
				B = s.a;
			var O = function(t) {
				function e(t) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var n = function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					n.state = {
						style: {}
					};
					return n.width = null, n.height = null, n.left = null, n.top = null, n.transitionTimeout = null, n.updateCall = null, n.element = null, n.settings = Object.assign({}, {
						reverse: !1,
						max: 35,
						perspective: 1e3,
						easing: "cubic-bezier(.03,.98,.52,.99)",
						scale: "1.1",
						speed: "1000",
						transition: !0,
						axis: null,
						reset: !0
					}, n.props.options), n.reverse = n.settings.reverse ? -1 : 1, n.onMouseEnter = n.onMouseEnter.bind(n, n.props.onMouseEnter), n.onMouseMove = n.onMouseMove.bind(n, n.props.onMouseMove), n.onMouseLeave = n.onMouseLeave.bind(n, n.props.onMouseLeave), n
				}
				return function(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}(e, t), w(e, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, B.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: b({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), t(e)
					}
				}, {
					key: "reset",
					value: function() {
						var t = this;
						window.requestAnimationFrame((function() {
							t.setState(Object.assign({}, t.state, {
								style: b({}, t.state.style, {
									transform: "perspective(" + t.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return e.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = e, this.updateCall = requestAnimationFrame(this.update.bind(this, e)), t(e)
					}
				}, {
					key: "setTransition",
					value: function() {
						var t = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: b({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							t.setState(Object.assign({}, t.state, {
								style: b({}, t.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), t(e)
					}
				}, {
					key: "getValues",
					value: function(t) {
						var e = (t.nativeEvent.clientX - this.left) / this.width,
							n = (t.nativeEvent.clientY - this.top) / this.height,
							r = Math.min(Math.max(e, 0), 1),
							i = Math.min(Math.max(n, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - r * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (i * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * r,
							percentageY: 100 * i
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var t = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
					}
				}, {
					key: "update",
					value: function(t) {
						var e = this.getValues(t);
						this.setState(Object.assign({}, this.state, {
							style: b({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var t = Object.assign({}, this.props.style, this.state.style);
						return E.default.createElement("div", {
							style: t,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), e
			}(_.Component);
			y.default = O;
			var A = {
				container: "_container_s2nn9_30"
			};
			const T = ({
				value: t,
				direction: e,
				className: n
			}) => {
				const r = "up" === e;
				return i.a.createElement("div", {
					className: u(A.container, n, r ? A.upVote : A.downVote)
				}, i.a.createElement("img", {
					src: r ? "https://www.redditstatic.com/crypto-assets/v2/upvote-e1dfcbf404.svg" : "https://www.redditstatic.com/crypto-assets/v2/downvote-37897edc0e.svg"
				}), t ? function(t) {
					let e;
					"number" == typeof t ? (t >= 1e3 && (t /= 1e3, t = `${t=Math.round(100*t)/100}k`), e = t.toString()) : e = t;
					return e
				}(t) : void 0)
			};
			const I = ({
				children: t
			}) => i.a.createElement(i.a.Fragment, null, t);
			var k = {
				container: "_container_1ve0i_30",
				toast: "_toast_1ve0i_42",
				bar: "_bar_1ve0i_56",
				errorKind: "_errorKind_1ve0i_59",
				successKind: "_successKind_1ve0i_62",
				image: "_image_1ve0i_65",
				content: "_content_1ve0i_69",
				close: "_close_1ve0i_76",
				entering: "_entering_1ve0i_91",
				fadeIn: "_fadeIn_1ve0i_1",
				leaving: "_leaving_1ve0i_94",
				fadeOut: "_fadeOut_1ve0i_1"
			};
			const M = ({
					className: t,
					kind: e,
					children: n,
					onClose: s,
					duration: a = 0
				}) => {
					const u = Object(r.useMemo)(j, []);
					return "undefined" == typeof document || void 0 === document.createElement ? i.a.createElement(i.a.Fragment, null) : Object(o.createPortal)(i.a.createElement(N, {
						className: t,
						kind: e,
						onClose: s,
						duration: a
					}, n), u)
				},
				N = ({
					className: t,
					kind: e,
					children: n,
					onClose: o,
					duration: s = 0
				}) => {
					const [a, c] = Object(r.useState)(!1), l = Object(r.useRef)(null), f = Object(r.useCallback)(t => {
						t && (t.stopPropagation(), t.preventDefault()), c(!0), o && o()
					}, [o]);
					return Object(r.useEffect)(() => {
						c(!1);
						const t = l.current;
						t && (t.classList.add(k.entering), t.addEventListener("animationend", () => {
							t.classList.remove(k.entering)
						}))
					}, [n]), Object(r.useEffect)(() => {
						const t = s ? setTimeout(f, s) : null;
						return () => {
							t && clearTimeout(t)
						}
					}, [s, f]), a ? i.a.createElement(i.a.Fragment, null) : i.a.createElement("div", {
						ref: l,
						className: u(k.toast, t, "error" === e ? k.errorKind : k.successKind)
					}, i.a.createElement("div", {
						className: k.bar
					}), i.a.createElement("div", {
						className: k.image
					}, i.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/error-image-c10a891d4e.svg"
					})), i.a.createElement("div", {
						className: k.content
					}, n), i.a.createElement("div", {
						className: k.close,
						onClick: f
					}, i.a.createElement("img", {
						src: "https://www.redditstatic.com/crypto-assets/v2/close-41452e2e4d.png"
					})))
				},
				x = () => i.a.createElement(M, {
					kind: "error",
					duration: 5e3
				}, i.a.createElement(I, {
					desc: ""
				}, "Something went wrong, please try again")),
				U = "reddit-crypto-toast-wrapper";

			function j() {
				let t = document.getElementById(U);
				return t || ((t = document.createElement("div")).id = U, t.className = k.container, document.body.appendChild(t)), t
			}
			var C = "_container_10e6p_1";
			const S = ({
				className: t
			}) => i.a.createElement("img", {
				src: "https://www.redditstatic.com/crypto-assets/v2/loading-84b8aa447d.svg",
				className: u(t, C)
			});
			const L = ({
				href: t,
				className: e,
				children: n
			}) => i.a.createElement("a", {
				href: t,
				target: "_blank",
				rel: "noopener noreferrer",
				className: e
			}, n)
		},
		"./node_modules/classnames/index.js": function(t, e, n) {
			var r;
			! function() {
				"use strict";
				var n = {}.hasOwnProperty;

				function i() {
					for (var t = [], e = 0; e < arguments.length; e++) {
						var r = arguments[e];
						if (r) {
							var o = typeof r;
							if ("string" === o || "number" === o) t.push(r);
							else if (Array.isArray(r)) {
								if (r.length) {
									var s = i.apply(null, r);
									s && t.push(s)
								}
							} else if ("object" === o)
								if (r.toString === Object.prototype.toString)
									for (var a in r) n.call(r, a) && r[a] && t.push(a);
								else t.push(r.toString())
						}
					}
					return t.join(" ")
				}
				t.exports ? (i.default = i, t.exports = i) : void 0 === (r = function() {
					return i
				}.apply(e, [])) || (t.exports = r)
			}()
		},
		"./node_modules/react-tilt/dist/tilt.js": function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var r, i = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
				},
				o = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function(e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				s = n("./node_modules/react/index.js"),
				a = (r = s) && r.__esModule ? r : {
					default: r
				},
				u = n("./node_modules/react-dom/index.js");
			var c = function(t) {
				function e(t) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var n = function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
					n.state = {
						style: {}
					};
					return n.width = null, n.height = null, n.left = null, n.top = null, n.transitionTimeout = null, n.updateCall = null, n.element = null, n.settings = Object.assign({}, {
						reverse: !1,
						max: 35,
						perspective: 1e3,
						easing: "cubic-bezier(.03,.98,.52,.99)",
						scale: "1.1",
						speed: "1000",
						transition: !0,
						axis: null,
						reset: !0
					}, n.props.options), n.reverse = n.settings.reverse ? -1 : 1, n.onMouseEnter = n.onMouseEnter.bind(n, n.props.onMouseEnter), n.onMouseMove = n.onMouseMove.bind(n, n.props.onMouseMove), n.onMouseLeave = n.onMouseLeave.bind(n, n.props.onMouseLeave), n
				}
				return function(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}(e, t), o(e, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, u.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: i({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), t(e)
					}
				}, {
					key: "reset",
					value: function() {
						var t = this;
						window.requestAnimationFrame((function() {
							t.setState(Object.assign({}, t.state, {
								style: i({}, t.state.style, {
									transform: "perspective(" + t.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return e.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = e, this.updateCall = requestAnimationFrame(this.update.bind(this, e)), t(e)
					}
				}, {
					key: "setTransition",
					value: function() {
						var t = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: i({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							t.setState(Object.assign({}, t.state, {
								style: i({}, t.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							e = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), t(e)
					}
				}, {
					key: "getValues",
					value: function(t) {
						var e = (t.nativeEvent.clientX - this.left) / this.width,
							n = (t.nativeEvent.clientY - this.top) / this.height,
							r = Math.min(Math.max(e, 0), 1),
							i = Math.min(Math.max(n, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - r * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (i * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * r,
							percentageY: 100 * i
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var t = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top
					}
				}, {
					key: "update",
					value: function(t) {
						var e = this.getValues(t);
						this.setState(Object.assign({}, this.state, {
							style: i({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var t = Object.assign({}, this.props.style, this.state.style);
						return a.default.createElement("div", {
							style: t,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), e
			}(s.Component);
			e.default = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~NftProfileUnit.1dbbc4bc022cb69c5e17.js.map