// https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0.a2d072e3b21a6ea0b5db.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"], {
		"./node_modules/@ethersproject/logger/lib.esm/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return h
			}));
			const o = "logger/5.7.0";
			let n = !1,
				i = !1;
			const s = {
				debug: 1,
				default: 2,
				info: 2,
				warning: 3,
				error: 4,
				off: 5
			};
			let a = s.default,
				u = null;
			const l = function() {
				try {
					const e = [];
					if (["NFD", "NFC", "NFKD", "NFKC"].forEach(r => {
							try {
								if ("test" !== "test".normalize(r)) throw new Error("bad normalize")
							} catch (t) {
								e.push(r)
							}
						}), e.length) throw new Error("missing " + e.join(", "));
					if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation")
				} catch (e) {
					return e.message
				}
				return null
			}();
			var c, d;
			! function(e) {
				e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF"
			}(c || (c = {})),
			function(e) {
				e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED"
			}(d || (d = {}));
			const f = "0123456789abcdef";
			class h {
				constructor(e) {
					Object.defineProperty(this, "version", {
						enumerable: !0,
						value: e,
						writable: !1
					})
				}
				_log(e, r) {
					const t = e.toLowerCase();
					null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e), a > s[t] || console.log.apply(console, r)
				}
				debug(...e) {
					this._log(h.levels.DEBUG, e)
				}
				info(...e) {
					this._log(h.levels.INFO, e)
				}
				warn(...e) {
					this._log(h.levels.WARNING, e)
				}
				makeError(e, r, t) {
					if (i) return this.makeError("censored error", r, {});
					r || (r = h.errors.UNKNOWN_ERROR), t || (t = {});
					const o = [];
					Object.keys(t).forEach(e => {
						const r = t[e];
						try {
							if (r instanceof Uint8Array) {
								let t = "";
								for (let e = 0; e < r.length; e++) t += f[r[e] >> 4], t += f[15 & r[e]];
								o.push(e + "=Uint8Array(0x" + t + ")")
							} else o.push(e + "=" + JSON.stringify(r))
						} catch (a) {
							o.push(e + "=" + JSON.stringify(t[e].toString()))
						}
					}), o.push(`code=${r}`), o.push(`version=${this.version}`);
					const n = e;
					let s = "";
					switch (r) {
						case d.NUMERIC_FAULT: {
							s = "NUMERIC_FAULT";
							const r = e;
							switch (r) {
								case "overflow":
								case "underflow":
								case "division-by-zero":
									s += "-" + r;
									break;
								case "negative-power":
								case "negative-width":
									s += "-unsupported";
									break;
								case "unbound-bitwise-result":
									s += "-unbound-result"
							}
							break
						}
						case d.CALL_EXCEPTION:
						case d.INSUFFICIENT_FUNDS:
						case d.MISSING_NEW:
						case d.NONCE_EXPIRED:
						case d.REPLACEMENT_UNDERPRICED:
						case d.TRANSACTION_REPLACED:
						case d.UNPREDICTABLE_GAS_LIMIT:
							s = r
					}
					s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), o.length && (e += " (" + o.join(", ") + ")");
					const a = new Error(e);
					return a.reason = n, a.code = r, Object.keys(t).forEach((function(e) {
						a[e] = t[e]
					})), a
				}
				throwError(e, r, t) {
					throw this.makeError(e, r, t)
				}
				throwArgumentError(e, r, t) {
					return this.throwError(e, h.errors.INVALID_ARGUMENT, {
						argument: r,
						value: t
					})
				}
				assert(e, r, t, o) {
					e || this.throwError(r, t, o)
				}
				assertArgument(e, r, t, o) {
					e || this.throwArgumentError(r, t, o)
				}
				checkNormalize(e) {
					null == e && (e = "platform missing String.prototype.normalize"), l && this.throwError("platform missing String.prototype.normalize", h.errors.UNSUPPORTED_OPERATION, {
						operation: "String.prototype.normalize",
						form: l
					})
				}
				checkSafeUint53(e, r) {
					"number" == typeof e && (null == r && (r = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(r, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "out-of-safe-range",
						value: e
					}), e % 1 && this.throwError(r, h.errors.NUMERIC_FAULT, {
						operation: "checkSafeInteger",
						fault: "non-integer",
						value: e
					}))
				}
				checkArgumentCount(e, r, t) {
					t = t ? ": " + t : "", e < r && this.throwError("missing argument" + t, h.errors.MISSING_ARGUMENT, {
						count: e,
						expectedCount: r
					}), e > r && this.throwError("too many arguments" + t, h.errors.UNEXPECTED_ARGUMENT, {
						count: e,
						expectedCount: r
					})
				}
				checkNew(e, r) {
					e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: r.name
					})
				}
				checkAbstract(e, r) {
					e === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", h.errors.UNSUPPORTED_OPERATION, {
						name: e.name,
						operation: "new"
					}) : e !== Object && null != e || this.throwError("missing new", h.errors.MISSING_NEW, {
						name: r.name
					})
				}
				static globalLogger() {
					return u || (u = new h(o)), u
				}
				static setCensorship(e, r) {
					if (!e && r && this.globalLogger().throwError("cannot permanently disable censorship", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						}), n) {
						if (!e) return;
						this.globalLogger().throwError("error censorship permanent", h.errors.UNSUPPORTED_OPERATION, {
							operation: "setCensorship"
						})
					}
					i = !!e, n = !!r
				}
				static setLogLevel(e) {
					const r = s[e.toLowerCase()];
					null != r ? a = r : h.globalLogger().warn("invalid log level - " + e)
				}
				static from(e) {
					return new h(e)
				}
			}
			h.errors = d, h.levels = c
		},
		"./node_modules/dijkstrajs/dijkstra.js": function(e, r, t) {
			"use strict";
			var o = {
				single_source_shortest_paths: function(e, r, t) {
					var n = {},
						i = {};
					i[r] = 0;
					var s, a, u, l, c, d, f, h = o.PriorityQueue.make();
					for (h.push(r, 0); !h.empty();)
						for (u in a = (s = h.pop()).value, l = s.cost, c = e[a] || {}) c.hasOwnProperty(u) && (d = l + c[u], f = i[u], (void 0 === i[u] || f > d) && (i[u] = d, h.push(u, d), n[u] = a));
					if (void 0 !== t && void 0 === i[t]) {
						var g = ["Could not find a path from ", r, " to ", t, "."].join("");
						throw new Error(g)
					}
					return n
				},
				extract_shortest_path_from_predecessor_list: function(e, r) {
					for (var t = [], o = r; o;) t.push(o), e[o], o = e[o];
					return t.reverse(), t
				},
				find_path: function(e, r, t) {
					var n = o.single_source_shortest_paths(e, r, t);
					return o.extract_shortest_path_from_predecessor_list(n, t)
				},
				PriorityQueue: {
					make: function(e) {
						var r, t = o.PriorityQueue,
							n = {};
						for (r in e = e || {}, t) t.hasOwnProperty(r) && (n[r] = t[r]);
						return n.queue = [], n.sorter = e.sorter || t.default_sorter, n
					},
					default_sorter: function(e, r) {
						return e.cost - r.cost
					},
					push: function(e, r) {
						var t = {
							value: e,
							cost: r
						};
						this.queue.push(t), this.queue.sort(this.sorter)
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
		"./node_modules/qrcode/lib/browser.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/can-promise.js"),
				n = t("./node_modules/qrcode/lib/core/qrcode.js"),
				i = t("./node_modules/qrcode/lib/renderer/canvas.js"),
				s = t("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function a(e, r, t, i, s) {
				var a = [].slice.call(arguments, 1),
					u = a.length,
					l = "function" == typeof a[u - 1];
				if (!l && !o()) throw new Error("Callback required as last argument");
				if (!l) {
					if (u < 1) throw new Error("Too few arguments provided");
					return 1 === u ? (t = r, r = i = void 0) : 2 !== u || r.getContext || (i = t, t = r, r = void 0), new Promise((function(o, s) {
						try {
							var a = n.create(t, i);
							o(e(a, r, i))
						} catch (u) {
							s(u)
						}
					}))
				}
				if (u < 2) throw new Error("Too few arguments provided");
				2 === u ? (s = t, t = r, r = i = void 0) : 3 === u && (r.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = t, t = r, r = void 0));
				try {
					var c = n.create(t, i);
					s(null, e(c, r, i))
				} catch (d) {
					s(d)
				}
			}
			r.create = n.create, r.toCanvas = a.bind(null, i.render), r.toDataURL = a.bind(null, i.renderToDataURL), r.toString = a.bind(null, (function(e, r, t) {
				return s.render(e, t)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, r) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			r.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var r = Math.floor(e / 7) + 2, t = o(e), n = 145 === t ? 26 : 2 * Math.ceil((t - 13) / (2 * r - 2)), i = [t - 7], s = 1; s < r - 1; s++) i[s] = i[s - 1] - n;
				return i.push(6), i.reverse()
			}, r.getPositions = function(e) {
				for (var t = [], o = r.getRowColCoords(e), n = o.length, i = 0; i < n; i++)
					for (var s = 0; s < n; s++) 0 === i && 0 === s || 0 === i && s === n - 1 || i === n - 1 && 0 === s || t.push([o[i], o[s]]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/mode.js"),
				n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = o.ALPHANUMERIC, this.data = e
			}
			i.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var r;
				for (r = 0; r + 2 <= this.data.length; r += 2) {
					var t = 45 * n.indexOf(this.data[r]);
					t += n.indexOf(this.data[r + 1]), e.put(t, 11)
				}
				this.data.length % 2 && e.put(n.indexOf(this.data[r]), 6)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(e, r) {
			function t() {
				this.buffer = [], this.length = 0
			}
			t.prototype = {
				get: function(e) {
					var r = Math.floor(e / 8);
					return 1 == (this.buffer[r] >>> 7 - e % 8 & 1)
				},
				put: function(e, r) {
					for (var t = 0; t < r; t++) this.putBit(1 == (e >>> r - t - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					var r = Math.floor(this.length / 8);
					this.buffer.length <= r && this.buffer.push(0), e && (this.buffer[r] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = t
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function n(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = o.alloc(e * e), this.reservedBit = o.alloc(e * e)
			}
			n.prototype.set = function(e, r, t, o) {
				var n = e * this.size + r;
				this.data[n] = t, o && (this.reservedBit[n] = !0)
			}, n.prototype.get = function(e, r) {
				return this.data[e * this.size + r]
			}, n.prototype.xor = function(e, r, t) {
				this.data[e * this.size + r] ^= t
			}, n.prototype.isReserved = function(e, r) {
				return this.reservedBit[e * this.size + r]
			}, e.exports = n
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = t("./node_modules/qrcode/lib/core/mode.js");

			function i(e) {
				this.mode = n.BYTE, this.data = o.from(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (var r = 0, t = this.data.length; r < t; r++) e.put(this.data[r], 8)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			r.getBlocksCount = function(e, r) {
				switch (r) {
					case o.L:
						return n[4 * (e - 1) + 0];
					case o.M:
						return n[4 * (e - 1) + 1];
					case o.Q:
						return n[4 * (e - 1) + 2];
					case o.H:
						return n[4 * (e - 1) + 3];
					default:
						return
				}
			}, r.getTotalCodewordsCount = function(e, r) {
				switch (r) {
					case o.L:
						return i[4 * (e - 1) + 0];
					case o.M:
						return i[4 * (e - 1) + 1];
					case o.Q:
						return i[4 * (e - 1) + 2];
					case o.H:
						return i[4 * (e - 1) + 3];
					default:
						return
				}
			}
		},
		"./node_modules/qrcode/lib/core/error-correction-level.js": function(e, r) {
			r.L = {
				bit: 1
			}, r.M = {
				bit: 0
			}, r.Q = {
				bit: 3
			}, r.H = {
				bit: 2
			}, r.isValid = function(e) {
				return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
			}, r.from = function(e, t) {
				if (r.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "l":
							case "low":
								return r.L;
							case "m":
							case "medium":
								return r.M;
							case "q":
							case "quartile":
								return r.Q;
							case "h":
							case "high":
								return r.H;
							default:
								throw new Error("Unknown EC Level: " + e)
						}
					}(e)
				} catch (o) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			r.getPositions = function(e) {
				var r = o(e);
				return [
					[0, 0],
					[r - 7, 0],
					[0, r - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/utils.js"),
				n = o.getBCHDigit(1335);
			r.getEncodedBits = function(e, r) {
				for (var t = e.bit << 3 | r, i = t << 10; o.getBCHDigit(i) - n >= 0;) i ^= 1335 << o.getBCHDigit(i) - n;
				return 21522 ^ (t << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = o.alloc(512),
				i = o.alloc(256);
			! function() {
				for (var e = 1, r = 0; r < 255; r++) n[r] = e, i[e] = r, 256 & (e <<= 1) && (e ^= 285);
				for (r = 255; r < 512; r++) n[r] = n[r - 255]
			}(), r.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return i[e]
			}, r.exp = function(e) {
				return n[e]
			}, r.mul = function(e, r) {
				return 0 === e || 0 === r ? 0 : n[i[e] + i[r]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/mode.js"),
				n = t("./node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = o.KANJI, this.data = e
			}
			i.getBitsLength = function(e) {
				return 13 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var r;
				for (r = 0; r < this.data.length; r++) {
					var t = n.toSJIS(this.data[r]);
					if (t >= 33088 && t <= 40956) t -= 33088;
					else {
						if (!(t >= 57408 && t <= 60351)) throw new Error("Invalid SJIS character: " + this.data[r] + "\nMake sure your charset is UTF-8");
						t -= 49472
					}
					t = 192 * (t >>> 8 & 255) + (255 & t), e.put(t, 13)
				}
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/mask-pattern.js": function(e, r) {
			r.Patterns = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			};
			var t = 3,
				o = 3,
				n = 40,
				i = 10;

			function s(e, t, o) {
				switch (e) {
					case r.Patterns.PATTERN000:
						return (t + o) % 2 == 0;
					case r.Patterns.PATTERN001:
						return t % 2 == 0;
					case r.Patterns.PATTERN010:
						return o % 3 == 0;
					case r.Patterns.PATTERN011:
						return (t + o) % 3 == 0;
					case r.Patterns.PATTERN100:
						return (Math.floor(t / 2) + Math.floor(o / 3)) % 2 == 0;
					case r.Patterns.PATTERN101:
						return t * o % 2 + t * o % 3 == 0;
					case r.Patterns.PATTERN110:
						return (t * o % 2 + t * o % 3) % 2 == 0;
					case r.Patterns.PATTERN111:
						return (t * o % 3 + (t + o) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			r.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, r.from = function(e) {
				return r.isValid(e) ? parseInt(e, 10) : void 0
			}, r.getPenaltyN1 = function(e) {
				for (var r = e.size, o = 0, n = 0, i = 0, s = null, a = null, u = 0; u < r; u++) {
					n = i = 0, s = a = null;
					for (var l = 0; l < r; l++) {
						var c = e.get(u, l);
						c === s ? n++ : (n >= 5 && (o += t + (n - 5)), s = c, n = 1), (c = e.get(l, u)) === a ? i++ : (i >= 5 && (o += t + (i - 5)), a = c, i = 1)
					}
					n >= 5 && (o += t + (n - 5)), i >= 5 && (o += t + (i - 5))
				}
				return o
			}, r.getPenaltyN2 = function(e) {
				for (var r = e.size, t = 0, n = 0; n < r - 1; n++)
					for (var i = 0; i < r - 1; i++) {
						var s = e.get(n, i) + e.get(n, i + 1) + e.get(n + 1, i) + e.get(n + 1, i + 1);
						4 !== s && 0 !== s || t++
					}
				return t * o
			}, r.getPenaltyN3 = function(e) {
				for (var r = e.size, t = 0, o = 0, i = 0, s = 0; s < r; s++) {
					o = i = 0;
					for (var a = 0; a < r; a++) o = o << 1 & 2047 | e.get(s, a), a >= 10 && (1488 === o || 93 === o) && t++, i = i << 1 & 2047 | e.get(a, s), a >= 10 && (1488 === i || 93 === i) && t++
				}
				return t * n
			}, r.getPenaltyN4 = function(e) {
				for (var r = 0, t = e.data.length, o = 0; o < t; o++) r += e.data[o];
				return Math.abs(Math.ceil(100 * r / t / 5) - 10) * i
			}, r.applyMask = function(e, r) {
				for (var t = r.size, o = 0; o < t; o++)
					for (var n = 0; n < t; n++) r.isReserved(n, o) || r.xor(n, o, s(e, n, o))
			}, r.getBestMask = function(e, t) {
				for (var o = Object.keys(r.Patterns).length, n = 0, i = 1 / 0, s = 0; s < o; s++) {
					t(s), r.applyMask(s, e);
					var a = r.getPenaltyN1(e) + r.getPenaltyN2(e) + r.getPenaltyN3(e) + r.getPenaltyN4(e);
					r.applyMask(s, e), a < i && (i = a, n = s)
				}
				return n
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/version-check.js"),
				n = t("./node_modules/qrcode/lib/core/regex.js");
			r.NUMERIC = {
				id: "Numeric",
				bit: 1,
				ccBits: [10, 12, 14]
			}, r.ALPHANUMERIC = {
				id: "Alphanumeric",
				bit: 2,
				ccBits: [9, 11, 13]
			}, r.BYTE = {
				id: "Byte",
				bit: 4,
				ccBits: [8, 16, 16]
			}, r.KANJI = {
				id: "Kanji",
				bit: 8,
				ccBits: [8, 10, 12]
			}, r.MIXED = {
				bit: -1
			}, r.getCharCountIndicator = function(e, r) {
				if (!e.ccBits) throw new Error("Invalid mode: " + e);
				if (!o.isValid(r)) throw new Error("Invalid version: " + r);
				return r >= 1 && r < 10 ? e.ccBits[0] : r < 27 ? e.ccBits[1] : e.ccBits[2]
			}, r.getBestModeForData = function(e) {
				return n.testNumeric(e) ? r.NUMERIC : n.testAlphanumeric(e) ? r.ALPHANUMERIC : n.testKanji(e) ? r.KANJI : r.BYTE
			}, r.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, r.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, r.from = function(e, t) {
				if (r.isValid(e)) return e;
				try {
					return function(e) {
						if ("string" != typeof e) throw new Error("Param is not a string");
						switch (e.toLowerCase()) {
							case "numeric":
								return r.NUMERIC;
							case "alphanumeric":
								return r.ALPHANUMERIC;
							case "kanji":
								return r.KANJI;
							case "byte":
								return r.BYTE;
							default:
								throw new Error("Unknown mode: " + e)
						}
					}(e)
				} catch (o) {
					return t
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/mode.js");

			function n(e) {
				this.mode = o.NUMERIC, this.data = e.toString()
			}
			n.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, n.prototype.getLength = function() {
				return this.data.length
			}, n.prototype.getBitsLength = function() {
				return n.getBitsLength(this.data.length)
			}, n.prototype.write = function(e) {
				var r, t, o;
				for (r = 0; r + 3 <= this.data.length; r += 3) t = this.data.substr(r, 3), o = parseInt(t, 10), e.put(o, 10);
				var n = this.data.length - r;
				n > 0 && (t = this.data.substr(r), o = parseInt(t, 10), e.put(o, 3 * n + 1))
			}, e.exports = n
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = t("./node_modules/qrcode/lib/core/galois-field.js");
			r.mul = function(e, r) {
				for (var t = o.alloc(e.length + r.length - 1), i = 0; i < e.length; i++)
					for (var s = 0; s < r.length; s++) t[i + s] ^= n.mul(e[i], r[s]);
				return t
			}, r.mod = function(e, r) {
				for (var t = o.from(e); t.length - r.length >= 0;) {
					for (var i = t[0], s = 0; s < r.length; s++) t[s] ^= n.mul(r[s], i);
					for (var a = 0; a < t.length && 0 === t[a];) a++;
					t = t.slice(a)
				}
				return t
			}, r.generateECPolynomial = function(e) {
				for (var t = o.from([1]), i = 0; i < e; i++) t = r.mul(t, [1, n.exp(i)]);
				return t
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = t("./node_modules/qrcode/lib/core/utils.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/bit-buffer.js"),
				a = t("./node_modules/qrcode/lib/core/bit-matrix.js"),
				u = t("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				l = t("./node_modules/qrcode/lib/core/finder-pattern.js"),
				c = t("./node_modules/qrcode/lib/core/mask-pattern.js"),
				d = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = t("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = t("./node_modules/qrcode/lib/core/version.js"),
				g = t("./node_modules/qrcode/lib/core/format-info.js"),
				m = t("./node_modules/qrcode/lib/core/mode.js"),
				p = t("./node_modules/qrcode/lib/core/segments.js"),
				E = t("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, r, t) {
				var o, n, i = e.size,
					s = g.getEncodedBits(r, t);
				for (o = 0; o < 15; o++) n = 1 == (s >> o & 1), o < 6 ? e.set(o, 8, n, !0) : o < 8 ? e.set(o + 1, 8, n, !0) : e.set(i - 15 + o, 8, n, !0), o < 8 ? e.set(8, i - o - 1, n, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, n, !0) : e.set(8, 15 - o - 1, n, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function _(e, r, t) {
				var i = new s;
				t.forEach((function(r) {
					i.put(r.mode.bit, 4), i.put(r.getLength(), m.getCharCountIndicator(r.mode, e)), r.write(i)
				}));
				var a = 8 * (n.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, r));
				for (i.getLengthInBits() + 4 <= a && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var u = (a - i.getLengthInBits()) / 8, l = 0; l < u; l++) i.put(l % 2 ? 17 : 236, 8);
				return function(e, r, t) {
					for (var i = n.getSymbolTotalCodewords(r), s = d.getTotalCodewordsCount(r, t), a = i - s, u = d.getBlocksCount(r, t), l = u - i % u, c = Math.floor(i / u), h = Math.floor(a / u), g = h + 1, m = c - h, p = new f(m), E = 0, v = new Array(u), _ = new Array(u), b = 0, w = o.from(e.buffer), y = 0; y < u; y++) {
						var N = y < l ? h : g;
						v[y] = w.slice(E, E + N), _[y] = p.encode(v[y]), E += N, b = Math.max(b, N)
					}
					var R, A, T = o.alloc(i),
						I = 0;
					for (R = 0; R < b; R++)
						for (A = 0; A < u; A++) R < v[A].length && (T[I++] = v[A][R]);
					for (R = 0; R < m; R++)
						for (A = 0; A < u; A++) T[I++] = _[A][R];
					return T
				}(i, e, r)
			}

			function b(e, r, t, o) {
				var i;
				if (E(e)) i = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var s = r;
					if (!s) {
						var d = p.rawSplit(e);
						s = h.getBestVersionForData(d, t)
					}
					i = p.fromString(e, s || 40)
				}
				var f = h.getBestVersionForData(i, t);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (r) {
					if (r < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else r = f;
				var g = _(r, t, i),
					m = n.getSymbolSize(r),
					b = new a(m);
				return function(e, r) {
						for (var t = e.size, o = l.getPositions(r), n = 0; n < o.length; n++)
							for (var i = o[n][0], s = o[n][1], a = -1; a <= 7; a++)
								if (!(i + a <= -1 || t <= i + a))
									for (var u = -1; u <= 7; u++) s + u <= -1 || t <= s + u || (a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && u >= 2 && u <= 4 ? e.set(i + a, s + u, !0, !0) : e.set(i + a, s + u, !1, !0))
					}(b, r),
					function(e) {
						for (var r = e.size, t = 8; t < r - 8; t++) {
							var o = t % 2 == 0;
							e.set(t, 6, o, !0), e.set(6, t, o, !0)
						}
					}(b),
					function(e, r) {
						for (var t = u.getPositions(r), o = 0; o < t.length; o++)
							for (var n = t[o][0], i = t[o][1], s = -2; s <= 2; s++)
								for (var a = -2; a <= 2; a++) - 2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? e.set(n + s, i + a, !0, !0) : e.set(n + s, i + a, !1, !0)
					}(b, r), v(b, t, 0), r >= 7 && function(e, r) {
						for (var t, o, n, i = e.size, s = h.getEncodedBits(r), a = 0; a < 18; a++) t = Math.floor(a / 3), o = a % 3 + i - 8 - 3, n = 1 == (s >> a & 1), e.set(t, o, n, !0), e.set(o, t, n, !0)
					}(b, r),
					function(e, r) {
						for (var t = e.size, o = -1, n = t - 1, i = 7, s = 0, a = t - 1; a > 0; a -= 2)
							for (6 === a && a--;;) {
								for (var u = 0; u < 2; u++)
									if (!e.isReserved(n, a - u)) {
										var l = !1;
										s < r.length && (l = 1 == (r[s] >>> i & 1)), e.set(n, a - u, l), -1 === --i && (s++, i = 7)
									} if ((n += o) < 0 || t <= n) {
									n -= o, o = -o;
									break
								}
							}
					}(b, g), isNaN(o) && (o = c.getBestMask(b, v.bind(null, b, t))), c.applyMask(o, b), v(b, t, o), {
						modules: b,
						version: r,
						errorCorrectionLevel: t,
						maskPattern: o,
						segments: i
					}
			}
			r.create = function(e, r) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var t, o, s = i.M;
				return void 0 !== r && (s = i.from(r.errorCorrectionLevel, i.M), t = h.from(r.version), o = c.from(r.maskPattern), r.toSJISFunc && n.setToSJISFunction(r.toSJISFunc)), b(e, t, s, o)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = t("./node_modules/qrcode/lib/core/polynomial.js"),
				i = t("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function s(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			s.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = n.generateECPolynomial(this.degree)
			}, s.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var r = o.alloc(this.degree),
					t = i.concat([e, r], e.length + this.degree),
					s = n.mod(t, this.genPoly),
					a = this.degree - s.length;
				if (a > 0) {
					var u = o.alloc(this.degree);
					return s.copy(u, a), u
				}
				return s
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, r) {
			var t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (t = t.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			r.KANJI = new RegExp(t, "g"), r.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), r.BYTE = new RegExp(o, "g"), r.NUMERIC = new RegExp("[0-9]+", "g"), r.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var n = new RegExp("^" + t + "$"),
				i = new RegExp("^[0-9]+$"),
				s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			r.testKanji = function(e) {
				return n.test(e)
			}, r.testNumeric = function(e) {
				return i.test(e)
			}, r.testAlphanumeric = function(e) {
				return s.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/mode.js"),
				n = t("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = t("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				s = t("./node_modules/qrcode/lib/core/byte-data.js"),
				a = t("./node_modules/qrcode/lib/core/kanji-data.js"),
				u = t("./node_modules/qrcode/lib/core/regex.js"),
				l = t("./node_modules/qrcode/lib/core/utils.js"),
				c = t("./node_modules/dijkstrajs/dijkstra.js");

			function d(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function f(e, r, t) {
				for (var o, n = []; null !== (o = e.exec(t));) n.push({
					data: o[0],
					index: o.index,
					mode: r,
					length: o[0].length
				});
				return n
			}

			function h(e) {
				var r, t, n = f(u.NUMERIC, o.NUMERIC, e),
					i = f(u.ALPHANUMERIC, o.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (r = f(u.BYTE, o.BYTE, e), t = f(u.KANJI, o.KANJI, e)) : (r = f(u.BYTE_KANJI, o.BYTE, e), t = []), n.concat(i, r, t).sort((function(e, r) {
					return e.index - r.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function g(e, r) {
				switch (r) {
					case o.NUMERIC:
						return n.getBitsLength(e);
					case o.ALPHANUMERIC:
						return i.getBitsLength(e);
					case o.KANJI:
						return a.getBitsLength(e);
					case o.BYTE:
						return s.getBitsLength(e)
				}
			}

			function m(e, r) {
				var t, u = o.getBestModeForData(e);
				if ((t = o.from(r, u)) !== o.BYTE && t.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + o.toString(t) + ".\n Suggested mode is: " + o.toString(u));
				switch (t !== o.KANJI || l.isKanjiModeEnabled() || (t = o.BYTE), t) {
					case o.NUMERIC:
						return new n(e);
					case o.ALPHANUMERIC:
						return new i(e);
					case o.KANJI:
						return new a(e);
					case o.BYTE:
						return new s(e)
				}
			}
			r.fromArray = function(e) {
				return e.reduce((function(e, r) {
					return "string" == typeof r ? e.push(m(r, null)) : r.data && e.push(m(r.data, r.mode)), e
				}), [])
			}, r.fromString = function(e, t) {
				for (var n = function(e, r) {
						for (var t = {}, n = {
								start: {}
							}, i = ["start"], s = 0; s < e.length; s++) {
							for (var a = e[s], u = [], l = 0; l < a.length; l++) {
								var c = a[l],
									d = "" + s + l;
								u.push(d), t[d] = {
									node: c,
									lastCount: 0
								}, n[d] = {};
								for (var f = 0; f < i.length; f++) {
									var h = i[f];
									t[h] && t[h].node.mode === c.mode ? (n[h][d] = g(t[h].lastCount + c.length, c.mode) - g(t[h].lastCount, c.mode), t[h].lastCount += c.length) : (t[h] && (t[h].lastCount = c.length), n[h][d] = g(c.length, c.mode) + 4 + o.getCharCountIndicator(c.mode, r))
								}
							}
							i = u
						}
						for (f = 0; f < i.length; f++) n[i[f]].end = 0;
						return {
							map: n,
							table: t
						}
					}(function(e) {
						for (var r = [], t = 0; t < e.length; t++) {
							var n = e[t];
							switch (n.mode) {
								case o.NUMERIC:
									r.push([n, {
										data: n.data,
										mode: o.ALPHANUMERIC,
										length: n.length
									}, {
										data: n.data,
										mode: o.BYTE,
										length: n.length
									}]);
									break;
								case o.ALPHANUMERIC:
									r.push([n, {
										data: n.data,
										mode: o.BYTE,
										length: n.length
									}]);
									break;
								case o.KANJI:
									r.push([n, {
										data: n.data,
										mode: o.BYTE,
										length: d(n.data)
									}]);
									break;
								case o.BYTE:
									r.push([{
										data: n.data,
										mode: o.BYTE,
										length: d(n.data)
									}])
							}
						}
						return r
					}(h(e, l.isKanjiModeEnabled())), t), i = c.find_path(n.map, "start", "end"), s = [], a = 1; a < i.length - 1; a++) s.push(n.table[i[a]].node);
				return r.fromArray(function(e) {
					return e.reduce((function(e, r) {
						var t = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return t && t.mode === r.mode ? (e[e.length - 1].data += r.data, e) : (e.push(r), e)
					}), [])
				}(s))
			}, r.rawSplit = function(e) {
				return r.fromArray(h(e, l.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, r) {
			var t, o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			r.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, r.getSymbolTotalCodewords = function(e) {
				return o[e]
			}, r.getBCHDigit = function(e) {
				for (var r = 0; 0 !== e;) r++, e >>>= 1;
				return r
			}, r.setToSJISFunction = function(e) {
				if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
				t = e
			}, r.isKanjiModeEnabled = function() {
				return void 0 !== t
			}, r.toSJIS = function(e) {
				return t(e)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(e, r) {
			r.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/core/utils.js"),
				n = t("./node_modules/qrcode/lib/core/error-correction-code.js"),
				i = t("./node_modules/qrcode/lib/core/error-correction-level.js"),
				s = t("./node_modules/qrcode/lib/core/mode.js"),
				a = t("./node_modules/qrcode/lib/core/version-check.js"),
				u = t("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = o.getBCHDigit(7973);

			function c(e, r) {
				return s.getCharCountIndicator(e, r) + 4
			}

			function d(e, r) {
				var t = 0;
				return e.forEach((function(e) {
					var o = c(e.mode, r);
					t += o + e.getBitsLength()
				})), t
			}
			r.from = function(e, r) {
				return a.isValid(e) ? parseInt(e, 10) : r
			}, r.getCapacity = function(e, r, t) {
				if (!a.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === t && (t = s.BYTE);
				var i = 8 * (o.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, r));
				if (t === s.MIXED) return i;
				var u = i - c(t, e);
				switch (t) {
					case s.NUMERIC:
						return Math.floor(u / 10 * 3);
					case s.ALPHANUMERIC:
						return Math.floor(u / 11 * 2);
					case s.KANJI:
						return Math.floor(u / 13);
					case s.BYTE:
					default:
						return Math.floor(u / 8)
				}
			}, r.getBestVersionForData = function(e, t) {
				var o, n = i.from(t, i.M);
				if (u(e)) {
					if (e.length > 1) return function(e, t) {
						for (var o = 1; o <= 40; o++) {
							if (d(e, o) <= r.getCapacity(o, t, s.MIXED)) return o
						}
					}(e, n);
					if (0 === e.length) return 1;
					o = e[0]
				} else o = e;
				return function(e, t, o) {
					for (var n = 1; n <= 40; n++)
						if (t <= r.getCapacity(n, o, e)) return n
				}(o.mode, o.getLength(), n)
			}, r.getEncodedBits = function(e) {
				if (!a.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var r = e << 12; o.getBCHDigit(r) - l >= 0;) r ^= 7973 << o.getBCHDigit(r) - l;
				return e << 12 | r
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/renderer/utils.js");
			r.render = function(e, r, t) {
				var n = t,
					i = r;
				void 0 !== n || r && r.getContext || (n = r, r = void 0), r || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), n = o.getOptions(n);
				var s = o.getImageWidth(e.modules.size, n),
					a = i.getContext("2d"),
					u = a.createImageData(s, s);
				return o.qrToImageData(u.data, e, n),
					function(e, r, t) {
						e.clearRect(0, 0, r.width, r.height), r.style || (r.style = {}), r.height = t, r.width = t, r.style.height = t + "px", r.style.width = t + "px"
					}(a, i, s), a.putImageData(u, 0, 0), i
			}, r.renderToDataURL = function(e, t, o) {
				var n = o;
				void 0 !== n || t && t.getContext || (n = t, t = void 0), n || (n = {});
				var i = r.render(e, t, n),
					s = n.type || "image/png",
					a = n.rendererOpts || {};
				return i.toDataURL(s, a.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, r, t) {
			var o = t("./node_modules/qrcode/lib/renderer/utils.js");

			function n(e, r) {
				var t = e.a / 255,
					o = r + '="' + e.hex + '"';
				return t < 1 ? o + " " + r + '-opacity="' + t.toFixed(2).slice(1) + '"' : o
			}

			function i(e, r, t) {
				var o = e + r;
				return void 0 !== t && (o += " " + t), o
			}
			r.render = function(e, r, t) {
				var s = o.getOptions(r),
					a = e.modules.size,
					u = e.modules.data,
					l = a + 2 * s.margin,
					c = s.color.light.a ? "<path " + n(s.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					d = "<path " + n(s.color.dark, "stroke") + ' d="' + function(e, r, t) {
						for (var o = "", n = 0, s = !1, a = 0, u = 0; u < e.length; u++) {
							var l = Math.floor(u % r),
								c = Math.floor(u / r);
							l || s || (s = !0), e[u] ? (a++, u > 0 && l > 0 && e[u - 1] || (o += s ? i("M", l + t, .5 + c + t) : i("m", n, 0), n = 0, s = !1), l + 1 < r && e[u + 1] || (o += i("h", a), a = 0)) : n++
						}
						return o
					}(u, a, s.margin) + '"/>',
					f = 'viewBox="0 0 ' + l + " " + l + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + c + d + "</svg>\n";
				return "function" == typeof t && t(null, h), h
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(e, r) {
			function t(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				var r = e.slice().replace("#", "").split("");
				if (r.length < 3 || 5 === r.length || r.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== r.length && 4 !== r.length || (r = Array.prototype.concat.apply([], r.map((function(e) {
					return [e, e]
				})))), 6 === r.length && r.push("F", "F");
				var t = parseInt(r.join(""), 16);
				return {
					r: t >> 24 & 255,
					g: t >> 16 & 255,
					b: t >> 8 & 255,
					a: 255 & t,
					hex: "#" + r.slice(0, 6).join("")
				}
			}
			r.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				var r = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					o = e.width && e.width >= 21 ? e.width : void 0,
					n = e.scale || 4;
				return {
					width: o,
					scale: o ? 4 : n,
					margin: r,
					color: {
						dark: t(e.color.dark || "#000000ff"),
						light: t(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, r.getScale = function(e, r) {
				return r.width && r.width >= e + 2 * r.margin ? r.width / (e + 2 * r.margin) : r.scale
			}, r.getImageWidth = function(e, t) {
				var o = r.getScale(e, t);
				return Math.floor((e + 2 * t.margin) * o)
			}, r.qrToImageData = function(e, t, o) {
				for (var n = t.modules.size, i = t.modules.data, s = r.getScale(n, o), a = Math.floor((n + 2 * o.margin) * s), u = o.margin * s, l = [o.color.light, o.color.dark], c = 0; c < a; c++)
					for (var d = 0; d < a; d++) {
						var f = 4 * (c * a + d),
							h = o.color.light;
						if (c >= u && d >= u && c < a - u && d < a - u) h = l[i[Math.floor((c - u) / s) * n + Math.floor((d - u) / s)] ? 1 : 0];
						e[f++] = h.r, e[f++] = h.g, e[f++] = h.b, e[f] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, r, t) {
			"use strict";
			var o = t("./node_modules/qrcode/node_modules/isarray/index.js");
			i.TYPED_ARRAY_SUPPORT = function() {
				try {
					var e = new Uint8Array(1);
					return e.__proto__ = {
						__proto__: Uint8Array.prototype,
						foo: function() {
							return 42
						}
					}, 42 === e.foo()
				} catch (r) {
					return !1
				}
			}();
			var n = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(e, r, t) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? u(this, e) : function(e, r, t, o) {
					if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer) return function(e, r, t, o) {
						if (t < 0 || r.byteLength < t) throw new RangeError("'offset' is out of bounds");
						if (r.byteLength < t + (o || 0)) throw new RangeError("'length' is out of bounds");
						var n;
						n = void 0 === t && void 0 === o ? new Uint8Array(r) : void 0 === o ? new Uint8Array(r, t) : new Uint8Array(r, t, o);
						i.TYPED_ARRAY_SUPPORT ? n.__proto__ = i.prototype : n = l(e, n);
						return n
					}(e, r, t, o);
					if ("string" == typeof r) return function(e, r) {
						var t = 0 | d(r),
							o = a(e, t),
							n = o.write(r);
						n !== t && (o = o.slice(0, n));
						return o
					}(e, r);
					return function(e, r) {
						if (i.isBuffer(r)) {
							var t = 0 | s(r.length),
								o = a(e, t);
							return 0 === o.length ? o : (r.copy(o, 0, 0, t), o)
						}
						if (r) {
							if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || (n = r.length) != n ? a(e, 0) : l(e, r);
							if ("Buffer" === r.type && Array.isArray(r.data)) return l(e, r.data)
						}
						var n;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, r)
				}(this, e, r, t) : new i(e, r, t)
			}

			function s(e) {
				if (e >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
				return 0 | e
			}

			function a(e, r) {
				var t;
				return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = i.prototype : (null === (t = e) && (t = new i(r)), t.length = r), t
			}

			function u(e, r) {
				var t = a(e, r < 0 ? 0 : 0 | s(r));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var o = 0; o < r; ++o) t[o] = 0;
				return t
			}

			function l(e, r) {
				for (var t = r.length < 0 ? 0 : 0 | s(r.length), o = a(e, t), n = 0; n < t; n += 1) o[n] = 255 & r[n];
				return o
			}

			function c(e, r) {
				var t;
				r = r || 1 / 0;
				for (var o = e.length, n = null, i = [], s = 0; s < o; ++s) {
					if ((t = e.charCodeAt(s)) > 55295 && t < 57344) {
						if (!n) {
							if (t > 56319) {
								(r -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (s + 1 === o) {
								(r -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							n = t;
							continue
						}
						if (t < 56320) {
							(r -= 3) > -1 && i.push(239, 191, 189), n = t;
							continue
						}
						t = 65536 + (n - 55296 << 10 | t - 56320)
					} else n && (r -= 3) > -1 && i.push(239, 191, 189);
					if (n = null, t < 128) {
						if ((r -= 1) < 0) break;
						i.push(t)
					} else if (t < 2048) {
						if ((r -= 2) < 0) break;
						i.push(t >> 6 | 192, 63 & t | 128)
					} else if (t < 65536) {
						if ((r -= 3) < 0) break;
						i.push(t >> 12 | 224, t >> 6 & 63 | 128, 63 & t | 128)
					} else {
						if (!(t < 1114112)) throw new Error("Invalid code point");
						if ((r -= 4) < 0) break;
						i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, 63 & t | 128)
					}
				}
				return i
			}

			function d(e) {
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : c(e).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(e, r, t) {
				void 0 === r ? (t = this.length, r = 0) : void 0 === t && "string" == typeof r ? (t = this.length, r = 0) : isFinite(r) && (r |= 0, isFinite(t) ? t |= 0 : t = void 0);
				var o = this.length - r;
				if ((void 0 === t || t > o) && (t = o), e.length > 0 && (t < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, r, t, o) {
					return function(e, r, t, o) {
						for (var n = 0; n < o && !(n + t >= r.length || n >= e.length); ++n) r[n + t] = e[n];
						return n
					}(c(r, e.length - t), e, t, o)
				}(this, e, r, t)
			}, i.prototype.slice = function(e, r) {
				var t, o = this.length;
				if ((e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), (r = void 0 === r ? o : ~~r) < 0 ? (r += o) < 0 && (r = 0) : r > o && (r = o), r < e && (r = e), i.TYPED_ARRAY_SUPPORT)(t = this.subarray(e, r)).__proto__ = i.prototype;
				else {
					var n = r - e;
					t = new i(n, void 0);
					for (var s = 0; s < n; ++s) t[s] = this[s + e]
				}
				return t
			}, i.prototype.copy = function(e, r, t, o) {
				if (t || (t = 0), o || 0 === o || (o = this.length), r >= e.length && (r = e.length), r || (r = 0), o > 0 && o < t && (o = t), o === t) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (r < 0) throw new RangeError("targetStart out of bounds");
				if (t < 0 || t >= this.length) throw new RangeError("sourceStart out of bounds");
				if (o < 0) throw new RangeError("sourceEnd out of bounds");
				o > this.length && (o = this.length), e.length - r < o - t && (o = e.length - r + t);
				var n, s = o - t;
				if (this === e && t < r && r < o)
					for (n = s - 1; n >= 0; --n) e[n + r] = this[n + t];
				else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (n = 0; n < s; ++n) e[n + r] = this[n + t];
				else Uint8Array.prototype.set.call(e, this.subarray(t, t + s), r);
				return s
			}, i.prototype.fill = function(e, r, t) {
				if ("string" == typeof e) {
					if ("string" == typeof r ? (r = 0, t = this.length) : "string" == typeof t && (t = this.length), 1 === e.length) {
						var o = e.charCodeAt(0);
						o < 256 && (e = o)
					}
				} else "number" == typeof e && (e &= 255);
				if (r < 0 || this.length < r || this.length < t) throw new RangeError("Out of range index");
				if (t <= r) return this;
				var n;
				if (r >>>= 0, t = void 0 === t ? this.length : t >>> 0, e || (e = 0), "number" == typeof e)
					for (n = r; n < t; ++n) this[n] = e;
				else {
					var s = i.isBuffer(e) ? e : new i(e),
						a = s.length;
					for (n = 0; n < t - r; ++n) this[n + r] = s[n % a]
				}
				return this
			}, i.concat = function(e, r) {
				if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return a(null, 0);
				var t;
				if (void 0 === r)
					for (r = 0, t = 0; t < e.length; ++t) r += e[t].length;
				var n = u(null, r),
					s = 0;
				for (t = 0; t < e.length; ++t) {
					var l = e[t];
					if (!i.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(n, s), s += l.length
				}
				return n
			}, i.byteLength = d, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var r = new i(e);
				return r.fill(0), r
			}, e.exports.from = function(e) {
				return new i(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, r) {
			var t = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == t.call(e)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0.a2d072e3b21a6ea0b5db.js.map