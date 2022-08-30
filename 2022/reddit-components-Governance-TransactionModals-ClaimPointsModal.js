// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.1b094489c2f2a8d46275.js
// Retrieved at 8/30/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ClaimPointsModal"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, r) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, t, r) {
					var o = {},
						s = {};
					s[t] = 0;
					var a, i, c, d, l, u, f, m = n.PriorityQueue.make();
					for (m.push(t, 0); !m.empty();)
						for (c in i = (a = m.pop()).value, d = a.cost, l = e[i] || {}) l.hasOwnProperty(c) && (u = d + l[c], f = s[c], (void 0 === s[c] || f > u) && (s[c] = u, m.push(c, u), o[c] = i));
					if (void 0 !== r && void 0 === s[r]) {
						var p = ["Could not find a path from ", t, " to ", r, "."].join("");
						throw new Error(p)
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
				s = r("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = r("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function i(e, t, r, s, a) {
				var i = [].slice.call(arguments, 1),
					c = i.length,
					d = "function" == typeof i[c - 1];
				if (!d && !n()) throw new Error("Callback required as last argument");
				if (!d) {
					if (c < 1) throw new Error("Too few arguments provided");
					return 1 === c ? (r = t, t = s = void 0) : 2 !== c || t.getContext || (s = r, r = t, t = void 0), new Promise((function(n, a) {
						try {
							var i = o.create(r, s);
							n(e(i, t, s))
						} catch (c) {
							a(c)
						}
					}))
				}
				if (c < 2) throw new Error("Too few arguments provided");
				2 === c ? (a = r, r = t, t = s = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = s, s = void 0) : (a = s, s = r, r = t, t = void 0));
				try {
					var l = o.create(r, s);
					a(null, e(l, t, s))
				} catch (u) {
					a(u)
				}
			}
			t.create = o.create, t.toCanvas = i.bind(null, s.render), t.toDataURL = i.bind(null, s.renderToDataURL), t.toString = i.bind(null, (function(e, t, r) {
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
				for (var t = Math.floor(e / 7) + 2, r = n(e), o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), s = [r - 7], a = 1; a < t - 1; a++) s[a] = s[a - 1] - o;
				return s.push(6), s.reverse()
			}, t.getPositions = function(e) {
				for (var r = [], n = t.getRowColCoords(e), o = n.length, s = 0; s < o; s++)
					for (var a = 0; a < o; a++) 0 === s && 0 === a || 0 === s && a === o - 1 || s === o - 1 && 0 === a || r.push([n[s], n[a]]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function s(e) {
				this.mode = n.ALPHANUMERIC, this.data = e
			}
			s.getBitsLength = function(e) {
				return 11 * Math.floor(e / 2) + e % 2 * 6
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
				var t;
				for (t = 0; t + 2 <= this.data.length; t += 2) {
					var r = 45 * o.indexOf(this.data[t]);
					r += o.indexOf(this.data[t + 1]), e.put(r, 11)
				}
				this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
			}, e.exports = s
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

			function s(e) {
				this.mode = o.BYTE, this.data = n.from(e)
			}
			s.getBitsLength = function(e) {
				return 8 * e
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
				for (var t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/error-correction-code.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				s = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
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
						return s[4 * (e - 1) + 0];
					case n.M:
						return s[4 * (e - 1) + 1];
					case n.Q:
						return s[4 * (e - 1) + 2];
					case n.H:
						return s[4 * (e - 1) + 3];
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
				for (var r = e.bit << 3 | t, s = r << 10; n.getBCHDigit(s) - o >= 0;) s ^= 1335 << n.getBCHDigit(s) - o;
				return 21522 ^ (r << 10 | s)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = n.alloc(512),
				s = n.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) o[t] = e, s[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) o[t] = o[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return s[e]
			}, t.exp = function(e) {
				return o[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : o[s[e] + s[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/utils.js");

			function s(e) {
				this.mode = n.KANJI, this.data = e
			}
			s.getBitsLength = function(e) {
				return 13 * e
			}, s.prototype.getLength = function() {
				return this.data.length
			}, s.prototype.getBitsLength = function() {
				return s.getBitsLength(this.data.length)
			}, s.prototype.write = function(e) {
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
			}, e.exports = s
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
				s = 10;

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
				for (var t = e.size, n = 0, o = 0, s = 0, a = null, i = null, c = 0; c < t; c++) {
					o = s = 0, a = i = null;
					for (var d = 0; d < t; d++) {
						var l = e.get(c, d);
						l === a ? o++ : (o >= 5 && (n += r + (o - 5)), a = l, o = 1), (l = e.get(d, c)) === i ? s++ : (s >= 5 && (n += r + (s - 5)), i = l, s = 1)
					}
					o >= 5 && (n += r + (o - 5)), s >= 5 && (n += r + (s - 5))
				}
				return n
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, r = 0, o = 0; o < t - 1; o++)
					for (var s = 0; s < t - 1; s++) {
						var a = e.get(o, s) + e.get(o, s + 1) + e.get(o + 1, s) + e.get(o + 1, s + 1);
						4 !== a && 0 !== a || r++
					}
				return r * n
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, r = 0, n = 0, s = 0, a = 0; a < t; a++) {
					n = s = 0;
					for (var i = 0; i < t; i++) n = n << 1 & 2047 | e.get(a, i), i >= 10 && (1488 === n || 93 === n) && r++, s = s << 1 & 2047 | e.get(i, a), i >= 10 && (1488 === s || 93 === s) && r++
				}
				return r * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
				return Math.abs(Math.ceil(100 * t / r / 5) - 10) * s
			}, t.applyMask = function(e, t) {
				for (var r = t.size, n = 0; n < r; n++)
					for (var o = 0; o < r; o++) t.isReserved(o, n) || t.xor(o, n, a(e, o, n))
			}, t.getBestMask = function(e, r) {
				for (var n = Object.keys(t.Patterns).length, o = 0, s = 1 / 0, a = 0; a < n; a++) {
					r(a), t.applyMask(a, e);
					var i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), i < s && (s = i, o = a)
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
				for (var r = n.alloc(e.length + t.length - 1), s = 0; s < e.length; s++)
					for (var a = 0; a < t.length; a++) r[s + a] ^= o.mul(e[s], t[a]);
				return r
			}, t.mod = function(e, t) {
				for (var r = n.from(e); r.length - t.length >= 0;) {
					for (var s = r[0], a = 0; a < t.length; a++) r[a] ^= o.mul(t[a], s);
					for (var i = 0; i < r.length && 0 === r[i];) i++;
					r = r.slice(i)
				}
				return r
			}, t.generateECPolynomial = function(e) {
				for (var r = n.from([1]), s = 0; s < e; s++) r = t.mul(r, [1, o.exp(s)]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/utils.js"),
				s = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = r("./node_modules/qrcode/lib/core/bit-buffer.js"),
				i = r("./node_modules/qrcode/lib/core/bit-matrix.js"),
				c = r("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				d = r("./node_modules/qrcode/lib/core/finder-pattern.js"),
				l = r("./node_modules/qrcode/lib/core/mask-pattern.js"),
				u = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = r("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				m = r("./node_modules/qrcode/lib/core/version.js"),
				p = r("./node_modules/qrcode/lib/core/format-info.js"),
				h = r("./node_modules/qrcode/lib/core/mode.js"),
				g = r("./node_modules/qrcode/lib/core/segments.js"),
				b = r("./node_modules/qrcode/node_modules/isarray/index.js");

			function v(e, t, r) {
				var n, o, s = e.size,
					a = p.getEncodedBits(t, r);
				for (n = 0; n < 15; n++) o = 1 == (a >> n & 1), n < 6 ? e.set(n, 8, o, !0) : n < 8 ? e.set(n + 1, 8, o, !0) : e.set(s - 15 + n, 8, o, !0), n < 8 ? e.set(8, s - n - 1, o, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, o, !0) : e.set(8, 15 - n - 1, o, !0);
				e.set(s - 8, 8, 1, !0)
			}

			function y(e, t, r) {
				var s = new a;
				r.forEach((function(t) {
					s.put(t.mode.bit, 4), s.put(t.getLength(), h.getCharCountIndicator(t.mode, e)), t.write(s)
				}));
				var i = 8 * (o.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t));
				for (s.getLengthInBits() + 4 <= i && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(0);
				for (var c = (i - s.getLengthInBits()) / 8, d = 0; d < c; d++) s.put(d % 2 ? 17 : 236, 8);
				return function(e, t, r) {
					for (var s = o.getSymbolTotalCodewords(t), a = u.getTotalCodewordsCount(t, r), i = s - a, c = u.getBlocksCount(t, r), d = c - s % c, l = Math.floor(s / c), m = Math.floor(i / c), p = m + 1, h = l - m, g = new f(h), b = 0, v = new Array(c), y = new Array(c), w = 0, _ = n.from(e.buffer), E = 0; E < c; E++) {
						var x = E < d ? m : p;
						v[E] = _.slice(b, b + x), y[E] = g.encode(v[E]), b += x, w = Math.max(w, x)
					}
					var j, C, T = n.alloc(s),
						N = 0;
					for (j = 0; j < w; j++)
						for (C = 0; C < c; C++) j < v[C].length && (T[N++] = v[C][j]);
					for (j = 0; j < h; j++)
						for (C = 0; C < c; C++) T[N++] = y[C][j];
					return T
				}(s, e, t)
			}

			function w(e, t, r, n) {
				var s;
				if (b(e)) s = g.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var u = g.rawSplit(e);
						a = m.getBestVersionForData(u, r)
					}
					s = g.fromString(e, a || 40)
				}
				var f = m.getBestVersionForData(s, r);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else t = f;
				var p = y(t, r, s),
					h = o.getSymbolSize(t),
					w = new i(h);
				return function(e, t) {
						for (var r = e.size, n = d.getPositions(t), o = 0; o < n.length; o++)
							for (var s = n[o][0], a = n[o][1], i = -1; i <= 7; i++)
								if (!(s + i <= -1 || r <= s + i))
									for (var c = -1; c <= 7; c++) a + c <= -1 || r <= a + c || (i >= 0 && i <= 6 && (0 === c || 6 === c) || c >= 0 && c <= 6 && (0 === i || 6 === i) || i >= 2 && i <= 4 && c >= 2 && c <= 4 ? e.set(s + i, a + c, !0, !0) : e.set(s + i, a + c, !1, !0))
					}(w, t),
					function(e) {
						for (var t = e.size, r = 8; r < t - 8; r++) {
							var n = r % 2 == 0;
							e.set(r, 6, n, !0), e.set(6, r, n, !0)
						}
					}(w),
					function(e, t) {
						for (var r = c.getPositions(t), n = 0; n < r.length; n++)
							for (var o = r[n][0], s = r[n][1], a = -2; a <= 2; a++)
								for (var i = -2; i <= 2; i++) - 2 === a || 2 === a || -2 === i || 2 === i || 0 === a && 0 === i ? e.set(o + a, s + i, !0, !0) : e.set(o + a, s + i, !1, !0)
					}(w, t), v(w, r, 0), t >= 7 && function(e, t) {
						for (var r, n, o, s = e.size, a = m.getEncodedBits(t), i = 0; i < 18; i++) r = Math.floor(i / 3), n = i % 3 + s - 8 - 3, o = 1 == (a >> i & 1), e.set(r, n, o, !0), e.set(n, r, o, !0)
					}(w, t),
					function(e, t) {
						for (var r = e.size, n = -1, o = r - 1, s = 7, a = 0, i = r - 1; i > 0; i -= 2)
							for (6 === i && i--;;) {
								for (var c = 0; c < 2; c++)
									if (!e.isReserved(o, i - c)) {
										var d = !1;
										a < t.length && (d = 1 == (t[a] >>> s & 1)), e.set(o, i - c, d), -1 === --s && (a++, s = 7)
									} if ((o += n) < 0 || r <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(w, p), isNaN(n) && (n = l.getBestMask(w, v.bind(null, w, r))), l.applyMask(n, w), v(w, r, n), {
						modules: w,
						version: t,
						errorCorrectionLevel: r,
						maskPattern: n,
						segments: s
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var r, n, a = s.M;
				return void 0 !== t && (a = s.from(t.errorCorrectionLevel, s.M), r = m.from(t.version), n = l.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), w(e, r, a, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/polynomial.js"),
				s = r("./node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = n.alloc(this.degree),
					r = s.concat([e, t], e.length + this.degree),
					a = o.mod(r, this.genPoly),
					i = this.degree - a.length;
				if (i > 0) {
					var c = n.alloc(this.degree);
					return a.copy(c, i), c
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + r + "$"),
				s = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return o.test(e)
			}, t.testNumeric = function(e) {
				return s.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/numeric-data.js"),
				s = r("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = r("./node_modules/qrcode/lib/core/byte-data.js"),
				i = r("./node_modules/qrcode/lib/core/kanji-data.js"),
				c = r("./node_modules/qrcode/lib/core/regex.js"),
				d = r("./node_modules/qrcode/lib/core/utils.js"),
				l = r("./node_modules/dijkstrajs/dijkstra.js");

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

			function m(e) {
				var t, r, o = f(c.NUMERIC, n.NUMERIC, e),
					s = f(c.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return d.isKanjiModeEnabled() ? (t = f(c.BYTE, n.BYTE, e), r = f(c.KANJI, n.KANJI, e)) : (t = f(c.BYTE_KANJI, n.BYTE, e), r = []), o.concat(s, t, r).sort((function(e, t) {
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
						return o.getBitsLength(e);
					case n.ALPHANUMERIC:
						return s.getBitsLength(e);
					case n.KANJI:
						return i.getBitsLength(e);
					case n.BYTE:
						return a.getBitsLength(e)
				}
			}

			function h(e, t) {
				var r, c = n.getBestModeForData(e);
				if ((r = n.from(t, c)) !== n.BYTE && r.bit < c.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(c));
				switch (r !== n.KANJI || d.isKanjiModeEnabled() || (r = n.BYTE), r) {
					case n.NUMERIC:
						return new o(e);
					case n.ALPHANUMERIC:
						return new s(e);
					case n.KANJI:
						return new i(e);
					case n.BYTE:
						return new a(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(h(t, null)) : t.data && e.push(h(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, r) {
				for (var o = function(e, t) {
						for (var r = {}, o = {
								start: {}
							}, s = ["start"], a = 0; a < e.length; a++) {
							for (var i = e[a], c = [], d = 0; d < i.length; d++) {
								var l = i[d],
									u = "" + a + d;
								c.push(u), r[u] = {
									node: l,
									lastCount: 0
								}, o[u] = {};
								for (var f = 0; f < s.length; f++) {
									var m = s[f];
									r[m] && r[m].node.mode === l.mode ? (o[m][u] = p(r[m].lastCount + l.length, l.mode) - p(r[m].lastCount, l.mode), r[m].lastCount += l.length) : (r[m] && (r[m].lastCount = l.length), o[m][u] = p(l.length, l.mode) + 4 + n.getCharCountIndicator(l.mode, t))
								}
							}
							s = c
						}
						for (f = 0; f < s.length; f++) o[s[f]].end = 0;
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
					}(m(e, d.isKanjiModeEnabled())), r), s = l.find_path(o.map, "start", "end"), a = [], i = 1; i < s.length - 1; i++) a.push(o.table[s[i]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(a))
			}, t.rawSplit = function(e) {
				return t.fromArray(m(e, d.isKanjiModeEnabled()))
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
				s = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = r("./node_modules/qrcode/lib/core/mode.js"),
				i = r("./node_modules/qrcode/lib/core/version-check.js"),
				c = r("./node_modules/qrcode/node_modules/isarray/index.js"),
				d = n.getBCHDigit(7973);

			function l(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function u(e, t) {
				var r = 0;
				return e.forEach((function(e) {
					var n = l(e.mode, t);
					r += n + e.getBitsLength()
				})), r
			}
			t.from = function(e, t) {
				return i.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, r) {
				if (!i.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === r && (r = a.BYTE);
				var s = 8 * (n.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (r === a.MIXED) return s;
				var c = s - l(r, e);
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
				var n, o = s.from(r, s.M);
				if (c(e)) {
					if (e.length > 1) return function(e, r) {
						for (var n = 1; n <= 40; n++) {
							if (u(e, n) <= t.getCapacity(n, r, a.MIXED)) return n
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
				if (!i.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; n.getBCHDigit(t) - d >= 0;) t ^= 7973 << n.getBCHDigit(t) - d;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, r) {
				var o = r,
					s = t;
				void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (s = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), o = n.getOptions(o);
				var a = n.getImageWidth(e.modules.size, o),
					i = s.getContext("2d"),
					c = i.createImageData(a, a);
				return n.qrToImageData(c.data, e, o),
					function(e, t, r) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
					}(i, s, a), i.putImageData(c, 0, 0), s
			}, t.renderToDataURL = function(e, r, n) {
				var o = n;
				void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
				var s = t.render(e, r, o),
					a = o.type || "image/png",
					i = o.rendererOpts || {};
				return s.toDataURL(a, i.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/renderer/utils.js");

			function o(e, t) {
				var r = e.a / 255,
					n = t + '="' + e.hex + '"';
				return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n
			}

			function s(e, t, r) {
				var n = e + t;
				return void 0 !== r && (n += " " + r), n
			}
			t.render = function(e, t, r) {
				var a = n.getOptions(t),
					i = e.modules.size,
					c = e.modules.data,
					d = i + 2 * a.margin,
					l = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "",
					u = "<path " + o(a.color.dark, "stroke") + ' d="' + function(e, t, r) {
						for (var n = "", o = 0, a = !1, i = 0, c = 0; c < e.length; c++) {
							var d = Math.floor(c % t),
								l = Math.floor(c / t);
							d || a || (a = !0), e[c] ? (i++, c > 0 && d > 0 && e[c - 1] || (n += a ? s("M", d + r, .5 + l + r) : s("m", o, 0), o = 0, a = !1), d + 1 < t && e[c + 1] || (n += s("h", i), i = 0)) : o++
						}
						return n
					}(c, i, a.margin) + '"/>',
					f = 'viewBox="0 0 ' + d + " " + d + '"',
					m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + u + "</svg>\n";
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
				for (var o = r.modules.size, s = r.modules.data, a = t.getScale(o, n), i = Math.floor((o + 2 * n.margin) * a), c = n.margin * a, d = [n.color.light, n.color.dark], l = 0; l < i; l++)
					for (var u = 0; u < i; u++) {
						var f = 4 * (l * i + u),
							m = n.color.light;
						if (l >= c && u >= c && l < i - c && u < i - c) m = d[s[Math.floor((l - c) / a) * o + Math.floor((u - c) / a)] ? 1 : 0];
						e[f++] = m.r, e[f++] = m.g, e[f++] = m.b, e[f] = m.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/qrcode/node_modules/isarray/index.js");
			s.TYPED_ARRAY_SUPPORT = function() {
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
			var o = s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function s(e, t, r) {
				return s.TYPED_ARRAY_SUPPORT || this instanceof s ? "number" == typeof e ? c(this, e) : function(e, t, r, n) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) {
						if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
						s.TYPED_ARRAY_SUPPORT ? o.__proto__ = s.prototype : o = d(e, o);
						return o
					}(e, t, r, n);
					if ("string" == typeof t) return function(e, t) {
						var r = 0 | u(t),
							n = i(e, r),
							o = n.write(t);
						o !== r && (n = n.slice(0, o));
						return n
					}(e, t);
					return function(e, t) {
						if (s.isBuffer(t)) {
							var r = 0 | a(t.length),
								n = i(e, r);
							return 0 === n.length ? n : (t.copy(n, 0, 0, r), n)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? i(e, 0) : d(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return d(e, t.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, r) : new s(e, t, r)
			}

			function a(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function i(e, t) {
				var r;
				return s.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = s.prototype : (null === (r = e) && (r = new s(t)), r.length = t), r
			}

			function c(e, t) {
				var r = i(e, t < 0 ? 0 : 0 | a(t));
				if (!s.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) r[n] = 0;
				return r
			}

			function d(e, t) {
				for (var r = t.length < 0 ? 0 : 0 | a(t.length), n = i(e, r), o = 0; o < r; o += 1) n[o] = 255 & t[o];
				return n
			}

			function l(e, t) {
				var r;
				t = t || 1 / 0;
				for (var n = e.length, o = null, s = [], a = 0; a < n; ++a) {
					if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
						if (!o) {
							if (r > 56319) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							if (a + 1 === n) {
								(t -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							o = r;
							continue
						}
						if (r < 56320) {
							(t -= 3) > -1 && s.push(239, 191, 189), o = r;
							continue
						}
						r = 65536 + (o - 55296 << 10 | r - 56320)
					} else o && (t -= 3) > -1 && s.push(239, 191, 189);
					if (o = null, r < 128) {
						if ((t -= 1) < 0) break;
						s.push(r)
					} else if (r < 2048) {
						if ((t -= 2) < 0) break;
						s.push(r >> 6 | 192, 63 & r | 128)
					} else if (r < 65536) {
						if ((t -= 3) < 0) break;
						s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
					} else {
						if (!(r < 1114112)) throw new Error("Invalid code point");
						if ((t -= 4) < 0) break;
						s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
					}
				}
				return s
			}

			function u(e) {
				return s.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : l(e).length)
			}
			s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), s.prototype.write = function(e, t, r) {
				void 0 === t ? (r = this.length, t = 0) : void 0 === r && "string" == typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0);
				var n = this.length - t;
				if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, r, n) {
					return function(e, t, r, n) {
						for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
						return o
					}(l(t, e.length - r), e, r, n)
				}(this, e, t, r)
			}, s.prototype.slice = function(e, t) {
				var r, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), s.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = s.prototype;
				else {
					var o = t - e;
					r = new s(o, void 0);
					for (var a = 0; a < o; ++a) r[a] = this[a + e]
				}
				return r
			}, s.prototype.copy = function(e, t, r, n) {
				if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
				var o, a = n - r;
				if (this === e && r < t && t < n)
					for (o = a - 1; o >= 0; --o) e[o + t] = this[o + r];
				else if (a < 1e3 || !s.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < a; ++o) e[o + t] = this[o + r];
				else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
				return a
			}, s.prototype.fill = function(e, t, r) {
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
					var a = s.isBuffer(e) ? e : new s(e),
						i = a.length;
					for (o = 0; o < r - t; ++o) this[o + t] = a[o % i]
				}
				return this
			}, s.concat = function(e, t) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return i(null, 0);
				var r;
				if (void 0 === t)
					for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
				var o = c(null, t),
					a = 0;
				for (r = 0; r < e.length; ++r) {
					var d = e[r];
					if (!s.isBuffer(d)) throw new TypeError('"list" argument must be an Array of Buffers');
					d.copy(o, a), a += d.length
				}
				return o
			}, s.byteLength = u, s.prototype._isBuffer = !0, s.isBuffer = function(e) {
				return !(null == e || !e._isBuffer)
			}, e.exports.alloc = function(e) {
				var t = new s(e);
				return t.fill(0), t
			}, e.exports.from = function(e) {
				return new s(e)
			}
		},
		"./node_modules/qrcode/node_modules/isarray/index.js": function(e, t) {
			var r = {}.toString;
			e.exports = Array.isArray || function(e) {
				return "[object Array]" == r.call(e)
			}
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t),
					s = new n.BigNumber(r.dividedBy(o)),
					a = new n.BigNumber("100").multipliedBy(s);
				return new n.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = r("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(o.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "h", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/config.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/reddit/models/Poll/index.ts"),
				f = r("./src/redditGQL/operations/PollVote.json"),
				m = r("./src/reddit/endpoints/governance/requester.ts");
			var p = r("./src/reddit/endpoints/governance/wallet.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/selectors/crypto/points.ts"),
				v = r("./src/reddit/actions/governance/constants.ts"),
				y = r("./src/reddit/actions/governance/errorToast.ts");
			const w = Object(o.a)(v.b),
				_ = Object(o.a)(v.c),
				E = Object(o.a)(v.e),
				x = (Object(o.a)(v.f), Object(o.a)(v.g), Object(o.a)(v.h)),
				j = Object(o.a)(v.i),
				C = Object(o.a)(v.j),
				T = Object(o.a)(v.k),
				N = Object(o.a)(v.q),
				A = Object(o.a)(v.r),
				I = Object(o.a)(v.s),
				O = Object(o.a)(v.t),
				B = Object(o.a)(v.u),
				M = Object(o.a)(v.v),
				P = Object(o.a)(v.w),
				R = Object(o.a)(v.x),
				S = (e, t) => async (r, n, o) => {
					let s, {
							apiContext: a,
							gqlContext: c
						} = o,
						p = n().polls.models[e];
					if (r(C({
							pollId: e
						})), (s = p.type === u.a.GA ? await ((e, t, r) => Object(l.a)(e, {
								...f,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(c(), e, t) : await
							function(e, t, r, n) {
								return Object(m.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(a(), p.subredditId, e, t)).ok) {
						if (p.type === u.a.GA) {
							const {
								options: e
							} = s.body.data.updatePostPollVoteState.poll;
							r(E({
								pollId: p.id,
								optionId: t,
								options: e
							}))
						} else r(T(s.body));
						const o = n();
						if ((p = o.polls.models[e]) && Object(u.d)(p)) {
							const {
								postId: e
							} = p, t = o.posts.models[e];
							t && t.voteState === g.a.notVoted && r(Object(i.kb)(e))
						}
					} else r(j({
						pollId: e,
						error: s.error || s.errors[0].message
					})), Object(y.a)(r, s.error || s.errors[0].messsage)
				}, q = (e, t) => async (r, o, i) => {
					let {
						apiContext: l
					} = i;
					var u;
					r(I());
					const f = o().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(m.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(l(), {
						...e,
						contentId: f
					});
					p.ok ? (r(O({
						...p.body,
						subredditId: e.subredditId
					})), r(Object(c.f)({
						kind: h.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(s.a)(e.amount)), n.fbt._param("tokenName", (null === (u = Object(b.b)(o(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(a.f)())) : (r(N({
						error: p.error
					})), Object(y.a)(r, p.error))
				}, k = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					t(M());
					const s = await Object(p.a)(o(), e);
					s.ok ? t(P(s.body)) : t(B({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (o, s, a) => new Promise((i, c) => {
					const d = Date.now() + n,
						l = () => {
							c(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const n = Date.now();
							await e(o, s, a);
							const f = await t(s);
							if (f) i();
							else if (!1 === f) c();
							else {
								Date.now() + Math.max(r - (Date.now() - n), 0) < d ? setTimeout(u, r) : l()
							}
						};
					u()
				})
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, r) {
			e.exports = {
				overview: "_3vbYFraj9qRr9wXp4mcPUn",
				description: "_1SZ6yxzmSfQKpV9QOquYaR",
				grid: "jh8B-AY4740kpxlHw2YDW",
				descriptionTitle: "iGBU2u1c8RwaU1r6hphWt",
				amountSubtext: "_28HHYVa7-RIY6X_ZjCpCAb",
				descriptionSubtitle: "_3nbUm4QjlldCfIOsi_zYWh",
				amountCell: "ftLHNRLY2TdwcJtKSvldG",
				amount: "_3sfSvH2g-yH3GQObK-yNFD"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				a = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				i = r.n(a);

			function c(e) {
				return o.a.createElement("div", {
					className: i.a.overview
				}, e.image, o.a.createElement("div", {
					className: i.a.description
				}, o.a.createElement("div", {
					className: i.a.grid
				}, o.a.createElement("div", {
					className: i.a.descriptionTitle,
					title: e.title
				}, e.title), o.a.createElement("div", {
					className: i.a.amountCell
				}, o.a.createElement(s.a, {
					amount: e.pointsAmount,
					className: i.a.amount,
					subredditId: e.subredditId
				})), o.a.createElement("div", {
					className: i.a.descriptionSubtitle
				}, e.subtitle), o.a.createElement("div", {
					className: i.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				subredditIcon: "_3OT024bIB7-_eUL8vmIzMN"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/reddit/actions/economics/claims/constants.ts");
			const u = Object(d.a)(l.a),
				f = Object(d.a)(l.b);
			var m = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				p = r("./src/reddit/actions/governance/index.ts"),
				h = r("./src/reddit/actions/toaster.ts"),
				g = r("./src/reddit/actions/util/pollActionForSuccess.ts"),
				b = r("./src/reddit/endpoints/governance/crypto.ts"),
				v = r("./src/reddit/helpers/crypto/transactions.ts"),
				y = r("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				w = r("./src/reddit/helpers/governance/tokens.ts"),
				_ = r("./src/reddit/helpers/trackers/crypto.ts"),
				E = r("./src/reddit/hooks/useTracking.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/crypto/claims.ts"),
				C = r("./src/reddit/selectors/crypto/points.ts"),
				T = r("./src/reddit/selectors/gov.ts"),
				N = r("./src/lib/addQueryParams/index.ts"),
				A = r("./src/reddit/icons/svgs/Close/index.tsx"),
				I = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/Governance/TransactionModals/Common/Bullet.tsx"),
				B = r("./src/reddit/components/Governance/TransactionModals/Common/QRCode.tsx"),
				M = r("./src/reddit/components/Governance/TransactionModals/CreateVaultModal/index.m.less"),
				P = r.n(M);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const S = Object(i.c)({
					userId: e => {
						const t = Object(I.k)(e);
						return t ? t.id : ""
					}
				}),
				q = Object(a.b)(S)((function(e) {
					const {
						onClose: t,
						userId: r
					} = e;
					return s.a.createElement("div", {
						className: P.a.container
					}, s.a.createElement("header", {
						className: P.a.header
					}, s.a.createElement("div", {
						className: P.a.title
					}, R._("Create Your Vault on Your Smartphone", null, {
						hk: "247Dqn"
					})), s.a.createElement(A.a, {
						className: P.a.closeButton,
						onClick: t
					})), s.a.createElement("div", {
						className: P.a.body
					}, s.a.createElement("section", {
						className: P.a.leftSection
					}, s.a.createElement("div", {
						className: P.a.sectionHeader
					}, R._("Use the mobile app to create a Vault", null, {
						hk: "4DKtAt"
					})), s.a.createElement("div", {
						className: P.a.content
					}, s.a.createElement(O.a, {
						index: "1"
					}, R._("Get the official Reddit app for iOS or Android", null, {
						hk: "420pUH"
					})), s.a.createElement(O.a, {
						index: "2"
					}, R._("Log in to your Reddit account", null, {
						hk: "3G7IZ2"
					})), s.a.createElement(O.a, {
						index: "3"
					}, R._("Open your Camera, scan the QR code & follow the URL", null, {
						hk: "FWSNM"
					})), s.a.createElement(O.a, {
						index: "4"
					}, R._("Or, open the Reddit app and tap your profile photo at the top. Then tap Vault, and follow the instructions", null, {
						hk: "3C5vxO"
					})))), s.a.createElement("section", {
						className: P.a.rightSection
					}, s.a.createElement(B.a, {
						url: Object(N.a)("http://www.reddit.com/vault/", {
							u: r
						}),
						scale: 5
					}))))
				}));
			Object(c.a)(q);
			var k = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				L = r("./src/reddit/components/SubredditIcon/index.tsx"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				U = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				Y = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				F = r("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/Approval.m.less"),
				H = r.n(F);

			function V(e) {
				const {
					subredditId: t,
					pointsDetails: r
				} = e, o = Object(a.e)(t => Object(j.b)(t, e)), i = o && o.pointsToClaim;
				if (!i) throw new Error("Expected claim amount to approve");
				const c = Object(a.e)(t => Object(D.V)(t, e));
				return s.a.createElement(Y.a, {
					subredditId: t,
					image: s.a.createElement(L.b, {
						className: H.a.subredditIcon,
						subredditOrProfile: c
					}),
					title: n.fbt._("Claim {pointsName}", [n.fbt._param("pointsName", r.name)], {
						hk: "zLhei"
					}),
					subtitle: n.fbt._("For your contributions to {subredditName}", [n.fbt._param("subredditName", c.displayText)], {
						hk: "tFIxU"
					}),
					pointsAmount: i
				})
			}
			const z = e => s.a.createElement(U.b, {
				values: [
					[n.fbt._("Karma earned", null, {
						hk: "46NXlD"
					}), e.transaction.arguments[2]],
					[Object(U.c)(), e.transaction.arguments[1]],
					[Object(U.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(c.a)((function(e) {
				const {
					onClose: t,
					subredditId: r
				} = e, o = Object(a.d)(), c = Object(E.a)(), {
					currentPointsAmount: d,
					nextPointsClaim: l,
					pointsDetails: N
				} = Object(a.e)(Object(i.c)({
					currentPointsAmount: t => Object(T.e)(t, e),
					nextPointsClaim: t => Object(j.b)(t, e),
					pointsDetails: t => Object(C.b)(t, e.subredditId)
				}));
				if (!N || !l) throw new Error("No available claim to make");
				if (!l.address) return s.a.createElement(q, {
					onClose: t
				});
				const A = Object(v.b)(N.contracts.distribution.address, l.round, l.address, l.userKarma, l.signature),
					I = e => {
						c(Object(_.c)("points_claim", r, N.displayConversion, e))
					},
					O = Object(w.c)(l.pointsToClaim, N.displayConversion);
				return s.a.createElement(k.a, {
					approvalOverview: s.a.createElement(V, {
						pointsDetails: N,
						subredditId: r
					}),
					approvalDetails: s.a.createElement(z, {
						transaction: A
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), o(Object(h.f)(Object(h.e)(n.fbt._("Processing claim...", null, {
							hk: "46c8dF"
						}), x.b.SuccessCommunity))), o(f({
							subredditId: r
						})), async function(e, t, r, n, o) {
							await Object(y.a)(t, r), await e(Object(g.a)(Object(p.h)({
								subredditId: n
							}), async e => {
								const t = Object(T.e)(e(), {
									subredditId: n
								});
								return o !== t || null
							})), await e(Object(m.b)({
								forceFetch: !0
							}))
						}(o, N, e.hash, r, d).then(() => {
							c(Object(_.d)("points_claim", r, O)), o(function(e) {
								return Object(h.f)(Object(h.e)(n.fbt._("Your {pointsName} are ready!", [n.fbt._param("pointsName", e)], {
									hk: "2LpLml"
								}), x.b.SuccessCommunityGreen))
							}(N.name))
						}).catch(e => {
							I(e.toString()), o(function(e) {
								return Object(h.f)(Object(h.e)(n.fbt._("Failed to claim your {pointsName}. Try again later", [n.fbt._param("pointsName", e)], {
									hk: "ch1Bl"
								}), x.b.Error))
							}(N.name))
						}).finally(() => {
							o(u({
								subredditId: r
							}))
						})
					},
					onTransactionFailure: I,
					subredditId: r,
					transaction: A,
					transactionIntent: Object(b.c)(r)
				})
			}))
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
				return w
			})), r.d(t, "c", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(o),
				a = r("./node_modules/raf/index.js"),
				i = r.n(a),
				c = r("./node_modules/react/index.js"),
				d = r.n(c),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				p = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = r.n(p);
			var g = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(m.a, {
						className: h.a.titleRow
					}, r), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(m.a, {
						className: h.a.buttonRow
					}, d.a.createElement(f.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				b = r("./src/reddit/controls/ErrorText/index.m.less"),
				v = r.n(b);
			class y extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
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
						className: t,
						errorModalBody: r,
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(v.a.wrapper, t)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, s), i && d.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const w = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: s = []
					} = e, a = s.length ? s : o ? [o] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(y, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(w, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
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
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/controls/ErrorText/index.tsx"),
				c = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(l);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = a.a.input("input", u.a),
				p = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					let {
						label: t,
						children: r,
						inputRef: n,
						className: a,
						isInvalid: i,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return o.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: i
						}),
						onClick: p
					}, o.a.createElement(m, f({
						"aria-invalid": i,
						innerRef: n
					}, c)), t && o.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), r)
				},
				g = e => {
					let {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...d
					} = e;
					const l = void 0 !== d.value && "" !== d.value;
					return o.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: p
					}, o.a.createElement(m, f({
						innerRef: n
					}, d)), t && o.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), r)
				},
				b = e => o.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
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
						errors: s = []
					} = this.props;
					return e.map((e, a) => o.a.createElement(h, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!s[a],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, a),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, o.a.createElement(d.b, {
						className: u.a.trash
					})), !!s[a] && o.a.createElement(i.b, {
						className: u.a.errorText
					}, s[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && r.length >= n) && !i;
					return o.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && c && o.a.createElement(b, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && o.a.createElement(b, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				o = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(s.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: o.mb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
					method: o.mb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
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
			}, {
				inputs: [{
					internalType: "address",
					name: "spender",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "approve",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				stateMutability: "nonpayable",
				type: "function"
			}, {
				inputs: [{
					internalType: "address",
					name: "from",
					type: "address"
				}, {
					internalType: "address",
					name: "to",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "transferFrom",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				stateMutability: "nonpayable",
				type: "function"
			}]
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function s(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(o).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/hooks/useApiContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/ApiContext.tsx");

			function s() {
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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
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
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = r.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/layout/row/Inline/index.m.less"),
				s = r.n(o);
			t.a = n.a.div("inlineRow", s.a)
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Ce
					}) === n.Qd
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.ze
					}) === n.Qd
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return f
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const o = [],
				s = {},
				a = (e, t) => {
					const r = m(e, t);
					if (r) return r.mainHeader
				},
				i = (e, t) => {
					const r = m(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				c = (e, t) => {
					const r = m(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const r = d(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = d(e, t);
					return r && r.amount || "0"
				},
				f = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				m = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ClaimPointsModal.1b094489c2f2a8d46275.js.map