// https://www.redditstatic.com/desktop2x/1.d0f48cd40ae06b54f855.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[1], {
		"./node_modules/@stablelib/binary/lib/binary.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/int/lib/int.js");

			function i(e, t, n) {
				return void 0 === t && (t = new Uint8Array(2)), void 0 === n && (n = 0), t[n + 0] = e >>> 8, t[n + 1] = e >>> 0, t
			}

			function s(e, t, n) {
				return void 0 === t && (t = new Uint8Array(2)), void 0 === n && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t
			}

			function o(e, t) {
				return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
			}

			function a(e, t) {
				return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
			}

			function c(e, t) {
				return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
			}

			function u(e, t) {
				return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
			}

			function l(e, t, n) {
				return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), t[n + 0] = e >>> 24, t[n + 1] = e >>> 16, t[n + 2] = e >>> 8, t[n + 3] = e >>> 0, t
			}

			function h(e, t, n) {
				return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), t[n + 0] = e >>> 0, t[n + 1] = e >>> 8, t[n + 2] = e >>> 16, t[n + 3] = e >>> 24, t
			}

			function d(e, t, n) {
				return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), l(e / 4294967296 >>> 0, t, n), l(e >>> 0, t, n + 4), t
			}

			function f(e, t, n) {
				return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), h(e >>> 0, t, n), h(e / 4294967296 >>> 0, t, n + 4), t
			}
			t.readInt16BE = function(e, t) {
				return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
			}, t.readUint16BE = function(e, t) {
				return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
			}, t.readInt16LE = function(e, t) {
				return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
			}, t.readUint16LE = function(e, t) {
				return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
			}, t.writeUint16BE = i, t.writeInt16BE = i, t.writeUint16LE = s, t.writeInt16LE = s, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = u, t.writeUint32BE = l, t.writeInt32BE = l, t.writeUint32LE = h, t.writeInt32LE = h, t.readInt64BE = function(e, t) {
				void 0 === t && (t = 0);
				var n = o(e, t),
					r = o(e, t + 4);
				return 4294967296 * n + r - 4294967296 * (r >> 31)
			}, t.readUint64BE = function(e, t) {
				return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
			}, t.readInt64LE = function(e, t) {
				void 0 === t && (t = 0);
				var n = c(e, t);
				return 4294967296 * c(e, t + 4) + n - 4294967296 * (n >> 31)
			}, t.readUint64LE = function(e, t) {
				void 0 === t && (t = 0);
				var n = u(e, t);
				return 4294967296 * u(e, t + 4) + n
			}, t.writeUint64BE = d, t.writeInt64BE = d, t.writeUint64LE = f, t.writeInt64LE = f, t.readUintBE = function(e, t, n) {
				if (void 0 === n && (n = 0), e % 8 != 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
				if (e / 8 > t.length - n) throw new Error("readUintBE: array is too short for the given bitLength");
				for (var r = 0, i = 1, s = e / 8 + n - 1; s >= n; s--) r += t[s] * i, i *= 256;
				return r
			}, t.readUintLE = function(e, t, n) {
				if (void 0 === n && (n = 0), e % 8 != 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
				if (e / 8 > t.length - n) throw new Error("readUintLE: array is too short for the given bitLength");
				for (var r = 0, i = 1, s = n; s < n + e / 8; s++) r += t[s] * i, i *= 256;
				return r
			}, t.writeUintBE = function(e, t, n, i) {
				if (void 0 === n && (n = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 != 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
				if (!r.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
				for (var s = 1, o = e / 8 + i - 1; o >= i; o--) n[o] = t / s & 255, s *= 256;
				return n
			}, t.writeUintLE = function(e, t, n, i) {
				if (void 0 === n && (n = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 != 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
				if (!r.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
				for (var s = 1, o = i; o < i + e / 8; o++) n[o] = t / s & 255, s *= 256;
				return n
			}, t.readFloat32BE = function(e, t) {
				return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
			}, t.readFloat32LE = function(e, t) {
				return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
			}, t.readFloat64BE = function(e, t) {
				return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
			}, t.readFloat64LE = function(e, t) {
				return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
			}, t.writeFloat32BE = function(e, t, n) {
				return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(n, e), t
			}, t.writeFloat32LE = function(e, t, n) {
				return void 0 === t && (t = new Uint8Array(4)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(n, e, !0), t
			}, t.writeFloat64BE = function(e, t, n) {
				return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(n, e), t
			}, t.writeFloat64LE = function(e, t, n) {
				return void 0 === t && (t = new Uint8Array(8)), void 0 === n && (n = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(n, e, !0), t
			}
		},
		"./node_modules/@stablelib/chacha/lib/chacha.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/binary/lib/binary.js"),
				i = n("./node_modules/@stablelib/wipe/lib/wipe.js"),
				s = 20;

			function o(e, t, n) {
				for (var i = 1634760805, o = 857760878, a = 2036477234, c = 1797285236, u = n[3] << 24 | n[2] << 16 | n[1] << 8 | n[0], l = n[7] << 24 | n[6] << 16 | n[5] << 8 | n[4], h = n[11] << 24 | n[10] << 16 | n[9] << 8 | n[8], d = n[15] << 24 | n[14] << 16 | n[13] << 8 | n[12], f = n[19] << 24 | n[18] << 16 | n[17] << 8 | n[16], p = n[23] << 24 | n[22] << 16 | n[21] << 8 | n[20], g = n[27] << 24 | n[26] << 16 | n[25] << 8 | n[24], b = n[31] << 24 | n[30] << 16 | n[29] << 8 | n[28], y = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], m = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], v = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], _ = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], w = i, j = o, E = a, O = c, S = u, I = l, P = h, x = d, R = f, A = p, N = g, T = b, C = y, U = m, L = v, M = _, D = 0; D < s; D += 2) S = (S ^= R = R + (C = (C ^= w = w + S | 0) >>> 16 | C << 16) | 0) >>> 20 | S << 12, I = (I ^= A = A + (U = (U ^= j = j + I | 0) >>> 16 | U << 16) | 0) >>> 20 | I << 12, P = (P ^= N = N + (L = (L ^= E = E + P | 0) >>> 16 | L << 16) | 0) >>> 20 | P << 12, x = (x ^= T = T + (M = (M ^= O = O + x | 0) >>> 16 | M << 16) | 0) >>> 20 | x << 12, P = (P ^= N = N + (L = (L ^= E = E + P | 0) >>> 24 | L << 8) | 0) >>> 25 | P << 7, x = (x ^= T = T + (M = (M ^= O = O + x | 0) >>> 24 | M << 8) | 0) >>> 25 | x << 7, I = (I ^= A = A + (U = (U ^= j = j + I | 0) >>> 24 | U << 8) | 0) >>> 25 | I << 7, S = (S ^= R = R + (C = (C ^= w = w + S | 0) >>> 24 | C << 8) | 0) >>> 25 | S << 7, I = (I ^= N = N + (M = (M ^= w = w + I | 0) >>> 16 | M << 16) | 0) >>> 20 | I << 12, P = (P ^= T = T + (C = (C ^= j = j + P | 0) >>> 16 | C << 16) | 0) >>> 20 | P << 12, x = (x ^= R = R + (U = (U ^= E = E + x | 0) >>> 16 | U << 16) | 0) >>> 20 | x << 12, S = (S ^= A = A + (L = (L ^= O = O + S | 0) >>> 16 | L << 16) | 0) >>> 20 | S << 12, x = (x ^= R = R + (U = (U ^= E = E + x | 0) >>> 24 | U << 8) | 0) >>> 25 | x << 7, S = (S ^= A = A + (L = (L ^= O = O + S | 0) >>> 24 | L << 8) | 0) >>> 25 | S << 7, P = (P ^= T = T + (C = (C ^= j = j + P | 0) >>> 24 | C << 8) | 0) >>> 25 | P << 7, I = (I ^= N = N + (M = (M ^= w = w + I | 0) >>> 24 | M << 8) | 0) >>> 25 | I << 7;
				r.writeUint32LE(w + i | 0, e, 0), r.writeUint32LE(j + o | 0, e, 4), r.writeUint32LE(E + a | 0, e, 8), r.writeUint32LE(O + c | 0, e, 12), r.writeUint32LE(S + u | 0, e, 16), r.writeUint32LE(I + l | 0, e, 20), r.writeUint32LE(P + h | 0, e, 24), r.writeUint32LE(x + d | 0, e, 28), r.writeUint32LE(R + f | 0, e, 32), r.writeUint32LE(A + p | 0, e, 36), r.writeUint32LE(N + g | 0, e, 40), r.writeUint32LE(T + b | 0, e, 44), r.writeUint32LE(C + y | 0, e, 48), r.writeUint32LE(U + m | 0, e, 52), r.writeUint32LE(L + v | 0, e, 56), r.writeUint32LE(M + _ | 0, e, 60)
			}

			function a(e, t, n, r, s) {
				if (void 0 === s && (s = 0), 32 !== e.length) throw new Error("ChaCha: key size must be 32 bytes");
				if (r.length < n.length) throw new Error("ChaCha: destination is shorter than source");
				var a, u;
				if (0 === s) {
					if (8 !== t.length && 12 !== t.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
					u = (a = new Uint8Array(16)).length - t.length, a.set(t, u)
				} else {
					if (16 !== t.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
					a = t, u = s
				}
				for (var l = new Uint8Array(64), h = 0; h < n.length; h += 64) {
					o(l, a, e);
					for (var d = h; d < h + 64 && d < n.length; d++) r[d] = n[d] ^ l[d - h];
					c(a, 0, u)
				}
				return i.wipe(l), 0 === s && i.wipe(a), r
			}

			function c(e, t, n) {
				for (var r = 1; n--;) r = r + (255 & e[t]) | 0, e[t] = 255 & r, r >>>= 8, t++;
				if (r > 0) throw new Error("ChaCha: counter overflow")
			}
			t.streamXOR = a, t.stream = function(e, t, n, r) {
				return void 0 === r && (r = 0), i.wipe(n), a(e, t, n, n, r)
			}
		},
		"./node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/chacha/lib/chacha.js"),
				i = n("./node_modules/@stablelib/poly1305/lib/poly1305.js"),
				s = n("./node_modules/@stablelib/wipe/lib/wipe.js"),
				o = n("./node_modules/@stablelib/binary/lib/binary.js"),
				a = n("./node_modules/@stablelib/constant-time/lib/constant-time.js");
			t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
			var c = new Uint8Array(16),
				u = function() {
					function e(e) {
						if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, e.length !== t.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
						this._key = new Uint8Array(e)
					}
					return e.prototype.seal = function(e, t, n, i) {
						if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
						var o = new Uint8Array(16);
						o.set(e, o.length - e.length);
						var a = new Uint8Array(32);
						r.stream(this._key, o, a, 4);
						var c, u = t.length + this.tagLength;
						if (i) {
							if (i.length !== u) throw new Error("ChaCha20Poly1305: incorrect destination length");
							c = i
						} else c = new Uint8Array(u);
						return r.streamXOR(this._key, o, t, c, 4), this._authenticate(c.subarray(c.length - this.tagLength, c.length), a, c.subarray(0, c.length - this.tagLength), n), s.wipe(o), c
					}, e.prototype.open = function(e, t, n, i) {
						if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
						if (t.length < this.tagLength) return null;
						var o = new Uint8Array(16);
						o.set(e, o.length - e.length);
						var c = new Uint8Array(32);
						r.stream(this._key, o, c, 4);
						var u = new Uint8Array(this.tagLength);
						if (this._authenticate(u, c, t.subarray(0, t.length - this.tagLength), n), !a.equal(u, t.subarray(t.length - this.tagLength, t.length))) return null;
						var l, h = t.length - this.tagLength;
						if (i) {
							if (i.length !== h) throw new Error("ChaCha20Poly1305: incorrect destination length");
							l = i
						} else l = new Uint8Array(h);
						return r.streamXOR(this._key, o, t.subarray(0, t.length - this.tagLength), l, 4), s.wipe(o), l
					}, e.prototype.clean = function() {
						return s.wipe(this._key), this
					}, e.prototype._authenticate = function(e, t, n, r) {
						var a = new i.Poly1305(t);
						r && (a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16))), a.update(n), n.length % 16 > 0 && a.update(c.subarray(n.length % 16));
						var u = new Uint8Array(8);
						r && o.writeUint64LE(r.length, u), a.update(u), o.writeUint64LE(n.length, u), a.update(u);
						for (var l = a.digest(), h = 0; h < l.length; h++) e[h] = l[h];
						a.clean(), s.wipe(l), s.wipe(u)
					}, e
				}();
			t.ChaCha20Poly1305 = u
		},
		"./node_modules/@stablelib/constant-time/lib/constant-time.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.length !== t.length) return 0;
				for (var n = 0, r = 0; r < e.length; r++) n |= e[r] ^ t[r];
				return 1 & n - 1 >>> 8
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.select = function(e, t, n) {
				return ~(e - 1) & t | e - 1 & n
			}, t.lessOrEqual = function(e, t) {
				return (0 | e) - (0 | t) - 1 >>> 31 & 1
			}, t.compare = r, t.equal = function(e, t) {
				return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
			}
		},
		"./node_modules/@stablelib/ed25519/lib/ed25519.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
			const r = n("./node_modules/@stablelib/random/lib/random.js"),
				i = n("./node_modules/@stablelib/sha512/lib/sha512.js"),
				s = n("./node_modules/@stablelib/wipe/lib/wipe.js");

			function o(e) {
				const t = new Float64Array(16);
				if (e)
					for (let n = 0; n < e.length; n++) t[n] = e[n];
				return t
			}
			t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32, new Uint8Array(32)[0] = 9;
			const a = o(),
				c = o([1]),
				u = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
				l = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
				h = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
				d = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
				f = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

			function p(e, t) {
				for (let n = 0; n < 16; n++) e[n] = 0 | t[n]
			}

			function g(e) {
				let t = 1;
				for (let n = 0; n < 16; n++) {
					let r = e[n] + t + 65535;
					t = Math.floor(r / 65536), e[n] = r - 65536 * t
				}
				e[0] += t - 1 + 37 * (t - 1)
			}

			function b(e, t, n) {
				const r = ~(n - 1);
				for (let i = 0; i < 16; i++) {
					const n = r & (e[i] ^ t[i]);
					e[i] ^= n, t[i] ^= n
				}
			}

			function y(e, t) {
				const n = o(),
					r = o();
				for (let i = 0; i < 16; i++) r[i] = t[i];
				g(r), g(r), g(r);
				for (let i = 0; i < 2; i++) {
					n[0] = r[0] - 65517;
					for (let t = 1; t < 15; t++) n[t] = r[t] - 65535 - (n[t - 1] >> 16 & 1), n[t - 1] &= 65535;
					n[15] = r[15] - 32767 - (n[14] >> 16 & 1);
					const e = n[15] >> 16 & 1;
					n[14] &= 65535, b(r, n, 1 - e)
				}
				for (let i = 0; i < 16; i++) e[2 * i] = 255 & r[i], e[2 * i + 1] = r[i] >> 8
			}

			function m(e, t) {
				let n = 0;
				for (let r = 0; r < 32; r++) n |= e[r] ^ t[r];
				return (1 & n - 1 >>> 8) - 1
			}

			function v(e, t) {
				const n = new Uint8Array(32),
					r = new Uint8Array(32);
				return y(n, e), y(r, t), m(n, r)
			}

			function _(e) {
				const t = new Uint8Array(32);
				return y(t, e), 1 & t[0]
			}

			function w(e, t, n) {
				for (let r = 0; r < 16; r++) e[r] = t[r] + n[r]
			}

			function j(e, t, n) {
				for (let r = 0; r < 16; r++) e[r] = t[r] - n[r]
			}

			function E(e, t, n) {
				let r, i, s = 0,
					o = 0,
					a = 0,
					c = 0,
					u = 0,
					l = 0,
					h = 0,
					d = 0,
					f = 0,
					p = 0,
					g = 0,
					b = 0,
					y = 0,
					m = 0,
					v = 0,
					_ = 0,
					w = 0,
					j = 0,
					E = 0,
					O = 0,
					S = 0,
					I = 0,
					P = 0,
					x = 0,
					R = 0,
					A = 0,
					N = 0,
					T = 0,
					C = 0,
					U = 0,
					L = 0,
					M = n[0],
					D = n[1],
					k = n[2],
					z = n[3],
					$ = n[4],
					q = n[5],
					H = n[6],
					B = n[7],
					K = n[8],
					V = n[9],
					F = n[10],
					W = n[11],
					G = n[12],
					J = n[13],
					Y = n[14],
					X = n[15];
				s += (r = t[0]) * M, o += r * D, a += r * k, c += r * z, u += r * $, l += r * q, h += r * H, d += r * B, f += r * K, p += r * V, g += r * F, b += r * W, y += r * G, m += r * J, v += r * Y, _ += r * X, o += (r = t[1]) * M, a += r * D, c += r * k, u += r * z, l += r * $, h += r * q, d += r * H, f += r * B, p += r * K, g += r * V, b += r * F, y += r * W, m += r * G, v += r * J, _ += r * Y, w += r * X, a += (r = t[2]) * M, c += r * D, u += r * k, l += r * z, h += r * $, d += r * q, f += r * H, p += r * B, g += r * K, b += r * V, y += r * F, m += r * W, v += r * G, _ += r * J, w += r * Y, j += r * X, c += (r = t[3]) * M, u += r * D, l += r * k, h += r * z, d += r * $, f += r * q, p += r * H, g += r * B, b += r * K, y += r * V, m += r * F, v += r * W, _ += r * G, w += r * J, j += r * Y, E += r * X, u += (r = t[4]) * M, l += r * D, h += r * k, d += r * z, f += r * $, p += r * q, g += r * H, b += r * B, y += r * K, m += r * V, v += r * F, _ += r * W, w += r * G, j += r * J, E += r * Y, O += r * X, l += (r = t[5]) * M, h += r * D, d += r * k, f += r * z, p += r * $, g += r * q, b += r * H, y += r * B, m += r * K, v += r * V, _ += r * F, w += r * W, j += r * G, E += r * J, O += r * Y, S += r * X, h += (r = t[6]) * M, d += r * D, f += r * k, p += r * z, g += r * $, b += r * q, y += r * H, m += r * B, v += r * K, _ += r * V, w += r * F, j += r * W, E += r * G, O += r * J, S += r * Y, I += r * X, d += (r = t[7]) * M, f += r * D, p += r * k, g += r * z, b += r * $, y += r * q, m += r * H, v += r * B, _ += r * K, w += r * V, j += r * F, E += r * W, O += r * G, S += r * J, I += r * Y, P += r * X, f += (r = t[8]) * M, p += r * D, g += r * k, b += r * z, y += r * $, m += r * q, v += r * H, _ += r * B, w += r * K, j += r * V, E += r * F, O += r * W, S += r * G, I += r * J, P += r * Y, x += r * X, p += (r = t[9]) * M, g += r * D, b += r * k, y += r * z, m += r * $, v += r * q, _ += r * H, w += r * B, j += r * K, E += r * V, O += r * F, S += r * W, I += r * G, P += r * J, x += r * Y, R += r * X, g += (r = t[10]) * M, b += r * D, y += r * k, m += r * z, v += r * $, _ += r * q, w += r * H, j += r * B, E += r * K, O += r * V, S += r * F, I += r * W, P += r * G, x += r * J, R += r * Y, A += r * X, b += (r = t[11]) * M, y += r * D, m += r * k, v += r * z, _ += r * $, w += r * q, j += r * H, E += r * B, O += r * K, S += r * V, I += r * F, P += r * W, x += r * G, R += r * J, A += r * Y, N += r * X, y += (r = t[12]) * M, m += r * D, v += r * k, _ += r * z, w += r * $, j += r * q, E += r * H, O += r * B, S += r * K, I += r * V, P += r * F, x += r * W, R += r * G, A += r * J, N += r * Y, T += r * X, m += (r = t[13]) * M, v += r * D, _ += r * k, w += r * z, j += r * $, E += r * q, O += r * H, S += r * B, I += r * K, P += r * V, x += r * F, R += r * W, A += r * G, N += r * J, T += r * Y, C += r * X, v += (r = t[14]) * M, _ += r * D, w += r * k, j += r * z, E += r * $, O += r * q, S += r * H, I += r * B, P += r * K, x += r * V, R += r * F, A += r * W, N += r * G, T += r * J, C += r * Y, U += r * X, _ += (r = t[15]) * M, o += 38 * (j += r * k), a += 38 * (E += r * z), c += 38 * (O += r * $), u += 38 * (S += r * q), l += 38 * (I += r * H), h += 38 * (P += r * B), d += 38 * (x += r * K), f += 38 * (R += r * V), p += 38 * (A += r * F), g += 38 * (N += r * W), b += 38 * (T += r * G), y += 38 * (C += r * J), m += 38 * (U += r * Y), v += 38 * (L += r * X), s = (r = (s += 38 * (w += r * D)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), o = (r = o + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), _ = (r = _ + i + 65535) - 65536 * (i = Math.floor(r / 65536)), s = (r = (s += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), o = (r = o + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), _ = (r = _ + i + 65535) - 65536 * (i = Math.floor(r / 65536)), s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = d, e[8] = f, e[9] = p, e[10] = g, e[11] = b, e[12] = y, e[13] = m, e[14] = v, e[15] = _
			}

			function O(e, t) {
				E(e, t, t)
			}

			function S(e, t) {
				const n = o();
				let r;
				for (r = 0; r < 16; r++) n[r] = t[r];
				for (r = 253; r >= 0; r--) O(n, n), 2 !== r && 4 !== r && E(n, n, t);
				for (r = 0; r < 16; r++) e[r] = n[r]
			}

			function I(e, t) {
				const n = o(),
					r = o(),
					i = o(),
					s = o(),
					a = o(),
					c = o(),
					u = o(),
					h = o(),
					d = o();
				j(n, e[1], e[0]), j(d, t[1], t[0]), E(n, n, d), w(r, e[0], e[1]), w(d, t[0], t[1]), E(r, r, d), E(i, e[3], t[3]), E(i, i, l), E(s, e[2], t[2]), w(s, s, s), j(a, r, n), j(c, s, i), w(u, s, i), w(h, r, n), E(e[0], a, c), E(e[1], h, u), E(e[2], u, c), E(e[3], a, h)
			}

			function P(e, t, n) {
				for (let r = 0; r < 4; r++) b(e[r], t[r], n)
			}

			function x(e, t) {
				const n = o(),
					r = o(),
					i = o();
				S(i, t[2]), E(n, t[0], i), E(r, t[1], i), y(e, r), e[31] ^= _(n) << 7
			}

			function R(e, t, n) {
				p(e[0], a), p(e[1], c), p(e[2], c), p(e[3], a);
				for (let r = 255; r >= 0; --r) {
					const i = n[r / 8 | 0] >> (7 & r) & 1;
					P(e, t, i), I(t, e), I(e, e), P(e, t, i)
				}
			}

			function A(e, t) {
				const n = [o(), o(), o(), o()];
				p(n[0], h), p(n[1], d), p(n[2], c), E(n[3], h, d), R(e, n, t)
			}

			function N(e) {
				if (e.length !== t.SEED_LENGTH) throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
				const n = (0, i.hash)(e);
				n[0] &= 248, n[31] &= 127, n[31] |= 64;
				const r = new Uint8Array(32),
					s = [o(), o(), o(), o()];
				A(s, n), x(r, s);
				const a = new Uint8Array(64);
				return a.set(e), a.set(r, 32), {
					publicKey: r,
					secretKey: a
				}
			}
			t.generateKeyPairFromSeed = N, t.generateKeyPair = function(e) {
				const t = (0, r.randomBytes)(32, e),
					n = N(t);
				return (0, s.wipe)(t), n
			}, t.extractPublicKeyFromSecretKey = function(e) {
				if (e.length !== t.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
				return new Uint8Array(e.subarray(32))
			};
			const T = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

			function C(e, t) {
				let n, r, i, s;
				for (r = 63; r >= 32; --r) {
					for (n = 0, i = r - 32, s = r - 12; i < s; ++i) t[i] += n - 16 * t[r] * T[i - (r - 32)], n = Math.floor((t[i] + 128) / 256), t[i] -= 256 * n;
					t[i] += n, t[r] = 0
				}
				for (n = 0, i = 0; i < 32; i++) t[i] += n - (t[31] >> 4) * T[i], n = t[i] >> 8, t[i] &= 255;
				for (i = 0; i < 32; i++) t[i] -= n * T[i];
				for (r = 0; r < 32; r++) t[r + 1] += t[r] >> 8, e[r] = 255 & t[r]
			}

			function U(e) {
				const t = new Float64Array(64);
				for (let n = 0; n < 64; n++) t[n] = e[n];
				for (let n = 0; n < 64; n++) e[n] = 0;
				C(e, t)
			}

			function L(e, t) {
				const n = o(),
					r = o(),
					i = o(),
					s = o(),
					l = o(),
					h = o(),
					d = o();
				return p(e[2], c),
					function(e, t) {
						for (let n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
						e[15] &= 32767
					}(e[1], t), O(i, e[1]), E(s, i, u), j(i, i, e[2]), w(s, e[2], s), O(l, s), O(h, l), E(d, h, l), E(n, d, i), E(n, n, s),
					function(e, t) {
						const n = o();
						let r;
						for (r = 0; r < 16; r++) n[r] = t[r];
						for (r = 250; r >= 0; r--) O(n, n), 1 !== r && E(n, n, t);
						for (r = 0; r < 16; r++) e[r] = n[r]
					}(n, n), E(n, n, i), E(n, n, s), E(n, n, s), E(e[0], n, s), O(r, e[0]), E(r, r, s), v(r, i) && E(e[0], e[0], f), O(r, e[0]), E(r, r, s), v(r, i) ? -1 : (_(e[0]) === t[31] >> 7 && j(e[0], a, e[0]), E(e[3], e[0], e[1]), 0)
			}
			t.sign = function(e, t) {
				const n = new Float64Array(64),
					r = [o(), o(), o(), o()],
					s = (0, i.hash)(e.subarray(0, 32));
				s[0] &= 248, s[31] &= 127, s[31] |= 64;
				const a = new Uint8Array(64);
				a.set(s.subarray(32), 32);
				const c = new i.SHA512;
				c.update(a.subarray(32)), c.update(t);
				const u = c.digest();
				c.clean(), U(u), A(r, u), x(a, r), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
				const l = c.digest();
				U(l);
				for (let i = 0; i < 32; i++) n[i] = u[i];
				for (let i = 0; i < 32; i++)
					for (let e = 0; e < 32; e++) n[i + e] += l[i] * s[e];
				return C(a.subarray(32), n), a
			}, t.verify = function(e, n, r) {
				const s = new Uint8Array(32),
					a = [o(), o(), o(), o()],
					c = [o(), o(), o(), o()];
				if (r.length !== t.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
				if (L(c, e)) return !1;
				const u = new i.SHA512;
				u.update(r.subarray(0, 32)), u.update(e), u.update(n);
				const l = u.digest();
				return U(l), R(a, c, l), A(c, r.subarray(32)), I(a, c), x(s, a), !m(r, s)
			}, t.convertPublicKeyToX25519 = function(e) {
				let t = [o(), o(), o(), o()];
				if (L(t, e)) throw new Error("Ed25519: invalid public key");
				let n = o(),
					r = o(),
					i = t[1];
				w(n, c, i), j(r, c, i), S(r, r), E(n, n, r);
				let s = new Uint8Array(32);
				return y(s, n), s
			}, t.convertSecretKeyToX25519 = function(e) {
				const t = (0, i.hash)(e.subarray(0, 32));
				t[0] &= 248, t[31] &= 127, t[31] |= 64;
				const n = new Uint8Array(t.subarray(0, 32));
				return (0, s.wipe)(t), n
			}
		},
		"./node_modules/@stablelib/hash/lib/hash.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.isSerializableHash = function(e) {
				return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
			}
		},
		"./node_modules/@stablelib/hkdf/lib/hkdf.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/hmac/lib/hmac.js"),
				i = n("./node_modules/@stablelib/wipe/lib/wipe.js"),
				s = function() {
					function e(e, t, n, i) {
						void 0 === n && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
						var s = r.hmac(this._hash, n, t);
						this._hmac = new r.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
					}
					return e.prototype._fillBuffer = function() {
						this._counter[0]++;
						var e = this._counter[0];
						if (0 === e) throw new Error("hkdf: cannot expand more");
						this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
					}, e.prototype.expand = function(e) {
						for (var t = new Uint8Array(e), n = 0; n < t.length; n++) this._bufpos === this._buffer.length && this._fillBuffer(), t[n] = this._buffer[this._bufpos++];
						return t
					}, e.prototype.clean = function() {
						this._hmac.clean(), i.wipe(this._buffer), i.wipe(this._counter), this._bufpos = 0
					}, e
				}();
			t.HKDF = s
		},
		"./node_modules/@stablelib/hmac/lib/hmac.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/hash/lib/hash.js"),
				i = n("./node_modules/@stablelib/constant-time/lib/constant-time.js"),
				s = n("./node_modules/@stablelib/wipe/lib/wipe.js"),
				o = function() {
					function e(e, t) {
						this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
						var n = new Uint8Array(this.blockSize);
						t.length > this.blockSize ? this._inner.update(t).finish(n).clean() : n.set(t);
						for (var i = 0; i < n.length; i++) n[i] ^= 54;
						this._inner.update(n);
						for (i = 0; i < n.length; i++) n[i] ^= 106;
						this._outer.update(n), r.isSerializableHash(this._inner) && r.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(n)
					}
					return e.prototype.reset = function() {
						if (!r.isSerializableHash(this._inner) || !r.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
						return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
					}, e.prototype.clean = function() {
						r.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), r.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
					}, e.prototype.update = function(e) {
						return this._inner.update(e), this
					}, e.prototype.finish = function(e) {
						return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this)
					}, e.prototype.digest = function() {
						var e = new Uint8Array(this.digestLength);
						return this.finish(e), e
					}, e.prototype.saveState = function() {
						if (!r.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
						return this._inner.saveState()
					}, e.prototype.restoreState = function(e) {
						if (!r.isSerializableHash(this._inner) || !r.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
						return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
					}, e.prototype.cleanSavedState = function(e) {
						if (!r.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
						this._inner.cleanSavedState(e)
					}, e
				}();
			t.HMAC = o, t.hmac = function(e, t, n) {
				var r = new o(e, t);
				r.update(n);
				var i = r.digest();
				return r.clean(), i
			}, t.equal = i.equal
		},
		"./node_modules/@stablelib/int/lib/int.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.mul = Math.imul || function(e, t) {
				var n = 65535 & e,
					r = 65535 & t;
				return n * r + ((e >>> 16 & 65535) * r + n * (t >>> 16 & 65535) << 16 >>> 0) | 0
			}, t.add = function(e, t) {
				return e + t | 0
			}, t.sub = function(e, t) {
				return e - t | 0
			}, t.rotl = function(e, t) {
				return e << t | e >>> 32 - t
			}, t.rotr = function(e, t) {
				return e << 32 - t | e >>> t
			}, t.isInteger = Number.isInteger || function(e) {
				return "number" == typeof e && isFinite(e) && Math.floor(e) === e
			}, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
				return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
			}
		},
		"./node_modules/@stablelib/poly1305/lib/poly1305.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/constant-time/lib/constant-time.js"),
				i = n("./node_modules/@stablelib/wipe/lib/wipe.js");
			t.DIGEST_LENGTH = 16;
			var s = function() {
				function e(e) {
					this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
					var n = e[0] | e[1] << 8;
					this._r[0] = 8191 & n;
					var r = e[2] | e[3] << 8;
					this._r[1] = 8191 & (n >>> 13 | r << 3);
					var i = e[4] | e[5] << 8;
					this._r[2] = 7939 & (r >>> 10 | i << 6);
					var s = e[6] | e[7] << 8;
					this._r[3] = 8191 & (i >>> 7 | s << 9);
					var o = e[8] | e[9] << 8;
					this._r[4] = 255 & (s >>> 4 | o << 12), this._r[5] = o >>> 1 & 8190;
					var a = e[10] | e[11] << 8;
					this._r[6] = 8191 & (o >>> 14 | a << 2);
					var c = e[12] | e[13] << 8;
					this._r[7] = 8065 & (a >>> 11 | c << 5);
					var u = e[14] | e[15] << 8;
					this._r[8] = 8191 & (c >>> 8 | u << 8), this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
				}
				return e.prototype._blocks = function(e, t, n) {
					for (var r = this._fin ? 0 : 2048, i = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], l = this._h[6], h = this._h[7], d = this._h[8], f = this._h[9], p = this._r[0], g = this._r[1], b = this._r[2], y = this._r[3], m = this._r[4], v = this._r[5], _ = this._r[6], w = this._r[7], j = this._r[8], E = this._r[9]; n >= 16;) {
						var O = e[t + 0] | e[t + 1] << 8;
						i += 8191 & O;
						var S = e[t + 2] | e[t + 3] << 8;
						s += 8191 & (O >>> 13 | S << 3);
						var I = e[t + 4] | e[t + 5] << 8;
						o += 8191 & (S >>> 10 | I << 6);
						var P = e[t + 6] | e[t + 7] << 8;
						a += 8191 & (I >>> 7 | P << 9);
						var x = e[t + 8] | e[t + 9] << 8;
						c += 8191 & (P >>> 4 | x << 12), u += x >>> 1 & 8191;
						var R = e[t + 10] | e[t + 11] << 8;
						l += 8191 & (x >>> 14 | R << 2);
						var A = e[t + 12] | e[t + 13] << 8;
						h += 8191 & (R >>> 11 | A << 5);
						var N = e[t + 14] | e[t + 15] << 8,
							T = 0,
							C = T;
						C += i * p, C += s * (5 * E), C += o * (5 * j), C += a * (5 * w), T = (C += c * (5 * _)) >>> 13, C &= 8191, C += u * (5 * v), C += l * (5 * m), C += h * (5 * y), C += (d += 8191 & (A >>> 8 | N << 8)) * (5 * b);
						var U = T += (C += (f += N >>> 5 | r) * (5 * g)) >>> 13;
						U += i * g, U += s * p, U += o * (5 * E), U += a * (5 * j), T = (U += c * (5 * w)) >>> 13, U &= 8191, U += u * (5 * _), U += l * (5 * v), U += h * (5 * m), U += d * (5 * y), T += (U += f * (5 * b)) >>> 13, U &= 8191;
						var L = T;
						L += i * b, L += s * g, L += o * p, L += a * (5 * E), T = (L += c * (5 * j)) >>> 13, L &= 8191, L += u * (5 * w), L += l * (5 * _), L += h * (5 * v), L += d * (5 * m);
						var M = T += (L += f * (5 * y)) >>> 13;
						M += i * y, M += s * b, M += o * g, M += a * p, T = (M += c * (5 * E)) >>> 13, M &= 8191, M += u * (5 * j), M += l * (5 * w), M += h * (5 * _), M += d * (5 * v);
						var D = T += (M += f * (5 * m)) >>> 13;
						D += i * m, D += s * y, D += o * b, D += a * g, T = (D += c * p) >>> 13, D &= 8191, D += u * (5 * E), D += l * (5 * j), D += h * (5 * w), D += d * (5 * _);
						var k = T += (D += f * (5 * v)) >>> 13;
						k += i * v, k += s * m, k += o * y, k += a * b, T = (k += c * g) >>> 13, k &= 8191, k += u * p, k += l * (5 * E), k += h * (5 * j), k += d * (5 * w);
						var z = T += (k += f * (5 * _)) >>> 13;
						z += i * _, z += s * v, z += o * m, z += a * y, T = (z += c * b) >>> 13, z &= 8191, z += u * g, z += l * p, z += h * (5 * E), z += d * (5 * j);
						var $ = T += (z += f * (5 * w)) >>> 13;
						$ += i * w, $ += s * _, $ += o * v, $ += a * m, T = ($ += c * y) >>> 13, $ &= 8191, $ += u * b, $ += l * g, $ += h * p, $ += d * (5 * E);
						var q = T += ($ += f * (5 * j)) >>> 13;
						q += i * j, q += s * w, q += o * _, q += a * v, T = (q += c * m) >>> 13, q &= 8191, q += u * y, q += l * b, q += h * g, q += d * p;
						var H = T += (q += f * (5 * E)) >>> 13;
						H += i * E, H += s * j, H += o * w, H += a * _, T = (H += c * v) >>> 13, H &= 8191, H += u * m, H += l * y, H += h * b, H += d * g, i = C = 8191 & (T = (T = ((T += (H += f * p) >>> 13) << 2) + T | 0) + (C &= 8191) | 0), s = U += T >>>= 13, o = L &= 8191, a = M &= 8191, c = D &= 8191, u = k &= 8191, l = z &= 8191, h = $ &= 8191, d = q &= 8191, f = H &= 8191, t += 16, n -= 16
					}
					this._h[0] = i, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = l, this._h[7] = h, this._h[8] = d, this._h[9] = f
				}, e.prototype.finish = function(e, t) {
					void 0 === t && (t = 0);
					var n, r, i, s, o = new Uint16Array(10);
					if (this._leftover) {
						for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
						this._fin = 1, this._blocks(this._buffer, 0, 16)
					}
					for (n = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += n, n = this._h[s] >>> 13, this._h[s] &= 8191;
					for (this._h[0] += 5 * n, n = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += n, n = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += n, o[0] = this._h[0] + 5, n = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + n, n = o[s] >>> 13, o[s] &= 8191;
					for (o[9] -= 8192, r = (1 ^ n) - 1, s = 0; s < 10; s++) o[s] &= r;
					for (r = ~r, s = 0; s < 10; s++) this._h[s] = this._h[s] & r | o[s];
					for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), i = this._h[0] + this._pad[0], this._h[0] = 65535 & i, s = 1; s < 8; s++) i = (this._h[s] + this._pad[s] | 0) + (i >>> 16) | 0, this._h[s] = 65535 & i;
					return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
				}, e.prototype.update = function(e) {
					var t, n = 0,
						r = e.length;
					if (this._leftover) {
						(t = 16 - this._leftover) > r && (t = r);
						for (var i = 0; i < t; i++) this._buffer[this._leftover + i] = e[n + i];
						if (r -= t, n += t, this._leftover += t, this._leftover < 16) return this;
						this._blocks(this._buffer, 0, 16), this._leftover = 0
					}
					if (r >= 16 && (t = r - r % 16, this._blocks(e, n, t), n += t, r -= t), r) {
						for (i = 0; i < r; i++) this._buffer[this._leftover + i] = e[n + i];
						this._leftover += r
					}
					return this
				}, e.prototype.digest = function() {
					if (this._finished) throw new Error("Poly1305 was finished");
					var e = new Uint8Array(16);
					return this.finish(e), e
				}, e.prototype.clean = function() {
					return i.wipe(this._buffer), i.wipe(this._r), i.wipe(this._h), i.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
				}, e
			}();
			t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
				var n = new s(e);
				n.update(t);
				var r = n.digest();
				return n.clean(), r
			}, t.equal = function(e, n) {
				return e.length === t.DIGEST_LENGTH && n.length === t.DIGEST_LENGTH && r.equal(e, n)
			}
		},
		"./node_modules/@stablelib/random/lib/random.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
			const r = n("./node_modules/@stablelib/random/lib/source/system.js"),
				i = n("./node_modules/@stablelib/binary/lib/binary.js"),
				s = n("./node_modules/@stablelib/wipe/lib/wipe.js");

			function o(e, n = t.defaultRandomSource) {
				return n.randomBytes(e)
			}
			t.defaultRandomSource = new r.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function(e = t.defaultRandomSource) {
				const n = o(4, e),
					r = (0, i.readUint32LE)(n);
				return (0, s.wipe)(n), r
			};
			const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			function c(e, n = a, r = t.defaultRandomSource) {
				if (n.length < 2) throw new Error("randomString charset is too short");
				if (n.length > 256) throw new Error("randomString charset is too long");
				let i = "";
				const c = n.length,
					u = 256 - 256 % c;
				for (; e > 0;) {
					const t = o(Math.ceil(256 * e / u), r);
					for (let r = 0; r < t.length && e > 0; r++) {
						const s = t[r];
						s < u && (i += n.charAt(s % c), e--)
					}(0, s.wipe)(t)
				}
				return i
			}
			t.randomString = c, t.randomStringForEntropy = function(e, n = a, r = t.defaultRandomSource) {
				return c(Math.ceil(e / (Math.log(n.length) / Math.LN2)), n, r)
			}
		},
		"./node_modules/@stablelib/random/lib/source/browser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.BrowserRandomSource = void 0;
			const r = 65536;
			t.BrowserRandomSource = class {
				constructor() {
					this.isAvailable = !1, this.isInstantiated = !1;
					const e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
					e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
				}
				randomBytes(e) {
					if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
					const t = new Uint8Array(e);
					for (let n = 0; n < t.length; n += r) this._crypto.getRandomValues(t.subarray(n, n + Math.min(t.length - n, r)));
					return t
				}
			}
		},
		"./node_modules/@stablelib/random/lib/source/node.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.NodeRandomSource = void 0;
			const r = n("./node_modules/@stablelib/wipe/lib/wipe.js");
			t.NodeRandomSource = class {
				constructor() {
					this.isAvailable = !1, this.isInstantiated = !1; {
						const e = n("ignored /drone/src/node_modules/@stablelib/random/lib/source crypto");
						e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
					}
				}
				randomBytes(e) {
					if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
					let t = this._crypto.randomBytes(e);
					if (t.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
					const n = new Uint8Array(e);
					for (let r = 0; r < n.length; r++) n[r] = t[r];
					return (0, r.wipe)(t), n
				}
			}
		},
		"./node_modules/@stablelib/random/lib/source/system.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.SystemRandomSource = void 0;
			const r = n("./node_modules/@stablelib/random/lib/source/browser.js"),
				i = n("./node_modules/@stablelib/random/lib/source/node.js");
			t.SystemRandomSource = class {
				constructor() {
					return this.isAvailable = !1, this.name = "", this._source = new r.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Browser")) : (this._source = new i.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, void(this.name = "Node")) : void 0)
				}
				randomBytes(e) {
					if (!this.isAvailable) throw new Error("System random byte generator is not available.");
					return this._source.randomBytes(e)
				}
			}
		},
		"./node_modules/@stablelib/sha256/lib/sha256.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/binary/lib/binary.js"),
				i = n("./node_modules/@stablelib/wipe/lib/wipe.js");
			t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
			var s = function() {
				function e() {
					this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
				}
				return e.prototype._initState = function() {
					this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
				}, e.prototype.reset = function() {
					return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
				}, e.prototype.clean = function() {
					i.wipe(this._buffer), i.wipe(this._temp), this.reset()
				}, e.prototype.update = function(e, t) {
					if (void 0 === t && (t = e.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
					var n = 0;
					if (this._bytesHashed += t, this._bufferLength > 0) {
						for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[n++], t--;
						this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
					}
					for (t >= this.blockSize && (n = a(this._temp, this._state, e, n, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[n++], t--;
					return this
				}, e.prototype.finish = function(e) {
					if (!this._finished) {
						var t = this._bytesHashed,
							n = this._bufferLength,
							i = t / 536870912 | 0,
							s = t << 3,
							o = t % 64 < 56 ? 64 : 128;
						this._buffer[n] = 128;
						for (var c = n + 1; c < o - 8; c++) this._buffer[c] = 0;
						r.writeUint32BE(i, this._buffer, o - 8), r.writeUint32BE(s, this._buffer, o - 4), a(this._temp, this._state, this._buffer, 0, o), this._finished = !0
					}
					for (c = 0; c < this.digestLength / 4; c++) r.writeUint32BE(this._state[c], e, 4 * c);
					return this
				}, e.prototype.digest = function() {
					var e = new Uint8Array(this.digestLength);
					return this.finish(e), e
				}, e.prototype.saveState = function() {
					if (this._finished) throw new Error("SHA256: cannot save finished state");
					return {
						state: new Int32Array(this._state),
						buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
						bufferLength: this._bufferLength,
						bytesHashed: this._bytesHashed
					}
				}, e.prototype.restoreState = function(e) {
					return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
				}, e.prototype.cleanSavedState = function(e) {
					i.wipe(e.state), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
				}, e
			}();
			t.SHA256 = s;
			var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

			function a(e, t, n, i, s) {
				for (; s >= 64;) {
					for (var a = t[0], c = t[1], u = t[2], l = t[3], h = t[4], d = t[5], f = t[6], p = t[7], g = 0; g < 16; g++) {
						var b = i + 4 * g;
						e[g] = r.readUint32BE(n, b)
					}
					for (g = 16; g < 64; g++) {
						var y = e[g - 2],
							m = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10,
							v = ((y = e[g - 15]) >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
						e[g] = (m + e[g - 7] | 0) + (v + e[g - 16] | 0)
					}
					for (g = 0; g < 64; g++) {
						m = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & d ^ ~h & f) | 0) + (p + (o[g] + e[g] | 0) | 0) | 0, v = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
						p = f, f = d, d = h, h = l + m | 0, l = u, u = c, c = a, a = m + v | 0
					}
					t[0] += a, t[1] += c, t[2] += u, t[3] += l, t[4] += h, t[5] += d, t[6] += f, t[7] += p, i += 64, s -= 64
				}
				return i
			}
			t.hash = function(e) {
				var t = new s;
				t.update(e);
				var n = t.digest();
				return t.clean(), n
			}
		},
		"./node_modules/@stablelib/sha512/lib/sha512.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/@stablelib/binary/lib/binary.js"),
				i = n("./node_modules/@stablelib/wipe/lib/wipe.js");
			t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
			var s = function() {
				function e() {
					this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
				}
				return e.prototype._initState = function() {
					this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
				}, e.prototype.reset = function() {
					return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
				}, e.prototype.clean = function() {
					i.wipe(this._buffer), i.wipe(this._tempHi), i.wipe(this._tempLo), this.reset()
				}, e.prototype.update = function(e, n) {
					if (void 0 === n && (n = e.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
					var r = 0;
					if (this._bytesHashed += n, this._bufferLength > 0) {
						for (; this._bufferLength < t.BLOCK_SIZE && n > 0;) this._buffer[this._bufferLength++] = e[r++], n--;
						this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
					}
					for (n >= this.blockSize && (r = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, r, n), n %= this.blockSize); n > 0;) this._buffer[this._bufferLength++] = e[r++], n--;
					return this
				}, e.prototype.finish = function(e) {
					if (!this._finished) {
						var t = this._bytesHashed,
							n = this._bufferLength,
							i = t / 536870912 | 0,
							s = t << 3,
							o = t % 128 < 112 ? 128 : 256;
						this._buffer[n] = 128;
						for (var c = n + 1; c < o - 8; c++) this._buffer[c] = 0;
						r.writeUint32BE(i, this._buffer, o - 8), r.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), this._finished = !0
					}
					for (c = 0; c < this.digestLength / 8; c++) r.writeUint32BE(this._stateHi[c], e, 8 * c), r.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
					return this
				}, e.prototype.digest = function() {
					var e = new Uint8Array(this.digestLength);
					return this.finish(e), e
				}, e.prototype.saveState = function() {
					if (this._finished) throw new Error("SHA256: cannot save finished state");
					return {
						stateHi: new Int32Array(this._stateHi),
						stateLo: new Int32Array(this._stateLo),
						buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
						bufferLength: this._bufferLength,
						bytesHashed: this._bytesHashed
					}
				}, e.prototype.restoreState = function(e) {
					return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
				}, e.prototype.cleanSavedState = function(e) {
					i.wipe(e.stateHi), i.wipe(e.stateLo), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
				}, e
			}();
			t.SHA512 = s;
			var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

			function a(e, t, n, i, s, a, c) {
				for (var u, l, h, d, f, p, g, b, y = n[0], m = n[1], v = n[2], _ = n[3], w = n[4], j = n[5], E = n[6], O = n[7], S = i[0], I = i[1], P = i[2], x = i[3], R = i[4], A = i[5], N = i[6], T = i[7]; c >= 128;) {
					for (var C = 0; C < 16; C++) {
						var U = 8 * C + a;
						e[C] = r.readUint32BE(s, U), t[C] = r.readUint32BE(s, U + 4)
					}
					for (C = 0; C < 80; C++) {
						var L, M, D = y,
							k = m,
							z = v,
							$ = _,
							q = w,
							H = j,
							B = E,
							K = S,
							V = I,
							F = P,
							W = x,
							G = R,
							J = A,
							Y = N;
						if (f = 65535 & (l = T), p = l >>> 16, g = 65535 & (u = O), b = u >>> 16, f += 65535 & (l = (R >>> 14 | w << 18) ^ (R >>> 18 | w << 14) ^ (w >>> 9 | R << 23)), p += l >>> 16, g += 65535 & (u = (w >>> 14 | R << 18) ^ (w >>> 18 | R << 14) ^ (R >>> 9 | w << 23)), b += u >>> 16, f += 65535 & (l = R & A ^ ~R & N), p += l >>> 16, g += 65535 & (u = w & j ^ ~w & E), b += u >>> 16, u = o[2 * C], f += 65535 & (l = o[2 * C + 1]), p += l >>> 16, g += 65535 & u, b += u >>> 16, u = e[C % 16], p += (l = t[C % 16]) >>> 16, g += 65535 & u, b += u >>> 16, g += (p += (f += 65535 & l) >>> 16) >>> 16, f = 65535 & (l = d = 65535 & f | p << 16), p = l >>> 16, g = 65535 & (u = h = 65535 & g | (b += g >>> 16) << 16), b = u >>> 16, f += 65535 & (l = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)), p += l >>> 16, g += 65535 & (u = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25)), b += u >>> 16, p += (l = S & I ^ S & P ^ I & P) >>> 16, g += 65535 & (u = y & m ^ y & v ^ m & v), b += u >>> 16, L = 65535 & (g += (p += (f += 65535 & l) >>> 16) >>> 16) | (b += g >>> 16) << 16, M = 65535 & f | p << 16, f = 65535 & (l = W), p = l >>> 16, g = 65535 & (u = $), b = u >>> 16, p += (l = d) >>> 16, g += 65535 & (u = h), b += u >>> 16, m = D, v = k, _ = z, w = $ = 65535 & (g += (p += (f += 65535 & l) >>> 16) >>> 16) | (b += g >>> 16) << 16, j = q, E = H, O = B, y = L, I = K, P = V, x = F, R = W = 65535 & f | p << 16, A = G, N = J, T = Y, S = M, C % 16 == 15)
							for (U = 0; U < 16; U++) u = e[U], f = 65535 & (l = t[U]), p = l >>> 16, g = 65535 & u, b = u >>> 16, u = e[(U + 9) % 16], f += 65535 & (l = t[(U + 9) % 16]), p += l >>> 16, g += 65535 & u, b += u >>> 16, h = e[(U + 1) % 16], f += 65535 & (l = ((d = t[(U + 1) % 16]) >>> 1 | h << 31) ^ (d >>> 8 | h << 24) ^ (d >>> 7 | h << 25)), p += l >>> 16, g += 65535 & (u = (h >>> 1 | d << 31) ^ (h >>> 8 | d << 24) ^ h >>> 7), b += u >>> 16, h = e[(U + 14) % 16], p += (l = ((d = t[(U + 14) % 16]) >>> 19 | h << 13) ^ (h >>> 29 | d << 3) ^ (d >>> 6 | h << 26)) >>> 16, g += 65535 & (u = (h >>> 19 | d << 13) ^ (d >>> 29 | h << 3) ^ h >>> 6), b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, e[U] = 65535 & g | b << 16, t[U] = 65535 & f | p << 16
					}
					f = 65535 & (l = S), p = l >>> 16, g = 65535 & (u = y), b = u >>> 16, u = n[0], p += (l = i[0]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[0] = y = 65535 & g | b << 16, i[0] = S = 65535 & f | p << 16, f = 65535 & (l = I), p = l >>> 16, g = 65535 & (u = m), b = u >>> 16, u = n[1], p += (l = i[1]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[1] = m = 65535 & g | b << 16, i[1] = I = 65535 & f | p << 16, f = 65535 & (l = P), p = l >>> 16, g = 65535 & (u = v), b = u >>> 16, u = n[2], p += (l = i[2]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[2] = v = 65535 & g | b << 16, i[2] = P = 65535 & f | p << 16, f = 65535 & (l = x), p = l >>> 16, g = 65535 & (u = _), b = u >>> 16, u = n[3], p += (l = i[3]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[3] = _ = 65535 & g | b << 16, i[3] = x = 65535 & f | p << 16, f = 65535 & (l = R), p = l >>> 16, g = 65535 & (u = w), b = u >>> 16, u = n[4], p += (l = i[4]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[4] = w = 65535 & g | b << 16, i[4] = R = 65535 & f | p << 16, f = 65535 & (l = A), p = l >>> 16, g = 65535 & (u = j), b = u >>> 16, u = n[5], p += (l = i[5]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[5] = j = 65535 & g | b << 16, i[5] = A = 65535 & f | p << 16, f = 65535 & (l = N), p = l >>> 16, g = 65535 & (u = E), b = u >>> 16, u = n[6], p += (l = i[6]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[6] = E = 65535 & g | b << 16, i[6] = N = 65535 & f | p << 16, f = 65535 & (l = T), p = l >>> 16, g = 65535 & (u = O), b = u >>> 16, u = n[7], p += (l = i[7]) >>> 16, g += 65535 & u, b += u >>> 16, b += (g += (p += (f += 65535 & l) >>> 16) >>> 16) >>> 16, n[7] = O = 65535 & g | b << 16, i[7] = T = 65535 & f | p << 16, a += 128, c -= 128
				}
				return a
			}
			t.hash = function(e) {
				var t = new s;
				t.update(e);
				var n = t.digest();
				return t.clean(), n
			}
		},
		"./node_modules/@stablelib/wipe/lib/wipe.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.wipe = function(e) {
				for (var t = 0; t < e.length; t++) e[t] = 0;
				return e
			}
		},
		"./node_modules/@stablelib/x25519/lib/x25519.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
			const r = n("./node_modules/@stablelib/random/lib/random.js"),
				i = n("./node_modules/@stablelib/wipe/lib/wipe.js");

			function s(e) {
				const t = new Float64Array(16);
				if (e)
					for (let n = 0; n < e.length; n++) t[n] = e[n];
				return t
			}
			t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
			const o = new Uint8Array(32);
			o[0] = 9;
			const a = s([56129, 1]);

			function c(e) {
				let t = 1;
				for (let n = 0; n < 16; n++) {
					let r = e[n] + t + 65535;
					t = Math.floor(r / 65536), e[n] = r - 65536 * t
				}
				e[0] += t - 1 + 37 * (t - 1)
			}

			function u(e, t, n) {
				const r = ~(n - 1);
				for (let i = 0; i < 16; i++) {
					const n = r & (e[i] ^ t[i]);
					e[i] ^= n, t[i] ^= n
				}
			}

			function l(e, t, n) {
				for (let r = 0; r < 16; r++) e[r] = t[r] + n[r]
			}

			function h(e, t, n) {
				for (let r = 0; r < 16; r++) e[r] = t[r] - n[r]
			}

			function d(e, t, n) {
				let r, i, s = 0,
					o = 0,
					a = 0,
					c = 0,
					u = 0,
					l = 0,
					h = 0,
					d = 0,
					f = 0,
					p = 0,
					g = 0,
					b = 0,
					y = 0,
					m = 0,
					v = 0,
					_ = 0,
					w = 0,
					j = 0,
					E = 0,
					O = 0,
					S = 0,
					I = 0,
					P = 0,
					x = 0,
					R = 0,
					A = 0,
					N = 0,
					T = 0,
					C = 0,
					U = 0,
					L = 0,
					M = n[0],
					D = n[1],
					k = n[2],
					z = n[3],
					$ = n[4],
					q = n[5],
					H = n[6],
					B = n[7],
					K = n[8],
					V = n[9],
					F = n[10],
					W = n[11],
					G = n[12],
					J = n[13],
					Y = n[14],
					X = n[15];
				s += (r = t[0]) * M, o += r * D, a += r * k, c += r * z, u += r * $, l += r * q, h += r * H, d += r * B, f += r * K, p += r * V, g += r * F, b += r * W, y += r * G, m += r * J, v += r * Y, _ += r * X, o += (r = t[1]) * M, a += r * D, c += r * k, u += r * z, l += r * $, h += r * q, d += r * H, f += r * B, p += r * K, g += r * V, b += r * F, y += r * W, m += r * G, v += r * J, _ += r * Y, w += r * X, a += (r = t[2]) * M, c += r * D, u += r * k, l += r * z, h += r * $, d += r * q, f += r * H, p += r * B, g += r * K, b += r * V, y += r * F, m += r * W, v += r * G, _ += r * J, w += r * Y, j += r * X, c += (r = t[3]) * M, u += r * D, l += r * k, h += r * z, d += r * $, f += r * q, p += r * H, g += r * B, b += r * K, y += r * V, m += r * F, v += r * W, _ += r * G, w += r * J, j += r * Y, E += r * X, u += (r = t[4]) * M, l += r * D, h += r * k, d += r * z, f += r * $, p += r * q, g += r * H, b += r * B, y += r * K, m += r * V, v += r * F, _ += r * W, w += r * G, j += r * J, E += r * Y, O += r * X, l += (r = t[5]) * M, h += r * D, d += r * k, f += r * z, p += r * $, g += r * q, b += r * H, y += r * B, m += r * K, v += r * V, _ += r * F, w += r * W, j += r * G, E += r * J, O += r * Y, S += r * X, h += (r = t[6]) * M, d += r * D, f += r * k, p += r * z, g += r * $, b += r * q, y += r * H, m += r * B, v += r * K, _ += r * V, w += r * F, j += r * W, E += r * G, O += r * J, S += r * Y, I += r * X, d += (r = t[7]) * M, f += r * D, p += r * k, g += r * z, b += r * $, y += r * q, m += r * H, v += r * B, _ += r * K, w += r * V, j += r * F, E += r * W, O += r * G, S += r * J, I += r * Y, P += r * X, f += (r = t[8]) * M, p += r * D, g += r * k, b += r * z, y += r * $, m += r * q, v += r * H, _ += r * B, w += r * K, j += r * V, E += r * F, O += r * W, S += r * G, I += r * J, P += r * Y, x += r * X, p += (r = t[9]) * M, g += r * D, b += r * k, y += r * z, m += r * $, v += r * q, _ += r * H, w += r * B, j += r * K, E += r * V, O += r * F, S += r * W, I += r * G, P += r * J, x += r * Y, R += r * X, g += (r = t[10]) * M, b += r * D, y += r * k, m += r * z, v += r * $, _ += r * q, w += r * H, j += r * B, E += r * K, O += r * V, S += r * F, I += r * W, P += r * G, x += r * J, R += r * Y, A += r * X, b += (r = t[11]) * M, y += r * D, m += r * k, v += r * z, _ += r * $, w += r * q, j += r * H, E += r * B, O += r * K, S += r * V, I += r * F, P += r * W, x += r * G, R += r * J, A += r * Y, N += r * X, y += (r = t[12]) * M, m += r * D, v += r * k, _ += r * z, w += r * $, j += r * q, E += r * H, O += r * B, S += r * K, I += r * V, P += r * F, x += r * W, R += r * G, A += r * J, N += r * Y, T += r * X, m += (r = t[13]) * M, v += r * D, _ += r * k, w += r * z, j += r * $, E += r * q, O += r * H, S += r * B, I += r * K, P += r * V, x += r * F, R += r * W, A += r * G, N += r * J, T += r * Y, C += r * X, v += (r = t[14]) * M, _ += r * D, w += r * k, j += r * z, E += r * $, O += r * q, S += r * H, I += r * B, P += r * K, x += r * V, R += r * F, A += r * W, N += r * G, T += r * J, C += r * Y, U += r * X, _ += (r = t[15]) * M, o += 38 * (j += r * k), a += 38 * (E += r * z), c += 38 * (O += r * $), u += 38 * (S += r * q), l += 38 * (I += r * H), h += 38 * (P += r * B), d += 38 * (x += r * K), f += 38 * (R += r * V), p += 38 * (A += r * F), g += 38 * (N += r * W), b += 38 * (T += r * G), y += 38 * (C += r * J), m += 38 * (U += r * Y), v += 38 * (L += r * X), s = (r = (s += 38 * (w += r * D)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), o = (r = o + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), _ = (r = _ + i + 65535) - 65536 * (i = Math.floor(r / 65536)), s = (r = (s += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), o = (r = o + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), _ = (r = _ + i + 65535) - 65536 * (i = Math.floor(r / 65536)), s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = d, e[8] = f, e[9] = p, e[10] = g, e[11] = b, e[12] = y, e[13] = m, e[14] = v, e[15] = _
			}

			function f(e, t) {
				d(e, t, t)
			}

			function p(e, t) {
				const n = new Uint8Array(32),
					r = new Float64Array(80),
					i = s(),
					o = s(),
					p = s(),
					g = s(),
					b = s(),
					y = s();
				for (let s = 0; s < 31; s++) n[s] = e[s];
				n[31] = 127 & e[31] | 64, n[0] &= 248,
					function(e, t) {
						for (let n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
						e[15] &= 32767
					}(r, t);
				for (let s = 0; s < 16; s++) o[s] = r[s];
				i[0] = g[0] = 1;
				for (let s = 254; s >= 0; --s) {
					const e = n[s >>> 3] >>> (7 & s) & 1;
					u(i, o, e), u(p, g, e), l(b, i, p), h(i, i, p), l(p, o, g), h(o, o, g), f(g, b), f(y, i), d(i, p, i), d(p, o, b), l(b, i, p), h(i, i, p), f(o, i), h(p, g, y), d(i, p, a), l(i, i, g), d(p, p, i), d(i, g, y), d(g, o, r), f(o, b), u(i, o, e), u(p, g, e)
				}
				for (let s = 0; s < 16; s++) r[s + 16] = i[s], r[s + 32] = p[s], r[s + 48] = o[s], r[s + 64] = g[s];
				const m = r.subarray(32),
					v = r.subarray(16);
				! function(e, t) {
					const n = s();
					for (let r = 0; r < 16; r++) n[r] = t[r];
					for (let r = 253; r >= 0; r--) f(n, n), 2 !== r && 4 !== r && d(n, n, t);
					for (let r = 0; r < 16; r++) e[r] = n[r]
				}(m, m), d(v, v, m);
				const _ = new Uint8Array(32);
				return function(e, t) {
					const n = s(),
						r = s();
					for (let i = 0; i < 16; i++) r[i] = t[i];
					c(r), c(r), c(r);
					for (let i = 0; i < 2; i++) {
						n[0] = r[0] - 65517;
						for (let t = 1; t < 15; t++) n[t] = r[t] - 65535 - (n[t - 1] >> 16 & 1), n[t - 1] &= 65535;
						n[15] = r[15] - 32767 - (n[14] >> 16 & 1);
						const e = n[15] >> 16 & 1;
						n[14] &= 65535, u(r, n, 1 - e)
					}
					for (let i = 0; i < 16; i++) e[2 * i] = 255 & r[i], e[2 * i + 1] = r[i] >> 8
				}(_, v), _
			}

			function g(e) {
				return p(e, o)
			}

			function b(e) {
				if (e.length !== t.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
				const n = new Uint8Array(e);
				return {
					publicKey: g(n),
					secretKey: n
				}
			}
			t.scalarMult = p, t.scalarMultBase = g, t.generateKeyPairFromSeed = b, t.generateKeyPair = function(e) {
				const t = (0, r.randomBytes)(32, e),
					n = b(t);
				return (0, i.wipe)(t), n
			}, t.sharedKey = function(e, n, r = !1) {
				if (e.length !== t.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
				if (n.length !== t.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
				const i = p(e, n);
				if (r) {
					let e = 0;
					for (let t = 0; t < i.length; t++) e |= i[t];
					if (0 === e) throw new Error("X25519: invalid shared key")
				}
				return i
			}
		},
		"./node_modules/@walletconnect/environment/dist/cjs/crypto.js": function(e, t, n) {
			"use strict";
			(function(e) {
				function n() {
					return (null == e ? void 0 : e.crypto) || (null == e ? void 0 : e.msCrypto) || {}
				}

				function r() {
					const e = n();
					return e.subtle || e.webkitSubtle
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = n, t.getSubtleCrypto = r, t.isBrowserCryptoAvailable = function() {
					return !!n() && !!r()
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@walletconnect/environment/dist/cjs/env.js": function(e, t, n) {
			"use strict";
			(function(e) {
				function n() {
					return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
				}

				function r() {
					return void 0 !== e && void 0 !== e.versions && void 0 !== e.versions.node
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = r, t.isBrowser = function() {
					return !n() && !r()
				}
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/@walletconnect/environment/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js");
			r.__exportStar(n("./node_modules/@walletconnect/environment/dist/cjs/crypto.js"), t), r.__exportStar(n("./node_modules/@walletconnect/environment/dist/cjs/env.js"), t)
		},
		"./node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__extends", (function() {
				return i
			})), n.d(t, "__assign", (function() {
				return s
			})), n.d(t, "__rest", (function() {
				return o
			})), n.d(t, "__decorate", (function() {
				return a
			})), n.d(t, "__param", (function() {
				return c
			})), n.d(t, "__metadata", (function() {
				return u
			})), n.d(t, "__awaiter", (function() {
				return l
			})), n.d(t, "__generator", (function() {
				return h
			})), n.d(t, "__createBinding", (function() {
				return d
			})), n.d(t, "__exportStar", (function() {
				return f
			})), n.d(t, "__values", (function() {
				return p
			})), n.d(t, "__read", (function() {
				return g
			})), n.d(t, "__spread", (function() {
				return b
			})), n.d(t, "__spreadArrays", (function() {
				return y
			})), n.d(t, "__await", (function() {
				return m
			})), n.d(t, "__asyncGenerator", (function() {
				return v
			})), n.d(t, "__asyncDelegator", (function() {
				return _
			})), n.d(t, "__asyncValues", (function() {
				return w
			})), n.d(t, "__makeTemplateObject", (function() {
				return j
			})), n.d(t, "__importStar", (function() {
				return E
			})), n.d(t, "__importDefault", (function() {
				return O
			})), n.d(t, "__classPrivateFieldGet", (function() {
				return S
			})), n.d(t, "__classPrivateFieldSet", (function() {
				return I
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function a(e, t, n, r) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
				return s > 3 && o && Object.defineProperty(t, n, o), o
			}

			function c(e, t) {
				return function(n, r) {
					t(n, r, e)
				}
			}

			function u(e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			}

			function l(e, t, n, r) {
				return new(n || (n = Promise))((function(i, s) {
					function o(e) {
						try {
							c(r.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							c(r.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(o, a)
					}
					c((r = r.apply(e, t || [])).next())
				}))
			}

			function h(e, t) {
				var n, r, i, s, o = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(s) {
					return function(a) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; o;) try {
								if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
								switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
									case 0:
									case 1:
										i = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, r = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < i[1]) {
											o.label = i[1], i = s;
											break
										}
										if (i && o.label < i[2]) {
											o.label = i[2], o.ops.push(s);
											break
										}
										i[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], r = 0
							} finally {
								n = i = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, a])
					}
				}
			}

			function d(e, t, n, r) {
				void 0 === r && (r = n), e[r] = t[n]
			}

			function f(e, t) {
				for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
			}

			function p(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function g(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, s = n.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						r && !r.done && (n = s.return) && n.call(s)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function b() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
				return e
			}

			function y() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var r = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
				return r
			}

			function m(e) {
				return this instanceof m ? (this.v = e, this) : new m(e)
			}

			function v(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var r, i = n.apply(e, t || []),
					s = [];
				return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
					return this
				}, r;

				function o(e) {
					i[e] && (r[e] = function(t) {
						return new Promise((function(n, r) {
							s.push([e, t, n, r]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : l(s[0][2], n)
					} catch (r) {
						l(s[0][3], r)
					}
					var n
				}

				function c(e) {
					a("next", e)
				}

				function u(e) {
					a("throw", e)
				}

				function l(e, t) {
					e(t), s.shift(), s.length && a(s[0][0], s[0][1])
				}
			}

			function _(e) {
				var t, n;
				return t = {}, r("next"), r("throw", (function(e) {
					throw e
				})), r("return"), t[Symbol.iterator] = function() {
					return this
				}, t;

				function r(r, i) {
					t[r] = e[r] ? function(t) {
						return (n = !n) ? {
							value: m(e[r](t)),
							done: "return" === r
						} : i ? i(t) : t
					} : i
				}
			}

			function w(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function r(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(r, i) {
							(function(e, t, n, r) {
								Promise.resolve(r).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(r, i, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}

			function j(e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: t
				}) : e.raw = t, e
			}

			function E(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function O(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function S(e, t) {
				if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
				return t.get(e)
			}

			function I(e, t, n) {
				if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
				return t.set(e, n), n
			}
		},
		"./node_modules/@walletconnect/ethereum-provider/dist/index.es.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "EthereumProvider", (function() {
				return O
			})), n.d(t, "OPTIONAL_EVENTS", (function() {
				return h
			})), n.d(t, "OPTIONAL_METHODS", (function() {
				return u
			})), n.d(t, "REQUIRED_EVENTS", (function() {
				return l
			})), n.d(t, "REQUIRED_METHODS", (function() {
				return c
			})), n.d(t, "default", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				i = n("./node_modules/@walletconnect/utils/dist/index.es.js"),
				s = n("./node_modules/@walletconnect/universal-provider/dist/index.es.js");
			const o = "wc@2:ethereum_provider:",
				a = "https://rpc.walletconnect.com/v1/",
				c = ["eth_sendTransaction", "personal_sign"],
				u = ["eth_accounts", "eth_requestAccounts", "eth_call", "eth_getBalance", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
				l = ["chainChanged", "accountsChanged"],
				h = ["message", "disconnect", "connect"];
			var d = Object.defineProperty,
				f = Object.defineProperties,
				p = Object.getOwnPropertyDescriptors,
				g = Object.getOwnPropertySymbols,
				b = Object.prototype.hasOwnProperty,
				y = Object.prototype.propertyIsEnumerable,
				m = (e, t, n) => t in e ? d(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				v = (e, t) => {
					for (var n in t || (t = {})) b.call(t, n) && m(e, n, t[n]);
					if (g)
						for (var n of g(t)) y.call(t, n) && m(e, n, t[n]);
					return e
				},
				_ = (e, t) => f(e, p(t));

			function w(e) {
				return Number(e[0].split(":")[1])
			}

			function j(e) {
				return `0x${e.toString(16)}`
			}
			class E {
				constructor() {
					this.events = new r.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = o, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
				}
				static async init(e) {
					const t = new E;
					return await t.initialize(e), t
				}
				async request(e) {
					return await this.signer.request(e, this.formatChainId(this.chainId))
				}
				sendAsync(e, t) {
					this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
				}
				get connected() {
					return !!this.signer.client && this.signer.client.core.relayer.connected
				}
				get connecting() {
					return !!this.signer.client && this.signer.client.core.relayer.connecting
				}
				async enable() {
					return this.session || await this.connect(), await this.request({
						method: "eth_requestAccounts"
					})
				}
				async connect(e) {
					if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
					this.loadConnectOpts(e);
					const {
						required: t,
						optional: n
					} = function(e) {
						const {
							chains: t,
							optionalChains: n,
							methods: r,
							optionalMethods: s,
							events: o,
							optionalEvents: a,
							rpcMap: u
						} = e;
						if (!Object(i.N)(t)) throw new Error("Invalid chains");
						const h = t,
							d = r || c,
							f = o || l,
							p = {
								chains: h,
								methods: d,
								events: f,
								rpcMap: {
									[w(h)]: u[w(h)]
								}
							},
							g = null == o ? void 0 : o.filter(e => !l.includes(e)),
							b = null == r ? void 0 : r.filter(e => !c.includes(e));
						if (!(n || a || s || null != g && g.length || null != b && b.length)) return {
							required: p
						};
						const y = (null == g ? void 0 : g.length) && (null == b ? void 0 : b.length) || !n;
						return {
							required: p,
							optional: {
								chains: [...new Set(y ? h.concat(n || []) : n)],
								methods: [...new Set(d.concat(s || []))],
								events: [...new Set(f.concat(a || []))],
								rpcMap: u
							}
						}
					}(this.rpc);
					try {
						const r = await new Promise(async (r, i) => {
							var s;
							this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
								!e.open && !this.signer.session && (this.signer.abortPairingAttempt(), i(new Error("Connection request reset. Please try again.")))
							})), await this.signer.connect(_(v({
								namespaces: {
									[this.namespace]: t
								}
							}, n && {
								optionalNamespaces: {
									[this.namespace]: n
								}
							}), {
								pairingTopic: null == e ? void 0 : e.pairingTopic
							})).then(e => {
								r(e)
							}).catch(e => {
								i(new Error(e.message))
							})
						});
						if (!r) return;
						this.setChainIds(this.rpc.chains);
						const s = Object(i.s)(r.namespaces, [this.namespace]);
						this.setAccounts(s), this.events.emit("connect", {
							chainId: j(this.chainId)
						})
					} catch (r) {
						throw this.signer.logger.error(r), r
					} finally {
						this.modal && this.modal.closeModal()
					}
				}
				async disconnect() {
					this.session && await this.signer.disconnect(), this.reset()
				}
				get isWalletConnect() {
					return !0
				}
				get session() {
					return this.signer.session
				}
				registerEventListeners() {
					this.signer.on("session_event", e => {
						const {
							params: t
						} = e, {
							event: n
						} = t;
						"accountsChanged" === n.name ? (this.accounts = this.parseAccounts(n.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === n.name ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data), this.events.emit("session_event", e)
					}), this.signer.on("chainChanged", e => {
						const t = parseInt(e);
						this.chainId = t, this.events.emit("chainChanged", j(this.chainId)), this.persist()
					}), this.signer.on("session_update", e => {
						this.events.emit("session_update", e)
					}), this.signer.on("session_delete", e => {
						this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", _(v({}, Object(i.z)("USER_DISCONNECTED")), {
							data: e.topic,
							name: "USER_DISCONNECTED"
						}))
					}), this.signer.on("display_uri", e => {
						var t, n;
						this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (n = this.modal) || n.openModal({
							uri: e
						})), this.events.emit("display_uri", e)
					})
				}
				setHttpProvider(e) {
					this.request({
						method: "wallet_switchEthereumChain",
						params: [{
							chainId: e.toString(16)
						}]
					})
				}
				isCompatibleChainId(e) {
					return "string" == typeof e && e.startsWith(`${this.namespace}:`)
				}
				formatChainId(e) {
					return `${this.namespace}:${e}`
				}
				parseChainId(e) {
					return Number(e.split(":")[1])
				}
				setChainIds(e) {
					const t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
					t.length && (this.chainId = t[0], this.events.emit("chainChanged", j(this.chainId)), this.persist())
				}
				setChainId(e) {
					if (this.isCompatibleChainId(e)) {
						const t = this.parseChainId(e);
						this.chainId = t, this.setHttpProvider(t)
					}
				}
				parseAccountId(e) {
					const [t, n, r] = e.split(":");
					return {
						chainId: `${t}:${n}`,
						address: r
					}
				}
				setAccounts(e) {
					this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
				}
				getRpcConfig(e) {
					var t, n;
					return {
						chains: (null == (t = e.chains) ? void 0 : t.map(e => this.formatChainId(e))) || [`${this.namespace}:1`],
						optionalChains: e.optionalChains ? e.optionalChains.map(e => this.formatChainId(e)) : void 0,
						methods: (null == e ? void 0 : e.methods) || c,
						events: (null == e ? void 0 : e.events) || l,
						optionalMethods: (null == e ? void 0 : e.optionalMethods) || [],
						optionalEvents: (null == e ? void 0 : e.optionalEvents) || [],
						rpcMap: (null == e ? void 0 : e.rpcMap) || this.buildRpcMap(e.chains.concat(e.optionalChains || []), e.projectId),
						showQrModal: Boolean(null == e ? void 0 : e.showQrModal),
						qrModalOptions: null != (n = null == e ? void 0 : e.qrModalOptions) ? n : void 0,
						projectId: e.projectId,
						metadata: e.metadata
					}
				}
				buildRpcMap(e, t) {
					const n = {};
					return e.forEach(e => {
						n[e] = this.getRpcUrl(e, t)
					}), n
				}
				async initialize(e) {
					if (this.rpc = this.getRpcConfig(e), this.chainId = w(this.rpc.chains), this.signer = await s.a.init({
							projectId: this.rpc.projectId,
							metadata: this.rpc.metadata
						}), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) try {
						const {
							Web3Modal: e
						} = await n.e(8).then(n.bind(null, "./node_modules/@web3modal/standalone/dist/index.es.js"));
						this.modal = new e(v({
							walletConnectVersion: 2,
							projectId: this.rpc.projectId,
							standaloneChains: this.rpc.chains
						}, this.rpc.qrModalOptions))
					} catch {
						throw new Error("To use QR modal, please install @web3modal/standalone package")
					}
				}
				loadConnectOpts(e) {
					if (!e) return;
					const {
						chains: t,
						optionalChains: n,
						rpcMap: r
					} = e;
					t && Object(i.N)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
						this.rpc.rpcMap[e] = (null == r ? void 0 : r[e]) || this.getRpcUrl(e)
					})), n && Object(i.N)(n) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null == n ? void 0 : n.map(e => this.formatChainId(e)), n.forEach(e => {
						this.rpc.rpcMap[e] = (null == r ? void 0 : r[e]) || this.getRpcUrl(e)
					}))
				}
				getRpcUrl(e, t) {
					var n;
					return (null == (n = this.rpc.rpcMap) ? void 0 : n[e]) || `${a}?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
				}
				async loadPersistedSession() {
					if (!this.session) return;
					const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`);
					this.setChainIds(e ? [this.formatChainId(e)] : this.session.namespaces[this.namespace].accounts), this.setAccounts(this.session.namespaces[this.namespace].accounts)
				}
				reset() {
					this.chainId = 1, this.accounts = []
				}
				persist() {
					this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
				}
				parseAccounts(e) {
					return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
				}
			}
			const O = E
		},
		"./node_modules/@walletconnect/events/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "IEvents", (function() {
				return r
			}));
			class r {}
		},
		"./node_modules/@walletconnect/heartbeat/dist/cjs/constants/heartbeat.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
			const r = n("./node_modules/@walletconnect/time/dist/cjs/index.js");
			t.HEARTBEAT_INTERVAL = r.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
				pulse: "heartbeat_pulse"
			}
		},
		"./node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), n("./node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js").__exportStar(n("./node_modules/@walletconnect/heartbeat/dist/cjs/constants/heartbeat.js"), t)
		},
		"./node_modules/@walletconnect/heartbeat/dist/cjs/heartbeat.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.HeartBeat = void 0;
			const r = n("./node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js"),
				i = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				s = n("./node_modules/@walletconnect/time/dist/cjs/index.js"),
				o = n("./node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js"),
				a = n("./node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js");
			class c extends o.IHeartBeat {
				constructor(e) {
					super(e), this.events = new i.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
				}
				static init(e) {
					return r.__awaiter(this, void 0, void 0, (function*() {
						const t = new c(e);
						return yield t.init(), t
					}))
				}
				init() {
					return r.__awaiter(this, void 0, void 0, (function*() {
						yield this.initialize()
					}))
				}
				stop() {
					clearInterval(this.intervalRef)
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				initialize() {
					return r.__awaiter(this, void 0, void 0, (function*() {
						this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
					}))
				}
				pulse() {
					this.events.emit(a.HEARTBEAT_EVENTS.pulse)
				}
			}
			t.HeartBeat = c
		},
		"./node_modules/@walletconnect/heartbeat/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js");
			r.__exportStar(n("./node_modules/@walletconnect/heartbeat/dist/cjs/heartbeat.js"), t), r.__exportStar(n("./node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js"), t), r.__exportStar(n("./node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js"), t)
		},
		"./node_modules/@walletconnect/heartbeat/dist/cjs/types/heartbeat.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IHeartBeat = void 0;
			const r = n("./node_modules/@walletconnect/events/dist/esm/index.js");
			class i extends r.IEvents {
				constructor(e) {
					super()
				}
			}
			t.IHeartBeat = i
		},
		"./node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), n("./node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js").__exportStar(n("./node_modules/@walletconnect/heartbeat/dist/cjs/types/heartbeat.js"), t)
		},
		"./node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__extends", (function() {
				return i
			})), n.d(t, "__assign", (function() {
				return s
			})), n.d(t, "__rest", (function() {
				return o
			})), n.d(t, "__decorate", (function() {
				return a
			})), n.d(t, "__param", (function() {
				return c
			})), n.d(t, "__metadata", (function() {
				return u
			})), n.d(t, "__awaiter", (function() {
				return l
			})), n.d(t, "__generator", (function() {
				return h
			})), n.d(t, "__createBinding", (function() {
				return d
			})), n.d(t, "__exportStar", (function() {
				return f
			})), n.d(t, "__values", (function() {
				return p
			})), n.d(t, "__read", (function() {
				return g
			})), n.d(t, "__spread", (function() {
				return b
			})), n.d(t, "__spreadArrays", (function() {
				return y
			})), n.d(t, "__await", (function() {
				return m
			})), n.d(t, "__asyncGenerator", (function() {
				return v
			})), n.d(t, "__asyncDelegator", (function() {
				return _
			})), n.d(t, "__asyncValues", (function() {
				return w
			})), n.d(t, "__makeTemplateObject", (function() {
				return j
			})), n.d(t, "__importStar", (function() {
				return E
			})), n.d(t, "__importDefault", (function() {
				return O
			})), n.d(t, "__classPrivateFieldGet", (function() {
				return S
			})), n.d(t, "__classPrivateFieldSet", (function() {
				return I
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function a(e, t, n, r) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
				return s > 3 && o && Object.defineProperty(t, n, o), o
			}

			function c(e, t) {
				return function(n, r) {
					t(n, r, e)
				}
			}

			function u(e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			}

			function l(e, t, n, r) {
				return new(n || (n = Promise))((function(i, s) {
					function o(e) {
						try {
							c(r.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							c(r.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(o, a)
					}
					c((r = r.apply(e, t || [])).next())
				}))
			}

			function h(e, t) {
				var n, r, i, s, o = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(s) {
					return function(a) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; o;) try {
								if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
								switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
									case 0:
									case 1:
										i = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, r = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < i[1]) {
											o.label = i[1], i = s;
											break
										}
										if (i && o.label < i[2]) {
											o.label = i[2], o.ops.push(s);
											break
										}
										i[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], r = 0
							} finally {
								n = i = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, a])
					}
				}
			}

			function d(e, t, n, r) {
				void 0 === r && (r = n), e[r] = t[n]
			}

			function f(e, t) {
				for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
			}

			function p(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function g(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, s = n.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						r && !r.done && (n = s.return) && n.call(s)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function b() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
				return e
			}

			function y() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var r = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
				return r
			}

			function m(e) {
				return this instanceof m ? (this.v = e, this) : new m(e)
			}

			function v(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var r, i = n.apply(e, t || []),
					s = [];
				return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
					return this
				}, r;

				function o(e) {
					i[e] && (r[e] = function(t) {
						return new Promise((function(n, r) {
							s.push([e, t, n, r]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : l(s[0][2], n)
					} catch (r) {
						l(s[0][3], r)
					}
					var n
				}

				function c(e) {
					a("next", e)
				}

				function u(e) {
					a("throw", e)
				}

				function l(e, t) {
					e(t), s.shift(), s.length && a(s[0][0], s[0][1])
				}
			}

			function _(e) {
				var t, n;
				return t = {}, r("next"), r("throw", (function(e) {
					throw e
				})), r("return"), t[Symbol.iterator] = function() {
					return this
				}, t;

				function r(r, i) {
					t[r] = e[r] ? function(t) {
						return (n = !n) ? {
							value: m(e[r](t)),
							done: "return" === r
						} : i ? i(t) : t
					} : i
				}
			}

			function w(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function r(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(r, i) {
							(function(e, t, n, r) {
								Promise.resolve(r).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(r, i, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}

			function j(e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: t
				}) : e.raw = t, e
			}

			function E(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function O(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function S(e, t) {
				if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
				return t.get(e)
			}

			function I(e, t, n) {
				if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
				return t.set(e, n), n
			}
		},
		"./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				i = n("./node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js"),
				s = n.n(i),
				o = n("./node_modules/@walletconnect/safe-json/dist/esm/index.js"),
				a = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
			const c = {
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					},
					method: "POST"
				},
				u = 10;
			class l {
				constructor(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if (this.url = e, this.disableProviderPing = t, this.events = new r.EventEmitter, this.isAvailable = !1, this.registering = !1, !Object(a.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
					this.url = e, this.disableProviderPing = t
				}
				get connected() {
					return this.isAvailable
				}
				get connecting() {
					return this.registering
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				async open() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
					await this.register(e)
				}
				async close() {
					if (!this.isAvailable) throw new Error("Connection already closed");
					this.onClose()
				}
				async send(e, t) {
					this.isAvailable || await this.register();
					try {
						const t = Object(o.b)(e),
							n = await s()(this.url, Object.assign(Object.assign({}, c), {
								body: t
							})),
							r = await n.json();
						this.onPayload({
							data: r
						})
					} catch (n) {
						this.onError(e.id, n)
					}
				}
				async register() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
					if (!Object(a.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
					if (this.registering) {
						const e = this.events.getMaxListeners();
						return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
							this.events.once("register_error", e => {
								this.resetMaxListeners(), t(e)
							}), this.events.once("open", () => {
								if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(new Error("HTTP connection is missing or invalid"));
								e()
							})
						})
					}
					this.url = e, this.registering = !0;
					try {
						if (!this.disableProviderPing) {
							const t = Object(o.b)({
								id: 1,
								jsonrpc: "2.0",
								method: "test",
								params: []
							});
							await s()(e, Object.assign(Object.assign({}, c), {
								body: t
							}))
						}
						this.onOpen()
					} catch (t) {
						const e = this.parseError(t);
						throw this.events.emit("register_error", e), this.onClose(), e
					}
				}
				onOpen() {
					this.isAvailable = !0, this.registering = !1, this.events.emit("open")
				}
				onClose() {
					this.isAvailable = !1, this.registering = !1, this.events.emit("close")
				}
				onPayload(e) {
					if (void 0 === e.data) return;
					const t = "string" == typeof e.data ? Object(o.a)(e.data) : e.data;
					this.events.emit("payload", t)
				}
				onError(e, t) {
					const n = this.parseError(t),
						r = n.message || n.toString(),
						i = Object(a.formatJsonRpcError)(e, r);
					this.events.emit("payload", i)
				}
				parseError(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
					return Object(a.parseConnectionError)(e, t, "HTTP")
				}
				resetMaxListeners() {
					this.events.getMaxListeners() > u && this.events.setMaxListeners(u)
				}
			}
			var h = l;
			t.b = h
		},
		"./node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js": function(e, t) {
			var n = "undefined" != typeof self ? self : this,
				r = function() {
					function e() {
						this.fetch = !1, this.DOMException = n.DOMException
					}
					return e.prototype = n, new e
				}();
			! function(e) {
				! function(t) {
					var n = {
						searchParams: "URLSearchParams" in e,
						iterable: "Symbol" in e && "iterator" in Symbol,
						blob: "FileReader" in e && "Blob" in e && function() {
							try {
								return new Blob, !0
							} catch (e) {
								return !1
							}
						}(),
						formData: "FormData" in e,
						arrayBuffer: "ArrayBuffer" in e
					};
					if (n.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
						i = ArrayBuffer.isView || function(e) {
							return e && r.indexOf(Object.prototype.toString.call(e)) > -1
						};

					function s(e) {
						if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
						return e.toLowerCase()
					}

					function o(e) {
						return "string" != typeof e && (e = String(e)), e
					}

					function a(e) {
						var t = {
							next: function() {
								var t = e.shift();
								return {
									done: void 0 === t,
									value: t
								}
							}
						};
						return n.iterable && (t[Symbol.iterator] = function() {
							return t
						}), t
					}

					function c(e) {
						this.map = {}, e instanceof c ? e.forEach((function(e, t) {
							this.append(t, e)
						}), this) : Array.isArray(e) ? e.forEach((function(e) {
							this.append(e[0], e[1])
						}), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
							this.append(t, e[t])
						}), this)
					}

					function u(e) {
						if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
						e.bodyUsed = !0
					}

					function l(e) {
						return new Promise((function(t, n) {
							e.onload = function() {
								t(e.result)
							}, e.onerror = function() {
								n(e.error)
							}
						}))
					}

					function h(e) {
						var t = new FileReader,
							n = l(t);
						return t.readAsArrayBuffer(e), n
					}

					function d(e) {
						if (e.slice) return e.slice(0);
						var t = new Uint8Array(e.byteLength);
						return t.set(new Uint8Array(e)), t.buffer
					}

					function f() {
						return this.bodyUsed = !1, this._initBody = function(e) {
							var t;
							this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : n.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : n.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : n.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : n.arrayBuffer && n.blob && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = d(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = d(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
						}, n.blob && (this.blob = function() {
							var e = u(this);
							if (e) return e;
							if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
							if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
							if (this._bodyFormData) throw new Error("could not read FormData body as blob");
							return Promise.resolve(new Blob([this._bodyText]))
						}, this.arrayBuffer = function() {
							return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
						}), this.text = function() {
							var e, t, n, r = u(this);
							if (r) return r;
							if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = l(t), t.readAsText(e), n;
							if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
								for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
								return n.join("")
							}(this._bodyArrayBuffer));
							if (this._bodyFormData) throw new Error("could not read FormData body as text");
							return Promise.resolve(this._bodyText)
						}, n.formData && (this.formData = function() {
							return this.text().then(b)
						}), this.json = function() {
							return this.text().then(JSON.parse)
						}, this
					}
					c.prototype.append = function(e, t) {
						e = s(e), t = o(t);
						var n = this.map[e];
						this.map[e] = n ? n + ", " + t : t
					}, c.prototype.delete = function(e) {
						delete this.map[s(e)]
					}, c.prototype.get = function(e) {
						return e = s(e), this.has(e) ? this.map[e] : null
					}, c.prototype.has = function(e) {
						return this.map.hasOwnProperty(s(e))
					}, c.prototype.set = function(e, t) {
						this.map[s(e)] = o(t)
					}, c.prototype.forEach = function(e, t) {
						for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
					}, c.prototype.keys = function() {
						var e = [];
						return this.forEach((function(t, n) {
							e.push(n)
						})), a(e)
					}, c.prototype.values = function() {
						var e = [];
						return this.forEach((function(t) {
							e.push(t)
						})), a(e)
					}, c.prototype.entries = function() {
						var e = [];
						return this.forEach((function(t, n) {
							e.push([n, t])
						})), a(e)
					}, n.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
					var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

					function g(e, t) {
						var n, r, i = (t = t || {}).body;
						if (e instanceof g) {
							if (e.bodyUsed) throw new TypeError("Already read");
							this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
						} else this.url = String(e);
						if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new c(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), p.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
						this._initBody(i)
					}

					function b(e) {
						var t = new FormData;
						return e.trim().split("&").forEach((function(e) {
							if (e) {
								var n = e.split("="),
									r = n.shift().replace(/\+/g, " "),
									i = n.join("=").replace(/\+/g, " ");
								t.append(decodeURIComponent(r), decodeURIComponent(i))
							}
						})), t
					}

					function y(e, t) {
						t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
					}
					g.prototype.clone = function() {
						return new g(this, {
							body: this._bodyInit
						})
					}, f.call(g.prototype), f.call(y.prototype), y.prototype.clone = function() {
						return new y(this._bodyInit, {
							status: this.status,
							statusText: this.statusText,
							headers: new c(this.headers),
							url: this.url
						})
					}, y.error = function() {
						var e = new y(null, {
							status: 0,
							statusText: ""
						});
						return e.type = "error", e
					};
					var m = [301, 302, 303, 307, 308];
					y.redirect = function(e, t) {
						if (-1 === m.indexOf(t)) throw new RangeError("Invalid status code");
						return new y(null, {
							status: t,
							headers: {
								location: e
							}
						})
					}, t.DOMException = e.DOMException;
					try {
						new t.DOMException
					} catch (_) {
						t.DOMException = function(e, t) {
							this.message = e, this.name = t;
							var n = Error(e);
							this.stack = n.stack
						}, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
					}

					function v(e, r) {
						return new Promise((function(i, s) {
							var o = new g(e, r);
							if (o.signal && o.signal.aborted) return s(new t.DOMException("Aborted", "AbortError"));
							var a = new XMLHttpRequest;

							function u() {
								a.abort()
							}
							a.onload = function() {
								var e, t, n = {
									status: a.status,
									statusText: a.statusText,
									headers: (e = a.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
										var n = e.split(":"),
											r = n.shift().trim();
										if (r) {
											var i = n.join(":").trim();
											t.append(r, i)
										}
									})), t)
								};
								n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
								var r = "response" in a ? a.response : a.responseText;
								i(new y(r, n))
							}, a.onerror = function() {
								s(new TypeError("Network request failed"))
							}, a.ontimeout = function() {
								s(new TypeError("Network request failed"))
							}, a.onabort = function() {
								s(new t.DOMException("Aborted", "AbortError"))
							}, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && n.blob && (a.responseType = "blob"), o.headers.forEach((function(e, t) {
								a.setRequestHeader(t, e)
							})), o.signal && (o.signal.addEventListener("abort", u), a.onreadystatechange = function() {
								4 === a.readyState && o.signal.removeEventListener("abort", u)
							}), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
						}))
					}
					v.polyfill = !0, e.fetch || (e.fetch = v, e.Headers = c, e.Request = g, e.Response = y), t.Headers = c, t.Request = g, t.Response = y, t.fetch = v, Object.defineProperty(t, "__esModule", {
						value: !0
					})
				}({})
			}(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
			var i = r;
			(t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
		},
		"./node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				i = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
			class s extends i.IJsonRpcProvider {
				constructor(e) {
					super(e), this.events = new r.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
				}
				async connect() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
					await this.open(e)
				}
				async disconnect() {
					await this.close()
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				async request(e, t) {
					return this.requestStrict(Object(i.formatJsonRpcRequest)(e.method, e.params || [], e.id || Object(i.getBigIntRpcId)().toString()), t)
				}
				async requestStrict(e, t) {
					return new Promise(async (n, r) => {
						if (!this.connection.connected) try {
							await this.open()
						} catch (s) {
							r(s)
						}
						this.events.on(`${e.id}`, e => {
							Object(i.isJsonRpcError)(e) ? r(e.error) : n(e.result)
						});
						try {
							await this.connection.send(e, t)
						} catch (s) {
							r(s)
						}
					})
				}
				setConnection() {
					return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
				}
				onPayload(e) {
					this.events.emit("payload", e), Object(i.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
						type: e.method,
						data: e.params
					})
				}
				onClose(e) {
					e && 3e3 === e.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
				}
				async open() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection;
					this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
				}
				async close() {
					await this.connection.close()
				}
				registerEventListeners() {
					this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
				}
			}
		},
		"./node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			class r {}
			class i extends r {
				constructor(e) {
					super()
				}
			}
			class s extends r {
				constructor() {
					super()
				}
			}
			class o extends s {
				constructor(e) {
					super()
				}
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "INTERNAL_ERROR",
				i = "SERVER_ERROR",
				s = [-32700, -32600, -32601, -32602, -32603],
				o = [-32e3, -32099],
				a = {
					PARSE_ERROR: {
						code: -32700,
						message: "Parse error"
					},
					INVALID_REQUEST: {
						code: -32600,
						message: "Invalid Request"
					},
					METHOD_NOT_FOUND: {
						code: -32601,
						message: "Method not found"
					},
					INVALID_PARAMS: {
						code: -32602,
						message: "Invalid params"
					},
					[r]: {
						code: -32603,
						message: "Internal error"
					},
					[i]: {
						code: -32e3,
						message: "Server error"
					}
				},
				c = i
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@walletconnect/environment/dist/cjs/index.js");
			n.o(r, "IJsonRpcProvider") && n.d(t, "IJsonRpcProvider", (function() {
				return r.IJsonRpcProvider
			})), n.o(r, "formatJsonRpcError") && n.d(t, "formatJsonRpcError", (function() {
				return r.formatJsonRpcError
			})), n.o(r, "formatJsonRpcRequest") && n.d(t, "formatJsonRpcRequest", (function() {
				return r.formatJsonRpcRequest
			})), n.o(r, "formatJsonRpcResult") && n.d(t, "formatJsonRpcResult", (function() {
				return r.formatJsonRpcResult
			})), n.o(r, "getBigIntRpcId") && n.d(t, "getBigIntRpcId", (function() {
				return r.getBigIntRpcId
			})), n.o(r, "isHttpUrl") && n.d(t, "isHttpUrl", (function() {
				return r.isHttpUrl
			})), n.o(r, "isJsonRpcError") && n.d(t, "isJsonRpcError", (function() {
				return r.isJsonRpcError
			})), n.o(r, "isJsonRpcRequest") && n.d(t, "isJsonRpcRequest", (function() {
				return r.isJsonRpcRequest
			})), n.o(r, "isJsonRpcResponse") && n.d(t, "isJsonRpcResponse", (function() {
				return r.isJsonRpcResponse
			})), n.o(r, "isJsonRpcResult") && n.d(t, "isJsonRpcResult", (function() {
				return r.isJsonRpcResult
			})), n.o(r, "isLocalhostUrl") && n.d(t, "isLocalhostUrl", (function() {
				return r.isLocalhostUrl
			})), n.o(r, "isReactNative") && n.d(t, "isReactNative", (function() {
				return r.isReactNative
			})), n.o(r, "isWsUrl") && n.d(t, "isWsUrl", (function() {
				return r.isWsUrl
			})), n.o(r, "payloadId") && n.d(t, "payloadId", (function() {
				return r.payloadId
			}));
			r.isNode
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js");

			function i(e) {
				return r.c.includes(e)
			}

			function s(e) {
				return Object.keys(r.f).includes(e) ? r.f[e] : r.f[r.a]
			}

			function o(e) {
				const t = Object.values(r.f).find(t => t.code === e);
				return t || r.f[r.a]
			}

			function a(e, t, n) {
				return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${n} RPC url at ${t}`) : e
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js"),
				i = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js");

			function s() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
				return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
			}

			function o() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6;
				return BigInt(s(e))
			}

			function a(e, t, n) {
				return {
					id: n || s(),
					jsonrpc: "2.0",
					method: e,
					params: t
				}
			}

			function c(e, t) {
				return {
					id: e,
					jsonrpc: "2.0",
					result: t
				}
			}

			function u(e, t, n) {
				return {
					id: e,
					jsonrpc: "2.0",
					error: l(t, n)
				}
			}

			function l(e, t) {
				return void 0 === e ? Object(r.a)(i.b) : ("string" == typeof e && (e = Object.assign(Object.assign({}, Object(r.a)(i.d)), {
					message: e
				})), void 0 !== t && (e.data = t), Object(r.c)(e.code) && (e = Object(r.b)(e.code)), e)
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js");
			var r = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js");
			n.d(t, "parseConnectionError", (function() {
				return r.d
			}));
			var i = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js");
			n.o(i, "IJsonRpcProvider") && n.d(t, "IJsonRpcProvider", (function() {
				return i.IJsonRpcProvider
			})), n.o(i, "formatJsonRpcError") && n.d(t, "formatJsonRpcError", (function() {
				return i.formatJsonRpcError
			})), n.o(i, "formatJsonRpcRequest") && n.d(t, "formatJsonRpcRequest", (function() {
				return i.formatJsonRpcRequest
			})), n.o(i, "formatJsonRpcResult") && n.d(t, "formatJsonRpcResult", (function() {
				return i.formatJsonRpcResult
			})), n.o(i, "getBigIntRpcId") && n.d(t, "getBigIntRpcId", (function() {
				return i.getBigIntRpcId
			})), n.o(i, "isHttpUrl") && n.d(t, "isHttpUrl", (function() {
				return i.isHttpUrl
			})), n.o(i, "isJsonRpcError") && n.d(t, "isJsonRpcError", (function() {
				return i.isJsonRpcError
			})), n.o(i, "isJsonRpcRequest") && n.d(t, "isJsonRpcRequest", (function() {
				return i.isJsonRpcRequest
			})), n.o(i, "isJsonRpcResponse") && n.d(t, "isJsonRpcResponse", (function() {
				return i.isJsonRpcResponse
			})), n.o(i, "isJsonRpcResult") && n.d(t, "isJsonRpcResult", (function() {
				return i.isJsonRpcResult
			})), n.o(i, "isLocalhostUrl") && n.d(t, "isLocalhostUrl", (function() {
				return i.isLocalhostUrl
			})), n.o(i, "isReactNative") && n.d(t, "isReactNative", (function() {
				return i.isReactNative
			})), n.o(i, "isWsUrl") && n.d(t, "isWsUrl", (function() {
				return i.isWsUrl
			})), n.o(i, "payloadId") && n.d(t, "payloadId", (function() {
				return i.payloadId
			}));
			var s = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js");
			n.d(t, "formatJsonRpcError", (function() {
				return s.a
			})), n.d(t, "formatJsonRpcRequest", (function() {
				return s.b
			})), n.d(t, "formatJsonRpcResult", (function() {
				return s.c
			})), n.d(t, "getBigIntRpcId", (function() {
				return s.d
			})), n.d(t, "payloadId", (function() {
				return s.e
			}));
			n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js");
			var o = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js");
			n.d(t, "IJsonRpcProvider", (function() {
				return o.a
			}));
			var a = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js");
			n.d(t, "isHttpUrl", (function() {
				return a.a
			})), n.d(t, "isLocalhostUrl", (function() {
				return a.b
			})), n.d(t, "isWsUrl", (function() {
				return a.c
			}));
			var c = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js");
			n.d(t, "isJsonRpcError", (function() {
				return c.a
			})), n.d(t, "isJsonRpcRequest", (function() {
				return c.b
			})), n.d(t, "isJsonRpcResponse", (function() {
				return c.c
			})), n.d(t, "isJsonRpcResult", (function() {
				return c.d
			}))
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js": function(e, t, n) {
			"use strict"
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js");
			n.d(t, "a", (function() {
				return r.b
			}))
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			const r = "^https?:",
				i = "^wss?:";

			function s(e, t) {
				const n = function(e) {
					const t = e.match(new RegExp(/^\w+:/, "gi"));
					if (t && t.length) return t[0]
				}(e);
				return void 0 !== n && new RegExp(t).test(n)
			}

			function o(e) {
				return s(e, r)
			}

			function a(e) {
				return s(e, i)
			}

			function c(e) {
				return new RegExp("wss?://localhost(:d{2,5})?").test(e)
			}
		},
		"./node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js": function(e, t, n) {
			"use strict";

			function r(e) {
				return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
			}

			function i(e) {
				return r(e) && "method" in e
			}

			function s(e) {
				return r(e) && (o(e) || a(e))
			}

			function o(e) {
				return "result" in e
			}

			function a(e) {
				return "error" in e
			}
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}))
		},
		"./node_modules/@walletconnect/jsonrpc-ws-connection/dist/esm/ws.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
					i = n("./node_modules/@walletconnect/safe-json/dist/esm/index.js"),
					s = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js");
				const o = 10,
					a = () => "undefined" != typeof window,
					c = (() => void 0 !== e && void 0 !== e.WebSocket ? e.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : n("./node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js"))();
				t.a = class {
					constructor(e) {
						if (this.url = e, this.events = new r.EventEmitter, this.registering = !1, !Object(s.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
						this.url = e
					}
					get connected() {
						return void 0 !== this.socket
					}
					get connecting() {
						return this.registering
					}
					on(e, t) {
						this.events.on(e, t)
					}
					once(e, t) {
						this.events.once(e, t)
					}
					off(e, t) {
						this.events.off(e, t)
					}
					removeListener(e, t) {
						this.events.removeListener(e, t)
					}
					async open() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
						await this.register(e)
					}
					async close() {
						return new Promise((e, t) => {
							void 0 !== this.socket ? (this.socket.onclose = t => {
								this.onClose(t), e()
							}, this.socket.close()) : t(new Error("Connection already closed"))
						})
					}
					async send(e, t) {
						void 0 === this.socket && (this.socket = await this.register());
						try {
							this.socket.send(Object(i.b)(e))
						} catch (n) {
							this.onError(e.id, n)
						}
					}
					register() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
						if (!Object(s.isWsUrl)(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
						if (this.registering) {
							const e = this.events.getMaxListeners();
							return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
								this.events.once("register_error", e => {
									this.resetMaxListeners(), t(e)
								}), this.events.once("open", () => {
									if (this.resetMaxListeners(), void 0 === this.socket) return t(new Error("WebSocket connection is missing or invalid"));
									e(this.socket)
								})
							})
						}
						return this.url = e, this.registering = !0, new Promise((t, n) => {
							const r = Object(s.isReactNative)() ? void 0 : {
									rejectUnauthorized: !Object(s.isLocalhostUrl)(e)
								},
								i = new c(e, [], r);
							a() ? i.onerror = e => {
								const t = e;
								n(this.emitError(t.error))
							} : i.on("error", e => {
								n(this.emitError(e))
							}), i.onopen = () => {
								this.onOpen(i), t(i)
							}
						})
					}
					onOpen(e) {
						e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
					}
					onClose(e) {
						this.socket = void 0, this.registering = !1, this.events.emit("close", e)
					}
					onPayload(e) {
						if (void 0 === e.data) return;
						const t = "string" == typeof e.data ? Object(i.a)(e.data) : e.data;
						this.events.emit("payload", t)
					}
					onError(e, t) {
						const n = this.parseError(t),
							r = n.message || n.toString(),
							i = Object(s.formatJsonRpcError)(e, r);
						this.events.emit("payload", i)
					}
					parseError(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
						return Object(s.parseConnectionError)(e, t, "WS")
					}
					resetMaxListeners() {
						this.events.getMaxListeners() > o && this.events.setMaxListeners(o)
					}
					emitError(e) {
						const t = this.parseError(new Error((null == e ? void 0 : e.message) || `WebSocket connection failed for URL: ${this.url}`));
						return this.events.emit("register_error", t), t
					}
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@walletconnect/jsonrpc-ws-connection/node_modules/ws/browser.js": function(e, t, n) {
			"use strict";
			e.exports = function() {
				throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
			}
		},
		"./node_modules/@walletconnect/keyvaluestorage/dist/cjs/browser/lib/localStorage.js": function(e, t, n) {
			"use strict";
			n.r(t),
				function(e, t) {
					n("./node_modules/core-js/modules/web.dom.iterable.js");
					! function() {
						let n;

						function r() {}(n = r).prototype.getItem = function(e) {
							return this.hasOwnProperty(e) ? String(this[e]) : null
						}, n.prototype.setItem = function(e, t) {
							this[e] = String(t)
						}, n.prototype.removeItem = function(e) {
							delete this[e]
						}, n.prototype.clear = function() {
							const e = this;
							Object.keys(e).forEach((function(t) {
								e[t] = void 0, delete e[t]
							}))
						}, n.prototype.key = function(e) {
							return e = e || 0, Object.keys(this)[e]
						}, n.prototype.__defineGetter__("length", (function() {
							return Object.keys(this).length
						})), void 0 !== e && e.localStorage ? t.exports = e.localStorage : "undefined" != typeof window && window.localStorage ? t.exports = window.localStorage : t.exports = new r
					}()
				}.call(this, n("./node_modules/webpack/buildin/global.js"), n("./node_modules/webpack/buildin/harmony-module.js")(e))
		},
		"./node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/@walletconnect/keyvaluestorage/node_modules/tslib/tslib.es6.js");
			r.__exportStar(n("./node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/types.js"), t), r.__exportStar(n("./node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/utils.js"), t)
		},
		"./node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/types.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IKeyValueStorage = void 0;
			t.IKeyValueStorage = class {}
		},
		"./node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/utils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.parseEntry = void 0;
			const r = n("./node_modules/safe-json-utils/dist/cjs/index.js");
			t.parseEntry = function(e) {
				var t;
				return [e[0], r.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
			}
		},
		"./node_modules/@walletconnect/keyvaluestorage/node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__extends", (function() {
				return i
			})), n.d(t, "__assign", (function() {
				return s
			})), n.d(t, "__rest", (function() {
				return o
			})), n.d(t, "__decorate", (function() {
				return a
			})), n.d(t, "__param", (function() {
				return c
			})), n.d(t, "__metadata", (function() {
				return u
			})), n.d(t, "__awaiter", (function() {
				return l
			})), n.d(t, "__generator", (function() {
				return h
			})), n.d(t, "__createBinding", (function() {
				return d
			})), n.d(t, "__exportStar", (function() {
				return f
			})), n.d(t, "__values", (function() {
				return p
			})), n.d(t, "__read", (function() {
				return g
			})), n.d(t, "__spread", (function() {
				return b
			})), n.d(t, "__spreadArrays", (function() {
				return y
			})), n.d(t, "__await", (function() {
				return m
			})), n.d(t, "__asyncGenerator", (function() {
				return v
			})), n.d(t, "__asyncDelegator", (function() {
				return _
			})), n.d(t, "__asyncValues", (function() {
				return w
			})), n.d(t, "__makeTemplateObject", (function() {
				return j
			})), n.d(t, "__importStar", (function() {
				return E
			})), n.d(t, "__importDefault", (function() {
				return O
			})), n.d(t, "__classPrivateFieldGet", (function() {
				return S
			})), n.d(t, "__classPrivateFieldSet", (function() {
				return I
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function a(e, t, n, r) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
				return s > 3 && o && Object.defineProperty(t, n, o), o
			}

			function c(e, t) {
				return function(n, r) {
					t(n, r, e)
				}
			}

			function u(e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			}

			function l(e, t, n, r) {
				return new(n || (n = Promise))((function(i, s) {
					function o(e) {
						try {
							c(r.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							c(r.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(o, a)
					}
					c((r = r.apply(e, t || [])).next())
				}))
			}

			function h(e, t) {
				var n, r, i, s, o = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(s) {
					return function(a) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; o;) try {
								if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
								switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
									case 0:
									case 1:
										i = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, r = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < i[1]) {
											o.label = i[1], i = s;
											break
										}
										if (i && o.label < i[2]) {
											o.label = i[2], o.ops.push(s);
											break
										}
										i[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], r = 0
							} finally {
								n = i = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, a])
					}
				}
			}

			function d(e, t, n, r) {
				void 0 === r && (r = n), e[r] = t[n]
			}

			function f(e, t) {
				for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
			}

			function p(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function g(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, s = n.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						r && !r.done && (n = s.return) && n.call(s)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function b() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
				return e
			}

			function y() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var r = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
				return r
			}

			function m(e) {
				return this instanceof m ? (this.v = e, this) : new m(e)
			}

			function v(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var r, i = n.apply(e, t || []),
					s = [];
				return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
					return this
				}, r;

				function o(e) {
					i[e] && (r[e] = function(t) {
						return new Promise((function(n, r) {
							s.push([e, t, n, r]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : l(s[0][2], n)
					} catch (r) {
						l(s[0][3], r)
					}
					var n
				}

				function c(e) {
					a("next", e)
				}

				function u(e) {
					a("throw", e)
				}

				function l(e, t) {
					e(t), s.shift(), s.length && a(s[0][0], s[0][1])
				}
			}

			function _(e) {
				var t, n;
				return t = {}, r("next"), r("throw", (function(e) {
					throw e
				})), r("return"), t[Symbol.iterator] = function() {
					return this
				}, t;

				function r(r, i) {
					t[r] = e[r] ? function(t) {
						return (n = !n) ? {
							value: m(e[r](t)),
							done: "return" === r
						} : i ? i(t) : t
					} : i
				}
			}

			function w(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function r(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(r, i) {
							(function(e, t, n, r) {
								Promise.resolve(r).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(r, i, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}

			function j(e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: t
				}) : e.raw = t, e
			}

			function E(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function O(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function S(e, t) {
				if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
				return t.get(e)
			}

			function I(e, t, n) {
				if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
				return t.set(e, n), n
			}
		},
		"./node_modules/@walletconnect/logger/dist/cjs/constants.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
				level: "info"
			}, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
		},
		"./node_modules/@walletconnect/logger/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.pino = void 0;
			const r = n("./node_modules/@walletconnect/logger/node_modules/tslib/tslib.es6.js"),
				i = r.__importDefault(n("./node_modules/@walletconnect/logger/node_modules/pino/browser.js"));
			Object.defineProperty(t, "pino", {
				enumerable: !0,
				get: function() {
					return i.default
				}
			}), r.__exportStar(n("./node_modules/@walletconnect/logger/dist/cjs/constants.js"), t), r.__exportStar(n("./node_modules/@walletconnect/logger/dist/cjs/utils.js"), t)
		},
		"./node_modules/@walletconnect/logger/dist/cjs/utils.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
			const r = n("./node_modules/@walletconnect/logger/dist/cjs/constants.js");

			function i(e) {
				return e[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.PINO_CUSTOM_CONTEXT_KEY] || ""
			}

			function s(e, t) {
				return e[arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.PINO_CUSTOM_CONTEXT_KEY] = t, e
			}

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.PINO_CUSTOM_CONTEXT_KEY,
					n = "";
				return n = void 0 === e.bindings ? i(e, t) : e.bindings().context || ""
			}

			function a(e, t) {
				const n = o(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.PINO_CUSTOM_CONTEXT_KEY);
				return n.trim() ? `${n}/${t}` : t
			}
			t.getDefaultLoggerOptions = function(e) {
				return Object.assign(Object.assign({}, e), {
					level: (null == e ? void 0 : e.level) || r.PINO_LOGGER_DEFAULTS.level
				})
			}, t.getBrowserLoggerContext = i, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.PINO_CUSTOM_CONTEXT_KEY;
				const i = a(e, t, n);
				return s(e.child({
					context: i
				}), i, n)
			}
		},
		"./node_modules/@walletconnect/logger/node_modules/pino/browser.js": function(e, t, n) {
			"use strict";
			const r = n("./node_modules/quick-format-unescaped/index.js");
			e.exports = o;
			const i = function() {
					function e(e) {
						return void 0 !== e && e
					}
					try {
						return "undefined" != typeof globalThis ? globalThis : (Object.defineProperty(Object.prototype, "globalThis", {
							get: function() {
								return delete Object.prototype.globalThis, this.globalThis = this
							},
							configurable: !0
						}), globalThis)
					} catch (t) {
						return e(self) || e(window) || e(this) || {}
					}
				}().console || {},
				s = {
					mapHttpRequest: p,
					mapHttpResponse: p,
					wrapRequestSerializer: g,
					wrapResponseSerializer: g,
					wrapErrorSerializer: g,
					req: p,
					res: p,
					err: function(e) {
						const t = {
							type: e.constructor.name,
							msg: e.message,
							stack: e.stack
						};
						for (const n in e) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
				};

			function o(e) {
				(e = e || {}).browser = e.browser || {};
				const t = e.browser.transmit;
				if (t && "function" != typeof t.send) throw Error("pino: transmit option must have a send function");
				const n = e.browser.write || i;
				e.browser.write && (e.browser.asObject = !0);
				const r = e.serializers || {},
					s = function(e, t) {
						if (Array.isArray(e)) {
							return e.filter((function(e) {
								return "!stdSerializers.err" !== e
							}))
						}
						return !0 === e && Object.keys(t)
					}(e.browser.serialize, r);
				let c = e.browser.serialize;
				Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
				"function" == typeof n && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), !1 === e.enabled && (e.level = "silent");
				const h = e.level || "info",
					p = Object.create(n);
				p.log || (p.log = b), Object.defineProperty(p, "levelVal", {
					get: function() {
						return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
					}
				}), Object.defineProperty(p, "level", {
					get: function() {
						return this._level
					},
					set: function(e) {
						if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
						this._level = e, a(g, p, "error", "log"), a(g, p, "fatal", "error"), a(g, p, "warn", "error"), a(g, p, "info", "log"), a(g, p, "debug", "log"), a(g, p, "trace", "log")
					}
				});
				const g = {
					transmit: t,
					serialize: s,
					asObject: e.browser.asObject,
					levels: ["error", "fatal", "warn", "info", "debug", "trace"],
					timestamp: f(e)
				};
				return p.levels = o.levels, p.level = h, p.setMaxListeners = p.getMaxListeners = p.emit = p.addListener = p.on = p.prependListener = p.once = p.prependOnceListener = p.removeListener = p.removeAllListeners = p.listeners = p.listenerCount = p.eventNames = p.write = p.flush = b, p.serializers = r, p._serialize = s, p._stdErrSerialize = c, p.child = function(n, i) {
					if (!n) throw new Error("missing bindings for child Pino");
					i = i || {}, s && n.serializers && (i.serializers = n.serializers);
					const o = i.serializers;
					if (s && o) {
						var a = Object.assign({}, r, o),
							c = !0 === e.browser.serialize ? Object.keys(a) : s;
						delete n.serializers, u([n], c, a, this._stdErrSerialize)
					}

					function h(e) {
						this._childLevel = 1 + (0 | e._childLevel), this.error = l(e, n, "error"), this.fatal = l(e, n, "fatal"), this.warn = l(e, n, "warn"), this.info = l(e, n, "info"), this.debug = l(e, n, "debug"), this.trace = l(e, n, "trace"), a && (this.serializers = a, this._serialize = c), t && (this._logEvent = d([].concat(e._logEvent.bindings, n)))
					}
					return h.prototype = this, new h(this)
				}, t && (p._logEvent = d()), p
			}

			function a(e, t, n, r) {
				const s = Object.getPrototypeOf(t);
				t[n] = t.levelVal > t.levels.values[n] ? b : s[n] ? s[n] : i[n] || i[r] || b,
					function(e, t, n) {
						if (!e.transmit && t[n] === b) return;
						t[n] = (r = t[n], function() {
							const s = e.timestamp(),
								a = new Array(arguments.length),
								l = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
							for (var d = 0; d < a.length; d++) a[d] = arguments[d];
							if (e.serialize && !e.asObject && u(a, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? r.call(l, c(this, n, a, s)) : r.apply(l, a), e.transmit) {
								const r = e.transmit.level || t.level,
									i = o.levels.values[r],
									c = o.levels.values[n];
								if (c < i) return;
								h(this, {
									ts: s,
									methodLevel: n,
									methodValue: c,
									transmitLevel: r,
									transmitValue: o.levels.values[e.transmit.level || t.level],
									send: e.transmit.send,
									val: t.levelVal
								}, a)
							}
						});
						var r
					}(e, t, n)
			}

			function c(e, t, n, i) {
				e._serialize && u(n, e._serialize, e.serializers, e._stdErrSerialize);
				const s = n.slice();
				let a = s[0];
				const c = {};
				i && (c.time = i), c.level = o.levels.values[t];
				let l = 1 + (0 | e._childLevel);
				if (l < 1 && (l = 1), null !== a && "object" == typeof a) {
					for (; l-- && "object" == typeof s[0];) Object.assign(c, s.shift());
					a = s.length ? r(s.shift(), s) : void 0
				} else "string" == typeof a && (a = r(s.shift(), s));
				return void 0 !== a && (c.msg = a), c
			}

			function u(e, t, n, r) {
				for (const i in e)
					if (r && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
					else if ("object" == typeof e[i] && !Array.isArray(e[i]))
					for (const r in e[i]) t && t.indexOf(r) > -1 && r in n && (e[i][r] = n[r](e[i][r]))
			}

			function l(e, t, n) {
				return function() {
					const r = new Array(1 + arguments.length);
					r[0] = t;
					for (var i = 1; i < r.length; i++) r[i] = arguments[i - 1];
					return e[n].apply(this, r)
				}
			}

			function h(e, t, n) {
				const r = t.send,
					i = t.ts,
					s = t.methodLevel,
					o = t.methodValue,
					a = t.val,
					c = e._logEvent.bindings;
				u(n, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = i, e._logEvent.messages = n.filter((function(e) {
					return -1 === c.indexOf(e)
				})), e._logEvent.level.label = s, e._logEvent.level.value = o, r(s, e._logEvent, a), e._logEvent = d(c)
			}

			function d(e) {
				return {
					ts: 0,
					messages: [],
					bindings: e || [],
					level: {
						label: "",
						value: 0
					}
				}
			}

			function f(e) {
				return "function" == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? y : m
			}

			function p() {
				return {}
			}

			function g(e) {
				return e
			}

			function b() {}

			function y() {
				return !1
			}

			function m() {
				return Date.now()
			}
			o.levels = {
				values: {
					fatal: 60,
					error: 50,
					warn: 40,
					info: 30,
					debug: 20,
					trace: 10
				},
				labels: {
					10: "trace",
					20: "debug",
					30: "info",
					40: "warn",
					50: "error",
					60: "fatal"
				}
			}, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
				nullTime: y,
				epochTime: m,
				unixTime: function() {
					return Math.round(Date.now() / 1e3)
				},
				isoTime: function() {
					return new Date(Date.now()).toISOString()
				}
			})
		},
		"./node_modules/@walletconnect/logger/node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__extends", (function() {
				return i
			})), n.d(t, "__assign", (function() {
				return s
			})), n.d(t, "__rest", (function() {
				return o
			})), n.d(t, "__decorate", (function() {
				return a
			})), n.d(t, "__param", (function() {
				return c
			})), n.d(t, "__metadata", (function() {
				return u
			})), n.d(t, "__awaiter", (function() {
				return l
			})), n.d(t, "__generator", (function() {
				return h
			})), n.d(t, "__createBinding", (function() {
				return d
			})), n.d(t, "__exportStar", (function() {
				return f
			})), n.d(t, "__values", (function() {
				return p
			})), n.d(t, "__read", (function() {
				return g
			})), n.d(t, "__spread", (function() {
				return b
			})), n.d(t, "__spreadArrays", (function() {
				return y
			})), n.d(t, "__await", (function() {
				return m
			})), n.d(t, "__asyncGenerator", (function() {
				return v
			})), n.d(t, "__asyncDelegator", (function() {
				return _
			})), n.d(t, "__asyncValues", (function() {
				return w
			})), n.d(t, "__makeTemplateObject", (function() {
				return j
			})), n.d(t, "__importStar", (function() {
				return E
			})), n.d(t, "__importDefault", (function() {
				return O
			})), n.d(t, "__classPrivateFieldGet", (function() {
				return S
			})), n.d(t, "__classPrivateFieldSet", (function() {
				return I
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function a(e, t, n, r) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
				return s > 3 && o && Object.defineProperty(t, n, o), o
			}

			function c(e, t) {
				return function(n, r) {
					t(n, r, e)
				}
			}

			function u(e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			}

			function l(e, t, n, r) {
				return new(n || (n = Promise))((function(i, s) {
					function o(e) {
						try {
							c(r.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							c(r.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(o, a)
					}
					c((r = r.apply(e, t || [])).next())
				}))
			}

			function h(e, t) {
				var n, r, i, s, o = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(s) {
					return function(a) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; o;) try {
								if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
								switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
									case 0:
									case 1:
										i = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, r = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < i[1]) {
											o.label = i[1], i = s;
											break
										}
										if (i && o.label < i[2]) {
											o.label = i[2], o.ops.push(s);
											break
										}
										i[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], r = 0
							} finally {
								n = i = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, a])
					}
				}
			}

			function d(e, t, n, r) {
				void 0 === r && (r = n), e[r] = t[n]
			}

			function f(e, t) {
				for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
			}

			function p(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function g(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, s = n.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						r && !r.done && (n = s.return) && n.call(s)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function b() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
				return e
			}

			function y() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var r = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
				return r
			}

			function m(e) {
				return this instanceof m ? (this.v = e, this) : new m(e)
			}

			function v(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var r, i = n.apply(e, t || []),
					s = [];
				return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
					return this
				}, r;

				function o(e) {
					i[e] && (r[e] = function(t) {
						return new Promise((function(n, r) {
							s.push([e, t, n, r]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : l(s[0][2], n)
					} catch (r) {
						l(s[0][3], r)
					}
					var n
				}

				function c(e) {
					a("next", e)
				}

				function u(e) {
					a("throw", e)
				}

				function l(e, t) {
					e(t), s.shift(), s.length && a(s[0][0], s[0][1])
				}
			}

			function _(e) {
				var t, n;
				return t = {}, r("next"), r("throw", (function(e) {
					throw e
				})), r("return"), t[Symbol.iterator] = function() {
					return this
				}, t;

				function r(r, i) {
					t[r] = e[r] ? function(t) {
						return (n = !n) ? {
							value: m(e[r](t)),
							done: "return" === r
						} : i ? i(t) : t
					} : i
				}
			}

			function w(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function r(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(r, i) {
							(function(e, t, n, r) {
								Promise.resolve(r).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(r, i, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}

			function j(e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: t
				}) : e.raw = t, e
			}

			function E(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function O(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function S(e, t) {
				if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
				return t.get(e)
			}

			function I(e, t, n) {
				if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
				return t.set(e, n), n
			}
		},
		"./node_modules/@walletconnect/relay-api/dist/esm/index.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@walletconnect/relay-api/dist/esm/types.js");
			n.o(r, "RELAY_JSONRPC") && n.d(t, "RELAY_JSONRPC", (function() {
				return r.RELAY_JSONRPC
			}));
			n("./node_modules/@walletconnect/relay-api/dist/esm/parsers.js");
			var i = n("./node_modules/@walletconnect/relay-api/dist/esm/jsonrpc.js");
			n.d(t, "RELAY_JSONRPC", (function() {
				return i.a
			}));
			n("./node_modules/@walletconnect/relay-api/dist/esm/validators.js")
		},
		"./node_modules/@walletconnect/relay-api/dist/esm/jsonrpc.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = {
				waku: {
					publish: "waku_publish",
					batchPublish: "waku_batchPublish",
					subscribe: "waku_subscribe",
					batchSubscribe: "waku_batchSubscribe",
					subscription: "waku_subscription",
					unsubscribe: "waku_unsubscribe",
					batchUnsubscribe: "waku_batchUnsubscribe"
				},
				irn: {
					publish: "irn_publish",
					batchPublish: "irn_batchPublish",
					subscribe: "irn_subscribe",
					batchSubscribe: "irn_batchSubscribe",
					subscription: "irn_subscription",
					unsubscribe: "irn_unsubscribe",
					batchUnsubscribe: "irn_batchUnsubscribe"
				},
				iridium: {
					publish: "iridium_publish",
					batchPublish: "iridium_batchPublish",
					subscribe: "iridium_subscribe",
					batchSubscribe: "iridium_batchSubscribe",
					subscription: "iridium_subscription",
					unsubscribe: "iridium_unsubscribe",
					batchUnsubscribe: "iridium_batchUnsubscribe"
				}
			}
		},
		"./node_modules/@walletconnect/relay-api/dist/esm/misc.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function r(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "string";
				if (!e[t] || typeof e[t] !== n) throw new Error(`Missing or invalid "${t}" param`)
			}

			function i(e, t, n) {
				return !!(!n.length ? function(e, t) {
					return Array.isArray(e) ? e.length === t : Object.keys(e).length === t
				}(e, t.length) : function(e, t) {
					return Array.isArray(e) ? e.length >= t : Object.keys(e).length >= t
				}(e, t.length)) && function(e, t) {
					let n = !0;
					return t.forEach(t => {
						t in e || (n = !1)
					}), n
				}(e, t)
			}

			function s(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_";
				const r = e.split(n);
				return r[r.length - 1].trim().toLowerCase() === t.trim().toLowerCase()
			}
		},
		"./node_modules/@walletconnect/relay-api/dist/esm/parsers.js": function(e, t, n) {
			"use strict";
			n("./node_modules/@walletconnect/relay-api/dist/esm/misc.js"), n("./node_modules/@walletconnect/relay-api/dist/esm/validators.js")
		},
		"./node_modules/@walletconnect/relay-api/dist/esm/types.js": function(e, t) {},
		"./node_modules/@walletconnect/relay-api/dist/esm/validators.js": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return h
			}));
			var r = n("./node_modules/@walletconnect/relay-api/dist/esm/misc.js");

			function i(e) {
				return Object(r.c)(e, "subscribe")
			}

			function s(e) {
				return Object(r.b)(e, ["topic"], [])
			}

			function o(e) {
				return Object(r.c)(e, "publish")
			}

			function a(e) {
				return Object(r.b)(e, ["message", "topic", "ttl"], ["prompt", "tag"])
			}

			function c(e) {
				return Object(r.c)(e, "unsubscribe")
			}

			function u(e) {
				return Object(r.b)(e, ["id", "topic"], [])
			}

			function l(e) {
				return Object(r.c)(e, "subscription")
			}

			function h(e) {
				return Object(r.b)(e, ["id", "data"], [])
			}
		},
		"./node_modules/@walletconnect/relay-auth/dist/esm/api.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./node_modules/@stablelib/ed25519/lib/ed25519.js"),
				i = n("./node_modules/@stablelib/random/lib/random.js"),
				s = n("./node_modules/@walletconnect/time/dist/cjs/index.js"),
				o = n("./node_modules/@walletconnect/relay-auth/dist/esm/constants.js"),
				a = n("./node_modules/@walletconnect/relay-auth/dist/esm/utils.js");

			function c() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(i.randomBytes)(o.j);
				return r.generateKeyPairFromSeed(e)
			}
			async function u(e, t, n, i) {
				let c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Object(s.fromMiliseconds)(Date.now());
				const u = {
						alg: o.h,
						typ: o.i
					},
					l = {
						iss: Object(a.d)(i.publicKey),
						sub: e,
						aud: t,
						iat: c,
						exp: c + n
					},
					h = Object(a.c)({
						header: u,
						payload: l
					}),
					d = r.sign(i.secretKey, h);
				return Object(a.e)({
					header: u,
					payload: l,
					signature: d
				})
			}
		},
		"./node_modules/@walletconnect/relay-auth/dist/esm/constants.js": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "j", (function() {
				return b
			}));
			const r = "EdDSA",
				i = "JWT",
				s = ".",
				o = "base64url",
				a = "utf8",
				c = "utf8",
				u = ":",
				l = "did",
				h = "key",
				d = "base58btc",
				f = "z",
				p = "K36",
				g = 32,
				b = 32
		},
		"./node_modules/@walletconnect/relay-auth/dist/esm/index.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@walletconnect/relay-auth/dist/esm/api.js");
			n.d(t, "generateKeyPair", (function() {
				return r.a
			})), n.d(t, "signJWT", (function() {
				return r.b
			}));
			n("./node_modules/@walletconnect/relay-auth/dist/esm/constants.js");
			var i = n("./node_modules/@walletconnect/relay-auth/dist/esm/types.js");
			n.o(i, "encodeIss") && n.d(t, "encodeIss", (function() {
				return i.encodeIss
			}));
			var s = n("./node_modules/@walletconnect/relay-auth/dist/esm/utils.js");
			n.d(t, "encodeIss", (function() {
				return s.d
			}))
		},
		"./node_modules/@walletconnect/relay-auth/dist/esm/types.js": function(e, t) {},
		"./node_modules/@walletconnect/relay-auth/dist/esm/utils.js": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./node_modules/uint8arrays/cjs/src/concat.js"),
				i = n("./node_modules/uint8arrays/cjs/src/to-string.js"),
				s = n("./node_modules/uint8arrays/cjs/src/from-string.js"),
				o = n("./node_modules/@walletconnect/safe-json/dist/esm/index.js"),
				a = n("./node_modules/@walletconnect/relay-auth/dist/esm/constants.js");

			function c(e) {
				return Object(o.a)(Object(i.toString)(Object(s.fromString)(e, a.g), a.e))
			}

			function u(e) {
				return Object(i.toString)(Object(s.fromString)(Object(o.b)(e), a.e), a.g)
			}

			function l(e) {
				const t = Object(s.fromString)(a.m, a.l),
					n = a.k + Object(i.toString)(Object(r.concat)([t, e]), a.l);
				return [a.d, a.c, n].join(a.b)
			}

			function h(e) {
				const [t, n, r] = e.split(a.b);
				if (t !== a.d || n !== a.c) throw new Error('Issuer must be a DID with method "key"');
				if (r.slice(0, 1) !== a.k) throw new Error("Issuer must be a key in mulicodec format");
				const o = Object(s.fromString)(r.slice(1), a.l);
				if (Object(i.toString)(o.slice(0, 2), a.l) !== a.m) throw new Error('Issuer must be a public key with type "Ed25519"');
				const c = o.slice(2);
				if (c.length !== a.n) throw new Error("Issuer must be a public key with length 32 bytes");
				return c
			}

			function d(e) {
				return Object(s.fromString)([u(e.header), u(e.payload)].join(a.f), a.a)
			}

			function f(e) {
				return [u(e.header), u(e.payload), (t = e.signature, Object(i.toString)(t, a.g))].join(a.f);
				var t
			}

			function p(e) {
				const t = e.split(a.f);
				var n;
				return {
					header: c(t[0]),
					payload: c(t[1]),
					signature: (n = t[2], Object(s.fromString)(n, a.g)),
					data: Object(s.fromString)(t.slice(0, 2).join(a.f), a.a)
				}
			}
		},
		"./node_modules/@walletconnect/safe-json/dist/esm/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
				i = e => {
					const t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
					return JSON.parse(t, (e, t) => {
						return "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t
					})
				};

			function s(e) {
				if ("string" != typeof e) throw new Error(`Cannot safe json parse value of type ${typeof e}`);
				try {
					return i(e)
				} catch (t) {
					return e
				}
			}

			function o(e) {
				return "string" == typeof e ? e : r(e) || ""
			}
		},
		"./node_modules/@walletconnect/sign-client/dist/index.es.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return $n
			})), n.d(t, "b", (function() {
				return ar
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
				i = n.n(r);
			Object.defineProperty(exports, "__esModule", {
				value: !0
			}), exports.KeyValueStorage = void 0;
			const s = n("./node_modules/@walletconnect/keyvaluestorage/node_modules/tslib/tslib.es6.js"),
				o = n("./node_modules/safe-json-utils/dist/cjs/index.js"),
				a = s.__importDefault(n("./node_modules/@walletconnect/keyvaluestorage/dist/cjs/browser/lib/localStorage.js")),
				c = n("./node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/index.js");
			class u {
				constructor() {
					this.localStorage = a.default
				}
				getKeys() {
					return s.__awaiter(this, void 0, void 0, (function*() {
						return Object.keys(this.localStorage)
					}))
				}
				getEntries() {
					return s.__awaiter(this, void 0, void 0, (function*() {
						return Object.entries(this.localStorage).map(c.parseEntry)
					}))
				}
				getItem(e) {
					return s.__awaiter(this, void 0, void 0, (function*() {
						const t = this.localStorage.getItem(e);
						if (null !== t) return o.safeJsonParse(t)
					}))
				}
				setItem(e, t) {
					return s.__awaiter(this, void 0, void 0, (function*() {
						this.localStorage.setItem(e, o.safeJsonStringify(t))
					}))
				}
				removeItem(e) {
					return s.__awaiter(this, void 0, void 0, (function*() {
						this.localStorage.removeItem(e)
					}))
				}
			}
			exports.KeyValueStorage = u, exports.default = u;
			var l = n("./node_modules/@walletconnect/heartbeat/dist/cjs/index.js"),
				h = n("./node_modules/@walletconnect/logger/dist/cjs/index.js"),
				d = n("./node_modules/@walletconnect/events/dist/esm/index.js");
			class f extends d.IEvents {
				constructor(e) {
					super(), this.opts = e, this.protocol = "wc", this.version = 2
				}
			}
			class p extends d.IEvents {
				constructor(e, t) {
					super(), this.core = e, this.logger = t, this.records = new Map
				}
			}
			class g {
				constructor(e, t) {
					this.logger = e, this.core = t
				}
			}
			class b extends d.IEvents {
				constructor(e, t) {
					super(), this.relayer = e, this.logger = t
				}
			}
			class y extends d.IEvents {
				constructor(e) {
					super()
				}
			}
			class m {
				constructor(e, t, n, r) {
					this.core = e, this.logger = t, this.name = n
				}
			}
			class v extends d.IEvents {
				constructor(e, t) {
					super(), this.relayer = e, this.logger = t
				}
			}
			class _ extends d.IEvents {
				constructor(e, t) {
					super(), this.core = e, this.logger = t
				}
			}
			class w {
				constructor(e, t) {
					this.projectId = e, this.logger = t
				}
			}
			i.a;
			class j {
				constructor(e) {
					this.opts = e, this.protocol = "wc", this.version = 2
				}
			}
			r.EventEmitter;
			class E {
				constructor(e) {
					this.client = e
				}
			}
			var O = n("./node_modules/@walletconnect/safe-json/dist/esm/index.js"),
				S = n("./node_modules/@walletconnect/relay-auth/dist/esm/index.js"),
				I = n("./node_modules/@walletconnect/utils/dist/index.es.js"),
				P = n("./node_modules/uint8arrays/cjs/src/index.js"),
				x = n("./node_modules/@walletconnect/time/dist/cjs/index.js"),
				R = n("./node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js"),
				A = n("./node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js"),
				N = n("./node_modules/@walletconnect/jsonrpc-ws-connection/dist/esm/ws.js").a,
				T = n("./node_modules/lodash.isequal/index.js"),
				C = n.n(T);
			var U = function(e, t) {
				if (e.length >= 255) throw new TypeError("Alphabet too long");
				for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
				for (var i = 0; i < e.length; i++) {
					var s = e.charAt(i),
						o = s.charCodeAt(0);
					if (255 !== n[o]) throw new TypeError(s + " is ambiguous");
					n[o] = i
				}
				var a = e.length,
					c = e.charAt(0),
					u = Math.log(a) / Math.log(256),
					l = Math.log(256) / Math.log(a);

				function h(e) {
					if ("string" != typeof e) throw new TypeError("Expected String");
					if (0 === e.length) return new Uint8Array;
					var t = 0;
					if (" " !== e[t]) {
						for (var r = 0, i = 0; e[t] === c;) r++, t++;
						for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
							var l = n[e.charCodeAt(t)];
							if (255 === l) return;
							for (var h = 0, d = s - 1;
								(0 !== l || h < i) && -1 !== d; d--, h++) l += a * o[d] >>> 0, o[d] = l % 256 >>> 0, l = l / 256 >>> 0;
							if (0 !== l) throw new Error("Non-zero carry");
							i = h, t++
						}
						if (" " !== e[t]) {
							for (var f = s - i; f !== s && 0 === o[f];) f++;
							for (var p = new Uint8Array(r + (s - f)), g = r; f !== s;) p[g++] = o[f++];
							return p
						}
					}
				}
				return {
					encode: function(t) {
						if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
						if (0 === t.length) return "";
						for (var n = 0, r = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, n++;
						for (var o = (s - i) * l + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
							for (var h = t[i], d = 0, f = o - 1;
								(0 !== h || d < r) && -1 !== f; f--, d++) h += 256 * u[f] >>> 0, u[f] = h % a >>> 0, h = h / a >>> 0;
							if (0 !== h) throw new Error("Non-zero carry");
							r = d, i++
						}
						for (var p = o - r; p !== o && 0 === u[p];) p++;
						for (var g = c.repeat(n); p < o; ++p) g += e.charAt(u[p]);
						return g
					},
					decodeUnsafe: h,
					decode: function(e) {
						var n = h(e);
						if (n) return n;
						throw new Error(`Non-${t} character`)
					}
				}
			};
			const L = e => {
				if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
				if (e instanceof ArrayBuffer) return new Uint8Array(e);
				if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
				throw new Error("Unknown type, must be binary type")
			};
			class M {
				constructor(e, t, n) {
					this.name = e, this.prefix = t, this.baseEncode = n
				}
				encode(e) {
					if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
					throw Error("Unknown type, must be binary type")
				}
			}
			class D {
				constructor(e, t, n) {
					if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
					this.prefixCodePoint = t.codePointAt(0), this.baseDecode = n
				}
				decode(e) {
					if ("string" == typeof e) {
						if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
						return this.baseDecode(e.slice(this.prefix.length))
					}
					throw Error("Can only multibase decode strings")
				}
				or(e) {
					return z(this, e)
				}
			}
			class k {
				constructor(e) {
					this.decoders = e
				}
				or(e) {
					return z(this, e)
				}
				decode(e) {
					const t = e[0],
						n = this.decoders[t];
					if (n) return n.decode(e);
					throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
				}
			}
			const z = (e, t) => new k({
				...e.decoders || {
					[e.prefix]: e
				},
				...t.decoders || {
					[t.prefix]: t
				}
			});
			class $ {
				constructor(e, t, n, r) {
					this.name = e, this.prefix = t, this.baseEncode = n, this.baseDecode = r, this.encoder = new M(e, t, n), this.decoder = new D(e, t, r)
				}
				encode(e) {
					return this.encoder.encode(e)
				}
				decode(e) {
					return this.decoder.decode(e)
				}
			}
			const q = e => {
					let {
						name: t,
						prefix: n,
						encode: r,
						decode: i
					} = e;
					return new $(t, n, r, i)
				},
				H = e => {
					let {
						prefix: t,
						name: n,
						alphabet: r
					} = e;
					const {
						encode: i,
						decode: s
					} = U(r, n);
					return q({
						prefix: t,
						name: n,
						encode: i,
						decode: e => L(s(e))
					})
				},
				B = e => {
					let {
						name: t,
						prefix: n,
						bitsPerChar: r,
						alphabet: i
					} = e;
					return q({
						prefix: n,
						name: t,
						encode: e => ((e, t, n) => {
							const r = "=" === t[t.length - 1],
								i = (1 << n) - 1;
							let s = "",
								o = 0,
								a = 0;
							for (let c = 0; c < e.length; ++c)
								for (a = a << 8 | e[c], o += 8; o > n;) s += t[i & a >> (o -= n)];
							if (o && (s += t[i & a << n - o]), r)
								for (; s.length * n & 7;) s += "=";
							return s
						})(e, i, r),
						decode: e => ((e, t, n, r) => {
							const i = {};
							for (let l = 0; l < t.length; ++l) i[t[l]] = l;
							let s = e.length;
							for (;
								"=" === e[s - 1];) --s;
							const o = new Uint8Array(s * n / 8 | 0);
							let a = 0,
								c = 0,
								u = 0;
							for (let l = 0; l < s; ++l) {
								const t = i[e[l]];
								if (void 0 === t) throw new SyntaxError(`Non-${r} character`);
								c = c << n | t, (a += n) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
							}
							if (a >= n || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
							return o
						})(e, i, r, t)
					})
				},
				K = q({
					prefix: "\0",
					name: "identity",
					encode: e => (e => (new TextDecoder).decode(e))(e),
					decode: e => (e => (new TextEncoder).encode(e))(e)
				});
			var V = Object.freeze({
				__proto__: null,
				identity: K
			});
			const F = B({
				prefix: "0",
				name: "base2",
				alphabet: "01",
				bitsPerChar: 1
			});
			var W = Object.freeze({
				__proto__: null,
				base2: F
			});
			const G = B({
				prefix: "7",
				name: "base8",
				alphabet: "01234567",
				bitsPerChar: 3
			});
			var J = Object.freeze({
				__proto__: null,
				base8: G
			});
			const Y = H({
				prefix: "9",
				name: "base10",
				alphabet: "0123456789"
			});
			var X = Object.freeze({
				__proto__: null,
				base10: Y
			});
			const Z = B({
					prefix: "f",
					name: "base16",
					alphabet: "0123456789abcdef",
					bitsPerChar: 4
				}),
				Q = B({
					prefix: "F",
					name: "base16upper",
					alphabet: "0123456789ABCDEF",
					bitsPerChar: 4
				});
			var ee = Object.freeze({
				__proto__: null,
				base16: Z,
				base16upper: Q
			});
			const te = B({
					prefix: "b",
					name: "base32",
					alphabet: "abcdefghijklmnopqrstuvwxyz234567",
					bitsPerChar: 5
				}),
				ne = B({
					prefix: "B",
					name: "base32upper",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
					bitsPerChar: 5
				}),
				re = B({
					prefix: "c",
					name: "base32pad",
					alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
					bitsPerChar: 5
				}),
				ie = B({
					prefix: "C",
					name: "base32padupper",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
					bitsPerChar: 5
				}),
				se = B({
					prefix: "v",
					name: "base32hex",
					alphabet: "0123456789abcdefghijklmnopqrstuv",
					bitsPerChar: 5
				}),
				oe = B({
					prefix: "V",
					name: "base32hexupper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
					bitsPerChar: 5
				}),
				ae = B({
					prefix: "t",
					name: "base32hexpad",
					alphabet: "0123456789abcdefghijklmnopqrstuv=",
					bitsPerChar: 5
				}),
				ce = B({
					prefix: "T",
					name: "base32hexpadupper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
					bitsPerChar: 5
				}),
				ue = B({
					prefix: "h",
					name: "base32z",
					alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
					bitsPerChar: 5
				});
			var le = Object.freeze({
				__proto__: null,
				base32: te,
				base32upper: ne,
				base32pad: re,
				base32padupper: ie,
				base32hex: se,
				base32hexupper: oe,
				base32hexpad: ae,
				base32hexpadupper: ce,
				base32z: ue
			});
			const he = H({
					prefix: "k",
					name: "base36",
					alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
				}),
				de = H({
					prefix: "K",
					name: "base36upper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
				});
			var fe = Object.freeze({
				__proto__: null,
				base36: he,
				base36upper: de
			});
			const pe = H({
					name: "base58btc",
					prefix: "z",
					alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
				}),
				ge = H({
					name: "base58flickr",
					prefix: "Z",
					alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
				});
			var be = Object.freeze({
				__proto__: null,
				base58btc: pe,
				base58flickr: ge
			});
			const ye = B({
					prefix: "m",
					name: "base64",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					bitsPerChar: 6
				}),
				me = B({
					prefix: "M",
					name: "base64pad",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					bitsPerChar: 6
				}),
				ve = B({
					prefix: "u",
					name: "base64url",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
					bitsPerChar: 6
				}),
				_e = B({
					prefix: "U",
					name: "base64urlpad",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
					bitsPerChar: 6
				});
			var we = Object.freeze({
				__proto__: null,
				base64: ye,
				base64pad: me,
				base64url: ve,
				base64urlpad: _e
			});
			const je = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
				Ee = je.reduce((e, t, n) => (e[n] = t, e), []),
				Oe = je.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
			const Se = q({
				prefix: "🚀",
				name: "base256emoji",
				encode: function(e) {
					return e.reduce((e, t) => (e += Ee[t], e), "")
				},
				decode: function(e) {
					const t = [];
					for (const n of e) {
						const e = Oe[n.codePointAt(0)];
						if (void 0 === e) throw new Error(`Non-base256emoji character: ${n}`);
						t.push(e)
					}
					return new Uint8Array(t)
				}
			});
			var Ie = Object.freeze({
					__proto__: null,
					base256emoji: Se
				}),
				Pe = function e(t, n, r) {
					n = n || [], r = r || 0;
					for (var i = r; t >= Ae;) n[r++] = 255 & t | xe, t /= 128;
					for (; t & Re;) n[r++] = 255 & t | xe, t >>>= 7;
					return n[r] = 0 | t, e.bytes = r - i + 1, n
				},
				xe = 128,
				Re = -128,
				Ae = Math.pow(2, 31);
			var Ne = function e(t, n) {
					var r, i = 0,
						s = (n = n || 0, 0),
						o = n,
						a = t.length;
					do {
						if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
						r = t[o++], i += s < 28 ? (r & Ce) << s : (r & Ce) * Math.pow(2, s), s += 7
					} while (r >= Te);
					return e.bytes = o - n, i
				},
				Te = 128,
				Ce = 127;
			var Ue = Math.pow(2, 7),
				Le = Math.pow(2, 14),
				Me = Math.pow(2, 21),
				De = Math.pow(2, 28),
				ke = Math.pow(2, 35),
				ze = Math.pow(2, 42),
				$e = Math.pow(2, 49),
				qe = Math.pow(2, 56),
				He = Math.pow(2, 63),
				Be = {
					encode: Pe,
					decode: Ne,
					encodingLength: function(e) {
						return e < Ue ? 1 : e < Le ? 2 : e < Me ? 3 : e < De ? 4 : e < ke ? 5 : e < ze ? 6 : e < $e ? 7 : e < qe ? 8 : e < He ? 9 : 10
					}
				};
			const Ke = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
					return Be.encode(e, t, n), t
				},
				Ve = e => Be.encodingLength(e),
				Fe = (e, t) => {
					const n = t.byteLength,
						r = Ve(e),
						i = r + Ve(n),
						s = new Uint8Array(i + n);
					return Ke(e, s, 0), Ke(n, s, r), s.set(t, i), new We(e, n, t, s)
				};
			class We {
				constructor(e, t, n, r) {
					this.code = e, this.size = t, this.digest = n, this.bytes = r
				}
			}
			const Ge = e => {
				let {
					name: t,
					code: n,
					encode: r
				} = e;
				return new Je(t, n, r)
			};
			class Je {
				constructor(e, t, n) {
					this.name = e, this.code = t, this.encode = n
				}
				digest(e) {
					if (e instanceof Uint8Array) {
						const t = this.encode(e);
						return t instanceof Uint8Array ? Fe(this.code, t) : t.then(e => Fe(this.code, e))
					}
					throw Error("Unknown type, must be binary type")
				}
			}
			const Ye = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)), Xe = Ge({
				name: "sha2-256",
				code: 18,
				encode: Ye("SHA-256")
			}), Ze = Ge({
				name: "sha2-512",
				code: 19,
				encode: Ye("SHA-512")
			});
			Object.freeze({
				__proto__: null,
				sha256: Xe,
				sha512: Ze
			});
			const Qe = L,
				et = {
					code: 0,
					name: "identity",
					encode: Qe,
					digest: e => Fe(0, Qe(e))
				};
			Object.freeze({
				__proto__: null,
				identity: et
			});
			new TextEncoder, new TextDecoder;
			const tt = {
				...V,
				...W,
				...J,
				...X,
				...ee,
				...le,
				...fe,
				...be,
				...we,
				...Ie
			};

			function nt(e) {
				return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
			}

			function rt(e, t, n, r) {
				return {
					name: e,
					prefix: t,
					encoder: {
						name: e,
						prefix: t,
						encode: n
					},
					decoder: {
						decode: r
					}
				}
			}
			const it = rt("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => (new TextEncoder).encode(e.substring(1))),
				st = rt("ascii", "a", e => {
					let t = "a";
					for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
					return t
				}, e => {
					const t = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? nt(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
					}((e = e.substring(1)).length);
					for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
					return t
				}),
				ot = {
					utf8: it,
					"utf-8": it,
					hex: tt.base16,
					latin1: st,
					ascii: st,
					binary: st,
					...tt
				};
			const at = "wc",
				ct = 2,
				ut = "core",
				lt = `${at}@2:${ut}:`,
				ht = {
					name: ut,
					logger: "error"
				},
				dt = {
					database: ":memory:"
				},
				ft = "crypto",
				pt = "client_ed25519_seed",
				gt = x.ONE_DAY,
				bt = "keychain",
				yt = "0.3",
				mt = "messages",
				vt = "0.3",
				_t = x.SIX_HOURS,
				wt = "publisher",
				jt = "irn",
				Et = "error",
				Ot = "wss://relay.walletconnect.com",
				St = "relayer",
				It = {
					message: "relayer_message",
					connect: "relayer_connect",
					disconnect: "relayer_disconnect",
					error: "relayer_error",
					connection_stalled: "relayer_connection_stalled",
					transport_closed: "relayer_transport_closed",
					publish: "relayer_publish"
				},
				Pt = "_subscription",
				xt = {
					payload: "payload",
					connect: "connect",
					disconnect: "disconnect",
					error: "error"
				},
				Rt = x.ONE_SECOND / 2,
				At = "2.7.2",
				Nt = "0.3",
				Tt = {
					created: "subscription_created",
					deleted: "subscription_deleted",
					expired: "subscription_expired",
					disabled: "subscription_disabled",
					sync: "subscription_sync",
					resubscribed: "subscription_resubscribed"
				},
				Ct = (x.THIRTY_DAYS, "subscription"),
				Ut = "0.3",
				Lt = 1e3 * x.FIVE_SECONDS,
				Mt = "pairing",
				Dt = "0.3",
				kt = (x.THIRTY_DAYS, {
					wc_pairingDelete: {
						req: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1e3
						},
						res: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1001
						}
					},
					wc_pairingPing: {
						req: {
							ttl: x.THIRTY_SECONDS,
							prompt: !1,
							tag: 1002
						},
						res: {
							ttl: x.THIRTY_SECONDS,
							prompt: !1,
							tag: 1003
						}
					},
					unregistered_method: {
						req: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 0
						},
						res: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 0
						}
					}
				}),
				zt = {
					created: "history_created",
					updated: "history_updated",
					deleted: "history_deleted",
					sync: "history_sync"
				},
				$t = "history",
				qt = "0.3",
				Ht = "expirer",
				Bt = {
					created: "expirer_created",
					deleted: "expirer_deleted",
					expired: "expirer_expired",
					sync: "expirer_sync"
				},
				Kt = "0.3",
				Vt = (x.ONE_DAY, "verify-api"),
				Ft = "https://verify.walletconnect.com";
			class Wt {
				constructor(e, t) {
					this.core = e, this.logger = t, this.keychain = new Map, this.name = bt, this.version = yt, this.initialized = !1, this.storagePrefix = lt, this.init = async () => {
						if (!this.initialized) {
							const e = await this.getKeyChain();
							typeof e < "u" && (this.keychain = e), this.initialized = !0
						}
					}, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
						this.isInitialized(), this.keychain.set(e, t), await this.persist()
					}, this.get = e => {
						this.isInitialized();
						const t = this.keychain.get(e);
						if (typeof t > "u") {
							const {
								message: t
							} = Object(I.v)("NO_MATCHING_KEY", `${this.name}: ${e}`);
							throw new Error(t)
						}
						return t
					}, this.del = async e => {
						this.isInitialized(), this.keychain.delete(e), await this.persist()
					}, this.core = e, this.logger = Object(h.generateChildLogger)(t, this.name)
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get storageKey() {
					return this.storagePrefix + this.version + "//" + this.name
				}
				async setKeyChain(e) {
					await this.core.storage.setItem(this.storageKey, Object(I.gb)(e))
				}
				async getKeyChain() {
					const e = await this.core.storage.getItem(this.storageKey);
					return typeof e < "u" ? Object(I.ib)(e) : void 0
				}
				async persist() {
					await this.setKeyChain(this.keychain)
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
			}
			class Gt {
				constructor(e, t, n) {
					this.core = e, this.logger = t, this.name = ft, this.initialized = !1, this.init = async () => {
						this.initialized || (await this.keychain.init(), this.initialized = !0)
					}, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
						this.isInitialized();
						const e = await this.getClientSeed(),
							t = S.generateKeyPair(e);
						return S.encodeIss(t.publicKey)
					}, this.generateKeyPair = () => {
						this.isInitialized();
						const e = Object(I.q)();
						return this.setPrivateKey(e.publicKey, e.privateKey)
					}, this.signJWT = async e => {
						this.isInitialized();
						const t = await this.getClientSeed(),
							n = S.generateKeyPair(t),
							r = Object(I.r)(),
							i = gt;
						return await S.signJWT(r, e, i, n)
					}, this.generateSharedKey = (e, t, n) => {
						this.isInitialized();
						const r = this.getPrivateKey(e),
							i = Object(I.i)(r, t);
						return this.setSymKey(i, n)
					}, this.setSymKey = async (e, t) => {
						this.isInitialized();
						const n = t || Object(I.A)(e);
						return await this.keychain.set(n, e), n
					}, this.deleteKeyPair = async e => {
						this.isInitialized(), await this.keychain.del(e)
					}, this.deleteSymKey = async e => {
						this.isInitialized(), await this.keychain.del(e)
					}, this.encode = async (e, t, n) => {
						this.isInitialized();
						const r = Object(I.nb)(n),
							i = Object(O.b)(t);
						if (Object(I.L)(r)) {
							const t = r.senderPublicKey,
								n = r.receiverPublicKey;
							e = await this.generateSharedKey(t, n)
						}
						const s = this.getSymKey(e),
							{
								type: o,
								senderPublicKey: a
							} = r;
						return Object(I.k)({
							type: o,
							symKey: s,
							message: i,
							senderPublicKey: a
						})
					}, this.decode = async (e, t, n) => {
						this.isInitialized();
						const r = Object(I.mb)(t, n);
						if (Object(I.L)(r)) {
							const t = r.receiverPublicKey,
								n = r.senderPublicKey;
							e = await this.generateSharedKey(t, n)
						}
						const i = this.getSymKey(e),
							s = Object(I.h)({
								symKey: i,
								encoded: t
							});
						return Object(O.a)(s)
					}, this.getPayloadType = e => {
						const t = Object(I.j)(e);
						return Object(I.g)(t.type)
					}, this.getPayloadSenderPublicKey = e => {
						const t = Object(I.j)(e);
						return t.senderPublicKey ? Object(P.toString)(t.senderPublicKey, I.a) : void 0
					}, this.core = e, this.logger = Object(h.generateChildLogger)(t, this.name), this.keychain = n || new Wt(this.core, this.logger)
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				async setPrivateKey(e, t) {
					return await this.keychain.set(e, t), e
				}
				getPrivateKey(e) {
					return this.keychain.get(e)
				}
				async getClientSeed() {
					let e = "";
					try {
						e = this.keychain.get(pt)
					} catch {
						e = Object(I.r)(), await this.keychain.set(pt, e)
					}
					return function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
						const n = ot[t];
						if (!n) throw new Error(`Unsupported encoding "${t}"`);
						return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? n.decoder.decode(`${n.prefix}${e}`) : nt(globalThis.Buffer.from(e, "utf-8"))
					}(e, "base16")
				}
				getSymKey(e) {
					return this.keychain.get(e)
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
			}
			class Jt extends g {
				constructor(e, t) {
					super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = mt, this.version = vt, this.initialized = !1, this.storagePrefix = lt, this.init = async () => {
						if (!this.initialized) {
							this.logger.trace("Initialized");
							try {
								const e = await this.getRelayerMessages();
								typeof e < "u" && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
									type: "method",
									method: "restore",
									size: this.messages.size
								})
							} catch (e) {
								this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
							} finally {
								this.initialized = !0
							}
						}
					}, this.set = async (e, t) => {
						this.isInitialized();
						const n = Object(I.B)(t);
						let r = this.messages.get(e);
						return typeof r > "u" && (r = {}), typeof r[n] < "u" || (r[n] = t, this.messages.set(e, r), await this.persist()), n
					}, this.get = e => {
						this.isInitialized();
						let t = this.messages.get(e);
						return typeof t > "u" && (t = {}), t
					}, this.has = (e, t) => {
						return this.isInitialized(), typeof this.get(e)[Object(I.B)(t)] < "u"
					}, this.del = async e => {
						this.isInitialized(), this.messages.delete(e), await this.persist()
					}, this.logger = Object(h.generateChildLogger)(e, this.name), this.core = t
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get storageKey() {
					return this.storagePrefix + this.version + "//" + this.name
				}
				async setRelayerMessages(e) {
					await this.core.storage.setItem(this.storageKey, Object(I.gb)(e))
				}
				async getRelayerMessages() {
					const e = await this.core.storage.getItem(this.storageKey);
					return typeof e < "u" ? Object(I.ib)(e) : void 0
				}
				async persist() {
					await this.setRelayerMessages(this.messages)
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
			}
			class Yt extends b {
				constructor(e, t) {
					super(e, t), this.relayer = e, this.logger = t, this.events = new r.EventEmitter, this.name = wt, this.queue = new Map, this.publishTimeout = 1e4, this.publish = async (e, t, n) => {
						this.logger.debug("Publishing Payload"), this.logger.trace({
							type: "method",
							method: "publish",
							params: {
								topic: e,
								message: t,
								opts: n
							}
						});
						try {
							const r = (null == n ? void 0 : n.ttl) || _t,
								i = Object(I.x)(n),
								s = (null == n ? void 0 : n.prompt) || !1,
								o = (null == n ? void 0 : n.tag) || 0,
								a = {
									topic: e,
									message: t,
									opts: {
										ttl: r,
										relay: i,
										prompt: s,
										tag: o
									}
								},
								c = Object(I.B)(t);
							this.queue.set(c, a);
							try {
								await (await Object(I.f)(this.rpcPublish(e, t, r, i, s, o), this.publishTimeout)), this.relayer.events.emit(It.publish, a)
							} catch {
								return this.logger.debug("Publishing Payload stalled"), void this.relayer.events.emit(It.connection_stalled)
							}
							this.onPublish(c, a), this.logger.debug("Successfully Published Payload"), this.logger.trace({
								type: "method",
								method: "publish",
								params: {
									topic: e,
									message: t,
									opts: n
								}
							})
						} catch (r) {
							throw this.logger.debug("Failed to Publish Payload"), this.logger.error(r), r
						}
					}, this.on = (e, t) => {
						this.events.on(e, t)
					}, this.once = (e, t) => {
						this.events.once(e, t)
					}, this.off = (e, t) => {
						this.events.off(e, t)
					}, this.removeListener = (e, t) => {
						this.events.removeListener(e, t)
					}, this.relayer = e, this.logger = Object(h.generateChildLogger)(t, this.name), this.registerEventListeners()
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				rpcPublish(e, t, n, r, i, s) {
					var o, a, c, u;
					const l = {
						method: Object(I.w)(r.protocol).publish,
						params: {
							topic: e,
							message: t,
							ttl: n,
							prompt: i,
							tag: s
						}
					};
					return Object(I.M)(null == (o = l.params) ? void 0 : o.prompt) && (null == (a = l.params) || delete a.prompt), Object(I.M)(null == (c = l.params) ? void 0 : c.tag) && (null == (u = l.params) || delete u.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
						type: "message",
						direction: "outgoing",
						request: l
					}), this.relayer.request(l)
				}
				onPublish(e, t) {
					this.queue.delete(e)
				}
				checkQueue() {
					this.queue.forEach(async e => {
						const {
							topic: t,
							message: n,
							opts: r
						} = e;
						await this.publish(t, n, r)
					})
				}
				registerEventListeners() {
					this.relayer.core.heartbeat.on(l.HEARTBEAT_EVENTS.pulse, () => {
						this.checkQueue()
					})
				}
			}
			class Xt {
				constructor() {
					this.map = new Map, this.set = (e, t) => {
						const n = this.get(e);
						this.exists(e, t) || this.map.set(e, [...n, t])
					}, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
						if (typeof t > "u") return void this.map.delete(e);
						if (!this.map.has(e)) return;
						const n = this.get(e);
						if (!this.exists(e, t)) return;
						const r = n.filter(e => e !== t);
						r.length ? this.map.set(e, r) : this.map.delete(e)
					}, this.clear = () => {
						this.map.clear()
					}
				}
				get topics() {
					return Array.from(this.map.keys())
				}
			}
			var Zt = Object.defineProperty,
				Qt = Object.defineProperties,
				en = Object.getOwnPropertyDescriptors,
				tn = Object.getOwnPropertySymbols,
				nn = Object.prototype.hasOwnProperty,
				rn = Object.prototype.propertyIsEnumerable,
				sn = (e, t, n) => t in e ? Zt(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				on = (e, t) => {
					for (var n in t || (t = {})) nn.call(t, n) && sn(e, n, t[n]);
					if (tn)
						for (var n of tn(t)) rn.call(t, n) && sn(e, n, t[n]);
					return e
				},
				an = (e, t) => Qt(e, en(t));
			class cn extends v {
				constructor(e, t) {
					super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Xt, this.events = new r.EventEmitter, this.name = Ct, this.version = Ut, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = lt, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
						this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
					}, this.subscribe = async (e, t) => {
						await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
							type: "method",
							method: "subscribe",
							params: {
								topic: e,
								opts: t
							}
						});
						try {
							const n = Object(I.x)(t),
								r = {
									topic: e,
									relay: n
								};
							this.pending.set(e, r);
							const i = await this.rpcSubscribe(e, n);
							return this.onSubscribe(i, r), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
								type: "method",
								method: "subscribe",
								params: {
									topic: e,
									opts: t
								}
							}), i
						} catch (n) {
							throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n), n
						}
					}, this.unsubscribe = async (e, t) => {
						await this.restartToComplete(), this.isInitialized(), typeof(null == t ? void 0 : t.id) < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
					}, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, n) => {
						const r = new x.Watch;
						r.start(this.pendingSubscriptionWatchLabel);
						const i = setInterval(() => {
							!this.pending.has(e) && this.topics.includes(e) && (clearInterval(i), r.stop(this.pendingSubscriptionWatchLabel), t(!0)), r.elapsed(this.pendingSubscriptionWatchLabel) >= Lt && (clearInterval(i), r.stop(this.pendingSubscriptionWatchLabel), n(!1))
						}, this.pollingInterval)
					}), this.on = (e, t) => {
						this.events.on(e, t)
					}, this.once = (e, t) => {
						this.events.once(e, t)
					}, this.off = (e, t) => {
						this.events.off(e, t)
					}, this.removeListener = (e, t) => {
						this.events.removeListener(e, t)
					}, this.restart = async () => {
						this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
					}, this.relayer = e, this.logger = Object(h.generateChildLogger)(t, this.name), this.clientId = ""
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get storageKey() {
					return this.storagePrefix + this.version + "//" + this.name
				}
				get length() {
					return this.subscriptions.size
				}
				get ids() {
					return Array.from(this.subscriptions.keys())
				}
				get values() {
					return Array.from(this.subscriptions.values())
				}
				get topics() {
					return this.topicMap.topics
				}
				hasSubscription(e, t) {
					let n = !1;
					try {
						n = this.getSubscription(e).topic === t
					} catch {}
					return n
				}
				onEnable() {
					this.cached = [], this.initialized = !0
				}
				onDisable() {
					this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
				}
				async unsubscribeByTopic(e, t) {
					const n = this.topicMap.get(e);
					await Promise.all(n.map(async n => await this.unsubscribeById(e, n, t)))
				}
				async unsubscribeById(e, t, n) {
					this.logger.debug("Unsubscribing Topic"), this.logger.trace({
						type: "method",
						method: "unsubscribe",
						params: {
							topic: e,
							id: t,
							opts: n
						}
					});
					try {
						const r = Object(I.x)(n);
						await this.rpcUnsubscribe(e, t, r);
						const i = Object(I.z)("USER_DISCONNECTED", `${this.name}, ${e}`);
						await this.onUnsubscribe(e, t, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
							type: "method",
							method: "unsubscribe",
							params: {
								topic: e,
								id: t,
								opts: n
							}
						})
					} catch (r) {
						throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(r), r
					}
				}
				async rpcSubscribe(e, t) {
					const n = {
						method: Object(I.w)(t.protocol).subscribe,
						params: {
							topic: e
						}
					};
					this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
						type: "payload",
						direction: "outgoing",
						request: n
					});
					try {
						await (await Object(I.f)(this.relayer.request(n), this.subscribeTimeout))
					} catch {
						this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(It.connection_stalled)
					}
					return Object(I.B)(e + this.clientId)
				}
				async rpcBatchSubscribe(e) {
					if (!e.length) return;
					const t = e[0].relay,
						n = {
							method: Object(I.w)(t.protocol).batchSubscribe,
							params: {
								topics: e.map(e => e.topic)
							}
						};
					this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
						type: "payload",
						direction: "outgoing",
						request: n
					});
					try {
						return await (await Object(I.f)(this.relayer.request(n), this.subscribeTimeout))
					} catch {
						this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(It.connection_stalled)
					}
				}
				rpcUnsubscribe(e, t, n) {
					const r = {
						method: Object(I.w)(n.protocol).unsubscribe,
						params: {
							topic: e,
							id: t
						}
					};
					return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
						type: "payload",
						direction: "outgoing",
						request: r
					}), this.relayer.request(r)
				}
				onSubscribe(e, t) {
					this.setSubscription(e, an(on({}, t), {
						id: e
					})), this.pending.delete(t.topic)
				}
				onBatchSubscribe(e) {
					e.length && e.forEach(e => {
						this.setSubscription(e.id, on({}, e)), this.pending.delete(e.topic)
					})
				}
				async onUnsubscribe(e, t, n) {
					this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, n), await this.relayer.messages.del(e)
				}
				async setRelayerSubscriptions(e) {
					await this.relayer.core.storage.setItem(this.storageKey, e)
				}
				async getRelayerSubscriptions() {
					return await this.relayer.core.storage.getItem(this.storageKey)
				}
				setSubscription(e, t) {
					this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
						type: "method",
						method: "setSubscription",
						id: e,
						subscription: t
					}), this.addSubscription(e, t))
				}
				addSubscription(e, t) {
					this.subscriptions.set(e, on({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Tt.created, t)
				}
				getSubscription(e) {
					this.logger.debug("Getting subscription"), this.logger.trace({
						type: "method",
						method: "getSubscription",
						id: e
					});
					const t = this.subscriptions.get(e);
					if (!t) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `${this.name}: ${e}`);
						throw new Error(t)
					}
					return t
				}
				deleteSubscription(e, t) {
					this.logger.debug("Deleting subscription"), this.logger.trace({
						type: "method",
						method: "deleteSubscription",
						id: e,
						reason: t
					});
					const n = this.getSubscription(e);
					this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Tt.deleted, an(on({}, n), {
						reason: t
					}))
				}
				async persist() {
					await this.setRelayerSubscriptions(this.values), this.events.emit(Tt.sync)
				}
				async reset() {
					if (this.cached.length) {
						const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
						for (let t = 0; t < e; t++) {
							const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
							await this.batchSubscribe(e)
						}
					}
					this.events.emit(Tt.resubscribed)
				}
				async restore() {
					try {
						const e = await this.getRelayerSubscriptions();
						if (typeof e > "u" || !e.length) return;
						if (this.subscriptions.size) {
							const {
								message: e
							} = Object(I.v)("RESTORE_WILL_OVERRIDE", this.name);
							throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e)
						}
						this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
							type: "method",
							method: "restore",
							subscriptions: this.values
						})
					} catch (e) {
						this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
					}
				}
				async batchSubscribe(e) {
					if (!e.length) return;
					const t = await this.rpcBatchSubscribe(e);
					Object(I.N)(t) && this.onBatchSubscribe(t.map((t, n) => an(on({}, e[n]), {
						id: t
					})))
				}
				async onConnect() {
					this.restartInProgress || (await this.restart(), this.onEnable())
				}
				onDisconnect() {
					this.onDisable()
				}
				async checkPending() {
					if (this.relayer.transportExplicitlyClosed) return;
					const e = [];
					this.pending.forEach(t => {
						e.push(t)
					}), await this.batchSubscribe(e)
				}
				registerEventListeners() {
					this.relayer.core.heartbeat.on(l.HEARTBEAT_EVENTS.pulse, async () => {
						await this.checkPending()
					}), this.relayer.on(It.connect, async () => {
						await this.onConnect()
					}), this.relayer.on(It.disconnect, () => {
						this.onDisconnect()
					}), this.events.on(Tt.created, async e => {
						const t = Tt.created;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							data: e
						}), await this.persist()
					}), this.events.on(Tt.deleted, async e => {
						const t = Tt.deleted;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							data: e
						}), await this.persist()
					})
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
				async restartToComplete() {
					this.restartInProgress && await new Promise(e => {
						const t = setInterval(() => {
							this.restartInProgress || (clearInterval(t), e())
						}, this.pollingInterval)
					})
				}
			}
			var un = Object.defineProperty,
				ln = Object.getOwnPropertySymbols,
				hn = Object.prototype.hasOwnProperty,
				dn = Object.prototype.propertyIsEnumerable,
				fn = (e, t, n) => t in e ? un(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				pn = (e, t) => {
					for (var n in t || (t = {})) hn.call(t, n) && fn(e, n, t[n]);
					if (ln)
						for (var n of ln(t)) dn.call(t, n) && fn(e, n, t[n]);
					return e
				};
			class gn extends y {
				constructor(e) {
					super(e), this.protocol = "wc", this.version = 2, this.events = new r.EventEmitter, this.name = St, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async e => {
						this.logger.debug("Publishing Request Payload");
						try {
							return await this.toEstablishConnection(), await this.provider.request(e)
						} catch (t) {
							throw this.logger.debug("Failed to Publish Request"), this.logger.error(t), t
						}
					}, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? Object(h.generateChildLogger)(e.logger, this.name) : Object(h.pino)(Object(h.getDefaultLoggerOptions)({
						level: e.logger || Et
					})), this.messages = new Jt(this.logger, e.core), this.subscriber = new cn(this, this.logger), this.publisher = new Yt(this, this.logger), this.relayUrl = (null == e ? void 0 : e.relayUrl) || Ot, this.projectId = e.projectId, this.provider = {}
				}
				async init() {
					this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = !0
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get connected() {
					return this.provider.connection.connected
				}
				get connecting() {
					return this.provider.connection.connecting
				}
				async publish(e, t, n) {
					this.isInitialized(), await this.publisher.publish(e, t, n), await this.recordMessageEvent({
						topic: e,
						message: t,
						publishedAt: Date.now()
					})
				}
				async subscribe(e, t) {
					this.isInitialized();
					let n = "";
					return await Promise.all([new Promise(t => {
						this.subscriber.once(Tt.created, n => {
							n.topic === e && t()
						})
					}), new Promise(async r => {
						n = await this.subscriber.subscribe(e, t), r()
					})]), n
				}
				async unsubscribe(e, t) {
					this.isInitialized(), await this.subscriber.unsubscribe(e, t)
				}
				on(e, t) {
					this.events.on(e, t)
				}
				once(e, t) {
					this.events.once(e, t)
				}
				off(e, t) {
					this.events.off(e, t)
				}
				removeListener(e, t) {
					this.events.removeListener(e, t)
				}
				async transportClose() {
					this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(It.transport_closed))
				}
				async transportOpen(e) {
					if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
						this.relayUrl = e || this.relayUrl, this.reconnecting = !0;
						try {
							await Promise.all([new Promise(e => {
								this.initialized || e(), this.subscriber.once(Tt.resubscribed, () => {
									e()
								})
							}), await Promise.race([new Promise(async (e, t) => {
								await Object(I.f)(this.provider.connect(), 5e3, "socket stalled").catch(e => t(e)).then(() => e()).finally(() => this.removeListener(It.transport_closed, this.rejectTransportOpen))
							}), new Promise(e => this.once(It.transport_closed, this.rejectTransportOpen))])])
						} catch (t) {
							this.logger.error(t);
							const e = t;
							if (!this.isConnectionStalled(e.message)) throw t;
							this.events.emit(It.transport_closed)
						} finally {
							this.reconnecting = !1
						}
					}
				}
				async restartTransport(e) {
					this.transportExplicitlyClosed || (this.relayUrl = e || this.relayUrl, this.connected && await Promise.all([new Promise(e => {
						this.provider.once(xt.disconnect, () => {
							e()
						})
					}), this.transportClose()]), await this.createProvider(), await this.transportOpen())
				}
				isConnectionStalled(e) {
					return this.staleConnectionErrors.some(t => e.includes(t))
				}
				rejectTransportOpen() {
					throw new Error("closeTransport called before connection was established")
				}
				async createProvider() {
					const e = await this.core.crypto.signJWT(this.relayUrl);
					this.provider = new R.a(new N(Object(I.n)({
						sdkVersion: At,
						protocol: this.protocol,
						version: this.version,
						relayUrl: this.relayUrl,
						projectId: this.projectId,
						auth: e,
						useOnCloseEvent: !0
					}))), this.registerProviderListeners()
				}
				async recordMessageEvent(e) {
					const {
						topic: t,
						message: n
					} = e;
					await this.messages.set(t, n)
				}
				async shouldIgnoreMessageEvent(e) {
					const {
						topic: t,
						message: n
					} = e;
					return !(await this.subscriber.isSubscribed(t)) || this.messages.has(t, n)
				}
				async onProviderPayload(e) {
					if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
							type: "payload",
							direction: "incoming",
							payload: e
						}), Object(A.isJsonRpcRequest)(e)) {
						if (!e.method.endsWith(Pt)) return;
						const t = e.params,
							{
								topic: n,
								message: r,
								publishedAt: i
							} = t.data,
							s = {
								topic: n,
								message: r,
								publishedAt: i
							};
						this.logger.debug("Emitting Relayer Payload"), this.logger.trace(pn({
							type: "event",
							event: t.id
						}, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
					}
				}
				async onMessageEvent(e) {
					await this.shouldIgnoreMessageEvent(e) || (this.events.emit(It.message, e), await this.recordMessageEvent(e))
				}
				async acknowledgePayload(e) {
					const t = Object(A.formatJsonRpcResult)(e.id, !0);
					await this.provider.connection.send(t)
				}
				registerProviderListeners() {
					this.provider.on(xt.payload, e => this.onProviderPayload(e)), this.provider.on(xt.connect, () => {
						this.events.emit(It.connect)
					}), this.provider.on(xt.disconnect, () => {
						this.onProviderDisconnect()
					}), this.provider.on(xt.error, e => {
						this.logger.error(e), this.events.emit(It.error, e)
					})
				}
				registerEventListeners() {
					this.events.on(It.connection_stalled, async () => {
						await this.restartTransport()
					})
				}
				onProviderDisconnect() {
					this.events.emit(It.disconnect), this.attemptToReconnect()
				}
				attemptToReconnect() {
					this.transportExplicitlyClosed || setTimeout(async () => {
						await this.restartTransport()
					}, Object(x.toMiliseconds)(Rt))
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
				async toEstablishConnection() {
					if (!this.connected) {
						if (this.connecting) return await new Promise(e => {
							const t = setInterval(() => {
								this.connected && (clearInterval(t), e())
							}, this.connectionStatusPollingInterval)
						});
						await this.restartTransport()
					}
				}
			}
			var bn = Object.defineProperty,
				yn = Object.getOwnPropertySymbols,
				mn = Object.prototype.hasOwnProperty,
				vn = Object.prototype.propertyIsEnumerable,
				_n = (e, t, n) => t in e ? bn(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				wn = (e, t) => {
					for (var n in t || (t = {})) mn.call(t, n) && _n(e, n, t[n]);
					if (yn)
						for (var n of yn(t)) vn.call(t, n) && _n(e, n, t[n]);
					return e
				};
			class jn extends m {
				constructor(e, t, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lt,
						i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
					super(e, t, n, r), this.core = e, this.logger = t, this.name = n, this.map = new Map, this.version = Nt, this.cached = [], this.initialized = !1, this.storagePrefix = lt, this.init = async () => {
						this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
							this.getKey && null !== e && !Object(I.M)(e) ? this.map.set(this.getKey(e), e) : Object(I.H)(e) ? this.map.set(e.id, e) : Object(I.K)(e) && this.map.set(e.topic, e)
						}), this.cached = [], this.initialized = !0)
					}, this.set = async (e, t) => {
						this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
							type: "method",
							method: "set",
							key: e,
							value: t
						}), this.map.set(e, t), await this.persist())
					}, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
						type: "method",
						method: "get",
						key: e
					}), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(n => C()(t[n], e[n]))) : this.values), this.update = async (e, t) => {
						this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
							type: "method",
							method: "update",
							key: e,
							update: t
						});
						const n = wn(wn({}, this.getData(e)), t);
						this.map.set(e, n), await this.persist()
					}, this.delete = async (e, t) => {
						this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
							type: "method",
							method: "delete",
							key: e,
							reason: t
						}), this.map.delete(e), await this.persist())
					}, this.logger = Object(h.generateChildLogger)(t, this.name), this.storagePrefix = r, this.getKey = i
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get storageKey() {
					return this.storagePrefix + this.version + "//" + this.name
				}
				get length() {
					return this.map.size
				}
				get keys() {
					return Array.from(this.map.keys())
				}
				get values() {
					return Array.from(this.map.values())
				}
				async setDataStore(e) {
					await this.core.storage.setItem(this.storageKey, e)
				}
				async getDataStore() {
					return await this.core.storage.getItem(this.storageKey)
				}
				getData(e) {
					const t = this.map.get(e);
					if (!t) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `${this.name}: ${e}`);
						throw this.logger.error(t), new Error(t)
					}
					return t
				}
				async persist() {
					await this.setDataStore(this.values)
				}
				async restore() {
					try {
						const e = await this.getDataStore();
						if (typeof e > "u" || !e.length) return;
						if (this.map.size) {
							const {
								message: e
							} = Object(I.v)("RESTORE_WILL_OVERRIDE", this.name);
							throw this.logger.error(e), new Error(e)
						}
						this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
							type: "method",
							method: "restore",
							value: this.values
						})
					} catch (e) {
						this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
					}
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
			}
			class En {
				constructor(e, t) {
					this.core = e, this.logger = t, this.name = Mt, this.version = Dt, this.events = new i.a, this.initialized = !1, this.storagePrefix = lt, this.ignoredPayloadTypes = [I.c], this.registeredMethods = [], this.init = async () => {
						this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
					}, this.register = e => {
						let {
							methods: t
						} = e;
						this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...t])]
					}, this.create = async () => {
						this.isInitialized();
						const e = Object(I.r)(),
							t = await this.core.crypto.setSymKey(e),
							n = Object(I.d)(x.FIVE_MINUTES),
							r = {
								protocol: jt
							},
							i = {
								topic: t,
								expiry: n,
								relay: r,
								active: !1
							},
							s = Object(I.p)({
								protocol: this.core.protocol,
								version: this.core.version,
								topic: t,
								symKey: e,
								relay: r
							});
						return await this.pairings.set(t, i), await this.core.relayer.subscribe(t), this.core.expirer.set(t, n), {
							topic: t,
							uri: s
						}
					}, this.pair = async e => {
						this.isInitialized(), this.isValidPair(e);
						const {
							topic: t,
							symKey: n,
							relay: r
						} = Object(I.lb)(e.uri);
						if (this.pairings.keys.includes(t)) throw new Error(`Pairing already exists: ${t}`);
						if (this.core.crypto.hasKeys(t)) throw new Error(`Keychain already exists: ${t}`);
						const i = Object(I.d)(x.FIVE_MINUTES),
							s = {
								topic: t,
								relay: r,
								expiry: i,
								active: !1
							};
						return await this.pairings.set(t, s), await this.core.crypto.setSymKey(n, t), await this.core.relayer.subscribe(t, {
							relay: r
						}), this.core.expirer.set(t, i), e.activatePairing && await this.activate({
							topic: t
						}), s
					}, this.activate = async e => {
						let {
							topic: t
						} = e;
						this.isInitialized();
						const n = Object(I.d)(x.THIRTY_DAYS);
						await this.pairings.update(t, {
							active: !0,
							expiry: n
						}), this.core.expirer.set(t, n)
					}, this.ping = async e => {
						this.isInitialized(), await this.isValidPing(e);
						const {
							topic: t
						} = e;
						if (this.pairings.keys.includes(t)) {
							const e = await this.sendRequest(t, "wc_pairingPing", {}),
								{
									done: n,
									resolve: r,
									reject: i
								} = Object(I.e)();
							this.events.once(Object(I.l)("pairing_ping", e), e => {
								let {
									error: t
								} = e;
								t ? i(t) : r()
							}), await n()
						}
					}, this.updateExpiry = async e => {
						let {
							topic: t,
							expiry: n
						} = e;
						this.isInitialized(), await this.pairings.update(t, {
							expiry: n
						})
					}, this.updateMetadata = async e => {
						let {
							topic: t,
							metadata: n
						} = e;
						this.isInitialized(), await this.pairings.update(t, {
							peerMetadata: n
						})
					}, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
						this.isInitialized(), await this.isValidDisconnect(e);
						const {
							topic: t
						} = e;
						this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", Object(I.z)("USER_DISCONNECTED")), await this.deletePairing(t))
					}, this.sendRequest = async (e, t, n) => {
						const r = Object(A.formatJsonRpcRequest)(t, n),
							i = await this.core.crypto.encode(e, r),
							s = kt[t].req;
						return this.core.history.set(e, r), await this.core.relayer.publish(e, i, s), r.id
					}, this.sendResult = async (e, t, n) => {
						const r = Object(A.formatJsonRpcResult)(e, n),
							i = await this.core.crypto.encode(t, r),
							s = await this.core.history.get(t, e),
							o = kt[s.request.method].res;
						await this.core.relayer.publish(t, i, o), await this.core.history.resolve(r)
					}, this.sendError = async (e, t, n) => {
						const r = Object(A.formatJsonRpcError)(e, n),
							i = await this.core.crypto.encode(t, r),
							s = await this.core.history.get(t, e),
							o = kt[s.request.method] ? kt[s.request.method].res : kt.unregistered_method.res;
						await this.core.relayer.publish(t, i, o), await this.core.history.resolve(r)
					}, this.deletePairing = async (e, t) => {
						await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, Object(I.z)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
					}, this.cleanup = async () => {
						const e = this.pairings.getAll().filter(e => Object(I.F)(e.expiry));
						await Promise.all(e.map(e => this.deletePairing(e.topic)))
					}, this.onRelayEventRequest = e => {
						const {
							topic: t,
							payload: n
						} = e, r = n.method;
						if (this.pairings.keys.includes(t)) switch (r) {
							case "wc_pairingPing":
								return this.onPairingPingRequest(t, n);
							case "wc_pairingDelete":
								return this.onPairingDeleteRequest(t, n);
							default:
								return this.onUnknownRpcMethodRequest(t, n)
						}
					}, this.onRelayEventResponse = async e => {
						const {
							topic: t,
							payload: n
						} = e, r = (await this.core.history.get(t, n.id)).request.method;
						if (this.pairings.keys.includes(t)) switch (r) {
							case "wc_pairingPing":
								return this.onPairingPingResponse(t, n);
							default:
								return this.onUnknownRpcMethodResponse(r)
						}
					}, this.onPairingPingRequest = async (e, t) => {
						const {
							id: n
						} = t;
						try {
							this.isValidPing({
								topic: e
							}), await this.sendResult(n, e, !0), this.events.emit("pairing_ping", {
								id: n,
								topic: e
							})
						} catch (r) {
							await this.sendError(n, e, r), this.logger.error(r)
						}
					}, this.onPairingPingResponse = (e, t) => {
						const {
							id: n
						} = t;
						setTimeout(() => {
							Object(A.isJsonRpcResult)(t) ? this.events.emit(Object(I.l)("pairing_ping", n), {}) : Object(A.isJsonRpcError)(t) && this.events.emit(Object(I.l)("pairing_ping", n), {
								error: t.error
							})
						}, 500)
					}, this.onPairingDeleteRequest = async (e, t) => {
						const {
							id: n
						} = t;
						try {
							this.isValidDisconnect({
								topic: e
							}), await this.deletePairing(e), this.events.emit("pairing_delete", {
								id: n,
								topic: e
							})
						} catch (r) {
							await this.sendError(n, e, r), this.logger.error(r)
						}
					}, this.onUnknownRpcMethodRequest = async (e, t) => {
						const {
							id: n,
							method: r
						} = t;
						try {
							if (this.registeredMethods.includes(r)) return;
							const t = Object(I.z)("WC_METHOD_UNSUPPORTED", r);
							await this.sendError(n, e, t), this.logger.error(t)
						} catch (i) {
							await this.sendError(n, e, i), this.logger.error(i)
						}
					}, this.onUnknownRpcMethodResponse = e => {
						this.registeredMethods.includes(e) || this.logger.error(Object(I.z)("WC_METHOD_UNSUPPORTED", e))
					}, this.isValidPair = e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `pair() params: ${e}`);
							throw new Error(t)
						}
						if (!Object(I.fb)(e.uri)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
							throw new Error(t)
						}
					}, this.isValidPing = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `ping() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t
						} = e;
						await this.isValidPairingTopic(t)
					}, this.isValidDisconnect = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t
						} = e;
						await this.isValidPairingTopic(t)
					}, this.isValidPairingTopic = async e => {
						if (!Object(I.eb)(e, !1)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
							throw new Error(t)
						}
						if (!this.pairings.keys.includes(e)) {
							const {
								message: t
							} = Object(I.v)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
							throw new Error(t)
						}
						if (Object(I.F)(this.pairings.get(e).expiry)) {
							await this.deletePairing(e);
							const {
								message: t
							} = Object(I.v)("EXPIRED", `pairing topic: ${e}`);
							throw new Error(t)
						}
					}, this.core = e, this.logger = Object(h.generateChildLogger)(t, this.name), this.pairings = new jn(this.core, this.logger, this.name, this.storagePrefix)
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
				registerRelayerEvents() {
					this.core.relayer.on(It.message, async e => {
						const {
							topic: t,
							message: n
						} = e;
						if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) return;
						const r = await this.core.crypto.decode(t, n);
						Object(A.isJsonRpcRequest)(r) ? (this.core.history.set(t, r), this.onRelayEventRequest({
							topic: t,
							payload: r
						})) : Object(A.isJsonRpcResponse)(r) && (await this.core.history.resolve(r), this.onRelayEventResponse({
							topic: t,
							payload: r
						}))
					})
				}
				registerExpirerEvents() {
					this.core.expirer.on(Bt.expired, async e => {
						const {
							topic: t
						} = Object(I.jb)(e.target);
						t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
							topic: t
						}))
					})
				}
			}
			class On extends p {
				constructor(e, t) {
					super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new r.EventEmitter, this.name = $t, this.version = qt, this.cached = [], this.initialized = !1, this.storagePrefix = lt, this.init = async () => {
						this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
					}, this.set = (e, t, n) => {
						if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
								type: "method",
								method: "set",
								topic: e,
								request: t,
								chainId: n
							}), this.records.has(t.id)) return;
						const r = {
							id: t.id,
							topic: e,
							request: {
								method: t.method,
								params: t.params || null
							},
							chainId: n
						};
						this.records.set(r.id, r), this.events.emit(zt.created, r)
					}, this.resolve = async e => {
						if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
								type: "method",
								method: "update",
								response: e
							}), !this.records.has(e.id)) return;
						const t = await this.getRecord(e.id);
						typeof t.response > "u" && (t.response = Object(A.isJsonRpcError)(e) ? {
							error: e.error
						} : {
							result: e.result
						}, this.records.set(t.id, t), this.events.emit(zt.updated, t))
					}, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
						type: "method",
						method: "get",
						topic: e,
						id: t
					}), await this.getRecord(t)), this.delete = (e, t) => {
						this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
							type: "method",
							method: "delete",
							id: t
						}), this.values.forEach(n => {
							if (n.topic === e) {
								if (typeof t < "u" && n.id !== t) return;
								this.records.delete(n.id), this.events.emit(zt.deleted, n)
							}
						})
					}, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
						this.events.on(e, t)
					}, this.once = (e, t) => {
						this.events.once(e, t)
					}, this.off = (e, t) => {
						this.events.off(e, t)
					}, this.removeListener = (e, t) => {
						this.events.removeListener(e, t)
					}, this.logger = Object(h.generateChildLogger)(t, this.name)
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get storageKey() {
					return this.storagePrefix + this.version + "//" + this.name
				}
				get size() {
					return this.records.size
				}
				get keys() {
					return Array.from(this.records.keys())
				}
				get values() {
					return Array.from(this.records.values())
				}
				get pending() {
					const e = [];
					return this.values.forEach(t => {
						if (typeof t.response < "u") return;
						const n = {
							topic: t.topic,
							request: Object(A.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
							chainId: t.chainId
						};
						return e.push(n)
					}), e
				}
				async setJsonRpcRecords(e) {
					await this.core.storage.setItem(this.storageKey, e)
				}
				async getJsonRpcRecords() {
					return await this.core.storage.getItem(this.storageKey)
				}
				getRecord(e) {
					this.isInitialized();
					const t = this.records.get(e);
					if (!t) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `${this.name}: ${e}`);
						throw new Error(t)
					}
					return t
				}
				async persist() {
					await this.setJsonRpcRecords(this.values), this.events.emit(zt.sync)
				}
				async restore() {
					try {
						const e = await this.getJsonRpcRecords();
						if (typeof e > "u" || !e.length) return;
						if (this.records.size) {
							const {
								message: e
							} = Object(I.v)("RESTORE_WILL_OVERRIDE", this.name);
							throw this.logger.error(e), new Error(e)
						}
						this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
							type: "method",
							method: "restore",
							records: this.values
						})
					} catch (e) {
						this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
					}
				}
				registerEventListeners() {
					this.events.on(zt.created, e => {
						const t = zt.created;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							record: e
						}), this.persist()
					}), this.events.on(zt.updated, e => {
						const t = zt.updated;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							record: e
						}), this.persist()
					}), this.events.on(zt.deleted, e => {
						const t = zt.deleted;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							record: e
						}), this.persist()
					})
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
			}
			class Sn extends _ {
				constructor(e, t) {
					super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new r.EventEmitter, this.name = Ht, this.version = Kt, this.cached = [], this.initialized = !1, this.storagePrefix = lt, this.init = async () => {
						this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
					}, this.has = e => {
						try {
							const t = this.formatTarget(e);
							return typeof this.getExpiration(t) < "u"
						} catch {
							return !1
						}
					}, this.set = (e, t) => {
						this.isInitialized();
						const n = this.formatTarget(e),
							r = {
								target: n,
								expiry: t
							};
						this.expirations.set(n, r), this.checkExpiry(n, r), this.events.emit(Bt.created, {
							target: n,
							expiration: r
						})
					}, this.get = e => {
						this.isInitialized();
						const t = this.formatTarget(e);
						return this.getExpiration(t)
					}, this.del = e => {
						if (this.isInitialized(), this.has(e)) {
							const t = this.formatTarget(e),
								n = this.getExpiration(t);
							this.expirations.delete(t), this.events.emit(Bt.deleted, {
								target: t,
								expiration: n
							})
						}
					}, this.on = (e, t) => {
						this.events.on(e, t)
					}, this.once = (e, t) => {
						this.events.once(e, t)
					}, this.off = (e, t) => {
						this.events.off(e, t)
					}, this.removeListener = (e, t) => {
						this.events.removeListener(e, t)
					}, this.logger = Object(h.generateChildLogger)(t, this.name)
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get storageKey() {
					return this.storagePrefix + this.version + "//" + this.name
				}
				get length() {
					return this.expirations.size
				}
				get keys() {
					return Array.from(this.expirations.keys())
				}
				get values() {
					return Array.from(this.expirations.values())
				}
				formatTarget(e) {
					if ("string" == typeof e) return Object(I.o)(e);
					if ("number" == typeof e) return Object(I.m)(e);
					const {
						message: t
					} = Object(I.v)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
					throw new Error(t)
				}
				async setExpirations(e) {
					await this.core.storage.setItem(this.storageKey, e)
				}
				async getExpirations() {
					return await this.core.storage.getItem(this.storageKey)
				}
				async persist() {
					await this.setExpirations(this.values), this.events.emit(Bt.sync)
				}
				async restore() {
					try {
						const e = await this.getExpirations();
						if (typeof e > "u" || !e.length) return;
						if (this.expirations.size) {
							const {
								message: e
							} = Object(I.v)("RESTORE_WILL_OVERRIDE", this.name);
							throw this.logger.error(e), new Error(e)
						}
						this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
							type: "method",
							method: "restore",
							expirations: this.values
						})
					} catch (e) {
						this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
					}
				}
				getExpiration(e) {
					const t = this.expirations.get(e);
					if (!t) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `${this.name}: ${e}`);
						throw this.logger.error(t), new Error(t)
					}
					return t
				}
				checkExpiry(e, t) {
					const {
						expiry: n
					} = t;
					Object(x.toMiliseconds)(n) - Date.now() <= 0 && this.expire(e, t)
				}
				expire(e, t) {
					this.expirations.delete(e), this.events.emit(Bt.expired, {
						target: e,
						expiration: t
					})
				}
				checkExpirations() {
					this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
				}
				registerEventListeners() {
					this.core.heartbeat.on(l.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Bt.created, e => {
						const t = Bt.created;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							data: e
						}), this.persist()
					}), this.events.on(Bt.expired, e => {
						const t = Bt.expired;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							data: e
						}), this.persist()
					}), this.events.on(Bt.deleted, e => {
						const t = Bt.deleted;
						this.logger.info(`Emitting ${t}`), this.logger.debug({
							type: "event",
							event: t,
							data: e
						}), this.persist()
					})
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
			}
			class In extends w {
				constructor(e, t) {
					super(e, t), this.projectId = e, this.logger = t, this.name = Vt, this.initialized = !1, this.init = async e => {
						Object(I.I)() || !Object(I.C)() || (this.verifyUrl = (null == e ? void 0 : e.verifyUrl) || Ft, await this.createIframe())
					}, this.register = async e => {
						var t;
						this.initialized || await this.init(), this.iframe && (null == (t = this.iframe.contentWindow) || t.postMessage(e.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${e.attestationId} ${this.verifyUrl}`))
					}, this.resolve = async e => {
						var t;
						if (this.isDevEnv) return "";
						this.logger.info(`resolving attestation: ${e.attestationId}`);
						const n = this.startAbortTimer(x.FIVE_SECONDS),
							r = await fetch(`${this.verifyUrl}/attestation/${e.attestationId}`, {
								signal: this.abortController.signal
							});
						return clearTimeout(n), 200 === r.status ? null == (t = await r.json()) ? void 0 : t.origin : ""
					}, this.createIframe = async () => {
						try {
							const e = this.startAbortTimer(x.FIVE_SECONDS);
							await Promise.race([new Promise((t, n) => {
								const r = document.createElement("iframe");
								r.setAttribute("id", Vt), r.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), r.style.display = "none", r.addEventListener("load", () => {
									this.initialized = !0, clearTimeout(e), t()
								}), r.addEventListener("error", e => {
									n(e)
								}), document.body.append(r), this.iframe = r
							}), new Promise(e => {
								this.abortController.signal.addEventListener("abort", () => {
									e("iframe load timeout")
								})
							})])
						} catch (e) {
							this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(e)
						}
					}, this.logger = Object(h.generateChildLogger)(t, this.name), this.verifyUrl = Ft, this.abortController = new AbortController, this.isDevEnv = Object(I.G)() && {}.IS_VITEST
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				startAbortTimer(e) {
					return setTimeout(() => this.abortController.abort(), Object(I.d)(e))
				}
			}
			var Pn = Object.defineProperty,
				xn = Object.getOwnPropertySymbols,
				Rn = Object.prototype.hasOwnProperty,
				An = Object.prototype.propertyIsEnumerable,
				Nn = (e, t, n) => t in e ? Pn(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				Tn = (e, t) => {
					for (var n in t || (t = {})) Rn.call(t, n) && Nn(e, n, t[n]);
					if (xn)
						for (var n of xn(t)) An.call(t, n) && Nn(e, n, t[n]);
					return e
				};
			class Cn extends f {
				constructor(e) {
					super(e), this.protocol = at, this.version = ct, this.name = ut, this.events = new r.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = null == e ? void 0 : e.projectId, this.relayUrl = (null == e ? void 0 : e.relayUrl) || Ot;
					const t = typeof(null == e ? void 0 : e.logger) < "u" && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : Object(h.pino)(Object(h.getDefaultLoggerOptions)({
						level: (null == e ? void 0 : e.logger) || ht.logger
					}));
					this.logger = Object(h.generateChildLogger)(t, this.name), this.heartbeat = new l.HeartBeat, this.crypto = new Gt(this, this.logger, null == e ? void 0 : e.keychain), this.history = new On(this, this.logger), this.expirer = new Sn(this, this.logger), this.storage = null != e && e.storage ? e.storage : new(void 0)(Tn(Tn({}, dt), null == e ? void 0 : e.storageOptions)), this.relayer = new gn({
						core: this,
						logger: this.logger,
						relayUrl: this.relayUrl,
						projectId: this.projectId
					}), this.pairing = new En(this, this.logger), this.verify = new In(this.projectId || "", this.logger)
				}
				static async init(e) {
					const t = new Cn(e);
					return await t.initialize(), t
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				async start() {
					this.initialized || await this.initialize()
				}
				async initialize() {
					this.logger.trace("Initialized");
					try {
						await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
					} catch (e) {
						throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
					}
				}
			}
			const Un = Cn,
				Ln = "wc",
				Mn = 2,
				Dn = `${Ln}@${Mn}:client:`,
				kn = {
					name: "client",
					logger: "error",
					controller: !1,
					relayUrl: "wss://relay.walletconnect.com"
				},
				zn = "proposal",
				$n = (x.THIRTY_DAYS, "Proposal expired"),
				qn = "session",
				Hn = x.SEVEN_DAYS,
				Bn = "engine",
				Kn = {
					wc_sessionPropose: {
						req: {
							ttl: x.FIVE_MINUTES,
							prompt: !0,
							tag: 1100
						},
						res: {
							ttl: x.FIVE_MINUTES,
							prompt: !1,
							tag: 1101
						}
					},
					wc_sessionSettle: {
						req: {
							ttl: x.FIVE_MINUTES,
							prompt: !1,
							tag: 1102
						},
						res: {
							ttl: x.FIVE_MINUTES,
							prompt: !1,
							tag: 1103
						}
					},
					wc_sessionUpdate: {
						req: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1104
						},
						res: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1105
						}
					},
					wc_sessionExtend: {
						req: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1106
						},
						res: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1107
						}
					},
					wc_sessionRequest: {
						req: {
							ttl: x.FIVE_MINUTES,
							prompt: !0,
							tag: 1108
						},
						res: {
							ttl: x.FIVE_MINUTES,
							prompt: !1,
							tag: 1109
						}
					},
					wc_sessionEvent: {
						req: {
							ttl: x.FIVE_MINUTES,
							prompt: !0,
							tag: 1110
						},
						res: {
							ttl: x.FIVE_MINUTES,
							prompt: !1,
							tag: 1111
						}
					},
					wc_sessionDelete: {
						req: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1112
						},
						res: {
							ttl: x.ONE_DAY,
							prompt: !1,
							tag: 1113
						}
					},
					wc_sessionPing: {
						req: {
							ttl: x.THIRTY_SECONDS,
							prompt: !1,
							tag: 1114
						},
						res: {
							ttl: x.THIRTY_SECONDS,
							prompt: !1,
							tag: 1115
						}
					}
				},
				Vn = {
					min: x.FIVE_MINUTES,
					max: x.SEVEN_DAYS
				},
				Fn = "request",
				Wn = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
			var Gn = Object.defineProperty,
				Jn = Object.defineProperties,
				Yn = Object.getOwnPropertyDescriptors,
				Xn = Object.getOwnPropertySymbols,
				Zn = Object.prototype.hasOwnProperty,
				Qn = Object.prototype.propertyIsEnumerable,
				er = (e, t, n) => t in e ? Gn(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				tr = (e, t) => {
					for (var n in t || (t = {})) Zn.call(t, n) && er(e, n, t[n]);
					if (Xn)
						for (var n of Xn(t)) Qn.call(t, n) && er(e, n, t[n]);
					return e
				},
				nr = (e, t) => Jn(e, Yn(t));
			class rr extends E {
				constructor(e) {
					var t;
					super(e), t = this, this.name = Bn, this.events = new i.a, this.initialized = !1, this.ignoredPayloadTypes = [I.c], this.init = async () => {
						this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
							methods: Object.keys(Kn)
						}), this.initialized = !0)
					}, this.connect = async e => {
						this.isInitialized();
						const t = nr(tr({}, e), {
							requiredNamespaces: e.requiredNamespaces || {},
							optionalNamespaces: e.optionalNamespaces || {}
						});
						await this.isValidConnect(t);
						const {
							pairingTopic: n,
							requiredNamespaces: r,
							optionalNamespaces: i,
							sessionProperties: s,
							relays: o
						} = t;
						let a, c = n,
							u = !1;
						if (c && (u = this.client.core.pairing.pairings.get(c).active), !c || !u) {
							const {
								topic: e,
								uri: t
							} = await this.client.core.pairing.create();
							c = e, a = t
						}
						const l = await this.client.core.crypto.generateKeyPair(),
							h = tr({
								requiredNamespaces: r,
								optionalNamespaces: i,
								relays: null != o ? o : [{
									protocol: jt
								}],
								proposer: {
									publicKey: l,
									metadata: this.client.metadata
								}
							}, s && {
								sessionProperties: s
							}),
							{
								reject: d,
								resolve: f,
								done: p
							} = Object(I.e)(x.FIVE_MINUTES, $n);
						if (this.events.once(Object(I.l)("session_connect"), async e => {
								let {
									error: t,
									session: n
								} = e;
								if (t) d(t);
								else if (n) {
									n.self.publicKey = l;
									const e = nr(tr({}, n), {
										requiredNamespaces: n.requiredNamespaces,
										optionalNamespaces: n.optionalNamespaces
									});
									await this.client.session.set(n.topic, e), await this.setExpiry(n.topic, n.expiry), c && await this.client.core.pairing.updateMetadata({
										topic: c,
										metadata: n.peer.metadata
									}), f(e)
								}
							}), !c) {
							const {
								message: e
							} = Object(I.v)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
							throw new Error(e)
						}
						const g = await this.sendRequest(c, "wc_sessionPropose", h),
							b = Object(I.d)(x.FIVE_MINUTES);
						return await this.setProposal(g, tr({
							id: g,
							expiry: b
						}, h)), {
							uri: a,
							approval: p
						}
					}, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
						this.isInitialized(), await this.isValidApprove(e);
						const {
							id: t,
							relayProtocol: n,
							namespaces: r,
							sessionProperties: i
						} = e, s = this.client.proposal.get(t);
						let {
							pairingTopic: o,
							proposer: a,
							requiredNamespaces: c,
							optionalNamespaces: u
						} = s;
						o = o || "", Object(I.W)(c) || (c = Object(I.y)(r, "approve()"));
						const l = await this.client.core.crypto.generateKeyPair(),
							h = a.publicKey,
							d = await this.client.core.crypto.generateSharedKey(l, h);
						o && t && (await this.client.core.pairing.updateMetadata({
							topic: o,
							metadata: a.metadata
						}), await this.sendResult(t, o, {
							relay: {
								protocol: null != n ? n : "irn"
							},
							responderPublicKey: l
						}), await this.client.proposal.delete(t, Object(I.z)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
							topic: o
						}));
						const f = tr({
							relay: {
								protocol: null != n ? n : "irn"
							},
							namespaces: r,
							requiredNamespaces: c,
							optionalNamespaces: u,
							pairingTopic: o,
							controller: {
								publicKey: l,
								metadata: this.client.metadata
							},
							expiry: Object(I.d)(Hn)
						}, i && {
							sessionProperties: i
						});
						await this.client.core.relayer.subscribe(d), await this.sendRequest(d, "wc_sessionSettle", f);
						const p = nr(tr({}, f), {
							topic: d,
							pairingTopic: o,
							acknowledged: !1,
							self: f.controller,
							peer: {
								publicKey: a.publicKey,
								metadata: a.metadata
							},
							controller: l
						});
						return await this.client.session.set(d, p), await this.setExpiry(d, Object(I.d)(Hn)), {
							topic: d,
							acknowledged: () => new Promise(e => e(this.client.session.get(d)))
						}
					}, this.reject = async e => {
						this.isInitialized(), await this.isValidReject(e);
						const {
							id: t,
							reason: n
						} = e, {
							pairingTopic: r
						} = this.client.proposal.get(t);
						r && (await this.sendError(t, r, n), await this.client.proposal.delete(t, Object(I.z)("USER_DISCONNECTED")))
					}, this.update = async e => {
						this.isInitialized(), await this.isValidUpdate(e);
						const {
							topic: t,
							namespaces: n
						} = e, r = await this.sendRequest(t, "wc_sessionUpdate", {
							namespaces: n
						}), {
							done: i,
							resolve: s,
							reject: o
						} = Object(I.e)();
						return this.events.once(Object(I.l)("session_update", r), e => {
							let {
								error: t
							} = e;
							t ? o(t) : s()
						}), await this.client.session.update(t, {
							namespaces: n
						}), {
							acknowledged: i
						}
					}, this.extend = async e => {
						this.isInitialized(), await this.isValidExtend(e);
						const {
							topic: t
						} = e, n = await this.sendRequest(t, "wc_sessionExtend", {}), {
							done: r,
							resolve: i,
							reject: s
						} = Object(I.e)();
						return this.events.once(Object(I.l)("session_extend", n), e => {
							let {
								error: t
							} = e;
							t ? s(t) : i()
						}), await this.setExpiry(t, Object(I.d)(Hn)), {
							acknowledged: r
						}
					}, this.request = async e => {
						this.isInitialized(), await this.isValidRequest(e);
						const {
							chainId: t,
							request: n,
							topic: r,
							expiry: i
						} = e, s = await this.sendRequest(r, "wc_sessionRequest", {
							request: n,
							chainId: t
						}, i), {
							done: o,
							resolve: a,
							reject: c
						} = Object(I.e)(i);
						return this.events.once(Object(I.l)("session_request", s), e => {
							let {
								error: t,
								result: n
							} = e;
							t ? c(t) : a(n)
						}), this.client.events.emit("session_request_sent", {
							topic: r,
							request: n,
							chainId: t,
							id: s
						}), await o()
					}, this.respond = async e => {
						this.isInitialized(), await this.isValidRespond(e);
						const {
							topic: t,
							response: n
						} = e, {
							id: r
						} = n;
						Object(A.isJsonRpcResult)(n) ? await this.sendResult(r, t, n.result) : Object(A.isJsonRpcError)(n) && await this.sendError(r, t, n.error), this.deletePendingSessionRequest(e.response.id, {
							message: "fulfilled",
							code: 0
						})
					}, this.ping = async e => {
						this.isInitialized(), await this.isValidPing(e);
						const {
							topic: t
						} = e;
						if (this.client.session.keys.includes(t)) {
							const e = await this.sendRequest(t, "wc_sessionPing", {}),
								{
									done: n,
									resolve: r,
									reject: i
								} = Object(I.e)();
							this.events.once(Object(I.l)("session_ping", e), e => {
								let {
									error: t
								} = e;
								t ? i(t) : r()
							}), await n()
						} else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
							topic: t
						})
					}, this.emit = async e => {
						this.isInitialized(), await this.isValidEmit(e);
						const {
							topic: t,
							event: n,
							chainId: r
						} = e;
						await this.sendRequest(t, "wc_sessionEvent", {
							event: n,
							chainId: r
						})
					}, this.disconnect = async e => {
						this.isInitialized(), await this.isValidDisconnect(e);
						const {
							topic: t
						} = e;
						this.client.session.keys.includes(t) ? (await this.sendRequest(t, "wc_sessionDelete", Object(I.z)("USER_DISCONNECTED")), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
							topic: t
						})
					}, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => Object(I.J)(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.deleteSession = async (e, t) => {
						const {
							self: n
						} = this.client.session.get(e);
						await this.client.core.relayer.unsubscribe(e), await Promise.all([this.client.session.delete(e, Object(I.z)("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.client.core.expirer.del(e)])
					}, this.deleteProposal = async (e, t) => {
						await Promise.all([this.client.proposal.delete(e, Object(I.z)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
					}, this.deletePendingSessionRequest = async function(e, n) {
						let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						await Promise.all([t.client.pendingRequest.delete(e, n), r ? Promise.resolve() : t.client.core.expirer.del(e)])
					}, this.setExpiry = async (e, t) => {
						this.client.session.keys.includes(e) && await this.client.session.update(e, {
							expiry: t
						}), this.client.core.expirer.set(e, t)
					}, this.setProposal = async (e, t) => {
						await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
					}, this.setPendingSessionRequest = async e => {
						const t = Kn.wc_sessionRequest.req.ttl,
							{
								id: n,
								topic: r,
								params: i
							} = e;
						await this.client.pendingRequest.set(n, {
							id: n,
							topic: r,
							params: i
						}), t && this.client.core.expirer.set(n, Object(I.d)(t))
					}, this.sendRequest = async (e, t, n, r) => {
						const i = Object(A.formatJsonRpcRequest)(t, n);
						if (Object(I.C)() && Wn.includes(t)) {
							const e = Object(I.B)(JSON.stringify(i));
							await this.client.core.verify.register({
								attestationId: e
							})
						}
						const s = await this.client.core.crypto.encode(e, i),
							o = Kn[t].req;
						return r && (o.ttl = r), this.client.core.history.set(e, i), this.client.core.relayer.publish(e, s, o), i.id
					}, this.sendResult = async (e, t, n) => {
						const r = Object(A.formatJsonRpcResult)(e, n),
							i = await this.client.core.crypto.encode(t, r),
							s = await this.client.core.history.get(t, e),
							o = Kn[s.request.method].res;
						this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(r)
					}, this.sendError = async (e, t, n) => {
						const r = Object(A.formatJsonRpcError)(e, n),
							i = await this.client.core.crypto.encode(t, r),
							s = await this.client.core.history.get(t, e),
							o = Kn[s.request.method].res;
						this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(r)
					}, this.cleanup = async () => {
						const e = [],
							t = [];
						this.client.session.getAll().forEach(t => {
							Object(I.F)(t.expiry) && e.push(t.topic)
						}), this.client.proposal.getAll().forEach(e => {
							Object(I.F)(e.expiry) && t.push(e.id)
						}), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
					}, this.onRelayEventRequest = e => {
						const {
							topic: t,
							payload: n
						} = e, r = n.method;
						switch (r) {
							case "wc_sessionPropose":
								return this.onSessionProposeRequest(t, n);
							case "wc_sessionSettle":
								return this.onSessionSettleRequest(t, n);
							case "wc_sessionUpdate":
								return this.onSessionUpdateRequest(t, n);
							case "wc_sessionExtend":
								return this.onSessionExtendRequest(t, n);
							case "wc_sessionPing":
								return this.onSessionPingRequest(t, n);
							case "wc_sessionDelete":
								return this.onSessionDeleteRequest(t, n);
							case "wc_sessionRequest":
								return this.onSessionRequest(t, n);
							case "wc_sessionEvent":
								return this.onSessionEventRequest(t, n);
							default:
								return this.client.logger.info(`Unsupported request method ${r}`)
						}
					}, this.onRelayEventResponse = async e => {
						const {
							topic: t,
							payload: n
						} = e, r = (await this.client.core.history.get(t, n.id)).request.method;
						switch (r) {
							case "wc_sessionPropose":
								return this.onSessionProposeResponse(t, n);
							case "wc_sessionSettle":
								return this.onSessionSettleResponse(t, n);
							case "wc_sessionUpdate":
								return this.onSessionUpdateResponse(t, n);
							case "wc_sessionExtend":
								return this.onSessionExtendResponse(t, n);
							case "wc_sessionPing":
								return this.onSessionPingResponse(t, n);
							case "wc_sessionRequest":
								return this.onSessionRequestResponse(t, n);
							default:
								return this.client.logger.info(`Unsupported response method ${r}`)
						}
					}, this.onSessionProposeRequest = async (e, t) => {
						const {
							params: n,
							id: r
						} = t;
						try {
							this.isValidConnect(tr({}, t.params));
							const i = Object(I.d)(x.FIVE_MINUTES),
								s = tr({
									id: r,
									pairingTopic: e,
									expiry: i
								}, n);
							await this.setProposal(r, s);
							const o = Object(I.B)(JSON.stringify(t)),
								a = await this.getVerifyContext(o, s.proposer.metadata);
							this.client.events.emit("session_proposal", {
								id: r,
								params: s,
								context: a
							})
						} catch (i) {
							await this.sendError(r, e, i), this.client.logger.error(i)
						}
					}, this.onSessionProposeResponse = async (e, t) => {
						const {
							id: n
						} = t;
						if (Object(A.isJsonRpcResult)(t)) {
							const {
								result: r
							} = t;
							this.client.logger.trace({
								type: "method",
								method: "onSessionProposeResponse",
								result: r
							});
							const i = this.client.proposal.get(n);
							this.client.logger.trace({
								type: "method",
								method: "onSessionProposeResponse",
								proposal: i
							});
							const s = i.proposer.publicKey;
							this.client.logger.trace({
								type: "method",
								method: "onSessionProposeResponse",
								selfPublicKey: s
							});
							const o = r.responderPublicKey;
							this.client.logger.trace({
								type: "method",
								method: "onSessionProposeResponse",
								peerPublicKey: o
							});
							const a = await this.client.core.crypto.generateSharedKey(s, o);
							this.client.logger.trace({
								type: "method",
								method: "onSessionProposeResponse",
								sessionTopic: a
							});
							const c = await this.client.core.relayer.subscribe(a);
							this.client.logger.trace({
								type: "method",
								method: "onSessionProposeResponse",
								subscriptionId: c
							}), await this.client.core.pairing.activate({
								topic: e
							})
						} else Object(A.isJsonRpcError)(t) && (await this.client.proposal.delete(n, Object(I.z)("USER_DISCONNECTED")), this.events.emit(Object(I.l)("session_connect"), {
							error: t.error
						}))
					}, this.onSessionSettleRequest = async (e, t) => {
						const {
							id: n,
							params: r
						} = t;
						try {
							this.isValidSessionSettleRequest(r);
							const {
								relay: n,
								controller: i,
								expiry: s,
								namespaces: o,
								requiredNamespaces: a,
								optionalNamespaces: c,
								sessionProperties: u,
								pairingTopic: l
							} = t.params, h = tr({
								topic: e,
								relay: n,
								expiry: s,
								namespaces: o,
								acknowledged: !0,
								pairingTopic: l,
								requiredNamespaces: a,
								optionalNamespaces: c,
								controller: i.publicKey,
								self: {
									publicKey: "",
									metadata: this.client.metadata
								},
								peer: {
									publicKey: i.publicKey,
									metadata: i.metadata
								}
							}, u && {
								sessionProperties: u
							});
							await this.sendResult(t.id, e, !0), this.events.emit(Object(I.l)("session_connect"), {
								session: h
							})
						} catch (i) {
							await this.sendError(n, e, i), this.client.logger.error(i)
						}
					}, this.onSessionSettleResponse = async (e, t) => {
						const {
							id: n
						} = t;
						Object(A.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
							acknowledged: !0
						}), this.events.emit(Object(I.l)("session_approve", n), {})) : Object(A.isJsonRpcError)(t) && (await this.client.session.delete(e, Object(I.z)("USER_DISCONNECTED")), this.events.emit(Object(I.l)("session_approve", n), {
							error: t.error
						}))
					}, this.onSessionUpdateRequest = async (e, t) => {
						const {
							params: n,
							id: r
						} = t;
						try {
							this.isValidUpdate(tr({
								topic: e
							}, n)), await this.client.session.update(e, {
								namespaces: n.namespaces
							}), await this.sendResult(r, e, !0), this.client.events.emit("session_update", {
								id: r,
								topic: e,
								params: n
							})
						} catch (i) {
							await this.sendError(r, e, i), this.client.logger.error(i)
						}
					}, this.onSessionUpdateResponse = (e, t) => {
						const {
							id: n
						} = t;
						Object(A.isJsonRpcResult)(t) ? this.events.emit(Object(I.l)("session_update", n), {}) : Object(A.isJsonRpcError)(t) && this.events.emit(Object(I.l)("session_update", n), {
							error: t.error
						})
					}, this.onSessionExtendRequest = async (e, t) => {
						const {
							id: n
						} = t;
						try {
							this.isValidExtend({
								topic: e
							}), await this.setExpiry(e, Object(I.d)(Hn)), await this.sendResult(n, e, !0), this.client.events.emit("session_extend", {
								id: n,
								topic: e
							})
						} catch (r) {
							await this.sendError(n, e, r), this.client.logger.error(r)
						}
					}, this.onSessionExtendResponse = (e, t) => {
						const {
							id: n
						} = t;
						Object(A.isJsonRpcResult)(t) ? this.events.emit(Object(I.l)("session_extend", n), {}) : Object(A.isJsonRpcError)(t) && this.events.emit(Object(I.l)("session_extend", n), {
							error: t.error
						})
					}, this.onSessionPingRequest = async (e, t) => {
						const {
							id: n
						} = t;
						try {
							this.isValidPing({
								topic: e
							}), await this.sendResult(n, e, !0), this.client.events.emit("session_ping", {
								id: n,
								topic: e
							})
						} catch (r) {
							await this.sendError(n, e, r), this.client.logger.error(r)
						}
					}, this.onSessionPingResponse = (e, t) => {
						const {
							id: n
						} = t;
						setTimeout(() => {
							Object(A.isJsonRpcResult)(t) ? this.events.emit(Object(I.l)("session_ping", n), {}) : Object(A.isJsonRpcError)(t) && this.events.emit(Object(I.l)("session_ping", n), {
								error: t.error
							})
						}, 500)
					}, this.onSessionDeleteRequest = async (e, t) => {
						const {
							id: n
						} = t;
						try {
							this.isValidDisconnect({
								topic: e,
								reason: t.params
							}), await Promise.all([new Promise(t => {
								this.client.core.relayer.once(It.publish, async () => {
									t(await this.deleteSession(e))
								})
							}), this.sendResult(n, e, !0)]), this.client.events.emit("session_delete", {
								id: n,
								topic: e
							})
						} catch (r) {
							await this.sendError(n, e, r), this.client.logger.error(r)
						}
					}, this.onSessionRequest = async (e, t) => {
						const {
							id: n,
							params: r
						} = t;
						try {
							this.isValidRequest(tr({
								topic: e
							}, r)), await this.setPendingSessionRequest({
								id: n,
								topic: e,
								params: r
							});
							const i = Object(I.B)(JSON.stringify(t)),
								s = this.client.session.get(e),
								o = await this.getVerifyContext(i, s.peer.metadata);
							this.client.events.emit("session_request", {
								id: n,
								topic: e,
								params: r,
								context: o
							})
						} catch (i) {
							await this.sendError(n, e, i), this.client.logger.error(i)
						}
					}, this.onSessionRequestResponse = (e, t) => {
						const {
							id: n
						} = t;
						Object(A.isJsonRpcResult)(t) ? this.events.emit(Object(I.l)("session_request", n), {
							result: t.result
						}) : Object(A.isJsonRpcError)(t) && this.events.emit(Object(I.l)("session_request", n), {
							error: t.error
						})
					}, this.onSessionEventRequest = async (e, t) => {
						const {
							id: n,
							params: r
						} = t;
						try {
							this.isValidEmit(tr({
								topic: e
							}, r)), this.client.events.emit("session_event", {
								id: n,
								topic: e,
								params: r
							})
						} catch (i) {
							await this.sendError(n, e, i), this.client.logger.error(i)
						}
					}, this.isValidConnect = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
							throw new Error(t)
						}
						const {
							pairingTopic: t,
							requiredNamespaces: n,
							optionalNamespaces: r,
							sessionProperties: i,
							relays: s
						} = e;
						if (Object(I.M)(t) || await this.isValidPairingTopic(t), !Object(I.Z)(s, !0)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `connect() relays: ${s}`);
							throw new Error(e)
						}!Object(I.M)(n) && 0 !== Object(I.W)(n) && this.validateNamespaces(n, "requiredNamespaces"), !Object(I.M)(r) && 0 !== Object(I.W)(r) && this.validateNamespaces(r, "optionalNamespaces"), Object(I.M)(i) || this.validateSessionProps(i, "sessionProperties")
					}, this.validateNamespaces = (e, t) => {
						const n = Object(I.cb)(e, "connect()", t);
						if (n) throw new Error(n.message)
					}, this.isValidApprove = async e => {
						if (!Object(I.X)(e)) throw new Error(Object(I.v)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
						const {
							id: t,
							namespaces: n,
							relayProtocol: r,
							sessionProperties: i
						} = e;
						await this.isValidProposalId(t);
						const s = this.client.proposal.get(t),
							o = Object(I.S)(n, "approve()");
						if (o) throw new Error(o.message);
						const a = Object(I.E)(s.requiredNamespaces, n, "approve()");
						if (a) throw new Error(a.message);
						if (!Object(I.eb)(r, !0)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `approve() relayProtocol: ${r}`);
							throw new Error(e)
						}
						Object(I.M)(i) || this.validateSessionProps(i, "sessionProperties")
					}, this.isValidReject = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `reject() params: ${e}`);
							throw new Error(t)
						}
						const {
							id: t,
							reason: n
						} = e;
						if (await this.isValidProposalId(t), !Object(I.P)(n)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
							throw new Error(e)
						}
					}, this.isValidSessionSettleRequest = e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
							throw new Error(t)
						}
						const {
							relay: t,
							controller: n,
							namespaces: r,
							expiry: i
						} = e;
						if (!Object(I.Y)(t)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
							throw new Error(e)
						}
						const s = Object(I.O)(n, "onSessionSettleRequest()");
						if (s) throw new Error(s.message);
						const o = Object(I.S)(r, "onSessionSettleRequest()");
						if (o) throw new Error(o.message);
						if (Object(I.F)(i)) {
							const {
								message: e
							} = Object(I.v)("EXPIRED", "onSessionSettleRequest()");
							throw new Error(e)
						}
					}, this.isValidUpdate = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `update() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t,
							namespaces: n
						} = e;
						await this.isValidSessionTopic(t);
						const r = this.client.session.get(t),
							i = Object(I.S)(n, "update()");
						if (i) throw new Error(i.message);
						const s = Object(I.E)(r.requiredNamespaces, n, "update()");
						if (s) throw new Error(s.message)
					}, this.isValidExtend = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `extend() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t
						} = e;
						await this.isValidSessionTopic(t)
					}, this.isValidRequest = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `request() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t,
							request: n,
							chainId: r,
							expiry: i
						} = e;
						await this.isValidSessionTopic(t);
						const {
							namespaces: s
						} = this.client.session.get(t);
						if (!Object(I.T)(s, r)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `request() chainId: ${r}`);
							throw new Error(e)
						}
						if (!Object(I.ab)(n)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
							throw new Error(e)
						}
						if (!Object(I.V)(s, r, n.method)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `request() method: ${n.method}`);
							throw new Error(e)
						}
						if (i && !Object(I.bb)(i, Vn)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `request() expiry: ${i}. Expiry must be a number (in seconds) between ${Vn.min} and ${Vn.max}`);
							throw new Error(e)
						}
					}, this.isValidRespond = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `respond() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t,
							response: n
						} = e;
						if (await this.isValidSessionTopic(t), !Object(I.db)(n)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
							throw new Error(e)
						}
					}, this.isValidPing = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `ping() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t
						} = e;
						await this.isValidSessionOrPairingTopic(t)
					}, this.isValidEmit = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `emit() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t,
							event: n,
							chainId: r
						} = e;
						await this.isValidSessionTopic(t);
						const {
							namespaces: i
						} = this.client.session.get(t);
						if (!Object(I.T)(i, r)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `emit() chainId: ${r}`);
							throw new Error(e)
						}
						if (!Object(I.Q)(n)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
							throw new Error(e)
						}
						if (!Object(I.U)(i, r, n.name)) {
							const {
								message: e
							} = Object(I.v)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
							throw new Error(e)
						}
					}, this.isValidDisconnect = async e => {
						if (!Object(I.X)(e)) {
							const {
								message: t
							} = Object(I.v)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
							throw new Error(t)
						}
						const {
							topic: t
						} = e;
						await this.isValidSessionOrPairingTopic(t)
					}, this.getVerifyContext = async (e, t) => {
						const n = {
							verified: {
								verifyUrl: t.verifyUrl || "",
								validation: "UNKNOWN",
								origin: t.url || ""
							}
						};
						try {
							const r = await this.client.core.verify.resolve({
								attestationId: e,
								verifyUrl: t.verifyUrl
							});
							r && (n.verified.origin = r, n.verified.validation = r === t.url ? "VALID" : "INVALID")
						} catch (r) {
							this.client.logger.error(r)
						}
						return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n
					}, this.validateSessionProps = (e, t) => {
						Object.values(e).forEach(e => {
							if (!Object(I.eb)(e, !1)) {
								const {
									message: n
								} = Object(I.v)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
								throw new Error(n)
							}
						})
					}
				}
				isInitialized() {
					if (!this.initialized) {
						const {
							message: e
						} = Object(I.v)("NOT_INITIALIZED", this.name);
						throw new Error(e)
					}
				}
				registerRelayerEvents() {
					this.client.core.relayer.on(It.message, async e => {
						const {
							topic: t,
							message: n
						} = e;
						if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n))) return;
						const r = await this.client.core.crypto.decode(t, n);
						Object(A.isJsonRpcRequest)(r) ? (this.client.core.history.set(t, r), this.onRelayEventRequest({
							topic: t,
							payload: r
						})) : Object(A.isJsonRpcResponse)(r) && (await this.client.core.history.resolve(r), this.onRelayEventResponse({
							topic: t,
							payload: r
						}))
					})
				}
				registerExpirerEvents() {
					this.client.core.expirer.on(Bt.expired, async e => {
						const {
							topic: t,
							id: n
						} = Object(I.jb)(e.target);
						if (n && this.client.pendingRequest.keys.includes(n)) return await this.deletePendingSessionRequest(n, Object(I.v)("EXPIRED"), !0);
						t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
							topic: t
						})) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", {
							id: n
						}))
					})
				}
				isValidPairingTopic(e) {
					if (!Object(I.eb)(e, !1)) {
						const {
							message: t
						} = Object(I.v)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
						throw new Error(t)
					}
					if (!this.client.core.pairing.pairings.keys.includes(e)) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
						throw new Error(t)
					}
					if (Object(I.F)(this.client.core.pairing.pairings.get(e).expiry)) {
						const {
							message: t
						} = Object(I.v)("EXPIRED", `pairing topic: ${e}`);
						throw new Error(t)
					}
				}
				async isValidSessionTopic(e) {
					if (!Object(I.eb)(e, !1)) {
						const {
							message: t
						} = Object(I.v)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
						throw new Error(t)
					}
					if (!this.client.session.keys.includes(e)) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
						throw new Error(t)
					}
					if (Object(I.F)(this.client.session.get(e).expiry)) {
						await this.deleteSession(e);
						const {
							message: t
						} = Object(I.v)("EXPIRED", `session topic: ${e}`);
						throw new Error(t)
					}
				}
				async isValidSessionOrPairingTopic(e) {
					if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
					else {
						if (!this.client.core.pairing.pairings.keys.includes(e)) {
							if (Object(I.eb)(e, !1)) {
								const {
									message: t
								} = Object(I.v)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
								throw new Error(t)
							} {
								const {
									message: t
								} = Object(I.v)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
								throw new Error(t)
							}
						}
						this.isValidPairingTopic(e)
					}
				}
				async isValidProposalId(e) {
					if (!Object(I.R)(e)) {
						const {
							message: t
						} = Object(I.v)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
						throw new Error(t)
					}
					if (!this.client.proposal.keys.includes(e)) {
						const {
							message: t
						} = Object(I.v)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
						throw new Error(t)
					}
					if (Object(I.F)(this.client.proposal.get(e).expiry)) {
						await this.deleteProposal(e);
						const {
							message: t
						} = Object(I.v)("EXPIRED", `proposal id: ${e}`);
						throw new Error(t)
					}
				}
			}
			class ir extends jn {
				constructor(e, t) {
					super(e, t, zn, Dn), this.core = e, this.logger = t
				}
			}
			class sr extends jn {
				constructor(e, t) {
					super(e, t, qn, Dn), this.core = e, this.logger = t
				}
			}
			class or extends jn {
				constructor(e, t) {
					super(e, t, Fn, Dn, e => e.id), this.core = e, this.logger = t
				}
			}
			class ar extends j {
				constructor(e) {
					super(e), this.protocol = Ln, this.version = Mn, this.name = kn.name, this.events = new r.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
						try {
							return await this.engine.connect(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.pair = async e => {
						try {
							return await this.engine.pair(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.approve = async e => {
						try {
							return await this.engine.approve(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.reject = async e => {
						try {
							return await this.engine.reject(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.update = async e => {
						try {
							return await this.engine.update(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.extend = async e => {
						try {
							return await this.engine.extend(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.request = async e => {
						try {
							return await this.engine.request(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.respond = async e => {
						try {
							return await this.engine.respond(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.ping = async e => {
						try {
							return await this.engine.ping(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.emit = async e => {
						try {
							return await this.engine.emit(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.disconnect = async e => {
						try {
							return await this.engine.disconnect(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.find = e => {
						try {
							return this.engine.find(e)
						} catch (t) {
							throw this.logger.error(t.message), t
						}
					}, this.getPendingSessionRequests = () => {
						try {
							return this.engine.getPendingSessionRequests()
						} catch (e) {
							throw this.logger.error(e.message), e
						}
					}, this.name = (null == e ? void 0 : e.name) || kn.name, this.metadata = (null == e ? void 0 : e.metadata) || Object(I.t)();
					const t = typeof(null == e ? void 0 : e.logger) < "u" && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : Object(h.pino)(Object(h.getDefaultLoggerOptions)({
						level: (null == e ? void 0 : e.logger) || kn.logger
					}));
					this.core = (null == e ? void 0 : e.core) || new Un(e), this.logger = Object(h.generateChildLogger)(t, this.name), this.session = new sr(this.core, this.logger), this.proposal = new ir(this.core, this.logger), this.pendingRequest = new or(this.core, this.logger), this.engine = new rr(this)
				}
				static async init(e) {
					const t = new ar(e);
					return await t.initialize(), t
				}
				get context() {
					return Object(h.getLoggerContext)(this.logger)
				}
				get pairing() {
					return this.core.pairing.pairings
				}
				async initialize() {
					this.logger.trace("Initialized");
					try {
						await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
							verifyUrl: this.metadata.verifyUrl
						}), this.logger.info("SignClient Initialization Success")
					} catch (e) {
						throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
					}
				}
			}
		},
		"./node_modules/@walletconnect/time/dist/cjs/constants/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js");
			r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/constants/misc.js"), t), r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/constants/time.js"), t)
		},
		"./node_modules/@walletconnect/time/dist/cjs/constants/misc.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
		},
		"./node_modules/@walletconnect/time/dist/cjs/constants/time.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
		},
		"./node_modules/@walletconnect/time/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js");
			r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/utils/index.js"), t), r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/watch.js"), t), r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/types/index.js"), t), r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/constants/index.js"), t)
		},
		"./node_modules/@walletconnect/time/dist/cjs/types/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), n("./node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js").__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/types/watch.js"), t)
		},
		"./node_modules/@walletconnect/time/dist/cjs/types/watch.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IWatch = void 0;
			t.IWatch = class {}
		},
		"./node_modules/@walletconnect/time/dist/cjs/utils/convert.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.fromMiliseconds = t.toMiliseconds = void 0;
			const r = n("./node_modules/@walletconnect/time/dist/cjs/constants/index.js");
			t.toMiliseconds = function(e) {
				return e * r.ONE_THOUSAND
			}, t.fromMiliseconds = function(e) {
				return Math.floor(e / r.ONE_THOUSAND)
			}
		},
		"./node_modules/@walletconnect/time/dist/cjs/utils/delay.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.delay = void 0, t.delay = function(e) {
				return new Promise(t => {
					setTimeout(() => {
						t(!0)
					}, e)
				})
			}
		},
		"./node_modules/@walletconnect/time/dist/cjs/utils/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js");
			r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/utils/delay.js"), t), r.__exportStar(n("./node_modules/@walletconnect/time/dist/cjs/utils/convert.js"), t)
		},
		"./node_modules/@walletconnect/time/dist/cjs/watch.js": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			Object.defineProperty(exports, "__esModule", {
				value: !0
			}), exports.Watch = void 0;
			class r {
				constructor() {
					this.timestamps = new Map
				}
				start(e) {
					if (this.timestamps.has(e)) throw new Error(`Watch already started for label: ${e}`);
					this.timestamps.set(e, {
						started: Date.now()
					})
				}
				stop(e) {
					const t = this.get(e);
					if (void 0 !== t.elapsed) throw new Error(`Watch already stopped for label: ${e}`);
					const n = Date.now() - t.started;
					this.timestamps.set(e, {
						started: t.started,
						elapsed: n
					})
				}
				get(e) {
					const t = this.timestamps.get(e);
					if (void 0 === t) throw new Error(`No timestamp found for label: ${e}`);
					return t
				}
				elapsed(e) {
					const t = this.get(e);
					return t.elapsed || Date.now() - t.started
				}
			}
			exports.Watch = r, exports.default = r
		},
		"./node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__extends", (function() {
				return i
			})), n.d(t, "__assign", (function() {
				return s
			})), n.d(t, "__rest", (function() {
				return o
			})), n.d(t, "__decorate", (function() {
				return a
			})), n.d(t, "__param", (function() {
				return c
			})), n.d(t, "__metadata", (function() {
				return u
			})), n.d(t, "__awaiter", (function() {
				return l
			})), n.d(t, "__generator", (function() {
				return h
			})), n.d(t, "__createBinding", (function() {
				return d
			})), n.d(t, "__exportStar", (function() {
				return f
			})), n.d(t, "__values", (function() {
				return p
			})), n.d(t, "__read", (function() {
				return g
			})), n.d(t, "__spread", (function() {
				return b
			})), n.d(t, "__spreadArrays", (function() {
				return y
			})), n.d(t, "__await", (function() {
				return m
			})), n.d(t, "__asyncGenerator", (function() {
				return v
			})), n.d(t, "__asyncDelegator", (function() {
				return _
			})), n.d(t, "__asyncValues", (function() {
				return w
			})), n.d(t, "__makeTemplateObject", (function() {
				return j
			})), n.d(t, "__importStar", (function() {
				return E
			})), n.d(t, "__importDefault", (function() {
				return O
			})), n.d(t, "__classPrivateFieldGet", (function() {
				return S
			})), n.d(t, "__classPrivateFieldSet", (function() {
				return I
			}));
			var r = function(e, t) {
				return (r = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(e, t)
			};

			function i(e, t) {
				function n() {
					this.constructor = e
				}
				r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
			}
			var s = function() {
				return (s = Object.assign || function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				}).apply(this, arguments)
			};

			function o(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
				}
				return n
			}

			function a(e, t, n, r) {
				var i, s = arguments.length,
					o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
				else
					for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
				return s > 3 && o && Object.defineProperty(t, n, o), o
			}

			function c(e, t) {
				return function(n, r) {
					t(n, r, e)
				}
			}

			function u(e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			}

			function l(e, t, n, r) {
				return new(n || (n = Promise))((function(i, s) {
					function o(e) {
						try {
							c(r.next(e))
						} catch (t) {
							s(t)
						}
					}

					function a(e) {
						try {
							c(r.throw(e))
						} catch (t) {
							s(t)
						}
					}

					function c(e) {
						var t;
						e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
							e(t)
						}))).then(o, a)
					}
					c((r = r.apply(e, t || [])).next())
				}))
			}

			function h(e, t) {
				var n, r, i, s, o = {
					label: 0,
					sent: function() {
						if (1 & i[0]) throw i[1];
						return i[1]
					},
					trys: [],
					ops: []
				};
				return s = {
					next: a(0),
					throw: a(1),
					return: a(2)
				}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
					return this
				}), s;

				function a(s) {
					return function(a) {
						return function(s) {
							if (n) throw new TypeError("Generator is already executing.");
							for (; o;) try {
								if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
								switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
									case 0:
									case 1:
										i = s;
										break;
									case 4:
										return o.label++, {
											value: s[1],
											done: !1
										};
									case 5:
										o.label++, r = s[1], s = [0];
										continue;
									case 7:
										s = o.ops.pop(), o.trys.pop();
										continue;
									default:
										if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
											o = 0;
											continue
										}
										if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
											o.label = s[1];
											break
										}
										if (6 === s[0] && o.label < i[1]) {
											o.label = i[1], i = s;
											break
										}
										if (i && o.label < i[2]) {
											o.label = i[2], o.ops.push(s);
											break
										}
										i[2] && o.ops.pop(), o.trys.pop();
										continue
								}
								s = t.call(e, o)
							} catch (a) {
								s = [6, a], r = 0
							} finally {
								n = i = 0
							}
							if (5 & s[0]) throw s[1];
							return {
								value: s[0] ? s[1] : void 0,
								done: !0
							}
						}([s, a])
					}
				}
			}

			function d(e, t, n, r) {
				void 0 === r && (r = n), e[r] = t[n]
			}

			function f(e, t) {
				for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
			}

			function p(e) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
				if (n) return n.call(e);
				if (e && "number" == typeof e.length) return {
					next: function() {
						return e && r >= e.length && (e = void 0), {
							value: e && e[r++],
							done: !e
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function g(e, t) {
				var n = "function" == typeof Symbol && e[Symbol.iterator];
				if (!n) return e;
				var r, i, s = n.call(e),
					o = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
				} catch (a) {
					i = {
						error: a
					}
				} finally {
					try {
						r && !r.done && (n = s.return) && n.call(s)
					} finally {
						if (i) throw i.error
					}
				}
				return o
			}

			function b() {
				for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
				return e
			}

			function y() {
				for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
				var r = Array(e),
					i = 0;
				for (t = 0; t < n; t++)
					for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
				return r
			}

			function m(e) {
				return this instanceof m ? (this.v = e, this) : new m(e)
			}

			function v(e, t, n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var r, i = n.apply(e, t || []),
					s = [];
				return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
					return this
				}, r;

				function o(e) {
					i[e] && (r[e] = function(t) {
						return new Promise((function(n, r) {
							s.push([e, t, n, r]) > 1 || a(e, t)
						}))
					})
				}

				function a(e, t) {
					try {
						(n = i[e](t)).value instanceof m ? Promise.resolve(n.value.v).then(c, u) : l(s[0][2], n)
					} catch (r) {
						l(s[0][3], r)
					}
					var n
				}

				function c(e) {
					a("next", e)
				}

				function u(e) {
					a("throw", e)
				}

				function l(e, t) {
					e(t), s.shift(), s.length && a(s[0][0], s[0][1])
				}
			}

			function _(e) {
				var t, n;
				return t = {}, r("next"), r("throw", (function(e) {
					throw e
				})), r("return"), t[Symbol.iterator] = function() {
					return this
				}, t;

				function r(r, i) {
					t[r] = e[r] ? function(t) {
						return (n = !n) ? {
							value: m(e[r](t)),
							done: "return" === r
						} : i ? i(t) : t
					} : i
				}
			}

			function w(e) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, n = e[Symbol.asyncIterator];
				return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function r(n) {
					t[n] = e[n] && function(t) {
						return new Promise((function(r, i) {
							(function(e, t, n, r) {
								Promise.resolve(r).then((function(t) {
									e({
										value: t,
										done: n
									})
								}), t)
							})(r, i, (t = e[n](t)).done, t.value)
						}))
					}
				}
			}

			function j(e, t) {
				return Object.defineProperty ? Object.defineProperty(e, "raw", {
					value: t
				}) : e.raw = t, e
			}

			function E(e) {
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			}

			function O(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function S(e, t) {
				if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
				return t.get(e)
			}

			function I(e, t, n) {
				if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
				return t.set(e, n), n
			}
		},
		"./node_modules/@walletconnect/universal-provider/dist/index.es.js": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "a", (function() {
					return J
				}));
				n("./node_modules/core-js/modules/web.dom.iterable.js");
				var r = n("./node_modules/@walletconnect/sign-client/dist/index.es.js"),
					i = n("./node_modules/@walletconnect/utils/dist/index.es.js"),
					s = n("./node_modules/@walletconnect/logger/dist/cjs/index.js"),
					o = n("./node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js"),
					a = n("./node_modules/@walletconnect/jsonrpc-provider/dist/esm/index.js"),
					c = n("./node_modules/node-libs-browser/node_modules/events/events.js"),
					u = n.n(c);
				const l = "error",
					h = "wss://relay.walletconnect.com",
					d = "wc@2:universal_provider:",
					f = "https://rpc.walletconnect.com/v1",
					p = {
						DEFAULT_CHAIN_CHANGED: "default_chain_changed"
					};
				var g, b, y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof e < "u" ? e : typeof self < "u" ? self : {},
					m = {
						exports: {}
					};
				g = m, b = m.exports,
					function() {
						var e, t = 200,
							n = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
							r = "Expected a function",
							i = "Invalid `variable` option passed into `_.template`",
							s = "__lodash_hash_undefined__",
							o = 500,
							a = "__lodash_placeholder__",
							c = 1,
							u = 2,
							l = 4,
							h = 1,
							d = 2,
							f = 1,
							p = 2,
							m = 4,
							v = 8,
							_ = 16,
							w = 32,
							j = 64,
							E = 128,
							O = 256,
							S = 512,
							I = 30,
							P = "...",
							x = 800,
							R = 16,
							A = 1,
							N = 2,
							T = 1 / 0,
							C = 9007199254740991,
							U = 17976931348623157e292,
							L = NaN,
							M = 4294967295,
							D = M - 1,
							k = M >>> 1,
							z = [
								["ary", E],
								["bind", f],
								["bindKey", p],
								["curry", v],
								["curryRight", _],
								["flip", S],
								["partial", w],
								["partialRight", j],
								["rearg", O]
							],
							$ = "[object Arguments]",
							q = "[object Array]",
							H = "[object AsyncFunction]",
							B = "[object Boolean]",
							K = "[object Date]",
							V = "[object DOMException]",
							F = "[object Error]",
							W = "[object Function]",
							G = "[object GeneratorFunction]",
							J = "[object Map]",
							Y = "[object Number]",
							X = "[object Null]",
							Z = "[object Object]",
							Q = "[object Promise]",
							ee = "[object Proxy]",
							te = "[object RegExp]",
							ne = "[object Set]",
							re = "[object String]",
							ie = "[object Symbol]",
							se = "[object Undefined]",
							oe = "[object WeakMap]",
							ae = "[object WeakSet]",
							ce = "[object ArrayBuffer]",
							ue = "[object DataView]",
							le = "[object Float32Array]",
							he = "[object Float64Array]",
							de = "[object Int8Array]",
							fe = "[object Int16Array]",
							pe = "[object Int32Array]",
							ge = "[object Uint8Array]",
							be = "[object Uint8ClampedArray]",
							ye = "[object Uint16Array]",
							me = "[object Uint32Array]",
							ve = /\b__p \+= '';/g,
							_e = /\b(__p \+=) '' \+/g,
							we = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
							je = /&(?:amp|lt|gt|quot|#39);/g,
							Ee = /[&<>"']/g,
							Oe = RegExp(je.source),
							Se = RegExp(Ee.source),
							Ie = /<%-([\s\S]+?)%>/g,
							Pe = /<%([\s\S]+?)%>/g,
							xe = /<%=([\s\S]+?)%>/g,
							Re = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
							Ae = /^\w*$/,
							Ne = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
							Te = /[\\^$.*+?()[\]{}|]/g,
							Ce = RegExp(Te.source),
							Ue = /^\s+/,
							Le = /\s/,
							Me = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
							De = /\{\n\/\* \[wrapped with (.+)\] \*/,
							ke = /,? & /,
							ze = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
							$e = /[()=,{}\[\]\/\s]/,
							qe = /\\(\\)?/g,
							He = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
							Be = /\w*$/,
							Ke = /^[-+]0x[0-9a-f]+$/i,
							Ve = /^0b[01]+$/i,
							Fe = /^\[object .+?Constructor\]$/,
							We = /^0o[0-7]+$/i,
							Ge = /^(?:0|[1-9]\d*)$/,
							Je = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
							Ye = /($^)/,
							Xe = /['\n\r\u2028\u2029\\]/g,
							Ze = "\\ud800-\\udfff",
							Qe = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
							et = "\\u2700-\\u27bf",
							tt = "a-z\\xdf-\\xf6\\xf8-\\xff",
							nt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
							rt = "\\ufe0e\\ufe0f",
							it = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
							st = "['’]",
							ot = "[" + Ze + "]",
							at = "[" + it + "]",
							ct = "[" + Qe + "]",
							ut = "\\d+",
							lt = "[" + et + "]",
							ht = "[" + tt + "]",
							dt = "[^" + Ze + it + ut + et + tt + nt + "]",
							ft = "\\ud83c[\\udffb-\\udfff]",
							pt = "[^" + Ze + "]",
							gt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
							bt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
							yt = "[" + nt + "]",
							mt = "\\u200d",
							vt = "(?:" + ht + "|" + dt + ")",
							_t = "(?:" + yt + "|" + dt + ")",
							wt = "(?:['’](?:d|ll|m|re|s|t|ve))?",
							jt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
							Et = "(?:" + ct + "|" + ft + ")?",
							Ot = "[" + rt + "]?",
							St = Ot + Et + "(?:" + mt + "(?:" + [pt, gt, bt].join("|") + ")" + Ot + Et + ")*",
							It = "(?:" + [lt, gt, bt].join("|") + ")" + St,
							Pt = "(?:" + [pt + ct + "?", ct, gt, bt, ot].join("|") + ")",
							xt = RegExp(st, "g"),
							Rt = RegExp(ct, "g"),
							At = RegExp(ft + "(?=" + ft + ")|" + Pt + St, "g"),
							Nt = RegExp([yt + "?" + ht + "+" + wt + "(?=" + [at, yt, "$"].join("|") + ")", _t + "+" + jt + "(?=" + [at, yt + vt, "$"].join("|") + ")", yt + "?" + vt + "+" + wt, yt + "+" + jt, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ut, It].join("|"), "g"),
							Tt = RegExp("[" + mt + Ze + Qe + rt + "]"),
							Ct = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
							Ut = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
							Lt = -1,
							Mt = {};
						Mt[le] = Mt[he] = Mt[de] = Mt[fe] = Mt[pe] = Mt[ge] = Mt[be] = Mt[ye] = Mt[me] = !0, Mt[$] = Mt[q] = Mt[ce] = Mt[B] = Mt[ue] = Mt[K] = Mt[F] = Mt[W] = Mt[J] = Mt[Y] = Mt[Z] = Mt[te] = Mt[ne] = Mt[re] = Mt[oe] = !1;
						var Dt = {};
						Dt[$] = Dt[q] = Dt[ce] = Dt[ue] = Dt[B] = Dt[K] = Dt[le] = Dt[he] = Dt[de] = Dt[fe] = Dt[pe] = Dt[J] = Dt[Y] = Dt[Z] = Dt[te] = Dt[ne] = Dt[re] = Dt[ie] = Dt[ge] = Dt[be] = Dt[ye] = Dt[me] = !0, Dt[F] = Dt[W] = Dt[oe] = !1;
						var kt = {
								"\\": "\\",
								"'": "'",
								"\n": "n",
								"\r": "r",
								"\u2028": "u2028",
								"\u2029": "u2029"
							},
							zt = parseFloat,
							$t = parseInt,
							qt = "object" == typeof y && y && y.Object === Object && y,
							Ht = "object" == typeof self && self && self.Object === Object && self,
							Bt = qt || Ht || Function("return this")(),
							Kt = b && !b.nodeType && b,
							Vt = Kt && g && !g.nodeType && g,
							Ft = Vt && Vt.exports === Kt,
							Wt = Ft && qt.process,
							Gt = function() {
								try {
									return Vt && Vt.require && Vt.require("util").types || Wt && Wt.binding && Wt.binding("util")
								} catch {}
							}(),
							Jt = Gt && Gt.isArrayBuffer,
							Yt = Gt && Gt.isDate,
							Xt = Gt && Gt.isMap,
							Zt = Gt && Gt.isRegExp,
							Qt = Gt && Gt.isSet,
							en = Gt && Gt.isTypedArray;

						function tn(e, t, n) {
							switch (n.length) {
								case 0:
									return e.call(t);
								case 1:
									return e.call(t, n[0]);
								case 2:
									return e.call(t, n[0], n[1]);
								case 3:
									return e.call(t, n[0], n[1], n[2])
							}
							return e.apply(t, n)
						}

						function nn(e, t, n, r) {
							for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
								var o = e[i];
								t(r, o, n(o), e)
							}
							return r
						}

						function rn(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
							return e
						}

						function sn(e, t) {
							for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
							return e
						}

						function on(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
								if (!t(e[n], n, e)) return !1;
							return !0
						}

						function an(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r;) {
								var o = e[n];
								t(o, n, e) && (s[i++] = o)
							}
							return s
						}

						function cn(e, t) {
							return !(null == e || !e.length) && mn(e, t, 0) > -1
						}

						function un(e, t, n) {
							for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
								if (n(t, e[r])) return !0;
							return !1
						}

						function ln(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
							return i
						}

						function hn(e, t) {
							for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
							return e
						}

						function dn(e, t, n, r) {
							var i = -1,
								s = null == e ? 0 : e.length;
							for (r && s && (n = e[++i]); ++i < s;) n = t(n, e[i], i, e);
							return n
						}

						function fn(e, t, n, r) {
							var i = null == e ? 0 : e.length;
							for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
							return n
						}

						function pn(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
								if (t(e[n], n, e)) return !0;
							return !1
						}
						var gn = jn("length");

						function bn(e, t, n) {
							var r;
							return n(e, (function(e, n, i) {
								if (t(e, n, i)) return r = n, !1
							})), r
						}

						function yn(e, t, n, r) {
							for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i;)
								if (t(e[s], s, e)) return s;
							return -1
						}

						function mn(e, t, n) {
							return t == t ? function(e, t, n) {
								for (var r = n - 1, i = e.length; ++r < i;)
									if (e[r] === t) return r;
								return -1
							}(e, t, n) : yn(e, _n, n)
						}

						function vn(e, t, n, r) {
							for (var i = n - 1, s = e.length; ++i < s;)
								if (r(e[i], t)) return i;
							return -1
						}

						function _n(e) {
							return e != e
						}

						function wn(e, t) {
							var n = null == e ? 0 : e.length;
							return n ? Sn(e, t) / n : L
						}

						function jn(t) {
							return function(n) {
								return null == n ? e : n[t]
							}
						}

						function En(t) {
							return function(n) {
								return null == t ? e : t[n]
							}
						}

						function On(e, t, n, r, i) {
							return i(e, (function(e, i, s) {
								n = r ? (r = !1, e) : t(n, e, i, s)
							})), n
						}

						function Sn(t, n) {
							for (var r, i = -1, s = t.length; ++i < s;) {
								var o = n(t[i]);
								o !== e && (r = r === e ? o : r + o)
							}
							return r
						}

						function In(e, t) {
							for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
							return r
						}

						function Pn(e) {
							return e && e.slice(0, Bn(e) + 1).replace(Ue, "")
						}

						function xn(e) {
							return function(t) {
								return e(t)
							}
						}

						function Rn(e, t) {
							return ln(t, (function(t) {
								return e[t]
							}))
						}

						function An(e, t) {
							return e.has(t)
						}

						function Nn(e, t) {
							for (var n = -1, r = e.length; ++n < r && mn(t, e[n], 0) > -1;);
							return n
						}

						function Tn(e, t) {
							for (var n = e.length; n-- && mn(t, e[n], 0) > -1;);
							return n
						}
						var Cn = En({
								"À": "A",
								"Á": "A",
								"Â": "A",
								"Ã": "A",
								"Ä": "A",
								"Å": "A",
								"à": "a",
								"á": "a",
								"â": "a",
								"ã": "a",
								"ä": "a",
								"å": "a",
								"Ç": "C",
								"ç": "c",
								"Ð": "D",
								"ð": "d",
								"È": "E",
								"É": "E",
								"Ê": "E",
								"Ë": "E",
								"è": "e",
								"é": "e",
								"ê": "e",
								"ë": "e",
								"Ì": "I",
								"Í": "I",
								"Î": "I",
								"Ï": "I",
								"ì": "i",
								"í": "i",
								"î": "i",
								"ï": "i",
								"Ñ": "N",
								"ñ": "n",
								"Ò": "O",
								"Ó": "O",
								"Ô": "O",
								"Õ": "O",
								"Ö": "O",
								"Ø": "O",
								"ò": "o",
								"ó": "o",
								"ô": "o",
								"õ": "o",
								"ö": "o",
								"ø": "o",
								"Ù": "U",
								"Ú": "U",
								"Û": "U",
								"Ü": "U",
								"ù": "u",
								"ú": "u",
								"û": "u",
								"ü": "u",
								"Ý": "Y",
								"ý": "y",
								"ÿ": "y",
								"Æ": "Ae",
								"æ": "ae",
								"Þ": "Th",
								"þ": "th",
								"ß": "ss",
								"Ā": "A",
								"Ă": "A",
								"Ą": "A",
								"ā": "a",
								"ă": "a",
								"ą": "a",
								"Ć": "C",
								"Ĉ": "C",
								"Ċ": "C",
								"Č": "C",
								"ć": "c",
								"ĉ": "c",
								"ċ": "c",
								"č": "c",
								"Ď": "D",
								"Đ": "D",
								"ď": "d",
								"đ": "d",
								"Ē": "E",
								"Ĕ": "E",
								"Ė": "E",
								"Ę": "E",
								"Ě": "E",
								"ē": "e",
								"ĕ": "e",
								"ė": "e",
								"ę": "e",
								"ě": "e",
								"Ĝ": "G",
								"Ğ": "G",
								"Ġ": "G",
								"Ģ": "G",
								"ĝ": "g",
								"ğ": "g",
								"ġ": "g",
								"ģ": "g",
								"Ĥ": "H",
								"Ħ": "H",
								"ĥ": "h",
								"ħ": "h",
								"Ĩ": "I",
								"Ī": "I",
								"Ĭ": "I",
								"Į": "I",
								"İ": "I",
								"ĩ": "i",
								"ī": "i",
								"ĭ": "i",
								"į": "i",
								"ı": "i",
								"Ĵ": "J",
								"ĵ": "j",
								"Ķ": "K",
								"ķ": "k",
								"ĸ": "k",
								"Ĺ": "L",
								"Ļ": "L",
								"Ľ": "L",
								"Ŀ": "L",
								"Ł": "L",
								"ĺ": "l",
								"ļ": "l",
								"ľ": "l",
								"ŀ": "l",
								"ł": "l",
								"Ń": "N",
								"Ņ": "N",
								"Ň": "N",
								"Ŋ": "N",
								"ń": "n",
								"ņ": "n",
								"ň": "n",
								"ŋ": "n",
								"Ō": "O",
								"Ŏ": "O",
								"Ő": "O",
								"ō": "o",
								"ŏ": "o",
								"ő": "o",
								"Ŕ": "R",
								"Ŗ": "R",
								"Ř": "R",
								"ŕ": "r",
								"ŗ": "r",
								"ř": "r",
								"Ś": "S",
								"Ŝ": "S",
								"Ş": "S",
								"Š": "S",
								"ś": "s",
								"ŝ": "s",
								"ş": "s",
								"š": "s",
								"Ţ": "T",
								"Ť": "T",
								"Ŧ": "T",
								"ţ": "t",
								"ť": "t",
								"ŧ": "t",
								"Ũ": "U",
								"Ū": "U",
								"Ŭ": "U",
								"Ů": "U",
								"Ű": "U",
								"Ų": "U",
								"ũ": "u",
								"ū": "u",
								"ŭ": "u",
								"ů": "u",
								"ű": "u",
								"ų": "u",
								"Ŵ": "W",
								"ŵ": "w",
								"Ŷ": "Y",
								"ŷ": "y",
								"Ÿ": "Y",
								"Ź": "Z",
								"Ż": "Z",
								"Ž": "Z",
								"ź": "z",
								"ż": "z",
								"ž": "z",
								"Ĳ": "IJ",
								"ĳ": "ij",
								"Œ": "Oe",
								"œ": "oe",
								"ŉ": "'n",
								"ſ": "s"
							}),
							Un = En({
								"&": "&amp;",
								"<": "&lt;",
								">": "&gt;",
								'"': "&quot;",
								"'": "&#39;"
							});

						function Ln(e) {
							return "\\" + kt[e]
						}

						function Mn(e) {
							return Tt.test(e)
						}

						function Dn(e) {
							var t = -1,
								n = Array(e.size);
							return e.forEach((function(e, r) {
								n[++t] = [r, e]
							})), n
						}

						function kn(e, t) {
							return function(n) {
								return e(t(n))
							}
						}

						function zn(e, t) {
							for (var n = -1, r = e.length, i = 0, s = []; ++n < r;) {
								var o = e[n];
								(o === t || o === a) && (e[n] = a, s[i++] = n)
							}
							return s
						}

						function $n(e) {
							var t = -1,
								n = Array(e.size);
							return e.forEach((function(e) {
								n[++t] = e
							})), n
						}

						function qn(e) {
							return Mn(e) ? function(e) {
								for (var t = At.lastIndex = 0; At.test(e);) ++t;
								return t
							}(e) : gn(e)
						}

						function Hn(e) {
							return Mn(e) ? function(e) {
								return e.match(At) || []
							}(e) : function(e) {
								return e.split("")
							}(e)
						}

						function Bn(e) {
							for (var t = e.length; t-- && Le.test(e.charAt(t)););
							return t
						}
						var Kn = En({
								"&amp;": "&",
								"&lt;": "<",
								"&gt;": ">",
								"&quot;": '"',
								"&#39;": "'"
							}),
							Vn = function g(b) {
								var y, Le = (b = null == b ? Bt : Vn.defaults(Bt.Object(), b, Vn.pick(Bt, Ut))).Array,
									Ze = b.Date,
									Qe = b.Error,
									et = b.Function,
									tt = b.Math,
									nt = b.Object,
									rt = b.RegExp,
									it = b.String,
									st = b.TypeError,
									ot = Le.prototype,
									at = et.prototype,
									ct = nt.prototype,
									ut = b["__core-js_shared__"],
									lt = at.toString,
									ht = ct.hasOwnProperty,
									dt = 0,
									ft = (y = /[^.]+$/.exec(ut && ut.keys && ut.keys.IE_PROTO || "")) ? "Symbol(src)_1." + y : "",
									pt = ct.toString,
									gt = lt.call(nt),
									bt = Bt._,
									yt = rt("^" + lt.call(ht).replace(Te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
									mt = Ft ? b.Buffer : e,
									vt = b.Symbol,
									_t = b.Uint8Array,
									wt = mt ? mt.allocUnsafe : e,
									jt = kn(nt.getPrototypeOf, nt),
									Et = nt.create,
									Ot = ct.propertyIsEnumerable,
									St = ot.splice,
									It = vt ? vt.isConcatSpreadable : e,
									Pt = vt ? vt.iterator : e,
									At = vt ? vt.toStringTag : e,
									Tt = function() {
										try {
											var e = $s(nt, "defineProperty");
											return e({}, "", {}), e
										} catch {}
									}(),
									kt = b.clearTimeout !== Bt.clearTimeout && b.clearTimeout,
									qt = Ze && Ze.now !== Bt.Date.now && Ze.now,
									Ht = b.setTimeout !== Bt.setTimeout && b.setTimeout,
									Kt = tt.ceil,
									Vt = tt.floor,
									Wt = nt.getOwnPropertySymbols,
									Gt = mt ? mt.isBuffer : e,
									gn = b.isFinite,
									En = ot.join,
									Fn = kn(nt.keys, nt),
									Wn = tt.max,
									Gn = tt.min,
									Jn = Ze.now,
									Yn = b.parseInt,
									Xn = tt.random,
									Zn = ot.reverse,
									Qn = $s(b, "DataView"),
									er = $s(b, "Map"),
									tr = $s(b, "Promise"),
									nr = $s(b, "Set"),
									rr = $s(b, "WeakMap"),
									ir = $s(nt, "create"),
									sr = rr && new rr,
									or = {},
									ar = fo(Qn),
									cr = fo(er),
									ur = fo(tr),
									lr = fo(nr),
									hr = fo(rr),
									dr = vt ? vt.prototype : e,
									fr = dr ? dr.valueOf : e,
									pr = dr ? dr.toString : e;

								function gr(e) {
									if (Aa(e) && !va(e) && !(e instanceof vr)) {
										if (e instanceof mr) return e;
										if (ht.call(e, "__wrapped__")) return po(e)
									}
									return new mr(e)
								}
								var br = function() {
									function t() {}
									return function(n) {
										if (!Ra(n)) return {};
										if (Et) return Et(n);
										t.prototype = n;
										var r = new t;
										return t.prototype = e, r
									}
								}();

								function yr() {}

								function mr(t, n) {
									this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = e
								}

								function vr(e) {
									this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = M, this.__views__ = []
								}

								function _r(e) {
									var t = -1,
										n = null == e ? 0 : e.length;
									for (this.clear(); ++t < n;) {
										var r = e[t];
										this.set(r[0], r[1])
									}
								}

								function wr(e) {
									var t = -1,
										n = null == e ? 0 : e.length;
									for (this.clear(); ++t < n;) {
										var r = e[t];
										this.set(r[0], r[1])
									}
								}

								function jr(e) {
									var t = -1,
										n = null == e ? 0 : e.length;
									for (this.clear(); ++t < n;) {
										var r = e[t];
										this.set(r[0], r[1])
									}
								}

								function Er(e) {
									var t = -1,
										n = null == e ? 0 : e.length;
									for (this.__data__ = new jr; ++t < n;) this.add(e[t])
								}

								function Or(e) {
									var t = this.__data__ = new wr(e);
									this.size = t.size
								}

								function Sr(e, t) {
									var n = va(e),
										r = !n && ma(e),
										i = !n && !r && Ea(e),
										s = !n && !r && !i && ka(e),
										o = n || r || i || s,
										a = o ? In(e.length, it) : [],
										c = a.length;
									for (var u in e)(t || ht.call(e, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Ws(u, c))) && a.push(u);
									return a
								}

								function Ir(t) {
									var n = t.length;
									return n ? t[Ei(0, n - 1)] : e
								}

								function Pr(e, t) {
									return uo(is(e), Mr(t, 0, e.length))
								}

								function xr(e) {
									return uo(is(e))
								}

								function Rr(t, n, r) {
									(r !== e && !ga(t[n], r) || r === e && !(n in t)) && Ur(t, n, r)
								}

								function Ar(t, n, r) {
									var i = t[n];
									(!ht.call(t, n) || !ga(i, r) || r === e && !(n in t)) && Ur(t, n, r)
								}

								function Nr(e, t) {
									for (var n = e.length; n--;)
										if (ga(e[n][0], t)) return n;
									return -1
								}

								function Tr(e, t, n, r) {
									return qr(e, (function(e, i, s) {
										t(r, e, n(e), s)
									})), r
								}

								function Cr(e, t) {
									return e && ss(t, oc(t), e)
								}

								function Ur(e, t, n) {
									"__proto__" == t && Tt ? Tt(e, t, {
										configurable: !0,
										enumerable: !0,
										value: n,
										writable: !0
									}) : e[t] = n
								}

								function Lr(t, n) {
									for (var r = -1, i = n.length, s = Le(i), o = null == t; ++r < i;) s[r] = o ? e : tc(t, n[r]);
									return s
								}

								function Mr(t, n, r) {
									return t == t && (r !== e && (t = t <= r ? t : r), n !== e && (t = t >= n ? t : n)), t
								}

								function Dr(t, n, r, i, s, o) {
									var a, h = n & c,
										d = n & u,
										f = n & l;
									if (r && (a = s ? r(t, i, s, o) : r(t)), a !== e) return a;
									if (!Ra(t)) return t;
									var p = va(t);
									if (p) {
										if (a = function(e) {
												var t = e.length,
													n = new e.constructor(t);
												return t && "string" == typeof e[0] && ht.call(e, "index") && (n.index = e.index, n.input = e.input), n
											}(t), !h) return is(t, a)
									} else {
										var g = Bs(t),
											b = g == W || g == G;
										if (Ea(t)) return Zi(t, h);
										if (g == Z || g == $ || b && !s) {
											if (a = d || b ? {} : Vs(t), !h) return d ? function(e, t) {
												return ss(e, Hs(e), t)
											}(t, function(e, t) {
												return e && ss(t, ac(t), e)
											}(a, t)) : function(e, t) {
												return ss(e, qs(e), t)
											}(t, Cr(a, t))
										} else {
											if (!Dt[g]) return s ? t : {};
											a = function(e, t, n) {
												var r = e.constructor;
												switch (t) {
													case ce:
														return Qi(e);
													case B:
													case K:
														return new r(+e);
													case ue:
														return function(e, t) {
															var n = t ? Qi(e.buffer) : e.buffer;
															return new e.constructor(n, e.byteOffset, e.byteLength)
														}(e, n);
													case le:
													case he:
													case de:
													case fe:
													case pe:
													case ge:
													case be:
													case ye:
													case me:
														return es(e, n);
													case J:
														return new r;
													case Y:
													case re:
														return new r(e);
													case te:
														return function(e) {
															var t = new e.constructor(e.source, Be.exec(e));
															return t.lastIndex = e.lastIndex, t
														}(e);
													case ne:
														return new r;
													case ie:
														return function(e) {
															return fr ? nt(fr.call(e)) : {}
														}(e)
												}
											}(t, g, h)
										}
									}
									o || (o = new Or);
									var y = o.get(t);
									if (y) return y;
									o.set(t, a), La(t) ? t.forEach((function(e) {
										a.add(Dr(e, n, r, e, t, o))
									})) : Na(t) && t.forEach((function(e, i) {
										a.set(i, Dr(e, n, r, i, t, o))
									}));
									var m = p ? e : (f ? d ? Cs : Ts : d ? ac : oc)(t);
									return rn(m || t, (function(e, i) {
										m && (e = t[i = e]), Ar(a, i, Dr(e, n, r, i, t, o))
									})), a
								}

								function kr(t, n, r) {
									var i = r.length;
									if (null == t) return !i;
									for (t = nt(t); i--;) {
										var s = r[i],
											o = n[s],
											a = t[s];
										if (a === e && !(s in t) || !o(a)) return !1
									}
									return !0
								}

								function zr(t, n, i) {
									if ("function" != typeof t) throw new st(r);
									return so((function() {
										t.apply(e, i)
									}), n)
								}

								function $r(e, n, r, i) {
									var s = -1,
										o = cn,
										a = !0,
										c = e.length,
										u = [],
										l = n.length;
									if (!c) return u;
									r && (n = ln(n, xn(r))), i ? (o = un, a = !1) : n.length >= t && (o = An, a = !1, n = new Er(n));
									e: for (; ++s < c;) {
										var h = e[s],
											d = null == r ? h : r(h);
										if (h = i || 0 !== h ? h : 0, a && d == d) {
											for (var f = l; f--;)
												if (n[f] === d) continue e;
											u.push(h)
										} else o(n, d, i) || u.push(h)
									}
									return u
								}
								gr.templateSettings = {
									escape: Ie,
									evaluate: Pe,
									interpolate: xe,
									variable: "",
									imports: {
										_: gr
									}
								}, gr.prototype = yr.prototype, gr.prototype.constructor = gr, mr.prototype = br(yr.prototype), mr.prototype.constructor = mr, vr.prototype = br(yr.prototype), vr.prototype.constructor = vr, _r.prototype.clear = function() {
									this.__data__ = ir ? ir(null) : {}, this.size = 0
								}, _r.prototype.delete = function(e) {
									var t = this.has(e) && delete this.__data__[e];
									return this.size -= t ? 1 : 0, t
								}, _r.prototype.get = function(t) {
									var n = this.__data__;
									if (ir) {
										var r = n[t];
										return r === s ? e : r
									}
									return ht.call(n, t) ? n[t] : e
								}, _r.prototype.has = function(t) {
									var n = this.__data__;
									return ir ? n[t] !== e : ht.call(n, t)
								}, _r.prototype.set = function(t, n) {
									var r = this.__data__;
									return this.size += this.has(t) ? 0 : 1, r[t] = ir && n === e ? s : n, this
								}, wr.prototype.clear = function() {
									this.__data__ = [], this.size = 0
								}, wr.prototype.delete = function(e) {
									var t = this.__data__,
										n = Nr(t, e);
									return !(n < 0 || (n == t.length - 1 ? t.pop() : St.call(t, n, 1), --this.size, 0))
								}, wr.prototype.get = function(t) {
									var n = this.__data__,
										r = Nr(n, t);
									return r < 0 ? e : n[r][1]
								}, wr.prototype.has = function(e) {
									return Nr(this.__data__, e) > -1
								}, wr.prototype.set = function(e, t) {
									var n = this.__data__,
										r = Nr(n, e);
									return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
								}, jr.prototype.clear = function() {
									this.size = 0, this.__data__ = {
										hash: new _r,
										map: new(er || wr),
										string: new _r
									}
								}, jr.prototype.delete = function(e) {
									var t = ks(this, e).delete(e);
									return this.size -= t ? 1 : 0, t
								}, jr.prototype.get = function(e) {
									return ks(this, e).get(e)
								}, jr.prototype.has = function(e) {
									return ks(this, e).has(e)
								}, jr.prototype.set = function(e, t) {
									var n = ks(this, e),
										r = n.size;
									return n.set(e, t), this.size += n.size == r ? 0 : 1, this
								}, Er.prototype.add = Er.prototype.push = function(e) {
									return this.__data__.set(e, s), this
								}, Er.prototype.has = function(e) {
									return this.__data__.has(e)
								}, Or.prototype.clear = function() {
									this.__data__ = new wr, this.size = 0
								}, Or.prototype.delete = function(e) {
									var t = this.__data__,
										n = t.delete(e);
									return this.size = t.size, n
								}, Or.prototype.get = function(e) {
									return this.__data__.get(e)
								}, Or.prototype.has = function(e) {
									return this.__data__.has(e)
								}, Or.prototype.set = function(e, n) {
									var r = this.__data__;
									if (r instanceof wr) {
										var i = r.__data__;
										if (!er || i.length < t - 1) return i.push([e, n]), this.size = ++r.size, this;
										r = this.__data__ = new jr(i)
									}
									return r.set(e, n), this.size = r.size, this
								};
								var qr = cs(Jr),
									Hr = cs(Yr, !0);

								function Br(e, t) {
									var n = !0;
									return qr(e, (function(e, r, i) {
										return n = !!t(e, r, i)
									})), n
								}

								function Kr(t, n, r) {
									for (var i = -1, s = t.length; ++i < s;) {
										var o = t[i],
											a = n(o);
										if (null != a && (c === e ? a == a && !Da(a) : r(a, c))) var c = a,
											u = o
									}
									return u
								}

								function Vr(e, t) {
									var n = [];
									return qr(e, (function(e, r, i) {
										t(e, r, i) && n.push(e)
									})), n
								}

								function Fr(e, t, n, r, i) {
									var s = -1,
										o = e.length;
									for (n || (n = Fs), i || (i = []); ++s < o;) {
										var a = e[s];
										t > 0 && n(a) ? t > 1 ? Fr(a, t - 1, n, r, i) : hn(i, a) : r || (i[i.length] = a)
									}
									return i
								}
								var Wr = us(),
									Gr = us(!0);

								function Jr(e, t) {
									return e && Wr(e, t, oc)
								}

								function Yr(e, t) {
									return e && Gr(e, t, oc)
								}

								function Xr(e, t) {
									return an(t, (function(t) {
										return Ia(e[t])
									}))
								}

								function Zr(t, n) {
									for (var r = 0, i = (n = Gi(n, t)).length; null != t && r < i;) t = t[ho(n[r++])];
									return r && r == i ? t : e
								}

								function Qr(e, t, n) {
									var r = t(e);
									return va(e) ? r : hn(r, n(e))
								}

								function ei(t) {
									return null == t ? t === e ? se : X : At && At in nt(t) ? function(t) {
										var n = ht.call(t, At),
											r = t[At];
										try {
											t[At] = e;
											var i = !0
										} catch {}
										var s = pt.call(t);
										return i && (n ? t[At] = r : delete t[At]), s
									}(t) : function(e) {
										return pt.call(e)
									}(t)
								}

								function ti(e, t) {
									return e > t
								}

								function ni(e, t) {
									return null != e && ht.call(e, t)
								}

								function ri(e, t) {
									return null != e && t in nt(e)
								}

								function ii(t, n, r) {
									for (var i = r ? un : cn, s = t[0].length, o = t.length, a = o, c = Le(o), u = 1 / 0, l = []; a--;) {
										var h = t[a];
										a && n && (h = ln(h, xn(n))), u = Gn(h.length, u), c[a] = !r && (n || s >= 120 && h.length >= 120) ? new Er(a && h) : e
									}
									h = t[0];
									var d = -1,
										f = c[0];
									e: for (; ++d < s && l.length < u;) {
										var p = h[d],
											g = n ? n(p) : p;
										if (p = r || 0 !== p ? p : 0, !(f ? An(f, g) : i(l, g, r))) {
											for (a = o; --a;) {
												var b = c[a];
												if (!(b ? An(b, g) : i(t[a], g, r))) continue e
											}
											f && f.push(g), l.push(p)
										}
									}
									return l
								}

								function si(t, n, r) {
									var i = null == (t = no(t, n = Gi(n, t))) ? t : t[ho(So(n))];
									return null == i ? e : tn(i, t, r)
								}

								function oi(e) {
									return Aa(e) && ei(e) == $
								}

								function ai(t, n, r, i, s) {
									return t === n || (null == t || null == n || !Aa(t) && !Aa(n) ? t != t && n != n : function(t, n, r, i, s, o) {
										var a = va(t),
											c = va(n),
											u = a ? q : Bs(t),
											l = c ? q : Bs(n),
											f = (u = u == $ ? Z : u) == Z,
											p = (l = l == $ ? Z : l) == Z,
											g = u == l;
										if (g && Ea(t)) {
											if (!Ea(n)) return !1;
											a = !0, f = !1
										}
										if (g && !f) return o || (o = new Or), a || ka(t) ? As(t, n, r, i, s, o) : function(e, t, n, r, i, s, o) {
											switch (n) {
												case ue:
													if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
													e = e.buffer, t = t.buffer;
												case ce:
													return !(e.byteLength != t.byteLength || !s(new _t(e), new _t(t)));
												case B:
												case K:
												case Y:
													return ga(+e, +t);
												case F:
													return e.name == t.name && e.message == t.message;
												case te:
												case re:
													return e == t + "";
												case J:
													var a = Dn;
												case ne:
													var c = r & h;
													if (a || (a = $n), e.size != t.size && !c) return !1;
													var u = o.get(e);
													if (u) return u == t;
													r |= d, o.set(e, t);
													var l = As(a(e), a(t), r, i, s, o);
													return o.delete(e), l;
												case ie:
													if (fr) return fr.call(e) == fr.call(t)
											}
											return !1
										}(t, n, u, r, i, s, o);
										if (!(r & h)) {
											var b = f && ht.call(t, "__wrapped__"),
												y = p && ht.call(n, "__wrapped__");
											if (b || y) {
												var m = b ? t.value() : t,
													v = y ? n.value() : n;
												return o || (o = new Or), s(m, v, r, i, o)
											}
										}
										return !!g && (o || (o = new Or), function(t, n, r, i, s, o) {
											var a = r & h,
												c = Ts(t),
												u = c.length,
												l = Ts(n).length;
											if (u != l && !a) return !1;
											for (var d = u; d--;) {
												var f = c[d];
												if (!(a ? f in n : ht.call(n, f))) return !1
											}
											var p = o.get(t),
												g = o.get(n);
											if (p && g) return p == n && g == t;
											var b = !0;
											o.set(t, n), o.set(n, t);
											for (var y = a; ++d < u;) {
												f = c[d];
												var m = t[f],
													v = n[f];
												if (i) var _ = a ? i(v, m, f, n, t, o) : i(m, v, f, t, n, o);
												if (!(_ === e ? m === v || s(m, v, r, i, o) : _)) {
													b = !1;
													break
												}
												y || (y = "constructor" == f)
											}
											if (b && !y) {
												var w = t.constructor,
													j = n.constructor;
												w != j && "constructor" in t && "constructor" in n && !("function" == typeof w && w instanceof w && "function" == typeof j && j instanceof j) && (b = !1)
											}
											return o.delete(t), o.delete(n), b
										}(t, n, r, i, s, o))
									}(t, n, r, i, ai, s))
								}

								function ci(t, n, r, i) {
									var s = r.length,
										o = s,
										a = !i;
									if (null == t) return !o;
									for (t = nt(t); s--;) {
										var c = r[s];
										if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
									}
									for (; ++s < o;) {
										var u = (c = r[s])[0],
											l = t[u],
											f = c[1];
										if (a && c[2]) {
											if (l === e && !(u in t)) return !1
										} else {
											var p = new Or;
											if (i) var g = i(l, f, u, t, n, p);
											if (!(g === e ? ai(f, l, h | d, i, p) : g)) return !1
										}
									}
									return !0
								}

								function ui(e) {
									return !(!Ra(e) || function(e) {
										return !!ft && ft in e
									}(e)) && (Ia(e) ? yt : Fe).test(fo(e))
								}

								function li(e) {
									return "function" == typeof e ? e : null == e ? Tc : "object" == typeof e ? va(e) ? bi(e[0], e[1]) : gi(e) : qc(e)
								}

								function hi(e) {
									if (!Zs(e)) return Fn(e);
									var t = [];
									for (var n in nt(e)) ht.call(e, n) && "constructor" != n && t.push(n);
									return t
								}

								function di(e) {
									if (!Ra(e)) return function(e) {
										var t = [];
										if (null != e)
											for (var n in nt(e)) t.push(n);
										return t
									}(e);
									var t = Zs(e),
										n = [];
									for (var r in e) "constructor" == r && (t || !ht.call(e, r)) || n.push(r);
									return n
								}

								function fi(e, t) {
									return e < t
								}

								function pi(e, t) {
									var n = -1,
										r = wa(e) ? Le(e.length) : [];
									return qr(e, (function(e, i, s) {
										r[++n] = t(e, i, s)
									})), r
								}

								function gi(e) {
									var t = zs(e);
									return 1 == t.length && t[0][2] ? eo(t[0][0], t[0][1]) : function(n) {
										return n === e || ci(n, e, t)
									}
								}

								function bi(t, n) {
									return Js(t) && Qs(n) ? eo(ho(t), n) : function(r) {
										var i = tc(r, t);
										return i === e && i === n ? nc(r, t) : ai(n, i, h | d)
									}
								}

								function yi(t, n, r, i, s) {
									t !== n && Wr(n, (function(o, a) {
										if (s || (s = new Or), Ra(o)) ! function(t, n, r, i, s, o, a) {
											var c = ro(t, r),
												u = ro(n, r),
												l = a.get(u);
											if (l) Rr(t, r, l);
											else {
												var h = o ? o(c, u, r + "", t, n, a) : e,
													d = h === e;
												if (d) {
													var f = va(u),
														p = !f && Ea(u),
														g = !f && !p && ka(u);
													h = u, f || p || g ? va(c) ? h = c : ja(c) ? h = is(c) : p ? (d = !1, h = Zi(u, !0)) : g ? (d = !1, h = es(u, !0)) : h = [] : Ca(u) || ma(u) ? (h = c, ma(c) ? h = Fa(c) : (!Ra(c) || Ia(c)) && (h = Vs(u))) : d = !1
												}
												d && (a.set(u, h), s(h, u, i, o, a), a.delete(u)), Rr(t, r, h)
											}
										}(t, n, a, r, yi, i, s);
										else {
											var c = i ? i(ro(t, a), o, a + "", t, n, s) : e;
											c === e && (c = o), Rr(t, a, c)
										}
									}), ac)
								}

								function mi(t, n) {
									var r = t.length;
									if (r) return Ws(n += n < 0 ? r : 0, r) ? t[n] : e
								}

								function vi(e, t, n) {
									t = t.length ? ln(t, (function(e) {
										return va(e) ? function(t) {
											return Zr(t, 1 === e.length ? e[0] : e)
										} : e
									})) : [Tc];
									var r = -1;
									return t = ln(t, xn(Ds())),
										function(e, t) {
											var n = e.length;
											for (e.sort(t); n--;) e[n] = e[n].value;
											return e
										}(pi(e, (function(e, n, i) {
											return {
												criteria: ln(t, (function(t) {
													return t(e)
												})),
												index: ++r,
												value: e
											}
										})), (function(e, t) {
											return function(e, t, n) {
												for (var r = -1, i = e.criteria, s = t.criteria, o = i.length, a = n.length; ++r < o;) {
													var c = ts(i[r], s[r]);
													if (c) {
														if (r >= a) return c;
														var u = n[r];
														return c * ("desc" == u ? -1 : 1)
													}
												}
												return e.index - t.index
											}(e, t, n)
										}))
								}

								function _i(e, t, n) {
									for (var r = -1, i = t.length, s = {}; ++r < i;) {
										var o = t[r],
											a = Zr(e, o);
										n(a, o) && xi(s, Gi(o, e), a)
									}
									return s
								}

								function wi(e, t, n, r) {
									var i = r ? vn : mn,
										s = -1,
										o = t.length,
										a = e;
									for (e === t && (t = is(t)), n && (a = ln(e, xn(n))); ++s < o;)
										for (var c = 0, u = t[s], l = n ? n(u) : u;
											(c = i(a, l, c, r)) > -1;) a !== e && St.call(a, c, 1), St.call(e, c, 1);
									return e
								}

								function ji(e, t) {
									for (var n = e ? t.length : 0, r = n - 1; n--;) {
										var i = t[n];
										if (n == r || i !== s) {
											var s = i;
											Ws(i) ? St.call(e, i, 1) : $i(e, i)
										}
									}
									return e
								}

								function Ei(e, t) {
									return e + Vt(Xn() * (t - e + 1))
								}

								function Oi(e, t) {
									var n = "";
									if (!e || t < 1 || t > C) return n;
									do {
										t % 2 && (n += e), (t = Vt(t / 2)) && (e += e)
									} while (t);
									return n
								}

								function Si(e, t) {
									return oo(to(e, t, Tc), e + "")
								}

								function Ii(e) {
									return Ir(gc(e))
								}

								function Pi(e, t) {
									var n = gc(e);
									return uo(n, Mr(t, 0, n.length))
								}

								function xi(t, n, r, i) {
									if (!Ra(t)) return t;
									for (var s = -1, o = (n = Gi(n, t)).length, a = o - 1, c = t; null != c && ++s < o;) {
										var u = ho(n[s]),
											l = r;
										if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
										if (s != a) {
											var h = c[u];
											(l = i ? i(h, u, c) : e) === e && (l = Ra(h) ? h : Ws(n[s + 1]) ? [] : {})
										}
										Ar(c, u, l), c = c[u]
									}
									return t
								}
								var Ri = sr ? function(e, t) {
										return sr.set(e, t), e
									} : Tc,
									Ai = Tt ? function(e, t) {
										return Tt(e, "toString", {
											configurable: !0,
											enumerable: !1,
											value: Rc(t),
											writable: !0
										})
									} : Tc;

								function Ni(e) {
									return uo(gc(e))
								}

								function Ti(e, t, n) {
									var r = -1,
										i = e.length;
									t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
									for (var s = Le(i); ++r < i;) s[r] = e[r + t];
									return s
								}

								function Ci(e, t) {
									var n;
									return qr(e, (function(e, r, i) {
										return !(n = t(e, r, i))
									})), !!n
								}

								function Ui(e, t, n) {
									var r = 0,
										i = null == e ? r : e.length;
									if ("number" == typeof t && t == t && i <= k) {
										for (; r < i;) {
											var s = r + i >>> 1,
												o = e[s];
											null !== o && !Da(o) && (n ? o <= t : o < t) ? r = s + 1 : i = s
										}
										return i
									}
									return Li(e, t, Tc, n)
								}

								function Li(t, n, r, i) {
									var s = 0,
										o = null == t ? 0 : t.length;
									if (0 === o) return 0;
									for (var a = (n = r(n)) != n, c = null === n, u = Da(n), l = n === e; s < o;) {
										var h = Vt((s + o) / 2),
											d = r(t[h]),
											f = d !== e,
											p = null === d,
											g = d == d,
											b = Da(d);
										if (a) var y = i || g;
										else y = l ? g && (i || f) : c ? g && f && (i || !p) : u ? g && f && !p && (i || !b) : !p && !b && (i ? d <= n : d < n);
										y ? s = h + 1 : o = h
									}
									return Gn(o, D)
								}

								function Mi(e, t) {
									for (var n = -1, r = e.length, i = 0, s = []; ++n < r;) {
										var o = e[n],
											a = t ? t(o) : o;
										if (!n || !ga(a, c)) {
											var c = a;
											s[i++] = 0 === o ? 0 : o
										}
									}
									return s
								}

								function Di(e) {
									return "number" == typeof e ? e : Da(e) ? L : +e
								}

								function ki(e) {
									if ("string" == typeof e) return e;
									if (va(e)) return ln(e, ki) + "";
									if (Da(e)) return pr ? pr.call(e) : "";
									var t = e + "";
									return "0" == t && 1 / e == -T ? "-0" : t
								}

								function zi(e, n, r) {
									var i = -1,
										s = cn,
										o = e.length,
										a = !0,
										c = [],
										u = c;
									if (r) a = !1, s = un;
									else if (o >= t) {
										var l = n ? null : Os(e);
										if (l) return $n(l);
										a = !1, s = An, u = new Er
									} else u = n ? [] : c;
									e: for (; ++i < o;) {
										var h = e[i],
											d = n ? n(h) : h;
										if (h = r || 0 !== h ? h : 0, a && d == d) {
											for (var f = u.length; f--;)
												if (u[f] === d) continue e;
											n && u.push(d), c.push(h)
										} else s(u, d, r) || (u !== c && u.push(d), c.push(h))
									}
									return c
								}

								function $i(e, t) {
									return null == (e = no(e, t = Gi(t, e))) || delete e[ho(So(t))]
								}

								function qi(e, t, n, r) {
									return xi(e, t, n(Zr(e, t)), r)
								}

								function Hi(e, t, n, r) {
									for (var i = e.length, s = r ? i : -1;
										(r ? s-- : ++s < i) && t(e[s], s, e););
									return n ? Ti(e, r ? 0 : s, r ? s + 1 : i) : Ti(e, r ? s + 1 : 0, r ? i : s)
								}

								function Bi(e, t) {
									var n = e;
									return n instanceof vr && (n = n.value()), dn(t, (function(e, t) {
										return t.func.apply(t.thisArg, hn([e], t.args))
									}), n)
								}

								function Ki(e, t, n) {
									var r = e.length;
									if (r < 2) return r ? zi(e[0]) : [];
									for (var i = -1, s = Le(r); ++i < r;)
										for (var o = e[i], a = -1; ++a < r;) a != i && (s[i] = $r(s[i] || o, e[a], t, n));
									return zi(Fr(s, 1), t, n)
								}

								function Vi(t, n, r) {
									for (var i = -1, s = t.length, o = n.length, a = {}; ++i < s;) {
										var c = i < o ? n[i] : e;
										r(a, t[i], c)
									}
									return a
								}

								function Fi(e) {
									return ja(e) ? e : []
								}

								function Wi(e) {
									return "function" == typeof e ? e : Tc
								}

								function Gi(e, t) {
									return va(e) ? e : Js(e, t) ? [e] : lo(Wa(e))
								}
								var Ji = Si;

								function Yi(t, n, r) {
									var i = t.length;
									return r = r === e ? i : r, !n && r >= i ? t : Ti(t, n, r)
								}
								var Xi = kt || function(e) {
									return Bt.clearTimeout(e)
								};

								function Zi(e, t) {
									if (t) return e.slice();
									var n = e.length,
										r = wt ? wt(n) : new e.constructor(n);
									return e.copy(r), r
								}

								function Qi(e) {
									var t = new e.constructor(e.byteLength);
									return new _t(t).set(new _t(e)), t
								}

								function es(e, t) {
									var n = t ? Qi(e.buffer) : e.buffer;
									return new e.constructor(n, e.byteOffset, e.length)
								}

								function ts(t, n) {
									if (t !== n) {
										var r = t !== e,
											i = null === t,
											s = t == t,
											o = Da(t),
											a = n !== e,
											c = null === n,
											u = n == n,
											l = Da(n);
										if (!c && !l && !o && t > n || o && a && u && !c && !l || i && a && u || !r && u || !s) return 1;
										if (!i && !o && !l && t < n || l && r && s && !i && !o || c && r && s || !a && s || !u) return -1
									}
									return 0
								}

								function ns(e, t, n, r) {
									for (var i = -1, s = e.length, o = n.length, a = -1, c = t.length, u = Wn(s - o, 0), l = Le(c + u), h = !r; ++a < c;) l[a] = t[a];
									for (; ++i < o;)(h || i < s) && (l[n[i]] = e[i]);
									for (; u--;) l[a++] = e[i++];
									return l
								}

								function rs(e, t, n, r) {
									for (var i = -1, s = e.length, o = -1, a = n.length, c = -1, u = t.length, l = Wn(s - a, 0), h = Le(l + u), d = !r; ++i < l;) h[i] = e[i];
									for (var f = i; ++c < u;) h[f + c] = t[c];
									for (; ++o < a;)(d || i < s) && (h[f + n[o]] = e[i++]);
									return h
								}

								function is(e, t) {
									var n = -1,
										r = e.length;
									for (t || (t = Le(r)); ++n < r;) t[n] = e[n];
									return t
								}

								function ss(t, n, r, i) {
									var s = !r;
									r || (r = {});
									for (var o = -1, a = n.length; ++o < a;) {
										var c = n[o],
											u = i ? i(r[c], t[c], c, r, t) : e;
										u === e && (u = t[c]), s ? Ur(r, c, u) : Ar(r, c, u)
									}
									return r
								}

								function os(e, t) {
									return function(n, r) {
										var i = va(n) ? nn : Tr,
											s = t ? t() : {};
										return i(n, e, Ds(r, 2), s)
									}
								}

								function as(t) {
									return Si((function(n, r) {
										var i = -1,
											s = r.length,
											o = s > 1 ? r[s - 1] : e,
											a = s > 2 ? r[2] : e;
										for (o = t.length > 3 && "function" == typeof o ? (s--, o) : e, a && Gs(r[0], r[1], a) && (o = s < 3 ? e : o, s = 1), n = nt(n); ++i < s;) {
											var c = r[i];
											c && t(n, c, i, o)
										}
										return n
									}))
								}

								function cs(e, t) {
									return function(n, r) {
										if (null == n) return n;
										if (!wa(n)) return e(n, r);
										for (var i = n.length, s = t ? i : -1, o = nt(n);
											(t ? s-- : ++s < i) && !1 !== r(o[s], s, o););
										return n
									}
								}

								function us(e) {
									return function(t, n, r) {
										for (var i = -1, s = nt(t), o = r(t), a = o.length; a--;) {
											var c = o[e ? a : ++i];
											if (!1 === n(s[c], c, s)) break
										}
										return t
									}
								}

								function ls(t) {
									return function(n) {
										var r = Mn(n = Wa(n)) ? Hn(n) : e,
											i = r ? r[0] : n.charAt(0),
											s = r ? Yi(r, 1).join("") : n.slice(1);
										return i[t]() + s
									}
								}

								function hs(e) {
									return function(t) {
										return dn(Ic(mc(t).replace(xt, "")), e, "")
									}
								}

								function ds(e) {
									return function() {
										var t = arguments;
										switch (t.length) {
											case 0:
												return new e;
											case 1:
												return new e(t[0]);
											case 2:
												return new e(t[0], t[1]);
											case 3:
												return new e(t[0], t[1], t[2]);
											case 4:
												return new e(t[0], t[1], t[2], t[3]);
											case 5:
												return new e(t[0], t[1], t[2], t[3], t[4]);
											case 6:
												return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
											case 7:
												return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
										}
										var n = br(e.prototype),
											r = e.apply(n, t);
										return Ra(r) ? r : n
									}
								}

								function fs(t) {
									return function(n, r, i) {
										var s = nt(n);
										if (!wa(n)) {
											var o = Ds(r, 3);
											n = oc(n), r = function(e) {
												return o(s[e], e, s)
											}
										}
										var a = t(n, r, i);
										return a > -1 ? s[o ? n[a] : a] : e
									}
								}

								function ps(t) {
									return Ns((function(n) {
										var i = n.length,
											s = i,
											o = mr.prototype.thru;
										for (t && n.reverse(); s--;) {
											var a = n[s];
											if ("function" != typeof a) throw new st(r);
											if (o && !c && "wrapper" == Ls(a)) var c = new mr([], !0)
										}
										for (s = c ? s : i; ++s < i;) {
											var u = Ls(a = n[s]),
												l = "wrapper" == u ? Us(a) : e;
											c = l && Ys(l[0]) && l[1] == (E | v | w | O) && !l[4].length && 1 == l[9] ? c[Ls(l[0])].apply(c, l[3]) : 1 == a.length && Ys(a) ? c[u]() : c.thru(a)
										}
										return function() {
											var e = arguments,
												t = e[0];
											if (c && 1 == e.length && va(t)) return c.plant(t).value();
											for (var r = 0, s = i ? n[r].apply(this, e) : t; ++r < i;) s = n[r].call(this, s);
											return s
										}
									}))
								}

								function gs(t, n, r, i, s, o, a, c, u, l) {
									var h = n & E,
										d = n & f,
										g = n & p,
										b = n & (v | _),
										y = n & S,
										m = g ? e : ds(t);
									return function f() {
										for (var p = arguments.length, v = Le(p), _ = p; _--;) v[_] = arguments[_];
										if (b) var w = Ms(f),
											j = function(e, t) {
												for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
												return r
											}(v, w);
										if (i && (v = ns(v, i, s, b)), o && (v = rs(v, o, a, b)), p -= j, b && p < l) {
											var E = zn(v, w);
											return js(t, n, gs, f.placeholder, r, v, E, c, u, l - p)
										}
										var O = d ? r : this,
											S = g ? O[t] : t;
										return p = v.length, c ? v = function(t, n) {
											for (var r = t.length, i = Gn(n.length, r), s = is(t); i--;) {
												var o = n[i];
												t[i] = Ws(o, r) ? s[o] : e
											}
											return t
										}(v, c) : y && p > 1 && v.reverse(), h && u < p && (v.length = u), this && this !== Bt && this instanceof f && (S = m || ds(S)), S.apply(O, v)
									}
								}

								function bs(e, t) {
									return function(n, r) {
										return function(e, t, n, r) {
											return Jr(e, (function(e, i, s) {
												t(r, n(e), i, s)
											})), r
										}(n, e, t(r), {})
									}
								}

								function ys(t, n) {
									return function(r, i) {
										var s;
										if (r === e && i === e) return n;
										if (r !== e && (s = r), i !== e) {
											if (s === e) return i;
											"string" == typeof r || "string" == typeof i ? (r = ki(r), i = ki(i)) : (r = Di(r), i = Di(i)), s = t(r, i)
										}
										return s
									}
								}

								function ms(e) {
									return Ns((function(t) {
										return t = ln(t, xn(Ds())), Si((function(n) {
											var r = this;
											return e(t, (function(e) {
												return tn(e, r, n)
											}))
										}))
									}))
								}

								function vs(t, n) {
									var r = (n = n === e ? " " : ki(n)).length;
									if (r < 2) return r ? Oi(n, t) : n;
									var i = Oi(n, Kt(t / qn(n)));
									return Mn(n) ? Yi(Hn(i), 0, t).join("") : i.slice(0, t)
								}

								function _s(t) {
									return function(n, r, i) {
										return i && "number" != typeof i && Gs(n, r, i) && (r = i = e), n = Ha(n), r === e ? (r = n, n = 0) : r = Ha(r),
											function(e, t, n, r) {
												for (var i = -1, s = Wn(Kt((t - e) / (n || 1)), 0), o = Le(s); s--;) o[r ? s : ++i] = e, e += n;
												return o
											}(n, r, i = i === e ? n < r ? 1 : -1 : Ha(i), t)
									}
								}

								function ws(e) {
									return function(t, n) {
										return "string" == typeof t && "string" == typeof n || (t = Va(t), n = Va(n)), e(t, n)
									}
								}

								function js(t, n, r, i, s, o, a, c, u, l) {
									var h = n & v;
									n |= h ? w : j, (n &= ~(h ? j : w)) & m || (n &= ~(f | p));
									var d = [t, n, s, h ? o : e, h ? a : e, h ? e : o, h ? e : a, c, u, l],
										g = r.apply(e, d);
									return Ys(t) && io(g, d), g.placeholder = i, ao(g, t, n)
								}

								function Es(e) {
									var t = tt[e];
									return function(e, n) {
										if (e = Va(e), (n = null == n ? 0 : Gn(Ba(n), 292)) && gn(e)) {
											var r = (Wa(e) + "e").split("e");
											return +((r = (Wa(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
										}
										return t(e)
									}
								}
								var Os = nr && 1 / $n(new nr([, -0]))[1] == T ? function(e) {
									return new nr(e)
								} : Dc;

								function Ss(e) {
									return function(t) {
										var n = Bs(t);
										return n == J ? Dn(t) : n == ne ? function(e) {
											var t = -1,
												n = Array(e.size);
											return e.forEach((function(e) {
												n[++t] = [e, e]
											})), n
										}(t) : function(e, t) {
											return ln(t, (function(t) {
												return [t, e[t]]
											}))
										}(t, e(t))
									}
								}

								function Is(t, n, i, s, o, c, u, l) {
									var h = n & p;
									if (!h && "function" != typeof t) throw new st(r);
									var d = s ? s.length : 0;
									if (d || (n &= ~(w | j), s = o = e), u = u === e ? u : Wn(Ba(u), 0), l = l === e ? l : Ba(l), d -= o ? o.length : 0, n & j) {
										var g = s,
											b = o;
										s = o = e
									}
									var y = h ? e : Us(t),
										S = [t, n, i, s, o, g, b, c, u, l];
									if (y && function(e, t) {
											var n = e[1],
												r = t[1],
												i = n | r,
												s = i < (f | p | E),
												o = r == E && n == v || r == E && n == O && e[7].length <= t[8] || r == (E | O) && t[7].length <= t[8] && n == v;
											if (!s && !o) return e;
											r & f && (e[2] = t[2], i |= n & f ? 0 : m);
											var c = t[3];
											if (c) {
												var u = e[3];
												e[3] = u ? ns(u, c, t[4]) : c, e[4] = u ? zn(e[3], a) : t[4]
											}(c = t[5]) && (u = e[5], e[5] = u ? rs(u, c, t[6]) : c, e[6] = u ? zn(e[5], a) : t[6]), (c = t[7]) && (e[7] = c), r & E && (e[8] = null == e[8] ? t[8] : Gn(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
										}(S, y), t = S[0], n = S[1], i = S[2], s = S[3], o = S[4], !(l = S[9] = S[9] === e ? h ? 0 : t.length : Wn(S[9] - d, 0)) && n & (v | _) && (n &= ~(v | _)), n && n != f) I = n == v || n == _ ? function(t, n, r) {
										var i = ds(t);
										return function s() {
											for (var o = arguments.length, a = Le(o), c = o, u = Ms(s); c--;) a[c] = arguments[c];
											var l = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : zn(a, u);
											return (o -= l.length) < r ? js(t, n, gs, s.placeholder, e, a, l, e, e, r - o) : tn(this && this !== Bt && this instanceof s ? i : t, this, a)
										}
									}(t, n, l) : n != w && n != (f | w) || o.length ? gs.apply(e, S) : function(e, t, n, r) {
										var i = t & f,
											s = ds(e);
										return function t() {
											for (var o = -1, a = arguments.length, c = -1, u = r.length, l = Le(u + a), h = this && this !== Bt && this instanceof t ? s : e; ++c < u;) l[c] = r[c];
											for (; a--;) l[c++] = arguments[++o];
											return tn(h, i ? n : this, l)
										}
									}(t, n, i, s);
									else var I = function(e, t, n) {
										var r = t & f,
											i = ds(e);
										return function t() {
											return (this && this !== Bt && this instanceof t ? i : e).apply(r ? n : this, arguments)
										}
									}(t, n, i);
									return ao((y ? Ri : io)(I, S), t, n)
								}

								function Ps(t, n, r, i) {
									return t === e || ga(t, ct[r]) && !ht.call(i, r) ? n : t
								}

								function xs(t, n, r, i, s, o) {
									return Ra(t) && Ra(n) && (o.set(n, t), yi(t, n, e, xs, o), o.delete(n)), t
								}

								function Rs(t) {
									return Ca(t) ? e : t
								}

								function As(t, n, r, i, s, o) {
									var a = r & h,
										c = t.length,
										u = n.length;
									if (c != u && !(a && u > c)) return !1;
									var l = o.get(t),
										f = o.get(n);
									if (l && f) return l == n && f == t;
									var p = -1,
										g = !0,
										b = r & d ? new Er : e;
									for (o.set(t, n), o.set(n, t); ++p < c;) {
										var y = t[p],
											m = n[p];
										if (i) var v = a ? i(m, y, p, n, t, o) : i(y, m, p, t, n, o);
										if (v !== e) {
											if (v) continue;
											g = !1;
											break
										}
										if (b) {
											if (!pn(n, (function(e, t) {
													if (!An(b, t) && (y === e || s(y, e, r, i, o))) return b.push(t)
												}))) {
												g = !1;
												break
											}
										} else if (y !== m && !s(y, m, r, i, o)) {
											g = !1;
											break
										}
									}
									return o.delete(t), o.delete(n), g
								}

								function Ns(t) {
									return oo(to(t, e, _o), t + "")
								}

								function Ts(e) {
									return Qr(e, oc, qs)
								}

								function Cs(e) {
									return Qr(e, ac, Hs)
								}
								var Us = sr ? function(e) {
									return sr.get(e)
								} : Dc;

								function Ls(e) {
									for (var t = e.name + "", n = or[t], r = ht.call(or, t) ? n.length : 0; r--;) {
										var i = n[r],
											s = i.func;
										if (null == s || s == e) return i.name
									}
									return t
								}

								function Ms(e) {
									return (ht.call(gr, "placeholder") ? gr : e).placeholder
								}

								function Ds() {
									var e = gr.iteratee || Cc;
									return e = e === Cc ? li : e, arguments.length ? e(arguments[0], arguments[1]) : e
								}

								function ks(e, t) {
									var n = e.__data__;
									return function(e) {
										var t = typeof e;
										return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
									}(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
								}

								function zs(e) {
									for (var t = oc(e), n = t.length; n--;) {
										var r = t[n],
											i = e[r];
										t[n] = [r, i, Qs(i)]
									}
									return t
								}

								function $s(t, n) {
									var r = function(t, n) {
										return null == t ? e : t[n]
									}(t, n);
									return ui(r) ? r : e
								}
								var qs = Wt ? function(e) {
										return null == e ? [] : (e = nt(e), an(Wt(e), (function(t) {
											return Ot.call(e, t)
										})))
									} : Kc,
									Hs = Wt ? function(e) {
										for (var t = []; e;) hn(t, qs(e)), e = jt(e);
										return t
									} : Kc,
									Bs = ei;

								function Ks(e, t, n) {
									for (var r = -1, i = (t = Gi(t, e)).length, s = !1; ++r < i;) {
										var o = ho(t[r]);
										if (!(s = null != e && n(e, o))) break;
										e = e[o]
									}
									return s || ++r != i ? s : !!(i = null == e ? 0 : e.length) && xa(i) && Ws(o, i) && (va(e) || ma(e))
								}

								function Vs(e) {
									return "function" != typeof e.constructor || Zs(e) ? {} : br(jt(e))
								}

								function Fs(e) {
									return va(e) || ma(e) || !!(It && e && e[It])
								}

								function Ws(e, t) {
									var n, r = typeof e;
									return !!(t = null !== (n = t) && void 0 !== n ? n : C) && ("number" == r || "symbol" != r && Ge.test(e)) && e > -1 && e % 1 == 0 && e < t
								}

								function Gs(e, t, n) {
									if (!Ra(n)) return !1;
									var r = typeof t;
									return !!("number" == r ? wa(n) && Ws(t, n.length) : "string" == r && t in n) && ga(n[t], e)
								}

								function Js(e, t) {
									if (va(e)) return !1;
									var n = typeof e;
									return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Da(e)) || Ae.test(e) || !Re.test(e) || null != t && e in nt(t)
								}

								function Ys(e) {
									var t = Ls(e),
										n = gr[t];
									if ("function" != typeof n || !(t in vr.prototype)) return !1;
									if (e === n) return !0;
									var r = Us(n);
									return !!r && e === r[0]
								}(Qn && Bs(new Qn(new ArrayBuffer(1))) != ue || er && Bs(new er) != J || tr && Bs(tr.resolve()) != Q || nr && Bs(new nr) != ne || rr && Bs(new rr) != oe) && (Bs = function(t) {
									var n = ei(t),
										r = n == Z ? t.constructor : e,
										i = r ? fo(r) : "";
									if (i) switch (i) {
										case ar:
											return ue;
										case cr:
											return J;
										case ur:
											return Q;
										case lr:
											return ne;
										case hr:
											return oe
									}
									return n
								});
								var Xs = ut ? Ia : Vc;

								function Zs(e) {
									var t = e && e.constructor;
									return e === ("function" == typeof t && t.prototype || ct)
								}

								function Qs(e) {
									return e == e && !Ra(e)
								}

								function eo(t, n) {
									return function(r) {
										return null != r && r[t] === n && (n !== e || t in nt(r))
									}
								}

								function to(t, n, r) {
									return n = Wn(n === e ? t.length - 1 : n, 0),
										function() {
											for (var e = arguments, i = -1, s = Wn(e.length - n, 0), o = Le(s); ++i < s;) o[i] = e[n + i];
											i = -1;
											for (var a = Le(n + 1); ++i < n;) a[i] = e[i];
											return a[n] = r(o), tn(t, this, a)
										}
								}

								function no(e, t) {
									return t.length < 2 ? e : Zr(e, Ti(t, 0, -1))
								}

								function ro(e, t) {
									if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
								}
								var io = co(Ri),
									so = Ht || function(e, t) {
										return Bt.setTimeout(e, t)
									},
									oo = co(Ai);

								function ao(e, t, n) {
									var r = t + "";
									return oo(e, function(e, t) {
										var n = t.length;
										if (!n) return e;
										var r = n - 1;
										return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Me, "{\n/* [wrapped with " + t + "] */\n")
									}(r, function(e, t) {
										return rn(z, (function(n) {
											var r = "_." + n[0];
											t & n[1] && !cn(e, r) && e.push(r)
										})), e.sort()
									}(function(e) {
										var t = e.match(De);
										return t ? t[1].split(ke) : []
									}(r), n)))
								}

								function co(t) {
									var n = 0,
										r = 0;
									return function() {
										var i = Jn(),
											s = R - (i - r);
										if (r = i, s > 0) {
											if (++n >= x) return arguments[0]
										} else n = 0;
										return t.apply(e, arguments)
									}
								}

								function uo(t, n) {
									var r = -1,
										i = t.length,
										s = i - 1;
									for (n = n === e ? i : n; ++r < n;) {
										var o = Ei(r, s),
											a = t[o];
										t[o] = t[r], t[r] = a
									}
									return t.length = n, t
								}
								var lo = function(e) {
									var t = ua(e, (function(e) {
											return n.size === o && n.clear(), e
										})),
										n = t.cache;
									return t
								}((function(e) {
									var t = [];
									return 46 === e.charCodeAt(0) && t.push(""), e.replace(Ne, (function(e, n, r, i) {
										t.push(r ? i.replace(qe, "$1") : n || e)
									})), t
								}));

								function ho(e) {
									if ("string" == typeof e || Da(e)) return e;
									var t = e + "";
									return "0" == t && 1 / e == -T ? "-0" : t
								}

								function fo(e) {
									if (null != e) {
										try {
											return lt.call(e)
										} catch {}
										try {
											return e + ""
										} catch {}
									}
									return ""
								}

								function po(e) {
									if (e instanceof vr) return e.clone();
									var t = new mr(e.__wrapped__, e.__chain__);
									return t.__actions__ = is(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
								}
								var go = Si((function(e, t) {
										return ja(e) ? $r(e, Fr(t, 1, ja, !0)) : []
									})),
									bo = Si((function(t, n) {
										var r = So(n);
										return ja(r) && (r = e), ja(t) ? $r(t, Fr(n, 1, ja, !0), Ds(r, 2)) : []
									})),
									yo = Si((function(t, n) {
										var r = So(n);
										return ja(r) && (r = e), ja(t) ? $r(t, Fr(n, 1, ja, !0), e, r) : []
									}));

								function mo(e, t, n) {
									var r = null == e ? 0 : e.length;
									if (!r) return -1;
									var i = null == n ? 0 : Ba(n);
									return i < 0 && (i = Wn(r + i, 0)), yn(e, Ds(t, 3), i)
								}

								function vo(t, n, r) {
									var i = null == t ? 0 : t.length;
									if (!i) return -1;
									var s = i - 1;
									return r !== e && (s = Ba(r), s = r < 0 ? Wn(i + s, 0) : Gn(s, i - 1)), yn(t, Ds(n, 3), s, !0)
								}

								function _o(e) {
									return null != e && e.length ? Fr(e, 1) : []
								}

								function wo(t) {
									return t && t.length ? t[0] : e
								}
								var jo = Si((function(e) {
										var t = ln(e, Fi);
										return t.length && t[0] === e[0] ? ii(t) : []
									})),
									Eo = Si((function(t) {
										var n = So(t),
											r = ln(t, Fi);
										return n === So(r) ? n = e : r.pop(), r.length && r[0] === t[0] ? ii(r, Ds(n, 2)) : []
									})),
									Oo = Si((function(t) {
										var n = So(t),
											r = ln(t, Fi);
										return (n = "function" == typeof n ? n : e) && r.pop(), r.length && r[0] === t[0] ? ii(r, e, n) : []
									}));

								function So(t) {
									var n = null == t ? 0 : t.length;
									return n ? t[n - 1] : e
								}
								var Io = Si(Po);

								function Po(e, t) {
									return e && e.length && t && t.length ? wi(e, t) : e
								}
								var xo = Ns((function(e, t) {
									var n = null == e ? 0 : e.length,
										r = Lr(e, t);
									return ji(e, ln(t, (function(e) {
										return Ws(e, n) ? +e : e
									})).sort(ts)), r
								}));

								function Ro(e) {
									return null == e ? e : Zn.call(e)
								}
								var Ao = Si((function(e) {
										return zi(Fr(e, 1, ja, !0))
									})),
									No = Si((function(t) {
										var n = So(t);
										return ja(n) && (n = e), zi(Fr(t, 1, ja, !0), Ds(n, 2))
									})),
									To = Si((function(t) {
										var n = So(t);
										return n = "function" == typeof n ? n : e, zi(Fr(t, 1, ja, !0), e, n)
									}));

								function Co(e) {
									if (!e || !e.length) return [];
									var t = 0;
									return e = an(e, (function(e) {
										if (ja(e)) return t = Wn(e.length, t), !0
									})), In(t, (function(t) {
										return ln(e, jn(t))
									}))
								}

								function Uo(t, n) {
									if (!t || !t.length) return [];
									var r = Co(t);
									return null == n ? r : ln(r, (function(t) {
										return tn(n, e, t)
									}))
								}
								var Lo = Si((function(e, t) {
										return ja(e) ? $r(e, t) : []
									})),
									Mo = Si((function(e) {
										return Ki(an(e, ja))
									})),
									Do = Si((function(t) {
										var n = So(t);
										return ja(n) && (n = e), Ki(an(t, ja), Ds(n, 2))
									})),
									ko = Si((function(t) {
										var n = So(t);
										return n = "function" == typeof n ? n : e, Ki(an(t, ja), e, n)
									})),
									zo = Si(Co),
									$o = Si((function(t) {
										var n = t.length,
											r = n > 1 ? t[n - 1] : e;
										return r = "function" == typeof r ? (t.pop(), r) : e, Uo(t, r)
									}));

								function qo(e) {
									var t = gr(e);
									return t.__chain__ = !0, t
								}

								function Ho(e, t) {
									return t(e)
								}
								var Bo = Ns((function(t) {
										var n = t.length,
											r = n ? t[0] : 0,
											i = this.__wrapped__,
											s = function(e) {
												return Lr(e, t)
											};
										return !(n > 1 || this.__actions__.length) && i instanceof vr && Ws(r) ? ((i = i.slice(r, +r + (n ? 1 : 0))).__actions__.push({
											func: Ho,
											args: [s],
											thisArg: e
										}), new mr(i, this.__chain__).thru((function(t) {
											return n && !t.length && t.push(e), t
										}))) : this.thru(s)
									})),
									Ko = os((function(e, t, n) {
										ht.call(e, n) ? ++e[n] : Ur(e, n, 1)
									})),
									Vo = fs(mo),
									Fo = fs(vo);

								function Wo(e, t) {
									return (va(e) ? rn : qr)(e, Ds(t, 3))
								}

								function Go(e, t) {
									return (va(e) ? sn : Hr)(e, Ds(t, 3))
								}
								var Jo = os((function(e, t, n) {
										ht.call(e, n) ? e[n].push(t) : Ur(e, n, [t])
									})),
									Yo = Si((function(e, t, n) {
										var r = -1,
											i = "function" == typeof t,
											s = wa(e) ? Le(e.length) : [];
										return qr(e, (function(e) {
											s[++r] = i ? tn(t, e, n) : si(e, t, n)
										})), s
									})),
									Xo = os((function(e, t, n) {
										Ur(e, n, t)
									}));

								function Zo(e, t) {
									return (va(e) ? ln : pi)(e, Ds(t, 3))
								}
								var Qo = os((function(e, t, n) {
										e[n ? 0 : 1].push(t)
									}), (function() {
										return [
											[],
											[]
										]
									})),
									ea = Si((function(e, t) {
										if (null == e) return [];
										var n = t.length;
										return n > 1 && Gs(e, t[0], t[1]) ? t = [] : n > 2 && Gs(t[0], t[1], t[2]) && (t = [t[0]]), vi(e, Fr(t, 1), [])
									})),
									ta = qt || function() {
										return Bt.Date.now()
									};

								function na(t, n, r) {
									return n = r ? e : n, n = t && null == n ? t.length : n, Is(t, E, e, e, e, e, n)
								}

								function ra(t, n) {
									var i;
									if ("function" != typeof n) throw new st(r);
									return t = Ba(t),
										function() {
											return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = e), i
										}
								}
								var ia = Si((function(e, t, n) {
										var r = f;
										if (n.length) {
											var i = zn(n, Ms(ia));
											r |= w
										}
										return Is(e, r, t, n, i)
									})),
									sa = Si((function(e, t, n) {
										var r = f | p;
										if (n.length) {
											var i = zn(n, Ms(sa));
											r |= w
										}
										return Is(t, r, e, n, i)
									}));

								function oa(t, n, i) {
									var s, o, a, c, u, l, h = 0,
										d = !1,
										f = !1,
										p = !0;
									if ("function" != typeof t) throw new st(r);

									function g(n) {
										var r = s,
											i = o;
										return s = o = e, h = n, c = t.apply(i, r)
									}

									function b(t) {
										var r = t - l;
										return l === e || r >= n || r < 0 || f && t - h >= a
									}

									function y() {
										var e = ta();
										if (b(e)) return m(e);
										u = so(y, function(e) {
											var t = n - (e - l);
											return f ? Gn(t, a - (e - h)) : t
										}(e))
									}

									function m(t) {
										return u = e, p && s ? g(t) : (s = o = e, c)
									}

									function v() {
										var t = ta(),
											r = b(t);
										if (s = arguments, o = this, l = t, r) {
											if (u === e) return function(e) {
												return h = e, u = so(y, n), d ? g(e) : c
											}(l);
											if (f) return Xi(u), u = so(y, n), g(l)
										}
										return u === e && (u = so(y, n)), c
									}
									return n = Va(n) || 0, Ra(i) && (d = !!i.leading, a = (f = "maxWait" in i) ? Wn(Va(i.maxWait) || 0, n) : a, p = "trailing" in i ? !!i.trailing : p), v.cancel = function() {
										u !== e && Xi(u), h = 0, s = l = o = u = e
									}, v.flush = function() {
										return u === e ? c : m(ta())
									}, v
								}
								var aa = Si((function(e, t) {
										return zr(e, 1, t)
									})),
									ca = Si((function(e, t, n) {
										return zr(e, Va(t) || 0, n)
									}));

								function ua(e, t) {
									if ("function" != typeof e || null != t && "function" != typeof t) throw new st(r);
									var n = function() {
										var r = arguments,
											i = t ? t.apply(this, r) : r[0],
											s = n.cache;
										if (s.has(i)) return s.get(i);
										var o = e.apply(this, r);
										return n.cache = s.set(i, o) || s, o
									};
									return n.cache = new(ua.Cache || jr), n
								}

								function la(e) {
									if ("function" != typeof e) throw new st(r);
									return function() {
										var t = arguments;
										switch (t.length) {
											case 0:
												return !e.call(this);
											case 1:
												return !e.call(this, t[0]);
											case 2:
												return !e.call(this, t[0], t[1]);
											case 3:
												return !e.call(this, t[0], t[1], t[2])
										}
										return !e.apply(this, t)
									}
								}
								ua.Cache = jr;
								var ha = Ji((function(e, t) {
										var n = (t = 1 == t.length && va(t[0]) ? ln(t[0], xn(Ds())) : ln(Fr(t, 1), xn(Ds()))).length;
										return Si((function(r) {
											for (var i = -1, s = Gn(r.length, n); ++i < s;) r[i] = t[i].call(this, r[i]);
											return tn(e, this, r)
										}))
									})),
									da = Si((function(t, n) {
										var r = zn(n, Ms(da));
										return Is(t, w, e, n, r)
									})),
									fa = Si((function(t, n) {
										var r = zn(n, Ms(fa));
										return Is(t, j, e, n, r)
									})),
									pa = Ns((function(t, n) {
										return Is(t, O, e, e, e, n)
									}));

								function ga(e, t) {
									return e === t || e != e && t != t
								}
								var ba = ws(ti),
									ya = ws((function(e, t) {
										return e >= t
									})),
									ma = oi(function() {
										return arguments
									}()) ? oi : function(e) {
										return Aa(e) && ht.call(e, "callee") && !Ot.call(e, "callee")
									},
									va = Le.isArray,
									_a = Jt ? xn(Jt) : function(e) {
										return Aa(e) && ei(e) == ce
									};

								function wa(e) {
									return null != e && xa(e.length) && !Ia(e)
								}

								function ja(e) {
									return Aa(e) && wa(e)
								}
								var Ea = Gt || Vc,
									Oa = Yt ? xn(Yt) : function(e) {
										return Aa(e) && ei(e) == K
									};

								function Sa(e) {
									if (!Aa(e)) return !1;
									var t = ei(e);
									return t == F || t == V || "string" == typeof e.message && "string" == typeof e.name && !Ca(e)
								}

								function Ia(e) {
									if (!Ra(e)) return !1;
									var t = ei(e);
									return t == W || t == G || t == H || t == ee
								}

								function Pa(e) {
									return "number" == typeof e && e == Ba(e)
								}

								function xa(e) {
									return "number" == typeof e && e > -1 && e % 1 == 0 && e <= C
								}

								function Ra(e) {
									var t = typeof e;
									return null != e && ("object" == t || "function" == t)
								}

								function Aa(e) {
									return null != e && "object" == typeof e
								}
								var Na = Xt ? xn(Xt) : function(e) {
									return Aa(e) && Bs(e) == J
								};

								function Ta(e) {
									return "number" == typeof e || Aa(e) && ei(e) == Y
								}

								function Ca(e) {
									if (!Aa(e) || ei(e) != Z) return !1;
									var t = jt(e);
									if (null === t) return !0;
									var n = ht.call(t, "constructor") && t.constructor;
									return "function" == typeof n && n instanceof n && lt.call(n) == gt
								}
								var Ua = Zt ? xn(Zt) : function(e) {
										return Aa(e) && ei(e) == te
									},
									La = Qt ? xn(Qt) : function(e) {
										return Aa(e) && Bs(e) == ne
									};

								function Ma(e) {
									return "string" == typeof e || !va(e) && Aa(e) && ei(e) == re
								}

								function Da(e) {
									return "symbol" == typeof e || Aa(e) && ei(e) == ie
								}
								var ka = en ? xn(en) : function(e) {
										return Aa(e) && xa(e.length) && !!Mt[ei(e)]
									},
									za = ws(fi),
									$a = ws((function(e, t) {
										return e <= t
									}));

								function qa(e) {
									if (!e) return [];
									if (wa(e)) return Ma(e) ? Hn(e) : is(e);
									if (Pt && e[Pt]) return function(e) {
										for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
										return n
									}(e[Pt]());
									var t = Bs(e);
									return (t == J ? Dn : t == ne ? $n : gc)(e)
								}

								function Ha(e) {
									return e ? (e = Va(e)) === T || e === -T ? (e < 0 ? -1 : 1) * U : e == e ? e : 0 : 0 === e ? e : 0
								}

								function Ba(e) {
									var t = Ha(e),
										n = t % 1;
									return t == t ? n ? t - n : t : 0
								}

								function Ka(e) {
									return e ? Mr(Ba(e), 0, M) : 0
								}

								function Va(e) {
									if ("number" == typeof e) return e;
									if (Da(e)) return L;
									if (Ra(e)) {
										var t = "function" == typeof e.valueOf ? e.valueOf() : e;
										e = Ra(t) ? t + "" : t
									}
									if ("string" != typeof e) return 0 === e ? e : +e;
									e = Pn(e);
									var n = Ve.test(e);
									return n || We.test(e) ? $t(e.slice(2), n ? 2 : 8) : Ke.test(e) ? L : +e
								}

								function Fa(e) {
									return ss(e, ac(e))
								}

								function Wa(e) {
									return null == e ? "" : ki(e)
								}
								var Ga = as((function(e, t) {
										if (Zs(t) || wa(t)) ss(t, oc(t), e);
										else
											for (var n in t) ht.call(t, n) && Ar(e, n, t[n])
									})),
									Ja = as((function(e, t) {
										ss(t, ac(t), e)
									})),
									Ya = as((function(e, t, n, r) {
										ss(t, ac(t), e, r)
									})),
									Xa = as((function(e, t, n, r) {
										ss(t, oc(t), e, r)
									})),
									Za = Ns(Lr),
									Qa = Si((function(t, n) {
										t = nt(t);
										var r = -1,
											i = n.length,
											s = i > 2 ? n[2] : e;
										for (s && Gs(n[0], n[1], s) && (i = 1); ++r < i;)
											for (var o = n[r], a = ac(o), c = -1, u = a.length; ++c < u;) {
												var l = a[c],
													h = t[l];
												(h === e || ga(h, ct[l]) && !ht.call(t, l)) && (t[l] = o[l])
											}
										return t
									})),
									ec = Si((function(t) {
										return t.push(e, xs), tn(uc, e, t)
									}));

								function tc(t, n, r) {
									var i = null == t ? e : Zr(t, n);
									return i === e ? r : i
								}

								function nc(e, t) {
									return null != e && Ks(e, t, ri)
								}
								var rc = bs((function(e, t, n) {
										null != t && "function" != typeof t.toString && (t = pt.call(t)), e[t] = n
									}), Rc(Tc)),
									ic = bs((function(e, t, n) {
										null != t && "function" != typeof t.toString && (t = pt.call(t)), ht.call(e, t) ? e[t].push(n) : e[t] = [n]
									}), Ds),
									sc = Si(si);

								function oc(e) {
									return wa(e) ? Sr(e) : hi(e)
								}

								function ac(e) {
									return wa(e) ? Sr(e, !0) : di(e)
								}
								var cc = as((function(e, t, n) {
										yi(e, t, n)
									})),
									uc = as((function(e, t, n, r) {
										yi(e, t, n, r)
									})),
									lc = Ns((function(e, t) {
										var n = {};
										if (null == e) return n;
										var r = !1;
										t = ln(t, (function(t) {
											return t = Gi(t, e), r || (r = t.length > 1), t
										})), ss(e, Cs(e), n), r && (n = Dr(n, c | u | l, Rs));
										for (var i = t.length; i--;) $i(n, t[i]);
										return n
									})),
									hc = Ns((function(e, t) {
										return null == e ? {} : function(e, t) {
											return _i(e, t, (function(t, n) {
												return nc(e, n)
											}))
										}(e, t)
									}));

								function dc(e, t) {
									if (null == e) return {};
									var n = ln(Cs(e), (function(e) {
										return [e]
									}));
									return t = Ds(t), _i(e, n, (function(e, n) {
										return t(e, n[0])
									}))
								}
								var fc = Ss(oc),
									pc = Ss(ac);

								function gc(e) {
									return null == e ? [] : Rn(e, oc(e))
								}
								var bc = hs((function(e, t, n) {
									return t = t.toLowerCase(), e + (n ? yc(t) : t)
								}));

								function yc(e) {
									return Sc(Wa(e).toLowerCase())
								}

								function mc(e) {
									return (e = Wa(e)) && e.replace(Je, Cn).replace(Rt, "")
								}
								var vc = hs((function(e, t, n) {
										return e + (n ? "-" : "") + t.toLowerCase()
									})),
									_c = hs((function(e, t, n) {
										return e + (n ? " " : "") + t.toLowerCase()
									})),
									wc = ls("toLowerCase"),
									jc = hs((function(e, t, n) {
										return e + (n ? "_" : "") + t.toLowerCase()
									})),
									Ec = hs((function(e, t, n) {
										return e + (n ? " " : "") + Sc(t)
									})),
									Oc = hs((function(e, t, n) {
										return e + (n ? " " : "") + t.toUpperCase()
									})),
									Sc = ls("toUpperCase");

								function Ic(t, n, r) {
									return t = Wa(t), (n = r ? e : n) === e ? function(e) {
										return Ct.test(e)
									}(t) ? function(e) {
										return e.match(Nt) || []
									}(t) : function(e) {
										return e.match(ze) || []
									}(t) : t.match(n) || []
								}
								var Pc = Si((function(t, n) {
										try {
											return tn(t, e, n)
										} catch (r) {
											return Sa(r) ? r : new Qe(r)
										}
									})),
									xc = Ns((function(e, t) {
										return rn(t, (function(t) {
											t = ho(t), Ur(e, t, ia(e[t], e))
										})), e
									}));

								function Rc(e) {
									return function() {
										return e
									}
								}
								var Ac = ps(),
									Nc = ps(!0);

								function Tc(e) {
									return e
								}

								function Cc(e) {
									return li("function" == typeof e ? e : Dr(e, c))
								}
								var Uc = Si((function(e, t) {
										return function(n) {
											return si(n, e, t)
										}
									})),
									Lc = Si((function(e, t) {
										return function(n) {
											return si(e, n, t)
										}
									}));

								function Mc(e, t, n) {
									var r = oc(t),
										i = Xr(t, r);
									null == n && (!Ra(t) || !i.length && r.length) && (n = t, t = e, e = this, i = Xr(t, oc(t)));
									var s = !(Ra(n) && "chain" in n && !n.chain),
										o = Ia(e);
									return rn(i, (function(n) {
										var r = t[n];
										e[n] = r, o && (e.prototype[n] = function() {
											var t = this.__chain__;
											if (s || t) {
												var n = e(this.__wrapped__),
													i = n.__actions__ = is(this.__actions__);
												return i.push({
													func: r,
													args: arguments,
													thisArg: e
												}), n.__chain__ = t, n
											}
											return r.apply(e, hn([this.value()], arguments))
										})
									})), e
								}

								function Dc() {}
								var kc = ms(ln),
									zc = ms(on),
									$c = ms(pn);

								function qc(e) {
									return Js(e) ? jn(ho(e)) : function(e) {
										return function(t) {
											return Zr(t, e)
										}
									}(e)
								}
								var Hc = _s(),
									Bc = _s(!0);

								function Kc() {
									return []
								}

								function Vc() {
									return !1
								}
								var Fc = ys((function(e, t) {
										return e + t
									}), 0),
									Wc = Es("ceil"),
									Gc = ys((function(e, t) {
										return e / t
									}), 1),
									Jc = Es("floor"),
									Yc = ys((function(e, t) {
										return e * t
									}), 1),
									Xc = Es("round"),
									Zc = ys((function(e, t) {
										return e - t
									}), 0);
								return gr.after = function(e, t) {
									if ("function" != typeof t) throw new st(r);
									return e = Ba(e),
										function() {
											if (--e < 1) return t.apply(this, arguments)
										}
								}, gr.ary = na, gr.assign = Ga, gr.assignIn = Ja, gr.assignInWith = Ya, gr.assignWith = Xa, gr.at = Za, gr.before = ra, gr.bind = ia, gr.bindAll = xc, gr.bindKey = sa, gr.castArray = function() {
									if (!arguments.length) return [];
									var e = arguments[0];
									return va(e) ? e : [e]
								}, gr.chain = qo, gr.chunk = function(t, n, r) {
									n = (r ? Gs(t, n, r) : n === e) ? 1 : Wn(Ba(n), 0);
									var i = null == t ? 0 : t.length;
									if (!i || n < 1) return [];
									for (var s = 0, o = 0, a = Le(Kt(i / n)); s < i;) a[o++] = Ti(t, s, s += n);
									return a
								}, gr.compact = function(e) {
									for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
										var s = e[t];
										s && (i[r++] = s)
									}
									return i
								}, gr.concat = function() {
									var e = arguments.length;
									if (!e) return [];
									for (var t = Le(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
									return hn(va(n) ? is(n) : [n], Fr(t, 1))
								}, gr.cond = function(e) {
									var t = null == e ? 0 : e.length,
										n = Ds();
									return e = t ? ln(e, (function(e) {
										if ("function" != typeof e[1]) throw new st(r);
										return [n(e[0]), e[1]]
									})) : [], Si((function(n) {
										for (var r = -1; ++r < t;) {
											var i = e[r];
											if (tn(i[0], this, n)) return tn(i[1], this, n)
										}
									}))
								}, gr.conforms = function(e) {
									return function(e) {
										var t = oc(e);
										return function(n) {
											return kr(n, e, t)
										}
									}(Dr(e, c))
								}, gr.constant = Rc, gr.countBy = Ko, gr.create = function(e, t) {
									var n = br(e);
									return null == t ? n : Cr(n, t)
								}, gr.curry = function t(n, r, i) {
									var s = Is(n, v, e, e, e, e, e, r = i ? e : r);
									return s.placeholder = t.placeholder, s
								}, gr.curryRight = function t(n, r, i) {
									var s = Is(n, _, e, e, e, e, e, r = i ? e : r);
									return s.placeholder = t.placeholder, s
								}, gr.debounce = oa, gr.defaults = Qa, gr.defaultsDeep = ec, gr.defer = aa, gr.delay = ca, gr.difference = go, gr.differenceBy = bo, gr.differenceWith = yo, gr.drop = function(t, n, r) {
									var i = null == t ? 0 : t.length;
									return i ? Ti(t, (n = r || n === e ? 1 : Ba(n)) < 0 ? 0 : n, i) : []
								}, gr.dropRight = function(t, n, r) {
									var i = null == t ? 0 : t.length;
									return i ? Ti(t, 0, (n = i - (n = r || n === e ? 1 : Ba(n))) < 0 ? 0 : n) : []
								}, gr.dropRightWhile = function(e, t) {
									return e && e.length ? Hi(e, Ds(t, 3), !0, !0) : []
								}, gr.dropWhile = function(e, t) {
									return e && e.length ? Hi(e, Ds(t, 3), !0) : []
								}, gr.fill = function(t, n, r, i) {
									var s = null == t ? 0 : t.length;
									return s ? (r && "number" != typeof r && Gs(t, n, r) && (r = 0, i = s), function(t, n, r, i) {
										var s = t.length;
										for ((r = Ba(r)) < 0 && (r = -r > s ? 0 : s + r), (i = i === e || i > s ? s : Ba(i)) < 0 && (i += s), i = r > i ? 0 : Ka(i); r < i;) t[r++] = n;
										return t
									}(t, n, r, i)) : []
								}, gr.filter = function(e, t) {
									return (va(e) ? an : Vr)(e, Ds(t, 3))
								}, gr.flatMap = function(e, t) {
									return Fr(Zo(e, t), 1)
								}, gr.flatMapDeep = function(e, t) {
									return Fr(Zo(e, t), T)
								}, gr.flatMapDepth = function(t, n, r) {
									return r = r === e ? 1 : Ba(r), Fr(Zo(t, n), r)
								}, gr.flatten = _o, gr.flattenDeep = function(e) {
									return null != e && e.length ? Fr(e, T) : []
								}, gr.flattenDepth = function(t, n) {
									return null != t && t.length ? Fr(t, n = n === e ? 1 : Ba(n)) : []
								}, gr.flip = function(e) {
									return Is(e, S)
								}, gr.flow = Ac, gr.flowRight = Nc, gr.fromPairs = function(e) {
									for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
										var i = e[t];
										r[i[0]] = i[1]
									}
									return r
								}, gr.functions = function(e) {
									return null == e ? [] : Xr(e, oc(e))
								}, gr.functionsIn = function(e) {
									return null == e ? [] : Xr(e, ac(e))
								}, gr.groupBy = Jo, gr.initial = function(e) {
									return null != e && e.length ? Ti(e, 0, -1) : []
								}, gr.intersection = jo, gr.intersectionBy = Eo, gr.intersectionWith = Oo, gr.invert = rc, gr.invertBy = ic, gr.invokeMap = Yo, gr.iteratee = Cc, gr.keyBy = Xo, gr.keys = oc, gr.keysIn = ac, gr.map = Zo, gr.mapKeys = function(e, t) {
									var n = {};
									return t = Ds(t, 3), Jr(e, (function(e, r, i) {
										Ur(n, t(e, r, i), e)
									})), n
								}, gr.mapValues = function(e, t) {
									var n = {};
									return t = Ds(t, 3), Jr(e, (function(e, r, i) {
										Ur(n, r, t(e, r, i))
									})), n
								}, gr.matches = function(e) {
									return gi(Dr(e, c))
								}, gr.matchesProperty = function(e, t) {
									return bi(e, Dr(t, c))
								}, gr.memoize = ua, gr.merge = cc, gr.mergeWith = uc, gr.method = Uc, gr.methodOf = Lc, gr.mixin = Mc, gr.negate = la, gr.nthArg = function(e) {
									return e = Ba(e), Si((function(t) {
										return mi(t, e)
									}))
								}, gr.omit = lc, gr.omitBy = function(e, t) {
									return dc(e, la(Ds(t)))
								}, gr.once = function(e) {
									return ra(2, e)
								}, gr.orderBy = function(t, n, r, i) {
									return null == t ? [] : (va(n) || (n = null == n ? [] : [n]), va(r = i ? e : r) || (r = null == r ? [] : [r]), vi(t, n, r))
								}, gr.over = kc, gr.overArgs = ha, gr.overEvery = zc, gr.overSome = $c, gr.partial = da, gr.partialRight = fa, gr.partition = Qo, gr.pick = hc, gr.pickBy = dc, gr.property = qc, gr.propertyOf = function(t) {
									return function(n) {
										return null == t ? e : Zr(t, n)
									}
								}, gr.pull = Io, gr.pullAll = Po, gr.pullAllBy = function(e, t, n) {
									return e && e.length && t && t.length ? wi(e, t, Ds(n, 2)) : e
								}, gr.pullAllWith = function(t, n, r) {
									return t && t.length && n && n.length ? wi(t, n, e, r) : t
								}, gr.pullAt = xo, gr.range = Hc, gr.rangeRight = Bc, gr.rearg = pa, gr.reject = function(e, t) {
									return (va(e) ? an : Vr)(e, la(Ds(t, 3)))
								}, gr.remove = function(e, t) {
									var n = [];
									if (!e || !e.length) return n;
									var r = -1,
										i = [],
										s = e.length;
									for (t = Ds(t, 3); ++r < s;) {
										var o = e[r];
										t(o, r, e) && (n.push(o), i.push(r))
									}
									return ji(e, i), n
								}, gr.rest = function(t, n) {
									if ("function" != typeof t) throw new st(r);
									return Si(t, n = n === e ? n : Ba(n))
								}, gr.reverse = Ro, gr.sampleSize = function(t, n, r) {
									return n = (r ? Gs(t, n, r) : n === e) ? 1 : Ba(n), (va(t) ? Pr : Pi)(t, n)
								}, gr.set = function(e, t, n) {
									return null == e ? e : xi(e, t, n)
								}, gr.setWith = function(t, n, r, i) {
									return i = "function" == typeof i ? i : e, null == t ? t : xi(t, n, r, i)
								}, gr.shuffle = function(e) {
									return (va(e) ? xr : Ni)(e)
								}, gr.slice = function(t, n, r) {
									var i = null == t ? 0 : t.length;
									return i ? (r && "number" != typeof r && Gs(t, n, r) ? (n = 0, r = i) : (n = null == n ? 0 : Ba(n), r = r === e ? i : Ba(r)), Ti(t, n, r)) : []
								}, gr.sortBy = ea, gr.sortedUniq = function(e) {
									return e && e.length ? Mi(e) : []
								}, gr.sortedUniqBy = function(e, t) {
									return e && e.length ? Mi(e, Ds(t, 2)) : []
								}, gr.split = function(t, n, r) {
									return r && "number" != typeof r && Gs(t, n, r) && (n = r = e), (r = r === e ? M : r >>> 0) ? (t = Wa(t)) && ("string" == typeof n || null != n && !Ua(n)) && !(n = ki(n)) && Mn(t) ? Yi(Hn(t), 0, r) : t.split(n, r) : []
								}, gr.spread = function(e, t) {
									if ("function" != typeof e) throw new st(r);
									return t = null == t ? 0 : Wn(Ba(t), 0), Si((function(n) {
										var r = n[t],
											i = Yi(n, 0, t);
										return r && hn(i, r), tn(e, this, i)
									}))
								}, gr.tail = function(e) {
									var t = null == e ? 0 : e.length;
									return t ? Ti(e, 1, t) : []
								}, gr.take = function(t, n, r) {
									return t && t.length ? Ti(t, 0, (n = r || n === e ? 1 : Ba(n)) < 0 ? 0 : n) : []
								}, gr.takeRight = function(t, n, r) {
									var i = null == t ? 0 : t.length;
									return i ? Ti(t, (n = i - (n = r || n === e ? 1 : Ba(n))) < 0 ? 0 : n, i) : []
								}, gr.takeRightWhile = function(e, t) {
									return e && e.length ? Hi(e, Ds(t, 3), !1, !0) : []
								}, gr.takeWhile = function(e, t) {
									return e && e.length ? Hi(e, Ds(t, 3)) : []
								}, gr.tap = function(e, t) {
									return t(e), e
								}, gr.throttle = function(e, t, n) {
									var i = !0,
										s = !0;
									if ("function" != typeof e) throw new st(r);
									return Ra(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), oa(e, t, {
										leading: i,
										maxWait: t,
										trailing: s
									})
								}, gr.thru = Ho, gr.toArray = qa, gr.toPairs = fc, gr.toPairsIn = pc, gr.toPath = function(e) {
									return va(e) ? ln(e, ho) : Da(e) ? [e] : is(lo(Wa(e)))
								}, gr.toPlainObject = Fa, gr.transform = function(e, t, n) {
									var r = va(e),
										i = r || Ea(e) || ka(e);
									if (t = Ds(t, 4), null == n) {
										var s = e && e.constructor;
										n = i ? r ? new s : [] : Ra(e) && Ia(s) ? br(jt(e)) : {}
									}
									return (i ? rn : Jr)(e, (function(e, r, i) {
										return t(n, e, r, i)
									})), n
								}, gr.unary = function(e) {
									return na(e, 1)
								}, gr.union = Ao, gr.unionBy = No, gr.unionWith = To, gr.uniq = function(e) {
									return e && e.length ? zi(e) : []
								}, gr.uniqBy = function(e, t) {
									return e && e.length ? zi(e, Ds(t, 2)) : []
								}, gr.uniqWith = function(t, n) {
									return n = "function" == typeof n ? n : e, t && t.length ? zi(t, e, n) : []
								}, gr.unset = function(e, t) {
									return null == e || $i(e, t)
								}, gr.unzip = Co, gr.unzipWith = Uo, gr.update = function(e, t, n) {
									return null == e ? e : qi(e, t, Wi(n))
								}, gr.updateWith = function(t, n, r, i) {
									return i = "function" == typeof i ? i : e, null == t ? t : qi(t, n, Wi(r), i)
								}, gr.values = gc, gr.valuesIn = function(e) {
									return null == e ? [] : Rn(e, ac(e))
								}, gr.without = Lo, gr.words = Ic, gr.wrap = function(e, t) {
									return da(Wi(t), e)
								}, gr.xor = Mo, gr.xorBy = Do, gr.xorWith = ko, gr.zip = zo, gr.zipObject = function(e, t) {
									return Vi(e || [], t || [], Ar)
								}, gr.zipObjectDeep = function(e, t) {
									return Vi(e || [], t || [], xi)
								}, gr.zipWith = $o, gr.entries = fc, gr.entriesIn = pc, gr.extend = Ja, gr.extendWith = Ya, Mc(gr, gr), gr.add = Fc, gr.attempt = Pc, gr.camelCase = bc, gr.capitalize = yc, gr.ceil = Wc, gr.clamp = function(t, n, r) {
									return r === e && (r = n, n = e), r !== e && (r = (r = Va(r)) == r ? r : 0), n !== e && (n = (n = Va(n)) == n ? n : 0), Mr(Va(t), n, r)
								}, gr.clone = function(e) {
									return Dr(e, l)
								}, gr.cloneDeep = function(e) {
									return Dr(e, c | l)
								}, gr.cloneDeepWith = function(t, n) {
									return Dr(t, c | l, n = "function" == typeof n ? n : e)
								}, gr.cloneWith = function(t, n) {
									return Dr(t, l, n = "function" == typeof n ? n : e)
								}, gr.conformsTo = function(e, t) {
									return null == t || kr(e, t, oc(t))
								}, gr.deburr = mc, gr.defaultTo = function(e, t) {
									return null == e || e != e ? t : e
								}, gr.divide = Gc, gr.endsWith = function(t, n, r) {
									t = Wa(t), n = ki(n);
									var i = t.length,
										s = r = r === e ? i : Mr(Ba(r), 0, i);
									return (r -= n.length) >= 0 && t.slice(r, s) == n
								}, gr.eq = ga, gr.escape = function(e) {
									return (e = Wa(e)) && Se.test(e) ? e.replace(Ee, Un) : e
								}, gr.escapeRegExp = function(e) {
									return (e = Wa(e)) && Ce.test(e) ? e.replace(Te, "\\$&") : e
								}, gr.every = function(t, n, r) {
									var i = va(t) ? on : Br;
									return r && Gs(t, n, r) && (n = e), i(t, Ds(n, 3))
								}, gr.find = Vo, gr.findIndex = mo, gr.findKey = function(e, t) {
									return bn(e, Ds(t, 3), Jr)
								}, gr.findLast = Fo, gr.findLastIndex = vo, gr.findLastKey = function(e, t) {
									return bn(e, Ds(t, 3), Yr)
								}, gr.floor = Jc, gr.forEach = Wo, gr.forEachRight = Go, gr.forIn = function(e, t) {
									return null == e ? e : Wr(e, Ds(t, 3), ac)
								}, gr.forInRight = function(e, t) {
									return null == e ? e : Gr(e, Ds(t, 3), ac)
								}, gr.forOwn = function(e, t) {
									return e && Jr(e, Ds(t, 3))
								}, gr.forOwnRight = function(e, t) {
									return e && Yr(e, Ds(t, 3))
								}, gr.get = tc, gr.gt = ba, gr.gte = ya, gr.has = function(e, t) {
									return null != e && Ks(e, t, ni)
								}, gr.hasIn = nc, gr.head = wo, gr.identity = Tc, gr.includes = function(e, t, n, r) {
									e = wa(e) ? e : gc(e), n = n && !r ? Ba(n) : 0;
									var i = e.length;
									return n < 0 && (n = Wn(i + n, 0)), Ma(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && mn(e, t, n) > -1
								}, gr.indexOf = function(e, t, n) {
									var r = null == e ? 0 : e.length;
									if (!r) return -1;
									var i = null == n ? 0 : Ba(n);
									return i < 0 && (i = Wn(r + i, 0)), mn(e, t, i)
								}, gr.inRange = function(t, n, r) {
									return n = Ha(n), r === e ? (r = n, n = 0) : r = Ha(r),
										function(e, t, n) {
											return e >= Gn(t, n) && e < Wn(t, n)
										}(t = Va(t), n, r)
								}, gr.invoke = sc, gr.isArguments = ma, gr.isArray = va, gr.isArrayBuffer = _a, gr.isArrayLike = wa, gr.isArrayLikeObject = ja, gr.isBoolean = function(e) {
									return !0 === e || !1 === e || Aa(e) && ei(e) == B
								}, gr.isBuffer = Ea, gr.isDate = Oa, gr.isElement = function(e) {
									return Aa(e) && 1 === e.nodeType && !Ca(e)
								}, gr.isEmpty = function(e) {
									if (null == e) return !0;
									if (wa(e) && (va(e) || "string" == typeof e || "function" == typeof e.splice || Ea(e) || ka(e) || ma(e))) return !e.length;
									var t = Bs(e);
									if (t == J || t == ne) return !e.size;
									if (Zs(e)) return !hi(e).length;
									for (var n in e)
										if (ht.call(e, n)) return !1;
									return !0
								}, gr.isEqual = function(e, t) {
									return ai(e, t)
								}, gr.isEqualWith = function(t, n, r) {
									var i = (r = "function" == typeof r ? r : e) ? r(t, n) : e;
									return i === e ? ai(t, n, e, r) : !!i
								}, gr.isError = Sa, gr.isFinite = function(e) {
									return "number" == typeof e && gn(e)
								}, gr.isFunction = Ia, gr.isInteger = Pa, gr.isLength = xa, gr.isMap = Na, gr.isMatch = function(e, t) {
									return e === t || ci(e, t, zs(t))
								}, gr.isMatchWith = function(t, n, r) {
									return r = "function" == typeof r ? r : e, ci(t, n, zs(n), r)
								}, gr.isNaN = function(e) {
									return Ta(e) && e != +e
								}, gr.isNative = function(e) {
									if (Xs(e)) throw new Qe(n);
									return ui(e)
								}, gr.isNil = function(e) {
									return null == e
								}, gr.isNull = function(e) {
									return null === e
								}, gr.isNumber = Ta, gr.isObject = Ra, gr.isObjectLike = Aa, gr.isPlainObject = Ca, gr.isRegExp = Ua, gr.isSafeInteger = function(e) {
									return Pa(e) && e >= -C && e <= C
								}, gr.isSet = La, gr.isString = Ma, gr.isSymbol = Da, gr.isTypedArray = ka, gr.isUndefined = function(t) {
									return t === e
								}, gr.isWeakMap = function(e) {
									return Aa(e) && Bs(e) == oe
								}, gr.isWeakSet = function(e) {
									return Aa(e) && ei(e) == ae
								}, gr.join = function(e, t) {
									return null == e ? "" : En.call(e, t)
								}, gr.kebabCase = vc, gr.last = So, gr.lastIndexOf = function(t, n, r) {
									var i = null == t ? 0 : t.length;
									if (!i) return -1;
									var s = i;
									return r !== e && (s = (s = Ba(r)) < 0 ? Wn(i + s, 0) : Gn(s, i - 1)), n == n ? function(e, t, n) {
										for (var r = n + 1; r--;)
											if (e[r] === t) return r;
										return r
									}(t, n, s) : yn(t, _n, s, !0)
								}, gr.lowerCase = _c, gr.lowerFirst = wc, gr.lt = za, gr.lte = $a, gr.max = function(t) {
									return t && t.length ? Kr(t, Tc, ti) : e
								}, gr.maxBy = function(t, n) {
									return t && t.length ? Kr(t, Ds(n, 2), ti) : e
								}, gr.mean = function(e) {
									return wn(e, Tc)
								}, gr.meanBy = function(e, t) {
									return wn(e, Ds(t, 2))
								}, gr.min = function(t) {
									return t && t.length ? Kr(t, Tc, fi) : e
								}, gr.minBy = function(t, n) {
									return t && t.length ? Kr(t, Ds(n, 2), fi) : e
								}, gr.stubArray = Kc, gr.stubFalse = Vc, gr.stubObject = function() {
									return {}
								}, gr.stubString = function() {
									return ""
								}, gr.stubTrue = function() {
									return !0
								}, gr.multiply = Yc, gr.nth = function(t, n) {
									return t && t.length ? mi(t, Ba(n)) : e
								}, gr.noConflict = function() {
									return Bt._ === this && (Bt._ = bt), this
								}, gr.noop = Dc, gr.now = ta, gr.pad = function(e, t, n) {
									e = Wa(e);
									var r = (t = Ba(t)) ? qn(e) : 0;
									if (!t || r >= t) return e;
									var i = (t - r) / 2;
									return vs(Vt(i), n) + e + vs(Kt(i), n)
								}, gr.padEnd = function(e, t, n) {
									e = Wa(e);
									var r = (t = Ba(t)) ? qn(e) : 0;
									return t && r < t ? e + vs(t - r, n) : e
								}, gr.padStart = function(e, t, n) {
									e = Wa(e);
									var r = (t = Ba(t)) ? qn(e) : 0;
									return t && r < t ? vs(t - r, n) + e : e
								}, gr.parseInt = function(e, t, n) {
									return n || null == t ? t = 0 : t && (t = +t), Yn(Wa(e).replace(Ue, ""), t || 0)
								}, gr.random = function(t, n, r) {
									if (r && "boolean" != typeof r && Gs(t, n, r) && (n = r = e), r === e && ("boolean" == typeof n ? (r = n, n = e) : "boolean" == typeof t && (r = t, t = e)), t === e && n === e ? (t = 0, n = 1) : (t = Ha(t), n === e ? (n = t, t = 0) : n = Ha(n)), t > n) {
										var i = t;
										t = n, n = i
									}
									if (r || t % 1 || n % 1) {
										var s = Xn();
										return Gn(t + s * (n - t + zt("1e-" + ((s + "").length - 1))), n)
									}
									return Ei(t, n)
								}, gr.reduce = function(e, t, n) {
									var r = va(e) ? dn : On,
										i = arguments.length < 3;
									return r(e, Ds(t, 4), n, i, qr)
								}, gr.reduceRight = function(e, t, n) {
									var r = va(e) ? fn : On,
										i = arguments.length < 3;
									return r(e, Ds(t, 4), n, i, Hr)
								}, gr.repeat = function(t, n, r) {
									return n = (r ? Gs(t, n, r) : n === e) ? 1 : Ba(n), Oi(Wa(t), n)
								}, gr.replace = function() {
									var e = arguments,
										t = Wa(e[0]);
									return e.length < 3 ? t : t.replace(e[1], e[2])
								}, gr.result = function(t, n, r) {
									var i = -1,
										s = (n = Gi(n, t)).length;
									for (s || (s = 1, t = e); ++i < s;) {
										var o = null == t ? e : t[ho(n[i])];
										o === e && (i = s, o = r), t = Ia(o) ? o.call(t) : o
									}
									return t
								}, gr.round = Xc, gr.runInContext = g, gr.sample = function(e) {
									return (va(e) ? Ir : Ii)(e)
								}, gr.size = function(e) {
									if (null == e) return 0;
									if (wa(e)) return Ma(e) ? qn(e) : e.length;
									var t = Bs(e);
									return t == J || t == ne ? e.size : hi(e).length
								}, gr.snakeCase = jc, gr.some = function(t, n, r) {
									var i = va(t) ? pn : Ci;
									return r && Gs(t, n, r) && (n = e), i(t, Ds(n, 3))
								}, gr.sortedIndex = function(e, t) {
									return Ui(e, t)
								}, gr.sortedIndexBy = function(e, t, n) {
									return Li(e, t, Ds(n, 2))
								}, gr.sortedIndexOf = function(e, t) {
									var n = null == e ? 0 : e.length;
									if (n) {
										var r = Ui(e, t);
										if (r < n && ga(e[r], t)) return r
									}
									return -1
								}, gr.sortedLastIndex = function(e, t) {
									return Ui(e, t, !0)
								}, gr.sortedLastIndexBy = function(e, t, n) {
									return Li(e, t, Ds(n, 2), !0)
								}, gr.sortedLastIndexOf = function(e, t) {
									if (null != e && e.length) {
										var n = Ui(e, t, !0) - 1;
										if (ga(e[n], t)) return n
									}
									return -1
								}, gr.startCase = Ec, gr.startsWith = function(e, t, n) {
									return e = Wa(e), n = null == n ? 0 : Mr(Ba(n), 0, e.length), t = ki(t), e.slice(n, n + t.length) == t
								}, gr.subtract = Zc, gr.sum = function(e) {
									return e && e.length ? Sn(e, Tc) : 0
								}, gr.sumBy = function(e, t) {
									return e && e.length ? Sn(e, Ds(t, 2)) : 0
								}, gr.template = function(t, n, r) {
									var s = gr.templateSettings;
									r && Gs(t, n, r) && (n = e), t = Wa(t), n = Ya({}, n, s, Ps);
									var o, a, c = Ya({}, n.imports, s.imports, Ps),
										u = oc(c),
										l = Rn(c, u),
										h = 0,
										d = n.interpolate || Ye,
										f = "__p += '",
										p = rt((n.escape || Ye).source + "|" + d.source + "|" + (d === xe ? He : Ye).source + "|" + (n.evaluate || Ye).source + "|$", "g"),
										g = "//# sourceURL=" + (ht.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Lt + "]") + "\n";
									t.replace(p, (function(e, n, r, i, s, c) {
										return r || (r = i), f += t.slice(h, c).replace(Xe, Ln), n && (o = !0, f += "' +\n__e(" + n + ") +\n'"), s && (a = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), h = c + e.length, e
									})), f += "';\n";
									var b = ht.call(n, "variable") && n.variable;
									if (b) {
										if ($e.test(b)) throw new Qe(i)
									} else f = "with (obj) {\n" + f + "\n}\n";
									f = (a ? f.replace(ve, "") : f).replace(_e, "$1").replace(we, "$1;"), f = "function(" + (b || "obj") + ") {\n" + (b ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
									var y = Pc((function() {
										return et(u, g + "return " + f).apply(e, l)
									}));
									if (y.source = f, Sa(y)) throw y;
									return y
								}, gr.times = function(e, t) {
									if ((e = Ba(e)) < 1 || e > C) return [];
									var n = M,
										r = Gn(e, M);
									t = Ds(t), e -= M;
									for (var i = In(r, t); ++n < e;) t(n);
									return i
								}, gr.toFinite = Ha, gr.toInteger = Ba, gr.toLength = Ka, gr.toLower = function(e) {
									return Wa(e).toLowerCase()
								}, gr.toNumber = Va, gr.toSafeInteger = function(e) {
									return e ? Mr(Ba(e), -C, C) : 0 === e ? e : 0
								}, gr.toString = Wa, gr.toUpper = function(e) {
									return Wa(e).toUpperCase()
								}, gr.trim = function(t, n, r) {
									if ((t = Wa(t)) && (r || n === e)) return Pn(t);
									if (!t || !(n = ki(n))) return t;
									var i = Hn(t),
										s = Hn(n);
									return Yi(i, Nn(i, s), Tn(i, s) + 1).join("")
								}, gr.trimEnd = function(t, n, r) {
									if ((t = Wa(t)) && (r || n === e)) return t.slice(0, Bn(t) + 1);
									if (!t || !(n = ki(n))) return t;
									var i = Hn(t);
									return Yi(i, 0, Tn(i, Hn(n)) + 1).join("")
								}, gr.trimStart = function(t, n, r) {
									if ((t = Wa(t)) && (r || n === e)) return t.replace(Ue, "");
									if (!t || !(n = ki(n))) return t;
									var i = Hn(t);
									return Yi(i, Nn(i, Hn(n))).join("")
								}, gr.truncate = function(t, n) {
									var r = I,
										i = P;
									if (Ra(n)) {
										var s = "separator" in n ? n.separator : s;
										r = "length" in n ? Ba(n.length) : r, i = "omission" in n ? ki(n.omission) : i
									}
									var o = (t = Wa(t)).length;
									if (Mn(t)) {
										var a = Hn(t);
										o = a.length
									}
									if (r >= o) return t;
									var c = r - qn(i);
									if (c < 1) return i;
									var u = a ? Yi(a, 0, c).join("") : t.slice(0, c);
									if (s === e) return u + i;
									if (a && (c += u.length - c), Ua(s)) {
										if (t.slice(c).search(s)) {
											var l, h = u;
											for (s.global || (s = rt(s.source, Wa(Be.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var d = l.index;
											u = u.slice(0, d === e ? c : d)
										}
									} else if (t.indexOf(ki(s), c) != c) {
										var f = u.lastIndexOf(s);
										f > -1 && (u = u.slice(0, f))
									}
									return u + i
								}, gr.unescape = function(e) {
									return (e = Wa(e)) && Oe.test(e) ? e.replace(je, Kn) : e
								}, gr.uniqueId = function(e) {
									var t = ++dt;
									return Wa(e) + t
								}, gr.upperCase = Oc, gr.upperFirst = Sc, gr.each = Wo, gr.eachRight = Go, gr.first = wo, Mc(gr, function() {
									var e = {};
									return Jr(gr, (function(t, n) {
										ht.call(gr.prototype, n) || (e[n] = t)
									})), e
								}(), {
									chain: !1
								}), gr.VERSION = "4.17.21", rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
									gr[e].placeholder = gr
								})), rn(["drop", "take"], (function(t, n) {
									vr.prototype[t] = function(r) {
										r = r === e ? 1 : Wn(Ba(r), 0);
										var i = this.__filtered__ && !n ? new vr(this) : this.clone();
										return i.__filtered__ ? i.__takeCount__ = Gn(r, i.__takeCount__) : i.__views__.push({
											size: Gn(r, M),
											type: t + (i.__dir__ < 0 ? "Right" : "")
										}), i
									}, vr.prototype[t + "Right"] = function(e) {
										return this.reverse()[t](e).reverse()
									}
								})), rn(["filter", "map", "takeWhile"], (function(e, t) {
									var n = t + 1,
										r = n == A || 3 == n;
									vr.prototype[e] = function(e) {
										var t = this.clone();
										return t.__iteratees__.push({
											iteratee: Ds(e, 3),
											type: n
										}), t.__filtered__ = t.__filtered__ || r, t
									}
								})), rn(["head", "last"], (function(e, t) {
									var n = "take" + (t ? "Right" : "");
									vr.prototype[e] = function() {
										return this[n](1).value()[0]
									}
								})), rn(["initial", "tail"], (function(e, t) {
									var n = "drop" + (t ? "" : "Right");
									vr.prototype[e] = function() {
										return this.__filtered__ ? new vr(this) : this[n](1)
									}
								})), vr.prototype.compact = function() {
									return this.filter(Tc)
								}, vr.prototype.find = function(e) {
									return this.filter(e).head()
								}, vr.prototype.findLast = function(e) {
									return this.reverse().find(e)
								}, vr.prototype.invokeMap = Si((function(e, t) {
									return "function" == typeof e ? new vr(this) : this.map((function(n) {
										return si(n, e, t)
									}))
								})), vr.prototype.reject = function(e) {
									return this.filter(la(Ds(e)))
								}, vr.prototype.slice = function(t, n) {
									t = Ba(t);
									var r = this;
									return r.__filtered__ && (t > 0 || n < 0) ? new vr(r) : (t < 0 ? r = r.takeRight(-t) : t && (r = r.drop(t)), n !== e && (r = (n = Ba(n)) < 0 ? r.dropRight(-n) : r.take(n - t)), r)
								}, vr.prototype.takeRightWhile = function(e) {
									return this.reverse().takeWhile(e).reverse()
								}, vr.prototype.toArray = function() {
									return this.take(M)
								}, Jr(vr.prototype, (function(t, n) {
									var r = /^(?:filter|find|map|reject)|While$/.test(n),
										i = /^(?:head|last)$/.test(n),
										s = gr[i ? "take" + ("last" == n ? "Right" : "") : n],
										o = i || /^find/.test(n);
									s && (gr.prototype[n] = function() {
										var n = this.__wrapped__,
											a = i ? [1] : arguments,
											c = n instanceof vr,
											u = a[0],
											l = c || va(n),
											h = function(e) {
												var t = s.apply(gr, hn([e], a));
												return i && d ? t[0] : t
											};
										l && r && "function" == typeof u && 1 != u.length && (c = l = !1);
										var d = this.__chain__,
											f = !!this.__actions__.length,
											p = o && !d,
											g = c && !f;
										if (!o && l) {
											n = g ? n : new vr(this);
											var b = t.apply(n, a);
											return b.__actions__.push({
												func: Ho,
												args: [h],
												thisArg: e
											}), new mr(b, d)
										}
										return p && g ? t.apply(this, a) : (b = this.thru(h), p ? i ? b.value()[0] : b.value() : b)
									})
								})), rn(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
									var t = ot[e],
										n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
										r = /^(?:pop|shift)$/.test(e);
									gr.prototype[e] = function() {
										var e = arguments;
										if (r && !this.__chain__) {
											var i = this.value();
											return t.apply(va(i) ? i : [], e)
										}
										return this[n]((function(n) {
											return t.apply(va(n) ? n : [], e)
										}))
									}
								})), Jr(vr.prototype, (function(e, t) {
									var n = gr[t];
									if (n) {
										var r = n.name + "";
										ht.call(or, r) || (or[r] = []), or[r].push({
											name: t,
											func: n
										})
									}
								})), or[gs(e, p).name] = [{
									name: "wrapper",
									func: e
								}], vr.prototype.clone = function() {
									var e = new vr(this.__wrapped__);
									return e.__actions__ = is(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = is(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = is(this.__views__), e
								}, vr.prototype.reverse = function() {
									if (this.__filtered__) {
										var e = new vr(this);
										e.__dir__ = -1, e.__filtered__ = !0
									} else(e = this.clone()).__dir__ *= -1;
									return e
								}, vr.prototype.value = function() {
									var e = this.__wrapped__.value(),
										t = this.__dir__,
										n = va(e),
										r = t < 0,
										i = n ? e.length : 0,
										s = function(e, t, n) {
											for (var r = -1, i = n.length; ++r < i;) {
												var s = n[r],
													o = s.size;
												switch (s.type) {
													case "drop":
														e += o;
														break;
													case "dropRight":
														t -= o;
														break;
													case "take":
														t = Gn(t, e + o);
														break;
													case "takeRight":
														e = Wn(e, t - o)
												}
											}
											return {
												start: e,
												end: t
											}
										}(0, i, this.__views__),
										o = s.start,
										a = s.end,
										c = a - o,
										u = r ? a : o - 1,
										l = this.__iteratees__,
										h = l.length,
										d = 0,
										f = Gn(c, this.__takeCount__);
									if (!n || !r && i == c && f == c) return Bi(e, this.__actions__);
									var p = [];
									e: for (; c-- && d < f;) {
										for (var g = -1, b = e[u += t]; ++g < h;) {
											var y = l[g],
												m = y.iteratee,
												v = y.type,
												_ = m(b);
											if (v == N) b = _;
											else if (!_) {
												if (v == A) continue e;
												break e
											}
										}
										p[d++] = b
									}
									return p
								}, gr.prototype.at = Bo, gr.prototype.chain = function() {
									return qo(this)
								}, gr.prototype.commit = function() {
									return new mr(this.value(), this.__chain__)
								}, gr.prototype.next = function() {
									this.__values__ === e && (this.__values__ = qa(this.value()));
									var t = this.__index__ >= this.__values__.length;
									return {
										done: t,
										value: t ? e : this.__values__[this.__index__++]
									}
								}, gr.prototype.plant = function(t) {
									for (var n, r = this; r instanceof yr;) {
										var i = po(r);
										i.__index__ = 0, i.__values__ = e, n ? s.__wrapped__ = i : n = i;
										var s = i;
										r = r.__wrapped__
									}
									return s.__wrapped__ = t, n
								}, gr.prototype.reverse = function() {
									var t = this.__wrapped__;
									if (t instanceof vr) {
										var n = t;
										return this.__actions__.length && (n = new vr(this)), (n = n.reverse()).__actions__.push({
											func: Ho,
											args: [Ro],
											thisArg: e
										}), new mr(n, this.__chain__)
									}
									return this.thru(Ro)
								}, gr.prototype.toJSON = gr.prototype.valueOf = gr.prototype.value = function() {
									return Bi(this.__wrapped__, this.__actions__)
								}, gr.prototype.first = gr.prototype.head, Pt && (gr.prototype[Pt] = function() {
									return this
								}), gr
							}();
						Vt ? ((Vt.exports = Vn)._ = Vn, Kt._ = Vn) : Bt._ = Vn
					}.call(y);
				var v = Object.defineProperty,
					_ = Object.defineProperties,
					w = Object.getOwnPropertyDescriptors,
					j = Object.getOwnPropertySymbols,
					E = Object.prototype.hasOwnProperty,
					O = Object.prototype.propertyIsEnumerable,
					S = (e, t, n) => t in e ? v(e, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n,
					I = (e, t) => {
						for (var n in t || (t = {})) E.call(t, n) && S(e, n, t[n]);
						if (j)
							for (var n of j(t)) O.call(t, n) && S(e, n, t[n]);
						return e
					},
					P = (e, t) => _(e, w(t));

				function x(e, t, n) {
					let r;
					const i = R(e);
					return t.rpcMap && (r = t.rpcMap[i]), r || (r = `${f}?chainId=eip155:${i}&projectId=${n}`), r
				}

				function R(e) {
					return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e)
				}

				function A(e) {
					var t, n, r, s;
					const o = {};
					if (!Object(i.W)(e)) return o;
					for (const [a, c] of Object.entries(e)) {
						const e = Object(i.D)(a) ? [a] : c.chains,
							u = c.methods || [],
							l = c.events || [],
							h = c.rpcMap || {},
							d = Object(i.kb)(a);
						o[d] = P(I(I({}, o[d]), c), {
							chains: Object(i.hb)(e, null == (t = o[d]) ? void 0 : t.chains),
							methods: Object(i.hb)(u, null == (n = o[d]) ? void 0 : n.methods),
							events: Object(i.hb)(l, null == (r = o[d]) ? void 0 : r.events),
							rpcMap: I(I({}, h), null == (s = o[d]) ? void 0 : s.rpcMap)
						})
					}
					return o
				}
				const N = (e, t) => {
					const r = s => {
						s.request !== t.request || s.topic !== t.topic || (e.events.removeListener("session_request_sent", r), async function(e, t) {
							try {
								const r = await t.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
								if (!r) return;
								const s = "string" == typeof r ? JSON.parse(r) : r,
									o = null == s ? void 0 : s.href;
								if ("string" != typeof o) return;
								o.endsWith("/") && o.slice(0, -1);
								const a = `${o}/wc?requestId=${e.id}&sessionTopic=${e.topic}`,
									c = Object(i.u)();
								c === i.b.browser ? window.open(a, "_self", "noreferrer noopener") : c === i.b.reactNative && await n(! function() {
									var e = new Error("Cannot find module 'react-native'");
									throw e.code = "MODULE_NOT_FOUND", e
								}()).Linking.openURL(a)
							} catch (r) {
								console.error(r)
							}
						}(t, e.core.storage))
					};
					e.on("session_request_sent", r)
				};
				class T {
					constructor(e) {
						this.name = "polkadot", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId;
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					request(e) {
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					setDefaultChain(e, t) {
						if (this.chainId = e, !this.httpProviders[e]) {
							const n = t || x(`${this.name}:${e}`, this.namespace);
							if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
							this.setHttpProvider(e, n)
						}
						this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							var n;
							e[t] = this.createHttpProvider(t, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
						}), e
					}
					getHttpProvider() {
						const e = `${this.name}:${this.chainId}`,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProvider(e, t) {
						const n = t || x(e, this.namespace);
						return typeof n > "u" ? void 0 : new a.a(new o.b(n))
					}
				}
				class C {
					constructor(e) {
						this.name = "eip155", this.namespace = e.namespace, this.client = e.client, this.events = e.events, this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
					}
					async request(e) {
						var t;
						switch (e.request.method) {
							case "eth_requestAccounts":
							case "eth_accounts":
								return this.getAccounts();
							case "wallet_switchEthereumChain":
								return this.handleSwitchChain(e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0"), null;
							case "eth_chainId":
								return parseInt(this.getDefaultChain())
						}
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), await this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					setDefaultChain(e, t) {
						const n = R(e);
						if (!this.httpProviders[n]) {
							const e = t || x(`${this.name}:${n}`, this.namespace, this.client.core.projectId);
							if (!e) throw new Error(`No RPC url provided for chainId: ${n}`);
							this.setHttpProvider(n, e)
						}
						this.chainId = n, this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${n}`)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId.toString();
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					createHttpProvider(e, t) {
						const n = t || x(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
						return typeof n > "u" ? void 0 : new a.a(new o.a(n))
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							var n;
							const r = R(t);
							e[r] = this.createHttpProvider(r, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
						}), e
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
					}
					getHttpProvider() {
						const e = this.chainId,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					handleSwitchChain(e) {
						const t = parseInt(e, 16);
						(function(e, t) {
							if (!t.includes(e)) throw new Error(`Chain '${e}' not approved. Please use one of the following: ${t.toString()}`)
						})(`${this.name}:${t}`, this.namespace.chains), this.setDefaultChain(`${t}`)
					}
				}
				class U {
					constructor(e) {
						this.name = "solana", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					request(e) {
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					setDefaultChain(e, t) {
						if (!this.httpProviders[e]) {
							const n = t || x(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
							if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
							this.setHttpProvider(e, n)
						}
						this.chainId = e, this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId;
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							var n;
							e[t] = this.createHttpProvider(t, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
						}), e
					}
					getHttpProvider() {
						const e = `${this.name}:${this.chainId}`,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProvider(e, t) {
						const n = t || x(e, this.namespace, this.client.core.projectId);
						return typeof n > "u" ? void 0 : new a.a(new o.b(n))
					}
				}
				class L {
					constructor(e) {
						this.name = "cosmos", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId;
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					request(e) {
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					setDefaultChain(e, t) {
						if (this.chainId = e, !this.httpProviders[e]) {
							const n = t || x(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
							if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
							this.setHttpProvider(e, n)
						}
						this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							var n;
							e[t] = this.createHttpProvider(t, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
						}), e
					}
					getHttpProvider() {
						const e = `${this.name}:${this.chainId}`,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProvider(e, t) {
						const n = t || x(e, this.namespace, this.client.core.projectId);
						return typeof n > "u" ? void 0 : new a.a(new o.b(n))
					}
				}
				class M {
					constructor(e) {
						this.name = "cip34", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId;
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					request(e) {
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					setDefaultChain(e, t) {
						if (this.chainId = e, !this.httpProviders[e]) {
							const n = t || this.getCardanoRPCUrl(e);
							if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
							this.setHttpProvider(e, n)
						}
						this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							const n = this.getCardanoRPCUrl(t);
							e[t] = this.createHttpProvider(t, n)
						}), e
					}
					getHttpProvider() {
						const e = `${this.name}:${this.chainId}`,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					getCardanoRPCUrl(e) {
						const t = this.namespace.rpcMap;
						if (t) return t[e]
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProvider(e, t) {
						const n = t || this.getCardanoRPCUrl(e);
						return typeof n > "u" ? void 0 : new a.a(new o.b(n))
					}
				}
				class D {
					constructor(e) {
						this.name = "elrond", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					request(e) {
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					setDefaultChain(e, t) {
						if (!this.httpProviders[e]) {
							const n = t || x(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
							if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
							this.setHttpProvider(e, n)
						}
						this.chainId = e, this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId;
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							var n;
							e[t] = this.createHttpProvider(t, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
						}), e
					}
					getHttpProvider() {
						const e = `${this.name}:${this.chainId}`,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProvider(e, t) {
						const n = t || x(e, this.namespace, this.client.core.projectId);
						return typeof n > "u" ? void 0 : new a.a(new o.b(n))
					}
				}
				class k {
					constructor(e) {
						this.name = "multiversx", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
					}
					updateNamespace(e) {
						this.namespace = Object.assign(this.namespace, e)
					}
					requestAccounts() {
						return this.getAccounts()
					}
					request(e) {
						return this.namespace.methods.includes(e.request.method) ? (N(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request)
					}
					setDefaultChain(e, t) {
						if (!this.httpProviders[e]) {
							const n = t || x(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
							if (!n) throw new Error(`No RPC url provided for chainId: ${e}`);
							this.setHttpProvider(e, n)
						}
						this.chainId = e, this.events.emit(p.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
					}
					getDefaultChain() {
						if (this.chainId) return this.chainId;
						if (this.namespace.defaultChain) return this.namespace.defaultChain;
						const e = this.namespace.chains[0];
						if (!e) throw new Error("ChainId not found");
						return e.split(":")[1]
					}
					getAccounts() {
						const e = this.namespace.accounts;
						return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
					}
					createHttpProviders() {
						const e = {};
						return this.namespace.chains.forEach(t => {
							var n;
							e[t] = this.createHttpProvider(t, null == (n = this.namespace.rpcMap) ? void 0 : n[t])
						}), e
					}
					getHttpProvider() {
						const e = `${this.name}:${this.chainId}`,
							t = this.httpProviders[e];
						if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
						return t
					}
					setHttpProvider(e, t) {
						const n = this.createHttpProvider(e, t);
						n && (this.httpProviders[e] = n)
					}
					createHttpProvider(e, t) {
						const n = t || x(e, this.namespace, this.client.core.projectId);
						return typeof n > "u" ? void 0 : new a.a(new o.b(n))
					}
				}
				var z = Object.defineProperty,
					$ = Object.defineProperties,
					q = Object.getOwnPropertyDescriptors,
					H = Object.getOwnPropertySymbols,
					B = Object.prototype.hasOwnProperty,
					K = Object.prototype.propertyIsEnumerable,
					V = (e, t, n) => t in e ? z(e, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n,
					F = (e, t) => {
						for (var n in t || (t = {})) B.call(t, n) && V(e, n, t[n]);
						if (H)
							for (var n of H(t)) K.call(t, n) && V(e, n, t[n]);
						return e
					},
					W = (e, t) => $(e, q(t));
				class G {
					constructor(e) {
						this.events = new u.a, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.providerOpts = e, this.logger = typeof(null == e ? void 0 : e.logger) < "u" && "string" != typeof(null == e ? void 0 : e.logger) ? e.logger : Object(s.pino)(Object(s.getDefaultLoggerOptions)({
							level: (null == e ? void 0 : e.logger) || l
						}))
					}
					static async init(e) {
						const t = new G(e);
						return await t.initialize(), t
					}
					async request(e, t) {
						const [n, r] = this.validateChain(t);
						if (!this.session) throw new Error("Please call connect() before request()");
						return await this.getProvider(n).request({
							request: F({}, e),
							chainId: `${n}:${r}`,
							topic: this.session.topic
						})
					}
					sendAsync(e, t, n) {
						this.request(e, n).then(e => t(null, e)).catch(e => t(e, void 0))
					}
					async enable() {
						if (!this.client) throw new Error("Sign Client not initialized");
						return this.session || await this.connect({
							namespaces: this.namespaces,
							optionalNamespaces: this.optionalNamespaces,
							sessionProperties: this.sessionProperties
						}), await this.requestAccounts()
					}
					async disconnect() {
						var e;
						if (!this.session) throw new Error("Please call connect() before enable()");
						await this.client.disconnect({
							topic: null == (e = this.session) ? void 0 : e.topic,
							reason: Object(i.z)("USER_DISCONNECTED")
						}), await this.cleanup()
					}
					async connect(e) {
						if (!this.client) throw new Error("Sign Client not initialized");
						if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
					}
					on(e, t) {
						this.events.on(e, t)
					}
					once(e, t) {
						this.events.once(e, t)
					}
					removeListener(e, t) {
						this.events.removeListener(e, t)
					}
					off(e, t) {
						this.events.off(e, t)
					}
					get isWalletConnect() {
						return !0
					}
					async pair(e) {
						this.shouldAbortPairingAttempt = !1;
						let t = 0;
						do {
							if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
							if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
							const {
								uri: n,
								approval: i
							} = await this.client.connect({
								pairingTopic: e,
								requiredNamespaces: this.namespaces,
								optionalNamespaces: this.optionalNamespaces,
								sessionProperties: this.sessionProperties
							});
							n && (this.uri = n, this.events.emit("display_uri", n)), await i().then(e => {
								this.session = e
							}).catch(e => {
								if (e.message !== r.a) throw e;
								t++
							})
						} while (!this.session);
						return this.onConnect(), this.session
					}
					setDefaultChain(e, t) {
						try {
							const [n, r] = this.validateChain(e);
							this.getProvider(n).setDefaultChain(r, t)
						} catch (n) {
							if (!/Please call connect/.test(n.message)) throw n
						}
					}
					async cleanupPendingPairings() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						this.logger.info("Cleaning up inactive pairings...");
						const t = this.client.pairing.getAll();
						if (Object(i.N)(t)) {
							for (const n of t) e.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
							this.logger.info(`Inactive pairings cleared: ${t.length}`)
						}
					}
					abortPairingAttempt() {
						this.shouldAbortPairingAttempt = !0
					}
					async checkStorage() {
						if (this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
							const e = this.client.session.keys.length - 1;
							this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
						}
					}
					async initialize() {
						this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
					}
					async createClient() {
						this.client = this.providerOpts.client || await r.b.init({
							logger: this.providerOpts.logger || l,
							relayUrl: this.providerOpts.relayUrl || h,
							projectId: this.providerOpts.projectId,
							metadata: this.providerOpts.metadata,
							storageOptions: this.providerOpts.storageOptions,
							name: this.providerOpts.name
						}), this.logger.trace("SignClient Initialized")
					}
					createProviders() {
						if (!this.client) throw new Error("Sign Client not initialized");
						if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
						[...new Set(Object.keys(this.session.namespaces).map(e => Object(i.kb)(e)))].forEach(e => {
							if (!this.session) return;
							const t = function(e, t) {
									const n = Object.keys(t.namespaces).filter(t => t.includes(e));
									if (!n.length) return [];
									const r = [];
									return n.forEach(e => {
										const n = t.namespaces[e].accounts;
										r.push(...n)
									}), r
								}(e, this.session),
								n = function(e) {
									return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
								}(t),
								r = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									const n = A(e),
										r = A(t);
									return m.exports.merge(n, r)
								}(this.namespaces, this.optionalNamespaces),
								i = W(F({}, r[e]), {
									accounts: t,
									chains: n
								});
							switch (e) {
								case "eip155":
									this.rpcProviders[e] = new C({
										client: this.client,
										namespace: i,
										events: this.events
									});
									break;
								case "solana":
									this.rpcProviders[e] = new U({
										client: this.client,
										namespace: i,
										events: this.events
									});
									break;
								case "cosmos":
									this.rpcProviders[e] = new L({
										client: this.client,
										namespace: i,
										events: this.events
									});
									break;
								case "polkadot":
									this.rpcProviders[e] = new T({
										client: this.client,
										namespace: i,
										events: this.events
									});
									break;
								case "cip34":
									this.rpcProviders[e] = new M({
										client: this.client,
										namespace: i,
										events: this.events
									});
									break;
								case "elrond":
									this.rpcProviders[e] = new D({
										client: this.client,
										namespace: i,
										events: this.events
									});
									break;
								case "multiversx":
									this.rpcProviders[e] = new k({
										client: this.client,
										namespace: i,
										events: this.events
									})
							}
						})
					}
					registerEventListeners() {
						if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
						this.client.on("session_ping", e => {
							this.events.emit("session_ping", e)
						}), this.client.on("session_event", e => {
							const {
								params: t
							} = e, {
								event: n
							} = t;
							"accountsChanged" === n.name ? this.events.emit("accountsChanged", n.data) : "chainChanged" === n.name ? this.onChainChanged(t.chainId) : this.events.emit(n.name, n.data), this.events.emit("session_event", e)
						}), this.client.on("session_update", e => {
							let {
								topic: t,
								params: n
							} = e;
							var r;
							const {
								namespaces: i
							} = n, s = null == (r = this.client) ? void 0 : r.session.get(t);
							this.session = W(F({}, s), {
								namespaces: i
							}), this.onSessionUpdate(), this.events.emit("session_update", {
								topic: t,
								params: n
							})
						}), this.client.on("session_delete", async e => {
							await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", W(F({}, Object(i.z)("USER_DISCONNECTED")), {
								data: e.topic
							}))
						}), this.on(p.DEFAULT_CHAIN_CHANGED, e => {
							this.onChainChanged(e, !0)
						})
					}
					getProvider(e) {
						if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
						return this.rpcProviders[e]
					}
					onSessionUpdate() {
						Object.keys(this.rpcProviders).forEach(e => {
							var t;
							this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
						})
					}
					setNamespaces(e) {
						const {
							namespaces: t,
							optionalNamespaces: n,
							sessionProperties: r
						} = e;
						if (!t || !Object.keys(t).length) throw new Error("Namespaces must be not empty");
						this.namespaces = t, this.optionalNamespaces = n, this.sessionProperties = r, this.persist("namespaces", t), this.persist("optionalNamespaces", n)
					}
					validateChain(e) {
						const [t, n] = (null == e ? void 0 : e.split(":")) || ["", ""];
						if (t && !Object.keys(this.namespaces).map(e => Object(i.kb)(e)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
						if (t && n) return [t, n];
						const r = Object(i.kb)(Object.keys(this.namespaces)[0]);
						return [r, this.rpcProviders[r].getDefaultChain()]
					}
					async requestAccounts() {
						const [e] = this.validateChain();
						return await this.getProvider(e).requestAccounts()
					}
					onChainChanged(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						var n;
						const [r, i] = this.validateChain(e);
						t || this.getProvider(r).setDefaultChain(i), (null != (n = this.namespaces[r]) ? n : this.namespaces[`${r}:${i}`]).defaultChain = i, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i)
					}
					onConnect() {
						this.createProviders(), this.events.emit("connect", {
							session: this.session
						})
					}
					async cleanup() {
						this.session = void 0, await this.cleanupPendingPairings({
							deletePairings: !0
						})
					}
					persist(e, t) {
						this.client.core.storage.setItem(`${d}/${e}`, t)
					}
					async getFromStore(e) {
						return await this.client.core.storage.getItem(`${d}/${e}`)
					}
				}
				const J = G
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@walletconnect/utils/dist/index.es.js": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "a", (function() {
					return m
				})), n.d(t, "b", (function() {
					return F
				})), n.d(t, "c", (function() {
					return j
				})), n.d(t, "d", (function() {
					return le
				})), n.d(t, "e", (function() {
					return ie
				})), n.d(t, "f", (function() {
					return se
				})), n.d(t, "g", (function() {
					return T
				})), n.d(t, "h", (function() {
					return U
				})), n.d(t, "i", (function() {
					return R
				})), n.d(t, "j", (function() {
					return L
				})), n.d(t, "k", (function() {
					return C
				})), n.d(t, "l", (function() {
					return de
				})), n.d(t, "m", (function() {
					return ce
				})), n.d(t, "n", (function() {
					return ee
				})), n.d(t, "o", (function() {
					return ae
				})), n.d(t, "p", (function() {
					return Se
				})), n.d(t, "q", (function() {
					return P
				})), n.d(t, "r", (function() {
					return x
				})), n.d(t, "s", (function() {
					return g
				})), n.d(t, "t", (function() {
					return Z
				})), n.d(t, "u", (function() {
					return X
				})), n.d(t, "v", (function() {
					return Te
				})), n.d(t, "w", (function() {
					return be
				})), n.d(t, "x", (function() {
					return ge
				})), n.d(t, "y", (function() {
					return Pe
				})), n.d(t, "z", (function() {
					return Ce
				})), n.d(t, "A", (function() {
					return A
				})), n.d(t, "B", (function() {
					return N
				})), n.d(t, "C", (function() {
					return Y
				})), n.d(t, "D", (function() {
					return xe
				})), n.d(t, "E", (function() {
					return ct
				})), n.d(t, "F", (function() {
					return he
				})), n.d(t, "G", (function() {
					return G
				})), n.d(t, "H", (function() {
					return He
				})), n.d(t, "I", (function() {
					return J
				})), n.d(t, "J", (function() {
					return ze
				})), n.d(t, "K", (function() {
					return Be
				})), n.d(t, "L", (function() {
					return k
				})), n.d(t, "M", (function() {
					return Me
				})), n.d(t, "N", (function() {
					return Ue
				})), n.d(t, "O", (function() {
					return Ke
				})), n.d(t, "P", (function() {
					return tt
				})), n.d(t, "Q", (function() {
					return it
				})), n.d(t, "R", (function() {
					return Qe
				})), n.d(t, "S", (function() {
					return Ye
				})), n.d(t, "T", (function() {
					return st
				})), n.d(t, "U", (function() {
					return at
				})), n.d(t, "V", (function() {
					return ot
				})), n.d(t, "W", (function() {
					return Le
				})), n.d(t, "X", (function() {
					return et
				})), n.d(t, "Y", (function() {
					return Xe
				})), n.d(t, "Z", (function() {
					return Ze
				})), n.d(t, "ab", (function() {
					return nt
				})), n.d(t, "bb", (function() {
					return lt
				})), n.d(t, "cb", (function() {
					return Je
				})), n.d(t, "db", (function() {
					return rt
				})), n.d(t, "eb", (function() {
					return De
				})), n.d(t, "fb", (function() {
					return qe
				})), n.d(t, "gb", (function() {
					return ne
				})), n.d(t, "hb", (function() {
					return fe
				})), n.d(t, "ib", (function() {
					return re
				})), n.d(t, "jb", (function() {
					return ue
				})), n.d(t, "kb", (function() {
					return Re
				})), n.d(t, "lb", (function() {
					return Oe
				})), n.d(t, "mb", (function() {
					return M
				})), n.d(t, "nb", (function() {
					return D
				}));
				n("./node_modules/core-js/modules/web.dom.iterable.js");
				var r = n("./node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js"),
					i = n("./node_modules/@stablelib/hkdf/lib/hkdf.js"),
					s = n("./node_modules/@stablelib/random/lib/random.js"),
					o = n("./node_modules/@stablelib/sha256/lib/sha256.js"),
					a = n("./node_modules/@stablelib/x25519/lib/x25519.js"),
					c = n("./node_modules/uint8arrays/cjs/src/index.js"),
					u = n("./node_modules/detect-browser/es/index.js"),
					l = n("./node_modules/@walletconnect/time/dist/cjs/index.js"),
					h = n("./node_modules/@walletconnect/window-getters/dist/cjs/index.js"),
					d = n("./node_modules/@walletconnect/window-metadata/dist/cjs/index.js"),
					f = n("./node_modules/@walletconnect/utils/node_modules/query-string/index.js"),
					p = n("./node_modules/@walletconnect/relay-api/dist/esm/index.js");

				function g(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
					const n = [];
					return Object.keys(e).forEach(r => {
						if (t.length && !t.includes(r)) return;
						const i = e[r];
						n.push(...i.accounts)
					}), n
				}

				function b(e, t) {
					return e.includes(":") ? [e] : t.chains || []
				}
				const y = "base10",
					m = "base16",
					v = "base64pad",
					_ = "utf8",
					w = 0,
					j = 1,
					E = 0,
					O = 1,
					S = 12,
					I = 32;

				function P() {
					const e = a.generateKeyPair();
					return {
						privateKey: Object(c.toString)(e.secretKey, m),
						publicKey: Object(c.toString)(e.publicKey, m)
					}
				}

				function x() {
					const e = Object(s.randomBytes)(I);
					return Object(c.toString)(e, m)
				}

				function R(e, t) {
					const n = a.sharedKey(Object(c.fromString)(e, m), Object(c.fromString)(t, m)),
						r = new i.HKDF(o.SHA256, n).expand(I);
					return Object(c.toString)(r, m)
				}

				function A(e) {
					const t = Object(o.hash)(Object(c.fromString)(e, m));
					return Object(c.toString)(t, m)
				}

				function N(e) {
					const t = Object(o.hash)(Object(c.fromString)(e, _));
					return Object(c.toString)(t, m)
				}

				function T(e) {
					return Number(Object(c.toString)(e, y))
				}

				function C(e) {
					const t = function(e) {
						return Object(c.fromString)(`${e}`, y)
					}(typeof e.type < "u" ? e.type : w);
					if (T(t) === j && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
					const n = typeof e.senderPublicKey < "u" ? Object(c.fromString)(e.senderPublicKey, m) : void 0,
						i = typeof e.iv < "u" ? Object(c.fromString)(e.iv, m) : Object(s.randomBytes)(S);
					return function(e) {
						if (T(e.type) === j) {
							if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
							return Object(c.toString)(Object(c.concat)([e.type, e.senderPublicKey, e.iv, e.sealed]), v)
						}
						return Object(c.toString)(Object(c.concat)([e.type, e.iv, e.sealed]), v)
					}({
						type: t,
						sealed: new r.ChaCha20Poly1305(Object(c.fromString)(e.symKey, m)).seal(i, Object(c.fromString)(e.message, _)),
						iv: i,
						senderPublicKey: n
					})
				}

				function U(e) {
					const t = new r.ChaCha20Poly1305(Object(c.fromString)(e.symKey, m)),
						{
							sealed: n,
							iv: i
						} = L(e.encoded),
						s = t.open(i, n);
					if (null === s) throw new Error("Failed to decrypt");
					return Object(c.toString)(s, _)
				}

				function L(e) {
					const t = Object(c.fromString)(e, v),
						n = t.slice(E, O),
						r = O;
					if (T(n) === j) {
						const e = r + I,
							i = e + S,
							s = t.slice(r, e),
							o = t.slice(e, i);
						return {
							type: n,
							sealed: t.slice(i),
							iv: o,
							senderPublicKey: s
						}
					}
					const i = r + S,
						s = t.slice(r, i);
					return {
						type: n,
						sealed: t.slice(i),
						iv: s
					}
				}

				function M(e, t) {
					const n = L(e);
					return D({
						type: T(n.type),
						senderPublicKey: typeof n.senderPublicKey < "u" ? Object(c.toString)(n.senderPublicKey, m) : void 0,
						receiverPublicKey: null == t ? void 0 : t.receiverPublicKey
					})
				}

				function D(e) {
					const t = (null == e ? void 0 : e.type) || w;
					if (t === j) {
						if (typeof(null == e ? void 0 : e.senderPublicKey) > "u") throw new Error("missing sender public key");
						if (typeof(null == e ? void 0 : e.receiverPublicKey) > "u") throw new Error("missing receiver public key")
					}
					return {
						type: t,
						senderPublicKey: null == e ? void 0 : e.senderPublicKey,
						receiverPublicKey: null == e ? void 0 : e.receiverPublicKey
					}
				}

				function k(e) {
					return e.type === j && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
				}
				var z = Object.defineProperty,
					$ = Object.getOwnPropertySymbols,
					q = Object.prototype.hasOwnProperty,
					H = Object.prototype.propertyIsEnumerable,
					B = (e, t, n) => t in e ? z(e, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n,
					K = (e, t) => {
						for (var n in t || (t = {})) q.call(t, n) && B(e, n, t[n]);
						if ($)
							for (var n of $(t)) H.call(t, n) && B(e, n, t[n]);
						return e
					};
				const V = "ReactNative",
					F = {
						reactNative: "react-native",
						node: "node",
						browser: "browser",
						unknown: "unknown"
					},
					W = "js";

				function G() {
					return typeof e < "u" && typeof e.versions < "u" && typeof e.versions.node < "u"
				}

				function J() {
					return !Object(h.getDocument)() && !!Object(h.getNavigator)() && navigator.product === V
				}

				function Y() {
					return !G() && !!Object(h.getNavigator)()
				}

				function X() {
					return J() ? F.reactNative : G() ? F.node : Y() ? F.browser : F.unknown
				}

				function Z() {
					return Object(d.getWindowMetadata)() || {
						name: "",
						description: "",
						url: "",
						icons: [""]
					}
				}

				function Q(e, t, n) {
					const r = function() {
							const e = Object(u.a)();
							if (null === e) return "unknown";
							const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
							return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
						}(),
						i = function() {
							var e;
							const t = X();
							return t === F.browser ? [t, (null == (e = Object(h.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
						}();
					return [
						[e, t].join("-"), [W, n].join("-"), r, i
					].join("/")
				}

				function ee(e) {
					let {
						protocol: t,
						version: n,
						relayUrl: r,
						sdkVersion: i,
						auth: s,
						projectId: o,
						useOnCloseEvent: a
					} = e;
					const c = r.split("?"),
						u = {
							auth: s,
							ua: Q(t, n, i),
							projectId: o,
							useOnCloseEvent: a || void 0
						},
						l = function(e, t) {
							let n = f.parse(e);
							return n = K(K({}, n), t), e = f.stringify(n)
						}(c[1] || "", u);
					return c[0] + "?" + l
				}

				function te(e, t) {
					return e.filter(e => t.includes(e)).length === e.length
				}

				function ne(e) {
					return Object.fromEntries(e.entries())
				}

				function re(e) {
					return new Map(Object.entries(e))
				}

				function ie() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.FIVE_MINUTES,
						t = arguments.length > 1 ? arguments[1] : void 0;
					const n = Object(l.toMiliseconds)(e || l.FIVE_MINUTES);
					let r, i, s;
					return {
						resolve: e => {
							s && r && (clearTimeout(s), r(e))
						},
						reject: e => {
							s && i && (clearTimeout(s), i(e))
						},
						done: () => new Promise((e, o) => {
							s = setTimeout(() => {
								o(new Error(t))
							}, n), r = e, i = o
						})
					}
				}

				function se(e, t, n) {
					return new Promise(async (r, i) => {
						const s = setTimeout(() => i(new Error(n)), t);
						try {
							r(await e)
						} catch (o) {
							i(o)
						}
						clearTimeout(s)
					})
				}

				function oe(e, t) {
					if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
					if ("topic" === e.toLowerCase()) {
						if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
						return `topic:${t}`
					}
					if ("id" === e.toLowerCase()) {
						if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
						return `id:${t}`
					}
					throw new Error(`Unknown expirer target type: ${e}`)
				}

				function ae(e) {
					return oe("topic", e)
				}

				function ce(e) {
					return oe("id", e)
				}

				function ue(e) {
					const [t, n] = e.split(":"), r = {
						id: void 0,
						topic: void 0
					};
					if ("topic" === t && "string" == typeof n) r.topic = n;
					else {
						if ("id" !== t || !Number.isInteger(Number(n))) throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);
						r.id = Number(n)
					}
					return r
				}

				function le(e, t) {
					return Object(l.fromMiliseconds)((t || Date.now()) + Object(l.toMiliseconds)(e))
				}

				function he(e) {
					return Date.now() >= Object(l.toMiliseconds)(e)
				}

				function de(e, t) {
					return `${e}${t?`:${t}`:""}`
				}

				function fe() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
					return [...new Set([...e, ...t])]
				}
				const pe = "irn";

				function ge(e) {
					return (null == e ? void 0 : e.relay) || {
						protocol: pe
					}
				}

				function be(e) {
					const t = p.RELAY_JSONRPC[e];
					if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
					return t
				}
				var ye = Object.defineProperty,
					me = Object.getOwnPropertySymbols,
					ve = Object.prototype.hasOwnProperty,
					_e = Object.prototype.propertyIsEnumerable,
					we = (e, t, n) => t in e ? ye(e, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: n
					}) : e[t] = n,
					je = (e, t) => {
						for (var n in t || (t = {})) ve.call(t, n) && we(e, n, t[n]);
						if (me)
							for (var n of me(t)) _e.call(t, n) && we(e, n, t[n]);
						return e
					};

				function Ee(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
					const n = {},
						r = "relay" + t;
					return Object.keys(e).forEach(t => {
						if (t.startsWith(r)) {
							const i = t.replace(r, ""),
								s = e[t];
							n[i] = s
						}
					}), n
				}

				function Oe(e) {
					const t = e.indexOf(":"),
						n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
						r = e.substring(0, t),
						i = e.substring(t + 1, n).split("@"),
						s = typeof n < "u" ? e.substring(n) : "",
						o = f.parse(s);
					return {
						protocol: r,
						topic: i[0],
						version: parseInt(i[1], 10),
						symKey: o.symKey,
						relay: Ee(o)
					}
				}

				function Se(e) {
					return `${e.protocol}:${e.topic}@${e.version}?` + f.stringify(je({
						symKey: e.symKey
					}, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
						const n = {};
						return Object.keys(e).forEach(r => {
							const i = "relay" + t + r;
							e[r] && (n[i] = e[r])
						}), n
					}(e.relay)))
				}
				Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

				function Ie(e) {
					const t = [];
					return e.forEach(e => {
						const [n, r] = e.split(":");
						t.push(`${n}:${r}`)
					}), t
				}

				function Pe(e, t) {
					const n = Ye(e, t);
					if (n) throw new Error(n.message);
					const r = {};
					for (const [i, s] of Object.entries(e)) r[i] = {
						methods: s.methods,
						events: s.events,
						chains: s.accounts.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
					};
					return r
				}

				function xe(e) {
					return e.includes(":")
				}

				function Re(e) {
					return xe(e) ? e.split(":")[0] : e
				}
				const Ae = {
						INVALID_METHOD: {
							message: "Invalid method.",
							code: 1001
						},
						INVALID_EVENT: {
							message: "Invalid event.",
							code: 1002
						},
						INVALID_UPDATE_REQUEST: {
							message: "Invalid update request.",
							code: 1003
						},
						INVALID_EXTEND_REQUEST: {
							message: "Invalid extend request.",
							code: 1004
						},
						INVALID_SESSION_SETTLE_REQUEST: {
							message: "Invalid session settle request.",
							code: 1005
						},
						UNAUTHORIZED_METHOD: {
							message: "Unauthorized method.",
							code: 3001
						},
						UNAUTHORIZED_EVENT: {
							message: "Unauthorized event.",
							code: 3002
						},
						UNAUTHORIZED_UPDATE_REQUEST: {
							message: "Unauthorized update request.",
							code: 3003
						},
						UNAUTHORIZED_EXTEND_REQUEST: {
							message: "Unauthorized extend request.",
							code: 3004
						},
						USER_REJECTED: {
							message: "User rejected.",
							code: 5e3
						},
						USER_REJECTED_CHAINS: {
							message: "User rejected chains.",
							code: 5001
						},
						USER_REJECTED_METHODS: {
							message: "User rejected methods.",
							code: 5002
						},
						USER_REJECTED_EVENTS: {
							message: "User rejected events.",
							code: 5003
						},
						UNSUPPORTED_CHAINS: {
							message: "Unsupported chains.",
							code: 5100
						},
						UNSUPPORTED_METHODS: {
							message: "Unsupported methods.",
							code: 5101
						},
						UNSUPPORTED_EVENTS: {
							message: "Unsupported events.",
							code: 5102
						},
						UNSUPPORTED_ACCOUNTS: {
							message: "Unsupported accounts.",
							code: 5103
						},
						UNSUPPORTED_NAMESPACE_KEY: {
							message: "Unsupported namespace key.",
							code: 5104
						},
						USER_DISCONNECTED: {
							message: "User disconnected.",
							code: 6e3
						},
						SESSION_SETTLEMENT_FAILED: {
							message: "Session settlement failed.",
							code: 7e3
						},
						WC_METHOD_UNSUPPORTED: {
							message: "Unsupported wc_ method.",
							code: 10001
						}
					},
					Ne = {
						NOT_INITIALIZED: {
							message: "Not initialized.",
							code: 1
						},
						NO_MATCHING_KEY: {
							message: "No matching key.",
							code: 2
						},
						RESTORE_WILL_OVERRIDE: {
							message: "Restore will override.",
							code: 3
						},
						RESUBSCRIBED: {
							message: "Resubscribed.",
							code: 4
						},
						MISSING_OR_INVALID: {
							message: "Missing or invalid.",
							code: 5
						},
						EXPIRED: {
							message: "Expired.",
							code: 6
						},
						UNKNOWN_TYPE: {
							message: "Unknown type.",
							code: 7
						},
						MISMATCHED_TOPIC: {
							message: "Mismatched topic.",
							code: 8
						},
						NON_CONFORMING_NAMESPACES: {
							message: "Non conforming namespaces.",
							code: 9
						}
					};

				function Te(e, t) {
					const {
						message: n,
						code: r
					} = Ne[e];
					return {
						message: t ? `${n} ${t}` : n,
						code: r
					}
				}

				function Ce(e, t) {
					const {
						message: n,
						code: r
					} = Ae[e];
					return {
						message: t ? `${n} ${t}` : n,
						code: r
					}
				}

				function Ue(e, t) {
					return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
				}

				function Le(e) {
					return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
				}

				function Me(e) {
					return typeof e > "u"
				}

				function De(e, t) {
					return !(!t || !Me(e)) || "string" == typeof e && Boolean(e.trim().length)
				}

				function ke(e, t) {
					return !(!t || !Me(e)) || "number" == typeof e && !isNaN(e)
				}

				function ze(e, t) {
					const {
						requiredNamespaces: n
					} = t, r = Object.keys(e.namespaces), i = Object.keys(n);
					let s = !0;
					return !!te(i, r) && (r.forEach(t => {
						const {
							accounts: r,
							methods: i,
							events: o
						} = e.namespaces[t], a = Ie(r), c = n[t];
						te(b(t, c), a) && te(c.methods, i) && te(c.events, o) || (s = !1)
					}), s)
				}

				function $e(e) {
					return !(!De(e, !1) || !e.includes(":")) && 2 === e.split(":").length
				}

				function qe(e) {
					if (De(e, !1)) try {
						return typeof new URL(e) < "u"
					} catch {
						return !1
					}
					return !1
				}

				function He(e) {
					var t;
					return null == (t = null == e ? void 0 : e.proposer) ? void 0 : t.publicKey
				}

				function Be(e) {
					return null == e ? void 0 : e.topic
				}

				function Ke(e, t) {
					let n = null;
					return De(null == e ? void 0 : e.publicKey, !1) || (n = Te("MISSING_OR_INVALID", `${t} controller public key should be a string`)), n
				}

				function Ve(e) {
					let t = !0;
					return Ue(e) ? e.length && (t = e.every(e => De(e, !1))) : t = !1, t
				}

				function Fe(e, t) {
					let n = null;
					return Object.entries(e).forEach(e => {
						let [r, i] = e;
						if (n) return;
						const s = function(e, t, n) {
							let r = null;
							return Ue(t) ? t.forEach(t => {
								r || (!$e(t) || !t.includes(e)) && (r = Ce("UNSUPPORTED_CHAINS", `${n}, chain ${t} should be a string and conform to "namespace:chainId" format`))
							}) : r = Ce("UNSUPPORTED_CHAINS", `${n}, chains ${t} should be an array of strings conforming to "namespace:chainId" format`), r
						}(r, b(r, i), `${t} requiredNamespace`);
						s && (n = s)
					}), n
				}

				function We(e, t) {
					let n = null;
					return Ue(e) ? e.forEach(e => {
						n || function(e) {
							if (De(e, !1) && e.includes(":")) {
								const t = e.split(":");
								if (3 === t.length) {
									const e = t[0] + ":" + t[1];
									return !!t[2] && $e(e)
								}
							}
							return !1
						}(e) || (n = Ce("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
					}) : n = Ce("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n
				}

				function Ge(e, t) {
					let n = null;
					return Object.values(e).forEach(e => {
						if (n) return;
						const r = function(e, t) {
							let n = null;
							return Ve(null == e ? void 0 : e.methods) ? Ve(null == e ? void 0 : e.events) || (n = Ce("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : n = Ce("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), n
						}(e, `${t}, namespace`);
						r && (n = r)
					}), n
				}

				function Je(e, t, n) {
					let r = null;
					if (e && Le(e)) {
						const n = Ge(e, t);
						n && (r = n);
						const i = Fe(e, t);
						i && (r = i)
					} else r = Te("MISSING_OR_INVALID", `${t}, ${n} should be an object with data`);
					return r
				}

				function Ye(e, t) {
					let n = null;
					if (e && Le(e)) {
						const r = Ge(e, t);
						r && (n = r);
						const i = function(e, t) {
							let n = null;
							return Object.values(e).forEach(e => {
								if (n) return;
								const r = We(null == e ? void 0 : e.accounts, `${t} namespace`);
								r && (n = r)
							}), n
						}(e, t);
						i && (n = i)
					} else n = Te("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
					return n
				}

				function Xe(e) {
					return De(e.protocol, !0)
				}

				function Ze(e, t) {
					let n = !1;
					return t && !e ? n = !0 : e && Ue(e) && e.length && e.forEach(e => {
						n = Xe(e)
					}), n
				}

				function Qe(e) {
					return "number" == typeof e
				}

				function et(e) {
					return typeof e < "u" && null !== typeof e
				}

				function tt(e) {
					return !!(e && "object" == typeof e && e.code && ke(e.code, !1) && e.message && De(e.message, !1))
				}

				function nt(e) {
					return !(Me(e) || !De(e.method, !1))
				}

				function rt(e) {
					return !(Me(e) || Me(e.result) && Me(e.error) || !ke(e.id, !1) || !De(e.jsonrpc, !1))
				}

				function it(e) {
					return !(Me(e) || !De(e.name, !1))
				}

				function st(e, t) {
					return !(!$e(t) || ! function(e) {
						const t = [];
						return Object.values(e).forEach(e => {
							t.push(...Ie(e.accounts))
						}), t
					}(e).includes(t))
				}

				function ot(e, t, n) {
					return !!De(n, !1) && function(e, t) {
						const n = [];
						return Object.values(e).forEach(e => {
							Ie(e.accounts).includes(t) && n.push(...e.methods)
						}), n
					}(e, t).includes(n)
				}

				function at(e, t, n) {
					return !!De(n, !1) && function(e, t) {
						const n = [];
						return Object.values(e).forEach(e => {
							Ie(e.accounts).includes(t) && n.push(...e.events)
						}), n
					}(e, t).includes(n)
				}

				function ct(e, t, n) {
					let r = null;
					const i = function(e) {
							const t = {};
							return Object.keys(e).forEach(n => {
								var r;
								n.includes(":") ? t[n] = e[n] : null == (r = e[n].chains) || r.forEach(r => {
									t[r] = {
										methods: e[n].methods,
										events: e[n].events
									}
								})
							}), t
						}(e),
						s = function(e) {
							const t = {};
							return Object.keys(e).forEach(n => {
								if (n.includes(":")) t[n] = e[n];
								else {
									const r = Ie(e[n].accounts);
									null == r || r.forEach(r => {
										t[r] = {
											accounts: e[n].accounts.filter(e => e.includes(`${r}:`)),
											methods: e[n].methods,
											events: e[n].events
										}
									})
								}
							}), t
						}(t),
						o = Object.keys(i),
						a = Object.keys(s),
						c = ut(Object.keys(e)),
						u = ut(Object.keys(t)),
						l = c.filter(e => !u.includes(e));
					return l.length && (r = Te("NON_CONFORMING_NAMESPACES", `${n} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${l.toString()}\n      Received: ${Object.keys(t).toString()}`)), te(o, a) || (r = Te("NON_CONFORMING_NAMESPACES", `${n} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)), Object.keys(t).forEach(e => {
						if (!e.includes(":") || r) return;
						const i = Ie(t[e].accounts);
						i.includes(e) || (r = Te("NON_CONFORMING_NAMESPACES", `${n} namespaces accounts don't satisfy namespace accounts for ${e}\n        Required: ${e}\n        Approved: ${i.toString()}`))
					}), o.forEach(e => {
						r || (te(i[e].methods, s[e].methods) ? te(i[e].events, s[e].events) || (r = Te("NON_CONFORMING_NAMESPACES", `${n} namespaces events don't satisfy namespace events for ${e}`)) : r = Te("NON_CONFORMING_NAMESPACES", `${n} namespaces methods don't satisfy namespace methods for ${e}`))
					}), r
				}

				function ut(e) {
					return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
				}

				function lt(e, t) {
					return ke(e, !1) && e <= t.max && e >= t.min
				}
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/@walletconnect/utils/node_modules/query-string/index.js": function(e, t, n) {
			"use strict";
			const r = n("./node_modules/strict-uri-encode/index.js"),
				i = n("./node_modules/decode-uri-component/index.js"),
				s = n("./node_modules/split-on-first/index.js"),
				o = n("./node_modules/filter-obj/index.js"),
				a = Symbol("encodeFragmentIdentifier");

			function c(e) {
				if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
			}

			function u(e, t) {
				return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
			}

			function l(e, t) {
				return t.decode ? i(e) : e
			}

			function h(e) {
				const t = e.indexOf("#");
				return -1 !== t && (e = e.slice(0, t)), e
			}

			function d(e) {
				const t = (e = h(e)).indexOf("?");
				return -1 === t ? "" : e.slice(t + 1)
			}

			function f(e, t) {
				return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
			}

			function p(e, t) {
				c((t = Object.assign({
					decode: !0,
					sort: !0,
					arrayFormat: "none",
					arrayFormatSeparator: ",",
					parseNumbers: !1,
					parseBooleans: !1
				}, t)).arrayFormatSeparator);
				const n = function(e) {
						let t;
						switch (e.arrayFormat) {
							case "index":
								return (e, n, r) => {
									t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
								};
							case "bracket":
								return (e, n, r) => {
									t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
								};
							case "colon-list-separator":
								return (e, n, r) => {
									t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
								};
							case "comma":
							case "separator":
								return (t, n, r) => {
									const i = "string" == typeof n && n.includes(e.arrayFormatSeparator),
										s = "string" == typeof n && !i && l(n, e).includes(e.arrayFormatSeparator);
									n = s ? l(n, e) : n;
									const o = i || s ? n.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === n ? n : l(n, e);
									r[t] = o
								};
							case "bracket-separator":
								return (t, n, r) => {
									const i = /(\[\])$/.test(t);
									if (t = t.replace(/\[\]$/, ""), !i) return void(r[t] = n ? l(n, e) : n);
									const s = null === n ? [] : n.split(e.arrayFormatSeparator).map(t => l(t, e));
									void 0 !== r[t] ? r[t] = [].concat(r[t], s) : r[t] = s
								};
							default:
								return (e, t, n) => {
									void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
								}
						}
					}(t),
					r = Object.create(null);
				if ("string" != typeof e) return r;
				if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
				for (const i of e.split("&")) {
					if ("" === i) continue;
					let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
					o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : l(o, t), n(l(e, t), o, r)
				}
				for (const i of Object.keys(r)) {
					const e = r[i];
					if ("object" == typeof e && null !== e)
						for (const n of Object.keys(e)) e[n] = f(e[n], t);
					else r[i] = f(e, t)
				}
				return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
					const n = r[t];
					return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
						return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
					}(n) : e[t] = n, e
				}, Object.create(null))
			}
			t.extract = d, t.parse = p, t.stringify = (e, t) => {
				if (!e) return "";
				c((t = Object.assign({
					encode: !0,
					strict: !0,
					arrayFormat: "none",
					arrayFormatSeparator: ","
				}, t)).arrayFormatSeparator);
				const n = n => t.skipNull && (e => null == e)(e[n]) || t.skipEmptyString && "" === e[n],
					r = function(e) {
						switch (e.arrayFormat) {
							case "index":
								return t => (n, r) => {
									const i = n.length;
									return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [u(t, e), "[", i, "]"].join("")] : [...n, [u(t, e), "[", u(i, e), "]=", u(r, e)].join("")]
								};
							case "bracket":
								return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [u(t, e), "[]"].join("")] : [...n, [u(t, e), "[]=", u(r, e)].join("")];
							case "colon-list-separator":
								return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [u(t, e), ":list="].join("")] : [...n, [u(t, e), ":list=", u(r, e)].join("")];
							case "comma":
							case "separator":
							case "bracket-separator": {
								const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
								return n => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : (i = null === i ? "" : i, 0 === r.length ? [
									[u(n, e), t, u(i, e)].join("")
								] : [
									[r, u(i, e)].join(e.arrayFormatSeparator)
								])
							}
							default:
								return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, u(t, e)] : [...n, [u(t, e), "=", u(r, e)].join("")]
						}
					}(t),
					i = {};
				for (const o of Object.keys(e)) n(o) || (i[o] = e[o]);
				const s = Object.keys(i);
				return !1 !== t.sort && s.sort(t.sort), s.map(n => {
					const i = e[n];
					return void 0 === i ? "" : null === i ? u(n, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? u(n, t) + "[]" : i.reduce(r(n), []).join("&") : u(n, t) + "=" + u(i, t)
				}).filter(e => e.length > 0).join("&")
			}, t.parseUrl = (e, t) => {
				t = Object.assign({
					decode: !0
				}, t);
				const [n, r] = s(e, "#");
				return Object.assign({
					url: n.split("?")[0] || "",
					query: p(d(e), t)
				}, t && t.parseFragmentIdentifier && r ? {
					fragmentIdentifier: l(r, t)
				} : {})
			}, t.stringifyUrl = (e, n) => {
				n = Object.assign({
					encode: !0,
					strict: !0,
					[a]: !0
				}, n);
				const r = h(e.url).split("?")[0] || "",
					i = t.extract(e.url),
					s = t.parse(i, {
						sort: !1
					}),
					o = Object.assign(s, e.query);
				let c = t.stringify(o, n);
				c && (c = `?${c}`);
				let l = function(e) {
					let t = "";
					const n = e.indexOf("#");
					return -1 !== n && (t = e.slice(n)), t
				}(e.url);
				return e.fragmentIdentifier && (l = `#${n[a]?u(e.fragmentIdentifier,n):e.fragmentIdentifier}`), `${r}${c}${l}`
			}, t.pick = (e, n, r) => {
				r = Object.assign({
					parseFragmentIdentifier: !0,
					[a]: !1
				}, r);
				const {
					url: i,
					query: s,
					fragmentIdentifier: c
				} = t.parseUrl(e, r);
				return t.stringifyUrl({
					url: i,
					query: o(s, n),
					fragmentIdentifier: c
				}, r)
			}, t.exclude = (e, n, r) => {
				const i = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
				return t.pick(e, i, r)
			}
		},
		"./node_modules/@walletconnect/window-getters/dist/cjs/index.js": function(e, t, n) {
			"use strict";

			function r(e) {
				let t = void 0;
				return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
			}

			function i(e) {
				const t = r(e);
				if (!t) throw new Error(`${e} is not defined in Window`);
				return t
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
				return i("document")
			}, t.getDocument = function() {
				return r("document")
			}, t.getNavigatorOrThrow = function() {
				return i("navigator")
			}, t.getNavigator = function() {
				return r("navigator")
			}, t.getLocationOrThrow = function() {
				return i("location")
			}, t.getLocation = function() {
				return r("location")
			}, t.getCryptoOrThrow = function() {
				return i("crypto")
			}, t.getCrypto = function() {
				return r("crypto")
			}, t.getLocalStorageOrThrow = function() {
				return i("localStorage")
			}, t.getLocalStorage = function() {
				return r("localStorage")
			}
		},
		"./node_modules/@walletconnect/window-metadata/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.getWindowMetadata = void 0;
			const r = n("./node_modules/@walletconnect/window-getters/dist/cjs/index.js");
			t.getWindowMetadata = function() {
				let e, t;
				try {
					e = r.getDocumentOrThrow(), t = r.getLocationOrThrow()
				} catch (s) {
					return null
				}

				function n() {
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					const i = e.getElementsByTagName("meta");
					for (let e = 0; e < i.length; e++) {
						const t = i[e],
							r = ["itemprop", "property", "name"].map(e => t.getAttribute(e)).filter(e => !!e && n.includes(e));
						if (r.length && r) {
							const e = t.getAttribute("content");
							if (e) return e
						}
					}
					return ""
				}
				const i = function() {
					let t = n("name", "og:site_name", "og:title", "twitter:title");
					return t || (t = e.title), t
				}();
				return {
					description: n("description", "og:description", "twitter:description", "keywords"),
					url: t.origin,
					icons: function() {
						const n = e.getElementsByTagName("link"),
							r = [];
						for (let e = 0; e < n.length; e++) {
							const i = n[e],
								s = i.getAttribute("rel");
							if (s && s.toLowerCase().indexOf("icon") > -1) {
								const e = i.getAttribute("href");
								if (e)
									if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
										let n = t.protocol + "//" + t.host;
										if (0 === e.indexOf("/")) n += e;
										else {
											const r = t.pathname.split("/");
											r.pop(), n += r.join("/") + "/" + e
										}
										r.push(n)
									} else if (0 === e.indexOf("//")) {
									const n = t.protocol + e;
									r.push(n)
								} else r.push(e)
							}
						}
						return r
					}(),
					name: i
				}
			}
		},
		"./node_modules/detect-browser/es/index.js": function(e, t, n) {
			"use strict";
			(function(e) {
				n.d(t, "a", (function() {
					return f
				}));
				var r = function(e, t, n) {
						if (n || 2 === arguments.length)
							for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
						return e.concat(r || Array.prototype.slice.call(t))
					},
					i = function(e, t, n) {
						this.name = e, this.version = t, this.os = n, this.type = "browser"
					},
					s = function(t) {
						this.version = t, this.type = "node", this.name = "node", this.os = e.platform
					},
					o = function(e, t, n, r) {
						this.name = e, this.version = t, this.os = n, this.bot = r, this.type = "bot-device"
					},
					a = function() {
						this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
					},
					c = function() {
						this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
					},
					u = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
					l = 3,
					h = [
						["aol", /AOLShield\/([0-9\._]+)/],
						["edge", /Edge\/([0-9\._]+)/],
						["edge-ios", /EdgiOS\/([0-9\._]+)/],
						["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
						["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
						["samsung", /SamsungBrowser\/([0-9\.]+)/],
						["silk", /\bSilk\/([0-9._-]+)\b/],
						["miui", /MiuiBrowser\/([0-9\.]+)$/],
						["beaker", /BeakerBrowser\/([0-9\.]+)/],
						["edge-chromium", /EdgA?\/([0-9\.]+)/],
						["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
						["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
						["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
						["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
						["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
						["fxios", /FxiOS\/([0-9\.]+)/],
						["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
						["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
						["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
						["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
						["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
						["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
						["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
						["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
						["ie", /MSIE\s(7\.0)/],
						["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
						["android", /Android\s([0-9\.]+)/],
						["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
						["safari", /Version\/([0-9\._]+).*Safari/],
						["facebook", /FB[AS]V\/([0-9\.]+)/],
						["instagram", /Instagram\s([0-9\.]+)/],
						["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
						["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
						["curl", /^curl\/([0-9\.]+)$/],
						["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
					],
					d = [
						["iOS", /iP(hone|od|ad)/],
						["Android OS", /Android/],
						["BlackBerry OS", /BlackBerry|BB10/],
						["Windows Mobile", /IEMobile/],
						["Amazon OS", /Kindle/],
						["Windows 3.11", /Win16/],
						["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
						["Windows 98", /(Windows 98)|(Win98)/],
						["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
						["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
						["Windows Server 2003", /(Windows NT 5.2)/],
						["Windows Vista", /(Windows NT 6.0)/],
						["Windows 7", /(Windows NT 6.1)/],
						["Windows 8", /(Windows NT 6.2)/],
						["Windows 8.1", /(Windows NT 6.3)/],
						["Windows 10", /(Windows NT 10.0)/],
						["Windows ME", /Windows ME/],
						["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
						["Open BSD", /OpenBSD/],
						["Sun OS", /SunOS/],
						["Chrome OS", /CrOS/],
						["Linux", /(Linux)|(X11)/],
						["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
						["QNX", /QNX/],
						["BeOS", /BeOS/],
						["OS/2", /OS\/2/]
					];

				function f(t) {
					return t ? g(t) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new c : "undefined" != typeof navigator ? g(navigator.userAgent) : void 0 !== e && e.version ? new s(e.version.slice(1)) : null
				}

				function p(e) {
					return "" !== e && h.reduce((function(t, n) {
						var r = n[0],
							i = n[1];
						if (t) return t;
						var s = i.exec(e);
						return !!s && [r, s]
					}), !1)
				}

				function g(e) {
					var t = p(e);
					if (!t) return null;
					var n = t[0],
						s = t[1];
					if ("searchbot" === n) return new a;
					var c = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
					c ? c.length < l && (c = r(r([], c, !0), function(e) {
						for (var t = [], n = 0; n < e; n++) t.push("0");
						return t
					}(l - c.length), !0)) : c = [];
					var h = c.join("."),
						f = function(e) {
							for (var t = 0, n = d.length; t < n; t++) {
								var r = d[t],
									i = r[0];
								if (r[1].exec(e)) return i
							}
							return null
						}(e),
						g = u.exec(e);
					return g && g[1] ? new o(n, h, f, g[1]) : new i(n, h, f)
				}
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/filter-obj/index.js": function(e, t, n) {
			"use strict";
			e.exports = function(e, t) {
				for (var n = {}, r = Object.keys(e), i = Array.isArray(t), s = 0; s < r.length; s++) {
					var o = r[s],
						a = e[o];
					(i ? -1 !== t.indexOf(o) : t(o, a, e)) && (n[o] = a)
				}
				return n
			}
		},
		"./node_modules/lodash.isequal/index.js": function(e, t, n) {
			(function(e, n) {
				var r = 200,
					i = "__lodash_hash_undefined__",
					s = 1,
					o = 2,
					a = 9007199254740991,
					c = "[object Arguments]",
					u = "[object Array]",
					l = "[object AsyncFunction]",
					h = "[object Boolean]",
					d = "[object Date]",
					f = "[object Error]",
					p = "[object Function]",
					g = "[object GeneratorFunction]",
					b = "[object Map]",
					y = "[object Number]",
					m = "[object Null]",
					v = "[object Object]",
					_ = "[object Proxy]",
					w = "[object RegExp]",
					j = "[object Set]",
					E = "[object String]",
					O = "[object Symbol]",
					S = "[object Undefined]",
					I = "[object ArrayBuffer]",
					P = "[object DataView]",
					x = /^\[object .+?Constructor\]$/,
					R = /^(?:0|[1-9]\d*)$/,
					A = {};
				A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = !0, A[c] = A[u] = A[I] = A[h] = A[P] = A[d] = A[f] = A[p] = A[b] = A[y] = A[v] = A[w] = A[j] = A[E] = A["[object WeakMap]"] = !1;
				var N = "object" == typeof e && e && e.Object === Object && e,
					T = "object" == typeof self && self && self.Object === Object && self,
					C = N || T || Function("return this")(),
					U = t && !t.nodeType && t,
					L = U && "object" == typeof n && n && !n.nodeType && n,
					M = L && L.exports === U,
					D = M && N.process,
					k = function() {
						try {
							return D && D.binding && D.binding("util")
						} catch (e) {}
					}(),
					z = k && k.isTypedArray;

				function $(e, t) {
					for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
						if (t(e[n], n, e)) return !0;
					return !1
				}

				function q(e) {
					var t = -1,
						n = Array(e.size);
					return e.forEach((function(e, r) {
						n[++t] = [r, e]
					})), n
				}

				function H(e) {
					var t = -1,
						n = Array(e.size);
					return e.forEach((function(e) {
						n[++t] = e
					})), n
				}
				var B, K, V, F = Array.prototype,
					W = Function.prototype,
					G = Object.prototype,
					J = C["__core-js_shared__"],
					Y = W.toString,
					X = G.hasOwnProperty,
					Z = (B = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : "",
					Q = G.toString,
					ee = RegExp("^" + Y.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
					te = M ? C.Buffer : void 0,
					ne = C.Symbol,
					re = C.Uint8Array,
					ie = G.propertyIsEnumerable,
					se = F.splice,
					oe = ne ? ne.toStringTag : void 0,
					ae = Object.getOwnPropertySymbols,
					ce = te ? te.isBuffer : void 0,
					ue = (K = Object.keys, V = Object, function(e) {
						return K(V(e))
					}),
					le = ke(C, "DataView"),
					he = ke(C, "Map"),
					de = ke(C, "Promise"),
					fe = ke(C, "Set"),
					pe = ke(C, "WeakMap"),
					ge = ke(Object, "create"),
					be = He(le),
					ye = He(he),
					me = He(de),
					ve = He(fe),
					_e = He(pe),
					we = ne ? ne.prototype : void 0,
					je = we ? we.valueOf : void 0;

				function Ee(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}

				function Oe(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}

				function Se(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.clear(); ++t < n;) {
						var r = e[t];
						this.set(r[0], r[1])
					}
				}

				function Ie(e) {
					var t = -1,
						n = null == e ? 0 : e.length;
					for (this.__data__ = new Se; ++t < n;) this.add(e[t])
				}

				function Pe(e) {
					var t = this.__data__ = new Oe(e);
					this.size = t.size
				}

				function xe(e, t) {
					var n = Ve(e),
						r = !n && Ke(e),
						i = !n && !r && Fe(e),
						s = !n && !r && !i && Xe(e),
						o = n || r || i || s,
						a = o ? function(e, t) {
							for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
							return r
						}(e.length, String) : [],
						c = a.length;
					for (var u in e) !t && !X.call(e, u) || o && ("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || qe(u, c)) || a.push(u);
					return a
				}

				function Re(e, t) {
					for (var n = e.length; n--;)
						if (Be(e[n][0], t)) return n;
					return -1
				}

				function Ae(e) {
					return null == e ? void 0 === e ? S : m : oe && oe in Object(e) ? function(e) {
						var t = X.call(e, oe),
							n = e[oe];
						try {
							e[oe] = void 0;
							var r = !0
						} catch (s) {}
						var i = Q.call(e);
						r && (t ? e[oe] = n : delete e[oe]);
						return i
					}(e) : function(e) {
						return Q.call(e)
					}(e)
				}

				function Ne(e) {
					return Ye(e) && Ae(e) == c
				}

				function Te(e, t, n, r, i) {
					return e === t || (null == e || null == t || !Ye(e) && !Ye(t) ? e != e && t != t : function(e, t, n, r, i, a) {
						var l = Ve(e),
							p = Ve(t),
							g = l ? u : $e(e),
							m = p ? u : $e(t),
							_ = (g = g == c ? v : g) == v,
							S = (m = m == c ? v : m) == v,
							x = g == m;
						if (x && Fe(e)) {
							if (!Fe(t)) return !1;
							l = !0, _ = !1
						}
						if (x && !_) return a || (a = new Pe), l || Xe(e) ? Le(e, t, n, r, i, a) : function(e, t, n, r, i, a, c) {
							switch (n) {
								case P:
									if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
									e = e.buffer, t = t.buffer;
								case I:
									return !(e.byteLength != t.byteLength || !a(new re(e), new re(t)));
								case h:
								case d:
								case y:
									return Be(+e, +t);
								case f:
									return e.name == t.name && e.message == t.message;
								case w:
								case E:
									return e == t + "";
								case b:
									var u = q;
								case j:
									var l = r & s;
									if (u || (u = H), e.size != t.size && !l) return !1;
									var p = c.get(e);
									if (p) return p == t;
									r |= o, c.set(e, t);
									var g = Le(u(e), u(t), r, i, a, c);
									return c.delete(e), g;
								case O:
									if (je) return je.call(e) == je.call(t)
							}
							return !1
						}(e, t, g, n, r, i, a);
						if (!(n & s)) {
							var R = _ && X.call(e, "__wrapped__"),
								A = S && X.call(t, "__wrapped__");
							if (R || A) {
								var N = R ? e.value() : e,
									T = A ? t.value() : t;
								return a || (a = new Pe), i(N, T, n, r, a)
							}
						}
						if (!x) return !1;
						return a || (a = new Pe),
							function(e, t, n, r, i, o) {
								var a = n & s,
									c = Me(e),
									u = c.length,
									l = Me(t).length;
								if (u != l && !a) return !1;
								var h = u;
								for (; h--;) {
									var d = c[h];
									if (!(a ? d in t : X.call(t, d))) return !1
								}
								var f = o.get(e);
								if (f && o.get(t)) return f == t;
								var p = !0;
								o.set(e, t), o.set(t, e);
								var g = a;
								for (; ++h < u;) {
									d = c[h];
									var b = e[d],
										y = t[d];
									if (r) var m = a ? r(y, b, d, t, e, o) : r(b, y, d, e, t, o);
									if (!(void 0 === m ? b === y || i(b, y, n, r, o) : m)) {
										p = !1;
										break
									}
									g || (g = "constructor" == d)
								}
								if (p && !g) {
									var v = e.constructor,
										_ = t.constructor;
									v != _ && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof _ && _ instanceof _) && (p = !1)
								}
								return o.delete(e), o.delete(t), p
							}(e, t, n, r, i, a)
					}(e, t, n, r, Te, i))
				}

				function Ce(e) {
					return !(!Je(e) || function(e) {
						return !!Z && Z in e
					}(e)) && (We(e) ? ee : x).test(He(e))
				}

				function Ue(e) {
					if (n = (t = e) && t.constructor, r = "function" == typeof n && n.prototype || G, t !== r) return ue(e);
					var t, n, r, i = [];
					for (var s in Object(e)) X.call(e, s) && "constructor" != s && i.push(s);
					return i
				}

				function Le(e, t, n, r, i, a) {
					var c = n & s,
						u = e.length,
						l = t.length;
					if (u != l && !(c && l > u)) return !1;
					var h = a.get(e);
					if (h && a.get(t)) return h == t;
					var d = -1,
						f = !0,
						p = n & o ? new Ie : void 0;
					for (a.set(e, t), a.set(t, e); ++d < u;) {
						var g = e[d],
							b = t[d];
						if (r) var y = c ? r(b, g, d, t, e, a) : r(g, b, d, e, t, a);
						if (void 0 !== y) {
							if (y) continue;
							f = !1;
							break
						}
						if (p) {
							if (!$(t, (function(e, t) {
									if (s = t, !p.has(s) && (g === e || i(g, e, n, r, a))) return p.push(t);
									var s
								}))) {
								f = !1;
								break
							}
						} else if (g !== b && !i(g, b, n, r, a)) {
							f = !1;
							break
						}
					}
					return a.delete(e), a.delete(t), f
				}

				function Me(e) {
					return function(e, t, n) {
						var r = t(e);
						return Ve(e) ? r : function(e, t) {
							for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
							return e
						}(r, n(e))
					}(e, Ze, ze)
				}

				function De(e, t) {
					var n, r, i = e.__data__;
					return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
				}

				function ke(e, t) {
					var n = function(e, t) {
						return null == e ? void 0 : e[t]
					}(e, t);
					return Ce(n) ? n : void 0
				}
				Ee.prototype.clear = function() {
					this.__data__ = ge ? ge(null) : {}, this.size = 0
				}, Ee.prototype.delete = function(e) {
					var t = this.has(e) && delete this.__data__[e];
					return this.size -= t ? 1 : 0, t
				}, Ee.prototype.get = function(e) {
					var t = this.__data__;
					if (ge) {
						var n = t[e];
						return n === i ? void 0 : n
					}
					return X.call(t, e) ? t[e] : void 0
				}, Ee.prototype.has = function(e) {
					var t = this.__data__;
					return ge ? void 0 !== t[e] : X.call(t, e)
				}, Ee.prototype.set = function(e, t) {
					var n = this.__data__;
					return this.size += this.has(e) ? 0 : 1, n[e] = ge && void 0 === t ? i : t, this
				}, Oe.prototype.clear = function() {
					this.__data__ = [], this.size = 0
				}, Oe.prototype.delete = function(e) {
					var t = this.__data__,
						n = Re(t, e);
					return !(n < 0) && (n == t.length - 1 ? t.pop() : se.call(t, n, 1), --this.size, !0)
				}, Oe.prototype.get = function(e) {
					var t = this.__data__,
						n = Re(t, e);
					return n < 0 ? void 0 : t[n][1]
				}, Oe.prototype.has = function(e) {
					return Re(this.__data__, e) > -1
				}, Oe.prototype.set = function(e, t) {
					var n = this.__data__,
						r = Re(n, e);
					return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
				}, Se.prototype.clear = function() {
					this.size = 0, this.__data__ = {
						hash: new Ee,
						map: new(he || Oe),
						string: new Ee
					}
				}, Se.prototype.delete = function(e) {
					var t = De(this, e).delete(e);
					return this.size -= t ? 1 : 0, t
				}, Se.prototype.get = function(e) {
					return De(this, e).get(e)
				}, Se.prototype.has = function(e) {
					return De(this, e).has(e)
				}, Se.prototype.set = function(e, t) {
					var n = De(this, e),
						r = n.size;
					return n.set(e, t), this.size += n.size == r ? 0 : 1, this
				}, Ie.prototype.add = Ie.prototype.push = function(e) {
					return this.__data__.set(e, i), this
				}, Ie.prototype.has = function(e) {
					return this.__data__.has(e)
				}, Pe.prototype.clear = function() {
					this.__data__ = new Oe, this.size = 0
				}, Pe.prototype.delete = function(e) {
					var t = this.__data__,
						n = t.delete(e);
					return this.size = t.size, n
				}, Pe.prototype.get = function(e) {
					return this.__data__.get(e)
				}, Pe.prototype.has = function(e) {
					return this.__data__.has(e)
				}, Pe.prototype.set = function(e, t) {
					var n = this.__data__;
					if (n instanceof Oe) {
						var i = n.__data__;
						if (!he || i.length < r - 1) return i.push([e, t]), this.size = ++n.size, this;
						n = this.__data__ = new Se(i)
					}
					return n.set(e, t), this.size = n.size, this
				};
				var ze = ae ? function(e) {
						return null == e ? [] : (e = Object(e), function(e, t) {
							for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r;) {
								var o = e[n];
								t(o, n, e) && (s[i++] = o)
							}
							return s
						}(ae(e), (function(t) {
							return ie.call(e, t)
						})))
					} : function() {
						return []
					},
					$e = Ae;

				function qe(e, t) {
					return !!(t = null == t ? a : t) && ("number" == typeof e || R.test(e)) && e > -1 && e % 1 == 0 && e < t
				}

				function He(e) {
					if (null != e) {
						try {
							return Y.call(e)
						} catch (t) {}
						try {
							return e + ""
						} catch (t) {}
					}
					return ""
				}

				function Be(e, t) {
					return e === t || e != e && t != t
				}(le && $e(new le(new ArrayBuffer(1))) != P || he && $e(new he) != b || de && "[object Promise]" != $e(de.resolve()) || fe && $e(new fe) != j || pe && "[object WeakMap]" != $e(new pe)) && ($e = function(e) {
					var t = Ae(e),
						n = t == v ? e.constructor : void 0,
						r = n ? He(n) : "";
					if (r) switch (r) {
						case be:
							return P;
						case ye:
							return b;
						case me:
							return "[object Promise]";
						case ve:
							return j;
						case _e:
							return "[object WeakMap]"
					}
					return t
				});
				var Ke = Ne(function() {
						return arguments
					}()) ? Ne : function(e) {
						return Ye(e) && X.call(e, "callee") && !ie.call(e, "callee")
					},
					Ve = Array.isArray;
				var Fe = ce || function() {
					return !1
				};

				function We(e) {
					if (!Je(e)) return !1;
					var t = Ae(e);
					return t == p || t == g || t == l || t == _
				}

				function Ge(e) {
					return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a
				}

				function Je(e) {
					var t = typeof e;
					return null != e && ("object" == t || "function" == t)
				}

				function Ye(e) {
					return null != e && "object" == typeof e
				}
				var Xe = z ? function(e) {
					return function(t) {
						return e(t)
					}
				}(z) : function(e) {
					return Ye(e) && Ge(e.length) && !!A[Ae(e)]
				};

				function Ze(e) {
					return null != (t = e) && Ge(t.length) && !We(t) ? xe(e) : Ue(e);
					var t
				}
				n.exports = function(e, t) {
					return Te(e, t)
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"), n("./node_modules/webpack/buildin/module.js")(e))
		},
		"./node_modules/multiformats/cjs/src/bases/base.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/vendor/base-x.js"),
				i = n("./node_modules/multiformats/cjs/src/bytes.js");
			class s {
				constructor(e, t, n) {
					this.name = e, this.prefix = t, this.baseEncode = n
				}
				encode(e) {
					if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
					throw Error("Unknown type, must be binary type")
				}
			}
			class o {
				constructor(e, t, n) {
					if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
					this.prefixCodePoint = t.codePointAt(0), this.baseDecode = n
				}
				decode(e) {
					if ("string" == typeof e) {
						if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
						return this.baseDecode(e.slice(this.prefix.length))
					}
					throw Error("Can only multibase decode strings")
				}
				or(e) {
					return c(this, e)
				}
			}
			class a {
				constructor(e) {
					this.decoders = e
				}
				or(e) {
					return c(this, e)
				}
				decode(e) {
					const t = e[0],
						n = this.decoders[t];
					if (n) return n.decode(e);
					throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
				}
			}
			const c = (e, t) => new a({
				...e.decoders || {
					[e.prefix]: e
				},
				...t.decoders || {
					[t.prefix]: t
				}
			});
			class u {
				constructor(e, t, n, r) {
					this.name = e, this.prefix = t, this.baseEncode = n, this.baseDecode = r, this.encoder = new s(e, t, n), this.decoder = new o(e, t, r)
				}
				encode(e) {
					return this.encoder.encode(e)
				}
				decode(e) {
					return this.decoder.decode(e)
				}
			}
			const l = ({
				name: e,
				prefix: t,
				encode: n,
				decode: r
			}) => new u(e, t, n, r);
			t.Codec = u, t.baseX = ({
				prefix: e,
				name: t,
				alphabet: n
			}) => {
				const {
					encode: s,
					decode: o
				} = r(n, t);
				return l({
					prefix: e,
					name: t,
					encode: s,
					decode: e => i.coerce(o(e))
				})
			}, t.from = l, t.or = c, t.rfc4648 = ({
				name: e,
				prefix: t,
				bitsPerChar: n,
				alphabet: r
			}) => l({
				prefix: t,
				name: e,
				encode: e => ((e, t, n) => {
					const r = "=" === t[t.length - 1],
						i = (1 << n) - 1;
					let s = "",
						o = 0,
						a = 0;
					for (let c = 0; c < e.length; ++c)
						for (a = a << 8 | e[c], o += 8; o > n;) s += t[i & a >> (o -= n)];
					if (o && (s += t[i & a << n - o]), r)
						for (; s.length * n & 7;) s += "=";
					return s
				})(e, r, n),
				decode: t => ((e, t, n, r) => {
					const i = {};
					for (let l = 0; l < t.length; ++l) i[t[l]] = l;
					let s = e.length;
					for (;
						"=" === e[s - 1];) --s;
					const o = new Uint8Array(s * n / 8 | 0);
					let a = 0,
						c = 0,
						u = 0;
					for (let l = 0; l < s; ++l) {
						const t = i[e[l]];
						if (void 0 === t) throw new SyntaxError(`Non-${r} character`);
						c = c << n | t, (a += n) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
					}
					if (a >= n || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
					return o
				})(t, r, n, e)
			})
		},
		"./node_modules/multiformats/cjs/src/bases/base10.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/multiformats/cjs/src/bases/base.js").baseX({
				prefix: "9",
				name: "base10",
				alphabet: "0123456789"
			});
			t.base10 = r
		},
		"./node_modules/multiformats/cjs/src/bases/base16.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js");
			const i = r.rfc4648({
					prefix: "f",
					name: "base16",
					alphabet: "0123456789abcdef",
					bitsPerChar: 4
				}),
				s = r.rfc4648({
					prefix: "F",
					name: "base16upper",
					alphabet: "0123456789ABCDEF",
					bitsPerChar: 4
				});
			t.base16 = i, t.base16upper = s
		},
		"./node_modules/multiformats/cjs/src/bases/base2.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/multiformats/cjs/src/bases/base.js").rfc4648({
				prefix: "0",
				name: "base2",
				alphabet: "01",
				bitsPerChar: 1
			});
			t.base2 = r
		},
		"./node_modules/multiformats/cjs/src/bases/base256emoji.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js");
			const i = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
				s = i.reduce((e, t, n) => (e[n] = t, e), []),
				o = i.reduce((e, t, n) => (e[t.codePointAt(0)] = n, e), []);
			const a = r.from({
				prefix: "🚀",
				name: "base256emoji",
				encode: function(e) {
					return e.reduce((e, t) => e += s[t], "")
				},
				decode: function(e) {
					const t = [];
					for (const n of e) {
						const e = o[n.codePointAt(0)];
						if (void 0 === e) throw new Error(`Non-base256emoji character: ${n}`);
						t.push(e)
					}
					return new Uint8Array(t)
				}
			});
			t.base256emoji = a
		},
		"./node_modules/multiformats/cjs/src/bases/base32.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js");
			const i = r.rfc4648({
					prefix: "b",
					name: "base32",
					alphabet: "abcdefghijklmnopqrstuvwxyz234567",
					bitsPerChar: 5
				}),
				s = r.rfc4648({
					prefix: "B",
					name: "base32upper",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
					bitsPerChar: 5
				}),
				o = r.rfc4648({
					prefix: "c",
					name: "base32pad",
					alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
					bitsPerChar: 5
				}),
				a = r.rfc4648({
					prefix: "C",
					name: "base32padupper",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
					bitsPerChar: 5
				}),
				c = r.rfc4648({
					prefix: "v",
					name: "base32hex",
					alphabet: "0123456789abcdefghijklmnopqrstuv",
					bitsPerChar: 5
				}),
				u = r.rfc4648({
					prefix: "V",
					name: "base32hexupper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
					bitsPerChar: 5
				}),
				l = r.rfc4648({
					prefix: "t",
					name: "base32hexpad",
					alphabet: "0123456789abcdefghijklmnopqrstuv=",
					bitsPerChar: 5
				}),
				h = r.rfc4648({
					prefix: "T",
					name: "base32hexpadupper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
					bitsPerChar: 5
				}),
				d = r.rfc4648({
					prefix: "h",
					name: "base32z",
					alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
					bitsPerChar: 5
				});
			t.base32 = i, t.base32hex = c, t.base32hexpad = l, t.base32hexpadupper = h, t.base32hexupper = u, t.base32pad = o, t.base32padupper = a, t.base32upper = s, t.base32z = d
		},
		"./node_modules/multiformats/cjs/src/bases/base36.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js");
			const i = r.baseX({
					prefix: "k",
					name: "base36",
					alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
				}),
				s = r.baseX({
					prefix: "K",
					name: "base36upper",
					alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
				});
			t.base36 = i, t.base36upper = s
		},
		"./node_modules/multiformats/cjs/src/bases/base58.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js");
			const i = r.baseX({
					name: "base58btc",
					prefix: "z",
					alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
				}),
				s = r.baseX({
					name: "base58flickr",
					prefix: "Z",
					alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
				});
			t.base58btc = i, t.base58flickr = s
		},
		"./node_modules/multiformats/cjs/src/bases/base64.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js");
			const i = r.rfc4648({
					prefix: "m",
					name: "base64",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
					bitsPerChar: 6
				}),
				s = r.rfc4648({
					prefix: "M",
					name: "base64pad",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					bitsPerChar: 6
				}),
				o = r.rfc4648({
					prefix: "u",
					name: "base64url",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
					bitsPerChar: 6
				}),
				a = r.rfc4648({
					prefix: "U",
					name: "base64urlpad",
					alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
					bitsPerChar: 6
				});
			t.base64 = i, t.base64pad = s, t.base64url = o, t.base64urlpad = a
		},
		"./node_modules/multiformats/cjs/src/bases/base8.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = n("./node_modules/multiformats/cjs/src/bases/base.js").rfc4648({
				prefix: "7",
				name: "base8",
				alphabet: "01234567",
				bitsPerChar: 3
			});
			t.base8 = r
		},
		"./node_modules/multiformats/cjs/src/bases/identity.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/base.js"),
				i = n("./node_modules/multiformats/cjs/src/bytes.js");
			const s = r.from({
				prefix: "\0",
				name: "identity",
				encode: e => i.toString(e),
				decode: e => i.fromString(e)
			});
			t.identity = s
		},
		"./node_modules/multiformats/cjs/src/basics.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bases/identity.js"),
				i = n("./node_modules/multiformats/cjs/src/bases/base2.js"),
				s = n("./node_modules/multiformats/cjs/src/bases/base8.js"),
				o = n("./node_modules/multiformats/cjs/src/bases/base10.js"),
				a = n("./node_modules/multiformats/cjs/src/bases/base16.js"),
				c = n("./node_modules/multiformats/cjs/src/bases/base32.js"),
				u = n("./node_modules/multiformats/cjs/src/bases/base36.js"),
				l = n("./node_modules/multiformats/cjs/src/bases/base58.js"),
				h = n("./node_modules/multiformats/cjs/src/bases/base64.js"),
				d = n("./node_modules/multiformats/cjs/src/bases/base256emoji.js"),
				f = n("./node_modules/multiformats/cjs/src/hashes/sha2-browser.js"),
				p = n("./node_modules/multiformats/cjs/src/hashes/identity.js"),
				g = n("./node_modules/multiformats/cjs/src/codecs/raw.js"),
				b = n("./node_modules/multiformats/cjs/src/codecs/json.js");
			n("./node_modules/multiformats/cjs/src/index.js");
			var y = n("./node_modules/multiformats/cjs/src/cid.js"),
				m = n("./node_modules/multiformats/cjs/src/hashes/hasher.js"),
				v = n("./node_modules/multiformats/cjs/src/hashes/digest.js"),
				_ = n("./node_modules/multiformats/cjs/src/varint.js"),
				w = n("./node_modules/multiformats/cjs/src/bytes.js");
			const j = {
					...r,
					...i,
					...s,
					...o,
					...a,
					...c,
					...u,
					...l,
					...h,
					...d
				},
				E = {
					...f,
					...p
				},
				O = {
					raw: g,
					json: b
				};
			t.CID = y.CID, t.hasher = m, t.digest = v, t.varint = _, t.bytes = w, t.bases = j, t.codecs = O, t.hashes = E
		},
		"./node_modules/multiformats/cjs/src/bytes.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = new Uint8Array(0);
			t.coerce = e => {
				if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
				if (e instanceof ArrayBuffer) return new Uint8Array(e);
				if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
				throw new Error("Unknown type, must be binary type")
			}, t.empty = r, t.equals = (e, t) => {
				if (e === t) return !0;
				if (e.byteLength !== t.byteLength) return !1;
				for (let n = 0; n < e.byteLength; n++)
					if (e[n] !== t[n]) return !1;
				return !0
			}, t.fromHex = e => {
				const t = e.match(/../g);
				return t ? new Uint8Array(t.map(e => parseInt(e, 16))) : r
			}, t.fromString = e => (new TextEncoder).encode(e), t.isBinary = e => e instanceof ArrayBuffer || ArrayBuffer.isView(e), t.toHex = e => e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), ""), t.toString = e => (new TextDecoder).decode(e)
		},
		"./node_modules/multiformats/cjs/src/cid.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/varint.js"),
				i = n("./node_modules/multiformats/cjs/src/hashes/digest.js"),
				s = n("./node_modules/multiformats/cjs/src/bases/base58.js"),
				o = n("./node_modules/multiformats/cjs/src/bases/base32.js"),
				a = n("./node_modules/multiformats/cjs/src/bytes.js");
			class c {
				constructor(e, t, n, r) {
					this.code = t, this.version = e, this.multihash = n, this.bytes = r, this.byteOffset = r.byteOffset, this.byteLength = r.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
						byteOffset: y,
						byteLength: y,
						code: b,
						version: b,
						multihash: b,
						bytes: b,
						_baseCache: y,
						asCID: y
					})
				}
				toV0() {
					switch (this.version) {
						case 0:
							return this;
						default: {
							const {
								code: e,
								multihash: t
							} = this;
							if (e !== d) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
							if (t.code !== f) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
							return c.createV0(t)
						}
					}
				}
				toV1() {
					switch (this.version) {
						case 0: {
							const {
								code: e,
								digest: t
							} = this.multihash, n = i.create(e, t);
							return c.createV1(this.code, n)
						}
						case 1:
							return this;
						default:
							throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
					}
				}
				equals(e) {
					return e && this.code === e.code && this.version === e.version && i.equals(this.multihash, e.multihash)
				}
				toString(e) {
					const {
						bytes: t,
						version: n,
						_baseCache: r
					} = this;
					switch (n) {
						case 0:
							return l(t, r, e || s.base58btc.encoder);
						default:
							return h(t, r, e || o.base32.encoder)
					}
				}
				toJSON() {
					return {
						code: this.code,
						version: this.version,
						hash: this.multihash.bytes
					}
				}
				get[Symbol.toStringTag]() {
					return "CID"
				} [Symbol.for("nodejs.util.inspect.custom")]() {
					return "CID(" + this.toString() + ")"
				}
				static isCID(e) {
					return m(/^0\.0/, v), !(!e || !e[g] && e.asCID !== e)
				}
				get toBaseEncodedString() {
					throw new Error("Deprecated, use .toString()")
				}
				get codec() {
					throw new Error('"codec" property is deprecated, use integer "code" property instead')
				}
				get buffer() {
					throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
				}
				get multibaseName() {
					throw new Error('"multibaseName" property is deprecated')
				}
				get prefix() {
					throw new Error('"prefix" property is deprecated')
				}
				static asCID(e) {
					if (e instanceof c) return e;
					if (null != e && e.asCID === e) {
						const {
							version: t,
							code: n,
							multihash: r,
							bytes: i
						} = e;
						return new c(t, n, r, i || p(t, n, r.bytes))
					}
					if (null != e && !0 === e[g]) {
						const {
							version: t,
							multihash: n,
							code: r
						} = e, s = i.decode(n);
						return c.create(t, r, s)
					}
					return null
				}
				static create(e, t, n) {
					if ("number" != typeof t) throw new Error("String codecs are no longer supported");
					switch (e) {
						case 0:
							if (t !== d) throw new Error(`Version 0 CID must use dag-pb (code: ${d}) block encoding`);
							return new c(e, t, n, n.bytes);
						case 1: {
							const r = p(e, t, n.bytes);
							return new c(e, t, n, r)
						}
						default:
							throw new Error("Invalid version")
					}
				}
				static createV0(e) {
					return c.create(0, d, e)
				}
				static createV1(e, t) {
					return c.create(1, e, t)
				}
				static decode(e) {
					const [t, n] = c.decodeFirst(e);
					if (n.length) throw new Error("Incorrect length");
					return t
				}
				static decodeFirst(e) {
					const t = c.inspectBytes(e),
						n = t.size - t.multihashSize,
						r = a.coerce(e.subarray(n, n + t.multihashSize));
					if (r.byteLength !== t.multihashSize) throw new Error("Incorrect length");
					const s = r.subarray(t.multihashSize - t.digestSize),
						o = new i.Digest(t.multihashCode, t.digestSize, s, r);
					return [0 === t.version ? c.createV0(o) : c.createV1(t.codec, o), e.subarray(t.size)]
				}
				static inspectBytes(e) {
					let t = 0;
					const n = () => {
						const [n, i] = r.decode(e.subarray(t));
						return t += i, n
					};
					let i = n(),
						s = d;
					if (18 === i ? (i = 0, t = 0) : 1 === i && (s = n()), 0 !== i && 1 !== i) throw new RangeError(`Invalid CID version ${i}`);
					const o = t,
						a = n(),
						c = n(),
						u = t + c;
					return {
						version: i,
						codec: s,
						multihashCode: a,
						digestSize: c,
						multihashSize: u - o,
						size: u
					}
				}
				static parse(e, t) {
					const [n, r] = u(e, t), i = c.decode(r);
					return i._baseCache.set(n, e), i
				}
			}
			const u = (e, t) => {
					switch (e[0]) {
						case "Q": {
							const n = t || s.base58btc;
							return [s.base58btc.prefix, n.decode(`${s.base58btc.prefix}${e}`)]
						}
						case s.base58btc.prefix: {
							const n = t || s.base58btc;
							return [s.base58btc.prefix, n.decode(e)]
						}
						case o.base32.prefix: {
							const n = t || o.base32;
							return [o.base32.prefix, n.decode(e)]
						}
						default:
							if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
							return [e[0], t.decode(e)]
					}
				},
				l = (e, t, n) => {
					const {
						prefix: r
					} = n;
					if (r !== s.base58btc.prefix) throw Error(`Cannot string encode V0 in ${n.name} encoding`);
					const i = t.get(r);
					if (null == i) {
						const i = n.encode(e).slice(1);
						return t.set(r, i), i
					}
					return i
				},
				h = (e, t, n) => {
					const {
						prefix: r
					} = n, i = t.get(r);
					if (null == i) {
						const i = n.encode(e);
						return t.set(r, i), i
					}
					return i
				},
				d = 112,
				f = 18,
				p = (e, t, n) => {
					const i = r.encodingLength(e),
						s = i + r.encodingLength(t),
						o = new Uint8Array(s + n.byteLength);
					return r.encodeTo(e, o, 0), r.encodeTo(t, o, i), o.set(n, s), o
				},
				g = Symbol.for("@ipld/js-cid/CID"),
				b = {
					writable: !1,
					configurable: !1,
					enumerable: !0
				},
				y = {
					writable: !1,
					enumerable: !1,
					configurable: !1
				},
				m = (e, t) => {
					if (!e.test("0.0.0-dev")) throw new Error(t);
					console.warn(t)
				},
				v = "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n";
			t.CID = c
		},
		"./node_modules/multiformats/cjs/src/codecs/json.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			const r = new TextEncoder,
				i = new TextDecoder;
			t.code = 512, t.decode = e => JSON.parse(i.decode(e)), t.encode = e => r.encode(JSON.stringify(e)), t.name = "json"
		},
		"./node_modules/multiformats/cjs/src/codecs/raw.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bytes.js");
			t.code = 85, t.decode = e => r.coerce(e), t.encode = e => r.coerce(e), t.name = "raw"
		},
		"./node_modules/multiformats/cjs/src/hashes/digest.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bytes.js"),
				i = n("./node_modules/multiformats/cjs/src/varint.js");
			class s {
				constructor(e, t, n, r) {
					this.code = e, this.size = t, this.digest = n, this.bytes = r
				}
			}
			t.Digest = s, t.create = (e, t) => {
				const n = t.byteLength,
					r = i.encodingLength(e),
					o = r + i.encodingLength(n),
					a = new Uint8Array(o + n);
				return i.encodeTo(e, a, 0), i.encodeTo(n, a, r), a.set(t, o), new s(e, n, t, a)
			}, t.decode = e => {
				const t = r.coerce(e),
					[n, o] = i.decode(t),
					[a, c] = i.decode(t.subarray(o)),
					u = t.subarray(o + c);
				if (u.byteLength !== a) throw new Error("Incorrect length");
				return new s(n, a, u, t)
			}, t.equals = (e, t) => e === t || e.code === t.code && e.size === t.size && r.equals(e.bytes, t.bytes)
		},
		"./node_modules/multiformats/cjs/src/hashes/hasher.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/hashes/digest.js");
			class i {
				constructor(e, t, n) {
					this.name = e, this.code = t, this.encode = n
				}
				digest(e) {
					if (e instanceof Uint8Array) {
						const t = this.encode(e);
						return t instanceof Uint8Array ? r.create(this.code, t) : t.then(e => r.create(this.code, e))
					}
					throw Error("Unknown type, must be binary type")
				}
			}
			t.Hasher = i, t.from = ({
				name: e,
				code: t,
				encode: n
			}) => new i(e, t, n)
		},
		"./node_modules/multiformats/cjs/src/hashes/identity.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/bytes.js"),
				i = n("./node_modules/multiformats/cjs/src/hashes/digest.js");
			const s = r.coerce,
				o = {
					code: 0,
					name: "identity",
					encode: s,
					digest: e => i.create(0, s(e))
				};
			t.identity = o
		},
		"./node_modules/multiformats/cjs/src/hashes/sha2-browser.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/hashes/hasher.js");
			const i = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)), s = r.from({
				name: "sha2-256",
				code: 18,
				encode: i("SHA-256")
			}), o = r.from({
				name: "sha2-512",
				code: 19,
				encode: i("SHA-512")
			});
			t.sha256 = s, t.sha512 = o
		},
		"./node_modules/multiformats/cjs/src/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/src/cid.js"),
				i = n("./node_modules/multiformats/cjs/src/varint.js"),
				s = n("./node_modules/multiformats/cjs/src/bytes.js"),
				o = n("./node_modules/multiformats/cjs/src/hashes/hasher.js"),
				a = n("./node_modules/multiformats/cjs/src/hashes/digest.js");
			t.CID = r.CID, t.varint = i, t.bytes = s, t.hasher = o, t.digest = a
		},
		"./node_modules/multiformats/cjs/src/varint.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/multiformats/cjs/vendor/varint.js");
			t.decode = (e, t = 0) => {
				return [r.decode(e, t), r.decode.bytes]
			}, t.encodeTo = (e, t, n = 0) => (r.encode(e, t, n), t), t.encodingLength = e => r.encodingLength(e)
		},
		"./node_modules/multiformats/cjs/vendor/base-x.js": function(e, t, n) {
			"use strict";
			var r = function(e, t) {
				if (e.length >= 255) throw new TypeError("Alphabet too long");
				for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
				for (var i = 0; i < e.length; i++) {
					var s = e.charAt(i),
						o = s.charCodeAt(0);
					if (255 !== n[o]) throw new TypeError(s + " is ambiguous");
					n[o] = i
				}
				var a = e.length,
					c = e.charAt(0),
					u = Math.log(a) / Math.log(256),
					l = Math.log(256) / Math.log(a);

				function h(e) {
					if ("string" != typeof e) throw new TypeError("Expected String");
					if (0 === e.length) return new Uint8Array;
					var t = 0;
					if (" " !== e[t]) {
						for (var r = 0, i = 0; e[t] === c;) r++, t++;
						for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
							var l = n[e.charCodeAt(t)];
							if (255 === l) return;
							for (var h = 0, d = s - 1;
								(0 !== l || h < i) && -1 !== d; d--, h++) l += a * o[d] >>> 0, o[d] = l % 256 >>> 0, l = l / 256 >>> 0;
							if (0 !== l) throw new Error("Non-zero carry");
							i = h, t++
						}
						if (" " !== e[t]) {
							for (var f = s - i; f !== s && 0 === o[f];) f++;
							for (var p = new Uint8Array(r + (s - f)), g = r; f !== s;) p[g++] = o[f++];
							return p
						}
					}
				}
				return {
					encode: function(t) {
						if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
						if (0 === t.length) return "";
						for (var n = 0, r = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, n++;
						for (var o = (s - i) * l + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
							for (var h = t[i], d = 0, f = o - 1;
								(0 !== h || d < r) && -1 !== f; f--, d++) h += 256 * u[f] >>> 0, u[f] = h % a >>> 0, h = h / a >>> 0;
							if (0 !== h) throw new Error("Non-zero carry");
							r = d, i++
						}
						for (var p = o - r; p !== o && 0 === u[p];) p++;
						for (var g = c.repeat(n); p < o; ++p) g += e.charAt(u[p]);
						return g
					},
					decodeUnsafe: h,
					decode: function(e) {
						var n = h(e);
						if (n) return n;
						throw new Error(`Non-${t} character`)
					}
				}
			};
			e.exports = r
		},
		"./node_modules/multiformats/cjs/vendor/varint.js": function(e, t, n) {
			"use strict";
			var r = function e(t, n, r) {
					n = n || [];
					r = r || 0;
					var a = r;
					for (; t >= o;) n[r++] = 255 & t | i, t /= 128;
					for (; t & s;) n[r++] = 255 & t | i, t >>>= 7;
					n[r] = 0 | t;
					e.bytes = r - a + 1;
					return n
				},
				i = 128,
				s = -128,
				o = Math.pow(2, 31);
			var a = function e(t, n) {
					var r, i = 0,
						s = (n = n || 0, 0),
						o = n,
						a = t.length;
					do {
						if (o >= a) throw e.bytes = 0, new RangeError("Could not decode varint");
						r = t[o++], i += s < 28 ? (r & u) << s : (r & u) * Math.pow(2, s), s += 7
					} while (r >= c);
					e.bytes = o - n;
					return i
				},
				c = 128,
				u = 127;
			var l = Math.pow(2, 7),
				h = Math.pow(2, 14),
				d = Math.pow(2, 21),
				f = Math.pow(2, 28),
				p = Math.pow(2, 35),
				g = Math.pow(2, 42),
				b = Math.pow(2, 49),
				y = Math.pow(2, 56),
				m = Math.pow(2, 63),
				v = {
					encode: r,
					decode: a,
					encodingLength: function(e) {
						return e < l ? 1 : e < h ? 2 : e < d ? 3 : e < f ? 4 : e < p ? 5 : e < g ? 6 : e < b ? 7 : e < y ? 8 : e < m ? 9 : 10
					}
				};
			e.exports = v
		},
		"./node_modules/quick-format-unescaped/index.js": function(e, t, n) {
			"use strict";

			function r(e) {
				try {
					return JSON.stringify(e)
				} catch (t) {
					return '"[Circular]"'
				}
			}
			e.exports = function(e, t, n) {
				var i = n && n.stringify || r;
				if ("object" == typeof e && null !== e) {
					var s = t.length + 1;
					if (1 === s) return e;
					var o = new Array(s);
					o[0] = i(e);
					for (var a = 1; a < s; a++) o[a] = i(t[a]);
					return o.join(" ")
				}
				if ("string" != typeof e) return e;
				var c = t.length;
				if (0 === c) return e;
				for (var u = "", l = 0, h = -1, d = e && e.length || 0, f = 0; f < d;) {
					if (37 === e.charCodeAt(f) && f + 1 < d) {
						switch (h = h > -1 ? h : 0, e.charCodeAt(f + 1)) {
							case 100:
							case 102:
								if (l >= c) break;
								if (null == t[l]) break;
								h < f && (u += e.slice(h, f)), u += Number(t[l]), h = f + 2, f++;
								break;
							case 105:
								if (l >= c) break;
								if (null == t[l]) break;
								h < f && (u += e.slice(h, f)), u += Math.floor(Number(t[l])), h = f + 2, f++;
								break;
							case 79:
							case 111:
							case 106:
								if (l >= c) break;
								if (void 0 === t[l]) break;
								h < f && (u += e.slice(h, f));
								var p = typeof t[l];
								if ("string" === p) {
									u += "'" + t[l] + "'", h = f + 2, f++;
									break
								}
								if ("function" === p) {
									u += t[l].name || "<anonymous>", h = f + 2, f++;
									break
								}
								u += i(t[l]), h = f + 2, f++;
								break;
							case 115:
								if (l >= c) break;
								h < f && (u += e.slice(h, f)), u += String(t[l]), h = f + 2, f++;
								break;
							case 37:
								h < f && (u += e.slice(h, f)), u += "%", h = f + 2, f++, l--
						}++l
					}++f
				}
				if (-1 === h) return e;
				h < d && (u += e.slice(h));
				return u
			}
		},
		"./node_modules/safe-json-utils/dist/cjs/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.safeJsonParse = function(e) {
				if ("string" != typeof e) throw new Error(`Cannot safe json parse value of type ${typeof e}`);
				try {
					return JSON.parse(e)
				} catch (t) {
					return e
				}
			}, t.safeJsonStringify = function(e) {
				return "string" == typeof e ? e : JSON.stringify(e, (e, t) => void 0 === t ? null : t)
			}
		},
		"./node_modules/uint8arrays/cjs/src/alloc.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/uint8arrays/cjs/src/util/as-uint8array.js");
			t.alloc = function(e = 0) {
				return null != globalThis.Buffer && null != globalThis.Buffer.alloc ? r.asUint8Array(globalThis.Buffer.alloc(e)) : new Uint8Array(e)
			}, t.allocUnsafe = function(e = 0) {
				return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? r.asUint8Array(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
			}
		},
		"./node_modules/uint8arrays/cjs/src/compare.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.compare = function(e, t) {
				for (let n = 0; n < e.byteLength; n++) {
					if (e[n] < t[n]) return -1;
					if (e[n] > t[n]) return 1
				}
				return e.byteLength > t.byteLength ? 1 : e.byteLength < t.byteLength ? -1 : 0
			}
		},
		"./node_modules/uint8arrays/cjs/src/concat.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/uint8arrays/cjs/src/alloc.js"),
				i = n("./node_modules/uint8arrays/cjs/src/util/as-uint8array.js");
			t.concat = function(e, t) {
				t || (t = e.reduce((e, t) => e + t.length, 0));
				const n = r.allocUnsafe(t);
				let s = 0;
				for (const r of e) n.set(r, s), s += r.length;
				return i.asUint8Array(n)
			}
		},
		"./node_modules/uint8arrays/cjs/src/equals.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.equals = function(e, t) {
				if (e === t) return !0;
				if (e.byteLength !== t.byteLength) return !1;
				for (let n = 0; n < e.byteLength; n++)
					if (e[n] !== t[n]) return !1;
				return !0
			}
		},
		"./node_modules/uint8arrays/cjs/src/from-string.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/uint8arrays/cjs/src/util/bases.js"),
				i = n("./node_modules/uint8arrays/cjs/src/util/as-uint8array.js");
			t.fromString = function(e, t = "utf8") {
				const n = r[t];
				if (!n) throw new Error(`Unsupported encoding "${t}"`);
				return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? n.decoder.decode(`${n.prefix}${e}`) : i.asUint8Array(globalThis.Buffer.from(e, "utf-8"))
			}
		},
		"./node_modules/uint8arrays/cjs/src/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/uint8arrays/cjs/src/compare.js"),
				i = n("./node_modules/uint8arrays/cjs/src/concat.js"),
				s = n("./node_modules/uint8arrays/cjs/src/equals.js"),
				o = n("./node_modules/uint8arrays/cjs/src/from-string.js"),
				a = n("./node_modules/uint8arrays/cjs/src/to-string.js"),
				c = n("./node_modules/uint8arrays/cjs/src/xor.js");
			t.compare = r.compare, t.concat = i.concat, t.equals = s.equals, t.fromString = o.fromString, t.toString = a.toString, t.xor = c.xor
		},
		"./node_modules/uint8arrays/cjs/src/to-string.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/uint8arrays/cjs/src/util/bases.js");
			t.toString = function(e, t = "utf8") {
				const n = r[t];
				if (!n) throw new Error(`Unsupported encoding "${t}"`);
				return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? n.encoder.encode(e).substring(1) : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8")
			}
		},
		"./node_modules/uint8arrays/cjs/src/util/as-uint8array.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.asUint8Array = function(e) {
				return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
			}
		},
		"./node_modules/uint8arrays/cjs/src/util/bases.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/multiformats/cjs/src/basics.js"),
				i = n("./node_modules/uint8arrays/cjs/src/alloc.js");

			function s(e, t, n, r) {
				return {
					name: e,
					prefix: t,
					encoder: {
						name: e,
						prefix: t,
						encode: n
					},
					decoder: {
						decode: r
					}
				}
			}
			const o = s("utf8", "u", e => {
					return "u" + new TextDecoder("utf8").decode(e)
				}, e => {
					return (new TextEncoder).encode(e.substring(1))
				}),
				a = s("ascii", "a", e => {
					let t = "a";
					for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
					return t
				}, e => {
					e = e.substring(1);
					const t = i.allocUnsafe(e.length);
					for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
					return t
				}),
				c = {
					utf8: o,
					"utf-8": o,
					hex: r.bases.base16,
					latin1: a,
					ascii: a,
					binary: a,
					...r.bases
				};
			e.exports = c
		},
		"./node_modules/uint8arrays/cjs/src/xor.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n("./node_modules/uint8arrays/cjs/src/alloc.js"),
				i = n("./node_modules/uint8arrays/cjs/src/util/as-uint8array.js");
			t.xor = function(e, t) {
				if (e.length !== t.length) throw new Error("Inputs should have the same length");
				const n = r.allocUnsafe(e.length);
				for (let r = 0; r < e.length; r++) n[r] = e[r] ^ t[r];
				return i.asUint8Array(n)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/1.d0f48cd40ae06b54f855.js.map