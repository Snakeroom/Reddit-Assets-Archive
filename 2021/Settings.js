// https://www.redditstatic.com/desktop2x/Settings.27b6f9b0a046006f2947.js
// Retrieved at 5/3/2021, 10:10:05 AM by Reddit Dataminer v1.0.0
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

			function y(e, t, n) {
				var a = new o;
				n.forEach((function(t) {
					a.put(t.mode.bit, 4), a.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(a)
				}));
				var i = 8 * (s.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (a.getLengthInBits() + 4 <= i && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
				for (var c = (i - a.getLengthInBits()) / 8, l = 0; l < c; l++) a.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var a = s.getSymbolTotalCodewords(t), o = u.getTotalCodewordsCount(t, n), i = a - o, c = u.getBlocksCount(t, n), l = c - a % c, d = Math.floor(a / c), p = Math.floor(i / c), b = p + 1, h = d - p, f = new m(h), g = 0, v = new Array(c), y = new Array(c), x = 0, _ = r.from(e.buffer), E = 0; E < c; E++) {
						var C = E < l ? p : b;
						v[E] = _.slice(g, g + C), y[E] = f.encode(v[E]), g += C, x = Math.max(x, C)
					}
					var w, k, S = r.alloc(a),
						O = 0;
					for (w = 0; w < x; w++)
						for (k = 0; k < c; k++) w < v[k].length && (S[O++] = v[k][w]);
					for (w = 0; w < h; w++)
						for (k = 0; k < c; k++) S[O++] = y[k][w];
					return S
				}(a, e, t)
			}

			function x(e, t, n, r) {
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
				var b = y(t, n, a),
					h = s.getSymbolSize(t),
					x = new i(h);
				return function(e, t) {
						for (var n = e.size, r = l.getPositions(t), s = 0; s < r.length; s++)
							for (var a = r[s][0], o = r[s][1], i = -1; i <= 7; i++)
								if (!(a + i <= -1 || n <= a + i))
									for (var c = -1; c <= 7; c++) o + c <= -1 || n <= o + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(a + i, o + c, !0, !0) : e.set(a + i, o + c, !1, !0))
					}(x, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var r = n % 2 == 0;
							e.set(n, 6, r, !0), e.set(6, n, r, !0)
						}
					}(x),
					function(e, t) {
						for (var n = c.getPositions(t), r = 0; r < n.length; r++)
							for (var s = n[r][0], a = n[r][1], o = -2; o <= 2; o++)
								for (var i = -2; i <= 2; i++) - 2 === o || 2 === o || -2 === i || 2 === i || 0 === o && 0 === i ? e.set(s + o, a + i, !0, !0) : e.set(s + o, a + i, !1, !0)
					}(x, t), v(x, n, 0), t >= 7 && function(e, t) {
						for (var n, r, s, a = e.size, o = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), r = i % 3 + a - 8 - 3, s = 1 == (o >> i & 1), e.set(n, r, s, !0), e.set(r, n, s, !0)
					}(x, t),
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
					}(x, b), isNaN(r) && (r = d.getBestMask(x, v.bind(null, x, n))), d.applyMask(r, x), v(x, n, r), {
						modules: x,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: r,
						segments: a
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, r, o = a.M;
				return void 0 !== t && (o = a.from(t.errorCorrectionLevel, a.M), n = p.from(t.version), r = d.from(t.maskPattern), t.toSJISFunc && s.setToSJISFunction(t.toSJISFunc)), x(e, n, o, r)
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
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
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
				return C
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "f", (function() {
				return P
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
				y = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				x = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function _(e) {
				return !!e && "removeBadge" === e.type
			}

			function E(e) {
				if (!_(e)) return e
			}
			const C = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(y.b)({
					includeMemberships: !0
				}));
				const r = t().economics.me.data.specialMemberships || {},
					s = Object.keys(r);
				if (s.length) {
					const t = await Object(i.e)(n(), s);
					t.ok && e(Object(x.g)(t.body))
				}
			}, w = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const a = r().user.account,
					o = r().economics.subredditPremium[e],
					i = !o || o.status !== f.a.Fetched || t;
				if (a && i) {
					const t = await Object(c.a)(s(), e, a.id);
					n(Object(x.i)(t))
				}
			}, k = e => async (t, n, {
				apiContext: r
			}) => {
				const s = n(),
					o = s.user.account,
					i = Object(g.f)(s, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (o && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? i[b.a.Loyalty] : e.placement === p.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(x.a)({
						...e,
						badge: E(e.badge),
						currentAppliedBadges: c,
						userId: o.id
					})), _(e.badge) && n ? s = await Object(l.a)(r(), e.subredditId, n.id, !1) : _(e.badge) || (s = await Object(l.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(x.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: o.id
					})), Object(a.a)(t, s.error))
				}
			}, S = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				await n(w(e, !0));
				const a = r().economics.subredditPremium[e];
				if (a && a.status === f.a.Fetched) {
					const r = a.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(k({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(x.d)(b.c.MyBadges)))
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
					}), t(Object(x.e)({
						subredditId: e,
						products: l
					}))
				}
			}, j = (e, t, n) => async (r, s, {
				apiContext: a
			}) => {
				if (await r(w(e, !0)), n && t) {
					const n = s(),
						a = Object(g.f)(n, e),
						o = Object(v.a)(n, t);
					if (!a[Object(b.d)(o.placement)] && o) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: o
						});
						t && await r(k({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(x.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, P = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					wallet: s
				} = await Object(i.c)(r(), e);
				t(Object(x.f)({
					wallet: s
				})), await t(w(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return L
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "d", (function() {
				return H
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "a", (function() {
				return Y
			})), n.d(t, "g", (function() {
				return K
			})), n.d(t, "h", (function() {
				return Q
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
				y = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Gold/ProductOffer.ts"),
				_ = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				C = n("./node_modules/bignumber.js/bignumber.js"),
				w = n.n(C),
				k = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				S = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				O = n("./src/graphql/operations/CreateEconOrder.json"),
				j = n("./src/graphql/operations/CreatePaypalPayment.json"),
				P = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				N = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				I = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				A = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				T = n("./src/graphql/operations/UserSavedStripeCards.json"),
				M = n("./src/lib/makeGqlRequest/index.ts");
			const R = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				B = e => e.map(e => e.message).join(" : "),
				L = (e, t, n) => async (s, a, {
					gqlContext: o
				}) => {
					const c = i()(),
						l = await ((e, t, n, r, s) => {
							const {
								premium: a,
								...o
							} = s, i = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], c = new w.a(i.price).multipliedBy(r).toFixed();
							return Object(M.a)(e, {
								...O,
								variables: {
									input: {
										nonce: t,
										productId: n.id,
										productVersion: n.version,
										pricePackageId: i.id,
										currency: i.currency,
										price: c,
										productsCount: r.toString(),
										...o
									}
								}
							})
						})(o(), c, e, t, n);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(B(t));
						if (n) return n.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, D = (e, t, n, s, a, o) => async (c, l, {
					gqlContext: d
				}) => {
					const u = l(),
						m = () => c(Object(f.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						b = a === x.c.Premium,
						h = a === x.c.Powerups,
						_ = {};
					if (h && o) _.powerUps = {
						subredditId: o,
						isAnonymous: n
					};
					else if (b) {
						const e = Object(g.b)(u);
						_.premium = {
							pricePackage: e
						}
					}
					let E, C, w = "";
					try {
						w = await c(L(t, s, _))
					} catch (S) {
						return p.c.captureException(S), void(S.message && c(Object(f.stripeApiError)(S.message)))
					}
					c(Object(f.stripeTokenPending)());
					const k = Object(v.y)(u);
					if (k || (E = await c(Object(f.validateAndCreateStripeToken)(e)), C = Object(v.v)(u), E)) try {
						const e = i()(),
							t = k || C ? E && C ? ((e, t, n, r) => Object(M.a)(e, {
								...P,
								variables: {
									nonce: t,
									orderId: n,
									token: r
								}
							}))(d(), e, w, E.id) : k ? ((e, t, n, r) => Object(M.a)(e, {
								...I,
								variables: {
									nonce: t,
									orderId: n,
									cardId: r
								}
							}))(d(), e, w, k) : null : ((e, t, n, r) => Object(M.a)(e, {
								...N,
								variables: {
									nonce: t,
									orderId: n,
									token: r
								}
							}))(d(), e, w, E.id),
							r = await t;
						if (!r || !r.ok) return void m(); {
							const e = r.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void c(Object(f.stripeApiError)(B(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void m();
							const t = Object(y.i)(l());
							t && (h && o ? c(K({
								subredditId: o,
								powerupsCount: s,
								user: t,
								isAnonymous: n
							})) : b && c(Z({
								user: t
							})))
						}
					} catch (S) {
						p.c.captureException(S), m()
					}
				}, F = (e, t, n, r) => async (s, a, {
					gqlContext: o
				}) => {
					let l = "";
					try {
						l = await s(L(e, r, {
							powerUps: {
								subredditId: t,
								isAnonymous: n
							}
						}))
					} catch (m) {
						return p.c.captureException(m), m.message && s(Object(f.paypalApiError)(m.message)), null
					}
					const d = c.a.redditUrl;
					try {
						const e = Object(u.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l,
								s: !0
							}),
							c = Object(u.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l
							}),
							m = i()(),
							p = await ((e, t, n, r, s) => Object(M.a)(e, {
								...j,
								variables: {
									nonce: t,
									orderId: n,
									successUrl: r,
									cancelUrl: s
								}
							}))(o(), m, l, e, c);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return s(Object(f.paypalApiError)(B(e.errors))), null;
							const o = Object(y.i)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if ("ACTION_REQUIRED" === a) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && o) return t && s(K({
									subredditId: t,
									powerupsCount: r,
									user: o,
									isAnonymous: n
								})), null
							}
						}
					} catch (m) {
						p.c.captureException(m)
					}
					return s(Object(f.paypalApiError)(R())), null
				}, U = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					try {
						const r = i()(),
							a = await ((e, t, n, r) => Object(M.a)(e, {
								...S,
								variables: {
									nonce: t,
									paymentId: n,
									token: r
								}
							}))(s(), r, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(f.paypalApiError)(B(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						p.c.captureException(a)
					}
					return n(Object(f.paypalApiError)(R())), !1
				}, H = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await (e => Object(M.a)(e, {
							...T,
							variables: {}
						}))(n());
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
				}, W = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(M.a)(e, {
							...A,
							variables: {
								cardId: t
							}
						}))(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: s
							} = n.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(B(s))
					} catch (s) {
						p.c.captureException(s)
					}
				}, G = Object(m.a)(h.N), q = Object(m.a)(h.O), z = Object(m.a)(h.P), V = e => async (t, n) => {
					await t(G(e)), t(Object(d.f)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, Y = (e, t, n) => async (s, a, {
					gqlContext: o
				}) => {
					s(q({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const a = await ((e, t) => Object(M.a)(e, {
							...k,
							variables: {
								orderId: t
							}
						}))(o(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void s(V(r[0].message));
							s(z({
								subredditId: t,
								allocatedAt: n
							}))
						} else s(V(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), s(V(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, J = Object(m.a)(h.R), K = e => async (t, n) => {
					t(J(e)), t(Object(_.h)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(E.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(E.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, Z = Object(m.a)(h.V), Q = Object(m.a)(h.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return l
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return u
			})), n.d(t, "cardNameEmpty", (function() {
				return m
			})), n.d(t, "cardElementChange", (function() {
				return p
			})), n.d(t, "stripeTokenPending", (function() {
				return b
			})), n.d(t, "stripeTokenError", (function() {
				return h
			})), n.d(t, "stripeApiError", (function() {
				return f
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), n.d(t, "paypalApiError", (function() {
				return v
			})), n.d(t, "toggleRememberCard", (function() {
				return y
			})), n.d(t, "selectSavedCard", (function() {
				return x
			})), n.d(t, "_deleteSavedCard", (function() {
				return _
			})), n.d(t, "deleteSavedCard", (function() {
				return E
			})), n.d(t, "savedCardsPending", (function() {
				return C
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
			const l = Object(a.a)(i.A),
				d = Object(a.a)(i.w),
				u = Object(a.a)(i.b),
				m = Object(a.a)(i.a),
				p = Object(a.a)(i.D),
				b = Object(a.a)(i.F),
				h = Object(a.a)(i.E),
				f = Object(a.a)(i.C),
				g = e => async (t, n) => {
					const s = n(),
						a = Object(c.h)(s),
						{
							token: o,
							error: i
						} = await e.createToken({
							name: a
						});
					if (a.trim()) {
						if (!i && o) return o;
						t(h(i || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, v = Object(a.a)(i.x), y = Object(a.a)(i.G), x = Object(a.a)(i.B), _ = Object(a.a)(i.g), E = e => async (t, n, {
					apiContext: r
				}) => {
					t(_(e));
					try {
						const t = await Object(o.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, C = Object(a.a)(i.y), w = Object(a.a)(i.z), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(C());
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
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/extractQueryParams/index.ts"),
				i = n("./src/lib/filterQueryParams/index.ts"),
				c = n("./src/lib/pageTitle.ts"),
				l = n("./src/reddit/actions/chat/userSettings.ts"),
				d = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				u = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var m = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = n("./src/reddit/actions/externalAccount.ts"),
				b = n("./src/reddit/actions/gold/powerups.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/config.ts"),
				v = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			n("./src/reddit/models/Toast/index.ts");
			var x = n("./src/reddit/selectors/notificationPrefs.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/notifications/constants.ts");
			const C = Object(h.a)(E.c),
				w = Object(h.a)(E.b),
				k = Object(h.a)(E.a),
				S = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t();
					if (!Object(_.i)(r)) return;
					const s = Object(x.b)(r),
						o = Object(x.a)(r);
					if (s || o) return;
					e(C());
					const i = await (e => Object(v.a)(e, {
						endpoint: Object(y.a)(`${g.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: a.eb.GET
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
			Object(h.a)(E.f), Object(h.a)(E.e), Object(h.a)(E.d);
			var O = n("./src/reddit/actions/platform.ts"),
				j = n("./src/reddit/actions/preferences.ts"),
				P = n("./src/reddit/actions/profile/index.ts"),
				N = n("./src/reddit/actions/subredditSettings.ts"),
				I = n("./src/reddit/actions/users.ts"),
				A = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/helpers/externalAccount/index.tsx"),
				M = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				R = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				B = n("./src/reddit/selectors/externalAccount.ts");
			const L = e => async (t, n) => {
				await t(Object(I.r)());
				const h = [t(Object(j.z)(!0)), t(Object(m.a)())];
				n().economics.paymentSystems.status === R.a.NotFetched && h.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(u.d)());
					const r = await Object(d.d)(n());
					r.ok ? e(Object(u.c)(r.body)) : e(Object(u.b)({
						error: r.error
					}))
				})())), await Promise.all(h); {
					const e = n();
					if (!Object(_.J)(e)) return Object(M.a)(t, e)
				}
				const {
					page: g = a.Tb.Account
				} = e.params;
				if (g === a.Tb.Gold) return void t(Object(s.c)("/settings/premium"));
				const v = [];
				g === a.Tb.Profile && (v.push(t(Object(P.a)())), v.push(t(Object(N.g)()))), g === a.Tb.Account && v.push(t(Object(p.o)())), g === a.Tb.Notifications && v.push(t(S())), g !== a.Tb.Privacy && g !== a.Tb.Messaging || v.push(t(Object(l.b)())), g === a.Tb.Premium && (v.push(t(Object(P.a)())), v.push(t(Object(b.i)(!0)))), await Promise.all(v); {
					const e = n(),
						a = e.platform.currentPage,
						{
							url: c
						} = a,
						l = Object(o.a)(c).get(A.d);
					if (l && (t(Object(s.c)(Object(i.a)(c, [A.d]))), Object(B.a)(e))) {
						const e = r.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(f.f)({
							text: e
						})), Object(T.b)(l)
					}
				}
				t(Object(O.l)({
					title: Object(c.h)()
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
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/currency/centsToDollars/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/helpers/governance/tokens.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(r || (r = {}));
			const h = (e, t) => {
					if (e) switch (t) {
						case r.Monthly:
							return b.fbt._("{price}/mo", [b.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				f = (e, t) => {
					if (e) switch (t) {
						case r.Monthly:
							return b.fbt._("{price} / month", [b.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var g = n("./src/reddit/components/Economics/Price/index.m.less"),
				v = n.n(g);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = ({
				subredditId: e,
				pointPrice: t
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement(u.a, {
				className: v.a.token,
				subredditId: e
			}), t), _ = Object(i.c)({
				tokenDisplayConversion: p.m,
				tokenName: p.n
			});
			t.a = Object(o.b)(_)(e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: s,
					subredditId: o,
					tokenDisplayConversion: i,
					tokenName: u
				} = e, p = e.dollarPrice && `$${Object(l.a)(e.dollarPrice,!0)}`, b = e.tokenPrice && Object(d.a)(Object(m.b)(e.tokenPrice, i)) + (n ? "" : " " + u);
				if (!p && !b) return null;
				const g = s ? r.Monthly : r.Once;
				return a.a.createElement("span", {
					className: Object(c.a)(t, v.a.price)
				}, p && b ? y._("{dollar-price} or {point-price}", [y._param("dollar-price", h(p, g)), y._param("point-price", a.a.createElement(x, {
					subredditId: o,
					pointPrice: h(b, g)
				}))], {
					hk: "2Gif0l"
				}) : p ? f(p, g) : b ? a.a.createElement(x, {
					subredditId: o,
					pointPrice: f(b, g)
				}) : null)
			})
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
				l = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(o.c)({
				tokenSymbol: l.o
			});
			t.a = Object(a.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${i.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
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
					src: n
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
				getComponent: () => Object(o.a)(() => Promise.all([n.e("AuthorHovercard~EconTopAwardersModal~ModerationPages~Settings~SubredditWiki"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
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
					r = Object(f.I)(e, t);
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
			const y = (e, t) => {
				const n = Object(h.a)(e, t),
					r = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var x = Object(a.b)(() => Object(o.a)(y, e => e))(e => s.a.createElement(p, {
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
			var _ = Object(a.b)(() => Object(o.c)({
					subreddit: f.T
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
				E = n("./src/reddit/hooks/usePostContext.ts");
			var C = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(E.a)(), a = Object(r.useMemo)(() => ({
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
			var w = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: a
				} = Object(E.a)(), o = Object(r.useMemo)(() => ({
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
			var k = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(E.a)(), a = Object(r.useMemo)(() => ({
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
			var S = Object(a.b)(() => Object(o.c)({
				subreddit: f.T
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
				subredditOrProfile: (e, t) => Object(f.L)(e, {
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
			var j = Object(a.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
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
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				d = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				b = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				h = n("./src/reddit/icons/svgs/Top/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.m.less"),
				g = n.n(f);
			const v = {
					[o.R.BEST]: d.a,
					[o.R.HOT]: m.a,
					[o.R.NEW]: p.a,
					[o.R.CONTROVERSIAL]: u.a,
					[o.R.TOP]: h.a,
					[o.R.RISING]: b.a,
					[o.R.AWARDED]: l.a
				},
				y = {
					[o.R.BEST]: "best",
					[o.R.HOT]: "hot",
					[o.R.NEW]: "new",
					[o.R.CONTROVERSIAL]: "controversial",
					[o.R.TOP]: "top",
					[o.R.RISING]: "rising",
					[o.R.AWARDED]: "award"
				};

			function x({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.a)() && void 0 !== y[n]) return s.a.createElement(c.a, {
					name: y[n],
					isFilled: t,
					className: Object(a.a)(e, g.a.iconStyles)
				});
				const r = v[n];
				return r ? s.a.createElement(r, {
					className: Object(a.a)(e, g.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/Loader/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_1Jx7v9Z1D1htyYeKixW2Gx"
			}
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
				return de
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = a.a.div("dynamicTwoCol", c.a),
				d = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./src/lib/humanizeDate/index.ts"),
				h = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/lib/timeAgo/index.ts"),
				g = n("./src/reddit/contexts/InsideOverlay.tsx"),
				v = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				y = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				x = n("./src/reddit/icons/svgs/User/index.tsx"),
				_ = n("./src/reddit/selectors/profile.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/tooltip.ts"),
				w = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				S = n.n(k);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = a.a.div("Container", S.a),
				P = a.a.div("Body", S.a),
				N = a.a.h5("Title", S.a),
				I = a.a.span("Label", S.a);
			class A extends s.a.Component {
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
						tooltipId: a
					} = this.props, o = a && r ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return s.a.createElement(j, null, s.a.createElement(N, null, n), s.a.createElement(P, null, e, s.a.createElement(I, O({
						key: "label"
					}, o), t)), a && r && s.a.createElement(w.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: r
					}))
				}
			}
			var T = Object(m.b)(null, e => ({
					toggleTooltip: t => e(Object(C.h)({
						tooltipId: t
					}))
				}))(Object(g.b)(A)),
				M = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				R = n.n(M);
			const B = Object(p.a)(_.j, (e, {
					profileName: t
				}) => Object(E.tb)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				L = a.a.div("Container", R.a);

			function D(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var F = Object(m.b)(B)(Object(g.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: n,
						profileCreated: r,
						isOverlay: a,
						commentKarma: o,
						postKarma: i,
						totalKarma: c,
						subscribers: l
					} = e, d = D(a, "karma"), m = D(a, "cakeday"), p = `${u.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[u.fbt._plural(i,"number",Object(h.b)(i,{displayFull:!0}))],{hk:"husfU"})}\n${u.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[u.fbt._plural(o,"number",Object(h.b)(o,{displayFull:!0}))],{hk:"26iPTL"})}\n${u.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[u.fbt._plural(t,"number",Object(h.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${u.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[u.fbt._plural(n,"number",Object(h.b)(n,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return s.a.createElement(L, null, s.a.createElement(T, {
						icon: s.a.createElement(y.a, {
							className: R.a.icon,
							key: "karma"
						}),
						label: Object(h.b)(c, {
							displayFull: !0
						}),
						title: u.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: d,
						tooltip: p
					}), s.a.createElement(T, {
						icon: s.a.createElement(v.a, {
							className: R.a.icon,
							key: "cakeDay"
						}),
						label: Object(b.a)(r, !0),
						title: u.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: m,
						tooltip: Object(f.d)(r)
					}), l > 0 && s.a.createElement(T, {
						icon: s.a.createElement(x.a, {
							className: R.a.icon,
							key: "followers"
						}),
						title: u.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(h.b)(l, {
							displayFull: !0
						})
					}))
				})),
				U = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				H = n.n(U),
				W = n("./src/config.ts"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				q = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/controls/OutboundLink/index.tsx"),
				V = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				J = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				K = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Q = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				X = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				$ = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				ee = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				re = n.n(ne);
			var se = ({
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
					onDeleteBanner: m,
					onDeleteIcon: p,
					profileIcon: b,
					title: h,
					userCreated: f,
					username: g,
					url: v
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(X.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: g,
					isDeletingBanner: !!r,
					onDeleteBanner: m
				}), s.a.createElement("div", {
					className: te.a.SnooIconWrapper
				}, l || !b || c ? s.a.createElement(Z.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				}) : s.a.createElement(z.b, {
					isSponsored: !1,
					href: b,
					source: null
				}, s.a.createElement(Z.a, {
					iconUrl: b,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				})), t && !n && (a ? s.a.createElement(q.a, {
					sizePx: 20,
					className: re.a.loadingIcon
				}) : s.a.createElement(Y.a, {
					className: re.a.closeIcon,
					onClick: p
				}))), !t && l && s.a.createElement(G.a, {
					to: "/settings/profile",
					className: te.a.settingsLink
				}, s.a.createElement(K.a, {
					className: re.a.settingsIcon
				})), h && s.a.createElement("h4", {
					className: te.a.userTitle
				}, h), s.a.createElement($.a, {
					className: te.a.userName,
					username: g,
					userCreated: f,
					url: v
				}), o && s.a.createElement(V.a, {
					className: te.a.adminIcon,
					title: u.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: u.fbt._("{username} has Reddit Premium", [u.fbt._param("username", g)], {
						hk: "3Fylv"
					}),
					href: `${W.a.redditUrl}/premium`
				}, s.a.createElement(J.a, {
					className: te.a.premiumIcon
				})), l && s.a.createElement(Q.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				ae = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var oe = ({
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
				username: y,
				url: x
			}) => f ? s.a.createElement(ae.a, {
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
				username: y,
				url: x
			}) : s.a.createElement(se, {
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
				username: y,
				url: x
			});
			const ie = a.a.wrapped(o.b, "Widget", H.a),
				ce = a.a.div("Description", H.a),
				le = a.a.wrapped(l, "Actions", H.a);
			class de extends s.a.PureComponent {
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
						profileIcon: u,
						publicDescription: m,
						snoovatarUrl: p,
						title: b,
						url: h,
						userCreated: f,
						username: g,
						isDefaultIcon: v,
						isDeletingIcon: y,
						isDeletingBanner: x,
						onClickSnoovatar: _,
						onDeleteIcon: E,
						onDeleteBanner: C,
						prefersReducedAnimations: w,
						editMode: k
					} = this.props;
					return s.a.createElement(ie, {
						className: r
					}, s.a.createElement(oe, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: n,
						editMode: k,
						isDefaultIcon: v,
						isDeletingBanner: x,
						isDeletingIcon: y,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: _,
						onDeleteBanner: C,
						onDeleteIcon: E,
						prefersReducedAnimations: w,
						profileIcon: u,
						title: b,
						userCreated: f,
						username: g,
						url: h,
						snoovatarUrl: p
					}), s.a.createElement(ce, null, m), s.a.createElement(F, {
						profileName: g,
						isOverlay: l
					}), this.renderAwardedLastMonth(), s.a.createElement(le, null, e), a)
				}
			}
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, n) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us"
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
				tertiaryBtn: "_3yDGs2XJxcsMFCZLDmw61k"
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
				return k
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
				y = p.a.div("ButtonWrapper", m.a),
				x = p.a.textarea("TextArea", m.a),
				_ = p.a.h3("SectionLabel", m.a),
				E = p.a.p("H", m.a),
				C = p.a.p("P", m.a),
				w = p.a.wrapped(l.a, "Input", m.a),
				k = p.a.div("CheckBoxWrapper", m.a),
				S = p.a.ul("UL", m.a),
				O = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				j = {
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
			class P extends a.a.Component {
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
						return a.a.createElement(d.k, null, a.a.createElement(E, null, r.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), a.a.createElement(S, null, a.a.createElement("li", null, r.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
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
						}, j[e] && j[e]()))))), a.a.createElement(_, null, r.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), a.a.createElement(x, {
							placeholder: r.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), a.a.createElement(_, null, r.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), a.a.createElement(w, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: r.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), a.a.createElement(w, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: r.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), a.a.createElement(k, null, a.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), a.a.createElement("label", null, r.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), a.a.createElement(y, null, a.a.createElement(v, {
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
					}, " ", j[e] && j[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : a.a.createElement(a.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", a.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", j[e] && j[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => a.a.createElement(d.k, null, a.a.createElement(E, null, r.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), a.a.createElement(C, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), a.a.createElement(y, null, a.a.createElement(g, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, r.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => a.a.createElement(d.k, null, a.a.createElement(E, null, r.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), a.a.createElement(y, null, a.a.createElement(v, {
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
			t.b = Object(o.a)(P)
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
				return $
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/humanizeDate/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/ConfirmModal/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/gold/powerups.ts")),
				b = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/higherOrderComponents/asModal/index.tsx"),
				g = n("./src/reddit/actions/gold/powerups.ts"),
				v = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				y = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = n("./src/reddit/controls/TextButton/index.tsx"),
				_ = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var C = Object(f.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: r,
						subredditInfo: s
					} = e, a = Object(i.d)();
					return o.a.createElement(y.d, {
						className: t
					}, o.a.createElement(y.h, null, o.a.createElement(_.a, null, o.a.createElement(y.p, null, E._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), o.a.createElement(x.a, {
						onClick: r
					}, o.a.createElement(y.b, null)))), o.a.createElement(y.k, null, o.a.createElement(y.o, null, E._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [E._param("subreddit name", s.prefixedName)], {
						hk: "2EKYNO"
					}))), o.a.createElement(y.f, null, o.a.createElement(y.q, {
						onClick: () => {
							n.isPremium ? a(Object(g.f)(s.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : a(Object(v.a)(n.id, s.id, n.allocatedAt)), r()
						},
						"data-redditstyle": !0
					}, E._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				w = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				k = n.n(w);

			function S(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var O = function(e) {
					const [t, n] = Object(a.useState)(!1), {
						className: r,
						allocation: i
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: f,
						powerups: g
					} = i, v = S(f), y = S(c), x = S(l), {
						prefixedName: _
					} = p, E = y ? s.fbt._("Subscribed {date}.", [s.fbt._param("date", y)], {
						hk: "24RAUK"
					}) : "", w = x ? s.fbt._("You can cancel after {date}.", [s.fbt._param("date", x)], {
						hk: "48A2TC"
					}) : "", O = v ? s.fbt._("Will be renewed on {date}.", [s.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", j = v ? s.fbt._("Still active until {date}.", [s.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", P = m ? u ? E : `${E} ${w}` : d ? `${E} ${O}` : `${E} ${j}`, N = m ? s.fbt._("{powerups count} Reddit Premium powerup/monthly", [s.fbt._param("powerups count", g.toLocaleString())], {
						hk: "4iP1Np"
					}) : s.fbt._("{powerups count} powerup/monthly", [s.fbt._param("powerups count", g.toLocaleString())], {
						hk: "11DNVJ"
					}), I = m && u || !m && d;
					return o.a.createElement("div", {
						className: Object(b.a)(r, k.a.container),
						title: P
					}, o.a.createElement("div", {
						className: k.a.allocationName
					}, s.fbt._("{subreddit name} Powerup", [s.fbt._param("subreddit name", _)], {
						hk: "4qAoO"
					})), o.a.createElement("div", {
						className: k.a.details
					}, N), o.a.createElement(h.o, {
						className: k.a.button,
						disabled: !I,
						onClick: () => n(!0)
					}, m || I ? s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : s.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && o.a.createElement(C, {
						withOverlay: !0,
						allocation: i,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				j = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				P = n.n(j);
			var N = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement("div", {
						className: P.a.title
					}, s.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => o.a.createElement(O, {
						allocation: e,
						className: P.a.allocation,
						key: e.allocatedAt
					})))
				},
				I = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				A = n.n(I);

			function T(e) {
				return o.a.createElement("header", {
					className: Object(b.a)(e.className, A.a.container)
				}, o.a.createElement("div", {
					className: A.a.title
				}, s.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), o.a.createElement("div", {
					className: A.a.subtitle
				}, s.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var M = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				R = n.n(M);
			const B = Object(l.c)({
				allocationByKey: p.t
			});
			var L = Object(i.b)(B)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? o.a.createElement("div", {
						className: e.className
					}, o.a.createElement(T, {
						className: R.a.header
					}), o.a.createElement(N, {
						allocationList: n
					})) : null
				})),
				D = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				F = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				U = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				H = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				W = n("./src/reddit/components/TrackingHelper/index.tsx"),
				G = n("./src/higherOrderComponents/makeAsync.tsx"),
				q = n("./src/lib/loadWithRetries/index.ts"),
				z = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var V = Object(G.a)({
					getComponent: () => Object(q.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(z.d)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Y = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				J = n("./src/reddit/selectors/activeModalId.ts"),
				K = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/components/Settings/index.m.less"),
				Q = n.n(Z);
			const X = "https://www.paypal.com/myaccount/autopay",
				$ = "update_card_modal_id",
				ee = Object(l.c)({
					cancelSubscriptionModalIsOpen: Object(J.b)("settings_optout_modal_id"),
					goldExpiration: K.n,
					hasAndroidSubscription: K.o,
					hasIOSSubscription: K.t,
					hasStripeSubscription: K.x,
					hasPaypalSubscription: K.v,
					isGold: K.r,
					isPremiumSubscriber: K.s,
					updateCardModalIsOpen: Object(J.b)($)
				}),
				te = Object(i.b)(ee, e => ({
					navigateToPurchasePremium: () => e(Object(c.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(u.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(u.i)($))
				})),
				ne = (e, t, n) => e && t ? s.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [s.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "jOodQ"
				}) : e && !t ? s.fbt._("Your Premium membership is valid until {date}.", [s.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "4m4zaE"
				}) : s.fbt._("Get Reddit Premium and help support Reddit.", null, {
					hk: "MOt6K"
				});
			class re extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(Y.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(Y.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(Y.f)() : Object(Y.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(Y.g)() : Object(Y.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(Y.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(Y.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(Y.j)())
				}
				navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t
					} = this.props;
					e ? window.location.href = X : t && (window.location.href = `${r.a.redditUrl}/gold/subscription`)
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: n,
						hasIOSSubscription: r,
						hasPaypalSubscription: a,
						hasStripeSubscription: i,
						isGold: c,
						isPremiumSubscriber: l,
						isResponsiveSettingsEnabled: d,
						toggleUpdateCardModal: u,
						updateCardModalIsOpen: p,
						prefs: {
							highlightComments: b,
							hideAds: h
						}
					} = this.props, f = n || r;
					return o.a.createElement(F.a, null, o.a.createElement(D.b, {
						className: Q.a.premiumHeading,
						isResponsiveSettingsEnabled: d
					}, s.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), o.a.createElement(D.a, {
						className: Q.a.premiumSubtext
					}, s.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), o.a.createElement(U.a, null, s.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), o.a.createElement(D.a, {
						className: Q.a.premiumSubtext
					}, ne(c, l, t || 0)), !l && o.a.createElement(H.f, {
						label: c ? s.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : s.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), i && o.a.createElement(H.a, {
						label: s.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: u
					}), a && o.a.createElement(H.f, {
						label: s.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), l && !f && o.a.createElement(H.a, {
						label: s.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(U.a, null, s.fbt._("premium features", null, {
						hk: "20MX2a"
					})), o.a.createElement(H.o, {
						on: h,
						disabled: !c,
						onClick: this.onHideAdsToggle,
						label: s.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: s.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), o.a.createElement(H.o, {
						on: b,
						disabled: !c,
						onClick: this.onHighlightCommentsToggle,
						label: s.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: s.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), p && o.a.createElement(V, null), e && o.a.createElement(m.a, {
						headerText: s.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: s.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: s.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: s.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}), o.a.createElement(L, null))
				}
			}
			t.b = te(Object(W.c)(re))
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
				premiumSubtext: "_2D4kg4-iMxeubZ4vWU0cXG"
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
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return q
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "n", (function() {
				return Q
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
				return Ce
			})), n.d(t, "h", (function() {
				return we
			})), n.d(t, "c", (function() {
				return ke
			})), n.d(t, "e", (function() {
				return Se
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
				y = n("./src/reddit/controls/Select/index.m.less"),
				x = n.n(y);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = g.a.span("Wrapper", x.a),
				C = g.a.select("Inner", x.a),
				w = g.a.wrapped(v.b, "Caret", x.a);

			function k({
				className: e,
				innerClassName: t,
				...n
			}) {
				const r = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return s.a.createElement(E, {
					className: e
				}, s.a.createElement(C, _({
					className: t
				}, n)), s.a.createElement(w, _({
					isSubreddit: !0
				}, r)))
			}
			var S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				j = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				A = n.n(I),
				T = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				R = n("./src/reddit/models/Flair/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				F = n.n(D);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(d.a)(b.a),
				W = g.a.wrapped(P.a, "Circle", F.a),
				G = g.a.h3("Label", F.a),
				q = g.a.wrapped(O.c, "Subtext", F.a),
				z = g.a.wrapped(m.a, "HoverTooltip", F.a),
				V = g.a.div("ControlContainer", F.a),
				Y = g.a.div("TextContainer", F.a),
				J = g.a.div("ActionContainer", F.a),
				K = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: r,
					isNightModeOn: a,
					disabled: o,
					indent: i,
					last: l,
					...d
				}) => s.a.createElement("div", U({}, d, {
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
				Z = g.a.a("Link", F.a),
				Q = g.a.wrapped(Z, "SubtextLink", F.a),
				X = g.a.wrapped(N.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(j.a, "ArrowRight", F.a),
				te = e => s.a.createElement(K, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, s.a.createElement(Y, {
					className: e.textContainerClassName
				}, s.a.createElement(G, null, e.label, e.isRequired && s.a.createElement(W, null)), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				re = g.a.wrapped(ne, "SpoilerFlair", F.a),
				se = g.a.wrapped(ne, "NSFWFlair", F.a),
				ae = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return s.a.createElement(se, null, "NSFW");
						case R.f.Spoiler:
							return s.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return s.a.createElement(K, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, s.a.createElement(Y, null, s.a.createElement(M.a, null, s.a.createElement("label", {
						htmlFor: t
					}, s.a.createElement(G, null, e.label))), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(V, null, e.tooltip && s.a.createElement(z, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), s.a.createElement(S.a, {
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
					isNightModeOn: L.V
				}),
				pe = Object(a.b)(me)(e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, s.a.createElement(Y, {
					style: {
						flex: 5
					}
				}, !e.inModal && s.a.createElement(M.a, null, s.a.createElement(G, null, e.label)), s.a.createElement(q, null, " ", s.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), s.a.createElement(J, {
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
				be = e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(M.a, null, s.a.createElement(G, null, e.label)), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(V, null, s.a.createElement(T.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => s.a.createElement(K, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, s.a.createElement(X, null)), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, s.a.createElement(Z, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, s.a.createElement(ee, null)))),
				fe = e => s.a.createElement(K, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement($, {
					onClick: e.onClick
				}, e.label), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, s.a.createElement($, {
					onClick: e.onClick
				}, s.a.createElement(ee, null)))),
				ge = g.a.div("DropdownWrapper", F.a),
				ve = g.a.wrapped(h.b, "DropdownRow", F.a),
				ye = g.a.span("Row", F.a),
				xe = g.a.wrapped(v.b, "DropdownTriangle", F.a),
				_e = g.a.div("DescriptionsRow", F.a),
				Ee = Object(i.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				Ce = Object(a.b)(Ee, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => s.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, s.a.createElement(Y, null, s.a.createElement(G, null, e.label), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, (e => s.a.createElement(ge, {
					onClick: e.openDropdown
				}, s.a.createElement(ye, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), s.a.createElement(xe, null), s.a.createElement(H, {
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
				}))), e.descriptions && s.a.createElement(_e, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				we = ({
					disabled: e,
					last: t,
					onChange: n,
					...a
				}) => {
					const o = Object(r.useCallback)(e => n(e.target.value), [n]),
						{
							items: i
						} = a;
					return s.a.createElement(K, {
						disabled: e
					}, s.a.createElement(Y, null, s.a.createElement(G, null, a.label), s.a.createElement(q, null, a.subtext)), s.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), s.a.createElement(K, {
						last: t,
						indent: !0,
						disabled: e
					}, s.a.createElement(k, {
						className: "redditStyle",
						disabled: e || a.inputDisabled,
						onChange: o,
						value: a.selected
					}, Object.keys(i).map(e => s.a.createElement("option", {
						key: e,
						value: e
					}, i[e].displayName)))))
				},
				ke = e => s.a.createElement(K, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, s.a.createElement(Y, null, s.a.createElement(G, null, e.label), s.a.createElement(q, null, e.subtext)), s.a.createElement(J, null, e.children)),
				Se = e => s.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, s.a.createElement(f.a, {
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
				return y
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(d.a, "ImageUploadIcon", m.a), h = o.a.div("ImageIconRow", m.a), f = o.a.div("ImageUploadText", m.a), g = o.a.wrapped(i.a, "FileDrop", m.a), v = o.a.div("ContainerUploading", m.a), y = e => s.a.createElement(v, {
				className: e.className
			}, s.a.createElement(h, null, s.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), s.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), x = o.a.label("Label", m.a);
			t.b = e => s.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(x, {
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
				return y
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
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
				y = r.a.div("FormElementError", a.a),
				x = r.a.div("FormElementSubGroup", a.a),
				_ = r.a.li("FormListItem", a.a)
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
				return y
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
				y = r.a.input("StyledFileInput", d.a)
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
				return E
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
				y = d.a.h3("Title", f.a),
				x = d.a.div("TabNavContainer", f.a),
				_ = d.a.div("Tabs", f.a),
				E = d.a.wrapped(({
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
				C = e => {
					switch (e) {
						case r.GEAR:
							return i.a.createElement(v, null);
						default:
							return null
					}
				},
				w = () => window.pageYOffset || window.scrollY,
				k = 75,
				S = {
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
						this.state.sticky || this.forceUnsticky ? w() < k && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : w() >= k && this.setState({
							sticky: !0
						})
					}, l.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					return i.a.createElement(x, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(y, {
						className: Object(c.a)(r, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, C(this.props.icon), this.props.title), i.a.createElement(_, {
						className: Object(c.a)(r, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? S : void 0
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
					[s.R.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.R.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.R.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.R.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.R.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.R.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.R.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[s.Yb.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.Yb.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.Yb.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.Yb.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.Yb.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.Yb.ALL]: () => r.fbt._("All Time", null, {
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
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: n,
						disabled: r,
						redditStyle: o,
						"data-redditstyle": i,
						...c
					} = t, l = ((e, t, n) => {
						const r = !(!t && !n);
						let s = "";
						return s = e ? r ? d.a.mDisabledRedditStyle : d.a.mDisabled : r ? d.a.mActiveRedditStyle : d.a.mActive
					})(r, o, i);
					return s.a.createElement(e, u({
						className: Object(a.a)(d.a.CheckboxIcon, l, n)
					}, c))
				},
				p = m(c.a),
				b = m(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? p : o.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(a.a)(d.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(a.a)(d.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
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
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
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
				return S
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
				y = n.n(v);
			var x = Object(h.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: y.a.wrapper
					}, l.a.createElement(g.a, {
						className: y.a.titleRow
					}, n), l.a.createElement("div", {
						className: y.a.detailsContainer
					}, t), l.a.createElement(g.a, {
						className: y.a.buttonRow
					}, l.a.createElement(f.i, {
						className: y.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = n("./src/reddit/controls/ErrorText/index.m.less"),
				E = n.n(_);
			const C = Object(u.c)({
				activeModalId: b.a
			});
			class w extends l.a.Component {
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
						className: Object(m.a)(E.a.wrapper, n)
					}, l.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: a
					}, s || e))
				}
			}
			const k = Object(d.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(w),
				S = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: s,
						messages: a = []
					} = e, o = a.length ? a : s ? [s] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(k, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(S, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
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
				return y
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
			class y extends s.a.Component {
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
					method: s.eb.GET
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
					s = new r.BigNumber(t);
				return n.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
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
				return y
			})), n.d(t, "a", (function() {
				return x
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
				y = (e, t) => n => ({
					...r.defaults(n),
					action: i(e),
					notification: {
						type: t
					},
					noun: "notification",
					source: "notification_app_settings"
				}),
				x = e => t => ({
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
						type: Object(s.s)(e) ? a.GoldPurchaseType.Cancel : a.GoldPurchaseType.GetPremium
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(a.a)();
				return s.a.createElement("i", {
					className: `${Object(o.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const d = c.a.wrapped(e => {
				const t = Object(l.a)();
				return s.a.createElement("i", {
					className: `${Object(a.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(a.a, null, e.desc))
			}, "GiftIcon", i.a);
			t.a = d
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
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), s.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
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
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, s.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, s.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
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
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
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
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
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
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", null, "Hot"), s.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
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
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
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
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
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
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, a;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
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
				y = n("./src/reddit/actions/login.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/actions/users.ts"),
				E = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				C = n("./src/reddit/components/ConfirmModal/index.tsx"),
				w = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				k = n("./src/reddit/actions/preferences.ts"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				j = n("./src/reddit/selectors/sso.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				N = n("./src/lib/validateEmail/index.ts"),
				I = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				T = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				M = n("./src/reddit/icons/svgs/Info/index.tsx"),
				R = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				B = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/models/User/index.ts"),
				D = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				F = n.n(D);
			const U = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(P.i)(e);
						return t && Object(L.e)(t) || ""
					}
				}),
				H = Object(o.b)(U, e => ({
					changeEmail: t => e(Object(_.t)(t)),
					sendResetEmail: t => e(Object(_.w)(t)),
					showErrorToast: t => e(Object(I.f)({
						duration: I.a,
						kind: B.b.Error,
						text: t
					}))
				})),
				W = e => e ? a.a.createElement(T.a, {
					className: Object(u.a)(F.a.image, F.a.success)
				}) : a.a.createElement(R.a, {
					className: Object(u.a)(F.a.image, F.a.error)
				}),
				G = e => e ? r.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : r.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				q = e => e ? r.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : r.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				z = e => e ? r.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : r.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				V = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? a.a.createElement(M.a, {
						className: Object(u.a)(F.a.inputIcon, F.a.error)
					}) : a.a.createElement(T.a, {
						className: Object(u.a)(F.a.inputIcon, F.a.success)
					}) : null
				};
			class Y extends a.a.Component {
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
						} = this.state, a = Object(N.a)(s, !1), o = a ? "" : r.fbt._("Please fix your email to continue.", null, {
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
						className: F.a.container
					}, a.a.createElement("h3", {
						className: F.a.header
					}, r.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), a.a.createElement("div", {
						className: F.a.status
					}, W(e), a.a.createElement("h3", {
						className: F.a.statusText
					}, q(e))), a.a.createElement("p", {
						className: F.a.description
					}, G(e)), a.a.createElement("div", {
						className: F.a.actionContainer
					}, a.a.createElement("div", {
						className: F.a.emailContainer
					}, s ? a.a.createElement(a.a.Fragment, null, a.a.createElement(A.a, {
						className: Object(u.a)(F.a.input, F.a[o]),
						label: r.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), V(this.state), a.a.createElement("h6", {
						className: F.a.errorMsg
					}, n)) : a.a.createElement("p", {
						className: F.a.emailText
					}, z(e), a.a.createElement("span", {
						className: F.a.emailAddress
					}, t))), a.a.createElement(S.i, {
						className: F.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? r.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : r.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var J = H(Y),
				K = n("./src/reddit/components/Settings/modalIds.ts"),
				Z = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				X = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				$ = n("./src/reddit/selectors/runTimeEnvVars.ts");
			const ee = Object.freeze({
					[X.DEFAULT_LOCALE]: Object.freeze({
						bcp47: X.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.DEFAULT_LOCALE),
						rtl: !1
					})
				}),
				te = Object.freeze({
					[X.GERMAN_LOCALE]: Object.freeze({
						bcp47: X.GERMAN_LOCALE,
						displayName: "Deutch",
						englishName: "German",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.GERMAN_LOCALE),
						rtl: !1
					}),
					[X.PORTUGUESE_BRAZILLIAN_LOCALE]: Object.freeze({
						bcp47: X.PORTUGUESE_BRAZILLIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.PORTUGUESE_BRAZILLIAN_LOCALE),
						rtl: !1
					}),
					"pt-PT": Object.freeze({
						bcp47: "pt-PT",
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(w.isoLocaleToFbtLocale)("pt-PT"),
						rtl: !1
					}),
					[X.FRENCH_LOCALE]: Object.freeze({
						bcp47: X.FRENCH_LOCALE,
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.FRENCH_LOCALE),
						rtl: !1
					}),
					"es-ES": Object.freeze({
						bcp47: "es-ES",
						displayName: "Español",
						englishName: "Spanish",
						fbtLocale: Object(w.isoLocaleToFbtLocale)("es-ES"),
						rtl: !1
					}),
					"it-IT": Object.freeze({
						bcp47: "it-IT",
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(w.isoLocaleToFbtLocale)("it-IT"),
						rtl: !1
					})
				}),
				ne = Object.freeze({
					[X.PSEUDO_EXT_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_EXT_LOCALE,
						displayName: "Pseudo Ext",
						englishName: "Pseudo Ext",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.PSEUDO_EXT_LOCALE),
						rtl: !1
					}),
					[X.PSEUDO_LONG_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_LONG_LOCALE,
						displayName: "Pseudo Long",
						englishName: "Pseudo Long",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.PSEUDO_LONG_LOCALE),
						rtl: !1
					}),
					[X.PSEUDO_SHORT_LOCALE]: Object.freeze({
						bcp47: X.PSEUDO_SHORT_LOCALE,
						displayName: "Pseudo Short",
						englishName: "Pseudo Short",
						fbtLocale: Object(w.isoLocaleToFbtLocale)(X.PSEUDO_SHORT_LOCALE),
						rtl: !1
					})
				});
			var re = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				se = n.n(re);
			const ae = Object(c.c)({
					hasVerifiedEmail: P.z,
					isFPR: P.H,
					language: P.T,
					shouldShowCreatePasswordModal: j.d,
					showLanguageSection: O.d.langSelect,
					availableLocales: e => Object($.b)(e) || Object(P.G)(e) ? {
						...ee,
						...te,
						...ne
					} : ee
				}),
				oe = Object(o.b)(ae, e => ({
					changeLanguage: t => e(Object(k.v)(t)),
					openChangeEmailModal: () => e(Object(x.i)(K.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(x.h)(K.l)),
					resendEmail: () => e(Object(_.v)())
				})),
				ie = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : a.a.createElement(a.a.Fragment, null, r.fbt._("{email} not verified!", [r.fbt._param("email", e)], {
					hk: "3PanQN"
				}), a.a.createElement(S.g, {
					className: se.a.tertiaryBtn,
					onClick: n
				}, r.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : r.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var ce = oe(({
					changeLanguage: e,
					isFPR: t,
					language: n,
					openChangeEmailModal: o,
					openSSOCreatePasswordForEmailModal: i,
					shouldShowCreatePasswordModal: c,
					showLanguageSection: l,
					toggleChangePasswordModal: d,
					availableLocales: u,
					...m
				}) => {
					const [p, b] = Object(s.useState)(!1), h = Object(s.useCallback)(async t => {
						b(!0), await e(t), b(!1)
					}, [e]), [f, g] = Object(s.useState)(u);
					Object(s.useEffect)(() => {
						const e = new RegExp(`^${n}`);
						"" !== n && Object.keys(u).find(t => e.test(t)) || g(e => ({
							...e,
							[n]: Object.freeze({
								bcp47: n,
								displayName: n,
								englishName: n,
								fbtLocale: Object(w.isoLocaleToFbtLocale)(n),
								rtl: !1
							})
						}))
					}, [u, n]);
					return t ? a.a.createElement(J, {
						email: m.email
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(Z.a, null, r.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), a.a.createElement(Q.b, {
						actionText: r.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: r.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							c ? i() : o()
						},
						subtext: ie(m)
					}), !c && a.a.createElement(Q.b, {
						actionText: r.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: r.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !0,
						onClick: d,
						subtext: r.fbt._("Password must be at least 6 characters long", null, {
							hk: "24bAMu"
						})
					}), l ? a.a.createElement(Q.h, {
						inputDisabled: p,
						id: "lang",
						items: f,
						label: r.fbt._("Display language", null, {
							hk: "3roQUD"
						}),
						onChange: h,
						selected: n,
						subtext: r.fbt._("Select your preferred language for buttons and other text from Reddit. This does not change the language of user generated content. Note: This feature is in alpha testing and will likely change.", null, {
							hk: "q6SvY"
						})
					}) : null)
				}),
				le = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				de = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				ue = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				me = n("./src/reddit/constants/accountManager.ts"),
				pe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				be = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				he = n("./src/reddit/selectors/accountManager.ts"),
				fe = n("./src/reddit/selectors/activeModalId.ts"),
				ge = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ve = n("./src/config.ts"),
				ye = n("./src/reddit/helpers/trackers/sso.ts"),
				xe = n("./src/reddit/hooks/useTracking.ts"),
				_e = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				Ee = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				Ce = n.n(Ee),
				we = n("./src/lib/lessComponent.tsx");
			const ke = we.a.wrapped(Q.c, "ConnectApple", Ce.a),
				Se = we.a.wrapped(S.i, "ConnectAppleButton", Ce.a),
				Oe = we.a.div("ConnectionInfo", Ce.a),
				je = we.a.wrapped(S.m, "DisconnectButton", Ce.a),
				Pe = we.a.wrapped(_e.a, "AppleIcon", Ce.a),
				Ne = we.a.span("TextAndIconWrapper", Ce.a);

			function Ie(e) {
				return e.issuerId ? (() => a.a.createElement(Q.c, {
					label: r.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, a.a.createElement(Oe, null, a.a.createElement(je, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[Ce.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return a.a.createElement(ke, {
						className: t,
						label: r.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, a.a.createElement(Se, {
						className: t,
						onClick: e.onConnectClick
					}, a.a.createElement(Ne, null, a.a.createElement(Pe, null), r.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const Ae = Object(c.c)({
				issuerId: j.a,
				shouldShowCreatePasswordModal: j.d
			});
			var Te = Object(o.b)(Ae, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(x.h)(K.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(x.h)(K.j)),
					openLinkAppleSSOModal: () => e(Object(y.f)()),
					openUnlinkAppleSSOModal: () => e(Object(y.k)())
				}))(e => {
					const t = Object(xe.a)();
					return a.a.createElement(Ie, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(ye.c)(ye.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(ye.d)(ye.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				Me = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const Re = we.a.wrapped(Q.c, "ConnectGoogle", Ce.a),
				Be = we.a.wrapped(S.i, "ConnectGoogleButton", Ce.a),
				Le = we.a.div("ConnectionInfo", Ce.a),
				De = we.a.wrapped(S.m, "DisconnectButton", Ce.a),
				Fe = we.a.wrapped(Me.a, "GoogleIcon", Ce.a),
				Ue = we.a.span("TextAndIconWrapper", Ce.a);

			function He(e) {
				return e.hasGoogleIdentity ? (() => a.a.createElement(Q.c, {
					label: r.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, a.a.createElement(Le, null, a.a.createElement(De, {
					onClick: e.onDisconnectClick
				}, "(", r.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[Ce.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return a.a.createElement(Re, {
						className: t,
						label: r.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: r.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, a.a.createElement(Be, {
						className: t,
						onClick: e.onConnectClick
					}, a.a.createElement(Ue, null, a.a.createElement(Fe, null), r.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const We = Object(c.c)({
				hasGoogleIdentity: j.b,
				shouldShowCreatePasswordModal: j.d
			});
			var Ge = Object(o.b)(We, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(x.h)(K.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(x.h)(K.n)),
					openLinkGoogleSSOModal: () => e(Object(y.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(y.l)())
				}))(e => {
					const t = Object(xe.a)();
					return a.a.createElement(He, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(ye.c)(ye.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(ye.d)(ye.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				qe = n("./src/reddit/actions/externalAccount.ts"),
				ze = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Ve = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Ye = n("./src/reddit/models/ExternalAccount/index.ts");
			const Je = we.a.wrapped(Ve.a, "TwitterIcon", Ce.a),
				Ke = ({
					isFilled: e,
					...t
				}) => a.a.createElement(Je, t),
				Ze = we.a.wrapped(ze.a, "LoadingIcon", Ce.a),
				Qe = ({
					isFilled: e,
					...t
				}) => a.a.createElement(Ze, t),
				Xe = we.a.wrapped(Q.c, "ConnectTwitter", Ce.a),
				$e = we.a.wrapped(S.m, "DisconnectButton", Ce.a),
				et = we.a.span("Username", Ce.a),
				tt = we.a.div("ConnectionInfo", Ce.a);
			var nt = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				rt = n("./src/reddit/selectors/externalAccount.ts");
			const st = Object(c.c)({
					twitterAccount: rt.a,
					isTwitterConnectionPending: rt.b
				}),
				at = Object(o.b)(st, e => ({
					onConnectAccount: t => {
						e(qe.m(t)), t === Ye.a.Twitter && e((e, t) => nt.b(t()))
					},
					onDisconnectAccount: t => {
						e(qe.n(t)), t === Ye.a.Twitter && e((e, t) => nt.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => nt.e(n(), t))
				}));
			var ot = Object(pe.t)()(at((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Ye.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Ye.a.Twitter)
					};
				return a.a.createElement(s.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return a.a.createElement(Q.c, {
						label: r.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: r.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, a.a.createElement(tt, null, a.a.createElement("div", null, a.a.createElement(et, null, "@", t.username)), a.a.createElement($e, {
						onClick: n
					}, "(", r.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: s
					} = e, o = Object(u.a)({
						[Ce.a["m-responsive"]]: n
					}), i = r.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return a.a.createElement(Xe, {
						className: o,
						label: r.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: r.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, a.a.createElement(S.q, {
						className: Ce.a.ConnectTwitterButton,
						Icon: s ? Qe : Ke,
						text: s ? null : i,
						onClick: t
					}))
				})(), a.a.createElement(Q.o, {
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
			var it = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return a.a.createElement(s.Fragment, null, a.a.createElement(Z.a, {
					id: "connected-accounts"
				}, r.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), a.a.createElement(ot, e), (() => {
					if (e.shouldRenderSSOAccounts) return a.a.createElement(s.Fragment, null, a.a.createElement(Te, {
						isResponsiveSettingsEnabled: t
					}), a.a.createElement(Ge, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function ct() {
				return (ct = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const lt = Object(c.c)({
				isEmployee: P.G
			});
			var dt = Object(o.b)(lt)(e => {
					const t = !e.isEmployee;
					return a.a.createElement(it, ct({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				ut = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				mt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				pt = n.n(mt);
			const bt = we.a.wrapped(ge.b, "Trash", pt.a),
				ht = we.a.wrapped(Z.a, "BetaTestsHeading", pt.a),
				ft = we.a.wrapped(Q.o, "InBetaToggle", pt.a),
				gt = we.a.wrapped(Q.o, "InRedesignBetaToggle", pt.a),
				vt = we.a.button("DeactivateButton", pt.a),
				yt = we.a.div("DeactivateWrapper", pt.a),
				xt = Object(c.c)({
					changePasswordHref: (e, t) => Object(he.c)(e, {
						pageLayer: t.pageLayer,
						path: me.c.ChangePassword
					}),
					deactivateModalOpen: Object(fe.b)("deactivate_modal_id"),
					email: P.l,
					hasGoogleIdentity: j.b,
					inRedesignBeta: P.D,
					optoutModalOpen: Object(fe.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: j.d,
					user: P.i
				}),
				_t = Object(o.b)(xt, (e, t) => ({
					deactivate: t => {
						e(Object(_.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(x.h)(K.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: ve.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${ve.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(_.v)()),
					toggleChangePasswordModal: () => e(Object(y.b)()),
					toggleDeactivateModal: () => e(Object(x.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(x.i)("settins_optout_modal_id"))
				}));
			class Et extends a.a.Component {
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
						}, Object(be.a)()))
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
						[pt.a["m-responsive"]]: o
					}), v = Object(u.a)({
						[pt.a.ResponsiveOverlay]: o
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(ue.a, null, a.a.createElement(de.b, {
						isResponsiveSettingsEnabled: o
					}, r.fbt._("Account settings", null, {
						hk: "2faClM"
					})), a.a.createElement(ce, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), a.a.createElement(dt, this.props), a.a.createElement(ht, {
						className: g
					}, r.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), a.a.createElement(ft, {
						className: g,
						on: d.inBeta,
						onClick: () => h(!d.inBeta, "inBeta"),
						label: r.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: r.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), a.a.createElement(gt, {
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
					}), a.a.createElement(Z.a, null, r.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), a.a.createElement(yt, null, a.a.createElement(vt, {
						onClick: this.deactivateAccount
					}, a.a.createElement(bt, null), r.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && a.a.createElement(C.a, {
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
					}), e && a.a.createElement(ut.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && a.a.createElement(le.a, {
						isResponsiveSettingsEnabled: o
					})), n && a.a.createElement(E.a, {
						className: pt.a.googleDisconnectIFrame,
						pageLayer: l,
						path: me.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var Ct = Object(pe.t)()(_t(Et)),
				wt = n("./src/reddit/reducers/user/prefs/index.ts"),
				kt = n("./src/reddit/actions/chat/constants.ts"),
				St = n("./src/reddit/actions/chat/userSettings.ts"),
				Ot = n("./src/reddit/actions/userBlocks.ts"),
				jt = n("./src/reddit/actions/userWhitelist.ts"),
				Pt = n("./src/lib/timeAgo/index.ts"),
				Nt = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				It = n("./src/reddit/components/Hovercards/helpers.ts"),
				At = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Tt = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				Mt = n.n(Tt);
			const Rt = we.a.p("Date", Mt.a),
				Bt = we.a.wrapped(At.a, "UserNameAndIcon", Mt.a),
				Lt = we.a.button("Button", Mt.a),
				Dt = we.a.div("ButtonWrapper", Mt.a);
			var Ft = we.a.wrapped(e => a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(Bt, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(It.b)({
						author: e.name,
						tooltipIdPrefix: Nt.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), a.a.createElement(Rt, null, Object(Pt.d)(e.date / 1e3)), a.a.createElement(Dt, null, a.a.createElement(Lt, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", Mt.a),
				Ut = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				Ht = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				Wt = n.n(Ht);
			const Gt = 5,
				qt = we.a.h4("ListHeading", Wt.a),
				zt = we.a.div("ListBox", Wt.a),
				Vt = we.a.div("MoreWrapper", Wt.a),
				Yt = we.a.button("MoreButton", Wt.a),
				Jt = we.a.wrapped(Q.m, "Subtext", Wt.a);
			class Kt extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === Ut.a.pending && this.props.api.new === Ut.a.waitingForRequest && this.setState({
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
						className: Object(u.a)(Wt.a.container, n, {
							[Wt.a.mPadBottom]: !!i
						})
					}, a.a.createElement(qt, null, m), void 0 !== p && a.a.createElement(Jt, null, p), a.a.createElement(A.a, {
						buttonText: r.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: s.new === Ut.a.pending,
						label: d,
						onClick: () => t && o(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), a.a.createElement(zt, null, l.slice(0, b).map(e => a.a.createElement(Ft, {
						disabled: s[e.name] === Ut.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Gt && !e ? a.a.createElement(Vt, null, a.a.createElement(Yt, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var Zt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Qt = n.n(Zt);
			const Xt = {
					[wt.b.Whitelisted]: () => r.fbt._("nobody", null, {
						hk: "30E0ty"
					}),
					[wt.b.Everyone]: () => r.fbt._("everyone", null, {
						hk: "4oXXLa"
					})
				},
				$t = e => {
					const t = Xt[e];
					return t && t()
				},
				en = we.a.div("ListsWrapper", Qt.a),
				tn = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var nn = Object(o.b)(tn, (e, t) => ({
					addBlocked: t => e(Object(Ot.h)(t)),
					addWhitelisted: t => e(Object(jt.g)(t)),
					removeWhitelisted: t => e(Object(jt.h)(t)),
					removeBlocked: t => e(Object(Ot.g)(t)),
					saveChatSettings: t => e(Object(St.c)(t))
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
					const d = Object.entries(wt.b).filter(e => e[1] === n)[0][0],
						u = Object(kt.b)(t.invitePolicy),
						m = [kt.a.anybody, kt.a.account_age_30_days, kt.a.nobody],
						p = [Object(kt.b)(kt.a.anybody), Object(kt.b)(kt.a.account_age_30_days), Object(kt.b)(kt.a.nobody)],
						b = $t(d),
						h = $t(n),
						f = [wt.b.Everyone, wt.b.Whitelisted],
						g = [$t(wt.b.Everyone), $t(wt.b.Whitelisted)];
					return a.a.createElement(ue.a, null, a.a.createElement(de.b, {
						isResponsiveSettingsEnabled: !1
					}, r.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), a.a.createElement(Q.d, {
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
					}), a.a.createElement(Q.d, {
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
					}), (t.invitePolicy !== kt.a.anybody || n === wt.b.Whitelisted) && a.a.createElement(en, null, a.a.createElement(Kt, {
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
				rn = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				sn = n.n(rn);

			function an(e) {
				return a.a.createElement("header", {
					className: Object(u.a)(sn.a.container, e.className)
				}, a.a.createElement("div", {
					className: sn.a.title
				}, r.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), a.a.createElement("div", {
					className: sn.a.tag
				}, r.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var on = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				cn = n("./src/reddit/contexts/ApiContext.tsx"),
				ln = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				dn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				un = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				mn = n("./src/reddit/selectors/economics.ts"),
				pn = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				bn = n.n(pn);
			const {
				fbt: hn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var fn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(fn || (fn = {}));
			class gn extends a.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(ln.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = fn.Default;
					e.connectCode && e.connectStateToken && (t = fn.Connecting), e.stripeConnected && (t = fn.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== fn.Connected) {
						const e = await Object(ln.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: fn.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: fn.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = hn._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === fn.Connected && (n = hn._("connect", null, {
						hk: "22jQRU"
					})), t === fn.Connecting && (n = hn._("connecting...", null, {
						hk: "3ccNPc"
					})), a.a.createElement("div", {
						className: e
					}, a.a.createElement(Z.a, null, hn._("accept tips", null, {
						hk: "1kEl0R"
					})), a.a.createElement(Q.k, {
						direction: "row",
						label: hn._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: hn._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, a.a.createElement("div", {
						className: bn.a.cta
					}, a.a.createElement(S.i, {
						className: bn.a.button,
						disabled: t !== fn.Default,
						onClick: this.initiateStripeConnect
					}, n), a.a.createElement("div", {
						className: bn.a.legal
					}, hn._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [hn._param("Previews Terms of Service", a.a.createElement(on.a, {
						className: bn.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), a.a.createElement("div", {
						className: bn.a.disclaimer
					}, a.a.createElement(un.a, {
						className: bn.a.icon
					}), hn._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const vn = Object(c.c)({
					stripeConnected: mn.u
				}),
				yn = Object(o.b)(vn, e => ({
					onError: t => e(Object(I.f)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(dn.a)(t)
					}))
				}));
			var xn = Object(cn.b)(yn(gn)),
				_n = n("./src/reddit/components/Settings/Creator/index.m.less"),
				En = n.n(_n);

			function Cn(e) {
				return a.a.createElement(ue.a, null, a.a.createElement("div", null, a.a.createElement(an, {
					className: En.a.header
				}), a.a.createElement(xn, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var wn = n("./src/lib/listingSort/index.ts"),
				kn = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				Sn = n("./src/higherOrderComponents/asTooltip.tsx"),
				On = n("./src/reddit/actions/tooltip.ts"),
				jn = n("./src/reddit/controls/Dropdown/index.tsx"),
				Pn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Nn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				In = n("./src/reddit/selectors/tooltip.ts"),
				An = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				Tn = n.n(An);
			const Mn = Object(Sn.a)(jn.a),
				Rn = Object(c.c)({
					isDropdownOpen: (e, t) => Object(In.b)(t.dropdownId)(e)
				});
			class Bn extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => a.a.createElement(Pn.b, {
						children: e.contentJsx || e.icon,
						className: Tn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => a.a.createElement(Pn.b, {
						children: e.contentJsx || e.icon,
						displayText: e.displayText,
						isSelected: t,
						key: e.key,
						noIcon: !e.icon,
						onClick: () => this.props.onSelect(e)
					})
				}
				render() {
					const {
						props: e
					} = this, {
						items: t,
						renderLabel: n = this.renderLabel,
						renderItem: r = this.renderDropdownItem,
						selectedKey: s
					} = this.props, o = t.find(e => e.key === s) || t[0];
					return a.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(Tn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, a.a.createElement("div", {
						className: Tn.a.labelWrapper
					}, n(o), a.a.createElement(Nn.b, null)), a.a.createElement(Mn, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => r(e, s === e.key))))
				}
			}
			var Ln = Object(o.b)(Rn, (e, t) => ({
					openDropdown: () => {
						e(Object(On.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Bn),
				Dn = n("./src/reddit/constants/listingSorts.ts");
			const Fn = [m.R.HOT, m.R.NEW, m.R.TOP, m.R.RISING];
			var Un = e => {
				const {
					dropdownId: t
				} = e, n = Fn.map(e => ({
					key: e,
					displayText: Object(Dn.a)(e),
					icon: a.a.createElement(kn.a, {
						sort: e
					})
				}));
				return a.a.createElement(Ln, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const Hn = [m.Yb.HOUR, m.Yb.DAY, m.Yb.WEEK, m.Yb.MONTH, m.Yb.YEAR, m.Yb.ALL];
			var Wn = e => {
					const {
						dropdownId: t
					} = e, n = Hn.map(e => ({
						key: e,
						displayText: Object(Dn.b)(e)
					}));
					return a.a.createElement(Ln, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				Gn = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				qn = n.n(Gn);
			const zn = we.a.div("Separator", qn.a);
			class Vn extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(wn.d)(this.props.fullSort);
						this.props.onChange(Object(wn.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(wn.d)(this.props.fullSort);
						this.props.onChange(Object(wn.c)({
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
					} = Object(wn.d)(t);
					return a.a.createElement(Q.c, {
						className: e,
						label: r.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: r.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, a.a.createElement("div", {
						className: qn.a.wrapper
					}, a.a.createElement(Un, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: s
					}), o && a.a.createElement(a.a.Fragment, null, a.a.createElement(zn, null), a.a.createElement(Wn, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: o
					}))))
				}
			}
			var Yn = n("./src/reddit/constants/postLayout.ts"),
				Jn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				Kn = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Zn = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				Qn = n("./src/reddit/controls/Dropdown/index.m.less"),
				Xn = n.n(Qn);
			const $n = {
				[Yn.d.Card]: Zn.a,
				[Yn.d.Classic]: Jn.a,
				[Yn.d.Compact]: Kn.a
			};

			function er(e) {
				const t = $n[e.layout];
				return a.a.createElement(t, {
					className: Xn.a.iconStyles
				})
			}
			const tr = [Yn.d.Card, Yn.d.Classic, Yn.d.Compact];
			var nr = e => {
					const {
						dropdownId: t
					} = e, n = tr.map(e => ({
						key: e,
						displayText: Object(Yn.h)(e),
						icon: a.a.createElement(er, {
							layout: e
						})
					}));
					return a.a.createElement(Ln, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				rr = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				sr = n.n(rr);
			class ar extends a.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: r,
						layout: s
					} = this.props;
					return a.a.createElement(Q.c, {
						className: e,
						label: n,
						subtext: r
					}, a.a.createElement("div", {
						className: sr.a.wrapper
					}, a.a.createElement(nr, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: s
					})))
				}
			}
			var or = n("./src/reddit/components/Settings/FeedForm.m.less"),
				ir = n.n(or);

			function cr({
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
					[ir.a["m-responsive"]]: e
				});
				return a.a.createElement(ue.a, null, a.a.createElement(de.b, {
					isResponsiveSettingsEnabled: e
				}, r.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), a.a.createElement(Z.a, null, r.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), a.a.createElement(Q.o, {
					on: o,
					onClick: () => f(!o, "over18"),
					label: r.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: r.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), a.a.createElement(Q.o, {
					disabled: !o,
					label: r.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!o && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: r.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), a.a.createElement(Q.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: r.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: r.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), a.a.createElement(Q.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: r.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: r.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), a.a.createElement(Q.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: r.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: r.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), a.a.createElement(Vn, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), a.a.createElement(Q.o, {
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
				}), a.a.createElement(ar, {
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
				}), a.a.createElement(Q.o, {
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
				}), a.a.createElement(Q.o, {
					className: g,
					on: !!s,
					onClick: () => f(!s, "openPostInNewTab"),
					label: r.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: r.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), a.a.createElement(Z.a, {
					className: g
				}, r.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), a.a.createElement(Q.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: r.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: r.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && a.a.createElement(a.a.Fragment, null, a.a.createElement(Z.a, null, r.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), a.a.createElement(Q.f, {
					label: r.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: r.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${ve.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var lr = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				dr = n("./src/reddit/helpers/trackers/notifications.ts"),
				ur = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				mr = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				pr = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				br = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				hr = n.n(br);
			var fr = ({
					isResponsiveSettingsEnabled: e,
					prefs: {
						emailUnsubscribe: t
					},
					update: n
				}) => {
					const [o, i] = Object(s.useState)(pr.a.Push), c = Object(xe.a)(), l = o === pr.a.Push, d = o === pr.a.Email;
					return a.a.createElement(ue.a, null, a.a.createElement("nav", {
						className: hr.a.nav
					}, a.a.createElement("button", {
						onClick: () => {
							i(l ? pr.a.Email : pr.a.Push)
						}
					}, a.a.createElement(de.b, {
						isResponsiveSettingsEnabled: e
					}, d && a.a.createElement(ur.a, {
						className: hr.a.arrowLeft
					}), l ? r.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : r.fbt._("Back", null, {
						hk: "26R5gK"
					}), l && a.a.createElement(mr.a, {
						className: hr.a.arrowRight
					})))), a.a.createElement(de.b, {
						isResponsiveSettingsEnabled: e
					}, l ? r.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : r.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					})), l ? a.a.createElement(lr.b, null) : a.a.createElement(a.a.Fragment, null, a.a.createElement(lr.a, null), a.a.createElement(Z.a, null), a.a.createElement(Q.o, {
						on: !!t,
						onClick: () => {
							c(Object(dr.a)(!!t)), n(!t, "emailUnsubscribe")
						},
						label: r.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					})))
				},
				gr = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				vr = n.n(gr);

			function yr(e) {
				return a.a.createElement("header", {
					className: Object(u.a)(vr.a.container, e.className)
				}, a.a.createElement("div", {
					className: vr.a.title
				}, r.fbt._("Payments", null, {
					hk: "rydT0"
				})), a.a.createElement("div", {
					className: vr.a.description
				}, r.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var xr = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				_r = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Er = n("./src/reddit/models/Payments/index.ts"),
				Cr = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				wr = n.n(Cr);
			class kr extends a.a.Component {
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
						const t = e.type === Er.a.SavedStripe ? await Object(ln.b)(this.props.apiContext(), e.id) : await Object(ln.c)(this.props.apiContext(), e.id);
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
					}, a.a.createElement(Z.a, null, r.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return a.a.createElement("div", {
							className: wr.a.payment,
							key: e.id
						}, a.a.createElement("div", {
							className: wr.a.paymentDisplay
						}, a.a.createElement(_r.a, {
							className: wr.a.lock
						}), e.display), a.a.createElement(S.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? r.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : r.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && a.a.createElement("div", {
						className: wr.a.noSavedPayment
					}, r.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Sr = Object(c.c)({
					savedPayments: mn.p
				}),
				Or = Object(o.b)(Sr, e => ({
					onError: t => e(Object(I.f)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(dn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Er.a.SavedStripe && e(Object(xr.a)({
							cardId: t.id
						})), t.type === Er.a.SavedPayPal && e(Object(xr.e)({
							sourceId: t.id
						}))
					}
				}));
			var jr = Object(cn.b)(Or(kr)),
				Pr = n("./src/reddit/components/Settings/Payments/index.m.less"),
				Nr = n.n(Pr);
			var Ir = () => a.a.createElement(ue.a, null, a.a.createElement(yr, {
					className: Nr.a.header
				}), a.a.createElement(jr, null)),
				Ar = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				Tr = n("./src/reddit/constants/experiments.ts"),
				Mr = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Rr = Object(c.a)(e => Object(Mr.c)(e, {
					experimentEligibilitySelector: Mr.a,
					experimentName: Tr.h
				}), e => e === Tr.c.Enabled),
				Br = Object(c.a)(e => Object(Mr.c)(e, {
					experimentEligibilitySelector: Mr.a,
					experimentName: Tr.f
				}), e => e === Tr.a.Enabled),
				Lr = we.a.span("SubheaderLink", Qt.a),
				Dr = we.a.button("GenerateBackupCodesButton", Qt.a),
				Fr = we.a.wrapped(Q.f, "ThirdPartyAuth", Qt.a),
				Ur = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: O.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: j.d,
					shouldConsolidateAdsPreferences: Br,
					shouldRemoveAdsPreferences: Rr
				}),
				Hr = Object(o.b)(Ur, (e, t) => ({
					addBlocked: t => e(Object(Ot.h)(t)),
					addWhitelisted: t => e(Object(jt.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(x.h)(K.h)),
					removeWhitelisted: t => e(Object(jt.h)(t)),
					removeBlocked: t => e(Object(Ot.g)(t)),
					saveChatSettings: t => e(Object(St.c)(t)),
					enable2FA: () => e(Object(y.d)()),
					disable2FA: () => e(Object(y.c)()),
					generateBackupCodes: () => e(Object(y.a)())
				}));
			var Wr = Hr(({
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
					openSSOCreatePasswordFor2FAModal: y,
					removeBlocked: x,
					update: _,
					shouldShowLocationBasedSetting: E,
					shouldShowCreatePasswordModal: C,
					shouldConsolidateAdsPreferences: w,
					shouldRemoveAdsPreferences: k
				}) => a.a.createElement(ue.a, null, a.a.createElement(de.b, {
					isResponsiveSettingsEnabled: v
				}, r.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), a.a.createElement(de.a, null, r.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [r.fbt._param("=Privacy & Security FAQs", a.a.createElement(Lr, null, r.fbt._("{=Privacy & Security FAQs}", [r.fbt._param("=Privacy & Security FAQs", a.a.createElement("a", {
					href: `${ve.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, r.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), a.a.createElement(Z.a, null, r.fbt._("Safety", null, {
					hk: "WyYmF"
				})), a.a.createElement(Kt, {
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
					remove: x,
					list: t,
					api: n,
					padBottom: !0
				}), w ? ((e, t, n, s, o, i, c, l, d, u, m) => a.a.createElement(a.a.Fragment, null, a.a.createElement(Z.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), a.a.createElement(Q.o, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && a.a.createElement(Q.o, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && a.a.createElement(Q.o, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), !u && a.a.createElement(Q.o, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), a.a.createElement(Z.a, null, r.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && a.a.createElement(Q.o, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), a.a.createElement(Z.a, null, r.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), a.a.createElement(Q.o, {
					on: m,
					onClick: () => s(!m, "thirdPartyPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(o, s, i, _, 0, E, 0, p, m, k, b) : ((e, t, n, s, o, i, c, l, d, u) => a.a.createElement(a.a.Fragment, null, a.a.createElement(Z.a, null, r.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), a.a.createElement(Q.o, {
					on: !e,
					onClick: () => s(!e, "hideFromRobots"),
					label: r.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: r.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && a.a.createElement(Q.o, {
					on: t,
					onClick: () => s(!t, "allowClickTracking"),
					label: r.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: r.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && a.a.createElement(Q.o, {
					on: n,
					onClick: () => s(!n, "activityRelevantAds"),
					label: r.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: r.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), a.a.createElement(Q.o, {
					on: o,
					onClick: () => s(!o, "thirdPartyDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: r.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), a.a.createElement(Q.o, {
					on: c,
					onClick: () => s(!c, "thirdPartySiteDataPersonalizedAds"),
					label: r.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && a.a.createElement(Q.o, {
					on: l,
					onClick: () => s(!l, "showLocationBasedRecommendations"),
					label: r.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: r.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && a.a.createElement(Q.o, {
					on: d,
					onClick: () => s(!d, "thirdPartySiteDataPersonalizedContent"),
					label: r.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: r.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(o, s, i, _, l, E, d, p, m, k), a.a.createElement(Z.a, null, r.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), a.a.createElement(Q.o, {
					on: c,
					onClick: () => {
						C ? y() : c ? f() : h()
					},
					label: r.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: a.a.createElement(a.a.Fragment, null, r.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && a.a.createElement(a.a.Fragment, null, " ", r.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", a.a.createElement(Dr, {
						type: "button",
						onClick: () => g()
					}, r.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), a.a.createElement(Fr, {
					className: Object(u.a)({
						[Qt.a["m-responsive"]]: v
					}),
					label: r.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${ve.a.redditUrl}/prefs/apps`,
					last: !0
				}), C && a.a.createElement(le.a, {
					isResponsiveSettingsEnabled: v
				}))),
				Gr = n("./src/reddit/actions/snoovatar.ts"),
				qr = n("./src/reddit/components/Loader/index.m.less"),
				zr = n.n(qr);
			class Vr extends a.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: r
					} = this.props;
					return e ? n ? n() : a.a.createElement(ze.a, {
						center: !0,
						className: zr.a.loadingIcon,
						sizePx: r || 10
					}) : t()
				}
			}
			var Yr = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				Jr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				Kr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Zr = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Qr = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Xr = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				$r = n("./src/reddit/selectors/structuredStyles.ts"),
				es = n("./src/reddit/selectors/subredditSettings.ts"),
				ts = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				ns = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				rs = n.n(ns);
			const {
				fbt: ss
			} = n("./node_modules/fbt/lib/FbtPublic.js"), as = 30, os = 200, is = Object(c.a)(P.i, es.a, P.ub, $r.n, fe.a, (e, t, n, r, s) => {
				const a = e && e.profileId,
					o = a && r[a] ? r[a].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(L.e)(e),
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
			}), cs = we.a.div("ImageUploaderLayout", rs.a), ls = we.a.wrapped(ts.a, "IconImageUploader", rs.a), ds = we.a.wrapped(Kr.a, "ProfileIcon", rs.a), us = we.a.wrapped(ts.a, "BannerImageUploader", rs.a), ms = we.a.wrapped(Jr.a, "ProfileBanner", rs.a), ps = we.a.div("ProfileModerationContent", rs.a), bs = we.a.wrapped(Xr.a, "PlusCircle", rs.a), hs = we.a.span("LabelText", rs.a), fs = we.a.span("ImageType", rs.a), gs = we.a.a("Link", rs.a), vs = we.a.img("DummyBanner", rs.a), ys = we.a.wrapped(Yr.a, "Preview", rs.a);
			class xs extends a.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(nt.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(nt.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(nt.c)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(nt.a)(this.props.showActiveCommunities))
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
						isDeletingBanner: y,
						isDeletingIcon: x,
						profileBannerUploading: _,
						profileIconUploading: E,
						publicDescription: w,
						title: k
					} = this.state, S = Object(u.a)({
						[rs.a["m-responsive"]]: l
					}), O = !!h && !Object(Qr.b)(h);
					return a.a.createElement(ue.a, {
						sidebar: a.a.createElement(ys, {
							bannerBackgroundImage: b,
							currentUserHasSnoovatar: !!g,
							editMode: !0,
							isEmployee: o,
							isDefaultIcon: !h || h.indexOf("avatar_default") > -1,
							isDeletingBanner: y,
							isDeletingIcon: x,
							isGold: i,
							isNSFW: m,
							isOverlay: !1,
							isOwnProfile: !0,
							onClickSnoovatar: d,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							prefersReducedAnimations: p,
							profileIcon: h,
							publicDescription: w,
							snoovatarUrl: g,
							recentAwardings: e,
							title: k,
							url: s,
							userCreated: n,
							username: r
						})
					}, a.a.createElement(de.b, {
						isResponsiveSettingsEnabled: l
					}, ss._("Customize profile", null, {
						hk: "1fenXK"
					})), a.a.createElement(Z.a, null, ss._("Profile Information", null, {
						hk: "3vzAUk"
					})), a.a.createElement(Q.e, {
						label: ss._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							k !== this.props.title && this.updateProfile(k, "title")
						},
						placeholder: ss._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: as,
						subtext: ss._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: k
					}), a.a.createElement(Q.g, {
						label: ss._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							w !== this.props.publicDescription && this.updateProfile(w, "publicDescription")
						},
						placeholder: ss._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: os,
						subtext: ss._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: w
					}), a.a.createElement(Z.a, null, ss._("Images", null, {
						hk: "38DOkf"
					})), a.a.createElement(Q.k, {
						label: ss._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: ss._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, a.a.createElement(cs, {
						className: Object(u.a)(S)
					}, O ? a.a.createElement(ds, {
						className: S,
						iconUrl: h,
						isNSFW: !1,
						userName: r
					}) : a.a.createElement(ls, {
						className: S,
						controlName: "profileIcon",
						icon: a.a.createElement(bs, null),
						isUploading: E,
						label: a.a.createElement(hs, null, ss._("Drag and Drop or Upload {=Avatar} Image", [ss._param("=Avatar", a.a.createElement(fs, null, ss._("Avatar", null, {
							hk: "1SX0Ja"
						})))], {
							hk: "1L8jee"
						})),
						labelClassName: rs.a.Label,
						onChange: this.onIconChange
					}), b ? a.a.createElement(ms, {
						bannerUrl: b,
						className: S,
						isNSFW: !1,
						userName: r
					}) : a.a.createElement(us, {
						className: S,
						controlName: "profileBanner",
						icon: a.a.createElement(bs, null),
						isUploading: _,
						label: a.a.createElement(hs, null, ss._("Drag and Drop or Upload {=Banner} Image", [ss._param("=Banner", a.a.createElement(fs, null, ss._("Banner", null, {
							hk: "p8p59"
						})))], {
							hk: "27Vodt"
						})),
						labelClassName: rs.a.Label,
						onChange: this.onBannerChange
					}))), a.a.createElement(Z.a, null, ss._("Profile category", null, {
						hk: "1YRE6p"
					})), a.a.createElement(Q.o, {
						label: ss._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: m,
						subtext: ss._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), a.a.createElement(Z.a, null, ss._("Advanced", null, {
						hk: "1US2Ur"
					})), a.a.createElement(Q.o, {
						label: ss._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: ss._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [ss._param("profileForm: r/all link", a.a.createElement(gs, {
							href: "/r/all"
						}, "r/all")), ss._param("profileForm: /users link", a.a.createElement(gs, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), a.a.createElement(Q.o, {
						label: ss._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: ss._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: f,
						onClick: this.onShowActiveCommunitiesChange
					}), a.a.createElement(Z.a, null, ss._("Profile moderation", null, {
						hk: "3vDS8h"
					})), a.a.createElement(ps, null, ss._("For moderation tools please visit our {=Profile Moderation page}", [ss._param("=Profile Moderation page", a.a.createElement(gs, {
						href: `/user/${r}/about/edit/moderation`
					}, ss._("Profile Moderation page", null, {
						hk: "3aLzgu"
					})))], {
						hk: "2aZaeC"
					})), c && a.a.createElement(C.a, {
						headerText: ss._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: ss._("If your account contains {=NSFW content} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [ss._param("=NSFW content", a.a.createElement(gs, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, ss._("NSFW content", null, {
							hk: "1z25tj"
						})))], {
							hk: "21EvqC"
						}),
						cancelText: ss._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: ss._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: v,
						onOverlayClick: v,
						overlayClassName: Object(u.a)({
							[rs.a.ResponsiveOverlay]: l
						}),
						withOverlay: !0
					}), a.a.createElement(vs, {
						src: b
					}))
				}
			}
			const _s = Object(o.b)(is, e => ({
					imageDeleteRequested: t => e(Object(k.A)(t)),
					imagesUpdateRequested: (t, n) => e(Object(k.B)(t, n)),
					onClickSnoovatar: () => e(Object(Gr.b)("profile_overview")),
					save: (t, n) => e(Object(k.G)(t, n)),
					toggleNSFWModal: () => e(Object(x.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(Zr.c)(xs)),
				Es = Object(c.c)({
					isLoading: e => !Object(es.a)(e)
				}),
				Cs = Object(o.b)(Es)(Vr);

			function ws(e) {
				return a.a.createElement(Cs, {
					loaderSize: 50,
					render: () => a.a.createElement(_s, e)
				})
			}
			var ks = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Ss = n.n(ks);

			function Os(e) {
				return a.a.createElement("header", {
					className: e.className
				}, a.a.createElement("div", {
					className: Ss.a.title
				}, r.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), a.a.createElement("div", {
					className: Ss.a.subtitle
				}, r.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var js = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ps = n("./src/reddit/actions/governance/communityDetails.ts"),
				Ns = n("./src/lib/addQueryParams/index.ts"),
				Is = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				As = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				Ts = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				Ms = n.n(Ts);
			const {
				fbt: Rs
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Bs = Object(c.c)({
				userId: e => {
					const t = Object(P.i)(e);
					return t ? t.id : ""
				}
			});
			var Ls = Object(o.b)(Bs)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, r = t.primaryColor, s = Object(Ns.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return a.a.createElement("div", {
						className: Ms.a.body
					}, a.a.createElement("section", {
						className: Ms.a.leftSection
					}, a.a.createElement("div", {
						className: Ms.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), a.a.createElement("div", {
						className: Ms.a.content
					}, a.a.createElement(Is.a, {
						index: "1",
						color: r
					}, Rs._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), a.a.createElement(Is.a, {
						index: "2",
						color: r
					}, Rs._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), a.a.createElement(Is.a, {
						index: "3",
						color: r
					}, Rs._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), a.a.createElement("section", {
						className: Ms.a.rightSection
					}, a.a.createElement(As.a, {
						url: s,
						scale: 4
					})))
				})),
				Ds = n("./src/reddit/constants/colors.ts"),
				Fs = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				Us = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				Hs = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ws = n("./src/reddit/components/Economics/Price/index.tsx"),
				Gs = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				qs = n("./src/lib/currency/centsToDollars/index.ts"),
				zs = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				Vs = n.n(zs);
			const Ys = [() => r.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => r.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => r.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => r.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				Js = [() => r.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => r.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => r.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => r.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function Ks({
				benefit: e,
				color: t
			}) {
				return a.a.createElement("li", {
					className: Vs.a.benefit
				}, a.a.createElement("div", {
					className: Vs.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(cn.b)(Object(Zr.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: s
				} = e;
				return a.a.createElement("div", {
					className: Object(u.a)(Vs.a.container, t)
				}, a.a.createElement("div", {
					className: Vs.a.topLine
				}, a.a.createElement(Gs.a, {
					className: Vs.a.brand,
					subreddit: s
				}), a.a.createElement("div", {
					className: Vs.a.title
				}, r.fbt._("{community} Supporter Membership", [r.fbt._param("community", s.displayText)], {
					hk: "eZ8PH"
				}))), a.a.createElement("header", {
					className: Vs.a.subTitle
				}, r.fbt._("Support the {community} community and receive exclusive access to premium features.", [r.fbt._param("community", s.displayText)], {
					hk: "2pm4PV"
				})), a.a.createElement("article", null, a.a.createElement("div", {
					className: Vs.a.benefitsTitle
				}, r.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), a.a.createElement("ul", {
					className: Vs.a.benefits
				}, Ys.map(e => a.a.createElement(Ks, {
					benefit: e(),
					key: e()
				}))), a.a.createElement("div", {
					className: Vs.a.benefitsTitle
				}, r.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), a.a.createElement("ul", {
					className: Vs.a.benefits
				}, Js.map(e => a.a.createElement(Ks, {
					benefit: e(),
					key: e()
				})))), a.a.createElement("footer", {
					className: Vs.a.price
				}, r.fbt._("${price}/month", [r.fbt._param("price", Object(qs.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var Zs = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				Qs = n.n(Zs);
			const {
				fbt: Xs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $s = e => Xs._("You've been supporting the community and the development of new features since {joinDate}.", [Xs._param("joinDate", e)], {
				hk: "37ImIl"
			}), ea = [Xs._("Loyalty badge", null, {
				hk: "15DctX"
			}), Xs._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), Xs._("Distinguished username", null, {
				hk: "4vsJEd"
			}), Xs._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var ta = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: r,
					title: s
				} = e, o = r.primaryColor;
				return a.a.createElement("div", {
					className: Qs.a.card,
					style: {
						borderColor: o
					}
				}, a.a.createElement(Gs.a, {
					className: Qs.a.brand,
					subreddit: r
				}), a.a.createElement("div", {
					className: Qs.a.cardContent
				}, a.a.createElement("div", {
					className: Qs.a.cardTitle
				}, s), a.a.createElement(Ws.a, {
					className: Qs.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: r.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), a.a.createElement("div", {
					className: Qs.a.membershipMsg
				}, $s(t)), a.a.createElement("div", {
					className: Qs.a.benefitsTitle
				}, Xs._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), a.a.createElement("ul", {
					className: Qs.a.benefits
				}, ea.map(e => a.a.createElement(Ks, {
					benefit: e,
					color: o,
					key: e
				})))))
			};
			const {
				fbt: na
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ra = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: r,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(o.d)(), m = Object(xe.a)();
					Object(s.useEffect)(() => {
						c && (d(Object(Ps.a)({
							subredditId: c.id
						})), m(Object(Us.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(Fs.a)(p, void 0, Ds.b.white);
					return a.a.createElement("div", {
						className: Object(u.a)(t, Qs.a.pointsContainer)
					}, a.a.createElement("header", {
						className: Qs.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, na._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), a.a.createElement(Hs.a, {
						className: Qs.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), a.a.createElement("article", {
						className: Qs.a.content
					}, c && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ls, {
						subreddit: c
					}), a.a.createElement(ta, {
						joinDate: n,
						membership: r,
						subreddit: c,
						title: l
					}))))
				},
				sa = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				aa = n("./src/reddit/actions/governance/errorToast.ts"),
				oa = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: ia
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ca = Object(o.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(sa.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(aa.a)(e, t)
			}));
			var la = Object(cn.b)(ca((function(e) {
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
					className: Object(u.a)(n, Qs.a.container)
				}, a.a.createElement("header", {
					className: Qs.a.header
				}, ia._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), a.a.createElement(Hs.a, {
					className: Qs.a.close,
					onClick: l
				})), a.a.createElement("article", {
					className: Qs.a.content
				}, a.a.createElement("div", {
					className: Qs.a.warning
				}, ia._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [ia._param("subredditName", g), ia._param("endDate", r)], {
					hk: "1POMMH"
				})), m && a.a.createElement(ta, {
					joinDate: o,
					membership: i,
					subreddit: m,
					title: b
				})), a.a.createElement("footer", {
					className: Qs.a.footer
				}, a.a.createElement(S.l, {
					disabled: h,
					onClick: async () => {
						f(!0);
						const e = await Object(oa.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, h ? ia._("canceling...", null, {
					hk: "1Ggy36"
				}) : ia._("cancel membership", null, {
					hk: "C9ZhO"
				})), a.a.createElement(S.i, {
					onClick: l
				}, ia._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const da = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				ua = Object(o.b)(da);
			var ma = Object(js.a)(ua((function(e) {
					return "points" === e.membership.currency ? a.a.createElement(ra, e) : a.a.createElement(la, e)
				}))),
				pa = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				ba = n.n(pa);

			function ha(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class fa extends a.a.Component {
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
					} = t, i = ha(s.endsAt), c = ha(s.publishAt), l = !o.renew, d = n ? n.displayText : "", m = i ? r.fbt._("Cancelled. Will expire on {date}", [r.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? r.fbt._("Joined {date}", [r.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return a.a.createElement("div", {
						className: Object(u.a)(e, ba.a.container)
					}, a.a.createElement("div", {
						className: ba.a.membershipName
					}, r.fbt._("{subredditName} {title}", [r.fbt._param("subredditName", d), r.fbt._param("title", s.title)], {
						hk: "2NdAdN"
					})), !l && a.a.createElement("div", {
						className: ba.a.joinDate,
						title: p
					}, p), l && a.a.createElement("div", {
						className: ba.a.cancelled,
						title: m
					}, m), a.a.createElement(S.o, {
						className: ba.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && a.a.createElement(ma, {
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
			const ga = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var va = Object(o.b)(ga)(fa),
				ya = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				xa = n.n(ya);
			const _a = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var Ea = Object(o.b)(_a)((function(e) {
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
						className: xa.a.title
					}, r.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => a.a.createElement("div", {
						className: xa.a.loading,
						key: t
					})), i && o.map(e => a.a.createElement(va, {
						key: e.membership.subredditId,
						className: xa.a.membership,
						subscription: e
					})), !n && !i && a.a.createElement("div", {
						className: xa.a.empty
					}, r.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Ca = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				wa = n.n(Ca);

			function ka(e) {
				return a.a.createElement(ue.a, {
					className: e.className
				}, a.a.createElement(Os, {
					className: wa.a.header
				}), a.a.createElement(Ea, null))
			}
			var Sa = n("./src/reddit/components/TabNav/index.tsx"),
				Oa = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ja = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Pa = n("./src/reddit/selectors/platform.ts"),
				Na = n("./src/reddit/selectors/responsiveSettings.ts"),
				Ia = n("./src/reddit/pages/Settings/index.m.less"),
				Aa = n.n(Ia);
			const Ta = (e, t, n) => [{
					key: m.Tb.Account,
					title: r.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Tb.Profile,
					title: r.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Tb.Privacy,
					title: r.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Tb.Feed,
					title: r.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Tb.Notifications,
					title: r.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Tb.Premium,
					title: r.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: Aa.a.CreatorTab,
					key: m.Tb.Creator,
					title: r.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: Aa.a.PaymentsTab,
					key: m.Tb.Payments,
					title: r.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: Aa.a.SpecialMembershipTab,
					key: m.Tb.SpecialMembership,
					title: r.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: Aa.a.MessagingTab,
					key: m.Tb.Messaging,
					title: r.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				Ma = Object(c.c)({
					savedPayments: mn.p,
					userIsWhitelistedCreator: mn.x,
					allowNavigationCallback: Pa.a,
					isResponsiveSettingsEnabled: Na.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				Ra = Object(pe.t)(),
				Ba = Object(o.b)(Ma, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(k.H)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				La = {
					activityRelevantAds: "personalization_activity_relevant_ads",
					acceptPrivateMessages: "recieve_messages",
					allowClickTracking: "privacy_log_outbound_clicks",
					autoplayVideo: "video_autoplay",
					collapseReadMessages: "collapse_messages",
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
			class Da extends a.a.Component {
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
						La.hasOwnProperty(t) && this.props.sendEvent(r => ({
							source: this.getSource(),
							action: "save",
							noun: La[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== m.Tb.Account ? `settings_${e}` : "settings"
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
							case m.Tb.Account:
								return a.a.createElement(Ct, i);
							case m.Tb.Profile:
								return a.a.createElement(ws, i);
							case m.Tb.Premium:
								return a.a.createElement(Ar.b, i);
							case m.Tb.Notifications:
								return a.a.createElement(fr, i);
							case m.Tb.Privacy:
								return a.a.createElement(Wr, i);
							case m.Tb.Messaging:
								return a.a.createElement(nn, i);
							case m.Tb.Feed:
								return a.a.createElement(cr, i);
							case m.Tb.Payments:
								return a.a.createElement(Ir, null);
							case m.Tb.Creator: {
								const e = Object(p.a)(r.search);
								return s ? a.a.createElement(Cn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Tb.SpecialMembership:
								return o ? a.a.createElement(ka, null) : null;
							default:
								return a.a.createElement(Ct, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(ja.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Tb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Tb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = a.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return a.a.createElement(Sa.a, {
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
					Object(Oa.d)(Oa.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = m.Tb.Account
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
					Object(Oa.b)(Oa.a.PremiumSettings)
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
						className: Object(u.a)(Aa.a.Container, {
							[Aa.a["m-responsive"]]: t
						})
					}, a.a.createElement(Sa.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: r.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						icon: Sa.b.GEAR,
						onTouchMove: this.startScrolling
					}, Ta(n, s, o).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = Ra(Ba(Object(Zr.c)(Da)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/config.ts");
			const s = (e, t) => `${r.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
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
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "x", (function() {
				return B
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Gold/Powerups/index.ts"),
				l = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups.ts");
			const h = [],
				f = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
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
			const y = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
						const n = g(e, t),
							r = Date.now();
						return n && r < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				x = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === m.a.Fetched) {
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

			function _(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const E = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return h;
					return _(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				C = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function k(e, t) {
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

			function S(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
				}
				return h
			}

			function O(e, t) {
				const n = S(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return h
			}

			function P(e, t) {
				return S(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: l.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var I;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(I || (I = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = f(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				R = (e, t) => {
					const n = e.subreddits.gov.meta[t || ""],
						r = n && n.extra && n.extra.nomenclature || A;
					return {
						prices: M(e, t),
						member: r.member || A.member,
						memberPlural: r.memberPlural || A.memberPlural,
						memberAlt: r.memberAlt || A.memberAlt,
						memberAltPlural: r.memberAltPlural || A.memberAltPlural,
						membership: r.membership || A.membership,
						membershipAlt: r.membershipAlt || A.membershipAlt
					}
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				F = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				H = (e, t, n) => {
					const s = "replyToPost" !== n && Object(p.a)(e, {
						commentId: n
					});
					if (!!s && Object(a.a)(s)) return !0;
					if (t && Object(b.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const o = r.d.spGiphy(e),
						i = U(e, t);
					return o && i
				},
				W = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				G = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				a = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, a, o;
					return t ? e.subreddits.productOffers[Object(s.a)(n, t)] : null === (o = null === (a = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === o ? void 0 : o[Object(s.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return n && n[0]
				},
				d = e => {
					const t = c(e, {
						type: a.c.Premium
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === t),
				m = Object(r.a)(d, o.p, (e, t) => u(e, t))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.27b6f9b0a046006f2947.js.map