// https://www.redditstatic.com/desktop2x/vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~5a9831fe.60694f12877aade7f6e9.js
// Retrieved at 9/2/2020, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~5a9831fe"], {
		"./node_modules/ethers/_version.js": function(r, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = "4.0.46"
		},
		"./node_modules/ethers/errors.js": function(r, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = e("./node_modules/ethers/_version.js");
			t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.MISSING_NEW = "MISSING_NEW", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION";
			var o = !1,
				i = !1;

			function a(r, e, o) {
				if (i) throw new Error("unknown error");
				e || (e = t.UNKNOWN_ERROR), o || (o = {});
				var a = [];
				Object.keys(o).forEach((function(r) {
					try {
						a.push(r + "=" + JSON.stringify(o[r]))
					} catch (u) {
						a.push(r + "=" + JSON.stringify(o[r].toString()))
					}
				})), a.push("version=" + n.version);
				var s = r;
				a.length && (r += " (" + a.join(", ") + ")");
				var u = new Error(r);
				throw u.reason = s, u.code = e, Object.keys(o).forEach((function(r) {
					u[r] = o[r]
				})), u
			}
			t.throwError = a, t.checkNew = function(r, e) {
				r instanceof e || a("missing new", t.MISSING_NEW, {
					name: e.name
				})
			}, t.checkArgumentCount = function(r, e, n) {
				n || (n = ""), r < e && a("missing argument" + n, t.MISSING_ARGUMENT, {
					count: r,
					expectedCount: e
				}), r > e && a("too many arguments" + n, t.UNEXPECTED_ARGUMENT, {
					count: r,
					expectedCount: e
				})
			}, t.setCensorship = function(r, e) {
				o && a("error censorship permanent", t.UNSUPPORTED_OPERATION, {
					operation: "setCensorship"
				}), i = !!r, o = !!e
			}, t.checkNormalize = function() {
				try {
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach((function(r) {
							try {
								"test".normalize(r)
							} catch (t) {
								throw new Error("missing " + r)
							}
						})), String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (r) {
					a("platform missing String.prototype.normalize", t.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: r.message
					})
				}
			};
			var s = {
					debug: 1,
					default: 2,
					info: 2,
					warn: 3,
					error: 4,
					off: 5
				},
				u = s.default;

			function l(r, t) {
				u > s[r] || console.log.apply(console, t)
			}

			function f() {
				for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
				l("warn", r)
			}
			t.setLogLevel = function(r) {
				var t = s[r];
				null != t ? u = t : f("invliad log level - " + r)
			}, t.warn = f, t.info = function() {
				for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
				l("info", r)
			}
		},
		"./node_modules/ethers/node_modules/js-sha3/src/sha3.js": function(r, t, e) {
			(function(t, e) {
				! function() {
					"use strict";
					var n = "object" == typeof window ? window : {};
					!n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = e);
					for (var o = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof r && r.exports, i = "0123456789abcdef".split(""), a = [0, 8, 16, 24], s = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], u = [224, 256, 384, 512], l = ["hex", "buffer", "arrayBuffer", "array"], f = function(r, t, e) {
							return function(n) {
								return new A(r, t, r).update(n)[e]()
							}
						}, h = function(r, t, e) {
							return function(n, o) {
								return new A(r, t, o).update(n)[e]()
							}
						}, c = function(r, t) {
							var e = f(r, t, "hex");
							e.create = function() {
								return new A(r, t, r)
							}, e.update = function(r) {
								return e.create().update(r)
							};
							for (var n = 0; n < l.length; ++n) {
								var o = l[n];
								e[o] = f(r, t, o)
							}
							return e
						}, v = [{
							name: "keccak",
							padding: [1, 256, 65536, 16777216],
							bits: u,
							createMethod: c
						}, {
							name: "sha3",
							padding: [6, 1536, 393216, 100663296],
							bits: u,
							createMethod: c
						}, {
							name: "shake",
							padding: [31, 7936, 2031616, 520093696],
							bits: [128, 256],
							createMethod: function(r, t) {
								var e = h(r, t, "hex");
								e.create = function(e) {
									return new A(r, t, e)
								}, e.update = function(r, t) {
									return e.create(t).update(r)
								};
								for (var n = 0; n < l.length; ++n) {
									var o = l[n];
									e[o] = h(r, t, o)
								}
								return e
							}
						}], g = {}, d = [], p = 0; p < v.length; ++p)
						for (var E = v[p], N = E.bits, _ = 0; _ < N.length; ++_) {
							var y = E.name + "_" + N[_];
							d.push(y), g[y] = E.createMethod(N[_], E.padding)
						}

					function A(r, t, e) {
						this.blocks = [], this.s = [], this.padding = t, this.outputBits = e, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (r << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = e >> 5, this.extraBytes = (31 & e) >> 3;
						for (var n = 0; n < 50; ++n) this.s[n] = 0
					}
					A.prototype.update = function(r) {
						var t = "string" != typeof r;
						t && r.constructor === ArrayBuffer && (r = new Uint8Array(r));
						for (var e, n, o = r.length, i = this.blocks, s = this.byteCount, u = this.blockCount, l = 0, f = this.s; l < o;) {
							if (this.reset)
								for (this.reset = !1, i[0] = this.block, e = 1; e < u + 1; ++e) i[e] = 0;
							if (t)
								for (e = this.start; l < o && e < s; ++l) i[e >> 2] |= r[l] << a[3 & e++];
							else
								for (e = this.start; l < o && e < s; ++l)(n = r.charCodeAt(l)) < 128 ? i[e >> 2] |= n << a[3 & e++] : n < 2048 ? (i[e >> 2] |= (192 | n >> 6) << a[3 & e++], i[e >> 2] |= (128 | 63 & n) << a[3 & e++]) : n < 55296 || n >= 57344 ? (i[e >> 2] |= (224 | n >> 12) << a[3 & e++], i[e >> 2] |= (128 | n >> 6 & 63) << a[3 & e++], i[e >> 2] |= (128 | 63 & n) << a[3 & e++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(++l)), i[e >> 2] |= (240 | n >> 18) << a[3 & e++], i[e >> 2] |= (128 | n >> 12 & 63) << a[3 & e++], i[e >> 2] |= (128 | n >> 6 & 63) << a[3 & e++], i[e >> 2] |= (128 | 63 & n) << a[3 & e++]);
							if (this.lastByteIndex = e, e >= s) {
								for (this.start = e - s, this.block = i[u], e = 0; e < u; ++e) f[e] ^= i[e];
								I(f), this.reset = !0
							} else this.start = e
						}
						return this
					}, A.prototype.finalize = function() {
						var r = this.blocks,
							t = this.lastByteIndex,
							e = this.blockCount,
							n = this.s;
						if (r[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
							for (r[0] = r[e], t = 1; t < e + 1; ++t) r[t] = 0;
						for (r[e - 1] |= 2147483648, t = 0; t < e; ++t) n[t] ^= r[t];
						I(n)
					}, A.prototype.toString = A.prototype.hex = function() {
						this.finalize();
						for (var r, t = this.blockCount, e = this.s, n = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, u = ""; s < n;) {
							for (a = 0; a < t && s < n; ++a, ++s) r = e[a], u += i[r >> 4 & 15] + i[15 & r] + i[r >> 12 & 15] + i[r >> 8 & 15] + i[r >> 20 & 15] + i[r >> 16 & 15] + i[r >> 28 & 15] + i[r >> 24 & 15];
							s % t == 0 && (I(e), a = 0)
						}
						return o && (r = e[a], o > 0 && (u += i[r >> 4 & 15] + i[15 & r]), o > 1 && (u += i[r >> 12 & 15] + i[r >> 8 & 15]), o > 2 && (u += i[r >> 20 & 15] + i[r >> 16 & 15])), u
					}, A.prototype.arrayBuffer = function() {
						this.finalize();
						var r, t = this.blockCount,
							e = this.s,
							n = this.outputBlocks,
							o = this.extraBytes,
							i = 0,
							a = 0,
							s = this.outputBits >> 3;
						r = o ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s);
						for (var u = new Uint32Array(r); a < n;) {
							for (i = 0; i < t && a < n; ++i, ++a) u[a] = e[i];
							a % t == 0 && I(e)
						}
						return o && (u[i] = e[i], r = r.slice(0, s)), r
					}, A.prototype.buffer = A.prototype.arrayBuffer, A.prototype.digest = A.prototype.array = function() {
						this.finalize();
						for (var r, t, e = this.blockCount, n = this.s, o = this.outputBlocks, i = this.extraBytes, a = 0, s = 0, u = []; s < o;) {
							for (a = 0; a < e && s < o; ++a, ++s) r = s << 2, t = n[a], u[r] = 255 & t, u[r + 1] = t >> 8 & 255, u[r + 2] = t >> 16 & 255, u[r + 3] = t >> 24 & 255;
							s % e == 0 && I(n)
						}
						return i && (r = s << 2, t = n[a], i > 0 && (u[r] = 255 & t), i > 1 && (u[r + 1] = t >> 8 & 255), i > 2 && (u[r + 2] = t >> 16 & 255)), u
					};
					var I = function(r) {
						var t, e, n, o, i, a, u, l, f, h, c, v, g, d, p, E, N, _, y, A, I, m, x, w, b, U, M, R, S, C, T, O, D, P, k, L, G, j, B, F, V, z, H, K, X, J, W, Z, $, q, Q, Y, rr, tr, er, nr, or, ir, ar, sr, ur, lr, fr;
						for (n = 0; n < 48; n += 2) o = r[0] ^ r[10] ^ r[20] ^ r[30] ^ r[40], i = r[1] ^ r[11] ^ r[21] ^ r[31] ^ r[41], a = r[2] ^ r[12] ^ r[22] ^ r[32] ^ r[42], u = r[3] ^ r[13] ^ r[23] ^ r[33] ^ r[43], l = r[4] ^ r[14] ^ r[24] ^ r[34] ^ r[44], f = r[5] ^ r[15] ^ r[25] ^ r[35] ^ r[45], h = r[6] ^ r[16] ^ r[26] ^ r[36] ^ r[46], c = r[7] ^ r[17] ^ r[27] ^ r[37] ^ r[47], t = (v = r[8] ^ r[18] ^ r[28] ^ r[38] ^ r[48]) ^ (a << 1 | u >>> 31), e = (g = r[9] ^ r[19] ^ r[29] ^ r[39] ^ r[49]) ^ (u << 1 | a >>> 31), r[0] ^= t, r[1] ^= e, r[10] ^= t, r[11] ^= e, r[20] ^= t, r[21] ^= e, r[30] ^= t, r[31] ^= e, r[40] ^= t, r[41] ^= e, t = o ^ (l << 1 | f >>> 31), e = i ^ (f << 1 | l >>> 31), r[2] ^= t, r[3] ^= e, r[12] ^= t, r[13] ^= e, r[22] ^= t, r[23] ^= e, r[32] ^= t, r[33] ^= e, r[42] ^= t, r[43] ^= e, t = a ^ (h << 1 | c >>> 31), e = u ^ (c << 1 | h >>> 31), r[4] ^= t, r[5] ^= e, r[14] ^= t, r[15] ^= e, r[24] ^= t, r[25] ^= e, r[34] ^= t, r[35] ^= e, r[44] ^= t, r[45] ^= e, t = l ^ (v << 1 | g >>> 31), e = f ^ (g << 1 | v >>> 31), r[6] ^= t, r[7] ^= e, r[16] ^= t, r[17] ^= e, r[26] ^= t, r[27] ^= e, r[36] ^= t, r[37] ^= e, r[46] ^= t, r[47] ^= e, t = h ^ (o << 1 | i >>> 31), e = c ^ (i << 1 | o >>> 31), r[8] ^= t, r[9] ^= e, r[18] ^= t, r[19] ^= e, r[28] ^= t, r[29] ^= e, r[38] ^= t, r[39] ^= e, r[48] ^= t, r[49] ^= e, d = r[0], p = r[1], J = r[11] << 4 | r[10] >>> 28, W = r[10] << 4 | r[11] >>> 28, R = r[20] << 3 | r[21] >>> 29, S = r[21] << 3 | r[20] >>> 29, sr = r[31] << 9 | r[30] >>> 23, ur = r[30] << 9 | r[31] >>> 23, z = r[40] << 18 | r[41] >>> 14, H = r[41] << 18 | r[40] >>> 14, P = r[2] << 1 | r[3] >>> 31, k = r[3] << 1 | r[2] >>> 31, E = r[13] << 12 | r[12] >>> 20, N = r[12] << 12 | r[13] >>> 20, Z = r[22] << 10 | r[23] >>> 22, $ = r[23] << 10 | r[22] >>> 22, C = r[33] << 13 | r[32] >>> 19, T = r[32] << 13 | r[33] >>> 19, lr = r[42] << 2 | r[43] >>> 30, fr = r[43] << 2 | r[42] >>> 30, tr = r[5] << 30 | r[4] >>> 2, er = r[4] << 30 | r[5] >>> 2, L = r[14] << 6 | r[15] >>> 26, G = r[15] << 6 | r[14] >>> 26, _ = r[25] << 11 | r[24] >>> 21, y = r[24] << 11 | r[25] >>> 21, q = r[34] << 15 | r[35] >>> 17, Q = r[35] << 15 | r[34] >>> 17, O = r[45] << 29 | r[44] >>> 3, D = r[44] << 29 | r[45] >>> 3, w = r[6] << 28 | r[7] >>> 4, b = r[7] << 28 | r[6] >>> 4, nr = r[17] << 23 | r[16] >>> 9, or = r[16] << 23 | r[17] >>> 9, j = r[26] << 25 | r[27] >>> 7, B = r[27] << 25 | r[26] >>> 7, A = r[36] << 21 | r[37] >>> 11, I = r[37] << 21 | r[36] >>> 11, Y = r[47] << 24 | r[46] >>> 8, rr = r[46] << 24 | r[47] >>> 8, K = r[8] << 27 | r[9] >>> 5, X = r[9] << 27 | r[8] >>> 5, U = r[18] << 20 | r[19] >>> 12, M = r[19] << 20 | r[18] >>> 12, ir = r[29] << 7 | r[28] >>> 25, ar = r[28] << 7 | r[29] >>> 25, F = r[38] << 8 | r[39] >>> 24, V = r[39] << 8 | r[38] >>> 24, m = r[48] << 14 | r[49] >>> 18, x = r[49] << 14 | r[48] >>> 18, r[0] = d ^ ~E & _, r[1] = p ^ ~N & y, r[10] = w ^ ~U & R, r[11] = b ^ ~M & S, r[20] = P ^ ~L & j, r[21] = k ^ ~G & B, r[30] = K ^ ~J & Z, r[31] = X ^ ~W & $, r[40] = tr ^ ~nr & ir, r[41] = er ^ ~or & ar, r[2] = E ^ ~_ & A, r[3] = N ^ ~y & I, r[12] = U ^ ~R & C, r[13] = M ^ ~S & T, r[22] = L ^ ~j & F, r[23] = G ^ ~B & V, r[32] = J ^ ~Z & q, r[33] = W ^ ~$ & Q, r[42] = nr ^ ~ir & sr, r[43] = or ^ ~ar & ur, r[4] = _ ^ ~A & m, r[5] = y ^ ~I & x, r[14] = R ^ ~C & O, r[15] = S ^ ~T & D, r[24] = j ^ ~F & z, r[25] = B ^ ~V & H, r[34] = Z ^ ~q & Y, r[35] = $ ^ ~Q & rr, r[44] = ir ^ ~sr & lr, r[45] = ar ^ ~ur & fr, r[6] = A ^ ~m & d, r[7] = I ^ ~x & p, r[16] = C ^ ~O & w, r[17] = T ^ ~D & b, r[26] = F ^ ~z & P, r[27] = V ^ ~H & k, r[36] = q ^ ~Y & K, r[37] = Q ^ ~rr & X, r[46] = sr ^ ~lr & tr, r[47] = ur ^ ~fr & er, r[8] = m ^ ~d & E, r[9] = x ^ ~p & N, r[18] = O ^ ~w & U, r[19] = D ^ ~b & M, r[28] = z ^ ~P & L, r[29] = H ^ ~k & G, r[38] = Y ^ ~K & J, r[39] = rr ^ ~X & W, r[48] = lr ^ ~tr & nr, r[49] = fr ^ ~er & or, r[0] ^= s[n], r[1] ^= s[n + 1]
					};
					if (o) r.exports = g;
					else
						for (p = 0; p < d.length; ++p) n[d[p]] = g[d[p]]
				}()
			}).call(this, e("./node_modules/process/browser.js"), e("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/ethers/utils/bytes.js": function(r, t, e) {
			"use strict";
			var n = this && this.__importStar || function(r) {
				if (r && r.__esModule) return r;
				var t = {};
				if (null != r)
					for (var e in r) Object.hasOwnProperty.call(r, e) && (t[e] = r[e]);
				return t.default = r, t
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = n(e("./node_modules/ethers/errors.js"));

			function i(r) {
				return !!r.toHexString
			}

			function a(r) {
				return r.slice ? r : (r.slice = function() {
					var t = Array.prototype.slice.call(arguments);
					return a(new Uint8Array(Array.prototype.slice.apply(r, t)))
				}, r)
			}

			function s(r) {
				if (!r || parseInt(String(r.length)) != r.length || "string" == typeof r) return !1;
				for (var t = 0; t < r.length; t++) {
					var e = r[t];
					if (e < 0 || e >= 256 || parseInt(String(e)) != e) return !1
				}
				return !0
			}

			function u(r) {
				if (null == r && o.throwError("cannot convert null value to array", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}), i(r) && (r = r.toHexString()), "string" == typeof r) {
					var t = r.match(/^(0x)?[0-9a-fA-F]*$/);
					t || o.throwError("invalid hexidecimal string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}), "0x" !== t[1] && o.throwError("hex string must have 0x prefix", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}), (r = r.substring(2)).length % 2 && (r = "0" + r);
					for (var e = [], n = 0; n < r.length; n += 2) e.push(parseInt(r.substr(n, 2), 16));
					return a(new Uint8Array(e))
				}
				return s(r) ? a(new Uint8Array(r)) : (o.throwError("invalid arrayify value", null, {
					arg: "value",
					value: r,
					type: typeof r
				}), null)
			}

			function l(r) {
				for (var t = [], e = 0, n = 0; n < r.length; n++) {
					var o = u(r[n]);
					t.push(o), e += o.length
				}
				var i = new Uint8Array(e),
					s = 0;
				for (n = 0; n < t.length; n++) i.set(t[n], s), s += t[n].length;
				return a(i)
			}

			function f(r, t) {
				return !("string" != typeof r || !r.match(/^0x[0-9A-Fa-f]*$/)) && (!t || r.length === 2 + 2 * t)
			}
			t.isHexable = i, t.isArrayish = s, t.arrayify = u, t.concat = l, t.stripZeros = function(r) {
				var t = u(r);
				if (0 === t.length) return t;
				for (var e = 0; 0 === t[e];) e++;
				return e && (t = t.slice(e)), t
			}, t.padZeros = function(r, t) {
				if (t < (r = u(r)).length) throw new Error("cannot pad");
				var e = new Uint8Array(t);
				return e.set(r, t - r.length), a(e)
			}, t.isHexString = f;
			var h = "0123456789abcdef";

			function c(r) {
				if (i(r)) return r.toHexString();
				if ("number" == typeof r) {
					r < 0 && o.throwError("cannot hexlify negative value", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}), r >= 9007199254740991 && o.throwError("out-of-range", o.NUMERIC_FAULT, {
						operartion: "hexlify",
						fault: "out-of-safe-range"
					});
					for (var t = ""; r;) t = h[15 & r] + t, r = Math.floor(r / 16);
					return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
				}
				if ("string" == typeof r) {
					var e = r.match(/^(0x)?[0-9a-fA-F]*$/);
					return e || o.throwError("invalid hexidecimal string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}), "0x" !== e[1] && o.throwError("hex string must have 0x prefix", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}), r.length % 2 && (r = "0x0" + r.substring(2)), r
				}
				if (s(r)) {
					for (var n = [], a = 0; a < r.length; a++) {
						var u = r[a];
						n.push(h[(240 & u) >> 4] + h[15 & u])
					}
					return "0x" + n.join("")
				}
				return o.throwError("invalid hexlify value", null, {
					arg: "value",
					value: r
				}), "never"
			}

			function v(r, t) {
				for (f(r) || o.throwError("invalid hex string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}); r.length < 2 * t + 2;) r = "0x0" + r.substring(2);
				return r
			}

			function g(r) {
				var t, e = 0,
					n = "0x",
					i = "0x";
				if ((t = r) && null != t.r && null != t.s) {
					null == r.v && null == r.recoveryParam && o.throwError("at least on of recoveryParam or v must be specified", o.INVALID_ARGUMENT, {
						argument: "signature",
						value: r
					}), n = v(r.r, 32), i = v(r.s, 32), "string" == typeof(e = r.v) && (e = parseInt(e, 16));
					var a = r.recoveryParam;
					null == a && null != r.v && (a = 1 - e % 2), e = 27 + a
				} else {
					var s = u(r);
					if (65 !== s.length) throw new Error("invalid signature");
					n = c(s.slice(0, 32)), i = c(s.slice(32, 64)), 27 !== (e = s[64]) && 28 !== e && (e = 27 + e % 2)
				}
				return {
					r: n,
					s: i,
					recoveryParam: e - 27,
					v: e
				}
			}
			t.hexlify = c, t.hexDataLength = function(r) {
				return f(r) && r.length % 2 == 0 ? (r.length - 2) / 2 : null
			}, t.hexDataSlice = function(r, t, e) {
				return f(r) || o.throwError("invalid hex data", o.INVALID_ARGUMENT, {
					arg: "value",
					value: r
				}), r.length % 2 != 0 && o.throwError("hex data length must be even", o.INVALID_ARGUMENT, {
					arg: "value",
					value: r
				}), t = 2 + 2 * t, null != e ? "0x" + r.substring(t, 2 + 2 * e) : "0x" + r.substring(t)
			}, t.hexStripZeros = function(r) {
				for (f(r) || o.throwError("invalid hex string", o.INVALID_ARGUMENT, {
						arg: "value",
						value: r
					}); r.length > 3 && "0x0" === r.substring(0, 3);) r = "0x" + r.substring(3);
				return r
			}, t.hexZeroPad = v, t.splitSignature = g, t.joinSignature = function(r) {
				return c(l([(r = g(r)).r, r.s, r.recoveryParam ? "0x1c" : "0x1b"]))
			}
		},
		"./node_modules/ethers/utils/keccak256.js": function(r, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = e("./node_modules/ethers/node_modules/js-sha3/src/sha3.js"),
				o = e("./node_modules/ethers/utils/bytes.js");
			t.keccak256 = function(r) {
				return "0x" + n.keccak_256(o.arrayify(r))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~5a9831fe.60694f12877aade7f6e9.js.map