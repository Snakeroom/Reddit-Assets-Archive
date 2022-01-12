// https://www.redditstatic.com/desktop2x/NewCommentPill.8fdcc8360507f3c99ab6.js
// Retrieved at 1/12/2022, 10:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NewCommentPill"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/_copyArray.js"),
				o = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(r(e), n(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/_shuffleSelf.js"),
				o = s("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var s = o(e);
				return r(s, n(t, 0, s.length))
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySampleSize.js"),
				r = s("./node_modules/lodash/_baseSampleSize.js"),
				o = s("./node_modules/lodash/isArray.js"),
				a = s("./node_modules/lodash/_isIterateeCall.js"),
				c = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return t = (s ? a(e, t, s) : void 0 === t) ? 1 : c(t), (o(e) ? n : r)(e, t)
			}
		},
		"./src/reddit/components/NewCommentPill/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2X4xugrTQ5e3TVxPPEHqGh",
				pillContainer: "_3JKnqeBKw2wp7eHzFXNXSe",
				newCommentsText: "_2nAeJnoRM4DyyVYoJhvMc4",
				isNightMode: "_2q-ZKRaT1WjKg092R6La5J",
				pillButton: "_1cubpGNEaCAVnpJl1KBPcO",
				isOverlayWrapper: "_17DaQdt4k4TJ6mwt56tklv",
				wrapperVisible: "ZLsbIthTKUHOvUiC24Rjy",
				memberIcon: "_2w3IfaLQEQVcXSaXJI2vBR",
				presenceDotOutlineClass: "_1R_toh-B3KDXQd6yRXNIE7",
				joinOptimizationsM2: "_2kHSzASUM6v9nJy3xdiEwh"
			}
		},
		"./src/reddit/components/NewCommentPill/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "trackNewCommentPill", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/realtime/GQLSubscription/async.tsx"),
				d = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Pill/index.tsx"),
				m = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				b = s("./src/reddit/components/PostContent/index.tsx"),
				p = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				j = s("./src/reddit/components/ReadingIndicator/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/constants/tracking.ts"),
				_ = s("./src/reddit/hooks/usePostContext.ts"),
				I = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				C = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/makeCommentsPageKey/index.ts"),
				y = s("./src/lib/scroll/index.ts"),
				R = s("./src/reddit/components/NewCommentPill/index.m.less"),
				S = s.n(R);
			const T = (e, t) => s => ({
					source: "post",
					action: e,
					noun: "new_comment_pill",
					post: Object(g.I)(s, t.id),
					subreddit: Object(N.J)(s, {
						identifier: t.belongsTo
					})
				}),
				w = (e, {
					type: t,
					delta: s
				}) => "add" === t ? e + (s || 0) : 0;
			t.default = Object(f.c)(({
				commentId: e,
				sendEvent: t,
				postId: s,
				isNightMode: f,
				isOverlay: N
			}) => {
				const g = Object(o.useRef)(null),
					{
						post: R
					} = Object(_.a)() || {},
					[D, P] = Object(o.useReducer)(w, 0),
					U = Object(c.e)(C.a),
					k = Object(c.e)(e => Object(I.a)(e) || Object(I.c)(e)),
					[M, A] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					if (!R || !k) return;
					b.d.addListeners(b.b, () => A(!0)), b.d.addListeners(b.a, () => A(!1))
				}, [R, k]);
				const [L, K] = Object(o.useState)(!1), B = Object(o.useRef)(), z = Object(o.useRef)(), W = Object(o.useRef)(2), q = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: s
						}
					}
				}), [s]);
				Object(o.useEffect)(() => () => {
					g.current && clearTimeout(g.current)
				}, []);
				const J = Object(c.d)(),
					X = Object(o.useCallback)(() => {
						if (!R) return;
						t(T(h.c.CLICK, R)), K(!1), B.current && (clearTimeout(B.current), B.current = null), z.current && (z.current = null), W.current = 2, (() => {
							const t = new URLSearchParams(location.search);
							t.get(O.x) !== E.u.NEW && (t.set(O.x, E.u.NEW), J(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: t.toString()
							}, {
								isOverlay: N
							}))));
							const n = Object(v.a)(s, e, {
								hasSortParam: !0,
								sort: E.u.NEW
							});
							J(Object(d.commentsPageRemoveLoadedFull)({
								key: n
							})), J(Object(d.commentsPageDataRequested)(s, e, {
								hasSortParam: !0,
								sort: E.u.NEW
							}, E.u.NEW))
						})(), Object(y.a)(!!N), g.current = setTimeout(() => P({
							type: "reset"
						}), 1e3)
					}, [R]);
				Object(o.useEffect)(() => {
					const e = W.current <= 0;
					if (!D || e) return;
					const t = Date.now();
					(!z.current || t - z.current >= 25e3) && K(!0)
				}, [D]), Object(o.useEffect)(() => (L && R && (B.current = setTimeout(() => {
					K(!1), z.current = Date.now(), W.current -= 1
				}, 5e3), t(T(h.c.VIEW, R))), () => {
					B.current && clearTimeout(B.current)
				}), [L, t]);
				const F = Object(o.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && P({
						type: "add",
						delta: t
					})
				}, []);
				return U ? a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
					variables: q,
					onData: F,
					queryKey: "topLevelCommentCountChange"
				}), a.a.createElement("div", {
					className: Object(x.a)(S.a.wrapper, {
						[S.a.isOverlayWrapper]: N,
						[S.a.wrapperVisible]: L,
						[S.a.joinOptimizationsM2]: !N && k && M
					})
				}, a.a.createElement(u.a, {
					className: S.a.pillContainer
				}, a.a.createElement(m.a, {
					className: Object(x.a)(S.a.pillButton, {
						[S.a.isNightMode]: f
					}),
					onClick: X,
					variant: m.b.BUTTON
				}, a.a.createElement(p.a, {
					iconsKey: s,
					shouldShowPresenceDot: !0,
					shouldUseColoredSilhouetteIcons: !0,
					memberIconClassName: Object(x.a)(S.a.memberIcon, {
						[S.a.isNightMode]: f
					}),
					presenceDotOutlineClassName: Object(x.a)(S.a.presenceDotOutlineClass, {
						[S.a.isNightMode]: f
					})
				}), a.a.createElement("span", {
					className: Object(x.a)(S.a.newCommentsText, {
						[S.a.isNightMode]: f
					})
				}, D > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(j.formatPresenceNumber)(D))], {
					hk: "2jSNSA"
				}) : n.fbt._("1 new comment", null, {
					hk: "4nXICl"
				})))))) : null
			})
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./node_modules/lodash/sampleSize.js"),
				i = s.n(c),
				l = s("./src/reddit/helpers/getFakeUserIcons.ts"),
				d = s("./src/reddit/hooks/useConstructor.ts"),
				u = s("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = s.n(u);
			const b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				p = 8,
				j = 20,
				f = 3,
				O = e => {
					const {
						iconsKey: t,
						memberIconClassName: s,
						numVisibleIcons: n = f,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: u,
						shouldUseColoredSilhouetteIcons: O,
						numIconsToDrawFrom: h = (O ? p : j),
						wrapperClassName: _
					} = e, I = Object(r.useRef)([]);
					return Object(d.a)(() => {
						const e = Object(l.a)(t, h, O);
						I.current = i()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, _)
					}, I.current.map(({
						color: e,
						image: t
					}, r) => {
						return r === n - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: r
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, s),
							src: t,
							style: {
								backgroundColor: e
							}
						}), o.a.createElement(b, {
							showPresence: !0,
							outlineClassName: c
						})) : o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, s),
							key: r,
							src: t,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			t.a = O
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, s) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.m.less": function(e, t, s) {
			e.exports = {
				readingIndicator: "_1uHz4YY7qiPGVa7nGIRrUX",
				isDisplayed: "_nvbopN4sT4l-fhb9ev1",
				offsetMembersIconsWrapper: "YvPNtp9JRY5iwtzRqupcd",
				offsetMemberIcon: "_1xtGJrgHGU1J3vR6qXj7Fh"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "formatPresenceNumber", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./node_modules/lodash/noop.js"),
				a = s.n(o),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				l = s("./src/realtime/GQLSubscription/async.tsx"),
				d = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				m = s("./src/reddit/hooks/useClassNameOnMount.ts"),
				b = s("./src/reddit/hooks/useTracking.ts");
			var p = s("./src/reddit/components/ReadingIndicator/index.m.less"),
				j = s.n(p);
			const f = e => e > 9999 ? Object(r.b)(e) : e.toString();
			t.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: t,
				isWriteLoadTest: s,
				postId: r
			}) => {
				const o = Object(c.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: r
					}), [r]),
					p = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...o,
								category: "USER_IS_READING_POST"
							}
						}
					}), [r]),
					O = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...o,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [r]),
					h = Object(c.useRef)(null),
					_ = Object(c.useRef)(null),
					I = Object(c.useRef)(0),
					[C, N] = Object(c.useState)(0),
					g = Object(c.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, s = () => {
							_.current && clearTimeout(_.current), _.current = setTimeout(() => {
								N(0), v(null), _.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							I.current ? (N(I.current), I.current = null, h.current = n(), s()) : h.current = null
						}, 2e3);
						h.current ? I.current = t : (N(t), I.current = null, h.current = n(), s())
					}, []),
					x = Object(c.useRef)(0),
					[E, v] = Object(c.useState)(null),
					y = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(E && v(null));
					if (C >= 5) return x.current = C, void(E || v(Date.now()));
					if (!E) return;
					const t = Date.now() - E;
					t >= 1e4 ? v(null) : y.current = setTimeout(() => v(null), 1e4 - t)
				}, [E, e, C]);
				const {
					className: R,
					shouldMount: S,
					onTransitionEnd: T
				} = Object(m.a)({
					defaultClass: j.a.readingIndicator,
					addedClass: j.a.isDisplayed,
					mountCondition: !!E
				}), w = Object(b.a)();
				return Object(c.useEffect)(() => {
					S && w(Object(u.q)(r, C))
				}, [w, S, r]), Object(c.useEffect)(() => () => {
					h.current && clearTimeout(h.current), _.current && clearTimeout(_.current), y.current && clearTimeout(y.current)
				}, []), i.a.createElement(i.a.Fragment, null, s && i.a.createElement(l.a, {
					variables: p,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && i.a.createElement(l.a, {
					variables: O,
					onData: e ? g : a.a,
					queryKey: "usersReadingIndicator"
				}), S && i.a.createElement("div", {
					className: R,
					onTransitionEnd: T
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", f(x.current))], {
					hk: "3foy5g"
				}), i.a.createElement(d.a, {
					memberIconClassName: j.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: j.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, t) => `${a.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				i = Array.from({
					length: 8
				}).map((e, t) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				l = [];
			t.a = r()((e, t = 3, s) => {
				if (!e || !t) return l;
				const n = s ? i : c,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(r + t) % o.a.length],
					image: n[(r + t) % n.length]
				}))
			}, (e, t = 3) => `${e}_${t}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/classNames/index.ts");
			t.a = ({
				defaultClass: e,
				addedClass: t,
				mountCondition: s
			}) => {
				const [o, a] = Object(n.useState)(e), [c, i] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					s && i(!0)
				}, [s]), Object(n.useEffect)(() => {
					c && (s ? window.setTimeout(() => {
						a(Object(r.a)(e, t))
					}, 100) : a(e))
				}, [t, e, s, c]);
				const l = Object(n.useCallback)(() => {
					s || i(!1)
				}, [s]);
				return {
					className: o,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
				const t = Object(n.useRef)(!1);
				t.current || (e(), t.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.8fdcc8360507f3c99ab6.js.map