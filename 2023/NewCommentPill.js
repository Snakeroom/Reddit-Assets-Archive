// https://www.redditstatic.com/desktop2x/NewCommentPill.b411404003e783505a44.js
// Retrieved at 6/7/2023, 12:10:03 AM by Reddit Dataminer v1.0.0
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
				d = s("./src/realtime/GQLSubscription/async.tsx"),
				l = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Pill/index.tsx"),
				m = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				b = s("./src/reddit/components/PostContent/index.tsx"),
				p = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/components/UsersCountIndicator/index.tsx"),
				j = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/hooks/usePostContext.ts"),
				h = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				_ = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				I = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/makeCommentsPageKey/index.ts"),
				N = s("./src/lib/scroll/index.ts"),
				v = s("./src/reddit/components/NewCommentPill/index.m.less"),
				x = s.n(v);
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
					isNightMode: v,
					isOverlay: E
				} = e;
				const R = Object(o.useRef)(null),
					{
						post: S
					} = Object(O.a)() || {},
					[D, P] = Object(o.useReducer)(y, 0),
					T = Object(c.e)(_.a),
					w = Object(c.e)(e => Object(h.a)(e) || Object(h.c)(e)),
					[U, M] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					if (!S || !w) return;
					b.d.addListeners(b.b, () => M(!0)), b.d.addListeners(b.a, () => M(!1))
				}, [S, w]);
				const [A, k] = Object(o.useState)(!1), K = Object(o.useRef)(), L = Object(o.useRef)(), B = Object(o.useRef)(2), W = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: s
						}
					}
				}), [s]);
				Object(o.useEffect)(() => () => {
					R.current && clearTimeout(R.current)
				}, []);
				const z = Object(c.d)(),
					q = Object(o.useCallback)(() => {
						if (!S) return;
						k(!1), K.current && (clearTimeout(K.current), K.current = null), L.current && (L.current = null), B.current = 2, (() => {
							const e = new URLSearchParams(location.search);
							e.get(j.D) !== C.v.NEW && (e.set(j.D, C.v.NEW), z(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: e.toString()
							}, {
								isOverlay: E
							}))));
							const n = Object(g.a)(s, t, {
								hasSortParam: !0,
								sort: C.v.NEW
							});
							z(Object(l.commentsPageRemoveLoadedFull)({
								key: n
							})), z(Object(l.commentsPageDataRequested)(s, t, {
								hasSortParam: !0,
								sort: C.v.NEW
							}, C.v.NEW))
						})(), Object(N.a)(!!E), R.current = setTimeout(() => P({
							type: "reset"
						}), 1e3)
					}, [S]);
				Object(o.useEffect)(() => {
					const e = B.current <= 0;
					if (!D || e) return;
					const t = Date.now();
					(!L.current || t - L.current >= 25e3) && k(!0)
				}, [D]), Object(o.useEffect)(() => (A && S && (K.current = setTimeout(() => {
					k(!1), L.current = Date.now(), B.current -= 1
				}, 5e3)), () => {
					K.current && clearTimeout(K.current)
				}), [A]);
				const J = Object(o.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && P({
						type: "add",
						delta: t
					})
				}, []);
				return T ? a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, {
					variables: W,
					onData: J,
					queryKey: "topLevelCommentCountChange"
				}), a.a.createElement("div", {
					className: Object(I.a)(x.a.wrapper, {
						[x.a.isOverlayWrapper]: E,
						[x.a.wrapperVisible]: A,
						[x.a.joinOptimizationsM2]: !E && w && U
					})
				}, a.a.createElement(u.a, {
					className: x.a.pillContainer
				}, a.a.createElement(m.a, {
					className: Object(I.a)(x.a.pillButton, {
						[x.a.isNightMode]: v
					}),
					onClick: q,
					variant: m.b.BUTTON
				}, a.a.createElement(p.a, {
					iconsKey: s,
					shouldShowPresenceDot: !0,
					memberIconClassName: Object(I.a)(x.a.memberIcon, {
						[x.a.isNightMode]: v
					}),
					presenceDotOutlineClassName: Object(I.a)(x.a.presenceDotOutlineClass, {
						[x.a.isNightMode]: v
					})
				}), a.a.createElement("span", {
					className: Object(I.a)(x.a.newCommentsText, {
						[x.a.isNightMode]: v
					})
				}, D > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(f.formatPresenceNumber)(D))], {
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
						}), o.a.createElement(b, {
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
				return _
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
				h = s.n(O);
			const _ = e => e > 9999 ? Object(r.b)(e) : e.toString();
			t.default = e => {
				let {
					isReadingIndicatorsExperiment: t,
					isReadingIndicatorsReadLoadTest: s,
					isReadingIndicatorsWriteLoadTest: r,
					isTypingIndicatorsExperiment: o,
					isTypingIndicatorsReadLoadTest: c,
					postId: d
				} = e;
				const O = Object(u.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: d
					}), [d]),
					I = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...O,
								category: "USER_IS_READING_POST"
							}
						}
					}), [d]),
					C = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...O,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [d]),
					g = Object(u.useMemo)(() => ({
						input: {
							channel: {
								...O,
								category: "POST_TYPING_INDICATOR"
							}
						}
					}), [d]),
					[N, v] = Object(u.useState)(0),
					[x, y] = Object(u.useState)(0),
					E = Object(u.useCallback)(a()(e => {
						e(0), T(null)
					}, j.e), []),
					R = Object(u.useCallback)(l()((e, t) => {
						t(e), E(t)
					}, j.d), []),
					S = Object(u.useCallback)(e => {
						const {
							numUsers: t,
							__typename: s
						} = e.subscribe.data;
						R(t, "PostReadingCountMessageData" === s ? v : y)
					}, []),
					D = Object(u.useRef)(""),
					[P, T] = Object(u.useState)(null),
					w = Object(u.useRef)(null);
				Object(u.useEffect)(() => {
					if (!t && !o) return void(P && T(null));
					if (N >= j.a || x >= j.b) return D.current = ((e, t) => {
						return t >= j.b ? n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", _(t))], {
							hk: "31RibC"
						}) : n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", _(e))], {
							hk: "3foy5g"
						})
					})(N, x), void(P || T(Date.now()));
					if (!P) return;
					const e = Date.now() - P;
					e >= j.f ? T(null) : w.current = setTimeout(() => T(null), j.f - e)
				}, [P, t, o, N, x]);
				const {
					className: U,
					shouldMount: M,
					onTransitionEnd: A
				} = Object(f.a)({
					defaultClass: h.a.usersCountIndicator,
					addedClass: h.a.isDisplayed,
					mountCondition: !!P
				});
				return Object(u.useEffect)(() => () => {
					E.cancel(), R.cancel(), w.current && clearTimeout(w.current)
				}, []), m.a.createElement(m.a.Fragment, null, r && m.a.createElement(b.a, {
					variables: I,
					onData: i.a,
					queryKey: "userIsReadingPost"
				}), (s || t) && m.a.createElement(b.a, {
					variables: C,
					onData: t ? S : i.a,
					queryKey: "usersReadingIndicator"
				}), (c || o) && m.a.createElement(b.a, {
					variables: g,
					onData: o ? S : i.a,
					queryKey: "postTypingIndicator"
				}), M && m.a.createElement("div", {
					className: U,
					onTransitionEnd: A
				}, D.current, m.a.createElement(p.a, {
					memberIconClassName: h.a.offsetMemberIcon,
					iconsKey: d,
					numVisibleIcons: j.g,
					wrapperClassName: h.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/constants/imagePaths.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/config.ts");
			const r = Array.from({
					length: 20
				}).map((e, t) => `${n.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				o = Array.from({
					length: 8
				}).map((e, t) => `${n.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`)
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/reddit/constants/imagePaths.ts");
			const c = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					s = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return c;
				const n = s ? a.a : a.b,
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
				const [a, c] = Object(n.useState)(t), [i, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					o && d(!0)
				}, [o]), Object(n.useEffect)(() => {
					i && (o ? window.setTimeout(() => {
						c(Object(r.a)(t, s))
					}, 100) : c(t))
				}, [s, t, o, i]);
				const l = Object(n.useCallback)(() => {
					o || d(!1)
				}, [o]);
				return {
					className: a,
					shouldMount: i,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.b411404003e783505a44.js.map