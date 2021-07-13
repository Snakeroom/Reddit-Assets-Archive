// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.00ae0a381186eb140a98.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-BurnPointsModal"], {
		"./node_modules/ethers/_version.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = "4.0.48"
		},
		"./node_modules/ethers/errors.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/ethers/_version.js");
			t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.MISSING_NEW = "MISSING_NEW", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION";
			var a = !1,
				l = !1;

			function s(e, n, a) {
				if (l) throw new Error("unknown error");
				n || (n = t.UNKNOWN_ERROR), a || (a = {});
				var s = [];
				Object.keys(a).forEach((function(e) {
					try {
						s.push(e + "=" + JSON.stringify(a[e]))
					} catch (o) {
						s.push(e + "=" + JSON.stringify(a[e].toString()))
					}
				})), s.push("version=" + r.version);
				var c = e;
				s.length && (e += " (" + s.join(", ") + ")");
				var o = new Error(e);
				throw o.reason = c, o.code = n, Object.keys(a).forEach((function(e) {
					o[e] = a[e]
				})), o
			}
			t.throwError = s, t.checkNew = function(e, n) {
				e instanceof n || s("missing new", t.MISSING_NEW, {
					name: n.name
				})
			}, t.checkArgumentCount = function(e, n, r) {
				r || (r = ""), e < n && s("missing argument" + r, t.MISSING_ARGUMENT, {
					count: e,
					expectedCount: n
				}), e > n && s("too many arguments" + r, t.UNEXPECTED_ARGUMENT, {
					count: e,
					expectedCount: n
				})
			}, t.setCensorship = function(e, n) {
				a && s("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), l = !!e, a = !!n
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
					s("platform missing String.prototype.normalize", t.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: e.message
					})
				}
			};
			var c = {
					debug: 1,
					default: 2,
					info: 2,
					warn: 3,
					error: 4,
					off: 5
				},
				o = c.default;

			function i(e, t) {
				o > c[e] || console.log.apply(console, t)
			}

			function d() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i("warn", e)
			}
			t.setLogLevel = function(e) {
				var t = c[e];
				null != t ? o = t : d("invliad log level - " + e)
			}, t.warn = d, t.info = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i("info", e)
			}
		},
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(e, t, n) {
			(function(t, n) {
				! function() {
					"use strict";
					var r = "object" == typeof window ? window : {};
					!r.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (r = n);
					for (var a = !r.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, l = "0123456789abcdef".split(""), s = [0, 8, 16, 24], c = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], o = [224, 256, 384, 512], i = ["hex", "buffer", "arrayBuffer", "array"], d = function(e, t, n) {
							return function(r) {
								return new N(e, t, e).update(r)[n]()
							}
						}, u = function(e, t, n) {
							return function(r, a) {
								return new N(e, t, a).update(r)[n]()
							}
						}, m = function(e, t) {
							var n = d(e, t, "hex");
							n.create = function() {
								return new N(e, t, e)
							}, n.update = function(e) {
								return n.create().update(e)
							};
							for (var r = 0; r < i.length; ++r) {
								var a = i[r];
								n[a] = d(e, t, a)
							}
							return n
						}, h = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: o,
							createMethod: m
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: o,
							createMethod: m
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var n = u(e, t, "hex");
								n.create = function(n) {
									return new N(e, t, n)
								}, n.update = function(e, t) {
									return n.create(t).update(e)
								};
								for (var r = 0; r < i.length; ++r) {
									var a = i[r];
									n[a] = u(e, t, a)
								}
								return n
							}
						}], p = {}, f = [], v = 0; v < h.length; ++v)
						for (var b = h[v], E = b.bits, g = 0; g < E.length; ++g) {
							var x = b.name + "_" + E[g];
							f.push(x), p[x] = b.createMethod(E[g], b.padding)
						}

					function N(e, t, n) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
						for (var r = 0; r < 50; ++r) this.s[r] = 0
					}
					N.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var n, r, a = e.length, l = this.blocks, c = this.byteCount, o = this.blockCount, i = 0, d = this.s; i < a;) {
							if (this.reset)
								for (this.reset = !1, l[0] = this.block, n = 1; n < o + 1; ++n) l[n] = 0;
							if (t)
								for (n = this.start; i < a && n < c; ++i) l[n >> 2] |= e[i] << s[3 & n++];
							else
								for (n = this.start; i < a && n < c; ++i)(r = e.charCodeAt(i)) < 128 ? l[n >> 2] |= r << s[3 & n++] : r < 2048 ? (l[n >> 2] |= (192 | r >> 6) << s[3 & n++], l[n >> 2] |= (128 | 63 & r) << s[3 & n++]) : r < 55296 || r >= 57344 ? (l[n >> 2] |= (224 | r >> 12) << s[3 & n++], l[n >> 2] |= (128 | r >> 6 & 63) << s[3 & n++], l[n >> 2] |= (128 | 63 & r) << s[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++i)), l[n >> 2] |= (240 | r >> 18) << s[3 & n++], l[n >> 2] |= (128 | r >> 12 & 63) << s[3 & n++], l[n >> 2] |= (128 | r >> 6 & 63) << s[3 & n++], l[n >> 2] |= (128 | 63 & r) << s[3 & n++]);
							if (this.lastByteIndex = n, n >= c) {
								for (this.start = n - c, this.block = l[o], n = 0; n < o; ++n) d[n] ^= l[n];
								y(d), this.reset = !0
							} else this.start = n
						}
						return this
					}, N.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							n = this.blockCount,
							r = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;
						for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];
						y(r)
					}, N.prototype.toString = N.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, a = this.extraBytes, s = 0, c = 0, o = ""; c < r;) {
							for (s = 0; s < t && c < r; ++s, ++c) e = n[s], o += l[e >> 4 & 15] + l[15 & e] + l[e >> 12 & 15] + l[e >> 8 & 15] + l[e >> 20 & 15] + l[e >> 16 & 15] + l[e >> 28 & 15] + l[e >> 24 & 15];
							c % t == 0 && (y(n), s = 0)
						}
						return a && (e = n[s], a > 0 && (o += l[e >> 4 & 15] + l[15 & e]), a > 1 && (o += l[e >> 12 & 15] + l[e >> 8 & 15]), a > 2 && (o += l[e >> 20 & 15] + l[e >> 16 & 15])), o
					}, N.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							n = this.s,
							r = this.outputBlocks,
							a = this.extraBytes,
							l = 0,
							s = 0,
							c = this.outputBits >> 3;
						e = a ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(c);
						for (var o = new Uint32Array(e); s < r;) {
							for (l = 0; l < t && s < r; ++l, ++s) o[s] = n[l];
							s % t == 0 && y(n)
						}
						return a && (o[l] = n[l], e = e.slice(0, c)), e
					}, N.prototype.buffer = N.prototype.arrayBuffer, N.prototype.digest = N.prototype.array = function() {
						this.finalize();
						for (var e, t, n = this.blockCount, r = this.s, a = this.outputBlocks, l = this.extraBytes, s = 0, c = 0, o = []; c < a;) {
							for (s = 0; s < n && c < a; ++s, ++c) e = c << 2, t = r[s], o[e] = 255 & t, o[e + 1] = t >> 8 & 255, o[e + 2] = t >> 16 & 255, o[e + 3] = t >> 24 & 255;
							c % n == 0 && y(r)
						}
						return l && (e = c << 2, t = r[s], l > 0 && (o[e] = 255 & t), l > 1 && (o[e + 1] = t >> 8 & 255), l > 2 && (o[e + 2] = t >> 16 & 255)), o
					};
					var y = function(e) {
						var t, n, r, a, l, s, o, i, d, u, m, h, p, f, v, b, E, g, x, N, y, _, M, C, w, j, O, I, k, A, T, L, F, z, D, P, R, S, B, U, G, V, H, W, X, q, Y, $, J, K, Z, Q, ee, te, ne, re, ae, le, se, ce, oe, ie, de;
						for (r = 0; r < 48; r += 2) a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], l = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], o = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], i = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], d = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (s << 1 | o >>> 31), n = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (o << 1 | s >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = a ^ (i << 1 | d >>> 31), n = l ^ (d << 1 | i >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = s ^ (u << 1 | m >>> 31), n = o ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = i ^ (h << 1 | p >>> 31), n = d ^ (p << 1 | h >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = u ^ (a << 1 | l >>> 31), n = m ^ (l << 1 | a >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, f = e[0], v = e[1], q = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, I = e[20] << 3 | e[21] >>> 29, k = e[21] << 3 | e[20] >>> 29, ce = e[31] << 9 | e[30] >>> 23, oe = e[30] << 9 | e[31] >>> 23, V = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, z = e[2] << 1 | e[3] >>> 31, D = e[3] << 1 | e[2] >>> 31, b = e[13] << 12 | e[12] >>> 20, E = e[12] << 12 | e[13] >>> 20, $ = e[22] << 10 | e[23] >>> 22, J = e[23] << 10 | e[22] >>> 22, A = e[33] << 13 | e[32] >>> 19, T = e[32] << 13 | e[33] >>> 19, ie = e[42] << 2 | e[43] >>> 30, de = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, P = e[14] << 6 | e[15] >>> 26, R = e[15] << 6 | e[14] >>> 26, g = e[25] << 11 | e[24] >>> 21, x = e[24] << 11 | e[25] >>> 21, K = e[34] << 15 | e[35] >>> 17, Z = e[35] << 15 | e[34] >>> 17, L = e[45] << 29 | e[44] >>> 3, F = e[44] << 29 | e[45] >>> 3, C = e[6] << 28 | e[7] >>> 4, w = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, ae = e[16] << 23 | e[17] >>> 9, S = e[26] << 25 | e[27] >>> 7, B = e[27] << 25 | e[26] >>> 7, N = e[36] << 21 | e[37] >>> 11, y = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, W = e[8] << 27 | e[9] >>> 5, X = e[9] << 27 | e[8] >>> 5, j = e[18] << 20 | e[19] >>> 12, O = e[19] << 20 | e[18] >>> 12, le = e[29] << 7 | e[28] >>> 25, se = e[28] << 7 | e[29] >>> 25, U = e[38] << 8 | e[39] >>> 24, G = e[39] << 8 | e[38] >>> 24, _ = e[48] << 14 | e[49] >>> 18, M = e[49] << 14 | e[48] >>> 18, e[0] = f ^ ~b & g, e[1] = v ^ ~E & x, e[10] = C ^ ~j & I, e[11] = w ^ ~O & k, e[20] = z ^ ~P & S, e[21] = D ^ ~R & B, e[30] = W ^ ~q & $, e[31] = X ^ ~Y & J, e[40] = te ^ ~re & le, e[41] = ne ^ ~ae & se, e[2] = b ^ ~g & N, e[3] = E ^ ~x & y, e[12] = j ^ ~I & A, e[13] = O ^ ~k & T, e[22] = P ^ ~S & U, e[23] = R ^ ~B & G, e[32] = q ^ ~$ & K, e[33] = Y ^ ~J & Z, e[42] = re ^ ~le & ce, e[43] = ae ^ ~se & oe, e[4] = g ^ ~N & _, e[5] = x ^ ~y & M, e[14] = I ^ ~A & L, e[15] = k ^ ~T & F, e[24] = S ^ ~U & V, e[25] = B ^ ~G & H, e[34] = $ ^ ~K & Q, e[35] = J ^ ~Z & ee, e[44] = le ^ ~ce & ie, e[45] = se ^ ~oe & de, e[6] = N ^ ~_ & f, e[7] = y ^ ~M & v, e[16] = A ^ ~L & C, e[17] = T ^ ~F & w, e[26] = U ^ ~V & z, e[27] = G ^ ~H & D, e[36] = K ^ ~Q & W, e[37] = Z ^ ~ee & X, e[46] = ce ^ ~ie & te, e[47] = oe ^ ~de & ne, e[8] = _ ^ ~f & b, e[9] = M ^ ~v & E, e[18] = L ^ ~C & j, e[19] = F ^ ~w & O, e[28] = V ^ ~z & P, e[29] = H ^ ~D & R, e[38] = Q ^ ~W & q, e[39] = ee ^ ~X & Y, e[48] = ie ^ ~te & re, e[49] = de ^ ~ne & ae, e[0] ^= c[r], e[1] ^= c[r + 1]
					};
					if (a) e.exports = p;
					else
						for (v = 0; v < f.length; ++v) r[f[v]] = p[f[v]]
				}()
			}).call(this, n("./node_modules/process/browser.js"), n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/ethers/utils/bytes.js": function(e, t, n) {
			"use strict";
			var r = this && this.__importStar || function(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var a = r(n("./node_modules/ethers/errors.js"));

			function l(e) {
				return !!e.toHexString
			}

			function s(e) {
				return e.slice ? e : (e.slice = function() {
					var t = Array.prototype.slice.call(arguments);
					return s(new Uint8Array(Array.prototype.slice.apply(e, t)))
				}, e)
			}

			function c(e) {
				if (!e || parseInt(String(e.length)) != e.length || "string" == typeof e) return !1;
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					if (n < 0 || n >= 256 || parseInt(String(n)) != n) return !1
				}
				return !0
			}

			function o(e) {
				if (null == e && a.throwError("cannot convert null value to array", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), l(e) && (e = e.toHexString()), "string" == typeof e) {
					var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
					t || a.throwError("invalid hexidecimal string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== t[1] && a.throwError("hex string must have 0x prefix", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), (e = e.substring(2)).length % 2 && (e = "0" + e);
					for (var n = [], r = 0; r < e.length; r += 2) n.push(parseInt(e.substr(r, 2), 16));
					return s(new Uint8Array(n))
				}
				return c(e) ? s(new Uint8Array(e)) : (a.throwError("invalid arrayify value", null, {
					arg: "value",
					value: e,
					type: typeof e
				}), null)
			}

			function i(e) {
				for (var t = [], n = 0, r = 0; r < e.length; r++) {
					var a = o(e[r]);
					t.push(a), n += a.length
				}
				var l = new Uint8Array(n),
					c = 0;
				for (r = 0; r < t.length; r++) l.set(t[r], c), c += t[r].length;
				return s(l)
			}

			function d(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			t.isHexable = l, t.isArrayish = c, t.arrayify = o, t.concat = i, t.stripZeros = function(e) {
				var t = o(e);
				if (0 === t.length) return t;
				for (var n = 0; 0 === t[n];) n++;
				return n && (t = t.slice(n)), t
			}, t.padZeros = function(e, t) {
				if (t < (e = o(e)).length) throw new Error("cannot pad");
				var n = new Uint8Array(t);
				return n.set(e, t - e.length), s(n)
			}, t.isHexString = d;
			var u = "0123456789abcdef";

			function m(e) {
				if (l(e)) return e.toHexString();
				if ("number" == typeof e) {
					e < 0 && a.throwError("cannot hexlify negative value", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e >= 9007199254740991 && a.throwError("out-of-range", a.NUMERIC_FAULT, {
						operartion: "hexlify",
						fault: "out-of-safe-range"
					});
					for (var t = ""; e;) t = u[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("string" == typeof e) {
					var n = e.match(/^(0x)?[0-9a-fA-F]*$/);
					return n || a.throwError("invalid hexidecimal string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== n[1] && a.throwError("hex string must have 0x prefix", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e.length % 2 && (e = "0x0" + e.substring(2)), e
				}
				if (c(e)) {
					for (var r = [], s = 0; s < e.length; s++) {
						var o = e[s];
						r.push(u[(240 & o) >> 4] + u[15 & o])
					}
					return "0x" + r.join("")
				}
				return a.throwError("invalid hexlify value", null, {
					arg: "value",
					value: e
				}), "never"
			}

			function h(e, t) {
				for (d(e) || a.throwError("invalid hex string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function p(e) {
				var t, n = 0,
					r = "0x",
					l = "0x";
				if ((t = e) && null != t.r && null != t.s) {
					null == e.v && null == e.recoveryParam && a.throwError("at least on of recoveryParam or v must be specified", a.INVALID_ARGUMENT, {
						argument: "signature",
						value: e
					}), r = h(e.r, 32), l = h(e.s, 32), "string" == typeof(n = e.v) && (n = parseInt(n, 16));
					var s = e.recoveryParam;
					null == s && null != e.v && (s = 1 - n % 2), n = 27 + s
				} else {
					var c = o(e);
					if (65 !== c.length) throw new Error("invalid signature");
					r = m(c.slice(0, 32)), l = m(c.slice(32, 64)), 27 !== (n = c[64]) && 28 !== n && (n = 27 + n % 2)
				}
				return {
					r,
					s: l,
					recoveryParam: n - 27,
					v: n
				}
			}
			t.hexlify = m, t.hexDataLength = function(e) {
				return d(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
			}, t.hexDataSlice = function(e, t, n) {
				return d(e) || a.throwError("invalid hex data", a.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), e.length % 2 != 0 && a.throwError("hex data length must be even", a.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), t = 2 + 2 * t, null != n ? "0x" + e.substring(t, 2 + 2 * n) : "0x" + e.substring(t)
			}, t.hexStripZeros = function(e) {
				for (d(e) || a.throwError("invalid hex string", a.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length > 3 && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
				return e
			}, t.hexZeroPad = h, t.splitSignature = p, t.joinSignature = function(e) {
				return m(i([(e = p(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				a = n("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(e) {
				return "0x" + r.keccak_256(a.arrayify(e))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return r(e) + t
			}
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function a(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t),
					l = new r.BigNumber(n.dividedBy(a)),
					s = new r.BigNumber("100").multipliedBy(l);
				return new r.BigNumber(s).toNumber()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return P
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/config.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				h = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/selectors/crypto/points.ts"),
				E = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(a.a)(E.b),
				N = Object(a.a)(E.c),
				y = Object(a.a)(E.e),
				_ = (Object(a.a)(E.f), Object(a.a)(E.g), Object(a.a)(E.h)),
				M = Object(a.a)(E.i),
				C = Object(a.a)(E.j),
				w = Object(a.a)(E.k),
				j = Object(a.a)(E.q),
				O = Object(a.a)(E.r),
				I = Object(a.a)(E.s),
				k = Object(a.a)(E.t),
				A = Object(a.a)(E.u),
				T = Object(a.a)(E.v),
				L = Object(a.a)(E.w),
				F = Object(a.a)(E.x),
				z = (e, t) => async (n, r, {
					apiContext: a,
					gqlContext: l
				}) => {
					let s, o = r().polls.models[e];
					if (n(C({
							pollId: e
						})), (s = o.type === u.a.GA ? await ((e, t, n) => Object(d.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(l(), e, t) : await
							function(e, t, n, r) {
								return Object(h.a)(e, {
									method: "put",
									endpoint: `${i.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(a(), o.subredditId, e, t)).ok) {
						if (o.type === u.a.GA) {
							const {
								options: e
							} = s.body.data.updatePostPollVoteState.poll;
							n(y({
								pollId: o.id,
								optionId: t,
								options: e
							}))
						} else n(w(s.body));
						const a = r();
						if ((o = a.polls.models[e]) && Object(u.d)(o)) {
							const {
								postId: e
							} = o, t = a.posts.models[e];
							t && t.voteState === v.a.notVoted && n(Object(c.fb)(e))
						}
					} else n(M({
						pollId: e,
						error: s.error || s.errors[0].message
					})), Object(g.a)(n, s.error || s.errors[0].messsage)
				}, D = (e, t) => async (n, a, {
					apiContext: c
				}) => {
					var d;
					n(I());
					const u = a().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(h.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${i.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(c(), {
						...e,
						contentId: u
					});
					m.ok ? (n(k({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(o.f)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(l.a)(e.amount)), r.fbt._param("tokenName", (null === (d = Object(b.b)(a(), e.subredditId)) || void 0 === d ? void 0 : d.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(s.f)())) : (n(j({
						error: m.error
					})), Object(g.a)(n, m.error))
				}, P = e => async (t, n, {
					apiContext: r
				}) => {
					t(T());
					const a = await Object(p.a)(r(), e);
					a.ok ? t(L(a.body)) : t(A({
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function r(e, t, n = 3e4, r = 3e5) {
				return async (a, l, s) => new Promise((c, o) => {
					const i = Date.now() + r,
						d = () => {
							o(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > i) return d();
							const r = Date.now();
							await e(a, l, s);
							const m = await t(l);
							if (m) c();
							else if (!1 === m) o();
							else {
								Date.now() + Math.max(n - (Date.now() - r), 0) < i ? setTimeout(u, n) : d()
							}
						};
					u()
				})
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(i);
			t.a = Object(l.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(c.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(o.a, {
					className: Object(s.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				o = n.n(c);

			function i(e) {
				return a.a.createElement("div", {
					className: Object(l.a)(o.a.container, e.className, {
						[o.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: o.a.title
				}, e.children), a.a.createElement(s.a, {
					className: o.a.closeIcon
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
				a = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(s.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(i.b)(e, t)
			});
			t.a = Object(l.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					l = `${c.a.assetPath}/${r}`;
				if (e.grey && l.endsWith(".svg")) {
					const t = `url(${l}) center/cover`;
					return a.a.createElement("div", {
						className: Object(o.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: l
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/Governance/Token/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				h = n.n(m);
			const p = Object(s.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(l.b)(p)((function(e) {
				var t;
				return a.a.createElement("div", {
					className: Object(c.a)(h.a.container, e.className, {
						[h.a.small]: e.small
					})
				}, a.a.createElement(i.a, {
					className: Object(c.a)(h.a.token, {
						[h.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(o.a)(Object(d.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less": function(e, t, n) {
			e.exports = {
				overview: "_2my8YJMn6fLwdXQPvFzOC_",
				amount: "_2uJHGxFIl306f82z4CUElv",
				memo: "QK8D8Vn2Zi45kckvHp1UF",
				error: "lHTeQCCGAXimtIjNkn3Kb"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2pjl09-gi2tNbckawdUdz",
				sectionsContainer: "_2kniUL-mLa5WNXZG0Mvwr0",
				section: "_3q3ET_tDRLknupxMrxqumk",
				sectionImage: "_3c8qkLyW7RBPLK_N2nxH3Q",
				sectionContent: "_1FH1B9Vjevh9JyXo0FtYQS",
				sectionHeader: "_2DQMGepFbIHT4d4KzISXeG",
				sectionDescription: "_1AdisjJ_TBmzcusoIGB7zd",
				footer: "_1h3NhYGCWtZTxg2bCNuuo_",
				footnote: "_1h0VFxo7szF2RtpMB6e4Rj"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/selectors/activeModal.ts"),
				o = n("./src/reddit/selectors/crypto/points.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx");
			const m = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M42.4 19.1H20.8v19.4h21.6V19.1z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M42.5 38.6l-.3-5.7A694 694 0 0142 19l.5.5-21.6.2.7-.7v19.4l-.7-.5c4.8 0 8.7.1 12.2.3l9.6.5c-6.6 0-14.2 0-21.8.2a.4.4 0 01-.4-.5l-.2-19.4a.6.6 0 01.6-.6h4a2236.4 2236.4 0 0118.1.1.7.7 0 01.2.5 463.6 463.6 0 01-.6 19.5z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M11.4 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M11.5 45a678.4 678.4 0 01-.6-19.6l.1-.2a1014.3 1014.3 0 0110-6.6.7.7 0 01.6.7v6.3l-.2 13.1a.5.5 0 01-.3.4 151 151 0 01-9.6 5.8l4.4-3.1 4.8-3.4-.2.3-.2-19.5 1 .6-2.6 1.7-7 4.8.4-.6a269.3 269.3 0 01-.6 19.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M32.8 25.7H11.3v19.4h21.5V25.8z",
					fill: "#14D8C3"
				}), a.a.createElement("path", {
					d: "M33 45.2c-.2 0-.2-2.2-.4-5.7l-.3-13.8.5.5-21.5.2.6-.7v19.4l-.6-.5a404.7 404.7 0 0121.8.8c-6.7 0-14.2 0-21.8.2a.4.4 0 01-.5-.4l-.2-19.5a.6.6 0 01.6-.6h4.1a2320.2 2320.2 0 0118 .1.7.7 0 01.2.5 463.3 463.3 0 01-.6 19.5z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M32.8 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M33 45c-.2.2-.2-1.9-.4-5.3l-.2-6.3a403.8 403.8 0 01-.1-8l.2-.2a1015.7 1015.7 0 019.8-6.6.7.7 0 01.7.6v6.4c0 5.4 0 9.6-.2 13.1a.5.5 0 01-.2.4 150.8 150.8 0 01-9.6 5.8l4.4-3.1 4.7-3.4-.1.3-.3-19.4 1 .5-2.5 1.7-7 4.8.3-.6a331.3 331.3 0 01-.2 13.7l-.4 5.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M23.4 44.8H20V26.6h3.4v18.2zM39.2 40.3l-2.5 1.6.1-18 2.6-1.5-.2 17.9z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l6-10.8L28.9 3l-6 10.8z",
					fill: "#85FFED"
				}), a.a.createElement("path", {
					d: "M22.8 13.8l1.5-3.3 4-7.9.7.7L8.3 13.7l.3-.2L5 19.8l-2.5 4.4-.9-.8c10-4.8 15.8-7.4 21.3-9.5A1713.8 1713.8 0 001.8 24.4a.5.5 0 01-.4-.5v-.2l6-10.9.3-.2 3.1-1.6 17.7-8.7a.7.7 0 01.9.9 290.4 290.4 0 01-6.6 10.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l2.8 5.7 20.9-10.2-2.9-5.7z",
					fill: "#14D8C3"
				}), a.a.createElement("path", {
					d: "M25.6 19.4l-.9-1.6-2.2-4h.3c-5 2.7-13 6.7-20.7 10.5l.2-.6L5 29.2l.1.2-.6-.1a570.5 570.5 0 0121.2-9.8l-10.3 5.1L5 30a.4.4 0 01-.5-.2l-2.9-5.7a.4.4 0 01.2-.5l2.6-1.3a1223.8 1223.8 0 0118.7-9l.1.2a106.7 106.7 0 012.5 6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M25.6 19.4l6-10.7-2.8-5.8-6 10.8 2.8 5.7z",
					fill: "#008985"
				}), a.a.createElement("path", {
					d: "M25.6 19.3l-.9-1.4-2.2-4.1a.3.3 0 010-.3 517.7 517.7 0 016.2-11 .5.5 0 01.5.2L31 6.2 32 8.5a.4.4 0 010 .4 166.8 166.8 0 01-6.4 10.3l2.8-5.3 3-5.4v.3l-3-5.7h.8l-1 1.7-5 9v-.3a45 45 0 011.7 4l.7 1.8z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.5 11L19 8.3l-3 1.5-1.5 2.6L7 16.1l-1.4 2.7 7.2-3.6-2 3.6 3.6-1.8 1.5-3.3 8.5-4 1.4-2.6-8.3 3.8zM14.2 18.5l2.2 5-3 1.4-2.3-5 3-1.4zM26.8 7.8l2.4 4.3-1.1 2.2-2.5-4.5 1.2-2zM31 18.2c-1.5 2-2.8 3.8-3.2 6.6h-2.6c-.7-2-1.4-5-.5-7.5",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M24.6 17.3v2.3a22.3 22.3 0 001.1 5.1l-.5-.3h2.5l-.4.4v-.5l.8-2.3a10 10 0 013-3.7l-2 3a11 11 0 00-1 3.6v.3h-.3l-2.3.1H24.9V25l-.9-3c-.1-.9-.2-1.8-.1-2.6 0-.6.1-1.1.3-1.6l.4-.6z",
					fill: "#FEB331"
				}), a.a.createElement("path", {
					d: "M28.4 21.5l-1.7-1-2 .4a.7.7 0 01-1-.8l.6-2-1.1-1.8a.7.7 0 01.5-1.1l2.1-.2 1.3-1.6a.7.7 0 011.3.2l.8 2 1.9.7a.7.7 0 01.2 1.2L29.7 19l-.2 2a.7.7 0 01-1 .6z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M28.4 21.7h.3a.7.7 0 00.5-.4c.1 0 .2-.2.1-.3v-.7V18.7h.2l.9-1 .5-.4v-.1h.1V17a.2.2 0 000-.1H30.6l-.3-.2-1.5-.6h-.2l-.1-.3-.6-1.3-.2-.6h-.1l-.5.5-.9 1-.2.3H26l-2.1.2c0 .2 0 .3.2.4l.8 1.4.1.3v.2l-.5 1.6-.1.4v.1a.3.3 0 00.1.2h1.1l1.2-.2 1.6 1.5c-.5-.3-1-.7-1.8-1h.3l-1.3.3-.7.2h-.5a1 1 0 01-.8-.6 1 1 0 010-.6v-.7L24 18v.3l-.8-1.2-.2-.3-.1-.2-.1-.2a1.2 1.2 0 011-1.7l.7-.1 1.4-.2-.4.2.7-.8.3-.4.1-.2.1-.1.1-.1c.2-.3.5-.4.8-.4a1.4 1.4 0 011.4.7l.1.1v.1l.1.2.7 1.6-.4-.4 1.5.6.4.2.2.1.3.2a1.4 1.4 0 010 2l-.1.1-.1.1-.6.4-.9.8.2-.4a37.1 37.1 0 01-.3 2c0 .4-.2.6-.4.8a1 1 0 01-.6.2h-.4l-.2-.3z",
					fill: "#F80"
				}), a.a.createElement("path", {
					d: "M43.6 11.9c-5.4 2-8 10.7-8 10.7s-2.1.6-3.2 1.5a58 58 0 014-16.3",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M36.3 7.7c.1.1-.6 2.1-1.4 5.2a65.3 65.3 0 00-2 11.3l-.8-.4 1.7-1 1.6-.7-.3.3v-.2a26.1 26.1 0 014-7.2c1.5-1.6 3-2.6 4.6-3a8 8 0 00-2.7 1.8 23 23 0 00-5 8.8l-.2.2h-.1a16.1 16.1 0 00-3 1.6l-.8.7.1-1 .2-1.5a55 55 0 012.3-10.9c1-2.6 1.6-4 1.8-4z",
					fill: "#FEB331"
				}), a.a.createElement("path", {
					d: "M41.3 22C36.8 21.2 33 25 33 25h-3.3c1-2.9 5.4-7.7 10.8-8.6",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M40.3 16.2l-.3.2-.3.1-.3.1-.2.1-.7.3-.7.3-.7.4-.4.2-.5.3-.4.2-.4.4-.9.6-.4.4-.5.4-.4.4-.2.2-.2.2-.4.5-.4.4-.4.5-.4.5c-.5.7-.9 1.4-1.2 2.2l-.4-.7h3.3l-.3.2a11.1 11.1 0 012.6-1.8l2.4-.8c1.4-.3 2.7-.2 3.7.2-1.5-.2-3 0-4.3.5a12 12 0 00-3.9 2.4v.1h-3.5l-.6.1.2-.5c.3-.8.6-1.5 1-2.1.6-.7 1-1.4 1.7-2l.4-.5.5-.4.8-.8c1-.8 2.2-1.5 3.4-2l.3-.2.4-.1.6-.2 1.1-.3h1z",
					fill: "#FEB331"
				}), a.a.createElement("path", {
					d: "M37.2 12.7l-.4-2.4-2-1.4a.8.8 0 01.1-1.4L37 6.4l.7-2.3a.8.8 0 011.4-.4l1.7 1.7h2.4a.8.8 0 01.8 1.1l-1 2.2.8 2.3a.8.8 0 01-1 1l-2.3-.3-2 1.5a.8.8 0 01-1.3-.5z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M37 12.7l.3.2a.8.8 0 00.7.3c.2 0 .3 0 .4-.2l.6-.4 1.2-1.2H42l.7.2H43a.3.3 0 00.2-.2V11l-.2-.4-.6-1.7-.1-.2.1-.3.7-1.4.3-.8a.2.2 0 000-.2h-2.8l-.2-.1-1.8-1.7h-.2l-.2.6-.6 1.8v.2l-.3.1-1.7.9-.4.1H35V8a.4.4 0 00-.2.4l.1.2h.1l.2.2.6.5 1 .9v2.5c0-.7-.2-1.5-.4-2.4l.1.2-1.3-.8-.6-.5a1.2 1.2 0 01-.6-1 1.2 1.2 0 01.5-1h.2L35 7l.4-.2 1.4-.8-.2.3.5-1.7v-.4l.1-.2v-.1l.1-.2a1.4 1.4 0 012.1-.4h.1l.6.6 1.2 1-.5-.1h1.3l.6-.1h.6c.4 0 .7.1 1 .3a1.5 1.5 0 01.4 1.7v.1h-.1V7l-.2.2-.8 1.8v-.5l.6 1.7.2.4v.5c.1 0 0 .2 0 .2a1.5 1.5 0 01-.7 1.3l-.7.2h-.5l-.7-.2-1.4-.2.5-.2c-.6.4-1 .8-1.5 1l-.3.3H39l-.2.2c-.2.1-.6.2-.9.1l-.6-.3a1 1 0 01-.2-.4c-.1-.3 0-.4 0-.4z",
					fill: "#F80"
				}), a.a.createElement("path", {
					d: "M41.5 21.8l-1-1h-1.6a.5.5 0 01-.4-.8l.7-1.3-.5-1.5a.5.5 0 01.6-.6l1.5.2 1.2-.9a.5.5 0 01.8.4l.3 1.5 1.2.8a.5.5 0 01-.1 1l-1.4.6-.4 1.4a.5.5 0 01-.9.2z",
					fill: "#FFF3AF"
				}), a.a.createElement("path", {
					d: "M41.4 22h.3a.5.5 0 00.4-.2v-.2a17.2 17.2 0 01.4-1.5V20l.2-.1.8-.5.4-.3-.3-.2-1-.7h-.1v-.4l-.2-1-.1-.4a.2.2 0 00.2 0l-.4.3-.8.6-.3.2h-.2l-.8-.2h-.7v-.1l.1-.1.1.2.3 1.2.1.2v.2l-.7 1-.2.3v.1h.2l.5.1.9.2.8 1.4-1-1h.2-1.9a.9.9 0 01-.5-1v-.2l.1-.2.2-.2.4-1v.4l-.4-1v-.3l-.1-.1v-.2a1 1 0 011-1.2h.6l1 .2h-.5l.7-.4.3-.2.1-.1.1-.1c.3-.2.6-.3.8-.2a1.2 1.2 0 011 .9v.1h.1v.2l.2 1.3-.3-.5 1 .7.2.1.2.2a1.3 1.3 0 01.3.8 1.2 1.2 0 01-.6 1.1l-.2.1-.4.2-.8.4.3-.4-.4 1v.2l-.2.2a1 1 0 01-.5.5h-.8l-.1-.4z",
					fill: "#F80"
				})),
				h = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M18 32.3c-6.4 1-10.7-1.1-13.2-3.5a11.4 11.4 0 01-3-9.5c.4-3.4 1.9-6.6 3.3-9.7l3.1 4.1c3-4 4.8-6.6 5-12.2 4.4 2 8 6.3 9.2 10.5l1.3-3.4c1.5 2.2 3 4.5 4 7a13 13 0 011 7.9c-1.2 4.6-5.9 9.4-10.8 9",
					fill: "#FF8717"
				}), a.a.createElement("path", {
					d: "M17.8 32.7l.7-.1a9 9 0 004.3-1.6 13 13 0 005-6.4c.6-1.6.8-3.3.5-5a17 17 0 00-1.8-5.4c-1-1.8-2.1-3.5-3.3-5.3l1-.1-1.2 3.4-.7 1.9-.5-2a16.5 16.5 0 00-8.8-10l1-.6-.4 3.3a15.8 15.8 0 01-2.5 6l-1.7 2.5-.6.8-.6.8-.5-.8-3.2-4 1.1-.2-2.2 5.4c-.6 1.7-1 3.4-1 5.1-.2 1.5 0 3 .5 4.5A9.2 9.2 0 005 28.5a13.5 13.5 0 006.4 3.6 17.8 17.8 0 006.6.5 20 20 0 01-4.1.3A15.4 15.4 0 015.8 30L4 28.5c-.5-.5-1-1.2-1.3-1.8-.8-1.4-1.2-2.9-1.3-4.4-.2-1.5-.1-3 .2-4.5.3-1.5.7-3 1.2-4.3l1.7-4 .3-.8.5.6 3.3 4.1h-.9c1.4-2 2.8-3.9 3.6-5.9l.9-3 .3-3v-1l.9.4 2.8 1.6 1.2 1 1 1a18 18 0 014.5 7.4l-1.3-.1L23 8.3l.5-1.2.8 1c1.3 2 2.5 4 3.5 6s1.6 4 1.7 6a11.6 11.6 0 01-3.6 9.4 12.2 12.2 0 01-4.5 3 8.3 8.3 0 01-3 .3l-.6-.1z",
					fill: "#FF4500"
				}), a.a.createElement("path", {
					d: "M14 31.5c-2.8-.3-5.7-2.2-6.4-5-.7-3 1.3-5.9 3.2-8.4l5-6.3c1 2.3 2.7 4.3 4.5 6.1 1.8 1.7 3.6 3.3 4.4 5.7 2.1 6.7-5.7 8.5-10.7 8z",
					fill: "#FFF1B6"
				}), a.a.createElement("path", {
					d: "M14 31.7c0-.2 1-.1 2.8-.4a18.5 18.5 0 003-.6l1.7-.8c.6-.3 1.1-.6 1.6-1.1.4-.5.8-1 1-1.7.2-.7.3-1.4.1-2v-.6l-.2-.6-.5-1c-.4-.8-.9-1.4-1.4-2l-2-2-2-2C17 15.7 15.8 14 15 12.3l1.6.2-2 2.5-2.5 3.2-2.1 2.8c-.6.8-1 1.7-1.4 2.6a5.3 5.3 0 00.3 4.7l1.4 1.7c1.1 1 2.4 1.6 3.7 2A9.4 9.4 0 019.5 30c-.5-.3-.9-.7-1.2-1.2-.4-.4-.7-1-1-1.5v-.4l-.1-.3v-.2L7 26v-2.3l.6-1.6c1-2.2 2.4-4 3.7-5.7l3.7-5 .8-1.1.6 1.2c.4.9.8 1.7 1.4 2.4a21.9 21.9 0 003.4 3.7l2 2a12 12 0 011.5 2.1l.4.6.2.7.2.6.2.6c.2.9.2 1.8 0 2.6-.1.9-.5 1.6-1 2.3-.4.6-1 1.1-1.6 1.5l-1.8.9a13 13 0 01-5.5.7c-1.3 0-2-.3-2-.5z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M45.5 29.1l-3-4.7c-.6-1-1.8-1.8-3.2-2l-6.1-.9c-1.5-.2-3 .2-4.2 1l-5.8 3.4a6.3 6.3 0 00-2.7 3.3l-2 5.8c-.4 1.3-.3 2.7.4 3.7l3 4.8c.6 1 1.8 1.7 3.2 2l6.1.8c1.5.2 3-.1 4.2-.9l5.8-3.5a6.3 6.3 0 002.7-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.7 6.7a10 10 0 00-7.9 4.7c-.5 1-2 .7-1.8-.2a6 6 0 00-4-6.5c-1-.3-.5-1.7.5-1.7a10 10 0 007.9-4.8c.5-.9 2-.7 1.8.3a6 6 0 004 6.4c1 .4.5 1.7-.5 1.8z",
					fill: "#383838"
				}), a.a.createElement("path", {
					d: "M38.8 36l.1-.2.2-.1.3-.2.3-.6v-.4l-.4-.3h-.1c-.5-.1-1-.4-1.5-.7a6.2 6.2 0 01-2.6-3.4 7 7 0 01-.3-2.6v.2-.2-.1h-.3a.6.6 0 00-.5.2l-.1.1a10.4 10.4 0 01-8.3 5.1l.4-.2-.3.1-.3.1-.1.2v.1l.3.3-.3-.2a6.5 6.5 0 014.4 7.2V40 40.4l.2.1h.3l.3-.2v-.1a9.4 9.4 0 016.3-4l.5-.1H38.9 37.7a9.2 9.2 0 00-3.1 1.2c-1.4.8-2.5 2-3.3 3.4a1.6 1.6 0 01-1.5.8c-.3 0-.6-.2-.8-.4l-.2-.2v-.2l-.1-.3v-.2a6 6 0 00-.2-2c-.1-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.8-2.2l-.3-.2.2.3-.2-.2-.2-.1-.2-.3-.2-.2.1-1.1c.1-.3.4-.6.6-.7.3-.2.6-.3 1-.3h-.4.3a9 9 0 003.7-1.1 10.6 10.6 0 002.7-2.1l.9-1.3v-.1c.2-.2.4-.5.7-.6.3-.2.7-.2 1-.2.4 0 .8.2 1 .5l.2.2.2.3a1.8 1.8 0 010 .6v-.2.2c0 .7 0 1.5.2 2.2a5.9 5.9 0 003.4 3.7l.2.2-.3-.2c.3 0 .6.3.7.6.1.3.1.6 0 .8a1.4 1.4 0 01-1 1h-.4z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M45.4 29.2l.2.2.4.8a4.1 4.1 0 01.1 2.4c0 .4-.2.7-.3 1a426.4 426.4 0 01-2.2 6.5 6.7 6.7 0 01-2.1 2.2l-.4.2-1.5 1-3.2 2c-.3 0-.5.3-.8.4a7.6 7.6 0 01-3 1h-1.7l-.5-.1-2-.3-2.2-.2-1-.2h-.3-.3l-.5-.2c-1-.3-2-.9-2.6-1.7 0 0 0-.2-.2-.3l-.1-.2-.6-1-2.3-3.6-.1-.2-.2-.3a5 5 0 01-.3-3l.3-1.2 1.3-4 .5-1.4.8-1.4c.5-.9 1.3-1.6 2.2-2.2l4.5-2.6 1-.6.2-.2h.2l.1-.1.6-.3a7.1 7.1 0 013.4-.6l1.1.1 2 .4 3.6.6a4.7 4.7 0 013.3 2.5l.4.7.7 1.4 1.4 2.6-3-4.6-.1-.3-.2-.3-.5-.4a4.2 4.2 0 00-1.8-.9l-.6-.1-1.5-.2-2.9-.4-1.4-.2h-1.4c-1 0-1.9.4-2.7.9l-2.5 1.5-2.5 1.6-.6.4a7 7 0 00-1.6 1.3 5.5 5.5 0 00-1 1.7l-.2.7a1540.4 1540.4 0 00-1.8 5.3 3.9 3.9 0 00.3 2.8v.3l.3.2.7 1.1 1.3 2.1.5.9.3.4.1.2.1.1a3.6 3.6 0 002.1 1.3h.5l.4.1 2 .3 3.5.5h.4a4.5 4.5 0 001.2 0 6 6 0 002.1-.6l.7-.5 1.4-.8 2.6-1.6 1.3-.7 1-.7c.6-.5 1-1.2 1.4-1.9v-.2l.1-.2v-.1l.3-.6.3-1a1594.4 1594.4 0 001.4-3.7l.1-.3a4 4 0 00.3-1c0-.6 0-1.3-.2-1.9l-.1-.6z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M44 26.6l-3-4.7c-.6-1.1-1.8-1.8-3.2-2l-6.2-1c-1.4 0-3 .2-4.2 1l-5.7 3.5c-1.3.7-2.2 1.9-2.7 3.3l-2 5.8c-.4 1.3-.3 2.6.3 3.7l3 4.7c.7 1.1 1.8 1.8 3.2 2l6.2.9c1.5.2 3-.1 4.2-1l5.7-3.4c1.3-.7 2.3-1.9 2.8-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.8 6.7a10 10 0 00-7.8 4.7c-.5.9-2 .7-1.8-.3a6 6 0 00-4-6.4c-1-.4-.6-1.7.5-1.8a10 10 0 007.8-4.7c.6-.9 2-.7 1.9.3a6 6 0 004 6.4c1 .4.5 1.7-.6 1.8z",
					fill: "#4C4C4C"
				}), a.a.createElement("path", {
					d: "M37.3 33.4l.1-.1.2-.1.2-.2.4-.7-.1-.3c-.1-.2-.2-.3-.4-.3l-1.5-.7a6.3 6.3 0 01-3-6v.2-.2-.1l-.2-.1h-.3l-.3.3v.1-.1a10.4 10.4 0 01-8.3 5.1h.4-.4l-.2.1-.2.2v.1l.4.3-.3-.3c.7.3 1.4.7 2 1.2a6.5 6.5 0 012.3 6v-.2V38l.3.1h.3l.3-.3a9.4 9.4 0 016.2-4.1 4.9 4.9 0 011 0h1.1-1.1a10 10 0 00-3.1 1.2c-1.4.8-2.6 2-3.4 3.4a1.6 1.6 0 01-1.4.7c-.3 0-.6 0-.8-.3l-.2-.2-.1-.3V38v-.2a6 6 0 00-.2-2c-.2-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.9-2.2l-.3-.2.3.2-.2-.1-.3-.2-.1-.2-.2-.3v-1c.2-.4.4-.6.7-.8l.9-.3-.3.1h.3a9 9 0 003.7-1.2 10.6 10.6 0 002.6-2l1-1.4c.1-.3.4-.5.7-.7l1-.2c.4 0 .8.2 1 .5l.2.3.1.3v.5-.2.2c0 .8 0 1.5.3 2.2.1.7.4 1.3.8 1.8a6 6 0 002.5 2l.3.1-.3-.2c.3.1.6.4.7.7.1.2.1.5 0 .8a1.4 1.4 0 01-1 1h-.2l-.2-.1z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M43.9 26.7l.2.2.4.8c.2.5.2 1 .2 1.5l-.1 1-.3 1a415.5 415.5 0 01-2.2 6.4 6.7 6.7 0 01-2.2 2.1l-.3.3-1.5 1-3.2 1.9-.8.5a7.3 7.3 0 01-4.2 1h-.5l-.5-.1-2.1-.3-2-.3-1.1-.1H23l-.6-.2a5.2 5.2 0 01-2.5-1.7l-.2-.3v-.1l-.1-.1-.6-1-2.3-3.6-.2-.2-.1-.3a5 5 0 010-4.2l1.3-4 .5-1.4.7-1.5c.6-.8 1.4-1.6 2.3-2.1l4.4-2.6 1-.7.3-.1h.1l.2-.2.5-.2a7 7 0 013.5-.7l1 .2 2 .3 3.7.7a4.7 4.7 0 013.3 2.5l.4.7.7 1.3 1.3 2.6-2.9-4.6-.1-.2-.2-.3-.5-.5a4.2 4.2 0 00-1.8-.8l-.7-.1-1.4-.2-3-.4-1.4-.2a5.8 5.8 0 00-4 .8l-2.5 1.6-2.6 1.6-.6.4a7 7 0 00-1.5 1.3 5.6 5.6 0 00-1 1.7l-.3.7a1727.5 1727.5 0 00-1.7 5.3 3.9 3.9 0 00.2 2.8l.2.3.1.2a246.5 246.5 0 002 3.2l.6.9.3.4v.2l.2.1c.4.5.8.8 1.3 1a4.2 4.2 0 001.2.4h.5l1.9.3 3.6.5h1.6a6 6 0 002.1-.7l.7-.4 1.4-.8 2.6-1.6 1.2-.7 1-.8c.6-.5 1.1-1 1.4-1.8l.1-.2v-.2l.1-.1.2-.6.4-1 .7-2 .6-1.7a26 26 0 01.4-1.3v-1.9l-.2-.6z",
					fill: "#231F20"
				}), a.a.createElement("path", {
					d: "M32 26.1c-1.3.4-2.9 0-4-.8-1.2-1-2-2.2-2.4-3.6-.6-2.7-.6-5.1.6-8 1.3-3 2.8-4 3.8-7.6.5 2.7 1 3.2 2.1 5 1.2 1.7 3.7 2.8 4.7 4.5 1.3 2 .9 4-1.9 4.5-.7 2.6-.2 4.9-2.8 6.1z",
					fill: "#FFF1B6"
				}), a.a.createElement("path", {
					d: "M32 26.3h.1l.2-.2.2-.2.2-.1c.4-.4.7-.7.9-1.2a6 6 0 00.4-2l.4-2.6v-.3l.4-.1.4-.1.4-.2.4-.2h.1l.2-.2a1.5 1.5 0 00.5-1.3v-.4-.2h-.1v-.2l-.1-.2-.1-.2-.3-.4-.6-.8-.8-.6-2-1.5-.9-.9-.2-.2-.2-.3-.2-.3-.2-.2a19.8 19.8 0 01-1.3-2.3 15 15 0 01-.7-2.6h1.8a14 14 0 01-2.4 5 19.9 19.9 0 00-2.1 4.5 10 10 0 00-.4 4L26 21l.1.6.2.6a6.1 6.1 0 002.2 3.3 5.4 5.4 0 003 1h.3-.1a4.2 4.2 0 01-1.2.2c-.6 0-1.1-.2-1.6-.4a6 6 0 01-2.7-2A7.3 7.3 0 0125 21a12 12 0 011-8.4l.8-1.4 1.5-2.6c.4-.9.7-1.7.9-2.6l.8-3.6.8 3.6c.1.8.3 1.5.6 2.2l.5 1 .6.8.3.5.1.2.2.2.7.7c1 .9 2.2 1.6 3.2 2.7a6.7 6.7 0 011 1.4v.3l.2.3.2 1v1l-.1.3-.1.3-.2.3a3 3 0 01-.3.5l-.2.2-.3.2-.2.1-.2.2c-.5.3-1.1.5-1.7.6l.6-.7-.5 2.7c-.2.8-.5 1.6-1 2.2a3.3 3.3 0 01-1.7 1.2 1 1 0 01-.3 0l-.4-.1a.1.1 0 00.1 0z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M32.4 23.4c.1.8-.7 1.4-1.4 1.4-1.2.2-2.4-.7-2.8-1.9a5.3 5.3 0 010-3.5l1.5-3.4 2.3 4.6c.4.8.8 1.7.6 2.5",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M32.8 23.2l-.3-.7-.7-1.4-2.7-4.8h1.2l-1 2.2-.6 2.1a4 4 0 00.2 2.4 2.9 2.9 0 001.2 1.3l.7.2h.8c.3 0 .5-.2.7-.4.2-.2.4-.4.4-.7 0 .3 0 .5-.2.8l-.5.6a2.2 2.2 0 01-1.6.3c-.6 0-1.1-.3-1.6-.7-.4-.3-.8-.8-1-1.3l-.4-1.6.1-1.6c.2-.9.5-1.8 1-2.6l.6-1.5.6-1.4.6 1.3a132.3 132.3 0 012.5 5.1c.2.5.3 1.1.3 1.7 0 .5-.2.7-.3.7z",
					fill: "#fff"
				})),
				p = () => a.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M29.4 20.3c0-1 .1-2.2-.1-3.3-.2-.9-.8-1.6-1.2-2.4v.4a8 8 0 00-.8-3.6l-1.8-3c-.4-.7-.8-1.6-1.7-2-1-.7-2.4-1-3.6-1.3l-.4 1.3c.8-.2 1.4-.8 1.2-1.7 0-.6-.4-1.2-.6-1.8-.3-.7-.4-1.4-.8-2-.5-.8-1.3-1-2.1-.9-1 .2-1.8.7-2.6 1L11.4 2 4.6 4.4c-1 .3-2.4.6-2.8 1.7-.2 1 .3 2.1.6 3l.6-.8c-.7.3-1.6.5-2.1 1.1-.5.5-.8 1.3-.9 2V14l.1 3c0 .8-.1 1.7.2 2.5.5.8.7 1.7 1 2.5L2 25c.3.9.5 1.8 1 2.6.4.7 1 1.2 1.5 1.8.5.5.9 1.1 1.7 1.3.9.1 1.8 0 2.7.2l3 .2 2.9.2 3 .2c.9-.1 1.7-.6 2.5-1l2.7-1.2 1.5-.7 1.5-.6c.7-.6 1-1.5 1.4-2.3l1.5-2.7.5-1.2v-1.4c-.1-1-2-.7-2 .1 0 .8.1 1.4-.3 2.1L26 24.6l-1 2c0 .3-.1.3-.4.5l-1.4.6-4.6 2.1c-.7.3-1.4.1-2.1 0l-2.7-.1-5.2-.4c-.6 0-1.3.2-1.7-.3l-1.5-1.6c-1-1.2-1.3-2.9-1.8-4.4L3 20.6l-.4-1c-.1-.5-.4-.8-.4-1.2v-5.7c0-.7-.2-1.5 0-2.2.2-.3.2-.5.5-.6l1.2-.5c.3-.2.7-.5.6-.8-.3-.7-.6-1.5-.6-2.2v-.3h-.1.2l1.2-.5L10.4 4 15.9 2l.9-.4.8-.2c-.2 0-.1 0 0 0l.2.2.3.8.5 1.6.4.8v.4c.2.3-.3.2.5 0-.3 0-.7.2-.8.6 0 .3.1.5.4.6l2.3.7c.7.2 1.2.4 1.6 1l1 1.6 1.2 1.9a6.5 6.5 0 011 3.3c0 .4.1.7.4 1 .3.6.7 1.1.8 1.8v2.7c0 1 2 .7 2-.1z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M19.6 5.4l-14.8 5c-.4 0-.8-.9-1.2-2v-.2C3.2 7 2.9 6 3.3 5.9L17.8 1c.4 0 .8.9 1.2 2v.2c.4 1.2 1 2.1.6 2.2z",
					fill: "#CCCCCA"
				}), a.a.createElement("path", {
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4a161286.2 161286.2 0 0113.3-4.4c.4-.2.2-.8-.3-.7z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M5.3 10C9.6 8.7 13.7 6.6 18 5.3c1-.4.4-1.9-.6-1.6C13.1 5.1 9 7.1 4.7 8.5c-1 .3-.4 1.9.6 1.5z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M4.2 6.8V7l.3-.2 1.1-.5 3.4-1c2.4-.8 4.9-1.5 7.3-2.4.5-.2 1.4-.4 1.6-1 .1-.4-.5-.5-.6-.1 0-.2 0 0-.1 0l-.4.2-1.3.5-3.7 1.2c-2.4.7-5 1.3-7.3 2.4-.3 0-1.4.6-.8 1 .4.3.8-.2.5-.4z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M23.8 9.6l-9-.5-9.3 3.2L2.4 15l-.9 3.6 2.6 8.2 2.4 2.8 11.6.9 7.2-3.3 2.8-5.3v-4.5l-4.3-7.7z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.2-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), a.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1L3 22l2.8 4.7c.2.2.3.7.6 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.7 1.4 1.9.6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.1 2.1 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
					fill: "#CCCCCA"
				}), a.a.createElement("path", {
					d: "M11.4 7l1.6-.5c.2 0 .3-.3.2-.5-.1-.2-.3-.3-.5-.2l-1.6.4c-.2 0-.3.3-.2.5 0 .2.2.3.5.2zM8 27l2.5.2c.2 0 .4 0 .4-.3 0-.2 0-.4-.3-.4l-2.5-.2c-.2 0-.4 0-.4.3 0 .2 0 .4.3.4z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M18.7 19c-2.1-1-4.1-2.1-6.3-2.6-.8-.2-1.6-.4-2.4-.8l-1.2-.8c-.9-1-.8-2 .2-2.8 1-1 2.2-2 3.3-2.8.5-.4 1-.6 1.5-.8.4-.2.8 0 1 .3.1.4 0 .8-.5 1-1.7.7-3 2-4.4 3.2-.4.4-.3.7 0 1l.7.5c.5.2 1.1.5 1.7.6 2.5.5 4.8 1.6 7 2.8 1 .5 1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.9.2-1-.3-.2-.5 0-.8.5-1 1-.3 2-.6 2.8-1l3.3-1.6.9-.7z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M14.2 23.7l-1.3.5-.5.1c-1 .4-1.7-.1-2-.7v-1.1c.2-.4.6-.6 1-.8l1.1-.4 1.7-.7 3-1.5c-1.6-.8-3.2-1.6-5-2-.8-.2-1.7-.4-2.5-.8-.5-.2-1-.6-1.4-1-1.2-1.4-1.1-2.7.2-3.9l3.4-2.8c.4-.4 1-.6 1.5-.8l.2-.1c.3-.2.7-.2 1 0 .4.1.7.4.8.8.3.7 0 1.5-.8 1.8-1.2.5-2.1 1.4-3.1 2.3l-1 .8.4.3 1.5.5c2.7.6 5.2 1.8 7.3 3 .8.3 1 1 1.2 1.3 0 .4 0 1-.6 1.8a9.8 9.8 0 01-3.6 2.4l-2.5 1z",
					fill: "#A5A4A4"
				}), a.a.createElement("path", {
					d: "M19.2 19.1c-2.1-1-4.1-2-6.3-2.5l-2.3-.8c-.5-.2-1-.5-1.3-.9-.9-1-.8-1.9.2-2.8 1-1 2.2-1.9 3.3-2.8l1.6-.7c.3-.2.7-.1.9.3.1.4 0 .7-.4.9-1.8.7-3 2.1-4.5 3.3-.4.3-.3.7 0 1l.7.5 1.7.5c2.5.6 4.8 1.7 7 2.9 1 .4 1.1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.8.1-1-.3-.2-.5.1-.8.5-1l2.9-1 3.2-1.6.9-.8z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M14.6 23.5l-1.4.5-.4.2c-.7.2-1.2 0-1.5-.6a1 1 0 01.1-1l.7-.4 1-.4a24 24 0 001.8-.7l3.1-1.5h.1l.4-.4a25 25 0 00-5.7-2.3 14 14 0 01-2.4-.8c-.5-.2-1-.5-1.3-1-1-1.1-1-2.2.2-3.3 1-1 2.2-2 3.3-2.8l1.4-.7h.2c.3-.2.6-.2.9-.1.2 0 .4.3.5.6.2.5 0 1-.6 1.3-1.2.6-2.2 1.4-3.3 2.4l-1 .9-.2.2.2.2c.2.2.4.4.6.4.5.3 1 .5 1.6.6 2.6.5 5 1.7 7.1 2.8.7.4 1 .8 1 1.2 0 .3 0 .8-.5 1.4a9.5 9.5 0 01-3.5 2.4l-2.4 1zm-1.6-.2l1.3-.5 2.4-1a8.7 8.7 0 003.2-2c.2-.3.4-.6.4-.9 0-.3-.4-.5-.6-.6-2-1-4.4-2.3-7-2.8-.6-.1-1.2-.3-1.7-.6-.3 0-.6-.3-.9-.6-.2-.2-.3-.5-.3-.8 0-.2.1-.5.4-.7l1-.9c1-1 2.1-1.9 3.5-2.5.3-.1.2-.3.2-.4l-.1-.1h-.5l-1.2.7-3.3 2.8c-.9.8-1 1.4-.2 2.3l1.1.8 2.3.7a27 27 0 016.2 2.5l.2.1a.4.4 0 010 .6l-.3.3-.6.5h-.1a51.8 51.8 0 01-6.4 2.9v.2c0 .2.1.3.5.1l.5-.1z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.4 4.4 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3l-6.1-1-6.2-1.1-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4a48353.8 48353.8 0 01-9.8-1.7l-5.9-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2 0 0l.3-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5l1.8.3 5.6 1 6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6L29.7 17l-2-.4c-.4 0-.6.6-.2.7z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M26.8 19.7L41 22l2 .4c.7.1 1-1 .3-1.2L29.2 19l-2-.4c-.8-.1-1.1 1-.4 1.2z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M46.9 21.3c0-1.3-.8-2.4-1.9-2.5-1 0-2 1-2 2.4 0 1.3.8 2.4 1.8 2.5 1.1 0 2-1 2-2.4z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M46.5 21.4c0 .7-.3 1.7-1.1 2-.7.3-1.4-.2-1.7-.8-.5-.8-.5-1.8-.1-2.5.3-.7 1-1.2 1.7-1 .9.4 1.2 1.4 1.2 2.3 0 .3.7.2.7 0 0-1-.4-2.2-1.4-2.6-.9-.4-2 0-2.6.8a3 3 0 00-.3 3c.4.9 1.3 1.5 2.3 1.3 1.2-.3 2-1.4 2-2.6 0-.3-.7-.2-.7 0zM47.1 29.8c-.8-1.4-1.5-2.8-2.5-4l-4.2-5.1-4.7-5.8-1-1.2c-.7-.8-1.7-.5-2.6-.1L19 19.3c-1.4.6-2.8 1.1-4 1.8-1 .4-1 1.3-1 2.1l-.2 2.6-.5 13.9V39.8c0 1 .8 2 1.3 2.7.4.7.8 1.8 1.5 2.3l1.1.3c.6 0 1.1.2 1.7.3l11.2 2c1.2.1 2.4.4 3.5.6 1 .1 1.6 0 2.2-.8l.4-.6 6.1-8.4 3.3-4.4 1.5-2c.4-.7.4-1.4 0-2-.8-1.4-2.9-.2-2 1.2-.2-.3.1-.6-.1-.4l-.3.3L44 32l-3 4c-2 2.8-4 5.6-6.2 8.4l-.8 1.1-.2.3c0 .3.7-.3.8-.3l-.9-.1-1.8-.3-10.8-2-3.4-.5h-.3l.3.2-.1-.2-1.4-2.4-.5-.7.1 1v-1-.7l.1-2.8.4-8 .1-3.4v-1.9l-.1.4.4-.2 2-1 13.6-5.8 1.5-.7h.1c0 .1-.8-.2-.7 0l.3.4 4.2 5.1 4.6 5.7 1 1.2-.1-.1c0 .2.2.4.3.5l1 1.7.6 1c.8 1.3 3 .1 2.1-1.2z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M35.3 17.8l-17.7 7.7c-.2 0-.4.3-.4.5l-2.7 14.2a290.7 290.7 0 012.5 3.6l17.2 3c.2 0 .4 0 .5-.2L46.1 31c.2-.2.1-.5 0-.7L44 27 36 18a.6.6 0 00-.7-.2z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8a31996 31996 0 015.8 6.6l1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1l-6 8.3-3.5 4.7-1.2 1.6-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1-.1-.2.3.6c0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), a.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), a.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6a22549.5 22549.5 0 002 2.2l4 4.9c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6l-1.8-.3-5.8-1-6-1.1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1a7430.5 7430.5 0 007.4-3.3l10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M18 23.5l12-5.2 1.8-.8c.5-.2 0-1-.5-.7l-12 5.2-1.7.7c-.6.3 0 1 .4.8zM15.9 25v7c0 .5.8.5.8 0v-6l.1-1c0-.5-.9-.5-.9 0zM15.7 33.6v1.7c0 .2.2.5.4.4.3 0 .5-.2.5-.4v-1.5-.2c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.5z",
					fill: "#fff"
				}), a.a.createElement("path", {
					d: "M33.4 26c-.4-1.7-.7-5-1-6.4-1 .4-2.5 2.4-3 2.9-2.5 2.2-1.8 2.7-4.8 2.6-2.7-.1-4.5-.7-4.8 0-.3.5.6 2 1.5 3.7.8 1.7 1.6 1.4.5 3.4-.6 1-2.2 3.1-2.6 4.4.5.3 1.3 0 1.7 0 1-1.5 2.8-4 2.9-5 0-1.4-2.5-4.2-3.1-5.2 1.5 0 5.3.9 6.8.2 1.3-.5 3.8-4 4.9-5 .2 1.3 0 5.1.8 6 .7.8 3.1 1.3 4.8 1.7.5-.3 1-.7 1.3-1.2L33.4 26z",
					fill: "#C18D42"
				}), a.a.createElement("path", {
					d: "M36.3 30.6c4.4-2.8 4-3-.3-4.4-2.4-.8-2.5-.7-2.9-3.3-.1-.9.1-3.7-1-3.9-1-.2-2.5 2.1-3.2 2.7-2.4 2.2-2.2 2.5-5.2 2.4-4.7-.2-5.2-.2-3.3 3.7.9 1.7 1.9 1.9.7 3.9-.7 1.2-2.5 3.4-2.5 4.7 0 2.1 6.4-1.4 7.6-1.2 1.1.2 4.4 5.4 5.8 3.5.7-1 .7-2.8.8-3.9.6-3 .9-2.5 3.5-4.2zm-4 1.6c-.8 1-1 5-1.2 6.3-1-1-3.3-3.7-4.7-4-1.4-.2-5.3 1.5-6.8 2 .6-1.3 3.2-4.7 3.3-6 0-1.2-2.5-4.1-3-5.1 1.4 0 5.2.9 6.7.2 1.3-.5 3.9-4 5-5 .1 1.3 0 5.1.8 6 .9 1 4.8 1.6 6.1 2-1.2.8-5.4 2.4-6.2 3.6z",
					fill: "#000"
				}), a.a.createElement("path", {
					d: "M21 38.3l3.4-1.2c.6-.2.5-1-.1-.8l-3.4 1.1c-.6.2-.5 1 0 .9zM34.4 33.2c.8-.4 1.5-.8 2.2-1.4.5-.4 0-1-.5-.6a7 7 0 01-1.9 1.1c-.5.3-.4 1.1.2.9zM33.3 37.9l-.8 1.3c-.3.6.4 1 .7.4l.8-1.3c.3-.6-.4-1-.7-.4zM34.5 20.5l-.3-1.5c0-.5-1-.2-.9.4l.3 1.5c0 .5 1 .2.9-.4z",
					fill: "#fff"
				}));
			var f = n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less"),
				v = n.n(f);

			function b(e) {
				const {
					pointsName: t
				} = e;
				return a.a.createElement("div", {
					className: v.a.container
				}, a.a.createElement(d.a, {
					colored: !0
				}, i.fbt._("Burn Your {pointsName}", [i.fbt._param("pointsName", t)], {
					hk: "2JXqt"
				})), a.a.createElement("div", {
					className: v.a.sectionsContainer
				}, a.a.createElement(E, {
					image: a.a.createElement(m, null),
					header: i.fbt._("Burn and be rewarded", null, {
						hk: "1G5I22"
					}),
					description: i.fbt._("Burn your {pointsName} to receive a reward created by the community.", [i.fbt._param("pointsName", t)], {
						hk: "iRnjD"
					})
				}), a.a.createElement(E, {
					image: a.a.createElement(h, null),
					header: i.fbt._("No one gets the {pointsName}", [i.fbt._param("pointsName", t)], {
						hk: "2hPu7L"
					}),
					description: i.fbt._("When your {pointsName} disappear, it helps the rest of the community by making everyone else's slice of {pointsName2} larger.", [i.fbt._param("pointsName", t), i.fbt._param("pointsName2", t)], {
						hk: "Baw1t"
					})
				}), a.a.createElement(E, {
					image: a.a.createElement(p, null),
					header: i.fbt._("Your community will thank you", null, {
						hk: "2DLt1I"
					}),
					description: i.fbt._("After burning your {pointsName} the user or bot who asked you to burn them will reward you accordingly. *", [i.fbt._param("pointsName", t)], {
						hk: "jf25R"
					})
				})), a.a.createElement("div", {
					className: v.a.footer
				}, a.a.createElement("div", {
					className: v.a.footnote
				}, i.fbt._("* Rewards are created by the community, for the community. Reddit has nothing to do with them, and cannot assist you to cancel, reverse, or otherwise modify burning details. Once you burn your {pointsName}, they’re gone forever.", [i.fbt._param("pointsName", t)], {
					hk: "13HyI3"
				})), a.a.createElement(u.q, {
					onClick: e.onContinue
				}, i.fbt._("Let's do it", null, {
					hk: "2Ktk0f"
				}))))
			}

			function E(e) {
				return a.a.createElement("div", {
					className: v.a.section
				}, a.a.createElement("div", {
					className: v.a.sectionImage
				}, e.image), a.a.createElement("div", {
					className: v.a.sectionContent
				}, a.a.createElement("h4", {
					className: v.a.sectionHeader
				}, e.header), a.a.createElement("p", {
					className: v.a.sectionDescription
				}, e.description)))
			}
			var g = n("./node_modules/bignumber.js/bignumber.js"),
				x = n("./src/reddit/actions/governance/index.ts"),
				N = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				_ = n("./src/reddit/actions/util/pollActionForSuccess.ts"),
				M = n("./src/reddit/endpoints/governance/crypto.ts"),
				C = n("./src/reddit/helpers/crypto/transactions.ts"),
				w = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts"),
				O = n("./src/reddit/helpers/trackers/crypto.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				A = n("./src/reddit/selectors/gov.ts"),
				T = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				L = n("./src/lib/classNames/index.ts"),
				F = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				z = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				D = n("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx"),
				P = n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less"),
				R = n.n(P);

			function S(e) {
				const {
					burnAmount: t,
					burnMemo: n,
					hasEnoughPoints: r,
					pointsName: l,
					subreddit: s
				} = e;
				return a.a.createElement("div", {
					className: R.a.overview
				}, a.a.createElement(F.a, {
					amount: t,
					className: R.a.amount,
					subredditId: s.id
				}), a.a.createElement(D.a, {
					subredditId: s.id
				}), a.a.createElement("div", {
					className: Object(L.a)(R.a.memo, {
						[R.a.error]: !r
					})
				}, r ? i.fbt._("For “{memo}”. Fulfilled by the community, not Reddit.", [i.fbt._param("memo", n)], {
					hk: "1rkdVJ"
				}) : i.fbt._("Not enough {pointsName}", [i.fbt._param("pointsName", l)], {
					hk: "2qcKwi"
				})))
			}

			function B(e) {
				return a.a.createElement(z.b, {
					values: [
						[Object(z.a)(), e.contractAddress],
						[i.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"],
						[i.fbt._("Memo", null, {
							hk: "4AomKF"
						}), e.memo]
					]
				})
			}
			const U = 15e3;

			function G(e) {
				const {
					burnAmount: t,
					burnMemo: n,
					subreddit: r,
					pointsDetails: s
				} = e, c = Object(l.d)(), o = Object(I.a)(), d = () => c(Object(N.f)()), u = r.id, m = Object(l.e)(e => Object(A.e)(e, {
					subredditId: u
				})), h = new g.BigNumber(m).isGreaterThanOrEqualTo(t), p = Object(j.b)(t, null == s ? void 0 : s.displayConversion), f = s.contractAddress, v = Object(C.a)(f, t, n), b = e => {
					o(Object(O.a)("burn_link", u, p, e))
				}, E = s.name;
				return a.a.createElement(T.a, {
					approvalOverview: a.a.createElement(S, {
						burnAmount: t,
						burnMemo: n,
						hasEnoughPoints: h,
						subreddit: r,
						pointsName: E
					}),
					approvalDetails: a.a.createElement(B, {
						contractAddress: f,
						memo: n
					}),
					onClose: d,
					onTransactionSuccess: async e => {
						d(), c(function(e) {
							const t = Object(y.e)(i.fbt._("Burning your {pointsName}...", [i.fbt._param("pointsName", e)], {
								hk: "2LoC1g"
							}), k.b.SuccessCommunity);
							return t.duration = U, Object(y.f)(t)
						}(E));
						try {
							await async function(e, t, n, r, a) {
								await Object(w.a)(t, n), await e(Object(_.a)(Object(x.h)({
									subredditId: r
								}), async e => {
									const t = Object(A.e)(e(), {
										subredditId: r
									});
									return a !== t || null
								})), e(Object(x.h)({
									subredditId: r
								}))
							}(c, s, e.hash, r.id, m), o(Object(O.b)("burn_link", u, p)), c(function(e) {
								const t = Object(y.e)(i.fbt._("Your {pointsName} were burnt!", [i.fbt._param("pointsName", e)], {
									hk: "1BHX95"
								}), k.b.SuccessCommunityGreen);
								return t.duration = U, Object(y.f)(t)
							}(E))
						} catch (t) {
							b(t.toString()), c(function(e) {
								return Object(y.f)(Object(y.e)(i.fbt._("There was an error while burning your {pointsName}. Please try again later", [i.fbt._param("pointsName", e)], {
									hk: "48Un5w"
								}), k.b.Error))
							}(E))
						}
					},
					onTransactionFailure: b,
					subredditId: u,
					title: i.fbt._("Approve Burning Your Bricks", null, {
						hk: "4DTzlV"
					}),
					transaction: h ? v : null,
					transactionIntent: Object(M.b)(u, t, n)
				})
			}
			t.default = Object(s.a)((function() {
				const {
					subreddit: e,
					pointsDetails: t
				} = Object(o.c)(), n = Object(l.e)(e => Object(c.a)(e)), [s, i] = Object(r.useState)(!0);
				return e && t ? s ? a.a.createElement(b, {
					onContinue: () => i(!1),
					pointsName: t.name
				}) : a.a.createElement(G, {
					burnAmount: n.amount,
					burnMemo: n.memo,
					subreddit: e,
					pointsDetails: t
				}) : null
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less": function(e, t, n) {
			e.exports = {
				currentBalance: "_31YIsY0F-7Am4I-6rVcdRl",
				currentBalanceAmount: "QasuEd0D0OPCzr5tiNWoL"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/gov.ts"),
				c = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = n("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less"),
				i = n.n(o);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const t = Object(l.e)(t => Object(s.e)(t, e));
				return a.a.createElement("div", {
					className: i.a.currentBalance
				}, d._("Current balance:", null, {
					hk: "2NDvrq"
				}), a.a.createElement(c.a, {
					className: i.a.currentBalanceAmount,
					amount: t,
					subredditId: e.subredditId,
					small: !0,
					grey: !0
				}))
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
				return w
			})), n.d(t, "c", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				l = n.n(a),
				s = n("./node_modules/raf/index.js"),
				c = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/selectors/activeModalId.ts"),
				f = n("./src/higherOrderComponents/asModal/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				E = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = n.n(E);
			var x = Object(f.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return i.a.createElement("div", {
						className: g.a.wrapper
					}, i.a.createElement(b.a, {
						className: g.a.titleRow
					}, n), i.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), i.a.createElement(b.a, {
						className: g.a.buttonRow
					}, i.a.createElement(v.i, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				N = n("./src/reddit/controls/ErrorText/index.m.less"),
				y = n.n(N);
			const _ = Object(u.c)({
				activeModalId: p.a
			});
			class M extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${l()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
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
						errorModalBody: a,
						errorModalTitle: l = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: o
					} = this.state;
					return i.a.createElement("div", {
						className: Object(m.a)(y.a.wrapper, n)
					}, i.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), o && i.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, s), t === c && i.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: l
					}, a || e))
				}
			}
			const C = Object(d.b)(_, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(M),
				w = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: a,
						messages: l = []
					} = e, s = l.length ? l : a ? [a] : [];
					return s.length ? i.a.createElement("div", {
						className: t
					}, s.map((e, t) => i.a.createElement(C, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				j = e => i.a.createElement(w, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = C
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
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/controls/ErrorText/index.tsx"),
				o = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				i = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
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
			const h = s.a.input("input", u.a),
				p = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						className: s,
						...c
					} = e, o = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.inputWrapper, s, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: p
					}, a.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, c)), e.label && a.a.createElement("label", {
						className: Object(l.a)(u.a.label, {
							[u.a.mHasValue]: o
						})
					}, e.label), e.children)
				},
				v = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: s,
						className: c,
						redditStyle: o,
						...i
					} = e, d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.inputMovingLabelWrapper, c, {
							[u.a.mIsInvalid]: s,
							[u.a.mIsRedditStyle]: o
						}),
						onClick: p
					}, a.a.createElement(h, m({
						innerRef: r
					}, i)), e.label && a.a.createElement("label", {
						className: Object(l.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				b = e => a.a.createElement("div", {
					className: Object(l.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(o.a, {
					className: u.a.plus
				}));
			var E;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(E || (E = {}));
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: E.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: E.REMOVE,
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
						errors: l = []
					} = this.props;
					return e.map((e, s) => a.a.createElement(f, {
						inputRef: e => this.setInputRef(e, s),
						isInvalid: !!l[s],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, s),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(s)
					}, a.a.createElement(i.b, {
						className: u.a.trash
					})), !!l[s] && a.a.createElement(c.b, {
						className: u.a.errorText
					}, l[s])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: s,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const o = !(!!r && n.length >= r) && !c;
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.multiInputWrapper, e)
					}, t && o && a.a.createElement(b, {
						onClick: this.addValue,
						text: s
					}), this.renderFields(), !t && o && a.a.createElement(b, {
						onClick: this.addValue,
						text: s
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
				a = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(l.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return s
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "n", (function() {
				return E
			}));
			var r, a = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
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

			function c(e) {
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

			function o(e) {
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

			function i(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, n) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(l.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(l.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
			const h = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				v = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function E(e, t) {
				return await Object(l.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				a = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e, t) {
				return Object(l.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: a.hb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: r
						}
					}
					return e
				})
			}

			function c(e, t) {
				return Object(l.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: a.hb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function l(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(a).toString()
			}

			function s(e, t) {
				return Object(a.b)(parseInt(l(e, t), 10))
			}

			function c(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js");

			function a(e, t) {
				const [n, a] = Object(r.useState)(e);
				return [n, e => {
					t.current && a(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				l = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = n.n(s);
			const o = e => a.a.createElement("svg", {
				className: Object(l.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = o
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				a = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				l = n("./src/reddit/actions/economics/me/constants.ts");
			const s = {};
			var c = (e = s, t) => {
					switch (t.type) {
						case l.a: {
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
						case a.b:
						case a.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === a.b
								}
							};
						default:
							return e
					}
				},
				o = n("./src/reddit/actions/governance/constants.ts");
			const i = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, r, a, l;
				const s = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == s ? void 0 : s.contracts,
					o = null == c ? void 0 : c.unlocked,
					i = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					u = !!(null === (a = e.walletProvider) || void 0 === a ? void 0 : a.inTransition),
					m = (null == o ? void 0 : o.decimals) || 0,
					h = "1" + "0".repeat(m);
				return {
					blockchainProvider: i,
					contractAddress: (null == o ? void 0 : o.address) || "",
					contracts: c,
					decimals: m,
					displayConversion: h,
					images: e.images || d,
					inTransition: u,
					name: e.name,
					nomenclature: null === (l = e.extra) || void 0 === l ? void 0 : l.nomenclature,
					polls: e.polls,
					symbol: (null == o ? void 0 : o.token) || ""
				}
			}
			var m = (e = i, t) => {
				switch (t.type) {
					case o.a: {
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
			const h = {};
			var p = (e = h, t) => {
				switch (t.type) {
					case o.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, a = Object.keys(r).reduce((t, a) => {
							return {
								...t,
								[a]: {
									...e[a] || {},
									[n]: r[a]
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: c,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/endpoints/governance/crypto.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: c.a
				}
			});
			const o = (e, t) => {
				var n, r, a;
				return t ? null === (a = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === a ? void 0 : a[t] : void 0
			};

			function i() {
				const e = Object(a.ab)(),
					t = Object(r.e)(t => Object(a.q)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => o(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const d = (e, t) => {
				var n;
				const r = null === (n = o(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === l.a.Ethereum || r === l.a.Rinkeby || r === l.a.EthTraderEthereum || r === l.a.EthTraderRinkeby || r === l.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				l = {},
				s = (e, t) => {
					const n = h(e, t);
					if (n) return n.mainHeader
				},
				c = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				o = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : l
				},
				i = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const n = i(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = i(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || a
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.00ae0a381186eb140a98.js.map