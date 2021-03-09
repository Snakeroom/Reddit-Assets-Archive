// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.5978d7a4f18f0db1b6c2.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-SubscriptionModal"], {
		"./node_modules/ethers/_version.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = "4.0.48"
		},
		"./node_modules/ethers/errors.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/_version.js");
			t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.MISSING_NEW = "MISSING_NEW", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION";
			var o = !1,
				s = !1;

			function a(e, r, o) {
				if (s) throw new Error("unknown error");
				r || (r = t.UNKNOWN_ERROR), o || (o = {});
				var a = [];
				Object.keys(o).forEach((function(e) {
					try {
						a.push(e + "=" + JSON.stringify(o[e]))
					} catch (c) {
						a.push(e + "=" + JSON.stringify(o[e].toString()))
					}
				})), a.push("version=" + n.version);
				var i = e;
				a.length && (e += " (" + a.join(", ") + ")");
				var c = new Error(e);
				throw c.reason = i, c.code = r, Object.keys(o).forEach((function(e) {
					c[e] = o[e]
				})), c
			}
			t.throwError = a, t.checkNew = function(e, r) {
				e instanceof r || a("missing new", t.MISSING_NEW, {
					name: r.name
				})
			}, t.checkArgumentCount = function(e, r, n) {
				n || (n = ""), e < r && a("missing argument" + n, t.MISSING_ARGUMENT, {
					count: e,
					expectedCount: r
				}), e > r && a("too many arguments" + n, t.UNEXPECTED_ARGUMENT, {
					count: e,
					expectedCount: r
				})
			}, t.setCensorship = function(e, r) {
				o && a("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), s = !!e, o = !!r
			}, t.checkNormalize = function() {
				try {
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach((function(e) {
							try {
								"test".normalize(e)
							} catch (t) {
								throw new Error("missing " + e)
							}
						})), String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					a("platform missing String.prototype.normalize", t.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: e.message
					})
				}
			};
			var i = {
					debug: 1,
					default: 2,
					info: 2,
					warn: 3,
					error: 4,
					off: 5
				},
				c = i.default;

			function u(e, t) {
				c > i[e] || console.log.apply(console, t)
			}

			function l() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				u("warn", e)
			}
			t.setLogLevel = function(e) {
				var t = i[e];
				null != t ? c = t : l("invliad log level - " + e)
			}, t.warn = l, t.info = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				u("info", e)
			}
		},
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, s = "0123456789abcdef".split(""), a = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], u = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, t, r) {
							return function(n) {
								return new _(e, t, e).update(n)[r]()
							}
						}, d = function(e, t, r) {
							return function(n, o) {
								return new _(e, t, o).update(n)[r]()
							}
						}, f = function(e, t) {
							var r = l(e, t, "hex");
							r.create = function() {
								return new _(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < u.length; ++n) {
								var o = u[n];
								r[o] = l(e, t, o)
							}
							return r
						}, h = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: c,
							createMethod: f
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: c,
							createMethod: f
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var r = d(e, t, "hex");
								r.create = function(r) {
									return new _(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < u.length; ++n) {
									var o = u[n];
									r[o] = d(e, t, o)
								}
								return r
							}
						}], m = {}, p = [], v = 0; v < h.length; ++v)
						for (var b = h[v], g = b.bits, E = 0; E < g.length; ++E) {
							var N = b.name + "_" + g[E];
							p.push(N), m[N] = b.createMethod(g[E], b.padding)
						}

					function _(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					_.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, o = e.length, s = this.blocks, i = this.byteCount, c = this.blockCount, u = 0, l = this.s; u < o;) {
							if (this.reset)
								for (this.reset = !1, s[0] = this.block, r = 1; r < c + 1; ++r) s[r] = 0;
							if (t)
								for (r = this.start; u < o && r < i; ++u) s[r >> 2] |= e[u] << a[3 & r++];
							else
								for (r = this.start; u < o && r < i; ++u)(n = e.charCodeAt(u)) < 128 ? s[r >> 2] |= n << a[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << a[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++u)), s[r >> 2] |= (240 | n >> 18) << a[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << a[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << a[3 & r++], s[r >> 2] |= (128 | 63 & n) << a[3 & r++]);
							if (this.lastByteIndex = r, r >= i) {
								for (this.start = r - i, this.block = s[c], r = 0; r < c; ++r) l[r] ^= s[r];
								y(l), this.reset = !0
							} else this.start = r
						}
						return this
					}, _.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
						for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
						y(n)
					}, _.prototype.toString = _.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, o = this.extraBytes, a = 0, i = 0, c = ""; i < n;) {
							for (a = 0; a < t && i < n; ++a, ++i) e = r[a], c += s[e >> 4 & 15] + s[15 & e] + s[e >> 12 & 15] + s[e >> 8 & 15] + s[e >> 20 & 15] + s[e >> 16 & 15] + s[e >> 28 & 15] + s[e >> 24 & 15];
							i % t == 0 && (y(r), a = 0)
						}
						return o && (e = r[a], o > 0 && (c += s[e >> 4 & 15] + s[15 & e]), o > 1 && (c += s[e >> 12 & 15] + s[e >> 8 & 15]), o > 2 && (c += s[e >> 20 & 15] + s[e >> 16 & 15])), c
					}, _.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							s = 0,
							a = 0,
							i = this.outputBits >> 3;
						e = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(i);
						for (var c = new Uint32Array(e); a < n;) {
							for (s = 0; s < t && a < n; ++s, ++a) c[a] = r[s];
							a % t == 0 && y(r)
						}
						return o && (c[s] = r[s], e = e.slice(0, i)), e
					}, _.prototype.buffer = _.prototype.arrayBuffer, _.prototype.digest = _.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, o = this.outputBlocks, s = this.extraBytes, a = 0, i = 0, c = []; i < o;) {
							for (a = 0; a < r && i < o; ++a, ++i) e = i << 2, t = n[a], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % r == 0 && y(n)
						}
						return s && (e = i << 2, t = n[a], s > 0 && (c[e] = 255 & t), s > 1 && (c[e + 1] = t >> 8 & 255), s > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var y = function(e) {
						var t, r, n, o, s, a, c, u, l, d, f, h, m, p, v, b, g, E, N, _, y, x, A, I, w, O, T, M, j, S, C, U, k, R, P, D, G, L, B, F, V, H, X, z, K, W, J, Y, Z, Q, q, $, ee, te, re, ne, oe, se, ae, ie, ce, ue, le;
						for (n = 0; n < 48; n += 2) o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], s = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], d = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | c >>> 31), r = (m = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = o ^ (u << 1 | l >>> 31), r = s ^ (l << 1 | u >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (d << 1 | f >>> 31), r = c ^ (f << 1 | d >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = u ^ (h << 1 | m >>> 31), r = l ^ (m << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = d ^ (o << 1 | s >>> 31), r = f ^ (s << 1 | o >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], v = e[1], W = e[11] << 4 | e[10] >>> 28, J = e[10] << 4 | e[11] >>> 28, M = e[20] << 3 | e[21] >>> 29, j = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, H = e[40] << 18 | e[41] >>> 14, X = e[41] << 18 | e[40] >>> 14, R = e[2] << 1 | e[3] >>> 31, P = e[3] << 1 | e[2] >>> 31, b = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, Y = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, S = e[33] << 13 | e[32] >>> 19, C = e[32] << 13 | e[33] >>> 19, ue = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, G = e[15] << 6 | e[14] >>> 26, E = e[25] << 11 | e[24] >>> 21, N = e[24] << 11 | e[25] >>> 21, Q = e[34] << 15 | e[35] >>> 17, q = e[35] << 15 | e[34] >>> 17, U = e[45] << 29 | e[44] >>> 3, k = e[44] << 29 | e[45] >>> 3, I = e[6] << 28 | e[7] >>> 4, w = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, oe = e[16] << 23 | e[17] >>> 9, L = e[26] << 25 | e[27] >>> 7, B = e[27] << 25 | e[26] >>> 7, _ = e[36] << 21 | e[37] >>> 11, y = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, K = e[9] << 27 | e[8] >>> 5, O = e[18] << 20 | e[19] >>> 12, T = e[19] << 20 | e[18] >>> 12, se = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, F = e[38] << 8 | e[39] >>> 24, V = e[39] << 8 | e[38] >>> 24, x = e[48] << 14 | e[49] >>> 18, A = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~b & E, e[1] = v ^ ~g & N, e[10] = I ^ ~O & M, e[11] = w ^ ~T & j, e[20] = R ^ ~D & L, e[21] = P ^ ~G & B, e[30] = z ^ ~W & Y, e[31] = K ^ ~J & Z, e[40] = te ^ ~ne & se, e[41] = re ^ ~oe & ae, e[2] = b ^ ~E & _, e[3] = g ^ ~N & y, e[12] = O ^ ~M & S, e[13] = T ^ ~j & C, e[22] = D ^ ~L & F, e[23] = G ^ ~B & V, e[32] = W ^ ~Y & Q, e[33] = J ^ ~Z & q, e[42] = ne ^ ~se & ie, e[43] = oe ^ ~ae & ce, e[4] = E ^ ~_ & x, e[5] = N ^ ~y & A, e[14] = M ^ ~S & U, e[15] = j ^ ~C & k, e[24] = L ^ ~F & H, e[25] = B ^ ~V & X, e[34] = Y ^ ~Q & $, e[35] = Z ^ ~q & ee, e[44] = se ^ ~ie & ue, e[45] = ae ^ ~ce & le, e[6] = _ ^ ~x & p, e[7] = y ^ ~A & v, e[16] = S ^ ~U & I, e[17] = C ^ ~k & w, e[26] = F ^ ~H & R, e[27] = V ^ ~X & P, e[36] = Q ^ ~$ & z, e[37] = q ^ ~ee & K, e[46] = ie ^ ~ue & te, e[47] = ce ^ ~le & re, e[8] = x ^ ~p & b, e[9] = A ^ ~v & g, e[18] = U ^ ~I & O, e[19] = k ^ ~w & T, e[28] = H ^ ~R & D, e[29] = X ^ ~P & G, e[38] = $ ^ ~z & W, e[39] = ee ^ ~K & J, e[48] = ue ^ ~te & ne, e[49] = le ^ ~re & oe, e[0] ^= i[n], e[1] ^= i[n + 1]
					};
					if (o) e.exports = m;
					else
						for (v = 0; v < p.length; ++v) n[p[v]] = m[p[v]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/ethers/utils/bytes.js": function(e, t, r) {
			"use strict";
			var n = this && this.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
				return t.default = e, t
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = n(r("./node_modules/ethers/errors.js"));

			function s(e) {
				return !!e.toHexString
			}

			function a(e) {
				return e.slice ? e : (e.slice = function() {
					var t = Array.prototype.slice.call(arguments);
					return a(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function i(e) {
				if (!e || parseInt(String(e.length)) != e.length || "string" == typeof e) return !1;
				for (var t = 0; t < e.length; t++) {
					var r = e[t];
					if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1
				}
				return !0
			}

			function c(e) {
				if (null == e && o.throwError("cannot convert null value to array", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), s(e) && (e = e.toHexString()), "string" == typeof e) {
					var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
					t || o.throwError("invalid hexidecimal string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== t[1] && o.throwError("hex string must have 0x prefix", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), (e = e.substring(2)).length % 2 && (e = "0" + e);
					for (var r = [], n = 0; n < e.length; n += 2) r.push(parseInt(e.substr(n, 2), 16));
					return a(new Uint8Array(r))
				}
				return i(e) ? a(new Uint8Array(e)) : (o.throwError("invalid arrayify value", null, {
					arg: "value",
					value: e,
					type: typeof e
				}), null)
			}

			function u(e) {
				for (var t = [], r = 0, n = 0; n < e.length; n++) {
					var o = c(e[n]);
					t.push(o), r += o.length
				}
				var s = new Uint8Array(r),
					i = 0;
				for (n = 0; n < t.length; n++) s.set(t[n], i), i += t[n].length;
				return a(s)
			}

			function l(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			t.isHexable = s, t.isArrayish = i, t.arrayify = c, t.concat = u, t.stripZeros = function(e) {
				var t = c(e);
				if (0 === t.length) return t;
				for (var r = 0; 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}, t.padZeros = function(e, t) {
				if (t < (e = c(e)).length) throw new Error("cannot pad");
				var r = new Uint8Array(t);
				return r.set(e, t - e.length), a(r)
			}, t.isHexString = l;
			var d = "0123456789abcdef";

			function f(e) {
				if (s(e)) return e.toHexString();
				if ("number" == typeof e) {
					e < 0 && o.throwError("cannot hexlify negative value", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e >= 9007199254740991 && o.throwError("out-of-range", o.NUMERIC_FAULT, {
						operartion: "hexlify",
						fault: "out-of-safe-range"
					});
					for (var t = ""; e;) t = d[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("string" == typeof e) {
					var r = e.match(/^(0x)?[0-9a-fA-F]*$/);
					return r || o.throwError("invalid hexidecimal string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== r[1] && o.throwError("hex string must have 0x prefix", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e.length % 2 && (e = "0x0" + e.substring(2)), e
				}
				if (i(e)) {
					for (var n = [], a = 0; a < e.length; a++) {
						var c = e[a];
						n.push(d[(240 & c) >> 4] + d[15 & c])
					}
					return "0x" + n.join("")
				}
				return o.throwError("invalid hexlify value", null, {
					arg: "value",
					value: e
				}), "never"
			}

			function h(e, t) {
				for (l(e) || o.throwError("invalid hex string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function m(e) {
				var t, r = 0,
					n = "0x",
					s = "0x";
				if ((t = e) && null != t.r && null != t.s) {
					null == e.v && null == e.recoveryParam && o.throwError("at least on of recoveryParam or v must be specified", o.INVALID_ARGUMENT, {
						argument: "signature",
						value: e
					}), n = h(e.r, 32), s = h(e.s, 32), "string" == typeof(r = e.v) && (r = parseInt(r, 16));
					var a = e.recoveryParam;
					null == a && null != e.v && (a = 1 - r % 2), r = 27 + a
				} else {
					var i = c(e);
					if (65 !== i.length) throw new Error("invalid signature");
					n = f(i.slice(0, 32)), s = f(i.slice(32, 64)), 27 !== (r = i[64]) && 28 !== r && (r = 27 + r % 2)
				}
				return {
					r: n,
					s,
					recoveryParam: r - 27,
					v: r
				}
			}
			t.hexlify = f, t.hexDataLength = function(e) {
				return l(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
			}, t.hexDataSlice = function(e, t, r) {
				return l(e) || o.throwError("invalid hex data", o.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), e.length % 2 != 0 && o.throwError("hex data length must be even", o.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}, t.hexStripZeros = function(e) {
				for (l(e) || o.throwError("invalid hex string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length > 3 && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
				return e
			}, t.hexZeroPad = h, t.splitSignature = m, t.joinSignature = function(e) {
				return f(u([(e = m(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				o = r("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(e) {
				return "0x" + n.keccak_256(o.arrayify(e))
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				u = r("./src/reddit/components/Governance/Token/index.tsx"),
				l = r("./src/reddit/helpers/governance/tokens.ts"),
				d = r("./src/reddit/selectors/gov.ts"),
				f = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				h = r.n(f);
			const m = Object(a.c)({
				tokenDisplayConversion: d.m
			});
			t.a = Object(s.b)(m)((function(e) {
				return o.a.createElement("div", {
					className: Object(i.a)(h.a.container, e.className, {
						[h.a.small]: e.small
					})
				}, o.a.createElement(u.a, {
					className: Object(i.a)(h.a.token, {
						[h.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, r) {
			e.exports = {
				overview: "_3vbYFraj9qRr9wXp4mcPUn",
				description: "_1SZ6yxzmSfQKpV9QOquYaR",
				grid: "jh8B-AY4740kpxlHw2YDW",
				descriptionTitle: "iGBU2u1c8RwaU1r6hphWt",
				amountSubtext: "_28HHYVa7-RIY6X_ZjCpCAb",
				descriptionSubtitle: "_3nbUm4QjlldCfIOsi_zYWh",
				amountCell: "ftLHNRLY2TdwcJtKSvldG",
				amount: "_3sfSvH2g-yH3GQObK-yNFD"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				a = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				i = r.n(a);

			function c(e) {
				return o.a.createElement("div", {
					className: i.a.overview
				}, e.image, o.a.createElement("div", {
					className: i.a.description
				}, o.a.createElement("div", {
					className: i.a.grid
				}, o.a.createElement("div", {
					className: i.a.descriptionTitle,
					title: e.title
				}, e.title), o.a.createElement("div", {
					className: i.a.amountCell
				}, o.a.createElement(s.a, {
					amount: e.pointsAmount,
					className: i.a.amount,
					subredditId: e.subredditId
				})), o.a.createElement("div", {
					className: i.a.descriptionSubtitle
				}, e.subtitle), o.a.createElement("div", {
					className: i.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				membershipFrame: "_3d6f8dK5CmhujRBpVMFiAh",
				userIcon: "_3sGBEdz4F36DIwM99juN0m",
				frameImage: "_3QaiTrH550H-uSnZCB08V6",
				subredditIcon: "_3OskWJgwwVLSpS6iPc27P8"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "default", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/endpoints/governance/crypto.ts"),
				f = r("./src/reddit/helpers/crypto/transactions.ts"),
				h = r("./src/reddit/helpers/governance/tokens.ts"),
				m = r("./src/reddit/helpers/trackers/crypto.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				v = r("./src/reddit/models/Badge/managementPage.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/gov.ts"),
				E = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				N = r("./src/config.ts"),
				_ = r("./src/reddit/components/SubredditIcon/index.tsx"),
				y = r("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				x = r("./src/reddit/selectors/economics.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				w = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				O = r("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				T = r.n(O);

			function M(e) {
				const t = Object(a.e)(t => Object(A.T)(t, e)),
					r = Object(a.e)(t => Object(x.q)(t, e.subredditId)),
					o = r.membershipAlt,
					i = r.prices.points,
					c = `${N.a.assetPath}/img/memberships/paywall/${t.name.toLowerCase()}/membership_frame.svg`;
				return s.a.createElement(w.a, {
					subredditId: e.subredditId,
					image: s.a.createElement("div", {
						className: T.a.membershipFrame
					}, s.a.createElement(y.a, {
						className: T.a.userIcon
					}), s.a.createElement("img", {
						className: T.a.frameImage,
						src: c
					}), s.a.createElement(_.b, {
						className: T.a.subredditIcon,
						subredditOrProfile: t
					})),
					title: o,
					subtitle: t.displayText,
					pointsAmount: i,
					pointsAmountSubtext: n.fbt._("Paid monthly, cancel anytime", null, {
						hk: "3vvJQd"
					})
				})
			}
			const j = e => s.a.createElement(I.b, {
				values: [
					[Object(I.c)(), e.transaction.arguments[0]],
					[Object(I.a)(), e.transaction.contractAddress]
				]
			});

			function S(e) {
				const {
					price: t,
					subredditId: r
				} = e, o = Object(a.d)(), N = Object(p.a)(), {
					tokenConversion: _,
					walletProvider: y,
					walletAddress: x
				} = Object(a.e)(Object(i.c)({
					tokenConversion: t => Object(g.m)(t, e),
					walletProvider: t => Object(g.r)(t, e),
					walletAddress: t => Object(g.q)(t, e)
				})), A = Object(f.d)(y.extra.contracts.subscriptions.address, x, !0), I = Object(h.b)(t, _);
				return s.a.createElement(E.a, {
					approvalOverview: s.a.createElement(M, {
						subredditId: r
					}),
					approvalDetails: s.a.createElement(j, {
						transaction: A
					}),
					onClose: e.onClose,
					onTransactionSuccess: async s => {
						await o(Object(u.f)({
							subredditId: r,
							price: t,
							providerArgs: s
						})), N(Object(m.b)("subscribe", r, I)), o(Object(l.e)({
							duration: 1e4,
							kind: b.b.SuccessCommunityGreen,
							text: n.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), o(Object(c.c)({
							subredditId: r,
							initialView: v.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						N(Object(m.a)("subscribe", r, I, e))
					},
					subredditId: r,
					transaction: A,
					transactionIntent: Object(d.e)(r),
					transactionIsBlockedOnIOS: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.5978d7a4f18f0db1b6c2.js.map