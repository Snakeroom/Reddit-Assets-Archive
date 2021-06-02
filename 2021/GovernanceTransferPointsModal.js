// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.36d8586774456c7f7f03.js
// Retrieved at 6/2/2021, 4:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
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
			var s = !1,
				a = !1;

			function o(e, n, s) {
				if (a) throw new Error("unknown error");
				n || (n = t.UNKNOWN_ERROR), s || (s = {});
				var o = [];
				Object.keys(s).forEach((function(e) {
					try {
						o.push(e + "=" + JSON.stringify(s[e]))
					} catch (c) {
						o.push(e + "=" + JSON.stringify(s[e].toString()))
					}
				})), o.push("version=" + r.version);
				var i = e;
				o.length && (e += " (" + o.join(", ") + ")");
				var c = new Error(e);
				throw c.reason = i, c.code = n, Object.keys(s).forEach((function(e) {
					c[e] = s[e]
				})), c
			}
			t.throwError = o, t.checkNew = function(e, n) {
				e instanceof n || o("missing new", t.MISSING_NEW, {
					name: n.name
				})
			}, t.checkArgumentCount = function(e, n, r) {
				r || (r = ""), e < n && o("missing argument" + r, t.MISSING_ARGUMENT, {
					count: e,
					expectedCount: n
				}), e > n && o("too many arguments" + r, t.UNEXPECTED_ARGUMENT, {
					count: e,
					expectedCount: n
				})
			}, t.setCensorship = function(e, n) {
				s && o("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), a = !!e, s = !!n
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
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(e, t, n) {
			(function(t, n) {
				! function() {
					"use strict";
					var r = "object" == typeof window ? window : {};
					!r.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (r = n);
					for (var s = !r.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, a = "0123456789abcdef".split(""), o = [0, 8, 16, 24], i = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], c = [224, 256, 384, 512], d = ["hex", "buffer", "arrayBuffer", "array"], l = function(e, t, n) {
							return function(r) {
								return new y(e, t, e).update(r)[n]()
							}
						}, u = function(e, t, n) {
							return function(r, s) {
								return new y(e, t, s).update(r)[n]()
							}
						}, m = function(e, t) {
							var n = l(e, t, "hex");
							n.create = function() {
								return new y(e, t, e)
							}, n.update = function(e) {
								return n.create().update(e)
							};
							for (var r = 0; r < d.length; ++r) {
								var s = d[r];
								n[s] = l(e, t, s)
							}
							return n
						}, h = [{
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
								var n = u(e, t, "hex");
								n.create = function(n) {
									return new y(e, t, n)
								}, n.update = function(e, t) {
									return n.create(t).update(e)
								};
								for (var r = 0; r < d.length; ++r) {
									var s = d[r];
									n[s] = u(e, t, s)
								}
								return n
							}
						}], p = {}, f = [], b = 0; b < h.length; ++b)
						for (var v = h[b], g = v.bits, x = 0; x < g.length; ++x) {
							var E = v.name + "_" + g[x];
							f.push(E), p[E] = v.createMethod(g[x], v.padding)
						}

					function y(e, t, n) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = n, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = n >> 5, this.extraBytes = (31 & n) >> 3;
						for (var r = 0; r < 50; ++r) this.s[r] = 0
					}
					y.prototype.update = function(e) {
						var t = "string" != typeof e;
						t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
						for (var n, r, s = e.length, a = this.blocks, i = this.byteCount, c = this.blockCount, d = 0, l = this.s; d < s;) {
							if (this.reset)
								for (this.reset = !1, a[0] = this.block, n = 1; n < c + 1; ++n) a[n] = 0;
							if (t)
								for (n = this.start; d < s && n < i; ++d) a[n >> 2] |= e[d] << o[3 & n++];
							else
								for (n = this.start; d < s && n < i; ++d)(r = e.charCodeAt(d)) < 128 ? a[n >> 2] |= r << o[3 & n++] : r < 2048 ? (a[n >> 2] |= (192 | r >> 6) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]) : r < 55296 || r >= 57344 ? (a[n >> 2] |= (224 | r >> 12) << o[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++d)), a[n >> 2] |= (240 | r >> 18) << o[3 & n++], a[n >> 2] |= (128 | r >> 12 & 63) << o[3 & n++], a[n >> 2] |= (128 | r >> 6 & 63) << o[3 & n++], a[n >> 2] |= (128 | 63 & r) << o[3 & n++]);
							if (this.lastByteIndex = n, n >= i) {
								for (this.start = n - i, this.block = a[c], n = 0; n < c; ++n) l[n] ^= a[n];
								N(l), this.reset = !0
							} else this.start = n
						}
						return this
					}, y.prototype.finalize = function() {
						var e = this.blocks,
							t = this.lastByteIndex,
							n = this.blockCount,
							r = this.s;
						if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (e[0] = e[n], t = 1; t < n + 1; ++t) e[t] = 0;
						for (e[n - 1] |= 2147483648, t = 0; t < n; ++t) r[t] ^= e[t];
						N(r)
					}, y.prototype.toString = y.prototype.hex = function() {
						this.finalize();
						for (var e, t = this.blockCount, n = this.s, r = this.outputBlocks, s = this.extraBytes, o = 0, i = 0, c = ""; i < r;) {
							for (o = 0; o < t && i < r; ++o, ++i) e = n[o], c += a[e >> 4 & 15] + a[15 & e] + a[e >> 12 & 15] + a[e >> 8 & 15] + a[e >> 20 & 15] + a[e >> 16 & 15] + a[e >> 28 & 15] + a[e >> 24 & 15];
							i % t == 0 && (N(n), o = 0)
						}
						return s && (e = n[o], s > 0 && (c += a[e >> 4 & 15] + a[15 & e]), s > 1 && (c += a[e >> 12 & 15] + a[e >> 8 & 15]), s > 2 && (c += a[e >> 20 & 15] + a[e >> 16 & 15])), c
					}, y.prototype.arrayBuffer = function() {
						this.finalize();
						var e, t = this.blockCount,
							n = this.s,
							r = this.outputBlocks,
							s = this.extraBytes,
							a = 0,
							o = 0,
							i = this.outputBits >> 3;
						e = s ? new ArrayBuffer(r + 1 << 2) : new ArrayBuffer(i);
						for (var c = new Uint32Array(e); o < r;) {
							for (a = 0; a < t && o < r; ++a, ++o) c[o] = n[a];
							o % t == 0 && N(n)
						}
						return s && (c[a] = n[a], e = e.slice(0, i)), e
					}, y.prototype.buffer = y.prototype.arrayBuffer, y.prototype.digest = y.prototype.array = function() {
						this.finalize();
						for (var e, t, n = this.blockCount, r = this.s, s = this.outputBlocks, a = this.extraBytes, o = 0, i = 0, c = []; i < s;) {
							for (o = 0; o < n && i < s; ++o, ++i) e = i << 2, t = r[o], c[e] = 255 & t, c[e + 1] = t >> 8 & 255, c[e + 2] = t >> 16 & 255, c[e + 3] = t >> 24 & 255;
							i % n == 0 && N(r)
						}
						return a && (e = i << 2, t = r[o], a > 0 && (c[e] = 255 & t), a > 1 && (c[e + 1] = t >> 8 & 255), a > 2 && (c[e + 2] = t >> 16 & 255)), c
					};
					var N = function(e) {
						var t, n, r, s, a, o, c, d, l, u, m, h, p, f, b, v, g, x, E, y, N, I, _, C, w, j, O, A, k, T, M, P, R, S, U, D, L, G, B, V, F, W, H, z, q, X, Y, Z, $, J, K, Q, ee, te, ne, re, se, ae, oe, ie, ce, de, le;
						for (r = 0; r < 48; r += 2) s = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], d = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], m = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (o << 1 | c >>> 31), n = (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (c << 1 | o >>> 31), e[0] ^= t, e[1] ^= n, e[10] ^= t, e[11] ^= n, e[20] ^= t, e[21] ^= n, e[30] ^= t, e[31] ^= n, e[40] ^= t, e[41] ^= n, t = s ^ (d << 1 | l >>> 31), n = a ^ (l << 1 | d >>> 31), e[2] ^= t, e[3] ^= n, e[12] ^= t, e[13] ^= n, e[22] ^= t, e[23] ^= n, e[32] ^= t, e[33] ^= n, e[42] ^= t, e[43] ^= n, t = o ^ (u << 1 | m >>> 31), n = c ^ (m << 1 | u >>> 31), e[4] ^= t, e[5] ^= n, e[14] ^= t, e[15] ^= n, e[24] ^= t, e[25] ^= n, e[34] ^= t, e[35] ^= n, e[44] ^= t, e[45] ^= n, t = d ^ (h << 1 | p >>> 31), n = l ^ (p << 1 | h >>> 31), e[6] ^= t, e[7] ^= n, e[16] ^= t, e[17] ^= n, e[26] ^= t, e[27] ^= n, e[36] ^= t, e[37] ^= n, e[46] ^= t, e[47] ^= n, t = u ^ (s << 1 | a >>> 31), n = m ^ (a << 1 | s >>> 31), e[8] ^= t, e[9] ^= n, e[18] ^= t, e[19] ^= n, e[28] ^= t, e[29] ^= n, e[38] ^= t, e[39] ^= n, e[48] ^= t, e[49] ^= n, f = e[0], b = e[1], X = e[11] << 4 | e[10] >>> 28, Y = e[10] << 4 | e[11] >>> 28, A = e[20] << 3 | e[21] >>> 29, k = e[21] << 3 | e[20] >>> 29, ie = e[31] << 9 | e[30] >>> 23, ce = e[30] << 9 | e[31] >>> 23, W = e[40] << 18 | e[41] >>> 14, H = e[41] << 18 | e[40] >>> 14, S = e[2] << 1 | e[3] >>> 31, U = e[3] << 1 | e[2] >>> 31, v = e[13] << 12 | e[12] >>> 20, g = e[12] << 12 | e[13] >>> 20, Z = e[22] << 10 | e[23] >>> 22, $ = e[23] << 10 | e[22] >>> 22, T = e[33] << 13 | e[32] >>> 19, M = e[32] << 13 | e[33] >>> 19, de = e[42] << 2 | e[43] >>> 30, le = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, ne = e[4] << 30 | e[5] >>> 2, D = e[14] << 6 | e[15] >>> 26, L = e[15] << 6 | e[14] >>> 26, x = e[25] << 11 | e[24] >>> 21, E = e[24] << 11 | e[25] >>> 21, J = e[34] << 15 | e[35] >>> 17, K = e[35] << 15 | e[34] >>> 17, P = e[45] << 29 | e[44] >>> 3, R = e[44] << 29 | e[45] >>> 3, C = e[6] << 28 | e[7] >>> 4, w = e[7] << 28 | e[6] >>> 4, re = e[17] << 23 | e[16] >>> 9, se = e[16] << 23 | e[17] >>> 9, G = e[26] << 25 | e[27] >>> 7, B = e[27] << 25 | e[26] >>> 7, y = e[36] << 21 | e[37] >>> 11, N = e[37] << 21 | e[36] >>> 11, Q = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, z = e[8] << 27 | e[9] >>> 5, q = e[9] << 27 | e[8] >>> 5, j = e[18] << 20 | e[19] >>> 12, O = e[19] << 20 | e[18] >>> 12, ae = e[29] << 7 | e[28] >>> 25, oe = e[28] << 7 | e[29] >>> 25, V = e[38] << 8 | e[39] >>> 24, F = e[39] << 8 | e[38] >>> 24, I = e[48] << 14 | e[49] >>> 18, _ = e[49] << 14 | e[48] >>> 18, e[0] = f ^ ~v & x, e[1] = b ^ ~g & E, e[10] = C ^ ~j & A, e[11] = w ^ ~O & k, e[20] = S ^ ~D & G, e[21] = U ^ ~L & B, e[30] = z ^ ~X & Z, e[31] = q ^ ~Y & $, e[40] = te ^ ~re & ae, e[41] = ne ^ ~se & oe, e[2] = v ^ ~x & y, e[3] = g ^ ~E & N, e[12] = j ^ ~A & T, e[13] = O ^ ~k & M, e[22] = D ^ ~G & V, e[23] = L ^ ~B & F, e[32] = X ^ ~Z & J, e[33] = Y ^ ~$ & K, e[42] = re ^ ~ae & ie, e[43] = se ^ ~oe & ce, e[4] = x ^ ~y & I, e[5] = E ^ ~N & _, e[14] = A ^ ~T & P, e[15] = k ^ ~M & R, e[24] = G ^ ~V & W, e[25] = B ^ ~F & H, e[34] = Z ^ ~J & Q, e[35] = $ ^ ~K & ee, e[44] = ae ^ ~ie & de, e[45] = oe ^ ~ce & le, e[6] = y ^ ~I & f, e[7] = N ^ ~_ & b, e[16] = T ^ ~P & C, e[17] = M ^ ~R & w, e[26] = V ^ ~W & S, e[27] = F ^ ~H & U, e[36] = J ^ ~Q & z, e[37] = K ^ ~ee & q, e[46] = ie ^ ~de & te, e[47] = ce ^ ~le & ne, e[8] = I ^ ~f & v, e[9] = _ ^ ~b & g, e[18] = P ^ ~C & j, e[19] = R ^ ~w & O, e[28] = W ^ ~S & D, e[29] = H ^ ~U & L, e[38] = Q ^ ~z & X, e[39] = ee ^ ~q & Y, e[48] = de ^ ~te & re, e[49] = le ^ ~ne & se, e[0] ^= i[r], e[1] ^= i[r + 1]
					};
					if (s) e.exports = p;
					else
						for (b = 0; b < f.length; ++b) r[f[b]] = p[f[b]]
				}()
			}).call(this, n("./node_modules/process/browser.js"), n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/ethers/utils/address.js": function(e, t, n) {
			"use strict";
			var r = this && this.__importDefault || function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var s = r(n("./node_modules/bn.js/lib/bn.js")),
				a = n("./node_modules/ethers/utils/bytes.js"),
				o = n("./node_modules/ethers/utils/keccak256.js"),
				i = n("./node_modules/ethers/utils/rlp.js"),
				c = n("./node_modules/ethers/errors.js");

			function d(e) {
				"string" == typeof e && e.match(/^0x[0-9A-Fa-f]{40}$/) || c.throwError("invalid address", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				for (var t = (e = e.toLowerCase()).substring(2).split(""), n = new Uint8Array(40), r = 0; r < 40; r++) n[r] = t[r].charCodeAt(0);
				n = a.arrayify(o.keccak256(n));
				for (var s = 0; s < 40; s += 2) n[s >> 1] >> 4 >= 8 && (t[s] = t[s].toUpperCase()), (15 & n[s >> 1]) >= 8 && (t[s + 1] = t[s + 1].toUpperCase());
				return "0x" + t.join("")
			}
			for (var l = {}, u = 0; u < 10; u++) l[String(u)] = String(u);
			for (u = 0; u < 26; u++) l[String.fromCharCode(65 + u)] = String(10 + u);
			var m, h = Math.floor((m = 9007199254740991, Math.log10 ? Math.log10(m) : Math.log(m) / Math.LN10));

			function p(e) {
				e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00";
				var t = "";
				for (e.split("").forEach((function(e) {
						t += l[e]
					})); t.length >= h;) {
					var n = t.substring(0, h);
					t = parseInt(n, 10) % 97 + t.substring(n.length)
				}
				for (var r = String(98 - parseInt(t, 10) % 97); r.length < 2;) r = "0" + r;
				return r
			}

			function f(e) {
				var t = null;
				if ("string" != typeof e && c.throwError("invalid address", c.INVALID_ARGUMENT, {
						arg: "address",
						value: e
					}), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = d(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && c.throwError("bad address checksum", c.INVALID_ARGUMENT, {
					arg: "address",
					value: e
				});
				else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
					for (e.substring(2, 4) !== p(e) && c.throwError("bad icap checksum", c.INVALID_ARGUMENT, {
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
			t.getAddress = f, t.getIcapAddress = function(e) {
				for (var t = new s.default.BN(f(e).substring(2), 16).toString(36).toUpperCase(); t.length < 30;) t = "0" + t;
				return "XE" + p("XE00" + t) + t
			}, t.getContractAddress = function(e) {
				if (!e.from) throw new Error("missing from address");
				var t = e.nonce;
				return f("0x" + o.keccak256(i.encode([f(e.from), a.stripZeros(a.hexlify(t))])).substring(26))
			}, t.getCreate2Address = function(e) {
				var t = e.initCodeHash;
				e.initCode && (t ? o.keccak256(e.initCode) !== t && c.throwError("initCode/initCodeHash mismatch", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}) : t = o.keccak256(e.initCode)), t || c.throwError("missing initCode or initCodeHash", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				});
				var n = f(e.from),
					r = a.arrayify(e.salt);
				return 32 !== r.length && c.throwError("invalid salt", c.INVALID_ARGUMENT, {
					arg: "options",
					value: e
				}), f("0x" + o.keccak256(a.concat(["0xff", n, r, t])).substring(26))
			}
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
			var s = r(n("./node_modules/ethers/errors.js"));

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
					var n = e[t];
					if (n < 0 || n >= 256 || parseInt(String(n)) != n) return !1
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
					for (var n = [], r = 0; r < e.length; r += 2) n.push(parseInt(e.substr(r, 2), 16));
					return o(new Uint8Array(n))
				}
				return i(e) ? o(new Uint8Array(e)) : (s.throwError("invalid arrayify value", null, {
					arg: "value",
					value: e,
					type: typeof e
				}), null)
			}

			function d(e) {
				for (var t = [], n = 0, r = 0; r < e.length; r++) {
					var s = c(e[r]);
					t.push(s), n += s.length
				}
				var a = new Uint8Array(n),
					i = 0;
				for (r = 0; r < t.length; r++) a.set(t[r], i), i += t[r].length;
				return o(a)
			}

			function l(e, t) {
				return !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
			}
			t.isHexable = a, t.isArrayish = i, t.arrayify = c, t.concat = d, t.stripZeros = function(e) {
				var t = c(e);
				if (0 === t.length) return t;
				for (var n = 0; 0 === t[n];) n++;
				return n && (t = t.slice(n)), t
			}, t.padZeros = function(e, t) {
				if (t < (e = c(e)).length) throw new Error("cannot pad");
				var n = new Uint8Array(t);
				return n.set(e, t - e.length), o(n)
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
					var n = e.match(/^(0x)?[0-9a-fA-F]*$/);
					return n || s.throwError("invalid hexidecimal string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), "0x" !== n[1] && s.throwError("hex string must have 0x prefix", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}), e.length % 2 && (e = "0x0" + e.substring(2)), e
				}
				if (i(e)) {
					for (var r = [], o = 0; o < e.length; o++) {
						var c = e[o];
						r.push(u[(240 & c) >> 4] + u[15 & c])
					}
					return "0x" + r.join("")
				}
				return s.throwError("invalid hexlify value", null, {
					arg: "value",
					value: e
				}), "never"
			}

			function h(e, t) {
				for (l(e) || s.throwError("invalid hex string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
				return e
			}

			function p(e) {
				var t, n = 0,
					r = "0x",
					a = "0x";
				if ((t = e) && null != t.r && null != t.s) {
					null == e.v && null == e.recoveryParam && s.throwError("at least on of recoveryParam or v must be specified", s.INVALID_ARGUMENT, {
						argument: "signature",
						value: e
					}), r = h(e.r, 32), a = h(e.s, 32), "string" == typeof(n = e.v) && (n = parseInt(n, 16));
					var o = e.recoveryParam;
					null == o && null != e.v && (o = 1 - n % 2), n = 27 + o
				} else {
					var i = c(e);
					if (65 !== i.length) throw new Error("invalid signature");
					r = m(i.slice(0, 32)), a = m(i.slice(32, 64)), 27 !== (n = i[64]) && 28 !== n && (n = 27 + n % 2)
				}
				return {
					r,
					s: a,
					recoveryParam: n - 27,
					v: n
				}
			}
			t.hexlify = m, t.hexDataLength = function(e) {
				return l(e) && e.length % 2 == 0 ? (e.length - 2) / 2 : null
			}, t.hexDataSlice = function(e, t, n) {
				return l(e) || s.throwError("invalid hex data", s.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), e.length % 2 != 0 && s.throwError("hex data length must be even", s.INVALID_ARGUMENT, {
					arg: "value",
					value: e
				}), t = 2 + 2 * t, null != n ? "0x" + e.substring(t, 2 + 2 * n) : "0x" + e.substring(t)
			}, t.hexStripZeros = function(e) {
				for (l(e) || s.throwError("invalid hex string", s.INVALID_ARGUMENT, {
						arg: "value",
						value: e
					}); e.length > 3 && "0x0" === e.substring(0, 3);) e = "0x" + e.substring(3);
				return e
			}, t.hexZeroPad = h, t.splitSignature = p, t.joinSignature = function(e) {
				return m(d([(e = p(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				s = n("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(e) {
				return "0x" + r.keccak_256(s.arrayify(e))
			}
		},
		"./node_modules/ethers/utils/rlp.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/ethers/utils/bytes.js");

			function s(e) {
				for (var t = []; e;) t.unshift(255 & e), e >>= 8;
				return t
			}

			function a(e, t, n) {
				for (var r = 0, s = 0; s < n; s++) r = 256 * r + e[t + s];
				return r
			}

			function o(e, t, n, r) {
				for (var s = []; n < t + 1 + r;) {
					var a = i(e, n);
					if (s.push(a.result), (n += a.consumed) > t + 1 + r) throw new Error("invalid rlp")
				}
				return {
					consumed: 1 + r,
					result: s
				}
			}

			function i(e, t) {
				if (0 === e.length) throw new Error("invalid rlp data");
				if (e[t] >= 248) {
					if (t + 1 + (n = e[t] - 247) > e.length) throw new Error("too short");
					if (t + 1 + n + (s = a(e, t + 1, n)) > e.length) throw new Error("to short");
					return o(e, t, t + 1 + n, n + s)
				}
				if (e[t] >= 192) {
					if (t + 1 + (s = e[t] - 192) > e.length) throw new Error("invalid rlp data");
					return o(e, t, t + 1, s)
				}
				if (e[t] >= 184) {
					var n;
					if (t + 1 + (n = e[t] - 183) > e.length) throw new Error("invalid rlp data");
					if (t + 1 + n + (s = a(e, t + 1, n)) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + n + s,
						result: r.hexlify(e.slice(t + 1 + n, t + 1 + n + s))
					}
				}
				if (e[t] >= 128) {
					var s;
					if (t + 1 + (s = e[t] - 128) > e.length) throw new Error("invalid rlp data");
					return {
						consumed: 1 + s,
						result: r.hexlify(e.slice(t + 1, t + 1 + s))
					}
				}
				return {
					consumed: 1,
					result: r.hexlify(e[t])
				}
			}
			t.encode = function(e) {
				return r.hexlify(function e(t) {
					if (Array.isArray(t)) {
						var n = [];
						return t.forEach((function(t) {
							n = n.concat(e(t))
						})), n.length <= 55 ? (n.unshift(192 + n.length), n) : ((a = s(n.length)).unshift(247 + a.length), a.concat(n))
					}
					var a, o = Array.prototype.slice.call(r.arrayify(t));
					return 1 === o.length && o[0] <= 127 ? o : o.length <= 55 ? (o.unshift(128 + o.length), o) : ((a = s(o.length)).unshift(183 + a.length), a.concat(o))
				}(e))
			}, t.decode = function(e) {
				var t = r.arrayify(e),
					n = i(t, 0);
				if (n.consumed !== t.length) throw new Error("invalid rlp data");
				return n.result
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					a = new r.BigNumber(n.dividedBy(s)),
					o = new r.BigNumber("100").multipliedBy(a);
				return new r.BigNumber(o).toNumber()
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
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "h", (function() {
				return D
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				h = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/crypto/points.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				x = n("./src/reddit/actions/governance/errorToast.ts");
			const E = Object(s.a)(g.b),
				y = Object(s.a)(g.c),
				N = Object(s.a)(g.e),
				I = (Object(s.a)(g.f), Object(s.a)(g.g), Object(s.a)(g.h)),
				_ = Object(s.a)(g.i),
				C = Object(s.a)(g.j),
				w = Object(s.a)(g.k),
				j = Object(s.a)(g.q),
				O = Object(s.a)(g.r),
				A = Object(s.a)(g.s),
				k = Object(s.a)(g.t),
				T = Object(s.a)(g.u),
				M = Object(s.a)(g.v),
				P = Object(s.a)(g.w),
				R = Object(s.a)(g.x),
				S = (e, t) => async (n, r, {
					apiContext: s,
					gqlContext: a
				}) => {
					let o, c = r().polls.models[e];
					if (n(C({
							pollId: e
						})), (o = c.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...l,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(a(), e, t) : await
							function(e, t, n, r) {
								return Object(h.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(N({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(w(o.body));
						const s = r();
						if ((c = s.polls.models[e]) && Object(m.d)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === b.a.notVoted && n(Object(i.bb)(e))
						}
					} else n(_({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(x.a)(n, o.error || o.errors[0].messsage)
				}, U = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					var l;
					n(A());
					const u = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(h.a)(e, {
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
						contentId: u
					});
					m.ok ? (n(k({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(a.a)(e.amount)), r.fbt._param("tokenName", (null === (l = Object(v.b)(s(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(j({
						error: m.error
					})), Object(x.a)(n, m.error))
				}, D = e => async (t, n, {
					apiContext: r
				}) => {
					t(M());
					const s = await Object(p.a)(r(), e);
					s.ok ? t(P(s.body)) : t(T({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				a = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(r.a)(a.m),
				i = Object(r.a)(a.n),
				c = Object(r.a)(a.l);
			t.a = e => async (t, n, {
				apiContext: r
			}) => {
				t(o({
					subredditId: e.subredditId
				}));
				const a = await Object(s.b)(r(), e);
				a.ok ? t(i({
					subredditId: e.subredditId,
					...a.body
				})) : t(c({
					error: a.error
				}))
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(d);
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
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

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
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
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
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/usernameAvailable.ts"),
				u = n("./src/reddit/constants/colors.ts"),
				m = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				f = n("./src/reddit/icons/svgs/Info/index.tsx"),
				b = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				v = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				g = n.n(v),
				x = n("./node_modules/fbt/lib/FbtPublic.js");
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
								return o.a.createElement(f.a, {
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
								return o.a.createElement(h.a, {
									className: g.a.loadingIcon,
									sizePx: 8
								});
							case N.Valid:
								return o.a.createElement(p.a, {
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
			const C = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(C, e => ({
				onCheckUsername: s()(t => e(Object(l.f)({
					username: t
				})), 250)
			}))(I)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/governance/tokens.ts"),
				h = n("./src/reddit/selectors/crypto/points.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				f = n("./node_modules/bignumber.js/bignumber.js"),
				b = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				g = n("./src/reddit/components/Governance/Token/index.tsx"),
				x = n("./src/reddit/constants/colors.ts"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = n("./src/reddit/endpoints/governance/crypto.ts"),
				I = n("./src/reddit/helpers/governance/stellar.ts"),
				_ = n("./src/reddit/selectors/gov.ts"),
				C = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				w = n.n(C),
				j = n("./node_modules/fbt/lib/FbtPublic.js");
			const O = Object(p.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				points: (e, {
					subredditId: t
				}) => Object(h.b)(e, t),
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				wallet: _.d
			});
			var A = Object(a.b)(O)((function(e) {
					const {
						amount: t,
						className: n,
						contentId: r,
						onTransferPoints: a,
						points: o,
						publicAddress: i,
						subredditId: c,
						tabIndex: d,
						transferIsPending: l,
						wallet: u
					} = e, h = (null == u ? void 0 : u.unlockedAmount) || "0", p = new f.BigNumber(t || "0"), _ = new f.BigNumber(h), C = _.isGreaterThanOrEqualTo(p), O = e.submissionEnabled && !_.isZero() && C;
					return s.a.createElement("div", {
						className: Object(b.a)(w.a.container, n)
					}, s.a.createElement("div", {
						className: w.a.available
					}, s.a.createElement("div", null, j.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), s.a.createElement(g.a, {
						grey: !0,
						className: w.a.token,
						subredditId: c
					}), s.a.createElement("div", {
						style: {
							color: C ? void 0 : x.b.warning
						}
					}, Object(v.a)(Object(m.b)(h, null == o ? void 0 : o.displayConversion)))), (null == o ? void 0 : o.blockchainProvider) === N.a.Stellar && O ? s.a.createElement(E.j, {
						redditStyle: !0,
						className: w.a.button,
						href: Object(I.b)((null == o ? void 0 : o.contractAddress) || "", (null == o ? void 0 : o.symbol) || "", i || "", t && Object(m.b)(t, null == o ? void 0 : o.displayConversion) || "0", r ? `t|${r}` : void 0),
						target: "_blank",
						tabIndex: d
					}, j.fbt._("Send", null, {
						hk: "18b7Wd"
					})) : s.a.createElement(E.i, {
						disabled: !O,
						className: w.a.button,
						tabIndex: d,
						onClick: a
					}, l ? s.a.createElement(y.a, {
						className: w.a.loadingIcon,
						sizePx: 20
					}) : j.fbt._("Send", null, {
						hk: "18b7Wd"
					})))
				})),
				k = n("./src/lib/currency/cleanNumber/index.ts"),
				T = n("./src/reddit/constants/keycodes.ts"),
				M = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				P = n.n(M);

			function R(e) {
				const t = e.amount || "0",
					n = !new f.BigNumber(t).isZero(),
					r = Object(v.a)(t);
				return s.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(b.a)(P.a.container, e.className)
				}, s.a.createElement(g.a, {
					className: P.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), s.a.createElement("div", {
					className: Object(b.a)(P.a.display, {
						[P.a.displayActive]: n
					}),
					style: {
						fontSize: S(r)
					}
				}, Object(v.a)(r)), s.a.createElement("input", {
					autoFocus: !0,
					className: P.a.input,
					maxLength: 9,
					style: {
						fontSize: S(r)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(k.a)(t.currentTarget.value)),
					onClick: U,
					onFocus: U,
					onKeyDown: e => {
						e.key !== T.b.ArrowLeft && e.key !== T.b.ArrowRight && e.key !== T.b.ArrowUp && e.key !== T.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function S(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function U(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var D = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				L = n("./node_modules/ethers/utils/address.js"),
				G = n("./node_modules/lodash/debounce.js"),
				B = n.n(G),
				V = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				F = n("./src/reddit/actions/users.ts"),
				W = n("./src/reddit/selectors/crypto/wallet.ts"),
				H = n("./src/reddit/selectors/user.ts");
			var z = n("./src/reddit/controls/FormFields/index.tsx"),
				q = n("./src/reddit/hooks/useThunkDispatch.ts"),
				X = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Z = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				$ = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				J = n.n($);
			const K = 42,
				Q = /^0x[0-9a-fA-F]+$/;
			var ee;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(ee || (ee = {}));
			const te = async (e, t, n, r) => {
				const s = e.current;
				if (!s || s.length <= D.b) return void r(ee.Empty);
				const a = Q.test(s);
				if (a) try {
					if (!!Object(L.getAddress)(s)) return void r(ee.Valid)
				} catch {}
				s.length <= D.a ? (r(ee.Searching), n(((e, t) => async (n, r, {
					apiContext: s
				}) => {
					let a = r(),
						o = Object(H.nb)(a, {
							userName: e
						});
					if (!(o || (await n(Object(F.y)(e)), a = r(), o = Object(H.nb)(a, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let i = Object(W.c)(a, {
						subredditId: t,
						userId: o.id
					});
					return i || (await n(Object(V.a)({
						subredditId: t,
						userIds: [o.id]
					})), i = Object(W.c)(r(), {
						subredditId: t,
						userId: o.id
					})), {
						userId: o.id,
						wallet: i || null
					}
				})(s, t)).then(({
					userId: t,
					wallet: n
				}) => {
					e.current === s && r(t ? n ? ee.Valid : ee.UserDoesNotHaveAWallet : a ? ee.InvalidWalletAddress : ee.InvalidUsername)
				}).catch(() => {
					r(ee.Error)
				})) : r(a ? ee.InvalidWalletAddress : ee.InvalidUsername)
			};

			function ne(e) {
				const {
					onChange: t,
					subredditId: n
				} = e, [a, o] = Object(r.useState)(e.initialRecipient || ""), i = Object(r.useRef)(a), [c, d] = Object(r.useState)(ee.Empty), l = Object(q.a)(), u = () => te(i, n, l, e => {
					d(e), e === ee.Valid && t(i.current, !0)
				}), m = Object(r.useMemo)(() => B()(u, 300), [i, n, l, d, t]);
				return Object(r.useEffect)(() => {
					e.initialRecipient && u()
				}, []), s.a.createElement("div", {
					className: Object(b.a)(J.a.container, e.className)
				}, s.a.createElement(z.c, {
					redditStyle: !0,
					className: J.a.input,
					label: j.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: K,
					style: {
						borderColor: re(c)
					},
					tabIndex: e.tabIndex,
					type: "text",
					value: a,
					onChange: e => {
						const n = e.currentTarget.value.trim();
						i.current = n, o(n), t(n, !1), m()
					}
				}), function(e) {
					switch (e) {
						case ee.UserDoesNotHaveAWallet:
							return s.a.createElement(Y.a, {
								className: J.a.icon,
								style: {
									fill: x.b.notice
								}
							});
						case ee.InvalidWalletAddress:
						case ee.InvalidUsername:
						case ee.Error:
							return s.a.createElement(Z.a, {
								className: J.a.icon,
								style: {
									fill: x.b.warning
								}
							});
						case ee.Searching:
							return s.a.createElement(y.a, {
								className: J.a.loadingIcon,
								sizePx: 8
							});
						case ee.Valid:
							return s.a.createElement(X.a, {
								className: J.a.icon
							});
						default:
							return null
					}
				}(c), s.a.createElement("div", {
					className: J.a.message,
					style: {
						color: re(c)
					}
				}, function(e) {
					switch (e) {
						case ee.UserDoesNotHaveAWallet:
							return j.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case ee.InvalidWalletAddress:
							return j.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case ee.InvalidUsername:
							return j.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case ee.Error:
							return j.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(c)))
			}

			function re(e) {
				switch (e) {
					case ee.UserDoesNotHaveAWallet:
						return x.b.notice;
					case ee.InvalidWalletAddress:
					case ee.InvalidUsername:
					case ee.Error:
						return x.b.warning
				}
			}
			var se = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function ae(e) {
				const {
					tokenName: t
				} = e;
				return s.a.createElement(se.a, {
					className: e.className
				}, j.fbt._("Send {tokenName}", [j.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var oe = n("./src/lib/addQueryParams/index.ts"),
				ie = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				ce = n.n(ie);
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class le extends s.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: r,
						tokenName: a
					} = this.props;
					if (!e || !t) return null;
					const o = Object(oe.a)("https://www.donut.finance/tip/", {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return s.a.createElement("div", {
						className: ce.a.container
					}, s.a.createElement(ae, {
						className: ce.a.title,
						subredditId: r.id,
						tokenName: a
					}), s.a.createElement("div", {
						className: ce.a.body
					}, s.a.createElement("div", {
						className: ce.a.description
					}, de._("Tipping with Donuts is now managed on donut.finance.", null, {
						hk: "48pHUg"
					})), s.a.createElement(E.j, {
						redditStyle: !0,
						className: ce.a.button,
						href: o,
						target: "_blank"
					}, de._("Tip on donut.finance", null, {
						hk: "4tYZLZ"
					})), s.a.createElement("div", {
						className: ce.a.disclaimer
					}, de._("donut.finance is not affiliated with Reddit.", null, {
						hk: "2Hz0qj"
					}))))
				}
			}
			const ue = Object(p.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var me = Object(a.b)(ue)(le),
				he = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				pe = n.n(he);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class be extends s.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(m.a)(e, this.props.pointsDetails.displayConversion)
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
						isEthereumProvider: n,
						onTransferPoints: r,
						pointsDetails: a,
						subreddit: o
					} = this.props;
					if (!o || !a) return null;
					if (e && n) return s.a.createElement(me, {
						recipient: t,
						subreddit: o,
						tokenName: a.name
					});
					if (this.state.showTransferTransactionModal) return s.a.createElement(d.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: o.id,
						transferAmount: this.state.tokenAmount
					});
					const i = a.blockchainProvider ? ne : D.c;
					return s.a.createElement("div", {
						className: pe.a.container
					}, s.a.createElement(ae, {
						className: pe.a.title,
						subredditId: o.id,
						tokenName: a.name
					}), s.a.createElement("div", {
						className: pe.a.inputContainer
					}, s.a.createElement(R, {
						amount: this.state.displayAmount,
						subredditId: o.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), !a.blockchainProvider && s.a.createElement("div", {
						className: pe.a.explanation
					}, fe._("Up to 49% of earned {tokenName}. Remaining are frozen.", [fe._param("tokenName", a.name)], {
						hk: "1fUxyG"
					})), e ? s.a.createElement("div", {
						className: pe.a.explanation
					}, "Transfer to ", t) : s.a.createElement("div", {
						className: pe.a.recipientContainer
					}, s.a.createElement(i, {
						className: pe.a.recipient,
						initialRecipient: t,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: o.id
					})), s.a.createElement(A, {
						amount: this.state.tokenAmount,
						className: pe.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid,
						subredditId: o.id,
						tabIndex: 3,
						publicAddress: this.props.publicAddress,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && o && (a.blockchainProvider ? this.setState({
								showTransferTransactionModal: !0
							}) : r(this.state.tokenAmount, this.state.recipient, o.id))
						}
					}))
				}
			}
			const ve = Object(p.c)({
					customCrypto: u.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(h.a)(e, null == n ? void 0 : n.id)
					},
					pointsDetails: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(h.b)(e, null == n ? void 0 : n.id)
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: l.q
				}),
				ge = Object(a.b)(ve, e => ({
					onClose: () => {
						e(Object(c.f)())
					},
					onTransferPoints: (t, n, r) => e(Object(i.e)({
						amount: t,
						recipient: n,
						subredditId: r
					}, !0))
				})),
				xe = Object(l.t)();
			t.default = Object(o.a)(xe(ge(be)))
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
				s = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(s),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/selectors/activeModalId.ts"),
				f = n("./src/higherOrderComponents/asModal/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/layout/row/Inline/index.tsx"),
				g = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(g);
			var E = Object(f.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: x.a.wrapper
					}, d.a.createElement(v.a, {
						className: x.a.titleRow
					}, n), d.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), d.a.createElement(v.a, {
						className: x.a.buttonRow
					}, d.a.createElement(b.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = n("./src/reddit/controls/ErrorText/index.m.less"),
				N = n.n(y);
			const I = Object(u.c)({
				activeModalId: p.a
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
					return d.a.createElement("div", {
						className: Object(m.a)(N.a.wrapper, n)
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
			const C = Object(l.b)(I, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(_),
				w = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(C, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(w, {
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
				return b
			})), n.d(t, "d", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = o.a.input("input", u.a),
				p = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
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
						onClick: p
					}, s.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, i)), e.label && s.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
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
						onClick: p
					}, s.a.createElement(h, m({
						innerRef: r
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
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
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
					return e.map((e, o) => s.a.createElement(f, {
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
						values: n,
						maxLength: r,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && n.length >= r) && !i;
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
				return d
			})), n.d(t, "k", (function() {
				return l
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
				return b
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "n", (function() {
				return g
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
						return 29199749760514
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, n) {
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
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
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
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				v = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function g(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.fb.GET
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

			function i(e, t) {
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.fb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governance/stellar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function r(e, t) {
				return `web+stellar:${e}?` + Object.entries(t).map(([e, t]) => e + "=" + encodeURIComponent(t)).join("&")
			}

			function s(e, t, n, s, a) {
				const o = {
					destination: n,
					amount: s,
					asset_code: t,
					asset_issuer: e
				};
				return a && (o.memo = a), r("pay", o)
			}

			function a(e, t, n) {
				return r("pay", {
					destination: e,
					amount: n,
					asset_code: t,
					asset_issuer: e,
					memo: "o|membership"
				})
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
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(r.d)()
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
				c = n("./src/reddit/actions/governance/constants.ts"),
				d = n("./src/reddit/endpoints/governance/crypto.ts");
			const l = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, s, a;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == o ? void 0 : o.contracts,
					c = null == i ? void 0 : i.unlocked,
					l = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					h = !m && l === d.a.Stellar,
					p = h ? null == o ? void 0 : o.issuerAddress : null == c ? void 0 : c.address,
					f = h ? (null == o ? void 0 : o.decimals) || 7 : (null == c ? void 0 : c.decimals) || 0;
				return {
					blockchainProvider: l,
					contractAddress: p || "",
					contracts: i,
					decimals: f,
					displayConversion: "1" + "0".repeat(f),
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: h ? (null == o ? void 0 : o.token) || "PHOTON" : (null == c ? void 0 : c.token) || ""
				}
			}
			var h = (e = l, t) => {
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
			const p = {};
			var f = (e = p, t) => {
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
				points: h,
				publicWallets: f
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
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

			function d() {
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
			const l = (e, t) => {
				var n;
				const r = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby || r === a.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: s.a
				}
			});
			const a = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				o = (e, t) => {
					var n;
					return null === (n = a(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, r, s, a;
					return null === (a = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === a ? void 0 : a[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				a = {},
				o = (e, t) => {
					const n = h(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = d(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = d(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.36d8586774456c7f7f03.js.map