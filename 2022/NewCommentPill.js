// https://www.redditstatic.com/desktop2x/NewCommentPill.4da2a3ff00b5b7920f6b.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
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
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/history/esm/history.js"),
				o = s("./src/lib/fastdom/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/realtime/GQLSubscription/async.tsx"),
				u = s("./src/reddit/actions/pages/comments.ts"),
				m = s("./src/reddit/components/CommentSort/index.tsx"),
				b = s("./src/reddit/components/Pill/index.tsx"),
				p = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				f = s("./src/reddit/components/PostContent/index.tsx"),
				j = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				O = s("./src/reddit/components/ReadingIndicator/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/elementIds.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/constants/tracking.ts"),
				N = s("./src/reddit/hooks/usePostContext.ts"),
				g = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				x = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/lib/classNames/index.ts"),
				R = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeCommentsPageKey/index.ts"),
				T = s("./src/reddit/components/NewCommentPill/index.m.less"),
				w = s.n(T);
			const D = (e, t) => s => ({
					source: "post",
					action: e,
					noun: "new_comment_pill",
					post: Object(v.I)(s, t.id),
					subreddit: Object(E.J)(s, {
						identifier: t.belongsTo
					})
				}),
				P = (e, {
					type: t,
					delta: s
				}) => "add" === t ? e + (s || 0) : 0;
			t.default = Object(h.c)(({
				commentId: e,
				sendEvent: t,
				postId: s,
				isNightMode: h,
				isOverlay: E
			}) => {
				const v = Object(a.useRef)(null),
					{
						post: T
					} = Object(N.a)() || {},
					[U, k] = Object(a.useReducer)(P, 0),
					M = Object(d.e)(x.a),
					A = Object(d.e)(e => Object(g.a)(e) || Object(g.c)(e)),
					[L, B] = Object(a.useState)(!1);
				Object(a.useEffect)(() => {
					if (!T || !A) return;
					f.d.addListeners(f.b, () => B(!0)), f.d.addListeners(f.a, () => B(!1))
				}, [T, A]);
				const [K, z] = Object(a.useState)(!1), W = Object(a.useRef)(), q = Object(a.useRef)(), J = Object(a.useRef)(2), X = Object(a.useMemo)(() => ({
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
				const F = Object(d.d)(),
					G = Object(a.useCallback)(() => {
						if (!T) return;
						t(D(C.c.CLICK, T)), z(!1), W.current && (clearTimeout(W.current), W.current = null), q.current && (q.current = null), J.current = 2, (() => {
							const t = new URLSearchParams(location.search);
							t.get(I.x) !== R.u.NEW && (t.set(I.x, R.u.NEW), F(Object(i.b)(Object(r.c)({
								pathname: location.pathname,
								search: t.toString()
							}, {
								isOverlay: E
							}))));
							const n = Object(S.a)(s, e, {
								hasSortParam: !0,
								sort: R.u.NEW
							});
							F(Object(u.commentsPageRemoveLoadedFull)({
								key: n
							})), F(Object(u.commentsPageDataRequested)(s, e, {
								hasSortParam: !0,
								sort: R.u.NEW
							}, R.u.NEW))
						})(), o.a.read(() => {
							const e = E ? document.getElementById(_.d) : window,
								t = document.getElementById(m.a);
							if (e && t) {
								const s = E ? t.offsetTop : t.offsetTop - 50;
								o.a.write(() => e.scrollTo({
									top: s,
									behavior: "smooth"
								}))
							}
						}), v.current = setTimeout(() => k({
							type: "reset"
						}), 1e3)
					}, [T]);
				Object(a.useEffect)(() => {
					const e = J.current <= 0;
					if (!U || e) return;
					const t = Date.now();
					(!q.current || t - q.current >= 25e3) && z(!0)
				}, [U]), Object(a.useEffect)(() => (K && T && (W.current = setTimeout(() => {
					z(!1), q.current = Date.now(), J.current -= 1
				}, 5e3), t(D(C.c.VIEW, T))), () => {
					W.current && clearTimeout(W.current)
				}), [K, t]);
				const H = Object(a.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && k({
						type: "add",
						delta: t
					})
				}, []);
				return M ? c.a.createElement(c.a.Fragment, null, c.a.createElement(l.a, {
					variables: X,
					onData: H,
					queryKey: "topLevelCommentCountChange"
				}), c.a.createElement("div", {
					className: Object(y.a)(w.a.wrapper, {
						[w.a.isOverlayWrapper]: E,
						[w.a.wrapperVisible]: K,
						[w.a.joinOptimizationsM2]: !E && A && L
					})
				}, c.a.createElement(b.a, {
					className: w.a.pillContainer
				}, c.a.createElement(p.a, {
					className: Object(y.a)(w.a.pillButton, {
						[w.a.isNightMode]: h
					}),
					onClick: G,
					variant: p.b.BUTTON
				}, c.a.createElement(j.a, {
					iconsKey: s,
					shouldShowPresenceDot: !0,
					shouldUseColoredSilhouetteIcons: !0,
					memberIconClassName: Object(y.a)(w.a.memberIcon, {
						[w.a.isNightMode]: h
					}),
					presenceDotOutlineClassName: Object(y.a)(w.a.presenceDotOutlineClass, {
						[w.a.isNightMode]: h
					})
				}), c.a.createElement("span", {
					className: Object(y.a)(w.a.newCommentsText, {
						[w.a.isNightMode]: h
					})
				}, U > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(O.formatPresenceNumber)(U))], {
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
				d = s.n(c),
				i = s("./src/reddit/helpers/getFakeUserIcons.ts"),
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
						numIconsToDrawFrom: h = (O ? p : f),
						wrapperClassName: _
					} = e, I = Object(r.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(i.a)(t, h, O);
						I.current = d()(e, n)
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
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./node_modules/lodash/noop.js"),
				a = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				i = s("./src/realtime/GQLSubscription/async.tsx"),
				l = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
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
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!E
				}), w = Object(b.a)();
				return Object(c.useEffect)(() => {
					S && w(Object(u.q)(r, C))
				}, [w, S, r]), Object(c.useEffect)(() => () => {
					h.current && clearTimeout(h.current), _.current && clearTimeout(_.current), y.current && clearTimeout(y.current)
				}, []), d.a.createElement(d.a.Fragment, null, s && d.a.createElement(i.a, {
					variables: p,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && d.a.createElement(i.a, {
					variables: O,
					onData: e ? g : a.a,
					queryKey: "usersReadingIndicator"
				}), S && d.a.createElement("div", {
					className: R,
					onTransitionEnd: T
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", j(x.current))], {
					hk: "3foy5g"
				}), d.a.createElement(l.a, {
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
				d = Array.from({
					length: 8
				}).map((e, t) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				i = [];
			t.a = r()((e, t = 3, s) => {
				if (!e || !t) return i;
				const n = s ? d : c,
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
				const [o, a] = Object(n.useState)(e), [c, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					s && d(!0)
				}, [s]), Object(n.useEffect)(() => {
					c && (s ? window.setTimeout(() => {
						a(Object(r.a)(e, t))
					}, 100) : a(e))
				}, [t, e, s, c]);
				const i = Object(n.useCallback)(() => {
					s || d(!1)
				}, [s]);
				return {
					className: o,
					shouldMount: c,
					onTransitionEnd: i
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.4da2a3ff00b5b7920f6b.js.map