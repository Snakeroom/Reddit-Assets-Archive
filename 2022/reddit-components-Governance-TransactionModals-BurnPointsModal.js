// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.ec2f9ed6f94260c9de2d.js
// Retrieved at 7/25/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-BurnPointsModal"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, r) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, t, r) {
					var o = {},
						a = {};
					a[t] = 0;
					var l, s, i, c, d, u, f, h = n.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (i in s = (l = h.pop()).value, c = l.cost, d = e[s] || {}) d.hasOwnProperty(i) && (u = c + d[i], f = a[i], (void 0 === a[i] || f > u) && (a[i] = u, h.push(i, u), o[i] = s));
					if (void 0 !== r && void 0 === a[r]) {
						var m = ["Could not find a path from ", t, " to ", r, "."].join("");
						throw new Error(m)
					}
					return o
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var r = [], n = t; n;) r.push(n), e[n], n = e[n];
					return r.reverse(), r
				},
				find_path: function(e, t, r) {
					var o = n.single_source_shortest_paths(e, t, r);
					return n.extract_shortest_path_from_predecessor_list(o, r)
				},
				PriorityQueue: {
					make: function(e) {
						var t, r = n.PriorityQueue,
							o = {};
						for (t in e = e || {}, r) r.hasOwnProperty(t) && (o[t] = r[t]);
						return o.queue = [], o.sorter = e.sorter || r.default_sorter, o
					},
					default_sorter: function(e, t) {
						return e.cost - t.cost
					},
					push: function(e, t) {
						var r = {
							value: e,
							cost: t
						};
						this.queue.push(r), this.queue.sort(this.sorter)
					},
					pop: function() {
						return this.queue.shift()
					},
					empty: function() {
						return 0 === this.queue.length
					}
				}
			};
			e.exports = n
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/can-promise.js"),
				o = r("./node_modules/qrcode/lib/core/qrcode.js"),
				a = r("./node_modules/qrcode/lib/renderer/canvas.js"),
				l = r("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, r, a, l) {
				var s = [].slice.call(arguments, 1),
					i = s.length,
					c = "function" == typeof s[i - 1];
				if (!c && !n()) throw new Error("Callback required as last argument");
				if (!c) {
					if (i < 1) throw new Error("Too few arguments provided");
					return 1 === i ? (r = t, t = a = void 0) : 2 !== i || t.getContext || (a = r, r = t, t = void 0), new Promise((function(n, l) {
						try {
							var s = o.create(r, a);
							n(e(s, t, a))
						} catch (i) {
							l(i)
						}
					}))
				}
				if (i < 2) throw new Error("Too few arguments provided");
				2 === i ? (l = r, r = t, t = a = void 0) : 3 === i && (t.getContext && void 0 === l ? (l = a, a = void 0) : (l = a, a = r, r = t, t = void 0));
				try {
					var d = o.create(r, a);
					l(null, e(d, t, a))
				} catch (u) {
					l(u)
				}
			}
			t.create = o.create, t.toCanvas = s.bind(null, a.render), t.toDataURL = s.bind(null, a.renderToDataURL), t.toString = s.bind(null, (function(e, t, r) {
				return l.render(e, r)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, r = n(e), o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), a = [r - 7], l = 1; l < t - 1; l++) a[l] = a[l - 1] - o;
				return a.push(6), a.reverse()
			}, t.getPositions = function(e) {
				for (var r = [], n = t.getRowColCoords(e), o = n.length, a = 0; a < o; a++)
					for (var l = 0; l < o; l++) 0 === a && 0 === l || 0 === a && l === o - 1 || a === o - 1 && 0 === l || r.push([n[a], n[l]]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function a(e) {
				this.mode = n.ALPHANUMERIC, this.data = e
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
					var r = 45 * o.indexOf(this.data[t]);
					r += o.indexOf(this.data[t + 1]), e.put(r, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(e, t) {
			function r() {
				this.buffer = [], this.length = 0
			}
			r.prototype = {
				get: function(e) {
					var t = Math.floor(e / 8);
					return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
				},
				put: function(e, t) {
					for (var r = 0; r < t; r++) this.putBit(1 == (e >>> t - r - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					var t = Math.floor(this.length / 8);
					this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function o(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e)
			}
			o.prototype.set = function(e, t, r, n) {
				var o = e * this.size + t;
				this.data[o] = r, n && (this.reservedBit[o] = !0)
			}, o.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, o.prototype.xor = function(e, t, r) {
				this.data[e * this.size + t] ^= r
			}, o.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/mode.js");

			function a(e) {
				this.mode = o.BYTE, this.data = n.from(e)
			}
			a.getBitsLength = function(e) {
				return 8 * e
			}, a.prototype.getLength = function() {
				return this.data.length
			}, a.prototype.getBitsLength = function() {
				return a.getBitsLength(this.data.length)
			}, a.prototype.write = function(e) {
				for (var t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				a = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case n.L:
						return o[4 * (e - 1) + 0];
					case n.M:
						return o[4 * (e - 1) + 1];
					case n.Q:
						return o[4 * (e - 1) + 2];
					case n.H:
						return o[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case n.L:
						return a[4 * (e - 1) + 0];
					case n.M:
						return a[4 * (e - 1) + 1];
					case n.Q:
						return a[4 * (e - 1) + 2];
					case n.H:
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
			}, t.from = function(e, r) {
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
				} catch (n) {
					return r
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = n(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/utils.js"),
				o = n.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var r = e.bit << 3 | t, a = r << 10; n.getBCHDigit(a) - o >= 0;) a ^= 1335 << n.getBCHDigit(a) - o;
				return 21522 ^ (r << 10 | a)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n.alloc(512),
				a = n.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) o[t] = e, a[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) o[t] = o[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return a[e]
			}, t.exp = function(e) {
				return o[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : o[a[e] + a[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/utils.js");

			function a(e) {
				this.mode = n.KANJI, this.data = e
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
					var r = o.toSJIS(this.data[t]);
					if (r >= 33088 && r <= 40956) r -= 33088;
					else {
						if (!(r >= 57408 && r <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						r -= 49472
					}
					r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13)
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
			var r = 3,
				n = 3,
				o = 40,
				a = 10;

			function l(e, r, n) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (r + n) % 2 == 0;
					case t.Patterns.PATTERN001:
						return r % 2 == 0;
					case t.Patterns.PATTERN010:
						return n % 3 == 0;
					case t.Patterns.PATTERN011:
						return (r + n) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return r * n % 2 + r * n % 3 == 0;
					case t.Patterns.PATTERN110:
						return (r * n % 2 + r * n % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (r * n % 3 + (r + n) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, n = 0, o = 0, a = 0, l = null, s = null, i = 0; i < t; i++) {
					o = a = 0, l = s = null;
					for (var c = 0; c < t; c++) {
						var d = e.get(i, c);
						d === l ? o++ : (o >= 5 && (n += r + (o - 5)), l = d, o = 1), (d = e.get(c, i)) === s ? a++ : (a >= 5 && (n += r + (a - 5)), s = d, a = 1)
					}
					o >= 5 && (n += r + (o - 5)), a >= 5 && (n += r + (a - 5))
				}
				return n
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, r = 0, o = 0; o < t - 1; o++)
					for (var a = 0; a < t - 1; a++) {
						var l = e.get(o, a) + e.get(o, a + 1) + e.get(o + 1, a) + e.get(o + 1, a + 1);
						4 !== l && 0 !== l || r++
					}
				return r * n
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, r = 0, n = 0, a = 0, l = 0; l < t; l++) {
					n = a = 0;
					for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(l, s), s >= 10 && (1488 === n || 93 === n) && r++, a = a << 1 & 2047 | e.get(s, l), s >= 10 && (1488 === a || 93 === a) && r++
				}
				return r * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
				return Math.abs(Math.ceil(100 * t / r / 5) - 10) * a
			}, t.applyMask = function(e, t) {
				for (var r = t.size, n = 0; n < r; n++)
					for (var o = 0; o < r; o++) t.isReserved(o, n) || t.xor(o, n, l(e, o, n))
			}, t.getBestMask = function(e, r) {
				for (var n = Object.keys(t.Patterns).length, o = 0, a = 1 / 0, l = 0; l < n; l++) {
					r(l), t.applyMask(l, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(l, e), s < a && (a = s, o = l)
				}
				return o
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/version-check.js"),
				o = r("./node_modules/qrcode/lib/core/regex.js");
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
				if (!n.isValid(t)) throw new Error("Invalid version: " + t);
				return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
			}, t.getBestModeForData = function(e) {
				return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
			}, t.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, t.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, t.from = function(e, r) {
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
				} catch (n) {
					return r
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js");

			function o(e) {
				this.mode = n.NUMERIC, this.data = e.toString()
			}
			o.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var t, r, n;
				for (t = 0; t + 3 <= this.data.length; t += 3) r = this.data.substr(t, 3), n = parseInt(r, 10), e.put(n, 10);
				var o = this.data.length - t;
				o > 0 && (r = this.data.substr(t), n = parseInt(r, 10), e.put(n, 3 * o + 1))
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var r = n.alloc(e.length + t.length - 1), a = 0; a < e.length; a++)
					for (var l = 0; l < t.length; l++) r[a + l] ^= o.mul(e[a], t[l]);
				return r
			}, t.mod = function(e, t) {
				for (var r = n.from(e); r.length - t.length >= 0;) {
					for (var a = r[0], l = 0; l < t.length; l++) r[l] ^= o.mul(t[l], a);
					for (var s = 0; s < r.length && 0 === r[s];) s++;
					r = r.slice(s)
				}
				return r
			}, t.generateECPolynomial = function(e) {
				for (var r = n.from([1]), a = 0; a < e; a++) r = t.mul(r, [1, o.exp(a)]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/utils.js"),
				a = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				l = r("./node_modules/qrcode/lib/core/bit-buffer.js"),
				s = r("./node_modules/qrcode/lib/core/bit-matrix.js"),
				i = r("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				c = r("./node_modules/qrcode/lib/core/finder-pattern.js"),
				d = r("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = r("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = r("./node_modules/qrcode/lib/core/version.js"),
				m = r("./node_modules/qrcode/lib/core/format-info.js"),
				p = r("./node_modules/qrcode/lib/core/mode.js"),
				v = r("./node_modules/qrcode/lib/core/segments.js"),
				g = r("./node_modules/qrcode/node_modules/isarray/index.js");

			function b(e, t, r) {
				var n, o, a = e.size,
					l = m.getEncodedBits(t, r);
				for (n = 0; n < 15; n++) o = 1 == (l >> n & 1), n < 6 ? e.set(n, 8, o, !0) : n < 8 ? e.set(n + 1, 8, o, !0) : e.set(a - 15 + n, 8, o, !0), n < 8 ? e.set(8, a - n - 1, o, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, o, !0) : e.set(8, 15 - n - 1, o, !0);
				e.set(a - 8, 8, 1, !0)
			}

			function E(e, t, r) {
				var a = new l;
				r.forEach((function(t) {
					a.put(t.mode.bit, 4), a.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(a)
				}));
				var s = 8 * (o.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (a.getLengthInBits() + 4 <= s && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
				for (var i = (s - a.getLengthInBits()) / 8, c = 0; c < i; c++) a.put(c % 2 ? 17 : 236, 8);
				return function(e, t, r) {
					for (var a = o.getSymbolTotalCodewords(t), l = u.getTotalCodewordsCount(t, r), s = a - l, i = u.getBlocksCount(t, r), c = i - a % i, d = Math.floor(a / i), h = Math.floor(s / i), m = h + 1, p = d - h, v = new f(p), g = 0, b = new Array(i), E = new Array(i), y = 0, w = n.from(e.buffer), _ = 0; _ < i; _++) {
						var x = _ < c ? h : m;
						b[_] = w.slice(g, g + x), E[_] = v.encode(b[_]), g += x, y = Math.max(y, x)
					}
					var M, j, C = n.alloc(a),
						N = 0;
					for (M = 0; M < y; M++)
						for (j = 0; j < i; j++) M < b[j].length && (C[N++] = b[j][M]);
					for (M = 0; M < p; M++)
						for (j = 0; j < i; j++) C[N++] = E[j][M];
					return C
				}(a, e, t)
			}

			function y(e, t, r, n) {
				var a;
				if (g(e)) a = v.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var l = t;
					if (!l) {
						var u = v.rawSplit(e);
						l = h.getBestVersionForData(u, r)
					}
					a = v.fromString(e, l || 40)
				}
				var f = h.getBestVersionForData(a, r);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else t = f;
				var m = E(t, r, a),
					p = o.getSymbolSize(t),
					y = new s(p);
				return function(e, t) {
						for (var r = e.size, n = c.getPositions(t), o = 0; o < n.length; o++)
							for (var a = n[o][0], l = n[o][1], s = -1; s <= 7; s++)
								if (!(a + s <= -1 || r <= a + s))
									for (var i = -1; i <= 7; i++) l + i <= -1 || r <= l + i || (s >= 0 && s <= 6 && (0 === i || 6 === i) || i >= 0 && i <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && i >= 2 && i <= 4 ? e.set(a + s, l + i, !0, !0) : e.set(a + s, l + i, !1, !0))
					}(y, t),
					function(e) {
						for (var t = e.size, r = 8; r < t - 8; r++) {
							var n = r % 2 == 0;
							e.set(r, 6, n, !0), e.set(6, r, n, !0)
						}
					}(y),
					function(e, t) {
						for (var r = i.getPositions(t), n = 0; n < r.length; n++)
							for (var o = r[n][0], a = r[n][1], l = -2; l <= 2; l++)
								for (var s = -2; s <= 2; s++) - 2 === l || 2 === l || -2 === s || 2 === s || 0 === l && 0 === s ? e.set(o + l, a + s, !0, !0) : e.set(o + l, a + s, !1, !0)
					}(y, t), b(y, r, 0), t >= 7 && function(e, t) {
						for (var r, n, o, a = e.size, l = h.getEncodedBits(t), s = 0; s < 18; s++) r = Math.floor(s / 3), n = s % 3 + a - 8 - 3, o = 1 == (l >> s & 1), e.set(r, n, o, !0), e.set(n, r, o, !0)
					}(y, t),
					function(e, t) {
						for (var r = e.size, n = -1, o = r - 1, a = 7, l = 0, s = r - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var i = 0; i < 2; i++)
									if (!e.isReserved(o, s - i)) {
										var c = !1;
										l < t.length && (c = 1 == (t[l] >>> a & 1)), e.set(o, s - i, c), -1 === --a && (l++, a = 7)
									} if ((o += n) < 0 || r <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(y, m), isNaN(n) && (n = d.getBestMask(y, b.bind(null, y, r))), d.applyMask(n, y), b(y, r, n), {
						modules: y,
						version: t,
						errorCorrectionLevel: r,
						maskPattern: n,
						segments: a
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var r, n, l = a.M;
				return void 0 !== t && (l = a.from(t.errorCorrectionLevel, a.M), r = h.from(t.version), n = d.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), y(e, r, l, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/polynomial.js"),
				a = r("./node_modules/buffer/index.js").Buffer;

			function l(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			l.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, l.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = n.alloc(this.degree),
					r = a.concat([e, t], e.length + this.degree),
					l = o.mod(r, this.genPoly),
					s = this.degree - l.length;
				if (s > 0) {
					var i = n.alloc(this.degree);
					return l.copy(i, s), i
				}
				return l
			}, e.exports = l
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + r + "$"),
				a = new RegExp("^[0-9]+$"),
				l = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return o.test(e)
			}, t.testNumeric = function(e) {
				return a.test(e)
			}, t.testAlphanumeric = function(e) {
				return l.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/numeric-data.js"),
				a = r("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				l = r("./node_modules/qrcode/lib/core/byte-data.js"),
				s = r("./node_modules/qrcode/lib/core/kanji-data.js"),
				i = r("./node_modules/qrcode/lib/core/regex.js"),
				c = r("./node_modules/qrcode/lib/core/utils.js"),
				d = r("./node_modules/dijkstrajs/dijkstra.js");

			function u(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function f(e, t, r) {
				for (var n, o = []; null !== (n = e.exec(r));) o.push({
					data: n[0],
					index: n.index,
					mode: t,
					length: n[0].length
				});
				return o
			}

			function h(e) {
				var t, r, o = f(i.NUMERIC, n.NUMERIC, e),
					a = f(i.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return c.isKanjiModeEnabled() ? (t = f(i.BYTE, n.BYTE, e), r = f(i.KANJI, n.KANJI, e)) : (t = f(i.BYTE_KANJI, n.BYTE, e), r = []), o.concat(a, t, r).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function m(e, t) {
				switch (t) {
					case n.NUMERIC:
						return o.getBitsLength(e);
					case n.ALPHANUMERIC:
						return a.getBitsLength(e);
					case n.KANJI:
						return s.getBitsLength(e);
					case n.BYTE:
						return l.getBitsLength(e)
				}
			}

			function p(e, t) {
				var r, i = n.getBestModeForData(e);
				if ((r = n.from(t, i)) !== n.BYTE && r.bit < i.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(i));
				switch (r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r) {
					case n.NUMERIC:
						return new o(e);
					case n.ALPHANUMERIC:
						return new a(e);
					case n.KANJI:
						return new s(e);
					case n.BYTE:
						return new l(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(p(t, null)) : t.data && e.push(p(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, r) {
				for (var o = function(e, t) {
						for (var r = {}, o = {
								start: {}
							}, a = ["start"], l = 0; l < e.length; l++) {
							for (var s = e[l], i = [], c = 0; c < s.length; c++) {
								var d = s[c],
									u = "" + l + c;
								i.push(u), r[u] = {
									node: d,
									lastCount: 0
								}, o[u] = {};
								for (var f = 0; f < a.length; f++) {
									var h = a[f];
									r[h] && r[h].node.mode === d.mode ? (o[h][u] = m(r[h].lastCount + d.length, d.mode) - m(r[h].lastCount, d.mode), r[h].lastCount += d.length) : (r[h] && (r[h].lastCount = d.length), o[h][u] = m(d.length, d.mode) + 4 + n.getCharCountIndicator(d.mode, t))
								}
							}
							a = i
						}
						for (f = 0; f < a.length; f++) o[a[f]].end = 0;
						return {
							map: o,
							table: r
						}
					}(function(e) {
						for (var t = [], r = 0; r < e.length; r++) {
							var o = e[r];
							switch (o.mode) {
								case n.NUMERIC:
									t.push([o, {
										data: o.data,
										mode: n.ALPHANUMERIC,
										length: o.length
									}, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.ALPHANUMERIC:
									t.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: o.length
									}]);
									break;
								case n.KANJI:
									t.push([o, {
										data: o.data,
										mode: n.BYTE,
										length: u(o.data)
									}]);
									break;
								case n.BYTE:
									t.push([{
										data: o.data,
										mode: n.BYTE,
										length: u(o.data)
									}])
							}
						}
						return t
					}(h(e, c.isKanjiModeEnabled())), r), a = d.find_path(o.map, "start", "end"), l = [], s = 1; s < a.length - 1; s++) l.push(o.table[a[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(l))
			}, t.rawSplit = function(e) {
				return t.fromArray(h(e, c.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, t) {
			var r, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return n[e]
			}, t.getBCHDigit = function(e) {
				for (var t = 0; 0 !== e;) t++, e >>>= 1;
				return t
			}, t.setToSJISFunction = function(e) {
				if ("function" != typeof e) throw new Error('"toSJISFunc" is not a valid function.');
				r = e
			}, t.isKanjiModeEnabled = function() {
				return void 0 !== r
			}, t.toSJIS = function(e) {
				return r(e)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(e, t) {
			t.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/utils.js"),
				o = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				a = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				l = r("./node_modules/qrcode/lib/core/mode.js"),
				s = r("./node_modules/qrcode/lib/core/version-check.js"),
				i = r("./node_modules/qrcode/node_modules/isarray/index.js"),
				c = n.getBCHDigit(7973);

			function d(e, t) {
				return l.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var r = 0;
				return e.forEach((function(e) {
					var n = d(e.mode, t);
					r += n + e.getBitsLength()
				})), r
			}
			t.from = function(e, t) {
				return s.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, r) {
				if (!s.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === r && (r = l.BYTE);
				var a = 8 * (n.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (r === l.MIXED) return a;
				var i = a - d(r, e);
				switch (r) {
					case l.NUMERIC:
						return Math.floor(i / 10 * 3);
					case l.ALPHANUMERIC:
						return Math.floor(i / 11 * 2);
					case l.KANJI:
						return Math.floor(i / 13);
					case l.BYTE:
					default:
						return Math.floor(i / 8)
				}
			}, t.getBestVersionForData = function(e, r) {
				var n, o = a.from(r, a.M);
				if (i(e)) {
					if (e.length > 1) return function(e, r) {
						for (var n = 1; n <= 40; n++) {
							if (u(e, n) <= t.getCapacity(n, r, l.MIXED)) return n
						}
					}(e, o);
					if (0 === e.length) return 1;
					n = e[0]
				} else n = e;
				return function(e, r, n) {
					for (var o = 1; o <= 40; o++)
						if (r <= t.getCapacity(o, n, e)) return o
				}(n.mode, n.getLength(), o)
			}, t.getEncodedBits = function(e) {
				if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; n.getBCHDigit(t) - c >= 0;) t ^= 7973 << n.getBCHDigit(t) - c;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, r) {
				var o = r,
					a = t;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (a = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = n.getOptions(o);
				var l = n.getImageWidth(e.modules.size, o),
					s = a.getContext("2d"),
					i = s.createImageData(l, l);
				return n.qrToImageData(i.data, e, o),
					function(e, t, r) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
					}(s, a, l), s.putImageData(i, 0, 0), a
			}, t.renderToDataURL = function(e, r, n) {
				var o = n;
				void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
				var a = t.render(e, r, o),
					l = o.type || "image/png",
					s = o.rendererOpts || {};
				return a.toDataURL(l, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, t) {
				var r = e.a / 255,
					n = t + '="' + e.hex + '"';
				return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n
			}

			function a(e, t, r) {
				var n = e + t;
				return void 0 !== r && (n += " " + r), n
			}
			t.render = function(e, t, r) {
				var l = n.getOptions(t),
					s = e.modules.size,
					i = e.modules.data,
					c = s + 2 * l.margin,
					d = l.color.light.a ? "<path " + o(l.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
					u = "<path " + o(l.color.dark, "stroke") + ' d="' + function(e, t, r) {
						for (var n = "", o = 0, l = !1, s = 0, i = 0; i < e.length; i++) {
							var c = Math.floor(i % t),
								d = Math.floor(i / t);
							c || l || (l = !0), e[i] ? (s++, i > 0 && c > 0 && e[i - 1] || (n += l ? a("M", c + r, .5 + d + r) : a("m", o, 0), o = 0, l = !1), c + 1 < t && e[i + 1] || (n += a("h", s), s = 0)) : o++
						}
						return n
					}(i, s, l.margin) + '"/>',
					f = 'viewBox="0 0 ' + c + " " + c + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + d + u + "</svg>\n";
				return "function" == typeof r && r(null, h), h
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(e, t) {
			function r(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				var t = e.slice().replace("#", "").split("");
				if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
					return [e, e]
				})))), 6 === t.length && t.push("F", "F");
				var r = parseInt(t.join(""), 16);
				return {
					r: r >> 24 & 255,
					g: r >> 16 & 255,
					b: r >> 8 & 255,
					a: 255 & r,
					hex: "#" + t.slice(0, 6).join("")
				}
			}
			t.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					n = e.width && e.width >= 21 ? e.width : void 0,
					o = e.scale || 4;
				return {
					width: n,
					scale: n ? 4 : o,
					margin: t,
					color: {
						dark: r(e.color.dark || "#000000ff"),
						light: r(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, t.getScale = function(e, t) {
				return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
			}, t.getImageWidth = function(e, r) {
				var n = t.getScale(e, r);
				return Math.floor((e + 2 * r.margin) * n)
			}, t.qrToImageData = function(e, r, n) {
				for (var o = r.modules.size, a = r.modules.data, l = t.getScale(o, n), s = Math.floor((o + 2 * n.margin) * l), i = n.margin * l, c = [n.color.light, n.color.dark], d = 0; d < s; d++)
					for (var u = 0; u < s; u++) {
						var f = 4 * (d * s + u),
							h = n.color.light;
						if (d >= i && u >= i && d < s - i && u < s - i) h = c[a[Math.floor((d - i) / l) * o + Math.floor((u - i) / l)] ? 1 : 0];
						e[f++] = h.r, e[f++] = h.g, e[f++] = h.b, e[f] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/qrcode/node_modules/isarray/index.js");
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
			var o = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function a(e, t, r) {
				return a.TYPED_ARRAY_SUPPORT || this instanceof a ? "number" == typeof e ? i(this, e) : function(e, t, r, n) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) {
						if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
						a.TYPED_ARRAY_SUPPORT ? o.__proto__ = a.prototype : o = c(e, o);
						return o
					}(e, t, r, n);
					if ("string" == typeof t) return function(e, t) {
						var r = 0 | u(t),
							n = s(e, r),
							o = n.write(t);
						o !== r && (n = n.slice(0, o));
						return n
					}(e, t);
					return function(e, t) {
						if (a.isBuffer(t)) {
							var r = 0 | l(t.length),
								n = s(e, r);
							return 0 === n.length ? n : (t.copy(n, 0, 0, r), n)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? s(e, 0) : c(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return c(e, t.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, r) : new a(e, t, r)
			}

			function l(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var r;
				return a.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = a.prototype : (null === (r = e) && (r = new a(t)), r.length = t), r
			}

			function i(e, t) {
				var r = s(e, t < 0 ? 0 : 0 | l(t));
				if (!a.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) r[n] = 0;
				return r
			}

			function c(e, t) {
				for (var r = t.length < 0 ? 0 : 0 | l(t.length), n = s(e, r), o = 0; o < r; o += 1) n[o] = 255 & t[o];
				return n
			}

			function d(e, t) {
				var r;
				t = t || 1 / 0;
				for (var n = e.length, o = null, a = [], l = 0; l < n; ++l) {
					if ((r = e.charCodeAt(l)) > 55295 && r < 57344) {
						if (!o) {
							if (r > 56319) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							if (l + 1 === n) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							o = r;
							continue
						}
						if (r < 56320) {
							(t -= 3) > -1 && a.push(239, 191, 189), o = r;
							continue
						}
						r = 65536 + (o - 55296 << 10 | r - 56320)
					} else o && (t -= 3) > -1 && a.push(239, 191, 189);
					if (o = null, r < 128) {
						if ((t -= 1) < 0) break;
						a.push(r)
					} else if (r < 2048) {
						if ((t -= 2) < 0) break;
						a.push(r >> 6 | 192, 63 & r | 128)
					} else if (r < 65536) {
						if ((t -= 3) < 0) break;
						a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
					} else {
						if (!(r < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
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
			})), a.prototype.write = function(e, t, r) {
				void 0 === t ? (r = this.length, t = 0) : void 0 === r && "string" == typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0);
				var n = this.length - t;
				if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, r, n) {
					return function(e, t, r, n) {
						for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
						return o
					}(d(t, e.length - r), e, r, n)
				}(this, e, t, r)
			}, a.prototype.slice = function(e, t) {
				var r, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = a.prototype;
				else {
					var o = t - e;
					r = new a(o, void 0);
					for (var l = 0; l < o; ++l) r[l] = this[l + e]
				}
				return r
			}, a.prototype.copy = function(e, t, r, n) {
				if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
				var o, l = n - r;
				if (this === e && r < t && t < n)
					for (o = l - 1; o >= 0; --o) e[o + t] = this[o + r];
				else if (l < 1e3 || !a.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < l; ++o) e[o + t] = this[o + r];
				else Uint8Array.prototype.set.call(e, this.subarray(r, r + l), t);
				return l
			}, a.prototype.fill = function(e, t, r) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, r = this.length) : "string" == typeof r && (r = this.length), 1 === e.length) {
						var n = e.charCodeAt(0);
						n < 256 && (e = n)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
				if (r <= t) return this;
				var o;
				if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
					for (o = t; o < r; ++o) this[o] = e;
				else {
					var l = a.isBuffer(e) ? e : new a(e),
						s = l.length;
					for (o = 0; o < r - t; ++o) this[o + t] = l[o % s]
				}
				return this
			}, a.concat = function(e, t) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var r;
				if (void 0 === t)
					for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
				var o = i(null, t),
					l = 0;
				for (r = 0; r < e.length; ++r) {
					var c = e[r];
					if (!a.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
					c.copy(o, l), l += c.length
				}
				return o
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
			var r = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == r.call(e)
			}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (o, a, l) => new Promise((s, i) => {
					const c = Date.now() + n,
						d = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > c) return d();
							const n = Date.now();
							await e(o, a, l);
							const f = await t(a);
							if (f) s();
							else if (!1 === f) i();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < c ? setTimeout(u, r) : d()
							}
						};
					u()
				})
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				c = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = r.n(c);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: r
				} = t;
				return {
					onClose: () => {
						e(Object(s.f)()), r && r()
					}
				}
			})((function(e) {
				return o.a.createElement(i.a, {
					className: Object(l.a)(d.a.closeIcon, e.className),
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
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				s = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = r.n(s);

			function c(e) {
				return o.a.createElement("div", {
					className: Object(a.a)(i.a.container, e.className, {
						[i.a.coloredContainer]: e.colored
					})
				}, o.a.createElement("div", {
					className: i.a.title
				}, e.children), o.a.createElement(l.a, {
					className: i.a.closeIcon
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
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				s = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/selectors/crypto/points.ts"),
				d = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(d);
			const f = Object(l.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(c.b)(e, r)
				}
			});
			t.a = Object(a.b)(f)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					a = `${s.a.assetPath}/${n}`;
				if (e.grey && a.endsWith(".svg")) {
					const t = `url(${a}) center/cover`;
					return o.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
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
				a = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/components/Governance/Token/index.tsx"),
				d = r("./src/reddit/helpers/governance/tokens.ts"),
				u = r("./src/reddit/selectors/crypto/points.ts"),
				f = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				h = r.n(f);
			const m = Object(l.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(u.b)(e, r)
				}
			});
			t.a = Object(a.b)(m)((function(e) {
				var t;
				return o.a.createElement("div", {
					className: Object(s.a)(h.a.container, e.className, {
						[h.a.small]: e.small
					})
				}, o.a.createElement(c.a, {
					className: Object(s.a)(h.a.token, {
						[h.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(d.c)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				overview: "_2my8YJMn6fLwdXQPvFzOC_",
				amount: "_2uJHGxFIl306f82z4CUElv",
				memo: "QK8D8Vn2Zi45kckvHp1UF",
				error: "lHTeQCCGAXimtIjNkn3Kb"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./src/reddit/selectors/activeModal.ts"),
				i = r("./src/reddit/selectors/crypto/points.ts"),
				c = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx");
			const f = () => o.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M42.4 19.1H20.8v19.4h21.6V19.1z",
					fill: "#008985"
				}), o.a.createElement("path", {
					d: "M42.5 38.6l-.3-5.7A694 694 0 0142 19l.5.5-21.6.2.7-.7v19.4l-.7-.5c4.8 0 8.7.1 12.2.3l9.6.5c-6.6 0-14.2 0-21.8.2a.4.4 0 01-.4-.5l-.2-19.4a.6.6 0 01.6-.6h4a2236.4 2236.4 0 0118.1.1.7.7 0 01.2.5 463.6 463.6 0 01-.6 19.5z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M11.4 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), o.a.createElement("path", {
					d: "M11.5 45a678.4 678.4 0 01-.6-19.6l.1-.2a1014.3 1014.3 0 0110-6.6.7.7 0 01.6.7v6.3l-.2 13.1a.5.5 0 01-.3.4 151 151 0 01-9.6 5.8l4.4-3.1 4.8-3.4-.2.3-.2-19.5 1 .6-2.6 1.7-7 4.8.4-.6a269.3 269.3 0 01-.6 19.3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M32.8 25.7H11.3v19.4h21.5V25.8z",
					fill: "#14D8C3"
				}), o.a.createElement("path", {
					d: "M33 45.2c-.2 0-.2-2.2-.4-5.7l-.3-13.8.5.5-21.5.2.6-.7v19.4l-.6-.5a404.7 404.7 0 0121.8.8c-6.7 0-14.2 0-21.8.2a.4.4 0 01-.5-.4l-.2-19.5a.6.6 0 01.6-.6h4.1a2320.2 2320.2 0 0118 .1.7.7 0 01.2.5 463.3 463.3 0 01-.6 19.5z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M32.8 45.2l9.5-6.5V19.2l-9.5 6.5v19.5z",
					fill: "#008985"
				}), o.a.createElement("path", {
					d: "M33 45c-.2.2-.2-1.9-.4-5.3l-.2-6.3a403.8 403.8 0 01-.1-8l.2-.2a1015.7 1015.7 0 019.8-6.6.7.7 0 01.7.6v6.4c0 5.4 0 9.6-.2 13.1a.5.5 0 01-.2.4 150.8 150.8 0 01-9.6 5.8l4.4-3.1 4.7-3.4-.1.3-.3-19.4 1 .5-2.5 1.7-7 4.8.3-.6a331.3 331.3 0 01-.2 13.7l-.4 5.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M23.4 44.8H20V26.6h3.4v18.2zM39.2 40.3l-2.5 1.6.1-18 2.6-1.5-.2 17.9z",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l6-10.8L28.9 3l-6 10.8z",
					fill: "#85FFED"
				}), o.a.createElement("path", {
					d: "M22.8 13.8l1.5-3.3 4-7.9.7.7L8.3 13.7l.3-.2L5 19.8l-2.5 4.4-.9-.8c10-4.8 15.8-7.4 21.3-9.5A1713.8 1713.8 0 001.8 24.4a.5.5 0 01-.4-.5v-.2l6-10.9.3-.2 3.1-1.6 17.7-8.7a.7.7 0 01.9.9 290.4 290.4 0 01-6.6 10.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M22.7 13.7L2 23.9l2.8 5.7 20.9-10.2-2.9-5.7z",
					fill: "#14D8C3"
				}), o.a.createElement("path", {
					d: "M25.6 19.4l-.9-1.6-2.2-4h.3c-5 2.7-13 6.7-20.7 10.5l.2-.6L5 29.2l.1.2-.6-.1a570.5 570.5 0 0121.2-9.8l-10.3 5.1L5 30a.4.4 0 01-.5-.2l-2.9-5.7a.4.4 0 01.2-.5l2.6-1.3a1223.8 1223.8 0 0118.7-9l.1.2a106.7 106.7 0 012.5 6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M25.6 19.4l6-10.7-2.8-5.8-6 10.8 2.8 5.7z",
					fill: "#008985"
				}), o.a.createElement("path", {
					d: "M25.6 19.3l-.9-1.4-2.2-4.1a.3.3 0 010-.3 517.7 517.7 0 016.2-11 .5.5 0 01.5.2L31 6.2 32 8.5a.4.4 0 010 .4 166.8 166.8 0 01-6.4 10.3l2.8-5.3 3-5.4v.3l-3-5.7h.8l-1 1.7-5 9v-.3a45 45 0 011.7 4l.7 1.8z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M17.5 11L19 8.3l-3 1.5-1.5 2.6L7 16.1l-1.4 2.7 7.2-3.6-2 3.6 3.6-1.8 1.5-3.3 8.5-4 1.4-2.6-8.3 3.8zM14.2 18.5l2.2 5-3 1.4-2.3-5 3-1.4zM26.8 7.8l2.4 4.3-1.1 2.2-2.5-4.5 1.2-2zM31 18.2c-1.5 2-2.8 3.8-3.2 6.6h-2.6c-.7-2-1.4-5-.5-7.5",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M24.6 17.3v2.3a22.3 22.3 0 001.1 5.1l-.5-.3h2.5l-.4.4v-.5l.8-2.3a10 10 0 013-3.7l-2 3a11 11 0 00-1 3.6v.3h-.3l-2.3.1H24.9V25l-.9-3c-.1-.9-.2-1.8-.1-2.6 0-.6.1-1.1.3-1.6l.4-.6z",
					fill: "#FEB331"
				}), o.a.createElement("path", {
					d: "M28.4 21.5l-1.7-1-2 .4a.7.7 0 01-1-.8l.6-2-1.1-1.8a.7.7 0 01.5-1.1l2.1-.2 1.3-1.6a.7.7 0 011.3.2l.8 2 1.9.7a.7.7 0 01.2 1.2L29.7 19l-.2 2a.7.7 0 01-1 .6z",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M28.4 21.7h.3a.7.7 0 00.5-.4c.1 0 .2-.2.1-.3v-.7V18.7h.2l.9-1 .5-.4v-.1h.1V17a.2.2 0 000-.1H30.6l-.3-.2-1.5-.6h-.2l-.1-.3-.6-1.3-.2-.6h-.1l-.5.5-.9 1-.2.3H26l-2.1.2c0 .2 0 .3.2.4l.8 1.4.1.3v.2l-.5 1.6-.1.4v.1a.3.3 0 00.1.2h1.1l1.2-.2 1.6 1.5c-.5-.3-1-.7-1.8-1h.3l-1.3.3-.7.2h-.5a1 1 0 01-.8-.6 1 1 0 010-.6v-.7L24 18v.3l-.8-1.2-.2-.3-.1-.2-.1-.2a1.2 1.2 0 011-1.7l.7-.1 1.4-.2-.4.2.7-.8.3-.4.1-.2.1-.1.1-.1c.2-.3.5-.4.8-.4a1.4 1.4 0 011.4.7l.1.1v.1l.1.2.7 1.6-.4-.4 1.5.6.4.2.2.1.3.2a1.4 1.4 0 010 2l-.1.1-.1.1-.6.4-.9.8.2-.4a37.1 37.1 0 01-.3 2c0 .4-.2.6-.4.8a1 1 0 01-.6.2h-.4l-.2-.3z",
					fill: "#F80"
				}), o.a.createElement("path", {
					d: "M43.6 11.9c-5.4 2-8 10.7-8 10.7s-2.1.6-3.2 1.5a58 58 0 014-16.3",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M36.3 7.7c.1.1-.6 2.1-1.4 5.2a65.3 65.3 0 00-2 11.3l-.8-.4 1.7-1 1.6-.7-.3.3v-.2a26.1 26.1 0 014-7.2c1.5-1.6 3-2.6 4.6-3a8 8 0 00-2.7 1.8 23 23 0 00-5 8.8l-.2.2h-.1a16.1 16.1 0 00-3 1.6l-.8.7.1-1 .2-1.5a55 55 0 012.3-10.9c1-2.6 1.6-4 1.8-4z",
					fill: "#FEB331"
				}), o.a.createElement("path", {
					d: "M41.3 22C36.8 21.2 33 25 33 25h-3.3c1-2.9 5.4-7.7 10.8-8.6",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M40.3 16.2l-.3.2-.3.1-.3.1-.2.1-.7.3-.7.3-.7.4-.4.2-.5.3-.4.2-.4.4-.9.6-.4.4-.5.4-.4.4-.2.2-.2.2-.4.5-.4.4-.4.5-.4.5c-.5.7-.9 1.4-1.2 2.2l-.4-.7h3.3l-.3.2a11.1 11.1 0 012.6-1.8l2.4-.8c1.4-.3 2.7-.2 3.7.2-1.5-.2-3 0-4.3.5a12 12 0 00-3.9 2.4v.1h-3.5l-.6.1.2-.5c.3-.8.6-1.5 1-2.1.6-.7 1-1.4 1.7-2l.4-.5.5-.4.8-.8c1-.8 2.2-1.5 3.4-2l.3-.2.4-.1.6-.2 1.1-.3h1z",
					fill: "#FEB331"
				}), o.a.createElement("path", {
					d: "M37.2 12.7l-.4-2.4-2-1.4a.8.8 0 01.1-1.4L37 6.4l.7-2.3a.8.8 0 011.4-.4l1.7 1.7h2.4a.8.8 0 01.8 1.1l-1 2.2.8 2.3a.8.8 0 01-1 1l-2.3-.3-2 1.5a.8.8 0 01-1.3-.5z",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M37 12.7l.3.2a.8.8 0 00.7.3c.2 0 .3 0 .4-.2l.6-.4 1.2-1.2H42l.7.2H43a.3.3 0 00.2-.2V11l-.2-.4-.6-1.7-.1-.2.1-.3.7-1.4.3-.8a.2.2 0 000-.2h-2.8l-.2-.1-1.8-1.7h-.2l-.2.6-.6 1.8v.2l-.3.1-1.7.9-.4.1H35V8a.4.4 0 00-.2.4l.1.2h.1l.2.2.6.5 1 .9v2.5c0-.7-.2-1.5-.4-2.4l.1.2-1.3-.8-.6-.5a1.2 1.2 0 01-.6-1 1.2 1.2 0 01.5-1h.2L35 7l.4-.2 1.4-.8-.2.3.5-1.7v-.4l.1-.2v-.1l.1-.2a1.4 1.4 0 012.1-.4h.1l.6.6 1.2 1-.5-.1h1.3l.6-.1h.6c.4 0 .7.1 1 .3a1.5 1.5 0 01.4 1.7v.1h-.1V7l-.2.2-.8 1.8v-.5l.6 1.7.2.4v.5c.1 0 0 .2 0 .2a1.5 1.5 0 01-.7 1.3l-.7.2h-.5l-.7-.2-1.4-.2.5-.2c-.6.4-1 .8-1.5 1l-.3.3H39l-.2.2c-.2.1-.6.2-.9.1l-.6-.3a1 1 0 01-.2-.4c-.1-.3 0-.4 0-.4z",
					fill: "#F80"
				}), o.a.createElement("path", {
					d: "M41.5 21.8l-1-1h-1.6a.5.5 0 01-.4-.8l.7-1.3-.5-1.5a.5.5 0 01.6-.6l1.5.2 1.2-.9a.5.5 0 01.8.4l.3 1.5 1.2.8a.5.5 0 01-.1 1l-1.4.6-.4 1.4a.5.5 0 01-.9.2z",
					fill: "#FFF3AF"
				}), o.a.createElement("path", {
					d: "M41.4 22h.3a.5.5 0 00.4-.2v-.2a17.2 17.2 0 01.4-1.5V20l.2-.1.8-.5.4-.3-.3-.2-1-.7h-.1v-.4l-.2-1-.1-.4a.2.2 0 00.2 0l-.4.3-.8.6-.3.2h-.2l-.8-.2h-.7v-.1l.1-.1.1.2.3 1.2.1.2v.2l-.7 1-.2.3v.1h.2l.5.1.9.2.8 1.4-1-1h.2-1.9a.9.9 0 01-.5-1v-.2l.1-.2.2-.2.4-1v.4l-.4-1v-.3l-.1-.1v-.2a1 1 0 011-1.2h.6l1 .2h-.5l.7-.4.3-.2.1-.1.1-.1c.3-.2.6-.3.8-.2a1.2 1.2 0 011 .9v.1h.1v.2l.2 1.3-.3-.5 1 .7.2.1.2.2a1.3 1.3 0 01.3.8 1.2 1.2 0 01-.6 1.1l-.2.1-.4.2-.8.4.3-.4-.4 1v.2l-.2.2a1 1 0 01-.5.5h-.8l-.1-.4z",
					fill: "#F80"
				})),
				h = () => o.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M18 32.3c-6.4 1-10.7-1.1-13.2-3.5a11.4 11.4 0 01-3-9.5c.4-3.4 1.9-6.6 3.3-9.7l3.1 4.1c3-4 4.8-6.6 5-12.2 4.4 2 8 6.3 9.2 10.5l1.3-3.4c1.5 2.2 3 4.5 4 7a13 13 0 011 7.9c-1.2 4.6-5.9 9.4-10.8 9",
					fill: "#FF8717"
				}), o.a.createElement("path", {
					d: "M17.8 32.7l.7-.1a9 9 0 004.3-1.6 13 13 0 005-6.4c.6-1.6.8-3.3.5-5a17 17 0 00-1.8-5.4c-1-1.8-2.1-3.5-3.3-5.3l1-.1-1.2 3.4-.7 1.9-.5-2a16.5 16.5 0 00-8.8-10l1-.6-.4 3.3a15.8 15.8 0 01-2.5 6l-1.7 2.5-.6.8-.6.8-.5-.8-3.2-4 1.1-.2-2.2 5.4c-.6 1.7-1 3.4-1 5.1-.2 1.5 0 3 .5 4.5A9.2 9.2 0 005 28.5a13.5 13.5 0 006.4 3.6 17.8 17.8 0 006.6.5 20 20 0 01-4.1.3A15.4 15.4 0 015.8 30L4 28.5c-.5-.5-1-1.2-1.3-1.8-.8-1.4-1.2-2.9-1.3-4.4-.2-1.5-.1-3 .2-4.5.3-1.5.7-3 1.2-4.3l1.7-4 .3-.8.5.6 3.3 4.1h-.9c1.4-2 2.8-3.9 3.6-5.9l.9-3 .3-3v-1l.9.4 2.8 1.6 1.2 1 1 1a18 18 0 014.5 7.4l-1.3-.1L23 8.3l.5-1.2.8 1c1.3 2 2.5 4 3.5 6s1.6 4 1.7 6a11.6 11.6 0 01-3.6 9.4 12.2 12.2 0 01-4.5 3 8.3 8.3 0 01-3 .3l-.6-.1z",
					fill: "#FF4500"
				}), o.a.createElement("path", {
					d: "M14 31.5c-2.8-.3-5.7-2.2-6.4-5-.7-3 1.3-5.9 3.2-8.4l5-6.3c1 2.3 2.7 4.3 4.5 6.1 1.8 1.7 3.6 3.3 4.4 5.7 2.1 6.7-5.7 8.5-10.7 8z",
					fill: "#FFF1B6"
				}), o.a.createElement("path", {
					d: "M14 31.7c0-.2 1-.1 2.8-.4a18.5 18.5 0 003-.6l1.7-.8c.6-.3 1.1-.6 1.6-1.1.4-.5.8-1 1-1.7.2-.7.3-1.4.1-2v-.6l-.2-.6-.5-1c-.4-.8-.9-1.4-1.4-2l-2-2-2-2C17 15.7 15.8 14 15 12.3l1.6.2-2 2.5-2.5 3.2-2.1 2.8c-.6.8-1 1.7-1.4 2.6a5.3 5.3 0 00.3 4.7l1.4 1.7c1.1 1 2.4 1.6 3.7 2A9.4 9.4 0 019.5 30c-.5-.3-.9-.7-1.2-1.2-.4-.4-.7-1-1-1.5v-.4l-.1-.3v-.2L7 26v-2.3l.6-1.6c1-2.2 2.4-4 3.7-5.7l3.7-5 .8-1.1.6 1.2c.4.9.8 1.7 1.4 2.4a21.9 21.9 0 003.4 3.7l2 2a12 12 0 011.5 2.1l.4.6.2.7.2.6.2.6c.2.9.2 1.8 0 2.6-.1.9-.5 1.6-1 2.3-.4.6-1 1.1-1.6 1.5l-1.8.9a13 13 0 01-5.5.7c-1.3 0-2-.3-2-.5z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M45.5 29.1l-3-4.7c-.6-1-1.8-1.8-3.2-2l-6.1-.9c-1.5-.2-3 .2-4.2 1l-5.8 3.4a6.3 6.3 0 00-2.7 3.3l-2 5.8c-.4 1.3-.3 2.7.4 3.7l3 4.8c.6 1 1.8 1.7 3.2 2l6.1.8c1.5.2 3-.1 4.2-.9l5.8-3.5a6.3 6.3 0 002.7-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.7 6.7a10 10 0 00-7.9 4.7c-.5 1-2 .7-1.8-.2a6 6 0 00-4-6.5c-1-.3-.5-1.7.5-1.7a10 10 0 007.9-4.8c.5-.9 2-.7 1.8.3a6 6 0 004 6.4c1 .4.5 1.7-.5 1.8z",
					fill: "#383838"
				}), o.a.createElement("path", {
					d: "M38.8 36l.1-.2.2-.1.3-.2.3-.6v-.4l-.4-.3h-.1c-.5-.1-1-.4-1.5-.7a6.2 6.2 0 01-2.6-3.4 7 7 0 01-.3-2.6v.2-.2-.1h-.3a.6.6 0 00-.5.2l-.1.1a10.4 10.4 0 01-8.3 5.1l.4-.2-.3.1-.3.1-.1.2v.1l.3.3-.3-.2a6.5 6.5 0 014.4 7.2V40 40.4l.2.1h.3l.3-.2v-.1a9.4 9.4 0 016.3-4l.5-.1H38.9 37.7a9.2 9.2 0 00-3.1 1.2c-1.4.8-2.5 2-3.3 3.4a1.6 1.6 0 01-1.5.8c-.3 0-.6-.2-.8-.4l-.2-.2v-.2l-.1-.3v-.2a6 6 0 00-.2-2c-.1-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.8-2.2l-.3-.2.2.3-.2-.2-.2-.1-.2-.3-.2-.2.1-1.1c.1-.3.4-.6.6-.7.3-.2.6-.3 1-.3h-.4.3a9 9 0 003.7-1.1 10.6 10.6 0 002.7-2.1l.9-1.3v-.1c.2-.2.4-.5.7-.6.3-.2.7-.2 1-.2.4 0 .8.2 1 .5l.2.2.2.3a1.8 1.8 0 010 .6v-.2.2c0 .7 0 1.5.2 2.2a5.9 5.9 0 003.4 3.7l.2.2-.3-.2c.3 0 .6.3.7.6.1.3.1.6 0 .8a1.4 1.4 0 01-1 1h-.4z",
					fill: "#231F20"
				}), o.a.createElement("path", {
					d: "M45.4 29.2l.2.2.4.8a4.1 4.1 0 01.1 2.4c0 .4-.2.7-.3 1a426.4 426.4 0 01-2.2 6.5 6.7 6.7 0 01-2.1 2.2l-.4.2-1.5 1-3.2 2c-.3 0-.5.3-.8.4a7.6 7.6 0 01-3 1h-1.7l-.5-.1-2-.3-2.2-.2-1-.2h-.3-.3l-.5-.2c-1-.3-2-.9-2.6-1.7 0 0 0-.2-.2-.3l-.1-.2-.6-1-2.3-3.6-.1-.2-.2-.3a5 5 0 01-.3-3l.3-1.2 1.3-4 .5-1.4.8-1.4c.5-.9 1.3-1.6 2.2-2.2l4.5-2.6 1-.6.2-.2h.2l.1-.1.6-.3a7.1 7.1 0 013.4-.6l1.1.1 2 .4 3.6.6a4.7 4.7 0 013.3 2.5l.4.7.7 1.4 1.4 2.6-3-4.6-.1-.3-.2-.3-.5-.4a4.2 4.2 0 00-1.8-.9l-.6-.1-1.5-.2-2.9-.4-1.4-.2h-1.4c-1 0-1.9.4-2.7.9l-2.5 1.5-2.5 1.6-.6.4a7 7 0 00-1.6 1.3 5.5 5.5 0 00-1 1.7l-.2.7a1540.4 1540.4 0 00-1.8 5.3 3.9 3.9 0 00.3 2.8v.3l.3.2.7 1.1 1.3 2.1.5.9.3.4.1.2.1.1a3.6 3.6 0 002.1 1.3h.5l.4.1 2 .3 3.5.5h.4a4.5 4.5 0 001.2 0 6 6 0 002.1-.6l.7-.5 1.4-.8 2.6-1.6 1.3-.7 1-.7c.6-.5 1-1.2 1.4-1.9v-.2l.1-.2v-.1l.3-.6.3-1a1594.4 1594.4 0 001.4-3.7l.1-.3a4 4 0 00.3-1c0-.6 0-1.3-.2-1.9l-.1-.6z",
					fill: "#231F20"
				}), o.a.createElement("path", {
					d: "M44 26.6l-3-4.7c-.6-1.1-1.8-1.8-3.2-2l-6.2-1c-1.4 0-3 .2-4.2 1l-5.7 3.5c-1.3.7-2.2 1.9-2.7 3.3l-2 5.8c-.4 1.3-.3 2.6.3 3.7l3 4.7c.7 1.1 1.8 1.8 3.2 2l6.2.9c1.5.2 3-.1 4.2-1l5.7-3.4c1.3-.7 2.3-1.9 2.8-3.3l2-5.8c.4-1.3.3-2.6-.4-3.7zm-6.8 6.7a10 10 0 00-7.8 4.7c-.5.9-2 .7-1.8-.3a6 6 0 00-4-6.4c-1-.4-.6-1.7.5-1.8a10 10 0 007.8-4.7c.6-.9 2-.7 1.9.3a6 6 0 004 6.4c1 .4.5 1.7-.6 1.8z",
					fill: "#4C4C4C"
				}), o.a.createElement("path", {
					d: "M37.3 33.4l.1-.1.2-.1.2-.2.4-.7-.1-.3c-.1-.2-.2-.3-.4-.3l-1.5-.7a6.3 6.3 0 01-3-6v.2-.2-.1l-.2-.1h-.3l-.3.3v.1-.1a10.4 10.4 0 01-8.3 5.1h.4-.4l-.2.1-.2.2v.1l.4.3-.3-.3c.7.3 1.4.7 2 1.2a6.5 6.5 0 012.3 6v-.2V38l.3.1h.3l.3-.3a9.4 9.4 0 016.2-4.1 4.9 4.9 0 011 0h1.1-1.1a10 10 0 00-3.1 1.2c-1.4.8-2.6 2-3.4 3.4a1.6 1.6 0 01-1.4.7c-.3 0-.6 0-.8-.3l-.2-.2-.1-.3V38v-.2a6 6 0 00-.2-2c-.2-.6-.4-1.2-.8-1.7-.7-1-1.7-1.8-2.9-2.2l-.3-.2.3.2-.2-.1-.3-.2-.1-.2-.2-.3v-1c.2-.4.4-.6.7-.8l.9-.3-.3.1h.3a9 9 0 003.7-1.2 10.6 10.6 0 002.6-2l1-1.4c.1-.3.4-.5.7-.7l1-.2c.4 0 .8.2 1 .5l.2.3.1.3v.5-.2.2c0 .8 0 1.5.3 2.2.1.7.4 1.3.8 1.8a6 6 0 002.5 2l.3.1-.3-.2c.3.1.6.4.7.7.1.2.1.5 0 .8a1.4 1.4 0 01-1 1h-.2l-.2-.1z",
					fill: "#231F20"
				}), o.a.createElement("path", {
					d: "M43.9 26.7l.2.2.4.8c.2.5.2 1 .2 1.5l-.1 1-.3 1a415.5 415.5 0 01-2.2 6.4 6.7 6.7 0 01-2.2 2.1l-.3.3-1.5 1-3.2 1.9-.8.5a7.3 7.3 0 01-4.2 1h-.5l-.5-.1-2.1-.3-2-.3-1.1-.1H23l-.6-.2a5.2 5.2 0 01-2.5-1.7l-.2-.3v-.1l-.1-.1-.6-1-2.3-3.6-.2-.2-.1-.3a5 5 0 010-4.2l1.3-4 .5-1.4.7-1.5c.6-.8 1.4-1.6 2.3-2.1l4.4-2.6 1-.7.3-.1h.1l.2-.2.5-.2a7 7 0 013.5-.7l1 .2 2 .3 3.7.7a4.7 4.7 0 013.3 2.5l.4.7.7 1.3 1.3 2.6-2.9-4.6-.1-.2-.2-.3-.5-.5a4.2 4.2 0 00-1.8-.8l-.7-.1-1.4-.2-3-.4-1.4-.2a5.8 5.8 0 00-4 .8l-2.5 1.6-2.6 1.6-.6.4a7 7 0 00-1.5 1.3 5.6 5.6 0 00-1 1.7l-.3.7a1727.5 1727.5 0 00-1.7 5.3 3.9 3.9 0 00.2 2.8l.2.3.1.2a246.5 246.5 0 002 3.2l.6.9.3.4v.2l.2.1c.4.5.8.8 1.3 1a4.2 4.2 0 001.2.4h.5l1.9.3 3.6.5h1.6a6 6 0 002.1-.7l.7-.4 1.4-.8 2.6-1.6 1.2-.7 1-.8c.6-.5 1.1-1 1.4-1.8l.1-.2v-.2l.1-.1.2-.6.4-1 .7-2 .6-1.7a26 26 0 01.4-1.3v-1.9l-.2-.6z",
					fill: "#231F20"
				}), o.a.createElement("path", {
					d: "M32 26.1c-1.3.4-2.9 0-4-.8-1.2-1-2-2.2-2.4-3.6-.6-2.7-.6-5.1.6-8 1.3-3 2.8-4 3.8-7.6.5 2.7 1 3.2 2.1 5 1.2 1.7 3.7 2.8 4.7 4.5 1.3 2 .9 4-1.9 4.5-.7 2.6-.2 4.9-2.8 6.1z",
					fill: "#FFF1B6"
				}), o.a.createElement("path", {
					d: "M32 26.3h.1l.2-.2.2-.2.2-.1c.4-.4.7-.7.9-1.2a6 6 0 00.4-2l.4-2.6v-.3l.4-.1.4-.1.4-.2.4-.2h.1l.2-.2a1.5 1.5 0 00.5-1.3v-.4-.2h-.1v-.2l-.1-.2-.1-.2-.3-.4-.6-.8-.8-.6-2-1.5-.9-.9-.2-.2-.2-.3-.2-.3-.2-.2a19.8 19.8 0 01-1.3-2.3 15 15 0 01-.7-2.6h1.8a14 14 0 01-2.4 5 19.9 19.9 0 00-2.1 4.5 10 10 0 00-.4 4L26 21l.1.6.2.6a6.1 6.1 0 002.2 3.3 5.4 5.4 0 003 1h.3-.1a4.2 4.2 0 01-1.2.2c-.6 0-1.1-.2-1.6-.4a6 6 0 01-2.7-2A7.3 7.3 0 0125 21a12 12 0 011-8.4l.8-1.4 1.5-2.6c.4-.9.7-1.7.9-2.6l.8-3.6.8 3.6c.1.8.3 1.5.6 2.2l.5 1 .6.8.3.5.1.2.2.2.7.7c1 .9 2.2 1.6 3.2 2.7a6.7 6.7 0 011 1.4v.3l.2.3.2 1v1l-.1.3-.1.3-.2.3a3 3 0 01-.3.5l-.2.2-.3.2-.2.1-.2.2c-.5.3-1.1.5-1.7.6l.6-.7-.5 2.7c-.2.8-.5 1.6-1 2.2a3.3 3.3 0 01-1.7 1.2 1 1 0 01-.3 0l-.4-.1a.1.1 0 00.1 0z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M32.4 23.4c.1.8-.7 1.4-1.4 1.4-1.2.2-2.4-.7-2.8-1.9a5.3 5.3 0 010-3.5l1.5-3.4 2.3 4.6c.4.8.8 1.7.6 2.5",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M32.8 23.2l-.3-.7-.7-1.4-2.7-4.8h1.2l-1 2.2-.6 2.1a4 4 0 00.2 2.4 2.9 2.9 0 001.2 1.3l.7.2h.8c.3 0 .5-.2.7-.4.2-.2.4-.4.4-.7 0 .3 0 .5-.2.8l-.5.6a2.2 2.2 0 01-1.6.3c-.6 0-1.1-.3-1.6-.7-.4-.3-.8-.8-1-1.3l-.4-1.6.1-1.6c.2-.9.5-1.8 1-2.6l.6-1.5.6-1.4.6 1.3a132.3 132.3 0 012.5 5.1c.2.5.3 1.1.3 1.7 0 .5-.2.7-.3.7z",
					fill: "#fff"
				})),
				m = () => o.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M29.4 20.3c0-1 .1-2.2-.1-3.3-.2-.9-.8-1.6-1.2-2.4v.4a8 8 0 00-.8-3.6l-1.8-3c-.4-.7-.8-1.6-1.7-2-1-.7-2.4-1-3.6-1.3l-.4 1.3c.8-.2 1.4-.8 1.2-1.7 0-.6-.4-1.2-.6-1.8-.3-.7-.4-1.4-.8-2-.5-.8-1.3-1-2.1-.9-1 .2-1.8.7-2.6 1L11.4 2 4.6 4.4c-1 .3-2.4.6-2.8 1.7-.2 1 .3 2.1.6 3l.6-.8c-.7.3-1.6.5-2.1 1.1-.5.5-.8 1.3-.9 2V14l.1 3c0 .8-.1 1.7.2 2.5.5.8.7 1.7 1 2.5L2 25c.3.9.5 1.8 1 2.6.4.7 1 1.2 1.5 1.8.5.5.9 1.1 1.7 1.3.9.1 1.8 0 2.7.2l3 .2 2.9.2 3 .2c.9-.1 1.7-.6 2.5-1l2.7-1.2 1.5-.7 1.5-.6c.7-.6 1-1.5 1.4-2.3l1.5-2.7.5-1.2v-1.4c-.1-1-2-.7-2 .1 0 .8.1 1.4-.3 2.1L26 24.6l-1 2c0 .3-.1.3-.4.5l-1.4.6-4.6 2.1c-.7.3-1.4.1-2.1 0l-2.7-.1-5.2-.4c-.6 0-1.3.2-1.7-.3l-1.5-1.6c-1-1.2-1.3-2.9-1.8-4.4L3 20.6l-.4-1c-.1-.5-.4-.8-.4-1.2v-5.7c0-.7-.2-1.5 0-2.2.2-.3.2-.5.5-.6l1.2-.5c.3-.2.7-.5.6-.8-.3-.7-.6-1.5-.6-2.2v-.3h-.1.2l1.2-.5L10.4 4 15.9 2l.9-.4.8-.2c-.2 0-.1 0 0 0l.2.2.3.8.5 1.6.4.8v.4c.2.3-.3.2.5 0-.3 0-.7.2-.8.6 0 .3.1.5.4.6l2.3.7c.7.2 1.2.4 1.6 1l1 1.6 1.2 1.9a6.5 6.5 0 011 3.3c0 .4.1.7.4 1 .3.6.7 1.1.8 1.8v2.7c0 1 2 .7 2-.1z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M19.6 5.4l-14.8 5c-.4 0-.8-.9-1.2-2v-.2C3.2 7 2.9 6 3.3 5.9L17.8 1c.4 0 .8.9 1.2 2v.2c.4 1.2 1 2.1.6 2.2z",
					fill: "#CCCCCA"
				}), o.a.createElement("path", {
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4a161286.2 161286.2 0 0113.3-4.4c.4-.2.2-.8-.3-.7z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M5.3 10C9.6 8.7 13.7 6.6 18 5.3c1-.4.4-1.9-.6-1.6C13.1 5.1 9 7.1 4.7 8.5c-1 .3-.4 1.9.6 1.5z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M4.2 6.8V7l.3-.2 1.1-.5 3.4-1c2.4-.8 4.9-1.5 7.3-2.4.5-.2 1.4-.4 1.6-1 .1-.4-.5-.5-.6-.1 0-.2 0 0-.1 0l-.4.2-1.3.5-3.7 1.2c-2.4.7-5 1.3-7.3 2.4-.3 0-1.4.6-.8 1 .4.3.8-.2.5-.4z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M23.8 9.6l-9-.5-9.3 3.2L2.4 15l-.9 3.6 2.6 8.2 2.4 2.8 11.6.9 7.2-3.3 2.8-5.3v-4.5l-4.3-7.7z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.2-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), o.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1L3 22l2.8 4.7c.2.2.3.7.6 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.7 1.4 1.9.6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.1 2.1 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
					fill: "#CCCCCA"
				}), o.a.createElement("path", {
					d: "M11.4 7l1.6-.5c.2 0 .3-.3.2-.5-.1-.2-.3-.3-.5-.2l-1.6.4c-.2 0-.3.3-.2.5 0 .2.2.3.5.2zM8 27l2.5.2c.2 0 .4 0 .4-.3 0-.2 0-.4-.3-.4l-2.5-.2c-.2 0-.4 0-.4.3 0 .2 0 .4.3.4z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M18.7 19c-2.1-1-4.1-2.1-6.3-2.6-.8-.2-1.6-.4-2.4-.8l-1.2-.8c-.9-1-.8-2 .2-2.8 1-1 2.2-2 3.3-2.8.5-.4 1-.6 1.5-.8.4-.2.8 0 1 .3.1.4 0 .8-.5 1-1.7.7-3 2-4.4 3.2-.4.4-.3.7 0 1l.7.5c.5.2 1.1.5 1.7.6 2.5.5 4.8 1.6 7 2.8 1 .5 1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.9.2-1-.3-.2-.5 0-.8.5-1 1-.3 2-.6 2.8-1l3.3-1.6.9-.7z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M14.2 23.7l-1.3.5-.5.1c-1 .4-1.7-.1-2-.7v-1.1c.2-.4.6-.6 1-.8l1.1-.4 1.7-.7 3-1.5c-1.6-.8-3.2-1.6-5-2-.8-.2-1.7-.4-2.5-.8-.5-.2-1-.6-1.4-1-1.2-1.4-1.1-2.7.2-3.9l3.4-2.8c.4-.4 1-.6 1.5-.8l.2-.1c.3-.2.7-.2 1 0 .4.1.7.4.8.8.3.7 0 1.5-.8 1.8-1.2.5-2.1 1.4-3.1 2.3l-1 .8.4.3 1.5.5c2.7.6 5.2 1.8 7.3 3 .8.3 1 1 1.2 1.3 0 .4 0 1-.6 1.8a9.8 9.8 0 01-3.6 2.4l-2.5 1z",
					fill: "#A5A4A4"
				}), o.a.createElement("path", {
					d: "M19.2 19.1c-2.1-1-4.1-2-6.3-2.5l-2.3-.8c-.5-.2-1-.5-1.3-.9-.9-1-.8-1.9.2-2.8 1-1 2.2-1.9 3.3-2.8l1.6-.7c.3-.2.7-.1.9.3.1.4 0 .7-.4.9-1.8.7-3 2.1-4.5 3.3-.4.3-.3.7 0 1l.7.5 1.7.5c2.5.6 4.8 1.7 7 2.9 1 .4 1.1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.8.1-1-.3-.2-.5.1-.8.5-1l2.9-1 3.2-1.6.9-.8z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M14.6 23.5l-1.4.5-.4.2c-.7.2-1.2 0-1.5-.6a1 1 0 01.1-1l.7-.4 1-.4a24 24 0 001.8-.7l3.1-1.5h.1l.4-.4a25 25 0 00-5.7-2.3 14 14 0 01-2.4-.8c-.5-.2-1-.5-1.3-1-1-1.1-1-2.2.2-3.3 1-1 2.2-2 3.3-2.8l1.4-.7h.2c.3-.2.6-.2.9-.1.2 0 .4.3.5.6.2.5 0 1-.6 1.3-1.2.6-2.2 1.4-3.3 2.4l-1 .9-.2.2.2.2c.2.2.4.4.6.4.5.3 1 .5 1.6.6 2.6.5 5 1.7 7.1 2.8.7.4 1 .8 1 1.2 0 .3 0 .8-.5 1.4a9.5 9.5 0 01-3.5 2.4l-2.4 1zm-1.6-.2l1.3-.5 2.4-1a8.7 8.7 0 003.2-2c.2-.3.4-.6.4-.9 0-.3-.4-.5-.6-.6-2-1-4.4-2.3-7-2.8-.6-.1-1.2-.3-1.7-.6-.3 0-.6-.3-.9-.6-.2-.2-.3-.5-.3-.8 0-.2.1-.5.4-.7l1-.9c1-1 2.1-1.9 3.5-2.5.3-.1.2-.3.2-.4l-.1-.1h-.5l-1.2.7-3.3 2.8c-.9.8-1 1.4-.2 2.3l1.1.8 2.3.7a27 27 0 016.2 2.5l.2.1a.4.4 0 010 .6l-.3.3-.6.5h-.1a51.8 51.8 0 01-6.4 2.9v.2c0 .2.1.3.5.1l.5-.1z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.4 4.4 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3l-6.1-1-6.2-1.1-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4a48353.8 48353.8 0 01-9.8-1.7l-5.9-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2 0 0l.3-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5l1.8.3 5.6 1 6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6L29.7 17l-2-.4c-.4 0-.6.6-.2.7z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M26.8 19.7L41 22l2 .4c.7.1 1-1 .3-1.2L29.2 19l-2-.4c-.8-.1-1.1 1-.4 1.2z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M46.9 21.3c0-1.3-.8-2.4-1.9-2.5-1 0-2 1-2 2.4 0 1.3.8 2.4 1.8 2.5 1.1 0 2-1 2-2.4z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M46.5 21.4c0 .7-.3 1.7-1.1 2-.7.3-1.4-.2-1.7-.8-.5-.8-.5-1.8-.1-2.5.3-.7 1-1.2 1.7-1 .9.4 1.2 1.4 1.2 2.3 0 .3.7.2.7 0 0-1-.4-2.2-1.4-2.6-.9-.4-2 0-2.6.8a3 3 0 00-.3 3c.4.9 1.3 1.5 2.3 1.3 1.2-.3 2-1.4 2-2.6 0-.3-.7-.2-.7 0zM47.1 29.8c-.8-1.4-1.5-2.8-2.5-4l-4.2-5.1-4.7-5.8-1-1.2c-.7-.8-1.7-.5-2.6-.1L19 19.3c-1.4.6-2.8 1.1-4 1.8-1 .4-1 1.3-1 2.1l-.2 2.6-.5 13.9V39.8c0 1 .8 2 1.3 2.7.4.7.8 1.8 1.5 2.3l1.1.3c.6 0 1.1.2 1.7.3l11.2 2c1.2.1 2.4.4 3.5.6 1 .1 1.6 0 2.2-.8l.4-.6 6.1-8.4 3.3-4.4 1.5-2c.4-.7.4-1.4 0-2-.8-1.4-2.9-.2-2 1.2-.2-.3.1-.6-.1-.4l-.3.3L44 32l-3 4c-2 2.8-4 5.6-6.2 8.4l-.8 1.1-.2.3c0 .3.7-.3.8-.3l-.9-.1-1.8-.3-10.8-2-3.4-.5h-.3l.3.2-.1-.2-1.4-2.4-.5-.7.1 1v-1-.7l.1-2.8.4-8 .1-3.4v-1.9l-.1.4.4-.2 2-1 13.6-5.8 1.5-.7h.1c0 .1-.8-.2-.7 0l.3.4 4.2 5.1 4.6 5.7 1 1.2-.1-.1c0 .2.2.4.3.5l1 1.7.6 1c.8 1.3 3 .1 2.1-1.2z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M35.3 17.8l-17.7 7.7c-.2 0-.4.3-.4.5l-2.7 14.2a290.7 290.7 0 012.5 3.6l17.2 3c.2 0 .4 0 .5-.2L46.1 31c.2-.2.1-.5 0-.7L44 27 36 18a.6.6 0 00-.7-.2z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8a31996 31996 0 015.8 6.6l1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1l-6 8.3-3.5 4.7-1.2 1.6-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1-.1-.2.3.6c0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), o.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), o.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6a22549.5 22549.5 0 002 2.2l4 4.9c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6l-1.8-.3-5.8-1-6-1.1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1a7430.5 7430.5 0 007.4-3.3l10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M18 23.5l12-5.2 1.8-.8c.5-.2 0-1-.5-.7l-12 5.2-1.7.7c-.6.3 0 1 .4.8zM15.9 25v7c0 .5.8.5.8 0v-6l.1-1c0-.5-.9-.5-.9 0zM15.7 33.6v1.7c0 .2.2.5.4.4.3 0 .5-.2.5-.4v-1.5-.2c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.5z",
					fill: "#fff"
				}), o.a.createElement("path", {
					d: "M33.4 26c-.4-1.7-.7-5-1-6.4-1 .4-2.5 2.4-3 2.9-2.5 2.2-1.8 2.7-4.8 2.6-2.7-.1-4.5-.7-4.8 0-.3.5.6 2 1.5 3.7.8 1.7 1.6 1.4.5 3.4-.6 1-2.2 3.1-2.6 4.4.5.3 1.3 0 1.7 0 1-1.5 2.8-4 2.9-5 0-1.4-2.5-4.2-3.1-5.2 1.5 0 5.3.9 6.8.2 1.3-.5 3.8-4 4.9-5 .2 1.3 0 5.1.8 6 .7.8 3.1 1.3 4.8 1.7.5-.3 1-.7 1.3-1.2L33.4 26z",
					fill: "#C18D42"
				}), o.a.createElement("path", {
					d: "M36.3 30.6c4.4-2.8 4-3-.3-4.4-2.4-.8-2.5-.7-2.9-3.3-.1-.9.1-3.7-1-3.9-1-.2-2.5 2.1-3.2 2.7-2.4 2.2-2.2 2.5-5.2 2.4-4.7-.2-5.2-.2-3.3 3.7.9 1.7 1.9 1.9.7 3.9-.7 1.2-2.5 3.4-2.5 4.7 0 2.1 6.4-1.4 7.6-1.2 1.1.2 4.4 5.4 5.8 3.5.7-1 .7-2.8.8-3.9.6-3 .9-2.5 3.5-4.2zm-4 1.6c-.8 1-1 5-1.2 6.3-1-1-3.3-3.7-4.7-4-1.4-.2-5.3 1.5-6.8 2 .6-1.3 3.2-4.7 3.3-6 0-1.2-2.5-4.1-3-5.1 1.4 0 5.2.9 6.7.2 1.3-.5 3.9-4 5-5 .1 1.3 0 5.1.8 6 .9 1 4.8 1.6 6.1 2-1.2.8-5.4 2.4-6.2 3.6z",
					fill: "#000"
				}), o.a.createElement("path", {
					d: "M21 38.3l3.4-1.2c.6-.2.5-1-.1-.8l-3.4 1.1c-.6.2-.5 1 0 .9zM34.4 33.2c.8-.4 1.5-.8 2.2-1.4.5-.4 0-1-.5-.6a7 7 0 01-1.9 1.1c-.5.3-.4 1.1.2.9zM33.3 37.9l-.8 1.3c-.3.6.4 1 .7.4l.8-1.3c.3-.6-.4-1-.7-.4zM34.5 20.5l-.3-1.5c0-.5-1-.2-.9.4l.3 1.5c0 .5 1 .2.9-.4z",
					fill: "#fff"
				}));
			var p = r("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/IntroModal/index.m.less"),
				v = r.n(p);

			function g(e) {
				const {
					pointsName: t
				} = e;
				return o.a.createElement("div", {
					className: v.a.container
				}, o.a.createElement(d.a, {
					colored: !0
				}, c.fbt._("Burn Your {pointsName}", [c.fbt._param("pointsName", t)], {
					hk: "2JXqt"
				})), o.a.createElement("div", {
					className: v.a.sectionsContainer
				}, o.a.createElement(b, {
					image: o.a.createElement(f, null),
					header: c.fbt._("Burn and be rewarded", null, {
						hk: "1G5I22"
					}),
					description: c.fbt._("Burn your {pointsName} to receive a reward created by the community.", [c.fbt._param("pointsName", t)], {
						hk: "iRnjD"
					})
				}), o.a.createElement(b, {
					image: o.a.createElement(h, null),
					header: c.fbt._("No one gets the {pointsName}", [c.fbt._param("pointsName", t)], {
						hk: "2hPu7L"
					}),
					description: c.fbt._("When your {pointsName} disappear, it helps the rest of the community by making everyone else's slice of {pointsName2} larger.", [c.fbt._param("pointsName", t), c.fbt._param("pointsName2", t)], {
						hk: "Baw1t"
					})
				}), o.a.createElement(b, {
					image: o.a.createElement(m, null),
					header: c.fbt._("Your community will thank you", null, {
						hk: "2DLt1I"
					}),
					description: c.fbt._("After burning your {pointsName} the user or bot who asked you to burn them will reward you accordingly. *", [c.fbt._param("pointsName", t)], {
						hk: "jf25R"
					})
				})), o.a.createElement("div", {
					className: v.a.footer
				}, o.a.createElement("div", {
					className: v.a.footnote
				}, c.fbt._("* Rewards are created by the community, for the community. Reddit has nothing to do with them, and cannot assist you to cancel, reverse, or otherwise modify burning details. Once you burn your {pointsName}, they’re gone forever.", [c.fbt._param("pointsName", t)], {
					hk: "13HyI3"
				})), o.a.createElement(u.t, {
					onClick: e.onContinue
				}, c.fbt._("Let's do it", null, {
					hk: "2Ktk0f"
				}))))
			}

			function b(e) {
				return o.a.createElement("div", {
					className: v.a.section
				}, o.a.createElement("div", {
					className: v.a.sectionImage
				}, e.image), o.a.createElement("div", {
					className: v.a.sectionContent
				}, o.a.createElement("h4", {
					className: v.a.sectionHeader
				}, e.header), o.a.createElement("p", {
					className: v.a.sectionDescription
				}, e.description)))
			}
			var E = r("./node_modules/bignumber.js/bignumber.js"),
				y = r("./src/reddit/actions/governance/index.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/actions/toaster.ts"),
				x = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				M = r("./src/reddit/endpoints/governance/crypto.ts"),
				j = r("./src/reddit/helpers/crypto/transactions.ts"),
				C = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				N = r("./src/reddit/helpers/governance/tokens.ts"),
				A = r("./src/reddit/helpers/trackers/crypto.ts"),
				T = r("./src/reddit/hooks/useTracking.ts"),
				B = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/gov.ts"),
				P = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				L = r("./src/lib/classNames/index.ts"),
				R = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				z = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				F = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx"),
				O = r("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/Approval.m.less"),
				k = r.n(O);

			function q(e) {
				const {
					burnAmount: t,
					burnMemo: r,
					hasEnoughPoints: n,
					pointsName: a,
					subreddit: l
				} = e;
				return o.a.createElement("div", {
					className: k.a.overview
				}, o.a.createElement(R.a, {
					amount: t,
					className: k.a.amount,
					subredditId: l.id
				}), o.a.createElement(F.a, {
					subredditId: l.id
				}), o.a.createElement("div", {
					className: Object(L.a)(k.a.memo, {
						[k.a.error]: !n
					})
				}, n ? c.fbt._("For “{memo}”. Fulfilled by the community, not Reddit.", [c.fbt._param("memo", r)], {
					hk: "1rkdVJ"
				}) : c.fbt._("Not enough {pointsName}", [c.fbt._param("pointsName", a)], {
					hk: "2qcKwi"
				})))
			}

			function D(e) {
				return o.a.createElement(z.b, {
					values: [
						[Object(z.a)(), e.contractAddress],
						[c.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"],
						[c.fbt._("Memo", null, {
							hk: "4AomKF"
						}), e.memo]
					]
				})
			}
			const S = 15e3;

			function H(e) {
				const {
					burnAmount: t,
					burnMemo: r,
					subreddit: n,
					pointsDetails: l
				} = e, s = Object(a.d)(), i = Object(T.a)(), d = () => s(Object(w.f)()), u = n.id, f = Object(a.e)(e => Object(I.e)(e, {
					subredditId: u
				})), h = new E.BigNumber(f).isGreaterThanOrEqualTo(t), m = Object(N.c)(t, null == l ? void 0 : l.displayConversion), p = l.contractAddress, v = Object(j.a)(p, t, r), g = e => {
					i(Object(A.c)("burn_link", u, m, e))
				}, b = l.name;
				return o.a.createElement(P.a, {
					approvalOverview: o.a.createElement(q, {
						burnAmount: t,
						burnMemo: r,
						hasEnoughPoints: h,
						subreddit: n,
						pointsName: b
					}),
					approvalDetails: o.a.createElement(D, {
						contractAddress: p,
						memo: r
					}),
					onClose: d,
					onTransactionSuccess: async e => {
						d(), s(function(e) {
							const t = Object(_.e)(c.fbt._("Burning your {pointsName}...", [c.fbt._param("pointsName", e)], {
								hk: "2LoC1g"
							}), B.b.SuccessCommunity);
							return t.duration = S, Object(_.f)(t)
						}(b));
						try {
							await async function(e, t, r, n, o) {
								await Object(C.a)(t, r), await e(Object(x.a)(Object(y.h)({
									subredditId: n
								}), async e => {
									const t = Object(I.e)(e(), {
										subredditId: n
									});
									return o !== t || null
								})), e(Object(y.h)({
									subredditId: n
								}))
							}(s, l, e.hash, n.id, f), i(Object(A.d)("burn_link", u, m)), s(function(e) {
								const t = Object(_.e)(c.fbt._("Your {pointsName} were burnt!", [c.fbt._param("pointsName", e)], {
									hk: "1BHX95"
								}), B.b.SuccessCommunityGreen);
								return t.duration = S, Object(_.f)(t)
							}(b))
						} catch (t) {
							g(t.toString()), s(function(e) {
								return Object(_.f)(Object(_.e)(c.fbt._("There was an error while burning your {pointsName}. Please try again later", [c.fbt._param("pointsName", e)], {
									hk: "48Un5w"
								}), B.b.Error))
							}(b))
						}
					},
					onTransactionFailure: g,
					subredditId: u,
					title: c.fbt._("Approve Burning Your Bricks", null, {
						hk: "4DTzlV"
					}),
					transaction: h ? v : null,
					transactionIntent: Object(M.b)(u, t, r)
				})
			}
			t.default = Object(l.a)((function() {
				const {
					subreddit: e,
					pointsDetails: t
				} = Object(i.c)(), r = Object(a.e)(e => Object(s.a)(e)), [l, c] = Object(n.useState)(!0);
				return e && t ? l ? o.a.createElement(g, {
					onContinue: () => c(!1),
					pointsName: t.name
				}) : o.a.createElement(H, {
					burnAmount: r.amount,
					burnMemo: r.memo,
					subreddit: e,
					pointsDetails: t
				}) : null
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less": function(e, t, r) {
			e.exports = {
				currentBalance: "_31YIsY0F-7Am4I-6rVcdRl",
				currentBalanceAmount: "QasuEd0D0OPCzr5tiNWoL"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/selectors/gov.ts"),
				s = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				i = r("./src/reddit/components/Governance/TransactionModals/Common/CurrentBalance.m.less"),
				c = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const t = Object(a.e)(t => Object(l.e)(t, e));
				return o.a.createElement("div", {
					className: c.a.currentBalance
				}, d._("Current balance:", null, {
					hk: "2NDvrq"
				}), o.a.createElement(s.a, {
					className: c.a.currentBalanceAmount,
					amount: t,
					subredditId: e.subredditId,
					small: !0,
					grey: !0
				}))
			}
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
				return y
			})), r.d(t, "c", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/uniqueId.js"),
				a = r.n(o),
				l = r("./node_modules/raf/index.js"),
				s = r.n(l),
				i = r("./node_modules/react/index.js"),
				c = r.n(i),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/layout/row/Inline/index.tsx"),
				m = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				p = r.n(m);
			var v = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return c.a.createElement("div", {
						className: p.a.wrapper
					}, c.a.createElement(h.a, {
						className: p.a.titleRow
					}, r), c.a.createElement("div", {
						className: p.a.detailsContainer
					}, t), c.a.createElement(h.a, {
						className: p.a.buttonRow
					}, c.a.createElement(f.l, {
						className: p.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = r("./src/reddit/controls/ErrorText/index.m.less"),
				b = r.n(g);
			class E extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					s()(() => {
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
						className: t,
						errorModalBody: r,
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: l,
						isModalOpen: s
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(b.a.wrapper, t)
					}, c.a.createElement("span", {
						className: b.a.description,
						ref: this.spanRef
					}, e), l && c.a.createElement("span", {
						className: b.a.moreText,
						onClick: this.toggleModal
					}, a), s && c.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const y = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: a = []
					} = e, l = a.length ? a : o ? [o] : [];
					return l.length ? c.a.createElement("div", {
						className: t
					}, l.map((e, t) => c.a.createElement(E, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => c.a.createElement(y, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
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
				return h
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/controls/ErrorText/index.tsx"),
				i = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(d);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = l.a.input("input", u.a),
				m = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				p = e => {
					let {
						label: t,
						children: r,
						inputRef: n,
						className: l,
						isInvalid: s,
						...i
					} = e;
					const c = void 0 !== i.value && "" !== i.value;
					return o.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, l, {
							[u.a.mIsInvalid]: s
						}),
						onClick: m
					}, o.a.createElement(h, f({
						"aria-invalid": s,
						innerRef: n
					}, i)), t && o.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, t), r)
				},
				v = e => {
					let {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: l,
						className: s,
						redditStyle: i,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return o.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, s, {
							[u.a.mIsInvalid]: l,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: m
					}, o.a.createElement(h, f({
						innerRef: n
					}, c)), t && o.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), r)
				},
				g = e => o.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(i.a, {
					className: u.a.plus
				}));
			var b;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(b || (b = {}));
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: b.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: b.REMOVE,
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
					return e.map((e, l) => o.a.createElement(p, {
						inputRef: e => this.setInputRef(e, l),
						isInvalid: !!a[l],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, l),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(l)
					}, o.a.createElement(c.b, {
						className: u.a.trash
					})), !!a[l] && o.a.createElement(s.b, {
						className: u.a.errorText
					}, a[l])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: l,
						disabled: s
					} = this.props;
					this.focusedInput = null;
					const i = !(!!n && r.length >= n) && !s;
					return o.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && i && o.a.createElement(g, {
						onClick: this.addValue,
						text: l
					}), this.renderFields(), !t && i && o.a.createElement(g, {
						onClick: this.addValue,
						text: l
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
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(l);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(s.a.loadingIcon, r, {
						[s.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/crypto/abis/communityPointsABI.ts": function(e, t, r) {
			"use strict";
			t.a = [{
				constant: !0,
				inputs: [{
					internalType: "address",
					name: "account",
					type: "address"
				}],
				name: "balanceOf",
				outputs: [{
					internalType: "uint256",
					name: "",
					type: "uint256"
				}],
				payable: !1,
				stateMutability: "view",
				type: "function"
			}, {
				constant: !1,
				inputs: [{
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}, {
					internalType: "bytes",
					name: "userData",
					type: "bytes"
				}],
				name: "burn",
				outputs: [],
				payable: !1,
				stateMutability: "nonpayable",
				type: "function"
			}, {
				constant: !1,
				inputs: [{
					internalType: "address",
					name: "recipient",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "transfer",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				payable: !1,
				stateMutability: "nonpayable",
				type: "function"
			}, {
				constant: !0,
				inputs: [],
				name: "getHubAddr",
				outputs: [{
					internalType: "address",
					name: "",
					type: "address"
				}],
				payable: !1,
				stateMutability: "view",
				type: "function"
			}]
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function l(e, t) {
				return Object(o.b)(parseInt(a(e, t), 10))
			}

			function s(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}

			function i(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/hooks/useApiContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/ApiContext.tsx");

			function a() {
				const {
					apiContext: e
				} = Object(n.useContext)(o.a);
				return e
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js");

			function o(e, t) {
				const [r, o] = Object(n.useState)(e);
				return [r, e => {
					t.current && o(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				s = r.n(l);
			const i = e => o.a.createElement("svg", {
				className: Object(a.a)(s.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.fe
				}) === n.yd
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return f
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const o = [],
				a = {},
				l = (e, t) => {
					const r = h(e, t);
					if (r) return r.mainHeader
				},
				s = (e, t) => {
					const r = h(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				i = (e, t) => {
					const r = h(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : a
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const r = c(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = c(e, t);
					return r && r.amount || "0"
				},
				f = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-BurnPointsModal.ec2f9ed6f94260c9de2d.js.map