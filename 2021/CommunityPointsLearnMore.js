// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.b2bb9b69894cc48ecb45.js
// Retrieved at 11/17/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var r = {
				single_source_shortest_paths: function(e, t, n) {
					var o = {},
						a = {};
					a[t] = 0;
					var i, s, c, l, d, u, m, h = r.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (c in s = (i = h.pop()).value, l = i.cost, d = e[s] || {}) d.hasOwnProperty(c) && (u = l + d[c], m = a[c], (void 0 === a[c] || m > u) && (a[c] = u, h.push(c, u), o[c] = s));
					if (void 0 !== n && void 0 === a[n]) {
						var f = ["Could not find a path from ", t, " to ", n, "."].join("");
						throw new Error(f)
					}
					return o
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
					return n.reverse(), n
				},
				find_path: function(e, t, n) {
					var o = r.single_source_shortest_paths(e, t, n);
					return r.extract_shortest_path_from_predecessor_list(o, n)
				},
				PriorityQueue: {
					make: function(e) {
						var t, n = r.PriorityQueue,
							o = {};
						for (t in e = e || {}, n) n.hasOwnProperty(t) && (o[t] = n[t]);
						return o.queue = [], o.sorter = e.sorter || n.default_sorter, o
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
		"./node_modules/qrcode/lib/browser.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/can-promise.js"),
				o = n("./node_modules/qrcode/lib/core/qrcode.js"),
				a = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				i = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, n, a, i) {
				var s = [].slice.call(arguments, 1),
					c = s.length,
					l = "function" == typeof s[c - 1];
				if (!l && !r()) throw new Error("Callback required as last argument");
				if (!l) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (n = t, t = a = void 0) : 2 !== c || t.getContext || (a = n, n = t, t = void 0), new Promise((function(r, i) {
						try {
							var s = o.create(n, a);
							r(e(s, t, a))
						} catch (c) {
							i(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (i = n, n = t, t = a = void 0) : 3 === c && (t.getContext && void 0 === i ? (i = a, a = void 0) : (i = a, a = n, n = t, t = void 0));
				try {
					var d = o.create(n, a);
					i(null, e(d, t, a))
				} catch (u) {
					i(u)
				}
			}
			t.create = o.create, t.toCanvas = s.bind(null, a.render), t.toDataURL = s.bind(null, a.renderToDataURL), t.toString = s.bind(null, (function(e, t, n) {
				return i.render(e, n)
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
				for (var t = Math.floor(e / 7) + 2, n = r(e), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), a = [n - 7], i = 1; i < t - 1; i++) a[i] = a[i - 1] - o;
				return a.push(6), a.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], r = t.getRowColCoords(e), o = r.length, a = 0; a < o; a++)
					for (var i = 0; i < o; i++) 0 === a && 0 === i || 0 === a && i === o - 1 || a === o - 1 && 0 === i || n.push([r[a], r[i]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

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
					var n = 45 * o.indexOf(this.data[t]);
					n += o.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
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

			function o(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = r.alloc(e * e), this.reservedBit = r.alloc(e * e)
			}
			o.prototype.set = function(e, t, n, r) {
				var o = e * this.size + t;
				this.data[o] = n, r && (this.reservedBit[o] = !0)
			}, o.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, o.prototype.xor = function(e, t, n) {
				this.data[e * this.size + t] ^= n
			}, o.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/mode.js");

			function a(e) {
				this.mode = o.BYTE, this.data = r.from(e)
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
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				a = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case r.L:
						return o[4 * (e - 1) + 0];
					case r.M:
						return o[4 * (e - 1) + 1];
					case r.Q:
						return o[4 * (e - 1) + 2];
					case r.H:
						return o[4 * (e - 1) + 3];
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
				o = r.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var n = e.bit << 3 | t, a = n << 10; r.getBCHDigit(a) - o >= 0;) a ^= 1335 << r.getBCHDigit(a) - o;
				return 21522 ^ (n << 10 | a)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r.alloc(512),
				a = r.alloc(256);
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
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				o = n("./node_modules/qrcode/lib/core/utils.js");

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
					var n = o.toSJIS(this.data[t]);
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
				o = 40,
				a = 10;

			function i(e, n, r) {
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
				for (var t = e.size, r = 0, o = 0, a = 0, i = null, s = null, c = 0; c < t; c++) {
					o = a = 0, i = s = null;
					for (var l = 0; l < t; l++) {
						var d = e.get(c, l);
						d === i ? o++ : (o >= 5 && (r += n + (o - 5)), i = d, o = 1), (d = e.get(l, c)) === s ? a++ : (a >= 5 && (r += n + (a - 5)), s = d, a = 1)
					}
					o >= 5 && (r += n + (o - 5)), a >= 5 && (r += n + (a - 5))
				}
				return r
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, o = 0; o < t - 1; o++)
					for (var a = 0; a < t - 1; a++) {
						var i = e.get(o, a) + e.get(o, a + 1) + e.get(o + 1, a) + e.get(o + 1, a + 1);
						4 !== i && 0 !== i || n++
					}
				return n * r
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, r = 0, a = 0, i = 0; i < t; i++) {
					r = a = 0;
					for (var s = 0; s < t; s++) r = r << 1 & 2047 | e.get(i, s), s >= 10 && (1488 === r || 93 === r) && n++, a = a << 1 & 2047 | e.get(s, i), s >= 10 && (1488 === a || 93 === a) && n++
				}
				return n * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * a
			}, t.applyMask = function(e, t) {
				for (var n = t.size, r = 0; r < n; r++)
					for (var o = 0; o < n; o++) t.isReserved(o, r) || t.xor(o, r, i(e, o, r))
			}, t.getBestMask = function(e, n) {
				for (var r = Object.keys(t.Patterns).length, o = 0, a = 1 / 0, i = 0; i < r; i++) {
					n(i), t.applyMask(i, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(i, e), s < a && (a = s, o = i)
				}
				return o
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/version-check.js"),
				o = n("./node_modules/qrcode/lib/core/regex.js");
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
				return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
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

			function o(e) {
				this.mode = r.NUMERIC, this.data = e.toString()
			}
			o.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, o.prototype.getLength = function() {
				return this.data.length
			}, o.prototype.getBitsLength = function() {
				return o.getBitsLength(this.data.length)
			}, o.prototype.write = function(e) {
				var t, n, r;
				for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
				var o = this.data.length - t;
				o > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * o + 1))
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var n = r.alloc(e.length + t.length - 1), a = 0; a < e.length; a++)
					for (var i = 0; i < t.length; i++) n[a + i] ^= o.mul(e[a], t[i]);
				return n
			}, t.mod = function(e, t) {
				for (var n = r.from(e); n.length - t.length >= 0;) {
					for (var a = n[0], i = 0; i < t.length; i++) n[i] ^= o.mul(t[i], a);
					for (var s = 0; s < n.length && 0 === n[s];) s++;
					n = n.slice(s)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = r.from([1]), a = 0; a < e; a++) n = t.mul(n, [1, o.exp(a)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/utils.js"),
				a = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				i = n("./node_modules/qrcode/lib/core/bit-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/bit-matrix.js"),
				c = n("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				l = n("./node_modules/qrcode/lib/core/finder-pattern.js"),
				d = n("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				m = n("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = n("./node_modules/qrcode/lib/core/version.js"),
				f = n("./node_modules/qrcode/lib/core/format-info.js"),
				g = n("./node_modules/qrcode/lib/core/mode.js"),
				p = n("./node_modules/qrcode/lib/core/segments.js"),
				b = n("./node_modules/qrcode/node_modules/isarray/index.js");

			function y(e, t, n) {
				var r, o, a = e.size,
					i = f.getEncodedBits(t, n);
				for (r = 0; r < 15; r++) o = 1 == (i >> r & 1), r < 6 ? e.set(r, 8, o, !0) : r < 8 ? e.set(r + 1, 8, o, !0) : e.set(a - 15 + r, 8, o, !0), r < 8 ? e.set(8, a - r - 1, o, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, o, !0) : e.set(8, 15 - r - 1, o, !0);
				e.set(a - 8, 8, 1, !0)
			}

			function v(e, t, n) {
				var a = new i;
				n.forEach((function(t) {
					a.put(t.mode.bit, 4), a.put(t.getLength(), g.getCharCountIndicator(t.mode, e)), t.write(a)
				}));
				var s = 8 * (o.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (a.getLengthInBits() + 4 <= s && a.put(0, 4); a.getLengthInBits() % 8 != 0;) a.putBit(0);
				for (var c = (s - a.getLengthInBits()) / 8, l = 0; l < c; l++) a.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var a = o.getSymbolTotalCodewords(t), i = u.getTotalCodewordsCount(t, n), s = a - i, c = u.getBlocksCount(t, n), l = c - a % c, d = Math.floor(a / c), h = Math.floor(s / c), f = h + 1, g = d - h, p = new m(g), b = 0, y = new Array(c), v = new Array(c), _ = 0, P = r.from(e.buffer), E = 0; E < c; E++) {
						var w = E < l ? h : f;
						y[E] = P.slice(b, b + w), v[E] = p.encode(y[E]), b += w, _ = Math.max(_, w)
					}
					var C, k, x = r.alloc(a),
						N = 0;
					for (C = 0; C < _; C++)
						for (k = 0; k < c; k++) C < y[k].length && (x[N++] = y[k][C]);
					for (C = 0; C < g; C++)
						for (k = 0; k < c; k++) x[N++] = v[k][C];
					return x
				}(a, e, t)
			}

			function _(e, t, n, r) {
				var a;
				if (b(e)) a = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var i = t;
					if (!i) {
						var u = p.rawSplit(e);
						i = h.getBestVersionForData(u, n)
					}
					a = p.fromString(e, i || 40)
				}
				var m = h.getBestVersionForData(a, n);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var f = v(t, n, a),
					g = o.getSymbolSize(t),
					_ = new s(g);
				return function(e, t) {
						for (var n = e.size, r = l.getPositions(t), o = 0; o < r.length; o++)
							for (var a = r[o][0], i = r[o][1], s = -1; s <= 7; s++)
								if (!(a + s <= -1 || n <= a + s))
									for (var c = -1; c <= 7; c++) i + c <= -1 || n <= i + c || (s >= 0 && s <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && c >= 2 && c <= 4 ? e.set(a + s, i + c, !0, !0) : e.set(a + s, i + c, !1, !0))
					}(_, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var r = n % 2 == 0;
							e.set(n, 6, r, !0), e.set(6, n, r, !0)
						}
					}(_),
					function(e, t) {
						for (var n = c.getPositions(t), r = 0; r < n.length; r++)
							for (var o = n[r][0], a = n[r][1], i = -2; i <= 2; i++)
								for (var s = -2; s <= 2; s++) - 2 === i || 2 === i || -2 === s || 2 === s || 0 === i && 0 === s ? e.set(o + i, a + s, !0, !0) : e.set(o + i, a + s, !1, !0)
					}(_, t), y(_, n, 0), t >= 7 && function(e, t) {
						for (var n, r, o, a = e.size, i = h.getEncodedBits(t), s = 0; s < 18; s++) n = Math.floor(s / 3), r = s % 3 + a - 8 - 3, o = 1 == (i >> s & 1), e.set(n, r, o, !0), e.set(r, n, o, !0)
					}(_, t),
					function(e, t) {
						for (var n = e.size, r = -1, o = n - 1, a = 7, i = 0, s = n - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(o, s - c)) {
										var l = !1;
										i < t.length && (l = 1 == (t[i] >>> a & 1)), e.set(o, s - c, l), -1 === --a && (i++, a = 7)
									} if ((o += r) < 0 || n <= o) {
									o -= r, r = -r;
									break
								}
							}
					}(_, f), isNaN(r) && (r = d.getBestMask(_, y.bind(null, _, n))), d.applyMask(r, _), y(_, n, r), {
						modules: _,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: r,
						segments: a
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, r, i = a.M;
				return void 0 !== t && (i = a.from(t.errorCorrectionLevel, a.M), n = h.from(t.version), r = d.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), _(e, n, i, r)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/polynomial.js"),
				a = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function i(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			i.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, i.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = r.alloc(this.degree),
					n = a.concat([e, t], e.length + this.degree),
					i = o.mod(n, this.genPoly),
					s = this.degree - i.length;
				if (s > 0) {
					var c = r.alloc(this.degree);
					return i.copy(c, s), c
				}
				return i
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + n + "$"),
				a = new RegExp("^[0-9]+$"),
				i = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return o.test(e)
			}, t.testNumeric = function(e) {
				return a.test(e)
			}, t.testAlphanumeric = function(e) {
				return i.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				o = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				i = n("./node_modules/qrcode/lib/core/byte-data.js"),
				s = n("./node_modules/qrcode/lib/core/kanji-data.js"),
				c = n("./node_modules/qrcode/lib/core/regex.js"),
				l = n("./node_modules/qrcode/lib/core/utils.js"),
				d = n("./node_modules/dijkstrajs/dijkstra.js");

			function u(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function m(e, t, n) {
				for (var r, o = []; null !== (r = e.exec(n));) o.push({
					data: r[0],
					index: r.index,
					mode: t,
					length: r[0].length
				});
				return o
			}

			function h(e) {
				var t, n, o = m(c.NUMERIC, r.NUMERIC, e),
					a = m(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(c.BYTE, r.BYTE, e), n = m(c.KANJI, r.KANJI, e)) : (t = m(c.BYTE_KANJI, r.BYTE, e), n = []), o.concat(a, t, n).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function f(e, t) {
				switch (t) {
					case r.NUMERIC:
						return o.getBitsLength(e);
					case r.ALPHANUMERIC:
						return a.getBitsLength(e);
					case r.KANJI:
						return s.getBitsLength(e);
					case r.BYTE:
						return i.getBitsLength(e)
				}
			}

			function g(e, t) {
				var n, c = r.getBestModeForData(e);
				if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
				switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
					case r.NUMERIC:
						return new o(e);
					case r.ALPHANUMERIC:
						return new a(e);
					case r.KANJI:
						return new s(e);
					case r.BYTE:
						return new i(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, n) {
				for (var o = function(e, t) {
						for (var n = {}, o = {
								start: {}
							}, a = ["start"], i = 0; i < e.length; i++) {
							for (var s = e[i], c = [], l = 0; l < s.length; l++) {
								var d = s[l],
									u = "" + i + l;
								c.push(u), n[u] = {
									node: d,
									lastCount: 0
								}, o[u] = {};
								for (var m = 0; m < a.length; m++) {
									var h = a[m];
									n[h] && n[h].node.mode === d.mode ? (o[h][u] = f(n[h].lastCount + d.length, d.mode) - f(n[h].lastCount, d.mode), n[h].lastCount += d.length) : (n[h] && (n[h].lastCount = d.length), o[h][u] = f(d.length, d.mode) + 4 + r.getCharCountIndicator(d.mode, t))
								}
							}
							a = c
						}
						for (m = 0; m < a.length; m++) o[a[m]].end = 0;
						return {
							map: o,
							table: n
						}
					}(function(e) {
						for (var t = [], n = 0; n < e.length; n++) {
							var o = e[n];
							switch (o.mode) {
								case r.NUMERIC:
									t.push([o, {
										data: o.data,
										mode: r.ALPHANUMERIC,
										length: o.length
									}, {
										data: o.data,
										mode: r.BYTE,
										length: o.length
									}]);
									break;
								case r.ALPHANUMERIC:
									t.push([o, {
										data: o.data,
										mode: r.BYTE,
										length: o.length
									}]);
									break;
								case r.KANJI:
									t.push([o, {
										data: o.data,
										mode: r.BYTE,
										length: u(o.data)
									}]);
									break;
								case r.BYTE:
									t.push([{
										data: o.data,
										mode: r.BYTE,
										length: u(o.data)
									}])
							}
						}
						return t
					}(h(e, l.isKanjiModeEnabled())), n), a = d.find_path(o.map, "start", "end"), i = [], s = 1; s < a.length - 1; s++) i.push(o.table[a[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(i))
			}, t.rawSplit = function(e) {
				return t.fromArray(h(e, l.isKanjiModeEnabled()))
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
				o = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				a = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				i = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/version-check.js"),
				c = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = r.getBCHDigit(7973);

			function d(e, t) {
				return i.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var n = 0;
				return e.forEach((function(e) {
					var r = d(e.mode, t);
					n += r + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return s.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!s.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = i.BYTE);
				var a = 8 * (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (n === i.MIXED) return a;
				var c = a - d(n, e);
				switch (n) {
					case i.NUMERIC:
						return Math.floor(c / 10 * 3);
					case i.ALPHANUMERIC:
						return Math.floor(c / 11 * 2);
					case i.KANJI:
						return Math.floor(c / 13);
					case i.BYTE:
					default:
						return Math.floor(c / 8)
				}
			}, t.getBestVersionForData = function(e, n) {
				var r, o = a.from(n, a.M);
				if (c(e)) {
					if (e.length > 1) return function(e, n) {
						for (var r = 1; r <= 40; r++) {
							if (u(e, r) <= t.getCapacity(r, n, i.MIXED)) return r
						}
					}(e, o);
					if (0 === e.length) return 1;
					r = e[0]
				} else r = e;
				return function(e, n, r) {
					for (var o = 1; o <= 40; o++)
						if (n <= t.getCapacity(o, r, e)) return o
				}(r.mode, r.getLength(), o)
			}, t.getEncodedBits = function(e) {
				if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; r.getBCHDigit(t) - l >= 0;) t ^= 7973 << r.getBCHDigit(t) - l;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, n) {
				var o = n,
					a = t;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (a = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = r.getOptions(o);
				var i = r.getImageWidth(e.modules.size, o),
					s = a.getContext("2d"),
					c = s.createImageData(i, i);
				return r.qrToImageData(c.data, e, o),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(s, a, i), s.putImageData(c, 0, 0), a
			}, t.renderToDataURL = function(e, n, r) {
				var o = r;
				void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
				var a = t.render(e, n, o),
					i = o.type || "image/png",
					s = o.rendererOpts || {};
				return a.toDataURL(i, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, t) {
				var n = e.a / 255,
					r = t + '="' + e.hex + '"';
				return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
			}

			function a(e, t, n) {
				var r = e + t;
				return void 0 !== n && (r += " " + n), r
			}
			t.render = function(e, t, n) {
				var i = r.getOptions(t),
					s = e.modules.size,
					c = e.modules.data,
					l = s + 2 * i.margin,
					d = i.color.light.a ? "<path " + o(i.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + o(i.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var r = "", o = 0, i = !1, s = 0, c = 0; c < e.length; c++) {
							var l = Math.floor(c % t),
								d = Math.floor(c / t);
							l || i || (i = !0), e[c] ? (s++, c > 0 && l > 0 && e[c - 1] || (r += i ? a("M", l + n, .5 + d + n) : a("m", o, 0), o = 0, i = !1), l + 1 < t && e[c + 1] || (r += a("h", s), s = 0)) : o++
						}
						return r
					}(c, s, i.margin) + '"/>',
					m = 'viewBox="0 0 ' + l + " " + l + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + d + u + "</svg>\n";
				return "function" == typeof n && n(null, h), h
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
					o = e.scale || 4;
				return {
					width: r,
					scale: r ? 4 : o,
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
				for (var o = n.modules.size, a = n.modules.data, i = t.getScale(o, r), s = Math.floor((o + 2 * r.margin) * i), c = r.margin * i, l = [r.color.light, r.color.dark], d = 0; d < s; d++)
					for (var u = 0; u < s; u++) {
						var m = 4 * (d * s + u),
							h = r.color.light;
						if (d >= c && u >= c && d < s - c && u < s - c) h = l[a[Math.floor((d - c) / i) * o + Math.floor((u - c) / i)] ? 1 : 0];
						e[m++] = h.r, e[m++] = h.g, e[m++] = h.b, e[m] = h.a
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
			var o = a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function a(e, t, n) {
				return a.TYPED_ARRAY_SUPPORT || this instanceof a ? "number" == typeof e ? c(this, e) : function(e, t, n, r) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, r) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
						a.TYPED_ARRAY_SUPPORT ? o.__proto__ = a.prototype : o = l(e, o);
						return o
					}(e, t, n, r);
					if ("string" == typeof t) return function(e, t) {
						var n = 0 | u(t),
							r = s(e, n),
							o = r.write(t);
						o !== n && (r = r.slice(0, o));
						return r
					}(e, t);
					return function(e, t) {
						if (a.isBuffer(t)) {
							var n = 0 | i(t.length),
								r = s(e, n);
							return 0 === r.length ? r : (t.copy(r, 0, 0, n), r)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? s(e, 0) : l(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return l(e, t.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, n) : new a(e, t, n)
			}

			function i(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var n;
				return a.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = a.prototype : (null === (n = e) && (n = new a(t)), n.length = t), n
			}

			function c(e, t) {
				var n = s(e, t < 0 ? 0 : 0 | i(t));
				if (!a.TYPED_ARRAY_SUPPORT)
					for (var r = 0; r < t; ++r) n[r] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | i(t.length), r = s(e, n), o = 0; o < n; o += 1) r[o] = 255 & t[o];
				return r
			}

			function d(e, t) {
				var n;
				t = t || 1 / 0;
				for (var r = e.length, o = null, a = [], i = 0; i < r; ++i) {
					if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
						if (!o) {
							if (n > 56319) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							if (i + 1 === r) {
								(t -= 3) > -1 && a.push(239, 191, 189);
								continue
							}
							o = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && a.push(239, 191, 189), o = n;
							continue
						}
						n = 65536 + (o - 55296 << 10 | n - 56320)
					} else o && (t -= 3) > -1 && a.push(239, 191, 189);
					if (o = null, n < 128) {
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
						for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
						return o
					}(d(t, e.length - n), e, n, r)
				}(this, e, t, n)
			}, a.prototype.slice = function(e, t) {
				var n, r = this.length;
				if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), a.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = a.prototype;
				else {
					var o = t - e;
					n = new a(o, void 0);
					for (var i = 0; i < o; ++i) n[i] = this[i + e]
				}
				return n
			}, a.prototype.copy = function(e, t, n, r) {
				if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
				var o, i = r - n;
				if (this === e && n < t && t < r)
					for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
				else if (i < 1e3 || !a.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < i; ++o) e[o + t] = this[o + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
				return i
			}, a.prototype.fill = function(e, t, n) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, n = this.length) : "string" == typeof n && (n = this.length), 1 === e.length) {
						var r = e.charCodeAt(0);
						r < 256 && (e = r)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
				if (n <= t) return this;
				var o;
				if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
					for (o = t; o < n; ++o) this[o] = e;
				else {
					var i = a.isBuffer(e) ? e : new a(e),
						s = i.length;
					for (o = 0; o < n - t; ++o) this[o + t] = i[o % s]
				}
				return this
			}, a.concat = function(e, t) {
				if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var o = c(null, t),
					i = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!a.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(o, i), i += l.length
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
			var n = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == n.call(e)
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
				o = n.n(r),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				s = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = n.n(s);

			function l(e) {
				const {
					index: t,
					children: n,
					color: r
				} = e, s = r && Object(i.a)(r, void 0, a.b.white);
				return o.a.createElement("div", {
					className: c.a.bullet
				}, o.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: r,
						color: s
					}
				}, o.a.createElement("span", {
					className: c.a.number
				}, t)), o.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/qrcode/lib/browser.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends i.a.Component {
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
					const e = await o.a.toDataURL(this.props.url, {
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
					return e && i.a.createElement("img", {
						src: e,
						className: this.props.className
					})
				}
			}
			t.a = Object(s.a)(l)
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3RwZXlqQ-Iin-F-rL6IYG4",
				header: "_2jRdJa8cJJOIUqpk7tjmJM",
				title: "c4tRBYxcJYSuTBRs4uJBu",
				closeButton: "_23b4K8MIubjQq2ix5KI8QR",
				body: "_1WFLRa1qVzmEB1vs-gujyU",
				leftSection: "I4Uc5svBBVMAC3Gv3cumu",
				sectionHeader: "_2zaE6P94B156zFeiUyAHGj",
				content: "_1Yqz3rGaFmyEoxy_Wc_MrB",
				rightSection: "_-4IOB0_BjX0SdDgbB8E5e"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				h = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const p = Object(i.c)({
					userId: e => {
						const t = Object(d.k)(e);
						return t ? t.id : ""
					}
				}),
				b = Object(a.b)(p)((function(e) {
					const {
						onClose: t,
						userId: n
					} = e;
					return o.a.createElement("div", {
						className: f.a.container
					}, o.a.createElement("header", {
						className: f.a.header
					}, o.a.createElement("div", {
						className: f.a.title
					}, g._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), o.a.createElement(l.a, {
						className: f.a.closeButton,
						onClick: t
					})), o.a.createElement("div", {
						className: f.a.body
					}, o.a.createElement("section", {
						className: f.a.leftSection
					}, o.a.createElement("div", {
						className: f.a.sectionHeader
					}, g._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), o.a.createElement("div", {
						className: f.a.content
					}, o.a.createElement(u.a, {
						index: "1"
					}, g._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), o.a.createElement(u.a, {
						index: "2"
					}, g._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), o.a.createElement(u.a, {
						index: "3"
					}, g._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), o.a.createElement(u.a, {
						index: "4"
					}, g._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), o.a.createElement("section", {
						className: f.a.rightSection
					}, o.a.createElement(m.a, {
						url: Object(c.a)("http://www.reddit.com/vault/", {
							u: n
						}),
						scale: 5
					}))))
				}));
			t.b = Object(s.a)(b)
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
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
			const o = e => t => ({
					...Object(r.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(r.subreddit)(t)
				}),
				a = () => o("view"),
				i = () => o("tap"),
				s = () => o("dismiss"),
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
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, o, a, i;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, n) {
			e.exports = {
				carousel: "_3vQyUlP9YLzmdL2rsquLS-",
				imageContainer: "_2fHEqYCy2KASrMaQgflk9d",
				image: "_3z5mBSNxkSLnbR6usgbqpT",
				before: "_2JttHHaD7zf0Mbh1a5nRuW",
				after: "_39ks1t7udSkwDSJapMxhoe",
				textContainer: "DCfzAVcgI71D_KyuFWTCt",
				text: "_7rNTYtq4K9spIZ7RPkHx0",
				slideTitle: "_30M0sUJwfP6X2VcrCV3b9D",
				hiddenText: "TE2V4h2gDawl2Jss4N8Z7",
				pager: "_3FdYuxiANbzVWGxeXemc_M",
				progressDot: "fm3copvWWgfUMqVsK6uEV",
				active: "_1sREUpzXrLYpeFbGcvHOKm",
				nextButton: "_2qRdqJkJATZDQvbXLgMgc-",
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3bNZiIgvIum_hDI1TilGTx",
				fadeIn: "_2rvIUweb3EMODFDlq9rJTQ",
				title: "_3I_d5VrdxOFUhdE6IPlPh4",
				section: "_2peLYUOiACmTnA7p9FZ1Jh",
				sectionTitle: "_3dYjAPTzN5JgDEEwT8qBfY",
				expando: "ePiUN_2LVWXFzF2ZhxZiV",
				expanded: "FRM4ER3bBCI1pEZUjCsxN",
				chevron: "ZvsIr_8zCOQls_vqYzb0J",
				text: "_2No-V3Gr33A6vWSzaDbfsA",
				header: "yzR3oAJYm5J94P7G3z0Eq",
				subSection: "GLHR2ijrSORN51Ysw-UiK",
				imageSection: "_3QpGuKfkNV6u59h-14CkFU"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_39s4Rg_2-Yvhg8_j7HmwHz",
				content: "_21JaPYggXVyLsz9Gm0gafa",
				logo: "_1suWmsdOylQibxtvENDH0J",
				link: "FSlJwTR_glxbHijEQl1LP",
				spacer: "_2M28l0MkIvJi8JhKE7Puf"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3hCEJSoCggYeV4_Vzkfj6p",
				logo: "I0sVgzsD8iUdHKzDn3w8a",
				snoo: "iCZwiIk1X_P-1bWrMlBo9",
				wordmark: "_3IIgVNEfc4FHb6Uabcf5XO",
				sections: "_2dnnlMMF10lQC5D3XckQWq",
				sectionText: "_3fpURPqNv7UjrUQUoOgWlU",
				joinWaitlist: "_35PGwOCrj4RRPhOFBN4lI9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less": function(e, t, n) {
			e.exports = {
				container: "_1pYG3qIuM4DcrXBl4ngRLH",
				expanded: "_1ErKYza74uPs_NEpBYfi2k",
				hidden: "FcdN7km4odlWAbVAOMQkD",
				imageSection: "zkgtJc3iICyXxf4wAJmZb",
				image: "Scvg5NjTLZ3VrePmrZZ2A",
				textSection: "_3otwIn4fK0662wqoyFKWMf",
				title: "_3iniGJys4pL41Wl9bCLgxm",
				subtitle: "_2Cc_c4fO2XRibfBK7ujeM3",
				body: "_3ehMpTZWHsOclJbP-nb9UB",
				expandButton: "BuJ81mwGD_tsDKOfiSoGx",
				plusIcon: "_1rOiCdlgF_4fotbxlTYrnO"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_34fNgU8PzDdn8N1dy3ivp5",
				benefitsContainer: "igYwgfFD3VTXbAuDpR11Z",
				expanded: "gpTg3u93gk7ivOpu_dFw1"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2g4zHxTR8YPXf6MxxTZk7x",
				mainScene: "_1rRH8io2oTfod98xPvCKtZ",
				title: "_2mxGnwsJiO-qvSzpOulRFX",
				subtitle: "_3m3_p5jybv4MaYrJ2PVdD-",
				bodyText: "XofGmuW13eskj1YFcBtaR",
				waitlistButton: "_3P-mpJEZcqloYGIVLElRwC"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1jdWtwUDsZUYK8cKl4ShoL",
				image: "_21S4Zcb7SWOn26f2PHTYVJ",
				textContainer: "_1KUhJVhvhYgJy3UP7AVh8A",
				title: "_1_XEsvgDaW6Ipmo8_EbUvx",
				body: "_30rAKfIDOJdS0e_nAZ0SUC",
				button: "_1PiFEnhFGjcOJ8DJpZEZrs",
				buttonIcon: "_5enw_h_QNP0edxOuTIgVT"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less": function(e, t, n) {
			e.exports = {
				container: "_2JWWvW2ewMO4EJh4aah_Y7",
				textSection: "_3LHXd49gDHLRyBpMYidVtJ",
				textContainer: "_2jBZPVax0cA0Md6DhqyAo0",
				title: "_3iRk7kbiRtkK0jjfcKqc-A",
				imageSection: "_3Csuw0qH6o42AjO_1RWieH",
				image: "_3KQSH2itVDb7THQByNoRg_"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less": function(e, t, n) {
			e.exports = {
				title: "qs7iEx9A8SgBw6iazade7",
				subtitle: "_1QaW2mV2hdesrU3AoIJMIJ",
				featureContainer: "_2EyftCjwIT4OedYkYEeLWp",
				bodyText: "_1eyjP53kp-6YZvRBsjsrJZ",
				bodyTitle: "_30cHBBkgHrSZwzZK6bYcS",
				bodyDetail: "_2CQLcOyg-dqNiiIS4hqGK9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2oJWRZzf_TEBMLEbgx16At",
				title: "_3JCUSaj8y3O2gZS9WULM7W",
				subtitle: "_3iijLFwnHqOOSiOWRFviQB",
				body: "_3SmftvDrw0EEwYrT1vFARS",
				moon: "W7I9PeaA-0ziX1ZxLfwG4",
				rocket: "_1ImCaNv5DgWVuIx7lPH-5b",
				waitlistButton: "_2CooTtX1sr5RsRthPTFnrV"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less": function(e, t, n) {
			e.exports = {
				background: "_2EkB4QKAhEjNwVFUD_8JmV",
				textSection: "_2jCzqlAuwDwwpuCgmfIMQ7",
				textContainer: "_3T9M1hVNmokkQWh03xX8jk",
				title: "_3-_ejcDFGp596JkkqRsIsD",
				body: "_1JRBoMFbhlLJke-WjiF9tg",
				imageSection: "_26XceelGMk4WXZndVXPgs0",
				imageContainer: "_21z1zXdwaOJ6ayQtKtWS5c",
				image: "_39n5c2gafF2Zu9YWqEe6cM"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, n) {
			e.exports = {
				anchor: "_1ms_1DEhbPfoWXTh7V61HA",
				anchorParent: "_31htbIEbYEE6IxL_i638-C",
				containerPadding: "_3QgQYeMEeB78hap31D9Da5",
				container: "_2hno-FBggC-9UCyeqfnHlk",
				offline: "_3e_2rDbDAsM6SoOvSxKCaB",
				showDeprecated: "_3NRmcYs-YgClL2HxjajtHX",
				showFPR: "_1mBX91Pbe0QmUzs41SlVrU",
				showFpr: "_1mBX91Pbe0QmUzs41SlVrU",
				showSuspended: "_3yKfNeE_lGGA0CEHo6cC1a",
				navExperiment: "_1ZuwXgOzts0UNccD1GckNF",
				gradientTitleText: "_3VKA4-REk2G4og1H9g0OVD",
				spiral: "_34sjOdYnL94MgTNoNO_z4F",
				communityPointsSection: "_1xGdSbQlhCZiz37M3l4MDa",
				benefitsSection: "_2N1oSKnW_wEttdF6sYbS34",
				featuresSection: "_3gQQPnfeKxZBlYPTarr9Kq",
				faqSection: "BW44I43BTQHj1PYxeGeoW",
				cryptoFutureSection: "_21NRzDYwPqzOpUzZ2w_r3j",
				vaultSection: "_6K5JcTVxN5uDsD5M_-Ju-",
				joinWaitlistSection: "_3f4Fk6abLq8KKZzOZpqbwX"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Anchor", (function() {
				return je
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/experiments/econ/meta.ts"),
				c = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				l = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => a.a.createElement("div", {
				className: d.a.container
			}, a.a.createElement("footer", {
				className: d.a.content
			}, a.a.createElement(c.a, {
				className: d.a.logo
			}), a.a.createElement("span", {
				className: d.a.copyright
			}, u._("© 2021 Reddit, Inc.", null, {
				hk: "2AJJq2"
			})), a.a.createElement("span", {
				className: d.a.spacer
			}), a.a.createElement("a", {
				className: d.a.link,
				href: "https://www.redditinc.com/policies/previews-terms",
				target: "_blank",
				rel: "noopener noreferrer"
			}, u._("Community Points Terms of Service", null, {
				hk: "33aKSn"
			}))));
			var h = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/lib/loadableAction/index.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				y = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less"),
				v = n.n(y);
			const _ = () => {
					const e = Object(i.d)();
					return a.a.createElement("header", {
						className: v.a.container
					}, a.a.createElement(f.a, {
						"aria-label": h.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: v.a.logo,
						to: "/",
						onClick: () => e(Object(g.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
					}, a.a.createElement(c.a, {
						className: v.a.snoo
					}), a.a.createElement(b.a, {
						className: v.a.wordmark
					})), a.a.createElement("div", {
						className: v.a.sections
					}, P.map(({
						displayText: e,
						link: t
					}) => a.a.createElement("a", {
						href: t,
						key: e,
						className: v.a.sectionText
					}, e))), a.a.createElement(p.t, {
						className: v.a.joinWaitlist,
						priority: p.c.Secondary,
						kind: p.b.ExternalLink,
						href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h.fbt._("Join Waitlist", null, {
						hk: "4rpEy2"
					})))
				},
				P = [{
					displayText: h.fbt._("Token", null, {
						hk: "3pTjX0"
					}),
					link: "#token"
				}, {
					displayText: h.fbt._("Benefits", null, {
						hk: "2J9q91"
					}),
					link: "#benefits"
				}, {
					displayText: h.fbt._("Features", null, {
						hk: "31VVaC"
					}),
					link: "#features"
				}, {
					displayText: h.fbt._("Vault", null, {
						hk: "3pQLt1"
					}),
					link: "#vault"
				}, {
					displayText: h.fbt._("Future", null, {
						hk: "39h3VE"
					}),
					link: "#future"
				}, {
					displayText: h.fbt._("Enroll", null, {
						hk: "3ZbEx3"
					}),
					link: "#enroll"
				}];
			var E = n("./src/lib/getParsedUserAgent/index.ts"),
				w = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				C = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/selectors/economics.ts"),
				N = n("./src/lib/classNames/index.ts"),
				j = n("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				S = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				A = n.n(S);

			function T(e, t = !0) {
				return `${r.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var B = function(e) {
					const [t, n] = Object(o.useState)(0), r = Object(i.e)(x.m), s = r && r.learnMore.pages || [], c = s.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), l = t => {
						n(t), t + 1 === s.length && e.onComplete()
					};
					return a.a.createElement("div", {
						className: A.a.carousel
					}, a.a.createElement("div", {
						className: A.a.imageContainer
					}, s.map((e, n) => a.a.createElement("img", {
						src: T(n),
						srcSet: `${T(n,!1)}, ${T(n)} 2x`,
						className: Object(N.a)(A.a.image, {
							[A.a.before]: n < t,
							[A.a.active]: n === t,
							[A.a.after]: n > t
						}),
						key: n
					}))), a.a.createElement("div", {
						className: A.a.textContainer
					}, a.a.createElement("div", {
						className: A.a.hiddenText
					}, a.a.createElement("div", {
						className: A.a.slideTitle
					}, s[0] && s[0].title), c), s.map((e, n) => a.a.createElement("div", {
						className: Object(N.a)(A.a.text, {
							[A.a.before]: n < t,
							[A.a.active]: n === t,
							[A.a.after]: n > t
						}),
						key: n
					}, a.a.createElement("div", {
						className: A.a.slideTitle
					}, e.title), e.body))), t < s.length - 1 && a.a.createElement("div", {
						className: A.a.pager
					}, s.map((e, n) => a.a.createElement("button", {
						key: n,
						onClick: () => l(n)
					}, a.a.createElement("div", {
						className: Object(N.a)(A.a.progressDot, {
							[A.a.active]: n === t
						})
					}))), a.a.createElement("button", {
						"aria-label": "Next",
						className: A.a.nextButton,
						onClick: () => l(t + 1)
					}, a.a.createElement(j.a, {
						className: A.a.arrowIcon
					}))))
				},
				M = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				I = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				R = n.n(I);

			function O(e) {
				const [t, n] = Object(o.useState)(!1), r = Object(k.a)();
				return a.a.createElement("div", {
					className: R.a.section
				}, a.a.createElement("div", {
					className: R.a.sectionTitle,
					onClick: () => {
						t || r(Object(C.g)(e.id)), n(!t)
					}
				}, e.title, a.a.createElement("button", {
					className: Object(N.a)(R.a.expando, {
						[R.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, a.a.createElement(M.a, {
					className: R.a.chevron
				}))), t && a.a.createElement("div", {
					className: R.a.text
				}, e.children))
			}

			function F(e) {
				const t = `${r.a.assetPath}/img/communityPoints/faq/${e.id}`;
				return a.a.createElement("img", {
					src: t + ".png",
					srcSet: `${t}.png, ${t}@2x.png 2x`
				})
			}
			var L = function() {
					const e = Object(i.e)(x.m),
						t = Object(k.a)();
					Object(o.useEffect)(() => {
						t(Object(C.f)())
					}, [t]);
					const n = e && e.faq || [];
					return a.a.createElement("div", {
						className: R.a.container
					}, a.a.createElement("div", {
						className: R.a.title
					}, "Frequently Asked Questions"), n.map(e => e.pages.map(e => a.a.createElement(O, {
						id: e.analyticsPageName,
						title: e.title,
						key: e.analyticsPageName
					}, e.sections.map((e, t) => "text" in e ? a.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: e.text
						},
						className: R.a.subSection,
						key: t
					}) : "image" in e ? a.a.createElement("div", {
						className: R.a.imageSection,
						key: t
					}, a.a.createElement(F, {
						id: e.image
					})) : null)))))
				},
				q = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less"),
				D = n.n(q);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Y = function() {
					const [e, t] = Object(o.useState)(!1), [n, s] = Object(o.useState)(!1), c = Object(i.e)(E.e), l = Object(i.e)(x.m), d = Object(k.a)();
					Object(o.useEffect)(() => {
						d(Object(C.h)())
					}, [d]);
					const u = l && l.learnMore.title;
					return a.a.createElement("div", {
						className: D.a.container
					}, a.a.createElement("div", {
						className: D.a.title
					}, u), a.a.createElement(B, {
						onComplete: () => t(!0)
					}), e && a.a.createElement(a.a.Fragment, null, a.a.createElement(p.l, {
						className: D.a.createVaultButton,
						onClick: () => {
							d(Object(C.b)()), c ? window.location.href = `${r.a.redditUrl}/vault/` : s(!0)
						}
					}, U._("Create My Vault", null, {
						hk: "3ZzMgD"
					})), a.a.createElement(L, null)), n && a.a.createElement(w.b, {
						onClose: () => s(!1)
					}))
				},
				J = n("./src/reddit/icons/fonts/index.tsx"),
				V = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less"),
				z = n.n(V);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				className: e,
				data: t,
				isExpanded: n,
				isHidden: r,
				onClickExpand: o,
				onClickHide: i
			}) => a.a.createElement("div", {
				className: Object(N.a)(z.a.container, e, {
					[z.a.expanded]: n,
					[z.a.hidden]: r
				})
			}, a.a.createElement("div", {
				className: z.a.imageSection,
				style: {
					backgroundColor: t.backgroundColor
				}
			}, a.a.createElement("img", {
				className: Object(N.a)(z.a.image, {
					[z.a.expanded]: n
				}),
				src: t.imageSrc
			})), a.a.createElement("div", {
				className: Object(N.a)(z.a.textSection, {
					[z.a.expanded]: n
				})
			}, a.a.createElement("h5", {
				className: z.a.title
			}, t.title), a.a.createElement("p", {
				className: z.a.subtitle
			}, t.subtitle), n && a.a.createElement("p", {
				className: z.a.body
			}, t.body), a.a.createElement("button", {
				onClick: n ? i : o,
				className: Object(N.a)(z.a.expandButton, {
					[z.a.expanded]: n
				}),
				"aria-label": n ? G._("Collapse", null, {
					hk: "LToWq"
				}) : G._("Expand", null, {
					hk: "4jMW0g"
				})
			}, a.a.createElement(J.a, {
				name: "add",
				className: Object(N.a)(z.a.plusIcon, {
					[z.a.expanded]: n
				})
			}))));
			var W = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less"),
				K = n.n(W);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = ({
				className: e
			}) => {
				const [t, n] = Object(o.useState)(null);
				return a.a.createElement("div", {
					className: e
				}, a.a.createElement(je, {
					anchorId: "benefits"
				}), a.a.createElement("h2", {
					className: K.a.title
				}, Q._("A Crypto Token For Your Subreddit", null, {
					hk: "3bUutJ"
				})), a.a.createElement("div", {
					className: Object(N.a)(K.a.benefitsContainer, {
						[K.a.expanded]: null !== t
					})
				}, X.map((e, r) => a.a.createElement(H, {
					key: r,
					data: e,
					isExpanded: null !== t && r === t,
					isHidden: null !== t && r !== t,
					onClickExpand: () => n(r),
					onClickHide: () => n(null)
				}))))
			}, X = [{
				title: Q._("Reward the community", null, {
					hk: "3N3rjy"
				}),
				subtitle: Q._("Contributors and moderators earn something valuable for all the hours they put in.", null, {
					hk: "18nDpt"
				}),
				body: Q._("Community Points are a way for Redditors to own a piece of their favorite communities. Moderators or content creators earn Points by contributing to the community, and they can spend their Points on premium features, display their Points as reputation in the community, and vote with their Points to weigh in on community decisions.", null, {
					hk: "3j6IlL"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/reward_the_community_v2.png`,
				backgroundColor: "#E2D399"
			}, {
				title: Q._("Unlock premium features", null, {
					hk: "3ViYA7"
				}),
				subtitle: Q._("Users buy premium features with Points, including subreddit memberships and awards.", null, {
					hk: "WdM90"
				}),
				body: Q._("Community Points unlock special features in subreddits that adopt them. For example, they can be used to purchase Special Memberships, which give users access to community-themed badges, highlighted usernames, and the ability to embed rich media in their comments. Or they can be converted to Coins that can be used in the subreddit to give out awards.", null, {
					hk: "19OcvD"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/premium_features_v2.png`,
				backgroundColor: "#B3F1FF"
			}, {
				title: Q._("Encourage higher quality content and conversation", null, {
					hk: "2s1Jao"
				}),
				subtitle: Q._("Communities can use Points as a powerful incentive to shape content and behavior.", null, {
					hk: "2j4vIy"
				}),
				body: Q._("Community Points introduce a powerful incentive system that communities can customize to their needs. Want to see more long-form text posts and comments? Reward this kind of content more. Want to see fewer low-effort memes? Give out fewer Points for them. (Or reward memes even more, it’s up to you and your community!)", null, {
					hk: "3DIGJc"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/hq_content_v2.png`,
				backgroundColor: "#E3D7F4"
			}, {
				title: Q._("Get input from the community", null, {
					hk: "1J5W40"
				}),
				subtitle: Q._("Weighted polls allow the community to make decisions, including how Points get distributed.", null, {
					hk: "1GuG82"
				}),
				body: Q._("Subreddits can create polls where votes are weighted according to how many Points users have earned in the community. Instead of seeing only the loudest comments, measure how long-term members actually feel and use this mechanism to evolve how your community makes decisions.", null, {
					hk: "SD836"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/get_input_v2.png`,
				backgroundColor: "#A7EAD0"
			}, {
				title: Q._("Bring the community together", null, {
					hk: "2zbu5V"
				}),
				subtitle: Q._("Give out Points as prizes for events and contests and integrate Points with community bots.", null, {
					hk: "3zebTN"
				}),
				body: Q._("Points are a flexible tool you can use for many purposes in your community. Community Points can be prizes for community events and contests, such as a trivia thread or design contest. Points can also be used with bots you already have in the community, for example to provide different flairs or actions for users based on their community reputation.", null, {
					hk: "SskIg"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/community_together_v2.png`,
				backgroundColor: "#FFC2C2"
			}, {
				title: Q._("Customize your Points", null, {
					hk: "4jECbt"
				}),
				subtitle: Q._("Each subreddit can have its own Community Points token, with a custom name and symbol.", null, {
					hk: "4q59ee"
				}),
				body: Q._("Every subreddit’s Community Points are unique to it. These tokens live on the blockchain, not on Reddit’s servers – which means they are owned and controlled fully by the community.", null, {
					hk: "3g37A7"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/customize_points_v2.png`,
				backgroundColor: "#DDDDDD"
			}];
			var $ = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = ({
				className: e
			}) => a.a.createElement("div", {
				className: Object(N.a)(ee.a.container, e)
			}, a.a.createElement(je, {
				anchorId: "token"
			}), a.a.createElement("img", {
				className: ee.a.mainScene,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/main_scene_v2.png`
			}), a.a.createElement("h3", {
				className: ee.a.title
			}, te._("Community Points", null, {
				hk: "eQ16B"
			})), a.a.createElement("h2", {
				className: ee.a.subtitle
			}, te._("Own a Piece of Your Community", null, {
				hk: "1nDRCc"
			})), a.a.createElement("p", {
				className: ee.a.bodyText
			}, te._("Add a crypto token to your subreddit. Earn rewards, encourage quality content, and unlock premium features.", null, {
				hk: "1DXWKh"
			})), a.a.createElement(p.t, {
				className: ee.a.waitlistButton,
				priority: p.c.Primary,
				kind: p.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank",
				rel: "noopener noreferrer"
			}, te._("Join Waitlist", null, {
				hk: "4rpEy2"
			})));
			var re = n("./src/higherOrderComponents/asModal/index.tsx");
			const oe = Object(re.a)(B);
			var ae = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less"),
				ie = n.n(ae);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = ({
				className: e
			}) => {
				const [t, n] = Object(o.useState)(!1);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Object(N.a)(e, ie.a.container)
				}, a.a.createElement(je, {
					anchorId: "future"
				}), a.a.createElement("img", {
					className: ie.a.image,
					src: `${r.a.assetPath}/img/communityPoints/landingPage/crypto_future_v2.png`
				}), a.a.createElement("div", {
					className: ie.a.textContainer
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, se._("Step into the Crypto Future", null, {
					hk: "49h4QX"
				})), a.a.createElement("div", {
					className: ie.a.body
				}, se._("{=Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.}{=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, not on Reddit’s servers, which means they are truly owned by the community. As Community Points migrate from beta onto the main Ethereum blockchain, your community will benefit from even greater control and independence – on and off of Reddit.}", [se._param("=Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", a.a.createElement("p", null, se._("Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", null, {
					hk: "2hgLEC"
				}))), se._param("=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, not on Reddit’s servers, which means they are truly owned by the community. As Community Points migrate from beta onto the main Ethereum blockchain, your community will benefit from even greater control and independence – on and off of Reddit.", a.a.createElement("p", null, se._("Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, not on Reddit’s servers, which means they are truly owned by the community. As Community Points migrate from beta onto the main Ethereum blockchain, your community will benefit from even greater control and independence – on and off of Reddit.", null, {
					hk: "2r0fjb"
				})))], {
					hk: "46EaYu"
				})), a.a.createElement(p.t, {
					Icon: Object(J.b)("topic_reading"),
					className: ie.a.button,
					iconClassName: ie.a.buttonIcon,
					priority: p.c.Secondary,
					onClick: () => n(!0)
				}, se._("A New Frontier", null, {
					hk: "4GrPd2"
				})))), t && a.a.createElement(oe, {
					withOverlay: !0,
					onOverlayClick: () => n(!1),
					onComplete: () => {}
				}))
			};
			var le = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less"),
				de = n.n(le);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js"), me = ({
				className: e,
				data: t
			}) => a.a.createElement("div", {
				className: Object(N.a)(de.a.container, e),
				style: {
					backgroundColor: t.backgroundColor
				}
			}, a.a.createElement("div", {
				className: de.a.textSection
			}, a.a.createElement("div", {
				className: de.a.textContainer
			}, a.a.createElement("h4", {
				className: de.a.title
			}, t.title), t.body)), a.a.createElement("div", {
				className: de.a.imageSection
			}, a.a.createElement("img", {
				className: de.a.image,
				src: t.imageSrc
			})));
			var he = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less"),
				fe = n.n(he);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pe = ({
				className: e
			}) => a.a.createElement("div", {
				className: e
			}, a.a.createElement(je, {
				anchorId: "features"
			}), a.a.createElement("h3", {
				className: fe.a.title
			}, ge._("Look & Feel", null, {
				hk: "eE7iN"
			})), a.a.createElement("h2", {
				className: fe.a.subtitle
			}, ge._("Community Points Features", null, {
				hk: "13RfC7"
			})), be.map(e => a.a.createElement(me, {
				className: fe.a.featureContainer,
				key: e.title,
				data: e
			}))), be = [{
				title: ge._("Reputation", null, {
					hk: "3HnL3J"
				}),
				body: ge._("{=Community Points let users show their reputation in the community. As a crypto token, they can take this reputation anywhere they want on the Internet.}{=On Reddit, token balances are displayed next to usernames, so people can easily identify the community’s biggest contributors in threads and conversations.}", [ge._param("=Community Points let users show their reputation in the community. As a crypto token, they can take this reputation anywhere they want on the Internet.", a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("Community Points let users show their reputation in the community. As a crypto token, they can take this reputation anywhere they want on the Internet.", null, {
					hk: "3DV4zt"
				}))), ge._param("=On Reddit, token balances are displayed next to usernames, so people can easily identify the community’s biggest contributors in threads and conversations.", a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("On Reddit, token balances are displayed next to usernames, so people can easily identify the community’s biggest contributors in threads and conversations.", null, {
					hk: "1nOePX"
				})))], {
					hk: "3p1JXi"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/reputation_v2.png`,
				backgroundColor: "#FF5C0033"
			}, {
				title: ge._("Special Memberships", null, {
					hk: "k936y"
				}),
				body: ge._("{=Use Community Points to purchase a Special Membership in the subreddit. Memberships have several features that communities can choose from.}{=Badges}{=Personalize your presence on the subreddit with loyalty and style badges, and add a highlighted color to your username.}{=GIFs}{=Embed GIFs directly inside your comments.}{=Animated Emojis}{=Add custom emojis to your comments.}", [ge._param("=Use Community Points to purchase a Special Membership in the subreddit. Memberships have several features that communities can choose from.", a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("Use Community Points to purchase a Special Membership in the subreddit. Memberships have several features that communities can choose from.", null, {
					hk: "302NJu"
				}))), ge._param("=Badges", a.a.createElement("h6", {
					className: fe.a.bodyTitle
				}, ge._("Badges", null, {
					hk: "25z4mj"
				}))), ge._param("=Personalize your presence on the subreddit with loyalty and style badges, and add a highlighted color to your username.", a.a.createElement("p", {
					className: fe.a.bodyDetail
				}, ge._("Personalize your presence on the subreddit with loyalty and style badges, and add a highlighted color to your username.", null, {
					hk: "34lPS1"
				}))), ge._param("=GIFs", a.a.createElement("h6", {
					className: fe.a.bodyTitle
				}, ge._("GIFs", null, {
					hk: "4onXMo"
				}))), ge._param("=Embed GIFs directly inside your comments.", a.a.createElement("p", {
					className: fe.a.bodyDetail
				}, ge._("Embed GIFs directly inside your comments.", null, {
					hk: "3GLGQs"
				}))), ge._param("=Animated Emojis", a.a.createElement("h6", {
					className: fe.a.bodyTitle
				}, ge._("Animated Emojis", null, {
					hk: "3WKumb"
				}))), ge._param("=Add custom emojis to your comments.", a.a.createElement("p", {
					className: fe.a.bodyDetail
				}, ge._("Add custom emojis to your comments.", null, {
					hk: "2SkL04"
				})))], {
					hk: "3kbMM4"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/special_memberships_v2.png`,
				backgroundColor: "#D4F6FF"
			}, {
				title: ge._("Awards", null, {
					hk: "1Jm1g6"
				}),
				body: a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("Community Points can be used to buy Reddit Coins that only work in the subreddit. Use these subreddit-specific Coins to make it rain awards in the community!", null, {
					hk: "3sdqI1"
				})),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/awards_v2.png`,
				backgroundColor: "#00CC7833"
			}, {
				title: ge._("Polls & Voting", null, {
					hk: "s6RHW"
				}),
				body: ge._("{=Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned from their contributions.}{=Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.}", [ge._param("=Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned from their contributions.", a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned from their contributions.", null, {
					hk: "1ZAiQ8"
				}))), ge._param("=Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", null, {
					hk: "1KSTP8"
				})))], {
					hk: "4qNyEY"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/polls_v2.png`,
				backgroundColor: "#FFD63533"
			}, {
				title: ge._("Tipping & Transfers", null, {
					hk: "PnLps"
				}),
				body: ge._("{=If someone makes a great post or comment, tip them with Points! Community Points can be sent to any Redditor with a crypto Vault, or to any Ethereum blockchain address.}", [ge._param("=If someone makes a great post or comment, tip them with Points! Community Points can be sent to any Redditor with a crypto Vault, or to any Ethereum blockchain address.", a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("If someone makes a great post or comment, tip them with Points! Community Points can be sent to any Redditor with a crypto Vault, or to any Ethereum blockchain address.", null, {
					hk: "ohD3U"
				})))], {
					hk: "3G3NZv"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/tipping_v2.png`,
				backgroundColor: "#F86AEA33"
			}, {
				title: ge._("Creator Rewards", null, {
					hk: "aJzBg"
				}),
				body: a.a.createElement("p", {
					className: fe.a.bodyText
				}, ge._("Creators can be rewarded for making things for the subreddit, such as designing badges or community merchandise. Developers can be paid in Points to make community bots.", null, {
					hk: "4cH9Td"
				})),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/creator_rewards_v2.png`,
				backgroundColor: "#FFF9F3"
			}];
			var ye = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less"),
				ve = n.n(ye);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pe = ({
				className: e
			}) => a.a.createElement("div", {
				className: Object(N.a)(e, ve.a.container)
			}, a.a.createElement(je, {
				anchorId: "enroll"
			}), a.a.createElement("div", {
				className: ve.a.backgroundContainer
			}, a.a.createElement("h3", {
				className: ve.a.title
			}, _e._("Join Waitlist", null, {
				hk: "2yTXN4"
			})), a.a.createElement("h2", {
				className: ve.a.subtitle
			}, _e._("Want to see Community Points in your subreddit?", null, {
				hk: "3a9HLq"
			})), a.a.createElement("p", {
				className: ve.a.body
			}, _e._("We are looking for a select few subreddits to join our crypto experiment. If you are a moderator, add yourself to the list and we’ll be in touch!", null, {
				hk: "3MTU6s"
			})), a.a.createElement(p.t, {
				className: ve.a.waitlistButton,
				priority: p.c.Primary,
				kind: p.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank",
				rel: "noopener noreferrer"
			}, _e._("Join Waitlist", null, {
				hk: "p3fEV"
			})), a.a.createElement("img", {
				className: ve.a.moon,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/moon_v2.png`
			}), a.a.createElement("img", {
				className: ve.a.rocket,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/rocket_v2.png`
			})));
			var Ee = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less"),
				we = n.n(Ee);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = ({
				className: e
			}) => a.a.createElement("div", {
				className: Object(N.a)(e, we.a.background)
			}, a.a.createElement(je, {
				anchorId: "vault"
			}), a.a.createElement("div", {
				className: we.a.textSection
			}, a.a.createElement("div", {
				className: we.a.textContainer
			}, a.a.createElement("h2", {
				className: we.a.title
			}, Ce._("Vault", null, {
				hk: "Ydv9k"
			})), a.a.createElement("p", {
				className: we.a.body
			}, Ce._("A crypto wallet built into the Reddit app. See Points balances and send Points to Redditors at the tap of a button.", null, {
				hk: "1NZGlE"
			})))), a.a.createElement("div", {
				className: we.a.imageSection
			}, a.a.createElement("div", {
				className: we.a.imageContainer
			}, a.a.createElement("img", {
				className: we.a.image,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/vault_v2.png`
			}))));
			var xe = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				Ne = n.n(xe);
			t.default = () => {
				return Object(i.e)(s.a) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: Ne.a.container
				}, a.a.createElement(_, null), a.a.createElement(ne, {
					className: Ne.a.communityPointsSection
				}), a.a.createElement(Z, {
					className: Ne.a.benefitsSection
				}), a.a.createElement("img", {
					className: Ne.a.spiral,
					src: `${r.a.assetPath}/img/communityPoints/landingPage/spiral_v2.png`
				}), a.a.createElement(pe, {
					className: Ne.a.featuresSection
				}), a.a.createElement(ke, {
					className: Ne.a.vaultSection
				}), a.a.createElement(ce, {
					className: Ne.a.cryptoFutureSection
				}), a.a.createElement(Pe, {
					className: Ne.a.joinWaitlistSection
				})), a.a.createElement(m, null)) : a.a.createElement(Y, null)
			};
			const je = ({
				anchorId: e
			}) => a.a.createElement("div", {
				className: Ne.a.anchorParent
			}, a.a.createElement("a", {
				id: e,
				className: Ne.a.anchor
			}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less": function(e, t, n) {
			e.exports = {
				container: "wGpiitJeL95e_NSp-VYWo",
				title: "_1QFOHyE3KyrQei4X08YZrG",
				createVaultButton: "_3RSwchbf9fQWrjkGUnYqw2",
				fadeIn: "_2ashSgNv6fi7q6NVcCU4dt"
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "u", (function() {
				return F
			})), n.d(t, "v", (function() {
				return L
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "s", (function() {
				return U
			})), n.d(t, "t", (function() {
				return Y
			})), n.d(t, "g", (function() {
				return J
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				s = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/models/Product/index.ts"),
				d = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/gold/powerups/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				p = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				b = (e, t) => {
					const n = p(e, t);
					return n && n.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const v = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = b(e, t),
							r = Date.now();
						return n && r < n ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				_ = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === u.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[s.a.Loyalty]: r.find(e => e.placement === i.a.First),
							[s.a.Achievement]: r.find(e => e.placement === i.a.Second),
							[s.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[s.a.Loyalty]: void 0,
						[s.a.Achievement]: void 0,
						[s.a.Cosmetic]: void 0
					}
				};

			function P(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const E = (e, t, n) => {
					var o;
					if (!r.d.spBadges(e)) return g;
					return P(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				w = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
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

			function k(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === o) return n;
				const a = e.badges.models,
					s = e.user.ownedBadges[r] || {},
					c = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(s).map(e => a[e]).find(e => e && e.type === c)
			}

			function x(e, t, n, r) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === s.a.Loyalty || n === s.a.Achievement) return o.data.collections[n];
					if (n === s.a.Cosmetic && r) return o.data.collections[n][r]
				}
				return g
			}

			function N(e, t) {
				const n = x(e, t, s.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[s.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return g
			}

			function S(e, t) {
				return x(e, t, s.a.Cosmetic, s.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const A = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === d.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === d.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var T;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(T || (T = {}));
			const B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				I = (e, t) => {
					if (!t) return {};
					const n = B.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = p(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				R = (e, t) => {
					var n, r, o, a;
					const i = (null === (a = null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || B;
					return {
						prices: I(e, t),
						member: i.member || B.member,
						memberPlural: i.memberPlural || B.memberPlural,
						memberAlt: i.memberAlt || B.memberAlt,
						memberAltPlural: i.memberAltPlural || B.memberAltPlural,
						membership: i.membership || B.membership,
						membershipAlt: i.membershipAlt || B.membershipAlt
					}
				},
				O = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === d.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return t.status === d.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				q = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				D = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				U = (e, t, n) => {
					if (Object(h.r)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!r || !Object(a.a)(r))
				},
				Y = (e, t, n) => {
					if (!Object(f.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(h.s)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (o && Object(a.b)(o)) return !0;
					const i = r.d.spGiphy(e),
						s = D(e, t);
					return !(!i || !s) || i && s
				},
				J = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				V = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.b2bb9b69894cc48ecb45.js.map