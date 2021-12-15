// https://www.redditstatic.com/desktop2x/NewCommentPill.30489ef0ad6a5075eea4.js
// Retrieved at 12/15/2021, 12:00:04 PM by Reddit Dataminer v1.0.0
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
				return P
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
				f = s("./src/reddit/components/PostContent/index.tsx"),
				j = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				O = s("./src/reddit/components/ReadingIndicator/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/elementIds.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				N = s("./src/reddit/constants/tracking.ts"),
				C = s("./src/reddit/hooks/usePostContext.ts"),
				g = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				x = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/constants/index.ts"),
				R = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/reddit/components/NewCommentPill/index.m.less"),
				S = s.n(w);
			const P = (e, t) => s => ({
					source: "post",
					action: e,
					noun: "new_comment_pill",
					post: Object(y.I)(s, t.id),
					subreddit: Object(v.J)(s, {
						identifier: t.belongsTo
					})
				}),
				D = (e, {
					type: t,
					delta: s
				}) => "add" === t ? e + (s || 0) : 0;
			t.default = Object(_.c)(({
				commentId: e,
				sendEvent: t,
				postId: s,
				isNightMode: _,
				isOverlay: v
			}) => {
				const y = Object(a.useRef)(null),
					{
						post: w
					} = Object(C.a)() || {},
					[U, B] = Object(a.useReducer)(D, 0),
					A = Object(i.e)(x.a),
					k = Object(i.e)(e => Object(g.a)(e) || Object(g.c)(e)),
					[M, J] = Object(a.useState)(!1);
				Object(a.useEffect)(() => {
					if (!w || !k) return;
					f.d.addListeners(f.b, () => J(!0)), f.d.addListeners(f.a, () => J(!1))
				}, [w, k]);
				const [z, L] = Object(a.useState)(!1), W = Object(a.useRef)(), q = Object(a.useRef)(), K = Object(a.useRef)(2), V = Object(a.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: s
						}
					}
				}), [s]);
				Object(a.useEffect)(() => () => {
					y.current && clearTimeout(y.current)
				}, []);
				const G = Object(i.d)(),
					X = Object(a.useCallback)(() => {
						if (!w) return;
						t(P(N.c.CLICK, w)), L(!1), W.current && (clearTimeout(W.current), W.current = null), q.current && (q.current = null), K.current = 2, (() => {
							const t = new URLSearchParams(location.search);
							t.get(I.x) !== E.u.NEW && (t.set(I.x, E.u.NEW), G(Object(l.b)(Object(r.c)({
								pathname: location.pathname,
								search: t.toString()
							}, {
								isOverlay: v
							}))));
							const n = Object(R.a)(s, e, {
								hasSortParam: !0,
								sort: E.u.NEW
							});
							G(Object(u.commentsPageRemoveLoadedFull)({
								key: n
							})), G(Object(u.commentsPageDataRequested)(s, e, {
								hasSortParam: !0,
								sort: E.u.NEW
							}, E.u.NEW))
						})(), o.a.read(() => {
							const e = v ? document.getElementById(h.d) : window,
								t = document.getElementById(m.a);
							if (e && t) {
								const s = v ? t.offsetTop : t.offsetTop - 50;
								o.a.write(() => e.scrollTo({
									top: s,
									behavior: "smooth"
								}))
							}
						}), y.current = setTimeout(() => B({
							type: "reset"
						}), 1e3)
					}, [w]);
				Object(a.useEffect)(() => {
					const e = K.current <= 0;
					if (!U || e) return;
					const t = Date.now();
					(!q.current || t - q.current >= 25e3) && L(!0)
				}, [U]), Object(a.useEffect)(() => (z && w && (W.current = setTimeout(() => {
					L(!1), q.current = Date.now(), K.current -= 1
				}, 5e3), t(P(N.c.VIEW, w))), () => {
					W.current && clearTimeout(W.current)
				}), [z, t]);
				const F = Object(a.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && B({
						type: "add",
						delta: t
					})
				}, []);
				return A ? c.a.createElement(c.a.Fragment, null, c.a.createElement(d.a, {
					variables: V,
					onData: F,
					queryKey: "topLevelCommentCountChange"
				}), c.a.createElement("div", {
					className: Object(T.a)(S.a.wrapper, {
						[S.a.isOverlayWrapper]: v,
						[S.a.wrapperVisible]: z,
						[S.a.joinOptimizationsM2]: !v && k && M
					})
				}, c.a.createElement(b.a, {
					className: S.a.pillContainer
				}, c.a.createElement(p.a, {
					className: Object(T.a)(S.a.pillButton, {
						[S.a.isNightMode]: _
					}),
					onClick: X,
					variant: p.b.BUTTON
				}, c.a.createElement(j.a, {
					iconsKey: s,
					shouldShowPresenceDot: !0,
					shouldUseColoredSilhouetteIcons: !0,
					memberIconClassName: Object(T.a)(S.a.memberIcon, {
						[S.a.isNightMode]: _
					}),
					presenceDotOutlineClassName: Object(T.a)(S.a.presenceDotOutlineClass, {
						[S.a.isNightMode]: _
					})
				}), c.a.createElement("span", {
					className: Object(T.a)(S.a.newCommentsText, {
						[S.a.isNightMode]: _
					})
				}, U > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(O.formatPresenceNumber)(U))], {
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
					[N, C] = Object(c.useState)(0),
					g = Object(c.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, s = () => {
							h.current && clearTimeout(h.current), h.current = setTimeout(() => {
								C(0), y(null), h.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							I.current ? (C(I.current), I.current = null, _.current = n(), s()) : _.current = null
						}, 2e3);
						_.current ? I.current = t : (C(t), I.current = null, _.current = n(), s())
					}, []),
					x = Object(c.useRef)(0),
					[v, y] = Object(c.useState)(null),
					T = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(v && y(null));
					if (N >= 5) return x.current = N, void(v || y(Date.now()));
					if (!v) return;
					const t = Date.now() - v;
					t >= 1e4 ? y(null) : T.current = setTimeout(() => y(null), 1e4 - t)
				}, [v, e, N]);
				const {
					className: E,
					shouldMount: R,
					onTransitionEnd: w
				} = Object(m.a)({
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!v
				}), S = Object(b.a)();
				return Object(c.useEffect)(() => {
					R && S(Object(u.q)(r, N))
				}, [S, R, r]), Object(c.useEffect)(() => () => {
					_.current && clearTimeout(_.current), h.current && clearTimeout(h.current), T.current && clearTimeout(T.current)
				}, []), i.a.createElement(i.a.Fragment, null, s && i.a.createElement(l.a, {
					variables: p,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && i.a.createElement(l.a, {
					variables: O,
					onData: e ? g : a.a,
					queryKey: "usersReadingIndicator"
				}), R && i.a.createElement("div", {
					className: E,
					onTransitionEnd: w
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", j(x.current))], {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.30489ef0ad6a5075eea4.js.map