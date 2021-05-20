// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.29363b1ef5cf61ca9f2b.js
// Retrieved at 5/20/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, r) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, t, r) {
					var o = {},
						i = {};
					i[t] = 0;
					var a, s, c, u, d, l, f, m = n.PriorityQueue.make();
					for (m.push(t, 0); !m.empty();)
						for (c in s = (a = m.pop()).value, u = a.cost, d = e[s] || {}) d.hasOwnProperty(c) && (l = u + d[c], f = i[c], (void 0 === i[c] || f > l) && (i[c] = l, m.push(c, l), o[c] = s));
					if (void 0 !== r && void 0 === i[r]) {
						var h = ["Could not find a path from ", t, " to ", r, "."].join("");
						throw new Error(h)
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
		"./node_modules/qrcode/lib/browser.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/can-promise.js"),
				o = r("./node_modules/qrcode/lib/core/qrcode.js"),
				i = r("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = r("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, r, i, a) {
				var s = [].slice.call(arguments, 1),
					c = s.length,
					u = "function" == typeof s[c - 1];
				if (!u && !n()) throw new Error("Callback required as last argument");
				if (!u) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (r = t, t = i = void 0) : 2 !== c || t.getContext || (i = r, r = t, t = void 0), new Promise((function(n, a) {
						try {
							var s = o.create(r, i);
							n(e(s, t, i))
						} catch (c) {
							a(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (a = r, r = t, t = i = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = r, r = t, t = void 0));
				try {
					var d = o.create(r, i);
					a(null, e(d, t, i))
				} catch (l) {
					a(l)
				}
			}
			t.create = o.create, t.toCanvas = s.bind(null, i.render), t.toDataURL = s.bind(null, i.renderToDataURL), t.toString = s.bind(null, (function(e, t, r) {
				return a.render(e, r)
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
				for (var t = Math.floor(e / 7) + 2, r = n(e), o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), i = [r - 7], a = 1; a < t - 1; a++) i[a] = i[a - 1] - o;
				return i.push(6), i.reverse()
			}, t.getPositions = function(e) {
				for (var r = [], n = t.getRowColCoords(e), o = n.length, i = 0; i < o; i++)
					for (var a = 0; a < o; a++) 0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || r.push([n[i], n[a]]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

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
					var r = 45 * o.indexOf(this.data[t]);
					r += o.indexOf(this.data[t + 1]), e.put(r, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
			}, e.exports = i
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

			function i(e) {
				this.mode = o.BYTE, this.data = n.from(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (var t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
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
				for (var r = e.bit << 3 | t, i = r << 10; n.getBCHDigit(i) - o >= 0;) i ^= 1335 << n.getBCHDigit(i) - o;
				return 21522 ^ (r << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n.alloc(512),
				i = n.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) o[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) o[t] = o[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return i[e]
			}, t.exp = function(e) {
				return o[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : o[i[e] + i[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/utils.js");

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
					var r = o.toSJIS(this.data[t]);
					if (r >= 33088 && r <= 40956) r -= 33088;
					else {
						if (!(r >= 57408 && r <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						r -= 49472
					}
					r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13)
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
			var r = 3,
				n = 3,
				o = 40,
				i = 10;

			function a(e, r, n) {
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
				for (var t = e.size, n = 0, o = 0, i = 0, a = null, s = null, c = 0; c < t; c++) {
					o = i = 0, a = s = null;
					for (var u = 0; u < t; u++) {
						var d = e.get(c, u);
						d === a ? o++ : (o >= 5 && (n += r + (o - 5)), a = d, o = 1), (d = e.get(u, c)) === s ? i++ : (i >= 5 && (n += r + (i - 5)), s = d, i = 1)
					}
					o >= 5 && (n += r + (o - 5)), i >= 5 && (n += r + (i - 5))
				}
				return n
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, r = 0, o = 0; o < t - 1; o++)
					for (var i = 0; i < t - 1; i++) {
						var a = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
						4 !== a && 0 !== a || r++
					}
				return r * n
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, r = 0, n = 0, i = 0, a = 0; a < t; a++) {
					n = i = 0;
					for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === n || 93 === n) && r++, i = i << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === i || 93 === i) && r++
				}
				return r * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
				return Math.abs(Math.ceil(100 * t / r / 5) - 10) * i
			}, t.applyMask = function(e, t) {
				for (var r = t.size, n = 0; n < r; n++)
					for (var o = 0; o < r; o++) t.isReserved(o, n) || t.xor(o, n, a(e, o, n))
			}, t.getBestMask = function(e, r) {
				for (var n = Object.keys(t.Patterns).length, o = 0, i = 1 / 0, a = 0; a < n; a++) {
					r(a), t.applyMask(a, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), s < i && (i = s, o = a)
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
				for (var r = n.alloc(e.length + t.length - 1), i = 0; i < e.length; i++)
					for (var a = 0; a < t.length; a++) r[i + a] ^= o.mul(e[i], t[a]);
				return r
			}, t.mod = function(e, t) {
				for (var r = n.from(e); r.length - t.length >= 0;) {
					for (var i = r[0], a = 0; a < t.length; a++) r[a] ^= o.mul(t[a], i);
					for (var s = 0; s < r.length && 0 === r[s];) s++;
					r = r.slice(s)
				}
				return r
			}, t.generateECPolynomial = function(e) {
				for (var r = n.from([1]), i = 0; i < e; i++) r = t.mul(r, [1, o.exp(i)]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/utils.js"),
				i = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = r("./node_modules/qrcode/lib/core/bit-buffer.js"),
				s = r("./node_modules/qrcode/lib/core/bit-matrix.js"),
				c = r("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				u = r("./node_modules/qrcode/lib/core/finder-pattern.js"),
				d = r("./node_modules/qrcode/lib/core/mask-pattern.js"),
				l = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = r("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				m = r("./node_modules/qrcode/lib/core/version.js"),
				h = r("./node_modules/qrcode/lib/core/format-info.js"),
				g = r("./node_modules/qrcode/lib/core/mode.js"),
				p = r("./node_modules/qrcode/lib/core/segments.js"),
				b = r("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, t, r) {
				var n, o, i = e.size,
					a = h.getEncodedBits(t, r);
				for (n = 0; n < 15; n++) o = 1 == (a >> n & 1), n < 6 ? e.set(n, 8, o, !0) : n < 8 ? e.set(n + 1, 8, o, !0) : e.set(i - 15 + n, 8, o, !0), n < 8 ? e.set(8, i - n - 1, o, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, o, !0) : e.set(8, 15 - n - 1, o, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function y(e, t, r) {
				var i = new a;
				r.forEach((function(t) {
					i.put(t.mode.bit, 4), i.put(t.getLength(), g.getCharCountIndicator(t.mode, e)), t.write(i)
				}));
				var s = 8 * (o.getSymbolTotalCodewords(e) - l.getTotalCodewordsCount(e, t));
				for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var c = (s - i.getLengthInBits()) / 8, u = 0; u < c; u++) i.put(u % 2 ? 17 : 236, 8);
				return function(e, t, r) {
					for (var i = o.getSymbolTotalCodewords(t), a = l.getTotalCodewordsCount(t, r), s = i - a, c = l.getBlocksCount(t, r), u = c - i % c, d = Math.floor(i / c), m = Math.floor(s / c), h = m + 1, g = d - m, p = new f(g), b = 0, v = new Array(c), y = new Array(c), _ = 0, w = n.from(e.buffer), E = 0; E < c; E++) {
						var j = E < u ? m : h;
						v[E] = w.slice(b, b + j), y[E] = p.encode(v[E]), b += j, _ = Math.max(_, j)
					}
					var x, P, A = n.alloc(i),
						C = 0;
					for (x = 0; x < _; x++)
						for (P = 0; P < c; P++) x < v[P].length && (A[C++] = v[P][x]);
					for (x = 0; x < g; x++)
						for (P = 0; P < c; P++) A[C++] = y[P][x];
					return A
				}(i, e, t)
			}

			function _(e, t, r, n) {
				var i;
				if (b(e)) i = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var l = p.rawSplit(e);
						a = m.getBestVersionForData(l, r)
					}
					i = p.fromString(e, a || 40)
				}
				var f = m.getBestVersionForData(i, r);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else t = f;
				var h = y(t, r, i),
					g = o.getSymbolSize(t),
					_ = new s(g);
				return function(e, t) {
						for (var r = e.size, n = u.getPositions(t), o = 0; o < n.length; o++)
							for (var i = n[o][0], a = n[o][1], s = -1; s <= 7; s++)
								if (!(i + s <= -1 || r <= i + s))
									for (var c = -1; c <= 7; c++) a + c <= -1 || r <= a + c || (s >= 0 && s <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && c >= 2 && c <= 4 ? e.set(i + s, a + c, !0, !0) : e.set(i + s, a + c, !1, !0))
					}(_, t),
					function(e) {
						for (var t = e.size, r = 8; r < t - 8; r++) {
							var n = r % 2 == 0;
							e.set(r, 6, n, !0), e.set(6, r, n, !0)
						}
					}(_),
					function(e, t) {
						for (var r = c.getPositions(t), n = 0; n < r.length; n++)
							for (var o = r[n][0], i = r[n][1], a = -2; a <= 2; a++)
								for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(o + a, i + s, !0, !0) : e.set(o + a, i + s, !1, !0)
					}(_, t), v(_, r, 0), t >= 7 && function(e, t) {
						for (var r, n, o, i = e.size, a = m.getEncodedBits(t), s = 0; s < 18; s++) r = Math.floor(s / 3), n = s % 3 + i - 8 - 3, o = 1 == (a >> s & 1), e.set(r, n, o, !0), e.set(n, r, o, !0)
					}(_, t),
					function(e, t) {
						for (var r = e.size, n = -1, o = r - 1, i = 7, a = 0, s = r - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(o, s - c)) {
										var u = !1;
										a < t.length && (u = 1 == (t[a] >>> i & 1)), e.set(o, s - c, u), -1 === --i && (a++, i = 7)
									} if ((o += n) < 0 || r <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(_, h), isNaN(n) && (n = d.getBestMask(_, v.bind(null, _, r))), d.applyMask(n, _), v(_, r, n), {
						modules: _,
						version: t,
						errorCorrectionLevel: r,
						maskPattern: n,
						segments: i
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var r, n, a = i.M;
				return void 0 !== t && (a = i.from(t.errorCorrectionLevel, i.M), r = m.from(t.version), n = d.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), _(e, r, a, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/polynomial.js"),
				i = r("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = n.alloc(this.degree),
					r = i.concat([e, t], e.length + this.degree),
					a = o.mod(r, this.genPoly),
					s = this.degree - a.length;
				if (s > 0) {
					var c = n.alloc(this.degree);
					return a.copy(c, s), c
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + r + "$"),
				i = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return o.test(e)
			}, t.testNumeric = function(e) {
				return i.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = r("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = r("./node_modules/qrcode/lib/core/byte-data.js"),
				s = r("./node_modules/qrcode/lib/core/kanji-data.js"),
				c = r("./node_modules/qrcode/lib/core/regex.js"),
				u = r("./node_modules/qrcode/lib/core/utils.js"),
				d = r("./node_modules/dijkstrajs/dijkstra.js");

			function l(e) {
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

			function m(e) {
				var t, r, o = f(c.NUMERIC, n.NUMERIC, e),
					i = f(c.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return u.isKanjiModeEnabled() ? (t = f(c.BYTE, n.BYTE, e), r = f(c.KANJI, n.KANJI, e)) : (t = f(c.BYTE_KANJI, n.BYTE, e), r = []), o.concat(i, t, r).sort((function(e, t) {
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
					case n.NUMERIC:
						return o.getBitsLength(e);
					case n.ALPHANUMERIC:
						return i.getBitsLength(e);
					case n.KANJI:
						return s.getBitsLength(e);
					case n.BYTE:
						return a.getBitsLength(e)
				}
			}

			function g(e, t) {
				var r, c = n.getBestModeForData(e);
				if ((r = n.from(t, c)) !== n.BYTE && r.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(c));
				switch (r !== n.KANJI || u.isKanjiModeEnabled() || (r = n.BYTE), r) {
					case n.NUMERIC:
						return new o(e);
					case n.ALPHANUMERIC:
						return new i(e);
					case n.KANJI:
						return new s(e);
					case n.BYTE:
						return new a(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, r) {
				for (var o = function(e, t) {
						for (var r = {}, o = {
								start: {}
							}, i = ["start"], a = 0; a < e.length; a++) {
							for (var s = e[a], c = [], u = 0; u < s.length; u++) {
								var d = s[u],
									l = "" + a + u;
								c.push(l), r[l] = {
									node: d,
									lastCount: 0
								}, o[l] = {};
								for (var f = 0; f < i.length; f++) {
									var m = i[f];
									r[m] && r[m].node.mode === d.mode ? (o[m][l] = h(r[m].lastCount + d.length, d.mode) - h(r[m].lastCount, d.mode), r[m].lastCount += d.length) : (r[m] && (r[m].lastCount = d.length), o[m][l] = h(d.length, d.mode) + 4 + n.getCharCountIndicator(d.mode, t))
								}
							}
							i = c
						}
						for (f = 0; f < i.length; f++) o[i[f]].end = 0;
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
										length: l(o.data)
									}]);
									break;
								case n.BYTE:
									t.push([{
										data: o.data,
										mode: n.BYTE,
										length: l(o.data)
									}])
							}
						}
						return t
					}(m(e, u.isKanjiModeEnabled())), r), i = d.find_path(o.map, "start", "end"), a = [], s = 1; s < i.length - 1; s++) a.push(o.table[i[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(a))
			}, t.rawSplit = function(e) {
				return t.fromArray(m(e, u.isKanjiModeEnabled()))
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
				i = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = r("./node_modules/qrcode/lib/core/mode.js"),
				s = r("./node_modules/qrcode/lib/core/version-check.js"),
				c = r("./node_modules/qrcode/node_modules/isarray/index.js"),
				u = n.getBCHDigit(7973);

			function d(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function l(e, t) {
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
				void 0 === r && (r = a.BYTE);
				var i = 8 * (n.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (r === a.MIXED) return i;
				var c = i - d(r, e);
				switch (r) {
					case a.NUMERIC:
						return Math.floor(c / 10 * 3);
					case a.ALPHANUMERIC:
						return Math.floor(c / 11 * 2);
					case a.KANJI:
						return Math.floor(c / 13);
					case a.BYTE:
					default:
						return Math.floor(c / 8)
				}
			}, t.getBestVersionForData = function(e, r) {
				var n, o = i.from(r, i.M);
				if (c(e)) {
					if (e.length > 1) return function(e, r) {
						for (var n = 1; n <= 40; n++) {
							if (l(e, n) <= t.getCapacity(n, r, a.MIXED)) return n
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
				for (var t = e << 12; n.getBCHDigit(t) - u >= 0;) t ^= 7973 << n.getBCHDigit(t) - u;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, r) {
				var o = r,
					i = t;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = n.getOptions(o);
				var a = n.getImageWidth(e.modules.size, o),
					s = i.getContext("2d"),
					c = s.createImageData(a, a);
				return n.qrToImageData(c.data, e, o),
					function(e, t, r) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
					}(s, i, a), s.putImageData(c, 0, 0), i
			}, t.renderToDataURL = function(e, r, n) {
				var o = n;
				void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
				var i = t.render(e, r, o),
					a = o.type || "image/png",
					s = o.rendererOpts || {};
				return i.toDataURL(a, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, t) {
				var r = e.a / 255,
					n = t + '="' + e.hex + '"';
				return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n
			}

			function i(e, t, r) {
				var n = e + t;
				return void 0 !== r && (n += " " + r), n
			}
			t.render = function(e, t, r) {
				var a = n.getOptions(t),
					s = e.modules.size,
					c = e.modules.data,
					u = s + 2 * a.margin,
					d = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
					l = "<path " + o(a.color.dark, "stroke") + ' d="' + function(e, t, r) {
						for (var n = "", o = 0, a = !1, s = 0, c = 0; c < e.length; c++) {
							var u = Math.floor(c % t),
								d = Math.floor(c / t);
							u || a || (a = !0), e[c] ? (s++, c > 0 && u > 0 && e[c - 1] || (n += a ? i("M", u + r, .5 + d + r) : i("m", o, 0), o = 0, a = !1), u + 1 < t && e[c + 1] || (n += i("h", s), s = 0)) : o++
						}
						return n
					}(c, s, a.margin) + '"/>',
					f = 'viewBox="0 0 ' + u + " " + u + '"',
					m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + d + l + "</svg>\n";
				return "function" == typeof r && r(null, m), m
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
				for (var o = r.modules.size, i = r.modules.data, a = t.getScale(o, n), s = Math.floor((o + 2 * n.margin) * a), c = n.margin * a, u = [n.color.light, n.color.dark], d = 0; d < s; d++)
					for (var l = 0; l < s; l++) {
						var f = 4 * (d * s + l),
							m = n.color.light;
						if (d >= c && l >= c && d < s - c && l < s - c) m = u[i[Math.floor((d - c) / a) * o + Math.floor((l - c) / a)] ? 1 : 0];
						e[f++] = m.r, e[f++] = m.g, e[f++] = m.b, e[f] = m.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/qrcode/node_modules/isarray/index.js");
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
			var o = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(e, t, r) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? c(this, e) : function(e, t, r, n) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) {
						if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
						i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = u(e, o);
						return o
					}(e, t, r, n);
					if ("string" == typeof t) return function(e, t) {
						var r = 0 | l(t),
							n = s(e, r),
							o = n.write(t);
						o !== r && (n = n.slice(0, o));
						return n
					}(e, t);
					return function(e, t) {
						if (i.isBuffer(t)) {
							var r = 0 | a(t.length),
								n = s(e, r);
							return 0 === n.length ? n : (t.copy(n, 0, 0, r), n)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? s(e, 0) : u(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return u(e, t.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, r) : new i(e, t, r)
			}

			function a(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var r;
				return i.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = i.prototype : (null === (r = e) && (r = new i(t)), r.length = t), r
			}

			function c(e, t) {
				var r = s(e, t < 0 ? 0 : 0 | a(t));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) r[n] = 0;
				return r
			}

			function u(e, t) {
				for (var r = t.length < 0 ? 0 : 0 | a(t.length), n = s(e, r), o = 0; o < r; o += 1) n[o] = 255 & t[o];
				return n
			}

			function d(e, t) {
				var r;
				t = t || 1 / 0;
				for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
					if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
						if (!o) {
							if (r > 56319) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (a + 1 === n) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = r;
							continue
						}
						if (r < 56320) {
							(t -= 3) > -1 && i.push(239, 191, 189), o = r;
							continue
						}
						r = 65536 + (o - 55296 << 10 | r - 56320)
					} else o && (t -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, r < 128) {
						if ((t -= 1) < 0) break;
						i.push(r)
					} else if (r < 2048) {
						if ((t -= 2) < 0) break;
						i.push(r >> 6 | 192, 63 & r | 128)
					} else if (r < 65536) {
						if ((t -= 3) < 0) break;
						i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
					} else {
						if (!(r < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
					}
				}
				return i
			}

			function l(e) {
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : d(e).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(e, t, r) {
				void 0 === t ? (r = this.length, t = 0) : void 0 === r && "string" == typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0);
				var n = this.length - t;
				if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, r, n) {
					return function(e, t, r, n) {
						for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
						return o
					}(d(t, e.length - r), e, r, n)
				}(this, e, t, r)
			}, i.prototype.slice = function(e, t) {
				var r, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), i.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = i.prototype;
				else {
					var o = t - e;
					r = new i(o, void 0);
					for (var a = 0; a < o; ++a) r[a] = this[a + e]
				}
				return r
			}, i.prototype.copy = function(e, t, r, n) {
				if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
				var o, a = n - r;
				if (this === e && r < t && t < n)
					for (o = a - 1; o >= 0; --o) e[o + t] = this[o + r];
				else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < a; ++o) e[o + t] = this[o + r];
				else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
				return a
			}, i.prototype.fill = function(e, t, r) {
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
					var a = i.isBuffer(e) ? e : new i(e),
						s = a.length;
					for (o = 0; o < r - t; ++o) this[o + t] = a[o % s]
				}
				return this
			}, i.concat = function(e, t) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var r;
				if (void 0 === t)
					for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
				var o = c(null, t),
					a = 0;
				for (r = 0; r < e.length; ++r) {
					var u = e[r];
					if (!i.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
					u.copy(o, a), a += u.length
				}
				return o
			}, i.byteLength = l, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new i(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new i(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, t) {
			var r = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == r.call(e)
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less": function(e, t, r) {
			e.exports = {
				bullet: "_2UPSb1bt_AsmpAwyZ46B38",
				circle: "_2_70m35EVFz3WnPe2CwYaG",
				number: "_3LihX-GKXER0sZAd9F9_Id"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/reddit/constants/colors.ts"),
				a = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				s = r("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				c = r.n(s);

			function u(e) {
				const {
					index: t,
					children: r,
					color: n
				} = e, s = n && Object(a.a)(n, void 0, i.b.white);
				return o.a.createElement("div", {
					className: c.a.bullet
				}, o.a.createElement("div", {
					className: c.a.circle,
					style: {
						backgroundColor: n,
						color: s
					}
				}, o.a.createElement("span", {
					className: c.a.number
				}, t)), o.a.createElement("div", null, r))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/qrcode/lib/browser.js"),
				o = r.n(n),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				s = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class u extends a.a.Component {
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
					return e && a.a.createElement("img", {
						src: e,
						className: this.props.className
					})
				}
			}
			t.a = Object(s.a)(u)
		},
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				f = r("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				m = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				h = r.n(m);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const p = Object(a.c)({
					userId: e => {
						const t = Object(d.i)(e);
						return t ? t.id : ""
					}
				}),
				b = Object(i.b)(p)((function(e) {
					const {
						onClose: t,
						userId: r
					} = e;
					return o.a.createElement("div", {
						className: h.a.container
					}, o.a.createElement("header", {
						className: h.a.header
					}, o.a.createElement("div", {
						className: h.a.title
					}, g._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), o.a.createElement(u.a, {
						className: h.a.closeButton,
						onClick: t
					})), o.a.createElement("div", {
						className: h.a.body
					}, o.a.createElement("section", {
						className: h.a.leftSection
					}, o.a.createElement("div", {
						className: h.a.sectionHeader
					}, g._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), o.a.createElement("div", {
						className: h.a.content
					}, o.a.createElement(l.a, {
						index: "1"
					}, g._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), o.a.createElement(l.a, {
						index: "2"
					}, g._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), o.a.createElement(l.a, {
						index: "3"
					}, g._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), o.a.createElement(l.a, {
						index: "4"
					}, g._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), o.a.createElement("section", {
						className: h.a.rightSection
					}, o.a.createElement(f.a, {
						url: Object(c.a)("http://www.reddit.com/vault/", {
							u: r
						}),
						scale: 5
					}))))
				}));
			t.b = Object(s.a)(b)
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/RichTextJson/index.ts");
			const o = "giphy|",
				i = "|downsized";

			function a(e, t) {
				return o + e + (t ? i : "")
			}

			function s(e) {
				return e && 0 === e.indexOf(o)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(s)
			}

			function u(e) {
				let t = e.substring(o.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function d(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...d(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function l(e) {
				return d(e, n.F).map(e => e.id)
			}

			function f(e) {
				return d(e, e => e.e === n.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...Object(n.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(n.subreddit)(t)
				}),
				i = () => o("view"),
				a = () => o("tap"),
				s = () => o("dismiss"),
				c = () => e => ({
					...Object(n.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				u = () => e => ({
					...Object(n.defaults)(e),
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => ({
					...Object(n.defaults)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				l = () => e => ({
					...Object(n.defaults)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				f = e => t => ({
					...Object(n.defaults)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(n.subredditById)(t, e)
				})
		},
		"./src/reddit/icons/svgs/ArrowRightThin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, i, a;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, r) {
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
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less": function(e, t, r) {
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
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2hno-FBggC-9UCyeqfnHlk",
				title: "zQi0l9mx781pHleYA-bKr",
				createVaultButton: "_2qGtuWXPK2hD1jKjCIqaIC",
				fadeIn: "DJ8a0-JdriWdgwui80YcV"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/config.ts"),
				s = r("./src/lib/getParsedUserAgent/index.ts"),
				c = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/helpers/trackers/communityPoints.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/selectors/economics.ts"),
				m = r("./src/lib/classNames/index.ts"),
				h = r("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				g = r("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				p = r.n(g);

			function b(e, t = !0) {
				return `${a.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var v = function(e) {
					const [t, r] = Object(n.useState)(0), a = Object(i.e)(f.m), s = a && a.learnMore.pages || [], c = s.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), u = t => {
						r(t), t + 1 === s.length && e.onComplete()
					};
					return o.a.createElement("div", {
						className: p.a.carousel
					}, o.a.createElement("div", {
						className: p.a.imageContainer
					}, s.map((e, r) => o.a.createElement("img", {
						src: b(r),
						srcSet: `${b(r,!1)}, ${b(r)} 2x`,
						className: Object(m.a)(p.a.image, {
							[p.a.before]: r < t,
							[p.a.active]: r === t,
							[p.a.after]: r > t
						}),
						key: r
					}))), o.a.createElement("div", {
						className: p.a.textContainer
					}, o.a.createElement("div", {
						className: p.a.hiddenText
					}, o.a.createElement("div", {
						className: p.a.slideTitle
					}, s[0] && s[0].title), c), s.map((e, r) => o.a.createElement("div", {
						className: Object(m.a)(p.a.text, {
							[p.a.before]: r < t,
							[p.a.active]: r === t,
							[p.a.after]: r > t
						}),
						key: r
					}, o.a.createElement("div", {
						className: p.a.slideTitle
					}, e.title), e.body))), t < s.length - 1 && o.a.createElement("div", {
						className: p.a.pager
					}, s.map((e, r) => o.a.createElement("button", {
						key: r,
						onClick: () => u(r)
					}, o.a.createElement("div", {
						className: Object(m.a)(p.a.progressDot, {
							[p.a.active]: r === t
						})
					}))), o.a.createElement("button", {
						"aria-label": "Next",
						className: p.a.nextButton,
						onClick: () => u(t + 1)
					}, o.a.createElement(h.a, {
						className: p.a.arrowIcon
					}))))
				},
				y = r("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				_ = r("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				w = r.n(_);

			function E(e) {
				const [t, r] = Object(n.useState)(!1), i = Object(l.a)();
				return o.a.createElement("div", {
					className: w.a.section
				}, o.a.createElement("div", {
					className: w.a.sectionTitle,
					onClick: () => {
						t || i(Object(d.g)(e.id)), r(!t)
					}
				}, e.title, o.a.createElement("button", {
					className: Object(m.a)(w.a.expando, {
						[w.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, o.a.createElement(y.a, {
					className: w.a.chevron
				}))), t && o.a.createElement("div", {
					className: w.a.text
				}, e.children))
			}

			function j(e) {
				const t = `${a.a.assetPath}/img/communityPoints/faq/${e.id}`;
				return o.a.createElement("img", {
					src: t + ".png",
					srcSet: `${t}.png, ${t}@2x.png 2x`
				})
			}
			var x = function() {
					const e = Object(i.e)(f.m),
						t = Object(l.a)();
					Object(n.useEffect)(() => {
						t(Object(d.f)())
					}, [t]);
					const r = e && e.faq || [];
					return o.a.createElement("div", {
						className: w.a.container
					}, o.a.createElement("div", {
						className: w.a.title
					}, "Frequently Asked Questions"), r.map(e => e.pages.map(e => o.a.createElement(E, {
						id: e.analyticsPageName,
						title: e.title,
						key: e.analyticsPageName
					}, e.sections.map((e, t) => "text" in e ? o.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: e.text
						},
						className: w.a.subSection,
						key: t
					}) : "image" in e ? o.a.createElement("div", {
						className: w.a.imageSection,
						key: t
					}, o.a.createElement(j, {
						id: e.image
					})) : null)))))
				},
				P = r("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				A = r.n(P);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.default = function() {
				const [e, t] = Object(n.useState)(!1), [r, m] = Object(n.useState)(!1), h = Object(i.e)(s.e), g = Object(i.e)(f.m), p = Object(l.a)();
				Object(n.useEffect)(() => {
					p(Object(d.h)())
				}, [p]);
				const b = g && g.learnMore.title;
				return o.a.createElement("div", {
					className: A.a.container
				}, o.a.createElement("div", {
					className: A.a.title
				}, b), o.a.createElement(v, {
					onComplete: () => t(!0)
				}), e && o.a.createElement(o.a.Fragment, null, o.a.createElement(u.i, {
					className: A.a.createVaultButton,
					onClick: () => {
						p(Object(d.b)()), h ? window.location.href = `${a.a.redditUrl}/vault/` : m(!0)
					}
				}, C._("Create My Vault", null, {
					hk: "3ZzMgD"
				})), o.a.createElement(x, null)), r && o.a.createElement(c.b, {
					onClose: () => m(!1)
				}))
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "y", (function() {
				return x
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "p", (function() {
				return T
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "x", (function() {
				return L
			})), r.d(t, "t", (function() {
				return O
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "v", (function() {
				return F
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "g", (function() {
				return Y
			})), r.d(t, "m", (function() {
				return z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				s = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Gold/Powerups/index.ts"),
				u = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				f = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				h = r("./src/reddit/selectors/gold/powerups/index.ts");
			const g = [],
				p = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === f.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				b = (e, t) => {
					const r = p(e, t);
					return r && r.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === f.a.Fetched) {
						const r = b(e, t),
							n = Date.now();
						return r && n < r ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				_ = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === f.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[s.a.Loyalty]: n.find(e => e.placement === a.a.First),
							[s.a.Achievement]: n.find(e => e.placement === a.a.Second),
							[s.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[s.a.Loyalty]: void 0,
						[s.a.Achievement]: void 0,
						[s.a.Cosmetic]: void 0
					}
				};

			function w(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const E = (e, t, r) => {
					var o;
					if (!n.d.spBadges(e)) return g;
					return w(null === (o = e.users.appliedBadges[r]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				j = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === f.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function x(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function P(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(r) && r.userId === o) return r;
				const i = e.badges.models,
					s = e.user.ownedBadges[n] || {},
					c = Object(a.e)(r) ? r.type : r.id;
				return Object.keys(s).map(e => i[e]).find(e => e && e.type === c)
			}

			function A(e, t, r, n) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === f.a.Fetched) {
					if (r === s.a.Loyalty || r === s.a.Achievement) return o.data.collections[r];
					if (r === s.a.Cosmetic && n) return o.data.collections[r][n]
				}
				return g
			}

			function C(e, t) {
				const r = A(e, t, s.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function B(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === f.a.Fetched) {
					const e = r.data.collections[s.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return g
			}

			function N(e, t) {
				return A(e, t, s.a.Cosmetic, s.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const T = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: u.a.SavedStripe
						})
					}
				}
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: u.a.SavedPayPal
						})
					}
				}
				return t
			};
			var R;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(R || (R = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				S = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				q = (e, t) => {
					if (!t) return {};
					const r = M.prices;
					S(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = p(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				I = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						n = r && r.extra && r.extra.nomenclature || M;
					return {
						prices: q(e, t),
						member: n.member || M.member,
						memberPlural: n.memberPlural || M.memberPlural,
						memberAlt: n.memberAlt || M.memberAlt,
						memberAltPlural: n.memberAltPlural || M.memberAltPlural,
						membership: n.membership || M.membership,
						membershipAlt: n.membershipAlt || M.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				O = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				k = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				F = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				D = (e, t, r) => {
					const o = "replyToPost" !== r && Object(m.a)(e, {
						commentId: r
					});
					if (!!o && Object(i.a)(o)) return !0;
					if (t && Object(h.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const a = n.d.spGiphy(e),
						s = F(e, t);
					return a && s
				},
				Y = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				z = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.29363b1ef5cf61ca9f2b.js.map