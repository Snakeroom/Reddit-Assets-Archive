// https://www.redditstatic.com/desktop2x/NewCommentPill.7a4c252d11df938c5f5f.js
// Retrieved at 2/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
				I = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				N = s("./src/lib/makeCommentsPageKey/index.ts"),
				g = s("./src/lib/scroll/index.ts"),
				x = s("./src/reddit/components/NewCommentPill/index.m.less"),
				y = s.n(x);
			const E = (e, {
				type: t,
				delta: s
			}) => "add" === t ? e + (s || 0) : 0;
			t.default = ({
				commentId: e,
				postId: t,
				isNightMode: s,
				isOverlay: x
			}) => {
				const v = Object(o.useRef)(null),
					{
						post: R
					} = Object(O.a)() || {},
					[S, D] = Object(o.useReducer)(E, 0),
					T = Object(c.e)(h.a),
					P = Object(c.e)(e => Object(_.a)(e) || Object(_.c)(e)),
					[w, U] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					if (!R || !P) return;
					b.d.addListeners(b.b, () => U(!0)), b.d.addListeners(b.a, () => U(!1))
				}, [R, P]);
				const [M, A] = Object(o.useState)(!1), k = Object(o.useRef)(), K = Object(o.useRef)(), L = Object(o.useRef)(2), B = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: t
						}
					}
				}), [t]);
				Object(o.useEffect)(() => () => {
					v.current && clearTimeout(v.current)
				}, []);
				const W = Object(c.d)(),
					z = Object(o.useCallback)(() => {
						if (!R) return;
						A(!1), k.current && (clearTimeout(k.current), k.current = null), K.current && (K.current = null), L.current = 2, (() => {
							const s = new URLSearchParams(location.search);
							s.get(j.x) !== C.u.NEW && (s.set(j.x, C.u.NEW), W(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: s.toString()
							}, {
								isOverlay: x
							}))));
							const n = Object(N.a)(t, e, {
								hasSortParam: !0,
								sort: C.u.NEW
							});
							W(Object(l.commentsPageRemoveLoadedFull)({
								key: n
							})), W(Object(l.commentsPageDataRequested)(t, e, {
								hasSortParam: !0,
								sort: C.u.NEW
							}, C.u.NEW))
						})(), Object(g.a)(!!x), v.current = setTimeout(() => D({
							type: "reset"
						}), 1e3)
					}, [R]);
				Object(o.useEffect)(() => {
					const e = L.current <= 0;
					if (!S || e) return;
					const t = Date.now();
					(!K.current || t - K.current >= 25e3) && A(!0)
				}, [S]), Object(o.useEffect)(() => (M && R && (k.current = setTimeout(() => {
					A(!1), K.current = Date.now(), L.current -= 1
				}, 5e3)), () => {
					k.current && clearTimeout(k.current)
				}), [M]);
				const q = Object(o.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && D({
						type: "add",
						delta: t
					})
				}, []);
				return T ? a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, {
					variables: B,
					onData: q,
					queryKey: "topLevelCommentCountChange"
				}), a.a.createElement("div", {
					className: Object(I.a)(y.a.wrapper, {
						[y.a.isOverlayWrapper]: x,
						[y.a.wrapperVisible]: M,
						[y.a.joinOptimizationsM2]: !x && P && w
					})
				}, a.a.createElement(u.a, {
					className: y.a.pillContainer
				}, a.a.createElement(m.a, {
					className: Object(I.a)(y.a.pillButton, {
						[y.a.isNightMode]: s
					}),
					onClick: z,
					variant: m.b.BUTTON
				}, a.a.createElement(p.a, {
					iconsKey: t,
					shouldShowPresenceDot: !0,
					memberIconClassName: Object(I.a)(y.a.memberIcon, {
						[y.a.isNightMode]: s
					}),
					presenceDotOutlineClassName: Object(I.a)(y.a.presenceDotOutlineClass, {
						[y.a.isNightMode]: s
					})
				}), a.a.createElement("span", {
					className: Object(I.a)(y.a.newCommentsText, {
						[y.a.isNightMode]: s
					})
				}, S > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(f.formatPresenceNumber)(S))], {
					hk: "2jSNSA"
				}) : n.fbt._("1 new comment", null, {
					hk: "4nXICl"
				})))))) : null
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
					I = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...d,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [c]),
					C = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...d,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [c]),
					[N, g] = Object(u.useState)(0),
					[x, y] = Object(u.useState)(0),
					E = Object(u.useCallback)(a()(e => {
						e(0), T(null)
					}, j.e), []),
					v = Object(u.useCallback)(l()((e, t) => {
						t(e), E(t)
					}, j.d), []),
					R = Object(u.useCallback)(e => {
						const {
							numUsers: t,
							__typename: s
						} = e.subscribe.data;
						v(t, "PostReadingCountMessageData" === s ? g : y)
					}, []),
					S = Object(u.useRef)(""),
					[D, T] = Object(u.useState)(null),
					P = Object(u.useRef)(null);
				Object(u.useEffect)(() => {
					if (!e && !r) return void(D && T(null));
					if (N >= j.a || x >= j.b) return S.current = ((e, t) => {
						return t >= j.b ? n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", h(t))], {
							hk: "31RibC"
						}) : n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", h(e))], {
							hk: "3foy5g"
						})
					})(N, x), void(D || T(Date.now()));
					if (!D) return;
					const t = Date.now() - D;
					t >= j.f ? T(null) : P.current = setTimeout(() => T(null), j.f - t)
				}, [D, e, r, N, x]);
				const {
					className: w,
					shouldMount: U,
					onTransitionEnd: M
				} = Object(f.a)({
					defaultClass: _.a.usersCountIndicator,
					addedClass: _.a.isDisplayed,
					mountCondition: !!D
				});
				return Object(u.useEffect)(() => () => {
					E.cancel(), v.cancel(), P.current && clearTimeout(P.current)
				}, []), m.a.createElement(m.a.Fragment, null, s && m.a.createElement(b.a, {
					variables: O,
					onData: i.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && m.a.createElement(b.a, {
					variables: I,
					onData: e ? R : i.a,
					queryKey: "usersReadingIndicator"
				}), (o || r) && m.a.createElement(b.a, {
					variables: C,
					onData: r ? R : i.a,
					queryKey: "postTypingIndicator"
				}), U && m.a.createElement("div", {
					className: w,
					onTransitionEnd: M
				}, S.current, m.a.createElement(p.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.7a4c252d11df938c5f5f.js.map