// https://www.redditstatic.com/desktop2x/vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33.512d4af461dfb6919f2f.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"], {
		"./node_modules/dijkstrajs/dijkstra.js": function(e, t, r) {
			"use strict";
			var o = {
				single_source_shortest_paths: function(e, t, r) {
					var n = {},
						i = {};
					i[t] = 0;
					var a, s, u, d, l, c, f, h = o.PriorityQueue.make();
					for (h.push(t, 0); !h.empty();)
						for (u in s = (a = h.pop()).value, d = a.cost, l = e[s] || {}) l.hasOwnProperty(u) && (c = d + l[u], f = i[u], (void 0 === i[u] || f > c) && (i[u] = c, h.push(u, c), n[u] = s));
					if (void 0 !== r && void 0 === i[r]) {
						var g = ["Could not find a path from ", t, " to ", r, "."].join("");
						throw new Error(g)
					}
					return n
				},
				extract_shortest_path_from_predecessor_list: function(e, t) {
					for (var r = [], o = t; o;) r.push(o), e[o], o = e[o];
					return r.reverse(), r
				},
				find_path: function(e, t, r) {
					var n = o.single_source_shortest_paths(e, t, r);
					return o.extract_shortest_path_from_predecessor_list(n, r)
				},
				PriorityQueue: {
					make: function(e) {
						var t, r = o.PriorityQueue,
							n = {};
						for (t in e = e || {}, r) r.hasOwnProperty(t) && (n[t] = r[t]);
						return n.queue = [], n.sorter = e.sorter || r.default_sorter, n
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
			e.exports = o
		},
		"./node_modules/qrcode/lib/browser.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/can-promise.js"),
				n = r("./node_modules/qrcode/lib/core/qrcode.js"),
				i = r("./node_modules/qrcode/lib/renderer/canvas.js"),
				a = r("./node_modules/qrcode/lib/renderer/svg-tag.js");

			function s(e, t, r, i, a) {
				var s = [].slice.call(arguments, 1),
					u = s.length,
					d = "function" == typeof s[u - 1];
				if (!d && !o()) throw new Error("Callback required as last argument");
				if (!d) {
					if (u < 1) throw new Error("Too few arguments provided");
					return 1 === u ? (r = t, t = i = void 0) : 2 !== u || t.getContext || (i = r, r = t, t = void 0), new Promise((function(o, a) {
						try {
							var s = n.create(r, i);
							o(e(s, t, i))
						} catch (u) {
							a(u)
						}
					}))
				}
				if (u < 2) throw new Error("Too few arguments provided");
				2 === u ? (a = r, r = t, t = i = void 0) : 3 === u && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = r, r = t, t = void 0));
				try {
					var l = n.create(r, i);
					a(null, e(l, t, i))
				} catch (c) {
					a(c)
				}
			}
			t.create = n.create, t.toCanvas = s.bind(null, i.render), t.toDataURL = s.bind(null, i.renderToDataURL), t.toString = s.bind(null, (function(e, t, r) {
				return a.render(e, r)
			}))
		},
		"./node_modules/qrcode/lib/can-promise.js": function(e, t) {
			e.exports = function() {
				return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
			}
		},
		"./node_modules/qrcode/lib/core/alignment-pattern.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getRowColCoords = function(e) {
				if (1 === e) return [];
				for (var t = Math.floor(e / 7) + 2, r = o(e), n = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), i = [r - 7], a = 1; a < t - 1; a++) i[a] = i[a - 1] - n;
				return i.push(6), i.reverse()
			}, t.getPositions = function(e) {
				for (var r = [], o = t.getRowColCoords(e), n = o.length, i = 0; i < n; i++)
					for (var a = 0; a < n; a++) 0 === i && 0 === a || 0 === i && a === n - 1 || i === n - 1 && 0 === a || r.push([o[i], o[a]]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/alphanumeric-data.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/mode.js"),
				n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

			function i(e) {
				this.mode = o.ALPHANUMERIC, this.data = e
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
					var r = 45 * n.indexOf(this.data[t]);
					r += n.indexOf(this.data[t + 1]), e.put(r, 11)
				}
				this.data.length % 2 && e.put(n.indexOf(this.data[t]), 6)
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
			var o = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js");

			function n(e) {
				if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
				this.size = e, this.data = o.alloc(e * e), this.reservedBit = o.alloc(e * e)
			}
			n.prototype.set = function(e, t, r, o) {
				var n = e * this.size + t;
				this.data[n] = r, o && (this.reservedBit[n] = !0)
			}, n.prototype.get = function(e, t) {
				return this.data[e * this.size + t]
			}, n.prototype.xor = function(e, t, r) {
				this.data[e * this.size + t] ^= r
			}, n.prototype.isReserved = function(e, t) {
				return this.reservedBit[e * this.size + t]
			}, e.exports = n
		},
		"./node_modules/qrcode/lib/core/byte-data.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = r("./node_modules/qrcode/lib/core/mode.js");

			function i(e) {
				this.mode = n.BYTE, this.data = o.from(e)
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
			var o = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
				i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
			t.getBlocksCount = function(e, t) {
				switch (t) {
					case o.L:
						return n[4 * (e - 1) + 0];
					case o.M:
						return n[4 * (e - 1) + 1];
					case o.Q:
						return n[4 * (e - 1) + 2];
					case o.H:
						return n[4 * (e - 1) + 3];
					default:
						return
				}
			}, t.getTotalCodewordsCount = function(e, t) {
				switch (t) {
					case o.L:
						return i[4 * (e - 1) + 0];
					case o.M:
						return i[4 * (e - 1) + 1];
					case o.Q:
						return i[4 * (e - 1) + 2];
					case o.H:
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
				} catch (o) {
					return r
				}
			}
		},
		"./node_modules/qrcode/lib/core/finder-pattern.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;
			t.getPositions = function(e) {
				var t = o(e);
				return [
					[0, 0],
					[t - 7, 0],
					[0, t - 7]
				]
			}
		},
		"./node_modules/qrcode/lib/core/format-info.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/utils.js"),
				n = o.getBCHDigit(1335);
			t.getEncodedBits = function(e, t) {
				for (var r = e.bit << 3 | t, i = r << 10; o.getBCHDigit(i) - n >= 0;) i ^= 1335 << o.getBCHDigit(i) - n;
				return 21522 ^ (r << 10 | i)
			}
		},
		"./node_modules/qrcode/lib/core/galois-field.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = o.alloc(512),
				i = o.alloc(256);
			! function() {
				for (var e = 1, t = 0; t < 255; t++) n[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
				for (t = 255; t < 512; t++) n[t] = n[t - 255]
			}(), t.log = function(e) {
				if (e < 1) throw new Error("log(" + e + ")");
				return i[e]
			}, t.exp = function(e) {
				return n[e]
			}, t.mul = function(e, t) {
				return 0 === e || 0 === t ? 0 : n[i[e] + i[t]]
			}
		},
		"./node_modules/qrcode/lib/core/kanji-data.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/mode.js"),
				n = r("./node_modules/qrcode/lib/core/utils.js");

			function i(e) {
				this.mode = o.KANJI, this.data = e
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
					var r = n.toSJIS(this.data[t]);
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
				o = 3,
				n = 40,
				i = 10;

			function a(e, r, o) {
				switch (e) {
					case t.Patterns.PATTERN000:
						return (r + o) % 2 == 0;
					case t.Patterns.PATTERN001:
						return r % 2 == 0;
					case t.Patterns.PATTERN010:
						return o % 3 == 0;
					case t.Patterns.PATTERN011:
						return (r + o) % 3 == 0;
					case t.Patterns.PATTERN100:
						return (Math.floor(r / 2) + Math.floor(o / 3)) % 2 == 0;
					case t.Patterns.PATTERN101:
						return r * o % 2 + r * o % 3 == 0;
					case t.Patterns.PATTERN110:
						return (r * o % 2 + r * o % 3) % 2 == 0;
					case t.Patterns.PATTERN111:
						return (r * o % 3 + (r + o) % 2) % 2 == 0;
					default:
						throw new Error("bad maskPattern:" + e)
				}
			}
			t.isValid = function(e) {
				return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
			}, t.from = function(e) {
				return t.isValid(e) ? parseInt(e, 10) : void 0
			}, t.getPenaltyN1 = function(e) {
				for (var t = e.size, o = 0, n = 0, i = 0, a = null, s = null, u = 0; u < t; u++) {
					n = i = 0, a = s = null;
					for (var d = 0; d < t; d++) {
						var l = e.get(u, d);
						l === a ? n++ : (n >= 5 && (o += r + (n - 5)), a = l, n = 1), (l = e.get(d, u)) === s ? i++ : (i >= 5 && (o += r + (i - 5)), s = l, i = 1)
					}
					n >= 5 && (o += r + (n - 5)), i >= 5 && (o += r + (i - 5))
				}
				return o
			}, t.getPenaltyN2 = function(e) {
				for (var t = e.size, r = 0, n = 0; n < t - 1; n++)
					for (var i = 0; i < t - 1; i++) {
						var a = e.get(n, i) + e.get(n, i + 1) + e.get(n + 1, i) + e.get(n + 1, i + 1);
						4 !== a && 0 !== a || r++
					}
				return r * o
			}, t.getPenaltyN3 = function(e) {
				for (var t = e.size, r = 0, o = 0, i = 0, a = 0; a < t; a++) {
					o = i = 0;
					for (var s = 0; s < t; s++) o = o << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === o || 93 === o) && r++, i = i << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === i || 93 === i) && r++
				}
				return r * n
			}, t.getPenaltyN4 = function(e) {
				for (var t = 0, r = e.data.length, o = 0; o < r; o++) t += e.data[o];
				return Math.abs(Math.ceil(100 * t / r / 5) - 10) * i
			}, t.applyMask = function(e, t) {
				for (var r = t.size, o = 0; o < r; o++)
					for (var n = 0; n < r; n++) t.isReserved(n, o) || t.xor(n, o, a(e, n, o))
			}, t.getBestMask = function(e, r) {
				for (var o = Object.keys(t.Patterns).length, n = 0, i = 1 / 0, a = 0; a < o; a++) {
					r(a), t.applyMask(a, e);
					var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
					t.applyMask(a, e), s < i && (i = s, n = a)
				}
				return n
			}
		},
		"./node_modules/qrcode/lib/core/mode.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/version-check.js"),
				n = r("./node_modules/qrcode/lib/core/regex.js");
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
				if (!o.isValid(t)) throw new Error("Invalid version: " + t);
				return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
			}, t.getBestModeForData = function(e) {
				return n.testNumeric(e) ? t.NUMERIC : n.testAlphanumeric(e) ? t.ALPHANUMERIC : n.testKanji(e) ? t.KANJI : t.BYTE
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
				} catch (o) {
					return r
				}
			}
		},
		"./node_modules/qrcode/lib/core/numeric-data.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/mode.js");

			function n(e) {
				this.mode = o.NUMERIC, this.data = e.toString()
			}
			n.getBitsLength = function(e) {
				return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
			}, n.prototype.getLength = function() {
				return this.data.length
			}, n.prototype.getBitsLength = function() {
				return n.getBitsLength(this.data.length)
			}, n.prototype.write = function(e) {
				var t, r, o;
				for (t = 0; t + 3 <= this.data.length; t += 3) r = this.data.substr(t, 3), o = parseInt(r, 10), e.put(o, 10);
				var n = this.data.length - t;
				n > 0 && (r = this.data.substr(t), o = parseInt(r, 10), e.put(o, 3 * n + 1))
			}, e.exports = n
		},
		"./node_modules/qrcode/lib/core/polynomial.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = r("./node_modules/qrcode/lib/core/galois-field.js");
			t.mul = function(e, t) {
				for (var r = o.alloc(e.length + t.length - 1), i = 0; i < e.length; i++)
					for (var a = 0; a < t.length; a++) r[i + a] ^= n.mul(e[i], t[a]);
				return r
			}, t.mod = function(e, t) {
				for (var r = o.from(e); r.length - t.length >= 0;) {
					for (var i = r[0], a = 0; a < t.length; a++) r[a] ^= n.mul(t[a], i);
					for (var s = 0; s < r.length && 0 === r[s];) s++;
					r = r.slice(s)
				}
				return r
			}, t.generateECPolynomial = function(e) {
				for (var r = o.from([1]), i = 0; i < e; i++) r = t.mul(r, [1, n.exp(i)]);
				return r
			}
		},
		"./node_modules/qrcode/lib/core/qrcode.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = r("./node_modules/qrcode/lib/core/utils.js"),
				i = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = r("./node_modules/qrcode/lib/core/bit-buffer.js"),
				s = r("./node_modules/qrcode/lib/core/bit-matrix.js"),
				u = r("./node_modules/qrcode/lib/core/alignment-pattern.js"),
				d = r("./node_modules/qrcode/lib/core/finder-pattern.js"),
				l = r("./node_modules/qrcode/lib/core/mask-pattern.js"),
				c = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				f = r("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),
				h = r("./node_modules/qrcode/lib/core/version.js"),
				g = r("./node_modules/qrcode/lib/core/format-info.js"),
				m = r("./node_modules/qrcode/lib/core/mode.js"),
				p = r("./node_modules/qrcode/lib/core/segments.js"),
				v = r("./node_modules/qrcode/node_modules/isarray/index.js");

			function b(e, t, r) {
				var o, n, i = e.size,
					a = g.getEncodedBits(t, r);
				for (o = 0; o < 15; o++) n = 1 == (a >> o & 1), o < 6 ? e.set(o, 8, n, !0) : o < 8 ? e.set(o + 1, 8, n, !0) : e.set(i - 15 + o, 8, n, !0), o < 8 ? e.set(8, i - o - 1, n, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, n, !0) : e.set(8, 15 - o - 1, n, !0);
				e.set(i - 8, 8, 1, !0)
			}

			function y(e, t, r) {
				var i = new a;
				r.forEach((function(t) {
					i.put(t.mode.bit, 4), i.put(t.getLength(), m.getCharCountIndicator(t.mode, e)), t.write(i)
				}));
				var s = 8 * (n.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, t));
				for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(0);
				for (var u = (s - i.getLengthInBits()) / 8, d = 0; d < u; d++) i.put(d % 2 ? 17 : 236, 8);
				return function(e, t, r) {
					for (var i = n.getSymbolTotalCodewords(t), a = c.getTotalCodewordsCount(t, r), s = i - a, u = c.getBlocksCount(t, r), d = u - i % u, l = Math.floor(i / u), h = Math.floor(s / u), g = h + 1, m = l - h, p = new f(m), v = 0, b = new Array(u), y = new Array(u), w = 0, _ = o.from(e.buffer), E = 0; E < u; E++) {
						var A = E < d ? h : g;
						b[E] = _.slice(v, v + A), y[E] = p.encode(b[E]), v += A, w = Math.max(w, A)
					}
					var j, B, P = o.alloc(i),
						R = 0;
					for (j = 0; j < w; j++)
						for (B = 0; B < u; B++) j < b[B].length && (P[R++] = b[B][j]);
					for (j = 0; j < m; j++)
						for (B = 0; B < u; B++) P[R++] = y[B][j];
					return P
				}(i, e, t)
			}

			function w(e, t, r, o) {
				var i;
				if (v(e)) i = p.fromArray(e);
				else {
					if ("string" != typeof e) throw new Error("Invalid data");
					var a = t;
					if (!a) {
						var c = p.rawSplit(e);
						a = h.getBestVersionForData(c, r)
					}
					i = p.fromString(e, a || 40)
				}
				var f = h.getBestVersionForData(i, r);
				if (!f) throw new Error("The amount of data is too big to be stored in a QR Code");
				if (t) {
					if (t < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + ".\n")
				} else t = f;
				var g = y(t, r, i),
					m = n.getSymbolSize(t),
					w = new s(m);
				return function(e, t) {
						for (var r = e.size, o = d.getPositions(t), n = 0; n < o.length; n++)
							for (var i = o[n][0], a = o[n][1], s = -1; s <= 7; s++)
								if (!(i + s <= -1 || r <= i + s))
									for (var u = -1; u <= 7; u++) a + u <= -1 || r <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? e.set(i + s, a + u, !0, !0) : e.set(i + s, a + u, !1, !0))
					}(w, t),
					function(e) {
						for (var t = e.size, r = 8; r < t - 8; r++) {
							var o = r % 2 == 0;
							e.set(r, 6, o, !0), e.set(6, r, o, !0)
						}
					}(w),
					function(e, t) {
						for (var r = u.getPositions(t), o = 0; o < r.length; o++)
							for (var n = r[o][0], i = r[o][1], a = -2; a <= 2; a++)
								for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(n + a, i + s, !0, !0) : e.set(n + a, i + s, !1, !0)
					}(w, t), b(w, r, 0), t >= 7 && function(e, t) {
						for (var r, o, n, i = e.size, a = h.getEncodedBits(t), s = 0; s < 18; s++) r = Math.floor(s / 3), o = s % 3 + i - 8 - 3, n = 1 == (a >> s & 1), e.set(r, o, n, !0), e.set(o, r, n, !0)
					}(w, t),
					function(e, t) {
						for (var r = e.size, o = -1, n = r - 1, i = 7, a = 0, s = r - 1; s > 0; s -= 2)
							for (6 === s && s--;;) {
								for (var u = 0; u < 2; u++)
									if (!e.isReserved(n, s - u)) {
										var d = !1;
										a < t.length && (d = 1 == (t[a] >>> i & 1)), e.set(n, s - u, d), -1 === --i && (a++, i = 7)
									} if ((n += o) < 0 || r <= n) {
									n -= o, o = -o;
									break
								}
							}
					}(w, g), isNaN(o) && (o = l.getBestMask(w, b.bind(null, w, r))), l.applyMask(o, w), b(w, r, o), {
						modules: w,
						version: t,
						errorCorrectionLevel: r,
						maskPattern: o,
						segments: i
					}
			}
			t.create = function(e, t) {
				if (void 0 === e || "" === e) throw new Error("No input text");
				var r, o, a = i.M;
				return void 0 !== t && (a = i.from(t.errorCorrectionLevel, i.M), r = h.from(t.version), o = l.from(t.maskPattern), t.toSJISFunc && n.setToSJISFunction(t.toSJISFunc)), w(e, r, a, o)
			}
		},
		"./node_modules/qrcode/lib/core/reed-solomon-encoder.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),
				n = r("./node_modules/qrcode/lib/core/polynomial.js"),
				i = r("./node_modules/buffer/index.js").Buffer;

			function a(e) {
				this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
			}
			a.prototype.initialize = function(e) {
				this.degree = e, this.genPoly = n.generateECPolynomial(this.degree)
			}, a.prototype.encode = function(e) {
				if (!this.genPoly) throw new Error("Encoder not initialized");
				var t = o.alloc(this.degree),
					r = i.concat([e, t], e.length + this.degree),
					a = n.mod(r, this.genPoly),
					s = this.degree - a.length;
				if (s > 0) {
					var u = o.alloc(this.degree);
					return a.copy(u, s), u
				}
				return a
			}, e.exports = a
		},
		"./node_modules/qrcode/lib/core/regex.js": function(e, t) {
			var r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
				o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
			t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(o, "g"), t.NUMERIC = new RegExp("[0-9]+", "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
			var n = new RegExp("^" + r + "$"),
				i = new RegExp("^[0-9]+$"),
				a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
			t.testKanji = function(e) {
				return n.test(e)
			}, t.testNumeric = function(e) {
				return i.test(e)
			}, t.testAlphanumeric = function(e) {
				return a.test(e)
			}
		},
		"./node_modules/qrcode/lib/core/segments.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/core/mode.js"),
				n = r("./node_modules/qrcode/lib/core/numeric-data.js"),
				i = r("./node_modules/qrcode/lib/core/alphanumeric-data.js"),
				a = r("./node_modules/qrcode/lib/core/byte-data.js"),
				s = r("./node_modules/qrcode/lib/core/kanji-data.js"),
				u = r("./node_modules/qrcode/lib/core/regex.js"),
				d = r("./node_modules/qrcode/lib/core/utils.js"),
				l = r("./node_modules/dijkstrajs/dijkstra.js");

			function c(e) {
				return unescape(encodeURIComponent(e)).length
			}

			function f(e, t, r) {
				for (var o, n = []; null !== (o = e.exec(r));) n.push({
					data: o[0],
					index: o.index,
					mode: t,
					length: o[0].length
				});
				return n
			}

			function h(e) {
				var t, r, n = f(u.NUMERIC, o.NUMERIC, e),
					i = f(u.ALPHANUMERIC, o.ALPHANUMERIC, e);
				return d.isKanjiModeEnabled() ? (t = f(u.BYTE, o.BYTE, e), r = f(u.KANJI, o.KANJI, e)) : (t = f(u.BYTE_KANJI, o.BYTE, e), r = []), n.concat(i, t, r).sort((function(e, t) {
					return e.index - t.index
				})).map((function(e) {
					return {
						data: e.data,
						mode: e.mode,
						length: e.length
					}
				}))
			}

			function g(e, t) {
				switch (t) {
					case o.NUMERIC:
						return n.getBitsLength(e);
					case o.ALPHANUMERIC:
						return i.getBitsLength(e);
					case o.KANJI:
						return s.getBitsLength(e);
					case o.BYTE:
						return a.getBitsLength(e)
				}
			}

			function m(e, t) {
				var r, u = o.getBestModeForData(e);
				if ((r = o.from(t, u)) !== o.BYTE && r.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + o.toString(r) + ".\n Suggested mode is: " + o.toString(u));
				switch (r !== o.KANJI || d.isKanjiModeEnabled() || (r = o.BYTE), r) {
					case o.NUMERIC:
						return new n(e);
					case o.ALPHANUMERIC:
						return new i(e);
					case o.KANJI:
						return new s(e);
					case o.BYTE:
						return new a(e)
				}
			}
			t.fromArray = function(e) {
				return e.reduce((function(e, t) {
					return "string" == typeof t ? e.push(m(t, null)) : t.data && e.push(m(t.data, t.mode)), e
				}), [])
			}, t.fromString = function(e, r) {
				for (var n = function(e, t) {
						for (var r = {}, n = {
								start: {}
							}, i = ["start"], a = 0; a < e.length; a++) {
							for (var s = e[a], u = [], d = 0; d < s.length; d++) {
								var l = s[d],
									c = "" + a + d;
								u.push(c), r[c] = {
									node: l,
									lastCount: 0
								}, n[c] = {};
								for (var f = 0; f < i.length; f++) {
									var h = i[f];
									r[h] && r[h].node.mode === l.mode ? (n[h][c] = g(r[h].lastCount + l.length, l.mode) - g(r[h].lastCount, l.mode), r[h].lastCount += l.length) : (r[h] && (r[h].lastCount = l.length), n[h][c] = g(l.length, l.mode) + 4 + o.getCharCountIndicator(l.mode, t))
								}
							}
							i = u
						}
						for (f = 0; f < i.length; f++) n[i[f]].end = 0;
						return {
							map: n,
							table: r
						}
					}(function(e) {
						for (var t = [], r = 0; r < e.length; r++) {
							var n = e[r];
							switch (n.mode) {
								case o.NUMERIC:
									t.push([n, {
										data: n.data,
										mode: o.ALPHANUMERIC,
										length: n.length
									}, {
										data: n.data,
										mode: o.BYTE,
										length: n.length
									}]);
									break;
								case o.ALPHANUMERIC:
									t.push([n, {
										data: n.data,
										mode: o.BYTE,
										length: n.length
									}]);
									break;
								case o.KANJI:
									t.push([n, {
										data: n.data,
										mode: o.BYTE,
										length: c(n.data)
									}]);
									break;
								case o.BYTE:
									t.push([{
										data: n.data,
										mode: o.BYTE,
										length: c(n.data)
									}])
							}
						}
						return t
					}(h(e, d.isKanjiModeEnabled())), r), i = l.find_path(n.map, "start", "end"), a = [], s = 1; s < i.length - 1; s++) a.push(n.table[i[s]].node);
				return t.fromArray(function(e) {
					return e.reduce((function(e, t) {
						var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
						return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
					}), [])
				}(a))
			}, t.rawSplit = function(e) {
				return t.fromArray(h(e, d.isKanjiModeEnabled()))
			}
		},
		"./node_modules/qrcode/lib/core/utils.js": function(e, t) {
			var r, o = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
			t.getSymbolSize = function(e) {
				if (!e) throw new Error('"version" cannot be null or undefined');
				if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
				return 4 * e + 17
			}, t.getSymbolTotalCodewords = function(e) {
				return o[e]
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
			var o = r("./node_modules/qrcode/lib/core/utils.js"),
				n = r("./node_modules/qrcode/lib/core/error-correction-code.js"),
				i = r("./node_modules/qrcode/lib/core/error-correction-level.js"),
				a = r("./node_modules/qrcode/lib/core/mode.js"),
				s = r("./node_modules/qrcode/lib/core/version-check.js"),
				u = r("./node_modules/qrcode/node_modules/isarray/index.js"),
				d = o.getBCHDigit(7973);

			function l(e, t) {
				return a.getCharCountIndicator(e, t) + 4
			}

			function c(e, t) {
				var r = 0;
				return e.forEach((function(e) {
					var o = l(e.mode, t);
					r += o + e.getBitsLength()
				})), r
			}
			t.from = function(e, t) {
				return s.isValid(e) ? parseInt(e, 10) : t
			}, t.getCapacity = function(e, t, r) {
				if (!s.isValid(e)) throw new Error("Invalid QR Code version");
				void 0 === r && (r = a.BYTE);
				var i = 8 * (o.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, t));
				if (r === a.MIXED) return i;
				var u = i - l(r, e);
				switch (r) {
					case a.NUMERIC:
						return Math.floor(u / 10 * 3);
					case a.ALPHANUMERIC:
						return Math.floor(u / 11 * 2);
					case a.KANJI:
						return Math.floor(u / 13);
					case a.BYTE:
					default:
						return Math.floor(u / 8)
				}
			}, t.getBestVersionForData = function(e, r) {
				var o, n = i.from(r, i.M);
				if (u(e)) {
					if (e.length > 1) return function(e, r) {
						for (var o = 1; o <= 40; o++) {
							if (c(e, o) <= t.getCapacity(o, r, a.MIXED)) return o
						}
					}(e, n);
					if (0 === e.length) return 1;
					o = e[0]
				} else o = e;
				return function(e, r, o) {
					for (var n = 1; n <= 40; n++)
						if (r <= t.getCapacity(n, o, e)) return n
				}(o.mode, o.getLength(), n)
			}, t.getEncodedBits = function(e) {
				if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
				for (var t = e << 12; o.getBCHDigit(t) - d >= 0;) t ^= 7973 << o.getBCHDigit(t) - d;
				return e << 12 | t
			}
		},
		"./node_modules/qrcode/lib/renderer/canvas.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/renderer/utils.js");
			t.render = function(e, t, r) {
				var n = r,
					i = t;
				void 0 !== n || t && t.getContext || (n = t, t = void 0), t || (i = function() {
					try {
						return document.createElement("canvas")
					} catch (e) {
						throw new Error("You need to specify a canvas element")
					}
				}()), n = o.getOptions(n);
				var a = o.getImageWidth(e.modules.size, n),
					s = i.getContext("2d"),
					u = s.createImageData(a, a);
				return o.qrToImageData(u.data, e, n),
					function(e, t, r) {
						e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
					}(s, i, a), s.putImageData(u, 0, 0), i
			}, t.renderToDataURL = function(e, r, o) {
				var n = o;
				void 0 !== n || r && r.getContext || (n = r, r = void 0), n || (n = {});
				var i = t.render(e, r, n),
					a = n.type || "image/png",
					s = n.rendererOpts || {};
				return i.toDataURL(a, s.quality)
			}
		},
		"./node_modules/qrcode/lib/renderer/svg-tag.js": function(e, t, r) {
			var o = r("./node_modules/qrcode/lib/renderer/utils.js");

			function n(e, t) {
				var r = e.a / 255,
					o = t + '="' + e.hex + '"';
				return r < 1 ? o + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : o
			}

			function i(e, t, r) {
				var o = e + t;
				return void 0 !== r && (o += " " + r), o
			}
			t.render = function(e, t, r) {
				var a = o.getOptions(t),
					s = e.modules.size,
					u = e.modules.data,
					d = s + 2 * a.margin,
					l = a.color.light.a ? "<path " + n(a.color.light, "fill") + ' d="M0 0h' + d + "v" + d + 'H0z"/>' : "",
					c = "<path " + n(a.color.dark, "stroke") + ' d="' + function(e, t, r) {
						for (var o = "", n = 0, a = !1, s = 0, u = 0; u < e.length; u++) {
							var d = Math.floor(u % t),
								l = Math.floor(u / t);
							d || a || (a = !0), e[u] ? (s++, u > 0 && d > 0 && e[u - 1] || (o += a ? i("M", d + r, .5 + l + r) : i("m", n, 0), n = 0, a = !1), d + 1 < t && e[u + 1] || (o += i("h", s), s = 0)) : n++
						}
						return o
					}(u, s, a.margin) + '"/>',
					f = 'viewBox="0 0 ' + d + " " + d + '"',
					h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + c + "</svg>\n";
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
					o = e.width && e.width >= 21 ? e.width : void 0,
					n = e.scale || 4;
				return {
					width: o,
					scale: o ? 4 : n,
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
				var o = t.getScale(e, r);
				return Math.floor((e + 2 * r.margin) * o)
			}, t.qrToImageData = function(e, r, o) {
				for (var n = r.modules.size, i = r.modules.data, a = t.getScale(n, o), s = Math.floor((n + 2 * o.margin) * a), u = o.margin * a, d = [o.color.light, o.color.dark], l = 0; l < s; l++)
					for (var c = 0; c < s; c++) {
						var f = 4 * (l * s + c),
							h = o.color.light;
						if (l >= u && c >= u && l < s - u && c < s - u) h = d[i[Math.floor((l - u) / a) * n + Math.floor((c - u) / a)] ? 1 : 0];
						e[f++] = h.r, e[f++] = h.g, e[f++] = h.b, e[f] = h.a
					}
			}
		},
		"./node_modules/qrcode/lib/utils/typedarray-buffer.js": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/qrcode/node_modules/isarray/index.js");
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
			var n = i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

			function i(e, t, r) {
				return i.TYPED_ARRAY_SUPPORT || this instanceof i ? "number" == typeof e ? u(this, e) : function(e, t, r, o) {
					if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
					if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, o) {
						if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
						if (t.byteLength < r + (o || 0)) throw new RangeError("'length' is out of bounds");
						var n;
						n = void 0 === r && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, r) : new Uint8Array(t, r, o);
						i.TYPED_ARRAY_SUPPORT ? n.__proto__ = i.prototype : n = d(e, n);
						return n
					}(e, t, r, o);
					if ("string" == typeof t) return function(e, t) {
						var r = 0 | c(t),
							o = s(e, r),
							n = o.write(t);
						n !== r && (o = o.slice(0, n));
						return o
					}(e, t);
					return function(e, t) {
						if (i.isBuffer(t)) {
							var r = 0 | a(t.length),
								o = s(e, r);
							return 0 === o.length ? o : (t.copy(o, 0, 0, r), o)
						}
						if (t) {
							if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : d(e, t);
							if ("Buffer" === t.type && Array.isArray(t.data)) return d(e, t.data)
						}
						var n;
						throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
					}(e, t)
				}(this, e, t, r) : new i(e, t, r)
			}

			function a(e) {
				if (e >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
				return 0 | e
			}

			function s(e, t) {
				var r;
				return i.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = i.prototype : (null === (r = e) && (r = new i(t)), r.length = t), r
			}

			function u(e, t) {
				var r = s(e, t < 0 ? 0 : 0 | a(t));
				if (!i.TYPED_ARRAY_SUPPORT)
					for (var o = 0; o < t; ++o) r[o] = 0;
				return r
			}

			function d(e, t) {
				for (var r = t.length < 0 ? 0 : 0 | a(t.length), o = s(e, r), n = 0; n < r; n += 1) o[n] = 255 & t[n];
				return o
			}

			function l(e, t) {
				var r;
				t = t || 1 / 0;
				for (var o = e.length, n = null, i = [], a = 0; a < o; ++a) {
					if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
						if (!n) {
							if (r > 56319) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							if (a + 1 === o) {
								(t -= 3) > -1 && i.push(239, 191, 189);
								continue
							}
							n = r;
							continue
						}
						if (r < 56320) {
							(t -= 3) > -1 && i.push(239, 191, 189), n = r;
							continue
						}
						r = 65536 + (n - 55296 << 10 | r - 56320)
					} else n && (t -= 3) > -1 && i.push(239, 191, 189);
					if (n = null, r < 128) {
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

			function c(e) {
				return i.isBuffer(e) ? e.length : "undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" != typeof e && (e = "" + e), 0 === e.length ? 0 : l(e).length)
			}
			i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
				value: null,
				configurable: !0,
				enumerable: !1,
				writable: !1
			})), i.prototype.write = function(e, t, r) {
				void 0 === t ? (r = this.length, t = 0) : void 0 === r && "string" == typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0);
				var o = this.length - t;
				if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				return function(e, t, r, o) {
					return function(e, t, r, o) {
						for (var n = 0; n < o && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
						return n
					}(l(t, e.length - r), e, r, o)
				}(this, e, t, r)
			}, i.prototype.slice = function(e, t) {
				var r, o = this.length;
				if ((e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), (t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), t < e && (t = e), i.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = i.prototype;
				else {
					var n = t - e;
					r = new i(n, void 0);
					for (var a = 0; a < n; ++a) r[a] = this[a + e]
				}
				return r
			}, i.prototype.copy = function(e, t, r, o) {
				if (r || (r = 0), o || 0 === o || (o = this.length), t >= e.length && (t = e.length), t || (t = 0), o > 0 && o < r && (o = r), o === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (t < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
				if (o < 0) throw new RangeError("sourceEnd out of bounds");
				o > this.length && (o = this.length), e.length - t < o - r && (o = e.length - t + r);
				var n, a = o - r;
				if (this === e && r < t && t < o)
					for (n = a - 1; n >= 0; --n) e[n + t] = this[n + r];
				else if (a < 1e3 || !i.TYPED_ARRAY_SUPPORT)
					for (n = 0; n < a; ++n) e[n + t] = this[n + r];
				else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
				return a
			}, i.prototype.fill = function(e, t, r) {
				if ("string" == typeof e) {
					if ("string" == typeof t ? (t = 0, r = this.length) : "string" == typeof r && (r = this.length), 1 === e.length) {
						var o = e.charCodeAt(0);
						o < 256 && (e = o)
					}
				} else "number" == typeof e && (e &= 255);
				if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
				if (r <= t) return this;
				var n;
				if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
					for (n = t; n < r; ++n) this[n] = e;
				else {
					var a = i.isBuffer(e) ? e : new i(e),
						s = a.length;
					for (n = 0; n < r - t; ++n) this[n + t] = a[n % s]
				}
				return this
			}, i.concat = function(e, t) {
				if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return s(null, 0);
				var r;
				if (void 0 === t)
					for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
				var n = u(null, t),
					a = 0;
				for (r = 0; r < e.length; ++r) {
					var d = e[r];
					if (!i.isBuffer(d)) throw new TypeError('"list" argument must be an Array of Buffers');
					d.copy(n, a), a += d.length
				}
				return n
			}, i.byteLength = c, i.prototype._isBuffer = !0, i.isBuffer = function(e) {
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
		}
	}
]);
//# sourceMappingURL=vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33.512d4af461dfb6919f2f.js.map