// https://www.redditstatic.com/desktop2x/UserAchievementFlair.097a79dc19b28e2f6ab4.js
// Retrieved at 12/15/2021, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserAchievementFlair"], {
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				flairs: "_2gSXbxrVWkQzb3nXCaQkFh",
				flairItem: "_3pA5vkTP_ON_VYoG5WY7C8",
				flairImgWrapper: "_3rkJmlv7uPJ7-MXHuj6JR1",
				flairImg: "_3YgkxQ3fxaRYFvsTInqamE",
				flairName: "JwJGr7w5_BCdexRK2Ge1v",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/gold/powerups.ts"),
				d = n("./src/reddit/components/ScrollGradient/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				l = n("./src/reddit/hooks/useScrollGradient.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				f = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				y = n.n(b);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const b = Object(o.e)(e => Object(f.d)(e, {
						subredditId: t,
						userId: n
					})),
					g = Object(o.e)(e => Object(h.R)(e, {
						subredditId: t
					})),
					I = Object(o.d)(),
					j = Object(u.a)(),
					{
						container: x,
						isScrollGradientVisible: O,
						calculateGradientVisibility: C
					} = Object(l.a)(!1);
				Object(s.useEffect)(() => {
					C()
				}, [C]);
				return c.a.createElement("div", {
					className: Object(r.a)(y.a.container, e)
				}, c.a.createElement("div", {
					className: y.a.header
				}, c.a.createElement(p.a, {
					className: y.a.powerupsLogo
				}), v._("{r/community} {=achievements}", [v._param("r/community", g.displayText), v._param("=achievements", c.a.createElement("span", {
					className: y.a.headerText
				}, v._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), c.a.createElement("div", {
					className: y.a.headerDelimiter
				}), c.a.createElement("div", {
					className: y.a.flairs,
					onScroll: C,
					ref: x
				}, b.map(e => c.a.createElement(k, {
					flair: e,
					key: e.type
				}))), c.a.createElement("div", {
					className: y.a.footer
				}, c.a.createElement(d.a, {
					className: y.a.scrollGradient,
					isVisible: O
				}), c.a.createElement(i.t, {
					priority: i.c.Secondary,
					className: y.a.ctaButton,
					onClick: () => {
						j(Object(m.a)()), I(Object(a.f)())
					},
					isFullWidth: !0
				}, v._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			}, k = ({
				flair: e
			}) => c.a.createElement("div", {
				className: y.a.flairItem,
				"data-testid": "powerups-flair-preview"
			}, c.a.createElement("div", {
				className: y.a.flairImgWrapper
			}, c.a.createElement("img", {
				className: y.a.flairImg,
				src: e.icon.url,
				alt: e.name
			})), c.a.createElement("div", {
				className: y.a.flairName
			}, c.a.createElement("span", null, e.name)));
			var I = n("./src/reddit/selectors/experiments/econ/index.ts"),
				j = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				x = n.n(j);
			const O = ({
				achievement: e
			}) => e ? c.a.createElement("img", {
				alt: e.name,
				className: x.a.icon,
				src: e.icon.url
			}) : null;
			t.default = ({
				className: e,
				subredditId: t,
				userId: n,
				showPopupOnHover: a,
				onHover: d
			}) => {
				const i = Object(o.e)(e => Object(f.g)(e, {
						subredditId: t,
						userId: n
					})),
					m = Object(o.e)(e => Object(f.j)(e, {
						subredditId: t,
						userId: n
					})),
					l = Object(o.e)(e => Object(f.f)(e, {
						subredditId: t,
						userId: n
					})),
					[u, p] = Object(s.useState)(!1);
				if (Object(o.e)(e => Object(f.e)(e, {
						subredditId: t,
						userId: n
					}) && Object(I.k)(e))) return null;
				const h = l ? [m, ...l.achievementTypes].filter(Boolean) : null;
				if (!(!!i || !!m) || !h) return null;
				const b = (null == m ? void 0 : m.type) === (null == i ? void 0 : i.type) ? null : m,
					y = (b ? 1 : 0) + (i ? 1 : 0),
					v = (null == h ? void 0 : h.length) - y;
				return c.a.createElement("span", {
					className: Object(r.a)(x.a.container, e),
					"data-testid": "achievement-flairs",
					onMouseEnter: () => {
						a && (p(!0), null == d || d())
					},
					onMouseLeave: () => {
						p(!1)
					}
				}, c.a.createElement(O, {
					achievement: b
				}), c.a.createElement(O, {
					achievement: i
				}), !!v && c.a.createElement("span", {
					className: x.a.hiddenAchievementsCount
				}, "+", v), a && u && c.a.createElement(g, {
					className: x.a.hoverPopup,
					subredditId: t,
					userId: n
				}))
			}
		},
		"./src/reddit/components/ScrollGradient/index.m.less": function(e, t, n) {
			e.exports = {
				gradient: "_3-kakYRJykUyPafukcDzry",
				visible: "_24Ju7hkI6TbfWdJ0X4gSqu"
			}
		},
		"./src/reddit/components/ScrollGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				o = n("./src/reddit/components/ScrollGradient/index.m.less"),
				a = n.n(o);
			const d = ({
				className: e,
				isVisible: t
			}) => c.a.createElement("div", {
				className: Object(r.a)(a.a.gradient, e, {
					[a.a.visible]: t
				})
			})
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
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = (e, t) => t().features.comments.models[e],
				d = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				i = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				m = (e, t, n, r) => {
					let c = Object(s.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; c && c.depth > n && c.prev && (o = c.prev, (c = Object(s.n)(r, {
							commentLink: o,
							commentsPageKey: e
						})) && !(c.depth <= n)););
					return o.id
				},
				l = (e, t, n) => {
					const {
						commentLists: r,
						comments: s
					} = e, {
						head: a
					} = r[t];
					if (a) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: c.I,
								expEventOverride: t
							});
							return !!(Object(c.jf)(n) ? void 0 : n)
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
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => a => {
					const d = Object(s.e)(a, {
							commentId: e
						}),
						i = Object(c.g)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.o(a),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(r.g)(d) : void 0,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.o(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const [t, n] = Object(r.useState)(e), s = Object(r.useRef)(null);
				return {
					container: s,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = s.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							r = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						n(!r)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const c = [];
			var o = (e = c, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
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
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var l = (e = m, t) => {
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
					case a.i: {
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
			};
			const u = {};
			var p = (e = u, t) => {
					switch (t.type) {
						case a.d:
						case a.h:
						case a.i: {
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
				f = Object(r.c)({
					error: i,
					fullyLoaded: l,
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
				k = n("./node_modules/lodash/values.js"),
				I = n.n(k),
				j = n("./src/reddit/actions/comment/websocket/constants.ts");
			const x = {};

			function O(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var C = (e = x, t) => {
					switch (t.type) {
						case a.f:
						case h.w:
						case a.b: {
							const {
								comments: n,
								key: r
							} = t.payload, s = e[r] ? e[r] : [], c = function(e, t) {
								return I()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), o = O([...s, ...c]);
							return {
								...e,
								[r]: [...o]
							}
						}
						case j.b:
						case j.c:
						case j.d:
						case h.J:
						case h.I: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: c
								},
								commentsPageKey: o
							} = t.payload;
							return {
								...e,
								[o]: [...O([...e[o] ? e[o] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: c
								}])]
							}
						}
						default:
							return e
					}
				},
				_ = n("./node_modules/lodash/mapValues.js"),
				w = n.n(_),
				E = n("./src/reddit/helpers/commentList/index.ts"),
				P = n("./src/reddit/models/Comment/index.ts");
			const L = {};

			function T(e) {
				const t = e;
				return w()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var K = (e = L, t) => {
				switch (t.type) {
					case h.w: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: c,
							moreCommentsItem: o,
							moreComments: a
						} = t.payload, d = r[o.postId], i = e[c], m = {}, l = i[o.id];
						if (l && l.prev) {
							const {
								id: e
							} = l.prev;
							m[e] = {
								...i[e],
								next: d.head || l.next
							}
						}
						if (l && l.next) {
							const {
								id: e
							} = l.next;
							m[e] = {
								...i[e],
								prev: d.tail || l.prev
							}
						}
						if (d.head && d.tail) {
							const e = Object(E.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								}),
								t = Object(E.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: a,
									continueThreadDict: s
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[c]: {
								...e[c],
								...T(n),
								...T(s),
								...T(a),
								...m
							}
						}
					}
					case a.b:
					case a.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: c
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...T(n),
								...T(r),
								...T(c)
							}
						}
					}
					case j.b:
					case h.J: {
						const {
							comment: n,
							commentsPageKey: r,
							headCommentId: s
						} = t.payload, c = e[r], o = {};
						let a = null;
						return s && (o[s] = {
							...c[s],
							prev: Object(P.i)(n.id)
						}, a = Object(P.i)(s)), {
							...e,
							[r]: {
								...e[r],
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
							commentsPageKey: r,
							parentCommentId: s,
							depth: c
						} = t.payload, o = e[r], a = {};
						let d = null;
						if (!o[s]) return e;
						const i = o[s].next;
						return i && (a[i.id] = {
							...o[i.id],
							prev: Object(P.i)(n.id)
						}, d = i), a[s] = {
							...o[s],
							next: Object(P.i)(n.id)
						}, {
							...e,
							[r]: {
								...e[r],
								...a,
								[n.id]: {
									depth: c,
									next: d,
									prev: Object(P.i)(s)
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
					case j.b:
					case j.c:
					case h.J: {
						const {
							comment: n,
							commentsPageKey: r
						} = t.payload;
						return {
							...e,
							[r]: n.id
						}
					}
					case a.b:
					case a.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					case a.i: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					default:
						return e
				}
			};
			const S = {};
			var D = (e = S, t) => {
				switch (t.type) {
					case a.d:
					case a.b:
					case a.c:
					case a.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case h.J: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: f,
				followed: y,
				keyToChatCommentLinks: C,
				keyToCommentThreadLinkSets: K,
				keyToHeadCommentId: N,
				keyToPostId: D,
				ads: o
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "u", (function() {
				return b
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "G", (function() {
				return j
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "t", (function() {
				return K
			})), n.d(t, "z", (function() {
				return F
			})), n.d(t, "I", (function() {
				return N
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "C", (function() {
				return D
			})), n.d(t, "D", (function() {
				return A
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "J", (function() {
				return B
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "F", (function() {
				return R
			})), n.d(t, "B", (function() {
				return U
			})), n.d(t, "H", (function() {
				return q
			})), n.d(t, "p", (function() {
				return X
			})), n.d(t, "K", (function() {
				return Q
			})), n.d(t, "y", (function() {
				return W
			})), n.d(t, "A", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				c = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/comments/index.ts"),
				p = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(l.a)({
				features: {
					comments: u.a
				},
				pages: {
					comments: p.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				b = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				y = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				v = (e, t) => {
					const n = y(e, t);
					if (n) return Object(m.b)(e, {
						commentId: n
					})
				},
				g = [],
				k = Object(o.a)((e, t) => {
					const n = v(e, t),
						r = n && n.id;
					if (!r) return g;
					const {
						commentsPageKey: s
					} = t, c = e.pages.comments.keyToCommentThreadLinkSets[s], o = [];
					let d = {
						id: r,
						type: a.a.Comment
					};
					do {
						o.push(d), d = c[d.id].next
					} while (d);
					return o
				}),
				I = (e, t) => y(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				j = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				x = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				O = (e, {
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
						type: r
					} = t;
					switch (r) {
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
						} = e.platform.currentPage.urlParams, n = Object(d.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== c.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				E = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				P = e => e.moreComments.models,
				L = e => e.features.comments.models,
				T = (e, {
					commentId: t
				}) => {
					const n = Object(m.b)(e, {
						commentId: t
					});
					return n ? Object(m.a)(e, n) : ""
				},
				K = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				F = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				N = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				S = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						s = Object(m.b)(e, {
							commentId: r
						}),
						c = s && C(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof c) return {
						...s,
						depth: c
					}
				},
				D = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				A = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				M = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
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
				H = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				J = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				B = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				V = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				z = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				R = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				U = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				X = e => e.features.comments.visitHighlightFilter,
				Q = (e, t) => {
					const n = Object(m.b)(e, t);
					if (n) return Object(i.W)(e, n)
				},
				W = (e, {
					commentId: t
				}) => {
					var n, r;
					return !!((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t)
				},
				Y = (e, {
					commentId: t
				}) => {
					var n, r;
					const s = ((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserAchievementFlair.097a79dc19b28e2f6ab4.js.map