// https://www.redditstatic.com/desktop2x/ChatMessageInput~PublicAccessNetwork.1e17bdeededb64d9f7c5.js
// Retrieved at 5/14/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~PublicAccessNetwork"], {
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/uuid/v4.js"),
				c = s.n(r),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const o = Object(n.a)(a.A),
				i = e => async t => {
					t(o(e))
				}, u = () => async e => {
					e(o({
						lastChatActivityUtcTs: Date.now()
					}))
				}, d = () => async e => {
					e(o({
						correlationId: c()()
					}))
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				c = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/lessComponent.tsx"),
				i = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				u = s("./node_modules/lodash/memoize.js"),
				d = s.n(u),
				l = s("./src/lib/constants/index.ts"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				b = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(b);
			const O = o.a.div("Userpic", p.a);
			var j = d()(e => {
					const {
						userId: t
					} = e, {
						processingAvatarImageUrl: s
					} = i.a, r = (e => e.replace(l.vb.Account + "_", ""))(t), {
						avatar: n,
						color: a
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							r = s % 20 + 1,
							c = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + r).slice(-2),
							color: m[c]
						}
					})(r), o = "".concat(s, "/avatar_default_").concat(n, "_").concat(a, ".png");
					return c.a.createElement(O, {
						style: {
							backgroundImage: "url(".concat(o, ")"),
							backgroundColor: "#".concat(a)
						}
					})
				}),
				_ = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				f = s("./src/reddit/icons/svgs/Remove/index.tsx");
			const h = o.a.img("Userpic", p.a),
				g = Object(a.c)({
					account: e => e.user.account
				}),
				I = Object(n.b)(g);
			t.a = o.a.wrapped(I(e => {
				let {
					account: t,
					className: s,
					height: r,
					isLivestreaming: n,
					trash: a,
					userId: o,
					width: i
				} = e;
				const u = n ? 36 : 20,
					d = {
						height: r || u,
						width: i || u,
						minWidth: i || u
					};
				return a ? c.a.createElement("div", {
					className: s,
					style: d
				}, c.a.createElement(f.a, {
					className: p.a.TrashIcon
				})) : o ? c.a.createElement("div", {
					className: s,
					style: d
				}, t && t.accountIcon && t.id === o ? c.a.createElement(h, {
					src: t.accountIcon,
					alt: "user icon"
				}) : c.a.createElement(j, {
					userId: o
				})) : c.a.createElement("div", {
					className: s,
					style: d
				}, t && t.accountIcon ? c.a.createElement(h, {
					src: t.accountIcon,
					alt: "user icon"
				}) : c.a.createElement(_.a, {
					className: p.a.ProfileIcon
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "t", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "q", (function() {
				return d
			})), s.d(t, "r", (function() {
				return l
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "n", (function() {
				return g
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "m", (function() {
				return A
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => {
					if (t) {
						const s = c.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id;
							const c = Object(r.h)(e, {
								streamIdFromPath: t.post.id
							});
							c === r.a.LIVE ? s.type = "stream_live" : c === r.a.VOD ? s.type = "stream_vod" : c === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: c.post(e, t.post.id),
							media: s,
							subreddit: c.subreddit(e)
						}
					}
					return {
						subreddit: c.subreddit(e)
					}
				},
				a = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				o = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, n(e)),
				i = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, n(e)),
				u = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, n(s, e)),
				d = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, a(t), e && Object.assign({}, n(t, e))),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, a(t), n(t, e)),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, a(t), n(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video"
				}, a(t), n(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, a(t), n(t, e)),
				O = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, a(t), n(t, e)),
				j = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, a(t), n(t, e)),
				_ = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, n(t, s))
				},
				f = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, n(t, s))
				},
				h = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, n(s, t)),
				g = (e, t, s) => r => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: {
						scrubbing_start_ms: e,
						scrubbing_end_ms: t
					}
				}, a(r), n(r, s)),
				I = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close"
				}, n(t, e)),
				v = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause"
				}, n(t, e)),
				E = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play"
				}, n(t, e)),
				A = e => t => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume"
				}, n(t, e)),
				N = e => t => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume"
				}, n(t, e)),
				L = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video"
				}, n(t, e))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				c = s.n(r);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, c.a.createElement("g", null, c.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "e", (function() {
				return B
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "h", (function() {
				return z
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "d", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				b = s.n(l)()(e => Object(c.a)(Object(r.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const O = e => e.publicAccessNetwork.reports.reported,
				j = e => e.publicAccessNetwork.history,
				_ = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				h = e => e.publicAccessNetwork.hlsStreams,
				g = Object(r.a)(h, e => e.ended),
				I = Object(r.a)(h, e => e.removed),
				v = Object(r.a)(e => e.publicAccessNetwork.models, g, I, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							c = T(r, o.b.ENDED) ? o.b.ENDED : r,
							n = s.stream.vod_accessible;
						return c === r && !0 === n ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: c,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							c = T(r, o.b.ENDED) ? o.b.ENDED : r,
							n = s.stream.vod_accessible;
						return c === r && !1 === n ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: c,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				E = (e, t) => {
					return v(e)[Object(a.g)(t)]
				},
				A = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => b(t.listingName)(e, t), v, O, i.i, u.b, (e, t, s, r, c, i) => {
					if (i) {
						const n = [];
						if (e) {
							const t = Object(a.g)(e);
							s[t] && n.push(t)
						}
						const i = n.concat(t),
							u = [...new Set(i)],
							d = new Set([...r, ...c]);
						return u.filter(e => {
							const t = s[e];
							return !d.has(e) && !t.post.isHidden && t.stream.state !== o.b.KILLED && t.stream.state !== o.b.PURGED
						})
					}
					const u = new Set([...r, ...c]);
					return Object.keys(s).filter(e => !u.has(e)).map(e => s[e]).filter(e => e.rank !== n.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.b.KILLED && e.stream.state !== o.b.PURGED).map(e => e.post.id)
				}),
				N = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, v, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return A(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				L = Object(r.a)(v, N, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === o.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				k = Object(r.a)(v, N, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				D = Object(r.a)(f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: c
					} = t;
					return N(e, {
						listingName: s || c,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				w = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, v, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: c
					} = t;
					return N(e, {
						listingName: s || c,
						streamIdFromPath: r
					})
				}, j, (e, t, s, r) => {
					if (!s.length) return;
					const c = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						n = c.find(e => e.stream.state === o.b.IS_LIVE);
					if (n) return n.post.id;
					const a = c.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				C = Object(c.a)(Object(r.a)(w, v, (e, t) => e ? t[e] : void 0)),
				y = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.g)(s) : void 0
				}, w, O, i.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: c
					} = t;
					return N(e, {
						listingName: s || c,
						streamIdFromPath: r
					})
				}, (e, t, s, r, c) => !e || s.includes(e) || r.includes(e) ? t || c[0] : e),
				x = Object(r.a)(_, f, D, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				F = Object(r.a)(_, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(c.a)(Object(r.a)(y, v, (e, t) => e ? t[e] : void 0)),
				V = Object(c.a)(Object(r.a)(x, v, (e, t) => e ? t[e] : void 0)),
				S = Object(c.a)(Object(r.a)(F, v, (e, t) => e ? t[e] : void 0)),
				U = (Object(c.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				B = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? E(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function T(e, t) {
				const s = {
					[o.b.NOT_STARTED]: 0,
					[o.b.PUBLISHED]: 1,
					[o.b.IS_LIVE]: 2,
					[o.b.DISCONNECTED]: 2,
					[o.b.ENDED]: 3,
					[o.b.KILLED]: 4,
					[o.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const M = Object(r.a)(y, j, (e, t) => e && t.timestamps[e] || 0);
			var R;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(R || (R = {}));
			const z = Object(r.a)(y, v, p.b, (e, t, s) => {
					if (s) return R.INTRO;
					const r = e && t[e];
					if (!r) return R.UNAVAILABLE;
					const c = r.stream.state;
					return c === o.b.IS_LIVE || c === o.b.DISCONNECTED ? R.LIVE : c === o.b.ENDED && r.stream.vod_accessible ? R.VOD : R.UNAVAILABLE
				}),
				H = Object(r.a)(P, z, p.b, d.c, d.p, (e, t, s, r, c) => s ? r : e ? t === R.LIVE || t === R.VOD ? e.stream.hls_url : c : void 0),
				K = Object(r.a)(P, z, M, (e, t, s) => e ? t === R.LIVE ? e.broadcast_time : t === R.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				o = Object(r.a)(a, n.o, (e, t) => t && !e.isIntroFinished),
				i = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				u = e => !!e && e + c.a > Date.now()
		},
		"./src/reddit/selectors/experiments/goldRpanLivePreview.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				return Object(c.c)(e, {
					experimentEligibilitySelector: c.a,
					experimentName: r.hb
				}) === r.ob.Enabled
			}
		}
	}
]);
//# sourceMappingURL=ChatMessageInput~PublicAccessNetwork.1e17bdeededb64d9f7c5.js.map