// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.d2afd1fe635e2ed705c1.js
// Retrieved at 10/29/2020, 6:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork"], {
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					n = null,
					r = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function c(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function a(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function i(e) {
					t = !1
				}

				function o() {
					document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
				}

				function u(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (c(e.activeElement) && a(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), o())
				}), !0), o(), e.addEventListener("focus", (function(e) {
					var s, n, i;
					c(e.target) && (t || (s = e.target, n = s.type, "INPUT" === (i = s.tagName) && r[n] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && a(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					c(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(n), n = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "z", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "v", (function() {
				return b
			})), s.d(t, "t", (function() {
				return p
			})), s.d(t, "w", (function() {
				return f
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "s", (function() {
				return _
			})), s.d(t, "o", (function() {
				return y
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "y", (function() {
				return k
			})), s.d(t, "p", (function() {
				return N
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "q", (function() {
				return D
			})), s.d(t, "x", (function() {
				return P
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "h", (function() {
				return T
			})), s.d(t, "i", (function() {
				return V
			}));
			var n, r = s("./src/reddit/constants/chat.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const i = (e, t) => {
					if (t) {
						const s = a.media(e, t.post.id),
							n = a.post(e, t.post.id),
							r = a.subreddit(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(c.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === c.a.LIVE ? s.type = "stream_live" : n === c.a.VOD ? s.type = "stream_vod" : n === c.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: a.subreddit(e)
					}
				},
				o = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(c.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === r.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === c.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: a ? r.f.None : r.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				u = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				d = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, i(e)),
				l = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, i(e)),
				m = (e, t) => s => Object.assign(Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge"
				}, i(s, e)), {
					actionInfo: a.actionInfo(s, {
						position: t || 0
					})
				}),
				b = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: o(s, e, t)
				}, u(s)), e && Object.assign({}, i(s, e))),
				p = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: o(s, e, t)
				}, u(s)), i(s, e)),
				f = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: o(s, e, t)
				}, u(s)), i(s, e)),
				O = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: o(s, e, t)
				}, u(s)), i(s, e)),
				j = (e, t, s) => n => Object.assign(Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: o(n, e, t)
				}, u(n)), i(n, e)), {
					actionInfo: a.actionInfo(n, {
						referralId: s
					})
				}),
				v = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: o(s, e, t)
				}, u(s)), i(s, e)),
				g = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: o(s, e, t)
				}, u(s)), i(s, e)),
				h = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: o(s, e, t)
				}, u(s)), i(s, e)),
				E = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: o(s, e, t)
				}, i(s, e)),
				_ = e => t => {
					const s = Object(c.l)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, i(t, s))
				},
				y = (e, t, s) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: o(n, t, s)
				}, i(n, t)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: o(s, e, t)
				}, u(s)),
				k = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.profile(t),
					screen: a.screen(t)
				}, i(t, e)),
				N = e => e => {
					const t = i(e);
					return Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.profile(e),
						screen: a.screen(e)
					}, t)
				},
				w = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: o(s, e, t)
				}, i(s, e)),
				I = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: o(s, e, t)
				}, i(s, e)),
				A = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: o(s, e, t)
				}, i(s, e)),
				D = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: o(s, e, t)
				}, i(s, e)),
				P = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: o(s, e, t)
				}, i(s, e)),
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: o(s, e, t)
				}, i(s, e)),
				T = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: o(s, e, t)
				}, i(s, e)), u(s)),
				V = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: o(s, e, t)
				}, i(s, e)), u(s))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return L
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "i", (function() {
				return P
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "h", (function() {
				return U
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "a", (function() {
				return K
			})), s.d(t, "j", (function() {
				return H
			})), s.d(t, "b", (function() {
				return G
			})), s.d(t, "e", (function() {
				return z
			})), s.d(t, "g", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				b = s.n(l)()(e => Object(r.a)(Object(n.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const f = e => e.publicAccessNetwork.models,
				O = e => e.publicAccessNetwork.reports.reported,
				j = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				h = e => e.publicAccessNetwork.hlsStreams,
				E = Object(n.a)(h, e => e.ended),
				_ = Object(n.a)(h, e => e.removed),
				y = Object(n.a)(f, E, _, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = B(n, i.a.ENDED) ? i.a.ENDED : n,
							c = s.stream.vod_accessible;
						return r === n && !0 === c ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = B(n, i.a.ENDED) ? i.a.ENDED : n,
							c = s.stream.vod_accessible;
						return r === n && !1 === c ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				L = (e, t) => {
					return y(e)[Object(a.h)(t)]
				},
				k = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => b(t.listingName)(e, t), y, O, o.h, u.d, (e, t, s, n, r, o) => {
					if (o) {
						const c = [];
						if (e) {
							const t = Object(a.h)(e);
							s[t] && c.push(t)
						}
						const o = c.concat(t),
							u = [...new Set(o)],
							d = new Set([...n, ...r]);
						return u.filter(e => {
							const t = s[e];
							return !d.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
						})
					}
					const u = new Set([...n, ...r]);
					return Object.keys(s).filter(e => !u.has(e)).map(e => s[e]).filter(e => e.rank !== c.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.a.KILLED && e.stream.state !== i.a.PURGED).map(e => e.post.id)
				}),
				N = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, y, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return k(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				w = Object(n.a)(y, N, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				I = Object(n.a)(y, N, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				A = Object(n.a)(g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return N(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				D = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, y, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return N(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, j, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						c = r.find(e => e.stream.state === i.a.IS_LIVE);
					if (c) return c.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				P = Object(r.a)(Object(n.a)(D, y, (e, t) => e ? t[e] : void 0)),
				S = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.h)(s) : void 0
				}, D, O, o.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return N(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				T = Object(n.a)(v, g, A, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				V = Object(n.a)(v, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(r.a)(Object(n.a)(S, y, (e, t) => e ? t[e] : void 0)),
				U = Object(r.a)(Object(n.a)(T, y, (e, t) => e ? t[e] : void 0)),
				F = Object(r.a)(Object(n.a)(V, y, (e, t) => e ? t[e] : void 0)),
				C = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, y, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(S, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				x = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? L(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(n.a)(S, j, (e, t) => e && t.timestamps[e] || 0);
			var K;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(K || (K = {}));
			const H = Object(n.a)(S, y, p.b, (e, t, s) => {
					if (s) return K.INTRO;
					const n = e && t[e];
					if (!n) return K.UNAVAILABLE;
					const r = n.stream.state;
					return r === i.a.IS_LIVE || r === i.a.DISCONNECTED ? K.LIVE : r === i.a.ENDED && n.stream.vod_accessible ? K.VOD : K.UNAVAILABLE
				}),
				G = Object(n.a)(M, H, p.b, d.b, d.o, (e, t, s, n, r) => s ? n : e ? t === K.LIVE || t === K.VOD ? e.stream.hls_url : r : void 0),
				z = Object(n.a)(M, H, R, (e, t, s) => e ? t === K.LIVE ? e.broadcast_time : t === K.VOD && s < e.broadcast_time ? s : 0 : 0),
				q = (e, t) => {
					const s = f(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(a, c.n, (e, t) => t && !e.isIntroFinished),
				o = Object(n.a)(a, e => e.lastChatActivityUtcTs),
				u = e => !!e && e + r.a > Date.now()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.d2afd1fe635e2ed705c1.js.map