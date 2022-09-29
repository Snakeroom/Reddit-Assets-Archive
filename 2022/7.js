// https://www.redditstatic.com/desktop2x/7.71018da07ebee28a8b68.js
// Retrieved at 9/29/2022, 4:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[7], {
		"./node_modules/@reddit/shreddit.components.shreddit-player/node_modules/hls.js/dist/hls.min.js": function(t, e, i) {
			"undefined" != typeof window && (t.exports = function(t) {
				var e = {};

				function i(r) {
					if (e[r]) return e[r].exports;
					var a = e[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return t[r].call(a.exports, a, a.exports, i), a.l = !0, a.exports
				}
				return i.m = t, i.c = e, i.d = function(t, e, r) {
					i.o(t, e) || Object.defineProperty(t, e, {
						enumerable: !0,
						get: r
					})
				}, i.r = function(t) {
					"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
						value: "Module"
					}), Object.defineProperty(t, "__esModule", {
						value: !0
					})
				}, i.t = function(t, e) {
					if (1 & e && (t = i(t)), 8 & e) return t;
					if (4 & e && "object" == typeof t && t && t.__esModule) return t;
					var r = Object.create(null);
					if (i.r(r), Object.defineProperty(r, "default", {
							enumerable: !0,
							value: t
						}), 2 & e && "string" != typeof t)
						for (var a in t) i.d(r, a, function(e) {
							return t[e]
						}.bind(null, a));
					return r
				}, i.n = function(t) {
					var e = t && t.__esModule ? function() {
						return t.default
					} : function() {
						return t
					};
					return i.d(e, "a", e), e
				}, i.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}, i.p = "/dist/", i(i.s = 21)
			}([function(t, e, i) {
				"use strict";
				var r;
				i.d(e, "a", (function() {
						return r
					})),
					function(t) {
						t.MEDIA_ATTACHING = "hlsMediaAttaching", t.MEDIA_ATTACHED = "hlsMediaAttached", t.MEDIA_DETACHING = "hlsMediaDetaching", t.MEDIA_DETACHED = "hlsMediaDetached", t.BUFFER_RESET = "hlsBufferReset", t.BUFFER_CODECS = "hlsBufferCodecs", t.BUFFER_CREATED = "hlsBufferCreated", t.BUFFER_APPENDING = "hlsBufferAppending", t.BUFFER_APPENDED = "hlsBufferAppended", t.BUFFER_EOS = "hlsBufferEos", t.BUFFER_FLUSHING = "hlsBufferFlushing", t.BUFFER_FLUSHED = "hlsBufferFlushed", t.MANIFEST_LOADING = "hlsManifestLoading", t.MANIFEST_LOADED = "hlsManifestLoaded", t.MANIFEST_PARSED = "hlsManifestParsed", t.LEVEL_SWITCHING = "hlsLevelSwitching", t.LEVEL_SWITCHED = "hlsLevelSwitched", t.LEVEL_LOADING = "hlsLevelLoading", t.LEVEL_LOADED = "hlsLevelLoaded", t.LEVEL_UPDATED = "hlsLevelUpdated", t.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", t.LEVELS_UPDATED = "hlsLevelsUpdated", t.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", t.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", t.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", t.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", t.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", t.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", t.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", t.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", t.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", t.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", t.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", t.CUES_PARSED = "hlsCuesParsed", t.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", t.INIT_PTS_FOUND = "hlsInitPtsFound", t.FRAG_LOADING = "hlsFragLoading", t.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", t.FRAG_LOADED = "hlsFragLoaded", t.FRAG_DECRYPTED = "hlsFragDecrypted", t.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", t.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", t.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", t.FRAG_PARSED = "hlsFragParsed", t.FRAG_BUFFERED = "hlsFragBuffered", t.FRAG_CHANGED = "hlsFragChanged", t.FPS_DROP = "hlsFpsDrop", t.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", t.ERROR = "hlsError", t.DESTROYING = "hlsDestroying", t.KEY_LOADING = "hlsKeyLoading", t.KEY_LOADED = "hlsKeyLoaded", t.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", t.BACK_BUFFER_REACHED = "hlsBackBufferReached"
					}(r || (r = {}))
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return o
				})), i.d(e, "b", (function() {
					return l
				}));
				var r = function() {},
					a = {
						trace: r,
						debug: r,
						log: r,
						warn: r,
						info: r,
						error: r
					},
					n = a;

				function s(t) {
					var e = self.console[t];
					return e ? e.bind(self.console, "[" + t + "] >") : r
				}

				function o(t) {
					if (self.console && !0 === t || "object" == typeof t) {
						! function(t) {
							for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
							i.forEach((function(e) {
								n[e] = t[e] ? t[e].bind(t) : s(e)
							}))
						}(t, "debug", "log", "info", "warn", "error");
						try {
							n.log()
						} catch (t) {
							n = a
						}
					} else n = a
				}
				var l = a
			}, function(t, e, i) {
				"use strict";
				var r, a;
				i.d(e, "b", (function() {
						return r
					})), i.d(e, "a", (function() {
						return a
					})),
					function(t) {
						t.NETWORK_ERROR = "networkError", t.MEDIA_ERROR = "mediaError", t.KEY_SYSTEM_ERROR = "keySystemError", t.MUX_ERROR = "muxError", t.OTHER_ERROR = "otherError"
					}(r || (r = {})),
					function(t) {
						t.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", t.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", t.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", t.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", t.MANIFEST_LOAD_ERROR = "manifestLoadError", t.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", t.MANIFEST_PARSING_ERROR = "manifestParsingError", t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", t.LEVEL_EMPTY_ERROR = "levelEmptyError", t.LEVEL_LOAD_ERROR = "levelLoadError", t.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", t.LEVEL_SWITCH_ERROR = "levelSwitchError", t.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", t.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", t.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", t.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", t.FRAG_LOAD_ERROR = "fragLoadError", t.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", t.FRAG_DECRYPT_ERROR = "fragDecryptError", t.FRAG_PARSING_ERROR = "fragParsingError", t.REMUX_ALLOC_ERROR = "remuxAllocError", t.KEY_LOAD_ERROR = "keyLoadError", t.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", t.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", t.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", t.BUFFER_APPEND_ERROR = "bufferAppendError", t.BUFFER_APPENDING_ERROR = "bufferAppendingError", t.BUFFER_STALLED_ERROR = "bufferStalledError", t.BUFFER_FULL_ERROR = "bufferFullError", t.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", t.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", t.INTERNAL_EXCEPTION = "internalException", t.INTERNAL_ABORTED = "aborted", t.UNKNOWN = "unknown"
					}(a || (a = {}))
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return r
				}));
				var r = Number.isFinite || function(t) {
					return "number" == typeof t && isFinite(t)
				};
				Number.MAX_SAFE_INTEGER
			}, function(t, e, i) {
				"use strict";
				var r, a;
				i.d(e, "a", (function() {
						return r
					})), i.d(e, "b", (function() {
						return a
					})),
					function(t) {
						t.MANIFEST = "manifest", t.LEVEL = "level", t.AUDIO_TRACK = "audioTrack", t.SUBTITLE_TRACK = "subtitleTrack"
					}(r || (r = {})),
					function(t) {
						t.MAIN = "main", t.AUDIO = "audio", t.SUBTITLE = "subtitle"
					}(a || (a = {}))
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return l
				})), i.d(e, "c", (function() {
					return g
				})), i.d(e, "k", (function() {
					return v
				})), i.d(e, "h", (function() {
					return p
				})), i.d(e, "e", (function() {
					return m
				})), i.d(e, "d", (function() {
					return y
				})), i.d(e, "f", (function() {
					return b
				})), i.d(e, "l", (function() {
					return E
				})), i.d(e, "b", (function() {
					return S
				})), i.d(e, "j", (function() {
					return L
				})), i.d(e, "i", (function() {
					return D
				})), i.d(e, "g", (function() {
					return R
				}));
				var r = i(10),
					a = i(6),
					n = i(7),
					s = Math.pow(2, 32) - 1,
					o = [].push,
					l = {
						video: 1,
						audio: 2,
						id3: 3,
						text: 4
					};

				function u(t) {
					return String.fromCharCode.apply(null, t)
				}

				function h(t, e) {
					var i = t[e] << 8 | t[e + 1];
					return i < 0 ? 65536 + i : i
				}

				function d(t, e) {
					var i = c(t, e);
					return i < 0 ? 4294967296 + i : i
				}

				function c(t, e) {
					return t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
				}

				function f(t, e, i) {
					t[e] = i >> 24, t[e + 1] = i >> 16 & 255, t[e + 2] = i >> 8 & 255, t[e + 3] = 255 & i
				}

				function g(t, e) {
					var i = [];
					if (!e.length) return i;
					for (var r = t.byteLength, a = 0; a < r;) {
						var n = d(t, a),
							s = n > 1 ? a + n : r;
						if (u(t.subarray(a + 4, a + 8)) === e[0])
							if (1 === e.length) i.push(t.subarray(a + 8, s));
							else {
								var l = g(t.subarray(a + 8, s), e.slice(1));
								l.length && o.apply(i, l)
							} a = s
					}
					return i
				}

				function v(t) {
					var e = [],
						i = t[0],
						r = 8,
						a = d(t, r);
					r += 4, r += 0 === i ? 8 : 16, r += 2;
					var n = t.length + 0,
						s = h(t, r);
					r += 2;
					for (var o = 0; o < s; o++) {
						var l = r,
							u = d(t, l);
						l += 4;
						var c = 2147483647 & u;
						if (1 == (2147483648 & u) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"), null;
						var f = d(t, l);
						l += 4, e.push({
							referenceSize: c,
							subsegmentDuration: f,
							info: {
								duration: f / a,
								start: n,
								end: n + c - 1
							}
						}), n += c, r = l += 4
					}
					return {
						earliestPresentationTime: 0,
						timescale: a,
						version: i,
						referencesCount: s,
						references: e
					}
				}

				function p(t) {
					for (var e = [], i = g(t, ["moov", "trak"]), r = 0; r < i.length; r++) {
						var n = i[r],
							s = g(n, ["tkhd"])[0];
						if (s) {
							var o = s[0],
								l = 0 === o ? 12 : 20,
								h = d(s, l),
								c = g(n, ["mdia", "mdhd"])[0];
							if (c) {
								var f = d(c, l = 0 === (o = c[0]) ? 12 : 20),
									v = g(n, ["mdia", "hdlr"])[0];
								if (v) {
									var p = u(v.subarray(8, 12)),
										m = {
											soun: a.a.AUDIO,
											vide: a.a.VIDEO
										} [p];
									if (m) {
										var y = g(n, ["mdia", "minf", "stbl", "stsd"])[0],
											T = void 0;
										y && (T = u(y.subarray(12, 16))), e[h] = {
											timescale: f,
											type: m
										}, e[m] = {
											timescale: f,
											id: h,
											codec: T
										}
									}
								}
							}
						}
					}
					return g(t, ["moov", "mvex", "trex"]).forEach((function(t) {
						var i = d(t, 4),
							r = e[i];
						r && (r.default = {
							duration: d(t, 12),
							flags: d(t, 20)
						})
					})), e
				}

				function m(t, e) {
					return g(e, ["moof", "traf"]).reduce((function(e, i) {
						var r = g(i, ["tfdt"])[0],
							a = r[0],
							n = g(i, ["tfhd"]).reduce((function(e, i) {
								var n = d(i, 4),
									s = t[n];
								if (s) {
									var o = d(r, 4);
									1 === a && (o *= Math.pow(2, 32), o += d(r, 8));
									var l = o / (s.timescale || 9e4);
									if (isFinite(l) && (null === e || l < e)) return l
								}
								return e
							}), null);
						return null !== n && isFinite(n) && (null === e || n < e) ? n : e
					}), null) || 0
				}

				function y(t, e) {
					for (var i = 0, r = 0, n = 0, s = g(t, ["moof", "traf"]), o = 0; o < s.length; o++) {
						var l = s[o],
							u = g(l, ["tfhd"])[0],
							h = e[d(u, 4)];
						if (h) {
							var c = h.default,
								f = d(u, 0) | (null == c ? void 0 : c.flags),
								p = null == c ? void 0 : c.duration;
							8 & f && (p = d(u, 2 & f ? 12 : 8));
							for (var m = h.timescale || 9e4, y = g(l, ["trun"]), b = 0; b < y.length; b++) !(i = T(y[b])) && p && (i = p * d(y[b], 4)), h.type === a.a.VIDEO ? r += i / m : h.type === a.a.AUDIO && (n += i / m)
						}
					}
					if (0 === r && 0 === n) {
						for (var E = 0, S = g(t, ["sidx"]), L = 0; L < S.length; L++) {
							var A = v(S[L]);
							null != A && A.references && (E += A.references.reduce((function(t, e) {
								return t + e.info.duration || 0
							}), 0))
						}
						return E
					}
					return r || n
				}

				function T(t) {
					var e = d(t, 0),
						i = 8;
					1 & e && (i += 4), 4 & e && (i += 4);
					for (var r = 0, a = d(t, 4), n = 0; n < a; n++) 256 & e && (r += d(t, i), i += 4), 512 & e && (i += 4), 1024 & e && (i += 4), 2048 & e && (i += 4);
					return r
				}

				function b(t, e, i) {
					g(e, ["moof", "traf"]).forEach((function(e) {
						g(e, ["tfhd"]).forEach((function(r) {
							var a = d(r, 4),
								n = t[a];
							if (n) {
								var o = n.timescale || 9e4;
								g(e, ["tfdt"]).forEach((function(t) {
									var e = t[0],
										r = d(t, 4);
									if (0 === e) r -= i * o, f(t, 4, r = Math.max(r, 0));
									else {
										r *= Math.pow(2, 32), r += d(t, 8), r -= i * o, r = Math.max(r, 0);
										var a = Math.floor(r / (s + 1)),
											n = Math.floor(r % (s + 1));
										f(t, 4, a), f(t, 8, n)
									}
								}))
							}
						}))
					}))
				}

				function E(t) {
					var e = {
							valid: null,
							remainder: null
						},
						i = g(t, ["moof"]);
					if (!i) return e;
					if (i.length < 2) return e.remainder = t, e;
					var a = i[i.length - 1];
					return e.valid = Object(r.a)(t, 0, a.byteOffset - 8), e.remainder = Object(r.a)(t, a.byteOffset - 8), e
				}

				function S(t, e) {
					var i = new Uint8Array(t.length + e.length);
					return i.set(t), i.set(e, t.length), i
				}

				function L(t, e) {
					var i = [],
						r = e.samples,
						n = e.timescale,
						s = e.id,
						o = !1;
					return g(r, ["moof"]).map((function(l) {
						var u = l.byteOffset - 8;
						g(l, ["traf"]).map((function(l) {
							var h = g(l, ["tfdt"]).map((function(t) {
								var e = t[0],
									i = d(t, 4);
								return 1 === e && (i *= Math.pow(2, 32), i += d(t, 8)), i / n
							}))[0];
							return void 0 !== h && (t = h), g(l, ["tfhd"]).map((function(h) {
								var f = d(h, 4),
									v = 16777215 & d(h, 0),
									p = 0,
									m = 0 != (16 & v),
									y = 0,
									T = 0 != (32 & v),
									b = 8;
								f === s && (0 != (1 & v) && (b += 8), 0 != (2 & v) && (b += 4), 0 != (8 & v) && (p = d(h, b), b += 4), m && (y = d(h, b), b += 4), T && (b += 4), "video" === e.type && (o = function(t) {
									if (!t) return !1;
									var e = t.indexOf("."),
										i = e < 0 ? t : t.substring(0, e);
									return "hvc1" === i || "hev1" === i || "dvh1" === i || "dvhe" === i
								}(e.codec)), g(l, ["trun"]).map((function(s) {
									var l = s[0],
										h = 16777215 & d(s, 0),
										f = 0 != (1 & h),
										g = 0,
										v = 0 != (4 & h),
										m = 0 != (256 & h),
										T = 0,
										b = 0 != (512 & h),
										E = 0,
										S = 0 != (1024 & h),
										L = 0 != (2048 & h),
										R = 0,
										k = d(s, 4),
										_ = 8;
									f && (g = d(s, _), _ += 4), v && (_ += 4);
									for (var I = g + u, O = 0; O < k; O++) {
										if (m ? (T = d(s, _), _ += 4) : T = p, b ? (E = d(s, _), _ += 4) : E = y, S && (_ += 4), L && (R = 0 === l ? d(s, _) : c(s, _), _ += 4), e.type === a.a.VIDEO)
											for (var C = 0; C < E;) {
												var w = d(r, I),
													x = 31 & r[I += 4];
												A(o, x) && D(r.subarray(I, I + w), t + R / n, i), I += w, C += w + 4
											}
										t += T / n
									}
								})))
							}))
						}))
					})), i
				}

				function A(t, e) {
					return t ? 39 === e || 40 === e : 6 === e
				}

				function D(t, e, i) {
					var r = function(t) {
							for (var e = t.byteLength, i = [], r = 1; r < e - 2;) 0 === t[r] && 0 === t[r + 1] && 3 === t[r + 2] ? (i.push(r + 2), r += 2) : r++;
							if (0 === i.length) return t;
							var a = e - i.length,
								n = new Uint8Array(a),
								s = 0;
							for (r = 0; r < a; s++, r++) s === i[0] && (s++, i.shift()), n[r] = t[s];
							return n
						}(t),
						a = 0;
					a++;
					for (var s = 0, o = 0, l = !1, u = 0; a < r.length;) {
						s = 0;
						do {
							if (a >= r.length) break;
							s += u = r[a++]
						} while (255 === u);
						o = 0;
						do {
							if (a >= r.length) break;
							o += u = r[a++]
						} while (255 === u);
						var c = r.length - a;
						if (!l && 4 === s && a < r.length) {
							if (l = !0, 181 === r[a++]) {
								var f = h(r, a);
								if (a += 2, 49 === f) {
									var g = d(r, a);
									if (a += 4, 1195456820 === g) {
										var v = r[a++];
										if (3 === v) {
											var p = r[a++],
												m = 64 & p,
												y = m ? 2 + 3 * (31 & p) : 0,
												T = new Uint8Array(y);
											if (m) {
												T[0] = p;
												for (var b = 1; b < y; b++) T[b] = r[a++]
											}
											i.push({
												type: v,
												payloadType: s,
												pts: e,
												bytes: T
											})
										}
									}
								}
							}
						} else if (5 === s && o < c) {
							if (l = !0, o > 16) {
								for (var E = [], S = 0; S < 16; S++) {
									var L = r[a++].toString(16);
									E.push(1 == L.length ? "0" + L : L), 3 !== S && 5 !== S && 7 !== S && 9 !== S || E.push("-")
								}
								for (var A = o - 16, D = new Uint8Array(A), R = 0; R < A; R++) D[R] = r[a++];
								i.push({
									payloadType: s,
									pts: e,
									uuid: E.join(""),
									userData: Object(n.f)(D),
									userDataBytes: D
								})
							}
						} else if (o < c) a += o;
						else if (o > c) break
					}
				}

				function R(t) {
					var e = t[0],
						i = "",
						r = "",
						a = 0,
						n = 0,
						s = 0,
						o = 0,
						l = 0,
						h = 0;
					if (0 === e) {
						for (;
							"\0" !== u(t.subarray(h, h + 1));) i += u(t.subarray(h, h + 1)), h += 1;
						for (i += u(t.subarray(h, h + 1)), h += 1;
							"\0" !== u(t.subarray(h, h + 1));) r += u(t.subarray(h, h + 1)), h += 1;
						r += u(t.subarray(h, h + 1)), h += 1, a = d(t, 12), n = d(t, 16), o = d(t, 20), l = d(t, 24), h = 28
					} else if (1 === e) {
						a = d(t, h += 4);
						var c = d(t, h += 4),
							f = d(t, h += 4);
						for (h += 4, s = Math.pow(2, 32) * c + f, Number.isSafeInteger(s) || (s = Number.MAX_SAFE_INTEGER, console.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = d(t, h), l = d(t, h += 4), h += 4;
							"\0" !== u(t.subarray(h, h + 1));) i += u(t.subarray(h, h + 1)), h += 1;
						for (i += u(t.subarray(h, h + 1)), h += 1;
							"\0" !== u(t.subarray(h, h + 1));) r += u(t.subarray(h, h + 1)), h += 1;
						r += u(t.subarray(h, h + 1)), h += 1
					}
					return {
						schemeIdUri: i,
						value: r,
						timeScale: a,
						presentationTime: s,
						presentationTimeDelta: n,
						eventDuration: o,
						id: l,
						payload: t.subarray(h, t.byteLength)
					}
				}
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return r
				})), i.d(e, "b", (function() {
					return f
				})), i.d(e, "c", (function() {
					return g
				}));
				var r, a = i(3),
					n = i(12),
					s = i(1),
					o = i(18),
					l = i(14);

				function u(t, e) {
					t.prototype = Object.create(e.prototype), t.prototype.constructor = t,
						function(t, e) {
							(Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
								return t.__proto__ = e, t
							})(t, e)
						}(t, e)
				}

				function h(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function d(t, e, i) {
					return e && h(t.prototype, e), i && h(t, i), Object.defineProperty(t, "prototype", {
						writable: !1
					}), t
				}! function(t) {
					t.AUDIO = "audio", t.VIDEO = "video", t.AUDIOVIDEO = "audiovideo"
				}(r || (r = {}));
				var c = function() {
						function t(t) {
							var e;
							this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e = {})[r.AUDIO] = null, e[r.VIDEO] = null, e[r.AUDIOVIDEO] = null, e), this.baseurl = t
						}
						return t.prototype.setByteRange = function(t, e) {
							var i = t.split("@", 2),
								r = [];
							1 === i.length ? r[0] = e ? e.byteRangeEndOffset : 0 : r[0] = parseInt(i[1]), r[1] = parseInt(i[0]) + r[0], this._byteRange = r
						}, d(t, [{
							key: "byteRange",
							get: function() {
								return this._byteRange ? this._byteRange : []
							}
						}, {
							key: "byteRangeStartOffset",
							get: function() {
								return this.byteRange[0]
							}
						}, {
							key: "byteRangeEndOffset",
							get: function() {
								return this.byteRange[1]
							}
						}, {
							key: "url",
							get: function() {
								return !this._url && this.baseurl && this.relurl && (this._url = Object(n.buildAbsoluteURL)(this.baseurl, this.relurl, {
									alwaysNormalize: !0
								})), this._url || ""
							},
							set: function(t) {
								this._url = t
							}
						}]), t
					}(),
					f = function(t) {
						function e(e, i) {
							var r;
							return (r = t.call(this, i) || this)._decryptdata = null, r.rawProgramDateTime = null, r.programDateTime = null, r.tagList = [], r.duration = 0, r.sn = 0, r.levelkey = void 0, r.type = void 0, r.loader = null, r.level = -1, r.cc = 0, r.startPTS = void 0, r.endPTS = void 0, r.appendedPTS = void 0, r.startDTS = void 0, r.endDTS = void 0, r.start = 0, r.deltaPTS = void 0, r.maxStartPTS = void 0, r.minEndPTS = void 0, r.stats = new l.a, r.urlId = 0, r.data = void 0, r.bitrateTest = !1, r.title = null, r.initSegment = null, r.type = e, r
						}
						u(e, t);
						var i = e.prototype;
						return i.createInitializationVector = function(t) {
							for (var e = new Uint8Array(16), i = 12; i < 16; i++) e[i] = t >> 8 * (15 - i) & 255;
							return e
						}, i.setDecryptDataFromLevelKey = function(t, e) {
							var i = t;
							return "AES-128" === (null == t ? void 0 : t.method) && t.uri && !t.iv && ((i = o.a.fromURI(t.uri)).method = t.method, i.iv = this.createInitializationVector(e), i.keyFormat = "identity"), i
						}, i.setElementaryStreamInfo = function(t, e, i, r, a, n) {
							void 0 === n && (n = !1);
							var s = this.elementaryStreams,
								o = s[t];
							o ? (o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, i), o.startDTS = Math.min(o.startDTS, r), o.endDTS = Math.max(o.endDTS, a)) : s[t] = {
								startPTS: e,
								endPTS: i,
								startDTS: r,
								endDTS: a,
								partial: n
							}
						}, i.clearElementaryStreamInfo = function() {
							var t = this.elementaryStreams;
							t[r.AUDIO] = null, t[r.VIDEO] = null, t[r.AUDIOVIDEO] = null
						}, d(e, [{
							key: "decryptdata",
							get: function() {
								if (!this.levelkey && !this._decryptdata) return null;
								if (!this._decryptdata && this.levelkey) {
									var t = this.sn;
									"number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
								}
								return this._decryptdata
							}
						}, {
							key: "end",
							get: function() {
								return this.start + this.duration
							}
						}, {
							key: "endProgramDateTime",
							get: function() {
								if (null === this.programDateTime) return null;
								if (!Object(a.a)(this.programDateTime)) return null;
								var t = Object(a.a)(this.duration) ? this.duration : 0;
								return this.programDateTime + 1e3 * t
							}
						}, {
							key: "encrypted",
							get: function() {
								var t;
								return !(null === (t = this.decryptdata) || void 0 === t || !t.keyFormat || !this.decryptdata.uri)
							}
						}]), e
					}(c),
					g = function(t) {
						function e(e, i, r, a, n) {
							var s;
							(s = t.call(this, r) || this).fragOffset = 0, s.duration = 0, s.gap = !1, s.independent = !1, s.relurl = void 0, s.fragment = void 0, s.index = void 0, s.stats = new l.a, s.duration = e.decimalFloatingPoint("DURATION"), s.gap = e.bool("GAP"), s.independent = e.bool("INDEPENDENT"), s.relurl = e.enumeratedString("URI"), s.fragment = i, s.index = a;
							var o = e.enumeratedString("BYTERANGE");
							return o && s.setByteRange(o, n), n && (s.fragOffset = n.fragOffset + n.duration), s
						}
						return u(e, t), d(e, [{
							key: "start",
							get: function() {
								return this.fragment.start + this.fragOffset
							}
						}, {
							key: "end",
							get: function() {
								return this.start + this.duration
							}
						}, {
							key: "loaded",
							get: function() {
								var t = this.elementaryStreams;
								return !!(t.audio || t.video || t.audiovideo)
							}
						}]), e
					}(c)
			}, function(t, e, i) {
				"use strict";
				i.d(e, "b", (function() {
					return s
				})), i.d(e, "a", (function() {
					return l
				})), i.d(e, "d", (function() {
					return u
				})), i.d(e, "e", (function() {
					return h
				})), i.d(e, "c", (function() {
					return c
				})), i.d(e, "f", (function() {
					return y
				}));
				var r, a = function(t, e) {
						return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
					},
					n = function(t, e) {
						return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
					},
					s = function(t, e) {
						for (var i = e, r = 0; a(t, e);) r += 10, r += o(t, e + 6), n(t, e + 10) && (r += 10), e += r;
						if (r > 0) return t.subarray(i, i + r)
					},
					o = function(t, e) {
						var i = 0;
						return i = (127 & t[e]) << 21, i |= (127 & t[e + 1]) << 14, (i |= (127 & t[e + 2]) << 7) | 127 & t[e + 3]
					},
					l = function(t, e) {
						return a(t, e) && o(t, e + 6) + 10 <= t.length - e
					},
					u = function(t) {
						for (var e = c(t), i = 0; i < e.length; i++) {
							var r = e[i];
							if (h(r)) return m(r)
						}
					},
					h = function(t) {
						return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
					},
					d = function(t) {
						var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
							i = o(t, 4);
						return {
							type: e,
							size: i,
							data: t.subarray(10, 10 + i)
						}
					},
					c = function(t) {
						for (var e = 0, i = []; a(t, e);) {
							for (var r = o(t, e + 6), s = (e += 10) + r; e + 8 < s;) {
								var l = d(t.subarray(e)),
									u = f(l);
								u && i.push(u), e += l.size + 10
							}
							n(t, e) && (e += 10)
						}
						return i
					},
					f = function(t) {
						return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t)
					},
					g = function(t) {
						if (!(t.size < 2)) {
							var e = y(t.data, !0),
								i = new Uint8Array(t.data.subarray(e.length + 1));
							return {
								key: t.type,
								info: e,
								data: i.buffer
							}
						}
					},
					v = function(t) {
						if (!(t.size < 2)) {
							if ("TXXX" === t.type) {
								var e = 1,
									i = y(t.data.subarray(e), !0);
								e += i.length + 1;
								var r = y(t.data.subarray(e));
								return {
									key: t.type,
									info: i,
									data: r
								}
							}
							var a = y(t.data.subarray(1));
							return {
								key: t.type,
								data: a
							}
						}
					},
					p = function(t) {
						if ("WXXX" === t.type) {
							if (t.size < 2) return;
							var e = 1,
								i = y(t.data.subarray(e), !0);
							e += i.length + 1;
							var r = y(t.data.subarray(e));
							return {
								key: t.type,
								info: i,
								data: r
							}
						}
						var a = y(t.data);
						return {
							key: t.type,
							data: a
						}
					},
					m = function(t) {
						if (8 === t.data.byteLength) {
							var e = new Uint8Array(t.data),
								i = 1 & e[3],
								r = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
							return r /= 45, i && (r += 47721858.84), Math.round(r)
						}
					},
					y = function(t, e) {
						void 0 === e && (e = !1);
						var i = T();
						if (i) {
							var r = i.decode(t);
							if (e) {
								var a = r.indexOf("\0");
								return -1 !== a ? r.substring(0, a) : r
							}
							return r.replace(/\0/g, "")
						}
						for (var n, s, o, l = t.length, u = "", h = 0; h < l;) {
							if (0 === (n = t[h++]) && e) return u;
							if (0 !== n && 3 !== n) switch (n >> 4) {
								case 0:
								case 1:
								case 2:
								case 3:
								case 4:
								case 5:
								case 6:
								case 7:
									u += String.fromCharCode(n);
									break;
								case 12:
								case 13:
									s = t[h++], u += String.fromCharCode((31 & n) << 6 | 63 & s);
									break;
								case 14:
									s = t[h++], o = t[h++], u += String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | (63 & o) << 0)
							}
						}
						return u
					};

				function T() {
					return r || void 0 === self.TextDecoder || (r = new self.TextDecoder("utf-8")), r
				}
			}, function(t, e, i) {
				"use strict";
				var r;
				i.d(e, "a", (function() {
						return r
					})),
					function(t) {
						t.audioId3 = "org.id3", t.dateRange = "com.apple.quicktime.HLS", t.emsg = "https://aomedia.org/emsg/ID3"
					}(r || (r = {}))
			}, function(t, e, i) {
				"use strict";

				function r(t, e, i, r) {
					void 0 === i && (i = 1), void 0 === r && (r = !1);
					var a = t * e * i;
					return r ? Math.round(a) : a
				}

				function a(t, e, i, a) {
					return void 0 === i && (i = 1), void 0 === a && (a = !1), r(t, e, 1 / i, a)
				}

				function n(t, e) {
					return void 0 === e && (e = !1), r(t, 1e3, 1 / 9e4, e)
				}

				function s(t, e) {
					return void 0 === e && (e = 1), r(t, 9e4, 1 / e)
				}
				i.d(e, "c", (function() {
					return a
				})), i.d(e, "b", (function() {
					return n
				})), i.d(e, "a", (function() {
					return s
				}))
			}, function(t, e, i) {
				"use strict";

				function r(t, e, i) {
					return Uint8Array.prototype.slice ? t.slice(e, i) : new Uint8Array(Array.prototype.slice.call(t, e, i))
				}
				i.d(e, "a", (function() {
					return r
				}))
			}, function(t, e, i) {
				"use strict";
				i.d(e, "c", (function() {
					return ht
				})), i.d(e, "d", (function() {
					return ct
				})), i.d(e, "a", (function() {
					return ft
				})), i.d(e, "b", (function() {
					return gt
				}));
				var r = i(0),
					a = i(2),
					n = i(17),
					s = i(3),
					o = i(7),
					l = i(8);

				function u(t, e) {
					return void 0 === t && (t = ""), void 0 === e && (e = 9e4), {
						type: t,
						id: -1,
						pid: -1,
						inputTimeScale: e,
						sequenceNumber: -1,
						samples: [],
						dropped: 0
					}
				}
				var h = i(5),
					d = i(10),
					c = function() {
						function t() {
							this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null
						}
						var e = t.prototype;
						return e.resetInitSegment = function(t, e, i, r) {
							this._id3Track = {
								type: "id3",
								id: 3,
								pid: -1,
								inputTimeScale: 9e4,
								sequenceNumber: 0,
								samples: [],
								dropped: 0
							}
						}, e.resetTimeStamp = function(t) {
							this.initPTS = t, this.resetContiguity()
						}, e.resetContiguity = function() {
							this.basePTS = null, this.frameIndex = 0
						}, e.canParse = function(t, e) {
							return !1
						}, e.appendFrame = function(t, e, i) {}, e.demux = function(t, e) {
							this.cachedData && (t = Object(h.b)(this.cachedData, t), this.cachedData = null);
							var i, r, a = o.b(t, 0),
								n = a ? a.length : 0,
								c = this._audioTrack,
								g = this._id3Track,
								v = a ? o.d(a) : void 0,
								p = t.length;
							for ((null === this.basePTS || 0 === this.frameIndex && Object(s.a)(v)) && (this.basePTS = f(v, e, this.initPTS)), a && a.length > 0 && g.samples.push({
									pts: this.basePTS,
									dts: this.basePTS,
									data: a,
									type: l.a.audioId3
								}), r = this.basePTS; n < p;) {
								if (this.canParse(t, n)) {
									var m = this.appendFrame(c, t, n);
									m ? (this.frameIndex++, r = m.sample.pts, i = n += m.length) : n = p
								} else o.a(t, n) ? (a = o.b(t, n), g.samples.push({
									pts: r,
									dts: r,
									data: a,
									type: l.a.audioId3
								}), i = n += a.length) : n++;
								if (n === p && i !== p) {
									var y = Object(d.a)(t, i);
									this.cachedData ? this.cachedData = Object(h.b)(this.cachedData, y) : this.cachedData = y
								}
							}
							return {
								audioTrack: c,
								videoTrack: u(),
								id3Track: g,
								textTrack: u()
							}
						}, e.demuxSampleAes = function(t, e, i) {
							return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
						}, e.flush = function(t) {
							var e = this.cachedData;
							return e && (this.cachedData = null, this.demux(e, 0)), {
								audioTrack: this._audioTrack,
								videoTrack: u(),
								id3Track: this._id3Track,
								textTrack: u()
							}
						}, e.destroy = function() {}, t
					}(),
					f = function(t, e, i) {
						return Object(s.a)(t) ? 90 * t : 9e4 * e + (i || 0)
					},
					g = c,
					v = i(1);

				function p(t, e) {
					return 255 === t[e] && 240 == (246 & t[e + 1])
				}

				function m(t, e) {
					return 1 & t[e + 1] ? 7 : 9
				}

				function y(t, e) {
					return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
				}

				function T(t, e) {
					return e + 1 < t.length && p(t, e)
				}

				function b(t, e) {
					if (T(t, e)) {
						var i = m(t, e);
						if (e + i >= t.length) return !1;
						var r = y(t, e);
						if (r <= i) return !1;
						var a = e + r;
						return a === t.length || T(t, a)
					}
					return !1
				}

				function E(t, e, i, n, s) {
					if (!t.samplerate) {
						var o = function(t, e, i, n) {
							var s, o, l, u, h = navigator.userAgent.toLowerCase(),
								d = n,
								c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
							s = 1 + ((192 & e[i + 2]) >>> 6);
							var f = (60 & e[i + 2]) >>> 2;
							if (!(f > c.length - 1)) return l = (1 & e[i + 2]) << 2, l |= (192 & e[i + 3]) >>> 6, v.b.log("manifest codec:" + n + ", ADTS type:" + s + ", samplingIndex:" + f), /firefox/i.test(h) ? f >= 6 ? (s = 5, u = new Array(4), o = f - 3) : (s = 2, u = new Array(2), o = f) : -1 !== h.indexOf("android") ? (s = 2, u = new Array(2), o = f) : (s = 5, u = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && f >= 6 ? o = f - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (f >= 6 && 1 === l || /vivaldi/i.test(h)) || !n && 1 === l) && (s = 2, u = new Array(2)), o = f)), u[0] = s << 3, u[0] |= (14 & f) >> 1, u[1] |= (1 & f) << 7, u[1] |= l << 3, 5 === s && (u[1] |= (14 & o) >> 1, u[2] = (1 & o) << 7, u[2] |= 8, u[3] = 0), {
								config: u,
								samplerate: c[f],
								channelCount: l,
								codec: "mp4a.40." + s,
								manifestCodec: d
							};
							t.trigger(r.a.ERROR, {
								type: a.b.MEDIA_ERROR,
								details: a.a.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "invalid ADTS sampling index:" + f
							})
						}(e, i, n, s);
						if (!o) return;
						t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, v.b.log("parsed codec:" + t.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount)
					}
				}

				function S(t) {
					return 9216e4 / t
				}

				function L(t, e, i, r, a) {
					var n, s = r + a * S(t.samplerate),
						o = function(t, e) {
							var i = m(t, e);
							if (e + i <= t.length) {
								var r = y(t, e) - i;
								if (r > 0) return {
									headerLength: i,
									frameLength: r
								}
							}
						}(e, i);
					if (o) {
						var l = o.frameLength,
							u = o.headerLength,
							h = u + l,
							d = Math.max(0, i + h - e.length);
						d ? (n = new Uint8Array(h - u)).set(e.subarray(i + u, e.length), 0) : n = e.subarray(i + u, i + h);
						var c = {
							unit: n,
							pts: s
						};
						return d || t.samples.push(c), {
							sample: c,
							length: h,
							missing: d
						}
					}
					var f = e.length - i;
					return (n = new Uint8Array(f)).set(e.subarray(i, e.length), 0), {
						sample: {
							unit: n,
							pts: s
						},
						length: f,
						missing: -1
					}
				}

				function A(t, e) {
					return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var D = function(t) {
					var e, i;

					function r(e, i) {
						var r;
						return (r = t.call(this) || this).observer = void 0, r.config = void 0, r.observer = e, r.config = i, r
					}
					i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, A(e, i);
					var a = r.prototype;
					return a.resetInitSegment = function(e, i, r, a) {
						t.prototype.resetInitSegment.call(this, e, i, r, a), this._audioTrack = {
							container: "audio/adts",
							type: "audio",
							id: 2,
							pid: -1,
							sequenceNumber: 0,
							segmentCodec: "aac",
							samples: [],
							manifestCodec: i,
							duration: a,
							inputTimeScale: 9e4,
							dropped: 0
						}
					}, r.probe = function(t) {
						if (!t) return !1;
						for (var e = (o.b(t, 0) || []).length, i = t.length; e < i; e++)
							if (b(t, e)) return v.b.log("ADTS sync word found !"), !0;
						return !1
					}, a.canParse = function(t, e) {
						return function(t, e) {
							return function(t, e) {
								return e + 5 < t.length
							}(t, e) && p(t, e) && y(t, e) <= t.length - e
						}(t, e)
					}, a.appendFrame = function(t, e, i) {
						E(t, this.observer, e, i, t.manifestCodec);
						var r = L(t, e, i, this.basePTS, this.frameIndex);
						if (r && 0 === r.missing) return r
					}, r
				}(g);
				D.minProbeByteLength = 9;
				var R = D,
					k = /\/emsg[-/]ID3/i,
					_ = function() {
						function t(t, e) {
							this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
						}
						var e = t.prototype;
						return e.resetTimeStamp = function() {}, e.resetInitSegment = function(t, e, i, r) {
							var a = Object(h.h)(t),
								n = this.videoTrack = u("video", 1),
								s = this.audioTrack = u("audio", 1),
								o = this.txtTrack = u("text", 1);
							if (this.id3Track = u("id3", 1), this.timeOffset = 0, a.video) {
								var l = a.video,
									d = l.id,
									c = l.timescale,
									f = l.codec;
								n.id = d, n.timescale = o.timescale = c, n.codec = f
							}
							if (a.audio) {
								var g = a.audio,
									v = g.id,
									p = g.timescale,
									m = g.codec;
								s.id = v, s.timescale = p, s.codec = m
							}
							o.id = h.a.text, n.sampleDuration = 0, n.duration = s.duration = r
						}, e.resetContiguity = function() {}, t.probe = function(t) {
							return t = t.length > 16384 ? t.subarray(0, 16384) : t, Object(h.c)(t, ["moof"]).length > 0
						}, e.demux = function(t, e) {
							this.timeOffset = e;
							var i = t,
								r = this.videoTrack,
								a = this.txtTrack;
							if (this.config.progressive) {
								this.remainderData && (i = Object(h.b)(this.remainderData, t));
								var n = Object(h.l)(i);
								this.remainderData = n.remainder, r.samples = n.valid || new Uint8Array
							} else r.samples = i;
							var s = this.extractID3Track(r, e);
							return a.samples = Object(h.j)(e, r), {
								videoTrack: r,
								audioTrack: this.audioTrack,
								id3Track: s,
								textTrack: this.txtTrack
							}
						}, e.flush = function() {
							var t = this.timeOffset,
								e = this.videoTrack,
								i = this.txtTrack;
							e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
							var r = this.extractID3Track(e, this.timeOffset);
							return i.samples = Object(h.j)(t, e), {
								videoTrack: e,
								audioTrack: u(),
								id3Track: r,
								textTrack: u()
							}
						}, e.extractID3Track = function(t, e) {
							var i = this.id3Track;
							if (t.samples.length) {
								var r = Object(h.c)(t.samples, ["emsg"]);
								r && r.forEach((function(t) {
									var r = Object(h.g)(t);
									if (k.test(r.schemeIdUri)) {
										var a = Object(s.a)(r.presentationTime) ? r.presentationTime / r.timeScale : e + r.presentationTimeDelta / r.timeScale,
											n = r.payload;
										i.samples.push({
											data: n,
											len: n.byteLength,
											dts: a,
											pts: a,
											type: l.a.emsg
										})
									}
								}))
							}
							return i
						}, e.demuxSampleAes = function(t, e, i) {
							return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
						}, e.destroy = function() {}, t
					}();
				_.minProbeByteLength = 1024;
				var I = _,
					O = null,
					C = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
					w = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
					x = [
						[0, 72, 144, 12],
						[0, 0, 0, 0],
						[0, 72, 144, 12],
						[0, 144, 144, 12]
					],
					P = [0, 1, 1, 4];

				function F(t, e, i, r, a) {
					if (!(i + 24 > e.length)) {
						var n = M(e, i);
						if (n && i + n.frameLength <= e.length) {
							var s = r + a * (9e4 * n.samplesPerFrame / n.sampleRate),
								o = {
									unit: e.subarray(i, i + n.frameLength),
									pts: s,
									dts: s
								};
							return t.config = [], t.channelCount = n.channelCount, t.samplerate = n.sampleRate, t.samples.push(o), {
								sample: o,
								length: n.frameLength,
								missing: 0
							}
						}
					}
				}

				function M(t, e) {
					var i = t[e + 1] >> 3 & 3,
						r = t[e + 1] >> 1 & 3,
						a = t[e + 2] >> 4 & 15,
						n = t[e + 2] >> 2 & 3;
					if (1 !== i && 0 !== a && 15 !== a && 3 !== n) {
						var s = t[e + 2] >> 1 & 1,
							o = t[e + 3] >> 6,
							l = 1e3 * C[14 * (3 === i ? 3 - r : 3 === r ? 3 : 4) + a - 1],
							u = w[3 * (3 === i ? 0 : 2 === i ? 1 : 2) + n],
							h = 3 === o ? 1 : 2,
							d = x[i][r],
							c = P[r],
							f = 8 * d * c,
							g = Math.floor(d * l / u + s) * c;
						if (null === O) {
							var v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
							O = v ? parseInt(v[1]) : 0
						}
						return !!O && O <= 87 && 2 === r && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]), {
							sampleRate: u,
							channelCount: h,
							frameLength: g,
							samplesPerFrame: f
						}
					}
				}

				function N(t, e) {
					return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
				}

				function U(t, e) {
					return e + 1 < t.length && N(t, e)
				}

				function B(t, e) {
					if (e + 1 < t.length && N(t, e)) {
						var i = M(t, e),
							r = 4;
						null != i && i.frameLength && (r = i.frameLength);
						var a = e + r;
						return a === t.length || U(t, a)
					}
					return !1
				}
				var G = function() {
						function t(t) {
							this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
						}
						var e = t.prototype;
						return e.loadWord = function() {
							var t = this.data,
								e = this.bytesAvailable,
								i = t.byteLength - e,
								r = new Uint8Array(4),
								a = Math.min(4, e);
							if (0 === a) throw new Error("no bytes available");
							r.set(t.subarray(i, i + a)), this.word = new DataView(r.buffer).getUint32(0), this.bitsAvailable = 8 * a, this.bytesAvailable -= a
						}, e.skipBits = function(t) {
							var e;
							this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
						}, e.readBits = function(t) {
							var e = Math.min(this.bitsAvailable, t),
								i = this.word >>> 32 - e;
							return t > 32 && v.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 && this.bitsAvailable ? i << e | this.readBits(e) : i
						}, e.skipLZ = function() {
							var t;
							for (t = 0; t < this.bitsAvailable; ++t)
								if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
							return this.loadWord(), t + this.skipLZ()
						}, e.skipUEG = function() {
							this.skipBits(1 + this.skipLZ())
						}, e.skipEG = function() {
							this.skipBits(1 + this.skipLZ())
						}, e.readUEG = function() {
							var t = this.skipLZ();
							return this.readBits(t + 1) - 1
						}, e.readEG = function() {
							var t = this.readUEG();
							return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
						}, e.readBoolean = function() {
							return 1 === this.readBits(1)
						}, e.readUByte = function() {
							return this.readBits(8)
						}, e.readUShort = function() {
							return this.readBits(16)
						}, e.readUInt = function() {
							return this.readBits(32)
						}, e.skipScalingList = function(t) {
							for (var e = 8, i = 8, r = 0; r < t; r++) 0 !== i && (i = (e + this.readEG() + 256) % 256), e = 0 === i ? e : i
						}, e.readSPS = function() {
							var t, e, i, r = 0,
								a = 0,
								n = 0,
								s = 0,
								o = this.readUByte.bind(this),
								l = this.readBits.bind(this),
								u = this.readUEG.bind(this),
								h = this.readBoolean.bind(this),
								d = this.skipBits.bind(this),
								c = this.skipEG.bind(this),
								f = this.skipUEG.bind(this),
								g = this.skipScalingList.bind(this);
							o();
							var v = o();
							if (l(5), d(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
								var p = u();
								if (3 === p && d(1), f(), f(), d(1), h())
									for (e = 3 !== p ? 8 : 12, i = 0; i < e; i++) h() && g(i < 6 ? 16 : 64)
							}
							f();
							var m = u();
							if (0 === m) u();
							else if (1 === m)
								for (d(1), c(), c(), t = u(), i = 0; i < t; i++) c();
							f(), d(1);
							var y = u(),
								T = u(),
								b = l(1);
							0 === b && d(1), d(1), h() && (r = u(), a = u(), n = u(), s = u());
							var E = [1, 1];
							if (h() && h()) switch (o()) {
								case 1:
									E = [1, 1];
									break;
								case 2:
									E = [12, 11];
									break;
								case 3:
									E = [10, 11];
									break;
								case 4:
									E = [16, 11];
									break;
								case 5:
									E = [40, 33];
									break;
								case 6:
									E = [24, 11];
									break;
								case 7:
									E = [20, 11];
									break;
								case 8:
									E = [32, 11];
									break;
								case 9:
									E = [80, 33];
									break;
								case 10:
									E = [18, 11];
									break;
								case 11:
									E = [15, 11];
									break;
								case 12:
									E = [64, 33];
									break;
								case 13:
									E = [160, 99];
									break;
								case 14:
									E = [4, 3];
									break;
								case 15:
									E = [3, 2];
									break;
								case 16:
									E = [2, 1];
									break;
								case 255:
									E = [o() << 8 | o(), o() << 8 | o()]
							}
							return {
								width: Math.ceil(16 * (y + 1) - 2 * r - 2 * a),
								height: (2 - b) * (T + 1) * 16 - (b ? 2 : 4) * (n + s),
								pixelRatio: E
							}
						}, e.readSliceType = function() {
							return this.readUByte(), this.readUEG(), this.readUEG()
						}, t
					}(),
					j = function() {
						function t(t, e, i) {
							this.keyData = void 0, this.decrypter = void 0, this.keyData = i, this.decrypter = new n.a(t, e, {
								removePKCS7Padding: !1
							})
						}
						var e = t.prototype;
						return e.decryptBuffer = function(t, e) {
							this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
						}, e.decryptAacSample = function(t, e, i, r) {
							var a = t[e].unit;
							if (!(a.length <= 16)) {
								var n = a.subarray(16, a.length - a.length % 16),
									s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
									o = this;
								this.decryptBuffer(s, (function(n) {
									var s = new Uint8Array(n);
									a.set(s, 16), r || o.decryptAacSamples(t, e + 1, i)
								}))
							}
						}, e.decryptAacSamples = function(t, e, i) {
							for (;; e++) {
								if (e >= t.length) return void i();
								if (!(t[e].unit.length < 32)) {
									var r = this.decrypter.isSync();
									if (this.decryptAacSample(t, e, i, r), !r) return
								}
							}
						}, e.getAvcEncryptedData = function(t) {
							for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, i = new Int8Array(e), r = 0, a = 32; a < t.length - 16; a += 160, r += 16) i.set(t.subarray(a, a + 16), r);
							return i
						}, e.getAvcDecryptedUnit = function(t, e) {
							for (var i = new Uint8Array(e), r = 0, a = 32; a < t.length - 16; a += 160, r += 16) t.set(i.subarray(r, r + 16), a);
							return t
						}, e.decryptAvcSample = function(t, e, i, r, a, n) {
							var s = X(a.data),
								o = this.getAvcEncryptedData(s),
								l = this;
							this.decryptBuffer(o.buffer, (function(o) {
								a.data = l.getAvcDecryptedUnit(s, o), n || l.decryptAvcSamples(t, e, i + 1, r)
							}))
						}, e.decryptAvcSamples = function(t, e, i, r) {
							if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
							for (;; e++, i = 0) {
								if (e >= t.length) return void r();
								for (var a = t[e].units; !(i >= a.length); i++) {
									var n = a[i];
									if (!(n.data.length <= 48 || 1 !== n.type && 5 !== n.type)) {
										var s = this.decrypter.isSync();
										if (this.decryptAvcSample(t, e, i, r, n, s), !s) return
									}
								}
							}
						}, t
					}();

				function K() {
					return (K = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}
				var H = function() {
					function t(t, e, i) {
						this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = i
					}
					t.probe = function(e) {
						var i = t.syncOffset(e);
						return !(i < 0 || (i && v.b.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"), 0))
					}, t.syncOffset = function(t) {
						for (var e = Math.min(1e3, t.length - 564), i = 0; i < e;) {
							if (71 === t[i] && 71 === t[i + 188] && 71 === t[i + 376]) return i;
							i++
						}
						return -1
					}, t.createTrack = function(t, e) {
						return {
							container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
							type: t,
							id: h.a[t],
							pid: -1,
							inputTimeScale: 9e4,
							sequenceNumber: 0,
							samples: [],
							dropped: 0,
							duration: "audio" === t ? e : void 0
						}
					};
					var e = t.prototype;
					return e.resetInitSegment = function(e, i, r, a) {
						this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video"), this._audioTrack = t.createTrack("audio", a), this._id3Track = t.createTrack("id3"), this._txtTrack = t.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.audioCodec = i, this.videoCodec = r, this._duration = a
					}, e.resetTimeStamp = function() {}, e.resetContiguity = function() {
						var t = this._audioTrack,
							e = this._avcTrack,
							i = this._id3Track;
						t && (t.pesData = null), e && (e.pesData = null), i && (i.pesData = null), this.aacOverFlow = null
					}, e.demux = function(e, i, n, s) {
						var o;
						void 0 === n && (n = !1), void 0 === s && (s = !1), n || (this.sampleAes = null);
						var l = this._avcTrack,
							u = this._audioTrack,
							d = this._id3Track,
							c = this._txtTrack,
							f = l.pid,
							g = l.pesData,
							p = u.pid,
							m = d.pid,
							y = u.pesData,
							T = d.pesData,
							b = !1,
							E = this.pmtParsed,
							S = this._pmtId,
							L = e.length;
						if (this.remainderData && (L = (e = Object(h.b)(this.remainderData, e)).length, this.remainderData = null), L < 188 && !s) return this.remainderData = e, {
							audioTrack: u,
							videoTrack: l,
							id3Track: d,
							textTrack: c
						};
						var A = Math.max(0, t.syncOffset(e));
						(L -= (L + A) % 188) < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, L, e.buffer.byteLength - L));
						for (var D = 0, R = A; R < L; R += 188)
							if (71 === e[R]) {
								var k = !!(64 & e[R + 1]),
									_ = ((31 & e[R + 1]) << 8) + e[R + 2],
									I = void 0;
								if ((48 & e[R + 3]) >> 4 > 1) {
									if ((I = R + 5 + e[R + 4]) === R + 188) continue
								} else I = R + 4;
								switch (_) {
									case f:
										k && (g && (o = q(g)) && this.parseAVCPES(l, c, o, !1), g = {
											data: [],
											size: 0
										}), g && (g.data.push(e.subarray(I, R + 188)), g.size += R + 188 - I);
										break;
									case p:
										if (k) {
											if (y && (o = q(y))) switch (u.segmentCodec) {
												case "aac":
													this.parseAACPES(u, o);
													break;
												case "mp3":
													this.parseMPEGPES(u, o)
											}
											y = {
												data: [],
												size: 0
											}
										}
										y && (y.data.push(e.subarray(I, R + 188)), y.size += R + 188 - I);
										break;
									case m:
										k && (T && (o = q(T)) && this.parseID3PES(d, o), T = {
											data: [],
											size: 0
										}), T && (T.data.push(e.subarray(I, R + 188)), T.size += R + 188 - I);
										break;
									case 0:
										k && (I += e[I] + 1), S = this._pmtId = W(e, I);
										break;
									case S:
										k && (I += e[I] + 1);
										var O = Y(e, I, this.typeSupported, n);
										(f = O.avc) > 0 && (l.pid = f), (p = O.audio) > 0 && (u.pid = p, u.segmentCodec = O.segmentCodec), (m = O.id3) > 0 && (d.pid = m), b && !E && (v.b.log("reparse from beginning"), b = !1, R = A - 188), E = this.pmtParsed = !0;
										break;
									case 17:
									case 8191:
										break;
									default:
										b = !0
								}
							} else D++;
						D > 0 && this.observer.emit(r.a.ERROR, r.a.ERROR, {
							type: a.b.MEDIA_ERROR,
							details: a.a.FRAG_PARSING_ERROR,
							fatal: !1,
							reason: "Found " + D + " TS packet/s that do not start with 0x47"
						}), l.pesData = g, u.pesData = y, d.pesData = T;
						var C = {
							audioTrack: u,
							videoTrack: l,
							id3Track: d,
							textTrack: c
						};
						return s && this.extractRemainingSamples(C), C
					}, e.flush = function() {
						var t, e = this.remainderData;
						return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
							videoTrack: this._avcTrack,
							audioTrack: this._audioTrack,
							id3Track: this._id3Track,
							textTrack: this._txtTrack
						}, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t
					}, e.extractRemainingSamples = function(t) {
						var e, i = t.audioTrack,
							r = t.videoTrack,
							a = t.id3Track,
							n = t.textTrack,
							s = r.pesData,
							o = i.pesData,
							l = a.pesData;
						if (s && (e = q(s)) ? (this.parseAVCPES(r, n, e, !0), r.pesData = null) : r.pesData = s, o && (e = q(o))) {
							switch (i.segmentCodec) {
								case "aac":
									this.parseAACPES(i, e);
									break;
								case "mp3":
									this.parseMPEGPES(i, e)
							}
							i.pesData = null
						} else null != o && o.size && v.b.log("last AAC PES packet truncated,might overlap between fragments"), i.pesData = o;
						l && (e = q(l)) ? (this.parseID3PES(a, e), a.pesData = null) : a.pesData = l
					}, e.demuxSampleAes = function(t, e, i) {
						var r = this.demux(t, i, !0, !this.config.progressive),
							a = this.sampleAes = new j(this.observer, this.config, e);
						return this.decrypt(r, a)
					}, e.decrypt = function(t, e) {
						return new Promise((function(i) {
							var r = t.audioTrack,
								a = t.videoTrack;
							r.samples && "aac" === r.segmentCodec ? e.decryptAacSamples(r.samples, 0, (function() {
								a.samples ? e.decryptAvcSamples(a.samples, 0, 0, (function() {
									i(t)
								})) : i(t)
							})) : a.samples && e.decryptAvcSamples(a.samples, 0, 0, (function() {
								i(t)
							}))
						}))
					}, e.destroy = function() {
						this._duration = 0
					}, e.parseAVCPES = function(t, e, i, r) {
						var a, n = this,
							s = this.parseAVCNALu(t, i.data),
							o = this.avcSample,
							l = !1;
						i.data = null, o && s.length && !t.audFound && (z(o, t), o = this.avcSample = V(!1, i.pts, i.dts, "")), s.forEach((function(r) {
							switch (r.type) {
								case 1:
									a = !0, o || (o = n.avcSample = V(!0, i.pts, i.dts, "")), o.frame = !0;
									var s = r.data;
									if (l && s.length > 4) {
										var u = new G(s).readSliceType();
										2 !== u && 4 !== u && 7 !== u && 9 !== u || (o.key = !0)
									}
									break;
								case 5:
									a = !0, o || (o = n.avcSample = V(!0, i.pts, i.dts, "")), o.key = !0, o.frame = !0;
									break;
								case 6:
									a = !0, Object(h.i)(X(r.data), i.pts, e.samples);
									break;
								case 7:
									if (a = !0, l = !0, !t.sps) {
										var d = new G(r.data).readSPS();
										t.width = d.width, t.height = d.height, t.pixelRatio = d.pixelRatio, t.sps = [r.data], t.duration = n._duration;
										for (var c = r.data.subarray(1, 4), f = "avc1.", g = 0; g < 3; g++) {
											var v = c[g].toString(16);
											v.length < 2 && (v = "0" + v), f += v
										}
										t.codec = f
									}
									break;
								case 8:
									a = !0, t.pps || (t.pps = [r.data]);
									break;
								case 9:
									a = !1, t.audFound = !0, o && z(o, t), o = n.avcSample = V(!1, i.pts, i.dts, "");
									break;
								case 12:
									a = !0;
									break;
								default:
									a = !1, o && (o.debug += "unknown NAL " + r.type + " ")
							}
							o && a && o.units.push(r)
						})), r && o && (z(o, t), this.avcSample = null)
					}, e.getLastNalUnit = function(t) {
						var e, i, r = this.avcSample;
						if (r && 0 !== r.units.length || (r = t[t.length - 1]), null !== (e = r) && void 0 !== e && e.units) {
							var a = r.units;
							i = a[a.length - 1]
						}
						return i
					}, e.parseAVCNALu = function(t, e) {
						var i, r, a = e.byteLength,
							n = t.naluState || 0,
							s = n,
							o = [],
							l = 0,
							u = -1,
							h = 0;
						for (-1 === n && (u = 0, h = 31 & e[0], n = 0, l = 1); l < a;)
							if (i = e[l++], n)
								if (1 !== n)
									if (i)
										if (1 === i) {
											if (u >= 0) {
												var d = {
													data: e.subarray(u, l - n - 1),
													type: h
												};
												o.push(d)
											} else {
												var c = this.getLastNalUnit(t.samples);
												if (c && (s && l <= 4 - s && c.state && (c.data = c.data.subarray(0, c.data.byteLength - s)), (r = l - n - 1) > 0)) {
													var f = new Uint8Array(c.data.byteLength + r);
													f.set(c.data, 0), f.set(e.subarray(0, r), c.data.byteLength), c.data = f, c.state = 0
												}
											}
											l < a ? (u = l, h = 31 & e[l], n = 0) : n = -1
										} else n = 0;
						else n = 3;
						else n = i ? 0 : 2;
						else n = i ? 0 : 1;
						if (u >= 0 && n >= 0) {
							var g = {
								data: e.subarray(u, a),
								type: h,
								state: n
							};
							o.push(g)
						}
						if (0 === o.length) {
							var v = this.getLastNalUnit(t.samples);
							if (v) {
								var p = new Uint8Array(v.data.byteLength + e.byteLength);
								p.set(v.data, 0), p.set(e, v.data.byteLength), v.data = p
							}
						}
						return t.naluState = n, o
					}, e.parseAACPES = function(t, e) {
						var i, n, s, o, l, u = 0,
							h = this.aacOverFlow,
							d = e.data;
						if (h) {
							this.aacOverFlow = null;
							var c = h.missing,
								f = h.sample.unit.byteLength;
							if (-1 === c) {
								var g = new Uint8Array(f + d.byteLength);
								g.set(h.sample.unit, 0), g.set(d, f), d = g
							} else {
								var p = f - c;
								h.sample.unit.set(d.subarray(0, c), p), t.samples.push(h.sample), u = h.missing
							}
						}
						for (i = u, n = d.length; i < n - 1 && !T(d, i); i++);
						if (i === u || (i < n - 1 ? (s = "AAC PES did not start with ADTS header,offset:" + i, o = !1) : (s = "no ADTS header found in AAC PES", o = !0), v.b.warn("parsing error:" + s), this.observer.emit(r.a.ERROR, r.a.ERROR, {
								type: a.b.MEDIA_ERROR,
								details: a.a.FRAG_PARSING_ERROR,
								fatal: o,
								reason: s
							}), !o)) {
							if (E(t, this.observer, d, i, this.audioCodec), void 0 !== e.pts) l = e.pts;
							else {
								if (!h) return void v.b.warn("[tsdemuxer]: AAC PES unknown PTS");
								var m = S(t.samplerate);
								l = h.sample.pts + m
							}
							for (var y, b = 0; i < n;) {
								if (i += (y = L(t, d, i, l, b)).length, y.missing) {
									this.aacOverFlow = y;
									break
								}
								for (b++; i < n - 1 && !T(d, i); i++);
							}
						}
					}, e.parseMPEGPES = function(t, e) {
						var i = e.data,
							r = i.length,
							a = 0,
							n = 0,
							s = e.pts;
						if (void 0 !== s)
							for (; n < r;)
								if (U(i, n)) {
									var o = F(t, i, n, s, a);
									if (!o) break;
									n += o.length, a++
								} else n++;
						else v.b.warn("[tsdemuxer]: MPEG PES unknown PTS")
					}, e.parseID3PES = function(t, e) {
						if (void 0 !== e.pts) {
							var i = K({}, e, {
								type: this._avcTrack ? l.a.emsg : l.a.audioId3
							});
							t.samples.push(i)
						} else v.b.warn("[tsdemuxer]: ID3 PES unknown PTS")
					}, t
				}();

				function V(t, e, i, r) {
					return {
						key: t,
						frame: !1,
						pts: e,
						dts: i,
						units: [],
						debug: r,
						length: 0
					}
				}

				function W(t, e) {
					return (31 & t[e + 10]) << 8 | t[e + 11]
				}

				function Y(t, e, i, r) {
					var a = {
							audio: -1,
							avc: -1,
							id3: -1,
							segmentCodec: "aac"
						},
						n = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4;
					for (e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < n;) {
						var s = (31 & t[e + 1]) << 8 | t[e + 2];
						switch (t[e]) {
							case 207:
								if (!r) {
									v.b.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
									break
								}
								case 15:
									-1 === a.audio && (a.audio = s);
									break;
								case 21:
									-1 === a.id3 && (a.id3 = s);
									break;
								case 219:
									if (!r) {
										v.b.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
										break
									}
									case 27:
										-1 === a.avc && (a.avc = s);
										break;
									case 3:
									case 4:
										!0 !== i.mpeg && !0 !== i.mp3 ? v.b.log("MPEG audio found, not supported in this browser") : -1 === a.audio && (a.audio = s, a.segmentCodec = "mp3");
										break;
									case 36:
										v.b.warn("Unsupported HEVC stream type found")
						}
						e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
					}
					return a
				}

				function q(t) {
					var e, i, r, a, n, s = 0,
						o = t.data;
					if (!t || 0 === t.size) return null;
					for (; o[0].length < 19 && o.length > 1;) {
						var l = new Uint8Array(o[0].length + o[1].length);
						l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
					}
					if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
						if ((i = (e[4] << 8) + e[5]) && i > t.size - 6) return null;
						var u = e[7];
						192 & u && (a = 536870912 * (14 & e[9]) + 4194304 * (255 & e[10]) + 16384 * (254 & e[11]) + 128 * (255 & e[12]) + (254 & e[13]) / 2, 64 & u ? a - (n = 536870912 * (14 & e[14]) + 4194304 * (255 & e[15]) + 16384 * (254 & e[16]) + 128 * (255 & e[17]) + (254 & e[18]) / 2) > 54e5 && (v.b.warn(Math.round((a - n) / 9e4) + "s delta between PTS and DTS, align them"), a = n) : n = a);
						var h = (r = e[8]) + 9;
						if (t.size <= h) return null;
						t.size -= h;
						for (var d = new Uint8Array(t.size), c = 0, f = o.length; c < f; c++) {
							var g = (e = o[c]).byteLength;
							if (h) {
								if (h > g) {
									h -= g;
									continue
								}
								e = e.subarray(h), g -= h, h = 0
							}
							d.set(e, s), s += g
						}
						return i && (i -= r + 3), {
							data: d,
							pts: a,
							dts: n,
							len: i
						}
					}
					return null
				}

				function z(t, e) {
					if (t.units.length && t.frame) {
						if (void 0 === t.pts) {
							var i = e.samples,
								r = i.length;
							if (!r) return void e.dropped++;
							var a = i[r - 1];
							t.pts = a.pts, t.dts = a.dts
						}
						e.samples.push(t)
					}
					t.debug.length && v.b.log(t.pts + "/" + t.dts + ":" + t.debug)
				}

				function X(t) {
					for (var e = t.byteLength, i = [], r = 1; r < e - 2;) 0 === t[r] && 0 === t[r + 1] && 3 === t[r + 2] ? (i.push(r + 2), r += 2) : r++;
					if (0 === i.length) return t;
					var a = e - i.length,
						n = new Uint8Array(a),
						s = 0;
					for (r = 0; r < a; s++, r++) s === i[0] && (s++, i.shift()), n[r] = t[s];
					return n
				}
				H.minProbeByteLength = 188;
				var Q = H;

				function $(t, e) {
					return ($ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var J = function(t) {
					var e, i;

					function r() {
						return t.apply(this, arguments) || this
					}
					i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, $(e, i);
					var a = r.prototype;
					return a.resetInitSegment = function(e, i, r, a) {
						t.prototype.resetInitSegment.call(this, e, i, r, a), this._audioTrack = {
							container: "audio/mpeg",
							type: "audio",
							id: 2,
							pid: -1,
							sequenceNumber: 0,
							segmentCodec: "mp3",
							samples: [],
							manifestCodec: i,
							duration: a,
							inputTimeScale: 9e4,
							dropped: 0
						}
					}, r.probe = function(t) {
						if (!t) return !1;
						for (var e = (o.b(t, 0) || []).length, i = t.length; e < i; e++)
							if (B(t, e)) return v.b.log("MPEG Audio sync word found !"), !0;
						return !1
					}, a.canParse = function(t, e) {
						return function(t, e) {
							return N(t, e) && 4 <= t.length - e
						}(t, e)
					}, a.appendFrame = function(t, e, i) {
						if (null !== this.basePTS) return F(t, e, i, this.basePTS, this.frameIndex)
					}, r
				}(g);
				J.minProbeByteLength = 4;
				var Z = J,
					tt = i(13),
					et = i(6),
					it = function() {
						function t() {
							this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null
						}
						var e = t.prototype;
						return e.destroy = function() {}, e.resetTimeStamp = function(t) {
							this.initPTS = t, this.lastEndDTS = null
						}, e.resetNextTimestamp = function() {
							this.lastEndDTS = null
						}, e.resetInitSegment = function(t, e, i) {
							this.audioCodec = e, this.videoCodec = i, this.generateInitSegment(t), this.emitInitSegment = !0
						}, e.generateInitSegment = function(t) {
							var e = this.audioCodec,
								i = this.videoCodec;
							if (!t || !t.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
							var r = this.initData = Object(h.h)(t);
							e || (e = at(r.audio, et.a.AUDIO)), i || (i = at(r.video, et.a.VIDEO));
							var a = {};
							r.audio && r.video ? a.audiovideo = {
								container: "video/mp4",
								codec: e + "," + i,
								initSegment: t,
								id: "main"
							} : r.audio ? a.audio = {
								container: "audio/mp4",
								codec: e,
								initSegment: t,
								id: "audio"
							} : r.video ? a.video = {
								container: "video/mp4",
								codec: i,
								initSegment: t,
								id: "main"
							} : v.b.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = a
						}, e.remux = function(t, e, i, r, a) {
							var n, o = this.initPTS,
								l = this.lastEndDTS,
								u = {
									audio: void 0,
									video: void 0,
									text: r,
									id3: i,
									initSegment: void 0
								};
							Object(s.a)(l) || (l = this.lastEndDTS = a || 0);
							var d = e.samples;
							if (!d || !d.length) return u;
							var c = {
									initPTS: void 0,
									timescale: 1
								},
								f = this.initData;
							if (f && f.length || (this.generateInitSegment(d), f = this.initData), !f || !f.length) return v.b.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
							this.emitInitSegment && (c.tracks = this.initTracks, this.emitInitSegment = !1), Object(s.a)(o) || (this.initPTS = c.initPTS = o = rt(f, d, l));
							var g = Object(h.d)(d, f),
								p = l,
								m = g + p;
							Object(h.f)(f, d, o), g > 0 ? this.lastEndDTS = m : (v.b.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
							var y = !!f.audio,
								T = !!f.video,
								b = "";
							y && (b += "audio"), T && (b += "video");
							var E = {
								data1: d,
								startPTS: p,
								startDTS: p,
								endPTS: m,
								endDTS: m,
								type: b,
								hasAudio: y,
								hasVideo: T,
								nb: 1,
								dropped: 0
							};
							u.audio = "audio" === E.type ? E : void 0, u.video = "audio" !== E.type ? E : void 0, u.initSegment = c;
							var S = null != (n = this.initPTS) ? n : 0;
							return u.id3 = Object(tt.b)(i, a, S, S), r.samples.length && (u.text = Object(tt.c)(r, a, S)), u
						}, t
					}(),
					rt = function(t, e, i) {
						return Object(h.e)(t, e) - i
					};

				function at(t, e) {
					var i = null == t ? void 0 : t.codec;
					return i && i.length > 4 ? i : "hvc1" === i || "hev1" === i ? "hvc1.1.c.L120.90" : "av01" === i ? "av01.0.04M.08" : "avc1" === i || e === et.a.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
				}
				var nt, st = it,
					ot = i(15);
				try {
					nt = self.performance.now.bind(self.performance)
				} catch (t) {
					v.b.debug("Unable to use Performance API on this environment"), nt = self.Date.now
				}
				var lt = [{
						demux: Q,
						remux: tt.a
					}, {
						demux: I,
						remux: st
					}, {
						demux: R,
						remux: tt.a
					}, {
						demux: Z,
						remux: tt.a
					}],
					ut = 1024;
				lt.forEach((function(t) {
					var e = t.demux;
					ut = Math.max(ut, e.minProbeByteLength)
				}));
				var ht = function() {
						function t(t, e, i, r, a) {
							this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new ot.a, this.observer = t, this.typeSupported = e, this.config = i, this.vendor = r, this.id = a
						}
						var e = t.prototype;
						return e.configure = function(t) {
							this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
						}, e.push = function(t, e, i, r) {
							var a = this,
								n = i.transmuxing;
							n.executeStart = nt();
							var s = new Uint8Array(t),
								o = this.cache,
								l = this.config,
								u = this.currentTransmuxState,
								d = this.transmuxConfig;
							r && (this.currentTransmuxState = r);
							var c = function(t, e) {
								var i = null;
								return t.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (i = e), i
							}(s, e);
							if (c && "AES-128" === c.method) {
								var f = this.getDecrypter();
								if (!l.enableSoftwareAES) return this.decryptionPromise = f.webCryptoDecrypt(s, c.key.buffer, c.iv.buffer).then((function(t) {
									var e = a.push(t, null, i);
									return a.decryptionPromise = null, e
								})), this.decryptionPromise;
								var g = f.softwareDecrypt(s, c.key.buffer, c.iv.buffer);
								if (!g) return n.executeEnd = nt(), dt(i);
								s = new Uint8Array(g)
							}
							var v = r || u,
								p = v.contiguous,
								m = v.discontinuity,
								y = v.trackSwitch,
								T = v.accurateTimeOffset,
								b = v.timeOffset,
								E = v.initSegmentChange,
								S = d.audioCodec,
								L = d.videoCodec,
								A = d.defaultInitPts,
								D = d.duration,
								R = d.initSegmentData;
							if ((m || y || E) && this.resetInitSegment(R, S, L, D), (m || E) && this.resetInitialTimestamp(A), p || this.resetContiguity(), this.needsProbing(s, m, y)) {
								if (o.dataLength) {
									var k = o.flush();
									s = Object(h.b)(k, s)
								}
								this.configureTransmuxer(s, d)
							}
							var _ = this.transmux(s, c, b, T, i),
								I = this.currentTransmuxState;
							return I.contiguous = !0, I.discontinuity = !1, I.trackSwitch = !1, n.executeEnd = nt(), _
						}, e.flush = function(t) {
							var e = this,
								i = t.transmuxing;
							i.executeStart = nt();
							var n = this.decrypter,
								s = this.cache,
								o = this.currentTransmuxState,
								l = this.decryptionPromise;
							if (l) return l.then((function() {
								return e.flush(t)
							}));
							var u = [],
								h = o.timeOffset;
							if (n) {
								var d = n.flush();
								d && u.push(this.push(d, null, t))
							}
							var c = s.dataLength;
							s.reset();
							var f = this.demuxer,
								g = this.remuxer;
							if (!f || !g) return c >= ut && this.observer.emit(r.a.ERROR, r.a.ERROR, {
								type: a.b.MEDIA_ERROR,
								details: a.a.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "no demux matching with content found"
							}), i.executeEnd = nt(), [dt(t)];
							var v = f.flush(h);
							return ct(v) ? v.then((function(i) {
								return e.flushRemux(u, i, t), u
							})) : (this.flushRemux(u, v, t), u)
						}, e.flushRemux = function(t, e, i) {
							var r = e.audioTrack,
								a = e.videoTrack,
								n = e.id3Track,
								s = e.textTrack,
								o = this.currentTransmuxState,
								l = o.accurateTimeOffset,
								u = o.timeOffset;
							v.b.log("[transmuxer.ts]: Flushed fragment " + i.sn + (i.part > -1 ? " p: " + i.part : "") + " of level " + i.level);
							var h = this.remuxer.remux(r, a, n, s, u, l, !0, this.id);
							t.push({
								remuxResult: h,
								chunkMeta: i
							}), i.transmuxing.executeEnd = nt()
						}, e.resetInitialTimestamp = function(t) {
							var e = this.demuxer,
								i = this.remuxer;
							e && i && (e.resetTimeStamp(t), i.resetTimeStamp(t))
						}, e.resetContiguity = function() {
							var t = this.demuxer,
								e = this.remuxer;
							t && e && (t.resetContiguity(), e.resetNextTimestamp())
						}, e.resetInitSegment = function(t, e, i, r) {
							var a = this.demuxer,
								n = this.remuxer;
							a && n && (a.resetInitSegment(t, e, i, r), n.resetInitSegment(t, e, i))
						}, e.destroy = function() {
							this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
						}, e.transmux = function(t, e, i, r, a) {
							return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, i, r, a) : this.transmuxUnencrypted(t, i, r, a)
						}, e.transmuxUnencrypted = function(t, e, i, r) {
							var a = this.demuxer.demux(t, e, !1, !this.config.progressive),
								n = a.audioTrack,
								s = a.videoTrack,
								o = a.id3Track,
								l = a.textTrack;
							return {
								remuxResult: this.remuxer.remux(n, s, o, l, e, i, !1, this.id),
								chunkMeta: r
							}
						}, e.transmuxSampleAes = function(t, e, i, r, a) {
							var n = this;
							return this.demuxer.demuxSampleAes(t, e, i).then((function(t) {
								return {
									remuxResult: n.remuxer.remux(t.audioTrack, t.videoTrack, t.id3Track, t.textTrack, i, r, !1, n.id),
									chunkMeta: a
								}
							}))
						}, e.configureTransmuxer = function(t, e) {
							for (var i, r = this.config, a = this.observer, n = this.typeSupported, s = this.vendor, o = e.audioCodec, l = e.defaultInitPts, u = e.duration, h = e.initSegmentData, d = e.videoCodec, c = 0, f = lt.length; c < f; c++)
								if (lt[c].demux.probe(t)) {
									i = lt[c];
									break
								} i || (v.b.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), i = {
								demux: I,
								remux: st
							});
							var g = this.demuxer,
								p = this.remuxer,
								m = i.remux,
								y = i.demux;
							p && p instanceof m || (this.remuxer = new m(a, r, n, s)), g && g instanceof y || (this.demuxer = new y(a, r, n), this.probe = y.probe), this.resetInitSegment(h, o, d, u), this.resetInitialTimestamp(l)
						}, e.needsProbing = function(t, e, i) {
							return !this.demuxer || !this.remuxer || e || i
						}, e.getDecrypter = function() {
							var t = this.decrypter;
							return t || (t = this.decrypter = new n.a(this.observer, this.config)), t
						}, t
					}(),
					dt = function(t) {
						return {
							remuxResult: {},
							chunkMeta: t
						}
					};

				function ct(t) {
					return "then" in t && t.then instanceof Function
				}
				var ft = function(t, e, i, r, a) {
						this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = i, this.duration = r, this.defaultInitPts = a
					},
					gt = function(t, e, i, r, a, n) {
						this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = i, this.trackSwitch = r, this.timeOffset = a, this.initSegmentChange = n
					}
			}, function(t, e, i) {
				var r, a, n, s, o;
				r = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, a = /^(?=([^\/?#]*))\1([^]*)$/, n = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
					buildAbsoluteURL: function(t, e, i) {
						if (i = i || {}, t = t.trim(), !(e = e.trim())) {
							if (!i.alwaysNormalize) return t;
							var r = o.parseURL(t);
							if (!r) throw new Error("Error trying to parse base URL.");
							return r.path = o.normalizePath(r.path), o.buildURLFromParts(r)
						}
						var n = o.parseURL(e);
						if (!n) throw new Error("Error trying to parse relative URL.");
						if (n.scheme) return i.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : e;
						var s = o.parseURL(t);
						if (!s) throw new Error("Error trying to parse base URL.");
						if (!s.netLoc && s.path && "/" !== s.path[0]) {
							var l = a.exec(s.path);
							s.netLoc = l[1], s.path = l[2]
						}
						s.netLoc && !s.path && (s.path = "/");
						var u = {
							scheme: s.scheme,
							netLoc: n.netLoc,
							path: null,
							params: n.params,
							query: n.query,
							fragment: n.fragment
						};
						if (!n.netLoc && (u.netLoc = s.netLoc, "/" !== n.path[0]))
							if (n.path) {
								var h = s.path,
									d = h.substring(0, h.lastIndexOf("/") + 1) + n.path;
								u.path = o.normalizePath(d)
							} else u.path = s.path, n.params || (u.params = s.params, n.query || (u.query = s.query));
						return null === u.path && (u.path = i.alwaysNormalize ? o.normalizePath(n.path) : n.path), o.buildURLFromParts(u)
					},
					parseURL: function(t) {
						var e = r.exec(t);
						return e ? {
							scheme: e[1] || "",
							netLoc: e[2] || "",
							path: e[3] || "",
							params: e[4] || "",
							query: e[5] || "",
							fragment: e[6] || ""
						} : null
					},
					normalizePath: function(t) {
						for (t = t.split("").reverse().join("").replace(n, ""); t.length !== (t = t.replace(s, "")).length;);
						return t.split("").reverse().join("")
					},
					buildURLFromParts: function(t) {
						return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
					}
				}, t.exports = o
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return m
				})), i.d(e, "d", (function() {
					return y
				})), i.d(e, "b", (function() {
					return T
				})), i.d(e, "c", (function() {
					return b
				}));
				var r = i(3),
					a = function() {
						function t() {}
						return t.getSilentFrame = function(t, e) {
							switch (t) {
								case "mp4a.40.2":
									if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
									if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
									if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
									if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
									if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
									if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
									break;
								default:
									if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
									if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
									if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
							}
						}, t
					}(),
					n = Math.pow(2, 32) - 1,
					s = function() {
						function t() {}
						return t.init = function() {
							var e;
							for (e in t.types = {
									avc1: [],
									avcC: [],
									btrt: [],
									dinf: [],
									dref: [],
									esds: [],
									ftyp: [],
									hdlr: [],
									mdat: [],
									mdhd: [],
									mdia: [],
									mfhd: [],
									minf: [],
									moof: [],
									moov: [],
									mp4a: [],
									".mp3": [],
									mvex: [],
									mvhd: [],
									pasp: [],
									sdtp: [],
									stbl: [],
									stco: [],
									stsc: [],
									stsd: [],
									stsz: [],
									stts: [],
									tfdt: [],
									tfhd: [],
									traf: [],
									trak: [],
									trun: [],
									trex: [],
									tkhd: [],
									vmhd: [],
									smhd: []
								}, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
							var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
								r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
							t.HDLR_TYPES = {
								video: i,
								audio: r
							};
							var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
								n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
							t.STTS = t.STSC = t.STCO = n, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
							var s = new Uint8Array([105, 115, 111, 109]),
								o = new Uint8Array([97, 118, 99, 49]),
								l = new Uint8Array([0, 0, 0, 1]);
							t.FTYP = t.box(t.types.ftyp, s, l, s, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, a))
						}, t.box = function(t) {
							for (var e = 8, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
							for (var n = r.length, s = n; n--;) e += r[n].byteLength;
							var o = new Uint8Array(e);
							for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), n = 0, e = 8; n < s; n++) o.set(r[n], e), e += r[n].byteLength;
							return o
						}, t.hdlr = function(e) {
							return t.box(t.types.hdlr, t.HDLR_TYPES[e])
						}, t.mdat = function(e) {
							return t.box(t.types.mdat, e)
						}, t.mdhd = function(e, i) {
							i *= e;
							var r = Math.floor(i / (n + 1)),
								a = Math.floor(i % (n + 1));
							return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
						}, t.mdia = function(e) {
							return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
						}, t.mfhd = function(e) {
							return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
						}, t.minf = function(e) {
							return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
						}, t.moof = function(e, i, r) {
							return t.box(t.types.moof, t.mfhd(e), t.traf(r, i))
						}, t.moov = function(e) {
							for (var i = e.length, r = []; i--;) r[i] = t.trak(e[i]);
							return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(r).concat(t.mvex(e)))
						}, t.mvex = function(e) {
							for (var i = e.length, r = []; i--;) r[i] = t.trex(e[i]);
							return t.box.apply(null, [t.types.mvex].concat(r))
						}, t.mvhd = function(e, i) {
							i *= e;
							var r = Math.floor(i / (n + 1)),
								a = Math.floor(i % (n + 1)),
								s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
							return t.box(t.types.mvhd, s)
						}, t.sdtp = function(e) {
							var i, r, a = e.samples || [],
								n = new Uint8Array(4 + a.length);
							for (i = 0; i < a.length; i++) r = a[i].flags, n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
							return t.box(t.types.sdtp, n)
						}, t.stbl = function(e) {
							return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
						}, t.avc1 = function(e) {
							var i, r, a, n = [],
								s = [];
							for (i = 0; i < e.sps.length; i++) a = (r = e.sps[i]).byteLength, n.push(a >>> 8 & 255), n.push(255 & a), n = n.concat(Array.prototype.slice.call(r));
							for (i = 0; i < e.pps.length; i++) a = (r = e.pps[i]).byteLength, s.push(a >>> 8 & 255), s.push(255 & a), s = s.concat(Array.prototype.slice.call(r));
							var o = t.box(t.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | e.sps.length].concat(n).concat([e.pps.length]).concat(s))),
								l = e.width,
								u = e.height,
								h = e.pixelRatio[0],
								d = e.pixelRatio[1];
							return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
						}, t.esds = function(t) {
							var e = t.config.length;
							return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
						}, t.mp4a = function(e) {
							var i = e.samplerate;
							return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), t.box(t.types.esds, t.esds(e)))
						}, t.mp3 = function(e) {
							var i = e.samplerate;
							return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
						}, t.stsd = function(e) {
							return "audio" === e.type ? "mp3" === e.segmentCodec && "mp3" === e.codec ? t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
						}, t.tkhd = function(e) {
							var i = e.id,
								r = e.duration * e.timescale,
								a = e.width,
								s = e.height,
								o = Math.floor(r / (n + 1)),
								l = Math.floor(r % (n + 1));
							return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
						}, t.traf = function(e, i) {
							var r = t.sdtp(e),
								a = e.id,
								s = Math.floor(i / (n + 1)),
								o = Math.floor(i % (n + 1));
							return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), t.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
						}, t.trak = function(e) {
							return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
						}, t.trex = function(e) {
							var i = e.id;
							return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
						}, t.trun = function(e, i) {
							var r, a, n, s, o, l, u = e.samples || [],
								h = u.length,
								d = 12 + 16 * h,
								c = new Uint8Array(d);
							for (i += 8 + d, c.set([0, 0, 15, 1, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0), r = 0; r < h; r++) n = (a = u[r]).duration, s = a.size, o = a.flags, l = a.cts, c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * r);
							return t.box(t.types.trun, c)
						}, t.initSegment = function(e) {
							t.types || t.init();
							var i = t.moov(e),
								r = new Uint8Array(t.FTYP.byteLength + i.byteLength);
							return r.set(t.FTYP), r.set(i, t.FTYP.byteLength), r
						}, t
					}();
				s.types = void 0, s.HDLR_TYPES = void 0, s.STTS = void 0, s.STSC = void 0, s.STCO = void 0, s.STSZ = void 0, s.VMHD = void 0, s.SMHD = void 0, s.STSD = void 0, s.FTYP = void 0, s.DINF = void 0;
				var o = s,
					l = i(0),
					u = i(2),
					h = i(1),
					d = i(4),
					c = i(9);

				function f() {
					return (f = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}
				var g = null,
					v = null,
					p = !1,
					m = function() {
						function t(t, e, i, r) {
							if (void 0 === r && (r = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = i, this.ISGenerated = !1, null === g) {
								var a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
								g = a ? parseInt(a[1]) : 0
							}
							if (null === v) {
								var n = navigator.userAgent.match(/Safari\/(\d+)/i);
								v = n ? parseInt(n[1]) : 0
							}
							p = !(g && g >= 75 || v && v >= 600)
						}
						var e = t.prototype;
						return e.destroy = function() {}, e.resetTimeStamp = function(t) {
							h.b.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
						}, e.resetNextTimestamp = function() {
							h.b.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
						}, e.resetInitSegment = function() {
							h.b.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
						}, e.getVideoStartPts = function(t) {
							var e = !1,
								i = t.reduce((function(t, i) {
									var r = i.pts - t;
									return r < -4294967296 ? (e = !0, y(t, i.pts)) : r > 0 ? t : i.pts
								}), t[0].pts);
							return e && h.b.debug("PTS rollover detected"), i
						}, e.remux = function(t, e, i, r, a, n, s, o) {
							var l, u, c, f, g, v, p = a,
								m = a,
								E = t.pid > -1,
								S = e.pid > -1,
								L = e.samples.length,
								A = t.samples.length > 0,
								D = s && L > 0 || L > 1;
							if ((!E || A) && (!S || D) || this.ISGenerated || s) {
								this.ISGenerated || (c = this.generateIS(t, e, a));
								var R, k = this.isVideoContiguous,
									_ = -1;
								if (D && (_ = function(t) {
										for (var e = 0; e < t.length; e++)
											if (t[e].key) return e;
										return -1
									}(e.samples), !k && this.config.forceKeyFrameOnDiscontinuity))
									if (v = !0, _ > 0) {
										h.b.warn("[mp4-remuxer]: Dropped " + _ + " out of " + L + " video samples due to a missing keyframe");
										var I = this.getVideoStartPts(e.samples);
										e.samples = e.samples.slice(_), e.dropped += _, R = m += (e.samples[0].pts - I) / e.inputTimeScale
									} else -1 === _ && (h.b.warn("[mp4-remuxer]: No keyframe found out of " + L + " video samples"), v = !1);
								if (this.ISGenerated) {
									if (A && D) {
										var O = this.getVideoStartPts(e.samples),
											C = (y(t.samples[0].pts, O) - O) / e.inputTimeScale;
										p += Math.max(0, C), m += Math.max(0, -C)
									}
									if (A) {
										if (t.samplerate || (h.b.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), c = this.generateIS(t, e, a)), u = this.remuxAudio(t, p, this.isAudioContiguous, n, S || D || o === d.b.AUDIO ? m : void 0), D) {
											var w = u ? u.endPTS - u.startPTS : 0;
											e.inputTimeScale || (h.b.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), c = this.generateIS(t, e, a)), l = this.remuxVideo(e, m, k, w)
										}
									} else D && (l = this.remuxVideo(e, m, k, 0));
									l && (l.firstKeyFrame = _, l.independent = -1 !== _, l.firstKeyFramePTS = R)
								}
							}
							return this.ISGenerated && (i.samples.length && (g = T(i, a, this._initPTS, this._initDTS)), r.samples.length && (f = b(r, a, this._initPTS))), {
								audio: u,
								video: l,
								initSegment: c,
								independent: v,
								text: f,
								id3: g
							}
						}, e.generateIS = function(t, e, i) {
							var a, n, s, l = t.samples,
								u = e.samples,
								h = this.typeSupported,
								d = {},
								c = !Object(r.a)(this._initPTS),
								f = "audio/mp4";
							if (c && (a = n = 1 / 0), t.config && l.length) {
								switch (t.timescale = t.samplerate, t.segmentCodec) {
									case "mp3":
										h.mpeg ? (f = "audio/mpeg", t.codec = "") : h.mp3 && (t.codec = "mp3")
								}
								d.audio = {
									id: "audio",
									container: f,
									codec: t.codec,
									initSegment: "mp3" === t.segmentCodec && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
									metadata: {
										channelCount: t.channelCount
									}
								}, c && (s = t.inputTimeScale, a = n = l[0].pts - Math.round(s * i))
							}
							if (e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale, d.video = {
									id: "main",
									container: "video/mp4",
									codec: e.codec,
									initSegment: o.initSegment([e]),
									metadata: {
										width: e.width,
										height: e.height
									}
								}, c)) {
								s = e.inputTimeScale;
								var g = this.getVideoStartPts(u),
									v = Math.round(s * i);
								n = Math.min(n, y(u[0].dts, g) - v), a = Math.min(a, g - v)
							}
							if (Object.keys(d).length) return this.ISGenerated = !0, c && (this._initPTS = a, this._initDTS = n), {
								tracks: d,
								initPTS: a,
								timescale: s
							}
						}, e.remuxVideo = function(t, e, i, r) {
							var a, n, s = t.inputTimeScale,
								d = t.samples,
								v = [],
								m = d.length,
								T = this._initPTS,
								b = this.nextAvcDts,
								S = 8,
								L = this.videoSampleDuration,
								A = Number.POSITIVE_INFINITY,
								D = Number.NEGATIVE_INFINITY,
								R = 0,
								k = !1;
							i && null !== b || (b = e * s - (d[0].pts - y(d[0].dts, d[0].pts)));
							for (var _ = 0; _ < m; _++) {
								var I = d[_];
								I.pts = y(I.pts - T, b), I.dts = y(I.dts - T, b), I.dts > I.pts && (R = Math.max(Math.min(R, I.pts - I.dts), -18e3)), I.dts < d[_ > 0 ? _ - 1 : _].dts && (k = !0)
							}
							k && d.sort((function(t, e) {
								var i = t.dts - e.dts,
									r = t.pts - e.pts;
								return i || r
							})), a = d[0].dts;
							var O = d[d.length - 1].dts - a,
								C = O ? Math.round(O / (m - 1)) : L || t.inputTimeScale / 30;
							if (R < 0) {
								if (R < -2 * C) {
									h.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(c.b)(-C, !0) + " ms");
									for (var w = R, x = 0; x < m; x++) d[x].dts = w = Math.max(w, d[x].pts - C), d[x].pts = Math.max(w, d[x].pts)
								} else {
									h.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(c.b)(R, !0) + " ms to overcome this issue");
									for (var P = 0; P < m; P++) d[P].dts = d[P].dts + R
								}
								a = d[0].dts
							}
							if (i) {
								var F = a - b,
									M = F > C;
								if (M || F < -1) {
									M ? h.b.warn("AVC: " + Object(c.b)(F, !0) + " ms (" + F + "dts) hole between fragments detected, filling it") : h.b.warn("AVC: " + Object(c.b)(-F, !0) + " ms (" + F + "dts) overlapping between fragments detected"), a = b;
									var N = d[0].pts - F;
									d[0].dts = a, d[0].pts = N, h.b.log("Video: First PTS/DTS adjusted: " + Object(c.b)(N, !0) + "/" + Object(c.b)(a, !0) + ", delta: " + Object(c.b)(F, !0) + " ms")
								}
							}
							p && (a = Math.max(0, a));
							for (var U = 0, B = 0, G = 0; G < m; G++) {
								for (var j = d[G], K = j.units, H = K.length, V = 0, W = 0; W < H; W++) V += K[W].data.length;
								B += V, U += H, j.length = V, j.dts = Math.max(j.dts, a), j.pts = Math.max(j.pts, j.dts, 0), A = Math.min(j.pts, A), D = Math.max(j.pts, D)
							}
							n = d[m - 1].dts;
							var Y, q = B + 4 * U + 8;
							try {
								Y = new Uint8Array(q)
							} catch (t) {
								return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
									type: u.b.MUX_ERROR,
									details: u.a.REMUX_ALLOC_ERROR,
									fatal: !1,
									bytes: q,
									reason: "fail allocating video mdat " + q
								})
							}
							var z = new DataView(Y.buffer);
							z.setUint32(0, q), Y.set(o.types.mdat, 4);
							for (var X = !1, Q = 0; Q < m; Q++) {
								for (var $ = d[Q], J = $.units, Z = 0, tt = 0, et = J.length; tt < et; tt++) {
									var it = J[tt],
										rt = it.data,
										at = it.data.byteLength;
									z.setUint32(S, at), S += 4, Y.set(rt, S), S += at, Z += 4 + at
								}
								if (Q < m - 1) L = d[Q + 1].dts - $.dts;
								else {
									var nt = this.config,
										st = Q > 0 ? $.dts - d[Q - 1].dts : C;
									if (nt.stretchShortVideoTrack && null !== this.nextAudioPts) {
										var ot = Math.floor(nt.maxBufferHole * s),
											lt = (r ? A + r * s : this.nextAudioPts) - $.pts;
										lt > ot ? ((L = lt - st) < 0 ? L = st : X = !0, h.b.log("[mp4-remuxer]: It is approximately " + lt / 90 + " ms to the next segment; using duration " + L / 90 + " ms for the last video frame.")) : L = st
									} else L = st
								}
								var ut = Math.round($.pts - $.dts);
								v.push(new E($.key, L, Z, ut))
							}
							if (v.length && g && g < 70) {
								var ht = v[0].flags;
								ht.dependsOn = 2, ht.isNonSync = 0
							}
							L = X || !L ? C : L, this.nextAvcDts = b = n + L, this.videoSampleDuration = L, this.isVideoContiguous = !0;
							var dt = {
								data1: o.moof(t.sequenceNumber++, a, f({}, t, {
									samples: v
								})),
								data2: Y,
								startPTS: A / s,
								endPTS: (D + L) / s,
								startDTS: a / s,
								endDTS: b / s,
								type: "video",
								hasAudio: !1,
								hasVideo: !0,
								nb: v.length,
								dropped: t.dropped
							};
							return t.samples = [], t.dropped = 0, dt
						}, e.remuxAudio = function(t, e, i, r, n) {
							var s = t.inputTimeScale,
								d = s / (t.samplerate ? t.samplerate : s),
								c = "aac" === t.segmentCodec ? 1024 : 1152,
								g = c * d,
								v = this._initPTS,
								p = "mp3" === t.segmentCodec && this.typeSupported.mpeg,
								m = [],
								T = void 0 !== n,
								b = t.samples,
								S = p ? 0 : 8,
								L = this.nextAudioPts || -1,
								A = e * s;
							if (this.isAudioContiguous = i = i || b.length && L > 0 && (r && Math.abs(A - L) < 9e3 || Math.abs(y(b[0].pts - v, A) - L) < 20 * g), b.forEach((function(t) {
									t.pts = y(t.pts - v, A)
								})), !i || L < 0) {
								if (!(b = b.filter((function(t) {
										return t.pts >= 0
									}))).length) return;
								L = 0 === n ? 0 : r && !T ? Math.max(0, A) : b[0].pts
							}
							if ("aac" === t.segmentCodec)
								for (var D = this.config.maxAudioFramesDrift, R = 0, k = L; R < b.length; R++) {
									var _ = b[R],
										I = _.pts,
										O = I - k,
										C = Math.abs(1e3 * O / s);
									if (O <= -D * g && T) 0 === R && (h.b.warn("Audio frame @ " + (I / s).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * O / s) + " ms."), this.nextAudioPts = L = k = I);
									else if (O >= D * g && C < 1e4 && T) {
										var w = Math.round(O / g);
										(k = I - w * g) < 0 && (w--, k += g), 0 === R && (this.nextAudioPts = L = k), h.b.warn("[mp4-remuxer]: Injecting " + w + " audio frame @ " + (k / s).toFixed(3) + "s due to " + Math.round(1e3 * O / s) + " ms gap.");
										for (var x = 0; x < w; x++) {
											var P = Math.max(k, 0),
												F = a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
											F || (h.b.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), F = _.unit.subarray()), b.splice(R, 0, {
												unit: F,
												pts: P
											}), k += g, R++
										}
									}
									_.pts = k, k += g
								}
							for (var M, N = null, U = null, B = 0, G = b.length; G--;) B += b[G].unit.byteLength;
							for (var j = 0, K = b.length; j < K; j++) {
								var H = b[j],
									V = H.unit,
									W = H.pts;
								if (null !== U) m[j - 1].duration = Math.round((W - U) / d);
								else {
									if (i && "aac" === t.segmentCodec && (W = L), N = W, !(B > 0)) return;
									B += S;
									try {
										M = new Uint8Array(B)
									} catch (t) {
										return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
											type: u.b.MUX_ERROR,
											details: u.a.REMUX_ALLOC_ERROR,
											fatal: !1,
											bytes: B,
											reason: "fail allocating audio mdat " + B
										})
									}
									p || (new DataView(M.buffer).setUint32(0, B), M.set(o.types.mdat, 4))
								}
								M.set(V, S);
								var Y = V.byteLength;
								S += Y, m.push(new E(!0, c, Y, 0)), U = W
							}
							var q = m.length;
							if (q) {
								var z = m[m.length - 1];
								this.nextAudioPts = L = U + d * z.duration;
								var X = p ? new Uint8Array(0) : o.moof(t.sequenceNumber++, N / d, f({}, t, {
									samples: m
								}));
								t.samples = [];
								var Q = N / s,
									$ = L / s,
									J = {
										data1: X,
										data2: M,
										startPTS: Q,
										endPTS: $,
										startDTS: Q,
										endDTS: $,
										type: "audio",
										hasAudio: !0,
										hasVideo: !1,
										nb: q
									};
								return this.isAudioContiguous = !0, J
							}
						}, e.remuxEmptyAudio = function(t, e, i, r) {
							var n = t.inputTimeScale,
								s = n / (t.samplerate ? t.samplerate : n),
								o = this.nextAudioPts,
								l = (null !== o ? o : r.startDTS * n) + this._initDTS,
								u = r.endDTS * n + this._initDTS,
								d = 1024 * s,
								c = Math.ceil((u - l) / d),
								f = a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
							if (h.b.warn("[mp4-remuxer]: remux empty Audio"), f) {
								for (var g = [], v = 0; v < c; v++) {
									var p = l + v * d;
									g.push({
										unit: f,
										pts: p,
										dts: p
									})
								}
								return t.samples = g, this.remuxAudio(t, e, i, !1)
							}
							h.b.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
						}, t
					}();

				function y(t, e) {
					var i;
					if (null === e) return t;
					for (i = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += i;
					return t
				}

				function T(t, e, i, r) {
					var a = t.samples.length;
					if (a) {
						for (var n = t.inputTimeScale, s = 0; s < a; s++) {
							var o = t.samples[s];
							o.pts = y(o.pts - i, e * n) / n, o.dts = y(o.dts - r, e * n) / n
						}
						var l = t.samples;
						return t.samples = [], {
							samples: l
						}
					}
				}

				function b(t, e, i) {
					var r = t.samples.length;
					if (r) {
						for (var a = t.inputTimeScale, n = 0; n < r; n++) {
							var s = t.samples[n];
							s.pts = y(s.pts - i, e * a) / a
						}
						t.samples.sort((function(t, e) {
							return t.pts - e.pts
						}));
						var o = t.samples;
						return t.samples = [], {
							samples: o
						}
					}
				}
				var E = function(t, e, i, r) {
						this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = i, this.cts = r, this.flags = new S(t)
					},
					S = function(t) {
						this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
					}
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return r
				}));
				var r = function() {
					this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
						start: 0,
						first: 0,
						end: 0
					}, this.parsing = {
						start: 0,
						end: 0
					}, this.buffering = {
						start: 0,
						first: 0,
						end: 0
					}
				}
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return r
				}));
				var r = function() {
					function t() {
						this.chunks = [], this.dataLength = 0
					}
					var e = t.prototype;
					return e.push = function(t) {
						this.chunks.push(t), this.dataLength += t.length
					}, e.flush = function() {
						var t, e = this.chunks,
							i = this.dataLength;
						return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
							for (var i = new Uint8Array(e), r = 0, a = 0; a < t.length; a++) {
								var n = t[a];
								i.set(n, r), r += n.length
							}
							return i
						}(e, i), this.reset(), t) : new Uint8Array(0)
					}, e.reset = function() {
						this.chunks.length = 0, this.dataLength = 0
					}, t
				}()
			}, function(t, e, i) {
				"use strict";
				var r = Object.prototype.hasOwnProperty,
					a = "~";

				function n() {}

				function s(t, e, i) {
					this.fn = t, this.context = e, this.once = i || !1
				}

				function o(t, e, i, r, n) {
					if ("function" != typeof i) throw new TypeError("The listener must be a function");
					var o = new s(i, r || t, n),
						l = a ? a + e : e;
					return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
				}

				function l(t, e) {
					0 == --t._eventsCount ? t._events = new n : delete t._events[e]
				}

				function u() {
					this._events = new n, this._eventsCount = 0
				}
				Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)), u.prototype.eventNames = function() {
					var t, e, i = [];
					if (0 === this._eventsCount) return i;
					for (e in t = this._events) r.call(t, e) && i.push(a ? e.slice(1) : e);
					return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
				}, u.prototype.listeners = function(t) {
					var e = a ? a + t : t,
						i = this._events[e];
					if (!i) return [];
					if (i.fn) return [i.fn];
					for (var r = 0, n = i.length, s = new Array(n); r < n; r++) s[r] = i[r].fn;
					return s
				}, u.prototype.listenerCount = function(t) {
					var e = a ? a + t : t,
						i = this._events[e];
					return i ? i.fn ? 1 : i.length : 0
				}, u.prototype.emit = function(t, e, i, r, n, s) {
					var o = a ? a + t : t;
					if (!this._events[o]) return !1;
					var l, u, h = this._events[o],
						d = arguments.length;
					if (h.fn) {
						switch (h.once && this.removeListener(t, h.fn, void 0, !0), d) {
							case 1:
								return h.fn.call(h.context), !0;
							case 2:
								return h.fn.call(h.context, e), !0;
							case 3:
								return h.fn.call(h.context, e, i), !0;
							case 4:
								return h.fn.call(h.context, e, i, r), !0;
							case 5:
								return h.fn.call(h.context, e, i, r, n), !0;
							case 6:
								return h.fn.call(h.context, e, i, r, n, s), !0
						}
						for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
						h.fn.apply(h.context, l)
					} else {
						var c, f = h.length;
						for (u = 0; u < f; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d) {
							case 1:
								h[u].fn.call(h[u].context);
								break;
							case 2:
								h[u].fn.call(h[u].context, e);
								break;
							case 3:
								h[u].fn.call(h[u].context, e, i);
								break;
							case 4:
								h[u].fn.call(h[u].context, e, i, r);
								break;
							default:
								if (!l)
									for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
								h[u].fn.apply(h[u].context, l)
						}
					}
					return !0
				}, u.prototype.on = function(t, e, i) {
					return o(this, t, e, i, !1)
				}, u.prototype.once = function(t, e, i) {
					return o(this, t, e, i, !0)
				}, u.prototype.removeListener = function(t, e, i, r) {
					var n = a ? a + t : t;
					if (!this._events[n]) return this;
					if (!e) return l(this, n), this;
					var s = this._events[n];
					if (s.fn) s.fn !== e || r && !s.once || i && s.context !== i || l(this, n);
					else {
						for (var o = 0, u = [], h = s.length; o < h; o++)(s[o].fn !== e || r && !s[o].once || i && s[o].context !== i) && u.push(s[o]);
						u.length ? this._events[n] = 1 === u.length ? u[0] : u : l(this, n)
					}
					return this
				}, u.prototype.removeAllListeners = function(t) {
					var e;
					return t ? (e = a ? a + t : t, this._events[e] && l(this, e)) : (this._events = new n, this._eventsCount = 0), this
				}, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = a, u.EventEmitter = u, t.exports = u
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return u
				}));
				var r = function() {
						function t(t, e) {
							this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
						}
						return t.prototype.decrypt = function(t, e) {
							return this.subtle.decrypt({
								name: "AES-CBC",
								iv: this.aesIV
							}, e, t)
						}, t
					}(),
					a = function() {
						function t(t, e) {
							this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
						}
						return t.prototype.expandKey = function() {
							return this.subtle.importKey("raw", this.key, {
								name: "AES-CBC"
							}, !1, ["encrypt", "decrypt"])
						}, t
					}(),
					n = i(10),
					s = function() {
						function t() {
							this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
						}
						var e = t.prototype;
						return e.uint8ArrayToUint32Array_ = function(t) {
							for (var e = new DataView(t), i = new Uint32Array(4), r = 0; r < 4; r++) i[r] = e.getUint32(4 * r);
							return i
						}, e.initTable = function() {
							var t = this.sBox,
								e = this.invSBox,
								i = this.subMix,
								r = i[0],
								a = i[1],
								n = i[2],
								s = i[3],
								o = this.invSubMix,
								l = o[0],
								u = o[1],
								h = o[2],
								d = o[3],
								c = new Uint32Array(256),
								f = 0,
								g = 0,
								v = 0;
							for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
							for (v = 0; v < 256; v++) {
								var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
								p = p >>> 8 ^ 255 & p ^ 99, t[f] = p, e[p] = f;
								var m = c[f],
									y = c[m],
									T = c[y],
									b = 257 * c[p] ^ 16843008 * p;
								r[f] = b << 24 | b >>> 8, a[f] = b << 16 | b >>> 16, n[f] = b << 8 | b >>> 24, s[f] = b, b = 16843009 * T ^ 65537 * y ^ 257 * m ^ 16843008 * f, l[p] = b << 24 | b >>> 8, u[p] = b << 16 | b >>> 16, h[p] = b << 8 | b >>> 24, d[p] = b, f ? (f = m ^ c[c[c[T ^ m]]], g ^= c[c[g]]) : f = g = 1
							}
						}, e.expandKey = function(t) {
							for (var e = this.uint8ArrayToUint32Array_(t), i = !0, r = 0; r < e.length && i;) i = e[r] === this.key[r], r++;
							if (!i) {
								this.key = e;
								var a = this.keySize = e.length;
								if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
								var n, s, o, l, u = this.ksRows = 4 * (a + 6 + 1),
									h = this.keySchedule = new Uint32Array(u),
									d = this.invKeySchedule = new Uint32Array(u),
									c = this.sBox,
									f = this.rcon,
									g = this.invSubMix,
									v = g[0],
									p = g[1],
									m = g[2],
									y = g[3];
								for (n = 0; n < u; n++) n < a ? o = h[n] = e[n] : (l = o, n % a == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= f[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), h[n] = o = (h[n - a] ^ l) >>> 0);
								for (s = 0; s < u; s++) n = u - s, l = 3 & s ? h[n] : h[n - 4], d[s] = s < 4 || n <= 4 ? l : v[c[l >>> 24]] ^ p[c[l >>> 16 & 255]] ^ m[c[l >>> 8 & 255]] ^ y[c[255 & l]], d[s] = d[s] >>> 0
							}
						}, e.networkToHostOrderSwap = function(t) {
							return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
						}, e.decrypt = function(t, e, i) {
							for (var r, a, n, s, o, l, u, h, d, c, f, g, v, p, m = this.keySize + 6, y = this.invKeySchedule, T = this.invSBox, b = this.invSubMix, E = b[0], S = b[1], L = b[2], A = b[3], D = this.uint8ArrayToUint32Array_(i), R = D[0], k = D[1], _ = D[2], I = D[3], O = new Int32Array(t), C = new Int32Array(O.length), w = this.networkToHostOrderSwap; e < O.length;) {
								for (d = w(O[e]), c = w(O[e + 1]), f = w(O[e + 2]), g = w(O[e + 3]), o = d ^ y[0], l = g ^ y[1], u = f ^ y[2], h = c ^ y[3], v = 4, p = 1; p < m; p++) r = E[o >>> 24] ^ S[l >> 16 & 255] ^ L[u >> 8 & 255] ^ A[255 & h] ^ y[v], a = E[l >>> 24] ^ S[u >> 16 & 255] ^ L[h >> 8 & 255] ^ A[255 & o] ^ y[v + 1], n = E[u >>> 24] ^ S[h >> 16 & 255] ^ L[o >> 8 & 255] ^ A[255 & l] ^ y[v + 2], s = E[h >>> 24] ^ S[o >> 16 & 255] ^ L[l >> 8 & 255] ^ A[255 & u] ^ y[v + 3], o = r, l = a, u = n, h = s, v += 4;
								r = T[o >>> 24] << 24 ^ T[l >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & h] ^ y[v], a = T[l >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[h >> 8 & 255] << 8 ^ T[255 & o] ^ y[v + 1], n = T[u >>> 24] << 24 ^ T[h >> 16 & 255] << 16 ^ T[o >> 8 & 255] << 8 ^ T[255 & l] ^ y[v + 2], s = T[h >>> 24] << 24 ^ T[o >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & u] ^ y[v + 3], C[e] = w(r ^ R), C[e + 1] = w(s ^ k), C[e + 2] = w(n ^ _), C[e + 3] = w(a ^ I), R = d, k = c, _ = f, I = g, e += 4
							}
							return C.buffer
						}, t
					}(),
					o = i(1),
					l = i(5),
					u = function() {
						function t(t, e, i) {
							var r = (void 0 === i ? {} : i).removePKCS7Padding,
								a = void 0 === r || r;
							if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t, this.config = e, this.removePKCS7Padding = a, a) try {
								var n = self.crypto;
								n && (this.subtle = n.subtle || n.webkitSubtle)
							} catch (t) {}
							null === this.subtle && (this.config.enableSoftwareAES = !0)
						}
						var e = t.prototype;
						return e.destroy = function() {
							this.observer = null
						}, e.isSync = function() {
							return this.config.enableSoftwareAES
						}, e.flush = function() {
							var t = this.currentResult;
							if (t) {
								var e, i, r, a = new Uint8Array(t);
								return this.reset(), this.removePKCS7Padding ? (r = (i = (e = a).byteLength) && new DataView(e.buffer).getUint8(i - 1)) ? Object(n.a)(e, 0, i - r) : e : a
							}
							this.reset()
						}, e.reset = function() {
							this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
						}, e.decrypt = function(t, e, i, r) {
							if (this.config.enableSoftwareAES) {
								this.softwareDecrypt(new Uint8Array(t), e, i);
								var a = this.flush();
								a && r(a.buffer)
							} else this.webCryptoDecrypt(new Uint8Array(t), e, i).then(r)
						}, e.softwareDecrypt = function(t, e, i) {
							var r = this.currentIV,
								a = this.currentResult,
								o = this.remainderData;
							this.logOnce("JS AES decrypt"), o && (t = Object(l.b)(o, t), this.remainderData = null);
							var u = this.getValidChunk(t);
							if (!u.length) return null;
							r && (i = r);
							var h = this.softwareDecrypter;
							h || (h = this.softwareDecrypter = new s), h.expandKey(e);
							var d = a;
							return this.currentResult = h.decrypt(u.buffer, 0, i), this.currentIV = Object(n.a)(u, -16).buffer, d || null
						}, e.webCryptoDecrypt = function(t, e, i) {
							var n = this,
								s = this.subtle;
							return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new a(s, e)), this.fastAesKey.expandKey().then((function(e) {
								return s ? new r(s, i).decrypt(t.buffer, e) : Promise.reject(new Error("web crypto not initialized"))
							})).catch((function(r) {
								return n.onWebCryptoError(r, t, e, i)
							}))
						}, e.onWebCryptoError = function(t, e, i, r) {
							return o.b.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(e, i, r)
						}, e.getValidChunk = function(t) {
							var e = t,
								i = t.length - t.length % 16;
							return i !== t.length && (e = Object(n.a)(t, 0, i), this.remainderData = Object(n.a)(t, i)), e
						}, e.logOnce = function(t) {
							this.logEnabled && (o.b.log("[decrypter.ts]: " + t), this.logEnabled = !1)
						}, t
					}()
			}, function(t, e, i) {
				"use strict";
				i.d(e, "a", (function() {
					return n
				}));
				var r = i(12);

				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var n = function() {
					function t(t, e) {
						this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = e ? Object(r.buildAbsoluteURL)(t, e, {
							alwaysNormalize: !0
						}) : t
					}
					var e, i;
					return t.fromURL = function(e, i) {
						return new t(e, i)
					}, t.fromURI = function(e) {
						return new t(e)
					}, e = t, (i = [{
						key: "uri",
						get: function() {
							return this._uri
						}
					}]) && a(e.prototype, i), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}()
			}, function(t, e, i) {
				function r(t) {
					var e = {};

					function i(r) {
						if (e[r]) return e[r].exports;
						var a = e[r] = {
							i: r,
							l: !1,
							exports: {}
						};
						return t[r].call(a.exports, a, a.exports, i), a.l = !0, a.exports
					}
					i.m = t, i.c = e, i.i = function(t) {
						return t
					}, i.d = function(t, e, r) {
						i.o(t, e) || Object.defineProperty(t, e, {
							configurable: !1,
							enumerable: !0,
							get: r
						})
					}, i.r = function(t) {
						Object.defineProperty(t, "__esModule", {
							value: !0
						})
					}, i.n = function(t) {
						var e = t && t.__esModule ? function() {
							return t.default
						} : function() {
							return t
						};
						return i.d(e, "a", e), e
					}, i.o = function(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, i.p = "/", i.oe = function(t) {
						throw console.error(t), t
					};
					var r = i(i.s = ENTRY_MODULE);
					return r.default || r
				}

				function a(t) {
					return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
				}

				function n(t, e, r) {
					var n = {};
					n[r] = [];
					var s = e.toString(),
						o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
					if (!o) return n;
					for (var l, u = o[1], h = new RegExp("(\\\\n|\\W)" + a(u) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); l = h.exec(s);) "dll-reference" !== l[3] && n[r].push(l[3]);
					for (h = new RegExp("\\(" + a(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); l = h.exec(s);) t[l[2]] || (n[r].push(l[1]), t[l[2]] = i(l[1]).m), n[l[2]] = n[l[2]] || [], n[l[2]].push(l[4]);
					for (var d, c = Object.keys(n), f = 0; f < c.length; f++)
						for (var g = 0; g < n[c[f]].length; g++) d = n[c[f]][g], isNaN(1 * d) || (n[c[f]][g] = 1 * n[c[f]][g]);
					return n
				}

				function s(t) {
					return Object.keys(t).reduce((function(e, i) {
						return e || t[i].length > 0
					}), !1)
				}
				t.exports = function(t, e) {
					e = e || {};
					var a = {
							main: i.m
						},
						o = e.all ? {
							main: Object.keys(a.main)
						} : function(t, e) {
							for (var i = {
									main: [e]
								}, r = {
									main: []
								}, a = {
									main: {}
								}; s(i);)
								for (var o = Object.keys(i), l = 0; l < o.length; l++) {
									var u = o[l],
										h = i[u].pop();
									if (a[u] = a[u] || {}, !a[u][h] && t[u][h]) {
										a[u][h] = !0, r[u] = r[u] || [], r[u].push(h);
										for (var d = n(t, t[u][h], u), c = Object.keys(d), f = 0; f < c.length; f++) i[c[f]] = i[c[f]] || [], i[c[f]] = i[c[f]].concat(d[c[f]])
									}
								}
							return r
						}(a, t),
						l = "";
					Object.keys(o).filter((function(t) {
						return "main" !== t
					})).forEach((function(t) {
						for (var e = 0; o[t][e];) e++;
						o[t].push(e), a[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", l = l + "var " + t + " = (" + r.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o[t].map((function(e) {
							return JSON.stringify(e) + ": " + a[t][e].toString()
						})).join(",") + "});\n"
					})), l = l + "new ((" + r.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o.main.map((function(t) {
						return JSON.stringify(t) + ": " + a.main[t].toString()
					})).join(",") + "}))(self);";
					var u = new window.Blob([l], {
						type: "text/javascript"
					});
					if (e.bare) return u;
					var h = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
						d = new window.Worker(h);
					return d.objectURL = h, d
				}
			}, function(t, e, i) {
				"use strict";
				i.r(e), i.d(e, "default", (function() {
					return o
				}));
				var r = i(11),
					a = i(0),
					n = i(1),
					s = i(16);

				function o(t) {
					var e = new s.EventEmitter,
						i = function(e, i) {
							t.postMessage({
								event: e,
								data: i
							})
						};
					e.on(a.a.FRAG_DECRYPTED, i), e.on(a.a.ERROR, i), t.addEventListener("message", (function(a) {
						var s = a.data;
						switch (s.cmd) {
							case "init":
								var o = JSON.parse(s.config);
								t.transmuxer = new r.c(e, s.typeSupported, o, s.vendor, s.id), Object(n.a)(o.debug),
									function() {
										var t = function(t) {
											n.b[t] = function(e) {
												i("workerLog", {
													logType: t,
													message: e
												})
											}
										};
										for (var e in n.b) t(e)
									}(), i("init", null);
								break;
							case "configure":
								t.transmuxer.configure(s.config);
								break;
							case "demux":
								var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
								Object(r.d)(u) ? u.then((function(e) {
									l(t, e)
								})) : l(t, u);
								break;
							case "flush":
								var d = s.chunkMeta,
									c = t.transmuxer.flush(d);
								Object(r.d)(c) ? c.then((function(e) {
									h(t, e, d)
								})) : h(t, c, d)
						}
					}))
				}

				function l(t, e) {
					if (!((i = e.remuxResult).audio || i.video || i.text || i.id3 || i.initSegment)) return !1;
					var i, r = [],
						a = e.remuxResult,
						n = a.audio,
						s = a.video;
					return n && u(r, n), s && u(r, s), t.postMessage({
						event: "transmuxComplete",
						data: e
					}, r), !0
				}

				function u(t, e) {
					e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
				}

				function h(t, e, i) {
					e.reduce((function(e, i) {
						return l(t, i) || e
					}), !1) || t.postMessage({
						event: "transmuxComplete",
						data: e[0]
					}), t.postMessage({
						event: "flush",
						data: i
					})
				}
			}, function(t, e, i) {
				"use strict";
				i.r(e), i.d(e, "default", (function() {
					return rr
				}));
				var r, a = i(12),
					n = i(3),
					s = i(0),
					o = i(2),
					l = i(1),
					u = i(5),
					h = /^(\d+)x(\d+)$/,
					d = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
					c = function() {
						function t(e) {
							for (var i in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(i) && (this[i] = e[i])
						}
						var e = t.prototype;
						return e.decimalInteger = function(t) {
							var e = parseInt(this[t], 10);
							return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
						}, e.hexadecimalInteger = function(t) {
							if (this[t]) {
								var e = (this[t] || "0x").slice(2);
								e = (1 & e.length ? "0" : "") + e;
								for (var i = new Uint8Array(e.length / 2), r = 0; r < e.length / 2; r++) i[r] = parseInt(e.slice(2 * r, 2 * r + 2), 16);
								return i
							}
							return null
						}, e.hexadecimalIntegerAsNumber = function(t) {
							var e = parseInt(this[t], 16);
							return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
						}, e.decimalFloatingPoint = function(t) {
							return parseFloat(this[t])
						}, e.optionalFloat = function(t, e) {
							var i = this[t];
							return i ? parseFloat(i) : e
						}, e.enumeratedString = function(t) {
							return this[t]
						}, e.bool = function(t) {
							return "YES" === this[t]
						}, e.decimalResolution = function(t) {
							var e = h.exec(this[t]);
							if (null !== e) return {
								width: parseInt(e[1], 10),
								height: parseInt(e[2], 10)
							}
						}, t.parseAttrList = function(t) {
							var e, i = {};
							for (d.lastIndex = 0; null !== (e = d.exec(t));) {
								var r = e[2];
								0 === r.indexOf('"') && r.lastIndexOf('"') === r.length - 1 && (r = r.slice(1, -1)), i[e[1]] = r
							}
							return i
						}, t
					}();

				function f() {
					return (f = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}

				function g(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}! function(t) {
					t.ID = "ID", t.CLASS = "CLASS", t.START_DATE = "START-DATE", t.DURATION = "DURATION", t.END_DATE = "END-DATE", t.END_ON_NEXT = "END-ON-NEXT", t.PLANNED_DURATION = "PLANNED-DURATION", t.SCTE35_OUT = "SCTE35-OUT", t.SCTE35_IN = "SCTE35-IN"
				}(r || (r = {}));
				var v = function() {
						function t(t, e) {
							if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
								var i = e.attr;
								for (var a in i)
									if (Object.prototype.hasOwnProperty.call(t, a) && t[a] !== i[a]) {
										l.b.warn('DATERANGE tag attribute: "' + a + '" does not match for tags with ID: "' + t.ID + '"'), this._badValueForSameId = a;
										break
									} t = f(new c({}), i, t)
							}
							if (this.attr = t, this._startDate = new Date(t[r.START_DATE]), r.END_DATE in this.attr) {
								var s = new Date(this.attr[r.END_DATE]);
								Object(n.a)(s.getTime()) && (this._endDate = s)
							}
						}
						var e, i;
						return e = t, (i = [{
							key: "id",
							get: function() {
								return this.attr.ID
							}
						}, {
							key: "class",
							get: function() {
								return this.attr.CLASS
							}
						}, {
							key: "startDate",
							get: function() {
								return this._startDate
							}
						}, {
							key: "endDate",
							get: function() {
								if (this._endDate) return this._endDate;
								var t = this.duration;
								return null !== t ? new Date(this._startDate.getTime() + 1e3 * t) : null
							}
						}, {
							key: "duration",
							get: function() {
								if (r.DURATION in this.attr) {
									var t = this.attr.decimalFloatingPoint(r.DURATION);
									if (Object(n.a)(t)) return t
								} else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
								return null
							}
						}, {
							key: "plannedDuration",
							get: function() {
								return r.PLANNED_DURATION in this.attr ? this.attr.decimalFloatingPoint(r.PLANNED_DURATION) : null
							}
						}, {
							key: "endOnNext",
							get: function() {
								return this.attr.bool(r.END_ON_NEXT)
							}
						}, {
							key: "isValid",
							get: function() {
								return !!this.id && !this._badValueForSameId && Object(n.a)(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class)
							}
						}]) && g(e.prototype, i), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t
					}(),
					p = i(6);

				function m(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var y = function() {
						function t(t) {
							this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.dateRanges = {}, this.url = t
						}
						var e, i;
						return t.prototype.reloaded = function(t) {
							if (!t) return this.advanced = !0, void(this.updated = !0);
							var e = this.lastPartSn - t.lastPartSn,
								i = this.lastPartIndex - t.lastPartIndex;
							this.updated = this.endSN !== t.endSN || !!i || !!e, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && i > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
						}, e = t, (i = [{
							key: "hasProgramDateTime",
							get: function() {
								return !!this.fragments.length && Object(n.a)(this.fragments[this.fragments.length - 1].programDateTime)
							}
						}, {
							key: "levelTargetDuration",
							get: function() {
								return this.averagetargetduration || this.targetduration || 10
							}
						}, {
							key: "drift",
							get: function() {
								var t = this.driftEndTime - this.driftStartTime;
								return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
							}
						}, {
							key: "edge",
							get: function() {
								return this.partEnd || this.fragmentEnd
							}
						}, {
							key: "partEnd",
							get: function() {
								var t;
								return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
							}
						}, {
							key: "fragmentEnd",
							get: function() {
								var t;
								return null !== (t = this.fragments) && void 0 !== t && t.length ? this.fragments[this.fragments.length - 1].end : 0
							}
						}, {
							key: "age",
							get: function() {
								return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
							}
						}, {
							key: "lastPartIndex",
							get: function() {
								var t;
								return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].index : -1
							}
						}, {
							key: "lastPartSn",
							get: function() {
								var t;
								return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
							}
						}]) && m(e.prototype, i), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t
					}(),
					T = i(18),
					b = {
						audio: {
							a3ds: !0,
							"ac-3": !0,
							"ac-4": !0,
							alac: !0,
							alaw: !0,
							dra1: !0,
							"dts+": !0,
							"dts-": !0,
							dtsc: !0,
							dtse: !0,
							dtsh: !0,
							"ec-3": !0,
							enca: !0,
							g719: !0,
							g726: !0,
							m4ae: !0,
							mha1: !0,
							mha2: !0,
							mhm1: !0,
							mhm2: !0,
							mlpa: !0,
							mp4a: !0,
							"raw ": !0,
							Opus: !0,
							samr: !0,
							sawb: !0,
							sawp: !0,
							sevc: !0,
							sqcp: !0,
							ssmv: !0,
							twos: !0,
							ulaw: !0
						},
						video: {
							avc1: !0,
							avc2: !0,
							avc3: !0,
							avc4: !0,
							avcp: !0,
							av01: !0,
							drac: !0,
							dvav: !0,
							dvhe: !0,
							encv: !0,
							hev1: !0,
							hvc1: !0,
							mjp2: !0,
							mp4v: !0,
							mvc1: !0,
							mvc2: !0,
							mvc3: !0,
							mvc4: !0,
							resv: !0,
							rv60: !0,
							s263: !0,
							svc1: !0,
							svc2: !0,
							"vc-1": !0,
							vp08: !0,
							vp09: !0
						},
						text: {
							stpp: !0,
							wvtt: !0
						}
					};

				function E(t, e) {
					return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
				}
				var S = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
					L = /#EXT-X-MEDIA:(.*)/g,
					A = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
					D = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
					R = /\.(mp4|m4s|m4v|m4a)$/i,
					k = function() {
						function t() {}
						return t.findGroup = function(t, e) {
							for (var i = 0; i < t.length; i++) {
								var r = t[i];
								if (r.id === e) return r
							}
						}, t.convertAVC1ToAVCOTI = function(t) {
							var e = t.split(".");
							if (e.length > 2) {
								var i = e.shift() + ".";
								return (i += parseInt(e.shift()).toString(16)) + ("000" + parseInt(e.shift()).toString(16)).slice(-4)
							}
							return t
						}, t.resolve = function(t, e) {
							return a.buildAbsoluteURL(e, t, {
								alwaysNormalize: !0
							})
						}, t.parseMasterPlaylist = function(e, i) {
							var r, a = [],
								n = {},
								s = !1;
							for (S.lastIndex = 0; null != (r = S.exec(e));)
								if (r[1]) {
									var o = new c(r[1]),
										l = {
											attrs: o,
											bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
											name: o.NAME,
											url: t.resolve(r[2], i)
										},
										u = o.decimalResolution("RESOLUTION");
									u && (l.width = u.width, l.height = u.height), _((o.CODECS || "").split(/[ ,]+/).filter((function(t) {
										return t
									})), l), l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = t.convertAVC1ToAVCOTI(l.videoCodec)), a.push(l)
								} else if (r[3]) {
								var h = new c(r[3]);
								h["DATA-ID"] && (s = !0, n[h["DATA-ID"]] = h)
							}
							return {
								levels: a,
								sessionData: s ? n : null
							}
						}, t.parseMasterPlaylistMedia = function(e, i, r, a) {
							var n;
							void 0 === a && (a = []);
							var s = [],
								o = 0;
							for (L.lastIndex = 0; null !== (n = L.exec(e));) {
								var l = new c(n[1]);
								if (l.TYPE === r) {
									var u = {
										attrs: l,
										bitrate: 0,
										id: o++,
										groupId: l["GROUP-ID"],
										instreamId: l["INSTREAM-ID"],
										name: l.NAME || l.LANGUAGE || "",
										type: r,
										default: l.bool("DEFAULT"),
										autoselect: l.bool("AUTOSELECT"),
										forced: l.bool("FORCED"),
										lang: l.LANGUAGE,
										url: l.URI ? t.resolve(l.URI, i) : ""
									};
									if (a.length) {
										var h = t.findGroup(a, u.groupId) || a[0];
										I(u, h, "audioCodec"), I(u, h, "textCodec")
									}
									s.push(u)
								}
							}
							return s
						}, t.parseLevelPlaylist = function(t, e, i, r, s) {
							var o, u, h, d = new y(e),
								f = d.fragments,
								g = null,
								m = 0,
								b = 0,
								E = 0,
								S = 0,
								L = null,
								k = new p.b(r, e),
								_ = -1,
								I = !1;
							for (A.lastIndex = 0, d.m3u8 = t; null !== (o = A.exec(t));) {
								I && (I = !1, (k = new p.b(r, e)).start = E, k.sn = m, k.cc = S, k.level = i, g && (k.initSegment = g, k.rawProgramDateTime = g.rawProgramDateTime, g.rawProgramDateTime = null));
								var w = o[1];
								if (w) {
									k.duration = parseFloat(w);
									var x = (" " + o[2]).slice(1);
									k.title = x || null, k.tagList.push(x ? ["INF", w, x] : ["INF", w])
								} else if (o[3]) Object(n.a)(k.duration) && (k.start = E, h && (k.levelkey = h), k.sn = m, k.level = i, k.cc = S, k.urlId = s, f.push(k), k.relurl = (" " + o[3]).slice(1), O(k, L), L = k, E += k.duration, m++, b = 0, I = !0);
								else if (o[4]) {
									var P = (" " + o[4]).slice(1);
									L ? k.setByteRange(P, L) : k.setByteRange(P)
								} else if (o[5]) k.rawProgramDateTime = (" " + o[5]).slice(1), k.tagList.push(["PROGRAM-DATE-TIME", k.rawProgramDateTime]), -1 === _ && (_ = f.length);
								else {
									if (!(o = o[0].match(D))) {
										l.b.warn("No matches on slow regex match for level playlist!");
										continue
									}
									for (u = 1; u < o.length && void 0 === o[u]; u++);
									var F = (" " + o[u]).slice(1),
										M = (" " + o[u + 1]).slice(1),
										N = o[u + 2] ? (" " + o[u + 2]).slice(1) : "";
									switch (F) {
										case "PLAYLIST-TYPE":
											d.type = M.toUpperCase();
											break;
										case "MEDIA-SEQUENCE":
											m = d.startSN = parseInt(M);
											break;
										case "SKIP":
											var U = new c(M),
												B = U.decimalInteger("SKIPPED-SEGMENTS");
											if (Object(n.a)(B)) {
												d.skippedSegments = B;
												for (var G = B; G--;) f.unshift(null);
												m += B
											}
											var j = U.enumeratedString("RECENTLY-REMOVED-DATERANGES");
											j && (d.recentlyRemovedDateranges = j.split("\t"));
											break;
										case "TARGETDURATION":
											d.targetduration = parseFloat(M);
											break;
										case "VERSION":
											d.version = parseInt(M);
											break;
										case "EXTM3U":
											break;
										case "ENDLIST":
											d.live = !1;
											break;
										case "#":
											(M || N) && k.tagList.push(N ? [M, N] : [M]);
											break;
										case "DISCONTINUITY":
											S++, k.tagList.push(["DIS"]);
											break;
										case "GAP":
											k.tagList.push([F]);
											break;
										case "BITRATE":
											k.tagList.push([F, M]);
											break;
										case "DATERANGE":
											var K = new c(M),
												H = new v(K, d.dateRanges[K.ID]);
											H.isValid || d.skippedSegments ? d.dateRanges[H.id] = H : l.b.warn('Ignoring invalid DATERANGE tag: "' + M + '"'), k.tagList.push(["EXT-X-DATERANGE", M]);
											break;
										case "DISCONTINUITY-SEQUENCE":
											S = parseInt(M);
											break;
										case "KEY":
											var V, W = new c(M),
												Y = W.enumeratedString("METHOD"),
												q = W.URI,
												z = W.hexadecimalInteger("IV"),
												X = W.enumeratedString("KEYFORMATVERSIONS"),
												Q = W.enumeratedString("KEYID"),
												$ = null != (V = W.enumeratedString("KEYFORMAT")) ? V : "identity";
											if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf($) > -1) {
												l.b.warn("Keyformat " + $ + " is not supported from the manifest");
												continue
											}
											if ("identity" !== $) continue;
											Y && (h = T.a.fromURL(e, q), q && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(Y) >= 0 && (h.method = Y, h.keyFormat = $, Q && (h.keyID = Q), X && (h.keyFormatVersions = X), h.iv = z));
											break;
										case "START":
											var J = new c(M).decimalFloatingPoint("TIME-OFFSET");
											Object(n.a)(J) && (d.startTimeOffset = J);
											break;
										case "MAP":
											var Z = new c(M);
											if (k.duration) {
												var tt = new p.b(r, e);
												C(tt, Z, i, h), g = tt, k.initSegment = g, g.rawProgramDateTime && !k.rawProgramDateTime && (k.rawProgramDateTime = g.rawProgramDateTime)
											} else C(k, Z, i, h), g = k, I = !0;
											break;
										case "SERVER-CONTROL":
											var et = new c(M);
											d.canBlockReload = et.bool("CAN-BLOCK-RELOAD"), d.canSkipUntil = et.optionalFloat("CAN-SKIP-UNTIL", 0), d.canSkipDateRanges = d.canSkipUntil > 0 && et.bool("CAN-SKIP-DATERANGES"), d.partHoldBack = et.optionalFloat("PART-HOLD-BACK", 0), d.holdBack = et.optionalFloat("HOLD-BACK", 0);
											break;
										case "PART-INF":
											var it = new c(M);
											d.partTarget = it.decimalFloatingPoint("PART-TARGET");
											break;
										case "PART":
											var rt = d.partList;
											rt || (rt = d.partList = []);
											var at = b > 0 ? rt[rt.length - 1] : void 0,
												nt = b++,
												st = new p.c(new c(M), k, e, nt, at);
											rt.push(st), k.duration += st.duration;
											break;
										case "PRELOAD-HINT":
											var ot = new c(M);
											d.preloadHint = ot;
											break;
										case "RENDITION-REPORT":
											var lt = new c(M);
											d.renditionReports = d.renditionReports || [], d.renditionReports.push(lt);
											break;
										default:
											l.b.warn("line parsed but not handled: " + o)
									}
								}
							}
							L && !L.relurl ? (f.pop(), E -= L.duration, d.partList && (d.fragmentHint = L)) : d.partList && (O(k, L), k.cc = S, d.fragmentHint = k);
							var ut = f.length,
								ht = f[0],
								dt = f[ut - 1];
							if ((E += d.skippedSegments * d.targetduration) > 0 && ut && dt) {
								d.averagetargetduration = E / ut;
								var ct = dt.sn;
								d.endSN = "initSegment" !== ct ? ct : 0, ht && (d.startCC = ht.cc, ht.initSegment || d.fragments.every((function(t) {
									return t.relurl && (e = t.relurl, R.test(null != (i = null === (r = a.parseURL(e)) || void 0 === r ? void 0 : r.path) ? i : ""));
									var e, i, r
								})) && (l.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (k = new p.b(r, e)).relurl = dt.relurl, k.level = i, k.sn = "initSegment", ht.initSegment = k, d.needSidxRanges = !0))
							} else d.endSN = 0, d.startCC = 0;
							return d.fragmentHint && (E += d.fragmentHint.duration), d.totalduration = E, d.endCC = S, _ > 0 && function(t, e) {
								for (var i = t[e], r = e; r--;) {
									var a = t[r];
									if (!a) return;
									a.programDateTime = i.programDateTime - 1e3 * a.duration, i = a
								}
							}(f, _), d
						}, t
					}();

				function _(t, e) {
					["video", "audio", "text"].forEach((function(i) {
						var r = t.filter((function(t) {
							return function(t, e) {
								var i = b[e];
								return !!i && !0 === i[t.slice(0, 4)]
							}(t, i)
						}));
						if (r.length) {
							var a = r.filter((function(t) {
								return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
							}));
							e[i + "Codec"] = a.length > 0 ? a[0] : r[0], t = t.filter((function(t) {
								return -1 === r.indexOf(t)
							}))
						}
					})), e.unknownCodecs = t
				}

				function I(t, e, i) {
					var r = e[i];
					r && (t[i] = r)
				}

				function O(t, e) {
					t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), Object(n.a)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
				}

				function C(t, e, i, r) {
					t.relurl = e.URI, e.BYTERANGE && t.setByteRange(e.BYTERANGE), t.level = i, t.sn = "initSegment", r && (t.levelkey = r), t.initSegment = null
				}
				var w = i(4);

				function x(t, e) {
					var i = t.url;
					return void 0 !== i && 0 !== i.indexOf("data:") || (i = e.url), i
				}
				var P = function() {
						function t(t) {
							this.hls = void 0, this.loaders = Object.create(null), this.hls = t, this.registerListeners()
						}
						var e = t.prototype;
						return e.registerListeners = function() {
							var t = this.hls;
							t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(s.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
						}, e.unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(s.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
						}, e.createInternalLoader = function(t) {
							var e = this.hls.config,
								i = e.pLoader,
								r = e.loader,
								a = new(i || r)(e);
							return t.loader = a, this.loaders[t.type] = a, a
						}, e.getInternalLoader = function(t) {
							return this.loaders[t.type]
						}, e.resetInternalLoader = function(t) {
							this.loaders[t] && delete this.loaders[t]
						}, e.destroyInternalLoaders = function() {
							for (var t in this.loaders) {
								var e = this.loaders[t];
								e && e.destroy(), this.resetInternalLoader(t)
							}
						}, e.destroy = function() {
							this.unregisterListeners(), this.destroyInternalLoaders()
						}, e.onManifestLoading = function(t, e) {
							var i = e.url;
							this.load({
								id: null,
								groupId: null,
								level: 0,
								responseType: "text",
								type: w.a.MANIFEST,
								url: i,
								deliveryDirectives: null
							})
						}, e.onLevelLoading = function(t, e) {
							var i = e.id,
								r = e.level,
								a = e.url,
								n = e.deliveryDirectives;
							this.load({
								id: i,
								groupId: null,
								level: r,
								responseType: "text",
								type: w.a.LEVEL,
								url: a,
								deliveryDirectives: n
							})
						}, e.onAudioTrackLoading = function(t, e) {
							var i = e.id,
								r = e.groupId,
								a = e.url,
								n = e.deliveryDirectives;
							this.load({
								id: i,
								groupId: r,
								level: null,
								responseType: "text",
								type: w.a.AUDIO_TRACK,
								url: a,
								deliveryDirectives: n
							})
						}, e.onSubtitleTrackLoading = function(t, e) {
							var i = e.id,
								r = e.groupId,
								a = e.url,
								n = e.deliveryDirectives;
							this.load({
								id: i,
								groupId: r,
								level: null,
								responseType: "text",
								type: w.a.SUBTITLE_TRACK,
								url: a,
								deliveryDirectives: n
							})
						}, e.load = function(t) {
							var e, i, r, a, n, s, o = this.hls.config,
								u = this.getInternalLoader(t);
							if (u) {
								var h = u.context;
								if (h && h.url === t.url) return void l.b.trace("[playlist-loader]: playlist request ongoing");
								l.b.log("[playlist-loader]: aborting previous loader for type: " + t.type), u.abort()
							}
							switch (t.type) {
								case w.a.MANIFEST:
									i = o.manifestLoadingMaxRetry, r = o.manifestLoadingTimeOut, a = o.manifestLoadingRetryDelay, n = o.manifestLoadingMaxRetryTimeout;
									break;
								case w.a.LEVEL:
								case w.a.AUDIO_TRACK:
								case w.a.SUBTITLE_TRACK:
									i = 0, r = o.levelLoadingTimeOut;
									break;
								default:
									i = o.levelLoadingMaxRetry, r = o.levelLoadingTimeOut, a = o.levelLoadingRetryDelay, n = o.levelLoadingMaxRetryTimeout
							}
							if (u = this.createInternalLoader(t), null !== (e = t.deliveryDirectives) && void 0 !== e && e.part && (t.type === w.a.LEVEL && null !== t.level ? s = this.hls.levels[t.level].details : t.type === w.a.AUDIO_TRACK && null !== t.id ? s = this.hls.audioTracks[t.id].details : t.type === w.a.SUBTITLE_TRACK && null !== t.id && (s = this.hls.subtitleTracks[t.id].details), s)) {
								var d = s.partTarget,
									c = s.targetduration;
								d && c && (r = Math.min(1e3 * Math.max(3 * d, .8 * c), r))
							}
							var f = {
									timeout: r,
									maxRetry: i,
									retryDelay: a,
									maxRetryDelay: n,
									highWaterMark: 0
								},
								g = {
									onSuccess: this.loadsuccess.bind(this),
									onError: this.loaderror.bind(this),
									onTimeout: this.loadtimeout.bind(this)
								};
							u.load(t, f, g)
						}, e.loadsuccess = function(t, e, i, r) {
							if (void 0 === r && (r = null), i.isSidxRequest) return this.handleSidxRequest(t, i), void this.handlePlaylistLoaded(t, e, i, r);
							this.resetInternalLoader(i.type);
							var a = t.data;
							0 === a.indexOf("#EXTM3U") ? (e.parsing.start = performance.now(), a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, e, i, r) : this.handleMasterPlaylist(t, e, i, r)) : this.handleManifestParsingError(t, i, "no EXTM3U delimiter", r)
						}, e.loaderror = function(t, e, i) {
							void 0 === i && (i = null), this.handleNetworkError(e, i, !1, t)
						}, e.loadtimeout = function(t, e, i) {
							void 0 === i && (i = null), this.handleNetworkError(e, i, !0)
						}, e.handleMasterPlaylist = function(t, e, i, r) {
							var a = this.hls,
								n = t.data,
								o = x(t, i),
								u = k.parseMasterPlaylist(n, o),
								h = u.levels,
								d = u.sessionData;
							if (h.length) {
								var f = h.map((function(t) {
										return {
											id: t.attrs.AUDIO,
											audioCodec: t.audioCodec
										}
									})),
									g = h.map((function(t) {
										return {
											id: t.attrs.SUBTITLES,
											textCodec: t.textCodec
										}
									})),
									v = k.parseMasterPlaylistMedia(n, o, "AUDIO", f),
									p = k.parseMasterPlaylistMedia(n, o, "SUBTITLES", g),
									m = k.parseMasterPlaylistMedia(n, o, "CLOSED-CAPTIONS");
								v.length && (v.some((function(t) {
									return !t.url
								})) || !h[0].audioCodec || h[0].attrs.AUDIO || (l.b.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), v.unshift({
									type: "main",
									name: "main",
									default: !1,
									autoselect: !1,
									forced: !1,
									id: -1,
									attrs: new c({}),
									bitrate: 0,
									url: ""
								}))), a.trigger(s.a.MANIFEST_LOADED, {
									levels: h,
									audioTracks: v,
									subtitles: p,
									captions: m,
									url: o,
									stats: e,
									networkDetails: r,
									sessionData: d
								})
							} else this.handleManifestParsingError(t, i, "no level found in manifest", r)
						}, e.handleTrackOrLevelPlaylist = function(t, e, i, r) {
							var a = this.hls,
								l = i.id,
								u = i.level,
								h = i.type,
								d = x(t, i),
								f = Object(n.a)(l) ? l : 0,
								g = Object(n.a)(u) ? u : f,
								v = function(t) {
									switch (t.type) {
										case w.a.AUDIO_TRACK:
											return w.b.AUDIO;
										case w.a.SUBTITLE_TRACK:
											return w.b.SUBTITLE;
										default:
											return w.b.MAIN
									}
								}(i),
								p = k.parseLevelPlaylist(t.data, d, g, v, f);
							if (p.fragments.length) {
								if (h === w.a.MANIFEST) {
									var m = {
										attrs: new c({}),
										bitrate: 0,
										details: p,
										name: "",
										url: d
									};
									a.trigger(s.a.MANIFEST_LOADED, {
										levels: [m],
										audioTracks: [],
										url: d,
										stats: e,
										networkDetails: r,
										sessionData: null
									})
								}
								if (e.parsing.end = performance.now(), p.needSidxRanges) {
									var y, T = null === (y = p.fragments[0].initSegment) || void 0 === y ? void 0 : y.url;
									this.load({
										url: T,
										isSidxRequest: !0,
										type: h,
										level: u,
										levelDetails: p,
										id: l,
										groupId: null,
										rangeStart: 0,
										rangeEnd: 2048,
										responseType: "arraybuffer",
										deliveryDirectives: null
									})
								} else i.levelDetails = p, this.handlePlaylistLoaded(t, e, i, r)
							} else a.trigger(s.a.ERROR, {
								type: o.b.NETWORK_ERROR,
								details: o.a.LEVEL_EMPTY_ERROR,
								fatal: !1,
								url: d,
								reason: "no fragments found in level",
								level: "number" == typeof i.level ? i.level : void 0
							})
						}, e.handleSidxRequest = function(t, e) {
							var i = new Uint8Array(t.data),
								r = Object(u.c)(i, ["sidx"])[0];
							if (r) {
								var a = Object(u.k)(r);
								if (a) {
									var n = a.references,
										s = e.levelDetails;
									n.forEach((function(t, e) {
										var r = t.info,
											a = s.fragments[e];
										if (0 === a.byteRange.length && a.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start)), a.initSegment) {
											var n = Object(u.c)(i, ["moov"])[0],
												o = n ? n.length : null;
											a.initSegment.setByteRange(String(o) + "@0")
										}
									}))
								}
							}
						}, e.handleManifestParsingError = function(t, e, i, r) {
							this.hls.trigger(s.a.ERROR, {
								type: o.b.NETWORK_ERROR,
								details: o.a.MANIFEST_PARSING_ERROR,
								fatal: e.type === w.a.MANIFEST,
								url: t.url,
								reason: i,
								response: t,
								context: e,
								networkDetails: r
							})
						}, e.handleNetworkError = function(t, e, i, r) {
							void 0 === i && (i = !1), l.b.warn("[playlist-loader]: A network " + (i ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
							var a = o.a.UNKNOWN,
								n = !1,
								u = this.getInternalLoader(t);
							switch (t.type) {
								case w.a.MANIFEST:
									a = i ? o.a.MANIFEST_LOAD_TIMEOUT : o.a.MANIFEST_LOAD_ERROR, n = !0;
									break;
								case w.a.LEVEL:
									a = i ? o.a.LEVEL_LOAD_TIMEOUT : o.a.LEVEL_LOAD_ERROR, n = !1;
									break;
								case w.a.AUDIO_TRACK:
									a = i ? o.a.AUDIO_TRACK_LOAD_TIMEOUT : o.a.AUDIO_TRACK_LOAD_ERROR, n = !1;
									break;
								case w.a.SUBTITLE_TRACK:
									a = i ? o.a.SUBTITLE_TRACK_LOAD_TIMEOUT : o.a.SUBTITLE_LOAD_ERROR, n = !1
							}
							u && this.resetInternalLoader(t.type);
							var h = {
								type: o.b.NETWORK_ERROR,
								details: a,
								fatal: n,
								url: t.url,
								loader: u,
								context: t,
								networkDetails: e
							};
							r && (h.response = r), this.hls.trigger(s.a.ERROR, h)
						}, e.handlePlaylistLoaded = function(t, e, i, r) {
							var a = i.type,
								n = i.level,
								o = i.id,
								l = i.groupId,
								u = i.loader,
								h = i.levelDetails,
								d = i.deliveryDirectives;
							if (null != h && h.targetduration) {
								if (u) switch (h.live && (u.getCacheAge && (h.ageHeader = u.getCacheAge() || 0), u.getCacheAge && !isNaN(h.ageHeader) || (h.ageHeader = 0)), a) {
									case w.a.MANIFEST:
									case w.a.LEVEL:
										this.hls.trigger(s.a.LEVEL_LOADED, {
											details: h,
											level: n || 0,
											id: o || 0,
											stats: e,
											networkDetails: r,
											deliveryDirectives: d
										});
										break;
									case w.a.AUDIO_TRACK:
										this.hls.trigger(s.a.AUDIO_TRACK_LOADED, {
											details: h,
											id: o || 0,
											groupId: l || "",
											stats: e,
											networkDetails: r,
											deliveryDirectives: d
										});
										break;
									case w.a.SUBTITLE_TRACK:
										this.hls.trigger(s.a.SUBTITLE_TRACK_LOADED, {
											details: h,
											id: o || 0,
											groupId: l || "",
											stats: e,
											networkDetails: r,
											deliveryDirectives: d
										})
								}
							} else this.handleManifestParsingError(t, i, "invalid target duration", r)
						}, t
					}(),
					F = function() {
						function t(t) {
							this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = t, this._registerListeners()
						}
						var e = t.prototype;
						return e._registerListeners = function() {
							this.hls.on(s.a.KEY_LOADING, this.onKeyLoading, this)
						}, e._unregisterListeners = function() {
							this.hls.off(s.a.KEY_LOADING, this.onKeyLoading)
						}, e.destroy = function() {
							for (var t in this._unregisterListeners(), this.loaders) {
								var e = this.loaders[t];
								e && e.destroy()
							}
							this.loaders = {}
						}, e.onKeyLoading = function(t, e) {
							var i = e.frag,
								r = i.type,
								a = this.loaders[r];
							if (i.decryptdata) {
								var n = i.decryptdata.uri;
								if (n !== this.decrypturl || null === this.decryptkey) {
									var o = this.hls.config;
									if (a && (l.b.warn("abort previous key loader for type:" + r), a.abort()), !n) return void l.b.warn("key uri is falsy");
									var u = o.loader,
										h = i.loader = this.loaders[r] = new u(o);
									this.decrypturl = n, this.decryptkey = null;
									var d = {
											url: n,
											frag: i,
											responseType: "arraybuffer"
										},
										c = {
											timeout: o.fragLoadingTimeOut,
											maxRetry: 0,
											retryDelay: o.fragLoadingRetryDelay,
											maxRetryDelay: o.fragLoadingMaxRetryTimeout,
											highWaterMark: 0
										},
										f = {
											onSuccess: this.loadsuccess.bind(this),
											onError: this.loaderror.bind(this),
											onTimeout: this.loadtimeout.bind(this)
										};
									h.load(d, c, f)
								} else this.decryptkey && (i.decryptdata.key = this.decryptkey, this.hls.trigger(s.a.KEY_LOADED, {
									frag: i
								}))
							} else l.b.warn("Missing decryption data on fragment in onKeyLoading")
						}, e.loadsuccess = function(t, e, i) {
							var r = i.frag;
							r.decryptdata ? (this.decryptkey = r.decryptdata.key = new Uint8Array(t.data), r.loader = null, delete this.loaders[r.type], this.hls.trigger(s.a.KEY_LOADED, {
								frag: r
							})) : l.b.error("after key load, decryptdata unset")
						}, e.loaderror = function(t, e) {
							var i = e.frag,
								r = i.loader;
							r && r.abort(), delete this.loaders[i.type], this.hls.trigger(s.a.ERROR, {
								type: o.b.NETWORK_ERROR,
								details: o.a.KEY_LOAD_ERROR,
								fatal: !1,
								frag: i,
								response: t
							})
						}, e.loadtimeout = function(t, e) {
							var i = e.frag,
								r = i.loader;
							r && r.abort(), delete this.loaders[i.type], this.hls.trigger(s.a.ERROR, {
								type: o.b.NETWORK_ERROR,
								details: o.a.KEY_LOAD_TIMEOUT,
								fatal: !1,
								frag: i
							})
						}, t
					}();

				function M(t, e) {
					var i;
					try {
						i = new Event("addtrack")
					} catch (t) {
						(i = document.createEvent("Event")).initEvent("addtrack", !1, !1)
					}
					i.track = t, e.dispatchEvent(i)
				}

				function N(t, e) {
					var i = t.mode;
					if ("disabled" === i && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id)) try {
						if (t.addCue(e), !t.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
					} catch (i) {
						l.b.debug("[texttrack-utils]: " + i);
						var r = new self.TextTrackCue(e.startTime, e.endTime, e.text);
						r.id = e.id, t.addCue(r)
					}
					"disabled" === i && (t.mode = i)
				}

				function U(t) {
					var e = t.mode;
					if ("disabled" === e && (t.mode = "hidden"), t.cues)
						for (var i = t.cues.length; i--;) t.removeCue(t.cues[i]);
					"disabled" === e && (t.mode = e)
				}

				function B(t, e, i, r) {
					var a = t.mode;
					if ("disabled" === a && (t.mode = "hidden"), t.cues && t.cues.length > 0)
						for (var n = function(t, e, i) {
								var r = [],
									a = function(t, e) {
										if (e < t[0].startTime) return 0;
										var i = t.length - 1;
										if (e > t[i].endTime) return -1;
										for (var r = 0, a = i; r <= a;) {
											var n = Math.floor((a + r) / 2);
											if (e < t[n].startTime) a = n - 1;
											else {
												if (!(e > t[n].startTime && r < i)) return n;
												r = n + 1
											}
										}
										return t[r].startTime - e < e - t[a].startTime ? r : a
									}(t, e);
								if (a > -1)
									for (var n = a, s = t.length; n < s; n++) {
										var o = t[n];
										if (o.startTime >= e && o.endTime <= i) r.push(o);
										else if (o.startTime > i) return r
									}
								return r
							}(t.cues, e, i), s = 0; s < n.length; s++) r && !r(n[s]) || t.removeCue(n[s]);
					"disabled" === a && (t.mode = a)
				}
				var G = i(7),
					j = i(8);

				function K() {
					return self.WebKitDataCue || self.VTTCue || self.TextTrackCue
				}

				function H(t, e) {
					return t.getTime() / 1e3 - e
				}
				var V = function() {
					function t(t) {
						this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners()
					}
					var e = t.prototype;
					return e.destroy = function() {
						this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
					}, e._registerListeners = function() {
						var t = this.hls;
						t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.a.LEVEL_UPDATED, this.onLevelUpdated, this)
					}, e._unregisterListeners = function() {
						var t = this.hls;
						t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.a.LEVEL_UPDATED, this.onLevelUpdated, this)
					}, e.onMediaAttached = function(t, e) {
						this.media = e.media
					}, e.onMediaDetaching = function() {
						this.id3Track && (U(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
					}, e.onManifestLoading = function() {
						this.dateRangeCuesAppended = {}
					}, e.createTrack = function(t) {
						var e = this.getID3Track(t.textTracks);
						return e.mode = "hidden", e
					}, e.getID3Track = function(t) {
						if (this.media) {
							for (var e = 0; e < t.length; e++) {
								var i = t[e];
								if ("metadata" === i.kind && "id3" === i.label) return M(i, this.media), i
							}
							return this.media.addTextTrack("metadata", "id3")
						}
					}, e.onFragParsingMetadata = function(t, e) {
						if (this.media) {
							var i = this.hls.config,
								r = i.enableEmsgMetadataCues,
								a = i.enableID3MetadataCues;
							if (r || a) {
								var n = e.frag,
									s = e.samples,
									o = e.details;
								this.id3Track || (this.id3Track = this.createTrack(this.media));
								for (var l = o.edge || n.end, u = K(), h = !1, d = {}, c = 0; c < s.length; c++) {
									var f = s[c].type;
									if ((f !== j.a.emsg || r) && a) {
										var g = G.c(s[c].data);
										if (g) {
											var v = s[c].pts,
												p = l;
											p - v <= 0 && (p = v + .25);
											for (var m = 0; m < g.length; m++) {
												var y = g[m];
												if (!G.e(y)) {
													var T = new u(v, p, "");
													T.value = y, f && (T.type = f), this.id3Track.addCue(T), d[y.key] = null, h = !0
												}
											}
										}
									}
								}
								h && this.updateId3CueEnds(d)
							}
						}
					}, e.updateId3CueEnds = function(t) {
						var e, i = null === (e = this.id3Track) || void 0 === e ? void 0 : e.cues;
						if (i)
							for (var r = i.length; r--;) {
								var a, n = i[r],
									s = null === (a = n.value) || void 0 === a ? void 0 : a.key;
								if (s && s in t) {
									var o = t[s];
									o && n.endTime !== o && (n.endTime = o), t[s] = n.startTime
								}
							}
					}, e.onBufferFlushing = function(t, e) {
						var i = e.startOffset,
							r = e.endOffset,
							a = e.type,
							n = this.id3Track,
							s = this.hls;
						if (s) {
							var o = s.config,
								l = o.enableEmsgMetadataCues,
								u = o.enableID3MetadataCues;
							n && (l || u) && B(n, i, r, "audio" === a ? function(t) {
								return t.type === j.a.audioId3 && u
							} : "video" === a ? function(t) {
								return t.type === j.a.emsg && l
							} : function(t) {
								return t.type === j.a.audioId3 && u || t.type === j.a.emsg && l
							})
						}
					}, e.onLevelUpdated = function(t, e) {
						var i = this,
							a = e.details;
						if (this.media && a.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
							var s = this.dateRangeCuesAppended,
								o = this.id3Track,
								l = a.dateRanges,
								u = Object.keys(l);
							if (o)
								for (var h = Object.keys(s).filter((function(t) {
										return !u.includes(t)
									})), d = function(t) {
										var e = h[t];
										Object.keys(s[e].cues).forEach((function(t) {
											o.removeCue(s[e].cues[t])
										})), delete s[e]
									}, c = h.length; c--;) d(c);
							var f = a.fragments[a.fragments.length - 1];
							if (0 !== u.length && Object(n.a)(null == f ? void 0 : f.programDateTime)) {
								this.id3Track || (this.id3Track = this.createTrack(this.media));
								for (var g = f.programDateTime / 1e3 - f.start, v = a.edge || f.end, p = K(), m = function(t) {
										var e = u[t],
											a = l[e],
											n = s[e],
											o = (null == n ? void 0 : n.cues) || {},
											h = (null == n ? void 0 : n.durationKnown) || !1,
											d = H(a.startDate, g),
											c = v,
											f = a.endDate;
										if (f) c = H(f, g), h = !0;
										else if (a.endOnNext && !h) {
											var m = u.reduce((function(t, e) {
												var i = l[e];
												return i.class === a.class && i.id !== e && i.startDate > a.startDate && t.push(i), t
											}), []).sort((function(t, e) {
												return t.startDate.getTime() - e.startDate.getTime()
											}))[0];
											m && (c = H(m.startDate, g), h = !0)
										}
										for (var y, T = Object.keys(a.attr), b = 0; b < T.length; b++) {
											var E = T[b];
											if (E !== r.ID && E !== r.CLASS && E !== r.START_DATE && E !== r.DURATION && E !== r.END_DATE && E !== r.END_ON_NEXT) {
												var S = o[E];
												if (S) h && !n.durationKnown && (S.endTime = c);
												else {
													var L = a.attr[E];
													S = new p(d, c, ""), E !== r.SCTE35_OUT && E !== r.SCTE35_IN || (y = L, L = Uint8Array.from(y.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer), S.value = {
														key: E,
														data: L
													}, S.type = j.a.dateRange, i.id3Track.addCue(S), o[E] = S
												}
											}
										}
										s[e] = {
											cues: o,
											dateRange: a,
											durationKnown: h
										}
									}, y = 0; y < u.length; y++) m(y)
							}
						}
					}, t
				}();

				function W(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var Y, q = function() {
					function t(t) {
						var e = this;
						this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
							return e.timeupdate()
						}, this.hls = t, this.config = t.config, this.registerListeners()
					}
					var e, i, r = t.prototype;
					return r.destroy = function() {
						this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
					}, r.registerListeners = function() {
						this.hls.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(s.a.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(s.a.ERROR, this.onError, this)
					}, r.unregisterListeners = function() {
						this.hls.off(s.a.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(s.a.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(s.a.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(s.a.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(s.a.ERROR, this.onError)
					}, r.onMediaAttached = function(t, e) {
						this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
					}, r.onMediaDetaching = function() {
						this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
					}, r.onManifestLoading = function() {
						this.levelDetails = null, this._latency = null, this.stallCount = 0
					}, r.onLevelUpdated = function(t, e) {
						var i = e.details;
						this.levelDetails = i, i.advanced && this.timeupdate(), !i.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
					}, r.onError = function(t, e) {
						e.details === o.a.BUFFER_STALLED_ERROR && (this.stallCount++, l.b.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
					}, r.timeupdate = function() {
						var t = this.media,
							e = this.levelDetails;
						if (t && e) {
							this.currentTime = t.currentTime;
							var i = this.computeLatency();
							if (null !== i) {
								this._latency = i;
								var r = this.config,
									a = r.lowLatencyMode,
									n = r.maxLiveSyncPlaybackRate;
								if (a && 1 !== n) {
									var s = this.targetLatency;
									if (null !== s) {
										var o = i - s,
											l = o < Math.min(this.maxLatency, s + e.targetduration);
										if (e.live && l && o > .05 && this.forwardBufferLength > 1) {
											var u = Math.min(2, Math.max(1, n)),
												h = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
											t.playbackRate = Math.min(u, Math.max(1, h))
										} else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
									}
								}
							}
						}
					}, r.estimateLiveEdge = function() {
						var t = this.levelDetails;
						return null === t ? null : t.edge + t.age
					}, r.computeLatency = function() {
						var t = this.estimateLiveEdge();
						return null === t ? null : t - this.currentTime
					}, e = t, (i = [{
						key: "latency",
						get: function() {
							return this._latency || 0
						}
					}, {
						key: "maxLatency",
						get: function() {
							var t = this.config,
								e = this.levelDetails;
							return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
						}
					}, {
						key: "targetLatency",
						get: function() {
							var t = this.levelDetails;
							if (null === t) return null;
							var e = t.holdBack,
								i = t.partHoldBack,
								r = t.targetduration,
								a = this.config,
								n = a.liveSyncDuration,
								s = a.liveSyncDurationCount,
								o = a.lowLatencyMode,
								l = this.hls.userConfig,
								u = o && i || e;
							(l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== n ? n : s * r);
							var h = r;
							return u + Math.min(1 * this.stallCount, h)
						}
					}, {
						key: "liveSyncPosition",
						get: function() {
							var t = this.estimateLiveEdge(),
								e = this.targetLatency,
								i = this.levelDetails;
							if (null === t || null === e || null === i) return null;
							var r = i.edge,
								a = t - e - this.edgeStalled,
								n = r - i.totalduration,
								s = r - (this.config.lowLatencyMode && i.partTarget || i.targetduration);
							return Math.min(Math.max(n, a), s)
						}
					}, {
						key: "drift",
						get: function() {
							var t = this.levelDetails;
							return null === t ? 1 : t.drift
						}
					}, {
						key: "edgeStalled",
						get: function() {
							var t = this.levelDetails;
							if (null === t) return 0;
							var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
							return Math.max(t.age - e, 0)
						}
					}, {
						key: "forwardBufferLength",
						get: function() {
							var t = this.media,
								e = this.levelDetails;
							if (!t || !e) return 0;
							var i = t.buffered.length;
							return (i ? t.buffered.end(i - 1) : e.edge) - this.currentTime
						}
					}]) && W(e.prototype, i), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();

				function z(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}! function(t) {
					t.No = "", t.Yes = "YES", t.v2 = "v2"
				}(Y || (Y = {}));
				var X = function() {
						function t(t, e, i) {
							this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = i
						}
						return t.prototype.addDirectives = function(t) {
							var e = new self.URL(t);
							return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.toString()
						}, t
					}(),
					Q = function() {
						function t(t) {
							this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this.attrs = t.attrs, this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter((function(t) {
								return t
							})).join(",").replace(/\.[^.,]+/g, "")
						}
						var e, i;
						return e = t, (i = [{
							key: "maxBitrate",
							get: function() {
								return Math.max(this.realBitrate, this.bitrate)
							}
						}, {
							key: "uri",
							get: function() {
								return this.url[this._urlId] || ""
							}
						}, {
							key: "urlId",
							get: function() {
								return this._urlId
							},
							set: function(t) {
								var e = t % this.url.length;
								this._urlId !== e && (this.details = void 0, this._urlId = e)
							}
						}]) && z(e.prototype, i), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t
					}();

				function $() {
					return ($ = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}

				function J(t, e, i) {
					switch (e) {
						case "audio":
							t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(i);
							break;
						case "text":
							t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(i)
					}
				}

				function Z(t) {
					var e = {};
					t.forEach((function(t) {
						var i = t.groupId || "";
						t.id = e[i] = e[i] || 0, e[i]++
					}))
				}

				function tt(t, e) {
					var i = e.startPTS;
					if (Object(n.a)(i)) {
						var r, a = 0;
						e.sn > t.sn ? (a = i - t.start, r = t) : (a = t.start - i, r = e), r.duration !== a && (r.duration = a)
					} else e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
				}

				function et(t, e, i, r, a, s) {
					r - i <= 0 && (l.b.warn("Fragment should have a positive duration", e), r = i + e.duration, s = a + e.duration);
					var o = i,
						u = r,
						h = e.startPTS,
						d = e.endPTS;
					if (Object(n.a)(h)) {
						var c = Math.abs(h - i);
						Object(n.a)(e.deltaPTS) ? e.deltaPTS = Math.max(c, e.deltaPTS) : e.deltaPTS = c, o = Math.max(i, h), i = Math.min(i, h), a = Math.min(a, e.startDTS), u = Math.min(r, d), r = Math.max(r, d), s = Math.max(s, e.endDTS)
					}
					e.duration = r - i;
					var f = i - e.start;
					e.appendedPTS = r, e.start = e.startPTS = i, e.maxStartPTS = o, e.startDTS = a, e.endPTS = r, e.minEndPTS = u, e.endDTS = s;
					var g, v = e.sn;
					if (!t || v < t.startSN || v > t.endSN) return 0;
					var p = v - t.startSN,
						m = t.fragments;
					for (m[p] = e, g = p; g > 0; g--) tt(m[g], m[g - 1]);
					for (g = p; g < m.length - 1; g++) tt(m[g], m[g + 1]);
					return t.fragmentHint && tt(m[m.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, f
				}

				function it(t, e) {
					for (var i = null, r = t.fragments, a = r.length - 1; a >= 0; a--) {
						var s = r[a].initSegment;
						if (s) {
							i = s;
							break
						}
					}
					t.fragmentHint && delete t.fragmentHint.endPTS;
					var o, u = 0;
					if (function(t, e, i) {
							for (var r = e.skippedSegments, a = Math.max(t.startSN, e.startSN) - e.startSN, n = (t.fragmentHint ? 1 : 0) + (r ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, s = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = a; u <= n; u++) {
								var h = l[s + u],
									d = o[u];
								r && !d && u < r && (d = e.fragments[u] = h), h && d && i(h, d)
							}
						}(t, e, (function(t, r) {
							t.relurl && (u = t.cc - r.cc), Object(n.a)(t.startPTS) && Object(n.a)(t.endPTS) && (r.start = r.startPTS = t.startPTS, r.startDTS = t.startDTS, r.appendedPTS = t.appendedPTS, r.maxStartPTS = t.maxStartPTS, r.endPTS = t.endPTS, r.endDTS = t.endDTS, r.minEndPTS = t.minEndPTS, r.duration = t.endPTS - t.startPTS, r.duration && (o = r), e.PTSKnown = e.alignedSliding = !0), r.elementaryStreams = t.elementaryStreams, r.loader = t.loader, r.stats = t.stats, r.urlId = t.urlId, t.initSegment && (r.initSegment = t.initSegment, i = t.initSegment)
						})), i && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((function(t) {
							var e;
							t.initSegment && t.initSegment.relurl !== (null === (e = i) || void 0 === e ? void 0 : e.relurl) || (t.initSegment = i)
						})), e.skippedSegments)
						if (e.deltaUpdateFailed = e.fragments.some((function(t) {
								return !t
							})), e.deltaUpdateFailed) {
							l.b.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
							for (var h = e.skippedSegments; h--;) e.fragments.shift();
							e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
						} else e.canSkipDateRanges && (e.dateRanges = function(t, e, i) {
							var r = $({}, t);
							return i && i.forEach((function(t) {
								delete r[t]
							})), Object.keys(e).forEach((function(t) {
								var i = new v(e[t].attr, r[t]);
								i.isValid ? r[t] = i : l.b.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(e[t].attr) + '"')
							})), r
						}(t.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
					var d = e.fragments;
					if (u) {
						l.b.warn("discontinuity sliding from playlist, take drift into account");
						for (var c = 0; c < d.length; c++) d[c].cc += u
					}
					e.skippedSegments && (e.startCC = e.fragments[0].cc),
						function(t, e, i) {
							if (t && e)
								for (var r = 0, a = 0, n = t.length; a <= n; a++) {
									var s = t[a],
										o = e[a + r];
									s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? i(s, o) : r--
								}
						}(t.partList, e.partList, (function(t, e) {
							e.elementaryStreams = t.elementaryStreams, e.stats = t.stats
						})), o ? et(e, o, o.startPTS, o.endPTS, o.startDTS, o.endDTS) : rt(t, e), d.length && (e.totalduration = e.edge - d[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
					var f = e.advancedDateTime;
					if (e.advanced && f) {
						var g = e.edge;
						e.driftStart || (e.driftStartTime = f, e.driftStart = g), e.driftEndTime = f, e.driftEnd = g
					} else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
				}

				function rt(t, e) {
					var i = e.startSN + e.skippedSegments - t.startSN,
						r = t.fragments;
					i < 0 || i >= r.length || at(e, r[i].start)
				}

				function at(t, e) {
					if (e) {
						for (var i = t.fragments, r = t.skippedSegments; r < i.length; r++) i[r].start += e;
						t.fragmentHint && (t.fragmentHint.start += e)
					}
				}
				var nt = function() {
					function t(t, e) {
						this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = l.b.log.bind(l.b, e + ":"), this.warn = l.b.warn.bind(l.b, e + ":"), this.hls = t
					}
					var e = t.prototype;
					return e.destroy = function() {
						this.clearTimer(), this.hls = this.log = this.warn = null
					}, e.onError = function(t, e) {
						e.fatal && e.type === o.b.NETWORK_ERROR && this.clearTimer()
					}, e.clearTimer = function() {
						clearTimeout(this.timer), this.timer = -1
					}, e.startLoad = function() {
						this.canLoad = !0, this.retryCount = 0, this.loadPlaylist()
					}, e.stopLoad = function() {
						this.canLoad = !1, this.clearTimer()
					}, e.switchParams = function(t, e) {
						var i = null == e ? void 0 : e.renditionReports;
						if (i)
							for (var r = 0; r < i.length; r++) {
								var a = i[r],
									s = "" + a.URI;
								if (s === t.slice(-s.length)) {
									var o = parseInt(a["LAST-MSN"]),
										l = parseInt(a["LAST-PART"]);
									if (e && this.hls.config.lowLatencyMode) {
										var u = Math.min(e.age - e.partTarget, e.targetduration);
										void 0 !== l && u > e.partTarget && (l += 1)
									}
									if (Object(n.a)(o)) return new X(o, Object(n.a)(l) ? l : void 0, Y.No)
								}
							}
					}, e.loadPlaylist = function(t) {}, e.shouldLoadTrack = function(t) {
						return this.canLoad && t && !!t.url && (!t.details || t.details.live)
					}, e.playlistLoaded = function(t, e, i) {
						var r = this,
							a = e.details,
							n = e.stats,
							s = n.loading.end ? Math.max(0, self.performance.now() - n.loading.end) : 0;
						if (a.advancedDateTime = Date.now() - s, a.live || null != i && i.live) {
							if (a.reloaded(i), i && this.log("live playlist " + t + " " + (a.advanced ? "REFRESHED " + a.lastPartSn + "-" + a.lastPartIndex : "MISSED")), i && a.fragments.length > 0 && it(i, a), !this.canLoad || !a.live) return;
							var o, l = void 0,
								u = void 0;
							if (a.canBlockReload && a.endSN && a.advanced) {
								var h = this.hls.config.lowLatencyMode,
									d = a.lastPartSn,
									c = a.endSN,
									f = a.lastPartIndex,
									g = d === c; - 1 !== f ? (l = g ? c + 1 : d, u = g ? h ? 0 : f : f + 1) : l = c + 1;
								var v = a.age,
									p = v + a.ageHeader,
									m = Math.min(p - a.partTarget, 1.5 * a.targetduration);
								if (m > 0) {
									if (i && m > i.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + i.tuneInGoal + " to: " + m + " with playlist age: " + a.age), m = 0;
									else {
										var y = Math.floor(m / a.targetduration);
										l += y, void 0 !== u && (u += Math.round(m % a.targetduration / a.partTarget)), this.log("CDN Tune-in age: " + a.ageHeader + "s last advanced " + v.toFixed(2) + "s goal: " + m + " skip sn " + y + " to part " + u)
									}
									a.tuneInGoal = m
								}
								if (o = this.getDeliveryDirectives(a, e.deliveryDirectives, l, u), h || !g) return void this.loadPlaylist(o)
							} else o = this.getDeliveryDirectives(a, e.deliveryDirectives, l, u);
							var T = function(t, e) {
								var i, r = 1e3 * t.levelTargetDuration,
									a = r / 2,
									n = t.age,
									s = n > 0 && n < 3 * r,
									o = e.loading.end - e.loading.start,
									l = t.availabilityDelay;
								if (!1 === t.updated)
									if (s) {
										var u = 333 * t.misses;
										i = Math.max(Math.min(a, 2 * o), u), t.availabilityDelay = (t.availabilityDelay || 0) + i
									} else i = a;
								else s ? (l = Math.min(l || r / 2, n), t.availabilityDelay = l, i = l + r - n) : i = r - o;
								return Math.round(i)
							}(a, n);
							void 0 !== l && a.canBlockReload && (T -= a.partTarget || 1), this.log("reload live playlist " + t + " in " + Math.round(T) + " ms"), this.timer = self.setTimeout((function() {
								return r.loadPlaylist(o)
							}), T)
						} else this.clearTimer()
					}, e.getDeliveryDirectives = function(t, e, i, r) {
						var a = function(t, e) {
							var i = t.canSkipUntil,
								r = t.canSkipDateRanges,
								a = t.endSN;
							return i && (void 0 !== e ? e - a : 0) < i ? r ? Y.v2 : Y.Yes : Y.No
						}(t, i);
						return null != e && e.skip && t.deltaUpdateFailed && (i = e.msn, r = e.part, a = Y.No), new X(i, r, a)
					}, e.retryLoadingOrFail = function(t) {
						var e, i = this,
							r = this.hls.config,
							a = this.retryCount < r.levelLoadingMaxRetry;
						if (a)
							if (this.retryCount++, t.details.indexOf("LoadTimeOut") > -1 && null !== (e = t.context) && void 0 !== e && e.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + t.details + '"'), this.loadPlaylist();
							else {
								var n = Math.min(Math.pow(2, this.retryCount) * r.levelLoadingRetryDelay, r.levelLoadingMaxRetryTimeout);
								this.timer = self.setTimeout((function() {
									return i.loadPlaylist()
								}), n), this.warn("retry playlist loading #" + this.retryCount + " in " + n + ' ms after "' + t.details + '"')
							}
						else this.warn('cannot recover from error "' + t.details + '"'), this.clearTimer(), t.fatal = !0;
						return a
					}, t
				}();

				function st() {
					return (st = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}

				function ot(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function lt(t, e) {
					return (lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var ut, ht = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
					dt = function(t) {
						var e, i;

						function r(e) {
							var i;
							return (i = t.call(this, e, "[level-controller]") || this)._levels = [], i._firstLevel = -1, i._startLevel = void 0, i.currentLevelIndex = -1, i.manualLevelIndex = -1, i.onParsedComplete = void 0, i._registerListeners(), i
						}
						i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, lt(e, i);
						var a, n, l = r.prototype;
						return l._registerListeners = function() {
							var t = this.hls;
							t.on(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this), t.on(s.a.ERROR, this.onError, this)
						}, l._unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this), t.off(s.a.ERROR, this.onError, this)
						}, l.destroy = function() {
							this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, t.prototype.destroy.call(this)
						}, l.startLoad = function() {
							this._levels.forEach((function(t) {
								t.loadError = 0
							})), t.prototype.startLoad.call(this)
						}, l.onManifestLoaded = function(t, e) {
							var i, r, a = [],
								n = [],
								l = [],
								u = {},
								h = !1,
								d = !1,
								c = !1;
							if (e.levels.forEach((function(t) {
									var e = t.attrs;
									h = h || !(!t.width || !t.height), d = d || !!t.videoCodec, c = c || !!t.audioCodec, ht && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0);
									var i = t.bitrate + "-" + t.attrs.RESOLUTION + "-" + t.attrs.CODECS;
									(r = u[i]) ? r.url.push(t.url): (r = new Q(t), u[i] = r, a.push(r)), e && (e.AUDIO && J(r, "audio", e.AUDIO), e.SUBTITLES && J(r, "text", e.SUBTITLES))
								})), (h || d) && c && (a = a.filter((function(t) {
									var e = t.videoCodec,
										i = t.width,
										r = t.height;
									return !!e || !(!i || !r)
								}))), a = a.filter((function(t) {
									var e = t.audioCodec,
										i = t.videoCodec;
									return (!e || E(e, "audio")) && (!i || E(i, "video"))
								})), e.audioTracks && Z(n = e.audioTracks.filter((function(t) {
									return !t.audioCodec || E(t.audioCodec, "audio")
								}))), e.subtitles && Z(l = e.subtitles), a.length > 0) {
								i = a[0].bitrate, a.sort((function(t, e) {
									return t.bitrate - e.bitrate
								})), this._levels = a;
								for (var f = 0; f < a.length; f++)
									if (a[f].bitrate === i) {
										this._firstLevel = f, this.log("manifest loaded, " + a.length + " level(s) found, first bitrate: " + i);
										break
									} var g = c && !d,
									v = {
										levels: a,
										audioTracks: n,
										subtitleTracks: l,
										firstLevel: this._firstLevel,
										stats: e.stats,
										audio: c,
										video: d,
										altAudio: !g && n.some((function(t) {
											return !!t.url
										}))
									};
								this.hls.trigger(s.a.MANIFEST_PARSED, v), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
							} else this.hls.trigger(s.a.ERROR, {
								type: o.b.MEDIA_ERROR,
								details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
								fatal: !0,
								url: e.url,
								reason: "no level with compatible codecs found in manifest"
							})
						}, l.onError = function(e, i) {
							if (t.prototype.onError.call(this, e, i), !i.fatal) {
								var r = i.context,
									a = this._levels[this.currentLevelIndex];
								if (r && (r.type === w.a.AUDIO_TRACK && a.audioGroupIds && r.groupId === a.audioGroupIds[a.urlId] || r.type === w.a.SUBTITLE_TRACK && a.textGroupIds && r.groupId === a.textGroupIds[a.urlId])) this.redundantFailover(this.currentLevelIndex);
								else {
									var n, s = !1,
										l = !0;
									switch (i.details) {
										case o.a.FRAG_LOAD_ERROR:
										case o.a.FRAG_LOAD_TIMEOUT:
										case o.a.KEY_LOAD_ERROR:
										case o.a.KEY_LOAD_TIMEOUT:
											if (i.frag) {
												var u = this._levels[i.frag.level];
												u ? (u.fragmentError++, u.fragmentError > this.hls.config.fragLoadingMaxRetry && (n = i.frag.level)) : n = i.frag.level
											}
											break;
										case o.a.LEVEL_LOAD_ERROR:
										case o.a.LEVEL_LOAD_TIMEOUT:
											r && (r.deliveryDirectives && (l = !1), n = r.level), s = !0;
											break;
										case o.a.REMUX_ALLOC_ERROR:
											n = i.level, s = !0
									}
									void 0 !== n && this.recoverLevel(i, n, s, l)
								}
							}
						}, l.recoverLevel = function(t, e, i, r) {
							var a = t.details,
								n = this._levels[e];
							if (n.loadError++, i) {
								if (!this.retryLoadingOrFail(t)) return void(this.currentLevelIndex = -1);
								t.levelRetry = !0
							}
							if (r) {
								var s = n.url.length;
								if (s > 1 && n.loadError < s) t.levelRetry = !0, this.redundantFailover(e);
								else if (-1 === this.manualLevelIndex) {
									var o = 0 === e ? this._levels.length - 1 : e - 1;
									this.currentLevelIndex !== o && 0 === this._levels[o].loadError && (this.warn(a + ": switch to " + o), t.levelRetry = !0, this.hls.nextAutoLevel = o)
								}
							}
						}, l.redundantFailover = function(t) {
							var e = this._levels[t],
								i = e.url.length;
							if (i > 1) {
								var r = (e.urlId + 1) % i;
								this.warn("Switching to redundant URL-id " + r), this._levels.forEach((function(t) {
									t.urlId = r
								})), this.level = t
							}
						}, l.onFragLoaded = function(t, e) {
							var i = e.frag;
							if (void 0 !== i && i.type === w.b.MAIN) {
								var r = this._levels[i.level];
								void 0 !== r && (r.fragmentError = 0, r.loadError = 0)
							}
						}, l.onLevelLoaded = function(t, e) {
							var i, r, a = e.level,
								n = e.details,
								s = this._levels[a];
							if (!s) return this.warn("Invalid level index " + a), void(null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (n.deltaUpdateFailed = !0));
							a === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0, this.retryCount = 0), this.playlistLoaded(a, e, s.details)) : null !== (i = e.deliveryDirectives) && void 0 !== i && i.skip && (n.deltaUpdateFailed = !0)
						}, l.onAudioTrackSwitched = function(t, e) {
							var i = this.hls.levels[this.currentLevelIndex];
							if (i && i.audioGroupIds) {
								for (var r = -1, a = this.hls.audioTracks[e.id].groupId, n = 0; n < i.audioGroupIds.length; n++)
									if (i.audioGroupIds[n] === a) {
										r = n;
										break
									} r !== i.urlId && (i.urlId = r, this.startLoad())
							}
						}, l.loadPlaylist = function(t) {
							var e = this.currentLevelIndex,
								i = this._levels[e];
							if (this.canLoad && i && i.url.length > 0) {
								var r = i.urlId,
									a = i.url[r];
								if (t) try {
									a = t.addDirectives(a)
								} catch (t) {
									this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
								}
								this.log("Attempt loading level index " + e + (t ? " at sn " + t.msn + " part " + t.part : "") + " with URL-id " + r + " " + a), this.clearTimer(), this.hls.trigger(s.a.LEVEL_LOADING, {
									url: a,
									level: e,
									id: r,
									deliveryDirectives: t || null
								})
							}
						}, l.removeLevel = function(t, e) {
							var i = function(t, i) {
									return i !== e
								},
								r = this._levels.filter((function(r, a) {
									return a !== t || r.url.length > 1 && void 0 !== e && (r.url = r.url.filter(i), r.audioGroupIds && (r.audioGroupIds = r.audioGroupIds.filter(i)), r.textGroupIds && (r.textGroupIds = r.textGroupIds.filter(i)), r.urlId = 0, !0)
								})).map((function(t, e) {
									var i = t.details;
									return null != i && i.fragments && i.fragments.forEach((function(t) {
										t.level = e
									})), t
								}));
							this._levels = r, this.hls.trigger(s.a.LEVELS_UPDATED, {
								levels: r
							})
						}, a = r, (n = [{
							key: "levels",
							get: function() {
								return 0 === this._levels.length ? null : this._levels
							}
						}, {
							key: "level",
							get: function() {
								return this.currentLevelIndex
							},
							set: function(t) {
								var e, i = this._levels;
								if (0 !== i.length && (this.currentLevelIndex !== t || null === (e = i[t]) || void 0 === e || !e.details)) {
									if (t < 0 || t >= i.length) {
										var r = t < 0;
										if (this.hls.trigger(s.a.ERROR, {
												type: o.b.OTHER_ERROR,
												details: o.a.LEVEL_SWITCH_ERROR,
												level: t,
												fatal: r,
												reason: "invalid level idx"
											}), r) return;
										t = Math.min(t, i.length - 1)
									}
									this.clearTimer();
									var a = this.currentLevelIndex,
										n = i[a],
										l = i[t];
									this.log("switching to level " + t + " from " + a), this.currentLevelIndex = t;
									var u = st({}, l, {
										level: t,
										maxBitrate: l.maxBitrate,
										uri: l.uri,
										urlId: l.urlId
									});
									delete u._urlId, this.hls.trigger(s.a.LEVEL_SWITCHING, u);
									var h = l.details;
									if (!h || h.live) {
										var d = this.switchParams(l.uri, null == n ? void 0 : n.details);
										this.loadPlaylist(d)
									}
								}
							}
						}, {
							key: "manualLevel",
							get: function() {
								return this.manualLevelIndex
							},
							set: function(t) {
								this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
							}
						}, {
							key: "firstLevel",
							get: function() {
								return this._firstLevel
							},
							set: function(t) {
								this._firstLevel = t
							}
						}, {
							key: "startLevel",
							get: function() {
								if (void 0 === this._startLevel) {
									var t = this.hls.config.startLevel;
									return void 0 !== t ? t : this._firstLevel
								}
								return this._startLevel
							},
							set: function(t) {
								this._startLevel = t
							}
						}, {
							key: "nextLoadLevel",
							get: function() {
								return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
							},
							set: function(t) {
								this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
							}
						}]) && ot(a.prototype, n), Object.defineProperty(a, "prototype", {
							writable: !1
						}), r
					}(nt);
				! function(t) {
					t.NOT_LOADED = "NOT_LOADED", t.APPENDING = "APPENDING", t.PARTIAL = "PARTIAL", t.OK = "OK"
				}(ut || (ut = {}));
				var ct = function() {
					function t(t) {
						this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hls = t, this._registerListeners()
					}
					var e = t.prototype;
					return e._registerListeners = function() {
						var t = this.hls;
						t.on(s.a.BUFFER_APPENDED, this.onBufferAppended, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this)
					}, e._unregisterListeners = function() {
						var t = this.hls;
						t.off(s.a.BUFFER_APPENDED, this.onBufferAppended, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this)
					}, e.destroy = function() {
						this._unregisterListeners(), this.fragments = this.timeRanges = null
					}, e.getAppendedFrag = function(t, e) {
						if (e === w.b.MAIN) {
							var i = this.activeFragment,
								r = this.activeParts;
							if (!i) return null;
							if (r)
								for (var a = r.length; a--;) {
									var n = r[a],
										s = n ? n.end : i.appendedPTS;
									if (n.start <= t && void 0 !== s && t <= s) return a > 9 && (this.activeParts = r.slice(a - 9)), n
								} else if (i.start <= t && void 0 !== i.appendedPTS && t <= i.appendedPTS) return i
						}
						return this.getBufferedFrag(t, e)
					}, e.getBufferedFrag = function(t, e) {
						for (var i = this.fragments, r = Object.keys(i), a = r.length; a--;) {
							var n = i[r[a]];
							if ((null == n ? void 0 : n.body.type) === e && n.buffered) {
								var s = n.body;
								if (s.start <= t && t <= s.end) return s
							}
						}
						return null
					}, e.detectEvictedFragments = function(t, e, i) {
						var r = this;
						Object.keys(this.fragments).forEach((function(a) {
							var n = r.fragments[a];
							if (n)
								if (n.buffered) {
									var s = n.range[t];
									s && s.time.some((function(t) {
										var i = !r.isTimeBuffered(t.startPTS, t.endPTS, e);
										return i && r.removeFragment(n.body), i
									}))
								} else n.body.type === i && r.removeFragment(n.body)
						}))
					}, e.detectPartialFragments = function(t) {
						var e = this,
							i = this.timeRanges,
							r = t.frag,
							a = t.part;
						if (i && "initSegment" !== r.sn) {
							var n = gt(r),
								s = this.fragments[n];
							s && (Object.keys(i).forEach((function(t) {
								var n = r.elementaryStreams[t];
								if (n) {
									var o = i[t],
										l = null !== a || !0 === n.partial;
									s.range[t] = e.getBufferedTimes(r, a, l, o)
								}
							})), s.loaded = null, Object.keys(s.range).length ? s.buffered = !0 : this.removeFragment(s.body))
						}
					}, e.fragBuffered = function(t) {
						var e = gt(t),
							i = this.fragments[e];
						i && (i.loaded = null, i.buffered = !0)
					}, e.getBufferedTimes = function(t, e, i, r) {
						for (var a = {
								time: [],
								partial: i
							}, n = e ? e.start : t.start, s = e ? e.end : t.end, o = t.minEndPTS || s, l = t.maxStartPTS || n, u = 0; u < r.length; u++) {
							var h = r.start(u) - this.bufferPadding,
								d = r.end(u) + this.bufferPadding;
							if (l >= h && o <= d) {
								a.time.push({
									startPTS: Math.max(n, r.start(u)),
									endPTS: Math.min(s, r.end(u))
								});
								break
							}
							if (n < d && s > h) a.partial = !0, a.time.push({
								startPTS: Math.max(n, r.start(u)),
								endPTS: Math.min(s, r.end(u))
							});
							else if (s <= h) break
						}
						return a
					}, e.getPartialFragment = function(t) {
						var e, i, r, a = null,
							n = 0,
							s = this.bufferPadding,
							o = this.fragments;
						return Object.keys(o).forEach((function(l) {
							var u = o[l];
							u && ft(u) && (i = u.body.start - s, r = u.body.end + s, t >= i && t <= r && (e = Math.min(t - i, r - t), n <= e && (a = u.body, n = e)))
						})), a
					}, e.getState = function(t) {
						var e = gt(t),
							i = this.fragments[e];
						return i ? i.buffered ? ft(i) ? ut.PARTIAL : ut.OK : ut.APPENDING : ut.NOT_LOADED
					}, e.isTimeBuffered = function(t, e, i) {
						for (var r, a, n = 0; n < i.length; n++) {
							if (r = i.start(n) - this.bufferPadding, a = i.end(n) + this.bufferPadding, t >= r && e <= a) return !0;
							if (e <= r) return !1
						}
						return !1
					}, e.onFragLoaded = function(t, e) {
						var i = e.frag,
							r = e.part;
						if ("initSegment" !== i.sn && !i.bitrateTest && !r) {
							var a = gt(i);
							this.fragments[a] = {
								body: i,
								loaded: e,
								buffered: !1,
								range: Object.create(null)
							}
						}
					}, e.onBufferAppended = function(t, e) {
						var i = this,
							r = e.frag,
							a = e.part,
							n = e.timeRanges;
						if (r.type === w.b.MAIN)
							if (this.activeFragment = r, a) {
								var s = this.activeParts;
								s || (this.activeParts = s = []), s.push(a)
							} else this.activeParts = null;
						this.timeRanges = n, Object.keys(n).forEach((function(t) {
							var e = n[t];
							if (i.detectEvictedFragments(t, e), !a)
								for (var s = 0; s < e.length; s++) r.appendedPTS = Math.max(e.end(s), r.appendedPTS || 0)
						}))
					}, e.onFragBuffered = function(t, e) {
						this.detectPartialFragments(e)
					}, e.hasFragment = function(t) {
						var e = gt(t);
						return !!this.fragments[e]
					}, e.removeFragmentsInRange = function(t, e, i) {
						var r = this;
						Object.keys(this.fragments).forEach((function(a) {
							var n = r.fragments[a];
							if (n && n.buffered) {
								var s = n.body;
								s.type === i && s.start < e && s.end > t && r.removeFragment(s)
							}
						}))
					}, e.removeFragment = function(t) {
						var e = gt(t);
						t.stats.loaded = 0, t.clearElementaryStreamInfo(), delete this.fragments[e]
					}, e.removeAllFragments = function() {
						this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null
					}, t
				}();

				function ft(t) {
					var e, i;
					return t.buffered && ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) || (null === (i = t.range.audio) || void 0 === i ? void 0 : i.partial))
				}

				function gt(t) {
					return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
				}
				var vt = function() {
						function t() {
							this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
						}
						var e = t.prototype;
						return e.destroy = function() {
							this.onHandlerDestroying(), this.onHandlerDestroyed()
						}, e.onHandlerDestroying = function() {
							this.clearNextTick(), this.clearInterval()
						}, e.onHandlerDestroyed = function() {}, e.hasInterval = function() {
							return !!this._tickInterval
						}, e.hasNextTick = function() {
							return !!this._tickTimer
						}, e.setInterval = function(t) {
							return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0)
						}, e.clearInterval = function() {
							return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
						}, e.clearNextTick = function() {
							return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
						}, e.tick = function() {
							this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
						}, e.tickImmediate = function() {
							this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
						}, e.doTick = function() {}, t
					}(),
					pt = {
						length: 0,
						start: function() {
							return 0
						},
						end: function() {
							return 0
						}
					},
					mt = function() {
						function t() {}
						return t.isBuffered = function(e, i) {
							try {
								if (e)
									for (var r = t.getBuffered(e), a = 0; a < r.length; a++)
										if (i >= r.start(a) && i <= r.end(a)) return !0
							} catch (t) {}
							return !1
						}, t.bufferInfo = function(e, i, r) {
							try {
								if (e) {
									var a, n = t.getBuffered(e),
										s = [];
									for (a = 0; a < n.length; a++) s.push({
										start: n.start(a),
										end: n.end(a)
									});
									return this.bufferedInfo(s, i, r)
								}
							} catch (t) {}
							return {
								len: 0,
								start: i,
								end: i,
								nextStart: void 0
							}
						}, t.bufferedInfo = function(t, e, i) {
							e = Math.max(0, e), t.sort((function(t, e) {
								return t.start - e.start || e.end - t.end
							}));
							var r = [];
							if (i)
								for (var a = 0; a < t.length; a++) {
									var n = r.length;
									if (n) {
										var s = r[n - 1].end;
										t[a].start - s < i ? t[a].end > s && (r[n - 1].end = t[a].end) : r.push(t[a])
									} else r.push(t[a])
								} else r = t;
							for (var o, l = 0, u = e, h = e, d = 0; d < r.length; d++) {
								var c = r[d].start,
									f = r[d].end;
								if (e + i >= c && e < f) u = c, l = (h = f) - e;
								else if (e + i < c) {
									o = c;
									break
								}
							}
							return {
								len: l,
								start: u || 0,
								end: h || 0,
								nextStart: o
							}
						}, t.getBuffered = function(t) {
							try {
								return t.buffered
							} catch (t) {
								return l.b.log("failed to get media.buffered", t), pt
							}
						}, t
					}(),
					yt = function(t, e, i, r, a, n) {
						void 0 === r && (r = 0), void 0 === a && (a = -1), void 0 === n && (n = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
							start: 0,
							executeStart: 0,
							executeEnd: 0,
							end: 0
						}, this.buffering = {
							audio: {
								start: 0,
								executeStart: 0,
								executeEnd: 0,
								end: 0
							},
							video: {
								start: 0,
								executeStart: 0,
								executeEnd: 0,
								end: 0
							},
							audiovideo: {
								start: 0,
								executeStart: 0,
								executeEnd: 0,
								end: 0
							}
						}, this.level = t, this.sn = e, this.id = i, this.size = r, this.part = a, this.partial = n
					};

				function Tt(t, e) {
					if (t) {
						var i = t.start + e;
						t.start = t.startPTS = i, t.endPTS = i + t.duration
					}
				}

				function bt(t, e) {
					for (var i = e.fragments, r = 0, a = i.length; r < a; r++) Tt(i[r], t);
					e.fragmentHint && Tt(e.fragmentHint, t), e.alignedSliding = !0
				}

				function Et(t, e, i) {
					e && (function(t, e, i) {
						if (function(t, e, i) {
								return !(!e.details || !(i.endCC > i.startCC || t && t.cc < i.startCC))
							}(t, i, e)) {
							var r = function(t, e) {
								var i = t.fragments,
									r = e.fragments;
								if (r.length && i.length) {
									var a = function(t, e) {
										for (var i = null, r = 0, a = t.length; r < a; r++) {
											var n = t[r];
											if (n && n.cc === e) {
												i = n;
												break
											}
										}
										return i
									}(i, r[0].cc);
									if (a && (!a || a.startPTS)) return a;
									l.b.log("No frag in previous level to align on")
								} else l.b.log("No fragments to align")
							}(i.details, e);
							r && Object(n.a)(r.start) && (l.b.log("Adjusting PTS using last level due to CC increase within current level " + e.url), bt(r.start, e))
						}
					}(t, i, e), !i.alignedSliding && e.details && function(t, e) {
						if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
							var i = e.fragments[0].programDateTime,
								r = t.fragments[0].programDateTime,
								a = (r - i) / 1e3 + e.fragments[0].start;
							a && Object(n.a)(a) && (l.b.log("Adjusting PTS using programDateTime delta " + (r - i) + "ms, sliding:" + a.toFixed(3) + " " + t.url + " "), bt(a, t))
						}
					}(i, e.details), i.alignedSliding || !e.details || i.skippedSegments || rt(e.details, i))
				}

				function St(t, e) {
					var i = t.programDateTime;
					if (i) {
						var r = (i - e) / 1e3;
						t.start = t.startPTS = r, t.endPTS = r + t.duration
					}
				}

				function Lt(t, e) {
					if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
						var i = e.fragments[0].programDateTime - 1e3 * e.fragments[0].start;
						t.fragments.forEach((function(t) {
							St(t, i)
						})), t.fragmentHint && St(t.fragmentHint, i), t.alignedSliding = !0
					}
				}
				var At = {
					search: function(t, e) {
						for (var i = 0, r = t.length - 1, a = null, n = null; i <= r;) {
							var s = e(n = t[a = (i + r) / 2 | 0]);
							if (s > 0) i = a + 1;
							else {
								if (!(s < 0)) return n;
								r = a - 1
							}
						}
						return null
					}
				};

				function Dt(t, e, i, r) {
					void 0 === i && (i = 0), void 0 === r && (r = 0);
					var a = null;
					return t ? a = e[t.sn - e[0].sn + 1] || null : 0 === i && 0 === e[0].start && (a = e[0]), a && 0 === Rt(i, r, a) ? a : At.search(e, Rt.bind(null, i, r)) || a
				}

				function Rt(t, e, i) {
					void 0 === t && (t = 0), void 0 === e && (e = 0);
					var r = Math.min(e, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
					return i.start + i.duration - r <= t ? 1 : i.start - r > t && i.start ? -1 : 0
				}

				function kt(t, e, i) {
					var r = 1e3 * Math.min(e, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
					return (i.endProgramDateTime || 0) - r > t
				}

				function _t(t) {
					var e = "function" == typeof Map ? new Map : void 0;
					return (_t = function(t) {
						if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
						var i;
						if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, r)
						}

						function r() {
							return function(t, e, i) {
								return (function() {
									if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
									if (Reflect.construct.sham) return !1;
									if ("function" == typeof Proxy) return !0;
									try {
										return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
									} catch (t) {
										return !1
									}
								}() ? Reflect.construct.bind() : function(t, e, i) {
									var r = [null];
									r.push.apply(r, e);
									var a = new(Function.bind.apply(t, r));
									return i && It(a, i.prototype), a
								}).apply(null, arguments)
							}(t, arguments, function(t) {
								return (Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
									return t.__proto__ || Object.getPrototypeOf(t)
								})(t)
							}(this).constructor)
						}
						return r.prototype = Object.create(t.prototype, {
							constructor: {
								value: r,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), It(r, t)
					})(t)
				}

				function It(t, e) {
					return (It = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var Ot = Math.pow(2, 17),
					Ct = function() {
						function t(t) {
							this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
						}
						var e = t.prototype;
						return e.destroy = function() {
							this.loader && (this.loader.destroy(), this.loader = null)
						}, e.abort = function() {
							this.loader && this.loader.abort()
						}, e.load = function(t, e) {
							var i = this,
								r = t.url;
							if (!r) return Promise.reject(new xt({
								type: o.b.NETWORK_ERROR,
								details: o.a.FRAG_LOAD_ERROR,
								fatal: !1,
								frag: t,
								networkDetails: null
							}, "Fragment does not have a " + (r ? "part list" : "url")));
							this.abort();
							var a = this.config,
								n = a.fLoader,
								s = a.loader;
							return new Promise((function(r, l) {
								i.loader && i.loader.destroy();
								var u = i.loader = t.loader = n ? new n(a) : new s(a),
									h = wt(t),
									d = {
										timeout: a.fragLoadingTimeOut,
										maxRetry: 0,
										retryDelay: 0,
										maxRetryDelay: a.fragLoadingMaxRetryTimeout,
										highWaterMark: "initSegment" === t.sn ? 1 / 0 : Ot
									};
								t.stats = u.stats, u.load(h, d, {
									onSuccess: function(e, a, n, s) {
										i.resetLoader(t, u), r({
											frag: t,
											part: null,
											payload: e.data,
											networkDetails: s
										})
									},
									onError: function(e, r, a) {
										i.resetLoader(t, u), l(new xt({
											type: o.b.NETWORK_ERROR,
											details: o.a.FRAG_LOAD_ERROR,
											fatal: !1,
											frag: t,
											response: e,
											networkDetails: a
										}))
									},
									onAbort: function(e, r, a) {
										i.resetLoader(t, u), l(new xt({
											type: o.b.NETWORK_ERROR,
											details: o.a.INTERNAL_ABORTED,
											fatal: !1,
											frag: t,
											networkDetails: a
										}))
									},
									onTimeout: function(e, r, a) {
										i.resetLoader(t, u), l(new xt({
											type: o.b.NETWORK_ERROR,
											details: o.a.FRAG_LOAD_TIMEOUT,
											fatal: !1,
											frag: t,
											networkDetails: a
										}))
									},
									onProgress: function(i, r, a, n) {
										e && e({
											frag: t,
											part: null,
											payload: a,
											networkDetails: n
										})
									}
								})
							}))
						}, e.loadPart = function(t, e, i) {
							var r = this;
							this.abort();
							var a = this.config,
								n = a.fLoader,
								s = a.loader;
							return new Promise((function(l, u) {
								r.loader && r.loader.destroy();
								var h = r.loader = t.loader = n ? new n(a) : new s(a),
									d = wt(t, e),
									c = {
										timeout: a.fragLoadingTimeOut,
										maxRetry: 0,
										retryDelay: 0,
										maxRetryDelay: a.fragLoadingMaxRetryTimeout,
										highWaterMark: Ot
									};
								e.stats = h.stats, h.load(d, c, {
									onSuccess: function(a, n, s, o) {
										r.resetLoader(t, h), r.updateStatsFromPart(t, e);
										var u = {
											frag: t,
											part: e,
											payload: a.data,
											networkDetails: o
										};
										i(u), l(u)
									},
									onError: function(i, a, n) {
										r.resetLoader(t, h), u(new xt({
											type: o.b.NETWORK_ERROR,
											details: o.a.FRAG_LOAD_ERROR,
											fatal: !1,
											frag: t,
											part: e,
											response: i,
											networkDetails: n
										}))
									},
									onAbort: function(i, a, n) {
										t.stats.aborted = e.stats.aborted, r.resetLoader(t, h), u(new xt({
											type: o.b.NETWORK_ERROR,
											details: o.a.INTERNAL_ABORTED,
											fatal: !1,
											frag: t,
											part: e,
											networkDetails: n
										}))
									},
									onTimeout: function(i, a, n) {
										r.resetLoader(t, h), u(new xt({
											type: o.b.NETWORK_ERROR,
											details: o.a.FRAG_LOAD_TIMEOUT,
											fatal: !1,
											frag: t,
											part: e,
											networkDetails: n
										}))
									}
								})
							}))
						}, e.updateStatsFromPart = function(t, e) {
							var i = t.stats,
								r = e.stats,
								a = r.total;
							if (i.loaded += r.loaded, a) {
								var n = Math.round(t.duration / e.duration),
									s = Math.min(Math.round(i.loaded / a), n),
									o = (n - s) * Math.round(i.loaded / s);
								i.total = i.loaded + o
							} else i.total = Math.max(i.loaded, i.total);
							var l = i.loading,
								u = r.loading;
							l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
						}, e.resetLoader = function(t, e) {
							t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
						}, t
					}();

				function wt(t, e) {
					void 0 === e && (e = null);
					var i = e || t,
						r = {
							frag: t,
							part: e,
							responseType: "arraybuffer",
							url: i.url,
							headers: {},
							rangeStart: 0,
							rangeEnd: 0
						},
						a = i.byteRangeStartOffset,
						s = i.byteRangeEndOffset;
					return Object(n.a)(a) && Object(n.a)(s) && (r.rangeStart = a, r.rangeEnd = s), r
				}
				var xt = function(t) {
						var e, i;

						function r(e) {
							for (var i, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
							return (i = t.call.apply(t, [this].concat(a)) || this).data = void 0, i.data = e, i
						}
						return i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, It(e, i), r
					}(_t(Error)),
					Pt = i(17),
					Ft = function(t) {
						for (var e = "", i = t.length, r = 0; r < i; r++) e += "[" + t.start(r).toFixed(3) + "," + t.end(r).toFixed(3) + "]";
						return e
					};

				function Mt(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function Nt(t, e) {
					return (Nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var Ut = "STOPPED",
					Bt = "IDLE",
					Gt = "KEY_LOADING",
					jt = "FRAG_LOADING",
					Kt = "FRAG_LOADING_WAITING_RETRY",
					Ht = "WAITING_TRACK",
					Vt = "PARSING",
					Wt = "PARSED",
					Yt = "ENDED",
					qt = "ERROR",
					zt = "WAITING_INIT_PTS",
					Xt = "WAITING_LEVEL",
					Qt = function(t) {
						var e, i;

						function r(e, i, r) {
							var a;
							return (a = t.call(this) || this).hls = void 0, a.fragPrevious = null, a.fragCurrent = null, a.fragmentTracker = void 0, a.transmuxer = null, a._state = Ut, a.media = void 0, a.mediaBuffer = void 0, a.config = void 0, a.bitrateTest = !1, a.lastCurrentTime = 0, a.nextLoadPosition = 0, a.startPosition = 0, a.loadedmetadata = !1, a.fragLoadError = 0, a.retryDate = 0, a.levels = null, a.fragmentLoader = void 0, a.levelLastLoaded = null, a.startFragRequested = !1, a.decrypter = void 0, a.initPTS = [], a.onvseeking = null, a.onvended = null, a.logPrefix = "", a.log = void 0, a.warn = void 0, a.logPrefix = r, a.log = l.b.log.bind(l.b, r + ":"), a.warn = l.b.warn.bind(l.b, r + ":"), a.hls = e, a.fragmentLoader = new Ct(e.config), a.fragmentTracker = i, a.config = e.config, a.decrypter = new Pt.a(e, e.config), e.on(s.a.KEY_LOADED, a.onKeyLoaded, function(t) {
								if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return t
							}(a)), a
						}
						i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, Nt(e, i);
						var a, h, d = r.prototype;
						return d.doTick = function() {
							this.onTickEnd()
						}, d.onTickEnd = function() {}, d.startLoad = function(t) {}, d.stopLoad = function() {
							this.fragmentLoader.abort();
							var t = this.fragCurrent;
							t && this.fragmentTracker.removeFragment(t), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Ut
						}, d._streamEnded = function(t, e) {
							var i = this.fragCurrent,
								r = this.fragmentTracker;
							if (!e.live && i && i.sn >= e.endSN && !t.nextStart) {
								var a = e.partList;
								if (null != a && a.length) {
									var n = a[a.length - 1];
									return mt.isBuffered(this.media, n.start + n.duration / 2)
								}
								var s = r.getState(i);
								return s === ut.PARTIAL || s === ut.OK
							}
							return !1
						}, d.onMediaAttached = function(t, e) {
							var i = this.media = this.mediaBuffer = e.media;
							this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), i.addEventListener("seeking", this.onvseeking), i.addEventListener("ended", this.onvended);
							var r = this.config;
							this.levels && r.autoStartLoad && this.state === Ut && this.startLoad(r.startPosition)
						}, d.onMediaDetaching = function() {
							var t = this.media;
							null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
						}, d.onMediaSeeking = function() {
							var t = this.config,
								e = this.fragCurrent,
								i = this.media,
								r = this.mediaBuffer,
								a = this.state,
								s = i ? i.currentTime : 0,
								o = mt.bufferInfo(r || i, s, t.maxBufferHole);
							if (this.log("media seeking to " + (Object(n.a)(s) ? s.toFixed(3) : s) + ", state: " + a), a === Yt) this.resetLoadingState();
							else if (e && !o.len) {
								var l = t.maxFragLookUpTolerance,
									u = e.start - l,
									h = s > e.start + e.duration + l;
								(s < u || h) && (h && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.loader.abort()), this.resetLoadingState())
							}
							i && (this.lastCurrentTime = s), this.loadedmetadata || o.len || (this.nextLoadPosition = this.startPosition = s), this.tickImmediate()
						}, d.onMediaEnded = function() {
							this.startPosition = this.lastCurrentTime = 0
						}, d.onKeyLoaded = function(t, e) {
							if (this.state === Gt && e.frag === this.fragCurrent && this.levels) {
								this.state = Bt;
								var i = this.levels[e.frag.level].details;
								i && this.loadFragment(e.frag, i, e.frag.start)
							}
						}, d.onHandlerDestroying = function() {
							this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
						}, d.onHandlerDestroyed = function() {
							this.state = Ut, this.hls.off(s.a.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
						}, d.loadKey = function(t, e) {
							this.log("Loading key for " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = Gt, this.fragCurrent = t, this.hls.trigger(s.a.KEY_LOADING, {
								frag: t
							})
						}, d.loadFragment = function(t, e, i) {
							this._loadFragForPlayback(t, e, i)
						}, d._loadFragForPlayback = function(t, e, i) {
							var r = this;
							this._doFragLoad(t, e, i, (function(e) {
								if (r.fragContextChanged(t)) return r.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), void r.fragmentTracker.removeFragment(t);
								t.stats.chunkCount++, r._handleFragmentLoadProgress(e)
							})).then((function(e) {
								if (e) {
									r.fragLoadError = 0;
									var i = r.state;
									r.fragContextChanged(t) ? (i === jt || !r.fragCurrent && i === Vt) && (r.fragmentTracker.removeFragment(t), r.state = Bt) : ("payload" in e && (r.log("Loaded fragment " + t.sn + " of level " + t.level), r.hls.trigger(s.a.FRAG_LOADED, e)), r._handleFragmentLoadComplete(e))
								}
							})).catch((function(e) {
								r.state !== Ut && (r.warn(e), r.resetFragmentLoading(t))
							}))
						}, d.flushMainBuffer = function(t, e, i) {
							if (void 0 === i && (i = null), t - e) {
								var r = {
									startOffset: t,
									endOffset: e,
									type: i
								};
								this.fragLoadError = 0, this.hls.trigger(s.a.BUFFER_FLUSHING, r)
							}
						}, d._loadInitSegment = function(t) {
							var e = this;
							this._doFragLoad(t).then((function(i) {
								if (!i || e.fragContextChanged(t) || !e.levels) throw new Error("init load aborted");
								return i
							})).then((function(i) {
								var r = e.hls,
									a = i.payload,
									n = t.decryptdata;
								if (a && a.byteLength > 0 && n && n.key && n.iv && "AES-128" === n.method) {
									var o = self.performance.now();
									return e.decrypter.webCryptoDecrypt(new Uint8Array(a), n.key.buffer, n.iv.buffer).then((function(e) {
										var a = self.performance.now();
										return r.trigger(s.a.FRAG_DECRYPTED, {
											frag: t,
											payload: e,
											stats: {
												tstart: o,
												tdecrypt: a
											}
										}), i.payload = e, i
									}))
								}
								return i
							})).then((function(i) {
								var r = e.fragCurrent,
									a = e.hls,
									n = e.levels;
								if (!n) throw new Error("init load aborted, missing levels");
								n[t.level].details;
								var o = t.stats;
								e.state = Bt, e.fragLoadError = 0, t.data = new Uint8Array(i.payload), o.parsing.start = o.buffering.start = self.performance.now(), o.parsing.end = o.buffering.end = self.performance.now(), i.frag === r && a.trigger(s.a.FRAG_BUFFERED, {
									stats: o,
									frag: r,
									part: null,
									id: t.type
								}), e.tick()
							})).catch((function(i) {
								e.warn(i), e.resetFragmentLoading(t)
							}))
						}, d.fragContextChanged = function(t) {
							var e = this.fragCurrent;
							return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
						}, d.fragBufferedComplete = function(t, e) {
							var i = this.mediaBuffer ? this.mediaBuffer : this.media;
							this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level + " " + Ft(mt.getBuffered(i))), this.state = Bt, this.tick()
						}, d._handleFragmentLoadComplete = function(t) {
							var e = this.transmuxer;
							if (e) {
								var i = t.frag,
									r = t.part,
									a = t.partsLoaded,
									n = !a || 0 === a.length || a.some((function(t) {
										return !t
									})),
									s = new yt(i.level, i.sn, i.stats.chunkCount + 1, 0, r ? r.index : -1, !n);
								e.flush(s)
							}
						}, d._handleFragmentLoadProgress = function(t) {}, d._doFragLoad = function(t, e, i, r) {
							var a = this;
							if (void 0 === i && (i = null), !this.levels) throw new Error("frag load aborted, missing levels");
							if (i = Math.max(t.start, i || 0), this.config.lowLatencyMode && e) {
								var o = e.partList;
								if (o && r) {
									i > t.end && e.fragmentHint && (t = e.fragmentHint);
									var l = this.getNextPart(o, t, i);
									if (l > -1) {
										var u = o[l];
										return this.log("Loading part sn: " + t.sn + " p: " + u.index + " cc: " + t.cc + " of playlist [" + e.startSN + "-" + e.endSN + "] parts [0-" + l + "-" + (o.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(i.toFixed(3))), this.nextLoadPosition = u.start + u.duration, this.state = jt, this.hls.trigger(s.a.FRAG_LOADING, {
											frag: t,
											part: o[l],
											targetBufferTime: i
										}), this.doFragPartsLoad(t, o, l, r).catch((function(t) {
											return a.handleFragLoadError(t)
										}))
									}
									if (!t.url || this.loadedEndOfParts(o, i)) return Promise.resolve(null)
								}
							}
							return this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(i.toFixed(3))), Object(n.a)(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = jt, this.hls.trigger(s.a.FRAG_LOADING, {
								frag: t,
								targetBufferTime: i
							}), this.fragmentLoader.load(t, r).catch((function(t) {
								return a.handleFragLoadError(t)
							}))
						}, d.doFragPartsLoad = function(t, e, i, r) {
							var a = this;
							return new Promise((function(n, o) {
								var l = [];
								! function i(u) {
									var h = e[u];
									a.fragmentLoader.loadPart(t, h, r).then((function(r) {
										l[h.index] = r;
										var o = r.part;
										a.hls.trigger(s.a.FRAG_LOADED, r);
										var d = e[u + 1];
										if (!d || d.fragment !== t) return n({
											frag: t,
											part: o,
											partsLoaded: l
										});
										i(u + 1)
									})).catch(o)
								}(i)
							}))
						}, d.handleFragLoadError = function(t) {
							var e = t.data;
							return e && e.details === o.a.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(s.a.ERROR, e), null
						}, d._handleTransmuxerFlush = function(t) {
							var e = this.getCurrentContext(t);
							if (e && this.state === Vt) {
								var i = e.frag,
									r = e.part,
									a = e.level,
									n = self.performance.now();
								i.stats.parsing.end = n, r && (r.stats.parsing.end = n), this.updateLevelTiming(i, r, a, t.partial)
							} else this.fragCurrent || (this.state = Bt)
						}, d.getCurrentContext = function(t) {
							var e = this.levels,
								i = t.level,
								r = t.sn,
								a = t.part;
							if (!e || !e[i]) return this.warn("Levels object was unset while buffering fragment " + r + " of level " + i + ". The current chunk will not be buffered."), null;
							var n = e[i],
								s = a > -1 ? function(t, e, i) {
									if (!t || !t.details) return null;
									var r = t.details.partList;
									if (r)
										for (var a = r.length; a--;) {
											var n = r[a];
											if (n.index === i && n.fragment.sn === e) return n
										}
									return null
								}(n, r, a) : null,
								o = s ? s.fragment : function(t, e, i) {
									if (!t || !t.details) return null;
									var r = t.details,
										a = r.fragments[e - r.startSN];
									return a || ((a = r.fragmentHint) && a.sn === e ? a : e < r.startSN && i && i.sn === e ? i : null)
								}(n, r, this.fragCurrent);
							return o ? {
								frag: o,
								part: s,
								level: n
							} : null
						}, d.bufferFragmentData = function(t, e, i, r) {
							if (t && this.state === Vt) {
								var a = t.data1,
									n = t.data2,
									o = a;
								if (a && n && (o = Object(u.b)(a, n)), o && o.length) {
									var l = {
										type: t.type,
										frag: e,
										part: i,
										chunkMeta: r,
										parent: e.type,
										data: o
									};
									this.hls.trigger(s.a.BUFFER_APPENDING, l), t.dropped && t.independent && !i && this.flushBufferGap(e)
								}
							}
						}, d.flushBufferGap = function(t) {
							var e = this.media;
							if (e)
								if (mt.isBuffered(e, e.currentTime)) {
									var i = e.currentTime,
										r = mt.bufferInfo(e, i, 0),
										a = t.duration,
										n = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * a),
										s = Math.max(Math.min(t.start - n, r.end - n), i + n);
									t.start - s > n && this.flushMainBuffer(s, t.start)
								} else this.flushMainBuffer(0, t.start)
						}, d.getFwdBufferInfo = function(t, e) {
							var i = this.config,
								r = this.getLoadPosition();
							if (!Object(n.a)(r)) return null;
							var a = mt.bufferInfo(t, r, i.maxBufferHole);
							if (0 === a.len && void 0 !== a.nextStart) {
								var s = this.fragmentTracker.getBufferedFrag(r, e);
								if (s && a.nextStart < s.end) return mt.bufferInfo(t, r, Math.max(a.nextStart, i.maxBufferHole))
							}
							return a
						}, d.getMaxBufferLength = function(t) {
							var e, i = this.config;
							return e = t ? Math.max(8 * i.maxBufferSize / t, i.maxBufferLength) : i.maxBufferLength, Math.min(e, i.maxMaxBufferLength)
						}, d.reduceMaxBufferLength = function(t) {
							var e = this.config,
								i = t || e.maxBufferLength;
							return e.maxMaxBufferLength >= i && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
						}, d.getNextFragment = function(t, e) {
							var i = e.fragments,
								r = i.length;
							if (!r) return null;
							var a, n = this.config,
								s = i[0].start;
							if (e.live) {
								var o = n.initialLiveManifestSize;
								if (r < o) return this.warn("Not enough fragments to start playback (have: " + r + ", need: " + o + ")"), null;
								e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (a = this.getInitialLiveFragment(e, i), this.startPosition = a ? this.hls.liveSyncPosition || a.start : t)
							} else t <= s && (a = i[0]);
							if (!a) {
								var l = n.lowLatencyMode ? e.partEnd : e.fragmentEnd;
								a = this.getFragmentAtPosition(t, l, e)
							}
							return this.mapToInitFragWhenRequired(a)
						}, d.mapToInitFragWhenRequired = function(t) {
							return null == t || !t.initSegment || null != t && t.initSegment.data || this.bitrateTest ? t : t.initSegment
						}, d.getNextPart = function(t, e, i) {
							for (var r = -1, a = !1, n = !0, s = 0, o = t.length; s < o; s++) {
								var l = t[s];
								if (n = n && !l.independent, r > -1 && i < l.start) break;
								var u = l.loaded;
								!u && (a || l.independent || n) && l.fragment === e && (r = s), a = u
							}
							return r
						}, d.loadedEndOfParts = function(t, e) {
							var i = t[t.length - 1];
							return i && e > i.start && i.loaded
						}, d.getInitialLiveFragment = function(t, e) {
							var i = this.fragPrevious,
								r = null;
							if (i) {
								if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), r = function(t, e, i) {
										if (null === e || !Array.isArray(t) || !t.length || !Object(n.a)(e)) return null;
										if (e < (t[0].programDateTime || 0)) return null;
										if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
										i = i || 0;
										for (var r = 0; r < t.length; ++r) {
											var a = t[r];
											if (kt(e, i, a)) return a
										}
										return null
									}(e, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !r) {
									var a = i.sn + 1;
									if (a >= t.startSN && a <= t.endSN) {
										var s = e[a - t.startSN];
										i.cc === s.cc && (r = s, this.log("Live playlist, switching playlist, load frag with next SN: " + r.sn))
									}
									r || (r = function(t, e) {
										return At.search(t, (function(t) {
											return t.cc < e ? 1 : t.cc > e ? -1 : 0
										}))
									}(e, i.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + r.sn)
								}
							} else {
								var o = this.hls.liveSyncPosition;
								null !== o && (r = this.getFragmentAtPosition(o, this.bitrateTest ? t.fragmentEnd : t.edge, t))
							}
							return r
						}, d.getFragmentAtPosition = function(t, e, i) {
							var r, a = this.config,
								n = this.fragPrevious,
								s = i.fragments,
								o = i.endSN,
								l = i.fragmentHint,
								u = a.maxFragLookUpTolerance,
								h = !!(a.lowLatencyMode && i.partList && l);
							if (h && l && !this.bitrateTest && (s = s.concat(l), o = l.sn), r = t < e ? Dt(n, s, t, t > e - u ? 0 : u) : s[s.length - 1]) {
								var d = r.sn - i.startSN,
									c = n && r.level === n.level,
									f = s[d + 1];
								n && r.sn === n.sn && !h && c && (r.sn < o && this.fragmentTracker.getState(f) !== ut.OK ? (this.log("SN " + r.sn + " just loaded, load next one: " + f.sn), r = f) : r = null)
							}
							return r
						}, d.synchronizeToLiveEdge = function(t) {
							var e = this.config,
								i = this.media;
							if (i) {
								var r = this.hls.liveSyncPosition,
									a = i.currentTime,
									n = t.fragments[0].start,
									s = t.edge,
									o = a >= n - e.maxFragLookUpTolerance && a <= s;
								if (null !== r && i.duration > r && (a < r || !o)) {
									var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
									(!o && i.readyState < 4 || a < s - l) && (this.loadedmetadata || (this.nextLoadPosition = r), i.readyState && (this.warn("Playback: " + a.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + r.toFixed(3)), i.currentTime = r))
								}
							}
						}, d.alignPlaylists = function(t, e) {
							var i = this.levels,
								r = this.levelLastLoaded,
								a = this.fragPrevious,
								s = null !== r ? i[r] : null,
								o = t.fragments.length;
							if (!o) return this.warn("No fragments in live playlist"), 0;
							var l = t.fragments[0].start,
								u = !e,
								h = t.alignedSliding && Object(n.a)(l);
							if (u || !h && !l) {
								Et(a, s, t);
								var d = t.fragments[0].start;
								return this.log("Live playlist sliding: " + d.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (a ? a.sn : "na") + " fragments: " + o), d
							}
							return l
						}, d.waitForCdnTuneIn = function(t) {
							return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
						}, d.setStartPosition = function(t, e) {
							var i = this.startPosition;
							if (i < e && (i = -1), -1 === i || -1 === this.lastCurrentTime) {
								var r = t.startTimeOffset;
								Object(n.a)(r) ? (i = e + r, r < 0 && (i += t.totalduration), i = Math.min(Math.max(e, i), e + t.totalduration), this.log("Start time offset " + r + " found in playlist, adjust startPosition to " + i), this.startPosition = i) : t.live ? i = this.hls.liveSyncPosition || e : this.startPosition = i = 0, this.lastCurrentTime = i
							}
							this.nextLoadPosition = i
						}, d.getLoadPosition = function() {
							var t = this.media,
								e = 0;
							return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
						}, d.handleFragLoadAborted = function(t, e) {
							this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part" + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
						}, d.resetFragmentLoading = function(t) {
							this.fragCurrent && this.fragContextChanged(t) || (this.state = Bt)
						}, d.onFragmentOrKeyLoadError = function(t, e) {
							if (!e.fatal) {
								var i = e.frag;
								if (i && i.type === t) {
									this.fragCurrent;
									var r = this.config;
									if (this.fragLoadError + 1 <= r.fragLoadingMaxRetry) {
										if (this.resetLiveStartWhenNotLoaded(i.level)) return;
										var a = Math.min(Math.pow(2, this.fragLoadError) * r.fragLoadingRetryDelay, r.fragLoadingMaxRetryTimeout);
										this.warn("Fragment " + i.sn + " of " + t + " " + i.level + " failed to load, retrying in " + a + "ms"), this.retryDate = self.performance.now() + a, this.fragLoadError++, this.state = Kt
									} else e.levelRetry ? (t === w.b.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = Bt) : (l.b.error(e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.stopLoad(), this.state = qt)
								}
							}
						}, d.afterBufferFlushed = function(t, e, i) {
							if (t) {
								var r = mt.getBuffered(t);
								this.fragmentTracker.detectEvictedFragments(e, r, i), this.state === Yt && this.resetLoadingState()
							}
						}, d.resetLoadingState = function() {
							this.fragCurrent = null, this.fragPrevious = null, this.state = Bt
						}, d.resetLiveStartWhenNotLoaded = function(t) {
							if (!this.loadedmetadata) {
								this.startFragRequested = !1;
								var e = this.levels ? this.levels[t].details : null;
								if (null != e && e.live) return this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState(), !0;
								this.nextLoadPosition = this.startPosition
							}
							return !1
						}, d.updateLevelTiming = function(t, e, i, r) {
							var a = this,
								n = i.details;
							Object.keys(t.elementaryStreams).reduce((function(e, o) {
								var l = t.elementaryStreams[o];
								if (l) {
									var u = l.endPTS - l.startPTS;
									if (u <= 0) return a.warn("Could not parse fragment " + t.sn + " " + o + " duration reliably (" + u + ")"), e || !1;
									var h = r ? 0 : et(n, t, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
									return a.hls.trigger(s.a.LEVEL_PTS_UPDATED, {
										details: n,
										level: i,
										drift: h,
										type: o,
										frag: t,
										start: l.startPTS,
										end: l.endPTS
									}), !0
								}
								return e
							}), !1) || (this.warn("Found no media in fragment " + t.sn + " of level " + i.id + " resetting transmuxer to fallback to playlist timing"), this.resetTransmuxer()), this.state = Wt, this.hls.trigger(s.a.FRAG_PARSED, {
								frag: t,
								part: e
							})
						}, d.resetTransmuxer = function() {
							this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
						}, a = r, (h = [{
							key: "state",
							get: function() {
								return this._state
							},
							set: function(t) {
								var e = this._state;
								e !== t && (this._state = t, this.log(e + "->" + t))
							}
						}]) && Mt(a.prototype, h), Object.defineProperty(a, "prototype", {
							writable: !1
						}), r
					}(vt);

				function $t() {
					return self.MediaSource || self.WebKitMediaSource
				}

				function Jt() {
					return self.SourceBuffer || self.WebKitSourceBuffer
				}
				var Zt = i(19),
					te = i(11),
					ee = i(16),
					ie = $t() || {
						isTypeSupported: function() {
							return !1
						}
					},
					re = function() {
						function t(t, e, i, r) {
							var a = this;
							this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = t, this.id = e, this.onTransmuxComplete = i, this.onFlush = r;
							var n = t.config,
								u = function(e, i) {
									(i = i || {}).frag = a.frag, i.id = a.id, t.trigger(e, i)
								};
							this.observer = new ee.EventEmitter, this.observer.on(s.a.FRAG_DECRYPTED, u), this.observer.on(s.a.ERROR, u);
							var h = {
									mp4: ie.isTypeSupported("video/mp4"),
									mpeg: ie.isTypeSupported("audio/mpeg"),
									mp3: ie.isTypeSupported('audio/mp4; codecs="mp3"')
								},
								d = navigator.vendor;
							if (n.enableWorker && "undefined" != typeof Worker) {
								var c;
								l.b.log("demuxing in webworker");
								try {
									c = this.worker = Zt(20), this.onwmsg = this.onWorkerMessage.bind(this), c.addEventListener("message", this.onwmsg), c.onerror = function(e) {
										t.trigger(s.a.ERROR, {
											type: o.b.OTHER_ERROR,
											details: o.a.INTERNAL_EXCEPTION,
											fatal: !0,
											event: "demuxerWorker",
											error: new Error(e.message + "  (" + e.filename + ":" + e.lineno + ")")
										})
									}, c.postMessage({
										cmd: "init",
										typeSupported: h,
										vendor: d,
										id: e,
										config: JSON.stringify(n)
									})
								} catch (t) {
									l.b.warn("Error in worker:", t), l.b.error("Error while initializing DemuxerWorker, fallback to inline"), c && self.URL.revokeObjectURL(c.objectURL), this.transmuxer = new te.c(this.observer, h, n, d, e), this.worker = null
								}
							} else this.transmuxer = new te.c(this.observer, h, n, d, e)
						}
						var e = t.prototype;
						return e.destroy = function() {
							var t = this.worker;
							if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.worker = null, this.onwmsg = void 0;
							else {
								var e = this.transmuxer;
								e && (e.destroy(), this.transmuxer = null)
							}
							var i = this.observer;
							i && i.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
						}, e.push = function(t, e, i, r, a, n, s, o, u, h) {
							var d, c, f = this;
							u.transmuxing.start = self.performance.now();
							var g = this.transmuxer,
								v = this.worker,
								p = n ? n.start : a.start,
								m = a.decryptdata,
								y = this.frag,
								T = !(y && a.cc === y.cc),
								b = !(y && u.level === y.level),
								E = y ? u.sn - y.sn : -1,
								S = this.part ? u.part - this.part.index : -1,
								L = 0 === E && u.id > 1 && u.id === (null == y ? void 0 : y.stats.chunkCount),
								A = !b && (1 === E || 0 === E && (1 === S || L && S <= 0)),
								D = self.performance.now();
							(b || E || 0 === a.stats.parsing.start) && (a.stats.parsing.start = D), !n || !S && A || (n.stats.parsing.start = D);
							var R = !(y && (null === (d = a.initSegment) || void 0 === d ? void 0 : d.url) === (null === (c = y.initSegment) || void 0 === c ? void 0 : c.url)),
								k = new te.b(T, A, o, b, p, R);
							if (!A || T || R) {
								l.b.log("[transmuxer-interface, " + a.type + "]: Starting new transmux session for sn: " + u.sn + " p: " + u.part + " level: " + u.level + " id: " + u.id + "\n        discontinuity: " + T + "\n        trackSwitch: " + b + "\n        contiguous: " + A + "\n        accurateTimeOffset: " + o + "\n        timeOffset: " + p + "\n        initSegmentChange: " + R);
								var _ = new te.a(i, r, e, s, h);
								this.configureTransmuxer(_)
							}
							if (this.frag = a, this.part = n, v) v.postMessage({
								cmd: "demux",
								data: t,
								decryptdata: m,
								chunkMeta: u,
								state: k
							}, t instanceof ArrayBuffer ? [t] : []);
							else if (g) {
								var I = g.push(t, m, u, k);
								Object(te.d)(I) ? I.then((function(t) {
									f.handleTransmuxComplete(t)
								})) : this.handleTransmuxComplete(I)
							}
						}, e.flush = function(t) {
							var e = this;
							t.transmuxing.start = self.performance.now();
							var i = this.transmuxer,
								r = this.worker;
							if (r) r.postMessage({
								cmd: "flush",
								chunkMeta: t
							});
							else if (i) {
								var a = i.flush(t);
								Object(te.d)(a) ? a.then((function(i) {
									e.handleFlushResult(i, t)
								})) : this.handleFlushResult(a, t)
							}
						}, e.handleFlushResult = function(t, e) {
							var i = this;
							t.forEach((function(t) {
								i.handleTransmuxComplete(t)
							})), this.onFlush(e)
						}, e.onWorkerMessage = function(t) {
							var e = t.data,
								i = this.hls;
							switch (e.event) {
								case "init":
									self.URL.revokeObjectURL(this.worker.objectURL);
									break;
								case "transmuxComplete":
									this.handleTransmuxComplete(e.data);
									break;
								case "flush":
									this.onFlush(e.data);
									break;
								case "workerLog":
									l.b[e.data.logType] && l.b[e.data.logType](e.data.message);
									break;
								default:
									e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, i.trigger(e.event, e.data)
							}
						}, e.configureTransmuxer = function(t) {
							var e = this.worker,
								i = this.transmuxer;
							e ? e.postMessage({
								cmd: "configure",
								config: t
							}) : i && i.configure(t)
						}, e.handleTransmuxComplete = function(t) {
							t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
						}, t
					}(),
					ae = function() {
						function t(t, e, i, r) {
							this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = i, this.hls = r
						}
						var e = t.prototype;
						return e.destroy = function() {
							this.media = null, this.hls = this.fragmentTracker = null
						}, e.poll = function(t, e) {
							var i = this.config,
								r = this.media,
								a = this.stalled;
							if (null !== r) {
								var n = r.currentTime,
									s = r.seeking,
									o = this.seeking && !s,
									u = !this.seeking && s;
								if (this.seeking = s, n === t) {
									if ((u || o) && (this.stalled = null), !(r.paused && !s || r.ended || 0 === r.playbackRate) && mt.getBuffered(r).length) {
										var h = mt.bufferInfo(r, n, 0),
											d = h.len > 0,
											c = h.nextStart || 0;
										if (d || c) {
											if (s) {
												var f = h.len > 2,
													g = !c || e && e.start <= n || c - n > 2 && !this.fragmentTracker.getPartialFragment(n);
												if (f || g) return;
												this.moved = !1
											}
											if (!this.moved && null !== this.stalled) {
												var v, p = Math.max(c, h.start || 0) - n,
													m = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
													y = (null == m || null === (v = m.details) || void 0 === v ? void 0 : v.live) ? 2 * m.details.targetduration : 2;
												if (p > 0 && p <= y) return void this._trySkipBufferHole(null)
											}
											var T = self.performance.now();
											if (null !== a) {
												var b = T - a;
												if (s || !(b >= 250) || (this._reportStall(h), this.media)) {
													var E = mt.bufferInfo(r, n, i.maxBufferHole);
													this._tryFixBufferStall(E, b)
												}
											} else this.stalled = T
										}
									}
								} else if (this.moved = !0, null !== a) {
									if (this.stallReported) {
										var S = self.performance.now() - a;
										l.b.warn("playback not stuck anymore @" + n + ", after " + Math.round(S) + "ms"), this.stallReported = !1
									}
									this.stalled = null, this.nudgeRetry = 0
								}
							}
						}, e._tryFixBufferStall = function(t, e) {
							var i = this.config,
								r = this.fragmentTracker,
								a = this.media;
							if (null !== a) {
								var n = a.currentTime,
									s = r.getPartialFragment(n);
								if (s && (this._trySkipBufferHole(s) || !this.media)) return;
								t.len > i.maxBufferHole && e > 1e3 * i.highBufferWatchdogPeriod && (l.b.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
							}
						}, e._reportStall = function(t) {
							var e = this.hls,
								i = this.media;
							!this.stallReported && i && (this.stallReported = !0, l.b.warn("Playback stalling at @" + i.currentTime + " due to low buffer (" + JSON.stringify(t) + ")"), e.trigger(s.a.ERROR, {
								type: o.b.MEDIA_ERROR,
								details: o.a.BUFFER_STALLED_ERROR,
								fatal: !1,
								buffer: t.len
							}))
						}, e._trySkipBufferHole = function(t) {
							var e = this.config,
								i = this.hls,
								r = this.media;
							if (null === r) return 0;
							for (var a = r.currentTime, n = 0, u = mt.getBuffered(r), h = 0; h < u.length; h++) {
								var d = u.start(h);
								if (a + e.maxBufferHole >= n && a < d) {
									var c = Math.max(d + .05, r.currentTime + .1);
									return l.b.warn("skipping hole, adjusting currentTime from " + a + " to " + c), this.moved = !0, this.stalled = null, r.currentTime = c, t && i.trigger(s.a.ERROR, {
										type: o.b.MEDIA_ERROR,
										details: o.a.BUFFER_SEEK_OVER_HOLE,
										fatal: !1,
										reason: "fragment loaded with buffer holes, seeking from " + a + " to " + c,
										frag: t
									}), c
								}
								n = u.end(h)
							}
							return 0
						}, e._tryNudgeBuffer = function() {
							var t = this.config,
								e = this.hls,
								i = this.media,
								r = this.nudgeRetry;
							if (null !== i) {
								var a = i.currentTime;
								if (this.nudgeRetry++, r < t.nudgeMaxRetry) {
									var n = a + (r + 1) * t.nudgeOffset;
									l.b.warn("Nudging 'currentTime' from " + a + " to " + n), i.currentTime = n, e.trigger(s.a.ERROR, {
										type: o.b.MEDIA_ERROR,
										details: o.a.BUFFER_NUDGE_ON_STALL,
										fatal: !1
									})
								} else l.b.error("Playhead still not moving while enough data buffered @" + a + " after " + t.nudgeMaxRetry + " nudges"), e.trigger(s.a.ERROR, {
									type: o.b.MEDIA_ERROR,
									details: o.a.BUFFER_STALLED_ERROR,
									fatal: !0
								})
							}
						}, t
					}();

				function ne(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function se(t, e) {
					return (se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var oe = function(t) {
						var e, i;

						function r(e, i) {
							var r;
							return (r = t.call(this, e, i, "[stream-controller]") || this).audioCodecSwap = !1, r.gapController = null, r.level = -1, r._forceStartLoad = !1, r.altAudio = !1, r.audioOnly = !1, r.fragPlaying = null, r.onvplaying = null, r.onvseeked = null, r.fragLastKbps = 0, r.couldBacktrack = !1, r.backtrackFragment = null, r.audioCodecSwitch = !1, r.videoBuffer = null, r._registerListeners(), r
						}
						i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, se(e, i);
						var a, l, u = r.prototype;
						return u._registerListeners = function() {
							var t = this.hls;
							t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(s.a.ERROR, this.onError, this), t.on(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
						}, u._unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(s.a.ERROR, this.onError, this), t.off(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.a.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
						}, u.onHandlerDestroying = function() {
							this._unregisterListeners(), this.onMediaDetaching()
						}, u.startLoad = function(t) {
							if (this.levels) {
								var e = this.lastCurrentTime,
									i = this.hls;
								if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
									var r = i.startLevel; - 1 === r && (i.config.testBandwidth ? (r = 0, this.bitrateTest = !0) : r = i.nextAutoLevel), this.level = i.nextLoadLevel = r, this.loadedmetadata = !1
								}
								e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = Bt, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
							} else this._forceStartLoad = !0, this.state = Ut
						}, u.stopLoad = function() {
							this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
						}, u.doTick = function() {
							switch (this.state) {
								case Bt:
									this.doTickIdle();
									break;
								case Xt:
									var t, e = this.levels,
										i = this.level,
										r = null == e || null === (t = e[i]) || void 0 === t ? void 0 : t.details;
									if (r && (!r.live || this.levelLastLoaded === this.level)) {
										if (this.waitForCdnTuneIn(r)) break;
										this.state = Bt;
										break
									}
									break;
								case Kt:
									var a, n = self.performance.now(),
										s = this.retryDate;
									(!s || n >= s || null !== (a = this.media) && void 0 !== a && a.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = Bt)
							}
							this.onTickEnd()
						}, u.onTickEnd = function() {
							t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
						}, u.doTickIdle = function() {
							var t, e, i = this.hls,
								r = this.levelLastLoaded,
								a = this.levels,
								n = this.media,
								o = i.config,
								l = i.nextLoadLevel;
							if (null !== r && (n || !this.startFragRequested && o.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && a && a[l]) {
								var u = a[l];
								this.level = i.nextLoadLevel = l;
								var h = u.details;
								if (!h || this.state === Xt || h.live && this.levelLastLoaded !== l) this.state = Xt;
								else {
									var d = this.getMainFwdBufferInfo();
									if (null !== d && !(d.len >= this.getMaxBufferLength(u.maxBitrate))) {
										if (this._streamEnded(d, h)) {
											var c = {};
											return this.altAudio && (c.type = "video"), this.hls.trigger(s.a.BUFFER_EOS, c), void(this.state = Yt)
										}
										this.backtrackFragment && this.backtrackFragment.start > d.end && (this.backtrackFragment = null);
										var f = this.backtrackFragment ? this.backtrackFragment.start : d.end,
											g = this.getNextFragment(f, h);
										if (this.couldBacktrack && !this.fragPrevious && g && "initSegment" !== g.sn && this.fragmentTracker.getState(g) !== ut.OK) {
											var v, m = (null != (v = this.backtrackFragment) ? v : g).sn - h.startSN,
												y = h.fragments[m - 1];
											y && g.cc === y.cc && (g = y, this.fragmentTracker.removeFragment(y))
										} else this.backtrackFragment && d.len && (this.backtrackFragment = null);
										if (g && this.fragmentTracker.getState(g) === ut.OK && this.nextLoadPosition > f) {
											var T = this.audioOnly && !this.altAudio ? p.a.AUDIO : p.a.VIDEO;
											this.afterBufferFlushed(n, T, w.b.MAIN), g = this.getNextFragment(this.nextLoadPosition, h)
										}
										g && (!g.initSegment || g.initSegment.data || this.bitrateTest || (g = g.initSegment), "identity" !== (null === (t = g.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = g.decryptdata) && void 0 !== e && e.key ? this.loadFragment(g, h, f) : this.loadKey(g, h))
									}
								}
							}
						}, u.loadFragment = function(e, i, r) {
							var a, n = this.fragmentTracker.getState(e);
							this.fragCurrent = e, n === ut.NOT_LOADED || n === ut.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (e.bitrateTest = !0, this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, i, r)) : n === ut.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : 0 === (null === (a = this.media) || void 0 === a ? void 0 : a.buffered.length) && this.fragmentTracker.removeAllFragments()
						}, u.getAppendedFrag = function(t) {
							var e = this.fragmentTracker.getAppendedFrag(t, w.b.MAIN);
							return e && "fragment" in e ? e.fragment : e
						}, u.getBufferedFrag = function(t) {
							return this.fragmentTracker.getBufferedFrag(t, w.b.MAIN)
						}, u.followingBufferedFrag = function(t) {
							return t ? this.getBufferedFrag(t.end + .5) : null
						}, u.immediateLevelSwitch = function() {
							this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
						}, u.nextLevelSwitch = function() {
							var t = this.levels,
								e = this.media;
							if (null != e && e.readyState) {
								var i, r = this.getAppendedFrag(e.currentTime);
								if (r && r.start > 1 && this.flushMainBuffer(0, r.start - 1), !e.paused && t) {
									var a = t[this.hls.nextLoadLevel],
										n = this.fragLastKbps;
									i = n && this.fragCurrent ? this.fragCurrent.duration * a.maxBitrate / (1e3 * n) + 1 : 0
								} else i = 0;
								var s = this.getBufferedFrag(e.currentTime + i);
								if (s) {
									var o = this.followingBufferedFrag(s);
									if (o) {
										this.abortCurrentFrag();
										var l = o.maxStartPTS ? o.maxStartPTS : o.start,
											u = o.duration,
											h = Math.max(s.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, .5 * u), .75 * u));
										this.flushMainBuffer(h, Number.POSITIVE_INFINITY)
									}
								}
							}
						}, u.abortCurrentFrag = function() {
							var t = this.fragCurrent;
							switch (this.fragCurrent = null, this.backtrackFragment = null, null != t && t.loader && t.loader.abort(), this.state) {
								case Gt:
								case jt:
								case Kt:
								case Vt:
								case Wt:
									this.state = Bt
							}
							this.nextLoadPosition = this.getLoadPosition()
						}, u.flushMainBuffer = function(e, i) {
							t.prototype.flushMainBuffer.call(this, e, i, this.altAudio ? "video" : null)
						}, u.onMediaAttached = function(e, i) {
							t.prototype.onMediaAttached.call(this, e, i);
							var r = i.media;
							this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), r.addEventListener("playing", this.onvplaying), r.addEventListener("seeked", this.onvseeked), this.gapController = new ae(this.config, r, this.fragmentTracker, this.hls)
						}, u.onMediaDetaching = function() {
							var e = this.media;
							e && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t.prototype.onMediaDetaching.call(this)
						}, u.onMediaPlaying = function() {
							this.tick()
						}, u.onMediaSeeked = function() {
							var t = this.media,
								e = t ? t.currentTime : null;
							Object(n.a)(e) && this.log("Media seeked to " + e.toFixed(3)), this.tick()
						}, u.onManifestLoading = function() {
							this.log("Trigger BUFFER_RESET"), this.hls.trigger(s.a.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null, this.backtrackFragment = null
						}, u.onManifestParsed = function(t, e) {
							var i, r, a, n = !1,
								s = !1;
							e.levels.forEach((function(t) {
								(i = t.audioCodec) && (-1 !== i.indexOf("mp4a.40.2") && (n = !0), -1 !== i.indexOf("mp4a.40.5") && (s = !0))
							})), this.audioCodecSwitch = n && s && !("function" == typeof(null == (a = Jt()) || null === (r = a.prototype) || void 0 === r ? void 0 : r.changeType)), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
						}, u.onLevelLoading = function(t, e) {
							var i = this.levels;
							if (i && this.state === Bt) {
								var r = i[e.level];
								(!r.details || r.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(r.details)) && (this.state = Xt)
							}
						}, u.onLevelLoaded = function(t, e) {
							var i, r = this.levels,
								a = e.level,
								n = e.details,
								o = n.totalduration;
							if (r) {
								this.log("Level " + a + " loaded [" + n.startSN + "," + n.endSN + "], cc [" + n.startCC + ", " + n.endCC + "] duration:" + o);
								var l = this.fragCurrent;
								!l || this.state !== jt && this.state !== Kt || l.level !== e.level && l.loader && (this.state = Bt, this.backtrackFragment = null, l.loader.abort());
								var u = r[a],
									h = 0;
								if (n.live || null !== (i = u.details) && void 0 !== i && i.live) {
									if (n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed) return;
									h = this.alignPlaylists(n, u.details)
								}
								if (u.details = n, this.levelLastLoaded = a, this.hls.trigger(s.a.LEVEL_UPDATED, {
										details: n,
										level: a
									}), this.state === Xt) {
									if (this.waitForCdnTuneIn(n)) return;
									this.state = Bt
								}
								this.startFragRequested ? n.live && this.synchronizeToLiveEdge(n) : this.setStartPosition(n, h), this.tick()
							} else this.warn("Levels were reset while loading level " + a)
						}, u._handleFragmentLoadProgress = function(t) {
							var e, i = t.frag,
								r = t.part,
								a = t.payload,
								n = this.levels;
							if (n) {
								var s = n[i.level],
									o = s.details;
								if (o) {
									var l = s.videoCodec,
										u = o.PTSKnown || !o.live,
										h = null === (e = i.initSegment) || void 0 === e ? void 0 : e.data,
										d = this._getAudioCodec(s),
										c = this.transmuxer = this.transmuxer || new re(this.hls, w.b.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
										f = r ? r.index : -1,
										g = -1 !== f,
										v = new yt(i.level, i.sn, i.stats.chunkCount, a.byteLength, f, g),
										p = this.initPTS[i.cc];
									c.push(a, h, d, l, i, r, o.totalduration, u, v, p)
								} else this.warn("Dropping fragment " + i.sn + " of level " + i.level + " after level details were reset")
							} else this.warn("Levels were reset while fragment load was in progress. Fragment " + i.sn + " of level " + i.level + " will not be buffered")
						}, u.onAudioTrackSwitching = function(t, e) {
							var i = this.altAudio,
								r = !!e.url,
								a = e.id;
							if (!r) {
								if (this.mediaBuffer !== this.media) {
									this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
									var n = this.fragCurrent;
									null != n && n.loader && (this.log("Switching to main audio track, cancel main fragment load"), n.loader.abort()), this.resetTransmuxer(), this.resetLoadingState()
								} else this.audioOnly && this.resetTransmuxer();
								var o = this.hls;
								i && o.trigger(s.a.BUFFER_FLUSHING, {
									startOffset: 0,
									endOffset: Number.POSITIVE_INFINITY,
									type: "audio"
								}), o.trigger(s.a.AUDIO_TRACK_SWITCHED, {
									id: a
								})
							}
						}, u.onAudioTrackSwitched = function(t, e) {
							var i = e.id,
								r = !!this.hls.audioTracks[i].url;
							if (r) {
								var a = this.videoBuffer;
								a && this.mediaBuffer !== a && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = a)
							}
							this.altAudio = r, this.tick()
						}, u.onBufferCreated = function(t, e) {
							var i, r, a = e.tracks,
								n = !1;
							for (var s in a) {
								var o = a[s];
								if ("main" === o.id) {
									if (r = s, i = o, "video" === s) {
										var l = a[s];
										l && (this.videoBuffer = l.buffer)
									}
								} else n = !0
							}
							n && i ? (this.log("Alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
						}, u.onFragBuffered = function(t, e) {
							var i = e.frag,
								r = e.part;
							if (!i || i.type === w.b.MAIN) {
								if (this.fragContextChanged(i)) return this.warn("Fragment " + i.sn + (r ? " p: " + r.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state), void(this.state === Wt && (this.state = Bt));
								var a = r ? r.stats : i.stats;
								this.fragLastKbps = Math.round(8 * a.total / (a.buffering.end - a.loading.first)), "initSegment" !== i.sn && (this.fragPrevious = i), this.fragBufferedComplete(i, r)
							}
						}, u.onError = function(t, e) {
							switch (e.details) {
								case o.a.FRAG_LOAD_ERROR:
								case o.a.FRAG_LOAD_TIMEOUT:
								case o.a.KEY_LOAD_ERROR:
								case o.a.KEY_LOAD_TIMEOUT:
									this.onFragmentOrKeyLoadError(w.b.MAIN, e);
									break;
								case o.a.LEVEL_LOAD_ERROR:
								case o.a.LEVEL_LOAD_TIMEOUT:
									this.state !== qt && (e.fatal ? (this.warn("" + e.details), this.state = qt) : e.levelRetry || this.state !== Xt || (this.state = Bt));
									break;
								case o.a.BUFFER_FULL_ERROR:
									if ("main" === e.parent && (this.state === Vt || this.state === Wt)) {
										var i = !0,
											r = this.getFwdBufferInfo(this.media, w.b.MAIN);
										r && r.len > .5 && (i = !this.reduceMaxBufferLength(r.len)), i && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState()
									}
							}
						}, u.checkBuffer = function() {
							var t = this.media,
								e = this.gapController;
							if (t && e && t.readyState) {
								var i = mt.getBuffered(t);
								if (!this.loadedmetadata && i.length) this.loadedmetadata = !0, this.seekToStartPos();
								else {
									var r = this.state !== Bt ? this.fragCurrent : null;
									e.poll(this.lastCurrentTime, r)
								}
								this.lastCurrentTime = t.currentTime
							}
						}, u.onFragLoadEmergencyAborted = function() {
							this.state = Bt, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
						}, u.onBufferFlushed = function(t, e) {
							var i = e.type;
							if (i !== p.a.AUDIO || this.audioOnly && !this.altAudio) {
								var r = (i === p.a.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
								this.afterBufferFlushed(r, i, w.b.MAIN)
							}
						}, u.onLevelsUpdated = function(t, e) {
							this.levels = e.levels
						}, u.swapAudioCodec = function() {
							this.audioCodecSwap = !this.audioCodecSwap
						}, u.seekToStartPos = function() {
							var t = this.media,
								e = t.currentTime,
								i = this.startPosition;
							if (i >= 0 && e < i) {
								if (t.seeking) return void this.log("could not seek to " + i + ", already seeking at " + e);
								var r = mt.getBuffered(t),
									a = (r.length ? r.start(0) : 0) - i;
								a > 0 && (a < this.config.maxBufferHole || a < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + a + " to match buffer start"), i += a, this.startPosition = i), this.log("seek to target start position " + i + " from current time " + e), t.currentTime = i
							}
						}, u._getAudioCodec = function(t) {
							var e = this.config.defaultAudioCodec || t.audioCodec;
							return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
						}, u._loadBitrateTestFrag = function(t) {
							var e = this;
							this._doFragLoad(t).then((function(i) {
								var r = e.hls;
								if (i && !r.nextLoadLevel && !e.fragContextChanged(t)) {
									e.fragLoadError = 0, e.state = Bt, e.startFragRequested = !1, e.bitrateTest = !1;
									var a = t.stats;
									a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), r.trigger(s.a.FRAG_LOADED, i)
								}
							}))
						}, u._handleTransmuxComplete = function(t) {
							var e, i = "main",
								r = this.hls,
								a = t.remuxResult,
								o = t.chunkMeta,
								l = this.getCurrentContext(o);
							if (!l) return this.warn("The loading context changed while buffering fragment " + o.sn + " of level " + o.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(o.level);
							var u = l.frag,
								h = l.part,
								d = l.level,
								c = a.video,
								f = a.text,
								g = a.id3,
								v = a.initSegment,
								m = d.details,
								y = this.altAudio ? void 0 : a.audio;
							if (!this.fragContextChanged(u)) {
								if (this.state = Vt, v) {
									v.tracks && (this._bufferInitSegment(d, v.tracks, u, o), r.trigger(s.a.FRAG_PARSING_INIT_SEGMENT, {
										frag: u,
										id: i,
										tracks: v.tracks
									}));
									var T = v.initPTS,
										b = v.timescale;
									Object(n.a)(T) && (this.initPTS[u.cc] = T, r.trigger(s.a.INIT_PTS_FOUND, {
										frag: u,
										id: i,
										initPTS: T,
										timescale: b
									}))
								}
								if (c && !1 !== a.independent) {
									if (m) {
										var E = c.startPTS,
											S = c.endPTS,
											L = c.startDTS,
											A = c.endDTS;
										if (h) h.elementaryStreams[c.type] = {
											startPTS: E,
											endPTS: S,
											startDTS: L,
											endDTS: A
										};
										else if (c.firstKeyFrame && c.independent && (this.couldBacktrack = !0), c.dropped && c.independent) {
											var D = this.getMainFwdBufferInfo();
											if ((D ? D.end : this.getLoadPosition()) + this.config.maxBufferHole < (c.firstKeyFramePTS ? c.firstKeyFramePTS : E) - this.config.maxBufferHole) return void this.backtrack(u);
											u.setElementaryStreamInfo(c.type, u.start, S, u.start, A, !0)
										}
										u.setElementaryStreamInfo(c.type, E, S, L, A), this.backtrackFragment && (this.backtrackFragment = u), this.bufferFragmentData(c, u, h, o)
									}
								} else if (!1 === a.independent) return void this.backtrack(u);
								if (y) {
									var R = y.startPTS,
										k = y.endPTS,
										_ = y.startDTS,
										I = y.endDTS;
									h && (h.elementaryStreams[p.a.AUDIO] = {
										startPTS: R,
										endPTS: k,
										startDTS: _,
										endDTS: I
									}), u.setElementaryStreamInfo(p.a.AUDIO, R, k, _, I), this.bufferFragmentData(y, u, h, o)
								}
								if (m && null != g && null !== (e = g.samples) && void 0 !== e && e.length) {
									var O = {
										id: i,
										frag: u,
										details: m,
										samples: g.samples
									};
									r.trigger(s.a.FRAG_PARSING_METADATA, O)
								}
								if (m && f) {
									var C = {
										id: i,
										frag: u,
										details: m,
										samples: f.samples
									};
									r.trigger(s.a.FRAG_PARSING_USERDATA, C)
								}
							}
						}, u._bufferInitSegment = function(t, e, i, r) {
							var a = this;
							if (this.state === Vt) {
								this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
								var n = e.audio,
									o = e.video,
									l = e.audiovideo;
								if (n) {
									var u = t.audioCodec,
										h = navigator.userAgent.toLowerCase();
									this.audioCodecSwitch && (u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== n.metadata.channelCount && -1 === h.indexOf("firefox") && (u = "mp4a.40.5")), -1 !== h.indexOf("android") && "audio/mpeg" !== n.container && (u = "mp4a.40.2", this.log("Android: force audio codec to " + u)), t.audioCodec && t.audioCodec !== u && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + u + '"'), n.levelCodec = u, n.id = "main", this.log("Init audio buffer, container:" + n.container + ", codecs[selected/level/parsed]=[" + (u || "") + "/" + (t.audioCodec || "") + "/" + n.codec + "]")
								}
								o && (o.levelCodec = t.videoCodec, o.id = "main", this.log("Init video buffer, container:" + o.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + o.codec + "]")), l && this.log("Init audiovideo buffer, container:" + l.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + l.codec + "]"), this.hls.trigger(s.a.BUFFER_CODECS, e), Object.keys(e).forEach((function(t) {
									var n = e[t].initSegment;
									null != n && n.byteLength && a.hls.trigger(s.a.BUFFER_APPENDING, {
										type: t,
										data: n,
										frag: i,
										part: null,
										chunkMeta: r,
										parent: i.type
									})
								})), this.tick()
							}
						}, u.getMainFwdBufferInfo = function() {
							return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, w.b.MAIN)
						}, u.backtrack = function(t) {
							this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = Bt
						}, u.checkFragmentChanged = function() {
							var t = this.media,
								e = null;
							if (t && t.readyState > 1 && !1 === t.seeking) {
								var i = t.currentTime;
								if (mt.isBuffered(t, i) ? e = this.getAppendedFrag(i) : mt.isBuffered(t, i + .1) && (e = this.getAppendedFrag(i + .1)), e) {
									this.backtrackFragment = null;
									var r = this.fragPlaying,
										a = e.level;
									r && e.sn === r.sn && r.level === a && e.urlId === r.urlId || (this.hls.trigger(s.a.FRAG_CHANGED, {
										frag: e
									}), r && r.level === a || this.hls.trigger(s.a.LEVEL_SWITCHED, {
										level: a
									}), this.fragPlaying = e)
								}
							}
						}, a = r, (l = [{
							key: "nextLevel",
							get: function() {
								var t = this.nextBufferedFrag;
								return t ? t.level : -1
							}
						}, {
							key: "currentFrag",
							get: function() {
								var t = this.media;
								return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
							}
						}, {
							key: "currentProgramDateTime",
							get: function() {
								var t = this.media;
								if (t) {
									var e = t.currentTime,
										i = this.currentFrag;
									if (i && Object(n.a)(e) && Object(n.a)(i.programDateTime)) {
										var r = i.programDateTime + 1e3 * (e - i.start);
										return new Date(r)
									}
								}
								return null
							}
						}, {
							key: "currentLevel",
							get: function() {
								var t = this.currentFrag;
								return t ? t.level : -1
							}
						}, {
							key: "nextBufferedFrag",
							get: function() {
								var t = this.currentFrag;
								return t ? this.followingBufferedFrag(t) : null
							}
						}, {
							key: "forceStartLoad",
							get: function() {
								return this._forceStartLoad
							}
						}]) && ne(a.prototype, l), Object.defineProperty(a, "prototype", {
							writable: !1
						}), r
					}(Qt),
					le = function() {
						function t(t, e, i) {
							void 0 === e && (e = 0), void 0 === i && (i = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = i
						}
						var e = t.prototype;
						return e.sample = function(t, e) {
							var i = Math.pow(this.alpha_, t);
							this.estimate_ = e * (1 - i) + i * this.estimate_, this.totalWeight_ += t
						}, e.getTotalWeight = function() {
							return this.totalWeight_
						}, e.getEstimate = function() {
							if (this.alpha_) {
								var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
								if (t) return this.estimate_ / t
							}
							return this.estimate_
						}, t
					}(),
					ue = function() {
						function t(t, e, i) {
							this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new le(t), this.fast_ = new le(e)
						}
						var e = t.prototype;
						return e.update = function(t, e) {
							var i = this.slow_,
								r = this.fast_;
							this.slow_.halfLife !== t && (this.slow_ = new le(t, i.getEstimate(), i.getTotalWeight())), this.fast_.halfLife !== e && (this.fast_ = new le(e, r.getEstimate(), r.getTotalWeight()))
						}, e.sample = function(t, e) {
							var i = (t = Math.max(t, this.minDelayMs_)) / 1e3,
								r = 8 * e / i;
							this.fast_.sample(i, r), this.slow_.sample(i, r)
						}, e.canEstimate = function() {
							var t = this.fast_;
							return t && t.getTotalWeight() >= this.minWeight_
						}, e.getEstimate = function() {
							return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
						}, e.destroy = function() {}, t
					}();

				function he(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var de = function() {
						function t(t) {
							this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
							var e = t.config;
							this.bwEstimator = new ue(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
						}
						var e, i, r = t.prototype;
						return r.registerListeners = function() {
							var t = this.hls;
							t.on(s.a.FRAG_LOADING, this.onFragLoading, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.ERROR, this.onError, this)
						}, r.unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.FRAG_LOADING, this.onFragLoading, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.ERROR, this.onError, this)
						}, r.destroy = function() {
							this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
						}, r.onFragLoading = function(t, e) {
							var i, r = e.frag;
							r.type === w.b.MAIN && (this.timer || (this.fragCurrent = r, this.partCurrent = null != (i = e.part) ? i : null, this.timer = self.setInterval(this.onCheck, 100)))
						}, r.onLevelLoaded = function(t, e) {
							var i = this.hls.config;
							e.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD)
						}, r._abandonRulesCheck = function() {
							var t = this.fragCurrent,
								e = this.partCurrent,
								i = this.hls,
								r = i.autoLevelEnabled,
								a = i.config,
								o = i.media;
							if (t && o) {
								var u = e ? e.stats : t.stats,
									h = e ? e.duration : t.duration;
								if (u.aborted) return l.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
								if (r && !o.paused && o.playbackRate && o.readyState) {
									var d = performance.now() - u.loading.start,
										c = Math.abs(o.playbackRate);
									if (!(d <= 500 * h / c)) {
										var f = i.levels,
											g = i.minAutoLevel,
											v = f[t.level],
											p = u.total || Math.max(u.loaded, Math.round(h * v.maxBitrate / 8)),
											m = Math.max(1, u.bwEstimate ? u.bwEstimate / 8 : 1e3 * u.loaded / d),
											y = (p - u.loaded) / m,
											T = o.currentTime,
											b = (mt.bufferInfo(o, T, a.maxBufferHole).end - T) / c;
										if (!(b >= 2 * h / c || y <= b)) {
											var E, S = Number.POSITIVE_INFINITY;
											for (E = t.level - 1; E > g && !((S = h * f[E].maxBitrate / (6.4 * m)) < b); E--);
											if (!(S >= y)) {
												var L = this.bwEstimator.getEstimate();
												l.b.warn("Fragment " + t.sn + (e ? " part " + e.index : "") + " of level " + t.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + E + "\n      Current BW estimate: " + (Object(n.a)(L) ? (L / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + y.toFixed(3) + " s\n      Estimated load time for the next fragment: " + S.toFixed(3) + " s\n      Time to underbuffer: " + b.toFixed(3) + " s"), i.nextLoadLevel = E, this.bwEstimator.sample(d, u.loaded), this.clearTimer(), t.loader && (this.fragCurrent = this.partCurrent = null, t.loader.abort()), i.trigger(s.a.FRAG_LOAD_EMERGENCY_ABORTED, {
													frag: t,
													part: e,
													stats: u
												})
											}
										}
									}
								}
							}
						}, r.onFragLoaded = function(t, e) {
							var i = e.frag,
								r = e.part;
							if (i.type === w.b.MAIN && Object(n.a)(i.sn)) {
								var a = r ? r.stats : i.stats,
									o = r ? r.duration : i.duration;
								if (this.clearTimer(), this.lastLoadedFragLevel = i.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
									var l = this.hls.levels[i.level],
										u = (l.loaded ? l.loaded.bytes : 0) + a.loaded,
										h = (l.loaded ? l.loaded.duration : 0) + o;
									l.loaded = {
										bytes: u,
										duration: h
									}, l.realBitrate = Math.round(8 * u / h)
								}
								if (i.bitrateTest) {
									var d = {
										stats: a,
										frag: i,
										part: r,
										id: i.type
									};
									this.onFragBuffered(s.a.FRAG_BUFFERED, d), i.bitrateTest = !1
								}
							}
						}, r.onFragBuffered = function(t, e) {
							var i = e.frag,
								r = e.part,
								a = r ? r.stats : i.stats;
							if (!a.aborted && i.type === w.b.MAIN && "initSegment" !== i.sn) {
								var n = a.parsing.end - a.loading.start;
								this.bwEstimator.sample(n, a.loaded), a.bwEstimate = this.bwEstimator.getEstimate(), i.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
							}
						}, r.onError = function(t, e) {
							switch (e.details) {
								case o.a.FRAG_LOAD_ERROR:
								case o.a.FRAG_LOAD_TIMEOUT:
									this.clearTimer()
							}
						}, r.clearTimer = function() {
							self.clearInterval(this.timer), this.timer = void 0
						}, r.getNextABRAutoLevel = function() {
							var t = this.fragCurrent,
								e = this.partCurrent,
								i = this.hls,
								r = i.maxAutoLevel,
								a = i.config,
								n = i.minAutoLevel,
								s = i.media,
								o = e ? e.duration : t ? t.duration : 0,
								u = s ? s.currentTime : 0,
								h = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
								d = this.bwEstimator ? this.bwEstimator.getEstimate() : a.abrEwmaDefaultEstimate,
								c = (mt.bufferInfo(s, u, a.maxBufferHole).end - u) / h,
								f = this.findBestLevel(d, n, r, c, a.abrBandWidthFactor, a.abrBandWidthUpFactor);
							if (f >= 0) return f;
							l.b.trace((c ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
							var g = o ? Math.min(o, a.maxStarvationDelay) : a.maxStarvationDelay,
								v = a.abrBandWidthFactor,
								p = a.abrBandWidthUpFactor;
							if (!c) {
								var m = this.bitrateTestDelay;
								m && (g = (o ? Math.min(o, a.maxLoadingDelay) : a.maxLoadingDelay) - m, l.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), v = p = 1)
							}
							return f = this.findBestLevel(d, n, r, c + g, v, p), Math.max(f, 0)
						}, r.findBestLevel = function(t, e, i, r, a, n) {
							for (var s, o = this.fragCurrent, u = this.partCurrent, h = this.lastLoadedFragLevel, d = this.hls.levels, c = d[h], f = !(null == c || null === (s = c.details) || void 0 === s || !s.live), g = null == c ? void 0 : c.codecSet, v = u ? u.duration : o ? o.duration : 0, p = i; p >= e; p--) {
								var m = d[p];
								if (m && (!g || m.codecSet === g)) {
									var y, T = m.details,
										b = (u ? null == T ? void 0 : T.partTarget : null == T ? void 0 : T.averagetargetduration) || v;
									y = p <= h ? a * t : n * t;
									var E = d[p].maxBitrate,
										S = E * b / y;
									if (l.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(y) + "/" + E + "/" + b + "/" + r + "/" + S), y > E && (!S || f && !this.bitrateTestDelay || S < r)) return p
								}
							}
							return -1
						}, e = t, (i = [{
							key: "nextAutoLevel",
							get: function() {
								var t = this._nextAutoLevel,
									e = this.bwEstimator;
								if (!(-1 === t || e && e.canEstimate())) return t;
								var i = this.getNextABRAutoLevel();
								return -1 !== t && (i = Math.min(t, i)), i
							},
							set: function(t) {
								this._nextAutoLevel = t
							}
						}]) && he(e.prototype, i), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t
					}(),
					ce = i(15);

				function fe() {
					return (fe = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}

				function ge(t, e) {
					return (ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var ve = function(t) {
					var e, i;

					function r(e, i) {
						var r;
						return (r = t.call(this, e, i, "[audio-stream-controller]") || this).videoBuffer = null, r.videoTrackCC = -1, r.waitingVideoCC = -1, r.audioSwitch = !1, r.trackId = -1, r.waitingData = null, r.mainDetails = null, r.bufferFlushed = !1, r.cachedTrackLoadedData = null, r._registerListeners(), r
					}
					i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, ge(e, i);
					var a = r.prototype;
					return a.onHandlerDestroying = function() {
						this._unregisterListeners(), this.mainDetails = null
					}, a._registerListeners = function() {
						var t = this.hls;
						t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.a.ERROR, this.onError, this), t.on(s.a.BUFFER_RESET, this.onBufferReset, this), t.on(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
					}, a._unregisterListeners = function() {
						var t = this.hls;
						t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(s.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.a.ERROR, this.onError, this), t.off(s.a.BUFFER_RESET, this.onBufferReset, this), t.off(s.a.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.a.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.a.FRAG_BUFFERED, this.onFragBuffered, this)
					}, a.onInitPtsFound = function(t, e) {
						var i = e.frag,
							r = e.id,
							a = e.initPTS;
						if ("main" === r) {
							var n = i.cc;
							this.initPTS[i.cc] = a, this.log("InitPTS for cc: " + n + " found from main: " + a), this.videoTrackCC = n, this.state === zt && this.tick()
						}
					}, a.startLoad = function(t) {
						if (!this.levels) return this.startPosition = t, void(this.state = Ut);
						var e = this.lastCurrentTime;
						this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e, this.state = Bt) : (this.loadedmetadata = !1, this.state = Ht), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
					}, a.doTick = function() {
						switch (this.state) {
							case Bt:
								this.doTickIdle();
								break;
							case Ht:
								var e, i = this.levels,
									r = this.trackId,
									a = null == i || null === (e = i[r]) || void 0 === e ? void 0 : e.details;
								if (a) {
									if (this.waitForCdnTuneIn(a)) break;
									this.state = zt
								}
								break;
							case Kt:
								var n, s = performance.now(),
									o = this.retryDate;
								(!o || s >= o || null !== (n = this.media) && void 0 !== n && n.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = Bt);
								break;
							case zt:
								var l = this.waitingData;
								if (l) {
									var u = l.frag,
										h = l.part,
										d = l.cache,
										c = l.complete;
									if (void 0 !== this.initPTS[u.cc]) {
										this.waitingData = null, this.waitingVideoCC = -1, this.state = jt;
										var f = {
											frag: u,
											part: h,
											payload: d.flush(),
											networkDetails: null
										};
										this._handleFragmentLoadProgress(f), c && t.prototype._handleFragmentLoadComplete.call(this, f)
									} else if (this.videoTrackCC !== this.waitingVideoCC) this.log("Waiting fragment cc (" + u.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
									else {
										var g = this.getLoadPosition(),
											v = mt.bufferInfo(this.mediaBuffer, g, this.config.maxBufferHole);
										Rt(v.end, this.config.maxFragLookUpTolerance, u) < 0 && (this.log("Waiting fragment cc (" + u.cc + ") @ " + u.start + " cancelled because another fragment at " + v.end + " is needed"), this.clearWaitingFragment())
									}
								} else this.state = Bt
						}
						this.onTickEnd()
					}, a.clearWaitingFragment = function() {
						var t = this.waitingData;
						t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = Bt)
					}, a.resetLoadingState = function() {
						this.clearWaitingFragment(), t.prototype.resetLoadingState.call(this)
					}, a.onTickEnd = function() {
						var t = this.media;
						if (t && t.readyState) {
							var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
							!this.loadedmetadata && e.length && (this.loadedmetadata = !0), this.lastCurrentTime = t.currentTime
						}
					}, a.doTickIdle = function() {
						var t, e, i = this.hls,
							r = this.levels,
							a = this.media,
							n = this.trackId,
							o = i.config;
						if (r && r[n] && (a || !this.startFragRequested && o.startFragPrefetch)) {
							var l = r[n].details;
							if (!l || l.live && this.levelLastLoaded !== n || this.waitForCdnTuneIn(l)) this.state = Ht;
							else {
								this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, p.a.AUDIO, w.b.AUDIO));
								var u = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, w.b.AUDIO);
								if (null !== u) {
									var h = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, w.b.MAIN),
										d = u.len,
										c = this.getMaxBufferLength(null == h ? void 0 : h.len),
										f = this.audioSwitch;
									if (!(d >= c) || f) {
										if (!f && this._streamEnded(u, l)) return i.trigger(s.a.BUFFER_EOS, {
											type: "audio"
										}), void(this.state = Yt);
										var g = l.fragments[0].start,
											v = u.end;
										if (f) {
											var m = this.getLoadPosition();
											v = m, l.PTSKnown && m < g && (u.end > g || u.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), a.currentTime = g + .05)
										}
										if (!(h && v > h.end + l.targetduration) && (h && h.len || !u.len)) {
											var y = this.getNextFragment(v, l);
											y ? "identity" !== (null === (t = y.decryptdata) || void 0 === t ? void 0 : t.keyFormat) || null !== (e = y.decryptdata) && void 0 !== e && e.key ? this.loadFragment(y, l, v) : this.loadKey(y, l) : this.bufferFlushed = !0
										}
									}
								}
							}
						}
					}, a.getMaxBufferLength = function(e) {
						var i = t.prototype.getMaxBufferLength.call(this);
						return e ? Math.max(i, e) : i
					}, a.onMediaDetaching = function() {
						this.videoBuffer = null, t.prototype.onMediaDetaching.call(this)
					}, a.onAudioTracksUpdated = function(t, e) {
						var i = e.audioTracks;
						this.resetTransmuxer(), this.levels = i.map((function(t) {
							return new Q(t)
						}))
					}, a.onAudioTrackSwitching = function(t, e) {
						var i = !!e.url;
						this.trackId = e.id;
						var r = this.fragCurrent;
						null != r && r.loader && r.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), i ? this.setInterval(100) : this.resetTransmuxer(), i ? (this.audioSwitch = !0, this.state = Bt) : this.state = Ut, this.tick()
					}, a.onManifestLoading = function() {
						this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1
					}, a.onLevelLoaded = function(t, e) {
						this.mainDetails = e.details, null !== this.cachedTrackLoadedData && (this.hls.trigger(s.a.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
					}, a.onAudioTrackLoaded = function(t, e) {
						var i;
						if (null != this.mainDetails) {
							var r = this.levels,
								a = e.details,
								n = e.id;
							if (r) {
								this.log("Track " + n + " loaded [" + a.startSN + "," + a.endSN + "],duration:" + a.totalduration);
								var s = r[n],
									o = 0;
								if (a.live || null !== (i = s.details) && void 0 !== i && i.live) {
									var l = this.mainDetails;
									if (a.fragments[0] || (a.deltaUpdateFailed = !0), a.deltaUpdateFailed || !l) return;
									!s.details && a.hasProgramDateTime && l.hasProgramDateTime ? (Lt(a, l), o = a.fragments[0].start) : o = this.alignPlaylists(a, s.details)
								}
								s.details = a, this.levelLastLoaded = n, this.startFragRequested || !this.mainDetails && a.live || this.setStartPosition(s.details, o), this.state !== Ht || this.waitForCdnTuneIn(a) || (this.state = Bt), this.tick()
							} else this.warn("Audio tracks were reset while loading level " + n)
						} else this.cachedTrackLoadedData = e
					}, a._handleFragmentLoadProgress = function(t) {
						var e, i = t.frag,
							r = t.part,
							a = t.payload,
							n = this.config,
							s = this.trackId,
							o = this.levels;
						if (o) {
							var l = o[s],
								u = l.details,
								h = n.defaultAudioCodec || l.audioCodec || "mp4a.40.2",
								d = this.transmuxer;
							d || (d = this.transmuxer = new re(this.hls, w.b.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
							var c = this.initPTS[i.cc],
								f = null === (e = i.initSegment) || void 0 === e ? void 0 : e.data;
							if (void 0 !== c) {
								var g = r ? r.index : -1,
									v = -1 !== g,
									p = new yt(i.level, i.sn, i.stats.chunkCount, a.byteLength, g, v);
								d.push(a, f, h, "", i, r, u.totalduration, !1, p, c)
							} else this.log("Unknown video PTS for cc " + i.cc + ", waiting for video PTS before demuxing audio frag " + i.sn + " of [" + u.startSN + " ," + u.endSN + "],track " + s), (this.waitingData = this.waitingData || {
								frag: i,
								part: r,
								cache: new ce.a,
								complete: !1
							}).cache.push(new Uint8Array(a)), this.waitingVideoCC = this.videoTrackCC, this.state = zt
						} else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + i.sn + " of level " + i.level + " will not be buffered")
					}, a._handleFragmentLoadComplete = function(e) {
						this.waitingData ? this.waitingData.complete = !0 : t.prototype._handleFragmentLoadComplete.call(this, e)
					}, a.onBufferReset = function() {
						this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
					}, a.onBufferCreated = function(t, e) {
						var i = e.tracks.audio;
						i && (this.mediaBuffer = i.buffer), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
					}, a.onFragBuffered = function(t, e) {
						var i = e.frag,
							r = e.part;
						i.type === w.b.AUDIO && (this.fragContextChanged(i) ? this.warn("Fragment " + i.sn + (r ? " p: " + r.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== i.sn && (this.fragPrevious = i, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(s.a.AUDIO_TRACK_SWITCHED, {
							id: this.trackId
						}))), this.fragBufferedComplete(i, r)))
					}, a.onError = function(e, i) {
						switch (i.details) {
							case o.a.FRAG_LOAD_ERROR:
							case o.a.FRAG_LOAD_TIMEOUT:
							case o.a.KEY_LOAD_ERROR:
							case o.a.KEY_LOAD_TIMEOUT:
								this.onFragmentOrKeyLoadError(w.b.AUDIO, i);
								break;
							case o.a.AUDIO_TRACK_LOAD_ERROR:
							case o.a.AUDIO_TRACK_LOAD_TIMEOUT:
								this.state !== qt && this.state !== Ut && (this.state = i.fatal ? qt : Bt, this.warn(i.details + " while loading frag, switching to " + this.state + " state"));
								break;
							case o.a.BUFFER_FULL_ERROR:
								if ("audio" === i.parent && (this.state === Vt || this.state === Wt)) {
									var r = !0,
										a = this.getFwdBufferInfo(this.mediaBuffer, w.b.AUDIO);
									a && a.len > .5 && (r = !this.reduceMaxBufferLength(a.len)), r && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState()
								}
						}
					}, a.onBufferFlushed = function(t, e) {
						e.type === p.a.AUDIO && (this.bufferFlushed = !0)
					}, a._handleTransmuxComplete = function(t) {
						var e, i = "audio",
							r = this.hls,
							a = t.remuxResult,
							n = t.chunkMeta,
							o = this.getCurrentContext(n);
						if (!o) return this.warn("The loading context changed while buffering fragment " + n.sn + " of level " + n.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(n.level);
						var l = o.frag,
							u = o.part,
							h = o.level.details,
							d = a.audio,
							c = a.text,
							f = a.id3,
							g = a.initSegment;
						if (!this.fragContextChanged(l) && h) {
							if (this.state = Vt, this.audioSwitch && d && this.completeAudioSwitch(), null != g && g.tracks && (this._bufferInitSegment(g.tracks, l, n), r.trigger(s.a.FRAG_PARSING_INIT_SEGMENT, {
									frag: l,
									id: i,
									tracks: g.tracks
								})), d) {
								var v = d.startPTS,
									m = d.endPTS,
									y = d.startDTS,
									T = d.endDTS;
								u && (u.elementaryStreams[p.a.AUDIO] = {
									startPTS: v,
									endPTS: m,
									startDTS: y,
									endDTS: T
								}), l.setElementaryStreamInfo(p.a.AUDIO, v, m, y, T), this.bufferFragmentData(d, l, u, n)
							}
							if (null != f && null !== (e = f.samples) && void 0 !== e && e.length) {
								var b = fe({
									id: i,
									frag: l,
									details: h
								}, f);
								r.trigger(s.a.FRAG_PARSING_METADATA, b)
							}
							if (c) {
								var E = fe({
									id: i,
									frag: l,
									details: h
								}, c);
								r.trigger(s.a.FRAG_PARSING_USERDATA, E)
							}
						}
					}, a._bufferInitSegment = function(t, e, i) {
						if (this.state === Vt) {
							t.video && delete t.video;
							var r = t.audio;
							if (r) {
								r.levelCodec = r.codec, r.id = "audio", this.log("Init audio buffer, container:" + r.container + ", codecs[parsed]=[" + r.codec + "]"), this.hls.trigger(s.a.BUFFER_CODECS, t);
								var a = r.initSegment;
								if (null != a && a.byteLength) {
									var n = {
										type: "audio",
										frag: e,
										part: null,
										chunkMeta: i,
										parent: e.type,
										data: a
									};
									this.hls.trigger(s.a.BUFFER_APPENDING, n)
								}
								this.tick()
							}
						}
					}, a.loadFragment = function(e, i, r) {
						var a = this.fragmentTracker.getState(e);
						this.fragCurrent = e, (this.audioSwitch || a === ut.NOT_LOADED || a === ut.PARTIAL) && ("initSegment" === e.sn ? this._loadInitSegment(e) : i.live && !Object(n.a)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = zt) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, i, r)))
					}, a.completeAudioSwitch = function() {
						var e = this.hls,
							i = this.media,
							r = this.trackId;
						i && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, e.trigger(s.a.AUDIO_TRACK_SWITCHED, {
							id: r
						})
					}, r
				}(Qt);

				function pe(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function me(t, e) {
					return (me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var ye = function(t) {
					var e, i;

					function r(e) {
						var i;
						return (i = t.call(this, e, "[audio-track-controller]") || this).tracks = [], i.groupId = null, i.tracksInGroup = [], i.trackId = -1, i.trackName = "", i.selectDefaultTrack = !0, i.registerListeners(), i
					}
					i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, me(e, i);
					var a, n, l = r.prototype;
					return l.registerListeners = function() {
						var t = this.hls;
						t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.a.ERROR, this.onError, this)
					}, l.unregisterListeners = function() {
						var t = this.hls;
						t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(s.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.a.ERROR, this.onError, this)
					}, l.destroy = function() {
						this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, t.prototype.destroy.call(this)
					}, l.onManifestLoading = function() {
						this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0
					}, l.onManifestParsed = function(t, e) {
						this.tracks = e.audioTracks || []
					}, l.onAudioTrackLoaded = function(t, e) {
						var i = e.id,
							r = e.details,
							a = this.tracksInGroup[i];
						if (a) {
							var n = a.details;
							a.details = e.details, this.log("audioTrack " + i + " loaded [" + r.startSN + "-" + r.endSN + "]"), i === this.trackId && (this.retryCount = 0, this.playlistLoaded(i, e, n))
						} else this.warn("Invalid audio track id " + i)
					}, l.onLevelLoading = function(t, e) {
						this.switchLevel(e.level)
					}, l.onLevelSwitching = function(t, e) {
						this.switchLevel(e.level)
					}, l.switchLevel = function(t) {
						var e = this.hls.levels[t];
						if (null != e && e.audioGroupIds) {
							var i = e.audioGroupIds[e.urlId];
							if (this.groupId !== i) {
								this.groupId = i;
								var r = this.tracks.filter((function(t) {
									return !i || t.groupId === i
								}));
								this.selectDefaultTrack && !r.some((function(t) {
									return t.default
								})) && (this.selectDefaultTrack = !1), this.tracksInGroup = r;
								var a = {
									audioTracks: r
								};
								this.log("Updating audio tracks, " + r.length + ' track(s) found in "' + i + '" group-id'), this.hls.trigger(s.a.AUDIO_TRACKS_UPDATED, a), this.selectInitialTrack()
							}
						}
					}, l.onError = function(e, i) {
						t.prototype.onError.call(this, e, i), !i.fatal && i.context && i.context.type === w.a.AUDIO_TRACK && i.context.id === this.trackId && i.context.groupId === this.groupId && this.retryLoadingOrFail(i)
					}, l.setAudioTrack = function(t) {
						var e = this.tracksInGroup;
						if (t < 0 || t >= e.length) this.warn("Invalid id passed to audio-track controller");
						else {
							this.clearTimer();
							var i = e[this.trackId];
							this.log("Now switching to audio-track index " + t);
							var r = e[t],
								a = r.id,
								n = r.groupId,
								o = void 0 === n ? "" : n,
								l = r.name,
								u = r.type,
								h = r.url;
							if (this.trackId = t, this.trackName = l, this.selectDefaultTrack = !1, this.hls.trigger(s.a.AUDIO_TRACK_SWITCHING, {
									id: a,
									groupId: o,
									name: l,
									type: u,
									url: h
								}), !r.details || r.details.live) {
								var d = this.switchParams(r.url, null == i ? void 0 : i.details);
								this.loadPlaylist(d)
							}
						}
					}, l.selectInitialTrack = function() {
						this.tracksInGroup;
						var t = this.trackName,
							e = this.findTrackId(t) || this.findTrackId(); - 1 !== e ? this.setAudioTrack(e) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(s.a.ERROR, {
							type: o.b.MEDIA_ERROR,
							details: o.a.AUDIO_TRACK_LOAD_ERROR,
							fatal: !0
						}))
					}, l.findTrackId = function(t) {
						for (var e = this.tracksInGroup, i = 0; i < e.length; i++) {
							var r = e[i];
							if ((!this.selectDefaultTrack || r.default) && (!t || t === r.name)) return r.id
						}
						return -1
					}, l.loadPlaylist = function(t) {
						var e = this.tracksInGroup[this.trackId];
						if (this.shouldLoadTrack(e)) {
							var i = e.id,
								r = e.groupId,
								a = e.url;
							if (t) try {
								a = t.addDirectives(a)
							} catch (t) {
								this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
							}
							this.log("loading audio-track playlist for id: " + i), this.clearTimer(), this.hls.trigger(s.a.AUDIO_TRACK_LOADING, {
								url: a,
								id: i,
								groupId: r,
								deliveryDirectives: t || null
							})
						}
					}, a = r, (n = [{
						key: "audioTracks",
						get: function() {
							return this.tracksInGroup
						}
					}, {
						key: "audioTrack",
						get: function() {
							return this.trackId
						},
						set: function(t) {
							this.selectDefaultTrack = !1, this.setAudioTrack(t)
						}
					}]) && pe(a.prototype, n), Object.defineProperty(a, "prototype", {
						writable: !1
					}), r
				}(nt);

				function Te(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function be(t, e) {
					return (be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}
				var Ee = function(t) {
					var e, i;

					function r(e, i) {
						var r;
						return (r = t.call(this, e, i, "[subtitle-stream-controller]") || this).levels = [], r.currentTrackId = -1, r.tracksBuffered = [], r.mainDetails = null, r._registerListeners(), r
					}
					i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, be(e, i);
					var a, n, o = r.prototype;
					return o.onHandlerDestroying = function() {
						this._unregisterListeners(), this.mainDetails = null
					}, o._registerListeners = function() {
						var t = this.hls;
						t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.a.ERROR, this.onError, this), t.on(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(s.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(s.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
					}, o._unregisterListeners = function() {
						var t = this.hls;
						t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.a.ERROR, this.onError, this), t.off(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(s.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(s.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
					}, o.startLoad = function() {
						this.stopLoad(), this.state = Bt, this.setInterval(500), this.tick()
					}, o.onManifestLoading = function() {
						this.mainDetails = null, this.fragmentTracker.removeAllFragments()
					}, o.onLevelLoaded = function(t, e) {
						this.mainDetails = e.details
					}, o.onSubtitleFragProcessed = function(t, e) {
						var i = e.frag,
							r = e.success;
						if (this.fragPrevious = i, this.state = Bt, r) {
							var a = this.tracksBuffered[this.currentTrackId];
							if (a) {
								for (var n, s = i.start, o = 0; o < a.length; o++)
									if (s >= a[o].start && s <= a[o].end) {
										n = a[o];
										break
									} var l = i.start + i.duration;
								n ? n.end = l : (n = {
									start: s,
									end: l
								}, a.push(n)), this.fragmentTracker.fragBuffered(i)
							}
						}
					}, o.onBufferFlushing = function(t, e) {
						var i = e.startOffset,
							r = e.endOffset;
						if (0 === i && r !== Number.POSITIVE_INFINITY) {
							var a = this.currentTrackId,
								n = this.levels;
							if (!n.length || !n[a] || !n[a].details) return;
							var s = r - n[a].details.targetduration;
							if (s <= 0) return;
							e.endOffsetSubtitles = Math.max(0, s), this.tracksBuffered.forEach((function(t) {
								for (var e = 0; e < t.length;)
									if (t[e].end <= s) t.shift();
									else {
										if (!(t[e].start < s)) break;
										t[e].start = s, e++
									}
							})), this.fragmentTracker.removeFragmentsInRange(i, s, w.b.SUBTITLE)
						}
					}, o.onError = function(t, e) {
						var i, r = e.frag;
						r && r.type === w.b.SUBTITLE && (null !== (i = this.fragCurrent) && void 0 !== i && i.loader && this.fragCurrent.loader.abort(), this.state = Bt)
					}, o.onSubtitleTracksUpdated = function(t, e) {
						var i = this,
							r = e.subtitleTracks;
						this.tracksBuffered = [], this.levels = r.map((function(t) {
							return new Q(t)
						})), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach((function(t) {
							i.tracksBuffered[t.id] = []
						})), this.mediaBuffer = null
					}, o.onSubtitleTrackSwitch = function(t, e) {
						if (this.currentTrackId = e.id, this.levels.length && -1 !== this.currentTrackId) {
							var i = this.levels[this.currentTrackId];
							null != i && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.setInterval(500)
						} else this.clearInterval()
					}, o.onSubtitleTrackLoaded = function(t, e) {
						var i, r = e.details,
							a = e.id,
							n = this.currentTrackId,
							s = this.levels;
						if (s.length) {
							var o = s[n];
							if (!(a >= s.length || a !== n) && o) {
								if (this.mediaBuffer = this.mediaBufferTimeRanges, r.live || null !== (i = o.details) && void 0 !== i && i.live) {
									var l = this.mainDetails;
									if (r.deltaUpdateFailed || !l) return;
									var u = l.fragments[0];
									o.details ? 0 === this.alignPlaylists(r, o.details) && u && at(r, u.start) : r.hasProgramDateTime && l.hasProgramDateTime ? Lt(r, l) : u && at(r, u.start)
								}
								o.details = r, this.levelLastLoaded = a, this.tick(), r.live && !this.fragCurrent && this.media && this.state === Bt && (Dt(null, r.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), o.details = void 0))
							}
						}
					}, o._handleFragmentLoadComplete = function(t) {
						var e = t.frag,
							i = t.payload,
							r = e.decryptdata,
							a = this.hls;
						if (!this.fragContextChanged(e) && i && i.byteLength > 0 && r && r.key && r.iv && "AES-128" === r.method) {
							var n = performance.now();
							this.decrypter.webCryptoDecrypt(new Uint8Array(i), r.key.buffer, r.iv.buffer).then((function(t) {
								var i = performance.now();
								a.trigger(s.a.FRAG_DECRYPTED, {
									frag: e,
									payload: t,
									stats: {
										tstart: n,
										tdecrypt: i
									}
								})
							}))
						}
					}, o.doTick = function() {
						if (this.media) {
							if (this.state === Bt) {
								var t = this.currentTrackId,
									e = this.levels;
								if (!e.length || !e[t] || !e[t].details) return;
								var i = e[t].details,
									r = i.targetduration,
									a = this.config,
									n = this.media,
									s = mt.bufferedInfo(this.mediaBufferTimeRanges, n.currentTime - r, a.maxBufferHole),
									o = s.end;
								if (s.len > this.getMaxBufferLength() + r) return;
								var l, u = i.fragments,
									h = u.length,
									d = i.edge,
									c = this.fragPrevious;
								if (o < d) {
									var f = a.maxFragLookUpTolerance;
									!(l = Dt(c, u, Math.max(u[0].start, o), f)) && c && c.start < u[0].start && (l = u[0])
								} else l = u[h - 1];
								if (!(l = this.mapToInitFragWhenRequired(l))) return;
								l.encrypted ? this.loadKey(l, i) : this.fragmentTracker.getState(l) === ut.NOT_LOADED && this.loadFragment(l, i, o)
							}
						} else this.state = Bt
					}, o.loadFragment = function(e, i, r) {
						this.fragCurrent = e, "initSegment" === e.sn ? this._loadInitSegment(e) : t.prototype.loadFragment.call(this, e, i, r)
					}, a = r, (n = [{
						key: "mediaBufferTimeRanges",
						get: function() {
							return this.tracksBuffered[this.currentTrackId] || []
						}
					}]) && Te(a.prototype, n), Object.defineProperty(a, "prototype", {
						writable: !1
					}), r
				}(Qt);

				function Se(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function Le(t, e) {
					return (Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}

				function Ae(t) {
					for (var e = [], i = 0; i < t.length; i++) {
						var r = t[i];
						"subtitles" === r.kind && r.label && e.push(t[i])
					}
					return e
				}
				var De, Re = function(t) {
						var e, i;

						function r(e) {
							var i;
							return (i = t.call(this, e, "[subtitle-track-controller]") || this).media = null, i.tracks = [], i.groupId = null, i.tracksInGroup = [], i.trackId = -1, i.selectDefaultTrack = !0, i.queuedDefaultTrack = -1, i.trackChangeListener = function() {
								return i.onTextTracksChanged()
							}, i.asyncPollTrackChange = function() {
								return i.pollTrackChange(0)
							}, i.useTextTrackPolling = !1, i.subtitlePollingInterval = -1, i._subtitleDisplay = !0, i.registerListeners(), i
						}
						i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, Le(e, i);
						var a, n, o = r.prototype;
						return o.destroy = function() {
							this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t.prototype.destroy.call(this)
						}, o.registerListeners = function() {
							var t = this.hls;
							t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.on(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(s.a.ERROR, this.onError, this)
						}, o.unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.LEVEL_LOADING, this.onLevelLoading, this), t.off(s.a.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(s.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(s.a.ERROR, this.onError, this)
						}, o.onMediaAttached = function(t, e) {
							this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
						}, o.pollTrackChange = function(t) {
							self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
						}, o.onMediaDetaching = function() {
							this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), Ae(this.media.textTracks).forEach((function(t) {
								U(t)
							})), this.subtitleTrack = -1, this.media = null)
						}, o.onManifestLoading = function() {
							this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
						}, o.onManifestParsed = function(t, e) {
							this.tracks = e.subtitleTracks
						}, o.onSubtitleTrackLoaded = function(t, e) {
							var i = e.id,
								r = e.details,
								a = this.trackId,
								n = this.tracksInGroup[a];
							if (n) {
								var s = n.details;
								n.details = e.details, this.log("subtitle track " + i + " loaded [" + r.startSN + "-" + r.endSN + "]"), i === this.trackId && (this.retryCount = 0, this.playlistLoaded(i, e, s))
							} else this.warn("Invalid subtitle track id " + i)
						}, o.onLevelLoading = function(t, e) {
							this.switchLevel(e.level)
						}, o.onLevelSwitching = function(t, e) {
							this.switchLevel(e.level)
						}, o.switchLevel = function(t) {
							var e = this.hls.levels[t];
							if (null != e && e.textGroupIds) {
								var i = e.textGroupIds[e.urlId];
								if (this.groupId !== i) {
									var r = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
										a = this.tracks.filter((function(t) {
											return !i || t.groupId === i
										}));
									this.tracksInGroup = a;
									var n = this.findTrackId(null == r ? void 0 : r.name) || this.findTrackId();
									this.groupId = i;
									var o = {
										subtitleTracks: a
									};
									this.log("Updating subtitle tracks, " + a.length + ' track(s) found in "' + i + '" group-id'), this.hls.trigger(s.a.SUBTITLE_TRACKS_UPDATED, o), -1 !== n && this.setSubtitleTrack(n, r)
								}
							}
						}, o.findTrackId = function(t) {
							for (var e = this.tracksInGroup, i = 0; i < e.length; i++) {
								var r = e[i];
								if ((!this.selectDefaultTrack || r.default) && (!t || t === r.name)) return r.id
							}
							return -1
						}, o.onError = function(e, i) {
							t.prototype.onError.call(this, e, i), !i.fatal && i.context && i.context.type === w.a.SUBTITLE_TRACK && i.context.id === this.trackId && i.context.groupId === this.groupId && this.retryLoadingOrFail(i)
						}, o.loadPlaylist = function(t) {
							var e = this.tracksInGroup[this.trackId];
							if (this.shouldLoadTrack(e)) {
								var i = e.id,
									r = e.groupId,
									a = e.url;
								if (t) try {
									a = t.addDirectives(a)
								} catch (t) {
									this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
								}
								this.log("Loading subtitle playlist for id " + i), this.hls.trigger(s.a.SUBTITLE_TRACK_LOADING, {
									url: a,
									id: i,
									groupId: r,
									deliveryDirectives: t || null
								})
							}
						}, o.toggleTrackModes = function(t) {
							var e = this,
								i = this.media,
								r = this.trackId;
							if (i) {
								var a = Ae(i.textTracks),
									n = a.filter((function(t) {
										return t.groupId === e.groupId
									}));
								if (-1 === t)[].slice.call(a).forEach((function(t) {
									t.mode = "disabled"
								}));
								else {
									var s = n[r];
									s && (s.mode = "disabled")
								}
								var o = n[t];
								o && (o.mode = this.subtitleDisplay ? "showing" : "hidden")
							}
						}, o.setSubtitleTrack = function(t, e) {
							var i, r = this.tracksInGroup;
							if (this.media) {
								if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (-1 === t || null !== (i = r[t]) && void 0 !== i && i.details) || t < -1 || t >= r.length)) {
									this.clearTimer();
									var a = r[t];
									if (this.log("Switching to subtitle track " + t), this.trackId = t, a) {
										var n = a.id,
											o = a.groupId,
											l = void 0 === o ? "" : o,
											u = a.name,
											h = a.type,
											d = a.url;
										this.hls.trigger(s.a.SUBTITLE_TRACK_SWITCH, {
											id: n,
											groupId: l,
											name: u,
											type: h,
											url: d
										});
										var c = this.switchParams(a.url, null == e ? void 0 : e.details);
										this.loadPlaylist(c)
									} else this.hls.trigger(s.a.SUBTITLE_TRACK_SWITCH, {
										id: t
									})
								}
							} else this.queuedDefaultTrack = t
						}, o.onTextTracksChanged = function() {
							if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
								for (var t = -1, e = Ae(this.media.textTracks), i = 0; i < e.length; i++)
									if ("hidden" === e[i].mode) t = i;
									else if ("showing" === e[i].mode) {
									t = i;
									break
								}
								this.subtitleTrack !== t && (this.subtitleTrack = t)
							}
						}, a = r, (n = [{
							key: "subtitleDisplay",
							get: function() {
								return this._subtitleDisplay
							},
							set: function(t) {
								this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes(this.trackId)
							}
						}, {
							key: "subtitleTracks",
							get: function() {
								return this.tracksInGroup
							}
						}, {
							key: "subtitleTrack",
							get: function() {
								return this.trackId
							},
							set: function(t) {
								this.selectDefaultTrack = !1;
								var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
								this.setSubtitleTrack(t, e)
							}
						}]) && Se(a.prototype, n), Object.defineProperty(a, "prototype", {
							writable: !1
						}), r
					}(nt),
					ke = function() {
						function t(t) {
							this.buffers = void 0, this.queues = {
								video: [],
								audio: [],
								audiovideo: []
							}, this.buffers = t
						}
						var e = t.prototype;
						return e.append = function(t, e) {
							var i = this.queues[e];
							i.push(t), 1 === i.length && this.buffers[e] && this.executeNext(e)
						}, e.insertAbort = function(t, e) {
							this.queues[e].unshift(t), this.executeNext(e)
						}, e.appendBlocker = function(t) {
							var e, i = new Promise((function(t) {
									e = t
								})),
								r = {
									execute: e,
									onStart: function() {},
									onComplete: function() {},
									onError: function() {}
								};
							return this.append(r, t), i
						}, e.executeNext = function(t) {
							var e = this.buffers,
								i = this.queues,
								r = e[t],
								a = i[t];
							if (a.length) {
								var n = a[0];
								try {
									n.execute()
								} catch (e) {
									l.b.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), n.onError(e), r && r.updating || (a.shift(), this.executeNext(t))
								}
							}
						}, e.shiftAndExecuteNext = function(t) {
							this.queues[t].shift(), this.executeNext(t)
						}, e.current = function(t) {
							return this.queues[t][0]
						}, t
					}(),
					_e = $t(),
					Ie = /([ha]vc.)(?:\.[^.,]+)+/,
					Oe = function() {
						function t(t) {
							var e = this;
							this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
								var t = e.hls,
									i = e.media,
									r = e.mediaSource;
								l.b.log("[buffer-controller]: Media source opened"), i && (e.updateMediaElementDuration(), t.trigger(s.a.MEDIA_ATTACHED, {
									media: i
								})), r && r.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
							}, this._onMediaSourceClose = function() {
								l.b.log("[buffer-controller]: Media source closed")
							}, this._onMediaSourceEnded = function() {
								l.b.log("[buffer-controller]: Media source ended")
							}, this.hls = t, this._initSourceBuffer(), this.registerListeners()
						}
						var e = t.prototype;
						return e.hasSourceTypes = function() {
							return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
						}, e.destroy = function() {
							this.unregisterListeners(), this.details = null
						}, e.registerListeners = function() {
							var t = this.hls;
							t.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.BUFFER_RESET, this.onBufferReset, this), t.on(s.a.BUFFER_APPENDING, this.onBufferAppending, this), t.on(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.on(s.a.BUFFER_EOS, this.onBufferEos, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(s.a.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(s.a.FRAG_PARSED, this.onFragParsed, this), t.on(s.a.FRAG_CHANGED, this.onFragChanged, this)
						}, e.unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.BUFFER_RESET, this.onBufferReset, this), t.off(s.a.BUFFER_APPENDING, this.onBufferAppending, this), t.off(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.off(s.a.BUFFER_EOS, this.onBufferEos, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(s.a.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(s.a.FRAG_PARSED, this.onFragParsed, this), t.off(s.a.FRAG_CHANGED, this.onFragChanged, this)
						}, e._initSourceBuffer = function() {
							this.sourceBuffer = {}, this.operationQueue = new ke(this.sourceBuffer), this.listeners = {
								audio: [],
								video: [],
								audiovideo: []
							}
						}, e.onManifestParsed = function(t, e) {
							var i = 2;
							(e.audio && !e.video || !e.altAudio) && (i = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i, this.details = null, l.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
						}, e.onMediaAttaching = function(t, e) {
							var i = this.media = e.media;
							if (i && _e) {
								var r = this.mediaSource = new _e;
								r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), i.src = self.URL.createObjectURL(r), this._objectUrl = i.src
							}
						}, e.onMediaDetaching = function() {
							var t = this.media,
								e = this.mediaSource,
								i = this._objectUrl;
							if (e) {
								if (l.b.log("[buffer-controller]: media source detaching"), "open" === e.readyState) try {
									e.endOfStream()
								} catch (t) {
									l.b.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
								}
								this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (i && self.URL.revokeObjectURL(i), t.src === i ? (t.removeAttribute("src"), t.load()) : l.b.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
							}
							this.hls.trigger(s.a.MEDIA_DETACHED, void 0)
						}, e.onBufferReset = function() {
							var t = this;
							this.getSourceBufferTypes().forEach((function(e) {
								var i = t.sourceBuffer[e];
								try {
									i && (t.removeBufferListeners(e), t.mediaSource && t.mediaSource.removeSourceBuffer(i), t.sourceBuffer[e] = void 0)
								} catch (t) {
									l.b.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
								}
							})), this._initSourceBuffer()
						}, e.onBufferCodecs = function(t, e) {
							var i = this,
								r = this.getSourceBufferTypes().length;
							Object.keys(e).forEach((function(t) {
								if (r) {
									var a = i.tracks[t];
									if (a && "function" == typeof a.buffer.changeType) {
										var n = e[t],
											s = n.id,
											o = n.codec,
											u = n.levelCodec,
											h = n.container,
											d = n.metadata,
											c = (a.levelCodec || a.codec).replace(Ie, "$1"),
											f = (u || o).replace(Ie, "$1");
										if (c !== f) {
											var g = h + ";codecs=" + (u || o);
											i.appendChangeType(t, g), l.b.log("[buffer-controller]: switching codec " + c + " to " + f), i.tracks[t] = {
												buffer: a.buffer,
												codec: o,
												container: h,
												levelCodec: u,
												metadata: d,
												id: s
											}
										}
									}
								} else i.pendingTracks[t] = e[t]
							})), r || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
						}, e.appendChangeType = function(t, e) {
							var i = this,
								r = this.operationQueue,
								a = {
									execute: function() {
										var a = i.sourceBuffer[t];
										a && (l.b.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), a.changeType(e)), r.shiftAndExecuteNext(t)
									},
									onStart: function() {},
									onComplete: function() {},
									onError: function(e) {
										l.b.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
									}
								};
							r.append(a, t)
						}, e.onBufferAppending = function(t, e) {
							var i = this,
								r = this.hls,
								a = this.operationQueue,
								n = this.tracks,
								u = e.data,
								h = e.type,
								d = e.frag,
								c = e.part,
								f = e.chunkMeta,
								g = f.buffering[h],
								v = self.performance.now();
							g.start = v;
							var p = d.stats.buffering,
								m = c ? c.stats.buffering : null;
							0 === p.start && (p.start = v), m && 0 === m.start && (m.start = v);
							var y = n.audio,
								T = "audio" === h && 1 === f.id && "audio/mpeg" === (null == y ? void 0 : y.container),
								b = {
									execute: function() {
										if (g.executeStart = self.performance.now(), T) {
											var t = i.sourceBuffer[h];
											if (t) {
												var e = d.start - t.timestampOffset;
												Math.abs(e) >= .1 && (l.b.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + d.start + " (delta: " + e + ") sn: " + d.sn + ")"), t.timestampOffset = d.start)
											}
										}
										i.appendExecutor(u, h)
									},
									onStart: function() {},
									onComplete: function() {
										var t = self.performance.now();
										g.executeEnd = g.end = t, 0 === p.first && (p.first = t), m && 0 === m.first && (m.first = t);
										var e = i.sourceBuffer,
											r = {};
										for (var a in e) r[a] = mt.getBuffered(e[a]);
										i.appendError = 0, i.hls.trigger(s.a.BUFFER_APPENDED, {
											type: h,
											frag: d,
											part: c,
											chunkMeta: f,
											parent: d.type,
											timeRanges: r
										})
									},
									onError: function(t) {
										l.b.error("[buffer-controller]: Error encountered while trying to append to the " + h + " SourceBuffer", t);
										var e = {
											type: o.b.MEDIA_ERROR,
											parent: d.type,
											details: o.a.BUFFER_APPEND_ERROR,
											err: t,
											fatal: !1
										};
										t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = o.a.BUFFER_FULL_ERROR : (i.appendError++, e.details = o.a.BUFFER_APPEND_ERROR, i.appendError > r.config.appendErrorMaxRetry && (l.b.error("[buffer-controller]: Failed " + r.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0)), r.trigger(s.a.ERROR, e)
									}
								};
							a.append(b, h)
						}, e.onBufferFlushing = function(t, e) {
							var i = this,
								r = this.operationQueue,
								a = function(t) {
									return {
										execute: i.removeExecutor.bind(i, t, e.startOffset, e.endOffset),
										onStart: function() {},
										onComplete: function() {
											i.hls.trigger(s.a.BUFFER_FLUSHED, {
												type: t
											})
										},
										onError: function(e) {
											l.b.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
										}
									}
								};
							e.type ? r.append(a(e.type), e.type) : this.getSourceBufferTypes().forEach((function(t) {
								r.append(a(t), t)
							}))
						}, e.onFragParsed = function(t, e) {
							var i = this,
								r = e.frag,
								a = e.part,
								n = [],
								o = a ? a.elementaryStreams : r.elementaryStreams;
							o[p.a.AUDIOVIDEO] ? n.push("audiovideo") : (o[p.a.AUDIO] && n.push("audio"), o[p.a.VIDEO] && n.push("video")), 0 === n.length && l.b.warn("Fragments must have at least one ElementaryStreamType set. type: " + r.type + " level: " + r.level + " sn: " + r.sn), this.blockBuffers((function() {
								var t = self.performance.now();
								r.stats.buffering.end = t, a && (a.stats.buffering.end = t);
								var e = a ? a.stats : r.stats;
								i.hls.trigger(s.a.FRAG_BUFFERED, {
									frag: r,
									part: a,
									stats: e,
									id: r.type
								})
							}), n)
						}, e.onFragChanged = function(t, e) {
							this.flushBackBuffer()
						}, e.onBufferEos = function(t, e) {
							var i = this;
							this.getSourceBufferTypes().reduce((function(t, r) {
								var a = i.sourceBuffer[r];
								return e.type && e.type !== r || a && !a.ended && (a.ended = !0, l.b.log("[buffer-controller]: " + r + " sourceBuffer now EOS")), t && !(a && !a.ended)
							}), !0) && this.blockBuffers((function() {
								var t = i.mediaSource;
								t && "open" === t.readyState && t.endOfStream()
							}))
						}, e.onLevelUpdated = function(t, e) {
							var i = e.details;
							i.fragments.length && (this.details = i, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
						}, e.flushBackBuffer = function() {
							var t = this.hls,
								e = this.details,
								i = this.media,
								r = this.sourceBuffer;
							if (i && null !== e) {
								var a = this.getSourceBufferTypes();
								if (a.length) {
									var o = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
									if (Object(n.a)(o) && !(o < 0)) {
										var l = i.currentTime,
											u = e.levelTargetDuration,
											h = Math.max(o, u),
											d = Math.floor(l / u) * u - h;
										a.forEach((function(i) {
											var a = r[i];
											if (a) {
												var n = mt.getBuffered(a);
												n.length > 0 && d > n.start(0) && (t.trigger(s.a.BACK_BUFFER_REACHED, {
													bufferEnd: d
												}), e.live && t.trigger(s.a.LIVE_BACK_BUFFER_REACHED, {
													bufferEnd: d
												}), t.trigger(s.a.BUFFER_FLUSHING, {
													startOffset: 0,
													endOffset: d,
													type: i
												}))
											}
										}))
									}
								}
							}
						}, e.updateMediaElementDuration = function() {
							if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
								var t = this.details,
									e = this.hls,
									i = this.media,
									r = this.mediaSource,
									a = t.fragments[0].start + t.totalduration,
									s = i.duration,
									o = Object(n.a)(r.duration) ? r.duration : 0;
								t.live && e.config.liveDurationInfinity ? (l.b.log("[buffer-controller]: Media Source duration is set to Infinity"), r.duration = 1 / 0, this.updateSeekableRange(t)) : (a > o && a > s || !Object(n.a)(s)) && (l.b.log("[buffer-controller]: Updating Media Source duration to " + a.toFixed(3)), r.duration = a)
							}
						}, e.updateSeekableRange = function(t) {
							var e = this.mediaSource,
								i = t.fragments;
							if (i.length && t.live && null != e && e.setLiveSeekableRange) {
								var r = Math.max(0, i[0].start),
									a = Math.max(r, r + t.totalduration);
								e.setLiveSeekableRange(r, a)
							}
						}, e.checkPendingTracks = function() {
							var t = this.bufferCodecEventsExpected,
								e = this.operationQueue,
								i = this.pendingTracks,
								r = Object.keys(i).length;
							if (r && !t || 2 === r) {
								this.createSourceBuffers(i), this.pendingTracks = {};
								var a = this.getSourceBufferTypes();
								if (0 === a.length) return void this.hls.trigger(s.a.ERROR, {
									type: o.b.MEDIA_ERROR,
									details: o.a.BUFFER_INCOMPATIBLE_CODECS_ERROR,
									fatal: !0,
									reason: "could not create source buffer for media codec(s)"
								});
								a.forEach((function(t) {
									e.executeNext(t)
								}))
							}
						}, e.createSourceBuffers = function(t) {
							var e = this.sourceBuffer,
								i = this.mediaSource;
							if (!i) throw Error("createSourceBuffers called when mediaSource was null");
							var r = 0;
							for (var a in t)
								if (!e[a]) {
									var n = t[a];
									if (!n) throw Error("source buffer exists for track " + a + ", however track does not");
									var u = n.levelCodec || n.codec,
										h = n.container + ";codecs=" + u;
									l.b.log("[buffer-controller]: creating sourceBuffer(" + h + ")");
									try {
										var d = e[a] = i.addSourceBuffer(h),
											c = a;
										this.addBufferListener(c, "updatestart", this._onSBUpdateStart), this.addBufferListener(c, "updateend", this._onSBUpdateEnd), this.addBufferListener(c, "error", this._onSBUpdateError), this.tracks[a] = {
											buffer: d,
											codec: u,
											container: n.container,
											levelCodec: n.levelCodec,
											metadata: n.metadata,
											id: n.id
										}, r++
									} catch (t) {
										l.b.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message), this.hls.trigger(s.a.ERROR, {
											type: o.b.MEDIA_ERROR,
											details: o.a.BUFFER_ADD_CODEC_ERROR,
											fatal: !1,
											error: t,
											mimeType: h
										})
									}
								} r && this.hls.trigger(s.a.BUFFER_CREATED, {
								tracks: this.tracks
							})
						}, e._onSBUpdateStart = function(t) {
							this.operationQueue.current(t).onStart()
						}, e._onSBUpdateEnd = function(t) {
							var e = this.operationQueue;
							e.current(t).onComplete(), e.shiftAndExecuteNext(t)
						}, e._onSBUpdateError = function(t, e) {
							l.b.error("[buffer-controller]: " + t + " SourceBuffer error", e), this.hls.trigger(s.a.ERROR, {
								type: o.b.MEDIA_ERROR,
								details: o.a.BUFFER_APPENDING_ERROR,
								fatal: !1
							});
							var i = this.operationQueue.current(t);
							i && i.onError(e)
						}, e.removeExecutor = function(t, e, i) {
							var r = this.media,
								a = this.mediaSource,
								s = this.operationQueue,
								o = this.sourceBuffer[t];
							if (!r || !a || !o) return l.b.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void s.shiftAndExecuteNext(t);
							var u = Object(n.a)(r.duration) ? r.duration : 1 / 0,
								h = Object(n.a)(a.duration) ? a.duration : 1 / 0,
								d = Math.max(0, e),
								c = Math.min(i, u, h);
							c > d ? (l.b.log("[buffer-controller]: Removing [" + d + "," + c + "] from the " + t + " SourceBuffer"), o.remove(d, c)) : s.shiftAndExecuteNext(t)
						}, e.appendExecutor = function(t, e) {
							var i = this.operationQueue,
								r = this.sourceBuffer[e];
							if (!r) return l.b.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), void i.shiftAndExecuteNext(e);
							r.ended = !1, r.appendBuffer(t)
						}, e.blockBuffers = function(t, e) {
							var i = this;
							if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return l.b.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
							var r = this.operationQueue,
								a = e.map((function(t) {
									return r.appendBlocker(t)
								}));
							Promise.all(a).then((function() {
								t(), e.forEach((function(t) {
									var e = i.sourceBuffer[t];
									e && e.updating || r.shiftAndExecuteNext(t)
								}))
							}))
						}, e.getSourceBufferTypes = function() {
							return Object.keys(this.sourceBuffer)
						}, e.addBufferListener = function(t, e, i) {
							var r = this.sourceBuffer[t];
							if (r) {
								var a = i.bind(this, t);
								this.listeners[t].push({
									event: e,
									listener: a
								}), r.addEventListener(e, a)
							}
						}, e.removeBufferListeners = function(t) {
							var e = this.sourceBuffer[t];
							e && this.listeners[t].forEach((function(t) {
								e.removeEventListener(t.event, t.listener)
							}))
						}, t
					}(),
					Ce = {
						42: 225,
						92: 233,
						94: 237,
						95: 243,
						96: 250,
						123: 231,
						124: 247,
						125: 209,
						126: 241,
						127: 9608,
						128: 174,
						129: 176,
						130: 189,
						131: 191,
						132: 8482,
						133: 162,
						134: 163,
						135: 9834,
						136: 224,
						137: 32,
						138: 232,
						139: 226,
						140: 234,
						141: 238,
						142: 244,
						143: 251,
						144: 193,
						145: 201,
						146: 211,
						147: 218,
						148: 220,
						149: 252,
						150: 8216,
						151: 161,
						152: 42,
						153: 8217,
						154: 9473,
						155: 169,
						156: 8480,
						157: 8226,
						158: 8220,
						159: 8221,
						160: 192,
						161: 194,
						162: 199,
						163: 200,
						164: 202,
						165: 203,
						166: 235,
						167: 206,
						168: 207,
						169: 239,
						170: 212,
						171: 217,
						172: 249,
						173: 219,
						174: 171,
						175: 187,
						176: 195,
						177: 227,
						178: 205,
						179: 204,
						180: 236,
						181: 210,
						182: 242,
						183: 213,
						184: 245,
						185: 123,
						186: 125,
						187: 92,
						188: 94,
						189: 95,
						190: 124,
						191: 8764,
						192: 196,
						193: 228,
						194: 214,
						195: 246,
						196: 223,
						197: 165,
						198: 164,
						199: 9475,
						200: 197,
						201: 229,
						202: 216,
						203: 248,
						204: 9487,
						205: 9491,
						206: 9495,
						207: 9499
					},
					we = function(t) {
						var e = t;
						return Ce.hasOwnProperty(t) && (e = Ce[t]), String.fromCharCode(e)
					},
					xe = {
						17: 1,
						18: 3,
						21: 5,
						22: 7,
						23: 9,
						16: 11,
						19: 12,
						20: 14
					},
					Pe = {
						17: 2,
						18: 4,
						21: 6,
						22: 8,
						23: 10,
						19: 13,
						20: 15
					},
					Fe = {
						25: 1,
						26: 3,
						29: 5,
						30: 7,
						31: 9,
						24: 11,
						27: 12,
						28: 14
					},
					Me = {
						25: 2,
						26: 4,
						29: 6,
						30: 8,
						31: 10,
						27: 13,
						28: 15
					},
					Ne = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
				! function(t) {
					t[t.ERROR = 0] = "ERROR", t[t.TEXT = 1] = "TEXT", t[t.WARNING = 2] = "WARNING", t[t.INFO = 2] = "INFO", t[t.DEBUG = 3] = "DEBUG", t[t.DATA = 3] = "DATA"
				}(De || (De = {}));
				var Ue = function() {
						function t() {
							this.time = null, this.verboseLevel = De.ERROR
						}
						return t.prototype.log = function(t, e) {
							this.verboseLevel >= t && l.b.log(this.time + " [" + t + "] " + e)
						}, t
					}(),
					Be = function(t) {
						for (var e = [], i = 0; i < t.length; i++) e.push(t[i].toString(16));
						return e
					},
					Ge = function() {
						function t(t, e, i, r, a) {
							this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = i || !1, this.background = r || "black", this.flash = a || !1
						}
						var e = t.prototype;
						return e.reset = function() {
							this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
						}, e.setStyles = function(t) {
							for (var e = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < e.length; i++) {
								var r = e[i];
								t.hasOwnProperty(r) && (this[r] = t[r])
							}
						}, e.isDefault = function() {
							return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
						}, e.equals = function(t) {
							return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
						}, e.copy = function(t) {
							this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
						}, e.toString = function() {
							return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
						}, t
					}(),
					je = function() {
						function t(t, e, i, r, a, n) {
							this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new Ge(e, i, r, a, n)
						}
						var e = t.prototype;
						return e.reset = function() {
							this.uchar = " ", this.penState.reset()
						}, e.setChar = function(t, e) {
							this.uchar = t, this.penState.copy(e)
						}, e.setPenState = function(t) {
							this.penState.copy(t)
						}, e.equals = function(t) {
							return this.uchar === t.uchar && this.penState.equals(t.penState)
						}, e.copy = function(t) {
							this.uchar = t.uchar, this.penState.copy(t.penState)
						}, e.isEmpty = function() {
							return " " === this.uchar && this.penState.isDefault()
						}, t
					}(),
					Ke = function() {
						function t(t) {
							this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
							for (var e = 0; e < 100; e++) this.chars.push(new je);
							this.logger = t, this.pos = 0, this.currPenState = new Ge
						}
						var e = t.prototype;
						return e.equals = function(t) {
							for (var e = !0, i = 0; i < 100; i++)
								if (!this.chars[i].equals(t.chars[i])) {
									e = !1;
									break
								} return e
						}, e.copy = function(t) {
							for (var e = 0; e < 100; e++) this.chars[e].copy(t.chars[e])
						}, e.isEmpty = function() {
							for (var t = !0, e = 0; e < 100; e++)
								if (!this.chars[e].isEmpty()) {
									t = !1;
									break
								} return t
						}, e.setCursor = function(t) {
							this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(De.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(De.DEBUG, "Too large cursor position " + this.pos), this.pos = 100)
						}, e.moveCursor = function(t) {
							var e = this.pos + t;
							if (t > 1)
								for (var i = this.pos + 1; i < e + 1; i++) this.chars[i].setPenState(this.currPenState);
							this.setCursor(e)
						}, e.backSpace = function() {
							this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
						}, e.insertChar = function(t) {
							t >= 144 && this.backSpace();
							var e = we(t);
							this.pos >= 100 ? this.logger.log(De.ERROR, "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
						}, e.clearFromPos = function(t) {
							var e;
							for (e = t; e < 100; e++) this.chars[e].reset()
						}, e.clear = function() {
							this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
						}, e.clearToEndOfRow = function() {
							this.clearFromPos(this.pos)
						}, e.getTextString = function() {
							for (var t = [], e = !0, i = 0; i < 100; i++) {
								var r = this.chars[i].uchar;
								" " !== r && (e = !1), t.push(r)
							}
							return e ? "" : t.join("")
						}, e.setPenStyles = function(t) {
							this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
						}, t
					}(),
					He = function() {
						function t(t) {
							this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
							for (var e = 0; e < 15; e++) this.rows.push(new Ke(t));
							this.logger = t, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
						}
						var e = t.prototype;
						return e.reset = function() {
							for (var t = 0; t < 15; t++) this.rows[t].clear();
							this.currRow = 14
						}, e.equals = function(t) {
							for (var e = !0, i = 0; i < 15; i++)
								if (!this.rows[i].equals(t.rows[i])) {
									e = !1;
									break
								} return e
						}, e.copy = function(t) {
							for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e])
						}, e.isEmpty = function() {
							for (var t = !0, e = 0; e < 15; e++)
								if (!this.rows[e].isEmpty()) {
									t = !1;
									break
								} return t
						}, e.backSpace = function() {
							this.rows[this.currRow].backSpace()
						}, e.clearToEndOfRow = function() {
							this.rows[this.currRow].clearToEndOfRow()
						}, e.insertChar = function(t) {
							this.rows[this.currRow].insertChar(t)
						}, e.setPen = function(t) {
							this.rows[this.currRow].setPenStyles(t)
						}, e.moveCursor = function(t) {
							this.rows[this.currRow].moveCursor(t)
						}, e.setCursor = function(t) {
							this.logger.log(De.INFO, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
						}, e.setPAC = function(t) {
							this.logger.log(De.INFO, "pacData = " + JSON.stringify(t));
							var e = t.row - 1;
							if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
								for (var i = 0; i < 15; i++) this.rows[i].clear();
								var r = this.currRow + 1 - this.nrRollUpRows,
									a = this.lastOutputScreen;
								if (a) {
									var n = a.rows[r].cueStartTime,
										s = this.logger.time;
									if (n && null !== s && n < s)
										for (var o = 0; o < this.nrRollUpRows; o++) this.rows[e - this.nrRollUpRows + o + 1].copy(a.rows[r + o])
								}
							}
							this.currRow = e;
							var l = this.rows[this.currRow];
							if (null !== t.indent) {
								var u = t.indent,
									h = Math.max(u - 1, 0);
								l.setCursor(t.indent), t.color = l.chars[h].penState.foreground
							}
							var d = {
								foreground: t.color,
								underline: t.underline,
								italics: t.italics,
								background: "black",
								flash: !1
							};
							this.setPen(d)
						}, e.setBkgData = function(t) {
							this.logger.log(De.INFO, "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
						}, e.setRollUpRows = function(t) {
							this.nrRollUpRows = t
						}, e.rollUp = function() {
							if (null !== this.nrRollUpRows) {
								this.logger.log(De.TEXT, this.getDisplayText());
								var t = this.currRow + 1 - this.nrRollUpRows,
									e = this.rows.splice(t, 1)[0];
								e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(De.INFO, "Rolling up")
							} else this.logger.log(De.DEBUG, "roll_up but nrRollUpRows not set yet")
						}, e.getDisplayText = function(t) {
							t = t || !1;
							for (var e = [], i = "", r = -1, a = 0; a < 15; a++) {
								var n = this.rows[a].getTextString();
								n && (r = a + 1, t ? e.push("Row " + r + ": '" + n + "'") : e.push(n.trim()))
							}
							return e.length > 0 && (i = t ? "[" + e.join(" | ") + "]" : e.join("\n")), i
						}, e.getTextAndFormat = function() {
							return this.rows
						}, t
					}(),
					Ve = function() {
						function t(t, e, i) {
							this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new He(i), this.nonDisplayedMemory = new He(i), this.lastOutputScreen = new He(i), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = i
						}
						var e = t.prototype;
						return e.reset = function() {
							this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
						}, e.getHandler = function() {
							return this.outputFilter
						}, e.setHandler = function(t) {
							this.outputFilter = t
						}, e.setPAC = function(t) {
							this.writeScreen.setPAC(t)
						}, e.setBkgData = function(t) {
							this.writeScreen.setBkgData(t)
						}, e.setMode = function(t) {
							t !== this.mode && (this.mode = t, this.logger.log(De.INFO, "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
						}, e.insertChars = function(t) {
							for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
							var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
							this.logger.log(De.INFO, i + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(De.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
						}, e.ccRCL = function() {
							this.logger.log(De.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
						}, e.ccBS = function() {
							this.logger.log(De.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
						}, e.ccAOF = function() {}, e.ccAON = function() {}, e.ccDER = function() {
							this.logger.log(De.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
						}, e.ccRU = function(t) {
							this.logger.log(De.INFO, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
						}, e.ccFON = function() {
							this.logger.log(De.INFO, "FON - Flash On"), this.writeScreen.setPen({
								flash: !0
							})
						}, e.ccRDC = function() {
							this.logger.log(De.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
						}, e.ccTR = function() {
							this.logger.log(De.INFO, "TR"), this.setMode("MODE_TEXT")
						}, e.ccRTD = function() {
							this.logger.log(De.INFO, "RTD"), this.setMode("MODE_TEXT")
						}, e.ccEDM = function() {
							this.logger.log(De.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
						}, e.ccCR = function() {
							this.logger.log(De.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
						}, e.ccENM = function() {
							this.logger.log(De.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
						}, e.ccEOC = function() {
							if (this.logger.log(De.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
								var t = this.displayedMemory;
								this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(De.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
							}
							this.outputDataUpdate(!0)
						}, e.ccTO = function(t) {
							this.logger.log(De.INFO, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
						}, e.ccMIDROW = function(t) {
							var e = {
								flash: !1
							};
							if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
							else {
								var i = Math.floor(t / 2) - 16;
								e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][i]
							}
							this.logger.log(De.INFO, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
						}, e.outputDataUpdate = function(t) {
							void 0 === t && (t = !1);
							var e = this.logger.time;
							null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
						}, e.cueSplitAtTime = function(t) {
							this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
						}, t
					}();

				function We(t, e, i) {
					i.a = t, i.b = e
				}

				function Ye(t, e, i) {
					return i.a === t && i.b === e
				}
				var qe = function() {
						function t(t, e, i) {
							this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
							var r = new Ue;
							this.channels = [null, new Ve(t, e, r), new Ve(t + 1, i, r)], this.cmdHistory = {
								a: null,
								b: null
							}, this.logger = r
						}
						var e = t.prototype;
						return e.getHandler = function(t) {
							return this.channels[t].getHandler()
						}, e.setHandler = function(t, e) {
							this.channels[t].setHandler(e)
						}, e.addData = function(t, e) {
							var i, r, a, n = !1;
							this.logger.time = t;
							for (var s = 0; s < e.length; s += 2)
								if (r = 127 & e[s], a = 127 & e[s + 1], 0 !== r || 0 !== a) {
									if (this.logger.log(De.DATA, "[" + Be([e[s], e[s + 1]]) + "] -> (" + Be([r, a]) + ")"), (i = this.parseCmd(r, a)) || (i = this.parseMidrow(r, a)), i || (i = this.parsePAC(r, a)), i || (i = this.parseBackgroundAttributes(r, a)), !i && (n = this.parseChars(r, a))) {
										var o = this.currentChannel;
										o && o > 0 ? this.channels[o].insertChars(n) : this.logger.log(De.WARNING, "No channel found yet. TEXT-MODE?")
									}
									i || n || this.logger.log(De.WARNING, "Couldn't parse cleaned data " + Be([r, a]) + " orig: " + Be([e[s], e[s + 1]]))
								}
						}, e.parseCmd = function(t, e) {
							var i = this.cmdHistory;
							if (!((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
							if (Ye(t, e, i)) return We(null, null, i), this.logger.log(De.DEBUG, "Repeated command (" + Be([t, e]) + ") is dropped"), !0;
							var r = 20 === t || 21 === t || 23 === t ? 1 : 2,
								a = this.channels[r];
							return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? a.ccRCL() : 33 === e ? a.ccBS() : 34 === e ? a.ccAOF() : 35 === e ? a.ccAON() : 36 === e ? a.ccDER() : 37 === e ? a.ccRU(2) : 38 === e ? a.ccRU(3) : 39 === e ? a.ccRU(4) : 40 === e ? a.ccFON() : 41 === e ? a.ccRDC() : 42 === e ? a.ccTR() : 43 === e ? a.ccRTD() : 44 === e ? a.ccEDM() : 45 === e ? a.ccCR() : 46 === e ? a.ccENM() : 47 === e && a.ccEOC() : a.ccTO(e - 32), We(t, e, i), this.currentChannel = r, !0
						}, e.parseMidrow = function(t, e) {
							var i = 0;
							if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
								if ((i = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(De.ERROR, "Mismatch channel in midrow parsing"), !1;
								var r = this.channels[i];
								return !!r && (r.ccMIDROW(e), this.logger.log(De.DEBUG, "MIDROW (" + Be([t, e]) + ")"), !0)
							}
							return !1
						}, e.parsePAC = function(t, e) {
							var i, r = this.cmdHistory;
							if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
							if (Ye(t, e, r)) return We(null, null, r), !0;
							var a = t <= 23 ? 1 : 2;
							i = e >= 64 && e <= 95 ? 1 === a ? xe[t] : Fe[t] : 1 === a ? Pe[t] : Me[t];
							var n = this.channels[a];
							return !!n && (n.setPAC(this.interpretPAC(i, e)), We(t, e, r), this.currentChannel = a, !0)
						}, e.interpretPAC = function(t, e) {
							var i, r = {
								color: null,
								italics: !1,
								indent: null,
								underline: !1,
								row: t
							};
							return i = e > 95 ? e - 96 : e - 64, r.underline = 1 == (1 & i), i <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (r.italics = !0, r.color = "white") : r.indent = 4 * Math.floor((i - 16) / 2), r
						}, e.parseChars = function(t, e) {
							var i, r, a = null,
								n = null;
							if (t >= 25 ? (i = 2, n = t - 8) : (i = 1, n = t), n >= 17 && n <= 19 ? (r = 17 === n ? e + 80 : 18 === n ? e + 112 : e + 144, this.logger.log(De.INFO, "Special char '" + we(r) + "' in channel " + i), a = [r]) : t >= 32 && t <= 127 && (a = 0 === e ? [t] : [t, e]), a) {
								var s = Be(a);
								this.logger.log(De.DEBUG, "Char codes =  " + s.join(",")), We(t, e, this.cmdHistory)
							}
							return a
						}, e.parseBackgroundAttributes = function(t, e) {
							var i;
							if (!((16 === t || 24 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 45 && e <= 47)) return !1;
							var r = {};
							16 === t || 24 === t ? (i = Math.floor((e - 32) / 2), r.background = Ne[i], e % 2 == 1 && (r.background = r.background + "_semi")) : 45 === e ? r.background = "transparent" : (r.foreground = "black", 47 === e && (r.underline = !0));
							var a = t <= 23 ? 1 : 2;
							return this.channels[a].setBkgData(r), We(t, e, this.cmdHistory), !0
						}, e.reset = function() {
							for (var t = 0; t < Object.keys(this.channels).length; t++) {
								var e = this.channels[t];
								e && e.reset()
							}
							this.cmdHistory = {
								a: null,
								b: null
							}
						}, e.cueSplitAtTime = function(t) {
							for (var e = 0; e < this.channels.length; e++) {
								var i = this.channels[e];
								i && i.cueSplitAtTime(t)
							}
						}, t
					}(),
					ze = function() {
						function t(t, e) {
							this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
						}
						var e = t.prototype;
						return e.dispatchCue = function() {
							null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
						}, e.newCue = function(t, e, i) {
							(null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = i, this.timelineController.createCaptionsTrack(this.trackName)
						}, e.reset = function() {
							this.cueRanges = [], this.startTime = null
						}, t
					}(),
					Xe = function() {
						if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
						var t = ["", "lr", "rl"],
							e = ["start", "middle", "end", "left", "right"];

						function i(t, e) {
							if ("string" != typeof e) return !1;
							if (!Array.isArray(t)) return !1;
							var i = e.toLowerCase();
							return !!~t.indexOf(i) && i
						}

						function r(t) {
							return i(e, t)
						}

						function a(t) {
							for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
							for (var a = 1; a < arguments.length; a++) {
								var n = arguments[a];
								for (var s in n) t[s] = n[s]
							}
							return t
						}

						function n(e, n, s) {
							var o = this,
								l = {
									enumerable: !0
								};
							o.hasBeenReset = !1;
							var u = "",
								h = !1,
								d = e,
								c = n,
								f = s,
								g = null,
								v = "",
								p = !0,
								m = "auto",
								y = "start",
								T = 50,
								b = "middle",
								E = 50,
								S = "middle";
							Object.defineProperty(o, "id", a({}, l, {
								get: function() {
									return u
								},
								set: function(t) {
									u = "" + t
								}
							})), Object.defineProperty(o, "pauseOnExit", a({}, l, {
								get: function() {
									return h
								},
								set: function(t) {
									h = !!t
								}
							})), Object.defineProperty(o, "startTime", a({}, l, {
								get: function() {
									return d
								},
								set: function(t) {
									if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
									d = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "endTime", a({}, l, {
								get: function() {
									return c
								},
								set: function(t) {
									if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
									c = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "text", a({}, l, {
								get: function() {
									return f
								},
								set: function(t) {
									f = "" + t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "region", a({}, l, {
								get: function() {
									return g
								},
								set: function(t) {
									g = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "vertical", a({}, l, {
								get: function() {
									return v
								},
								set: function(e) {
									var r = function(e) {
										return i(t, e)
									}(e);
									if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
									v = r, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "snapToLines", a({}, l, {
								get: function() {
									return p
								},
								set: function(t) {
									p = !!t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "line", a({}, l, {
								get: function() {
									return m
								},
								set: function(t) {
									if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
									m = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "lineAlign", a({}, l, {
								get: function() {
									return y
								},
								set: function(t) {
									var e = r(t);
									if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
									y = e, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "position", a({}, l, {
								get: function() {
									return T
								},
								set: function(t) {
									if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
									T = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "positionAlign", a({}, l, {
								get: function() {
									return b
								},
								set: function(t) {
									var e = r(t);
									if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
									b = e, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "size", a({}, l, {
								get: function() {
									return E
								},
								set: function(t) {
									if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
									E = t, this.hasBeenReset = !0
								}
							})), Object.defineProperty(o, "align", a({}, l, {
								get: function() {
									return S
								},
								set: function(t) {
									var e = r(t);
									if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
									S = e, this.hasBeenReset = !0
								}
							})), o.displayState = void 0
						}
						return n.prototype.getCueAsHTML = function() {
							return self.WebVTT.convertCueToDOMTree(self, this.text)
						}, n
					}(),
					Qe = function() {
						function t() {}
						return t.prototype.decode = function(t, e) {
							if (!t) return "";
							if ("string" != typeof t) throw new Error("Error - expected string data.");
							return decodeURIComponent(encodeURIComponent(t))
						}, t
					}();

				function $e(t) {
					function e(t, e, i, r) {
						return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + parseFloat(r || 0)
					}
					var i = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
					return i ? parseFloat(i[2]) > 59 ? e(i[2], i[3], 0, i[4]) : e(i[1], i[2], i[3], i[4]) : null
				}
				var Je = function() {
					function t() {
						this.values = Object.create(null)
					}
					var e = t.prototype;
					return e.set = function(t, e) {
						this.get(t) || "" === e || (this.values[t] = e)
					}, e.get = function(t, e, i) {
						return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
					}, e.has = function(t) {
						return t in this.values
					}, e.alt = function(t, e, i) {
						for (var r = 0; r < i.length; ++r)
							if (e === i[r]) {
								this.set(t, e);
								break
							}
					}, e.integer = function(t, e) {
						/^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
					}, e.percent = function(t, e) {
						if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
							var i = parseFloat(e);
							if (i >= 0 && i <= 100) return this.set(t, i), !0
						}
						return !1
					}, t
				}();

				function Ze(t, e, i, r) {
					var a = r ? t.split(r) : [t];
					for (var n in a)
						if ("string" == typeof a[n]) {
							var s = a[n].split(i);
							2 === s.length && e(s[0], s[1])
						}
				}
				var ti = new Xe(0, 0, ""),
					ei = "middle" === ti.align ? "middle" : "center";

				function ii(t, e, i) {
					var r = t;

					function a() {
						var e = $e(t);
						if (null === e) throw new Error("Malformed timestamp: " + r);
						return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
					}

					function n() {
						t = t.replace(/^\s+/, "")
					}
					if (n(), e.startTime = a(), n(), "--\x3e" !== t.slice(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + r);
					t = t.slice(3), n(), e.endTime = a(), n(),
						function(t, e) {
							var r = new Je;
							Ze(t, (function(t, e) {
								var a;
								switch (t) {
									case "region":
										for (var n = i.length - 1; n >= 0; n--)
											if (i[n].id === e) {
												r.set(t, i[n].region);
												break
											} break;
									case "vertical":
										r.alt(t, e, ["rl", "lr"]);
										break;
									case "line":
										a = e.split(","), r.integer(t, a[0]), r.percent(t, a[0]) && r.set("snapToLines", !1), r.alt(t, a[0], ["auto"]), 2 === a.length && r.alt("lineAlign", a[1], ["start", ei, "end"]);
										break;
									case "position":
										a = e.split(","), r.percent(t, a[0]), 2 === a.length && r.alt("positionAlign", a[1], ["start", ei, "end", "line-left", "line-right", "auto"]);
										break;
									case "size":
										r.percent(t, e);
										break;
									case "align":
										r.alt(t, e, ["start", ei, "end", "left", "right"])
								}
							}), /:/, /\s/), e.region = r.get("region", null), e.vertical = r.get("vertical", "");
							var a = r.get("line", "auto");
							"auto" === a && -1 === ti.line && (a = -1), e.line = a, e.lineAlign = r.get("lineAlign", "start"), e.snapToLines = r.get("snapToLines", !0), e.size = r.get("size", 100), e.align = r.get("align", ei);
							var n = r.get("position", "auto");
							"auto" === n && 50 === ti.position && (n = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = n
						}(t, e)
				}

				function ri(t) {
					return t.replace(/<br(?: \/)?>/gi, "\n")
				}
				var ai = function() {
						function t() {
							this.state = "INITIAL", this.buffer = "", this.decoder = new Qe, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
						}
						var e = t.prototype;
						return e.parse = function(t) {
							var e = this;

							function i() {
								var t = e.buffer,
									i = 0;
								for (t = ri(t); i < t.length && "\r" !== t[i] && "\n" !== t[i];) ++i;
								var r = t.slice(0, i);
								return "\r" === t[i] && ++i, "\n" === t[i] && ++i, e.buffer = t.slice(i), r
							}
							t && (e.buffer += e.decoder.decode(t, {
								stream: !0
							}));
							try {
								var r = "";
								if ("INITIAL" === e.state) {
									if (!/\r\n|\n/.test(e.buffer)) return this;
									var a = (r = i()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
									if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
									e.state = "HEADER"
								}
								for (var n = !1; e.buffer;) {
									if (!/\r\n|\n/.test(e.buffer)) return this;
									switch (n ? n = !1 : r = i(), e.state) {
										case "HEADER":
											/:/.test(r) ? Ze(r, (function(t, e) {}), /:/) : r || (e.state = "ID");
											continue;
										case "NOTE":
											r || (e.state = "ID");
											continue;
										case "ID":
											if (/^NOTE($|[ \t])/.test(r)) {
												e.state = "NOTE";
												break
											}
											if (!r) continue;
											if (e.cue = new Xe(0, 0, ""), e.state = "CUE", -1 === r.indexOf("--\x3e")) {
												e.cue.id = r;
												continue
											}
											case "CUE":
												if (!e.cue) {
													e.state = "BADCUE";
													continue
												}
												try {
													ii(r, e.cue, e.regionList)
												} catch (t) {
													e.cue = null, e.state = "BADCUE";
													continue
												}
												e.state = "CUETEXT";
												continue;
											case "CUETEXT":
												var s = -1 !== r.indexOf("--\x3e");
												if (!r || s && (n = !0)) {
													e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
													continue
												}
												if (null === e.cue) continue;
												e.cue.text && (e.cue.text += "\n"), e.cue.text += r;
												continue;
											case "BADCUE":
												r || (e.state = "ID")
									}
								}
							} catch (t) {
								"CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
							}
							return this
						}, e.flush = function() {
							try {
								if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw new Error("Malformed WebVTT signature.")
							} catch (t) {
								this.onparsingerror && this.onparsingerror(t)
							}
							return this.onflush && this.onflush(), this
						}, t
					}(),
					ni = i(9),
					si = i(13),
					oi = /\r\n|\n\r|\n|\r/g,
					li = function(t, e, i) {
						return void 0 === i && (i = 0), t.slice(i, i + e.length) === e
					},
					ui = function(t) {
						for (var e = 5381, i = t.length; i;) e = 33 * e ^ t.charCodeAt(--i);
						return (e >>> 0).toString()
					};

				function hi(t, e, i) {
					return ui(t.toString()) + ui(e.toString()) + ui(i)
				}

				function di(t, e, i, r, a, s, o, l) {
					var u, h = new ai,
						d = Object(G.f)(new Uint8Array(t)).trim().replace(oi, "\n").split("\n"),
						c = [],
						f = Object(ni.a)(e, i),
						g = "00:00.000",
						v = 0,
						p = 0,
						m = !0;
					h.oncue = function(t) {
						var e = r[a],
							i = r.ccOffset,
							n = (v - f) / 9e4;
						null != e && e.new && (void 0 !== p ? i = r.ccOffset = e.start : function(t, e, i) {
							var r = t[e],
								a = t[r.prevCC];
							if (!a || !a.new && r.new) return t.ccOffset = t.presentationOffset = r.start, void(r.new = !1);
							for (; null !== (n = a) && void 0 !== n && n.new;) {
								var n;
								t.ccOffset += r.start - a.start, r.new = !1, a = t[(r = a).prevCC]
							}
							t.presentationOffset = i
						}(r, a, n)), n && (i = n - r.presentationOffset);
						var o = t.endTime - t.startTime,
							l = Object(si.d)(9e4 * (t.startTime + i - p), 9e4 * s) / 9e4;
						t.startTime = Math.max(l, 0), t.endTime = Math.max(l + o, 0);
						var u = t.text.trim();
						t.text = decodeURIComponent(encodeURIComponent(u)), t.id || (t.id = hi(t.startTime, t.endTime, u)), t.endTime > 0 && c.push(t)
					}, h.onparsingerror = function(t) {
						u = t
					}, h.onflush = function() {
						u ? l(u) : o(c)
					}, d.forEach((function(t) {
						if (m) {
							if (li(t, "X-TIMESTAMP-MAP=")) {
								m = !1, t.slice(16).split(",").forEach((function(t) {
									li(t, "LOCAL:") ? g = t.slice(6) : li(t, "MPEGTS:") && (v = parseInt(t.slice(7)))
								}));
								try {
									p = function(t) {
										var e = parseInt(t.slice(-3)),
											i = parseInt(t.slice(-6, -4)),
											r = parseInt(t.slice(-9, -7)),
											a = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
										if (!(Object(n.a)(e) && Object(n.a)(i) && Object(n.a)(r) && Object(n.a)(a))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
										return e += 1e3 * i, (e += 6e4 * r) + 36e5 * a
									}(g) / 1e3
								} catch (t) {
									u = t
								}
								return
							}
							"" === t && (m = !1)
						}
						h.parse(t + "\n")
					})), h.flush()
				}

				function ci() {
					return (ci = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}
				var fi = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
					gi = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
					vi = {
						left: "start",
						center: "center",
						right: "end",
						start: "start",
						end: "end"
					};

				function pi(t, e, i, r, a) {
					var n = Object(u.c)(new Uint8Array(t), ["mdat"]);
					if (0 !== n.length) {
						var s = n.map((function(t) {
								return Object(G.f)(t)
							})),
							o = Object(ni.c)(e, 1, i);
						try {
							s.forEach((function(t) {
								return r(function(t, e) {
									var i = (new DOMParser).parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
									if (!i) throw new Error("Invalid ttml");
									var r = {
											frameRate: 30,
											subFrameRate: 1,
											frameRateMultiplier: 0,
											tickRate: 0
										},
										a = Object.keys(r).reduce((function(t, e) {
											return t[e] = i.getAttribute("ttp:" + e) || r[e], t
										}), {}),
										n = "preserve" !== i.getAttribute("xml:space"),
										s = yi(mi(i, "styling", "style")),
										o = yi(mi(i, "layout", "region")),
										l = mi(i, "body", "[begin]");
									return [].map.call(l, (function(t) {
										var i = function t(e, i) {
											return [].slice.call(e.childNodes).reduce((function(e, r, a) {
												var n;
												return "br" === r.nodeName && a ? e + "\n" : null !== (n = r.childNodes) && void 0 !== n && n.length ? t(r, i) : i ? e + r.textContent.trim().replace(/\s+/g, " ") : e + r.textContent
											}), "")
										}(t, n);
										if (!i || !t.hasAttribute("begin")) return null;
										var r = Ei(t.getAttribute("begin"), a),
											l = Ei(t.getAttribute("dur"), a),
											u = Ei(t.getAttribute("end"), a);
										if (null === r) throw bi(t);
										if (null === u) {
											if (null === l) throw bi(t);
											u = r + l
										}
										var h = new Xe(r - e, u - e, i);
										h.id = hi(h.startTime, h.endTime, h.text);
										var d = o[t.getAttribute("region")],
											c = s[t.getAttribute("style")];
										h.position = 10, h.size = 80;
										var f = function(t, e, i) {
												var r = "http://www.w3.org/ns/ttml#styling",
													a = null,
													n = null != t && t.hasAttribute("style") ? t.getAttribute("style") : null;
												return n && i.hasOwnProperty(n) && (a = i[n]), ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((function(i, n) {
													var s = Ti(e, r, n) || Ti(t, r, n) || Ti(a, r, n);
													return s && (i[n] = s), i
												}), {})
											}(d, c, s),
											g = f.textAlign;
										if (g) {
											var v = vi[g];
											v && (h.lineAlign = v), h.align = g
										}
										return ci(h, f), h
									})).filter((function(t) {
										return null !== t
									}))
								}(t, o))
							}))
						} catch (t) {
							a(t)
						}
					} else a(new Error("Could not parse IMSC1 mdat"))
				}

				function mi(t, e, i) {
					var r = t.getElementsByTagName(e)[0];
					return r ? [].slice.call(r.querySelectorAll(i)) : []
				}

				function yi(t) {
					return t.reduce((function(t, e) {
						var i = e.getAttribute("xml:id");
						return i && (t[i] = e), t
					}), {})
				}

				function Ti(t, e, i) {
					return t && t.hasAttributeNS(e, i) ? t.getAttributeNS(e, i) : null
				}

				function bi(t) {
					return new Error("Could not parse ttml timestamp " + t)
				}

				function Ei(t, e) {
					if (!t) return null;
					var i = $e(t);
					return null === i && (fi.test(t) ? i = function(t, e) {
						var i = fi.exec(t),
							r = (0 | i[4]) + (0 | i[5]) / e.subFrameRate;
						return 3600 * (0 | i[1]) + 60 * (0 | i[2]) + (0 | i[3]) + r / e.frameRate
					}(t, e) : gi.test(t) && (i = function(t, e) {
						var i = gi.exec(t),
							r = Number(i[1]);
						switch (i[2]) {
							case "h":
								return 3600 * r;
							case "m":
								return 60 * r;
							case "ms":
								return 1e3 * r;
							case "f":
								return r / e.frameRate;
							case "t":
								return r / e.tickRate
						}
						return r
					}(t, e))), i
				}
				var Si = function() {
					function t(t) {
						if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
								ccOffset: 0,
								presentationOffset: 0,
								0: {
									start: 0,
									prevCC: -1,
									new: !1
								}
							}, this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
								textTrack1: {
									label: this.config.captionsTextTrack1Label,
									languageCode: this.config.captionsTextTrack1LanguageCode
								},
								textTrack2: {
									label: this.config.captionsTextTrack2Label,
									languageCode: this.config.captionsTextTrack2LanguageCode
								},
								textTrack3: {
									label: this.config.captionsTextTrack3Label,
									languageCode: this.config.captionsTextTrack3LanguageCode
								},
								textTrack4: {
									label: this.config.captionsTextTrack4Label,
									languageCode: this.config.captionsTextTrack4LanguageCode
								}
							}, this.config.enableCEA708Captions) {
							var e = new ze(this, "textTrack1"),
								i = new ze(this, "textTrack2"),
								r = new ze(this, "textTrack3"),
								a = new ze(this, "textTrack4");
							this.cea608Parser1 = new qe(1, e, i), this.cea608Parser2 = new qe(3, r, a)
						}
						t.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(s.a.FRAG_LOADING, this.onFragLoading, this), t.on(s.a.FRAG_LOADED, this.onFragLoaded, this), t.on(s.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(s.a.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this)
					}
					var e = t.prototype;
					return e.destroy = function() {
						var t = this.hls;
						t.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.a.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.a.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(s.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(s.a.FRAG_LOADING, this.onFragLoading, this), t.off(s.a.FRAG_LOADED, this.onFragLoaded, this), t.off(s.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(s.a.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(s.a.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(s.a.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
					}, e.addCues = function(t, e, i, r, a) {
						for (var n, o, l, u, h = !1, d = a.length; d--;) {
							var c = a[d],
								f = (n = c[0], o = c[1], l = e, u = i, Math.min(o, u) - Math.max(n, l));
							if (f >= 0 && (c[0] = Math.min(c[0], e), c[1] = Math.max(c[1], i), h = !0, f / (i - e) > .5)) return
						}
						if (h || a.push([e, i]), this.config.renderTextTracksNatively) {
							var g = this.captionsTracks[t];
							this.Cues.newCue(g, e, i, r)
						} else {
							var v = this.Cues.newCue(null, e, i, r);
							this.hls.trigger(s.a.CUES_PARSED, {
								type: "captions",
								cues: v,
								track: t
							})
						}
					}, e.onInitPtsFound = function(t, e) {
						var i = this,
							r = e.frag,
							a = e.id,
							n = e.initPTS,
							o = e.timescale,
							l = this.unparsedVttFrags;
						"main" === a && (this.initPTS[r.cc] = n, this.timescale[r.cc] = o), l.length && (this.unparsedVttFrags = [], l.forEach((function(t) {
							i.onFragLoaded(s.a.FRAG_LOADED, t)
						})))
					}, e.getExistingTrack = function(t) {
						var e = this.media;
						if (e)
							for (var i = 0; i < e.textTracks.length; i++) {
								var r = e.textTracks[i];
								if (r[t]) return r
							}
						return null
					}, e.createCaptionsTrack = function(t) {
						this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
					}, e.createNativeTrack = function(t) {
						if (!this.captionsTracks[t]) {
							var e = this.captionsProperties,
								i = this.captionsTracks,
								r = this.media,
								a = e[t],
								n = a.label,
								s = a.languageCode,
								o = this.getExistingTrack(t);
							if (o) i[t] = o, U(i[t]), M(i[t], r);
							else {
								var l = this.createTextTrack("captions", n, s);
								l && (l[t] = !0, i[t] = l)
							}
						}
					}, e.createNonNativeTrack = function(t) {
						if (!this.nonNativeCaptionsTracks[t]) {
							var e = this.captionsProperties[t];
							if (e) {
								var i = {
									_id: t,
									label: e.label,
									kind: "captions",
									default: !!e.media && !!e.media.default,
									closedCaptions: e.media
								};
								this.nonNativeCaptionsTracks[t] = i, this.hls.trigger(s.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
									tracks: [i]
								})
							}
						}
					}, e.createTextTrack = function(t, e, i) {
						var r = this.media;
						if (r) return r.addTextTrack(t, e, i)
					}, e.onMediaAttaching = function(t, e) {
						this.media = e.media, this._cleanTracks()
					}, e.onMediaDetaching = function() {
						var t = this.captionsTracks;
						Object.keys(t).forEach((function(e) {
							U(t[e]), delete t[e]
						})), this.nonNativeCaptionsTracks = {}
					}, e.onManifestLoading = function() {
						this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
							ccOffset: 0,
							presentationOffset: 0,
							0: {
								start: 0,
								prevCC: -1,
								new: !1
							}
						}, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
					}, e._cleanTracks = function() {
						var t = this.media;
						if (t) {
							var e = t.textTracks;
							if (e)
								for (var i = 0; i < e.length; i++) U(e[i])
						}
					}, e.onSubtitleTracksUpdated = function(t, e) {
						var i = this;
						this.textTracks = [];
						var r = e.subtitleTracks || [],
							a = r.some((function(t) {
								return "stpp.ttml.im1t" === t.textCodec
							}));
						if (this.config.enableWebVTT || a && this.config.enableIMSC1) {
							var n = this.tracks && r && this.tracks.length === r.length;
							if (this.tracks = r || [], this.config.renderTextTracksNatively) {
								var o = this.media ? this.media.textTracks : [];
								this.tracks.forEach((function(t, e) {
									var r;
									if (e < o.length) {
										for (var a = null, n = 0; n < o.length; n++)
											if (Li(o[n], t)) {
												a = o[n];
												break
											} a && (r = a)
									}
									if (r) U(r);
									else {
										var s = i._captionsOrSubtitlesFromCharacteristics(t);
										(r = i.createTextTrack(s, t.name, t.lang)) && (r.mode = "disabled")
									}
									r && (r.groupId = t.groupId, i.textTracks.push(r))
								}))
							} else if (!n && this.tracks && this.tracks.length) {
								var l = this.tracks.map((function(t) {
									return {
										label: t.name,
										kind: t.type.toLowerCase(),
										default: t.default,
										subtitleTrack: t
									}
								}));
								this.hls.trigger(s.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
									tracks: l
								})
							}
						}
					}, e._captionsOrSubtitlesFromCharacteristics = function(t) {
						var e;
						if (null !== (e = t.attrs) && void 0 !== e && e.CHARACTERISTICS) {
							var i = /transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),
								r = /describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);
							if (i && r) return "captions"
						}
						return "subtitles"
					}, e.onManifestLoaded = function(t, e) {
						var i = this;
						this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(t) {
							var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
							if (e) {
								var r = "textTrack" + e[1],
									a = i.captionsProperties[r];
								a && (a.label = t.name, t.lang && (a.languageCode = t.lang), a.media = t)
							}
						}))
					}, e.onFragLoading = function(t, e) {
						var i = this.cea608Parser1,
							r = this.cea608Parser2,
							a = this.lastSn,
							n = this.lastPartIndex;
						if (this.enabled && i && r && e.frag.type === w.b.MAIN) {
							var s, o, l = e.frag.sn,
								u = null != (s = null == e || null === (o = e.part) || void 0 === o ? void 0 : o.index) ? s : -1;
							l === a + 1 || l === a && u === n + 1 || (i.reset(), r.reset()), this.lastSn = l, this.lastPartIndex = u
						}
					}, e.onFragLoaded = function(t, e) {
						var i = e.frag,
							r = e.payload,
							a = this.initPTS,
							o = this.unparsedVttFrags;
						if (i.type === w.b.SUBTITLE)
							if (r.byteLength) {
								if (!Object(n.a)(a[i.cc])) return o.push(e), void(a.length && this.hls.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: i,
									error: new Error("Missing initial subtitle PTS")
								}));
								var l = i.decryptdata,
									u = "stats" in e;
								if (null == l || null == l.key || "AES-128" !== l.method || u) {
									var h = this.tracks[i.level],
										d = this.vttCCs;
									d[i.cc] || (d[i.cc] = {
										start: i.start,
										prevCC: this.prevCC,
										new: !0
									}, this.prevCC = i.cc), h && "stpp.ttml.im1t" === h.textCodec ? this._parseIMSC1(i, r) : this._parseVTTs(i, r, d)
								}
							} else this.hls.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: i,
								error: new Error("Empty subtitle payload")
							})
					}, e._parseIMSC1 = function(t, e) {
						var i = this,
							r = this.hls;
						pi(e, this.initPTS[t.cc], this.timescale[t.cc], (function(e) {
							i._appendCues(e, t.level), r.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
								success: !0,
								frag: t
							})
						}), (function(e) {
							l.b.log("Failed to parse IMSC1: " + e), r.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: t,
								error: e
							})
						}))
					}, e._parseVTTs = function(t, e, i) {
						var r, a = this,
							n = this.hls;
						di(null !== (r = t.initSegment) && void 0 !== r && r.data ? Object(u.b)(t.initSegment.data, new Uint8Array(e)) : e, this.initPTS[t.cc], this.timescale[t.cc], i, t.cc, t.start, (function(e) {
							a._appendCues(e, t.level), n.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
								success: !0,
								frag: t
							})
						}), (function(i) {
							a._fallbackToIMSC1(t, e), l.b.log("Failed to parse VTT cue: " + i), n.trigger(s.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: t,
								error: i
							})
						}))
					}, e._fallbackToIMSC1 = function(t, e) {
						var i = this,
							r = this.tracks[t.level];
						r.textCodec || pi(e, this.initPTS[t.cc], this.timescale[t.cc], (function() {
							r.textCodec = "stpp.ttml.im1t", i._parseIMSC1(t, e)
						}), (function() {
							r.textCodec = "wvtt"
						}))
					}, e._appendCues = function(t, e) {
						var i = this.hls;
						if (this.config.renderTextTracksNatively) {
							var r = this.textTracks[e];
							if (!r || "disabled" === r.mode) return;
							t.forEach((function(t) {
								return N(r, t)
							}))
						} else {
							var a = this.tracks[e];
							if (!a) return;
							var n = a.default ? "default" : "subtitles" + e;
							i.trigger(s.a.CUES_PARSED, {
								type: "subtitles",
								cues: t,
								track: n
							})
						}
					}, e.onFragDecrypted = function(t, e) {
						var i = e.frag;
						if (i.type === w.b.SUBTITLE) {
							if (!Object(n.a)(this.initPTS[i.cc])) return void this.unparsedVttFrags.push(e);
							this.onFragLoaded(s.a.FRAG_LOADED, e)
						}
					}, e.onSubtitleTracksCleared = function() {
						this.tracks = [], this.captionsTracks = {}
					}, e.onFragParsingUserdata = function(t, e) {
						var i = this.cea608Parser1,
							r = this.cea608Parser2;
						if (this.enabled && i && r)
							for (var a = 0; a < e.samples.length; a++) {
								var n = e.samples[a].bytes;
								if (n) {
									var s = this.extractCea608Data(n);
									i.addData(e.samples[a].pts, s[0]), r.addData(e.samples[a].pts, s[1])
								}
							}
					}, e.onBufferFlushing = function(t, e) {
						var i = e.startOffset,
							r = e.endOffset,
							a = e.endOffsetSubtitles,
							n = e.type,
							s = this.media;
						if (s && !(s.currentTime < r)) {
							if (!n || "video" === n) {
								var o = this.captionsTracks;
								Object.keys(o).forEach((function(t) {
									return B(o[t], i, r)
								}))
							}
							if (this.config.renderTextTracksNatively && 0 === i && void 0 !== a) {
								var l = this.textTracks;
								Object.keys(l).forEach((function(t) {
									return B(l[t], i, a)
								}))
							}
						}
					}, e.extractCea608Data = function(t) {
						for (var e = [
								[],
								[]
							], i = 31 & t[0], r = 2, a = 0; a < i; a++) {
							var n = t[r++],
								s = 127 & t[r++],
								o = 127 & t[r++];
							if ((0 !== s || 0 !== o) && 0 != (4 & n)) {
								var l = 3 & n;
								0 !== l && 1 !== l || (e[l].push(s), e[l].push(o))
							}
						}
						return e
					}, t
				}();

				function Li(t, e) {
					return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
				}

				function Ai(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var Di, Ri = function() {
						function t(t) {
							this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
						}
						var e, i, r = t.prototype;
						return r.setStreamController = function(t) {
							this.streamController = t
						}, r.destroy = function() {
							this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
						}, r.registerListeners = function() {
							var t = this.hls;
							t.on(s.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.on(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.on(s.a.MEDIA_DETACHING, this.onMediaDetaching, this)
						}, r.unregisterListener = function() {
							var t = this.hls;
							t.off(s.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this), t.off(s.a.BUFFER_CODECS, this.onBufferCodecs, this), t.off(s.a.MEDIA_DETACHING, this.onMediaDetaching, this)
						}, r.onFpsDropLevelCapping = function(e, i) {
							t.isLevelAllowed(i.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(i.droppedLevel)
						}, r.onMediaAttaching = function(t, e) {
							this.media = e.media instanceof HTMLVideoElement ? e.media : null
						}, r.onManifestParsed = function(t, e) {
							var i = this.hls;
							this.restrictedLevels = [], this.firstLevel = e.firstLevel, i.config.capLevelToPlayerSize && e.video && this.startCapping()
						}, r.onBufferCodecs = function(t, e) {
							this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
						}, r.onMediaDetaching = function() {
							this.stopCapping()
						}, r.detectPlayerSize = function() {
							if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
								var t = this.hls.levels;
								if (t.length) {
									var e = this.hls;
									e.autoLevelCapping = this.getMaxLevel(t.length - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
								}
							}
						}, r.getMaxLevel = function(e) {
							var i = this,
								r = this.hls.levels;
							if (!r.length) return -1;
							var a = r.filter((function(r, a) {
								return t.isLevelAllowed(a, i.restrictedLevels) && a <= e
							}));
							return this.clientRect = null, t.getMaxLevelByMediaSize(a, this.mediaWidth, this.mediaHeight)
						}, r.startCapping = function() {
							this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
						}, r.stopCapping = function() {
							this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
						}, r.getDimensions = function() {
							if (this.clientRect) return this.clientRect;
							var t = this.media,
								e = {
									width: 0,
									height: 0
								};
							if (t) {
								var i = t.getBoundingClientRect();
								e.width = i.width, e.height = i.height, e.width || e.height || (e.width = i.right - i.left || t.width || 0, e.height = i.bottom - i.top || t.height || 0)
							}
							return this.clientRect = e, e
						}, t.isLevelAllowed = function(t, e) {
							return void 0 === e && (e = []), -1 === e.indexOf(t)
						}, t.getMaxLevelByMediaSize = function(t, e, i) {
							if (!t || !t.length) return -1;
							for (var r, a, n = t.length - 1, s = 0; s < t.length; s += 1) {
								var o = t[s];
								if ((o.width >= e || o.height >= i) && (r = o, !(a = t[s + 1]) || r.width !== a.width || r.height !== a.height)) {
									n = s;
									break
								}
							}
							return n
						}, e = t, (i = [{
							key: "mediaWidth",
							get: function() {
								return this.getDimensions().width * this.contentScaleFactor
							}
						}, {
							key: "mediaHeight",
							get: function() {
								return this.getDimensions().height * this.contentScaleFactor
							}
						}, {
							key: "contentScaleFactor",
							get: function() {
								var t = 1;
								if (!this.hls.config.ignoreDevicePixelRatio) try {
									t = self.devicePixelRatio
								} catch (t) {}
								return t
							}
						}]) && Ai(e.prototype, i), Object.defineProperty(e, "prototype", {
							writable: !1
						}), t
					}(),
					ki = function() {
						function t(t) {
							this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
						}
						var e = t.prototype;
						return e.setStreamController = function(t) {
							this.streamController = t
						}, e.registerListeners = function() {
							this.hls.on(s.a.MEDIA_ATTACHING, this.onMediaAttaching, this)
						}, e.unregisterListeners = function() {
							this.hls.off(s.a.MEDIA_ATTACHING, this.onMediaAttaching)
						}, e.destroy = function() {
							this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
						}, e.onMediaAttaching = function(t, e) {
							var i = this.hls.config;
							if (i.capLevelOnFPSDrop) {
								var r = e.media instanceof self.HTMLVideoElement ? e.media : null;
								this.media = r, r && "function" == typeof r.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod)
							}
						}, e.checkFPS = function(t, e, i) {
							var r = performance.now();
							if (e) {
								if (this.lastTime) {
									var a = r - this.lastTime,
										n = i - this.lastDroppedFrames,
										o = e - this.lastDecodedFrames,
										u = 1e3 * n / a,
										h = this.hls;
									if (h.trigger(s.a.FPS_DROP, {
											currentDropped: n,
											currentDecoded: o,
											totalDroppedFrames: i
										}), u > 0 && n > h.config.fpsDroppedMonitoringThreshold * o) {
										var d = h.currentLevel;
										l.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === h.autoLevelCapping || h.autoLevelCapping >= d) && (d -= 1, h.trigger(s.a.FPS_DROP_LEVEL_CAPPING, {
											level: d,
											droppedLevel: h.currentLevel
										}), h.autoLevelCapping = d, this.streamController.nextLevelSwitch())
									}
								}
								this.lastTime = r, this.lastDroppedFrames = i, this.lastDecodedFrames = e
							}
						}, e.checkFPSInterval = function() {
							var t = this.media;
							if (t)
								if (this.isVideoPlaybackQualityAvailable) {
									var e = t.getVideoPlaybackQuality();
									this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
								} else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
						}, t
					}();
				! function(t) {
					t.WIDEVINE = "com.widevine.alpha", t.PLAYREADY = "com.microsoft.playready"
				}(Di || (Di = {}));
				var _i = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;

				function Ii(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var Oi, Ci, wi, xi = function() {
					function t(t) {
						this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = t, this._config = t.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners()
					}
					var e, i, r = t.prototype;
					return r.destroy = function() {
						this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null
					}, r._registerListeners = function() {
						this.hls.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(s.a.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(s.a.MANIFEST_PARSED, this.onManifestParsed, this)
					}, r._unregisterListeners = function() {
						this.hls.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(s.a.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(s.a.MANIFEST_PARSED, this.onManifestParsed, this)
					}, r.getLicenseServerUrl = function(t) {
						switch (t) {
							case Di.WIDEVINE:
								if (!this._widevineLicenseUrl) break;
								return this._widevineLicenseUrl
						}
						throw new Error('no license server URL configured for key-system "' + t + '"')
					}, r._attemptKeySystemAccess = function(t, e, i) {
						var r = this,
							a = function(t, e, i, r) {
								switch (t) {
									case Di.WIDEVINE:
										return function(t, e, i) {
											var r = {
												audioCapabilities: [],
												videoCapabilities: []
											};
											return t.forEach((function(t) {
												r.audioCapabilities.push({
													contentType: 'audio/mp4; codecs="' + t + '"',
													robustness: i.audioRobustness || ""
												})
											})), e.forEach((function(t) {
												r.videoCapabilities.push({
													contentType: 'video/mp4; codecs="' + t + '"',
													robustness: i.videoRobustness || ""
												})
											})), [r]
										}(e, i, r);
									default:
										throw new Error("Unknown key-system: " + t)
								}
							}(t, e, i, this._drmSystemOptions);
						l.b.log("Requesting encrypted media key-system access");
						var n = this.requestMediaKeySystemAccess(t, a);
						this.mediaKeysPromise = n.then((function(e) {
							return r._onMediaKeySystemAccessObtained(t, e)
						})), n.catch((function(e) {
							l.b.error('Failed to obtain key-system "' + t + '" access:', e)
						}))
					}, r._onMediaKeySystemAccessObtained = function(t, e) {
						var i = this;
						l.b.log('Access for key-system "' + t + '" obtained');
						var r = {
							mediaKeysSessionInitialized: !1,
							mediaKeySystemAccess: e,
							mediaKeySystemDomain: t
						};
						this._mediaKeysList.push(r);
						var a = Promise.resolve().then((function() {
							return e.createMediaKeys()
						})).then((function(e) {
							return r.mediaKeys = e, l.b.log('Media-keys created for key-system "' + t + '"'), i._onMediaKeysCreated(), e
						}));
						return a.catch((function(t) {
							l.b.error("Failed to create media-keys:", t)
						})), a
					}, r._onMediaKeysCreated = function() {
						var t = this;
						this._mediaKeysList.forEach((function(e) {
							e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
						}))
					}, r._onNewMediaKeySession = function(t) {
						var e = this;
						l.b.log("New key-system session " + t.sessionId), t.addEventListener("message", (function(i) {
							e._onKeySessionMessage(t, i.message)
						}), !1)
					}, r._onKeySessionMessage = function(t, e) {
						l.b.log("Got EME message event, creating license request"), this._requestLicense(e, (function(e) {
							l.b.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"), t.update(e).catch((function(t) {
								l.b.warn("Updating key-session failed: " + t)
							}))
						}))
					}, r.onMediaEncrypted = function(t) {
						var e = this;
						if (l.b.log('Media is encrypted using "' + t.initDataType + '" init data type'), !this.mediaKeysPromise) return l.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void this.hls.trigger(s.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_KEYS,
							fatal: !0
						});
						var i = function(i) {
							e._media && (e._attemptSetMediaKeys(i), e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
						};
						this.mediaKeysPromise.then(i).catch(i)
					}, r._attemptSetMediaKeys = function(t) {
						if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
						if (!this._hasSetMediaKeys) {
							var e = this._mediaKeysList[0];
							if (!e || !e.mediaKeys) return l.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(s.a.ERROR, {
								type: o.b.KEY_SYSTEM_ERROR,
								details: o.a.KEY_SYSTEM_NO_KEYS,
								fatal: !0
							});
							l.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
						}
					}, r._generateRequestWithPreferredKeySession = function(t, e) {
						var i = this,
							r = this._mediaKeysList[0];
						if (!r) return l.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(s.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_ACCESS,
							fatal: !0
						});
						if (r.mediaKeysSessionInitialized) l.b.warn("Key-Session already initialized but requested again");
						else {
							var a = r.mediaKeysSession;
							if (!a) return l.b.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(s.a.ERROR, {
								type: o.b.KEY_SYSTEM_ERROR,
								details: o.a.KEY_SYSTEM_NO_SESSION,
								fatal: !0
							});
							if (!e) return l.b.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(s.a.ERROR, {
								type: o.b.KEY_SYSTEM_ERROR,
								details: o.a.KEY_SYSTEM_NO_INIT_DATA,
								fatal: !0
							});
							l.b.log('Generating key-session request for "' + t + '" init data type'), r.mediaKeysSessionInitialized = !0, a.generateRequest(t, e).then((function() {
								l.b.debug("Key-session generation succeeded")
							})).catch((function(t) {
								l.b.error("Error generating key-session request:", t), i.hls.trigger(s.a.ERROR, {
									type: o.b.KEY_SYSTEM_ERROR,
									details: o.a.KEY_SYSTEM_NO_SESSION,
									fatal: !1
								})
							}))
						}
					}, r._createLicenseXhr = function(t, e, i) {
						var r = new XMLHttpRequest;
						r.responseType = "arraybuffer", r.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, r, t, e, i);
						var a = this._licenseXhrSetup;
						if (a) try {
							a.call(this.hls, r, t), a = void 0
						} catch (t) {
							l.b.error(t)
						}
						try {
							r.readyState || r.open("POST", t, !0), a && a.call(this.hls, r, t)
						} catch (t) {
							throw new Error("issue setting up KeySystem license XHR " + t)
						}
						return r
					}, r._onLicenseRequestReadyStageChange = function(t, e, i, r) {
						switch (t.readyState) {
							case 4:
								if (200 === t.status) {
									this._requestLicenseFailureCount = 0, l.b.log("License request succeeded");
									var a = t.response,
										n = this._licenseResponseCallback;
									if (n) try {
										a = n.call(this.hls, t, e)
									} catch (t) {
										l.b.error(t)
									}
									r(a)
								} else {
									if (l.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(s.a.ERROR, {
										type: o.b.KEY_SYSTEM_ERROR,
										details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
										fatal: !0
									});
									var u = 3 - this._requestLicenseFailureCount + 1;
									l.b.warn("Retrying license request, " + u + " attempts left"), this._requestLicense(i, r)
								}
						}
					}, r._generateLicenseRequestChallenge = function(t, e) {
						switch (t.mediaKeySystemDomain) {
							case Di.WIDEVINE:
								return e
						}
						throw new Error("unsupported key-system: " + t.mediaKeySystemDomain)
					}, r._requestLicense = function(t, e) {
						l.b.log("Requesting content license for key-system");
						var i = this._mediaKeysList[0];
						if (!i) return l.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(s.a.ERROR, {
							type: o.b.KEY_SYSTEM_ERROR,
							details: o.a.KEY_SYSTEM_NO_ACCESS,
							fatal: !0
						});
						try {
							var r = this.getLicenseServerUrl(i.mediaKeySystemDomain),
								a = this._createLicenseXhr(r, t, e);
							l.b.log("Sending license request to URL: " + r);
							var n = this._generateLicenseRequestChallenge(i, t);
							a.send(n)
						} catch (t) {
							l.b.error("Failure requesting DRM license: " + t), this.hls.trigger(s.a.ERROR, {
								type: o.b.KEY_SYSTEM_ERROR,
								details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
								fatal: !0
							})
						}
					}, r.onMediaAttached = function(t, e) {
						if (this._emeEnabled) {
							var i = e.media;
							this._media = i, i.addEventListener("encrypted", this._onMediaEncrypted)
						}
					}, r.onMediaDetached = function() {
						var t = this._media,
							e = this._mediaKeysList;
						t && (t.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e.map((function(t) {
							if (t.mediaKeysSession) return t.mediaKeysSession.close().catch((function() {}))
						}))).then((function() {
							return t.setMediaKeys(null)
						})).catch((function() {})))
					}, r.onManifestParsed = function(t, e) {
						if (this._emeEnabled) {
							var i = e.levels.map((function(t) {
									return t.audioCodec
								})).filter((function(t) {
									return !!t
								})),
								r = e.levels.map((function(t) {
									return t.videoCodec
								})).filter((function(t) {
									return !!t
								}));
							this._attemptKeySystemAccess(Di.WIDEVINE, i, r)
						}
					}, e = t, (i = [{
						key: "requestMediaKeySystemAccess",
						get: function() {
							if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
							return this._requestMediaKeySystemAccess
						}
					}]) && Ii(e.prototype, i), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();

				function Pi(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}

				function Fi(t, e, i) {
					return e && Pi(t.prototype, e), i && Pi(t, i), Object.defineProperty(t, "prototype", {
						writable: !1
					}), t
				}

				function Mi(t, e) {
					var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
					if (i) return (i = i.call(t)).next.bind(i);
					if (Array.isArray(t) || (i = function(t, e) {
							if (t) {
								if ("string" == typeof t) return Ni(t, e);
								var i = Object.prototype.toString.call(t).slice(8, -1);
								return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Ni(t, e) : void 0
							}
						}(t)) || e && t && "number" == typeof t.length) {
						i && (t = i);
						var r = 0;
						return function() {
							return r >= t.length ? {
								done: !0
							} : {
								done: !1,
								value: t[r++]
							}
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}

				function Ni(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var i = 0, r = new Array(e); i < e; i++) r[i] = t[i];
					return r
				}

				function Ui() {
					return (Ui = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}! function(t) {
					t.MANIFEST = "m", t.AUDIO = "a", t.VIDEO = "v", t.MUXED = "av", t.INIT = "i", t.CAPTION = "c", t.TIMED_TEXT = "tt", t.KEY = "k", t.OTHER = "o"
				}(Oi || (Oi = {})),
				function(t) {
					t.DASH = "d", t.HLS = "h", t.SMOOTH = "s", t.OTHER = "o"
				}(Ci || (Ci = {})),
				function(t) {
					t.VOD = "v", t.LIVE = "l"
				}(wi || (wi = {}));
				var Bi = function() {
						function t(e) {
							var i = this;
							this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
								i.initialized && (i.starved = !0), i.buffering = !0
							}, this.onPlaying = function() {
								i.initialized || (i.initialized = !0), i.buffering = !1
							}, this.applyPlaylistData = function(t) {
								try {
									i.apply(t, {
										ot: Oi.MANIFEST,
										su: !i.initialized
									})
								} catch (t) {
									l.b.warn("Could not generate manifest CMCD data.", t)
								}
							}, this.applyFragmentData = function(t) {
								try {
									var e = t.frag,
										r = i.hls.levels[e.level],
										a = i.getObjectType(e),
										n = {
											d: 1e3 * e.duration,
											ot: a
										};
									a !== Oi.VIDEO && a !== Oi.AUDIO && a != Oi.MUXED || (n.br = r.bitrate / 1e3, n.tb = i.getTopBandwidth(a) / 1e3, n.bl = i.getBufferLength(a)), i.apply(t, n)
								} catch (t) {
									l.b.warn("Could not generate segment CMCD data.", t)
								}
							}, this.hls = e;
							var r = this.config = e.config,
								a = r.cmcd;
							null != a && (r.pLoader = this.createPlaylistLoader(), r.fLoader = this.createFragmentLoader(), this.sid = a.sessionId || t.uuid(), this.cid = a.contentId, this.useHeaders = !0 === a.useHeaders, this.registerListeners())
						}
						var e = t.prototype;
						return e.registerListeners = function() {
							var t = this.hls;
							t.on(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.a.MEDIA_DETACHED, this.onMediaDetached, this), t.on(s.a.BUFFER_CREATED, this.onBufferCreated, this)
						}, e.unregisterListeners = function() {
							var t = this.hls;
							t.off(s.a.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.a.MEDIA_DETACHED, this.onMediaDetached, this), t.off(s.a.BUFFER_CREATED, this.onBufferCreated, this), this.onMediaDetached()
						}, e.destroy = function() {
							this.unregisterListeners(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
						}, e.onMediaAttached = function(t, e) {
							this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
						}, e.onMediaDetached = function() {
							this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
						}, e.onBufferCreated = function(t, e) {
							var i, r;
							this.audioBuffer = null === (i = e.tracks.audio) || void 0 === i ? void 0 : i.buffer, this.videoBuffer = null === (r = e.tracks.video) || void 0 === r ? void 0 : r.buffer
						}, e.createData = function() {
							var t;
							return {
								v: 1,
								sf: Ci.HLS,
								sid: this.sid,
								cid: this.cid,
								pr: null === (t = this.media) || void 0 === t ? void 0 : t.playbackRate,
								mtp: this.hls.bandwidthEstimate / 1e3
							}
						}, e.apply = function(e, i) {
							void 0 === i && (i = {}), Ui(i, this.createData());
							var r = i.ot === Oi.INIT || i.ot === Oi.VIDEO || i.ot === Oi.MUXED;
							if (this.starved && r && (i.bs = !0, i.su = !0, this.starved = !1), null == i.su && (i.su = this.buffering), this.useHeaders) {
								var a = t.toHeaders(i);
								if (!Object.keys(a).length) return;
								e.headers || (e.headers = {}), Ui(e.headers, a)
							} else {
								var n = t.toQuery(i);
								if (!n) return;
								e.url = t.appendQueryToUri(e.url, n)
							}
						}, e.getObjectType = function(t) {
							var e = t.type;
							return "subtitle" === e ? Oi.TIMED_TEXT : "initSegment" === t.sn ? Oi.INIT : "audio" === e ? Oi.AUDIO : "main" === e ? this.hls.audioTracks.length ? Oi.VIDEO : Oi.MUXED : void 0
						}, e.getTopBandwidth = function(t) {
							var e, i = 0,
								r = this.hls;
							if (t === Oi.AUDIO) e = r.audioTracks;
							else {
								var a = r.maxAutoLevel,
									n = a > -1 ? a + 1 : r.levels.length;
								e = r.levels.slice(0, n)
							}
							for (var s, o = Mi(e); !(s = o()).done;) {
								var l = s.value;
								l.bitrate > i && (i = l.bitrate)
							}
							return i > 0 ? i : NaN
						}, e.getBufferLength = function(t) {
							var e = this.hls.media,
								i = t === Oi.AUDIO ? this.audioBuffer : this.videoBuffer;
							return i && e ? 1e3 * mt.bufferInfo(i, e.currentTime, this.config.maxBufferHole).len : NaN
						}, e.createPlaylistLoader = function() {
							var t = this.config.pLoader,
								e = this.applyPlaylistData,
								i = t || this.config.loader;
							return function() {
								function t(t) {
									this.loader = void 0, this.loader = new i(t)
								}
								var r = t.prototype;
								return r.destroy = function() {
									this.loader.destroy()
								}, r.abort = function() {
									this.loader.abort()
								}, r.load = function(t, i, r) {
									e(t), this.loader.load(t, i, r)
								}, Fi(t, [{
									key: "stats",
									get: function() {
										return this.loader.stats
									}
								}, {
									key: "context",
									get: function() {
										return this.loader.context
									}
								}]), t
							}()
						}, e.createFragmentLoader = function() {
							var t = this.config.fLoader,
								e = this.applyFragmentData,
								i = t || this.config.loader;
							return function() {
								function t(t) {
									this.loader = void 0, this.loader = new i(t)
								}
								var r = t.prototype;
								return r.destroy = function() {
									this.loader.destroy()
								}, r.abort = function() {
									this.loader.abort()
								}, r.load = function(t, i, r) {
									e(t), this.loader.load(t, i, r)
								}, Fi(t, [{
									key: "stats",
									get: function() {
										return this.loader.stats
									}
								}, {
									key: "context",
									get: function() {
										return this.loader.context
									}
								}]), t
							}()
						}, t.uuid = function() {
							var t = URL.createObjectURL(new Blob),
								e = t.toString();
							return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
						}, t.serialize = function(t) {
							for (var e, i = [], r = function(t) {
									return !Number.isNaN(t) && null != t && "" !== t && !1 !== t
								}, a = function(t) {
									return Math.round(t)
								}, n = function(t) {
									return 100 * a(t / 100)
								}, s = {
									br: a,
									d: a,
									bl: n,
									dl: n,
									mtp: n,
									nor: function(t) {
										return encodeURIComponent(t)
									},
									rtp: n,
									tb: a
								}, o = Mi(Object.keys(t || {}).sort()); !(e = o()).done;) {
								var l = e.value,
									u = t[l];
								if (r(u) && !("v" === l && 1 === u || "pr" == l && 1 === u)) {
									var h = s[l];
									h && (u = h(u));
									var d, c = typeof u;
									d = "ot" === l || "sf" === l || "st" === l ? l + "=" + u : "boolean" === c ? l : "number" === c ? l + "=" + u : l + "=" + JSON.stringify(u), i.push(d)
								}
							}
							return i.join(",")
						}, t.toHeaders = function(e) {
							for (var i = {}, r = ["Object", "Request", "Session", "Status"], a = [{}, {}, {}, {}], n = {
									br: 0,
									d: 0,
									ot: 0,
									tb: 0,
									bl: 1,
									dl: 1,
									mtp: 1,
									nor: 1,
									nrr: 1,
									su: 1,
									cid: 2,
									pr: 2,
									sf: 2,
									sid: 2,
									st: 2,
									v: 2,
									bs: 3,
									rtp: 3
								}, s = 0, o = Object.keys(e); s < o.length; s++) {
								var l = o[s];
								a[null != n[l] ? n[l] : 1][l] = e[l]
							}
							for (var u = 0; u < a.length; u++) {
								var h = t.serialize(a[u]);
								h && (i["CMCD-" + r[u]] = h)
							}
							return i
						}, t.toQuery = function(e) {
							return "CMCD=" + encodeURIComponent(t.serialize(e))
						}, t.appendQueryToUri = function(t, e) {
							if (!e) return t;
							var i = t.includes("?") ? "&" : "?";
							return "" + t + i + e
						}, t
					}(),
					Gi = i(14),
					ji = /^age:\s*[\d.]+\s*$/m,
					Ki = function() {
						function t(t) {
							this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t ? t.xhrSetup : null, this.stats = new Gi.a, this.retryDelay = 0
						}
						var e = t.prototype;
						return e.destroy = function() {
							this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
						}, e.abortInternal = function() {
							var t = this.loader;
							self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
						}, e.abort = function() {
							var t;
							this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
						}, e.load = function(t, e, i) {
							if (this.stats.loading.start) throw new Error("Loader can only be used once.");
							this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = i, this.retryDelay = e.retryDelay, this.loadInternal()
						}, e.loadInternal = function() {
							var t = this.config,
								e = this.context;
							if (t) {
								var i = this.loader = new self.XMLHttpRequest,
									r = this.stats;
								r.loading.first = 0, r.loaded = 0;
								var a = this.xhrSetup;
								try {
									if (a) try {
										a(i, e.url)
									} catch (t) {
										i.open("GET", e.url, !0), a(i, e.url)
									}
									i.readyState || i.open("GET", e.url, !0);
									var n = this.context.headers;
									if (n)
										for (var s in n) i.setRequestHeader(s, n[s])
								} catch (t) {
									return void this.callbacks.onError({
										code: i.status,
										text: t.message
									}, e, i)
								}
								e.rangeEnd && i.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), i.onreadystatechange = this.readystatechange.bind(this), i.onprogress = this.loadprogress.bind(this), i.responseType = e.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout), i.send()
							}
						}, e.readystatechange = function() {
							var t = this.context,
								e = this.loader,
								i = this.stats;
							if (t && e) {
								var r = e.readyState,
									a = this.config;
								if (!i.aborted && r >= 2)
									if (self.clearTimeout(this.requestTimeout), 0 === i.loading.first && (i.loading.first = Math.max(self.performance.now(), i.loading.start)), 4 === r) {
										e.onreadystatechange = null, e.onprogress = null;
										var n = e.status;
										if (n >= 200 && n < 300) {
											var s, o;
											if (i.loading.end = Math.max(self.performance.now(), i.loading.first), o = "arraybuffer" === t.responseType ? (s = e.response).byteLength : (s = e.responseText).length, i.loaded = i.total = o, !this.callbacks) return;
											var u = this.callbacks.onProgress;
											if (u && u(i, t, s, e), !this.callbacks) return;
											var h = {
												url: e.responseURL,
												data: s
											};
											this.callbacks.onSuccess(h, i, t, e)
										} else i.retry >= a.maxRetry || n >= 400 && n < 499 ? (l.b.error(n + " while loading " + t.url), this.callbacks.onError({
											code: n,
											text: e.statusText
										}, t, e)) : (l.b.warn(n + " while loading " + t.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), i.retry++)
									} else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), a.timeout)
							}
						}, e.loadtimeout = function() {
							l.b.warn("timeout while loading " + this.context.url);
							var t = this.callbacks;
							t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
						}, e.loadprogress = function(t) {
							var e = this.stats;
							e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
						}, e.getCacheAge = function() {
							var t = null;
							if (this.loader && ji.test(this.loader.getAllResponseHeaders())) {
								var e = this.loader.getResponseHeader("age");
								t = e ? parseFloat(e) : null
							}
							return t
						}, t
					}();

				function Hi(t) {
					var e = "function" == typeof Map ? new Map : void 0;
					return (Hi = function(t) {
						if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
						var i;
						if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
						if (void 0 !== e) {
							if (e.has(t)) return e.get(t);
							e.set(t, r)
						}

						function r() {
							return function(t, e, i) {
								return (function() {
									if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
									if (Reflect.construct.sham) return !1;
									if ("function" == typeof Proxy) return !0;
									try {
										return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
									} catch (t) {
										return !1
									}
								}() ? Reflect.construct.bind() : function(t, e, i) {
									var r = [null];
									r.push.apply(r, e);
									var a = new(Function.bind.apply(t, r));
									return i && Vi(a, i.prototype), a
								}).apply(null, arguments)
							}(t, arguments, function(t) {
								return (Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
									return t.__proto__ || Object.getPrototypeOf(t)
								})(t)
							}(this).constructor)
						}
						return r.prototype = Object.create(t.prototype, {
							constructor: {
								value: r,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), Vi(r, t)
					})(t)
				}

				function Vi(t, e) {
					return (Vi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
						return t.__proto__ = e, t
					})(t, e)
				}

				function Wi() {
					return (Wi = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}
				var Yi = function() {
					function t(t) {
						this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || qi, this.controller = new self.AbortController, this.stats = new Gi.a
					}
					var e = t.prototype;
					return e.destroy = function() {
						this.loader = this.callbacks = null, this.abortInternal()
					}, e.abortInternal = function() {
						var t = this.response;
						t && t.ok || (this.stats.aborted = !0, this.controller.abort())
					}, e.abort = function() {
						var t;
						this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
					}, e.load = function(t, e, i) {
						var r = this,
							a = this.stats;
						if (a.loading.start) throw new Error("Loader can only be used once.");
						a.loading.start = self.performance.now();
						var s = function(t, e) {
								var i = {
									method: "GET",
									mode: "cors",
									credentials: "same-origin",
									signal: e,
									headers: new self.Headers(Wi({}, t.headers))
								};
								return t.rangeEnd && i.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)), i
							}(t, this.controller.signal),
							o = i.onProgress,
							l = "arraybuffer" === t.responseType,
							u = l ? "byteLength" : "length";
						this.context = t, this.config = e, this.callbacks = i, this.request = this.fetchSetup(t, s), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout((function() {
							r.abortInternal(), i.onTimeout(a, t, r.response)
						}), e.timeout), self.fetch(this.request).then((function(i) {
							if (r.response = r.loader = i, !i.ok) {
								var s = i.status,
									u = i.statusText;
								throw new zi(u || "fetch, bad network response", s, i)
							}
							return a.loading.first = Math.max(self.performance.now(), a.loading.start), a.total = parseInt(i.headers.get("Content-Length") || "0"), o && Object(n.a)(e.highWaterMark) ? r.loadProgressively(i, a, t, e.highWaterMark, o) : l ? i.arrayBuffer() : i.text()
						})).then((function(s) {
							var l = r.response;
							self.clearTimeout(r.requestTimeout), a.loading.end = Math.max(self.performance.now(), a.loading.first), a.loaded = a.total = s[u];
							var h = {
								url: l.url,
								data: s
							};
							o && !Object(n.a)(e.highWaterMark) && o(a, t, s, l), i.onSuccess(h, a, t, l)
						})).catch((function(e) {
							if (self.clearTimeout(r.requestTimeout), !a.aborted) {
								var n = e && e.code || 0,
									s = e ? e.message : null;
								i.onError({
									code: n,
									text: s
								}, t, e ? e.details : null)
							}
						}))
					}, e.getCacheAge = function() {
						var t = null;
						if (this.response) {
							var e = this.response.headers.get("age");
							t = e ? parseFloat(e) : null
						}
						return t
					}, e.loadProgressively = function(t, e, i, r, a) {
						void 0 === r && (r = 0);
						var n = new ce.a,
							s = t.body.getReader();
						return function o() {
							return s.read().then((function(s) {
								if (s.done) return n.dataLength && a(e, i, n.flush(), t), Promise.resolve(new ArrayBuffer(0));
								var l = s.value,
									u = l.length;
								return e.loaded += u, u < r || n.dataLength ? (n.push(l), n.dataLength >= r && a(e, i, n.flush(), t)) : a(e, i, l, t), o()
							})).catch((function() {
								return Promise.reject()
							}))
						}()
					}, t
				}();

				function qi(t, e) {
					return new self.Request(t.url, e)
				}
				var zi = function(t) {
						var e, i;

						function r(e, i, r) {
							var a;
							return (a = t.call(this, e) || this).code = void 0, a.details = void 0, a.code = i, a.details = r, a
						}
						return i = t, (e = r).prototype = Object.create(i.prototype), e.prototype.constructor = e, Vi(e, i), r
					}(Hi(Error)),
					Xi = Yi,
					Qi = /\s/;

				function $i() {
					return ($i = Object.assign ? Object.assign.bind() : function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var i = arguments[e];
							for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
						}
						return t
					}).apply(this, arguments)
				}

				function Ji(t, e) {
					var i = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(t);
						e && (r = r.filter((function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), i.push.apply(i, r)
					}
					return i
				}

				function Zi(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = null != arguments[e] ? arguments[e] : {};
						e % 2 ? Ji(Object(i), !0).forEach((function(e) {
							tr(t, e, i[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ji(Object(i)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
						}))
					}
					return t
				}

				function tr(t, e, i) {
					return e in t ? Object.defineProperty(t, e, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = i, t
				}
				var er = Zi(Zi({
					autoStartLoad: !0,
					startPosition: -1,
					defaultAudioCodec: void 0,
					debug: !1,
					capLevelOnFPSDrop: !1,
					capLevelToPlayerSize: !1,
					ignoreDevicePixelRatio: !1,
					initialLiveManifestSize: 1,
					maxBufferLength: 30,
					backBufferLength: 1 / 0,
					maxBufferSize: 6e7,
					maxBufferHole: .1,
					highBufferWatchdogPeriod: 2,
					nudgeOffset: .1,
					nudgeMaxRetry: 3,
					maxFragLookUpTolerance: .25,
					liveSyncDurationCount: 3,
					liveMaxLatencyDurationCount: 1 / 0,
					liveSyncDuration: void 0,
					liveMaxLatencyDuration: void 0,
					maxLiveSyncPlaybackRate: 1,
					liveDurationInfinity: !1,
					liveBackBufferLength: null,
					maxMaxBufferLength: 600,
					enableWorker: !0,
					enableSoftwareAES: !0,
					manifestLoadingTimeOut: 1e4,
					manifestLoadingMaxRetry: 1,
					manifestLoadingRetryDelay: 1e3,
					manifestLoadingMaxRetryTimeout: 64e3,
					startLevel: void 0,
					levelLoadingTimeOut: 1e4,
					levelLoadingMaxRetry: 4,
					levelLoadingRetryDelay: 1e3,
					levelLoadingMaxRetryTimeout: 64e3,
					fragLoadingTimeOut: 2e4,
					fragLoadingMaxRetry: 6,
					fragLoadingRetryDelay: 1e3,
					fragLoadingMaxRetryTimeout: 64e3,
					startFragPrefetch: !1,
					fpsDroppedMonitoringPeriod: 5e3,
					fpsDroppedMonitoringThreshold: .2,
					appendErrorMaxRetry: 3,
					loader: Ki,
					fLoader: void 0,
					pLoader: void 0,
					xhrSetup: void 0,
					licenseXhrSetup: void 0,
					licenseResponseCallback: void 0,
					abrController: de,
					bufferController: Oe,
					capLevelController: Ri,
					fpsController: ki,
					stretchShortVideoTrack: !1,
					maxAudioFramesDrift: 1,
					forceKeyFrameOnDiscontinuity: !0,
					abrEwmaFastLive: 3,
					abrEwmaSlowLive: 9,
					abrEwmaFastVoD: 3,
					abrEwmaSlowVoD: 9,
					abrEwmaDefaultEstimate: 5e5,
					abrBandWidthFactor: .95,
					abrBandWidthUpFactor: .7,
					abrMaxWithRealBitrate: !1,
					maxStarvationDelay: 4,
					maxLoadingDelay: 4,
					minAutoBitrate: 0,
					emeEnabled: !1,
					widevineLicenseUrl: void 0,
					drmSystemOptions: {},
					requestMediaKeySystemAccessFunc: _i,
					testBandwidth: !0,
					progressive: !1,
					lowLatencyMode: !0,
					cmcd: void 0,
					enableDateRangeMetadataCues: !0,
					enableEmsgMetadataCues: !0,
					enableID3MetadataCues: !0
				}, {
					cueHandler: {
						newCue: function(t, e, i, r) {
							for (var a, n, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0; d < r.rows.length; d++)
								if (s = !0, o = 0, l = "", !(a = r.rows[d]).isEmpty()) {
									for (var c = 0; c < a.chars.length; c++) Qi.test(a.chars[c].uchar) && s ? o++ : (l += a.chars[c].uchar, s = !1);
									a.cueStartTime = e, e === i && (i += 1e-4), o >= 16 ? o-- : o++;
									var f = ri(l.trim()),
										g = hi(e, i, f);
									t && t.cues && t.cues.getCueById(g) || ((n = new h(e, i, f)).id = g, n.line = d + 1, n.align = "left", n.position = 10 + Math.min(80, 10 * Math.floor(8 * o / 32)), u.push(n))
								} return t && u.length && (u.sort((function(t, e) {
								return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
							})), u.forEach((function(e) {
								return N(t, e)
							}))), u
						}
					},
					enableWebVTT: !0,
					enableIMSC1: !0,
					enableCEA708Captions: !0,
					captionsTextTrack1Label: "English",
					captionsTextTrack1LanguageCode: "en",
					captionsTextTrack2Label: "Spanish",
					captionsTextTrack2LanguageCode: "es",
					captionsTextTrack3Label: "Unknown CC",
					captionsTextTrack3LanguageCode: "",
					captionsTextTrack4Label: "Unknown CC",
					captionsTextTrack4LanguageCode: "",
					renderTextTracksNatively: !0
				}), {}, {
					subtitleStreamController: Ee,
					subtitleTrackController: Re,
					timelineController: Si,
					audioStreamController: ve,
					audioTrackController: ye,
					emeController: xi,
					cmcdController: Bi
				});

				function ir(t, e) {
					for (var i = 0; i < e.length; i++) {
						var r = e[i];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				var rr = function() {
					function t(e) {
						void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new ee.EventEmitter, this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null;
						var i = this.config = function(t, e) {
							if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
							if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
							if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
							return $i({}, t, e)
						}(t.DefaultConfig, e);
						this.userConfig = e, Object(l.a)(i.debug), this._autoLevelCapping = -1, i.progressive && function(t) {
							var e = t.loader;
							e !== Xi && e !== Ki ? (l.b.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : function() {
								if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
									return new self.ReadableStream({}), !0
								} catch (t) {}
								return !1
							}() && (t.loader = Xi, t.progressive = !0, t.enableSoftwareAES = !0, l.b.log("[config]: Progressive streaming enabled, using FetchLoader"))
						}(i);
						var r = i.abrController,
							a = i.bufferController,
							n = i.capLevelController,
							s = i.fpsController,
							o = this.abrController = new r(this),
							u = this.bufferController = new a(this),
							h = this.capLevelController = new n(this),
							d = new s(this),
							c = new P(this),
							f = new F(this),
							g = new V(this),
							v = this.levelController = new dt(this),
							p = new ct(this),
							m = this.streamController = new oe(this, p);
						h.setStreamController(m), d.setStreamController(m);
						var y = [v, m];
						this.networkControllers = y;
						var T = [c, f, o, u, h, d, g, p];
						this.audioTrackController = this.createController(i.audioTrackController, null, y), this.createController(i.audioStreamController, p, y), this.subtitleTrackController = this.createController(i.subtitleTrackController, null, y), this.createController(i.subtitleStreamController, p, y), this.createController(i.timelineController, null, T), this.emeController = this.createController(i.emeController, null, T), this.cmcdController = this.createController(i.cmcdController, null, T), this.latencyController = this.createController(q, null, T), this.coreComponents = T
					}
					t.isSupported = function() {
						return function() {
							var t = $t();
							if (!t) return !1;
							var e = Jt(),
								i = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
								r = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
							return !!i && !!r
						}()
					};
					var e, i, r, n = t.prototype;
					return n.createController = function(t, e, i) {
						if (t) {
							var r = e ? new t(this, e) : new t(this);
							return i && i.push(r), r
						}
						return null
					}, n.on = function(t, e, i) {
						void 0 === i && (i = this), this._emitter.on(t, e, i)
					}, n.once = function(t, e, i) {
						void 0 === i && (i = this), this._emitter.once(t, e, i)
					}, n.removeAllListeners = function(t) {
						this._emitter.removeAllListeners(t)
					}, n.off = function(t, e, i, r) {
						void 0 === i && (i = this), this._emitter.off(t, e, i, r)
					}, n.listeners = function(t) {
						return this._emitter.listeners(t)
					}, n.emit = function(t, e, i) {
						return this._emitter.emit(t, e, i)
					}, n.trigger = function(t, e) {
						if (this.config.debug) return this.emit(t, t, e);
						try {
							return this.emit(t, t, e)
						} catch (e) {
							l.b.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), this.trigger(s.a.ERROR, {
								type: o.b.OTHER_ERROR,
								details: o.a.INTERNAL_EXCEPTION,
								fatal: !1,
								event: t,
								error: e
							})
						}
						return !1
					}, n.listenerCount = function(t) {
						return this._emitter.listenerCount(t)
					}, n.destroy = function() {
						l.b.log("destroy"), this.trigger(s.a.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((function(t) {
							return t.destroy()
						})), this.networkControllers.length = 0, this.coreComponents.forEach((function(t) {
							return t.destroy()
						})), this.coreComponents.length = 0
					}, n.attachMedia = function(t) {
						l.b.log("attachMedia"), this._media = t, this.trigger(s.a.MEDIA_ATTACHING, {
							media: t
						})
					}, n.detachMedia = function() {
						l.b.log("detachMedia"), this.trigger(s.a.MEDIA_DETACHING, void 0), this._media = null
					}, n.loadSource = function(t) {
						this.stopLoad();
						var e = this.media,
							i = this.url,
							r = this.url = a.buildAbsoluteURL(self.location.href, t, {
								alwaysNormalize: !0
							});
						l.b.log("loadSource:" + r), e && i && i !== r && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(e)), this.trigger(s.a.MANIFEST_LOADING, {
							url: t
						})
					}, n.startLoad = function(t) {
						void 0 === t && (t = -1), l.b.log("startLoad(" + t + ")"), this.networkControllers.forEach((function(e) {
							e.startLoad(t)
						}))
					}, n.stopLoad = function() {
						l.b.log("stopLoad"), this.networkControllers.forEach((function(t) {
							t.stopLoad()
						}))
					}, n.swapAudioCodec = function() {
						l.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
					}, n.recoverMediaError = function() {
						l.b.log("recoverMediaError");
						var t = this._media;
						this.detachMedia(), t && this.attachMedia(t)
					}, n.removeLevel = function(t, e) {
						void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
					}, e = t, r = [{
						key: "version",
						get: function() {
							return "1.2.1"
						}
					}, {
						key: "Events",
						get: function() {
							return s.a
						}
					}, {
						key: "ErrorTypes",
						get: function() {
							return o.b
						}
					}, {
						key: "ErrorDetails",
						get: function() {
							return o.a
						}
					}, {
						key: "DefaultConfig",
						get: function() {
							return t.defaultConfig ? t.defaultConfig : er
						},
						set: function(e) {
							t.defaultConfig = e
						}
					}], (i = [{
						key: "levels",
						get: function() {
							return this.levelController.levels || []
						}
					}, {
						key: "currentLevel",
						get: function() {
							return this.streamController.currentLevel
						},
						set: function(t) {
							l.b.log("set currentLevel:" + t), this.loadLevel = t, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
						}
					}, {
						key: "nextLevel",
						get: function() {
							return this.streamController.nextLevel
						},
						set: function(t) {
							l.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
						}
					}, {
						key: "loadLevel",
						get: function() {
							return this.levelController.level
						},
						set: function(t) {
							l.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
						}
					}, {
						key: "nextLoadLevel",
						get: function() {
							return this.levelController.nextLoadLevel
						},
						set: function(t) {
							this.levelController.nextLoadLevel = t
						}
					}, {
						key: "firstLevel",
						get: function() {
							return Math.max(this.levelController.firstLevel, this.minAutoLevel)
						},
						set: function(t) {
							l.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
						}
					}, {
						key: "startLevel",
						get: function() {
							return this.levelController.startLevel
						},
						set: function(t) {
							l.b.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
						}
					}, {
						key: "capLevelToPlayerSize",
						get: function() {
							return this.config.capLevelToPlayerSize
						},
						set: function(t) {
							var e = !!t;
							e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
						}
					}, {
						key: "autoLevelCapping",
						get: function() {
							return this._autoLevelCapping
						},
						set: function(t) {
							this._autoLevelCapping !== t && (l.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
						}
					}, {
						key: "bandwidthEstimate",
						get: function() {
							var t = this.abrController.bwEstimator;
							return t ? t.getEstimate() : NaN
						}
					}, {
						key: "autoLevelEnabled",
						get: function() {
							return -1 === this.levelController.manualLevel
						}
					}, {
						key: "manualLevel",
						get: function() {
							return this.levelController.manualLevel
						}
					}, {
						key: "minAutoLevel",
						get: function() {
							var t = this.levels,
								e = this.config.minAutoBitrate;
							if (!t) return 0;
							for (var i = t.length, r = 0; r < i; r++)
								if (t[r].maxBitrate >= e) return r;
							return 0
						}
					}, {
						key: "maxAutoLevel",
						get: function() {
							var t = this.levels,
								e = this.autoLevelCapping;
							return -1 === e && t && t.length ? t.length - 1 : e
						}
					}, {
						key: "nextAutoLevel",
						get: function() {
							return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
						},
						set: function(t) {
							this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
						}
					}, {
						key: "playingDate",
						get: function() {
							return this.streamController.currentProgramDateTime
						}
					}, {
						key: "audioTracks",
						get: function() {
							var t = this.audioTrackController;
							return t ? t.audioTracks : []
						}
					}, {
						key: "audioTrack",
						get: function() {
							var t = this.audioTrackController;
							return t ? t.audioTrack : -1
						},
						set: function(t) {
							var e = this.audioTrackController;
							e && (e.audioTrack = t)
						}
					}, {
						key: "subtitleTracks",
						get: function() {
							var t = this.subtitleTrackController;
							return t ? t.subtitleTracks : []
						}
					}, {
						key: "subtitleTrack",
						get: function() {
							var t = this.subtitleTrackController;
							return t ? t.subtitleTrack : -1
						},
						set: function(t) {
							var e = this.subtitleTrackController;
							e && (e.subtitleTrack = t)
						}
					}, {
						key: "media",
						get: function() {
							return this._media
						}
					}, {
						key: "subtitleDisplay",
						get: function() {
							var t = this.subtitleTrackController;
							return !!t && t.subtitleDisplay
						},
						set: function(t) {
							var e = this.subtitleTrackController;
							e && (e.subtitleDisplay = t)
						}
					}, {
						key: "lowLatencyMode",
						get: function() {
							return this.config.lowLatencyMode
						},
						set: function(t) {
							this.config.lowLatencyMode = t
						}
					}, {
						key: "liveSyncPosition",
						get: function() {
							return this.latencyController.liveSyncPosition
						}
					}, {
						key: "latency",
						get: function() {
							return this.latencyController.latency
						}
					}, {
						key: "maxLatency",
						get: function() {
							return this.latencyController.maxLatency
						}
					}, {
						key: "targetLatency",
						get: function() {
							return this.latencyController.targetLatency
						}
					}, {
						key: "drift",
						get: function() {
							return this.latencyController.drift
						}
					}, {
						key: "forceStartLoad",
						get: function() {
							return this.streamController.forceStartLoad
						}
					}]) && ir(e.prototype, i), r && ir(e, r), Object.defineProperty(e, "prototype", {
						writable: !1
					}), t
				}();
				rr.defaultConfig = void 0
			}]).default)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/7.71018da07ebee28a8b68.js.map