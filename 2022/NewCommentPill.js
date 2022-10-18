// https://www.redditstatic.com/desktop2x/NewCommentPill.d6f0c8bf46d992127fc9.js
// Retrieved at 10/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
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
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var s = -1,
					r = e.length,
					o = r - 1;
				for (t = void 0 === t ? r : t; ++s < t;) {
					var a = n(s, o),
						c = e[a];
					e[a] = e[s], e[s] = c
				}
				return e.length = t, e
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
			s.r(t);
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
				p = s("./src/reddit/components/PostContent/index.tsx"),
				b = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/components/UsersCountIndicator/index.tsx"),
				j = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/hooks/usePostContext.ts"),
				_ = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				h = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				g = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				N = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/scroll/index.ts"),
				x = s("./src/reddit/components/NewCommentPill/index.m.less"),
				v = s.n(x);
			const y = (e, t) => {
				let {
					type: s,
					delta: n
				} = t;
				return "add" === s ? e + (n || 0) : 0
			};
			t.default = e => {
				let {
					commentId: t,
					postId: s,
					isNightMode: x,
					isOverlay: E
				} = e;
				const T = Object(o.useRef)(null),
					{
						post: R
					} = Object(O.a)() || {},
					[P, w] = Object(o.useReducer)(y, 0),
					S = Object(c.e)(h.a),
					D = Object(c.e)(e => Object(_.a)(e) || Object(_.c)(e)),
					[U, A] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					if (!R || !D) return;
					p.d.addListeners(p.b, () => A(!0)), p.d.addListeners(p.a, () => A(!1))
				}, [R, D]);
				const [M, B] = Object(o.useState)(!1), k = Object(o.useRef)(), L = Object(o.useRef)(), J = Object(o.useRef)(2), W = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: s
						}
					}
				}), [s]);
				Object(o.useEffect)(() => () => {
					T.current && clearTimeout(T.current)
				}, []);
				const K = Object(c.d)(),
					z = Object(o.useCallback)(() => {
						if (!R) return;
						B(!1), k.current && (clearTimeout(k.current), k.current = null), L.current && (L.current = null), J.current = 2, (() => {
							const e = new URLSearchParams(location.search);
							e.get(j.H) !== C.w.NEW && (e.set(j.H, C.w.NEW), K(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: e.toString()
							}, {
								isOverlay: E
							}))));
							const n = Object(N.a)(s, t, {
								hasSortParam: !0,
								sort: C.w.NEW
							});
							K(Object(d.commentsPageRemoveLoadedFull)({
								key: n
							})), K(Object(d.commentsPageDataRequested)(s, t, {
								hasSortParam: !0,
								sort: C.w.NEW
							}, C.w.NEW))
						})(), Object(I.a)(!!E), T.current = setTimeout(() => w({
							type: "reset"
						}), 1e3)
					}, [R]);
				Object(o.useEffect)(() => {
					const e = J.current <= 0;
					if (!P || e) return;
					const t = Date.now();
					(!L.current || t - L.current >= 25e3) && B(!0)
				}, [P]), Object(o.useEffect)(() => (M && R && (k.current = setTimeout(() => {
					B(!1), L.current = Date.now(), J.current -= 1
				}, 5e3)), () => {
					k.current && clearTimeout(k.current)
				}), [M]);
				const q = Object(o.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && w({
						type: "add",
						delta: t
					})
				}, []);
				return S ? a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
					variables: W,
					onData: q,
					queryKey: "topLevelCommentCountChange"
				}), a.a.createElement("div", {
					className: Object(g.a)(v.a.wrapper, {
						[v.a.isOverlayWrapper]: E,
						[v.a.wrapperVisible]: M,
						[v.a.joinOptimizationsM2]: !E && D && U
					})
				}, a.a.createElement(u.a, {
					className: v.a.pillContainer
				}, a.a.createElement(m.a, {
					className: Object(g.a)(v.a.pillButton, {
						[v.a.isNightMode]: x
					}),
					onClick: z,
					variant: m.b.BUTTON
				}, a.a.createElement(b.a, {
					iconsKey: s,
					shouldShowPresenceDot: !0,
					memberIconClassName: Object(g.a)(v.a.memberIcon, {
						[v.a.isNightMode]: x
					}),
					presenceDotOutlineClassName: Object(g.a)(v.a.presenceDotOutlineClass, {
						[v.a.isNightMode]: x
					})
				}), a.a.createElement("span", {
					className: Object(g.a)(v.a.newCommentsText, {
						[v.a.isNightMode]: x
					})
				}, P > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(f.formatPresenceNumber)(P))], {
					hk: "2jSNSA"
				}) : n.fbt._("1 new comment", null, {
					hk: "4nXICl"
				})))))) : null
			}
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
				m = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: c,
						...m
					} = e;
					return o.a.createElement("button", l({}, m, {
						className: Object(a.a)(i.a.primaryButton, d[c], u(t, c), n),
						disabled: r
					}), s)
				}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, s) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Pill/index.m.less"),
				c = s.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => {
				let {
					children: t,
					className: s,
					...n
				} = e;
				return r.a.createElement("div", i({
					className: Object(o.a)(c.a.pillContainer, s)
				}, n), t)
			}
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
			const p = Object(n.a)({
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
				b = 8,
				f = 3,
				j = e => {
					const {
						iconsKey: t,
						memberIconClassName: s,
						numVisibleIcons: n = f,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: u,
						wrapperClassName: j
					} = e, O = Object(r.useRef)([]);
					return Object(d.a)(() => {
						const e = Object(l.a)(t, b, !0);
						O.current = i()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, j)
					}, O.current.map((e, t) => {
						let {
							color: r,
							image: i
						} = e;
						return t === n - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, s),
							src: i,
							style: {
								backgroundColor: r
							}
						}), o.a.createElement(p, {
							showPresence: !0,
							outlineClassName: c
						})) : o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, s),
							key: t,
							src: i,
							style: {
								backgroundColor: r
							}
						})
					}))
				};
			t.a = j
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, s) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/UsersCountIndicator/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return l
			}));
			const n = 5,
				r = 2,
				o = 1e4,
				a = 2e3,
				c = 3e4,
				i = 1e4,
				l = 2
		},
		"./src/reddit/components/UsersCountIndicator/index.m.less": function(e, t, s) {
			e.exports = {
				usersCountIndicator: "_3wvjcIArtO7kKPJabZfZ9S",
				isDisplayed: "_1c98ixuh4QUWO9ERiFID3p",
				offsetMembersIconsWrapper: "RtAsN7UrR7u51W5kaOXvp",
				offsetMemberIcon: "_1JRtpiobR4jYtbw-xx1tPO"
			}
		},
		"./src/reddit/components/UsersCountIndicator/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "formatPresenceNumber", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./node_modules/lodash/debounce.js"),
				a = s.n(o),
				c = s("./node_modules/lodash/noop.js"),
				i = s.n(c),
				l = s("./node_modules/lodash/throttle.js"),
				d = s.n(l),
				u = s("./node_modules/react/index.js"),
				m = s.n(u),
				p = s("./src/realtime/GQLSubscription/async.tsx"),
				b = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/hooks/useClassNameOnMount.ts"),
				j = s("./src/reddit/components/UsersCountIndicator/constants.ts"),
				O = s("./src/reddit/components/UsersCountIndicator/index.m.less"),
				_ = s.n(O);
			const h = e => e > 9999 ? Object(r.b)(e) : e.toString();
			t.default = e => {
				let {
					isReadingIndicatorsExperiment: t,
					isReadingIndicatorsReadLoadTest: s,
					isReadingIndicatorsWriteLoadTest: r,
					isTypingIndicatorsExperiment: o,
					isTypingIndicatorsReadLoadTest: c,
					postId: l
				} = e;
				const O = Object(u.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: l
					}), [l]),
					g = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...O,
								category: "USER_IS_READING_POST"
							}
						}
					}), [l]),
					C = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...O,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [l]),
					N = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...O,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [l]),
					[I, x] = Object(u.useState)(0),
					[v, y] = Object(u.useState)(0),
					E = Object(u.useCallback)(a()(e => {
						e(0), S(null)
					}, j.e), []),
					T = Object(u.useCallback)(d()((e, t) => {
						t(e), E(t)
					}, j.d), []),
					R = Object(u.useCallback)(e => {
						const {
							numUsers: t,
							__typename: s
						} = e.subscribe.data;
						T(t, "PostReadingCountMessageData" === s ? x : y)
					}, []),
					P = Object(u.useRef)(""),
					[w, S] = Object(u.useState)(null),
					D = Object(u.useRef)(null);
				Object(u.useEffect)(() => {
					if (!t && !o) return void(w && S(null));
					if (I >= j.a || v >= j.b) return P.current = ((e, t) => {
						return t >= j.b ? n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", h(t))], {
							hk: "31RibC"
						}) : n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", h(e))], {
							hk: "3foy5g"
						})
					})(I, v), void(w || S(Date.now()));
					if (!w) return;
					const e = Date.now() - w;
					e >= j.f ? S(null) : D.current = setTimeout(() => S(null), j.f - e)
				}, [w, t, o, I, v]);
				const {
					className: U,
					shouldMount: A,
					onTransitionEnd: M
				} = Object(f.a)({
					defaultClass: _.a.usersCountIndicator,
					addedClass: _.a.isDisplayed,
					mountCondition: !!w
				});
				return Object(u.useEffect)(() => () => {
					E.cancel(), T.cancel(), D.current && clearTimeout(D.current)
				}, []), m.a.createElement(m.a.Fragment, null, r && m.a.createElement(p.a, {
					variables: g,
					onData: i.a,
					queryKey: "userIsReadingPost"
				}), (s || t) && m.a.createElement(p.a, {
					variables: C,
					onData: t ? R : i.a,
					queryKey: "usersReadingIndicator"
				}), (c || o) && m.a.createElement(p.a, {
					variables: N,
					onData: o ? R : i.a,
					queryKey: "postTypingIndicator"
				}), A && m.a.createElement("div", {
					className: U,
					onTransitionEnd: M
				}, P.current, m.a.createElement(b.a, {
					memberIconClassName: _.a.offsetMemberIcon,
					iconsKey: l,
					numVisibleIcons: j.g,
					wrapperClassName: _.a.offsetMembersIconsWrapper
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
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					s = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return l;
				const n = s ? i : c,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(r + t) % o.a.length],
					image: n[(r + t) % n.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/classNames/index.ts");
			t.a = e => {
				let {
					defaultClass: t,
					addedClass: s,
					mountCondition: o
				} = e;
				const [a, c] = Object(n.useState)(t), [i, l] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					o && l(!0)
				}, [o]), Object(n.useEffect)(() => {
					i && (o ? window.setTimeout(() => {
						c(Object(r.a)(t, s))
					}, 100) : c(t))
				}, [s, t, o, i]);
				const d = Object(n.useCallback)(() => {
					o || l(!1)
				}, [o]);
				return {
					className: a,
					shouldMount: i,
					onTransitionEnd: d
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.d6f0c8bf46d992127fc9.js.map