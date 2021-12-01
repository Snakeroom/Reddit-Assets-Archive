// https://www.redditstatic.com/desktop2x/NewCommentPill.dcdcc2fba93c6799b89d.js
// Retrieved at 12/1/2021, 9:50:03 AM by Reddit Dataminer v1.0.0
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
				pillButton: "_1cubpGNEaCAVnpJl1KBPcO",
				isOverlayWrapper: "_17DaQdt4k4TJ6mwt56tklv",
				wrapperVisible: "ZLsbIthTKUHOvUiC24Rjy",
				memberIcon: "_2w3IfaLQEQVcXSaXJI2vBR"
			}
		},
		"./src/reddit/components/NewCommentPill/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "trackNewCommentPill", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/realtime/GQLSubscription/async.tsx"),
				u = s("./src/reddit/components/CommentSort/index.tsx"),
				m = s("./src/reddit/components/Pill/index.tsx"),
				b = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				p = s("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				f = s("./src/reddit/components/ReadingIndicator/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/constants/elementIds.ts"),
				h = s("./src/reddit/constants/tracking.ts"),
				I = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				C = s("./src/reddit/hooks/usePostContext.ts"),
				v = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/lib/classNames/index.ts"),
				y = s("./src/reddit/components/NewCommentPill/index.m.less"),
				E = s.n(y);
			const T = `?sort=${r.u.NEW}`,
				w = (e, t) => s => ({
					source: "post",
					action: e,
					noun: "new_comment_pill",
					post: Object(N.post)(s, t.id),
					subreddit: Object(x.I)(s, {
						identifier: t.belongsTo
					})
				}),
				R = (e, {
					type: t,
					delta: s
				}) => "add" === t ? e + (s || 0) : 0;
			t.default = Object(j.c)(({
				sendEvent: e,
				postId: t,
				isOverlay: s,
				intersectionRef: r
			}) => {
				const j = Object(a.useRef)(null),
					{
						post: x
					} = Object(C.a)() || {},
					N = Object(a.useRef)(null),
					[y, S] = Object(a.useReducer)(R, 0),
					P = Object(l.e)(v.a),
					[A, U] = Object(a.useState)(!1),
					[B, D] = Object(a.useState)(!0);
				Object(a.useEffect)(() => {
					N.current = r || null
				}, [r]);
				const k = Object(a.useCallback)(([e]) => {
					r && e.boundingClientRect.top < _.f && (D(!1), U(!1))
				}, [r]);
				Object(I.a)(N, k), Object(a.useEffect)(() => {
					if (!A || B) return;
					const e = () => {
							U(!1)
						},
						t = s ? document.getElementById(O.d) : document;
					return null == t || t.addEventListener("scroll", e), () => null == t ? void 0 : t.removeEventListener("scroll", e)
				}, [B, s, A]);
				const M = Object(a.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "COMMENT_COUNT_UPDATE",
								postID: t
							}
						}
					}), [t]),
					J = Object(l.d)(),
					z = Object(a.useCallback)(() => {
						if (!x) return;
						e(w(h.c.CLICK, x)), U(!1), (() => J(Object(i.b)(`${window.location.pathname}${T}`)))(), o.a.read(() => {
							const e = document.getElementById(u.a);
							if (e) {
								const t = e.offsetTop - 50;
								o.a.write(() => window.scrollTo({
									top: t,
									behavior: "smooth"
								}))
							}
						})
					}, [x]);
				Object(a.useEffect)(() => {
					y && U(!0)
				}, [y]), Object(a.useEffect)(() => {
					A && x ? (j.current && clearTimeout(j.current), e(w(h.c.VIEW, x))) : j.current = setTimeout(() => S({
						type: "reset"
					}), 1e3)
				}, [A, e, x]);
				const L = Object(a.useCallback)(e => {
					const {
						topLevelCommentCountChange: t
					} = e.subscribe.data;
					t && S({
						type: "add",
						delta: t
					})
				}, []);
				return P ? c.a.createElement(c.a.Fragment, null, c.a.createElement(d.a, {
					variables: M,
					onData: L,
					queryKey: "topLevelCommentCountChange"
				}), c.a.createElement("div", {
					className: Object(g.a)(E.a.wrapper, {
						[E.a.isOverlayWrapper]: s,
						[E.a.wrapperVisible]: A
					})
				}, c.a.createElement(m.a, {
					className: E.a.pillContainer
				}, c.a.createElement(b.a, {
					className: E.a.pillButton,
					onClick: z,
					variant: b.b.BUTTON
				}, c.a.createElement(p.a, {
					iconsKey: t,
					shouldShowPresenceDot: !0,
					shouldUseColoredSilhouetteIcons: !0,
					shouldOutlinePresenceDot: !0,
					memberIconClassName: E.a.memberIcon
				}), c.a.createElement("span", {
					className: E.a.newCommentsText
				}, y > 1 ? n.fbt._("{number of new comments} new comments", [n.fbt._param("number of new comments", Object(f.formatPresenceNumber)(y))], {
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
				l = s.n(c);

			function i() {
				return (i = Object.assign || function(e) {
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
					[n.TAB_GROUP]: l.a.tabGroup
				},
				u = (e, t) => {
					if (t !== n.BUTTON) return e ? l.a.active : l.a.inactive
				},
				m = ({
					active: e = !0,
					children: t,
					className: s,
					disabled: n = !1,
					onClick: r,
					variant: c,
					...m
				}) => o.a.createElement("button", i({}, m, {
					className: Object(a.a)(l.a.primaryButton, d[c], u(e, c), s),
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
				l = s.n(c),
				i = s("./src/reddit/helpers/getFakeUserIcons.ts"),
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
				_ = e => {
					const {
						iconsKey: t,
						memberIconClassName: s,
						numVisibleIcons: n = j,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: u,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: O = (_ ? p : f),
						wrapperClassName: h
					} = e, I = Object(r.useRef)([]);
					return Object(d.a)(() => {
						const e = Object(i.a)(t, O, _);
						I.current = l()(e, n)
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
							outlineClassName: Object(a.a)({
								[m.a.presenceDotClass]: c
							})
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
			t.a = _
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, s) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
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
				l = s.n(c),
				i = s("./src/realtime/GQLSubscription/async.tsx"),
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
					_ = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...o,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [r]),
					O = Object(c.useRef)(null),
					h = Object(c.useRef)(null),
					I = Object(c.useRef)(0),
					[C, v] = Object(c.useState)(0),
					x = Object(c.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, s = () => {
							h.current && clearTimeout(h.current), h.current = setTimeout(() => {
								v(0), y(null), h.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							I.current ? (v(I.current), I.current = null, O.current = n(), s()) : O.current = null
						}, 2e3);
						O.current ? I.current = t : (v(t), I.current = null, O.current = n(), s())
					}, []),
					N = Object(c.useRef)(0),
					[g, y] = Object(c.useState)(null),
					E = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(g && y(null));
					if (C >= 5) return N.current = C, void(g || y(Date.now()));
					if (!g) return;
					const t = Date.now() - g;
					t >= 1e4 ? y(null) : E.current = setTimeout(() => y(null), 1e4 - t)
				}, [g, e, C]);
				const {
					className: T,
					shouldMount: w,
					onTransitionEnd: R
				} = Object(m.a)({
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!g
				}), S = Object(b.a)();
				return Object(c.useEffect)(() => {
					w && S(Object(u.r)(r, C))
				}, [S, w, r]), l.a.createElement(l.a.Fragment, null, s && l.a.createElement(i.a, {
					variables: p,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && l.a.createElement(i.a, {
					variables: _,
					onData: e ? x : a.a,
					queryKey: "usersReadingIndicator"
				}), w && l.a.createElement("div", {
					className: T,
					onTransitionEnd: R
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", j(N.current))], {
					hk: "3foy5g"
				}), l.a.createElement(d.a, {
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
				l = Array.from({
					length: 8
				}).map((e, t) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				i = [];
			t.a = r()((e, t = 3, s) => {
				if (!e || !t) return i;
				const n = s ? l : c,
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
				const [o, a] = Object(n.useState)(e), [c, l] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					s && l(!0)
				}, [s]), Object(n.useEffect)(() => {
					c && (s ? window.setTimeout(() => {
						a(Object(r.a)(e, t))
					}, 100) : a(e))
				}, [t, e, s, c]);
				const i = Object(n.useCallback)(() => {
					s || l(!1)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NewCommentPill.dcdcc2fba93c6799b89d.js.map