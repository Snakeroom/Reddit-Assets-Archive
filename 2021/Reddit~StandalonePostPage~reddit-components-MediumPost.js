// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-MediumPost.971327644f2211adc480.js
// Retrieved at 9/1/2021, 12:30:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-MediumPost"], {
		"./src/lib/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(n.freeze)({
				modifiers: []
			});

			function c(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", a.modifiers)), t
			}

			function i(e) {
				const [t, r] = Object(s.useState)(null), [a, i] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), f = Object(s.useCallback)(() => m(!1), []), b = Object(s.useCallback)(() => m(!u), [u]), v = Object(s.useMemo)(() => {
					const t = c(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: g,
					update: O
				} = Object(o.a)(t, a, v);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: f,
					popperProps: {
						ref: i,
						style: g.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: r
					},
					toggle: b,
					visible: u,
					update: O
				}), [l, h, i, f, p, g, t, r, b, u, O])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/lodash/every.js"),
				s = r.n(n);

			function o(e) {
				let t = null,
					r = null;
				return (...n) => (null !== t && n.length === t.length && s()(n, (e, r) => e === t[r]) || (t = n, r = e(...n)), r)
			}
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(s("awardSheetInfoRequested")),
				a = Object(n.a)(s("manageableAwardsRequested")),
				c = Object(n.a)(s("createCommunityAward")),
				i = Object(n.a)(s("createGlobalAward")),
				d = Object(n.a)(s("createModAward")),
				l = Object(n.a)(s("createAwardFailed")),
				u = Object(n.a)(s("createAwardSuccessful")),
				m = Object(n.a)(s("removeCommunityAward")),
				p = Object(n.a)(s("disableAwardinCommunity")),
				f = Object(n.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/selectors/gild.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const v = Object(n.a)(b.L),
				h = Object(n.a)(b.f),
				g = () => async (e, t) => {
					const n = t();
					e(h()), Object(i.b)(i.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(s()(n))
				}, O = Object(n.a)(b.K), y = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, s) => {
					const c = s(),
						i = e ? Object(u.a)(c, e) : void 0;
					n(O({
						award: i && i.isEnabled ? i : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const f = Object(p.G)(c, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(o.a)(r)) {
						const e = Object(m.H)(c, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, j = Object(n.a)(b.e), _ = Object(n.a)(b.J), w = () => async (e, t) => {
					const n = t(),
						o = Object(c.d)(n);
					if (Object(c.g)(n)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(j()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(o)(n)), Object(i.b)(i.a.GildingFlow)
				}, x = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/snoovatar/index.ts"),
				a = r("./src/reddit/reducers/features/avatar/index.ts"),
				c = r("./src/reddit/selectors/avatar.ts");
			Object(n.a)({
				features: {
					avatar: a.a
				}
			});
			const i = "SET_AVATAR_USER",
				d = Object(s.a)(i),
				l = (e, t, r) => async (n, s, {
					apiContext: a
				}) => {
					const i = Object(c.b)(s());
					await Object(o.e)(a(), e, t, r, i)
				}, u = () => async (e, t, {
					apiContext: r
				}) => {
					const n = await Object(o.d)(r());
					n.ok && e(d(n.body))
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/actions/login.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/users.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(d.a)(Object(c.h)(r)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(s.g)(a.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, r) => {
					const {
						clickSource: o,
						share: l,
						source: u
					} = e, m = r();
					o && Object(d.a)(Object(c.c)(o)(m)), Object(i.K)(m) ? await t(Object(s.h)(a.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(n.i)())
				}
			}
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, r) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts");
			var c = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(() => Promise.all([r.e("vendors~RealtimeGQLSubscriptionAsync"), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
				}),
				i = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = r("./src/reddit/hooks/usePrevious.ts");
			const l = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var u = r("./src/reddit/components/CountAnimation/index.m.less"),
				m = r.n(u);
			var p;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(p || (p = {}));
			const f = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: r,
					incrementDelta: o,
					initialDelay: a,
					initialDisplayCount: u,
					inViewPortAnimatingCallbackOnce: p,
					isLoadTestOnly: b,
					onDataCB: v,
					postId: h,
					queryKey: g,
					queryVariables: O,
					shouldDisjointAnimation: y,
					subsequentRecurringDelay: j
				} = e, [_, w] = Object(n.useState)(!1), [x, C] = Object(n.useState)(!0), [I, k] = Object(n.useState)([]), [E, A] = Object(n.useState)(l(u).reverse()), P = Object(n.useRef)(!1), S = Object(n.useRef)(null), T = Object(n.useRef)(e => {}), N = Object(n.useRef)();
				T.current = Object(n.useCallback)(e => {
					let r = e || o();
					const n = [...E].reverse().join("");
					let s = parseInt(n) + r;
					s > t && (r = t - parseInt(n), s = t);
					const a = l(s).reverse();
					w(!1), k(E), A(a), C(!1), N.current = setTimeout(() => {
						w(!0)
					}, 0)
				}, [t, o, E]);
				const F = Object(n.useRef)(() => {}),
					R = Object(n.useRef)(),
					M = Object(n.useRef)();
				F.current = Object(n.useCallback)(() => {
					M.current = setTimeout(() => {
						T.current();
						const e = [...I].reverse().join("");
						parseInt(e) < t && F.current()
					}, j())
				}, [t, j, I]);
				const D = Object(n.useRef)(0),
					G = Object(n.useRef)(!1),
					U = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: r
							} = e, n = 1 !== r;
							t ? (G.current = !0, P.current || (P.current = !0, R.current = setTimeout(() => {
								T.current(), F.current()
							}, a())), D.current > 0 && (T.current(D.current), D.current = 0)) : n && (G.current = !1)
						})
					}, []);
				Object(i.a)(S, U);
				const [L, B] = Object(n.useState)(!1), V = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? B(!0) : n && B(!1)
					})
				}, []), z = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(i.a)(S, V, z.current);
				const W = Object(d.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== W && W !== t) {
						const e = t - W;
						G.current ? (T.current(e), p && p()) : D.current += e
					}
					return () => {
						clearTimeout(R.current), clearTimeout(M.current), clearTimeout(N.current)
					}
				}, [t]);
				const q = Object(n.useCallback)(() => C(!0), [C]),
					K = 0 === I.length,
					H = x || K,
					Y = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, r));
				return s.a.createElement(s.a.Fragment, null, !b && s.a.createElement("div", {
					className: m.a.countAnimation
				}, E.map((e, t) => {
					const r = ((e, t) => {
						let r = Math.abs(e);
						const n = Math.abs(t),
							s = [r];
						if (r === n) return s;
						let o = !0;
						for (; o;) ++r > 9 && (r = 0), s.push(r), r === n && (o = !1);
						return s
					})(I[t] || 0, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: m.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: q,
						style: _ && I.length > 0 && !x ? {
							transform: `translateY(-${y&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(y?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, H ? s.a.createElement("span", {
						className: m.a.digitDelta
					}, e) : r.map((e, t) => {
						const n = 0 === t || t === r.length - 1;
						if (!y || y && n) return s.a.createElement("span", {
							className: m.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), s.a.createElement("span", {
					className: m.a.srOnly,
					role: "screen-reader"
				}, [...E].reverse().join(""))), s.a.createElement("span", {
					ref: S
				}), L && s.a.createElement(c, {
					variables: O,
					onData: b ? f : v,
					queryKey: g,
					uniqueKey: Y.current
				}))
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, r) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/noop.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				c = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => a.a.createElement(c.i, {
				className: l.a.modalHeader
			}, a.a.createElement(c.q, null, e.title), a.a.createElement(i.a, {
				onClick: e.onClosePressed || s.a
			}, a.a.createElement(c.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = r.n(s);
			const a = n.a.div("Wrapper", o.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, r) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/Flair/index.tsx"),
				i = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(i);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(c.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, n.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, r) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/lodash/once.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(i.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = s()((e = p) => Object(c.a)({
					getComponent: () => Object(l.a)(() => Promise.all([r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("FlairEdit")]).then(r.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/memoizeByReference/index.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				m = r("./src/reddit/helpers/trackers/userFlair.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/selectors/moderatorPermissions.ts"),
				b = r("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				v = r("./src/reddit/components/Flair/index.tsx"),
				h = r("./src/reddit/controls/RadioInput/index.tsx"),
				g = r("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				y = r("./src/reddit/icons/svgs/Search/index.tsx"),
				j = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				_ = r.n(j);
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: r
					} = this.props, {
						searchQuery: s
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), c = !!r && a.some(e => e.id === r);
					return o.a.createElement("div", {
						className: _.a.container
					}, o.a.createElement("div", {
						className: _.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: _.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), o.a.createElement(y.a, {
						className: _.a.searchIcon
					})), o.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, a.map((e, t) => {
						const n = Object(u.c)(e),
							s = r === e.id || !c && 0 === t;
						return o.a.createElement(g.a, {
							className: _.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, o.a.createElement(v.b, {
							className: _.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(O.a, {
							className: _.a.pencil
						}))
					})))
				}
			}
			var x = r("./src/reddit/components/FlairSearch/index.m.less"),
				C = r.n(x);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				k = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.g
				}),
				E = Object(a.b)(k);
			t.a = E(e => {
				const {
					flairTemplateType: t,
					flair: r,
					className: s,
					onChange: a,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: v
				} = e, h = Object(p.a)(), g = d && r && r.templateId && d[r.templateId] || void 0, O = Object(b.a)(), y = r || I(g);
				return o.a.createElement("div", {
					className: Object(i.a)(s, C.a.container)
				}, d && l && o.a.createElement(w, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								r = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), a(r)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), y && g && (v || g.textEditable) && o.a.createElement("div", {
					className: C.a.flairEditSection
				}, o.a.createElement("div", {
					className: C.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && o.a.createElement("div", {
					className: C.a.restrictionHintText
				}, Object(u.k)(g)), o.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: y,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let r = e;
						t && (r = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(r)
					},
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = r.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, a] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? s.a.createElement("div", i({
					className: Object(o.a)(c.a.tooltip, {
						[c.a.visible]: r
					})
				}, t.popperProps), t.children, r && s.a.createElement("div", i({
					className: c.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/lodash/isEqual.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/flair.ts"),
				a = r("./src/reddit/helpers/flair.ts"),
				c = r("./src/reddit/models/Flair/index.ts");
			const i = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, r) => {
				if (r && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const n = e && t.templateId ? e[t.templateId] : void 0;
				if (!n) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const c = Object(a.g)(t).length;
				return 0 === c ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : c > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : s()(r, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, r) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/reddit/constants/elementClassNames.ts"),
				u = r("./src/reddit/controls/Score/index.tsx"),
				m = r("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/VerticalVotes/index.m.less"),
				g = r.n(h);
			const O = Object(c.c)({
					isNightMode: v.X,
					isAnimatingUpvotePostId: b.k
				}),
				y = Object(a.b)(O),
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				_ = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: f.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t,
							triggerCelebratoryMoment: r
						} = this.props;
						t(f.a.upvoted);
						const n = e !== f.a.upvoted;
						if (this.setState({
								voted: n ? f.a.upvoted : f.a.notVoted
							}), n && r) {
							const {
								postId: e
							} = this.props;
							r(!0, e)
						}
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(f.a.downvoted), this.setState({
							voted: e !== f.a.downvoted ? f.a.downvoted : f.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: r,
							isNightMode: s,
							isAnimatingUpvotePostId: a,
							isVoteCountAnimation: c,
							shouldShowScore: d = !0,
							upvoteButtonClassName: p,
							containerRef: b,
							model: v,
							postId: h
						} = e,
						O = j(e),
						y = _(e),
						w = v.voteState,
						x = a === h;
					return o.a.createElement("div", {
						className: Object(i.a)(g.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: b
					}, O ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": w === f.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: s,
						onClick: this.onUpvote,
						voteState: w
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": w === f.a.upvoted,
						className: Object(i.a)(l.n, p, {
							[g.a.bounceUp]: x
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: w
					})), !e.compact && d && o.a.createElement(u.a, {
						className: Object(i.a)(g.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: w,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!c,
						isCountAnimShadowTestEnabled: !!r,
						postId: h
					}), y ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": w === f.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: s,
						onClick: this.onDownvote,
						voteState: w
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": w === f.a.downvoted,
						className: Object(i.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: w
					})))
				}
			}
			const x = Object(d.a)(y(w));
			t.a = x
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, r) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return P
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return N
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, r) => n => {
				const s = e(n),
					a = t(n),
					c = !s && a;
				return Object(o.a)(r.baseClassName, n.className, {
					[r.mIsInteractive]: a,
					[r.mIsActive]: s,
					[r.mIsVoteable]: c
				})
			};
			var i = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = r("./src/reddit/models/Vote/index.ts"),
				l = r("./src/reddit/controls/Downvote/index.m.less"),
				u = r.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === d.a.downvoted,
				f = c(p, ({
					interactive: e
				}) => !1 !== e, m);
			var b = e => s.a.createElement(i.a, {
					className: f(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				v = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				h = r("./src/reddit/controls/Upvote/index.m.less"),
				g = r.n(h);
			const O = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				y = ({
					voteState: e
				}) => e === d.a.upvoted,
				j = c(y, ({
					interactive: e
				}) => !1 !== e, O);
			var _ = e => s.a.createElement(v.a, {
					className: j(e),
					compact: e.compact,
					isFilled: y(e)
				}),
				w = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				x = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				k = r.n(I);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => Object(o.a)({
					[k.a.compact]: e.compact,
					[k.a.dark]: Object(x.b)(Object(w.a)(e)),
					[k.a.nightmode]: e.isNightMode
				}),
				P = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...a
					} = e;
					return s.a.createElement("button", E({}, a, {
						className: Object(o.a)(k.a.customDownvote, A(e), {
							[k.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				S = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...a
					} = e;
					return s.a.createElement("button", E({}, a, {
						className: Object(o.a)(k.a.customUpvote, A(e), {
							[k.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				T = b,
				N = _
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, r) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = r("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = r.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(i.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(c.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/keycodes.ts");
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props;
						t || this.state.value !== e && (r(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const s = e.key === o.b.ArrowUp,
							a = e.key === o.b.ArrowDown;
						if (s || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = n ? t.indexOf(n) : 0,
								a = t[((s ? o - 1 : o + 1) + t.length) % t.length];
							r(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (r, n) => {
						const o = 0 === n,
							a = r.props.value === t,
							c = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return s.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: a,
							tabIndex: c
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, r) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./node_modules/react/index.js"),
				i = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/components/CountAnimation/index.tsx"),
				m = r("./src/reddit/constants/colors.ts"),
				p = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				f = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = r("./src/reddit/helpers/trackers/post.ts"),
				v = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = r("./src/reddit/models/Vote/index.ts"),
				O = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				y = r("./src/reddit/selectors/meta.ts"),
				j = r("./src/reddit/controls/Score/index.m.less"),
				_ = r.n(j);
			const w = e => e.voteState === g.a.downvoted ? Object(h.a)(e).voteText.downvote : e.voteState === g.a.upvoted ? Object(h.a)(e).voteText.upvote : Object(f.a)(Object(p.a)(e)),
				x = () => 0,
				C = Object(d.b)(e => ({
					locale: Object(y.i)(e)
				})),
				I = Object(o.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : w(e)
						},
						{
							score: r,
							postId: o = "",
							locale: p,
							isVoteCountAnimation: f,
							isCountAnimShadowTestEnabled: h
						} = e,
						g = Object(d.d)(),
						y = null == p ? void 0 : p.startsWith("en"),
						j = e.isScoreHidden ? y ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : i.a.createElement("span", {
							className: _.a.dot
						}, "•") : Object(a.b)(r),
						C = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && g(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [g, o]),
						I = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						k = Object(v.a)(),
						E = Object(c.useCallback)(() => {
							k(Object(b.m)(o))
						}, [k, o]),
						A = !e.isScoreHidden && f && r < O.a;
					return i.a.createElement("div", {
						className: Object(s.a)(_.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, (A || h) && i.a.createElement(i.a.Fragment, null, i.a.createElement(u.b, {
						initialDisplayCount: r,
						countToUpperBound: r,
						initialDelay: x,
						subsequentRecurringDelay: x,
						incrementDelta: x,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: E,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: I.current,
						onDataCB: C,
						isLoadTestOnly: h && !A
					})), !A && j)
				});
			t.a = C(I)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/endpoints/snoovatar/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			const i = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
				endpoint: `${n.a.snoovatarUrl}/api/account`,
				method: s.ib.GET
			}), d = async (e, t, r, i, d) => Object(o.a)(Object(a.a)(e, [c.a]), {
				endpoint: `${n.a.snoovatarUrl}/api/snoovatar`,
				method: s.ib.POST,
				headers: {
					"Content-Type": "application/json ",
					"X-CSRF-Token": d
				},
				data: {
					accessory_ids: t,
					styles: r,
					...i
				}
			}), l = {
				id: "achievement_head_accessory_012",
				section_id: "head_accessories",
				assets: [{
					accessory_id: "achievement_head_accessory_012",
					slot: 80,
					image_url: "https://i.redd.it/snoovatar/accessory_assets/r13ZdtEfXFM_achievement_head_accessory_012.svg"
				}],
				customizable_classes: [],
				capability_required: null,
				state: "ENABLED",
				tags: ["achievement"],
				available_for_closet: !0
			}, u = {
				id: "achievement_body_012",
				section_id: "top_body_tops",
				assets: [{
					accessory_id: "achievement_body_012",
					slot: 40,
					image_url: "https://i.redd.it/snoovatar/snoo_assets/XvgCbVDmabY_achievement_body_012.svg"
				}],
				customizable_classes: ["body"],
				capability_required: null,
				state: "ENABLED",
				tags: ["achievement"],
				available_for_closet: !0
			}, m = {
				id: "achievement_body_bottom_012",
				section_id: "bottom_body_bottoms",
				assets: [{
					accessory_id: "achievement_body_bottom_012",
					slot: 30,
					image_url: "https://i.redd.it/snoovatar/snoo_assets/_Fx-Iq6Aueg_achievement_body_bottom_012.svg"
				}],
				customizable_classes: ["body"],
				capability_required: null,
				state: "ENABLED",
				tags: ["achievement"],
				available_for_closet: !0
			}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return h
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => s => ({
					...c(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? i(r) : null
				}),
				f = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? i(r) : null
				}),
				b = (e, t, r) => n => ({
					...c(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: i(e),
					profile: s.profileById(n, t),
					subreddit: s.subredditById(n, t)
				}),
				v = (e, t) => b(e, t, "disable_in_community"),
				h = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return v
			})), r.d(t, "clickCancelHideAward", (function() {
				return h
			})), r.d(t, "clickAwardReportFlow", (function() {
				return O
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return j
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickReportAward", (function() {
				return x
			})), r.d(t, "clickCancelReportAward", (function() {
				return C
			})), r.d(t, "clickConfirmReportAward", (function() {
				return I
			})), r.d(t, "viewGildModalEvent", (function() {
				return k
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return E
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return A
			})), r.d(t, "clickMessageInputEvent", (function() {
				return P
			})), r.d(t, "typeMessageInputEvent", (function() {
				return S
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return T
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return M
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), r.d(t, "clickFilterEvent", (function() {
				return L
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...s.defaults(e),
					comment: t ? s.comment(e, t) : void 0,
					correlationId: Object(i.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(c.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				O = g("award_hovercard_report"),
				y = g("cancel_award_hovercard_report"),
				j = g("flag_award"),
				_ = g("cancel_flag_award"),
				w = g("confirm_flag_award"),
				x = g("report_community_award"),
				C = g("cancel_report_community_award"),
				I = g("confirm_report_community_award"),
				k = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				E = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				A = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				G = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				U = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: s
				}) => o => ({
					...u(o, s),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(c.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				L = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				B = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return w
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, v = o.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = b ? h : c.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = r ? Object(p.a)(r) ? "comment" : "post" : void 0, y = l || c.t(e), j = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === y)[0], _ = t.offerContext || (v && 0 === v.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(j, b)), w = j ? Math.round(1e4 * (j.baselinePennies - j.pennies) / j.baselinePennies) / 100 : 0, x = j ? Math.round(1e4 * (j.coins - j.baselineCoins) / j.coins) / 100 : 0, C = j ? j.baselinePennies !== j.pennies ? `${w}_percent_price` : j.baselineCoins !== j.coins ? `${x}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? n.wb : j ? j.pennies : void 0;
					return {
						...i.defaults(e),
						comment: r ? i.comment(e, r) : null,
						correlationId: c.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? i.post(e, r) : null,
						screen: i.screen(e),
						subreddit: r ? i.subreddit(e) : null,
						goldPurchase: {
							...v ? Object(f.a)(v) : null,
							type: g,
							gildedContent: b,
							contentType: O,
							numberCoins: j ? j.coins : void 0,
							offerContext: _,
							offerType: C
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: I
						},
						purchase: {
							priceMicros: I
						}
					}
				},
				v = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				y = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				j = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t, r) => n => {
					const s = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
							source: e ? d.GiveGold : c.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				w = e => t => {
					var r;
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (r = t.platform.currentPage) || void 0 === r ? void 0 : r.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = r("./src/reddit/selectors/platform.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					profile: c.profile(e),
					screen: c.screen(e),
					subreddit: c.subreddit(e)
				}),
				d = (e, t, r) => n => ({
					source: Object(a.h)(n) || r ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...i(n),
					post: c.post(n, e)
				}),
				l = (e, t, r, n) => s => {
					const a = r ? c.comment(s, r) : null,
						{
							sortToUse: i
						} = Object(o.a)(s, e);
					return {
						...d(e, t, n)(s),
						comment: a,
						listing: {
							sort: i
						}
					}
				},
				u = (e, t) => r => {
					const n = c.currentPost(r);
					return n ? d(n.id, e, t)(r) : {
						source: Object(a.h)(r) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...i(r)
					}
				},
				m = (e, t) => r => Object(s.a)({
					...d(e, t)(r),
					...c.defaults(r)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...i(t),
					post: c.currentPost(t),
					userSubreddit: c.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return a
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "k", (function() {
				return f
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "l", (function() {
				return h
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				c = (e, t) => r => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					...o(r)
				}),
				i = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				d = (e, t) => r => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				l = (e, t) => r => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				u = (e, t) => r => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				m = (e, t) => r => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					comment: Object(s.comment)(r, t),
					...o(r)
				}),
				p = (e, t) => r => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(r, t),
					post: Object(s.post)(r, t),
					...o(r)
				}),
				f = (e, t) => r => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					...o(r)
				}),
				b = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(r, t),
					subreddit: Object(s.subredditByPostOrCommentId)(r, t)
				}),
				v = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(r, t),
					post: Object(s.post)(r, t),
					subreddit: Object(s.subredditByPostOrCommentId)(r, t)
				}),
				h = (e, t, r, n) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.post)(o, r),
					subreddit: Object(s.subredditByPostOrCommentId)(o, r),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(s.comment)(o, r)
					}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "a", (function() {
				return j
			}));
			var n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/avatarMarketing.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const c = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				i = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(s.a)(t) && Object.assign(r, c), r
				},
				d = (e, t) => r => {
					const {
						id: n
					} = Object(a.ob)(r, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.defaults(r),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...o.defaults(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...o.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					...o.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.defaults(e),
					...c
				}),
				f = e => t => r => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.defaults(r),
					snoovatar: o.snoovatarActiveForBuilderEvent(r),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				b = f("view"),
				v = f("click"),
				h = f("dismiss"),
				g = (e, t, r) => () => n => ({
					source: e,
					action: t,
					noun: r,
					...o.defaults(n),
					snoovatar: o.snoovatarActiveForBuilderEvent(n)
				}),
				O = g("anniversary_achievement", "view", "anniversary_achievement"),
				y = g("anniversary_achievement", "click", "close"),
				j = g("anniversary_achievement", "click", "equip")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/selectors/comments.ts"),
				o = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = a.subreddit(e),
					r = null == t ? void 0 : t.id;
				if (!r) return;
				const s = Object(i.d)(e, {
						subredditId: r
					}),
					d = Object(c.i)(e),
					l = d ? Object(o.d)(e, {
						subredditId: r,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == s ? void 0 : s.displaySettings.isUserEnabled) || !(null == s ? void 0 : s.applied)) return {
					isActive: !1,
					...u
				};
				const m = s.applied.templateId,
					p = Object(n.g)(s.applied);
				return p ? {
					id: m,
					title: p,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...a.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: r,
						achievementFlair: s
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...a.defaults(t),
						userFlair: {
							id: null == r ? void 0 : r.id,
							title: r && Object(n.g)(r),
							isActive: r && !!r,
							achievementFlairId: null == s ? void 0 : s.type,
							achievementFlairTitle: null == s ? void 0 : s.name,
							isLocked: null == s ? void 0 : s.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...a.defaults(e)
				}),
				p = (e, t, r) => c => {
					const i = Object(s.e)(c, {
							commentId: e
						}),
						d = Object(o.d)(c, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(c),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == i ? void 0 : i.templateId,
							title: i ? Object(n.g)(i) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				f = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.defaults(e)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				s = r("./node_modules/react/index.js"),
				o = r("./src/lib/hooks/useTooltip.ts");
			const a = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function c(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, a))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				i = r.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), i.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", d({}, r, {
				className: Object(o.a)(i.a.compactDownvoteWrapper, r.className)
			}), s.a.createElement(l, {
				className: i.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, r, {
				className: Object(o.a)(i.a.downvoteWrapper, r.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = r.n(a);
			const i = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				i = r.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), i.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", d({}, r, {
				className: Object(o.a)(i.a.compactUpvoteWrapper, r.className)
			}), s.a.createElement(l, {
				className: i.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, r, {
				className: Object(o.a)(i.a.upvoteWrapper, r.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				c = r.n(a);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({}, e, {
				className: Object(o.a)(c.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const o = {
				[n.Powerups]: () => s.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => s.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, c;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(c || (c = {}));
			const i = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					s = "new_purchaser" === r,
					o = "repeat_purchaser" === r;
				return t ? c.GildFlow : n ? c.LowCoinBalance : s ? c.NewUserTargetedOffer : o ? c.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var n, s, o = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(s || (s = {}));
			const c = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [n.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var i = (e = c, t) => {
					switch (t.type) {
						case a.a:
							return {
								...t.payload
							};
						default:
							return e
					}
				},
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts");
			const m = {
				active: !1,
				assetUrls: null
			};
			var p = (e = null, t) => {
				var r;
				switch (t.type) {
					case d.o:
						const {
							avatarMarketingEvent: n
						} = t.payload;
						return n ? function(e) {
							const {
								startsAt: t,
								endsAt: r,
								webAssetUrls: n
							} = e, s = t && new Date(t) <= new Date, o = !!r && new Date(r) < new Date, a = n || null;
							return {
								active: !!s && !o && !!a,
								assetUrls: a
							}
						}(n) : m;
					case l.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === u.a.SNOOVATAR_MODAL ? m : e;
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: p,
				avatarUser: i
			})
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var a = r("./node_modules/icepick/icepick.js"),
				c = r("./src/reddit/actions/economics/powerups/constants.ts");
			const i = {},
				d = {};
			t.a = Object(n.c)({
				subredditAchievements: (e = o, t) => {
					switch (t.type) {
						case s.pb:
							const {
								subredditId: r, subredditAchievementFlairs: n
							} = t.payload, o = n.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[r] || {});
							return {
								...e, [r]: o
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = i, t) => {
					var r, n, s;
					switch (t.type) {
						case c.d: {
							const {
								id: o,
								userAchievementFlairsByRedditorIds: a
							} = t.payload;
							let c = e[o] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of a) {
								const o = t.map(({
										type: e
									}) => e),
									a = (null === (r = t.find(({
										isPreferred: e
									}) => e)) || void 0 === r ? void 0 : r.type) || (null === (n = t[0]) || void 0 === n ? void 0 : n.type),
									i = null === (s = t.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === s ? void 0 : s.type;
								c = {
									...c,
									[e]: {
										achievementTypes: o,
										preferredType: a,
										supporterType: i
									}
								}
							}
							return {
								...e,
								[o]: c
							}
						}
						case c.f: {
							const {
								subredditId: r,
								userId: n,
								achievementType: s
							} = t.payload;
							return Object(a.setIn)(e, [r, n, "pendingPreferredType"], s)
						}
						case c.g: {
							const {
								subredditId: r,
								userId: n,
								achievementType: s
							} = t.payload;
							return Object(a.updateIn)(e, [r, n], e => ({
								...e,
								preferredType: s,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return Object(a.setIn)(e, [r, n, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = d, t) => {
					switch (t.type) {
						case c.h: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									n = e.powerups;
								if (!t || !n) return;
								const s = n.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: s.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = r("./src/reddit/actions/modQueue/constants.ts"),
				c = r("./src/reddit/actions/pages/constants.ts"),
				i = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				l = r("./src/reddit/actions/pages/subreddit.ts"),
				u = r("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case i.PAGE_LOADED:
					case d.PAGE_LOADED:
					case c.b:
					case c.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case a.i:
					case a.f:
					case a.m:
					case a.p:
					case a.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, s = {
							...e
						};
						return Object.keys(n).forEach(e => {
							s[e] || (s[e] = n[e])
						}), s
					}
					case u.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n,
								displaySettings: s
							}
						}
					}
					case o.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case u.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, s = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: s
							}
						}
					}
					case u.d: {
						const {
							subredditId: r,
							canAssignOwn: n
						} = t.payload, s = {
							...e[r].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: s
							}
						}
					}
					case u.q: {
						const r = t.payload,
							n = e[r.subredditId],
							s = e[r.subredditId].templates,
							o = e[r.subredditId].templateIds,
							a = {
								...s,
								[r.template.id]: r.template
							},
							c = [...o];
						return c.includes(r.template.id) || c.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...n,
								templates: a,
								templateIds: c
							}
						}
					}
					case u.g: {
						const r = t.payload,
							n = e[r.subredditId],
							o = e[r.subredditId].templates,
							a = e[r.subredditId].templateIds,
							c = s()(o, r.templateId),
							i = a.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...c
								},
								templateIds: i
							}
						}
					}
					case u.m:
					case u.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const s = t.author;
					return s && n[s] || null
				},
				s = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: s.a
				}
			});
			const o = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser
				},
				a = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser.csrf_token
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/avatar/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				i = Object(n.a)(a.c, e => {
					var t, r;
					const n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing;
					return (null == n ? void 0 : n.active) ? n.assetUrls && n.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				i = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					});
					return t === n.s.VoteCountOnly || t === n.s.CommentCountOnly || t === n.s.VoteAndCommentCount
				},
				d = e => {
					if (Object(a.c)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					});
					return t === n.s.VoteCountOnly || t === n.s.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.c)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					});
					return t === n.s.CommentCountOnly || t === n.s.VoteAndCommentCount
				},
				u = (e, {
					post: t
				}) => m(e, {
					postId: t.id
				}),
				m = (e, {
					postId: t
				}) => {
					const r = e.posts.models[t];
					if (Object(a.c)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c) return !1;
					const s = Object(o.d)(e, {
							experimentName: n.n
						}),
						i = null == s ? void 0 : s.variant;
					return i === n.s.VoteCountOnly || i === n.s.VoteAndCommentCount
				},
				p = (e, {
					postId: t
				}) => {
					const r = e.posts.models[t];
					if (Object(a.c)(e) || !r || r.isSponsored || r.numComments >= c) return !1;
					const s = Object(o.d)(e, {
							experimentName: n.n
						}),
						i = null == s ? void 0 : s.variant;
					return i === n.s.CommentCountOnly || i === n.s.VoteAndCommentCount
				},
				f = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.hb
					}) === n.tb.Enabled
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				c = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return v
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/commentSelector.ts"),
				a = r("./src/reddit/selectors/gold/giveAwards.ts"),
				c = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => e.awardSubType === s.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let s = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						s = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return u(s, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) : u(e, r, t),
				p = Object(n.a)((e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const s = Object(d.c)(e),
						a = l.find(e => e >= r),
						i = n ? Object(c.H)(e, {
							postId: n
						}) || Object(o.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: a,
						prefersReducedMotion: s,
						postOrComment: i
					})), e), {})
				}),
				f = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				b = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(i.ob)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return f(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				v = e => {
					const t = Object(a.b)(e),
						r = Object(a.a)(e);
					return f(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				o = r("./src/reddit/selectors/experiments/econ/index.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: c.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditAchievements) || void 0 === r ? void 0 : r[t] : null
				},
				d = (e, {
					subredditId: t,
					userId: r
				}) => {
					var n, s;
					return t && r ? null === (s = null === (n = e.features.powerups.subredditUserAchievements) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s[r] : null
				},
				l = Object(n.a)(d, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				u = Object(n.a)([i, l], (e, t) => e && t ? e[t] : null),
				m = Object(n.a)(d, e => null == e ? void 0 : e.supporterType),
				p = Object(n.a)([i, m], (e, t) => e && t ? e[t] : null),
				f = Object(n.a)([i, d], (e, t) => {
					if (!e) return [];
					const r = t ? t.achievementTypes : [],
						n = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === n
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = (e, {
					commentId: t
				}) => {
					const r = Object(s.a)(e, {
							commentId: t
						}),
						n = null == r ? void 0 : r.subredditId,
						a = null == r ? void 0 : r.authorId;
					return !(!n || !a) && !(!((e, {
						subredditId: t,
						userId: r
					}) => {
						var n, s, o;
						return t && r ? null === (o = null === (s = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === s ? void 0 : s[r]) || void 0 === o ? void 0 : o[t] : null
					})(e, {
						subredditId: n,
						userId: a
					}) || !Object(o.h)(e))
				}
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "v", (function() {
				return j
			})), r.d(t, "y", (function() {
				return _
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "d", (function() {
				return P
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.j)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				y = e => e.features.goldPurchase.payment.savedCards,
				j = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				w = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				x = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				E = e => e.features.goldPurchase.payment.stripeToken.pending,
				A = e => e.features.goldPurchase.payment.paypal.passthrough,
				P = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts"),
				a = r("./src/reddit/selectors/moderatorPermissions.ts"),
				c = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(c.a)({
				features: {
					userFlair: i.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				l = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				u = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				m = Object(n.a)((e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t
					});
					if (r) return {
						type: s.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const r = l(e, {
							subredditId: t
						}),
						n = m(e, {
							subredditId: t
						}),
						s = d(e, {
							subredditId: t
						});
					if (!r || !n || !s) return !1;
					if (s.applied) return !0;
					const o = Object(a.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: c
						} = n.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || o
					}) && c
				},
				f = (e, {
					subredditId: t
				}) => {
					if (!t) return !1;
					const r = p(e, {
							subredditId: t
						}),
						n = Object(o.g)(e, {
							subredditId: t
						});
					return r || n
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts");
			const s = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Kb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./src/lib/fastdom/index.ts"),
				o = r("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				c = "jsapi.consumer",
				i = "/r/redesign/wiki/jsapi";
			var d = r("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${c}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === c && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${n.a.redditUrl}${i}`, e))
					} catch (r) {
						return void console.error(a, `${n.a.redditUrl}${i}`, r)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, r) {
					const n = {
						name: e,
						props: t,
						element: r
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-MediumPost.971327644f2211adc480.js.map