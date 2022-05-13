// https://www.redditstatic.com/desktop2x/2.06ee896472e56277993e.js
// Retrieved at 5/12/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./node_modules/@reddit/crypto/core/wallets/index.es.js": function(t, e, r) {
			"use strict";
			var n, i, o = r("./node_modules/ethers/lib.esm/index.js");
			(i = n || (n = {}))[i.Metamask = 1] = "Metamask", i[i.CoinbaseWallet = 2] = "CoinbaseWallet";
			class s {
				constructor(t, e) {
					this.type = t, this.provider = e, this._cachedAddress = e.selectedAddress || ""
				}
				get address() {
					return this._cachedAddress
				}
				async requestAddress() {
					return async function(t) {
						const e = await t.request({
							method: "eth_requestAccounts"
						});
						return Array.isArray(e) ? e.filter(t => t && t.length > 0).map(t => t.toLowerCase()) : []
					}(this.provider).then(t => (this._cachedAddress = t[0], this._cachedAddress))
				}
			}
			o.ethers.providers.Web3Provider
		},
		"./node_modules/@reddit/crypto/vault/index.es.js": function(t, e, r) {
			"use strict";
			(function(t, n) {
				r.d(e, "a", (function() {
					return go
				})), r.d(e, "b", (function() {
					return f
				}));
				var i = r("./node_modules/ethers/lib.esm/ethers.js"),
					o = r("./node_modules/ethers/lib.esm/index.js");
				const s = "https://meta-api.reddit.com";
				async function a(t, e) {
					const r = new Headers;
					r.append("Authorization", `Bearer ${t}`), e.contentType && r.append("Content-Type", e.contentType);
					const n = await fetch(`${s}${e.endpoint}`, {
							method: e.method,
							body: JSON.stringify(e.data),
							headers: r
						}),
						i = n.status;
					if (204 === i) return {
						ok: !0,
						status: i
					};
					const o = await n.json();
					return n.ok ? {
						body: o,
						ok: !0,
						status: i
					} : {
						error: o,
						ok: !1,
						status: i
					}
				}
				const h = "registration-challenge-EIP712",
					u = "crypto-registration-EIP712";
				async function f(t, e) {
					var r, n, i;
					const o = await a(t, {
						method: "GET",
						endpoint: `/crypto-contacts?providers=ethereum&userIds=${e}`
					});
					if (!1 === o.ok) throw new Error("Error getting user active address");
					return (null == (i = null == (n = null == (r = o.body.contacts) ? void 0 : r[e]) ? void 0 : n.find(t => t.active)) ? void 0 : i.address) || null
				}
				var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

				function c(t) {
					if (t.__esModule) return t;
					var e = Object.defineProperty({}, "__esModule", {
						value: !0
					});
					return Object.keys(t).forEach((function(r) {
						var n = Object.getOwnPropertyDescriptor(t, r);
						Object.defineProperty(e, r, n.get ? n : {
							enumerable: !0,
							get: function() {
								return t[r]
							}
						})
					})), e
				}
				for (var d = {}, p = {
						byteLength: function(t) {
							var e = m(t),
								r = e[0],
								n = e[1];
							return 3 * (r + n) / 4 - n
						},
						toByteArray: function(t) {
							var e, r, n = m(t),
								i = n[0],
								o = n[1],
								s = new _(function(t, e, r) {
									return 3 * (e + r) / 4 - r
								}(0, i, o)),
								a = 0,
								h = o > 0 ? i - 4 : i;
							for (r = 0; r < h; r += 4) e = g[t.charCodeAt(r)] << 18 | g[t.charCodeAt(r + 1)] << 12 | g[t.charCodeAt(r + 2)] << 6 | g[t.charCodeAt(r + 3)], s[a++] = e >> 16 & 255, s[a++] = e >> 8 & 255, s[a++] = 255 & e;
							2 === o && (e = g[t.charCodeAt(r)] << 2 | g[t.charCodeAt(r + 1)] >> 4, s[a++] = 255 & e);
							1 === o && (e = g[t.charCodeAt(r)] << 10 | g[t.charCodeAt(r + 1)] << 4 | g[t.charCodeAt(r + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
							return s
						},
						fromByteArray: function(t) {
							for (var e, r = t.length, n = r % 3, i = [], o = 0, s = r - n; o < s; o += 16383) i.push(E(t, o, o + 16383 > s ? s : o + 16383));
							1 === n ? (e = t[r - 1], i.push(y[e >> 2] + y[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i.push(y[e >> 10] + y[e >> 4 & 63] + y[e << 2 & 63] + "="));
							return i.join("")
						}
					}, y = [], g = [], _ = "undefined" != typeof Uint8Array ? Uint8Array : Array, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", w = 0, v = b.length; w < v; ++w) y[w] = b[w], g[b.charCodeAt(w)] = w;

				function m(t) {
					var e = t.length;
					if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
					var r = t.indexOf("=");
					return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
				}

				function E(t, e, r) {
					for (var n, i, o = [], s = e; s < r; s += 3) n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), o.push(y[(i = n) >> 18 & 63] + y[i >> 12 & 63] + y[i >> 6 & 63] + y[63 & i]);
					return o.join("")
				}
				g["-".charCodeAt(0)] = 62, g["_".charCodeAt(0)] = 63;
				var S = {};

				function R(t) {
					const e = i.utils.keccak256(t);
					return d.Buffer.from(e.slice(2, e.length), "hex")
				}

				function B(t, e = {}) {
					let r = function t(e, r = [], n = {}) {
						if (r.includes(e)) return r;
						if (void 0 === n[e]) return r;
						r.push(e);
						for (const i of n[e])
							for (const e of t(i.type, r)) r.includes(e) || r.push(e);
						return r
					}(t);
					r = r.filter(e => e !== t), r = [t].concat(r.sort());
					let n = "";
					for (const i of r) {
						if (!e[i]) throw new Error(`Type '${i}' not defined in types (${JSON.stringify(e)})`);
						n += `${i}(${e[i].map(({name:t,type:e})=>`
						$ {
							e
						}
						$ {
							t
						}
						`).join(",")})`
					}
					return n
				}

				function k(t, e, r = {}) {
					const n = [],
						o = [];
					n.push("bytes32"), o.push(function(t, e = {}) {
						return R(d.Buffer.from(B(t, e)))
					}(t, r));
					for (const i of r[t]) {
						let t = e[i.name];
						if ("string" === i.type || "bytes" === i.type) n.push("bytes32"), t = R(d.Buffer.from(t)), o.push(t);
						else if (void 0 !== r[i.type]) n.push("bytes32"), t = R(k(i.type, t, r)), o.push(t);
						else {
							if (i.type.lastIndexOf("]") === i.type.length - 1) throw new Error("Cannot handle Array types");
							n.push(i.type), o.push(t)
						}
					}
					return function(t, e) {
						const r = i.utils.defaultAbiCoder.encode(t, e);
						return d.Buffer.from(r.slice(2, r.length), "hex")
					}(n, o)
				}

				function A(t, e = {}) {
					return R(k("EIP712Domain", t, {
						EIP712Domain: e.EIP712Domain
					}))
				}

				function I(t, e, r = {}) {
					return R(k(t, e, r))
				}
				async function T(t, e) {
					const {
						domain: r,
						primaryType: n,
						message: o,
						types: s
					} = t, a = function(t, e, r, n) {
						return R(d.Buffer.concat([d.Buffer.from("1901", "hex"), A(t, n), I(e, r, n)]))
					}(r, n, o, s);
					return i.utils.joinSignature(e._signingKey().signDigest(a))
				}
				S.read = function(t, e, r, n, i) {
						var o, s, a = 8 * i - n - 1,
							h = (1 << a) - 1,
							u = h >> 1,
							f = -7,
							l = r ? i - 1 : 0,
							c = r ? -1 : 1,
							d = t[e + l];
						for (l += c, o = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; o = 256 * o + t[e + l], l += c, f -= 8);
						for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + t[e + l], l += c, f -= 8);
						if (0 === o) o = 1 - u;
						else {
							if (o === h) return s ? NaN : 1 / 0 * (d ? -1 : 1);
							s += Math.pow(2, n), o -= u
						}
						return (d ? -1 : 1) * s * Math.pow(2, o - n)
					}, S.write = function(t, e, r, n, i, o) {
						var s, a, h, u = 8 * o - i - 1,
							f = (1 << u) - 1,
							l = f >> 1,
							c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
							d = n ? 0 : o - 1,
							p = n ? 1 : -1,
							y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
						for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = f) : (s = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -s)) < 1 && (s--, h *= 2), (e += s + l >= 1 ? c / h : c * Math.pow(2, 1 - l)) * h >= 2 && (s++, h /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (e * h - 1) * Math.pow(2, i), s += l) : (a = e * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + d] = 255 & a, d += p, a /= 256, i -= 8);
						for (s = s << i | a, u += i; u > 0; t[r + d] = 255 & s, d += p, s /= 256, u -= 8);
						t[r + d - p] |= 128 * y
					},
					function(t) {
						const e = p,
							r = S,
							n = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
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

						function s(t, e, r) {
							if ("number" == typeof t) {
								if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
								return u(t)
							}
							return a(t, e, r)
						}

						function a(t, e, r) {
							if ("string" == typeof t) return function(t, e) {
								"string" == typeof e && "" !== e || (e = "utf8");
								if (!s.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
								const r = 0 | d(t, e);
								let n = o(r);
								const i = n.write(t, e);
								i !== r && (n = n.slice(0, i));
								return n
							}(t, e);
							if (ArrayBuffer.isView(t)) return function(t) {
								if (Y(t, Uint8Array)) {
									const e = new Uint8Array(t);
									return l(e.buffer, e.byteOffset, e.byteLength)
								}
								return f(t)
							}(t);
							if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
							if (Y(t, ArrayBuffer) || t && Y(t.buffer, ArrayBuffer)) return l(t, e, r);
							if ("undefined" != typeof SharedArrayBuffer && (Y(t, SharedArrayBuffer) || t && Y(t.buffer, SharedArrayBuffer))) return l(t, e, r);
							if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
							const n = t.valueOf && t.valueOf();
							if (null != n && n !== t) return s.from(n, e, r);
							const i = function(t) {
								if (s.isBuffer(t)) {
									const e = 0 | c(t.length),
										r = o(e);
									return 0 === r.length ? r : (t.copy(r, 0, 0, e), r)
								}
								if (void 0 !== t.length) return "number" != typeof t.length || J(t.length) ? o(0) : f(t);
								if ("Buffer" === t.type && Array.isArray(t.data)) return f(t.data)
							}(t);
							if (i) return i;
							if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return s.from(t[Symbol.toPrimitive]("string"), e, r);
							throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
						}

						function h(t) {
							if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
							if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
						}

						function u(t) {
							return h(t), o(t < 0 ? 0 : 0 | c(t))
						}

						function f(t) {
							const e = t.length < 0 ? 0 : 0 | c(t.length),
								r = o(e);
							for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
							return r
						}

						function l(t, e, r) {
							if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
							if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
							let n;
							return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, s.prototype), n
						}

						function c(t) {
							if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
							return 0 | t
						}

						function d(t, e) {
							if (s.isBuffer(t)) return t.length;
							if (ArrayBuffer.isView(t) || Y(t, ArrayBuffer)) return t.byteLength;
							if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
							const r = t.length,
								n = arguments.length > 2 && !0 === arguments[2];
							if (!n && 0 === r) return 0;
							let i = !1;
							for (;;) switch (e) {
								case "ascii":
								case "latin1":
								case "binary":
									return r;
								case "utf8":
								case "utf-8":
									return H(t).length;
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return 2 * r;
								case "hex":
									return r >>> 1;
								case "base64":
									return V(t).length;
								default:
									if (i) return n ? -1 : H(t).length;
									e = ("" + e).toLowerCase(), i = !0
							}
						}

						function y(t, e, r) {
							let n = !1;
							if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
							if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
							if ((r >>>= 0) <= (e >>>= 0)) return "";
							for (t || (t = "utf8");;) switch (t) {
								case "hex":
									return L(this, e, r);
								case "utf8":
								case "utf-8":
									return k(this, e, r);
								case "ascii":
									return I(this, e, r);
								case "latin1":
								case "binary":
									return T(this, e, r);
								case "base64":
									return B(this, e, r);
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return O(this, e, r);
								default:
									if (n) throw new TypeError("Unknown encoding: " + t);
									t = (t + "").toLowerCase(), n = !0
							}
						}

						function g(t, e, r) {
							const n = t[e];
							t[e] = t[r], t[r] = n
						}

						function _(t, e, r, n, i) {
							if (0 === t.length) return -1;
							if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), J(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
								if (i) return -1;
								r = t.length - 1
							} else if (r < 0) {
								if (!i) return -1;
								r = 0
							}
							if ("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, i);
							if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, n, i);
							throw new TypeError("val must be string, number or Buffer")
						}

						function b(t, e, r, n, i) {
							let o, s = 1,
								a = t.length,
								h = e.length;
							if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
								if (t.length < 2 || e.length < 2) return -1;
								s = 2, a /= 2, h /= 2, r /= 2
							}

							function u(t, e) {
								return 1 === s ? t[e] : t.readUInt16BE(e * s)
							}
							if (i) {
								let n = -1;
								for (o = r; o < a; o++)
									if (u(t, o) === u(e, -1 === n ? 0 : o - n)) {
										if (-1 === n && (n = o), o - n + 1 === h) return n * s
									} else -1 !== n && (o -= o - n), n = -1
							} else
								for (r + h > a && (r = a - h), o = r; o >= 0; o--) {
									let r = !0;
									for (let n = 0; n < h; n++)
										if (u(t, o + n) !== u(e, n)) {
											r = !1;
											break
										} if (r) return o
								}
							return -1
						}

						function w(t, e, r, n) {
							r = Number(r) || 0;
							const i = t.length - r;
							n ? (n = Number(n)) > i && (n = i) : n = i;
							const o = e.length;
							let s;
							for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
								const n = parseInt(e.substr(2 * s, 2), 16);
								if (J(n)) return s;
								t[r + s] = n
							}
							return s
						}

						function v(t, e, r, n) {
							return G(H(e, t.length - r), t, r, n)
						}

						function m(t, e, r, n) {
							return G(function(t) {
								const e = [];
								for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
								return e
							}(e), t, r, n)
						}

						function E(t, e, r, n) {
							return G(V(e), t, r, n)
						}

						function R(t, e, r, n) {
							return G(function(t, e) {
								let r, n, i;
								const o = [];
								for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
								return o
							}(e, t.length - r), t, r, n)
						}

						function B(t, r, n) {
							return 0 === r && n === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(r, n))
						}

						function k(t, e, r) {
							r = Math.min(t.length, r);
							const n = [];
							let i = e;
							for (; i < r;) {
								const e = t[i];
								let o = null,
									s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
								if (i + s <= r) {
									let r, n, a, h;
									switch (s) {
										case 1:
											e < 128 && (o = e);
											break;
										case 2:
											128 == (192 & (r = t[i + 1])) && (h = (31 & e) << 6 | 63 & r) > 127 && (o = h);
											break;
										case 3:
											r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (h = (15 & e) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (h < 55296 || h > 57343) && (o = h);
											break;
										case 4:
											r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (h = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a) > 65535 && h < 1114112 && (o = h)
									}
								}
								null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), i += s
							}
							return function(t) {
								const e = t.length;
								if (e <= A) return String.fromCharCode.apply(String, t);
								let r = "",
									n = 0;
								for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += A));
								return r
							}(n)
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
						}), s.poolSize = 8192, s.from = function(t, e, r) {
							return a(t, e, r)
						}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(t, e, r) {
							return function(t, e, r) {
								return h(t), t <= 0 ? o(t) : void 0 !== e ? "string" == typeof r ? o(t).fill(e, r) : o(t).fill(e) : o(t)
							}(t, e, r)
						}, s.allocUnsafe = function(t) {
							return u(t)
						}, s.allocUnsafeSlow = function(t) {
							return u(t)
						}, s.isBuffer = function(t) {
							return null != t && !0 === t._isBuffer && t !== s.prototype
						}, s.compare = function(t, e) {
							if (Y(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), Y(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(t) || !s.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
							if (t === e) return 0;
							let r = t.length,
								n = e.length;
							for (let i = 0, o = Math.min(r, n); i < o; ++i)
								if (t[i] !== e[i]) {
									r = t[i], n = e[i];
									break
								} return r < n ? -1 : n < r ? 1 : 0
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
							let r;
							if (void 0 === e)
								for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
							const n = s.allocUnsafe(e);
							let i = 0;
							for (r = 0; r < t.length; ++r) {
								let e = t[r];
								if (Y(e, Uint8Array)) i + e.length > n.length ? (s.isBuffer(e) || (e = s.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
								else {
									if (!s.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
									e.copy(n, i)
								}
								i += e.length
							}
							return n
						}, s.byteLength = d, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
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
							return 0 === t ? "" : 0 === arguments.length ? k(this, 0, t) : y.apply(this, arguments)
						}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(t) {
							if (!s.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
							return this === t || 0 === s.compare(this, t)
						}, s.prototype.inspect = function() {
							let e = "";
							const r = t.INSPECT_MAX_BYTES;
							return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
						}, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(t, e, r, n, i) {
							if (Y(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
							if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
							if (n >= i && e >= r) return 0;
							if (n >= i) return -1;
							if (e >= r) return 1;
							if (this === t) return 0;
							let o = (i >>>= 0) - (n >>>= 0),
								a = (r >>>= 0) - (e >>>= 0);
							const h = Math.min(o, a),
								u = this.slice(n, i),
								f = t.slice(e, r);
							for (let s = 0; s < h; ++s)
								if (u[s] !== f[s]) {
									o = u[s], a = f[s];
									break
								} return o < a ? -1 : a < o ? 1 : 0
						}, s.prototype.includes = function(t, e, r) {
							return -1 !== this.indexOf(t, e, r)
						}, s.prototype.indexOf = function(t, e, r) {
							return _(this, t, e, r, !0)
						}, s.prototype.lastIndexOf = function(t, e, r) {
							return _(this, t, e, r, !1)
						}, s.prototype.write = function(t, e, r, n) {
							if (void 0 === e) n = "utf8", r = this.length, e = 0;
							else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
							else {
								if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
								e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
							}
							const i = this.length - e;
							if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
							n || (n = "utf8");
							let o = !1;
							for (;;) switch (n) {
								case "hex":
									return w(this, t, e, r);
								case "utf8":
								case "utf-8":
									return v(this, t, e, r);
								case "ascii":
								case "latin1":
								case "binary":
									return m(this, t, e, r);
								case "base64":
									return E(this, t, e, r);
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return R(this, t, e, r);
								default:
									if (o) throw new TypeError("Unknown encoding: " + n);
									n = ("" + n).toLowerCase(), o = !0
							}
						}, s.prototype.toJSON = function() {
							return {
								type: "Buffer",
								data: Array.prototype.slice.call(this._arr || this, 0)
							}
						};
						const A = 4096;

						function I(t, e, r) {
							let n = "";
							r = Math.min(t.length, r);
							for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
							return n
						}

						function T(t, e, r) {
							let n = "";
							r = Math.min(t.length, r);
							for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
							return n
						}

						function L(t, e, r) {
							const n = t.length;
							(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
							let i = "";
							for (let o = e; o < r; ++o) i += X[t[o]];
							return i
						}

						function O(t, e, r) {
							const n = t.slice(e, r);
							let i = "";
							for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
							return i
						}

						function x(t, e, r) {
							if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
							if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
						}

						function C(t, e, r, n, i, o) {
							if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
							if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
							if (r + n > t.length) throw new RangeError("Index out of range")
						}

						function M(t, e, r, n, i) {
							W(e, n, i, t, r, 7);
							let o = Number(e & BigInt(4294967295));
							t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
							let s = Number(e >> BigInt(32) & BigInt(4294967295));
							return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
						}

						function U(t, e, r, n, i) {
							W(e, n, i, t, r, 7);
							let o = Number(e & BigInt(4294967295));
							t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
							let s = Number(e >> BigInt(32) & BigInt(4294967295));
							return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
						}

						function P(t, e, r, n, i, o) {
							if (r + n > t.length) throw new RangeError("Index out of range");
							if (r < 0) throw new RangeError("Index out of range")
						}

						function j(t, e, n, i, o) {
							return e = +e, n >>>= 0, o || P(t, 0, n, 4), r.write(t, e, n, i, 23, 4), n + 4
						}

						function N(t, e, n, i, o) {
							return e = +e, n >>>= 0, o || P(t, 0, n, 8), r.write(t, e, n, i, 52, 8), n + 8
						}
						s.prototype.slice = function(t, e) {
							const r = this.length;
							(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
							const n = this.subarray(t, e);
							return Object.setPrototypeOf(n, s.prototype), n
						}, s.prototype.readUintLE = s.prototype.readUIntLE = function(t, e, r) {
							t >>>= 0, e >>>= 0, r || x(t, e, this.length);
							let n = this[t],
								i = 1,
								o = 0;
							for (; ++o < e && (i *= 256);) n += this[t + o] * i;
							return n
						}, s.prototype.readUintBE = s.prototype.readUIntBE = function(t, e, r) {
							t >>>= 0, e >>>= 0, r || x(t, e, this.length);
							let n = this[t + --e],
								i = 1;
							for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
							return n
						}, s.prototype.readUint8 = s.prototype.readUInt8 = function(t, e) {
							return t >>>= 0, e || x(t, 1, this.length), this[t]
						}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(t, e) {
							return t >>>= 0, e || x(t, 2, this.length), this[t] | this[t + 1] << 8
						}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(t, e) {
							return t >>>= 0, e || x(t, 2, this.length), this[t] << 8 | this[t + 1]
						}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(t, e) {
							return t >>>= 0, e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
						}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(t, e) {
							return t >>>= 0, e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
						}, s.prototype.readBigUInt64LE = Z((function(t) {
							$(t >>>= 0, "offset");
							const e = this[t],
								r = this[t + 7];
							void 0 !== e && void 0 !== r || q(t, this.length - 8);
							const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
								i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
							return BigInt(n) + (BigInt(i) << BigInt(32))
						})), s.prototype.readBigUInt64BE = Z((function(t) {
							$(t >>>= 0, "offset");
							const e = this[t],
								r = this[t + 7];
							void 0 !== e && void 0 !== r || q(t, this.length - 8);
							const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
								i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
							return (BigInt(n) << BigInt(32)) + BigInt(i)
						})), s.prototype.readIntLE = function(t, e, r) {
							t >>>= 0, e >>>= 0, r || x(t, e, this.length);
							let n = this[t],
								i = 1,
								o = 0;
							for (; ++o < e && (i *= 256);) n += this[t + o] * i;
							return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
						}, s.prototype.readIntBE = function(t, e, r) {
							t >>>= 0, e >>>= 0, r || x(t, e, this.length);
							let n = e,
								i = 1,
								o = this[t + --n];
							for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
							return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
						}, s.prototype.readInt8 = function(t, e) {
							return t >>>= 0, e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
						}, s.prototype.readInt16LE = function(t, e) {
							t >>>= 0, e || x(t, 2, this.length);
							const r = this[t] | this[t + 1] << 8;
							return 32768 & r ? 4294901760 | r : r
						}, s.prototype.readInt16BE = function(t, e) {
							t >>>= 0, e || x(t, 2, this.length);
							const r = this[t + 1] | this[t] << 8;
							return 32768 & r ? 4294901760 | r : r
						}, s.prototype.readInt32LE = function(t, e) {
							return t >>>= 0, e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
						}, s.prototype.readInt32BE = function(t, e) {
							return t >>>= 0, e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
						}, s.prototype.readBigInt64LE = Z((function(t) {
							$(t >>>= 0, "offset");
							const e = this[t],
								r = this[t + 7];
							void 0 !== e && void 0 !== r || q(t, this.length - 8);
							const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
							return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
						})), s.prototype.readBigInt64BE = Z((function(t) {
							$(t >>>= 0, "offset");
							const e = this[t],
								r = this[t + 7];
							void 0 !== e && void 0 !== r || q(t, this.length - 8);
							const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
							return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
						})), s.prototype.readFloatLE = function(t, e) {
							return t >>>= 0, e || x(t, 4, this.length), r.read(this, t, !0, 23, 4)
						}, s.prototype.readFloatBE = function(t, e) {
							return t >>>= 0, e || x(t, 4, this.length), r.read(this, t, !1, 23, 4)
						}, s.prototype.readDoubleLE = function(t, e) {
							return t >>>= 0, e || x(t, 8, this.length), r.read(this, t, !0, 52, 8)
						}, s.prototype.readDoubleBE = function(t, e) {
							return t >>>= 0, e || x(t, 8, this.length), r.read(this, t, !1, 52, 8)
						}, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(t, e, r, n) {
							if (t = +t, e >>>= 0, r >>>= 0, !n) {
								C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
							}
							let i = 1,
								o = 0;
							for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;
							return e + r
						}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(t, e, r, n) {
							if (t = +t, e >>>= 0, r >>>= 0, !n) {
								C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
							}
							let i = r - 1,
								o = 1;
							for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
							return e + r
						}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
						}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
						}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
						}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
						}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
						}, s.prototype.writeBigUInt64LE = Z((function(t, e = 0) {
							return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
						})), s.prototype.writeBigUInt64BE = Z((function(t, e = 0) {
							return U(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
						})), s.prototype.writeIntLE = function(t, e, r, n) {
							if (t = +t, e >>>= 0, !n) {
								const n = Math.pow(2, 8 * r - 1);
								C(this, t, e, r, n - 1, -n)
							}
							let i = 0,
								o = 1,
								s = 0;
							for (this[e] = 255 & t; ++i < r && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
							return e + r
						}, s.prototype.writeIntBE = function(t, e, r, n) {
							if (t = +t, e >>>= 0, !n) {
								const n = Math.pow(2, 8 * r - 1);
								C(this, t, e, r, n - 1, -n)
							}
							let i = r - 1,
								o = 1,
								s = 0;
							for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / o >> 0) - s & 255;
							return e + r
						}, s.prototype.writeInt8 = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
						}, s.prototype.writeInt16LE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
						}, s.prototype.writeInt16BE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
						}, s.prototype.writeInt32LE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
						}, s.prototype.writeInt32BE = function(t, e, r) {
							return t = +t, e >>>= 0, r || C(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
						}, s.prototype.writeBigInt64LE = Z((function(t, e = 0) {
							return M(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
						})), s.prototype.writeBigInt64BE = Z((function(t, e = 0) {
							return U(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
						})), s.prototype.writeFloatLE = function(t, e, r) {
							return j(this, t, e, !0, r)
						}, s.prototype.writeFloatBE = function(t, e, r) {
							return j(this, t, e, !1, r)
						}, s.prototype.writeDoubleLE = function(t, e, r) {
							return N(this, t, e, !0, r)
						}, s.prototype.writeDoubleBE = function(t, e, r) {
							return N(this, t, e, !1, r)
						}, s.prototype.copy = function(t, e, r, n) {
							if (!s.isBuffer(t)) throw new TypeError("argument should be a Buffer");
							if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
							if (0 === t.length || 0 === this.length) return 0;
							if (e < 0) throw new RangeError("targetStart out of bounds");
							if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
							if (n < 0) throw new RangeError("sourceEnd out of bounds");
							n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
							const i = n - r;
							return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i
						}, s.prototype.fill = function(t, e, r, n) {
							if ("string" == typeof t) {
								if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
								if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
								if (1 === t.length) {
									const e = t.charCodeAt(0);
									("utf8" === n && e < 128 || "latin1" === n) && (t = e)
								}
							} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
							if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
							if (r <= e) return this;
							let i;
							if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t)
								for (i = e; i < r; ++i) this[i] = t;
							else {
								const o = s.isBuffer(t) ? t : s.from(t, n),
									a = o.length;
								if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
								for (i = 0; i < r - e; ++i) this[i + e] = o[i % a]
							}
							return this
						};
						const D = {};

						function z(t, e, r) {
							D[t] = class NodeError extends r {
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

						function F(t) {
							let e = "",
								r = t.length;
							const n = "-" === t[0] ? 1 : 0;
							for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
							return `${t.slice(0,r)}${e}`
						}

						function W(t, e, r, n, i, o) {
							if (t > r || t < e) {
								const n = "bigint" == typeof e ? "n" : "";
								let i;
								throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(o+1)}${n}` : `>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new D.ERR_OUT_OF_RANGE("value", i, t)
							}! function(t, e, r) {
								$(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || q(e, t.length - (r + 1))
							}(n, i, o)
						}

						function $(t, e) {
							if ("number" != typeof t) throw new D.ERR_INVALID_ARG_TYPE(e, "number", t)
						}

						function q(t, e, r) {
							if (Math.floor(t) !== t) throw $(t, r), new D.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
							if (e < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS;
							throw new D.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
						}
						z("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
							return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
						}), RangeError), z("ERR_INVALID_ARG_TYPE", (function(t, e) {
							return `The "${t}" argument must be of type number. Received type ${typeof e}`
						}), TypeError), z("ERR_OUT_OF_RANGE", (function(t, e, r) {
							let n = `The value of "${t}" is out of range.`,
								i = r;
							return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = F(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = F(i)), i += "n"), n += ` It must be ${e}. Received ${i}`
						}), RangeError);
						const K = /[^+/0-9A-Za-z-_]/g;

						function H(t, e) {
							let r;
							e = e || 1 / 0;
							const n = t.length;
							let i = null;
							const o = [];
							for (let s = 0; s < n; ++s) {
								if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
									if (!i) {
										if (r > 56319) {
											(e -= 3) > -1 && o.push(239, 191, 189);
											continue
										}
										if (s + 1 === n) {
											(e -= 3) > -1 && o.push(239, 191, 189);
											continue
										}
										i = r;
										continue
									}
									if (r < 56320) {
										(e -= 3) > -1 && o.push(239, 191, 189), i = r;
										continue
									}
									r = 65536 + (i - 55296 << 10 | r - 56320)
								} else i && (e -= 3) > -1 && o.push(239, 191, 189);
								if (i = null, r < 128) {
									if ((e -= 1) < 0) break;
									o.push(r)
								} else if (r < 2048) {
									if ((e -= 2) < 0) break;
									o.push(r >> 6 | 192, 63 & r | 128)
								} else if (r < 65536) {
									if ((e -= 3) < 0) break;
									o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
								} else {
									if (!(r < 1114112)) throw new Error("Invalid code point");
									if ((e -= 4) < 0) break;
									o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
								}
							}
							return o
						}

						function V(t) {
							return e.toByteArray(function(t) {
								if ((t = (t = t.split("=")[0]).trim().replace(K, "")).length < 2) return "";
								for (; t.length % 4 != 0;) t += "=";
								return t
							}(t))
						}

						function G(t, e, r, n) {
							let i;
							for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
							return i
						}

						function Y(t, e) {
							return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
						}

						function J(t) {
							return t != t
						}
						const X = function() {
							const t = new Array(256);
							for (let e = 0; e < 16; ++e) {
								const r = 16 * e;
								for (let n = 0; n < 16; ++n) t[r + n] = "0123456789abcdef" [e] + "0123456789abcdef" [n]
							}
							return t
						}();

						function Z(t) {
							return "undefined" == typeof BigInt ? Q : t
						}

						function Q() {
							throw new Error("BigInt not supported")
						}
					}(d);
				var L = {
					exports: {}
				};
				! function(t, e) {
					! function(e) {
						function r(t) {
							return parseInt(t) === t
						}

						function n(t) {
							if (!r(t.length)) return !1;
							for (var e = 0; e < t.length; e++)
								if (!r(t[e]) || t[e] < 0 || t[e] > 255) return !1;
							return !0
						}

						function i(t, e) {
							if (t.buffer && "Uint8Array" === t.name) return e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)), t;
							if (Array.isArray(t)) {
								if (!n(t)) throw new Error("Array contains invalid value: " + t);
								return new Uint8Array(t)
							}
							if (r(t.length) && n(t)) return new Uint8Array(t);
							throw new Error("unsupported array-like object")
						}

						function o(t) {
							return new Uint8Array(t)
						}

						function s(t, e, r, n, i) {
							null == n && null == i || (t = t.slice ? t.slice(n, i) : Array.prototype.slice.call(t, n, i)), e.set(t, r)
						}
						var a, h = {
								toBytes: function(t) {
									var e = [],
										r = 0;
									for (t = encodeURI(t); r < t.length;) {
										var n = t.charCodeAt(r++);
										37 === n ? (e.push(parseInt(t.substr(r, 2), 16)), r += 2) : e.push(n)
									}
									return i(e)
								},
								fromBytes: function(t) {
									for (var e = [], r = 0; r < t.length;) {
										var n = t[r];
										n < 128 ? (e.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (e.push(String.fromCharCode((31 & n) << 6 | 63 & t[r + 1])), r += 2) : (e.push(String.fromCharCode((15 & n) << 12 | (63 & t[r + 1]) << 6 | 63 & t[r + 2])), r += 3)
									}
									return e.join("")
								}
							},
							u = (a = "0123456789abcdef", {
								toBytes: function(t) {
									for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16));
									return e
								},
								fromBytes: function(t) {
									for (var e = [], r = 0; r < t.length; r++) {
										var n = t[r];
										e.push(a[(240 & n) >> 4] + a[15 & n])
									}
									return e.join("")
								}
							}),
							f = {
								16: 10,
								24: 12,
								32: 14
							},
							l = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
							c = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
							d = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
							p = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
							y = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
							g = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
							_ = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
							b = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
							w = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
							v = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
							m = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
							E = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
							S = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
							R = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
							B = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

						function k(t) {
							for (var e = [], r = 0; r < t.length; r += 4) e.push(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]);
							return e
						}
						var A = function(t) {
							if (!(this instanceof A)) throw Error("AES must be instanitated with `new`");
							Object.defineProperty(this, "key", {
								value: i(t, !0)
							}), this._prepare()
						};
						A.prototype._prepare = function() {
							var t = f[this.key.length];
							if (null == t) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
							this._Ke = [], this._Kd = [];
							for (var e = 0; e <= t; e++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
							var r, n = 4 * (t + 1),
								i = this.key.length / 4,
								o = k(this.key);
							for (e = 0; e < i; e++) r = e >> 2, this._Ke[r][e % 4] = o[e], this._Kd[t - r][e % 4] = o[e];
							for (var s, a = 0, h = i; h < n;) {
								if (s = o[i - 1], o[0] ^= c[s >> 16 & 255] << 24 ^ c[s >> 8 & 255] << 16 ^ c[255 & s] << 8 ^ c[s >> 24 & 255] ^ l[a] << 24, a += 1, 8 != i)
									for (e = 1; e < i; e++) o[e] ^= o[e - 1];
								else {
									for (e = 1; e < i / 2; e++) o[e] ^= o[e - 1];
									s = o[i / 2 - 1], o[i / 2] ^= c[255 & s] ^ c[s >> 8 & 255] << 8 ^ c[s >> 16 & 255] << 16 ^ c[s >> 24 & 255] << 24;
									for (e = i / 2 + 1; e < i; e++) o[e] ^= o[e - 1]
								}
								for (e = 0; e < i && h < n;) u = h >> 2, d = h % 4, this._Ke[u][d] = o[e], this._Kd[t - u][d] = o[e++], h++
							}
							for (var u = 1; u < t; u++)
								for (var d = 0; d < 4; d++) s = this._Kd[u][d], this._Kd[u][d] = E[s >> 24 & 255] ^ S[s >> 16 & 255] ^ R[s >> 8 & 255] ^ B[255 & s]
						}, A.prototype.encrypt = function(t) {
							if (16 != t.length) throw new Error("invalid plaintext size (must be 16 bytes)");
							for (var e = this._Ke.length - 1, r = [0, 0, 0, 0], n = k(t), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];
							for (var s = 1; s < e; s++) {
								for (i = 0; i < 4; i++) r[i] = p[n[i] >> 24 & 255] ^ y[n[(i + 1) % 4] >> 16 & 255] ^ g[n[(i + 2) % 4] >> 8 & 255] ^ _[255 & n[(i + 3) % 4]] ^ this._Ke[s][i];
								n = r.slice()
							}
							var a, h = o(16);
							for (i = 0; i < 4; i++) a = this._Ke[e][i], h[4 * i] = 255 & (c[n[i] >> 24 & 255] ^ a >> 24), h[4 * i + 1] = 255 & (c[n[(i + 1) % 4] >> 16 & 255] ^ a >> 16), h[4 * i + 2] = 255 & (c[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), h[4 * i + 3] = 255 & (c[255 & n[(i + 3) % 4]] ^ a);
							return h
						}, A.prototype.decrypt = function(t) {
							if (16 != t.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
							for (var e = this._Kd.length - 1, r = [0, 0, 0, 0], n = k(t), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];
							for (var s = 1; s < e; s++) {
								for (i = 0; i < 4; i++) r[i] = b[n[i] >> 24 & 255] ^ w[n[(i + 3) % 4] >> 16 & 255] ^ v[n[(i + 2) % 4] >> 8 & 255] ^ m[255 & n[(i + 1) % 4]] ^ this._Kd[s][i];
								n = r.slice()
							}
							var a, h = o(16);
							for (i = 0; i < 4; i++) a = this._Kd[e][i], h[4 * i] = 255 & (d[n[i] >> 24 & 255] ^ a >> 24), h[4 * i + 1] = 255 & (d[n[(i + 3) % 4] >> 16 & 255] ^ a >> 16), h[4 * i + 2] = 255 & (d[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), h[4 * i + 3] = 255 & (d[255 & n[(i + 1) % 4]] ^ a);
							return h
						};
						var I = function(t) {
							if (!(this instanceof I)) throw Error("AES must be instanitated with `new`");
							this.description = "Electronic Code Block", this.name = "ecb", this._aes = new A(t)
						};
						I.prototype.encrypt = function(t) {
							if ((t = i(t)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
							for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) s(t, r, 0, n, n + 16), s(r = this._aes.encrypt(r), e, n);
							return e
						}, I.prototype.decrypt = function(t) {
							if ((t = i(t)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
							for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) s(t, r, 0, n, n + 16), s(r = this._aes.decrypt(r), e, n);
							return e
						};
						var T = function(t, e) {
							if (!(this instanceof T)) throw Error("AES must be instanitated with `new`");
							if (this.description = "Cipher Block Chaining", this.name = "cbc", e) {
								if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
							} else e = o(16);
							this._lastCipherblock = i(e, !0), this._aes = new A(t)
						};
						T.prototype.encrypt = function(t) {
							if ((t = i(t)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
							for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
								s(t, r, 0, n, n + 16);
								for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a];
								this._lastCipherblock = this._aes.encrypt(r), s(this._lastCipherblock, e, n)
							}
							return e
						}, T.prototype.decrypt = function(t) {
							if ((t = i(t)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
							for (var e = o(t.length), r = o(16), n = 0; n < t.length; n += 16) {
								s(t, r, 0, n, n + 16), r = this._aes.decrypt(r);
								for (var a = 0; a < 16; a++) e[n + a] = r[a] ^ this._lastCipherblock[a];
								s(t, this._lastCipherblock, 0, n, n + 16)
							}
							return e
						};
						var L = function(t, e, r) {
							if (!(this instanceof L)) throw Error("AES must be instanitated with `new`");
							if (this.description = "Cipher Feedback", this.name = "cfb", e) {
								if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 size)")
							} else e = o(16);
							r || (r = 1), this.segmentSize = r, this._shiftRegister = i(e, !0), this._aes = new A(t)
						};
						L.prototype.encrypt = function(t) {
							if (t.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
							for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
								e = this._aes.encrypt(this._shiftRegister);
								for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o];
								s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
							}
							return r
						}, L.prototype.decrypt = function(t) {
							if (t.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
							for (var e, r = i(t, !0), n = 0; n < r.length; n += this.segmentSize) {
								e = this._aes.encrypt(this._shiftRegister);
								for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= e[o];
								s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(t, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
							}
							return r
						};
						var O = function(t, e) {
							if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");
							if (this.description = "Output Feedback", this.name = "ofb", e) {
								if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
							} else e = o(16);
							this._lastPrecipher = i(e, !0), this._lastPrecipherIndex = 16, this._aes = new A(t)
						};
						O.prototype.encrypt = function(t) {
							for (var e = i(t, !0), r = 0; r < e.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), e[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
							return e
						}, O.prototype.decrypt = O.prototype.encrypt;
						var x = function(t) {
							if (!(this instanceof x)) throw Error("Counter must be instanitated with `new`");
							0 === t || t || (t = 1), "number" == typeof t ? (this._counter = o(16), this.setValue(t)) : this.setBytes(t)
						};
						x.prototype.setValue = function(t) {
							if ("number" != typeof t || parseInt(t) != t) throw new Error("invalid counter value (must be an integer)");
							if (t > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
							for (var e = 15; e >= 0; --e) this._counter[e] = t % 256, t = parseInt(t / 256)
						}, x.prototype.setBytes = function(t) {
							if (16 != (t = i(t, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
							this._counter = t
						}, x.prototype.increment = function() {
							for (var t = 15; t >= 0; t--) {
								if (255 !== this._counter[t]) {
									this._counter[t]++;
									break
								}
								this._counter[t] = 0
							}
						};
						var C = function(t, e) {
							if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
							this.description = "Counter", this.name = "ctr", e instanceof x || (e = new x(e)), this._counter = e, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new A(t)
						};
						C.prototype.encrypt = function(t) {
							for (var e = i(t, !0), r = 0; r < e.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), e[r] ^= this._remainingCounter[this._remainingCounterIndex++];
							return e
						}, C.prototype.decrypt = C.prototype.encrypt;
						var M = {
							AES: A,
							Counter: x,
							ModeOfOperation: {
								ecb: I,
								cbc: T,
								cfb: L,
								ofb: O,
								ctr: C
							},
							utils: {
								hex: u,
								utf8: h
							},
							padding: {
								pkcs7: {
									pad: function(t) {
										var e = 16 - (t = i(t, !0)).length % 16,
											r = o(t.length + e);
										s(t, r);
										for (var n = t.length; n < r.length; n++) r[n] = e;
										return r
									},
									strip: function(t) {
										if ((t = i(t, !0)).length < 16) throw new Error("PKCS#7 invalid length");
										var e = t[t.length - 1];
										if (e > 16) throw new Error("PKCS#7 padding byte out of range");
										for (var r = t.length - e, n = 0; n < e; n++)
											if (t[r + n] !== e) throw new Error("PKCS#7 invalid padding byte");
										var a = o(r);
										return s(t, a, 0, 0, r), a
									}
								}
							},
							_arrayTest: {
								coerceArray: i,
								createArray: o,
								copyArray: s
							}
						};
						t.exports = M
					}()
				}(L);
				var O = {
					exports: {}
				};
				! function(t, e) {
					var r = d,
						n = r.Buffer;

					function i(t, e) {
						for (var r in t) e[r] = t[r]
					}

					function o(t, e, r) {
						return n(t, e, r)
					}
					n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = o), o.prototype = Object.create(n.prototype), i(n, o), o.from = function(t, e, r) {
						if ("number" == typeof t) throw new TypeError("Argument must not be a number");
						return n(t, e, r)
					}, o.alloc = function(t, e, r) {
						if ("number" != typeof t) throw new TypeError("Argument must be a number");
						var i = n(t);
						return void 0 !== e ? "string" == typeof r ? i.fill(e, r) : i.fill(e) : i.fill(0), i
					}, o.allocUnsafe = function(t) {
						if ("number" != typeof t) throw new TypeError("Argument must be a number");
						return n(t)
					}, o.allocUnsafeSlow = function(t) {
						if ("number" != typeof t) throw new TypeError("Argument must be a number");
						return r.SlowBuffer(t)
					}
				}(O, O.exports);
				var x, C = Math.pow(2, 30) - 1,
					M = function(t, e) {
						if ("number" != typeof t) throw new TypeError("Iterations not a number");
						if (t < 0) throw new TypeError("Bad iterations");
						if ("number" != typeof e) throw new TypeError("Key length not a number");
						if (e < 0 || e > C || e != e) throw new TypeError("Bad key length")
					};
				if (l.process && l.process.browser) x = "utf-8";
				else if (l.process && l.process.version) {
					x = parseInt(n.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary"
				} else x = "utf-8";
				var U = x,
					P = {
						exports: {}
					};
				"function" == typeof Object.create ? P.exports = function(t, e) {
					e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}))
				} : P.exports = function(t, e) {
					if (e) {
						t.super_ = e;
						var r = function() {};
						r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
					}
				};
				var j, N = {
						exports: {}
					},
					D = {
						exports: {}
					},
					z = "object" == typeof Reflect ? Reflect : null,
					F = z && "function" == typeof z.apply ? z.apply : function(t, e, r) {
						return Function.prototype.apply.call(t, e, r)
					};
				j = z && "function" == typeof z.ownKeys ? z.ownKeys : Object.getOwnPropertySymbols ? function(t) {
					return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
				} : function(t) {
					return Object.getOwnPropertyNames(t)
				};
				var W = Number.isNaN || function(t) {
					return t != t
				};

				function $() {
					$.init.call(this)
				}
				D.exports = $, D.exports.once = function(t, e) {
					return new Promise((function(r, n) {
						function i(r) {
							t.removeListener(e, o), n(r)
						}

						function o() {
							"function" == typeof t.removeListener && t.removeListener("error", i), r([].slice.call(arguments))
						}
						Q(t, e, o, {
							once: !0
						}), "error" !== e && function(t, e, r) {
							"function" == typeof t.on && Q(t, "error", e, r)
						}(t, i, {
							once: !0
						})
					}))
				}, $.EventEmitter = $, $.prototype._events = void 0, $.prototype._eventsCount = 0, $.prototype._maxListeners = void 0;
				var q = 10;

				function K(t) {
					if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
				}

				function H(t) {
					return void 0 === t._maxListeners ? $.defaultMaxListeners : t._maxListeners
				}

				function V(t, e, r, n) {
					var i, o, s, a;
					if (K(r), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), s = o[e]), void 0 === s) s = o[e] = r, ++t._eventsCount;
					else if ("function" == typeof s ? s = o[e] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r), (i = H(t)) > 0 && s.length > i && !s.warned) {
						s.warned = !0;
						var h = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
						h.name = "MaxListenersExceededWarning", h.emitter = t, h.type = e, h.count = s.length, a = h, console && console.warn && console.warn(a)
					}
					return t
				}

				function G() {
					if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
				}

				function Y(t, e, r) {
					var n = {
							fired: !1,
							wrapFn: void 0,
							target: t,
							type: e,
							listener: r
						},
						i = G.bind(n);
					return i.listener = r, n.wrapFn = i, i
				}

				function J(t, e, r) {
					var n = t._events;
					if (void 0 === n) return [];
					var i = n[e];
					return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(t) {
						for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
						return e
					}(i) : Z(i, i.length)
				}

				function X(t) {
					var e = this._events;
					if (void 0 !== e) {
						var r = e[t];
						if ("function" == typeof r) return 1;
						if (void 0 !== r) return r.length
					}
					return 0
				}

				function Z(t, e) {
					for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
					return r
				}

				function Q(t, e, r, n) {
					if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
					else {
						if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
						t.addEventListener(e, (function i(o) {
							n.once && t.removeEventListener(e, i), r(o)
						}))
					}
				}
				Object.defineProperty($, "defaultMaxListeners", {
					enumerable: !0,
					get: function() {
						return q
					},
					set: function(t) {
						if ("number" != typeof t || t < 0 || W(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
						q = t
					}
				}), $.init = function() {
					void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
				}, $.prototype.setMaxListeners = function(t) {
					if ("number" != typeof t || t < 0 || W(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
					return this._maxListeners = t, this
				}, $.prototype.getMaxListeners = function() {
					return H(this)
				}, $.prototype.emit = function(t) {
					for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
					var n = "error" === t,
						i = this._events;
					if (void 0 !== i) n = n && void 0 === i.error;
					else if (!n) return !1;
					if (n) {
						var o;
						if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
						var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
						throw s.context = o, s
					}
					var a = i[t];
					if (void 0 === a) return !1;
					if ("function" == typeof a) F(a, this, e);
					else {
						var h = a.length,
							u = Z(a, h);
						for (r = 0; r < h; ++r) F(u[r], this, e)
					}
					return !0
				}, $.prototype.addListener = function(t, e) {
					return V(this, t, e, !1)
				}, $.prototype.on = $.prototype.addListener, $.prototype.prependListener = function(t, e) {
					return V(this, t, e, !0)
				}, $.prototype.once = function(t, e) {
					return K(e), this.on(t, Y(this, t, e)), this
				}, $.prototype.prependOnceListener = function(t, e) {
					return K(e), this.prependListener(t, Y(this, t, e)), this
				}, $.prototype.removeListener = function(t, e) {
					var r, n, i, o, s;
					if (K(e), void 0 === (n = this._events)) return this;
					if (void 0 === (r = n[t])) return this;
					if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
					else if ("function" != typeof r) {
						for (i = -1, o = r.length - 1; o >= 0; o--)
							if (r[o] === e || r[o].listener === e) {
								s = r[o].listener, i = o;
								break
							} if (i < 0) return this;
						0 === i ? r.shift() : function(t, e) {
							for (; e + 1 < t.length; e++) t[e] = t[e + 1];
							t.pop()
						}(r, i), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s || e)
					}
					return this
				}, $.prototype.off = $.prototype.removeListener, $.prototype.removeAllListeners = function(t) {
					var e, r, n;
					if (void 0 === (r = this._events)) return this;
					if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), this;
					if (0 === arguments.length) {
						var i, o = Object.keys(r);
						for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
						return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
					}
					if ("function" == typeof(e = r[t])) this.removeListener(t, e);
					else if (void 0 !== e)
						for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
					return this
				}, $.prototype.listeners = function(t) {
					return J(this, t, !0)
				}, $.prototype.rawListeners = function(t) {
					return J(this, t, !1)
				}, $.listenerCount = function(t, e) {
					return "function" == typeof t.listenerCount ? t.listenerCount(e) : X.call(t, e)
				}, $.prototype.listenerCount = X, $.prototype.eventNames = function() {
					return this._eventsCount > 0 ? j(this._events) : []
				};
				var tt = D.exports.EventEmitter,
					et = c(Object.freeze({
						__proto__: null,
						[Symbol.toStringTag]: "Module",
						default: {}
					}));

				function rt(t, e) {
					var r = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(t);
						e && (n = n.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function nt(t, e, r) {
					return e in t ? Object.defineProperty(t, e, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = r, t
				}

				function it(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
					}
				}
				var ot = d.Buffer,
					st = et.inspect,
					at = st && st.custom || "inspect";
				var ht = function() {
					function t() {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.head = null, this.tail = null, this.length = 0
					}
					var e, r, n;
					return e = t, (r = [{
						key: "push",
						value: function(t) {
							var e = {
								data: t,
								next: null
							};
							this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
						}
					}, {
						key: "unshift",
						value: function(t) {
							var e = {
								data: t,
								next: this.head
							};
							0 === this.length && (this.tail = e), this.head = e, ++this.length
						}
					}, {
						key: "shift",
						value: function() {
							if (0 !== this.length) {
								var t = this.head.data;
								return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
							}
						}
					}, {
						key: "clear",
						value: function() {
							this.head = this.tail = null, this.length = 0
						}
					}, {
						key: "join",
						value: function(t) {
							if (0 === this.length) return "";
							for (var e = this.head, r = "" + e.data; e = e.next;) r += t + e.data;
							return r
						}
					}, {
						key: "concat",
						value: function(t) {
							if (0 === this.length) return ot.alloc(0);
							for (var e, r, n, i = ot.allocUnsafe(t >>> 0), o = this.head, s = 0; o;) e = o.data, r = i, n = s, ot.prototype.copy.call(e, r, n), s += o.data.length, o = o.next;
							return i
						}
					}, {
						key: "consume",
						value: function(t, e) {
							var r;
							return t < this.head.data.length ? (r = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), r
						}
					}, {
						key: "first",
						value: function() {
							return this.head.data
						}
					}, {
						key: "_getString",
						value: function(t) {
							var e = this.head,
								r = 1,
								n = e.data;
							for (t -= n.length; e = e.next;) {
								var i = e.data,
									o = t > i.length ? i.length : t;
								if (o === i.length ? n += i : n += i.slice(0, t), 0 == (t -= o)) {
									o === i.length ? (++r, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = i.slice(o));
									break
								}++r
							}
							return this.length -= r, n
						}
					}, {
						key: "_getBuffer",
						value: function(t) {
							var e = ot.allocUnsafe(t),
								r = this.head,
								n = 1;
							for (r.data.copy(e), t -= r.data.length; r = r.next;) {
								var i = r.data,
									o = t > i.length ? i.length : t;
								if (i.copy(e, e.length - t, 0, o), 0 == (t -= o)) {
									o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
									break
								}++n
							}
							return this.length -= n, e
						}
					}, {
						key: at,
						value: function(t, e) {
							return st(this, function(t) {
								for (var e = 1; e < arguments.length; e++) {
									var r = null != arguments[e] ? arguments[e] : {};
									e % 2 ? rt(Object(r), !0).forEach((function(e) {
										nt(t, e, r[e])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rt(Object(r)).forEach((function(e) {
										Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
									}))
								}
								return t
							}({}, e, {
								depth: 0,
								customInspect: !1
							}))
						}
					}]) && it(e.prototype, r), n && it(e, n), t
				}();

				function ut(t, e) {
					lt(t, e), ft(t)
				}

				function ft(t) {
					t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
				}

				function lt(t, e) {
					t.emit("error", e)
				}
				var ct = {
						destroy: function(t, e) {
							var r = this,
								i = this._readableState && this._readableState.destroyed,
								o = this._writableState && this._writableState.destroyed;
							return i || o ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, n.nextTick(lt, this, t)) : n.nextTick(lt, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, (function(t) {
								!e && t ? r._writableState ? r._writableState.errorEmitted ? n.nextTick(ft, r) : (r._writableState.errorEmitted = !0, n.nextTick(ut, r, t)) : n.nextTick(ut, r, t) : e ? (n.nextTick(ft, r), e(t)) : n.nextTick(ft, r)
							})), this)
						},
						undestroy: function() {
							this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
						},
						errorOrDestroy: function(t, e) {
							var r = t._readableState,
								n = t._writableState;
							r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e)
						}
					},
					dt = {};
				var pt = {};

				function yt(t, e, r) {
					r || (r = Error);
					var n = function(t) {
						var r, n;

						function i(r, n, i) {
							return t.call(this, function(t, r, n) {
								return "string" == typeof e ? e : e(t, r, n)
							}(r, n, i)) || this
						}
						return n = t, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
					}(r);
					n.prototype.name = r.name, n.prototype.code = t, pt[t] = n
				}

				function gt(t, e) {
					if (Array.isArray(t)) {
						var r = t.length;
						return t = t.map((function(t) {
							return String(t)
						})), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
					}
					return "of ".concat(e, " ").concat(String(t))
				}
				yt("ERR_INVALID_OPT_VALUE", (function(t, e) {
					return 'The value "' + e + '" is invalid for option "' + t + '"'
				}), TypeError), yt("ERR_INVALID_ARG_TYPE", (function(t, e, r) {
					var n, i, o, s;
					if ("string" == typeof e && (i = "not ", e.substr(!o || o < 0 ? 0 : +o, i.length) === i) ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be", function(t, e, r) {
							return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e
						}(t, " argument")) s = "The ".concat(t, " ").concat(n, " ").concat(gt(e, "type"));
					else {
						var a = function(t, e, r) {
							return "number" != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
						}(t, ".") ? "property" : "argument";
						s = 'The "'.concat(t, '" ').concat(a, " ").concat(n, " ").concat(gt(e, "type"))
					}
					return s += ". Received type ".concat(typeof r)
				}), TypeError), yt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), yt("ERR_METHOD_NOT_IMPLEMENTED", (function(t) {
					return "The " + t + " method is not implemented"
				})), yt("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), yt("ERR_STREAM_DESTROYED", (function(t) {
					return "Cannot call " + t + " after a stream was destroyed"
				})), yt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), yt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), yt("ERR_STREAM_WRITE_AFTER_END", "write after end"), yt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), yt("ERR_UNKNOWN_ENCODING", (function(t) {
					return "Unknown encoding: " + t
				}), TypeError), yt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), dt.codes = pt;
				var _t = dt.codes.ERR_INVALID_OPT_VALUE;
				var bt = {
						getHighWaterMark: function(t, e, r, n) {
							var i = function(t, e, r) {
								return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null
							}(e, n, r);
							if (null != i) {
								if (!isFinite(i) || Math.floor(i) !== i || i < 0) throw new _t(n ? r : "highWaterMark", i);
								return Math.floor(i)
							}
							return t.objectMode ? 16 : 16384
						}
					},
					wt = function(t, e) {
						if (vt("noDeprecation")) return t;
						var r = !1;
						return function() {
							if (!r) {
								if (vt("throwDeprecation")) throw new Error(e);
								vt("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0
							}
							return t.apply(this, arguments)
						}
					};

				function vt(t) {
					try {
						if (!l.localStorage) return !1
					} catch (r) {
						return !1
					}
					var e = l.localStorage[t];
					return null != e && "true" === String(e).toLowerCase()
				}
				var mt, Et = $t;

				function St(t) {
					var e = this;
					this.next = null, this.entry = null, this.finish = function() {
						! function(t, e, r) {
							var n = t.entry;
							t.entry = null;
							for (; n;) {
								var i = n.callback;
								e.pendingcb--, i(r), n = n.next
							}
							e.corkedRequestsFree.next = t
						}(e, t)
					}
				}
				$t.WritableState = Wt;
				var Rt = {
						deprecate: wt
					},
					Bt = tt,
					kt = d.Buffer,
					At = l.Uint8Array || function() {};
				var It, Tt = ct,
					Lt = bt.getHighWaterMark,
					Ot = dt.codes,
					xt = Ot.ERR_INVALID_ARG_TYPE,
					Ct = Ot.ERR_METHOD_NOT_IMPLEMENTED,
					Mt = Ot.ERR_MULTIPLE_CALLBACK,
					Ut = Ot.ERR_STREAM_CANNOT_PIPE,
					Pt = Ot.ERR_STREAM_DESTROYED,
					jt = Ot.ERR_STREAM_NULL_VALUES,
					Nt = Ot.ERR_STREAM_WRITE_AFTER_END,
					Dt = Ot.ERR_UNKNOWN_ENCODING,
					zt = Tt.errorOrDestroy;

				function Ft() {}

				function Wt(t, e, r) {
					mt = mt || Xt, t = t || {}, "boolean" != typeof r && (r = e instanceof mt), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = Lt(this, t, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
					var i = !1 === t.decodeStrings;
					this.decodeStrings = !i, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(t) {
						! function(t, e) {
							var r = t._writableState,
								i = r.sync,
								o = r.writecb;
							if ("function" != typeof o) throw new Mt;
							if (function(t) {
									t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0
								}(r), e) ! function(t, e, r, i, o) {
								--e.pendingcb, r ? (n.nextTick(o, i), n.nextTick(Yt, t, e), t._writableState.errorEmitted = !0, zt(t, i)) : (o(i), t._writableState.errorEmitted = !0, zt(t, i), Yt(t, e))
							}(t, r, i, e, o);
							else {
								var s = Vt(r) || t.destroyed;
								s || r.corked || r.bufferProcessing || !r.bufferedRequest || Ht(t, r), i ? n.nextTick(Kt, t, r, s, o) : Kt(t, r, s, o)
							}
						}(e, t)
					}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new St(this)
				}

				function $t(t) {
					var e = this instanceof(mt = mt || Xt);
					if (!e && !It.call($t, this)) return new $t(t);
					this._writableState = new Wt(t, this, e), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), Bt.call(this)
				}

				function qt(t, e, r, n, i, o, s) {
					e.writelen = n, e.writecb = s, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new Pt("write")) : r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1
				}

				function Kt(t, e, r, n) {
					r || function(t, e) {
						0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"))
					}(t, e), e.pendingcb--, n(), Yt(t, e)
				}

				function Ht(t, e) {
					e.bufferProcessing = !0;
					var r = e.bufferedRequest;
					if (t._writev && r && r.next) {
						var n = e.bufferedRequestCount,
							i = new Array(n),
							o = e.corkedRequestsFree;
						o.entry = r;
						for (var s = 0, a = !0; r;) i[s] = r, r.isBuf || (a = !1), r = r.next, s += 1;
						i.allBuffers = a, qt(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new St(e), e.bufferedRequestCount = 0
					} else {
						for (; r;) {
							var h = r.chunk,
								u = r.encoding,
								f = r.callback;
							if (qt(t, e, !1, e.objectMode ? 1 : h.length, h, u, f), r = r.next, e.bufferedRequestCount--, e.writing) break
						}
						null === r && (e.lastBufferedRequest = null)
					}
					e.bufferedRequest = r, e.bufferProcessing = !1
				}

				function Vt(t) {
					return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
				}

				function Gt(t, e) {
					t._final((function(r) {
						e.pendingcb--, r && zt(t, r), e.prefinished = !0, t.emit("prefinish"), Yt(t, e)
					}))
				}

				function Yt(t, e) {
					var r = Vt(e);
					if (r && (function(t, e) {
							e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? (e.prefinished = !0, t.emit("prefinish")) : (e.pendingcb++, e.finalCalled = !0, n.nextTick(Gt, t, e)))
						}(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy))) {
						var i = t._readableState;
						(!i || i.autoDestroy && i.endEmitted) && t.destroy()
					}
					return r
				}
				P.exports($t, Bt), Wt.prototype.getBuffer = function() {
						for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;
						return e
					},
					function() {
						try {
							Object.defineProperty(Wt.prototype, "buffer", {
								get: Rt.deprecate((function() {
									return this.getBuffer()
								}), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
							})
						} catch (t) {}
					}(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (It = Function.prototype[Symbol.hasInstance], Object.defineProperty($t, Symbol.hasInstance, {
						value: function(t) {
							return !!It.call(this, t) || this === $t && (t && t._writableState instanceof Wt)
						}
					})) : It = function(t) {
						return t instanceof this
					}, $t.prototype.pipe = function() {
						zt(this, new Ut)
					}, $t.prototype.write = function(t, e, r) {
						var i, o = this._writableState,
							s = !1,
							a = !o.objectMode && (i = t, kt.isBuffer(i) || i instanceof At);
						return a && !kt.isBuffer(t) && (t = function(t) {
							return kt.from(t)
						}(t)), "function" == typeof e && (r = e, e = null), a ? e = "buffer" : e || (e = o.defaultEncoding), "function" != typeof r && (r = Ft), o.ending ? function(t, e) {
							var r = new Nt;
							zt(t, r), n.nextTick(e, r)
						}(this, r) : (a || function(t, e, r, i) {
							var o;
							return null === r ? o = new jt : "string" == typeof r || e.objectMode || (o = new xt("chunk", ["string", "Buffer"], r)), !o || (zt(t, o), n.nextTick(i, o), !1)
						}(this, o, t, r)) && (o.pendingcb++, s = function(t, e, r, n, i, o) {
							if (!r) {
								var s = function(t, e, r) {
									t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = kt.from(e, r));
									return e
								}(e, n, i);
								n !== s && (r = !0, i = "buffer", n = s)
							}
							var a = e.objectMode ? 1 : n.length;
							e.length += a;
							var h = e.length < e.highWaterMark;
							h || (e.needDrain = !0);
							if (e.writing || e.corked) {
								var u = e.lastBufferedRequest;
								e.lastBufferedRequest = {
									chunk: n,
									encoding: i,
									isBuf: r,
									callback: o,
									next: null
								}, u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1
							} else qt(t, e, !1, a, n, i, o);
							return h
						}(this, o, a, t, e, r)), s
					}, $t.prototype.cork = function() {
						this._writableState.corked++
					}, $t.prototype.uncork = function() {
						var t = this._writableState;
						t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || Ht(this, t))
					}, $t.prototype.setDefaultEncoding = function(t) {
						if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new Dt(t);
						return this._writableState.defaultEncoding = t, this
					}, Object.defineProperty($t.prototype, "writableBuffer", {
						enumerable: !1,
						get: function() {
							return this._writableState && this._writableState.getBuffer()
						}
					}), Object.defineProperty($t.prototype, "writableHighWaterMark", {
						enumerable: !1,
						get: function() {
							return this._writableState.highWaterMark
						}
					}), $t.prototype._write = function(t, e, r) {
						r(new Ct("_write()"))
					}, $t.prototype._writev = null, $t.prototype.end = function(t, e, r) {
						var i = this._writableState;
						return "function" == typeof t ? (r = t, t = null, e = null) : "function" == typeof e && (r = e, e = null), null != t && this.write(t, e), i.corked && (i.corked = 1, this.uncork()), i.ending || function(t, e, r) {
							e.ending = !0, Yt(t, e), r && (e.finished ? n.nextTick(r) : t.once("finish", r));
							e.ended = !0, t.writable = !1
						}(this, i, r), this
					}, Object.defineProperty($t.prototype, "writableLength", {
						enumerable: !1,
						get: function() {
							return this._writableState.length
						}
					}), Object.defineProperty($t.prototype, "destroyed", {
						enumerable: !1,
						get: function() {
							return void 0 !== this._writableState && this._writableState.destroyed
						},
						set: function(t) {
							this._writableState && (this._writableState.destroyed = t)
						}
					}), $t.prototype.destroy = Tt.destroy, $t.prototype._undestroy = Tt.undestroy, $t.prototype._destroy = function(t, e) {
						e(t)
					};
				var Jt = Object.keys || function(t) {
						var e = [];
						for (var r in t) e.push(r);
						return e
					},
					Xt = ne,
					Zt = De,
					Qt = Et;
				P.exports(ne, Zt);
				for (var te = Jt(Qt.prototype), ee = 0; ee < te.length; ee++) {
					var re = te[ee];
					ne.prototype[re] || (ne.prototype[re] = Qt.prototype[re])
				}

				function ne(t) {
					if (!(this instanceof ne)) return new ne(t);
					Zt.call(this, t), Qt.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", ie)))
				}

				function ie() {
					this._writableState.ended || n.nextTick(oe, this)
				}

				function oe(t) {
					t.end()
				}
				Object.defineProperty(ne.prototype, "writableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._writableState.highWaterMark
					}
				}), Object.defineProperty(ne.prototype, "writableBuffer", {
					enumerable: !1,
					get: function() {
						return this._writableState && this._writableState.getBuffer()
					}
				}), Object.defineProperty(ne.prototype, "writableLength", {
					enumerable: !1,
					get: function() {
						return this._writableState.length
					}
				}), Object.defineProperty(ne.prototype, "destroyed", {
					enumerable: !1,
					get: function() {
						return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
					},
					set: function(t) {
						void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
					}
				});
				var se = {},
					ae = O.exports.Buffer,
					he = ae.isEncoding || function(t) {
						switch ((t = "" + t) && t.toLowerCase()) {
							case "hex":
							case "utf8":
							case "utf-8":
							case "ascii":
							case "binary":
							case "base64":
							case "ucs2":
							case "ucs-2":
							case "utf16le":
							case "utf-16le":
							case "raw":
								return !0;
							default:
								return !1
						}
					};

				function ue(t) {
					var e;
					switch (this.encoding = function(t) {
						var e = function(t) {
							if (!t) return "utf8";
							for (var e;;) switch (t) {
								case "utf8":
								case "utf-8":
									return "utf8";
								case "ucs2":
								case "ucs-2":
								case "utf16le":
								case "utf-16le":
									return "utf16le";
								case "latin1":
								case "binary":
									return "latin1";
								case "base64":
								case "ascii":
								case "hex":
									return t;
								default:
									if (e) return;
									t = ("" + t).toLowerCase(), e = !0
							}
						}(t);
						if ("string" != typeof e && (ae.isEncoding === he || !he(t))) throw new Error("Unknown encoding: " + t);
						return e || t
					}(t), this.encoding) {
						case "utf16le":
							this.text = ce, this.end = de, e = 4;
							break;
						case "utf8":
							this.fillLast = le, e = 4;
							break;
						case "base64":
							this.text = pe, this.end = ye, e = 3;
							break;
						default:
							return this.write = ge, void(this.end = _e)
					}
					this.lastNeed = 0, this.lastTotal = 0, this.lastChar = ae.allocUnsafe(e)
				}

				function fe(t) {
					return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
				}

				function le(t) {
					var e = this.lastTotal - this.lastNeed,
						r = function(t, e, r) {
							if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
							if (t.lastNeed > 1 && e.length > 1) {
								if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
								if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�"
							}
						}(this, t);
					return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
				}

				function ce(t, e) {
					if ((t.length - e) % 2 == 0) {
						var r = t.toString("utf16le", e);
						if (r) {
							var n = r.charCodeAt(r.length - 1);
							if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1)
						}
						return r
					}
					return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
				}

				function de(t) {
					var e = t && t.length ? this.write(t) : "";
					if (this.lastNeed) {
						var r = this.lastTotal - this.lastNeed;
						return e + this.lastChar.toString("utf16le", 0, r)
					}
					return e
				}

				function pe(t, e) {
					var r = (t.length - e) % 3;
					return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r))
				}

				function ye(t) {
					var e = t && t.length ? this.write(t) : "";
					return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
				}

				function ge(t) {
					return t.toString(this.encoding)
				}

				function _e(t) {
					return t && t.length ? this.write(t) : ""
				}
				se.StringDecoder = ue, ue.prototype.write = function(t) {
					if (0 === t.length) return "";
					var e, r;
					if (this.lastNeed) {
						if (void 0 === (e = this.fillLast(t))) return "";
						r = this.lastNeed, this.lastNeed = 0
					} else r = 0;
					return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || ""
				}, ue.prototype.end = function(t) {
					var e = t && t.length ? this.write(t) : "";
					return this.lastNeed ? e + "�" : e
				}, ue.prototype.text = function(t, e) {
					var r = function(t, e, r) {
						var n = e.length - 1;
						if (n < r) return 0;
						var i = fe(e[n]);
						if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
						if (--n < r || -2 === i) return 0;
						if ((i = fe(e[n])) >= 0) return i > 0 && (t.lastNeed = i - 2), i;
						if (--n < r || -2 === i) return 0;
						if ((i = fe(e[n])) >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i;
						return 0
					}(this, t, e);
					if (!this.lastNeed) return t.toString("utf8", e);
					this.lastTotal = r;
					var n = t.length - (r - this.lastNeed);
					return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n)
				}, ue.prototype.fillLast = function(t) {
					if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
					t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
				};
				var be = dt.codes.ERR_STREAM_PREMATURE_CLOSE;

				function we() {}
				var ve, me = function t(e, r, n) {
					if ("function" == typeof r) return t(e, null, r);
					r || (r = {}), n = function(t) {
						var e = !1;
						return function() {
							if (!e) {
								e = !0;
								for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
								t.apply(this, n)
							}
						}
					}(n || we);
					var i = r.readable || !1 !== r.readable && e.readable,
						o = r.writable || !1 !== r.writable && e.writable,
						s = function() {
							e.writable || h()
						},
						a = e._writableState && e._writableState.finished,
						h = function() {
							o = !1, a = !0, i || n.call(e)
						},
						u = e._readableState && e._readableState.endEmitted,
						f = function() {
							i = !1, u = !0, o || n.call(e)
						},
						l = function(t) {
							n.call(e, t)
						},
						c = function() {
							var t;
							return i && !u ? (e._readableState && e._readableState.ended || (t = new be), n.call(e, t)) : o && !a ? (e._writableState && e._writableState.ended || (t = new be), n.call(e, t)) : void 0
						},
						d = function() {
							e.req.on("finish", h)
						};
					return ! function(t) {
							return t.setHeader && "function" == typeof t.abort
						}(e) ? o && !e._writableState && (e.on("end", s), e.on("close", s)) : (e.on("complete", h), e.on("abort", c), e.req ? d() : e.on("request", d)), e.on("end", f), e.on("finish", h), !1 !== r.error && e.on("error", l), e.on("close", c),
						function() {
							e.removeListener("complete", h), e.removeListener("abort", c), e.removeListener("request", d), e.req && e.req.removeListener("finish", h), e.removeListener("end", s), e.removeListener("close", s), e.removeListener("finish", h), e.removeListener("end", f), e.removeListener("error", l), e.removeListener("close", c)
						}
				};

				function Ee(t, e, r) {
					return e in t ? Object.defineProperty(t, e, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = r, t
				}
				var Se = me,
					Re = Symbol("lastResolve"),
					Be = Symbol("lastReject"),
					ke = Symbol("error"),
					Ae = Symbol("ended"),
					Ie = Symbol("lastPromise"),
					Te = Symbol("handlePromise"),
					Le = Symbol("stream");

				function Oe(t, e) {
					return {
						value: t,
						done: e
					}
				}

				function xe(t) {
					var e = t[Re];
					if (null !== e) {
						var r = t[Le].read();
						null !== r && (t[Ie] = null, t[Re] = null, t[Be] = null, e(Oe(r, !1)))
					}
				}

				function Ce(t) {
					n.nextTick(xe, t)
				}
				var Me, Ue = Object.getPrototypeOf((function() {})),
					Pe = Object.setPrototypeOf((Ee(ve = {
						get stream() {
							return this[Le]
						},
						next: function() {
							var t = this,
								e = this[ke];
							if (null !== e) return Promise.reject(e);
							if (this[Ae]) return Promise.resolve(Oe(void 0, !0));
							if (this[Le].destroyed) return new Promise((function(e, r) {
								n.nextTick((function() {
									t[ke] ? r(t[ke]) : e(Oe(void 0, !0))
								}))
							}));
							var r, i = this[Ie];
							if (i) r = new Promise(function(t, e) {
								return function(r, n) {
									t.then((function() {
										e[Ae] ? r(Oe(void 0, !0)) : e[Te](r, n)
									}), n)
								}
							}(i, this));
							else {
								var o = this[Le].read();
								if (null !== o) return Promise.resolve(Oe(o, !1));
								r = new Promise(this[Te])
							}
							return this[Ie] = r, r
						}
					}, Symbol.asyncIterator, (function() {
						return this
					})), Ee(ve, "return", (function() {
						var t = this;
						return new Promise((function(e, r) {
							t[Le].destroy(null, (function(t) {
								t ? r(t) : e(Oe(void 0, !0))
							}))
						}))
					})), ve), Ue),
					je = function(t) {
						var e, r = Object.create(Pe, (Ee(e = {}, Le, {
							value: t,
							writable: !0
						}), Ee(e, Re, {
							value: null,
							writable: !0
						}), Ee(e, Be, {
							value: null,
							writable: !0
						}), Ee(e, ke, {
							value: null,
							writable: !0
						}), Ee(e, Ae, {
							value: t._readableState.endEmitted,
							writable: !0
						}), Ee(e, Te, {
							value: function(t, e) {
								var n = r[Le].read();
								n ? (r[Ie] = null, r[Re] = null, r[Be] = null, t(Oe(n, !1))) : (r[Re] = t, r[Be] = e)
							},
							writable: !0
						}), e));
						return r[Ie] = null, Se(t, (function(t) {
							if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
								var e = r[Be];
								return null !== e && (r[Ie] = null, r[Re] = null, r[Be] = null, e(t)), void(r[ke] = t)
							}
							var n = r[Re];
							null !== n && (r[Ie] = null, r[Re] = null, r[Be] = null, n(Oe(void 0, !0))), r[Ae] = !0
						})), t.on("readable", Ce.bind(null, r)), r
					},
					Ne = function() {
						throw new Error("Readable.from is not available in the browser")
					},
					De = sr;
				sr.ReadableState = or, D.exports.EventEmitter;
				var ze = function(t, e) {
						return t.listeners(e).length
					},
					Fe = tt,
					We = d.Buffer,
					$e = l.Uint8Array || function() {};
				var qe, Ke = et;
				qe = Ke && Ke.debuglog ? Ke.debuglog("stream") : function() {};
				var He, Ve, Ge, Ye = ht,
					Je = ct,
					Xe = bt.getHighWaterMark,
					Ze = dt.codes,
					Qe = Ze.ERR_INVALID_ARG_TYPE,
					tr = Ze.ERR_STREAM_PUSH_AFTER_EOF,
					er = Ze.ERR_METHOD_NOT_IMPLEMENTED,
					rr = Ze.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
				P.exports(sr, Fe);
				var nr = Je.errorOrDestroy,
					ir = ["error", "close", "destroy", "pause", "resume"];

				function or(t, e, r) {
					Me = Me || Xt, t = t || {}, "boolean" != typeof r && (r = e instanceof Me), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = Xe(this, t, "readableHighWaterMark", r), this.buffer = new Ye, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (He || (He = se.StringDecoder), this.decoder = new He(t.encoding), this.encoding = t.encoding)
				}

				function sr(t) {
					if (Me = Me || Xt, !(this instanceof sr)) return new sr(t);
					var e = this instanceof Me;
					this._readableState = new or(t, this, e), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), Fe.call(this)
				}

				function ar(t, e, r, n, i) {
					qe("readableAddChunk", e);
					var o, s = t._readableState;
					if (null === e) s.reading = !1,
						function(t, e) {
							if (qe("onEofChunk"), e.ended) return;
							if (e.decoder) {
								var r = e.decoder.end();
								r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length)
							}
							e.ended = !0, e.sync ? lr(t) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, cr(t)))
						}(t, s);
					else if (i || (o = function(t, e) {
							var r;
							n = e, We.isBuffer(n) || n instanceof $e || "string" == typeof e || void 0 === e || t.objectMode || (r = new Qe("chunk", ["string", "Buffer", "Uint8Array"], e));
							var n;
							return r
						}(s, e)), o) nr(t, o);
					else if (s.objectMode || e && e.length > 0)
						if ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === We.prototype || (e = function(t) {
								return We.from(t)
							}(e)), n) s.endEmitted ? nr(t, new rr) : hr(t, s, e, !0);
						else if (s.ended) nr(t, new tr);
					else {
						if (s.destroyed) return !1;
						s.reading = !1, s.decoder && !r ? (e = s.decoder.write(e), s.objectMode || 0 !== e.length ? hr(t, s, e, !1) : dr(t, s)) : hr(t, s, e, !1)
					} else n || (s.reading = !1, dr(t, s));
					return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
				}

				function hr(t, e, r, n) {
					e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && lr(t)), dr(t, e)
				}
				Object.defineProperty(sr.prototype, "destroyed", {
					enumerable: !1,
					get: function() {
						return void 0 !== this._readableState && this._readableState.destroyed
					},
					set: function(t) {
						this._readableState && (this._readableState.destroyed = t)
					}
				}), sr.prototype.destroy = Je.destroy, sr.prototype._undestroy = Je.undestroy, sr.prototype._destroy = function(t, e) {
					e(t)
				}, sr.prototype.push = function(t, e) {
					var r, n = this._readableState;
					return n.objectMode ? r = !0 : "string" == typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = We.from(t, e), e = ""), r = !0), ar(this, t, e, !1, r)
				}, sr.prototype.unshift = function(t) {
					return ar(this, t, null, !0, !1)
				}, sr.prototype.isPaused = function() {
					return !1 === this._readableState.flowing
				}, sr.prototype.setEncoding = function(t) {
					He || (He = se.StringDecoder);
					var e = new He(t);
					this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
					for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += e.write(r.data), r = r.next;
					return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
				};
				var ur = 1073741824;

				function fr(t, e) {
					return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
						return t >= ur ? t = ur : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t
					}(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0))
				}

				function lr(t) {
					var e = t._readableState;
					qe("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (qe("emitReadable", e.flowing), e.emittedReadable = !0, n.nextTick(cr, t))
				}

				function cr(t) {
					var e = t._readableState;
					qe("emitReadable_", e.destroyed, e.length, e.ended), e.destroyed || !e.length && !e.ended || (t.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, br(t)
				}

				function dr(t, e) {
					e.readingMore || (e.readingMore = !0, n.nextTick(pr, t, e))
				}

				function pr(t, e) {
					for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length);) {
						var r = e.length;
						if (qe("maybeReadMore read 0"), t.read(0), r === e.length) break
					}
					e.readingMore = !1
				}

				function yr(t) {
					var e = t._readableState;
					e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
				}

				function gr(t) {
					qe("readable nexttick read 0"), t.read(0)
				}

				function _r(t, e) {
					qe("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = !1, t.emit("resume"), br(t), e.flowing && !e.reading && t.read(0)
				}

				function br(t) {
					var e = t._readableState;
					for (qe("flow", e.flowing); e.flowing && null !== t.read(););
				}

				function wr(t, e) {
					return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r);
					var r
				}

				function vr(t) {
					var e = t._readableState;
					qe("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, n.nextTick(mr, e, t))
				}

				function mr(t, e) {
					if (qe("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, e.readable = !1, e.emit("end"), t.autoDestroy)) {
						var r = e._writableState;
						(!r || r.autoDestroy && r.finished) && e.destroy()
					}
				}

				function Er(t, e) {
					for (var r = 0, n = t.length; r < n; r++)
						if (t[r] === e) return r;
					return -1
				}
				sr.prototype.read = function(t) {
					qe("read", t), t = parseInt(t, 10);
					var e = this._readableState,
						r = t;
					if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return qe("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? vr(this) : lr(this), null;
					if (0 === (t = fr(t, e)) && e.ended) return 0 === e.length && vr(this), null;
					var n, i = e.needReadable;
					return qe("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && qe("length less than watermark", i = !0), e.ended || e.reading ? qe("reading or ended", i = !1) : i && (qe("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = fr(r, e))), null === (n = t > 0 ? wr(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), 0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && vr(this)), null !== n && this.emit("data", n), n
				}, sr.prototype._read = function(t) {
					nr(this, new er("_read()"))
				}, sr.prototype.pipe = function(t, e) {
					var r = this,
						i = this._readableState;
					switch (i.pipesCount) {
						case 0:
							i.pipes = t;
							break;
						case 1:
							i.pipes = [i.pipes, t];
							break;
						default:
							i.pipes.push(t)
					}
					i.pipesCount += 1, qe("pipe count=%d opts=%j", i.pipesCount, e);
					var o = (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? a : p;

					function s(e, n) {
						qe("onunpipe"), e === r && n && !1 === n.hasUnpiped && (n.hasUnpiped = !0, qe("cleanup"), t.removeListener("close", c), t.removeListener("finish", d), t.removeListener("drain", h), t.removeListener("error", l), t.removeListener("unpipe", s), r.removeListener("end", a), r.removeListener("end", p), r.removeListener("data", f), u = !0, !i.awaitDrain || t._writableState && !t._writableState.needDrain || h())
					}

					function a() {
						qe("onend"), t.end()
					}
					i.endEmitted ? n.nextTick(o) : r.once("end", o), t.on("unpipe", s);
					var h = function(t) {
						return function() {
							var e = t._readableState;
							qe("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && ze(t, "data") && (e.flowing = !0, br(t))
						}
					}(r);
					t.on("drain", h);
					var u = !1;

					function f(e) {
						qe("ondata");
						var n = t.write(e);
						qe("dest.write", n), !1 === n && ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== Er(i.pipes, t)) && !u && (qe("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
					}

					function l(e) {
						qe("onerror", e), p(), t.removeListener("error", l), 0 === ze(t, "error") && nr(t, e)
					}

					function c() {
						t.removeListener("finish", d), p()
					}

					function d() {
						qe("onfinish"), t.removeListener("close", c), p()
					}

					function p() {
						qe("unpipe"), r.unpipe(t)
					}
					return r.on("data", f),
						function(t, e, r) {
							if ("function" == typeof t.prependListener) return t.prependListener(e, r);
							t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r)
						}(t, "error", l), t.once("close", c), t.once("finish", d), t.emit("pipe", r), i.flowing || (qe("pipe resume"), r.resume()), t
				}, sr.prototype.unpipe = function(t) {
					var e = this._readableState,
						r = {
							hasUnpiped: !1
						};
					if (0 === e.pipesCount) return this;
					if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r), this);
					if (!t) {
						var n = e.pipes,
							i = e.pipesCount;
						e.pipes = null, e.pipesCount = 0, e.flowing = !1;
						for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
							hasUnpiped: !1
						});
						return this
					}
					var s = Er(e.pipes, t);
					return -1 === s ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this)
				}, sr.prototype.on = function(t, e) {
					var r = Fe.prototype.on.call(this, t, e),
						i = this._readableState;
					return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === t && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, qe("on readable", i.length, i.reading), i.length ? lr(this) : i.reading || n.nextTick(gr, this))), r
				}, sr.prototype.addListener = sr.prototype.on, sr.prototype.removeListener = function(t, e) {
					var r = Fe.prototype.removeListener.call(this, t, e);
					return "readable" === t && n.nextTick(yr, this), r
				}, sr.prototype.removeAllListeners = function(t) {
					var e = Fe.prototype.removeAllListeners.apply(this, arguments);
					return "readable" !== t && void 0 !== t || n.nextTick(yr, this), e
				}, sr.prototype.resume = function() {
					var t = this._readableState;
					return t.flowing || (qe("resume"), t.flowing = !t.readableListening, function(t, e) {
						e.resumeScheduled || (e.resumeScheduled = !0, n.nextTick(_r, t, e))
					}(this, t)), t.paused = !1, this
				}, sr.prototype.pause = function() {
					return qe("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (qe("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
				}, sr.prototype.wrap = function(t) {
					var e = this,
						r = this._readableState,
						n = !1;
					for (var i in t.on("end", (function() {
							if (qe("wrapped end"), r.decoder && !r.ended) {
								var t = r.decoder.end();
								t && t.length && e.push(t)
							}
							e.push(null)
						})), t.on("data", (function(i) {
							(qe("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (e.push(i) || (n = !0, t.pause()))
						})), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
						return function() {
							return t[e].apply(t, arguments)
						}
					}(i));
					for (var o = 0; o < ir.length; o++) t.on(ir[o], this.emit.bind(this, ir[o]));
					return this._read = function(e) {
						qe("wrapped _read", e), n && (n = !1, t.resume())
					}, this
				}, "function" == typeof Symbol && (sr.prototype[Symbol.asyncIterator] = function() {
					return void 0 === Ve && (Ve = je), Ve(this)
				}), Object.defineProperty(sr.prototype, "readableHighWaterMark", {
					enumerable: !1,
					get: function() {
						return this._readableState.highWaterMark
					}
				}), Object.defineProperty(sr.prototype, "readableBuffer", {
					enumerable: !1,
					get: function() {
						return this._readableState && this._readableState.buffer
					}
				}), Object.defineProperty(sr.prototype, "readableFlowing", {
					enumerable: !1,
					get: function() {
						return this._readableState.flowing
					},
					set: function(t) {
						this._readableState && (this._readableState.flowing = t)
					}
				}), sr._fromList = wr, Object.defineProperty(sr.prototype, "readableLength", {
					enumerable: !1,
					get: function() {
						return this._readableState.length
					}
				}), "function" == typeof Symbol && (sr.from = function(t, e) {
					return void 0 === Ge && (Ge = Ne), Ge(sr, t, e)
				});
				var Sr = Or,
					Rr = dt.codes,
					Br = Rr.ERR_METHOD_NOT_IMPLEMENTED,
					kr = Rr.ERR_MULTIPLE_CALLBACK,
					Ar = Rr.ERR_TRANSFORM_ALREADY_TRANSFORMING,
					Ir = Rr.ERR_TRANSFORM_WITH_LENGTH_0,
					Tr = Xt;

				function Lr(t, e) {
					var r = this._transformState;
					r.transforming = !1;
					var n = r.writecb;
					if (null === n) return this.emit("error", new kr);
					r.writechunk = null, r.writecb = null, null != e && this.push(e), n(t);
					var i = this._readableState;
					i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
				}

				function Or(t) {
					if (!(this instanceof Or)) return new Or(t);
					Tr.call(this, t), this._transformState = {
						afterTransform: Lr.bind(this),
						needTransform: !1,
						transforming: !1,
						writecb: null,
						writechunk: null,
						writeencoding: null
					}, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", xr)
				}

				function xr() {
					var t = this;
					"function" != typeof this._flush || this._readableState.destroyed ? Cr(this, null, null) : this._flush((function(e, r) {
						Cr(t, e, r)
					}))
				}

				function Cr(t, e, r) {
					if (e) return t.emit("error", e);
					if (null != r && t.push(r), t._writableState.length) throw new Ir;
					if (t._transformState.transforming) throw new Ar;
					return t.push(null)
				}
				P.exports(Or, Tr), Or.prototype.push = function(t, e) {
					return this._transformState.needTransform = !1, Tr.prototype.push.call(this, t, e)
				}, Or.prototype._transform = function(t, e, r) {
					r(new Br("_transform()"))
				}, Or.prototype._write = function(t, e, r) {
					var n = this._transformState;
					if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
						var i = this._readableState;
						(n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
					}
				}, Or.prototype._read = function(t) {
					var e = this._transformState;
					null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform))
				}, Or.prototype._destroy = function(t, e) {
					Tr.prototype._destroy.call(this, t, (function(t) {
						e(t)
					}))
				};
				var Mr, Ur = jr,
					Pr = Sr;

				function jr(t) {
					if (!(this instanceof jr)) return new jr(t);
					Pr.call(this, t)
				}
				P.exports(jr, Pr), jr.prototype._transform = function(t, e, r) {
					r(null, t)
				};
				var Nr = dt.codes,
					Dr = Nr.ERR_MISSING_ARGS,
					zr = Nr.ERR_STREAM_DESTROYED;

				function Fr(t) {
					if (t) throw t
				}

				function Wr(t) {
					t()
				}

				function $r(t, e) {
					return t.pipe(e)
				}
				var qr = function() {
					for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
					var n, i = function(t) {
						return t.length ? "function" != typeof t[t.length - 1] ? Fr : t.pop() : Fr
					}(e);
					if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new Dr("streams");
					var o = e.map((function(t, r) {
						var s = r < e.length - 1;
						return function(t, e, r, n) {
							n = function(t) {
								var e = !1;
								return function() {
									e || (e = !0, t.apply(void 0, arguments))
								}
							}(n);
							var i = !1;
							t.on("close", (function() {
								i = !0
							})), void 0 === Mr && (Mr = me), Mr(t, {
								readable: e,
								writable: r
							}, (function(t) {
								if (t) return n(t);
								i = !0, n()
							}));
							var o = !1;
							return function(e) {
								if (!i && !o) return o = !0,
									function(t) {
										return t.setHeader && "function" == typeof t.abort
									}(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void n(e || new zr("pipe"))
							}
						}(t, s, r > 0, (function(t) {
							n || (n = t), t && o.forEach(Wr), s || (o.forEach(Wr), i(n))
						}))
					}));
					return e.reduce($r)
				};
				! function(t, e) {
					(e = t.exports = De).Stream = e, e.Readable = e, e.Writable = Et, e.Duplex = Xt, e.Transform = Sr, e.PassThrough = Ur, e.finished = me, e.pipeline = qr
				}(N, N.exports);
				var Kr = O.exports.Buffer,
					Hr = N.exports.Transform;

				function Vr(t) {
					Hr.call(this), this._block = Kr.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
				}(0, P.exports)(Vr, Hr), Vr.prototype._transform = function(t, e, r) {
					var n = null;
					try {
						this.update(t, e)
					} catch (i) {
						n = i
					}
					r(n)
				}, Vr.prototype._flush = function(t) {
					var e = null;
					try {
						this.push(this.digest())
					} catch (r) {
						e = r
					}
					t(e)
				}, Vr.prototype.update = function(t, e) {
					if (function(t, e) {
							if (!Kr.isBuffer(t) && "string" != typeof t) throw new TypeError(e + " must be a string or a buffer")
						}(t, "Data"), this._finalized) throw new Error("Digest already called");
					Kr.isBuffer(t) || (t = Kr.from(t, e));
					for (var r = this._block, n = 0; this._blockOffset + t.length - n >= this._blockSize;) {
						for (var i = this._blockOffset; i < this._blockSize;) r[i++] = t[n++];
						this._update(), this._blockOffset = 0
					}
					for (; n < t.length;) r[this._blockOffset++] = t[n++];
					for (var o = 0, s = 8 * t.length; s > 0; ++o) this._length[o] += s, (s = this._length[o] / 4294967296 | 0) > 0 && (this._length[o] -= 4294967296 * s);
					return this
				}, Vr.prototype._update = function() {
					throw new Error("_update is not implemented")
				}, Vr.prototype.digest = function(t) {
					if (this._finalized) throw new Error("Digest already called");
					this._finalized = !0;
					var e = this._digest();
					void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
					for (var r = 0; r < 4; ++r) this._length[r] = 0;
					return e
				}, Vr.prototype._digest = function() {
					throw new Error("_digest is not implemented")
				};
				var Gr = Vr,
					Yr = P.exports,
					Jr = Gr,
					Xr = O.exports.Buffer,
					Zr = new Array(16);

				function Qr() {
					Jr.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
				}

				function tn(t, e) {
					return t << e | t >>> 32 - e
				}

				function en(t, e, r, n, i, o, s) {
					return tn(t + (e & r | ~e & n) + i + o | 0, s) + e | 0
				}

				function rn(t, e, r, n, i, o, s) {
					return tn(t + (e & n | r & ~n) + i + o | 0, s) + e | 0
				}

				function nn(t, e, r, n, i, o, s) {
					return tn(t + (e ^ r ^ n) + i + o | 0, s) + e | 0
				}

				function on(t, e, r, n, i, o, s) {
					return tn(t + (r ^ (e | ~n)) + i + o | 0, s) + e | 0
				}
				Yr(Qr, Jr), Qr.prototype._update = function() {
					for (var t = Zr, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
					var r = this._a,
						n = this._b,
						i = this._c,
						o = this._d;
					r = en(r, n, i, o, t[0], 3614090360, 7), o = en(o, r, n, i, t[1], 3905402710, 12), i = en(i, o, r, n, t[2], 606105819, 17), n = en(n, i, o, r, t[3], 3250441966, 22), r = en(r, n, i, o, t[4], 4118548399, 7), o = en(o, r, n, i, t[5], 1200080426, 12), i = en(i, o, r, n, t[6], 2821735955, 17), n = en(n, i, o, r, t[7], 4249261313, 22), r = en(r, n, i, o, t[8], 1770035416, 7), o = en(o, r, n, i, t[9], 2336552879, 12), i = en(i, o, r, n, t[10], 4294925233, 17), n = en(n, i, o, r, t[11], 2304563134, 22), r = en(r, n, i, o, t[12], 1804603682, 7), o = en(o, r, n, i, t[13], 4254626195, 12), i = en(i, o, r, n, t[14], 2792965006, 17), r = rn(r, n = en(n, i, o, r, t[15], 1236535329, 22), i, o, t[1], 4129170786, 5), o = rn(o, r, n, i, t[6], 3225465664, 9), i = rn(i, o, r, n, t[11], 643717713, 14), n = rn(n, i, o, r, t[0], 3921069994, 20), r = rn(r, n, i, o, t[5], 3593408605, 5), o = rn(o, r, n, i, t[10], 38016083, 9), i = rn(i, o, r, n, t[15], 3634488961, 14), n = rn(n, i, o, r, t[4], 3889429448, 20), r = rn(r, n, i, o, t[9], 568446438, 5), o = rn(o, r, n, i, t[14], 3275163606, 9), i = rn(i, o, r, n, t[3], 4107603335, 14), n = rn(n, i, o, r, t[8], 1163531501, 20), r = rn(r, n, i, o, t[13], 2850285829, 5), o = rn(o, r, n, i, t[2], 4243563512, 9), i = rn(i, o, r, n, t[7], 1735328473, 14), r = nn(r, n = rn(n, i, o, r, t[12], 2368359562, 20), i, o, t[5], 4294588738, 4), o = nn(o, r, n, i, t[8], 2272392833, 11), i = nn(i, o, r, n, t[11], 1839030562, 16), n = nn(n, i, o, r, t[14], 4259657740, 23), r = nn(r, n, i, o, t[1], 2763975236, 4), o = nn(o, r, n, i, t[4], 1272893353, 11), i = nn(i, o, r, n, t[7], 4139469664, 16), n = nn(n, i, o, r, t[10], 3200236656, 23), r = nn(r, n, i, o, t[13], 681279174, 4), o = nn(o, r, n, i, t[0], 3936430074, 11), i = nn(i, o, r, n, t[3], 3572445317, 16), n = nn(n, i, o, r, t[6], 76029189, 23), r = nn(r, n, i, o, t[9], 3654602809, 4), o = nn(o, r, n, i, t[12], 3873151461, 11), i = nn(i, o, r, n, t[15], 530742520, 16), r = on(r, n = nn(n, i, o, r, t[2], 3299628645, 23), i, o, t[0], 4096336452, 6), o = on(o, r, n, i, t[7], 1126891415, 10), i = on(i, o, r, n, t[14], 2878612391, 15), n = on(n, i, o, r, t[5], 4237533241, 21), r = on(r, n, i, o, t[12], 1700485571, 6), o = on(o, r, n, i, t[3], 2399980690, 10), i = on(i, o, r, n, t[10], 4293915773, 15), n = on(n, i, o, r, t[1], 2240044497, 21), r = on(r, n, i, o, t[8], 1873313359, 6), o = on(o, r, n, i, t[15], 4264355552, 10), i = on(i, o, r, n, t[6], 2734768916, 15), n = on(n, i, o, r, t[13], 1309151649, 21), r = on(r, n, i, o, t[4], 4149444226, 6), o = on(o, r, n, i, t[11], 3174756917, 10), i = on(i, o, r, n, t[2], 718787259, 15), n = on(n, i, o, r, t[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
				}, Qr.prototype._digest = function() {
					this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
					var t = Xr.allocUnsafe(16);
					return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t
				};
				var sn = Qr,
					an = d.Buffer,
					hn = P.exports,
					un = Gr,
					fn = new Array(16),
					ln = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
					cn = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
					dn = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
					pn = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
					yn = [0, 1518500249, 1859775393, 2400959708, 2840853838],
					gn = [1352829926, 1548603684, 1836072691, 2053994217, 0];

				function _n() {
					un.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
				}

				function bn(t, e) {
					return t << e | t >>> 32 - e
				}

				function wn(t, e, r, n, i, o, s, a) {
					return bn(t + (e ^ r ^ n) + o + s | 0, a) + i | 0
				}

				function vn(t, e, r, n, i, o, s, a) {
					return bn(t + (e & r | ~e & n) + o + s | 0, a) + i | 0
				}

				function mn(t, e, r, n, i, o, s, a) {
					return bn(t + ((e | ~r) ^ n) + o + s | 0, a) + i | 0
				}

				function En(t, e, r, n, i, o, s, a) {
					return bn(t + (e & n | r & ~n) + o + s | 0, a) + i | 0
				}

				function Sn(t, e, r, n, i, o, s, a) {
					return bn(t + (e ^ (r | ~n)) + o + s | 0, a) + i | 0
				}
				hn(_n, un), _n.prototype._update = function() {
					for (var t = fn, e = 0; e < 16; ++e) t[e] = this._block.readInt32LE(4 * e);
					for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, s = 0 | this._e, a = 0 | this._a, h = 0 | this._b, u = 0 | this._c, f = 0 | this._d, l = 0 | this._e, c = 0; c < 80; c += 1) {
						var d, p;
						c < 16 ? (d = wn(r, n, i, o, s, t[ln[c]], yn[0], dn[c]), p = Sn(a, h, u, f, l, t[cn[c]], gn[0], pn[c])) : c < 32 ? (d = vn(r, n, i, o, s, t[ln[c]], yn[1], dn[c]), p = En(a, h, u, f, l, t[cn[c]], gn[1], pn[c])) : c < 48 ? (d = mn(r, n, i, o, s, t[ln[c]], yn[2], dn[c]), p = mn(a, h, u, f, l, t[cn[c]], gn[2], pn[c])) : c < 64 ? (d = En(r, n, i, o, s, t[ln[c]], yn[3], dn[c]), p = vn(a, h, u, f, l, t[cn[c]], gn[3], pn[c])) : (d = Sn(r, n, i, o, s, t[ln[c]], yn[4], dn[c]), p = wn(a, h, u, f, l, t[cn[c]], gn[4], pn[c])), r = s, s = o, o = bn(i, 10), i = n, n = d, a = l, l = f, f = bn(u, 10), u = h, h = p
					}
					var y = this._b + i + f | 0;
					this._b = this._c + o + l | 0, this._c = this._d + s + a | 0, this._d = this._e + r + h | 0, this._e = this._a + n + u | 0, this._a = y
				}, _n.prototype._digest = function() {
					this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
					var t = an.alloc ? an.alloc(20) : new an(20);
					return t.writeInt32LE(this._a, 0), t.writeInt32LE(this._b, 4), t.writeInt32LE(this._c, 8), t.writeInt32LE(this._d, 12), t.writeInt32LE(this._e, 16), t
				};
				var Rn = _n,
					Bn = {
						exports: {}
					},
					kn = O.exports.Buffer;

				function An(t, e) {
					this._block = kn.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
				}
				An.prototype.update = function(t, e) {
					"string" == typeof t && (e = e || "utf8", t = kn.from(t, e));
					for (var r = this._block, n = this._blockSize, i = t.length, o = this._len, s = 0; s < i;) {
						for (var a = o % n, h = Math.min(i - s, n - a), u = 0; u < h; u++) r[a + u] = t[s + u];
						s += h, (o += h) % n == 0 && this._update(r)
					}
					return this._len += i, this
				}, An.prototype.digest = function(t) {
					var e = this._len % this._blockSize;
					this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
					var r = 8 * this._len;
					if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
					else {
						var n = (4294967295 & r) >>> 0,
							i = (r - n) / 4294967296;
						this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
					}
					this._update(this._block);
					var o = this._hash();
					return t ? o.toString(t) : o
				}, An.prototype._update = function() {
					throw new Error("_update must be implemented by subclass")
				};
				var In = An,
					Tn = P.exports,
					Ln = In,
					On = O.exports.Buffer,
					xn = [1518500249, 1859775393, -1894007588, -899497514],
					Cn = new Array(80);

				function Mn() {
					this.init(), this._w = Cn, Ln.call(this, 64, 56)
				}

				function Un(t) {
					return t << 30 | t >>> 2
				}

				function Pn(t, e, r, n) {
					return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
				}
				Tn(Mn, Ln), Mn.prototype.init = function() {
					return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
				}, Mn.prototype._update = function(t) {
					for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, a = 0 | this._e, h = 0; h < 16; ++h) r[h] = t.readInt32BE(4 * h);
					for (; h < 80; ++h) r[h] = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16];
					for (var u = 0; u < 80; ++u) {
						var f = ~~(u / 20),
							l = 0 | ((e = n) << 5 | e >>> 27) + Pn(f, i, o, s) + a + r[u] + xn[f];
						a = s, s = o, o = Un(i), i = n, n = l
					}
					this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0
				}, Mn.prototype._hash = function() {
					var t = On.allocUnsafe(20);
					return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
				};
				var jn = Mn,
					Nn = P.exports,
					Dn = In,
					zn = O.exports.Buffer,
					Fn = [1518500249, 1859775393, -1894007588, -899497514],
					Wn = new Array(80);

				function $n() {
					this.init(), this._w = Wn, Dn.call(this, 64, 56)
				}

				function qn(t) {
					return t << 5 | t >>> 27
				}

				function Kn(t) {
					return t << 30 | t >>> 2
				}

				function Hn(t, e, r, n) {
					return 0 === t ? e & r | ~e & n : 2 === t ? e & r | e & n | r & n : e ^ r ^ n
				}
				Nn($n, Dn), $n.prototype.init = function() {
					return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
				}, $n.prototype._update = function(t) {
					for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, a = 0 | this._e, h = 0; h < 16; ++h) r[h] = t.readInt32BE(4 * h);
					for (; h < 80; ++h) r[h] = (e = r[h - 3] ^ r[h - 8] ^ r[h - 14] ^ r[h - 16]) << 1 | e >>> 31;
					for (var u = 0; u < 80; ++u) {
						var f = ~~(u / 20),
							l = qn(n) + Hn(f, i, o, s) + a + r[u] + Fn[f] | 0;
						a = s, s = o, o = Kn(i), i = n, n = l
					}
					this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0
				}, $n.prototype._hash = function() {
					var t = zn.allocUnsafe(20);
					return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
				};
				var Vn = $n,
					Gn = P.exports,
					Yn = In,
					Jn = O.exports.Buffer,
					Xn = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
					Zn = new Array(64);

				function Qn() {
					this.init(), this._w = Zn, Yn.call(this, 64, 56)
				}

				function ti(t, e, r) {
					return r ^ t & (e ^ r)
				}

				function ei(t, e, r) {
					return t & e | r & (t | e)
				}

				function ri(t) {
					return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
				}

				function ni(t) {
					return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
				}

				function ii(t) {
					return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
				}
				Gn(Qn, Yn), Qn.prototype.init = function() {
					return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
				}, Qn.prototype._update = function(t) {
					for (var e, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, s = 0 | this._d, a = 0 | this._e, h = 0 | this._f, u = 0 | this._g, f = 0 | this._h, l = 0; l < 16; ++l) r[l] = t.readInt32BE(4 * l);
					for (; l < 64; ++l) r[l] = 0 | (((e = r[l - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + r[l - 7] + ii(r[l - 15]) + r[l - 16];
					for (var c = 0; c < 64; ++c) {
						var d = f + ni(a) + ti(a, h, u) + Xn[c] + r[c] | 0,
							p = ri(n) + ei(n, i, o) | 0;
						f = u, u = h, h = a, a = s + d | 0, s = o, o = i, i = n, n = d + p | 0
					}
					this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = s + this._d | 0, this._e = a + this._e | 0, this._f = h + this._f | 0, this._g = u + this._g | 0, this._h = f + this._h | 0
				}, Qn.prototype._hash = function() {
					var t = Jn.allocUnsafe(32);
					return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
				};
				var oi = Qn,
					si = P.exports,
					ai = oi,
					hi = In,
					ui = O.exports.Buffer,
					fi = new Array(64);

				function li() {
					this.init(), this._w = fi, hi.call(this, 64, 56)
				}
				si(li, ai), li.prototype.init = function() {
					return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
				}, li.prototype._hash = function() {
					var t = ui.allocUnsafe(28);
					return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
				};
				var ci = li,
					di = P.exports,
					pi = In,
					yi = O.exports.Buffer,
					gi = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
					_i = new Array(160);

				function bi() {
					this.init(), this._w = _i, pi.call(this, 128, 112)
				}

				function wi(t, e, r) {
					return r ^ t & (e ^ r)
				}

				function vi(t, e, r) {
					return t & e | r & (t | e)
				}

				function mi(t, e) {
					return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
				}

				function Ei(t, e) {
					return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
				}

				function Si(t, e) {
					return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
				}

				function Ri(t, e) {
					return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
				}

				function Bi(t, e) {
					return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
				}

				function ki(t, e) {
					return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
				}

				function Ai(t, e) {
					return t >>> 0 < e >>> 0 ? 1 : 0
				}
				di(bi, pi), bi.prototype.init = function() {
					return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
				}, bi.prototype._update = function(t) {
					for (var e = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, a = 0 | this._fh, h = 0 | this._gh, u = 0 | this._hh, f = 0 | this._al, l = 0 | this._bl, c = 0 | this._cl, d = 0 | this._dl, p = 0 | this._el, y = 0 | this._fl, g = 0 | this._gl, _ = 0 | this._hl, b = 0; b < 32; b += 2) e[b] = t.readInt32BE(4 * b), e[b + 1] = t.readInt32BE(4 * b + 4);
					for (; b < 160; b += 2) {
						var w = e[b - 30],
							v = e[b - 30 + 1],
							m = Si(w, v),
							E = Ri(v, w),
							S = Bi(w = e[b - 4], v = e[b - 4 + 1]),
							R = ki(v, w),
							B = e[b - 14],
							k = e[b - 14 + 1],
							A = e[b - 32],
							I = e[b - 32 + 1],
							T = E + k | 0,
							L = m + B + Ai(T, E) | 0;
						L = (L = L + S + Ai(T = T + R | 0, R) | 0) + A + Ai(T = T + I | 0, I) | 0, e[b] = L, e[b + 1] = T
					}
					for (var O = 0; O < 160; O += 2) {
						L = e[O], T = e[O + 1];
						var x = vi(r, n, i),
							C = vi(f, l, c),
							M = mi(r, f),
							U = mi(f, r),
							P = Ei(s, p),
							j = Ei(p, s),
							N = gi[O],
							D = gi[O + 1],
							z = wi(s, a, h),
							F = wi(p, y, g),
							W = _ + j | 0,
							$ = u + P + Ai(W, _) | 0;
						$ = ($ = ($ = $ + z + Ai(W = W + F | 0, F) | 0) + N + Ai(W = W + D | 0, D) | 0) + L + Ai(W = W + T | 0, T) | 0;
						var q = U + C | 0,
							K = M + x + Ai(q, U) | 0;
						u = h, _ = g, h = a, g = y, a = s, y = p, s = o + $ + Ai(p = d + W | 0, d) | 0, o = i, d = c, i = n, c = l, n = r, l = f, r = $ + K + Ai(f = W + q | 0, W) | 0
					}
					this._al = this._al + f | 0, this._bl = this._bl + l | 0, this._cl = this._cl + c | 0, this._dl = this._dl + d | 0, this._el = this._el + p | 0, this._fl = this._fl + y | 0, this._gl = this._gl + g | 0, this._hl = this._hl + _ | 0, this._ah = this._ah + r + Ai(this._al, f) | 0, this._bh = this._bh + n + Ai(this._bl, l) | 0, this._ch = this._ch + i + Ai(this._cl, c) | 0, this._dh = this._dh + o + Ai(this._dl, d) | 0, this._eh = this._eh + s + Ai(this._el, p) | 0, this._fh = this._fh + a + Ai(this._fl, y) | 0, this._gh = this._gh + h + Ai(this._gl, g) | 0, this._hh = this._hh + u + Ai(this._hl, _) | 0
				}, bi.prototype._hash = function() {
					var t = yi.allocUnsafe(64);

					function e(e, r, n) {
						t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
					}
					return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
				};
				var Ii = bi,
					Ti = P.exports,
					Li = Ii,
					Oi = In,
					xi = O.exports.Buffer,
					Ci = new Array(160);

				function Mi() {
					this.init(), this._w = Ci, Oi.call(this, 128, 112)
				}
				Ti(Mi, Li), Mi.prototype.init = function() {
					return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
				}, Mi.prototype._hash = function() {
					var t = xi.allocUnsafe(48);

					function e(e, r, n) {
						t.writeInt32BE(e, n), t.writeInt32BE(r, n + 4)
					}
					return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
				};
				var Ui = Mi,
					Pi = Bn.exports = function(t) {
						t = t.toLowerCase();
						var e = Pi[t];
						if (!e) throw new Error(t + " is not supported (we accept pull requests)");
						return new e
					};
				Pi.sha = jn, Pi.sha1 = Vn, Pi.sha224 = ci, Pi.sha256 = oi, Pi.sha384 = Ui, Pi.sha512 = Ii;
				var ji = O.exports.Buffer,
					Ni = function(t, e, r) {
						if (ji.isBuffer(t)) return t;
						if ("string" == typeof t) return ji.from(t, e);
						if (ArrayBuffer.isView(t)) return ji.from(t.buffer);
						throw new TypeError(r + " must be a string, a Buffer, a typed array or a DataView")
					},
					Di = function(t) {
						return (new sn).update(t).digest()
					},
					zi = Rn,
					Fi = Bn.exports,
					Wi = O.exports.Buffer,
					$i = M,
					qi = U,
					Ki = Ni,
					Hi = Wi.alloc(128),
					Vi = {
						md5: 16,
						sha1: 20,
						sha224: 28,
						sha256: 32,
						sha384: 48,
						sha512: 64,
						rmd160: 20,
						ripemd160: 20
					};

				function Gi(t, e, r) {
					var n = function(t) {
							return "rmd160" === t || "ripemd160" === t ? function(t) {
								return (new zi).update(t).digest()
							} : "md5" === t ? Di : function(e) {
								return Fi(t).update(e).digest()
							}
						}(t),
						i = "sha512" === t || "sha384" === t ? 128 : 64;
					e.length > i ? e = n(e) : e.length < i && (e = Wi.concat([e, Hi], i));
					for (var o = Wi.allocUnsafe(i + Vi[t]), s = Wi.allocUnsafe(i + Vi[t]), a = 0; a < i; a++) o[a] = 54 ^ e[a], s[a] = 92 ^ e[a];
					var h = Wi.allocUnsafe(i + r + 4);
					o.copy(h, 0, 0, i), this.ipad1 = h, this.ipad2 = o, this.opad = s, this.alg = t, this.blocksize = i, this.hash = n, this.size = Vi[t]
				}
				Gi.prototype.run = function(t, e) {
					return t.copy(e, this.blocksize), this.hash(e).copy(this.opad, this.blocksize), this.hash(this.opad)
				};
				var Yi, Ji, Xi = function(t, e, r, n, i) {
						$i(r, n);
						var o = new Gi(i = i || "sha1", t = Ki(t, qi, "Password"), (e = Ki(e, qi, "Salt")).length),
							s = Wi.allocUnsafe(n),
							a = Wi.allocUnsafe(e.length + 4);
						e.copy(a, 0, 0, e.length);
						for (var h = 0, u = Vi[i], f = Math.ceil(n / u), l = 1; l <= f; l++) {
							a.writeUInt32BE(l, e.length);
							for (var c = o.run(a, o.ipad1), d = c, p = 1; p < r; p++) {
								d = o.run(d, o.ipad2);
								for (var y = 0; y < u; y++) c[y] ^= d[y]
							}
							c.copy(s, h), h += u
						}
						return s
					},
					Zi = O.exports.Buffer,
					Qi = M,
					to = U,
					eo = Xi,
					ro = Ni,
					no = l.crypto && l.crypto.subtle,
					io = {
						sha: "SHA-1",
						"sha-1": "SHA-1",
						sha1: "SHA-1",
						sha256: "SHA-256",
						"sha-256": "SHA-256",
						sha384: "SHA-384",
						"sha-384": "SHA-384",
						"sha-512": "SHA-512",
						sha512: "SHA-512"
					},
					oo = [];

				function so() {
					return Ji || (Ji = l.process && l.process.nextTick ? l.process.nextTick : l.queueMicrotask ? l.queueMicrotask : l.setImmediate ? l.setImmediate : l.setTimeout)
				}

				function ao(t, e, r, n, i) {
					return no.importKey("raw", t, {
						name: "PBKDF2"
					}, !1, ["deriveBits"]).then((function(t) {
						return no.deriveBits({
							name: "PBKDF2",
							salt: e,
							iterations: r,
							hash: {
								name: i
							}
						}, t, n << 3)
					})).then((function(t) {
						return Zi.from(t)
					}))
				}
				var ho = function(t, e, r, n, i, o) {
					"function" == typeof i && (o = i, i = void 0);
					var s = io[(i = i || "sha1").toLowerCase()];
					if (s && "function" == typeof l.Promise) {
						if (Qi(r, n), t = ro(t, to, "Password"), e = ro(e, to, "Salt"), "function" != typeof o) throw new Error("No callback provided to pbkdf2");
						! function(t, e) {
							t.then((function(t) {
								so()((function() {
									e(null, t)
								}))
							}), (function(t) {
								so()((function() {
									e(t)
								}))
							}))
						}(function(t) {
							if (l.process && !l.process.browser) return Promise.resolve(!1);
							if (!no || !no.importKey || !no.deriveBits) return Promise.resolve(!1);
							if (void 0 !== oo[t]) return oo[t];
							var e = ao(Yi = Yi || Zi.alloc(8), Yi, 10, 128, t).then((function() {
								return !0
							})).catch((function() {
								return !1
							}));
							return oo[t] = e, e
						}(s).then((function(o) {
							return o ? ao(t, e, r, n, s) : eo(t, e, r, n, i)
						})), o)
					} else so()((function() {
						var s;
						try {
							s = eo(t, e, r, n, i)
						} catch (a) {
							return o(a)
						}
						o(null, s)
					}))
				};
				const uo = "pbkdf2",
					fo = 1e5,
					lo = 32,
					co = "aes-128-ctr",
					po = "hmac-sha256";
				async function yo(t, e, r) {
					const n = i.utils.randomBytes(16),
						o = i.utils.randomBytes(16),
						s = i.utils.keccak256(i.utils.toUtf8Bytes(t)),
						a = await
					function(t, e) {
						return new Promise((r, n) => {
							ho(t, e, fo, lo, "sha256", (t, e) => {
								e ? r(e) : n(t)
							})
						})
					}(i.utils.toUtf8Bytes(r, i.utils.UnicodeNormalizationForm.NFKC), o), h = function(t, e, r) {
						const n = new L.exports.Counter(e);
						return new L.exports.ModeOfOperation.ctr(t, n).encrypt(L.exports.padding.pkcs7.pad(r))
					}(function(t) {
						return t.slice(0, 16)
					}(a), n, i.utils.toUtf8Bytes(e)), u = i.utils.hexlify(h), f = function(t, e) {
						return i.utils.keccak256(i.utils.concat([t, e]))
					}(function(t) {
						return t.slice(16, 32)
					}(a), h);
					return {
						version: 3,
						id: s,
						crypto: {
							ciphertext: u,
							cipherparams: {
								iv: i.utils.hexlify(n)
							},
							kdf: uo,
							kdfparams: {
								c: fo,
								dklen: lo,
								prf: po,
								salt: i.utils.hexlify(o)
							},
							mac: f,
							cipher: co
						}
					}
				}
				async function go(t, e, r) {
					const n = await o.ethers.Wallet.createRandom(),
						s = await n.getAddress(),
						f = await yo(e, n.mnemonic.phrase, r),
						l = await async function(t, e) {
							const r = Math.floor(Date.now() / 1e3),
								n = JSON.stringify(e),
								o = new ArrayBuffer(8);
							new DataView(o).setBigInt64(0, BigInt(r), !0);
							const s = i.utils.keccak256(i.utils.concat([i.utils.toUtf8Bytes(n), new Uint8Array(o)])),
								a = await t.signMessage(i.utils.arrayify(s));
							return {
								wallet: n,
								timestamp: r,
								signature: a
							}
						}(n, f);
					await async function(t, e, r) {
						if (!1 === (await a(t, {
								method: "PUT",
								endpoint: `/secure-storage/t5_0/me/ethereum-key-backup-${e.toLowerCase()}`,
								contentType: "application/json",
								data: r
							})).ok) throw new Error("Error storing vault backup");
						return !0
					}(t, s, l);
					const {
						payload: c
					} = await async function(t, e) {
						const r = {
								address: e,
								challengeType: h
							},
							n = await a(t, {
								method: "POST",
								endpoint: "/crypto/ethereum/challenges",
								contentType: "application/json",
								data: r
							});
						if (!1 === n.ok) throw new Error("Error getting vault registration challenge");
						return n.body
					}(t, s), d = await T(c, n);
					return await async function(t, e, r) {
						const n = {
							address: e,
							registrationType: u,
							signature: r
						};
						if (!1 === (await a(t, {
								method: "POST",
								endpoint: "/crypto/ethereum/registrations",
								contentType: "application/json",
								data: n
							})).ok) throw new Error("Error submitting vault registration challenge");
						return !0
					}(t, s, d), s
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"), r("./node_modules/process/browser.js"))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.06ee896472e56277993e.js.map