// https://www.redditstatic.com/desktop2x/NewCommentPill.dbc8842f67e1d3d174b5.js
// Retrieved at 12/2/2021, 10:50:04 AM by Reddit Dataminer v1.0.0
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
				presenceDotOutlineClass: "_1R_toh-B3KDXQd6yRXNIE7"
			}
		},
		"./src/reddit/components/NewCommentPill/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "trackNewCommentPill", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/history/esm/history.js"),
				o = s("./src/lib/fastdom/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/realtime/GQLSubscription/async.tsx"),
				u = s("./src/reddit/actions/pages/comments.ts"),
				m = s("./src/reddit/components/CommentSort/index.tsx"),
				b = s("./src/reddit/components/Pill/index.tsx"),
				p = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				f = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				j = s("./src/reddit/components/ReadingIndicator/index.tsx"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/elementIds.ts"),
				h = s("./src/reddit/constants/parameters.ts"),
				I = s("./src/reddit/constants/tracking.ts"),
				N = s("./src/reddit/hooks/usePostContext.ts"),
				g = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				T = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/reddit/components/NewCommentPill/index.m.less"),
				R = s.n(E);
			const w = (e, t) => s => ({
					source: "post",
					action: e,
					noun: "new_comment_pill",
					post: Object(v.post)(s, t.id),
					subreddit: Object(C.H)(s, {
						identifier: t.belongsTo
					})
				}),
				P = (e, {
					type: t,
					delta: s
				}) => "add" === t ? e + (s || 0) : 0;
			t.default = Object(O.c)(({
				commentId: e,
				sendEvent: t,
				postId: s,
				isNightMode: O,
				isOverlay: C
			}) => {
				const v = Object(a.useRef)(null),
					{
						post: E
					} = Object(N.a)() || {},
					[S, D] = Object(a.useReducer)(P, 0),
					U = Object(i.e)(g.a),
					[B, A] = Object(a.useState)(!1),
					k = Object(a.useRef)(),
					M = Object(a.useRef)(),
					J = Object(a.useRef)(2),
					W = Object(a.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "COMMENT_COUNT_UPDATE",
								postID: s
							}
						}
					}), [s]);
				Object(a.useEffect)(() => () => {
					v.current && clearTimeout(v.current)
				}, []);
				const q = Object(i.d)(),
					K = Object(a.useCallback)(() => {
						if (!E) return;
						t(w(I.c.CLICK, E)), A(!1), k.current && (clearTimeout(k.current), k.current = null), M.current && (M.current = null), J.current = 2, (() => {
							const t = new URLSearchParams(location.search);
							t.get(h.w) !== y.u.NEW && (t.set(h.w, y.u.NEW), q(Object(l.b)(Object(r.c)({
								pathname: location.pathname,
								search: t.toString()
							}, {
								isOverlay: C
							}))));
							const n = Object(T.a)(s, e, {
								hasSortParam: !0,
								sort: y.u.NEW
							});
							q(Object(u.commentsPageRemoveLoadedFull)({
								key: n
							})), q(Object(u.commentsPageDataRequested)(s, e, {
								hasSortParam: !0,
								sort: y.u.NEW
							}, y.u.NEW))
						})(), o.a.read(() => {
							const e = C ? document.getElementById(_.d) : window,
								t = document.getElementById(m.a);
							if (e && t) {
								const s = C ? t.offsetTop : t.offsetTop - 50;
								o.a.write(() => e.scrollTo({
									top: s,
									behavior: "smooth"
								}))
							}
						}), v.current = setTimeout(() => D({
							type: "reset"
						}), 1e3)
					}, [E]);
				Object(a.useEffect)(() => {
					const e = J.current <= 0;
					if (!S || e) return;
					const t = Date.now();
					(!M.current || t - M.current >= 25e3) && A(!0)
				}, [S]), Object(a.useEffect)(() => (B && E && (k.current = setTimeout(() => {
					A(!1), M.current = Date.now(), J.current -= 1
				}, 5e3), t(w(I.c.VIEW, E))), () => {
					k.current && clearTimeout(k.current)
				}), [B, t]);
				const L = Object(a.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && D({
						type: "add",
						delta: t
					})
				}, []);
				return U ? c.a.createElement(c.a.Fragment, null, c.a.createElement(d.a, {
					variables: W,
					onData: L,
					queryKey: "topLevelCommentCountChange"
				}), c.a.createElement("div", {
					className: Object(x.a)(R.a.wrapper, {
						[R.a.isOverlayWrapper]: C,
						[R.a.wrapperVisible]: B
					})
				}, c.a.createElement(b.a, {
					className: R.a.pillContainer
				}, c.a.createElement(p.a, {
					className: Object(x.a)(R.a.pillButton, {
						[R.a.isNightMode]: O
					}),
					onClick: K,
					variant: p.b.BUTTON
				}, c.a.createElement(f.a, {
					iconsKey: s,
					shouldShowPresenceDot: !0,
					shouldUseColoredSilhouetteIcons: !0,
					memberIconClassName: Object(x.a)(R.a.memberIcon, {
						[R.a.isNightMode]: O
					}),
					presenceDotOutlineClassName: Object(x.a)(R.a.presenceDotOutlineClass, {
						[R.a.isNightMode]: O
					})
				}), c.a.createElement("span", {
					className: Object(x.a)(R.a.newCommentsText, {
						[R.a.isNightMode]: O
					})
				}, S > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(j.formatPresenceNumber)(S))], {
					hk: "2jSNSA"
				}) : n.fbt._("1 new comment", null, {
					hk: "4nXICl"
				})))))) : null
			})
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return m
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				i = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const d = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: i.a.tabGroup
				},
				u = (e, t) => {
					if (t !== n.BUTTON) return e ? i.a.active : i.a.inactive
				},
				m = ({
					active: e = !0,
					children: t,
					className: s,
					disabled: n = !1,
					onClick: r,
					variant: c,
					...m
				}) => o.a.createElement("button", l({}, m, {
					className: Object(a.a)(i.a.primaryButton, d[c], u(e, c), s),
					disabled: n,
					onClick: r
				}), t)
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
				f = 20,
				j = 3,
				O = e => {
					const {
						iconsKey: t,
						memberIconClassName: s,
						numVisibleIcons: n = j,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: u,
						shouldUseColoredSilhouetteIcons: O,
						numIconsToDrawFrom: _ = (O ? p : f),
						wrapperClassName: h
					} = e, I = Object(r.useRef)([]);
					return Object(d.a)(() => {
						const e = Object(l.a)(t, _, O);
						I.current = i()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, h)
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
				return j
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
				f = s.n(p);
			const j = e => e > 9999 ? Object(r.b)(e) : e.toString();
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
					_ = Object(c.useRef)(null),
					h = Object(c.useRef)(null),
					I = Object(c.useRef)(0),
					[N, g] = Object(c.useState)(0),
					C = Object(c.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, s = () => {
							h.current && clearTimeout(h.current), h.current = setTimeout(() => {
								g(0), y(null), h.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							I.current ? (g(I.current), I.current = null, _.current = n(), s()) : _.current = null
						}, 2e3);
						_.current ? I.current = t : (g(t), I.current = null, _.current = n(), s())
					}, []),
					v = Object(c.useRef)(0),
					[x, y] = Object(c.useState)(null),
					T = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(x && y(null));
					if (N >= 5) return v.current = N, void(x || y(Date.now()));
					if (!x) return;
					const t = Date.now() - x;
					t >= 1e4 ? y(null) : T.current = setTimeout(() => y(null), 1e4 - t)
				}, [x, e, N]);
				const {
					className: E,
					shouldMount: R,
					onTransitionEnd: w
				} = Object(m.a)({
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!x
				}), P = Object(b.a)();
				return Object(c.useEffect)(() => {
					R && P(Object(u.q)(r, N))
				}, [P, R, r]), i.a.createElement(i.a.Fragment, null, s && i.a.createElement(l.a, {
					variables: p,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && i.a.createElement(l.a, {
					variables: O,
					onData: e ? C : a.a,
					queryKey: "usersReadingIndicator"
				}), R && i.a.createElement("div", {
					className: E,
					onTransitionEnd: w
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", j(v.current))], {
					hk: "3foy5g"
				}), i.a.createElement(d.a, {
					memberIconClassName: f.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: f.a.offsetMembersIconsWrapper
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.dbc8842f67e1d3d174b5.js.map