// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.94d7ace8c5868951fd7f.js
// Retrieved at 7/12/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-SubscriptionModal"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, r) {
			"use strict";
			var n = {
				single_source_shortest_paths: function(e, t, r) {
					var o = {},
						i = {};
					i[t] = 0;
					var s, a, u, d, c, l, f, h = n.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (u in a = (s = h.pop()).value, d = s.cost, c = e[a] || {}) c.hasOwnProperty(u) && (l = d + c[u], f = i[u], (void 0 === i[u] || f > l) && (i[u] = l, h.push(u, l), o[u] = a));
					if (void 0 !== r && void 0 === i[r]) {
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
		"./node_modules/qrcode/lib/browser.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/can-promise.js"),
				o = r("./node_modules/qrcode/lib/core/qrcode.js"),
				i = r("./node_modules/qrcode/lib/renderer/canvas.js"),
				s = r("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function a(e, t, r, i, s) {
				var a = [].slice.call(arguments, 1),
					u = a.length,
					d = "function" == typeof a[u - 1];
				if (!d && !n()) throw new Error("Callback required as last argument");
				if (!d) {
					if (u < 1) throw new Error("Too few arguments provided");
					return 1 === u ? (r = t, t = i = void 0) : 2 !== u || t.getContext || (i = r, r = t, t = void 0), new Promise((function(n, s) {
						try {
							var a = o.create(r, i);
							n(e(a, t, i))
						} catch (u) {
							s(u)
						}
					}))
				}
				if (u < 2) throw new Error("Too few arguments provided");
				2 === u ? (s = r, r = t, t = i = void 0) : 3 === u && (t.getContext && void 0 === s ? (s = i, i = void 0) : (s = i, i = r, r = t, t = void 0));
				try {
					var c = o.create(r, i);
					s(null, e(c, t, i))
				} catch (l) {
					s(l)
				}
			}
			t.create = o.create, t.toCanvas = a.bind(null, i.render), t.toDataURL = a.bind(null, i.renderToDataURL), t.toString = a.bind(null, (function(e, t, r) {
				return s.render(e, r)
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
				for (var t = Math.floor(e / 7) + 2, r = n(e), o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), i = [r - 7], s = 1; s < t - 1; s++) i[s] = i[s - 1] - o;
				return i.push(6), i.reverse()
			}, t.getPositions = function(e) {
				for (var r = [], n = t.getRowColCoords(e), o = n.length, i = 0; i < o; i++)
					for (var s = 0; s < o; s++) 0 === i && 0 === s || 0 === i && s === o - 1 || i === o - 1 && 0 === s || r.push([n[i], n[s]]);
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

			function s(e, r, n) {
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
				for (var t = e.size, n = 0, o = 0, i = 0, s = null, a = null, u = 0; u < t; u++) {
					o = i = 0, s = a = null;
					for (var d = 0; d < t; d++) {
						var c = e.get(u, d);
						c === s ? o++ : (o >= 5 && (n += r + (o - 5)), s = c, o = 1), (c = e.get(d, u)) === a ? i++ : (i >= 5 && (n += r + (i - 5)), a = c, i = 1)
					}
					o >= 5 && (n += r + (o - 5)), i >= 5 && (n += r + (i - 5))
				}
				return n
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, r = 0, o = 0; o < t - 1; o++)
					for (var i = 0; i < t - 1; i++) {
						var s = e.get(o, i) + e.get(o, i + 1) + e.get(o + 1, i) + e.get(o + 1, i + 1);
						4 !== s && 0 !== s || r++
					}
				return r * n
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, r = 0, n = 0, i = 0, s = 0; s < t; s++) {
					n = i = 0;
					for (var a = 0; a < t; a++) n = n << 1 & 2047 | e.get(s, a), a >= 10 && (1488 === n || 93 === n) && r++, i = i << 1 & 2047 | e.get(a, s), a >= 10 && (1488 === i || 93 === i) && r++
				}
				return r * o
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
				return Math.abs(Math.ceil(100 * t / r / 5) - 10) * i
			}, t.applyMask = function(e, t) {
				for (var r = t.size, n = 0; n < r; n++)
					for (var o = 0; o < r; o++) t.isReserved(o, n) || t.xor(o, n, s(e, o, n))
			}, t.getBestMask = function(e, r) {
				for (var n = Object.keys(t.Patterns).length, o = 0, i = 1 / 0, s = 0; s < n; s++) {
					r(s), t.applyMask(s, e);
					var a = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(s, e), a < i && (i = a, o = s)
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
					for (var s = 0; s < t.length; s++) r[i + s] ^= o.mul(e[i], t[s]);
				return r
			}, t.mod = function(e, t) {
				for (var r = n.from(e); r.length - t.length >= 0;) {
					for (var i = r[0], s = 0; s < t.length; s++) r[s] ^= o.mul(t[s], i);
					for (var a = 0; a < r.length && 0 === r[a];) a++;
					r = r.slice(a)
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
				s = r("./node_modules/qrcode/lib/core/bit-buffer.js"),
				a = r("./node_modules/qrcode/lib/core/bit-matrix.js"),
				u = r("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				d = r("./node_modules/qrcode/lib/core/finder-pattern.js"),
				c = r("./node_modules/qrcode/lib/core/mask-pattern.js"),
				l = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = r("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = r("./node_modules/qrcode/lib/core/version.js"),
				m = r("./node_modules/qrcode/lib/core/format-info.js"),
				g = r("./node_modules/qrcode/lib/core/mode.js"),
				p = r("./node_modules/qrcode/lib/core/segments.js"),
				v = r("./node_modules/qrcode/node_modules/isarray/index.js");

			function b(e, t, r) {
				var n, o, i = e.size,
					s = m.getEncodedBits(t, r);
				for (n = 0; n < 15; n++) o = 1 == (s >> n & 1), n < 6 ? e.set(n, 8, o, !0) : n < 8 ? e.set(n + 1, 8, o, !0) : e.set(i - 15 + n, 8, o, !0), n < 8 ? e.set(8, i - n - 1, o, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, o, !0) : e.set(8, 15 - n - 1, o, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function y(e, t, r) {
				var i = new s;
				r.forEach((function(t) {
					i.put(t.mode.bit, 4), i.put(t.getLength(), g.getCharCountIndicator(t.mode, e)), t.write(i)
				}));
				var a = 8 * (o.getSymbolTotalCodewords(e) - l.getTotalCodewordsCount(e, t));
				for (i.getLengthInBits() + 4 <= a && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var u = (a - i.getLengthInBits()) / 8, d = 0; d < u; d++) i.put(d % 2 ? 17 : 236, 8);
				return function(e, t, r) {
					for (var i = o.getSymbolTotalCodewords(t), s = l.getTotalCodewordsCount(t, r), a = i - s, u = l.getBlocksCount(t, r), d = u - i % u, c = Math.floor(i / u), h = Math.floor(a / u), m = h + 1, g = c - h, p = new f(g), v = 0, b = new Array(u), y = new Array(u), w = 0, _ = n.from(e.buffer), E = 0; E < u; E++) {
						var A = E < d ? h : m;
						b[E] = _.slice(v, v + A), y[E] = p.encode(b[E]), v += A, w = Math.max(w, A)
					}
					var j, T, x = n.alloc(i),
						B = 0;
					for (j = 0; j < w; j++)
						for (T = 0; T < u; T++) j < b[T].length && (x[B++] = b[T][j]);
					for (j = 0; j < g; j++)
						for (T = 0; T < u; T++) x[B++] = y[T][j];
					return x
				}(i, e, t)
			}

			function w(e, t, r, n) {
				var i;
				if (v(e)) i = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var s = t;
					if (!s) {
						var l = p.rawSplit(e);
						s = h.getBestVersionForData(l, r)
					}
					i = p.fromString(e, s || 40)
				}
				var f = h.getBestVersionForData(i, r);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else t = f;
				var m = y(t, r, i),
					g = o.getSymbolSize(t),
					w = new a(g);
				return function(e, t) {
						for (var r = e.size, n = d.getPositions(t), o = 0; o < n.length; o++)
							for (var i = n[o][0], s = n[o][1], a = -1; a <= 7; a++)
								if (!(i + a <= -1 || r <= i + a))
									for (var u = -1; u <= 7; u++) s + u <= -1 || r <= s + u || (a >= 0 && a <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === a || 6 === a) || a >= 2 && a <= 4 && u >= 2 && u <= 4 ? e.set(i + a, s + u, !0, !0) : e.set(i + a, s + u, !1, !0))
					}(w, t),
					function(e) {
						for (var t = e.size, r = 8; r < t - 8; r++) {
							var n = r % 2 == 0;
							e.set(r, 6, n, !0), e.set(6, r, n, !0)
						}
					}(w),
					function(e, t) {
						for (var r = u.getPositions(t), n = 0; n < r.length; n++)
							for (var o = r[n][0], i = r[n][1], s = -2; s <= 2; s++)
								for (var a = -2; a <= 2; a++) - 2 === s || 2 === s || -2 === a || 2 === a || 0 === s && 0 === a ? e.set(o + s, i + a, !0, !0) : e.set(o + s, i + a, !1, !0)
					}(w, t), b(w, r, 0), t >= 7 && function(e, t) {
						for (var r, n, o, i = e.size, s = h.getEncodedBits(t), a = 0; a < 18; a++) r = Math.floor(a / 3), n = a % 3 + i - 8 - 3, o = 1 == (s >> a & 1), e.set(r, n, o, !0), e.set(n, r, o, !0)
					}(w, t),
					function(e, t) {
						for (var r = e.size, n = -1, o = r - 1, i = 7, s = 0, a = r - 1; a > 0; a -= 2)
							for (6 === a && a--;;) {
								for (var u = 0; u < 2; u++)
									if (!e.isReserved(o, a - u)) {
										var d = !1;
										s < t.length && (d = 1 == (t[s] >>> i & 1)), e.set(o, a - u, d), -1 === --i && (s++, i = 7)
									} if ((o += n) < 0 || r <= o) {
									o -= n, n = -n;
									break
								}
							}
					}(w, m), isNaN(n) && (n = c.getBestMask(w, b.bind(null, w, r))), c.applyMask(n, w), b(w, r, n), {
						modules: w,
						version: t,
						errorCorrectionLevel: r,
						maskPattern: n,
						segments: i
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var r, n, s = i.M;
				return void 0 !== t && (s = i.from(t.errorCorrectionLevel, i.M), r = h.from(t.version), n = c.from(t.maskPattern), t.toSJISFunc && o.setToSJISFunction(t.toSJISFunc)), w(e, r, s, n)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				o = r("./node_modules/qrcode/lib/core/polynomial.js"),
				i = r("./node_modules/buffer/index.js").Buffer;

			function s(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			s.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = o.generateECPolynomial(this.degree)
			}, s.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = n.alloc(this.degree),
					r = i.concat([e, t], e.length + this.degree),
					s = o.mod(r, this.genPoly),
					a = this.degree - s.length;
				if (a > 0) {
					var u = n.alloc(this.degree);
					return s.copy(u, a), u
				}
				return s
			}, e.exports = s
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(n, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var o = new RegExp("^" + r + "$"),
				i = new RegExp("^[0-9]+$"),
				s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return o.test(e)
			}, t.testNumeric = function(e) {
				return i.test(e)
			}, t.testAlphanumeric = function(e) {
				return s.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, r) {
			var n = r("./node_modules/qrcode/lib/core/mode.js"),
				o = r("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = r("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				s = r("./node_modules/qrcode/lib/core/byte-data.js"),
				a = r("./node_modules/qrcode/lib/core/kanji-data.js"),
				u = r("./node_modules/qrcode/lib/core/regex.js"),
				d = r("./node_modules/qrcode/lib/core/utils.js"),
				c = r("./node_modules/dijkstrajs/dijkstra.js");

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

			function h(e) {
				var t, r, o = f(u.NUMERIC, n.NUMERIC, e),
					i = f(u.ALPHANUMERIC, n.ALPHANUMERIC, e);
				return d.isKanjiModeEnabled() ? (t = f(u.BYTE, n.BYTE, e), r = f(u.KANJI, n.KANJI, e)) : (t = f(u.BYTE_KANJI, n.BYTE, e), r = []), o.concat(i, t, r).sort((function(e, t) {
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
						return i.getBitsLength(e);
					case n.KANJI:
						return a.getBitsLength(e);
					case n.BYTE:
						return s.getBitsLength(e)
				}
			}

			function g(e, t) {
				var r, u = n.getBestModeForData(e);
				if ((r = n.from(t, u)) !== n.BYTE && r.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(u));
				switch (r !== n.KANJI || d.isKanjiModeEnabled() || (r = n.BYTE), r) {
					case n.NUMERIC:
						return new o(e);
					case n.ALPHANUMERIC:
						return new i(e);
					case n.KANJI:
						return new a(e);
					case n.BYTE:
						return new s(e)
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
							}, i = ["start"], s = 0; s < e.length; s++) {
							for (var a = e[s], u = [], d = 0; d < a.length; d++) {
								var c = a[d],
									l = "" + s + d;
								u.push(l), r[l] = {
									node: c,
									lastCount: 0
								}, o[l] = {};
								for (var f = 0; f < i.length; f++) {
									var h = i[f];
									r[h] && r[h].node.mode === c.mode ? (o[h][l] = m(r[h].lastCount + c.length, c.mode) - m(r[h].lastCount, c.mode), r[h].lastCount += c.length) : (r[h] && (r[h].lastCount = c.length), o[h][l] = m(c.length, c.mode) + 4 + n.getCharCountIndicator(c.mode, t))
								}
							}
							i = u
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
					}(h(e, d.isKanjiModeEnabled())), r), i = c.find_path(o.map, "start", "end"), s = [], a = 1; a < i.length - 1; a++) s.push(o.table[i[a]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(s))
			}, t.rawSplit = function(e) {
				return t.fromArray(h(e, d.isKanjiModeEnabled()))
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
				s = r("./node_modules/qrcode/lib/core/mode.js"),
				a = r("./node_modules/qrcode/lib/core/version-check.js"),
				u = r("./node_modules/qrcode/node_modules/isarray/index.js"),
				d = n.getBCHDigit(7973);

			function c(e, t) {
				return s.getCharCountIndicator(e, t) + 4
			}

			function l(e, t) {
				var r = 0;
				return e.forEach((function(e) {
					var n = c(e.mode, t);
					r += n + e.getBitsLength()
				})), r
			}
			t.from = function(e, t) {
				return a.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, r) {
				if (!a.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === r && (r = s.BYTE);
				var i = 8 * (n.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
				if (r === s.MIXED) return i;
				var u = i - c(r, e);
				switch (r) {
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
			}, t.getBestVersionForData = function(e, r) {
				var n, o = i.from(r, i.M);
				if (u(e)) {
					if (e.length > 1) return function(e, r) {
						for (var n = 1; n <= 40; n++) {
							if (l(e, n) <= t.getCapacity(n, r, s.MIXED)) return n
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
				if (!a.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; n.getBCHDigit(t) - d >= 0;) t ^= 7973 << n.getBCHDigit(t) - d;
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
				var s = n.getImageWidth(e.modules.size, o),
					a = i.getContext("2d"),
					u = a.createImageData(s, s);
				return n.qrToImageData(u.data, e, o),
					function(e, t, r) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
					}(a, i, s), a.putImageData(u, 0, 0), i
			}, t.renderToDataURL = function(e, r, n) {
				var o = n;
				void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
				var i = t.render(e, r, o),
					s = o.type || "image/png",
					a = o.rendererOpts || {};
				return i.toDataURL(s, a.quality)
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
				var s = n.getOptions(t),
					a = e.modules.size,
					u = e.modules.data,
					d = a + 2 * s.margin,
					c = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "",
					l = "<path " + o(s.color.dark, "stroke") + ' d="' + function(e, t, r) {
						for (var n = "", o = 0, s = !1, a = 0, u = 0; u < e.length; u++) {
							var d = Math.floor(u % t),
								c = Math.floor(u / t);
							d || s || (s = !0), e[u] ? (a++, u > 0 && d > 0 && e[u - 1] || (n += s ? i("M", d + r, .5 + c + r) : i("m", o, 0), o = 0, s = !1), d + 1 < t && e[u + 1] || (n += i("h", a), a = 0)) : o++
						}
						return n
					}(u, a, s.margin) + '"/>',
					f = 'viewBox="0 0 ' + d + " " + d + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + c + l + "</svg>\n";
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
				for (var o = r.modules.size, i = r.modules.data, s = t.getScale(o, n), a = Math.floor((o + 2 * n.margin) * s), u = n.margin * s, d = [n.color.light, n.color.dark], c = 0; c < a; c++)
					for (var l = 0; l < a; l++) {
						var f = 4 * (c * a + l),
							h = n.color.light;
						if (c >= u && l >= u && c < a - u && l < a - u) h = d[i[Math.floor((c - u) / s) * o + Math.floor((l - u) / s)] ? 1 : 0];
						e[f++] = h.r, e[f++] = h.g, e[f++] = h.b, e[f] = h.a
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
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? u(this, e) : function(e, t, r, n) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) {
						if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
						var o;
						o = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
						i.TYPED_ARRAY_SUPPORT ? o.__proto__ = i.prototype : o = d(e, o);
						return o
					}(e, t, r, n);
					if ("string" == typeof t) return function(e, t) {
						var r = 0 | l(t),
							n = a(e, r),
							o = n.write(t);
						o !== r && (n = n.slice(0, o));
						return n
					}(e, t);
					return function(e, t) {
						if (i.isBuffer(t)) {
							var r = 0 | s(t.length),
								n = a(e, r);
							return 0 === n.length ? n : (t.copy(n, 0, 0, r), n)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? a(e, 0) : d(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return d(e, t.data)
						}
						var o;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, r) : new i(e, t, r)
			}

			function s(e) {
				if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
				return 0 | e
			}

			function a(e, t) {
				var r;
				return i.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = i.prototype : (null === (r = e) && (r = new i(t)), r.length = t), r
			}

			function u(e, t) {
				var r = a(e, t < 0 ? 0 : 0 | s(t));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var n = 0; n < t; ++n) r[n] = 0;
				return r
			}

			function d(e, t) {
				for (var r = t.length < 0 ? 0 : 0 | s(t.length), n = a(e, r), o = 0; o < r; o += 1) n[o] = 255 & t[o];
				return n
			}

			function c(e, t) {
				var r;
				t = t || 1 / 0;
				for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
					if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
						if (!o) {
							if (r > 56319) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (s + 1 === n) {
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
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : c(e).length)
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
					}(c(t, e.length - r), e, r, n)
				}(this, e, t, r)
			}, i.prototype.slice = function(e, t) {
				var r, n = this.length;
				if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), i.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = i.prototype;
				else {
					var o = t - e;
					r = new i(o, void 0);
					for (var s = 0; s < o; ++s) r[s] = this[s + e]
				}
				return r
			}, i.prototype.copy = function(e, t, r, n) {
				if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (n < 0) throw new RangeError("sourceEnd out of bounds");
				n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
				var o, s = n - r;
				if (this === e && r < t && t < n)
					for (o = s - 1; o >= 0; --o) e[o + t] = this[o + r];
				else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (o = 0; o < s; ++o) e[o + t] = this[o + r];
				else Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
				return s
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
					var s = i.isBuffer(e) ? e : new i(e),
						a = s.length;
					for (o = 0; o < r - t; ++o) this[o + t] = s[o % a]
				}
				return this
			}, i.concat = function(e, t) {
				if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return a(null, 0);
				var r;
				if (void 0 === t)
					for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
				var o = u(null, t),
					s = 0;
				for (r = 0; r < e.length; ++r) {
					var d = e[r];
					if (!i.isBuffer(d)) throw new TypeError('"list" argument must be an Array of Buffers');
					d.copy(o, s), s += d.length
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
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/Governance/Token/index.tsx"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				l = r("./src/reddit/selectors/crypto/points.ts"),
				f = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				h = r.n(f);
			const m = Object(s.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(l.b)(e, r)
				}
			});
			t.a = Object(i.b)(m)((function(e) {
				var t;
				return o.a.createElement("div", {
					className: Object(a.a)(h.a.container, e.className, {
						[h.a.small]: e.small
					})
				}, o.a.createElement(d.a, {
					className: Object(a.a)(h.a.token, {
						[h.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(u.a)(Object(c.c)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
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
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				s = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				a = r.n(s);

			function u(e) {
				return o.a.createElement("div", {
					className: a.a.overview
				}, e.image, o.a.createElement("div", {
					className: a.a.description
				}, o.a.createElement("div", {
					className: a.a.grid
				}, o.a.createElement("div", {
					className: a.a.descriptionTitle,
					title: e.title
				}, e.title), o.a.createElement("div", {
					className: a.a.amountCell
				}, o.a.createElement(i.a, {
					amount: e.pointsAmount,
					className: a.a.amount,
					subredditId: e.subredditId
				})), o.a.createElement("div", {
					className: a.a.descriptionSubtitle
				}, e.subtitle), o.a.createElement("div", {
					className: a.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less": function(e, t, r) {
			e.exports = {
				membershipFrame: "_3d6f8dK5CmhujRBpVMFiAh",
				userIcon: "_3sGBEdz4F36DIwM99juN0m",
				frameImage: "_3QaiTrH550H-uSnZCB08V6",
				subredditIcon: "_3OskWJgwwVLSpS6iPc27P8"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "default", (function() {
				return R
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				u = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/endpoints/governance/crypto.ts"),
				f = r("./src/reddit/helpers/crypto/transactions.ts"),
				h = r("./src/reddit/helpers/governance/tokens.ts"),
				m = r("./src/reddit/helpers/trackers/crypto.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/models/Badge/managementPage.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/crypto/points.ts"),
				y = r("./src/reddit/selectors/gov.ts"),
				w = r("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				_ = r("./src/config.ts"),
				E = r("./src/reddit/components/SubredditIcon/index.tsx"),
				A = r("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				j = r("./src/reddit/selectors/economics.ts"),
				T = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				B = r("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				P = r("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				C = r.n(P);

			function I(e) {
				const t = Object(s.e)(t => Object(T.U)(t, e)),
					r = Object(s.e)(t => Object(j.r)(t, e.subredditId)),
					o = r.membershipAlt,
					a = r.prices.points,
					u = `${_.a.assetPath}/img/memberships/paywall/${t.name.toLowerCase()}/membership_frame.svg`;
				return i.a.createElement(B.a, {
					subredditId: e.subredditId,
					image: i.a.createElement("div", {
						className: C.a.membershipFrame
					}, i.a.createElement(A.a, {
						className: C.a.userIcon
					}), i.a.createElement("img", {
						className: C.a.frameImage,
						src: u
					}), i.a.createElement(E.b, {
						className: C.a.subredditIcon,
						subredditOrProfile: t
					})),
					title: o,
					subtitle: t.displayText,
					pointsAmount: a,
					pointsAmountSubtext: n.fbt._("Paid monthly, cancel anytime", null, {
						hk: "3vvJQd"
					})
				})
			}
			const M = e => i.a.createElement(x.b, {
				values: [
					[Object(x.c)(), e.transaction.arguments[0]],
					[Object(x.a)(), e.transaction.contractAddress]
				]
			});

			function R(e) {
				const {
					price: t,
					subredditId: r
				} = e, o = Object(s.d)(), _ = Object(g.a)(), {
					pointsDetails: E,
					walletAddress: A
				} = Object(s.e)(Object(a.c)({
					pointsDetails: e => Object(b.b)(e, r),
					walletAddress: t => Object(y.g)(t, e)
				}));
				if (!E) return null;
				const j = Object(f.d)(E.contracts.subscriptions.address, A, !0),
					T = Object(h.c)(t, E.displayConversion);
				return i.a.createElement(w.a, {
					approvalOverview: i.a.createElement(I, {
						subredditId: r
					}),
					approvalDetails: i.a.createElement(M, {
						transaction: j
					}),
					onClose: e.onClose,
					onTransactionSuccess: async i => {
						await o(Object(d.f)({
							subredditId: r,
							price: t,
							providerArgs: i
						})), _(Object(m.d)("subscribe", r, T)), o(Object(c.f)({
							duration: 1e4,
							kind: v.b.SuccessCommunityGreen,
							text: n.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), o(Object(u.c)({
							subredditId: r,
							initialView: p.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						_(Object(m.c)("subscribe", r, T, e))
					},
					subredditId: r,
					transaction: j,
					transactionIntent: Object(l.e)(r),
					transactionIsBlockedOnIOS: !0
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
		"./src/reddit/hooks/useApiContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/ApiContext.tsx");

			function i() {
				const {
					apiContext: e
				} = Object(n.useContext)(o.a);
				return e
			}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.he
				}) === n.zd
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.94d7ace8c5868951fd7f.js.map