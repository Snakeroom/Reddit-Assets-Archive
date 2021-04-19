// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.e7f2f790e35881e2b6e9.js
// Retrieved at 4/19/2021, 7:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
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
			var s = !1,
				a = !1;

			function o(e, r, s) {
				if (a) throw new Error("unknown error");
				r || (r = t.UNKNOWN_ERROR), s || (s = {});
				var o = [];
				Object.keys(s).forEach((function(e) {
					try {
						o.push(e + "=" + JSON.stringify(s[e]))
					} catch (c) {
						o.push(e + "=" + JSON.stringify(s[e].toString()))
					}
				})), o.push("version=" + n.version);
				var i = e;
				o.length && (e += " (" + o.join(", ") + ")");
				var c = new Error(e);
				throw c.reason = i, c.code = r, Object.keys(s).forEach((function(e) {
					c[e] = s[e]
				})), c
			}
			t.throwError = o, t.checkNew = function(e, r) {
				e instanceof r || o("missing new", t.MISSING_NEW, {
					name: r.name
				})
			}, t.checkArgumentCount = function(e, r, n) {
				n || (n = ""), e < r && o("missing argument" + n, t.MISSING_ARGUMENT, {
					count: e,
					expectedCount: r
				}), e > r && o("too many arguments" + n, t.UNEXPECTED_ARGUMENT, {
					count: e,
					expectedCount: r
				})
			}, t.setCensorship = function(e, r) {
				s && o("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), a = !!e, s = !!r
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
					o("platform missing String.prototype.normalize", t.UNSUPPORTED_OPERATION, {
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

			function d(e, t) {
				c > i[e] || console.log.apply(console, t)
			}

			function l() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				d("warn", e)
			}
			t.setLogLevel = function(e) {
				var t = i[e];
				null != t ? c = t : l("invliad log level - " + e)
			}, t.warn = l, t.info = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				d("info", e)
			}
		},
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(e, t, r) {
			(function(t, r) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);
					for (var s = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, a = "0123456789abcdef".split(""), o = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], d = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, t, r) {
							return function(n) {
								return new y(e, t, e).update(n)[r]()
							}
						}, u = function(e, t, r) {
							return function(n, s) {
								return new y(e, t, s).update(n)[r]()
							}
						}, m = function(e, t) {
							var r = l(e, t, "hex");
							r.create = function() {
								return new y(e, t, e)
							}, r.update = function(e) {
								return r.create().update(e)
							};
							for (var n = 0; n < d.length; ++n) {
								var s = d[n];
								r[s] = l(e, t, s)
							}
							return r
						}, f = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: c,
							createMethod: m
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: c,
							createMethod: m
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(e, t) {
								var r = u(e, t, "hex");
								r.create = function(r) {
									return new y(e, t, r)
								}, r.update = function(e, t) {
									return r.create(t).update(e)
								};
								for (var n = 0; n < d.length; ++n) {
									var s = d[n];
									r[s] = u(e, t, s)
								}
								return r
							}
						}], h = {}, p = [], b = 0; b < f.length; ++b)
						for (var v = f[b], g = v.bits, x = 0; x < g.length; ++x) {
							var E = v.name + "_" + g[x];
							p.push(E), h[E] = v.createMethod(g[x], v.padding)
						}

					function y(e, t, r) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					y.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var r, n, s = e.length, a = this.blocks, i = this.byteCount, c = this.blockCount, d = 0, l = this.s; d < s;) {
							if (this.reset)
								for (this.reset = !1, a[0] = this.block, r = 1; r < c + 1; ++r) a[r] = 0;
							if (t)
								for (r = this.start; d < s && r < i; ++d) a[r >> 2] |= e[d] << o[3 & r++];
							else
								for (r = this.start; d < s && r < i; ++d)(n = e.charCodeAt(d)) < 128 ? a[r >> 2] |= n << o[3 & r++] : n < 2048 ? (a[r >> 2] |= (192 | n >> 6) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : n < 55296 || n >= 57344 ? (a[r >> 2] |= (224 | n >> 12) << o[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++d)), a[r >> 2] |= (240 | n >> 18) << o[3 & r++], a[r >> 2] |= (128 | n >> 12 & 63) << o[3 & r++], a[r >> 2] |= (128 | n >> 6 & 63) << o[3 & r++], a[r >> 2] |= (128 | 63 & n) << o[3 & r++]);
							if (this.lastByteIndex = r, r >= i) {
								for (this.start = r - i, this.block = a[c], r = 0; r < c; ++r) l[r] ^= a[r];
								N(l), this.reset = !0
							} else this.start = r
						}
						return this
					}, y.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							r = this.blockCount,
							n = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
						for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
						N(n)
					}, y.prototype.toString = y.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, s = this.extraBytes, o = 0, i = 0, c = ""; i < n;) {
							for (o = 0; o < t && i < n; ++o, ++i) e = r[o], c += a[e >> 4 & 15] + a[15 & e] + a[e >> 12 & 15] + a[e >> 8 & 15] + a[e >> 20 & 15] + a[e >> 16 & 15] + a[e >> 28 & 15] + a[e >> 24 & 15];
							i % t == 0 && (N(r), o = 0)
						}
						return s && (e = r[o], s > 0 && (c += a[e >> 4 & 15] + a[15 & e]), s > 1 && (c += a[e >> 12 & 15] + a[e >> 8 & 15]), s > 2 && (c += a[e >> 20 & 15] + a[e >> 16 & 15])), c
					}, y.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							r = this.s,
							n = this.outputBlocks,
							s = this.extraBytes,
							a = 0,
							o = 0,
							i = this.outputBits >> 3;
						e = s ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(i);
						for (var c = new Uint32Array(e); o < n;) {
							for (a = 0; a < t && o < n; ++a, ++o) c[o] = r[a];
							o % t == 0 && N(r)
						}
						return s && (c[a] = r[a], e = e.slice(0, i)), e
					}, y.prototype.buffer = y.prototype.arrayBuffer, y.prototype.digest = y.prototype.array = function() {
						this.finalize();
						for (var e, t, r = this.blockCount, n = this.s, s = this.outputBlocks, a = this.extraBytes, o = 0, i = 0, c = []; i < s;) {
							for (o = 0; o < r && i < s; ++o, ++i) e = i << 2, t = n[o], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % r == 0 && N(n)
						}
						return a && (e = i << 2, t = n[o], a > 0 && (c[e] = 255 & t), a > 1 && (c[e + 1] = t >> 8 & 255), a > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var N = function(e) {
						var t, r, n, s, a, o, c, d, l, u, m, f, h, p, b, v, g, x, E, y, N, I, _, w, C, j, k, O, T, A, M, P, R, S, U, D, G, L, V, B, F, W, H, z, q, X, Y, $, Z, J, K, Q, ee, te, re, ne, se, ae, oe, ie, ce, de, le;
						for (n = 0; n < 48; n += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], d = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | c >>> 31), r = (h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | o >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = s ^ (d << 1 | l >>> 31), r = a ^ (l << 1 | d >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = o ^ (u << 1 | m >>> 31), r = c ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = d ^ (f << 1 | h >>> 31), r = l ^ (h << 1 | f >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = u ^ (s << 1 | a >>> 31), r = m ^ (a << 1 | s >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], b = e[1], X = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, O = e[20] << 3 | e[21] >>> 29, T = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, W = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, S = e[2] << 1 | e[3] >>> 31, U = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, $ = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, A = e[33] << 13 | e[32] >>> 19, M = e[32] << 13 | e[33] >>> 19, de = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, G = e[15] << 6 | e[14] >>> 26, x = e[25] << 11 | e[24] >>> 21, E = e[24] << 11 | e[25] >>> 21, J = e[34] << 15 | e[35] >>> 17, K = e[35] << 15 | e[34] >>> 17, P = e[45] << 29 | e[44] >>> 3, R = e[44] << 29 | e[45] >>> 3, w = e[6] << 28 | e[7] >>> 4, C = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, L = e[26] << 25 | e[27] >>> 7, V = e[27] << 25 | e[26] >>> 7, y = e[36] << 21 | e[37] >>> 11, N = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, q = e[9] << 27 | e[8] >>> 5, j = e[18] << 20 | e[19] >>> 12, k = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, B = e[38] << 8 | e[39] >>> 24, F = e[39] << 8 | e[38] >>> 24, I = e[48] << 14 | e[49] >>> 18, _ = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~v & x, e[1] = b ^ ~g & E, e[10] = w ^ ~j & O, e[11] = C ^ ~k & T, e[20] = S ^ ~D & L, e[21] = U ^ ~G & V, e[30] = z ^ ~X & $, e[31] = q ^ ~Y & Z, e[40] = te ^ ~ne & ae, e[41] = re ^ ~se & oe, e[2] = v ^ ~x & y, e[3] = g ^ ~E & N, e[12] = j ^ ~O & A, e[13] = k ^ ~T & M, e[22] = D ^ ~L & B, e[23] = G ^ ~V & F, e[32] = X ^ ~$ & J, e[33] = Y ^ ~Z & K, e[42] = ne ^ ~ae & ie, e[43] = se ^ ~oe & ce, e[4] = x ^ ~y & I, e[5] = E ^ ~N & _, e[14] = O ^ ~A & P, e[15] = T ^ ~M & R, e[24] = L ^ ~B & W, e[25] = V ^ ~F & H, e[34] = $ ^ ~J & Q, e[35] = Z ^ ~K & ee, e[44] = ae ^ ~ie & de, e[45] = oe ^ ~ce & le, e[6] = y ^ ~I & p, e[7] = N ^ ~_ & b, e[16] = A ^ ~P & w, e[17] = M ^ ~R & C, e[26] = B ^ ~W & S, e[27] = F ^ ~H & U, e[36] = J ^ ~Q & z, e[37] = K ^ ~ee & q, e[46] = ie ^ ~de & te, e[47] = ce ^ ~le & re, e[8] = I ^ ~p & v, e[9] = _ ^ ~b & g, e[18] = P ^ ~w & j, e[19] = R ^ ~C & k, e[28] = W ^ ~S & D, e[29] = H ^ ~U & G, e[38] = Q ^ ~z & X, e[39] = ee ^ ~q & Y, e[48] = de ^ ~te & ne, e[49] = le ^ ~re & se, e[0] ^= i[n], e[1] ^= i[n + 1]
					};
					if (s) e.exports = h;
					else
						for (b = 0; b < p.length; ++b) n[p[b]] = h[p[b]]
				}()
			}).call(this, r("./node_modules/process/browser.js"), r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/ethers/utils/address.js": function(e, t, r) {
			"use strict";
			var n = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = n(r("./node_modules/bn.js/lib/bn.js")),
				a = r("./node_modules/ethers/utils/bytes.js"),
				o = r("./node_modules/ethers/utils/keccak256.js"),
				i = r("./node_modules/ethers/utils/rlp.js"),
				c = r("./node_modules/ethers/errors.js");

			function d(e) {
				"string" == typeof e && e.match(/^0x[0-9A-Fa-f]{40}$/) || c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				for (var t = (e = e.toLowerCase()).substring(2).split(""), r = new Uint8Array(40), n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
				r = a.arrayify(o.keccak256(r));
				for (var s = 0; s < 40; s += 2) r[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (15 & r[s >> 1]) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
				return "0x" + t.join("")
			}
			for (var l = {}, u = 0; u < 10; u++) l[String(u)] = String(u);
			for (u = 0; u < 26; u++) l[String.fromCharCode(65 + u)] = String(10 + u);
			var m, f = Math.floor((m = 9007199254740991, Math.log10 ? Math.log10(m) : Math.log(m) / Math.LN10));

			function h(e) {
				e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00";
				var t = "";
				for (e.split("").forEach((function(e) {
						t += l[e]
					})); t.length >= f;) {
					var r = t.substring(0, f);
					t = parseInt(r, 10) % 97 + t.substring(r.length)
				}
				for (var n = String(98 - parseInt(t, 10) % 97); n.length < 2;) n = "0" + n;
				return n
			}

			function p(e) {
				var t = null;
				if ("string" != typeof e && c.throwError("invalid address", c.INVALID_ARGUMENT, {
						arg: "address",
						value: e
					}), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = d(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && c.throwError("bad address checksum", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== h(e) && c.throwError("bad icap checksum", c.INVALID_ARGUMENT, {
							arg: "address",
							value: e
						}), t = new s.default.BN(e.substring(4), 36).toString(16); t.length < 40;) t = "0" + t;
					t = d("0x" + t)
				} else c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				return t
			}
			t.getAddress = p, t.getIcapAddress = function(e) {
				for (var t = new s.default.BN(p(e).substring(2), 16).toString(36).toUpperCase(); t.length < 30;) t = "0" + t;
				return "XE" + h("XE00" + t) + t
			}, t.getContractAddress = function(e) {
				if (!e.from) throw new Error("missing from address");
				var t = e.nonce;
				return p("0x" + o.keccak256(i.encode([p(e.from), a.stripZeros(a.hexlify(t))])).substring(26))
			}, t.getCreate2Address = function(e) {
				var t = e.initCodeHash;
				e.initCode && (t ? o.keccak256(e.initCode) !== t && c.throwError("initCode/initCodeHash mismatch", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}) : t = o.keccak256(e.initCode)), t || c.throwError("missing initCode or initCodeHash", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				});
				var r = p(e.from),
					n = a.arrayify(e.salt);
				return 32 !== n.length && c.throwError("invalid salt", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}), p("0x" + o.keccak256(a.concat(["0xff", r, n, t])).substring(26))
			}
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
			var s = n(r("./node_modules/ethers/errors.js"));

			function a(e) {
				return !!e.toHexString
			}

			function o(e) {
				return e.slice ? e : (e.slice = function() {
					var t = Array.prototype.slice.call(arguments);
					return o(new Uint8Array(Array.prototype.slice.apply(e, t)))
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
				if (null == e && s.throwError("cannot convert null value to array", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), a(e) && (e = e.toHexString()), "string" == typeof e) {
					var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
					t || s.throwError("invalid hexidecimal string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== t[1] && s.throwError("hex string must have 0x prefix", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), (e = e.substring(2)).length % 2 && (e = "0" + e);
					for (var r = [], n = 0; n < e.length; n += 2) r.push(parseInt(e.substr(n, 2), 16));
					return o(new Uint8Array(r))
				}
				return i(e) ? o(new Uint8Array(e)) : (s.throwError("invalid arrayify value", null, {
					arg: "value",
					value: e,
					type: typeof e
				}), null)
			}

			function d(e) {
				for (var t = [], r = 0, n = 0; n < e.length; n++) {
					var s = c(e[n]);
					t.push(s), r += s.length
				}
				var a = new Uint8Array(r),
					i = 0;
				for (n = 0; n < t.length; n++) a.set(t[n], i), i += t[n].length;
				return o(a)
			}

			function l(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			t.isHexable = a, t.isArrayish = i, t.arrayify = c, t.concat = d, t.stripZeros = function(e) {
				var t = c(e);
				if (0 === t.length) return t;
				for (var r = 0; 0 === t[r];) r++;
				return r && (t = t.slice(r)), t
			}, t.padZeros = function(e, t) {
				if (t < (e = c(e)).length) throw new Error("cannot pad");
				var r = new Uint8Array(t);
				return r.set(e, t - e.length), o(r)
			}, t.isHexString = l;
			var u = "0123456789abcdef";

			function m(e) {
				if (a(e)) return e.toHexString();
				if ("number" == typeof e) {
					e < 0 && s.throwError("cannot hexlify negative value", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e >= 9007199254740991 && s.throwError("out-of-range", s.NUMERIC_FAULT, {
						operartion: "hexlify",
						fault: "out-of-safe-range"
					});
					for (var t = ""; e;) t = u[15 & e] + t, e = Math.floor(e / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("string" == typeof e) {
					var r = e.match(/^(0x)?[0-9a-fA-F]*$/);
					return r || s.throwError("invalid hexidecimal string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== r[1] && s.throwError("hex string must have 0x prefix", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e.length % 2 && (e = "0x0" + e.substring(2)), e
				}
				if (i(e)) {
					for (var n = [], o = 0; o < e.length; o++) {
						var c = e[o];
						n.push(u[(240 & c) >> 4] + u[15 & c])
					}
					return "0x" + n.join("")
				}
				return s.throwError("invalid hexlify value", null, {
					arg: "value",
					value: e
				}), "never"
			}

			function f(e, t) {
				for (l(e) || s.throwError("invalid hex string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function h(e) {
				var t, r = 0,
					n = "0x",
					a = "0x";
				if ((t = e) && null != t.r && null != t.s) {
					null == e.v && null == e.recoveryParam && s.throwError("at least on of recoveryParam or v must be specified", s.INVALID_ARGUMENT, {
						argument: "signature",
						value: e
					}), n = f(e.r, 32), a = f(e.s, 32), "string" == typeof(r = e.v) && (r = parseInt(r, 16));
					var o = e.recoveryParam;
					null == o && null != e.v && (o = 1 - r % 2), r = 27 + o
				} else {
					var i = c(e);
					if (65 !== i.length) throw new Error("invalid signature");
					n = m(i.slice(0, 32)), a = m(i.slice(32, 64)), 27 !== (r = i[64]) && 28 !== r && (r = 27 + r % 2)
				}
				return {
					r: n,
					s: a,
					recoveryParam: r - 27,
					v: r
				}
			}
			t.hexlify = m, t.hexDataLength = function(e) {
				return l(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
			}, t.hexDataSlice = function(e, t, r) {
				return l(e) || s.throwError("invalid hex data", s.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), e.length % 2 != 0 && s.throwError("hex data length must be even", s.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), t = 2 + 2 * t, null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
			}, t.hexStripZeros = function(e) {
				for (l(e) || s.throwError("invalid hex string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length > 3 && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
				return e
			}, t.hexZeroPad = f, t.splitSignature = h, t.joinSignature = function(e) {
				return m(d([(e = h(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				s = r("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(e) {
				return "0x" + n.keccak_256(s.arrayify(e))
			}
		},
		"./node_modules/ethers/utils/rlp.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = r("./node_modules/ethers/utils/bytes.js");

			function s(e) {
				for (var t = []; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function a(e, t, r) {
				for (var n = 0, s = 0; s < r; s++) n = 256 * n + e[t + s];
				return n
			}

			function o(e, t, r, n) {
				for (var s = []; r < t + 1 + n;) {
					var a = i(e, r);
					if (s.push(a.result), (r += a.consumed) > t + 1 + n) throw new Error("invalid rlp")
				}
				return {
					consumed: 1 + n,
					result: s
				}
			}

			function i(e, t) {
				if (0 === e.length) throw new Error("invalid rlp data");
				if (e[t] >= 248) {
					if (t + 1 + (r = e[t] - 247) > e.length) throw new Error("too short");
					if (t + 1 + r + (s = a(e, t + 1, r)) > e.length) throw new Error("to short");
					return o(e, t, t + 1 + r, r + s)
				}
				if (e[t] >= 192) {
					if (t + 1 + (s = e[t] - 192) > e.length) throw new Error("invalid rlp data");
					return o(e, t, t + 1, s)
				}
				if (e[t] >= 184) {
					var r;
					if (t + 1 + (r = e[t] - 183) > e.length) throw new Error("invalid rlp data");
					if (t + 1 + r + (s = a(e, t + 1, r)) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + r + s,
						result: n.hexlify(e.slice(t + 1 + r, t + 1 + r + s))
					}
				}
				if (e[t] >= 128) {
					var s;
					if (t + 1 + (s = e[t] - 128) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + s,
						result: n.hexlify(e.slice(t + 1, t + 1 + s))
					}
				}
				return {
					consumed: 1,
					result: n.hexlify(e[t])
				}
			}
			t.encode = function(e) {
				return n.hexlify(function e(t) {
					if (Array.isArray(t)) {
						var r = [];
						return t.forEach((function(t) {
							r = r.concat(e(t))
						})), r.length <= 55 ? (r.unshift(192 + r.length), r) : ((a = s(r.length)).unshift(247 + a.length), a.concat(r))
					}
					var a, o = Array.prototype.slice.call(n.arrayify(t));
					return 1 === o.length && o[0] <= 127 ? o : o.length <= 55 ? (o.unshift(128 + o.length), o) : ((a = s(o.length)).unshift(183 + a.length), a.concat(o))
				}(e))
			}, t.decode = function(e) {
				var t = n.arrayify(e),
					r = i(t, 0);
				if (r.consumed !== t.length) throw new Error("invalid rlp data");
				return r.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					a = new n.BigNumber(r.dividedBy(s)),
					o = new n.BigNumber("100").multipliedBy(a);
				return new n.BigNumber(o).toNumber()
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "h", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/config.ts"),
				l = r("./src/graphql/operations/PollVote.json"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/models/Poll/index.ts"),
				f = r("./src/reddit/endpoints/governance/requester.ts");
			var h = r("./src/reddit/endpoints/governance/wallet.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/models/Vote/index.ts"),
				v = r("./src/reddit/selectors/gov.ts"),
				g = r("./src/reddit/actions/governance/constants.ts"),
				x = r("./src/reddit/actions/governance/errorToast.ts");
			const E = Object(s.a)(g.b),
				y = Object(s.a)(g.c),
				N = Object(s.a)(g.e),
				I = (Object(s.a)(g.f), Object(s.a)(g.g), Object(s.a)(g.h)),
				_ = Object(s.a)(g.i),
				w = Object(s.a)(g.j),
				C = Object(s.a)(g.k),
				j = Object(s.a)(g.q),
				k = Object(s.a)(g.r),
				O = Object(s.a)(g.s),
				T = Object(s.a)(g.t),
				A = Object(s.a)(g.u),
				M = Object(s.a)(g.v),
				P = Object(s.a)(g.w),
				R = Object(s.a)(g.x),
				S = (e, t) => async (r, n, {
					apiContext: s,
					gqlContext: a
				}) => {
					let o, c = n().polls.models[e];
					if (r(w({
							pollId: e
						})), (o = c.type === m.a.GA ? await ((e, t, r) => Object(u.a)(e, {
								...l,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(a(), e, t) : await
							function(e, t, r, n) {
								return Object(f.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							r(N({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(C(o.body));
						const s = n();
						if ((c = s.polls.models[e]) && Object(m.f)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === b.a.notVoted && r(Object(i.U)(e))
						}
					} else r(_({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(x.a)(r, o.error || o.errors[0].messsage)
				}, U = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					r(O());
					const l = s().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(f.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: l
					});
					u.ok ? (r(T({
						...u.body,
						subredditId: e.subredditId
					})), r(Object(c.f)({
						kind: p.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(a.a)(e.amount)), n.fbt._param("tokenName", Object(v.n)(s(), {
							subredditId: e.subredditId
						})), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(o.f)())) : (r(j({
						error: u.error
					})), Object(x.a)(r, u.error))
				}, D = e => async (t, r, {
					apiContext: n
				}) => {
					t(M());
					const s = await Object(h.a)(n(), e);
					s.ok ? t(P(s.body)) : t(A({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/governance/wallet.ts"),
				a = r("./src/reddit/actions/governance/constants.ts");
			const o = Object(n.a)(a.m),
				i = Object(n.a)(a.n),
				c = Object(n.a)(a.l);
			t.a = e => async (t, r, {
				apiContext: n
			}) => {
				t(o({
					subredditId: e.subredditId
				}));
				const a = await Object(s.b)(n(), e);
				a.ok ? t(i({
					subredditId: e.subredditId,
					...a.body
				})) : t(c({
					error: a.error
				}))
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(d);
			t.a = Object(a.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(c.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = r.n(i);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(o.a, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(o.c)({
				tokenSymbol: d.o
			});
			t.a = Object(a.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = `${i.a.assetPath}/${t}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
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
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~45b89832"), r.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), r.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), r.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), r.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(r.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, r) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return y
			}));
			var n = r("./node_modules/lodash/debounce.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/actions/usernameAvailable.ts"),
				u = r("./src/reddit/constants/colors.ts"),
				m = r("./src/reddit/controls/FormFields/index.tsx"),
				f = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = r("./src/reddit/icons/svgs/Info/index.tsx"),
				b = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				v = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				g = r.n(v),
				x = r("./node_modules/fbt/lib/FbtPublic.js");
			const E = 2,
				y = 20;
			var N;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(N || (N = {}));
			class I extends o.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > E && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > E) {
							switch (this.props.usernameAvailability[e]) {
								case l.b.Available:
									return N.Invalid;
								case l.b.Error:
									return N.Error;
								case l.b.Unavailable:
									return N.Valid;
								default:
									return N.Searching
							}
						}
						return N.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === N.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return o.a.createElement("div", {
						className: Object(d.a)(g.a.container, this.props.className)
					}, o.a.createElement(m.c, {
						redditStyle: !0,
						className: g.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: y,
						style: {
							borderColor: _(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case N.Error:
								return o.a.createElement(p.a, {
									className: g.a.icon,
									style: {
										fill: u.b.notice
									}
								});
							case N.Invalid:
								return o.a.createElement(b.a, {
									className: g.a.icon,
									style: {
										fill: u.b.warning
									}
								});
							case N.Searching:
								return o.a.createElement(f.a, {
									className: g.a.loadingIcon,
									sizePx: 8
								});
							case N.Valid:
								return o.a.createElement(h.a, {
									className: g.a.icon
								});
							default:
								return null
						}
					}(e), o.a.createElement("div", {
						className: g.a.message,
						style: {
							color: _(e)
						}
					}, function(e) {
						switch (e) {
							case N.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case N.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function _(e) {
				switch (e) {
					case N.Error:
						return u.b.notice;
					case N.Invalid:
						return u.b.warning
				}
			}
			const w = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(w, e => ({
				onCheckUsername: s()(t => e(Object(l.f)({
					username: t
				})), 250)
			}))(I)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3IiquiUxUtXOyp-zOO6NRj",
				controls: "YWcjXTgX4qLhEK5VzWtZN",
				explanation: "_1HZDNpr5Mwq2PvYQAr8Vya",
				inputContainer: "_2o6aRpMmIwjIyBzKvAX3Iu",
				recipientContainer: "_9_VNXefTbTzw6yHVkranI",
				recipient: "_3qLUFjBZ3aszzs7hVEmIaj",
				title: "_2gmTTR14-GI7RpG5N8IfYY"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/actions/governance/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				m = r("./src/reddit/helpers/governance/tokens.ts"),
				f = r("./src/reddit/selectors/gov.ts"),
				h = r("./node_modules/reselect/es/index.js"),
				p = r("./node_modules/bignumber.js/bignumber.js"),
				b = r("./src/lib/classNames/index.ts"),
				v = r("./src/lib/prettyPrintNumber/index.ts"),
				g = r("./src/reddit/components/Governance/Token/index.tsx"),
				x = r("./src/reddit/constants/colors.ts"),
				E = r("./src/reddit/controls/Button/index.tsx"),
				y = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = r("./src/reddit/endpoints/governance/crypto.ts"),
				I = r("./src/reddit/helpers/governance/stellar.ts"),
				_ = r("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				w = r.n(_),
				C = r("./node_modules/fbt/lib/FbtPublic.js");
			const j = Object(h.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				blockchainProvider: f.a,
				tokenDisplayConversion: f.m,
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				unlockedToken: f.p,
				wallet: f.g
			});
			var k = Object(a.b)(j)((function(e) {
					const t = e.wallet && e.wallet.unlockedAmount || "0",
						r = new p.BigNumber(e.amount || "0"),
						n = new p.BigNumber(t),
						a = n.isGreaterThanOrEqualTo(r),
						o = e.submissionEnabled && !n.isZero() && a;
					return s.a.createElement("div", {
						className: Object(b.a)(w.a.container, e.className)
					}, s.a.createElement("div", {
						className: w.a.available
					}, s.a.createElement("div", null, C.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), s.a.createElement(g.a, {
						grey: !0,
						className: w.a.token,
						subredditId: e.subredditId
					}), s.a.createElement("div", {
						style: {
							color: a ? void 0 : x.b.warning
						}
					}, Object(v.a)(Object(m.b)(t, e.tokenDisplayConversion)))), e.blockchainProvider === N.a.Stellar && o ? s.a.createElement(E.j, {
						redditStyle: !0,
						className: w.a.button,
						href: Object(I.b)(e.unlockedToken && e.unlockedToken.address || "", e.unlockedToken && e.unlockedToken.symbol || "", e.publicAddress || "", e.amount && Object(m.b)(e.amount, e.tokenDisplayConversion) || "0", e.contentId ? `t|${e.contentId}` : void 0),
						target: "_blank",
						tabIndex: e.tabIndex
					}, C.fbt._("send", null, {
						hk: "oTFGp"
					})) : s.a.createElement(E.i, {
						disabled: !o,
						className: w.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onTransferPoints
					}, e.transferIsPending ? s.a.createElement(y.a, {
						className: w.a.loadingIcon,
						sizePx: 20
					}) : C.fbt._("send", null, {
						hk: "oTFGp"
					})))
				})),
				O = r("./src/lib/currency/cleanNumber/index.ts"),
				T = r("./src/reddit/constants/keycodes.ts"),
				A = r("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				M = r.n(A);

			function P(e) {
				const t = e.amount || "0",
					r = !new p.BigNumber(t).isZero(),
					n = Object(v.a)(t);
				return s.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(b.a)(M.a.container, e.className)
				}, s.a.createElement(g.a, {
					className: M.a.token,
					grey: !r,
					subredditId: e.subredditId
				}), s.a.createElement("div", {
					className: Object(b.a)(M.a.display, {
						[M.a.displayActive]: r
					}),
					style: {
						fontSize: R(n)
					}
				}, Object(v.a)(n)), s.a.createElement("input", {
					autoFocus: !0,
					className: M.a.input,
					maxLength: 9,
					style: {
						fontSize: R(n)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(O.a)(t.currentTarget.value)),
					onClick: S,
					onFocus: S,
					onKeyDown: e => {
						e.key !== T.b.ArrowLeft && e.key !== T.b.ArrowRight && e.key !== T.b.ArrowUp && e.key !== T.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function R(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function S(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var U = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				D = r("./node_modules/ethers/utils/address.js"),
				G = r("./node_modules/lodash/debounce.js"),
				L = r.n(G),
				V = r("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				B = r("./src/reddit/actions/users.ts"),
				F = r("./src/reddit/selectors/crypto/wallet.ts"),
				W = r("./src/reddit/selectors/user.ts");
			var H = r("./src/reddit/controls/FormFields/index.tsx"),
				z = r("./src/reddit/hooks/useThunkDispatch.ts"),
				q = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				X = r("./src/reddit/icons/svgs/Info/index.tsx"),
				Y = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				$ = r("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				Z = r.n($);
			const J = 42,
				K = /^0x[0-9a-fA-F]+$/;
			var Q;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(Q || (Q = {}));
			const ee = async (e, t, r, n) => {
				const s = e.current;
				if (!s || s.length <= U.b) return void n(Q.Empty);
				const a = K.test(s);
				if (a) try {
					if (!!Object(D.getAddress)(s)) return void n(Q.Valid)
				} catch {}
				s.length <= U.a ? (n(Q.Searching), r(((e, t) => async (r, n, {
					apiContext: s
				}) => {
					let a = n(),
						o = Object(W.mb)(a, {
							userName: e
						});
					if (!(o || (await r(Object(B.y)(e)), a = n(), o = Object(W.mb)(a, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let i = Object(F.c)(a, {
						subredditId: t,
						userId: o.id
					});
					return i || (await r(Object(V.a)({
						subredditId: t,
						userIds: [o.id]
					})), i = Object(F.c)(n(), {
						subredditId: t,
						userId: o.id
					})), {
						userId: o.id,
						wallet: i || null
					}
				})(s, t)).then(({
					userId: t,
					wallet: r
				}) => {
					e.current === s && n(t ? r ? Q.Valid : Q.UserDoesNotHaveAWallet : a ? Q.InvalidWalletAddress : Q.InvalidUsername)
				}).catch(() => {
					n(Q.Error)
				})) : n(a ? Q.InvalidWalletAddress : Q.InvalidUsername)
			};

			function te(e) {
				const {
					onChange: t,
					subredditId: r
				} = e, [a, o] = Object(n.useState)(e.initialRecipient || ""), i = Object(n.useRef)(a), [c, d] = Object(n.useState)(Q.Empty), l = Object(z.a)(), u = () => ee(i, r, l, e => {
					d(e), e === Q.Valid && t(i.current, !0)
				}), m = Object(n.useMemo)(() => L()(u, 300), [i, r, l, d, t]);
				return Object(n.useEffect)(() => {
					e.initialRecipient && u()
				}, []), s.a.createElement("div", {
					className: Object(b.a)(Z.a.container, e.className)
				}, s.a.createElement(H.c, {
					redditStyle: !0,
					className: Z.a.input,
					label: C.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: J,
					style: {
						borderColor: re(c)
					},
					tabIndex: e.tabIndex,
					type: "text",
					value: a,
					onChange: e => {
						const r = e.currentTarget.value.trim();
						i.current = r, o(r), t(r, !1), m()
					}
				}), function(e) {
					switch (e) {
						case Q.UserDoesNotHaveAWallet:
							return s.a.createElement(X.a, {
								className: Z.a.icon,
								style: {
									fill: x.b.notice
								}
							});
						case Q.InvalidWalletAddress:
						case Q.InvalidUsername:
						case Q.Error:
							return s.a.createElement(Y.a, {
								className: Z.a.icon,
								style: {
									fill: x.b.warning
								}
							});
						case Q.Searching:
							return s.a.createElement(y.a, {
								className: Z.a.loadingIcon,
								sizePx: 8
							});
						case Q.Valid:
							return s.a.createElement(q.a, {
								className: Z.a.icon
							});
						default:
							return null
					}
				}(c), s.a.createElement("div", {
					className: Z.a.message,
					style: {
						color: re(c)
					}
				}, function(e) {
					switch (e) {
						case Q.UserDoesNotHaveAWallet:
							return C.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case Q.InvalidWalletAddress:
							return C.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case Q.InvalidUsername:
							return C.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case Q.Error:
							return C.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function re(e) {
				switch (e) {
					case Q.UserDoesNotHaveAWallet:
						return x.b.notice;
					case Q.InvalidWalletAddress:
					case Q.InvalidUsername:
					case Q.Error:
						return x.b.warning
				}
			}
			var ne = r("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function se(e) {
				const {
					tokenName: t
				} = e;
				return s.a.createElement(ne.a, {
					className: e.className
				}, C.fbt._("Send {tokenName}", [C.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var ae = r("./src/lib/addQueryParams/index.ts"),
				oe = r("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				ie = r.n(oe);
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class de extends s.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: r,
						subreddit: n,
						tokenName: a
					} = this.props;
					if (!e || !t) return null;
					const o = Object(ae.a)("https://www.donut.finance/tip/", {
						action: "tip",
						contentId: e,
						recipient: r,
						address: t
					});
					return s.a.createElement("div", {
						className: ie.a.container
					}, s.a.createElement(se, {
						className: ie.a.title,
						subredditId: n.id,
						tokenName: a
					}), s.a.createElement("div", {
						className: ie.a.body
					}, s.a.createElement("div", {
						className: ie.a.description
					}, ce._("Tipping with Donuts is now managed on donut.finance.", null, {
						hk: "48pHUg"
					})), s.a.createElement(E.j, {
						redditStyle: !0,
						className: ie.a.button,
						href: o,
						target: "_blank"
					}, ce._("Tip on donut.finance", null, {
						hk: "4tYZLZ"
					})), s.a.createElement("div", {
						className: ie.a.disclaimer
					}, ce._("donut.finance is not affiliated with Reddit.", null, {
						hk: "2Hz0qj"
					}))))
				}
			}
			const le = Object(h.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var ue = Object(a.b)(le)(de),
				me = r("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				fe = r.n(me);
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class pe extends s.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(m.a)(e, this.props.tokenDisplayConversion)
					}), this.handleRecipientChange = (e, t) => this.setState({
						recipient: e,
						recipientIsValid: t
					}), this.state = {
						displayAmount: void 0,
						recipient: void 0,
						recipientIsValid: !(!e.customCrypto || !e.publicAddress),
						showTransferTransactionModal: !1,
						tokenAmount: void 0
					}
				}
				render() {
					const {
						customCrypto: e,
						initialRecipient: t,
						isEthereumProvider: r,
						onTransferPoints: n,
						subreddit: a,
						tokenName: o,
						useCrypto: i
					} = this.props;
					if (!a) return null;
					if (e && r) return s.a.createElement(ue, {
						recipient: t,
						subreddit: a,
						tokenName: o
					});
					if (this.state.showTransferTransactionModal) return s.a.createElement(d.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: a.id,
						transferAmount: this.state.tokenAmount
					});
					const c = i ? te : U.c;
					return s.a.createElement("div", {
						className: fe.a.container
					}, s.a.createElement(se, {
						className: fe.a.title,
						subredditId: a.id,
						tokenName: o
					}), s.a.createElement("div", {
						className: fe.a.inputContainer
					}, s.a.createElement(P, {
						amount: this.state.displayAmount,
						subredditId: a.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), !i && s.a.createElement("div", {
						className: fe.a.explanation
					}, he._("Up to 49% of earned {tokenName}. Remaining are frozen.", [he._param("tokenName", o)], {
						hk: "1fUxyG"
					})), e ? s.a.createElement("div", {
						className: fe.a.explanation
					}, "Transfer to ", t) : s.a.createElement("div", {
						className: fe.a.recipientContainer
					}, s.a.createElement(c, {
						className: fe.a.recipient,
						initialRecipient: t,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: a.id
					})), s.a.createElement(k, {
						amount: this.state.tokenAmount,
						className: fe.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid,
						subredditId: a.id,
						tabIndex: 3,
						publicAddress: this.props.publicAddress,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && a && (i ? this.setState({
								showTransferTransactionModal: !0
							}) : n(this.state.tokenAmount, this.state.recipient, a.id))
						}
					}))
				}
			}
			const be = Object(h.c)({
					customCrypto: u.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const r = Object(l.q)(e, t);
						return Object(f.f)(e, {
							subredditId: r ? r.id : void 0
						})
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: l.q,
					tokenDisplayConversion: (e, t) => {
						const r = Object(l.q)(e, t);
						return Object(f.m)(e, {
							subredditId: r ? r.id : void 0
						})
					},
					tokenName: (e, t) => {
						const r = Object(l.q)(e, t);
						return Object(f.n)(e, {
							subredditId: r ? r.id : void 0
						})
					},
					useCrypto: (e, t) => {
						const r = Object(l.q)(e, t);
						return Object(f.j)(e, {
							subredditId: r ? r.id : void 0
						})
					}
				}),
				ve = Object(a.b)(be, e => ({
					onClose: () => {
						e(Object(c.f)())
					},
					onTransferPoints: (t, r, n) => e(Object(i.e)({
						amount: t,
						recipient: r,
						subredditId: n
					}, !0))
				})),
				ge = Object(l.t)();
			t.default = Object(o.a)(ge(ve(pe)))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			})), r.d(t, "c", (function() {
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/uniqueId.js"),
				a = r.n(s),
				o = r("./node_modules/raf/index.js"),
				i = r.n(o),
				c = r("./node_modules/react/index.js"),
				d = r.n(c),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/classNames/index.ts"),
				f = r("./src/reddit/actions/modal.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				p = r("./src/higherOrderComponents/asModal/index.tsx"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/layout/row/Inline/index.tsx"),
				g = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = r.n(g);
			var E = Object(p.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: x.a.wrapper
					}, d.a.createElement(v.a, {
						className: x.a.titleRow
					}, r), d.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), d.a.createElement(v.a, {
						className: x.a.buttonRow
					}, d.a.createElement(b.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = r("./src/reddit/controls/ErrorText/index.m.less"),
				N = r.n(y);
			const I = Object(u.c)({
				activeModalId: h.a
			});
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
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
						className: r,
						errorModalBody: s,
						errorModalTitle: a = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(N.a.wrapper, r)
					}, d.a.createElement("span", {
						className: N.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: N.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: a
					}, s || e))
				}
			}
			const w = Object(l.b)(I, e => ({
					toggleErrorTextModal: t => e(Object(f.i)(t))
				}))(_),
				C = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(w, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(C, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, r) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return x
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/controls/ErrorText/index.tsx"),
				c = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				p = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(f, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, s.a.createElement(f, m({
						innerRef: n
					}, d)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				v = e => s.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
							value: r,
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
						label: r,
						placeholder: n,
						errors: a = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(p, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, o),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(d.b, {
						className: u.a.trash
					})), !!a[o] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && r.length >= n) && !i;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "m", (function() {
				return v
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function d(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				f = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function v(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.cb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governance/stellar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");

			function n(e, t) {
				return `web+stellar:${e}?` + Object.entries(t).map(([e, t]) => e + "=" + encodeURIComponent(t)).join("&")
			}

			function s(e, t, r, s, a) {
				const o = {
					destination: r,
					amount: s,
					asset_code: t,
					asset_issuer: e
				};
				return a && (o.memo = a), n("pay", o)
			}

			function a(e, t, r) {
				return n("pay", {
					destination: e,
					amount: r,
					asset_code: t,
					asset_issuer: e,
					memo: "o|membership"
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = r.n(o);
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
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var i = (e = o, t) => {
					switch (t.type) {
						case a.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/governance/constants.ts");
			const d = {};
			var l = (e = d, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
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
			t.a = Object(n.c)({
				claims: i,
				publicWallets: l
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: s.a
				}
			});
			const a = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				o = (e, t) => {
					var r;
					return null === (r = a(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				i = (e, t) => {
					var r, n, s, a;
					return null === (a = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === a ? void 0 : a[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "r", (function() {
				return y
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "j", (function() {
				return C
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const a = [],
				o = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const r = y(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				d = (e, t) => {
					const r = x(e, t);
					if (r) return r.mainHeader
				},
				l = (e, t) => {
					const r = x(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				u = (e, t) => {
					const r = x(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : o
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				h = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				p = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				b = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				g = (e, t) => {
					const r = _(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				y = (e, t) => {
					const r = E(e, t);
					return r && r.walletProvider
				},
				N = (e, t) => {
					const r = y(e, t),
						n = E(e, t);
					return r && r.provider || n && n.provider
				},
				I = (e, t) => {
					const r = N(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const r = y(e, t),
						n = N(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const a = r && r.extra && r.extra.contracts,
						o = a && a.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				w = (e, {
					subredditId: t
				}) => {
					const r = y(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				C = (e, t) => {
					const r = E(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.e7f2f790e35881e2b6e9.js.map