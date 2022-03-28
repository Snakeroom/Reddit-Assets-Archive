// https://www.redditstatic.com/desktop2x/NewCommentPill.4a2cb7b944ed174111b8.js
// Retrieved at 3/28/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
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
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/realtime/GQLSubscription/async.tsx"),
				l = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Pill/index.tsx"),
				m = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				b = s("./src/reddit/components/PostContent/index.tsx"),
				p = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/components/UsersCountIndicator/index.tsx"),
				j = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/hooks/usePostContext.ts"),
				_ = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				h = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				C = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/constants/index.ts"),
				N = s("./src/lib/makeCommentsPageKey/index.ts"),
				g = s("./src/lib/scroll/index.ts"),
				y = s("./src/reddit/components/NewCommentPill/index.m.less"),
				x = s.n(y);
			const v = (e, {
				type: t,
				delta: s
			}) => "add" === t ? e + (s || 0) : 0;
			t.default = ({
				commentId: e,
				postId: t,
				isNightMode: s,
				isOverlay: y
			}) => {
				const E = Object(o.useRef)(null),
					{
						post: T
					} = Object(O.a)() || {},
					[R, P] = Object(o.useReducer)(v, 0),
					S = Object(c.e)(h.a),
					D = Object(c.e)(e => Object(_.a)(e) || Object(_.c)(e)),
					[w, U] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					if (!T || !D) return;
					b.d.addListeners(b.b, () => U(!0)), b.d.addListeners(b.a, () => U(!1))
				}, [T, D]);
				const [A, B] = Object(o.useState)(!1), M = Object(o.useRef)(), k = Object(o.useRef)(), J = Object(o.useRef)(2), W = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: t
						}
					}
				}), [t]);
				Object(o.useEffect)(() => () => {
					E.current && clearTimeout(E.current)
				}, []);
				const L = Object(c.d)(),
					K = Object(o.useCallback)(() => {
						if (!T) return;
						B(!1), M.current && (clearTimeout(M.current), M.current = null), k.current && (k.current = null), J.current = 2, (() => {
							const s = new URLSearchParams(location.search);
							s.get(j.y) !== I.u.NEW && (s.set(j.y, I.u.NEW), L(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: s.toString()
							}, {
								isOverlay: y
							}))));
							const n = Object(N.a)(t, e, {
								hasSortParam: !0,
								sort: I.u.NEW
							});
							L(Object(l.commentsPageRemoveLoadedFull)({
								key: n
							})), L(Object(l.commentsPageDataRequested)(t, e, {
								hasSortParam: !0,
								sort: I.u.NEW
							}, I.u.NEW))
						})(), Object(g.a)(!!y), E.current = setTimeout(() => P({
							type: "reset"
						}), 1e3)
					}, [T]);
				Object(o.useEffect)(() => {
					const e = J.current <= 0;
					if (!R || e) return;
					const t = Date.now();
					(!k.current || t - k.current >= 25e3) && B(!0)
				}, [R]), Object(o.useEffect)(() => (A && T && (M.current = setTimeout(() => {
					B(!1), k.current = Date.now(), J.current -= 1
				}, 5e3)), () => {
					M.current && clearTimeout(M.current)
				}), [A]);
				const z = Object(o.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && P({
						type: "add",
						delta: t
					})
				}, []);
				return S ? a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, {
					variables: W,
					onData: z,
					queryKey: "topLevelCommentCountChange"
				}), a.a.createElement("div", {
					className: Object(C.a)(x.a.wrapper, {
						[x.a.isOverlayWrapper]: y,
						[x.a.wrapperVisible]: A,
						[x.a.joinOptimizationsM2]: !y && D && w
					})
				}, a.a.createElement(u.a, {
					className: x.a.pillContainer
				}, a.a.createElement(m.a, {
					className: Object(C.a)(x.a.pillButton, {
						[x.a.isNightMode]: s
					}),
					onClick: K,
					variant: m.b.BUTTON
				}, a.a.createElement(p.a, {
					iconsKey: t,
					shouldShowPresenceDot: !0,
					memberIconClassName: Object(C.a)(x.a.memberIcon, {
						[x.a.isNightMode]: s
					}),
					presenceDotOutlineClassName: Object(C.a)(x.a.presenceDotOutlineClass, {
						[x.a.isNightMode]: s
					})
				}), a.a.createElement("span", {
					className: Object(C.a)(x.a.newCommentsText, {
						[x.a.isNightMode]: s
					})
				}, R > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(f.formatPresenceNumber)(R))], {
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

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
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
				}) => o.a.createElement("button", d({}, m, {
					className: Object(a.a)(i.a.primaryButton, l[c], u(e, c), s),
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
				d = s("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = s("./src/reddit/hooks/useConstructor.ts"),
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
					return Object(l.a)(() => {
						const e = Object(d.a)(t, p, !0);
						O.current = i()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, j)
					}, O.current.map(({
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
				return d
			}));
			const n = 5,
				r = 2,
				o = 1e4,
				a = 2e3,
				c = 3e4,
				i = 1e4,
				d = 2
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
				d = s("./node_modules/lodash/throttle.js"),
				l = s.n(d),
				u = s("./node_modules/react/index.js"),
				m = s.n(u),
				b = s("./src/realtime/GQLSubscription/async.tsx"),
				p = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/hooks/useClassNameOnMount.ts"),
				j = s("./src/reddit/components/UsersCountIndicator/constants.ts"),
				O = s("./src/reddit/components/UsersCountIndicator/index.m.less"),
				_ = s.n(O);
			const h = e => e > 9999 ? Object(r.b)(e) : e.toString();
			t.default = ({
				isReadingIndicatorsExperiment: e,
				isReadingIndicatorsReadLoadTest: t,
				isReadingIndicatorsWriteLoadTest: s,
				isTypingIndicatorsExperiment: r,
				isTypingIndicatorsReadLoadTest: o,
				postId: c
			}) => {
				const d = Object(u.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: c
					}), [c]),
					O = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...d,
								category: "USER_IS_READING_POST"
							}
						}
					}), [c]),
					C = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...d,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [c]),
					I = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...d,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [c]),
					[N, g] = Object(u.useState)(0),
					[y, x] = Object(u.useState)(0),
					v = Object(u.useCallback)(a()(e => {
						e(0), S(null)
					}, j.e), []),
					E = Object(u.useCallback)(l()((e, t) => {
						t(e), v(t)
					}, j.d), []),
					T = Object(u.useCallback)(e => {
						const {
							numUsers: t,
							__typename: s
						} = e.subscribe.data;
						E(t, "PostReadingCountMessageData" === s ? g : x)
					}, []),
					R = Object(u.useRef)(""),
					[P, S] = Object(u.useState)(null),
					D = Object(u.useRef)(null);
				Object(u.useEffect)(() => {
					if (!e && !r) return void(P && S(null));
					if (N >= j.a || y >= j.b) return R.current = ((e, t) => {
						return t >= j.b ? n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", h(t))], {
							hk: "31RibC"
						}) : n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", h(e))], {
							hk: "3foy5g"
						})
					})(N, y), void(P || S(Date.now()));
					if (!P) return;
					const t = Date.now() - P;
					t >= j.f ? S(null) : D.current = setTimeout(() => S(null), j.f - t)
				}, [P, e, r, N, y]);
				const {
					className: w,
					shouldMount: U,
					onTransitionEnd: A
				} = Object(f.a)({
					defaultClass: _.a.usersCountIndicator,
					addedClass: _.a.isDisplayed,
					mountCondition: !!P
				});
				return Object(u.useEffect)(() => () => {
					v.cancel(), E.cancel(), D.current && clearTimeout(D.current)
				}, []), m.a.createElement(m.a.Fragment, null, s && m.a.createElement(b.a, {
					variables: O,
					onData: i.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && m.a.createElement(b.a, {
					variables: C,
					onData: e ? T : i.a,
					queryKey: "usersReadingIndicator"
				}), (o || r) && m.a.createElement(b.a, {
					variables: I,
					onData: r ? T : i.a,
					queryKey: "postTypingIndicator"
				}), U && m.a.createElement("div", {
					className: w,
					onTransitionEnd: A
				}, R.current, m.a.createElement(p.a, {
					memberIconClassName: _.a.offsetMemberIcon,
					iconsKey: c,
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
				d = [];
			t.a = r()((e, t = 3, s) => {
				if (!e || !t) return d;
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
				const d = Object(n.useCallback)(() => {
					s || i(!1)
				}, [s]);
				return {
					className: o,
					shouldMount: c,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.4a2cb7b944ed174111b8.js.map