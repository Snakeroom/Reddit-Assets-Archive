// https://www.redditstatic.com/desktop2x/Settings.31ee1219943082919b48.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var s = {
				single_source_shortest_paths: function(e, t, n) {
					var r = {},
						a = {};
					a[t] = 0;
					var o, i, c, l, d, u, m, p = s.PriorityQueue.make();
					for (p.push(t, 0); !p.empty();)
						for (c in i = (o = p.pop()).value, l = o.cost, d = e[i] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = a[c], (void 0 === a[c] || m > u) && (a[c] = u, p.push(c, u), r[c] = i));
					if (void 0 !== n && void 0 === a[n]) {
						var h = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(h)
					}
					return r
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], s = t; s;) n.push(s), e[s], s = e[s];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var r = s.single_source_shortest_paths(e, t, n);
					return s.extract_shortest_path_from_predecessor_list(r, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = s.PriorityQueue,
							r = {};
						for (t in e = e || {}, n) n.hasOwnProperty(t) && (r[t] = n[t]);
						return r.queue = [], r.sorter = e.sorter || n.default_sorter, r
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
			e.exports = s
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, r, a) {
				for (var o = -1, i = s(n((t - e) / (r || 1)), 0), c = Array(i); i--;) c[a ? i : ++o] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && r(t, n, o) && (n = o = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), o = void 0 === o ? t < n ? 1 : -1 : a(o), s(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/can-promise.js"),
				r = n("./node_modules/qrcode/lib/core/qrcode.js"),
				a = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				o = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, n, a, o) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					l = "function" == typeof i[c - 1];
				if (!l && !s()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = a = void 0) : 2 !== c || t.getContext || (a = n, n = t, t = void 0), new Promise((function(s, o) {
						try {
							var i = r.create(n, a);
							s(e(i, t, a))
						} catch (c) {
							o(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (o = n, n = t, t = a = void 0) : 3 === c && (t.getContext && void 0 === o ? (o = a, a = void 0) : (o = a, a = n, n = t, t = void 0));
				try {
					var d = r.create(n, a);
					o(null, e(d, t, a))
				} catch (u) {
					o(u)
				}
			}
			t.create = r.create, t.toCanvas = i.bind(null, a.render), t.toDataURL = i.bind(null, a.renderToDataURL), t.toString = i.bind(null, (function(e, t, n) {
				return o.render(e, n)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, n = s(e), r = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), a = [n - 7], o = 1; o < t - 1; o++) a[o] = a[o - 1] - r;
				return a.push(6), a.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], s = t.getRowColCoords(e), r = s.length, a = 0; a < r; a++)
					for (var o = 0; o < r; o++) 0 === a && 0 === o || 0 === a && o === r - 1 || a === r - 1 && 0 === o || n.push([s[a], s[o]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function a(e) {
				this.mode = s.ALPHANUMERIC, this.data = e
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
					var n = 45 * r.indexOf(this.data[t]);
					n += r.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(r.indexOf(this.data[t]), 6)
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
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function r(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = s.alloc(e * e), this.reservedBit = s.alloc(e * e)
			}
			r.prototype.set = function(e, t, n, s) {
				var r = e * this.size + t;
				this.data[r] = n, s && (this.reservedBit[r] = !0)
			}, r.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, r.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, r.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/mode.js");

			function a(e) {
				this.mode = r.BYTE, this.data = s.from(e)
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
			var s = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				r = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				a = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case s.L:
						return r[4 * (e - 1) + 0];
					case s.M:
						return r[4 * (e - 1) + 1];
					case s.Q:
						return r[4 * (e - 1) + 2];
					case s.H:
						return r[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case s.L:
						return a[4 * (e - 1) + 0];
					case s.M:
						return a[4 * (e - 1) + 1];
					case s.Q:
						return a[4 * (e - 1) + 2];
					case s.H:
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
				} catch (s) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = s(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/utils.js"),
				r = s.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, a = n << 10; s.getBCHDigit(a) - r >= 0;) a ^= 1335 << s.getBCHDigit(a) - r;
				return 21522 ^ (n << 10 | a)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = s.alloc(512),
				a = s.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) r[t] = e, a[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) r[t] = r[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return a[e]
			}, t.exp = function(e) {
				return r[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : r[a[e] + a[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/qrcode/lib/core/utils.js");

			function a(e) {
				this.mode = s.KANJI, this.data = e
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
					var n = r.toSJIS(this.data[t]);
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
				s = 3,
				r = 40,
				a = 10;

			function o(e, n, s) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (n + s) % 2 == 0;
					case t.Patterns.PATTERN001:
						return n % 2 == 0;
					case t.Patterns.PATTERN010:
						return s % 3 == 0;
					case t.Patterns.PATTERN011:
						return (n + s) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return n * s % 2 + n * s % 3 == 0;
					case t.Patterns.PATTERN110:
						return (n * s % 2 + n * s % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (n * s % 3 + (n + s) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, s = 0, r = 0, a = 0, o = null, i = null, c = 0; c < t; c++) {
					r = a = 0, o = i = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === o ? r++ : (r >= 5 && (s += n + (r - 5)), o = d, r = 1), (d = e.get(l, c)) === i ? a++ : (a >= 5 && (s += n + (a - 5)), i = d, a = 1)
					}
					r >= 5 && (s += n + (r - 5)), a >= 5 && (s += n + (a - 5))
				}
				return s
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, r = 0; r < t - 1; r++)
					for (var a = 0; a < t - 1; a++) {
						var o = e.get(r, a) + e.get(r, a + 1) + e.get(r + 1, a) + e.get(r + 1, a + 1);
						4 !== o && 0 !== o || n++
					}
				return n * s
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, s = 0, a = 0, o = 0; o < t; o++) {
					s = a = 0;
					for (var i = 0; i < t; i++) s = s << 1 & 2047 | e.get(o, i), i >= 10 && (1488 === s || 93 === s) && n++, a = a << 1 & 2047 | e.get(i, o), i >= 10 && (1488 === a || 93 === a) && n++
				}
				return n * r
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, s = 0; s < n; s++) t += e.data[s];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * a
			}, t.applyMask = function(e, t) {
				for (var n = t.size, s = 0; s < n; s++)
					for (var r = 0; r < n; r++) t.isReserved(r, s) || t.xor(r, s, o(e, r, s))
			}, t.getBestMask = function(e, n) {
				for (var s = Object.keys(t.Patterns).length, r = 0, a = 1 / 0, o = 0; o < s; o++) {
					n(o), t.applyMask(o, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(o, e), i < a && (a = i, r = o)
				}
				return r
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/version-check.js"),
				r = n("./node_modules/qrcode/lib/core/regex.js");
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
				if (!s.isValid(t)) throw new Error("Invalid version: " + t);
				return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
			}, t.getBestModeForData = function(e) {
				return r.testNumeric(e) ? t.NUMERIC : r.testAlphanumeric(e) ? t.ALPHANUMERIC : r.testKanji(e) ? t.KANJI : t.BYTE
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
				} catch (s) {
					return n
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js");

			function r(e) {
				this.mode = s.NUMERIC, this.data = e.toString()
			}
			r.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				var t, n, s;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), s = parseInt(n, 10), e.put(s, 10);
				var r = this.data.length - t;
				r > 0 && (n = this.data.substr(t), s = parseInt(n, 10), e.put(s, 3 * r + 1))
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = s.alloc(e.length + t.length - 1), a = 0; a < e.length; a++)
					for (var o = 0; o < t.length; o++) n[a + o] ^= r.mul(e[a], t[o]);
				return n
			}, t.mod = function(e, t) {
				for (var n = s.from(e); n.length - t.length >= 0;) {
					for (var a = n[0], o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], a);
					for (var i = 0; i < n.length && 0 === n[i];) i++;
					n = n.slice(i)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = s.from([1]), a = 0; a < e; a++) n = t.mul(n, [1, r.exp(a)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/utils.js"),
				a = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = n("./node_modules/qrcode/lib/core/bit-buffer.js"),
				i = n("./node_modules/qrcode/lib/core/bit-matrix.js"),
				c = n("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				l = n("./node_modules/qrcode/lib/core/finder-pattern.js"),
				d = n("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				m = n("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				p = n("./node_modules/qrcode/lib/core/version.js"),
				h = n("./node_modules/qrcode/lib/core/format-info.js"),
				b = n("./node_modules/qrcode/lib/core/mode.js"),
				f = n("./node_modules/qrcode/lib/core/segments.js"),
				g = n("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, t, n) {
				var s, r, a = e.size,
					o = h.getEncodedBits(t, n);
				for (s = 0; s < 15; s++) r = 1 == (o >> s & 1), s < 6 ? e.set(s, 8, r, !0) : s < 8 ? e.set(s + 1, 8, r, !0) : e.set(a - 15 + s, 8, r, !0), s < 8 ? e.set(8, a - s - 1, r, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, r, !0) : e.set(8, 15 - s - 1, r, !0);
				e.set(a - 8, 8, 1, !0)
			}

			function y(e, t, n) {
				var a = new o;
				n.forEach((function(t) {
					a.put(t.mode.bit, 4), a.put(t.getLength(), b.getCharCountIndicator(t.mode, e)), t.write(a)
				}));
				var i = 8 * (r.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (a.getLengthInBits() + 4 <= i && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
				for (var c = (i - a.getLengthInBits()) / 8, l = 0; l < c; l++) a.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var a = r.getSymbolTotalCodewords(t), o = u.getTotalCodewordsCount(t, n), i = a - o, c = u.getBlocksCount(t, n), l = c - a % c, d = Math.floor(a / c), p = Math.floor(i / c), h = p + 1, b = d - p, f = new m(b), g = 0, v = new Array(c), y = new Array(c), x = 0, _ = s.from(e.buffer), C = 0; C < c; C++) {
						var w = C < l ? p : h;
						v[C] = _.slice(g, g + w), y[C] = f.encode(v[C]), g += w, x = Math.max(x, w)
					}
					var E, k, S = s.alloc(a),
						O = 0;
					for (E = 0; E < x; E++)
						for (k = 0; k < c; k++) E < v[k].length && (S[O++] = v[k][E]);
					for (E = 0; E < b; E++)
						for (k = 0; k < c; k++) S[O++] = y[k][E];
					return S
				}(a, e, t)
			}

			function x(e, t, n, s) {
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
				var h = y(t, n, a),
					b = r.getSymbolSize(t),
					x = new i(b);
				return function(e, t) {
						for (var n = e.size, s = l.getPositions(t), r = 0; r < s.length; r++)
							for (var a = s[r][0], o = s[r][1], i = -1; i <= 7; i++)
								if (!(a + i <= -1 || n <= a + i))
									for (var c = -1; c <= 7; c++) o + c <= -1 || n <= o + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(a + i, o + c, !0, !0) : e.set(a + i, o + c, !1, !0))
					}(x, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var s = n % 2 == 0;
							e.set(n, 6, s, !0), e.set(6, n, s, !0)
						}
					}(x),
					function(e, t) {
						for (var n = c.getPositions(t), s = 0; s < n.length; s++)
							for (var r = n[s][0], a = n[s][1], o = -2; o <= 2; o++)
								for (var i = -2; i <= 2; i++) - 2 === o || 2 === o || -2 === i || 2 === i || 0 === o && 0 === i ? e.set(r + o, a + i, !0, !0) : e.set(r + o, a + i, !1, !0)
					}(x, t), v(x, n, 0), t >= 7 && function(e, t) {
						for (var n, s, r, a = e.size, o = p.getEncodedBits(t), i = 0; i < 18; i++) n = Math.floor(i / 3), s = i % 3 + a - 8 - 3, r = 1 == (o >> i & 1), e.set(n, s, r, !0), e.set(s, n, r, !0)
					}(x, t),
					function(e, t) {
						for (var n = e.size, s = -1, r = n - 1, a = 7, o = 0, i = n - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(r, i - c)) {
										var l = !1;
										o < t.length && (l = 1 == (t[o] >>> a & 1)), e.set(r, i - c, l), -1 === --a && (o++, a = 7)
									} if ((r += s) < 0 || n <= r) {
									r -= s, s = -s;
									break
								}
							}
					}(x, h), isNaN(s) && (s = d.getBestMask(x, v.bind(null, x, n))), d.applyMask(s, x), v(x, n, s), {
						modules: x,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: s,
						segments: a
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, s, o = a.M;
				return void 0 !== t && (o = a.from(t.errorCorrectionLevel, a.M), n = p.from(t.version), s = d.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)), x(e, n, o, s)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				r = n("./node_modules/qrcode/lib/core/polynomial.js"),
				a = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function o(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			o.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
			}, o.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = s.alloc(this.degree),
					n = a.concat([e, t], e.length + this.degree),
					o = r.mod(n, this.genPoly),
					i = this.degree - o.length;
				if (i > 0) {
					var c = s.alloc(this.degree);
					return o.copy(c, i), c
				}
				return o
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				s = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(s, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var r = new RegExp("^" + n + "$"),
				a = new RegExp("^[0-9]+$"),
				o = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return r.test(e)
			}, t.testNumeric = function(e) {
				return a.test(e)
			}, t.testAlphanumeric = function(e) {
				return o.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/core/mode.js"),
				r = n("./node_modules/qrcode/lib/core/numeric-data.js"),
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
				for (var s, r = []; null !== (s = e.exec(n));) r.push({
					data: s[0],
					index: s.index,
					mode: t,
					length: s[0].length
				});
				return r
			}

			function p(e) {
				var t, n, r = m(c.NUMERIC, s.NUMERIC, e),
					a = m(c.ALPHANUMERIC, s.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, s.BYTE, e), n = m(c.KANJI, s.KANJI, e)) : (t = m(c.BYTE_KANJI, s.BYTE, e), n = []), r.concat(a, t, n).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function h(e, t) {
				switch (t) {
					case s.NUMERIC:
						return r.getBitsLength(e);
					case s.ALPHANUMERIC:
						return a.getBitsLength(e);
					case s.KANJI:
						return i.getBitsLength(e);
					case s.BYTE:
						return o.getBitsLength(e)
				}
			}

			function b(e, t) {
				var n, c = s.getBestModeForData(e);
				if ((n = s.from(t, c)) !== s.BYTE && n.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + s.toString(n) + ".\n Suggested mode is: " + s.toString(c));
				switch (n !== s.KANJI || l.isKanjiModeEnabled() || (n = s.BYTE), n) {
					case s.NUMERIC:
						return new r(e);
					case s.ALPHANUMERIC:
						return new a(e);
					case s.KANJI:
						return new i(e);
					case s.BYTE:
						return new o(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(b(t, null)) : t.data && e.push(b(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, n) {
				for (var r = function(e, t) {
						for (var n = {}, r = {
								start: {}
							}, a = ["start"], o = 0; o < e.length; o++) {
							for (var i = e[o], c = [], l = 0; l < i.length; l++) {
								var d = i[l],
									u = "" + o + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, r[u] = {};
								for (var m = 0; m < a.length; m++) {
									var p = a[m];
									n[p] && n[p].node.mode === d.mode ? (r[p][u] = h(n[p].lastCount + d.length, d.mode) - h(n[p].lastCount, d.mode), n[p].lastCount += d.length) : (n[p] && (n[p].lastCount = d.length), r[p][u] = h(d.length, d.mode) + 4 + s.getCharCountIndicator(d.mode, t))
								}
							}
							a = c
						}
						for (m = 0; m < a.length; m++) r[a[m]].end = 0;
						return {
							map: r,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var r = e[n];
							switch (r.mode) {
								case s.NUMERIC:
									t.push([r, {
										data: r.data,
										mode: s.ALPHANUMERIC,
										length: r.length
									}, {
										data: r.data,
										mode: s.BYTE,
										length: r.length
									}]);
									break;
								case s.ALPHANUMERIC:
									t.push([r, {
										data: r.data,
										mode: s.BYTE,
										length: r.length
									}]);
									break;
								case s.KANJI:
									t.push([r, {
										data: r.data,
										mode: s.BYTE,
										length: u(r.data)
									}]);
									break;
								case s.BYTE:
									t.push([{
										data: r.data,
										mode: s.BYTE,
										length: u(r.data)
									}])
							}
						}
						return t
					}(p(e, l.isKanjiModeEnabled())), n), a = d.find_path(r.map, "start", "end"), o = [], i = 1; i < a.length - 1; i++) o.push(r.table[a[i]].node);
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
			var n, s = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return s[e]
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
			var s = n("./node_modules/qrcode/lib/core/utils.js"),
				r = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				a = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = n("./node_modules/qrcode/lib/core/mode.js"),
				i = n("./node_modules/qrcode/lib/core/version-check.js"),
				c = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = s.getBCHDigit(7973);

			function d(e, t) {
				return o.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var n = 0;
				return e.forEach((function(e) {
					var s = d(e.mode, t);
					n += s + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return i.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!i.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = o.BYTE);
				var a = 8 * (s.getSymbolTotalCodewords(e) - r.getTotalCodewordsCount(e, t));
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
				var s, r = a.from(n, a.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var s = 1; s <= 40; s++) {
							if (u(e, s) <= t.getCapacity(s, n, o.MIXED)) return s
						}
					}(e, r);
					if (0 === e.length) return 1;
					s = e[0]
				} else s = e;
				return function(e, n, s) {
					for (var r = 1; r <= 40; r++)
						if (n <= t.getCapacity(r, s, e)) return r
				}(s.mode, s.getLength(), r)
			}, t.getEncodedBits = function(e) {
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; s.getBCHDigit(t) - l >= 0;) t ^= 7973 << s.getBCHDigit(t) - l;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var r = n,
					a = t;
				void 0 !== r || t && t.getContext || (r = t, t = void 0), t || (a = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), r = s.getOptions(r);
				var o = s.getImageWidth(e.modules.size, r),
					i = a.getContext("2d"),
					c = i.createImageData(o, o);
				return s.qrToImageData(c.data, e, r),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(i, a, o), i.putImageData(c, 0, 0), a
			}, t.renderToDataURL = function(e, n, s) {
				var r = s;
				void 0 !== r || n && n.getContext || (r = n, n = void 0), r || (r = {});
				var a = t.render(e, n, r),
					o = r.type || "image/png",
					i = r.rendererOpts || {};
				return a.toDataURL(o, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var s = n("./node_modules/qrcode/lib/renderer/utils.js");

			function r(e, t) {
				var n = e.a / 255,
					s = t + '="' + e.hex + '"';
				return n < 1 ? s + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : s
			}

			function a(e, t, n) {
				var s = e + t;
				return void 0 !== n && (s += " " + n), s
			}
			t.render = function(e, t, n) {
				var o = s.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					l = i + 2 * o.margin,
					d = o.color.light.a ? "<path " + r(o.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + r(o.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var s = "", r = 0, o = !1, i = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || o || (o = !0), e[c] ? (i++, c > 0 && l > 0 && e[c - 1] || (s += o ? a("M", l + n, .5 + d + n) : a("m", r, 0), r = 0, o = !1), l + 1 < t && e[c + 1] || (s += a("h", i), i = 0)) : r++
						}
						return s
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
					s = e.width && e.width >= 21 ? e.width : void 0,
					r = e.scale || 4;
				return {
					width: s,
					scale: s ? 4 : r,
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
				var s = t.getScale(e, n);
				return Math.floor((e + 2 * n.margin) * s)
			}, t.qrToImageData = function(e, n, s) {
				for (var r = n.modules.size, a = n.modules.data, o = t.getScale(r, s), i = Math.floor((r + 2 * s.margin) * o), c = s.margin * o, l = [s.color.light, s.color.dark], d = 0; d < i; d++)
					for (var u = 0; u < i; u++) {
						var m = 4 * (d * i + u),
							p = s.color.light;
						if (d >= c && u >= c && d < i - c && u < i - c) p = l[a[Math.floor((d - c) / o) * r + Math.floor((u - c) / o)] ? 1 : 0];
						e[m++] = p.r, e[m++] = p.g, e[m++] = p.b, e[m] = p.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/node_modules/isarray/index.js");
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
			var r = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function a(e, t, n) {
				return a.TYPED_ARRAY_SUPPORT || this instanceof a ? "number" == typeof e ? c(this, e) : function(e, t, n, s) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, s) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (s || 0)) throw new RangeError("'length' is out of bounds");
						var r;
						r = void 0 === n && void 0 === s ? new Uint8Array(t) : void 0 === s ? new Uint8Array(t, n) : new Uint8Array(t, n, s);
						a.TYPED_ARRAY_SUPPORT ? r.__proto__ = a.prototype : r = l(e, r);
						return r
					}(e, t, n, s);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							s = i(e, n),
							r = s.write(t);
						r !== n && (s = s.slice(0, r));
						return s
					}(e, t);
					return function(e, t) {
						if (a.isBuffer(t)) {
							var n = 0 | o(t.length),
								s = i(e, n);
							return 0 === s.length ? s : (t.copy(s, 0, 0, n), s)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? i(e, 0) : l(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return l(e, t.data)
						}
						var r;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new a(e, t, n)
			}

			function o(e) {
				if (e >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var n;
				return a.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = a.prototype : (null === (n = e) && (n = new a(t)), n.length = t), n
			}

			function c(e, t) {
				var n = i(e, t < 0 ? 0 : 0 | o(t));
				if (!a.TYPED_ARRAY_SUPPORT)
					for (var s = 0; s < t; ++s) n[s] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | o(t.length), s = i(e, n), r = 0; r < n; r += 1) s[r] = 255 & t[r];
				return s
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var s = e.length, r = null, a = [], o = 0; o < s; ++o) {
					if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
						if (!r) {
							if (n > 56319) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							if (o + 1 === s) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							r = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && a.push(239, 191, 189), r = n;
							continue
						}
						n = 65536 + (r - 55296 << 10 | n - 56320)
					} else r && (t -= 3) > -1 && a.push(239, 191, 189);
					if (r = null, n < 128) {
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
				var s = this.length - t;
				if ((void 0 === n || n > s) && (n = s), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, s) {
					return function(e, t, n, s) {
						for (var r = 0; r < s && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
						return r
					}(d(t, e.length - n), e, n, s)
				}(this, e, t, n)
			}, a.prototype.slice = function(e, t) {
				var n, s = this.length;
				if ((e = ~~e) < 0 ? (e += s) < 0 && (e = 0) : e > s && (e = s), (t = void 0 === t ? s : ~~t) < 0 ? (t += s) < 0 && (t = 0) : t > s && (t = s), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = a.prototype;
				else {
					var r = t - e;
					n = new a(r, void 0);
					for (var o = 0; o < r; ++o) n[o] = this[o + e]
				}
				return n
			}, a.prototype.copy = function(e, t, n, s) {
				if (n || (n = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < n && (s = n), s === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (s < 0) throw new RangeError("sourceEnd out of bounds");
				s > this.length && (s = this.length), e.length - t < s - n && (s = e.length - t + n);
				var r, o = s - n;
				if (this === e && n < t && t < s)
					for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
				else if (o < 1e3 || !a.TYPED_ARRAY_SUPPORT)
					for (r = 0; r < o; ++r) e[r + t] = this[r + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
				return o
			}, a.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var s = e.charCodeAt(0);
						s < 256 && (e = s)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var r;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (r = t; r < n; ++r) this[r] = e;
				else {
					var o = a.isBuffer(e) ? e : new a(e),
						i = o.length;
					for (r = 0; r < n - t; ++r) this[r + t] = o[r % i]
				}
				return this
			}, a.concat = function(e, t) {
				if (!s(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var r = c(null, t),
					o = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!a.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(r, o), o += l.length
				}
				return r
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
			var s = n("./node_modules/react/index.js"),
				r = function() {
					var e = 1,
						t = new WeakMap,
						n = function(s, r) {
							return "number" == typeof s || "string" == typeof s ? r ? "idx-" + r : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), n(s))
						};
					return n
				},
				a = (r(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: r()
					}
				}),
				o = a(),
				i = s.createContext(a()),
				c = function() {
					return s.useState((e = s.useContext(i), {
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
				return r
			}));
			var s = n("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const n = Object(s.a)(e),
					r = parseInt(n) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n, s) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(r)
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/validateEmail/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			const a = Object(s.a)(r.a),
				o = Object(s.a)(r.e),
				i = Object(s.a)(r.b),
				c = Object(s.a)(r.c),
				l = Object(s.a)(r.d)
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
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(s.a)(o.a),
				c = Object(s.a)(o.b),
				l = Object(s.a)(o.c),
				d = Object(s.a)(o.d),
				u = Object(s.a)(o.e),
				m = Object(s.a)(o.f),
				p = Object(s.a)(o.g),
				h = Object(s.a)(o.h),
				b = Object(s.a)(o.i),
				f = e => Object(r.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "f", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				r = n.n(s),
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
				h = n("./src/reddit/models/Badge/managementPage.ts"),
				b = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				v = n("./src/reddit/selectors/products.ts"),
				y = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				x = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function _(e) {
				return !!e && "removeBadge" === e.type
			}

			function C(e) {
				if (!_(e)) return e
			}
			const w = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(y.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					r = Object.keys(s);
				if (r.length) {
					const t = await Object(i.e)(n(), r);
					t.ok && e(Object(x.g)(t.body))
				}
			}, E = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				const a = s().user.account,
					o = s().economics.subredditPremium[e],
					i = !o || o.status !== f.a.Fetched || t;
				if (a && i) {
					const t = await Object(c.a)(r(), e, a.id);
					n(Object(x.i)(t))
				}
			}, k = e => async (t, n, {
				apiContext: s
			}) => {
				const r = n(),
					o = r.user.account,
					i = Object(g.f)(r, e.subredditId),
					c = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (o && e.badge) {
					let n, r;
					n = e.placement === p.a.First ? i[h.a.Loyalty] : e.placement === p.a.Second ? i[h.a.Achievement] : i[h.a.Cosmetic], t(Object(x.a)({
						...e,
						badge: C(e.badge),
						currentAppliedBadges: c,
						userId: o.id
					})), _(e.badge) && n ? r = await Object(l.a)(s(), e.subredditId, n.id, !1) : _(e.badge) || (r = await Object(l.a)(s(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(x.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: o.id
					})), Object(a.a)(t, r.error))
				}
			}, S = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				await n(E(e, !0));
				const a = s().economics.subredditPremium[e];
				if (a && a.status === f.a.Fetched) {
					const s = a.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(k({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(x.d)(h.c.MyBadges)))
				}
			}, O = e => async (t, n, {
				apiContext: s
			}) => {
				const i = n().user.account,
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (i && (c || l)) {
					const [n, c] = await Promise.all([Object(o.b)(s(), e), m(s(), e, i.id)]);
					if (!c.ok) return void Object(a.a)(t, c.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(c.body, e => {
						e.type === b.a.EmotesPack ? l.emotes.push(e) : e.type === b.a.Giphy && l.giphy.push(e)
					}), t(Object(x.e)({
						subredditId: e,
						products: l
					}))
				}
			}, P = (e, t, n) => async (s, r, {
				apiContext: a
			}) => {
				if (await s(E(e, !0)), n && t) {
					const n = r(),
						a = Object(g.f)(n, e),
						o = Object(v.a)(n, t);
					if (!a[Object(h.d)(o.placement)] && o) {
						const t = Object(g.k)(n, {
							subredditId: e,
							badge: o
						});
						t && await s(k({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(x.c)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}, j = e => async (t, n, {
				apiContext: s
			}) => {
				const {
					wallet: r
				} = await Object(i.c)(s(), e);
				t(Object(x.f)({
					wallet: r
				})), await t(E(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return R
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "e", (function() {
				return J
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/omit.js"),
				a = n.n(r),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
				c = n("./src/config.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/lib/addQueryParams/index.ts"),
				m = n("./src/lib/makeActionCreator/index.ts"),
				p = n("./src/lib/sentry/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts"),
				f = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/actions/gold/powerups.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				_ = n("./node_modules/bignumber.js/bignumber.js"),
				C = n.n(_),
				w = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				E = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				k = n("./src/graphql/operations/CreateEconOrder.json"),
				S = n("./src/graphql/operations/CreatePaypalPayment.json"),
				O = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				P = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				j = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				N = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				I = n("./src/graphql/operations/UserSavedStripeCards.json"),
				T = n("./src/lib/makeGqlRequest/index.ts");
			const A = () => s.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				M = e => e.map(e => e.message).join(" : "),
				R = (e, t, n) => async (r, a, {
					gqlContext: o
				}) => {
					const c = i()(),
						l = await ((e, t, n, s, r) => {
							const a = new C.a(n.pricePackages[0].price).multipliedBy(s).toFixed();
							return Object(T.a)(e, {
								...k,
								variables: {
									input: {
										nonce: t,
										productId: n.id,
										productVersion: n.version,
										pricePackageId: n.pricePackages[0].id,
										currency: n.pricePackages[0].currency,
										price: a,
										productsCount: s.toString(),
										...r
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
						if (t && t.length) throw new Error(M(t));
						if (n) return n.id
					}
					throw new Error((() => s.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, B = (e, t, n, r, a) => async (o, c, {
					gqlContext: l
				}) => {
					const d = c(),
						u = () => o(Object(f.stripeApiError)(s.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let m, h, b = "";
					try {
						b = await o(R(t, a, {
							powerUps: {
								subredditId: n,
								isAnonymous: r
							}
						}))
					} catch (x) {
						return p.c.captureException(x), void(x.message && o(Object(f.stripeApiError)(x.message)))
					}
					o(Object(f.stripeTokenPending)());
					const y = Object(g.x)(d);
					if (y || (m = await o(Object(f.validateAndCreateStripeToken)(e)), h = Object(g.u)(d), m)) try {
						const e = i()(),
							t = y || h ? m && h ? ((e, t, n, s) => Object(T.a)(e, {
								...O,
								variables: {
									nonce: t,
									orderId: n,
									token: s
								}
							}))(l(), e, b, m.id) : y ? ((e, t, n, s) => Object(T.a)(e, {
								...j,
								variables: {
									nonce: t,
									orderId: n,
									cardId: s
								}
							}))(l(), e, b, y) : null : ((e, t, n, s) => Object(T.a)(e, {
								...P,
								variables: {
									nonce: t,
									orderId: n,
									token: s
								}
							}))(l(), e, b, m.id),
							s = await t;
						if (!s || !s.ok) return void u(); {
							const e = s.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(f.stripeApiError)(M(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(v.i)(c());
							t && o(J({
								subredditId: n,
								powerupsCount: a,
								user: t,
								isAnonymous: r
							}))
						}
					} catch (x) {
						p.c.captureException(x), u()
					}
				}, D = (e, t, n, s) => async (r, a, {
					gqlContext: o
				}) => {
					let l = "";
					try {
						l = await r(R(e, s, {
							powerUps: {
								subredditId: t,
								isAnonymous: n
							}
						}))
					} catch (m) {
						return p.c.captureException(m), m.message && r(Object(f.paypalApiError)(m.message)), null
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
							p = await ((e, t, n, s, r) => Object(T.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: n,
									successUrl: s,
									cancelUrl: r
								}
							}))(o(), m, l, e, c);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(f.paypalApiError)(M(e.errors))), null;
							const o = Object(v.i)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if ("ACTION_REQUIRED" === a) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && o) return r(J({
									subredditId: t,
									powerupsCount: s,
									user: o,
									isAnonymous: n
								})), null
							}
						}
					} catch (m) {
						p.c.captureException(m)
					}
					return r(Object(f.paypalApiError)(A())), null
				}, L = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					try {
						const s = i()(),
							a = await ((e, t, n, s) => Object(T.a)(e, {
								...E,
								variables: {
									nonce: t,
									paymentId: n,
									token: s
								}
							}))(r(), s, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(f.paypalApiError)(M(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						p.c.captureException(a)
					}
					return n(Object(f.paypalApiError)(A())), !1
				}, F = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await (e => Object(T.a)(e, {
							...I,
							variables: {}
						}))(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(f.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: s
							} = n.data.identity, r = s.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(r)), r[0] && e(Object(f.selectSavedCard)(r[0].cardId))
						} else e(Object(f.stripeApiError)(s.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (r) {
						p.c.captureException(r), e(Object(f.savedCardsSuccess)([]))
					}
				}, U = e => async (t, n, {
					gqlContext: s
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(T.a)(e, {
							...N,
							variables: {
								cardId: t
							}
						}))(s(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: r
							} = n.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(M(r))
					} catch (r) {
						p.c.captureException(r)
					}
				}, H = Object(m.a)(b.N), W = Object(m.a)(b.O), q = Object(m.a)(b.P), G = e => async (t, n) => {
					await t(H(e)), t(Object(d.e)({
						kind: h.b.Error,
						duration: d.a,
						text: e
					}))
				}, z = (e, t, n) => async (r, a, {
					gqlContext: o
				}) => {
					r(W({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const a = await ((e, t) => Object(T.a)(e, {
							...w,
							variables: {
								orderId: t
							}
						}))(o(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: s
								} = e.data.cancelEconRecurringPayment;
							if (s && s.length) return void r(G(s[0].message));
							r(q({
								subredditId: t,
								allocatedAt: n
							}))
						} else r(G(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), r(G(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, V = Object(m.a)(b.R), J = e => async (t, n) => {
					t(V(e)), t(Object(y.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(x.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(d.e)({
						kind: h.b.SuccessCommunityGreen,
						duration: d.a,
						text: s.fbt._({
							"*": "Purchase of {number of Powerups} Powerups is complete.",
							_1: "Purchase of 1 Powerup is complete."
						}, [s.fbt._plural(e.powerupsCount, "number of Powerups")], {
							hk: "28cBuw"
						})
					}))
				}
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
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return b
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
				return C
			})), n.d(t, "savedCardsPending", (function() {
				return w
			})), n.d(t, "savedCardsSuccess", (function() {
				return E
			})), n.d(t, "loadSavedCards", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(a.a)(i.A),
				d = Object(a.a)(i.w),
				u = Object(a.a)(i.b),
				m = Object(a.a)(i.a),
				p = Object(a.a)(i.D),
				h = Object(a.a)(i.F),
				b = Object(a.a)(i.E),
				f = Object(a.a)(i.C),
				g = e => async (t, n) => {
					const r = n(),
						a = Object(c.h)(r),
						{
							token: o,
							error: i
						} = await e.createToken({
							name: a
						});
					if (a.trim()) {
						if (!i && o) return o;
						t(b(i || void 0))
					} else {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, v = Object(a.a)(i.x), y = Object(a.a)(i.G), x = Object(a.a)(i.B), _ = Object(a.a)(i.g), C = e => async (t, n, {
					apiContext: s
				}) => {
					t(_(e));
					try {
						const t = await Object(o.a)(s(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						r.c.captureException(a)
					}
				}, w = Object(a.a)(i.y), E = Object(a.a)(i.z), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(w());
					try {
						const t = await Object(o.b)(n());
						if (t.error) throw new Error(t.error.type);
						const s = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(E(s)), s[0] && e(x(s[0].cardId))
					} catch (s) {
						r.c.captureException(s), e(E([]))
					}
				}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(s.a)(a.a),
				i = ({
					subredditId: e
				}) => async (t, n, {
					apiContext: s
				}) => {
					const a = await Object(r.a)(s(), {
						subredditId: e
					});
					a.ok && t(o({
						subredditId: e,
						...a.body
					}))
				}
		},
		"./src/reddit/actions/notifications/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/selectors/notificationPrefs.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/actions/notifications/constants.ts");
			const h = Object(r.a)(p.c),
				b = Object(r.a)(p.b),
				f = Object(r.a)(p.a),
				g = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(m.i)(s)) return;
					const r = Object(u.b)(s),
						a = Object(u.a)(s);
					if (r || a) return;
					e(h());
					const d = await (e => Object(c.a)(e, {
						endpoint: Object(l.a)(`${o.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: i.cb.GET
					}))(n());
					if (d.ok) {
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
						}))(d.body);
						e(b({
							preferences: t
						}))
					} else e(f(d.error))
				}, v = Object(r.a)(p.f), y = Object(r.a)(p.e), x = Object(r.a)(p.d), _ = e => async (t, n, {
					apiContext: r
				}) => {
					const p = n();
					if (!Object(m.i)(p)) return;
					if (Object(u.f)(p)) return;
					const h = Object(u.e)(p);
					t(v({
						preferences: e
					}));
					const b = await ((e, t) => Object(c.a)(e, {
						endpoint: Object(l.a)(`${o.a.gatewayUrl}/redditmobile/1/push/preferences`),
						method: i.cb.POST,
						data: {
							preferences: JSON.stringify({
								broadcast_follower: t.broadcastFollower,
								broadcast_recommendation: t.broadcastRecommendation,
								chat_message: t.chatMessages,
								chat_request: t.chatRequests,
								post_flair_added: t.postFlairAdded,
								comment_reply: t.commentReplies,
								lifecycle_post_suggestions: t.trendingPosts,
								live_event: t.liveEvent,
								new_pinned_post: t.newPinnedPost,
								post_reply: t.postReplies,
								private_message: t.privateMessages,
								subreddit_recommendation: t.communityRecommendations,
								thread_replies: t.threadReplies,
								top_level_comment: t.topLevelComment,
								username_mention: t.usernameMentions,
								upvote_comment: t.upvotedComments,
								upvote_post: t.upvotedPosts,
								user_new_follower: t.userNewFollowers,
								user_flair_added: t.userFlairAdded
							})
						}
					}))(r(), e);
					b.ok ? (t(y()), t(Object(a.e)({
						kind: d.b.SuccessCommunity,
						text: s.fbt._("Changes saved", null, {
							hk: "UBoVR"
						})
					}))) : t(x({
						error: b.error,
						preferences: h
					}))
				}
		},
		"./src/reddit/actions/pages/settings.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "settingsPageRequested", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/extractQueryParams/index.ts"),
				i = n("./src/lib/filterQueryParams/index.ts"),
				c = n("./src/lib/pageTitle.ts"),
				l = n("./src/reddit/actions/chat/userSettings.ts"),
				d = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				u = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts");
			var m = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = n("./src/reddit/actions/externalAccount.ts"),
				h = n("./src/reddit/actions/gold/powerups.ts"),
				b = n("./src/reddit/actions/notifications/preferences.ts"),
				f = n("./src/reddit/actions/platform.ts"),
				g = n("./src/reddit/actions/preferences.ts"),
				v = n("./src/reddit/actions/profile/index.ts"),
				y = n("./src/reddit/actions/subredditSettings.ts"),
				x = n("./src/reddit/actions/toaster.ts"),
				_ = n("./src/reddit/actions/users.ts"),
				C = n("./src/reddit/constants/parameters.ts"),
				w = n("./src/reddit/helpers/externalAccount/index.tsx"),
				E = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				k = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				S = n("./src/reddit/selectors/externalAccount.ts"),
				O = n("./src/reddit/selectors/user.ts");
			const P = e => async (t, n) => {
				await t(Object(_.r)());
				const P = [t(Object(g.z)(!0)), t(Object(m.a)())];
				n().economics.paymentSystems.status === k.a.NotFetched && P.push(t((() => async (e, t, {
					apiContext: n
				}) => {
					e(Object(u.d)());
					const s = await Object(d.d)(n());
					s.ok ? e(Object(u.c)(s.body)) : e(Object(u.b)({
						error: s.error
					}))
				})())), await Promise.all(P); {
					const e = n();
					if (!Object(O.J)(e)) return Object(E.a)(t, e)
				}
				const {
					page: j = a.Qb.Account
				} = e.params;
				if (j === a.Qb.Gold) return void t(Object(r.c)("/settings/premium"));
				const N = [];
				j === a.Qb.Profile && (N.push(t(Object(v.a)())), N.push(t(Object(y.g)()))), j === a.Qb.Account && N.push(t(Object(p.o)())), j === a.Qb.Notifications && N.push(t(Object(b.a)())), j !== a.Qb.Privacy && j !== a.Qb.Messaging || N.push(t(Object(l.b)())), j === a.Qb.Premium && (N.push(t(Object(v.a)())), N.push(t(Object(h.g)(!0)))), await Promise.all(N); {
					const e = n(),
						a = e.platform.currentPage,
						{
							url: c
						} = a,
						l = Object(o.a)(c).get(C.d);
					if (l && (t(Object(r.c)(Object(i.a)(c, [C.d]))), Object(S.a)(e))) {
						const e = s.fbt._("Connected accounts", null, {
							hk: "bdpfW"
						});
						t(Object(x.e)({
							text: e
						})), Object(w.b)(l)
					}
				}
				t(Object(f.l)({
					title: Object(c.h)()
				}))
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts"),
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
					d = Object(s.a)(n),
					u = Object(r.b)(l, n, d);
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: c.a.container
			}, r.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, r.a.createElement(l.b, null)), r.a.createElement(l.h, null, r.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), r.a.createElement(l.k, null, e.message && r.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && r.a.createElement("div", {
				className: c.a.text
			}, e.children), r.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && r.a.createElement(o.l, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), r.a.createElement(o.i, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return r.a.createElement("a", {
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
			var s, r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/currency/centsToDollars/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/helpers/governance/tokens.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return h.fbt._("{price}/mo", [h.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				f = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return h.fbt._("{price} / month", [h.fbt._param("price", e)], {
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
					monthly: r,
					subredditId: o,
					tokenDisplayConversion: i,
					tokenName: u
				} = e, p = e.dollarPrice && `$${Object(l.a)(e.dollarPrice,!0)}`, h = e.tokenPrice && Object(d.a)(Object(m.b)(e.tokenPrice, i)) + (n ? "" : " " + u);
				if (!p && !h) return null;
				const g = r ? s.Monthly : s.Once;
				return a.a.createElement("span", {
					className: Object(c.a)(t, v.a.price)
				}, p && h ? y._("{dollar-price} or {point-price}", [y._param("dollar-price", b(p, g)), y._param("point-price", a.a.createElement(x, {
					subredditId: o,
					pointPrice: b(h, g)
				}))], {
					hk: "2Gif0l"
				}) : p ? f(p, g) : h ? a.a.createElement(x, {
					subredditId: o,
					pointPrice: f(h, g)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					s = e.subreddit && e.subreddit.primaryColor;
				return r.a.createElement("div", {
					className: Object(a.a)(n.container, e.className)
				}, e.subreddit ? r.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : r.a.createElement(c.a, {
					className: n.crown
				}), r.a.createElement(o.a, {
					className: n.bling1
				}), r.a.createElement(o.a, {
					className: n.bling2
				}), r.a.createElement(o.a, {
					className: n.bling3
				}), t ? r.a.createElement("img", {
					className: n.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : r.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: s
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/constants/colors.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(i);

			function l(e) {
				const {
					index: t,
					children: n,
					color: s
				} = e, i = s && Object(o.a)(s, void 0, a.b.white);
				return r.a.createElement("div", {
					className: c.a.bullet
				}, r.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: s,
						color: i
					}
				}, r.a.createElement("span", {
					className: c.a.number
				}, t)), r.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/lib/browser.js"),
				r = n.n(s),
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
					const e = await r.a.toDataURL(this.props.url, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return r.a.createElement(a.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, r.a.createElement(o.a, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? r.a.createElement(r.a.Fragment, null, e.children) : null;
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
				return E
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "i", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						d.a.publish(l.a, s, e)
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
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(a.b)(u, {})(m),
				h = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const g = (e, t) => {
				const n = Object(b.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(a.b)(() => Object(o.a)(g, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
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
				const n = Object(b.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(a.b)(() => Object(o.a)(y, e => e))(e => r.a.createElement(p, {
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
					subreddit: f.S
				}))(e => r.a.createElement(p, {
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
				C = n("./src/reddit/contexts/Post/index.tsx");

			function w() {
				const e = Object(s.useContext)(C.c);
				if (!e) throw new Error("No Post context!");
				return e
			}
			var E = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = w(), a = Object(s.useMemo)(() => ({
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
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: a
				})
			};
			var k = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: a
				} = w(), o = Object(s.useMemo)(() => ({
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
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: o
				})
			};
			var S = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = w(), a = Object(s.useMemo)(() => ({
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
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: a
				})
			};
			var O = Object(a.b)(() => Object(o.c)({
				subreddit: f.S
			}))(e => r.a.createElement(p, {
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
			var P = Object(a.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
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
				}) => t ? Object(f.S)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				d = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				h = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				b = n("./src/reddit/icons/svgs/Top/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.m.less"),
				g = n.n(f);
			const v = {
					[o.P.BEST]: d.a,
					[o.P.HOT]: m.a,
					[o.P.NEW]: p.a,
					[o.P.CONTROVERSIAL]: u.a,
					[o.P.TOP]: b.a,
					[o.P.RISING]: h.a,
					[o.P.AWARDED]: l.a
				},
				y = {
					[o.P.BEST]: "best",
					[o.P.HOT]: "hot",
					[o.P.NEW]: "new",
					[o.P.CONTROVERSIAL]: "controversial",
					[o.P.TOP]: "top",
					[o.P.RISING]: "rising",
					[o.P.AWARDED]: "award"
				};

			function x({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(i.b)() && void 0 !== y[n]) return r.a.createElement(c.a, {
					name: y[n],
					isFilled: t,
					className: Object(a.a)(e, g.a.iconStyles)
				});
				const s = v[n];
				return s ? r.a.createElement(s, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.tsx"),
				i = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = n.n(i),
				l = a.a.div("dynamicTwoCol", c.a),
				d = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/humanizeDate/index.ts"),
				b = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/lib/timeAgo/index.ts"),
				g = n("./src/reddit/contexts/InsideOverlay.tsx"),
				v = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				y = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				x = n("./src/reddit/icons/svgs/User/index.tsx"),
				_ = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/tooltip.ts"),
				E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				S = n.n(k);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = a.a.div("Container", S.a),
				j = a.a.div("Body", S.a),
				N = a.a.h5("Title", S.a),
				I = a.a.span("Label", S.a);
			class T extends r.a.Component {
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
						tooltip: s,
						tooltipId: a
					} = this.props, o = a && s ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return r.a.createElement(P, null, r.a.createElement(N, null, n), r.a.createElement(j, null, e, r.a.createElement(I, O({
						key: "label"
					}, o), t)), a && s && r.a.createElement(E.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: s
					}))
				}
			}
			var A = Object(m.b)(null, e => ({
					toggleTooltip: t => e(Object(w.h)({
						tooltipId: t
					}))
				}))(Object(g.b)(T)),
				M = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				R = n.n(M);
			const B = Object(p.a)(_.j, (e, {
					profileName: t
				}) => Object(C.sb)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				D = a.a.div("Container", R.a);

			function L(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var F = Object(m.b)(B)(Object(g.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: n,
						profileCreated: s,
						isOverlay: a,
						commentKarma: o,
						postKarma: i,
						totalKarma: c,
						subscribers: l
					} = e, d = L(a, "karma"), m = L(a, "cakeday"), p = `${u.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[u.fbt._plural(i,"number",Object(b.b)(i,{displayFull:!0}))],{hk:"husfU"})}\n${u.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[u.fbt._plural(o,"number",Object(b.b)(o,{displayFull:!0}))],{hk:"26iPTL"})}\n${u.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[u.fbt._plural(t,"number",Object(b.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${u.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[u.fbt._plural(n,"number",Object(b.b)(n,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return r.a.createElement(D, null, r.a.createElement(A, {
						icon: r.a.createElement(y.a, {
							className: R.a.icon,
							key: "karma"
						}),
						label: Object(b.b)(c, {
							displayFull: !0
						}),
						title: u.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: d,
						tooltip: p
					}), r.a.createElement(A, {
						icon: r.a.createElement(v.a, {
							className: R.a.icon,
							key: "cakeDay"
						}),
						label: Object(h.a)(s, !0),
						title: u.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: m,
						tooltip: Object(f.d)(s)
					}), l > 0 && r.a.createElement(A, {
						icon: r.a.createElement(x.a, {
							className: R.a.icon,
							key: "followers"
						}),
						title: u.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(b.b)(l, {
							displayFull: !0
						})
					}))
				})),
				U = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				H = n.n(U),
				W = n("./src/config.ts"),
				q = n("./src/reddit/controls/InternalLink/index.tsx"),
				G = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/controls/OutboundLink/index.tsx"),
				V = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				J = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				K = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Z = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				X = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				$ = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				ee = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				te = n.n(ee),
				ne = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				se = n.n(ne);
			var re = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: n,
					isDeletingBanner: s,
					isDeletingIcon: a,
					isEmployee: o,
					isGold: i,
					isNSFW: c,
					isOwnProfile: l,
					onClickSnoovatar: d,
					onDeleteBanner: m,
					onDeleteIcon: p,
					profileIcon: h,
					title: b,
					userCreated: f,
					username: g,
					url: v
				}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(X.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: g,
					isDeletingBanner: !!s,
					onDeleteBanner: m
				}), r.a.createElement("div", {
					className: te.a.SnooIconWrapper
				}, l || !h || c ? r.a.createElement(K.a, {
					iconUrl: h,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				}) : r.a.createElement(z.b, {
					isSponsored: !1,
					href: h,
					source: null
				}, r.a.createElement(K.a, {
					iconUrl: h,
					isNSFW: c,
					userName: g,
					isProfileIdCard: !0
				})), t && !n && (a ? r.a.createElement(G.a, {
					sizePx: 20,
					className: se.a.loadingIcon
				}) : r.a.createElement(J.a, {
					className: se.a.closeIcon,
					onClick: p
				}))), !t && l && r.a.createElement(q.a, {
					to: "/settings/profile",
					className: te.a.settingsLink
				}, r.a.createElement(Q.a, {
					className: se.a.settingsIcon
				})), b && r.a.createElement("h4", {
					className: te.a.userTitle
				}, b), r.a.createElement($.a, {
					className: te.a.userName,
					username: g,
					userCreated: f,
					url: v
				}), o && r.a.createElement(V.a, {
					className: te.a.adminIcon,
					title: u.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && r.a.createElement("a", {
					title: u.fbt._("{username} has Reddit Premium", [u.fbt._param("username", g)], {
						hk: "3Fylv"
					}),
					href: `${W.a.redditUrl}/premium`
				}, r.a.createElement(Y.a, {
					className: te.a.premiumIcon
				})), l && r.a.createElement(Z.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: d
				})),
				ae = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var oe = ({
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: n,
				isDefaultIcon: s,
				isDeletingBanner: a,
				isDeletingIcon: o,
				isEmployee: i,
				isGold: c,
				isNSFW: l,
				isOwnProfile: d,
				onClickSnoovatar: u,
				onDeleteBanner: m,
				onDeleteIcon: p,
				prefersReducedAnimations: h,
				profileIcon: b,
				snoovatarUrl: f,
				title: g,
				userCreated: v,
				username: y,
				url: x
			}) => f ? r.a.createElement(ae.a, {
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
				prefersReducedAnimations: h,
				snoovatarUrl: f,
				title: g,
				userCreated: v,
				username: y,
				url: x
			}) : r.a.createElement(re, {
				bannerBackgroundImage: e,
				editMode: n,
				isDefaultIcon: s,
				isDeletingBanner: a,
				isDeletingIcon: o,
				isEmployee: i,
				isGold: c,
				isNSFW: l,
				isOwnProfile: d,
				onClickSnoovatar: u,
				onDeleteBanner: m,
				onDeleteIcon: p,
				profileIcon: b,
				title: g,
				userCreated: v,
				username: y,
				url: x
			});
			const ie = a.a.wrapped(o.b, "Widget", H.a),
				ce = a.a.div("Description", H.a),
				le = a.a.wrapped(l, "Actions", H.a);
			class de extends r.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: n
					} = this.props;
					return e ? r.a.createElement(d.a, {
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
						className: s,
						footer: a,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOverlay: l,
						isOwnProfile: d,
						profileIcon: u,
						publicDescription: m,
						snoovatarUrl: p,
						title: h,
						url: b,
						userCreated: f,
						username: g,
						isDefaultIcon: v,
						isDeletingIcon: y,
						isDeletingBanner: x,
						onClickSnoovatar: _,
						onDeleteIcon: C,
						onDeleteBanner: w,
						prefersReducedAnimations: E,
						editMode: k
					} = this.props;
					return r.a.createElement(ie, {
						className: s
					}, r.a.createElement(oe, {
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
						onDeleteBanner: w,
						onDeleteIcon: C,
						prefersReducedAnimations: E,
						profileIcon: u,
						title: h,
						userCreated: f,
						username: g,
						url: b,
						snoovatarUrl: p
					}), r.a.createElement(ce, null, m), r.a.createElement(F, {
						profileName: g,
						isOverlay: l
					}), this.renderAwardedLastMonth(), r.a.createElement(le, null, e), a)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
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
						isNSFW: r,
						isProfileIdCard: o,
						userName: d
					} = this.props, {
						isUpdating: u
					} = this.state, p = a.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: n,
						isNSFW: r,
						userName: d
					});
					return t && Object(l.e)(t) === d ? a.a.createElement(i.a, {
						altText: s.fbt._("{userName} avatar image", [s.fbt._param("userName", d)], {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: s,
					text: o,
					tooltipContentClass: i,
					...d
				} = e;
				return r.a.createElement("div", l({}, d, {
					className: Object(a.a)(c.a.container, n)
				}), o ? r.a.createElement("div", {
					className: Object(a.a)(c.a.tooltip, i, s ? c.a.below : c.a.above)
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
				GoogleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				googleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				AppleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				appleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				LoadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				loadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				ConnectApple: "TAF33bKwRX0N0jqZED4G5",
				connectApple: "TAF33bKwRX0N0jqZED4G5",
				"m-responsive": "_2CDbVOW43orfPYw-t-nPiq",
				mResponsive: "_2CDbVOW43orfPYw-t-nPiq",
				ConnectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				connectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				ConnectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				connectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				ConnectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				connectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				ConnectTwitterButton2020: "_272M2gvxto_0X0pq5TeO62",
				connectTwitterButton2020: "_272M2gvxto_0X0pq5TeO62",
				active: "_3vAfZbL1RYMw8WeC1TpCfV",
				ConnectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				connectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				TextAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				textAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				ConnectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				connectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				l = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/Settings/DeactivateModal.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.div("Container", m.a),
				b = p.a.h2("HeaderText", m.a),
				f = p.a.button("Close", m.a),
				g = p.a.wrapped(i.e, "PrimaryButton", m.a),
				v = p.a.wrapped(i.l, "SecondaryButton", m.a),
				y = p.a.div("ButtonWrapper", m.a),
				x = p.a.textarea("TextArea", m.a),
				_ = p.a.h3("SectionLabel", m.a),
				C = p.a.p("H", m.a),
				w = p.a.p("P", m.a),
				E = p.a.wrapped(l.a, "Input", m.a),
				k = p.a.div("CheckBoxWrapper", m.a),
				S = p.a.ul("UL", m.a),
				O = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				P = {
					ios: () => s.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => s.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => s.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => s.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class j extends a.a.Component {
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
						return a.a.createElement(d.k, null, a.a.createElement(C, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), a.a.createElement(S, null, a.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), a.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && a.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(O).map((e, t) => a.a.createElement("span", {
							key: e
						}, !!t && ", ", a.a.createElement("a", {
							href: O[e],
							target: "_blank"
						}, P[e] && P[e]()))))), a.a.createElement(_, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), a.a.createElement(x, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), a.a.createElement(_, null, s.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), a.a.createElement(E, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: s.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), a.a.createElement(E, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: s.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), a.a.createElement(k, null, a.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), a.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), a.a.createElement(y, null, a.a.createElement(v, {
							onClick: e.exit
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), a.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => s.fbt._("{text with URL}", [s.fbt._param("text with URL", t ? a.a.createElement(a.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", a.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", P[e] && P[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : a.a.createElement(a.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", a.a.createElement("a", {
						href: O[e],
						target: "_blank"
					}, " ", P[e] && P[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => a.a.createElement(d.k, null, a.a.createElement(C, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), a.a.createElement(w, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					}, s.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => a.a.createElement(d.k, null, a.a.createElement(C, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), a.a.createElement(y, null, a.a.createElement(v, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("Back", null, {
						hk: "1P3x9"
					})), a.a.createElement(g, {
						onClick: this.handleSubmit
					}, s.fbt._("Deactivate", null, {
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
					return a.a.createElement(h, null, a.a.createElement(f, {
						onClick: e.exit
					}, a.a.createElement(d.b, null)), a.a.createElement(d.h, null, a.a.createElement(b, null, s.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(o.a)(j)
		},
		"./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less": function(e, t, n) {
			e.exports = {
				"m-responsive": "_15G7qQCEazg98Od6QzTXKW",
				mResponsive: "_15G7qQCEazg98Od6QzTXKW",
				row: "_2p7Y7z5wSBn5aCi7eK2pB2",
				stepNumber: "_10_kLYlr2P64gGtVuRmDIU",
				icon: "_5nI2F3HBs4WbXsJXozR2",
				notify: "_3L8va2Rx0PoIz4zyBzTJXN",
				text: "_3MBs-ro9yZMQKKKOcPDrEo",
				ModalText: "BjkPaG023MR6P-Jr4B9il",
				modalText: "BjkPaG023MR6P-Jr4B9il"
			}
		},
		"./src/reddit/components/Settings/DesktopNotifications/index.m.less": function(e, t, n) {
			e.exports = {
				ResponsiveOverlay: "y1f5g6WILztw-hqz3uOwa",
				responsiveOverlay: "y1f5g6WILztw-hqz3uOwa",
				ResponsiveTooltip: "_1CGsdbtchNFJvC6VaaIT_W",
				responsiveTooltip: "_1CGsdbtchNFJvC6VaaIT_W"
			}
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
				arrowLeft: "_3f8RceNwK_Chrx1SfdImc0",
				arrowRight: "_179JgBE7zFXVu12Sy73Zww",
				navTitle: "_34ojynOxqOfLijiGwEd3xd",
				notificationTitle: "_3Zx2EgjwHhWq8da5saGHBS",
				titleLine: "QH3meudEln7cJqa8i2BBU"
			}
		},
		"./src/reddit/components/Settings/Notifications/Loader.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
				a = Object(s.a)({
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
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/humanizeDate/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/ConfirmModal/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/gold/powerups.ts")),
				h = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				b = n("./src/lib/classNames/index.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/higherOrderComponents/asModal/index.tsx"),
				v = n("./src/reddit/actions/gold/powerups.ts"),
				y = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				x = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = n("./src/reddit/controls/TextButton/index.tsx"),
				C = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var E = Object(g.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: s,
						subredditInfo: r
					} = e, a = Object(i.d)();
					return o.a.createElement(x.d, {
						className: t
					}, o.a.createElement(x.h, null, o.a.createElement(C.a, null, o.a.createElement(x.p, null, w._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), o.a.createElement(_.a, {
						onClick: s
					}, o.a.createElement(x.b, null)))), o.a.createElement(x.k, null, o.a.createElement(x.o, null, w._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [w._param("subreddit name", r.prefixedName)], {
						hk: "2EKYNO"
					}))), o.a.createElement(x.f, null, o.a.createElement(x.q, {
						onClick: () => {
							n.isPremium ? a(Object(v.d)(r.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : a(Object(y.a)(n.id, r.id, n.allocatedAt)), s()
						},
						"data-redditstyle": !0
					}, w._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				k = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				S = n.n(k);

			function O(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var P = function(e) {
					const [t, n] = Object(a.useState)(!1), {
						className: s,
						allocation: i
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: u,
						isPremium: m,
						subredditInfo: p,
						renewOn: h,
						powerups: g
					} = i, v = O(h), y = O(c), x = O(l), {
						prefixedName: _
					} = p, C = y ? r.fbt._("Subscribed {date}.", [r.fbt._param("date", y)], {
						hk: "24RAUK"
					}) : "", w = x ? r.fbt._("You can cancel after {date}.", [r.fbt._param("date", x)], {
						hk: "48A2TC"
					}) : "", k = v ? r.fbt._("Will be renewed on {date}.", [r.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", P = v ? r.fbt._("Still active until {date}.", [r.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", j = m ? u ? C : `${C} ${w}` : d ? `${C} ${k}` : `${C} ${P}`, N = m ? r.fbt._("{powerups count} free Reddit Premium powerup/monthly", [r.fbt._param("powerups count", g.toLocaleString())], {
						hk: "3T3grw"
					}) : r.fbt._("{powerups count} powerup/monthly", [r.fbt._param("powerups count", g.toLocaleString())], {
						hk: "11DNVJ"
					}), I = m && u || !m && d;
					return o.a.createElement("div", {
						className: Object(b.a)(s, S.a.container),
						title: j
					}, o.a.createElement("div", {
						className: S.a.allocationName
					}, r.fbt._("{subreddit name} Powerup", [r.fbt._param("subreddit name", _)], {
						hk: "4qAoO"
					})), o.a.createElement("div", {
						className: S.a.details
					}, N), o.a.createElement(f.o, {
						className: S.a.button,
						disabled: !I,
						onClick: () => n(!0)
					}, m || I ? r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : r.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && o.a.createElement(E, {
						withOverlay: !0,
						allocation: i,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				j = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				N = n.n(j);
			var I = function(e) {
					const {
						className: t,
						allocationList: n
					} = e;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement("div", {
						className: N.a.title
					}, r.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), n.map(e => o.a.createElement(P, {
						allocation: e,
						className: N.a.allocation,
						key: e.allocatedAt
					})))
				},
				T = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				A = n.n(T);

			function M(e) {
				return o.a.createElement("header", {
					className: Object(b.a)(e.className, A.a.container)
				}, o.a.createElement("div", {
					className: A.a.title
				}, r.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), o.a.createElement("div", {
					className: A.a.subtitle
				}, r.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var R = n("./src/reddit/components/Settings/Powerups/index.m.less"),
				B = n.n(R);
			const D = Object(l.c)({
				allocationByKey: p.q
			});
			var L = Object(i.b)(D)((function(e) {
					const {
						allocationByKey: t
					} = e, n = Object.values(t).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime());
					return n.length ? o.a.createElement(h.a, {
						className: e.className
					}, o.a.createElement(M, {
						className: B.a.header
					}), o.a.createElement(I, {
						allocationList: n
					})) : null
				})),
				F = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				U = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				H = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				W = n("./src/reddit/components/TrackingHelper/index.tsx"),
				q = n("./src/higherOrderComponents/makeAsync.tsx"),
				G = n("./src/lib/loadWithRetries/index.ts"),
				z = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var V = Object(q.a)({
					getComponent: () => Object(G.a)(() => Promise.all([n.e("UpdateCardModal").then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(z.d)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				J = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				K = n("./src/reddit/components/Settings/index.m.less"),
				Z = n.n(K);
			const X = "https://www.paypal.com/myaccount/autopay",
				$ = "update_card_modal_id",
				ee = Object(l.c)({
					cancelSubscriptionModalIsOpen: Object(Y.b)("settings_optout_modal_id"),
					goldExpiration: Q.n,
					hasAndroidSubscription: Q.o,
					hasIOSSubscription: Q.t,
					hasStripeSubscription: Q.x,
					hasPaypalSubscription: Q.v,
					isGold: Q.r,
					isPremiumSubscriber: Q.s,
					updateCardModalIsOpen: Object(Y.b)($)
				}),
				te = Object(i.b)(ee, e => ({
					navigateToPurchasePremium: () => e(Object(c.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(u.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(u.i)($))
				})),
				ne = (e, t, n) => e && t ? r.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [r.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "jOodQ"
				}) : e && !t ? r.fbt._("Your Premium membership is valid until {date}.", [r.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "4m4zaE"
				}) : r.fbt._("Get Reddit Premium and help support Reddit.", null, {
					hk: "MOt6K"
				});
			class se extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(J.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(J.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(J.f)() : Object(J.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(J.g)() : Object(J.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(J.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(J.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(J.j)())
				}
				navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t
					} = this.props;
					e ? window.location.href = X : t && (window.location.href = `${s.a.redditUrl}/gold/subscription`)
				}
				render() {
					const {
						cancelSubscriptionModalIsOpen: e,
						goldExpiration: t,
						hasAndroidSubscription: n,
						hasIOSSubscription: s,
						hasPaypalSubscription: a,
						hasStripeSubscription: i,
						isGold: c,
						isPremiumSubscriber: l,
						isResponsiveSettingsEnabled: d,
						toggleUpdateCardModal: u,
						updateCardModalIsOpen: p,
						prefs: {
							highlightComments: b,
							hideAds: f
						}
					} = this.props, g = n || s;
					return o.a.createElement(h.a, null, o.a.createElement(F.b, {
						className: Z.a.premiumHeading,
						isResponsiveSettingsEnabled: d
					}, r.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), o.a.createElement(F.a, {
						className: Z.a.premiumSubtext
					}, r.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), o.a.createElement(U.a, null, r.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), o.a.createElement(F.a, {
						className: Z.a.premiumSubtext
					}, ne(c, l, t || 0)), !l && o.a.createElement(H.f, {
						label: c ? r.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : r.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), i && o.a.createElement(H.a, {
						label: r.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: u
					}), a && o.a.createElement(H.f, {
						label: r.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), l && !g && o.a.createElement(H.a, {
						label: r.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(U.a, null, r.fbt._("premium features", null, {
						hk: "20MX2a"
					})), o.a.createElement(H.o, {
						on: f,
						disabled: !c,
						onClick: this.onHideAdsToggle,
						label: r.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: r.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), o.a.createElement(H.o, {
						on: b,
						disabled: !c,
						onClick: this.onHighlightCommentsToggle,
						label: r.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: r.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), p && o.a.createElement(V, null), e && o.a.createElement(m.a, {
						headerText: r.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: r.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: r.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: r.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}), o.a.createElement(L, null))
				}
			}
			t.b = te(Object(W.c)(se))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.input("Input", i.a),
				d = c.a.label("Label", i.a),
				u = c.a.button("Button", i.a),
				m = c.a.div("Wrapper", i.a);
			class p extends r.a.Component {
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
						label: s,
						onClick: o,
						onChange: c,
						type: p = "text",
						value: h
					} = this.props;
					return r.a.createElement(m, {
						className: Object(a.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, r.a.createElement(l, {
						value: h,
						type: p,
						onChange: e => c(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), r.a.createElement(d, null, s), o && r.a.createElement(u, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = o.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n,
					...s
				} = e;
				return r.a.createElement(d, l({}, s, {
					className: Object(a.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = o.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = n("./src/reddit/models/Image/index.tsx");
			class i extends r.a.Component {
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
						labelClassName: s,
						value: o,
						controlName: i,
						isUploading: c,
						tabIndex: l
					} = this.props;
					return c ? r.a.createElement(a.a, {
						className: e
					}) : r.a.createElement(a.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: s,
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				o = n.n(a),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", o.a),
				l = i.a.div("Content", o.a),
				d = i.a.div("Sidebar", o.a);
			t.a = e => r.a.createElement(c, {
				className: e.className
			}, r.a.createElement(l, null, e.children), r.a.createElement(d, null, e.sidebar))
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
			var s = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.h3("Component", r.a)
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
				return G
			})), n.d(t, "j", (function() {
				return Q
			})), n.d(t, "n", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ae
			})), n.d(t, "o", (function() {
				return oe
			})), n.d(t, "i", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "f", (function() {
				return be
			})), n.d(t, "a", (function() {
				return fe
			})), n.d(t, "d", (function() {
				return we
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return ke
			})), n.d(t, "e", (function() {
				return Se
			})), n.d(t, "g", (function() {
				return Oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				f = n("./src/reddit/controls/FormFields/index.tsx"),
				g = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/Select/index.m.less"),
				x = n.n(y);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = g.a.span("Wrapper", x.a),
				w = g.a.select("Inner", x.a),
				E = g.a.wrapped(v.b, "Caret", x.a);

			function k({
				className: e,
				innerClassName: t,
				...n
			}) {
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return r.a.createElement(C, {
					className: e
				}, r.a.createElement(w, _({
					className: t
				}, n)), r.a.createElement(E, _({
					isSubreddit: !0
				}, s)))
			}
			var S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				P = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				j = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				T = n.n(I),
				A = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				R = n("./src/reddit/models/Flair/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				F = n.n(L);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(d.a)(h.a),
				W = g.a.wrapped(j.a, "Circle", F.a),
				q = g.a.h3("Label", F.a),
				G = g.a.wrapped(O.c, "Subtext", F.a),
				z = g.a.wrapped(m.a, "HoverTooltip", F.a),
				V = g.a.div("ControlContainer", F.a),
				J = g.a.div("TextContainer", F.a),
				Y = g.a.div("ActionContainer", F.a),
				Q = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: s,
					isNightModeOn: a,
					disabled: o,
					indent: i,
					last: l,
					...d
				}) => r.a.createElement("div", U({}, d, {
					className: Object(c.a)(F.a.Wrapper, e, {
						[F.a.mColumn]: "column" === t,
						[F.a.mDisabled]: !!o,
						[F.a.mIndent]: !!i,
						[F.a.mLast]: !!l,
						[F.a.isCreateCommunity]: !!n,
						[F.a.inModal]: !!s,
						[F.a.isNightModeOn]: !!a
					})
				})),
				K = g.a.a("Link", F.a),
				Z = g.a.wrapped(K, "SubtextLink", F.a),
				X = g.a.wrapped(N.a, "LinkIcon", F.a),
				$ = g.a.button("LinkButton", F.a),
				ee = g.a.wrapped(P.a, "ArrowRight", F.a),
				te = e => r.a.createElement(Q, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(J, {
					className: e.textContainerClassName
				}, r.a.createElement(q, null, e.label, e.isRequired && r.a.createElement(W, null)), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, e.children)),
				ne = g.a.div("StyledFlair", F.a),
				se = g.a.wrapped(ne, "SpoilerFlair", F.a),
				re = g.a.wrapped(ne, "NSFWFlair", F.a),
				ae = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return r.a.createElement(re, null, "NSFW");
						case R.f.Spoiler:
							return r.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return r.a.createElement(Q, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, r.a.createElement(J, null, r.a.createElement(M.a, null, r.a.createElement("label", {
						htmlFor: t
					}, r.a.createElement(q, null, e.label))), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(V, null, e.tooltip && r.a.createElement(z, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), r.a.createElement(S.a, {
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
					isNightModeOn: D.U
				}),
				pe = Object(a.b)(me)(e => r.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, r.a.createElement(J, {
					style: {
						flex: 5
					}
				}, !e.inModal && r.a.createElement(M.a, null, r.a.createElement(q, null, e.label)), r.a.createElement(G, null, " ", r.a.createElement(ue, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(Y, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(ce, null, r.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + T()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange
				}), r.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(de, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				he = e => r.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(M.a, null, r.a.createElement(q, null, e.label)), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(V, null, r.a.createElement(A.l, {
					onClick: e.onClick
				}, e.actionText)))),
				be = e => r.a.createElement(Q, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(K, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(X, null)), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement(K, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(ee, null)))),
				fe = e => r.a.createElement(Q, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(J, null, r.a.createElement($, {
					onClick: e.onClick
				}, e.label), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, r.a.createElement($, {
					onClick: e.onClick
				}, r.a.createElement(ee, null)))),
				ge = g.a.div("DropdownWrapper", F.a),
				ve = g.a.wrapped(b.b, "DropdownRow", F.a),
				ye = g.a.span("Row", F.a),
				xe = g.a.wrapped(v.b, "DropdownTriangle", F.a),
				_e = g.a.div("DescriptionsRow", F.a),
				Ce = Object(i.c)({
					isOpen: (e, t) => Object(B.b)(t.id)(e)
				}),
				we = Object(a.b)(Ce, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(J, null, r.a.createElement(q, null, e.label), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, (e => r.a.createElement(ge, {
					onClick: e.openDropdown
				}, r.a.createElement(ye, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), r.a.createElement(xe, null), r.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => r.a.createElement(ve, {
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && r.a.createElement(_e, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				Ee = ({
					disabled: e,
					last: t,
					onChange: n,
					...a
				}) => {
					const o = Object(s.useCallback)(e => n(e.target.value), [n]);
					return r.a.createElement(Q, {
						disabled: e
					}, r.a.createElement(J, null, r.a.createElement(q, null, a.label), r.a.createElement(G, null, a.subtext)), r.a.createElement("div", {
						className: F.a.Wrapper__LineBreak
					}), r.a.createElement(Q, {
						last: t,
						indent: !0,
						disabled: e
					}, r.a.createElement(k, {
						className: "redditStyle",
						disabled: e || a.inputDisabled,
						onChange: o,
						value: a.selected
					}, a.items.map(({
						value: e,
						text: t
					}) => r.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ke = e => r.a.createElement(Q, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(J, null, r.a.createElement(q, null, e.label), r.a.createElement(G, null, e.subtext)), r.a.createElement(Y, null, e.children)),
				Se = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(f.a, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Oe = e => r.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), r.a.createElement("div", {
					className: F.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(u.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = o.a.wrapped(d.a, "ImageUploadIcon", m.a), b = o.a.div("ImageIconRow", m.a), f = o.a.div("ImageUploadText", m.a), g = o.a.wrapped(i.a, "FileDrop", m.a), v = o.a.div("ContainerUploading", m.a), y = e => r.a.createElement(v, {
				className: e.className
			}, r.a.createElement(b, null, r.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), r.a.createElement(f, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), x = o.a.label("Label", m.a);
			t.b = e => r.a.createElement(g, {
				className: e.className,
				onDrop: e.onChange,
				render: t => r.a.createElement(x, {
					className: Object(a.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, r.a.createElement(b, null, e.icon || r.a.createElement(h, null)), r.a.createElement(f, null, e.label), r.a.createElement(c.a, {
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
				return h
			})), n.d(t, "g", (function() {
				return b
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				i = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				l = s.a.div("HomePageGroup", a.a),
				d = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				h = s.a.div("FormElement", a.a),
				b = s.a.div("FormGroupDescription", a.a),
				f = s.a.div("FormItem", a.a),
				g = s.a.h3("FormElementTitle", a.a),
				v = s.a.div("FormElementDescription", a.a),
				y = s.a.div("FormElementError", a.a),
				x = s.a.div("FormElementSubGroup", a.a),
				_ = s.a.li("FormListItem", a.a)
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
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const u = s.a.wrapped(r.a, "ModalInput", d.a),
				m = s.a.input("Input", d.a),
				p = s.a.wrapped(c.a, "RadioOn", d.a),
				h = s.a.wrapped(i.a, "RadioOff", d.a),
				b = s.a.wrapped(a.a, "Checkbox", d.a),
				f = s.a.wrapped(o.a, "CheckboxSelected", d.a),
				g = s.a.textarea("Textarea", d.a),
				v = s.a.label("StyledLabel", d.a),
				y = s.a.input("StyledFileInput", d.a)
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
				return s
			})), n.d(t, "a", (function() {
				return C
			}));
			var s, r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = n("./src/reddit/components/TabNav/index.m.less"),
				f = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(s || (s = {}));
			const v = d.a.wrapped(h.a, "Gear", f.a),
				y = d.a.h3("Title", f.a),
				x = d.a.div("TabNavContainer", f.a),
				_ = d.a.div("Tabs", f.a),
				C = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...s
				}) => i.a.createElement(p.a, g({}, s, {
					"aria-selected": e,
					className: Object(c.a)(s.className, {
						[f.a.mIsActive]: e,
						[f.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", f.a),
				w = e => {
					switch (e) {
						case s.GEAR:
							return i.a.createElement(v, null);
						default:
							return null
					}
				},
				E = () => window.pageYOffset || window.scrollY,
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
						this.state.sticky || this.forceUnsticky ? E() < k && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : E() >= k && this.setState({
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
					} = this.props, s = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return i.a.createElement(x, {
						className: Object(c.a)(s, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, i.a.createElement(y, {
						className: Object(c.a)(s, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, w(this.props.icon), this.props.title), i.a.createElement(_, {
						className: Object(c.a)(s, {
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
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				u = n.n(d);
			const m = o.a.span("UserIconContainer", u.a),
				p = o.a.wrapped(c.a, "UserIcon", u.a),
				h = o.a.wrapped(l.a, "UserLink", u.a);
			t.a = e => a.a.createElement(h, {
				className: e.className,
				to: `${s.a.redditUrl}/user/${e.username}`
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const l = a.a.div("WidgetBackground", c.a),
				d = a.a.wrapped(({
					children: e,
					...t
				}) => r.a.createElement("div", t, r.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const a = {
					[r.P.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.P.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.P.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.P.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.P.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.P.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.P.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				o = e => {
					const t = a[e];
					return t && t() || ""
				},
				i = {
					[r.Ub.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.Ub.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.Ub.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.Ub.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.Ub.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.Ub.ALL]: () => s.fbt._("All Time", null, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: o,
						"data-redditstyle": i,
						...c
					} = t, l = ((e, t, n) => {
						const s = !(!t && !n);
						let r = "";
						return r = e ? s ? d.a.mDisabledRedditStyle : d.a.mDisabled : s ? d.a.mActiveRedditStyle : d.a.mActive
					})(s, o, i);
					return r.a.createElement(e, u({
						className: Object(a.a)(d.a.CheckboxIcon, l, n)
					}, c))
				},
				p = m(c.a),
				h = m(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? p : o.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(a.a)(d.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
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
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
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
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(r),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				b = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				y = n.n(v);
			var x = Object(b.a)(e => {
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
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = n("./src/reddit/controls/ErrorText/index.m.less"),
				C = n.n(_);
			const w = Object(u.c)({
				activeModalId: h.a
			});
			class E extends l.a.Component {
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
						errorModalBody: r,
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(m.a)(C.a.wrapper, n)
					}, l.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const k = Object(d.b)(w, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(E),
				S = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(k, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(S, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				u = r()(Object(i.DropTarget)(d, {
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
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, r.a.createElement(p, m({
						innerRef: s
					}, l)), e.label && r.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class y extends r.a.Component {
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
						placeholder: s,
						errors: a = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(b, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!a[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(l.b, {
						className: u.a.trash
					})), !!a[o] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, a[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !i;
					return r.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(g, {
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(a);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const a = (e, t) => Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
				o = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
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
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/stripe-connect-links`,
					method: "post"
				})
			}

			function o(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me`,
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
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me`,
					method: "get"
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/stripe-sources/${t}`,
					method: "delete"
				})
			}

			function l(e, t) {
				return Object(r.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-sources/${t}`,
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
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
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
				return Object(o.a)(Object(r.a)(e, [a.a]), {
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
					endpoint: `${s.a.metaUrl}/orders`,
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
			var s = n("./node_modules/lodash/merge.js"),
				r = n.n(s),
				a = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const s = {
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
					[h, b, f, g] = await Promise.all([d, u, m, p]);
				if (h.ok ? s.collections = h.body : s.errors.collections = h.error, b.ok) {
					const e = b.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return f.ok ? s.products = f.body : s.errors.products = f.error, g.ok ? (r()(s.badges, g.body.badges), s.userOwnedBadges = g.body.userOwnedBadges) : s.errors.userBadges = g.error, s
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
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: r.cb.GET
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				r = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				a = n.n(r);
			t.a = Object(s.DragDropContext)(a.a)
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = () => new BroadcastChannel("external_account"),
				r = e => {
					const t = s();
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
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.multipliedBy(r).toFixed(0)
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
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				a = "|downsized";

			function o(e, t) {
				return r + e + (t ? a : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(r)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function l(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function d(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...d(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return d(e, s.F).map(e => e.id)
			}

			function m(e) {
				return d(e, e => e.e === s.o).map(e => e.u)
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
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(s.subreddit)(t)
				}),
				a = () => r("view"),
				o = () => r("tap"),
				i = () => r("dismiss"),
				c = () => e => ({
					...Object(s.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				l = () => e => ({
					...Object(s.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				u = () => e => ({
					...Object(s.defaults)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => ({
					...Object(s.defaults)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(s.subredditById)(t, e)
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/telemetry/models/Event.ts");
			const o = e => ({
					...s.defaults(e),
					noun: "desktop_notification_permissions"
				}),
				i = e => e ? "enable" : "disable",
				c = e => {
					Object(r.a)({
						...o(e),
						action: a.c.View,
						source: "popup"
					})
				},
				l = e => {
					Object(r.a)({
						...o(e),
						action: a.c.Allow,
						source: "popup"
					})
				},
				d = e => {
					Object(r.a)({
						...o(e),
						action: a.c.Block,
						source: "popup"
					})
				},
				u = e => {
					Object(r.a)({
						...o(e),
						action: a.c.Close,
						source: "popup"
					})
				},
				m = (e, t, n) => ({
					...s.defaults(e),
					actionInfo: s.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				p = e => {
					Object(r.a)({
						...m(e, !0),
						action: a.c.Request,
						source: "notification"
					})
				},
				h = e => {
					Object(r.a)({
						...m(e, !0),
						action: a.c.Register,
						source: "notification"
					})
				},
				b = (e, t) => {
					Object(r.a)({
						...m(e, !1, t),
						action: a.c.Bail,
						source: "notification"
					})
				},
				f = e => ({
					...s.defaults(e),
					noun: "push_notification"
				}),
				g = e => ({
					...f(e),
					notification: s.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				v = (e, t, n) => r => ({
					...s.defaults(r),
					action: i(e),
					notification: {
						type: t
					},
					noun: n ? "email" : "notification",
					source: n ? "email_app_settings" : "notification_app_settings"
				}),
				y = e => t => ({
					...s.defaults(t),
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
				return h
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => ({
					...s.defaults(e),
					correlationId: Object(o.c)(o.a.PremiumSettings),
					screen: s.screen(e)
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
						type: Object(r.s)(e) ? a.GoldPurchaseType.Cancel : a.GoldPurchaseType.GetPremium
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
				h = () => e => ({
					...i(e),
					source: "premium_settings",
					action: "select",
					noun: "hide_ads"
				}),
				b = () => e => ({
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
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, r = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(s || (s = {}));
			const a = e => t => ({
					source: "settings",
					action: "connect",
					noun: "sso",
					actionInfo: {
						...r.actionInfo(t),
						type: e
					}
				}),
				o = e => t => ({
					source: "settings",
					action: "disconnect",
					noun: "sso",
					actionInfo: {
						...r.actionInfo(t),
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(a.b)();
				return r.a.createElement("i", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const d = c.a.wrapped(e => {
				const t = Object(l.b)();
				return r.a.createElement("i", {
					className: `${Object(a.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(a.a, null, e.desc))
			}, "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg",
				transform: "rotate(180)"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), r.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, r.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), r.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), r.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), r.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, r.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, r.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, r.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
				fill: "#EA4335"
			}))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), r.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/PlusCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 36 36",
				version: "1.1"
			}, r.a.createElement("circle", {
				cx: "18",
				cy: "18",
				fill: "#fff",
				r: "17.5",
				stroke: "inherit"
			}), r.a.createElement("path", {
				clipRule: "evenodd",
				d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
				fill: "inherit",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fillRule: "evenodd"
			}, r.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const c = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function a(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH"
				}(s || (s = {}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, r, a;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./node_modules/uuid/v4.js"),
				d = n.n(l),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/extractQueryParams/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				b = n("./src/reddit/actions/pages/shared.ts"),
				f = n("./node_modules/js-cookie/src/js.cookie.js"),
				g = n.n(f),
				v = n("./src/reddit/actions/alpha.ts"),
				y = n("./src/reddit/actions/login.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/actions/users.ts"),
				C = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				w = n("./src/reddit/components/ConfirmModal/index.tsx"),
				E = n("./node_modules/icepick/icepick.js"),
				k = n("./src/reddit/actions/preferences.ts"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				P = n("./src/reddit/selectors/sso.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				N = n("./src/lib/validateEmail/index.ts"),
				I = n("./src/reddit/actions/toaster.ts"),
				T = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				A = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				M = n("./src/reddit/icons/svgs/Info/index.tsx"),
				R = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				B = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/models/User/index.ts"),
				L = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				F = n.n(L);
			const U = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(j.i)(e);
						return t && Object(D.e)(t) || ""
					}
				}),
				H = Object(o.b)(U, e => ({
					changeEmail: t => e(Object(_.t)(t)),
					sendResetEmail: t => e(Object(_.w)(t)),
					showErrorToast: t => e(Object(I.e)({
						duration: I.a,
						kind: B.b.Error,
						text: t
					}))
				})),
				W = e => e ? a.a.createElement(A.a, {
					className: Object(u.a)(F.a.image, F.a.success)
				}) : a.a.createElement(R.a, {
					className: Object(u.a)(F.a.image, F.a.error)
				}),
				q = e => e ? s.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : s.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				G = e => e ? s.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : s.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				z = e => e ? s.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : s.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				V = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? a.a.createElement(M.a, {
						className: Object(u.a)(F.a.inputIcon, F.a.error)
					}) : a.a.createElement(A.a, {
						className: Object(u.a)(F.a.inputIcon, F.a.success)
					}) : null
				};
			class J extends a.a.Component {
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
							enteredEmail: r
						} = this.state, a = Object(N.a)(r, !1), o = a ? "" : s.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: o,
							inputChecked: !0
						}), a && (t ? n({
							curEmail: r,
							name: this.props.username
						}) : e({
							newEmail: r
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
					} = this.state, r = !this.props.email && !e, o = r && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return a.a.createElement("div", {
						className: F.a.container
					}, a.a.createElement("h3", {
						className: F.a.header
					}, s.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), a.a.createElement("div", {
						className: F.a.status
					}, W(e), a.a.createElement("h3", {
						className: F.a.statusText
					}, G(e))), a.a.createElement("p", {
						className: F.a.description
					}, q(e)), a.a.createElement("div", {
						className: F.a.actionContainer
					}, a.a.createElement("div", {
						className: F.a.emailContainer
					}, r ? a.a.createElement(a.a.Fragment, null, a.a.createElement(T.a, {
						className: Object(u.a)(F.a.input, F.a[o]),
						label: s.fbt._("Enter email", null, {
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
					}, e ? s.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : s.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var Y = H(J),
				Q = n("./src/reddit/components/Settings/modalIds.ts"),
				K = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Z = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				X = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				$ = n.n(X);
			const ee = [{
					text: "English",
					value: "en"
				}, {
					text: "Spanish",
					value: "es"
				}],
				te = Object(c.c)({
					hasVerifiedEmail: j.z,
					isFPR: j.H,
					language: j.S,
					shouldShowCreatePasswordModal: P.d,
					showLanguageSection: O.d.langSelect
				}),
				ne = Object(o.b)(te, e => ({
					changeLanguage: t => e(Object(k.v)(t)),
					openChangeEmailModal: () => e(Object(x.i)(Q.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(x.h)(Q.l)),
					resendEmail: () => e(Object(_.v)())
				})),
				se = ({
					email: e,
					hasVerifiedEmail: t,
					resendEmail: n
				}) => e ? t ? e : a.a.createElement(a.a.Fragment, null, s.fbt._("{email} not verified!", [s.fbt._param("email", e)], {
					hk: "3PanQN"
				}), a.a.createElement(S.g, {
					className: $.a.tertiaryBtn,
					onClick: n
				}, s.fbt._("Click to resend", null, {
					hk: "3LDVAB"
				}))) : s.fbt._("Missing email, please update to secure your account", null, {
					hk: "3dtA7o"
				});
			var re = ne(({
					changeLanguage: e,
					isFPR: t,
					language: n,
					openChangeEmailModal: o,
					openSSOCreatePasswordForEmailModal: i,
					shouldShowCreatePasswordModal: c,
					showLanguageSection: l,
					toggleChangePasswordModal: d,
					...u
				}) => {
					const [m, p] = Object(r.useState)(!1), h = Object(r.useCallback)(async t => {
						p(!0), await e(t), p(!1)
					}, [e]), [b, f] = Object(r.useState)(ee);
					b.find(({
						value: e
					}) => e === n) || f(Object(E.push)(b, {
						text: n,
						value: n
					}));
					return t ? a.a.createElement(Y, {
						email: u.email
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null, s.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), a.a.createElement(Z.b, {
						actionText: s.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: s.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							c ? i() : o()
						},
						subtext: se(u)
					}), !c && a.a.createElement(Z.b, {
						actionText: s.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: s.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !0,
						onClick: d,
						subtext: s.fbt._("Password must be at least 6 characters long", null, {
							hk: "24bAMu"
						})
					}), l ? a.a.createElement(Z.h, {
						inputDisabled: m,
						id: "lang",
						items: b,
						label: s.fbt._("Display language", null, {
							hk: "3roQUD"
						}),
						onChange: h,
						selected: n,
						subtext: s.fbt._("Select your preferred language for buttons and other text from Reddit. This does not change the language of user generated content. Note: This feature is in alpha testing and will likely change.", null, {
							hk: "q6SvY"
						})
					}) : null)
				}),
				ae = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				oe = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				ie = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				ce = n("./src/reddit/constants/accountManager.ts"),
				le = n("./src/reddit/contexts/PageLayer/index.tsx"),
				de = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				ue = n("./src/reddit/selectors/accountManager.ts"),
				me = n("./src/reddit/selectors/activeModalId.ts"),
				pe = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				he = n("./src/config.ts"),
				be = n("./src/reddit/helpers/trackers/sso.ts"),
				fe = n("./src/reddit/hooks/useTracking.ts"),
				ge = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				ve = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				ye = n.n(ve),
				xe = n("./src/lib/lessComponent.tsx");
			const _e = xe.a.wrapped(Z.c, "ConnectApple", ye.a),
				Ce = xe.a.wrapped(S.i, "ConnectAppleButton", ye.a),
				we = xe.a.div("ConnectionInfo", ye.a),
				Ee = xe.a.wrapped(S.m, "DisconnectButton", ye.a),
				ke = xe.a.wrapped(ge.a, "AppleIcon", ye.a),
				Se = xe.a.span("TextAndIconWrapper", ye.a);

			function Oe(e) {
				return e.issuerId ? (() => a.a.createElement(Z.c, {
					label: s.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, a.a.createElement(we, null, a.a.createElement(Ee, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[ye.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return a.a.createElement(_e, {
						className: t,
						label: s.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, a.a.createElement(Ce, {
						className: t,
						onClick: e.onConnectClick
					}, a.a.createElement(Se, null, a.a.createElement(ke, null), s.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const Pe = Object(c.c)({
				issuerId: P.a,
				shouldShowCreatePasswordModal: P.d
			});
			var je = Object(o.b)(Pe, e => ({
					openSSOCreatePasswordForLinkAppleModal: () => e(Object(x.h)(Q.i)),
					openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(x.h)(Q.j)),
					openLinkAppleSSOModal: () => e(Object(y.f)()),
					openUnlinkAppleSSOModal: () => e(Object(y.j)())
				}))(e => {
					const t = Object(fe.a)();
					return a.a.createElement(Oe, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(be.c)(be.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(be.d)(be.a.Apple)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
					})
				}),
				Ne = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx");
			const Ie = xe.a.wrapped(Z.c, "ConnectGoogle", ye.a),
				Te = xe.a.wrapped(S.i, "ConnectGoogleButton", ye.a),
				Ae = xe.a.div("ConnectionInfo", ye.a),
				Me = xe.a.wrapped(S.m, "DisconnectButton", ye.a),
				Re = xe.a.wrapped(Ne.a, "GoogleIcon", ye.a),
				Be = xe.a.span("TextAndIconWrapper", ye.a);

			function De(e) {
				return e.hasGoogleIdentity ? (() => a.a.createElement(Z.c, {
					label: s.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, a.a.createElement(Ae, null, a.a.createElement(Me, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(u.a)({
						[ye.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return a.a.createElement(Ie, {
						className: t,
						label: s.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, a.a.createElement(Te, {
						className: t,
						onClick: e.onConnectClick
					}, a.a.createElement(Be, null, a.a.createElement(Re, null), s.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const Le = Object(c.c)({
				hasGoogleIdentity: P.b,
				shouldShowCreatePasswordModal: P.d
			});
			var Fe = Object(o.b)(Le, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(x.h)(Q.m)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(x.h)(Q.n)),
					openLinkGoogleSSOModal: () => e(Object(y.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(y.k)())
				}))(e => {
					const t = Object(fe.a)();
					return a.a.createElement(De, {
						hasGoogleIdentity: e.hasGoogleIdentity,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(be.c)(be.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(be.d)(be.a.Google)), e.shouldShowCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				Ue = n("./src/reddit/actions/externalAccount.ts"),
				He = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				We = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				qe = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Ge = n("./src/reddit/models/ExternalAccount/index.ts");
			const ze = xe.a.wrapped(qe.a, "TwitterIcon", ye.a),
				Ve = 15,
				Je = xe.a.wrapped(He.a, "LoadingIcon", ye.a),
				Ye = xe.a.wrapped(Z.c, "ConnectTwitter", ye.a),
				Qe = xe.a.wrapped(S.i, "ConnectTwitterButton", ye.a),
				Ke = xe.a.span("TextAndIconWrapper", ye.a),
				Ze = xe.a.wrapped(S.m, "DisconnectButton", ye.a),
				Xe = xe.a.span("Username", ye.a),
				$e = xe.a.div("ConnectionInfo", ye.a);
			var et = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				tt = n("./src/reddit/selectors/externalAccount.ts");
			const nt = Object(c.c)({
					twitterAccount: tt.a,
					isTwitterConnectionPending: tt.b
				}),
				st = Object(o.b)(nt, e => ({
					onConnectAccount: t => {
						e(Ue.m(t)), t === Ge.a.Twitter && e((e, t) => et.b(t()))
					},
					onDisconnectAccount: t => {
						e(Ue.n(t)), t === Ge.a.Twitter && e((e, t) => et.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => et.e(n(), t))
				}));
			var rt = Object(le.t)()(st((function(e) {
				const t = Object(We.a)(),
					n = t => {
						t.preventDefault(), e.onConnectAccount(Ge.a.Twitter)
					},
					o = t => {
						t.preventDefault(), e.onDisconnectAccount(Ge.a.Twitter)
					};
				return a.a.createElement(r.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return a.a.createElement(Z.c, {
						label: s.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: s.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, a.a.createElement($e, null, a.a.createElement("div", null, a.a.createElement(Xe, null, "@", t.username)), a.a.createElement(Ze, {
						onClick: o
					}, "(", s.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: r,
						isTwitterConnectionPending: o
					} = e, i = Object(u.a)({
						[ye.a["m-responsive"]]: r
					}), c = s.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					});
					return a.a.createElement(Ye, {
						className: i,
						label: s.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: s.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, t ? a.a.createElement(S.q, {
						className: ye.a.ConnectTwitterButton2020,
						Icon: o ? Je : ze,
						text: o ? null : c,
						onClick: n
					}) : a.a.createElement(Qe, {
						className: i,
						onClick: n
					}, o ? a.a.createElement(Je, {
						sizePx: Ve
					}) : a.a.createElement(Ke, null, a.a.createElement(ze, null), c)))
				})(), a.a.createElement(Z.o, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: s.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: s.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			})));
			var at = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return a.a.createElement(r.Fragment, null, a.a.createElement(K.a, {
					id: "connected-accounts"
				}, s.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), a.a.createElement(rt, e), (() => {
					if (e.shouldRenderSSOAccounts) return a.a.createElement(r.Fragment, null, a.a.createElement(je, {
						isResponsiveSettingsEnabled: t
					}), a.a.createElement(Fe, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function ot() {
				return (ot = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const it = Object(c.c)({
				isEmployee: j.G
			});
			var ct = Object(o.b)(it)(e => {
					const t = !e.isEmployee;
					return a.a.createElement(at, ot({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				lt = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				dt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				ut = n.n(dt);
			const mt = xe.a.wrapped(pe.b, "Trash", ut.a),
				pt = xe.a.wrapped(K.a, "BetaTestsHeading", ut.a),
				ht = xe.a.wrapped(Z.o, "InBetaToggle", ut.a),
				bt = xe.a.wrapped(Z.o, "InRedesignBetaToggle", ut.a),
				ft = xe.a.button("DeactivateButton", ut.a),
				gt = xe.a.div("DeactivateWrapper", ut.a),
				vt = Object(c.c)({
					changePasswordHref: (e, t) => Object(ue.c)(e, {
						pageLayer: t.pageLayer,
						path: ce.c.ChangePassword
					}),
					deactivateModalOpen: Object(me.b)("deactivate_modal_id"),
					email: j.l,
					hasGoogleIdentity: P.b,
					inRedesignBeta: j.D,
					optoutModalOpen: Object(me.b)("settins_optout_modal_id"),
					shouldShowCreatePasswordModal: P.d,
					user: j.i
				}),
				yt = Object(o.b)(vt, (e, t) => ({
					deactivate: t => {
						e(Object(_.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(x.h)(Q.k)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						g.a.get("rseor3") && g.a.remove("rseor3", {
							domain: he.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = `${he.a.redditUrl}/prefs`
					},
					resendEmail: () => e(Object(_.v)()),
					toggleChangePasswordModal: () => e(Object(y.b)()),
					toggleDeactivateModal: () => e(Object(x.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(x.i)("settins_optout_modal_id"))
				}));
			class xt extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = null, this.launchChangePasswordFlow = () => {
						const {
							changePasswordHref: e,
							isResponsiveSettingsEnabled: t,
							toggleChangePasswordModal: n
						} = this.props;
						t ? window.location.href = e : n()
					}, this.disconnectFromGoogle = () => {
						this.iframeRef && this.iframeRef.contentWindow.postMessage({
							type: "unlinkGoogle"
						}, Object(de.a)())
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
						inRedesignBeta: r,
						isResponsiveSettingsEnabled: o,
						optOut: i,
						optoutModalOpen: c,
						pageLayer: l,
						prefs: d,
						shouldShowCreatePasswordModal: m,
						toggleDeactivateModal: p,
						toggleOptoutModal: h,
						update: b,
						user: f
					} = this.props, g = Object(u.a)({
						[ut.a["m-responsive"]]: o
					}), v = Object(u.a)({
						[ut.a.ResponsiveOverlay]: o
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(ie.a, null, a.a.createElement(oe.b, {
						isResponsiveSettingsEnabled: o
					}, s.fbt._("Account settings", null, {
						hk: "2faClM"
					})), a.a.createElement(re, {
						email: t,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), a.a.createElement(ct, this.props), a.a.createElement(pt, {
						className: g
					}, s.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), a.a.createElement(ht, {
						className: g,
						on: d.inBeta,
						onClick: () => b(!d.inBeta, "inBeta"),
						label: s.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: s.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), a.a.createElement(bt, {
						className: g,
						on: !r,
						onClick: h,
						label: s.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: s.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), a.a.createElement(K.a, null, s.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), a.a.createElement(gt, null, a.a.createElement(ft, {
						onClick: this.deactivateAccount
					}, a.a.createElement(mt, null), s.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && a.a.createElement(w.a, {
						headerText: s.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: s.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: s.fbt._("opt out", null, {
							hk: "2Abiox"
						}),
						onAccept: i,
						onCancel: h,
						onOverlayClick: h,
						overlayClassName: v,
						withOverlay: !0
					}), e && a.a.createElement(lt.b, {
						onClick: this.onDeactivate,
						exit: p,
						onOverlayClick: p,
						overlayClassName: v,
						user: f,
						withOverlay: !0
					}), m && a.a.createElement(ae.a, {
						isResponsiveSettingsEnabled: o
					})), n && a.a.createElement(C.a, {
						className: ut.a.googleDisconnectIFrame,
						pageLayer: l,
						path: ce.c.UnlinkGoogleSSO,
						setRef: e => {
							this.iframeRef = e
						}
					}))
				}
			}
			var _t = Object(le.t)()(yt(xt)),
				Ct = n("./src/reddit/reducers/user/prefs/index.ts"),
				wt = n("./src/reddit/actions/chat/constants.ts"),
				Et = n("./src/reddit/actions/chat/userSettings.ts"),
				kt = n("./src/reddit/actions/userBlocks.ts"),
				St = n("./src/reddit/actions/userWhitelist.ts"),
				Ot = n("./src/lib/timeAgo/index.ts"),
				Pt = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				jt = n("./src/reddit/components/Hovercards/helpers.ts"),
				Nt = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				It = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				Tt = n.n(It);
			const At = xe.a.p("Date", Tt.a),
				Mt = xe.a.wrapped(Nt.a, "UserNameAndIcon", Tt.a),
				Rt = xe.a.button("Button", Tt.a),
				Bt = xe.a.div("ButtonWrapper", Tt.a);
			var Dt = xe.a.wrapped(e => a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(Mt, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(jt.b)({
						author: e.name,
						tooltipIdPrefix: Pt.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), a.a.createElement(At, null, Object(Ot.d)(e.date / 1e3)), a.a.createElement(Bt, null, a.a.createElement(Rt, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", Tt.a),
				Lt = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				Ft = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				Ut = n.n(Ft);
			const Ht = 5,
				Wt = xe.a.h4("ListHeading", Ut.a),
				qt = xe.a.div("ListBox", Ut.a),
				Gt = xe.a.div("MoreWrapper", Ut.a),
				zt = xe.a.button("MoreButton", Ut.a),
				Vt = xe.a.wrapped(Z.m, "Subtext", Ut.a);
			class Jt extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === Lt.a.pending && this.props.api.new === Lt.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: n,
						api: r,
						add: o,
						padBottom: i,
						remove: c,
						list: l,
						label: d,
						title: m,
						subtext: p
					} = this.props, h = e ? l.length : 5;
					return a.a.createElement("div", {
						className: Object(u.a)(Ut.a.container, n, {
							[Ut.a.mPadBottom]: !!i
						})
					}, a.a.createElement(Wt, null, m), void 0 !== p && a.a.createElement(Vt, null, p), a.a.createElement(T.a, {
						buttonText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: r.new === Lt.a.pending,
						label: d,
						onClick: () => t && o(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), a.a.createElement(qt, null, l.slice(0, h).map(e => a.a.createElement(Dt, {
						disabled: r[e.name] === Lt.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Ht && !e ? a.a.createElement(Gt, null, a.a.createElement(zt, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var Yt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				Qt = n.n(Yt);
			const Kt = xe.a.div("ListsWrapper", Qt.a),
				Zt = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Xt = Object(o.b)(Zt, (e, t) => ({
					addBlocked: t => e(Object(kt.h)(t)),
					addWhitelisted: t => e(Object(St.g)(t)),
					removeWhitelisted: t => e(Object(St.h)(t)),
					removeBlocked: t => e(Object(kt.g)(t)),
					saveChatSettings: t => e(Object(Et.c)(t))
				}))(({
					addWhitelisted: e,
					chatSettings: t,
					prefs: {
						acceptPrivateMessages: n
					},
					removeWhitelisted: r,
					saveChatSettings: o,
					update: i,
					whitelist: c,
					whitelistApi: l
				}) => {
					const d = Object.entries(Ct.a).filter(e => e[1] === n)[0][0];
					return a.a.createElement(ie.a, null, a.a.createElement(oe.b, {
						isResponsiveSettingsEnabled: !1
					}, s.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), a.a.createElement(Z.d, {
						label: s.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: [wt.a.anybody, wt.a.account_age_30_days, wt.a.nobody],
						selected: t.invitePolicy,
						onClick: e => {
							o({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), a.a.createElement(Z.d, {
						label: s.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: s.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not whitelisted.", null, {
							hk: "3fmM1O"
						}),
						items: [Ct.a.Everyone, Ct.a.Whitelisted],
						displayItems: [Ct.b.Everyone, Ct.b.Whitelisted],
						selected: n,
						displayTitle: Ct.b[d],
						onClick: e => i(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (t.invitePolicy !== wt.a.anybody || n === Ct.a.Whitelisted) && a.a.createElement(Kt, null, a.a.createElement(Jt, {
						title: s.fbt._("People You’ve Whitelisted", null, {
							hk: "2dIqgE"
						}),
						subtext: s.fbt._("Whitelisted people can always send you private messages.", null, {
							hk: "1UCnvc"
						}),
						label: s.fbt._("Add new user to whitelist", null, {
							hk: "4pvEey"
						}),
						add: e,
						remove: r,
						list: c,
						api: l
					})))
				}),
				$t = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				en = n.n($t);

			function tn(e) {
				return a.a.createElement("header", {
					className: Object(u.a)(en.a.container, e.className)
				}, a.a.createElement("div", {
					className: en.a.title
				}, s.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), a.a.createElement("div", {
					className: en.a.tag
				}, s.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var nn = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				sn = n("./src/reddit/contexts/ApiContext.tsx"),
				rn = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				an = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				on = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				cn = n("./src/reddit/selectors/economics.ts"),
				ln = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				dn = n.n(ln);
			const {
				fbt: un
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var mn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(mn || (mn = {}));
			class pn extends a.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(rn.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = mn.Default;
					e.connectCode && e.connectStateToken && (t = mn.Connecting), e.stripeConnected && (t = mn.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== mn.Connected) {
						const e = await Object(rn.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: mn.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: mn.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = un._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === mn.Connected && (n = un._("connect", null, {
						hk: "22jQRU"
					})), t === mn.Connecting && (n = un._("connecting...", null, {
						hk: "3ccNPc"
					})), a.a.createElement("div", {
						className: e
					}, a.a.createElement(K.a, null, un._("accept tips", null, {
						hk: "1kEl0R"
					})), a.a.createElement(Z.k, {
						direction: "row",
						label: un._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: un._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, a.a.createElement("div", {
						className: dn.a.cta
					}, a.a.createElement(S.i, {
						className: dn.a.button,
						disabled: t !== mn.Default,
						onClick: this.initiateStripeConnect
					}, n), a.a.createElement("div", {
						className: dn.a.legal
					}, un._("By connecting to Stripe, you agree to our {Previews Terms of Service}", [un._param("Previews Terms of Service", a.a.createElement(nn.a, {
						className: dn.a.legalLink
					}))], {
						hk: "4wGqrc"
					})))), a.a.createElement("div", {
						className: dn.a.disclaimer
					}, a.a.createElement(on.a, {
						className: dn.a.icon
					}), un._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const hn = Object(c.c)({
					stripeConnected: cn.t
				}),
				bn = Object(o.b)(hn, e => ({
					onError: t => e(Object(I.e)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(an.a)(t)
					}))
				}));
			var fn = Object(sn.b)(bn(pn)),
				gn = n("./src/reddit/components/Settings/Creator/index.m.less"),
				vn = n.n(gn);

			function yn(e) {
				return a.a.createElement(ie.a, null, a.a.createElement("div", null, a.a.createElement(tn, {
					className: vn.a.header
				}), a.a.createElement(fn, {
					connectCode: e.stripeConnectCode,
					connectStateToken: e.stripeConnectStateToken
				})))
			}
			var xn = n("./src/lib/listingSort/index.ts"),
				_n = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				Cn = n("./src/higherOrderComponents/asTooltip.tsx"),
				wn = n("./src/reddit/actions/tooltip.ts"),
				En = n("./src/reddit/controls/Dropdown/index.tsx"),
				kn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Sn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				On = n("./src/reddit/selectors/tooltip.ts"),
				Pn = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				jn = n.n(Pn);
			const Nn = Object(Cn.a)(En.a),
				In = Object(c.c)({
					isDropdownOpen: (e, t) => Object(On.b)(t.dropdownId)(e)
				});
			class Tn extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => a.a.createElement(kn.b, {
						children: e.contentJsx || e.icon,
						className: jn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => a.a.createElement(kn.b, {
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
						renderItem: s = this.renderDropdownItem,
						selectedKey: r
					} = this.props, o = t.find(e => e.key === r) || t[0];
					return a.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(u.a)(jn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, a.a.createElement("div", {
						className: jn.a.labelWrapper
					}, n(o), a.a.createElement(Sn.b, null)), a.a.createElement(Nn, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, r === e.key))))
				}
			}
			var An = Object(o.b)(In, (e, t) => ({
					openDropdown: () => {
						e(Object(wn.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(Tn),
				Mn = n("./src/reddit/constants/listingSorts.ts");
			const Rn = [m.P.HOT, m.P.NEW, m.P.TOP, m.P.RISING];
			var Bn = e => {
				const {
					dropdownId: t
				} = e, n = Rn.map(e => ({
					key: e,
					displayText: Object(Mn.a)(e),
					icon: a.a.createElement(_n.a, {
						sort: e
					})
				}));
				return a.a.createElement(An, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const Dn = [m.Ub.HOUR, m.Ub.DAY, m.Ub.WEEK, m.Ub.MONTH, m.Ub.YEAR, m.Ub.ALL];
			var Ln = e => {
					const {
						dropdownId: t
					} = e, n = Dn.map(e => ({
						key: e,
						displayText: Object(Mn.b)(e)
					}));
					return a.a.createElement(An, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				Fn = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				Un = n.n(Fn);
			const Hn = xe.a.div("Separator", Un.a);
			class Wn extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(xn.d)(this.props.fullSort);
						this.props.onChange(Object(xn.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(xn.d)(this.props.fullSort);
						this.props.onChange(Object(xn.c)({
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
						sort: r,
						timeSort: o
					} = Object(xn.d)(t);
					return a.a.createElement(Z.c, {
						className: e,
						label: s.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: s.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, a.a.createElement("div", {
						className: Un.a.wrapper
					}, a.a.createElement(Bn, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: r
					}), o && a.a.createElement(a.a.Fragment, null, a.a.createElement(Hn, null), a.a.createElement(Ln, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: o
					}))))
				}
			}
			var qn = n("./src/reddit/constants/postLayout.ts"),
				Gn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				zn = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Vn = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				Jn = n("./src/reddit/controls/Dropdown/index.m.less"),
				Yn = n.n(Jn);
			const Qn = {
				[qn.d.Card]: Vn.a,
				[qn.d.Classic]: Gn.a,
				[qn.d.Compact]: zn.a
			};

			function Kn(e) {
				const t = Qn[e.layout];
				return a.a.createElement(t, {
					className: Yn.a.iconStyles
				})
			}
			const Zn = [qn.d.Card, qn.d.Classic, qn.d.Compact];
			var Xn = e => {
					const {
						dropdownId: t
					} = e, n = Zn.map(e => ({
						key: e,
						displayText: e,
						icon: a.a.createElement(Kn, {
							layout: e
						})
					}));
					return a.a.createElement(An, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				$n = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				es = n.n($n);
			class ts extends a.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: s,
						layout: r
					} = this.props;
					return a.a.createElement(Z.c, {
						className: e,
						label: n,
						subtext: s
					}, a.a.createElement("div", {
						className: es.a.wrapper
					}, a.a.createElement(Xn, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: r
					})))
				}
			}
			var ns = n("./src/reddit/components/Settings/FeedForm.m.less"),
				ss = n.n(ns);

			function rs({
				isResponsiveSettingsEnabled: e,
				prefs: {
					autoplayVideo: t,
					hideNSFW: n,
					openPostInNewTab: r,
					over18: o,
					privateFeeds: i,
					reduceAnimationsFromAwards: c,
					rememberCommunitySort: l,
					sort: d,
					stylesEnabled: m,
					useMarkdown: p,
					layout: h,
					rememberCommunityLayout: b
				},
				update: f
			}) {
				const g = Object(u.a)({
					[ss.a["m-responsive"]]: e
				});
				return a.a.createElement(ie.a, null, a.a.createElement(oe.b, {
					isResponsiveSettingsEnabled: e
				}, s.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), a.a.createElement(K.a, null, s.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), a.a.createElement(Z.o, {
					on: o,
					onClick: () => f(!o, "over18"),
					label: s.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: s.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), a.a.createElement(Z.o, {
					disabled: !o,
					label: s.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!o && n,
					onClick: () => f(!n, "hideNSFW"),
					subtext: s.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), a.a.createElement(Z.o, {
					on: t,
					onClick: () => f(!t, "autoplayVideo"),
					label: s.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: s.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), a.a.createElement(Z.o, {
					on: c,
					onClick: () => f(!c, "reduceAnimationsFromAwards"),
					label: s.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: s.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), a.a.createElement(Z.o, {
					on: !!m,
					onClick: () => f(!m, "stylesEnabled"),
					label: s.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: s.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), a.a.createElement(Wn, {
					className: g,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: d,
					onChange: e => {
						d !== e && f(e, "sort")
					}
				}), a.a.createElement(Z.o, {
					className: g,
					indent: !0,
					on: !!l,
					onClick: () => f(!l, "rememberCommunitySort"),
					label: s.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: s.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), a.a.createElement(ts, {
					className: g,
					dropdownPrefix: "subreddit-view-setting",
					label: s.fbt._("Global content view", null, {
						hk: "1tWTJK"
					}),
					layout: h,
					onChange: e => f(e, "layout"),
					subtext: s.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
						hk: "1NyVGg"
					})
				}), a.a.createElement(Z.o, {
					className: g,
					on: !!b,
					onClick: () => f(!b, "rememberCommunityLayout"),
					label: s.fbt._("Remember per community", null, {
						hk: "42Ianh"
					}),
					subtext: s.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
						hk: "3fxqrV"
					}),
					indent: !0
				}), a.a.createElement(Z.o, {
					className: g,
					on: !!r,
					onClick: () => f(!r, "openPostInNewTab"),
					label: s.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: s.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), a.a.createElement(K.a, {
					className: g
				}, s.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), a.a.createElement(Z.o, {
					className: g,
					on: !!p,
					onClick: () => f(!p, "useMarkdown"),
					label: s.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: s.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), i && a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null, s.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), a.a.createElement(Z.f, {
					label: s.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: s.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: `${he.a.redditUrl}/prefs/feeds`,
					last: !0
				})))
			}
			var as = n("./src/reddit/components/Settings/Notifications/Loader.ts"),
				os = n("./src/reddit/helpers/trackers/notifications.ts"),
				is = n("./src/lib/notifications/constants.ts"),
				cs = n("./src/reddit/actions/notifications/loader.ts"),
				ls = n("./src/reddit/actions/notifications/preferences.ts"),
				ds = n("./src/reddit/actions/notifications/state.ts"),
				us = n("./src/reddit/actions/notifications/utils.ts"),
				ms = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ps = n("./src/reddit/helpers/localStorage/index.ts"),
				hs = n("./src/reddit/selectors/meta.ts"),
				bs = n("./src/reddit/selectors/notificationPrefs.ts"),
				fs = n("./src/reddit/selectors/responsiveSettings.ts"),
				gs = n("./src/higherOrderComponents/asModal/index.tsx"),
				vs = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ys = n("./src/reddit/constants/keycodes.ts"),
				xs = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				_s = n("./src/reddit/icons/svgs/Notify/index.tsx"),
				Cs = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				ws = n("./src/reddit/layout/row/Inline/index.tsx"),
				Es = n("./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less"),
				ks = n.n(Es);
			const {
				fbt: Ss
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Os = xe.a.wrapped(vs.o, "ModalText", ks.a);
			class Ps extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === ys.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						isResponsiveSettingsEnabled: e
					} = this.props, t = Object(u.a)({
						[ks.a["m-responsive"]]: e
					});
					return a.a.createElement(vs.d, {
						className: t
					}, a.a.createElement(vs.h, null, a.a.createElement(vs.p, null, Ss._("Turn on Desktop Notifications", null, {
						hk: "dbEX1"
					}))), a.a.createElement(vs.k, null, a.a.createElement(Os, null, a.a.createElement(ws.a, {
						className: ks.a.row
					}, a.a.createElement("div", {
						className: ks.a.stepNumber
					}, "1"), Ss._("Click on{lockIcon}in your Chrome browser address bar", [Ss._param("lockIcon", a.a.createElement(xs.a, {
						className: ks.a.icon
					}))], {
						hk: "1fzz4J"
					})), a.a.createElement(ws.a, {
						className: ks.a.row
					}, a.a.createElement("div", {
						className: ks.a.stepNumber
					}, "2"), Ss._("Select{settingsIcon}site settings", [Ss._param("settingsIcon", a.a.createElement(Cs.a, {
						className: ks.a.icon
					}))], {
						hk: "46Cjhq"
					})), a.a.createElement(ws.a, {
						className: ks.a.row
					}, a.a.createElement("div", {
						className: ks.a.stepNumber
					}, "3"), Ss._("Change{notifyIcon}notifications to 'Allow'", [Ss._param("notifyIcon", a.a.createElement(_s.a, {
						className: ks.a.notify
					}))], {
						hk: "1nkJPj"
					})))), a.a.createElement(vs.f, null, a.a.createElement(S.i, {
						onClick: this.props.onClose
					}, Ss._("Got it", null, {
						hk: "2PWXZB"
					}))))
				}
			}
			var js = Object(gs.a)(Ps),
				Ns = n("./src/reddit/components/Settings/DesktopNotifications/index.m.less"),
				Is = n.n(Ns);
			const {
				fbt: Ts
			} = n("./node_modules/fbt/lib/FbtPublic.js"), As = Object(c.c)({
				areNotificationsAvailable: e => {
					return Object(us.a)(e) === is.c.NotificationsSupported
				},
				isChrome: hs.e,
				isFirefox: hs.g,
				isMobileDevice: hs.h,
				isOpera: hs.i,
				isResponsiveSettingsEnabled: fs.a,
				preferences: bs.e
			}), Ms = Object(o.b)(As, e => ({
				requestNotificationPermission: () => Object(cs.a)().then(t => e(t.requestNotificationsPermissions(!0, !0))),
				setPreferences: t => e(Object(ls.b)(t)),
				subscribeForPNs: () => Object(cs.a)().then(t => e(t.subscribeForPNs(!0))),
				unsubscribeFromPNs: () => Object(cs.a)().then(t => e(t.unsubscribeFromPNs(!0)))
			}));
			class Rs extends a.a.Component {
				constructor(e) {
					super(e), this.lastNotificationsState = ds.a, this.onNotificationsStateChange = e => {
						const {
							isEnabled: t,
							permission: n
						} = e;
						let s = !1;
						t !== this.lastNotificationsState.isEnabled && (s = t !== this.state.desktopNotifications, t && ps.X(t)), this.setState(e => ({
							desktopNotifications: s ? t : e.desktopNotifications,
							notificationPermission: n
						})), this.lastNotificationsState = e
					}, this.trackPreferenceToggled = (e, t) => {
						this.props.sendEvent(Object(os.f)(t))
					}, this.setDesktopNotificationsLocalValue = e => {
						this.setState({
							desktopNotifications: e
						}, () => {
							this.trackPreferenceToggled("desktop_notification_permissions", e), ps.X(e)
						})
					}, this.handleBroadcastRecommendationsClick = () => {
						const {
							preferences: {
								broadcastFollower: e,
								broadcastRecommendation: t
							}
						} = this.props, n = !(e || t);
						this.updatePreferences({
							broadcastFollower: n,
							broadcastRecommendation: n
						}), this.trackPreferenceToggled("broadcast_follower", n), this.trackPreferenceToggled("broadcast_recommendation", n)
					}, this.handleDesktopNotificationsClick = () => {
						const {
							isMobileDevice: e,
							isResponsiveSettingsEnabled: t
						} = this.props;
						if (this.state.desktopNotifications) this.setDesktopNotificationsLocalValue(!1), this.props.unsubscribeFromPNs();
						else switch (this.state.notificationPermission) {
							case is.a.Denied:
								t && e || this.setState({
									showTurnOnDesktopNotificationsModal: !0
								});
								break;
							case is.a.Granted:
								this.setDesktopNotificationsLocalValue(!0), this.props.subscribeForPNs();
								break;
							default:
								this.props.requestNotificationPermission()
						}
					}, this.handlePrivateMessagesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							privateMessages: !e.privateMessages
						}), this.trackPreferenceToggled("private_messages", !e.privateMessages)
					}, this.handlePostRepliesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							postReplies: !e.postReplies
						}), this.trackPreferenceToggled("post_replies", !e.postReplies)
					}, this.handleCommentRepliesClick = () => {
						const {
							preferences: e
						} = this.props, t = !e.commentReplies;
						this.updatePreferences({
							commentReplies: t,
							threadReplies: !!t && e.threadReplies,
							topLevelComment: !!t && e.topLevelComment
						}), this.trackPreferenceToggled("comment_replies", !e.commentReplies)
					}, this.handleUsernameMentionsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							usernameMentions: !e.usernameMentions
						}), this.trackPreferenceToggled("username_mention", !e.usernameMentions)
					}, this.handleThreadRepliesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							threadReplies: !e.threadReplies
						}), this.trackPreferenceToggled("thread_replies", !e.threadReplies)
					}, this.handleTopLevelCommentClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							topLevelComment: !e.topLevelComment
						}), this.trackPreferenceToggled("top_level_comment", !e.topLevelComment)
					}, this.handleChatMessagesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							chatMessages: !e.chatMessages
						}), this.trackPreferenceToggled("chat_messages", !e.chatMessages)
					}, this.handleChatRequestsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							chatRequests: !e.chatRequests
						}), this.trackPreferenceToggled("chat_requests", !e.chatRequests)
					}, this.handleTrendingPostsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							trendingPosts: !e.trendingPosts
						}), this.trackPreferenceToggled("trending_posts", !e.trendingPosts)
					}, this.handleUpvotedPostsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							upvotedPosts: !e.upvotedPosts
						}), this.trackPreferenceToggled("upvotes_post", !e.upvotedPosts)
					}, this.handleUpvotedCommentsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							upvotedComments: !e.upvotedComments
						}), this.trackPreferenceToggled("upvotes_comment", !e.upvotedComments)
					}, this.handleCommunityRecommendationsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							communityRecommendations: !e.communityRecommendations
						}), this.trackPreferenceToggled("community_recs", !e.communityRecommendations)
					}, this.handleLiveEventClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							liveEvent: !e.liveEvent
						}), this.trackPreferenceToggled("live_event", !e.liveEvent)
					}, this.handleUserNewFollowersClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							userNewFollowers: !e.userNewFollowers
						}), this.trackPreferenceToggled("user_new_followers", !e.userNewFollowers)
					}, this.handlePostFlairAddedClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							postFlairAdded: !e.postFlairAdded
						}), this.trackPreferenceToggled("post_flair_added", !e.postFlairAdded)
					}, this.handleUserFlairAddedClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							userFlairAdded: !e.userFlairAdded
						}), this.trackPreferenceToggled("user_flair_added", !e.userFlairAdded)
					}, this.handleNewPinnedPostClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							newPinnedPost: !e.newPinnedPost
						}), this.trackPreferenceToggled("new_pinned_post", !e.newPinnedPost)
					}, this.handleTurnOnDesktopNotificationsModalClose = () => {
						this.setState({
							showTurnOnDesktopNotificationsModal: !1
						})
					}, this.state = {
						areNotificationsAvailable: !1,
						desktopNotifications: !1,
						notificationPermission: is.a.Denied,
						showTurnOnDesktopNotificationsModal: !1
					}
				}
				componentDidMount() {
					this.setState({
						areNotificationsAvailable: this.props.areNotificationsAvailable
					}), Object(ds.d)(this.onNotificationsStateChange)
				}
				componentWillUnmount() {
					Object(ds.e)(this.onNotificationsStateChange)
				}
				async updatePreferences(e) {
					this.props.setPreferences({
						...this.props.preferences,
						...e
					})
				}
				render() {
					const {
						isChrome: e,
						isFirefox: t,
						isOpera: n,
						isResponsiveSettingsEnabled: s,
						preferences: o
					} = this.props, i = Object(u.a)({
						[Is.a.ResponsiveTooltip]: s
					});
					return a.a.createElement(r.Fragment, null, a.a.createElement(K.a, null, s ? Ts._("Browser notifications", null, {
						hk: "YkSBM"
					}) : Ts._("Desktop notifications", null, {
						hk: "1Omom4"
					})), a.a.createElement(Z.o, {
						disabled: !(e || t || n) || !this.state.areNotificationsAvailable,
						label: s ? Ts._("Browser notifications", null, {
							hk: "4wdcLl"
						}) : Ts._("Desktop notifications", null, {
							hk: "4ameFp"
						}),
						last: !0,
						on: this.state.desktopNotifications,
						onClick: this.handleDesktopNotificationsClick,
						subtext: Ts._("See your notifications on the corner of your computer screen, even when Reddit is closed", null, {
							hk: "1PbYt7"
						}),
						tooltip: e || t || n ? "" : Ts._("Only available with Chrome, Firefox, and Opera", null, {
							hk: "1TLRmK"
						}),
						tooltipContentClassName: i
					}), a.a.createElement(K.a, null, Ts._("Push notifications", null, {
						hk: "3cyZhe"
					})), a.a.createElement(Z.o, {
						label: Ts._("Private messages", null, {
							hk: "2oRGiA"
						}),
						on: o.privateMessages,
						onClick: this.handlePrivateMessagesClick,
						subtext: Ts._("Receive notifications for private messages", null, {
							hk: "1zstrl"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Post Flair added", null, {
							hk: "2TdbG2"
						}),
						on: o.postFlairAdded,
						onClick: this.handlePostFlairAddedClick,
						subtext: Ts._("Notify me when my post gets flair added to it", null, {
							hk: "2RQlod"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("User Flair added", null, {
							hk: "3yvnYM"
						}),
						on: o.userFlairAdded,
						onClick: this.handleUserFlairAddedClick,
						subtext: Ts._("Notify me when I receive user flair", null, {
							hk: "19yB3s"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Comments on your posts", null, {
							hk: "peb1V"
						}),
						on: o.postReplies,
						onClick: this.handlePostRepliesClick,
						subtext: Ts._("Receive notifications for comments to your posts", null, {
							hk: "2Ovke1"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Replies to your comments", null, {
							hk: "38GGYX"
						}),
						on: o.commentReplies,
						onClick: this.handleCommentRepliesClick,
						subtext: Ts._("Receive notifications for replies to your comments", null, {
							hk: "erzOR"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Threaded comment replies", null, {
							hk: "3TFG1U"
						}),
						on: o.threadReplies,
						onClick: this.handleThreadRepliesClick,
						subtext: Ts._("Receive notifications for comment replies that aren't directly to you, but within comments chains that you participated in", null, {
							hk: "3fiCzE"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("New Top Level Comments", null, {
							hk: "NGuzP"
						}),
						on: o.topLevelComment,
						onClick: this.handleTopLevelCommentClick,
						subtext: Ts._("Receive notifications for new comments on posts you've been active in", null, {
							hk: "2jO6KJ"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Mentions of u/username", null, {
							hk: "Ti1Kh"
						}),
						on: o.usernameMentions,
						onClick: this.handleUsernameMentionsClick,
						subtext: Ts._("Receive notifications for mentions of your username", null, {
							hk: "2KcTCV"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Chat messages", null, {
							hk: "3daNg7"
						}),
						on: o.chatMessages,
						onClick: this.handleChatMessagesClick,
						subtext: Ts._("Receive notifications when a user chats with you", null, {
							hk: "YLNTD"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Chat requests", null, {
							hk: "1VYdRU"
						}),
						on: o.chatRequests,
						onClick: this.handleChatRequestsClick,
						subtext: Ts._("Receive notifications when a user sends a chat request to you", null, {
							hk: "Bdtpo"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Trending posts", null, {
							hk: "4nMMXP"
						}),
						on: o.trendingPosts,
						onClick: this.handleTrendingPostsClick,
						subtext: Ts._("Receive notifications for trending posts from your favorite communities", null, {
							hk: "g79tj"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Community recommendations", null, {
							hk: "SBOr5"
						}),
						on: o.communityRecommendations,
						onClick: this.handleCommunityRecommendationsClick,
						subtext: Ts._("Send me recommendations based on my activity", null, {
							hk: "2KDRYz"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Upvotes on your posts", null, {
							hk: "14XZUW"
						}),
						on: o.upvotedPosts,
						onClick: this.handleUpvotedPostsClick,
						subtext: Ts._("Notify me when my post is upvoted", null, {
							hk: "24mEWd"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Upvotes on your comments", null, {
							hk: "2OoH8o"
						}),
						on: o.upvotedComments,
						onClick: this.handleUpvotedCommentsClick,
						subtext: Ts._("Notify me when my comment is upvoted", null, {
							hk: "94wwQ"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Relevant Live Events", null, {
							hk: "3o21Vp"
						}),
						on: o.liveEvent,
						onClick: this.handleLiveEventClick,
						subtext: Ts._("Notify me during live events", null, {
							hk: "1h0OF3"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("New followers", null, {
							hk: "32VNj1"
						}),
						on: o.userNewFollowers,
						onClick: this.handleUserNewFollowersClick,
						subtext: Ts._("Notify me when another user follows me", null, {
							hk: "26um8p"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("RPAN broadcast recommendations", null, {
							hk: "1FED6O"
						}),
						on: o.broadcastFollower || o.broadcastRecommendation,
						onClick: this.handleBroadcastRecommendationsClick,
						subtext: Ts._("Get recommendations on live broadcasts you may be interested in", null, {
							hk: "4eRUjD"
						})
					}), a.a.createElement(Z.o, {
						label: Ts._("Pinned posts", null, {
							hk: "1yFhMU"
						}),
						last: !0,
						on: o.newPinnedPost,
						onClick: this.handleNewPinnedPostClick,
						subtext: Ts._("Know when there’s a pinned post in a community you follow", null, {
							hk: "3d4li5"
						})
					}), this.state.showTurnOnDesktopNotificationsModal && a.a.createElement(js, {
						isResponsiveSettingsEnabled: s,
						onClose: this.handleTurnOnDesktopNotificationsModalClose,
						overlayClassName: Object(u.a)({
							[Is.a.ResponsiveOverlay]: s
						})
					}))
				}
			}
			var Bs = Object(le.t)()(Ms(Object(ms.c)(Rs))),
				Ds = n("./src/reddit/icons/svgs/ArrowLeft/index.tsx"),
				Ls = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Fs = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				Us = n("./src/reddit/components/Settings/NotificationForm.m.less"),
				Hs = n.n(Us);
			var Ws = ({
					isDynamicEmailSettingsEnabled: e,
					isDynamicPnSettingsEnabled: t,
					isResponsiveSettingsEnabled: n,
					prefs: {
						collapseReadMessages: o,
						emailUnsubscribe: i,
						emailDigests: c,
						emailUnreadMessages: l,
						markMessagesRead: d,
						sendWelcomeMessages: u,
						showMessagesInInbox: m,
						showUsernameMentionNotifications: p
					},
					update: h,
					...b
				}) => {
					const [f, g] = Object(r.useState)(Fs.a.Push), v = f === Fs.a.Push, y = Object(fe.a)();
					return a.a.createElement(ie.a, null, e && a.a.createElement("nav", null, a.a.createElement(oe.b, {
						isResponsiveSettingsEnabled: n
					}, a.a.createElement("button", {
						className: Hs.a.navTitle,
						onClick: () => {
							g(v ? Fs.a.Email : Fs.a.Push)
						}
					}, !v && a.a.createElement(Ds.a, {
						className: Hs.a.arrowLeft
					}), v ? s.fbt._("Manage email", null, {
						hk: "2SFpfM"
					}) : s.fbt._("Back", null, {
						hk: "26R5gK"
					}), v && a.a.createElement(Ls.a, {
						className: Hs.a.arrowRight
					})), a.a.createElement("div", {
						className: Hs.a.titleLine
					}), a.a.createElement("div", {
						className: Hs.a.notificationTitle
					}, v ? s.fbt._("Notification settings", null, {
						hk: "3J5dtb"
					}) : s.fbt._("Email notifications", null, {
						hk: "Ac1EV"
					}))), v ? a.a.createElement(as.b, null) : a.a.createElement(as.a, {
						disabled: i,
						isEmailSettings: !0
					}), !v && a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null), a.a.createElement(Z.o, {
						on: !!i,
						onClick: () => {
							y(Object(os.a)(!!i)), h(!i, "emailUnsubscribe")
						},
						label: s.fbt._("Unsubscribe from all emails", null, {
							hk: "Dx3k0"
						})
					}))), !e && a.a.createElement(oe.b, {
						isResponsiveSettingsEnabled: n
					}, s.fbt._("Notifications settings", null, {
						hk: "rYOeb"
					})), t && !e && a.a.createElement(as.b, null), !t && !e && a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null, s.fbt._("inbox notification", null, {
						hk: "4a0OKQ"
					})), a.a.createElement(Z.o, {
						on: m,
						onClick: () => h(!m, "showMessagesInInbox"),
						label: s.fbt._("Conversations in inbox", null, {
							hk: "4b2411"
						}),
						subtext: s.fbt._("Display conversations within the messages section of your inbox", null, {
							hk: "3BrrbD"
						})
					}), a.a.createElement(Z.o, {
						on: d,
						onClick: () => h(!d, "markMessagesRead"),
						label: s.fbt._("Mark as read in inbox", null, {
							hk: "265UNW"
						}),
						subtext: s.fbt._("Mark messages as read when I open my inbox", null, {
							hk: "ER5dS"
						})
					}), a.a.createElement(Z.o, {
						on: o,
						onClick: () => h(!o, "collapseReadMessages"),
						label: s.fbt._("Collapse read messages", null, {
							hk: "2AJOGy"
						}),
						subtext: s.fbt._("Read messages will automatically be collapsed", null, {
							hk: "JKb22"
						})
					}), a.a.createElement(Z.o, {
						on: !!p,
						onClick: () => h(!p, "showUsernameMentionNotifications"),
						label: s.fbt._("Username mentions", null, {
							hk: "3enoZY"
						}),
						subtext: s.fbt._("Notify me when my username is mentioned in comment", null, {
							hk: "Qn9c"
						})
					}), a.a.createElement(Z.o, {
						on: !!u,
						onClick: () => h(!u, "sendWelcomeMessages"),
						label: s.fbt._("Mod welcome messages", null, {
							hk: "3T7aG9"
						}),
						subtext: s.fbt._("Receive welcome messages from moderators when I join their community", null, {
							hk: "1HKTXz"
						}),
						last: !0
					})), !e && a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null, s.fbt._("email notification", null, {
						hk: "4oynG5"
					})), a.a.createElement(Z.o, {
						on: !i,
						onClick: () => h(!i, "emailUnsubscribe"),
						label: s.fbt._("Email notifications", null, {
							hk: "2KF2g2"
						}),
						subtext: s.fbt._("If turned off, you will still receive administrative emails", null, {
							hk: "3eP8Pj"
						})
					}), a.a.createElement(Z.o, {
						disabled: i,
						on: !i && l,
						onClick: () => h(!l, "emailUnreadMessages"),
						label: s.fbt._("Unread messages", null, {
							hk: "2HW2aS"
						}),
						subtext: s.fbt._("Receive unread messages via email", null, {
							hk: "15wibQ"
						}),
						indent: !0
					}), a.a.createElement(Z.o, {
						disabled: i,
						on: !i && !!c,
						onClick: () => h(!c, "emailDigests"),
						label: s.fbt._("Email digests", null, {
							hk: "1vedUs"
						}),
						subtext: s.fbt._("Receive periodic emails with the top posts from your favorite communities", null, {
							hk: "2gOxhp"
						}),
						indent: !0,
						last: !0
					})), !t && !e && a.a.createElement(Bs, {
						isResponsiveSettingsEnabled: n
					}))
				},
				qs = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Gs = n.n(qs);

			function zs(e) {
				return a.a.createElement("header", {
					className: Object(u.a)(Gs.a.container, e.className)
				}, a.a.createElement("div", {
					className: Gs.a.title
				}, s.fbt._("Payments", null, {
					hk: "rydT0"
				})), a.a.createElement("div", {
					className: Gs.a.description
				}, s.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var Vs = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Js = n("./src/reddit/models/Payments/index.ts"),
				Ys = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Qs = n.n(Ys);
			class Ks extends a.a.Component {
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
						const t = e.type === Js.a.SavedStripe ? await Object(rn.b)(this.props.apiContext(), e.id) : await Object(rn.c)(this.props.apiContext(), e.id);
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
					}, a.a.createElement(K.a, null, s.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return a.a.createElement("div", {
							className: Qs.a.payment,
							key: e.id
						}, a.a.createElement("div", {
							className: Qs.a.paymentDisplay
						}, a.a.createElement(xs.a, {
							className: Qs.a.lock
						}), e.display), a.a.createElement(S.o, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? s.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : s.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && a.a.createElement("div", {
						className: Qs.a.noSavedPayment
					}, s.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const Zs = Object(c.c)({
					savedPayments: cn.o
				}),
				Xs = Object(o.b)(Zs, e => ({
					onError: t => e(Object(I.e)({
						duration: 5e3,
						kind: B.b.Error,
						text: Object(an.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Js.a.SavedStripe && e(Object(Vs.a)({
							cardId: t.id
						})), t.type === Js.a.SavedPayPal && e(Object(Vs.e)({
							sourceId: t.id
						}))
					}
				}));
			var $s = Object(sn.b)(Xs(Ks)),
				er = n("./src/reddit/components/Settings/Payments/index.m.less"),
				tr = n.n(er);
			var nr = () => a.a.createElement(ie.a, null, a.a.createElement(zs, {
					className: tr.a.header
				}), a.a.createElement($s, null)),
				sr = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				rr = n("./src/reddit/constants/experiments.ts"),
				ar = n("./src/reddit/helpers/chooseVariant/index.ts");
			const or = Object(c.a)(e => Object(ar.c)(e, {
					experimentEligibilitySelector: ar.a,
					experimentName: rr.h
				}), e => e === rr.c.Enabled),
				ir = Object(c.a)(e => Object(ar.c)(e, {
					experimentEligibilitySelector: ar.a,
					experimentName: rr.f
				}), e => e === rr.a.Enabled),
				cr = xe.a.span("SubheaderLink", Qt.a),
				lr = xe.a.button("GenerateBackupCodesButton", Qt.a),
				dr = xe.a.wrapped(Z.f, "ThirdPartyAuth", Qt.a),
				ur = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: O.d.privacySettingLocationBasedRecommendations,
					shouldShowCreatePasswordModal: P.d,
					shouldConsolidateAdsPreferences: ir,
					shouldRemoveAdsPreferences: or
				}),
				mr = Object(o.b)(ur, (e, t) => ({
					addBlocked: t => e(Object(kt.h)(t)),
					addWhitelisted: t => e(Object(St.g)(t)),
					openSSOCreatePasswordFor2FAModal: () => e(Object(x.h)(Q.h)),
					removeWhitelisted: t => e(Object(St.h)(t)),
					removeBlocked: t => e(Object(kt.g)(t)),
					saveChatSettings: t => e(Object(Et.c)(t)),
					enable2FA: () => e(Object(y.d)()),
					disable2FA: () => e(Object(y.c)()),
					generateBackupCodes: () => e(Object(y.a)())
				}));
			var pr = mr(({
					addBlocked: e,
					blocked: t,
					blockedApi: n,
					prefs: {
						allowClickTracking: r,
						hideFromRobots: o,
						activityRelevantAds: i,
						loginOtpEnabled: c,
						thirdPartyDataPersonalizedAds: l,
						thirdPartySiteDataPersonalizedAds: d,
						thirdPartySiteDataPersonalizedContent: m,
						showLocationBasedRecommendations: p,
						thirdPartyPersonalizedAds: h
					},
					enable2FA: b,
					disable2FA: f,
					generateBackupCodes: g,
					isResponsiveSettingsEnabled: v,
					openSSOCreatePasswordFor2FAModal: y,
					removeBlocked: x,
					update: _,
					shouldShowLocationBasedSetting: C,
					shouldShowCreatePasswordModal: w,
					shouldConsolidateAdsPreferences: E,
					shouldRemoveAdsPreferences: k
				}) => a.a.createElement(ie.a, null, a.a.createElement(oe.b, {
					isResponsiveSettingsEnabled: v
				}, s.fbt._("Safety & Privacy", null, {
					hk: "3hohgI"
				})), a.a.createElement(oe.a, null, s.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [s.fbt._param("=Privacy & Security FAQs", a.a.createElement(cr, null, s.fbt._("{=Privacy & Security FAQs}", [s.fbt._param("=Privacy & Security FAQs", a.a.createElement("a", {
					href: `${he.a.redditHelpUrl}/en/categories/privacy`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, s.fbt._("Privacy & Security FAQs", null, {
					hk: "4qvhC1"
				})))], {
					hk: "2rwJJE"
				})))], {
					hk: "3appHO"
				})), a.a.createElement(K.a, null, s.fbt._("Safety", null, {
					hk: "WyYmF"
				})), a.a.createElement(Jt, {
					title: s.fbt._("People You’ve Blocked", null, {
						hk: "3DxcE1"
					}),
					subtext: s.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
						hk: "1m7s07"
					}),
					label: s.fbt._("Block new user", null, {
						hk: "2OeU8N"
					}),
					add: e,
					remove: x,
					list: t,
					api: n,
					padBottom: !0
				}), E ? ((e, t, n, r, o, i, c, l, d, u, m) => a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null, s.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), a.a.createElement(Z.o, {
					on: !e,
					onClick: () => r(!e, "hideFromRobots"),
					label: s.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && a.a.createElement(Z.o, {
					on: t,
					onClick: () => r(!t, "allowClickTracking"),
					label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && a.a.createElement(Z.o, {
					on: n,
					onClick: () => r(!n, "activityRelevantAds"),
					label: s.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), !u && a.a.createElement(Z.o, {
					on: d,
					onClick: () => r(!d, "thirdPartySiteDataPersonalizedContent"),
					label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				}), a.a.createElement(K.a, null, s.fbt._("Personalize Recommendations", null, {
					hk: "2xRmd0"
				})), i && a.a.createElement(Z.o, {
					on: l,
					onClick: () => r(!l, "showLocationBasedRecommendations"),
					label: s.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), a.a.createElement(K.a, null, s.fbt._("Personalize Ads", null, {
					hk: "2FxbeI"
				})), a.a.createElement(Z.o, {
					on: m,
					onClick: () => r(!m, "thirdPartyPersonalizedAds"),
					label: s.fbt._("Personalize ads based on your activity and information from our partners", null, {
						hk: "IKbFc"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with and information that our advertising partners send us to show you better ads.", null, {
						hk: "1RGOVm"
					}),
					last: !0
				})))(o, r, i, _, 0, C, 0, p, m, k, h) : ((e, t, n, r, o, i, c, l, d, u) => a.a.createElement(a.a.Fragment, null, a.a.createElement(K.a, null, s.fbt._("Privacy", null, {
					hk: "30eaw9"
				})), a.a.createElement(Z.o, {
					on: !e,
					onClick: () => r(!e, "hideFromRobots"),
					label: s.fbt._("Show up in search results", null, {
						hk: "3TWi4z"
					}),
					subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
						hk: "4tnz3n"
					})
				}), !u && a.a.createElement(Z.o, {
					on: t,
					onClick: () => r(!t, "allowClickTracking"),
					label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
						hk: "21vbvn"
					}),
					subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
						hk: "DnCX0"
					})
				}), !u && a.a.createElement(Z.o, {
					on: n,
					onClick: () => r(!n, "activityRelevantAds"),
					label: s.fbt._("Personalize ads based on your Reddit activity", null, {
						hk: "OqV13"
					}),
					subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
						hk: "4C7zO1"
					})
				}), a.a.createElement(Z.o, {
					on: o,
					onClick: () => r(!o, "thirdPartyDataPersonalizedAds"),
					label: s.fbt._("Personalize ads based on information from our partners", null, {
						hk: "4pLCAq"
					}),
					subtext: s.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
						hk: "37eGRC"
					})
				}), a.a.createElement(Z.o, {
					on: c,
					onClick: () => r(!c, "thirdPartySiteDataPersonalizedAds"),
					label: s.fbt._("Personalize ads based on your activity with our partners", null, {
						hk: "3uQVuS"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
						hk: "2T8SXc"
					})
				}), i && a.a.createElement(Z.o, {
					on: l,
					onClick: () => r(!l, "showLocationBasedRecommendations"),
					label: s.fbt._("Personalize recommendations based on your general location", null, {
						hk: "2ila4i"
					}),
					subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
						hk: "5IBGv"
					})
				}), !u && a.a.createElement(Z.o, {
					on: d,
					onClick: () => r(!d, "thirdPartySiteDataPersonalizedContent"),
					label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
						hk: "2D9ITr"
					}),
					subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
						hk: "1e91Vl"
					}),
					last: !0
				})))(o, r, i, _, l, C, d, p, m, k), a.a.createElement(K.a, null, s.fbt._("Advanced security", null, {
					hk: "3H7FJN"
				})), a.a.createElement(Z.o, {
					on: c,
					onClick: () => {
						w ? y() : c ? f() : b()
					},
					label: s.fbt._("Use two-factor authentication", null, {
						hk: "2OxNGe"
					}),
					subtext: a.a.createElement(a.a.Fragment, null, s.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
						hk: "1LLqPh"
					}), c && a.a.createElement(a.a.Fragment, null, " ", s.fbt._("Lost access to your authenticator app?", null, {
						hk: "2x6g0Y"
					}), " ", a.a.createElement(lr, {
						type: "button",
						onClick: () => g()
					}, s.fbt._("Get your backup codes", null, {
						hk: "4fp3Xg"
					})), "."))
				}), a.a.createElement(dr, {
					className: Object(u.a)({
						[Qt.a["m-responsive"]]: v
					}),
					label: s.fbt._("Manage third-party app authorization", null, {
						hk: "3J65so"
					}),
					link: `${he.a.redditUrl}/prefs/apps`,
					last: !0
				}), w && a.a.createElement(ae.a, {
					isResponsiveSettingsEnabled: v
				}))),
				hr = n("./src/reddit/actions/snoovatar.ts"),
				br = n("./src/reddit/components/Loader/index.m.less"),
				fr = n.n(br);
			class gr extends a.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: s
					} = this.props;
					return e ? n ? n() : a.a.createElement(He.a, {
						center: !0,
						className: fr.a.loadingIcon,
						sizePx: s || 10
					}) : t()
				}
			}
			var vr = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				yr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				xr = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				_r = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				Cr = n("./src/reddit/icons/svgs/PlusCircle/index.tsx"),
				wr = n("./src/reddit/selectors/structuredStyles.ts"),
				Er = n("./src/reddit/selectors/subredditSettings.ts"),
				kr = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				Sr = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				Or = n.n(Sr);
			const {
				fbt: Pr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), jr = 30, Nr = 200, Ir = Object(c.a)(j.i, Er.a, j.tb, wr.n, me.a, (e, t, n, s, r) => {
				const a = e && e.profileId,
					o = a && s[a] ? s[a].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserCreated: e.created,
					currentUserName: Object(D.e)(e),
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
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === r
				}
			}), Tr = xe.a.div("ImageUploaderLayout", Or.a), Ar = xe.a.wrapped(kr.a, "IconImageUploader", Or.a), Mr = xe.a.wrapped(xr.a, "ProfileIcon", Or.a), Rr = xe.a.wrapped(kr.a, "BannerImageUploader", Or.a), Br = xe.a.wrapped(yr.a, "ProfileBanner", Or.a), Dr = xe.a.div("ProfileModerationContent", Or.a), Lr = xe.a.wrapped(Cr.a, "PlusCircle", Or.a), Fr = xe.a.span("LabelText", Or.a), Ur = xe.a.span("ImageType", Or.a), Hr = xe.a.a("Link", Or.a), Wr = xe.a.img("DummyBanner", Or.a), qr = xe.a.wrapped(vr.a, "Preview", Or.a);
			class Gr extends a.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(et.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(et.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(et.c)(this.props.contentVisible))
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
						}), this.props.sendEvent(Object(et.a)(this.props.showActiveCommunities))
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
						currentUserName: s,
						currentUserUrl: r,
						isEmployee: o,
						isGold: i,
						isNSFWModalOpen: c,
						isResponsiveSettingsEnabled: l,
						onClickSnoovatar: d,
						over18: m,
						prefersReducedAnimations: p,
						profileBanner: h,
						profileIcon: b,
						showActiveCommunities: f,
						snoovatarUrl: g,
						toggleNSFWModal: v
					} = this.props, {
						isDeletingBanner: y,
						isDeletingIcon: x,
						profileBannerUploading: _,
						profileIconUploading: C,
						publicDescription: E,
						title: k
					} = this.state, S = Object(u.a)({
						[Or.a["m-responsive"]]: l
					}), O = !!b && !Object(_r.b)(b);
					return a.a.createElement(ie.a, {
						sidebar: a.a.createElement(qr, {
							bannerBackgroundImage: h,
							currentUserHasSnoovatar: !!g,
							editMode: !0,
							isEmployee: o,
							isDefaultIcon: !b || b.indexOf("avatar_default") > -1,
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
							profileIcon: b,
							publicDescription: E,
							snoovatarUrl: g,
							recentAwardings: e,
							title: k,
							url: r,
							userCreated: n,
							username: s
						})
					}, a.a.createElement(oe.b, {
						isResponsiveSettingsEnabled: l
					}, Pr._("Customize profile", null, {
						hk: "1fenXK"
					})), a.a.createElement(K.a, null, Pr._("Profile Information", null, {
						hk: "3vzAUk"
					})), a.a.createElement(Z.e, {
						label: Pr._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							k !== this.props.title && this.updateProfile(k, "title")
						},
						placeholder: Pr._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: jr,
						subtext: Pr._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: k
					}), a.a.createElement(Z.g, {
						label: Pr._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							E !== this.props.publicDescription && this.updateProfile(E, "publicDescription")
						},
						placeholder: Pr._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: Nr,
						subtext: Pr._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: E
					}), a.a.createElement(K.a, null, Pr._("Images", null, {
						hk: "38DOkf"
					})), a.a.createElement(Z.k, {
						label: Pr._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: Pr._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, a.a.createElement(Tr, {
						className: Object(u.a)(S)
					}, O ? a.a.createElement(Mr, {
						className: S,
						iconUrl: b,
						isNSFW: !1,
						userName: s
					}) : a.a.createElement(Ar, {
						className: S,
						controlName: "profileIcon",
						icon: a.a.createElement(Lr, null),
						isUploading: C,
						label: a.a.createElement(Fr, null, Pr._("Drag and Drop or Upload {imageType} Image", [Pr._param("imageType", a.a.createElement(Ur, null, "avatar"))], {
							hk: "27PRKI"
						})),
						labelClassName: Or.a.Label,
						onChange: this.onIconChange
					}), h ? a.a.createElement(Br, {
						bannerUrl: h,
						className: S,
						isNSFW: !1,
						userName: s
					}) : a.a.createElement(Rr, {
						className: S,
						controlName: "profileBanner",
						icon: a.a.createElement(Lr, null),
						isUploading: _,
						label: a.a.createElement(Fr, null, Pr._("Drag and Drop or Upload {imageType} Image", [Pr._param("imageType", a.a.createElement(Ur, null, "Banner"))], {
							hk: "1DrvdL"
						})),
						labelClassName: Or.a.Label,
						onChange: this.onBannerChange
					}))), a.a.createElement(K.a, null, Pr._("Profile category", null, {
						hk: "1YRE6p"
					})), a.a.createElement(Z.o, {
						label: Pr._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: m,
						subtext: Pr._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), a.a.createElement(K.a, null, Pr._("Advanced", null, {
						hk: "1US2Ur"
					})), a.a.createElement(Z.o, {
						label: Pr._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: Pr._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [Pr._param("profileForm: r/all link", a.a.createElement(Hr, {
							href: "/r/all"
						}, "r/all")), Pr._param("profileForm: /users link", a.a.createElement(Hr, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), a.a.createElement(Z.o, {
						label: Pr._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: Pr._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: f,
						onClick: this.onShowActiveCommunitiesChange
					}), a.a.createElement(K.a, null, Pr._("Profile moderation", null, {
						hk: "3vDS8h"
					})), a.a.createElement(Dr, null, Pr._("For moderation tools please visit our {ProfileForm: mod page link}", [Pr._param("ProfileForm: mod page link", a.a.createElement(Hr, {
						href: `/user/${s}/about/edit/moderation`
					}, "Profile Moderation page"))], {
						hk: "3pih6f"
					})), c && a.a.createElement(w.a, {
						headerText: Pr._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: Pr._("If your account contains {NSFWConfirm: nsfw policy link} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [Pr._param("NSFWConfirm: nsfw policy link", a.a.createElement(Hr, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, "NSFW content"))], {
							hk: "3u1P0O"
						}),
						cancelText: Pr._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: Pr._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: v,
						onOverlayClick: v,
						overlayClassName: Object(u.a)({
							[Or.a.ResponsiveOverlay]: l
						}),
						withOverlay: !0
					}), a.a.createElement(Wr, {
						src: h
					}))
				}
			}
			const zr = Object(o.b)(Ir, e => ({
					imageDeleteRequested: t => e(Object(k.A)(t)),
					imagesUpdateRequested: (t, n) => e(Object(k.B)(t, n)),
					onClickSnoovatar: () => e(Object(hr.b)("profile_overview")),
					save: (t, n) => e(Object(k.G)(t, n)),
					toggleNSFWModal: () => e(Object(x.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(ms.c)(Gr)),
				Vr = Object(c.c)({
					isLoading: e => !Object(Er.a)(e)
				}),
				Jr = Object(o.b)(Vr)(gr);

			function Yr(e) {
				return a.a.createElement(Jr, {
					loaderSize: 50,
					render: () => a.a.createElement(zr, e)
				})
			}
			var Qr = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Kr = n.n(Qr);

			function Zr(e) {
				return a.a.createElement("header", {
					className: e.className
				}, a.a.createElement("div", {
					className: Kr.a.title
				}, s.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), a.a.createElement("div", {
					className: Kr.a.subtitle
				}, s.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var Xr = n("./src/reddit/actions/governance/communityDetails.ts"),
				$r = n("./src/lib/addQueryParams/index.ts"),
				ea = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				ta = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				na = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				sa = n.n(na);
			const {
				fbt: ra
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const aa = Object(c.c)({
				userId: e => {
					const t = Object(j.i)(e);
					return t ? t.id : ""
				}
			});
			var oa = Object(o.b)(aa)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, s = t.primaryColor, r = Object($r.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return a.a.createElement("div", {
						className: sa.a.body
					}, a.a.createElement("section", {
						className: sa.a.leftSection
					}, a.a.createElement("div", {
						className: sa.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), a.a.createElement("div", {
						className: sa.a.content
					}, a.a.createElement(ea.a, {
						index: "1",
						color: s
					}, ra._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), a.a.createElement(ea.a, {
						index: "2",
						color: s
					}, ra._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), a.a.createElement(ea.a, {
						index: "3",
						color: s
					}, ra._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), a.a.createElement("section", {
						className: sa.a.rightSection
					}, a.a.createElement(ta.a, {
						url: r,
						scale: 4
					})))
				})),
				ia = n("./src/reddit/constants/colors.ts"),
				ca = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				la = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				da = n("./src/reddit/icons/svgs/Close/index.tsx"),
				ua = n("./src/reddit/components/Economics/Price/index.tsx"),
				ma = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				pa = n("./src/lib/currency/centsToDollars/index.ts"),
				ha = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/Benefits/index.m.less"),
				ba = n.n(ha);
			const fa = [() => s.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => s.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => s.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => s.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				ga = [() => s.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => s.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => s.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => s.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function va({
				benefit: e,
				color: t
			}) {
				return a.a.createElement("li", {
					className: ba.a.benefit
				}, a.a.createElement("div", {
					className: ba.a.benefitCircle,
					style: {
						backgroundColor: t
					}
				}), e)
			}
			Object(sn.b)(Object(ms.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: r
				} = e;
				return a.a.createElement("div", {
					className: Object(u.a)(ba.a.container, t)
				}, a.a.createElement("div", {
					className: ba.a.topLine
				}, a.a.createElement(ma.a, {
					className: ba.a.brand,
					subreddit: r
				}), a.a.createElement("div", {
					className: ba.a.title
				}, s.fbt._("{community} Supporter Membership", [s.fbt._param("community", r.displayText)], {
					hk: "eZ8PH"
				}))), a.a.createElement("header", {
					className: ba.a.subTitle
				}, s.fbt._("Support the {community} community and receive exclusive access to premium features.", [s.fbt._param("community", r.displayText)], {
					hk: "2pm4PV"
				})), a.a.createElement("article", null, a.a.createElement("div", {
					className: ba.a.benefitsTitle
				}, s.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), a.a.createElement("ul", {
					className: ba.a.benefits
				}, fa.map(e => a.a.createElement(va, {
					benefit: e(),
					key: e()
				}))), a.a.createElement("div", {
					className: ba.a.benefitsTitle
				}, s.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), a.a.createElement("ul", {
					className: ba.a.benefits
				}, ga.map(e => a.a.createElement(va, {
					benefit: e(),
					key: e()
				})))), a.a.createElement("footer", {
					className: ba.a.price
				}, s.fbt._("${price}/month", [s.fbt._param("price", Object(pa.a)(n))], {
					hk: "2ykEVh"
				})))
			})));
			var ya = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				xa = n.n(ya);
			const {
				fbt: _a
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ca = e => _a._("You've been supporting the community and the development of new features since {joinDate}.", [_a._param("joinDate", e)], {
				hk: "37ImIl"
			}), wa = [_a._("Loyalty badge", null, {
				hk: "15DctX"
			}), _a._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), _a._("Distinguished username", null, {
				hk: "4vsJEd"
			}), _a._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var Ea = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: s,
					title: r
				} = e, o = s.primaryColor;
				return a.a.createElement("div", {
					className: xa.a.card,
					style: {
						borderColor: o
					}
				}, a.a.createElement(ma.a, {
					className: xa.a.brand,
					subreddit: s
				}), a.a.createElement("div", {
					className: xa.a.cardContent
				}, a.a.createElement("div", {
					className: xa.a.cardTitle
				}, r), a.a.createElement(ua.a, {
					className: xa.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: s.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), a.a.createElement("div", {
					className: xa.a.membershipMsg
				}, Ca(t)), a.a.createElement("div", {
					className: xa.a.benefitsTitle
				}, _a._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), a.a.createElement("ul", {
					className: xa.a.benefits
				}, wa.map(e => a.a.createElement(va, {
					benefit: e,
					color: o,
					key: e
				})))))
			};
			const {
				fbt: ka
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Sa = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: s,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(o.d)(), m = Object(fe.a)();
					Object(r.useEffect)(() => {
						c && (d(Object(Xr.a)({
							subredditId: c.id
						})), m(Object(la.a)(c.id)))
					}, [d, m, c]);
					const p = c ? c.primaryColor : "",
						h = p && Object(ca.a)(p, void 0, ia.b.white);
					return a.a.createElement("div", {
						className: Object(u.a)(t, xa.a.pointsContainer)
					}, a.a.createElement("header", {
						className: xa.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: h
						}
					}, ka._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), a.a.createElement(da.a, {
						className: xa.a.close,
						onClick: i,
						style: {
							fill: h
						}
					})), a.a.createElement("article", {
						className: xa.a.content
					}, c && a.a.createElement(a.a.Fragment, null, a.a.createElement(oa, {
						subreddit: c
					}), a.a.createElement(Ea, {
						joinDate: n,
						membership: s,
						subreddit: c,
						title: l
					}))))
				},
				Oa = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Pa = n("./src/reddit/actions/governance/errorToast.ts"),
				ja = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: Na
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Ia = Object(o.b)(void 0, (e, {
				subredditId: t,
				onClose: n
			}) => ({
				onCancelMembership: () => {
					e(Object(Oa.h)({
						subredditId: t
					})), n()
				},
				onError: t => Object(Pa.a)(e, t)
			}));
			var Ta = Object(sn.b)(Ia((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: s,
					joinDate: o,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: m,
					subredditId: p,
					title: h
				} = e, [b, f] = Object(r.useState)(!1), g = m ? m.displayText : "";
				return a.a.createElement("div", {
					className: Object(u.a)(n, xa.a.container)
				}, a.a.createElement("header", {
					className: xa.a.header
				}, Na._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), a.a.createElement(da.a, {
					className: xa.a.close,
					onClick: l
				})), a.a.createElement("article", {
					className: xa.a.content
				}, a.a.createElement("div", {
					className: xa.a.warning
				}, Na._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [Na._param("subredditName", g), Na._param("endDate", s)], {
					hk: "1POMMH"
				})), m && a.a.createElement(Ea, {
					joinDate: o,
					membership: i,
					subreddit: m,
					title: h
				})), a.a.createElement("footer", {
					className: xa.a.footer
				}, a.a.createElement(S.l, {
					disabled: b,
					onClick: async () => {
						f(!0);
						const e = await Object(ja.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (f(!1), d(e.error))
					}
				}, b ? Na._("canceling...", null, {
					hk: "1Ggy36"
				}) : Na._("cancel membership", null, {
					hk: "C9ZhO"
				})), a.a.createElement(S.i, {
					onClick: l
				}, Na._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const Aa = Object(c.c)({
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t]
				}),
				Ma = Object(o.b)(Aa);
			var Ra = Object(gs.a)(Ma((function(e) {
					return "points" === e.membership.currency ? a.a.createElement(Sa, e) : a.a.createElement(Ta, e)
				}))),
				Ba = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				Da = n.n(Ba);

			function La(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Fa extends a.a.Component {
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
						membership: r,
						settings: o
					} = t, i = La(r.endsAt), c = La(r.publishAt), l = !o.renew, d = n ? n.displayText : "", m = i ? s.fbt._("Cancelled. Will expire on {date}", [s.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? s.fbt._("Joined {date}", [s.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return a.a.createElement("div", {
						className: Object(u.a)(e, Da.a.container)
					}, a.a.createElement("div", {
						className: Da.a.membershipName
					}, s.fbt._("{subredditName} {title}", [s.fbt._param("subredditName", d), s.fbt._param("title", r.title)], {
						hk: "2NdAdN"
					})), !l && a.a.createElement("div", {
						className: Da.a.joinDate,
						title: p
					}, p), l && a.a.createElement("div", {
						className: Da.a.cancelled,
						title: m
					}, m), a.a.createElement(S.o, {
						className: Da.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && a.a.createElement(Ra, {
						withOverlay: !0,
						endDate: i,
						joinDate: c,
						subredditId: r.subredditId,
						membership: r,
						title: d + " " + r.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const Ua = Object(c.c)({
				subreddit: (e, {
					subscription: t
				}) => e.subreddits.models[t.membership.subredditId]
			});
			var Ha = Object(o.b)(Ua)(Fa),
				Wa = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				qa = n.n(Wa);
			const Ga = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var za = Object(o.b)(Ga)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: r
					} = e, o = Object.keys(r).map(e => (function(e) {
						if (!e.active) return null;
						const t = Object.keys(e.active).filter(e => "provisional_membership" !== e),
							n = e.active[t[0]];
						return n && Date.now() < n.endsAt ? {
							membership: n,
							settings: e.settings
						} : null
					})(r[e])).filter(e => !!e).sort((e, t) => e.membership.endsAt - t.membership.endsAt), i = !!o.length;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: qa.a.title
					}, s.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => a.a.createElement("div", {
						className: qa.a.loading,
						key: t
					})), i && o.map(e => a.a.createElement(Ha, {
						key: e.membership.subredditId,
						className: qa.a.membership,
						subscription: e
					})), !n && !i && a.a.createElement("div", {
						className: qa.a.empty
					}, s.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Va = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				Ja = n.n(Va);

			function Ya(e) {
				return a.a.createElement(ie.a, {
					className: e.className
				}, a.a.createElement(Zr, {
					className: Ja.a.header
				}), a.a.createElement(za, null))
			}
			var Qa = n("./src/reddit/components/TabNav/index.tsx"),
				Ka = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Za = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Xa = n("./src/reddit/selectors/experiments/utils.ts");
			const $a = Object(c.a)(e => Object(ar.c)(e, {
					experimentName: rr.hb,
					experimentEligibilitySelector: eo
				}), Xa.a),
				eo = e => Object(j.I)(e) || Object(j.J)(e),
				to = Object(c.a)($a, e => e === rr.kb.Enabled),
				no = Object(c.a)(e => Object(ar.c)(e, {
					experimentName: rr.ib,
					experimentEligibilitySelector: so
				}), Xa.a),
				so = e => Object(j.I)(e) || Object(j.J)(e),
				ro = Object(c.a)(no, e => e === rr.lb.Enabled);
			var ao = n("./src/reddit/selectors/platform.ts"),
				oo = n("./src/reddit/pages/Settings/index.m.less"),
				io = n.n(oo);

			function co() {
				return (co = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const lo = (e, t, n) => [{
					key: m.Qb.Account,
					title: s.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: m.Qb.Profile,
					title: s.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: m.Qb.Privacy,
					title: s.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: m.Qb.Feed,
					title: s.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: m.Qb.Notifications,
					title: s.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: m.Qb.Premium,
					title: s.fbt._("Subscriptions", null, {
						hk: "48xste"
					})
				}, {
					className: io.a.CreatorTab,
					key: m.Qb.Creator,
					title: s.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: io.a.PaymentsTab,
					key: m.Qb.Payments,
					title: s.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !n.length
				}, {
					className: io.a.SpecialMembershipTab,
					key: m.Qb.SpecialMembership,
					title: s.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: io.a.MessagingTab,
					key: m.Qb.Messaging,
					title: s.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				uo = Object(c.c)({
					savedPayments: cn.o,
					userIsWhitelistedCreator: cn.w,
					allowNavigationCallback: ao.a,
					isDynamicEmailSettingsEnabled: to,
					isDynamicPnSettingsEnabled: ro,
					isResponsiveSettingsEnabled: fs.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				mo = Object(le.t)(),
				po = Object(o.b)(uo, (e, t) => ({
					changeTab: t => e(Object(i.b)(`/settings/${t}`)),
					updatePrefs: t => e(Object(k.H)(t)),
					onPageViewed: () => e(Object(b.a)())
				})),
				ho = {
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
			class bo extends a.a.Component {
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
						ho.hasOwnProperty(t) && this.props.sendEvent(s => ({
							source: this.getSource(),
							action: "save",
							noun: ho[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== m.Qb.Account ? `settings_${e}` : "settings"
					}, this.getTrackingValue = (e, t, n = !1) => {
						const s = n ? this.props.prefs[e] : t;
						return "boolean" == typeof s ? ["emailUnsubscribe", "hideFromRobots"].includes(e) ? !0 === s ? "off" : "on" : !0 === s ? "on" : "off" : s
					}, this.renderForm = e => {
						const {
							isDynamicEmailSettingsEnabled: t,
							isDynamicPnSettingsEnabled: n,
							isResponsiveSettingsEnabled: s,
							prefs: r,
							location: o,
							userIsWhitelistedCreator: i,
							userHasSpecialMembership: c
						} = this.props, l = {
							isResponsiveSettingsEnabled: s,
							prefs: r,
							update: this.update
						};
						switch (e) {
							case m.Qb.Account:
								return a.a.createElement(_t, l);
							case m.Qb.Profile:
								return a.a.createElement(Yr, l);
							case m.Qb.Premium:
								return a.a.createElement(sr.b, l);
							case m.Qb.Notifications:
								return a.a.createElement(Ws, co({}, l, {
									isDynamicEmailSettingsEnabled: t,
									isDynamicPnSettingsEnabled: n
								}));
							case m.Qb.Privacy:
								return a.a.createElement(pr, l);
							case m.Qb.Messaging:
								return a.a.createElement(Xt, l);
							case m.Qb.Feed:
								return a.a.createElement(rs, l);
							case m.Qb.Payments:
								return a.a.createElement(nr, null);
							case m.Qb.Creator: {
								const e = Object(p.a)(o.search);
								return i ? a.a.createElement(yn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case m.Qb.SpecialMembership:
								return c ? a.a.createElement(Ya, null) : null;
							default:
								return a.a.createElement(_t, l)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Za.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === m.Qb.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === m.Qb.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = a.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return a.a.createElement(Qa.a, {
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
					Object(Ka.d)(Ka.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					h.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = m.Qb.Account
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
					Object(Ka.b)(Ka.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						match: e,
						isResponsiveSettingsEnabled: t,
						userIsWhitelistedCreator: n,
						userHasSpecialMembership: r,
						savedPayments: o
					} = this.props;
					return a.a.createElement("div", {
						className: Object(u.a)(io.a.Container, {
							[io.a["m-responsive"]]: t
						})
					}, a.a.createElement(Qa.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: t,
						title: s.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						icon: Qa.b.GEAR,
						onTouchMove: this.startScrolling
					}, lo(n, r, o).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(e.params.page))
				}
			}
			t.default = mo(po(Object(ms.c)(bo)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = (e, t) => `${s.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "q", (function() {
				return A
			})), n.d(t, "w", (function() {
				return M
			})), n.d(t, "s", (function() {
				return R
			})), n.d(t, "t", (function() {
				return B
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "l", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Gold/Powerups/index.ts"),
				l = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/gold/powerups.ts");
			const b = (e, t) => {
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
				f = (e, t) => {
					const n = b(e, t);
					return n && n.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const v = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
						const n = f(e, t),
							s = Date.now();
						return n && s < n ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				y = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === m.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[i.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				x = (e, t, n) => {
					if (!s.d.spBadges(e)) return [];
					const a = (e.users.appliedBadges[n] || {})[t] || [];
					return Object(r.a)(a.map(t => e.badges.models[t]).filter(Boolean))
				},
				_ = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function C(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(n) && n.userId === r) return n;
				const a = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					c = Object(o.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === c)
			}

			function E(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return r.data.collections[n];
					if (n === i.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return []
			}

			function k(e, t) {
				const n = E(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function S(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return []
			}

			function O(e, t) {
				return E(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const P = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: l.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var j;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(j || (j = {}));
			const N = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				I = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				T = (e, t) => {
					if (!t) return {};
					const n = N.prices;
					I(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = b(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				A = (e, t) => {
					const n = e.subreddits.gov.meta[t || ""],
						s = n && n.extra && n.extra.nomenclature || N;
					return {
						prices: T(e, t),
						member: s.member || N.member,
						memberPlural: s.memberPlural || N.memberPlural,
						memberAlt: s.memberAlt || N.memberAlt,
						memberAltPlural: s.memberAltPlural || N.memberAltPlural,
						membership: s.membership || N.membership,
						membershipAlt: s.membershipAlt || N.membershipAlt
					}
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				L = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				F = (e, t, n) => {
					const r = "replyToPost" !== n && Object(p.a)(e, {
						commentId: n
					});
					if (!!r && Object(a.a)(r)) return !0;
					if (t && Object(h.m)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const o = s.d.spGiphy(e),
						i = L(e, t);
					return o && i
				},
				U = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				H = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				a = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const s = n.subredditId,
							r = Object.keys(e.user.ownedBadges[s] || {}),
							a = e.badges.models,
							o = Date.now();
						let i = !1;
						return r.forEach(e => {
							const n = a[e];
							n && n.type === t && n.endsAt > o && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings.31ee1219943082919b48.js.map