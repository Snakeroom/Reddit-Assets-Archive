// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.07474cb846508ba3afe7.js
// Retrieved at 1/20/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, o) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, t, o) {
					var a = {},
						i = {};
					i[t] = 0;
					var r, s, l, u, c, d, m, h = n.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (l in s = (r = h.pop()).value, u = r.cost, c = e[s] || {}) c.hasOwnProperty(l) && (d = u + c[l], m = i[l], (void 0 === i[l] || m > d) && (i[l] = d, h.push(l, d), a[l] = s));
					if (void 0 !== o && void 0 === i[o]) {
						var p = ["Could not find a path from ", t, " to ", o, "."].join("");
						throw new Error(p)
					}
					return a
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var o = [], n = t; n;) o.push(n), e[n], n = e[n];
					return o.reverse(), o
				},
				find_path: function(e, t, o) {
					var a = n.single_source_shortest_paths(e, t, o);
					return n.extract_shortest_path_from_predecessor_list(a, o)
				},
				PriorityQueue: {
					make: function(e) {
						var t, o = n.PriorityQueue,
							a = {};
						for (t in e = e || {}, o) o.hasOwnProperty(t) && (a[t] = o[t]);
						return a.queue = [], a.sorter = e.sorter || o.default_sorter, a
					},
					default_sorter: function(e, t) {
						return e.cost - t.cost
					},
					push: function(e, t) {
						var o = {
							value: e,
							cost: t
						};
						this.queue.push(o), this.queue.sort(this.sorter)
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
		"./node_modules/qrcode/lib/browser.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/can-promise.js"),
				a = o("./node_modules/qrcode/lib/core/qrcode.js"),
				i = o("./node_modules/qrcode/lib/renderer/canvas.js"),
				r = o("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, o, i, r) {
				var s = [].slice.call(arguments, 1),
					l = s.length,
					u = "function" == typeof s[l - 1];
				if (!u && !n()) throw new Error("Callback required as last argument");
				if (!u) {
					if (l < 1) throw new Error("Too few arguments provided");
					return 1 === l ? (o = t, t = i = void 0) : 2 !== l || t.getContext || (i = o, o = t, t = void 0), new Promise((function(n, r) {
						try {
							var s = a.create(o, i);
							n(e(s, t, i))
						} catch (l) {
							r(l)
						}
					}))
				}
				if (l < 2) throw new Error("Too few arguments provided");
				2 === l ? (r = o, o = t, t = i = void 0) : 3 === l && (t.getContext && void 0 === r ? (r = i, i = void 0) : (r = i, i = o, o = t, t = void 0));
				try {
					var c = a.create(o, i);
					r(null, e(c, t, i))
				} catch (d) {
					r(d)
				}
			}
			t.create = a.create, t.toCanvas = s.bind(null, i.render), t.toDataURL = s.bind(null, i.renderToDataURL), t.toString = s.bind(null, (function(e, t, o) {
				return r.render(e, o)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, o = n(e), a = 145 === o ? 26 : 2 * Math.ceil((o - 13) / (2 * t - 2)), i = [o - 7], r = 1; r < t - 1; r++) i[r] = i[r - 1] - a;
				return i.push(6), i.reverse()
			}, t.getPositions = function(e) {
				for (var o = [], n = t.getRowColCoords(e), a = n.length, i = 0; i < a; i++)
					for (var r = 0; r < a; r++) 0 === i && 0 === r || 0 === i && r === a - 1 || i === a - 1 && 0 === r || o.push([n[i], n[r]]);
				return o
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js"),
				a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = n.ALPHANUMERIC, this.data = e
			}
			i.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var o = 45 * a.indexOf(this.data[t]);
					o += a.indexOf(this.data[t + 1]), e.put(o, 11)
				}
				this.data.length % 2 && e.put(a.indexOf(this.data[t]), 6)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/bit-buffer.js": function(e, t) {
			function o() {
				this.buffer = [], this.length = 0
			}
			o.prototype = {
				get: function(e) {
					var t = Math.floor(e / 8);
					return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
				},
				put: function(e, t) {
					for (var o = 0; o < t; o++) this.putBit(1 == (e >>> t - o - 1 & 1))
				},
				getLengthInBits: function() {
					return this.length
				},
				putBit: function(e) {
					var t = Math.floor(this.length / 8);
					this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
				}
			}, e.exports = o
		},
		"./node_modules/qrcode/lib/core/bit-matrix.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function a(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e)
			}
			a.prototype.set = function(e, t, o, n) {
				var a = e * this.size + t;
				this.data[a] = o, n && (this.reservedBit[a] = !0)
			}, a.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, a.prototype.xor = function(e, t, o) {
				this.data[e * this.size + t] ^= o
			}, a.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = o("./node_modules/qrcode/lib/core/mode.js");

			function i(e) {
				this.mode = a.BYTE, this.data = n.from(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (var t = 0, o = this.data.length; t < o; t++) e.put(this.data[t], 8)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
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
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case n.L:
						return i[4 * (e - 1) + 0];
					case n.M:
						return i[4 * (e - 1) + 1];
					case n.Q:
						return i[4 * (e - 1) + 2];
					case n.H:
						return i[4 * (e - 1) + 3];
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
			}, t.from = function(e, o) {
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
					return o
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = n(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/utils.js"),
				a = n.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var o = e.bit << 3 | t, i = o << 10; n.getBCHDigit(i) - a >= 0;) i ^= 1335 << n.getBCHDigit(i) - a;
				return 21522 ^ (o << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = n.alloc(512),
				i = n.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) a[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) a[t] = a[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return i[e]
			}, t.exp = function(e) {
				return a[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : a[i[e] + i[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js"),
				a = o("./node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = n.KANJI, this.data = e
			}
			i.getBitsLength = function(e) {
				return 13 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				var t;
				for (t = 0; t < this.data.length; t++) {
					var o = a.toSJIS(this.data[t]);
					if (o >= 33088 && o <= 40956) o -= 33088;
					else {
						if (!(o >= 57408 && o <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						o -= 49472
					}
					o = 192 * (o >>> 8 & 255) + (255 & o), e.put(o, 13)
				}
			}, e.exports = i
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
			var o = 3,
				n = 3,
				a = 40,
				i = 10;

			function r(e, o, n) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (o + n) % 2 == 0;
					case t.Patterns.PATTERN001:
						return o % 2 == 0;
					case t.Patterns.PATTERN010:
						return n % 3 == 0;
					case t.Patterns.PATTERN011:
						return (o + n) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(o / 2) + Math.floor(n / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return o * n % 2 + o * n % 3 == 0;
					case t.Patterns.PATTERN110:
						return (o * n % 2 + o * n % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (o * n % 3 + (o + n) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, n = 0, a = 0, i = 0, r = null, s = null, l = 0; l < t; l++) {
					a = i = 0, r = s = null;
					for (var u = 0; u < t; u++) {
						var c = e.get(l, u);
						c === r ? a++ : (a >= 5 && (n += o + (a - 5)), r = c, a = 1), (c = e.get(u, l)) === s ? i++ : (i >= 5 && (n += o + (i - 5)), s = c, i = 1)
					}
					a >= 5 && (n += o + (a - 5)), i >= 5 && (n += o + (i - 5))
				}
				return n
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, o = 0, a = 0; a < t - 1; a++)
					for (var i = 0; i < t - 1; i++) {
						var r = e.get(a, i) + e.get(a, i + 1) + e.get(a + 1, i) + e.get(a + 1, i + 1);
						4 !== r && 0 !== r || o++
					}
				return o * n
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, o = 0, n = 0, i = 0, r = 0; r < t; r++) {
					n = i = 0;
					for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(r, s), s >= 10 && (1488 === n || 93 === n) && o++, i = i << 1 & 2047 | e.get(s, r), s >= 10 && (1488 === i || 93 === i) && o++
				}
				return o * a
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, o = e.data.length, n = 0; n < o; n++) t += e.data[n];
				return Math.abs(Math.ceil(100 * t / o / 5) - 10) * i
			}, t.applyMask = function(e, t) {
				for (var o = t.size, n = 0; n < o; n++)
					for (var a = 0; a < o; a++) t.isReserved(a, n) || t.xor(a, n, r(e, a, n))
			}, t.getBestMask = function(e, o) {
				for (var n = Object.keys(t.Patterns).length, a = 0, i = 1 / 0, r = 0; r < n; r++) {
					o(r), t.applyMask(r, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(r, e), s < i && (i = s, a = r)
				}
				return a
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/version-check.js"),
				a = o("./node_modules/qrcode/lib/core/regex.js");
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
				return a.testNumeric(e) ? t.NUMERIC : a.testAlphanumeric(e) ? t.ALPHANUMERIC : a.testKanji(e) ? t.KANJI : t.BYTE
			}, t.toString = function(e) {
				if (e && e.id) return e.id;
				throw new Error("Invalid mode")
			}, t.isValid = function(e) {
				return e && e.bit && e.ccBits
			}, t.from = function(e, o) {
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
					return o
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js");

			function a(e) {
				this.mode = n.NUMERIC, this.data = e.toString()
			}
			a.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, a.prototype.getLength = function() {
				return this.data.length
			}, a.prototype.getBitsLength = function() {
				return a.getBitsLength(this.data.length)
			}, a.prototype.write = function(e) {
				var t, o, n;
				for (t = 0; t + 3 <= this.data.length; t += 3) o = this.data.substr(t, 3), n = parseInt(o, 10), e.put(n, 10);
				var a = this.data.length - t;
				a > 0 && (o = this.data.substr(t), n = parseInt(o, 10), e.put(n, 3 * a + 1))
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = o("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var o = n.alloc(e.length + t.length - 1), i = 0; i < e.length; i++)
					for (var r = 0; r < t.length; r++) o[i + r] ^= a.mul(e[i], t[r]);
				return o
			}, t.mod = function(e, t) {
				for (var o = n.from(e); o.length - t.length >= 0;) {
					for (var i = o[0], r = 0; r < t.length; r++) o[r] ^= a.mul(t[r], i);
					for (var s = 0; s < o.length && 0 === o[s];) s++;
					o = o.slice(s)
				}
				return o
			}, t.generateECPolynomial = function(e) {
				for (var o = n.from([1]), i = 0; i < e; i++) o = t.mul(o, [1, a.exp(i)]);
				return o
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = o("./node_modules/qrcode/lib/core/utils.js"),
				i = o("./node_modules/qrcode/lib/core/error-correction-level.js"),
				r = o("./node_modules/qrcode/lib/core/bit-buffer.js"),
				s = o("./node_modules/qrcode/lib/core/bit-matrix.js"),
				l = o("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				u = o("./node_modules/qrcode/lib/core/finder-pattern.js"),
				c = o("./node_modules/qrcode/lib/core/mask-pattern.js"),
				d = o("./node_modules/qrcode/lib/core/error-correction-code.js"),
				m = o("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = o("./node_modules/qrcode/lib/core/version.js"),
				p = o("./node_modules/qrcode/lib/core/format-info.js"),
				y = o("./node_modules/qrcode/lib/core/mode.js"),
				b = o("./node_modules/qrcode/lib/core/segments.js"),
				f = o("./node_modules/qrcode/node_modules/isarray/index.js");

			function g(e, t, o) {
				var n, a, i = e.size,
					r = p.getEncodedBits(t, o);
				for (n = 0; n < 15; n++) a = 1 == (r >> n & 1), n < 6 ? e.set(n, 8, a, !0) : n < 8 ? e.set(n + 1, 8, a, !0) : e.set(i - 15 + n, 8, a, !0), n < 8 ? e.set(8, i - n - 1, a, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, a, !0) : e.set(8, 15 - n - 1, a, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function w(e, t, o) {
				var i = new r;
				o.forEach((function(t) {
					i.put(t.mode.bit, 4), i.put(t.getLength(), y.getCharCountIndicator(t.mode, e)), t.write(i)
				}));
				var s = 8 * (a.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, t));
				for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var l = (s - i.getLengthInBits()) / 8, u = 0; u < l; u++) i.put(u % 2 ? 17 : 236, 8);
				return function(e, t, o) {
					for (var i = a.getSymbolTotalCodewords(t), r = d.getTotalCodewordsCount(t, o), s = i - r, l = d.getBlocksCount(t, o), u = l - i % l, c = Math.floor(i / l), h = Math.floor(s / l), p = h + 1, y = c - h, b = new m(y), f = 0, g = new Array(l), w = new Array(l), v = 0, k = n.from(e.buffer), _ = 0; _ < l; _++) {
						var P = _ < u ? h : p;
						g[_] = k.slice(f, f + P), w[_] = b.encode(g[_]), f += P, v = Math.max(v, P)
					}
					var E, C, S = n.alloc(i),
						I = 0;
					for (E = 0; E < v; E++)
						for (C = 0; C < l; C++) E < g[C].length && (S[I++] = g[C][E]);
					for (E = 0; E < y; E++)
						for (C = 0; C < l; C++) S[I++] = w[C][E];
					return S
				}(i, e, t)
			}

			function v(e, t, o, n) {
				var i;
				if (f(e)) i = b.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var r = t;
					if (!r) {
						var d = b.rawSplit(e);
						r = h.getBestVersionForData(d, o)
					}
					i = b.fromString(e, r || 40)
				}
				var m = h.getBestVersionForData(i, o);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var p = w(t, o, i),
					y = a.getSymbolSize(t),
					v = new s(y);
				return function(e, t) {
						for (var o = e.size, n = u.getPositions(t), a = 0; a < n.length; a++)
							for (var i = n[a][0], r = n[a][1], s = -1; s <= 7; s++)
								if (!(i + s <= -1 || o <= i + s))
									for (var l = -1; l <= 7; l++) r + l <= -1 || o <= r + l || (s >= 0 && s <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && l >= 2 && l <= 4 ? e.set(i + s, r + l, !0, !0) : e.set(i + s, r + l, !1, !0))
					}(v, t),
					function(e) {
						for (var t = e.size, o = 8; o < t - 8; o++) {
							var n = o % 2 == 0;
							e.set(o, 6, n, !0), e.set(6, o, n, !0)
						}
					}(v),
					function(e, t) {
						for (var o = l.getPositions(t), n = 0; n < o.length; n++)
							for (var a = o[n][0], i = o[n][1], r = -2; r <= 2; r++)
								for (var s = -2; s <= 2; s++) - 2 === r || 2 === r || -2 === s || 2 === s || 0 === r && 0 === s ? e.set(a + r, i + s, !0, !0) : e.set(a + r, i + s, !1, !0)
					}(v, t), g(v, o, 0), t >= 7 && function(e, t) {
						for (var o, n, a, i = e.size, r = h.getEncodedBits(t), s = 0; s < 18; s++) o = Math.floor(s / 3), n = s % 3 + i - 8 - 3, a = 1 == (r >> s & 1), e.set(o, n, a, !0), e.set(n, o, a, !0)
					}(v, t),
					function(e, t) {
						for (var o = e.size, n = -1, a = o - 1, i = 7, r = 0, s = o - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var l = 0; l < 2; l++)
									if (!e.isReserved(a, s - l)) {
										var u = !1;
										r < t.length && (u = 1 == (t[r] >>> i & 1)), e.set(a, s - l, u), -1 === --i && (r++, i = 7)
									} if ((a += n) < 0 || o <= a) {
									a -= n, n = -n;
									break
								}
							}
					}(v, p), isNaN(n) && (n = c.getBestMask(v, g.bind(null, v, o))), c.applyMask(n, v), g(v, o, n), {
						modules: v,
						version: t,
						errorCorrectionLevel: o,
						maskPattern: n,
						segments: i
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var o, n, r = i.M;
				return void 0 !== t && (r = i.from(t.errorCorrectionLevel, i.M), o = h.from(t.version), n = c.from(t.maskPattern), t.toSJISFunc && a.setToSJISFunction(t.toSJISFunc)), v(e, o, r, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = o("./node_modules/qrcode/lib/core/polynomial.js"),
				i = o("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function r(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			r.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = a.generateECPolynomial(this.degree)
			}, r.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = n.alloc(this.degree),
					o = i.concat([e, t], e.length + this.degree),
					r = a.mod(o, this.genPoly),
					s = this.degree - r.length;
				if (s > 0) {
					var l = n.alloc(this.degree);
					return r.copy(l, s), l
				}
				return r
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var o = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (o = o.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(o, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var a = new RegExp("^" + o + "$"),
				i = new RegExp("^[0-9]+$"),
				r = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return a.test(e)
			}, t.testNumeric = function(e) {
				return i.test(e)
			}, t.testAlphanumeric = function(e) {
				return r.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js"),
				a = o("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = o("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				r = o("./node_modules/qrcode/lib/core/byte-data.js"),
				s = o("./node_modules/qrcode/lib/core/kanji-data.js"),
				l = o("./node_modules/qrcode/lib/core/regex.js"),
				u = o("./node_modules/qrcode/lib/core/utils.js"),
				c = o("./node_modules/dijkstrajs/dijkstra.js");

			function d(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function m(e, t, o) {
				for (var n, a = []; null !== (n = e.exec(o));) a.push({
					data: n[0],
					index: n.index,
					mode: t,
					length: n[0].length
				});
				return a
			}

			function h(e) {
				var t, o, a = m(l.NUMERIC, n.NUMERIC, e),
					i = m(l.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return u.isKanjiModeEnabled() ? (t = m(l.BYTE, n.BYTE, e), o = m(l.KANJI, n.KANJI, e)) : (t = m(l.BYTE_KANJI, n.BYTE, e), o = []), a.concat(i, t, o).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function p(e, t) {
				switch (t) {
					case n.NUMERIC:
						return a.getBitsLength(e);
					case n.ALPHANUMERIC:
						return i.getBitsLength(e);
					case n.KANJI:
						return s.getBitsLength(e);
					case n.BYTE:
						return r.getBitsLength(e)
				}
			}

			function y(e, t) {
				var o, l = n.getBestModeForData(e);
				if ((o = n.from(t, l)) !== n.BYTE && o.bit < l.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(o) + ".\n Suggested mode is: " + n.toString(l));
				switch (o !== n.KANJI || u.isKanjiModeEnabled() || (o = n.BYTE), o) {
					case n.NUMERIC:
						return new a(e);
					case n.ALPHANUMERIC:
						return new i(e);
					case n.KANJI:
						return new s(e);
					case n.BYTE:
						return new r(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(y(t, null)) : t.data && e.push(y(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, o) {
				for (var a = function(e, t) {
						for (var o = {}, a = {
								start: {}
							}, i = ["start"], r = 0; r < e.length; r++) {
							for (var s = e[r], l = [], u = 0; u < s.length; u++) {
								var c = s[u],
									d = "" + r + u;
								l.push(d), o[d] = {
									node: c,
									lastCount: 0
								}, a[d] = {};
								for (var m = 0; m < i.length; m++) {
									var h = i[m];
									o[h] && o[h].node.mode === c.mode ? (a[h][d] = p(o[h].lastCount + c.length, c.mode) - p(o[h].lastCount, c.mode), o[h].lastCount += c.length) : (o[h] && (o[h].lastCount = c.length), a[h][d] = p(c.length, c.mode) + 4 + n.getCharCountIndicator(c.mode, t))
								}
							}
							i = l
						}
						for (m = 0; m < i.length; m++) a[i[m]].end = 0;
						return {
							map: a,
							table: o
						}
					}(function(e) {
						for (var t = [], o = 0; o < e.length; o++) {
							var a = e[o];
							switch (a.mode) {
								case n.NUMERIC:
									t.push([a, {
										data: a.data,
										mode: n.ALPHANUMERIC,
										length: a.length
									}, {
										data: a.data,
										mode: n.BYTE,
										length: a.length
									}]);
									break;
								case n.ALPHANUMERIC:
									t.push([a, {
										data: a.data,
										mode: n.BYTE,
										length: a.length
									}]);
									break;
								case n.KANJI:
									t.push([a, {
										data: a.data,
										mode: n.BYTE,
										length: d(a.data)
									}]);
									break;
								case n.BYTE:
									t.push([{
										data: a.data,
										mode: n.BYTE,
										length: d(a.data)
									}])
							}
						}
						return t
					}(h(e, u.isKanjiModeEnabled())), o), i = c.find_path(a.map, "start", "end"), r = [], s = 1; s < i.length - 1; s++) r.push(a.table[i[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var o = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return o && o.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(r))
			}, t.rawSplit = function(e) {
				return t.fromArray(h(e, u.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, t) {
			var o, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
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
				o = e
			}, t.isKanjiModeEnabled = function() {
				return void 0 !== o
			}, t.toSJIS = function(e) {
				return o(e)
			}
		},
		"./node_modules/qrcode/lib/core/version-check.js": function(e, t) {
			t.isValid = function(e) {
				return !isNaN(e) && e >= 1 && e <= 40
			}
		},
		"./node_modules/qrcode/lib/core/version.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/utils.js"),
				a = o("./node_modules/qrcode/lib/core/error-correction-code.js"),
				i = o("./node_modules/qrcode/lib/core/error-correction-level.js"),
				r = o("./node_modules/qrcode/lib/core/mode.js"),
				s = o("./node_modules/qrcode/lib/core/version-check.js"),
				l = o("./node_modules/qrcode/node_modules/isarray/index.js"),
				u = n.getBCHDigit(7973);

			function c(e, t) {
				return r.getCharCountIndicator(e, t) + 4
			}

			function d(e, t) {
				var o = 0;
				return e.forEach((function(e) {
					var n = c(e.mode, t);
					o += n + e.getBitsLength()
				})), o
			}
			t.from = function(e, t) {
				return s.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, o) {
				if (!s.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === o && (o = r.BYTE);
				var i = 8 * (n.getSymbolTotalCodewords(e) - a.getTotalCodewordsCount(e, t));
				if (o === r.MIXED) return i;
				var l = i - c(o, e);
				switch (o) {
					case r.NUMERIC:
						return Math.floor(l / 10 * 3);
					case r.ALPHANUMERIC:
						return Math.floor(l / 11 * 2);
					case r.KANJI:
						return Math.floor(l / 13);
					case r.BYTE:
					default:
						return Math.floor(l / 8)
				}
			}, t.getBestVersionForData = function(e, o) {
				var n, a = i.from(o, i.M);
				if (l(e)) {
					if (e.length > 1) return function(e, o) {
						for (var n = 1; n <= 40; n++) {
							if (d(e, n) <= t.getCapacity(n, o, r.MIXED)) return n
						}
					}(e, a);
					if (0 === e.length) return 1;
					n = e[0]
				} else n = e;
				return function(e, o, n) {
					for (var a = 1; a <= 40; a++)
						if (o <= t.getCapacity(a, n, e)) return a
				}(n.mode, n.getLength(), a)
			}, t.getEncodedBits = function(e) {
				if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; n.getBCHDigit(t) - u >= 0;) t ^= 7973 << n.getBCHDigit(t) - u;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, o) {
				var a = o,
					i = t;
				void 0 !== a || t && t.getContext || (a = t, t = void 0), t || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), a = n.getOptions(a);
				var r = n.getImageWidth(e.modules.size, a),
					s = i.getContext("2d"),
					l = s.createImageData(r, r);
				return n.qrToImageData(l.data, e, a),
					function(e, t, o) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = o, t.width = o, t.style.height = o + "px", t.style.width = o + "px"
					}(s, i, r), s.putImageData(l, 0, 0), i
			}, t.renderToDataURL = function(e, o, n) {
				var a = n;
				void 0 !== a || o && o.getContext || (a = o, o = void 0), a || (a = {});
				var i = t.render(e, o, a),
					r = a.type || "image/png",
					s = a.rendererOpts || {};
				return i.toDataURL(r, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/renderer/utils.js");

			function a(e, t) {
				var o = e.a / 255,
					n = t + '="' + e.hex + '"';
				return o < 1 ? n + " " + t + '-opacity="' + o.toFixed(2).slice(1) + '"' : n
			}

			function i(e, t, o) {
				var n = e + t;
				return void 0 !== o && (n += " " + o), n
			}
			t.render = function(e, t, o) {
				var r = n.getOptions(t),
					s = e.modules.size,
					l = e.modules.data,
					u = s + 2 * r.margin,
					c = r.color.light.a ? "<path " + a(r.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
					d = "<path " + a(r.color.dark, "stroke") + ' d="' + function(e, t, o) {
						for (var n = "", a = 0, r = !1, s = 0, l = 0; l < e.length; l++) {
							var u = Math.floor(l % t),
								c = Math.floor(l / t);
							u || r || (r = !0), e[l] ? (s++, l > 0 && u > 0 && e[l - 1] || (n += r ? i("M", u + o, .5 + c + o) : i("m", a, 0), a = 0, r = !1), u + 1 < t && e[l + 1] || (n += i("h", s), s = 0)) : a++
						}
						return n
					}(l, s, r.margin) + '"/>',
					m = 'viewBox="0 0 ' + u + " " + u + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + c + d + "</svg>\n";
				return "function" == typeof o && o(null, h), h
			}
		},
		"./node_modules/qrcode/lib/renderer/utils.js": function(e, t) {
			function o(e) {
				if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw new Error("Color should be defined as hex string");
				var t = e.slice().replace("#", "").split("");
				if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
				3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
					return [e, e]
				})))), 6 === t.length && t.push("F", "F");
				var o = parseInt(t.join(""), 16);
				return {
					r: o >> 24 & 255,
					g: o >> 16 & 255,
					b: o >> 8 & 255,
					a: 255 & o,
					hex: "#" + t.slice(0, 6).join("")
				}
			}
			t.getOptions = function(e) {
				e || (e = {}), e.color || (e.color = {});
				var t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
					n = e.width && e.width >= 21 ? e.width : void 0,
					a = e.scale || 4;
				return {
					width: n,
					scale: n ? 4 : a,
					margin: t,
					color: {
						dark: o(e.color.dark || "#000000ff"),
						light: o(e.color.light || "#ffffffff")
					},
					type: e.type,
					rendererOpts: e.rendererOpts || {}
				}
			}, t.getScale = function(e, t) {
				return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
			}, t.getImageWidth = function(e, o) {
				var n = t.getScale(e, o);
				return Math.floor((e + 2 * o.margin) * n)
			}, t.qrToImageData = function(e, o, n) {
				for (var a = o.modules.size, i = o.modules.data, r = t.getScale(a, n), s = Math.floor((a + 2 * n.margin) * r), l = n.margin * r, u = [n.color.light, n.color.dark], c = 0; c < s; c++)
					for (var d = 0; d < s; d++) {
						var m = 4 * (c * s + d),
							h = n.color.light;
						if (c >= l && d >= l && c < s - l && d < s - l) h = u[i[Math.floor((c - l) / r) * a + Math.floor((d - l) / r)] ? 1 : 0];
						e[m++] = h.r, e[m++] = h.g, e[m++] = h.b, e[m] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/qrcode/node_modules/isarray/index.js");
			i.TYPED_ARRAY_SUPPORT = function() {
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
			var a = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(e, t, o) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? l(this, e) : function(e, t, o, n) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, o, n) {
						if (o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < o + (n || 0)) throw new RangeError("'length' is out of bounds");
						var a;
						a = void 0 === o && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, o) : new Uint8Array(t, o, n);
						i.TYPED_ARRAY_SUPPORT ? a.__proto__ = i.prototype : a = u(e, a);
						return a
					}(e, t, o, n);
					if ("string" == typeof t) return function(e, t) {
						var o = 0 | d(t),
							n = s(e, o),
							a = n.write(t);
						a !== o && (n = n.slice(0, a));
						return n
					}(e, t);
					return function(e, t) {
						if (i.isBuffer(t)) {
							var o = 0 | r(t.length),
								n = s(e, o);
							return 0 === n.length ? n : (t.copy(n, 0, 0, o), n)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (a = t.length) != a ? s(e, 0) : u(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return u(e, t.data)
						}
						var a;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, o) : new i(e, t, o)
			}

			function r(e) {
				if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var o;
				return i.TYPED_ARRAY_SUPPORT ? (o = new Uint8Array(t)).__proto__ = i.prototype : (null === (o = e) && (o = new i(t)), o.length = t), o
			}

			function l(e, t) {
				var o = s(e, t < 0 ? 0 : 0 | r(t));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) o[n] = 0;
				return o
			}

			function u(e, t) {
				for (var o = t.length < 0 ? 0 : 0 | r(t.length), n = s(e, o), a = 0; a < o; a += 1) n[a] = 255 & t[a];
				return n
			}

			function c(e, t) {
				var o;
				t = t || 1 / 0;
				for (var n = e.length, a = null, i = [], r = 0; r < n; ++r) {
					if ((o = e.charCodeAt(r)) > 55295 && o < 57344) {
						if (!a) {
							if (o > 56319) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (r + 1 === n) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							a = o;
							continue
						}
						if (o < 56320) {
							(t -= 3) > -1 && i.push(239, 191, 189), a = o;
							continue
						}
						o = 65536 + (a - 55296 << 10 | o - 56320)
					} else a && (t -= 3) > -1 && i.push(239, 191, 189);
					if (a = null, o < 128) {
						if ((t -= 1) < 0) break;
						i.push(o)
					} else if (o < 2048) {
						if ((t -= 2) < 0) break;
						i.push(o >> 6 | 192, 63 & o | 128)
					} else if (o < 65536) {
						if ((t -= 3) < 0) break;
						i.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
					} else {
						if (!(o < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						i.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
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
			})), i.prototype.write = function(e, t, o) {
				void 0 === t ? (o = this.length, t = 0) : void 0 === o && "string" == typeof t ? (o = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(o) ? o |= 0 : o = void 0);
				var n = this.length - t;
				if ((void 0 === o || o > n) && (o = n), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, o, n) {
					return function(e, t, o, n) {
						for (var a = 0; a < n && !(a + o >= t.length || a >= e.length); ++a) t[a + o] = e[a];
						return a
					}(c(t, e.length - o), e, o, n)
				}(this, e, t, o)
			}, i.prototype.slice = function(e, t) {
				var o, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), i.TYPED_ARRAY_SUPPORT)(o = this.subarray(e, t)).__proto__ = i.prototype;
				else {
					var a = t - e;
					o = new i(a, void 0);
					for (var r = 0; r < a; ++r) o[r] = this[r + e]
				}
				return o
			}, i.prototype.copy = function(e, t, o, n) {
				if (o || (o = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < o && (n = o), n === o) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - o && (n = e.length - t + o);
				var a, r = n - o;
				if (this === e && o < t && t < n)
					for (a = r - 1; a >= 0; --a) e[a + t] = this[a + o];
				else if (r < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (a = 0; a < r; ++a) e[a + t] = this[a + o];
				else Uint8Array.prototype.set.call(e, this.subarray(o, o + r), t);
				return r
			}, i.prototype.fill = function(e, t, o) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, o = this.length) : "string" == typeof o && (o = this.length), 1 === e.length) {
						var n = e.charCodeAt(0);
						n < 256 && (e = n)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < o) throw new RangeError("Out of range index");
				if (o <= t) return this;
				var a;
				if (t >>>= 0, o = void 0 === o ? this.length : o >>> 0, e || (e = 0), "number" == typeof e)
					for (a = t; a < o; ++a) this[a] = e;
				else {
					var r = i.isBuffer(e) ? e : new i(e),
						s = r.length;
					for (a = 0; a < o - t; ++a) this[a + t] = r[a % s]
				}
				return this
			}, i.concat = function(e, t) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var o;
				if (void 0 === t)
					for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
				var a = l(null, t),
					r = 0;
				for (o = 0; o < e.length; ++o) {
					var u = e[o];
					if (!i.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
					u.copy(a, r), r += u.length
				}
				return a
			}, i.byteLength = d, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new i(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new i(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, t) {
			var o = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == o.call(e)
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, o) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/classNames/index.ts"),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				s = o("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = o.n(s);
			const {
				fbt: u
			} = o("./node_modules/fbt/lib/FbtPublic.js"), c = ({
				className: e,
				highContrast: t,
				onClick: o
			}) => i.a.createElement("button", {
				onClick: o,
				className: Object(n.a)(l.a.closeButton, {
					[l.a.highContrast]: t
				}, e),
				"aria-label": u._("Close", null, {
					hk: "3Qarlp"
				})
			}, i.a.createElement(r.b, {
				className: l.a.closeIcon
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less": function(e, t, o) {
			e.exports = {
				bullet: "_2UPSb1bt_AsmpAwyZ46B38",
				circle: "_2_70m35EVFz3WnPe2CwYaG",
				number: "_3LihX-GKXER0sZAd9F9_Id"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				a = o.n(n),
				i = o("./src/reddit/constants/colors.ts"),
				r = o("./src/reddit/helpers/styles/smartTextColor.ts"),
				s = o("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				l = o.n(s);

			function u(e) {
				const {
					index: t,
					children: o,
					color: n
				} = e, s = n && Object(r.a)(n, void 0, i.a.white);
				return a.a.createElement("div", {
					className: l.a.bullet
				}, a.a.createElement("div", {
					className: l.a.circle,
					style: {
						backgroundColor: n,
						color: s
					}
				}, a.a.createElement("span", {
					className: l.a.number
				}, t)), a.a.createElement("div", null, o))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/qrcode/lib/browser.js"),
				a = o.n(n),
				i = o("./node_modules/react/index.js"),
				r = o.n(i),
				s = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = o("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class u extends r.a.Component {
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
					const e = await a.a.toDataURL(this.props.url, {
						color: {
							dark: Object(l.a)(this.props).titleText,
							light: Object(l.a)(this.props).body
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
					return e && r.a.createElement("img", {
						src: e,
						className: this.props.className
					})
				}
			}
			t.a = Object(s.a)(u)
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return f
			}));
			var n = o("./node_modules/react/index.js"),
				a = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				s = o("./src/higherOrderComponents/asModal/index.tsx"),
				l = o("./src/lib/addQueryParams/index.ts"),
				u = o("./src/reddit/icons/svgs/Close/index.tsx"),
				c = o("./src/reddit/selectors/user.ts"),
				d = o("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = o("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				h = o("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				p = o.n(h);
			const {
				fbt: y
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			const b = Object(r.c)({
					userId: e => {
						const t = Object(c.k)(e);
						return t ? t.id : ""
					}
				}),
				f = Object(i.b)(b)((function(e) {
					const {
						onClose: t,
						userId: o
					} = e;
					return a.a.createElement("div", {
						className: p.a.container
					}, a.a.createElement("header", {
						className: p.a.header
					}, a.a.createElement("div", {
						className: p.a.title
					}, y._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), a.a.createElement(u.a, {
						className: p.a.closeButton,
						onClick: t
					})), a.a.createElement("div", {
						className: p.a.body
					}, a.a.createElement("section", {
						className: p.a.leftSection
					}, a.a.createElement("div", {
						className: p.a.sectionHeader
					}, y._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), a.a.createElement("div", {
						className: p.a.content
					}, a.a.createElement(d.a, {
						index: "1"
					}, y._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), a.a.createElement(d.a, {
						index: "2"
					}, y._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), a.a.createElement(d.a, {
						index: "3"
					}, y._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), a.a.createElement(d.a, {
						index: "4"
					}, y._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), a.a.createElement("section", {
						className: p.a.rightSection
					}, a.a.createElement(m.a, {
						url: Object(l.a)("http://www.reddit.com/vault/", {
							u: o
						}),
						scale: 5
					}))))
				}));
			t.b = Object(s.a)(f)
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return i
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "f", (function() {
				return u
			})), o.d(t, "g", (function() {
				return c
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "a", (function() {
				return m
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...Object(n.m)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(n.hb)(t)
				}),
				i = () => a("view"),
				r = () => a("tap"),
				s = () => a("dismiss"),
				l = () => e => ({
					...Object(n.m)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				u = () => e => ({
					...Object(n.m)(e),
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				c = e => t => ({
					...Object(n.m)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				d = () => e => ({
					...Object(n.m)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => ({
					...Object(n.m)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(n.ib)(t, e)
				})
		},
		"./src/reddit/icons/svgs/ArrowRightThin/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				a = o.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
			}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, o) {
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
				hidden: "_2BV3vldc4MxhlrcUmzjGR_",
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/floatingMenuButton.m.less": function(e, t, o) {
			e.exports = {
				container: "_3XsRSKNK-knnbQqK5rBnsJ",
				iconContainer: "_2rkXJgirbHrzpuhJs803P4",
				rotated: "_3ZZ9F08bKDYNGthWmSy4Dw",
				menuIcon: "_1mLHEqdVX-yfSGDKAmCwcF"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_81E2YESAdbLBEPdlCjiWx",
				menuContainer: "_3os0Eb9YY4sdudgVb6wagz",
				mobileMenuContainer: "_2z4mOlcBSFl3fYxFC1gxlD",
				menu: "_1jgP4w2Z18f04dk6A3tbRN",
				mobileMenu: "_2Y92kPDUP8agVAuBlHhX0s",
				floatingMenuButton: "_1NJ49DYRPRJ9Cq3MfVktfl",
				content: "Dy49ZLgHjDlSQA8oba7h",
				largeCenteredImage: "vvaihHNP51aj6GLYESKE8",
				smallTitleImage: "_2EXVfE7qOnxkNg5gZpJYEY",
				sideImageContainer: "_2koAQEaqF8z7uyv_6oCHml"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less": function(e, t, o) {
			e.exports = {
				container: "_3RJzS_cAXEXOu1Y__ViOWt",
				section: "_3hdgyv5SB3KEMzi0Q7ndaY",
				categoryHeader: "_3IMQI4BfhAv-jdQd8-IRxc",
				menuItem: "_2seWMu6B5kaYQ7lpTW6akn",
				active: "_3jsHkW_28FYYDl7q470ton",
				nightmode: "jXXFN7oueWlcKG2qUXsrs"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less": function(e, t, o) {
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
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_39s4Rg_2-Yvhg8_j7HmwHz",
				content: "_21JaPYggXVyLsz9Gm0gafa",
				logo: "_1suWmsdOylQibxtvENDH0J",
				link: "FSlJwTR_glxbHijEQl1LP",
				spacer: "_2M28l0MkIvJi8JhKE7Puf"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_3hCEJSoCggYeV4_Vzkfj6p",
				nightmode: "_3t1hqqIBXV1ISlXksPyR4v",
				logo: "I0sVgzsD8iUdHKzDn3w8a",
				snoo: "iCZwiIk1X_P-1bWrMlBo9",
				wordmark: "_3IIgVNEfc4FHb6Uabcf5XO",
				sections: "_2dnnlMMF10lQC5D3XckQWq",
				sectionText: "_3fpURPqNv7UjrUQUoOgWlU",
				joinWaitlist: "_35PGwOCrj4RRPhOFBN4lI9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less": function(e, t, o) {
			e.exports = {
				container: "_1pYG3qIuM4DcrXBl4ngRLH",
				nightmode: "_13L8wx4qz4Fqb03MSVwQvz",
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
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less": function(e, t, o) {
			e.exports = {
				title: "_34fNgU8PzDdn8N1dy3ivp5",
				benefitsContainer: "igYwgfFD3VTXbAuDpR11Z",
				expanded: "gpTg3u93gk7ivOpu_dFw1"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2g4zHxTR8YPXf6MxxTZk7x",
				mainSceneMaxWidthContainer: "_3UsELnL-t4fWupdTjbCR_V",
				mainSceneContainer: "_3RjIgU8tOgxONqCDsLnZVR",
				fallbackStaticImage: "_2xZ5UC6gTSmPmIJA5XaNlG",
				mainScene: "_1rRH8io2oTfod98xPvCKtZ",
				title: "_2mxGnwsJiO-qvSzpOulRFX",
				super: "_3eb9BDGx0nyIh-oCpZbHnQ",
				subtitle: "_3m3_p5jybv4MaYrJ2PVdD-",
				bodyText: "XofGmuW13eskj1YFcBtaR",
				waitlistButton: "_3P-mpJEZcqloYGIVLElRwC"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/carouselModal.m.less": function(e, t, o) {
			e.exports = {
				container: "_9EyzkvU_juhro9apbxsed"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_1jdWtwUDsZUYK8cKl4ShoL",
				image: "_21S4Zcb7SWOn26f2PHTYVJ",
				textContainer: "_1KUhJVhvhYgJy3UP7AVh8A",
				title: "_1_XEsvgDaW6Ipmo8_EbUvx",
				body: "_30rAKfIDOJdS0e_nAZ0SUC",
				button: "_1PiFEnhFGjcOJ8DJpZEZrs",
				buttonIcon: "_5enw_h_QNP0edxOuTIgVT",
				modal: "_3AQQcIW5Bg4kBV6tYo-SiG",
				modalOverlay: "_3OX4exO0VgI32mkudOynM4"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less": function(e, t, o) {
			e.exports = {
				background: "_2ge27xQx1Gt9ZLEAF5G56e",
				snoo: "_2w697DOO736IN0y8x1G_r5",
				subtitle: "_1knd7dCNDtGNteCtEtWMI4",
				docsButton: "_3WXyHuUGgkzB-1Qc3roRsZ",
				docsIcon: "_1Y7YQr9nJOHYMXIJV9bR10",
				docTextShort: "_9B9hYKnRsbpS0xQ6bTVI_",
				docTextFull: "_1cBiAI3Lmkt0Hm6YzkDtth"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less": function(e, t, o) {
			e.exports = {
				container: "_2JWWvW2ewMO4EJh4aah_Y7",
				textSection: "_3LHXd49gDHLRyBpMYidVtJ",
				textContainer: "_2jBZPVax0cA0Md6DhqyAo0",
				title: "_3iRk7kbiRtkK0jjfcKqc-A",
				imageSection: "_3Csuw0qH6o42AjO_1RWieH",
				image: "_3KQSH2itVDb7THQByNoRg_"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less": function(e, t, o) {
			e.exports = {
				title: "qs7iEx9A8SgBw6iazade7",
				subtitle: "_1QaW2mV2hdesrU3AoIJMIJ",
				featureContainer: "_2EyftCjwIT4OedYkYEeLWp",
				bodyText: "_1eyjP53kp-6YZvRBsjsrJZ",
				blackText: "_2tWli1aET4UuzyDIVL2EBk",
				bodyTitle: "_30cHBBkgHrSZwzZK6bYcS",
				bodyDetail: "_2CQLcOyg-dqNiiIS4hqGK9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less": function(e, t, o) {
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
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less": function(e, t, o) {
			e.exports = {
				background: "_2EkB4QKAhEjNwVFUD_8JmV",
				textSection: "_2jCzqlAuwDwwpuCgmfIMQ7",
				textContainer: "_3T9M1hVNmokkQWh03xX8jk",
				title: "_3-_ejcDFGp596JkkqRsIsD",
				subtitle: "_1fiXx_cB7w4HkwykMuyx0w",
				body: "_1JRBoMFbhlLJke-WjiF9tg",
				imageSection: "_26XceelGMk4WXZndVXPgs0",
				image: "_39n5c2gafF2Zu9YWqEe6cM"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, o) {
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
				vaultSection: "_6K5JcTVxN5uDsD5M_-Ju-",
				cryptoFutureSection: "_21NRzDYwPqzOpUzZ2w_r3j",
				joinWaitlistSection: "_3f4Fk6abLq8KKZzOZpqbwX"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "Anchor", (function() {
				return bt
			}));
			var n = o("./src/config.ts"),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				r = o("./node_modules/react-redux/es/index.js"),
				s = o("./src/reddit/selectors/experiments/econ/meta.ts"),
				l = o("./src/reddit/hooks/usePageLayer.ts"),
				u = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/routes/meta/constants.ts");
			const d = /\/community-points\/documentation\/?(.*)/,
				m = e => {
					var t, o;
					const n = null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.url;
					if (!n) return null;
					const a = n.match(d);
					return a && a[1] ? a[1] : null
				},
				h = e => `/community-points/documentation/${e}`,
				{
					fbt: p
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: y
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var b = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less"),
				g = o.n(f);
			const {
				fbt: w
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: v
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: k
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var _ = o("./src/reddit/icons/fonts/index.tsx"),
				P = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/floatingMenuButton.m.less"),
				E = o.n(P);
			const C = ({
					className: e,
					onClick: t,
					isMenuOpen: o
				}) => i.a.createElement("button", {
					className: Object(u.a)(e, E.a.container),
					onClick: t
				}, i.a.createElement("div", {
					className: Object(u.a)(E.a.iconContainer, {
						[E.a.rotated]: o
					})
				}, i.a.createElement(_.a, {
					name: o ? "add" : "menu",
					className: E.a.menuIcon
				}))),
				{
					fbt: S
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var I = o("./src/reddit/selectors/user.ts"),
				T = o("./node_modules/fbt/lib/FbtPublic.js");
			const V = [{
				key: "introduction",
				name: T.fbt._("Intro", null, {
					hk: "373VV7"
				}),
				pages: [{
					key: "introduction",
					name: T.fbt._("Introduction", null, {
						hk: "f7WaD"
					})
				}]
			}, {
				key: "points-distribution",
				name: T.fbt._("Points Distribution", null, {
					hk: "2zNnfy"
				}),
				pages: [{
					key: "distribution-process",
					name: T.fbt._("Distribution Process", null, {
						hk: "723Tq"
					})
				}, {
					key: "distribution-rules",
					name: T.fbt._("Distribution Rules", null, {
						hk: "357sNF"
					})
				}, {
					key: "spam-and-abuse",
					name: T.fbt._("Spam & Abuse", null, {
						hk: "1uqIAx"
					})
				}]
			}, {
				key: "features",
				name: T.fbt._("Features", null, {
					hk: "3xGVnE"
				}),
				pages: [{
					key: "reputation-and-governance",
					name: T.fbt._("Reputation & Governance", null, {
						hk: "9h6Ny"
					})
				}, {
					key: "special-memberships",
					name: T.fbt._("Special Memberships", null, {
						hk: "1c2Bqa"
					})
				}, {
					key: "coins-and-awards",
					name: T.fbt._("Coins & Awards", null, {
						hk: "4zZQUp"
					})
				}, {
					key: "redeeming-points",
					name: T.fbt._("Redeeming Points", null, {
						hk: "MOTKC"
					})
				}, {
					key: "tipping",
					name: T.fbt._("Tipping", null, {
						hk: "mXlVc"
					})
				}, {
					key: "points-and-automoderator",
					name: T.fbt._("Points & Automoderator", null, {
						hk: "4bmuZM"
					})
				}]
			}, {
				key: "blockchain",
				name: T.fbt._("Blockchain", null, {
					hk: "3HjKIg"
				}),
				pages: [{
					key: "vault",
					name: T.fbt._("Vault", null, {
						hk: "4vC7Cj"
					})
				}, {
					key: "points-on-the-blockchain",
					name: T.fbt._("Points on the Blockchain", null, {
						hk: "10M3cB"
					})
				}, {
					key: "developers",
					name: T.fbt._("Developers", null, {
						hk: "3lAfaF"
					})
				}]
			}, {
				key: "additional-resources",
				name: T.fbt._("Additional Resources", null, {
					hk: "7bp0b"
				}),
				pages: [{
					key: "faqs",
					name: T.fbt._("Frequently Asked Questions", null, {
						hk: "4e4s5J"
					})
				}]
			}];
			var R = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less"),
				x = o.n(R);
			const M = ({
					className: e,
					onClickItem: t
				}) => {
					const o = Object(l.a)(),
						n = m(o),
						a = Object(r.e)(I.W);
					return i.a.createElement("div", {
						className: Object(u.a)(x.a.container, e)
					}, i.a.createElement("nav", null, i.a.createElement("ol", null, V.map(e => i.a.createElement("div", {
						key: e.name,
						className: x.a.section
					}, e.pages.length > 1 && i.a.createElement("h4", {
						className: x.a.categoryHeader
					}, e.name), i.a.createElement("ol", null, e.pages.map(({
						key: e,
						name: o
					}) => i.a.createElement(A, {
						key: e,
						className: Object(u.a)({
							[x.a.nightmode]: a
						}),
						active: e === n,
						name: o,
						onClick: t,
						pageKey: e
					}))))))))
				},
				A = ({
					className: e,
					active: t,
					name: o,
					onClick: n,
					pageKey: a
				}) => i.a.createElement(b.a, {
					to: h(a),
					onClick: n
				}, i.a.createElement("li", {
					className: Object(u.a)(x.a.menuItem, {
						[x.a.active]: t
					}, e)
				}, o)),
				{
					fbt: N
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: j
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: B
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: F
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: O
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: D
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: q
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: L
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var Y = o("./node_modules/react-router-redux/es/index.js");
			const W = ({
					className: e
				}) => {
					const t = Object(r.d)(),
						[o, n] = Object(a.useState)(!1),
						s = Object(l.a)(),
						c = m(s);
					return Object(a.useEffect)(() => {
						window.scrollTo(0, 0)
					}, [c]), c && (e => ["introduction", "distribution-process", "distribution-rules", "spam-and-abuse", "reputation-and-governance", "special-memberships", "coins-and-awards", "redeeming-points", "tipping", "points-and-automoderator", "vault", "points-on-the-blockchain", "developers", "faqs", "contact"].includes(e))(c) ? i.a.createElement("div", {
						className: g.a.container
					}, i.a.createElement("div", {
						className: Object(u.a)(g.a.menuContainer, {
							[g.a.mobileMenuContainer]: o
						})
					}, i.a.createElement(M, {
						className: Object(u.a)(g.a.menu, {
							[g.a.mobileMenu]: o
						}),
						onClickItem: () => n(!1)
					})), i.a.createElement("div", {
						className: g.a.content
					}, G[c]), i.a.createElement(C, {
						className: g.a.floatingMenuButton,
						onClick: () => n(!o),
						isMenuOpen: o
					})) : (t(Object(Y.b)(h("introduction"))), null)
				},
				G = {
					introduction: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, S._("Introduction", null, {
						hk: "1ERR5f"
					})), i.a.createElement("h2", null, S._("It is time for communities to break free of walled gardens and take ownership of their existence online.", null, {
						hk: "1U7V3v"
					})), i.a.createElement("img", {
						className: g.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/future.png`,
						alt: S._("Imagine a crypto future", null, {
							hk: "2fm7jC"
						})
					}), i.a.createElement("section", null, i.a.createElement("h3", null, S._("The Future of Online Communities", null, {
						hk: "2l5mV2"
					})), S._("{=Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.}{=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.}{=Today's online communities are not like this. They are trapped inside apps and platforms, where they do not own or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.}{=It is time for them to take back ownership and control. It is time for a change.}", [S._param("=Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", i.a.createElement("p", null, S._("Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", null, {
						hk: "MYiYX"
					}))), S._param("=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", i.a.createElement("p", null, S._("But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", null, {
						hk: "3K6lu3"
					}))), S._param("=Today's online communities are not like this. They are trapped inside apps and platforms, where they do not own or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", i.a.createElement("p", null, S._("Today's online communities are not like this. They are trapped inside apps and platforms, where they do not own or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", null, {
						hk: "2Q19Dy"
					}))), S._param("=It is time for them to take back ownership and control. It is time for a change.", i.a.createElement("p", null, S._("It is time for them to take back ownership and control. It is time for a change.", null, {
						hk: "4DpBFS"
					})))], {
						hk: "8arJv"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, S._("Community Points", null, {
						hk: "1F2Duo"
					})), S._("{=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.}{=As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.}{=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.}", [S._param("=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", i.a.createElement("p", null, S._("Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", null, {
						hk: "1v0cui"
					}))), S._param("=As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", i.a.createElement("p", null, S._("As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", null, {
						hk: "3u0Hub"
					}))), S._param("=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", i.a.createElement("p", null, S._("Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", null, {
						hk: "3vMwoH"
					})))], {
						hk: "2jUDyJ"
					}))), null),
					"distribution-process": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, w._("Distribution Process", null, {
						hk: "20vYmV"
					})), i.a.createElement("h2", null, w._("Community Points are distributed every 4 weeks based on contributions people make to the community.", null, {
						hk: "126Ahj"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("Who gets Community Points?", null, {
						hk: "1Ed45W"
					})), i.a.createElement("div", {
						className: g.a.sideImageContainer
					}, i.a.createElement("div", null, w._("{=Community Points are distributed across multiple groups.}{=Contributors receive 50% of Community Points.Moderators receive 10% of Community Points.The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).}", [w._param("=Community Points are distributed across multiple groups.", i.a.createElement("p", null, w._("Community Points are distributed across multiple groups.", null, {
						hk: "11MZXG"
					}))), w._param("=Contributors receive 50% of Community Points.Moderators receive 10% of Community Points.The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", i.a.createElement("ul", null, w._("{=Contributors receive 50% of Community Points.}{=Moderators receive 10% of Community Points.}{=The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).}", [w._param("=Contributors receive 50% of Community Points.", i.a.createElement("li", null, w._("Contributors receive 50% of Community Points.", null, {
						hk: "4F2Wkl"
					}))), w._param("=Moderators receive 10% of Community Points.", i.a.createElement("li", null, w._("Moderators receive 10% of Community Points.", null, {
						hk: "3HcuPW"
					}))), w._param("=The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", i.a.createElement("li", null, w._("The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", null, {
						hk: "2RRHD"
					})))], {
						hk: "2avYXi"
					})))], {
						hk: "1y9aEC"
					})), i.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/chart.png`,
						alt: w._("Pie chart", null, {
							hk: "3KLyoS"
						})
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, w._("How do contributors earn Community Points?", null, {
						hk: "1R03CI"
					})), w._("{=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.}{=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.}{=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.}{=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.}", [w._param("=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", i.a.createElement("p", null, w._("Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", null, {
						hk: "nyK1Z"
					}))), w._param("=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", i.a.createElement("p", null, w._("The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", null, {
						hk: "26h1VY"
					}))), w._param("=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.", i.a.createElement("p", null, w._("Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. See {=Distribution Rules} for more details.", [w._param("=Distribution Rules", i.a.createElement(b.a, {
						to: h("distribution-rules")
					}, w._("Distribution Rules", null, {
						hk: "103XSa"
					})))], {
						hk: "21PV0k"
					}))), w._param("=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", i.a.createElement("p", null, w._("In order for contributors to claim the Points they have earned, they need to create a {=Vault} within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", [w._param("=Vault", i.a.createElement(b.a, {
						to: h("vault")
					}, w._("Vault", null, {
						hk: "2vIOZI"
					})))], {
						hk: "1FK3us"
					})))], {
						hk: "33062h"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("How many Community Points are distributed?", null, {
						hk: "2Ov00C"
					})), w._("{=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.}{=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.}{=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.}{=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.}", [w._param("=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.", i.a.createElement("p", null, w._("When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.", null, {
						hk: "2yK1zs"
					}))), w._param("=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", i.a.createElement("p", null, w._("This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", null, {
						hk: "3Ys2uE"
					}))), w._param("=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", i.a.createElement("p", null, w._("After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", null, {
						hk: "4mGiw4"
					}))), w._param("=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", i.a.createElement("p", null, w._("In addition to the creation of new Points described above, 50% of {=burned Points} are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", [w._param("=burned Points", i.a.createElement(b.a, {
						to: h("special-memberships")
					}, w._("burned Points", null, {
						hk: "lu4Xg"
					})))], {
						hk: "38G9NN"
					})))], {
						hk: "vb8rK"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, w._("What is the process for distribution?", null, {
						hk: "EdIh3"
					})), w._("{=Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.}{=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.}{=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.}", [w._param("=Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", i.a.createElement("p", null, w._("Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", null, {
						hk: "2IVeQr"
					}))), w._param("=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", i.a.createElement("p", null, w._("After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", null, {
						hk: "12ZLeS"
					}))), w._param("=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.", i.a.createElement("p", null, w._("After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.", null, {
						hk: "2YGZKP"
					})))], {
						hk: "2Hcl3u"
					}), i.a.createElement("h3", null, w._("How do moderators receive Community Points?", null, {
						hk: "IIhgW"
					})), w._("{=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.}{=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.}{=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.}{=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.}", [w._param("=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", i.a.createElement("p", null, w._("Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", null, {
						hk: "39OdCQ"
					}))), w._param("=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.", i.a.createElement("p", null, w._("The simplest way to set up a moderator wallet is with a Reddit {=Vault} in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.", [w._param("=Vault", i.a.createElement(b.a, {
						to: h("vault")
					}, w._("Vault", null, {
						hk: "RP5yN"
					})))], {
						hk: "nccuX"
					}))), w._param("=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.", i.a.createElement("p", null, w._("Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carry {=governance weight} with them. Points transferred from other addresses will not carry this weight.", [w._param("=governance weight", i.a.createElement(b.a, {
						to: h("reputation-and-governance")
					}, w._("governance weight", null, {
						hk: "2kpak2"
					})))], {
						hk: "rUi1c"
					}))), w._param("=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.", i.a.createElement("p", null, w._("Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.", null, {
						hk: "3uYrxZ"
					})))], {
						hk: "mFEBl"
					}))), null),
					"distribution-rules": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, v._("Distribution Rules", null, {
						hk: "3kkkm5"
					})), i.a.createElement("h2", null, v._("Community Points are a powerful tool that subreddits can use to shape content and behavior.", null, {
						hk: "2FFsru"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, v._("Community Rules", null, {
						hk: "2q9cMn"
					})), v._('{=Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.}{=Here is a non-exhaustive list of factors that can be used to shape distribution rules:}{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don\'t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")}{=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:}{=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on "media" or "comedy" postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month}{=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:}{=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.Only votes within 3 days of a post\'s creation time are counted (including on comments of that post)}', [v._param("=Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", i.a.createElement("p", null, v._("Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", null, {
						hk: "3Xaiuw"
					}))), v._param("=Here is a non-exhaustive list of factors that can be used to shape distribution rules:", i.a.createElement("p", null, v._("Here is a non-exhaustive list of factors that can be used to shape distribution rules:", null, {
						hk: "MbWwj"
					}))), v._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don\'t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")', i.a.createElement("ul", null, v._('{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")}{=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")}{=Posts vs comments (e.g., "double comment karma")}{=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")}{=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")}{=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")}{=A specific post (e.g., "don\'t count karma from the daily discussion")}{=Making a post or comment (e.g., "making a post reduces karma by 25")}{=Membership (e.g., "users with a membership get 25% bonus to karma they earned")}', [v._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', i.a.createElement("li", null, v._('Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', null, {
						hk: "1HyO61"
					}))), v._param('=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', i.a.createElement("li", null, v._('Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', null, {
						hk: "1b3f9W"
					}))), v._param('=Posts vs comments (e.g., "double comment karma")', i.a.createElement("li", null, v._('Posts vs comments (e.g., "double comment karma")', null, {
						hk: "1fBdy5"
					}))), v._param('=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', i.a.createElement("li", null, v._('Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', null, {
						hk: "2UgeUG"
					}))), v._param('=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', i.a.createElement("li", null, v._('Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', null, {
						hk: "4p142H"
					}))), v._param('=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', i.a.createElement("li", null, v._('Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', null, {
						hk: "3zG3aJ"
					}))), v._param('=A specific post (e.g., "don\'t count karma from the daily discussion")', i.a.createElement("li", null, v._('A specific post (e.g., "don\'t count karma from the daily discussion")', null, {
						hk: "qvWxJ"
					}))), v._param('=Making a post or comment (e.g., "making a post reduces karma by 25")', i.a.createElement("li", null, v._('Making a post or comment (e.g., "making a post reduces karma by 25")', null, {
						hk: "1g0WTN"
					}))), v._param('=Membership (e.g., "users with a membership get 25% bonus to karma they earned")', i.a.createElement("li", null, v._('Membership (e.g., "users with a membership get 25% bonus to karma they earned")', null, {
						hk: "3g8RRT"
					})))], {
						hk: "458Sc2"
					}))), v._param("=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:", i.a.createElement("p", null, v._("For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:", null, {
						hk: "2X8CkF"
					}))), v._param('=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on "media" or "comedy" postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month', i.a.createElement("ul", null, v._('{=Double comment karma to encourage more comments than posts}{=Limit karma earned from any individual post or comment to 1000}{=Only count 10% of karma earned on "media" or "comedy" posts}{=Bonus Points for users who vote in polls}{=15000 cap on Points earned by any single user per month}', [v._param("=Double comment karma to encourage more comments than posts", i.a.createElement("li", null, v._("{=Double comment karma to encourage more comments than posts}", [v._param("=Double comment karma to encourage more comments than posts", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/k12wnd/moon_proposal_double_comment_karma/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Double comment karma to encourage more comments than posts", null, {
						hk: "1AI9P9"
					})))], {
						hk: "qGZcO"
					}))), v._param("=Limit karma earned from any individual post or comment to 1000", i.a.createElement("li", null, v._("{=Limit karma earned from any individual post or comment to 1000}", [v._param("=Limit karma earned from any individual post or comment to 1000", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm8she/limit_post_karma_to_1k_and_limit_comment_karma_to/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Limit karma earned from any individual post or comment to 1000", null, {
						hk: "29kgT2"
					})))], {
						hk: "zwJol"
					}))), v._param('=Only count 10% of karma earned on "media" or "comedy" posts', i.a.createElement("li", null, v._('{=Only count 10% of karma earned on "media" or "comedy" posts}', [v._param('=Only count 10% of karma earned on "media" or "comedy" posts', i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm99v3/change_moon_distribution_for_comedy_posts_and/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._('Only count 10% of karma earned on "media" or "comedy" posts', null, {
						hk: "BQ9GV"
					})))], {
						hk: "2Pn0x2"
					}))), v._param("=Bonus Points for users who vote in polls", i.a.createElement("li", null, v._("{=Bonus Points for users who vote in polls}", [v._param("=Bonus Points for users who vote in polls", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/m7ehzz/proposal_5_bonus_moons_for_anyone_who_votes_on/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("Bonus Points for users who vote in polls", null, {
						hk: "2CgZdm"
					})))], {
						hk: "3oPCNG"
					}))), v._param("=15000 cap on Points earned by any single user per month", i.a.createElement("li", null, v._("{=15000 cap on Points earned by any single user per month}", [v._param("=15000 cap on Points earned by any single user per month", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/mrn758/15000_karma_cap_on_moon_distribution/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("15000 cap on Points earned by any single user per month", null, {
						hk: "s17Vl"
					})))], {
						hk: "VEI28"
					})))], {
						hk: "2CnBXv"
					}))), v._param("=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:", i.a.createElement("p", null, v._("In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:", null, {
						hk: "4dIyOu"
					}))), v._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.Only votes within 3 days of a post's creation time are counted (including on comments of that post)", i.a.createElement("ul", null, v._("{=Karma earned on removed posts and comments does not count (including karma earned before removal)}{=Karma earned on stickied or distinguished content does not count}{=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.}{=Only votes within 3 days of a post's creation time are counted (including on comments of that post)}", [v._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)", i.a.createElement("li", null, v._("Karma earned on removed posts and comments does not count (including karma earned before removal)", null, {
						hk: "22FdTP"
					}))), v._param("=Karma earned on stickied or distinguished content does not count", i.a.createElement("li", null, v._("Karma earned on stickied or distinguished content does not count", null, {
						hk: "2yVTZQ"
					}))), v._param("=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", i.a.createElement("li", null, v._("Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", null, {
						hk: "3Jlzwi"
					}))), v._param("=Only votes within 3 days of a post's creation time are counted (including on comments of that post)", i.a.createElement("li", null, v._("Only votes within 3 days of a post's creation time are counted (including on comments of that post)", null, {
						hk: "1BIe3S"
					})))], {
						hk: "3pkPi3"
					})))], {
						hk: "2PfFnZ"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, v._("Deciding Community Rules", null, {
						hk: "2BDpM6"
					})), v._("{=Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls}", [v._param("=Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls", i.a.createElement("p", null, v._("Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules through {=Governance Polls}.", [v._param("=Governance Polls", i.a.createElement(b.a, {
						to: h("reputation-and-governance")
					}, v._("Governance Polls", null, {
						hk: "3RulHW"
					})))], {
						hk: "bIeh3"
					})))], {
						hk: "1Kzh2q"
					}))), null),
					"spam-and-abuse": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("img", {
						className: g.a.smallTitleImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/spam.png`,
						alt: O._("Community Points can help fight spam", null, {
							hk: "9z9e5"
						})
					}), i.a.createElement("h1", null, O._("Spam & Abuse", null, {
						hk: "1qZ0Kk"
					})), i.a.createElement("h2", null, O._("Community Points give communities smarter ways to fight spam and other abuse by punishing detrimental behavior.", null, {
						hk: "3lfcQE"
					})), O._("{=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.}{=Example rules that can be created include:}{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}{=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.}{=As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.}", [O._param("=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", i.a.createElement("p", null, O._("As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", null, {
						hk: "38WJLw"
					}))), O._param("=Example rules that can be created include:", i.a.createElement("p", null, O._("Example rules that can be created include:", null, {
						hk: "3eylqc"
					}))), O._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", i.a.createElement("ul", null, O._("{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.}{=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.}{=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.}{=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}", [O._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", i.a.createElement("li", null, O._("Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", null, {
						hk: "2tMNCa"
					}))), O._param("=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", i.a.createElement("li", null, O._("Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", null, {
						hk: "2fYsam"
					}))), O._param("=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", i.a.createElement("li", null, O._("Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", null, {
						hk: "1fte1B"
					}))), O._param("=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", i.a.createElement("li", null, O._("When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", null, {
						hk: "1qeR2Z"
					})))], {
						hk: "38hDgb"
					}))), O._param("=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", i.a.createElement("p", null, O._("The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", null, {
						hk: "3MTosY"
					}))), O._param("=As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", i.a.createElement("p", null, O._("As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", null, {
						hk: "MzGJX"
					})))], {
						hk: "1jv9EK"
					})), null),
					"reputation-and-governance": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, F._("Reputation & Governance", null, {
						hk: "3VDDzY"
					})), i.a.createElement("h2", null, F._("Community Points represent a visible measure of reputation and enable a new type of weighted poll that can be used to make community decisions.", null, {
						hk: "Xc3Ow"
					})), F._("{=Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on the community.}", [F._param("=Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on the community.", i.a.createElement("p", null, F._("Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on the community.", null, {
						hk: "4gxRNI"
					})))], {
						hk: "lSGWL"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, F._("Reputation", null, {
						hk: "2sh0G9"
					})), F._("{=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.}", [F._param("=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", i.a.createElement("p", null, F._("In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", null, {
						hk: "1zRy9m"
					})))], {
						hk: "2M3ArP"
					}), i.a.createElement("img", {
						className: g.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/reputation.png`,
						alt: F._("Example of how Community Points are displayed on comments", null, {
							hk: "3E0yXu"
						})
					}), F._("{=Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.}", [F._param("=Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", i.a.createElement("p", null, F._("Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", null, {
						hk: "1awSM9"
					})))], {
						hk: "EKs9F"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, F._("Weighted Polls", null, {
						hk: "4uCujA"
					})), F._("{=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.}{=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.}{=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.}", [F._param("=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", i.a.createElement("p", null, F._("People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", null, {
						hk: "1EHUpR"
					}))), F._param("=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.", i.a.createElement("p", null, F._("To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.", null, {
						hk: "28xEsW"
					}))), F._param("=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.", i.a.createElement("p", null, F._("When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.", null, {
						hk: "3i4Xw4"
					})))], {
						hk: "448Jqc"
					}), i.a.createElement("img", {
						className: g.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/poll.png`,
						alt: F._("Example of a community poll", null, {
							hk: "CC6Sa"
						})
					}), F._("{=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of purchases and tips, their vote weight is still only 200.}{=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.}{=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.}", [F._param("=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of purchases and tips, their vote weight is still only 200.", i.a.createElement("p", null, F._("Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of purchases and tips, their vote weight is still only 200.", null, {
						hk: "2fIlHQ"
					}))), F._param("=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.", i.a.createElement("p", null, F._("Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.", null, {
						hk: "FrSSV"
					}))), F._param("=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", i.a.createElement("p", null, F._("Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", null, {
						hk: "25QFOF"
					})))], {
						hk: "2jDjYa"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, F._("Community Governance", null, {
						hk: "440sui"
					})), F._("{=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.}{=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.}{=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.}{=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for the other rules.}", [F._param("=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", i.a.createElement("p", null, F._("Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", null, {
						hk: "3vavXK"
					}))), F._param("=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", i.a.createElement("p", null, F._("Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", null, {
						hk: "2CI9iA"
					}))), F._param("=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", i.a.createElement("p", null, F._("The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", null, {
						hk: "1rDsLo"
					}))), F._param("=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for the other rules.", i.a.createElement("p", null, F._("Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for the other rules.", null, {
						hk: "1rYJrp"
					})))], {
						hk: "4FpEHO"
					}))), null),
					"special-memberships": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, D._("Special Memberships", null, {
						hk: "FgGID"
					})), i.a.createElement("h2", null, D._("Special Memberships let users show off their support to the community. Getting a Special Membership unlocks badges and other premium features in the community.", null, {
						hk: "4EV8yH"
					})), D._("{=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:}{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.}{=To see more details, check theSubreddit Membership page for r/CryptoCurrency.}", [D._param("=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:", i.a.createElement("p", null, D._("Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:", null, {
						hk: "2RjnSj"
					}))), D._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.", i.a.createElement("ul", null, D._("{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.}{=Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.}{=GIFs: Embed GIFs directly on Reddit, inside your comments.}", [D._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.", i.a.createElement("li", null, D._("{=Badges}: Personalize your presence on the subreddit and add a highlighted color to your username.", [D._param("=Badges", i.a.createElement("b", null, D._("Badges", null, {
						hk: "64JpW"
					})))], {
						hk: "1UlPKj"
					}))), D._param("=Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.", i.a.createElement("li", null, D._("{=Animated emojis}: Express yourself in a way that words can't, with emojis customized to that subreddit.", [D._param("=Animated emojis", i.a.createElement("b", null, D._("Animated emojis", null, {
						hk: "3JlmnL"
					})))], {
						hk: "17LrM"
					}))), D._param("=GIFs: Embed GIFs directly on Reddit, inside your comments.", i.a.createElement("li", null, D._("{=GIFs}: Embed GIFs directly on Reddit, inside your comments.", [D._param("=GIFs", i.a.createElement("b", null, D._("GIFs", null, {
						hk: "1nCu3Q"
					})))], {
						hk: "1qkBxd"
					})))], {
						hk: "45xOov"
					}))), D._param("=To see more details, check theSubreddit Membership page for r/CryptoCurrency.", i.a.createElement("p", null, D._("To see more details, check the {=Subreddit Membership} page for r/CryptoCurrency.", [D._param("=Subreddit Membership", i.a.createElement("a", {
						href: "/web/special-membership/cryptocurrency",
						target: "_blank",
						rel: "noopener noreferrer"
					}, D._("Subreddit Membership", null, {
						hk: "2CT5r6"
					})))], {
						hk: "1cN7rt"
					})))], {
						hk: "YU1NC"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, D._("Badges & Emojis", null, {
						hk: "nhw27"
					})), i.a.createElement("div", {
						className: g.a.sideImageContainer
					}, i.a.createElement("div", null, D._('{=There are multiple badges that Special Members can display next to their username.}{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}{=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.}', [D._param("=There are multiple badges that Special Members can display next to their username.", i.a.createElement("p", null, D._("There are multiple badges that Special Members can display next to their username.", null, {
						hk: "38eZY8"
					}))), D._param('=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.', i.a.createElement("ul", null, D._('{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.}{=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).}{=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}', [D._param("=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.", i.a.createElement("li", null, D._("{=Loyalty Badge}: The first badge represents how long the user has been supporting the subreddit as a paying member.", [D._param("=Loyalty Badge", i.a.createElement("b", null, D._("Loyalty Badge", null, {
						hk: "4ACOXt"
					})))], {
						hk: "1jiQJi"
					}))), D._param('=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', i.a.createElement("li", null, D._('{=Achievement Badge}: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', [D._param("=Achievement Badge", i.a.createElement("b", null, D._("Achievement Badge", null, {
						hk: "3VjA3"
					})))], {
						hk: "2O48La"
					}))), D._param("=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", i.a.createElement("li", null, D._("{=Style Badge}: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", [D._param("=Style Badge", i.a.createElement("b", null, D._("Style Badge", null, {
						hk: "1UZzGn"
					})))], {
						hk: "3G44zo"
					})))], {
						hk: "3uCxSx"
					}))), D._param("=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", i.a.createElement("p", null, D._("For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", null, {
						hk: "4bju4t"
					})))], {
						hk: "3YpHOu"
					})), i.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/badges.png`,
						alt: D._("Example image of badges", null, {
							hk: "2J0eH9"
						})
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, D._("Special Membership Price & Other Ways to Buy", null, {
						hk: "3gOExN"
					})), i.a.createElement("img", {
						className: g.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/membership_price.png`,
						alt: D._("Special Memberships price and ways to buy", null, {
							hk: "3UQ0wL"
						})
					}), D._("{=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll}{=In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, Community Points are burned from the Community Tank to provide the Special Membership status on-chain.}{=Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.}", [D._param("=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll", i.a.createElement("p", null, D._("The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using a {=Governance Poll}.", [D._param("=Governance Poll", i.a.createElement(b.a, {
						to: h("reputation-and-governance")
					}, D._("Governance Poll", null, {
						hk: "1oqJVk"
					})))], {
						hk: "3FNr3d"
					}))), D._param("=In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, Community Points are burned from the Community Tank to provide the Special Membership status on-chain.", i.a.createElement("p", null, D._("In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, Community Points are burned from the {=Community Tank} to provide the Special Membership status on-chain.", [D._param("=Community Tank", i.a.createElement(b.a, {
						to: h("distribution-process")
					}, D._("Community Tank", null, {
						hk: "hyFA"
					})))], {
						hk: "22CL3n"
					}))), D._param("=Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.", i.a.createElement("p", null, D._("Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.", null, {
						hk: "4Do4V4"
					})))], {
						hk: "33GVNw"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, D._("Canceling Special Memberships", null, {
						hk: "zyegE"
					})), D._("{=It depends on how you bought your Special Membership:}{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [D._param("=It depends on how you bought your Special Membership:", i.a.createElement("p", null, D._("It depends on how you bought your Special Membership:", null, {
						hk: "1RJTU5"
					}))), D._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("ul", null, D._("{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special}{=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.}{=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.}{=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [D._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special", i.a.createElement("li", null, D._("If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to {=https://www.reddit.com/settings/special}.", [D._param("=https://www.reddit.com/settings/special", i.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, D._("https://www.reddit.com/settings/special", null, {
						hk: "1PDlKJ"
					})))], {
						hk: "4pz9Iy"
					}))), D._param("=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", i.a.createElement("li", null, D._("If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", null, {
						hk: "4a7nol"
					}))), D._param("=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", i.a.createElement("li", null, D._("If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", null, {
						hk: "45OGet"
					}))), D._param("=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("li", null, D._("If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "nIifE"
					})))], {
						hk: "1F0Qej"
					})))], {
						hk: "1UAohK"
					}))), null),
					"coins-and-awards": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, p._("Coins & Awards", null, {
						hk: "4APvg2"
					})), i.a.createElement("h2", null, p._("Community Points can be used to give awards in the community.", null, {
						hk: "3Ey9Li"
					})), p._("{=Coins are Reddit's sitewide virtual currency used to give awards like Gold and Platinum.}{=Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.}{=Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.}", [p._param("=Coins are Reddit's sitewide virtual currency used to give awards like Gold and Platinum.", i.a.createElement("p", null, p._("{=Coins} are Reddit's sitewide virtual currency used to give awards like Gold and Platinum.", [p._param("=Coins", i.a.createElement("a", {
						href: "/coins",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("Coins", null, {
						hk: "2k61qZ"
					})))], {
						hk: "1eU9Wb"
					}))), p._param("=Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.", i.a.createElement("p", null, p._("Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.", null, {
						hk: "qFECL"
					}))), p._param("=Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.", i.a.createElement("p", null, p._("Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.", null, {
						hk: "13oDbA"
					})))], {
						hk: "11Y6y2"
					})), null),
					"redeeming-points": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, B._("Redeeming Points", null, {
						hk: "RP9Na"
					})), i.a.createElement("h2", null, B._("When Community Points are redeemed by spending them on premium features, they are destroyed and removed from circulation. This reduces the overall supply of Points and makes everyone else's slice of Points larger, thus rewarding the entire community.", null, {
						hk: "11FdJY"
					})), B._("{=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.}{=When people buy premium features with dollars, for example Special Memberships an equivalent amount of Points are burned from the Community Tank on behalf of that user.}{=Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See theDevelopers section for more information.}", [B._param("=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", i.a.createElement("p", null, B._("Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", null, {
						hk: "3SVvAg"
					}))), B._param("=When people buy premium features with dollars, for example Special Memberships an equivalent amount of Points are burned from the Community Tank on behalf of that user.", i.a.createElement("p", null, B._("When people buy premium features with dollars, for example {=Special Memberships}, an equivalent amount of Points are burned from the {=Community Tank} on behalf of that user.", [B._param("=Special Memberships", i.a.createElement(b.a, {
						to: h("special-memberships")
					}, B._("Special Memberships", null, {
						hk: "AWK4V"
					}))), B._param("=Community Tank", i.a.createElement(b.a, {
						to: h("distribution-process")
					}, B._("Community Tank", null, {
						hk: "1KuErL"
					})))], {
						hk: "44uupr"
					}))), B._param("=Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See theDevelopers section for more information.", i.a.createElement("p", null, B._("Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See the {=Developers} section for more information.", [B._param("=Developers", i.a.createElement(b.a, {
						to: h("developers")
					}, B._("Developers", null, {
						hk: "hdAFy"
					})))], {
						hk: "2h7Ael"
					})))], {
						hk: "1UBYiX"
					})), null),
					tipping: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, q._("Tipping", null, {
						hk: "2SJg5w"
					})), i.a.createElement("h2", null, q._("Community Points can be tipped to other community members for their contributions to the community.", null, {
						hk: "4bInOA"
					})), q._("{=If someone makes a great post or comment or bot for the community, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.}", [q._param("=If someone makes a great post or comment or bot for the community, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", i.a.createElement("p", null, q._("If someone makes a great post or comment or bot for the community, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", null, {
						hk: "1VWiCc"
					})))], {
						hk: "19OPwT"
					}), i.a.createElement("img", {
						className: g.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/user_card.png`,
						alt: q._("Tipping Community Points", null, {
							hk: "2otVJZ"
						})
					})), null),
					"points-and-automoderator": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, N._("Points & Automoderator", null, {
						hk: "4qE8Kd"
					})), i.a.createElement("h2", null, N._("Community Points can be used in conjunction with Automoderator to create rules based on users' Points balances and Special Membership status.", null, {
						hk: "1id0Ri"
					})), i.a.createElement("p", null, N._("Subreddits can use Community Points information in their Automod rules. Specifically, they can use the following rules:", null, {
						hk: "2m6VU8"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor: has_special_membership: true | false\nspecial_membership_age: > 1 day\npoints_balance: > 10000000000000 # in wei\nlocked_points_balance: > 10000000000000 # in wei\n---")), i.a.createElement("p", null, N._("Locked points is the total number of Points the user has directly earned in the community to date.", null, {
						hk: "3B9CVv"
					})), i.a.createElement("h3", null, N._("Examples", null, {
						hk: "33UWVC"
					})), i.a.createElement("p", null, N._("Restrict commenting on a Core Contributors Discussion Thread only to Points holders.", null, {
						hk: "3r0Bj3"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: comment\naction: remove\n---\nauthor: automod\ntitle (starts-with): Core Contributors Discussion Thread\nset_flair: Discussion\n---")), i.a.createElement("p", null, N._("Put submissions from users with 0 balance into the mod queue.", null, {
						hk: "36MzYX"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: submission\naction: filter\nmessage_subject: Pending Approval\nmessage: Our apologies, but in order to limit spam your submission has been automatically removed and is pending moderator approval.\nmodmail_subject: Post From Young Account\nmodmail: /u/{{author}}'s [{{kind}}]({{permalink}}) is pending moderator approval. Please visit the moderation queue to review the post.\n---")), i.a.createElement("p", null, N._("Thank Special Members for supporting the community.", null, {
						hk: "43lDxM"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    has_special_membership: true\ntype: submission\ncomment_stickied: true\ncomment_locked: true\ncomment: {{author}}, thank you for supporting the community!\n---"))), null),
					vault: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, L._("Vault", null, {
						hk: "JRmsq"
					})), i.a.createElement("h2", null, L._("The Vault is an embedded crypto wallet in the Reddit app and the home for Community Points.", null, {
						hk: "u3o8z"
					})), L._("{=Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app.}{=In your Vault, you can view Community Points from multiple subreddits, tip them to other users, and spend them on things like Special Memberships.}{=The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).}", [L._param("=Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app.", i.a.createElement("p", null, L._("Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app.", null, {
						hk: "2oW65r"
					}))), L._param("=In your Vault, you can view Community Points from multiple subreddits, tip them to other users, and spend them on things like Special Memberships.", i.a.createElement("p", null, L._("In your Vault, you can view Community Points from multiple subreddits, tip them to other users, and spend them on things like Special Memberships.", null, {
						hk: "3ZpDnr"
					}))), L._param("=The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", i.a.createElement("p", null, L._("The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", null, {
						hk: "Or0FC"
					})))], {
						hk: "4iSGcP"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, L._("Create a Vault", null, {
						hk: "1h3rBm"
					})), L._("{=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.}{=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.}{=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.}", [L._param("=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", i.a.createElement("p", null, L._("Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", null, {
						hk: "1XxPFd"
					}))), L._param("=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.", i.a.createElement("p", null, L._("When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.", null, {
						hk: "4h0atv"
					}))), L._param("=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.", i.a.createElement("p", null, L._("This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.", null, {
						hk: "1RTGVt"
					})))], {
						hk: "2QyHrm"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, L._("Backup & Recovery", null, {
						hk: "4f33gk"
					})), L._("{=You have two options to back up your private key.}{=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.}{=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe — we recommend using a password manager like LastPass.}{=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.}{=There are two corresponding ways to recover your Vault.}{=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.}{=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.}{=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized Every time you create or recover a Vault, it is immediately set as your active Vault.}", [L._param("=You have two options to back up your private key.", i.a.createElement("p", null, L._("You have two options to back up your private key.", null, {
						hk: "1FIBMf"
					}))), L._param("=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", i.a.createElement("p", null, L._("The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", null, {
						hk: "2VBUWJ"
					}))), L._param("=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe — we recommend using a password manager like LastPass.", i.a.createElement("p", null, L._("The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe — we recommend using a password manager like LastPass.", null, {
						hk: "DrBLW"
					}))), L._param("=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.", i.a.createElement("p", null, L._("It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.", null, {
						hk: "3oZe4I"
					}))), L._param("=There are two corresponding ways to recover your Vault.", i.a.createElement("p", null, L._("There are two corresponding ways to recover your Vault.", null, {
						hk: "jlR9X"
					}))), L._param("=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", i.a.createElement("p", null, L._("You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", null, {
						hk: "4xWnCz"
					}))), L._param("=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", i.a.createElement("p", null, L._("You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", null, {
						hk: "iuwnh"
					}))), L._param("=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized Every time you create or recover a Vault, it is immediately set as your active Vault.", i.a.createElement("p", null, L._("Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is {=finalized}. Every time you create or recover a Vault, it is immediately set as your active Vault.", [L._param("=finalized", i.a.createElement(b.a, {
						to: h("distribution-process")
					}, L._("finalized", null, {
						hk: "4ulHIk"
					})))], {
						hk: "2j04B5"
					})))], {
						hk: "28GGHl"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, L._("Using Vault on web", null, {
						hk: "4lZpy1"
					})), L._("{=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.}{=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.}{=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.}", [L._param("=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", i.a.createElement("p", null, L._("Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", null, {
						hk: "3Q0UIE"
					}))), L._param("=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", i.a.createElement("p", null, L._("When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", null, {
						hk: "1dq5v2"
					}))), L._param("=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", i.a.createElement("p", null, L._("If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", null, {
						hk: "1tITN"
					})))], {
						hk: "1xjedp"
					}))), null),
					"points-on-the-blockchain": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, j._("Points on the Blockchain", null, {
						hk: "2Fk8CU"
					})), i.a.createElement("h2", null, j._("What makes Community Points unique is that they live on a public blockchain. People's Points are theirs and can be used anywhere they want on the Internet where Points are supported.", null, {
						hk: "3ldDbf"
					})), i.a.createElement("p", null, j._("Community Points currently exist on a testnet version of the Ethereum blockchain, which uses similar technology to Bitcoin to validate ownership and control of tokens based on who holds them.", null, {
						hk: "28z53t"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, j._("How does the blockchain work?", null, {
						hk: "2Ctp6v"
					})), j._("{=The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.}{=The blockchain that Community Points live on is Ethereums Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.}{=On Ethereum, Community Points are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships. The smart contracts also leverage existing parts of the Ethereum ecosystem, such as ERC-20 token standards.}{=Under the hood, an individual user's Points belong to a specific address on Ethereum. This address is created when they set up their Vault and the address (along with everything it has in it) can only be controlled by them.}", [j._param("=The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.", i.a.createElement("p", null, j._("The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.", null, {
						hk: "2nwu6u"
					}))), j._param("=The blockchain that Community Points live on is Ethereums Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", i.a.createElement("p", null, j._("The blockchain that Community Points live on is {=Ethereum}'s Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", [j._param("=Ethereum", i.a.createElement("a", {
						href: "https://ethereum.org/en/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("Ethereum", null, {
						hk: "1P2gav"
					})))], {
						hk: "3gSsUl"
					}))), j._param("=On Ethereum, Community Points are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships. The smart contracts also leverage existing parts of the Ethereum ecosystem, such as ERC-20 token standards.", i.a.createElement("p", null, j._("On Ethereum, Community Points are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships. The smart contracts also leverage existing parts of the Ethereum ecosystem, such as ERC-20 token standards.", null, {
						hk: "1fQl2"
					}))), j._param("=Under the hood, an individual user's Points belong to a specific address on Ethereum. This address is created when they set up their Vault and the address (along with everything it has in it) can only be controlled by them.", i.a.createElement("p", null, j._("Under the hood, an individual user's Points belong to a specific address on Ethereum. This address is created when they set up their {=Vault}, and the address (along with everything it has in it) can only be controlled by them.", [j._param("=Vault", i.a.createElement(b.a, {
						to: h("vault")
					}, j._("Vault", null, {
						hk: "3HO9Yh"
					})))], {
						hk: "TEmd4"
					})))], {
						hk: "2gCFJm"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, j._("What are the benefits of the blockchain?", null, {
						hk: "1bEK24"
					})), j._("{=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:}{=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.}{=Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules.}", [j._param("=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:", i.a.createElement("p", null, j._("Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:", null, {
						hk: "32AhK6"
					}))), j._param("=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", i.a.createElement("ul", null, j._("{=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.}{=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.}{=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.}", [j._param("=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.", i.a.createElement("li", null, j._("{=Ownership.} Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.", [j._param("=Ownership.", i.a.createElement("b", null, j._("Ownership.", null, {
						hk: "2ryFKo"
					})))], {
						hk: "1g04uq"
					}))), j._param("=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.", i.a.createElement("li", null, j._("{=Openness & Portability.} The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.", [j._param("=Openness & Portability.", i.a.createElement("b", null, j._("Openness & Portability.", null, {
						hk: "1daOsT"
					})))], {
						hk: "227Qu6"
					}))), j._param("=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", i.a.createElement("li", null, j._("{=Transparency.} The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", [j._param("=Transparency.", i.a.createElement("b", null, j._("Transparency.", null, {
						hk: "3lEwhF"
					})))], {
						hk: "1ogHNQ"
					})))], {
						hk: "Hwv73"
					}))), j._param("=Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules.", i.a.createElement("p", null, j._("Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules.", null, {
						hk: "1EWXOL"
					})))], {
						hk: "21DMJG"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, j._("What is gas, and who's paying for it?", null, {
						hk: "5K69o"
					})), j._('{=Transactions on the Ethereum network cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network on the Rinkeby testnet. We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.}', [j._param('=Transactions on the Ethereum network cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network on the Rinkeby testnet. We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.', i.a.createElement("p", null, j._('Transactions on the Ethereum network cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network on the Rinkeby testnet. We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.', null, {
						hk: "3WUT11"
					})))], {
						hk: "1fwKbD"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, j._("Which Ethereum network is this using?", null, {
						hk: "1vDpUR"
					})), j._("{=Community Points are an experimental product currently on a testnet version of the Ethereum blockchain. We are working on bringing them to the mainnet version of the Ethereum blockchain. This testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit's Previews Terms of ServiceThis kind of behavior is very risky while Points are on a testnet — Points can be lost or they may not be migrated over to the main Ethereum network.}", [j._param("=Community Points are an experimental product currently on a testnet version of the Ethereum blockchain. We are working on bringing them to the mainnet version of the Ethereum blockchain. This testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit's Previews Terms of ServiceThis kind of behavior is very risky while Points are on a testnet — Points can be lost or they may not be migrated over to the main Ethereum network.", i.a.createElement("p", null, j._("Community Points are an experimental product currently on a testnet version of the Ethereum blockchain. We are working on bringing them to the mainnet version of the Ethereum blockchain. This testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit's {=Previews Terms of Service}. This kind of behavior is very risky while Points are on a testnet — Points can be lost or they may not be migrated over to the main Ethereum network.", [j._param("=Previews Terms of Service", i.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("Previews Terms of Service", null, {
						hk: "3GtJHJ"
					})))], {
						hk: "1ArmWr"
					})))], {
						hk: "byLMP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, j._("What is the scaling problem and how does it impact plans for mainnet?", null, {
						hk: "48T8Tr"
					})), j._("{=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.}{=To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We havepartnered with the Ethereum Foundation in these efforts.}{=In 2020, we issued acall to the crypto community to present their best scaling options for Community Points. In 2021, we launched a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.}", [j._param("=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.", i.a.createElement("p", null, j._("Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.", null, {
						hk: "33CyaZ"
					}))), j._param("=To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We havepartnered with the Ethereum Foundation in these efforts.", i.a.createElement("p", null, j._("To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We have {=partnered} with the Ethereum Foundation in these efforts.", [j._param("=partnered", i.a.createElement("a", {
						href: "/r/ethereum/comments/l6c3kx/reddit_announces_partnership_with_the_ethereum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("partnered", null, {
						hk: "3RaXQ7"
					})))], {
						hk: "2Y2npj"
					}))), j._param("=In 2020, we issued acall to the crypto community to present their best scaling options for Community Points. In 2021, we launched a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.", i.a.createElement("p", null, j._("In 2020, we issued a {=call to the crypto community} to present their best scaling options for Community Points. In 2021, we {=launched} a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.", [j._param("=call to the crypto community", i.a.createElement("a", {
						href: "/r/ethereum/comments/hbjx25/the_great_reddit_scaling_bakeoff/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("call to the crypto community", null, {
						hk: "2riJMB"
					}))), j._param("=launched", i.a.createElement("a", {
						href: "/r/ethereum/comments/opi5rg/scaling_reddits_community_points_with_arbitrum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("launched", null, {
						hk: "1yIBHY"
					})))], {
						hk: "3q5Wzy"
					})))], {
						hk: "LIGUz"
					}))), null),
					developers: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, y._("Developers", null, {
						hk: "4o6AOj"
					})), i.a.createElement("h2", null, y._("Developers can build on top of Community Points today. Make bots that work with Community Points or embed Community Points in apps outside of Reddit.", null, {
						hk: "3KXAiI"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, y._("Blockchain Resources", null, {
						hk: "325QLM"
					})), y._("{=Developers can interact directly with Community Points through standard blockchain tools and protocols.}{=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.}", [y._param("=Developers can interact directly with Community Points through standard blockchain tools and protocols.", i.a.createElement("p", null, y._("Developers can interact directly with Community Points through standard blockchain tools and protocols.", null, {
						hk: "J3pfL"
					}))), y._param("=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", i.a.createElement("p", null, y._("For developers who are new to blockchain, the {=Ethereum developer docs} are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", [y._param("=Ethereum developer docs", i.a.createElement("a", {
						href: "https://ethereum.org/en/developers/docs/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("Ethereum developer docs", null, {
						hk: "2b5HuB"
					})))], {
						hk: "3B8i3p"
					})))], {
						hk: "1QXjde"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, y._("Scaling Network", null, {
						hk: "4zK8vP"
					})), y._("{=Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. Arbitrum is compatible with most Ethereum tools.}{=To interact with the scaling network, developers can use the following resources:}{=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184}", [y._param("=Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. Arbitrum is compatible with most Ethereum tools.", i.a.createElement("p", null, y._("Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. {=Arbitrum} is compatible with most Ethereum tools.", [y._param("=Arbitrum", i.a.createElement("a", {
						href: "http://arbitrum.io/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("Arbitrum", null, {
						hk: "4CYQBO"
					})))], {
						hk: "2vaWLm"
					}))), y._param("=To interact with the scaling network, developers can use the following resources:", i.a.createElement("p", null, y._("To interact with the scaling network, developers can use the following resources:", null, {
						hk: "3jTnIk"
					}))), y._param("=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184", i.a.createElement("ul", null, y._("{=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}{=Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.}{=Chain ID: 5391184}", [y._param("=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", i.a.createElement("li", null, y._("JSON-RPC endpoint: {=https://testnet.redditspace.com/rpc}{=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}", [y._param("=https://testnet.redditspace.com/rpc", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/rpc",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("https://testnet.redditspace.com/rpc", null, {
						hk: "46rOfv"
					}))), y._param("=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", i.a.createElement("ul", null, y._("{=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}", [y._param("=This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", i.a.createElement("li", null, y._("This allows developers to use Reddit's node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contact {=spsupport@reddit.com} for more details.", [y._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, y._("spsupport@reddit.com", null, {
						hk: "15awl0"
					})))], {
						hk: "4lrhg2"
					})))], {
						hk: "1DSYzb"
					})))], {
						hk: "2C74qj"
					}))), y._param("=Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.", i.a.createElement("li", null, y._("Block Explorer: {=https://testnet.redditspace.com/}{=This is an interface to see transactions and balances on the scaling network.}", [y._param("=https://testnet.redditspace.com/", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("https://testnet.redditspace.com/", null, {
						hk: "4ujbtE"
					}))), y._param("=This is an interface to see transactions and balances on the scaling network.", i.a.createElement("ul", null, y._("{=This is an interface to see transactions and balances on the scaling network.}", [y._param("=This is an interface to see transactions and balances on the scaling network.", i.a.createElement("li", null, y._("This is an interface to see transactions and balances on the scaling network.", null, {
						hk: "2d5tTE"
					})))], {
						hk: "2TNfnf"
					})))], {
						hk: "1eJSrX"
					}))), y._param("=Chain ID: 5391184", i.a.createElement("li", null, y._("Chain ID: 5391184", null, {
						hk: "1e7MEj"
					})))], {
						hk: "2qc9lq"
					})))], {
						hk: "bxrUP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, y._("Smart Contracts", null, {
						hk: "1vFnYB"
					})), y._("{=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.}{=As a reference, here is the contract code from implementation contracts on our scaling network:}{=SubredditPoints.solSubscriptions.solDistributions.sol}{=When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.}", [y._param("=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", i.a.createElement("p", null, y._("Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", null, {
						hk: "20FdUA"
					}))), y._param("=As a reference, here is the contract code from implementation contracts on our scaling network:", i.a.createElement("p", null, y._("As a reference, here is the contract code from implementation contracts on our scaling network:", null, {
						hk: "37CvLk"
					}))), y._param("=SubredditPoints.solSubscriptions.solDistributions.sol", i.a.createElement("ul", null, y._("{=SubredditPoints.sol}{=Subscriptions.sol}{=Distributions.sol}", [y._param("=SubredditPoints.sol", i.a.createElement("li", null, y._("{=SubredditPoints.sol}", [y._param("=SubredditPoints.sol", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0xb1ff5e09AbFD975bedEAf9F3858F0B14c4876E30/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("SubredditPoints.sol", null, {
						hk: "2ACF9O"
					})))], {
						hk: "cIW9L"
					}))), y._param("=Subscriptions.sol", i.a.createElement("li", null, y._("{=Subscriptions.sol}", [y._param("=Subscriptions.sol", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0xaF6bf4c56cB5e4D64b65049be9E188b1f8Cf8448/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("Subscriptions.sol", null, {
						hk: "G6Qcv"
					})))], {
						hk: "3r0g3Z"
					}))), y._param("=Distributions.sol", i.a.createElement("li", null, y._("{=Distributions.sol}", [y._param("=Distributions.sol", i.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0x22037C488520DF547c2cd2AA0BE70517082BDA1C/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("Distributions.sol", null, {
						hk: "2delWk"
					})))], {
						hk: "284ehF"
					})))], {
						hk: "2r8LKN"
					}))), y._param("=When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", i.a.createElement("p", null, y._("When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", null, {
						hk: "3E3J1d"
					})))], {
						hk: "4wel7O"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, y._("Community Points API", null, {
						hk: "2HYKPs"
					})), i.a.createElement("p", null, y._("To get users' addresses and balances, you can use this API.", null, {
						hk: "3fql24"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "GET https://meta-api.reddit.com/wallets/{subredditId}\n\nParams:\n@subredditId: Path parameter. The t5_* ID of the subreddit. It can be found from ", i.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_r_{subreddit}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/r/{subreddit}/about"), ".", "\n@userIds: Query parameter. Comma-separated list of user IDs in t2_* format. These IDs can be found from ", i.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_user_{username}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/user/{username}/about"))), i.a.createElement("p", null, y._("For example:", null, {
						hk: "2DPko9"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, 'GET https://meta-api.reddit.com/wallets/t5_2wlj3?userIds=t2_test1,t2_test2\n\nReturns:\n{\n  "t2_test1": {\n    "amount": "50535317008090965261",\n    "amounts": {\n      "locked": {\n        "amount": null\n      },\n      "points": {\n        "amount": "50535317008090965261",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0x01d175F6281F65b10205575B728d863f9cEa1924"\n  },\n  "t2_test2": {\n    "amount": "2306138031105478375111",\n    "amounts": {\n      "locked": {\n        "amount": null\n      },\n      "points": {\n        "amount": "2306138031105478375111",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0xf847bB2AB11F395e909D87cEAf241d071CDEF8b1"\n  }\n}\n')), y._("{=Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).}{=For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.}", [y._param("=Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).", i.a.createElement("p", null, y._("Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).", null, {
						hk: "zbzLN"
					}))), y._param("=For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.", i.a.createElement("p", null, y._("For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.", null, {
						hk: "2UzG0Z"
					})))], {
						hk: "2XOMZr"
					}))), null),
					faqs: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, k._("Frequently Asked Questions", null, {
						hk: "43ocB2"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("Why is Reddit doing this?", null, {
						hk: "350rGF"
					})), k._("{=Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!}", [k._param("=Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!", i.a.createElement("p", null, k._("Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!", null, {
						hk: "2KBHuF"
					})))], {
						hk: "VBuiX"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("Isn't crypto terrible for the environment?", null, {
						hk: "If5nI"
					})), k._('{=Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on the Ethereum blockchain, which is upgrading to a new version that uses 99.95% less energy}{=In addition, our project does not run on the blockchain directly. We run on a "layer 2" scaling network, which reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.}', [k._param("=Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on the Ethereum blockchain, which is upgrading to a new version that uses 99.95% less energy", i.a.createElement("p", null, k._("Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on the Ethereum blockchain, which is upgrading to a new version that uses {=99.95% less energy}.", [k._param("=99.95% less energy", i.a.createElement("a", {
						href: "https://blog.ethereum.org/2021/05/18/country-power-no-more/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, k._("99.95% less energy", null, {
						hk: "EFiAO"
					})))], {
						hk: "1MMS3T"
					}))), k._param('=In addition, our project does not run on the blockchain directly. We run on a "layer 2" scaling network, which reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.', i.a.createElement("p", null, k._('In addition, our project does not run on the blockchain directly. We run on a "layer 2" scaling network, which reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.', null, {
						hk: "4cgFwi"
					})))], {
						hk: "2VPvOC"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("Why didn't I get Points?", null, {
						hk: "2AOZSW"
					})), k._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches the your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We\'ll be happy to take a look!}', [k._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches the your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We\'ll be happy to take a look!', i.a.createElement("ol", null, k._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}{=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}{=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}{=If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}{=If a) the address in the CSV matches the your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We\'ll be happy to take a look!}', [k._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("li", null, k._('Go to your subreddit and look for the most recent post from u/CommunityPoints. {=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [k._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("ol", null, k._('{=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [k._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("li", null, k._('If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', null, {
						hk: "3ggjtQ"
					})))], {
						hk: "1IzW6B"
					})))], {
						hk: "5RoAe"
					}))), k._param('=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.', i.a.createElement("li", null, k._('If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. {=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}', [k._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("ol", null, k._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [k._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("li", null, k._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.}{=Keep in mind that your own votes don't give you karma.}{=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [k._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", i.a.createElement("p", null, k._("If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", null, {
						hk: "3ZbUDK"
					}))), k._param("=Keep in mind that your own votes don't give you karma.", i.a.createElement("p", null, k._("Keep in mind that your own votes don't give you karma.", null, {
						hk: "4wft8H"
					}))), k._param("=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("p", null, k._("You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", null, {
						hk: "1rqgvm"
					})))], {
						hk: "1FSJu4"
					})))], {
						hk: "4uIwsq"
					})))], {
						hk: "2gKiCT"
					}))), k._param('=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', i.a.createElement("li", null, k._('If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". {=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}', [k._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', i.a.createElement("ol", null, k._('{=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.}{=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}', [k._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', i.a.createElement("li", null, k._('If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', null, {
						hk: "38Ruep"
					}))), k._param('=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', i.a.createElement("li", null, k._('If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at {=spsupport@reddit.com} in case there are delays.', [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "2opeCq"
					})))], {
						hk: "3rVdex"
					})))], {
						hk: "3nMV2j"
					})))], {
						hk: "49pcqA"
					}))), k._param('=If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault', i.a.createElement("li", null, k._('If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. {=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}', [k._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("ol", null, k._("{=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [k._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("li", null, k._("If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: {=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [k._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("ol", null, k._("{=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page}{=Sign out of your current Vault}{=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address}{=Send the Points in the old Vault to the address you copied for the new Vault}{=Sign out of the old Vault and recover the new Vault}", [k._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", i.a.createElement("li", null, k._("Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", null, {
						hk: "3izxiB"
					}))), k._param("=Sign out of your current Vault", i.a.createElement("li", null, k._("Sign out of your current Vault", null, {
						hk: "2d3r58"
					}))), k._param("=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", i.a.createElement("li", null, k._("Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", null, {
						hk: "3Rf0XX"
					}))), k._param("=Send the Points in the old Vault to the address you copied for the new Vault", i.a.createElement("li", null, k._("Send the Points in the old Vault to the address you copied for the new Vault", null, {
						hk: "FBvN3"
					}))), k._param("=Sign out of the old Vault and recover the new Vault", i.a.createElement("li", null, k._("Sign out of the old Vault and recover the new Vault", null, {
						hk: "3IwEgJ"
					})))], {
						hk: "3K6Mt7"
					})))], {
						hk: "3HSMyR"
					})))], {
						hk: "2G6iAo"
					})))], {
						hk: "1Qu07b"
					}))), k._param("=If a) the address in the CSV matches the your active Vault, b) you don't see a \"Claiming Your Points\" card, c) it's been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We'll be happy to take a look!", i.a.createElement("li", null, k._("If a) the address in the CSV matches the your active Vault, b) you don't see a \"Claiming Your Points\" card, c) it's been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support at {=spsupport@reddit.com} with your username and everything you have checked so far. We'll be happy to take a look!", [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "3hNIFQ"
					})))], {
						hk: "3eBZNs"
					})))], {
						hk: "30vb6f"
					})))], {
						hk: "4vCgXk"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("How do I cancel my Special Membership?", null, {
						hk: "xyJU9"
					})), k._("{=It depends on how you bought your membership:}{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [k._param("=It depends on how you bought your membership:", i.a.createElement("p", null, k._("It depends on how you bought your membership:", null, {
						hk: "Fjdqz"
					}))), k._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("ul", null, k._("{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special}{=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.}{=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.}{=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [k._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special", i.a.createElement("li", null, k._("If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to {=https://www.reddit.com/settings/special}.", [k._param("=https://www.reddit.com/settings/special", i.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, k._("https://www.reddit.com/settings/special", null, {
						hk: "yRGwB"
					})))], {
						hk: "1I2Ufp"
					}))), k._param("=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", i.a.createElement("li", null, k._("If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", null, {
						hk: "3imBhX"
					}))), k._param("=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", i.a.createElement("li", null, k._("If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", null, {
						hk: "325BV7"
					}))), k._param("=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("li", null, k._("If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "3KdlJw"
					})))], {
						hk: "1TAfIY"
					})))], {
						hk: "3mzCJw"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("Help! I've lost my Recovery Phrase and/or Vault Password, can you reset my Vault for me?", null, {
						hk: "3CQUe7"
					})), k._("{=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.}{=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.}", [k._param("=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", i.a.createElement("p", null, k._("Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", null, {
						hk: "3G2izr"
					}))), k._param("=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.", i.a.createElement("p", null, k._("Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.", null, {
						hk: "37f9e8"
					})))], {
						hk: "3maDCP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("What if I get banned? What happens to my Points or my Special Membership?", null, {
						hk: "4cvjGM"
					})), i.a.createElement("p", null, k._("Your existing Points will forever remain on your Ethereum account, but you will get locked out of Vault. You'll also stop receiving distributions, and any Special Membership renewals will be cancelled.", null, {
						hk: "VE9mN"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, k._("I don't see Vault in the app.", null, {
						hk: "1Dg0cD"
					})), k._("{=Vault will appear in the left drawer when you meet one of the following conditions:}{=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points}{=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.}{=If you are still having trouble, please reach out to us at spsupport@reddit.com}", [k._param("=Vault will appear in the left drawer when you meet one of the following conditions:", i.a.createElement("p", null, k._("Vault will appear in the left drawer when you meet one of the following conditions:", null, {
						hk: "2MsMEt"
					}))), k._param("=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points", i.a.createElement("ul", null, k._("{=Have unclaimed Points}{=Have a non-zero Points amount}{=Subscribed to a subreddit with Community Points}", [k._param("=Have unclaimed Points", i.a.createElement("li", null, k._("Have unclaimed Points", null, {
						hk: "hI3Hy"
					}))), k._param("=Have a non-zero Points amount", i.a.createElement("li", null, k._("Have a non-zero Points amount", null, {
						hk: "42XttM"
					}))), k._param("=Subscribed to a subreddit with Community Points", i.a.createElement("li", null, k._("Subscribed to a subreddit with Community Points", null, {
						hk: "CMFPv"
					})))], {
						hk: "MHuQT"
					}))), k._param("=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", i.a.createElement("p", null, k._("Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", null, {
						hk: "iiwJ6"
					}))), k._param("=If you are still having trouble, please reach out to us at spsupport@reddit.com", i.a.createElement("p", null, k._("If you are still having trouble, please reach out to us at {=spsupport@reddit.com}.", [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "22LkwP"
					})))], {
						hk: "3Afq8V"
					})))], {
						hk: "2xC49i"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("I'm not seeing my Points on my account.", null, {
						hk: "2NxZoE"
					})), k._("{=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please reach out tospsupport@reddit.com}{=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.}{=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:}{=Go to Vault → SettingsTap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase}", [k._param("=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please reach out tospsupport@reddit.com", i.a.createElement("p", null, k._("If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please reach out to {=spsupport@reddit.com}.", [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "1dCdE4"
					})))], {
						hk: "2ouRW"
					}))), k._param("=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", i.a.createElement("p", null, k._("Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", null, {
						hk: "3WlyDb"
					}))), k._param("=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:", i.a.createElement("p", null, k._("If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:", null, {
						hk: "NrvIV"
					}))), k._param("=Go to Vault → SettingsTap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase", i.a.createElement("ul", null, k._("{=Go to Vault → Settings}{=Tap on Log Out}{=Select your old Vault address from the list}{=Recover using Reddit Backup or a Recovery Phrase}", [k._param("=Go to Vault → Settings", i.a.createElement("li", null, k._("Go to Vault → Settings", null, {
						hk: "1jVHBp"
					}))), k._param("=Tap on Log Out", i.a.createElement("li", null, k._("Tap on Log Out", null, {
						hk: "2Qpk7d"
					}))), k._param("=Select your old Vault address from the list", i.a.createElement("li", null, k._("Select your old Vault address from the list", null, {
						hk: "1CXNFk"
					}))), k._param("=Recover using Reddit Backup or a Recovery Phrase", i.a.createElement("li", null, k._("Recover using Reddit Backup or a Recovery Phrase", null, {
						hk: "4h9mKi"
					})))], {
						hk: "3MbDfS"
					})))], {
						hk: "3hEtul"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("I got charged for a Special Membership but I haven't received it.", null, {
						hk: "bhcQn"
					})), i.a.createElement("p", null, k._("Please reach out to us at {=spsupport@reddit.com}.", [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "26QlJV"
					})))], {
						hk: "CvFCR"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, k._("I converted my Points into Reddit Coins, but I don't want them anymore. Can you revert the transaction?", null, {
						hk: "RDin6"
					})), i.a.createElement("p", null, k._("This is not possible. Conversion into Coins is final and cannot be reversed, since Points are burned in the process.", null, {
						hk: "1RwfEY"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, k._("How do I delete my Vault?", null, {
						hk: "1b4Gqs"
					})), k._("{=You can sign out from your Vault and that will delete the wallet from your device. This won't affect your balance or your visible public address. To do that, go to Vault → Setting → Sign out.}{=If you wish to completely delete your Vault, please reach out to us atspsupport@reddit.com}", [k._param("=You can sign out from your Vault and that will delete the wallet from your device. This won't affect your balance or your visible public address. To do that, go to Vault → Setting → Sign out.", i.a.createElement("p", null, k._("You can sign out from your Vault and that will delete the wallet from your device. This won't affect your balance or your visible public address. To do that, go to Vault → Setting → Sign out.", null, {
						hk: "1FwGKB"
					}))), k._param("=If you wish to completely delete your Vault, please reach out to us atspsupport@reddit.com", i.a.createElement("p", null, k._("If you wish to completely delete your Vault, please reach out to us at {=spsupport@reddit.com}.", [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "2jsfHg"
					})))], {
						hk: "4oZTyn"
					})))], {
						hk: "3DCkB7"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, k._("I haven't found my answer. How do I get support?", null, {
						hk: "1iLsnr"
					})), i.a.createElement("p", null, k._("If you have questions, please reach out to us at {=spsupport@reddit.com}.", [k._param("=spsupport@reddit.com", i.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, k._("spsupport@reddit.com", null, {
						hk: "DjyKg"
					})))], {
						hk: "3CbI5h"
					})))), null)
				};
			var z = o("./src/reddit/icons/svgs/Snoo/index.tsx"),
				U = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less"),
				H = o.n(U);
			const {
				fbt: J
			} = o("./node_modules/fbt/lib/FbtPublic.js"), K = () => i.a.createElement("div", {
				className: H.a.container
			}, i.a.createElement("footer", {
				className: H.a.content
			}, i.a.createElement(z.a, {
				className: H.a.logo
			}), i.a.createElement("span", {
				className: H.a.copyright
			}, J._("© 2021 Reddit, Inc.", null, {
				hk: "2AJJq2"
			})), i.a.createElement("span", {
				className: H.a.spacer
			}), i.a.createElement(b.a, {
				className: H.a.link,
				to: h("introduction")
			}, J._("Community Points Documentation", null, {
				hk: "KW8cc"
			})), i.a.createElement("span", {
				className: H.a.spacer
			}), i.a.createElement("a", {
				className: H.a.link,
				href: "https://www.redditinc.com/policies/previews-terms",
				target: "_blank",
				rel: "noopener noreferrer"
			}, J._("Previews Terms of Use", null, {
				hk: "4lPHBN"
			}))));
			var Q = o("./src/lib/loadableAction/index.ts"),
				X = o("./src/reddit/controls/Button/index.tsx"),
				Z = o("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				$ = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less"),
				ee = o.n($);
			const te = () => {
					const e = Object(r.d)(),
						t = Object(r.e)(I.W);
					return i.a.createElement("header", {
						className: Object(u.a)(ee.a.container, {
							[ee.a.nightmode]: t
						})
					}, i.a.createElement(b.a, {
						"aria-label": T.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: ee.a.logo,
						to: "/",
						onClick: () => e(Object(Q.a)(() => o.e("Frontpage").then(o.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
					}, i.a.createElement(z.a, {
						className: ee.a.snoo
					}), i.a.createElement(Z.a, {
						className: ee.a.wordmark
					})), i.a.createElement("div", {
						className: ee.a.sections
					}, oe.map(({
						displayText: e,
						link: t
					}) => i.a.createElement("a", {
						href: t,
						key: e,
						className: ee.a.sectionText
					}, e))), i.a.createElement(X.t, {
						className: ee.a.joinWaitlist,
						priority: X.c.Secondary,
						kind: X.b.ExternalLink,
						href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
						target: "_blank",
						rel: "noopener noreferrer"
					}, T.fbt._("Join Waitlist", null, {
						hk: "4rpEy2"
					})))
				},
				oe = [{
					displayText: T.fbt._("Token", null, {
						hk: "3pTjX0"
					}),
					link: "/community-points/#token"
				}, {
					displayText: T.fbt._("Benefits", null, {
						hk: "2J9q91"
					}),
					link: "/community-points/#benefits"
				}, {
					displayText: T.fbt._("Features", null, {
						hk: "31VVaC"
					}),
					link: "/community-points/#features"
				}, {
					displayText: T.fbt._("Vault", null, {
						hk: "3pQLt1"
					}),
					link: "/community-points/#vault"
				}, {
					displayText: T.fbt._("Future", null, {
						hk: "39h3VE"
					}),
					link: "/community-points/#future"
				}, {
					displayText: T.fbt._("Enroll", null, {
						hk: "3ZbEx3"
					}),
					link: "/community-points/#enroll"
				}, {
					displayText: T.fbt._("Documentation", null, {
						hk: "3BxUWp"
					}),
					link: h("introduction")
				}];
			var ne = o("./src/lib/getParsedUserAgent/index.ts"),
				ae = o("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				ie = o("./src/reddit/helpers/trackers/communityPoints.ts"),
				re = o("./src/reddit/hooks/useTracking.ts"),
				se = o("./src/reddit/selectors/economics.ts"),
				le = o("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				ue = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				ce = o.n(ue);

			function de(e, t = !0) {
				return `${n.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var me = function({
					className: e,
					onComplete: t
				}) {
					const [o, n] = Object(a.useState)(0), s = Object(r.e)(se.m), l = s && s.learnMore.pages || [], c = l.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), d = e => {
						n(e), e + 1 === l.length && t()
					};
					return i.a.createElement("div", {
						className: Object(u.a)(ce.a.carousel, e)
					}, i.a.createElement("div", {
						className: ce.a.imageContainer
					}, l.map((e, t) => i.a.createElement("img", {
						src: de(t),
						srcSet: `${de(t,!1)}, ${de(t)} 2x`,
						className: Object(u.a)(ce.a.image, {
							[ce.a.before]: t < o,
							[ce.a.active]: t === o,
							[ce.a.after]: t > o
						}),
						key: t
					}))), i.a.createElement("div", {
						className: ce.a.textContainer
					}, i.a.createElement("div", {
						className: ce.a.hiddenText
					}, i.a.createElement("div", {
						className: ce.a.slideTitle
					}, l[0] && l[0].title), c), l.map((e, t) => i.a.createElement("div", {
						className: Object(u.a)(ce.a.text, {
							[ce.a.before]: t < o,
							[ce.a.active]: t === o,
							[ce.a.after]: t > o
						}),
						key: t
					}, i.a.createElement("div", {
						className: ce.a.slideTitle
					}, e.title), e.body))), i.a.createElement("div", {
						className: ce.a.pager
					}, l.map((e, t) => i.a.createElement("button", {
						key: t,
						onClick: () => d(t)
					}, i.a.createElement("div", {
						className: Object(u.a)(ce.a.progressDot, {
							[ce.a.active]: t === o
						})
					}))), l.length > 0 && i.a.createElement("button", {
						"aria-label": "Next",
						className: Object(u.a)(ce.a.nextButton, {
							[ce.a.hidden]: o === l.length - 1
						}),
						onClick: () => d(o + 1)
					}, i.a.createElement(le.a, {
						className: ce.a.arrowIcon
					}))))
				},
				he = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				pe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				ye = o.n(pe);

			function be(e) {
				const [t, o] = Object(a.useState)(!1), n = Object(re.a)();
				return i.a.createElement("div", {
					className: ye.a.section
				}, i.a.createElement("div", {
					className: ye.a.sectionTitle,
					onClick: () => {
						t || n(Object(ie.g)(e.id)), o(!t)
					}
				}, e.title, i.a.createElement("button", {
					className: Object(u.a)(ye.a.expando, {
						[ye.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, i.a.createElement(he.a, {
					className: ye.a.chevron
				}))), t && i.a.createElement("div", {
					className: ye.a.text
				}, e.children))
			}

			function fe(e) {
				const t = `${n.a.assetPath}/img/communityPoints/faq/${e.id}`;
				return i.a.createElement("img", {
					src: t + ".png",
					srcSet: `${t}.png, ${t}@2x.png 2x`
				})
			}
			var ge = function() {
					const e = Object(r.e)(se.m),
						t = Object(re.a)();
					Object(a.useEffect)(() => {
						t(Object(ie.f)())
					}, [t]);
					const o = e && e.faq || [];
					return i.a.createElement("div", {
						className: ye.a.container
					}, i.a.createElement("div", {
						className: ye.a.title
					}, "Frequently Asked Questions"), o.map(e => e.pages.map(e => i.a.createElement(be, {
						id: e.analyticsPageName,
						title: e.title,
						key: e.analyticsPageName
					}, e.sections.map((e, t) => "text" in e ? i.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: e.text
						},
						className: ye.a.subSection,
						key: t
					}) : "image" in e ? i.a.createElement("div", {
						className: ye.a.imageSection,
						key: t
					}, i.a.createElement(fe, {
						id: e.image
					})) : null)))))
				},
				we = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less"),
				ve = o.n(we);
			const {
				fbt: ke
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var _e = function() {
					const [e, t] = Object(a.useState)(!1), [o, s] = Object(a.useState)(!1), l = Object(r.e)(ne.e), u = Object(r.e)(se.m), c = Object(re.a)();
					Object(a.useEffect)(() => {
						c(Object(ie.h)())
					}, [c]);
					const d = u && u.learnMore.title;
					return i.a.createElement("div", {
						className: ve.a.container
					}, i.a.createElement("div", {
						className: ve.a.title
					}, d), i.a.createElement(me, {
						className: ve.a.carouselContainer,
						onComplete: () => t(!0)
					}), e && i.a.createElement(i.a.Fragment, null, i.a.createElement(X.l, {
						className: ve.a.createVaultButton,
						onClick: () => {
							c(Object(ie.b)()), l ? window.location.href = `${n.a.redditUrl}/vault/` : s(!0)
						}
					}, ke._("Create My Vault", null, {
						hk: "3ZzMgD"
					})), i.a.createElement(ge, null)), o && i.a.createElement(ae.b, {
						onClose: () => s(!1)
					}))
				},
				Pe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less"),
				Ee = o.n(Pe);
			const {
				fbt: Ce
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Se = ({
				className: e,
				data: t,
				anchorId: o,
				isExpanded: n,
				isHidden: a,
				onClickExpand: s,
				onClickHide: l
			}) => {
				const c = Object(r.e)(I.W);
				return i.a.createElement("div", {
					className: Object(u.a)(Ee.a.container, e, {
						[Ee.a.expanded]: n,
						[Ee.a.hidden]: a,
						[Ee.a.nightmode]: c
					})
				}, o && i.a.createElement(bt, {
					anchorId: o
				}), i.a.createElement("div", {
					className: Ee.a.imageSection,
					style: {
						backgroundColor: t.backgroundColor
					}
				}, i.a.createElement("img", {
					className: Object(u.a)(Ee.a.image, {
						[Ee.a.expanded]: n
					}),
					src: t.imageSrc,
					alt: t.title
				})), i.a.createElement("div", {
					className: Object(u.a)(Ee.a.textSection, {
						[Ee.a.expanded]: n,
						[Ee.a.nightmode]: c
					})
				}, i.a.createElement("h5", {
					className: Ee.a.title
				}, t.title), i.a.createElement("p", {
					className: Ee.a.subtitle
				}, t.subtitle), n && i.a.createElement("p", {
					className: Ee.a.body
				}, t.body), i.a.createElement("button", {
					onClick: n ? l : s,
					className: Object(u.a)(Ee.a.expandButton, {
						[Ee.a.expanded]: n
					}),
					"aria-label": n ? Ce._("Collapse", null, {
						hk: "LToWq"
					}) : Ce._("Expand", null, {
						hk: "4jMW0g"
					})
				}, i.a.createElement(_.a, {
					name: "add",
					className: Object(u.a)(Ee.a.plusIcon, {
						[Ee.a.expanded]: n
					})
				}))))
			};
			var Ie = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less"),
				Te = o.n(Ie);
			const {
				fbt: Ve
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Re = ({
				className: e
			}) => {
				const [t, o] = Object(a.useState)(null), [n, r] = Object(a.useState)(null);
				return Object(a.useEffect)(() => {
					if (null === n) return;
					const e = document.getElementById(xe(n));
					if (!e) return;
					const t = e.getBoundingClientRect().top;
					(t < 0 || t > window.innerHeight) && e.scrollIntoView({
						behavior: "smooth",
						block: "start"
					}), r(null)
				}, [n]), i.a.createElement("div", {
					className: e
				}, i.a.createElement(bt, {
					anchorId: "benefits"
				}), i.a.createElement("h2", {
					className: Te.a.title
				}, Ve._("Take your community to the next level", null, {
					hk: "PqrYm"
				})), i.a.createElement("div", {
					className: Object(u.a)(Te.a.benefitsContainer, {
						[Te.a.expanded]: null !== t
					})
				}, Me.map((e, n) => i.a.createElement(Se, {
					key: n,
					data: e,
					anchorId: xe(n),
					isExpanded: null !== t && n === t,
					isHidden: null !== t && n !== t,
					onClickExpand: () => {
						o(n), r(n)
					},
					onClickHide: () => {
						o(null), r(n)
					}
				}))))
			}, xe = e => `expandable-text-${e}`, Me = [{
				title: Ve._("Reward the community, for real", null, {
					hk: "26o9ra"
				}),
				subtitle: Ve._("Earn something valuable for all the hours you put into your community.", null, {
					hk: "SQfOp"
				}),
				body: Ve._("Community Points are a way for Redditors to own a piece of their favorite communities. Moderators and content creators earn Points by contributing to the community, and they can spend their Points on special features, display their Points as reputation in the community, and vote with their Points to weigh in on community decisions.", null, {
					hk: "Xdxas"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reward_the_community_v3.png`,
				backgroundColor: "#E2D399"
			}, {
				title: Ve._("Unlock special features", null, {
					hk: "49hRJ2"
				}),
				subtitle: Ve._("Buy community features with Community Points, like Special Memberships and awards.", null, {
					hk: "11dSn1"
				}),
				body: Ve._("Community Points unlock special features in subreddits that adopt them. For example, they can be used to purchase Special Memberships, which give users access to community-themed badges, highlighted usernames, and the ability to embed rich media in their comments. Or they can be converted to Coins that can be used in the subreddit to give out awards.", null, {
					hk: "19OcvD"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/premium_features_v3.png`,
				backgroundColor: "#B3F1FF"
			}, {
				title: Ve._("Encourage better content and conversation", null, {
					hk: "3EKFJU"
				}),
				subtitle: Ve._("Use Community Points as an incentive to shape content and behavior in your community.", null, {
					hk: "3fIFZj"
				}),
				body: Ve._("Community Points introduce a powerful incentive system that communities can customize to their needs. Want to see more long-form text posts and comments? Reward this kind of content more. Want to see fewer low-effort memes? Give out fewer Points for them. (Or reward memes even more, it&apos;s up to you and your community!)", null, {
					hk: "3rbD1b"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/hq_content_v3.png`,
				backgroundColor: "#E3D7F4"
			}, {
				title: Ve._("Empower the community", null, {
					hk: "4xbWZA"
				}),
				subtitle: Ve._("Use polls to let the community weigh in on important decisions, including how Community Points should be distributed.", null, {
					hk: "S9sAC"
				}),
				body: Ve._("Subreddits can create polls where votes are weighted according to how many Points users have earned in the community. Instead of seeing only the loudest comments, measure how long-term members actually feel and use this mechanism to evolve how your community makes decisions.", null, {
					hk: "SD836"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/get_input_v3.png`,
				backgroundColor: "#A7EAD0"
			}, {
				title: Ve._("Use Points as a flexible tool", null, {
					hk: "16j4nt"
				}),
				subtitle: Ve._("Give out Points as prizes for events and contests and integrate Points with community bots such as Automod.", null, {
					hk: "4qJAr"
				}),
				body: Ve._("Points are a flexible tool you can use for many purposes in your community. Community Points can be prizes for community events, such as a trivia thread. Points can also be used with community bots, including Automod, to do things like host a discussion thread only for core community contributors or thank Special Members when they make a post.", null, {
					hk: "2dx02y"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/community_together_v3.png`,
				backgroundColor: "#FFC2C2"
			}, {
				title: Ve._("Customize your Points", null, {
					hk: "4jECbt"
				}),
				subtitle: Ve._("Each subreddit creates its own Community Points token, with a custom name and symbol.", null, {
					hk: "2hgheb"
				}),
				body: Ve._("Every subreddit&apos;s Community Points are unique to it, with a name chosen by the community and a symbol to match. These tokens live on the blockchain, which means they are owned and controlled fully by the community.", null, {
					hk: "lbmXo"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/customize_points_v3.png`,
				backgroundColor: "#DDDDDD"
			}];
			var Ae = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less"),
				Ne = o.n(Ae);
			const {
				fbt: je
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Be = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(u.a)(Ne.a.container, e)
			}, i.a.createElement(bt, {
				anchorId: "token"
			}), i.a.createElement("div", {
				className: Ne.a.mainSceneMaxWidthContainer
			}, i.a.createElement("div", {
				className: Ne.a.mainSceneContainer
			}, i.a.createElement("picture", {
				className: Ne.a.mainScene
			}, i.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v2.mov`,
				type: "video/mp4"
			}), i.a.createElement("source", {
				media: "(min-width: 868px)",
				srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v3.webp`,
				type: "image/webp"
			}), i.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_mobile_v3.webp`,
				type: "image/webp"
			}), i.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_static_v2.png`,
				type: "image/png"
			}), i.a.createElement("img", {
				alt: je._("Community Points Hero Image", null, {
					hk: "28I6Y4"
				}),
				className: Ne.a.fallbackStaticImage,
				srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_static.png`
			})))), i.a.createElement("h3", {
				className: Ne.a.title
			}, je._("Community Points {=[beta]}", [je._param("=[beta]", i.a.createElement("sup", {
				className: Ne.a.super
			}, je._("[beta]", null, {
				hk: "LPmnm"
			})))], {
				hk: "2yMt7C"
			})), i.a.createElement("h2", {
				className: Ne.a.subtitle
			}, je._("Own a piece of your community", null, {
				hk: "xjmHz"
			})), i.a.createElement("p", {
				className: Ne.a.bodyText
			}, je._("Add a custom token to your subreddit. Earn rewards, encourage quality content, and unlock special features.", null, {
				hk: "2JXihD"
			})), i.a.createElement(X.t, {
				className: Ne.a.waitlistButton,
				priority: X.c.Primary,
				kind: X.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank",
				rel: "noopener noreferrer"
			}, je._("Join Waitlist", null, {
				hk: "4rpEy2"
			})));
			var Fe = o("./src/higherOrderComponents/asModal/index.tsx"),
				Oe = o("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				De = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/carouselModal.m.less"),
				qe = o.n(De);
			const Le = Object(Fe.a)(({
				onClose: e
			}) => i.a.createElement("div", {
				className: qe.a.container
			}, i.a.createElement(Oe.a, {
				onClick: e,
				highContrast: !0
			}), i.a.createElement(me, {
				onComplete: () => {}
			})));
			var Ye = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less"),
				We = o.n(Ye);
			const {
				fbt: Ge
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ze = ({
				className: e
			}) => {
				const [t, o] = Object(a.useState)(!1);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(u.a)(e, We.a.container)
				}, i.a.createElement(bt, {
					anchorId: "future"
				}), i.a.createElement("img", {
					className: We.a.image,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/crypto_future_v3.png`,
					alt: Ge._("Imagine a crypto future", null, {
						hk: "2fm7jC"
					})
				}), i.a.createElement("div", {
					className: We.a.textContainer
				}, i.a.createElement("h3", {
					className: We.a.title
				}, Ge._("Step into the crypto future", null, {
					hk: "4kMpHZ"
				})), i.a.createElement("div", {
					className: We.a.body
				}, Ge._("{=Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.}{=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.}", [Ge._param("=Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", i.a.createElement("p", null, Ge._("Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", null, {
					hk: "24YdSx"
				}))), Ge._param("=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.", i.a.createElement("p", null, Ge._("Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.", null, {
					hk: "1IBSEK"
				})))], {
					hk: "3dfbBB"
				})), i.a.createElement(X.t, {
					Icon: Object(_.b)("topic_reading"),
					className: We.a.button,
					iconClassName: We.a.buttonIcon,
					priority: X.c.Secondary,
					onClick: () => o(!0)
				}, Ge._("A New Frontier", null, {
					hk: "4GrPd2"
				})))), t && i.a.createElement(Le, {
					className: We.a.modal,
					overlayClassName: We.a.modalOverlay,
					withOverlay: !0,
					onOverlayClick: () => o(!1),
					onClose: () => o(!1)
				}))
			};
			var Ue = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less"),
				He = o.n(Ue);
			const {
				fbt: Je
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ke = ({
				className: e
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement("div", {
				className: He.a.background
			}, i.a.createElement("img", {
				className: He.a.snoo,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/faq_v3.png`,
				alt: Je._("FAQ Snoo", null, {
					hk: "DXQ0O"
				})
			}), i.a.createElement("h2", {
				className: He.a.subtitle
			}, Je._("Want to know more?", null, {
				hk: "3vbn1B"
			})), i.a.createElement(X.t, {
				Icon: Object(_.b)("topic_reading"),
				className: He.a.docsButton,
				iconClassName: He.a.docsIcon,
				priority: X.c.Secondary,
				kind: X.b.InternalLink,
				to: h("introduction")
			}, i.a.createElement("span", {
				className: He.a.docTextFull
			}, Je._("Community Points Documentation", null, {
				hk: "3nnz6o"
			})), i.a.createElement("span", {
				className: He.a.docTextShort
			}, Je._("Community Points Doc", null, {
				hk: "1E9Ckc"
			})))));
			var Qe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less"),
				Xe = o.n(Qe);
			const {
				fbt: Ze
			} = o("./node_modules/fbt/lib/FbtPublic.js"), $e = ({
				className: e,
				data: t
			}) => i.a.createElement("div", {
				className: Object(u.a)(Xe.a.container, e),
				style: {
					backgroundColor: t.backgroundColor
				}
			}, i.a.createElement("div", {
				className: Xe.a.textSection
			}, i.a.createElement("div", {
				className: Xe.a.textContainer
			}, i.a.createElement("h4", {
				className: Xe.a.title
			}, t.title), t.body)), i.a.createElement("div", {
				className: Xe.a.imageSection
			}, i.a.createElement("img", {
				className: Xe.a.image,
				src: t.imageSrc,
				alt: t.title
			})));
			var et = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less"),
				tt = o.n(et);
			const {
				fbt: ot
			} = o("./node_modules/fbt/lib/FbtPublic.js"), nt = ({
				className: e
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement(bt, {
				anchorId: "features"
			}), i.a.createElement("h3", {
				className: tt.a.title
			}, ot._("Features", null, {
				hk: "Bhlfk"
			})), i.a.createElement("h2", {
				className: tt.a.subtitle
			}, ot._("Oh, the possibilities!", null, {
				hk: "1Up4RN"
			})), at.map(e => i.a.createElement($e, {
				className: tt.a.featureContainer,
				key: e.title,
				data: e
			}))), at = [{
				title: ot._("Own your reputation", null, {
					hk: "2Z40M2"
				}),
				body: ot._("{=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.}{=But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!}", [ot._param("=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", i.a.createElement("p", {
					className: tt.a.bodyText
				}, ot._("Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", null, {
					hk: "22eCEg"
				}))), ot._param("=But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!", i.a.createElement("p", {
					className: tt.a.bodyText
				}, ot._("But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!", null, {
					hk: "4a3vgy"
				})))], {
					hk: "3wqGEI"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reputation_v3.png`,
				backgroundColor: "#FF5C0033"
			}, {
				title: ot._("Purchase Special Memberships", null, {
					hk: "4c0PPs"
				}),
				body: ot._("{=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:}{=Badges}{=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.}{=GIFs (optional)}{=Embed GIFs directly inside your comments.}{=Animated Emojis}{=Let creators in your community upload custom emojis that you can add to your comments.}", [ot._param("=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", i.a.createElement("p", {
					className: Object(u.a)(tt.a.bodyText, tt.a.blackText)
				}, ot._("Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", null, {
					hk: "3KdhAP"
				}))), ot._param("=Badges", i.a.createElement("h6", {
					className: tt.a.bodyTitle
				}, ot._("Badges", null, {
					hk: "1Xw4PQ"
				}))), ot._param("=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", i.a.createElement("p", {
					className: tt.a.bodyDetail
				}, ot._("Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", null, {
					hk: "3mrVe"
				}))), ot._param("=GIFs (optional)", i.a.createElement("h6", {
					className: tt.a.bodyTitle
				}, ot._("GIFs (optional)", null, {
					hk: "1OkOrY"
				}))), ot._param("=Embed GIFs directly inside your comments.", i.a.createElement("p", {
					className: tt.a.bodyDetail
				}, ot._("Embed GIFs directly inside your comments.", null, {
					hk: "TmLOL"
				}))), ot._param("=Animated Emojis", i.a.createElement("h6", {
					className: tt.a.bodyTitle
				}, ot._("Animated Emojis", null, {
					hk: "18gq4g"
				}))), ot._param("=Let creators in your community upload custom emojis that you can add to your comments.", i.a.createElement("p", {
					className: tt.a.bodyDetail
				}, ot._("Let creators in your community upload custom emojis that you can add to your comments.", null, {
					hk: "Ot9Cs"
				})))], {
					hk: "11CKRv"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/special_memberships_v3.png`,
				backgroundColor: "#D4F6FF"
			}, {
				title: ot._("Buy Coins in your community", null, {
					hk: "3LFg3T"
				}),
				body: i.a.createElement("p", {
					className: tt.a.bodyText
				}, ot._("Make it rain awards! You can use your Community Points to buy Reddit Coins that only work in the subreddit.", null, {
					hk: "4BNxrU"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/awards_v3.png`,
				backgroundColor: "#00CC7833"
			}, {
				title: ot._("Put anything to a vote", null, {
					hk: "3PT2yA"
				}),
				body: ot._("{=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.}{=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.}", [ot._param("=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", i.a.createElement("p", {
					className: tt.a.bodyText
				}, ot._("Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", null, {
					hk: "Occ8f"
				}))), ot._param("=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", i.a.createElement("p", {
					className: tt.a.bodyText
				}, ot._("Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", null, {
					hk: "20PHmT"
				})))], {
					hk: "KZiXt"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/polls_v3.png`,
				backgroundColor: "#FFD63533"
			}, {
				title: ot._("Show your appreciation", null, {
					hk: "16HCcH"
				}),
				body: ot._("{=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.}", [ot._param("=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", i.a.createElement("p", {
					className: tt.a.bodyText
				}, ot._("Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", null, {
					hk: "3PzATh"
				})))], {
					hk: "3Lb9Rr"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/tipping_v3.png`,
				backgroundColor: "#F86AEA33"
			}, {
				title: ot._("Reward creators and developers", null, {
					hk: "3gxoDp"
				}),
				body: i.a.createElement("p", {
					className: Object(u.a)(tt.a.bodyText, tt.a.blackText)
				}, ot._("Creators can be rewarded for making things for the subreddit, such as designing badges or community merchandise. Developers who make community bots or tools for the subreddit can be paid in Points for their work.", null, {
					hk: "2aZ9Y6"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/creator_rewards_v3.png`,
				backgroundColor: "#FFF9F3"
			}];
			var it = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less"),
				rt = o.n(it);
			const {
				fbt: st
			} = o("./node_modules/fbt/lib/FbtPublic.js"), lt = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(u.a)(e, rt.a.container)
			}, i.a.createElement(bt, {
				anchorId: "enroll"
			}), i.a.createElement("div", {
				className: rt.a.backgroundContainer
			}, i.a.createElement("h3", {
				className: rt.a.title
			}, st._("Join waitlist", null, {
				hk: "2MmQU3"
			})), i.a.createElement("h2", {
				className: rt.a.subtitle
			}, st._("Want to see Community Points in your subreddit?", null, {
				hk: "3a9HLq"
			})), i.a.createElement("p", {
				className: rt.a.body
			}, st._("Community Points will always be an opt-in feature. We are looking for a select few subreddits to join our crypto experiment. If you are a moderator, add yourself to the list and we'll be in touch!", null, {
				hk: "4uvkEJ"
			})), i.a.createElement(X.t, {
				className: rt.a.waitlistButton,
				priority: X.c.Primary,
				kind: X.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank",
				rel: "noopener noreferrer"
			}, st._("Join Waitlist", null, {
				hk: "p3fEV"
			})), i.a.createElement("img", {
				className: rt.a.moon,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/moon_v2.png`,
				alt: st._("The moon", null, {
					hk: "GQsMF"
				})
			}), i.a.createElement("img", {
				className: rt.a.rocket,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/rocket_v2.png`,
				alt: st._("Rocket", null, {
					hk: "6iIrb"
				})
			})));
			var ut = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less"),
				ct = o.n(ut);
			const {
				fbt: dt
			} = o("./node_modules/fbt/lib/FbtPublic.js"), mt = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(u.a)(e, ct.a.background)
			}, i.a.createElement(bt, {
				anchorId: "vault"
			}), i.a.createElement("div", {
				className: ct.a.textSection
			}, i.a.createElement("div", {
				className: ct.a.textContainer
			}, i.a.createElement("h3", {
				className: ct.a.title
			}, dt._("The Vault", null, {
				hk: "3UIB9U"
			})), i.a.createElement("h2", {
				className: ct.a.subtitle
			}, dt._("Your crypto wallet within Reddit", null, {
				hk: "40R31x"
			})), i.a.createElement("p", {
				className: ct.a.body
			}, dt._("Community Points live on the blockchain, and your Vault is where you can view, send, and use Community Points within the Reddit app.", null, {
				hk: "1g3lSo"
			})))), i.a.createElement("div", {
				className: ct.a.imageSection
			}, i.a.createElement("img", {
				className: ct.a.image,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/vault_v4.png`,
				alt: dt._("Reddit Vault", null, {
					hk: "8VmO1"
				})
			})));
			var ht = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				pt = o.n(ht);
			const {
				fbt: yt
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = Object(r.e)(s.a),
					t = Object(l.a)();
				if (!e) return i.a.createElement(_e, null);
				const o = (e => {
					var t, o;
					return (null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.path) === c.a
				})(t);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: pt.a.container
				}, i.a.createElement(te, null), o ? i.a.createElement(W, null) : i.a.createElement(i.a.Fragment, null, i.a.createElement(Be, {
					className: pt.a.communityPointsSection
				}), i.a.createElement(Re, {
					className: pt.a.benefitsSection
				}), i.a.createElement("img", {
					className: pt.a.spiral,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/spiral_v3.png`,
					alt: yt._("Spiraling coins", null, {
						hk: "IuYXo"
					})
				}), i.a.createElement(nt, {
					className: pt.a.featuresSection
				}), i.a.createElement(mt, {
					className: pt.a.vaultSection
				}), i.a.createElement(Ke, {
					className: pt.a.faqSection
				}), i.a.createElement(ze, {
					className: pt.a.cryptoFutureSection
				}), i.a.createElement(lt, {
					className: pt.a.joinWaitlistSection
				}))), !o && i.a.createElement(K, null))
			};
			const bt = ({
				anchorId: e
			}) => i.a.createElement("div", {
				className: pt.a.anchorParent
			}, i.a.createElement("a", {
				id: e,
				className: pt.a.anchor
			}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less": function(e, t, o) {
			e.exports = {
				container: "wGpiitJeL95e_NSp-VYWo",
				title: "_1QFOHyE3KyrQei4X08YZrG",
				createVaultButton: "_3RSwchbf9fQWrjkGUnYqw2",
				fadeIn: "_2ashSgNv6fi7q6NVcCU4dt",
				carouselContainer: "_8QI7ZAOT4cHsCBC8o8eLo"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.07474cb846508ba3afe7.js.map