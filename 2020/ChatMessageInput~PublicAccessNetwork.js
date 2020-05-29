// https://www.redditstatic.com/desktop2x/ChatMessageInput~PublicAccessNetwork.91f6f39fa271ab56c0a8.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
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
				n = s.n(r),
				c = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const o = Object(c.a)(a.A),
				i = e => async t => {
					t(o(e))
				}, u = () => async e => {
					e(o({
						lastChatActivityUtcTs: Date.now()
					}))
				}, d = () => async e => {
					e(o({
						correlationId: n()()
					}))
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				c = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				l = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				m = s.n(l);
			const b = u.a.div("Userpic", m.a);
			t.a = c()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = r.a, n = (e => e.replace(i.vb.Account + "_", ""))(t), {
					avatar: c,
					color: a
				} = (e => {
					const t = d.length,
						s = parseInt(e, 36),
						r = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + r).slice(-2),
						color: d[n]
					}
				})(n), u = "".concat(s, "/avatar_default_").concat(c, "_").concat(a, ".png");
				return o.a.createElement(b, {
					style: {
						backgroundImage: "url(".concat(u, ")"),
						backgroundColor: "#".concat(a)
					}
				})
			})
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
				n = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				u = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				l = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				m = s.n(l);
			const b = o.a.img("Userpic", m.a),
				p = Object(a.c)({
					account: e => e.user.account
				}),
				f = Object(c.b)(p);
			t.a = o.a.wrapped(f(e => {
				let {
					account: t,
					className: s,
					height: r,
					isLivestreaming: c,
					trash: a,
					userId: o,
					width: l
				} = e;
				const p = c ? 36 : 20,
					f = {
						height: r || p,
						width: l || p,
						minWidth: l || p
					};
				return a ? n.a.createElement("div", {
					className: s,
					style: f
				}, n.a.createElement(d.a, {
					className: m.a.TrashIcon
				})) : o ? n.a.createElement("div", {
					className: s,
					style: f
				}, t && t.accountIcon && t.id === o ? n.a.createElement(b, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(i.a, {
					userId: o
				})) : n.a.createElement("div", {
					className: s,
					style: f
				}, t && t.accountIcon ? n.a.createElement(b, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(u.a, {
					className: m.a.ProfileIcon
				}))
			}), "ChatIcon", m.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "w", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "s", (function() {
				return b
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "t", (function() {
				return f
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "o", (function() {
				return E
			})), s.d(t, "v", (function() {
				return C
			})), s.d(t, "m", (function() {
				return A
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "u", (function() {
				return L
			})), s.d(t, "d", (function() {
				return x
			}));
			var r = s("./src/reddit/constants/chat.ts"),
				n = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => {
					if (t) {
						const s = a.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(c.h)(e, {
								streamIdFromPath: t.post.id
							});
							r === c.a.LIVE ? s.type = "stream_live" : r === c.a.VOD ? s.type = "stream_vod" : r === c.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						if (t.post.subreddit) {
							const r = {
								id: t.post.subreddit.id,
								name: t.post.subreddit.name
							};
							return {
								post: a.post(e, t.post.id),
								media: s,
								subreddit: r
							}
						}
						return {
							post: a.post(e, t.post.id),
							media: s
						}
					}
					return {
						subreddit: a.subreddit(e)
					}
				},
				i = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(c.h)(e, {
						streamIdFromPath: t.post.id
					});
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
						chatState: t.chat_disabled ? r.f.None : r.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs
					}
				},
				u = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				d = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, o(e)),
				l = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, o(e)),
				m = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				b = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: i(s, e, t)
				}, u(s), e && Object.assign({}, o(s, e))),
				p = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				f = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				O = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				h = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				j = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				_ = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				g = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: i(s, e, t)
				}, u(s), o(s, e)),
				I = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: i(s, e, t)
				}, o(s, e)),
				k = e => t => {
					const s = Object(c.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				},
				v = (e, t, s) => r => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: i(r, t, s)
				}, o(r, t)),
				E = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: i(s, e, t)
				}, u(s)),
				C = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.profile(t),
					screen: a.screen(t)
				}, o(t, e)),
				A = e => e => {
					const t = o(e);
					return !Object(n.e)(e) && t.subreddit && (t.subreddit.id = void 0), Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.profile(e),
						screen: a.screen(e)
					}, t)
				},
				y = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: i(s, e, t)
				}, o(s, e)),
				N = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: i(s, e, t)
				}, o(s, e)),
				D = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: i(s, e, t)
				}, o(s, e)),
				w = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: i(s, e, t)
				}, o(s, e)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: i(s, e, t)
				}, o(s, e)),
				x = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: i(s, e, t)
				}, o(s, e))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return v
			})), s.d(t, "l", (function() {
				return A
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "e", (function() {
				return U
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
				n = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				b = s.n(l)()(e => Object(n.a)(Object(r.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const f = e => e.publicAccessNetwork.reports.reported,
				O = e => e.publicAccessNetwork.history,
				h = e => e.publicAccessNetwork.history.cursor,
				j = e => e.publicAccessNetwork.history.visitOrder,
				_ = e => e.publicAccessNetwork.hlsStreams,
				g = Object(r.a)(_, e => e.ended),
				I = Object(r.a)(_, e => e.removed),
				k = Object(r.a)(e => e.publicAccessNetwork.models, g, I, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, o.b.ENDED) ? o.b.ENDED : r,
							c = s.stream.vod_accessible;
						return n === r && !0 === c ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, o.b.ENDED) ? o.b.ENDED : r,
							c = s.stream.vod_accessible;
						return n === r && !1 === c ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				v = (e, t) => {
					return k(e)[Object(a.g)(t)]
				},
				E = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => b(t.listingName)(e, t), k, f, i.i, u.b, (e, t, s, r, n, i) => {
					if (i) {
						const c = [];
						if (e) {
							const t = Object(a.g)(e);
							s[t] && c.push(t)
						}
						const i = c.concat(t),
							u = [...new Set(i)],
							d = new Set([...r, ...n]);
						return u.filter(e => {
							const t = s[e];
							return !d.has(e) && !t.post.isHidden && t.stream.state !== o.b.KILLED && t.stream.state !== o.b.PURGED
						})
					}
					const u = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !u.has(e)).map(e => s[e]).filter(e => e.rank !== c.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.b.KILLED && e.stream.state !== o.b.PURGED).map(e => e.post.id)
				}),
				C = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, k, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return E(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				A = Object(r.a)(k, C, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === o.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				y = Object(r.a)(k, C, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				N = Object(r.a)(j, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return C(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				D = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, k, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return C(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, O, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						c = n.find(e => e.stream.state === o.b.IS_LIVE);
					if (c) return c.post.id;
					const a = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				w = Object(n.a)(Object(r.a)(D, k, (e, t) => e ? t[e] : void 0)),
				L = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.g)(s) : void 0
				}, D, f, i.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return C(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				x = Object(r.a)(h, j, N, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				F = Object(r.a)(h, j, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(n.a)(Object(r.a)(L, k, (e, t) => e ? t[e] : void 0)),
				M = Object(n.a)(Object(r.a)(x, k, (e, t) => e ? t[e] : void 0)),
				S = Object(n.a)(Object(r.a)(F, k, (e, t) => e ? t[e] : void 0)),
				V = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, k, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				U = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? v(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function B(e, t) {
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
			const T = Object(r.a)(L, O, (e, t) => e && t.timestamps[e] || 0);
			var R;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(R || (R = {}));
			const z = Object(r.a)(L, k, p.b, (e, t, s) => {
					if (s) return R.INTRO;
					const r = e && t[e];
					if (!r) return R.UNAVAILABLE;
					const n = r.stream.state;
					return n === o.b.IS_LIVE || n === o.b.DISCONNECTED ? R.LIVE : n === o.b.ENDED && r.stream.vod_accessible ? R.VOD : R.UNAVAILABLE
				}),
				H = Object(r.a)(P, z, p.b, d.b, d.o, (e, t, s, r, n) => s ? r : e ? t === R.LIVE || t === R.VOD ? e.stream.hls_url : n : void 0),
				K = Object(r.a)(P, z, T, (e, t, s) => e ? t === R.LIVE ? e.broadcast_time : t === R.VOD && s < e.broadcast_time ? s : 0 : 0)
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
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				o = Object(r.a)(a, c.n, (e, t) => t && !e.isIntroFinished),
				i = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				u = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/experiments/goldRpanLivePreview.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const c = e => {
				return Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: r.lb
				}) === r.ub.Enabled
			}
		}
	}
]);
//# sourceMappingURL=ChatMessageInput~PublicAccessNetwork.91f6f39fa271ab56c0a8.js.map