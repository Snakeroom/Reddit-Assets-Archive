// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.dadcd37ff1a6771c44ec.js
// Retrieved at 11/4/2021, 4:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, n) {
			"use strict";
			var r = {
				single_source_shortest_paths: function(e, t, n) {
					var o = {},
						i = {};
					i[t] = 0;
					var a, s, d, l, c, u, m, h = r.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (d in s = (a = h.pop()).value, l = a.cost, c = e[s] || {}) c.hasOwnProperty(d) && (u = l + c[d], m = i[d], (void 0 === i[d] || m > u) && (i[d] = u, h.push(d, u), o[d] = s));
					if (void 0 !== n && void 0 === i[n]) {
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
				i = n("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = n("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, n, i, a) {
				var s = [].slice.call(arguments, 1),
					d = s.length,
					l = "function" == typeof s[d - 1];
				if (!l && !r()) throw new Error("Callback required as last argument");
				if (!l) {
					if (d < 1) throw new Error("Too few arguments provided");
					return 1 === d ? (n = t, t = i = void 0) : 2 !== d || t.getContext || (i = n, n = t, t = void 0), new Promise((function(r, a) {
						try {
							var s = o.create(n, i);
							r(e(s, t, i))
						} catch (d) {
							a(d)
						}
					}))
				}
				if (d < 2) throw new Error("Too few arguments provided");
				2 === d ? (a = n, n = t, t = i = void 0) : 3 === d && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, n = t, t = void 0));
				try {
					var c = o.create(n, i);
					a(null, e(c, t, i))
				} catch (u) {
					a(u)
				}
			}
			t.create = o.create, t.toCanvas = s.bind(null, i.render), t.toDataURL = s.bind(null, i.renderToDataURL), t.toString = s.bind(null, (function(e, t, n) {
				return a.render(e, n)
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
				for (var t = Math.floor(e / 7) + 2, n = r(e), o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)), i = [n - 7], a = 1; a < t - 1; a++) i[a] = i[a - 1] - o;
				return i.push(6), i.reverse()
			}, t.getPositions = function(e) {
				for (var n = [], r = t.getRowColCoords(e), o = r.length, i = 0; i < o; i++)
					for (var a = 0; a < o; a++) 0 === i && 0 === a || 0 === i && a === o - 1 || i === o - 1 && 0 === a || n.push([r[i], r[a]]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = r.ALPHANUMERIC, this.data = e
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
					var n = 45 * o.indexOf(this.data[t]);
					n += o.indexOf(this.data[t + 1]), e.put(n, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
			}, e.exports = i
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

			function i(e) {
				this.mode = o.BYTE, this.data = r.from(e)
			}
			i.getBitsLength = function(e) {
				return 8 * e
			}, i.prototype.getLength = function() {
				return this.data.length
			}, i.prototype.getBitsLength = function() {
				return i.getBitsLength(this.data.length)
			}, i.prototype.write = function(e) {
				for (var t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
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
						return i[4 * (e - 1) + 0];
					case r.M:
						return i[4 * (e - 1) + 1];
					case r.Q:
						return i[4 * (e - 1) + 2];
					case r.H:
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
				for (var n = e.bit << 3 | t, i = n << 10; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
				return 21522 ^ (n << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r.alloc(512),
				i = r.alloc(256);
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
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				o = n("./node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = r.KANJI, this.data = e
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
					var n = o.toSJIS(this.data[t]);
					if (n >= 33088 && n <= 40956) n -= 33088;
					else {
						if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
						n -= 49472
					}
					n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
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
			var n = 3,
				r = 3,
				o = 40,
				i = 10;

			function a(e, n, r) {
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
				for (var t = e.size, r = 0, o = 0, i = 0, a = null, s = null, d = 0; d < t; d++) {
					o = i = 0, a = s = null;
					for (var l = 0; l < t; l++) {
						var c = e.get(d, l);
						c === a ? o++ : (o >= 5 && (r += n + (o - 5)), a = c, o = 1), (c = e.get(l, d)) === s ? i++ : (i >= 5 && (r += n + (i - 5)), s = c, i = 1)
					}
					o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5))
				}
				return r
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, n = 0, o = 0; o < t - 1; o++)
					for (var i = 0; i < t - 1; i++) {
						var a = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
						4 !== a && 0 !== a || n++
					}
				return n * r
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, n = 0, r = 0, i = 0, a = 0; a < t; a++) {
					r = i = 0;
					for (var s = 0; s < t; s++) r = r << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === i || 93 === i) && n++
				}
				return n * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, n = e.data.length, r = 0; r < n; r++) t += e.data[r];
				return Math.abs(Math.ceil(100 * t / n / 5) - 10) * i
			}, t.applyMask = function(e, t) {
				for (var n = t.size, r = 0; r < n; r++)
					for (var o = 0; o < n; o++) t.isReserved(o, r) || t.xor(o, r, a(e, o, r))
			}, t.getBestMask = function(e, n) {
				for (var r = Object.keys(t.Patterns).length, o = 0, i = 1 / 0, a = 0; a < r; a++) {
					n(a), t.applyMask(a, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), s < i && (i = s, o = a)
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
				for (var n = r.alloc(e.length + t.length - 1), i = 0; i < e.length; i++)
					for (var a = 0; a < t.length; a++) n[i + a] ^= o.mul(e[i], t[a]);
				return n
			}, t.mod = function(e, t) {
				for (var n = r.from(e); n.length - t.length >= 0;) {
					for (var i = n[0], a = 0; a < t.length; a++) n[a] ^= o.mul(t[a], i);
					for (var s = 0; s < n.length && 0 === n[s];) s++;
					n = n.slice(s)
				}
				return n
			}, t.generateECPolynomial = function(e) {
				for (var n = r.from([1]), i = 0; i < e; i++) n = t.mul(n, [1, o.exp(i)]);
				return n
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/utils.js"),
				i = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/bit-buffer.js"),
				s = n("./node_modules/qrcode/lib/core/bit-matrix.js"),
				d = n("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				l = n("./node_modules/qrcode/lib/core/finder-pattern.js"),
				c = n("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = n("./node_modules/qrcode/lib/core/error-correction-code.js"),
				m = n("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = n("./node_modules/qrcode/lib/core/version.js"),
				f = n("./node_modules/qrcode/lib/core/format-info.js"),
				p = n("./node_modules/qrcode/lib/core/mode.js"),
				g = n("./node_modules/qrcode/lib/core/segments.js"),
				b = n("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, t, n) {
				var r, o, i = e.size,
					a = f.getEncodedBits(t, n);
				for (r = 0; r < 15; r++) o = 1 == (a >> r & 1), r < 6 ? e.set(r, 8, o, !0) : r < 8 ? e.set(r + 1, 8, o, !0) : e.set(i - 15 + r, 8, o, !0), r < 8 ? e.set(8, i - r - 1, o, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, o, !0) : e.set(8, 15 - r - 1, o, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function y(e, t, n) {
				var i = new a;
				n.forEach((function(t) {
					i.put(t.mode.bit, 4), i.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(i)
				}));
				var s = 8 * (o.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var d = (s - i.getLengthInBits()) / 8, l = 0; l < d; l++) i.put(l % 2 ? 17 : 236, 8);
				return function(e, t, n) {
					for (var i = o.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, n), s = i - a, d = u.getBlocksCount(t, n), l = d - i % d, c = Math.floor(i / d), h = Math.floor(s / d), f = h + 1, p = c - h, g = new m(p), b = 0, v = new Array(d), y = new Array(d), _ = 0, P = r.from(e.buffer), E = 0; E < d; E++) {
						var w = E < l ? h : f;
						v[E] = P.slice(b, b + w), y[E] = g.encode(v[E]), b += w, _ = Math.max(_, w)
					}
					var x, C, k = r.alloc(i),
						N = 0;
					for (x = 0; x < _; x++)
						for (C = 0; C < d; C++) x < v[C].length && (k[N++] = v[C][x]);
					for (x = 0; x < p; x++)
						for (C = 0; C < d; C++) k[N++] = y[C][x];
					return k
				}(i, e, t)
			}

			function _(e, t, n, r) {
				var i;
				if (b(e)) i = g.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var u = g.rawSplit(e);
						a = h.getBestVersionForData(u, n)
					}
					i = g.fromString(e, a || 40)
				}
				var m = h.getBestVersionForData(i, n);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var f = y(t, n, i),
					p = o.getSymbolSize(t),
					_ = new s(p);
				return function(e, t) {
						for (var n = e.size, r = l.getPositions(t), o = 0; o < r.length; o++)
							for (var i = r[o][0], a = r[o][1], s = -1; s <= 7; s++)
								if (!(i + s <= -1 || n <= i + s))
									for (var d = -1; d <= 7; d++) a + d <= -1 || n <= a + d || (s >= 0 && s <= 6 && (0 === d || 6 === d) || d >= 0 && d <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && d >= 2 && d <= 4 ? e.set(i + s, a + d, !0, !0) : e.set(i + s, a + d, !1, !0))
					}(_, t),
					function(e) {
						for (var t = e.size, n = 8; n < t - 8; n++) {
							var r = n % 2 == 0;
							e.set(n, 6, r, !0), e.set(6, n, r, !0)
						}
					}(_),
					function(e, t) {
						for (var n = d.getPositions(t), r = 0; r < n.length; r++)
							for (var o = n[r][0], i = n[r][1], a = -2; a <= 2; a++)
								for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(o + a, i + s, !0, !0) : e.set(o + a, i + s, !1, !0)
					}(_, t), v(_, n, 0), t >= 7 && function(e, t) {
						for (var n, r, o, i = e.size, a = h.getEncodedBits(t), s = 0; s < 18; s++) n = Math.floor(s / 3), r = s % 3 + i - 8 - 3, o = 1 == (a >> s & 1), e.set(n, r, o, !0), e.set(r, n, o, !0)
					}(_, t),
					function(e, t) {
						for (var n = e.size, r = -1, o = n - 1, i = 7, a = 0, s = n - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var d = 0; d < 2; d++)
									if (!e.isReserved(o, s - d)) {
										var l = !1;
										a < t.length && (l = 1 == (t[a] >>> i & 1)), e.set(o, s - d, l), -1 === --i && (a++, i = 7)
									} if ((o += r) < 0 || n <= o) {
									o -= r, r = -r;
									break
								}
							}
					}(_, f), isNaN(r) && (r = c.getBestMask(_, v.bind(null, _, n))), c.applyMask(r, _), v(_, n, r), {
						modules: _,
						version: t,
						errorCorrectionLevel: n,
						maskPattern: r,
						segments: i
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var n, r, a = i.M;
				return void 0 !== t && (a = i.from(t.errorCorrectionLevel, i.M), n = h.from(t.version), r = c.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), _(e, n, a, r)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n("./node_modules/qrcode/lib/core/polynomial.js"),
				i = n("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = r.alloc(this.degree),
					n = i.concat([e, t], e.length + this.degree),
					a = o.mod(n, this.genPoly),
					s = this.degree - a.length;
				if (s > 0) {
					var d = r.alloc(this.degree);
					return a.copy(d, s), d
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				r = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(r, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + n + "$"),
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
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/core/mode.js"),
				o = n("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = n("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = n("./node_modules/qrcode/lib/core/byte-data.js"),
				s = n("./node_modules/qrcode/lib/core/kanji-data.js"),
				d = n("./node_modules/qrcode/lib/core/regex.js"),
				l = n("./node_modules/qrcode/lib/core/utils.js"),
				c = n("./node_modules/dijkstrajs/dijkstra.js");

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
				var t, n, o = m(d.NUMERIC, r.NUMERIC, e),
					i = m(d.ALPHANUMERIC, r.ALPHANUMERIC, e);
				return l.isKanjiModeEnabled() ? (t = m(d.BYTE, r.BYTE, e), n = m(d.KANJI, r.KANJI, e)) : (t = m(d.BYTE_KANJI, r.BYTE, e), n = []), o.concat(i, t, n).sort((function(e, t) {
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
						return i.getBitsLength(e);
					case r.KANJI:
						return s.getBitsLength(e);
					case r.BYTE:
						return a.getBitsLength(e)
				}
			}

			function p(e, t) {
				var n, d = r.getBestModeForData(e);
				if ((n = r.from(t, d)) !== r.BYTE && n.bit < d.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(d));
				switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
					case r.NUMERIC:
						return new o(e);
					case r.ALPHANUMERIC:
						return new i(e);
					case r.KANJI:
						return new s(e);
					case r.BYTE:
						return new a(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(p(t, null)) : t.data && e.push(p(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, n) {
				for (var o = function(e, t) {
						for (var n = {}, o = {
								start: {}
							}, i = ["start"], a = 0; a < e.length; a++) {
							for (var s = e[a], d = [], l = 0; l < s.length; l++) {
								var c = s[l],
									u = "" + a + l;
								d.push(u), n[u] = {
									node: c,
									lastCount: 0
								}, o[u] = {};
								for (var m = 0; m < i.length; m++) {
									var h = i[m];
									n[h] && n[h].node.mode === c.mode ? (o[h][u] = f(n[h].lastCount + c.length, c.mode) - f(n[h].lastCount, c.mode), n[h].lastCount += c.length) : (n[h] && (n[h].lastCount = c.length), o[h][u] = f(c.length, c.mode) + 4 + r.getCharCountIndicator(c.mode, t))
								}
							}
							i = d
						}
						for (m = 0; m < i.length; m++) o[i[m]].end = 0;
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
					}(h(e, l.isKanjiModeEnabled())), n), i = c.find_path(o.map, "start", "end"), a = [], s = 1; s < i.length - 1; s++) a.push(o.table[i[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var n = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(a))
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
				i = n("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = n("./node_modules/qrcode/lib/core/mode.js"),
				s = n("./node_modules/qrcode/lib/core/version-check.js"),
				d = n("./node_modules/qrcode/node_modules/isarray/index.js"),
				l = r.getBCHDigit(7973);

			function c(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var n = 0;
				return e.forEach((function(e) {
					var r = c(e.mode, t);
					n += r + e.getBitsLength()
				})), n
			}
			t.from = function(e, t) {
				return s.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, n) {
				if (!s.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === n && (n = a.BYTE);
				var i = 8 * (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (n === a.MIXED) return i;
				var d = i - c(n, e);
				switch (n) {
					case a.NUMERIC:
						return Math.floor(d / 10 * 3);
					case a.ALPHANUMERIC:
						return Math.floor(d / 11 * 2);
					case a.KANJI:
						return Math.floor(d / 13);
					case a.BYTE:
					default:
						return Math.floor(d / 8)
				}
			}, t.getBestVersionForData = function(e, n) {
				var r, o = i.from(n, i.M);
				if (d(e)) {
					if (e.length > 1) return function(e, n) {
						for (var r = 1; r <= 40; r++) {
							if (u(e, r) <= t.getCapacity(r, n, a.MIXED)) return r
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
					i = t;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = r.getOptions(o);
				var a = r.getImageWidth(e.modules.size, o),
					s = i.getContext("2d"),
					d = s.createImageData(a, a);
				return r.qrToImageData(d.data, e, o),
					function(e, t, n) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
					}(s, i, a), s.putImageData(d, 0, 0), i
			}, t.renderToDataURL = function(e, n, r) {
				var o = r;
				void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
				var i = t.render(e, n, o),
					a = o.type || "image/png",
					s = o.rendererOpts || {};
				return i.toDataURL(a, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, n) {
			var r = n("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, t) {
				var n = e.a / 255,
					r = t + '="' + e.hex + '"';
				return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
			}

			function i(e, t, n) {
				var r = e + t;
				return void 0 !== n && (r += " " + n), r
			}
			t.render = function(e, t, n) {
				var a = r.getOptions(t),
					s = e.modules.size,
					d = e.modules.data,
					l = s + 2 * a.margin,
					c = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
					u = "<path " + o(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
						for (var r = "", o = 0, a = !1, s = 0, d = 0; d < e.length; d++) {
							var l = Math.floor(d % t),
								c = Math.floor(d / t);
							l || a || (a = !0), e[d] ? (s++, d > 0 && l > 0 && e[d - 1] || (r += a ? i("M", l + n, .5 + c + n) : i("m", o, 0), o = 0, a = !1), l + 1 < t && e[d + 1] || (r += i("h", s), s = 0)) : o++
						}
						return r
					}(d, s, a.margin) + '"/>',
					m = 'viewBox="0 0 ' + l + " " + l + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + c + u + "</svg>\n";
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
				for (var o = n.modules.size, i = n.modules.data, a = t.getScale(o, r), s = Math.floor((o + 2 * r.margin) * a), d = r.margin * a, l = [r.color.light, r.color.dark], c = 0; c < s; c++)
					for (var u = 0; u < s; u++) {
						var m = 4 * (c * s + u),
							h = r.color.light;
						if (c >= d && u >= d && c < s - d && u < s - d) h = l[i[Math.floor((c - d) / a) * o + Math.floor((u - d) / a)] ? 1 : 0];
						e[m++] = h.r, e[m++] = h.g, e[m++] = h.b, e[m] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/qrcode/node_modules/isarray/index.js");
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

			function i(e, t, n) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? d(this, e) : function(e, t, n, r) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, n, r) {
						if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
						i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = l(e, o);
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
						if (i.isBuffer(t)) {
							var n = 0 | a(t.length),
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
				}(this, e, t, n) : new i(e, t, n)
			}

			function a(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var n;
				return i.TYPED_ARRAY_SUPPORT ? (n = new Uint8Array(t)).__proto__ = i.prototype : (null === (n = e) && (n = new i(t)), n.length = t), n
			}

			function d(e, t) {
				var n = s(e, t < 0 ? 0 : 0 | a(t));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var r = 0; r < t; ++r) n[r] = 0;
				return n
			}

			function l(e, t) {
				for (var n = t.length < 0 ? 0 : 0 | a(t.length), r = s(e, n), o = 0; o < n; o += 1) r[o] = 255 & t[o];
				return r
			}

			function c(e, t) {
				var n;
				t = t || 1 / 0;
				for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
					if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
						if (!o) {
							if (n > 56319) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (a + 1 === r) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							o = n;
							continue
						}
						if (n < 56320) {
							(t -= 3) > -1 && i.push(239, 191, 189), o = n;
							continue
						}
						n = 65536 + (o - 55296 << 10 | n - 56320)
					} else o && (t -= 3) > -1 && i.push(239, 191, 189);
					if (o = null, n < 128) {
						if ((t -= 1) < 0) break;
						i.push(n)
					} else if (n < 2048) {
						if ((t -= 2) < 0) break;
						i.push(n >> 6 | 192, 63 & n | 128)
					} else if (n < 65536) {
						if ((t -= 3) < 0) break;
						i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
					} else {
						if (!(n < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
					}
				}
				return i
			}

			function u(e) {
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : c(e).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(e, t, n) {
				void 0 === t ? (n = this.length, t = 0) : void 0 === n && "string" == typeof t ? (n = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(n) ? n |= 0 : n = void 0);
				var r = this.length - t;
				if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, n, r) {
					return function(e, t, n, r) {
						for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
						return o
					}(c(t, e.length - n), e, n, r)
				}(this, e, t, n)
			}, i.prototype.slice = function(e, t) {
				var n, r = this.length;
				if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), i.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = i.prototype;
				else {
					var o = t - e;
					n = new i(o, void 0);
					for (var a = 0; a < o; ++a) n[a] = this[a + e]
				}
				return n
			}, i.prototype.copy = function(e, t, n, r) {
				if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
				if (r < 0) throw new RangeError("sourceEnd out of bounds");
				r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
				var o, a = r - n;
				if (this === e && n < t && t < r)
					for (o = a - 1; o >= 0; --o) e[o + t] = this[o + n];
				else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < a; ++o) e[o + t] = this[o + n];
				else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
				return a
			}, i.prototype.fill = function(e, t, n) {
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
					var a = i.isBuffer(e) ? e : new i(e),
						s = a.length;
					for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
				}
				return this
			}, i.concat = function(e, t) {
				if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var n;
				if (void 0 === t)
					for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
				var o = d(null, t),
					a = 0;
				for (n = 0; n < e.length; ++n) {
					var l = e[n];
					if (!i.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
					l.copy(o, a), a += l.length
				}
				return o
			}, i.byteLength = u, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new i(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new i(e)
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
				i = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				s = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				d = n.n(s);

			function l(e) {
				const {
					index: t,
					children: n,
					color: r
				} = e, s = r && Object(a.a)(r, void 0, i.b.white);
				return o.a.createElement("div", {
					className: d.a.bullet
				}, o.a.createElement("div", {
					className: d.a.circle,
					style: {
						backgroundColor: r,
						color: s
					}
				}, o.a.createElement("span", {
					className: d.a.number
				}, t)), o.a.createElement("div", null, n))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/qrcode/lib/browser.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				s = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends a.a.Component {
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
							dark: Object(d.a)(this.props).titleText,
							light: Object(d.a)(this.props).body
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/addQueryParams/index.ts"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				m = n("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				h = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				f = n.n(h);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const g = Object(a.c)({
					userId: e => {
						const t = Object(c.k)(e);
						return t ? t.id : ""
					}
				}),
				b = Object(i.b)(g)((function(e) {
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
					}, p._("Create Your Vault on Your Smartphone", null, {
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
					}, p._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), o.a.createElement("div", {
						className: f.a.content
					}, o.a.createElement(u.a, {
						index: "1"
					}, p._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), o.a.createElement(u.a, {
						index: "2"
					}, p._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), o.a.createElement(u.a, {
						index: "3"
					}, p._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), o.a.createElement(u.a, {
						index: "4"
					}, p._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), o.a.createElement("section", {
						className: f.a.rightSection
					}, o.a.createElement(m.a, {
						url: Object(d.a)("http://www.reddit.com/vault/", {
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
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
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
				i = () => o("view"),
				a = () => o("tap"),
				s = () => o("dismiss"),
				d = () => e => ({
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
				c = e => t => ({
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
			var r, o, i, a;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
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
				docsButton: "_1XLDJdCSJvNIHR52do04mJ",
				docsIcon: "P5Cwi2ev6eMkDVIzzDWOS"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less": function(e, t, n) {
			e.exports = {
				background: "_2ge27xQx1Gt9ZLEAF5G56e",
				snoo: "_2w697DOO736IN0y8x1G_r5",
				title: "l9spizGObzGL5_M9I4t7W",
				subtitle: "_1knd7dCNDtGNteCtEtWMI4",
				docsButton: "_3WXyHuUGgkzB-1Qc3roRsZ",
				docsIcon: "_1Y7YQr9nJOHYMXIJV9bR10",
				docTextShort: "_9B9hYKnRsbpS0xQ6bTVI_",
				docTextFull: "_1cBiAI3Lmkt0Hm6YzkDtth"
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
				image: "_39n5c2gafF2Zu9YWqEe6cM"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, n) {
			e.exports = {
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
			n.r(t);
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/experiments/econ/meta.ts"),
				d = n("./src/lib/getParsedUserAgent/index.ts"),
				l = n("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/economics.ts"),
				f = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				g = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				b = n.n(g);

			function v(e, t = !0) {
				return `${r.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var y = function(e) {
					const [t, n] = Object(o.useState)(0), r = Object(a.e)(h.m), s = r && r.learnMore.pages || [], d = s.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), l = t => {
						n(t), t + 1 === s.length && e.onComplete()
					};
					return i.a.createElement("div", {
						className: b.a.carousel
					}, i.a.createElement("div", {
						className: b.a.imageContainer
					}, s.map((e, n) => i.a.createElement("img", {
						src: v(n),
						srcSet: `${v(n,!1)}, ${v(n)} 2x`,
						className: Object(f.a)(b.a.image, {
							[b.a.before]: n < t,
							[b.a.active]: n === t,
							[b.a.after]: n > t
						}),
						key: n
					}))), i.a.createElement("div", {
						className: b.a.textContainer
					}, i.a.createElement("div", {
						className: b.a.hiddenText
					}, i.a.createElement("div", {
						className: b.a.slideTitle
					}, s[0] && s[0].title), d), s.map((e, n) => i.a.createElement("div", {
						className: Object(f.a)(b.a.text, {
							[b.a.before]: n < t,
							[b.a.active]: n === t,
							[b.a.after]: n > t
						}),
						key: n
					}, i.a.createElement("div", {
						className: b.a.slideTitle
					}, e.title), e.body))), t < s.length - 1 && i.a.createElement("div", {
						className: b.a.pager
					}, s.map((e, n) => i.a.createElement("button", {
						key: n,
						onClick: () => l(n)
					}, i.a.createElement("div", {
						className: Object(f.a)(b.a.progressDot, {
							[b.a.active]: n === t
						})
					}))), i.a.createElement("button", {
						"aria-label": "Next",
						className: b.a.nextButton,
						onClick: () => l(t + 1)
					}, i.a.createElement(p.a, {
						className: b.a.arrowIcon
					}))))
				},
				_ = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				P = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				E = n.n(P);

			function w(e) {
				const [t, n] = Object(o.useState)(!1), r = Object(m.a)();
				return i.a.createElement("div", {
					className: E.a.section
				}, i.a.createElement("div", {
					className: E.a.sectionTitle,
					onClick: () => {
						t || r(Object(u.g)(e.id)), n(!t)
					}
				}, e.title, i.a.createElement("button", {
					className: Object(f.a)(E.a.expando, {
						[E.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, i.a.createElement(_.a, {
					className: E.a.chevron
				}))), t && i.a.createElement("div", {
					className: E.a.text
				}, e.children))
			}

			function x(e) {
				const t = `${r.a.assetPath}/img/communityPoints/faq/${e.id}`;
				return i.a.createElement("img", {
					src: t + ".png",
					srcSet: `${t}.png, ${t}@2x.png 2x`
				})
			}
			var C = function() {
					const e = Object(a.e)(h.m),
						t = Object(m.a)();
					Object(o.useEffect)(() => {
						t(Object(u.f)())
					}, [t]);
					const n = e && e.faq || [];
					return i.a.createElement("div", {
						className: E.a.container
					}, i.a.createElement("div", {
						className: E.a.title
					}, "Frequently Asked Questions"), n.map(e => e.pages.map(e => i.a.createElement(w, {
						id: e.analyticsPageName,
						title: e.title,
						key: e.analyticsPageName
					}, e.sections.map((e, t) => "text" in e ? i.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: e.text
						},
						className: E.a.subSection,
						key: t
					}) : "image" in e ? i.a.createElement("div", {
						className: E.a.imageSection,
						key: t
					}, i.a.createElement(x, {
						id: e.image
					})) : null)))))
				},
				k = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less"),
				N = n.n(k);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var D = function() {
					const [e, t] = Object(o.useState)(!1), [n, s] = Object(o.useState)(!1), f = Object(a.e)(d.e), p = Object(a.e)(h.m), g = Object(m.a)();
					Object(o.useEffect)(() => {
						g(Object(u.h)())
					}, [g]);
					const b = p && p.learnMore.title;
					return i.a.createElement("div", {
						className: N.a.container
					}, i.a.createElement("div", {
						className: N.a.title
					}, b), i.a.createElement(y, {
						onComplete: () => t(!0)
					}), e && i.a.createElement(i.a.Fragment, null, i.a.createElement(c.l, {
						className: N.a.createVaultButton,
						onClick: () => {
							g(Object(u.b)()), f ? window.location.href = `${r.a.redditUrl}/vault/` : s(!0)
						}
					}, j._("Create My Vault", null, {
						hk: "3ZzMgD"
					})), i.a.createElement(C, null)), n && i.a.createElement(l.b, {
						onClose: () => s(!1)
					}))
				},
				S = n("./src/reddit/icons/fonts/index.tsx"),
				A = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less"),
				B = n.n(A);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = ({
				className: e,
				data: t,
				isExpanded: n,
				isHidden: r,
				onClickExpand: o,
				onClickHide: a
			}) => i.a.createElement("div", {
				className: Object(f.a)(B.a.container, e, {
					[B.a.expanded]: n,
					[B.a.hidden]: r
				})
			}, i.a.createElement("div", {
				className: B.a.imageSection,
				style: {
					backgroundColor: t.backgroundColor
				}
			}, i.a.createElement("img", {
				className: Object(f.a)(B.a.image, {
					[B.a.expanded]: n
				}),
				src: t.imageSrc
			})), i.a.createElement("div", {
				className: Object(f.a)(B.a.textSection, {
					[B.a.expanded]: n
				})
			}, i.a.createElement("h5", {
				className: B.a.title
			}, t.title), i.a.createElement("p", {
				className: B.a.subtitle
			}, t.subtitle), n && i.a.createElement("p", {
				className: B.a.body
			}, t.body), i.a.createElement("button", {
				onClick: n ? a : o,
				className: Object(f.a)(B.a.expandButton, {
					[B.a.expanded]: n
				}),
				"aria-label": n ? T._("Collapse", null, {
					hk: "LToWq"
				}) : T._("Expand", null, {
					hk: "4jMW0g"
				})
			}, i.a.createElement(S.a, {
				name: "add",
				className: Object(f.a)(B.a.plusIcon, {
					[B.a.expanded]: n
				})
			}))));
			var R = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less"),
				I = n.n(R);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = ({
				className: e
			}) => {
				const [t, n] = Object(o.useState)(null);
				return i.a.createElement("div", {
					className: e
				}, i.a.createElement("h2", {
					className: I.a.title
				}, F._("Upgrade Your Community", null, {
					hk: "3jl64"
				})), i.a.createElement("div", {
					className: Object(f.a)(I.a.benefitsContainer, {
						[I.a.expanded]: null !== t
					})
				}, q.map((e, r) => i.a.createElement(M, {
					key: r,
					data: e,
					isExpanded: null !== t && r === t,
					isHidden: null !== t && r !== t,
					onClickExpand: () => n(r),
					onClickHide: () => n(null)
				}))))
			}, q = [{
				title: F._("Reward the community", null, {
					hk: "20eiec"
				}),
				subtitle: F._("Contributors and moderators get paid with something valuable for the hours they put in.", null, {
					hk: "Z3EsH"
				}),
				body: F._("Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here.", null, {
					hk: "1jRf62"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/reward_the_community.png`,
				backgroundColor: "#E2D399"
			}, {
				title: F._("Unlock premium features", null, {
					hk: "47Txu5"
				}),
				subtitle: F._("Users buy premium features with Points, including subreddit memberships and awards.", null, {
					hk: "2BjnGu"
				}),
				body: F._("Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here.", null, {
					hk: "1jRf62"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/premium_features.png`,
				backgroundColor: "#B3F1FF"
			}, {
				title: F._("Encourage higher-quality content and conversation", null, {
					hk: "42NBY6"
				}),
				subtitle: F._("Communities shape the kind of content and behavior they want by using Points as incentives.", null, {
					hk: "2NJX7w"
				}),
				body: F._("Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here.", null, {
					hk: "1jRf62"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/hq_content.png`,
				backgroundColor: "#E3D7F4"
			}, {
				title: F._("Get input from the community", null, {
					hk: "4mer7B"
				}),
				subtitle: F._("Weighted polls help make decisions about the subreddit, including how Points get distributed.", null, {
					hk: "LkS73"
				}),
				body: F._("Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here.", null, {
					hk: "1jRf62"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/get_input.png`,
				backgroundColor: "#A7EAD0"
			}, {
				title: F._("Bring the community together", null, {
					hk: "KdoQx"
				}),
				subtitle: F._("Give out Points as prizes for events and contests and integrate Points with community bots.", null, {
					hk: "3Zo0xV"
				}),
				body: F._("Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here.", null, {
					hk: "1jRf62"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/community_together.png`,
				backgroundColor: "#FFC2C2"
			}, {
				title: F._("Customize your Points", null, {
					hk: "58EIg"
				}),
				subtitle: F._("Each subreddit creates its own Community Points token, with a custom name and symbol.", null, {
					hk: "v2GBi"
				}),
				body: F._("Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here. Dive deep into details here.", null, {
					hk: "1jRf62"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/customize_points.png`,
				backgroundColor: "#DDDDDD"
			}];
			var L = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less"),
				U = n.n(L);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(f.a)(U.a.container, e)
			}, i.a.createElement("img", {
				className: U.a.mainScene,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/main_scene.jpg`
			}), i.a.createElement("h3", {
				className: U.a.title
			}, Y._("Community Points", null, {
				hk: "eQ16B"
			})), i.a.createElement("h2", {
				className: U.a.subtitle
			}, Y._("Crypto Tokens for Subreddits", null, {
				hk: "vIU4T"
			})), i.a.createElement("p", {
				className: U.a.bodyText
			}, Y._("Add a custom token to your subreddit. Earn rewards, encourge quality content, and unlock premium features.", null, {
				hk: "1czVLN"
			})), i.a.createElement(c.t, {
				className: U.a.waitlistButton,
				priority: c.c.Primary,
				kind: c.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank"
			}, Y._("Join Waitlist", null, {
				hk: "4rpEy2"
			})));
			var V = n("./src/higherOrderComponents/asModal/index.tsx");
			const J = Object(V.a)(y);
			var z = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less"),
				H = n.n(z);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = ({
				className: e
			}) => {
				const [t, n] = Object(o.useState)(!1);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(f.a)(e, H.a.container)
				}, i.a.createElement("img", {
					className: H.a.image,
					src: `${r.a.assetPath}/img/communityPoints/landingPage/step_into_the_crypto_future.png`
				}), i.a.createElement("div", {
					className: H.a.textContainer
				}, i.a.createElement("h3", {
					className: H.a.title
				}, K._("Step into the Crypto Future", null, {
					hk: "49h4QX"
				})), i.a.createElement("div", {
					className: H.a.body
				}, K._("{=Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.}{=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, not on Reddit’s servers, which means they are truly owned by the community. As Community Points migrate from beta onto the main Ethereum blockchain, your community will benefit from even greater control and independence – on and off of Reddit.}", [K._param("=Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", i.a.createElement("p", null, K._("Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", null, {
					hk: "2hgLEC"
				}))), K._param("=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, not on Reddit’s servers, which means they are truly owned by the community. As Community Points migrate from beta onto the main Ethereum blockchain, your community will benefit from even greater control and independence – on and off of Reddit.", i.a.createElement("p", null, K._("Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, not on Reddit’s servers, which means they are truly owned by the community. As Community Points migrate from beta onto the main Ethereum blockchain, your community will benefit from even greater control and independence – on and off of Reddit.", null, {
					hk: "2r0fjb"
				})))], {
					hk: "46EaYu"
				})), i.a.createElement(c.t, {
					Icon: Object(S.b)("topic_reading"),
					className: H.a.docsButton,
					iconClassName: H.a.docsIcon,
					priority: c.c.Secondary,
					onClick: () => n(!0)
				}, K._("A New Frontier", null, {
					hk: "4GrPd2"
				})))), t && i.a.createElement(J, {
					withOverlay: !0,
					onOverlayClick: () => n(!1),
					onComplete: () => {}
				}))
			};
			var Q = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less"),
				Z = n.n(Q);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				className: e
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement("div", {
				className: Z.a.background
			}, i.a.createElement("img", {
				className: Z.a.snoo,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/faq.png`
			}), i.a.createElement("h3", {
				className: Z.a.title
			}, X._("Some FAQs about", null, {
				hk: "2sbM1D"
			})), i.a.createElement("h2", {
				className: Z.a.subtitle
			}, X._("Want to know more?", null, {
				hk: "3vbn1B"
			})), i.a.createElement(c.t, {
				Icon: Object(S.b)("topic_reading"),
				className: Z.a.docsButton,
				iconClassName: Z.a.docsIcon,
				priority: c.c.Secondary,
				kind: c.b.InternalLink,
				to: "/community-points/docs"
			}, i.a.createElement("span", {
				className: Z.a.docTextFull
			}, X._("Community Points Documentation", null, {
				hk: "3nnz6o"
			})), i.a.createElement("span", {
				className: Z.a.docTextShort
			}, X._("Community Points Doc", null, {
				hk: "1E9Ckc"
			})))));
			var ee = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = ({
				className: e,
				data: t
			}) => i.a.createElement("div", {
				className: Object(f.a)(te.a.container, e),
				style: {
					backgroundColor: t.backgroundColor
				}
			}, i.a.createElement("div", {
				className: te.a.textSection
			}, i.a.createElement("div", {
				className: te.a.textContainer
			}, i.a.createElement("h4", {
				className: te.a.title
			}, t.title), t.body)), i.a.createElement("div", {
				className: te.a.imageSection
			}, i.a.createElement("img", {
				className: te.a.image,
				src: t.imageSrc
			})));
			var oe = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less"),
				ie = n.n(oe);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = ({
				className: e
			}) => i.a.createElement("div", {
				className: e
			}, i.a.createElement("h3", {
				className: ie.a.title
			}, ae._("Look & Feel", null, {
				hk: "eE7iN"
			})), i.a.createElement("h2", {
				className: ie.a.subtitle
			}, ae._("Community Points Features", null, {
				hk: "13RfC7"
			})), de.map(e => i.a.createElement(re, {
				className: ie.a.featureContainer,
				key: e.title,
				data: e
			}))), de = [{
				title: ae._("Reputation", null, {
					hk: "bj2EH"
				}),
				body: i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Token balances are displayed next to usernames in posts and comment threads to show people’s reputation in the community. This allows people to easily identify the community’s biggest contributors in threads and conversations.", null, {
					hk: "3YOW3f"
				})),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/reputation.png`,
				backgroundColor: "#FF5C0033"
			}, {
				title: ae._("Special Memberships", null, {
					hk: "2Y3ChU"
				}),
				body: ae._("{=Use Community Points to purchase a Special Membership in the subreddit. Memberships give users access to several premium features.}{=Badges}{=Personalize your presence on the subreddit with loyalty and style badges, and add a highlighted color to your username.}{=GIFs}{=Embed GIFs directly inside your comments.}{=Animated Emojis}{=Add custom emojis to your comments.}", [ae._param("=Use Community Points to purchase a Special Membership in the subreddit. Memberships give users access to several premium features.", i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Use Community Points to purchase a Special Membership in the subreddit. Memberships give users access to several premium features.", null, {
					hk: "42knGQ"
				}))), ae._param("=Badges", i.a.createElement("h6", {
					className: ie.a.bodyTitle
				}, ae._("Badges", null, {
					hk: "1J0tam"
				}))), ae._param("=Personalize your presence on the subreddit with loyalty and style badges, and add a highlighted color to your username.", i.a.createElement("p", {
					className: ie.a.bodyDetail
				}, ae._("Personalize your presence on the subreddit with loyalty and style badges, and add a highlighted color to your username.", null, {
					hk: "eFakC"
				}))), ae._param("=GIFs", i.a.createElement("h6", {
					className: ie.a.bodyTitle
				}, ae._("GIFs", null, {
					hk: "2OpVx0"
				}))), ae._param("=Embed GIFs directly inside your comments.", i.a.createElement("p", {
					className: ie.a.bodyDetail
				}, ae._("Embed GIFs directly inside your comments.", null, {
					hk: "Dyx2t"
				}))), ae._param("=Animated Emojis", i.a.createElement("h6", {
					className: ie.a.bodyTitle
				}, ae._("Animated Emojis", null, {
					hk: "4yKqQF"
				}))), ae._param("=Add custom emojis to your comments.", i.a.createElement("p", {
					className: ie.a.bodyDetail
				}, ae._("Add custom emojis to your comments.", null, {
					hk: "1Dyof7"
				})))], {
					hk: "34nghy"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/special_memberships.png`,
				backgroundColor: "#D4F6FF"
			}, {
				title: ae._("Awards", null, {
					hk: "10gXo4"
				}),
				body: i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Use Community Points to buy Reddit Coins and gift awards in the subreddit.", null, {
					hk: "3dG5MQ"
				})),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/awards.png`,
				backgroundColor: "#00CC7833"
			}, {
				title: ae._("Polls & Voting", null, {
					hk: "3Ztp1s"
				}),
				body: ae._("{=Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned.}{=Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.}", [ae._param("=Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned.", i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned.", null, {
					hk: "2EnWSj"
				}))), ae._param("=Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", null, {
					hk: "k0r1b"
				})))], {
					hk: "14IRO2"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/polls.png`,
				backgroundColor: "#FFD63533"
			}, {
				title: ae._("Tipping & Transfers", null, {
					hk: "4uM4IS"
				}),
				body: ae._("{=Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned.}{=Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.}", [ae._param("=Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned.", i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned.", null, {
					hk: "2EnWSj"
				}))), ae._param("=Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", null, {
					hk: "k0r1b"
				})))], {
					hk: "15V3tA"
				}),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/tipping.png`,
				backgroundColor: "#F86AEA33"
			}, {
				title: ae._("Creator Rewards", null, {
					hk: "3fuNix"
				}),
				body: i.a.createElement("p", {
					className: ie.a.bodyText
				}, ae._("Community Points enable a new type of poll where votes are weighted according to the number of tokens a user has earned. Points-based polls can be marked as special Governance Polls to make decisions in the subreddit. For example, Governance Polls can be used to get input on subreddit rules or change Points distribution rules.", null, {
					hk: "2BhOe9"
				})),
				imageSrc: `${r.a.assetPath}/img/communityPoints/landingPage/creator_rewards.png`,
				backgroundColor: "#FFF9F3"
			}];
			var le = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less"),
				ce = n.n(le);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js"), me = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(f.a)(e, ce.a.container)
			}, i.a.createElement("div", {
				className: ce.a.backgroundContainer
			}, i.a.createElement("h3", {
				className: ce.a.title
			}, ue._("Join Waitlist", null, {
				hk: "2yTXN4"
			})), i.a.createElement("h2", {
				className: ce.a.subtitle
			}, ue._("Want to see Community Points in your subreddit?", null, {
				hk: "3a9HLq"
			})), i.a.createElement("p", {
				className: ce.a.body
			}, ue._("We are looking for a select few subreddits to join our crypto experiment. If you are a moderator, add yourself to the list and we’ll be in touch!", null, {
				hk: "3MTU6s"
			})), i.a.createElement(c.t, {
				className: ce.a.waitlistButton,
				priority: c.c.Primary,
				kind: c.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank"
			}, ue._("Join Waitlist", null, {
				hk: "p3fEV"
			})), i.a.createElement("img", {
				className: ce.a.moon,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/moon.png`
			}), i.a.createElement("img", {
				className: ce.a.rocket,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/rocket.png`
			})));
			var he = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less"),
				fe = n.n(he);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(f.a)(e, fe.a.background)
			}, i.a.createElement("div", {
				className: fe.a.textSection
			}, i.a.createElement("div", {
				className: fe.a.textContainer
			}, i.a.createElement("h2", {
				className: fe.a.title
			}, pe._("Vault", null, {
				hk: "Ydv9k"
			})), i.a.createElement("p", {
				className: fe.a.body
			}, pe._("A crypto wallet built into the Reddit app. See Points balances and send Points to Redditors at the tap of a button.", null, {
				hk: "1NZGlE"
			})))), i.a.createElement("div", {
				className: fe.a.imageSection
			}, i.a.createElement("img", {
				className: fe.a.image,
				src: `${r.a.assetPath}/img/communityPoints/landingPage/vault.png`
			})));
			var be = n("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				ve = n.n(be);
			t.default = () => {
				return Object(a.e)(s.a) ? i.a.createElement("div", {
					className: ve.a.container
				}, i.a.createElement(G, {
					className: ve.a.communityPointsSection
				}), i.a.createElement(O, {
					className: ve.a.benefitsSection
				}), i.a.createElement("img", {
					className: ve.a.spiral,
					src: `${r.a.assetPath}/img/communityPoints/landingPage/spiral.png`
				}), i.a.createElement(se, {
					className: ve.a.featuresSection
				}), i.a.createElement($, {
					className: ve.a.faqSection
				}), i.a.createElement(ge, {
					className: ve.a.vaultSection
				}), i.a.createElement(W, {
					className: ve.a.cryptoFutureSection
				}), i.a.createElement(me, {
					className: ve.a.joinWaitlistSection
				})) : i.a.createElement(D, null)
			}
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
				return g
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "z", (function() {
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "y", (function() {
				return I
			})), n.d(t, "u", (function() {
				return F
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "w", (function() {
				return L
			})), n.d(t, "s", (function() {
				return U
			})), n.d(t, "t", (function() {
				return Y
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				s = n("./src/reddit/models/Badge/managementPage.ts"),
				d = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/models/Product/index.ts"),
				c = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/gold/powerups/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const p = [],
				g = (e, t) => {
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
					const n = g(e, t);
					return n && n.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const y = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = b(e, t),
							r = Date.now();
						return n && r < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				_ = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === u.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || p).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[s.a.Loyalty]: r.find(e => e.placement === a.a.First),
							[s.a.Achievement]: r.find(e => e.placement === a.a.Second),
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
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : p
			}
			const E = (e, t, n) => {
					var o;
					if (!r.d.spBadges(e)) return p;
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

			function x(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === o) return n;
				const i = e.badges.models,
					s = e.user.ownedBadges[r] || {},
					d = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(s).map(e => i[e]).find(e => e && e.type === d)
			}

			function k(e, t, n, r) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === s.a.Loyalty || n === s.a.Achievement) return o.data.collections[n];
					if (n === s.a.Cosmetic && r) return o.data.collections[n][r]
				}
				return p
			}

			function N(e, t) {
				const n = k(e, t, s.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : p
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[s.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return p
			}

			function D(e, t) {
				return k(e, t, s.a.Cosmetic, s.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const S = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === c.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: d.a.SavedStripe
						})
					}
				}
				if (n.status === c.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const n = B.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = g(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				R = (e, t) => {
					var n, r, o, i;
					const a = (null === (i = null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || B;
					return {
						prices: M(e, t),
						member: a.member || B.member,
						memberPlural: a.memberPlural || B.memberPlural,
						memberAlt: a.memberAlt || B.memberAlt,
						memberAltPlural: a.memberAltPlural || B.memberAltPlural,
						membership: a.membership || B.membership,
						membershipAlt: a.membershipAlt || B.membershipAlt
					}
				},
				I = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === c.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				O = e => {
					const t = e.economics.paymentSystems;
					return t.status === c.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				q = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				L = (e, t) => {
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
					return !(!r || !Object(i.a)(r))
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
					if (o && Object(i.b)(o)) return !0;
					const a = r.d.spGiphy(e),
						s = L(e, t);
					return !(!a || !s) || a && s
				},
				G = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				V = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.dadcd37ff1a6771c44ec.js.map