// https://www.redditstatic.com/desktop2x/UserAchievementFlair.40ffee30061c0e22bf37.js
// Retrieved at 10/1/2021, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserAchievementFlair"], {
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				achievements: "_3yyAEiwzXU-705K4-2CYcp",
				achievementItem: "_29gOi1XSw60-K2kDQZerSu",
				achievementImgWrapper: "_2Quz2MhfZx-Ctyd9zFO7ju",
				achievementImg: "_3_H_5cdEEjCzMRE60q9kbE",
				achievementName: "_1BTx4JIyc9txuPsRaFBelE",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
				gradientVisible: "_1gcqKximkvdrFYxxOUaH4g",
				ctaButton: "_1q2lrbLX6F7HH2qBbvitLG"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_3NdKulBcLHFmpKDAy9Barm",
				hoverPopup: "_3TMcWG2R9E0iMw_Qcg9tfi",
				icon: "_2Xc055D-KCIUe6f2E3Ghgr",
				hiddenAchievementsCount: "_1zxdGxj6UKKqJMibObCbeA"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/gold/powerups.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				m = n("./src/reddit/hooks/useScrollGradient.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				b = n.n(h);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const h = Object(o.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: n
					})),
					v = Object(o.e)(e => Object(f.Q)(e, {
						subredditId: t
					})),
					g = Object(o.d)(),
					I = Object(u.a)(),
					{
						container: j,
						isScrollGradientVisible: k,
						calculateGradientVisibility: O
					} = Object(m.a)(!1);
				Object(r.useEffect)(() => {
					O()
				}, [O]);
				return c.a.createElement("div", {
					className: Object(s.a)(b.a.container, e)
				}, c.a.createElement("div", {
					className: b.a.header
				}, c.a.createElement(l.a, {
					className: b.a.powerupsLogo
				}), y._("{r/community} {=achievements}", [y._param("r/community", v.displayText), y._param("=achievements", c.a.createElement("span", {
					className: b.a.headerText
				}, y._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), c.a.createElement("div", {
					className: b.a.headerDelimiter
				}), c.a.createElement("div", {
					className: b.a.achievements,
					onScroll: O,
					ref: j
				}, h.map(e => !e.isLocked && c.a.createElement("div", {
					className: b.a.achievementItem,
					key: e.type
				}, c.a.createElement("div", {
					className: b.a.achievementImgWrapper
				}, c.a.createElement("img", {
					className: b.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), c.a.createElement("div", {
					className: b.a.achievementName
				}, c.a.createElement("span", null, e.name))))), c.a.createElement("div", {
					className: b.a.footer
				}, c.a.createElement("div", {
					className: Object(s.a)(b.a.scrollGradient, {
						[b.a.gradientVisible]: k
					})
				}), c.a.createElement(d.s, {
					priority: d.b.Secondary,
					className: b.a.ctaButton,
					onClick: () => {
						I(Object(i.a)()), g(Object(a.e)())
					},
					isFullWidth: !0
				}, y._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var g = n("./src/reddit/selectors/experiments/econ/index.ts"),
				I = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				j = n.n(I);
			const k = ({
				achievement: e
			}) => e ? c.a.createElement("img", {
				alt: e.name,
				className: j.a.icon,
				src: e.icon.url
			}) : null;
			t.default = ({
				className: e,
				subredditId: t,
				userId: n,
				showPopupOnHover: a,
				onHover: d
			}) => {
				const i = Object(o.e)(e => Object(p.f)(e, {
						subredditId: t,
						userId: n
					})),
					m = Object(o.e)(e => Object(p.h)(e, {
						subredditId: t,
						userId: n
					})),
					u = Object(o.e)(e => Object(p.e)(e, {
						subredditId: t,
						userId: n
					})),
					[l, f] = Object(r.useState)(!1);
				if (Object(o.e)(e => Object(p.d)(e, {
						subredditId: t,
						userId: n
					}) && Object(g.m)(e))) return null;
				const h = u ? [...u.supporterTypes, ...u.achievementTypes] : null;
				if (!(!!i || !!m) || !h) return null;
				const b = (null == m ? void 0 : m.type) === (null == i ? void 0 : i.type) ? null : m,
					y = (b ? 1 : 0) + (i ? 1 : 0),
					I = (null == h ? void 0 : h.length) - y;
				return c.a.createElement("span", {
					className: Object(s.a)(j.a.container, e),
					"data-testid": "achievement-flairs",
					onMouseEnter: () => {
						a && (f(!0), null == d || d())
					},
					onMouseLeave: () => {
						f(!1)
					}
				}, c.a.createElement(k, {
					achievement: b
				}), c.a.createElement(k, {
					achievement: i
				}), !!I && c.a.createElement("span", {
					className: j.a.hiddenAchievementsCount
				}, "+", I), a && l && c.a.createElement(v, {
					className: j.a.hoverPopup,
					subredditId: t,
					userId: n
				}))
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				d = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				i = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, s) => {
					let c = Object(r.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; c && c.depth > n && c.prev && (o = c.prev, (c = Object(r.n)(s, {
							commentLink: o,
							commentsPageKey: e
						})) && !(c.depth <= n)););
					return o.id
				},
				u = (e, t, n) => {
					const {
						commentLists: s,
						comments: r
					} = e, {
						head: a
					} = s[t];
					if (a) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: c.E,
								expEventOverride: t
							});
							return !!(Object(c.Me)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => a => {
					const d = Object(r.e)(a, {
							commentId: e
						}),
						i = Object(c.f)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.defaults(a),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.defaults(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const [t, n] = Object(s.useState)(e), r = Object(s.useRef)(null);
				return {
					container: r,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = r.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							s = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						n(!s)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), r.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), r.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), r.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const c = [];
			var o = (e = c, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
						default:
							return e
					}
				},
				a = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var i = (e = d, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.h:
					case a.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case a.a:
					case a.e: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var u = (e = m, t) => {
				switch (t.type) {
					case a.c:
					case a.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var p = (e = l, t) => {
					switch (t.type) {
						case a.d:
						case a.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case a.b:
						case a.a:
						case a.f:
						case a.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				f = Object(s.c)({
					error: i,
					fullyLoaded: u,
					pending: p
				}),
				h = n("./src/reddit/actions/comment/constants.ts");
			const b = [];
			var y = (e = b, t) => {
					switch (t.type) {
						case h.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case h.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case h.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				v = n("./node_modules/lodash/uniqBy.js"),
				g = n.n(v),
				I = n("./node_modules/lodash/values.js"),
				j = n.n(I),
				k = n("./src/reddit/actions/comment/websocket/constants.ts");
			const O = {};

			function x(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var E = (e = O, t) => {
					switch (t.type) {
						case a.f:
						case h.w:
						case a.b: {
							const {
								comments: n,
								key: s
							} = t.payload, r = e[s] ? e[s] : [], c = function(e, t) {
								return j()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, r.find(e => e.stickied)), o = x([...r, ...c]);
							return {
								...e,
								[s]: [...o]
							}
						}
						case k.b:
						case k.c:
						case k.d:
						case h.J:
						case h.I: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: r,
									authorId: c
								},
								commentsPageKey: o
							} = t.payload;
							return {
								...e,
								[o]: [...x([...e[o] ? e[o] : [], {
									id: n,
									created: s,
									stickied: r,
									authorId: c
								}])]
							}
						}
						default:
							return e
					}
				},
				C = n("./node_modules/lodash/mapValues.js"),
				_ = n.n(C),
				w = n("./src/reddit/helpers/commentList/index.ts"),
				L = n("./src/reddit/models/Comment/index.ts");
			const P = {};

			function K(e) {
				const t = e;
				return _()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var T = (e = P, t) => {
				switch (t.type) {
					case h.w: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: r,
							key: c,
							moreCommentsItem: o,
							moreComments: a
						} = t.payload, d = s[o.postId], i = e[c], m = {}, u = i[o.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							m[e] = {
								...i[e],
								next: d.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							m[e] = {
								...i[e],
								prev: d.tail || u.prev
							}
						}
						if (d.head && d.tail) {
							const e = Object(w.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: r
								}),
								t = Object(w.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: r
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[c]: {
								...e[c],
								...K(n),
								...K(r),
								...K(a),
								...m
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: s,
							key: r,
							moreComments: c
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...K(n),
								...K(s),
								...K(c)
							}
						}
					}
					case k.b:
					case h.J: {
						const {
							comment: n,
							commentsPageKey: s,
							headCommentId: r
						} = t.payload, c = e[s], o = {};
						let a = null;
						return r && (o[r] = {
							...c[r],
							prev: Object(L.i)(n.id)
						}, a = Object(L.i)(r)), {
							...e,
							[s]: {
								...e[s],
								...o,
								[n.id]: {
									depth: 0,
									next: a,
									prev: null
								}
							}
						}
					}
					case h.I: {
						const {
							comment: n,
							commentsPageKey: s,
							parentCommentId: r,
							depth: c
						} = t.payload, o = e[s], a = {};
						let d = null;
						if (!o[r]) return e;
						const i = o[r].next;
						return i && (a[i.id] = {
							...o[i.id],
							prev: Object(L.i)(n.id)
						}, d = i), a[r] = {
							...o[r],
							next: Object(L.i)(n.id)
						}, {
							...e,
							[s]: {
								...e[s],
								...a,
								[n.id]: {
									depth: c,
									next: d,
									prev: Object(L.i)(r)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const F = {};
			var N = (e = F, t) => {
				switch (t.type) {
					case k.b:
					case k.c:
					case h.J: {
						const {
							comment: n,
							commentsPageKey: s
						} = t.payload;
						return {
							...e,
							[s]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var A = (e = D, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case h.J: {
						const {
							parentId: n,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: f,
				followed: y,
				keyToChatCommentLinks: E,
				keyToCommentThreadLinkSets: T,
				keyToHeadCommentId: N,
				keyToPostId: A,
				ads: o
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "H", (function() {
				return O
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "q", (function() {
				return K
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "t", (function() {
				return F
			})), n.d(t, "A", (function() {
				return N
			})), n.d(t, "J", (function() {
				return D
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "D", (function() {
				return M
			})), n.d(t, "E", (function() {
				return S
			})), n.d(t, "F", (function() {
				return H
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "K", (function() {
				return V
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "G", (function() {
				return J
			})), n.d(t, "C", (function() {
				return R
			})), n.d(t, "I", (function() {
				return Q
			})), n.d(t, "p", (function() {
				return X
			})), n.d(t, "L", (function() {
				return Z
			})), n.d(t, "y", (function() {
				return W
			})), n.d(t, "z", (function() {
				return Y
			})), n.d(t, "B", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				c = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(l.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: f.a
				}
			});
			const h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				b = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				v = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				g = (e, t) => {
					const n = v(e, t);
					if (n) return Object(u.b)(e, {
						commentId: n
					})
				},
				I = [],
				j = Object(o.a)((e, t) => {
					const n = g(e, t),
						s = n && n.id;
					if (!s) return I;
					const {
						commentsPageKey: r
					} = t, c = e.pages.comments.keyToCommentThreadLinkSets[r], o = [];
					let d = {
						id: s,
						type: a.a.Comment
					};
					do {
						o.push(d), d = c[d.id].next
					} while (d);
					return o
				}),
				k = (e, t) => v(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				O = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				x = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[s];
					return r ? n ? r[n.id] : t ? r[t] : null : null
				},
				E = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				C = (e, t) => {
					const n = t.commentsPageKey ? x(e, t) : null;
					return n ? n.depth : null
				},
				_ = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: s
					} = t;
					switch (s) {
						case a.a.Comment:
							return e.features.comments.models[n];
						case a.a.MoreComments:
							return e.moreComments.models[n];
						case a.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				w = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.s)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== c.D).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				L = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				P = e => e.moreComments.models,
				K = e => e.features.comments.models,
				T = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
						commentId: t
					});
					return n ? Object(u.a)(e, n) : ""
				},
				F = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				N = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				A = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						s = Object.keys(n).find(e => n[e]),
						r = Object(u.b)(e, {
							commentId: s
						}),
						c = r && C(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof c) return {
						...r,
						depth: c
					}
				},
				M = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				S = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				H = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = r()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				G = (e, {
					id: t
				}) => e.continueThreads.models[t],
				z = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				B = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				V = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				U = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				q = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				J = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				R = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				X = e => e.features.comments.visitHighlightFilter,
				Z = (e, t) => {
					const n = Object(u.b)(e, t);
					if (n) return Object(i.V)(e, n)
				},
				W = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
							commentId: t
						}),
						s = n && n.authorId || "";
					return Object(m.T)(e, s)
				},
				Y = (e, {
					commentId: t
				}) => {
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t)
				},
				$ = (e, {
					commentId: t
				}) => {
					var n, s;
					const r = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === t);
					return !!(r && r.expiresAt < Date.now())
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserAchievementFlair.40ffee30061c0e22bf37.js.map