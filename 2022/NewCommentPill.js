// https://www.redditstatic.com/desktop2x/NewCommentPill.53947b8c8b56000bcd03.js
// Retrieved at 2/7/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NewCommentPill"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/_copyArray.js"),
				a = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return a(r(e), n(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/_shuffleSelf.js"),
				a = s("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var s = a(e);
				return r(s, n(t, 0, s.length))
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySampleSize.js"),
				r = s("./node_modules/lodash/_baseSampleSize.js"),
				a = s("./node_modules/lodash/isArray.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				c = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return t = (s ? o(e, t, s) : void 0 === t) ? 1 : c(t), (a(e) ? n : r)(e, t)
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
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/realtime/GQLSubscription/async.tsx"),
				d = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Pill/index.tsx"),
				m = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				b = s("./src/reddit/components/PostContent/index.tsx"),
				p = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/components/ReadingIndicator/index.tsx"),
				j = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/hooks/usePostContext.ts"),
				_ = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				h = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				N = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/makeCommentsPageKey/index.ts"),
				C = s("./src/lib/scroll/index.ts"),
				g = s("./src/reddit/components/NewCommentPill/index.m.less"),
				v = s.n(g);
			const E = (e, {
				type: t,
				delta: s
			}) => "add" === t ? e + (s || 0) : 0;
			t.default = ({
				commentId: e,
				postId: t,
				isNightMode: s,
				isOverlay: g
			}) => {
				const y = Object(a.useRef)(null),
					{
						post: R
					} = Object(O.a)() || {},
					[S, T] = Object(a.useReducer)(E, 0),
					w = Object(c.e)(h.a),
					D = Object(c.e)(e => Object(_.a)(e) || Object(_.c)(e)),
					[P, M] = Object(a.useState)(!1);
				Object(a.useEffect)(() => {
					if (!R || !D) return;
					b.d.addListeners(b.b, () => M(!0)), b.d.addListeners(b.a, () => M(!1))
				}, [R, D]);
				const [U, A] = Object(a.useState)(!1), k = Object(a.useRef)(), L = Object(a.useRef)(), K = Object(a.useRef)(2), B = Object(a.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "COMMENT_COUNT_UPDATE",
							postID: t
						}
					}
				}), [t]);
				Object(a.useEffect)(() => () => {
					y.current && clearTimeout(y.current)
				}, []);
				const z = Object(c.d)(),
					W = Object(a.useCallback)(() => {
						if (!R) return;
						A(!1), k.current && (clearTimeout(k.current), k.current = null), L.current && (L.current = null), K.current = 2, (() => {
							const s = new URLSearchParams(location.search);
							s.get(j.x) !== I.u.NEW && (s.set(j.x, I.u.NEW), z(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: s.toString()
							}, {
								isOverlay: g
							}))));
							const n = Object(x.a)(t, e, {
								hasSortParam: !0,
								sort: I.u.NEW
							});
							z(Object(d.commentsPageRemoveLoadedFull)({
								key: n
							})), z(Object(d.commentsPageDataRequested)(t, e, {
								hasSortParam: !0,
								sort: I.u.NEW
							}, I.u.NEW))
						})(), Object(C.a)(!!g), y.current = setTimeout(() => T({
							type: "reset"
						}), 1e3)
					}, [R]);
				Object(a.useEffect)(() => {
					const e = K.current <= 0;
					if (!S || e) return;
					const t = Date.now();
					(!L.current || t - L.current >= 25e3) && A(!0)
				}, [S]), Object(a.useEffect)(() => (U && R && (k.current = setTimeout(() => {
					A(!1), L.current = Date.now(), K.current -= 1
				}, 5e3)), () => {
					k.current && clearTimeout(k.current)
				}), [U]);
				const q = Object(a.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && T({
						type: "add",
						delta: t
					})
				}, []);
				return w ? o.a.createElement(o.a.Fragment, null, o.a.createElement(l.a, {
					variables: B,
					onData: q,
					queryKey: "topLevelCommentCountChange"
				}), o.a.createElement("div", {
					className: Object(N.a)(v.a.wrapper, {
						[v.a.isOverlayWrapper]: g,
						[v.a.wrapperVisible]: U,
						[v.a.joinOptimizationsM2]: !g && D && P
					})
				}, o.a.createElement(u.a, {
					className: v.a.pillContainer
				}, o.a.createElement(m.a, {
					className: Object(N.a)(v.a.pillButton, {
						[v.a.isNightMode]: s
					}),
					onClick: W,
					variant: m.b.BUTTON
				}, o.a.createElement(p.a, {
					iconsKey: t,
					shouldShowPresenceDot: !0,
					memberIconClassName: Object(N.a)(v.a.memberIcon, {
						[v.a.isNightMode]: s
					}),
					presenceDotOutlineClassName: Object(N.a)(v.a.presenceDotOutlineClass, {
						[v.a.isNightMode]: s
					})
				}), o.a.createElement("span", {
					className: Object(N.a)(v.a.newCommentsText, {
						[v.a.isNightMode]: s
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
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
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
						const e = Object(l.a)(t, p, !0);
						O.current = i()(e, n)
					}), a.a.createElement("div", {
						className: Object(o.a)(m.a.membersIcons, j)
					}, O.current.map(({
						color: e,
						image: t
					}, r) => {
						return r === n - 1 && u ? a.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: r
						}, a.a.createElement("img", {
							className: Object(o.a)(m.a.memberIcon, s),
							src: t,
							style: {
								backgroundColor: e
							}
						}), a.a.createElement(b, {
							showPresence: !0,
							outlineClassName: c
						})) : a.a.createElement("img", {
							className: Object(o.a)(m.a.memberIcon, s),
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
				return p
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./node_modules/lodash/noop.js"),
				o = s.n(a),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				l = s("./src/realtime/GQLSubscription/async.tsx"),
				d = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				u = s("./src/reddit/hooks/useClassNameOnMount.ts");
			var m = s("./src/reddit/components/ReadingIndicator/index.m.less"),
				b = s.n(m);
			const p = e => e > 9999 ? Object(r.b)(e) : e.toString();
			t.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: t,
				isWriteLoadTest: s,
				postId: r
			}) => {
				const a = Object(c.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: r
					}), [r]),
					m = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...a,
								category: "USER_IS_READING_POST"
							}
						}
					}), [r]),
					f = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...a,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [r]),
					j = Object(c.useRef)(null),
					O = Object(c.useRef)(null),
					_ = Object(c.useRef)(0),
					[h, N] = Object(c.useState)(0),
					I = Object(c.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, s = () => {
							O.current && clearTimeout(O.current), O.current = setTimeout(() => {
								N(0), g(null), O.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							_.current ? (N(_.current), _.current = null, j.current = n(), s()) : j.current = null
						}, 2e3);
						j.current ? _.current = t : (N(t), _.current = null, j.current = n(), s())
					}, []),
					x = Object(c.useRef)(0),
					[C, g] = Object(c.useState)(null),
					v = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(C && g(null));
					if (h >= 5) return x.current = h, void(C || g(Date.now()));
					if (!C) return;
					const t = Date.now() - C;
					t >= 1e4 ? g(null) : v.current = setTimeout(() => g(null), 1e4 - t)
				}, [C, e, h]);
				const {
					className: E,
					shouldMount: y,
					onTransitionEnd: R
				} = Object(u.a)({
					defaultClass: b.a.readingIndicator,
					addedClass: b.a.isDisplayed,
					mountCondition: !!C
				});
				return Object(c.useEffect)(() => () => {
					j.current && clearTimeout(j.current), O.current && clearTimeout(O.current), v.current && clearTimeout(v.current)
				}, []), i.a.createElement(i.a.Fragment, null, s && i.a.createElement(l.a, {
					variables: m,
					onData: o.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && i.a.createElement(l.a, {
					variables: f,
					onData: e ? I : o.a,
					queryKey: "usersReadingIndicator"
				}), y && i.a.createElement("div", {
					className: E,
					onTransitionEnd: R
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", p(x.current))], {
					hk: "3foy5g"
				}), i.a.createElement(d.a, {
					memberIconClassName: b.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					wrapperClassName: b.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/categories.tsx"),
				o = s("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, t) => `${o.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				i = Array.from({
					length: 8
				}).map((e, t) => `${o.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				l = [];
			t.a = r()((e, t = 3, s) => {
				if (!e || !t) return l;
				const n = s ? i : c,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: a.a[(r + t) % a.a.length],
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
				const [a, o] = Object(n.useState)(e), [c, i] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					s && i(!0)
				}, [s]), Object(n.useEffect)(() => {
					c && (s ? window.setTimeout(() => {
						o(Object(r.a)(e, t))
					}, 100) : o(e))
				}, [t, e, s, c]);
				const l = Object(n.useCallback)(() => {
					s || i(!1)
				}, [s]);
				return {
					className: a,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.53947b8c8b56000bcd03.js.map