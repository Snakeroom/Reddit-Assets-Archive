// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.746edd5c32f14d278f7d.js
// Retrieved at 12/2/2021, 6:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, o) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, t, o) {
					var a = {},
						r = {};
					r[t] = 0;
					var i, s, l, u, c, d, m, h = n.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (l in s = (i = h.pop()).value, u = i.cost, c = e[s] || {}) c.hasOwnProperty(l) && (d = u + c[l], m = r[l], (void 0 === r[l] || m > d) && (r[l] = d, h.push(l, d), a[l] = s));
					if (void 0 !== o && void 0 === r[o]) {
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
				r = o("./node_modules/qrcode/lib/renderer/canvas.js"),
				i = o("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, o, r, i) {
				var s = [].slice.call(arguments, 1),
					l = s.length,
					u = "function" == typeof s[l - 1];
				if (!u && !n()) throw new Error("Callback required as last argument");
				if (!u) {
					if (l < 1) throw new Error("Too few arguments provided");
					return 1 === l ? (o = t, t = r = void 0) : 2 !== l || t.getContext || (r = o, o = t, t = void 0), new Promise((function(n, i) {
						try {
							var s = a.create(o, r);
							n(e(s, t, r))
						} catch (l) {
							i(l)
						}
					}))
				}
				if (l < 2) throw new Error("Too few arguments provided");
				2 === l ? (i = o, o = t, t = r = void 0) : 3 === l && (t.getContext && void 0 === i ? (i = r, r = void 0) : (i = r, r = o, o = t, t = void 0));
				try {
					var c = a.create(o, r);
					i(null, e(c, t, r))
				} catch (d) {
					i(d)
				}
			}
			t.create = a.create, t.toCanvas = s.bind(null, r.render), t.toDataURL = s.bind(null, r.renderToDataURL), t.toString = s.bind(null, (function(e, t, o) {
				return i.render(e, o)
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
				for (var t = Math.floor(e / 7) + 2, o = n(e), a = 145 === o ? 26 : 2 * Math.ceil((o - 13) / (2 * t - 2)), r = [o - 7], i = 1; i < t - 1; i++) r[i] = r[i - 1] - a;
				return r.push(6), r.reverse()
			}, t.getPositions = function(e) {
				for (var o = [], n = t.getRowColCoords(e), a = n.length, r = 0; r < a; r++)
					for (var i = 0; i < a; i++) 0 === r && 0 === i || 0 === r && i === a - 1 || r === a - 1 && 0 === i || o.push([n[r], n[i]]);
				return o
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js"),
				a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function r(e) {
				this.mode = n.ALPHANUMERIC, this.data = e
			}
			r.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var o = 45 * a.indexOf(this.data[t]);
					o += a.indexOf(this.data[t + 1]), e.put(o, 11)
				}
				this.data.length % 2 && e.put(a.indexOf(this.data[t]), 6)
			}, e.exports = r
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

			function r(e) {
				this.mode = a.BYTE, this.data = n.from(e)
			}
			r.getBitsLength = function(e) {
				return 8 * e
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
				for (var t = 0, o = this.data.length; t < o; t++) e.put(this.data[t], 8)
			}, e.exports = r
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				r = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
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
						return r[4 * (e - 1) + 0];
					case n.M:
						return r[4 * (e - 1) + 1];
					case n.Q:
						return r[4 * (e - 1) + 2];
					case n.H:
						return r[4 * (e - 1) + 3];
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
				for (var o = e.bit << 3 | t, r = o << 10; n.getBCHDigit(r) - a >= 0;) r ^= 1335 << n.getBCHDigit(r) - a;
				return 21522 ^ (o << 10 | r)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = n.alloc(512),
				r = n.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) a[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) a[t] = a[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return r[e]
			}, t.exp = function(e) {
				return a[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : a[r[e] + r[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js"),
				a = o("./node_modules/qrcode/lib/core/utils.js");

			function r(e) {
				this.mode = n.KANJI, this.data = e
			}
			r.getBitsLength = function(e) {
				return 13 * e
			}, r.prototype.getLength = function() {
				return this.data.length
			}, r.prototype.getBitsLength = function() {
				return r.getBitsLength(this.data.length)
			}, r.prototype.write = function(e) {
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
			}, e.exports = r
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
				r = 10;

			function i(e, o, n) {
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
				for (var t = e.size, n = 0, a = 0, r = 0, i = null, s = null, l = 0; l < t; l++) {
					a = r = 0, i = s = null;
					for (var u = 0; u < t; u++) {
						var c = e.get(l, u);
						c === i ? a++ : (a >= 5 && (n += o + (a - 5)), i = c, a = 1), (c = e.get(u, l)) === s ? r++ : (r >= 5 && (n += o + (r - 5)), s = c, r = 1)
					}
					a >= 5 && (n += o + (a - 5)), r >= 5 && (n += o + (r - 5))
				}
				return n
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, o = 0, a = 0; a < t - 1; a++)
					for (var r = 0; r < t - 1; r++) {
						var i = e.get(a, r) + e.get(a, r + 1) + e.get(a + 1, r) + e.get(a + 1, r + 1);
						4 !== i && 0 !== i || o++
					}
				return o * n
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, o = 0, n = 0, r = 0, i = 0; i < t; i++) {
					n = r = 0;
					for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(i, s), s >= 10 && (1488 === n || 93 === n) && o++, r = r << 1 & 2047 | e.get(s, i), s >= 10 && (1488 === r || 93 === r) && o++
				}
				return o * a
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, o = e.data.length, n = 0; n < o; n++) t += e.data[n];
				return Math.abs(Math.ceil(100 * t / o / 5) - 10) * r
			}, t.applyMask = function(e, t) {
				for (var o = t.size, n = 0; n < o; n++)
					for (var a = 0; a < o; a++) t.isReserved(a, n) || t.xor(a, n, i(e, a, n))
			}, t.getBestMask = function(e, o) {
				for (var n = Object.keys(t.Patterns).length, a = 0, r = 1 / 0, i = 0; i < n; i++) {
					o(i), t.applyMask(i, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(i, e), s < r && (r = s, a = i)
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
				for (var o = n.alloc(e.length + t.length - 1), r = 0; r < e.length; r++)
					for (var i = 0; i < t.length; i++) o[r + i] ^= a.mul(e[r], t[i]);
				return o
			}, t.mod = function(e, t) {
				for (var o = n.from(e); o.length - t.length >= 0;) {
					for (var r = o[0], i = 0; i < t.length; i++) o[i] ^= a.mul(t[i], r);
					for (var s = 0; s < o.length && 0 === o[s];) s++;
					o = o.slice(s)
				}
				return o
			}, t.generateECPolynomial = function(e) {
				for (var o = n.from([1]), r = 0; r < e; r++) o = t.mul(o, [1, a.exp(r)]);
				return o
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = o("./node_modules/qrcode/lib/core/utils.js"),
				r = o("./node_modules/qrcode/lib/core/error-correction-level.js"),
				i = o("./node_modules/qrcode/lib/core/bit-buffer.js"),
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
				var n, a, r = e.size,
					i = p.getEncodedBits(t, o);
				for (n = 0; n < 15; n++) a = 1 == (i >> n & 1), n < 6 ? e.set(n, 8, a, !0) : n < 8 ? e.set(n + 1, 8, a, !0) : e.set(r - 15 + n, 8, a, !0), n < 8 ? e.set(8, r - n - 1, a, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, a, !0) : e.set(8, 15 - n - 1, a, !0);
				e.set(r - 8, 8, 1, !0)
			}

			function w(e, t, o) {
				var r = new i;
				o.forEach((function(t) {
					r.put(t.mode.bit, 4), r.put(t.getLength(), y.getCharCountIndicator(t.mode, e)), t.write(r)
				}));
				var s = 8 * (a.getSymbolTotalCodewords(e) - d.getTotalCodewordsCount(e, t));
				for (r.getLengthInBits() + 4 <= s && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(0);
				for (var l = (s - r.getLengthInBits()) / 8, u = 0; u < l; u++) r.put(u % 2 ? 17 : 236, 8);
				return function(e, t, o) {
					for (var r = a.getSymbolTotalCodewords(t), i = d.getTotalCodewordsCount(t, o), s = r - i, l = d.getBlocksCount(t, o), u = l - r % l, c = Math.floor(r / l), h = Math.floor(s / l), p = h + 1, y = c - h, b = new m(y), f = 0, g = new Array(l), w = new Array(l), v = 0, k = n.from(e.buffer), _ = 0; _ < l; _++) {
						var P = _ < u ? h : p;
						g[_] = k.slice(f, f + P), w[_] = b.encode(g[_]), f += P, v = Math.max(v, P)
					}
					var E, C, I = n.alloc(r),
						R = 0;
					for (E = 0; E < v; E++)
						for (C = 0; C < l; C++) E < g[C].length && (I[R++] = g[C][E]);
					for (E = 0; E < y; E++)
						for (C = 0; C < l; C++) I[R++] = w[C][E];
					return I
				}(r, e, t)
			}

			function v(e, t, o, n) {
				var r;
				if (f(e)) r = b.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var i = t;
					if (!i) {
						var d = b.rawSplit(e);
						i = h.getBestVersionForData(d, o)
					}
					r = b.fromString(e, i || 40)
				}
				var m = h.getBestVersionForData(r, o);
				if (!m) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < m) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
				} else t = m;
				var p = w(t, o, r),
					y = a.getSymbolSize(t),
					v = new s(y);
				return function(e, t) {
						for (var o = e.size, n = u.getPositions(t), a = 0; a < n.length; a++)
							for (var r = n[a][0], i = n[a][1], s = -1; s <= 7; s++)
								if (!(r + s <= -1 || o <= r + s))
									for (var l = -1; l <= 7; l++) i + l <= -1 || o <= i + l || (s >= 0 && s <= 6 && (0 === l || 6 === l) || l >= 0 && l <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && l >= 2 && l <= 4 ? e.set(r + s, i + l, !0, !0) : e.set(r + s, i + l, !1, !0))
					}(v, t),
					function(e) {
						for (var t = e.size, o = 8; o < t - 8; o++) {
							var n = o % 2 == 0;
							e.set(o, 6, n, !0), e.set(6, o, n, !0)
						}
					}(v),
					function(e, t) {
						for (var o = l.getPositions(t), n = 0; n < o.length; n++)
							for (var a = o[n][0], r = o[n][1], i = -2; i <= 2; i++)
								for (var s = -2; s <= 2; s++) - 2 === i || 2 === i || -2 === s || 2 === s || 0 === i && 0 === s ? e.set(a + i, r + s, !0, !0) : e.set(a + i, r + s, !1, !0)
					}(v, t), g(v, o, 0), t >= 7 && function(e, t) {
						for (var o, n, a, r = e.size, i = h.getEncodedBits(t), s = 0; s < 18; s++) o = Math.floor(s / 3), n = s % 3 + r - 8 - 3, a = 1 == (i >> s & 1), e.set(o, n, a, !0), e.set(n, o, a, !0)
					}(v, t),
					function(e, t) {
						for (var o = e.size, n = -1, a = o - 1, r = 7, i = 0, s = o - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var l = 0; l < 2; l++)
									if (!e.isReserved(a, s - l)) {
										var u = !1;
										i < t.length && (u = 1 == (t[i] >>> r & 1)), e.set(a, s - l, u), -1 === --r && (i++, r = 7)
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
						segments: r
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var o, n, i = r.M;
				return void 0 !== t && (i = r.from(t.errorCorrectionLevel, r.M), o = h.from(t.version), n = c.from(t.maskPattern), t.toSJISFunc && a.setToSJISFunction(t.toSJISFunc)), v(e, o, i, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				a = o("./node_modules/qrcode/lib/core/polynomial.js"),
				r = o("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

			function i(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			i.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = a.generateECPolynomial(this.degree)
			}, i.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = n.alloc(this.degree),
					o = r.concat([e, t], e.length + this.degree),
					i = a.mod(o, this.genPoly),
					s = this.degree - i.length;
				if (s > 0) {
					var l = n.alloc(this.degree);
					return i.copy(l, s), l
				}
				return i
			}, e.exports = i
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var o = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (o = o.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(o, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var a = new RegExp("^" + o + "$"),
				r = new RegExp("^[0-9]+$"),
				i = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return a.test(e)
			}, t.testNumeric = function(e) {
				return r.test(e)
			}, t.testAlphanumeric = function(e) {
				return i.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/core/mode.js"),
				a = o("./node_modules/qrcode/lib/core/numeric-data.js"),
				r = o("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				i = o("./node_modules/qrcode/lib/core/byte-data.js"),
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
					r = m(l.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return u.isKanjiModeEnabled() ? (t = m(l.BYTE, n.BYTE, e), o = m(l.KANJI, n.KANJI, e)) : (t = m(l.BYTE_KANJI, n.BYTE, e), o = []), a.concat(r, t, o).sort((function(e, t) {
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
						return r.getBitsLength(e);
					case n.KANJI:
						return s.getBitsLength(e);
					case n.BYTE:
						return i.getBitsLength(e)
				}
			}

			function y(e, t) {
				var o, l = n.getBestModeForData(e);
				if ((o = n.from(t, l)) !== n.BYTE && o.bit < l.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(o) + ".\n Suggested mode is: " + n.toString(l));
				switch (o !== n.KANJI || u.isKanjiModeEnabled() || (o = n.BYTE), o) {
					case n.NUMERIC:
						return new a(e);
					case n.ALPHANUMERIC:
						return new r(e);
					case n.KANJI:
						return new s(e);
					case n.BYTE:
						return new i(e)
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
							}, r = ["start"], i = 0; i < e.length; i++) {
							for (var s = e[i], l = [], u = 0; u < s.length; u++) {
								var c = s[u],
									d = "" + i + u;
								l.push(d), o[d] = {
									node: c,
									lastCount: 0
								}, a[d] = {};
								for (var m = 0; m < r.length; m++) {
									var h = r[m];
									o[h] && o[h].node.mode === c.mode ? (a[h][d] = p(o[h].lastCount + c.length, c.mode) - p(o[h].lastCount, c.mode), o[h].lastCount += c.length) : (o[h] && (o[h].lastCount = c.length), a[h][d] = p(c.length, c.mode) + 4 + n.getCharCountIndicator(c.mode, t))
								}
							}
							r = l
						}
						for (m = 0; m < r.length; m++) a[r[m]].end = 0;
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
					}(h(e, u.isKanjiModeEnabled())), o), r = c.find_path(a.map, "start", "end"), i = [], s = 1; s < r.length - 1; s++) i.push(a.table[r[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var o = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return o && o.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(i))
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
				r = o("./node_modules/qrcode/lib/core/error-correction-level.js"),
				i = o("./node_modules/qrcode/lib/core/mode.js"),
				s = o("./node_modules/qrcode/lib/core/version-check.js"),
				l = o("./node_modules/qrcode/node_modules/isarray/index.js"),
				u = n.getBCHDigit(7973);

			function c(e, t) {
				return i.getCharCountIndicator(e, t) + 4
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
				void 0 === o && (o = i.BYTE);
				var r = 8 * (n.getSymbolTotalCodewords(e) - a.getTotalCodewordsCount(e, t));
				if (o === i.MIXED) return r;
				var l = r - c(o, e);
				switch (o) {
					case i.NUMERIC:
						return Math.floor(l / 10 * 3);
					case i.ALPHANUMERIC:
						return Math.floor(l / 11 * 2);
					case i.KANJI:
						return Math.floor(l / 13);
					case i.BYTE:
					default:
						return Math.floor(l / 8)
				}
			}, t.getBestVersionForData = function(e, o) {
				var n, a = r.from(o, r.M);
				if (l(e)) {
					if (e.length > 1) return function(e, o) {
						for (var n = 1; n <= 40; n++) {
							if (d(e, n) <= t.getCapacity(n, o, i.MIXED)) return n
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
					r = t;
				void 0 !== a || t && t.getContext || (a = t, t = void 0), t || (r = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), a = n.getOptions(a);
				var i = n.getImageWidth(e.modules.size, a),
					s = r.getContext("2d"),
					l = s.createImageData(i, i);
				return n.qrToImageData(l.data, e, a),
					function(e, t, o) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = o, t.width = o, t.style.height = o + "px", t.style.width = o + "px"
					}(s, r, i), s.putImageData(l, 0, 0), r
			}, t.renderToDataURL = function(e, o, n) {
				var a = n;
				void 0 !== a || o && o.getContext || (a = o, o = void 0), a || (a = {});
				var r = t.render(e, o, a),
					i = a.type || "image/png",
					s = a.rendererOpts || {};
				return r.toDataURL(i, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, o) {
			var n = o("./node_modules/qrcode/lib/renderer/utils.js");

			function a(e, t) {
				var o = e.a / 255,
					n = t + '="' + e.hex + '"';
				return o < 1 ? n + " " + t + '-opacity="' + o.toFixed(2).slice(1) + '"' : n
			}

			function r(e, t, o) {
				var n = e + t;
				return void 0 !== o && (n += " " + o), n
			}
			t.render = function(e, t, o) {
				var i = n.getOptions(t),
					s = e.modules.size,
					l = e.modules.data,
					u = s + 2 * i.margin,
					c = i.color.light.a ? "<path " + a(i.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
					d = "<path " + a(i.color.dark, "stroke") + ' d="' + function(e, t, o) {
						for (var n = "", a = 0, i = !1, s = 0, l = 0; l < e.length; l++) {
							var u = Math.floor(l % t),
								c = Math.floor(l / t);
							u || i || (i = !0), e[l] ? (s++, l > 0 && u > 0 && e[l - 1] || (n += i ? r("M", u + o, .5 + c + o) : r("m", a, 0), a = 0, i = !1), u + 1 < t && e[l + 1] || (n += r("h", s), s = 0)) : a++
						}
						return n
					}(l, s, i.margin) + '"/>',
					m = 'viewBox="0 0 ' + u + " " + u + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + c + d + "</svg>\n";
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
				for (var a = o.modules.size, r = o.modules.data, i = t.getScale(a, n), s = Math.floor((a + 2 * n.margin) * i), l = n.margin * i, u = [n.color.light, n.color.dark], c = 0; c < s; c++)
					for (var d = 0; d < s; d++) {
						var m = 4 * (c * s + d),
							h = n.color.light;
						if (c >= l && d >= l && c < s - l && d < s - l) h = u[r[Math.floor((c - l) / i) * a + Math.floor((d - l) / i)] ? 1 : 0];
						e[m++] = h.r, e[m++] = h.g, e[m++] = h.b, e[m] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/qrcode/node_modules/isarray/index.js");
			r.TYPED_ARRAY_SUPPORT = function() {
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
			var a = r.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function r(e, t, o) {
				return r.TYPED_ARRAY_SUPPORT || this instanceof r ? "number" == typeof e ? l(this, e) : function(e, t, o, n) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, o, n) {
						if (o < 0 || t.byteLength < o) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < o + (n || 0)) throw new RangeError("'length' is out of bounds");
						var a;
						a = void 0 === o && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, o) : new Uint8Array(t, o, n);
						r.TYPED_ARRAY_SUPPORT ? a.__proto__ = r.prototype : a = u(e, a);
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
						if (r.isBuffer(t)) {
							var o = 0 | i(t.length),
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
				}(this, e, t, o) : new r(e, t, o)
			}

			function i(e) {
				if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var o;
				return r.TYPED_ARRAY_SUPPORT ? (o = new Uint8Array(t)).__proto__ = r.prototype : (null === (o = e) && (o = new r(t)), o.length = t), o
			}

			function l(e, t) {
				var o = s(e, t < 0 ? 0 : 0 | i(t));
				if (!r.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) o[n] = 0;
				return o
			}

			function u(e, t) {
				for (var o = t.length < 0 ? 0 : 0 | i(t.length), n = s(e, o), a = 0; a < o; a += 1) n[a] = 255 & t[a];
				return n
			}

			function c(e, t) {
				var o;
				t = t || 1 / 0;
				for (var n = e.length, a = null, r = [], i = 0; i < n; ++i) {
					if ((o = e.charCodeAt(i)) > 55295 && o < 57344) {
						if (!a) {
							if (o > 56319) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							if (i + 1 === n) {
								(t -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							a = o;
							continue
						}
						if (o < 56320) {
							(t -= 3) > -1 && r.push(239, 191, 189), a = o;
							continue
						}
						o = 65536 + (a - 55296 << 10 | o - 56320)
					} else a && (t -= 3) > -1 && r.push(239, 191, 189);
					if (a = null, o < 128) {
						if ((t -= 1) < 0) break;
						r.push(o)
					} else if (o < 2048) {
						if ((t -= 2) < 0) break;
						r.push(o >> 6 | 192, 63 & o | 128)
					} else if (o < 65536) {
						if ((t -= 3) < 0) break;
						r.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128)
					} else {
						if (!(o < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						r.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128)
					}
				}
				return r
			}

			function d(e) {
				return r.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : c(e).length)
			}
			r.TYPED_ARRAY_SUPPORT && (r.prototype.__proto__ = Uint8Array.prototype, r.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && r[Symbol.species] === r && Object.defineProperty(r, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), r.prototype.write = function(e, t, o) {
				void 0 === t ? (o = this.length, t = 0) : void 0 === o && "string" == typeof t ? (o = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(o) ? o |= 0 : o = void 0);
				var n = this.length - t;
				if ((void 0 === o || o > n) && (o = n), e.length > 0 && (o < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, o, n) {
					return function(e, t, o, n) {
						for (var a = 0; a < n && !(a + o >= t.length || a >= e.length); ++a) t[a + o] = e[a];
						return a
					}(c(t, e.length - o), e, o, n)
				}(this, e, t, o)
			}, r.prototype.slice = function(e, t) {
				var o, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), r.TYPED_ARRAY_SUPPORT)(o = this.subarray(e, t)).__proto__ = r.prototype;
				else {
					var a = t - e;
					o = new r(a, void 0);
					for (var i = 0; i < a; ++i) o[i] = this[i + e]
				}
				return o
			}, r.prototype.copy = function(e, t, o, n) {
				if (o || (o = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < o && (n = o), n === o) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (o < 0 || o >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - o && (n = e.length - t + o);
				var a, i = n - o;
				if (this === e && o < t && t < n)
					for (a = i - 1; a >= 0; --a) e[a + t] = this[a + o];
				else if (i < 1e3 || !r.TYPED_ARRAY_SUPPORT)
					for (a = 0; a < i; ++a) e[a + t] = this[a + o];
				else Uint8Array.prototype.set.call(e, this.subarray(o, o + i), t);
				return i
			}, r.prototype.fill = function(e, t, o) {
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
					var i = r.isBuffer(e) ? e : new r(e),
						s = i.length;
					for (a = 0; a < o - t; ++a) this[a + t] = i[a % s]
				}
				return this
			}, r.concat = function(e, t) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var o;
				if (void 0 === t)
					for (t = 0, o = 0; o < e.length; ++o) t += e[o].length;
				var a = l(null, t),
					i = 0;
				for (o = 0; o < e.length; ++o) {
					var u = e[o];
					if (!r.isBuffer(u)) throw new TypeError('"list" argument must be an Array of Buffers');
					u.copy(a, i), i += u.length
				}
				return a
			}, r.byteLength = d, r.prototype._isBuffer = !0, r.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new r(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new r(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, t) {
			var o = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == o.call(e)
			}
		},
		"./node_modules/react-tilt/dist/tilt.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}(),
				i = o("./node_modules/react/index.js"),
				s = (n = i) && n.__esModule ? n : {
					default: n
				},
				l = o("./node_modules/react-dom/index.js");
			var u = function(e) {
				function t(e) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var o = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					o.state = {
						style: {}
					};
					return o.width = null, o.height = null, o.left = null, o.top = null, o.transitionTimeout = null, o.updateCall = null, o.element = null, o.settings = Object.assign({}, {
						reverse: !1,
						max: 35,
						perspective: 1e3,
						easing: "cubic-bezier(.03,.98,.52,.99)",
						scale: "1.1",
						speed: "1000",
						transition: !0,
						axis: null,
						reset: !0
					}, o.props.options), o.reverse = o.settings.reverse ? -1 : 1, o.onMouseEnter = o.onMouseEnter.bind(o, o.props.onMouseEnter), o.onMouseMove = o.onMouseMove.bind(o, o.props.onMouseMove), o.onMouseLeave = o.onMouseLeave.bind(o, o.props.onMouseLeave), o
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), r(t, [{
					key: "componentDidMount",
					value: function() {
						this.element = (0, l.findDOMNode)(this)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.transitionTimeout), cancelAnimationFrame(this.updateCall)
					}
				}, {
					key: "onMouseEnter",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return this.updateElementPosition(), this.setState(Object.assign({}, this.state, {
							style: a({}, this.state.style, {
								willChange: "transform"
							})
						})), this.setTransition(), e(t)
					}
				}, {
					key: "reset",
					value: function() {
						var e = this;
						window.requestAnimationFrame((function() {
							e.setState(Object.assign({}, e.state, {
								style: a({}, e.state.style, {
									transform: "perspective(" + e.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
								})
							}))
						}))
					}
				}, {
					key: "onMouseMove",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return t.persist(), null !== this.updateCall && window.cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.update.bind(this, t)), e(t)
					}
				}, {
					key: "setTransition",
					value: function() {
						var e = this;
						clearTimeout(this.transitionTimeout), this.setState(Object.assign({}, this.state, {
							style: a({}, this.state.style, {
								transition: this.settings.speed + "ms " + this.settings.easing
							})
						})), this.transitionTimeout = setTimeout((function() {
							e.setState(Object.assign({}, e.state, {
								style: a({}, e.state.style, {
									transition: ""
								})
							}))
						}), this.settings.speed)
					}
				}, {
					key: "onMouseLeave",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
							t = arguments[1];
						return this.setTransition(), this.settings.reset && this.reset(), e(t)
					}
				}, {
					key: "getValues",
					value: function(e) {
						var t = (e.nativeEvent.clientX - this.left) / this.width,
							o = (e.nativeEvent.clientY - this.top) / this.height,
							n = Math.min(Math.max(t, 0), 1),
							a = Math.min(Math.max(o, 0), 1);
						return {
							tiltX: (this.reverse * (this.settings.max / 2 - n * this.settings.max)).toFixed(2),
							tiltY: (this.reverse * (a * this.settings.max - this.settings.max / 2)).toFixed(2),
							percentageX: 100 * n,
							percentageY: 100 * a
						}
					}
				}, {
					key: "updateElementPosition",
					value: function() {
						var e = this.element.getBoundingClientRect();
						this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = e.left, this.top = e.top
					}
				}, {
					key: "update",
					value: function(e) {
						var t = this.getValues(e);
						this.setState(Object.assign({}, this.state, {
							style: a({}, this.state.style, {
								transform: "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
							})
						})), this.updateCall = null
					}
				}, {
					key: "render",
					value: function() {
						var e = Object.assign({}, this.props.style, this.state.style);
						return s.default.createElement("div", {
							style: e,
							className: this.props.className,
							onMouseEnter: this.onMouseEnter,
							onMouseMove: this.onMouseMove,
							onMouseLeave: this.onMouseLeave
						}, this.props.children)
					}
				}]), t
			}(i.Component);
			t.default = u
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
				r = o("./src/reddit/constants/colors.ts"),
				i = o("./src/reddit/helpers/styles/smartTextColor.ts"),
				s = o("./src/reddit/components/Governance/TransactionModals/Common/Bullet.m.less"),
				l = o.n(s);

			function u(e) {
				const {
					index: t,
					children: o,
					color: n
				} = e, s = n && Object(i.a)(n, void 0, r.a.white);
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
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				s = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = o("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class u extends i.a.Component {
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
					return e && i.a.createElement("img", {
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
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
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
			const b = Object(i.c)({
					userId: e => {
						const t = Object(c.k)(e);
						return t ? t.id : ""
					}
				}),
				f = Object(r.b)(b)((function(e) {
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
				return r
			})), o.d(t, "d", (function() {
				return i
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
					...Object(n.defaults)(t),
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(n.subreddit)(t)
				}),
				r = () => a("view"),
				i = () => a("tap"),
				s = () => a("dismiss"),
				l = () => e => ({
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
				c = e => t => ({
					...Object(n.defaults)(t),
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				d = () => e => ({
					...Object(n.defaults)(e),
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => ({
					...Object(n.defaults)(t),
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(n.subredditById)(t, e)
				})
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, o) {
			"use strict";
			var n, a, r, i;
			o.d(t, "b", (function() {
					return a
				})), o.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, o) {
			"use strict";
			var n;

			function a(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			o.d(t, "a", (function() {
					return n
				})), o.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
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
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_81E2YESAdbLBEPdlCjiWx",
				menuContainer: "_3os0Eb9YY4sdudgVb6wagz",
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
				active: "_3jsHkW_28FYYDl7q470ton"
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
				mainScene: "_1rRH8io2oTfod98xPvCKtZ",
				title: "_2mxGnwsJiO-qvSzpOulRFX",
				subtitle: "_3m3_p5jybv4MaYrJ2PVdD-",
				bodyText: "XofGmuW13eskj1YFcBtaR",
				waitlistButton: "_3P-mpJEZcqloYGIVLElRwC"
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
				buttonIcon: "_5enw_h_QNP0edxOuTIgVT"
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
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Testimonials/index.m.less": function(e, t, o) {
			e.exports = {
				title: "_1JLRF8dk1nJ_aXMLMlEysm",
				subtitle: "_1_oNliNdKMIf6wiSWFB-xL",
				quotesContainer: "NR844McmNBQCMTfZ6IWOl",
				showAll: "_3LLcq3-aIz8oAFcWMj0i8R",
				userQuote: "_38Yub68nqwNJ2Gf6XlxxA",
				alwaysShow: "_172BkM9ofaLaNnjpY4caX4",
				showAllButton: "nMJZdwdYqudWeJQuCKE75"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Testimonials/quoteBubble.m.less": function(e, t, o) {
			e.exports = {
				bubble: "_1_ZBiD-HDuIuXUhV9efKo_",
				bubbleBottom: "_12AgVE-9J0Mm5cGRYnXYUj",
				isRightSide: "_2xN6G58RGWTjXxVFVBYMMG",
				userRow: "_3_BhPFUWpGQdm33IZoNYyR",
				rightJustified: "_1nOTK2vyQ5D9lrgMoMPR0w",
				userIconWrapper: "_1leo9p37OA-L6NcuaS-Cnc",
				userIcon: "_3rx610iO_DCnNclowYn4Th",
				usernameWrapper: "_3lkjcy_deGvgPT8yYMHers",
				username: "UALrIctL86DmO85CT6fuU",
				userBadge: "_2_Nj9xP0VY1o1RNj_QPK4J"
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
				imageContainer: "_21z1zXdwaOJ6ayQtKtWS5c",
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
				testimonialsSection: "_2eDsIteQWA2bnBYWjxBvPN",
				cryptoFutureSection: "_21NRzDYwPqzOpUzZ2w_r3j",
				joinWaitlistSection: "_3f4Fk6abLq8KKZzOZpqbwX"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "Anchor", (function() {
				return wt
			}));
			var n = o("./src/config.ts"),
				a = o("./node_modules/react/index.js"),
				r = o.n(a),
				i = o("./node_modules/react-redux/es/index.js"),
				s = o("./src/reddit/selectors/experiments/econ/meta.ts"),
				l = o("./src/reddit/hooks/usePageLayer.ts"),
				u = o("./src/reddit/routes/meta/constants.ts");
			const c = /\/community-points\/documentation\/?(.*)/,
				d = e => {
					var t, o;
					const n = null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.url;
					if (!n) return null;
					const a = n.match(c);
					return a && a[1] ? a[1] : null
				},
				m = e => `/community-points/documentation/${e}`,
				{
					fbt: h
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: p
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var y = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				b = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less"),
				f = o.n(b);
			const {
				fbt: g
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: w
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: v
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: k
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var _ = o("./src/lib/classNames/index.ts"),
				P = o("./node_modules/fbt/lib/FbtPublic.js");
			const E = [{
				key: "introduction",
				name: P.fbt._("Intro", null, {
					hk: "373VV7"
				}),
				pages: [{
					key: "introduction",
					name: P.fbt._("Introduction", null, {
						hk: "f7WaD"
					})
				}]
			}, {
				key: "points-distribution",
				name: P.fbt._("Points Distribution", null, {
					hk: "2zNnfy"
				}),
				pages: [{
					key: "distribution-process",
					name: P.fbt._("Distribution Process", null, {
						hk: "723Tq"
					})
				}, {
					key: "distribution-rules",
					name: P.fbt._("Distribution Rules", null, {
						hk: "357sNF"
					})
				}, {
					key: "spam-and-abuse",
					name: P.fbt._("Spam & Abuse", null, {
						hk: "1uqIAx"
					})
				}]
			}, {
				key: "features",
				name: P.fbt._("Features", null, {
					hk: "3xGVnE"
				}),
				pages: [{
					key: "reputation-and-governance",
					name: P.fbt._("Reputation & Governance", null, {
						hk: "9h6Ny"
					})
				}, {
					key: "special-memberships",
					name: P.fbt._("Special Memberships", null, {
						hk: "1c2Bqa"
					})
				}, {
					key: "coins-and-awards",
					name: P.fbt._("Coins & Awards", null, {
						hk: "4zZQUp"
					})
				}, {
					key: "redeeming-points",
					name: P.fbt._("Redeeming Points", null, {
						hk: "MOTKC"
					})
				}, {
					key: "tipping-and-transfers",
					name: P.fbt._("Tipping & Transfers", null, {
						hk: "1xiWGL"
					})
				}, {
					key: "points-and-automoderator",
					name: P.fbt._("Points & Automoderator", null, {
						hk: "4bmuZM"
					})
				}]
			}, {
				key: "blockchain",
				name: P.fbt._("Blockchain", null, {
					hk: "3HjKIg"
				}),
				pages: [{
					key: "vault",
					name: P.fbt._("Vault", null, {
						hk: "4vC7Cj"
					})
				}, {
					key: "points-on-the-blockchain",
					name: P.fbt._("Points on the Blockchain", null, {
						hk: "10M3cB"
					})
				}, {
					key: "developers",
					name: P.fbt._("Developers", null, {
						hk: "3lAfaF"
					})
				}]
			}, {
				key: "additional-resources",
				name: P.fbt._("Additional Resources", null, {
					hk: "7bp0b"
				}),
				pages: [{
					key: "faqs",
					name: P.fbt._("Frequently Asked Questions", null, {
						hk: "4e4s5J"
					})
				}]
			}];
			var C = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less"),
				I = o.n(C);
			const R = ({
					className: e
				}) => {
					const t = Object(l.a)(),
						o = d(t);
					return r.a.createElement("div", {
						className: Object(_.a)(I.a.container, e)
					}, r.a.createElement("nav", null, r.a.createElement("ol", null, E.map(e => r.a.createElement("div", {
						key: e.name,
						className: I.a.section
					}, e.pages.length > 1 && r.a.createElement("h4", {
						className: I.a.categoryHeader
					}, e.name), r.a.createElement("ol", null, e.pages.map(({
						key: e,
						name: t
					}) => r.a.createElement(T, {
						key: e,
						active: e === o,
						name: t,
						pageKey: e
					}))))))))
				},
				T = ({
					active: e,
					name: t,
					pageKey: o
				}) => r.a.createElement(y.a, {
					to: m(o)
				}, r.a.createElement("li", {
					className: Object(_.a)(I.a.menuItem, {
						[I.a.active]: e
					})
				}, t)),
				{
					fbt: S
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: x
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: V
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: A
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: M
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: N
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: B
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: j
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var F = o("./node_modules/react-router-redux/es/index.js");
			const D = ({
					className: e
				}) => {
					const t = Object(i.d)(),
						o = Object(l.a)(),
						n = d(o);
					return Object(a.useEffect)(() => {
						window.scrollTo(0, 0)
					}, [n]), n && (e => ["introduction", "distribution-process", "distribution-rules", "spam-and-abuse", "reputation-and-governance", "special-memberships", "coins-and-awards", "redeeming-points", "tipping-and-transfers", "points-and-automoderator", "vault", "points-on-the-blockchain", "developers", "faqs", "contact"].includes(e))(n) ? r.a.createElement("div", {
						className: f.a.container
					}, r.a.createElement("div", {
						className: f.a.menuContainer
					}, r.a.createElement(R, {
						className: f.a.menu
					})), r.a.createElement("div", {
						className: f.a.content
					}, O[n])) : (t(Object(F.b)(m("introduction"))), null)
				},
				O = {
					introduction: r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, k._("Introduction", null, {
						hk: "1ERR5f"
					})), r.a.createElement("h2", null, k._("It is time for communities to break free of walled gardens and take ownership of their existence online.", null, {
						hk: "1U7V3v"
					})), r.a.createElement("img", {
						className: f.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/future.png`
					}), r.a.createElement("section", null, r.a.createElement("h3", null, k._("The Future of Online Communities", null, {
						hk: "2l5mV2"
					})), k._("{=Communities are the lifeblood of the Internet. They are the places where magic happens online – where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.}{=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.}{=Today’s online communities are not like this. They are trapped inside apps and platforms, where they do not own or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.}{=It is time for them to take back ownership and control. It is time for a change.}", [k._param("=Communities are the lifeblood of the Internet. They are the places where magic happens online – where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", r.a.createElement("p", null, k._("Communities are the lifeblood of the Internet. They are the places where magic happens online – where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", null, {
						hk: "1t2LGl"
					}))), k._param("=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", r.a.createElement("p", null, k._("But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", null, {
						hk: "l5Wun"
					}))), k._param("=Today’s online communities are not like this. They are trapped inside apps and platforms, where they do not own or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", r.a.createElement("p", null, k._("Today’s online communities are not like this. They are trapped inside apps and platforms, where they do not own or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", null, {
						hk: "2jviIF"
					}))), k._param("=It is time for them to take back ownership and control. It is time for a change.", r.a.createElement("p", null, k._("It is time for them to take back ownership and control. It is time for a change.", null, {
						hk: "4D6N8g"
					})))], {
						hk: "srgI4"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, k._("Community Points", null, {
						hk: "1F2Duo"
					})), k._("{=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.}{=As blockchain tokens that are owned and controlled by communities themselves – not by any app or platform – Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.}{=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.}", [k._param("=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", r.a.createElement("p", null, k._("Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", null, {
						hk: "2aJAlr"
					}))), k._param("=As blockchain tokens that are owned and controlled by communities themselves – not by any app or platform – Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", r.a.createElement("p", null, k._("As blockchain tokens that are owned and controlled by communities themselves – not by any app or platform – Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", null, {
						hk: "34lhhv"
					}))), k._param("=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", r.a.createElement("p", null, k._("Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", null, {
						hk: "AR59j"
					})))], {
						hk: "1DRiQc"
					}))), null),
					"distribution-process": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, g._("Distribution Process", null, {
						hk: "20vYmV"
					})), r.a.createElement("h2", null, g._("Community Points are distributed every 4 weeks based on contributions people make to the community.", null, {
						hk: "126Ahj"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, g._("Who gets Community Points?", null, {
						hk: "1Ed45W"
					})), r.a.createElement("div", {
						className: f.a.sideImageContainer
					}, r.a.createElement("div", null, g._("{=Community Points are distributed across multiple groups. Contributors receive 50% of Community Points.Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.20% of Community Points are set aside in a Community Tank for future purposes.}", [g._param("=Community Points are distributed across multiple groups. Contributors receive 50% of Community Points.Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.20% of Community Points are set aside in a Community Tank for future purposes.", r.a.createElement("p", null, g._("Community Points are distributed across multiple groups. {=Contributors receive 50% of Community Points.Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.20% of Community Points are set aside in a Community Tank for future purposes.}", [g._param("=Contributors receive 50% of Community Points.Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.20% of Community Points are set aside in a Community Tank for future purposes.", r.a.createElement("ul", null, g._("{=Contributors receive 50% of Community Points.}{=Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.}{=20% of Community Points are set aside in a Community Tank for future purposes.}", [g._param("=Contributors receive 50% of Community Points.", r.a.createElement("li", null, g._("Contributors receive 50% of Community Points.", null, {
						hk: "4gKsvI"
					}))), g._param("=Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.", r.a.createElement("li", null, g._("Moderators can receive up to 10% of Community Points. They decide the percentage when Points are launched in their community.", null, {
						hk: "4aoCsr"
					}))), g._param("=20% of Community Points are set aside in a Community Tank for future purposes.", r.a.createElement("li", null, g._("20% of Community Points are set aside in a Community Tank for future purposes.", null, {
						hk: "NQL3C"
					})))], {
						hk: "2W9191"
					})))], {
						hk: "1OIijq"
					})))], {
						hk: "3pxP3U"
					})), r.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/chart.png`
					}))), r.a.createElement("section", null, r.a.createElement("h3", null, g._("How do contributors earn Community Points?", null, {
						hk: "1R03CI"
					})), g._("{=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.}{=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.}{=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.}{=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.}", [g._param("=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", r.a.createElement("p", null, g._("Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", null, {
						hk: "nyK1Z"
					}))), g._param("=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", r.a.createElement("p", null, g._("The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", null, {
						hk: "26h1VY"
					}))), g._param("=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.", r.a.createElement("p", null, g._("Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. See {=Distribution Rules} for more details.", [g._param("=Distribution Rules", r.a.createElement(y.a, {
						to: m("distribution-rules")
					}, g._("Distribution Rules", null, {
						hk: "103XSa"
					})))], {
						hk: "21PV0k"
					}))), g._param("=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", r.a.createElement("p", null, g._("In order for contributors to claim the Points they have earned, they need to create a {=Vault} within the Reddit mobile app. When a user creates their Vault, they will receive the Points that have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", [g._param("=Vault", r.a.createElement(y.a, {
						to: m("vault")
					}, g._("Vault", null, {
						hk: "2vIOZI"
					})))], {
						hk: "1FK3us"
					})))], {
						hk: "33062h"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, g._("How many Community Points are distributed?", null, {
						hk: "2Ov00C"
					})), g._("{=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 100 million Points.}{=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.}{=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.}{=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.}", [g._param("=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 100 million Points.", r.a.createElement("p", null, g._("When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 100 million Points.", null, {
						hk: "q8XFe"
					}))), g._param("=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", r.a.createElement("p", null, g._("This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", null, {
						hk: "3uq5d6"
					}))), g._param("=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", r.a.createElement("p", null, g._("After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", null, {
						hk: "4cbofd"
					}))), g._param("=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", r.a.createElement("p", null, g._("In addition to the creation of new Points described above, 50% of {=burned Points} are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", [g._param("=burned Points", r.a.createElement(y.a, {
						to: m("special-memberships")
					}, g._("burned Points", null, {
						hk: "3yxYzw"
					})))], {
						hk: "1ObWD"
					})))], {
						hk: "2JlPsb"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, g._("What is the process for distribution?", null, {
						hk: "EdIh3"
					})), g._("{=Every four weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.}{=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.}{=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, then distributes Community Points to community members based on those scores.}", [g._param("=Every four weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", r.a.createElement("p", null, g._("Every four weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", null, {
						hk: "1d9sQa"
					}))), g._param("=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", r.a.createElement("p", null, g._("After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", null, {
						hk: "2Brwkp"
					}))), g._param("=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, then distributes Community Points to community members based on those scores.", r.a.createElement("p", null, g._("After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, then distributes Community Points to community members based on those scores.", null, {
						hk: "a4iRJ"
					})))], {
						hk: "1Uil5s"
					}), r.a.createElement("h3", null, g._("How do moderators receive Community Points?", null, {
						hk: "IIhgW"
					})), g._("{=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.}{=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team. In case moderator teams want more sophisticated permissions and controls, there are also other Ethereum-compatible wallets that can be used as the moderator wallet. For example, there are wallets that require multiple people's approval for Points to be transferred.}{=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.}{=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remainder users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that point. The same applies to the reserved Points in the Community Tank.}", [g._param("=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", r.a.createElement("p", null, g._("Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", null, {
						hk: "35Cxiu"
					}))), g._param("=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team. In case moderator teams want more sophisticated permissions and controls, there are also other Ethereum-compatible wallets that can be used as the moderator wallet. For example, there are wallets that require multiple people's approval for Points to be transferred.", r.a.createElement("p", null, g._("The simplest way to set up a moderator wallet is with a Reddit {=Vault} in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team. In case moderator teams want more sophisticated permissions and controls, there are also other Ethereum-compatible wallets that can be used as the moderator wallet. For example, there are wallets that require multiple people's approval for Points to be transferred.", [g._param("=Vault", r.a.createElement(y.a, {
						to: m("vault")
					}, g._("Vault", null, {
						hk: "1QWfc8"
					})))], {
						hk: "3MfUSQ"
					}))), g._param("=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.", r.a.createElement("p", null, g._("Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carry {=governance weight} with them. Points transferred from other addresses will not carry this weight.", [g._param("=governance weight", r.a.createElement(y.a, {
						to: m("reputation-and-governance")
					}, g._("governance weight", null, {
						hk: "1r5QCp"
					})))], {
						hk: "3MpsOm"
					}))), g._param("=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remainder users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that point. The same applies to the reserved Points in the Community Tank.", r.a.createElement("p", null, g._("Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remainder users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that point. The same applies to the reserved Points in the Community Tank.", null, {
						hk: "D8SNw"
					})))], {
						hk: "2wt2V4"
					}))), null),
					"distribution-rules": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, w._("Distribution Rules", null, {
						hk: "3kkkm5"
					})), r.a.createElement("h2", null, w._("Community Points are a powerful tool that subreddits can use to shape content and behavior.", null, {
						hk: "2FFsru"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, w._("Community Rules", null, {
						hk: "2q9cMn"
					})), w._('{=Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.}{=Here is a non-exhaustive list of factors that can be used to shape distribution rules: Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don’t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")}{=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons: Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on “media” or “comedy” postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month}{=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution: Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.}', [w._param("=Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", r.a.createElement("p", null, w._("Communities have a lot of flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", null, {
						hk: "2QQY8o"
					}))), w._param('=Here is a non-exhaustive list of factors that can be used to shape distribution rules: Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don’t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")', r.a.createElement("p", null, w._('Here is a non-exhaustive list of factors that can be used to shape distribution rules: {=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don’t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")}', [w._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don’t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")', r.a.createElement("ul", null, w._('{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")}{=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")}{=Posts vs comments (e.g., "double comment karma")}{=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")}{=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")}{=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")}{=A specific post (e.g., "don’t count karma from the daily discussion")}{=Making a post or comment (e.g., "making a post reduces karma by 25")}{=Membership (e.g., "users with a membership get 25% bonus to karma they earned")}', [w._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', r.a.createElement("li", null, w._('Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', null, {
						hk: "4gMCiE"
					}))), w._param('=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', r.a.createElement("li", null, w._('Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', null, {
						hk: "1quf1R"
					}))), w._param('=Posts vs comments (e.g., "double comment karma")', r.a.createElement("li", null, w._('Posts vs comments (e.g., "double comment karma")', null, {
						hk: "1YmiCF"
					}))), w._param('=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', r.a.createElement("li", null, w._('Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', null, {
						hk: "1ipm5T"
					}))), w._param('=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', r.a.createElement("li", null, w._('Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', null, {
						hk: "n8ACp"
					}))), w._param('=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', r.a.createElement("li", null, w._('Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', null, {
						hk: "ir7jt"
					}))), w._param('=A specific post (e.g., "don’t count karma from the daily discussion")', r.a.createElement("li", null, w._('A specific post (e.g., "don’t count karma from the daily discussion")', null, {
						hk: "3n3oVI"
					}))), w._param('=Making a post or comment (e.g., "making a post reduces karma by 25")', r.a.createElement("li", null, w._('Making a post or comment (e.g., "making a post reduces karma by 25")', null, {
						hk: "1eBJSG"
					}))), w._param('=Membership (e.g., "users with a membership get 25% bonus to karma they earned")', r.a.createElement("li", null, w._('Membership (e.g., "users with a membership get 25% bonus to karma they earned")', null, {
						hk: "1CKFnK"
					})))], {
						hk: "2Cdigk"
					})))], {
						hk: "UgVHq"
					}))), w._param("=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons: Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on “media” or “comedy” postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month", r.a.createElement("p", null, w._("For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons: {=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on “media” or “comedy” postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month}", [w._param("=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on “media” or “comedy” postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month", r.a.createElement("ul", null, w._("{=Double comment karma to encourage more comments than posts}{=Limit karma earned from any individual post or comment to 1000}{=Only count 10% of karma earned on “media” or “comedy” posts}{=Bonus Points for users who vote in polls}{=15000 cap on Points earned by any single user per month}", [w._param("=Double comment karma to encourage more comments than posts", r.a.createElement("li", null, w._("{=Double comment karma to encourage more comments than posts}", [w._param("=Double comment karma to encourage more comments than posts", r.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/k12wnd/moon_proposal_double_comment_karma/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("Double comment karma to encourage more comments than posts", null, {
						hk: "n9u6e"
					})))], {
						hk: "2P3QZ2"
					}))), w._param("=Limit karma earned from any individual post or comment to 1000", r.a.createElement("li", null, w._("{=Limit karma earned from any individual post or comment to 1000}", [w._param("=Limit karma earned from any individual post or comment to 1000", r.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm8she/limit_post_karma_to_1k_and_limit_comment_karma_to/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("Limit karma earned from any individual post or comment to 1000", null, {
						hk: "3CnbIw"
					})))], {
						hk: "in4Jj"
					}))), w._param("=Only count 10% of karma earned on “media” or “comedy” posts", r.a.createElement("li", null, w._("{=Only count 10% of karma earned on “media” or “comedy” posts}", [w._param("=Only count 10% of karma earned on “media” or “comedy” posts", r.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm99v3/change_moon_distribution_for_comedy_posts_and/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("Only count 10% of karma earned on “media” or “comedy” posts", null, {
						hk: "4apihW"
					})))], {
						hk: "4EkNWp"
					}))), w._param("=Bonus Points for users who vote in polls", r.a.createElement("li", null, w._("{=Bonus Points for users who vote in polls}", [w._param("=Bonus Points for users who vote in polls", r.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/m7ehzz/proposal_5_bonus_moons_for_anyone_who_votes_on/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("Bonus Points for users who vote in polls", null, {
						hk: "3wxADK"
					})))], {
						hk: "m8SKS"
					}))), w._param("=15000 cap on Points earned by any single user per month", r.a.createElement("li", null, w._("{=15000 cap on Points earned by any single user per month}", [w._param("=15000 cap on Points earned by any single user per month", r.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/mrn758/15000_karma_cap_on_moon_distribution/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, w._("15000 cap on Points earned by any single user per month", null, {
						hk: "1kPkfc"
					})))], {
						hk: "4AWzOm"
					})))], {
						hk: "9WgLH"
					})))], {
						hk: "kN7aE"
					}))), w._param("=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution: Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", r.a.createElement("p", null, w._("In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution: {=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.}", [w._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", r.a.createElement("ul", null, w._("{=Karma earned on removed posts and comments does not count (including karma earned before removal)}{=Karma earned on stickied or distinguished content does not count}{=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.}", [w._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)", r.a.createElement("li", null, w._("Karma earned on removed posts and comments does not count (including karma earned before removal)", null, {
						hk: "3is4dj"
					}))), w._param("=Karma earned on stickied or distinguished content does not count", r.a.createElement("li", null, w._("Karma earned on stickied or distinguished content does not count", null, {
						hk: "l1Ifk"
					}))), w._param("=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", r.a.createElement("li", null, w._("Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", null, {
						hk: "43VP9s"
					})))], {
						hk: "xmF5D"
					})))], {
						hk: "2SeqPE"
					})))], {
						hk: "4tUZ2p"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, w._("Deciding Community Rules", null, {
						hk: "2BDpM6"
					})), w._("{=Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls .}{=Currently, distribution rules are implemented by Reddit according to the description provided by the community. For that reason, it is important that rules be described accurately and in clear detail to be implemented properly. In the future, we plan to build a tool for moderators and communities to see and set their own distribution rules, without requiring Reddit to implement each one.}", [w._param("=Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls .", r.a.createElement("p", null, w._("Moderator teams can design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules through {=Governance Polls} .", [w._param("=Governance Polls", r.a.createElement(y.a, {
						to: m("reputation-and-governance")
					}, w._("Governance Polls", null, {
						hk: "2h4x8M"
					})))], {
						hk: "3Vh5XT"
					}))), w._param("=Currently, distribution rules are implemented by Reddit according to the description provided by the community. For that reason, it is important that rules be described accurately and in clear detail to be implemented properly. In the future, we plan to build a tool for moderators and communities to see and set their own distribution rules, without requiring Reddit to implement each one.", r.a.createElement("p", null, w._("Currently, distribution rules are implemented by Reddit according to the description provided by the community. For that reason, it is important that rules be described accurately and in clear detail to be implemented properly. In the future, we plan to build a tool for moderators and communities to see and set their own distribution rules, without requiring Reddit to implement each one.", null, {
						hk: "13fszB"
					})))], {
						hk: "4oMDPm"
					}))), null),
					"spam-and-abuse": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("img", {
						className: f.a.smallTitleImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/spam.png`
					}), r.a.createElement("h1", null, M._("Spam & Abuse", null, {
						hk: "1qZ0Kk"
					})), r.a.createElement("h2", null, M._("Community Points give communities smarter ways to fight spam and other abuse by punishing detrimental behavior.", null, {
						hk: "3lfcQE"
					})), M._("{=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.}{=Example rules that can be created include: Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}{=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.}{=As always, Reddit’s site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.}", [M._param("=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", r.a.createElement("p", null, M._("As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", null, {
						hk: "1VVw52"
					}))), M._param("=Example rules that can be created include: Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", r.a.createElement("p", null, M._("Example rules that can be created include: {=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}", [M._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", r.a.createElement("ul", null, M._("{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.}{=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.}{=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.}{=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}", [M._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", r.a.createElement("li", null, M._("Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", null, {
						hk: "srRzu"
					}))), M._param("=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", r.a.createElement("li", null, M._("Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", null, {
						hk: "yM1cI"
					}))), M._param("=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", r.a.createElement("li", null, M._("Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", null, {
						hk: "2YmSHt"
					}))), M._param("=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", r.a.createElement("li", null, M._("When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", null, {
						hk: "4f8Ov4"
					})))], {
						hk: "TNkxs"
					})))], {
						hk: "4CWfhD"
					}))), M._param("=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", r.a.createElement("p", null, M._("The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", null, {
						hk: "3U3Plz"
					}))), M._param("=As always, Reddit’s site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", r.a.createElement("p", null, M._("As always, Reddit’s site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", null, {
						hk: "3ikwes"
					})))], {
						hk: "rLlmf"
					})), null),
					"reputation-and-governance": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, A._("Reputation & Governance", null, {
						hk: "3VDDzY"
					})), r.a.createElement("h2", null, A._("Community Points represent a visible measure of reputation and enable a new type of weighted poll that can be used to make community decisions.", null, {
						hk: "Xc3Ow"
					})), A._("{=Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on the community.}", [A._param("=Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on the community.", r.a.createElement("p", null, A._("Community Points represent how much someone has contributed to the community and their stake in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on the community.", null, {
						hk: "4gxRNI"
					})))], {
						hk: "lSGWL"
					}), r.a.createElement("section", null, r.a.createElement("h3", null, A._("Reputation", null, {
						hk: "2sh0G9"
					})), A._("{=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.}", [A._param("=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", r.a.createElement("p", null, A._("In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", null, {
						hk: "1zRy9m"
					})))], {
						hk: "2M3ArP"
					}), r.a.createElement("img", {
						className: f.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/reputation.png`
					}), A._("{=Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.}", [A._param("=Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", r.a.createElement("p", null, A._("Because Community Points are on a public blockchain, this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", null, {
						hk: "1awSM9"
					})))], {
						hk: "EKs9F"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, A._("Weighted Polls", null, {
						hk: "4uCujA"
					})), A._("{=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.}{=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user’s Points). This allows the community to see what people think according to the contribution they have provided.}{=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.}", [A._param("=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", r.a.createElement("p", null, A._("People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", null, {
						hk: "29kokx"
					}))), A._param("=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user’s Points). This allows the community to see what people think according to the contribution they have provided.", r.a.createElement("p", null, A._("To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user’s Points). This allows the community to see what people think according to the contribution they have provided.", null, {
						hk: "4jsAsa"
					}))), A._param("=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.", r.a.createElement("p", null, A._("When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through transfers or other means.", null, {
						hk: "3vZIBV"
					})))], {
						hk: "155M1Z"
					}), r.a.createElement("img", {
						className: f.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/poll.png`
					}), A._("{=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but transferred away 500 of them, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of transfers and tips, their vote weight is still only 200.}{=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.}{=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.}", [A._param("=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but transferred away 500 of them, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of transfers and tips, their vote weight is still only 200.", r.a.createElement("p", null, A._("Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but transferred away 500 of them, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of transfers and tips, their vote weight is still only 200.", null, {
						hk: "1W6GTo"
					}))), A._param("=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.", r.a.createElement("p", null, A._("Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then transferring their Points for someone else to vote with.", null, {
						hk: "7VYDi"
					}))), A._param("=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", r.a.createElement("p", null, A._("Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", null, {
						hk: "3K3SGw"
					})))], {
						hk: "35gA2n"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, A._("Community Governance", null, {
						hk: "440sui"
					})), A._("{=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.}{=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.}{=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.}{=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for the other rules.}", [A._param("=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", r.a.createElement("p", null, A._("Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", null, {
						hk: "3vavXK"
					}))), A._param("=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", r.a.createElement("p", null, A._("Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", null, {
						hk: "2CI9iA"
					}))), A._param("=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", r.a.createElement("p", null, A._("The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", null, {
						hk: "1rDsLo"
					}))), A._param("=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for the other rules.", r.a.createElement("p", null, A._("Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for the other rules.", null, {
						hk: "1rYJrp"
					})))], {
						hk: "4FpEHO"
					}))), null),
					"special-memberships": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, N._("Special Memberships", null, {
						hk: "FgGID"
					})), r.a.createElement("h2", null, N._("Special Memberships let users show off their support to the community. Getting a Special Membership unlocks badges and other premium features in the community.", null, {
						hk: "4EV8yH"
					})), N._("{=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features: Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis custom to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.}{=To see more details, check theSubreddit Membership page for r/CryptoCurrency.}", [N._param("=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features: Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis custom to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.", r.a.createElement("p", null, N._("Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features: {=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis custom to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.}", [N._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis custom to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.", r.a.createElement("ul", null, N._("{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.}{=Animated emojis: Express yourself in a way that words can't, with emojis custom to that subreddit.}{=GIFs: Embed GIFs directly on Reddit, inside your comments.}", [N._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.", r.a.createElement("li", null, N._("{=Badges}: Personalize your presence on the subreddit and add a highlighted color to your username.", [N._param("=Badges", r.a.createElement("b", null, N._("Badges", null, {
						hk: "3pp79T"
					})))], {
						hk: "UxAaA"
					}))), N._param("=Animated emojis: Express yourself in a way that words can't, with emojis custom to that subreddit.", r.a.createElement("li", null, N._("{=Animated emojis}: Express yourself in a way that words can't, with emojis custom to that subreddit.", [N._param("=Animated emojis", r.a.createElement("b", null, N._("Animated emojis", null, {
						hk: "tycBE"
					})))], {
						hk: "1A3waY"
					}))), N._param("=GIFs: Embed GIFs directly on Reddit, inside your comments.", r.a.createElement("li", null, N._("{=GIFs}: Embed GIFs directly on Reddit, inside your comments.", [N._param("=GIFs", r.a.createElement("b", null, N._("GIFs", null, {
						hk: "3eykCt"
					})))], {
						hk: "4tTc7J"
					})))], {
						hk: "3CVivQ"
					})))], {
						hk: "2YDZuw"
					}))), N._param("=To see more details, check theSubreddit Membership page for r/CryptoCurrency.", r.a.createElement("p", null, N._("To see more details, check the {=Subreddit Membership} page for r/CryptoCurrency.", [N._param("=Subreddit Membership", r.a.createElement("a", {
						href: "/web/special-membership/cryptocurrency",
						target: "_blank",
						rel: "noopener noreferrer"
					}, N._("Subreddit Membership", null, {
						hk: "2AncMd"
					})))], {
						hk: "Y9n7X"
					})))], {
						hk: "ttkBX"
					}), r.a.createElement("section", null, r.a.createElement("h3", null, N._("Badges & Emojis", null, {
						hk: "nhw27"
					})), r.a.createElement("div", {
						className: f.a.sideImageContainer
					}, r.a.createElement("div", null, N._('{=There are multiple badges that Special Members can display next to their username. Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}{=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for that community. After Community Points are launched, creators in the community can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.}', [N._param('=There are multiple badges that Special Members can display next to their username. Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.', r.a.createElement("p", null, N._('There are multiple badges that Special Members can display next to their username. {=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}', [N._param('=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.', r.a.createElement("ul", null, N._('{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.}{=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).}{=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}', [N._param("=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.", r.a.createElement("li", null, N._("{=Loyalty Badge}: The first badge represents how long the user has been supporting the subreddit as a paying member.", [N._param("=Loyalty Badge", r.a.createElement("b", null, N._("Loyalty Badge", null, {
						hk: "13zQio"
					})))], {
						hk: "nKOgI"
					}))), N._param('=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', r.a.createElement("li", null, N._('{=Achievement Badge}: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', [N._param("=Achievement Badge", r.a.createElement("b", null, N._("Achievement Badge", null, {
						hk: "LwhqS"
					})))], {
						hk: "78LF0"
					}))), N._param("=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", r.a.createElement("li", null, N._("{=Style Badge}: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", [N._param("=Style Badge", r.a.createElement("b", null, N._("Style Badge", null, {
						hk: "3hTgLO"
					})))], {
						hk: "3XPju"
					})))], {
						hk: "xRhLO"
					})))], {
						hk: "30p8Ls"
					}))), N._param("=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for that community. After Community Points are launched, creators in the community can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", r.a.createElement("p", null, N._("For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for that community. After Community Points are launched, creators in the community can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", null, {
						hk: "1NOHGk"
					})))], {
						hk: "16dEjS"
					})), r.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/badges.png`
					}))), r.a.createElement("section", null, r.a.createElement("h3", null, N._("Special Membership Price & Other Ways to Buy", null, {
						hk: "3gOExN"
					})), r.a.createElement("img", {
						className: f.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/membership_price.png`
					}), N._("{=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll .}{=In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, an equivalent amount of Community Points are burned from theCommunity Tank .}", [N._param("=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll .", r.a.createElement("p", null, N._("The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using a {=Governance Poll} .", [N._param("=Governance Poll", r.a.createElement(y.a, {
						to: m("reputation-and-governance")
					}, N._("Governance Poll", null, {
						hk: "4zRMxJ"
					})))], {
						hk: "3nqNvj"
					}))), N._param("=In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, an equivalent amount of Community Points are burned from theCommunity Tank .", r.a.createElement("p", null, N._("In addition to using Community Points, people can also purchase Special Memberships for $5/month. They can do this using Paypal on web (new Reddit) or In-App Purchase on the iOS app. When memberships are purchased with dollars, an equivalent amount of Community Points are burned from the {=Community Tank} .", [N._param("=Community Tank", r.a.createElement(y.a, {
						to: m("distribution-process")
					}, N._("Community Tank", null, {
						hk: "1eXryX"
					})))], {
						hk: "35VudI"
					})))], {
						hk: "3dC1No"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, N._("Canceling Special Memberships", null, {
						hk: "zyegE"
					})), N._("{=It depends on how you bought your membership: If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [N._param("=It depends on how you bought your membership: If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.", r.a.createElement("p", null, N._("It depends on how you bought your membership: {=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [N._param("=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.", r.a.createElement("ul", null, N._("{=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/special}{=If you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.}{=If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.}{=If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [N._param("=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/special", r.a.createElement("li", null, N._("If you purchased your subscription on reddit.com, you can cancel by going to {=https://www.reddit.com/settings/special}.", [N._param("=https://www.reddit.com/settings/special", r.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, N._("https://www.reddit.com/settings/special", null, {
						hk: "41aFGi"
					})))], {
						hk: "2EBbfp"
					}))), N._param("=If you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.", r.a.createElement("li", null, N._("If you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.", null, {
						hk: "46BmxM"
					}))), N._param("=If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.", r.a.createElement("li", null, N._("If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.", null, {
						hk: "WQSb6"
					}))), N._param("=If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.", r.a.createElement("li", null, N._("If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device’s Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "32g1xW"
					})))], {
						hk: "3Fg86q"
					})))], {
						hk: "2rgcOn"
					})))], {
						hk: "1UShrl"
					}))), null),
					"coins-and-awards": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, h._("Coins & Awards", null, {
						hk: "4APvg2"
					})), r.a.createElement("h2", null, h._("Community Points can be used to give awards in the community.", null, {
						hk: "3Ey9Li"
					})), h._("{=Coins are Reddit’s sitewide virtual currency used to give awards like Gold and Platinum.}{=Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.}{=Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.}", [h._param("=Coins are Reddit’s sitewide virtual currency used to give awards like Gold and Platinum.", r.a.createElement("p", null, h._("{=Coins} are Reddit’s sitewide virtual currency used to give awards like Gold and Platinum.", [h._param("=Coins", r.a.createElement("a", {
						href: "/coins",
						target: "_blank",
						rel: "noopener noreferrer"
					}, h._("Coins", null, {
						hk: "2r536M"
					})))], {
						hk: "42o65N"
					}))), h._param("=Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.", r.a.createElement("p", null, h._("Community Points can be used to purchase subreddit-specific Coins. These Coins are locked to the subreddit where they were purchased, which means they must be used to give awards in the particular community.", null, {
						hk: "2zZXR1"
					}))), h._param("=Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.", r.a.createElement("p", null, h._("Subreddit-specific Coins can be purchased from the web through the Community Points widget in the subreddit sidebar, or on mobile through the Reddit Coins section in the app menu.", null, {
						hk: "3SIqn7"
					})))], {
						hk: "4xG099"
					})), null),
					"redeeming-points": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, V._("Redeeming Points", null, {
						hk: "RP9Na"
					})), r.a.createElement("h2", null, V._("When Community Points are redeemed by spending them on premium features, they are destroyed and removed from circulation. This reduces the overall supply of Points and makes everyone else’s slice of Points larger, thus rewarding the entire community.", null, {
						hk: "4w1tDy"
					})), V._("{=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.}{=When people buy premium features with dollars, for exampleSpecial Memberships , an equivalent amount of Points are burned from theCommunity Tank on behalf of that user.}{=Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See theDevelopers section for more information.}", [V._param("=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", r.a.createElement("p", null, V._("Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", null, {
						hk: "BWiBE"
					}))), V._param("=When people buy premium features with dollars, for exampleSpecial Memberships , an equivalent amount of Points are burned from theCommunity Tank on behalf of that user.", r.a.createElement("p", null, V._("When people buy premium features with dollars, for example {=Special Memberships} , an equivalent amount of Points are burned from the {=Community Tank} on behalf of that user.", [V._param("=Special Memberships", r.a.createElement(y.a, {
						to: m("special-memberships")
					}, V._("Special Memberships", null, {
						hk: "31iWob"
					}))), V._param("=Community Tank", r.a.createElement(y.a, {
						to: m("distribution-process")
					}, V._("Community Tank", null, {
						hk: "j9PQM"
					})))], {
						hk: "3bwl0u"
					}))), V._param("=Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See theDevelopers section for more information.", r.a.createElement("p", null, V._("Communities can also build their own use cases for redeeming Points, which can provide Points more utility and value. See the {=Developers} section for more information.", [V._param("=Developers", r.a.createElement(y.a, {
						to: m("developers")
					}, V._("Developers", null, {
						hk: "3t06qz"
					})))], {
						hk: "3XHo1t"
					})))], {
						hk: "3dncAL"
					})), null),
					"tipping-and-transfers": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, B._("Tipping & Transfers", null, {
						hk: "pryAl"
					})), r.a.createElement("h2", null, B._("Community Points can be gifted, tipped, and transferred between users.", null, {
						hk: "27N2yK"
					})), B._("{=If someone makes a great post or comment, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.}", [B._param("=If someone makes a great post or comment, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", r.a.createElement("p", null, B._("If someone makes a great post or comment, you can tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", null, {
						hk: "2toz5m"
					})))], {
						hk: "2vpqkG"
					}), r.a.createElement("img", {
						className: f.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/user_card.png`
					}), B._("{=Community Points can also be transferred to other Redditors who have created a Vault, or to any Ethereum blockchain address.}", [B._param("=Community Points can also be transferred to other Redditors who have created a Vault, or to any Ethereum blockchain address.", r.a.createElement("p", null, B._("Community Points can also be transferred to other Redditors who have created a {=Vault}, or to any Ethereum blockchain address.", [B._param("=Vault", r.a.createElement(y.a, {
						to: m("vault")
					}, B._("Vault", null, {
						hk: "4dfK3w"
					})))], {
						hk: "3qE4Kd"
					})))], {
						hk: "2COJJ5"
					}), r.a.createElement("img", {
						className: f.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/tip.png`
					})), null),
					"points-and-automoderator": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, S._("Points & Automoderator", null, {
						hk: "4qE8Kd"
					})), r.a.createElement("h2", null, S._("Community Points can be used in conjunction with Automoderator to create rules based on users’ Points balances and Special Membership status.", null, {
						hk: "1kuSZC"
					})), r.a.createElement("p", null, S._("Subreddits can use Community Points information in their Automod rules. Specifically, they can use the following rules:", null, {
						hk: "2m6VU8"
					})), r.a.createElement("pre", null, r.a.createElement("code", null, "---\nauthor: has_special_membership: true | false\nspecial_membership_age: > 1 day points_balance: > 10000000000000 # in wei\nlocked_points_balance: > 10000000000000 # in wei\n---")), r.a.createElement("p", null, S._("Locked points is the total number of Points the user has directly earned in the community to date.", null, {
						hk: "3B9CVv"
					})), r.a.createElement("h3", null, S._("Examples", null, {
						hk: "33UWVC"
					})), r.a.createElement("p", null, S._("Restrict commenting on a Core Contributors Discussion Thread only to Points holders.", null, {
						hk: "3r0Bj3"
					})), r.a.createElement("pre", null, r.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: comment\naction: remove\n---\nauthor: automod\ntitle (starts-with): Core Contributors Discussion Thread\nset_flair: Discussion\n---")), r.a.createElement("p", null, S._("Put submissions from users with 0 balance into the mod queue.", null, {
						hk: "36MzYX"
					})), r.a.createElement("pre", null, r.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: submission\naction: filter\nmessage_subject: Pending Approval\nmessage: Our apologies, but in order to limit spam your submission has been automatically removed and is pending moderator approval.\nmodmail_subject: Post From Young Account\nmodmail: /u/{{author}}'s [{{kind}}]({{permalink}}) is pending moderator approval. Please visit the moderation queue to review the post.\n---")), r.a.createElement("p", null, S._("Thank Special Members for supporting the Community.", null, {
						hk: "1n4uhp"
					})), r.a.createElement("pre", null, r.a.createElement("code", null, "---\nauthor:\n    has_special_membership: true\ntype: submission\ncomment_stickied: true\ncomment_locked: true\ncomment: {{author}}, thank you for supporting the community!\n---"))), null),
					vault: r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, j._("Vault", null, {
						hk: "JRmsq"
					})), r.a.createElement("h2", null, j._("The Vault is an embedded crypto wallet in the Reddit app and the home for Community Points.", null, {
						hk: "u3o8z"
					})), j._("{=Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app. Advanced users can use other Ethereum-compatible wallets if they wish, but using the Reddit Vault is recommended for a better, more streamlined experience.}{=In your Vault, you can view Community Points from multiple subreddits, send them to other users, and spend them on things like Special Memberships.}{=The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).}", [j._param("=Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app. Advanced users can use other Ethereum-compatible wallets if they wish, but using the Reddit Vault is recommended for a better, more streamlined experience.", r.a.createElement("p", null, j._("Reddit Vault is a crypto wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app. Advanced users can use other Ethereum-compatible wallets if they wish, but using the Reddit Vault is recommended for a better, more streamlined experience.", null, {
						hk: "mz113"
					}))), j._param("=In your Vault, you can view Community Points from multiple subreddits, send them to other users, and spend them on things like Special Memberships.", r.a.createElement("p", null, j._("In your Vault, you can view Community Points from multiple subreddits, send them to other users, and spend them on things like Special Memberships.", null, {
						hk: "OfdP4"
					}))), j._param("=The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", r.a.createElement("p", null, j._("The Vault corresponds to a public Ethereum address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", null, {
						hk: "131qaF"
					})))], {
						hk: "3zXKGb"
					}), r.a.createElement("section", null, r.a.createElement("h3", null, j._("Create a Vault", null, {
						hk: "1h3rBm"
					})), j._("{=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.}{=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your ownership of and rights to your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.}{=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it’s very important to make sure it is stored securely and properly backed up.}", [j._param("=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", r.a.createElement("p", null, j._("Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", null, {
						hk: "1viLOB"
					}))), j._param("=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your ownership of and rights to your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.", r.a.createElement("p", null, j._("When you create your Vault, you will receive a public address and a private key. The public address is your address on the Ethereum blockchain where the record of your ownership of and rights to your Community Points is stored. The private key is the only way to access and use the Community Points in your Vault.", null, {
						hk: "zXGeA"
					}))), j._param("=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it’s very important to make sure it is stored securely and properly backed up.", r.a.createElement("p", null, j._("This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it’s very important to make sure it is stored securely and properly backed up.", null, {
						hk: "2QKaw2"
					})))], {
						hk: "2j0PTQ"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, j._("Backup & Recovery", null, {
						hk: "4f33gk"
					})), j._("{=You have two options to back up your private key.}{=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.}{=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe - we recommend using a password manager like LastPass.}{=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them. You can use your Recovery Phrase with other wallet software, but make sure it is software that you can trust.}{=There are two corresponding ways to recover your Vault.}{=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.}{=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.}{=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized . Every time you create or recover a Vault, it is immediately set as your active Vault.}", [j._param("=You have two options to back up your private key.", r.a.createElement("p", null, j._("You have two options to back up your private key.", null, {
						hk: "4rpj8U"
					}))), j._param("=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", r.a.createElement("p", null, j._("The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", null, {
						hk: "2pt9ez"
					}))), j._param("=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe - we recommend using a password manager like LastPass.", r.a.createElement("p", null, j._("The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault or in other wallets. Keep this safe - we recommend using a password manager like LastPass.", null, {
						hk: "3CpgL7"
					}))), j._param("=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them. You can use your Recovery Phrase with other wallet software, but make sure it is software that you can trust.", r.a.createElement("p", null, j._("It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them. You can use your Recovery Phrase with other wallet software, but make sure it is software that you can trust.", null, {
						hk: "3P47cI"
					}))), j._param("=There are two corresponding ways to recover your Vault.", r.a.createElement("p", null, j._("There are two corresponding ways to recover your Vault.", null, {
						hk: "19nNpy"
					}))), j._param("=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", r.a.createElement("p", null, j._("You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", null, {
						hk: "2sFyxL"
					}))), j._param("=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", r.a.createElement("p", null, j._("You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", null, {
						hk: "crmKN"
					}))), j._param("=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized . Every time you create or recover a Vault, it is immediately set as your active Vault.", r.a.createElement("p", null, j._("Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is {=finalized} . Every time you create or recover a Vault, it is immediately set as your active Vault.", [j._param("=finalized", r.a.createElement(y.a, {
						to: m("distribution-process")
					}, j._("finalized", null, {
						hk: "2Qv9uh"
					})))], {
						hk: "1DkwBT"
					})))], {
						hk: "4k1eYP"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, j._("Using Vault on web", null, {
						hk: "4lZpy1"
					})), j._("{=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.}{=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.}{=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.}", [j._param("=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", r.a.createElement("p", null, j._("Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", null, {
						hk: "3Q0UIE"
					}))), j._param("=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", r.a.createElement("p", null, j._("When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", null, {
						hk: "1dq5v2"
					}))), j._param("=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", r.a.createElement("p", null, j._("If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", null, {
						hk: "1tITN"
					})))], {
						hk: "1xjedp"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, j._("Transferring Vault to other wallets", null, {
						hk: "1cCivh"
					})), j._("{=Your private key can be imported into other wallets and your Community Points used from there. You can do this with your Recovery Phrase.}{=You can always find the Recovery Phrase in your Vault settings page. Follow the instructions in the other wallet to import your phrase there. Make sure it is a wallet you trust – never give your seed phrase to anyone you don’t trust.}{=In order to interact with your Points from a third-party wallet, you will need to point it to the network where Points live. Enter the following information to add the network to your wallet. Network Name: Arbitrum Reddit TestnetRPC URL:https://testnet.redditspace.com/rpcChain ID: 5391184}{=After adding the network, you can add your community’s Points by the token contract address. r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F}", [j._param("=Your private key can be imported into other wallets and your Community Points used from there. You can do this with your Recovery Phrase.", r.a.createElement("p", null, j._("Your private key can be imported into other wallets and your Community Points used from there. You can do this with your Recovery Phrase.", null, {
						hk: "1jRbcB"
					}))), j._param("=You can always find the Recovery Phrase in your Vault settings page. Follow the instructions in the other wallet to import your phrase there. Make sure it is a wallet you trust – never give your seed phrase to anyone you don’t trust.", r.a.createElement("p", null, j._("You can always find the Recovery Phrase in your Vault settings page. Follow the instructions in the other wallet to import your phrase there. Make sure it is a wallet you trust – never give your seed phrase to anyone you don’t trust.", null, {
						hk: "3Mq08e"
					}))), j._param("=In order to interact with your Points from a third-party wallet, you will need to point it to the network where Points live. Enter the following information to add the network to your wallet. Network Name: Arbitrum Reddit TestnetRPC URL:https://testnet.redditspace.com/rpcChain ID: 5391184", r.a.createElement("p", null, j._("In order to interact with your Points from a third-party wallet, you will need to point it to the network where Points live. Enter the following information to add the network to your wallet. {=Network Name: Arbitrum Reddit TestnetRPC URL:https://testnet.redditspace.com/rpcChain ID: 5391184}", [j._param("=Network Name: Arbitrum Reddit TestnetRPC URL:https://testnet.redditspace.com/rpcChain ID: 5391184", r.a.createElement("ul", null, j._("{=Network Name: Arbitrum Reddit Testnet}{=RPC URL:https://testnet.redditspace.com/rpc}{=Chain ID: 5391184}", [j._param("=Network Name: Arbitrum Reddit Testnet", r.a.createElement("li", null, j._("Network Name: Arbitrum Reddit Testnet", null, {
						hk: "3Zw2pB"
					}))), j._param("=RPC URL:https://testnet.redditspace.com/rpc", r.a.createElement("li", null, j._("RPC URL: {=https://testnet.redditspace.com/rpc}", [j._param("=https://testnet.redditspace.com/rpc", r.a.createElement("a", {
						href: "https://testnet.redditspace.com/rpc",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("https://testnet.redditspace.com/rpc", null, {
						hk: "3axsjk"
					})))], {
						hk: "1bphHB"
					}))), j._param("=Chain ID: 5391184", r.a.createElement("li", null, j._("Chain ID: 5391184", null, {
						hk: "1N3DrD"
					})))], {
						hk: "3HU4BT"
					})))], {
						hk: "27gBD2"
					}))), j._param("=After adding the network, you can add your community’s Points by the token contract address. r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F", r.a.createElement("p", null, j._("After adding the network, you can add your community’s Points by the token contract address. {=r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F}", [j._param("=r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F", r.a.createElement("ul", null, j._("{=r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728}{=r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F}", [j._param("=r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728", r.a.createElement("li", null, j._("r/CryptoCurrency Moons: 0x138fAFa28a05A38f4d2658b12b0971221A7d5728", null, {
						hk: "2stXIq"
					}))), j._param("=r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F", r.a.createElement("li", null, j._("r/FortNiteBR Bricks: 0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F", null, {
						hk: "D2Fvy"
					})))], {
						hk: "2xkmbH"
					})))], {
						hk: "39VLmZ"
					})))], {
						hk: "2uTKZt"
					}))), null),
					"points-on-the-blockchain": r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, x._("Points on the Blockchain", null, {
						hk: "2Fk8CU"
					})), r.a.createElement("h2", null, x._("What makes Community Points unique is that they live on a public blockchain. People truly own and control their Points and can take them anywhere they want on the Internet.", null, {
						hk: "1VwYFL"
					})), r.a.createElement("p", null, x._("Community Points currently exist on a testnet version of the Ethereum blockchain, which uses similar technology to Bitcoin to guarantee that ownership and control rests with the people who own them.", null, {
						hk: "33s9vu"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, x._("How does the blockchain work?", null, {
						hk: "2Ctp6v"
					})), x._("{=The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.}{=The blockchain that Community Points live on isEthereums Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.}{=Under the hood, an individual user’s Points belong to a specific address on Ethereum. This address is created when they set up theirVault, and the address (along with everything it has in it) can only be controlled by them.}", [x._param("=The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.", r.a.createElement("p", null, x._("The blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes the blockchain unique is that it is not owned or controlled by any single entity. Instead, it is maintained by a network of participants who coordinate together.", null, {
						hk: "187o7h"
					}))), x._param("=The blockchain that Community Points live on isEthereums Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", r.a.createElement("p", null, x._("The blockchain that Community Points live on is {=Ethereum}'s Rinkeby testnet. This is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", [x._param("=Ethereum", r.a.createElement("a", {
						href: "https://ethereum.org/en/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, x._("Ethereum", null, {
						hk: "2PlIPX"
					})))], {
						hk: "pAgQe"
					}))), x._param("=Under the hood, an individual user’s Points belong to a specific address on Ethereum. This address is created when they set up theirVault, and the address (along with everything it has in it) can only be controlled by them.", r.a.createElement("p", null, x._("Under the hood, an individual user’s Points belong to a specific address on Ethereum. This address is created when they set up their {=Vault}, and the address (along with everything it has in it) can only be controlled by them.", [x._param("=Vault", r.a.createElement(y.a, {
						to: m("vault")
					}, x._("Vault", null, {
						hk: "DDn8f"
					})))], {
						hk: "Jhs1K"
					})))], {
						hk: "3ODnzE"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, x._("What are the benefits of the blockchain?", null, {
						hk: "1bEK24"
					})), x._("{=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits: Real Ownership. Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.}", [x._param("=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits: Real Ownership. Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.", r.a.createElement("p", null, x._("Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits: {=Real Ownership. Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.}", [x._param("=Real Ownership. Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.", r.a.createElement("ul", null, x._("{=Real Ownership. Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.}{=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.}{=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.}", [x._param("=Real Ownership. Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.", r.a.createElement("li", null, x._("{=Real Ownership.} Things on the blockchain can only be controlled by the user who owns them. Since no one is in charge of the blockchain, there is no powerful centralized entity that can lock users out or take their Points.", [x._param("=Real Ownership.", r.a.createElement("b", null, x._("Real Ownership.", null, {
						hk: "1lDsOv"
					})))], {
						hk: "4DpizH"
					}))), x._param("=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.", r.a.createElement("li", null, x._("{=Openness & Portability.} The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can easily take their Points off of Reddit and use it with other apps – without needing Reddit’s permission.", [x._param("=Openness & Portability.", r.a.createElement("b", null, x._("Openness & Portability.", null, {
						hk: "2ISLjI"
					})))], {
						hk: "1BSazj"
					}))), x._param("=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.", r.a.createElement("li", null, x._("{=Transparency.} The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company’s systems.", [x._param("=Transparency.", r.a.createElement("b", null, x._("Transparency.", null, {
						hk: "38mhbs"
					})))], {
						hk: "28lvn0"
					})))], {
						hk: "4AuIZ5"
					})))], {
						hk: "ZxRS"
					})))], {
						hk: "1sfsG9"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, x._("What is gas, and who’s paying for it?", null, {
						hk: "42C6x9"
					})), x._("{=Transactions on the Ethereum network cost “gas”, which are micro amounts of Ethereum’s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network. (This only applies when using Reddit Vault to access Community Points. Using other Ethereum wallets may require users to pay for gas costs themselves). We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.}", [x._param("=Transactions on the Ethereum network cost “gas”, which are micro amounts of Ethereum’s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network. (This only applies when using Reddit Vault to access Community Points. Using other Ethereum wallets may require users to pay for gas costs themselves). We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.", r.a.createElement("p", null, x._("Transactions on the Ethereum network cost “gas”, which are micro amounts of Ethereum’s native cryptocurrency (Ether). Since most Redditors do not have Ether already, Reddit will cover their cost of gas for now, through meta-transactions and the Gas Station Network. (This only applies when using Reddit Vault to access Community Points. Using other Ethereum wallets may require users to pay for gas costs themselves). We plan to adopt better scaling and gas solutions in the future that will greatly reduce the amount of gas needed.", null, {
						hk: "2jE0xG"
					})))], {
						hk: "XJQYP"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, x._("Which Ethereum network is this using?", null, {
						hk: "1vDpUR"
					})), x._("{=Community Points are currently on a testnet version of the Ethereum blockchain, and we are working to bring them to the mainnet version of the Ethereum blockchain. A testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit’sPreviews Terms of ServiceThis kind of behavior is very risky while Points are on a testnet – Points can be lost or they may not be migrated over to the main Ethereum network.}", [x._param("=Community Points are currently on a testnet version of the Ethereum blockchain, and we are working to bring them to the mainnet version of the Ethereum blockchain. A testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit’sPreviews Terms of ServiceThis kind of behavior is very risky while Points are on a testnet – Points can be lost or they may not be migrated over to the main Ethereum network.", r.a.createElement("p", null, x._("Community Points are currently on a testnet version of the Ethereum blockchain, and we are working to bring them to the mainnet version of the Ethereum blockchain. A testnet does not provide the same security guarantees as the main Ethereum network, and users are strongly advised to exercise caution while Points are in beta. For example, exchanging, selling, or trading Points are against Reddit’s {=Previews Terms of Service}. This kind of behavior is very risky while Points are on a testnet – Points can be lost or they may not be migrated over to the main Ethereum network.", [x._param("=Previews Terms of Service", r.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank",
						rel: "noopener noreferrer"
					}, x._("Previews Terms of Service", null, {
						hk: "5CLnU"
					})))], {
						hk: "1wr4a"
					})))], {
						hk: "1k4uGv"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, x._("What is the scaling problem and how does it impact plans for mainnet?", null, {
						hk: "48T8Tr"
					})), x._("{=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.}{=To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We havepartnered with the Ethereum Foundation in these efforts.}{=In 2020, we issued acall to the crypto community to present their best scaling options for Community Points. In 2021, we launched a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.}", [x._param("=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.", r.a.createElement("p", null, x._("Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Putting all Reddit users on the blockchain, for example, would currently be infeasible and prohibitively expensive.", null, {
						hk: "33CyaZ"
					}))), x._param("=To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We havepartnered with the Ethereum Foundation in these efforts.", r.a.createElement("p", null, x._("To solve this problem, and to be able to launch Community Points on mainnet, Reddit is actively working on developing a scaling solution that can increase the bandwidth and capacity of blockchain applications like Community Points, without sacrificing the unique properties and guarantees that a decentralized blockchain provides. We have {=partnered} with the Ethereum Foundation in these efforts.", [x._param("=partnered", r.a.createElement("a", {
						href: "/r/ethereum/comments/l6c3kx/reddit_announces_partnership_with_the_ethereum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, x._("partnered", null, {
						hk: "3RaXQ7"
					})))], {
						hk: "2Y2npj"
					}))), x._param("=In 2020, we issued acall to the crypto community to present their best scaling options for Community Points. In 2021, we launched a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.", r.a.createElement("p", null, x._("In 2020, we issued a {=call to the crypto community} to present their best scaling options for Community Points. In 2021, we {=launched} a layer-2 scaling network using Arbitrum optimistic rollups technology. Further work to scale Community Points is ongoing.", [x._param("=call to the crypto community", r.a.createElement("a", {
						href: "/r/ethereum/comments/hbjx25/the_great_reddit_scaling_bakeoff/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, x._("call to the crypto community", null, {
						hk: "2riJMB"
					}))), x._param("=launched", r.a.createElement("a", {
						href: "/r/ethereum/comments/opi5rg/scaling_reddits_community_points_with_arbitrum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, x._("launched", null, {
						hk: "1yIBHY"
					})))], {
						hk: "3q5Wzy"
					})))], {
						hk: "LIGUz"
					}))), null),
					developers: r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, p._("Developers", null, {
						hk: "4o6AOj"
					})), r.a.createElement("h2", null, p._("Developers can build on top of Community Points today. Make bots that work with Community Points or embed Community Points in an app outside of Reddit.", null, {
						hk: "1y2hAR"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, p._("Blockchain Resources", null, {
						hk: "325QLM"
					})), p._("{=Developers can interact directly with Community Points through standard blockchain tools and protocols.}{=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.}", [p._param("=Developers can interact directly with Community Points through standard blockchain tools and protocols.", r.a.createElement("p", null, p._("Developers can interact directly with Community Points through standard blockchain tools and protocols.", null, {
						hk: "J3pfL"
					}))), p._param("=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", r.a.createElement("p", null, p._("For developers who are new to blockchain, the {=Ethereum developer docs} are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", [p._param("=Ethereum developer docs", r.a.createElement("a", {
						href: "https://ethereum.org/en/developers/docs/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("Ethereum developer docs", null, {
						hk: "2b5HuB"
					})))], {
						hk: "3B8i3p"
					})))], {
						hk: "1QXjde"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, p._("Scaling Network", null, {
						hk: "4zK8vP"
					})), p._("{=Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. Arbitrum is compatible with most Ethereum tools.}{=To interact with the scaling network, developers can use the following resources: JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184}", [p._param("=Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. Arbitrum is compatible with most Ethereum tools.", r.a.createElement("p", null, p._("Community Points live on a scaling network on top of the Rinkeby Ethereum testnet. The scaling network runs on Arbitrum technology. {=Arbitrum} is compatible with most Ethereum tools.", [p._param("=Arbitrum", r.a.createElement("a", {
						href: "http://arbitrum.io/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("Arbitrum", null, {
						hk: "2UGvxQ"
					})))], {
						hk: "3PBVh0"
					}))), p._param("=To interact with the scaling network, developers can use the following resources: JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184", r.a.createElement("p", null, p._("To interact with the scaling network, developers can use the following resources: {=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184}", [p._param("=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.Chain ID: 5391184", r.a.createElement("ul", null, p._("{=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}{=Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.}{=Chain ID: 5391184}", [p._param("=JSON-RPC endpoint:https://testnet.redditspace.com/rpcThis allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", r.a.createElement("li", null, p._("JSON-RPC endpoint: {=https://testnet.redditspace.com/rpc}{=This allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}", [p._param("=https://testnet.redditspace.com/rpc", r.a.createElement("a", {
						href: "https://testnet.redditspace.com/rpc",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("https://testnet.redditspace.com/rpc", null, {
						hk: "3oFKN7"
					}))), p._param("=This allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", r.a.createElement("ul", null, p._("{=This allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.}", [p._param("=This allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contactspsupport@reddit.com for more details.", r.a.createElement("li", null, p._("This allows developers to use Reddit’s node to issue commands and read from the scaling network. Developers who are interested in spinning up their own node can contact {=spsupport@reddit.com} for more details.", [p._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, p._("spsupport@reddit.com", null, {
						hk: "3KtdZT"
					})))], {
						hk: "1TPD9P"
					})))], {
						hk: "3BHIQz"
					})))], {
						hk: "3sdvAt"
					}))), p._param("=Block Explorer:https://testnet.redditspace.com/This is an interface to see transactions and balances on the scaling network.", r.a.createElement("li", null, p._("Block Explorer: {=https://testnet.redditspace.com/}{=This is an interface to see transactions and balances on the scaling network.}", [p._param("=https://testnet.redditspace.com/", r.a.createElement("a", {
						href: "https://testnet.redditspace.com/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("https://testnet.redditspace.com/", null, {
						hk: "4ycbXt"
					}))), p._param("=This is an interface to see transactions and balances on the scaling network.", r.a.createElement("ul", null, p._("{=This is an interface to see transactions and balances on the scaling network.}", [p._param("=This is an interface to see transactions and balances on the scaling network.", r.a.createElement("li", null, p._("This is an interface to see transactions and balances on the scaling network.", null, {
						hk: "3mKESg"
					})))], {
						hk: "3Eb62P"
					})))], {
						hk: "3siH2z"
					}))), p._param("=Chain ID: 5391184", r.a.createElement("li", null, p._("Chain ID: 5391184", null, {
						hk: "3ZHtYb"
					})))], {
						hk: "24PuRG"
					})))], {
						hk: "2yRkDw"
					})))], {
						hk: "1ujTsr"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, p._("Smart Contracts", null, {
						hk: "1vFnYB"
					})), p._("{=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.}{=As a reference, here is the contract code from implementation contracts on our scaling network: SubredditPoints.solSubscriptions.solDistributions.solWhen Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.}", [p._param("=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", r.a.createElement("p", null, p._("Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", null, {
						hk: "1jTr1W"
					}))), p._param("=As a reference, here is the contract code from implementation contracts on our scaling network: SubredditPoints.solSubscriptions.solDistributions.solWhen Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", r.a.createElement("p", null, p._("As a reference, here is the contract code from implementation contracts on our scaling network: {=SubredditPoints.solSubscriptions.solDistributions.sol}{=When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.}", [p._param("=SubredditPoints.solSubscriptions.solDistributions.sol", r.a.createElement("ul", null, p._("{=SubredditPoints.sol}{=Subscriptions.sol}{=Distributions.sol}", [p._param("=SubredditPoints.sol", r.a.createElement("li", null, p._("{=SubredditPoints.sol}", [p._param("=SubredditPoints.sol", r.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0xb1ff5e09AbFD975bedEAf9F3858F0B14c4876E30/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("SubredditPoints.sol", null, {
						hk: "4jQRqq"
					})))], {
						hk: "2MrRfa"
					}))), p._param("=Subscriptions.sol", r.a.createElement("li", null, p._("{=Subscriptions.sol}", [p._param("=Subscriptions.sol", r.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0xaF6bf4c56cB5e4D64b65049be9E188b1f8Cf8448/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("Subscriptions.sol", null, {
						hk: "1qQToL"
					})))], {
						hk: "1zb1OQ"
					}))), p._param("=Distributions.sol", r.a.createElement("li", null, p._("{=Distributions.sol}", [p._param("=Distributions.sol", r.a.createElement("a", {
						href: "https://testnet.redditspace.com/address/0x22037C488520DF547c2cd2AA0BE70517082BDA1C/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, p._("Distributions.sol", null, {
						hk: "3txvlt"
					})))], {
						hk: "yx0Nz"
					})))], {
						hk: "16lBbv"
					}))), p._param("=When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", r.a.createElement("p", null, p._("When Points were launched, the smart contracts were reviewed and audited by Trail of Bits, an independent blockchain security firm. There have been some slight changes to the contracts since then.", null, {
						hk: "1aeuMz"
					})))], {
						hk: "KASyE"
					})))], {
						hk: "44VsL0"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, p._("Community Points API", null, {
						hk: "2HYKPs"
					})), r.a.createElement("p", null, p._("To get users’ addresses and balances, you can use this API.", null, {
						hk: "39K7KJ"
					})), r.a.createElement("pre", null, r.a.createElement("code", null, "GET ", r.a.createElement("a", {
						href: "https://meta-api.reddit.com/wallets/{subredditId",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "https://meta-api.reddit.com/wallets/{subredditId}"), "\n\nParams:\n@subredditId: Path parameter. The t5_* ID of the subreddit. It can be found from ", r.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_r_{subreddit}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/r/{subreddit}/about"), ".", "\n@userIds: Query parameter. Comma-separated list of user IDs in t2_* format. These IDs can be found from ", r.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_user_{username}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/user/{username}/about"))), r.a.createElement("p", null, p._("For example:", null, {
						hk: "2DPko9"
					})), r.a.createElement("pre", null, r.a.createElement("code", null, 'GET https://meta-api.reddit.com/wallets/t5_2wlj3?userIds=t2_omwdz,t2_3a0xnje1\n\nReturns:\n{\n  "t2_3a0xnje1": {\n    "amount": "50535317008090965261",\n    "amounts": {\n      "locked": {\n        "amount": null\n      },\n      "points": {\n        "amount": "50535317008090965261",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0x01d175F6281F65b10205575E728d863f9cEa1924"\n  },\n  "t2_omwdz": {\n    "amount": "127506460578756031502",\n    "amounts": {\n      "locked": {\n        "amount": null\n      },\n      "points": {\n        "amount": "127506460578756031502",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0xccd8271b1A827b75513286dF1238249fE9f4966b"\n  }\n}\n')))), null),
					faqs: r.a.createElement(() => r.a.createElement("main", null, r.a.createElement("h1", null, v._("Frequently Asked Questions", null, {
						hk: "43ocB2"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("Why didn’t I get Points?", null, {
						hk: "105t5N"
					})), v._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.If you do not see the "Claiming Your Points" card, it’s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches the your active Vault, b) you don’t see a "Claiming Your Points" card, c) it’s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We’ll be happy to take a look!}', [v._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.If you do not see the "Claiming Your Points" card, it’s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches the your active Vault, b) you don’t see a "Claiming Your Points" card, c) it’s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We’ll be happy to take a look!', r.a.createElement("ol", null, v._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}{=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}{=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}{=If you do not see the "Claiming Your Points" card, it’s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}{=If a) the address in the CSV matches the your active Vault, b) you don’t see a "Claiming Your Points" card, c) it’s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We’ll be happy to take a look!}', [v._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', r.a.createElement("li", null, v._('Go to your subreddit and look for the most recent post from u/CommunityPoints. {=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [v._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', r.a.createElement("ol", null, v._('{=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [v._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', r.a.createElement("li", null, v._('If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', null, {
						hk: "HmWiN"
					})))], {
						hk: "4eoStL"
					})))], {
						hk: "3uCvHR"
					}))), v._param('=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.', r.a.createElement("li", null, v._('If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. {=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}', [v._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", r.a.createElement("ol", null, v._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [v._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don’t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", r.a.createElement("li", null, v._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.}{=Keep in mind that your own votes don’t give you karma.}{=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [v._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", r.a.createElement("p", null, v._("If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", null, {
						hk: "48mrVq"
					}))), v._param("=Keep in mind that your own votes don’t give you karma.", r.a.createElement("p", null, v._("Keep in mind that your own votes don’t give you karma.", null, {
						hk: "1H1rps"
					}))), v._param("=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", r.a.createElement("p", null, v._("You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", null, {
						hk: "GE5vt"
					})))], {
						hk: "3HpFMz"
					})))], {
						hk: "42CTcK"
					})))], {
						hk: "10ANWW"
					}))), v._param('=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', r.a.createElement("li", null, v._('If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". {=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}', [v._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', r.a.createElement("ol", null, v._('{=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.}{=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.}', [v._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', r.a.createElement("li", null, v._('If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', null, {
						hk: "36u3kk"
					}))), v._param('=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at spsupport@reddit.com in case there are delays.', r.a.createElement("li", null, v._('If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before contacting support at {=spsupport@reddit.com} in case there are delays.', [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "3vBxSg"
					})))], {
						hk: "2bq5Ou"
					})))], {
						hk: "b94De"
					})))], {
						hk: "1gxMAa"
					}))), v._param('=If you do not see the "Claiming Your Points" card, it’s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault', r.a.createElement("li", null, v._('If you do not see the "Claiming Your Points" card, it’s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. {=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}', [v._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", r.a.createElement("ol", null, v._("{=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [v._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", r.a.createElement("li", null, v._("If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: {=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [v._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", r.a.createElement("ol", null, v._("{=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page}{=Sign out of your current Vault}{=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address}{=Send the Points in the old Vault to the address you copied for the new Vault}{=Sign out of the old Vault and recover the new Vault}", [v._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", r.a.createElement("li", null, v._("Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", null, {
						hk: "3iIJzY"
					}))), v._param("=Sign out of your current Vault", r.a.createElement("li", null, v._("Sign out of your current Vault", null, {
						hk: "1gkWPT"
					}))), v._param("=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", r.a.createElement("li", null, v._("Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", null, {
						hk: "42ImM"
					}))), v._param("=Send the Points in the old Vault to the address you copied for the new Vault", r.a.createElement("li", null, v._("Send the Points in the old Vault to the address you copied for the new Vault", null, {
						hk: "3mLdlY"
					}))), v._param("=Sign out of the old Vault and recover the new Vault", r.a.createElement("li", null, v._("Sign out of the old Vault and recover the new Vault", null, {
						hk: "2UeDSS"
					})))], {
						hk: "1mH4nm"
					})))], {
						hk: "10bLl6"
					})))], {
						hk: "2xMzME"
					})))], {
						hk: "2YgVjl"
					}))), v._param('=If a) the address in the CSV matches the your active Vault, b) you don’t see a "Claiming Your Points" card, c) it’s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support atspsupport@reddit.com with your username and everything you have checked so far. We’ll be happy to take a look!', r.a.createElement("li", null, v._('If a) the address in the CSV matches the your active Vault, b) you don’t see a "Claiming Your Points" card, c) it’s been more than 24 hours since the post was made, and d) you still do not see your Points, then please reach out to support at {=spsupport@reddit.com} with your username and everything you have checked so far. We’ll be happy to take a look!', [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "1wE4QW"
					})))], {
						hk: "4l8z9A"
					})))], {
						hk: "3aLxWv"
					})))], {
						hk: "1U06CZ"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("How do I cancel my Special Membership?", null, {
						hk: "xyJU9"
					})), v._("{=It depends on how you bought your membership: If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [v._param("=It depends on how you bought your membership: If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", r.a.createElement("p", null, v._("It depends on how you bought your membership: {=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [v._param("=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/specialIf you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", r.a.createElement("ul", null, v._("{=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/special}{=If you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.}{=If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.}{=If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [v._param("=If you purchased your subscription on reddit.com, you can cancel by going tohttps://www.reddit.com/settings/special", r.a.createElement("li", null, v._("If you purchased your subscription on reddit.com, you can cancel by going to {=https://www.reddit.com/settings/special}.", [v._param("=https://www.reddit.com/settings/special", r.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("https://www.reddit.com/settings/special", null, {
						hk: "21qjXp"
					})))], {
						hk: "4gtep0"
					}))), v._param("=If you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.", r.a.createElement("li", null, v._("If you bought your Special Membership with Points, you can cancel from the Memberships tab in the subreddit page on the mobile app.", null, {
						hk: "4mwIIS"
					}))), v._param("=If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.", r.a.createElement("li", null, v._("If you purchased your subscription using Google Play, you can manage or cancel your subscription by visiting the Subscriptions section of Google Play.", null, {
						hk: "45DshH"
					}))), v._param("=If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", r.a.createElement("li", null, v._("If you purchased your subscription with your Apple ID, you can manage or cancel your subscription through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "WfrXd"
					})))], {
						hk: "Jce68"
					})))], {
						hk: "2Hn6TR"
					})))], {
						hk: "1aXp2n"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("Help! I’ve lost my Recovery Phrase and/or Vault Password, can you reset my Vault for me?", null, {
						hk: "4lJgXT"
					})), v._("{=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you’re absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.}{=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually finalized, your Points will go to the updated Vault.}", [v._param("=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you’re absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", r.a.createElement("p", null, v._("Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you’re absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", null, {
						hk: "EFGiY"
					}))), v._param("=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually finalized, your Points will go to the updated Vault.", r.a.createElement("p", null, v._("Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually finalized, your Points will go to the updated Vault.", null, {
						hk: "3NzD28"
					})))], {
						hk: "V8FYv"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("Isn't crypto terrible for the environment?", null, {
						hk: "If5nI"
					})), v._("{=Our project currently runs on an Ethereum testnet called Rinkeby which is powered by a small number of machines. When we take Points out of beta and onto mainnet, we will switch to a scaling solution that not only dramatically reduces transaction fees, but also reduces our energy footprint. It’s true that no perfect solution exists for this right now, but there are dozens of projects working on new technologies that promise both, including Ethereum 2.0 and the “layer 2” technologies that will work on top of that.}{=To learn more, read thisarticle on Proof of Stake and how it uses significantly lower energy.}", [v._param("=Our project currently runs on an Ethereum testnet called Rinkeby which is powered by a small number of machines. When we take Points out of beta and onto mainnet, we will switch to a scaling solution that not only dramatically reduces transaction fees, but also reduces our energy footprint. It’s true that no perfect solution exists for this right now, but there are dozens of projects working on new technologies that promise both, including Ethereum 2.0 and the “layer 2” technologies that will work on top of that.", r.a.createElement("p", null, v._("Our project currently runs on an Ethereum testnet called Rinkeby which is powered by a small number of machines. When we take Points out of beta and onto mainnet, we will switch to a scaling solution that not only dramatically reduces transaction fees, but also reduces our energy footprint. It’s true that no perfect solution exists for this right now, but there are dozens of projects working on new technologies that promise both, including Ethereum 2.0 and the “layer 2” technologies that will work on top of that.", null, {
						hk: "1bTgzv"
					}))), v._param("=To learn more, read thisarticle on Proof of Stake and how it uses significantly lower energy.", r.a.createElement("p", null, v._("To learn more, read this {=article} on Proof of Stake and how it uses significantly lower energy.", [v._param("=article", r.a.createElement("a", {
						href: "https://www.nbcnews.com/tech/tech-news/cryptocurrency-goes-green-proof-stake-offer-solution-energy-concerns-rcna1030",
						target: "_blank",
						rel: "noopener noreferrer"
					}, v._("article", null, {
						hk: "1QPWKx"
					})))], {
						hk: "2eRcwr"
					})))], {
						hk: "1pziSF"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("What if I get banned? What happens to my Points or my Special Membership?", null, {
						hk: "4cvjGM"
					})), r.a.createElement("p", null, v._("Your existing Points will forever remain on your Ethereum account, but you will get locked out of Vault. You'll also stop receiving distributions, and any Membership renewals will be cancelled.", null, {
						hk: "4zU1kS"
					}))), r.a.createElement("section", null, r.a.createElement("h3", null, v._("I don't see Vault in the app.", null, {
						hk: "1Dg0cD"
					})), v._("{=Vault will appear in the left drawer when you: Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points}{=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.}{=If you are still having trouble, please reach out to us at spsupport@reddit.com}", [v._param("=Vault will appear in the left drawer when you: Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points", r.a.createElement("p", null, v._("Vault will appear in the left drawer when you: {=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points}", [v._param("=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points", r.a.createElement("ul", null, v._("{=Have unclaimed Points}{=Have a non-zero Points amount}{=Subscribed to a subreddit with Community Points}", [v._param("=Have unclaimed Points", r.a.createElement("li", null, v._("Have unclaimed Points", null, {
						hk: "37YKcU"
					}))), v._param("=Have a non-zero Points amount", r.a.createElement("li", null, v._("Have a non-zero Points amount", null, {
						hk: "34KOYb"
					}))), v._param("=Subscribed to a subreddit with Community Points", r.a.createElement("li", null, v._("Subscribed to a subreddit with Community Points", null, {
						hk: "wW6iv"
					})))], {
						hk: "2GFLco"
					})))], {
						hk: "cLy36"
					}))), v._param("=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", r.a.createElement("p", null, v._("Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", null, {
						hk: "BDvOr"
					}))), v._param("=If you are still having trouble, please reach out to us at spsupport@reddit.com", r.a.createElement("p", null, v._("If you are still having trouble, please reach out to us at {=spsupport@reddit.com}.", [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "2FZKWD"
					})))], {
						hk: "2IkVnJ"
					})))], {
						hk: "29WR35"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("I'm not seeing my Points on my account.", null, {
						hk: "2NxZoE"
					})), v._("{=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don’t see any Points, please reach out tospsupport@reddit.com}{=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.}{=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault: Tap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase}", [v._param("=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don’t see any Points, please reach out tospsupport@reddit.com", r.a.createElement("p", null, v._("If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don’t see any Points, please reach out to {=spsupport@reddit.com}.", [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "1QHf4M"
					})))], {
						hk: "1d08WB"
					}))), v._param("=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", r.a.createElement("p", null, v._("Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", null, {
						hk: "4EKXgH"
					}))), v._param("=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault: Tap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase", r.a.createElement("p", null, v._("If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault: {=Tap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase}", [v._param("=Tap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase", r.a.createElement("ul", null, v._("{=}{=Tap on Log Out}{=Select your old Vault address from the list}{=Recover using Reddit Backup or a Recovery Phrase}", [v._param("=", r.a.createElement("li", null, v._("Go to Vault -> Settings", null, {
						hk: "xrtKe"
					}))), v._param("=Tap on Log Out", r.a.createElement("li", null, v._("Tap on Log Out", null, {
						hk: "1txrqV"
					}))), v._param("=Select your old Vault address from the list", r.a.createElement("li", null, v._("Select your old Vault address from the list", null, {
						hk: "2YUPj0"
					}))), v._param("=Recover using Reddit Backup or a Recovery Phrase", r.a.createElement("li", null, v._("Recover using Reddit Backup or a Recovery Phrase", null, {
						hk: "2P0rYp"
					})))], {
						hk: "1nd6mS"
					})))], {
						hk: "4abVNe"
					})))], {
						hk: "1k5kF6"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("I got charged for a Special Membership but I haven’t received it.", null, {
						hk: "3c5y47"
					})), r.a.createElement("p", null, v._("Please reach out to us at {=spsupport@reddit.com}.", [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "2AY9Dg"
					})))], {
						hk: "CvFCR"
					}))), r.a.createElement("section", null, r.a.createElement("h3", null, v._("I converted my Points into Reddit Coins, but I don’t want them anymore. Can you revert the transaction?", null, {
						hk: "2TpjP3"
					})), r.a.createElement("p", null, v._("This is not possible. Conversion into Coins is final and cannot be reversed, since Points are burned in the process.", null, {
						hk: "1RwfEY"
					}))), r.a.createElement("section", null, r.a.createElement("h3", null, v._("How do I delete my Vault?", null, {
						hk: "1b4Gqs"
					})), v._("{=}{=If you wish to completely delete your Vault, please reach out to us atspsupport@reddit.com}", [v._param("=", r.a.createElement("p", null, v._("You can sign out from your Vault and that will delete the wallet from your device. This won’t affect your balance or your visible public address. To do that, go to Vault -> Setting -> Sign out.", null, {
						hk: "2jKs0B"
					}))), v._param("=If you wish to completely delete your Vault, please reach out to us atspsupport@reddit.com", r.a.createElement("p", null, v._("If you wish to completely delete your Vault, please reach out to us at {=spsupport@reddit.com}.", [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "BydEk"
					})))], {
						hk: "44Vfcp"
					})))], {
						hk: "8YvR6"
					})), r.a.createElement("section", null, r.a.createElement("h3", null, v._("I haven’t found my answer. How do I get support?", null, {
						hk: "1PAzA"
					})), r.a.createElement("p", null, v._("If you have questions, please reach out to us at {=spsupport@reddit.com}.", [v._param("=spsupport@reddit.com", r.a.createElement("a", {
						href: "mailto:spsupport@reddit.com"
					}, v._("spsupport@reddit.com", null, {
						hk: "DjyKg"
					})))], {
						hk: "3CbI5h"
					})))), null)
				};
			var Y = o("./src/reddit/icons/svgs/Snoo/index.tsx"),
				L = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less"),
				q = o.n(L);
			const {
				fbt: z
			} = o("./node_modules/fbt/lib/FbtPublic.js"), U = () => r.a.createElement("div", {
				className: q.a.container
			}, r.a.createElement("footer", {
				className: q.a.content
			}, r.a.createElement(Y.a, {
				className: q.a.logo
			}), r.a.createElement("span", {
				className: q.a.copyright
			}, z._("© 2021 Reddit, Inc.", null, {
				hk: "2AJJq2"
			})), r.a.createElement("span", {
				className: q.a.spacer
			}), r.a.createElement(y.a, {
				className: q.a.link,
				to: m("introduction")
			}, z._("Community Points Documentation", null, {
				hk: "KW8cc"
			})), r.a.createElement("span", {
				className: q.a.spacer
			}), r.a.createElement("a", {
				className: q.a.link,
				href: "https://www.redditinc.com/policies/previews-terms",
				target: "_blank",
				rel: "noopener noreferrer"
			}, z._("Previews Terms of Use", null, {
				hk: "4lPHBN"
			}))));
			var W = o("./src/lib/loadableAction/index.ts"),
				G = o("./src/reddit/controls/Button/index.tsx"),
				H = o("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				K = o("./src/reddit/selectors/user.ts"),
				J = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less"),
				Q = o.n(J);
			const X = () => {
					const e = Object(i.d)(),
						t = Object(i.e)(K.X);
					return r.a.createElement("header", {
						className: Object(_.a)(Q.a.container, {
							[Q.a.nightmode]: t
						})
					}, r.a.createElement(y.a, {
						"aria-label": P.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: Q.a.logo,
						to: "/",
						onClick: () => e(Object(W.a)(() => Promise.all([o.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), o.e("Frontpage~ModListing"), o.e("Frontpage")]).then(o.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
					}, r.a.createElement(Y.a, {
						className: Q.a.snoo
					}), r.a.createElement(H.a, {
						className: Q.a.wordmark
					})), r.a.createElement("div", {
						className: Q.a.sections
					}, Z.map(({
						displayText: e,
						link: t
					}) => r.a.createElement("a", {
						href: t,
						key: e,
						className: Q.a.sectionText
					}, e))), r.a.createElement(G.t, {
						className: Q.a.joinWaitlist,
						priority: G.c.Secondary,
						kind: G.b.ExternalLink,
						href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
						target: "_blank",
						rel: "noopener noreferrer"
					}, P.fbt._("Join Waitlist", null, {
						hk: "4rpEy2"
					})))
				},
				Z = [{
					displayText: P.fbt._("Token", null, {
						hk: "3pTjX0"
					}),
					link: "/community-points/#token"
				}, {
					displayText: P.fbt._("Benefits", null, {
						hk: "2J9q91"
					}),
					link: "/community-points/#benefits"
				}, {
					displayText: P.fbt._("Features", null, {
						hk: "31VVaC"
					}),
					link: "/community-points/#features"
				}, {
					displayText: P.fbt._("Vault", null, {
						hk: "3pQLt1"
					}),
					link: "/community-points/#vault"
				}, {
					displayText: P.fbt._("Testimonials", null, {
						hk: "3g5gab"
					}),
					link: "#testimonials"
				}, {
					displayText: P.fbt._("Future", null, {
						hk: "39h3VE"
					}),
					link: "/community-points/#future"
				}, {
					displayText: P.fbt._("Enroll", null, {
						hk: "3ZbEx3"
					}),
					link: "/community-points/#enroll"
				}, {
					displayText: P.fbt._("Documentation", null, {
						hk: "3BxUWp"
					}),
					link: m("introduction")
				}];
			var $ = o("./src/lib/getParsedUserAgent/index.ts"),
				ee = o("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.tsx"),
				te = o("./src/reddit/helpers/trackers/communityPoints.ts"),
				oe = o("./src/reddit/hooks/useTracking.ts"),
				ne = o("./src/reddit/selectors/economics.ts"),
				ae = o("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				re = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				ie = o.n(re);

			function se(e, t = !0) {
				return `${n.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var le = function(e) {
					const [t, o] = Object(a.useState)(0), n = Object(i.e)(ne.m), s = n && n.learnMore.pages || [], l = s.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), u = t => {
						o(t), t + 1 === s.length && e.onComplete()
					};
					return r.a.createElement("div", {
						className: ie.a.carousel
					}, r.a.createElement("div", {
						className: ie.a.imageContainer
					}, s.map((e, o) => r.a.createElement("img", {
						src: se(o),
						srcSet: `${se(o,!1)}, ${se(o)} 2x`,
						className: Object(_.a)(ie.a.image, {
							[ie.a.before]: o < t,
							[ie.a.active]: o === t,
							[ie.a.after]: o > t
						}),
						key: o
					}))), r.a.createElement("div", {
						className: ie.a.textContainer
					}, r.a.createElement("div", {
						className: ie.a.hiddenText
					}, r.a.createElement("div", {
						className: ie.a.slideTitle
					}, s[0] && s[0].title), l), s.map((e, o) => r.a.createElement("div", {
						className: Object(_.a)(ie.a.text, {
							[ie.a.before]: o < t,
							[ie.a.active]: o === t,
							[ie.a.after]: o > t
						}),
						key: o
					}, r.a.createElement("div", {
						className: ie.a.slideTitle
					}, e.title), e.body))), t < s.length - 1 && r.a.createElement("div", {
						className: ie.a.pager
					}, s.map((e, o) => r.a.createElement("button", {
						key: o,
						onClick: () => u(o)
					}, r.a.createElement("div", {
						className: Object(_.a)(ie.a.progressDot, {
							[ie.a.active]: o === t
						})
					}))), r.a.createElement("button", {
						"aria-label": "Next",
						className: ie.a.nextButton,
						onClick: () => u(t + 1)
					}, r.a.createElement(ae.a, {
						className: ie.a.arrowIcon
					}))))
				},
				ue = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				ce = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/FAQ/index.m.less"),
				de = o.n(ce);

			function me(e) {
				const [t, o] = Object(a.useState)(!1), n = Object(oe.a)();
				return r.a.createElement("div", {
					className: de.a.section
				}, r.a.createElement("div", {
					className: de.a.sectionTitle,
					onClick: () => {
						t || n(Object(te.g)(e.id)), o(!t)
					}
				}, e.title, r.a.createElement("button", {
					className: Object(_.a)(de.a.expando, {
						[de.a.expanded]: t
					}),
					"aria-label": "Expand"
				}, r.a.createElement(ue.a, {
					className: de.a.chevron
				}))), t && r.a.createElement("div", {
					className: de.a.text
				}, e.children))
			}

			function he(e) {
				const t = `${n.a.assetPath}/img/communityPoints/faq/${e.id}`;
				return r.a.createElement("img", {
					src: t + ".png",
					srcSet: `${t}.png, ${t}@2x.png 2x`
				})
			}
			var pe = function() {
					const e = Object(i.e)(ne.m),
						t = Object(oe.a)();
					Object(a.useEffect)(() => {
						t(Object(te.f)())
					}, [t]);
					const o = e && e.faq || [];
					return r.a.createElement("div", {
						className: de.a.container
					}, r.a.createElement("div", {
						className: de.a.title
					}, "Frequently Asked Questions"), o.map(e => e.pages.map(e => r.a.createElement(me, {
						id: e.analyticsPageName,
						title: e.title,
						key: e.analyticsPageName
					}, e.sections.map((e, t) => "text" in e ? r.a.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: e.text
						},
						className: de.a.subSection,
						key: t
					}) : "image" in e ? r.a.createElement("div", {
						className: de.a.imageSection,
						key: t
					}, r.a.createElement(he, {
						id: e.image
					})) : null)))))
				},
				ye = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less"),
				be = o.n(ye);
			const {
				fbt: fe
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var ge = function() {
					const [e, t] = Object(a.useState)(!1), [o, s] = Object(a.useState)(!1), l = Object(i.e)($.e), u = Object(i.e)(ne.m), c = Object(oe.a)();
					Object(a.useEffect)(() => {
						c(Object(te.h)())
					}, [c]);
					const d = u && u.learnMore.title;
					return r.a.createElement("div", {
						className: be.a.container
					}, r.a.createElement("div", {
						className: be.a.title
					}, d), r.a.createElement(le, {
						onComplete: () => t(!0)
					}), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(G.l, {
						className: be.a.createVaultButton,
						onClick: () => {
							c(Object(te.b)()), l ? window.location.href = `${n.a.redditUrl}/vault/` : s(!0)
						}
					}, fe._("Create My Vault", null, {
						hk: "3ZzMgD"
					})), r.a.createElement(pe, null)), o && r.a.createElement(ee.b, {
						onClose: () => s(!1)
					}))
				},
				we = o("./src/reddit/icons/fonts/index.tsx"),
				ve = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less"),
				ke = o.n(ve);
			const {
				fbt: _e
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Pe = ({
				className: e,
				data: t,
				isExpanded: o,
				isHidden: n,
				onClickExpand: a,
				onClickHide: s
			}) => {
				const l = Object(i.e)(K.X);
				return r.a.createElement("div", {
					className: Object(_.a)(ke.a.container, e, {
						[ke.a.expanded]: o,
						[ke.a.hidden]: n,
						[ke.a.nightmode]: l
					})
				}, r.a.createElement("div", {
					className: ke.a.imageSection,
					style: {
						backgroundColor: t.backgroundColor
					}
				}, r.a.createElement("img", {
					className: Object(_.a)(ke.a.image, {
						[ke.a.expanded]: o
					}),
					src: t.imageSrc
				})), r.a.createElement("div", {
					className: Object(_.a)(ke.a.textSection, {
						[ke.a.expanded]: o,
						[ke.a.nightmode]: l
					})
				}, r.a.createElement("h5", {
					className: ke.a.title
				}, t.title), r.a.createElement("p", {
					className: ke.a.subtitle
				}, t.subtitle), o && r.a.createElement("p", {
					className: ke.a.body
				}, t.body), r.a.createElement("button", {
					onClick: o ? s : a,
					className: Object(_.a)(ke.a.expandButton, {
						[ke.a.expanded]: o
					}),
					"aria-label": o ? _e._("Collapse", null, {
						hk: "LToWq"
					}) : _e._("Expand", null, {
						hk: "4jMW0g"
					})
				}, r.a.createElement(we.a, {
					name: "add",
					className: Object(_.a)(ke.a.plusIcon, {
						[ke.a.expanded]: o
					})
				}))))
			};
			var Ee = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less"),
				Ce = o.n(Ee);
			const {
				fbt: Ie
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Re = ({
				className: e
			}) => {
				const [t, o] = Object(a.useState)(null);
				return r.a.createElement("div", {
					className: e
				}, r.a.createElement(wt, {
					anchorId: "benefits"
				}), r.a.createElement("h2", {
					className: Ce.a.title
				}, Ie._("Take your community to the next level", null, {
					hk: "PqrYm"
				})), r.a.createElement("div", {
					className: Object(_.a)(Ce.a.benefitsContainer, {
						[Ce.a.expanded]: null !== t
					})
				}, Te.map((e, n) => r.a.createElement(Pe, {
					key: n,
					data: e,
					isExpanded: null !== t && n === t,
					isHidden: null !== t && n !== t,
					onClickExpand: () => o(n),
					onClickHide: () => o(null)
				}))))
			}, Te = [{
				title: Ie._("Reward the community, for real", null, {
					hk: "26o9ra"
				}),
				subtitle: Ie._("Earn something valuable for all the hours you put into your community.", null, {
					hk: "SQfOp"
				}),
				body: Ie._("Community Points are a way for Redditors to own a piece of their favorite communities. Moderators and content creators earn Points by contributing to the community, and they can spend their Points on special features, display their Points as reputation in the community, and vote with their Points to weigh in on community decisions.", null, {
					hk: "Xdxas"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reward_the_community_v2.png`,
				backgroundColor: "#E2D399"
			}, {
				title: Ie._("Unlock special features", null, {
					hk: "49hRJ2"
				}),
				subtitle: Ie._("Buy community features with Community Points, like Special Memberships and awards.", null, {
					hk: "11dSn1"
				}),
				body: Ie._("Community Points unlock special features in subreddits that adopt them. For example, they can be used to purchase Special Memberships, which give users access to community-themed badges, highlighted usernames, and the ability to embed rich media in their comments. Or they can be converted to Coins that can be used in the subreddit to give out awards.", null, {
					hk: "19OcvD"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/premium_features_v2.png`,
				backgroundColor: "#B3F1FF"
			}, {
				title: Ie._("Encourage better content and conversation", null, {
					hk: "3EKFJU"
				}),
				subtitle: Ie._("Use Community Points as an incentive to shape content and behavior in your community.", null, {
					hk: "3fIFZj"
				}),
				body: Ie._("Community Points introduce a powerful incentive system that communities can customize to their needs. Want to see more long-form text posts and comments? Reward this kind of content more. Want to see fewer low-effort memes? Give out fewer Points for them. (Or reward memes even more, it’s up to you and your community!)", null, {
					hk: "3DIGJc"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/hq_content_v2.png`,
				backgroundColor: "#E3D7F4"
			}, {
				title: Ie._("Empower the community", null, {
					hk: "4xbWZA"
				}),
				subtitle: Ie._("Use polls to let the community weigh in on important decisions, including how Community Points should be distributed.", null, {
					hk: "S9sAC"
				}),
				body: Ie._("Subreddits can create polls where votes are weighted according to how many Points users have earned in the community. Instead of seeing only the loudest comments, measure how long-term members actually feel and use this mechanism to evolve how your community makes decisions.", null, {
					hk: "SD836"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/get_input_v2.png`,
				backgroundColor: "#A7EAD0"
			}, {
				title: Ie._("Use Points as a flexible tool", null, {
					hk: "16j4nt"
				}),
				subtitle: Ie._("Give out Points as prizes for events and contests and integrate Points with community bots such as Automod.", null, {
					hk: "4qJAr"
				}),
				body: Ie._("Points are a flexible tool you can use for many purposes in your community. Community Points can be prizes for community events and contests, such as a trivia thread or design contest. Points can also be used with community bots, including Automod, to do things like host a discussion thread only for core community contributors or thank Special Members when they make a post.", null, {
					hk: "zIk1I"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/community_together_v2.png`,
				backgroundColor: "#FFC2C2"
			}, {
				title: Ie._("Customize your Points", null, {
					hk: "4jECbt"
				}),
				subtitle: Ie._("Each subreddit creates its own Community Points token, with a custom name and symbol.", null, {
					hk: "2hgheb"
				}),
				body: Ie._("Every subreddit’s Community Points are unique to it, with a name chosen by the community and a symbol to match. These tokens live on the blockchain, which means they are owned and controlled fully by the community.", null, {
					hk: "JUT4y"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/customize_points_v2.png`,
				backgroundColor: "#DDDDDD"
			}];
			var Se = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less"),
				xe = o.n(Se);
			const {
				fbt: Ve
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ae = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(_.a)(xe.a.container, e)
			}, r.a.createElement(wt, {
				anchorId: "token"
			}), r.a.createElement("img", {
				className: xe.a.mainScene,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v2.png`
			}), r.a.createElement("h3", {
				className: xe.a.title
			}, Ve._("Community Points", null, {
				hk: "eQ16B"
			})), r.a.createElement("h2", {
				className: xe.a.subtitle
			}, Ve._("Own a piece of your community", null, {
				hk: "xjmHz"
			})), r.a.createElement("p", {
				className: xe.a.bodyText
			}, Ve._("Add a crypto token to your subreddit. Earn rewards, encourage quality content, and unlock special features.", null, {
				hk: "aApAV"
			})), r.a.createElement(G.t, {
				className: xe.a.waitlistButton,
				priority: G.c.Primary,
				kind: G.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank",
				rel: "noopener noreferrer"
			}, Ve._("Join Waitlist", null, {
				hk: "4rpEy2"
			})));
			var Me = o("./src/higherOrderComponents/asModal/index.tsx");
			const Ne = Object(Me.a)(le);
			var Be = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less"),
				je = o.n(Be);
			const {
				fbt: Fe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), De = ({
				className: e
			}) => {
				const [t, o] = Object(a.useState)(!1);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(_.a)(e, je.a.container)
				}, r.a.createElement(wt, {
					anchorId: "future"
				}), r.a.createElement("img", {
					className: je.a.image,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/crypto_future_v2.png`
				}), r.a.createElement("div", {
					className: je.a.textContainer
				}, r.a.createElement("h3", {
					className: je.a.title
				}, Fe._("Step into the crypto future", null, {
					hk: "4kMpHZ"
				})), r.a.createElement("div", {
					className: je.a.body
				}, Fe._("{=Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.}{=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence – on and off of Reddit.}", [Fe._param("=Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", r.a.createElement("p", null, Fe._("Communities are the lifeblood of the Internet. But on today’s Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", null, {
					hk: "srv5y"
				}))), Fe._param("=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence – on and off of Reddit.", r.a.createElement("p", null, Fe._("Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence – on and off of Reddit.", null, {
					hk: "4GrPUA"
				})))], {
					hk: "1tdk6S"
				})), r.a.createElement(G.t, {
					Icon: Object(we.b)("topic_reading"),
					className: je.a.button,
					iconClassName: je.a.buttonIcon,
					priority: G.c.Secondary,
					onClick: () => o(!0)
				}, Fe._("A New Frontier", null, {
					hk: "4GrPd2"
				})))), t && r.a.createElement(Ne, {
					withOverlay: !0,
					onOverlayClick: () => o(!1),
					onComplete: () => {}
				}))
			};
			var Oe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less"),
				Ye = o.n(Oe);
			const {
				fbt: Le
			} = o("./node_modules/fbt/lib/FbtPublic.js"), qe = ({
				className: e
			}) => r.a.createElement("div", {
				className: e
			}, r.a.createElement("div", {
				className: Ye.a.background
			}, r.a.createElement("img", {
				className: Ye.a.snoo,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/faq_v2.png`
			}), r.a.createElement("h2", {
				className: Ye.a.subtitle
			}, Le._("Want to know more?", null, {
				hk: "3vbn1B"
			})), r.a.createElement(G.t, {
				Icon: Object(we.b)("topic_reading"),
				className: Ye.a.docsButton,
				iconClassName: Ye.a.docsIcon,
				priority: G.c.Secondary,
				kind: G.b.InternalLink,
				to: m("introduction")
			}, r.a.createElement("span", {
				className: Ye.a.docTextFull
			}, Le._("Community Points Documentation", null, {
				hk: "3nnz6o"
			})), r.a.createElement("span", {
				className: Ye.a.docTextShort
			}, Le._("Community Points Doc", null, {
				hk: "1E9Ckc"
			})))));
			var ze = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less"),
				Ue = o.n(ze);
			const {
				fbt: We
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ge = ({
				className: e,
				data: t
			}) => r.a.createElement("div", {
				className: Object(_.a)(Ue.a.container, e),
				style: {
					backgroundColor: t.backgroundColor
				}
			}, r.a.createElement("div", {
				className: Ue.a.textSection
			}, r.a.createElement("div", {
				className: Ue.a.textContainer
			}, r.a.createElement("h4", {
				className: Ue.a.title
			}, t.title), t.body)), r.a.createElement("div", {
				className: Ue.a.imageSection
			}, r.a.createElement("img", {
				className: Ue.a.image,
				src: t.imageSrc
			})));
			var He = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less"),
				Ke = o.n(He);
			const {
				fbt: Je
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Qe = ({
				className: e
			}) => r.a.createElement("div", {
				className: e
			}, r.a.createElement(wt, {
				anchorId: "features"
			}), r.a.createElement("h3", {
				className: Ke.a.title
			}, Je._("Features", null, {
				hk: "Bhlfk"
			})), r.a.createElement("h2", {
				className: Ke.a.subtitle
			}, Je._("Oh, the possibilities!", null, {
				hk: "1Up4RN"
			})), Xe.map(e => r.a.createElement(Ge, {
				className: Ke.a.featureContainer,
				key: e.title,
				data: e
			}))), Xe = [{
				title: Je._("Own your reputation", null, {
					hk: "2Z40M2"
				}),
				body: Je._("{=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.}{=But it’s not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet!}", [Je._param("=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", r.a.createElement("p", {
					className: Ke.a.bodyText
				}, Je._("Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", null, {
					hk: "1w7N5y"
				}))), Je._param("=But it’s not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet!", r.a.createElement("p", {
					className: Ke.a.bodyText
				}, Je._("But it’s not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet!", null, {
					hk: "1vsOBE"
				})))], {
					hk: "2VTYf8"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reputation_v2.png`,
				backgroundColor: "#FF5C0033"
			}, {
				title: Je._("Purchase Special Memberships", null, {
					hk: "4c0PPs"
				}),
				body: Je._("{=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:}{=Badges}{=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.}{=GIFs (optional)}{=Embed GIFs directly inside your comments.}{=Animated Emojis}{=Let creators in your community upload custom emojis that you can add to your comments.}", [Je._param("=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", r.a.createElement("p", {
					className: Object(_.a)(Ke.a.bodyText, Ke.a.blackText)
				}, Je._("Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", null, {
					hk: "3KdhAP"
				}))), Je._param("=Badges", r.a.createElement("h6", {
					className: Ke.a.bodyTitle
				}, Je._("Badges", null, {
					hk: "1Xw4PQ"
				}))), Je._param("=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", r.a.createElement("p", {
					className: Ke.a.bodyDetail
				}, Je._("Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", null, {
					hk: "3mrVe"
				}))), Je._param("=GIFs (optional)", r.a.createElement("h6", {
					className: Ke.a.bodyTitle
				}, Je._("GIFs (optional)", null, {
					hk: "1OkOrY"
				}))), Je._param("=Embed GIFs directly inside your comments.", r.a.createElement("p", {
					className: Ke.a.bodyDetail
				}, Je._("Embed GIFs directly inside your comments.", null, {
					hk: "TmLOL"
				}))), Je._param("=Animated Emojis", r.a.createElement("h6", {
					className: Ke.a.bodyTitle
				}, Je._("Animated Emojis", null, {
					hk: "18gq4g"
				}))), Je._param("=Let creators in your community upload custom emojis that you can add to your comments.", r.a.createElement("p", {
					className: Ke.a.bodyDetail
				}, Je._("Let creators in your community upload custom emojis that you can add to your comments.", null, {
					hk: "Ot9Cs"
				})))], {
					hk: "11CKRv"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/special_memberships_v2.png`,
				backgroundColor: "#D4F6FF"
			}, {
				title: Je._("Buy Coins in your community", null, {
					hk: "3LFg3T"
				}),
				body: r.a.createElement("p", {
					className: Ke.a.bodyText
				}, Je._("Make it rain awards! You can use your Community Points to buy Reddit Coins that only work in the subreddit.", null, {
					hk: "4BNxrU"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/awards_v2.png`,
				backgroundColor: "#00CC7833"
			}, {
				title: Je._("Put anything to a vote", null, {
					hk: "3PT2yA"
				}),
				body: Je._("{=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.}{=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.}", [Je._param("=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", r.a.createElement("p", {
					className: Ke.a.bodyText
				}, Je._("Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", null, {
					hk: "Occ8f"
				}))), Je._param("=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", r.a.createElement("p", {
					className: Ke.a.bodyText
				}, Je._("Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", null, {
					hk: "20PHmT"
				})))], {
					hk: "KZiXt"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/polls_v2.png`,
				backgroundColor: "#FFD63533"
			}, {
				title: Je._("Show your appreciation", null, {
					hk: "16HCcH"
				}),
				body: Je._("{=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.}", [Je._param("=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", r.a.createElement("p", {
					className: Ke.a.bodyText
				}, Je._("Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", null, {
					hk: "3PzATh"
				})))], {
					hk: "3Lb9Rr"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/tipping_v2.png`,
				backgroundColor: "#F86AEA33"
			}, {
				title: Je._("Reward creators and developers", null, {
					hk: "3gxoDp"
				}),
				body: r.a.createElement("p", {
					className: Object(_.a)(Ke.a.bodyText, Ke.a.blackText)
				}, Je._("Creators can be rewarded for making things for the subreddit, such as designing badges or community merchandise. Developers who make community bots or tools for the subreddit can be paid in Points for their work.", null, {
					hk: "2aZ9Y6"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/creator_rewards_v2.png`,
				backgroundColor: "#FFF9F3"
			}];
			var Ze = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less"),
				$e = o.n(Ze);
			const {
				fbt: et
			} = o("./node_modules/fbt/lib/FbtPublic.js"), tt = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(_.a)(e, $e.a.container)
			}, r.a.createElement(wt, {
				anchorId: "enroll"
			}), r.a.createElement("div", {
				className: $e.a.backgroundContainer
			}, r.a.createElement("h3", {
				className: $e.a.title
			}, et._("Join waitlist", null, {
				hk: "2MmQU3"
			})), r.a.createElement("h2", {
				className: $e.a.subtitle
			}, et._("Want to see Community Points in your subreddit?", null, {
				hk: "3a9HLq"
			})), r.a.createElement("p", {
				className: $e.a.body
			}, et._("Community Points will always be an opt-in feature. We are looking for a select few subreddits to join our crypto experiment. If you are a moderator, add yourself to the list and we’ll be in touch!", null, {
				hk: "1DOCA"
			})), r.a.createElement(G.t, {
				className: $e.a.waitlistButton,
				priority: G.c.Primary,
				kind: G.b.ExternalLink,
				href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
				target: "_blank",
				rel: "noopener noreferrer"
			}, et._("Join Waitlist", null, {
				hk: "p3fEV"
			})), r.a.createElement("img", {
				className: $e.a.moon,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/moon_v2.png`
			}), r.a.createElement("img", {
				className: $e.a.rocket,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/rocket_v2.png`
			})));
			var ot = o("./node_modules/react-tilt/dist/tilt.js"),
				nt = o.n(ot),
				at = o("./src/reddit/components/UserIcon/index.tsx"),
				rt = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Testimonials/quoteBubble.m.less"),
				it = o.n(rt);
			const st = ({
				badge: e,
				commentUrl: t,
				children: o,
				className: n,
				iconUrl: a,
				isRightSide: i,
				backgroundColor: s,
				username: l
			}) => {
				const u = r.a.createElement(nt.a, null, r.a.createElement("div", {
					className: it.a.bubble,
					style: {
						background: s
					}
				}, o, r.a.createElement("div", {
					className: Object(_.a)(it.a.bubbleBottom, {
						[it.a.isRightSide]: i
					}),
					style: {
						background: s
					}
				})));
				return r.a.createElement("div", {
					className: n,
					style: {
						gridArea: l
					}
				}, t ? r.a.createElement(y.a, {
					to: t,
					target: "_blank",
					rel: "noopener noreferrer"
				}, u) : u, r.a.createElement("div", {
					className: Object(_.a)(it.a.userRow, {
						[it.a.rightJustified]: i
					})
				}, r.a.createElement("div", {
					className: it.a.userIconWrapper
				}, r.a.createElement(at.a, {
					className: it.a.userIcon,
					iconUrl: a,
					isNSFW: !1,
					userName: l
				})), r.a.createElement("div", {
					className: it.a.usernameWrapper
				}, r.a.createElement("span", {
					className: it.a.username
				}, `u/${l}`), e && r.a.createElement("span", {
					className: Object(_.a)(it.a.userBadge, {
						[it.a.isRightSide]: i
					})
				}, e))))
			};
			var lt = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Testimonials/index.m.less"),
				ut = o.n(lt);
			const {
				fbt: ct
			} = o("./node_modules/fbt/lib/FbtPublic.js"), dt = ({
				className: e
			}) => {
				const [t, o] = Object(a.useState)(!1);
				return r.a.createElement("div", {
					className: e
				}, r.a.createElement(wt, {
					anchorId: "testimonials"
				}), r.a.createElement("h3", {
					className: ut.a.title
				}, ct._("♥ From Communities", null, {
					hk: "329c5P"
				})), r.a.createElement("h2", {
					className: ut.a.subtitle
				}, ct._("{=Real moments from subreddits}{=with Community Points}", [ct._param("=Real moments from subreddits", r.a.createElement("div", null, ct._("Real moments from subreddits", null, {
					hk: "2wwW0O"
				}))), ct._param("=with Community Points", r.a.createElement("div", null, ct._("with Community Points", null, {
					hk: "2ZfH9U"
				})))], {
					hk: "1ChYLP"
				})), r.a.createElement("div", {
					className: Object(_.a)(ut.a.quotesContainer, {
						[ut.a.showAll]: t
					})
				}, mt.map(e => r.a.createElement(st, {
					key: e.username,
					badge: e.badge,
					commentUrl: e.commentUrl,
					className: Object(_.a)(ut.a.userQuote, {
						[ut.a.alwaysShow]: e.alwaysShow || t
					}),
					backgroundColor: e.backgroundColor,
					username: e.username,
					iconUrl: e.iconUrl,
					isRightSide: e.isRightSide
				}, e.body))), r.a.createElement(G.t, {
					priority: G.c.Secondary,
					className: ut.a.showAllButton,
					onClick: () => o(!t)
				}, t ? ct._("Read Less", null, {
					hk: "18om89"
				}) : ct._("Read All", null, {
					hk: "qAwHQ"
				})))
			}, mt = [{
				username: "ethereumflow",
				iconUrl: "https://styles.redditmedia.com/t5_2nf44m/styles/profileIcon_aonfcj04hsb71.jpg?width=256&height=256&crop=256:256,smart&s=a4f0562563efa0070ed2c2693210e86018101f67",
				backgroundColor: "#CCF5E4",
				body: ct._("{=Moons are a great addition to this sub. I think it really helps keep the community engaged and not always being super shitty to each other. It's good to have engaging discussions here and having people always updating with news and events as it happens. I like it. Will it be possible to have them incorporated into other subs in the future?}", [ct._param("=Moons are a great addition to this sub. I think it really helps keep the community engaged and not always being super shitty to each other. It's good to have engaging discussions here and having people always updating with news and events as it happens. I like it. Will it be possible to have them incorporated into other subs in the future?", r.a.createElement("p", null, ct._("Moons are a great addition to this sub. I think it really helps keep the community engaged and not always being super shitty to each other. It's good to have engaging discussions here and having people always updating with news and events as it happens. I like it. Will it be possible to have them incorporated into other subs in the future?", null, {
					hk: "a0d4g"
				})))], {
					hk: "2YhlM5"
				}),
				commentUrl: "/r/CryptoCurrency/comments/i493uv/new_moons_distribution_round_3_proposal/g0hbjcd",
				alwaysShow: !0
			}, {
				username: "RafaelNobre",
				iconUrl: "https://styles.redditmedia.com/t5_18948l/styles/profileIcon_snoo9d03f057-2582-482b-a58b-a406b7f8acbe-headshot-f.png?width=256&height=256&crop=256:256,smart&s=dfba6c6a04107f40ac4694971924fa2be89d0811",
				backgroundColor: "#FEE1FB",
				body: ct._("{=I've been a lurker... But Moons are a way too good incentive to stay quiet!}", [ct._param("=I've been a lurker... But Moons are a way too good incentive to stay quiet!", r.a.createElement("p", null, ct._("I've been a lurker... But Moons are a way too good incentive to stay quiet!", null, {
					hk: "4nkLxC"
				})))], {
					hk: "2E42eW"
				}),
				isRightSide: !0,
				commentUrl: "/r/CryptoCurrency/comments/my5xdj/ive_been_a_lurker_but_moons_are_a_way_to_good/",
				alwaysShow: !0
			}, {
				username: "HashMoose",
				iconUrl: "https://styles.redditmedia.com/t5_255sut/styles/profileIcon_snoo4a775364-7fc1-4ac2-bc55-2e61cb165621-headshot-f.png?width=256&height=256&crop=256:256,smart&s=910366e407ce4138b81a20daa49fee44a6619a63",
				backgroundColor: "#FFF7D7",
				body: ct._("{=I feel like I am both seeing more material and voting more since bricks have been introduced. I like it.}", [ct._param("=I feel like I am both seeing more material and voting more since bricks have been introduced. I like it.", r.a.createElement("p", null, ct._("I feel like I am both seeing more material and voting more since bricks have been introduced. I like it.", null, {
					hk: "daD7g"
				})))], {
					hk: "2ugZmq"
				}),
				isRightSide: !0,
				commentUrl: "/r/FortNiteBR/comments/j2wrki/new_bricks_distribution_round_5_proposal/g78we9c/",
				alwaysShow: !0
			}, {
				username: "LibertarianCommie999",
				iconUrl: "https://styles.redditmedia.com/t5_2v10sy/styles/profileIcon_snoo503acdd4-2014-4764-9f81-d9b02d5aba15-headshot.png?width=256&height=256&crop=256:256,smart&s=203e901f99bf5c1f8b98e6cd6d7cffd5f4edbdba",
				backgroundColor: "#E7DFF3",
				body: ct._("{=Came to the sub for information, stayed for the moons.}", [ct._param("=Came to the sub for information, stayed for the moons.", r.a.createElement("p", null, ct._("Came to the sub for information, stayed for the moons.", null, {
					hk: "1jYojE"
				})))], {
					hk: "4sXeCF"
				}),
				commentUrl: "/r/CryptoCurrency/comments/mov60i/came_to_the_sub_for_information_stayed_for_the/"
			}, {
				username: "jwinterm",
				iconUrl: "https://styles.redditmedia.com/t5_gdwpn/styles/profileIcon_wbx8bc38shr41.png?width=256&height=256&crop=256:256,smart&s=685fbfb2038a4f22412018e811d1c1c2961181d4",
				backgroundColor: "#D2F6FF",
				badge: "r/CryptoCurrency MOD",
				body: ct._("{=In just a year and a half, Moons have had a significantly positive impact on the r/CryptoCurrency community. Users are now able to earn a say in community decisions, easily recognize long-term members, and feel rewarded for their contributions — however big or small.}{=Moderators are also rewarded directly for their hard work, creating a deeper sense of community for users and moderators alike. The tipping mechanism has given moderators a new means to reward users for any behavior ranging from reporting manipulation to winning a community contest.}{=Users have built websites and social media channels on their own time solely dedicated to Moons, including discord and telegram tipping bots and external websites. Participation within the subreddit is also up dramatically.}{=In all Community Points have been a fantastic addition to the r/CryptoCurrency community and other subreddits looking to adopt their own should expect similar benefits.}", [ct._param("=In just a year and a half, Moons have had a significantly positive impact on the r/CryptoCurrency community. Users are now able to earn a say in community decisions, easily recognize long-term members, and feel rewarded for their contributions — however big or small.", r.a.createElement("p", null, ct._("In just a year and a half, Moons have had a significantly positive impact on the r/CryptoCurrency community. Users are now able to earn a say in community decisions, easily recognize long-term members, and feel rewarded for their contributions — however big or small.", null, {
					hk: "3N598A"
				}))), ct._param("=Moderators are also rewarded directly for their hard work, creating a deeper sense of community for users and moderators alike. The tipping mechanism has given moderators a new means to reward users for any behavior ranging from reporting manipulation to winning a community contest.", r.a.createElement("p", null, ct._("Moderators are also rewarded directly for their hard work, creating a deeper sense of community for users and moderators alike. The tipping mechanism has given moderators a new means to reward users for any behavior ranging from reporting manipulation to winning a community contest.", null, {
					hk: "2uwNZf"
				}))), ct._param("=Users have built websites and social media channels on their own time solely dedicated to Moons, including discord and telegram tipping bots and external websites. Participation within the subreddit is also up dramatically.", r.a.createElement("p", null, ct._("Users have built websites and social media channels on their own time solely dedicated to Moons, including discord and telegram tipping bots and external websites. Participation within the subreddit is also up dramatically.", null, {
					hk: "aYMZj"
				}))), ct._param("=In all Community Points have been a fantastic addition to the r/CryptoCurrency community and other subreddits looking to adopt their own should expect similar benefits.", r.a.createElement("p", null, ct._("In all Community Points have been a fantastic addition to the r/CryptoCurrency community and other subreddits looking to adopt their own should expect similar benefits.", null, {
					hk: "3uGCdw"
				})))], {
					hk: "2utNvl"
				}),
				isRightSide: !0,
				alwaysShow: !0
			}, {
				username: "Irrelephantoops",
				iconUrl: "https://styles.redditmedia.com/t5_1u8id0/styles/profileIcon_jr6vutm97oz71.jpeg?width=256&height=256&crop=256:256,smart&s=d32b64e408bd58771471199b3d348f65dc5c589d",
				backgroundColor: "#FFEADF",
				body: ct._("{=I see you 💙 Just letting you know I appreciate the work you're putting in everywhere. I can always count on you to have the thorough, well layed out information in the comments that I need to get a more well rounded understanding of what's going on. You're a gentleman and a scholar cheers.}", [ct._param("=I see you 💙 Just letting you know I appreciate the work you're putting in everywhere. I can always count on you to have the thorough, well layed out information in the comments that I need to get a more well rounded understanding of what's going on. You're a gentleman and a scholar cheers.", r.a.createElement("p", null, ct._("I see you 💙 Just letting you know I appreciate the work you're putting in everywhere. I can always count on you to have the thorough, well layed out information in the comments that I need to get a more well rounded understanding of what's going on. You're a gentleman and a scholar cheers.", null, {
					hk: "48sf0p"
				})))], {
					hk: "4vegDN"
				}),
				commentUrl: "/r/CryptoCurrency/comments/j2wq4g/comment/g78uvc7/"
			}, {
				username: "ThatWunderkind",
				iconUrl: "https://styles.redditmedia.com/t5_f2znc/styles/profileIcon_snoodadb6708-9f92-4ced-ba60-f59e8bc3a6ba-headshot-f.png?width=256&height=256&crop=256:256,smart&s=dc5be2c1997e50c3f488eed5e13c32ee04f3c131",
				backgroundColor: "#CCF5E4",
				body: ct._("{=Put in the work to reap the rewards, well done :)}", [ct._param("=Put in the work to reap the rewards, well done :)", r.a.createElement("p", null, ct._("Put in the work to reap the rewards, well done :)", null, {
					hk: "C845L"
				})))], {
					hk: "1HMmhY"
				}),
				commentUrl: "/r/CryptoCurrency/comments/j2wq4g/new_moons_distribution_round_5_proposal/g78db1p/"
			}, {
				username: "surrender_the_juice",
				iconUrl: "https://styles.redditmedia.com/t5_2pgzrc/styles/profileIcon_snoocaaa8d76-1f36-4684-9138-a044bf75729b-headshot.png?width=256&height=256&crop=256:256,smart&s=e26a2fdf882f204727984e9698da40875dba0f09",
				backgroundColor: "#FFF7D7",
				body: ct._("{=Congratulations to all first time moon earners!}", [ct._param("=Congratulations to all first time moon earners!", r.a.createElement("p", null, ct._("Congratulations to all first time moon earners!", null, {
					hk: "3vYoJn"
				})))], {
					hk: "1ZJfJ4"
				}),
				commentUrl: "/r/CryptoCurrency/comments/qm65x3/new_moons_are_ready_round_19/hj7kyql/"
			}, {
				username: "Xenc",
				iconUrl: "https://styles.redditmedia.com/t5_20e6go/styles/profileIcon_snoof4795c3b-c9f3-4800-9348-f188c5aa3bcf-headshot-f.png?width=256&height=256&crop=256:256,smart&s=2e1eeaccbfba4308c7b2b963f638f94d587f7bed",
				backgroundColor: "#FEE1FB",
				badge: "r/FortNiteBR MOD",
				body: ct._("{=Community Points in r/FortniteBR have taken the subreddit to the next level. Milestones and the Leaderboard add fun layers to posting in r/FortniteBR by setting goals for regulars to achieve, while Weighted Polls give us a unique way of gathering feedback from those trusted by the community.}{=Use of Reddit Awards have increased noticeably since the addition of Community Points. People are using their Brick to award posts with not only Gold and Platinum, but also our previously underused Community Awards. You can see the buzz of excitement on distribution days, with the community coming together to congratulate top earners and welcome new users celebrating their first haul of Brick.}{=Community Points have also given us the power to offer custom perks directly to subreddit regulars without the need for Reddit's involvement. Experiments with Brick so far have included allowing holders to change the subreddit’s appearance during banner battles, flex their game stats in their user flair, and receive perks on third-party platforms such as Discord. None of this would have been possible without Community Points. The potential for Brick is huge and I can’t wait to see where it takes us next!}", [ct._param("=Community Points in r/FortniteBR have taken the subreddit to the next level. Milestones and the Leaderboard add fun layers to posting in r/FortniteBR by setting goals for regulars to achieve, while Weighted Polls give us a unique way of gathering feedback from those trusted by the community.", r.a.createElement("p", null, ct._("Community Points in r/FortniteBR have taken the subreddit to the next level. Milestones and the Leaderboard add fun layers to posting in r/FortniteBR by setting goals for regulars to achieve, while Weighted Polls give us a unique way of gathering feedback from those trusted by the community.", null, {
					hk: "YtpUA"
				}))), ct._param("=Use of Reddit Awards have increased noticeably since the addition of Community Points. People are using their Brick to award posts with not only Gold and Platinum, but also our previously underused Community Awards. You can see the buzz of excitement on distribution days, with the community coming together to congratulate top earners and welcome new users celebrating their first haul of Brick.", r.a.createElement("p", null, ct._("Use of Reddit Awards have increased noticeably since the addition of Community Points. People are using their Brick to award posts with not only Gold and Platinum, but also our previously underused Community Awards. You can see the buzz of excitement on distribution days, with the community coming together to congratulate top earners and welcome new users celebrating their first haul of Brick.", null, {
					hk: "1AZdSW"
				}))), ct._param("=Community Points have also given us the power to offer custom perks directly to subreddit regulars without the need for Reddit's involvement. Experiments with Brick so far have included allowing holders to change the subreddit’s appearance during banner battles, flex their game stats in their user flair, and receive perks on third-party platforms such as Discord. None of this would have been possible without Community Points. The potential for Brick is huge and I can’t wait to see where it takes us next!", r.a.createElement("p", null, ct._("Community Points have also given us the power to offer custom perks directly to subreddit regulars without the need for Reddit's involvement. Experiments with Brick so far have included allowing holders to change the subreddit’s appearance during banner battles, flex their game stats in their user flair, and receive perks on third-party platforms such as Discord. None of this would have been possible without Community Points. The potential for Brick is huge and I can’t wait to see where it takes us next!", null, {
					hk: "43M9z4"
				})))], {
					hk: "2FYAHz"
				})
			}, {
				username: "Kori_Dragon",
				iconUrl: "https://styles.redditmedia.com/t5_4c8p0m/styles/profileIcon_vtfqt933shp71.jpg?width=256&height=256&crop=256:256,smart&s=2f7eaac075b5d5d0ffc6a1fabb1d161a81d0f545",
				backgroundColor: "#D2F6FF",
				body: ct._("{=I earned my first amount of bricks today! :3}", [ct._param("=I earned my first amount of bricks today! :3", r.a.createElement("p", null, ct._("I earned my first amount of bricks today! :3", null, {
					hk: "3MOean"
				})))], {
					hk: "Vr82A"
				}),
				isRightSide: !0,
				commentUrl: "/r/FortNiteBR/comments/okfh0l/new_bricks_are_ready_round_15/h57xn5d/"
			}, {
				username: "SuitableMammoth",
				iconUrl: "https://styles.redditmedia.com/t5_vvan6/styles/profileIcon_lb7uloqw4tw41.jpg?width=256&height=256&crop=256:256,smart&s=c313e4f9c4726dab0992da71de408e6dd8ce4d64",
				backgroundColor: "#E7DFF3",
				body: ct._("{=Congrats! Your posts are QUALITY man}", [ct._param("=Congrats! Your posts are QUALITY man", r.a.createElement("p", null, ct._("Congrats! Your posts are QUALITY man", null, {
					hk: "2VKsBj"
				})))], {
					hk: "3A5OKs"
				}),
				commentUrl: "/r/FortNiteBR/comments/mchy68/new_bricks_are_ready_round_11/gs3slo4"
			}];
			var ht = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less"),
				pt = o.n(ht);
			const {
				fbt: yt
			} = o("./node_modules/fbt/lib/FbtPublic.js"), bt = ({
				className: e
			}) => r.a.createElement("div", {
				className: Object(_.a)(e, pt.a.background)
			}, r.a.createElement(wt, {
				anchorId: "vault"
			}), r.a.createElement("div", {
				className: pt.a.textSection
			}, r.a.createElement("div", {
				className: pt.a.textContainer
			}, r.a.createElement("h3", {
				className: pt.a.title
			}, yt._("The Vault", null, {
				hk: "3UIB9U"
			})), r.a.createElement("h2", {
				className: pt.a.subtitle
			}, yt._("Your crypto wallet within Reddit", null, {
				hk: "40R31x"
			})), r.a.createElement("p", {
				className: pt.a.body
			}, yt._("Community Points live on the blockchain, and your Vault is where you can view, send, and use Community Points within the Reddit app.", null, {
				hk: "1g3lSo"
			})))), r.a.createElement("div", {
				className: pt.a.imageSection
			}, r.a.createElement("div", {
				className: pt.a.imageContainer
			}, r.a.createElement("img", {
				className: pt.a.image,
				src: `${n.a.assetPath}/img/communityPoints/landingPage/vault_v2.png`
			}))));
			var ft = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				gt = o.n(ft);
			t.default = () => {
				const e = Object(i.e)(s.a),
					t = Object(l.a)();
				if (!e) return r.a.createElement(ge, null);
				const o = (e => {
					var t, o;
					return (null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.path) === u.a
				})(t);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: gt.a.container
				}, r.a.createElement(X, null), o ? r.a.createElement(D, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Ae, {
					className: gt.a.communityPointsSection
				}), r.a.createElement(Re, {
					className: gt.a.benefitsSection
				}), r.a.createElement("img", {
					className: gt.a.spiral,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/spiral_v2.png`
				}), r.a.createElement(Qe, {
					className: gt.a.featuresSection
				}), r.a.createElement(qe, {
					className: gt.a.faqSection
				}), r.a.createElement(bt, {
					className: gt.a.vaultSection
				}), r.a.createElement(dt, {
					className: gt.a.testimonialsSection
				}), r.a.createElement(De, {
					className: gt.a.cryptoFutureSection
				}), r.a.createElement(tt, {
					className: gt.a.joinWaitlistSection
				}))), !o && r.a.createElement(U, null))
			};
			const wt = ({
				anchorId: e
			}) => r.a.createElement("div", {
				className: gt.a.anchorParent
			}, r.a.createElement("a", {
				id: e,
				className: gt.a.anchor
			}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/old.m.less": function(e, t, o) {
			e.exports = {
				container: "wGpiitJeL95e_NSp-VYWo",
				title: "_1QFOHyE3KyrQei4X08YZrG",
				createVaultButton: "_3RSwchbf9fQWrjkGUnYqw2",
				fadeIn: "_2ashSgNv6fi7q6NVcCU4dt"
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return b
			})), o.d(t, "o", (function() {
				return f
			})), o.d(t, "a", (function() {
				return g
			})), o.d(t, "x", (function() {
				return w
			})), o.d(t, "f", (function() {
				return v
			})), o.d(t, "i", (function() {
				return k
			})), o.d(t, "q", (function() {
				return _
			})), o.d(t, "h", (function() {
				return P
			})), o.d(t, "z", (function() {
				return E
			})), o.d(t, "l", (function() {
				return C
			})), o.d(t, "n", (function() {
				return I
			})), o.d(t, "e", (function() {
				return R
			})), o.d(t, "d", (function() {
				return T
			})), o.d(t, "j", (function() {
				return S
			})), o.d(t, "p", (function() {
				return x
			})), o.d(t, "k", (function() {
				return M
			})), o.d(t, "r", (function() {
				return B
			})), o.d(t, "y", (function() {
				return j
			})), o.d(t, "u", (function() {
				return F
			})), o.d(t, "v", (function() {
				return D
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "w", (function() {
				return Y
			})), o.d(t, "s", (function() {
				return L
			})), o.d(t, "t", (function() {
				return q
			})), o.d(t, "g", (function() {
				return z
			})), o.d(t, "m", (function() {
				return U
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/reddit/featureFlags/index.ts"),
				a = o("./src/reddit/helpers/economics/sortBadges.ts"),
				r = o("./src/reddit/helpers/richTextJson/index.ts"),
				i = o("./src/reddit/models/Badge/index.ts"),
				s = o("./src/reddit/models/Badge/managementPage.ts"),
				l = o("./src/reddit/models/Payments/index.ts"),
				u = o("./src/reddit/models/Product/index.ts"),
				c = o("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				d = o("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = o("./src/reddit/selectors/commentSelector.ts"),
				h = o("./src/reddit/selectors/gold/powerups/index.ts"),
				p = o("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const y = [],
				b = (e, t) => {
					const o = e.economics.subredditPremium[t];
					if (o && o.status === d.a.Fetched) {
						const e = o.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				f = (e, t) => {
					const o = b(e, t);
					return o && o.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const w = (e, t) => {
					const o = e.economics.subredditPremium[t];
					if (o && o.status === d.a.Fetched) {
						const o = f(e, t),
							n = Date.now();
						return o && n < o ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				v = (e, t) => {
					const o = e.user.account,
						n = e.economics.subredditPremium[t];
					if (o && n && n.status === d.a.Fetched) {
						const n = ((e.users.appliedBadges[o.id] || {})[t] || y).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[s.a.Loyalty]: n.find(e => e.placement === i.a.First),
							[s.a.Achievement]: n.find(e => e.placement === i.a.Second),
							[s.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[s.a.Loyalty]: void 0,
						[s.a.Achievement]: void 0,
						[s.a.Cosmetic]: void 0
					}
				};

			function k(e, t) {
				return (null == e ? void 0 : e.length) ? Object(a.a)(e.map(e => t[e]).filter(Boolean)) : y
			}
			const _ = (e, t, o) => {
					var a;
					if (!n.d.spBadges(e)) return y;
					return k(null === (a = e.users.appliedBadges[o]) || void 0 === a ? void 0 : a[t], e.badges.models)
				},
				P = (e, t) => {
					const o = e.economics.subredditPremium[t.subredditId];
					if (o && o.status === d.a.Fetched) {
						const e = o.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const o = (e.economics.me.data.specialMemberships || {})[t];
				return !!(o && o.settings && o.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: o,
					subredditId: n
				} = t, a = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(o) && o.userId === a) return o;
				const r = e.badges.models,
					s = e.user.ownedBadges[n] || {},
					l = Object(i.e)(o) ? o.type : o.id;
				return Object.keys(s).map(e => r[e]).find(e => e && e.type === l)
			}

			function I(e, t, o, n) {
				const a = e.economics.subredditPremium[t];
				if (a && a.status === d.a.Fetched) {
					if (o === s.a.Loyalty || o === s.a.Achievement) return a.data.collections[o];
					if (o === s.a.Cosmetic && n) return a.data.collections[o][n]
				}
				return y
			}

			function R(e, t) {
				const o = I(e, t, s.a.Loyalty).find(e => "membership" === e.id);
				return o ? [].concat(o.locked, o.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : y
			}

			function T(e, t) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === d.a.Fetched) {
					const e = o.data.collections[s.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return y
			}

			function S(e, t) {
				return I(e, t, s.a.Cosmetic, s.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const x = e => {
				const t = [],
					o = e.economics.paymentSystems;
				if (o.status === c.a.Fetched && o.data.stripe && o.data.stripe.sources) {
					const e = o.data.stripe.sources;
					for (const o in e) {
						const n = e[o];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: o,
							type: l.a.SavedStripe
						})
					}
				}
				if (o.status === c.a.Fetched && o.data.braintree && o.data.braintree.sources) {
					const e = o.data.braintree.sources;
					for (const o in e) {
						const n = e[o];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var V;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(V || (V = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				N = (e, t) => {
					if (!t) return {};
					const o = A.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (o[e.currency] = e.price)
					});
					const n = b(e, t);
					return n && n.price && n.currency && (o[n.currency] = n.price), o
				},
				B = (e, t) => {
					var o, n, a, r;
					const i = (null === (r = null === (a = null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.crypto) || void 0 === n ? void 0 : n.points) || void 0 === a ? void 0 : a[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || A;
					return {
						prices: N(e, t),
						member: i.member || A.member,
						memberPlural: i.memberPlural || A.memberPlural,
						memberAlt: i.memberAlt || A.memberAlt,
						memberAltPlural: i.memberAltPlural || A.memberAltPlural,
						membership: i.membership || A.membership,
						membershipAlt: i.membershipAlt || A.membershipAlt
					}
				},
				j = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === c.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const o = e.user.ownedBadges[t] || {};
					return !!Object.keys(o).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === c.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				O = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				Y = (e, t) => {
					const o = t && e.economics.gifs[t];
					return !!o && o.hasGifProduct
				},
				L = (e, t, o) => {
					if (Object(h.r)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== o && Object(m.b)(e, {
						commentId: o
					});
					return !(!n || !Object(r.a)(n))
				},
				q = (e, t, o) => {
					if (!Object(p.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(h.s)(e, {
							subredditId: t
						})) return !0;
					const a = "replyToPost" !== o && Object(m.b)(e, {
						commentId: o
					});
					if (a && Object(r.b)(a)) return !0;
					const i = n.d.spGiphy(e),
						s = Y(e, t);
					return !(!i || !s) || i && s
				},
				z = (e, t, o) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[o]
					}
				},
				U = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.746edd5c32f14d278f7d.js.map